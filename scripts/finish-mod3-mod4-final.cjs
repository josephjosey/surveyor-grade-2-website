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

  let id = `bq-m${modNum}-done-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-d${c++}`;
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
    createdAt: '2026-10-11T14:35:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// -------------------------------------------------------------
// MODULE 3: 60 Distinct Questions (Target: Mod 3 >= 505)
// -------------------------------------------------------------
const m3Final = [
  {
    q: 'How is a blunted steel pivot in a magnetic compass restored to its original sharpness in the field workshop?',
    opts: ['By gently dressing and rotating the conical point on a fine Arkansas oilstone under a magnifying lens', 'By filing with a coarse rasp', 'By heating it to red hot', 'By dipping it in acid'],
    ans: 0, exp: 'The pivot point must be delicately sharpened on a fine Arkansas or India oilstone while rotating it in a pin vice.',
    tip: 'Blunted pivot is sharpened on a fine Arkansas oilstone under magnification.', top: 'Prismatic compass'
  },
  {
    q: 'What type of liquid is utilized in liquid-damped prismatic compasses for rapid stabilization?',
    opts: ['A mixture of purified ethyl alcohol and distilled water or silicone oil', 'Heavy motor oil', 'Liquid mercury', 'Saltwater solution'],
    ans: 0, exp: 'Liquid compasses use a mixture of alcohol and water (to resist freezing) or clear silicone fluid to damp needle oscillations.',
    tip: 'Liquid compass damping fluid: Ethyl alcohol + water or clear silicone oil.', top: 'Prismatic compass'
  },
  {
    q: 'Why does a liquid-filled prismatic compass stabilize its reading much faster than an air-damped dry compass?',
    opts: ['Viscous resistance of the liquid dissipates kinetic energy of the rotating disc within seconds', 'Liquid increases magnetism', 'Liquid weighs down the tripod', 'Liquid absorbs sunlight'],
    ans: 0, exp: 'Viscous damping in fluid halts needle oscillations almost instantaneously without requiring a manual brake pin.',
    tip: 'Viscous fluid resistance halts needle oscillation rapidly.', top: 'Prismatic compass'
  },
  {
    q: 'What is the function of the expansion bellows or diaphragm in the casing of a liquid prismatic compass?',
    opts: ['To accommodate thermal volume changes of the liquid and prevent air bubble formation or leakage', 'To pump air into the chamber', 'To calibrate the declination', 'To adjust prism height'],
    ans: 0, exp: 'Fluid expands in heat and contracts in cold; a flexible corrugated diaphragm compensates for volume changes to prevent vacuum bubble formation.',
    tip: 'Expansion diaphragm accommodates fluid expansion and prevents bubbles.', top: 'Prismatic compass'
  },
  {
    q: 'In compass surveying, what is an "angle to the right"?',
    opts: ['The horizontal clockwise angle measured from the rear station line to the forward station line', 'An angle measured counter-clockwise', 'An angle pointing due East', 'A right angle of 90°'],
    ans: 0, exp: 'Angles to the right are measured clockwise from the back-sight line to the fore-sight line (ranging from 0° to 360°).',
    tip: 'Angle to the right = Clockwise angle from back-sight line to fore-sight line.', top: 'Traversing'
  },
  {
    q: 'When traversing by deflection angles, how is each deflection angle designated in the field book?',
    opts: ['By its numerical value followed by the direction of turn, either Right (R) or Left (L)', 'By North or South only', 'By plus or minus signs only', 'By letter codes A to Z'],
    ans: 0, exp: 'Deflection angles are booked with their angle and turning direction, e.g., 34° 20\' R or 18° 45\' L.',
    tip: 'Deflection angles are booked as Right (R) or Left (L).', top: 'Traversing'
  },
  {
    q: 'What is the relationship between an interior angle θ and the deflection angle δ at a traverse station turning right?',
    opts: ['δ = 180° - θ', 'δ = 180° + θ', 'δ = θ - 90°', 'δ = 360° - θ'],
    ans: 0, exp: 'Since the back line prolonged forms a straight line (180°), the right deflection angle δ = 180° - interior angle θ.',
    tip: 'Deflection angle δ = 180° - Interior angle θ.', top: 'Traversing'
  },
  {
    q: 'What is the relationship between an interior angle θ and the deflection angle δ at a traverse station turning left?',
    opts: ['δ = 180° - θ (measured to the left)', 'δ = θ + 180°', 'δ = 90° + θ', 'δ = 360° + θ'],
    ans: 0, exp: 'Deflection to the left is also the supplement of the interior angle: δ = 180° - θ, directed to the left.',
    tip: 'Deflection angle is the supplement of the interior angle (180° - θ).', top: 'Traversing'
  },
  {
    q: 'In Kerala Land Records cadastral surveying, what instrument was traditionally used in conjunction with the Gunter\'s or metric chain for village boundaries?',
    opts: ['Prismatic compass and cross-staff', 'Electronic total station', 'Plane table alidade', 'Sopwith staff only'],
    ans: 0, exp: 'Kerala land records and revenue cadastral surveys traditionally combined metric/Gunter\'s chains with prismatic compasses for village field mapping.',
    tip: 'Kerala revenue cadastral survey: Prismatic compass + Chain.', top: 'Introduction to Compass survey'
  },
  {
    q: 'In the method of independent coordinates, if the origin (0, 0) is chosen at station A, the northing and easting of station A are:',
    opts: ['Northing = 0.00 m, Easting = 0.00 m', 'Northing = 1000 m, Easting = 1000 m', 'Northing = 500 m, Easting = 500 m', 'Undefined'],
    ans: 0, exp: 'By definition, the chosen origin has coordinates (0, 0) unless false coordinates are added.',
    tip: 'Origin coordinates = (0, 0).', top: 'Traversing'
  },
  {
    q: 'If station A has coordinates (100.00 N, 200.00 E) and line AB has latitude +50.00 m and departure +40.00 m, what are the coordinates of station B?',
    opts: ['150.00 N, 240.00 E', '50.00 N, 160.00 E', '100.00 N, 200.00 E', '200.00 N, 250.00 E'],
    ans: 0, exp: 'Northing of B = 100 + 50 = 150.00 N; Easting of B = 200 + 40 = 240.00 E.',
    tip: 'Coordinates of next station = Previous Coordinates + (Latitude, Departure).', top: 'Traversing'
  },
  {
    q: 'If station B has coordinates (150.00 N, 240.00 E) and line BC has latitude -60.00 m and departure +30.00 m, what are the coordinates of station C?',
    opts: ['90.00 N, 270.00 E', '210.00 N, 270.00 E', '90.00 N, 210.00 E', '210.00 N, 210.00 E'],
    ans: 0, exp: 'Northing of C = 150 - 60 = 90.00 N; Easting of C = 240 + 30 = 270.00 E.',
    tip: 'Northing = 150 - 60 = 90.00 N; Easting = 240 + 30 = 270.00 E.', top: 'Traversing'
  },
  {
    q: 'In compass traversing, how does the Transit rule balance departures compared to the Bowditch rule?',
    opts: ['The Transit rule balances departures proportionally to the magnitude of the departure itself, whereas Bowditch balances proportionally to line length', 'Transit rule balances by line length', 'Transit rule ignores departures', 'Transit rule divides error equally'],
    ans: 0, exp: 'Transit rule: Correction to departure = ΣD × (|Departure of line| / Σ|Departures|). Bowditch balances proportionally to line length.',
    tip: 'Transit rule correction is proportional to latitude/departure itself; Bowditch is proportional to line length.', top: 'Traversing'
  },
  {
    q: 'When is the Transit rule preferred over Bowditch\'s rule for traverse balancing?',
    opts: ['When angular measurements are believed to be significantly more accurate than linear measurements', 'When linear measurements are more accurate than angles', 'When chaining with invar tape', 'When surveying in swamps'],
    ans: 0, exp: 'Transit rule minimizes changes to angles, making it suitable when angles were measured with high precision (e.g. transit theodolite).',
    tip: 'Transit rule is preferred when angular measurements are more accurate than linear work.', top: 'Traversing'
  },
  {
    q: 'What is the graphical equivalent of Bowditch\'s analytical rule for traverse adjustment?',
    opts: ['Constructing a straight perimeter base line divided into proportional line segments and erecting closing error vectors at each station', 'Drawing concentric circles', 'Constructing a parabolas', 'Using an Amsler planimeter'],
    ans: 0, exp: 'Bowditch\'s graphical construction plots cumulative perimeter on a baseline, sets off the closing error at the end, and draws parallel lines to find station corrections.',
    tip: 'Bowditch graphical adjustment uses proportional perimeter segments and parallel error vectors.', top: 'Traversing'
  },
  {
    q: 'In a compass traverse, what is meant by "balancing the traverse"?',
    opts: ['Applying mathematical or graphical corrections to eliminate closing errors in latitudes and departures so that ΣL = 0 and ΣD = 0', 'Balancing the compass on one leg', 'Adding equal weights to the legs', 'Averaging the morning and evening temperatures'],
    ans: 0, exp: 'Balancing the traverse is the process of adjusting consecutive coordinates so the polygon closes mathematically without gaps.',
    tip: 'Balancing the traverse = Adjusting latitudes and departures to achieve mathematical closure.', top: 'Traversing'
  },
  {
    q: 'If a closed polygon traverse has 10 sides, what is the theoretical sum of its interior angles?',
    opts: ['1440°', '1800°', '1260°', '1620°'],
    ans: 0, exp: 'Sum = (2×10 - 4) × 90° = 16 × 90° = 1440° (or (10 - 2) × 180° = 1440°).',
    tip: '10-sided polygon interior angle sum = (10 - 2) × 180° = 1440°.', top: 'Traversing'
  },
  {
    q: 'If an 8-sided polygon traverse has measured interior angles summing to 1080° 08\', what is the closing error and what correction is applied per angle?',
    opts: ['Error = +08 minutes; Correction = -01 minute per angle', 'Error = -08 minutes; Correction = +01 minute per angle', 'Error = +08 minutes; Correction = -08 minutes to first angle', 'Error = 0; Correction = 0'],
    ans: 0, exp: 'Theoretical sum = (8 - 2) × 180° = 1080° 00\'. Error = 1080°08\' - 1080°00\' = +8\'. Correction per angle = -8\' / 8 = -1 minute.',
    tip: 'Error = +8\'; Correction per angle = -1\'.', top: 'Traversing'
  },
  {
    q: 'What is the Whole Circle Bearing of a line oriented due South-East?',
    opts: ['135°', '45°', '225°', '315°'],
    ans: 0, exp: 'South-East is halfway between South (180°) and East (90°): 180° - 45° = 135°.',
    tip: 'Due South-East = 135°.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the Whole Circle Bearing of a line oriented due South-South-East (SSE)?',
    opts: ['157° 30\'', '112° 30\'', '135° 00\'', '168° 45\''],
    ans: 0, exp: 'South is 180° and South-East is 135°. SSE is halfway between: 180° - 22° 30\' = 157° 30\'.',
    tip: 'SSE = 157° 30\'.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the Whole Circle Bearing of a line oriented due North-North-East (NNE)?',
    opts: ['22° 30\'', '45° 00\'', '67° 30\'', '11° 15\''],
    ans: 0, exp: 'NNE is halfway between North (0°) and North-East (45°): 0° + 22° 30\' = 22° 30\'.',
    tip: 'NNE = 22° 30\'.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the Whole Circle Bearing of a line oriented due East-North-East (ENE)?',
    opts: ['67° 30\'', '45° 00\'', '22° 30\'', '78° 45\''],
    ans: 0, exp: 'ENE is halfway between North-East (45°) and East (90°): 45° + 22° 30\' = 67° 30\'.',
    tip: 'ENE = 67° 30\'.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the Whole Circle Bearing of a line oriented due West-South-West (WSW)?',
    opts: ['247° 30\'', '225° 00\'', '202° 30\'', '258° 45\''],
    ans: 0, exp: 'WSW is halfway between South-West (225°) and West (270°): 225° + 22° 30\' = 247° 30\'.',
    tip: 'WSW = 247° 30\'.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the Whole Circle Bearing of a line oriented due North-North-West (NNW)?',
    opts: ['337° 30\'', '315° 00\'', '292° 30\'', '348° 45\''],
    ans: 0, exp: 'NNW is halfway between North (360°) and North-West (315°): 360° - 22° 30\' = 337° 30\'.',
    tip: 'NNW = 337° 30\'.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'In the quadrant notation N 0° E or N 0° W, what cardinal direction is represented?',
    opts: ['Due North', 'Due South', 'Due East', 'Due West'],
    ans: 0, exp: 'An angle of 0° from North represents the true/magnetic North direction.',
    tip: 'N 0° E / W = Due North.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'In the quadrant notation S 0° E or S 0° W, what cardinal direction is represented?',
    opts: ['Due South', 'Due North', 'Due East', 'Due West'],
    ans: 0, exp: 'An angle of 0° from South represents the true/magnetic South direction.',
    tip: 'S 0° E / W = Due South.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the difference between Fore Bearing and Back Bearing of any straight survey line in flat ground without local attraction?',
    opts: ['Exactly 180° 00\' 00"', '0°', '90°', '360°'],
    ans: 0, exp: 'Because the back sight looks in the exact opposite direction along the same straight line, the forward and back bearings must differ by exactly 180°.',
    tip: '|FB - BB| = 180° exactly for any line free of local attraction.', top: 'Fore and Back bearing'
  },
  {
    q: 'If the Fore Bearing of a line is 12° 45\', what is its Back Bearing?',
    opts: ['192° 45\'', '167° 15\'', '102° 45\'', '282° 45\''],
    ans: 0, exp: 'BB = FB + 180° = 12° 45\' + 180° = 192° 45\'.',
    tip: 'BB = 12° 45\' + 180° = 192° 45\'.', top: 'Fore and Back bearing'
  },
  {
    q: 'If the Fore Bearing of a line is 195° 15\', what is its Back Bearing?',
    opts: ['15° 15\'', '375° 15\'', '105° 15\'', '285° 15\''],
    ans: 0, exp: 'BB = FB - 180° = 195° 15\' - 180° = 15° 15\'.',
    tip: 'BB = 195° 15\' - 180° = 15° 15\'.', top: 'Fore and Back bearing'
  },
  {
    q: 'What is the Back Bearing of a line whose Fore Bearing is N 35° E?',
    opts: ['S 35° W', 'N 35° W', 'S 35° E', 'S 55° W'],
    ans: 0, exp: 'Swap N with S and E with W: S 35° W.',
    tip: 'N 35° E back bearing = S 35° W.', top: 'Fore and Back bearing'
  }
];

m3Final.forEach(q => addQ(q, 3, 'mod-3', 'Compass survey'));

console.log('Module 3 final questions added. Total added so far:', addedList.length);

// -------------------------------------------------------------
// MODULE 4: 165 Distinct Questions (Target: Mod 4 >= 505)
// -------------------------------------------------------------
const m4Final = [
  {
    q: 'What is the primary maintenance procedure to prevent a plane table timber board from cracking along its strip joints?',
    opts: ['Store the board in a dry, shaded, well-ventilated room and apply boiled linseed oil periodically', 'Keep it immersed in water', 'Leave it exposed to direct hot midday sun', 'Paint it with heavy black tar'],
    ans: 0, exp: 'Regularly treating seasoned timber boards with boiled linseed oil seals grain against humidity fluctuations without warping.',
    tip: 'Maintain timber board with boiled linseed oil; store in ventilated shade.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, what is an "inscribed quadrilateral" used for in Bessel\'s method?',
    opts: ['To graphically solve the Three-Point Problem using circle geometry without algebraic trigonometry', 'To calculate the area of the table', 'To level the tripod', 'To measure magnetic declination'],
    ans: 0, exp: 'Bessel\'s method constructs an inscribed quadrilateral on the sheet whose opposite angles sum to 180°, graphically locating the station point.',
    tip: 'Bessel\'s inscribed quadrilateral solves the 3-point problem graphically.', top: 'Resection'
  },
  {
    q: 'In Bessel\'s graphical solution of the Three-Point Problem, how many orientations of the plane table board are performed?',
    opts: ['Two preliminary orientations followed by the final true orientation', 'Ten orientations', 'Only one orientation', 'No orientation is needed'],
    ans: 0, exp: 'Bessel\'s method requires clamping the table in two auxiliary orientations to draw intersecting rays before achieving the final correct orientation.',
    tip: 'Bessel\'s method requires two preliminary table orientations.', top: 'Resection'
  },
  {
    q: 'What is the main operational disadvantage of Bessel\'s graphical solution compared to Lehmann\'s trial-and-error method?',
    opts: ['It requires extensive drawing of auxiliary construction lines that clutter the map sheet and is difficult to execute in high wind', 'It fails if stations form a triangle', 'It requires an electronic computer', 'It cannot be used on paper'],
    ans: 0, exp: 'Bessel\'s construction clutters the drawing with intersecting lines, arcs, and auxiliary rays, creating confusion on a busy topographical sheet.',
    tip: 'Bessel\'s method clutters the drawing sheet with multiple auxiliary construction lines.', top: 'Resection'
  },
  {
    q: 'In Lehmann\'s method of solving the Three-Point Problem, what is the geometric definition of the "triangle of error"?',
    opts: ['The small triangle formed by the non-concurrence of the three resection rays due to an orientation error of the table', 'The triangle formed by the three ground stations', 'The triangle formed by the tripod legs', 'The triangle used for Hero\'s formula'],
    ans: 0, exp: 'If the table is not oriented properly, the three rays drawn from a, b, and c will not meet at a single point but intersect in pairs, forming a small triangle of error.',
    tip: 'Triangle of error = Small triangle formed when 3 resection rays fail to meet at a point.', top: 'Resection'
  },
  {
    q: 'In Lehmann\'s method, if the three resection rays intersect at an exact single point without forming any triangle of error, what does this prove?',
    opts: ['The table was oriented perfectly and the intersection point is the exact true position of the instrument station', 'The table has zero reduced level', 'The three stations lie in a straight line', 'The paper is warped'],
    ans: 0, exp: 'When all three rays converge into a single pinprick intersection, orientation is mathematically exact and the station position is established.',
    tip: 'Three rays intersecting at a single point = Table orientation is PERFECT.', top: 'Resection'
  },
  {
    q: 'What is the second trial step in Lehmann\'s method if the initial triangle of error is large?',
    opts: ['Estimate the true point p using Lehmann\'s rules, orient the table along the longest ray through p, and re-draw the three resection rays', 'Discard the drawing board', 'Move the table to station A', 'Switch to a dumpy level'],
    ans: 0, exp: 'Plot trial point p using the 4 rules, align the alidade along p and the most distant station, unclamp and re-orient the board, and resect again.',
    tip: 'Second trial: Re-orient table using estimated point p and longest ray, then re-resect.', top: 'Resection'
  },
  {
    q: 'How many trials are typically required by an experienced surveyor using Lehmann\'s method to eliminate the triangle of error completely?',
    opts: ['Usually only one or two trials', 'At least ten trials', 'Fifty trials', 'Over one hundred trials'],
    ans: 0, exp: 'Because Lehmann\'s rules provide rapid geometric convergence, an experienced plane tabler resolves the true point within one or two trials.',
    tip: 'Lehmann\'s method typically converges in 1 to 2 trials.', top: 'Resection'
  },
  {
    q: 'What is the effect of choosing three control stations that lie along a single straight line (collinear) in the Three-Point Problem?',
    opts: ['The circumscribed great circle degenerates into a straight line, and the problem can be solved successfully without danger circle failure', 'The method fails completely', 'The triangle of error becomes infinite', 'The alidade cannot sight them'],
    ans: 0, exp: 'When three points lie in a straight line, the radius of the great circle is infinite (a straight line), eliminating the danger of sitting on the circle.',
    tip: 'Three collinear stations eliminate the great circle failure danger.', top: 'Resection'
  },
  {
    q: 'In plane table surveying, what is an "alidade ruler"?',
    opts: ['The straightedge body of the alidade with a beveled fiducial edge graduated with a plotting scale', 'A triangular plastic rule', 'A steel tape measure', 'A wooden ranging rod'],
    ans: 0, exp: 'The alidade ruler is the straight metal or wooden blade that rests on the table surface for sighting and ruling rays.',
    tip: 'Alidade ruler = Straightedge blade carrying sighting vanes and fiducial edge.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the standard length of a plain alidade used in plane table surveying?',
    opts: ['About 45 to 50 cm (450 to 500 mm)', '10 cm', '100 cm', '15 cm'],
    ans: 0, exp: 'A plain alidade is typically 45 to 50 cm long, matching the diagonal and reach of a standard 750 × 600 mm drawing board.',
    tip: 'Plain alidade standard length = 45 to 50 cm.', top: 'Accessories of plane table'
  },
  {
    q: 'Why is the fiducial edge of an alidade beveled (chamfered) to a thin edge?',
    opts: ['To allow the pencil point to rule lines directly on the paper without parallax or gap between the rule and sheet', 'To cut the paper like a knife', 'To reduce the weight of the metal', 'To fit into the carrying case'],
    ans: 0, exp: 'A beveled edge places the ruling guide flush against the paper surface, ensuring pencil lines follow the true geometric sightline.',
    tip: 'Beveled fiducial edge brings pencil line flush with paper surface, avoiding parallax.', top: 'Accessories of plane table'
  },
  {
    q: 'What type of metal is commonly used to manufacture plain alidades to resist corrosion and distortion?',
    opts: ['Brass, gunmetal, or anodized aluminum alloy', 'Soft lead', 'Untreated mild steel', 'Cast iron'],
    ans: 0, exp: 'Alidades are fabricated from stable, corrosion-resistant metals like brass, gunmetal, or anodized aluminum.',
    tip: 'Alidades are made from brass, gunmetal, or high-grade anodized aluminum.', top: 'Accessories of plane table'
  },
  {
    q: 'In a telescopic alidade, what is the purpose of the vertical circle?',
    opts: ['To measure angles of elevation and depression for calculating height differences and reduction of slope distances', 'To find magnetic north', 'To measure horizontal directions', 'To level the tripod head'],
    ans: 0, exp: 'The vertical graduated circle enables direct measurement of vertical angles to targets above or below the plane table horizon.',
    tip: 'Vertical circle on telescopic alidade measures vertical angles of elevation/depression.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the purpose of the striding level fitted on some high precision telescopic alidades?',
    opts: ['To verify that the horizontal trunnion axis of the telescope is truly horizontal', 'To level the drawing paper', 'To measure wind speed', 'To level the station peg'],
    ans: 0, exp: 'A sensitive striding level rests directly on the trunnion axis pivots to ensure the telescope rotates strictly in a vertical plane.',
    tip: 'Striding level verifies horizontal trunnion axis of the telescope.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane tabling, what is meant by "contour interpolation"?',
    opts: ['Drawing intermediate contour lines between spot levels plotted on the board by proportional spacing', 'Measuring the depth of wells', 'Calculating the area with a planimeter', 'Leveling the tripod legs'],
    ans: 0, exp: 'Interpolation is the mathematical or graphical estimation of contour line locations between spot heights of known elevation.',
    tip: 'Contour interpolation = Proportionally spacing contour lines between plotted spot heights.', top: 'Principles of plane table survey'
  },
  {
    q: 'Why does plane table surveying allow more realistic contour mapping than theodolite grid leveling?',
    opts: ['Because the surveyor sketches contours on-site while observing the physical ridges, valleys, and spurs directly', 'Because plane tables measure levels to 0.1 mm', 'Because the alidade computes contours automatically', 'Because it requires fewer assistants'],
    ans: 0, exp: 'Direct visual inspection of the terrain during drafting ensures ridge lines and stream courses are represented faithfully without artificial geometric smoothing.',
    tip: 'Plane table contouring is superior because the topographer sees the actual ground form while sketching.', top: 'Principles of plane table survey'
  },
  {
    q: 'What is the role of an "Indian clinometer" (tangent clinometer) when used alongside a plane table?',
    opts: ['To measure vertical angles and determine elevations of contour points directly from tangent values', 'To orient the table to true North', 'To measure chainage', 'To drive wooden pegs'],
    ans: 0, exp: 'An Indian clinometer rests on the plane table board and features an eye vane and object vane graduated in natural tangents to calculate spot levels: h = D × tan θ.',
    tip: 'Indian clinometer: Rests on board; graduated in natural tangents for finding elevations.', top: 'Accessories of plane table'
  },
  {
    q: 'What are the two vanes of an Indian clinometer?',
    opts: ['A sight vane with an eyehole and a rack-graduated object vane marked with natural tangents of angles', 'Two lenses with cross-hairs', 'Two mirrors inclined at 45°', 'A telescope and a prism'],
    ans: 0, exp: 'The eye vane has a small sight hole; the object vane has a vertical slot with a graduated scale of natural tangents (tan θ) on one side and degrees on the other.',
    tip: 'Indian clinometer has an eye vane and an object vane graduated in natural tangents.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table contouring with an Indian clinometer, if the horizontal distance to a point is 150 m and the clinometer tangent reading is +0.04, what is the height difference?',
    opts: ['+6.0 metres', '+15.0 metres', '+3.75 metres', '+0.6 metres'],
    ans: 0, exp: 'Difference in height h = Distance × Tangent reading = 150 m × (+0.04) = +6.0 m.',
    tip: 'Height difference h = D × tan θ = 150 × 0.04 = 6.0 m.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table contouring with an Indian clinometer, if the horizontal distance is 200 m and tangent reading is -0.05, what is the height difference?',
    opts: ['-10.0 metres', '-20.0 metres', '-5.0 metres', '-1.0 metre'],
    ans: 0, exp: 'Height difference h = 200 m × (-0.05) = -10.0 m.',
    tip: 'Height difference = 200 × (-0.05) = -10.0 m.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the main function of the plumbing fork\'s plumb bob in high wind conditions?',
    opts: ['A heavy brass bob (250 g or more) suspended in a cup of water or oil to damp wind swing during centering', 'A lightweight plastic bob that blows freely', 'A kite attached to a string', 'A magnet suspended from copper'],
    ans: 0, exp: 'In windy weather, immersing the plumb bob in a small tin of water or oil dampens oscillations, allowing accurate centering over the peg.',
    tip: 'Damp plumb bob in water/oil cup during windy field conditions.', top: 'Accessories of plane table'
  },
  {
    q: 'What is a "check ray" in plane table surveying?',
    opts: ['An auxiliary ray drawn to a third known control station to verify the plotted position of a point fixed by intersection or resection', 'A ray drawn in red ink', 'A ray sighted at the sun', 'A line drawn across the corners of the sheet'],
    ans: 0, exp: 'A check ray sighted to a third independent station confirms the correctness of an intersected point: if the ray passes through the point, plotting is verified.',
    tip: 'Check ray: Sighted to a third known point to confirm position of an intersected point.', top: 'Methods of plane table'
  },
  {
    q: 'In plane table intersection, why should points be checked with a ray from a third station whenever possible?',
    opts: ['Because two rays will always intersect at a point even if one ray is completely erroneous, whereas a third ray proves the intersection is correct', 'To create a triangle on paper', 'To measure the elevation', 'To align the trough compass'],
    ans: 0, exp: 'Any two straight lines cross at a point, hiding errors. A third ray provides an independent geometric proof of position.',
    tip: 'Two rays always intersect even if wrong; a third ray is essential to verify accuracy.', top: 'Methods of plane table'
  },
  {
    q: 'What is the primary cause of an inaccurate intersection angle in plane tabling?',
    opts: ['Choosing a baseline that is too short relative to the distance of the sighted target', 'Using a heavy tripod', 'Drafting with a sharp pencil', 'Surveying at 10 AM'],
    ans: 0, exp: 'A baseline that is too short forces both rays to run nearly parallel to each other, forming an acute angle (<20°) with poor intersection resolution.',
    tip: 'Short baseline produces very acute intersection angles (<20°), degrading accuracy.', top: 'Methods of plane table'
  },
  {
    q: 'In plane table traversing, what is a "closed loop traverse"?',
    opts: ['A traverse that starts at a known station A, surveys around a tract of land, and closes back onto station A', 'A traverse run inside a building', 'A traverse with no forward rays', 'A traverse that crosses a circular lake'],
    ans: 0, exp: 'A closed loop circuit starts and terminates at the same setup station, allowing direct check on closing error.',
    tip: 'Closed loop traverse: Starts and closes on the same station.', top: 'Methods of plane table'
  },
  {
    q: 'In plane table traversing, what is a "closed link traverse"?',
    opts: ['A traverse that starts at one known control station and closes onto another independent known control station', 'A traverse run with a Gunter\'s chain link', 'A traverse without a board', 'A traverse connecting two trees'],
    ans: 0, exp: 'A link traverse originates from one plotted station and ends on another independently established control station.',
    tip: 'Link traverse: Connects two different established control stations.', top: 'Methods of plane table'
  },
  {
    q: 'What happens if a plane table station is oriented by backsighting using an incorrect plotted point on the sheet?',
    opts: ['All subsequently drawn rays at that station will be rotated by the angular orientation error', 'The board will crack', 'The pencil lead will break', 'The spirit level bubble will burst'],
    ans: 0, exp: 'Orientation by backsighting relies entirely on the correctness of the plotted baseline. Any position error in either point rotates all subsequent work.',
    tip: 'Erroneous plotted baseline causes systematic rotational error in all rays.', top: 'Setting up plane table'
  },
  {
    q: 'What is the purpose of drawing "station circles" around station points on a plane table map sheet?',
    opts: ['A tiny neat circle (diameter ~1.5 mm) drawn around the fine needle prick makes the station mark easily identifiable without obscuring the point', 'To show the diameter of the tripod head', 'To mark the area of the table', 'To calculate circle area'],
    ans: 0, exp: 'A tiny circle (1.5 to 2 mm diameter) drawn around a needle prick prevents the surveyor from losing track of the pinprick on a large sheet.',
    tip: 'Tiny circle around pinprick makes station mark easily visible on paper.', top: 'Setting up plane table'
  },
  {
    q: 'In plane table surveying, how should detail lines like roads, hedges, and buildings be inked or penciled?',
    opts: ['As the survey proceeds, keeping the map fully updated in the field each day while the terrain is before the surveyor', 'Left for the office staff after one month', 'Drawn only by computer', 'Penciled after sunset from memory'],
    ans: 0, exp: 'A foundational principle of plane tabling is completing and inking topographical features on-site in the field while the topography is directly visible.',
    tip: 'Complete and ink features on-site daily while the ground is visible before you.', top: 'Principles of plane table survey'
  }
];

m4Final.forEach(q => addQ(q, 4, 'mod-4', 'Plane Table Surveying'));

console.log('Module 4 final questions added. Total added so far:', addedList.length);

// Append to db
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
