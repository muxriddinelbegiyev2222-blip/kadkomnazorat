// ==========================================================================
// KOMP-NAZORAT 2.1 — MODULES2.JS (ТЕЗКОР ТАДБИРЛАР ВА СУДЛАНГАНЛАР РЕЕСТРИ)
// ==========================================================================

// 1. ДАННЫЕ О СУДИМЫХ СОТРУДНИКАХ
window.convictedData = [
  { 
    pinfl: '31904881120021', 
    name: 'Ergashev Tohir Mansurovich', 
    region: 'Toshkent viloyati', 
    role: 'Yetakchi muhandis', 
    court: 'Qibray tuman sudi', 
    date: '18.04.2025', 
    articles: '168-m, 205-m', 
    punishment: 'Ozodlikni cheklash, mansab taqiqi (2 yil)', 
    status: 'chetlatilgan' 
  },
  { 
    pinfl: '32004881120034', 
    name: 'Aliyev Vali G\'aniyevich', 
    region: 'Samarqand viloyati', 
    role: 'Davlat ro\'yxatidan o\'tkazuvchi', 
    court: 'Samarqand shahar sudi', 
    date: '12.03.2024', 
    articles: '167-m, 210-m', 
    punishment: 'Jarima va mansab taqiqi (3 yil)', 
    status: 'chetlatilgan' 
  },
  { 
    pinfl: '32501913340078', 
    name: 'Qodirov Farrux Rustamovich', 
    region: 'Andijon viloyati', 
    role: 'Arxiv mudiri', 
    court: 'Andijon shahar sudi', 
    date: '15.02.2026', 
    articles: '209-modda (Xizmat soxtakorligi)', 
    punishment: 'Ozodlikni cheklash (1.5 yil)', 
    status: 'chetlatilgan' 
  },
  { 
    pinfl: '31802956730055', 
    name: 'Nazarov Ilhom Bobirovich', 
    region: 'Buxoro viloyati', 
    role: 'Katta inspektor', 
    court: 'G\'ijduvon tuman sudi', 
    date: '28.08.2025', 
    articles: '210-modda (Pora olish)', 
    punishment: 'Ozodlikdan mahrum qilish (4 yil)', 
    status: 'chetlatilgan' 
  }
];

// 2. ОТОБРАЖЕНИЕ РЕЕСТРА СУДИМЫХ
function renderConvictedTable(list) {
  const tbody = document.getElementById('convictedTableBody');
  if (!tbody) return;

  const data = list || window.convictedData;
  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:var(--text-muted);">Qidiruv bo'yicha sudlangan xodim topilmadi.</td></tr>`;
    return;
  }

  tbody.innerHTML = data.map(c => `
    <tr>
      <td><b>${c.name}</b><br><small style="color:#0284c7; font-weight:700;">${c.pinfl}</small></td>
      <td>${c.region}<br><small style="color:var(--text-muted);">${c.role}</small></td>
      <td>${c.court}<br><small style="color:var(--text-muted);">${c.date}</small></td>
      <td><span class="badge badge-rose">${c.articles}</span></td>
      <td>${c.punishment}</td>
      <td style="text-align: center;"><span class="badge ${c.status === 'chetlatilgan' ? 'badge-emerald' : 'badge-rose'}">${c.status === 'chetlatilgan' ? 'Chetlatilgan' : 'Ishlamoqda'}</span></td>
      <td style="text-align: center;">
        <button onclick="openPdfViewer('court', '${c.name}', '${c.court}', '${c.date}', '${c.articles}: ${c.punishment}')" class="btn btn-rose" style="padding: 4px 8px;">
          Hukm PDF
        </button>
      </td>
    </tr>
  `).join('');
}

// 3. ЖИВОЙ ПОИСК ПО РЕЕСТРУ СУДИМЫХ
window.filterConvicted = function() {
  const input = document.getElementById('convictedSearch');
  if (!input) return;

  const q = input.value.toLowerCase().trim();
  const filtered = window.convictedData.filter(c => 
    c.name.toLowerCase().includes(q) || c.pinfl.includes(q) || c.region.toLowerCase().includes(q)
  );

  renderConvictedTable(filtered);
};

// 4. СОХРАНЕНИЕ НОВОГО СУДИМОГО СОТРУДНИКА
window.saveNewConvicted = function() {
  const name = document.getElementById('conv-in-name').value.trim();
  const pinfl = document.getElementById('conv-in-pinfl').value.trim();
  const region = document.getElementById('conv-in-region').value;
  const court = document.getElementById('conv-in-court').value.trim();
  const articles = document.getElementById('conv-in-articles').value.trim();
  const punish = document.getElementById('conv-in-punish').value.trim();

  if (!name || pinfl.length < 14 || !court || !articles) {
    alert("Iltimos, xodim F.I.SH, 14 xonali JSHSHIR, sud organi va JK moddalarini to'liq kiriting!");
    return;
  }

  const newEntry = {
    name: name,
    pinfl: pinfl,
    region: region,
    role: 'Sobiq mutaxassis',
    court: court,
    date: '01.10.2026',
    articles: articles,
    punishment: punish || 'Mansab huquqidan mahrum qilish',
    status: 'chetlatilgan'
  };

  window.convictedData.unshift(newEntry);

  // Синхронизация с реестром глубокой проверки (deepDrillDatabase)
  if (window.deepDrillDatabase && window.deepDrillDatabase.convicted) {
    window.deepDrillDatabase.convicted.unshift({
      regionId: 'samarqand',
      wing: 'agentlik',
      district: region + ' filiali',
      officer: name,
      pinfl: pinfl,
      role: 'Sobiq mutaxassis',
      reason: articles,
      code: 'SUD-2026-' + Date.now().toString().slice(-3),
      date: '01.10.2026',
      court: court,
      status: 'chetlatilgan',
      docType: 'court'
    });
  }

  // Обновление счетчиков в интерфейсе
  const kpiEl = document.getElementById('dash-kpi-conv');
  if (kpiEl) kpiEl.innerText = `${window.convictedData.length} nafar`;

  const navBadge = document.getElementById('nav-badge-conv');
  if (navBadge) navBadge.innerText = `${window.convictedData.length} nafar`;

  renderConvictedTable();
  closeModal('newConvictedModal');

  // Очистка полей формы
  document.getElementById('conv-in-name').value = '';
  document.getElementById('conv-in-pinfl').value = '';
  document.getElementById('conv-in-court').value = '';
  document.getElementById('conv-in-articles').value = '';
  document.getElementById('conv-in-punish').value = '';

  alert("Sudlangan xodim reyestrga muvaffaqiyatli saqlandi va tizimdan bloklandi!");
};

// 5. ОПЕРАТИВНЫЕ МЕРОПРИЯТИЯ (КАРТОЧКИ ПО 14 РЕГИОНАМ)
function renderOperationsRegionsGrid() {
  const container = document.getElementById('opsRegionsGrid');
  if (!container || !window.regionsReportData) return;

  container.innerHTML = window.regionsReportData.map(r => `
    <div onclick="openExplorer('operations', '${r.id}', null)" class="folder-grid-item" style="border-left: 4px solid #1d4ed8;">
      <div>
        <b style="font-size: 13px; color: var(--text-main);">&#128193; ${r.name}</b>
        <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">
          DXX, Departament, IIB reydlari va ushlanganlar
        </p>
      </div>
      <span class="badge badge-blue">${r.opsCount} ta tadbir &rarr;</span>
    </div>
  `).join('');
}

// 6. СОХРАНЕНИЕ НОВОГО ОПЕРАТИВНОГО МЕРОПРИЯТИЯ
window.saveNewOperation = function() {
  const region = document.getElementById('op-in-region').value;
  const district = document.getElementById('op-in-district').value.trim();
  const partner = document.getElementById('op-in-partner').value;
  const proof = document.getElementById('op-in-proof').value.trim();
  const desc = document.getElementById('op-in-desc').value.trim();

  if (!district || !desc) {
    alert("Iltimos, tuman filiali va tezkor tadbir tafsilotini kiriting!");
    return;
  }

  if (window.deepDrillDatabase && window.deepDrillDatabase.operations) {
    window.deepDrillDatabase.operations.unshift({
      regionId: 'samarqand',
      wing: 'agentlik',
      district: district,
      officer: 'Ushlangan mas\'ul xodim',
      pinfl: '31908851440019',
      role: 'Filial mutaxassisi',
      partner: partner,
      isCollab: true,
      proof: proof || 'Ashyoviy dalillar',
      reason: desc,
      code: 'TT-2026-' + Date.now().toString().slice(-3),
      date: '01.10.2026',
      docType: 'operation'
    });
  }

  // Обновление счетчиков на главной панели
  const opsKpi = document.getElementById('dash-kpi-ops');
  if (opsKpi) {
    const current = parseInt(opsKpi.innerText) || 14;
    opsKpi.innerText = `${current + 1} ta`;
  }

  const navOps = document.getElementById('nav-badge-ops');
  if (navOps) {
    const currentNav = parseInt(navOps.innerText) || 14;
    navOps.innerText = `${currentNav + 1} ta`;
  }

  renderOperationsRegionsGrid();
  closeModal('newOperationModal');

  // Очистка полей формы
  document.getElementById('op-in-district').value = '';
  document.getElementById('op-in-proof').value = '';
  document.getElementById('op-in-desc').value = '';

  alert("Tezkor tadbir muvaffaqiyatli qayd etildi va Respublika hisobotiga qo'shildi!");
};

// 7. ИНИЦИАЛИЗАЦИЯ ДАННЫХ МОДУЛЯ ПРИ ЗАГРУЗКЕ
window.addEventListener('DOMContentLoaded', () => {
  renderConvictedTable();
  renderOperationsRegionsGrid();
});
