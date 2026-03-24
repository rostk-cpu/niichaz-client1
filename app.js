// ============================================================
// НИИЧАЗ — Supabase клиент
// ============================================================

const SUPABASE_URL = "https://ezlhucfkhoyaumjwofbf.supabase.co";
const SUPABASE_KEY = "sb_publishable_WIZRuvTCUXIcAdCe3MzY-A_aA5u70Si";

// Инициализация клиента через CDN
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

// ── СТАЛКЕРЫ ──────────────────────────────────────────────

async function dbGetStalkers() {
  const { data, error } = await db.from("stalkers").select("*").order("added", { ascending: false });
  if (error) { console.error("getStalkers:", error.message); return []; }
  return data || [];
}

async function dbAddStalker(stalker) {
  const { error } = await db.from("stalkers").insert({
    callsign: stalker.callsign,
    fullname: stalker.fullname,
    dob:      stalker.dob      || null,
    origin:   stalker.origin   || null,
    purpose:  stalker.purpose  || null,
    photo:    stalker.photo    || null,
  });
  if (error) { console.error("addStalker:", error.message); return false; }
  return true;
}

async function dbDeleteStalker(id) {
  const { error } = await db.from("stalkers").delete().eq("id", id);
  if (error) { console.error("deleteStalker:", error.message); return false; }
  return true;
}

// ── ОТЧЁТЫ ────────────────────────────────────────────────

async function dbGetReports() {
  const { data, error } = await db.from("reports").select("*").order("created_at", { ascending: false });
  if (error) { console.error("getReports:", error.message); return []; }
  return data || [];
}

async function dbAddReport(report) {
  const { error } = await db.from("reports").insert({
    author: report.author,
    role:   report.role,
    body:   report.text,
  });
  if (error) { console.error("addReport:", error.message); return false; }
  return true;
}

async function dbDeleteReport(id) {
  const { error } = await db.from("reports").delete().eq("id", id);
  if (error) { console.error("deleteReport:", error.message); return false; }
  return true;
}

async function dbClearReports() {
  const { error } = await db.from("reports").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  if (error) { console.error("clearReports:", error.message); return false; }
  return true;
}

async function dbClearStalkers() {
  const { error } = await db.from("stalkers").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  if (error) { console.error("clearStalkers:", error.message); return false; }
  return true;
}

// ── ЦЕНЫ АРТЕФАКТОВ ────────────────────────────────────────

async function dbGetArtifactPrices() {
  const { data, error } = await db.from("artifact_prices").select("*");
  if (error) { console.error("getArtPrices:", error.message); return []; }
  return data || [];
}

async function dbSetArtifactPrice(id, buy) {
  const { error } = await db.from("artifact_prices").upsert({ artifact_id: id, buy }, { onConflict: "artifact_id" });
  if (error) { console.error("setArtPrice:", error.message); }
}

// ── ЦЕНЫ МУТАНТОВ ──────────────────────────────────────────

async function dbGetMutantPrices() {
  const { data, error } = await db.from("mutant_prices").select("*");
  if (error) { console.error("getMutPrices:", error.message); return []; }
  return data || [];
}

async function dbSetMutantPrice(id, buy) {
  const { error } = await db.from("mutant_prices").upsert({ mutant_id: id, buy }, { onConflict: "mutant_id" });
  if (error) { console.error("setMutPrice:", error.message); }
}
