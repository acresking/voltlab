# VoltLab capability map

Reference URLs reviewed: https://benchtwin.com/ and https://learn-arduino-red.vercel.app/he/ . Public screens informed the workflow; no proprietary source, branding, lesson text or model catalog was copied. Lesson content and implementation are original to VoltLab. Existing third-party CAD and SVG licenses remain in dist/licenses.

| Area | Implemented | Remaining |
| --- | --- | --- |
| Workspace | Build, wire, code, measurement, learning modes; camera presets; grid; fit; duplicate; undo/redo | Arbitrary panel splitting, object transforms and true mechanical layout |
| Circuit | One ideal DC loop, LED/resistor/switch/LDR/motor approximations, checks | General network solver, analog transients, device failures |
| Code | Restricted Arduino teaching interpreter with variables, expressions, if/else, map, constrain, GPIO, serial | CPU emulation, full compiler, libraries, Python and Java execution |
| Inputs | Abstract digital and normalized analog sensor inputs | Device-specific ADC, I2C, SPI, OneWire, echo timing |
| Catalog | 102 lab/reference entries; 48 front illustrations; 6,189 separately browsable CAD paths | Verified model and pinout for every board revision, 9,357 electrically simulated parts |
| Learning | 16 original Hebrew units; objectives, explanation, pins, guided setup, quiz, verified supported tasks, local progress | Coverage of all protocols and robot platforms |
| Instruments | Live sampled voltage/current, GPIO transitions, freeze, CSV | Full analog oscilloscope and physical multimeter probes |
| Export | JSON with sketch/title, Arduino/Python source export, BOM CSV, wire CSV, logical SVG diagram | KiCad PCB export, model assembly GLB/STL export |
| Storage | Named projects, ten local saves, JSON exchange, 30 undo states | Account-based cloud collaboration |
| CAD | True upstream CAD viewing with WebGL/software fallback | Solid modeling, sketch extrusion, Boolean cuts, manufacturable auto-enclosures |
| Robotics | Not implemented | Dynamics, collision, robot APIs, autonomous control and competition fields |
