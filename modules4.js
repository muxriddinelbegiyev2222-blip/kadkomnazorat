// ==========================================================================
// KOMP-NAZORAT 2.1 — MODULES4.JS (KORRUPSION XAVF GURUHLARI: A, B, D)
// ==========================================================================

// 1. KORRUPSION XAVF TOIFALARI MATRITSASI VA KARTALARI
function renderRiskGroupsModule() {
  const cardsContainer = document.getElementById('riskRegionsGrid');
  const tbody = document.getElementById('riskMatritsaTableBody');
  if (!window.regionsReportData) return;

  // 14 TA HUDUD KARTALARI
  if (cardsContainer) {
    cardsContainer.innerHTML = window.regionsReportData.map(r => `
      <div onclick="openExplorer('risk', '${r.id}', null)" class="folder-grid-item" style="border-left: 4px solid #b45309;">
        <div>
          <b style="font-size: 13px; color: var(--text-main);">&#128193; ${r.name}</b>
          <p style="font-size: 11px; margin-top: 4px;">
            <span class="risk-badge-A">A: ${r.riskA || 0}</span>
            <span class="risk-badge-B">B: ${r.riskB || 0}</span>
            <span class="risk-badge-D">D: ${r.riskD || 0}</span>
          </p>
        </div>
        <span class="badge badge-rose">${r.riskCount} ta xodim &rarr;</span>
      </div>
    `).join('');
  }

  // PASTKI STATISTIK MATRITSA JADVALI
  if (tbody) {
    tbody.innerHTML = window.regionsReportData.map((r, i) => `
      <tr>
        <td>${i + 1}</td>
        <td style="font-weight: 700; min-width: 140px;">${r.name}</td>
        <td style="text-align: center;"><b class="risk-badge-A">${r.riskA || 0} nafar</b></td>
        <td style="text-align: center;"><b class="risk-badge-B">${r.riskB || 0} nafar</b></td>
        <td style="text-align: center;"><b class="risk-badge-D">${r.riskD || 0} nafar</b></td>
        <td style="text-align: center; font-weight: 800;">${r.riskCount} nafar</td>
        <td style="text-align: center;">
          <span class="badge ${r.riskA > 0 ? 'badge-rose' : 'badge-amber'}">
            ${r.riskA > 0 ? 'Audio/video nazorat & Rotatsiya' : 'Profilaktik monitoring'}
          </span>
        </td>
      </tr>
    `).join('');
  }
}

// 2. YANGI XAVFLI XODIMNI BAZAGA VA MATRITSAGA QO'SHISH
window.saveNewRisk = function() {
  const name = document.getElementById('risk-in-name').value.trim();
  const pinfl = document.getElementById('risk-in-pinfl').value.trim();
  const regionName = document.getElementById('risk-in-region').value;
  const category = document.getElementById('risk-in-cat').value;
  const role = document.getElementById('risk-in-role').value.trim();
  const desc = document.getElementById('risk-in-desc').value.trim();

  if (!name || pinfl.length < 14 || !role) {
    alert("Iltimos, xodim F.I.SH, 14 xonali JSHSHIR va tuman filiali lavozimini to'liq kiriting!");
    return;
  }

  // Tegishli viloyatni topish
  const regObj = window.regionsReportData.find(r => r.name === regionName) || window.regionsReportData[0];

  // Chuqur tekshiruv (deepDrillDatabase) bazasiga qo'shish
  if (window.deepDrillDatabase && window.deepDrillDatabase.risk) {
    window.deepDrillDatabase.risk.unshift({
      regionId: regObj.id,
      wing: 'agentlik',
      district: role,
      officer: name,
      pinfl: pinfl,
      role: 'Mas\'ul mutaxassis',
      type: category,
      reason: desc || 'Korrupsion xavf omili qayd etildi',
      action: category === 'A' ? 'Audio/video nazoratda, imzo cheklangan' : 'Profilaktik monitoring',
      code: 'XAVF-2026-' + Date.now().toString().slice(-3),
      date: '01.10.2026',
      docType: 'risk'
    });
  }

  // Viloyat statistikasini oshirish
  regObj.riskCount++;
  if (category === 'A') regObj.riskA = (regObj.riskA || 0) + 1;
  if (category === 'B') regObj.riskB = (regObj.riskB || 0) + 1;
  if (category === 'D') regObj.riskD = (regObj.riskD || 0) + 1;

  // Dashboarddagi umumiy hisoblagichlarni yangilash
  const totalRiskEl = document.getElementById('dash-kpi-risk');
  if (totalRiskEl) {
    const current = parseInt(totalRiskEl.innerText) || 46;
    totalRiskEl.innerText = `${current + 1} nafar`;
  }

  const navRiskBadge = document.getElementById('nav-badge-risk');
  if (navRiskBadge) {
    const currentNav = parseInt(navRiskBadge.innerText) || 46;
    navRiskBadge.innerText = `${currentNav + 1} nafar`;
  }

  // Dashboard A, B, D badgellarini yangilash
  const badgeA = document.getElementById('dash-risk-A');
  const badgeB = document.getElementById('dash-risk-B');
  const badgeD = document.getElementById('dash-risk-D');

  let sumA = 0, sumB = 0, sumD = 0;
  window.regionsReportData.forEach(r => {
    sumA += (r.riskA || 0);
    sumB += (r.riskB || 0);
    sumD += (r.riskD || 0);
  });

  if (badgeA) badgeA.innerText = `A: ${sumA}`;
  if (badgeB) badgeB.innerText = `B: ${sumB}`;
  if (badgeD) badgeD.innerText = `D: ${sumD}`;

  renderRiskGroupsModule();
  closeModal('newRiskModal');

  // Formalarni tozalash
  document.getElementById('risk-in-name').value = '';
  document.getElementById('risk-in-pinfl').value = '';
  document.getElementById('risk-in-role').value = '';
  document.getElementById('risk-in-desc').value = '';

  alert(`Xodim ${category}-toifa korrupsion xavf reyestriga kiritildi va nazoratga olindi!`);
};

// 3. MODUL ISHGA TUSHISHI
window.addEventListener('DOMContentLoaded', () => {
  renderRiskGroupsModule();
});
