from __future__ import annotations

from datetime import datetime
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import json
import os
from pathlib import Path
import sqlite3
import socket
from urllib.parse import urlparse
import webbrowser


HOST = os.getenv("APP_HOST", "0.0.0.0")
# Railway/Railpack injects PORT; APP_PORT remains as local fallback.
PORT = int(os.getenv("PORT", os.getenv("APP_PORT", "8000")))
PROJECT_DIR = Path(__file__).resolve().parent
DB_PATH = PROJECT_DIR / "santech.db"


def get_db() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    with get_db() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS estimates (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_name TEXT NOT NULL,
                phone TEXT NOT NULL,
                total REAL NOT NULL,
                created_at TEXT NOT NULL
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS estimate_items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                estimate_id INTEGER NOT NULL,
                item_id TEXT NOT NULL,
                item_name_uz TEXT NOT NULL,
                item_name_ru TEXT NOT NULL,
                item_name_en TEXT NOT NULL,
                meters REAL NOT NULL,
                unit_price REAL NOT NULL,
                line_total REAL NOT NULL,
                FOREIGN KEY (estimate_id) REFERENCES estimates (id) ON DELETE CASCADE
            )
            """
        )


class AppHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(PROJECT_DIR), **kwargs)

    def _send_json(self, status: int, payload: dict | list) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _read_json_body(self) -> dict:
        content_length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(content_length) if content_length > 0 else b"{}"
        return json.loads(raw.decode("utf-8"))

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        path = parsed.path

        if path == "/api/estimates":
            self._list_estimates()
            return

        if path.startswith("/api/estimates/"):
            estimate_id_str = path.rsplit("/", 1)[-1]
            if estimate_id_str.isdigit():
                self._get_estimate(int(estimate_id_str))
                return
            self._send_json(400, {"error": "Noto'g'ri ID."})
            return

        super().do_GET()

    def do_POST(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/api/estimates":
            self._create_estimate()
            return
        self._send_json(404, {"error": "Topilmadi."})

    def _list_estimates(self) -> None:
        with get_db() as conn:
            rows = conn.execute(
                """
                SELECT id, user_name, phone, total, created_at
                FROM estimates
                ORDER BY id DESC
                """
            ).fetchall()

        data = [
            {
                "id": row["id"],
                "user_name": row["user_name"],
                "phone": row["phone"],
                "total": row["total"],
                "created_at": row["created_at"],
            }
            for row in rows
        ]
        self._send_json(200, {"items": data})

    def _get_estimate(self, estimate_id: int) -> None:
        with get_db() as conn:
            header = conn.execute(
                """
                SELECT id, user_name, phone, total, created_at
                FROM estimates
                WHERE id = ?
                """,
                (estimate_id,),
            ).fetchone()

            if header is None:
                self._send_json(404, {"error": "Hisob topilmadi."})
                return

            items = conn.execute(
                """
                SELECT item_id, item_name_uz, item_name_ru, item_name_en, meters, unit_price, line_total
                FROM estimate_items
                WHERE estimate_id = ?
                ORDER BY id ASC
                """,
                (estimate_id,),
            ).fetchall()

        payload = {
            "id": header["id"],
            "user_name": header["user_name"],
            "phone": header["phone"],
            "total": header["total"],
            "created_at": header["created_at"],
            "items": [
                {
                    "item_id": item["item_id"],
                    "name": {
                        "uz": item["item_name_uz"],
                        "ru": item["item_name_ru"],
                        "en": item["item_name_en"],
                    },
                    "meters": item["meters"],
                    "unit_price": item["unit_price"],
                    "line_total": item["line_total"],
                }
                for item in items
            ],
        }
        self._send_json(200, payload)

    def _create_estimate(self) -> None:
        try:
            data = self._read_json_body()
        except json.JSONDecodeError:
            self._send_json(400, {"error": "JSON noto'g'ri."})
            return

        user = data.get("user", {})
        rows = data.get("rows", [])
        materials = data.get("materials", [])
        if not user.get("name") or not user.get("phone"):
            self._send_json(400, {"error": "Foydalanuvchi ma'lumoti to'liq emas."})
            return
        if not isinstance(rows, list) or not rows:
            self._send_json(400, {"error": "Saqlash uchun jadval bo'sh."})
            return

        mat_by_id: dict[str, dict] = {}
        for mat in materials:
            mat_id = mat.get("id")
            name = mat.get("name", {})
            if not mat_id:
                continue
            mat_by_id[mat_id] = {
                "price": float(mat.get("price", 0)),
                "name_uz": str(name.get("uz", "")),
                "name_ru": str(name.get("ru", "")),
                "name_en": str(name.get("en", "")),
            }

        normalized_rows = []
        total = 0.0
        for row in rows:
            item_id = row.get("itemId")
            meters = float(row.get("meters", 0))
            if not item_id or meters <= 0:
                continue
            material = mat_by_id.get(item_id)
            if not material:
                continue
            unit_price = float(material["price"])
            line_total = round(unit_price * meters, 2)
            total += line_total
            normalized_rows.append(
                {
                    "item_id": item_id,
                    "meters": meters,
                    "unit_price": unit_price,
                    "line_total": line_total,
                    "name_uz": material["name_uz"],
                    "name_ru": material["name_ru"],
                    "name_en": material["name_en"],
                }
            )

        if not normalized_rows:
            self._send_json(400, {"error": "Yaroqli qatorlar topilmadi."})
            return

        created_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        with get_db() as conn:
            cur = conn.execute(
                """
                INSERT INTO estimates (user_name, phone, total, created_at)
                VALUES (?, ?, ?, ?)
                """,
                (str(user["name"]), str(user["phone"]), round(total, 2), created_at),
            )
            estimate_id = cur.lastrowid
            conn.executemany(
                """
                INSERT INTO estimate_items (
                    estimate_id, item_id, item_name_uz, item_name_ru, item_name_en,
                    meters, unit_price, line_total
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """,
                [
                    (
                        estimate_id,
                        row["item_id"],
                        row["name_uz"],
                        row["name_ru"],
                        row["name_en"],
                        row["meters"],
                        row["unit_price"],
                        row["line_total"],
                    )
                    for row in normalized_rows
                ],
            )

        self._send_json(
            201,
            {"ok": True, "id": estimate_id, "total": round(total, 2), "created_at": created_at},
        )


def main() -> None:
    index_file = PROJECT_DIR / "index.html"
    if not index_file.exists():
        raise FileNotFoundError(
            f"index.html topilmadi. Iltimos {PROJECT_DIR} ichida index.html fayli bo'lsin."
        )

    init_db()

    bind_host = HOST
    bind_port = PORT
    httpd = None
    tried = []

    # Some Windows setups may block binding to 0.0.0.0 for non-admin apps.
    # Try the configured host first, then fallback to localhost and nearby ports.
    candidate_hosts = [HOST] if HOST == "127.0.0.1" else [HOST, "127.0.0.1"]

    for host in candidate_hosts:
        for port in range(PORT, PORT + 10):
            tried.append(f"{host}:{port}")
            try:
                httpd = ThreadingHTTPServer((host, port), AppHandler)
                bind_host = host
                bind_port = port
                break
            except OSError:
                continue
        if httpd is not None:
            break

    if httpd is None:
        tried_str = ", ".join(tried)
        raise OSError(
            f"Serverni ishga tushirib bo'lmadi. Sinab ko'rilgan manzillar: {tried_str}"
        )

    local_url = f"http://127.0.0.1:{bind_port}/"
    print(f"Server ishga tushdi (shu kompyuter): {local_url}")
    try:
        hostname = socket.gethostname()
        local_ip = socket.gethostbyname(hostname)
        if bind_host == "0.0.0.0":
            print(f"Boshqa qurilmalar uchun: http://{local_ip}:{bind_port}/")
        else:
            print("Boshqa qurilmalardan kirish o'chirilgan (localhost rejimi).")
    except OSError:
        print("Boshqa qurilmalar uchun IP aniqlanmadi.")
    print(f"Baza fayli: {DB_PATH}")
    print("To'xtatish uchun Ctrl + C bosing.")
    try:
        if os.getenv("AUTO_OPEN_BROWSER", "1") == "1":
            webbrowser.open(local_url)
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer to'xtatildi.")
    finally:
        httpd.server_close()


if __name__ == "__main__":
        main()
    
