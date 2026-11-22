/* VoltLab Advanced Code & Simulation Engine: Arduino C++ & MicroPython/Python, Protocols, Sounds, Robotics */
const soundState={enabled:true,ctx:null,osc:null,gain:null};
function playBuzzerTone(freq,durationMs=0){
  if(!soundState.enabled||typeof AudioContext==='undefined'&&typeof webkitAudioContext==='undefined')return;
  try{
    const Ctx=window.AudioContext||window.webkitAudioContext;
    if(!soundState.ctx)soundState.ctx=new Ctx();
    if(soundState.ctx.state==='suspended')soundState.ctx.resume();
    stopBuzzerTone();
    if(freq<=0)return;
    const osc=soundState.ctx.createOscillator(),gain=soundState.ctx.createGain();
    osc.type='square';
    osc.frequency.setValueAtTime(Math.max(40,Math.min(12000,freq)),soundState.ctx.currentTime);
    gain.gain.setValueAtTime(0.06,soundState.ctx.currentTime);
    osc.connect(gain);gain.connect(soundState.ctx.destination);
    osc.start();
    soundState.osc=osc;soundState.gain=gain;
    if(durationMs>0){setTimeout(()=>stopBuzzerTone(),Math.min(durationMs,5000))}
  }catch{}
}
function stopBuzzerTone(){
  try{if(soundState.osc){soundState.osc.stop();soundState.osc.disconnect();soundState.osc=null}}catch{}
}
if(typeof window!=='undefined'){
  window.playBuzzerTone=playBuzzerTone;
  window.stopBuzzerTone=stopBuzzerTone;
  window.soundState=soundState;
  window.activeCodeLine=null;
  window.pinTimeline=[];
  window.robotCommand={left:0,right:0,servo:90,tone:0,lcd:['',''],oled:[],neopixel:[]};
}

function recordPinTimeline(pin,val,mode='DIGITAL'){
  if(typeof window==='undefined')return;
  const now=typeof performance!=='undefined'?performance.now():Date.now();
  window.pinTimeline.push({t:now,pin,val,mode});
  if(window.pinTimeline.length>600)window.pinTimeline.shift();
}

function exprTokens(source){
  const result=[];let i=0;
  while(i<source.length){
    if(/\s/.test(source[i])){i++;continue}
    const match=source.slice(i).match(/^(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\d+(?:\.\d+)?|[A-Za-z_][\w.]*|==|!=|<=|>=|&&|\|\||[()+\-*\/%!,<>])/);
    if(!match)throw Error('תו לא נתמך בביטוי: '+source.slice(i, i+15));
    result.push(match[0]);i+=match[0].length;
  }
  return result;
}

function evaluateExpression(source){
  const tokens=exprTokens(String(source));let i=0,depth=0;
  const precedence={'||':1,'or':1,'&&':2,'and':2,'==':3,'!=':3,'<':4,'>':4,'<=':4,'>=':4,'+':5,'-':5,'*':6,'/':6,'%':6};
  function primary(){
    if(++depth>40)throw Error('ביטוי עמוק מדי');
    let value;const t=tokens[i++];
    if(!t)throw Error('חסר ערך בביטוי');
    if(t==='('){
      value=binary(0);
      if(tokens[i++]!==')')throw Error('חסר סוגר');
    }else if(t==='!'||t==='not'||t==='-'||t==='+'){
      const n=primary();
      value=(t==='!'||t==='not')?!n:t==='-'?-Number(n):Number(n);
    }else if(t[0]==='"'||t[0]==="'"){
      value=t.slice(1,-1).replace(/\\n/g,'\n').replace(/\\"/g,'"');
    }else if(/^\d/.test(t)){
      value=Number(t);
    }else if(/^[A-Za-z_][\w.]*$/.test(t)){
      if(tokens[i]==='('){
        i++;const args=[];
        if(tokens[i]!==')'){
          do{args.push(binary(0));if(tokens[i]!==',')break;i++}while(true);
        }
        if(tokens[i++]!==')')throw Error('חסר סוגר לפונקציה '+t);
        const exact=n=>{if(args.length!==n)throw Error('מספר ארגומנטים שגוי: '+t)};
        if(t==='analogRead'||t==='digitalRead'){
          exact(1);value=readPin(args[0],t==='analogRead');
        }else if(t==='pulseIn'){
          if(args.length<2||args.length>3)throw Error('מספר ארגומנטים שגוי: pulseIn');
          let dist=40;
          try{
            const us=typeof nodes!=='undefined'&&nodes.find(n=>n.type==='ultrasonic');
            if(us)dist=Number(us.value)||40;
            else dist=readPin(args[0],true)/1023*200;
          }catch{}
          value=Math.round(dist*58.2);
        }else if(t==='millis'){
          exact(0);value=Date.now()-codeStart;
        }else if(t==='micros'){
          exact(0);value=(Date.now()-codeStart)*1000;
        }else if(t==='map'){
          exact(5);
          if(args[2]===args[1])throw Error('טווח map ריק');
          value=Math.trunc((args[0]-args[1])*(args[4]-args[3])/(args[2]-args[1])+args[3]);
        }else if(t==='constrain'){
          exact(3);value=Math.max(args[1],Math.min(args[2],args[0]));
        }else if(t==='abs'){
          exact(1);value=Math.abs(Number(args[0]));
        }else if(t==='min'){
          exact(2);value=Math.min(Number(args[0]),Number(args[1]));
        }else if(t==='max'){
          exact(2);value=Math.max(Number(args[0]),Number(args[1]));
        }else if(t==='sqrt'){
          exact(1);value=Math.sqrt(Math.max(0,Number(args[0])));
        }else if(t==='pow'){
          exact(2);value=Math.pow(Number(args[0]),Number(args[1]));
        }else if(t==='random'){
          if(args.length===1)value=Math.floor(Math.random()*Number(args[0]));
          else if(args.length===2)value=Math.floor(Number(args[0])+Math.random()*(Number(args[1])-Number(args[0])));
          else throw Error('מספר ארגומנטים שגוי: random');
        }else if(t==='dht.readTemperature'||t==='bme.readTemperature'||t==='bmp.readTemperature'){
          const s=typeof nodes!=='undefined'&&nodes.find(n=>['dht11','dht22','bme280','bmp280','ds18b20','lm35','reference_ntc-temperature-sensor'].includes(n.type));
          value=s?Number(s.value):24.5;
        }else if(t==='dht.readHumidity'||t==='bme.readHumidity'){
          const s=typeof nodes!=='undefined'&&nodes.find(n=>['dht11','dht22','bme280','soil'].includes(n.type));
          value=s?Number(s.value):52;
        }else if(t==='bmp.readPressure'||t==='bme.readPressure'){
          const s=typeof nodes!=='undefined'&&nodes.find(n=>['bmp280','bme280'].includes(n.type));
          value=s?Number(s.value):1013.25;
        }else if(t==='lightMeter.readLightLevel'){
          const s=typeof nodes!=='undefined'&&nodes.find(n=>['bh1750','ldr','reference_photoresistor-sensor'].includes(n.type));
          value=s?Number(s.value):350;
        }else if(t==='mpu.getAngleX'||t==='mpu.getAccelerationX'){
          const s=typeof nodes!=='undefined'&&nodes.find(n=>n.type==='mpu6050');
          value=s?Number(s.value):0;
        }else if(t.endsWith('.read_u16')||t.endsWith('.read')){
          const vName=t.split('.')[0];
          const pinNum=vars['__pin_'+vName]??'A0';
          const raw=readPin(pinNum,true);
          value=t.endsWith('.read_u16')?Math.round(raw*65535/1023):raw;
        }else if(t.endsWith('.value')){
          const vName=t.split('.')[0];
          const pinNum=vars['__pin_'+vName]??2;
          if(args.length===0)value=readPin(pinNum,false);
          else value=args[0]?1:0;
        }else if(t==='str'||t==='String'){
          exact(1);value=String(args[0]);
        }else if(t==='int'){
          exact(1);value=Math.trunc(Number(args[0]));
        }else if(t==='float'){
          exact(1);value=Number(args[0]);
        }else throw Error('פונקציה לא נתמכת: '+t);
      }else if(Object.hasOwn(vars,t)){
        value=vars[t];
      }else if(/^A\d+$/.test(t)||/^GP\d+$/.test(t)||/^GPIO\d+$/.test(t)||/^D\d+$/.test(t)){
        value=t;
      }else if(t==='LED_BUILTIN'){
        value=13;
      }else if(['HIGH','OUTPUT','true','True','Pin.OUT'].includes(t)){
        value=1;
      }else if(['LOW','INPUT','false','False','Pin.IN'].includes(t)){
        value=0;
      }else if(['INPUT_PULLUP','Pin.PULL_UP'].includes(t)){
        value=2;
      }else if(/^NOTE_[A-G]S?\d$/.test(t)){
        const notes={C:261.63,CS:277.18,D:293.66,DS:311.13,E:329.63,F:349.23,FS:369.99,G:392.00,GS:415.30,A:440.00,AS:466.16,B:493.88};
        const m=t.match(/^NOTE_([A-G]S?)(\d)$/);
        value=Math.round((notes[m[1]]||440)*Math.pow(2,Number(m[2])-4));
      }else throw Error('משתנה לא מוגדר: '+t);
    }else throw Error('ביטוי לא תקין: '+t);
    depth--;return value;
  }
  function binary(min){
    let left=primary();
    while(i<tokens.length&&precedence[tokens[i]]>=min){
      const op=tokens[i++],right=binary(precedence[op]+1);
      switch(op){
        case'+':left=left+right;break;
        case'-':left=left-right;break;
        case'*':left=left*right;break;
        case'/':if(+right===0)throw Error('חלוקה באפס');left=left/right;break;
        case'%':if(+right===0)throw Error('חלוקה באפס');left=left%right;break;
        case'==':left=left===right;break;
        case'!=':left=left!==right;break;
        case'<':left=left<right;break;
        case'>':left=left>right;break;
        case'<=':left=left<=right;break;
        case'>=':left=left>=right;break;
        case'&&':case'and':left=!!left&&!!right;break;
        case'||':case'or':left=!!left||!!right;break;
      }
    }
    return left;
  }
  const result=binary(0);
  if(i!==tokens.length)throw Error('שארית לא תקינה בביטוי');
  if(typeof result==='number'&&!Number.isFinite(result))throw Error('תוצאה מספרית לא תקינה');
  return result;
}

function splitArguments(source){
  const args=[];let depth=0,start=0,quote=null,escape=false;
  for(let i=0;i<source.length;i++){
    const c=source[i];
    if(escape){escape=false;continue}
    if(c==='\\'&&quote){escape=true;continue}
    if((c==='"'||c==="'")&&(!quote||quote===c)){quote=quote?null:c;continue}
    if(quote)continue;
    if(c==='(')depth++;
    if(c===')')depth--;
    if(c===','&&depth===0){args.push(source.slice(start,i).trim());start=i+1}
  }
  if(source.trim())args.push(source.slice(start).trim());
  return args;
}

function compilePythonCode(code){
  const lines=code.split(/\r?\n/);
  const setup=[],loop=[];
  let inLoop=false;
  for(let idx=0;idx<lines.length;idx++){
    const raw=lines[idx],lineNum=idx+1;
    const stripped=raw.replace(/#.*$/,'').trim();
    if(!stripped)continue;
    if(/^from\s+|^import\s+/.test(stripped))continue;
    if(/^while\s+(True|1)\s*:/.test(stripped)){inLoop=true;continue}
    const target=inLoop?loop:setup;
    let m;
    if((m=stripped.match(/^(\w+)\s*=\s*(?:LED|Pin|PWM|ADC)\s*\(\s*([^,)]+)(?:\s*,\s*([^)]+))?\s*\)$/))){
      const varName=m[1],pinExpr=m[2].trim();
      target.push({kind:'py_pin_init',varName,pinExpr,mode:m[3]||'OUT',line:lineNum});
      continue;
    }
    if((m=stripped.match(/^(\w+)\.(on|off|toggle)\s*\(\s*\)$/))){
      target.push({kind:'py_pin_act',varName:m[1],act:m[2],line:lineNum});
      continue;
    }
    if((m=stripped.match(/^(\w+)\.(value|duty_u16|duty)\s*\(\s*([^)]+)\s*\)$/))){
      target.push({kind:'py_pin_val',varName:m[1],method:m[2],expr:m[3],line:lineNum});
      continue;
    }
    if((m=stripped.match(/^(?:time\.)?sleep(?:_ms)?\s*\(\s*([^)]+)\s*\)$/))){
      const isMs=stripped.includes('sleep_ms');
      target.push({kind:'call',fn:'delay',args:[isMs?m[1]:`(${m[1]})*1000`],line:lineNum});
      continue;
    }
    if((m=stripped.match(/^print\s*\(\s*(.*)\s*\)$/))){
      const args=splitArguments(m[1]);
      target.push({kind:'py_print',args,line:lineNum});
      continue;
    }
    if((m=stripped.match(/^([A-Za-z_]\w*)\s*=\s*([^=].*)$/))){
      target.push({kind:'var',name:m[1],expr:m[2],line:lineNum});
      continue;
    }
  }
  if(!loop.length&&setup.length){loop.push(...setup,{kind:'call',fn:'delay',args:['500'],line:lines.length})}
  return{setup,loop,isPython:true};
}

function compileTeachingCode(code){
  if(code.length>100000)throw Error('הסקיצה גדולה מדי');
  if(/^\s*(?:from\s+\w+\s+import|import\s+(?:machine|time|gpiozero)|while\s+True\s*:)/m.test(code)&&!/void\s+setup\s*\(/.test(code)){
    return compilePythonCode(code);
  }
  // Preprocess #include and #define
  const defines={};
  const preprocessed=code.replace(/^[ \t]*#include[ \t]+[<"][^>"]+[>"][ \t]*$/gm,'')
    .replace(/^[ \t]*#define[ \t]+([A-Za-z_]\w*)[ \t]+([^\r\n]+)$/gm,(_,k,v)=>{defines[k]=v.trim();return ''});
  let expanded=preprocessed;
  for(const [k,v] of Object.entries(defines)){
    expanded=expanded.replace(new RegExp(`\\b${k}\\b`,'g'),v);
  }
  const cleaned=expanded.replace(/"(?:\\.|[^"\\])*"|\/\*[\s\S]*?\*\/|\/\/[^\n]*/g,s=>s.startsWith('"')?s:s.replace(/[^\n]/g,' '));
  let at=0;
  function skip(){while(/\s/.test(cleaned[at]||'')&&at<cleaned.length)at++}
  function lineAt(pos){return cleaned.slice(0,pos).split('\n').length}
  function readBalanced(open,close){
    skip();if(cleaned[at]!==open)throw Error('ציפיתי ל־'+open);
    let depth=1,start=++at,quote=false;
    while(at<cleaned.length){
      const c=cleaned[at++];
      if(c==='\\'&&quote){at++;continue}
      if(c==='"'){quote=!quote;continue}
      if(quote)continue;
      if(c===open)depth++;
      if(c===close){depth--;if(depth===0)return cleaned.slice(start,at-1)}
    }
    throw Error('חסר '+close);
  }
  const functions={},globals=[];
  while(at<cleaned.length){
    skip();if(at>=cleaned.length)break;
    const fn=cleaned.slice(at).match(/^void\s+(setup|loop)\s*\(\s*\)/);
    if(fn){
      at+=fn[0].length;
      if(functions[fn[1]]!==undefined)throw Error('פונקציה כפולה: '+fn[1]);
      functions[fn[1]]=readBalanced('{','}');
    }else{
      let start=at,quote=false;
      while(at<cleaned.length){
        const c=cleaned[at++];
        if(c==='"')quote=!quote;
        if(c===';'&&!quote)break;
        if(c==='{'&&!quote)throw Error('נתמכות setup ו־loop בלבד');
      }
      globals.push(cleaned.slice(start,at));
    }
  }
  if(functions.setup===undefined||functions.loop===undefined)throw Error('יש להגדיר void setup() ו־void loop()');
  let parseDepth=0;
  function statements(source,allowControl=true){
    if(++parseDepth>30)throw Error('יותר מדי בלוקים מקוננים');
    let pos=0;const out=[];
    const space=()=>{while(pos<source.length&&/\s/.test(source[pos]))pos++};
    function region(open,close){
      space();if(source[pos++]!==open)throw Error('חסר '+open);
      const begin=pos;let level=1,quote=false;
      while(pos<source.length){
        const c=source[pos++];
        if(c==='\\'&&quote){pos++;continue}
        if(c==='"'){quote=!quote;continue}
        if(quote)continue;
        if(c===open)level++;
        if(c===close&&--level===0)return source.slice(begin,pos-1);
      }
      throw Error('חסר '+close);
    }
    while(pos<source.length){
      space();if(pos>=source.length)break;
      if(/^if\b/.test(source.slice(pos))){
        if(!allowControl)throw Error('תנאים נתמכים בתוך loop בלבד');
        pos+=2;
        const cond=region('(',')'),yes=statements(region('{','}'));
        space();let no=[];
        if(/^else\s+if\b/.test(source.slice(pos))){
          pos+=4;
          no=statements(source.slice(pos));
          pos=source.length;
        }else if(/^else\b/.test(source.slice(pos))){
          pos+=4;no=statements(region('{','}'));
        }
        out.push({kind:'if',cond,yes,no});
        continue;
      }
      if(/^for\b/.test(source.slice(pos))){
        if(!allowControl)throw Error('לולאות for נתמכות בתוך loop בלבד');
        pos+=3;
        const header=region('(',')'),body=statements(region('{','}'));
        const parts=header.split(';').map(s=>s.trim());
        if(parts.length!==3)throw Error('מבנה for לא תקין');
        const initMatch=parts[0].match(/^(?:int\s+)?([A-Za-z_]\w*)\s*=\s*(.+)$/);
        if(!initMatch)throw Error('אתחול for לא תקין');
        let stepStmt;
        const sm=parts[2].match(/^([A-Za-z_]\w*)(?:\+\+|--|\+=\s*(.+)|-=\s*(.+))$/);
        if(!sm)throw Error('צעד for לא נתמך: '+parts[2]);
        const v=sm[1];
        const stepExpr=parts[2].endsWith('++')?`${v} + 1`:parts[2].endsWith('--')?`${v} - 1`:sm[2]?`${v} + (${sm[2]})`:`${v} - (${sm[3]})`;
        stepStmt={kind:'var',name:v,expr:stepExpr};
        out.push({kind:'for',init:{kind:'var',name:initMatch[1],expr:initMatch[2]},cond:parts[1],step:stepStmt,body});
        continue;
      }
      const begin=pos;let quote=false,par=0;
      while(pos<source.length){
        const c=source[pos++];
        if(c==='\\'&&quote){pos++;continue}
        if(c==='"')quote=!quote;
        if(!quote){
          if(c==='(')par++;
          if(c===')')par--;
          if(c===';'&&par===0)break;
          if(c==='{'||c==='}')throw Error('בלוק לא נתמך');
        }
      }
      if(source[pos-1]!==';')throw Error('חסר ; בסוף פקודה');
      const text=source.slice(begin,pos-1).trim();
      if(!text)continue;
      // Ignore hardware object declarations like Servo myServo; LiquidCrystal_I2C lcd(...);
      if(/^(?:Servo|DHT|Adafruit_SSD1306|Adafruit_BME280|Adafruit_BMP280|LiquidCrystal_I2C|MPU6050|BH1750|Adafruit_NeoPixel)\s+\w+/.test(text)){
        continue;
      }
      // Increment/decrement shorthand: x++; x--; x += y; x -= y;
      const inc=text.match(/^([A-Za-z_]\w*)\s*(\+\+|--|\+=|-=)\s*(.*)$/);
      if(inc){
        const v=inc[1],op=inc[2],rhs=inc[3];
        const expr=op==='++'?`${v} + 1`:op==='--'?`${v} - 1`:op==='+='?`${v} + (${rhs})`:`${v} - (${rhs})`;
        out.push({kind:'var',name:v,expr});
        continue;
      }
      const variable=text.match(/^(?:(?:const\s+)?(?:int|float|double|long|bool|boolean|byte|char\s*\*|String|unsigned\s+long|uint8_t|uint16_t)\s+)?([A-Za-z_]\w*)\s*=\s*([^=].*)$/s);
      if(variable){out.push({kind:'var',name:variable[1],expr:variable[2]});continue}
      const declOnly=text.match(/^(?:int|float|double|long|bool|boolean|byte|String|unsigned\s+long)\s+([A-Za-z_]\w*)$/);
      if(declOnly){out.push({kind:'var',name:declOnly[1],expr:'0'});continue}
      const m=text.match(/^([A-Za-z_][\w.]*)\s*\(([\s\S]*)\)$/);
      if(!m)throw Error('פקודה לא נתמכת: '+text.slice(0,70));
      const fn=m[1],args=splitArguments(m[2]);
      const coreFns=['pinMode','digitalWrite','analogWrite','delay','delayMicroseconds','tone','noTone','Serial.begin','Serial.print','Serial.println'];
      const protoPattern=/^(?:\w+\.(?:attach|write|begin|init|backlight|clear|setCursor|print|println|display|clearDisplay|setTextSize|setTextColor|drawRect|fillRect|drawCircle|setPixelColor|show)|Wire\.begin)$/;
      if(coreFns.includes(fn)){
        if(['pinMode','digitalWrite','analogWrite'].includes(fn)&&args.length!==2)throw Error('מספר ארגומנטים שגוי: '+fn);
        if(['delay','delayMicroseconds','noTone','Serial.begin','Serial.print','Serial.println'].includes(fn)&&args.length!==1)throw Error('מספר ארגומנטים שגוי: '+fn);
        if(fn==='tone'&&(args.length<2||args.length>3))throw Error('מספר ארגומנטים שגוי: tone');
        out.push({kind:'call',fn,args});
      }else if(protoPattern.test(fn)){
        out.push({kind:'proto',fn,args});
      }else{
        throw Error('פקודה לא נתמכת: '+text.slice(0,70));
      }
    }
    parseDepth--;return out;
  }
  function lower(list,out=[],guard={loops:0}){
    for(const s of list){
      if(s.kind==='if'){
        const check={kind:'branch',cond:s.cond,target:0};
        out.push(check);
        lower(s.yes,out,guard);
        const jump={kind:'jump',target:0};
        out.push(jump);
        check.target=out.length;
        lower(s.no,out,guard);
        jump.target=out.length;
      }else if(s.kind==='for'){
        out.push(s.init);
        const loopTop=out.length;
        const check={kind:'branch',cond:s.cond,target:0,maxIter:256};
        out.push(check);
        lower(s.body,out,guard);
        out.push(s.step);
        out.push({kind:'jump',target:loopTop});
        check.target=out.length;
      }else{
        out.push(s);
      }
    }
    return out;
  }
  const setup=statements(globals.join('\n')+'\n'+functions.setup,false);
  return{setup,loop:lower(statements(functions.loop))};
}

function executeProto(stmt){
  const fn=stmt.fn,args=stmt.args.map(evaluateExpression);
  if(fn.endsWith('.attach')){
    vars['__servo_pin']=args[0];
    return 0;
  }
  if(fn.endsWith('.write')){
    const angle=Math.max(0,Math.min(180,Number(args[0])||0));
    if(typeof nodes!=='undefined'){
      nodes.filter(n=>n.type==='servo'||n.type==='reference_servo').forEach(n=>n.value=angle);
    }
    if(typeof window!=='undefined'&&window.robotCommand)window.robotCommand.servo=angle;
    recordPinTimeline('SERVO',angle,'SERVO');
    return 15;
  }
  if(fn.endsWith('.clear')||fn.endsWith('.clearDisplay')){
    if(typeof window!=='undefined'&&window.robotCommand){
      window.robotCommand.lcd=['',''];
      window.robotCommand.oled=[];
    }
    return 0;
  }
  if(fn.endsWith('.setCursor')){
    vars['__lcd_col']=Number(args[0])||0;
    vars['__lcd_row']=Number(args[1])||0;
    return 0;
  }
  if(fn.endsWith('.print')||fn.endsWith('.println')){
    const row=Math.max(0,Math.min(1,vars['__lcd_row']||0));
    const text=String(args[0]??'');
    if(typeof window!=='undefined'&&window.robotCommand){
      window.robotCommand.lcd[row]=(window.robotCommand.lcd[row]||'')+text;
      window.robotCommand.oled.push(text);
      if(window.robotCommand.oled.length>4)window.robotCommand.oled.shift();
    }
    if(typeof nodes!=='undefined'){
      nodes.filter(n=>['lcd','oled','reference_lcd1602','reference_lcd2004','reference_ili9341'].includes(n.type)).forEach(n=>{
        n.displayText=(window.robotCommand?.lcd||[]).filter(Boolean).join(' | ')||text;
      });
    }
    return 0;
  }
  if(fn.endsWith('.setPixelColor')){
    const idx=Number(args[0])||0,r=Number(args[1])||0,g=Number(args[2])||0,b=Number(args[3])||0;
    if(typeof window!=='undefined'&&window.robotCommand){
      window.robotCommand.neopixel[idx]=`rgb(${r},${g},${b})`;
    }
    return 0;
  }
  return 0;
}

const legacyExecute=typeof execute==='function'?execute:()=>0;
tokenValue=evaluateExpression;
compileCode=compileTeachingCode;
execute=function(stmt){
  if(!stmt)return 0;
  if(typeof window!=='undefined'&&stmt.line)window.activeCodeLine=stmt.line;
  if(stmt.kind==='branch'){
    stmt._hits=(stmt._hits||0)+1;
    if(stmt.maxIter&&stmt._hits>stmt.maxIter){stmt._hits=0;throw Error('הלולאה חרגה ממספר האיטרציות המרבי')}
    if(!evaluateExpression(stmt.cond)){stmt._hits=0;pc=stmt.target-1}
    return 0;
  }
  if(stmt.kind==='jump'){pc=stmt.target-1;return 0}
  if(stmt.kind==='proto')return executeProto(stmt);
  if(stmt.kind==='py_pin_init'){
    const pinVal=evaluateExpression(stmt.pinExpr);
    vars['__pin_'+stmt.varName]=pinVal;
    try{
      const b=typeof board==='function'&&board();
      if(b){
        const p=logicalPin(b,pinVal);
        pinModes[p]=String(stmt.mode).includes('IN')?0:1;
      }
    }catch{}
    return 0;
  }
  if(stmt.kind==='py_pin_act'){
    const pinVal=vars['__pin_'+stmt.varName]??2;
    const b=typeof board==='function'&&board();
    if(b){
      const p=logicalPin(b,pinVal);
      pinModes[p]=1;
      pinState[p]=stmt.act==='on'?1:stmt.act==='off'?0:(pinState[p]?0:1);
      recordPinTimeline(p,pinState[p],'GPIO');
    }
    return 10;
  }
  if(stmt.kind==='py_pin_val'){
    const pinVal=vars['__pin_'+stmt.varName]??2;
    const val=evaluateExpression(stmt.expr);
    const b=typeof board==='function'&&board();
    if(b){
      const p=logicalPin(b,pinVal);
      pinModes[p]=1;
      pinState[p]=stmt.method==='duty_u16'?Math.max(0,Math.min(1,val/65535)):stmt.method==='duty'?Math.max(0,Math.min(1,val/1023)):(val?1:0);
      recordPinTimeline(p,pinState[p],stmt.method==='value'?'GPIO':'PWM');
    }
    return 10;
  }
  if(stmt.kind==='py_print'){
    const out=stmt.args.map(evaluateExpression).join(' ');
    if(typeof log==='function')log(out,true);
    return 10;
  }
  if(stmt.kind==='call'){
    if(stmt.fn==='delayMicroseconds'){
      const us=evaluateExpression(stmt.args[0]);
      return Math.max(2,Math.round(us/1000));
    }
    if(stmt.fn==='tone'){
      const pin=evaluateExpression(stmt.args[0]);
      const freq=Number(evaluateExpression(stmt.args[1]))||440;
      const dur=stmt.args[2]?Number(evaluateExpression(stmt.args[2])):0;
      playBuzzerTone(freq,dur);
      if(typeof nodes!=='undefined'){
        nodes.filter(n=>n.type==='buzzer').forEach(n=>{n.value=1;n.freq=freq});
      }
      recordPinTimeline('D'+pin,freq,'TONE');
      return dur>0?Math.min(dur,500):15;
    }
    if(stmt.fn==='noTone'){
      stopBuzzerTone();
      if(typeof nodes!=='undefined'){
        nodes.filter(n=>n.type==='buzzer').forEach(n=>{n.value=0;n.freq=0});
      }
      return 10;
    }
  }
  const res=legacyExecute(stmt);
  if(stmt.kind==='call'&&(stmt.fn==='digitalWrite'||stmt.fn==='analogWrite')){
    try{
      const b=typeof board==='function'&&board();
      if(b){
        const p=logicalPin(b,evaluateExpression(stmt.args[0]));
        recordPinTimeline(p,pinState[p]||0,stmt.fn==='analogWrite'?'PWM':'DIGITAL');
      }
    }catch{}
  }
  return res;
};

if(typeof initializeCode==='function'){
  initializeCode=function(){
    const b=board();
    if(!b)throw Error('הוסיפו לוח לפני הרצת קוד');
    b.code=$('editor').value;
    program=compileCode(b.code);
    vars={};pinState={};pinModes={};pc=0;stepCount=0;
    if(typeof window!=='undefined'){window.pinTimeline=[];window.activeCodeLine=null}
    for(const stmt of program.setup){
      if(stmt.fn==='delay'&&!program.isPython)throw Error('delay ב־setup אינו נתמך במפרש הזה');
      execute(stmt);
    }
    if(!program.loop.length)throw Error('loop ריקה');
    codeStart=Date.now();
    showPins();
  };
}

if(typeof stopCode==='function'){
  const baseStopCode=stopCode;
  stopCode=function(reset=true){
    stopBuzzerTone();
    baseStopCode(reset);
  };
}

if(typeof openCode==='function'){
  const teachingOpenCode=openCode;
  openCode=function(force){
    teachingOpenCode(force);
    const warn=typeof document!=='undefined'&&document.querySelector('.codewarning');
    if(warn&&typeof board==='function'&&board()){
      const c=catalog.find(x=>x.type===board().type);
      warn.textContent=c.python
        ?'מפרש Python / MicroPython חי: תומך ב־Pin, LED, PWM, ADC, sleep, print, משתנים וחישובים בזמן אמת.'
        :'מפרש Arduino C++ מורחב: setup/loop, משתנים, if/else, לולאות for, GPIO, PWM, tone/noTone, pulseIn, Servo, LCD/OLED, חיישני DHT/BME/MPU ו־Serial Monitor.';
    }
  };
}
