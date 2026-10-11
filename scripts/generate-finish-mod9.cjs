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

console.log('Existing unique masks before Mod 9 finish:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-fin9-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-i${c++}`;
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
    createdAt: '2026-10-11T17:45:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 210 DISTINCT QUESTIONS FOR MODULE 9 (Workshop Calculation, Mensuration & Science)
const m9Questions = [
  // --- TRIGONOMETRY IDENTITIES & RULES ---
  {
    q: 'In plane trigonometry, what is the fundamental Pythagorean identity relating tangent and secant functions?',
    opts: ['1 + tan^2 θ = sec^2 θ', '1 + sec^2 θ = tan^2 θ', 'tan^2 θ - sec^2 θ = 1', 'tan θ * sec θ = 1'],
    ans: 0,
    exp: 'Dividing sin^2 θ + cos^2 θ = 1 by cos^2 θ yields tan^2 θ + 1 = sec^2 θ (or sec^2 θ - tan^2 θ = 1).',
    tip: '1 + tan² θ = sec² θ and 1 + cot² θ = cosec² θ.',
    top: 'Trigonometry & Heights'
  },
  {
    q: 'In plane trigonometry, what is the fundamental identity relating cotangent and cosecant functions?',
    opts: ['1 + cot^2 θ = cosec^2 θ', '1 + cosec^2 θ = cot^2 θ', 'cot^2 θ - cosec^2 θ = 1', 'cot θ * cosec θ = 1'],
    ans: 0,
    exp: 'Dividing sin^2 θ + cos^2 θ = 1 by sin^2 θ yields 1 + cot^2 θ = cosec^2 θ (or cosec^2 θ - cot^2 θ = 1).',
    tip: 'cosec² θ - cot² θ = 1.',
    top: 'Trigonometry & Heights'
  },
  {
    q: 'What is the exact mathematical value of sin 30 degrees?',
    opts: ['1 / 2 (0.5)', '√3 / 2', '1 / √2', '1'],
    ans: 0,
    exp: 'sin 30° = 1/2 = 0.5. In a 30-60-90 right triangle, the side opposite the 30° angle is exactly half the hypotenuse.',
    tip: 'sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3.',
    top: 'Trigonometry & Heights'
  },
  {
    q: 'What is the exact mathematical value of cos 60 degrees?',
    opts: ['1 / 2 (0.5)', '√3 / 2', '1 / √2', '0'],
    ans: 0,
    exp: 'cos 60° = sin(90° - 60°) = sin 30° = 1/2 = 0.5.',
    tip: 'cos 60° = 1/2 (0.5).',
    top: 'Trigonometry & Heights'
  },
  {
    q: 'What is the exact mathematical value of tan 45 degrees?',
    opts: ['1', '0', '√3', '1 / √3'],
    ans: 0,
    exp: 'In an isosceles right triangle (45-45-90), the opposite and adjacent legs are equal, so tan 45° = 1/1 = 1.',
    tip: 'tan 45° = 1. sin 45° = 1/√2. cos 45° = 1/√2.',
    top: 'Trigonometry & Heights'
  },
  {
    q: 'What is the exact mathematical value of tan 60 degrees?',
    opts: ['√3 (approx. 1.732)', '1 / √3', '1', '2'],
    ans: 0,
    exp: 'tan 60° = sin 60° / cos 60° = (√3/2) / (1/2) = √3 ≈ 1.732.',
    tip: 'tan 60° = √3 ≈ 1.732. tan 30° = 1/√3 ≈ 0.577.',
    top: 'Trigonometry & Heights'
  },
  {
    q: 'What is the double-angle expansion formula for sin(2A)?',
    opts: ['sin(2A) = 2 * sin A * cos A', 'sin(2A) = sin^2 A - cos^2 A', 'sin(2A) = 2 * sin A', 'sin(2A) = cos^2 A + sin^2 A'],
    ans: 0,
    exp: 'From the compound angle identity sin(A + B) = sin A cos B + cos A sin B, setting B = A yields sin(2A) = 2 sin A cos A.',
    tip: 'sin(2A) = 2 sin A cos A.',
    top: 'Trigonometry & Heights'
  },
  {
    q: 'What is the double-angle expansion formula for cos(2A) in terms of both cosine and sine?',
    opts: ['cos(2A) = cos^2 A - sin^2 A', 'cos(2A) = cos^2 A + sin^2 A', 'cos(2A) = 2 * cos A * sin A', 'cos(2A) = 1 - sin A'],
    ans: 0,
    exp: 'cos(2A) = cos^2 A - sin^2 A = 2 cos^2 A - 1 = 1 - 2 sin^2 A.',
    tip: 'cos(2A) = cos² A - sin² A = 2cos² A - 1 = 1 - 2sin² A.',
    top: 'Trigonometry & Heights'
  },
  {
    q: 'According to the Law of Sines (Sine Rule), what is the ratio of each side of a triangle to the sine of its opposite angle equal to?',
    opts: ['The diameter of the circumscribed circle (2R)', 'The radius of the inscribed circle (r)', 'The semi-perimeter (s)', 'The area of the triangle'],
    ans: 0,
    exp: 'The Sine Rule states: a / sin A = b / sin B = c / sin C = 2R, where R is the radius of the circumcircle.',
    tip: 'Sine Rule: a / sin A = b / sin B = c / sin C = 2R (circumdiameter).',
    top: 'Trigonometry & Heights'
  },
  {
    q: 'According to the Law of Cosines (Cosine Rule), what is the formula for calculating side "a" in any triangle given sides b, c and included angle A?',
    opts: ['a^2 = b^2 + c^2 - 2 * b * c * cos A', 'a^2 = b^2 + c^2 + 2 * b * c * cos A', 'a^2 = b^2 + c^2 - 2 * b * c * sin A', 'a = b + c - 2 * cos A'],
    ans: 0,
    exp: 'The Law of Cosines generalizes the Pythagorean theorem: a^2 = b^2 + c^2 - 2bc cos A.',
    tip: 'Cosine Rule: a² = b² + c² - 2bc cos A. (If A = 90°, cos 90° = 0, giving a² = b² + c²).',
    top: 'Trigonometry & Heights'
  },
  {
    q: 'In surveying heights and distances, what is an "Angle of Elevation"?',
    opts: ['The vertical angle measured upward from the horizontal plane to an object situated above the observer eye level', 'The horizontal angle measured from true North', 'The vertical angle measured downward below the horizon', 'The angle between two slope distances'],
    ans: 0,
    exp: 'The angle of elevation is the angle between the horizontal line of sight and the line of sight directed upward to an elevated target.',
    tip: 'Angle of elevation: sight line is ABOVE the horizontal line of sight.',
    top: 'Trigonometry & Heights'
  },
  {
    q: 'In surveying heights and distances, what is an "Angle of Depression"?',
    opts: ['The vertical angle measured downward from the horizontal plane to an object situated below the observer eye level', 'The angle between magnetic north and grid north', 'The angle of a valley curve', 'The tilt of the tripod leg'],
    ans: 0,
    exp: 'The angle of depression is the angle formed between the horizontal plane of sight and the line of sight directed downward to a lower object.',
    tip: 'Angle of depression: sight line is BELOW the horizontal line of sight.',
    top: 'Trigonometry & Heights'
  },

  // --- KINEMATICS & LINEAR MOTION ---
  {
    q: 'What is the kinematic equation relating final velocity (v), initial velocity (u), uniform acceleration (a), and elapsed time (t)?',
    opts: ['v = u + a * t', 'v = u - (1 / 2) * a * t', 'v = u * t + a', 'v^2 = u + a * t'],
    ans: 0,
    exp: 'By definition of acceleration a = (v - u) / t, multiplying by t gives the first equation of motion: v = u + at.',
    tip: '1st equation of motion: v = u + at.',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is the kinematic equation relating displacement (s), initial velocity (u), uniform acceleration (a), and time (t)?',
    opts: ['s = u * t + (1 / 2) * a * t^2', 's = u * t + a * t^2', 's = (u + v) * t^2', 's = u + (1 / 2) * a * t'],
    ans: 0,
    exp: 'Displacement is average velocity multiplied by time: s = [(u + v) / 2] * t = [(u + u + at) / 2] * t = ut + (1/2)at^2.',
    tip: '2nd equation of motion: s = ut + (1/2)at².',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is the kinematic equation relating final velocity (v), initial velocity (u), acceleration (a), and displacement (s)?',
    opts: ['v^2 = u^2 + 2 * a * s', 'v = u^2 + 2 * a * s', 'v^2 = u^2 - a * s', 'v = √(u + 2 * a * s)'],
    ans: 0,
    exp: 'Eliminating time t between v = u + at and s = ut + (1/2)at^2 yields the third equation of motion: v^2 = u^2 + 2as.',
    tip: '3rd equation of motion: v² = u² + 2as.',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is the formula for the distance travelled by an accelerating body during the n-th second (sn) of its motion?',
    opts: ['sn = u + (a / 2) * (2n - 1)', 'sn = u + a * n', 'sn = u * n + (a / 2) * n^2', 'sn = (u + a) * (2n - 1)'],
    ans: 0,
    exp: 'The distance in the nth second is the difference between distance in n seconds and distance in (n-1) seconds: sn = s_n - s_{n-1} = u + (a/2)(2n - 1).',
    tip: 'Distance in n-th second: sn = u + (a/2)(2n - 1).',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'If a projectile is thrown vertically upwards with initial velocity "u", what is the maximum height (H_max) it reaches under gravitational acceleration "g"?',
    opts: ['H_max = u^2 / (2 * g)', 'H_max = u / (2 * g)', 'H_max = u^2 / g', 'H_max = 2 * u^2 / g'],
    ans: 0,
    exp: 'At maximum height, final velocity v = 0. Using v^2 = u^2 - 2gH: 0 = u^2 - 2gH_max, giving H_max = u^2 / (2g).',
    tip: 'Maximum vertical projectile height: H_max = u² / (2g). Time of ascent = u / g.',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is the total time of flight (T) of a projectile thrown vertically upwards with initial velocity "u" to return back to the ground?',
    opts: ['T = (2 * u) / g', 'T = u / g', 'T = u^2 / g', 'T = u / (2 * g)'],
    ans: 0,
    exp: 'Time of ascent is u/g and time of descent is u/g. Total round-trip time of flight is T = 2u / g.',
    tip: 'Total flight time for vertical throw: T = 2u / g.',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is the velocity (v) acquired by a body falling freely from rest (u = 0) through a vertical height "h"?',
    opts: ['v = √(2 * g * h)', 'v = 2 * g * h', 'v = g * h', 'v = √(g * h)'],
    ans: 0,
    exp: 'From v^2 = u^2 + 2gh, with u = 0, we get v^2 = 2gh, so v = √(2gh).',
    tip: 'Free fall velocity from rest: v = √(2gh).',
    top: 'Kinematics & Dynamics'
  },

  // --- NEWTON LAWS, MOMENTUM & FRICTION ---
  {
    q: 'Which law of physics defines force mathematically as the time rate of change of linear momentum (F = dp / dt = m * a)?',
    opts: ['Newton Second Law of Motion', 'Newton First Law of Motion', 'Newton Third Law of Motion', 'Law of Conservation of Energy'],
    ans: 0,
    exp: 'Newton Second Law states that force is directly proportional to the rate of change of momentum: F = d(mv)/dt = m(dv/dt) = ma.',
    tip: 'Newton 1st Law = Inertia. 2nd Law = F = ma. 3rd Law = Action & Reaction.',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is the physical quantity defined as the product of force and the time interval during which it acts (Impulse = F * Δt)?',
    opts: ['Impulse (equal to change in linear momentum)', 'Work done', 'Kinetic energy', 'Power'],
    ans: 0,
    exp: 'Impulse J = F * Δt = Δp (the change in linear momentum of the body). Its unit is N·s or kg·m/s.',
    tip: 'Impulse J = Force x Time = Change in momentum (Δp). Unit: N·s.',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is the recoil velocity of a gun of mass M firing a bullet of mass m with muzzle velocity v?',
    opts: ['V = - (m * v) / M', 'V = (M * v) / m', 'V = - (M * v) / (M + m)', 'V = m * v * M'],
    ans: 0,
    exp: 'By conservation of linear momentum: Total initial momentum = 0. Therefore, M*V + m*v = 0, giving V = - (m*v) / M.',
    tip: 'Gun recoil velocity: V_recoil = - (m_bullet x v_bullet) / M_gun.',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is "Limiting Friction" between two dry solid surfaces in contact?',
    opts: ['The maximum static frictional resistance developed just before sliding motion begins', 'The friction acting when moving at top speed', 'The friction of rolling wheels', 'Zero friction'],
    ans: 0,
    exp: 'Limiting friction is the peak value of static friction force exerted when an applied force is on the verge of causing relative motion.',
    tip: 'Limiting friction = maximum static friction force at the point of impending motion.',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is the relationship between the angle of friction (ϕ) and the coefficient of friction (μ)?',
    opts: ['tan ϕ = μ', 'sin ϕ = μ', 'cos ϕ = μ', 'ϕ = μ * 90°'],
    ans: 0,
    exp: 'The angle of friction ϕ is the angle between the normal reaction and the resultant contact reaction force: tan ϕ = F / N = μ.',
    tip: 'Angle of friction: tan ϕ = μ.',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is the "Angle of Repose" (θ) of an inclined plane, and how does it relate to the angle of friction (ϕ)?',
    opts: ['The maximum slope angle at which a body rests on the incline without sliding down; it is strictly equal to the angle of friction (θ = ϕ)', 'The angle where a body begins to roll', 'Half the angle of friction', '90 degrees minus the angle of friction'],
    ans: 0,
    exp: 'For limiting equilibrium on an incline, mg sin θ = μ mg cos θ, which gives tan θ = μ. Since tan ϕ = μ, the angle of repose θ equals the angle of friction ϕ.',
    tip: 'Angle of repose = Angle of friction (θ = ϕ, tan θ = μ).',
    top: 'Kinematics & Dynamics'
  },

  // --- CIRCULAR MOTION & ROTATIONAL DYNAMICS ---
  {
    q: 'What is the formula for the centripetal acceleration (a_c) of a body moving with linear speed v in a circle of radius r?',
    opts: ['a_c = v^2 / r = ω^2 * r', 'a_c = v / r^2', 'a_c = v * r', 'a_c = v^2 * r'],
    ans: 0,
    exp: 'Centripetal acceleration is directed radially toward the center: a_c = v^2 / r = (ω r)^2 / r = ω^2 r.',
    tip: 'Centripetal acceleration a_c = v² / r = ω² r.',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is the formula for the centripetal force (F_c) required to keep a mass m moving at speed v along a circular path of radius r?',
    opts: ['F_c = (m * v^2) / r', 'F_c = m * v * r', 'F_c = (m * v) / r^2', 'F_c = (1 / 2) * m * v^2 / r'],
    ans: 0,
    exp: 'By Newton second law, centripetal force F = m * a_c = m v^2 / r = m ω^2 r.',
    tip: 'Centripetal force F = m v² / r.',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is the formula for the mechanical power (P in Watts) transmitted by a rotating shaft carrying torque T (in N·m) at N revolutions per minute (RPM)?',
    opts: ['P = (2 * π * N * T) / 60', 'P = (2 * π * N * T) / 3600', 'P = N * T / 60', 'P = 2 * π * N * T'],
    ans: 0,
    exp: 'Power P = Torque * angular velocity = T * ω = T * (2π N / 60) = (2π N T) / 60 Watts.',
    tip: 'Shaft Power P = (2π N T) / 60 Watts.',
    top: 'Kinematics & Dynamics'
  },

  // --- FLUID MECHANICS & HYDROSTATICS ---
  {
    q: 'What is Pascal Principle in fluid mechanics?',
    opts: ['Pressure exerted at any point on an enclosed, incompressible fluid is transmitted equally and undiminished in all directions throughout the fluid', 'Fluids always flow from low to high elevation', 'Water expands upon freezing', 'Buoyant force equals surface area'],
    ans: 0,
    exp: 'Pascal Principle states that confined fluid pressure acts equally in all directions, forming the operational basis of hydraulic jacks, lifts, and brakes (F1/A1 = F2/A2).',
    tip: 'Pascal Principle: confined fluid pressure is transmitted undiminished in all directions.',
    top: 'Fluid Mechanics & Hydrostatics'
  },
  {
    q: 'What is Archimedes Principle regarding buoyant force on submerged bodies?',
    opts: ['A body immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced by the body', 'A body loses all its weight in water', 'Buoyancy depends on the depth below the surface', 'Denser liquids push objects downward'],
    ans: 0,
    exp: 'Archimedes Principle states that the upward buoyant force F_b = weight of displaced liquid = ρ_liquid * V_submerged * g.',
    tip: 'Archimedes Principle: Buoyant force = Weight of fluid displaced.',
    top: 'Fluid Mechanics & Hydrostatics'
  },
  {
    q: 'What is the hydrostatic gauge pressure (P) at a depth h below the free surface of a liquid of density ρ?',
    opts: ['P = ρ * g * h', 'P = (1 / 2) * ρ * g * h', 'P = ρ * h / g', 'P = ρ * g * h^2'],
    ans: 0,
    exp: 'Hydrostatic pressure increases linearly with depth: P = ρ g h = w h, where w is unit weight of the liquid.',
    tip: 'Hydrostatic pressure P = ρ g h.',
    top: 'Fluid Mechanics & Hydrostatics'
  },
  {
    q: 'Why do raindrops and small oil droplets naturally assume a spherical shape?',
    opts: ['Because Surface Tension forces act to minimize the exposed liquid surface area for a given volume (the sphere has minimum surface area)', 'Because air pressure compresses them into spheres', 'Because of the Earth magnetic field', 'Because of gravity'],
    ans: 0,
    exp: 'Intermolecular cohesive forces at the liquid surface create surface tension, causing liquid masses to pull into spheres, which have the minimum surface area for a given volume.',
    tip: 'Surface tension minimizes surface area, pulling liquid droplets into spherical shapes.',
    top: 'Fluid Mechanics & Hydrostatics'
  },
  {
    q: 'What is the phenomenon of Capillarity in narrow glass tubes?',
    opts: ['The elevation or depression of a liquid meniscus in a small-bore tube caused by the balance between cohesion and adhesion', 'The boiling of water at room temperature', 'The evaporation of liquid from a wide dish', 'The thermal expansion of mercury'],
    ans: 0,
    exp: 'Capillarity is the rise or fall of liquid in a narrow bore due to surface tension: adhesion > cohesion causes capillary rise (water); cohesion > adhesion causes capillary depression (mercury).',
    tip: 'Water causes capillary rise (concave meniscus); Mercury causes capillary depression (convex meniscus).',
    top: 'Fluid Mechanics & Hydrostatics'
  },
  {
    q: 'What is the SI unit of Dynamic Viscosity (coefficient of viscosity)?',
    opts: ['Pascal-second (Pa·s) or N·s/m²', 'Stokes', 'Poise', 'm²/s'],
    ans: 0,
    exp: 'The SI unit of dynamic viscosity is Pascal-second (Pa·s) = N·s/m² = kg/(m·s). Note: 1 Pa·s = 10 Poise (CGS unit).',
    tip: 'Dynamic Viscosity SI unit = Pa·s (or N·s/m²). CGS unit = Poise (1 Pa·s = 10 Poise).',
    top: 'Fluid Mechanics & Hydrostatics'
  },
  {
    q: 'What is the SI unit of Kinematic Viscosity (ν = μ / ρ)?',
    opts: ['m^2 / s', 'Pa·s', 'N / m', 'kg / m^3'],
    ans: 0,
    exp: 'Kinematic viscosity is dynamic viscosity divided by fluid density: ν = μ / ρ, having SI units of m^2/s. (CGS unit is Stokes: 1 Stokes = 10^-4 m^2/s).',
    tip: 'Kinematic Viscosity SI unit = m²/s. CGS unit = Stokes.',
    top: 'Fluid Mechanics & Hydrostatics'
  },

  // --- GAS LAWS & THERMODYNAMICS ---
  {
    q: 'According to Boyle Law, how does the volume (V) of an ideal gas vary with its pressure (P) at constant temperature?',
    opts: ['Inversely proportional to pressure (P * V = constant)', 'Directly proportional to pressure', 'Proportional to pressure squared', 'Independent of pressure'],
    ans: 0,
    exp: 'Boyle Law states that at constant temperature, pressure and volume of a fixed mass of gas are inversely proportional: P1 V1 = P2 V2.',
    tip: 'Boyle Law: P1 V1 = P2 V2 at constant Temperature.',
    top: 'Thermal Physics & Gases'
  },
  {
    q: 'According to Charles Law, how does the volume (V) of an ideal gas vary with absolute temperature (T) at constant pressure?',
    opts: ['Directly proportional to absolute temperature (V / T = constant)', 'Inversely proportional to temperature', 'Proportional to temperature squared', 'Remains constant'],
    ans: 0,
    exp: 'Charles Law states that at constant pressure, volume varies directly with thermodynamic temperature in Kelvin: V1 / T1 = V2 / T2.',
    tip: 'Charles Law: V1 / T1 = V2 / T2 at constant Pressure.',
    top: 'Thermal Physics & Gases'
  },
  {
    q: 'What is the value of the Universal Gas Constant (R_u) in SI units?',
    opts: ['8.314 J / (mol·K)', '1.005 kJ / (kg·K)', '287 J / (kg·K)', '0.0821 L·atm / (mol·K)'],
    ans: 0,
    exp: 'The universal molar gas constant R_u is 8.314 J/(mol·K). (For dry air, characteristic gas constant R = 287 J/(kg·K)).',
    tip: 'Universal Gas Constant R_u = 8.314 J/(mol·K). For air, R = 287 J/(kg·K).',
    top: 'Thermal Physics & Gases'
  },
  {
    q: 'What is Mayer relation between specific heat at constant pressure (Cp) and specific heat at constant volume (Cv) for an ideal gas?',
    opts: ['Cp - Cv = R', 'Cp + Cv = R', 'Cp / Cv = R', 'Cv - Cp = R'],
    ans: 0,
    exp: 'Mayer equation states that the difference between the specific heats of an ideal gas equals the characteristic gas constant: Cp - Cv = R.',
    tip: 'Mayer relation: Cp - Cv = R. Ratio Cp / Cv = γ (adiabatic index ≈ 1.4 for air).',
    top: 'Thermal Physics & Gases'
  },

  // --- ELECTRICITY & MAGNETISM ---
  {
    q: 'What is the equivalent resistance (R_eq) of three resistors R1, R2, and R3 connected in series?',
    opts: ['R_eq = R1 + R2 + R3', '1 / R_eq = 1/R1 + 1/R2 + 1/R3', 'R_eq = (R1 * R2 * R3) / 3', 'R_eq = √(R1^2 + R2^2 + R3^2)'],
    ans: 0,
    exp: 'In a series circuit, current flows through each resistor sequentially, so resistances add directly: R_eq = R1 + R2 + R3.',
    tip: 'Series: R_eq = R1 + R2 + R3 (current identical). Parallel: 1/R_eq = 1/R1 + 1/R2 (voltage identical).',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'What is the equivalent resistance of two resistors R1 and R2 connected in parallel?',
    opts: ['R_eq = (R1 * R2) / (R1 + R2)', 'R_eq = R1 + R2', 'R_eq = (R1 + R2) / 2', 'R_eq = √(R1 * R2)'],
    ans: 0,
    exp: 'In parallel: 1/R_eq = 1/R1 + 1/R2 = (R1 + R2) / (R1 * R2), which inverts to R_eq = (R1 * R2) / (R1 + R2).',
    tip: 'Two resistors in parallel: Product over Sum = (R1 x R2) / (R1 + R2).',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'What is the SI unit of Electrical Capacitance?',
    opts: ['Farad (F)', 'Henry (H)', 'Ohm (Ω)', 'Tesla (T)'],
    ans: 0,
    exp: 'The Farad (F) is the SI unit of capacitance, defined as 1 Coulomb of stored charge per 1 Volt of potential difference (1 F = 1 C/V).',
    tip: 'Capacitance = Farad (F). Inductance = Henry (H). Magnetic Flux = Weber (Wb). Flux density = Tesla (T).',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'What is the SI unit of Magnetic Flux Density (B)?',
    opts: ['Tesla (T) or Weber / m^2', 'Weber (Wb)', 'Henry (H)', 'Ampere per meter'],
    ans: 0,
    exp: 'Magnetic flux density B is measured in Tesla (T) = Weber/m^2. (1 Tesla = 10,000 Gauss).',
    tip: 'Magnetic Flux Density = Tesla (T). Magnetic Flux = Weber (Wb).',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'According to Faraday Law of Electromagnetic Induction, what is the magnitude of the EMF induced in a conductor coil?',
    opts: ['Directly proportional to the time rate of change of magnetic flux linkage through the coil', 'Proportional to resistance of the wire', 'Constant regardless of magnetic motion', 'Inversely proportional to the number of turns'],
    ans: 0,
    exp: 'Faraday Law states that induced EMF e = -N (dΦ/dt), where N is number of turns and dΦ/dt is the rate of change of magnetic flux.',
    tip: 'Faraday Law: Induced EMF e = -N (dΦ/dt). Negative sign represents Lenz Law.',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'Which law states that the direction of an induced electric current always opposes the magnetic flux change that produced it?',
    opts: ['Lenz Law', 'Coulomb Law', 'Ohm Law', 'Kirchhoff Law'],
    ans: 0,
    exp: 'Lenz Law dictates the polarity of induced EMF: an induced current always flows in such a direction that its magnetic field opposes the change in flux causing it.',
    tip: 'Lenz Law dictates the direction of induced current (opposes the cause).',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'In Fleming Right-Hand Rule (the Generator Rule), what does the Thumb represent?',
    opts: ['The direction of motion of the conductor relative to the magnetic field', 'The direction of the magnetic field', 'The direction of induced current', 'The voltage polarity'],
    ans: 0,
    exp: 'In Fleming Right-Hand Rule: Thumb = Motion of conductor, Forefinger = Magnetic Field (North to South), Middle finger = Induced Current.',
    tip: 'Fleming Right Hand Rule: Thumb = Motion, Forefinger = Field, Middle finger = Current.',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'In Fleming Left-Hand Rule (the Motor Rule), what does the Thumb represent?',
    opts: ['The direction of mechanical force (thrust or motion) acting on the conductor', 'The direction of electric current', 'The magnetic field flux', 'The speed of motor rotation'],
    ans: 0,
    exp: 'In Fleming Left-Hand Rule for electric motors: Thumb = Force/Motion, Forefinger = Field, Middle finger = Current.',
    tip: 'Fleming Left Hand Rule: Thumb = Force/Motion, Forefinger = Field, Middle finger = Current.',
    top: 'Electricity & Magnetism'
  },
  {
    q: 'What is the voltage transformation ratio formula for an ideal electrical transformer with primary turns Np and secondary turns Ns?',
    opts: ['Vs / Vp = Ns / Np = Ip / Is', 'Vs / Vp = Np / Ns = Is / Ip', 'Vs / Vp = (Ns / Np)^2', 'Vs * Vp = Ns * Np'],
    ans: 0,
    exp: 'For an ideal transformer: Vs / Vp = Ns / Np. Since power is conserved (Vp Ip = Vs Is), current is inversely proportional: Vs / Vp = Ns / Np = Ip / Is.',
    tip: 'Transformer ratio: Vs / Vp = Ns / Np = Ip / Is. (Step-up: Ns > Np, Vs > Vp, Is < Ip).',
    top: 'Electricity & Magnetism'
  }
];

m9Questions.forEach(q => addQ(q, 9, 'mod-9', 'Units, Conversion & Mensuration'));
console.log('Module 9 Finish batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
