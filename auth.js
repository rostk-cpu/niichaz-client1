/* ============================================================
   НИИЧАЗ — Финальная версия стилей
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;500;600&family=PT+Sans+Narrow:wght@400;700&display=swap');

:root {
  --green:        #00e85a;
  --green-bright: #1aff6e;
  --green-dim:    #00602a;
  --green-mid:    #008a3a;
  --green-glow:   rgba(0,232,90,0.10);
  --green-glow2:  rgba(0,232,90,0.04);

  --amber:        #f0b000;
  --amber-bright: #ffc933;
  --amber-dim:    rgba(240,176,0,0.12);

  --red:          #e03535;
  --red-bright:   #ff5555;
  --red-dim:      rgba(224,53,53,0.10);

  --purple:       #a855f7;
  --purple-dim:   rgba(168,85,247,0.12);

  --bg:    #050c07;
  --surf:  #0a1710;
  --surf2: #0d1d13;
  --surf3: #112217;
  --surf4: #162b1c;

  --border:  #1a3322;
  --border2: #234d30;
  --border3: #2e6640;

  --text:  #cce8d4;
  --text2: #7aaa88;
  --text3: #4a7558;
  --muted: #2e5038;

  --mono: 'Share Tech Mono', monospace;
  --head: 'Rajdhani', 'PT Sans Narrow', sans-serif;
  --sans: 'PT Sans Narrow', sans-serif;
}

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);font-family:var(--sans);font-size:14px;line-height:1.65;min-height:100vh;-webkit-font-smoothing:antialiased;}

/* Сканлинии */
body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:9000;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.055) 2px,rgba(0,0,0,0.055) 4px);}
/* Фоновое свечение */
body::after{content:'';position:fixed;inset:0;pointer-events:none;z-index:-1;background:radial-gradient(ellipse 60% 40% at 50% 0%,rgba(0,110,45,0.06) 0%,transparent 70%);}

a{color:var(--green);}
code{font-family:var(--mono);font-size:11px;background:var(--surf3);border:1px solid var(--border2);padding:1px 6px;border-radius:2px;color:var(--green);}
#app{display:flex;flex-direction:column;min-height:100vh;}

/* ── ХЕДЕР ──────────────────────────────────────────────── */
.header{position:sticky;top:0;z-index:200;background:linear-gradient(180deg,var(--surf2) 0%,var(--surf) 100%);border-bottom:1px solid var(--border2);display:flex;align-items:center;padding:0 28px;height:58px;gap:20px;}
.header::after{content:'';position:absolute;bottom:-1px;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent 0%,var(--green-mid) 30%,var(--green) 50%,var(--green-mid) 70%,transparent 100%);opacity:0.45;}

.logo{display:flex;align-items:center;gap:12px;font-family:var(--head);font-size:22px;font-weight:600;letter-spacing:5px;color:var(--green-bright);text-shadow:0 0 24px rgba(0,232,90,0.5),0 0 48px rgba(0,232,90,0.15);flex-shrink:0;}
.logo-svg{width:40px;height:40px;color:var(--green);filter:drop-shadow(0 0 6px rgba(0,232,90,0.5));animation:logo-pulse 4s ease-in-out infinite;}
@keyframes logo-pulse{0%,100%{filter:drop-shadow(0 0 5px rgba(0,232,90,0.35));}50%{filter:drop-shadow(0 0 12px rgba(0,232,90,0.65));}}

.header-stamp{font-family:var(--mono);font-size:9px;letter-spacing:2.5px;color:var(--red-bright);border:1px solid rgba(255,85,85,0.35);padding:3px 10px;border-radius:2px;background:rgba(224,53,53,0.07);flex-shrink:0;animation:stamp-flicker 10s infinite;}
@keyframes stamp-flicker{0%,95%,100%{opacity:1;}96%{opacity:0.5;}98%{opacity:0.8;}}

.header-right{margin-left:auto;display:flex;align-items:center;gap:22px;font-family:var(--mono);font-size:11px;}
.hdr-status{display:flex;align-items:center;gap:7px;color:var(--text3);}
.status-dot{width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 6px var(--green);animation:dot-pulse 2s ease-in-out infinite;}
@keyframes dot-pulse{0%,100%{opacity:1;box-shadow:0 0 6px var(--green);}50%{opacity:0.35;box-shadow:none;}}
#clock{color:var(--green);letter-spacing:2px;font-size:13px;text-shadow:0 0 8px rgba(0,232,90,0.35);}
.hdr-sep{width:1px;height:24px;background:var(--border2);}
.hdr-user{text-align:right;}
#user-indicator{display:block;font-size:11px;color:var(--green-bright);letter-spacing:1px;text-shadow:0 0 6px rgba(0,232,90,0.25);}
#user-role{display:block;font-size:9px;color:var(--text3);letter-spacing:1px;margin-top:1px;}

/* ── НАВИГАЦИЯ ──────────────────────────────────────────── */
.nav{background:var(--surf);border-bottom:1px solid var(--border);display:flex;padding:0 16px;overflow-x:auto;scrollbar-width:none;position:relative;z-index:100;}
.nav::-webkit-scrollbar{display:none;}
.nav-item{font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--text3);background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-1px;padding:12px 16px;cursor:pointer;white-space:nowrap;transition:color 0.2s,border-color 0.2s;}
.nav-item:hover{color:var(--text2);}
.nav-item.active{color:var(--green-bright);border-bottom-color:var(--green);text-shadow:0 0 8px rgba(0,232,90,0.25);}
.nav-locked{display:none!important;}
.nav-sep{flex:1;}
#nav-login{color:var(--text3);border-left:1px solid var(--border);padding-left:20px;}
#nav-login:hover{color:var(--green);}
#nav-logout{color:var(--text3);border-left:1px solid var(--border);padding-left:20px;}
#nav-logout:hover{color:var(--red-bright);}

/* ── LAYOUT ──────────────────────────────────────────────── */
.main{flex:1;padding:28px;max-width:1300px;width:100%;margin:0 auto;}
.page{display:none;flex-direction:column;gap:22px;animation:page-in 0.2s ease;}
.page.active{display:flex;}
@keyframes page-in{from{opacity:0;transform:translateY(5px);}to{opacity:1;transform:translateY(0);}}

/* ── ЗАГОЛОВОК СЕКЦИИ ────────────────────────────────────── */
.sec-hdr{display:flex;align-items:center;gap:12px;font-family:var(--mono);font-size:9px;letter-spacing:2.5px;color:var(--text3);margin-bottom:10px;}
.sec-hdr::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,var(--border2) 0%,transparent 100%);}
.sec-badge{font-family:var(--mono);font-size:9px;letter-spacing:1px;background:var(--green-glow);border:1px solid var(--green-dim);color:var(--green);padding:1px 9px;border-radius:2px;}

/* ── КАРТОЧКИ ────────────────────────────────────────────── */
.card{background:var(--surf);border:1px solid var(--border2);border-radius:4px;padding:18px 22px;position:relative;overflow:hidden;}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--green-dim),transparent);opacity:0.4;}

/* ── УВЕДОМЛЕНИЯ ──────────────────────────────────────────── */
.notice{background:rgba(240,176,0,0.05);border:1px solid rgba(240,176,0,0.2);border-left:3px solid var(--amber);border-radius:3px;padding:11px 16px;font-family:var(--mono);font-size:11px;color:var(--amber);line-height:1.7;}
.notice-err{background:var(--red-dim);border:1px solid rgba(224,53,53,0.22);border-left:3px solid var(--red);border-radius:3px;padding:10px 16px;font-family:var(--mono);font-size:11px;color:var(--red-bright);display:none;margin-top:12px;}
.info{background:var(--green-glow2);border:1px solid var(--border2);border-left:3px solid var(--green-dim);border-radius:3px;padding:11px 16px;font-size:13px;color:var(--text2);line-height:1.7;}
.info p+p{margin-top:5px;}

/* ── МЕТРИКИ ──────────────────────────────────────────────── */
.metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;}
.metric{background:var(--surf2);border:1px solid var(--border2);border-radius:4px;padding:16px 18px;position:relative;overflow:hidden;transition:border-color 0.2s;}
.metric:hover{border-color:var(--border3);}
.metric::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--green-dim),transparent);opacity:0.4;}
.m-label{font-family:var(--mono);font-size:9px;letter-spacing:2px;color:var(--text3);margin-bottom:8px;display:block;}
.m-value{font-family:var(--head);font-size:38px;font-weight:600;color:var(--green-bright);text-shadow:0 0 20px rgba(0,232,90,0.25);line-height:1;}
.m-sub{font-family:var(--mono);font-size:9px;color:var(--muted);margin-top:5px;}

/* ── ПРОФИЛЬ ──────────────────────────────────────────────── */
.profile{background:var(--surf2);border:1px solid var(--border2);border-radius:4px;padding:20px 24px;display:flex;align-items:center;gap:20px;flex-wrap:wrap;position:relative;overflow:hidden;}
.profile::before{content:'';position:absolute;top:0;left:0;bottom:0;width:3px;background:linear-gradient(180deg,var(--green-bright),var(--green-dim));}
.avatar{width:54px;height:54px;border-radius:3px;background:var(--green-glow);border:1px solid var(--green-dim);display:flex;align-items:center;justify-content:center;font-family:var(--head);font-size:22px;font-weight:600;color:var(--green);flex-shrink:0;}
.p-name{font-family:var(--head);font-size:18px;font-weight:600;color:var(--green-bright);letter-spacing:1px;}
.p-role{font-size:13px;color:var(--text2);margin-top:2px;}
.p-dept{font-family:var(--mono);font-size:9px;color:var(--text3);letter-spacing:1px;margin-top:4px;}
.clearance{display:inline-block;font-family:var(--mono);font-size:9px;letter-spacing:1.5px;padding:3px 10px;border-radius:2px;margin-top:6px;border:1px solid transparent;}
.cl-junior{background:var(--green-glow);color:var(--green);border-color:var(--green-dim);}
.cl-senior{background:var(--amber-dim);color:var(--amber-bright);border-color:rgba(240,176,0,0.3);}
.cl-admin{background:var(--red-dim);color:var(--red-bright);border-color:rgba(224,53,53,0.3);}
.p-time{margin-left:auto;text-align:right;}
.p-time-label{font-family:var(--mono);font-size:9px;color:var(--text3);letter-spacing:1px;}
.p-time-val{font-family:var(--mono);font-size:13px;color:var(--green);margin-top:3px;}

/* ── ТАБЛИЦЫ ──────────────────────────────────────────────── */
.table-wrap{overflow-x:auto;}
.data-table{width:100%;border-collapse:collapse;font-size:13px;}
.data-table th{text-align:left;padding:9px 14px;font-family:var(--mono);font-size:9px;letter-spacing:1.5px;color:var(--text3);border-bottom:1px solid var(--border2);background:rgba(0,0,0,0.2);white-space:nowrap;user-select:none;}
.data-table td{padding:11px 14px;border-bottom:1px solid rgba(26,51,34,0.5);vertical-align:middle;}
.data-table tbody tr{transition:background 0.12s;}
.data-table tbody tr:hover td{background:rgba(0,232,90,0.03);}
.data-table tbody tr:last-child td{border-bottom:none;}
.stalker-row{cursor:pointer;}
.stalker-row:hover td{background:rgba(0,232,90,0.05)!important;}

.col-name{font-family:var(--head);font-size:14px;font-weight:500;color:var(--text);white-space:nowrap;}
.col-effect{color:var(--text2);font-size:12px;max-width:360px;line-height:1.5;}
.col-price{font-family:var(--mono);font-size:13px;color:var(--green);white-space:nowrap;}

/* ── БЕЙДЖИ ───────────────────────────────────────────────── */
.badge{display:inline-block;font-family:var(--mono);font-size:9px;letter-spacing:1px;padding:3px 8px;border-radius:2px;border:1px solid transparent;white-space:nowrap;}
.rar-common  {background:rgba(0,232,90,0.07);color:var(--green);border-color:rgba(0,232,90,0.2);}
.rar-uncommon{background:var(--amber-dim);color:var(--amber-bright);border-color:rgba(240,176,0,0.25);}
.rar-rare    {background:rgba(255,85,85,0.08);color:#ff8888;border-color:rgba(255,85,85,0.25);}
.rar-unique  {background:var(--purple-dim);color:#c084fc;border-color:rgba(168,85,247,0.3);}
.thr-low {background:rgba(0,232,90,0.07);color:var(--green);border-color:rgba(0,232,90,0.2);}
.thr-med {background:var(--amber-dim);color:var(--amber-bright);border-color:rgba(240,176,0,0.25);}
.thr-high{background:rgba(255,85,85,0.08);color:var(--red-bright);border-color:rgba(255,85,85,0.25);}
.thr-crit{background:rgba(255,0,0,0.13);color:#ff3333;border-color:rgba(255,0,0,0.3);}
.thr-anom{background:var(--purple-dim);color:#c084fc;border-color:rgba(168,85,247,0.3);}

/* ── ПОИСК ───────────────────────────────────────────────── */
.search-wrap{display:flex;align-items:center;gap:10px;background:var(--surf3);border:1px solid var(--border2);border-radius:3px;padding:0 12px;margin-bottom:14px;width:300px;transition:border-color 0.2s;}
.search-wrap:focus-within{border-color:var(--green-dim);}
.search-wrap input{background:none;border:none;outline:none;font-family:var(--mono);font-size:12px;color:var(--text);padding:8px 0;width:100%;}
.search-wrap input::placeholder{color:var(--muted);}
.search-icon{font-size:14px;color:var(--text3);}

/* ── ФОРМА ВХОДА ─────────────────────────────────────────── */
.login-wrap{display:flex;justify-content:center;align-items:center;padding:40px 16px;min-height:70vh;}
.login-box{width:100%;max-width:420px;background:var(--surf);border:1px solid var(--border2);border-radius:4px;padding:36px;position:relative;overflow:hidden;}
.login-box::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--green-mid),var(--green),var(--green-mid),transparent);}
.login-logo{display:flex;align-items:center;gap:10px;margin-bottom:24px;font-family:var(--head);font-size:17px;font-weight:600;letter-spacing:4px;color:var(--green);}
.login-logo svg{width:30px;height:30px;color:var(--green);}
.login-title{font-family:var(--head);font-size:20px;font-weight:600;letter-spacing:3px;color:var(--green-bright);}
.login-sub{font-family:var(--mono);font-size:9px;letter-spacing:1.5px;color:var(--text3);margin:5px 0 28px;}

.form-group{margin-bottom:18px;}
.form-label{display:block;font-family:var(--mono);font-size:9px;letter-spacing:1.5px;color:var(--text3);margin-bottom:7px;}
.form-input{width:100%;background:rgba(0,0,0,0.35);border:1px solid var(--border2);border-radius:3px;padding:10px 14px;color:var(--text);font-family:var(--mono);font-size:13px;outline:none;transition:border-color 0.2s,background 0.2s;}
.form-input:focus{border-color:var(--green-dim);background:rgba(0,0,0,0.5);}
select.form-input{cursor:pointer;}
textarea.form-input{resize:vertical;min-height:100px;line-height:1.6;}

.btn-submit{width:100%;background:rgba(0,232,90,0.08);border:1px solid var(--green-dim);color:var(--green-bright);font-family:var(--mono);font-size:11px;letter-spacing:2px;padding:12px 20px;border-radius:3px;cursor:pointer;transition:all 0.2s;}
.btn-submit:hover{background:rgba(0,232,90,0.15);border-color:var(--green-mid);box-shadow:0 0 20px rgba(0,232,90,0.08);}
.btn-submit:disabled{opacity:0.4;cursor:not-allowed;}

.btn-action{background:rgba(0,232,90,0.07);border:1px solid var(--green-dim);color:var(--green);font-family:var(--mono);font-size:10px;letter-spacing:1px;padding:8px 18px;border-radius:3px;cursor:pointer;transition:all 0.2s;white-space:nowrap;}
.btn-action:hover{background:rgba(0,232,90,0.14);border-color:var(--green-mid);}
.btn-danger{background:var(--red-dim);border:1px solid rgba(224,53,53,0.28);color:var(--red-bright);font-family:var(--mono);font-size:10px;letter-spacing:1px;padding:8px 18px;border-radius:3px;cursor:pointer;transition:all 0.2s;}
.btn-danger:hover{background:rgba(224,53,53,0.18);}
.btn-del{background:none;border:1px solid rgba(224,53,53,0.18);color:var(--text3);font-size:11px;padding:3px 9px;border-radius:2px;cursor:pointer;transition:all 0.15s;}
.btn-del:hover{color:var(--red-bright);border-color:rgba(255,85,85,0.5);}

/* ── ТЕРМИНАЛ ─────────────────────────────────────────────── */
.terminal{background:rgba(0,0,0,0.5);border:1px solid var(--border2);border-radius:3px;padding:14px 16px;font-family:var(--mono);font-size:11px;color:var(--text3);line-height:2;margin-top:14px;}
.t-ok{color:var(--green);}
.t-err{color:var(--red-bright);}
.t-line::before{content:'$ ';color:var(--muted);}

/* ── ЛОГ ──────────────────────────────────────────────────── */
.log-entry{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid rgba(26,51,34,0.4);font-size:12px;}
.log-entry:last-child{border-bottom:none;}
.log-who{font-family:var(--mono);font-size:10px;color:var(--green);white-space:nowrap;min-width:120px;}
.log-msg{color:var(--text2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.log-time{font-family:var(--mono);font-size:9px;color:var(--muted);white-space:nowrap;}
.log-empty{font-family:var(--mono);font-size:11px;color:var(--muted);}

/* ── INLINE ───────────────────────────────────────────────── */
.inline-in{background:transparent;border:1px solid transparent;border-radius:2px;color:var(--green);font-family:var(--mono);font-size:12px;padding:3px 7px;width:110px;outline:none;transition:all 0.15s;}
.inline-in:hover{border-color:var(--border2);background:rgba(0,0,0,0.2);}
.inline-in:focus{border-color:var(--green-dim);background:rgba(0,0,0,0.35);}

/* ── ФОРМА ДОБАВЛЕНИЯ ────────────────────────────────────── */
.add-row{display:none;flex-wrap:wrap;gap:10px;margin-top:16px;padding-top:16px;border-top:1px solid var(--border2);align-items:flex-end;}
.add-field{display:flex;flex-direction:column;gap:5px;}
.add-label{font-family:var(--mono);font-size:9px;letter-spacing:1px;color:var(--text3);}
.add-field .form-input{width:auto;padding:8px 11px;font-size:12px;}
.add-field.grow{flex:1;min-width:150px;}
.add-field.grow .form-input{width:100%;}

/* ── РЕЕСТР ───────────────────────────────────────────────── */
.stalker-form{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px;margin-bottom:18px;padding:16px;border:1px solid var(--border);border-radius:3px;background:var(--surf3);}
.stalker-form .add-field .form-input{width:100%;}
.stalker-form-title{grid-column:1/-1;font-family:var(--mono);font-size:9px;letter-spacing:2px;color:var(--text3);padding-bottom:10px;border-bottom:1px solid var(--border);}

.photo-upload-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;background:rgba(0,232,90,0.05);border:1px dashed var(--border3);color:var(--green);font-family:var(--mono);font-size:10px;letter-spacing:1px;padding:9px 12px;border-radius:3px;cursor:pointer;transition:all 0.2s;width:100%;}
.photo-upload-btn:hover{background:rgba(0,232,90,0.10);border-color:var(--green-dim);}
.photo-preview{width:100%;max-height:130px;object-fit:cover;border:1px solid var(--border2);border-radius:2px;margin-top:6px;}
.thumb{width:42px;height:42px;object-fit:cover;border:1px solid var(--border2);border-radius:2px;display:block;}
.thumb-empty{width:42px;height:42px;background:var(--surf3);border:1px solid var(--border);border-radius:2px;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:9px;color:var(--muted);}
.empty-cell{font-family:var(--mono);font-size:11px;color:var(--muted);text-align:center;padding:30px;}

/* ── ОТЧЁТЫ ───────────────────────────────────────────────── */
.report-card{background:var(--surf2);border:1px solid var(--border2);border-radius:3px;padding:14px 18px;margin-bottom:10px;transition:border-color 0.15s;}
.report-card:hover{border-color:var(--border3);}
.rep-header{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--border);}
.rep-author{font-family:var(--mono);font-size:11px;color:var(--green);}
.rep-role{font-family:var(--mono);font-size:9px;color:var(--text3);}
.rep-time{font-family:var(--mono);font-size:9px;color:var(--muted);margin-left:auto;}
.rep-body{font-size:13px;color:var(--text2);line-height:1.65;white-space:pre-wrap;}

/* ══ МОДАЛЬНОЕ ДОСЬЕ ════════════════════════════════════════ */
.modal-overlay{display:none;position:fixed;inset:0;z-index:10000;background:rgba(2,8,4,0.92);align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px);}

.dossier{background:var(--surf);border:1px solid var(--border2);border-radius:4px;width:100%;max-width:660px;overflow:hidden;box-shadow:0 0 60px rgba(0,100,40,0.12),0 0 2px rgba(0,232,90,0.08);animation:dossier-in 0.25s ease;}
@keyframes dossier-in{from{opacity:0;transform:scale(0.97) translateY(10px);}to{opacity:1;transform:scale(1) translateY(0);}}

.dossier-header{display:flex;align-items:center;justify-content:space-between;padding:13px 22px;background:rgba(0,0,0,0.3);border-bottom:1px solid var(--border2);position:relative;}
.dossier-header::after{content:'';position:absolute;bottom:-1px;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--green-dim),transparent);}
.dossier-stamp{font-family:var(--mono);font-size:10px;letter-spacing:3px;color:var(--green);text-shadow:0 0 10px rgba(0,232,90,0.4);}
.dossier-id{font-family:var(--mono);font-size:9px;color:var(--text3);letter-spacing:1px;}
.dossier-close{background:none;border:1px solid var(--border2);color:var(--text3);font-size:12px;cursor:pointer;padding:3px 9px;border-radius:2px;transition:all 0.15s;}
.dossier-close:hover{color:var(--red-bright);border-color:rgba(255,85,85,0.4);}

.dossier-body{display:flex;min-height:280px;}

.dossier-photo-col{width:210px;flex-shrink:0;background:rgba(0,0,0,0.4);border-right:1px solid var(--border2);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;}
.dossier-photo{width:100%;height:100%;object-fit:cover;display:block;}
.dossier-no-photo{width:100%;min-height:280px;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--muted);text-align:center;}
.dossier-photo-col::before,.dossier-photo-col::after,.dossier-corner-br,.dossier-corner-tl{position:absolute;width:16px;height:16px;border-color:var(--green);border-style:solid;opacity:0.5;}
.dossier-photo-col::before{content:'';top:10px;left:10px;border-width:1px 0 0 1px;}
.dossier-photo-col::after{content:'';bottom:10px;right:10px;border-width:0 1px 1px 0;}
.dossier-corner-br{bottom:10px;left:10px;border-width:0 0 1px 1px;}
.dossier-corner-tl{top:10px;right:10px;border-width:1px 1px 0 0;}
.dossier-scan-lines{position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.10) 3px,rgba(0,0,0,0.10) 4px);}

.dossier-data{flex:1;padding:20px 26px;display:flex;flex-direction:column;}
.dossier-callsign{font-family:var(--head);font-size:26px;font-weight:600;letter-spacing:2px;color:var(--green-bright);text-shadow:0 0 16px rgba(0,232,90,0.3);margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--border2);}
.dossier-field{display:flex;flex-direction:column;padding:8px 0;border-bottom:1px solid rgba(26,51,34,0.3);}
.dossier-field:last-of-type{border-bottom:none;}
.dossier-label{font-family:var(--mono);font-size:8px;letter-spacing:2px;color:var(--text3);margin-bottom:3px;}
.dossier-value{font-size:13px;color:var(--text);}
.dossier-status{margin-top:auto;padding-top:14px;border-top:1px solid var(--border2);display:flex;align-items:center;gap:10px;}
.dossier-reg-date{font-family:var(--mono);font-size:9px;color:var(--muted);margin-left:auto;}

/* ── ФУТЕР ───────────────────────────────────────────────── */
footer{border-top:1px solid var(--border);background:var(--surf);padding:12px 28px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:1px;}
footer span:first-child{color:var(--text3);}

/* ── СКРОЛЛ ──────────────────────────────────────────────── */
::-webkit-scrollbar{width:5px;height:5px;}
::-webkit-scrollbar-track{background:var(--bg);}
::-webkit-scrollbar-thumb{background:var(--border2);border-radius:3px;}
::-webkit-scrollbar-thumb:hover{background:var(--border3);}

/* ── АДАПТИВ ─────────────────────────────────────────────── */
@media(max-width:768px){
  .header{padding:0 16px;height:52px;}
  .main{padding:16px;}
  .logo{font-size:17px;letter-spacing:3px;}
  .header-stamp,.hdr-sep{display:none;}
  .metrics{grid-template-columns:1fr 1fr;}
  .profile{flex-direction:column;align-items:flex-start;}
  .p-time{margin-left:0;text-align:left;}
  .dossier-body{flex-direction:column;}
  .dossier-photo-col{width:100%;min-height:220px;border-right:none;border-bottom:1px solid var(--border2);}
  .search-wrap{width:100%;}
}
@media(max-width:480px){
  .metrics{grid-template-columns:1fr;}
  .stalker-form{grid-template-columns:1fr;}
  .logo-svg{width:30px;height:30px;}
}
