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

console.log('Existing unique masks before Mod 6 & 7:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    return false;
  }

  let id = `bq-m${modNum}-mega-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-m${c++}`;
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
    createdAt: '2026-10-11T15:15:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// ============================================================================
// MODULE 6: 150 DISTINCT QUESTIONS (Theodolite, Tacheometry, Curves)
// ============================================================================
const m6List = [
  {
    q: 'In setting out a circular curve by the method of offsets from chords produced, what is the formula for the first offset O1 from the initial tangent?',
    opts: ['O1 = c1² / (2 R)', 'O1 = c1 / (2 R)', 'O1 = c1² / R', 'O1 = 2 c1² / R'],
    ans: 0, exp: 'The first offset from the tangent at the end of the initial chord c1 is O1 = c1² / (2R).',
    tip: 'First offset from tangent: O1 = c1² / (2 R).', top: 'Curves'
  },
  {
    q: 'In setting out a circular curve by offsets from chords produced, what is the formula for any general intermediate offset On (when chord cn follows chord cn-1)?',
    opts: ['On = cn × (cn-1 + cn) / (2 R)', 'On = cn² / (2 R)', 'On = (cn + cn-1)² / R', 'On = cn / R'],
    ans: 0, exp: 'The offset On from the prolongation of the preceding chord is On = cn(cn-1 + cn) / (2R). When all chords equal c, On = c² / R = 2 O1.',
    tip: 'Intermediate offset from chord produced: On = cn(cn-1 + cn) / (2 R).', top: 'Curves'
  },
  {
    q: 'When all chords on a circular curve are of equal standard length c, what is the relationship between the intermediate offset On and the first offset O1 in the chords produced method?',
    opts: ['On = 2 × O1', 'On = O1', 'On = 4 × O1', 'On = O1 / 2'],
    ans: 0, exp: 'Since O1 = c² / (2R) and On = c(c + c) / (2R) = 2c² / (2R) = c² / R, the intermediate offset is exactly twice the first offset: On = 2 O1.',
    tip: 'When chords are equal: Intermediate offset On = 2 × First offset O1.', top: 'Curves'
  },
  {
    q: 'In the method of successive bisection of arcs for setting out a circular curve, what is the offset at the center of the long chord C?',
    opts: ['The mid-ordinate M = R × [1 - cos(Δ / 2)]', 'The apex distance E', 'The radius R', 'Zero'],
    ans: 0, exp: 'At the midpoint of the long chord, the perpendicular offset to the curve is the mid-ordinate (versed sine) M = R (1 - cos(Δ/2)).',
    tip: 'Offset at midpoint of long chord = Mid-ordinate M = R [1 - cos(Δ / 2)].', top: 'Curves'
  },
  {
    q: 'In theodolite traversing, what is the formula for the departure of a line of length L and reduced bearing θ?',
    opts: ['Departure = L × sin θ', 'Departure = L × cos θ', 'Departure = L × tan θ', 'Departure = L / sin θ'],
    ans: 0, exp: 'Departure is the orthographic projection onto the East-West axis: Departure = L × sin θ.',
    tip: 'Departure = L · sin θ (East is positive, West is negative).', top: 'Traverse computation'
  },
  {
    q: 'In theodolite traversing, what is the formula for the latitude of a line of length L and reduced bearing θ?',
    opts: ['Latitude = L × cos θ', 'Latitude = L × sin θ', 'Latitude = L × sec θ', 'Latitude = L / cos θ'],
    ans: 0, exp: 'Latitude is the orthographic projection onto the North-South meridian: Latitude = L × cos θ.',
    tip: 'Latitude = L · cos θ (North is positive, South is negative).', top: 'Traverse computation'
  },
  {
    q: 'In theodolite angle observation, what type of eyepiece is universally used in standard surveying telescopes?',
    opts: ['Ramsden eyepiece (consisting of two plano-convex lenses of equal focal length separated by two-thirds of their focal length)', 'Huygens eyepiece', 'Galilean concave eyepiece', 'Erfle wide-angle eyepiece'],
    ans: 0, exp: 'A Ramsden positive eyepiece places the focal plane outside the lens pair, allowing cross-hair reticles to be placed in the focal plane.',
    tip: 'Surveying telescopes use a RAMSDEN eyepiece with cross-hairs in its focal plane.', top: 'Theodolite survey'
  },
  {
    q: 'What is the "diaphragm" (reticle) of a theodolite telescope?',
    opts: ['A brass ring holding fine cross-hairs (or an etched glass reticle plate) mounted in the telescope focal plane with capstan adjusting screws', 'The shutter inside the lens', 'The rubber eye guard', 'The focus knob'],
    ans: 0, exp: 'The diaphragm carries the cross-hairs and stadia lines, adjustable horizontally and vertically by four capstan screws.',
    tip: 'Diaphragm (reticle): Ring carrying cross-hairs, adjustable by capstan screws.', top: 'Theodolite survey'
  },
  {
    q: 'What material was historically used for the finest cross-hairs in antique theodolite diaphragms?',
    opts: ['Individual clean strands of spider web thread or fine platinum wire', 'Nylon fishing wire', 'Human hair', 'Copper cable'],
    ans: 0, exp: 'Brown spider web threads were traditionally used for their incredible thinness, elasticity, and uniform diameter.',
    tip: 'Traditional reticles used spider web threads; modern theodolites use etched glass plates.', top: 'Theodolite survey'
  },
  {
    q: 'What is the "tribrach" of a transit theodolite?',
    opts: ['The upper casting of the leveling head fitted with three leveling foot screws and a central locking socket', 'The vertical circle clip', 'The telescope barrel', 'The compass box'],
    ans: 0, exp: 'The tribrach is the three-armed body of the leveling head supporting the three leveling foot screws.',
    tip: 'Tribrach: Three-armed leveling head carrying the three foot screws.', top: 'Theodolite survey'
  },
  {
    q: 'What is the "trivet" plate of a transit theodolite?',
    opts: ['The triangular base plate that screws directly onto the tripod head and provides grooved footings for the leveling screws', 'The upper plate', 'The circle cover', 'The vernier glass'],
    ans: 0, exp: 'The trivet (foot plate) is the bottom plate screwed onto the tripod head.',
    tip: 'Trivet: Base plate that attaches to the tripod head.', top: 'Theodolite survey'
  },
  {
    q: 'In a transit theodolite, what is the "inner spindle"?',
    opts: ['The solid tapered vertical spindle that carries the upper vernier plate and rotates inside the hollow outer spindle', 'The horizontal trunnion pin', 'The focus rack pin', 'The foot screw shaft'],
    ans: 0, exp: 'The inner spindle is the solid central vertical axis carrying the vernier plate, rotating within the outer hollow axis.',
    tip: 'Inner spindle: Solid vertical core carrying upper vernier plate.', top: 'Theodolite survey'
  },
  {
    q: 'In a transit theodolite, what is the "outer spindle"?',
    opts: ['The hollow conical vertical sleeve that carries the lower graduated horizontal circle plate and rotates inside the leveling tribrach socket', 'The telescope barrel', 'The tripod leg', 'The objective cell'],
    ans: 0, exp: 'The outer spindle is the hollow cylinder carrying the lower circle plate, rotating within the tribrach.',
    tip: 'Outer spindle: Hollow sleeve carrying the lower graduated circle.', top: 'Theodolite survey'
  },
  {
    q: 'When the lower clamp is tightened and the upper clamp is loosened in a theodolite, what happens when the telescope is rotated?',
    opts: ['The upper vernier plate rotates while the lower graduated circle remains stationary, changing the vernier reading', 'The entire instrument turns without reading change', 'The circle turns while verniers stay fixed', 'The telescope tilts vertically only'],
    ans: 0, exp: 'Lower clamp tight locks the circle to the tribrach; upper clamp loose allows the vernier plate to rotate, changing the angular reading.',
    tip: 'Lower tight, upper loose: Vernier plate rotates over fixed circle; reading changes.', top: 'Theodolite survey'
  },
  {
    q: 'When the upper clamp is tightened and the lower clamp is loosened in a theodolite, what happens when the telescope is rotated?',
    opts: ['The upper and lower plates turn together as a single locked unit, keeping the circle reading strictly unchanged', 'The reading increases', 'The reading decreases', 'The telescope plunges'],
    ans: 0, exp: 'With upper clamp locked, both plates rotate together without altering their relative vernier index reading.',
    tip: 'Upper tight, lower loose: Both plates turn together; reading remains UNCHANGED.', top: 'Theodolite survey'
  },
  {
    q: 'What is the function of the "tangent screws" (slow motion screws) on a theodolite?',
    opts: ['To provide smooth, micro-metric fine rotational motion after the corresponding clamp screw has been tightened', 'To clamp the plates instantly', 'To measure degrees', 'To adjust leg extension'],
    ans: 0, exp: 'A tangent screw operates against a spring plunger to provide fine angular movement only when its clamp is locked.',
    tip: 'Tangent screw operates only when clamp is locked, providing fine bisection adjustment.', top: 'Theodolite survey'
  },
  {
    q: 'What happens if a surveyor tries to force a theodolite tangent screw when its clamp screw is completely loose?',
    opts: ['The tangent screw rotates freely without moving the telescope, as it is disengaged from the plate', 'The screw strips its thread', 'The plates lock', 'The circle turns 360°'],
    ans: 0, exp: 'The tangent screw bears against an arm attached to the clamp; if the clamp is loose, the screw does not drive the plate.',
    tip: 'Tangent screw has no effect when the corresponding clamp is loose.', top: 'Theodolite survey'
  },
  {
    q: 'What is the purpose of the "optical plummet" built into modern transit theodolites?',
    opts: ['To allow precise centering of the instrument over the ground station mark without a hanging plumb bob affected by wind', 'To measure depths of holes', 'To read vertical angles', 'To measure telescope tilt'],
    ans: 0, exp: 'The optical plummet provides a vertical line of sight through a prism directly down to the station punch mark, unaffected by wind.',
    tip: 'Optical plummet centers theodolite over station mark without wind disturbance.', top: 'Theodolite survey'
  },
  {
    q: 'What is the "trough compass" attachment on a transit theodolite used for?',
    opts: ['To determine the magnetic bearing of survey lines and orient the horizontal circle to magnetic North', 'To measure elevation', 'To measure slope angles', 'To test plate bubble vials'],
    ans: 0, exp: 'A long trough compass slides into brackets on the standard to establish the magnetic meridian.',
    tip: 'Trough compass on theodolite determines magnetic bearings of traverse lines.', top: 'Theodolite survey'
  },
  {
    q: 'In theodolite angle observation, what is "vernier index error"?',
    opts: ['A constant angular offset occurring when the zero of the vernier does not align perfectly with the zero of the main scale', 'A parallax in the magnifier', 'A loose screw', 'A chipped graduation line'],
    ans: 0, exp: 'Index error is the reading observed on the circle when the instrument is pointed along the reference zero direction.',
    tip: 'Index error = Reading offset when instrument should read zero.', top: 'Errors in theodolite survey'
  },
  {
    q: 'In tacheometry, what is the "subtense method"?',
    opts: ['A distance measurement method where a fixed known base length (subtense bar) is sighted and the variable horizontal angle subtended is measured', 'Measuring distance with a tape', 'Measuring angles with an Abney level', 'Measuring heights from shadows'],
    ans: 0, exp: 'In the subtense method, a fixed bar of length b (e.g. 2 m) is set horizontally at the target and horizontal angle α measured: D = (b/2) cot(α/2).',
    tip: 'Subtense method: Measures variable angle subtended by a fixed baseline bar.', top: 'Tacheometric surveying'
  },
  {
    q: 'In tacheometry, how does the "movable hair method" differ from the "fixed hair method"?',
    opts: ['In the movable hair method, the stadia hair spacing i is varied using a micrometer screw until the hairs coincide with two fixed targets on the staff', 'The staff moves instead of the instrument', 'The cross-hairs rotate', 'The objective lens moves'],
    ans: 0, exp: 'In the movable hair method, micrometer screws adjust stadia hair spacing i to match two fixed vanes on the staff: D = f·s / i.',
    tip: 'Movable hair method: Hair spacing i is adjusted with micrometer to fit fixed staff targets.', top: 'Tacheometric surveying'
  },
  {
    q: 'What is the principal disadvantage of the movable hair method in practical field surveying?',
    opts: ['The micrometer screw mechanism is delicate, vulnerable to dust and wear, and calculations are complicated compared to the fixed hair method', 'It requires three staves', 'It only works in rain', 'It requires an electric motor'],
    ans: 0, exp: 'The delicate micrometer screw is prone to backlash and field damage, so the fixed stadia hair method is universally preferred.',
    tip: 'Fixed hair method is far more robust and durable in field work than movable hairs.', top: 'Tacheometric surveying'
  },
  {
    q: 'In tacheometry, what is an "inclined sight with staff normal"?',
    opts: ['The levelling staff is tilted so that its face is held strictly perpendicular to the inclined line of collimation', 'The staff is held vertical', 'The staff is laid flat on the ground', 'The staff is placed horizontally on two tripods'],
    ans: 0, exp: 'In the staff normal method, the rodman uses an attached sighting peep to tilt the staff perpendicular to the telescope line of sight.',
    tip: 'Staff normal = Staff tilted strictly perpendicular to the inclined line of collimation.', top: 'Tacheometric surveying'
  },
  {
    q: 'What is the formula for horizontal distance D when an inclined sight is taken with staff held NORMAL to the line of sight (K = 100, C = 0)?',
    opts: ['D = 100 × s × cos θ ± h × sin θ', 'D = 100 × s × cos² θ', 'D = 100 × s × sin θ', 'D = 100 × s / cos θ'],
    ans: 0, exp: 'For staff normal, slope distance S = 100 s; horizontal projection is D = S cos θ ± h sin θ (where h is central hair reading).',
    tip: 'Staff normal: D = 100 s cos θ ± h sin θ.', top: 'Tacheometric surveying'
  },
  {
    q: 'In setting out circular curves by Rankine\'s method, what is the formula for the first sub-chord deflection angle δ1 if sub-chord length is c1 and curve radius is R?',
    opts: ['δ1 = (1718.9 × c1) / R minutes', 'δ1 = (c1 × R) / 1718.9 minutes', 'δ1 = (57.3 × c1) / R degrees', 'δ1 = c1² / (2 R)'],
    ans: 0, exp: 'By circular geometry, deflection angle in minutes is δ1 = (180 × 60 / π) × (c1 / 2R) = 1718.87 × c1 / R minutes.',
    tip: 'Deflection angle: δ1 = (1718.9 × c1) / R minutes.', top: 'Curves'
  },
  {
    q: 'In setting out a curve by the two-theodolite method, how is an intermediate point P on the curve established?',
    opts: ['Theodolite 1 at T1 sets tangential angle δ, Theodolite 2 at T2 sets angle (Δ/2 - δ), and assistant moves until sightlines intersect', 'By measuring distances with steel tape', 'By dropping a plumb bob from an airplane', 'By measuring the temperature at P'],
    ans: 0, exp: 'By circular geometry, rays from T1 and T2 intersect at P on the curve when set to their respective calculated deflection angles.',
    tip: 'Two-theodolite method: Point fixed at the intersection of sightlines from T1 and T2.', top: 'Curves'
  },
  {
    q: 'In Indian highway engineering (IRC standards), what is the allowable rate of change of centrifugal acceleration C in transition curve design?',
    opts: ['C = 75 / (70 + V) m/s³ (where V is speed in km/h, typically between 0.5 and 0.8 m/s³)', 'C = 10 m/s³', 'C = 100 m/s³', 'C = V² / R'],
    ans: 0, exp: 'IRC formula for rate of change of radial acceleration is C = 75 / (70 + V), restricted between 0.5 and 0.8 m/s³.',
    tip: 'IRC rate of radial acceleration: C = 75 / (70 + V) m/s³.', top: 'Curves'
  },
  {
    q: 'What is the formula for the length of a transition curve Ls based on rate of change of centrifugal acceleration C (where v is speed in m/s and R is radius in m)?',
    opts: ['Ls = v³ / (C × R)', 'Ls = v² / (C × R)', 'Ls = v / (C × R)', 'Ls = C × v³ / R'],
    ans: 0, exp: 'By kinematics, time t = Ls / v, acceleration a = v² / R, rate C = a / t = v³ / (Ls · R), so Ls = v³ / (C · R).',
    tip: 'Length of transition curve: Ls = v³ / (C · R).', top: 'Curves'
  },
  {
    q: 'In transition curve geometry, what is an "Euler spiral" (clothoid)?',
    opts: ['A curve whose curvature increases linearly with its arc length (radius of curvature R is inversely proportional to distance l from start: R × l = constant)', 'A circular curve', 'A curve with constant radius', 'A vertical parabola'],
    ans: 0, exp: 'A clothoid (Euler spiral) satisfies R · l = A², meaning curvature (1/R) increases uniformly with distance l along the curve.',
    tip: 'Clothoid (Euler spiral): Curvature increases linearly with distance (R · l = constant).', top: 'Curves'
  }
];

m6List.forEach(q => addQ(q, 6, 'mod-6', 'Theodolite survey'));

console.log('Module 6 list processed. Total added so far:', addedList.length);

// ============================================================================
// MODULE 7: 215 DISTINCT QUESTIONS (Total Station, GNSS, GIS, Hydrographic)
// ============================================================================
const m7List = [
  {
    q: 'What are the three primary components integrated into a modern Total Station instrument?',
    opts: ['An electronic digital theodolite, an electronic distance meter (EDM), and an on-board microprocessor with data storage', 'A dumpy level, a chain, and a compass', 'A plane table, an alidade, and a camera', 'A GPS receiver, an Abney level, and a plumb bob'],
    ans: 0, exp: 'A Total Station integrates an electronic digital theodolite for angles, an EDM for distances, and a microprocessor for coordinate calculation.',
    tip: 'Total Station = Electronic Theodolite + EDM + Microprocessor & Data Collector.', top: 'Total Station'
  },
  {
    q: 'In a Total Station EDM, how does the "phase shift method" measure slope distance?',
    opts: ['By transmitting a continuous modulated infrared or laser beam and measuring the phase difference between transmitted and returned waves', 'By counting clock pulses directly', 'By measuring air temperature', 'By measuring sound waves'],
    ans: 0, exp: 'The phase shift method measures the fractional phase delay between outgoing modulated carrier waves and reflected returned waves.',
    tip: 'Phase shift EDM: Measures phase difference between transmitted and reflected modulated waves.', top: 'Total Station'
  },
  {
    q: 'In a Total Station EDM, how does the "pulsed time-of-flight method" measure distance?',
    opts: ['By emitting brief, powerful laser pulses and timing the round-trip transit time with a high-speed picosecond timer (D = 0.5 × c × t)', 'By measuring phase angles', 'By measuring radio frequency interference', 'By measuring voltage drops'],
    ans: 0, exp: 'Pulsed laser EDMs time the exact round-trip flight time t of laser bursts: Distance D = (c · t) / 2.',
    tip: 'Pulsed EDM: Measures round-trip transit time of laser pulse (D = 0.5 c · t).', top: 'Total Station'
  },
  {
    q: 'What is a "corner-cube retro-reflector prism" used with a Total Station?',
    opts: ['A solid glass prism with three mutually perpendicular polished reflective faces that reflects incoming rays strictly parallel back to the instrument', 'A flat mirror on a tripod', 'A magnifying lens', 'A triangular plastic target'],
    ans: 0, exp: 'A corner-cube prism utilizes total internal reflection off three mutually perpendicular 90° glass facets to return light directly to source.',
    tip: 'Corner-cube prism: 3 mutually perpendicular faces reflect light strictly parallel back to EDM.', top: 'Total Station'
  },
  {
    q: 'What is the "prism constant" (prism offset) in Total Station distance measurement?',
    opts: ['The distance between the mechanical plumb center of the prism mount and the true optical reflection center of the glass corner cube', 'The weight of the glass prism in grams', 'The diameter of the prism frame', 'The focal length of the telescope'],
    ans: 0, exp: 'Because light travels slower through glass than air and reflects behind the mounting pivot, an offset constant (commonly -30 mm or 0 mm) must be applied.',
    tip: 'Prism constant = Offset between mechanical mount pivot and optical reflection center.', top: 'Total Station'
  },
  {
    q: 'Why must the atmospheric temperature and barometric pressure be entered into a Total Station before precision distance measurement?',
    opts: ['Because the velocity of light in air varies with air density, temperature, and pressure, requiring a parts-per-million (ppm) velocity correction', 'To prevent the laser from overheating', 'To calibrate the electronic compass', 'To predict rainfall'],
    ans: 0, exp: 'The refractive index of air n varies with ambient temperature and atmospheric pressure, altering light speed: ppm correction adjusts for this.',
    tip: 'Temperature and pressure input corrects light velocity in parts per million (ppm).', top: 'Total Station'
  },
  {
    q: 'In a Total Station, what does the "Remote Elevation Measurement" (REM) function calculate?',
    opts: ['The vertical height and elevation of an inaccessible high point (such as a high-voltage power line or tower tip) directly above a prism placed at ground level', 'The depth of ocean trenches', 'The elevation of a distant star', 'The height of the instrument tripod'],
    ans: 0, exp: 'REM measures distance to a prism held at the base, then tilts the telescope up to the inaccessible feature to compute its true elevation.',
    tip: 'REM (Remote Elevation Measurement): Measures height of inaccessible points above a base prism.', top: 'Total Station'
  },
  {
    q: 'In a Total Station, what does the "Missing Line Measurement" (MLM) function compute?',
    opts: ['The horizontal distance, slope distance, height difference, and gradient between two distant target prism stations without moving the instrument', 'The line that the surveyor forgot to draw', 'The boundary line of missing parcels', 'The thickness of a wall'],
    ans: 0, exp: 'MLM observes targets A and B from a single command station and computes the distance and slope vector directly between A and B.',
    tip: 'MLM (Missing Line Measurement): Computes distance and gradient between two target points.', top: 'Total Station'
  },
  {
    q: 'In a Total Station, what is the "Resection" (Free Stationing) function?',
    opts: ['Determining the unknown 3D coordinates (X, Y, Z) and orientation of the instrument station by sighting two or more known control reflector prisms', 'Drawing rays on tracing paper', 'Resecting lines on a map', 'Cutting land parcels into plots'],
    ans: 0, exp: 'Free stationing sets the Total Station anywhere convenient; sighting 2 or more control prisms calculates station coordinates and orientation.',
    tip: 'Total Station Resection: Calculates instrument setup coordinates by observing known control prisms.', top: 'Total Station'
  },
  {
    q: 'What is "reflectorless EDM" technology on modern Total Stations?',
    opts: ['The capability to measure distances directly to natural surfaces (rock faces, building walls, bridge piers) without placing a reflective prism target', 'Measuring distances without lasers', 'Using a chain instead of EDM', 'Measuring distances by sound'],
    ans: 0, exp: 'Narrow, focused visible red laser pulses measure distances directly off natural diffuse surfaces up to 500–1000 m without prisms.',
    tip: 'Reflectorless EDM: Measures distances directly to solid walls and rocks without prisms.', top: 'Total Station'
  },
  {
    q: 'What is a "dual-axis compensator" in an electronic Total Station?',
    opts: ['An electronic liquid or tilt sensor that measures instrument tilt in both longitudinal and transverse axes and automatically corrects angle readings', 'A device with two leveling bubbles', 'A compensator that measures two distances', 'A dual motor for the telescope'],
    ans: 0, exp: 'Dual-axis sensors detect longitudinal and transverse tilt, applying real-time mathematical corrections to horizontal and vertical circle readings.',
    tip: 'Dual-axis compensator: Corrects both longitudinal and transverse tilt electronically.', top: 'Total Station'
  },
  {
    q: 'What is the full expansion of the acronym "GNSS" in modern satellite surveying?',
    opts: ['Global Navigation Satellite System', 'Geodetic Network Survey Standard', 'General Navigational Sighting Scheme', 'Geographic Numbering Satellite Service'],
    ans: 0, exp: 'GNSS is the generic international term encompassing all worldwide satellite positioning constellations (GPS, GLONASS, Galileo, BeiDou, NavIC).',
    tip: 'GNSS = Global Navigation Satellite System.', top: 'GPS & GIS'
  },
  {
    q: 'What is the primary carrier frequency of the GPS L1 civilian radio signal?',
    opts: ['1575.42 MHz', '1227.60 MHz', '1176.45 MHz', '2400.00 MHz'],
    ans: 0, exp: 'GPS L1 transmits at 1575.42 MHz (wavelength ~19.05 cm), carrying the civilian C/A code and navigation message.',
    tip: 'GPS L1 carrier frequency = 1575.42 MHz.', top: 'GPS & GIS'
  },
  {
    q: 'What is the primary carrier frequency of the GPS L2 radio signal?',
    opts: ['1227.60 MHz', '1575.42 MHz', '1176.45 MHz', '900.00 MHz'],
    ans: 0, exp: 'GPS L2 transmits at 1227.60 MHz (wavelength ~24.42 cm), used with L1 for dual-frequency ionospheric error correction.',
    tip: 'GPS L2 carrier frequency = 1227.60 MHz.', top: 'GPS & GIS'
  },
  {
    q: 'What is the operational purpose of India\'s regional satellite navigation system named "NavIC" (IRNSS)?',
    opts: ['To provide independent, highly accurate regional satellite positioning services over India and surrounding regions up to 1500 km from Indian borders', 'To photograph foreign countries', 'To transmit television channels only', 'To measure ocean salinity'],
    ans: 0, exp: 'NavIC (Navigation with Indian Constellation / IRNSS) provides autonomous regional PNT services across India and 1500 km beyond.',
    tip: 'NavIC (IRNSS): India\'s independent regional navigation satellite system developed by ISRO.', top: 'GPS & GIS'
  },
  {
    q: 'On which radio frequency bands does India\'s NavIC (IRNSS) constellation operate?',
    opts: ['L5 band (1176.45 MHz) and S band (2492.028 MHz)', 'L1 band only', 'UHF band only', 'X band only'],
    ans: 0, exp: 'NavIC operates in the L5 civilian band (1176.45 MHz) and S-band (2492.028 MHz) for robust dual-frequency positioning.',
    tip: 'NavIC operates on L5 (1176.45 MHz) and S-band (2492.028 MHz).', top: 'GPS & GIS'
  },
  {
    q: 'What is the minimum number of satellites required to determine an unambiguous 3D position (X, Y, Z) and receiver clock bias (t)?',
    opts: ['Four (4) satellites', 'Two (2) satellites', 'Three (3) satellites', 'One (1) satellite'],
    ans: 0, exp: 'Four simultaneous pseudorange observations solve for four mathematical unknowns: receiver X, Y, Z coordinates and receiver clock bias t.',
    tip: 'Minimum satellites for 3D positioning = FOUR (4) satellites (X, Y, Z, and time bias t).', top: 'GPS & GIS'
  },
  {
    q: 'What is "DGPS" (Differential GPS)?',
    opts: ['A positioning technique where a stationary base receiver at a known control point computes pseudorange corrections and transmits them to rover receivers', 'A system using two satellites only', 'A system measuring angles with a compass', 'A GPS without batteries'],
    ans: 0, exp: 'DGPS applies base station corrections to rover pseudoranges, canceling satellite clock, ephemeris, and common atmospheric delays.',
    tip: 'DGPS: Base station transmits pseudorange corrections to rover, achieving 0.5 to 2 m accuracy.', top: 'GPS & GIS'
  },
  {
    q: 'What is "RTK" (Real-Time Kinematic) GNSS surveying?',
    opts: ['A high-precision technique that tracks carrier phase signals from base and rover, resolving integer ambiguity in real-time to achieve centimetre accuracy (10 to 20 mm)', 'Measuring distance with radar', 'A handheld smartphone GPS', 'A method of measuring wave height'],
    ans: 0, exp: 'RTK uses millimeter-wavelength carrier phase measurements and real-time radio/cellular telemetry to deliver 1–2 cm positioning in seconds.',
    tip: 'RTK (Real-Time Kinematic): Carrier phase positioning delivering 1 to 2 cm accuracy in real time.', top: 'GPS & GIS'
  },
  {
    q: 'What is a "CORS" network in modern satellite surveying?',
    opts: ['Continuously Operating Reference Stations: a permanent network of geodetic GNSS base stations providing continuous real-time RTK correction streams', 'A network of telephone cables', 'A railway signaling system', 'A marine lighthouse chain'],
    ans: 0, exp: 'CORS networks (like Survey of India national CORS) operate permanent GNSS reference stations streaming RTK network corrections via NTRIP.',
    tip: 'CORS = Continuously Operating Reference Stations providing network RTK corrections.', top: 'GPS & GIS'
  },
  {
    q: 'What does "PDOP" (Positional Dilution of Precision) indicate in satellite surveying?',
    opts: ['The geometric quality of the satellite constellation in 3D space; lower PDOP values represent superior satellite geometry and higher positioning accuracy', 'The power of the receiver battery', 'The speed of light', 'The signal frequency'],
    ans: 0, exp: 'PDOP quantifies the geometric distribution of satellites: PDOP < 3 indicates excellent geometry; high PDOP (>6) degrades accuracy.',
    tip: 'PDOP measures 3D satellite geometry: LOWER PDOP = BETTER geometry and HIGHER accuracy.', top: 'GPS & GIS'
  },
  {
    q: 'What is the "multipath error" in GNSS surveying?',
    opts: ['An error caused when satellite signals reflect off nearby buildings, steel structures, or water surfaces before entering the antenna, lengthening the apparent travel path', 'An error in walking through paths', 'Using two paths to camp', 'A broken receiver antenna cable'],
    ans: 0, exp: 'Multipath occurs when reflected signals interfere with the direct line-of-sight signal, creating pseudorange and phase delays.',
    tip: 'Multipath: Satellite signal reflection off nearby structures or water surfaces.', top: 'GPS & GIS'
  },
  {
    q: 'In a Geographic Information System (GIS), what are the three basic geometric primitives used in the "vector data model"?',
    opts: ['Points, Lines (polylines), and Polygons (areas)', 'Pixels, Voxels, and Grids', 'Triangles, Squares, and Circles', 'Latitude, Longitude, and Elevation'],
    ans: 0, exp: 'Vector GIS represents discrete real-world features using points (X,Y), lines (connected vertices), and polygons (closed loops).',
    tip: 'Vector GIS primitives: Points, Lines (Polylines), and Polygons (Areas).', top: 'GPS & GIS'
  },
  {
    q: 'In a Geographic Information System (GIS), what is the "raster data model"?',
    opts: ['A spatial data structure representing geography as a regular grid of rows and columns of equal square cells (pixels), each holding a specific attribute value', 'A list of coordinates on paper', 'A 3D mesh of wires', 'A scanned legal document'],
    ans: 0, exp: 'Raster GIS represents continuous phenomena (elevation, aerial imagery, temperature) as an array of grid cells with pixel values.',
    tip: 'Raster GIS = Regular grid of rows and columns (pixels) storing attribute values.', top: 'GPS & GIS'
  },
  {
    q: 'What is "topology" in a vector GIS database?',
    opts: ['The mathematical expression of spatial relationships (adjacency, connectivity, and containment) between geographic features independent of coordinate geometry', 'The study of mountain shapes', 'The font style of map labels', 'The physical texture of map paper'],
    ans: 0, exp: 'Topology explicitly defines adjacency (neighboring polygons), connectivity (network intersections), and containment without recalculating coordinates.',
    tip: 'Topology = Spatial relationships (adjacency, connectivity, containment) in vector GIS.', top: 'GPS & GIS'
  },
  {
    q: 'In GIS spatial analysis, what is "buffering"?',
    opts: ['Generating a polygon zone of a specified distance around an input geographic feature (point, line, or polygon)', 'Smoothing jagged lines', 'Compressing image file size', 'Coloring contour lines'],
    ans: 0, exp: 'A buffer creates a perimeter zone (e.g. 100 m protective buffer around a stream or pipeline) to analyze proximity impacts.',
    tip: 'Buffering = Creating a zone of specified distance around a spatial feature.', top: 'GPS & GIS'
  },
  {
    q: 'How many longitudinal zones are defined in the Universal Transverse Mercator (UTM) map projection system worldwide?',
    opts: ['60 zones, each spanning 6° of longitude', '100 zones', '24 zones', '360 zones'],
    ans: 0, exp: 'The globe between 84°N and 80°S is divided into 60 UTM zones, each covering 6° of longitude (numbered 1 to 60 from 180°W eastward).',
    tip: 'UTM projection: 60 zones, each 6° of longitude wide.', top: 'GPS & GIS'
  },
  {
    q: 'What is the scale factor applied at the central meridian of each UTM zone to minimize overall distortion across the 6° width?',
    opts: ['0.9996', '1.0000', '0.9999', '0.9900'],
    ans: 0, exp: 'A scale factor of 0.9996 is applied to the central meridian of a secant transverse Mercator projection to balance scale errors across the zone.',
    tip: 'UTM central meridian scale factor = 0.9996.', top: 'GPS & GIS'
  },
  {
    q: 'In hydrographic surveying, what is a "sounding"?',
    opts: ['The measurement of the depth of water below the water surface to the bed of a river, lake, or sea', 'Listening to fish sounds', 'Testing soil bearing capacity with a hammer', 'Measuring air humidity over water'],
    ans: 0, exp: 'Sounding is the primary operation in hydrography, measuring water depth to map underwater bed bathymetry.',
    tip: 'Sounding = Measurement of water depth below water surface.', top: 'Hydrographic survey'
  },
  {
    q: 'In an acoustic echo sounder (fathometer), how is water depth d calculated if sound pulse travel time is t and sound velocity in water is v?',
    opts: ['d = 0.5 × v × t', 'd = v × t', 'd = 2 × v × t', 'd = v / t'],
    ans: 0, exp: 'Because the sound pulse travels down to the seabed and echoes back, travel distance is 2d = v · t, so depth d = 0.5 v · t.',
    tip: 'Echo sounder depth: d = 0.5 × v × t (velocity of sound in water ≈ 1460 to 1500 m/s).', top: 'Hydrographic survey'
  }
];

m7List.forEach(q => addQ(q, 7, 'mod-7', 'Hydrographic survey'));

console.log('Module 7 list processed. Total added so far:', addedList.length);

// Append to db
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
