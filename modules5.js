// ==========================================================================
// KOMP-NAZORAT 2.1 — MODULES5.JS (BO'SHATILGANLAR VA MANFAATLAR / STIR)
// ==========================================================================

// 1. BO'SHATILGAN XODIMLAR MODULINI RENDERING QILISH
function renderFiredModule() {
  const cardsContainer = document.getElementById('firedRegionsGrid');
  const tbody = document.getElementById('firedMatritsaTableBody');
  if (!window.regionsReportData) return;

  // 14 TA HUDUD KARTALARI
  if (cardsContainer) {
    cardsContainer.innerHTML = window.regionsReportData.map(r => `
      <div onclick="openExplorer('fired', '${r.id}', null)" class="folder-grid-item" style="border-left: 4px solid #047857;">
        <div>
          <b style="font-size: 13px; color: var(--text-main);">&#128193; ${r.name}</b>
          <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">
            Buyruqlar va dalolatnomalar jildi
          </p>
        </div>
        <span class="badge badge-emerald">${r.firedCount} nafar &rarr;</span>
      </div>
    `).join('');
  }

  // RAQAMLI ASOS MATRITSA JADVALI
  if (tbody) {
    tbody.innerHTML = window.regionsReportData.map((r, i) => `
      <tr>
        <td>${i + 1}</td>
        <td style="font-weight: 700; min-width: 140px;">${r.name}</td>
        <td style="text-align: center; font-weight: 800; color: #be123c;">${r.firedCount} nafar</td>
        <td>Yer chegaralarini asossiz o'zgartirish, noqonuniy kadastr pasporti shakllantirish</td>
        <td style="font-weight: 600; font-size: 11px;">Mehnat Kodeksining 161-moddasi bilan mehnat shartnomasi bekor qilingan</td>
        <td style="text-align: center;"><span class="badge badge-emerald">Tizimdan chetlatilgan</span></td>
      </tr>
    `).join('');
  }
}

// 2. MANFAATLAR TO'QNASHUVI VA STIR MATRITSASINI RENDERING QILISH
function renderConflictsModule() {
  const cardsContainer = document.getElementById('confRegionsGrid');
  const tbody = document.getElementById('conflictMatritsaTableBody');
  if (!window.regionsReportData) return;

  // 14 TA HUDUD KARTALARI
  if (cardsContainer) {
    cardsContainer.innerHTML = window.regionsReportData.map(r => `
      <div onclick="openExplorer('all', '${r.id}', null)" class="folder-grid-item" style="border-left: 4px solid #6366f1;">
        <div>
          <b style="font-size: 13px; color: var(--text-main);">&#128193; ${r.name}</b>
          <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">
            MCHJ ta'sischiligi va yaqin qarindoshlik
          </p>
        </div>
        <span class="badge badge-blue">${r.conflictCount} ta holat &rarr;</span>
      </div>
    `).join('');
  }

  // RASMIY MATRITSA JADVALI
  if (tbody) {
    tbody.innerHTML = window.regionsReportData.map((r, i) => {
      const inProcess = r.conflictCount > 2 ? 1 : 0;
      const done = r.conflictCount - inProcess;
      const unDone = 0;

      return `
        <tr>
          <td>${i + 1}</td>
          <td style="font-weight: 700; min-width: 140px;">${r.name}</td>
          <td style="text-align: center; font-weight: 800;">${r.conflictCount} ta</td>
          <td style="text-align: center; color: #d97706; font-weight: 700;">${inProcess} ta</td>
          <td style="text-align: center; color: #047857; font-weight: 700;">${done} ta</td>
          <td style="text-align: center; color: #be123c; font-weight: 700;">${unDone} ta</td>
          <td style="text-align: center;">
            <span class="badge ${inProcess > 0 ? 'badge-amber' : 'badge-emerald'}">
              ${inProcess > 0 ? 'O\'rganilmoqda' : 'Bartaraf etildi'}
            </span>
          </td>
        </tr>
      `;
    }).join('');
  }
}

// 3. MODULNI DASTLABKI ISHGA TUSHIRISH
window.addEventListener('DOMContentLoaded', () => {
  renderFiredModule();
  renderConflictsModule();
});
