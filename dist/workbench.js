/* VoltLab Workbench + BenchTwin & Learn-Arduino Complete Suite:
   - Dual Themes (BenchTwin Pro Dark & Learn-Arduino Warm Parchment Light)
   - Left Vertical Icon Navigation Rail & Floating Drawers (Lessons, Board Components, Settings, 21 Languages)
   - Safety Mode & Realistic Overvoltage/Burnout Hazards
   - Live Floating SVG Schematic Overlay & 3D Board Callout Hotspots
   - Interactive Component Inspector Dialog (LED color swatches, timing sliders synced with delay(), resistor presets, zoom-to-part)
   - Inline Editable Code Parameters & Live Executing Line Indicator
   - Digital Multimeter (DMM) & 8-Channel Logic Analyzer / Pin Timeline
   - Context-Aware 3D Enclosure CAD Designer with ASCII STL Export
   - 2WD Robotics & Autonomous Competition Arena Simulator (Arduino, ESP32, Pico, LEGO SPIKE, VEX, FTC/FRC)
*/

window.appSettings={
  theme:'light',
  callouts:true,
  currentFlow:true,
  grid:true,
  autoRotate:false,
  sound:true,
  reducedMotion:false,
  safetyMode:true,
  schematicOverlay:true,
  quadView:false,
  lang:'HE'
};
try{
  const savedSet=JSON.parse(localStorage.getItem('voltlab-settings-v2')||'null');
  if(savedSet&&typeof savedSet==='object')Object.assign(window.appSettings,savedSet);
}catch{}
function saveSettings(){
  try{localStorage.setItem('voltlab-settings-v2',JSON.stringify(window.appSettings))}catch{}
  applySettings();
}
function applySettings(){
  document.body.dataset.theme=window.appSettings.theme;
  document.body.classList.toggle('light-parchment',window.appSettings.theme==='light');
  document.body.classList.toggle('reduced-motion',!!window.appSettings.reducedMotion);
  window.showGrid=window.appSettings.grid;
  if(window.soundState)window.soundState.enabled=!!window.appSettings.sound;
  if($('gridtoggle'))$('gridtoggle').checked=!!window.appSettings.grid;
  const schemEl=$('liveschematic');
  if(schemEl)schemEl.hidden=!window.appSettings.schematicOverlay;
  const calloutEl=$('stagecallouts');
  if(calloutEl)calloutEl.hidden=!window.appSettings.callouts;
  const safetyBtn=$('safetytoggle');
  if(safetyBtn){
    safetyBtn.classList.toggle('active',window.appSettings.safetyMode);
    safetyBtn.innerHTML=window.appSettings.safetyMode?'🛡️ מצב בטיחות: פעיל':'🔥 מצב מציאותי (ללא הגנה)';
  }
  const themeBtn=$('themetoggle');
  if(themeBtn){
    themeBtn.textContent=window.appSettings.theme==='light'?'🌙 ערכת נושא: כהה (BenchTwin)':'☀️ ערכת נושא: בהירה (Learn Arduino)';
  }
  window.visualRevision=(window.visualRevision||0)+1;
}
window.applySettings=applySettings;

// 1. Workspace Workflow Bar (Build, Wire, Code, Measure, Enclosure CAD, Robotics, Learn)
const workspaceBar=document.createElement('section');
workspaceBar.className='workspacebar';
workspaceBar.innerHTML=`
  <div class="workflowtabs">
    <button data-workspace="build" class="active">◈ בנייה</button>
    <button data-workspace="wire">⌁ חיווט</button>
    <button data-workspace="code">{ } קוד</button>
    <button data-workspace="measure">∿ מדידה ומולטימטר</button>
    <button data-workspace="cad">📦 מארז CAD ו־STL</button>
    <button data-workspace="robotics">🤖 זירת רובוטיקה</button>
    <button data-workspace="learn">▤ למידה (16)</button>
  </div>
  <div class="historycontrols">
    <button id="safetytoggle" class="active" title="כאשר כבוי, זרם יתר או קצר יגרמו לעשן ושריפת רכיב בסימולציה">🛡️ מצב בטיחות: פעיל</button>
    <button id="themetoggle" title="החלפה בין עיצוב כהה (BenchTwin) לעיצוב שרטוט בהיר (Learn Arduino)">☀️ ערכת נושא: בהירה (Learn Arduino)</button>
    <button id="undoaction" title="ביטול פעולה · Ctrl+Z">↶ ביטול</button>
    <button id="redoaction" title="ביצוע חוזר · Ctrl+Y">↷ שחזור</button>
    <button id="duplicatepart">⧉ שכפול</button>
    <button id="circuitcheck">✓ בדיקת חיווט</button>
    <button id="projectexports">⬇ ייצוא ורשימת קניות</button>
  </div>`;
document.querySelector('.projectbar').after(workspaceBar);
document.body.dataset.workspace='build';

// 2. Left Vertical Icon Navigation Rail & Floating Drawers (Learn-Arduino style)
const navRail=document.createElement('nav');
navRail.className='siderail';
navRail.setAttribute('aria-label','ניווט ראשי מהיר');
navRail.innerHTML=`
  <button id="railhome" title="בית / מעבדה חופשית"><span>🏠</span><small>בית</small></button>
  <button id="raillessons" title="שיעורים (16 יחידות)"><span>📖</span><small>שיעורים</small></button>
  <button id="railparts" title="רכיבי הלוח וחקירה"><span>🎛️</span><small>רכיבים</small></button>
  <button id="railrun" title="הרצת הסימולציה / הקוד"><span>▶︎</span><small>סימולטור</small></button>
  <button id="railcad" title="תכנון מארז תלת־ממדי STL"><span>📦</span><small>מארז 3D</small></button>
  <button id="railrobot" title="סימולטור רובוטיקה ומגרש"><span>🤖</span><small>רובוטיקה</small></button>
  <button id="railsettings" title="הגדרות תצוגה וסימולציה"><span>⚙️</span><small>הגדרות</small></button>
  <button id="raillang" title="שפה (21 שפות)"><span class="langbadge" id="langbadge">HE</span><small>שפה</small></button>`;
document.body.append(navRail);

const sideDrawer=document.createElement('aside');
sideDrawer.className='floatingdrawer';
sideDrawer.id='floatingdrawer';
sideDrawer.hidden=true;
document.body.append(sideDrawer);

// 3. Header Progress & Live Clock Card (Learn-Arduino style)
const progressWidget=document.createElement('div');
progressWidget.className='headerprogress';
progressWidget.setAttribute('role','region');
progressWidget.setAttribute('aria-label','התקדמות ושעון');
progressWidget.innerHTML=`
  <div class="clockcol"><span id="liveclock"></span><small id="liveunit">יסודות האלקטרוניקה</small></div>
  <div class="progcol">
    <div class="progtop"><b id="progcount">0/16</b><span>📖 מסלול למידה</span></div>
    <div class="progbar"><i id="progfill" style="width:0%"></i></div>
  </div>`;
document.querySelector('header .headerend').prepend(progressWidget);

function updateHeaderProgress(){
  if(!$('progcount'))return;
  const st=window.courseState||{completed:[],current:0};
  const total=(window.lessons||[]).length||16;
  const done=st.completed.length;
  $('progcount').textContent=`${done}/${total}`;
  $('progfill').style.width=`${Math.round(done/total*100)}%`;
  const curLesson=(window.lessons||[])[st.current];
  if(curLesson&&$('liveunit'))$('liveunit').textContent=curLesson.topic+' · '+curLesson.title;
}
window.updateHeaderProgress=updateHeaderProgress;
setInterval(()=>{
  if($('liveclock')){
    const now=new Date();
    $('liveclock').textContent=now.toLocaleTimeString('he-IL',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
  }
},1000);
setTimeout(updateHeaderProgress,100);

// 4. Camera & Bottom-Center 3D Toolbar (Learn-Arduino & BenchTwin Blender views)
const anglebar=document.createElement('div');
anglebar.className='anglebar';
anglebar.setAttribute('role','toolbar');
anglebar.setAttribute('aria-label','תצוגה תלת-ממדית');
anglebar.innerHTML=`
  <button id="rotleft" title="סיבוב שמאלה (Q)">↺</button>
  <button id="rotright" title="סיבוב ימינה (E)">↻</button>
  <button data-camera="iso" class="active">פרספקטיבה</button>
  <button data-camera="top">עליון</button>
  <button data-camera="front">קדמי</button>
  <button data-camera="right">צד</button>
  <button id="quadtoggle" title="תצוגת 4 מבטים מפוצלת בסגנון Blender / BenchTwin">⊞ 4 מבטים</button>
  <button id="flowtoggle" class="active" title="הצגת זרימת הזרם ותוויות HIGH/LOW">⚡ זרימת זרם</button>
  <button id="schemoverlaytoggle" class="active" title="הצגת סכמה חיה צפה">⌁ סכמה צפה</button>
  <button id="callouttoggle" class="active" title="תוויות הסבר על הרכיבים">🏷️ תוויות</button>
  <label><input type="checkbox" id="gridtoggle" checked> רשת</label>
  <button id="fitview" title="איפוס והתאמה למסך">⌖ איפוס</button>`;
$('canvas').parentElement.append(anglebar);

$('rotleft').onclick=()=>{angle-=.35;window.visualRevision++};
$('rotright').onclick=()=>{angle+=.35;window.visualRevision++};
document.querySelectorAll('[data-camera]').forEach(b=>b.onclick=()=>{
  const key=b.dataset.camera;
  angle=key==='right'?Math.PI/2:key==='iso'?-.55:0;
  tilt=key==='top'?0.01:key==='iso'?.72:1.5;
  window.visualRevision++;
  document.querySelectorAll('[data-camera]').forEach(e=>e.classList.toggle('active',e===b));
});
$('gridtoggle').onchange=e=>{window.appSettings.grid=e.target.checked;saveSettings()};
$('fitview').onclick=()=>{
  zoom=Math.max(.4,Math.min(1.3,7/Math.max(7,...nodes.map(n=>Math.abs(n.x)*2+2),...nodes.map(n=>Math.abs(n.z)*2+2))));
  angle=-.55;tilt=.72;window.visualRevision++;
};
$('flowtoggle').onclick=()=>{
  window.appSettings.currentFlow=!window.appSettings.currentFlow;
  $('flowtoggle').classList.toggle('active',window.appSettings.currentFlow);
  saveSettings();
};
$('schemoverlaytoggle').onclick=()=>{
  window.appSettings.schematicOverlay=!window.appSettings.schematicOverlay;
  $('schemoverlaytoggle').classList.toggle('active',window.appSettings.schematicOverlay);
  saveSettings();
};
$('callouttoggle').onclick=()=>{
  window.appSettings.callouts=!window.appSettings.callouts;
  $('callouttoggle').classList.toggle('active',window.appSettings.callouts);
  saveSettings();
};
$('quadtoggle').onclick=()=>{
  window.appSettings.quadView=!window.appSettings.quadView;
  $('quadtoggle').classList.toggle('active',window.appSettings.quadView);
  window.visualRevision++;
  toast(window.appSettings.quadView?'תצוגת 4 מבטים (Top / Front / Right / 3D) הופעלה':'תצוגה רגילה');
};

// Keyboard WASD / QE camera controls & shortcuts
document.addEventListener('keydown',e=>{
  if(e.target.matches('input,textarea,select,[contenteditable]'))return;
  const k=e.key.toLowerCase();
  if((e.ctrlKey||e.metaKey)&&k==='z'){e.preventDefault();restoreAction(e.shiftKey?1:-1);return}
  if((e.ctrlKey||e.metaKey)&&k==='y'){e.preventDefault();restoreAction(1);return}
  if((e.ctrlKey||e.metaKey)&&k==='s'){e.preventDefault();$('save').click();return}
  if(k==='q'){angle-=.18;window.visualRevision++}
  else if(k==='e'){angle+=.18;window.visualRevision++}
  else if(k==='w'){tilt=Math.max(.05,tilt-.1);window.visualRevision++}
  else if(k==='s'){tilt=Math.min(1.45,tilt+.1);window.visualRevision++}
  else if(k==='a'){angle-=.12;window.visualRevision++}
  else if(k==='d'){angle+=.12;window.visualRevision++}
});

// Auto-rotate idle loop
setInterval(()=>{
  if(window.appSettings.autoRotate&&!drag&&!document.hidden&&mode==='3d'){
    angle+=.012;
    window.visualRevision++;
  }
},50);

// 5. Floating Live SVG Schematic Overlay (Learn-Arduino style)
const liveSchematic=document.createElement('div');
liveSchematic.className='liveschematic';
liveSchematic.id='liveschematic';
liveSchematic.setAttribute('role','region');
liveSchematic.setAttribute('aria-label','סכמה של המעגל');
liveSchematic.innerHTML=`
  <div class="schemhead">
    <span>⌁ סכמה חיה של המעגל</span>
    <button id="closeschem" title="הסתרת הסכמה">✕</button>
  </div>
  <div id="liveschematicsvg"></div>`;
$('canvas').parentElement.append(liveSchematic);
$('closeschem').onclick=()=>{
  window.appSettings.schematicOverlay=false;
  $('schemoverlaytoggle').classList.remove('active');
  saveSettings();
};

function renderLiveSchematicOverlay(){
  if(!$('liveschematicsvg')||liveSchematic.hidden)return;
  const b=board(),src=nodes.find(n=>n.type==='source');
  const res=nodes.find(n=>n.type==='resistor'),led=nodes.find(n=>n.type==='led');
  const active=(running&&lastSim.current>0);
  const vSource=b?(catalog.find(c=>c.type===b.type).value):(src?src.value:5);
  const activePin=b?(Object.keys(pinModes).find(p=>pinModes[p]===1)||'D13'):'+5V';
  const pinHigh=b?(pinState[activePin]>0):active;
  const rVal=res?res.value:220;
  const ledColMap={red:'#ff4d4d',yellow:'#ffd23f',green:'#38e58b',blue:'#4da6ff',white:'#ffffff',cyan:'#4df0ff'};
  const ledCol=ledColMap[led?.ledColor||'red']||'#ff4d4d';
  const strokeCol=active?'#ff534d':'#64748b';
  const dashAttr=active?'stroke-dasharray="6 4" class="schemflow"':'';
  $('liveschematicsvg').innerHTML=`
    <svg viewBox="0 0 360 92" dir="ltr" aria-label="תרשים סכמטי חי">
      <rect x="8" y="20" width="84" height="52" rx="7" fill="none" stroke="currentColor" stroke-width="2"/>
      <text x="50" y="40" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">${b?'ARDUINO':'DC SOURCE'}</text>
      <text x="78" y="57" text-anchor="end" font-size="11" font-family="monospace" fill="currentColor">${activePin}</text>
      <circle cx="92" cy="53" r="3.5" fill="${pinHigh?'#ff534d':'#64748b'}"/>
      <text x="115" y="43" text-anchor="middle" font-size="9" font-family="monospace" font-weight="700" fill="${pinHigh?'#ff534d':'#8c97aa'}">${pinHigh?'HIGH ('+vSource+'V)':'LOW (0V)'}</text>
      <line x1="92" y1="53" x2="145" y2="53" stroke="${strokeCol}" stroke-width="2.2" ${dashAttr}/>
      <path d="M145 53 L151 43 L159 63 L167 43 L175 63 L183 43 L191 63 L197 53" fill="none" stroke="currentColor" stroke-width="2"/>
      <text x="171" y="34" text-anchor="middle" font-size="10" font-family="monospace" fill="currentColor">${rVal} Ω</text>
      <line x1="197" y1="53" x2="240" y2="53" stroke="${strokeCol}" stroke-width="2.2" ${dashAttr}/>
      <polygon points="240,41 240,65 262,53" fill="${active?ledCol:'none'}" stroke="#1f8a88" stroke-width="2"/>
      <line x1="262" y1="40" x2="262" y2="66" stroke="#1f8a88" stroke-width="2.4"/>
      <path d="M248 36 L256 26 M256 36 L264 26" stroke="${active?ledCol:'#1f8a88'}" stroke-width="1.8"/>
      <line x1="262" y1="53" x2="315" y2="53" stroke="${strokeCol}" stroke-width="2.2" ${dashAttr}/>
      <line x1="315" y1="53" x2="315" y2="67" stroke="currentColor" stroke-width="2"/>
      <line x1="303" y1="67" x2="327" y2="67" stroke="currentColor" stroke-width="2"/>
      <line x1="307" y1="73" x2="323" y2="73" stroke="currentColor" stroke-width="2"/>
      <line x1="311" y1="79" x2="319" y2="79" stroke="currentColor" stroke-width="2"/>
      <text x="335" y="73" font-size="9" font-family="monospace" fill="currentColor">GND</text>
    </svg>`;
}

// 6. Floating 3D Component Callout Hotspots & Interactive Component Inspector Popover (Learn-Arduino style)
const stageCallouts=document.createElement('div');
stageCallouts.className='stagecallouts';
stageCallouts.id='stagecallouts';
$('canvas').parentElement.append(stageCallouts);

const partPopover=document.createElement('div');
partPopover.className='partpopover';
partPopover.id='partpopover';
partPopover.setAttribute('role','dialog');
partPopover.setAttribute('aria-label','בודק הרכיבים');
partPopover.hidden=true;
$('canvas').parentElement.append(partPopover);

function openComponentInspectorPopover(nodeId){
  const n=nodes.find(x=>x.id===nodeId);
  if(!n){partPopover.hidden=true;return}
  select(n.id);
  const c=catalog.find(x=>x.type===n.type);
  partPopover.hidden=false;
  if(n.type==='led'){
    const colors=[
      ['red','אדום','#ff4d4d',2.0],
      ['yellow','צהוב','#ffd23f',2.1],
      ['green','ירוק','#38e58b',2.2],
      ['blue','כחול','#4da6ff',3.1],
      ['white','לבן','#f8fafc',3.2]
    ];
    const curCol=n.ledColor||'red';
    const b=board();
    const delays=[...(b?.code?.matchAll(/delay\s*\(\s*(\d+)\s*\)/g)||[])];
    const onMs=delays[0]?+delays[0][1]:500;
    const offMs=delays[1]?+delays[1][1]:onMs;
    partPopover.innerHTML=`
      <div class="pophead">
        <strong>נורית LED של 5 מ״מ</strong>
        <button id="closepop" title="סגירה">✕</button>
      </div>
      <p class="popdesc">נורית פולטת אור כשזרם עובר מהרגל הארוכה (אנודה +) לרגל הקצרה (קתודה −). חובה לחבר נגד בטור.</p>
      <div class="popsection">
        <label>צבע הנורית: <b id="ledcolname">${(colors.find(x=>x[0]===curCol)||colors[0])[1]}</b></label>
        <div class="colorswatches">
          ${colors.map(([k,label,hex,vf])=>`<button data-ledcol="${k}" data-vf="${vf}" class="swatch ${curCol===k?'active':''}" style="background:${hex}" title="${label} (Vf=${vf}V)"></button>`).join('')}
        </div>
      </div>
      <div class="popsection">
        <label>דלוקה למשך: <b id="onmsval" dir="ltr">${onMs} ms</b></label>
        <input type="range" id="onmsslider" min="100" max="2000" step="50" value="${onMs}">
      </div>
      <div class="popsection">
        <label>כבויה למשך: <b id="offmsval" dir="ltr">${offMs} ms</b></label>
        <input type="range" id="offmsslider" min="100" max="2000" step="50" value="${offMs}">
      </div>
      <div class="popfoot">
        <button id="zoomtopart" class="wide">🔍 התקרבות אל הרכיב</button>
      </div>`;
    partPopover.querySelectorAll('[data-ledcol]').forEach(btn=>btn.onclick=()=>{
      n.ledColor=btn.dataset.ledcol;
      n.value=+btn.dataset.vf;
      window.visualRevision++;
      update();
      openComponentInspectorPopover(n.id);
    });
    const syncDelays=(newOn,newOff)=>{
      if(!b)return;
      let idx=0;
      b.code=(b.code||blinkCode(b)).replace(/delay\s*\(\s*\d+\s*\)/g,()=>{
        idx++;
        return `delay(${idx===1?newOn:newOff})`;
      });
      if($('editor'))$('editor').value=b.code;
      if(running&&codeTimer!==null)runCode();
    };
    $('onmsslider').oninput=e=>{$('onmsval').textContent=e.target.value+' ms';syncDelays(+e.target.value,+$('offmsslider').value)};
    $('offmsslider').oninput=e=>{$('offmsval').textContent=e.target.value+' ms';syncDelays(+$('onmsslider').value,+e.target.value)};
  }else if(n.type==='resistor'){
    const presets=[100,220,330,470,1000,4700,10000];
    const estCurrent=((5-2)/n.value*1000);
    const statusText=estCurrent>20?'⚠️ זרם גבוה מדי (>20mA)! סכנת שריפה לנורית':estCurrent>=5?`בערך ${estCurrent.toFixed(1)} mA: בהירה ובטוחה.`:`בערך ${estCurrent.toFixed(2)} mA: עמומה ובטוחה.`;
    partPopover.innerHTML=`
      <div class="pophead">
        <strong>נגד <span dir="ltr">${n.value>=1000?(n.value/1000)+' kΩ':n.value+' Ω'}</span></strong>
        <button id="closepop" title="סגירה">✕</button>
      </div>
      <p class="popdesc">מגביל את זרימת הזרם במעגל לפי חוק אוהם (I = V / R) ומגן על נורית ה־LED ופין הלוח.</p>
      <div class="popsection">
        <label>בחירת התנגדות מהירה:</label>
        <div class="presetchips">
          ${presets.map(v=>`<button data-rpreset="${v}" class="${n.value===v?'active':''}" dir="ltr">${v>=1000?(v/1000)+' kΩ':v+' Ω'}</button>`).join('')}
        </div>
      </div>
      <div class="popfeedback ${estCurrent>20?'danger':''}">${statusText}</div>
      <div class="popfoot">
        <button id="zoomtopart" class="wide">🔍 התקרבות אל הרכיב</button>
      </div>`;
    partPopover.querySelectorAll('[data-rpreset]').forEach(btn=>btn.onclick=()=>{
      n.value=+btn.dataset.rpreset;
      update();
      renderDetail();
      openComponentInspectorPopover(n.id);
    });
  }else{
    partPopover.innerHTML=`
      <div class="pophead">
        <strong>${c.name}</strong>
        <button id="closepop" title="סגירה">✕</button>
      </div>
      <p class="popdesc">${c.desc}</p>
      <div class="popsection">
        <label>ערך נוכחי: <b dir="ltr">${n.value} ${c.unit}</b></label>
        ${(c.input||['ldr','ultrasonic','servo','source'].includes(n.type))?`<input type="range" id="popvalslider" min="0" max="${n.type==='source'?24:n.type==='ultrasonic'?200:n.type==='servo'?180:digitalSensors.has(n.type)?1:100}" value="${n.value}">`:''}
      </div>
      <div class="popfoot">
        <button id="zoomtopart" class="wide">🔍 התקרבות אל הרכיב</button>
      </div>`;
    if($('popvalslider'))$('popvalslider').oninput=e=>{
      n.value=+e.target.value;
      update();
      renderDetail();
      openComponentInspectorPopover(n.id);
    };
  }
  $('closepop').onclick=()=>{partPopover.hidden=true};
  $('zoomtopart').onclick=()=>{
    zoom=1.55;
    window.visualRevision++;
    toast('המצלמה התמקדה ב־'+c.name);
  };
}
window.openComponentInspectorPopover=openComponentInspectorPopover;

// Render floating 3D callout pills & board exploration cards
let lastCalloutHtml='';
function updateStageCallouts(){
  if(!window.appSettings.callouts||mode!=='3d'){stageCallouts.innerHTML='';lastCalloutHtml='';return}
  const pills=[];
  // If Lesson 1 is active in learn mode and a board is present, show board component hotspots
  const b=board();
  const isLesson1=document.body.dataset.workspace==='learn'&&(window.courseState?.current===0);
  if(b&&isLesson1&&window.onboardComponents){
    const s={width:3.15,depth:2.3};
    for(const comp of window.onboardComponents.slice(0,6)){
      const pt=project(b.x+(comp.u-.5)*s.width,.35,b.z+(comp.v-.5)*s.depth);
      if(pt.x>20&&pt.x<W-20&&pt.y>20&&pt.y<H-40){
        pills.push(`<button class="calloutpill boardspot" style="left:${Math.round(pt.x)}px;top:${Math.round(pt.y)}px" data-boardspot="${comp.id}"><i></i><b>${comp.name}</b><small>${comp.sub}</small></button>`);
      }
    }
  }
  for(const n of nodes){
    const c=catalog.find(x=>x.type===n.type);
    const pt=project(n.x,.85,n.z);
    if(pt.x>30&&pt.x<W-30&&pt.y>20&&pt.y<H-40){
      const valBadge=n.type==='resistor'?`${n.value>=1000?(n.value/1000)+'kΩ':n.value+'Ω'}`:n.type==='led'?(running&&lastSim.current>0?'ON':'LED'):c.board?'MCU':`${n.value} ${c.unit}`;
      const burned=n.burned?' burned':'';
      pills.push(`<button class="calloutpill${burned}" style="left:${Math.round(pt.x)}px;top:${Math.round(pt.y)}px" data-inspectnode="${n.id}"><i></i><b>${c.name}</b><span dir="ltr">${n.burned?'🔥 שרוף!':valBadge}</span></button>`);
    }
  }
  // Wire HIGH/LOW state badges along wires when currentFlow is active
  if(window.appSettings.currentFlow&&running){
    wires.forEach((w,idx)=>{
      const a=nodes.find(n=>n.id===w[0].id),bNode=nodes.find(n=>n.id===w[1].id);
      if(!a||!bNode)return;
      const pa=pinPos(a,w[0].pin),pb=pinPos(bNode,w[1].pin);
      const mid=project((pa[0]+pb[0])/2,.75,(pa[2]+pb[2])/2);
      const isGnd=w.some(p=>{const nd=nodes.find(x=>x.id===p.id),cat=nd&&catalog.find(x=>x.type===nd.type);return cat?.pins[p.pin]?.startsWith('GND')||cat?.pins[p.pin]==='−'});
      const isHigh=lastSim.current>0&&!isGnd;
      pills.push(`<span class="wirebadge ${isHigh?'high':'low'}" style="left:${Math.round(mid.x)}px;top:${Math.round(mid.y)}px" dir="ltr">${isGnd?'GND':isHigh?'HIGH':'LOW'}</span>`);
    });
  }
  const html=pills.join('');
  if(html!==lastCalloutHtml){
    stageCallouts.innerHTML=html;
    lastCalloutHtml=html;
    stageCallouts.querySelectorAll('[data-inspectnode]').forEach(btn=>btn.onclick=e=>{
      e.stopPropagation();
      openComponentInspectorPopover(+btn.dataset.inspectnode);
    });
    stageCallouts.querySelectorAll('[data-boardspot]').forEach(btn=>btn.onclick=e=>{
      e.stopPropagation();
      const item=window.onboardComponents.find(x=>x.id===btn.dataset.boardspot);
      if(item)toast(`${item.name}: ${item.desc}`);
    });
  }
}

// 7. Hook into scene rendering for Quad-View, LED Colors, Servo Arm, LCD Text, Burnout Smoke & Overlays
const prevSceneFrameRendered=window.sceneFrameRendered;
window.sceneFrameRendered=function(time){
  prevSceneFrameRendered?.(time);
  renderLiveSchematicOverlay();
  updateStageCallouts();
  updateMultimeterAndTimeline();
  // Custom canvas overlays: colored LED glow, Servo horn angle, LCD live text, Burnout smoke, Quad-view inset
  nodes.forEach(n=>{
    const p=project(n.x,.55,n.z);
    if(n.type==='led'&&running&&lastSim.current>0&&lastSim.active?.includes(n.id)){
      const colMap={red:'#ff4d4d',yellow:'#ffd23f',green:'#38e58b',blue:'#4da6ff',white:'#ffffff',cyan:'#4df0ff'};
      const hex=colMap[n.ledColor||'red']||'#ff4d4d';
      const g=ctx.createRadialGradient(p.x,p.y,2,p.x,p.y,40*zoom);
      g.addColorStop(0,hex+'cc');
      g.addColorStop(1,hex+'00');
      ctx.fillStyle=g;
      ctx.beginPath();ctx.arc(p.x,p.y,40*zoom,0,Math.PI*2);ctx.fill();
    }
    if((n.type==='servo'||n.type==='reference_servo')){
      const ang=(Number(n.value)||90)*Math.PI/180;
      const len=28*zoom;
      ctx.save();
      ctx.strokeStyle='#70e0c1';
      ctx.lineWidth=3.5;
      ctx.beginPath();
      ctx.moveTo(p.x,p.y);
      ctx.lineTo(p.x+Math.cos(ang)*len,p.y-Math.sin(ang)*len);
      ctx.stroke();
      ctx.fillStyle='#101a29';
      ctx.fillRect(p.x-22,p.y+18,44,16);
      ctx.fillStyle='#70e0c1';
      ctx.font='bold 10px monospace';
      ctx.textAlign='center';
      ctx.fillText(Math.round(n.value||90)+'°',p.x,p.y+30);
      ctx.restore();
    }
    if(['lcd','oled','reference_lcd1602','reference_lcd2004'].includes(n.type)&&n.displayText){
      ctx.save();
      ctx.fillStyle='#0c2e24ee';
      ctx.strokeStyle='#48c78e';
      ctx.lineWidth=1.5;
      ctx.fillRect(p.x-58,p.y-26,116,24);
      ctx.strokeRect(p.x-58,p.y-26,116,24);
      ctx.fillStyle='#96f6ce';
      ctx.font='10px monospace';
      ctx.textAlign='center';
      ctx.fillText(n.displayText.slice(0,18),p.x,p.y-11);
      ctx.restore();
    }
    if(n.burned&&!window.appSettings.safetyMode){
      ctx.save();
      for(let k=0;k<4;k++){
        const dy=((time*0.04+k*12)%45);
        const dx=Math.sin(time*0.005+k)*10;
        ctx.fillStyle=`rgba(255,95,70,${Math.max(0,0.75-dy/45)})`;
        ctx.beginPath();
        ctx.arc(p.x+dx,p.y-dy,6+dy*0.2,0,Math.PI*2);
        ctx.fill();
      }
      ctx.restore();
    }
  });
  if(window.appSettings.quadView&&mode==='3d'){
    drawQuadViewOverlay();
  }
};

function drawQuadViewOverlay(){
  const views=[
    {label:'TOP (עליון)',ax:0,az:1,x:W-145,y:12},
    {label:'FRONT (קדמי)',ax:1,az:0,x:W-145,y:108},
    {label:'RIGHT (צד)',ax:0,az:1,flip:true,x:W-145,y:204}
  ];
  ctx.save();
  for(const v of views){
    ctx.fillStyle='#0d1724dd';
    ctx.strokeStyle='#38556e';
    ctx.lineWidth=1;
    ctx.fillRect(v.x,v.y,132,88);
    ctx.strokeRect(v.x,v.y,132,88);
    ctx.fillStyle='#86b4cf';
    ctx.font='bold 9px monospace';
    ctx.textAlign='left';
    ctx.fillText(v.label,v.x+6,v.y+13);
    nodes.forEach(n=>{
      const nx=v.x+66+(v.flip?n.z:n.x)*11;
      const ny=v.y+48+(v.flip?n.x:n.z)*8;
      ctx.fillStyle=n.id===selected?'#70e0c1':'#5a82a6';
      ctx.fillRect(nx-5,ny-4,10,8);
    });
  }
  ctx.restore();
}

// 8. Safety Mode & Realistic Overvoltage / Short-Circuit Hazard Simulation (BenchTwin style)
$('safetytoggle').onclick=()=>{
  window.appSettings.safetyMode=!window.appSettings.safetyMode;
  if(window.appSettings.safetyMode)nodes.forEach(n=>delete n.burned);
  saveSettings();
  update();
  toast(window.appSettings.safetyMode?'מצב בטיחות הופעל: הרכיבים מוגנים משריפה':'מצב מציאותי הופעל: זרם יתר ישרוף נוריות ורכיבים!');
};
$('themetoggle').onclick=()=>{
  window.appSettings.theme=window.appSettings.theme==='light'?'dark':'light';
  saveSettings();
};

// 9. Enhanced Code Editor: Simulated Upload Logs, Inline Clickable Parameters & Active Line Highlight
const baseOpenCode=openCode;
openCode=function(force){
  baseOpenCode(force);
  const codePanel=$('codepanel');
  if(!codePanel||codePanel.hidden)return;
  if(!$('inlineparams')){
    const bar=document.createElement('div');
    bar.id='inlineparams';
    bar.className='inlineparams';
    $('editor').before(bar);
  }
  renderInlineCodeParameters();
  $('editor').addEventListener('input',renderInlineCodeParameters);
};

function renderInlineCodeParameters(){
  const bar=$('inlineparams'),ed=$('editor');
  if(!bar||!ed)return;
  const code=ed.value;
  const chips=[];
  const delayMatches=[...code.matchAll(/delay\s*\(\s*(\d+)\s*\)/g)];
  delayMatches.slice(0,3).forEach((m,idx)=>{
    chips.push(`<button data-paramkind="delay" data-paramidx="${idx}" data-paramval="${m[1]}" title="לחיצה לשינוי מהיר של השהיה">⏱ delay(${m[1]} ms)</button>`);
  });
  const pwmMatches=[...code.matchAll(/analogWrite\s*\(\s*([^,]+)\s*,\s*(\d+)\s*\)/g)];
  pwmMatches.slice(0,2).forEach((m,idx)=>{
    chips.push(`<button data-paramkind="pwm" data-paramidx="${idx}" data-paramval="${m[2]}" title="לחיצה לשינוי עוצמת PWM">⚡ analogWrite(${m[1].trim()}, ${m[2]})</button>`);
  });
  const toneMatches=[...code.matchAll(/tone\s*\(\s*([^,]+)\s*,\s*(\d+)/g)];
  toneMatches.slice(0,2).forEach((m,idx)=>{
    chips.push(`<button data-paramkind="tone" data-paramidx="${idx}" data-paramval="${m[2]}" title="לחיצה לשינוי תדר הצליל">🎵 tone(${m[2]} Hz)</button>`);
  });
  bar.innerHTML=chips.length?`<span>פרמטרים מהירים בקוד (לחצו לשינוי חי):</span>`+chips.join(''):`<span>💡 טיפ: שנו ערכי delay או PWM בקוד וצפו במעגל מגיב בזמן אמת</span>`;
  bar.querySelectorAll('button[data-paramkind]').forEach(btn=>btn.onclick=()=>{
    const kind=btn.dataset.paramkind,idx=+btn.dataset.paramidx,cur=+btn.dataset.paramval;
    const choices=kind==='delay'?[100,250,500,1000]:kind==='pwm'?[0,64,128,192,255]:[262,330,392,440,523,880];
    const next=choices[(choices.indexOf(cur)+1)%choices.length]||choices[0];
    let count=0;
    if(kind==='delay'){
      ed.value=ed.value.replace(/delay\s*\(\s*(\d+)\s*\)/g,full=>(count++===idx?`delay(${next})`:full));
    }else if(kind==='pwm'){
      ed.value=ed.value.replace(/analogWrite\s*\(\s*([^,]+)\s*,\s*(\d+)\s*\)/g,(full,p)=>(count++===idx?`analogWrite(${p}, ${next})`:full));
    }else if(kind==='tone'){
      ed.value=ed.value.replace(/tone\s*\(\s*([^,]+)\s*,\s*(\d+)/g,(full,p)=>(count++===idx?`tone(${p}, ${next}`:full));
    }
    const b=board();
    if(b)b.code=ed.value;
    renderInlineCodeParameters();
    if(running&&codeTimer!==null)runCode();
  });
}

// Wrap runCode to print Learn-Arduino compile/upload status in Serial Monitor
const origRunCode=runCode;
runCode=function(){
  const b=board();
  if(b&&$('console')){
    const bc=catalog.find(c=>c.type===b.type);
    $('console').textContent='';
    log(`מקמפל את הסקיצה עבור ${bc.name}…`);
    log(`מעלה ל־${bc.name}…`);
    log(`ההעלאה הסתיימה בהצלחה.`);
  }
  origRunCode();
};

// 10. Digital Multimeter (DMM) & Logic Analyzer / Pin Timeline Panel (BenchTwin Instruments)
const multiPanel=document.createElement('section');
multiPanel.className='multimeterpanel';
multiPanel.id='multimeterpanel';
multiPanel.innerHTML=`
  <div class="dmmgrid">
    <div class="dmmcard">
      <div class="dmmhead">
        <span class="eyebrow">BENCHTOP MULTIMETER</span>
        <h3>רב־מודד דיגיטלי (DMM)</h3>
      </div>
      <div class="dmmscreen" dir="ltr">
        <span id="dmmmodebadge">DC V</span>
        <strong id="dmmreadout">5.00 V</strong>
      </div>
      <div class="dmmmodes">
        <button data-dmm="v" class="active">V (מתח)</button>
        <button data-dmm="i">mA (זרם)</button>
        <button data-dmm="r">Ω (התנגדות)</button>
        <button data-dmm="p">mW (הספק)</button>
        <button data-dmm="cont">🔊 רציפות</button>
      </div>
    </div>
    <div class="timelinecard">
      <div class="dmmhead">
        <div>
          <span class="eyebrow">LOGIC ANALYZER & PIN TIMELINE</span>
          <h3>מנתח לוגי וציר זמן של הפינים</h3>
        </div>
        <button id="cleartimeline">ניקוי ציר זמן</button>
      </div>
      <div class="timelinebars" id="timelinebars" dir="ltr">
        <p class="timelinenote">הריצו קוד כדי לראות מעברי HIGH/LOW, PWM, תדרי Tone וזוויות Servo בזמן אמת.</p>
      </div>
    </div>
  </div>`;
document.querySelector('.instruments').after(multiPanel);

let dmmMode='v';
multiPanel.querySelectorAll('[data-dmm]').forEach(btn=>btn.onclick=()=>{
  dmmMode=btn.dataset.dmm;
  multiPanel.querySelectorAll('[data-dmm]').forEach(b=>b.classList.toggle('active',b===btn));
  updateMultimeterAndTimeline();
});
$('cleartimeline').onclick=()=>{window.pinTimeline=[];updateMultimeterAndTimeline()};

function updateMultimeterAndTimeline(){
  if(!$('dmmreadout'))return;
  const src=nodes.find(n=>n.type==='source'),b=board();
  const v=src?src.value:b?catalog.find(c=>c.type===b.type).value:0;
  const iMa=running?(lastSim.current*1000):0;
  const totalR=nodes.filter(n=>n.type==='resistor'||n.type==='motor').reduce((a,n)=>a+n.value,0);
  const pMw=running?(lastSim.current**2*totalR*1000):0;
  if(dmmMode==='v'){
    $('dmmmodebadge').textContent='DC VOLTS';
    $('dmmreadout').textContent=v.toFixed(2)+' V';
  }else if(dmmMode==='i'){
    $('dmmmodebadge').textContent='DC CURRENT';
    $('dmmreadout').textContent=iMa.toFixed(2)+' mA';
  }else if(dmmMode==='r'){
    $('dmmmodebadge').textContent='RESISTANCE';
    $('dmmreadout').textContent=totalR>0?(totalR>=1000?(totalR/1000).toFixed(2)+' kΩ':totalR.toFixed(1)+' Ω'):'OL (פתוח)';
  }else if(dmmMode==='p'){
    $('dmmmodebadge').textContent='POWER';
    $('dmmreadout').textContent=pMw.toFixed(2)+' mW';
  }else{
    $('dmmmodebadge').textContent='CONTINUITY';
    $('dmmreadout').textContent=lastSim.current>0?'BEEP ✓ (רציף)':'OPEN (נתק)';
  }
  // Update Pin Timeline
  const tHost=$('timelinebars');
  if(tHost&&window.pinTimeline?.length){
    const byPin=new Map();
    for(const ev of window.pinTimeline.slice(-80)){
      if(!byPin.has(ev.pin))byPin.set(ev.pin,[]);
      byPin.get(ev.pin).push(ev);
    }
    tHost.innerHTML=[...byPin.entries()].map(([pin,events])=>{
      const last=events.at(-1);
      const blocks=events.slice(-24).map(e=>{
        const h=e.mode==='SERVO'?Math.round(20+(e.val/180)*80):e.mode==='TONE'?85:Math.round(15+(e.val||0)*85);
        const cls=e.val>0?'high':'low';
        return `<i class="${cls}" style="height:${h}%" title="${pin}: ${e.val} (${e.mode})"></i>`;
      }).join('');
      const labelVal=last.mode==='SERVO'?last.val+'°':last.mode==='TONE'?last.val+'Hz':last.val>0?(last.val===1?'HIGH':Math.round(last.val*100)+'%'):'LOW';
      return `<div class="trow"><span class="tpin">${pin}</span><div class="ttrack">${blocks}</div><b class="tval">${labelVal}</b></div>`;
    }).join('');
  }
}

// 11. BenchTwin Context-Aware 3D Enclosure CAD Designer & STL Exporter
const cadSection=document.createElement('section');
cadSection.className='enclosurepanel';
cadSection.id='enclosurepanel';
cadSection.hidden=true;
cadSection.innerHTML=`
  <div class="enchead">
    <div>
      <span class="eyebrow">BENCH-AWARE 3D CAD & ENCLOSURE STUDIO</span>
      <h2>תכנון מארז תלת־ממדי סביב המעגל וייצוא STL להדפסה</h2>
    </div>
    <button id="autoenclosure">✨ התאמה אוטומטית למידות המעגל</button>
    <button id="exportstl" class="run">⬇ ייצוא קובץ STL להדפסת 3D</button>
  </div>
  <div class="encgrid">
    <div class="enccontrols">
      <label>אורך פנימי (מ״מ)<input type="number" id="encw" value="95" min="30" max="300"></label>
      <label>רוחב פנימי (מ״מ)<input type="number" id="encd" value="72" min="30" max="300"></label>
      <label>גובה המארז (מ״מ)<input type="number" id="ench" value="32" min="15" max="150"></label>
      <label>עובי דופן (מ״מ)<input type="number" id="encwall" value="2.4" min="1.2" max="8" step="0.2"></label>
      <label>קוטר בורגי הרכבה<select id="encscrew"><option value="2">M2 (2.2 מ״מ)</option><option value="2.5">M2.5 (2.7 מ״מ)</option><option value="3" selected>M3 (3.2 מ״מ)</option><option value="4">M4 (4.3 מ״מ)</option><option value="5">M5 (5.3 מ״מ)</option></select></label>
      <label>צורת בסיס / פרימיטיב<select id="encshape"><option value="box">קופסת פרויקט עם עמודי ברגים (Standoffs)</option><option value="mount">פלטת בסיס פתוחה לרובוט (Mounting Plate)</option><option value="bracket">תושבת לחיישן (Sensor Bracket)</option><option value="cylinder">מארז גלילי (Cylindrical Pod)</option></select></label>
      <label class="checkfilter"><input type="checkbox" id="encusb" checked> פתח אוטומטי לשקע USB ולמחבר מתח</label>
      <label class="checkfilter"><input type="checkbox" id="encvents" checked> חריצי אוורור עליונים לחיישנים</label>
      <label class="checkfilter"><input type="checkbox" id="enclid"> הצגת מכסה עליון תואם</label>
    </div>
    <div class="encpreview">
      <canvas id="enccanvas" width="520" height="300" aria-label="תצוגה מקדימה של מארז תלת ממדי"></canvas>
      <div class="encstats" id="encstats"></div>
    </div>
  </div>`;
document.querySelector('.workspace').append(cadSection);

function renderEnclosurePreview(){
  const c=$('enccanvas');
  if(!c||cadSection.hidden)return;
  const g=c.getContext('2d');
  const Wc=c.width,Hc=c.height;
  const w=+$('encw').value||95,d=+$('encd').value||72,h=+$('ench').value||32,wall=+$('encwall').value||2.4;
  const screw=$('encscrew').value,usb=$('encusb').checked,lid=$('enclid').checked;
  g.clearRect(0,0,Wc,Hc);
  g.fillStyle='#0c1622';
  g.fillRect(0,0,Wc,Hc);
  // Isometric projection helper for enclosure
  const iso=(x,y,z)=>({
    x:Wc/2+(x-z)*1.55,
    y:Hc/2+25+(x+z)*0.82-y*1.65
  });
  const hw=w/2,hd=d/2;
  // Base box wireframe & shaded faces
  const corners=[[-hw,0,-hd],[hw,0,-hd],[hw,0,hd],[-hw,0,hd],[-hw,h,-hd],[hw,h,-hd],[hw,h,hd],[-hw,h,hd]].map(p=>iso(...p));
  const drawPoly=(pts,fill,stroke='#70e0c1')=>{
    g.beginPath();pts.forEach((p,i)=>i?g.lineTo(p.x,p.y):g.moveTo(p.x,p.y));g.closePath();
    if(fill){g.fillStyle=fill;g.fill()}
    g.strokeStyle=stroke;g.lineWidth=1.5;g.stroke();
  };
  drawPoly([corners[0],corners[1],corners[2],corners[3]],'#1a3348aa');
  drawPoly([corners[0],corners[1],corners[5],corners[4]],'#1f3d5488');
  drawPoly([corners[1],corners[2],corners[6],corners[5]],'#254a6399');
  drawPoly([corners[3],corners[2],corners[6],corners[7]],'#2c577288');
  // Mounting standoffs (4 M-screw pillars)
  const standoffs=[[-hw+7,-hd+7],[hw-7,-hd+7],[hw-7,hd-7],[-hw+7,hd-7]];
  for(const [sx,sz] of standoffs){
    const pBot=iso(sx,0,sz),pTop=iso(sx,8,sz);
    g.strokeStyle='#ffd23f';g.lineWidth=4;
    g.beginPath();g.moveTo(pBot.x,pBot.y);g.lineTo(pTop.x,pTop.y);g.stroke();
    g.fillStyle='#0c1622';g.beginPath();g.arc(pTop.x,pTop.y,3,0,7);g.fill();
  }
  // USB Cutout on left wall
  if(usb){
    const u1=iso(-hw,6,-8),u2=iso(-hw,6,8),u3=iso(-hw,18,8),u4=iso(-hw,18,-8);
    drawPoly([u1,u2,u3,u4],'#091019','#ff6b6b');
  }
  if(lid){
    const lCorners=[[-hw,h+6,-hd],[hw,h+6,-hd],[hw,h+6,hd],[-hw,h+6,hd]].map(p=>iso(...p));
    drawPoly(lCorners,'#70e0c133','#70e0c1');
  }
  $('encstats').innerHTML=`מידות חיצוניות: <b dir="ltr">${(w+wall*2).toFixed(1)} × ${(d+wall*2).toFixed(1)} × ${h} mm</b> · 4 קדחי ברגים: <b>M${screw}</b> · פתח USB: <b>${usb?'כלול':'ללא'}</b> · רכיבים במארז: <b>${nodes.length}</b>`;
}

['encw','encd','ench','encwall','encscrew','encshape','encusb','encvents','enclid'].forEach(id=>{
  if($(id))$(id).onchange=$(id).oninput=renderEnclosurePreview;
});
$('autoenclosure').onclick=()=>{
  const xs=nodes.map(n=>n.x),zs=nodes.map(n=>n.z);
  const spanX=xs.length?(Math.max(...xs)-Math.min(...xs))*18+55:95;
  const spanZ=zs.length?(Math.max(...zs)-Math.min(...zs))*18+48:72;
  $('encw').value=Math.round(Math.max(68,Math.min(240,spanX)));
  $('encd').value=Math.round(Math.max(54,Math.min(200,spanZ)));
  renderEnclosurePreview();
  toast('מידות המארז הותאמו אוטומטית לרכיבים שעל משטח העבודה!');
};

function generateEnclosureSTL(){
  const w=+$('encw').value||95,d=+$('encd').value||72,h=+$('ench').value||32,t=+$('encwall').value||2.4;
  const tris=[];
  function addBox(x0,y0,z0,x1,y1,z1){
    const v=[[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0],[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]];
    const faces=[[0,2,1],[0,3,2],[4,5,6],[4,6,7],[0,1,5],[0,5,4],[2,3,7],[2,7,6],[0,4,7],[0,7,3],[1,2,6],[1,6,5]];
    for(const [a,b,c] of faces)tris.push([v[a],v[b],v[c]]);
  }
  // Floor
  addBox(0,0,0,w+2*t,d+2*t,t);
  // 4 Walls
  addBox(0,0,t,w+2*t,t,h);
  addBox(0,d+t,t,w+2*t,d+2*t,h);
  addBox(0,t,t,t,d+t,h);
  addBox(w+t,t,t,w+2*t,d+t,h);
  // 4 Corner PCB Standoffs
  const offs=[[t+5,t+5],[w+t-9,t+5],[w+t-9,d+t-9],[t+5,d+t-9]];
  for(const [sx,sy] of offs)addBox(sx,sy,t,sx+4,sy+4,t+6);
  let stl='solid VoltLab_Enclosure\n';
  for(const [a,b,c] of tris){
    stl+=`  facet normal 0 0 1\n    outer loop\n      vertex ${a.join(' ')}\n      vertex ${b.join(' ')}\n      vertex ${c.join(' ')}\n    endloop\n  endfacet\n`;
  }
  stl+='endsolid VoltLab_Enclosure\n';
  return stl;
}
$('exportstl').onclick=()=>{
  const stl=generateEnclosureSTL();
  download('voltlab-enclosure.stl',stl,'model/stl');
  toast('קובץ ה־STL של המארז יוצא בהצלחה להדפסת תלת־ממד!');
};

// 12. BenchTwin 2WD Robotics & Autonomous Competition Arena Simulator
const robotSection=document.createElement('section');
robotSection.className='roboticspanel';
robotSection.id='roboticspanel';
robotSection.hidden=true;
robotSection.innerHTML=`
  <div class="enchead">
    <div>
      <span class="eyebrow">BENCH-TWIN ROBOTICS & COMPETITION ARENA</span>
      <h2>סימולטור רובוטיקה, ניווט אוטונומי ומגרש תחרויות</h2>
    </div>
    <select id="robotplatform" aria-label="פלטפורמת רובוטיקה">
      <option value="2wd">Arduino 2WD Obstacle Avoidance Robot (HC-SR04 + L298N)</option>
      <option value="line">Line Follower Robot (חיישני IR + PID)</option>
      <option value="spike">LEGO SPIKE Prime Hub (Python Competition Field)</option>
      <option value="vex">VEX V5 / FTC Autonomous Arena</option>
    </select>
    <button id="robotrun" class="run">▶︎ הפעלת רובוט במגרש</button>
    <button id="robotreset">↺ איפוס מיקום</button>
  </div>
  <div class="robotgrid">
    <div class="robotarena">
      <canvas id="robotcanvas" width="580" height="320" aria-label="זירת רובוטיקה וירטואלית"></canvas>
    </div>
    <div class="robottelemetry">
      <h3>טלמטריה וחיישני הרובוט בזמן אמת</h3>
      <div class="spec"><span>מרחק אולטרה־סוני קדמי</span><b id="robodist" dir="ltr">120 cm</b></div>
      <div class="spec"><span>מנוע שמאל (PWM)</span><b id="roboleft" dir="ltr">0 %</b></div>
      <div class="spec"><span>מנוע ימין (PWM)</span><b id="roboright" dir="ltr">0 %</b></div>
      <div class="spec"><span>זווית סרוו סורק</span><b id="roboservo" dir="ltr">90°</b></div>
      <div class="spec"><span>נקודות זירה שנאספו</span><b id="roboscore" dir="ltr">0 / 4</b></div>
      <label class="checkfilter" style="margin-top:10px"><input type="checkbox" id="roboauto" checked> ניווט אוטונומי (הימנעות ממכשולים ואיסוף יעדים)</label>
      <p class="visualnotice" style="margin-top:10px">ניתן גם לשלוט ברובוט דרך הקוד במעבדה או להוסיף מכשולים בלחיצה על המגרש!</p>
    </div>
  </div>`;
document.querySelector('.workspace').append(robotSection);

const robotState={
  running:false,
  x:110,y:160,heading:0,
  vLeft:140,vRight:140,
  rayDist:120,score:0,
  obstacles:[{x:280,y:110,r:26},{x:390,y:215,r:30},{x:210,y:240,r:22}],
  targets:[{x:490,y:70,hit:false},{x:500,y:255,hit:false},{x:310,y:175,hit:false},{x:160,y:65,hit:false}]
};

$('robotcanvas').onclick=e=>{
  const r=$('robotcanvas').getBoundingClientRect();
  const x=(e.clientX-r.left)*(580/r.width),y=(e.clientY-r.top)*(320/r.height);
  robotState.obstacles.push({x,y,r:22});
  if(robotState.obstacles.length>8)robotState.obstacles.shift();
  drawRobotArena();
};
$('robotrun').onclick=()=>{
  robotState.running=!robotState.running;
  $('robotrun').textContent=robotState.running?'■ עצירת רובוט':'▶︎ הפעלת רובוט במגרש';
};
$('robotreset').onclick=()=>{
  robotState.x=90;robotState.y=160;robotState.heading=0;robotState.score=0;
  robotState.targets.forEach(t=>t.hit=false);
  drawRobotArena();
};

function stepRobotArena(){
  if(robotSection.hidden)return;
  if(robotState.running){
    // Raycast ultrasonic distance
    let minD=220;
    const cos=Math.cos(robotState.heading),sin=Math.sin(robotState.heading);
    for(let d=18;d<220;d+=4){
      const rx=robotState.x+cos*d,ry=robotState.y+sin*d;
      if(rx<18||rx>562||ry<18||ry>302){minD=d;break}
      if(robotState.obstacles.some(o=>Math.hypot(rx-o.x,ry-o.y)<o.r+6)){minD=d;break}
    }
    robotState.rayDist=minD;
    // Sync ultrasonic sensor in lab circuit if present
    const usNode=nodes.find(n=>n.type==='ultrasonic');
    if(usNode)usNode.value=Math.round(minD);
    if($('roboauto')?.checked){
      if(minD<58){
        robotState.vLeft=180;robotState.vRight=-160;
        robotState.heading+=0.085;
      }else{
        // Steer gently toward nearest uncollected target
        const nextT=robotState.targets.find(t=>!t.hit);
        if(nextT){
          const targetAng=Math.atan2(nextT.y-robotState.y,nextT.x-robotState.x);
          let diff=Math.atan2(Math.sin(targetAng-robotState.heading),Math.cos(targetAng-robotState.heading));
          robotState.heading+=Math.max(-0.045,Math.min(0.045,diff*0.2));
        }
        robotState.vLeft=165;robotState.vRight=165;
        robotState.x=Math.max(24,Math.min(556,robotState.x+Math.cos(robotState.heading)*2.3));
        robotState.y=Math.max(24,Math.min(296,robotState.y+Math.sin(robotState.heading)*2.3));
      }
    }
    for(const t of robotState.targets){
      if(!t.hit&&Math.hypot(robotState.x-t.x,robotState.y-t.y)<24){
        t.hit=true;robotState.score++;
        if(window.playBuzzerTone)window.playBuzzerTone(660,90);
      }
    }
    $('robodist').textContent=Math.round(robotState.rayDist)+' cm';
    $('roboleft').textContent=Math.round(robotState.vLeft/255*100)+' %';
    $('roboright').textContent=Math.round(robotState.vRight/255*100)+' %';
    $('roboservo').textContent=(window.robotCommand?.servo??90)+'°';
    $('roboscore').textContent=`${robotState.score} / ${robotState.targets.length}`;
  }
  drawRobotArena();
}
setInterval(stepRobotArena,45);

function drawRobotArena(){
  const c=$('robotcanvas');
  if(!c)return;
  const g=c.getContext('2d');
  g.fillStyle='#0c1723';
  g.fillRect(0,0,580,320);
  // Competition field grid & borders
  g.strokeStyle='#1d3146';g.lineWidth=1;
  for(let x=0;x<580;x+=40){g.beginPath();g.moveTo(x,0);g.lineTo(x,320);g.stroke()}
  for(let y=0;y<320;y+=40){g.beginPath();g.moveTo(0,y);g.lineTo(580,y);g.stroke()}
  g.strokeStyle='#3b698a';g.lineWidth=3;
  g.strokeRect(8,8,564,304);
  // Line follower track
  g.strokeStyle='#23455c';g.lineWidth=10;
  g.beginPath();g.ellipse(290,160,210,105,0,0,Math.PI*2);g.stroke();
  // Targets
  for(const t of robotState.targets){
    g.fillStyle=t.hit?'#2e5449':'#70e0c1';
    g.beginPath();g.arc(t.x,t.y,10,0,Math.PI*2);g.fill();
    if(!t.hit){
      g.strokeStyle='#70e0c155';g.lineWidth=4;
      g.beginPath();g.arc(t.x,t.y,15,0,Math.PI*2);g.stroke();
    }
  }
  // Obstacles
  for(const o of robotState.obstacles){
    g.fillStyle='#3b242c';g.strokeStyle='#ff6b6b';g.lineWidth=2;
    g.beginPath();g.arc(o.x,o.y,o.r,0,Math.PI*2);g.fill();g.stroke();
  }
  // Ultrasonic cone
  g.save();
  g.translate(robotState.x,robotState.y);
  g.rotate(robotState.heading);
  const coneGrad=g.createLinearGradient(0,0,robotState.rayDist,0);
  coneGrad.addColorStop(0,robotState.rayDist<58?'#ff534d66':'#70e0c155');
  coneGrad.addColorStop(1,'#70e0c105');
  g.fillStyle=coneGrad;
  g.beginPath();
  g.moveTo(14,0);
  g.lineTo(robotState.rayDist,-robotState.rayDist*0.22);
  g.lineTo(robotState.rayDist,robotState.rayDist*0.22);
  g.closePath();
  g.fill();
  // 2WD Robot chassis
  g.fillStyle='#245e68';g.strokeStyle='#8af2c5';g.lineWidth=2;
  g.beginPath();g.roundRect(-18,-15,36,30,6);g.fill();g.stroke();
  // Wheels
  g.fillStyle='#111822';
  g.fillRect(-14,-19,20,4);
  g.fillRect(-14,15,20,4);
  // Ultrasonic eyes on front
  g.fillStyle='#ffd23f';
  g.fillRect(14,-8,5,5);
  g.fillRect(14,3,5,5);
  g.restore();
}

// 13. Workspace Mode Switcher
function workspaceMode(modeKey){
  document.body.dataset.workspace=modeKey;
  $('lessons').classList.toggle('active',modeKey==='learn');
  $('labnav').classList.toggle('active',modeKey!=='learn');
  document.querySelectorAll('[data-workspace]').forEach(b=>b.classList.toggle('active',b.dataset.workspace===modeKey));
  cadSection.hidden=modeKey!=='cad';
  robotSection.hidden=modeKey!=='robotics';
  if(modeKey==='wire')setTool('wire');else setTool('select');
  if(modeKey==='code'){mobilePanel('workspace');openCode(true)}
  if(modeKey==='measure'){mobilePanel('workspace');multiPanel.scrollIntoView({behavior:'smooth',block:'center'})}
  if(modeKey==='cad'){mobilePanel('workspace');renderEnclosurePreview();cadSection.scrollIntoView({behavior:'smooth',block:'center'})}
  if(modeKey==='robotics'){mobilePanel('workspace');drawRobotArena();robotSection.scrollIntoView({behavior:'smooth',block:'center'})}
  if(modeKey==='learn'){mobilePanel('workspace');window.renderCourse?.();document.querySelector('main').scrollIntoView({behavior:'smooth',block:'start'})}
}
window.workspaceMode=workspaceMode;
document.querySelectorAll('[data-workspace]').forEach(b=>b.onclick=()=>workspaceMode(b.dataset.workspace));
$('lessons').onclick=()=>workspaceMode('learn');
$('labnav').onclick=()=>workspaceMode('build');

// 14. Left Rail Drawer Handlers (Home, Lessons, Components, Simulator, CAD, Robotics, Settings, 21 Languages)
function toggleDrawer(kind){
  if(!sideDrawer.hidden&&sideDrawer.dataset.kind===kind){sideDrawer.hidden=true;return}
  sideDrawer.dataset.kind=kind;
  sideDrawer.hidden=false;
  if(kind==='lessons'){
    const st=window.courseState||{completed:[],current:0};
    sideDrawer.innerHTML=`
      <div class="drawerhead"><h3>📖 מסלול 16 השיעורים</h3><button id="closedrawer">✕</button></div>
      <div class="drawerlist">
        ${(window.lessons||[]).map((l,i)=>`
          <button class="draweritem ${st.current===i?'active':''}" data-picklesson="${i}">
            <span class="badge">${st.completed.includes(l.id)?'✓':i+1}</span>
            <div><strong>${l.title}</strong><small>${l.topic} · ${l.minutes} דקות</small></div>
          </button>`).join('')}
      </div>`;
    sideDrawer.querySelectorAll('[data-picklesson]').forEach(b=>b.onclick=()=>{
      window.startLesson?.(+b.dataset.picklesson);
      workspaceMode('learn');
      sideDrawer.hidden=true;
    });
  }else if(kind==='parts'){
    sideDrawer.innerHTML=`
      <div class="drawerhead"><h3>🎛️ רכיבי לוח ה־Arduino Uno (9)</h3><button id="closedrawer">✕</button></div>
      <p class="drawernote">לחצו על כל רכיב מובנה על גבי הלוח להסבר מפורט והדגשה במשטח:</p>
      <div class="drawerlist">
        ${(window.onboardComponents||[]).map(c=>`
          <button class="draweritem" data-onboard="${c.id}">
            <span class="badge">◈</span>
            <div><strong>${c.name}</strong><small>${c.sub}</small><p>${c.desc}</p></div>
          </button>`).join('')}
      </div>`;
    sideDrawer.querySelectorAll('[data-onboard]').forEach(b=>b.onclick=()=>{
      const item=window.onboardComponents.find(x=>x.id===b.dataset.onboard);
      if(item){
        toast(`${item.name}: ${item.desc}`);
        zoom=1.35;window.visualRevision++;
      }
    });
  }else if(kind==='settings'){
    const s=window.appSettings;
    sideDrawer.innerHTML=`
      <div class="drawerhead"><h3>⚙️ הגדרות סימולטור ותצוגה</h3><button id="closedrawer">✕</button></div>
      <div class="drawersettings">
        <label class="settingtoggle"><span>ערכת נושא בהירה (Learn Arduino Parchment)</span><input type="checkbox" id="set_light" ${s.theme==='light'?'checked':''}></label>
        <label class="settingtoggle"><span>תוויות הסבר צפות על הרכיבים (Callout Cards)</span><input type="checkbox" id="set_callouts" ${s.callouts?'checked':''}></label>
        <label class="settingtoggle"><span>הצגת זרימת זרם ותוויות HIGH/LOW</span><input type="checkbox" id="set_flow" ${s.currentFlow?'checked':''}></label>
        <label class="settingtoggle"><span>הצגת סכמה חשמלית חיה צפה</span><input type="checkbox" id="set_schem" ${s.schematicOverlay?'checked':''}></label>
        <label class="settingtoggle"><span>רשת רצפה תלת־ממדית</span><input type="checkbox" id="set_grid" ${s.grid?'checked':''}></label>
        <label class="settingtoggle"><span>סיבוב מצלמה אוטומטי במצב המתנה</span><input type="checkbox" id="set_autorot" ${s.autoRotate?'checked':''}></label>
        <label class="settingtoggle"><span>צליל זמזם חי (WebAudio Tone)</span><input type="checkbox" id="set_sound" ${s.sound?'checked':''}></label>
        <label class="settingtoggle"><span>מצב בטיחות (מניעת שריפת רכיבים בזרם יתר)</span><input type="checkbox" id="set_safety" ${s.safetyMode?'checked':''}></label>
        <label class="settingtoggle"><span>הפחתת תנועה ואנימציות</span><input type="checkbox" id="set_motion" ${s.reducedMotion?'checked':''}></label>
        <hr style="border-color:#2c3e50;margin:14px 0">
        <button id="resetcourseprogress" class="wide">🗑️ איפוס התקדמות הלמידה (0/16)</button>
      </div>`;
    $('set_light').onchange=e=>{s.theme=e.target.checked?'light':'dark';saveSettings()};
    $('set_callouts').onchange=e=>{s.callouts=e.target.checked;saveSettings()};
    $('set_flow').onchange=e=>{s.currentFlow=e.target.checked;saveSettings()};
    $('set_schem').onchange=e=>{s.schematicOverlay=e.target.checked;saveSettings()};
    $('set_grid').onchange=e=>{s.grid=e.target.checked;saveSettings()};
    $('set_autorot').onchange=e=>{s.autoRotate=e.target.checked;saveSettings()};
    $('set_sound').onchange=e=>{s.sound=e.target.checked;saveSettings()};
    $('set_safety').onchange=e=>{s.safetyMode=e.target.checked;saveSettings()};
    $('set_motion').onchange=e=>{s.reducedMotion=e.target.checked;saveSettings()};
    $('resetcourseprogress').onclick=()=>{
      if(window.courseState){
        window.courseState.completed=[];
        window.courseState.answers={};
        window.courseState.current=0;
        localStorage.removeItem('voltlab-course-v1');
        window.renderCourse?.();
        toast('התקדמות הלמידה אופסה ל־0/16');
      }
    };
  }else if(kind==='lang'){
    const langs=[
      ['HE','עברית (RTL)'],['EN','English'],['AR','العربية (RTL)'],['ES','Español'],['PT','Português'],
      ['FR','Français'],['IT','Italiano'],['DE','Deutsch'],['NL','Nederlands'],['PL','Polski'],
      ['TR','Türkçe'],['ID','Bahasa Indonesia'],['VI','Tiếng Việt'],['EL','Ελληνικά'],['UA','Українська'],
      ['RU','Русский'],['ZH','简体中文'],['TW','繁體中文'],['JA','日本語'],['KO','한국어'],['HI','हिन्दी']
    ];
    sideDrawer.innerHTML=`
      <div class="drawerhead"><h3>🌐 שפה (21 שפות נתמכות)</h3><button id="closedrawer">✕</button></div>
      <div class="langgrid">
        ${langs.map(([code,name])=>`<button class="langbtn ${window.appSettings.lang===code?'active':''}" data-lang="${code}"><b>${code}</b><span>${name}</span></button>`).join('')}
      </div>`;
    sideDrawer.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{
      const code=b.dataset.lang;
      window.appSettings.lang=code;
      $('langbadge').textContent=code;
      document.documentElement.dir=['HE','AR'].includes(code)?'rtl':'ltr';
      saveSettings();
      sideDrawer.hidden=true;
      toast(`Language / שפה: ${code}`);
    });
  }
  if($('closedrawer'))$('closedrawer').onclick=()=>{sideDrawer.hidden=true};
}

$('railhome').onclick=()=>{sideDrawer.hidden=true;workspaceMode('build')};
$('raillessons').onclick=()=>toggleDrawer('lessons');
$('railparts').onclick=()=>toggleDrawer('parts');
$('railrun').onclick=()=>$('run').click();
$('railcad').onclick=()=>{sideDrawer.hidden=true;workspaceMode('cad')};
$('railrobot').onclick=()=>{sideDrawer.hidden=true;workspaceMode('robotics')};
$('railsettings').onclick=()=>toggleDrawer('settings');
$('raillang').onclick=()=>toggleDrawer('lang');

// 15. Undo / Redo History, Duplicate, Rename, Circuit Diagnostics & Shopping List / BOM Export
let undoStates=[],undoIndex=-1,historyRestoring=false,historyDebounce;
function currentProject(){return{version:4,nodes:structuredClone(nodes),wires:structuredClone(wires),idseq,title:$('projecttitle').textContent}}
function rememberAction(){
  if(historyRestoring)return;
  const state=JSON.stringify(currentProject());
  if(undoStates[undoIndex]===state)return;
  undoStates=undoStates.slice(0,undoIndex+1);
  undoStates.push(state);
  if(undoStates.length>30)undoStates.shift();
  undoIndex=undoStates.length-1;
  historyControls();
}
window.rememberAction=rememberAction;
function historyControls(){
  $('undoaction').disabled=undoIndex<=0;
  $('redoaction').disabled=undoIndex>=undoStates.length-1;
}
function restoreAction(delta){
  clearTimeout(historyDebounce);
  rememberAction();
  if(undoIndex+delta<0||undoIndex+delta>=undoStates.length)return;
  historyRestoring=true;
  stopCode();
  undoIndex+=delta;
  const data=JSON.parse(undoStates[undoIndex]);
  nodes=data.nodes;wires=data.wires;idseq=data.idseq;
  activeBoard=nodes.find(n=>catalog.find(c=>c.type===n.type).board)?.id;
  selected=nodes.find(n=>n.id===selected)?.id??nodes[0]?.id;
  program=null;pinState={};
  $('projecttitle').textContent=data.title;
  renderDetail();update();
  if(!$('codepanel').hidden)openCode(false);
  historyRestoring=false;
  historyControls();
  toast(delta<0?'הפעולה בוטלה':'הפעולה שוחזרה');
}
$('undoaction').onclick=()=>restoreAction(-1);
$('redoaction').onclick=()=>restoreAction(1);

const projectUpdate=update;
update=function(){
  projectUpdate();
  // Check realistic burnout when safetyMode is off
  if(running&&lastSim.current>0.022){
    nodes.filter(n=>n.type==='led'&&lastSim.active?.includes(n.id)).forEach(n=>{
      if(!window.appSettings.safetyMode&&!n.burned){
        n.burned=true;
        toast('🔥 זרם יתר (>20mA)! נורית ה־LED נשרפה במצב מציאותי. הגדילו את הנגד או הפעילו מצב בטיחות.');
      }
    });
  }else{
    nodes.forEach(n=>delete n.burned);
  }
  if(!historyRestoring){
    clearTimeout(historyDebounce);
    historyDebounce=setTimeout(rememberAction,220);
  }
  renderBenchChecks();
};
document.addEventListener('pointerup',()=>{if(drag?.node)setTimeout(rememberAction,0)});

$('duplicatepart').onclick=()=>{
  const n=nodes.find(n=>n.id===selected);
  if(!n)return toast('בחרו רכיב לשכפול');
  rememberAction();
  const clone=structuredClone(n);
  clone.id=++idseq;
  clone.x=Math.min(5,clone.x+.7);
  clone.z=Math.min(4,clone.z+.6);
  nodes.push(clone);
  select(clone.id);
  update();
  rememberAction();
};

const rename=document.createElement('button');
rename.id='renameproject';
rename.title='שינוי שם הפרויקט';
rename.textContent='✎ עריכת שם';
document.querySelector('.projectbar>div').append(rename);
rename.onclick=()=>{
  showModal('<h1>שם הפרויקט</h1><label class="projectnamelabel">בחרו שם שיעזור לכם למצוא את הניסוי<input id="newprojectname" maxlength="80"></label><button id="applyprojectname" class="run">שמירת השם</button>');
  $('newprojectname').value=$('projecttitle').textContent;
  $('applyprojectname').onclick=()=>{
    const name=$('newprojectname').value.trim();
    if(!name)return;
    rememberAction();
    $('projecttitle').textContent=name;
    rememberAction();
    $('modal').close();
  };
};

function wiringDiagnostics(){
  const messages=[];
  const used=new Map();
  for(const w of wires){
    if(w.length!==2||w.some(p=>!nodes.find(n=>n.id===p.id)))messages.push({level:'error',text:'חיבור מתייחס לרכיב שאינו במשטח.'});
    for(const p of w){const k=p.id+':'+p.pin;used.set(k,(used.get(k)||0)+1)}
  }
  for(const n of nodes){
    const c=catalog.find(c=>c.type===n.type);
    if(c.pins.length&&c.pins.every((p,i)=>!used.has(n.id+':'+i)))messages.push({level:'note',text:c.name+' אינו מחובר למעגל.'});
  }
  const result=simulate();
  messages.unshift({level:result.current>0?'ok':result.msg?.includes('קצר')||result.msg?.includes('הפוך')?'error':'note',text:result.msg||'לא קיים מעגל להרצה.'});
  if(result.current>.02&&result.active?.some(id=>nodes.find(n=>n.id===id)?.type==='led')){
    messages.unshift({level:'error',text:window.appSettings.safetyMode?'⚠️ זרם ה־LED גבוה מ־20mA (מצב בטיחות מגן על הרכיב). הגדילו את הנגד הטורי.':'🔥 סכנת שריפה! זרם ה־LED גבוה מ־20mA במצב מציאותי!'});
  }
  return messages;
}

function renderBenchChecks(){
  if(!$('checksummary'))return;
  const now=performance.now();
  if(now-(renderBenchChecks.last||0)<400)return;
  renderBenchChecks.last=now;
  const messages=wiringDiagnostics(),errors=messages.filter(m=>m.level==='error').length;
  $('checksummary').textContent=errors?errors+' אזהרות בחיווט':'✓ בדיקות המעגל והבטיחות';
  $('checklistmini').innerHTML=messages.slice(0,3).map(m=>`<p class="${m.level}">${escapeHtml(m.text)}</p>`).join('');
}

const checks=document.createElement('section');
checks.className='benchchecks';
checks.innerHTML='<div><b id="checksummary">בדיקות המעגל</b><button id="detailchecks">דו״ח חיווט מלא</button></div><div id="checklistmini"></div>';
document.querySelector('.instruments').before(checks);
$('circuitcheck').onclick=$('detailchecks').onclick=()=>{
  const rows=wiringDiagnostics();
  showModal('<span class="eyebrow">BENCH-TWIN CIRCUIT & SAFETY REVIEW</span><h1>דו״ח בדיקת חיווט ובטיחות חשמלית</h1><p>המערכת בודקת רציפות לולאה, קוטביות דיודות, הגבלת זרם בנגדים, חיבורי VCC/GND והתאמת מתחים.</p><div class="diagnostics">'+rows.map(r=>`<p class="${r.level}">${r.level==='ok'?'✓':r.level==='error'?'!':'·'} ${escapeHtml(r.text)}</p>`).join('')+'</div>');
};

function projectBOM(){
  const rows=new Map();
  for(const n of nodes){
    const c=catalog.find(c=>c.type===n.type),key=c.type+':'+n.value+':'+(n.package||'');
    if(!rows.has(key)){
      const lib=n.type==='servo'?'Servo.h':n.type==='lcd'?'LiquidCrystal_I2C.h':n.type==='oled'?'Adafruit_SSD1306.h':['dht11','dht22'].includes(n.type)?'DHT.h':n.type==='ultrasonic'?'NewPing.h (optional)':'Standard Arduino Core';
      rows.set(key,{name:c.name,model:c.en,value:n.value,unit:c.unit,package:n.package||'Through-hole / module',library:lib,quantity:0});
    }
    rows.get(key).quantity++;
  }
  return[...rows.values()];
}
function wiringRows(){
  return wires.map((w,i)=>{
    const ends=w.map(p=>{
      const n=nodes.find(n=>n.id===p.id),c=n&&catalog.find(c=>c.type===n.type);
      return c?c.name+' #'+n.id+' / '+c.pins[p.pin]:'הדק חסר';
    });
    return{id:i+1,from:ends[0],to:ends[1]};
  });
}
function csvCell(s){return'"'+String(s).replaceAll('"','""')+'"'}
$('projectexports').onclick=()=>{
  const bom=projectBOM(),connections=wiringRows();
  showModal(`
    <span class="eyebrow">PROJECT PACKAGE & SHOPPING LIST</span>
    <h1>ייצוא פרויקט, סכמה, מארז STL ורשימת קניות</h1>
    <div class="exportbuttons">
      <button id="bomcsv">📋 רשימת קניות ורכיבים (BOM CSV)</button>
      <button id="wirecsv">⌁ טבלת חיווט (Wiring CSV)</button>
      <button id="wholejson">💾 פרויקט מלא (JSON + קוד)</button>
      <button id="schematicsvg">📐 סכמה הנדסית (SVG)</button>
      <button id="modalexportstl">📦 מארז להדפסת 3D (STL)</button>
    </div>
    <h3>רשימת רכיבים, ברגים וספריות קוד (Shopping List)</h3>
    <table>
      <thead><tr><th>רכיב</th><th>דגם</th><th>ערך</th><th>ספריית קוד</th><th>כמות</th></tr></thead>
      <tbody>
        ${bom.map(r=>`<tr><td>${r.name}</td><td dir="ltr">${r.model}</td><td dir="ltr">${r.value} ${r.unit}</td><td dir="ltr"><code>${r.library}</code></td><td>${r.quantity}</td></tr>`).join('')}
        <tr><td>ברגי הרכבה למארז</td><td dir="ltr">M${$('encscrew')?.value||3} × 8mm Machine Screws</td><td dir="ltr">M${$('encscrew')?.value||3}</td><td dir="ltr">Enclosure CAD</td><td>4</td></tr>
        <tr><td>חוטי גישור (Jumper Wires)</td><td dir="ltr">Male-to-Male / Female DuPont</td><td dir="ltr">20 cm</td><td dir="ltr">—</td><td>${Math.max(4,wires.length)}</td></tr>
      </tbody>
    </table>`);
  $('bomcsv').onclick=()=>download('voltlab-bom.csv','\uFEFF'+[['name','model','value','unit','package','library','quantity'],...bom.map(r=>Object.values(r))].map(r=>r.map(csvCell).join(',')).join('\n'),'text/csv;charset=utf-8');
  $('wirecsv').onclick=()=>download('voltlab-wiring.csv','\uFEFF'+[['wire','from','to'],...connections.map(r=>Object.values(r))].map(r=>r.map(csvCell).join(',')).join('\n'),'text/csv;charset=utf-8');
  $('wholejson').onclick=()=>download('voltlab-project.json',JSON.stringify(currentProject(),null,2));
  $('schematicsvg').onclick=exportSchematic;
  $('modalexportstl').onclick=()=>$('exportstl').click();
};

function exportSchematic(){
  const xml=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
  const pos=n=>({x:500+n.x*70,y:350+n.z*60});
  let svg='<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="700" viewBox="0 0 1000 700"><rect width="1000" height="700" fill="#f6eddd"/><text x="970" y="35" text-anchor="end" font-size="20" font-family="Arial" fill="#172333">'+xml($('projecttitle').textContent)+'</text>';
  for(const w of wires){
    const ends=w.map(p=>{
      const n=nodes.find(n=>n.id===p.id);
      if(!n)return{x:0,y:0};
      const c=catalog.find(c=>c.type===n.type),center=pos(n),count=c.pins.length;
      return{x:center.x+(p.pin<count/2?-50:50),y:center.y+(p.pin%Math.ceil(count/2)-Math.floor(count/4))*10};
    });
    svg+=`<path d="M${ends[0].x} ${ends[0].y} H${(ends[0].x+ends[1].x)/2} V${ends[1].y} H${ends[1].x}" fill="none" stroke="#19776d" stroke-width="2.2"/>`;
  }
  for(const n of nodes){
    const c=catalog.find(c=>c.type===n.type),p=pos(n);
    svg+=`<rect x="${p.x-50}" y="${p.y-25}" width="100" height="50" rx="6" fill="#fffdf8" stroke="#1e2f42" stroke-width="1.5"/><text x="${p.x}" y="${p.y-32}" text-anchor="middle" font-family="Arial" font-size="12" fill="#172333">${xml(c.name)} #${n.id}</text><text x="${p.x}" y="${p.y+5}" text-anchor="middle" font-family="Arial" font-size="11" fill="#2d4860">${n.value} ${xml(c.unit)}</text>`;
    c.pins.forEach((pin,i)=>{
      const count=c.pins.length,x=p.x+(i<count/2?-50:50),y=p.y+(i%Math.ceil(count/2)-Math.floor(count/4))*10;
      svg+=`<circle cx="${x}" cy="${y}" r="3" fill="#19776d"/><text x="${x+(i<count/2?-5:5)}" y="${y-3}" text-anchor="${i<count/2?'end':'start'}" font-family="Arial" font-size="8" fill="#1e2f42">${xml(pin)}</text>`;
    });
  }
  svg+='<text x="25" y="675" font-family="Arial" font-size="11" fill="#5b687a">VoltLab Studio — Logical Connection Schematic</text></svg>';
  download('voltlab-schematic.svg',svg,'image/svg+xml');
}

$('save').onclick=()=>{
  try{
    rememberAction();
    const projects=JSON.parse(localStorage.getItem('voltlab-projects')||'[]');
    projects.unshift({...currentProject(),date:new Date().toLocaleString('he-IL')});
    localStorage.setItem('voltlab-projects',JSON.stringify(projects.slice(0,10)));
    toast('הפרויקט, השם והקוד נשמרו בדפדפן הזה');
  }catch{
    toast('לא ניתן לשמור את הפרויקט בדפדפן הזה');
  }
};

// Clicking a component in 3D canvas can also open the floating inspector popover on double click
canvas.addEventListener('dblclick',e=>{
  const r=canvas.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
  const hit=hits.slice().reverse().find(p=>Math.hypot(p.x-x,p.y-y)<48*zoom);
  if(hit)openComponentInspectorPopover(hit.id);
});

rememberAction();
renderBenchChecks();
applySettings();
