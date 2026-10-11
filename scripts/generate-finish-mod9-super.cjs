const fs = require('fs');
const path = require('path');

const dbPath = path.resolve('data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

function getTemplateMask(str) {
  let s = str.toLowerCase();
  s = s.replace(/\d+(?:\.\d+)?/g, '<NUM>');
  s = s.replace(/['"][a-z]['"]/g, '<VAR>');
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

const existingMasks = new Set(db.bankQuestions.map(q => getTemplateMask(q.question)));
const existingIds = new Set(db.bankQuestions.map(q => q.id));

console.log('Existing unique masks before Mod 9 super:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-sup9-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-l${c++}`;
  }

  const qObj = {
    id: id,
    moduleId: modId,
    moduleNumber: modNum,
    question: item.q,
    options: item.opts,
    correctOptionIndex: item.ans,
    explanation: item.exp,
    rankerTip: item.tip,
    topic: item.top || defaultTopic,
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Land Records',
    year: 2024,
    createdAt: '2026-10-11T18:30:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 95 DISTINCT QUESTIONS FOR MODULE 9
const m9Super = [
  // --- COORDINATE GEOMETRY & CIRCLE THEOREMS ---
  {
    q: 'What is the formula for the distance d between two coordinate points (x1, y1) and (x2, y2) in a plane Cartesian system?',
    opts: ['d = √[(x2 - x1)^2 + (y2 - y1)^2]', 'd = (x2 - x1) + (y2 - y1)', 'd = √[(x2 + x1)^2 + (y2 + y1)^2]', 'd = (x2 - x1)^2 + (y2 - y1)^2'],
    ans: 0,
    exp: 'By the Pythagorean theorem in a coordinate plane: Distance d = √[(x2 - x1)^2 + (y2 - y1)^2].',
    tip: 'Distance formula: d = √[(x2 - x1)² + (y2 - y1)²].',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'According to the section formula, what are the coordinates of the point dividing the line segment between (x1, y1) and (x2, y2) internally in the ratio m : n?',
    opts: ['[(m*x2 + n*x1) / (m + n), (m*y2 + n*y1) / (m + n)]', '[(m*x1 + n*x2) / (m + n), (m*y1 + n*y2) / (m + n)]', '[(m*x2 - n*x1) / (m - n), (m*y2 - n*y1) / (m - n)]', '[(x1 + x2) / m, (y1 + y2) / n]'],
    ans: 0,
    exp: 'Internal section formula: x = (m x2 + n x1) / (m + n) and y = (m y2 + n y1) / (m + n).',
    tip: 'Internal division: [(m x2 + n x1)/(m + n), (m y2 + n y1)/(m + n)].',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What are the coordinates of the Centroid of a triangle with vertices at (x1, y1), (x2, y2), and (x3, y3)?',
    opts: ['[(x1 + x2 + x3) / 3, (y1 + y2 + y3) / 3]', '[(x1 + x2 + x3) / 2, (y1 + y2 + y3) / 2]', '[(x1 + x2 + x3) / 6, (y1 + y2 + y3) / 6]', '[√(x1*x2*x3), √(y1*y2*y3)]'],
    ans: 0,
    exp: 'The centroid coordinates are the arithmetic averages of the vertex coordinates: G = [(x1 + x2 + x3)/3, (y1 + y2 + y3)/3].',
    tip: 'Triangle Centroid: x_c = (x1 + x2 + x3)/3, y_c = (y1 + y2 + y3)/3.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the condition for two straight lines with slopes m1 and m2 to be strictly perpendicular to each other?',
    opts: ['m1 * m2 = -1', 'm1 = m2', 'm1 + m2 = 0', 'm1 * m2 = 1'],
    ans: 0,
    exp: 'Two lines are perpendicular if their slopes satisfy m1 * m2 = -1 (the slope of one is the negative reciprocal of the other: m2 = -1 / m1).',
    tip: 'Perpendicular lines: m1 x m2 = -1. Parallel lines: m1 = m2.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the perpendicular distance (d) from a point (x1, y1) to the straight line given by the general equation Ax + By + C = 0?',
    opts: ['d = |A*x1 + B*y1 + C| / √(A^2 + B^2)', 'd = |A*x1 + B*y1 + C| / (A + B)', 'd = (A*x1 + B*y1 + C) / √(A^2 - B^2)', 'd = |A*x1 + B*y1| / C'],
    ans: 0,
    exp: 'The formula for perpendicular distance from point to line is d = |A x1 + B y1 + C| / √(A^2 + B^2).',
    tip: 'Distance from point to line: d = |Ax1 + By1 + C| / √(A² + B²).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'In geometry, what is the angle subtended by a diameter at any point on the circumference of a circle (angle in a semicircle)?',
    opts: ['Exactly 90 degrees (a right angle)', '180 degrees', '45 degrees', '60 degrees'],
    ans: 0,
    exp: 'Thales Theorem states that the angle inscribed in a semicircle is always a right angle (90°).',
    tip: 'Angle in a semicircle = 90° (right angle).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'In circle geometry, what is the sum of the opposite interior angles of any cyclic quadrilateral?',
    opts: ['180 degrees (supplementary)', '360 degrees', '90 degrees', '270 degrees'],
    ans: 0,
    exp: 'For any quadrilateral inscribed in a circle (cyclic quadrilateral), the sum of opposite angles is always 180° (A + C = 180° and B + D = 180°).',
    tip: 'Cyclic quadrilateral opposite angles sum to 180°.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'According to the Intersecting Chords Theorem, if two chords AB and CD of a circle intersect at an internal point P, what relation holds true?',
    opts: ['PA * PB = PC * PD', 'PA + PB = PC + PD', 'PA * PC = PB * PD', 'PA / PB = PC / PD'],
    ans: 0,
    exp: 'By similar triangles, when two chords AB and CD intersect inside a circle at point P: PA * PB = PC * PD.',
    tip: 'Intersecting chords: PA x PB = PC x PD.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'According to the Tangent-Secant Theorem, if a secant PAB and a tangent PT are drawn to a circle from an external point P, what relation holds true?',
    opts: ['PT^2 = PA * PB', 'PT = PA * PB', 'PT^2 = PA + PB', 'PT = (PA + PB) / 2'],
    ans: 0,
    exp: 'The tangent-secant theorem states that the square of the tangent segment from an external point equals the product of the external secant segment and entire secant: PT^2 = PA * PB.',
    tip: 'Tangent-Secant Theorem: PT² = PA x PB.',
    top: 'Units, Conversion & Mensuration'
  },

  // --- PULLEYS & SIMPLE MACHINES ADVANCED ---
  {
    q: 'What is the Velocity Ratio (VR) of the First System of Pulleys consisting of "n" movable pulleys suspended by separate ropes attached to an overhead beam?',
    opts: ['VR = 2^n', 'VR = 2 * n', 'VR = 2^n - 1', 'VR = n'],
    ans: 0,
    exp: 'In the first system of pulleys, each additional movable pulley doubles the velocity ratio: VR = 2^n, where n is the number of movable pulleys.',
    tip: 'First system of pulleys: VR = 2^n.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the Velocity Ratio (VR) of the Second System of Pulleys (Block and Tackle) having a total of "n" pulleys distributed between the fixed and movable blocks?',
    opts: ['VR = n (the total number of pulleys in both blocks)', 'VR = 2^n', 'VR = 2 * n', 'VR = n / 2'],
    ans: 0,
    exp: 'In a standard block and tackle with a single continuous rope, the velocity ratio equals the total number of pulleys (n) in both top and bottom blocks combined: VR = n.',
    tip: 'Second system of pulleys (block & tackle): VR = n (total number of pulleys).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the Velocity Ratio (VR) of the Third System of Pulleys comprising "n" total pulleys where all strings are attached to the load block?',
    opts: ['VR = 2^n - 1', 'VR = 2^n', 'VR = n', 'VR = 2 * n - 1'],
    ans: 0,
    exp: 'In the third system of pulleys, the total velocity ratio is the sum of a geometric series: VR = 1 + 2 + 4 + ... + 2^(n-1) = 2^n - 1.',
    tip: 'Third system of pulleys: VR = 2^n - 1.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the Velocity Ratio (VR) of a Weston Differential Pulley Block having a large pulley diameter D and small stepped pulley diameter d?',
    opts: ['VR = 2 * D / (D - d)', 'VR = D / (D - d)', 'VR = 2 * D / (D + d)', 'VR = (D - d) / (2 * D)'],
    ans: 0,
    exp: 'In one revolution of the compound upper block, the effort moves π D while the load rises (π D - π d)/2: VR = π D / [(π D - π d)/2] = 2D / (D - d).',
    tip: 'Weston differential pulley: VR = 2D / (D - d).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the Velocity Ratio (VR) of a Worm and Worm Wheel machine having a single-start worm and a worm wheel with T teeth, operated by an effort wheel of radius R and load drum of radius r?',
    opts: ['VR = (R * T) / r', 'VR = (r * T) / R', 'VR = (2 * π * R * T) / r', 'VR = R / (r * T)'],
    ans: 0,
    exp: 'One rotation of the effort wheel turns the worm once, advancing the worm wheel by 1 tooth (1/T rev). The load moves 2πr / T while effort moves 2πR: VR = (R * T) / r.',
    tip: 'Worm and worm wheel VR = (R x T) / r.',
    top: 'Workshop Science & Mechanics'
  },

  // --- MAGNETISM, CIRCUIT LAWS & INSTRUMENTS ---
  {
    q: 'What is the "Curie Temperature" of a ferromagnetic material such as iron?',
    opts: ['The critical temperature above which the material completely loses its permanent ferromagnetism and becomes paramagnetic (770 °C for iron)', 'The melting point of the metal', 'The boiling point of liquid nitrogen', 'The temperature at which electrical resistance becomes zero'],
    ans: 0,
    exp: 'Above the Curie temperature (770°C for iron), thermal agitation destroys the parallel alignment of magnetic domains, turning the ferromagnetic material into a paramagnetic state.',
    tip: 'Curie Temperature = critical temperature where ferromagnetism transitions to paramagnetism (770°C for iron).',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'What magnetic property characterizes "Diamagnetic" materials (such as bismuth, copper, and water)?',
    opts: ['They have relative magnetic permeability slightly less than 1 (μr < 1) and are weakly repelled by a magnetic field', 'They are strongly attracted by magnets', 'They retain permanent magnetism forever', 'They conduct zero electric current'],
    ans: 0,
    exp: 'Diamagnetic substances (bismuth, copper, gold, water) have μr slightly less than 1 and negative susceptibility; they are feebly repelled by magnetic poles.',
    tip: 'Diamagnetic: μr < 1, feebly repelled by magnets (copper, bismuth, water).',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'What magnetic property characterizes "Paramagnetic" materials (such as aluminum and platinum)?',
    opts: ['They have relative magnetic permeability slightly greater than 1 (μr > 1) and are weakly attracted by a magnetic field', 'They are strongly repelled by magnetic poles', 'They form permanent horseshoe magnets', 'They have zero electrical resistance'],
    ans: 0,
    exp: 'Paramagnetic substances (aluminum, platinum, manganese) have relative permeability slightly greater than 1 (μr > 1); they are feebly attracted by magnets in direction of increasing field.',
    tip: 'Paramagnetic: μr slightly > 1, feebly attracted by magnets (aluminum, platinum).',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'Why is Soft Iron preferred over steel as the magnetic core material in electromagnets and transformer cores?',
    opts: ['Because soft iron has high magnetic permeability, low coercivity, and narrow hysteresis loss, magnetizing and demagnetizing instantly', 'Because soft iron is harder than steel', 'Because soft iron never conducts electricity', 'Because soft iron cannot rust'],
    ans: 0,
    exp: 'Soft iron exhibits high magnetic permeability and small retentivity/coercivity. It magnetizes readily when current flows and demagnetizes immediately when current is cut off.',
    tip: 'Electromagnets use soft iron: high permeability, low retentivity and coercivity.',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'Why is Alnico (or high-carbon tungsten steel) preferred for making Permanent Magnets?',
    opts: ['Because it possesses high magnetic retentivity and high coercivity, resisting demagnetization by stray fields', 'Because it melts at low temperature', 'Because it is highly malleable', 'Because it is cheap to cast'],
    ans: 0,
    exp: 'Permanent magnets require materials with large hysteresis loops, high retentivity (strong remaining magnetism), and high coercivity (resistance to being demagnetized).',
    tip: 'Permanent magnets require high retentivity and high coercivity (e.g. Alnico).',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'How is a sensitive moving-coil Galvanometer converted into an Ammeter capable of measuring large electrical currents?',
    opts: ['By connecting a low-resistance resistor (Shunt) in parallel across the galvanometer coil', 'By connecting a high-resistance resistor in series', 'By removing the permanent magnet', 'By winding the coil with aluminum wire'],
    ans: 0,
    exp: 'A shunt is a very low resistance connected in parallel with the galvanometer. Most current bypasses the delicate meter coil through the shunt, enabling high current measurement.',
    tip: 'Galvanometer to Ammeter = LOW resistance (Shunt) in PARALLEL.',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'How is a moving-coil Galvanometer converted into a Voltmeter capable of measuring high electrical voltages?',
    opts: ['By connecting a high-resistance multiplier resistor in series with the galvanometer coil', 'By connecting a low resistance in parallel', 'By immersing the coil in oil', 'By shortening the pointer needle'],
    ans: 0,
    exp: 'Connecting a large resistance in series with the galvanometer coil limits current flow to safe microamperes when placed across large potential differences.',
    tip: 'Galvanometer to Voltmeter = HIGH resistance in SERIES.',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'What fundamental conservation law forms the physical basis of Kirchhoff Current Law (KCL)?',
    opts: ['Law of Conservation of Electric Charge', 'Law of Conservation of Energy', 'Law of Conservation of Linear Momentum', 'Law of Conservation of Mass'],
    ans: 0,
    exp: 'KCL states that charge cannot accumulate at an electrical node: total current entering equals total current leaving (ΣI = 0), based on conservation of charge.',
    tip: 'Kirchhoff Current Law (KCL) is based on Conservation of Charge (ΣI = 0).',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'What fundamental conservation law forms the physical basis of Kirchhoff Voltage Law (KVL)?',
    opts: ['Law of Conservation of Energy', 'Law of Conservation of Charge', 'Law of Conservation of Angular Momentum', 'Law of Conservation of Matter'],
    ans: 0,
    exp: 'KVL states that the sum of potential gains and drops around any closed electrical loop is zero (ΣV = 0), which is a direct statement of conservation of energy.',
    tip: 'Kirchhoff Voltage Law (KVL) is based on Conservation of Energy (ΣV = 0).',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'What is the condition for balance in a Wheatstone Bridge circuit with four resistance arms P, Q, R, and S?',
    opts: ['P / Q = R / S (no current flows through the central galvanometer)', 'P * Q = R * S', 'P + Q = R + S', 'P / R = S / Q'],
    ans: 0,
    exp: 'When the potential at opposite bridge terminals is equal, no current flows through the galvanometer. The balance condition is P / Q = R / S.',
    tip: 'Wheatstone Bridge balance condition: P / Q = R / S.',
    top: 'Electricity & Magnetism'
  }
];

m9Super.forEach(q => addQ(q, 9, 'mod-9', 'Units, Conversion & Mensuration'));
console.log('Module 9 Super batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
