// ==========================================================================
// KOMP-NAZORAT 2.1 — MODULES3.JS (29 USTUNLI MATRITSA VA EXCEL EKSPORT)
// ==========================================================================

// 1. 29 USTUNLI RASMIY MATRITSA BAZASI (14 TA HUDUD KESIMIDA)
window.matrix29FullData = [
  { id: 'samarqand', name: 'Samarqand viloyati', total: 38, hmmqo: 25, ichki: 13, hmmqo_prok: 2, hmmqo_iib: 1, hmmqo_dxx: 1, hmmqo_other: 0, ichki_prok: 2, ichki_iib: 1, ichki_dxx: 1, ichki_other: 0, hmmqo_crim: 1, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 2, hmmqo_fire: 3, hmmqo_disc: 8, ichki_crim: 1, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 1, ichki_fire: 3, ichki_disc: 7 },
  { id: 'toshkent_vil', name: 'Toshkent viloyati', total: 32, hmmqo: 20, ichki: 12, hmmqo_prok: 1, hmmqo_iib: 0, hmmqo_dxx: 0, hmmqo_other: 1, ichki_prok: 1, ichki_iib: 1, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 1, hmmqo_fire: 2, hmmqo_disc: 7, ichki_crim: 1, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 1, ichki_fire: 2, ichki_disc: 6 },
  { id: 'andijon', name: 'Andijon viloyati', total: 13, hmmqo: 6, ichki: 7, hmmqo_prok: 3, hmmqo_iib: 3, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 1, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 6, hmmqo_fire: 2, hmmqo_disc: 2, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 4, ichki_fire: 4, ichki_disc: 2 },
  { id: 'buxoro', name: 'Buxoro viloyati', total: 16, hmmqo: 3, ichki: 13, hmmqo_prok: 0, hmmqo_iib: 0, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 0, hmmqo_fire: 0, hmmqo_disc: 0, ichki_crim: 2, ichki_adm: 1, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 0, ichki_fire: 4, ichki_disc: 3 },
  { id: 'xorazm', name: 'Xorazm viloyati', total: 17, hmmqo: 10, ichki: 7, hmmqo_prok: 0, hmmqo_iib: 0, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 0, hmmqo_fire: 0, hmmqo_disc: 3, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 0, ichki_fire: 1, ichki_disc: 2 },
  { id: 'toshkent_sh', name: 'Toshkent shahri', total: 32, hmmqo: 21, ichki: 11, hmmqo_prok: 1, hmmqo_iib: 0, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 0, hmmqo_fire: 0, hmmqo_disc: 3, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 0, ichki_fire: 1, ichki_disc: 3 },
  { id: 'namangan', name: 'Namangan viloyati', total: 24, hmmqo: 15, ichki: 9, hmmqo_prok: 1, hmmqo_iib: 1, hmmqo_dxx: 0, hmmqo_other: 1, ichki_prok: 1, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 2, hmmqo_fire: 1, hmmqo_disc: 6, ichki_crim: 1, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 1, ichki_fire: 2, ichki_disc: 5 },
  { id: 'fargona', name: 'Farg\'ona viloyati', total: 29, hmmqo: 19, ichki: 10, hmmqo_prok: 1, hmmqo_iib: 1, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 1, ichki_iib: 0, ichki_dxx: 0, ichki_other: 1, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 1, hmmqo_fire: 1, hmmqo_disc: 6, ichki_crim: 1, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 0, ichki_fire: 2, ichki_disc: 5 },
  { id: 'qashqadaryo', name: 'Qashqadaryo viloyati', total: 28, hmmqo: 18, ichki: 10, hmmqo_prok: 2, hmmqo_iib: 1, hmmqo_dxx: 0, hmmqo_other: 1, ichki_prok: 2, ichki_iib: 1, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 1, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 3, hmmqo_fire: 2, hmmqo_disc: 5, ichki_crim: 1, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 2, ichki_fire: 3, ichki_disc: 4 },
  { id: 'surxondaryo', name: 'Surxondaryo viloyati', total: 22, hmmqo: 14, ichki: 8, hmmqo_prok: 1, hmmqo_iib: 1, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 1, hmmqo_fire: 1, hmmqo_disc: 5, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 1, ichki_fire: 1, ichki_disc: 4 },
  { id: 'jizzax', name: 'Jizzax viloyati', total: 36, hmmqo: 21, ichki: 15, hmmqo_prok: 1, hmmqo_iib: 1, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 0, hmmqo_fire: 0, hmmqo_disc: 2, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 0, ichki_fire: 0, ichki_disc: 8 },
  { id: 'sirdaryo', name: 'Sirdaryo viloyati', total: 15, hmmqo: 10, ichki: 5, hmmqo_prok: 0, hmmqo_iib: 0, hmmqo_dxx: 0, hmmqo_other: 1, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 1, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 1, hmmqo_fire: 1, hmmqo_disc: 3, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 1, ichki_fire: 1, ichki_disc: 3 },
  { id: 'navoiy', name: 'Navoiy viloyati', total: 18, hmmqo: 11, ichki: 7, hmmqo_prok: 1, hmmqo_iib: 0, hmmqo_dxx: 1, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 1, hmmqo_fire: 1, hmmqo_disc: 4, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 1, ichki_fire: 2, ichki_disc: 3 },
  { id: 'qr', name: 'Qoraqalpog\'iston Resp.', total: 12, hmmqo: 7, ichki: 5, hmmqo_prok: 0, hmmqo_iib: 0, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 0, hmmqo_fire: 0, hmmqo_disc: 1, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 0, ichki_fire: 3, ichki_disc: 0 }
];

// 2. 29 USTUNLI JADVALNI RENDERING QILISH
function renderFull29Matrix() {
  const tbody = document.getElementById('matrixTbody');
  if (!tbody) return;

  tbody.innerHTML = '';

  // JAMI YIG'INDI HISOBLASH
  let totals = {
    total: 0, hmmqo: 0, ichki: 0,
    hmmqo_prok: 0, hmmqo_iib: 0, hmmqo_dxx: 0, hmmqo_other: 0,
    ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0,
    hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 0, hmmqo_fire: 0, hmmqo_disc: 0,
    ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 0, ichki_fire: 0, ichki_disc: 0
  };

  window.matrix29FullData.forEach(r => {
    for (let k in totals) {
      totals[k] += (r[k] || 0);
    }
  });

  // 1-QATOR: JAMI (RESPUBLIKA YIG'INDISI)
  tbody.innerHTML += `
    <tr style="background: #e2e8f0; font-weight: 800; color: #0f172a;">
      <td colspan="2" style="text-align: left; padding-left: 12px;">JAMI (Respublika bo'yicha)</td>
      <td style="background: #bbf7d0; font-weight: 800; color: #047857;">${totals.total}</td>
      <td>${totals.hmmqo}</td>
      <td>${totals.ichki}</td>
      <td>${totals.hmmqo_prok}</td><td>${totals.hmmqo_iib}</td><td>${totals.hmmqo_dxx}</td><td>${totals.hmmqo_other}</td>
      <td>${totals.ichki_prok}</td><td>${totals.ichki_iib}</td><td>${totals.ichki_dxx}</td><td>${totals.ichki_other}</td>
      <td style="color:#be123c;">${totals.hmmqo_crim}</td><td>${totals.hmmqo_adm}</td><td>${totals.hmmqo_83}</td><td>${totals.hmmqo_84}</td><td>${totals.hmmqo_rej}</td><td>${totals.hmmqo_proc}</td>
      <td style="color:#be123c; font-weight:800;">${totals.hmmqo_fire}</td><td>${totals.hmmqo_disc}</td>
      <td style="color:#be123c;">${totals.ichki_crim}</td><td>${totals.ichki_adm}</td><td>${totals.ichki_83}</td><td>${totals.ichki_84}</td><td>${totals.ichki_rej}</td><td>${totals.ichki_proc}</td>
      <td style="color:#be123c; font-weight:800;">${totals.ichki_fire}</td><td>${totals.ichki_disc}</td>
    </tr>
  `;

  // HUDUDLARNING QATORLARI (14 TA VILOYAT)
  window.matrix29FullData.forEach((r, idx) => {
    tbody.innerHTML += `
      <tr>
        <td>${idx + 1}</td>
        <td style="text-align: left; font-weight: 600; min-width: 140px;">${r.name}</td>
        <td style="background: #f0fdf4; font-weight: 800; color: #047857;">${r.total}</td>
        <td>${r.hmmqo}</td>
        <td>${r.ichki}</td>
        <td>${r.hmmqo_prok || '-'}</td><td>${r.hmmqo_iib || '-'}</td><td>${r.hmmqo_dxx || '-'}</td><td>${r.hmmqo_other || '-'}</td>
        <td>${r.ichki_prok || '-'}</td><td>${r.ichki_iib || '-'}</td><td>${r.ichki_dxx || '-'}</td><td>${r.ichki_other || '-'}</td>
        <td style="color:${r.hmmqo_crim > 0 ? '#be123c' : 'inherit'}; font-weight:${r.hmmqo_crim > 0 ? '700' : 'normal'};">${r.hmmqo_crim || '-'}</td>
        <td>${r.hmmqo_adm || '-'}</td><td>${r.hmmqo_83 || '-'}</td><td>${r.hmmqo_84 || '-'}</td><td>${r.hmmqo_rej || '-'}</td><td>${r.hmmqo_proc || '-'}</td>
        <td style="color:#be123c; font-weight:700;">${r.hmmqo_fire || '-'}</td><td>${r.hmmqo_disc || '-'}</td>
        <td style="color:${r.ichki_crim > 0 ? '#be123c' : 'inherit'}; font-weight:${r.ichki_crim > 0 ? '700' : 'normal'};">${r.ichki_crim || '-'}</td>
        <td>${r.ichki_adm || '-'}</td><td>${r.ichki_83 || '-'}</td><td>${r.ichki_84 || '-'}</td><td>${r.ichki_rej || '-'}</td><td>${r.ichki_proc || '-'}</td>
        <td style="color:#be123c; font-weight:700;">${r.ichki_fire || '-'}</td><td>${r.ichki_disc || '-'}</td>
      </tr>
    `;
  });
}

// 3. MATRITSANI EXCELGA (CSV FORMATIDA) EKSPORT QILISH
window.exportMatrixToExcel = function() {
  const headers = [
    "T/r", "Davlat organlari nomlanishi", "Jami tekshiruvlar", "HMMQO", "Ichki nazorat",
    "HMMQO Prok.", "HMMQO IIB", "HMMQO DXX", "HMMQO Boshqa",
    "Ichki Prok.", "Ichki IIB", "Ichki DXX", "Ichki Boshqa",
    "HMMQO Jinoyat", "HMMQO Ma'muriy", "HMMQO JPK 83", "HMMQO JPK 84", "HMMQO Ko'rmasdan", "HMMQO Jarayonda", "HMMQO Bo'shatilgan", "HMMQO Intizomiy",
    "Ichki Jinoyat", "Ichki Ma'muriy", "Ichki JPK 83", "Ichki JPK 84", "Ichki Ko'rmasdan", "Ichki Jarayonda", "Ichki Bo'shatilgan", "Ichki Intizomiy"
  ];

  let csvContent = "\uFEFF" + headers.join(";") + "\n";

  window.matrix29FullData.forEach((r, i) => {
    const row = [
      i + 1, `"${r.name}"`, r.total, r.hmmqo, r.ichki,
      r.hmmqo_prok, r.hmmqo_iib, r.hmmqo_dxx, r.hmmqo_other,
      r.ichki_prok, r.ichki_iib, r.ichki_dxx, r.ichki_other,
      r.hmmqo_crim, r.hmmqo_adm, r.hmmqo_83, r.hmmqo_84, r.hmmqo_rej, r.hmmqo_proc, r.hmmqo_fire, r.hmmqo_disc,
      r.ichki_crim, r.ichki_adm, r.ichki_83, r.ichki_84, r.ichki_rej, r.ichki_proc, r.ichki_fire, r.ichki_disc
    ];
    csvContent += row.join(";") + "\n";
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `KompNazorat_29_Ustunli_Matritsa_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// 4. SAHIFA YUKLANGANDA MATRITSANI AVTOMAT CHIQARISH
window.addEventListener('DOMContentLoaded', () => {
  renderFull29Matrix();
});
