<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Property CRM">
<meta name="theme-color" content="#0a0e1a">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="icon" type="image/png" href="icon-512.png">
<title>Geovanny Property CRM</title>
<style>
  :root{
    --bg:#0a0e1a;--card:#121a2e;--card2:#0f1726;--line:#1e2942;--line2:#26324f;
    --text:#e7ecf5;--muted:#8a96ad;--muted2:#6b7793;
    --green:#22c55e;--green-d:#16a34a;--purple:#a78bfa;--blue:#3b82f6;
    --amber:#eab308;--orange:#f97316;--red:#ef4444;
  }
  *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
  html,body{background:var(--bg);color:var(--text);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing:antialiased;}
  body{min-height:100vh;background:
    radial-gradient(1200px 600px at 70% -10%, #122036 0%, rgba(10,14,26,0) 60%),var(--bg);}

  header{position:sticky;top:0;z-index:50;background:rgba(10,14,26,.92);
    backdrop-filter:blur(10px);border-bottom:1px solid var(--line);}
  .brand{display:flex;align-items:center;gap:10px;padding:12px 18px 0;}
  .brand .dot{width:9px;height:9px;border-radius:50%;background:var(--green);box-shadow:0 0 12px var(--green);}
  .brand h1{font-size:14px;font-weight:700;letter-spacing:.04em;color:#cfd8e8;}
  nav{display:flex;gap:4px;padding:8px 10px 0;overflow-x:auto;scrollbar-width:none;}
  nav::-webkit-scrollbar{display:none;}
  .tab{flex:0 0 auto;background:none;border:none;color:var(--muted);font-size:14px;font-weight:600;
    padding:10px 14px;cursor:pointer;border-bottom:2px solid transparent;white-space:nowrap;transition:color .15s;}
  .tab:hover{color:#c4cde0;}
  .tab.active{color:#fff;border-bottom-color:var(--green);}

  main{max-width:1180px;margin:0 auto;padding:22px 18px 90px;}
  .view{display:none;animation:fade .25s ease;}
  .view.active{display:block;}
  @keyframes fade{from{opacity:0;transform:translateY(4px);}to{opacity:1;transform:none;}}
  .section-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:10px;}
  .section-title{font-size:13px;font-weight:700;letter-spacing:.12em;color:var(--muted);}
  .count-pill{font-size:12px;font-weight:600;color:#cdd6e8;background:#1a2540;border:1px solid var(--line2);
    border-radius:999px;padding:5px 12px;white-space:nowrap;}

  .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:26px;}
  .stat{background:linear-gradient(180deg,var(--card),var(--card2));border:1px solid var(--line);
    border-radius:14px;padding:18px;}
  .stat .label{font-size:11px;font-weight:600;letter-spacing:.1em;color:var(--muted2);text-transform:uppercase;margin-bottom:14px;}
  .stat .big{font-size:30px;font-weight:800;letter-spacing:-.02em;line-height:1;}
  .stat .sub{font-size:12px;color:var(--muted2);margin-top:8px;}
  .stat.green .big{color:var(--green);}
  .stat.purple .big{color:var(--purple);}

  .stack{display:flex;flex-direction:column;gap:12px;}

  /* property cards (expandable) */
  .pcard{background:linear-gradient(180deg,#101728,#0d1422);border:1px solid var(--line);
    border-radius:14px;overflow:hidden;transition:border-color .15s;}
  .pcard.open{border-color:var(--line2);}
  .pcard-main{display:flex;align-items:center;gap:14px;padding:16px 18px;cursor:pointer;}
  .pcard-main .idx{flex:0 0 auto;width:20px;color:var(--muted2);font-size:12px;font-weight:600;}
  .pcard-main .info{flex:1;min-width:0;}
  .pcard-main .addr{font-size:15.5px;font-weight:700;color:#f1f4fa;}
  .pcard-main .meta{font-size:13px;color:var(--muted);margin-top:4px;}
  .pcard-main .right{flex:0 0 auto;display:flex;align-items:center;gap:8px;}
  .chev{color:var(--muted2);font-size:13px;transition:transform .2s;}
  .pcard.open .chev{transform:rotate(180deg);}
  .pcard-extra{display:none;padding:2px 18px 18px;border-top:1px solid var(--line);}
  .pcard.open .pcard-extra{display:block;}
  .extra-label{font-size:11px;font-weight:700;letter-spacing:.1em;color:var(--muted2);text-transform:uppercase;margin:14px 0 8px;}

  .badge{font-size:11px;font-weight:700;letter-spacing:.04em;padding:5px 11px;border-radius:999px;white-space:nowrap;}
  .b-reno{background:rgba(234,179,8,.16);color:#f5d042;border:1px solid rgba(234,179,8,.4);}
  .b-hold{background:rgba(138,150,173,.12);color:#aab4c8;border:1px solid var(--line2);}
  .b-tenants{background:rgba(59,130,246,.18);color:#7ab0ff;border:1px solid rgba(59,130,246,.45);}
  .b-contract{background:rgba(34,197,94,.18);color:#5fe08a;border:1px solid rgba(34,197,94,.45);}
  .b-market{background:rgba(249,115,22,.18);color:#ffa257;border:1px solid rgba(249,115,22,.45);}
  .b-flip{background:rgba(167,139,250,.2);color:#c4b1ff;border:1px solid rgba(167,139,250,.5);}
  .b-todo{background:rgba(239,68,68,.2);color:#ff8585;border:1px solid rgba(239,68,68,.5);}
  .b-assigned{background:rgba(34,197,94,.16);color:#5fe08a;border:1px solid rgba(34,197,94,.4);}

  /* per-property task rows */
  .ptask{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05);}
  .ptask:last-child{border-bottom:none;}
  .ptask input[type=checkbox]{width:18px;height:18px;accent-color:var(--green);flex:0 0 auto;cursor:pointer;}
  .ptask .pt-text{flex:1;font-size:14px;color:#e7ecf5;}
  .ptask.done .pt-text{text-decoration:line-through;color:var(--muted2);}
  .who-chip{font-size:11px;font-weight:700;padding:3px 9px;border-radius:999px;background:#1c2843;color:#9fb2d8;border:1px solid var(--line2);white-space:nowrap;}
  .pt-del{background:none;border:none;color:var(--muted2);cursor:pointer;font-size:16px;padding:2px 6px;line-height:1;}
  .pt-del:hover{color:var(--red);}
  .empty-tasks{font-size:13px;color:var(--muted2);padding:4px 0;}

  .task-add{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;}
  .task-add input{flex:1;min-width:150px;background:#0e1524;border:1px solid var(--line2);border-radius:9px;
    padding:11px 12px;color:var(--text);font-size:13.5px;}
  .task-add select{background:#0e1524;border:1px solid var(--line2);border-radius:9px;padding:11px 10px;color:var(--text);font-size:13.5px;}
  .task-add input:focus,.task-add select:focus{outline:none;border-color:var(--green-d);}
  .btn-sm{background:var(--green-d);color:#fff;border:none;border-radius:9px;padding:0 16px;font-weight:700;font-size:13.5px;cursor:pointer;}
  .btn-sm:hover{background:var(--green);}

  .text-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:16px;}
  .text-row .lbl{font-size:12px;color:var(--muted);}
  .text-btn{background:#16203a;border:1px solid var(--line2);color:#cfe0ff;border-radius:999px;
    padding:8px 14px;font-size:12.5px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:6px;}
  .text-btn:hover{border-color:var(--blue);color:#fff;}

  /* tables */
  .table-wrap{background:linear-gradient(180deg,var(--card),var(--card2));border:1px solid var(--line);border-radius:14px;overflow:hidden;}
  .scroll{overflow-x:auto;}
  table{width:100%;border-collapse:collapse;min-width:760px;}
  thead th{font-size:11px;font-weight:700;letter-spacing:.08em;color:var(--muted2);text-transform:uppercase;
    text-align:left;padding:16px;background:#0f1626;}
  tbody td{font-size:13.5px;padding:14px 16px;border-top:1px solid var(--line);color:#dfe6f2;}
  tbody tr:hover{background:rgba(255,255,255,.015);}
  td.num,th.num{text-align:right;}
  .addr-cell{font-weight:700;color:#f1f4fa;}
  .net-pos{color:var(--green);font-weight:700;}
  .dash{color:var(--muted2);}
  tfoot td{padding:16px;font-size:13px;font-weight:800;color:#fff;background:#141d33;border-top:1px solid var(--line2);}
  tfoot .totals-label{letter-spacing:.1em;font-size:11px;color:var(--muted);}

  /* today's tasks */
  .task{background:linear-gradient(180deg,#101728,#0d1422);border:1px solid var(--line);border-radius:12px;
    padding:14px 16px;display:flex;align-items:center;gap:12px;}
  .task input[type=checkbox]{width:20px;height:20px;accent-color:var(--green);flex:0 0 auto;cursor:pointer;}
  .task .t-main{flex:1;min-width:0;}
  .task .t-title{font-size:14.5px;font-weight:600;color:#eef2f9;}
  .task.done .t-title{text-decoration:line-through;color:var(--muted2);}
  .task .t-sub{font-size:12.5px;color:var(--muted);margin-top:3px;}
  .add-bar{display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;}
  .add-bar input{flex:1;min-width:180px;background:#0e1524;border:1px solid var(--line2);border-radius:10px;padding:13px 14px;color:var(--text);font-size:14px;}
  .add-bar input:focus{outline:none;border-color:var(--green-d);}
  .btn{background:var(--green-d);color:#fff;border:none;border-radius:10px;padding:13px 18px;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap;}
  .btn:hover{background:var(--green);}
  .btn.ghost{background:#16203a;border:1px solid var(--line2);color:#cdd6e8;}
  .btn.ghost:hover{background:#1c2843;}

  .empty{text-align:center;padding:44px 20px;color:var(--muted);border:1px dashed var(--line2);border-radius:14px;background:var(--card2);}
  .empty .icon{font-size:30px;margin-bottom:10px;opacity:.7;}
  .empty .hint{font-size:13px;color:var(--muted2);margin-top:6px;}

  /* team tab */
  .panel{background:linear-gradient(180deg,var(--card),var(--card2));border:1px solid var(--line);border-radius:14px;padding:18px;margin-bottom:18px;}
  .team-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px;}
  .member{background:#0e1524;border:1px solid var(--line);border-radius:12px;padding:14px;}
  .member .m-top{display:flex;align-items:center;gap:12px;margin-bottom:10px;}
  .member .av{width:38px;height:38px;border-radius:50%;background:#1c2843;display:flex;align-items:center;justify-content:center;font-weight:700;color:#9fb2d8;flex:0 0 auto;}
  .member .m-name{font-size:14px;font-weight:700;}
  .member .m-role{font-size:12px;color:var(--muted);}
  .member input.phone{width:100%;background:#0a0f1c;border:1px solid var(--line2);border-radius:8px;padding:9px 10px;color:var(--text);font-size:13px;}
  .member input.phone:focus{outline:none;border-color:var(--green-d);}
  .field-label{font-size:12px;color:var(--muted);margin-bottom:8px;display:block;}
  select.big{width:100%;background:#0e1524;border:1px solid var(--line2);border-radius:10px;padding:13px 12px;color:var(--text);font-size:14px;}
  select.big:focus{outline:none;border-color:var(--green-d);}
  textarea{width:100%;background:#0e1524;border:1px solid var(--line2);border-radius:12px;padding:14px;color:var(--text);font-size:14px;min-height:110px;resize:vertical;font-family:inherit;}
  textarea:focus{outline:none;border-color:var(--green-d);}
  .chip{background:#16203a;border:1px solid var(--line2);color:#cdd6e8;border-radius:999px;padding:8px 14px;font-size:13px;font-weight:600;cursor:pointer;}
  .chip.sel{border-color:var(--green);background:rgba(34,197,94,.1);color:#bff0cf;}
  .chips{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 14px;}
  .fin-note{font-size:12.5px;color:var(--muted2);margin-top:8px;line-height:1.6;}

  .toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(10px);background:#16203a;
    border:1px solid var(--line2);color:#eef2f9;padding:12px 18px;border-radius:10px;font-size:13.5px;
    opacity:0;pointer-events:none;transition:opacity .2s,transform .2s;z-index:100;max-width:90%;text-align:center;}
  .toast.show{opacity:1;transform:translateX(-50%) translateY(0);}

  @media(max-width:760px){.stats{grid-template-columns:repeat(2,1fr);}.stat .big{font-size:24px;}main{padding:18px 12px 80px;}}
</style>
</head>
<body>
<header>
  <div class="brand"><span class="dot"></span><h1>GEOVANNY PROPERTY CRM</h1></div>
  <nav id="nav"></nav>
</header>

<main>
  <section class="view" data-view="today">
    <div class="section-head"><span class="section-title">TODAY'S TASKS</span><span class="count-pill" id="todayCount">0 open</span></div>
    <div class="add-bar">
      <input id="genTaskInput" placeholder="Add a general to-do (not tied to a property)…">
      <button class="btn" onclick="addGeneral()">Add</button>
    </div>
    <div class="stack" id="todayList"></div>
  </section>

  <section class="view" data-view="inventory">
    <div class="stats" id="invStats"></div>
    <div class="section-head"><span class="section-title">ACTIVE INVENTORY</span><span class="count-pill" id="invCount">0 properties</span></div>
    <div class="stack" id="invList"></div>
  </section>

  <section class="view" data-view="contract">
    <div class="section-head"><span class="section-title">IN CONTRACT</span><span class="count-pill" id="contractCount">0 deals</span></div>
    <div class="stack" id="contractList"></div>
  </section>

  <section class="view" data-view="flips">
    <div class="stats">
      <div class="stat green"><div class="label">Properties Sold</div><div class="big" id="flipsCount">0</div><div class="sub">Completed flips</div></div>
      <div class="stat"><div class="label">Total Invested</div><div class="big" id="flipsInvested">$0</div></div>
      <div class="stat purple"><div class="label">Total Sold For</div><div class="big" id="flipsSold">$0</div></div>
      <div class="stat green"><div class="label">Net Received</div><div class="big" id="flipsNet">$0</div><div class="sub">Logged amounts</div></div>
    </div>
    <div class="section-head"><span class="section-title">SOLD FLIPS</span><span class="count-pill" id="flipsPill">0 properties</span></div>
    <div class="table-wrap"><div class="scroll"><table>
      <thead><tr><th>#</th><th>Address</th><th>Purchased</th><th class="num">Bought</th><th>Sold</th><th class="num">Sold Price</th><th class="num">Net Received</th><th>Source</th></tr></thead>
      <tbody id="flipsBody"></tbody><tfoot id="flipsFoot"></tfoot>
    </table></div></div>
  </section>

  <section class="view" data-view="assigned">
    <div class="section-head"><span class="section-title">SOLD ASSIGNMENTS</span><span class="count-pill" id="assignCount">0 deals</span></div>
    <div class="table-wrap"><div class="scroll"><table>
      <thead><tr><th>Address</th><th>Date In</th><th>Date Paid</th><th>Status</th><th class="num">Down Payment</th><th class="num">Amount Received</th></tr></thead>
      <tbody id="assignBody"></tbody><tfoot id="assignFoot"></tfoot>
    </table></div></div>
  </section>

  <section class="view" data-view="team">
    <div class="section-head"><span class="section-title">SEND TO TEAM</span></div>

    <div class="panel">
      <span class="field-label">Text a crew member their tasks for a property</span>
      <select class="big" id="teamProp" onchange="renderTeamProp()"></select>
      <div id="teamPropTasks" style="margin-top:14px;"></div>
    </div>

    <div class="panel">
      <span class="field-label">Quick broadcast — write your own message</span>
      <div class="chips" id="bcastChips"></div>
      <textarea id="bcastMsg" placeholder="Type a message to the selected crew…"></textarea>
      <div class="add-bar" style="margin-top:12px;">
        <button class="btn" onclick="sendBroadcast()">Send text</button>
        <button class="btn ghost" onclick="copyBroadcast()">Copy message</button>
      </div>
    </div>

    <div class="panel">
      <span class="field-label">Crew &amp; phone numbers — add a number so texts go to the right person</span>
      <div class="team-grid" id="crewGrid"></div>
      <p class="fin-note">Numbers are saved on this device. Include the area code, e.g. 914-555-0142.</p>
    </div>

    <div class="panel">
      <span class="field-label">Back up your work — save it or move it to another device</span>
      <div class="add-bar">
        <button class="btn" onclick="exportData()">Download backup file</button>
        <label class="btn ghost" style="cursor:pointer;display:inline-block;">Restore from backup<input type="file" accept="application/json,.json" style="display:none;" onchange="importData(event)"></label>
      </div>
      <p class="fin-note">Tasks and phone numbers save automatically on this device. Download a backup before clearing your browser or switching phones, then use Restore on the other device to bring everything over.</p>
    </div>
  </section>
</main>

<div class="toast" id="toast"></div>

<!-- *** PROPERTY DATA — edit data.js to add/update properties *** -->
<script src="data.js"></script>
<script>

const TABS=[
  {id:"today",label:"Today's Tasks"},{id:"inventory",label:"Inventory"},{id:"contract",label:"In Contract"},
  {id:"flips",label:"Sold Flips"},{id:"assigned",label:"Assigned"},{id:"team",label:"Send to Team"}
];
const DEFAULT_CREW=[
  {name:"Joshua",role:"Electrician",phone:""},
  {name:"Javier",role:"Electrical helper",phone:""},
  {name:"Joseph",role:"Plumber",phone:""},
  {name:"Sylvia",role:"Property checks",phone:""}
];

/* derived sets */
const INV   = BACKUP.filter(p=>p.section==="Active Inventory");
const CON   = BACKUP.filter(p=>p.section==="In Contract");
const FLIPS = BACKUP.filter(p=>p.section==="Sold Flips");
const ASGN  = BACKUP.filter(p=>p.section==="Assigned");
const ACTIVE= INV.concat(CON);   // properties that can hold tasks

/* ============================================================
   STATE (localStorage)
   ============================================================ */
function load(key,fallback){try{const s=localStorage.getItem(key);if(s)return JSON.parse(s);}catch(e){}return fallback;}
function save(key,val){try{localStorage.setItem(key,JSON.stringify(val));}catch(e){}}
let TASKS = load("crm_tasks_v3", {});        // { propId: [ {id,text,who,done} ] }
let CREW  = load("crm_crew_v3", DEFAULT_CREW);
let STATUS_OVERRIDES = load("crm_status_v1", {});
function saveStatuses(){save("crm_status_v1",STATUS_OVERRIDES);}
function statusOf(p){return STATUS_OVERRIDES[p.id]||p.status;}

// Seed "Remove tenant" task for newly closed properties
(function seedTenantTasks(){
  const toSeed=[
    {id:"d91565d6-9755-4406-94bf-2060780e7c0b",text:"Remove tenant"},
    {id:"b2f47e10-3c8a-4d21-9e6f-7a05c1d83b44",text:"Remove tenant"}
  ];
  let changed=false;
  toSeed.forEach(function(s){
    if(!TASKS[s.id])TASKS[s.id]=[];
    if(!TASKS[s.id].some(function(t){return t.text===s.text;})){
      TASKS[s.id].unshift({id:"seed_"+s.id,text:s.text,who:"",done:false});
      changed=true;
    }
  });
  if(changed)save("crm_tasks_v3",TASKS);
})();
const openCards = new Set();

function tasksOf(id){return TASKS[id]||[];}
function openTasksOf(id){return tasksOf(id).filter(t=>!t.done);}
function saveTasks(){save("crm_tasks_v3",TASKS);}

/* ============================================================
   HELPERS
   ============================================================ */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const money=n=>(n==null?"—":"$"+Number(n).toLocaleString("en-US"));
const netDisp=n=>(!n?'<span class="dash">—</span>':'<span class="net-pos">'+money(n)+'</span>');
function compact(n){if(n>=1e6)return"$"+(n/1e6).toFixed(2).replace(/\.?0+$/,"")+"M";if(n>=1e3)return"$"+Math.round(n/1e3)+"K";return"$"+n;}
const MO=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function d(iso){return iso?new Date(iso+"T00:00:00"):null;}
function fmtMY(iso){const x=d(iso);return x?MO[x.getMonth()]+" "+x.getFullYear():"—";}
function fmtLong(iso){const x=d(iso);return x?MO[x.getMonth()]+" "+x.getDate()+", "+x.getFullYear():"TBD";}
const STATUS_BADGE={"Renovations":["b-reno","RENOVATIONS"],"Hold":["b-hold","HOLD"],"Tenants":["b-tenants","TENANTS"],
  "In Contract":["b-contract","IN CONTRACT"],"On the Market":["b-market","ON THE MARKET"],"Flip":["b-flip","FLIP"],"Case":["b-flip","FLIP"]};
function crewNames(){return CREW.map(c=>c.name);}
function phoneOf(name){const c=CREW.find(c=>c.name===name);return c&&c.phone?c.phone.replace(/[^0-9+]/g,""):"";}

function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove("show"),3200);}

/* ============================================================
   NAV
   ============================================================ */
function buildNav(){
  const nav=$("#nav");
  TABS.forEach((t,i)=>{const b=document.createElement("button");b.className="tab"+(i===1?" active":"");b.textContent=t.label;b.onclick=()=>show(t.id,b);nav.appendChild(b);});
}
function show(id,btn){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.dataset.view===id));
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  if(btn)btn.classList.add("active");
  if(id==="today")renderToday();
  window.scrollTo({top:0});
}

/* ============================================================
   PROPERTY CARDS (with tasks)
   ============================================================ */
function badgesFor(p){
  let html="";
  const open=openTasksOf(p.id).length;
  if(open>0)html+=`<span class="badge b-todo">${open} TODO</span>`;
  const sb=STATUS_BADGE[statusOf(p)];
  if(sb)html+=`<span class="badge ${sb[0]}">${sb[1]}</span>`;
  return html;
}
function metaFor(p){
  if(p.section==="In Contract")
    return `${money(p.bought)} · Down ${money(p.down)} · Closing ${p.closing?fmtLong(p.closing):"TBD"}`;
  const acq=p.acquired?` · Closed ${fmtLong(p.acquired)}`:"";
  return `${money(p.bought)} · Est. profit ${money(p.profit)}${acq}`;
}
function taskListHtml(p){
  const list=tasksOf(p.id);
  if(list.length===0)return `<div class="empty-tasks">No tasks yet. Add the first one below.</div>`;
  return list.map(t=>`
    <div class="ptask ${t.done?'done':''}">
      <input type="checkbox" ${t.done?'checked':''} onchange="toggleTask('${p.id}','${t.id}')">
      <span class="pt-text">${esc(t.text)}</span>
      ${t.who?`<span class="who-chip">${esc(t.who)}</span>`:""}
      <button class="pt-del" onclick="delTask('${p.id}','${t.id}')" title="Delete">✕</button>
    </div>`).join("");
}
function textButtonsHtml(p){
  const open=openTasksOf(p.id);
  if(open.length===0)return"";
  const btns=crewNames().map(n=>`<button class="text-btn" onclick="textTasks('${p.id}','${esc(n)}')">✉ Text ${esc(n)}</button>`).join("");
  return `<div class="text-row"><span class="lbl">Text tasks to:</span>${btns}</div>`;
}
const ALL_STATUSES=["Renovations","Hold","Tenants","On the Market","In Contract","Flip","Case"];
function setStatus(pid,val){
  STATUS_OVERRIDES[pid]=val;
  saveStatuses();
  refreshAll();
  toast("Status updated to “"+val+"”");
}
function statusSelectHtml(p){
  const cur=statusOf(p);
  const opts=ALL_STATUSES.map(s=>`<option value="${s}"${s===cur?" selected":""}>${s}</option>`).join("");
  return `<div class="extra-label">Change Status</div>
    <select style="background:#0e1524;border:1px solid var(--line2);border-radius:9px;padding:10px 12px;color:var(--text);font-size:13.5px;width:100%;max-width:280px;" onchange="setStatus('${p.id}',this.value)">${opts}</select>`;
}
function buildCard(p,idx){
  const card=document.createElement("div");
  card.className="pcard"+(openCards.has(p.id)?" open":"");
  const optionTags=crewNames().map(n=>`<option value="${esc(n)}">${esc(n)}</option>`).join("");
  card.innerHTML=`
    <div class="pcard-main">
      ${idx!=null?`<span class="idx">${idx}</span>`:""}
      <div class="info"><div class="addr">${esc(p.address)}</div><div class="meta">${metaFor(p)}</div></div>
      <div class="right">${badgesFor(p)}<span class="chev">▾</span></div>
    </div>
    <div class="pcard-extra">
      <div class="extra-label">Tasks for this property</div>
      <div class="ptasks">${taskListHtml(p)}</div>
      <div class="task-add">
        <input placeholder="Add a task…" id="add_${p.id}" onkeydown="if(event.key==='Enter')addTask('${p.id}')">
        <select id="who_${p.id}"><option value="">Unassigned</option>${optionTags}</select>
        <button class="btn-sm" onclick="addTask('${p.id}')">Add</button>
      </div>
      ${textButtonsHtml(p)}
      ${statusSelectHtml(p)}
    </div>`;
  card.querySelector(".pcard-main").addEventListener("click",()=>{
    card.classList.toggle("open");
    if(card.classList.contains("open"))openCards.add(p.id);else openCards.delete(p.id);
  });
  return card;
}
function renderCardList(arr,containerId,numbered){
  const el=$(containerId);el.innerHTML="";
  if(arr.length===0){el.innerHTML=`<div class="empty"><div class="icon">🏠</div><div>Nothing here yet.</div></div>`;return;}
  arr.forEach((p,i)=>el.appendChild(buildCard(p,numbered?i+1:null)));
}
function renderInventory(){
  renderCardList(INV,"#invList",true);
  $("#invCount").textContent=INV.length+" properties";
  const tB=INV.reduce((s,p)=>s+(p.bought||0),0);
  const tP=INV.reduce((s,p)=>s+(p.profit||0),0);
  $("#invStats").innerHTML=`
    <div class="stat"><div class="label">Properties</div><div class="big">${INV.length}</div><div class="sub">In inventory</div></div>
    <div class="stat"><div class="label">Total Invested</div><div class="big">${compact(tB)}</div></div>
    <div class="stat green"><div class="label">Est. Profit</div><div class="big">${compact(tP)}</div></div>
    <div class="stat purple"><div class="label">Est. Value</div><div class="big">${compact(tB+tP)}</div><div class="sub">Invested + profit</div></div>`;
}
function renderContract(){renderCardList(CON,"#contractList",false);$("#contractCount").textContent=CON.length+" deals";}

/* ============================================================
   TASK ACTIONS
   ============================================================ */
function addTask(id){
  const inp=$("#add_"+CSS.escape(id));const sel=$("#who_"+CSS.escape(id));
  const text=inp.value.trim();if(!text)return;
  if(!TASKS[id])TASKS[id]=[];
  TASKS[id].push({id:String(Date.now()),text,who:sel.value,done:false});
  saveTasks();refreshAll();toast("Task added");
}
function toggleTask(pid,tid){const t=(TASKS[pid]||[]).find(t=>t.id===tid);if(t){t.done=!t.done;saveTasks();refreshAll();}}
function delTask(pid,tid){TASKS[pid]=(TASKS[pid]||[]).filter(t=>t.id!==tid);saveTasks();refreshAll();}

function textTasks(pid,who){
  const p=BACKUP.find(x=>x.id===pid)||{address:"this property"};
  let list=openTasksOf(pid).filter(t=>t.who===who);
  if(list.length===0)list=openTasksOf(pid);               // fall back to all open tasks
  if(list.length===0){toast("No open tasks to send");return;}
  const lines=list.map(t=>"• "+t.text).join("\n");
  const msg=`Hi ${who}, here's what's needed at ${p.address}:\n${lines}\n\nThanks, Geovanny`;
  openSMS(phoneOf(who),msg);
  toast("Opening Messages for "+who);
}
function openSMS(phone,body){
  const enc=encodeURIComponent(body);
  // works on iOS and Android
  window.location.href="sms:"+(phone||"")+"?&body="+enc;
}

/* ============================================================
   TODAY'S TASKS (aggregate)
   ============================================================ */
function renderToday(){
  const el=$("#todayList");el.innerHTML="";
  const rows=[];
  Object.keys(TASKS).forEach(pid=>{
    const p=BACKUP.find(x=>x.id===pid);
    const where=pid==="_general"?"General":(p?p.address:"Property");
    tasksOf(pid).forEach(t=>rows.push({pid,t,where}));
  });
  const open=rows.filter(r=>!r.t.done);
  $("#todayCount").textContent=open.length+" open";
  if(rows.length===0){el.innerHTML=`<div class="empty"><div class="icon">✓</div><div>No tasks anywhere yet.</div><div class="hint">Open a property and add tasks, or add a general one above.</div></div>`;return;}
  rows.sort((a,b)=>(a.t.done-b.t.done));
  rows.forEach(r=>{
    const sub=r.where+(r.t.who?" · "+r.t.who:"");
    const div=document.createElement("div");
    div.className="task"+(r.t.done?" done":"");
    div.innerHTML=`<input type="checkbox" ${r.t.done?'checked':''}>
      <div class="t-main"><div class="t-title">${esc(r.t.text)}</div><div class="t-sub">${esc(sub)}</div></div>`;
    div.querySelector("input").onchange=()=>{r.t.done=!r.t.done;saveTasks();renderToday();};
    el.appendChild(div);
  });
}
function addGeneral(){
  const inp=$("#genTaskInput");const v=inp.value.trim();if(!v)return;
  if(!TASKS._general)TASKS._general=[];
  TASKS._general.unshift({id:String(Date.now()),text:v,who:"",done:false});
  saveTasks();inp.value="";renderToday();toast("Task added");
}
$("#genTaskInput").addEventListener("keydown",e=>{if(e.key==="Enter")addGeneral();});

/* ============================================================
   TABLES
   ============================================================ */
function renderFlips(){
  const body=$("#flipsBody");body.innerHTML="";let tB=0,tP=0,tN=0;
  FLIPS.forEach((f,i)=>{tB+=f.bought;tP+=f.soldPrice;tN+=(f.net||0);
    body.insertAdjacentHTML("beforeend",`<tr><td>${i+1}</td><td class="addr-cell">${esc(f.address)}</td>
      <td>${fmtMY(f.purchased)}</td><td class="num">${money(f.bought)}</td><td>${fmtLong(f.soldDate)}</td>
      <td class="num">${money(f.soldPrice)}</td><td class="num">${netDisp(f.net)}</td><td>${esc(f.source)}</td></tr>`);});
  $("#flipsFoot").innerHTML=`<tr><td></td><td class="totals-label">TOTALS</td><td></td><td class="num">${money(tB)}</td><td></td><td class="num">${money(tP)}</td><td class="num">${money(tN)}</td><td></td></tr>`;
  $("#flipsCount").textContent=FLIPS.length;$("#flipsPill").textContent=FLIPS.length+" properties";
  $("#flipsInvested").textContent=compact(tB);$("#flipsSold").textContent=compact(tP);$("#flipsNet").textContent=compact(tN);
}
function renderAssigned(){
  const body=$("#assignBody");body.innerHTML="";let tot=0;
  ASGN.forEach(a=>{tot+=a.received;
    body.insertAdjacentHTML("beforeend",`<tr><td class="addr-cell">${esc(a.address)}</td>
      <td>${fmtLong(a.purchased)}</td><td>${fmtLong(a.soldDate)}</td><td><span class="badge b-assigned">ASSIGNED</span></td>
      <td class="num">${a.down==null?'<span class="dash">—</span>':money(a.down)}</td><td class="num">${money(a.received)}</td></tr>`);});
  $("#assignFoot").innerHTML=`<tr><td class="totals-label">TOTAL RECEIVED</td><td></td><td></td><td></td><td></td><td class="num">${money(tot)}</td></tr>`;
  $("#assignCount").textContent=ASGN.length+" deals";
}
/* ============================================================
   TEAM TAB
   ============================================================ */
function renderCrew(){
  const el=$("#crewGrid");el.innerHTML="";
  CREW.forEach((c,i)=>{
    const m=document.createElement("div");m.className="member";
    m.innerHTML=`<div class="m-top"><div class="av">${esc(c.name[0])}</div>
      <div><div class="m-name">${esc(c.name)}</div><div class="m-role">${esc(c.role)}</div></div></div>
      <input class="phone" type="tel" placeholder="Phone number" value="${esc(c.phone||"")}">`;
    m.querySelector("input").addEventListener("change",e=>{CREW[i].phone=e.target.value.trim();save("crm_crew_v3",CREW);toast("Saved "+c.name+"'s number");});
    el.appendChild(m);
  });
}
function fillPropSelect(){
  const sel=$("#teamProp");sel.innerHTML=`<option value="">— Choose a property —</option>`;
  ACTIVE.forEach(p=>sel.insertAdjacentHTML("beforeend",`<option value="${p.id}">${esc(p.address)}</option>`));
}
function renderTeamProp(){
  const pid=$("#teamProp").value;const box=$("#teamPropTasks");
  if(!pid){box.innerHTML="";return;}
  const p=BACKUP.find(x=>x.id===pid);
  const open=openTasksOf(pid);
  if(open.length===0){box.innerHTML=`<div class="empty-tasks">No open tasks for ${esc(p.address)}. Add tasks from the property's tab first.</div>`;return;}
  const tasks=open.map(t=>`<div class="ptask"><span class="pt-text">• ${esc(t.text)}</span>${t.who?`<span class="who-chip">${esc(t.who)}</span>`:""}</div>`).join("");
  const btns=crewNames().map(n=>`<button class="text-btn" onclick="textTasks('${pid}','${esc(n)}')">✉ Text ${esc(n)}</button>`).join("");
  box.innerHTML=`<div class="ptasks">${tasks}</div><div class="text-row"><span class="lbl">Send to:</span>${btns}</div>`;
}

let bcastSel=new Set();
function renderBcastChips(){
  const el=$("#bcastChips");el.innerHTML="";
  crewNames().forEach(n=>{const c=document.createElement("button");c.className="chip"+(bcastSel.has(n)?" sel":"");
    c.textContent=n;c.onclick=()=>{bcastSel.has(n)?bcastSel.delete(n):bcastSel.add(n);renderBcastChips();};el.appendChild(c);});
}
function sendBroadcast(){
  const msg=$("#bcastMsg").value.trim();
  if(!msg){toast("Write a message first");return;}
  if(bcastSel.size===0){toast("Pick at least one crew member");return;}
  const phones=[...bcastSel].map(phoneOf).filter(Boolean).join(",");
  openSMS(phones,msg);toast("Opening Messages for "+[...bcastSel].join(", "));
}
function copyBroadcast(){
  const msg=$("#bcastMsg").value.trim();if(!msg){toast("Write a message first");return;}
  navigator.clipboard&&navigator.clipboard.writeText(msg).then(()=>toast("Copied"),()=>toast("Copy failed"));
}

/* ============================================================
   BACKUP / RESTORE
   ============================================================ */
function exportData(){
  const data={app:"MEM FLIPP CRM",exportedAt:new Date().toISOString(),tasks:TASKS,crew:CREW};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;a.download="MEM_FLIPP_CRM_BACKUP_"+new Date().toISOString().slice(0,10)+".json";
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
  toast("Backup downloaded");
}
function importData(ev){
  const f=ev.target.files&&ev.target.files[0];if(!f)return;
  const r=new FileReader();
  r.onload=()=>{
    try{
      const d=JSON.parse(r.result);
      if(d.tasks){TASKS=d.tasks;saveTasks();}
      if(d.crew){CREW=d.crew;save("crm_crew_v3",CREW);}
      renderCrew();refreshAll();renderToday();
      toast("Backup restored");
    }catch(e){toast("Couldn't read that backup file");}
    ev.target.value="";
  };
  r.readAsText(f);
}

/* ============================================================
   REFRESH + INIT
   ============================================================ */
function refreshAll(){
  renderInventory();renderContract();
  if($("#teamProp").value)renderTeamProp();
  const active=document.querySelector(".view.active");
  if(active&&active.dataset.view==="today")renderToday();
}
buildNav();
renderInventory();renderContract();renderFlips();renderAssigned();
renderToday();renderCrew();fillPropSelect();renderBcastChips();
// Show inventory view by default
(function(){const tabs=document.querySelectorAll(".tab");const views=document.querySelectorAll(".view");
views.forEach(v=>v.classList.toggle("active",v.dataset.view==="inventory"));
tabs.forEach(t=>t.classList.toggle("active",t.textContent==="Inventory"));})();
</script>
</body>
</html>
