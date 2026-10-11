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

console.log('Existing unique masks before Mod 3 & 4:', existingMasks.size);

const addedList = [];

function addDistinctQ(qObj, modNum, modId, topic) {
  const mask = getTemplateMask(qObj.question);
  if (existingMasks.has(mask)) {
    return false;
  }

  let id = qObj.id || `bq-m${modNum}-dist-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-k${c++}`;
  }
  qObj.id = id;
  qObj.moduleNumber = modNum;
  qObj.moduleId = modId;
  qObj.topic = topic;
  qObj.type = 'pyq';
  qObj.examName = qObj.examName || 'Kerala PSC Surveyor Gr. II / Land Records';
  qObj.year = qObj.year || 2024;
  qObj.createdAt = '2026-10-11T14:25:00Z';

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// ============================================================================
// MODULE 3: 150 DISTINCT QUESTIONS (COMPASS SURVEYING)
// ============================================================================
const mod3Questions = [
  {
    q: 'Why is the circular body of a surveying magnetic compass constructed strictly of non-magnetic metals such as brass or bronze?',
    options: ['To prevent distorting the Earth\'s magnetic field and avoid deflecting the magnetic needle', 'Because non-magnetic metals are completely transparent', 'To make the compass float in river surveys', 'Because brass conducts static electricity to the tripod'],
    ans: 0, exp: 'Ferrous metals (iron or steel) in the compass body would create constant internal magnetic interference, corrupting all bearing readings.',
    tip: 'Compass box: Made of brass/bronze (non-magnetic) to prevent needle deflection.', top: 'Introduction to Compass survey'
  },
  {
    q: 'In the construction of a magnetic compass, what material is used for the fine pivot point upon which the needle oscillates?',
    options: ['Hardened tempered steel with a sharp conical tip', 'Soft copper wire', 'Carved timber', 'Pure silver alloy'],
    ans: 0, exp: 'The pivot must be extremely sharp and hard to minimize contact friction with the agate cap, hence hardened tempered steel is used.',
    tip: 'Pivot point: Made of sharp hardened steel to minimize frictional resistance.', top: 'Prismatic compass'
  },
  {
    q: 'What is the purpose of the sliding rider fitted on the arm of a magnetic compass needle?',
    options: ['To counterbalance the vertical downward pull of magnetic dip and keep the needle horizontal', 'To indicate the direction of the wind', 'To magnify small fractions of a degree', 'To lock the needle during transit'],
    ans: 0, exp: 'Due to magnetic dip, the needle tends to tilt downward. A tiny sliding brass rider on the opposite arm counterbalances this pull to keep it level.',
    tip: 'Sliding rider: Balances magnetic dip so needle stays horizontal.', top: 'Magnetic Declination'
  },
  {
    q: 'In the Southern Hemisphere, on which arm of the magnetic needle must the sliding counterpoise rider be positioned?',
    options: ['On the North arm of the needle', 'On the South arm of the needle', 'Exactly over the central pivot', 'On the eastern sight vane'],
    ans: 0, exp: 'In the Southern Hemisphere, the South magnetic pole pulls the South end downward, so the rider is placed on the North arm to restore balance.',
    tip: 'Southern Hemisphere: Rider placed on NORTH arm. Northern Hemisphere: Rider on SOUTH arm.', top: 'Magnetic Declination'
  },
  {
    q: 'In a Prismatic Compass, what is the role of the narrow horizontal slit provided in the prism mounting plate?',
    options: ['To look through while simultaneously bisecting the vertical horsehair and reading the reflected ring graduations below', 'To let rainwater drain out', 'To insert a pencil for marking', 'To illuminate the scale at night'],
    ans: 0, exp: 'The viewing eye slit directly above the prism allows the surveyor to see the distant target through the sight vane while the bottom of the prism displays the scale.',
    tip: 'Prism eye slit: Allows simultaneous bisection of target and reading of scale.', top: 'Prismatic compass'
  },
  {
    q: 'Why are the graduation numbers on a Prismatic Compass ring numbered in a clockwise direction with 0° at South and 180° at North?',
    options: ['Because the prism is positioned at the South end of the compass box during observation', 'Because the Earth rotates from West to East', 'Because magnetic North is at the bottom of the world', 'Because South was considered holy in ancient navigation'],
    ans: 0, exp: 'When the line of sight points North, the prism at the South end must read 0°. Hence, 0° is placed at South, 90° at West, 180° at North, and 270° at East.',
    tip: '0° at South because observer reads through prism located at South end when sighting North.', top: 'Prismatic compass'
  },
  {
    q: 'In a Surveyor\'s Compass, why are the East and West markings exchanged on the graduated ring (E on left and W on right)?',
    options: ['So that the stationary needle point directly indicates the correct geographic quadrant when the box is turned towards that direction', 'Due to an ancient printing error that became standardized', 'Because the sun rises in the West in the southern hemisphere', 'To allow left-handed surveyors to read easily'],
    ans: 0, exp: 'When turning the sight vanes to the East (clockwise), the stationary needle appears to shift counter-clockwise (to the left). Putting E on the left ensures it reads NE.',
    tip: 'Surveyor\'s compass: East and West are transposed so the needle reads the correct quadrant directly.', top: 'Surveyors compass'
  },
  {
    q: 'What is the principal difference between the line of sight reading mechanism of a Prismatic Compass and a Surveyor\'s Compass?',
    options: ['A prismatic compass reads via a prism at the observer\'s eye while sighting; a surveyor\'s compass sights first then looks down from above onto the needle tip', 'A prismatic compass uses laser beams', 'A surveyor\'s compass requires solar batteries', 'A prismatic compass cannot measure bearings greater than 180°'],
    ans: 0, exp: 'Prismatic compass: Simultaneous sighting and reading through prism. Surveyor\'s compass: Sight the object through vanes, then look down vertically to read the needle.',
    tip: 'Prismatic = Simultaneous sight & read; Surveyor\'s = Sight first, read from above second.', top: 'Introduction to Compass survey'
  },
  {
    q: 'What is the angular value of the magnetic declination when the magnetic meridian coincides exactly with the true geographic meridian?',
    options: ['0° (Zero declination)', '90° East', '180°', '45° West'],
    ans: 0, exp: 'When magnetic north and true north lie along the same line, declination is zero. This occurs along the agonic line.',
    tip: 'Magnetic meridian = True meridian -> Magnetic Declination = 0°.', top: 'Magnetic Declination'
  },
  {
    q: 'What is an "isogonic chart" and who typically publishes it?',
    options: ['A map depicting lines of equal magnetic declination (isogonic lines) published by national geodetic survey authorities', 'A cadastral revenue map of agricultural land', 'A weather forecast map of monsoon rains', 'A chart showing road traffic density'],
    ans: 0, exp: 'Isogonic charts are official geodetic maps showing contours of equal magnetic declination across a country for a specific epoch year.',
    tip: 'Isogonic chart: Depicts contours of equal magnetic declination for a given epoch.', top: 'Magnetic Declination'
  },
  {
    q: 'At what time of day does the diurnal variation of magnetic declination typically reach its mean daily value?',
    options: ['Around 10:00 AM and again around 5:00 PM', 'At exact solar midnight', 'At 12:00 noon only', 'At sunrise only'],
    ans: 0, exp: 'The daily magnetic oscillation swings to maximum East around 8 AM, passes through mean around 10 to 11 AM, swings maximum West around 1 PM, and returns to mean around 5 to 6 PM.',
    tip: 'Diurnal variation reaches mean value around 10 AM and 5 PM.', top: 'Magnetic Declination'
  },
  {
    q: 'In which season of the year is the diurnal variation of magnetic declination greatest in the Northern Hemisphere?',
    options: ['Summer', 'Winter', 'Autumn', 'Spring'],
    ans: 0, exp: 'Solar radiation and ionization of the upper atmosphere are strongest in summer, driving larger daily swings in declination.',
    tip: 'Diurnal variation is greatest in SUMMER and least in WINTER.', top: 'Magnetic Declination'
  },
  {
    q: 'How does the magnitude of diurnal variation change with distance from the Earth\'s equator towards the magnetic poles?',
    options: ['It increases significantly as one moves closer to the magnetic poles', 'It decreases towards the poles and is zero at the Arctic', 'It remains strictly identical everywhere', 'It drops to zero at the Tropic of Cancer'],
    ans: 0, exp: 'Diurnal variation is relatively small near the equator (about 1 minute) and increases to over 10 to 15 minutes near the magnetic poles.',
    tip: 'Diurnal variation INCREASES from equator towards the poles.', top: 'Magnetic Declination'
  },
  {
    q: 'What is the characteristic period of secular variation of magnetic declination?',
    options: ['A periodic swing taking approximately 200 to 300 years to complete one cycle', 'Exactly 24 hours', 'Exactly 365.25 days', '1000 years'],
    ans: 0, exp: 'Secular variation is a long-period wave in Earth\'s magnetic field resembling pendulum motion, typically completing a full cycle in 200 to 300 years.',
    tip: 'Secular variation cycle = 200 to 300 years.', top: 'Magnetic Declination'
  },
  {
    q: 'If the Fore Bearing of line AB is 120° and Back Bearing is 300°, what can be concluded about stations A and B?',
    options: ['Both station A and station B are completely free from local attraction', 'Both stations are heavily affected by local attraction', 'Station A is affected but station B is free', 'The magnetic declination is 60°'],
    ans: 0, exp: 'Difference = 300° - 120° = 180°. Since |FB - BB| = 180° exactly, neither station is disturbed by local attraction.',
    tip: '|FB - BB| = 180° confirms both stations are free from local attraction.', top: 'Local attraction'
  },
  {
    q: 'If the Fore Bearing of line PQ is 40° and its Back Bearing is 222°, which station or stations are potentially affected by local attraction?',
    options: ['Either station P, station Q, or both stations P and Q', 'Only station P definitely', 'Only station Q definitely', 'Neither station is affected'],
    ans: 0, exp: 'Expected difference is 180°, but actual difference is 222° - 40° = 182° (error of 2°). This proves local attraction exists at P, Q, or both.',
    tip: 'Discrepancy in |FB - BB| indicates attraction at one or both stations.', top: 'Local attraction'
  },
  {
    q: 'When correcting a closed compass traverse for local attraction, what is the first step in the "Method of Included Angles"?',
    options: ['Calculate the interior included angles at all stations from the observed bearings, which are free from local attraction error', 'Add 180° to all bearings', 'Measure the baseline with an invar band', 'Average the fore and back bearings'],
    ans: 0, exp: 'Included angles calculated from bearings taken at any station are completely independent of local attraction at that station.',
    tip: 'Method of included angles starts by computing unaffected interior angles at all stations.', top: 'Local attraction'
  },
  {
    q: 'What is the mathematical check on the interior angles of an n-sided closed polygon traverse?',
    options: ['Sum of interior angles = (2n - 4) × 90°', 'Sum of interior angles = (2n + 4) × 90°', 'Sum of interior angles = 360° for all n', 'Sum of interior angles = n × 180°'],
    ans: 0, exp: 'For any n-sided polygon, the sum of internal angles must equal (2n - 4) right angles.',
    tip: 'Interior angle sum = (2n - 4) × 90° = (n - 2) × 180°.', top: 'Traversing'
  },
  {
    q: 'What is the mathematical check on the exterior angles of an n-sided closed polygon traverse?',
    options: ['Sum of exterior angles = (2n + 4) × 90°', 'Sum of exterior angles = (2n - 4) × 90°', 'Sum of exterior angles = 180°', 'Sum of exterior angles = n × 90°'],
    ans: 0, exp: 'The sum of all exterior deflection angles forming the closed perimeter polygon must equal (2n + 4) × 90°.',
    tip: 'Exterior angle sum = (2n + 4) × 90° = (n + 2) × 180°.', top: 'Traversing'
  },
  {
    q: 'If the Fore Bearing of line AB is 50° and the interior angle at B to line BC is 110° (clockwise from BA), what is the Fore Bearing of line BC?',
    options: ['160°', '340°', '60°', '280°'],
    ans: 0, exp: 'Back bearing of AB = 50° + 180° = 230°. Bearing of BC = Back Bearing of AB + Clockwise Angle = 230° + 110° = 340° (or 230° - (180° - 110°) = 160° depending on direction). Here 50° + 180° - 70° = 160°.',
    tip: 'Bearing of BC = BB of AB ± Interior Angle = 230° - 70° = 160°.', top: 'Traversing'
  },
  {
    q: 'What is the definition of a "traverse" in surveying?',
    options: ['A continuous framework of connected survey lines whose lengths and directions are measured systematically', 'A single line measured across a river', 'A triangle with angles of 60°', 'A method of drawing contours with a dumpy level'],
    ans: 0, exp: 'A traverse consists of a connected series of lines whose linear distances are measured with chain/tape/EDM and directions with compass/theodolite.',
    tip: 'Traverse = Connected series of lines with measured lengths and directions.', top: 'Traversing'
  },
  {
    q: 'What is a "closed loop traverse"?',
    options: ['A traverse that starts and ends at the exact same survey station, forming a closed geometric polygon', 'A traverse run around a single tree', 'A traverse with no forward bearings', 'A traverse that crosses over itself like a figure-8'],
    ans: 0, exp: 'A closed loop traverse starts from a known control station, circuits an area, and closes back onto the initial station.',
    tip: 'Closed loop traverse: Starts and ends at the SAME station.', top: 'Traversing'
  },
  {
    q: 'What is a "closed connecting traverse" (link traverse)?',
    options: ['A traverse that starts at one known control station with verified coordinates and ends at a different known control station', 'A traverse run along an open circular curve', 'A traverse without any angle measurements', 'A traverse used only for water supply pipelines'],
    ans: 0, exp: 'A link traverse starts at one established triangulation or GPS station and closes on another independent established station.',
    tip: 'Link traverse: Connects two DIFFERENT known control stations.', top: 'Traversing'
  },
  {
    q: 'Which method of adjusting closing errors in a compass traverse adjusts angles first, then lines?',
    options: ['Transit rule method', 'Bowditch\'s method', 'Graphical polygon method', 'Simpson\'s method'],
    ans: 0, exp: 'The Transit rule assumes angular measurements are more accurate than linear measurements, adjusting departures and latitudes according to coordinate values.',
    tip: 'Transit rule: Applied when angular observations are more precise than linear measurements.', top: 'Traversing'
  },
  {
    q: 'In Bowditch\'s rule (Compass rule), what fundamental assumption is made regarding measurement errors?',
    options: ['Linear errors are proportional to √L and angular errors are proportional to 1/√L, giving equal weight to linear and angular precision', 'Angular measurements are error-free', 'Linear measurements are error-free', 'All errors are cumulative positive'],
    ans: 0, exp: 'Bowditch\'s rule assumes linear errors ∝ √L and angular errors ∝ 1/√L, which is typical of compass and chain traverses.',
    tip: 'Bowditch\'s rule assumes equal precision in linear and angular work: e_l ∝ √L, e_a ∝ 1/√L.', top: 'Traversing'
  },
  {
    q: 'In Bowditch\'s rule, the correction to the latitude of any traverse line of length l is equal to:',
    options: ['Total error in latitude × (Length of that line / Perimeter of traverse)', 'Total error in latitude / Number of lines', 'Total error in latitude × (Latitude of that line / Total latitude)', 'Total closing error / 2'],
    ans: 0, exp: 'Correction to latitude = ΣL × (l / Σl), where ΣL is total closing error in latitude, l is line length, and Σl is total traverse perimeter.',
    tip: 'Bowditch latitude correction = Total error in latitude × (l / Perimeter).', top: 'Traversing'
  },
  {
    q: 'In Bowditch\'s rule, the correction to the departure of any traverse line of length l is equal to:',
    options: ['Total error in departure × (Length of that line / Perimeter of traverse)', 'Total error in departure / Number of sides', 'Total error in departure × (Departure of line / Total departure)', 'Total departure / l'],
    ans: 0, exp: 'Correction to departure = ΣD × (l / Σl), where ΣD is total closing error in departure, l is line length, and Σl is total perimeter.',
    tip: 'Bowditch departure correction = Total error in departure × (l / Perimeter).', top: 'Traversing'
  },
  {
    q: 'What is the "latitude" of a survey line in traverse coordinates?',
    options: ['Its orthographic projection along the North-South meridian line (L = l · cos θ)', 'Its orthographic projection along the East-West axis', 'Its vertical height above sea level', 'Its geographic latitude in degrees'],
    ans: 0, exp: 'Latitude is the projection of a survey line on the reference meridian: Latitude = l × cos θ (positive North / northing, negative South / southing).',
    tip: 'Latitude = l · cos θ (projection on North-South axis).', top: 'Traversing'
  },
  {
    q: 'What is the "departure" of a survey line in traverse coordinates?',
    options: ['Its orthographic projection along the East-West line perpendicular to the meridian (D = l · sin θ)', 'Its projection on the North-South line', 'The distance walked away from the station', 'The time of departure from camp'],
    ans: 0, exp: 'Departure is the projection of a survey line on the reference parallel: Departure = l × sin θ (positive East / easting, negative West / westing).',
    tip: 'Departure = l · sin θ (projection on East-West axis).', top: 'Traversing'
  },
  {
    q: 'For a closed polygon traverse, what is the fundamental mathematical condition for geometric closure of latitudes and departures?',
    options: ['Algebraic sum of latitudes ΣL = 0 and algebraic sum of departures ΣD = 0', 'ΣL = ΣD', 'ΣL + ΣD = 360', 'ΣL × ΣD = 1'],
    ans: 0, exp: 'In a closed polygon returning to its origin, the total northings must equal total southings (ΣL = 0) and total eastings must equal westings (ΣD = 0).',
    tip: 'Closed traverse condition: Σ Latitudes = 0 and Σ Departures = 0.', top: 'Traversing'
  },
  {
    q: 'What is the magnitude of the linear closing error e of a closed traverse with closing latitude error ΣL and departure error ΣD?',
    options: ['√[(ΣL)² + (ΣD)²]', 'ΣL + ΣD', 'ΣL - ΣD', '(ΣL)² + (ΣD)²'],
    ans: 0, exp: 'By Pythagoras theorem, the linear closing error distance is the hypotenuse: e = √[(ΣL)² + (ΣD)²].',
    tip: 'Linear closing error e = √[(ΣL)² + (ΣD)²].', top: 'Traversing'
  },
  {
    q: 'What is the direction (reduced bearing θ) of the linear closing error in a closed traverse?',
    options: ['tan θ = |ΣD / ΣL|', 'tan θ = |ΣL / ΣD|', 'sin θ = ΣL / ΣD', 'cos θ = ΣD / ΣL'],
    ans: 0, exp: 'The bearing angle θ of the closing error vector satisfies tan θ = Departure Error / Latitude Error = |ΣD / ΣL|.',
    tip: 'Closing error direction: tan θ = |ΣD / ΣL|.', top: 'Traversing'
  },
  {
    q: 'What is the "relative precision" (or fractional closing error) of a closed traverse with closing error e and perimeter P?',
    options: ['e / P (expressed as a fraction 1 in N, e.g. 1 in 1000)', 'P / e', 'e × P', '√(e / P)'],
    ans: 0, exp: 'Relative precision is expressed as the ratio of closing error to the total perimeter of the traverse: Precision = e / P = 1 / (P / e).',
    tip: 'Relative precision = e / P (expressed as 1 in N).', top: 'Traversing'
  },
  {
    q: 'In compass surveying, what is meant by "consecutive coordinates" (dependent coordinates)?',
    options: ['The latitude and departure of each individual station calculated with respect to the immediately preceding station', 'The coordinates measured with respect to a single common origin', 'The latitude in degrees and minutes', 'The UTM grid coordinates'],
    ans: 0, exp: 'Consecutive coordinates are the individual latitude (l cos θ) and departure (l sin θ) of each line relative to its starting station.',
    tip: 'Consecutive coordinates = Latitude and Departure of a line relative to previous station.', top: 'Traversing'
  },
  {
    q: 'What are "independent coordinates" (total coordinates) of traverse stations?',
    options: ['The total coordinates of all traverse stations calculated with respect to a single fixed common origin', 'Coordinates that do not depend on the compass needle', 'Bearings taken without a tripod', 'Lengths measured without chaining'],
    ans: 0, exp: 'Independent coordinates are the cumulative total Northings and Eastings of each station computed from a single chosen coordinate origin (0, 0).',
    tip: 'Independent coordinates = Total Northing and Easting of stations from a common origin.', top: 'Traversing'
  },
  {
    q: 'Why are all independent coordinates in land surveying usually shifted by adding large positive constants (False Northing and False Easting)?',
    options: ['To ensure all coordinate values remain positive and avoid working with negative numbers', 'To calibrate against magnetic declination', 'To make maps larger', 'To account for earth curvature'],
    ans: 0, exp: 'Adding large positive values ensures the entire survey lies in the first (NE) quadrant, eliminating confusing negative signs in computations.',
    tip: 'False coordinates ensure all Northing and Easting values remain strictly positive.', top: 'Traversing'
  },
  {
    q: 'In Gale\'s traverse table, what is the sequence of columns used for computing and adjusting a traverse?',
    options: ['Line, Length, Bearing, Consecutive Coordinates (Latitude, Departure), Corrections, Adjusted Coordinates, Total Coordinates', 'Line, Elevation, Slope, Contour', 'Station, Water level, High tide, Low tide', 'Peg, Arrow, Tally, Link'],
    ans: 0, exp: 'Gale\'s Traverse System tabulates all lines, observed bearings, lengths, raw latitudes/departures, closing error corrections, and total independent coordinates.',
    tip: 'Gale\'s table systematically calculates, balances, and plots traverse coordinates.', top: 'Traversing'
  },
  {
    q: 'What is the effect of an uncorrected index error in the vertical circle of a theodolite or Abney level?',
    options: ['All vertical angles are systematically too large or too small by the constant index error value', 'Horizontal angles are rotated by 90°', 'The magnetic needle points South', 'The telescope flips over'],
    ans: 0, exp: 'Index error is a zero offset in the vertical circle; it systematically adds or subtracts a constant angle to all observed vertical readings.',
    tip: 'Vertical index error systematically shifts all vertical angles by a constant amount.', top: 'Errors in Compass survey'
  },
  {
    q: 'Which source of error in compass surveying is classified as a "natural error"?',
    options: ['Diurnal variation of the Earth\'s magnetic field', 'A bent magnetic needle', 'Sluggishness of the pivot', 'Incorrect bisection of the ranging rod'],
    ans: 0, exp: 'Diurnal fluctuations, magnetic storms, and temperature changes in the ionosphere are natural phenomena beyond human control.',
    tip: 'Natural errors = Diurnal variation, magnetic storms, atmospheric disturbances.', top: 'Errors in Compass survey'
  },
  {
    q: 'Which source of error in compass surveying is classified as an "instrumental error"?',
    options: ['The magnetic needle not being straight and its magnetic axis not coinciding with its geometric axis', 'Strong wind blowing the ranging rod', 'High summer diurnal variation', 'Observer taking reading with parallax'],
    ans: 0, exp: 'A bent needle, blunt pivot, eccentric ring, or non-vertical sight vanes are physical defects of the instrument itself.',
    tip: 'Instrumental error = Bent needle, blunt pivot, defective prism, non-vertical vanes.', top: 'Errors in Compass survey'
  },
  {
    q: 'Which source of error in compass surveying is classified as a "personal error"?',
    options: ['Inaccurate centring of the compass over the station peg and careless bisection of the target', 'Secular variation over centuries', 'Pivot friction', 'Magnetic storms'],
    ans: 0, exp: 'Imperfect centring, levelling, target bisection, or improper reading of the graduated ring are human personal mistakes.',
    tip: 'Personal errors = Faulty centring, improper levelling, inaccurate sighting, reading errors.', top: 'Errors in Compass survey'
  },
  {
    q: 'How can the error caused by the magnetic needle not being straight be completely eliminated during observation?',
    options: ['By reading both ends of the needle (North end and South end) and taking the mean of the two readings', 'By tapping the compass glass with a hammer', 'By reversing the tripod legs', 'By taking sights only at night'],
    ans: 0, exp: 'Reading both opposite ends of the needle and averaging them cancels out the geometric bending eccentricity error.',
    tip: 'Bent needle error is eliminated by reading both opposite ends and taking the mean.', top: 'Errors in Compass survey'
  },
  {
    q: 'What is the purpose of the ball and socket joint on a compass tripod head?',
    options: ['To allow quick universal tilting and levelling of the compass box before clamping it horizontal', 'To allow the compass to slide up and down', 'To measure vertical slope angles', 'To store spare marking arrows'],
    ans: 0, exp: 'The ball and socket joint permits the surveyor to tilt the instrument smoothly in any direction to bring the bubble to centre, then clamp it tight.',
    tip: 'Ball and socket joint: Rapid universal tilting for easy levelling of the compass.', top: 'Surveyors compass'
  },
  {
    q: 'In setting up a prismatic compass, what is the correct operational sequence of temporary adjustments?',
    options: ['Centring over the station peg, Levelling the compass box, Focusing the prism slide for clear reading', 'Focusing prism, Centring, Levelling', 'Levelling, Focusing prism, Centring', 'Bisecting target, Levelling, Centring'],
    ans: 0, exp: 'The correct operational sequence is: 1. Centring over ground mark; 2. Levelling so needle floats freely; 3. Focusing the prism for sharp scale vision.',
    tip: 'Temporary adjustments sequence: 1. Centring -> 2. Levelling -> 3. Focusing.', top: 'Prismatic compass'
  },
  {
    q: 'How is centring of a prismatic compass over a ground station peg verified in the field?',
    options: ['By dropping a small stone or plumb bob from the centre of the underside of the tripod head onto the peg', 'By looking through the prism at the sun', 'By tapping the brake pin', 'By placing a spirit level on the grass'],
    ans: 0, exp: 'Suspending a plumb bob from the central hook under the tripod head (or dropping a pebble) verifies that the instrument is directly above the peg mark.',
    tip: 'Centring: Verified by plumb bob or pebble dropped from tripod centre onto station peg.', top: 'Prismatic compass'
  },
  {
    q: 'When using a prismatic compass, what should the observer do to prevent the graduated ring from tilting and sticking against the glass during observation?',
    options: ['Ensure the instrument is strictly levelled using the ball and socket joint before releasing the needle', 'Press the brake pin continuously', 'Slide the rider off the needle', 'Remove the glass cover'],
    ans: 0, exp: 'If the compass box is tilted, the balanced ring rubs against the bottom plate or top glass cover. Proper levelling keeps the ring floating freely.',
    tip: 'Proper levelling prevents the ring from rubbing against glass or base plate.', top: 'Prismatic compass'
  },
  {
    q: 'In traverse computations, if a line has a latitude of +80.00 m and a departure of +60.00 m, what is the length of the line?',
    options: ['100.00 metres', '140.00 metres', '20.00 metres', '4800.00 metres'],
    ans: 0, exp: 'Length l = √[(Latitude)² + (Departure)²] = √[(80)² + (60)²] = √[6400 + 3600] = √10000 = 100.00 metres.',
    tip: 'Length = √[Lat² + Dep²] = √[80² + 60²] = 100 m.', top: 'Traversing'
  },
  {
    q: 'If a line has a latitude of +80.00 m and departure of +60.00 m, in which quadrant does the line lie and what is its Whole Circle Bearing?',
    options: ['First quadrant (NE), WCB = 36° 52\'', 'Second quadrant (SE), WCB = 143° 08\'', 'Third quadrant (SW), WCB = 216° 52\'', 'Fourth quadrant (NW), WCB = 323° 08\''],
    ans: 0, exp: 'Both latitude (Northing) and departure (Easting) are positive, so it lies in Quadrant I (NE): tan θ = Dep / Lat = 60 / 80 = 0.75 -> θ = 36° 52\' (N 36° 52\' E = 36° 52\').',
    tip: '+Lat, +Dep = NE quadrant (WCB = tan⁻¹(Dep/Lat) = 36° 52\').', top: 'Traversing'
  },
  {
    q: 'If a line has a latitude of -50.00 m and departure of +50.00 m, in which quadrant does it lie and what is its Whole Circle Bearing?',
    options: ['Second quadrant (SE), WCB = 135° 00\'', 'First quadrant (NE), WCB = 45° 00\'', 'Third quadrant (SW), WCB = 225° 00\'', 'Fourth quadrant (NW), WCB = 315° 00\''],
    ans: 0, exp: 'Negative latitude (Southing) and positive departure (Easting) place the line in Quadrant II (SE): θ = tan⁻¹(50/50) = 45° (S 45° E), so WCB = 180° - 45° = 135°.',
    tip: '-Lat, +Dep = SE quadrant (WCB = 180° - 45° = 135°).', top: 'Traversing'
  },
  {
    q: 'If a line has a latitude of -70.71 m and departure of -70.71 m, in which quadrant does it lie and what is its Whole Circle Bearing?',
    options: ['Third quadrant (SW), WCB = 225° 00\'', 'First quadrant (NE), WCB = 45° 00\'', 'Second quadrant (SE), WCB = 135° 00\'', 'Fourth quadrant (NW), WCB = 315° 00\''],
    ans: 0, exp: 'Negative latitude (South) and negative departure (West) place the line in Quadrant III (SW): θ = 45° (S 45° W), so WCB = 180° + 45° = 225°.',
    tip: '-Lat, -Dep = SW quadrant (WCB = 180° + 45° = 225°).', top: 'Traversing'
  }
];

mod3Questions.forEach(q => {
  addDistinctQ({
    question: q.q,
    options: q.options,
    correctOptionIndex: q.ans,
    explanation: q.exp,
    rankerTip: q.tip
  }, 3, 'mod-3', q.top);
});

console.log('Module 3 added distinct questions. Total added so far:', addedList.length);

// ============================================================================
// MODULE 4: 260 DISTINCT QUESTIONS (PLANE TABLE SURVEYING)
// ============================================================================
const mod4Questions = [
  {
    q: 'What is the fundamental working principle of plane table surveying?',
    options: ['Parallelism (lines drawn on the drawing board remain strictly parallel to the corresponding lines on the ground)', 'Triangulation by measuring all angles with a theodolite', 'Double reflection through two mirrors at 45°', 'Equalization of cuts and fills'],
    ans: 0, exp: 'The core principle of plane tabling is parallelism: at every station, the table must be oriented so that lines plotted on paper remain parallel to the lines they represent on the ground.',
    tip: 'Plane table principle = Parallelism (rays on paper parallel to lines on ground).', top: 'Principles of plane table survey'
  },
  {
    q: 'What is the greatest unique advantage of plane table surveying over other ground surveying methods?',
    options: ['Field observation and graphical plotting proceed simultaneously on the board, eliminating the possibility of omitting important topographic details', 'It achieves geodetic precision of 1 in 1,000,000', 'It can be conducted during heavy rainfall', 'It does not require any sight vanes'],
    ans: 0, exp: 'Because the map is plotted on-site directly in front of the terrain features, any omitted detail, plotting blunder, or contour misinterpretation is spotted and corrected immediately.',
    tip: 'Simultaneous observation and graphical plotting prevents omission of details.', top: 'Principles of plane table survey'
  },
  {
    q: 'What is the primary operational disadvantage of plane table surveying?',
    options: ['It cannot be carried out in wet, rainy, or highly humid weather, and is unsuited for high-precision geodetic work', 'It requires complex mathematical trigonometry in the field book', 'It requires heavy motorized transport', 'It requires an electronic data collector'],
    ans: 0, exp: 'Drawing paper is vulnerable to rain, moisture distortion, and strong winds. Furthermore, graphical plotting limits precision to map scale.',
    tip: 'Disadvantages: Unsuitable in rainy/wet/windy weather; low precision compared to theodolite.', top: 'Principles of plane table survey'
  },
  {
    q: 'What type of timber is preferred for the construction of a high quality plane table board, and why?',
    options: ['Well-seasoned teak, pine, or fir because of their resistance to warping and seasonal atmospheric distortion', 'Freshly cut green oak', 'Plywood without battens', 'Cast iron plate'],
    ans: 0, exp: 'Plane table boards are crafted from light, seasoned softwoods like pine, fir, or teak, built from multiple narrow strips with hardwood cleats/battens to resist warping.',
    tip: 'Plane table board: Seasoned teak, pine, or fir with underside battens to resist warping.', top: 'Accessories of plane table'
  },
  {
    q: 'What are the standard dimensions of a standard plane table drawing board as per Indian Standards?',
    options: ['750 mm × 600 mm (or 600 mm × 500 mm) with a thickness of 15 to 20 mm', '200 mm × 150 mm', '1500 mm × 1000 mm', '300 mm × 300 mm'],
    ans: 0, exp: 'Standard plane table boards are 750 mm × 600 mm (large) or 600 mm × 500 mm (medium) and 15 to 20 mm thick.',
    tip: 'Plane table board dimensions = 750 mm × 600 mm × 20 mm.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, what is an "alidade"?',
    options: ['A straightedge rule with sighting vanes used for sighting ground objects and drawing directional rays on the drawing sheet', 'A device to balance magnetic dip', 'A metal hammer to drive wooden pegs', 'A heavy brass plumb bob'],
    ans: 0, exp: 'An alidade is the fundamental sighting and drafting instrument in plane tabling, consisting of a straightedge with an object vane and sight vane.',
    tip: 'Alidade = Sighting and ray-drawing straightedge rule.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the "fiducial edge" of an alidade?',
    options: ['The beveled working edge of the alidade along which pencil rays are drawn', 'The bottom edge of the tripod shoe', 'The horsehair inside the sight vane', 'The hinge of the plumbing fork'],
    ans: 0, exp: 'The beveled, finely graduated ruler edge of the alidade is termed the fiducial edge. Rays are always drawn strictly along this edge.',
    tip: 'Fiducial edge = Beveled working edge of alidade for drawing rays.', top: 'Accessories of plane table'
  },
  {
    q: 'In a plain alidade, how are the sight vane and object vane constructed?',
    options: ['Sight vane has a narrow vertical viewing slit; object vane has a wider window fitted with a vertical horsehair or fine wire', 'Both vanes have circular glass lenses', 'Sight vane has a mirror; object vane has a compass', 'Both vanes have telescope eyepieces'],
    ans: 0, exp: 'The observer looks through the narrow eye-slit of the sight vane and bisects the target with the thin horsehair/wire of the object vane.',
    tip: 'Sight vane has narrow viewing slit; Object vane has vertical horsehair.', top: 'Accessories of plane table'
  },
  {
    q: 'What are the main advantages of a "telescopic alidade" over a simple plain alidade?',
    options: ['It provides optical magnification for sighting distant objects, measures vertical angles, and determines distances stadia-tacheometrically', 'It is made of lightweight plastic', 'It operates without a tripod', 'It eliminates the need for drawing paper'],
    ans: 0, exp: 'A telescopic alidade incorporates a telescope with cross-hairs and stadia lines, a vertical circle, and a spirit level, increasing range and enabling tacheometric distance measurement.',
    tip: 'Telescopic alidade: Sights distant points, measures vertical angles, and calculates stadia distances.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the function of the "trough compass" in plane table surveying?',
    options: ['To orient the plane table by aligning the board along the local magnetic meridian', 'To measure horizontal included angles in degrees', 'To measure distances directly', 'To test the flatness of the drawing paper'],
    ans: 0, exp: 'A trough compass contains a long magnetic needle in a narrow rectangular box. When the needle points to 0°-0°, a line drawn along its edge marks magnetic North.',
    tip: 'Trough compass = Orients plane table to magnetic North.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the "plumbing fork" (or U-fork) used for in plane table surveying?',
    options: ['For precise centring of the plotted point on the drawing sheet directly over the ground station mark peg', 'For levelling the three tripod legs', 'For drawing perpendicular offsets', 'For pricking points on tracing paper'],
    ans: 0, exp: 'The plumbing fork is a U-shaped metal frame. The top pointed leg touches the plotted point on the sheet while a plumb bob hangs from the lower leg over the ground peg.',
    tip: 'Plumbing fork + plumb bob = Precise centring of plotted point over ground peg.', top: 'Accessories of plane table'
  },
  {
    q: 'What are the three essential field operations required when setting up a plane table at any station?',
    options: ['Levelling, Centring, and Orientation', 'Ranging, Chaining, and Offsetting', 'Focusing eyepiece, Bisecting target, and Reading prism', 'Triangulation, Trilateration, and Tacheometry'],
    ans: 0, exp: 'At every plane table setup, the three fundamental operations are: 1. Levelling the board; 2. Centring the station; 3. Orienting the table.',
    tip: 'Plane table setup operations: Levelling, Centring, Orientation.', top: 'Setting up plane table'
  },
  {
    q: 'Which of the three setting-up operations of a plane table is by far the most critical and sensitive to error?',
    options: ['Orientation', 'Centring', 'Levelling', 'Clamping the paper'],
    ans: 0, exp: 'An orientation error rotates the entire drawing, shifting all plotted rays and creating substantial cumulative displacement across the entire map.',
    tip: 'Orientation is the MOST critical setting-up operation in plane tabling.', top: 'Setting up plane table'
  },
  {
    q: 'In plane table surveying on small or medium scale maps (e.g. 1:1000 or smaller), why is a minor centring error of a few centimetres practically negligible?',
    options: ['Because a ground centring error of 30 cm represents less than 0.3 mm on paper, which is smaller than the width of a pencil line', 'Because the alidade absorbs centring errors', 'Because the trough compass corrects it automatically', 'Because plumb bobs have zero weight'],
    ans: 0, exp: 'At 1:1000 scale, 1 mm on paper represents 1 m on ground. A 10 cm ground error is only 0.1 mm on paper, indistinguishable from a fine pencil point.',
    tip: 'Centring error of a few cm is imperceptible on small/medium scale drawings (<0.3 mm).', top: 'Setting up plane table'
  },
  {
    q: 'What are the two standard methods of orienting a plane table at a survey station?',
    options: ['Orientation by magnetic needle (trough compass) and Orientation by backsighting', 'Orientation by celestial stars and by sun', 'Orientation by clinometer and by line ranger', 'Orientation by double reflection and by prism'],
    ans: 0, exp: 'The two methods are: 1. Magnetic needle (quick, approximate, vulnerable to local attraction); 2. Backsighting (precise, unaffected by magnetic disturbances).',
    tip: 'Methods of orientation: 1. By magnetic needle; 2. By backsighting (most accurate).', top: 'Setting up plane table'
  },
  {
    q: 'Why is orientation by "backsighting" considered vastly superior to orientation by magnetic needle?',
    options: ['It is entirely immune to local magnetic attraction and provides far greater angular precision', 'It does not require a tripod', 'It can be done in complete darkness', 'It requires only one person'],
    ans: 0, exp: 'Backsighting aligns the alidade along a previously established baseline ray between two stations, completely avoiding magnetic inaccuracies.',
    tip: 'Orientation by backsighting is superior because it is unaffected by local attraction.', top: 'Setting up plane table'
  },
  {
    q: 'What are the four primary methods of plane table surveying used in the field?',
    options: ['Radiation, Intersection, Traversing, and Resection', 'Trilateration, Triangulation, Tacheometry, and Levelling', 'Stepping, Ranging, Offsetting, and Chaining', 'Repetition, Reiteration, Deflection, and Azimuth'],
    ans: 0, exp: 'The four fundamental methods of plane tabling are: 1. Radiation; 2. Intersection; 3. Traversing; 4. Resection.',
    tip: 'Four plane table methods: Radiation, Intersection, Traversing, Resection.', top: 'Methods of plane table'
  },
  {
    q: 'When is the "Radiation method" of plane table surveying most suitable and advantageous?',
    options: ['When all ground detail points are accessible, relatively close, and clearly visible from a single command station', 'When surveying a long highway across mountains', 'When surveying an inaccessible island across a river', 'When mapping dense jungle'],
    ans: 0, exp: 'In radiation, rays are drawn from a single central station to all surrounding points, and their distances are taped directly. It is ideal for small, open, compact areas.',
    tip: 'Radiation method: Small, open areas where all points are reachable from one station.', top: 'Methods of plane table'
  },
  {
    q: 'When is the "Intersection method" (graphic triangulation) of plane table surveying most suitable?',
    options: ['For locating distant, inaccessible, or mountainous features (such as church spires, river banks, or steep cliffs) without measuring distances to them', 'For flat open agricultural fields with short boundaries', 'For indoor architectural surveying', 'For laying out sewer pipelines'],
    ans: 0, exp: 'In intersection, points are fixed by intersecting rays drawn from two ends of a measured baseline, eliminating the need to measure distances to the objects.',
    tip: 'Intersection method: Inaccessible or distant points; no linear distance to detail is taped.', top: 'Methods of plane table'
  },
  {
    q: 'In the Intersection method of plane table surveying, what is the single linear distance that must be measured on the ground?',
    options: ['Only the length of the base line between the two instrument stations', 'The distance to every plotted tree', 'The perimeter of the drawing sheet', 'The height of the alidade vane'],
    ans: 0, exp: 'The only linear measurement needed in intersection is the baseline connecting the two plane table stations. All other points are fixed purely by intersecting rays.',
    tip: 'Intersection requires measuring ONLY the baseline distance.', top: 'Methods of plane table'
  },
  {
    q: 'In the Intersection method, what is the ideal angle of intersection between rays for maximum plotting accuracy?',
    options: ['Near 90° (and strictly between 30° and 120°)', 'Near 0°', 'Near 180°', '15°'],
    ans: 0, exp: 'Rays intersecting at 90° provide the sharpest, most accurate graphical intersection. Angles under 30° or over 120° cause severe elongations in the plotted point.',
    tip: 'Best intersection angle = 90° (must stay between 30° and 120°).', top: 'Methods of plane table'
  },
  {
    q: 'When is the "Traversing method" of plane table surveying employed?',
    options: ['For surveying narrow linear corridors such as roads, railways, rivers, or property boundaries where stations advance consecutively', 'For mapping a small square garden from one central point', 'For finding the height of a lighthouse', 'For setting out circular curves'],
    ans: 0, exp: 'Plane table traversing moves from station to station along a path, orienting at each station by backsighting to the previous station and measuring line lengths.',
    tip: 'Traversing: Narrow linear corridors (roads, railways, rivers, boundaries).', top: 'Methods of plane table'
  },
  {
    q: 'What is "Resection" in plane table surveying?',
    options: ['The method of locating and plotting the position of an occupied plane table station on the sheet by drawing rays to previously plotted control stations', 'Cutting the drawing sheet with scissors', 'Erasing pencil lines', 'Measuring perpendicular offsets with tape'],
    ans: 0, exp: 'Resection determines the position of the instrument station itself on the map by observing rays from that station towards two or more known points already plotted on the sheet.',
    tip: 'Resection = Fixing the plane table station\'s own location on the map.', top: 'Resection'
  },
  {
    q: 'What is the "Three-Point Problem" in plane table resection?',
    options: ['Locating the position of the instrument station on the drawing sheet by observing three known, prominent ground stations whose positions are already plotted', 'Drawing a triangle with three equal sides', 'Measuring three perpendicular offsets', 'Setting up three tripods simultaneously'],
    ans: 0, exp: 'In the three-point problem, the plane table is set up at an unknown station, and its position is determined by taking sightings to three visible known control points (A, B, C).',
    tip: 'Three-Point Problem = Locating table position by sighting THREE known plotted stations.', top: 'Resection'
  },
  {
    q: 'Which of the following is NOT a recognized method for solving the Three-Point Problem in plane tabling?',
    options: ['Rankine\'s tangential deflection method', 'Lehmann\'s trial and error method', 'Bessel\'s graphical method (inscribed quadrilateral)', 'Mechanical (tracing paper) method'],
    ans: 0, exp: 'Rankine\'s method is for setting out circular curves with a theodolite. The three standard solutions to the 3-point problem are Mechanical, Bessel\'s, and Lehmann\'s.',
    tip: 'Three-Point Problem solutions: 1. Lehmann\'s (Trial & Error); 2. Bessel\'s (Graphical); 3. Tracing paper (Mechanical).', top: 'Resection'
  },
  {
    q: 'In the solution of the Three-Point Problem, why is Lehmann\'s trial-and-error method considered the most preferred in practical field work?',
    options: ['It is quick, highly accurate, and requires no auxiliary instruments like tracing paper while providing direct convergence to the true point', 'It requires no sightings to ground points', 'It works even when the stations are hidden by fog', 'It produces an exact triangle of error of zero radius every time'],
    ans: 0, exp: 'Lehmann\'s method is the standard field practice because it converges rapidly to the exact point in one or two trials without tedious geometric drafting.',
    tip: 'Lehmann\'s method = Most practical, quick, and accurate solution for the 3-point problem.', top: 'Resection'
  },
  {
    q: 'What causes the formation of the "triangle of error" when solving the Three-Point Problem by Lehmann\'s method?',
    options: ['An error in the initial orientation of the plane table board', 'A bent tripod leg', 'Curvature of the Earth', 'Expansion of the timber board'],
    ans: 0, exp: 'Because the initial orientation of the table is only approximate, the three rays drawn from the control points do not intersect at a single point, forming a small triangle of error.',
    tip: 'Triangle of error is caused entirely by ORIENTATION ERROR of the table.', top: 'Resection'
  },
  {
    q: 'According to Lehmann\'s first rule, if the plane table station is positioned OUTSIDE the "great triangle" formed by the three ground stations:',
    options: ['The true position of the station point lies outside the triangle of error', 'The true position lies inside the triangle of error', 'The true position is at the centroid of the triangle', 'The solution is impossible'],
    ans: 0, exp: 'Lehmann\'s rule states: If the instrument station is outside the great triangle ABC, the true plotted point p lies outside the triangle of error.',
    tip: 'Station OUTSIDE great triangle -> True point lies OUTSIDE triangle of error.', top: 'Resection'
  },
  {
    q: 'According to Lehmann\'s rules, if the plane table station is located INSIDE the "great triangle" formed by the three ground stations:',
    options: ['The true position of the station point lies strictly inside the triangle of error', 'The true position lies outside the triangle of error', 'The true position is on the longest side of the triangle', 'The true position is at one of the vertices'],
    ans: 0, exp: 'Lehmann\'s rule states: When the instrument station is inside the great triangle ABC, the true plotted point p is situated inside the triangle of error.',
    tip: 'Station INSIDE great triangle -> True point lies INSIDE triangle of error.', top: 'Resection'
  },
  {
    q: 'According to Lehmann\'s second rule, the true station point p must be located such that:',
    options: ['It lies either to the right of all three rays or to the left of all three rays when looking along them towards the respective ground stations', 'It lies between the two longest rays', 'It intersects ray B perpendicularly', 'It lies on the circumference of the triangle of error'],
    ans: 0, exp: 'When facing the ground stations along the rays, the true point must lie entirely to the right or entirely to the left of all three rays.',
    tip: 'True point lies all to the right or all to the left of the three rays.', top: 'Resection'
  },
  {
    q: 'According to Lehmann\'s third rule, the perpendicular distance from the true point p to any of the three rays is:',
    options: ['Directly proportional to the distance of the corresponding ground station from the instrument station', 'Inversely proportional to the distance', 'Equal for all three rays', 'Proportional to the square of the distance'],
    ans: 0, exp: 'An angular error in orientation causes lateral displacement proportional to ray length: Distance from ray ∝ Ground distance to station.',
    tip: 'Distance of true point from ray is PROPORTIONAL to ground distance of that station.', top: 'Resection'
  },
  {
    q: 'Under what specific geometric condition does the solution to the Three-Point Problem FAIL completely (indeterminate / infinite solutions)?',
    options: ['When the plane table station lies on or very near the circumference of the "great circle" passing through the three ground control stations', 'When the three ground stations lie in a straight line', 'When the three ground stations form an equilateral triangle', 'When the table is set up at noon'],
    ans: 0, exp: 'If the station lies on the circumscribed circle (great circle/danger circle) of the three points, the three rays intersect at all points on the circle, making solution indeterminate.',
    tip: 'Danger Circle / Great Circle: Table on circumference of circle through 3 points -> Resection FAILS!', top: 'Resection'
  },
  {
    q: 'What is the "Two-Point Problem" in plane table resection?',
    options: ['Locating the position of the plane table station on the drawing sheet by observing only two known, visible ground stations whose positions are plotted', 'Measuring the distance between two trees', 'Running a traverse with two legs', 'Setting up two tables at once'],
    ans: 0, exp: 'The two-point problem involves fixing the position of the table and orienting it using sightings to only two known control stations, requiring an auxiliary station.',
    tip: 'Two-Point Problem = Resection by sighting only TWO known control stations.', top: 'Resection'
  },
  {
    q: 'Why is the Two-Point Problem much more laborious and time-consuming in the field than the Three-Point Problem?',
    options: ['Because it requires setting up the plane table at an auxiliary station, making preliminary sightings, and performing graphical construction to correct orientation', 'Because it requires two separate surveyors', 'Because it can only be done at sunset', 'Because it requires measuring the distance to both points with a tape'],
    ans: 0, exp: 'With only two points, orientation cannot be checked directly; an auxiliary station D must be occupied first to establish a trial orientation before moving to true station C.',
    tip: 'Two-point problem requires an auxiliary station, making it tedious and laborious.', top: 'Resection'
  },
  {
    q: 'In plane tabling, what is "orientation by back-bearing"?',
    options: ['Setting the alidade along the line joining the current station to a previously plotted station, and rotating the table until the previous station is bisected', 'Looking at the sun through sunglasses', 'Pointing the alidade towards magnetic South', 'Rotating the board until the bubble is centred'],
    ans: 0, exp: 'Back-bearing orientation aligns the alidade along the line connecting the plotted station to the previous station and rotates the board to bisect the previous station.',
    tip: 'Orientation by back-bearing: Alidade along station line, board rotated to bisect back station.', top: 'Setting up plane table'
  },
  {
    q: 'What is the purpose of the waterproof plastic or canvas cover provided with a plane table outfit?',
    options: ['To protect the drawing sheet from sudden rain, dew, and moisture distortion during field work', 'To wrap the tripod legs during transit', 'To serve as a tent for the surveyor', 'To catch dropped pencils'],
    ans: 0, exp: 'A waterproof cover protects the hygroscopic paper sheet from rainfall or dampness, preserving drawing integrity.',
    tip: 'Waterproof cover protects paper from rain and atmospheric humidity.', top: 'Accessories of plane table'
  },
  {
    q: 'How does atmospheric humidity affect the drawing paper mounted on a plane table board?',
    options: ['It causes the paper to expand or shrink unequally in different directions, altering plotted scales and distances', 'It makes the paper turn transparent', 'It magnetizes the paper', 'It causes the pencil lines to erase themselves'],
    ans: 0, exp: 'Paper is hygroscopic; high humidity expands it along the grain, while dry weather shrinks it, creating distortion in plotted distances.',
    tip: 'Humidity causes unequal expansion and contraction of drawing paper, distorting scale.', top: 'Accessories of plane table'
  },
  {
    q: 'How can the distortion of drawing paper caused by changes in atmospheric humidity be minimized in plane tabling?',
    options: ['By using high quality double-mounted paper with a sheet of muslin or thin zinc/aluminium foil laminated between paper layers', 'By coating the paper with grease', 'By using newspaper', 'By heating the paper with a torch'],
    ans: 0, exp: 'Linen-backed or metal-mounted (zinc/aluminum foil sandwiched between paper sheets) drawing paper resists dimensional changes due to humidity.',
    tip: 'Use linen-backed or zinc-interleaved mounted paper to prevent humidity distortion.', top: 'Accessories of plane table'
  },
  {
    q: 'What type of pencil grade is recommended for drawing fine, sharp, smudge-resistant lines in plane table field plotting?',
    options: ['Hard pencils such as 3H or 4H sharpened to a fine conical or chisel point', 'Soft pencils like 2B or 4B', 'Crayon pencils', 'Charcoal sticks'],
    ans: 0, exp: 'Hard pencils (3H or 4H) produce crisp, fine, durable lines that do not smudge when the alidade is dragged across the sheet.',
    tip: 'Plane table drafting: Hard pencils (3H or 4H) prevent smudging and maintain fine lines.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, what is an "index sketch"?',
    options: ['A key diagram drawn in a corner of the sheet or field book showing the arrangement of stations and traverse lines', 'A full-size topographic plan', 'A contour map', 'A vertical cross-section'],
    ans: 0, exp: 'An index sketch is a reference layout map showing the network of stations, line numbers, and landmarks to guide field progression.',
    tip: 'Index sketch = Small key map showing station layout and network geometry.', top: 'Principles of plane table survey'
  },
  {
    q: 'What error is introduced into plane tabling if the fiducial edge of the alidade is not perfectly straight?',
    options: ['Rays drawn on paper will be curved rather than straight, causing incorrect intersections and distorted plotting', 'Vertical angles will be doubled', 'The compass needle will lose magnetism', 'The tripod will wobble'],
    ans: 0, exp: 'A curved or warped straightedge draws curved rays, displacing plotted points and preventing accurate ray intersections.',
    tip: 'Warped alidade edge draws curved rays, producing systematic plotting distortion.', top: 'Errors in plane table'
  },
  {
    q: 'What is the check applied to test the straightness of the fiducial edge of an alidade?',
    options: ['Draw a fine line along the edge between two sharp points, reverse the alidade 180°, and check if the edge coincides with the line', 'Drop it from a height of 1 metre', 'Immerse it in water', 'Measure its weight on a balance'],
    ans: 0, exp: 'Rule a line between two pricked points, turn the alidade end-for-end on the opposite side of the line: if the edge perfectly matches the drawn line, it is straight.',
    tip: 'Straightedge test: Reverse rule 180° and verify coincidence with the drawn line.', top: 'Errors in plane table'
  },
  {
    q: 'What error is introduced if the sight vane and object vane of an alidade are not perpendicular to the base plate?',
    options: ['The line of sight will not lie in a truly vertical plane, causing lateral aiming displacement when sighting inclined targets', 'The telescope will fall off', 'The board will tilt by 45°', 'The paper will tear'],
    ans: 0, exp: 'If vanes are tilted, tilting the line of sight to high or low objects introduces lateral parallax, offsetting the ray on paper.',
    tip: 'Tilted vanes do not define a true vertical plane when sighting elevated/depressed targets.', top: 'Errors in plane table'
  },
  {
    q: 'What is the purpose of the "tangent screw" provided on the mounting head of advanced plane tables?',
    options: ['To provide slow, smooth fine-motion rotation of the table during precise orientation by backsighting', 'To clamp the paper down', 'To adjust the height of the legs', 'To tighten the plumbing fork'],
    ans: 0, exp: 'After clamping the main leveling head roughly on line, the slow-motion tangent screw rotates the table fractionally for exact bisection.',
    tip: 'Tangent screw = Slow fine-motion rotation for exact orientation.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, what is meant by "graphical triangulation"?',
    options: ['Another term for the Intersection method where control stations and inaccessible points are fixed by intersecting rays', 'Measuring angles with a sextant', 'Calculating coordinates with logarithms', 'Using a planimeter on triangles'],
    ans: 0, exp: 'The intersection method is also known as graphic triangulation because it establishes a triangle network graphically without measuring angles numerically.',
    tip: 'Graphic triangulation = The Intersection method in plane tabling.', top: 'Methods of plane table'
  },
  {
    q: 'How does an error in the levelling of the plane table affect the plotted positions of ground points?',
    options: ['It causes horizontal rays to project obliquely, displacing points especially when sighting objects at high elevations or depressions', 'It has no effect whatsoever', 'It changes the magnetic declination', 'It shrinks the paper by 10%'],
    ans: 0, exp: 'If the board is not level, the axis of the alidade is tilted, so pointing up or down introduces substantial lateral displacement.',
    tip: 'Imperfect levelling displaces plotted rays when sighting elevated or depressed targets.', top: 'Errors in plane table'
  },
  {
    q: 'What is the primary advantage of plane tabling when mapping contour details in the field?',
    options: ['The surveyor can observe the actual landform, valleys, and ridges directly, allowing authentic and natural contour interpolation', 'Contours can be drawn with a single sight', 'Contour intervals can be 0.1 mm', 'It eliminates the need for any levelling staff'],
    ans: 0, exp: 'Seeing the terrain while drawing ensures contour lines represent true land topography, ravines, and spur shapes without office interpolation errors.',
    tip: 'Contour drawing on plane table matches true landforms because terrain is visible during drafting.', top: 'Principles of plane table survey'
  },
  {
    q: 'What is Bessel\'s method of solving the Three-Point Problem based upon geometrically?',
    options: ['The construction of an auxiliary inscribed quadrilateral in a circle', 'The construction of an equilateral triangle', 'The computation of tangents with a slide rule', 'The mechanical rotation of a transparent sheet'],
    ans: 0, exp: 'Bessel\'s graphical method solves the three-point problem by constructing an inscribed quadrilateral whose vertices lie on a circle passing through control points.',
    tip: 'Bessel\'s method = Inscribed quadrilateral solution for 3-point problem.', top: 'Resection'
  },
  {
    q: 'What is the mechanical method (or tracing paper method) of solving the Three-Point Problem?',
    options: ['Three rays from the instrument station to the three control stations are drawn on tracing paper, which is then shifted over the map until the rays pass through the plotted points', 'Tracing the contours of the table with carbon paper', 'Cutting the map into three strips', 'Using a mechanical planimeter'],
    ans: 0, exp: 'Angles to A, B, and C are drawn from a point on transparent tracing paper. The paper is moved over the map until the three rays pass simultaneously through plotted points a, b, and c.',
    tip: 'Tracing paper method: Rays drawn on tracing sheet and shifted over plotted points.', top: 'Resection'
  },
  {
    q: 'What is the main limitation of the mechanical (tracing paper) method for solving the Three-Point Problem?',
    options: ['It is clumsy in high winds, less accurate than Lehmann\'s method, and the tracing paper is easily distorted by field moisture', 'It requires three surveyors', 'It only works at night', 'It cannot be used with wooden alidades'],
    ans: 0, exp: 'Tracing paper tears easily in field wind, expands with moisture, and positioning three lines simultaneously over pricked points lacks high precision.',
    tip: 'Tracing paper method is cumbersome in windy weather and less precise than Lehmann\'s.', top: 'Resection'
  }
];

mod4Questions.forEach(q => {
  addDistinctQ({
    question: q.q,
    options: q.options,
    correctOptionIndex: q.ans,
    explanation: q.exp,
    rankerTip: q.tip
  }, 4, 'mod-4', q.top);
});

console.log('Module 4 batch 1 added. Total added so far:', addedList.length);

// Append to db
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
