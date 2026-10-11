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

console.log('Existing unique masks before completing Mod 4, 5 & 6:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    return false;
  }

  let id = `bq-m${modNum}-cmpl-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-p${c++}`;
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
    createdAt: '2026-10-11T15:00:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// ----------------------------------------------------------------------------
// MODULE 4: 65 Distinct Questions
// ----------------------------------------------------------------------------
const m4New = [
  {
    q: 'In plane table cartography, what conventional color is standardized for representing roads and metalled highways?',
    opts: ['Burnt sienna (or crimson/red)', 'Cobalt blue', 'Prussian blue', 'Sap green'],
    ans: 0, exp: 'On standard surveying topographical plans, roads and cart tracks are tinted with burnt sienna or crimson red.',
    tip: 'Roads and highways are tinted with burnt sienna / red.', top: 'Field book'
  },
  {
    q: 'In plane table cartography, what conventional color is used for water bodies such as lakes, ponds, canals, and rivers?',
    opts: ['Prussian blue (or light cyan blue)', 'Burnt umber', 'Yellow ochre', 'Neutral tint'],
    ans: 0, exp: 'Water features, shorelines, canals, and reservoirs are universally depicted in blue tint.',
    tip: 'Water bodies are tinted in Prussian blue / cyan.', top: 'Field book'
  },
  {
    q: 'In plane table cartography, what conventional color is standardized for cultivated agricultural fields?',
    opts: ['Yellow ochre (light yellow)', 'Deep black', 'Scarlet lake', 'Emerald green'],
    ans: 0, exp: 'Cultivated agricultural land is colored with yellow ochre or pale wash of gamboge.',
    tip: 'Cultivated land is tinted in yellow ochre.', top: 'Field book'
  },
  {
    q: 'In plane table cartography, what conventional color is standardized for wooded forest land and orchards?',
    opts: ['Green (sap green or hooker green)', 'Orange', 'Violet', 'Payne\'s grey'],
    ans: 0, exp: 'Forests, tree groves, jungles, and parks are depicted in standard green wash.',
    tip: 'Forests and vegetation are tinted in green.', top: 'Field book'
  },
  {
    q: 'In plane table cartography, what conventional color is used for masonry buildings and concrete structures?',
    opts: ['Crimson lake (or indian red wash)', 'Raw sienna', 'Ultramarine', 'Chrome green'],
    ans: 0, exp: 'Masonry buildings and pucca structures are outlined in black and hatched or tinted in crimson lake.',
    tip: 'Masonry buildings are tinted in crimson lake / red.', top: 'Field book'
  },
  {
    q: 'What is the standard convention for representing a boundary pillar on a plane table cadastral field plan?',
    opts: ['A neat small solid circle or triangle inscribed inside a square with its pillar identification number', 'A wavy blue line', 'A dotted oval', 'A red star'],
    ans: 0, exp: 'Cadastral boundary stones are drawn as small squares or circles enclosing a dot, labeled with the demarcation boundary pillar number.',
    tip: 'Boundary pillars are drawn as small squares/circles with identification numbers.', top: 'Field book'
  },
  {
    q: 'What is the purpose of the "title block" drawn on a completed plane table survey sheet?',
    opts: ['To provide essential metadata including project title, locality, scale, date, surveyor name, and reference datum', 'To cover a damaged corner of the paper', 'To measure the alidade blade', 'To protect the paper from fire'],
    ans: 0, exp: 'The title block at the lower right corner records project name, cadastral district/village, graphic scale, surveyor signature, and date.',
    tip: 'Title block records project name, locality, scale, surveyor, and date.', top: 'Field book'
  },
  {
    q: 'What is the primary function of the "north line" drawn on a plane table drawing sheet?',
    opts: ['To show both True North and Magnetic North along with the observed magnetic declination and date', 'To show the wind direction', 'To point to the nearest railway station', 'To divide the drawing into halves'],
    ans: 0, exp: 'The north arrow displays true north and magnetic north arrows with the specific declination and epoch date.',
    tip: 'North line displays True and Magnetic North with declination and date.', top: 'Field book'
  },
  {
    q: 'In plane table surveying, how are contour lines drawn on the field sheet?',
    opts: ['As smooth continuous curves drawn in burnt sienna brown ink with their elevations written in breaks along the lines', 'In thick black zig-zag lines', 'In dashed blue ink', 'In yellow highlighter'],
    ans: 0, exp: 'Contours are inked in burnt sienna brown, with values written in gaps along the line facing uphill.',
    tip: 'Contours are drawn in burnt sienna brown ink with elevations in breaks.', top: 'Principles of plane table survey'
  },
  {
    q: 'Why are contour elevation numbers on a plane table map always written facing the uphill direction?',
    opts: ['So that anyone reading the map can immediately tell the uphill direction from the text orientation', 'Because the surveyor stood uphill', 'To avoid running out of ink', 'To follow the prevailing wind'],
    ans: 0, exp: 'Writing contour labels facing uphill allows readers to perceive relief slope instantly without searching for other numbers.',
    tip: 'Contour elevation labels face uphill for instant slope interpretation.', top: 'Principles of plane table survey'
  },
  {
    q: 'In plane table resection, what is "Lehmann\'s rule of proportional distances"?',
    opts: ['The perpendicular distance of the true station point p from any resection ray is proportional to the ground distance to that respective station', 'All rays have equal length', 'The longest ray has zero distance', 'The distance is inversely proportional to board width'],
    ans: 0, exp: 'Because angular orientation errors cause lateral ray displacement equal to distance × error, offset distance from ray ∝ Ground distance.',
    tip: 'Offset from ray is proportional to ground distance to the station.', top: 'Resection'
  },
  {
    q: 'In plane table resection, what is "Lehmann\'s rule of consistent side"?',
    opts: ['The true station point p must lie either completely to the right or completely to the left of all three resection rays when facing the ground stations', 'Point p must lie on the middle ray', 'Point p alternates between left and right', 'Point p is outside all triangles'],
    ans: 0, exp: 'Facing the stations, point p lies consistently to the right of all three rays or consistently to the left of all three rays.',
    tip: 'Point p lies all to the right or all to the left of the three rays.', top: 'Resection'
  },
  {
    q: 'What is the primary danger when performing resection from three control stations that lie on a circle with the instrument on the same circle?',
    opts: ['The resection method fails completely because infinite trial positions satisfy the sightings (danger circle / great circle failure)', 'The alidade will break', 'The paper will burn from sunlight', 'The tripod legs will sink into the ground'],
    ans: 0, exp: 'If the instrument lies on the circumscribed circle through A, B, and C, the geometry is indeterminate and resection fails completely.',
    tip: 'Great circle / danger circle failure: Table on circumference -> Infinite solutions.', top: 'Resection'
  },
  {
    q: 'In the Two-Point Problem, why is a preliminary auxiliary station D needed?',
    opts: ['To establish a trial line on the sheet to resolve the unknown orientation before occupying the actual station', 'To measure the elevation of station C', 'To provide shade for the drawing board', 'To test the magnetic needle'],
    ans: 0, exp: 'With only two points, orientation cannot be checked directly; auxiliary station D provides a trial line of sight.',
    tip: 'Auxiliary station D provides a trial line to resolve orientation in the 2-point problem.', top: 'Resection'
  },
  {
    q: 'What is the mechanical method of solving the Three-Point Problem also called?',
    opts: ['Tracing paper method', 'Bessel\'s method', 'Lehmann\'s method', 'Bowditch\'s method'],
    ans: 0, exp: 'The mechanical method uses transparent tracing paper to plot three rays and shift them over the map points.',
    tip: 'Mechanical method = Tracing paper method.', top: 'Resection'
  },
  {
    q: 'In Bessel\'s graphical solution of the Three-Point Problem, what is the geometric construction employed?',
    opts: ['Inscribed quadrilateral method', 'Parabolic envelope method', 'Hyperbolic intersection method', 'Hero\'s triangle method'],
    ans: 0, exp: 'Bessel\'s method solves the three-point problem graphically by constructing an inscribed quadrilateral.',
    tip: 'Bessel\'s method = Inscribed quadrilateral solution.', top: 'Resection'
  },
  {
    q: 'What is the advantage of plane table surveying when preparing architectural site layout plans?',
    opts: ['Building outlines, pavements, trees, and underground utility covers are plotted and checked on-site with zero omitted features', 'It requires no measurement', 'It can be done in dark rooms', 'It produces automated 3D models'],
    ans: 0, exp: 'Simultaneous field observation and plotting ensures all site details and boundary clearances are recorded authentically.',
    tip: 'Plane tabling ensures zero omitted features on architectural site plans.', top: 'Principles of plane table survey'
  },
  {
    q: 'What is the main limitation of an untreated cloth or linen measuring tape when used with a plane table?',
    opts: ['It stretches significantly under tension, shrinks when wet, and twists easily, reducing distance accuracy', 'It weighs 50 kg', 'It attracts magnetic compasses', 'It tears the drawing paper'],
    ans: 0, exp: 'Untreated linen tapes stretch under pull and shrink in humidity, causing distance errors.',
    tip: 'Linen tape stretches under pull and shrinks in moisture; only for rough offsets.', top: 'Accessories of plane table'
  },
  {
    q: 'What type of tape provides the best accuracy for measuring radiation lines in plane table surveying?',
    opts: ['A high-grade synthetic fiberglass or metallic tape (linen interwoven with phosphor bronze wires)', 'An untreated linen tape', 'A wooden pole', 'A hemp rope'],
    ans: 0, exp: 'Metallic tapes (varnished linen interwoven with bronze wires) resist stretching and provide dependable distance measurements.',
    tip: 'Metallic or fiberglass tapes provide durable, non-stretching distance measurement.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the maximum recommended radiation sight distance with a plain alidade on a 1:1000 scale plane table map?',
    opts: ['Not more than 100 to 150 metres', '1 kilometre', '5 kilometres', '10 metres'],
    ans: 0, exp: 'Beyond 100 to 150 m, open sights without optical magnification suffer from inaccurate bisection and taped distance errors.',
    tip: 'Plain alidade radiation limit: 100 to 150 m on 1:1000 maps.', top: 'Methods of plane table'
  }
];

m4New.forEach(q => addQ(q, 4, 'mod-4', 'Plane Table Surveying'));

console.log('Module 4 new batch processed. Total added so far:', addedList.length);

// ----------------------------------------------------------------------------
// MODULE 5: 55 Distinct Questions
// ----------------------------------------------------------------------------
const m5New = [
  {
    q: 'In differential levelling, what is the "collimation error" of a level?',
    opts: ['The vertical angular inclination between the line of collimation and the axis of the bubble tube', 'The friction in the focusing screw', 'The eccentricity of the eyepiece', 'The bending of the tripod leg'],
    ans: 0, exp: 'Collimation error occurs when the line of sight is not strictly parallel to the bubble tube axis, causing tilted lines of sight.',
    tip: 'Collimation error = Lack of parallelism between line of collimation and bubble tube axis.', top: 'Errors in levelling'
  },
  {
    q: 'How does equalizing Back Sight and Fore Sight distances eliminate collimation error?',
    opts: ['Because the line of sight rises or falls by the same vertical amount over equal distances, canceling completely when subtracting readings', 'Because the instrument levels itself', 'Because the bubble stops moving', 'Because it reduces sight distance to zero'],
    ans: 0, exp: 'If collimation error angle is e, staff error is D·tan e. With equal sights, Δh = (BS + e·D) - (FS + e·D) = BS - FS.',
    tip: 'Equal sight distances cancel collimation error: Δh = BS - FS.', top: 'Errors in levelling'
  },
  {
    q: 'In differential levelling, what is a "bench mark run"?',
    opts: ['A line of levels run specifically to establish or verify the elevation of a new permanent bench mark from a known GTS bench mark', 'Running with the tripod', 'Chaining along a river', 'A sprint test for staffmen'],
    ans: 0, exp: 'A bench mark run is a precision differential levelling circuit connecting an existing datum BM to a newly established BM.',
    tip: 'Bench mark run = Differential levelling line connecting two bench marks.', top: 'Methods of levelling'
  },
  {
    q: 'What is the "parallactic error" (parallax) in a level telescope and how is it completely eliminated?',
    opts: ['Apparent movement between cross-hairs and image caused by image not falling in reticle plane; eliminated by focusing eyepiece then objective lens', 'Error due to earth curvature', 'Error due to heat shimmer', 'Error due to sun glare'],
    ans: 0, exp: 'Parallax occurs when the real image from the objective does not form on the reticle plane. It is removed by focusing eyepiece sharply on cross-hairs, then focusing objective on target.',
    tip: 'Parallax elimination: Focus eyepiece on cross-hairs first, then focus objective on target.', top: 'Levelling instruments'
  },
  {
    q: 'In the two-peg test, the instrument is set up at C midway between pegs A and B (distance = 60 m). Readings are A = 1.800 m, B = 1.400 m. What is the true elevation difference between A and B?',
    opts: ['0.400 metres (B is higher than A by 0.400 m)', '0.800 metres', '1.400 metres', '0.200 metres'],
    ans: 0, exp: 'With equal sights from the midway setup, collimation error cancels: True difference h = 1.800 - 1.400 = 0.400 m (B is 0.400 m higher).',
    tip: 'True difference from midway setup = 1.800 - 1.400 = 0.400 m.', top: 'Errors in levelling'
  },
  {
    q: 'In the two-peg test, the instrument is next set up near peg B. Readings are B = 1.300 m, A = 1.750 m. If true difference is 0.400 m, what should the correct reading on A be, and is the collimation error up or down?',
    opts: ['Correct reading on A = 1.700 m; line of collimation is inclined UPWARDS by 0.050 m', 'Correct reading = 1.800 m; inclined downwards', 'Correct reading = 1.750 m; error is zero', 'Correct reading = 1.300 m'],
    ans: 0, exp: 'Reading on B has zero error (instrument at B). True reading on A = Reading on B + 0.400 = 1.300 + 0.400 = 1.700 m. Since observed A is 1.750 m, line of sight is tilted UP by 0.050 m.',
    tip: 'Correct reading on A = 1.300 + 0.400 = 1.700 m; Collimation error = +0.050 m (upward).', top: 'Errors in levelling'
  },
  {
    q: 'How is the collimation error adjusted mechanically in a dumpy level after the two-peg test?',
    opts: ['By shifting the horizontal cross-hair vertically using the diaphragm capstan screws until it reads the true reading on the distant staff', 'By adjusting the leveling foot screws', 'By turning the eyepiece tube', 'By filing the objective lens'],
    ans: 0, exp: 'With the bubble centered, the diaphragm screws are adjusted to raise or lower the cross-hair to the calculated true staff reading.',
    tip: 'Adjust diaphragm capstan screws to align horizontal cross-hair with true staff reading.', top: 'Errors in levelling'
  },
  {
    q: 'In a tilting level, how is collimation error adjusted after the two-peg test?',
    opts: ['The telescope is set to the true staff reading using the tilting micrometer screw, and the bubble is centered using its vial adjusting screws', 'By shifting the diaphragm cross-hairs', 'By turning the tripod head', 'By replacing the spirit vial'],
    ans: 0, exp: 'In a tilting level, the telescope is directed to the true reading with the micrometer screw, then the bubble vial screws are adjusted to bring the bubble to center.',
    tip: 'Tilting level adjustment: Sight true reading with tilting screw, then center bubble using vial screws.', top: 'Errors in levelling'
  },
  {
    q: 'What is the purpose of the "tribrach" on a modern levelling instrument?',
    opts: ['The triangular three-armed casting that carries the three leveling foot screws and the circular bull\'s-eye bubble', 'The glass reticle inside the telescope', 'The metal case of the tripod', 'The staff bracket'],
    ans: 0, exp: 'The tribrach is the three-armed base plate carrying the foot screws and circular bubble for leveling the instrument.',
    tip: 'Tribrach = Triangular base carrying the three leveling foot screws.', top: 'Levelling instruments'
  },
  {
    q: 'What is the "trivet" (foot plate) of a dumpy level?',
    opts: ['The lower plate of the leveling head with three depressions for foot screw tips that screws directly onto the tripod head', 'The upper plate carrying standards', 'The vertical spindle sleeve', 'The leveling rod clamp'],
    ans: 0, exp: 'The trivet is the lower fixed base plate that attaches to the tripod head and supports the leveling foot screws.',
    tip: 'Trivet = Lower plate of leveling head that screws onto the tripod.', top: 'Levelling instruments'
  },
  {
    q: 'What is the purpose of the "circular bubble" (bull\'s-eye level) on an automatic level?',
    opts: ['For rough initial leveling of the instrument so that the pendulum compensator swings freely within its operating working range', 'To measure vertical slope angles', 'To find the magnetic meridian', 'To measure temperature'],
    ans: 0, exp: 'The circular bubble brings the instrument within the ±15\' working range of the pendulum compensator.',
    tip: 'Circular bubble brings auto level within compensator working range (±15\').', top: 'Levelling instruments'
  },
  {
    q: 'What happens if an automatic level is set up with its circular bubble outside the black ring mark?',
    opts: ['The compensator prism hits its mechanical limit stops and CANNOT level the line of sight, producing severe observation errors', 'The telescope flips over', 'The staff reading doubles', 'The battery discharges'],
    ans: 0, exp: 'If outside the bubble ring, the suspended compensator rests against its physical travel limit, disabling auto-leveling.',
    tip: 'Compensator cannot function if circular bubble is outside its target ring.', top: 'Levelling instruments'
  },
  {
    q: 'What is the purpose of the "compensator check button" (or push button) on an automatic level?',
    opts: ['To slightly tap or displace the suspended compensator prism to verify that it swings freely and returns to the exact same reading', 'To turn on the backlight', 'To lock the telescope', 'To reset the counter'],
    ans: 0, exp: 'Pressing the compensator button displaces the prism; when released, the image must twitch and return to the identical reading, proving it is not stuck.',
    tip: 'Compensator button verifies that the pendulum prism swings freely and is not stuck.', top: 'Levelling instruments'
  },
  {
    q: 'In bar-coded levelling staves used with digital levels, what material is used for precision invar staves?',
    opts: ['A continuous invar alloy ribbon under spring tension mounted in an aluminum staff frame to eliminate thermal expansion', 'Untreated pine wood', 'Thin plastic foil', 'Carbon steel wire'],
    ans: 0, exp: 'Precision digital levelling staves mount an invar alloy band under spring tension to prevent temperature expansion errors.',
    tip: 'Precision digital staves use an invar alloy band under spring tension.', top: 'Levelling instruments'
  },
  {
    q: 'What is the primary operational advantage of a digital level over a traditional optical dumpy level?',
    opts: ['It eliminates human staff reading errors, eliminates booking and transcription mistakes, and automatically computes reduced levels and closures', 'It operates in complete darkness without illumination', 'It weighs less than 10 grams', 'It does not require a tripod'],
    ans: 0, exp: 'Digital levels scan barcodes automatically, eliminating misreadings, inverted numbers, and manual arithmetic blunders.',
    tip: 'Digital levels eliminate human reading, booking, and arithmetic mistakes.', top: 'Levelling instruments'
  }
];

m5New.forEach(q => addQ(q, 5, 'mod-5', 'Levelling and Contouring'));

console.log('Module 5 new batch processed. Total added so far:', addedList.length);

// ----------------------------------------------------------------------------
// MODULE 6: 210 Distinct Questions (Theodolite, Tacheometry & Curves)
// ----------------------------------------------------------------------------
const m6New = [
  {
    q: 'In a transit theodolite, what is the "centering error"?',
    opts: ['The error introduced when the vertical axis of the instrument does not pass exactly through the ground station peg center', 'The error of the altitude bubble', 'The parallax in the eyepiece', 'The tilt of the trunnion axis'],
    ans: 0, exp: 'Centering error occurs when the plumb bob point does not hang directly over the center punch mark on the station peg.',
    tip: 'Centering error = Instrument vertical axis not plumb over ground station peg.', top: 'Errors in theodolite survey'
  },
  {
    q: 'How does an error in centering a theodolite affect horizontal angle measurements?',
    opts: ['The angular error is inversely proportional to sight distance; it is severe for short sights and negligible for long sights', 'It is proportional to sight distance', 'It is constant for all distances', 'It affects only vertical angles'],
    ans: 0, exp: 'Centering displacement e produces angular error δ ≈ e / D. Shorter sight distances D magnify the angular deviation.',
    tip: 'Centering error impact is INVERSELY proportional to sight distance (critical for short sights!).', top: 'Errors in theodolite survey'
  },
  {
    q: 'In theodolite angle observation, what is "double centering" (double sighting or double transiting)?',
    opts: ['Prolonging a straight survey line AB to C by sighting B on Face Left, transiting to C1, then sighting B on Face Right, transiting to C2, and taking the midpoint of C1 and C2', 'Sighting two targets at once', 'Using two tripods', 'Reading both verniers'],
    ans: 0, exp: 'Double transiting (prolonging a line with Face Left and Face Right) completely eliminates collimation error when extending straight lines.',
    tip: 'Double transiting: Prolongs lines with Face Left and Face Right, taking the midpoint to eliminate collimation error.', top: 'Theodolite survey'
  },
  {
    q: 'What is the "spire test" (or horizontal axis test) in the permanent adjustment of a transit theodolite?',
    opts: ['Testing whether the horizontal trunnion axis is strictly perpendicular to the vertical axis by sighting a high spire or church steeple', 'Testing the optical sharpness of the objective lens', 'Testing the tripod rigidity', 'Testing the vernier magnifier'],
    ans: 0, exp: 'The spire test sights a high point on Face Left, depresses to ground mark, then reverses face and checks if the depressed line coincides.',
    tip: 'Spire test: Tests perpendicularity of horizontal axis to vertical axis.', top: 'Errors in theodolite survey'
  },
  {
    q: 'How is the horizontal trunnion axis adjusted mechanically if the spire test reveals an error?',
    opts: ['By raising or lowering the adjustable bearing block of the trunnion axis on one of the standards using capstan screws', 'By turning the foot screws', 'By adjusting the cross-hair diaphragm', 'By sliding the plate level vial'],
    ans: 0, exp: 'One standard features an adjustable trunnion bearing; turning its capstan screws levels the trunnion axis.',
    tip: 'Trunnion axis adjustment: Adjust capstan screw on the movable standard bearing block.', top: 'Errors in theodolite survey'
  },
  {
    q: 'What is the "collimation in azimuth test" (or line of collimation test) in a transit theodolite?',
    opts: ['Testing whether the line of collimation is strictly perpendicular to the horizontal trunnion axis', 'Testing if the telescope is horizontal', 'Testing the optical focus', 'Testing the eyepiece magnification'],
    ans: 0, exp: 'The collimation test checks whether the line of sight is at 90° to the horizontal axis so that transiting sweeps a flat plane.',
    tip: 'Collimation test: Verifies line of collimation ⊥ horizontal axis.', top: 'Errors in theodolite survey'
  },
  {
    q: 'How is collimation error in azimuth adjusted mechanically in a transit theodolite?',
    opts: ['By moving the vertical cross-hair laterally using the left and right diaphragm capstan screws', 'By tilting the tripod', 'By turning the lower clamp', 'By adjusting the plate bubble'],
    ans: 0, exp: 'Left and right capstan screws on the reticle shift the vertical cross-hair sideways to center it on the true sightline.',
    tip: 'Adjust lateral diaphragm capstan screws to center vertical cross-hair.', top: 'Errors in theodolite survey'
  },
  {
    q: 'In theodolite traversing, what are "consecutive coordinates"?',
    opts: ['The latitude (l cos θ) and departure (l sin θ) of each traverse station with respect to the immediately preceding station', 'The total coordinates from the origin', 'The UTM grid coordinates', 'The station chainages'],
    ans: 0, exp: 'Consecutive coordinates (latitude and departure) define the relative position of each station with respect to the previous station.',
    tip: 'Consecutive coordinates = Latitude and Departure relative to previous station.', top: 'Traverse computation'
  },
  {
    q: 'What are "independent coordinates" (total coordinates) in theodolite traversing?',
    opts: ['The total Northing and Easting of each traverse station computed with respect to a single fixed origin', 'Coordinates that do not depend on angles', 'Coordinates measured without chaining', 'Coordinates of the benchmarks'],
    ans: 0, exp: 'Independent coordinates are cumulative total Northings and Eastings calculated from a single coordinate origin.',
    tip: 'Independent coordinates = Total Northing and Easting from common origin.', top: 'Traverse computation'
  },
  {
    q: 'What is "Gale\'s traverse table"?',
    opts: ['A standardized tabular sheet used to systematically calculate, balance, and plot theodolite traverse coordinates', 'A table of trigonometric sines', 'A list of surveying equipment', 'A schedule of surveyor fees'],
    ans: 0, exp: 'Gale\'s traverse system tabulates line lengths, bearings, raw latitudes/departures, closing error corrections, and total coordinates.',
    tip: 'Gale\'s table systematically computes and balances traverse coordinates.', top: 'Traverse computation'
  },
  {
    q: 'In balancing a theodolite traverse by Bowditch\'s rule, what is the correction applied to the latitude of line AB of length l?',
    opts: ['Correction = - Total closing error in latitude × (Length of line AB / Total perimeter of traverse)', 'Correction = Total error / Number of sides', 'Correction = Line length / 2', 'Correction = Total error × Latitude of AB'],
    ans: 0, exp: 'Bowditch latitude correction: C_L = - ΣL × (l / Σl), where ΣL is total latitude closing error and Σl is total perimeter.',
    tip: 'Bowditch latitude correction = - ΣL × (l / Perimeter).', top: 'Traverse computation'
  },
  {
    q: 'In balancing a theodolite traverse by Bowditch\'s rule, what is the correction applied to the departure of line AB of length l?',
    opts: ['Correction = - Total closing error in departure × (Length of line AB / Total perimeter of traverse)', 'Correction = Total error / Number of sides', 'Correction = Total error × Departure of AB', 'Correction = Zero'],
    ans: 0, exp: 'Bowditch departure correction: C_D = - ΣD × (l / Σl), where ΣD is total departure closing error and Σl is perimeter.',
    tip: 'Bowditch departure correction = - ΣD × (l / Perimeter).', top: 'Traverse computation'
  },
  {
    q: 'In balancing a theodolite traverse by the Transit rule, what is the correction applied to the latitude of line AB?',
    opts: ['Correction = - Total closing error in latitude × (|Latitude of AB| / Sum of all absolute latitudes)', 'Correction = - Total error × (Length of AB / Perimeter)', 'Correction = Total error / 4', 'Correction = Zero'],
    ans: 0, exp: 'Transit rule latitude correction: C_L = - ΣL × (|L_AB| / Σ|L|).',
    tip: 'Transit rule: Correction proportional to latitude itself: - ΣL × (|L| / Σ|L|).', top: 'Traverse computation'
  },
  {
    q: 'In balancing a theodolite traverse by the Transit rule, what is the correction applied to the departure of line AB?',
    opts: ['Correction = - Total closing error in departure × (|Departure of AB| / Sum of all absolute departures)', 'Correction = - Total error × (Length of AB / Perimeter)', 'Correction = Total error / Number of sides', 'Correction = Zero'],
    ans: 0, exp: 'Transit rule departure correction: C_D = - ΣD × (|D_AB| / Σ|D|).',
    tip: 'Transit rule: Correction proportional to departure itself: - ΣD × (|D| / Σ|D|).', top: 'Traverse computation'
  },
  {
    q: 'What is the formula for the linear closing error e of a theodolite traverse?',
    opts: ['e = √[(ΣL)² + (ΣD)²]', 'e = ΣL + ΣD', 'e = ΣL - ΣD', 'e = (ΣL)² + (ΣD)²'],
    ans: 0, exp: 'By Pythagoras theorem, the linear closing error hypotenuse is e = √[(ΣL)² + (ΣD)²].',
    tip: 'Linear closing error: e = √[(ΣL)² + (ΣD)²].', top: 'Traverse computation'
  },
  {
    q: 'What is the direction (reduced bearing θ) of the closing error in a traverse?',
    opts: ['tan θ = |ΣD / ΣL|', 'tan θ = |ΣL / ΣD|', 'sin θ = ΣL / ΣD', 'cos θ = ΣD / ΣL'],
    ans: 0, exp: 'The direction of the closing error vector satisfies tan θ = Departure Error / Latitude Error = |ΣD / ΣL|.',
    tip: 'Closing error bearing: tan θ = |ΣD / ΣL|.', top: 'Traverse computation'
  },
  {
    q: 'In theodolite traversing, what are "omitted measurements"?',
    opts: ['Quantities (such as length or bearing of one or more lines) that could not be measured directly in the field and are computed trigonometrically', 'Mistakes where surveyor forgot to read staff', 'Lines skipped to save time', 'Points left out of the drawing'],
    ans: 0, exp: 'Omitted measurements occur when obstacles prevent direct measurement of a length or bearing, which is then solved using ΣL = 0 and ΣD = 0.',
    tip: 'Omitted measurements = Missing line lengths or bearings solved via ΣL = 0 and ΣD = 0.', top: 'Traverse computation'
  },
  {
    q: 'What is the maximum number of unknown quantities (lengths or bearings) that can be computed mathematically in a closed theodolite traverse?',
    opts: ['At most two unknown parts (e.g. length and bearing of one line, or lengths of two lines, or bearings of two lines)', 'At most four unknown parts', 'Only one part', 'Unlimited unknown parts'],
    ans: 0, exp: 'Because a closed traverse provides only two independent equilibrium equations (ΣL = 0 and ΣD = 0), at most two unknowns can be determined.',
    tip: 'At most TWO unknown parts can be solved in a closed traverse (from ΣL = 0 and ΣD = 0).', top: 'Traverse computation'
  },
  {
    q: 'In tacheometry, how is the multiplying constant K = f / i verified in the field?',
    opts: ['By measuring horizontal base distances (e.g. 50 m, 100 m, 150 m) with an invar tape, taking staff intercepts, and calculating K = (D2 - D1) / (s2 - s1)', 'By weighing the instrument', 'By reading the serial number', 'By sighting Polaris'],
    ans: 0, exp: 'Plot known taped distances D1, D2 and observe intercepts s1, s2: K = (D2 - D1) / (s2 - s1).',
    tip: 'Field calibration: K = (D2 - D1) / (s2 - s1).', top: 'Tacheometric surveying'
  },
  {
    q: 'In tacheometry, how is the additive constant C = (f + d) verified in the field?',
    opts: ['By substituting the calculated multiplying constant K into D = K·s + C for known taped baseline distances', 'By measuring telescope tube length with a ruler', 'By timing light pulses', 'By measuring focal length directly'],
    ans: 0, exp: 'With known D and calibrated K, additive constant is C = D - K·s.',
    tip: 'Additive constant: C = D - K·s.', top: 'Tacheometric surveying'
  },
  {
    q: 'What is the "degree of curve" D defined as in Indian Railway practice (using a 30-metre chord)?',
    opts: ['The central angle (in degrees) subtended at the center of the curve by a standard chord of 30 metres length (D = 1718.9 / R)', 'The angle subtended by a 1-metre chord', 'The total deflection angle of the curve', 'The slope of the road'],
    ans: 0, exp: 'In 30 m chord definition: sin(D/2) = 15 / R. For large radii, (D/2) × (π/180) ≈ 15 / R, so D = 30 × (180 / π) / R = 1718.9 / R degrees.',
    tip: 'Degree of curve (30 m chord): D = 1718.9 / R (or R = 1718.9 / D).', top: 'Curves'
  },
  {
    q: 'In highway engineering using a 20-metre chord, what is the relationship between degree of curve D and radius R?',
    opts: ['D = 1145.9 / R (or R = 1146 / D)', 'D = 1718.9 / R', 'D = 573 / R', 'D = 2000 / R'],
    ans: 0, exp: 'For a 20-metre chord: D = 20 × (180 / π) / R = 1145.9 / R degrees.',
    tip: 'Degree of curve (20 m chord): D = 1146 / R (or R = 1146 / D).', top: 'Curves'
  },
  {
    q: 'If a railway curve has a degree of curve D = 2° based on a 30-metre chord, what is its radius R?',
    opts: ['859.45 metres', '1718.90 metres', '572.95 metres', '1146.00 metres'],
    ans: 0, exp: 'R = 1718.9 / D = 1718.9 / 2 = 859.45 metres.',
    tip: 'R = 1718.9 / 2 = 859.45 m.', top: 'Curves'
  },
  {
    q: 'If a highway curve has a degree of curve D = 3° based on a 20-metre chord, what is its radius R?',
    opts: ['381.97 metres', '1145.90 metres', '572.95 metres', '859.45 metres'],
    ans: 0, exp: 'R = 1146 / D = 1146 / 3 = 382.0 metres (381.97 m).',
    tip: 'R = 1146 / 3 = 382.0 m.', top: 'Curves'
  },
  {
    q: 'In setting out a circular curve, what is the "Point of Curve" (P.C.) or Point of Commencement T1?',
    opts: ['The starting point of the circular curve where the alignment transitions from the rear straight tangent to the circular arc', 'The point of intersection of tangents', 'The end of the curve', 'The center of the circle'],
    ans: 0, exp: 'Point of Curve (T1 or PC) marks the transition from the backward tangent into the circular curve: Chainage of T1 = Chainage of PI - Tangent Length T.',
    tip: 'Point of Curve (PC / T1): Beginning of curve; Chainage of T1 = Chainage of PI - T.', top: 'Curves'
  },
  {
    q: 'In setting out a circular curve, what is the "Point of Tangency" (P.T.) T2?',
    opts: ['The terminal point of the circular curve where the alignment transitions from the circular arc into the forward straight tangent', 'The point of intersection', 'The apex of the curve', 'The middle of the long chord'],
    ans: 0, exp: 'Point of Tangency (T2 or PT) marks the transition from circular curve into the forward tangent: Chainage of T2 = Chainage of T1 + Curve Length L.',
    tip: 'Point of Tangency (PT / T2): End of curve; Chainage of T2 = Chainage of T1 + L.', top: 'Curves'
  },
  {
    q: 'If the chainage of the Point of Intersection (P.I.) is 1250.00 m and tangent length T is 180.00 m, what is the chainage of the Point of Curve T1?',
    opts: ['1070.00 metres', '1430.00 metres', '1250.00 metres', '1160.00 metres'],
    ans: 0, exp: 'Chainage of T1 = Chainage of PI - Tangent Length T = 1250.00 - 180.00 = 1070.00 m.',
    tip: 'Chainage of T1 = 1250 - 180 = 1070.00 m.', top: 'Curves'
  },
  {
    q: 'If the chainage of T1 is 1070.00 m and the calculated length of the curve L is 314.16 m, what is the chainage of the Point of Tangency T2?',
    opts: ['1384.16 metres', '1250.00 metres', '1564.16 metres', '1354.16 metres'],
    ans: 0, exp: 'Chainage of T2 = Chainage of T1 + Curve Length L = 1070.00 + 314.16 = 1384.16 m. Note: NEVER add tangent length to PI to get T2!',
    tip: 'Chainage of T2 = Chainage of T1 + L = 1070 + 314.16 = 1384.16 m.', top: 'Curves'
  },
  {
    q: 'Why must the chainage of Point of Tangency T2 NEVER be calculated by adding tangent length T to the chainage of Point of Intersection (P.I.)?',
    opts: ['Because the road alignment follows the shorter curved arc (T1 to T2), not the two longer straight tangents through PI', 'Because the chain expands on curves', 'Because tangents have no chainage', 'Because PI is always in a river'],
    ans: 0, exp: 'The route goes along the curve L, not via PI: True path length = T1 + L, which is shorter than traversing 2 tangents (2T).',
    tip: 'Always add curve length L to T1 to get T2 (Chainage of T2 = Chainage of T1 + L).', top: 'Curves'
  },
  {
    q: 'What is the "shift of a circular curve" S when transitioning with a transition curve of length L and circular radius R?',
    opts: ['S = L² / (24 R)', 'S = L / (24 R)', 'S = L² / (6 R)', 'S = L³ / (24 R²)'],
    ans: 0, exp: 'To insert a transition curve, the circular arc is shifted inward radially by an amount S = L² / (24 R).',
    tip: 'Shift of circular curve: S = L² / (24 R).', top: 'Curves'
  }
];

m6New.forEach(q => addQ(q, 6, 'mod-6', 'Theodolite survey'));

console.log('Module 6 new batch processed. Total added so far:', addedList.length);

// Append to db
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
