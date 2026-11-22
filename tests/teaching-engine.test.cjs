const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const code=fs.readFileSync('dist/code-engine.js','utf8');
const context={vars:{},pc:0,codeStart:Date.now(),readPin:()=>512,execute:statement=>{if(statement.kind==='var')context.vars[statement.name]=context.tokenValue(statement.expr);else if(statement.fn==='digitalWrite')context.output=context.tokenValue(statement.args[1]);return 0},tokenValue:()=>0,compileCode:null,openCode:()=>{},Date};
vm.createContext(context);vm.runInContext(code,context);
assert.equal(context.evaluateExpression('map(analogRead(A0), 0, 1023, 0, 255)'),127);
assert.equal(context.evaluateExpression('3 + 4 * 2'),11);
assert.equal(context.evaluateExpression('(3 + 4) * 2'),14);
assert.throws(()=>context.evaluateExpression('window.location'));
assert.throws(()=>context.evaluateExpression('3/0'));
const program=context.compileCode('int limit = 500; void setup() { pinMode(3, OUTPUT); } void loop() { int reading = analogRead(A0); if (reading > limit) { digitalWrite(3, HIGH); } else { digitalWrite(3, LOW); } delay(10); }');
program.setup.forEach(context.execute);
function cycle(){context.pc=0;for(let i=0;i<program.loop.length+5;i++){context.execute(program.loop[context.pc]);context.pc=(context.pc+1)%program.loop.length}}
cycle();assert.equal(context.output,1);context.readPin=()=>200;cycle();assert.equal(context.output,0);
assert.throws(()=>context.compileCode('void setup(){} void loop(){ while(true){ delay(10); } }'));
assert.throws(()=>context.compileCode('void setup(){} void loop(){ '+ 'if(1){'.repeat(32)+'delay(10);'+'}'.repeat(32)+' }'));
assert.doesNotThrow(()=>context.compileCode('void setup(){ Serial.begin(9600); } void loop(){ Serial.println("text; // not a comment"); delay(10); }'));
console.log('PASS: teaching expression engine, conditional branches, protocol bounds, comments and strings');
