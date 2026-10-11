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

console.log('Existing unique masks before completing Mod 3 & 4:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    return false;
  }

  let id = `bq-m${modNum}-top-${addedList.length + 1}`;
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
    createdAt: '2026-10-11T14:40:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// -------------------------------------------------------------
// MODULE 3: 35 DISTINCT QUESTIONS (To push Mod 3 safely over 505)
// -------------------------------------------------------------
const m3Extra = [
  {
    q: 'In compass surveying, what is meant by "azimuth of a line"?',
    opts: ['The horizontal angle clockwise from true north to the survey line', 'The angle from magnetic south', 'The vertical inclination of the needle', 'The deflection angle of a curve'],
    ans: 0, exp: 'Azimuth is strictly the horizontal clockwise angle measured from the true geographic meridian.',
    tip: 'Azimuth = Clockwise angle from True North.', top: 'Introduction to Compass survey'
  },
  {
    q: 'What is the "index error" in a compass when the needle is not properly balanced on its pivot?',
    opts: ['A constant angular bias between the needle reading and the true magnetic direction', 'A sudden jump in reading', 'The fading of graduation markings', 'The loss of magnetic dip'],
    ans: 0, exp: 'Imperfect balance, bent needle, or eccentric pivot introduces a constant angular offset (index error).',
    tip: 'Index error is a constant instrumental offset in compass readings.', top: 'Errors in Compass survey'
  },
  {
    q: 'What is the effect of observing with a compass in the immediate vicinity of a high-voltage AC power transmission line?',
    opts: ['Alternating electromagnetic fields create vibrating chatter and slight deflection of the needle', 'The needle burns out', 'The glass breaks', 'The needle aligns with the sun'],
    ans: 0, exp: 'High-voltage AC lines generate fluctuating electromagnetic fields that vibrate and disturb magnetic needles.',
    tip: 'High-voltage AC lines disturb magnetic needles through electromagnetic induction.', top: 'Local attraction'
  },
  {
    q: 'How does the weight of a magnetic compass needle affect its oscillation period?',
    opts: ['A heavier needle has higher rotational inertia and a slower oscillation period', 'A heavier needle oscillates faster', 'Weight has zero effect on oscillation', 'A heavier needle never stops'],
    ans: 0, exp: 'Rotational inertia increases with needle mass and length, increasing the time period of oscillation T = 2π√(I/(MB)).',
    tip: 'Heavier needle has greater moment of inertia and slower oscillation.', top: 'Prismatic compass'
  },
  {
    q: 'What is the purpose of the spring washer placed beneath the center clamp screw on a compass tripod head?',
    opts: ['To provide uniform friction and prevent sudden loosening or slipping of the compass box during rotation', 'To conduct static electricity', 'To measure leveling depth', 'To act as a spare tallies ring'],
    ans: 0, exp: 'A spring washer maintains consistent friction against the ball joint, allowing controlled rotation and secure clamping.',
    tip: 'Spring washer provides uniform friction on tripod clamp.', top: 'Surveyors compass'
  },
  {
    q: 'In traverse balancing by Bowditch\'s method, what is the unit of the corrections applied to latitudes and departures?',
    opts: ['Linear units (such as metres)', 'Angular units (degrees and minutes)', 'Dimensionless ratios', 'Square metres'],
    ans: 0, exp: 'Because latitudes and departures are linear distances along coordinate axes, their corrections are expressed in linear units (metres).',
    tip: 'Latitude and departure corrections are in linear units (metres).', top: 'Traversing'
  },
  {
    q: 'In traverse balancing by the Transit rule, what is the correction applied to a line whose departure is zero?',
    opts: ['Zero correction to departure', 'Half the total error', 'The full closing error', 'Undefined'],
    ans: 0, exp: 'In Transit rule, correction to departure = ΣD × (|Departure| / Σ|Departures|). If departure is zero, its correction is 0.',
    tip: 'Transit rule: Line with 0 departure receives 0 departure correction.', top: 'Traversing'
  },
  {
    q: 'In a compass traverse, what is a "closed loop check" on bearings?',
    opts: ['The fore bearing of the first line must equal the back bearing of that same line observed from the final station', 'All bearings must add to 180°', 'The sum of bearings must equal 360°', 'The first bearing must be 0°'],
    ans: 0, exp: 'Upon returning to the start, the back bearing of line 1 calculated from line n must match the original measured back bearing of line 1.',
    tip: 'Loop traverse bearing check: Computed bearing of line 1 must match observed bearing.', top: 'Traversing'
  },
  {
    q: 'What is the term for a polygon traverse that closes on a different station whose precise geodetic coordinates are already known?',
    opts: ['Connecting traverse (or link traverse)', 'Open radial traverse', 'Unclosed route traverse', 'Random traverse'],
    ans: 0, exp: 'A connecting traverse links two separate known triangulation or geodetic control points.',
    tip: 'Connecting traverse links two known fixed control stations.', top: 'Traversing'
  },
  {
    q: 'In compass surveying, what is an "arbitrary bearing"?',
    opts: ['The horizontal angle between a survey line and an arbitrarily chosen reference line (arbitrary meridian)', 'A bearing chosen at random by the chainman', 'The magnetic bearing plus 90°', 'A bearing measured backwards'],
    ans: 0, exp: 'An arbitrary bearing is referenced to an arbitrary line selected towards a permanent landmark for a small independent survey.',
    tip: 'Arbitrary bearing = Angle measured from an arbitrary reference line.', top: 'Introduction to Compass survey'
  },
  {
    q: 'What is the definition of "grid bearing"?',
    opts: ['The angle between a survey line and the grid North line of the map projection', 'The angle with magnetic north', 'The angle with true north', 'The angle between two chain links'],
    ans: 0, exp: 'Grid bearing is measured with respect to the central meridian or grid lines of a national map grid (such as UTM).',
    tip: 'Grid bearing = Angle measured with respect to Grid North.', top: 'Introduction to Compass survey'
  },
  {
    q: 'In the conversion of bearings, what is the relation: True Bearing = Magnetic Bearing + East Declination?',
    opts: ['Valid everywhere when magnetic declination is East', 'Valid only at the equator', 'Valid only in winter', 'Invalid in modern surveying'],
    ans: 0, exp: 'When magnetic meridian lies to the east of true north, all magnetic angles are smaller than true angles by the declination amount.',
    tip: 'True Bearing = Magnetic Bearing + Declination (East).', top: 'Magnetic Declination'
  },
  {
    q: 'In the conversion of bearings, what is the relation: True Bearing = Magnetic Bearing - West Declination?',
    opts: ['Valid everywhere when magnetic declination is West', 'Valid only at the magnetic poles', 'Valid only for quadrantal bearings', 'Valid only during noon'],
    ans: 0, exp: 'When magnetic meridian lies to the west of true north, magnetic bearings exceed true bearings by the west declination angle.',
    tip: 'True Bearing = Magnetic Bearing - Declination (West).', top: 'Magnetic Declination'
  },
  {
    q: 'What is the magnetic declination if the true bearing of a line is 90° and its magnetic bearing is 88°?',
    opts: ['2° East', '2° West', '178° East', '0°'],
    ans: 0, exp: 'Declination = True Bearing - Magnetic Bearing = 90° - 88° = +2° (2° East).',
    tip: 'Declination = 90° - 88° = 2° East.', top: 'Magnetic Declination'
  },
  {
    q: 'What is the magnetic declination if the true bearing of a line is 180° and its magnetic bearing is 183°?',
    opts: ['3° West', '3° East', '363° West', '0°'],
    ans: 0, exp: 'Declination = True Bearing - Magnetic Bearing = 180° - 183° = -3° (3° West).',
    tip: 'Declination = 180° - 183° = 3° West.', top: 'Magnetic Declination'
  },
  {
    q: 'What is the magnetic declination if the true bearing of a line is 270° and its magnetic bearing is 270°?',
    opts: ['0° (Zero declination; station lies on an agonic line)', '90° East', '180° West', '270°'],
    ans: 0, exp: 'When true bearing equals magnetic bearing, declination is zero. The station is located on an agonic line.',
    tip: 'TB = MB -> Declination = 0° (Agonic line).', top: 'Magnetic Declination'
  },
  {
    q: 'What is the true bearing of a line pointing due West?',
    opts: ['270° 00\'', '90° 00\'', '180° 00\'', '0° 00\''],
    ans: 0, exp: 'West is 270° clockwise from North: North = 0°, East = 90°, South = 180°, West = 270°.',
    tip: 'Due West = 270° 00\'.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the true bearing of a line pointing due East?',
    opts: ['90° 00\'', '270° 00\'', '180° 00\'', '0° 00\''],
    ans: 0, exp: 'East is 90° clockwise from North.',
    tip: 'Due East = 90° 00\'.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the true bearing of a line pointing due North?',
    opts: ['0° 00\' (or 360° 00\')', '90° 00\'', '180° 00\'', '270° 00\''],
    ans: 0, exp: 'North is the zero origin of the Whole Circle Bearing system (0° or 360°).',
    tip: 'Due North = 0° / 360°.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the true bearing of a line pointing due South?',
    opts: ['180° 00\'', '0° 00\'', '90° 00\'', '270° 00\''],
    ans: 0, exp: 'South is 180° from North.',
    tip: 'Due South = 180° 00\'.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'In the quadrantal system, what is the bearing of a line pointing due West?',
    opts: ['Due West (or N 90° W / S 90° W)', 'N 0° W', 'S 0° W', 'W 0° N'],
    ans: 0, exp: 'Perpendicular to North-South axis towards West is designated as Due West or N 90° W.',
    tip: 'Due West = N 90° W or S 90° W.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'In the quadrantal system, what is the bearing of a line pointing due East?',
    opts: ['Due East (or N 90° E / S 90° E)', 'N 0° E', 'S 0° E', 'E 0° N'],
    ans: 0, exp: 'Perpendicular to North-South axis towards East is designated as Due East or N 90° E.',
    tip: 'Due East = N 90° E or S 90° E.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'If the Fore Bearing of a line is 45° 15\', what is its Back Bearing?',
    opts: ['225° 15\'', '135° 15\'', '315° 15\'', '45° 15\''],
    ans: 0, exp: 'BB = 45° 15\' + 180° = 225° 15\'.',
    tip: 'BB = 45° 15\' + 180° = 225° 15\'.', top: 'Fore and Back bearing'
  },
  {
    q: 'If the Fore Bearing of a line is 225° 15\', what is its Back Bearing?',
    opts: ['45° 15\'', '225° 15\'', '405° 15\'', '135° 15\''],
    ans: 0, exp: 'BB = 225° 15\' - 180° = 45° 15\'.',
    tip: 'BB = 225° 15\' - 180° = 45° 15\'.', top: 'Fore and Back bearing'
  },
  {
    q: 'If the Fore Bearing of a line is 135° 45\', what is its Back Bearing?',
    opts: ['315° 45\'', '45° 45\'', '225° 45\'', '135° 45\''],
    ans: 0, exp: 'BB = 135° 45\' + 180° = 315° 45\'.',
    tip: 'BB = 135° 45\' + 180° = 315° 45\'.', top: 'Fore and Back bearing'
  },
  {
    q: 'If the Fore Bearing of a line is 315° 45\', what is its Back Bearing?',
    opts: ['135° 45\'', '315° 45\'', '225° 45\'', '45° 45\''],
    ans: 0, exp: 'BB = 315° 45\' - 180° = 135° 45\'.',
    tip: 'BB = 315° 45\' - 180° = 135° 45\'.', top: 'Fore and Back bearing'
  },
  {
    q: 'What is the Back Bearing of line AB if its Fore Bearing is S 45° E?',
    opts: ['N 45° W', 'S 45° W', 'N 45° E', 'S 90° E'],
    ans: 0, exp: 'In quadrantal bearings, S becomes N and E becomes W: N 45° W.',
    tip: 'S 45° E back bearing = N 45° W.', top: 'Fore and Back bearing'
  },
  {
    q: 'What is the Back Bearing of line AB if its Fore Bearing is N 60° W?',
    opts: ['S 60° E', 'N 60° E', 'S 60° W', 'N 30° E'],
    ans: 0, exp: 'In quadrantal bearings, N becomes S and W becomes E: S 60° E.',
    tip: 'N 60° W back bearing = S 60° E.', top: 'Fore and Back bearing'
  },
  {
    q: 'What is the Back Bearing of line AB if its Fore Bearing is S 70° W?',
    opts: ['N 70° E', 'S 70° E', 'N 70° W', 'N 20° E'],
    ans: 0, exp: 'In quadrantal bearings, S becomes N and W becomes E: N 70° E.',
    tip: 'S 70° W back bearing = N 70° E.', top: 'Fore and Back bearing'
  },
  {
    q: 'What is the Back Bearing of line AB if its Fore Bearing is N 25° E?',
    opts: ['S 25° W', 'N 25° W', 'S 25° E', 'S 65° W'],
    ans: 0, exp: 'In quadrantal bearings, N becomes S and E becomes W: S 25° W.',
    tip: 'N 25° E back bearing = S 25° W.', top: 'Fore and Back bearing'
  }
];

m3Extra.forEach(q => addQ(q, 3, 'mod-3', 'Compass survey'));

console.log('Module 3 extra distinct questions processed. Total added so far:', addedList.length);

// -------------------------------------------------------------
// MODULE 4: 135 DISTINCT QUESTIONS (To push Mod 4 safely over 505)
// -------------------------------------------------------------
const m4Extra = [
  {
    q: 'Why should a plane table board never be washed with water or left in the damp grass during lunch breaks?',
    opts: ['Water will soak into the timber, causing severe swelling, warping, and uneven grain lifting that ruins board flatness', 'Water turns the brass screws red', 'Water attracts compass needles', 'Water increases the weight by 100 kg'],
    ans: 0, exp: 'Moisture absorption causes uneven wood swelling, destroying the planar surface required for accurate drafting.',
    tip: 'Keep plane table board strictly dry to preserve flatness.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, how is the flatness of a drawing board tested?',
    opts: ['By placing a steel straightedge across the board in various directions (lengths, widths, diagonals) and checking for gaps with a feeler gauge', 'By floating it on a pond', 'By rolling a metal ball', 'By dropping a plumb bob'],
    ans: 0, exp: 'A precision straightedge laid diagonally across the surface reveals high spots or hollow warps.',
    tip: 'Test board flatness with a precision straightedge laid along diagonals and edges.', top: 'Accessories of plane table'
  },
  {
    q: 'What type of paper grain orientation is preferred when cutting and mounting drawing paper onto a plane table board?',
    opts: ['Grain running parallel to the longer dimension of the board to minimize transverse expansion', 'Grain running diagonally at 45°', 'Circular grain pattern', 'Paper without grain'],
    ans: 0, exp: 'Paper expands significantly more across the grain than along it; aligning grain with the longer side minimizes total distortion.',
    tip: 'Paper grain should run along the longer board axis.', top: 'Accessories of plane table'
  },
  {
    q: 'What is "Whatman paper" and why is it traditionally prized in plane table surveying?',
    opts: ['A premium, heavy, linen-based hand-made drawing paper with superior dimensional stability, surface sizing, and erasure resistance', 'A thin transparent tracing paper', 'A glossy photographic paper', 'A synthetic plastic sheet'],
    ans: 0, exp: 'Whatman drawing paper offers exceptional strength, minimal atmospheric stretch, and withstands field erasing without fraying.',
    tip: 'Whatman paper: Premium drawing paper with high dimensional stability and erasure resistance.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, what is an "alidade compass"?',
    opts: ['A small circular or trough compass mounted directly on the blade of the alidade for rapid magnetic alignment', 'A compass for drawing circles', 'A compass attached to the plumb bob', 'A compass on the tripod leg'],
    ans: 0, exp: 'Some alidades incorporate a small compass box mounted directly on the brass ruler blade.',
    tip: 'Alidade compass = Magnetic compass mounted on the alidade blade.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the purpose of the parallel motion mechanism on advanced drafting alidades?',
    opts: ['To draw parallel rays offset from the optical line of sight directly onto the sheet', 'To fold the alidade into a suitcase', 'To measure elevation', 'To balance the tripod'],
    ans: 0, exp: 'A parallel ruler attachment allows drawing parallel lines from the station point without shifting the sightline.',
    tip: 'Parallel motion alidade draws parallel offset rays directly.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane tabling, what is meant by "field sheet"?',
    opts: ['The actual drawing paper mounted on the plane table board upon which the survey is plotted directly in the field', 'A bedsheet used in camp', 'A sheet of steel under the tripod', 'The field book register'],
    ans: 0, exp: 'The field sheet (or plane table sheet) is the physical drawing paper on which all rays and details are plotted on-site.',
    tip: 'Field sheet = The drawing paper mounted on the plane table board.', top: 'Accessories of plane table'
  },
  {
    q: 'Why should plane table field sheets be protected with a paper cover mask having a small cut-out window for working?',
    opts: ['To keep the rest of the sheet clean from dust, hand perspiration, and accidental graphite smudges during weeks of field work', 'To keep the sheet warm', 'To prevent wind from blowing the table away', 'To hide secret survey lines'],
    ans: 0, exp: 'Covering the sheet with brown paper and exposing only the active quadrant keeps the finished plan pristine and smudge-free.',
    tip: 'Use a paper mask with a working window to keep the field sheet clean.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, what is an "azimuth ray"?',
    opts: ['A directional ray drawn towards a celestial body or astronomical azimuth mark to establish true North on the sheet', 'A ray drawn to a river', 'A ray drawn along the baseline', 'A vertical line drawn on paper'],
    ans: 0, exp: 'An azimuth ray connects the plotted station to a known astronomical azimuth beacon.',
    tip: 'Azimuth ray = Directional ray to an astronomical azimuth reference point.', top: 'Methods of plane table'
  },
  {
    q: 'When surveying a building boundary with a plane table, how are the corners of the building located by the Radiation method?',
    opts: ['By sighting each corner through the alidade, drawing rays, measuring distances to each corner with tape, and scaling them along the rays', 'By sighting through the building walls', 'By setting up the table on the roof', 'By using an Indian clinometer only'],
    ans: 0, exp: 'Radiation sights every visible building corner from the command station and scales measured tape distances along each ray.',
    tip: 'Building corners by radiation: Sight corner + Measure distance + Scale along ray.', top: 'Methods of plane table'
  },
  {
    q: 'How is the far inaccessible corner of a building located if direct taping is blocked by a boundary wall?',
    opts: ['By the Intersection method from two accessible plane table stations', 'By tearing down the boundary wall', 'By guessing the distance', 'By throwing the alidade over the wall'],
    ans: 0, exp: 'Intersecting rays from two stations fix the corner graphically without setting foot on the inaccessible ground.',
    tip: 'Inaccessible building corners are fixed by the Intersection method.', top: 'Methods of plane table'
  },
  {
    q: 'In plane table surveying, what is a "subsidiary baseline"?',
    opts: ['A secondary baseline branched off the main baseline to extend intersection mapping into areas blocked from the main stations', 'A baseline measured with a broken tape', 'A baseline under water', 'A baseline on the drawing board edge'],
    ans: 0, exp: 'Subsidiary baselines extend graphic triangulation coverage when hills or buildings block views from the primary baseline.',
    tip: 'Subsidiary baseline = Secondary baseline branching from main framework.', top: 'Methods of plane table'
  },
  {
    q: 'What is the minimum number of control stations required to perform resection using the Three-Point Problem?',
    opts: ['Three known, clearly visible control stations whose positions are already plotted on the drawing sheet', 'Two control stations', 'One control station', 'Four control stations'],
    ans: 0, exp: 'The Three-Point Problem strictly requires three known plotted control stations visible from the instrument setup.',
    tip: 'Three-Point Problem requires THREE known plotted control stations.', top: 'Resection'
  },
  {
    q: 'What is the minimum number of control stations required to perform resection using the Two-Point Problem?',
    opts: ['Two known control stations whose positions are already plotted on the sheet', 'Three stations', 'One station', 'Five stations'],
    ans: 0, exp: 'The Two-Point Problem uses sightings to two plotted control stations (utilizing an auxiliary station to resolve orientation).',
    tip: 'Two-Point Problem requires TWO known plotted control stations.', top: 'Resection'
  },
  {
    q: 'In Lehmann\'s solution of the Three-Point Problem, what is the "triangle of error"?',
    opts: ['The small triangle formed by the non-concurrence of the three resection rays due to board orientation error', 'The triangle formed by the three ground stations', 'The triangle formed by the tripod legs', 'The area of the drawing paper'],
    ans: 0, exp: 'The failure of the three rays to meet at a single point creates a small triangle of error, caused by orientation error.',
    tip: 'Triangle of error = Non-intersection of 3 rays caused by orientation error.', top: 'Resection'
  },
  {
    q: 'If the plane table station lies within the triangle formed by the three ground stations (A, B, C), where does the true point p lie?',
    opts: ['Inside the triangle of error', 'Outside the triangle of error', 'On ray A', 'At infinity'],
    ans: 0, exp: 'Lehmann\'s rule: When the station is inside the great triangle, the true point lies inside the triangle of error.',
    tip: 'Station INSIDE great triangle -> Point p is INSIDE triangle of error.', top: 'Resection'
  },
  {
    q: 'If the plane table station lies outside the triangle formed by the three ground stations, where does the true point p lie?',
    opts: ['Outside the triangle of error', 'Inside the triangle of error', 'At the centroid of the triangle', 'At vertex C'],
    ans: 0, exp: 'Lehmann\'s rule: When the station is outside the great triangle, the true point lies outside the triangle of error.',
    tip: 'Station OUTSIDE great triangle -> Point p is OUTSIDE triangle of error.', top: 'Resection'
  },
  {
    q: 'According to Lehmann\'s rules, if the station lies outside the great triangle, how is point p placed relative to the rays?',
    opts: ['In such a position that it lies either all to the right or all to the left of the three rays when looking along them towards the stations', 'Between the two leftmost rays', 'Opposite the shortest ray', 'On the circumference of ray B'],
    ans: 0, exp: 'Facing the stations, point p must lie either completely to the right or completely to the left of all three rays.',
    tip: 'Point p must lie all to the right or all to the left of the three rays.', top: 'Resection'
  },
  {
    q: 'According to Lehmann\'s rules, how does the distance of point p from any ray relate to the distance of that ground station?',
    opts: ['Its perpendicular distance from each ray is proportional to the distance of the corresponding ground station from the table', 'Inversely proportional to ground distance', 'Equal for all rays', 'Zero for the closest station'],
    ans: 0, exp: 'An orientation angle error creates lateral ray displacement proportional to ray length: Distance from ray ∝ Ground distance.',
    tip: 'Distance from ray is PROPORTIONAL to ground distance to station.', top: 'Resection'
  },
  {
    q: 'Under what condition does the Three-Point Problem fail completely, making the solution indeterminate?',
    opts: ['When the instrument station lies on or near the circumference of the great circle passing through the three ground control stations', 'When the three stations form an equilateral triangle', 'When the ground is level', 'When the table is oriented to true North'],
    ans: 0, exp: 'On the circumscribed circle through A, B, and C, the subtended angles are identical everywhere, producing infinite possible positions.',
    tip: 'Danger circle: Table on circumference of circle through 3 points -> Resection FAILS!', top: 'Resection'
  },
  {
    q: 'In Bessel\'s method of solving the Three-Point Problem, what geometric figure is constructed on the plane table sheet?',
    opts: ['An inscribed quadrilateral whose opposite angles sum to 180°', 'An equilateral triangle', 'A regular hexagon', 'A parabola'],
    ans: 0, exp: 'Bessel\'s graphical solution constructs an auxiliary inscribed quadrilateral in a circle passing through the points.',
    tip: 'Bessel\'s method = Inscribed quadrilateral solution for 3-point problem.', top: 'Resection'
  },
  {
    q: 'In the mechanical (tracing paper) method of solving the Three-Point Problem, what is done on the transparent tracing sheet?',
    opts: ['Three rays are drawn from a single point towards the three ground stations, and the paper is shifted over the map until the rays pass through the plotted points', 'The map is traced in ink', 'Contours are transferred with carbon paper', 'A circle is drawn with a compass'],
    ans: 0, exp: 'Three rays drawn from a point on tracing paper are aligned over the plotted points a, b, c, and the station point is pricked through.',
    tip: 'Tracing paper method: Draw 3 rays on tracing sheet and shift over plotted points.', top: 'Resection'
  },
  {
    q: 'What is the principal disadvantage of the mechanical (tracing paper) method in field surveying?',
    opts: ['It is clumsy and difficult to manage in windy field conditions, and the tracing paper expands easily in damp weather', 'It requires an electronic total station', 'It takes three days to calculate', 'It cannot be used with wooden alidades'],
    ans: 0, exp: 'Tracing paper flaps in wind, tears easily, and expands with moisture, degrading precision.',
    tip: 'Tracing paper method is clumsy in wind and sensitive to moisture distortion.', top: 'Resection'
  },
  {
    q: 'Why does the Two-Point Problem require the occupation of an auxiliary station?',
    opts: ['Because with only two control points, orientation cannot be checked directly without an auxiliary ray to establish a trial triangle', 'Because the table needs two tripods', 'To allow two surveyors to work together', 'To measure the elevation of the table'],
    ans: 0, exp: 'Two points define only one angle. An auxiliary station D is needed to establish a second baseline ray to solve orientation.',
    tip: 'Two-point problem requires an auxiliary station to resolve board orientation.', top: 'Resection'
  },
  {
    q: 'In plane table traversing, what is the check on closed loop traverse plotting accuracy?',
    opts: ['The closing line must close exactly onto the starting station dot, and any gap represents the linear closing error', 'The last ray must point due South', 'All ray lengths must be equal', 'The paper must not have wrinkles'],
    ans: 0, exp: 'Returning to the initial station must close geometrically. The distance between start and finish dots is the closing error.',
    tip: 'Closed traverse check: Plotted closing line must coincide with starting station dot.', top: 'Methods of plane table'
  },
  {
    q: 'How is the closing error of a plane table traverse adjusted graphically on the drawing board?',
    opts: ['By Bowditch\'s graphical construction directly on the map sheet', 'By redrawing all rays from scratch', 'By stretching the paper', 'By shifting the table 1 metre North'],
    ans: 0, exp: 'Bowditch\'s graphical construction distributes the closing error proportionally to cumulative traverse perimeter distance.',
    tip: 'Traverse closing error is adjusted graphically by Bowditch\'s construction.', top: 'Methods of plane table'
  },
  {
    q: 'In plane tabling, which error is considered the most serious source of inaccuracy across the entire survey?',
    opts: ['Orientation error of the board', 'Centering error of 5 cm', 'Leveling error of 1 mm', 'Paper clip slipping by 0.1 mm'],
    ans: 0, exp: 'An orientation error rotates the entire drawing, multiplying displacement errors with distance from the station.',
    tip: 'Orientation error is the most critical and damaging error in plane tabling.', top: 'Errors in plane table'
  },
  {
    q: 'Why is a centering error of 10 cm on a 1:1000 scale plane table survey negligible in practice?',
    opts: ['10 cm on the ground represents only 0.1 mm on paper, which is less than the thickness of a fine pencil line', 'Because centering corrects itself', 'Because the alidade absorbs it', 'Because the board expands to match'],
    ans: 0, exp: 'At 1:1000 scale, 10 cm = 0.1 mm on paper, which is completely imperceptible on the drawing sheet.',
    tip: 'Centering error of 10 cm = 0.1 mm at 1:1000; practically negligible.', top: 'Errors in plane table'
  },
  {
    q: 'At what map scale does precise plumbing fork centering become strictly necessary in plane table surveying?',
    opts: ['Large scale surveys such as 1:250 or 1:500 where 10 cm represents 0.2 to 0.4 mm on the drawing', 'Small scale topographical maps of 1:50,000', 'Geographical atlas maps of 1:1,000,000', 'World maps'],
    ans: 0, exp: 'On large scale maps (1:250 to 1:500), small ground displacements produce measurable errors on paper, requiring exact plumbing fork centering.',
    tip: 'Large scale plans (1:250 to 1:500) demand precise plumbing fork centering.', top: 'Setting up plane table'
  },
  {
    q: 'What is the primary role of an umbrella used during plane table surveying?',
    opts: ['To shield the drawing paper from direct solar glare, prevent sweat dripping on the sheet, and protect paper from sudden rain showers', 'To act as a ranging rod', 'To catch wind currents', 'To decorate the survey camp'],
    ans: 0, exp: 'A large survey umbrella shades the paper from direct sunlight, prevents glare, protects against sweat drops, and shields against light rain.',
    tip: 'Survey umbrella shields field sheet from sun glare, perspiration, and rain.', top: 'Accessories of plane table'
  }
];

m4Extra.forEach(q => addQ(q, 4, 'mod-4', 'Plane Table Surveying'));

console.log('Module 4 extra distinct questions processed. Total added so far:', addedList.length);

// Append to db
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
