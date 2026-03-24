// ============================================================
// НИИЧАЗ — Авторизация
// Для добавления/удаления сотрудника — редактируй USERS
// ============================================================

const USERS = [
  {
    id: "001",
    name: "Кот",
    login: "Kot",
    password: "NIICHAZ_Kot_2024",
    role: "Директор института",
    level: "admin",
    department: "Руководство"
  },
  {
    id: "002",
    name: "Лисёнов",
    login: "lisenov",
    password: "LS_niichaz_24",
    role: "Старший научный сотрудник",
    level: "senior",
    department: "Аномалистика"
  },
  {
    id: "003",
    name: "Хельмут",
    login: "helmut",
    password: "HM_niichaz_24",
    role: "Старший научный сотрудник",
    level: "senior",
    department: "Аномалистика"
  },
  {
    id: "004",
    name: "Данте",
    login: "dante",
    password: "DN_niichaz_24",
    role: "Старший научный сотрудник",
    level: "senior",
    department: "Биология"
  },
  {
    id: "005",
    name: "Обухов",
    login: "obukhov",
    password: "OB_niichaz_24",
    role: "Старший научный сотрудник",
    level: "senior",
    department: "Биология"
  },
  {
    id: "006",
    name: "Комаров",
    login: "komarov",
    password: "KM_niichaz_24",
    role: "Старший научный сотрудник",
    level: "senior",
    department: "Исследования"
  }
];

const Auth = (() => {
  const KEY = "niichaz_session";
  function login(loginInput, pw) {
    const user = USERS.find(u => u.login === loginInput.trim() && u.password === pw);
    if (!user) return { success: false };
    const session = {
      id: user.id, name: user.name, login: user.login,
      role: user.role, level: user.level, department: user.department,
      loginTime: new Date().toISOString()
    };
    sessionStorage.setItem(KEY, JSON.stringify(session));
    return { success: true, user: session };
  }
  function logout() { sessionStorage.removeItem(KEY); }
  function getSession() {
    const raw = sessionStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  }
  function hasAccess(required) {
    const s = getSession();
    if (!s) return false;
    const levels = ["junior", "senior", "admin"];
    return levels.indexOf(s.level) >= levels.indexOf(required);
  }
  function isLoggedIn() { return !!getSession(); }
  return { login, logout, getSession, hasAccess, isLoggedIn };
})();
