// ============================================================
// НИИЧАЗ — Логика приложения (Supabase edition)
// ============================================================

let _isLoggedIn = false;
let _isAdmin    = false;
let _isSenior   = false;

// Кэш загруженных данных
let _stalkers = [];
let _reports  = [];

document.addEventListener("DOMContentLoaded", async () => {
  initClock();

  const session = Auth.getSession();
  if (session) {
    _isLoggedIn = true;
    _isAdmin    = session.level === "admin";
    _isSenior   = session.level === "senior" || session.level === "admin";
    applySessionUI(session);
  }

  document.querySelectorAll("[data-page]").forEach(btn => {
    btn.addEventListener("click", () => {
      const p = btn.dataset.page;
      if (p === "logout") { doLogout(); return; }
      navigateTo(p);
    });
  });

  document.getElementById("login-form").addEventListener("submit", e => {
    e.preventDefault(); doLogin();
  });

  document.getElementById("report-form")?.addEventListener("submit", e => {
    e.preventDefault(); addReport();
  });

  document.getElementById("art-search")?.addEventListener("input", e => {
    renderPublicArts(e.target.value.toLowerCase());
  });

  // Загрузить цены из Supabase и применить к локальному массиву
  await loadPricesFromDB();

  renderPublicArts();
  renderPublicMutants();
  showPage("public");
});

// ── ЦЕНЫ ИЗ БД ────────────────────────────────────────────
async function loadPricesFromDB() {
  try {
    const [artPrices, mutPrices] = await Promise.all([
      dbGetArtifactPrices(),
      dbGetMutantPrices()
    ]);
    artPrices.forEach(p => {
      const a = ARTIFACTS.find(x => x.id === p.artifact_id);
      if (a) a.buy = p.buy;
    });
    mutPrices.forEach(p => {
      const m = MUTANTS.find(x => x.id === p.mutant_id);
      if (m) m.buy = p.buy;
    });
  } catch(e) {
    console.warn("Не удалось загрузить цены из БД:", e);
  }
}

// ── ЧАСЫ ──────────────────────────────────────────────────
function initClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  const tick = () => el.textContent = new Date().toLocaleTimeString("ru-RU",
    { hour:"2-digit", minute:"2-digit", second:"2-digit" });
  tick(); setInterval(tick, 1000);
}

// ── ПОКАЗАТЬ СТРАНИЦУ ─────────────────────────────────────
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll("[data-page]").forEach(b => b.classList.remove("active"));
  const el = document.getElementById("page-" + pageId);
  if (el) el.classList.add("active");
  document.querySelectorAll(`[data-page="${pageId}"]`).forEach(b => b.classList.add("active"));
}

// ── НАВИГАЦИЯ ─────────────────────────────────────────────
function navigateTo(page) {
  const restricted = ["dashboard","artifacts_db","mutants_db","reports","stalkers","admin"];
  if (restricted.includes(page) && !_isLoggedIn) {
    document.getElementById("login-notice").style.display = "block";
    showPage("login"); return;
  }
  if (page === "admin" && !_isAdmin) { page = "dashboard"; }

  showPage(page);

  switch(page) {
    case "dashboard":    renderDashboard(); break;
    case "artifacts_db": renderFullArts(); break;
    case "mutants_db":   renderFullMutants(); break;
    case "reports":      loadAndRenderReports(); break;
    case "stalkers":     loadAndRenderStalkers(); break;
    case "admin":        loadAndRenderAdmin(); break;
  }
}

// ── АВТОРИЗАЦИЯ ───────────────────────────────────────────
function doLogin() {
  const login = document.getElementById("login-input").value;
  const pw    = document.getElementById("pw-input").value;
  const errEl = document.getElementById("login-error");
  const btn   = document.getElementById("login-btn");

  btn.disabled = true;
  btn.textContent = "ПРОВЕРКА...";
  errEl.style.display = "none";

  setTimeout(() => {
    const result = Auth.login(login, pw);
    btn.disabled = false;
    btn.textContent = "ПОДТВЕРДИТЬ ЛИЧНОСТЬ";

    if (!result.success) {
      errEl.style.display = "block";
      document.getElementById("pw-input").value = "";
      return;
    }

    _isLoggedIn = true;
    _isAdmin    = result.user.level === "admin";
    _isSenior   = result.user.level === "senior" || result.user.level === "admin";
    document.getElementById("login-notice").style.display = "none";
    applySessionUI(result.user);
    navigateTo("dashboard");
  }, 500);
}

function applySessionUI(session) {
  document.getElementById("user-indicator").textContent = session.name.toUpperCase();
  document.getElementById("user-role").textContent = session.role;

  document.querySelectorAll(".nav-locked").forEach(el => {
    el.classList.remove("nav-locked");
    el.classList.add("nav-unlocked");
  });
  document.getElementById("nav-login").style.display = "none";
  document.getElementById("nav-logout").style.display = "";

  if (session.level === "admin") {
    document.querySelectorAll(".nav-admin").forEach(el => el.style.display = "");
  }
}

function doLogout() {
  Auth.logout();
  _isLoggedIn = false; _isAdmin = false; _isSenior = false;

  document.getElementById("user-indicator").textContent = "НЕТ ДОСТУПА";
  document.getElementById("user-role").textContent = "ГОСТЬ";

  document.querySelectorAll(".nav-unlocked").forEach(el => {
    el.classList.add("nav-locked");
    el.classList.remove("nav-unlocked");
  });
  document.getElementById("nav-login").style.display = "";
  document.getElementById("nav-logout").style.display = "none";
  document.querySelectorAll(".nav-admin").forEach(el => el.style.display = "none");

  showPage("public");
}

// ── ПУБЛИЧНАЯ: АРТЕФАКТЫ ──────────────────────────────────
function renderPublicArts(search = "") {
  const list = search ? ARTIFACTS.filter(a => a.name.toLowerCase().includes(search)) : ARTIFACTS;
  const countEl = document.getElementById("pub-arts-count");
  if (countEl) countEl.textContent = list.length + " позиций";
  const tbody = document.getElementById("pub-art-tbody");
  if (!tbody) return;
  tbody.innerHTML = list.map(a => {
    const r = RARITY_MAP[a.rarity];
    return `<tr>
      <td class="col-name">${a.name}</td>
      <td><span class="badge ${r.cls}">${r.label}</span></td>
      <td class="col-effect">${a.effect}</td>
      <td class="col-price">${a.buy.toLocaleString("ru")} руб.</td>
    </tr>`;
  }).join("");
}

// ── ПУБЛИЧНАЯ: МУТАНТЫ ────────────────────────────────────
function renderPublicMutants() {
  const tbody = document.getElementById("pub-mut-tbody");
  if (!tbody) return;
  tbody.innerHTML = MUTANTS.map(m => {
    const t = THREAT_MAP[m.threat];
    return `<tr>
      <td class="col-name">${m.name}</td>
      <td><span class="badge ${t.cls}">${t.label}</span></td>
      <td class="col-price">${m.buy.toLocaleString("ru")} руб.</td>
    </tr>`;
  }).join("");
}

// ── DASHBOARD ─────────────────────────────────────────────
async function renderDashboard() {
  const s = Auth.getSession();
  if (!s) return;

  document.getElementById("dash-name").textContent = s.name;
  document.getElementById("dash-role").textContent = s.role;
  document.getElementById("dash-dept").textContent = s.department;

  const lvlEl = document.getElementById("dash-level");
  const lm = { junior:"ДОПУСК: ЛАБОРАНТ", senior:"ДОПУСК: СТАРШИЙ СОТРУДНИК", admin:"ДОПУСК: ДИРЕКТОР" };
  lvlEl.textContent = lm[s.level] || s.level;
  lvlEl.className = "clearance cl-" + s.level;

  const t = new Date(s.loginTime);
  document.getElementById("dash-time").textContent =
    t.toLocaleString("ru-RU", { day:"2-digit", month:"2-digit", year:"numeric", hour:"2-digit", minute:"2-digit" });

  // Счётчики из БД
  const [stalkers, reports] = await Promise.all([dbGetStalkers(), dbGetReports()]);
  _stalkers = stalkers; _reports = reports;

  document.getElementById("dash-arts").textContent = ARTIFACTS.length;
  document.getElementById("dash-muts").textContent = MUTANTS.length;
  document.getElementById("dash-stalkers").textContent = stalkers.length;
  document.getElementById("dash-reports").textContent = reports.length;

  // Последние 5 отчётов
  const logEl = document.getElementById("dash-log");
  logEl.innerHTML = reports.length
    ? reports.slice(0,5).map(r => `
        <div class="log-entry">
          <span class="log-who">${r.author}</span>
          <span class="log-msg">${r.body.slice(0,70)}${r.body.length>70?"...":""}</span>
          <span class="log-time">${new Date(r.created_at).toLocaleString("ru-RU",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}</span>
        </div>`).join("")
    : `<div class="log-empty">Нет записей</div>`;
}

// ── ПОЛНАЯ БАЗА АРТЕФАКТОВ ────────────────────────────────
function renderFullArts() {
  const tbody = document.getElementById("full-art-tbody");
  if (!tbody) return;

  tbody.innerHTML = ARTIFACTS.map((a, i) => {
    const r = RARITY_MAP[a.rarity];
    return `<tr>
      <td class="col-name">${a.name}</td>
      <td><span class="badge ${r.cls}">${r.label}</span></td>
      <td class="col-effect">${a.effect}</td>
      <td class="col-price">${_isSenior
        ? `<input class="inline-in" value="${a.buy}" onchange="updateArtPrice('${a.id}',${i},+this.value)">`
        : a.buy.toLocaleString("ru") + " руб."}</td>
      <td>${_isSenior
        ? `<button class="btn-del" onclick="if(confirm('Удалить?')){ARTIFACTS.splice(${i},1);renderFullArts();renderPublicArts();}">✕</button>`
        : ""}</td>
    </tr>`;
  }).join("");

  document.getElementById("art-add-row").style.display = _isSenior ? "flex" : "none";
}

async function updateArtPrice(id, idx, val) {
  ARTIFACTS[idx].buy = val;
  renderPublicArts();
  await dbSetArtifactPrice(id, val);
}

function addArtifact() {
  const name   = document.getElementById("new-art-name").value.trim();
  const rar    = document.getElementById("new-art-rarity").value;
  const effect = document.getElementById("new-art-effect").value.trim();
  const buy    = parseInt(document.getElementById("new-art-buy").value) || 0;
  if (!name) return;
  ARTIFACTS.push({ id:"a_"+Date.now(), name, rarity:rar, effect:effect||"Нет данных", buy });
  ["new-art-name","new-art-effect","new-art-buy"].forEach(id => document.getElementById(id).value = "");
  renderFullArts(); renderPublicArts();
}

// ── ПОЛНЫЙ КАТАЛОГ МУТАНТОВ ───────────────────────────────
function renderFullMutants() {
  const tbody = document.getElementById("full-mut-tbody");
  if (!tbody) return;
  tbody.innerHTML = MUTANTS.map((m, i) => {
    const t = THREAT_MAP[m.threat];
    return `<tr>
      <td class="col-name">${m.name}</td>
      <td><span class="badge ${t.cls}">${t.label}</span></td>
      <td class="col-price">${_isSenior
        ? `<input class="inline-in" value="${m.buy}" onchange="updateMutPrice('${m.id}',${i},+this.value)">`
        : m.buy.toLocaleString("ru") + " руб."}</td>
    </tr>`;
  }).join("");
}

async function updateMutPrice(id, idx, val) {
  MUTANTS[idx].buy = val;
  renderPublicMutants();
  await dbSetMutantPrice(id, val);
}

// ── РЕЕСТР СТАЛКЕРОВ ──────────────────────────────────────
async function loadAndRenderStalkers() {
  document.getElementById("stalkers-tbody").innerHTML =
    `<tr><td colspan="7" class="empty-cell">Загрузка...</td></tr>`;
  _stalkers = await dbGetStalkers();
  renderStalkers();
}

function renderStalkers() {
  const tbody = document.getElementById("stalkers-tbody");
  if (!tbody) return;
  document.getElementById("stalkers-count").textContent = _stalkers.length + " зарегистрировано";

  // Сбросить форму
  _photoDataUrl = null;
  const prev = document.getElementById("photo-preview");
  if (prev) { prev.style.display = "none"; prev.src = ""; }
  const inp = document.getElementById("s-photo");
  if (inp) inp.value = "";
  const lbl = document.getElementById("photo-label");
  if (lbl) lbl.textContent = "↑ ЗАГРУЗИТЬ ФОТО";

  tbody.innerHTML = _stalkers.length === 0
    ? `<tr><td colspan="7" class="empty-cell">Реестр пуст</td></tr>`
    : _stalkers.map(s => `
        <tr class="stalker-row" onclick="openDossier('${s.id}')">
          <td>${s.photo
            ? `<img src="${s.photo}" class="thumb" alt="фото">`
            : `<div class="thumb-empty">—</div>`}</td>
          <td class="col-name">${s.callsign}</td>
          <td>${s.fullname}</td>
          <td>${s.dob || "—"}</td>
          <td>${s.origin || "—"}</td>
          <td>${s.purpose || "—"}</td>
          <td><button class="btn-del" onclick="event.stopPropagation();deleteStalker('${s.id}')">✕</button></td>
        </tr>`).join("");
}

function openDossier(id) {
  const s = _stalkers.find(x => x.id === id);
  if (!s) return;

  document.getElementById("d-callsign").textContent  = s.callsign;
  document.getElementById("d-fullname").textContent  = s.fullname;
  document.getElementById("d-dob").textContent       = s.dob     || "Не указана";
  document.getElementById("d-origin").textContent    = s.origin  || "Не указано";
  document.getElementById("d-purpose").textContent   = s.purpose || "Не указана";
  document.getElementById("d-added").textContent     = s.added
    ? new Date(s.added).toLocaleDateString("ru-RU")
    : new Date(s.created_at).toLocaleDateString("ru-RU");

  const photoEl = document.getElementById("d-photo");
  const noPhoto = document.getElementById("d-no-photo");
  if (s.photo) {
    photoEl.src = s.photo; photoEl.style.display = "block"; noPhoto.style.display = "none";
  } else {
    photoEl.style.display = "none"; noPhoto.style.display = "flex";
  }

  document.getElementById("dossier-modal").style.display = "flex";
}

function closeDossier() {
  document.getElementById("dossier-modal").style.display = "none";
}

let _photoDataUrl = null;

function handlePhotoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 3 * 1024 * 1024) { alert("Файл слишком большой. Максимум 3 МБ."); return; }
  const reader = new FileReader();
  reader.onload = e => {
    _photoDataUrl = e.target.result;
    const prev = document.getElementById("photo-preview");
    prev.src = _photoDataUrl; prev.style.display = "block";
    document.getElementById("photo-label").textContent = "✓ ФОТО ЗАГРУЖЕНО";
  };
  reader.readAsDataURL(file);
}

async function addStalker() {
  const callsign = document.getElementById("s-callsign").value.trim();
  const fullname = document.getElementById("s-fullname").value.trim();
  if (!callsign || !fullname) { alert("Заполните позывной и ФИО"); return; }

  const btn = document.querySelector(".stalker-form .btn-action");
  if (btn) { btn.disabled = true; btn.textContent = "СОХРАНЕНИЕ..."; }

  const ok = await dbAddStalker({
    callsign, fullname,
    dob:     document.getElementById("s-dob").value.trim(),
    origin:  document.getElementById("s-origin").value.trim(),
    purpose: document.getElementById("s-purpose").value.trim(),
    photo:   _photoDataUrl || null,
  });

  if (btn) { btn.disabled = false; btn.textContent = "+ ВНЕСТИ В РЕЕСТР"; }

  if (ok) {
    ["s-callsign","s-fullname","s-dob","s-origin","s-purpose"].forEach(id => {
      document.getElementById(id).value = "";
    });
    await loadAndRenderStalkers();
  } else {
    alert("Ошибка при сохранении. Проверьте подключение.");
  }
}

async function deleteStalker(id) {
  if (!confirm("Удалить запись из реестра?")) return;
  await dbDeleteStalker(id);
  await loadAndRenderStalkers();
}

// ── ЖУРНАЛ ОТЧЁТОВ ────────────────────────────────────────
async function loadAndRenderReports() {
  document.getElementById("reports-list").innerHTML =
    `<div class="empty-cell" style="padding:24px;text-align:center">Загрузка...</div>`;
  _reports = await dbGetReports();
  renderReports();
}

function renderReports() {
  const el = document.getElementById("reports-list");
  if (!el) return;
  document.getElementById("rep-count").textContent = _reports.length + " записей";
  el.innerHTML = _reports.length === 0
    ? `<div class="empty-cell" style="padding:24px;text-align:center">Журнал пуст</div>`
    : _reports.map(r => `
        <div class="report-card">
          <div class="rep-header">
            <span class="rep-author">${r.author}</span>
            <span class="rep-role">${r.role}</span>
            <span class="rep-time">${new Date(r.created_at).toLocaleString("ru-RU")}</span>
            ${_isAdmin ? `<button class="btn-del" onclick="deleteReport('${r.id}')">✕</button>` : ""}
          </div>
          <div class="rep-body">${r.body}</div>
        </div>`).join("");
}

async function addReport() {
  const s    = Auth.getSession();
  const text = document.getElementById("report-text").value.trim();
  if (!text) return;

  const btn = document.querySelector("#report-form .btn-action");
  if (btn) { btn.disabled = true; btn.textContent = "СОХРАНЕНИЕ..."; }

  const ok = await dbAddReport({ author: s.name, role: s.role, text });

  if (btn) { btn.disabled = false; btn.textContent = "СОХРАНИТЬ ЗАПИСЬ"; }

  if (ok) {
    document.getElementById("report-text").value = "";
    await loadAndRenderReports();
  } else {
    alert("Ошибка при сохранении.");
  }
}

async function deleteReport(id) {
  if (!confirm("Удалить запись?")) return;
  await dbDeleteReport(id);
  await loadAndRenderReports();
}

// ── АДМИНИСТРАТИВНАЯ ПАНЕЛЬ ───────────────────────────────
async function loadAndRenderAdmin() {
  const [stalkers, reports] = await Promise.all([dbGetStalkers(), dbGetReports()]);
  document.getElementById("admin-arts").textContent     = ARTIFACTS.length;
  document.getElementById("admin-stalkers").textContent = stalkers.length;
  document.getElementById("admin-reports").textContent  = reports.length;
}

async function clearReports() {
  if (!confirm("Очистить весь журнал отчётов?")) return;
  await dbClearReports();
  await loadAndRenderAdmin();
}

async function clearStalkers() {
  if (!confirm("Очистить весь реестр сталкеров?")) return;
  await dbClearStalkers();
  await loadAndRenderAdmin();
}
