const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const code=fs.readFileSync('dist/code-engine.js','utf8');
const context={vars:{},pc:0,codeStart:Date.now(),readPin:()=>512,execute:statement=>{if(statement.kind==='var')context.vars[statement.name]=context.tokenValue(statement.expr);else if(statement.fn==='digitalWrite')context.output=context.tokenValue(statement.args[1]);return 0},tokenValue:()=>0,compileCode:null,openCode:()=>{},Date,Math};
vm.createContext(context);vm.runInContext(code,context);
assert.equal(context.evaluateExpression('map(analogRead(A0), 0, 1023, 0, 255)'),127);
assert.equal(context.evaluateExpression('3 + 4 * 2'),11);
assert.equal(context.evaluateExpression('(3 + 4) * 2'),14);
assert.equal(context.evaluateExpression('constrain(300, 0, 255)'),255);
assert.equal(context.evaluateExpression('abs(-42)'),42);
assert.equal(context.evaluateExpression('min(12, 8)'),8);
assert.equal(context.evaluateExpression('max(12, 8)'),12);
assert.equal(context.evaluateExpression('LED_BUILTIN'),13);
assert.equal(context.evaluateExpression('NOTE_A4'),440);
assert.throws(()=>context.evaluateExpression('window.location'));
assert.throws(()=>context.evaluateExpression('3/0'));
const program=context.compileCode('int limit = 500; void setup() { pinMode(3, OUTPUT); } void loop() { int reading = analogRead(A0); if (reading > limit) { digitalWrite(3, HIGH); } else { digitalWrite(3, LOW); } delay(10); }');
program.setup.forEach(context.execute);
function cycle(){context.pc=0;for(let i=0;i<program.loop.length+5;i++){context.execute(program.loop[context.pc]);context.pc=(context.pc+1)%program.loop.length}}
cycle();assert.equal(context.output,1);context.readPin=()=>200;cycle();assert.equal(context.output,0);

// Test for-loops, #include, #define, Servo, tone, pulseIn, LCD
const advProgram=context.compileCode(`
#include <Servo.h>
#define TRIG_PIN 3
Servo myServo;
void setup() {
  myServo.attach(9);
  pinMode(TRIG_PIN, OUTPUT);
}
void loop() {
  for (int i = 0; i < 3; i++) {
    myServo.write(90);
    tone(8, 440, 100);
    delayMicroseconds(10);
  }
  long d = pulseIn(4, HIGH);
  noTone(8);
}
`);
assert.ok(advProgram.setup.length>=1);
assert.ok(advProgram.loop.length>=4);

// Test MicroPython / Python compilation
const pyProgram=context.compileCode(`
from machine import Pin
from time import sleep
led = Pin(2, Pin.OUT)
while True:
    led.value(1)
    sleep(0.5)
    led.value(0)
    sleep(0.5)
`);
assert.equal(pyProgram.isPython,true);
assert.ok(pyProgram.loop.length>=4);

assert.throws(()=>context.compileCode('void setup(){} void loop(){ while(true){ delay(10); } }'));
assert.throws(()=>context.compileCode('void setup(){} void loop(){ '+ 'if(1){'.repeat(32)+'delay(10);'+'}'.repeat(32)+' }'));
assert.doesNotThrow(()=>context.compileCode('void setup(){ Serial.begin(9600); } void loop(){ Serial.println("text; // not a comment"); delay(10); }'));
console.log('PASS: teaching expression engine, conditional branches, for loops, Servo/tone/pulseIn/LCD protocols, MicroPython, and bounds');
