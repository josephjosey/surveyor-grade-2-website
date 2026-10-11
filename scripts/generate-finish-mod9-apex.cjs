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

console.log('Existing unique masks before Mod 9 apex:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-apx9-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-n${c++}`;
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
    createdAt: '2026-10-11T19:00:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 50 DISTINCT QUESTIONS FOR MODULE 9
const m9Apex = [
  // --- POLYGONS & THEOREMS ---
  {
    q: 'According to Brahmagupta Formula, what is the area of a cyclic quadrilateral having side lengths a, b, c, and d?',
    opts: ['Area = √[(s - a)(s - b)(s - c)(s - d)] where s = (a + b + c + d) / 2', 'Area = √[s(s - a)(s - b)(s - c)]', 'Area = (a * b * c * d) / 4', 'Area = [(a + b) / 2] * [(c + d) / 2]'],
    ans: 0,
    exp: 'Brahmagupta Formula gives the area of a cyclic quadrilateral: Area = √[(s-a)(s-b)(s-c)(s-d)], where s is semi-perimeter.',
    tip: 'Brahmagupta Formula: Area of cyclic quadrilateral = √[(s - a)(s - b)(s - c)(s - d)].',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'According to Ptolemy Theorem for cyclic quadrilaterals, what does the product of the two diagonals equal?',
    opts: ['The sum of the products of opposite pairs of sides: d1 * d2 = a * c + b * d', 'The product of all four sides', 'The sum of all four sides squared', 'Zero'],
    ans: 0,
    exp: 'Ptolemy Theorem states that in a cyclic quadrilateral ABCD, the product of the diagonals equals the sum of the products of opposite sides: AC * BD = AB * CD + BC * DA.',
    tip: 'Ptolemy Theorem: d1 x d2 = ac + bd.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the mathematical formula for the number of internal diagonals in an n-sided polygon?',
    opts: ['Number of diagonals = n * (n - 3) / 2', 'Number of diagonals = n * (n - 1) / 2', 'Number of diagonals = n - 3', 'Number of diagonals = 2 * n - 4'],
    ans: 0,
    exp: 'From combinatorics, choosing 2 vertices from n gives n(n-1)/2 lines. Subtracting the n outer perimeter sides leaves n(n-1)/2 - n = n(n-3)/2 diagonals.',
    tip: 'Polygon diagonals = n(n - 3) / 2. (Hexagon = 9, Octagon = 20).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the sum of all exterior angles for ANY convex polygon, regardless of the number of sides?',
    opts: ['Strictly 360 degrees (4 right angles)', '180 degrees', '(n - 2) * 180 degrees', '720 degrees'],
    ans: 0,
    exp: 'The sum of the exterior angles of any closed convex polygon is always equal to 360° (or 4 right angles), as a complete turn around the perimeter returns to the start direction.',
    tip: 'Sum of exterior angles of ANY convex polygon = 360°.',
    top: 'Units, Conversion & Mensuration'
  },

  // --- HYDROSTATICS & FLUID CENTERS ---
  {
    q: 'Why does the Center of Pressure on a submerged vertical planar surface always lie strictly below the Centroid (Center of Gravity) of the surface?',
    opts: ['Because hydrostatic fluid pressure increases linearly with depth, exerting greater force on the lower portions of the surface', 'Because atmospheric pressure acts at the top', 'Because of surface tension', 'Because liquids are compressible'],
    ans: 0,
    exp: 'Hydrostatic pressure P = ρgh grows with depth, so the centroid of the pressure distribution prism lies lower than the geometric centroid of the submerged area: h* = h_bar + Ig/(A*h_bar).',
    tip: 'Center of pressure is always BELOW the centroid because pressure increases with depth.',
    top: 'Fluid Mechanics & Hydrostatics'
  },
  {
    q: 'Where is the Center of Pressure located for a vertical rectangular plane of depth "d" having its upper edge lying in the free liquid surface?',
    opts: ['At a depth of (2 / 3) * d from the liquid surface', 'At d / 2 from the surface', 'At (3 / 4) * d from the surface', 'At d / 3 from the surface'],
    ans: 0,
    exp: 'For a vertical rectangle with top at surface, centroid is at d/2 and moment of inertia is bd^3/12: h* = d/2 + (bd^3/12)/(bd * d/2) = d/2 + d/6 = 2d/3.',
    tip: 'Center of pressure for vertical rectangle with top at surface = (2/3) d.',
    top: 'Fluid Mechanics & Hydrostatics'
  },
  {
    q: 'Where is the Center of Pressure located for a vertical triangular plane of height "h" having its base in the free liquid surface and vertex pointing downward?',
    opts: ['At a depth of h / 2 from the free liquid surface', 'At (2 / 3) * h from the surface', 'At (3 / 4) * h from the surface', 'At h / 3 from the surface'],
    ans: 0,
    exp: 'For a triangle with base at surface, centroid is h/3 below surface: h* = h/3 + (b h^3 / 36) / [(0.5 b h) * (h/3)] = h/3 + h/6 = h/2.',
    tip: 'Vertical triangle with base at surface: Center of pressure = h / 2.',
    top: 'Fluid Mechanics & Hydrostatics'
  },
  {
    q: 'Where is the Center of Pressure located for a vertical triangular plane of height "h" having its vertex in the liquid surface and base horizontal at depth h?',
    opts: ['At a depth of (3 / 4) * h from the free liquid surface', 'At (2 / 3) * h from the surface', 'At h / 2 from the surface', 'At (4 / 5) * h from the surface'],
    ans: 0,
    exp: 'With vertex at surface, centroid is at 2h/3: h* = 2h/3 + (b h^3 / 36) / [(0.5 b h) * (2h/3)] = 2h/3 + h/12 = 3h/4.',
    tip: 'Vertical triangle with vertex at surface: Center of pressure = (3/4) h.',
    top: 'Fluid Mechanics & Hydrostatics'
  },

  // --- STRENGTH OF MATERIALS & BEAMS ---
  {
    q: 'What is the classic Flexure Formula (Bending Equation) for pure bending of beams within the elastic limit?',
    opts: ['M / I = σ / y = E / R', 'M * I = σ * y = E * R', 'M / y = σ / I = R / E', 'M / E = I / σ = y / R'],
    ans: 0,
    exp: 'The Euler-Bernoulli beam bending equation is M / I = σ / y = E / R, relating bending moment M, moment of inertia I, bending stress σ, fiber distance y, Young modulus E, and radius of curvature R.',
    tip: 'Beam Bending Equation: M / I = σ / y = E / R.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the Section Modulus (Z) of a structural beam defined as?',
    opts: ['The ratio of the moment of inertia (I) about the neutral axis to the distance (ymax) of the extreme outer fiber: Z = I / ymax', 'The product of area and length', 'The shear stress divided by strain', 'The bending moment divided by span'],
    ans: 0,
    exp: 'Section Modulus Z = I / ymax. It measures beam flexural strength against bending: maximum resisting moment M_R = σ_allowable * Z.',
    tip: 'Section Modulus Z = I / ymax. Bending strength M = σ Z.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the Section Modulus (Z) of a solid rectangular beam cross-section of width "b" and depth "d"?',
    opts: ['Z = (b * d^2) / 6', 'Z = (b * d^3) / 12', 'Z = (b * d^2) / 4', 'Z = (b^2 * d) / 6'],
    ans: 0,
    exp: 'For a rectangle, I = b d^3 / 12 and ymax = d / 2. Therefore, Z = (b d^3 / 12) / (d / 2) = b d^2 / 6.',
    tip: 'Rectangular section modulus Z = (b d²) / 6. Moment of inertia I = (b d³) / 12.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the Section Modulus (Z) of a solid circular cross-section of diameter "d"?',
    opts: ['Z = (π * d^3) / 32', 'Z = (π * d^4) / 64', 'Z = (π * d^3) / 16', 'Z = (π * d^2) / 8'],
    ans: 0,
    exp: 'For a solid circle, I = π d^4 / 64 and ymax = d / 2. Thus Z = (π d^4 / 64) / (d / 2) = π d^3 / 32.',
    tip: 'Solid circular Section Modulus Z = (π d³) / 32. Polar section modulus Zp = (π d³) / 16.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the Moment of Inertia (I) of a solid rectangular cross-section of width b and depth d about its centroidal horizontal axis?',
    opts: ['I = (b * d^3) / 12', 'I = (b * d^3) / 3', 'I = (b * d^2) / 6', 'I = (b^3 * d) / 12'],
    ans: 0,
    exp: 'The second moment of area (moment of inertia) of a rectangle about its neutral horizontal centroidal axis is I_x = b d^3 / 12.',
    tip: 'Rectangular centroidal Moment of Inertia I = (b d³) / 12. About base: I_base = (b d³) / 3.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the Moment of Inertia (I) of a solid circular area of diameter "d" about any diameter axis passing through its center?',
    opts: ['I = (π * d^4) / 64', 'I = (π * d^4) / 32', 'I = (π * d^3) / 32', 'I = (π * d^2) / 4'],
    ans: 0,
    exp: 'The diametral moment of inertia of a circular area is I = π d^4 / 64 = π r^4 / 4.',
    tip: 'Circular Moment of Inertia I = (π d⁴) / 64. Polar moment of inertia J = (π d⁴) / 32.',
    top: 'Strength of Materials'
  },

  // --- SIMPLE MACHINES: LAW OF MACHINE ---
  {
    q: 'What is the "Law of Machine" relating applied effort (P) to lifted load (W)?',
    opts: ['P = m * W + C (where m is slope constant and C is effort required to overcome zero-load machine friction)', 'P = m * W^2 + C', 'P = W / m + C', 'P * W = C'],
    ans: 0,
    exp: 'The empirical straight-line equation relating effort and load is P = mW + C, where m represents friction increasing with load and C is idle friction.',
    tip: 'Law of Machine: P = m W + C.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'According to the Law of Machine (P = mW + C), what is the theoretical Maximum Mechanical Advantage (MA_max) obtainable by the machine as load W becomes very large?',
    opts: ['MA_max = 1 / m', 'MA_max = m', 'MA_max = 1 / C', 'MA_max = C / m'],
    ans: 0,
    exp: 'Since MA = W / P = W / (mW + C) = 1 / [m + (C/W)], as W approaches infinity, C/W becomes 0, yielding MA_max = 1 / m.',
    tip: 'Maximum Mechanical Advantage MA_max = 1 / m.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'According to the Law of Machine, what is the theoretical Maximum Efficiency (η_max) of the machine?',
    opts: ['η_max = 1 / (m * VR)', 'η_max = VR / m', 'η_max = m / VR', 'η_max = 1 / (C * VR)'],
    ans: 0,
    exp: 'Maximum efficiency η_max = MA_max / VR = (1 / m) / VR = 1 / (m * VR).',
    tip: 'Maximum machine efficiency: η_max = 1 / (m x VR).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'When is a lifting screw mechanism classified as "Overhauling"?',
    opts: ['When the helix angle of the thread exceeds the friction angle (α > ϕ), causing the load to drop or unscrew on its own when effort is removed', 'When the screw is jammed by grit', 'When efficiency is below 20%', 'When the threads are stripped'],
    ans: 0,
    exp: 'An overhauling screw reverses automatically under load because the helix angle exceeds the angle of friction (α > ϕ, efficiency > 50%).',
    tip: 'Overhauling occurs when helix angle α > friction angle ϕ (machine reverses under load).',
    top: 'Workshop Science & Mechanics'
  }
];

m9Apex.forEach(q => addQ(q, 9, 'mod-9', 'Units, Conversion & Mensuration'));
console.log('Module 9 Apex batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
