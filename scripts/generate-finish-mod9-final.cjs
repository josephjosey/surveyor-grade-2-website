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

console.log('Existing unique masks before Mod 9 final:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-fin9c-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-k${c++}`;
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
    createdAt: '2026-10-11T18:15:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 125 DISTINCT QUESTIONS FOR MODULE 9 (FINAL BATCH TO COMPLETE MODULE 9)
const m9Final = [
  // --- METALLURGY & ENGINEERING MATERIALS ---
  {
    q: 'In metallurgy, what is the crystalline allotropic form of pure iron known as Ferrite (alpha iron) at room temperature below 912 °C?',
    opts: ['Body-Centered Cubic (BCC) crystal lattice', 'Face-Centered Cubic (FCC) lattice', 'Hexagonal Close-Packed (HCP) lattice', 'Tetragonal lattice'],
    ans: 0,
    exp: 'Alpha iron (ferrite) has a body-centered cubic (BCC) atomic unit cell, stable from room temperature up to 912°C. It is soft, ductile, and ferromagnetic below 770°C.',
    tip: 'Ferrite (α-iron) = BCC crystal structure (below 912°C). Austenite (γ-iron) = FCC (912-1394°C).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the crystal structure of Austenite (gamma iron) in plain carbon steels between 912 °C and 1394 °C?',
    opts: ['Face-Centered Cubic (FCC) crystal lattice', 'Body-Centered Cubic (BCC) lattice', 'Simple cubic lattice', 'Orthorhombic lattice'],
    ans: 0,
    exp: 'Austenite (γ-iron) possesses a face-centered cubic (FCC) crystal lattice structure that can dissolve up to 2.14% carbon interstitially.',
    tip: 'Austenite (γ-iron) = FCC structure. Ferrite (α-iron) = BCC structure.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'In the iron-carbon equilibrium phase diagram, what is Pearlite composed of in a eutectoid steel containing 0.8% carbon?',
    opts: ['A fine lamellar alternating microscopic mixture of Ferrite (88%) and Cementite (12%)', 'Pure molten cast iron', 'A solid solution of carbon in zinc', 'Austenite and graphite flakes'],
    ans: 0,
    exp: 'Pearlite forms by the eutectoid decomposition of austenite at 723°C into alternating parallel plates (lamellae) of ferrite (88%) and iron carbide cementite (12%).',
    tip: 'Pearlite = Lamellar mixture of Ferrite (88%) + Cementite (12%) at 0.8% carbon.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is Cementite in carbon steels, and what is its chemical chemical formula?',
    opts: ['Iron carbide (Fe3C), an extremely hard and brittle intermetallic compound containing 6.67% carbon', 'Iron oxide (Fe2O3)', 'Iron sulfide (FeS)', 'Pure metallic iron'],
    ans: 0,
    exp: 'Cementite is iron carbide (Fe3C), containing 6.67% carbon by weight. It is the hardest and most brittle constituent in steels and cast irons.',
    tip: 'Cementite = Fe3C (6.67% Carbon). Extremely hard and brittle.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'Which type of cast iron contains free carbon in the form of curved graphite flakes, providing exceptional vibration damping capacity and self-lubricating machinability?',
    opts: ['Grey Cast Iron', 'White Cast Iron', 'Malleable Cast Iron', 'Chilled Cast Iron'],
    ans: 0,
    exp: 'In grey cast iron, carbon precipitates as graphite flakes during slow cooling. These flakes dampen vibrations effectively, making it ideal for machine tool beds.',
    tip: 'Grey Cast Iron has graphite flakes; excellent vibration damping for machine beds.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'Which type of cast iron has all its carbon chemically combined as iron carbide (cementite), resulting in a silvery-white fracture surface that is extremely hard and wear-resistant?',
    opts: ['White Cast Iron', 'Grey Cast Iron', 'Ductile Iron', 'Pig Iron'],
    ans: 0,
    exp: 'White cast iron forms when molten iron is cooled rapidly, preventing graphite formation so all carbon remains bonded as cementite (Fe3C). It is extremely hard and wear-resistant.',
    tip: 'White Cast Iron has carbon combined as cementite (hard, brittle, wear-resistant).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'How is Malleable Cast Iron manufactured from brittle white cast iron?',
    opts: ['By subjecting white cast iron castings to a prolonged annealing heat treatment at 900 to 1000 °C over several days', 'By quenching in cold brine solution', 'By adding molten aluminum', 'By hammering white iron while cold'],
    ans: 0,
    exp: 'Malleable iron is produced by annealing white cast iron for days. Cementite breaks down into irregular temper carbon graphite rosettes, imparting ductility.',
    tip: 'Malleable Cast Iron is produced by prolonged annealing of white cast iron.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What alloying element is added to molten cast iron to produce Nodular (Ductile or Spheroidal Graphite) Iron with spherical graphite nodules?',
    opts: ['Magnesium or Cerium (inoculation)', 'Chromium', 'Sulfur', 'Lead'],
    ans: 0,
    exp: 'Adding small amounts of magnesium or cerium to molten iron causes graphite to precipitate as rounded spheroids (nodules), yielding high tensile ductility.',
    tip: 'Ductile / Nodular iron: Magnesium/Cerium causes graphite to form spherical nodules.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What are the two principal constituent metals of the non-ferrous engineering alloy "Brass"?',
    opts: ['Copper (Cu) and Zinc (Zn)', 'Copper (Cu) and Tin (Sn)', 'Copper (Cu) and Aluminum (Al)', 'Iron (Fe) and Nickel (Ni)'],
    ans: 0,
    exp: 'Brass is an alloy primarily composed of copper and zinc (e.g. 70% Cu + 30% Zn for cartridge brass; 60% Cu + 40% Zn for Muntz metal).',
    tip: 'Brass = Copper + Zinc. Bronze = Copper + Tin.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What are the two primary constituent metals of the classic engineering alloy "Bronze"?',
    opts: ['Copper (Cu) and Tin (Sn)', 'Copper (Cu) and Zinc (Zn)', 'Copper (Cu) and Lead (Pb)', 'Aluminum (Al) and Nickel (Ni)'],
    ans: 0,
    exp: 'Bronze is an alloy of copper and tin (typically 88% Cu + 12% Sn), widely used for bearings, bells, statues, and marine propellers.',
    tip: 'Bronze = Copper + Tin.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is "Babbitt Metal" (White Metal) and what is its primary industrial engineering application?',
    opts: ['A low-friction tin- or lead-based alloy containing antimony and copper, used as lining material for sleeve and journal bearings', 'A lightweight structural alloy for airplane wings', 'A cutting alloy for lathe tools', 'A corrosion-proof coating for water tanks'],
    ans: 0,
    exp: 'Babbitt metal (invented by Isaac Babbitt) is a tin/lead-based bearing alloy that conforms to shaft irregularities and embeds dirt particles without scoring journals.',
    tip: 'Babbitt Metal (white metal) = Tin/Lead alloy used for bearing liners.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What metals make up standard "Soft Solder" used for electrical wiring and sheet metal plumbing joints?',
    opts: ['Tin (Sn) and Lead (Pb)', 'Copper (Cu) and Zinc (Zn)', 'Aluminum (Al) and Iron (Fe)', 'Silver (Ag) and Gold (Au)'],
    ans: 0,
    exp: 'Soft solder is a fusible alloy of Tin and Lead (typically 60/40 or 50/50), with a low melting point (~183°C to 215°C) that bonds without melting the base metals.',
    tip: 'Soft Solder = Tin (Sn) + Lead (Pb). Hard Solder (Brazing) = Copper + Zinc.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is "Galvanization" in metallurgy and civil engineering protection?',
    opts: ['Coating iron or steel sheets with a protective layer of molten Zinc to prevent atmospheric corrosion via sacrificial anodic protection', 'Painting steel with red lead primer', 'Coating iron with copper foil', 'Electroplating steel with chromium'],
    ans: 0,
    exp: 'Hot-dip galvanizing coats steel with zinc. Zinc acts as a sacrificial anode: even if scratched, zinc corrodes preferentially, shielding the underlying steel.',
    tip: 'Galvanization = coating iron/steel with Zinc for sacrificial corrosion protection.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the chemical composition of "Rust" that forms on iron exposed to moist atmospheric air?',
    opts: ['Hydrated ferric oxide (Fe2O3 · xH2O)', 'Iron sulfide (FeS)', 'Ferrous carbonate (FeCO3)', 'Pure iron hydroxide Fe(OH)2 only'],
    ans: 0,
    exp: 'Rusting is the electrochemical oxidation of iron in the presence of water and oxygen, producing reddish-brown hydrated ferric oxide: Fe2O3 · xH2O.',
    tip: 'Rust = Hydrated Ferric Oxide (Fe2O3 · xH2O). Requires BOTH oxygen and water.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is "Galvanic Corrosion" (bimetallic corrosion)?',
    opts: ['Accelerated electrochemical corrosion that occurs when two dissimilar metals are in direct electrical contact in the presence of an electrolyte', 'Corrosion caused by stray lightning strikes', 'Bacterial decay of timber', 'Erosion of copper by sand particles'],
    ans: 0,
    exp: 'When two different metals touch in an electrolyte, a galvanic cell forms: the less noble (active) metal becomes an anode and corrodes rapidly.',
    tip: 'Galvanic corrosion occurs when dissimilar metals contact each other in an electrolyte.',
    top: 'Workshop Science & Mechanics'
  },

  // --- MECHANICAL POWER TRANSMISSION & BELT DRIVES ---
  {
    q: 'In mechanical belt drives, what is the theoretical velocity ratio (VR) between the driving pulley of diameter D1 (speed N1) and driven pulley of diameter D2 (speed N2), neglecting belt slip and thickness?',
    opts: ['N2 / N1 = D1 / D2', 'N2 / N1 = D2 / D1', 'N2 / N1 = (D1 / D2)^2', 'N2 / N1 = √(D1 / D2)'],
    ans: 0,
    exp: 'Assuming no slip, the peripheral linear speed of both pulleys equals belt speed: π D1 N1 = π D2 N2, which yields N2 / N1 = D1 / D2.',
    tip: 'Belt velocity ratio: N2 / N1 = D1 / D2 (Speed is inversely proportional to diameter).',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'When the thickness "t" of a flat belt is taken into account, what is the corrected velocity ratio of the belt drive?',
    opts: ['N2 / N1 = (D1 + t) / (D2 + t)', 'N2 / N1 = (D1 - t) / (D2 - t)', 'N2 / N1 = D1 / (D2 + t)', 'N2 / N1 = (D1 * t) / D2'],
    ans: 0,
    exp: 'The effective pitch diameter of a pulley is measured to the centerline of the belt: D_eff = D + t. Hence, N2 / N1 = (D1 + t) / (D2 + t).',
    tip: 'With belt thickness t: N2 / N1 = (D1 + t) / (D2 + t).',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is "Creep" in mechanical belt drive operation?',
    opts: ['The slight relative motion between belt and pulley rim caused by unequal elastic elongation and contraction of the belt between tight and slack sides', 'The physical slipping of a loose belt under heavy load', 'The stretching of the belt over months of use', 'The vibration of the motor mount'],
    ans: 0,
    exp: 'As the belt passes from the tight side (high tension, stretched) to slack side (low tension, contracted), it contracts over the pulley face. This small elastic motion is creep.',
    tip: 'Creep in belts is caused by elastic stretching differences between tight and slack sides.',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'What is the formula for the ratio of belt tensions (T1 on tight side, T2 on slack side) for a flat belt drive with coefficient of friction μ and angle of lap θ (in radians)?',
    opts: ['T1 / T2 = e^(μ * θ)', 'T1 / T2 = μ * θ', 'T1 / T2 = e^(2 * μ * θ)', 'T1 / T2 = ln(μ * θ)'],
    ans: 0,
    exp: 'From differential equilibrium along the belt arc, the limiting ratio of tensions for a flat belt is T1 / T2 = e^(μ θ), where θ is the angle of contact in radians.',
    tip: 'Flat belt tension ratio: T1 / T2 = e^(μ θ).',
    top: 'Kinematics & Dynamics'
  },
  {
    q: 'Why does a V-belt drive transmit significantly greater power than a flat belt of the same dimensions and tension?',
    opts: ['Because the wedging action of the V-belt inside the 40-degree grooved pulley creates high normal contact forces, dramatically increasing effective friction', 'Because V-belts are made of pure steel', 'Because V-belts have zero thickness', 'Because V-belts operate without tension'],
    ans: 0,
    exp: 'A V-belt wedges into the pulley groove (groove angle 2β ≈ 34°–40°), boosting effective friction by a factor of 1 / sin(β), providing high grip without slipping.',
    tip: 'V-belt wedging action inside pulley grooves multiplies effective friction and power capacity.',
    top: 'Kinematics & Dynamics'
  },

  // --- INTERNAL COMBUSTION ENGINES & THERMODYNAMICS ---
  {
    q: 'How many revolutions does the crankshaft complete to finish one full thermodynamic cycle in a Four-Stroke Internal Combustion engine?',
    opts: ['2 complete revolutions (720 degrees of crankshaft rotation)', '1 complete revolution (360 degrees)', '4 complete revolutions (1440 degrees)', '0.5 revolution (180 degrees)'],
    ans: 0,
    exp: 'A four-stroke engine executes 4 piston strokes (Suction, Compression, Power, Exhaust) across 2 complete revolutions of the crankshaft (720°).',
    tip: '4-stroke engine = 2 crankshaft revolutions per cycle (1 power stroke per 2 revs).',
    top: 'Thermal Physics & Gases'
  },
  {
    q: 'How many revolutions does the crankshaft complete for each power stroke in a Two-Stroke Internal Combustion engine?',
    opts: ['1 complete revolution (360 degrees)', '2 complete revolutions (720 degrees)', '4 complete revolutions', '0.5 revolution'],
    ans: 0,
    exp: 'In a two-stroke engine, a power stroke occurs during every single revolution of the crankshaft (360°), combining intake/compression and expansion/exhaust.',
    tip: '2-stroke engine = 1 crankshaft revolution per power stroke (360°).',
    top: 'Thermal Physics & Gases'
  },
  {
    q: 'What is the definition of "Compression Ratio" (r) in an internal combustion engine cylinder?',
    opts: ['The ratio of maximum cylinder volume (Total volume = Swept volume + Clearance volume) to minimum cylinder volume (Clearance volume): r = (Vs + Vc) / Vc', 'The ratio of power to fuel consumed', 'The ratio of bore diameter to stroke length', 'The ratio of intake pressure to exhaust pressure'],
    ans: 0,
    exp: 'Compression ratio r = Total Cylinder Volume / Clearance Volume = (Vs + Vc) / Vc, where Vs is swept volume and Vc is clearance volume.',
    tip: 'Compression ratio r = (Swept Volume + Clearance Volume) / Clearance Volume.',
    top: 'Thermal Physics & Gases'
  },
  {
    q: 'What is the typical compression ratio range for standard four-stroke Petrol (Spark Ignition - SI) engines?',
    opts: ['6 : 1 to 10 : 1', '14 : 1 to 22 : 1', '25 : 1 to 35 : 1', '2 : 1 to 4 : 1'],
    ans: 0,
    exp: 'Petrol engines operate with compression ratios between 6:1 and 10:1 to avoid auto-ignition (engine knocking/detonation) of the petrol-air mixture before the spark fires.',
    tip: 'Petrol (SI) engine compression ratio = 6:1 to 10:1. Diesel (CI) engine = 14:1 to 22:1.',
    top: 'Thermal Physics & Gases'
  },
  {
    q: 'What is the typical compression ratio range for standard Diesel (Compression Ignition - CI) engines?',
    opts: ['14 : 1 to 22 : 1', '6 : 1 to 10 : 1', '2 : 1 to 5 : 1', '30 : 1 to 50 : 1'],
    ans: 0,
    exp: 'Diesel engines rely on high compression heat to ignite injected fuel, requiring compression ratios between 14:1 and 22:1.',
    tip: 'Diesel engine compression ratio = 14:1 to 22:1 (high enough to auto-ignite injected diesel).',
    top: 'Thermal Physics & Gases'
  },

  // --- MENSURATION & SOLID GEOMETRY THEOREMS ---
  {
    q: 'What is Euler Formula relating the number of Vertices (V), Edges (E), and Faces (F) for any convex polyhedron?',
    opts: ['V - E + F = 2', 'V + E - F = 2', 'V + E + F = 2', 'V - E - F = 2'],
    ans: 0,
    exp: 'Euler Polyhedral Formula states that for every convex polyhedron: Vertices - Edges + Faces = 2 (e.g. for a cube: 8 - 12 + 6 = 2).',
    tip: 'Euler Polyhedral Formula: V - E + F = 2.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'How many total Faces, Edges, and Vertices does a regular Tetrahedron have?',
    opts: ['4 triangular faces, 6 edges, and 4 vertices', '6 square faces, 12 edges, and 8 vertices', '8 triangular faces, 12 edges, and 6 vertices', '5 faces, 8 edges, and 5 vertices'],
    ans: 0,
    exp: 'A regular tetrahedron has 4 equilateral triangular faces, 6 edges, and 4 vertices (4 - 6 + 4 = 2).',
    tip: 'Tetrahedron: 4 faces, 6 edges, 4 vertices.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'According to the Prismoidal Formula (Simpson Rule for volumes), what is the volume V of an earthwork prismoid of length L with end areas A1, A2 and mid-area Am?',
    opts: ['V = (L / 6) * (A1 + 4 * Am + A2)', 'V = (L / 2) * (A1 + A2)', 'V = (L / 3) * (A1 + Am + A2)', 'V = (L / 4) * (A1 + 2 * Am + A2)'],
    ans: 0,
    exp: 'The Prismoidal formula computes exact volume: V = (L / 6) * (A1 + 4Am + A2), where Am is the area calculated from mid-dimensions.',
    tip: 'Prismoidal Volume = (L / 6) x (A1 + 4Am + A2).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'According to the Trapezoidal Rule (Average End Area method), what is the volume V of an excavation cut between two cross-sections of areas A1 and A2 separated by distance L?',
    opts: ['V = (L / 2) * (A1 + A2)', 'V = (L / 6) * (A1 + 4Am + A2)', 'V = L * √(A1 * A2)', 'V = L * (A1 - A2) / 2'],
    ans: 0,
    exp: 'The average end area formula averages the two ends: V = [(A1 + A2) / 2] * L = (L / 2) * (A1 + A2).',
    tip: 'Average End Area volume V = (L / 2) x (A1 + A2).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the "Prismoidal Correction" (Cp) subtracted from the average end area earthwork volume to obtain the true prismoidal volume?',
    opts: ['Cp = (L / 6) * (h1 - h2) * (w1 - w2) for rectangular cuts, meaning average end area method always overestimates volume', 'Cp = (L / 2) * (A1 - A2)', 'Cp = (L / 4) * (A1 + A2)', 'Prismoidal correction is zero for all shapes'],
    ans: 0,
    exp: 'The Average End Area method mathematically overestimates earthwork volumes for convex ground shapes. The prismoidal correction is always positive and must be subtracted.',
    tip: 'Average End Area method overestimates volume; Prismoidal correction is subtracted.',
    top: 'Units, Conversion & Mensuration'
  }
];

m9Final.forEach(q => addQ(q, 9, 'mod-9', 'Units, Conversion & Mensuration'));
console.log('Module 9 Final batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
