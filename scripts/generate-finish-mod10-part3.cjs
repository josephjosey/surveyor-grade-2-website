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

console.log('Existing unique masks before Mod 10 Part 3:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-p10c-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-r${c++}`;
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
    createdAt: '2026-10-11T20:00:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 125 DISTINCT QUESTIONS FOR MODULE 10 (PART 3 - TIMBER, FOUNDATIONS, ROOFS, IRRIGATION & ESTIMATION)
const m10Part3 = [
  // --- TIMBER: STRUCTURE & RINGS ---
  {
    q: 'In the cross-section of an exogenous tree trunk, what is the innermost central core called?',
    opts: ['Pith (or Medulla)', 'Heartwood', 'Sapwood', 'Cambium layer'],
    ans: 0,
    exp: 'The pith (or medulla) is the central innermost soft cellular core of the tree stem, formed during the early years of sapling growth.',
    tip: 'Pith (Medulla) is the innermost central core of a tree trunk.',
    top: 'Building Materials - Timber'
  },
  {
    q: 'In the cross-section of a tree trunk, what is Heartwood (duramen), and what are its engineering properties?',
    opts: ['The inner annular rings of dead, dense, dark wood that provide structural strength and resist decay', 'The outer living white rings carrying sap', 'The green photosynthetic bark', 'The outer protective cork'],
    ans: 0,
    exp: 'Heartwood consists of dead, heavily lignified inner rings. It is darker, denser, stronger, and more resistant to fungi and insects than sapwood.',
    tip: 'Heartwood provides structural strength and durability; Sapwood carries sap and rots easily.',
    top: 'Building Materials - Timber'
  },
  {
    q: 'What is Sapwood (alburnum) in a tree trunk, and why is it undesirable for structural carpentry?',
    opts: ['The outer lighter rings containing living cells that carry sap, making it highly vulnerable to fungal decay and insect attack', 'The dead inner core', 'The bark layer', 'The root system'],
    ans: 0,
    exp: 'Sapwood is the active outer layer carrying water and nutrients; its high moisture and sugar content attract fungi, termites, and borers.',
    tip: 'Sapwood contains living sap, making it vulnerable to decay; avoided in structural work.',
    top: 'Building Materials - Timber'
  },
  {
    q: 'Which thin cellular layer situated between the sapwood and inner bark is responsible for the radial growth of an exogenous tree?',
    opts: ['Cambium layer', 'Pith', 'Medullary rays', 'Cortex'],
    ans: 0,
    exp: 'The cambium layer consists of living meristematic cells: it produces new sapwood on the inside and new phloem bark on the outside.',
    tip: 'Cambium layer is the living cell layer between sapwood and inner bark responsible for tree growth.',
    top: 'Building Materials - Timber'
  },
  {
    q: 'What are the radial cellular lines that run perpendicularly from the pith toward the bark in a tree trunk called?',
    opts: ['Medullary rays', 'Annual rings', 'Cambium cells', 'Pith rays'],
    ans: 0,
    exp: 'Medullary rays are thin radial cellular bands extending from the central pith to the outer bark, holding annual growth rings together transversely.',
    tip: 'Medullary rays run radially from pith to bark, binding annual rings together.',
    top: 'Building Materials - Timber'
  },
  {
    q: 'How is the approximate age of an exogenous tree determined from its felled cross-section?',
    opts: ['By counting the total number of concentric Annual Growth Rings', 'By measuring trunk circumference', 'By counting the number of medullary rays', 'By the depth of the bark'],
    ans: 0,
    exp: 'In exogenous trees, one concentric annual ring (comprising spring wood and autumn wood) forms every year. Counting these rings gives tree age.',
    tip: 'Age of exogenous tree = total count of annual rings.',
    top: 'Building Materials - Timber'
  },

  // --- TIMBER DEFECTS & SEASONING ---
  {
    q: 'What type of timber shake defect consists of a curved split occurring along the path of an annual growth ring, separating adjacent rings?',
    opts: ['Cup Shake (or Ring Shake if complete circle)', 'Heart Shake', 'Star Shake', 'Radial Shake'],
    ans: 0,
    exp: 'A cup shake is a curved separation between annual rings caused by unequal growth or strong winds; if it runs completely around the ring, it is a Ring Shake.',
    tip: 'Cup shake = curved split along an annual ring. Ring shake = complete circular split.',
    top: 'Building Materials - Timber'
  },
  {
    q: 'What type of timber defect consists of splits radiating outward from the central pith toward the sapwood, caused by shrinkage of interior heartwood in overmature trees?',
    opts: ['Heart Shake', 'Star Shake', 'Cup Shake', 'Rind Gall'],
    ans: 0,
    exp: 'Heart shakes radiate outward from the pith, widest at the center, occurring in overmature trees due to shrinkage of heartwood.',
    tip: 'Heart shake radiates from central pith outwards (widest at pith).',
    top: 'Building Materials - Timber'
  },
  {
    q: 'What type of timber defect consists of cracks radiating inward from the bark toward the pith, widest at the outer perimeter?',
    opts: ['Star Shake', 'Heart Shake', 'Cup Shake', 'Upset'],
    ans: 0,
    exp: 'Star shakes are radial cracks widest at the bark and tapering inward, caused by severe frost, severe sun exposure, or rapid drying of the outer wood.',
    tip: 'Star shake radiates inward from the bark (widest at the bark).',
    top: 'Building Materials - Timber'
  },
  {
    q: 'What is a "Knot" in timber?',
    opts: ['The embedded base of a tree branch or limb that has been enclosed by the subsequent growth of the main trunk', 'A fungal decay spot', 'A twist in the wood grain', 'A crack caused by lightning'],
    ans: 0,
    exp: 'Knots occur where branch stubs are overgrown by trunk wood, creating localized grain discontinuity that weakens timber under tensile loads.',
    tip: 'Knots are embedded branch bases enclosed by tree trunk growth.',
    top: 'Building Materials - Timber'
  },
  {
    q: 'What is "Dry Rot" in timber, and what environmental conditions promote it?',
    opts: ['Fungal decay caused by Serpula lacrymans in damp, unventilated, dark spaces that converts wood into a dry, crumbly, brown powder', 'Damage caused by direct desert sun', 'Chemical burning by acid', 'Wood dried too rapidly in a kiln'],
    ans: 0,
    exp: 'Dry rot is fungal decay thriving in damp, stagnant, unventilated locations (under floors, behind paneling). Fungi feed on cellulose, leaving a crumbly powder.',
    tip: 'Dry rot = fungal decay in unventilated, damp, dark locations converting wood to dry powder.',
    top: 'Building Materials - Timber'
  },
  {
    q: 'What is "Wet Rot" in timber?',
    opts: ['Chemical decomposition of wood tissues caused by fungal action under alternate wetting and drying conditions', 'Wood soaked continuously under deep freshwater', 'Rotting caused by sea salt', 'Damage from carpenter bees'],
    ans: 0,
    exp: 'Wet rot occurs when timber is subjected to alternating moisture and dryness, leading to enzymatic decomposition of cell walls.',
    tip: 'Wet rot occurs under alternate wetting and drying conditions.',
    top: 'Building Materials - Timber'
  },
  {
    q: 'What is the standard chemical composition of the "ASCU" timber preservative?',
    opts: ['6 parts Potassium Dichromate, 3 parts Copper Sulphate, and 1 part Arsenic Pentoxide', 'Pure creosote oil dissolved in diesel', 'Zinc chloride and sodium fluoride', 'Mercuric chloride solution'],
    ans: 0,
    exp: 'ASCU (developed by the Forest Research Institute, Dehradun) contains 6 parts K2Cr2O7 + 3 parts CuSO4 + 1 part As2O5 in water. It protects against termites and fungi.',
    tip: 'ASCU preservative = 6 parts Potassium Dichromate + 3 parts Copper Sulphate + 1 part Arsenic Pentoxide.',
    top: 'Building Materials - Timber'
  },
  {
    q: 'What is the "Bethell Process" of timber preservation?',
    opts: ['Injecting hot coal-tar creosote oil into timber under vacuum and high pressure (0.7 to 1.0 N/mm²) in an enclosed steel cylinder', 'Soaking timber in cold river water', 'Spraying with white wash', 'Heating timber over an open wood fire'],
    ans: 0,
    exp: 'The Bethell full-cell process uses a vacuum to evacuate cell cavities, then injects hot creosote oil under high pressure (0.7 to 1.0 N/mm²) to protect railway sleepers.',
    tip: 'Bethell process = pressure impregnation of creosote oil in timber.',
    top: 'Building Materials - Timber'
  },

  // --- FOUNDATIONS & RANKINE FORMULA ---
  {
    q: 'In civil engineering foundation design, what distinguishes a Shallow Foundation from a Deep Foundation according to Terzaghi?',
    opts: ['A shallow foundation has depth of embedment less than or equal to its width (D <= B); a deep foundation has depth greater than width (D > B)', 'Shallow foundations use concrete while deep foundations use wood', 'Shallow foundations carry zero load', 'Deep foundations are only used underwater'],
    ans: 0,
    exp: 'Karl Terzaghi defined shallow foundations as those where depth D <= B (e.g. isolated footings, strip footings, raft foundations). When D > B, it is a deep foundation (piles, wells).',
    tip: 'Shallow Foundation: D ≤ B. Deep Foundation: D > B.',
    top: 'Building Construction - Foundations'
  },
  {
    q: 'What is a "Raft Foundation" (Mat Foundation) in building construction?',
    opts: ['A continuous thick reinforced concrete slab covering the entire footprint of the building to support all columns and walls on soft, compressible soils', 'A wooden platform floating on water', 'A single concrete column footing', 'A foundation supported by rope anchors'],
    ans: 0,
    exp: 'A raft (mat) foundation covers the full building area to distribute loads uniformly and minimize differential settlement on weak, compressible soils.',
    tip: 'Raft (Mat) foundation covers the entire building footprint to prevent differential settlement on weak soils.',
    top: 'Building Construction - Foundations'
  },
  {
    q: 'According to Rankine Formula, what is the minimum depth (D_min) required for a shallow foundation in cohesionless soil?',
    opts: ['D_min = (q / γ) * [(1 - sin ϕ) / (1 + sin ϕ)]^2', 'D_min = (q / γ) * [(1 + sin ϕ) / (1 - sin ϕ)]^2', 'D_min = (q / γ) * (1 - sin ϕ)', 'D_min = (γ / q) * [(1 - sin ϕ) / (1 + sin ϕ)]^2'],
    ans: 0,
    exp: 'Rankine formula for minimum foundation depth is D_min = (q / γ) * [(1 - sin ϕ) / (1 + sin ϕ)]^2, where q is safe bearing capacity, γ is unit weight of soil, and ϕ is angle of internal friction.',
    tip: 'Rankine minimum depth: D_min = (q / γ) x [(1 - sin ϕ) / (1 + sin ϕ)]².',
    top: 'Building Construction - Foundations'
  },
  {
    q: 'What is the purpose of the horizontal Damp Proof Course (DPC) laid at plinth level in building walls?',
    opts: ['Preventing capillary rise of groundwater moisture from the foundation into the superstructure walls', 'Providing thermal insulation', 'Resisting earthquake shear forces', 'Holding window frames in place'],
    ans: 0,
    exp: 'A DPC is an impermeable horizontal membrane (cement mortar with waterproofer, rich concrete, or bitumen mastic) that stops capillary suction of ground dampness into walls.',
    tip: 'Damp Proof Course (DPC) prevents capillary rise of groundwater moisture into walls.',
    top: 'Building Construction - Foundations'
  },
  {
    q: 'Under IS 1200 rules of measurement, what unit is standardly adopted for measuring Damp Proof Course (DPC) work in building estimates?',
    opts: ['Square meter (m²)', 'Cubic meter (m³)', 'Running meter (m)', 'Kilogram (kg)'],
    ans: 0,
    exp: 'DPC is a thin sheet membrane specified by thickness (e.g. 20-25 mm); under IS 1200, its quantity is computed in surface area: Square Meters (m²).',
    tip: 'DPC is measured in SQUARE METERS (m²) under IS 1200.',
    top: 'Building Construction - Foundations'
  },

  // --- ROOFS & TRUSSES ---
  {
    q: 'In pitched timber roof construction, what is a "King Post Truss"?',
    opts: ['A triangular truss having a central vertical tension rod (King Post) connecting the ridge apex to the tie beam, suitable for spans of 5 to 8 meters', 'A flat roof support with two posts', 'A truss with steel cables only', 'A truss spanning over 30 meters'],
    ans: 0,
    exp: 'A King Post truss has a central vertical tension post (king post) supporting the horizontal tie beam, flanked by two inclined struts, suitable for spans between 5 and 8 meters.',
    tip: 'King Post Truss: ONE central vertical post (span 5 to 8 meters).',
    top: 'Building Construction - Roofs'
  },
  {
    q: 'In pitched roof construction, what is a "Queen Post Truss"?',
    opts: ['A timber truss featuring TWO vertical tension posts (Queen Posts) connected by an upper horizontal straining beam, suitable for spans of 8 to 12 meters', 'A truss with a single central post', 'A cantilever truss for balconies', 'An arch truss without horizontal beams'],
    ans: 0,
    exp: 'A Queen Post truss has two vertical tension posts (queen posts) held apart by an upper straining beam, accommodating larger spans between 8 and 12 meters.',
    tip: 'Queen Post Truss: TWO vertical posts connected by a straining beam (span 8 to 12 meters).',
    top: 'Building Construction - Roofs'
  },
  {
    q: 'What is the function of "Purlins" in pitched roof truss framing?',
    opts: ['Horizontal structural beams spanning across principal rafters of trusses to support the common rafters or corrugated roofing sheets', 'Vertical posts holding the ridge board', 'Diagonal braces under ceiling plaster', 'Gutters collecting rainwater'],
    ans: 0,
    exp: 'Purlins run horizontally between adjacent roof trusses, resting on principal rafters to carry the weight of common rafters or roof cladding sheets.',
    tip: 'Purlins are horizontal beams resting on trusses to support rafters or roof coverings.',
    top: 'Building Construction - Roofs'
  },

  // --- IRRIGATION ENGINEERING ---
  {
    q: 'In irrigation engineering, what is "Duty" (D) defined as?',
    opts: ['The area of land (in hectares) that can be fully irrigated by a continuous discharge of 1 cumec (1 m³/s) of water flowing throughout the crop base period', 'The total volume of water stored in a reservoir', 'The tax collected per hectare of farm', 'The height of water in the canal'],
    ans: 0,
    exp: 'Duty represents the irrigating capacity of water: it is the number of hectares irrigated per cumec (m³/s) of continuous flow over the base period (unit: ha/cumec).',
    tip: 'Duty D = Hectares irrigated per 1 cumec of continuous flow (ha/cumec).',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'In irrigation engineering, what is "Delta" (Δ) defined as?',
    opts: ['The total depth of water (in meters or cm) required by a crop during its entire life cycle on the field', 'The width of the irrigation canal', 'The triangular landform at the river mouth', 'The slope of the riverbed'],
    ans: 0,
    exp: 'Delta (Δ) is the total depth of water in meters needed by a crop from sowing to harvesting, supplied in successive waterings.',
    tip: 'Delta Δ = Total cumulative depth of water required by a crop (meters or cm).',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is the fundamental mathematical relationship connecting Delta (Δ in meters), Duty (D in hectares/cumec), and Base Period (B in days)?',
    opts: ['Δ = (8.64 * B) / D', 'Δ = (8.64 * D) / B', 'Δ = (B * D) / 8.64', 'Δ = 8.64 * B * D'],
    ans: 0,
    exp: '1 cumec for B days supplies 1 x 24 x 3600 x B = 86,400 B m³ of water to D hectares (D x 10,000 m²). Depth Δ = Volume / Area = 86,400 B / (10,000 D) = 8.64 B / D meters.',
    tip: 'Fundamental Irrigation Equation: Δ = (8.64 B) / D (in meters).',
    top: 'Irrigation & Highway Engineering'
  },

  // --- HIGHWAY ENGINEERING & ROADS ---
  {
    q: 'What is "Camber" (cross slope) in highway road design?',
    opts: ['The convex transverse slope provided to the road surface from the center crown down to the curbs to drain rainwater rapidly', 'The longitudinal gradient along the road length', 'The banking on horizontal curves', 'The curvature of the road berm'],
    ans: 0,
    exp: 'Camber is the transverse cross-slope provided to shed rainwater off the carriageway into side gutters, preventing surface ponding and hydroplaning.',
    tip: 'Camber = transverse cross-slope for shedding rainwater off the road surface.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'According to Indian Roads Congress (IRC) recommendations, what is the standard Camber provided for high-type Concrete or Bituminous pavements in heavy rainfall areas?',
    opts: ['1 in 50 (2.0%)', '1 in 33 (3.0%)', '1 in 20 (5.0%)', '1 in 100 (1.0%)'],
    ans: 0,
    exp: 'IRC recommends a camber of 1 in 50 (2.0%) for heavy rainfall on bituminous/concrete pavements, and 1 in 60 (1.7%) in light rainfall areas.',
    tip: 'Camber for concrete/bituminous roads: 1 in 50 (heavy rain) or 1 in 60 (light rain).',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is "Superelevation" (cant, e) on a curved road highway alignment?',
    opts: ['The inward transverse banking of the outer edge of the carriageway above the inner edge to counteract centrifugal force on vehicles negotiating horizontal curves', 'The height of the road curb', 'The slope for drainage', 'The crown of the road'],
    ans: 0,
    exp: 'Superelevation tilts the road pavement inward so that the vehicle weight component counteracts lateral centrifugal acceleration, preventing skidding or overturning.',
    tip: 'Superelevation = raising the outer edge of a curved road above the inner edge.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'According to IRC specifications for mixed traffic on Indian highways, what is the design formula for Superelevation (e) for speed V (in km/h) on a curve of radius R (in meters)?',
    opts: ['e = V^2 / (225 * R)', 'e = V^2 / (127 * R)', 'e = V^2 / (250 * R)', 'e = (225 * R) / V^2'],
    ans: 0,
    exp: 'IRC designs superelevation to fully counteract centrifugal force at 75% of design speed: e = (0.75 V)^2 / (127 R) = V^2 / (225 R).',
    tip: 'IRC Superelevation formula for mixed traffic: e = V² / (225 R).',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is the maximum permissible Superelevation (e_max) specified by IRC for plain and rolling terrain roads?',
    opts: ['7% (0.07)', '10% (0.10)', '4% (0.04)', '12% (0.12)'],
    ans: 0,
    exp: 'IRC limits maximum superelevation to 7% (0.07) in plain and rolling terrain to prevent slow-moving bullock carts or trucks from toppling inward. In snow-bound hilly areas, it is 10%.',
    tip: 'Maximum Superelevation: 7% (plain/rolling terrain); 10% (hilly terrain).',
    top: 'Irrigation & Highway Engineering'
  },

  // --- ESTIMATION & IS 1200 UNITS ---
  {
    q: 'Under Indian Standard rules of measurement (IS 1200), what is the standard unit of measurement for Earthwork Excavation in foundation trenches?',
    opts: ['Cubic meter (m³)', 'Square meter (m²)', 'Running meter (m)', 'Tonne (t)'],
    ans: 0,
    exp: 'Earthwork in excavation is a volumetric measurement computed as length x breadth x depth: Cubic Meters (m³).',
    tip: 'Earthwork excavation is measured in CUBIC METERS (m³).',
    top: 'Estimation & IS 1200'
  },
  {
    q: 'Under IS 1200 rules of measurement, what is the standard unit of measurement for Plastering and Pointing on walls?',
    opts: ['Square meter (m²)', 'Cubic meter (m³)', 'Running meter (m)', 'Square centimeter (cm²)'],
    ans: 0,
    exp: 'Surface finishing works such as plastering, pointing, painting, and white washing are measured by surface area: Square Meters (m²).',
    tip: 'Plastering, pointing, and painting are measured in SQUARE METERS (m²).',
    top: 'Estimation & IS 1200'
  },
  {
    q: 'Under IS 1200 rules of measurement, what is the standard unit of measurement for Steel Reinforcement bars used in reinforced cement concrete (RCC)?',
    opts: ['Quintal (q) or Tonne (t) or Kilogram (kg)', 'Cubic meter (m³)', 'Square meter (m²)', 'Running meter only'],
    ans: 0,
    exp: 'Steel reinforcement is calculated by weight: total length multiplied by unit weight per meter (d²/162 kg/m), recorded in Quintals, Tonnes, or Kilograms.',
    tip: 'Steel reinforcement is measured in QUINTALS (q), TONNES (t), or KILOGRAMS (kg).',
    top: 'Estimation & IS 1200'
  },
  {
    q: 'Under IS 1200 rules of measurement, what unit is adopted for measuring woodwork in door and window Frames (Chowkhats)?',
    opts: ['Cubic meter (m³)', 'Square meter (m²)', 'Running meter (m)', 'Numbers'],
    ans: 0,
    exp: 'Woodwork in door and window frame scantlings (posts and head) is computed volumetrically: length x breadth x thickness in Cubic Meters (m³). Door shutters are measured in m².',
    tip: 'Door/window Chowkhats (frames) = m³. Door shutters = m².',
    top: 'Estimation & IS 1200'
  },
  {
    q: 'Under IS 1200 rules of measurement, what unit is adopted for measuring door and window Shutters (paneled or glazed leaves)?',
    opts: ['Square meter (m²)', 'Cubic meter (m³)', 'Running meter (m)', 'Kilogram (kg)'],
    ans: 0,
    exp: 'Door and window shutters are measured in area (height x width of opening), recorded in Square Meters (m²).',
    tip: 'Door and window shutters are measured in SQUARE METERS (m²).',
    top: 'Estimation & IS 1200'
  }
];

m10Part3.forEach(q => addQ(q, 10, 'mod-10', 'Building Construction & Materials'));
console.log('Module 10 Part 3 batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
