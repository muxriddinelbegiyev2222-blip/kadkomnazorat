// ==========================================================================
// KOMP-NAZORAT 2.1 — MODULES.JS (АСНОВНАЯ БАЗА И ДАШБОРД)
// ==========================================================================

// 1. БАЗА ДАННЫХ ПО 14 РЕГИОНАМ
window.regionsReportData = [
  { id: 'samarqand', name: 'Samarqand viloyati', invCount: 38, convictedCount: 3, opsCount: 2, riskCount: 4, firedCount: 3, conflictCount: 4, riskA: 2, riskB: 1, riskD: 1 },
  { id: 'toshkent_vil', name: 'Toshkent viloyati', invCount: 32, convictedCount: 4, opsCount: 2, riskCount: 5, firedCount: 2, conflictCount: 3, riskA: 2, riskB: 2, riskD: 1 },
  { id: 'andijon', name: 'Andijon viloyati', invCount: 13, convictedCount: 2, opsCount: 1, riskCount: 3, firedCount: 4, conflictCount: 3, riskA: 1, riskB: 1, riskD: 1 },
  { id: 'buxoro', name: 'Buxoro viloyati', invCount: 16, convictedCount: 1, opsCount: 1, riskCount: 3, firedCount: 2, conflictCount: 2, riskA: 1, riskB: 1, riskD: 1 },
  { id: 'xorazm', name: 'Xorazm viloyati', invCount: 17, convictedCount: 2, opsCount: 1, riskCount: 6, firedCount: 3, conflictCount: 3, riskA: 2, riskB: 2, riskD: 2 },
  { id: 'toshkent_sh', name: 'Toshkent shahri', invCount: 32, convictedCount: 2, opsCount: 2, riskCount: 4, firedCount: 2, conflictCount: 3, riskA: 2, riskB: 1, riskD: 1 },
  { id: 'namangan', name: 'Namangan viloyati', invCount: 24, convictedCount: 1, opsCount: 1, riskCount: 3, firedCount: 2, conflictCount: 2, riskA: 1, riskB: 1, riskD: 1 },
  { id: 'fargona', name: 'Farg\'ona viloyati', invCount: 29, convictedCount: 1, opsCount: 1, riskCount: 4, firedCount: 2, conflictCount: 2, riskA: 2, riskB: 1, riskD: 1 },
  { id: 'qashqadaryo', name: 'Qashqadaryo viloyati', invCount: 28, convictedCount: 1, opsCount: 1, riskCount: 4, firedCount: 2, conflictCount: 2, riskA: 2, riskB: 1, riskD: 1 },
  { id: 'surxondaryo', name: 'Surxondaryo viloyati', invCount: 22, convictedCount: 1, opsCount: 1, riskCount: 3, firedCount: 1, conflictCount: 2, riskA: 1, riskB: 1, riskD: 1 },
  { id: 'jizzax', name: 'Jizzax viloyati', invCount: 36, convictedCount: 0, opsCount: 0, riskCount: 3, firedCount: 1, conflictCount: 1, riskA: 1, riskB: 1, riskD: 1 },
  { id: 'sirdaryo', name: 'Sirdaryo viloyati', invCount: 15, convictedCount: 0, opsCount: 0, riskCount: 2, firedCount: 1, conflictCount: 1, riskA: 1, riskB: 1, riskD: 0 },
  { id: 'navoiy', name: 'Navoiy viloyati', invCount: 18, convictedCount: 0, opsCount: 1, riskCount: 2, firedCount: 1, conflictCount: 1, riskA: 1, riskB: 0, riskD: 1 },
  { id: 'qr', name: 'Qoraqalpog\'iston Resp.', invCount: 12, convictedCount: 0, opsCount: 0, riskCount: 2, firedCount: 0, conflictCount: 1, riskA: 0, riskB: 1, riskD: 1 }
];

// 2. ДЕТАЛЬНАЯ БАЗА ПО ДЕЛАМ И СОТРУДНИКАМ
window.deepDrillDatabase = {
  investigations: [
    { regionId: 'samarqand', wing: 'agentlik', district: 'Pastdarg\'om tuman filiali', officer: 'Aliyev Mansur G\'aniyevich', pinfl: '31804901230011', role: 'Bo\'lim boshlig\'i', reason: '1.5 ga ekin yerini noturar joy toifasiga noqonuniy o\'tkazish', code: 'XT-SAM-081', date: '21.09.2026', docType: 'investigation' },
    { regionId: 'samarqand', wing: 'palata', district: 'Urgut tuman filiali', officer: 'Rustamov Bobur Shokirovich', pinfl: '32001881230022', role: 'Yetakchi muhandis', reason: 'Yer chegaralarini asossiz o\'zgartirib dalolatnoma tuzish', code: 'XT-SAM-094', date: '15.09.2026', docType: 'investigation' },
    { regionId: 'toshkent_vil', wing: 'agentlik', district: 'Qibray tumani filiali', officer: 'Ergashev Tohir Mansurovich', pinfl: '31904881120021', role: 'Bosh muhandis', reason: 'Auksionsiz berilgan bino-inshootga sun\'iy kadastr ochish', code: 'XT-TOS-033', date: '08.08.2026', docType: 'investigation' },
    { regionId: 'toshkent_vil', wing: 'palata', district: 'Zangiota tuman filiali', officer: 'Karimov Jasur Shukurovich', pinfl: '32401912230011', role: 'Davlat ro\'yxatidan o\'tkazuvchi', reason: 'Ko\'chmas mulk bazasiga ruxsatsiz o\'zgartirish kiritish', code: 'XT-TOS-051', date: '19.09.2026', docType: 'investigation' }
  ],
  convicted: [
    { regionId: 'toshkent_vil', wing: 'agentlik', district: 'Qibray tumani filiali', officer: 'Ergashev Tohir Mansurovich', pinfl: '31904881120021', role: 'Yetakchi muhandis', reason: '168-m 3-qism, 205-m (Firibgarlik)', code: 'SUD-TOS-019', date: '18.04.2025', court: 'Qibray tuman sudi', status: 'chetlatilgan', docType: 'court' },
    { regionId: 'samarqand', wing: 'palata', district: 'Samarqand shahar filiali', officer: 'Aliyev Vali G\'aniyevich', pinfl: '32004881120034', role: 'Davlat ro\'yxatidan o\'tkazuvchi', reason: '167-m, 210-m (Pora olish)', code: 'SUD-SAM-007', date: '12.03.2024', court: 'Samarqand shahar JIB sudi', status: 'chetlatilgan', docType: 'court' }
  ],
  operations: [
    { regionId: 'samarqand', wing: 'agentlik', district: 'Pastdarg\'om tuman filiali', officer: 'Filial boshlig\'i o\'rinbosari', pinfl: '32104921230055', role: 'Muhandis', partner: 'Davlat Xavfsizlik Xizmati (DXX)', isCollab: true, proof: '3,000 AQSH dollari', reason: 'Ekin yerini noturar joy toifasiga o\'tkazish evaziga pora', code: 'TT-SAM-08', date: '18.09.2026', docType: 'operation' }
  ],
  risk: [
    { regionId: 'samarqand', wing: 'palata', district: 'Samarqand shahar filiali', officer: 'Rahmonov Dilshod Anvarovich', pinfl: '32104921230055', role: 'Mulkni ro\'yxatga olish bo\'limi mudiri', type: 'A', reason: 'Auksionsiz yer maydoniga xulosa berish xavfi yuqori', action: 'Video nazoratda, imzo vakolati cheklandi', code: 'XAVF-SAM-01', date: '12.09.2026', docType: 'risk' }
  ],
  fired: [
    { regionId: 'samarqand', wing: 'agentlik', district: 'Urgut tuman filiali', officer: 'Sultonov Murod G\'aniyevich', pinfl: '31804901230077', role: 'Yetakchi inspektor', reason: 'Egallangan yerga soxta kadastr pasporti shakllantirgan', orderNum: '№144-K', date: '14.08.2026', docType: 'fired' }
  ]
};

// 3. ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
window.switchTab = function(tabId) {
  if (typeof exitExplorerToDashboard === 'function') {
    exitExplorerToDashboard();
  }

  const tabs = [
    'dashboard', 'task-center', 'investigations', 'matrix-report',
    'risk-groups', 'fired-list', 'operations', 'convicted',
    'conflicts', 'archive', 'pre-check'
  ];

  tabs.forEach(id => {
    const el = document.getElementById('tab-' + id);
    const btn = document.getElementById('btn-' + id);
    if (el) el.classList.add('hidden');
    if (btn) btn.classList.remove('active');
  });

  const activeSection = document.getElementById('tab-' + tabId);
  const activeBtn = document.getElementById('btn-' + tabId);

  if (activeSection) activeSection.classList.remove('hidden');
  if (activeBtn) activeBtn.classList.add('active');

  const titles = {
    'dashboard': 'Boshqaruv va Chuqur Tahlillar',
    'task-center': 'Respublika Nazorat Topshiriqlari Markazi',
    'investigations': 'Xizmat Tekshiruvlari — 14 ta Hudud (333 ta ish)',
    'matrix-report': 'Xizmat Tekshiruvlari Hisobot Matritsasi (29 Ustun — 333 ta)',
    'risk-groups': 'Korrupsion Xavf Guruhlari (A, B, D Toifalar)',
    'fired-list': 'Komplayens Tashabbusi Bilan Bo\'shatilgan Xodimlar',
    'operations': 'Vakolatli Organlar O\'tkazgan Tezkor Tadbirlar',
    'convicted': 'Sudlangan va Mansab Huquqidan Mahrum Etilganlar Reyestri',
    'conflicts': 'Manfaatlar To\'qnashuvi va Tadbirkorlikka Aloqadorlik (STIR)',
    'archive': '5 Bosqichli Yagona Elektron Arxiv Tizimi',
    'pre-check': 'Ishga Qabul Qilishdan Oldin Xodimni Tekshirish Auditi'
  };

  const pageTitle = document.getElementById('page-title');
  if (pageTitle) {
    pageTitle.innerText = titles[tabId] || 'Nazorat Portali';
  }
};

// 4. ТЕМА ОФОРМЛЕНИЯ (DARK / LIGHT)
window.toggleTheme = function() {
  const body = document.body;
  const btn = document.getElementById('themeToggleBtn');
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    if (btn) btn.innerHTML = '&#9789; Tungi';
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    if (btn) btn.innerHTML = '&#9788; Kunduzgi';
  }
};

// 5. МОДАЛЬНЫЕ ОКНА
window.openModal = function(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
};

window.closeModal = function(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
};

// 6. ФИЛЬТРЫ ПЕРИОДА (НЕДЕЛЯ, МЕСЯЦ, ГОД)
window.setTimeFilter = function(type) {
  ['week', 'month', 'year'].forEach(t => {
    const b = document.getElementById('filter-' + t);
    if (b) b.classList.remove('active');
  });

  const active = document.getElementById('filter-' + type);
  if (active) active.classList.add('active');

  const invKpi = document.getElementById('dash-kpi-inv');
  const convKpi = document.getElementById('dash-kpi-conv');
  const opsKpi = document.getElementById('dash-kpi-ops');
  const riskKpi = document.getElementById('dash-kpi-risk');
  const firedKpi = document.getElementById('dash-kpi-fired');
  const chartBadge = document.getElementById('chart-badge');

  if (type === 'week') {
    if (invKpi) invKpi.innerText = '48 ta';
    if (convKpi) convKpi.innerText = '2 nafar';
    if (opsKpi) opsKpi.innerText = '3 ta';
    if (riskKpi) riskKpi.innerText = '11 nafar';
    if (firedKpi) firedKpi.innerText = '4 nafar';
    if (chartBadge) chartBadge.innerText = 'Haftalik Dinamika';
    renderDashboardChart('week');
  } else if (type === 'month') {
    if (invKpi) invKpi.innerText = '333 ta';
    if (convKpi) convKpi.innerText = '18 nafar';
    if (opsKpi) opsKpi.innerText = '14 ta';
    if (riskKpi) riskKpi.innerText = '46 nafar';
    if (firedKpi) firedKpi.innerText = '25 nafar';
    if (chartBadge) chartBadge.innerText = 'Oylik Dinamika';
    renderDashboardChart('month');
  } else if (type === 'year') {
    if (invKpi) invKpi.innerText = '1,420 ta';
    if (convKpi) convKpi.innerText = '74 nafar';
    if (opsKpi) opsKpi.innerText = '68 ta';
    if (riskKpi) riskKpi.innerText = '182 nafar';
    if (firedKpi) firedKpi.innerText = '94 nafar';
    if (chartBadge) chartBadge.innerText = 'Yillik Dinamika';
    renderDashboardChart('year');
  }
};

// 7. ПОСТРОЕНИЕ ДИНАМИЧЕСКИХ ДИАГРАММ
function renderDashboardChart(mode) {
  const container = document.getElementById('chartBarsContainer');
  if (!container) return;

  let points = [];
  if (mode === 'week') {
    points = [
      { l: 'Du', v: 1, t: '-1 ta', c: '#047857' },
      { l: 'Se', v: 3, t: '+2 ta', c: '#be123c' },
      { l: 'Cho', v: 4, t: '+1 ta', c: '#be123c' },
      { l: 'Pa', v: 2, t: '-2 ta', c: '#047857' },
      { l: 'Ju', v: 3, t: '+1 ta', c: '#0284c7' },
      { l: 'Sha', v: 1, t: '-2 ta', c: '#047857' }
    ];
  } else if (mode === 'year') {
    points = [
      { l: '2023-y', v: 42, t: 'Baza', c: '#0284c7' },
      { l: '2024-y', v: 56, t: '+33%', c: '#0284c7' },
      { l: '2025-y', v: 71, t: '+26%', c: '#be123c' },
      { l: '2026-y', v: 68, t: '-4%', c: '#047857' }
    ];
  } else {
    points = [
      { l: 'Aprel', v: 8, t: '-20%', c: '#047857' },
      { l: 'May', v: 12, t: '+50%', c: '#0284c7' },
      { l: 'Iyun', v: 9, t: '-25%', c: '#047857' },
      { l: 'Iyul', v: 16, t: '+77%', c: '#be123c' },
      { l: 'Avgust', v: 11, t: '-31%', c: '#047857' },
      { l: 'Sentabr', v: 14, t: '+27%', c: '#be123c' }
    ];
  }

  const maxV = Math.max(...points.map(p => p.v));
  container.innerHTML = points.map(p => {
    const h = Math.round((p.v / maxV) * 60) + 16;
    const isUp = p.t.includes('+');
    return `
      <div class="chart-col">
        <span class="trend-badge ${isUp ? 'trend-up' : 'trend-down'}">${p.t}</span>
        <b style="font-size: 11px; color: ${p.c}; margin-bottom: 2px;">${p.v} ta</b>
        <div class="chart-bar-elem" style="height: ${h}px; background: ${p.c};"></div>
        <span style="font-size: 10px; font-weight: 700; color: var(--text-muted); margin-top: 4px;">${p.l}</span>
      </div>
    `;
  }).join('');
}

// 8. ПАНЕЛЬ 14 РЕГИОНАЛЬНЫХ УПРАВЛЕНИЙ НА ДАШБОРДЕ
function renderDashboardRegionsGrid() {
  const container = document.getElementById('dashboardRegionsGrid');
  if (!container) return;

  container.innerHTML = window.regionsReportData.map(r => `
    <div onclick="openExplorer('all', '${r.id}', null)" class="folder-grid-item" style="border-left: 4px solid #0284c7;">
      <div>
        <b style="font-size: 13px; color: var(--text-main);">&#128193; ${r.name}</b>
        <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">
          Tekshiruv: <b style="color:#d97706;">${r.invCount} ta</b> | Sudlangan: <b style="color:#be123c;">${r.convictedCount} nafar</b> | Xavf (A, B, D): <b style="color:#b45309;">${r.riskCount} ta</b>
        </p>
      </div>
      <span class="badge badge-blue">Agentlik va Palata &rarr;</span>
    </div>
  `).join('');
}

// 9. ЗАПОЛНЕНИЕ СЕЛЕКТОРОВ РЕГИОНОВ В МОДАЛЬНЫХ ОКНАХ
function populateRegionSelectors() {
  const ids = ['task-in-region', 'conv-in-region', 'risk-in-region', 'op-in-region', 'inv-in-region'];
  ids.forEach(id => {
    const select = document.getElementById(id);
    if (select) {
      select.innerHTML = window.regionsReportData.map(r => `
        <option value="${r.name}">${r.name}</option>
      `).join('');
    }
  });
}

// 10. АУДИТ ПРИ ПРИЕМЕ НА РАБОТУ (PRE-CHECK)
window.executePreCheck = function() {
  const input = document.getElementById('preCheckPinfl');
  const resultArea = document.getElementById('preCheckResultArea');
  if (!input || !resultArea) return;

  const pinfl = input.value.trim();
  if (pinfl.length < 14) {
    alert("Iltimos, to'liq 14 xonali JSHSHIR (PNFL) kiriting!");
    return;
  }

  const isConvicted = window.deepDrillDatabase.convicted.some(c => c.pinfl === pinfl);
  const isRisk = window.deepDrillDatabase.risk.some(r => r.pinfl === pinfl);
  const isFired = window.deepDrillDatabase.fired.some(f => f.pinfl === pinfl);

  if (isConvicted) {
    resultArea.innerHTML = `
      <div class="box" style="border-left: 5px solid #be123c; background: #fff1f2;">
        <h4 style="color: #be123c; font-size: 14px;">&#9888; QAYTA ISHGA QABUL QILISH TAQIQLANADI!</h4>
        <p style="font-size: 12px; color: #475569; margin-top: 4px;">Mazkur fuqaro sud hukmiga binoan davlat xizmati va mansabdorlik lavozimlaridan mahrum etilganlar reyestrida mavjud.</p>
      </div>
    `;
  } else if (isRisk) {
    resultArea.innerHTML = `
      <div class="box" style="border-left: 5px solid #d97706; background: #fefce8;">
        <h4 style="color: #d97706; font-size: 14px;">&#9888; DIQQAT: YUQORI KORRUPSION XAVF GURUHI!</h4>
        <p style="font-size: 12px; color: #475569; margin-top: 4px;">Ushbu nomzod tizimda korrupsion xavf reyestriga kiritilgan. Maxsus ichki nazorat komissiyasi suhbati talab etiladi.</p>
      </div>
    `;
  } else if (isFired) {
    resultArea.innerHTML = `
      <div class="box" style="border-left: 5px solid #be123c; background: #fff1f2;">
        <h4 style="color: #be123c; font-size: 14px;">&#9888; KOMPLAYENS TASHABBUSI BILAN BO'SHATILGAN!</h4>
        <p style="font-size: 12px; color: #475569; margin-top: 4px;">Nomzod avval jiddiy qonunbuzilish holatlari sababli mehnat shartnomasi bekor qilingan xodimlar ro'yxatida qayd etilgan.</p>
      </div>
    `;
  } else {
    resultArea.innerHTML = `
      <div class="box" style="border-left: 5px solid #047857; background: #f0fdf4;">
        <h4 style="color: #047857; font-size: 14px;">&#10004; CHEKLOVLAR ANIQLANMADI</h4>
        <p style="font-size: 12px; color: #475569; margin-top: 4px;">JSHSHIR: <b>${pinfl}</b> bo'yicha sudlanganlik, intizomiy bo'shatilish va korrupsion xavf holatlari mavjud emas. Ishga qabul qilish mumkin.</p>
      </div>
    `;
  }
};

// 11. ИНИЦИАЛИЗАЦИЯ ДАШБОРДА
window.addEventListener('DOMContentLoaded', () => {
  renderDashboardChart('month');
  renderDashboardRegionsGrid();
  populateRegionSelectors();
});
