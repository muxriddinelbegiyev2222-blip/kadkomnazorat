/* ===== 9: DASHBOARD, REYTING ASOSI, MARKAZIY TASHKILOTLAR, FAYL BIRIKTIRISH ===== */
document.head.insertAdjacentHTML("beforeend","<style>.hb{display:grid;grid-template-columns:260px 1fr 44px;gap:10px;align-items:center;padding:6px 8px;border-radius:8px;cursor:pointer;font-size:13px}.hb:hover{background:#eef4ff}.hb b{text-align:right}</style>");
REG["NaN"]=["markaziy apparat"];
const MN=["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"];
const CV=[7,9,8,11,14,11,8,10,12,2,0,0];
let DX={m:null,r:null},RGX=null;
const V9=h=>{document.getElementById("view").innerHTML=h;};
const PNAME=id=>id=="G"?"Respublika Aerogeodeziya markazi":"Davlat Kadastrlari Palatasi (markaziy apparat)";

/* --- Markaziy tashkilotlar --- */
function ost(id){const c=[0,0,0,0,0];let l=0;TK.forEach(t=>{const e=t.st[id];if(e){c[e.s]++;if(late(t,e.s))l++;}});return {c:c,l:l,n:c.reduce((a,b)=>a+b,0)};}
const orgCard=id=>{const o=ost(id);return `<div class="card fold" style="text-align:left" onclick="orgInfo('${id}')"><b>${PNAME(id)}</b><div class="cnt" style="margin:4px 0">👤 1 nafar mas'ul komplayens mutaxassisi</div><div style="font-size:12px">📨 ${o.n} topshiriq · ✅ ${o.c[4]} · 🔄 ${o.c[1]+o.c[2]} · ⏰ ${o.l}</div></div>`;};
const orgRow=id=>{const o=ost(id);return `<div class="hb" style="background:#fff7e6" onclick="orgInfo('${id}')"><span>🏛 ${PNAME(id)}</span><div class="bar"><i style="width:${o.n?Math.round(o.c[4]/o.n*100):0}%;background:#16a34a"></i></div><b>${o.n}</b></div>`;};
function orgInfo(id){
 closeForm();const l=TK.filter(t=>t.st[id]),d=document.createElement("div");d.id="mdl";
 d.innerHTML=`<div class="mbox" style="width:660px"><b style="font-size:16px">${PNAME(id)}</b><div class="cnt">👤 1 nafar mas'ul komplayens mutaxassisi</div><table><tr><th>Raqam</th><th>Topshiriq</th><th>Muddat</th><th>Holat</th></tr>${l.map(t=>`<tr><td>${t.id}</td><td>${t.t}</td><td>${fd8(t.due)}</td><td><span class="pill" style="background:${SCL[t.st[id].s]}">${STN[t.st[id].s]}</span></td></tr>`).join("")}</table><div style="margin-top:12px"><button class="btn" onclick="closeForm()">Yopish</button></div></div>`;
 document.body.appendChild(d);
}
const mkS=s=>{const e={s:s,hist:[{t:"01.10.2026 09:00",a:"Topshiriq yuborildi"}]};if(s>=2)e.ans={text:"Topshiriq ijro etildi, ma'lumotlar kiritildi.",cases:[],files:[],dt:"—",imp:true};if(s==3)e.rev={note:"Dalil hujjatlarini to'liq biriktiring.",dt:"—"};return e;};
let chg=false;
TK.forEach((t,i)=>{if(t.x8||t.u)return;["PM","G"].forEach((id,k)=>{if(!t.st[id])t.st[id]=mkS([4,2,1,4,0,3,4][(i*2+k)%7]);});t.x8=true;chg=true;});
if(chg)saveTK();

/* --- Oylik tezkor jinoyatlar (hujjatgacha) --- */
const CR=[];
CV.forEach((n,m)=>{for(let k=0;k<n;k++){
 const r=(m*5+k*3)%14,c=mk(9100+m*101+k*7,r),d=c.p.split("").map(Number);
 c.m=m;c.org=ORGS[d[2]%4];c.sum=SUMS[d[4]%6];c.dt=String((d[5]*3+k)%28+1).padStart(2,"0")+"."+String(m+1).padStart(2,"0")+".2026";c.no="TJ-"+(m+1)+"-"+(k+1);c.c="A";c.v="Pora olish holati ("+c.sum+")";
 c.txt=`${c.org} tomonidan ${c.dt} sanada ${c.reg}, ${c.fil} filialida tezkor tadbir o'tkazildi. <b>${c.f}</b> (JSHSHIR: ${c.p}), <i>${c.l}</i>, jinoyat ustida qo'lga olindi. Ashyoviy dalil: <b>${c.sum}</b>. Bayonnoma № ${c.no}.`;
 CR.push(c);}});

function lineSvg(v,lab,fn){
 const W=900,H=270,px=50,py=34,mx=Math.max(...v,1),n=v.length,sx=(W-2*px)/Math.max(n-1,1),X=i=>px+i*sx,Y=a=>H-py-(a/mx)*(H-2*py-20);
 let s=`<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto"><line x1="${px-20}" y1="${H-py}" x2="${W-px+20}" y2="${H-py}" stroke="#cbd5e1"/>`;
 for(let i=1;i<n;i++){const c=v[i]==v[i-1]?"#94a3b8":v[i]>v[i-1]?"#ef4444":"#16a34a";s+=`<line x1="${X(i-1)}" y1="${Y(v[i-1])}" x2="${X(i)}" y2="${Y(v[i])}" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`;}
 v.forEach((a,i)=>{const p=i?v[i-1]:null,c=p===null||a==p?"#3b82f6":a>p?"#ef4444":"#16a34a",pc=p===null?"":p==0?"—":(a>=p?"+":"")+Math.round((a-p)/p*100)+"%";
  s+=`<g style="cursor:pointer" onclick="${fn}(${i})"><circle cx="${X(i)}" cy="${Y(a)}" r="10" fill="#fff" stroke="${c}" stroke-width="4"/><text x="${X(i)}" y="${Y(a)-17}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}">${pc}</text><text x="${X(i)}" y="${Y(a)+27}" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">${a} ta</text><text x="${X(i)}" y="${H-10}" text-anchor="middle" font-size="12" fill="#64748b">${lab[i]}</text></g>`;});
 return s+"</svg>";
}
function donut(p,fn,ctr){
 const t=p.reduce((a,x)=>a+x[1],0)||1;let o=0,s='<svg viewBox="0 0 42 42" style="width:124px;height:124px;flex:none"><circle cx="21" cy="21" r="15.9155" fill="none" stroke="#e5e9f2" stroke-width="6"/>';
 p.forEach(x=>{const l=x[1]/t*100;if(l>0)s+=`<circle cx="21" cy="21" r="15.9155" fill="none" stroke="${x[2]}" stroke-width="6" stroke-dasharray="${l} ${100-l}" stroke-dashoffset="${25-o}"/>`;o+=l;});
 s+=`<text x="21" y="23" text-anchor="middle" font-size="7" font-weight="800" fill="#1b2a41">${ctr}</text></svg>`;
 return `<div style="display:flex;align-items:center;gap:14px;cursor:pointer;margin:6px 0" onclick="${fn}">${s}<div>${p.map(x=>`<div style="font-size:12px;margin:2px 0"><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:${x[2]}"></span> ${x[0]}: <b>${x[1]}</b></div>`).join("")}</div></div>`;
}
function dxm(i){DX={m:i,r:null};render();}
function goR(r){go(11);RGX=r;render();}

/* --- Yangi Dashboard --- */
function dashNew(){
 if(DX.m!==null)return dxDet();
 const d=DATA[period],xt=d.A+d.B+d.D,hm=Math.round(d.ch*0.6276),tc=[0,0,0,0,0];
 TK.forEach(t=>Object.values(t.st).forEach(e=>tc[e.s]++));
 const tn=tc.reduce((a,b)=>a+b,0),al=alerts(),ur=STR.filter(e=>e.s==2).length,kh=EV.filter(e=>e.kh).length;
 const K=[["Xizmat tekshiruvlari",d.ch+" ta",`HMMQO: ${hm} · Ichki nazorat: ${d.ch-hm}`,"#1d4ed8","openExp(0)"],["Sudlangan xodimlar",d.su+" nafar","Reyestr va hukm nusxalari","#7c3aed","go(7)"],["Tezkor tadbirlar",d.te+" ta","Komplayens bilan: "+kh,"#ea580c","go(6)"],["Xavf guruhlari",xt+" nafar",`<span class="pill" style="background:#dc2626">A ${d.A}</span><span class="pill" style="background:#eab308">B ${d.B}</span><span class="pill" style="background:#16a34a">D ${d.D}</span>`,"#dc2626","go(4)"],["Komplayens bo'shatgan",d.bo+" nafar","Buyruqlar va asoslar","#0f766e","go(5)"],["Manfaatlar to'qnashuvi (STIR)",STR.length+" ta","Bartaraf etilmagan: "+ur,"#0891b2","go(8)"],["Topshiriqlar markazi",tn+" ta",`Tekshiruv kutmoqda: ${tc[2]} · Yopilgan: ${tc[4]}`,"#2563eb","go(16)"],["Bildirishnomalar",al.length+" ta","Zudlik bilan: "+al.filter(x=>x.s==3).length,"#b91c1c","go(12)"]];
 const cm=Math.min(new Date().getMonth(),11),v=CV.slice(0,cm+1),lb=MN.slice(0,cm+1),pk=v.indexOf(Math.max(...v)),c0=v[0]?Math.round((v[cm]-v[0])/v[0]*100):0;
 const mxk=Math.max(...KC[0]),sc5=score().slice(0,5);
 V9(`<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px">${K.map(k=>`<div class="card kpi" style="border-top-color:${k[3]}" onclick="${k[4]}"><div class="t">${k[0]}</div><div class="n">${k[1]}</div><div class="s">${k[2]}</div></div>`).join("")}</div>
 <div style="display:grid;grid-template-columns:2fr 1fr;gap:14px;margin-top:16px">
  <div class="card"><div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px"><b>Tezkor jinoyatlar oylik dinamikasi (yanvar → ${MN[cm].toLowerCase()})</b><span class="cnt">Eng yuqori: ${MN[pk]} (${v[pk]}) · Yil boshidan: ${v[0]} → ${v[cm]} (${c0>0?"+":""}${c0}%)</span></div>${lineSvg(v,lb,"dxm")}<div class="cnt">💡 Oyni bossangiz, hududlar va bayonnomalargacha kirasiz.</div></div>
  <div class="card"><b>Topshiriqlar holati</b>${donut(STN.map((n,i)=>[n,tc[i],SCL[i]]),"go(16)",tn)}<b>Xavf toifalari</b>${donut([["A toifa",d.A,"#dc2626"],["B toifa",d.B,"#eab308"],["D toifa",d.D,"#16a34a"]],"go(4)",xt)}</div>
 </div>
 <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:16px">
  <div class="card"><b>Eng xavfli 5 hudud</b>${sc5.map(x=>`<div class="hb" style="grid-template-columns:1fr 80px 30px" onclick="goR(${x.r})"><span>${REG[x.r][0]}</span><div class="bar"><i style="width:${x.s}%;background:${x.s>=70?"#dc2626":x.s>=40?"#eab308":"#16a34a"}"></i></div><b>${x.s}</b></div>`).join("")}</div>
  <div class="card"><b>Oxirgi bildirishnomalar</b>${al.slice(0,6).map(x=>`<div class="rec" onclick="go(${x.pg})"><span><span class="pill" style="background:${x.s==3?"#dc2626":"#eab308"}">${x.s==3?"Zudlik":"Diqqat"}</span> ${x.t}</span></div>`).join("")||'<div class="cnt">Ogohlantirish yo\'q ✅</div>'}</div>
  <div class="card"><b>Tezkor tadbirlar</b>${donut([["Komplayens bilan",kh,"#16a34a"],["Mustaqil",EV.length-kh,"#6b7280"]],"go(6)",EV.length)}<b>Manfaatlar to'qnashuvi</b>${donut(STAT.map((n,i)=>[n,SS.reduce((a,x)=>a+x[i],0),SCOL[i]]),"go(8)",STR.length)}</div>
 </div>
 <div class="card" style="margin-top:16px"><b>Markaziy tashkilotlar (topshiriqlar ijrosi) va hududlar (xizmat tekshiruvlari soni)</b><div style="margin-top:8px">${orgRow("PM")}${orgRow("G")}${REG.map((g,i)=>`<div class="hb" onclick="openExp(0,${i})"><span>${g[0]}</span><div class="bar"><i style="width:${KC[0][i]/mxk*100}%;background:#3b82f6"></i></div><b>${KC[0][i]}</b></div>`).join("")}</div></div>`);
}
function dxDet(){
 const m=DX.m,l=CR.filter(c=>c.m==m),pv=m?CV[m-1]:null;
 const cr=`<div style="margin-bottom:14px;font-size:14px"><a style="cursor:pointer;color:#1d4ed8" onclick="DX={m:null,r:null};render()">📊 Dashboard</a> &gt; <a style="cursor:pointer;color:#1d4ed8" onclick="DX.r=null;render()">${MN[m]} oyi</a>${DX.r!==null?" &gt; <a style='color:#1d4ed8'>"+REG[DX.r][0]+"</a>":""}</div>`;
 if(DX.r===null){
  const rc=REG.map((g,i)=>[i,l.filter(c=>c.r==i).length]).filter(x=>x[1]).sort((a,b)=>b[1]-a[1]);
  const df=pv?` · o'tgan oyga nisbatan ${l.length>=pv?"+":""}${Math.round((l.length-pv)/pv*100)}%`:"";
  V9(cr+`<div class="card"><b style="font-size:17px">${MN[m]} oyi: ${l.length} ta tezkor jinoyat</b><span class="cnt">${df}</span></div><div class="card" style="margin-top:14px"><b>Hududlar kesimida</b>${rc.map(x=>`<div class="hb" onclick="DX.r=${x[0]};render()"><span>${REG[x[0]][0]}</span><div class="bar"><i style="width:${x[1]/rc[0][1]*100}%;background:#ef4444"></i></div><b>${x[1]}</b></div>`).join("")||'<div class="cnt">Bu oyda ma\'lumot yo\'q</div>'}</div>`);
 }else{
  const c2=l.filter(c=>c.r==DX.r);
  V9(cr+`<div class="card"><b style="font-size:17px">${REG[DX.r][0]} — ${MN[m]} oyi: ${c2.length} ta</b><table><tr><th>Bayonnoma</th><th>Sana</th><th>F.I.SH</th><th>JSHSHIR</th><th>Lavozimi</th><th>Filial</th><th>Organ</th><th>Ashyoviy dalil</th><th></th></tr>${c2.map(c=>`<tr><td>${c.no}</td><td>${c.dt}</td><td>${c.f}</td><td>${c.p}</td><td>${c.l}</td><td>${c.fil}</td><td>${c.org}</td><td>${c.sum}</td><td><button class="btn" onclick="showDoc('tad',CR[${CR.indexOf(c)}])">Bayonnoma PDF</button></td></tr>`).join("")}</table></div>`);
 }
}

/* --- Xavf reytingi asosi --- */
function ratingDet(r){
 const rk=RISK.filter(e=>e.r==r),cu=COURT.filter(e=>e.r==r),fr=fl(r),st=STR.filter(e=>e.r==r),ev=EV.filter(e=>e.r==r),lt=TD.late[r*2]+TD.late[r*2+1],n=c=>rk.filter(e=>e.c==c).length;
 const R=[["A toifa xodimlar",n("A"),3,4],["B toifa xodimlar",n("B"),2,4],["D toifa xodimlar",n("D"),1,4],["Sudlangan xodimlar",cu.length,3,7],["Komplayens bo'shatgan xodimlar",fr.length,2,5],["STIR — bartaraf etilmagan",st.filter(e=>e.s==2).length,3,8],["STIR — jarayonda",st.filter(e=>e.s==1).length,1,8],["Tezkor tadbirlar",ev.length,1,6],["Kechikkan topshiriqlar",lt,3,1]];
 const raw=R.reduce((a,x)=>a+x[1]*x[2],0),sc=score().find(x=>x.r==r).s;
 const tb=(h,hd,rows)=>rows.length?`<div class="card" style="margin-top:14px"><b>${h}</b><table><tr>${hd.map(x=>`<th>${x}</th>`).join("")}</tr>${rows.join("")}</table></div>`:"";
 const TKL=[];TK.forEach(t=>["A"+r,"P"+r].forEach(id=>{const e=t.st[id];if(e&&late(t,e.s))TKL.push(`<tr><td>${t.id}</td><td>${t.t}</td><td>${rn(id)}</td><td>${fd8(t.due)}</td></tr>`);}));
 V9(`<div style="margin-bottom:14px;font-size:14px"><a style="cursor:pointer;color:#1d4ed8" onclick="RGX=null;render()">📊 Hududlar xavf reytingi</a> &gt; ${REG[r][0]}</div>
 <div class="card"><div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:18px">${REG[r][0]}</b><span style="font-size:30px;font-weight:800;color:${sc>=70?"#dc2626":sc>=40?"#eab308":"#16a34a"}">${sc}</span></div>
 <div class="cnt" style="margin:6px 0 10px">Reyting asosi: har bir ko'rsatkich soni o'z koeffitsiyentiga ko'paytiriladi, jami ball (${raw}) hududlar ichidagi eng yuqori ball bilan solishtirilib 0–100 ga keltiriladi. Qatorni bossangiz, tegishli bo'limga o'tasiz.</div>
 <table><tr><th>Ko'rsatkich</th><th>Soni</th><th>Koeffitsiyent</th><th>Ball</th></tr>${R.map(x=>`<tr style="cursor:pointer" onclick="go(${x[3]})"><td>${x[0]}</td><td>${x[1]}</td><td>×${x[2]}</td><td><b>${x[1]*x[2]}</b></td></tr>`).join("")}<tr style="font-weight:700;background:#eef3fb"><td>JAMI</td><td></td><td></td><td>${raw}</td></tr></table></div>`
 +tb("Xavf guruhidagi xodimlar (asos)",["F.I.SH","JSHSHIR","Toifa","Sabab"],rk.map(m=>`<tr><td>${m.f}</td><td>${m.p}</td><td>${m.c}</td><td>${m.v}</td></tr>`))
 +tb("Sudlangan xodimlar (asos)",["F.I.SH","JSHSHIR","JK moddasi","Hukm sanasi"],cu.map(m=>`<tr><td>${m.f}</td><td>${m.p}</td><td>${m.jk}</td><td>${m.dt}</td></tr>`))
 +tb("Bo'shatilgan xodimlar (asos)",["F.I.SH","JSHSHIR","Sabab","Buyruq"],fr.map(m=>`<tr><td>${m.f}</td><td>${m.p}</td><td>${m.v}</td><td>${m.no} / ${m.dt}</td></tr>`))
 +tb("Manfaatlar to'qnashuvi (asos)",["F.I.SH","MChJ","Holat"],st.map(m=>`<tr><td>${m.f}</td><td>${m.mch}</td><td>${STAT[m.s]}</td></tr>`))
 +tb("Tezkor tadbirlar (asos)",["Organ","Ashyoviy dalil","Filial"],ev.map(m=>`<tr><td>${m.org}</td><td>${m.sum}</td><td>${m.fil}</td></tr>`))
 +tb("Muddati o'tgan topshiriqlar (asos)",["Raqam","Topshiriq","Qabul qiluvchi","Muddat"],TKL));
}
const _rt=rating;
rating=function(){
 if(RGX!==null)return ratingDet(RGX);
 _rt();
 const s=score();
 document.querySelectorAll("#view table tr").forEach((tr,i)=>{if(i&&s[i-1]){tr.style.cursor="pointer";tr.onclick=()=>{RGX=s[i-1].r;render();};}});
};

/* --- Tezkor tadbirlar: hududlar kesimida jadval --- */
const _op=ops;
ops=function(){
 _op();
 if(TX!==null)return;
 const rows=REG.map((g,i)=>{const l=EV.filter(e=>e.r==i),k=l.filter(e=>e.kh).length;return `<tr style="cursor:pointer" onclick="TX=${i};render()"><td>${i+1}</td><td>${g[0]}</td><td><b>${l.length}</b></td><td>${k}</td><td>${l.length-k}</td>${ORGS.map(o=>`<td>${l.filter(e=>e.org==o).length}</td>`).join("")}</tr>`;}).join("");
 const kh=EV.filter(e=>e.kh).length,tot=`<tr style="font-weight:700;background:#eef3fb"><td></td><td>JAMI</td><td>${EV.length}</td><td>${kh}</td><td>${EV.length-kh}</td>${ORGS.map(o=>`<td>${EV.filter(e=>e.org==o).length}</td>`).join("")}</tr>`;
 const all=EV.map((m,i)=>`<tr><td>${m.no}</td><td>${m.reg}</td><td>${m.org}</td><td>${m.kh?"✔ Hamkorlikda":"Mustaqil"}</td><td>${m.sum}</td><td>${m.fil} filiali — ${m.l}</td><td><button class="btn" onclick="showDoc('tad',EV[${i}])">Bayonnoma PDF</button></td></tr>`).join("");
 document.getElementById("view").insertAdjacentHTML("beforeend",`<div class="card" style="margin-top:16px"><b>Hududlar kesimida jadval</b><table><tr><th>#</th><th>Hudud</th><th>Jami</th><th>Komplayens bilan</th><th>Mustaqil</th>${ORGS.map(o=>`<th>${o}</th>`).join("")}</tr>${tot}${rows}</table></div>
 <div class="card" style="margin-top:16px"><b>Barcha tadbirlar ro'yxati (${EV.length})</b><table><tr><th>Bayonnoma</th><th>Hudud</th><th>Organ</th><th>Hamkorlik</th><th>Ashyoviy dalil</th><th>Filial va lavozim</th><th></th></tr>${all}</table></div>`);
};

/* --- Markaziy tashkilotlar hududlar tepasida --- */
const _mx2=matrix;
matrix=function(){_mx2();const g=document.querySelector("#view .gx");if(g)g.insertAdjacentHTML("afterbegin",orgCard("PM")+orgCard("G"));};
const _rp=resPg;
resPg=function(){_rp();if(TKD!==null)return;const v=document.getElementById("view");if(v.children[1])v.children[1].insertAdjacentHTML("afterend",`<div class="gx" style="grid-template-columns:repeat(2,1fr);margin-bottom:16px">${orgCard("PM")+orgCard("G")}</div>`);};

/* --- Rejim tanlash (markaziy tashkilotlar bilan) --- */
modeForm=function(){
 mdl("🔁 Ish rejimini tanlang",`<label>Rejim<select id="m1"><option value="0">Respublika rejimi — Komplayens nazorat bo'limi</option><option value="3">Davlat Kadastrlari Palatasi — markaziy apparat</option><option value="2">Respublika Aerogeodeziya markazi</option><option value="1">Hudud rejimi — viloyat boshqarmasi</option></select></label><label>Viloyat (hudud rejimi uchun)<select id="m2">${op(REG.map(g=>g[0]))}</select></label><label>Tashkilot (hudud rejimi uchun)<select id="m3"><option value="0">Kadastr Agentligi viloyat boshqarmasi</option><option value="1">Davlat Kadastrlari Palatasi viloyat boshqarmasi</option></select></label>`,"setMode");
 bt("Tanlash");
};
setMode=function(){const m=+gv("m1"),v=gv("m2"),o=gv("m3");HM=m==0?null:m==2?"G":m==3?"PM":(o=="1"?"P":"A")+v;closeForm();applyMode();};

/* --- Topshiriq yuborishda fayl biriktirish --- */
newTask=function(){
 if(HM)return;
 mdl("+ Yangi topshiriq",`<label>Topshiriq nomi<input id="n1"></label><label>Mazmuni<input id="n2"></label><label>Asos hujjat<input id="n3" placeholder="masalan: Agentlik buyrug'i № 120"></label><label>Bajarish muddati<input id="n4" type="date"></label><label>Muhimlik<select id="n5"><option>Yuqori</option><option selected>O'rta</option><option>Past</option></select></label><label>Qabul qiluvchilar<select id="n6"><option value="0">Barcha: 14 viloyat (Agentlik + Palata) va 2 markaziy tashkilot</option><option value="1">Faqat Kadastr Agentligi boshqarmalari (14)</option><option value="2">Faqat Davlat Kadastrlari Palatasi viloyat boshqarmalari (14)</option><option value="3">Respublika Aerogeodeziya markazi</option><option value="4">Davlat Kadastrlari Palatasi — markaziy apparat</option><option value="5">Tanlangan viloyat (ikkala tashkilot)</option></select></label><label>Viloyat (oxirgi variant uchun)<select id="n7">${op(REG.map(g=>g[0]))}</select></label><label>📎 Fayl biriktirish (asos hujjat, ilova)<input id="n8" type="file" multiple></label>`,"saveNewTask");
 bt("Yuborish");
};
saveNewTask=function(){
 if(ro())return;
 if(!gv("n1")||!gv("n4"))return toast("Nom va muddatni kiriting");
 const k=+gv("n6"),v=+gv("n7"),ids=k==0?ALL.concat(["PM","G"]):k==1?ALL.slice(0,14):k==2?ALL.slice(14):k==3?["G"]:k==4?["PM"]:["A"+v,"P"+v];
 const T={id:"T-2026-"+String(TK.length+1).padStart(3,"0"),t:gv("n1"),desc:gv("n2")||"—",base:gv("n3")||"—",due:gv("n4"),pr:gv("n5"),from:"Komplayens nazorat bo'limi",u:true,x8:true,files:[],st:Object.fromEntries(ids.map(id=>[id,{s:0,hist:[{t:now(),a:"Topshiriq yuborildi"}]}]))};
 const fs=Array.from(document.getElementById("n8").files);
 Promise.all(fs.map(f=>new Promise(ok=>{if(f.size>400000){ok({n:f.name,sz:f.size});return;}const r=new FileReader();r.onload=()=>ok({n:f.name,sz:f.size,d:r.result});r.readAsDataURL(f);}))).then(files=>{
  T.files=files;TK.push(T);saveTK("Yangi topshiriq berdi: "+T.t);closeForm();
  toast("Topshiriq "+ids.length+" ta qabul qiluvchiga yuborildi"+(files.length?", "+files.length+" ta fayl biriktirildi":"")+" ✅");go(16);
 });
};
const attH=t=>t.files&&t.files.length?`<div style="margin-top:8px;font-size:13px">📎 ${t.files.map(f=>f.d?`<a href="${f.d}" download="${f.n}" style="color:#1d4ed8">${f.n}</a>`:f.n).join(" · ")}</div>`:"";
const _hp=hudPg;
hudPg=function(){_hp();document.querySelectorAll("#view .card b").forEach(b=>{const m=b.textContent.match(/^T-2026-\d{3}/);if(m){const t=TK.find(x=>x.id==m[0]);if(t)b.closest(".card").insertAdjacentHTML("beforeend",attH(t));}});};
const _rd=resDet;
resDet=function(){_rd();const t=TK.find(x=>x.id==TKD),c=document.querySelector("#view .card");if(t&&c)c.insertAdjacentHTML("beforeend",attH(t));};

/* --- Ulash --- */
const _g9=go;
go=function(i){RGX=null;DX={m:null,r:null};_g9(i);};
const _r9=render;
render=function(){_r9();if(!EX&&page==0)dashNew();};
render();
