// ==========================================================================
// KOMP-NAZORAT 2.1 — MODULES6.JS (5 BOSQICHLI ARXIV VA RASMIY DEMO PDF)
// ==========================================================================

// --------------------------------------------------------------------------
// 1. 5 BOSQICHLI ELEKTRON ARXIV TIZIMI
// --------------------------------------------------------------------------

// 1-BOSQICH: HUJJAT TOIFALARI
window.initArchive = function() {
  const badge = document.getElementById('archivePathBadge');
  if (badge) badge.innerText = "1-Bosqich: Hujjat Toifalari";

  const area = document.getElementById('archiveViewArea');
  if (!area) return;

  const categories = [
    { id: 'ops', name: '1. Tezkor Tadbirlar Arxivi', desc: 'DXX, Departament, IIB reyd bayonnomalari' },
    { id: 'inv', name: '2. Xizmat Tekshiruvi Xulosalari', desc: 'Komplayens dalolatnomalari va xulosalari' },
    { id: 'conf', name: '3. Manfaatlar To\'qnashuvi', desc: 'Qarindoshlik va tijorat subyektlari jildlari' },
    { id: 'stir', name: '4. STIR Dalolatnomalari', desc: 'Tadbirkorlik va MCHJ ta\'sischilari ro\'yxati' },
    { id: 'court', name: '5. Sud Hukmlari Nusxalari', desc: 'Mansab taqiqi belgilangan rasmiy hukmlar' },
    { id: 'tasks', name: '6. Ijro Xatlari va Topshiriqlar', desc: 'Agentlik va Palata topshiriqlari ijrosi' }
  ];

  area.innerHTML = `
    <div class="grid-2" style="grid-template-columns: repeat(3, 1fr); gap: 12px;">
      ${categories.map(c => `
        <div onclick="openArchiveStage2('${c.name}')" class="folder-grid-item" style="border-left: 4px solid #0284c7; padding: 16px;">
          <div>
            <b style="font-size: 13px; color: var(--text-main);">&#128193; ${c.name}</b>
            <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">${c.desc}</p>
          </div>
          <span class="badge badge-blue">Kirish &rarr;</span>
        </div>
      `).join('')}
    </div>
  `;
};

// 2-BOSQICH: 14 TA HUDUD
window.openArchiveStage2 = function(catName) {
  const badge = document.getElementById('archivePathBadge');
  if (badge) badge.innerText = `${catName} > Hududlar`;

  const area = document.getElementById('archiveViewArea');
  if (!area || !window.regionsReportData) return;

  area.innerHTML = `
    <div style="margin-bottom: 12px;">
      <button onclick="initArchive()" class="btn btn-slate">&larr; Hujjat toifalariga qaytish</button>
    </div>
    <div class="grid-2">
      ${window.regionsReportData.map(r => `
        <div onclick="openArchiveStage3('${catName}', '${r.id}')" class="folder-grid-item">
          <b style="font-size: 13px; color: var(--text-main);">&#128193; ${r.name}</b>
          <span class="badge badge-slate">Ochish &rarr;</span>
        </div>
      `).join('')}
    </div>
  `;
};

// 3-BOSQICH: YILLAR (2026 VA 2025)
window.openArchiveStage3 = function(catName, regionId) {
  const reg = (window.regionsReportData && window.regionsReportData.find(r => r.id === regionId)) || { name: 'Samarqand viloyati', id: 'samarqand' };
  
  const badge = document.getElementById('archivePathBadge');
  if (badge) badge.innerText = `${catName} > ${reg.name} > Yillar`;

  const area = document.getElementById('archiveViewArea');
  if (!area) return;

  area.innerHTML = `
    <div style="margin-bottom: 12px;">
      <button onclick="openArchiveStage2('${catName}')" class="btn btn-slate">&larr; Viloyatlarga qaytish</button>
    </div>
    <div class="grid-2">
      <div onclick="openArchiveStage4('${catName}', '${reg.id}', '2026-yil')" class="folder-grid-item" style="border-left: 5px solid #0284c7; padding: 20px;">
        <div>
          <b style="font-size: 15px; color: #0284c7;">&#128193; 2026-yil</b>
          <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">Joriy yilgi 12 oy arxiv jildlari</p>
        </div>
        <span class="badge badge-blue">Oylar &rarr;</span>
      </div>
      <div onclick="openArchiveStage4('${catName}', '${reg.id}', '2025-yil')" class="folder-grid-item" style="border-left: 5px solid #64748b; padding: 20px;">
        <div>
          <b style="font-size: 15px; color: #475569;">&#128193; 2025-yil</b>
          <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">Yopilgan yillik arxiv jildlari</p>
        </div>
        <span class="badge badge-slate">Oylar &rarr;</span>
      </div>
    </div>
  `;
};

// 4-BOSQICH: OYLAR (YANVAR - DEKABR)
window.openArchiveStage4 = function(catName, regionId, year) {
  const reg = (window.regionsReportData && window.regionsReportData.find(r => r.id === regionId)) || { name: 'Samarqand viloyati', id: 'samarqand' };
  
  const badge = document.getElementById('archivePathBadge');
  if (badge) badge.innerText = `${catName} > ${reg.name} > ${year} > Oylar`;

  const area = document.getElementById('archiveViewArea');
  if (!area) return;

  const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktyabr', 'Noyabr', 'Dekabr'];

  area.innerHTML = `
    <div style="margin-bottom: 12px;">
      <button onclick="openArchiveStage3('${catName}', '${reg.id}')" class="btn btn-slate">&larr; Yillarga qaytish</button>
    </div>
    <div class="grid-2" style="grid-template-columns: repeat(4, 1fr); gap: 10px;">
      ${months.map(m => `
        <div onclick="openArchiveStage5('${catName}', '${reg.id}', '${year}', '${m}')" class="folder-grid-item" style="padding: 12px;">
          <b style="font-size: 12px; color: var(--text-main);">&#128193; ${m}</b>
          <span class="badge badge-blue">Fayllar &rarr;</span>
        </div>
      `).join('')}
    </div>
  `;
};

// 5-BOSQICH: HUJJATLAR JADVALI VA BIR BOSISHDA PDF OCHISH
window.openArchiveStage5 = function(catName, regionId, year, month) {
  const reg = (window.regionsReportData && window.regionsReportData.find(r => r.id === regionId)) || { name: 'Samarqand viloyati', id: 'samarqand' };
  
  const badge = document.getElementById('archivePathBadge');
  if (badge) badge.innerText = `${reg.name} > ${year} > ${month} > Hujjatlar`;

  const area = document.getElementById('archiveViewArea');
  if (!area) return;

  area.innerHTML = `
    <div style="margin-bottom: 12px;">
      <button onclick="openArchiveStage4('${catName}', '${reg.id}', '${year}')" class="btn btn-slate">&larr; Oylarga qaytish</button>
    </div>
    <div class="box" style="padding: 0; overflow: hidden;">
      <table>
        <thead>
          <tr>
            <th>Hujjat Kodi va Nomi</th>
            <th>Boshqarma va Filial</th>
            <th>Yuklangan Sana</th>
            <th>Hajmi</th>
            <th style="text-align: center;">Asos Hujjat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>${reg.name}_${month}_№041_Xulosa.pdf</b></td>
            <td>Davlat Kadastrlari Palatasi filiali</td>
            <td>24.09.2026</td>
            <td>2.8 MB</td>
            <td style="text-align: center;">
              <button onclick="openPdfViewer('investigation', 'ARX-041', '${reg.name}', '${year}', '${catName} arxividan rasmiy dalolatnoma')" class="btn btn-blue" style="padding: 4px 8px;">
                Ochish PDF
              </button>
            </td>
          </tr>
          <tr>
            <td><b>${reg.name}_${month}_№018_Dalolatnoma.pdf</b></td>
            <td>Kadastr Agentligi viloyat boshqarmasi</td>
            <td>18.09.2026</td>
            <td>1.4 MB</td>
            <td style="text-align: center;">
              <button onclick="openPdfViewer('investigation', 'ARX-018', '${reg.name}', '${year}', 'Xizmat tekshiruvi yakuniy bayonnomasi')" class="btn btn-blue" style="padding: 4px 8px;">
                Ochish PDF
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
};

// --------------------------------------------------------------------------
// 2. RASMIY DEMO PDF GENERATORI (GERB, SHTAMP VA CHOP ETISH)
// --------------------------------------------------------------------------

window.openPdfViewer = function(docType, p1, p2, p3, p4) {
  const paper = document.getElementById('pdfPaperContent');
  const titleEl = document.getElementById('pdfDocTitle');
  if (!paper) return;

  let html = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; border-bottom: 1px solid #ccc; padding-bottom: 8px;">
      <span style="font-size: 12px; font-weight: bold; color: #333;">O'zbekiston Respublikasi Kadastr Agentligi Komplayens Nazorati</span>
      <button onclick="window.print()" class="btn btn-blue">&#128438; Chop etish / PDF Saqlash</button>
    </div>
  `;

  // XAVF GURUHI XULOSASI
  if (docType === 'risk') {
    if (titleEl) titleEl.innerText = `Korrupsion Xavf Baholash Xulosasi — ${p1}`;
    html += `
      <div class="pdf-header">
        <h2>O'ZBEKISTON RESPUBLIKASI KADASTR AGENTLIGI</h2>
        <h2>XODIMNING KORRUPSION XAVF DARAJASINI BAHOLASH XULOSASI</h2>
        <p>Hujjat kodi: ${p1} | Filial: ${p2} | Sana: ${p3}</p>
      </div>
      <p style="text-indent: 30px; margin-bottom: 15px;">
        Korrupsiyaga qarshi ichki nazorat tuzilmasi o'tkazgan baholash natijasida quyidagi xavf omili aniqlangan:
      </p>
      <p style="text-indent: 30px; margin-bottom: 15px;">
        Xavf asosi: <b>${p4}</b>. Mazkur xodim bevosita moddiy javobgarlik va ruxsat beruvchi vakolatga egaligi sababli maxsus nazorat reyestriga kiritildi.
      </p>
      <div class="pdf-stamp">
        <div><p>Komplayens inspektori: ____________</p><p style="font-size: 10px; color: #666;">Elektron raqamli imzo tasdiqlangan</p></div>
        <div class="stamp-box" style="border-color: #be123c; color: #be123c;">KORRUPSION XAVF REYESTRI<br>XULOSA TASDIQLANDI</div>
      </div>
    `;
  } 
  // JINOYAT SUDI HUKMI
  else if (docType === 'court') {
    if (titleEl) titleEl.innerText = `Sud Hukmi Nusxasi — ${p1}`;
    html += `
      <div class="pdf-header">
        <h2>O'ZBEKISTON RESPUBLIKASI NOMI BILAN</h2>
        <h2>JINOYAT ISHLARI BO'YICHA SUD HUKMI (NUSXA)</h2>
        <p>Xodim: ${p1} | Sud: ${p2} | Sana: ${p3}</p>
      </div>
      <p style="text-indent: 30px; margin-bottom: 15px;">
        Sud hay'ati, xodimning jinoiy javobgarligi masalasini ko'rib chiqib quyidagini aniqladi:
      </p>
      <p style="text-indent: 30px; font-weight: bold; margin-bottom: 25px;">
        HUKM: ${p4}. Davlat kadastrlari tizimida 2 yil muddatga mansabdorlik lavozimlarida ishlash huquqidan mahrum etilsin.
      </p>
      <div class="pdf-stamp">
        <div><p>Sudya: ____________</p><p style="font-size: 10px; color: #666;">Sud tizimi orqali tasdiqlangan</p></div>
        <div class="stamp-box" style="border-color: #be123c; color: #be123c;">SUD HUKMI QONUNIY<br>KUCHGA KIRGAN</div>
      </div>
    `;
  } 
  // TEZKOR TADBIR BAYONNOMASI
  else if (docType === 'operation') {
    if (titleEl) titleEl.innerText = `Tezkor Tadbir Bayonnomasi — ${p1}`;
    html += `
      <div class="pdf-header">
        <h2>VAKOLATLI HUQUQNI MUHOFAZA QILUVCHI ORGAN</h2>
        <h2>MAXSUS TEZKOR TADBIR BAYONNOMASI</h2>
        <p>Hujjat: ${p1} | Hudud: ${p2} | Sana: ${p3}</p>
      </div>
      <p style="text-indent: 30px; margin-bottom: 15px;">
        Tezkor tadbir natijasida fuqarodan noqonuniy yer pasporti rasmiylashtirish evaziga mablag' olayotgan xodim jinoyat ustida ushlandi.
      </p>
      <p style="text-indent: 30px; font-weight: bold; margin-bottom: 25px;">
        Ashyoviy dalillar va tafsilot: ${p4}. Barcha dalillar tergov organiga taqdim etildi.
      </p>
      <div class="pdf-stamp">
        <div><p>Tezkor guruh rahbari: __________</p><p>Kadastr komplayens vakili: __________</p></div>
        <div class="stamp-box">TEZKOR HAMKORLIK<br>ASOSIY DALIL MUHRLANDI</div>
      </div>
    `;
  } 
  // ISHDAN BO'SHATISH BUYRUG'I
  else if (docType === 'fired') {
    if (titleEl) titleEl.innerText = `Rasmiy Buyruq Nusxasi — ${p1}`;
    html += `
      <div class="pdf-header">
        <h2>O'ZBEKISTON RESPUBLIKASI KADASTR AGENTLIGI</h2>
        <h2>MEHNAT SHARTNOMASINI BEKOR QILISH TO'G'RISIDA BUYRUQ</h2>
        <p>${p1} | ${p2} | ${p3}</p>
      </div>
      <p style="text-indent: 30px; margin-bottom: 25px;">
        Tafsilot: <b>${p4}</b>. Mehnat Kodeksining 161-moddasi bilan mehnat munosabatlari to'xtatildi.
      </p>
      <div class="pdf-stamp">
        <div><p>Boshqarma boshlig'i: ____________</p></div>
        <div class="stamp-box" style="border-color: #047857; color: #047857;">KADASTR AGENTLIGI<br>BUYRUQ IJRO ETILDI</div>
      </div>
    `;
  } 
  // XIZMAT TEKSHIRUVI XULOSASI (STANDART)
  else {
    if (titleEl) titleEl.innerText = `Xizmat Tekshiruvi Xulosasi — ${p1}`;
    html += `
      <div class="pdf-header">
        <h2>O'ZBEKISTON RESPUBLIKASI KADASTR AGENTLIGI</h2>
        <h2>XIZMAT TEKSHIRUVI XULOSASI VA DALOLATNOMASI</h2>
        <p>Hujjat kodi: ${p1} | Hudud: ${p2} | Sana: ${p3}</p>
      </div>
      <p style="text-indent: 30px; margin-bottom: 15px;">
        Komplayens nazorati tuzilmasi o'tkazgan xizmat tekshiruvi davomida quyidagi holat aniqlangan:
      </p>
      <p style="text-indent: 30px; font-weight: bold; margin-bottom: 25px;">
        ${p4}
      </p>
      <div class="pdf-stamp">
        <div><p>Komplayens nazorati rahbari: ____________</p></div>
        <div class="stamp-box" style="border-color: #047857; color: #047857;">KOMPLAYENS NAZORATI<br>XULOSA TASDIQLANDI</div>
      </div>
    `;
  }

  paper.innerHTML = html;
  openModal('pdfViewerModal');
};

// 3. SAHIFA YUKLANGANDA ARXIVNI DASTLABKI HOLATGA KELTIRISH
window.addEventListener('DOMContentLoaded', () => {
  initArchive();
});
