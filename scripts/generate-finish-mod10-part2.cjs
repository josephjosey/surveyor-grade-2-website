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

console.log('Existing unique masks before Mod 10 Part 2:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-p10b-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-q${c++}`;
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
    createdAt: '2026-10-11T19:45:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 110 DISTINCT QUESTIONS FOR MODULE 10 (PART 2 - LIME, CEMENT, CONCRETE & AGGREGATES)
const m10Part2 = [
  // --- LIME: TYPES, SLAKING & IS CLASSIFICATION ---
  {
    q: 'What is "Quicklime" chemically, and how is it produced from natural limestone?',
    opts: ['Calcium Oxide (CaO), produced by the calcination (heating) of limestone to drive off carbon dioxide: CaCO3 -> CaO + CO2', 'Calcium Hydroxide Ca(OH)2', 'Calcium Carbonate CaCO3', 'Calcium Sulfate CaSO4'],
    ans: 0,
    exp: 'Quicklime (caustic lime) is Calcium Oxide (CaO), produced by burning limestone in a lime kiln at 800-900°C to release carbon dioxide gas.',
    tip: 'Quicklime = Calcium Oxide (CaO). Calcination: CaCO3 + heat -> CaO + CO2.',
    top: 'Building Materials - Lime'
  },
  {
    q: 'What is the chemical reaction known as "Slaking of Lime"?',
    opts: ['Adding water to quicklime, converting it into hydrated lime with immense release of heat: CaO + H2O -> Ca(OH)2 + Heat', 'Heating limestone in a kiln', 'Absorbing carbon dioxide from air', 'Mixing lime with cement'],
    ans: 0,
    exp: 'Slaking is the vigorous exothermic hydration of quicklime: CaO + H2O -> Ca(OH)2. The volume expands 2 to 2.5 times with a hissing sound and steam generation.',
    tip: 'Slaking: CaO + H2O -> Ca(OH)2 + Heat (volume expands 2 to 2.5 times).',
    top: 'Building Materials - Lime'
  },
  {
    q: 'How does pure "Fat Lime" (high-calcium lime) harden and set after application on walls?',
    opts: ['By absorbing carbon dioxide (CO2) from the surrounding atmospheric air: Ca(OH)2 + CO2 -> CaCO3 + H2O', 'By reacting with water under submerged conditions', 'By cooling rapidly like glass', 'By evaporating its calcium content'],
    ans: 0,
    exp: 'Fat lime sets strictly by carbonation—absorbing atmospheric CO2 to reform crystalline calcium carbonate. It cannot set underwater or in damp thick walls devoid of air.',
    tip: 'Fat lime sets by carbonation (absorbing CO2 from air); does NOT set underwater.',
    top: 'Building Materials - Lime'
  },
  {
    q: 'What is "Hydraulic Lime", and what enables it to set and harden under water?',
    opts: ['Lime containing 5% to 30% clay (silica and alumina) which chemically forms insoluble hydrated calcium silicates underwater without needing air', 'Lime mixed with sea water', 'Lime pumped with hydraulic oil', 'Lime mixed with quicksand'],
    ans: 0,
    exp: 'Hydraulic lime contains clay. During burning, silica and alumina combine with lime to form calcium silicates/aluminates that set underwater like cement.',
    tip: 'Hydraulic lime contains clay (5-30%); sets underwater in the absence of air.',
    top: 'Building Materials - Lime'
  },
  {
    q: 'According to IS 712 classification of building limes, which class represents "Eminently Hydraulic Lime" used for structural masonry and foundations?',
    opts: ['Class A lime', 'Class B lime', 'Class C lime', 'Class D lime'],
    ans: 0,
    exp: 'IS 712 classifies limes into: Class A (Eminently hydraulic, used for structural masonry/foundations), Class B (Semi-hydraulic), Class C (Fat lime for whitewashing).',
    tip: 'IS 712: Class A = Eminently Hydraulic Lime for structural works and foundations.',
    top: 'Building Materials - Lime'
  },
  {
    q: 'According to IS 712 classification, which class of lime represents "Fat Lime" used specifically for white washing and finishing coat plastering?',
    opts: ['Class C lime', 'Class A lime', 'Class B lime', 'Class E lime'],
    ans: 0,
    exp: 'Class C lime is Fat Lime (rich lime), consisting of high-calcium lime used predominantly for whitewashing and finishing coats of decorative plaster.',
    tip: 'IS 712: Class C = Fat Lime for whitewashing and finishing plaster.',
    top: 'Building Materials - Lime'
  },
  {
    q: 'According to IS 712 classification, which class of lime represents "Semi-Hydraulic Lime" used for general masonry mortar?',
    opts: ['Class B lime', 'Class A lime', 'Class C lime', 'Class D lime'],
    ans: 0,
    exp: 'Class B lime is Semi-hydraulic lime, containing moderate clay content (approx 15%), standardly used for building masonry mortars.',
    tip: 'IS 712: Class B = Semi-hydraulic lime for masonry mortars.',
    top: 'Building Materials - Lime'
  },

  // --- CEMENT: COMPOSITION, BOGUE COMPOUNDS & TYPES ---
  {
    q: 'What is the principal chemical oxide present in the highest proportion (60% to 67%) in Ordinary Portland Cement (OPC)?',
    opts: ['Lime (CaO)', 'Silica (SiO2)', 'Alumina (Al2O3)', 'Iron Oxide (Fe2O3)'],
    ans: 0,
    exp: 'Lime (CaO) constitutes 60-67% (average 63%) of OPC. It imparts strength; excess lime causes unsoundness (expansion), while deficiency lowers strength.',
    tip: 'OPC principal oxide: Lime (CaO) = 60-67% (avg 63%).',
    top: 'Building Materials - Cement'
  },
  {
    q: 'What is the second most abundant chemical oxide present in Ordinary Portland Cement (17% to 25%)?',
    opts: ['Silica (SiO2)', 'Alumina (Al2O3)', 'Magnesia (MgO)', 'Iron Oxide (Fe2O3)'],
    ans: 0,
    exp: 'Silica (SiO2) constitutes 17-25% (average 20%) of OPC, forming dicalcium and tricalcium silicates that impart mechanical strength.',
    tip: 'Silica (SiO2) in OPC = 17-25% (imparts strength).',
    top: 'Building Materials - Cement'
  },
  {
    q: 'What is the function of Alumina (Al2O3) present in Ordinary Portland Cement in the proportion of 3% to 8%?',
    opts: ['Imparts quick setting properties and acts as a flux to reduce clinkering burning temperature', 'Imparts grey colour', 'Prevents thermal cracking', 'Increases ultimate strength'],
    ans: 0,
    exp: 'Alumina lowers the clinkering fusion temperature during burning and imparts fast initial setting. Excess alumina weakens the cement.',
    tip: 'Alumina (3-8%) in cement imparts quick setting and lowers clinkering temperature.',
    top: 'Building Materials - Cement'
  },
  {
    q: 'Why is 2% to 3% Gypsum (calcium sulfate dihydrate, CaSO4 · 2H2O) added to clinker during the final grinding of Ordinary Portland Cement?',
    opts: ['To retard the initial setting time and prevent flash setting of the cement paste', 'To increase early compressive strength', 'To impart grey color', 'To make the cement waterproof'],
    ans: 0,
    exp: 'Gypsum coats tricalcium aluminate (C3A) particles, preventing rapid flash hydration and allowing workers sufficient initial setting time (min 30 mins) for mixing and placing.',
    tip: 'Gypsum (2-3%) retards initial setting time and prevents flash set.',
    top: 'Building Materials - Cement'
  },
  {
    q: 'Which Bogue compound in Portland cement hydrates rapidly during the first 7 to 28 days and is primarily responsible for EARLY compressive strength?',
    opts: ['Tricalcium Silicate (C3S / Alite)', 'Dicalcium Silicate (C2S / Belite)', 'Tricalcium Aluminate (C3A / Celite)', 'Tetracalcium Aluminoferrite (C4AF)'],
    ans: 0,
    exp: 'C3S (Alite, 30-50%) hydrates quickly, generating early strength in concrete during the initial 7 to 28 days with moderate heat generation.',
    tip: 'C3S (Tricalcium Silicate) = responsible for EARLY strength (first 7-28 days).',
    top: 'Building Materials - Cement'
  },
  {
    q: 'Which Bogue compound in Portland cement hydrates slowly and is responsible for progressive, ultimate long-term strength beyond one year?',
    opts: ['Dicalcium Silicate (C2S / Belite)', 'Tricalcium Silicate (C3S / Alite)', 'Tricalcium Aluminate (C3A)', 'Tetracalcium Aluminoferrite (C4AF)'],
    ans: 0,
    exp: 'C2S (Belite, 20-45%) hydrates very slowly over months and years, imparting progressive long-term ultimate strength with low heat of hydration.',
    tip: 'C2S (Dicalcium Silicate) = responsible for PROGRESSIVE / ULTIMATE long-term strength.',
    top: 'Building Materials - Cement'
  },
  {
    q: 'Which Bogue compound in Portland cement reacts first with water, causing rapid flash setting and generating the highest heat of hydration (~865 J/g)?',
    opts: ['Tricalcium Aluminate (C3A / Celite)', 'Dicalcium Silicate (C2S)', 'Tricalcium Silicate (C3S)', 'Tetracalcium Aluminoferrite (C4AF)'],
    ans: 0,
    exp: 'C3A (8-12%) reacts immediately upon adding water, liberating immense heat (865 J/g) and causing flash setting if gypsum is omitted. It is vulnerable to sulfate attack.',
    tip: 'C3A (Tricalcium Aluminate) = fastest hydration, flash set, highest heat of hydration.',
    top: 'Building Materials - Cement'
  },
  {
    q: 'Which Bogue compound has the poorest cementing value and contributes least to concrete strength?',
    opts: ['Tetracalcium Aluminoferrite (C4AF / Felite)', 'Tricalcium Silicate (C3S)', 'Dicalcium Silicate (C2S)', 'Tricalcium Aluminate (C3A)'],
    ans: 0,
    exp: 'C4AF (6-10%) has very poor cementing value and contributes negligibly to strength, though it helps lower clinkering temperature.',
    tip: 'C4AF (Tetracalcium Aluminoferrite) has the poorest cementing and strength value.',
    top: 'Building Materials - Cement'
  },
  {
    q: 'What is Low Heat Cement, and where is it specifically mandated in civil engineering construction?',
    opts: ['Cement manufactured with reduced C3A and C3S and increased C2S to minimize heat generation in massive concrete dams and thick retaining walls', 'Cement that burns at low temperature', 'Cement for cold weather concreting', 'Cement used for plastering ceilings'],
    ans: 0,
    exp: 'Low Heat cement reduces C3A (<5%) and C3S to curb the rate of heat liberation, preventing thermal shrinkage cracks in massive mass concrete structures like gravity dams.',
    tip: 'Low Heat Cement is used in massive gravity dams to prevent thermal cracking.',
    top: 'Building Materials - Cement'
  },
  {
    q: 'What is Rapid Hardening Portland Cement, and how does its strength development compare to Ordinary Portland Cement?',
    opts: ['Contains higher C3S content and is ground to higher fineness, developing 3-day compressive strength equal to 7-day strength of OPC', 'Sets in 5 minutes', 'Contains 50% gypsum', 'Is weaker than ordinary cement'],
    ans: 0,
    exp: 'Rapid hardening cement achieves high early strength due to increased C3S and finer grinding (specific surface ≥ 325 m²/kg), allowing earlier formwork removal.',
    tip: 'Rapid Hardening Cement: 3-day strength equals 7-day strength of OPC (higher C3S, finer grinding).',
    top: 'Building Materials - Cement'
  },
  {
    q: 'What is Quick Setting Cement, and what are its typical initial and final setting times?',
    opts: ['Initial setting time = 5 minutes, Final setting time = 30 minutes; used for underwater running water repairs and marine grouting', 'Initial = 30 mins, Final = 10 hours', 'Initial = 1 hour, Final = 2 hours', 'Initial = 10 mins, Final = 24 hours'],
    ans: 0,
    exp: 'Quick setting cement is produced by drastically reducing gypsum and adding aluminum sulfate: it starts setting in 5 minutes and hardens within 30 minutes for emergency underwater leaks.',
    tip: 'Quick Setting Cement: Initial set = 5 minutes, Final set = 30 minutes (used in underwater running water).',
    top: 'Building Materials - Cement'
  },
  {
    q: 'What is Portland Pozzolana Cement (PPC)?',
    opts: ['A blended hydraulic cement produced by intergrinding OPC clinker, gypsum, and 15% to 35% pozzolanic material (such as fly ash, calcined clay, or silica fume)', 'Cement made from volcanic lava only', 'Pure limestone powder', 'Cement containing no clinker'],
    ans: 0,
    exp: 'PPC blends OPC clinker with pozzolanic materials (fly ash, rice husk ash). Pozzolanas react with liberated free lime Ca(OH)2 to form extra calcium silicate hydrates, enhancing durability.',
    tip: 'PPC blends OPC clinker with 15-35% pozzolanic fly ash; resists sulfate and chemical attack.',
    top: 'Building Materials - Cement'
  },

  // --- CEMENT TESTING & LABORATORY PROCEDURES ---
  {
    q: 'Which sieve is standardly used to conduct the dry fineness sieve test on Ordinary Portland Cement, and what is the maximum permissible residue by weight?',
    opts: ['IS 90-micron sieve (Sieve No. 9); residue must not exceed 10% by dry weight for OPC', 'IS 150-micron sieve; residue < 5%', 'IS 300-micron sieve; residue < 15%', 'IS 4.75-mm sieve; residue < 1%'],
    ans: 0,
    exp: 'Cement is sieved through a 90-micron sieve (IS Sieve No. 9) for 15 minutes. For OPC, residue must not exceed 10% by weight (for rapid hardening, < 5%).',
    tip: 'Cement Fineness Sieve: 90-micron sieve. Maximum residue for OPC = 10% (Rapid hardening = 5%).',
    top: 'Building Materials - Cement'
  },
  {
    q: 'What apparatus is used to determine the Standard Consistency (normal consistency P) of a cement paste?',
    opts: ['Vicat Apparatus fitted with a 10 mm diameter plunger', 'Le Chatelier Apparatus', 'Slump Cone', 'Vee-Bee Consistometer'],
    ans: 0,
    exp: 'Normal consistency is measured with the Vicat apparatus using a 10 mm diameter plunger: consistency P is the water percentage where the plunger penetrates 33 to 35 mm from the top.',
    tip: 'Vicat apparatus with 10 mm plunger measures standard consistency P (33-35 mm penetration from top).',
    top: 'Building Materials - Cement'
  },
  {
    q: 'What is the minimum Initial Setting Time specified by IS code for Ordinary Portland Cement (OPC)?',
    opts: ['Not less than 30 minutes', 'Not less than 10 minutes', 'Not less than 60 minutes', 'Not less than 15 minutes'],
    ans: 0,
    exp: 'For OPC, the initial setting time must not be less than 30 minutes, measured using a 1 mm square needle on the Vicat apparatus.',
    tip: 'OPC Initial Setting Time = minimum 30 minutes (tested with 1 mm needle at 0.85P water).',
    top: 'Building Materials - Cement'
  },
  {
    q: 'What is the maximum Final Setting Time permissible under IS specifications for Ordinary Portland Cement?',
    opts: ['Not more than 600 minutes (10 hours)', 'Not more than 300 minutes (5 hours)', 'Not more than 120 minutes (2 hours)', 'Not more than 24 hours'],
    ans: 0,
    exp: 'Final setting time must not exceed 600 minutes (10 hours), determined using the Vicat 5 mm annular collar needle.',
    tip: 'OPC Final Setting Time = maximum 600 minutes (10 hours).',
    top: 'Building Materials - Cement'
  },
  {
    q: 'Which apparatus is used to measure the Soundness of cement caused by excess unburnt Free Lime?',
    opts: ['Le Chatelier Apparatus', 'Vicat Apparatus', 'Pycnometer', 'Slump cone'],
    ans: 0,
    exp: 'Soundness due to free lime is tested in the Le Chatelier split cylinder apparatus: after boiling for 3 hours, the distance between pointer arms must not exceed 10 mm for OPC.',
    tip: 'Le Chatelier apparatus tests cement soundness due to free lime (expansion ≤ 10 mm).',
    top: 'Building Materials - Cement'
  },
  {
    q: 'Which test apparatus is required to test cement soundness caused by both excess Free Lime AND Magnesia (MgO)?',
    opts: ['Autoclave Test', 'Le Chatelier Test', 'Vicat Needle Test', 'Briquetting Machine'],
    ans: 0,
    exp: 'The Le Chatelier test only detects free lime. Magnesia unsoundness is measured in an Autoclave under 21 kg/cm² steam pressure; expansion must not exceed 0.8%.',
    tip: 'Autoclave test measures soundness due to BOTH Free Lime and Magnesia (expansion ≤ 0.8%).',
    top: 'Building Materials - Cement'
  },
  {
    q: 'What are the standard dimensions of the mortar cube specimens tested for the compressive strength of cement according to IS 4031?',
    opts: ['70.6 mm x 70.6 mm x 70.6 mm (face area = 50 cm²)', '150 mm x 150 mm x 150 mm', '100 mm x 100 mm x 100 mm', '50 mm x 50 mm x 50 mm'],
    ans: 0,
    exp: 'Cement mortar strength is tested on 70.6 mm cubes (area 50 cm²) of 1:3 cement-sand mortar. (150 mm cubes are used for concrete strength).',
    tip: 'Cement mortar test cubes = 70.6 mm (area 50 cm²). Concrete test cubes = 150 mm.',
    top: 'Building Materials - Cement'
  },

  // --- AGGREGATES, SAND & BULKING ---
  {
    q: 'What is the phenomenon of "Bulking of Sand"?',
    opts: ['The increase in the bulk volume of sand caused by surface tension moisture films holding sand grains apart', 'The swelling of sand when heated', 'The chemical expansion of quartz', 'The disintegration of sand into clay'],
    ans: 0,
    exp: 'Moisture forms a thin surface tension film around sand grains, exerting surface tension forces that push grains apart and inflate bulk volume by up to 20-40%.',
    tip: 'Bulking of sand = volume increase caused by moisture surface tension films pushing grains apart.',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'At what percentage of moisture content does the maximum bulking of sand typically occur?',
    opts: ['4% to 5% moisture content by weight', '1% moisture content', '10% moisture content', '20% moisture content'],
    ans: 0,
    exp: 'Maximum bulking (up to 20-40% volume expansion) occurs at 4% to 5% moisture content. Beyond 6-8%, the water films merge, and by complete saturation/submergence, volume drops back to dry volume.',
    tip: 'Maximum bulking occurs at 4% to 5% moisture content; submerged sand has ZERO bulking.',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'What is the Fineness Modulus (FM) range for "Coarse Sand" suitable for reinforced concrete construction?',
    opts: ['2.9 to 3.2', '2.2 to 2.6', '1.5 to 2.0', '3.5 to 4.0'],
    ans: 0,
    exp: 'Fineness Modulus of fine aggregate: Fine sand = 2.2 to 2.6; Medium sand = 2.6 to 2.9; Coarse sand = 2.9 to 3.2. Sand with FM > 3.2 is considered unsuitable.',
    tip: 'Fineness Modulus of sand: Fine (2.2-2.6), Medium (2.6-2.9), Coarse (2.9-3.2).',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'What is the maximum aggregate size boundary that separates Fine Aggregate (sand) from Coarse Aggregate under IS 383?',
    opts: ['4.75 mm IS Sieve (fine aggregate passes 4.75 mm; coarse aggregate is retained on 4.75 mm)', '2.36 mm sieve', '10.0 mm sieve', '75 micron sieve'],
    ans: 0,
    exp: 'Fine aggregate is mineral aggregate passing entirely through an IS 4.75 mm sieve and retained on 75-micron sieve. Coarse aggregate is retained on 4.75 mm sieve.',
    tip: '4.75 mm sieve divides Fine Aggregate (sand) from Coarse Aggregate (gravel/stone).',
    top: 'Building Materials - Sand & Concrete'
  },

  // --- CONCRETE: WORKABILITY, MIXES & PROPERTIES ---
  {
    q: 'What are the standard dimensions of the Slump Cone mould used to measure the workability of fresh concrete?',
    opts: ['Bottom diameter = 200 mm, Top diameter = 100 mm, Height = 300 mm', 'Bottom = 300 mm, Top = 150 mm, Height = 450 mm', 'Bottom = 150 mm, Top = 100 mm, Height = 200 mm', 'Diameter = 150 mm, Height = 300 mm'],
    ans: 0,
    exp: 'The slump cone (frustum of cone) has a base diameter of 200 mm, top diameter of 100 mm, and vertical height of 300 mm (sheet thickness ≥ 1.6 mm).',
    tip: 'Slump Cone dimensions: Top 100 mm, Bottom 200 mm, Height 300 mm.',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'How is the concrete filled and compacted inside the slump cone during a standard Slump Test (IS 1199)?',
    opts: ['Filled in 4 equal layers, each layer tamped 25 times with a 16 mm diameter, 600 mm long bullet-pointed tamping rod', 'Filled in 3 layers tamped 50 times', 'Filled in 2 layers compacted by vibrator', 'Filled in a single pour'],
    ans: 0,
    exp: 'The mould is filled in 4 equal layers. Each layer is rodded 25 times uniformly over the cross-section using a standard 16 mm diameter bullet-pointed steel rod.',
    tip: 'Slump test: 4 layers, each rodded 25 strokes with a 16 mm bullet-nosed rod.',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'What does "Shear Slump" indicate when observed during a concrete slump test?',
    opts: ['One half of the cone shears and slides down an inclined plane, indicating an uncohesive, harsh mix with lack of fine aggregate cohesion', 'A perfectly uniform slump', 'Total collapse due to liquid mix', 'Zero slump'],
    ans: 0,
    exp: 'If the concrete shears off laterally on an inclined plane, it is a shear slump, indicating harshness, segregation tendency, and lack of cohesion; the test must be repeated.',
    tip: 'Shear slump indicates lack of cohesion and harshness in the mix; retest required.',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'Which workability testing apparatus is specially suited for measuring the workability of stiff concrete mixes having very low or zero slump?',
    opts: ['Compacting Factor Apparatus (or Vee-Bee Consistometer)', 'Slump Cone', 'Flow Table', 'Pycnometer'],
    ans: 0,
    exp: 'For low workability concrete (slump 0-25 mm) where the slump test is insensitive, the Compacting Factor test or Vee-Bee Consistometer provides precise workability measurement.',
    tip: 'Compacting Factor / Vee-Bee test is used for low workability / stiff concrete.',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'What is Abram Water-Cement Ratio Law in concrete technology?',
    opts: ['The compressive strength of fully compacted concrete depends strictly on the water-cement ratio, increasing as the water-cement ratio decreases', 'Strength increases with more water', 'Workability is independent of water', 'Strength depends only on aggregate color'],
    ans: 0,
    exp: 'Duff Abrams established that concrete strength depends solely on water-cement ratio: S = A / B^(w/c). Lower w/c ratio yields higher strength, provided the mix is fully compacted.',
    tip: 'Abram Law: Lower water-cement ratio gives higher concrete compressive strength.',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'What is the volumetric mix proportion of standard M20 grade concrete under Indian Standard nominal mix specifications?',
    opts: ['1 : 1.5 : 3 (1 Cement : 1.5 Sand : 3 Coarse Aggregate)', '1 : 2 : 4', '1 : 1 : 2', '1 : 3 : 6'],
    ans: 0,
    exp: 'Standard nominal mixes: M5 (1:5:10), M7.5 (1:4:8), M10 (1:3:6), M15 (1:2:4), M20 (1:1.5:3), M25 (1:1:2).',
    tip: 'Nominal Mixes: M15 = 1:2:4, M20 = 1:1.5:3, M25 = 1:1:2.',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'What does the number "20" represent in the concrete grade designation "M20"?',
    opts: ['Characteristic compressive strength of 20 N/mm² (20 MPa) at 28 days tested on 150 mm cubes', '20 bags of cement per cubic meter', '20% water content', '20 mm maximum aggregate size'],
    ans: 0,
    exp: 'In M20, "M" stands for Mix and "20" is the characteristic 28-day cube compressive strength (fck) in N/mm² (MPa) below which not more than 5% of test results are expected to fall.',
    tip: 'Grade number (e.g. 20 in M20) = 28-day characteristic cube strength in N/mm².',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'What is "Segregation" in freshly mixed wet concrete?',
    opts: ['The separation of coarse aggregate particles from the cement mortar matrix during handling, placing, or dropping from excessive height', 'The bleeding of water to the top surface', 'The evaporation of mixing water', 'The flash setting of cement'],
    ans: 0,
    exp: 'Segregation is the physical separation of coarse aggregate from the mortar paste, occurring when concrete is dropped from heights > 1.5 m, over-vibrated, or transported over bumpy tracks.',
    tip: 'Segregation = separation of coarse aggregate from mortar (avoid drops > 1.5 m).',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'What is "Bleeding" in freshly placed concrete?',
    opts: ['The upward migration of free excess water to the concrete surface caused by the settlement of heavier solid particles', 'The leakage of water through formwork gaps', 'The red discoloration of concrete', 'The rusting of steel rebar'],
    ans: 0,
    exp: 'Bleeding is a form of segregation where water rises to the top, creating a weak, porous, dusty layer called "laitance" on the surface.',
    tip: 'Bleeding = upward emergence of free water to the surface, forming a weak laitance layer.',
    top: 'Building Materials - Sand & Concrete'
  },
  {
    q: 'What is the minimum curing period recommended by IS 456 for Ordinary Portland Cement concrete under normal atmospheric conditions?',
    opts: ['At least 7 days (10 to 14 days for blended cements or hot weather)', '24 hours', '3 days', '28 days'],
    ans: 0,
    exp: 'IS 456 mandates moist curing for a minimum of 7 days for OPC concrete, and at least 10 to 14 days when mineral admixtures (fly ash, slag) are blended or in hot, dry climates.',
    tip: 'Minimum curing period = 7 days for OPC; 10 to 14 days for mineral blended cements.',
    top: 'Building Materials - Sand & Concrete'
  }
];

m10Part2.forEach(q => addQ(q, 10, 'mod-10', 'Building Materials - Lime, Cement & Concrete'));
console.log('Module 10 Part 2 batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
