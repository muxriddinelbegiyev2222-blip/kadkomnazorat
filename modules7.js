// ==========================================================================
// KOMP-NAZORAT 2.1 — MODULES7.JS (TOPSHIRIQLAR MARKAZI VA XIZMAT TEKSHIRUVI)
// ==========================================================================

// 1. MARKAZ TOPSHIRIQLARI DASTLABKI BAZASI
window.taskCenterData = [
  {
    id: 'T-2026-001',
    title: 'Ko\'chmas mulk bazasida yaqin qarindoshlar nomiga rasmiylashtirilgan kadastr pasportlari auditi',
    region: 'Samarqand viloyati',
    wing: 'Kadastrlar Palatasi viloyat boshqarmasi',
    date: '10.09.2026',
    deadline: '28.09.2026',
    status: 'Bajarildi',
    response: 'Audit yakunlandi, 2 ta noqonuniy ro\'yxatdan o\'tkazish holati bekor qilindi.',
    fileName: 'Audit_dalolatnomasi_SAM_2026.pdf'
  },
  {
    id: 'T-2026-002',
    title: 'Qishloq xo\'jaligi ekin yerlarini noqonuniy egallash va o\'zboshimchalik bilan qurilma qurish holatlari',
    region: 'Toshkent viloyati',
    wing: 'Kadastr Agentligi viloyat boshqarmasi',
    date: '15.09.2026',
    deadline: '05.10.2026',
    status: 'Jarayonda',
    response: 'Hududiy ishchi guruh tomonidan 14 ta konturda xatlov o\'tkazilmoqda.',
    fileName: 'Oraliq_ma\'lumotnoma_TOS.pdf'
  },
  {
    id: 'T-2026-003',
    title: 'Auksionsiz berilgan bino-inshootlarga birlamchi kadastr yig\'majildi ochilganligi holatlarini tekshirish',
    region: 'Andijon viloyati',
    wing: 'Kadastrlar Palatasi viloyat boshqarmasi',
    date: '05.09.2026',
    deadline: '22.09.2026',
    status: 'Bajarildi',
    response: 'Barcha materiallar to\'planib, viloyat prokuraturasiga taqdim etildi.',
    fileName: 'Andijon_prokuratura_taqdimnoma.pdf'
  },
  {
    id: 'T-2026-004',
    title: 'Hududiy arxiv hujjatlarini raqamlashtirishda ma\'lumotlar xavfsizligini ta\'minlash holati',
    region: 'Farg\'ona viloyati',
    wing: 'Kadastrlar Palatasi viloyat boshqarmasi',
    date: '18.09.2026',
    deadline: '10.10.2026',
    status: 'Jarayonda',
    response: '',
    fileName: ''
  }
];

// 2. TOPSHIRIQLAR JADVALINI RENDERING QILISH
function renderTaskCenterTable() {
  const tbody = document.getElementById('taskCenterTableBody');
  if (!tbody) return;

  tbody.innerHTML = window.taskCenterData.map(t => {
    const isDone = t.status === 'Bajarildi';
    const isRejected = t.status === 'Qaytarildi';

    let statusBadge = '<span class="badge badge-amber">Jarayonda</span>';
    if (isDone) statusBadge = '<span class="badge badge-emerald">Bajarildi</span>';
    if (isRejected) statusBadge = '<span class="badge badge-rose">Qaytarildi (Kamchilik)</span>';

    return `
      <tr>
        <td>
          <b>${t.id}</b><br>
          <span style="font-size: 11px; color: var(--text-main); font-weight: 600;">${t.title}</span>
        </td>
        <td>
          <b>${t.region}</b><br>
          <small style="color: var(--text-muted);">${t.wing}</small>
        </td>
        <td>${t.date}</td>
        <td><b style="color: #be123c;">${t.deadline}</b></td>
        <td style="text-align: center;">${statusBadge}</td>
        <td>
          ${t.response ? `
            <div style="font-size: 11px; color: #047857; font-weight: 600;">&#10004; ${t.response}</div>${t.fileName ? `<div style="font-size: 10px; color: #0284c7; font-weight: 700; margin-top: 2px;">&#128206; ${t.fileName}</div>` : ''}
          ` : `<span style="font-size: 11px; color: var(--text-muted); italic;">Hisobot yuborilmagan</span>`}
        </td>
        <td style="text-align: center;">
          <div style="display: flex; gap: 4px; justify-content: center;">
            <button onclick="acceptTaskResponse('${t.id}')" class="btn btn-emerald" style="padding: 3px 6px; font-size: 10px;" title="Qabul qilish">
              &#10004; Qabul
            </button>
            <button onclick="rejectTaskResponse('${t.id}')" class="btn btn-rose" style="padding: 3px 6px; font-size: 10px;" title="Kamchilik bilan qaytarish">
              &#10006; Qaytarish
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// 3. TOPSHIRIQNI QABUL QILISH VA RAD ETISH FUNKSIYALARI
window.acceptTaskResponse = function(taskId) {
  const task = window.taskCenterData.find(t => t.id === taskId);
  if (!task) return;

  task.status = 'Bajarildi';
  if (!task.response) {
    task.response = 'Markaziy apparat tomonidan ijro qanoatlantirildi va yopildi.';
  }
  renderTaskCenterTable();
  alert(`${taskId} topshirig'i ijrosi muvaffaqiyatli qabul qilindi va yopildi!`);
};

window.rejectTaskResponse = function(taskId) {
  const task = window.taskCenterData.find(t => t.id === taskId);
  if (!task) return;

  const reason = prompt("Qaytarish sababi va ko'rsatmani kiriting:", "Ma'lumotlar to'liq asoslanmagan, qayta tekshirilsin.");
  if (reason) {
    task.status = 'Qaytarildi';
    task.response = `RAD ETILDI: ${reason}`;
    renderTaskCenterTable();
    alert(`${taskId} topshirig'i hududga kamchiliklarni bartaraf etish uchun qaytarildi!`);
  }
};

// 4. YANGI TOPSHIRIQ YUBORISH (MARKAZDAN)
window.saveNewTask = function() {
  const title = document.getElementById('task-in-title').value.trim();
  const region = document.getElementById('task-in-region').value;
  const wing = document.getElementById('task-in-wing').value;
  const deadline = document.getElementById('task-in-deadline').value;

  if (!title || !deadline) {
    alert("Iltimos, topshiriq mazmuni va ijro dedlaynini to'liq ko'rsating!");
    return;
  }

  const newTask = {
    id: 'T-2026-' + (window.taskCenterData.length + 1).toString().padStart(3, '0'),
    title: title,
    region: region,
    wing: wing,
    date: '01.10.2026',
    deadline: deadline,
    status: 'Jarayonda',
    response: '',
    fileName: ''
  };

  window.taskCenterData.unshift(newTask);

  // Menyudagi topshiriqlar hisoblagichini yangilash
  const navBadge = document.getElementById('nav-badge-tasks');
  if (navBadge) {
    navBadge.innerText = `${window.taskCenterData.length} ta`;
  }

  renderTaskCenterTable();
  closeModal('newTaskModal');

  document.getElementById('task-in-title').value = '';
  document.getElementById('task-in-deadline').value = '';

  alert("Nazorat topshirig'i rasmiylashtirildi va ijrochiga yuborildi!");
};

// 5. XIZMAT TEKSHIRUVLARI BO'LIMI KARTALARI
function renderInvestigationRegionsGrid() {
  const container = document.getElementById('invRegionsGrid');
  if (!container || !window.regionsReportData) return;

  container.innerHTML = window.regionsReportData.map(r => `
    <div onclick="openExplorer('investigations', '${r.id}', null)" class="folder-grid-item" style="border-left: 4px solid #d97706;">
      <div>
        <b style="font-size: 13px; color: var(--text-main);">&#128193; ${r.name}</b>
        <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">
          HMMQO va Ichki nazorat dalolatnomalari
        </p>
      </div>
      <span class="badge badge-amber">${r.invCount} ta tekshiruv &rarr;</span>
    </div>
  `).join('');
}

// 6. YANGI XIZMAT TEKSHIRUVI OCHISH
window.saveNewInvestigation = function() {
  const regionName = document.getElementById('inv-in-region').value;
  const role = document.getElementById('inv-in-role').value.trim();
  const type = document.getElementById('inv-in-type').value;
  const desc = document.getElementById('inv-in-desc').value.trim();

  if (!role || !desc) {
    alert("Iltimos, tuman filiali, xodim va tekshiruv sababini to'liq yozing!");
    return;
  }

  const regObj = window.regionsReportData.find(r => r.name === regionName) || window.regionsReportData[0];

  if (window.deepDrillDatabase && window.deepDrillDatabase.investigations) {
    window.deepDrillDatabase.investigations.unshift({
      regionId: regObj.id,
      wing: 'agentlik',
      district: role,
      officer: 'Tekshiruvdagi xodim',
      pinfl: '31809921230044',
      role: 'Mas\'ul mutaxassis',
      reason: `${type}: ${desc}`,
      code: 'XT-2026-' + Date.now().toString().slice(-3),
      date: '01.10.2026',
      docType: 'investigation'
    });
  }

  // Viloyat statistikasini va KPI hisoblagichlarini yangilash
  regObj.invCount++;

  const invKpi = document.getElementById('dash-kpi-inv');
  if (invKpi) {
    const cur = parseInt(invKpi.innerText) || 333;
    invKpi.innerText = `${cur + 1} ta`;
  }

  // 29 ustunli matritsani yangilash
  if (window.matrix29FullData) {
    const row = window.matrix29FullData.find(m => m.id === regObj.id);
    if (row) {
      row.total++;
      if (type.includes('Ichki')) {
        row.ichki++;
      } else {
        row.hmmqo++;
      }
      if (typeof renderFull29Matrix === 'function') {
        renderFull29Matrix();
      }
    }
  }

  renderInvestigationRegionsGrid();
  closeModal('newInvestigationModal');

  document.getElementById('inv-in-role').value = '';
  document.getElementById('inv-in-desc').value = '';

  alert("Xizmat tekshiruvi ochildi va umumiy nazorat bazasiga kiritildi!");
};

// 7. MODULNI DASTLABKI ISHGA TUSHIRISH
window.addEventListener('DOMContentLoaded', () => {
  renderTaskCenterTable();
  renderInvestigationRegionsGrid();
});
