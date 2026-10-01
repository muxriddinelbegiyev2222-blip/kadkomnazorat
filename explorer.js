// ==========================================================================
// KOMP-NAZORAT 2.1 — EXPLORER.JS (PAPKA DRILL-DOWN MEXANIZMI)
// ==========================================================================

let explorerPath = { cat: null, regionId: null, wing: null };

// 1. EXPLORERGA KIRISH
window.openExplorer = function(categoryKey, regionId, wing) {
  explorerPath = { cat: categoryKey, regionId: regionId, wing: wing };
  
  const mainView = document.getElementById('dashboardMainView');
  const explorerView = document.getElementById('explorerViewArea');
  
  if (mainView && explorerView) {
    mainView.classList.add('hidden');
    explorerView.classList.remove('hidden');
  }
  
  renderExplorerContent();
};

// 2. EXPLORERDAN DASHBOARDGA QAYTISH
window.exitExplorerToDashboard = function() {
  const mainView = document.getElementById('dashboardMainView');
  const explorerView = document.getElementById('explorerViewArea');
  
  if (mainView && explorerView) {
    explorerView.classList.add('hidden');
    mainView.classList.remove('hidden');
  }
  
  explorerPath = { cat: null, regionId: null, wing: null };
};

// 3. EXPLORER ICHINI DINAMIK RENDERING QILISH
function renderExplorerContent() {
  const bc = document.getElementById('explorerBreadcrumb');
  const body = document.getElementById('explorerBody');
  if (!bc || !body) return;

  const catNames = {
    'investigations': 'Xizmat Tekshiruvlari (333 ta)',
    'convicted': 'Sudlangan Xodimlar Reyestri (18 nafar)',
    'operations': 'Tezkor Tadbirlar (14 ta)',
    'risk': 'Korrupsion Xavf Guruhlari (A, B, D Toifalar)',
    'fired': 'Komplayens Bo\'shatgan Xodimlar (25 nafar)',
    'all': '14 ta Hududiy Boshqarma'
  };

  // -------------------------------------------------------------
  // BOSQICH 1: 14 TA HUDUD (VILOYATLAR) RO'YXATI
  // -------------------------------------------------------------
  if (!explorerPath.regionId) {
    bc.innerHTML = `
      <span onclick="exitExplorerToDashboard()">&#128194; Bosh sahifa</span> &rarr; 
      <b>${catNames[explorerPath.cat] || 'Hududlar'}</b>
    `;

    body.innerHTML = `
      <div class="grid-2">
        ${window.regionsReportData.map(r => {
          let count = r.invCount;
          if (explorerPath.cat === 'convicted') count = r.convictedCount;
          if (explorerPath.cat === 'operations') count = r.opsCount;
          if (explorerPath.cat === 'risk') count = r.riskCount;
          if (explorerPath.cat === 'fired') count = r.firedCount;

          return `
            <div onclick="openExplorer('${explorerPath.cat}', '${r.id}', null)" class="folder-grid-item">
              <div>
                <b style="font-size: 14px; color: var(--text-main);">&#128193; ${r.name}</b>
                <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">
                  Tekshiruvlar: <b>${r.invCount}</b> | Sudlangan: <b>${r.convictedCount}</b> \vert{} Xavf (A, B, D): <b>${r.riskCount}</b>
                </p>
              </div>
              <span class="badge ${count > 0 ? 'badge-rose' : 'badge-slate'}">${count} ta ish &rarr;</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
    return;
  }

  const currentRegion = window.regionsReportData.find(r => r.id === explorerPath.regionId) || window.regionsReportData[0];

  // -------------------------------------------------------------
  // BOSQICH 2: AGENTLIK VA PALATA BOSHQARMALARI
  // -------------------------------------------------------------
  if (!explorerPath.wing) {
    bc.innerHTML = `
      <span onclick="exitExplorerToDashboard()">&#128194; Bosh sahifa</span> &rarr; 
      <span onclick="openExplorer('${explorerPath.cat}', null, null)">${catNames[explorerPath.cat] || 'Hududlar'}</span> &rarr; 
      <b>${currentRegion.name}</b>
    `;

    body.innerHTML = `
      <div style="margin-bottom: 14px;">
        <button onclick="openExplorer('${explorerPath.cat}', null, null)" class="btn btn-slate">&larr; Viloyatlarga qaytish</button>
      </div>
      <div class="grid-2">
        <div onclick="openExplorer('${explorerPath.cat}', '${currentRegion.id}', 'agentlik')" class="folder-grid-item" style="border-left: 5px solid #0284c7; padding: 20px;">
          <div>
            <b style="font-size: 15px; color: #0284c7;">&#128193; Kadastr Agentligi ${currentRegion.name} boshqarmasi</b>
            <p style="font-size: 12px; color: var(--text-muted); margin-top: 6px;">Davlat yer nazorati, geodeziya, ma'muriy amaliyot bo'limi</p>
          </div>
          <span class="badge badge-blue">Tumanlar &rarr;</span>
        </div>

        <div onclick="openExplorer('${explorerPath.cat}', '${currentRegion.id}', 'palata')" class="folder-grid-item" style="border-left: 5px solid #6366f1; padding: 20px;">
          <div>
            <b style="font-size: 15px; color: #6366f1;">&#128193; Davlat Kadastrlari Palatasi ${currentRegion.name} boshqarmasi</b>
            <p style="font-size: 12px; color: var(--text-muted); margin-top: 6px;">Ko'chmas mulkni ro'yxatga olish, arxiv ishlari va kadastr pasportlari</p>
          </div>
          <span class="badge badge-emerald">Tumanlar &rarr;</span>
        </div>
      </div>
    `;
    return;
  }

  // -------------------------------------------------------------
  // BOSQICH 3: ANIQ TUMAN FILIALLARI VA XODIMLAR RO'YXATI
  // -------------------------------------------------------------
  bc.innerHTML = `
    <span onclick="exitExplorerToDashboard()">&#128194; Bosh sahifa</span> &rarr; 
    <span onclick="openExplorer('${explorerPath.cat}', null, null)">${catNames[explorerPath.cat] || 'Hududlar'}</span> &rarr; 
    <span onclick="openExplorer('${explorerPath.cat}', '${currentRegion.id}', null)">${currentRegion.name}</span> &rarr; 
    <b>${explorerPath.wing === 'agentlik' ? 'Agentlik boshqarmasi' : 'Palata boshqarmasi'}</b>
  `;

  let list = [];
  if (explorerPath.cat === 'all') {
    for (let k in window.deepDrillDatabase) {
      list.push(...window.deepDrillDatabase[k].filter(i => (i.regionId === currentRegion.id || i.regionId === 'samarqand' || i.regionId === 'toshkent_vil') && i.wing === explorerPath.wing));
    }
  } else {
    const raw = window.deepDrillDatabase[explorerPath.cat] || [];
    list = raw.filter(i => (i.regionId === currentRegion.id || i.regionId === 'samarqand' || i.regionId === 'toshkent_vil') && i.wing === explorerPath.wing);
  }

  body.innerHTML = `
    <div style="margin-bottom: 14px;">
      <button onclick="openExplorer('${explorerPath.cat}', '${currentRegion.id}', null)" class="btn btn-slate">&larr; Boshqarmalarga qaytish</button>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      ${list.length > 0 ? list.map(item => `
        <div class="card" style="padding: 16px; border-left: 5px solid ${item.type === 'A' ? '#be123c' : item.type === 'B' ? '#d97706' : item.type === 'D' ? '#047857' : '#0284c7'};">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <b style="font-size: 14px; color: var(--text-main);">&#128196; ${item.district} — ${item.officer}</b>${item.type ? `<span class="risk-badge-${item.type}">${item.type} toifa xavf</span>` : ''}
              </div>
              <p style="font-size: 11px; color: var(--text-muted); margin: 4px 0;">Lavozimi: <b>${item.role}</b> | JSHSHIR: <b style="color:#0284c7;">${item.pinfl}</b></p>
              <p style="font-size: 11px; color: #b45309; font-weight: 600;">Asos / Sabab: ${item.reason}</p>
            </div>
            <button onclick="openPdfViewer('${item.docType}', '${item.code}', '${item.district}', '${item.date}', '${item.officer}:${item.reason}')" class="btn btn-slate" style="padding: 8px 14px;">
              &#128196; Asos Hujjat (PDF) &rarr;
            </button>
          </div>
        </div>
      `).join('') : `
        <div style="padding: 30px; text-align: center; color: var(--text-muted); background: var(--bg-card); border-radius: 8px; border: 1px dashed var(--border-color);">
          Ushbu boshqarma va unga qarashli tuman filiallarida hozircha ochiq ish mavjud emas (profilaktik nazoratda).
        </div>
      `}
    </div>
  `;
}
