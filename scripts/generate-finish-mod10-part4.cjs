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

console.log('Existing unique masks before Mod 10 Part 4:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-p10d-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-s${c++}`;
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
    createdAt: '2026-10-11T20:15:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 130 DISTINCT QUESTIONS FOR MODULE 10 (PART 4 - ARCHES, STAIRS, WATER SUPPLY, SANITARY & ESTIMATION)
const m10Part4 = [
  // --- ARCHES & LINTELS ---
  {
    q: 'In the architectural anatomy of a masonry arch, what is the "Intrados" (or Soffit)?',
    opts: ['The inner, lower curved boundary surface of the arch ring', 'The outer upper curved surface', 'The highest point of the arch crown', 'The supporting pier'],
    ans: 0,
    exp: 'The intrados is the lower interior curved surface of an arch ring; the soffit is the underside of the arch ring.',
    tip: 'Intrados (soffit) = inner lower curved surface. Extrados = outer upper curved surface.',
    top: 'Building Construction - Arches & Stairs'
  },
  {
    q: 'In the anatomy of an arch, what is the "Extrados" (or Back)?',
    opts: ['The outer, upper convex curved boundary surface of the arch ring', 'The inner concave soffit', 'The horizontal springing line', 'The triangular masonry wall above the arch'],
    ans: 0,
    exp: 'The extrados (or back) is the outer exterior convex curved surface bounding the arch ring.',
    tip: 'Extrados = outer upper curved surface of an arch.',
    top: 'Building Construction - Arches & Stairs'
  },
  {
    q: 'What is the wedge-shaped central stone or brick placed at the highest apex of an arch ring to lock all other blocks in place?',
    opts: ['Key Stone', 'Skewback', 'Springer', 'Impost'],
    ans: 0,
    exp: 'The Keystone is the central wedge-shaped stone at the summit (crown) of an arch that locks all arch stones into compressive equilibrium.',
    tip: 'Key Stone = central wedge-shaped stone at the crown locking the arch ring.',
    top: 'Building Construction - Arches & Stairs'
  },
  {
    q: 'In arch construction, what are the individual wedge-shaped stones or bricks that form the arch ring called?',
    opts: ['Voussoirs', 'Balusters', 'Spandrels', 'Closers'],
    ans: 0,
    exp: 'The wedge-shaped stones or bricks radiating around the curve to form the body of the arch ring are called voussoirs.',
    tip: 'Voussoirs = wedge-shaped stones or bricks forming an arch ring.',
    top: 'Building Construction - Arches & Stairs'
  },
  {
    q: 'What is the inclined or slanted surface on an abutment or pier from which an arch springs called?',
    opts: ['Skewback', 'Haunch', 'Crown', 'Spandrel'],
    ans: 0,
    exp: 'The skewback is the inclined bed prepared on top of an abutment or pier to receive the first arch stone (springer) and transmit thrust.',
    tip: 'Skewback = inclined surface on abutment from which an arch springs.',
    top: 'Building Construction - Arches & Stairs'
  },
  {
    q: 'In arch construction, what is the "Spandrel"?',
    opts: ['The triangular wall space bounded by the extrados of the arch, a horizontal line tangent to the crown, and the vertical line through the springing point', 'The horizontal distance between supports', 'The highest stone of the arch', 'The wooden support during construction'],
    ans: 0,
    exp: 'A spandrel is the triangular wall surface area between the outer curve (extrados) of an arch and its rectangular enclosing boundary.',
    tip: 'Spandrel = triangular wall area bounded by the extrados and horizontal line through the crown.',
    top: 'Building Construction - Arches & Stairs'
  },
  {
    q: 'What is a "Relieving Arch" in building masonry?',
    opts: ['An arch constructed directly above a wooden or stone lintel to relieve the lintel of the superincumbent masonry wall weight', 'An arch built underground to drain groundwater', 'An arch supporting a fireplace', 'A decorative plaster arch'],
    ans: 0,
    exp: 'A relieving arch (discharging arch) is built over a flat lintel so wall loads bypass the lintel, diverting downward to the solid wall jambs.',
    tip: 'Relieving arch is built above a lintel to relieve it of wall load.',
    top: 'Building Construction - Arches & Stairs'
  },
  {
    q: 'What is an "Inverted Arch" used for in foundation construction on poor, compressible soils?',
    opts: ['Built upside down between piers to distribute concentrated column and pier loads over a large continuous foundation area', 'Built over doorways to resist wind', 'Built on roofs for rain harvesting', 'An ornamental feature in ceilings'],
    ans: 0,
    exp: 'Inverted arches are constructed with convexity downwards between piers to spread high localized loads uniformly across the subsoil foundation bed.',
    tip: 'Inverted arches distribute concentrated pier loads uniformly over foundation soil.',
    top: 'Building Construction - Arches & Stairs'
  },

  // --- STAIRS & VERTICAL CIRCULATION ---
  {
    q: 'In the technical terminology of stairs, what is the "Tread"?',
    opts: ['The horizontal upper surface of a step on which the foot is placed during ascent or descent', 'The vertical face between two steps', 'The total height of the flight', 'The rounded edge of the step'],
    ans: 0,
    exp: 'The tread is the flat horizontal surface of a stair step walked upon by occupants.',
    tip: 'Tread = horizontal surface of a step. Riser = vertical front face of a step.',
    top: 'Building Construction - Arches & Stairs'
  },
  {
    q: 'In the technical terminology of stairs, what is the "Going" of a step?',
    opts: ['The clear horizontal distance measured between two consecutive vertical riser faces', 'The vertical distance between steps', 'The total length of the staircase hall', 'The width of the landing'],
    ans: 0,
    exp: 'Going is the horizontal distance between the front faces of two successive risers (excluding any protruding nosing).',
    tip: 'Going = horizontal distance between two consecutive riser faces.',
    top: 'Building Construction - Arches & Stairs'
  },
  {
    q: 'What is the recommended Pitch (slope inclination) of a stair flight to the horizontal for comfortable, safe ascent in residential and public buildings?',
    opts: ['Between 25 degrees and 40 degrees (ideally around 30 degrees)', 'Between 10 degrees and 20 degrees', 'Between 50 degrees and 65 degrees', 'Exactly 45 degrees'],
    ans: 0,
    exp: 'Building codes specify that stair slope must lie between 25° and 40° (preferably ~30°) for safe, effortless transit. Slopes above 40° are ladders.',
    tip: 'Stair pitch (slope) should be between 25° and 40° (ideally 30°).',
    top: 'Building Construction - Arches & Stairs'
  },
  {
    q: 'According to empirical architectural rules of thumb, what relationship between Riser (R) and Going (G) yields the most comfortable stair proportions?',
    opts: ['2 * R + G ≈ 600 mm (or 60 cm / 24 inches)', 'R + G = 300 mm', '2 * G + R = 600 mm', 'R * G = 100 cm²'],
    ans: 0,
    exp: 'The classic ergonomics formula for comfortable stairs is: 2 x Rise + Going = 600 mm (e.g., 2 x 150 mm + 300 mm = 600 mm).',
    tip: 'Stair proportion rule: 2R + G ≈ 600 mm (or 60 cm).',
    top: 'Building Construction - Arches & Stairs'
  },
  {
    q: 'What is a "Dog-Legged Stair"?',
    opts: ['A staircase where two flights run in opposite directions with a half-space landing, with NO central open well between the two flights', 'A stair with a large square central open well', 'A spiral staircase around a pole', 'A straight single-flight stair'],
    ans: 0,
    exp: 'In a dog-legged stair, the flights reverse direction by 180° at a half-space landing with the outer strings directly touching, leaving no space (well) between them.',
    tip: 'Dog-legged stair has NO central open well between opposite flights.',
    top: 'Building Construction - Arches & Stairs'
  },
  {
    q: 'What is an "Open-Well Stair" (Open Newel Stair)?',
    opts: ['A staircase having a continuous central open space (well) between the forward and backward flights', 'A stair with no handrail', 'A stair constructed over a drinking water well', 'A spiral stair with wooden steps'],
    ans: 0,
    exp: 'An open-well stair leaves an open central rectangular or geometric space between flights, providing light and ventilation down the stair hall.',
    tip: 'Open-well stair has a central open space (well) between flights.',
    top: 'Building Construction - Arches & Stairs'
  },
  {
    q: 'What is the maximum number of steps recommended in a single flight of stairs without an intermediate landing?',
    opts: ['12 steps (minimum 3 steps)', '20 steps', '25 steps', '6 steps'],
    ans: 0,
    exp: 'To prevent physical fatigue and serious falling accidents, building codes mandate a landing after a maximum of 12 steps (and not less than 3 steps in a flight).',
    tip: 'Maximum steps in a single flight without landing = 12 (minimum = 3).',
    top: 'Building Construction - Arches & Stairs'
  },

  // --- DOORS, WINDOWS & PLASTER DEFECTS ---
  {
    q: 'What is a "Rolling Shutter" door, and where is it predominantly installed?',
    opts: ['A door made of interlocking horizontal galvanized steel slats that coil onto an overhead spring-loaded barrel, used for commercial shops, garages, and godowns', 'A wooden paneled door for bedrooms', 'A sliding glass balcony door', 'A fire exit swing door'],
    ans: 0,
    exp: 'Rolling shutters consist of curved interlocking cold-rolled steel laths that coil into an overhead hood, providing high security for shops and warehouses.',
    tip: 'Rolling shutters use interlocking steel slats coiling onto an overhead barrel (for shops/godowns).',
    top: 'Building Construction - Doors & Windows'
  },
  {
    q: 'What type of window is constructed projecting outward beyond the external wall face of a building, supported on cantilever corbels or brackets?',
    opts: ['Bay window', 'Dormer window', 'Clerestory window', 'Skylight'],
    ans: 0,
    exp: 'A bay window projects outward from the main wall plane (polygonal or rectangular in plan), increasing interior room area and admitting wide panoramic sunlight.',
    tip: 'Bay window projects outward from the external wall plane.',
    top: 'Building Construction - Doors & Windows'
  },
  {
    q: 'What is a "Dormer Window"?',
    opts: ['A vertical window provided on the sloping side of a pitched roof to illuminate and ventilate the attic or loft space', 'A window set in a flat ceiling', 'A window under a stair landing', 'A basement window below ground level'],
    ans: 0,
    exp: 'A dormer window is built vertically into a pitched roof plane, covered with its own small gable or shed roof, providing light to attic rooms.',
    tip: 'Dormer window is built vertically into a sloping pitched roof.',
    top: 'Building Construction - Doors & Windows'
  },
  {
    q: 'What is a "Clerestory Window"?',
    opts: ['A row of windows provided near the top of a high-ceilinged room above the roof level of an adjoining lower room to admit light and upper ventilation', 'A stained glass church window', 'A circular ground window', 'A sliding basement window'],
    ans: 0,
    exp: 'Clerestory windows are installed high on walls above adjoining lower roofs, frequently used in halls, factories, and schools for daylighting.',
    tip: 'Clerestory windows are positioned near the top of high walls above adjoining roofs.',
    top: 'Building Construction - Doors & Windows'
  },
  {
    q: 'What causes the plaster defect known as "Blistering"?',
    opts: ['The presence of unslaked lime particles in the plaster mortar that hydrate and expand late after application, causing small localized bubble swellings', 'Excessive paint application', 'Freezing of cement paste', 'Using sea sand in mortar'],
    ans: 0,
    exp: 'Blistering occurs when small unslaked quicklime particles in the plaster hydrate over time, swelling and pushing out small local hemispherical bubbles on the wall.',
    tip: 'Blistering in plaster is caused by late hydration of unslaked lime particles.',
    top: 'Building Construction - Finishing'
  },

  // --- PUBLIC HEALTH: WATER SUPPLY & TREATMENT ---
  {
    q: 'What is the acceptable maximum limit of Turbidity in potable drinking water according to Indian Standards (IS 10500)?',
    opts: ['1 NTU (permissible up to 5 NTU in absence of alternate source)', '25 NTU', '50 NTU', '100 NTU'],
    ans: 0,
    exp: 'IS 10500 specifies an acceptable limit of 1 NTU (Nephelometric Turbidity Unit) for drinking water, with a maximum permissible limit of 5 NTU.',
    tip: 'Drinking water turbidity acceptable limit = 1 NTU (maximum permissible = 5 NTU).',
    top: 'Public Health Engineering'
  },
  {
    q: 'What causes "Temporary Hardness" in water, and how can it be removed simply in households?',
    opts: ['Bicarbonates of Calcium and Magnesium [Ca(HCO3)2 and Mg(HCO3)2]; removed simply by boiling or adding lime', 'Sulfates and Chlorides of calcium; removed by filtration', 'Sodium chloride; removed by settling', 'Dissolved oxygen; removed by freezing'],
    ans: 0,
    exp: 'Temporary (carbonate) hardness is caused by calcium and magnesium bicarbonates, which precipitate as insoluble carbonates upon boiling: Ca(HCO3)2 -> CaCO3 v + H2O + CO2.',
    tip: 'Temporary hardness = Bicarbonates of Ca and Mg (removed by BOILING).',
    top: 'Public Health Engineering'
  },
  {
    q: 'What causes "Permanent Hardness" in water, and which treatment method removes it effectively?',
    opts: ['Sulfates, Chlorides, and Nitrates of Calcium and Magnesium; removed by Zeolite (base-exchange / ion-exchange) process or Lime-Soda process', 'Bicarbonates of iron; removed by boiling', 'Fine clay; removed by screening', 'Algae; removed by sunlight'],
    ans: 0,
    exp: 'Permanent hardness is due to CaCl2, CaSO4, MgCl2, and MgSO4; boiling has no effect. It is removed by chemical precipitation (Lime-Soda) or Zeolite ion exchange.',
    tip: 'Permanent hardness = Chlorides and Sulfates of Ca and Mg (removed by Zeolite / Lime-Soda).',
    top: 'Public Health Engineering'
  },
  {
    q: 'What chemical coagulant is most widely used in municipal water treatment plants to clarify turbid raw water?',
    opts: ['Alum (Aluminum Sulfate, Al2(SO4)3 · 18H2O)', 'Copper Sulfate', 'Sodium Chloride', 'Calcium Carbonate'],
    ans: 0,
    exp: 'Alum is the universal coagulant: reacting with natural alkalinity, it forms heavy, sticky gelatinous aluminum hydroxide flocs that settle suspended silt and bacteria.',
    tip: 'Alum (Aluminum Sulfate) is the most common coagulant in water purification.',
    top: 'Public Health Engineering'
  },
  {
    q: 'In water treatment, what is the typical rate of filtration in a Slow Sand Filter compared to a Rapid Sand Filter?',
    opts: ['Slow sand filter: 100 to 200 L/m²/hour; Rapid sand filter: 3,000 to 6,000 L/m²/hour (roughly 30 times faster)', 'Slow filter is faster than rapid filter', 'Both have identical rates of 1000 L/m²/hr', 'Rapid filter operates without sand'],
    ans: 0,
    exp: 'Slow sand filters filter slowly (100-200 L/m²/hr) relying on biological slime (Schmutzdecke). Rapid sand filters operate under gravity head at 3,000-6,000 L/m²/hr.',
    tip: 'Filtration rate: Slow Sand = 100-200 L/m²/hr; Rapid Sand = 3000-6000 L/m²/hr (30x faster).',
    top: 'Public Health Engineering'
  },
  {
    q: 'What is the "Schmutzdecke" (dirty layer / biological skin) in a Slow Sand Water Filter?',
    opts: ['A thin biological slimy film of algae, plankton, and bacteria formed on top of the sand bed that purifies water by adsorbing organic matter and destroying pathogens', 'A layer of coal', 'A layer of rust', 'Chemical coagulant sludge'],
    ans: 0,
    exp: 'Schmutzdecke is the active biological zoogleal film forming on the surface of slow sand filters. It metabolizes organic matter and traps 99% of bacteria.',
    tip: 'Schmutzdecke is the biological gelatinous purifying film on slow sand filters.',
    top: 'Public Health Engineering'
  },
  {
    q: 'What minimum Residual Free Chlorine must remain in municipal drinking water after a contact period of 30 minutes to protect against recontamination in the distribution pipe network?',
    opts: ['0.2 mg/L (0.2 ppm)', '1.0 mg/L', '0.01 mg/L', '5.0 mg/L'],
    ans: 0,
    exp: 'IS 10500 mandates a residual free chlorine of at least 0.2 mg/L (ppm) after a 30-minute contact period at the consumer tap to guarantee biological safety.',
    tip: 'Residual free chlorine in drinking water = minimum 0.2 mg/L (0.2 ppm).',
    top: 'Public Health Engineering'
  },

  // --- SANITARY PLUMBING & SEWERAGE ---
  {
    q: 'In building sanitary plumbing, what is a "Soil Pipe"?',
    opts: ['A vertical pipe that carries human excreta and sewage discharges from water closets and urinals to the underground drain', 'A pipe carrying bath wastewater', 'A pipe watering garden soil', 'A pipe venting sewer gas'],
    ans: 0,
    exp: 'A soil pipe carries human excreta (blackwater) from WCs and urinals. A waste pipe carries non-faecal greywater (sullage) from washbasins and kitchens.',
    tip: 'Soil Pipe carries human excreta (from WCs/urinals). Waste Pipe carries sullage (sinks/baths).',
    top: 'Public Health Engineering'
  },
  {
    q: 'In building plumbing, what is a "Vent Pipe" (Ventilating Pipe)?',
    opts: ['A pipe provided to allow circulation of air to and from any part of the drainage system to protect water trap seals against siphonage and exhaust foul sewer gases above the roof', 'A pipe carrying kitchen steam', 'A pipe supplying compressed air', 'A fresh water supply pipe'],
    ans: 0,
    exp: 'Vent pipes terminate above the roof to vent sewer gases safely and preserve trap water seals against siphonage caused by flushing surges.',
    tip: 'Vent Pipe ventilates drainage systems and preserves water trap seals against siphonage.',
    top: 'Public Health Engineering'
  },
  {
    q: 'What is the function of an "Intercepting Trap" installed in the inspection chamber near a building property boundary?',
    opts: ['Preventing foul toxic sewer gases and pests from the municipal street sewer from entering the house drainage system', 'Trapping gold particles', 'Filtering solid feces', 'Pumping wastewater uphill'],
    ans: 0,
    exp: 'An intercepting trap has a deep 100 mm water seal located at the junction of the house drain and municipal sewer to stop public sewer gases from entering private premises.',
    tip: 'Intercepting Trap prevents municipal sewer gases from entering house drains (water seal 100 mm).',
    top: 'Public Health Engineering'
  },
  {
    q: 'What is a "Gully Trap" in building plumbing?',
    opts: ['A water-sealed trap provided outside the building wall to disconnect sullage waste pipes (baths, sinks) from the underground foul sewer drain', 'A trap catching birds in gutters', 'A trap in bathroom ceilings', 'A rainwater downspout filter'],
    ans: 0,
    exp: 'A gully trap provides a 50 mm water seal separating waste pipes from the foul underground drain, preventing sewer gas from backing up into kitchens and bathrooms.',
    tip: 'Gully trap disconnects sullage waste pipes from underground foul drains.',
    top: 'Public Health Engineering'
  },
  {
    q: 'In a Septic Tank for domestic sewage treatment, what biological process breaks down and digests the settled sludge at the bottom?',
    opts: ['Anaerobic biological digestion by anaerobic bacteria in the absence of dissolved oxygen', 'Aerobic oxidation by bubbling air', 'Chemical acid dissolution', 'Thermal incineration'],
    ans: 0,
    exp: 'A septic tank is a primary sedimentation tank where settled solids undergo anaerobic decomposition by bacteria in the absence of free oxygen, converting sludge to methane and CO2.',
    tip: 'Septic tanks treat sewage sludge via ANAEROBIC biological digestion.',
    top: 'Public Health Engineering'
  },

  // --- ESTIMATING & COSTING PRINCIPLES ---
  {
    q: 'In the Center Line Method of building estimation, what deduction must be made from the total center line length for every "T-Junction" of meeting walls?',
    opts: ['Deduct half the width of the wall (b / 2) for each T-junction', 'Deduct full width of wall (b)', 'Deduct one-fourth width of wall (b / 4)', 'No deduction is made'],
    ans: 0,
    exp: 'At a T-junction, the intersecting wall overlaps the main wall. Deducting half the wall thickness (b/2) from the centerline length eliminates double counting.',
    tip: 'Center Line Method: Deduct half wall thickness (b / 2) for every T-junction. (L-junctions = ZERO deduction).',
    top: 'Estimation & Costing'
  },
  {
    q: 'In building estimation, what is "Plinth Area"?',
    opts: ['The total covered built-up area of a building measured at floor level of any story, including the thickness of all internal and external walls', 'The area of the open garden plot', 'The area of living rooms only', 'The carpet area of bedrooms'],
    ans: 0,
    exp: 'Plinth area is the total covered floor area measured to the external faces of outside walls at plinth level, forming the basis of preliminary plinth area estimates.',
    tip: 'Plinth Area = total covered built-up area measured to external wall faces.',
    top: 'Estimation & Costing'
  },
  {
    q: 'In building estimation, what is "Carpet Area"?',
    opts: ['The net usable, rentable floor area of an apartment or building, excluding the area of walls, corridors, balconies, toilets, staircases, and entrance lobbies', 'The area of the entire building plot', 'The area covered by floor carpets only', 'The plinth area plus veranda'],
    ans: 0,
    exp: 'Carpet area is the net habitable floor area inside walls (typically 65% to 75% of plinth area), excluding circulation spaces, stairs, and sanitary blocks.',
    tip: 'Carpet Area = net usable floor area excluding walls, staircases, balconies, and toilets.',
    top: 'Estimation & Costing'
  },
  {
    q: 'In public works civil engineering estimates, what percentage of the estimated construction cost is standardly added for "Contingencies" (unforeseen incidental expenses)?',
    opts: ['3% to 5% of estimated cost', '10% to 15%', '1% to 2%', '20% to 25%'],
    ans: 0,
    exp: 'Contingencies cover unexpected incidental expenses during project execution, standardly budgeted as 3% to 5% of the estimated civil work cost.',
    tip: 'Contingencies = 3% to 5% of estimated cost. Work-charged establishment = 1.5% to 2%.',
    top: 'Estimation & Costing'
  },
  {
    q: 'What is a "Sinking Fund" in civil engineering valuation and estate management?',
    opts: ['A fund created by setting aside regular annual installment amounts accumulated with compound interest over a building design life to finance reconstruction at the end of utility life', 'A fund for digging groundwater wells', 'A budget for emergency flood relief', 'A loan repayment penalty'],
    ans: 0,
    exp: 'A sinking fund is an annual depreciation reserve deposited in interest-bearing accounts so that the accumulated capital equals the replacement cost when the building reaches end of life.',
    tip: 'Sinking Fund = annual fund accumulated with compound interest to rebuild the property after its lifespan.',
    top: 'Estimation & Costing'
  },
  {
    q: 'In building valuation, what is "Scrap Value" (Junk Value)?',
    opts: ['The net value of salvaged building materials (such as dismantled steel bars, bricks, timber, copper wiring) obtained when a building is demolished at the end of its utility life', 'The resale value of an intact running building', 'The original construction cost', 'The cost of painting walls'],
    ans: 0,
    exp: 'Scrap value is the salvage cash value realized from dismantled raw materials after demolition, typically taken as 10% of the original construction cost.',
    tip: 'Scrap Value = value of dismantled materials after demolition (typically 10% of total cost).',
    top: 'Estimation & Costing'
  }
];

m10Part4.forEach(q => addQ(q, 10, 'mod-10', 'Building Construction & Estimation'));
console.log('Module 10 Part 4 batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
