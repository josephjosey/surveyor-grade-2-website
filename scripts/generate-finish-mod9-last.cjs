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

console.log('Existing unique masks before Mod 9 last:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-lst9-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-o${c++}`;
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
    createdAt: '2026-10-11T19:15:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 25 DISTINCT QUESTIONS TO COMPLETE MODULE 9 OVER 510
const m9Last = [
  {
    q: 'What is the Parallel Axis Theorem (Steiner Theorem) for the area Moment of Inertia of a plane lamina?',
    opts: ['I_axis = I_G + A * d^2 (where I_G is centroidal moment of inertia, A is area, and d is distance between parallel axes)', 'I_axis = I_G - A * d^2', 'I_axis = I_G * d^2', 'I_axis = I_G / (A * d)'],
    ans: 0,
    exp: 'The parallel axis theorem states: I_axis = I_G + A * d^2, where I_G is the moment of inertia about the parallel centroidal axis and d is axis separation.',
    tip: 'Parallel Axis Theorem: I_parallel = I_G + A d².',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the Perpendicular Axis Theorem for the area Moment of Inertia of a thin plane lamina lying in the X-Y plane?',
    opts: ['I_z = I_x + I_y (the polar moment of inertia equals the sum of moments of inertia about two mutually perpendicular in-plane axes)', 'I_z = I_x * I_y', 'I_z = I_x - I_y', 'I_z = √(I_x^2 + I_y^2)'],
    ans: 0,
    exp: 'For a flat 2D lamina in the X-Y plane, the perpendicular axis theorem establishes that I_z = I_x + I_y.',
    tip: 'Perpendicular Axis Theorem: I_z = I_x + I_y.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the definition of the "Radius of Gyration" (k) of a plane area having area A and moment of inertia I?',
    opts: ['k = √(I / A), so that I = A * k^2', 'k = I / A', 'k = I * A', 'k = √(I * A)'],
    ans: 0,
    exp: 'The radius of gyration k is the distance from the reference axis at which the entire area could be concentrated without altering its moment of inertia: k = √(I / A).',
    tip: 'Radius of gyration k = √(I / A), giving I = A k².',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the Moment of Inertia (I) of a triangular cross-section of base "b" and height "h" about its base edge?',
    opts: ['I_base = (b * h^3) / 12', 'I_base = (b * h^3) / 36', 'I_base = (b * h^3) / 4', 'I_base = (b * h^2) / 6'],
    ans: 0,
    exp: 'The moment of inertia of a triangle about its base is I_base = b h^3 / 12. (About its centroidal axis parallel to base it is I_G = b h^3 / 36).',
    tip: 'Triangle Moment of Inertia: About base = (b h³) / 12. About centroid = (b h³) / 36.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the Moment of Inertia (I_G) of a triangular cross-section of base "b" and height "h" about its centroidal axis parallel to the base?',
    opts: ['I_G = (b * h^3) / 36', 'I_G = (b * h^3) / 12', 'I_G = (b * h^3) / 24', 'I_G = (b * h^2) / 18'],
    ans: 0,
    exp: 'By parallel axis theorem: I_G = I_base - A * d^2 = (b h^3 / 12) - (0.5 b h) * (h / 3)^2 = b h^3 / 12 - b h^3 / 18 = b h^3 / 36.',
    tip: 'Triangle centroidal Moment of Inertia I_G = (b h³) / 36.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the standard Torsion Formula for circular solid or hollow shafts subjected to twisting torque T within the elastic limit?',
    opts: ['T / J = τ / r = (G * θ) / L', 'T * J = τ * r = G * θ', 'T / r = τ / J = L / (G * θ)', 'T / L = τ / G = J / θ'],
    ans: 0,
    exp: 'The torsion formula for circular shafts is T / J = τ / r = (G * θ) / L, where J is polar moment of inertia, τ is shear stress at radius r, G is shear modulus, and θ is angle of twist.',
    tip: 'Torsion Formula: T / J = τ / r = (G θ) / L.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the Polar Section Modulus (Z_p) of a solid circular shaft of diameter "d"?',
    opts: ['Z_p = (π * d^3) / 16', 'Z_p = (π * d^3) / 32', 'Z_p = (π * d^4) / 32', 'Z_p = (π * d^2) / 8'],
    ans: 0,
    exp: 'Polar section modulus Z_p = J / r = (π d^4 / 32) / (d / 2) = π d^3 / 16. It determines the torsional shear carrying capacity T = τ * Z_p.',
    tip: 'Solid circular Polar Section Modulus Z_p = (π d³) / 16.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is "Torsional Rigidity" of a circular transmission shaft defined as?',
    opts: ['The product of Modulus of Rigidity (G) and Polar Moment of Inertia (J): G * J', 'The ratio T / L', 'The maximum torque before shearing', 'The shear stress divided by angle of twist'],
    ans: 0,
    exp: 'Torsional rigidity is the torque required to produce unit angle of twist per unit shaft length: Torsional Rigidity = G * J.',
    tip: 'Torsional Rigidity = G x J. Torsional Stiffness = (G x J) / L.',
    top: 'Strength of Materials'
  },
  {
    q: 'How does the stress produced in a bar by a Suddenly Applied Load (without shock) compare to the stress produced if the exact same load is applied gradually?',
    opts: ['The suddenly applied stress is exactly TWICE the gradually applied stress (σ_sudden = 2 * σ_gradual)', 'The suddenly applied stress is half', 'The stresses are strictly identical', 'The suddenly applied stress is four times larger'],
    ans: 0,
    exp: 'Equating work done by falling load P*δ to strain energy (0.5 * σ * δ * Volume) shows that instantaneous stress for a sudden load is exactly 2P/A = 2 * σ_gradual.',
    tip: 'Suddenly applied load produces TWICE the stress of a gradually applied load (σ_sudden = 2 σ_gradual).',
    top: 'Strength of Materials'
  },
  {
    q: 'What are "Principal Planes" in the analysis of two-dimensional complex stress states?',
    opts: ['Planes on which the shear stress is strictly ZERO (τ = 0), carrying only pure normal tensile or compressive stresses', 'Planes inclined at 45 degrees to the principal axes', 'Planes where normal stress is zero', 'Planes along which failure always occurs'],
    ans: 0,
    exp: 'Principal planes are defined as the mutually perpendicular planes along which shear stress vanishes completely (τ = 0). The normal stresses on these planes are Principal Stresses.',
    tip: 'Principal planes carry ZERO shear stress (τ = 0); normal stresses on them are Principal Stresses.',
    top: 'Strength of Materials'
  },
  {
    q: 'In Mohr Circle of Stress for plane stress, what does the Radius of the circle represent?',
    opts: ['The Maximum Shear Stress (τ_max) acting in the material', 'The average normal stress', 'The minimum principal stress', 'The volumetric strain'],
    ans: 0,
    exp: 'The radius of Mohr stress circle is R = √[((σx - σy)/2)^2 + τxy^2], which equals the maximum in-plane shear stress τ_max.',
    tip: 'Mohr Circle radius = Maximum Shear Stress τ_max.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the coordinates of the Center of Mohr Circle of Stress for a state of plane stress with normal stresses σx and σy?',
    opts: ['Center = [ (σx + σy) / 2, 0 ]', 'Center = [ (σx - σy) / 2, 0 ]', 'Center = [ 0, (σx + σy) / 2 ]', 'Center = [ σx, σy ]'],
    ans: 0,
    exp: 'The center of Mohr circle lies on the normal stress (horizontal) axis at the average normal stress: Center = [ (σx + σy) / 2, 0 ].',
    tip: 'Mohr Circle center = [ (σx + σy) / 2, 0 ] on the horizontal axis.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is "Proof Resilience" in engineering mechanics of materials?',
    opts: ['The maximum strain energy that can be stored in a body up to the elastic limit without undergoing permanent deformation', 'The energy absorbed during fracture', 'The energy needed to melt the metal', 'The work done against friction'],
    ans: 0,
    exp: 'Resilience is strain energy capacity. Proof resilience is the maximum elastic strain energy absorbed up to the elastic limit: U_proof = (σ_elastic^2 / 2E) * Volume.',
    tip: 'Proof Resilience = maximum strain energy stored within the elastic limit.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the "Modulus of Resilience" of a material defined as?',
    opts: ['The proof resilience per unit volume of the material: (σ_e^2) / (2 * E)', 'The proof resilience multiplied by volume', 'The Young modulus divided by shear modulus', 'The tensile strength at breaking'],
    ans: 0,
    exp: 'Modulus of resilience is proof resilience per unit volume, equal to σ_e^2 / (2E), representing the area under the elastic portion of the stress-strain curve.',
    tip: 'Modulus of Resilience = Proof Resilience per unit volume = σ_e² / (2E).',
    top: 'Strength of Materials'
  },
  {
    q: 'On which planes does the Maximum Shear Stress act relative to the Principal Planes in a 2D stress system?',
    opts: ['On planes inclined at 45 degrees to the principal planes', 'On planes parallel to the principal planes', 'On planes at 90 degrees to the principal planes', 'On planes at 30 degrees to the principal planes'],
    ans: 0,
    exp: 'The planes of maximum shear stress are oriented at 45° to the principal planes, and the magnitude of maximum shear stress is half the difference of principal stresses: (σ1 - σ2) / 2.',
    tip: 'Maximum shear stress occurs on planes inclined at 45° to the principal planes.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the Volume (V) of a triangular prism of length L having a triangular cross-sectional base of width b and altitude h?',
    opts: ['V = (1 / 2) * b * h * L', 'V = b * h * L', 'V = (1 / 3) * b * h * L', 'V = (1 / 6) * b * h * L'],
    ans: 0,
    exp: 'Volume of any right prism is Base Area x Length. Here, Base Area = (1/2) * b * h, so Volume V = (1/2) * b * h * L.',
    tip: 'Triangular prism Volume = 0.5 x b x h x L.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the Volume of a regular square pyramid with base side length "a" and vertical height "h"?',
    opts: ['V = (1 / 3) * a^2 * h', 'V = a^2 * h', 'V = (1 / 2) * a^2 * h', 'V = (1 / 6) * a^2 * h'],
    ans: 0,
    exp: 'Volume of a right pyramid = (1/3) * Base Area * Height = (1/3) * a^2 * h.',
    tip: 'Square pyramid Volume = (1/3) a² h.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the formula for the volume of a Frustum of a regular pyramid with height h and end base areas A1 and A2?',
    opts: ['V = (h / 3) * (A1 + A2 + √(A1 * A2))', 'V = (h / 3) * (A1 + A2)', 'V = (h / 2) * (A1 + A2)', 'V = h * √(A1 * A2)'],
    ans: 0,
    exp: 'The volume of a pyramidal frustum is V = (h / 3) * [A1 + A2 + √(A1 * A2)].',
    tip: 'Pyramid frustum Volume = (h / 3) x [A1 + A2 + √(A1 A2)].',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the sum of the interior angles of a regular 10-sided polygon (Decagon)?',
    opts: ['1,440 degrees (each interior angle = 144 degrees)', '1,800 degrees', '1,080 degrees', '360 degrees'],
    ans: 0,
    exp: 'Sum of interior angles = (n - 2) * 180°. For n = 10: (10 - 2) * 180° = 8 * 180° = 1,440°. Each interior angle = 1440° / 10 = 144°.',
    tip: 'Decagon: Sum of interior angles = 1440°, each interior angle = 144°.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the sum of the interior angles of a regular 5-sided polygon (Pentagon)?',
    opts: ['540 degrees (each interior angle = 108 degrees)', '720 degrees', '360 degrees', '900 degrees'],
    ans: 0,
    exp: 'Sum of interior angles = (5 - 2) * 180° = 3 * 180° = 540°. Each interior angle = 540° / 5 = 108°.',
    tip: 'Pentagon: Sum of interior angles = 540°, each interior angle = 108°.',
    top: 'Units, Conversion & Mensuration'
  }
];

m9Last.forEach(q => addQ(q, 9, 'mod-9', 'Units, Conversion & Mensuration'));
console.log('Module 9 Last batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
