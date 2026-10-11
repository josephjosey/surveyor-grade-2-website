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

console.log('Existing unique masks before Mod 10 Part 9:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-p10i-${addedList.length + 1}`;
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
    createdAt: '2026-10-11T22:00:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 68 DISTINCT QUESTIONS FOR MODULE 10 (PART 9: IRRIGATION, HIGHWAYS, ESTIMATION & VALUATION)
const m10Part9 = [
  // --- IRRIGATION: CROPS, DUTY, DELTA & CANALS ---
  {
    q: "In irrigation engineering, what is the total depth of water required by a crop during its entire period of growth in the field termed?",
    opts: ["Delta", "Duty", "Base period", "Kor depth"],
    ans: 0,
    exp: "Delta (Δ) is the total depth of water (usually measured in cm or metres) required by a crop during its entire period in the field.",
    tip: "Delta = Depth of water (cm or m); Duty = Area irrigated per unit discharge (hectares/cumec).",
    top: "Irrigation Engineering"
  },
  {
    q: "What is the relation connecting duty (D in hectares/cumec), delta (Δ in metres), and base period (B in days)?",
    opts: ["Δ = 8.64 B / D", "Δ = 8.64 D / B", "D = 8.64 Δ / B", "Δ = B / (8.64 D)"],
    ans: 0,
    exp: "The fundamental relation between duty, delta, and base period is Δ = 8.64 B / D (where Δ is in metres, B in days, and D in hectares/cumec).",
    tip: "If Δ is in cm: Δ = 864 B / D.",
    top: "Irrigation Engineering"
  },
  {
    q: "The first watering given to a crop when the seedlings have grown a few centimetres high is called:",
    opts: ["Kor watering", "Paleo irrigation", "Pre-sowing watering", "Leaching watering"],
    ans: 0,
    exp: "Kor watering is the first watering given to a crop when the young plants have grown a few centimeters above the ground; it requires the maximum depth of water in the shortest period.",
    tip: "Watering applied before sowing the crop is Paleo; first watering after plant sprouts is Kor watering.",
    top: "Irrigation Engineering"
  },
  {
    q: "Which type of irrigation canal is aligned along a natural ridge line between two drainage valleys so that it can irrigate fields on both sides by gravity?",
    opts: ["Watershed canal (ridge canal)", "Contour canal", "Side slope canal", "Inundation canal"],
    ans: 0,
    exp: "A watershed canal (ridge canal) runs along the ridgeline between two valleys, enabling gravity irrigation on both left and right sides without intersecting cross-drainage streams.",
    tip: "Watershed canals are the most economical because they avoid cross-drainage works.",
    top: "Irrigation Engineering"
  },
  {
    q: "A canal aligned nearly parallel to the natural ground contour lines that can irrigate land only on one side is known as a:",
    opts: ["Contour canal", "Ridge canal", "Side slope canal", "Branch canal"],
    ans: 0,
    exp: "A contour canal is aligned parallel to ground contours in hilly or undulating terrain; it commands and irrigates land only on the downhill side and intersects numerous cross-drainages.",
    tip: "Contour canals require extensive cross-drainage structures.",
    top: "Irrigation Engineering"
  },

  // --- CROSS DRAINAGE WORKS ---
  {
    q: "In which cross-drainage structure does the irrigation canal flow over the natural drainage stream under atmospheric pressure with its bed kept above the High Flood Level (HFL) of the drain?",
    opts: ["Aqueduct", "Siphon aqueduct", "Superpassage", "Canal siphon"],
    ans: 0,
    exp: "In an aqueduct, the canal is carried over the drainage trough such that the canal bed is clearly higher than the High Flood Level (HFL) of the natural drain underneath, both flowing under gravity.",
    tip: "Canal over drain with FSL of drain below canal bed = Aqueduct. If HFL of drain rises above canal bed = Siphon Aqueduct.",
    top: "Irrigation Engineering"
  },
  {
    q: "When a drainage stream is carried over an irrigation canal and the canal flows under gravity with its Full Supply Level (FSL) below the drainage bed, the structure is termed a:",
    opts: ["Superpassage", "Aqueduct", "Canal siphon", "Level crossing"],
    ans: 0,
    exp: "A superpassage is the reverse of an aqueduct: the natural drain is carried in a trough above the canal, with the canal's FSL safely below the bottom of the drainage trough.",
    tip: "Drain over canal: Superpassage (canal flows under atmospheric pressure); Canal siphon / Syphon (canal flows under siphon pressure).",
    top: "Irrigation Engineering"
  },
  {
    q: "What cross-drainage work is constructed when a canal and a large natural drainage river intersect at practically the identical bed elevation?",
    opts: ["Level crossing", "Siphon aqueduct", "Inlet and outlet", "Chute spillway"],
    ans: 0,
    exp: "A level crossing is adopted when a large canal and an equally large stream meet at the same bed level; crest regulators are provided across both watercourses to govern flows.",
    tip: "Level crossing is used when canal bed and river bed are at the same elevation.",
    top: "Irrigation Engineering"
  },
  {
    q: "What is the primary difference between a weir and a barrage across a river?",
    opts: ["A weir has a raised solid crest with small shutters, whereas a barrage controls pond level entirely by adjustable gates without a high solid crest", "A weir produces electricity whereas a barrage cannot", "A weir has only gates and no masonry crest", "A barrage is temporary while a weir is permanent"],
    ans: 0,
    exp: "A weir raises upstream water primarily by means of a high masonry or concrete crest (with small crest shutters), while a barrage maintains water level almost entirely by operating large vertical gates over a low floor.",
    tip: "Barrage = complete control through gates with low crest; Weir = fixed high masonry crest.",
    top: "Irrigation Engineering"
  },

  // --- DAMS, FORCES & SPILLWAYS ---
  {
    q: "For the stability of a gravity dam, what condition must the resultant force satisfy to completely avoid tensile stresses at the base?",
    opts: ["The resultant must fall within the middle third of the base (eccentricity e <= B/6)", "The resultant must act through the upstream toe", "The resultant must act through the downstream toe", "Eccentricity e must be greater than B/3"],
    ans: 0,
    exp: "To prevent tension developing at the dam foundation (Middle Third Rule), the resultant of all forces must cut the base within the middle third, meaning eccentricity e <= B/6.",
    tip: "Middle Third Rule: e <= B/6 avoids tension anywhere across the joint.",
    top: "Irrigation Engineering"
  },
  {
    q: "What is the line representing the upper boundary of water seepage flow through an earthen dam embankment called?",
    opts: ["Phreatic line (seepage line)", "Equipotential line", "Hydraulic jump line", "Piezometric crest"],
    ans: 0,
    exp: "The phreatic line (top seepage line) is the upper boundary of the seepage zone in an earthen dam; atmospheric pressure exists along the entire length of this line.",
    tip: "Pressure along the phreatic line equals atmospheric pressure (gauge pressure = 0).",
    top: "Irrigation Engineering"
  },
  {
    q: "Which type of spillway features an S-shaped profile that closely conforms to the lower nappe of a ventilated sharp-crested weir?",
    opts: ["Ogee spillway", "Chute spillway", "Shaft spillway", "Siphon spillway"],
    ans: 0,
    exp: "An ogee spillway has an S-shaped crest and downstream apron designed to match the lower surface of the water nappe discharging over a sharp-crested weir at design head.",
    tip: "Ogee spillway is the most common overflow spillway for gravity dams.",
    top: "Irrigation Engineering"
  },
  {
    q: "In Kennedy's silt theory, what is critical velocity defined as?",
    opts: ["The velocity of flow that just prevents silting as well as scouring in an earthen channel", "The velocity at which water turns turbulent", "The minimum velocity to carry bed ripples", "The velocity of light through water"],
    ans: 0,
    exp: "Kennedy defined critical velocity (Vo) as the mean velocity of water flow that is just sufficient to prevent silting and scouring in an unlined irrigation channel: Vo = 0.55 m D^0.64.",
    tip: "Critical velocity ratio m = V / Vo; if m = 1, the channel is in regime (no silting, no scouring).",
    top: "Irrigation Engineering"
  },
  {
    q: "According to Lacey's regime theory, what is the hydraulic mean depth (R) in a regime channel having flow velocity V and silt factor f given by?",
    opts: ["R = (5/2) * (V² / f)", "R = (2/5) * (V² / f)", "R = f / V²", "R = V² / (2 g f)"],
    ans: 0,
    exp: "Lacey's regime equation for hydraulic mean radius is R = (5/2) * (V² / f).",
    tip: "Lacey's key formulas: V = [ (Q f²) / 140 ]^(1/6), P = 4.75 √Q, and R = 2.5 (V² / f).",
    top: "Irrigation Engineering"
  },

  // --- HIGHWAY: CROSS-SECTIONAL ELEMENTS ---
  {
    q: "What is the standard width of carriageway for a two-lane road without raised kerbs as recommended by the Indian Roads Congress (IRC)?",
    opts: ["7.0 metres", "3.75 metres", "7.5 metres", "10.5 metres"],
    ans: 0,
    exp: "As per IRC standards, carriageway width for a two-lane road without raised kerbs is 7.0 m (with raised kerbs, it is 7.5 m). Single-lane width is 3.75 m.",
    tip: "Single lane: 3.75 m; 2-lane without kerbs: 7.0 m; 2-lane with kerbs: 7.5 m; multi-lane: 3.5 m per lane.",
    top: "Highway Engineering"
  },
  {
    q: "What is the convexity or transverse slope provided to the road surface to drain off rainwater called?",
    opts: ["Camber (cant)", "Super-elevation", "Gradient", "Kerb angle"],
    ans: 0,
    exp: "Camber is the transverse slope provided to the carriageway from the crown towards the edges to facilitate quick drainage of rainwater.",
    tip: "Camber drains rainwater transversely; gradient provides longitudinal slope.",
    top: "Highway Engineering"
  },
  {
    q: "What is the recommended camber value for an asphalt/bituminous thin-surfaced road in an area with heavy rainfall as per IRC?",
    opts: ["1 in 40 (2.5%)", "1 in 50 (2.0%)", "1 in 33 (3.0%)", "1 in 60 (1.7%)"],
    ans: 0,
    exp: "IRC recommends 1 in 40 (2.5%) camber for thin bituminous surfaces in heavy rain areas (and 1 in 50 or 2.0% in light rain areas).",
    tip: "Heavy rain: Concrete 1 in 50 (2%), Thin Bituminous 1 in 40 (2.5%), WBM/Gravel 1 in 33 (3%), Earthen 1 in 25 (4%).",
    top: "Highway Engineering"
  },
  {
    q: "What is the shape of camber preferred for fast-moving vehicles on rural highways because it provides a smooth flat crown?",
    opts: ["Parabolic camber", "Straight line camber", "Composite camber", "Stepped camber"],
    ans: 0,
    exp: "Parabolic camber consists of a smooth parabola that is flat at the crown and steepens towards the edges, preferred on high-speed rural highways for comfort during lane overtaking.",
    tip: "Parabolic camber: y = 2x² / (n W); straight line camber is easier to lay on concrete pavements.",
    top: "Highway Engineering"
  },

  // --- SIGHT DISTANCE & GEOMETRIC DESIGN ---
  {
    q: "What is the formula for the lag distance traveled by a vehicle during driver reaction time 't' moving at velocity 'v' (in m/s)?",
    opts: ["v * t", "v² / (2 g f)", "0.5 v t²", "2 v / t"],
    ans: 0,
    exp: "Lag distance is the distance traveled during the perception-reaction time t at constant speed v, given by Lag distance = v * t.",
    tip: "Stopping Sight Distance (SSD) = Lag distance (v*t) + Braking distance (v² / (2*g*f)).",
    top: "Highway Engineering"
  },
  {
    q: "According to IRC 73, what is the standard total reaction time assumed for calculating Stopping Sight Distance (SSD)?",
    opts: ["2.5 seconds", "0.75 seconds", "4.0 seconds", "1.5 seconds"],
    ans: 0,
    exp: "IRC adopts a driver reaction time of 2.5 seconds for SSD calculations based on the PIEV theory (Perception, Intellection, Emotion, Volition).",
    tip: "SSD reaction time = 2.5 seconds; OSD reaction time = 2.0 seconds.",
    top: "Highway Engineering"
  },
  {
    q: "How is Intermediate Sight Distance (ISD) related to Stopping Sight Distance (SSD) in highway geometric design?",
    opts: ["ISD = 2 * SSD", "ISD = 1.5 * SSD", "ISD = 0.5 * SSD", "ISD = 3 * SSD"],
    ans: 0,
    exp: "When Overtaking Sight Distance (OSD) cannot be economically provided on a stretch of road, Intermediate Sight Distance (ISD) equal to twice the SSD (ISD = 2 SSD) is provided.",
    tip: "ISD = 2 SSD. It gives limited overtaking opportunities safely.",
    top: "Highway Engineering"
  },
  {
    q: "What is the design equation for super-elevation (e) on horizontal curves for mixed traffic conditions in India per IRC guidelines?",
    opts: ["e = V² / (225 R)", "e = V² / (127 R)", "e = V / (225 R)", "e = 225 / (V² R)"],
    ans: 0,
    exp: "For mixed traffic, super-elevation is designed to counteract centrifugal force fully for 75% of design speed V (in km/h): e = (0.75 V)² / (127 R) = V² / (225 R).",
    tip: "Equilibrium/practical super-elevation for mixed traffic: e = V² / (225 R).",
    top: "Highway Engineering"
  },
  {
    q: "What is the maximum permissible super-elevation for plain and rolling terrain roads according to IRC standards?",
    opts: ["7% (0.07)", "10% (0.10)", "4% (0.04)", "12% (0.12)"],
    ans: 0,
    exp: "IRC limits the maximum super-elevation to 7% (0.07) for plain and rolling terrain, 10% for hilly roads not bound by snow, and 4% for urban roads with frequent intersections.",
    tip: "Max super-elevation: Plain/Rolling = 7%; Hilly (non-snow) = 10%; Urban = 4%.",
    top: "Highway Engineering"
  },
  {
    q: "Which ideal transition curve is most commonly adopted in highway horizontal curves because its rate of increase of curvature is uniform?",
    opts: ["Euler's spiral (clothoid)", "Cubic parabola", "Lemniscate", "Circular arc"],
    ans: 0,
    exp: "Euler's spiral (clothoid) is the ideal highway transition curve because its radius of curvature decreases inversely with curve length (L * R = constant), providing a uniform rate of super-elevation introduction.",
    tip: "Spiral/clothoid is ideal for highways; cubic parabola is used in railways.",
    top: "Highway Engineering"
  },

  // --- TRAFFIC SIGNS & PAVEMENTS ---
  {
    q: "According to IRC 67, what is the standard shape of a 'STOP' regulatory road sign?",
    opts: ["Octagonal", "Circular", "Equilateral triangular", "Rectangular"],
    ans: 0,
    exp: "A STOP sign is octagonal in shape with a red background and white lettering, unique in shape to be recognizable even when covered with snow or viewed from behind.",
    tip: "STOP sign is OCTAGONAL; GIVE WAY sign is an INVERTED TRIANGLE.",
    top: "Highway Engineering"
  },
  {
    q: "What is the standard geometric shape used for cautionary (warning) traffic signs according to IRC 67?",
    opts: ["Equilateral triangle pointing upwards", "Circle", "Rectangle", "Diamond"],
    ans: 0,
    exp: "Cautionary (warning) signs are equilateral triangles pointing upwards with a white background, red border, and black symbol.",
    tip: "Regulatory = Circular (red border); Warning/Cautionary = Triangle (apex up); Informatory = Rectangular.",
    top: "Highway Engineering"
  },
  {
    q: "What is the bottom-most prepared earth foundation layer of a flexible pavement called?",
    opts: ["Subgrade", "Sub-base", "Base course", "Wearing course"],
    ans: 0,
    exp: "The subgrade is the compacted natural soil bed that supports all pavement layers and must withstand the stresses transmitted from traffic above.",
    tip: "Pavement layers bottom-to-top: Subgrade -> Sub-base course -> Base course -> Surface / Wearing course.",
    top: "Highway Engineering"
  },
  {
    q: "In Water Bound Macadam (WBM) road construction, what material is spread to fill the voids between coarse stone aggregates after dry rolling?",
    opts: ["Screenings", "Filler powder", "Mastic asphalt", "Tack coat"],
    ans: 0,
    exp: "Screenings (smaller stone aggregate fraction) are spread and swept into voids between the coarse aggregates before watering and wet rolling in WBM construction.",
    tip: "Sequence in WBM: Coarse aggregates dry rolled -> Screenings applied -> Water sprinkled -> Binding material (blindage) rolled.",
    top: "Highway Engineering"
  },
  {
    q: "What is an application of low-viscosity bituminous material sprayed onto an absorbent unpaved surface (like WBM or WMM) to prepare it for asphalt overlay termed?",
    opts: ["Prime coat", "Tack coat", "Seal coat", "Surface dressing"],
    ans: 0,
    exp: "A prime coat is an initial application of low-viscosity cutback bitumen or emulsion onto an absorbent granular base to plug voids and bind it before laying asphalt.",
    tip: "Prime coat goes on bare granular base; Tack coat goes on existing smooth asphalt/concrete to bond new layers; Seal coat waterproofs the top surface.",
    top: "Highway Engineering"
  },

  // --- ESTIMATION: UNITS OF MEASUREMENT (IS 1200) ---
  {
    q: "According to IS 1200, what is the unit of measurement for Damp Proof Course (DPC) in building estimates?",
    opts: ["Square metre (m²)", "Cubic metre (m³)", "Running metre (m)", "Kilogram (kg)"],
    ans: 0,
    exp: "Damp proof course (DPC) is measured in square metres (m²) with the specified thickness stated in the item description.",
    tip: "DPC, plastering, painting, pointing, and partition walls (half-brick) are measured in square metres (m²).",
    top: "Estimation & Costing"
  },
  {
    q: "What is the unit of measurement for steel reinforcement bars in RCC works per IS 1200?",
    opts: ["Quintal or metric tonne (weight)", "Metre length", "Cubic metre volume", "Number of bars"],
    ans: 0,
    exp: "Steel reinforcement is measured by weight in quintals (q) or metric tonnes (t) calculated from the standard unit weight of bars per running metre.",
    tip: "Unit weight of rebar = d² / 162 kg/m (where d is diameter in mm).",
    top: "Estimation & Costing"
  },
  {
    q: "Under IS 1200, which item of work is measured in running metres (linear metres)?",
    opts: ["Skirting (up to 30 cm height)", "Flooring", "Plastering", "Earthwork excavation"],
    ans: 0,
    exp: "Skirting, cornices, drip courses, and expansion joints are measured in running metres (m) stating width/thickness.",
    tip: "Skirting up to 30 cm is measured in running metres; skirting above 30 cm is measured in square metres.",
    top: "Estimation & Costing"
  },
  {
    q: "In taking out quantities for earthwork excavation in trenches, what is the unit of measurement?",
    opts: ["Cubic metre (m³)", "Square metre (m²)", "Running metre (m)", "Tonnes"],
    ans: 0,
    exp: "Earthwork excavation in foundation trenches is measured in cubic metres (m³) computed from length, width, and depth of trenches.",
    tip: "Surface excavation up to 30 cm depth (surface dressing/stripping) is measured in m²; trench excavation is in m³.",
    top: "Estimation & Costing"
  },

  // --- METHODS OF BUILDING ESTIMATION ---
  {
    q: "In the centre-line method of building estimation, what deduction is made from the total centre-line length for each T-junction of cross walls?",
    opts: ["Half the breadth of the wall (b / 2)", "Full breadth of the wall (b)", "Twice the breadth of the wall (2 b)", "No deduction is made"],
    ans: 0,
    exp: "At each T-junction where a cross-wall meets a main wall, a deduction equal to half the wall breadth (b/2) is made from the total centre-line length.",
    tip: "At L-corners: No deduction. At T-junctions: Deduct b/2 per junction. At X-cross junctions: Deduct full breadth (b).",
    top: "Estimation & Costing"
  },
  {
    q: "Why is no deduction made at corner (L-junction) wall intersections in the centre-line method of estimation?",
    opts: ["Because the overlap area on the inner side exactly balances the omitted triangular area on the outer side", "Because corner walls are always thinner", "Because masonry is assumed continuous", "Because corners are reinforced"],
    ans: 0,
    exp: "At a rectangular L-corner, the excess area counted on the outer corner perfectly balances the deficient area inside, meaning the centerline length yields the exact correct net volume.",
    tip: "Centerline method: 0 deduction at L-corners; b/2 deduction at T-junctions.",
    top: "Estimation & Costing"
  },
  {
    q: "In the long-wall and short-wall method of estimating, how is the length of a long wall from out-to-out calculated from its centre-to-centre length?",
    opts: ["Centre-to-centre length + Half breadth of wall at each end (Total + One breadth)", "Centre-to-centre length - One breadth", "Centre-to-centre length without modification", "Centre-to-centre length + Two wall breadths"],
    ans: 0,
    exp: "Length of long wall (out-to-out) = Centre-to-centre length + (Breadth of footing / 2) + (Breadth of footing / 2) = Centre-to-centre length + Breadth of wall.",
    tip: "Long wall length = c/c length + 1 breadth. Short wall length = c/c length - 1 breadth.",
    top: "Estimation & Costing"
  },

  // --- TYPES OF ESTIMATES ---
  {
    q: "What type of preliminary estimate is prepared by multiplying the total plinth area of a proposed building by the prevailing plinth area rate in that locality?",
    opts: ["Plinth area estimate", "Cube rate estimate", "Detailed item rate estimate", "Supplementary estimate"],
    ans: 0,
    exp: "A plinth area estimate is an approximate estimate prepared by multiplying the external covered plinth area by the predetermined plinth area rate of comparable structures.",
    tip: "Plinth area is based on external wall dimensions at floor level.",
    top: "Estimation & Costing"
  },
  {
    q: "When is a Revised Estimate prepared for an engineering project under CPWD/PWD rules?",
    opts: ["When the original sanctioned estimate is likely to be exceeded by more than 5% or expenditure exceeds administrative sanction by 10%", "When minor alterations are made without cost impact", "When a contractor leaves the site midway", "Every financial year automatically"],
    ans: 0,
    exp: "A revised estimate must be framed when the original sanctioned cost is exceeded by more than 5%, or when substantial material deviations from the approved design occur.",
    tip: "Revised estimate is required when cost exceeds original estimate by > 5% or expenditure exceeds administrative sanction by > 10%.",
    top: "Estimation & Costing"
  },
  {
    q: "What is an additional estimate framed to cover new works found necessary while an original project is under execution called?",
    opts: ["Supplementary estimate", "Revised estimate", "Maintenance estimate", "Cube rate estimate"],
    ans: 0,
    exp: "A supplementary estimate is prepared for additional works that were not included in the original sanctioned estimate but become necessary during project progress.",
    tip: "Supplementary estimate covers new extra work; Revised estimate updates an existing exceeded budget.",
    top: "Estimation & Costing"
  },
  {
    q: "What percentage of the estimated capital cost of a building is typically provided for annual repairs and maintenance in PWD norms?",
    opts: ["1.5% to 2%", "10% to 15%", "0.1% to 0.2%", "5% to 8%"],
    ans: 0,
    exp: "Annual maintenance and repair estimates for public buildings are usually framed at 1.5% to 2% of the original capital construction cost.",
    tip: "Annual repair provision = 1.5% to 2% of capital cost.",
    top: "Estimation & Costing"
  },

  // --- CONTRACTS, TENDERS & DEPOSITS ---
  {
    q: "What is the monetary deposit required from a contractor along with their tender submission as a guarantee of good faith called?",
    opts: ["Earnest Money Deposit (EMD)", "Security Deposit (SD)", "Retention money", "Performance bank guarantee"],
    ans: 0,
    exp: "Earnest Money Deposit (EMD) is an upfront deposit (usually 1% to 2% of estimated project value) submitted with the tender to show bona fide intent.",
    tip: "EMD is 1% to 2% (returned to unsuccessful bidders); Security Deposit is 10% (kept until defects liability period ends).",
    top: "Contracts & Tenders"
  },
  {
    q: "What is the typical percentage of the contract value retained as Security Deposit (SD) to guarantee satisfactory completion of the work?",
    opts: ["10%", "1%", "25%", "50%"],
    ans: 0,
    exp: "Security Deposit is typically 10% of total contract value (or accumulated via deductions from running bills) to cover potential contractor defaults during construction and defects period.",
    tip: "Security deposit = 10% of total work cost.",
    top: "Contracts & Tenders"
  },
  {
    q: "In which contract system does the contractor agree to carry out each item of work at rates quoted in a bill of quantities?",
    opts: ["Item rate contract (unit price contract)", "Lump-sum contract", "Percentage rate contract", "Cost plus percentage fee contract"],
    ans: 0,
    exp: "In an item rate contract (schedule contract), the contractor quotes individual rates for each item of work listed in the bill of quantities, paid based on actual measured quantities.",
    tip: "Item rate contract is the most widely adopted contract system in civil engineering departments.",
    top: "Contracts & Tenders"
  },
  {
    q: "In rate analysis of construction items, what percentage of the material and labour cost is normally included for contractor's profit?",
    opts: ["10%", "2.5%", "25%", "35%"],
    ans: 0,
    exp: "Standard PWD analysis of rates includes 10% on the net cost of materials and labour as contractor's profit.",
    tip: "Contractor's profit = 10%; Water charges = 1.5%; Overhead charges = 2.5% to 5%.",
    top: "Estimation & Costing"
  },
  {
    q: "What percentage is added to civil engineering estimates to cover unforeseen contingencies?",
    opts: ["3% to 5%", "10% to 15%", "0.5% to 1%", "20% to 25%"],
    ans: 0,
    exp: "A provision of 3% to 5% of estimated cost is added to cover unforeseen expenditures and incidental site expenses termed contingencies.",
    tip: "Contingencies = 3% to 5%; Workcharged establishment = 1.5% to 2%.",
    top: "Estimation & Costing"
  },

  // --- VALUATION & DEPRECIATION ---
  {
    q: "What is the value of a dismantled building material at the end of its useful lifespan, less the cost of demolition and removal, called?",
    opts: ["Scrap value (junk value)", "Salvage value", "Book value", "Market value"],
    ans: 0,
    exp: "Scrap value is the salvageable junk value of dismantled materials (such as scrap steel, old bricks, timber) after the useful life of the building is over, typically estimated at 10% of initial construction cost.",
    tip: "Scrap value is realized after dismantling (usually ~10%); Salvage value is realized without dismantling.",
    top: "Valuation"
  },
  {
    q: "What is the value of a utility structure at the end of its utility period without being broken up or dismantled termed?",
    opts: ["Salvage value", "Scrap value", "Distress value", "Replacement value"],
    ans: 0,
    exp: "Salvage value is the estimated value of an asset at the end of its useful working life when sold as a working unit without being dismantled.",
    tip: "Salvage = sold intact; Scrap = sold as demolished junk.",
    top: "Valuation"
  },
  {
    q: "What is the original capital cost of an asset minus its accumulated depreciation up to that date called?",
    opts: ["Book value", "Market value", "Assessed value", "Replacement cost"],
    ans: 0,
    exp: "Book value is the accounting value of a property recorded in ledger books, defined as original cost minus total depreciation to date.",
    tip: "Book value decreases every year; at the end of useful life, book value equals scrap value.",
    top: "Valuation"
  },
  {
    q: "In valuation, what is Year's Purchase (YP) defined as for a property yielding net annual return at an interest rate 'i' (expressed as a fraction)?",
    opts: ["1 / i", "100 * i", "i / 100", "i²"],
    ans: 0,
    exp: "Year's Purchase (YP) is the capital sum required to be invested at a given interest rate 'i' to produce a net income of 1 Rupee per year, given by YP = 1 / i (or 100 / R where R is interest percentage).",
    tip: "YP = 1 / i; Capitalized value = Net annual income * Year's Purchase.",
    top: "Valuation"
  },
  {
    q: "A property yields a net annual income of Rs. 12,000. If the prevailing rate of interest is 6%, what is its capitalized value?",
    opts: ["Rs. 2,00,000", "Rs. 1,20,000", "Rs. 72,000", "Rs. 5,00,000"],
    ans: 0,
    exp: "Capitalized value = Net Annual Income * Year's Purchase = 12,000 * (100 / 6) = 12,000 * 16.667 = Rs. 2,00,000.",
    tip: "Capitalized value = Net income / interest rate = 12,000 / 0.06 = Rs. 2,00,000.",
    top: "Valuation"
  },
  {
    q: "In the straight-line method of depreciation, what is the annual depreciation formula for an asset with original cost C, scrap value S, and useful life n years?",
    opts: ["(C - S) / n", "(C + S) / n", "C / (n - S)", "(C - S) * n"],
    ans: 0,
    exp: "In the straight-line method, depreciation is assumed uniform throughout the life of the asset: Annual depreciation D = (C - S) / n.",
    tip: "Straight-line depreciation assigns equal wear-and-tear loss to each year.",
    top: "Valuation"
  },
  {
    q: "What is a fund created by setting aside periodic payments at compound interest so that the accumulated sum equals the cost of asset replacement at the end of its useful life called?",
    opts: ["Sinking fund", "Reserve fund", "Annuity fund", "Depreciation ledger"],
    ans: 0,
    exp: "A sinking fund is a fund accumulated over time by regular equal annual deposits earning compound interest, intended to replace the property or repay a loan when its useful life expires.",
    tip: "Annual sinking fund instalment: I = S * i / [ (1 + i)^n - 1 ].",
    top: "Valuation"
  },
  {
    q: "What is the right of a property owner to enjoy light, air, or passage across another person's adjoining land without obstruction called?",
    opts: ["Easement right", "Freehold right", "Leasehold right", "Reversionary right"],
    ans: 0,
    exp: "An easement is a non-possessory legal right acquired by an owner over the adjoining land of another (such as right to light, air, support, or pathway).",
    tip: "Under the Indian Easements Act, uninterrupted continuous enjoyment for 20 years creates a prescriptive easement right.",
    top: "Valuation"
  },
  {
    q: "What type of lease confers property tenure for a specified fixed duration of 99 years or more, after which possession reverts to the lessor?",
    opts: ["Leasehold property", "Freehold property", "Sub-lease tenancy", "Licensee tenure"],
    ans: 0,
    exp: "In a leasehold property, the lessee possesses the land for a specified period (e.g., 99 years) subject to payment of lease rent, with ownership returning to the freeholder upon expiry.",
    tip: "Freehold owner has absolute perpetual ownership; leaseholder holds property for a fixed lease term.",
    top: "Valuation"
  },
  {
    q: "In rent fixation for government residential buildings, the standard rent is generally calculated as what percentage of the total capital cost of the building?",
    opts: ["6% to 8%", "1% to 2%", "15% to 20%", "25%"],
    ans: 0,
    exp: "Standard rent is typically fixed at 6% to 8% (sometimes up to 10% including municipal taxes and maintenance) of the total capital cost of the building and land.",
    tip: "Standard net return is typically assessed at 6% to 8% per annum on capital cost.",
    top: "Valuation"
  },
  {
    q: "In an analysis of rates for brick masonry in 1:6 cement mortar, what volume of dry mortar is approximately required for 1 cubic metre of finished brickwork?",
    opts: ["0.30 m³", "0.10 m³", "0.60 m³", "0.85 m³"],
    ans: 0,
    exp: "For 1 m³ of brick masonry using standard modular bricks, approximately 0.25 to 0.30 m³ of dry mortar is required (typically taken as 0.30 m³ to account for wastage and frog filling).",
    tip: "Rule of thumb: 1 m³ brickwork requires ~500 modular bricks and ~0.30 m³ dry mortar.",
    top: "Estimation & Costing"
  },
  {
    q: "How many standard modular bricks of size 190 mm x 90 mm x 90 mm are required to construct 1 cubic metre of brick masonry?",
    opts: ["500 bricks", "400 bricks", "600 bricks", "350 bricks"],
    ans: 0,
    exp: "Nominal modular brick size with mortar joint is 200 mm x 100 mm x 100 mm = 0.2 m x 0.1 m x 0.1 m = 0.002 m³. Therefore, 1 / 0.002 = 500 bricks are required per cubic metre.",
    tip: "Standard modular brickwork: exactly 500 bricks per m³.",
    top: "Estimation & Costing"
  },
  {
    q: "What is the standard weight of one bag of ordinary Portland cement (OPC) in India?",
    opts: ["50 kg", "40 kg", "60 kg", "45 kg"],
    ans: 0,
    exp: "In India, one commercial bag of cement contains exactly 50 kg of cement, with a loose volume of approximately 0.0347 m³ (34.7 litres or 35 litres).",
    tip: "1 bag = 50 kg = 34.7 litres = 0.0347 m³. Density of cement = 1440 kg/m³.",
    top: "Building Materials"
  },
  {
    q: "What is the nominal density of ordinary Portland cement commonly adopted for material estimation?",
    opts: ["1440 kg/m³", "1000 kg/m³", "2400 kg/m³", "7850 kg/m³"],
    ans: 0,
    exp: "The standard nominal bulk density of ordinary Portland cement is taken as 1440 kg/m³ in Indian practice.",
    tip: "Density of cement = 1440 kg/m³; Steel = 7850 kg/m³; Water = 1000 kg/m³; Plain concrete = 2400 kg/m³; RCC = 2500 kg/m³.",
    top: "Building Materials"
  },
  {
    q: "What is the density of structural mild steel adopted in quantity surveying calculations?",
    opts: ["7850 kg/m³", "2400 kg/m³", "1440 kg/m³", "8900 kg/m³"],
    ans: 0,
    exp: "The density of structural steel and reinforcement bars is standardly taken as 7850 kg/m³ (78.5 kN/m³).",
    tip: "Weight of 1 m length of steel rebar = (d² / 162) kg.",
    top: "Estimation & Costing"
  },
  {
    q: "What is the thickness of a standard one-brick wall constructed using traditional modular bricks (nominal size 200 mm x 100 mm x 100 mm)?",
    opts: ["200 mm (20 cm)", "100 mm (10 cm)", "300 mm (30 cm)", "400 mm (40 cm)"],
    ans: 0,
    exp: "Nominal modular brick size with mortar is 200 mm x 100 mm x 100 mm; thus, a one-brick thick wall has a nominal thickness of 200 mm (20 cm).",
    tip: "Half-brick wall = 10 cm; One-brick wall = 20 cm; One-and-a-half brick wall = 30 cm.",
    top: "Building Construction"
  },
  {
    q: "In an earthwork excavation estimate, what is the horizontal distance over which excavated soil is conveyed called?",
    opts: ["Lead", "Lift", "Haul depth", "Borrow span"],
    ans: 0,
    exp: "Lead is the horizontal distance over which excavated earth is moved from the excavation pit to the disposal site, standardly measured in units of 30 metres (or 50 m in modern codes).",
    tip: "Lead = Horizontal distance (standard 30 m or 50 m); Lift = Vertical height (standard 1.5 m).",
    top: "Estimation & Costing"
  },
  {
    q: "In standard earthwork estimation schedules, what is the default initial lift specified for ordinary excavation?",
    opts: ["1.5 metres", "3.0 metres", "0.5 metres", "2.0 metres"],
    ans: 0,
    exp: "The standard initial lift included in ordinary earthwork rates without extra charge is 1.5 metres of vertical height.",
    tip: "Initial lead = 30 m (or 50 m); initial lift = 1.5 m.",
    top: "Estimation & Costing"
  },
  {
    q: "What is the process of trimming, dressing, and compacting the excavated subgrade surface to true slope and level before laying road metal called?",
    opts: ["Subgrade preparation (surface dressing)", "Grouting", "Screening", "Bituminizing"],
    ans: 0,
    exp: "Subgrade preparation involves cutting, filling, camber shaping, and rolling the excavated earth foundation to the specified longitudinal grade and transverse profile.",
    tip: "Subgrade preparation ensures the foundation bed conforms to design level and compaction.",
    top: "Highway Engineering"
  },
  {
    q: "In quantity surveying, what is a detailed list of all work items with descriptions, units, and quantities without rates called?",
    opts: ["Bill of Quantities (BOQ)", "Schedule of Rates (SOR)", "Abstract of estimate", "Daywork sheet"],
    ans: 0,
    exp: "A Bill of Quantities (BOQ) is a tender document containing item descriptions and calculated quantities prepared by the quantity surveyor for contractors to price.",
    tip: "BOQ contains quantities for bidders to insert their rates; SOR is the departmental master schedule of standard rates.",
    top: "Estimation & Costing"
  },
  {
    q: "What is the document containing standard approved labor, material, and machinery rates maintained by government engineering departments (like PWD) called?",
    opts: ["Schedule of Rates (SOR)", "Bill of Quantities", "Analysis of Rates", "Specification manual"],
    ans: 0,
    exp: "A Schedule of Rates (SOR or DSR for Delhi Schedule of Rates) is an official compilation of current standardized rates for various construction operations in a state or region.",
    tip: "SOR / DSR is updated periodically to reflect changing market costs of material and labor.",
    top: "Estimation & Costing"
  },
  {
    q: "What is the small depression (usually 10 to 20 mm deep) molded on the top face of a clay brick called?",
    opts: ["Frog", "Arris", "Closer", "Perpend"],
    ans: 0,
    exp: "The frog is an indentation on the top face of a brick that forms a key for mortar and displays the brick manufacturer's trademark.",
    tip: "Bricks are always laid with frog facing upward so that mortar fills the frog to form a shear key.",
    top: "Building Materials"
  }
];

let addedCount = 0;
for (const item of m10Part9) {
  if (addQ(item, 10, 'mod-10', 'Irrigation, Highways & Estimation')) {
    addedCount++;
  }
}

console.log(`Module 10 Part 9 batch processed. Total added: ${addedCount}`);
db.bankQuestions.push(...addedList);
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
