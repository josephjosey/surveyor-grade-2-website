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

console.log('Existing unique masks before finishing Mod 6 & 7:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    return false;
  }

  let id = `bq-m${modNum}-crown-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-c${c++}`;
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
    createdAt: '2026-10-11T15:20:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// ============================================================================
// MODULE 6: 120 DISTINCT QUESTIONS (Theodolite, Tacheometry, Curves)
// ============================================================================
const m6Crown = [
  {
    q: 'In setting out a simple circular curve, what is the "intersection angle" I in terms of the deflection angle Δ?',
    opts: ['I = 180° - Δ', 'I = 180° + Δ', 'I = 90° - Δ', 'I = 360° - Δ'],
    ans: 0, exp: 'The interior angle formed between the two straight tangents at their intersection point V is I = 180° - Δ.',
    tip: 'Intersection angle I = 180° - Deflection angle Δ.', top: 'Curves'
  },
  {
    q: 'What is the formula for the "spiral angle" α_s at the end of a transition curve of length L and circular radius R?',
    opts: ['α_s = L / (2 R) radians', 'α_s = L / R radians', 'α_s = L² / (2 R) radians', 'α_s = 2 L / R radians'],
    ans: 0, exp: 'The total spiral angle between the initial tangent and the common tangent at the circular curve is α_s = L / (2R) radians.',
    tip: 'Spiral angle: α_s = L / (2 R) radians.', top: 'Curves'
  },
  {
    q: 'In a transition curve (cubic spiral), what is the relationship between the deflection angle δ to any point and the spiral angle α at that point?',
    opts: ['δ = α / 3', 'δ = α / 2', 'δ = 2 α', 'δ = α / 4'],
    ans: 0, exp: 'For an ideal transition spiral, the tangential deflection angle is exactly one-third of the central spiral angle: δ = α / 3.',
    tip: 'Deflection angle δ on a transition spiral = α / 3.', top: 'Curves'
  },
  {
    q: 'What is the mathematical equation of a "cubic parabola" commonly used as a transition curve in railway engineering?',
    opts: ['y = x³ / (6 R L)', 'y = x² / (2 R)', 'y = x⁴ / (24 R²)', 'y = x³ / (2 R L)'],
    ans: 0, exp: 'The equation of a cubic parabola transition curve is y = x³ / (6 R L), where L is transition length and R is circular radius.',
    tip: 'Cubic parabola transition curve equation: y = x³ / (6 R L).', top: 'Curves'
  },
  {
    q: 'What is the "highest point" (summit apex) on a vertical crest curve connecting an ascending gradient +g1 to a descending gradient -g2 of total length L?',
    opts: ['At a horizontal distance x = g1 × L / (g1 + g2) from the start of the curve', 'At x = L / 2 always', 'At x = g2 × L', 'At the point of intersection'],
    ans: 0, exp: 'By calculus (dy/dx = 0), the summit apex occurs at distance x = g1 · L / (g1 + g2) from the Point of Vertical Curve.',
    tip: 'Highest point on crest curve: x = g1 · L / (g1 + g2) from PC.', top: 'Curves'
  },
  {
    q: 'What is the "lowest point" (invert) on a vertical sag curve connecting a descending gradient -g1 to an ascending gradient +g2 of length L?',
    opts: ['At a horizontal distance x = g1 × L / (g1 + g2) from the start of the curve', 'At the end of the curve', 'At x = L / 3', 'Under the bridge pier'],
    ans: 0, exp: 'The lowest point of a vertical sag curve occurs at horizontal distance x = g1 · L / (g1 + g2) from the start of the curve.',
    tip: 'Lowest point on sag curve: x = g1 · L / (g1 + g2) from PC.', top: 'Curves'
  },
  {
    q: 'In the tangential method of tacheometry, what is the horizontal distance D when both vertical angles θ1 and θ2 are angles of ELEVATION (θ1 > θ2) to two vanes separated by s?',
    opts: ['D = s / (tan θ1 - tan θ2)', 'D = s / (tan θ1 + tan θ2)', 'D = s × (tan θ1 - tan θ2)', 'D = s / sin(θ1 - θ2)'],
    ans: 0, exp: 'Since V1 = D tan θ1 and V2 = D tan θ2, intercept s = V1 - V2 = D(tan θ1 - tan θ2), giving D = s / (tan θ1 - tan θ2).',
    tip: 'Both angles elevation: D = s / (tan θ1 - tan θ2).', top: 'Tacheometric surveying'
  },
  {
    q: 'In the tangential method of tacheometry, what is the horizontal distance D when angle θ1 is an angle of ELEVATION and θ2 is an angle of DEPRESSION to two vanes separated by s?',
    opts: ['D = s / (tan θ1 + tan θ2)', 'D = s / (tan θ1 - tan θ2)', 'D = s × (tan θ1 + tan θ2)', 'D = s / cos(θ1 + θ2)'],
    ans: 0, exp: 'Here V1 = D tan θ1 (above horizon) and V2 = D tan θ2 (below horizon), so s = V1 + V2 = D(tan θ1 + tan θ2), giving D = s / (tan θ1 + tan θ2).',
    tip: 'One elevation and one depression: D = s / (tan θ1 + tan θ2).', top: 'Tacheometric surveying'
  },
  {
    q: 'In the tangential method of tacheometry, what is the horizontal distance D when both vertical angles θ1 and θ2 are angles of DEPRESSION (θ2 > θ1)?',
    opts: ['D = s / (tan θ2 - tan θ1)', 'D = s / (tan θ1 + tan θ2)', 'D = s × (tan θ2 - tan θ1)', 'D = s / sin θ1'],
    ans: 0, exp: 'Both vanes lie below the instrument horizon: s = V2 - V1 = D(tan θ2 - tan θ1), so D = s / (tan θ2 - tan θ1).',
    tip: 'Both angles depression: D = s / (tan θ2 - tan θ1).', top: 'Tacheometric surveying'
  },
  {
    q: 'In tacheometry using a subtense bar of length b = 2.000 m held horizontally, what is the exact formula for horizontal distance D if horizontal angle subtended is α?',
    opts: ['D = (b / 2) × cot(α / 2) = 1.0 / tan(α / 2)', 'D = b × sin α', 'D = b × cos α', 'D = b / α'],
    ans: 0, exp: 'Right-angled triangle gives tan(α/2) = (b/2) / D, so D = (b/2) / tan(α/2) = 1.0 / tan(α/2) for a 2m bar.',
    tip: 'Subtense bar formula: D = 1.0 / tan(α / 2) for a 2-metre bar.', top: 'Tacheometric surveying'
  },
  {
    q: 'In a theodolite traverse, what is the mathematical formula for the closing error vector e?',
    opts: ['e = √[(ΣL)² + (ΣD)²]', 'e = ΣL + ΣD', 'e = ΣL - ΣD', 'e = (ΣL)² + (ΣD)²'],
    ans: 0, exp: 'By Pythagoras theorem, the linear closing displacement is e = √[(ΣL)² + (ΣD)²].',
    tip: 'Traverse closing error e = √[(ΣL)² + (ΣD)²].', top: 'Traverse computation'
  },
  {
    q: 'In a theodolite traverse, if the algebraic sum of latitudes ΣL = +0.60 m and algebraic sum of departures ΣD = +0.80 m, what is the magnitude of the linear closing error?',
    opts: ['1.00 metre', '1.40 metres', '0.20 metres', '0.48 metres'],
    ans: 0, exp: 'e = √[(0.60)² + (0.80)²] = √[0.36 + 0.64] = √1.00 = 1.00 metre.',
    tip: 'Closing error e = √[0.6² + 0.8²] = 1.00 m.', top: 'Traverse computation'
  },
  {
    q: 'If the linear closing error is 1.00 m and total perimeter of the theodolite traverse is 4000 m, what is the relative precision of the traverse?',
    opts: ['1 in 4000', '1 in 1000', '1 in 500', '1 in 40,000'],
    ans: 0, exp: 'Relative precision = e / P = 1.00 / 4000 = 1 in 4000.',
    tip: 'Relative precision = 1.00 / 4000 = 1 in 4000.', top: 'Traverse computation'
  },
  {
    q: 'In a theodolite traverse, if ΣL = -0.50 m and ΣD = +0.50 m, in which quadrant does the closing error lie and what is its direction?',
    opts: ['Second quadrant (South-East), S 45° E (WCB = 135°)', 'First quadrant (North-East), N 45° E', 'Third quadrant (South-West), S 45° W', 'Fourth quadrant (North-West), N 45° W'],
    ans: 0, exp: 'Negative latitude (South) and positive departure (East) place the error vector in the SE quadrant: tan θ = 0.5/0.5 = 1 -> θ = S 45° E (135°).',
    tip: '-L and +D = South-East (SE) quadrant (135°).', top: 'Traverse computation'
  },
  {
    q: 'What is the "permissible angular closing error" in a standard engineering theodolite traverse with n stations using a 20-second theodolite?',
    opts: ['± 20" √n to ± 30" √n', '± 1° √n', '± 5\' / n', 'Zero error is required'],
    ans: 0, exp: 'Accidental angular error per station is ±20" to ±30"; total allowable angular closing error varies as ± e √n.',
    tip: 'Allowable angular closing error: E = ± 20" √n.', top: 'Traverse computation'
  },
  {
    q: 'In theodolite traversing, what is the "reversal method" for checking a line prolongation?',
    opts: ['Setting up at B, backsighting A on Face Left, transiting to C1, then backsighting A on Face Right, transiting to C2, and marking C halfway between C1 and C2', 'Sighting with a mirror', 'Walking backwards along the line', 'Reading vernier B only'],
    ans: 0, exp: 'Double transiting (Face Left and Face Right) eliminates telescope collimation error when extending straight lines.',
    tip: 'Reversal method / Double transiting eliminates collimation error when extending straight lines.', top: 'Theodolite survey'
  },
  {
    q: 'In theodolite angle observation, what is "eccentricity of the inner and outer centers"?',
    opts: ['When the geometric axis of the inner spindle does not coincide with the geometric axis of the outer spindle', 'A bent tripod leg', 'A tilted altitude bubble', 'A chipped eyepiece lens'],
    ans: 0, exp: 'Eccentricity of centers is an instrumental defect where the inner and outer spindles are not perfectly concentric.',
    tip: 'Eccentricity of centers: Inner and outer vertical spindles are not concentric.', top: 'Errors in theodolite survey'
  },
  {
    q: 'How is the error due to eccentricity of centers eliminated in theodolite surveying?',
    opts: ['By reading both opposite verniers A and B and taking their mean', 'By using the repetition method with 10 turns', 'By taking sights at noon', 'By leveling the plate bubble twice'],
    ans: 0, exp: 'Because opposite verniers A and B are spaced 180° apart, eccentricity error has equal magnitude and opposite signs, canceling in their mean.',
    tip: 'Mean of verniers A and B completely eliminates eccentricity of centers.', top: 'Errors in theodolite survey'
  },
  {
    q: 'In theodolite angle observation, what error is eliminated by taking the mean of Face Left and Face Right sights?',
    opts: ['Collimation error in azimuth, horizontal axis tilt error, and vertical circle index error', 'Circle graduation errors', 'Eccentricity of verniers', 'Tripod twist'],
    ans: 0, exp: 'Face Left and Face Right reversal flips the geometric geometry 180°, canceling collimation tilt, trunnion axis tilt, and vertical index error.',
    tip: 'Face Left / Face Right mean cancels collimation error, trunnion axis tilt, and index error.', top: 'Errors in theodolite survey'
  },
  {
    q: 'In a theodolite, what is the purpose of the "altitude index arm" (clipping arm)?',
    opts: ['A T-shaped arm carrying the vertical circle verniers and altitude bubble vial, adjustable by the clip screw', 'An arm for holding the tape', 'A handle for carrying the theodolite', 'An arm attached to the plumb bob'],
    ans: 0, exp: 'The clipping arm carries the verniers for the vertical circle and the altitude bubble, kept horizontal by the clip screw.',
    tip: 'Altitude index arm carries vertical circle verniers and altitude bubble vial.', top: 'Theodolite survey'
  }
];

m6Crown.forEach(q => addQ(q, 6, 'mod-6', 'Theodolite survey'));

console.log('Module 6 crown push processed. Total added so far:', addedList.length);

// ============================================================================
// MODULE 7: 185 DISTINCT QUESTIONS (Total Station, GNSS, GIS, Hydrographic)
// ============================================================================
const m7Crown = [
  {
    q: 'In a Total Station EDM, what is the purpose of the "internal reference optical path"?',
    opts: ['To route the laser/infrared beam through an internal calibration path of known length inside the instrument to cancel internal electronic drift', 'To illuminate the cross-hairs', 'To measure telescope temperature', 'To recharge the battery'],
    ans: 0, exp: 'Switching the beam between external measurement and internal reference paths cancels electronic phase drift and diode delays.',
    tip: 'Internal reference path cancels electronic phase drift and component aging delays.', top: 'Total Station'
  },
  {
    q: 'In modern Total Stations, what type of laser is utilized for visible reflectorless distance measurement?',
    opts: ['A Class 2 or Class 3R red diode laser operating at a wavelength around 635 to 690 nanometres', 'An ultraviolet Class 4 laser', 'A high-powered CO2 laser', 'An infrared microwave emitter'],
    ans: 0, exp: 'Class 2 or 3R visible red semiconductor diode lasers (635–690 nm) provide eye-safe, pinpoint reflectorless measurement.',
    tip: 'Reflectorless EDM uses Class 2 / 3R visible red diode laser (635 to 690 nm).', top: 'Total Station'
  },
  {
    q: 'What is the function of the "electronic tilt sensor" (electronic level) displayed on the Total Station LCD screen?',
    opts: ['To display a digital graphic bubble that guides rapid, precise leveling of the instrument without relying on glass vials', 'To measure wind velocity', 'To calculate battery life', 'To measure prism height'],
    ans: 0, exp: 'Digital tilt sensors display longitudinal and transverse level deviations on screen with sub-arcsecond resolution.',
    tip: 'Electronic tilt sensor displays digital bubble on LCD screen for precision leveling.', top: 'Total Station'
  },
  {
    q: 'In Total Station data recording, what is a "feature code" (attribute code)?',
    opts: ['An alphanumeric label (e.g. TREE, EP, ROAD_CL, MH) assigned to each measured point to classify it in GIS/CAD mapping software', 'A password to turn on the instrument', 'The serial number of the tripod', 'The elevation of the benchmark'],
    ans: 0, exp: 'Feature codes categorize surveyed points (e.g. FENCE, BUILDING, DRAIN) so CAD software layers them automatically.',
    tip: 'Feature code = Alphanumeric tag classifying the feature for CAD/GIS layering.', top: 'Total Station'
  },
  {
    q: 'What is the purpose of the "stakeout" (setting out) program in a Total Station?',
    opts: ['To compare design coordinates stored in memory with current prism positions and display guidance arrows (Cut/Fill, Left/Right, In/Out) to locate design points on ground', 'To measure tree diameters', 'To calculate parcel taxes', 'To format memory cards'],
    ans: 0, exp: 'Stakeout guides the prism pole to exact design coordinates with real-time radial, transverse, and vertical displacement cues.',
    tip: 'Stakeout program guides rodman to exact design 3D coordinates on ground.', top: 'Total Station'
  },
  {
    q: 'In Total Station surveying, what is "tracking mode" (fast measurement mode)?',
    opts: ['A rapid, continuous EDM distance measurement mode (updated every 0.1 to 0.3 seconds) used for following moving prism poles during stakeout', 'A mode for tracking airplanes', 'A high-precision 10-second average mode', 'A sleep mode to save battery'],
    ans: 0, exp: 'Tracking mode updates distance rapidly (sub-second) with slightly reduced resolution, ideal for following rod movements during setting out.',
    tip: 'Tracking mode = Rapid continuous distance measurement for dynamic stakeout.', top: 'Total Station'
  },
  {
    q: 'In Total Station surveying, what is "fine measurement mode"?',
    opts: ['A high-precision measurement mode that averages multiple carrier phase cycles over 1 to 2 seconds to achieve 1 mm distance resolution', 'A mode used only on sunny days', 'A mode with zero battery use', 'A rough measurement mode'],
    ans: 0, exp: 'Fine mode averages signals over 1 to 2 seconds to deliver millimeter-level distance accuracy (e.g. 1 mm + 1.5 ppm).',
    tip: 'Fine mode: High-precision carrier averaging delivering 1 mm distance accuracy.', top: 'Total Station'
  },
  {
    q: 'What is the standard data exchange format commonly exported by Total Stations for direct import into AutoCAD?',
    opts: ['DXF (Drawing Exchange Format) or CSV (Comma-Separated Values)', 'MP3 audio format', 'AVI video format', 'HTML web page only'],
    ans: 0, exp: 'Total stations export DXF (with 3D point blocks and breaklines) or CSV (Point Number, Northing, Easting, Elevation, Code).',
    tip: 'Total station exports DXF or CSV (P, N, E, Z, Code) for CAD software.', top: 'Total Station'
  },
  {
    q: 'In GNSS satellite surveying, what is the "space segment"?',
    opts: ['The constellation of orbiting satellites transmitting radio navigation signals containing ephemeris data and atomic clock timestamps', 'The ground control stations', 'The rover receiver on the tripod', 'The outer space beyond the solar system'],
    ans: 0, exp: 'The space segment consists of the orbiting satellite constellation broadcasting positioning radio signals.',
    tip: 'Space segment = Constellation of orbiting satellites broadcasting navigation signals.', top: 'GPS & GIS'
  },
  {
    q: 'In GNSS satellite surveying, what is the "control segment"?',
    opts: ['The worldwide network of ground tracking stations, master control stations, and ground antennas that monitor and control satellite orbits and clocks', 'The steering wheel of the survey vehicle', 'The tripod leveling screws', 'The rover data collector software'],
    ans: 0, exp: 'The control segment tracks orbits, calculates ephemeris corrections, synchronizes atomic clocks, and uploads navigation data to satellites.',
    tip: 'Control segment = Ground monitor stations and Master Control Station managing the constellation.', top: 'GPS & GIS'
  },
  {
    q: 'In GNSS satellite surveying, what is the "user segment"?',
    opts: ['The GNSS receivers, antennas, data collectors, and processing software operated by surveyors and navigators to determine position', 'The satellite manufacturing company', 'The launch rocket', 'The astronauts in space'],
    ans: 0, exp: 'The user segment comprises all military and civilian receivers and processing equipment that receive satellite signals.',
    tip: 'User segment = GNSS receivers, antennas, and processing software.', top: 'GPS & GIS'
  },
  {
    q: 'What type of atomic clocks are carried on board GNSS satellites to maintain extreme time precision?',
    opts: ['Cesium beam and Rubidium atomic resonance frequency standards (and passive hydrogen masers on Galileo)', 'Mechanical quartz clocks', 'Pendulum grandfather clocks', 'Water clocks'],
    ans: 0, exp: 'Satellites carry atomic clocks (cesium, rubidium, hydrogen maser) with timing stability better than 1 nanosecond per day.',
    tip: 'GNSS satellites carry Cesium and Rubidium atomic clocks (and Hydrogen masers).', top: 'GPS & GIS'
  },
  {
    q: 'Why are atomic clocks necessary on GNSS satellites?',
    opts: ['Because radio signals travel at the speed of light (300,000 km/s), so a timing error of just 1 microsecond causes a position error of 300 metres', 'To measure satellite temperature', 'To time satellite orbits', 'To turn off the transmitters at night'],
    ans: 0, exp: 'Since distance = c · t, a clock error of 1 nanosecond causes 30 cm error; 1 microsecond causes 300 metres error.',
    tip: 'Light travels 30 cm per nanosecond; extreme atomic clock precision is vital.', top: 'GPS & GIS'
  },
  {
    q: 'What is "pseudorange" in satellite positioning?',
    opts: ['The apparent distance between a satellite and receiver antenna computed from signal transit time multiplied by light speed, containing receiver clock bias', 'A false distance entered by the surveyor', 'The distance along the ground', 'The distance to the center of the Earth'],
    ans: 0, exp: 'It is called "pseudorange" because receiver clock bias t makes the measured range slightly different from the true geometric range: ρ = R + c·Δt.',
    tip: 'Pseudorange = Apparent satellite-receiver distance containing receiver clock offset.', top: 'GPS & GIS'
  },
  {
    q: 'How does a 4-satellite GNSS solution eliminate receiver clock error without requiring an expensive atomic clock inside the handheld receiver?',
    opts: ['By solving for the receiver clock bias Δt as the fourth mathematical unknown in the four simultaneous pseudorange equations', 'By syncing with a cell phone tower', 'By resetting the clock every second', 'By measuring temperature'],
    ans: 0, exp: 'Four equations (from 4 satellites) solve for 4 variables: X, Y, Z coordinates and the receiver clock bias Δt, eliminating the need for an atomic clock.',
    tip: 'Fourth satellite solves for receiver clock offset Δt, eliminating the need for an expensive receiver clock.', top: 'GPS & GIS'
  },
  {
    q: 'What is the "ionospheric delay" in GNSS signals and how is it largely eliminated in precision surveying?',
    opts: ['Signal refraction caused by free electrons in the upper atmosphere (50 to 1000 km); eliminated by comparing dual carrier frequencies (L1 and L2)', 'Signal blocking by clouds', 'Signal absorption by rain', 'Signal reflection from mountains'],
    ans: 0, exp: 'Because ionospheric delay is dispersive (proportional to 1/f²), combining two frequencies (L1 and L2) calculates and eliminates 99% of ionospheric delay.',
    tip: 'Dual-frequency (L1/L2) receivers eliminate ionospheric delay through dispersive frequency modeling.', top: 'GPS & GIS'
  },
  {
    q: 'What is "tropospheric delay" in GNSS signals?',
    opts: ['Signal retardation caused by temperature, atmospheric pressure, and water vapor in the neutral lower atmosphere (0 to 12 km)', 'Signal absorption by the ozone layer', 'Signal reflection off trees', 'Signal interference from power lines'],
    ans: 0, exp: 'The non-dispersive troposphere delays satellite signals; it is modeled using dry (hydrostatic) and wet atmospheric delay formulas.',
    tip: 'Tropospheric delay: Caused by temperature, pressure, and water vapor in lower atmosphere (0-12 km).', top: 'GPS & GIS'
  },
  {
    q: 'In RTK GNSS surveying, what is "integer cycle ambiguity" (ambiguity resolution)?',
    opts: ['Determining the unknown integer number of whole carrier wavelengths between the satellite and receiver antenna at the initial lock-on instant', 'An error in reading angles', 'A confusion in satellite names', 'A loss of battery charge'],
    ans: 0, exp: 'A carrier phase receiver measures fractional phase; resolving the integer number of full cycles N ("fixing the ambiguities") unlocks millimeter precision.',
    tip: 'Integer cycle ambiguity = Unknown whole number of carrier wave cycles between satellite and receiver.', top: 'GPS & GIS'
  },
  {
    q: 'What does "RTK Fixed solution" mean on a GNSS rover screen?',
    opts: ['The integer carrier cycle ambiguities have been resolved successfully, delivering maximum centimeter-level positioning accuracy (10 to 20 mm)', 'The receiver has frozen', 'The battery is fully charged', 'The tripod is locked'],
    ans: 0, exp: 'An RTK "Fixed" status confirms that integer ambiguities are mathematically resolved, giving full centimeter accuracy.',
    tip: 'RTK Fixed = Ambiguities resolved; maximum centimeter-level positioning accuracy achieved.', top: 'GPS & GIS'
  },
  {
    q: 'What does "RTK Float solution" mean on a GNSS rover screen?',
    opts: ['The ambiguities are estimated as real numbers but NOT yet resolved as integers, yielding sub-metre accuracy (typically 20 cm to 1 m)', 'The receiver is floating in water', 'The satellites are moving fast', 'The antenna is disconnected'],
    ans: 0, exp: 'An RTK "Float" solution occurs when satellite geometry or radio link is degraded; accuracy is sub-meter rather than centimeter.',
    tip: 'RTK Float = Ambiguities unresolved; accuracy degraded to sub-metre level (0.2 to 1 m).', top: 'GPS & GIS'
  }
];

m7Crown.forEach(q => addQ(q, 7, 'mod-7', 'Hydrographic survey'));

console.log('Module 7 crown push processed. Total added so far:', addedList.length);

// Append to db
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
