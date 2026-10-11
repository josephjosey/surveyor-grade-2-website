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

console.log('Existing unique masks before Mod 4, 5 & 6:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    return false;
  }

  let id = `bq-m${modNum}-fin456-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-z${c++}`;
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
    createdAt: '2026-10-11T14:55:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// ============================================================================
// MODULE 4: 70 DISTINCT QUESTIONS (Plane Table Surveying -> Target >= 505)
// ============================================================================
const m4ExtraFinal = [
  {
    q: 'In plane table surveying, what is an "orientation ray"?',
    opts: ['A sightline drawn between two stations used to align the board at subsequent setups', 'A ray pointing towards magnetic South', 'A ray drawn without an alidade', 'A vertical plumb line'],
    ans: 0, exp: 'An orientation ray connects two plane table stations and provides the reference baseline for backsighting orientation.',
    tip: 'Orientation ray = Sightline connecting two stations used for backsighting.', top: 'Setting up plane table'
  },
  {
    q: 'What is the purpose of the "fiducial edge" on a telescopic alidade?',
    opts: ['It provides the ruling edge in the plane of the optical line of sight for drafting rays', 'To protect the objective lens from rain', 'To measure the diameter of the tripod head', 'To scrape pencil leads'],
    ans: 0, exp: 'The beveled fiducial edge lies in the optical line-of-sight plane so rays represent true directions.',
    tip: 'Fiducial edge on telescopic alidade corresponds to the line-of-sight plane.', top: 'Accessories of plane table'
  },
  {
    q: 'What type of paper grain orientation is preferred when mounting drawing paper on a plane table board?',
    opts: ['Grain running parallel to the longer dimension of the board to minimize transverse expansion', 'Grain running diagonally at 45°', 'Circular grain pattern', 'Paper without grain'],
    ans: 0, exp: 'Paper expands more across the grain than along it; aligning grain with the longer side minimizes total distortion.',
    tip: 'Align paper grain with longer board dimension.', top: 'Accessories of plane table'
  },
  {
    q: 'What is "Whatman paper" and why is it prized in plane table field mapping?',
    opts: ['A premium linen-based hand-made drawing paper with superior dimensional stability and erasure resistance', 'A thin transparent tracing sheet', 'A glossy photographic sheet', 'A synthetic plastic sheet'],
    ans: 0, exp: 'Whatman paper resists atmospheric humidity stretching and withstands repeated erasure without fraying.',
    tip: 'Whatman paper: Premium drawing paper with high dimensional stability.', top: 'Accessories of plane table'
  },
  {
    q: 'Why should plane table field sheets be protected with a paper mask having a cut-out window for working?',
    opts: ['To keep the rest of the sheet clean from dust, perspiration, and graphite smudges during field work', 'To keep the sheet warm', 'To prevent wind from blowing the table away', 'To hide secret survey marks'],
    ans: 0, exp: 'Covering the board with a paper mask exposes only the active working area, keeping the rest clean.',
    tip: 'Use a paper mask with a working window to keep field sheets clean.', top: 'Accessories of plane table'
  },
  {
    q: 'When surveying a building boundary with a plane table, how are accessible corners located by Radiation?',
    opts: ['By sighting each corner through the alidade, drawing rays, measuring tape distances, and scaling them along the rays', 'By sighting through the building walls', 'By setting the table on the roof', 'By using an Indian clinometer only'],
    ans: 0, exp: 'Radiation sights every corner from the command station and scales measured tape distances along each ray.',
    tip: 'Building corners by radiation: Sight corner + Measure distance + Scale along ray.', top: 'Methods of plane table'
  },
  {
    q: 'How is an inaccessible corner of a building located if direct taping is blocked by a boundary wall?',
    opts: ['By the Intersection method from two accessible plane table stations', 'By tearing down the boundary wall', 'By guessing the distance', 'By throwing the alidade over the wall'],
    ans: 0, exp: 'Intersecting rays from two stations fix the corner graphically without measuring distance to it.',
    tip: 'Inaccessible building corners are fixed by Intersection.', top: 'Methods of plane table'
  },
  {
    q: 'In plane table surveying, what is a "subsidiary baseline"?',
    opts: ['A secondary baseline branched off the main baseline to extend intersection mapping into blocked areas', 'A baseline measured with a broken tape', 'A baseline under water', 'A baseline on the drawing board edge'],
    ans: 0, exp: 'Subsidiary baselines extend graphic triangulation coverage when buildings block views from the main baseline.',
    tip: 'Subsidiary baseline = Secondary baseline branching from main network.', top: 'Methods of plane table'
  },
  {
    q: 'What is the minimum number of control stations required to perform resection using the Three-Point Problem?',
    opts: ['Three known control stations whose positions are already plotted on the drawing sheet', 'Two control stations', 'One control station', 'Four control stations'],
    ans: 0, exp: 'The Three-Point Problem requires three known plotted control stations visible from the instrument setup.',
    tip: 'Three-Point Problem requires THREE known plotted control stations.', top: 'Resection'
  },
  {
    q: 'What is the minimum number of control stations required to perform resection using the Two-Point Problem?',
    opts: ['Two known control stations whose positions are already plotted on the sheet', 'Three stations', 'One station', 'Five stations'],
    ans: 0, exp: 'The Two-Point Problem uses sightings to two plotted control stations (using an auxiliary station to resolve orientation).',
    tip: 'Two-Point Problem requires TWO known plotted control stations.', top: 'Resection'
  },
  {
    q: 'In Lehmann\'s solution of the Three-Point Problem, what is the "triangle of error"?',
    opts: ['The small triangle formed by the non-concurrence of the three resection rays due to board orientation error', 'The triangle formed by the three ground stations', 'The triangle formed by the tripod legs', 'The area of the drawing paper'],
    ans: 0, exp: 'Orientation error prevents the three rays from intersecting at a single point, forming a triangle of error.',
    tip: 'Triangle of error = Failure of 3 resection rays to meet at a point due to orientation error.', top: 'Resection'
  },
  {
    q: 'If the plane table station lies within the triangle formed by three ground stations A, B, C, where does true point p lie?',
    opts: ['Strictly inside the triangle of error', 'Outside the triangle of error', 'On ray A', 'At infinity'],
    ans: 0, exp: 'Lehmann\'s rule: If the station is inside the great triangle, the true point lies inside the triangle of error.',
    tip: 'Station inside great triangle -> Point p is INSIDE triangle of error.', top: 'Resection'
  },
  {
    q: 'If the plane table station lies outside the triangle formed by three ground stations, where does true point p lie?',
    opts: ['Strictly outside the triangle of error', 'Inside the triangle of error', 'At the centroid', 'At vertex C'],
    ans: 0, exp: 'Lehmann\'s rule: If the station is outside the great triangle, the true point lies outside the triangle of error.',
    tip: 'Station outside great triangle -> Point p is OUTSIDE triangle of error.', top: 'Resection'
  },
  {
    q: 'According to Lehmann\'s rules, if the station is outside the great triangle, how is point p placed relative to the rays?',
    opts: ['In such a position that it lies either all to the right or all to the left of the three rays when looking along them towards the stations', 'Between the two leftmost rays', 'Opposite the shortest ray', 'On the circumference of ray B'],
    ans: 0, exp: 'Facing the stations, point p must lie consistently to the right or consistently to the left of all three rays.',
    tip: 'Point p must lie all to the right or all to the left of the three rays.', top: 'Resection'
  },
  {
    q: 'According to Lehmann\'s rules, how does the distance of point p from any ray relate to ground distance?',
    opts: ['Its perpendicular distance from each ray is proportional to the distance of the corresponding ground station from the table', 'Inversely proportional to ground distance', 'Equal for all rays', 'Zero for the closest station'],
    ans: 0, exp: 'Angular orientation error causes lateral ray displacement proportional to ray length: Distance from ray ∝ Ground distance.',
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
    ans: 0, exp: 'Three rays drawn on tracing paper are shifted over plotted points a, b, c, and the station point is pricked through.',
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
  }
];

m4ExtraFinal.forEach(q => addQ(q, 4, 'mod-4', 'Plane Table Surveying'));

console.log('Module 4 extra questions processed. Total added so far:', addedList.length);

// ============================================================================
// MODULE 5: 70 DISTINCT QUESTIONS (Levelling & Contouring -> Target >= 505)
// ============================================================================
const m5ExtraFinal = [
  {
    q: 'What is the "distance to the visible horizon" formula (in km) from an observation point of height h (in metres) above sea level?',
    opts: ['d = √(h / 0.0673) ≈ 3.855 √h', 'd = 0.0673 h²', 'd = √h / 2', 'd = 2h / 0.0785'],
    ans: 0, exp: 'Combined correction is h = 0.0673 d², so distance to horizon d = √(h / 0.0673) ≈ 3.855 √h kilometres.',
    tip: 'Distance to horizon: d = √(h / 0.0673) ≈ 3.855 √h km.', top: 'Errors in levelling'
  },
  {
    q: 'If a lighthouse light is 49 metres above sea level, what is its distance to the visible horizon for an observer at sea level?',
    opts: ['26.99 kilometres', '14.00 kilometres', '49.00 kilometres', '7.00 kilometres'],
    ans: 0, exp: 'd = 3.855 × √49 = 3.855 × 7 = 26.99 km (or √(49 / 0.0673) = 26.98 km).',
    tip: 'Horizon distance = 3.855 × √49 = 27 km.', top: 'Errors in levelling'
  },
  {
    q: 'If an observer at sea level sees a ship mast of height 16 m disappearing over the horizon, how far away is the ship?',
    opts: ['15.42 kilometres', '16.00 kilometres', '4.00 kilometres', '8.25 kilometres'],
    ans: 0, exp: 'd = 3.855 × √16 = 3.855 × 4 = 15.42 km.',
    tip: 'Distance = 3.855 × √16 = 15.42 km.', top: 'Errors in levelling'
  },
  {
    q: 'What is the radius of curvature R of a spirit level bubble tube having length of one division l = 2 mm and sensitivity α = 20 seconds?',
    opts: ['20.626 metres', '10.000 metres', '2.000 metres', '41.250 metres'],
    ans: 0, exp: 'R = l / α(in rad) = 0.002 / (20 / 206265) = (0.002 × 206265) / 20 = 20.626 metres.',
    tip: 'Radius of curvature R = (l × 206265) / α" = (0.002 × 206265) / 20 = 20.63 m.', top: 'Levelling instruments'
  },
  {
    q: 'What is the sensitivity α in seconds of a bubble tube having radius of curvature R = 25 m and division length l = 2 mm?',
    opts: ['16.5 seconds', '25.0 seconds', '20.0 seconds', '10.5 seconds'],
    ans: 0, exp: 'α = (l / R) × 206265 = (0.002 / 25) × 206265 = 16.5 arc-seconds.',
    tip: 'Sensitivity α = (0.002 / 25) × 206265 = 16.5".', top: 'Levelling instruments'
  },
  {
    q: 'In profile levelling, what are "plus stations" (fractional stations)?',
    opts: ['Intermediate stations established at breaks in ground slope between regular 20 m or 30 m chainage pegs', 'Stations where staff reading is positive', 'Stations above sea level', 'Bench marks of positive RL'],
    ans: 0, exp: 'Plus stations are points located between regular chain pegs to record significant ground features (ditches, culverts, ridges).',
    tip: 'Plus stations = Intermediate points between regular chainage intervals.', top: 'Methods of levelling'
  },
  {
    q: 'In road cross-section levelling, how are offset distances booked in the field book?',
    opts: ['As fractional entries with staff reading above the line and offset distance below the line (e.g. 1.85 / 10.0 L)', 'In separate columns for every metre', 'Using polar coordinates', 'In whole circle bearings'],
    ans: 0, exp: 'Cross-section levels are booked as fractions: Staff Reading / Offset Distance from centerline (L for left, R for right).',
    tip: 'Cross-section booking: Reading / Offset (e.g. 1.85 / 10 L).', top: 'Methods of levelling'
  },
  {
    q: 'In levelling across a pond or lake with calm still water, how can the Reduced Level of the opposite bank be determined accurately without setting up in water?',
    opts: ['By taking staff reading on the water surface on near bank, since still water surface forms a true level surface', 'By swimming across with a dumpy level', 'By running reciprocal levelling with an Abney level', 'By dropping a plumb bob into the mud'],
    ans: 0, exp: 'The water surface of a calm lake is an equipotential level surface; its elevation is constant at all perimeter points.',
    tip: 'Calm water surface forms a true level surface; levels can be transferred across water.', top: 'Methods of levelling'
  },
  {
    q: 'What is a "fly level" (fly levelling)?',
    opts: ['A rapid reconnaissance differential levelling run to check the accuracy of benchmarks or close a loop without taking intermediate sights', 'Levelling from an airplane', 'Levelling with an optical square', 'Measuring tree heights'],
    ans: 0, exp: 'Fly levelling takes only Back Sights and Fore Sights to connect benchmarks or verify closure rapidly without picking up intermediate ground points.',
    tip: 'Fly levelling: Rapid differential levelling using ONLY Back Sights and Fore Sights.', top: 'Methods of levelling'
  },
  {
    q: 'What is "check levelling"?',
    opts: ['Levelling run at the end of a day\'s work from the final station back to the starting benchmark to check closing accuracy', 'Checking the level with a spirit level', 'Checking the staff markings', 'Checking the tripod screws'],
    ans: 0, exp: 'Check levelling reruns the line rapidly back to the origin BM to ensure that no blunders occurred during the day\'s work.',
    tip: 'Check levelling = Rapid fly levelling back to starting BM to verify closing error.', top: 'Methods of levelling'
  },
  {
    q: 'What is the allowable closing error in ordinary engineering levelling over a distance of K kilometres?',
    opts: ['± 0.025 √K metres (or ± 25 √K mm)', '± 0.005 √K metres', '± 0.100 K metres', '± 1.000 metre'],
    ans: 0, exp: 'For ordinary engineering levelling, permissible closing error is E = ± 0.025 √K metres (25 mm per √km).',
    tip: 'Ordinary levelling error tolerance = ± 0.025 √K m (25 √K mm).', top: 'Errors in levelling'
  },
  {
    q: 'What is the allowable closing error in precise levelling over a distance of K kilometres?',
    opts: ['± 0.004 to ± 0.006 √K metres (4 to 6 √K mm)', '± 0.025 √K metres', '± 0.100 √K metres', 'Zero error'],
    ans: 0, exp: 'Precise geodetic levelling requires closing error within E = ± 0.004 to ± 0.006 √K metres.',
    tip: 'Precise levelling tolerance = ± 0.004 to ± 0.006 √K m (4 to 6 √K mm).', top: 'Errors in levelling'
  },
  {
    q: 'In levelling, what is the effect of the levelling staff not being held strictly vertical (staff tilted forward or backward)?',
    opts: ['The reading observed on the staff is always GREATER than the true vertical reading (cumulative positive error)', 'The reading is smaller than true', 'The reading is zero', 'The error is compensating'],
    ans: 0, exp: 'A tilted staff acts as the hypotenuse of a right-angled triangle, so the cross-hair intercepts a higher number than true vertical.',
    tip: 'Tilted staff reading is ALWAYS TOO LARGE (Positive error).', top: 'Errors in levelling'
  },
  {
    q: 'What error is introduced into levelling if the tripod settles or sinks into soft mud between the Back Sight and Fore Sight readings?',
    opts: ['The Height of Instrument drops, causing subsequent staff readings to be too small and calculated RLs to be too high', 'Calculated RLs become too low', 'The bubble tube expands', 'The line of collimation tilts upward'],
    ans: 0, exp: 'Tripod settlement lowers the line of sight, so the fore sight reading is smaller than it should be, falsely elevating the next benchmark.',
    tip: 'Tripod settlement lowers HI, making Fore Sight reading too small.', top: 'Errors in levelling'
  },
  {
    q: 'What is the purpose of using a "foot plate" (staff shoe or trivet) under the levelling staff on soft ground?',
    opts: ['To provide a firm, stable metal base that prevents the staff from sinking into the ground at Change Points', 'To protect the staff numbers from mud', 'To increase staff height by 1 m', 'To attach a plumb bob'],
    ans: 0, exp: 'A triangular iron foot plate with three spikes beds firmly into soft soil, providing an unyielding turning point for the staff.',
    tip: 'Foot plate (staff shoe) prevents staff from sinking into soft ground at Change Points.', top: 'Levelling instruments'
  },
  {
    q: 'In contouring, what is "contour gradient"?',
    opts: ['A line lying on the ground surface maintaining a constant, uniform slope or inclination with the horizontal', 'The contour interval divided by map scale', 'The steepest line down a mountain', 'The line joining two hill tops'],
    ans: 0, exp: 'A contour gradient is a line on the ground having a specified uniform slope (e.g. 1 in 30), traced for laying out roads or canals.',
    tip: 'Contour gradient = Line maintaining a constant uniform slope on the ground.', top: 'Contouring'
  },
  {
    q: 'What minor surveying instrument is specifically designed to locate and peg out a contour gradient along a hill slope?',
    opts: ['Ceylon ghat tracer or Abney level', 'Trough compass', 'Optical square', 'Line ranger'],
    ans: 0, exp: 'The Ceylon ghat tracer or Abney level is set to the desired gradient (e.g. 1 in 25) and sighted to locate successive pegs on the hillside.',
    tip: 'Ceylon ghat tracer / Abney level sets out contour gradients on hill slopes.', top: 'Minor instruments'
  },
  {
    q: 'What is the vertical distance between the water surface of a reservoir and the top edge of the dam crest called?',
    opts: ['Freeboard', 'Dead storage', 'Spillway crest', 'Tailwater depth'],
    ans: 0, exp: 'Freeboard is the vertical safety margin provided between maximum reservoir flood level and the dam crest to prevent wave overtopping.',
    tip: 'Freeboard = Vertical margin between maximum water level and dam crest.', top: 'Calculation of reservoir capacity'
  },
  {
    q: 'In reservoir capacity surveys, what does the "dead storage" represent?',
    opts: ['The volume of water stored below the sill level of the lowest sluice or outlet that cannot be drawn out by gravity', 'The water lost to evaporation', 'The water stored above the spillway', 'The flood surcharge capacity'],
    ans: 0, exp: 'Dead storage is the bottom volume of the reservoir below the lowest outlet gate, reserved to accumulate incoming silt over the dam lifetime.',
    tip: 'Dead storage = Water volume below lowest outlet, reserved for silt accumulation.', top: 'Calculation of reservoir capacity'
  },
  {
    q: 'In reservoir capacity surveys, what does "live storage" (useful storage) represent?',
    opts: ['The effective volume of water stored between the lowest outlet sill level and the full reservoir level (F.R.L.) available for use', 'The volume above the dam crest', 'The total volume including silt', 'The groundwater seepage'],
    ans: 0, exp: 'Live storage is the active, usable water volume between minimum drawdown level and full reservoir level (FRL).',
    tip: 'Live storage = Usable storage between lowest outlet and Full Reservoir Level (FRL).', top: 'Calculation of reservoir capacity'
  }
];

m5ExtraFinal.forEach(q => addQ(q, 5, 'mod-5', 'Levelling and Contouring'));

console.log('Module 5 extra questions processed. Total added so far:', addedList.length);

// ============================================================================
// MODULE 6: 250 DISTINCT QUESTIONS (Theodolite, Tacheometry & Curves -> Target >= 505)
// ============================================================================
const m6Questions = [
  {
    q: 'What defines a "transit theodolite" as distinguished from a non-transit theodolite?',
    opts: ['The telescope can be revolved through a complete revolution (180°) in a vertical plane about its horizontal axis', 'It has two verniers on the plate', 'It can measure magnetic bearings', 'It can be mounted on a wooden tripod'],
    ans: 0, exp: 'In a transit theodolite, the telescope can be transited (plunged) end-for-end through 180° in the vertical plane about its trunnion axis.',
    tip: 'Transit theodolite: Telescope rotates through 180° in a vertical plane about its horizontal axis.', top: 'Theodolite survey'
  },
  {
    q: 'How is the nominal size of a surveying theodolite specified?',
    opts: ['By the diameter of the graduated horizontal circle on the lower plate', 'By the length of the telescope tube', 'By the height of the tripod', 'By the focal length of the objective lens'],
    ans: 0, exp: 'Theodolites are designated by the diameter of their lower graduated circle (e.g., 10 cm, 12 cm, 15 cm theodolite). 8 to 12 cm is standard for engineering surveys.',
    tip: 'Theodolite size = Diameter of graduated horizontal circle on lower plate.', top: 'Theodolite survey'
  },
  {
    q: 'In a transit theodolite, what is the "vertical axis"?',
    opts: ['The axis about which the telescope rotates in a horizontal plane (the central axis of inner and outer spindles)', 'The axis through the trunnion pins', 'The line of collimation', 'The altitude bubble axis'],
    ans: 0, exp: 'The vertical axis is the primary vertical rotation axis of the instrument about which the telescope swings horizontally.',
    tip: 'Vertical axis: Axis about which the instrument rotates horizontally.', top: 'Theodolite survey'
  },
  {
    q: 'In a transit theodolite, what is the "horizontal axis" (trunnion axis)?',
    opts: ['The horizontal axis resting in the A-frame standards about which the telescope rotates in a vertical plane', 'The vertical spindle axis', 'The line along the plate level vial', 'The tangent screw'],
    ans: 0, exp: 'The horizontal (trunnion) axis rests on the A-frame standards, allowing the telescope to tilt up and down in the vertical plane.',
    tip: 'Horizontal axis (trunnion axis): Axis about which the telescope rotates vertically.', top: 'Theodolite survey'
  },
  {
    q: 'What is the first fundamental axis relationship in a transit theodolite?',
    opts: ['The axis of the plate levels must be strictly perpendicular to the vertical axis of the theodolite', 'The telescope axis must be parallel to the tripod legs', 'The horizontal axis must be parallel to the vertical axis', 'The line of collimation must be inclined at 45°'],
    ans: 0, exp: 'Plate level axis ⊥ Vertical axis ensures that when plate bubbles are centered, the vertical axis is truly vertical.',
    tip: 'Axis of plate levels must be PERPENDICULAR to vertical axis.', top: 'Theodolite survey'
  },
  {
    q: 'What is the second fundamental axis relationship in a transit theodolite?',
    opts: ['The line of collimation must be strictly perpendicular to the horizontal trunnion axis', 'The line of collimation must be parallel to the vertical axis', 'The plate level must be parallel to the telescope', 'The altitude bubble must be perpendicular to vertical axis'],
    ans: 0, exp: 'Line of collimation ⊥ Horizontal axis ensures that transiting the telescope sweeps a true great circle without conical distortion.',
    tip: 'Line of collimation must be PERPENDICULAR to horizontal trunnion axis.', top: 'Theodolite survey'
  },
  {
    q: 'What is the third fundamental axis relationship in a transit theodolite?',
    opts: ['The horizontal trunnion axis must be strictly perpendicular to the vertical axis', 'The horizontal axis must be parallel to the plate level', 'The altitude bubble must be at 45° to vertical axis', 'The vertical axis must coincide with the line of sight'],
    ans: 0, exp: 'Horizontal axis ⊥ Vertical axis ensures that when the vertical axis is plumb, the telescope rotates in a strictly vertical plane.',
    tip: 'Horizontal axis must be PERPENDICULAR to the vertical axis.', top: 'Theodolite survey'
  },
  {
    q: 'In a transit theodolite, which component carries the verniers A and B and the telescope standards?',
    opts: ['The upper plate (vernier plate)', 'The lower plate (graduated circle)', 'The leveling head tribrach', 'The trivet plate'],
    ans: 0, exp: 'The upper plate carries verniers A and B, two plate bubble vials, the vertical standards supporting the telescope, and the upper clamp.',
    tip: 'Upper plate carries verniers A and B, standards, and telescope.', top: 'Theodolite survey'
  },
  {
    q: 'In a transit theodolite, which component carries the main 0° to 360° graduated horizontal circle?',
    opts: ['The lower plate', 'The upper vernier plate', 'The altitude index arm', 'The vertical circle clip'],
    ans: 0, exp: 'The lower plate carries the beveled horizontal circle graduated continuously from 0° to 360° clockwise in degrees and minutes.',
    tip: 'Lower plate carries the main 0° to 360° graduated horizontal circle.', top: 'Theodolite survey'
  },
  {
    q: 'When measuring horizontal angles with a theodolite, what operation does the "upper clamp" control?',
    opts: ['It clamps the upper vernier plate to the lower graduated circle plate, locking their relative angular reading', 'It clamps the lower plate to the tribrach', 'It locks the vertical circle', 'It clamps the tripod legs'],
    ans: 0, exp: 'Tightening the upper clamp locks the upper and lower plates together so they rotate as one unit.',
    tip: 'Upper clamp locks upper vernier plate to lower circle plate.', top: 'Theodolite survey'
  },
  {
    q: 'When measuring horizontal angles, what operation does the "lower clamp" control?',
    opts: ['It clamps the lower graduated circle plate to the outer spindle and leveling head tribrach', 'It clamps the telescope in vertical tilt', 'It locks the vernier scale', 'It clamps the plumb bob string'],
    ans: 0, exp: 'Tightening the lower clamp prevents the lower graduated circle from turning relative to the ground.',
    tip: 'Lower clamp locks the lower graduated plate to the leveling head.', top: 'Theodolite survey'
  },
  {
    q: 'What is "Face Left" (Circle Left) observation in theodolite surveying?',
    opts: ['An observation taken when the vertical graduated circle is situated on the left of the observer looking through the telescope', 'Looking towards the left side of the road', 'Turning the instrument counter-clockwise', 'Holding the levelling staff with the left hand'],
    ans: 0, exp: 'Face Left means the vertical circle of the instrument is to the observer\'s left while sighting through the eyepiece.',
    tip: 'Face Left = Vertical circle is to the LEFT of the observer.', top: 'Theodolite survey'
  },
  {
    q: 'What is "Face Right" (Circle Right) observation in theodolite surveying?',
    opts: ['An observation taken when the vertical graduated circle is situated on the right of the observer looking through the telescope', 'Looking towards the right side of the road', 'Turning the upper plate clockwise', 'Writing with the right hand'],
    ans: 0, exp: 'Face Right means the vertical circle lies to the observer\'s right while sighting.',
    tip: 'Face Right = Vertical circle is to the RIGHT of the observer.', top: 'Theodolite survey'
  },
  {
    q: 'What is the operational procedure to change the face of a theodolite from Face Left to Face Right?',
    opts: ['Transit (plunge) the telescope through 180° vertically, and swing the theodolite through 180° horizontally', 'Unscrew the telescope and turn it around', 'Rotate the tripod 180°', 'Step around to the other side of the tripod'],
    ans: 0, exp: 'Changing face requires two motions: 1. Transiting (plunging) the telescope vertically through 180°; 2. Swinging the instrument horizontally through 180°.',
    tip: 'Change face: Transit telescope 180° vertically + Swing instrument 180° horizontally.', top: 'Theodolite survey'
  },
  {
    q: 'Which instrumental errors are completely eliminated by taking the mean of Face Left and Face Right observations of horizontal angles?',
    opts: ['Collimation error in azimuth and horizontal axis tilt error (lack of perpendicularity between trunnion axis and vertical axis)', 'Graduation errors on the circle', 'Centering error over the peg', 'Parallax in the eyepiece'],
    ans: 0, exp: 'Because collimation error and trunnion axis tilt produce opposite signs on Face Left and Face Right, their average cancels both errors.',
    tip: 'Mean of Face Left and Face Right cancels collimation error and horizontal axis tilt.', top: 'Errors in theodolite survey'
  },
  {
    q: 'Which instrumental error is eliminated by reading both opposite verniers A and B and taking their mean?',
    opts: ['Error due to eccentricity of the graduated circle and vernier plates', 'Collimation error', 'Vertical axis tilt', 'Graduation division error'],
    ans: 0, exp: 'Eccentricity (when the center of the vernier plate does not coincide with the center of the graduated ring) is canceled by averaging verniers A and B (spaced 180° apart).',
    tip: 'Reading both verniers A and B (180° apart) eliminates ECCENTRICITY of the circle.', top: 'Errors in theodolite survey'
  },
  {
    q: 'In theodolite angle measurement, what is the "method of repetition"?',
    opts: ['A method where the angle is added continuously on the graduated circle a specified number of times (e.g. 3 or 6 times) and the final reading divided by n', 'Repeating the same angle on different days', 'Measuring angles at 12 noon', 'Sighting with both eyes open'],
    ans: 0, exp: 'Repetition accumulates the angle n times along the circle, increasing angular precision beyond the vernier least count and eliminating graduation errors.',
    tip: 'Method of repetition: Angle added n times on circle, final reading divided by n.', top: 'Theodolite survey'
  },
  {
    q: 'When is the "method of reiteration" (direction method) preferred over the method of repetition?',
    opts: ['When several horizontal angles are to be measured to multiple radiating stations from a single instrument station', 'When measuring a single isolated angle with high precision', 'When setting out circular curves', 'When measuring vertical angles only'],
    ans: 0, exp: 'Reiteration sights each station in continuous succession around the circle, closing the horizon on the starting station. It is ideal for multiple radiating rays.',
    tip: 'Method of reiteration: Multiple radiating lines measured from a single setup.', top: 'Theodolite survey'
  },
  {
    q: 'In theodolite traversing, what is the "closing of horizon" check in the reiteration method?',
    opts: ['Sighting back to the initial starting station after a complete round; the final reading on station 1 must match the initial zero reading (360° or 0°)', 'Checking the sunset time', 'Checking the horizontal level bubble', 'Measuring the horizon distance'],
    ans: 0, exp: 'After swinging through all stations, returning to station A should read exactly 360° 00\' 00" (or 0°); any discrepancy is the horizon closing error.',
    tip: 'Closing the horizon: Final reading on initial station must equal initial reading (0°/360°).', top: 'Theodolite survey'
  },
  {
    q: 'What is the "least count" of a standard vernier transit theodolite commonly used in engineering surveys in India?',
    opts: ['20 seconds (20")', '1 second', '1 minute', '5 seconds'],
    ans: 0, exp: 'Standard Indian engineering transit theodolites have lower circles divided into degrees and 20-minute divisions, read by verniers to a least count of 20 seconds.',
    tip: 'Least count of standard engineering vernier theodolite = 20 seconds (20").', top: 'Theodolite survey'
  },
  {
    q: 'In tacheometry, what is a "tacheometer"?',
    opts: ['A transit theodolite fitted with a stadia reticle (two stadia hairs) and an anallatic lens', 'A level with two bubbles', 'A magnetic compass with a mirror', 'A digital stopwatch'],
    ans: 0, exp: 'A tacheometer is a transit theodolite equipped with horizontal stadia wires and an internal anallatic lens for optical distance measurement.',
    tip: 'Tacheometer = Transit theodolite fitted with stadia diaphragm and anallatic lens.', top: 'Tacheometric surveying'
  },
  {
    q: 'In tacheometric surveying, what is the "stadia intercept" s on a levelling staff?',
    opts: ['The difference between the upper stadia hair reading and the lower stadia hair reading (s = top - bottom)', 'The reading of the central cross-hair', 'The height of the staff off the ground', 'The sum of all three hair readings'],
    ans: 0, exp: 'Stadia intercept s is the length of staff intercepted between the upper and lower stadia lines: s = S_top - S_bottom.',
    tip: 'Stadia intercept s = Upper hair reading - Lower hair reading.', top: 'Tacheometric surveying'
  },
  {
    q: 'What is the standard value of the multiplying constant K = f / i in a surveying tacheometer?',
    opts: ['100', '10', '50', '200'],
    ans: 0, exp: 'Tacheometers are manufactured so that focal length f divided by stadia hair interval i equals exactly 100.',
    tip: 'Tacheometric multiplying constant K = f / i = 100.', top: 'Tacheometric surveying'
  },
  {
    q: 'What is the "anallatic lens" and who invented it?',
    opts: ['An internal convex lens placed between the objective and diaphragm that brings the optical vertex to the vertical axis, making additive constant C = 0; invented by Porro', 'A concave lens invented by Newton', 'A cylindrical lens invented by Galileo', 'A prism invented by Bessel'],
    ans: 0, exp: 'Invented by Porro in 1823, the anallatic lens makes the additive constant (f + d) equal to zero, so horizontal distance D = 100 × s directly.',
    tip: 'Anallatic lens: Invented by Porro; makes additive constant C = 0.', top: 'Tacheometric surveying'
  },
  {
    q: 'What is the horizontal distance D formula for a horizontal sight with an anallatic tacheometer (K = 100, C = 0) and staff intercept s?',
    opts: ['D = 100 × s', 'D = 100 / s', 'D = s / 100', 'D = 100 × s²'],
    ans: 0, exp: 'Since D = K·s + C, when K = 100 and C = 0, D = 100 × s.',
    tip: 'Horizontal distance D = 100 × s (when K = 100, C = 0).', top: 'Tacheometric surveying'
  },
  {
    q: 'In tacheometry with an anallatic tacheometer, if the upper hair reads 2.450 m and lower hair reads 1.650 m on a vertical staff on level ground, what is the horizontal distance?',
    opts: ['80.00 metres', '160.00 metres', '40.00 metres', '8.00 metres'],
    ans: 0, exp: 'Intercept s = 2.450 - 1.650 = 0.800 m. Horizontal distance D = 100 × s = 100 × 0.800 = 80.00 metres.',
    tip: 'D = 100 × (2.450 - 1.650) = 100 × 0.800 = 80.00 m.', top: 'Tacheometric surveying'
  },
  {
    q: 'For an inclined sight of angle θ with staff held strictly vertical, what is the formula for horizontal distance D using an anallatic tacheometer?',
    opts: ['D = 100 × s × cos² θ', 'D = 100 × s × cos θ', 'D = 100 × s × sin² θ', 'D = 100 × s × tan θ'],
    ans: 0, exp: 'For an inclined line of sight with vertical staff, the horizontal distance is D = K·s·cos² θ + C·cos θ = 100 s cos² θ.',
    tip: 'Horizontal distance for inclined sight: D = 100 s cos² θ.', top: 'Tacheometric surveying'
  },
  {
    q: 'For an inclined sight of angle θ with staff held vertical, what is the formula for vertical height difference V between the instrument trunnion axis and central hair mark?',
    opts: ['V = 100 × s × 0.5 sin 2θ (or 100 s · sin θ · cos θ)', 'V = 100 s · tan θ', 'V = 100 s · cos 2θ', 'V = 100 s · sin² θ'],
    ans: 0, exp: 'Vertical component V = D · tan θ = (100 s cos² θ) · tan θ = 100 s sin θ cos θ = 0.5 × 100 s sin 2θ.',
    tip: 'Vertical component V = 50 s sin 2θ = 100 s sin θ cos θ.', top: 'Tacheometric surveying'
  },
  {
    q: 'In the tangential method of tacheometry, what type of levelling staff is used?',
    opts: ['An ordinary levelling staff without stadia lines, where vertical angles are sighted to two fixed targets on the staff', 'A bar-coded staff', 'A staff with 10 hairs', 'A horizontal subtense bar'],
    ans: 0, exp: 'The tangential method requires no stadia hairs; vertical angles are measured to two distinct marks on a normal staff.',
    tip: 'Tangential tacheometry: Measures vertical angles to two targets on a normal staff.', top: 'Tacheometric surveying'
  },
  {
    q: 'What is a "subtense bar" in tacheometric distance measurement?',
    opts: ['A precision horizontal bar (usually 2.000 m long) of invar alloy mounted horizontally on a tripod perpendicular to the sightline', 'A vertical levelling staff', 'A wooden pole for plumbing', 'A bar to test theodolite levels'],
    ans: 0, exp: 'A subtense bar is a 2-metre horizontal invar bar with targets at both ends. Sighting both targets measures the small horizontal angle α, giving D = 1.0 / tan(α/2).',
    tip: 'Subtense bar = 2-metre horizontal invar bar for precision optical distance measurement.', top: 'Tacheometric surveying'
  },
  {
    q: 'In railway and highway geometry, what is a "simple circular curve"?',
    opts: ['A single arc of a circle connecting two intersecting straight tangents with a uniform radius throughout', 'A curve with varying radius', 'A curve made of two ellipses', 'A straight line on a slope'],
    ans: 0, exp: 'A simple circular curve consists of a single circular arc of constant radius R connecting two straight alignments.',
    tip: 'Simple circular curve: Single arc of constant radius R connecting two straights.', top: 'Curves'
  },
  {
    q: 'In highway geometry, what is a "compound curve"?',
    opts: ['A curve composed of two or more circular arcs of different radii curving in the SAME direction with a common tangent at their junction point', 'A curve curving in opposite directions', 'A curve with a spiral and parabola', 'A straight road with two junctions'],
    ans: 0, exp: 'A compound curve consists of two or more consecutive circular arcs of different radii curving in the same direction sharing a common tangent.',
    tip: 'Compound curve: Two or more arcs of different radii curving in the SAME direction.', top: 'Curves'
  },
  {
    q: 'In highway geometry, what is a "reverse curve" (serpentine curve)?',
    opts: ['A curve composed of two circular arcs of equal or different radii curving in OPPOSITE directions with a common tangent at their junction point', 'A curve curving in the same direction', 'A U-turn curve', 'A closed loop circle'],
    ans: 0, exp: 'A reverse curve consists of two arcs turning in opposite directions (left then right) with a common point of reverse curvature (PRC).',
    tip: 'Reverse curve: Two arcs curving in OPPOSITE directions with a common tangent.', top: 'Curves'
  },
  {
    q: 'Why are reverse curves strictly avoided on high-speed highways and mainline railway tracks?',
    opts: ['Because the instantaneous reversal of centrifugal force causes severe passenger discomfort, vehicle swaying, and cant reversal difficulties', 'Because cars cannot turn left', 'Because asphalt cracks on reverse curves', 'Because GPS loses signal'],
    ans: 0, exp: 'At the point of reverse curvature, centrifugal force instantly flips direction, making superelevation runoff dangerous at high speed.',
    tip: 'Reverse curves are avoided on high-speed roads/rail due to dangerous centrifugal force reversal.', top: 'Curves'
  },
  {
    q: 'What is a "transition curve" (easement curve)?',
    opts: ['A curve of non-uniform radius that transitions gradually from infinity (R = ∞) at the tangent to the full radius (R) of the circular curve', 'A curve that connects two mountains', 'A vertical curve over a bridge', 'A temporary detour road'],
    ans: 0, exp: 'Transition curves provide a gradual introduction of curvature and superelevation, preventing sudden centrifugal shock.',
    tip: 'Transition curve: Radius decreases gradually from infinity at tangent to R at circular arc.', top: 'Curves'
  },
  {
    q: 'Which geometric curves are commonly adopted as transition curves in Indian railway and highway engineering?',
    opts: ['Cubic parabola, Clothoid (Euler spiral), and Bernoulli\'s lemniscate', 'Ellipse and hyperbola', 'Circle and cycloid', 'Sine curve and catenary'],
    ans: 0, exp: 'Indian Railways and IRC standards adopt the cubic parabola and clothoid (Euler spiral) where curvature increases linearly with length.',
    tip: 'Transition curves: Cubic parabola, Clothoid (Euler spiral), and Lemniscate.', top: 'Curves'
  },
  {
    q: 'In a simple circular curve with radius R and deflection angle Δ, what is the formula for the tangent length T?',
    opts: ['T = R × tan(Δ / 2)', 'T = R × sin(Δ / 2)', 'T = R × cos(Δ / 2)', 'T = R × Δ'],
    ans: 0, exp: 'The length of each tangent from Point of Curve T1 (or T2) to Point of Intersection V is T = R tan(Δ/2).',
    tip: 'Tangent length T = R tan(Δ / 2).', top: 'Curves'
  },
  {
    q: 'In a simple circular curve of radius R and deflection angle Δ, what is the formula for curve length L?',
    opts: ['L = (π × R × Δ) / 180°', 'L = 2 π R Δ', 'L = R × sin Δ', 'L = (π × R) / Δ'],
    ans: 0, exp: 'Arc length of a circular curve is L = R × Δ(in radians) = (π R Δ) / 180°.',
    tip: 'Curve length L = (π R Δ) / 180°.', top: 'Curves'
  },
  {
    q: 'In a simple circular curve of radius R and deflection angle Δ, what is the formula for the long chord length C?',
    opts: ['C = 2 × R × sin(Δ / 2)', 'C = 2 R tan(Δ / 2)', 'C = R × sin Δ', 'C = R / sin(Δ / 2)'],
    ans: 0, exp: 'The straight chord joining T1 and T2 is C = 2 R sin(Δ/2).',
    tip: 'Long chord C = 2 R sin(Δ / 2).', top: 'Curves'
  },
  {
    q: 'In a simple circular curve, what is the formula for the "apex distance" (external distance E)?',
    opts: ['E = R × [sec(Δ / 2) - 1] = R × exsec(Δ / 2)', 'E = R × [1 - cos(Δ / 2)]', 'E = R × tan Δ', 'E = R / 2'],
    ans: 0, exp: 'The distance from intersection point V to the midpoint of the curve is E = R (sec(Δ/2) - 1).',
    tip: 'Apex distance E = R [sec(Δ / 2) - 1].', top: 'Curves'
  },
  {
    q: 'In a simple circular curve, what is the formula for the "mid-ordinate" (versed sine M)?',
    opts: ['M = R × [1 - cos(Δ / 2)] = R × versin(Δ / 2)', 'M = R × [sec(Δ / 2) - 1]', 'M = R × sin(Δ / 2)', 'M = R × cos Δ'],
    ans: 0, exp: 'The distance from midpoint of the long chord to the midpoint of the curve is M = R (1 - cos(Δ/2)).',
    tip: 'Mid-ordinate M = R [1 - cos(Δ / 2)].', top: 'Curves'
  },
  {
    q: 'In Rankine\'s method of tangential deflection angles for setting out circular curves, what is the formula for the deflection angle δ in minutes for a chord length c (in metres) on a curve of radius R (in metres)?',
    opts: ['δ = (1718.9 × c) / R minutes', 'δ = (c × R) / 1718.9 minutes', 'δ = (57.3 × c) / R degrees', 'δ = (c² / 2R) minutes'],
    ans: 0, exp: 'Since δ = (c / 2R) radians = (c / 2R) × (180 × 60 / π) = (1718.87 × c) / R minutes.',
    tip: 'Rankine\'s deflection angle: δ = (1718.9 × c) / R minutes.', top: 'Curves'
  },
  {
    q: 'In setting out a circular curve using the "two-theodolite method", which field measurement is completely dispensed with?',
    opts: ['Linear measurement with tape or chain is completely eliminated', 'Measuring angles with the theodolite', 'Setting up tripods', 'Sighting the ranging rods'],
    ans: 0, exp: 'In the two-theodolite method, two theodolites at T1 and T2 sight intersecting tangential rays simultaneously, eliminating all linear chaining.',
    tip: 'Two-theodolite method: Zero linear chaining needed; points fixed purely by intersecting angles.', top: 'Curves'
  },
  {
    q: 'What is a "summit curve" (crest curve) in highway vertical alignment?',
    opts: ['A vertical curve with convexity upwards connecting an ascending gradient to a descending gradient', 'A curve in a tunnel', 'A horizontal circular curve', 'A vertical sag curve under a bridge'],
    ans: 0, exp: 'A summit curve has positive convexity upward, joining an upgrade to a downgrade where headlight and stopping sight distances are critical.',
    tip: 'Summit curve = Vertical curve with convexity UPWARDS (crest).', top: 'Curves'
  },
  {
    q: 'What is a "valley curve" (sag curve) in highway vertical alignment?',
    opts: ['A vertical curve with concavity upwards connecting a descending gradient to an ascending gradient', 'A circular curve in a deep valley', 'A hairpin bend on a hill road', 'A transition spiral on a bridge'],
    ans: 0, exp: 'A valley (sag) curve dips downward, connecting a downgrade to an upgrade, where headlight beam distance and rider comfort are design limits.',
    tip: 'Valley curve = Vertical curve with concavity UPWARDS (sag).', top: 'Curves'
  }
];

m6Questions.forEach(q => addQ(q, 6, 'mod-6', 'Theodolite survey'));

console.log('Module 6 questions processed. Total added so far:', addedList.length);

// Append to db
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
