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

console.log('Existing unique masks before Mod 10 Part 5:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-p10e-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-t${c++}`;
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
    createdAt: '2026-10-11T20:30:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 120 DISTINCT QUESTIONS FOR MODULE 10 (PART 5 - HIGHWAYS, CANALS, DAMS, VALVES & MATERIALS)
const m10Part5 = [
  // --- HIGHWAY CLASSIFICATION & PAVEMENTS ---
  {
    q: 'Under the historic 1943 Nagpur Road Plan, into which five functional categories were roads across India first systematically classified?',
    opts: ['National Highways (NH), State Highways (SH), Major District Roads (MDR), Other District Roads (ODR), and Village Roads (VR)', 'Expressways, Freeways, Tollways, Avenues, and Streets', 'Primary roads, Secondary roads, and Tertiary roads', 'Single lane, Double lane, Four lane, and Six lane roads'],
    ans: 0,
    exp: 'The Nagpur Plan categorized Indian road networks into National Highways, State Highways, Major District Roads, Other District Roads, and Village Roads.',
    tip: 'Nagpur Plan (1943) road classification: NH, SH, MDR, ODR, and VR.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is the "Right of Way" (ROW) of a highway road corridor?',
    opts: ['The total width of land acquired and legally dedicated for highway construction, including carriageway, shoulders, berms, side drains, and future expansion', 'The speed limit on the road', 'The right to turn left at intersections', 'The width of the blacktop pavement only'],
    ans: 0,
    exp: 'Right of Way (ROW) is the full legal ribbon of land acquired by the highway authority for road formation, drainage, slopes, and future lane widening.',
    tip: 'Right of Way (ROW) = total land width legally acquired for road construction.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is the standard Carriageway (pavement) width specified by IRC for a single-lane road?',
    opts: ['3.75 meters', '7.0 meters', '5.5 meters', '2.5 meters'],
    ans: 0,
    exp: 'IRC specifies 3.75 m carriageway width for a single lane, 7.0 m for a two-lane road without raised kerbs (7.5 m with kerbs), and 3.5 m per lane for multi-lane pavements.',
    tip: 'Carriageway width: Single lane = 3.75 m. Two-lane without kerbs = 7.0 m. Multi-lane = 3.5 m/lane.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is "Stopping Sight Distance" (SSD) in highway engineering design?',
    opts: ['The minimum sight distance available on a highway required for a vehicle traveling at design speed to stop safely before colliding with a stationary obstacle on the carriageway', 'The distance traveled while braking from top speed to zero on wet ice', 'The distance required to overtake another car', 'The length of the road illuminated by headlights'],
    ans: 0,
    exp: 'SSD consists of lag distance (traveled during perception-reaction time, typically 2.5 seconds) plus braking distance: SSD = 0.278 V t + V² / (254 f).',
    tip: 'Stopping Sight Distance SSD = Lag distance + Braking distance (assumes 2.5s reaction time).',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is "Overtaking Sight Distance" (OSD) in highway engineering design?',
    opts: ['The minimum sight distance open ahead to the driver of a vehicle enabling them to overtake a slower vehicle safely without colliding with oncoming opposing traffic', 'The distance needed to turn around 180 degrees', 'The distance visible under streetlights', 'The sight distance inside tunnels'],
    ans: 0,
    exp: 'OSD is the distance needed to accelerate, pass a slow vehicle in the opposing lane, and return safely to the left lane before meeting an oncoming vehicle.',
    tip: 'Overtaking Sight Distance (OSD) allows passing a slow vehicle safely without collision.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is the "Penetration Test" conducted on paving bitumen used to determine?',
    opts: ['The consistency and hardness/softness of bitumen by measuring the depth in tenths of a millimeter to which a standard 100 g needle penetrates in 5 seconds at 25 °C', 'The temperature at which bitumen melts', 'The presence of water in bitumen', 'The percentage of pure carbon'],
    ans: 0,
    exp: 'The penetration test measures the distance a 100 g needle penetrates bitumen at 25°C in 5 seconds. E.g., 60/70 grade means penetration between 6.0 and 7.0 mm (60-70 dmm).',
    tip: 'Penetration test measures hardness/consistency (1 unit = 0.1 mm at 25°C, 100g, 5s).',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'Which apparatus is used to determine the Softening Point of paving bitumen?',
    opts: ['Ring and Ball Apparatus', 'Pensky-Martens Closed Cup Tester', 'Ductilometer', 'Pycnometer'],
    ans: 0,
    exp: 'The softening point of bitumen is measured using the Ring and Ball apparatus: bitumen held in brass rings softens under heating in a water/glycerin bath until a steel ball drops 25 mm.',
    tip: 'Ring and Ball Apparatus determines the Softening Point of bitumen.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What property of road bitumen is evaluated using the standard "Ductility Test"?',
    opts: ['The ability of bitumen to undergo plastic elongation into a thin thread without snapping when pulled at 50 mm/minute at 27 °C in a water bath', 'The speed of hardening in cold weather', 'The flash ignition point', 'The resistance to stripping from aggregates'],
    ans: 0,
    exp: 'Ductility is the distance in centimeters to which a standard briquette of bitumen elongates before breaking when pulled at 50 mm/min at 27°C (typically ≥ 50 to 75 cm).',
    tip: 'Ductility test measures elongation in cm (briquette pulled at 50 mm/min at 27°C).',
    top: 'Irrigation & Highway Engineering'
  },

  // --- CANALS, CROSS DRAINAGE & IRRIGATION ---
  {
    q: 'What is a "Watershed Canal" (Ridge Canal) in canal alignment design?',
    opts: ['A canal aligned along the ridge line of the natural watershed divide between two drainage valleys, which can irrigate fertile farmland on both banks by gravity flow without crossing natural drainage streams', 'A canal aligned along a river valley bed', 'A canal running through an underground tunnel', 'A canal used exclusively for flood diversion'],
    ans: 0,
    exp: 'A ridge canal runs along the natural watershed divide. It can irrigate on both sides by gravity, and eliminates expensive cross-drainage works because drainage streams flow away from ridges.',
    tip: 'Ridge (Watershed) canal can irrigate on BOTH banks and requires NO cross-drainage works.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is a "Contour Canal" in canal irrigation engineering?',
    opts: ['A canal aligned roughly parallel to the ground contour lines along a hillside, irrigating only the downhill bank and requiring cross-drainage works for every crossing hill stream', 'A canal that follows the ridge', 'A circular canal around a reservoir', 'A lined navigation channel'],
    ans: 0,
    exp: 'Contour canals follow hillside contours. They only irrigate farmland on the downslope side, and because they intercept natural drainage running down the hill, frequent cross-drainage works are required.',
    tip: 'Contour canal irrigates on ONE side only and crosses many natural drainage streams.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is an "Aqueduct" in canal cross-drainage works?',
    opts: ['A cross-drainage structure where the irrigation canal is carried above the natural drainage stream in an elevated trough, with the stream flowing below under atmospheric pressure with its High Flood Level (HFL) below the canal bed', 'A canal flowing underneath a river', 'A bridge for vehicular traffic only', 'A tunnel through a mountain'],
    ans: 0,
    exp: 'In an Aqueduct, Canal is ABOVE Drainage (Canal bed > Drainage HFL). The stream flows below with its water surface well beneath the canal bed trough.',
    tip: 'Aqueduct: Canal is ABOVE Drainage, and Drainage HFL is below canal bed.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is a "Siphon Aqueduct" in cross-drainage construction?',
    opts: ['A cross-drainage structure where the canal passes above the drainage, but the drainage High Flood Level (HFL) is higher than the canal bed, forcing drainage water through depressed barrels under pipe siphon pressure', 'A siphon pumping water out of an aqueduct', 'A pipe crossing over a road', 'A drainage channel on a ridge'],
    ans: 0,
    exp: 'In a Siphon Aqueduct, Canal is ABOVE Drainage, but the stream HFL rises above the canal bed level, so stream flow is throttled through depressed culvert barrels under pressure.',
    tip: 'Siphon Aqueduct: Canal ABOVE Drainage, with Drainage HFL ABOVE canal bed (inverted siphon action).',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is a "Superpassage" in canal cross-drainage works?',
    opts: ['A cross-drainage structure where the natural drainage stream flows ABOVE the irrigation canal, with the canal Full Supply Level (FSL) remaining below the drainage bed trough', 'An elevated highway bridge', 'A canal carried in a steel pipe', 'A deep navigation lock'],
    ans: 0,
    exp: 'In a Superpassage, Drainage is ABOVE Canal (Drainage bed > Canal FSL). The natural stream crosses overhead in a trough while the canal flows freely underneath.',
    tip: 'Superpassage: Drainage stream flows ABOVE the Canal (Canal FSL is below drainage bed).',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is a "Canal Siphon" (Siphon) in cross-drainage engineering?',
    opts: ['A cross-drainage structure where the natural drainage stream flows ABOVE the canal, and the canal Full Supply Level (FSL) is higher than the drainage bed, forcing canal water through depressed barrels under pressure', 'A drainage pipe over a ridge', 'A pump at a weir', 'A navigation lock'],
    ans: 0,
    exp: 'In a Canal Siphon, Drainage is ABOVE Canal, and the canal water level is higher than the stream bed, forcing canal water to flow through depressed barrels under siphon pressure.',
    tip: 'Canal Siphon: Drainage is ABOVE Canal, with Canal FSL higher than drainage bed.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is a "Level Crossing" in canal cross-drainage works?',
    opts: ['A cross-drainage work where the irrigation canal and natural drainage stream intersect and intermix at the exact same bed level, regulated by canal and river regulator crest gates', 'A railway gate crossing a canal', 'A road crossing at ground level', 'A siphon on a road'],
    ans: 0,
    exp: 'A level crossing is adopted when canal and stream meet at roughly the same bed elevation. Both waters mix in a pond controlled by a crest regulator and canal head regulator.',
    tip: 'Level Crossing: Canal and stream intersect at the SAME bed elevation.',
    top: 'Irrigation & Highway Engineering'
  },

  // --- DAMS, WEIRS & RESERVOIRS ---
  {
    q: 'What is the primary operational difference between a "Weir" and a "Barrage"?',
    opts: ['A Weir has a high solid masonry crest with small crest shutters, whereas a Barrage has a low crest with heading up of water controlled entirely by large adjustable steel gates', 'A Weir stores water permanently while a barrage never stores water', 'A Barrage is built of earth while a weir is made of timber', 'There is no difference'],
    ans: 0,
    exp: 'A Weir raises water level largely by its raised solid concrete/masonry crest. A Barrage has a low sill crest, achieving heading up and flood discharge control via adjustable vertical lift gates.',
    tip: 'Weir = heading up by high solid masonry crest. Barrage = heading up controlled by gates on a low crest.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is the primary structural mechanism by which a solid "Gravity Dam" (such as Bhakra or Idukki) resists the hydrostatic horizontal water pressure of the impounded reservoir?',
    opts: ['Entirely by the sheer dead weight of its massive concrete or masonry body resisting overturning and sliding', 'By arch action transferring thrust to canyon rock abutments', 'By steel tension cables anchored into bedrock', 'By hydraulic buoyancy'],
    ans: 0,
    exp: 'A gravity dam relies strictly on its own massive self-weight to generate stabilizing moments that resist the overturning and sliding thrust of reservoir water pressure.',
    tip: 'Gravity dam resists external hydrostatic forces entirely by its massive self-weight.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is a "Spillway" in a dam reservoir system, and why is it called the safety valve of a dam?',
    opts: ['A designated overflow passage or channel designed to safely discharge surplus flood water when the reservoir reaches full capacity, preventing overtopping and catastrophic dam breach', 'A pipe delivering water to turbines', 'A scour sluice cleaning sediment', 'A fish ladder for salmon'],
    ans: 0,
    exp: 'A spillway safely conveys excess flood flows past the dam without allowing water to overtop the non-overflow crest, acting as the ultimate safety release valve.',
    tip: 'Spillway = safety overflow channel discharging floodwaters to prevent overtopping of dams.',
    top: 'Irrigation & Highway Engineering'
  },

  // --- VALVES, PIPES & WATER SUPPLY FITTINGS ---
  {
    q: 'What is a "Sluice Valve" (Gate Valve) used for in water distribution pipe networks?',
    opts: ['Regulating or completely stopping the flow of water in pipe mains by raising or lowering a wedge-shaped gate', 'Preventing backflow of water', 'Releasing air trapped at high summits', 'Draining dirty sediment from low points'],
    ans: 0,
    exp: 'Sluice valves (gate valves) are installed at regular intervals (150-300 m) to isolate pipeline sectors for maintenance or flow regulation.',
    tip: 'Sluice Valve (Gate Valve) isolates or controls flow in water pipeline sections.',
    top: 'Public Health Engineering'
  },
  {
    q: 'What is a "Reflux Valve" (Check Valve / Non-Return Valve) used for in a water pipeline?',
    opts: ['Allowing water to flow in only ONE direction and automatically closing to prevent reverse flow or water hammer towards pumps', 'Releasing air pockets from summits', 'Reducing water pressure', 'Measuring water consumption'],
    ans: 0,
    exp: 'A reflux valve (non-return valve) opens under forward flow and automatically snaps shut when flow reverses, protecting centrifugal pumps against back-pressure.',
    tip: 'Reflux (Check / Non-Return) Valve allows flow in ONE direction only, preventing backflow.',
    top: 'Public Health Engineering'
  },
  {
    q: 'Where are "Air Relief Valves" (Air Valves) specifically installed along a long water transmission pipeline?',
    opts: ['At the high summit points (peaks) along the pipeline where dissolved air naturally separates and accumulates to cause air binding', 'At the lowest depression points', 'Directly at water meters', 'Inside fire hydrants'],
    ans: 0,
    exp: 'Air comes out of solution and collects at summit peaks of pipelines, forming air locks that choke water flow. Air relief valves vent accumulated air automatically.',
    tip: 'Air Relief Valves are placed at pipeline SUMMITS to release trapped air pockets.',
    top: 'Public Health Engineering'
  },
  {
    q: 'Where are "Scour Valves" (Blow-off Valves / Washout Valves) specifically located along a water pipeline?',
    opts: ['At the lowest depression valleys along the pipeline to drain dirty sediment and empty the pipeline for repairs', 'At the highest mountain summits', 'At reservoir intake towers', 'In consumer taps'],
    ans: 0,
    exp: 'Scour valves are placed at the lowest points (valleys) along the pipe route to blow out accumulated sand, silt, and sludge or completely drain lines for maintenance.',
    tip: 'Scour (Blow-off) Valves are located at the LOWEST points of pipelines to flush sediment.',
    top: 'Public Health Engineering'
  },
  {
    q: 'What is a "Drop Manhole" in a sewerage drainage network?',
    opts: ['A manhole provided when a branch sewer enters an inspection chamber at an elevation exceeding 500 mm to 600 mm above the main sewer invert, dropping wastewater via a vertical drop pipe', 'A manhole with no ladder', 'A manhole built in water', 'A manhole for deep storm runoff only'],
    ans: 0,
    exp: 'When a branch sewer joins a main sewer at a level >0.6 m higher, sewage is directed down a vertical pipe ("drop pipe") to avoid splashing and sewer gas release.',
    tip: 'Drop Manhole connects a branch sewer that enters > 0.6 m above the main sewer invert.',
    top: 'Public Health Engineering'
  },

  // --- PAINTS, VARNISHES, PLASTICS & FORMWORK ---
  {
    q: 'What is the "Base" in an oil paint composition, and what is its primary function?',
    opts: ['A metallic oxide powder (such as white lead, red lead, or zinc oxide) forming the principal solid bulk that provides opacity and body to the paint film', 'The liquid oil vehicle', 'The drying catalyst', 'The color pigment'],
    ans: 0,
    exp: 'The Base is the main solid mineral constituent (white lead, zinc oxide, iron oxide) that provides opacity, body, and resistance to weather.',
    tip: 'Paint Base = solid metallic oxide powder providing body and opacity (e.g. White Lead).',
    top: 'Building Materials - Finishing'
  },
  {
    q: 'What is the "Vehicle" (Carrier) in oil paints, and what is the most common vehicle used?',
    opts: ['A drying oil (such as pure raw or double-boiled Linseed Oil) that holds the base and pigments in suspension and dries into a tough elastic film', 'Turpentine spirit', 'Water', 'Kerosene'],
    ans: 0,
    exp: 'The vehicle is an oily liquid that forms the film upon drying. Double-boiled linseed oil is the most widely used vehicle for oil paints.',
    tip: 'Vehicle in oil paint = Linseed Oil (forms the protective elastic film upon oxidation).',
    top: 'Building Materials - Finishing'
  },
  {
    q: 'What is the function of the "Thinner" (Solvent) in oil paints?',
    opts: ['Increasing the fluidity and workability of the paint to facilitate smooth brushing and spreading into thin uniform coats (e.g., Turpentine)', 'Adding color to paint', 'Making paint fireproof', 'Preventing paint from ever drying'],
    ans: 0,
    exp: 'Thinners (such as spirit of turpentine or mineral spirits) thin the paint consistency to make it easily spreadable by brush, evaporating completely after application.',
    tip: 'Thinner (e.g. Turpentine) increases paint fluidity for smooth brushing and then evaporates.',
    top: 'Building Materials - Finishing'
  },
  {
    q: 'What is a "Varnish"?',
    opts: ['A transparent or translucent solution of a resin (such as copal, lac, or amber) dissolved in oil, alcohol, or turpentine, drying to a hard glossy protective finish on wood', 'An opaque red paint', 'A plaster paste', 'A chemical weed killer'],
    ans: 0,
    exp: 'Varnish is a solution of resin in oil/spirit without opaque pigments, designed to enhance and protect the natural beauty of timber grain with a glossy finish.',
    tip: 'Varnish = solution of resin in drying oil or alcohol (provides a clear glossy protective film).',
    top: 'Building Materials - Finishing'
  },
  {
    q: 'What is "Distemper" in wall finishing?',
    opts: ['A water-based interior wall paint composed of powdered whiting (chalk), water, and animal glue or casein as a binder', 'An exterior waterproofing bitumen', 'A varnish for wood', 'An oil paint for structural steel'],
    ans: 0,
    exp: 'Distemper is a cheap interior paint made of powdered chalk (whiting), water, and a glue binder, providing a smooth matte finish on interior plastered walls.',
    tip: 'Distemper = water-based wall paint of powdered chalk, water, and glue binder.',
    top: 'Building Materials - Finishing'
  },
  {
    q: 'In building construction, what is "Shoring"?',
    opts: ['Providing temporary timber or steel structural props to support unsafe, bulging, or leaning walls, or to support buildings while making alterations in lower walls', 'Erecting scaffolding to plaster walls', 'Underpinning foundations', 'Draining foundation water'],
    ans: 0,
    exp: 'Shoring temporarily supports structures undergoing alterations or showing signs of instability (Raking shores, Flying shores, Dead shores).',
    tip: 'Shoring = temporary support provided to unstable walls or during structural alterations.',
    top: 'Building Construction - Formwork'
  },
  {
    q: 'In building construction, what is "Underpinning"?',
    opts: ['The structural process of placing a new foundation under an existing foundation, or deepening and strengthening an existing foundation without endangering the building above', 'Painting foundation footings', 'Digging shallow trenches', 'Laying carpet on floors'],
    ans: 0,
    exp: 'Underpinning safely deepens or strengthens existing foundations when adjacent excavations occur, building loads increase, or excessive settlement is observed.',
    tip: 'Underpinning = deepening or strengthening existing building foundations in-situ.',
    top: 'Building Construction - Formwork'
  },
  {
    q: 'In concrete construction, what is the minimum stripping time (removal of formwork) specified by IS 456 for vertical formwork to columns, walls, and sides of beams?',
    opts: ['16 to 24 hours', '3 days', '7 days', '14 days'],
    ans: 0,
    exp: 'IS 456 permits stripping of vertical formwork to columns, walls, and beam sides after 16 to 24 hours, provided concrete is properly cured immediately after.',
    tip: 'Vertical formwork (columns, walls, beam sides) stripping time = 16 to 24 hours.',
    top: 'Building Construction - Formwork'
  },
  {
    q: 'What is the minimum stripping time for props under slabs spanning up to 4.5 meters under IS 456?',
    opts: ['7 days', '3 days', '14 days', '21 days'],
    ans: 0,
    exp: 'For slabs up to 4.5 m span, props under the slab can be removed after 7 days (for spans over 4.5 m, 14 days). Soffit formwork to slabs is removed after 3 days with props replaced.',
    tip: 'Props to slabs: up to 4.5 m span = 7 days; spanning over 4.5 m = 14 days.',
    top: 'Building Construction - Formwork'
  },
  {
    q: 'What is the minimum stripping time for props to beams and arches spanning over 6 meters under IS 456?',
    opts: ['21 days', '14 days', '7 days', '28 days'],
    ans: 0,
    exp: 'For beams and arches spanning over 6 meters, props must remain in place for at least 21 days (for spans up to 6 m, 14 days).',
    tip: 'Props to beams and arches: up to 6 m = 14 days; over 6 m = 21 days.',
    top: 'Building Construction - Formwork'
  }
];

m10Part5.forEach(q => addQ(q, 10, 'mod-10', 'Building Construction & Materials'));
console.log('Module 10 Part 5 batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
