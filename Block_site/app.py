import random

from flask import Flask, abort, redirect, render_template, request, url_for

app = Flask(__name__)

MANGA_LIST = [
    {
        "slug": "jujutsu-kaisen",
        "title": "Jujutsu Kaisen",
        "chapters": 271,
        "status": "Completed",
        "genre": "Action, Supernatural",
        "rating": 9.2,
        "weekly_views": 930_000,
        "latest_chapter": 271,
        "updated_at": "2026-03-10",
        "summary": "Yuji Itadori enters a dark world of curses after swallowing a deadly relic.",
    },
    {
        "slug": "chainsaw-man",
        "title": "Chainsaw Man",
        "chapters": 190,
        "status": "Ongoing",
        "genre": "Action, Horror",
        "rating": 9.0,
        "weekly_views": 1_070_000,
        "latest_chapter": 190,
        "updated_at": "2026-03-17",
        "summary": "Denji fights devils while chasing a normal life in a brutal modern world.",
    },
    {
        "slug": "kaiju-no-8",
        "title": "Kaiju No. 8",
        "chapters": 123,
        "status": "Ongoing",
        "genre": "Action, Sci-Fi",
        "rating": 8.8,
        "weekly_views": 760_000,
        "latest_chapter": 123,
        "updated_at": "2026-03-18",
        "summary": "Kafka gains kaiju powers and joins the defense force from the inside.",
    },
    {
        "slug": "tokyo-revengers",
        "title": "Tokyo Revengers",
        "chapters": 278,
        "status": "Completed",
        "genre": "Action, Drama",
        "rating": 8.6,
        "weekly_views": 640_000,
        "latest_chapter": 278,
        "updated_at": "2025-12-29",
        "summary": "A failed adult travels through time to change gang history and save lives.",
    },
    {
        "slug": "mashle",
        "title": "Mashle",
        "chapters": 162,
        "status": "Completed",
        "genre": "Comedy, Fantasy",
        "rating": 8.7,
        "weekly_views": 520_000,
        "latest_chapter": 162,
        "updated_at": "2026-01-07",
        "summary": "In a magic world, Mash muscles his way through an elite academy.",
    },
    {
        "slug": "sakamoto-days",
        "title": "Sakamoto Days",
        "chapters": 204,
        "status": "Ongoing",
        "genre": "Action, Comedy",
        "rating": 9.1,
        "weekly_views": 890_000,
        "latest_chapter": 204,
        "updated_at": "2026-03-15",
        "summary": "Legendary hitman Sakamoto protects his family while hiding as a shop owner.",
    },
    {
        "slug": "dandadan",
        "title": "Dandadan",
        "chapters": 183,
        "status": "Ongoing",
        "genre": "Action, Mystery",
        "rating": 9.3,
        "weekly_views": 1_400_000,
        "latest_chapter": 183,
        "updated_at": "2026-03-19",
        "summary": "Aliens, spirits, and absurd battles collide in a wild supernatural adventure.",
    },
    {
        "slug": "kagurabachi",
        "title": "Kagurabachi",
        "chapters": 70,
        "status": "Ongoing",
        "genre": "Action, Revenge",
        "rating": 8.9,
        "weekly_views": 1_200_000,
        "latest_chapter": 70,
        "updated_at": "2026-03-16",
        "summary": "Chihiro hunts enchanted blades tied to his father's murder.",
    },
]

MANGA_DETAILS = {
    "jujutsu-kaisen": {
        "author": "Gege Akutami",
        "publisher": "Shueisha",
        "demographic": "Shonen",
        "started": "2018",
        "release_plan": "Completed",
        "alt_titles": ["Sorcery Fight"],
        "main_characters": ["Yuji Itadori", "Megumi Fushiguro", "Nobara Kugisaki", "Satoru Gojo"],
        "story_arcs": ["Cursed Womb", "Shibuya Incident", "Culling Game"],
        "reader_note": "Agar jang va dark fantasy yoqsa, shu title juda mos keladi.",
    },
    "chainsaw-man": {
        "author": "Tatsuki Fujimoto",
        "publisher": "Shueisha",
        "demographic": "Shonen/Seinen Mix",
        "started": "2018",
        "release_plan": "Weekly updates",
        "alt_titles": ["CSM"],
        "main_characters": ["Denji", "Power", "Aki Hayakawa", "Makima"],
        "story_arcs": ["Public Safety Arc", "Academy Arc"],
        "reader_note": "Qattiq temp va kutilmagan burilishlar bu manganing kuchli tomoni.",
    },
    "kaiju-no-8": {
        "author": "Naoya Matsumoto",
        "publisher": "Shueisha",
        "demographic": "Shonen",
        "started": "2020",
        "release_plan": "Bi-weekly updates",
        "alt_titles": ["Monster #8"],
        "main_characters": ["Kafka Hibino", "Mina Ashiro", "Reno Ichikawa"],
        "story_arcs": ["Defense Force Entry", "Kaiju Weapon Conflict"],
        "reader_note": "Monster-action va military vibe yaxshi balanslangan.",
    },
    "tokyo-revengers": {
        "author": "Ken Wakui",
        "publisher": "Kodansha",
        "demographic": "Shonen",
        "started": "2017",
        "release_plan": "Completed",
        "alt_titles": ["Touman Revenge Story"],
        "main_characters": ["Takemichi Hanagaki", "Mikey", "Draken"],
        "story_arcs": ["Moebius Arc", "Tenjiku Arc", "Final Arc"],
        "reader_note": "Vaqt sayohati va gang dramasi aralashmasi.",
    },
    "mashle": {
        "author": "Hajime Komoto",
        "publisher": "Shueisha",
        "demographic": "Shonen",
        "started": "2020",
        "release_plan": "Completed",
        "alt_titles": ["Mashle: Magic and Muscles"],
        "main_characters": ["Mash Burnedead", "Finn Ames", "Lance Crown"],
        "story_arcs": ["Easton Enrollment", "Divine Visionary Exam"],
        "reader_note": "Komediya va parody elementlari kuchli.",
    },
    "sakamoto-days": {
        "author": "Yuto Suzuki",
        "publisher": "Shueisha",
        "demographic": "Shonen",
        "started": "2020",
        "release_plan": "Weekly updates",
        "alt_titles": ["Sakamoto's Daily Life"],
        "main_characters": ["Taro Sakamoto", "Shin", "Lu Xiaotang"],
        "story_arcs": ["Assassin Exhibition", "JAA Conflict"],
        "reader_note": "Action sahnalari juda kreativ chizilgan.",
    },
    "dandadan": {
        "author": "Yukinobu Tatsu",
        "publisher": "Shueisha",
        "demographic": "Shonen",
        "started": "2021",
        "release_plan": "Weekly updates",
        "alt_titles": ["Dandadan!"],
        "main_characters": ["Momo Ayase", "Ken Takakura (Okarun)"],
        "story_arcs": ["Turbo Granny", "Space Invasion Arc"],
        "reader_note": "G'alati humor va supernatural action birga ketadi.",
    },
    "kagurabachi": {
        "author": "Takeru Hokazono",
        "publisher": "Shueisha",
        "demographic": "Shonen",
        "started": "2023",
        "release_plan": "Weekly updates",
        "alt_titles": ["Kagura Blade Chronicle"],
        "main_characters": ["Chihiro Rokuhira", "Shiba", "Hiyuki"],
        "story_arcs": ["Enchanted Blade Hunt", "Auction Conflict"],
        "reader_note": "Qasos mavzusi va qilich jangi asosiy yo'nalish.",
    },
}


@app.route("/")
def home():
    featured = sorted(MANGA_LIST, key=lambda manga: manga["rating"], reverse=True)[:3]
    latest_updates = sorted(MANGA_LIST, key=lambda manga: manga["updated_at"], reverse=True)[:4]
    return render_template(
        "home.html",
        featured=featured,
        latest_updates=latest_updates,
        page_title="Manga Block | Home",
    )


@app.route("/catalog")
def catalog():
    query = request.args.get("q", "").strip().lower()
    status = request.args.get("status", "all").strip().lower()
    sort_by = request.args.get("sort", "title").strip().lower()

    filtered_list = MANGA_LIST
    if query:
        filtered_list = [
            manga
            for manga in filtered_list
            if query in manga["title"].lower() or query in manga["genre"].lower()
        ]
    if status in {"ongoing", "completed"}:
        filtered_list = [manga for manga in filtered_list if manga["status"].lower() == status]

    if sort_by == "rating":
        filtered_list = sorted(filtered_list, key=lambda manga: manga["rating"], reverse=True)
    elif sort_by == "chapters":
        filtered_list = sorted(filtered_list, key=lambda manga: manga["chapters"], reverse=True)
    else:
        filtered_list = sorted(filtered_list, key=lambda manga: manga["title"])

    return render_template(
        "catalog.html",
        manga_list=filtered_list,
        current_query=query,
        current_status=status,
        current_sort=sort_by,
        page_title="Manga Block | Catalog",
    )


@app.route("/trending")
def trending():
    ranked = sorted(MANGA_LIST, key=lambda manga: manga["weekly_views"], reverse=True)[:5]
    hot_titles = []
    for index, manga in enumerate(ranked, start=1):
        if manga["weekly_views"] >= 1_000_000:
            view_label = f"{manga['weekly_views'] / 1_000_000:.1f}M"
        else:
            view_label = f"{round(manga['weekly_views'] / 1_000)}K"

        hot_titles.append(
            {
                "slug": manga["slug"],
                "name": manga["title"],
                "weekly_views": view_label,
                "rank": index,
            }
        )
    return render_template("trending.html", hot_titles=hot_titles, page_title="Manga Block | Trending")


@app.route("/genres")
def genres():
    genre_descriptions = {
        "Action": "Fast battles, strong characters, and high stakes.",
        "Supernatural": "Curses, spirits, and powers beyond logic.",
        "Horror": "Dark tone, fear, and dangerous unknowns.",
        "Comedy": "Light moments, sharp jokes, and fun pacing.",
        "Fantasy": "Magic systems, special worlds, and epic quests.",
        "Mystery": "Secrets, clues, and unexpected twists.",
        "Sci-Fi": "Future tech, monsters, and speculative worlds.",
        "Drama": "Emotional stakes and character-driven conflict.",
        "Revenge": "Personal vendetta and relentless pursuit.",
    }
    genre_count = {}
    for manga in MANGA_LIST:
        for genre in [part.strip() for part in manga["genre"].split(",")]:
            genre_count[genre] = genre_count.get(genre, 0) + 1

    genre_data = [
        {
            "name": genre,
            "description": genre_descriptions.get(genre, "Discover stories in this genre."),
            "count": count,
        }
        for genre, count in sorted(genre_count.items(), key=lambda item: (-item[1], item[0]))
    ]
    return render_template("genres.html", genre_data=genre_data, page_title="Manga Block | Genres")


@app.route("/about")
def about():
    stats = {
        "users": "250K+",
        "manga_titles": "7,500+",
        "daily_reads": "1.8M+",
    }
    return render_template("about.html", stats=stats, page_title="Manga Block | About")


@app.route("/updates")
def updates():
    update_list = sorted(MANGA_LIST, key=lambda manga: manga["updated_at"], reverse=True)
    return render_template("updates.html", update_list=update_list, page_title="Manga Block | Updates")


@app.route("/random")
def random_pick():
    manga = random.choice(MANGA_LIST)
    return redirect(url_for("manga_detail", slug=manga["slug"]))


@app.route("/manga/<slug>")
def manga_detail(slug):
    manga = next((item for item in MANGA_LIST if item["slug"] == slug), None)
    if manga is None:
        abort(404)
    details = MANGA_DETAILS.get(slug, {})
    base_genres = {part.strip().lower() for part in manga["genre"].split(",")}
    related_titles = []
    for item in MANGA_LIST:
        if item["slug"] == slug:
            continue
        item_genres = {part.strip().lower() for part in item["genre"].split(",")}
        if base_genres.intersection(item_genres):
            related_titles.append(item)
    related_titles = related_titles[:3]
    return render_template(
        "manga_detail.html",
        manga=manga,
        details=details,
        related_titles=related_titles,
        page_title=f"Manga Block | {manga['title']}",
    )


if __name__ == "__main__":
    app.run(debug=True)
