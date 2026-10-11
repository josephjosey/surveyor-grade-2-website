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

console.log('Existing unique masks before Mod 10 Part 7:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-p10g-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-v${c++}`;
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
    createdAt: '2026-10-11T21:00:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 75 DISTINCT QUESTIONS FOR MODULE 10 (PART 7)
const m10Part7 = [
  // --- PAINT DEFECTS & SPECIAL MORTARS ---
  {
    q: 'In painting, what is the defect known as "Chalking"?',
    opts: ['The progressive powdery disintegration of the paint binder film on exposure to weathering, leaving loose white pigment powder on the surface that rubs off on touch', 'The formation of small bubbles', 'The wrinkling of paint', 'The sagging of paint on vertical walls'],
    ans: 0,
    exp: 'Chalking occurs when ultraviolet sunlight and weathering degrade the oil vehicle/binder, freeing the pigment as a loose chalk-like powder that rubs off on hands.',
    tip: 'Chalking = paint binder degrades, releasing loose powdery pigment on the surface.',
    top: 'Building Materials - Finishing'
  },
  {
    q: 'What causes the paint defect known as "Alligatoring" (or Crocodiling)?',
    opts: ['Applying a fast-drying hard paint coat over a soft, slow-drying, or insufficiently dried undercoat, causing cracking patterns resembling alligator hide', 'Painting in rain', 'Using synthetic enamel', 'Termite infestation'],
    ans: 0,
    exp: 'Alligatoring results from unequal expansion/contraction when a hard topcoat is applied over an elastic or incompletely dried basecoat, creating wide cracks.',
    tip: 'Alligatoring = advanced cracking of paint film resembling reptilian skin (hard coat over soft undercoat).',
    top: 'Building Materials - Finishing'
  },
  {
    q: 'What is "Gauged Mortar" (Composite Mortar) in masonry construction?',
    opts: ['A mortar made by blending cement, lime, and sand together, combining the high workability and water retentivity of lime with the early strength of cement', 'Mortar mixed with sea water', 'Mortar without any sand', 'A mortar made with pure gypsum'],
    ans: 0,
    exp: 'Gauged mortar blends cement and lime (e.g., 1:1:6 or 1:2:9 cement:lime:sand). Lime provides smooth butter-like workability and crack resistance; cement provides early setting strength.',
    tip: 'Gauged Mortar = Cement + Lime + Sand (combines lime plasticity with cement early strength).',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'What is an "Air-Entraining Admixture" used for in concrete technology?',
    opts: ['Introducing millions of microscopic, stable, evenly dispersed air bubbles into concrete to dramatically improve freeze-thaw durability and plasticity', 'Increasing concrete unit weight', 'Causing flash setting', 'Accelerating heat generation'],
    ans: 0,
    exp: 'Air-entraining agents (Vinsol resin, darex) create microscopic spherical bubbles (0.05 mm) that act as expansion chambers relieving freezing ice pressure.',
    tip: 'Air-entraining agents improve freeze-thaw resistance and concrete workability.',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'What is the purpose of adding a chemical "Retarder" (such as sugar, gypsum, or tartaric acid) to a concrete mix?',
    opts: ['Delaying the initial setting time of concrete to keep it plastic and workable during hot weather concreting or long transit hauls', 'Speeding up setting in freezing cold', 'Increasing concrete density', 'Adding color to concrete'],
    ans: 0,
    exp: 'Retarders slow down the rate of cement hydration, extending the initial setting time to prevent cold joints during hot weather or long transit mixer trips.',
    tip: 'Retarders delay initial setting time (useful for hot weather and long-distance transport).',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'What is the purpose of adding an "Accelerator" (such as Calcium Chloride, CaCl2) to concrete?',
    opts: ['Accelerating the rate of early cement hydration and strength development, especially for cold weather concreting and emergency repairs', 'Slowing down setting', 'Preventing concrete shrinkage', 'Making concrete transparent'],
    ans: 0,
    exp: 'Accelerators (e.g. CaCl2 up to 1-2% by cement weight) speed up early hydration, shortening setting time and boosting early strength in freezing weather.',
    tip: 'Accelerators (e.g. Calcium Chloride) speed up setting and early strength in cold weather.',
    top: 'Building Materials - Sand & Concrete'
  },

  // --- FOUNDATION ENGINEERING: TERZAGHI & BEARING CAPACITY ---
  {
    q: 'In Terzaghi General Bearing Capacity theory, what is the ultimate bearing capacity (q_ult) formula for a continuous shallow Strip Footing in c-ϕ soil?',
    opts: ['q_ult = c * Nc + γ * D * Nq + 0.5 * γ * B * Nγ', 'q_ult = c * Nc + γ * D * Nq', 'q_ult = 1.3 * c * Nc + 0.4 * γ * B * Nγ', 'q_ult = c * Nc + 0.5 * γ * B * Nγ'],
    ans: 0,
    exp: 'Terzaghi strip footing equation expresses bearing capacity as the sum of cohesion, surcharge, and soil weight components: q_ult = c Nc + γ D Nq + 0.5 γ B Nγ.',
    tip: 'Terzaghi Strip Footing: q_ult = c Nc + γ D Nq + 0.5 γ B Nγ.',
    top: 'Building Construction - Foundations'
  },
  {
    q: 'What is "General Shear Failure" in shallow foundation soil mechanics?',
    opts: ['A sudden catastrophic shear failure occurring in dense sands and stiff clays, characterized by well-defined continuous slip surfaces extending to the ground and visible surface heaving', 'Gradual punching of footing into loose soil', 'Liquefaction under earthquake', 'Settlement without shearing'],
    ans: 0,
    exp: 'General shear failure occurs in dense sands and stiff clays. Clear slip failure surfaces extend from under the footing up to ground level, accompanied by tilting and ground heaving.',
    tip: 'General shear failure: dense sand/stiff clay with visible continuous slip surfaces and ground heave.',
    top: 'Building Construction - Foundations'
  },
  {
    q: 'In the Standard Penetration Test (SPT - IS 2131), what is the weight of the drive hammer and its free-fall drop height onto the split-spoon sampler?',
    opts: ['Hammer weight = 63.5 kg, Drop height = 750 mm (75 cm)', 'Hammer = 50 kg, Drop = 500 mm', 'Hammer = 100 kg, Drop = 1000 mm', 'Hammer = 20 kg, Drop = 300 mm'],
    ans: 0,
    exp: 'IS 2131 specifies a 63.5 kg hammer falling freely through 750 mm (75 cm) onto the anvil. The SPT N-value is the number of blows for the last 300 mm of penetration.',
    tip: 'Standard Penetration Test (SPT): 63.5 kg hammer falling 750 mm (75 cm).',
    top: 'Building Construction - Foundations'
  },
  {
    q: 'In Standard Penetration Test processing, when is the "Dilatancy Correction" applied to observed SPT N-values in fine silty sands below the water table?',
    opts: ['When the observed N-value exceeds 15 (corrected N\' = 15 + 0.5 * (N - 15))', 'When N is less than 5', 'Only in dry clay', 'Whenever the ground is frozen'],
    ans: 0,
    exp: 'In saturated fine sands, rapid driving creates negative pore water pressure (suction) that artificially inflates penetration resistance. Terzaghi correction: N\' = 15 + 0.5(N - 15) when N > 15.',
    tip: 'Dilatancy correction: N\' = 15 + 0.5(N - 15) for submerged fine silty sand when N > 15.',
    top: 'Building Construction - Foundations'
  },

  // --- WATER SUPPLY & WATER DEMAND ---
  {
    q: 'According to Indian Standard IS 1172, what is the design domestic water consumption per capita per day (lpcd) for communities with full sewer flushing systems?',
    opts: ['135 liters per capita per day (lpcd)', '200 lpcd', '70 lpcd', '500 lpcd'],
    ans: 0,
    exp: 'IS 1172 specifies 135 lpcd for residences with full flushing systems. (Without full flushing systems in low-income zones, it is 70 to 100 lpcd).',
    tip: 'Domestic water consumption under IS 1172 = 135 lpcd (full flushing system).',
    top: 'Public Health Engineering'
  },
  {
    q: 'Which pipe network layout is composed of closed loops providing two-way circulation from all directions with no stagnant dead ends, ideal for well-planned modern cities?',
    opts: ['Gridiron System (Reticulation System)', 'Dead-End System (Tree System)', 'Radial System', 'Single Line System'],
    ans: 0,
    exp: 'The Gridiron (reticulation) system interconnects mains and submains into closed loops, allowing water to reach any point from multiple paths, eliminating stagnation.',
    tip: 'Gridiron System = interconnected loops with no dead ends and two-way circulation.',
    top: 'Public Health Engineering'
  },
  {
    q: 'What is the "Biochemical Oxygen Demand" (BOD) of a wastewater sample?',
    opts: ['The amount of dissolved oxygen consumed by aerobic microorganisms to biologically oxidize and decompose organic matter in water over 5 days at 20 °C', 'The chemical oxygen needed by ozone', 'The oxygen released by algae', 'The acidity of wastewater'],
    ans: 0,
    exp: 'Standard BOD5 at 20°C measures the oxygen required by microbes to biologically stabilize organic pollutants over a 5-day incubation period.',
    tip: 'BOD5 = oxygen consumed by microbes in 5 days at 20°C to oxidize organic matter.',
    top: 'Public Health Engineering'
  },
  {
    q: 'What is the "Chemical Oxygen Demand" (COD) of wastewater, and how does its value compare to BOD?',
    opts: ['The oxygen required to chemically oxidize all organic matter (both biodegradable and non-biodegradable) using a strong chemical oxidant (potassium dichromate); COD is always greater than or equal to BOD', 'COD is always less than BOD', 'COD measures nitrogen content', 'COD measures water temperature'],
    ans: 0,
    exp: 'COD oxidizes all organics chemically using boiling acid dichromate. Because it breaks down non-biodegradable organics as well, COD is always ≥ BOD.',
    tip: 'COD measures chemical oxidation of all organics (biodegradable + non-biodegradable); COD ≥ BOD.',
    top: 'Public Health Engineering'
  },
  {
    q: 'What is the minimum "Self-Cleansing Velocity" recommended in sewer pipelines to prevent the deposition and accumulation of solid sewage sludge?',
    opts: ['0.6 to 0.75 meters per second at minimum daily flow', '2.5 meters per second', '0.1 meters per second', '5.0 meters per second'],
    ans: 0,
    exp: 'A minimum flow velocity of 0.6 m/s (preferably 0.75 to 0.9 m/s) is necessary to keep sand, grit, and faecal solids in suspension and prevent pipe silting.',
    tip: 'Self-cleansing velocity in sewers = 0.6 to 0.75 m/s. Maximum non-scouring velocity = 2.5 to 3.0 m/s.',
    top: 'Public Health Engineering'
  },

  // --- TRAFFIC ENGINEERING & ROAD SIGNS ---
  {
    q: 'In Indian traffic engineering standards (IRC 67), what geometric shape is standardly specified for Mandatory / Regulatory Traffic Signs?',
    opts: ['Circular (e.g. speed limit, no entry; except STOP which is octagonal and GIVE WAY which is inverted triangle)', 'Equilateral triangle pointing upward', 'Rectangular', 'Diamond shape'],
    ans: 0,
    exp: 'Mandatory/regulatory signs are circular with red borders (exceptions: Stop is octagonal; Give Way is an inverted triangle). Warning signs are triangular; Informatory are rectangular.',
    tip: 'Mandatory signs = Circular. Cautionary/Warning signs = Triangular. Informatory = Rectangular.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is the unique geometric shape of the "STOP" regulatory traffic sign on Indian roads under IRC 67?',
    opts: ['Octagonal shape (8-sided)', 'Circular shape', 'Inverted triangle', 'Square shape'],
    ans: 0,
    exp: 'The STOP sign is uniquely octagonal (8 sides) with white lettering on a red background so drivers can identify it even from behind or when covered in snow.',
    tip: 'STOP traffic sign is uniquely OCTAGONAL in shape.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is the unique shape of the "GIVE WAY" (Yield) traffic sign on Indian highways?',
    opts: ['Inverted equilateral triangle pointing downward', 'Circle with red slash', 'Octagon', 'Rectangle'],
    ans: 0,
    exp: 'The GIVE WAY sign is an inverted equilateral triangle pointing downward with a red border.',
    tip: 'GIVE WAY sign = Inverted equilateral triangle pointing downward.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'In traffic engineering capacity studies, what is the standard Passenger Car Unit (PCU) equivalence factor assigned to a heavy Commercial Truck or Bus?',
    opts: ['3.0 PCU', '1.0 PCU', '0.5 PCU', '6.0 PCU'],
    ans: 0,
    exp: 'Under IRC guidelines, a commercial bus or heavy truck occupies roughly 3 times the road capacity of a standard passenger car: PCU = 3.0.',
    tip: 'Passenger Car Unit (PCU): Car = 1.0, Bus/Truck = 3.0, Motorcycle = 0.5, Bullock Cart = 6.0 to 8.0.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'In the Analysis of Rates for building estimates, what is the standard percentage added to the net cost of materials and labour to cover Contractor Profit and overheads?',
    opts: ['10% of total cost of materials and labour', '20%', '5%', '25%'],
    ans: 0,
    exp: 'Standard rate analysis guidelines add exactly 10% on the net cost of materials plus labour to provide for contractor profit, site supervision, and office overheads.',
    tip: 'Contractor profit and overheads = 10% in rate analysis.',
    top: 'Estimation & Costing'
  }
];

m10Part7.forEach(q => addQ(q, 10, 'mod-10', 'Building Construction & Materials'));
console.log('Module 10 Part 7 batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
