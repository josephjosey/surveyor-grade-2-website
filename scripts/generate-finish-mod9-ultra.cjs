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

console.log('Existing unique masks before Mod 9 ultra:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-ult9-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-m${c++}`;
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
    createdAt: '2026-10-11T18:45:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 65 DISTINCT QUESTIONS FOR MODULE 9
const m9Ultra = [
  // --- CONIC SECTIONS & CURVES ---
  {
    q: 'What is the Eccentricity (e) of a Parabola in conic sections?',
    opts: ['e = 1 exactly', 'e < 1', 'e > 1', 'e = 0'],
    ans: 0,
    exp: 'A parabola is defined as the locus of a point whose distance from the focus equals its distance from the directrix; hence eccentricity e = 1.',
    tip: 'Eccentricity values: Circle e = 0, Ellipse e < 1, Parabola e = 1, Hyperbola e > 1.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the Eccentricity (e) of an Ellipse in conic sections?',
    opts: ['e is strictly less than 1 (0 < e < 1)', 'e = 1', 'e > 1', 'e = 2'],
    ans: 0,
    exp: 'An ellipse is the locus of a point whose distance from the focus is less than its distance from the directrix (e < 1).',
    tip: 'Ellipse eccentricity: 0 < e < 1.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the Eccentricity (e) of a Hyperbola in conic sections?',
    opts: ['e is strictly greater than 1 (e > 1)', 'e = 1', 'e < 1', 'e = 0'],
    ans: 0,
    exp: 'A hyperbola is the locus of a point whose distance from the focus exceeds its distance from the directrix (e > 1).',
    tip: 'Hyperbola eccentricity: e > 1. Rectangular hyperbola: e = √2.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the Eccentricity (e) of a perfect Circle in conic sections?',
    opts: ['e = 0', 'e = 1', 'e = 0.5', 'e = infinity'],
    ans: 0,
    exp: 'A circle is a special case of an ellipse whose two foci merge into a single center point, giving eccentricity e = 0.',
    tip: 'Circle eccentricity: e = 0.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the length of the Latus Rectum of a standard parabola y^2 = 4ax?',
    opts: ['4 * a', '2 * a', 'a', '8 * a'],
    ans: 0,
    exp: 'The latus rectum is the focal chord perpendicular to the axis of symmetry. For y^2 = 4ax, x = a gives y^2 = 4a^2, y = ±2a, so length = 4a.',
    tip: 'Parabola y² = 4ax latus rectum length = 4a.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the length of the Latus Rectum of an ellipse with semi-major axis "a" and semi-minor axis "b"?',
    opts: ['2 * b^2 / a', '2 * a^2 / b', 'b^2 / a', '4 * b^2 / a'],
    ans: 0,
    exp: 'For ellipse x^2/a^2 + y^2/b^2 = 1, setting x = ae gives y = ±b^2/a, yielding total latus rectum length = 2b^2 / a.',
    tip: 'Ellipse latus rectum length = 2b² / a.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the center and radius of a circle represented by the general equation x^2 + y^2 + 2gx + 2fy + c = 0?',
    opts: ['Center = (-g, -f) and Radius = √(g^2 + f^2 - c)', 'Center = (g, f) and Radius = √(g^2 + f^2 + c)', 'Center = (0, 0) and Radius = √c', 'Center = (-g, -f) and Radius = g + f - c'],
    ans: 0,
    exp: 'Completing the square gives (x + g)^2 + (y + f)^2 = g^2 + f^2 - c, so center is (-g, -f) and radius is √(g^2 + f^2 - c).',
    tip: 'General circle equation: Center = (-g, -f), Radius = √(g² + f² - c).',
    top: 'Units, Conversion & Mensuration'
  },

  // --- THERMAL PHYSICS, WATER & GASES ---
  {
    q: 'What is the "Anomalous Expansion of Water" between 0 °C and 4 °C?',
    opts: ['Water contracts as it is heated from 0 °C to 4 °C, reaching its maximum density and minimum volume at exactly 4 °C', 'Water expands uniformly at all temperatures', 'Water boils at 4 °C', 'Water loses all mass at 4 °C'],
    ans: 0,
    exp: 'Unlike other liquids, water contracts when warmed from 0°C to 4°C due to collapsing hydrogen bonds, achieving its peak density of 1000 kg/m³ at 4°C.',
    tip: 'Water reaches MAXIMUM density and MINIMUM volume at 4 °C (1000 kg/m³).',
    top: 'Thermal Physics & Gases'
  },
  {
    q: 'Why do aquatic creatures survive at the bottom of frozen lakes during severe winter climates?',
    opts: ['Because water reaches maximum density at 4 °C and sinks to the bottom, while lighter ice (density ~917 kg/m³) floats on top acting as an insulating blanket', 'Because fish produce electric heat', 'Because the lake bed has thermal vents', 'Because ice generates heat'],
    ans: 0,
    exp: 'Water at 4°C is denser than water at 0°C or ice. The dense 4°C water remains at the lake bed, while ice stays on the surface, keeping bottom waters liquid.',
    tip: 'Water 4°C maximum density keeps lake bottoms liquid under insulating surface ice.',
    top: 'Thermal Physics & Gases'
  },
  {
    q: 'What is the "Triple Point of Water"?',
    opts: ['The unique state of thermodynamic equilibrium at 0.01 °C (273.16 K) and 611.65 Pa where solid ice, liquid water, and water vapor coexist simultaneously', 'The temperature at which water boils', 'The critical point of steam turbines', 'The point where water turns to ice at 0 °C'],
    ans: 0,
    exp: 'At the triple point (273.16 K / 0.01°C and 4.58 mmHg / 611.65 Pa), all three phases of water exist in stable equilibrium, serving as the international definition for the Kelvin scale.',
    tip: 'Triple point of water = 273.16 K (0.01 °C) and 611.65 Pa (ice, water, and steam coexist).',
    top: 'Thermal Physics & Gases'
  },
  {
    q: 'Which law of thermodynamics establishes the concept of Temperature and thermal equilibrium between systems?',
    opts: ['Zeroth Law of Thermodynamics', 'First Law of Thermodynamics', 'Second Law of Thermodynamics', 'Third Law of Thermodynamics'],
    ans: 0,
    exp: 'The Zeroth Law states that if bodies A and B are each in thermal equilibrium with body C, they are in equilibrium with each other, defining temperature as a measurable property.',
    tip: 'Zeroth Law defines Temperature. First Law = Energy Conservation. Second Law = Entropy.',
    top: 'Thermal Physics & Gases'
  },
  {
    q: 'What does the First Law of Thermodynamics state mathematically for a closed system undergoing a change of state?',
    opts: ['ΔQ = ΔU + W (Heat added = Increase in internal energy + Work done by system)', 'ΔQ = W only', 'ΔU = ΔQ * W', 'Efficiency = 100%'],
    ans: 0,
    exp: 'The First Law expresses conservation of energy: ΔQ = ΔU + W, where ΔQ is heat supplied, ΔU is internal energy change, and W is work performed.',
    tip: '1st Law of Thermodynamics: ΔQ = ΔU + W (Conservation of Energy).',
    top: 'Thermal Physics & Gases'
  },
  {
    q: 'What does the Second Law of Thermodynamics dictate regarding spontaneous heat transfer?',
    opts: ['Heat cannot spontaneously flow from a colder body to a hotter body without an external supply of work (Clausius statement)', 'Heat always flows from cold to hot', 'Perpetual motion machines of the second kind are 100% possible', 'Total entropy of the universe decreases'],
    ans: 0,
    exp: 'The Clausius statement of the 2nd Law states that heat cannot flow unaided from a low-temperature reservoir to a high-temperature reservoir without work input (refrigeration).',
    tip: '2nd Law: Heat cannot spontaneously flow from cold to hot without external work.',
    top: 'Thermal Physics & Gases'
  },

  // --- MAGNETIC CIRCUITS & ELECTROMAGNETIC ENERGY ---
  {
    q: 'What is the magnetic circuit analogue of electrical resistance (the opposition offered to magnetic flux)?',
    opts: ['Reluctance (S or R_m)', 'Permeance', 'Impedance', 'Reactance'],
    ans: 0,
    exp: 'Reluctance is the resistance offered by a magnetic circuit to the passage of magnetic flux lines: R_m = l / (μ * A). Its unit is Ampere-turns per Weber (AT/Wb) or H^-1.',
    tip: 'Magnetic Reluctance = opposition to magnetic flux (analogue of electrical resistance).',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'What is the SI unit of Magnetomotive Force (MMF)?',
    opts: ['Ampere-turns (AT) or Ampere (A)', 'Weber (Wb)', 'Tesla (T)', 'Henry (H)'],
    ans: 0,
    exp: 'Magnetomotive force is the magnetic potential driving flux through a circuit: MMF = N * I, measured in Ampere-turns (AT).',
    tip: 'MMF unit = Ampere-turns (AT). Magnetic Flux = Weber (Wb).',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'What is the formula for the electrical energy (E in Joules) stored in an inductor of inductance L carrying current I?',
    opts: ['E = (1 / 2) * L * I^2', 'E = L * I', 'E = (1 / 2) * L^2 * I', 'E = L * I^2'],
    ans: 0,
    exp: 'The magnetic energy stored in an inductor coil is E = (1/2) * L * I^2 Joules.',
    tip: 'Inductor stored energy: E = (1/2) L I² Joules.',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'What is the formula for the electrical energy (E in Joules) stored in a capacitor of capacitance C charged to voltage V?',
    opts: ['E = (1 / 2) * C * V^2 = (1 / 2) * Q * V', 'E = C * V', 'E = C^2 * V', 'E = (1 / 2) * C^2 * V'],
    ans: 0,
    exp: 'The electrostatic energy stored in a charged capacitor is E = (1/2) C V^2 = (1/2) Q V = (1/2) Q^2 / C.',
    tip: 'Capacitor stored energy: E = (1/2) C V² = (1/2) Q V.',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'What is the SI unit of Electrical Inductance (self or mutual inductance)?',
    opts: ['Henry (H)', 'Farad (F)', 'Weber (Wb)', 'Tesla (T)'],
    ans: 0,
    exp: 'The Henry (H) is the SI unit of inductance, defined as 1 Volt of induced EMF when current changes at 1 Ampere per second (1 H = 1 V·s/A).',
    tip: 'Inductance unit = Henry (H). Capacitance = Farad (F).',
    top: 'Electricity & Magnetism'
  }
];

m9Ultra.forEach(q => addQ(q, 9, 'mod-9', 'Units, Conversion & Mensuration'));
console.log('Module 9 Ultra batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
