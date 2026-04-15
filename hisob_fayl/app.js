const DEFAULT_IMAGE = "";
const DAAR_LOGO = "assets/logo-daar.svg";

const defaultMaterials = [
  { id: "truba16", name: { uz: "Truba 16mm", ru: "Truba 16mm", en: "Pipe 16mm" }, price: 12000, image: DEFAULT_IMAGE },
  { id: "truba20", name: { uz: "Truba 20mm", ru: "Truba 20mm", en: "Pipe 20mm" }, price: 15000, image: DEFAULT_IMAGE },
  { id: "truba25", name: { uz: "Truba 25mm", ru: "Truba 25mm", en: "Pipe 25mm" }, price: 19000, image: DEFAULT_IMAGE },
  { id: "truba32", name: { uz: "Truba 32mm", ru: "Truba 32mm", en: "Pipe 32mm" }, price: 26000, image: DEFAULT_IMAGE },
  { id: "kanal110", name: { uz: "Kanal truba 110", ru: "Kanal truba 110", en: "Sewer Pipe 110" }, price: 47000, image: DEFAULT_IMAGE },
  { id: "burchak", name: { uz: "Burchak (koleno)", ru: "Ugolnik", en: "Elbow fitting" }, price: 18000, image: DEFAULT_IMAGE },
  { id: "troynik", name: { uz: "Troyanik", ru: "Troynik", en: "T-piece" }, price: 22000, image: DEFAULT_IMAGE },
  { id: "mufta", name: { uz: "Mufta", ru: "Mufta", en: "Coupling" }, price: 14000, image: DEFAULT_IMAGE },
  { id: "kran", name: { uz: "Kran", ru: "Kran", en: "Valve" }, price: 85000, image: DEFAULT_IMAGE },
  { id: "filtr", name: { uz: "Suv filtri", ru: "Filtr", en: "Water filter" }, price: 135000, image: DEFAULT_IMAGE },
  { id: "schetchik", name: { uz: "Suv hisoblagich", ru: "Schetchik", en: "Water meter" }, price: 210000, image: DEFAULT_IMAGE },
  { id: "xomut", name: { uz: "Xomut", ru: "Homut", en: "Clamp" }, price: 9000, image: DEFAULT_IMAGE },
  { id: "fum", name: { uz: "FUM lenta", ru: "FUM lenta", en: "PTFE tape" }, price: 7000, image: DEFAULT_IMAGE },
  { id: "silikon", name: { uz: "Silikon", ru: "Silikon", en: "Sealant silicone" }, price: 36000, image: DEFAULT_IMAGE },
  { id: "sement", name: { uz: "Sement", ru: "Sement", en: "Cement" }, price: 82000, image: DEFAULT_IMAGE },
  { id: "qum", name: { uz: "Qum (m3)", ru: "Pesok", en: "Sand (m3)" }, price: 145000, image: DEFAULT_IMAGE },
  { id: "gips", name: { uz: "Gips", ru: "Gips", en: "Gypsum" }, price: 56000, image: DEFAULT_IMAGE },
  { id: "armatura", name: { uz: "Armatura", ru: "Armatura", en: "Rebar" }, price: 128000, image: DEFAULT_IMAGE }
];

const translations = {
  uz: {
    appName: "DAAR Hisob",
    appTagline: "Santexnika va qurilish materiallari uchun hisob-kitob",
    darkMode: "Tun rejimi",
    lightMode: "Kun rejimi",
    calcPageBtn: "1-sahifa: Hisoblash",
    historyPageBtn: "2-sahifa: Oldingi hisoblar",
    calculatorTitle: "1-sahifa: Metr kiriting va jadval oling",
    calculatorSubtitle: "Material tanlang, necha metr kerakligini kiriting, so'ng yakuniy jadval chiqadi.",
    selectMaterial: "Material",
    meters: "Uzunligi (metr)",
    addToTable: "Jadvalga qo'shish",
    catalogTitle: "Santexnika va qurilish materiallari (DAAR logo bilan)",
    catalogSubtitle: "Har bir material uchun narxni shu yerning o'zida tahrirlashingiz mumkin.",
    meterOnCard: "Metr kiriting",
    cardTotal: "Narx (metr bo'yicha)",
    summaryTitle: "Yakuniy jadval",
    tableNo: "№",
    tableMaterial: "Material",
    tableMeters: "Metr",
    tableUnitPrice: "1m narxi",
    tableTotal: "Jami narx",
    action: "Amal",
    grandTotal: "Umumiy narx:",
    clearAll: "Hammasini tozalash",
    saveEstimate: "Hisobni saqlash",
    print: "Chop etish",
    share: "Ulashish (rasm)",
    refreshSaved: "Saqlanganlarni yangilash",
    savedTitle: "2-sahifa: Oldingi hisob-kitoblar",
    savedSubtitle: "Avvalgi hisoblarni shu yerda ko'rasiz va qayta ochasiz.",
    customer: "Mijoz",
    phone: "Telefon",
    createdAt: "Vaqti",
    registerTitle: "Ro'yxatdan o'tish",
    registerSubtitle: "Davom etish uchun ma'lumot kiriting.",
    registerBtn: "Kirish",
    welcome: "Xush kelibsiz",
    remove: "O'chirish",
    open: "Ochish",
    required: "Ism va telefonni to'ldiring.",
    meterWarn: "Metr noto'g'ri kiritildi.",
    savedOk: "Hisob muvaffaqiyatli saqlandi.",
    saveFail: "Saqlashda xatolik bo'ldi.",
    loadFail: "Saqlangan hisoblarni olishda xatolik bo'ldi.",
    emptySaved: "Hozircha saqlangan hisob yo'q.",
    sharedOk: "Rasm tayyorlandi va ulashish oynasi ochildi.",
    shareFallback: "Ulashish qo'llab-quvvatlanmadi. Rasm yuklab olindi va preview ochildi.",
    shareFail: "Ulashish uchun jadvalda ma'lumot bo'lishi kerak.",
    copiedExtra: "Clipboardga ham nusxalandi.",
    downloadedExtra: "Rasm yuklab olindi.",
    unitPriceLabel: "Narx",
    currencyShort: "so'm"
  },
  ru: {
    appName: "DAAR Raschet",
    appTagline: "Raschet materialov dlya santehniki i stroiki",
    darkMode: "Nochnoy rejim",
    lightMode: "Dnevnoy rejim",
    calcPageBtn: "Stranitsa 1: Raschet",
    historyPageBtn: "Stranitsa 2: Predidushie raschety",
    calculatorTitle: "Stranitsa 1: Vvod metraja i tablica",
    calculatorSubtitle: "Viberite material, vvedite metraj i poluchite itogovuyu tablicu.",
    selectMaterial: "Material",
    meters: "Dlina (metr)",
    addToTable: "Dobavit v tablicu",
    catalogTitle: "Materiali s logotipom DAAR",
    catalogSubtitle: "Mozhno menyat cenu pryamo v etom razdele.",
    meterOnCard: "Vvedite metri",
    cardTotal: "Cena po metraju",
    summaryTitle: "Itogovaya tablica",
    tableNo: "№",
    tableMaterial: "Material",
    tableMeters: "Metri",
    tableUnitPrice: "Cena za 1m",
    tableTotal: "Itogo",
    action: "Deystvie",
    grandTotal: "Obshaya summa:",
    clearAll: "Ochistit vse",
    saveEstimate: "Sohranit raschet",
    print: "Pechat",
    share: "Podelitsya (kartinka)",
    refreshSaved: "Obnovit sohranennie",
    savedTitle: "Stranitsa 2: Predidushie raschety",
    savedSubtitle: "Ranshe sohranennie raschety.",
    customer: "Klient",
    phone: "Telefon",
    createdAt: "Vremya",
    registerTitle: "Registratsiya",
    registerSubtitle: "Vvedite dannie dlya prodolzheniya.",
    registerBtn: "Voyti",
    welcome: "Dobro pozhalovat",
    remove: "Udalit",
    open: "Otkrit",
    required: "Zapolnite imya i telefon.",
    meterWarn: "Nekorrektniy metraj.",
    savedOk: "Raschet sohranen.",
    saveFail: "Oshibka sohraneniya.",
    loadFail: "Oshibka zagruzki.",
    emptySaved: "Net sohranennix raschetov.",
    sharedOk: "Kartinka podgotovlena i okno podelitsya otkrito.",
    shareFallback: "Podelitsya ne podderjivaetsya. Kartinka skachana i otkrit preview.",
    shareFail: "Dlya podelitsya nuzhna zapolnennaya tablica.",
    copiedExtra: "Takzhe skopirovano v bufer obmena.",
    downloadedExtra: "Kartinka skachana.",
    unitPriceLabel: "Cena",
    currencyShort: "sum"
  },
  en: {
    appName: "DAAR Calc",
    appTagline: "Calculator for plumbing and construction materials",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    calcPageBtn: "Page 1: Calculation",
    historyPageBtn: "Page 2: Previous estimates",
    calculatorTitle: "Page 1: Enter meters and get table",
    calculatorSubtitle: "Choose material, enter meters, and get the final table.",
    selectMaterial: "Material",
    meters: "Length (meter)",
    addToTable: "Add to table",
    catalogTitle: "Plumbing and construction materials (with DAAR logo)",
    catalogSubtitle: "You can edit the unit price directly in this section.",
    meterOnCard: "Enter meters",
    cardTotal: "Price by meters",
    summaryTitle: "Final table",
    tableNo: "#",
    tableMaterial: "Material",
    tableMeters: "Meters",
    tableUnitPrice: "1m price",
    tableTotal: "Total",
    action: "Action",
    grandTotal: "Grand total:",
    clearAll: "Clear all",
    saveEstimate: "Save estimate",
    print: "Print",
    share: "Share (image)",
    refreshSaved: "Refresh saved",
    savedTitle: "Page 2: Previous estimates",
    savedSubtitle: "Open any previously saved estimate here.",
    customer: "Customer",
    phone: "Phone",
    createdAt: "Created",
    registerTitle: "Register",
    registerSubtitle: "Enter details to continue.",
    registerBtn: "Enter",
    welcome: "Welcome",
    remove: "Remove",
    open: "Open",
    required: "Please enter name and phone.",
    meterWarn: "Invalid meter value.",
    savedOk: "Estimate saved successfully.",
    saveFail: "Failed to save estimate.",
    loadFail: "Failed to load saved estimates.",
    emptySaved: "No saved estimates yet.",
    sharedOk: "Image is ready and share dialog opened.",
    shareFallback: "Sharing is not supported. Image downloaded and preview opened.",
    shareFail: "Add rows to the table before sharing.",
    copiedExtra: "Also copied to clipboard.",
    downloadedExtra: "Image downloaded.",
    unitPriceLabel: "Price",
    currencyShort: "UZS"
  }
};

function normalizeMaterials(savedMaterialsRaw) {
  const savedMaterials = Array.isArray(savedMaterialsRaw) ? savedMaterialsRaw : [];
  const savedById = new Map(savedMaterials.map((item) => [item.id, item]));

  const merged = defaultMaterials.map((base) => {
    const saved = savedById.get(base.id);
    return {
      ...base,
      price: saved && Number(saved.price) > 0 ? Number(saved.price) : base.price
    };
  });

  savedMaterials.forEach((item) => {
    if (!item || !item.id || merged.some((m) => m.id === item.id)) {
      return;
    }
    merged.push({
      id: item.id,
      name: item.name || { uz: item.id, ru: item.id, en: item.id },
      price: Number(item.price) || 0,
      image: item.image || DEFAULT_IMAGE
    });
  });

  return merged;
}

const state = {
  lang: localStorage.getItem("lang") || "uz",
  theme: localStorage.getItem("theme") || "light",
  user: JSON.parse(localStorage.getItem("userInfo") || "null"),
  materials: normalizeMaterials(JSON.parse(localStorage.getItem("materials") || "null")),
  rows: JSON.parse(localStorage.getItem("summaryRows") || "[]"),
  cardMeters: JSON.parse(localStorage.getItem("cardMeters") || "{}"),
  savedEstimates: [],
  page: "calc"
};
const uiFx = {
  lastRowCount: Array.isArray(state.rows) ? state.rows.length : 0
};

const summaryBody = document.getElementById("summaryBody");
const savedBody = document.getElementById("savedBody");
const grandTotalValue = document.getElementById("grandTotalValue");
const welcomeText = document.getElementById("welcomeText");
const registerOverlay = document.getElementById("registerOverlay");
const toastStack = document.getElementById("toastStack");
const cursorGlow = document.getElementById("cursorGlow");
const langSelect = document.getElementById("langSelect");
const themeToggle = document.getElementById("themeToggle");
const saveEstimateBtn = document.getElementById("saveEstimateBtn");
const refreshSavedBtn = document.getElementById("refreshSavedBtn");
const printBtn = document.getElementById("printBtn");
const shareBtn = document.getElementById("shareBtn");
const catalogGrid = document.getElementById("catalogGrid");
const pageButtons = document.querySelectorAll(".page-btn");
const pagePanels = document.querySelectorAll(".page-panel");
const prefersReducedMotion =
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function t(key) {
  return translations[state.lang][key] || key;
}

function formatMoney(value) {
  return `${Number(value || 0).toLocaleString("ru-RU")} ${t("currencyShort")}`;
}

function showToast(message, type = "info") {
  if (!toastStack || !message) {
    return;
  }
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastStack.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 260);
  }, 2600);
}

function saveState() {
  localStorage.setItem("lang", state.lang);
  localStorage.setItem("theme", state.theme);
  localStorage.setItem("materials", JSON.stringify(state.materials));
  localStorage.setItem("summaryRows", JSON.stringify(state.rows));
  localStorage.setItem("cardMeters", JSON.stringify(state.cardMeters));
  if (state.user) {
    localStorage.setItem("userInfo", JSON.stringify(state.user));
  }
}

function setActivePage(page) {
  state.page = page;
  pageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.page === page);
  });
  pagePanels.forEach((panel) => {
    const isActive = panel.id === `${page}Page`;
    panel.classList.toggle("active", isActive);
    if (isActive) {
      panel.classList.remove("panel-switch");
      void panel.offsetWidth;
      panel.classList.add("panel-switch");
    }
  });
}

function renderI18n() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.getAttribute("data-i18n"));
  });
  themeToggle.textContent = state.theme === "dark" ? t("lightMode") : t("darkMode");
  if (state.user && state.user.name) {
    welcomeText.textContent = `${t("welcome")}, ${state.user.name}!`;
  }
}

function getCardLineTotal(itemId) {
  const material = state.materials.find((m) => m.id === itemId);
  const meters = Number(state.cardMeters[itemId] || 0);
  const unitPrice = Number(material?.price || 0);
  return meters > 0 ? meters * unitPrice : 0;
}

function renderCatalog() {
  catalogGrid.innerHTML = "";
  state.materials.forEach((item, index) => {
    const meters = Number(state.cardMeters[item.id] || 0);
    const lineTotal = getCardLineTotal(item.id);
    const card = document.createElement("article");
    card.className = "material-card";
    card.style.setProperty("--card-index", String(index));
    card.innerHTML = `
      <div class="card-logo"><img src="${DAAR_LOGO}" alt="DAAR"></div>
      <div class="material-content">
        <h4>${item.name[state.lang]}</h4>
        <label>${t("unitPriceLabel")}</label>
        <div class="price-inline">
          <input class="price-input" type="number" min="0" step="100" data-id="${item.id}" value="${Number(item.price)}">
          <span>${t("currencyShort")}</span>
        </div>
        <label>${t("meterOnCard")}</label>
        <div class="price-inline">
          <input class="meter-card-input" type="number" min="0" step="0.01" data-meter-id="${item.id}" value="${meters || ""}" placeholder="0">
          <span>m</span>
        </div>
        <p class="card-total">${t("cardTotal")}: <strong data-card-total="${item.id}">${formatMoney(lineTotal)}</strong></p>
        <button class="add-card-btn" type="button" data-add-item="${item.id}">${t("addToTable")}</button>
      </div>
    `;
    catalogGrid.appendChild(card);
  });
}

function setupCursorGlow() {
  if (!cursorGlow || prefersReducedMotion) {
    return;
  }
  document.addEventListener("pointermove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
    cursorGlow.style.opacity = "1";
  });
  document.addEventListener("pointerleave", () => {
    cursorGlow.style.opacity = "0";
  });
}

function setupButtonRipple() {
  if (prefersReducedMotion) {
    return;
  }
  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) {
      return;
    }
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
}

function setupCatalogTilt() {
  if (prefersReducedMotion) {
    return;
  }
  catalogGrid.addEventListener("pointermove", (event) => {
    const card = event.target.closest(".material-card");
    if (!card) {
      return;
    }
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * 6;
    const ry = (px - 0.5) * 8;
    card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
  });

  catalogGrid.addEventListener("pointerleave", () => {
    catalogGrid.querySelectorAll(".material-card").forEach((card) => {
      card.style.transform = "";
    });
  });
}

function setupRevealAnimations() {
  if (prefersReducedMotion) {
    return;
  }
  const targets = document.querySelectorAll(".welcome-card, .page-panel, .panel-head, .action-row, .table-wrap, .summary");
  targets.forEach((el) => el.classList.add("reveal-item"));

  const revealAll = () => {
    targets.forEach((el) => el.classList.add("revealed"));
  };

  const activePanel = document.querySelector(".page-panel.active");
  if (activePanel) {
    activePanel.classList.add("revealed");
  }
  document.querySelector(".welcome-card")?.classList.add("revealed");

  if (!("IntersectionObserver" in window)) {
    revealAll();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.02 });

  targets.forEach((el) => observer.observe(el));

  // Safety fallback: if observer doesn't trigger on some browsers, show content anyway.
  setTimeout(revealAll, 900);
}

function updateCardTotalView(itemId) {
  const totalNode = catalogGrid.querySelector(`[data-card-total="${itemId}"]`);
  if (!totalNode) {
    return;
  }
  totalNode.textContent = formatMoney(getCardLineTotal(itemId));
}

function renderSummary() {
  const previousCount = uiFx.lastRowCount;
  summaryBody.innerHTML = "";
  let grand = 0;
  const summaryLabels = {
    no: t("tableNo"),
    material: t("tableMaterial"),
    meters: t("tableMeters"),
    unitPrice: t("tableUnitPrice"),
    total: t("tableTotal"),
    action: t("action")
  };

  state.rows.forEach((row, index) => {
    const material = state.materials.find((m) => m.id === row.itemId);
    if (!material) {
      return;
    }
    const unitPrice = Number(row.unitPrice || material.price || 0);
    const lineTotal = Number(row.meters) * unitPrice;
    grand += lineTotal;

    const tr = document.createElement("tr");
    if (index >= previousCount) {
      tr.classList.add("row-enter");
    }
    tr.innerHTML = `
      <td data-label="${summaryLabels.no}">${index + 1}</td>
      <td data-label="${summaryLabels.material}">${material.name[state.lang]}</td>
      <td data-label="${summaryLabels.meters}">${Number(row.meters)}</td>
      <td data-label="${summaryLabels.unitPrice}">${formatMoney(unitPrice)}</td>
      <td data-label="${summaryLabels.total}">${formatMoney(lineTotal)}</td>
      <td data-label="${summaryLabels.action}"><button class="remove-btn" data-remove="${index}" type="button">${t("remove")}</button></td>
    `;
    summaryBody.appendChild(tr);
  });

  uiFx.lastRowCount = state.rows.length;
  grandTotalValue.textContent = formatMoney(grand);
}

function getSummaryRowsForExport() {
  return state.rows
    .map((row) => {
      const material = state.materials.find((m) => m.id === row.itemId);
      if (!material) {
        return null;
      }
      const unitPrice = Number(row.unitPrice || material.price || 0);
      const meters = Number(row.meters);
      return {
        name: material.name[state.lang],
        meters,
        unitPrice,
        lineTotal: meters * unitPrice
      };
    })
    .filter(Boolean);
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function buildSummaryImageBlob() {
  const rows = getSummaryRowsForExport();
  if (!rows.length) {
    throw new Error("empty");
  }

  const width = 1080;
  const rowHeight = 52;
  const headerHeight = 170;
  const tableHeadHeight = 54;
  const footerHeight = 78;
  const padding = 28;
  const height = headerHeight + tableHeadHeight + rows.length * rowHeight + footerHeight + padding * 2;

  const canvas = document.createElement("canvas");
  const scale = 2;
  canvas.width = width * scale;
  canvas.height = height * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#f2f7ff";
  ctx.fillRect(padding, padding, width - padding * 2, headerHeight - 24);

  try {
    const logo = await loadImage(DAAR_LOGO);
    ctx.drawImage(logo, padding + 14, padding + 18, 180, 48);
  } catch (_error) {
    ctx.fillStyle = "#0f67d5";
    ctx.font = "700 28px Arial";
    ctx.fillText("DAAR", padding + 20, padding + 52);
  }

  ctx.fillStyle = "#111827";
  ctx.font = "700 30px Arial";
  ctx.fillText(t("summaryTitle"), padding + 14, padding + 102);

  ctx.font = "500 22px Arial";
  ctx.fillStyle = "#374151";
  const userName = state.user?.name || "-";
  ctx.fillText(`${t("customer")}: ${userName}`, padding + 14, padding + 138);

  const tableTop = padding + headerHeight;
  const colX = [padding + 10, padding + 72, padding + 430, padding + 620, padding + 810];
  ctx.fillStyle = "#dbeafe";
  ctx.fillRect(padding, tableTop, width - padding * 2, tableHeadHeight);
  ctx.fillStyle = "#0f172a";
  ctx.font = "700 20px Arial";
  ctx.fillText(t("tableNo"), colX[0], tableTop + 34);
  ctx.fillText(t("tableMaterial"), colX[1], tableTop + 34);
  ctx.fillText(t("tableMeters"), colX[2], tableTop + 34);
  ctx.fillText(t("tableUnitPrice"), colX[3], tableTop + 34);
  ctx.fillText(t("tableTotal"), colX[4], tableTop + 34);

  let y = tableTop + tableHeadHeight;
  let grand = 0;
  rows.forEach((row, index) => {
    grand += row.lineTotal;
    if (index % 2 === 0) {
      ctx.fillStyle = "#f8fbff";
      ctx.fillRect(padding, y, width - padding * 2, rowHeight);
    }
    ctx.fillStyle = "#111827";
    ctx.font = "500 19px Arial";
    ctx.fillText(String(index + 1), colX[0], y + 33);
    ctx.fillText(row.name, colX[1], y + 33);
    ctx.fillText(String(row.meters), colX[2], y + 33);
    ctx.fillText(formatMoney(row.unitPrice), colX[3], y + 33);
    ctx.fillText(formatMoney(row.lineTotal), colX[4], y + 33);
    y += rowHeight;
  });

  ctx.fillStyle = "#e5eefc";
  ctx.fillRect(padding, y + 8, width - padding * 2, footerHeight - 14);
  ctx.fillStyle = "#111827";
  ctx.font = "700 24px Arial";
  ctx.fillText(`${t("grandTotal")} ${formatMoney(grand)}`, padding + 18, y + 52);

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  return blob;
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

function openBlobPreview(blob) {
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank");
  setTimeout(() => URL.revokeObjectURL(url), 120000);
  return Boolean(win);
}

async function copyImageToClipboard(blob) {
  if (!navigator.clipboard || typeof ClipboardItem === "undefined") {
    return false;
  }
  try {
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type || "image/png"]: blob
      })
    ]);
    return true;
  } catch (_error) {
    return false;
  }
}

async function shareEstimateAsImage() {
  if (!getSummaryRowsForExport().length) {
    showToast(t("shareFail"), "error");
    return;
  }

  try {
    const blob = await buildSummaryImageBlob();
    if (!blob) {
      throw new Error("no_blob");
    }
    const fileName = `daar-hisob-${Date.now()}.png`;
    const canMakeFile = typeof File === "function";
    const file = canMakeFile ? new File([blob], fileName, { type: "image/png" }) : null;

    if (navigator.share && file) {
      try {
        const supportsFileShare = !navigator.canShare || navigator.canShare({ files: [file] });
        if (supportsFileShare) {
          await navigator.share({
            files: [file],
            title: t("appName"),
            text: t("summaryTitle")
          });
          showToast(t("sharedOk"), "ok");
          return;
        }
      } catch (shareError) {
        if (shareError && shareError.name === "AbortError") {
          return;
        }
      }
    }

    downloadBlob(blob, fileName);
    const copied = await copyImageToClipboard(blob);
    const opened = openBlobPreview(blob);
    if (copied) {
      showToast(`${t("shareFallback")} ${t("copiedExtra")}`, "info");
      return;
    }
    if (!opened) {
      showToast(`${t("shareFallback")} ${t("downloadedExtra")}`, "info");
      return;
    }
    showToast(t("shareFallback"), "info");
  } catch (_error) {
    showToast(t("shareFail"), "error");
  }
}

function renderSavedList() {
  savedBody.innerHTML = "";
  const savedLabels = {
    id: "ID",
    customer: t("customer"),
    phone: t("phone"),
    total: t("tableTotal"),
    createdAt: t("createdAt"),
    action: t("action")
  };
  if (!state.savedEstimates.length) {
    const tr = document.createElement("tr");
    tr.className = "no-data-row";
    tr.innerHTML = `<td data-label="" colspan="6">${t("emptySaved")}</td>`;
    savedBody.appendChild(tr);
    return;
  }

  state.savedEstimates.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td data-label="${savedLabels.id}">${item.id}</td>
      <td data-label="${savedLabels.customer}">${item.user_name}</td>
      <td data-label="${savedLabels.phone}">${item.phone}</td>
      <td data-label="${savedLabels.total}">${formatMoney(item.total)}</td>
      <td data-label="${savedLabels.createdAt}">${item.created_at}</td>
      <td data-label="${savedLabels.action}"><button class="ghost-btn" type="button" data-open="${item.id}">${t("open")}</button></td>
    `;
    savedBody.appendChild(tr);
  });
}

function applyTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
}

function setupRegistration() {
  if (!state.user) {
    registerOverlay.classList.add("show");
    return;
  }
  registerOverlay.classList.remove("show");
  welcomeText.textContent = `${t("welcome")}, ${state.user.name}!`;
}

async function apiRequest(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options
  });
  if (!response.ok) {
    const errorPayload = await response.json().catch(() => ({}));
    throw new Error(errorPayload.error || "API error");
  }
  return response.json();
}

async function loadSavedEstimates() {
  try {
    const data = await apiRequest("/api/estimates");
    state.savedEstimates = data.items || [];
    renderSavedList();
  } catch (_error) {
    state.savedEstimates = [];
    renderSavedList();
    showToast(t("loadFail"), "error");
  }
}

async function saveEstimate() {
  if (!state.user || !state.user.name || !state.user.phone) {
    showToast(t("required"), "error");
    return;
  }
  if (!state.rows.length) {
    showToast(t("meterWarn"), "error");
    return;
  }

  try {
    await apiRequest("/api/estimates", {
      method: "POST",
      body: JSON.stringify({
        user: state.user,
        rows: state.rows.map((row) => ({ itemId: row.itemId, meters: Number(row.meters) })),
        materials: state.materials
      })
    });
    showToast(t("savedOk"), "ok");
    await loadSavedEstimates();
  } catch (_error) {
    showToast(t("saveFail"), "error");
  }
}

async function openSavedEstimate(estimateId) {
  try {
    const data = await apiRequest(`/api/estimates/${estimateId}`);
    state.rows = (data.items || []).map((item) => ({
      itemId: item.item_id,
      meters: Number(item.meters),
      unitPrice: Number(item.unit_price)
    }));
    saveState();
    renderSummary();
    setActivePage("calc");
  } catch (_error) {
    showToast(t("loadFail"), "error");
  }
}

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("nameInput").value.trim();
  const phone = document.getElementById("phoneInput").value.trim();
  if (!name || !phone) {
    showToast(t("required"), "error");
    return;
  }
  state.user = { name, phone };
  saveState();
  setupRegistration();
  renderI18n();
});

document.getElementById("clearAllBtn").addEventListener("click", () => {
  state.rows = [];
  saveState();
  renderSummary();
});

saveEstimateBtn.addEventListener("click", () => {
  saveEstimate();
});

refreshSavedBtn.addEventListener("click", () => {
  loadSavedEstimates();
});

printBtn.addEventListener("click", () => {
  window.print();
});

shareBtn.addEventListener("click", () => {
  shareEstimateAsImage();
});

catalogGrid.addEventListener("input", (event) => {
  const input = event.target;
  if (input.classList.contains("price-input")) {
    const id = input.dataset.id;
    const material = state.materials.find((m) => m.id === id);
    if (!material) {
      return;
    }
    material.price = Number(input.value) || 0;
    saveState();
    renderSummary();
    updateCardTotalView(id);
    return;
  }

  if (!input.classList.contains("meter-card-input")) {
    return;
  }
  const id = input.dataset.meterId;
  state.cardMeters[id] = Number(input.value) || 0;
  saveState();
  updateCardTotalView(id);
});

catalogGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-item]");
  if (!button) {
    return;
  }
  const itemId = button.dataset.addItem;
  const meters = Number(state.cardMeters[itemId] || 0);
  if (!meters || meters <= 0) {
    showToast(t("meterWarn"), "error");
    return;
  }
  state.rows.push({ itemId, meters });
  saveState();
  renderSummary();
  showToast(`${t("addToTable")}: ${meters} m`, "ok");
});

summaryBody.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) {
    return;
  }
  const index = Number(button.dataset.remove);
  state.rows.splice(index, 1);
  saveState();
  renderSummary();
});

savedBody.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open]");
  if (!button) {
    return;
  }
  openSavedEstimate(Number(button.dataset.open));
});

langSelect.addEventListener("change", () => {
  state.lang = langSelect.value;
  saveState();
  renderI18n();
  renderCatalog();
  renderSummary();
  renderSavedList();
});

themeToggle.addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  saveState();
  applyTheme();
  renderI18n();
});

pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActivePage(button.dataset.page);
  });
});

langSelect.value = state.lang;
applyTheme();
renderI18n();
renderCatalog();
renderSummary();
renderSavedList();
setupRegistration();
setActivePage("calc");
saveState();
loadSavedEstimates();
setupCursorGlow();
setupButtonRipple();
setupCatalogTilt();
setupRevealAnimations();
