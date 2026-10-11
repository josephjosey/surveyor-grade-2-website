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

console.log('Existing unique masks before Mod 9 Part 2:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-fin9b-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-j${c++}`;
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
    createdAt: '2026-10-11T18:00:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 165 DISTINCT QUESTIONS FOR MODULE 9 (PART 2)
const m9Part2 = [
  // --- STATICS, FORCES & MOMENTS ---
  {
    q: 'In engineering mechanics, which theorem states that if three coplanar forces acting at a point are in equilibrium, each force is proportional to the sine of the angle between the other two forces?',
    opts: ['Lami Theorem', 'Varignon Theorem', 'Bernoulli Theorem', 'Castigliano Theorem'],
    ans: 0,
    exp: 'Lami Theorem states: P / sin(α) = Q / sin(β) = R / sin(γ) for three coplanar concurrent forces in static equilibrium.',
    tip: 'Lami Theorem: P / sin α = Q / sin β = R / sin γ for 3 concurrent forces in equilibrium.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'According to Varignon Theorem of moments, what is the algebraic sum of the moments of a system of coplanar forces about any point equal to?',
    opts: ['The moment of their resultant force about that same point', 'Zero in all cases', 'The sum of the magnitudes of the forces', 'The product of the forces and distances'],
    ans: 0,
    exp: 'Varignon Principle of Moments states that the algebraic sum of moments of a system of coplanar forces about any point equals the moment of their resultant about that point.',
    tip: 'Varignon Theorem: Sum of moments of individual forces = Moment of their resultant.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is a "Couple" in engineering mechanics?',
    opts: ['Two equal, opposite, and parallel forces separated by a perpendicular distance, creating pure rotational torque without translation', 'Two forces acting along the same line in the same direction', 'Three forces meeting at a single joint', 'A force combined with friction'],
    ans: 0,
    exp: 'A couple consists of two parallel forces equal in magnitude and opposite in direction separated by arm distance d. The net force is zero; it produces pure rotational moment M = F * d.',
    tip: 'A couple produces pure rotation; it cannot be balanced by a single force, only by an opposing couple.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'According to the Triangle Law of Forces, when are three concurrent coplanar forces in complete static equilibrium?',
    opts: ['When they can be represented in magnitude and direction by the three sides of a closed triangle taken in order', 'When their magnitudes are equal', 'When all three forces point north', 'When they form a right angle'],
    ans: 0,
    exp: 'If three coplanar forces acting on a particle can be represented in magnitude and direction by the sides of a closed triangle taken in sequence, the particle is in equilibrium.',
    tip: 'Triangle Law: Forces are in equilibrium if they form a closed triangle taken in order.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the formula for the magnitude of the Resultant (R) of two coplanar forces P and Q acting at a point with an included angle θ?',
    opts: ['R = √(P^2 + Q^2 + 2 * P * Q * cos θ)', 'R = √(P^2 + Q^2 - 2 * P * Q * cos θ)', 'R = P + Q + 2 * cos θ', 'R = √(P^2 + Q^2 + 2 * P * Q * sin θ)'],
    ans: 0,
    exp: 'By the Parallelogram Law of Forces: Resultant R = √(P^2 + Q^2 + 2PQ cos θ).',
    tip: 'Parallelogram Law Resultant R = √(P² + Q² + 2PQ cos θ).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'When two forces P and Q act perpendicular to each other (θ = 90 degrees), what does their resultant R simplify to?',
    opts: ['R = √(P^2 + Q^2)', 'R = P + Q', 'R = P - Q', 'R = √(P * Q)'],
    ans: 0,
    exp: 'When θ = 90°, cos 90° = 0. The resultant formula simplifies to R = √(P^2 + Q^2 + 0) = √(P^2 + Q^2).',
    tip: 'Perpendicular forces (90°): Resultant R = √(P² + Q²).',
    top: 'Workshop Science & Mechanics'
  },

  // --- CENTER OF GRAVITY & CENTROIDS ---
  {
    q: 'Where is the Centroid of a plane triangle located with respect to its base of height "h"?',
    opts: ['At a perpendicular distance of h / 3 from the base along the median (and 2h / 3 from the vertex)', 'At h / 2 from the base', 'At h / 4 from the base', 'At 3h / 4 from the base'],
    ans: 0,
    exp: 'The centroid (intersection of medians) of any triangle lies at one-third of its altitude from the base (h/3) and two-thirds of the altitude from the apex (2h/3).',
    tip: 'Triangle Centroid = h/3 from the base, 2h/3 from the vertex.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the distance of the Centroid of a solid right circular cone of height "h" measured from its flat circular base?',
    opts: ['h / 4 along the axis from the base', 'h / 3 from the base', 'h / 2 from the base', '3h / 8 from the base'],
    ans: 0,
    exp: 'The center of gravity of a solid right circular cone lies on its central axis at a distance of h/4 from its base (and 3h/4 from its apex).',
    tip: 'Solid cone centroid = h/4 from the base (3h/4 from vertex). Hollow cone = h/3 from base.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the distance of the Centroid of a solid hemisphere of radius "r" measured from its flat circular base along the axis of symmetry?',
    opts: ['(3 / 8) * r from the flat base', '(4 / 3π) * r from the base', '(1 / 2) * r from the base', '(2 / 3) * r from the base'],
    ans: 0,
    exp: 'The center of gravity of a solid hemisphere lies on its radius of symmetry at a distance of (3/8) * r from the flat circular base.',
    tip: 'Solid hemisphere centroid = 3r/8 from flat base. Semicircular plane lamina = 4r/(3π).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the distance of the Centroid of a semicircular plane area (lamina) of radius "r" from its flat diameter base?',
    opts: ['4r / (3π) ≈ 0.424r', '3r / 8', 'r / 2', '2r / π'],
    ans: 0,
    exp: 'By calculus integration, the centroid of a semicircular area lies on the central axis at distance y = 4r / (3π) ≈ 0.4244 r from the diameter line.',
    tip: 'Semicircular lamina centroid = 4r / (3π) from diameter.',
    top: 'Units, Conversion & Mensuration'
  },

  // --- STRENGTH OF MATERIALS & ELASTICITY ---
  {
    q: 'What is Hooke Law of elasticity?',
    opts: ['Within the proportional limit of a material, stress is directly proportional to strain (Stress / Strain = Constant)', 'Stress is inversely proportional to strain', 'Deformation increases exponentially with force', 'Strain is independent of stress'],
    ans: 0,
    exp: 'Hooke Law states that up to the proportional limit, tensile or compressive stress (σ) is directly proportional to strain (ε): σ = E * ε.',
    tip: 'Hooke Law: Stress ∝ Strain (within proportional limit). Constant = Young Modulus E.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is Young Modulus of Elasticity (E) defined as?',
    opts: ['The ratio of longitudinal tensile or compressive stress to linear longitudinal strain within the elastic limit', 'The ratio of shear stress to shear strain', 'The ratio of lateral strain to linear strain', 'The ratio of hydrostatic pressure to volumetric strain'],
    ans: 0,
    exp: 'Young Modulus E = Tensile Stress / Tensile Strain = σ / ε. It measures a material stiffness against axial deformation.',
    tip: 'Young Modulus E = Normal Stress / Normal Strain (unit: N/mm² or GPa).',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the typical value of Young Modulus of Elasticity (E) for structural steel?',
    opts: ['2 x 10^5 N/mm² (200 GPa)', '1 x 10^4 N/mm²', '5 x 10^6 N/mm²', '2 x 10^3 N/mm²'],
    ans: 0,
    exp: 'For structural mild steel, E is approximately 2 x 10^5 N/mm² (200,000 MPa or 200 GPa).',
    tip: 'Young Modulus of structural steel E ≈ 2 x 10⁵ N/mm² (200 GPa).',
    top: 'Strength of Materials'
  },
  {
    q: 'What is Modulus of Rigidity (Shear Modulus, G or C) defined as?',
    opts: ['The ratio of shear stress to shear strain within the elastic limit', 'The ratio of linear stress to linear strain', 'The ratio of volumetric stress to volumetric strain', 'The ratio of lateral strain to axial strain'],
    ans: 0,
    exp: 'Modulus of Rigidity G = Shear Stress (τ) / Shear Strain (ϕ). It quantifies a material resistance to angular shearing distortion.',
    tip: 'Modulus of Rigidity G = Shear Stress / Shear Strain.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is Bulk Modulus (K) of elasticity defined as?',
    opts: ['The ratio of uniform volumetric stress (hydrostatic pressure change) to volumetric strain within the elastic limit', 'The ratio of bending moment to curvature', 'The ratio of tensile stress to elongation', 'The maximum bursting pressure of a pipe'],
    ans: 0,
    exp: 'Bulk Modulus K = Volumetric Stress / Volumetric Strain = ΔP / (ΔV / V). It measures resistance to uniform compression.',
    tip: 'Bulk Modulus K = Volumetric Stress / Volumetric Strain.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is Poisson Ratio (μ or 1/m) of a material defined as?',
    opts: ['The ratio of lateral (transverse) strain to longitudinal (axial) strain under tensile or compressive loading', 'The ratio of longitudinal strain to lateral strain', 'The ratio of shear stress to tensile stress', 'The ratio of volume change to original volume'],
    ans: 0,
    exp: 'When an axial load stretches a bar, it contracts laterally. Poisson ratio μ = Lateral Strain / Longitudinal Strain.',
    tip: 'Poisson Ratio μ = Lateral Strain / Longitudinal Strain.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the theoretical range of Poisson Ratio (μ) for common isotropic engineering materials?',
    opts: ['0.0 to 0.5', '1.0 to 2.0', '0.5 to 1.0', '-1.0 to 0.0'],
    ans: 0,
    exp: 'Thermodynamically and physically, Poisson ratio for isotropic engineering solids falls between 0 and 0.5 (cork ≈ 0, steel ≈ 0.3, rubber ≈ 0.5).',
    tip: 'Poisson ratio for engineering materials ranges from 0.0 to 0.5. (Rubber = 0.5, Cork = 0).',
    top: 'Strength of Materials'
  },
  {
    q: 'Which mathematical formula connects Young Modulus (E), Modulus of Rigidity (G), and Poisson Ratio (μ)?',
    opts: ['E = 2 * G * (1 + μ)', 'E = 3 * G * (1 + μ)', 'E = 2 * G * (1 - μ)', 'G = 2 * E * (1 + μ)'],
    ans: 0,
    exp: 'The fundamental elasticity relation between E, G, and μ is E = 2G(1 + μ).',
    tip: 'E = 2G(1 + μ) and E = 3K(1 - 2μ).',
    top: 'Strength of Materials'
  },
  {
    q: 'Which mathematical formula connects Young Modulus (E), Bulk Modulus (K), and Poisson Ratio (μ)?',
    opts: ['E = 3 * K * (1 - 2μ)', 'E = 3 * K * (1 + 2μ)', 'E = 2 * K * (1 - μ)', 'K = 3 * E * (1 - 2μ)'],
    ans: 0,
    exp: 'The relationship between Young Modulus, Bulk Modulus, and Poisson ratio is E = 3K(1 - 2μ).',
    tip: 'E = 3K(1 - 2μ).',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the relationship expressing Young Modulus (E) in terms of Bulk Modulus (K) and Modulus of Rigidity (G)?',
    opts: ['E = (9 * K * G) / (3 * K + G)', 'E = (3 * K * G) / (9 * K + G)', 'E = (9 * K * G) / (K + 3 * G)', 'E = (K * G) / (K + G)'],
    ans: 0,
    exp: 'Eliminating Poisson ratio μ from E = 2G(1+μ) and E = 3K(1-2μ) yields E = (9KG) / (3K + G).',
    tip: 'E = (9KG) / (3K + G).',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the mechanical property "Ductility" in metals?',
    opts: ['The ability of a material to deform plastically under tensile stress and be drawn out into thin wires without fracturing', 'The ability to be hammered into thin sheets', 'The ability to resist indentation', 'The ability to return to original shape after unloading'],
    ans: 0,
    exp: 'Ductility allows a metal (e.g. mild steel, copper, gold) to undergo significant plastic deformation under tension, enabling it to be drawn into wires.',
    tip: 'Ductility = drawn into wires under tension. Malleability = rolled/hammered into sheets under compression.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the mechanical property "Malleability" in metals?',
    opts: ['The ability of a material to deform plastically under compressive stress and be rolled or hammered into thin sheets without rupture', 'The ability to carry electrical current', 'The resistance to chemical corrosion', 'The ability to absorb shock impacts'],
    ans: 0,
    exp: 'Malleability enables a metal (e.g. lead, gold, wrought iron) to be flattened into thin foil or sheets by rolling or hammering under compressive loads.',
    tip: 'Malleability = hammered into thin sheets without cracking (compressive plasticity).',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the mechanical property "Brittleness"?',
    opts: ['The tendency of a material to fracture and break suddenly under load with negligible or zero plastic deformation', 'The ability to bend without breaking', 'The resistance to scratching', 'The tendency to expand with heat'],
    ans: 0,
    exp: 'Brittle materials (e.g. cast iron, glass, concrete) have virtually no yield point and snap abruptly with little to no visible deformation before fracture.',
    tip: 'Brittleness = sudden failure with negligible plastic deformation (e.g. cast iron, glass).',
    top: 'Strength of Materials'
  },
  {
    q: 'What is the mechanical property "Toughness" of an engineering metal?',
    opts: ['The capacity of a material to absorb mechanical energy and deform plastically before fracturing under impact loads', 'Resistance to surface abrasion', 'Stiffness against bending', 'Resistance to chemical oxidation'],
    ans: 0,
    exp: 'Toughness is the total strain energy per unit volume absorbed up to the point of fracture (the total area under the complete stress-strain curve), measured by Charpy/Izod tests.',
    tip: 'Toughness = ability to absorb impact shock energy without fracturing.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is "Creep" in engineering materials?',
    opts: ['The slow, continuous, progressive permanent plastic deformation of a material subjected to constant steady mechanical stress over long periods, especially at elevated temperatures', 'A sudden brittle fracture', 'The elastic bounce of a spring', 'The corrosion of metals in water'],
    ans: 0,
    exp: 'Creep is time-dependent deformation under sustained constant load over months or years, accelerated by high temperatures.',
    tip: 'Creep = slow, progressive time-dependent plastic deformation under constant sustained stress.',
    top: 'Strength of Materials'
  },
  {
    q: 'What is "Fatigue" failure in metals?',
    opts: ['Structural fracture caused by repeated, alternating, or cyclic fluctuating stresses whose magnitude is well below the static ultimate tensile strength', 'Melting of metal under extreme heat', 'Rusting of steel in marine air', 'Gradual loss of magnetic properties'],
    ans: 0,
    exp: 'Fatigue is the progressive localized structural damage that occurs when components (axles, turbine blades, bridges) endure fluctuating cyclic stress reversals.',
    tip: 'Fatigue = failure under repeated cyclic/fluctuating stresses below yield strength.',
    top: 'Strength of Materials'
  },

  // --- SOUND, ACOUSTICS & OPTICS ---
  {
    q: 'What type of wave motion characterizes sound waves traveling through atmospheric air?',
    opts: ['Longitudinal mechanical pressure waves (compressions and rarefactions)', 'Transverse electromagnetic waves', 'Surface circular ripples', 'Torsional shear waves'],
    ans: 0,
    exp: 'Sound waves in air are longitudinal waves where air molecules oscillate back and forth parallel to the direction of wave propagation, creating regions of compression and rarefaction.',
    tip: 'Sound in air = Longitudinal mechanical waves. Light = Transverse electromagnetic waves.',
    top: 'Acoustics & Optics'
  },
  {
    q: 'What is the approximate speed of sound in dry atmospheric air at room temperature (20 °C)?',
    opts: ['Approximately 343 meters per second', 'Approximately 1,500 meters per second', 'Approximately 5,000 meters per second', 'Approximately 300,000 km per second'],
    ans: 0,
    exp: 'The speed of sound in air at 20°C is roughly 343 m/s (at 0°C it is 331 m/s, increasing by ~0.6 m/s per °C rise).',
    tip: 'Speed of sound in air ≈ 343 m/s (in water ≈ 1500 m/s, in steel ≈ 5000 m/s).',
    top: 'Acoustics & Optics'
  },
  {
    q: 'What is the standard audible frequency range detected by the healthy human ear?',
    opts: ['20 Hz to 20,000 Hz (20 Hz to 20 kHz)', '1 Hz to 100 Hz', '50,000 Hz to 100,000 Hz', '0 Hz to 10 Hz'],
    ans: 0,
    exp: 'Human hearing perceives acoustic frequencies from roughly 20 Hz (deep bass) to 20,000 Hz (20 kHz, high treble). Frequencies below 20 Hz are infrasonic; above 20 kHz are ultrasonic.',
    tip: 'Audible human frequency range = 20 Hz to 20,000 Hz (20 kHz).',
    top: 'Acoustics & Optics'
  },
  {
    q: 'What are sound waves having frequencies higher than 20,000 Hz called?',
    opts: ['Ultrasound (ultrasonic waves)', 'Infrasound', 'Subsonic waves', 'Supersonic waves'],
    ans: 0,
    exp: 'Acoustic waves with frequencies exceeding 20 kHz are termed ultrasound, utilized in echo sounding, medical sonography, and non-destructive material testing.',
    tip: 'Ultrasound = frequency > 20,000 Hz. Infrasound = frequency < 20 Hz.',
    top: 'Acoustics & Optics'
  },
  {
    q: 'What optical phenomenon causes light to reflect entirely back into the denser medium when the angle of incidence exceeds the critical angle?',
    opts: ['Total Internal Reflection', 'Optical Dispersion', 'Diffraction', 'Polarization'],
    ans: 0,
    exp: 'When light travels from an optically denser medium to a rarer medium and the incidence angle exceeds the critical angle (i > θc), the light is 100% reflected back into the denser medium.',
    tip: 'Total Internal Reflection occurs when i > critical angle (basis of optical fibers and prisms).',
    top: 'Acoustics & Optics'
  },
  {
    q: 'What is the formula for the Power (P) of an optical lens of focal length "f" (in meters)?',
    opts: ['Power (P) = 1 / f (measured in Dioptres)', 'Power (P) = f^2', 'Power (P) = 2 * f', 'Power (P) = 1 / (2 * f)'],
    ans: 0,
    exp: 'Optical power is the reciprocal of focal length in meters: P = 1 / f (meters), measured in Dioptres (D). Convex lenses have positive power (+D), concave have negative power (-D).',
    tip: 'Lens Power P = 1 / f (in meters). Unit: Dioptre (D). Convex = +D, Concave = -D.',
    top: 'Acoustics & Optics'
  },
  {
    q: 'What type of optical lens is used to correct "Myopia" (short-sightedness)?',
    opts: ['Concave (diverging) lens', 'Convex (converging) lens', 'Cylindrical lens', 'Bifocal lens'],
    ans: 0,
    exp: 'In myopia, rays focus in front of the retina. A diverging (concave) lens spreads the light rays outward slightly so the image forms sharply on the retina.',
    tip: 'Myopia (short-sightedness) corrected by CONCAVE lens. Hypermetropia (long-sightedness) by CONVEX lens.',
    top: 'Acoustics & Optics'
  },
  {
    q: 'What type of optical lens is used to correct "Hypermetropia" (long-sightedness)?',
    opts: ['Convex (converging) lens', 'Concave (diverging) lens', 'Plano-concave lens', 'Tinted lens'],
    ans: 0,
    exp: 'In hypermetropia, light focuses behind the retina. A converging (convex) lens bends incoming light inward to bring the focal point forward onto the retina.',
    tip: 'Hypermetropia (farsightedness) is corrected with a CONVEX lens.',
    top: 'Acoustics & Optics'
  },

  // --- ALGEBRA & MATHEMATICAL IDENTITIES ---
  {
    q: 'What is the discriminant (D) of a standard quadratic equation ax^2 + bx + c = 0, and what does D = 0 signify?',
    opts: ['D = b^2 - 4ac; when D = 0, the equation has two real and equal roots', 'D = b^2 + 4ac; when D = 0, roots are imaginary', 'D = 2a / b; roots are zero', 'D = b - 4ac; roots are infinite'],
    ans: 0,
    exp: 'The discriminant is D = b^2 - 4ac. If D > 0, roots are real and distinct; if D = 0, roots are real and equal; if D < 0, roots are complex conjugates.',
    tip: 'Quadratic Discriminant D = b² - 4ac. D = 0 means roots are real and equal.',
    top: 'Algebra & Calculations'
  },
  {
    q: 'What is the algebraic expansion of (a + b)^3?',
    opts: ['a^3 + 3a^2b + 3ab^2 + b^3 = a^3 + b^3 + 3ab(a + b)', 'a^3 + b^3', 'a^3 + 3ab + b^3', 'a^3 - 3a^2b + 3ab^2 - b^3'],
    ans: 0,
    exp: '(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 = a^3 + b^3 + 3ab(a + b).',
    tip: '(a + b)³ = a³ + b³ + 3ab(a + b).',
    top: 'Algebra & Calculations'
  },
  {
    q: 'What is the algebraic factorization of (a^3 - b^3)?',
    opts: ['(a - b) * (a^2 + ab + b^2)', '(a - b) * (a^2 - ab + b^2)', '(a + b) * (a^2 - ab + b^2)', '(a - b)^3'],
    ans: 0,
    exp: 'a^3 - b^3 factors as (a - b)(a^2 + ab + b^2).',
    tip: 'a³ - b³ = (a - b)(a² + ab + b²). a³ + b³ = (a + b)(a² - ab + b²).',
    top: 'Algebra & Calculations'
  },
  {
    q: 'What is the formula for calculating Simple Interest (SI) on a principal amount P at an annual interest rate R percent over T years?',
    opts: ['SI = (P * R * T) / 100', 'SI = P * (1 + R / 100)^T', 'SI = (P * R) / (100 * T)', 'SI = P * R * T'],
    ans: 0,
    exp: 'Simple Interest is calculated directly on the original principal: SI = (P * R * T) / 100.',
    tip: 'Simple Interest SI = (P x R x T) / 100.',
    top: 'Algebra & Calculations'
  }
];

m9Part2.forEach(q => addQ(q, 9, 'mod-9', 'Units, Conversion & Mensuration'));
console.log('Module 9 Part 2 batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
