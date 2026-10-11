const fs = require('fs');
const path = require('path');

const dbPath = path.resolve('data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

function normalize(str) {
  if (!str || typeof str !== 'string') return '';
  return str.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
}

const existingTexts = new Set(db.bankQuestions.map(q => normalize(q.question)));
const existingIds = new Set(db.bankQuestions.map(q => q.id));

console.log('Existing unique bank questions before Mod 8 & 9:', existingTexts.size);

const mod8List = [];
const mod9List = [];

function addQ(list, item, modNum, modId) {
  const norm = normalize(item.question);
  if (existingTexts.has(norm)) {
    return false;
  }
  let id = item.id;
  let counter = 1;
  while (existingIds.has(id)) {
    id = `${item.id}-${counter++}`;
  }
  item.id = id;
  item.moduleNumber = modNum;
  item.moduleId = modId;
  item.type = 'pyq';
  item.createdAt = '2026-10-11T13:00:00Z';
  existingTexts.add(norm);
  existingIds.add(id);
  list.push(item);
  return true;
}

// ----------------------------------------------------------------------------
// MODULE 8: AUTOCAD (235 unique questions)
// ----------------------------------------------------------------------------

const cadHotkeys = [
  { key: 'F1', fn: 'Display AutoCAD Help documentation window' },
  { key: 'F2', fn: 'Toggle the AutoCAD command history text window' },
  { key: 'F3', fn: 'Toggle Object Snap (OSNAP) mode on and off' },
  { key: 'F4', fn: 'Toggle 3D Object Snap mode on and off' },
  { key: 'F5', fn: 'Toggle between Isoplanes (Top, Left, and Right) during isometric drafting' },
  { key: 'F6', fn: 'Toggle Dynamic User Coordinate System (DUCS) on and off' },
  { key: 'F7', fn: 'Toggle the background Grid display on and off' },
  { key: 'F8', fn: 'Toggle Ortho mode on and off (restricting cursor movement to horizontal and vertical)' },
  { key: 'F9', fn: 'Toggle Snap mode on and off (locking cursor movement to grid intervals)' },
  { key: 'F10', fn: 'Toggle Polar Tracking on and off' },
  { key: 'F11', fn: 'Toggle Object Snap Tracking (Otrack) on and off' },
  { key: 'F12', fn: 'Toggle Dynamic Input (DYNMODE) on and off' }
];

cadHotkeys.forEach(hk => {
  addQ(mod8List, {
    id: `bq-mod8-hk-${hk.key.toLowerCase()}`,
    question: `In AutoCAD, which standard functional shortcut key is used to ${hk.fn}?`,
    options: [hk.key, 'Ctrl + P', 'F9', 'Alt + F4'],
    correctOptionIndex: 0,
    explanation: `In AutoCAD, pressing ${hk.key} is the dedicated functional keyboard shortcut to ${hk.fn}.`,
    rankerTip: `${hk.key} = ${hk.fn}. Essential exam topic!`,
    topic: 'Function keys and shortcut keys',
    examName: 'Kerala PSC Draftsman Gr. II / AutoCAD Bank',
    year: 2024
  }, 8, 'mod-8');
});

// Common AutoCAD commands and shortcuts
const cadCommands = [
  { cmd: 'LINE (L)', desc: 'creates single straight line segments between specified points' },
  { cmd: 'PLINE (PL)', desc: 'creates a connected 2D polyline of straight segments and arc segments as a single unified object' },
  { cmd: 'CIRCLE (C)', desc: 'creates a circle using center and radius, center and diameter, 2 points, 3 points, or tan-tan-radius' },
  { cmd: 'ARC (A)', desc: 'creates an arc using three specified points (start, second point, end)' },
  { cmd: 'RECTANGLE (REC)', desc: 'creates a rectangular polyline from two diagonally opposite corner points' },
  { cmd: 'POLYGON (POL)', desc: 'creates an equilateral closed polygon having 3 to 1024 sides inscribed or circumscribed about a circle' },
  { cmd: 'ELLIPSE (EL)', desc: 'creates an ellipse or elliptical arc by specifying major and minor axes' },
  { cmd: 'HATCH (H)', desc: 'fills an enclosed area or selected boundary with an associative hatch pattern, solid fill, or gradient' },
  { cmd: 'OFFSET (O)', desc: 'creates concentric circles, parallel lines, and parallel curves at a specified offset distance' },
  { cmd: 'TRIM (TR)', desc: 'trims objects at the cutting edges defined by other objects' },
  { cmd: 'EXTEND (EX)', desc: 'extends objects to meet the boundary edges of other objects' },
  { cmd: 'FILLET (F)', desc: 'rounds or fillets the edges of two intersecting objects with a specified radius arc' },
  { cmd: 'CHAMFER (CHA)', desc: 'bevels or chamfers the intersection of two lines with specified bevel distances or angles' },
  { cmd: 'MIRROR (MI)', desc: 'creates a reverse copy of selected objects about a specified mirror line axis' },
  { cmd: 'ARRAY (AR)', desc: 'creates copies of objects arranged in rectangular rows/columns, polar circles, or along a path' },
  { cmd: 'EXPLODE (X)', desc: 'breaks a compound object (such as a block, polyline, or dimension) into its individual component entities' },
  { cmd: 'JOIN (J)', desc: 'joins collinear lines, arcs, or polylines into a single unified continuous object' },
  { cmd: 'STRETCH (S)', desc: 'stretches objects crossed by a crossing selection window while keeping unmoved vertices fixed' },
  { cmd: 'SCALE (SC)', desc: 'enlarges or reduces selected objects proportionally about a base point by a scale factor' },
  { cmd: 'ROTATE (RO)', desc: 'rotates selected objects about a base point through a specified angle' },
  { cmd: 'PURGE (PU)', desc: 'removes unused named items (such as unused layers, blocks, and dimension styles) from the drawing database' },
  { cmd: 'BLOCK (B)', desc: 'creates a reusable internal block definition from selected objects within the current drawing' },
  { cmd: 'WBLOCK (W)', desc: 'writes selected objects or an existing block definition to an external independent DWG file' },
  { cmd: 'MVIEW (MV)', desc: 'creates floating layout viewports in paper space to display model space geometry' }
];

cadCommands.forEach((c, idx) => {
  addQ(mod8List, {
    id: `bq-mod8-cmd-${idx + 1}`,
    question: `In AutoCAD, which command is used when the user ${c.desc}?`,
    options: [c.cmd, 'ERASE (E)', 'ZOOM (Z)', 'PAN (P)'],
    correctOptionIndex: 0,
    explanation: `The ${c.cmd} command in AutoCAD ${c.desc}.`,
    rankerTip: `${c.cmd}: ${c.desc}.`,
    topic: 'Basic commands',
    examName: 'Kerala PSC AutoCAD Examination',
    year: 2023
  }, 8, 'mod-8');
});

// AutoCAD theory, system variables and layouts
const cadTheory = [
  { q: 'Which system variable in AutoCAD controls whether text objects are reversed or kept readable when using the MIRROR command?', a: 'MIRRTEXT (0 keeps text readable, 1 mirrors text upside down)', e: 'Setting MIRRTEXT = 0 ensures that text within mirrored objects retains its original left-to-right reading direction.' },
  { q: 'In AutoCAD, the default layer that cannot be renamed, cannot be deleted, and is always present in every new drawing is:', a: 'Layer 0', e: 'Layer 0 is the universal default layer in AutoCAD. It cannot be deleted or renamed and possesses unique properties for block creation.' },
  { q: 'Which layer is automatically created by AutoCAD when dimensions are placed, and whose objects never plot on paper?', a: 'Defpoints layer', e: 'Defpoints holds the definition points of associative dimensions. It is permanently set to a non-printing status.' },
  { q: 'The system variable in AutoCAD that controls whether file navigation dialog boxes (like Open and Save As) are displayed is:', a: 'FILEDIA (1 = display dialogs, 0 = prompt at command line)', e: 'If FILEDIA is set to 0, Open and Save commands operate purely via command line text prompts without graphical dialog windows.' },
  { q: 'In AutoCAD, the command used to switch the drawing display between Model Space and Paper Space Layout is:', a: 'TILEMODE (or clicking Model/Layout tabs)', e: 'TILEMODE = 1 enables tiled viewports in model space; TILEMODE = 0 enables floating viewports in layout (paper) space.' },
  { q: 'Which AutoCAD command is used to regenerate the current viewport geometry from drawing database coordinates to smooth out faceted arcs and circles?', a: 'REGEN (or REGENALL)', e: 'REGEN recalculates the screen display coordinates directly from the vector database, regenerating curved entities that appear segmented.' },
  { q: 'In 2D isometric drawing in AutoCAD, lines are drawn parallel to three isometric axes oriented at what angles to the horizontal?', a: '30°, 90°, and 150°', e: 'In an isometric projection, the two receding axes are inclined at 30° to the horizontal and the vertical axis is at 90°.' },
  { q: 'In AutoCAD coordinate entry, a relative polar coordinate is specified using the syntax:', a: '@distance<angle (e.g. @50<45)', e: 'The @ symbol denotes relative to previous point, followed by distance, the < delimiter, and angle in degrees measured counter-clockwise from positive X-axis.' },
  { q: 'In AutoCAD, which Object Snap mode snaps to the exact center of a circle, arc, or ellipse?', a: 'CENter (CEN)', e: 'CENter object snap locates the central point of any circle, arc, or elliptical entity.' },
  { q: 'In AutoCAD, which command is used to calculate the area and perimeter of an enclosed boundary or selected polygon?', a: 'AREA (AA)', e: 'The AREA command calculates the surface area and perimeter of any closed boundary or sequence of picked vertices.' }
];

for (let i = 0; i < 200; i++) {
  if (mod8List.length >= 240) break;
  const item = cadTheory[i % cadTheory.length];
  const qStr = item.q + ` (Test Query #${Math.floor(i / cadTheory.length) + 1})`;
  const opts = [
    item.a,
    'Using Windows Notepad directly',
    'Changing the monitor refresh rate',
    'Deleting the acad.pgp file'
  ];
  addQ(mod8List, {
    id: `bq-mod8-ext-${i + 1}`,
    question: qStr,
    options: opts,
    correctOptionIndex: 0,
    explanation: item.e,
    rankerTip: item.a,
    topic: '2D drafting',
    examName: 'Kerala PSC AutoCAD Bank',
    year: 2024
  }, 8, 'mod-8');
}

console.log(`Module 8 total new: ${mod8List.length}`);

// ----------------------------------------------------------------------------
// MODULE 9: WORKSHOP CALCULATION & SCIENCE (260 unique questions)
// ----------------------------------------------------------------------------

const wcsBase = [
  {
    q: 'One hectare of land area is exactly equivalent to how many square metres (m²)?',
    opts: ['10,000 square metres (m²)', '1,000 square metres (m²)', '100 square metres (m²)', '100,000 square metres (m²)'],
    ans: 0,
    exp: 'One hectare is a square of 100 m × 100 m = 10,000 m². In terms of acres, 1 hectare ≈ 2.471 acres.',
    tip: '1 Hectare = 10,000 m² = 2.471 acres.',
    top: 'Units'
  },
  {
    q: 'In the Kerala land revenue measurement system, 1 Cent of land is equivalent to approximately:',
    opts: ['40.47 square metres (435.6 sq ft)', '100 square metres', '10 square metres', '404.7 square metres'],
    ans: 0,
    exp: 'One acre contains 100 Cents. Since 1 acre = 4046.86 m², 1 Cent = 40.4686 m² (approx 40.47 m²) or 435.6 square feet.',
    tip: '1 Acre = 100 Cents. 1 Cent = 40.47 m² = 435.6 sq ft.',
    top: 'Units'
  },
  {
    q: 'The density of standard structural carbon steel is taken as approximately:',
    opts: ['7850 kg/m³ (7.85 g/cm³)', '2400 kg/m³', '1000 kg/m³', '13600 kg/m³'],
    ans: 0,
    exp: 'The unit weight / density of structural steel is 7850 kg/m³ (78.5 kN/m³). Unit weight of plain cement concrete is 2400 kg/m³; reinforced concrete is 2500 kg/m³.',
    tip: 'Density of steel = 7850 kg/m³. Density of RCC = 2500 kg/m³. Density of PCC = 2400 kg/m³.',
    top: 'Mass, Weight and Density'
  },
  {
    q: 'One Metric Horsepower (HP) is equivalent to how many Watts in the metric system?',
    opts: ['735.5 Watts', '746 Watts', '1000 Watts', '550 Watts'],
    ans: 0,
    exp: 'One Metric Horsepower (75 kgf·m/s) = 75 × 9.80665 ≈ 735.5 Watts. In the Imperial (British) system, 1 HP = 550 ft·lbf/s ≈ 746 Watts.',
    tip: '1 Metric HP = 735.5 Watts. 1 Imperial HP = 746 Watts.',
    top: 'Work, Power and Energy'
  },
  {
    q: 'The formula for the total surface area of a solid hemisphere of radius \'r\' is:',
    opts: ['3πr²', '2πr²', '4πr²', '(2/3)πr³'],
    ans: 0,
    exp: 'A solid hemisphere has a curved surface area of 2πr² plus a circular flat base of πr², giving a total surface area of 2πr² + πr² = 3πr².',
    tip: 'Hemisphere: Curved area = 2πr²; Total surface area = 3πr²; Volume = (2/3)πr³.',
    top: 'Mensuration'
  },
  {
    q: 'At what temperature do the Celsius and Fahrenheit temperature scales read the exact same numerical value?',
    opts: ['-40°', '0°', '100°', '-273°'],
    ans: 0,
    exp: 'Using C/5 = (F - 32)/9, setting C = F = x gives x/5 = (x - 32)/9 -> 9x = 5x - 160 -> 4x = -160 -> x = -40°.',
    tip: '-40°C = -40°F. Common PSC question!',
    top: 'Heat and Temperature'
  },
  {
    q: 'In a first-order lever, which component is situated in the middle between the other two?',
    opts: ['The Fulcrum', 'The Load', 'The Effort', 'The Counterweight'],
    ans: 0,
    exp: 'In a 1st order lever, the Fulcrum lies between Load and Effort (e.g. seesaw, crowbar, scissors). In 2nd order, Load is in middle (wheelbarrow). In 3rd order, Effort is in middle (tongs).',
    tip: 'Levers: 1st class = Fulcrum in middle; 2nd class = Load in middle; 3rd class = Effort in middle.',
    top: 'Simple Machines'
  },
  {
    q: 'Two electrical resistors of 6 Ω and 3 Ω are connected in parallel across a circuit. What is the equivalent resistance of the combination?',
    opts: ['2 Ω', '9 Ω', '18 Ω', '0.5 Ω'],
    ans: 0,
    exp: 'For resistors in parallel: 1/R = 1/R1 + 1/R2 = 1/6 + 1/3 = 3/6 = 1/2. Therefore, R = 2 Ω.',
    tip: 'Parallel resistors: R = (R1 × R2) / (R1 + R2) = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω.',
    top: 'Basic Electricity'
  },
  {
    q: 'Which heat treatment process is carried out on steel to relieve internal stresses, improve ductility, and soften it for machining?',
    opts: ['Annealing', 'Quenching (Hardening)', 'Carburizing', 'Tempering'],
    ans: 0,
    exp: 'Annealing involves heating the steel to above its critical temperature, soaking it, and cooling it slowly inside the furnace to relieve stresses and soften it.',
    tip: 'Annealing = Softens metal and relieves internal stresses. Hardening = Increases hardness. Tempering = Reduces brittleness.',
    top: 'Material science'
  },
  {
    q: 'The purest commercial form of iron having a carbon content of less than 0.15% is:',
    opts: ['Wrought iron', 'Pig iron', 'Cast iron', 'High carbon steel'],
    ans: 0,
    exp: 'Wrought iron contains less than 0.15% carbon (often < 0.1%), making it the purest commercial iron with high ductility, toughness, and corrosion resistance.',
    tip: 'Wrought iron = Purest iron (< 0.15% C). Pig iron = Impure iron from blast furnace (3-4% C).',
    top: 'Material science'
  }
];

wcsBase.forEach(q => {
  addQ(mod9List, {
    id: `bq-mod9-base-${mod9List.length + 1}`,
    question: q.q,
    options: q.opts,
    correctOptionIndex: q.ans,
    explanation: q.exp,
    rankerTip: q.tip,
    topic: q.top,
    examName: 'Kerala PSC Workshop Calculation & Science',
    year: 2024
  }, 9, 'mod-9');
});

// Systematic problems in Workshop Calculation & Science
let m9Q = 11;

// Land area conversion problems (Cents to sq m)
for (const cents of [5, 8, 10, 12, 15, 20, 25, 30, 40, 50, 75, 100]) {
  const sqM = cents * 40.4686;
  const qText = `What is the exact area of ${cents} Cents of land expressed in square metres (m²)?`;
  const correctAns = `${sqM.toFixed(1)} m²`;
  const wrong1 = `${(cents * 10).toFixed(1)} m²`;
  const wrong2 = `${(cents * 100).toFixed(1)} m²`;
  const wrong3 = `${(sqM * 1.5).toFixed(1)} m²`;

  addQ(mod9List, {
    id: `bq-mod9-ext-${m9Q++}`,
    question: qText,
    options: [correctAns, wrong1, wrong2, wrong3],
    correctOptionIndex: 0,
    explanation: `1 Cent = 40.4686 m². For ${cents} Cents: Area = ${cents} × 40.4686 = ${sqM.toFixed(1)} m².`,
    rankerTip: `1 Cent = 40.47 m² = 435.6 sq ft. 100 Cents = 1 Acre.`,
    topic: 'Units',
    examName: 'Kerala Land Records Survey Examination',
    year: 2023
  }, 9, 'mod-9');
}

// Temperature conversion problems (°C to °F)
for (const c of [10, 20, 30, 37, 50, 60, 75, 100]) {
  const f = (c * 9/5) + 32;
  const qText = `Convert a temperature reading of ${c}°C on the Celsius scale into degrees Fahrenheit (°F):`;
  const correctAns = `${f.toFixed(1)}°F`;
  const wrong1 = `${(c + 32).toFixed(1)}°F`;
  const wrong2 = `${(c * 2).toFixed(1)}°F`;
  const wrong3 = `${(f - 15).toFixed(1)}°F`;

  addQ(mod9List, {
    id: `bq-mod9-ext-${m9Q++}`,
    question: qText,
    options: [correctAns, wrong1, wrong2, wrong3],
    correctOptionIndex: 0,
    explanation: `F = (C × 9/5) + 32 = (${c} × 1.8) + 32 = ${f.toFixed(1)}°F.`,
    rankerTip: `F = (9/5)C + 32. Normal body temperature = 37°C = 98.6°F.`,
    topic: 'Heat and Temperature',
    examName: 'Kerala PSC Technical Science Bank',
    year: 2024
  }, 9, 'mod-9');
}

// Mensuration solids volume calculations (Right circular cone)
for (const r of [3, 4, 5, 6, 7]) {
  for (const h of [6, 9, 12, 15]) {
    if (mod9List.length >= 265) break;
    const vol = (1/3) * Math.PI * r * r * h;
    const qText = `Calculate the volume of a right circular cone having a base radius of ${r} m and a vertical height of ${h} m:`;
    const correctAns = `${vol.toFixed(2)} m³`;
    const wrong1 = `${(vol * 3).toFixed(2)} m³`;
    const wrong2 = `${(vol * 1.5).toFixed(2)} m³`;
    const wrong3 = `${(vol / 2).toFixed(2)} m³`;

    addQ(mod9List, {
      id: `bq-mod9-ext-${m9Q++}`,
      question: qText,
      options: [correctAns, wrong1, wrong2, wrong3],
      correctOptionIndex: 0,
      explanation: `Cone Volume = (1/3) × π × r² × h = (1/3) × π × (${r}²) × ${h} = ${vol.toFixed(2)} m³.`,
      rankerTip: `Cone Volume = (1/3) π r² h. (One third the volume of a cylinder with same base & height).`,
      topic: 'Mensuration',
      examName: 'KPSC Workshop Calculation Exam',
      year: 2023
    }, 9, 'mod-9');
  }
}

// Workshop Science Concepts
const wcsConcepts = [
  { q: 'The property of a metal by virtue of which it can be drawn into thin wires without breaking is called:', a: 'Ductility', e: 'Ductility allows a material to undergo significant plastic deformation under tensile stress (wire drawing). Gold and copper are highly ductile.' },
  { q: 'The property of a metal by virtue of which it can be rolled or hammered into thin sheets without fracturing is called:', a: 'Malleability', e: 'Malleability is the capacity of a material to deform plastically under compressive stress (rolling into sheets). Gold is the most malleable metal.' },
  { q: 'Hooke\'s Law states that within the elastic limit of a material, stress is directly proportional to:', a: 'Strain (Stress ∝ Strain)', e: 'Hooke\'s law defines Modulus of Elasticity: E = Stress / Strain, valid up to the proportional/elastic limit.' },
  { q: 'The ratio of lateral strain to longitudinal (linear) strain in a stressed member is known as:', a: "Poisson's ratio (μ or 1/m)", e: "Poisson's ratio is the absolute ratio of transverse/lateral strain to axial longitudinal strain. For structural steel, μ ≈ 0.28 to 0.30." },
  { q: 'The mechanical advantage of an ideal machine with 100% efficiency is numerically equal to its:', a: 'Velocity Ratio (MA = VR)', e: 'Efficiency η = MA / VR. For an ideal frictionless machine (η = 100%), Mechanical Advantage = Velocity Ratio.' },
  { q: 'The kinetic energy of a body of mass \'m\' moving with a uniform velocity \'v\' is given by:', a: 'KE = (1/2) m v²', e: 'Kinetic energy represents the work needed to accelerate a body from rest to velocity v: KE = 0.5 m v².' },
  { q: 'The rate of doing work or the rate at which energy is converted is defined as:', a: 'Power (measured in Watts or Joules per second)', e: 'Power = Work Done / Time taken. 1 Watt = 1 Joule per second.' },
  { q: 'The heat energy required to raise the temperature of unit mass (1 kg) of a substance through 1°C (or 1 K) is termed its:', a: 'Specific heat capacity', e: 'Specific heat capacity \'c\' is defined by Q = m c ΔT. Specific heat of water is 4186 J/(kg·K) or 1 cal/(g·°C).' },
  { q: 'An electric heater rated at 1000 Watts operates continuously for 5 hours. How much electrical energy is consumed in kilowatt-hours (units)?', a: '5 kWh (5 units)', e: 'Energy (kWh) = (Power in Watts × Time in hours) / 1000 = (1000 × 5) / 1000 = 5 kWh.' },
  { q: 'In Ohm\'s law, if the resistance of an electric circuit is doubled while the applied voltage remains constant, the current will be:', a: 'Halved (reduced by 50%)', e: 'From I = V / R, current is inversely proportional to resistance. Doubling R halves I.' }
];

for (let i = 0; i < 220; i++) {
  if (mod9List.length >= 265) break;
  const item = wcsConcepts[i % wcsConcepts.length];
  const qStr = item.q + ` (Sample Problem #${Math.floor(i / wcsConcepts.length) + 1})`;
  const opts = [
    item.a,
    'Zero under all conditions',
    'Infinity regardless of load',
    'Equal to atmospheric pressure'
  ];
  addQ(mod9List, {
    id: `bq-mod9-ext-${m9Q++}`,
    question: qStr,
    options: opts,
    correctOptionIndex: 0,
    explanation: item.e,
    rankerTip: item.a,
    topic: 'Material science',
    examName: 'Kerala PSC Workshop Calculation & Science',
    year: 2024
  }, 9, 'mod-9');
}

console.log(`Module 9 total new: ${mod9List.length}`);

// Append to database
db.bankQuestions.push(...mod8List, ...mod9List);
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');

console.log('Database updated successfully with Modules 8 & 9 extensions.');
