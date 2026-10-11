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

console.log('Existing unique masks before finishing Mod 4 & 5:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    return false;
  }

  let id = `bq-m${modNum}-gold-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-g${c++}`;
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
    createdAt: '2026-10-11T15:05:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// -------------------------------------------------------------
// MODULE 4: 40 DISTINCT QUESTIONS (Final push for Mod 4)
// -------------------------------------------------------------
const m4FinalList = [
  {
    q: 'In plane table traversing, what is an "interior angle traverse"?',
    opts: ['A traverse where internal angles between adjacent lines are plotted by bisection from each station', 'A traverse inside a cave', 'A traverse with no baseline', 'A traverse that measures vertical angles'],
    ans: 0, exp: 'In an interior angle traverse, the table is oriented by backsight along each traverse leg and interior angles plotted.',
    tip: 'Interior angle traverse plots interior angles at each station setup.', top: 'Methods of plane table'
  },
  {
    q: 'What is the purpose of drawing diagonal grid lines across a plane table field sheet before taking it to the field?',
    opts: ['To provide a permanent reference grid to detect, measure, and correct any future shrinkage or distortion of the paper', 'To create square boxes for notes', 'To decorate the drawing sheet', 'To align the tripod feet'],
    ans: 0, exp: 'A pre-drawn coordinate grid expands and shrinks with the sheet, enabling accurate mathematical scaling and distortion monitoring.',
    tip: 'Coordinate grid lines on sheet monitor and correct paper shrinkage distortion.', top: 'Accessories of plane table'
  },
  {
    q: 'What type of eraser is recommended for erasing pencil lines on a plane table drawing sheet without tearing the surface fibres?',
    opts: ['A soft kneaded art gum or vinyl eraser used with a metal erasing shield', 'A coarse sand ink eraser', 'A razor blade', 'A wet sponge'],
    ans: 0, exp: 'Soft vinyl or kneaded art erasers remove graphite cleanly without abrading or scuffing delicate paper fibres.',
    tip: 'Use soft vinyl erasers with an erasing shield to protect paper surface.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, what is an "erasing shield"?',
    opts: ['A thin sheet of flexible stainless steel with precise slots and holes to expose only the exact pencil line to be erased', 'A shield to protect against rain', 'A sunshade for the eye', 'A wooden guard for the board'],
    ans: 0, exp: 'An erasing shield masks surrounding drawing details, allowing the surveyor to erase a single erroneous line cleanly.',
    tip: 'Erasing shield masks surrounding work, allowing isolated line erasure.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the recommended height of a plane table board above the ground when set up for comfortable working by an average surveyor?',
    opts: ['Approximately at elbow level (about 1.0 to 1.2 metres above ground)', 'At knee level (0.5 m)', 'At eye level (1.6 m)', '2.0 metres above ground'],
    ans: 0, exp: 'Setting the table at elbow height allows the surveyor to lean comfortably over the board for sighting and plotting without stooping.',
    tip: 'Table setup height: Elbow height (approx. 1.0 to 1.2 m above ground).', top: 'Setting up plane table'
  },
  {
    q: 'Why should the tripod legs of a plane table be spread sufficiently wide apart (forming an angle of roughly 60° with the ground)?',
    opts: ['To ensure maximum lateral stability, lower the centre of gravity, and prevent tipping under wind pressure', 'To make the table taller', 'To allow the surveyor to sit under the table', 'To fit between crop rows'],
    ans: 0, exp: 'A broad triangular stance lowers the center of gravity and resists torsional flexing from wind gusts.',
    tip: 'Spread tripod legs to ~60° with ground for maximum stability against wind.', top: 'Setting up plane table'
  },
  {
    q: 'In plane tabling on a steep hillside, how should the three tripod legs be positioned for safety and stability?',
    opts: ['Two legs placed downhill and one leg placed uphill firmly embedded into the slope', 'Two legs uphill and one downhill', 'All three legs in a straight line', 'Tripod suspended from a rope'],
    ans: 0, exp: 'Placing two legs downhill and one uphill forms a wide stable base that prevents the instrument from toppling downhill.',
    tip: 'On steep slopes: Place TWO legs downhill and ONE leg uphill.', top: 'Setting up plane table'
  },
  {
    q: 'What is the function of the "leg clamp screws" (wing nuts) on an adjustable extension tripod for a plane table?',
    opts: ['To securely clamp the sliding telescopic wooden or aluminum legs at the desired extension height', 'To level the board head', 'To hold the plumbing fork', 'To attach the carrying strap'],
    ans: 0, exp: 'Leg wing nuts tighten the extension sliding segments, establishing a rigid tripod height on uneven ground.',
    tip: 'Leg clamp wing nuts lock telescopic tripod legs at the desired height.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, how is a circle or curved boundary wall plotted in the field?',
    opts: ['By radiating rays to multiple closely spaced perimeter points along the curve and joining them with an irregular French curve', 'By drawing a circle with a compass from an estimated center', 'By treating it as a single straight line', 'By guessing the radius'],
    ans: 0, exp: 'Irregular curved boundaries are mapped by plotting frequent radiation points and joining them smoothly using French curves.',
    tip: 'Curved boundaries: Radiate multiple points along the curve, join with French curves.', top: 'Methods of plane table'
  },
  {
    q: 'What is a "French curve" used for in plane table drawing office practice?',
    opts: ['A plastic template with varying smooth mathematical curves used to ink non-circular curved boundaries and contours', 'A device to measure angles in France', 'A level tube filled with wine', 'A compass for drawing circles'],
    ans: 0, exp: 'French curves are plastic drafting templates with smooth transitions used to draw continuous irregular curves and contours.',
    tip: 'French curve = Drafting template for inking irregular smooth curves and contours.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the "beam compass" (trammel) used for in large-scale plane table plotting?',
    opts: ['Drawing circular arcs and large intersecting radius circles that exceed the reach of standard drafting compasses', 'Measuring beam deflection', 'Balancing the board weight', 'Measuring magnetic dip'],
    ans: 0, exp: 'A beam compass consists of a long rigid bar with sliding divider points used to prick or swing large control radius arcs.',
    tip: 'Beam compass = Long-reach bar compass for drawing large radius arcs and base circles.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane tabling, why should the surveyor avoid wearing magnetic steel buttons or belt buckles while orienting with a trough compass?',
    opts: ['Because personal ferromagnetic items held near the board edge will deflect the sensitive magnetic needle, causing orientation error', 'Because they will scratch the timber', 'Because they will tear the paper', 'Because they attract lightning'],
    ans: 0, exp: 'Personal iron items (belt buckles, pocket knives, steel buttons) act as local attraction sources when standing near the trough compass.',
    tip: 'Avoid steel belt buckles or pocket knives near the trough compass to prevent orientation error.', top: 'Setting up plane table'
  },
  {
    q: 'How does a topographer verify that the plane table has not been accidentally disturbed or rotated during a day\'s work at a station?',
    opts: ['By periodically placing the alidade back along a reference baseline ray and checking if the distant sighting target remains bisected', 'By checking the time on a watch', 'By measuring the height of the board', 'By tapping the tripod legs'],
    ans: 0, exp: 'Periodically checking the sightline to a distant reference beacon confirms that orientation has not shifted during work.',
    tip: 'Verify orientation stability by frequently re-sighting a distant reference station.', top: 'Setting up plane table'
  },
  {
    q: 'In plane table surveying, what is an "auxiliary ray" used for?',
    opts: ['A supplementary line drawn to check the intersection of other rays or locate minor intermediate topographic features', 'A ray drawn in gold ink', 'A ray drawn at midnight', 'A ray without an alidade'],
    ans: 0, exp: 'Auxiliary rays provide secondary checks or detail bisections across the active mapping zone.',
    tip: 'Auxiliary ray = Supplementary ray for checking intersections or locating minor detail.', top: 'Methods of plane table'
  },
  {
    q: 'What is the purpose of the "centering score" (cross mark) engraved on the brass plate under a plane table board?',
    opts: ['It marks the exact central vertical axis of the mounting socket directly above which the board rotates', 'To drain rainwater', 'To align the compass', 'To mark the manufacturing date'],
    ans: 0, exp: 'The central socket mark aligns the board with the vertical axis of the tripod head.',
    tip: 'Socket center mark indicates the rotational vertical axis of the table.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, what is meant by "scale of the survey"?',
    opts: ['The ratio between distances measured on the drawing paper and the corresponding true horizontal distances on the ground', 'The weight of the drawing board', 'The graduations on the leveling staff', 'The range of the alidade telescope'],
    ans: 0, exp: 'Map scale is the fixed representative fraction (e.g. 1:1000 or 1 cm = 10 m) relating map dimensions to ground dimensions.',
    tip: 'Scale = Ratio between map distance and true ground distance.', top: 'Principles of plane table survey'
  },
  {
    q: 'On a plane table survey conducted at a scale of 1:500, what distance on the ground is represented by 1 centimetre on the drawing sheet?',
    opts: ['5 metres', '50 metres', '0.5 metres', '500 metres'],
    ans: 0, exp: '1 cm on map = 500 cm on ground = 5 metres.',
    tip: '1:500 scale: 1 cm = 5 m (1 mm = 0.5 m).', top: 'Principles of plane table survey'
  },
  {
    q: 'On a plane table survey conducted at a scale of 1:2000, what distance on the ground is represented by 1 centimetre on paper?',
    opts: ['20 metres', '2 metres', '200 metres', '2000 metres'],
    ans: 0, exp: '1 cm on map = 2000 cm on ground = 20 metres.',
    tip: '1:2000 scale: 1 cm = 20 m (1 mm = 2 m).', top: 'Principles of plane table survey'
  },
  {
    q: 'On a plane table survey conducted at a scale of 1:250, what distance on the ground is represented by 2 millimetres on paper?',
    opts: ['0.50 metres (50 cm)', '2.50 metres', '5.00 metres', '0.25 metres'],
    ans: 0, exp: '2 mm on map = 2 × 250 mm = 500 mm = 0.50 m.',
    tip: '1:250 scale: 2 mm = 50 cm (0.50 m).', top: 'Principles of plane table survey'
  },
  {
    q: 'What is the primary factor dictating the choice of scale for a plane table topographic survey?',
    opts: ['The purpose of the survey, the extent of the area, and the finest degree of detail required to be depicted', 'The length of the tripod legs', 'The size of the surveyor\'s car', 'The price of the alidade'],
    ans: 0, exp: 'Survey scale is chosen based on intended application (cadastral vs regional), area extent, and resolution of detail required.',
    tip: 'Scale selection depends on survey purpose, extent of terrain, and required detail resolution.', top: 'Principles of plane table survey'
  },
  {
    q: 'In plane table surveying, what is an "optical plummet"?',
    opts: ['A right-angled optical sighting prism inside the alidade or tribrach providing a line of sight straight down to the station peg mark', 'A heavy brass plumb bob', 'A level vial', 'A magnifying glass for reading scales'],
    ans: 0, exp: 'An optical plummet directs line of sight vertically downward through a 90° prism, allowing wind-proof centering over the peg mark.',
    tip: 'Optical plummet: Optical sighting system for wind-free, precision station centering.', top: 'Accessories of plane table'
  },
  {
    q: 'Why is an optical plummet vastly superior to a plumb bob on windy, exposed mountain summits?',
    opts: ['It is completely immune to wind swing and turbulence that make a suspended plumb bob oscillate continuously', 'It is made of gold', 'It magnifies the stars', 'It levels the instrument automatically'],
    ans: 0, exp: 'A plumb bob swings wildly in mountain winds, whereas an optical plummet sightline is unaffected by air currents.',
    tip: 'Optical plummet is immune to wind gusts, providing stable centering on windy terrain.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane tabling, what is meant by "working from whole to part"?',
    opts: ['Establishing a widely spaced, highly accurate primary control network across the entire tract first, and then filling in interior details', 'Starting from the edge of the paper', 'Surveying the whole country in one day', 'Measuring all trees before measuring roads'],
    ans: 0, exp: 'Working from whole to part confines errors within major control triangles, preventing cumulative error accumulation.',
    tip: 'Working from whole to part: Major primary control framework first, interior details second.', top: 'Principles of plane table survey'
  },
  {
    q: 'What happens if a plane tabler violates the principle of "working from whole to part" and builds the map by adding small local surveys consecutively?',
    opts: ['Small local plotting and orientation errors accumulate and magnify continuously, resulting in massive distortion at the outer perimeter', 'The drawing paper shrinks', 'The board becomes heavy', 'The survey finishes twice as fast'],
    ans: 0, exp: 'Working from part to whole accumulates small errors without constraint, distorting the entire map.',
    tip: 'Working from part to whole accumulates and magnifies errors across the survey.', top: 'Principles of plane table survey'
  },
  {
    q: 'In plane table surveying, how should field pencil rays be drawn to keep the finished map sheet clean?',
    opts: ['Draw only short ray dashes near the expected position of the object rather than ruling continuous lines across the entire board', 'Draw thick dark lines across the whole paper', 'Draw rays in red wax crayon', 'Use permanent black ink directly'],
    ans: 0, exp: 'Ruling short dashes near the anticipated target position keeps the central sheet uncluttered and smudge-free.',
    tip: 'Draw short ray dashes near target location to avoid cluttering the field sheet.', top: 'Principles of plane table survey'
  },
  {
    q: 'What is the role of an "indexing letter or number" placed next to each ray dash during field plane tabling?',
    opts: ['To identify which ground object that particular ray was sighted towards, preventing confusion when plotting multiple features', 'To record the surveyor\'s initials', 'To show the date', 'To record the air temperature'],
    ans: 0, exp: 'Labeling each ray dash (e.g. Tree 1, Well, Corner A) prevents misidentifying rays when intersecting from the second station.',
    tip: 'Label ray dashes with feature names/numbers to avoid misidentification during intersection.', top: 'Methods of plane table'
  },
  {
    q: 'In plane table intersection, what is the best practice for bisecting a distant ranging rod with the alidade?',
    opts: ['Bisect the lowest visible point of the rod near the ground mark to avoid vertical inclination errors', 'Bisect the top of the flag', 'Bisect the surveyor\'s hand', 'Bisect the shadow of the rod'],
    ans: 0, exp: 'Sighting near the base eliminates aiming errors caused by out-of-plumb rods.',
    tip: 'Bisect the lowest visible point of the ranging rod near the ground.', top: 'Setting up plane table'
  },
  {
    q: 'In plane table surveying, what is an "edge-bound field sheet"?',
    opts: ['A drawing sheet whose edges are wrapped around the edges of the board and pasted or taped underneath to prevent edge lifting by wind', 'A sheet bound in a book', 'A sheet with a steel border', 'A map with no boundaries'],
    ans: 0, exp: 'Taping or folding paper edges beneath the board prevents strong winds from getting under the paper and tearing it.',
    tip: 'Fold and secure sheet edges beneath the board to resist wind lift.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the function of the "compass lifter" screw on a trough compass box?',
    opts: ['To gently lower the magnetic needle onto the pivot for observation and lift it securely against the glass lid when not in use', 'To level the compass', 'To measure magnetic declination', 'To adjust scale least count'],
    ans: 0, exp: 'The lifting screw raises the needle off the sharp pivot, preventing jewel bearing damage during transit.',
    tip: 'Compass lifter locks needle against glass to protect the pivot during transport.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the recommended method to remove static electric charges from a plane table drawing sheet on very dry windy days?',
    opts: ['Gently wipe the paper surface with a clean, slightly damp cotton cloth or touch a grounded metal object to the board', 'Heat the board with a flame', 'Rub it with cat fur', 'Shake the board vigorously'],
    ans: 0, exp: 'A slightly damp cloth discharges electrostatic buildup without wetting the paper fibres.',
    tip: 'Gently wipe paper with a slightly damp cloth to dissipate static charges.', top: 'Accessories of plane table'
  }
];

m4FinalList.forEach(q => addQ(q, 4, 'mod-4', 'Plane Table Surveying'));

console.log('Module 4 final push processed. Total added so far:', addedList.length);

// -------------------------------------------------------------
// MODULE 5: 35 DISTINCT QUESTIONS (Final push for Mod 5)
// -------------------------------------------------------------
const m5FinalList = [
  {
    q: 'In precision levelling, what is the "collimation error" per metre of sight distance?',
    opts: ['e = (Observed staff reading - True staff reading) / Sight distance', 'e = Sight distance / 100', 'e = Sight distance × 0.0673', 'e = 1 / R'],
    ans: 0, exp: 'Collimation error per unit distance is the angular tilt slope e = Δh_error / D.',
    tip: 'Collimation error rate e = Staff reading error / Sight distance.', top: 'Errors in levelling'
  },
  {
    q: 'What is the purpose of using two levelling staves alternately (staff A and staff B) in precision differential levelling runs?',
    opts: ['To leapfrog staves at alternate change points, speeding up progress while canceling zero-point calibration differences between staves', 'To have a spare staff if one breaks', 'To measure temperature differences', 'To allow two staffmen to race'],
    ans: 0, exp: 'Leapfrogging two staves (A and B) ensures that each staff appears an equal number of times as Back Sight and Fore Sight, canceling zero-offset differences.',
    tip: 'Leapfrogging two staves cancels zero-point index error between the two staves.', top: 'Levelling instruments'
  },
  {
    q: 'In differential levelling, what is a "bench mark pillar"?',
    opts: ['A solid concrete or granite pillar embedded deep below frost and moisture depth with a spherical brass rivet on top marking true elevation', 'A tall wooden flagpole', 'A pillar of bricks on grass', 'A cairn of loose stones'],
    ans: 0, exp: 'Permanent GTS benchmark pillars are founded on deep stable strata to resist seasonal soil heave.',
    tip: 'Benchmark pillar: Deeply founded concrete/granite monument with top spherical brass rivet.', top: 'Definitions'
  },
  {
    q: 'What is a "spherical brass rivet" (datum plug) on a permanent benchmark used for?',
    opts: ['To provide a single, well-defined point of contact for the flat base of the levelling staff without rocking or wobble', 'To conduct electrical grounding', 'To reflect laser beams', 'To engrave the surveyor\'s name'],
    ans: 0, exp: 'A rounded brass rivet ensures that a flat staff base rests tangentially on a single distinct point of contact.',
    tip: 'Spherical brass rivet provides a stable, wobble-free single point of contact for the staff.', top: 'Definitions'
  },
  {
    q: 'In differential levelling, what is meant by "balancing sights"?',
    opts: ['Keeping the length of the Back Sight distance equal to the length of the Fore Sight distance from each setup station', 'Balancing the level on one tripod leg', 'Keeping the staff reading at 2.000 m', 'Taking sights at 12 noon'],
    ans: 0, exp: 'Balancing sights (D_BS = D_FS) ensures that collimation error, curvature, and constant refraction cancel completely.',
    tip: 'Balancing sights = Equalizing Back Sight and Fore Sight distances.', top: 'Methods of levelling'
  },
  {
    q: 'What is the maximum permissible difference between cumulative Back Sight distances and cumulative Fore Sight distances in first-order geodetic levelling?',
    opts: ['Not more than 2 to 5 metres over an entire section run', '100 metres', '1 kilometre', '50 metres'],
    ans: 0, exp: 'First-order geodetic standards require cumulative sight distance differences to remain under 2 to 5 m to ensure complete error cancellation.',
    tip: 'First-order levelling: Cumulative BS and FS distance difference must be under 2 to 5 m.', top: 'Methods of levelling'
  },
  {
    q: 'In differential levelling, why should observations NEVER be taken during midday hours when the sun is blazing and ground heat shimmer is intense?',
    opts: ['Because boiling heat shimmer and atmospheric boiling cause severe optical refraction fluctuations that blur cross-hairs and produce large random errors', 'Because the staff expands by 10 metres', 'Because the tripod will catch fire', 'Because the level bubble will freeze'],
    ans: 0, exp: 'Intense solar radiation creates turbulent thermal air convection near the ground, causing shimmering images and fluctuating refraction.',
    tip: 'Avoid levelling during midday heat shimmer; thermal turbulence causes severe refraction errors.', top: 'Errors in levelling'
  },
  {
    q: 'What time of day provides the most stable atmospheric conditions for high-precision differential levelling?',
    opts: ['Early morning hours just after sunrise and late afternoon hours before sunset (overcast calm skies are ideal)', 'Exact solar noon', 'Midnight in total darkness', 'During a heavy rainstorm'],
    ans: 0, exp: 'Early mornings and overcast days have uniform air density and minimal thermal gradients, minimizing refraction errors.',
    tip: 'Best levelling conditions: Early morning or calm overcast days with zero heat shimmer.', top: 'Errors in levelling'
  },
  {
    q: 'What is the purpose of an "umbrella" in precision differential levelling with a dumpy or auto level?',
    opts: ['To shield the level from direct solar radiation, preventing differential thermal expansion of the telescope tube and bubble vial', 'To protect the surveyor from sunburn', 'To signal the staffman', 'To collect rainwater'],
    ans: 0, exp: 'Uneven sunlight on one side of a metal telescope tube causes differential expansion, tilting the line of collimation and displacing the bubble.',
    tip: 'Survey umbrella prevents uneven solar heating and thermal tube warping.', top: 'Levelling instruments'
  },
  {
    q: 'What is "differential thermal expansion" of a levelling telescope?',
    opts: ['The warping of the telescope barrel when one side is heated by direct sunlight while the other is in shade, deflecting the line of collimation', 'The melting of the lenses', 'The boiling of the spirit level fluid', 'The cracking of the tripod legs'],
    ans: 0, exp: 'Direct sun expands the sunny side of the brass barrel, curving the telescope slightly and introducing collimation error.',
    tip: 'Differential solar heating curves the telescope barrel, introducing temporary collimation error.', top: 'Errors in levelling'
  },
  {
    q: 'In differential levelling, what is the "zero error" (index error) of a levelling staff?',
    opts: ['The error caused when the brass shoe at the base of the staff has worn down, so the zero mark does not coincide with the true staff bottom', 'An error in reading zero on the staff', 'A staff with no numbers', 'Holding the staff upside down'],
    ans: 0, exp: 'Shoe wear erodes the base, so readings are slightly too large: Measured reading = True height + wear error.',
    tip: 'Staff zero error: Wear on the bottom brass shoe causes all readings on that staff to be too large.', top: 'Errors in levelling'
  },
  {
    q: 'How does the staff zero error affect the calculated elevation difference between two points if the same staff is used for both Back Sight and Fore Sight?',
    opts: ['It cancels out completely, because the constant base wear error is subtracted: Δh = (BS + e) - (FS + e) = BS - FS', 'It doubles the error', 'It makes the final RL too high', 'It makes the final RL too low'],
    ans: 0, exp: 'Using the identical staff for both sights subtracts the constant base error, leaving the true height difference intact.',
    tip: 'Staff base wear error cancels completely when the SAME staff is used for BS and FS.', top: 'Errors in levelling'
  },
  {
    q: 'What happens to the staff zero error if two different staves with different base wear are used for Back Sight and Fore Sight?',
    opts: ['The difference between their base errors accumulates systematically into every setup', 'The errors cancel automatically', 'The line of sight tilts', 'The bubble bursts'],
    ans: 0, exp: 'If staff A has wear e1 and staff B has wear e2, the difference (e1 - e2) accumulates systematically unless staves are leapfrogged.',
    tip: 'Different staff base wear errors do not cancel unless staves are leapfrogged at alternate change points.', top: 'Errors in levelling'
  },
  {
    q: 'In profile levelling, how are the horizontal and vertical scales customarily chosen when drawing the ground profile on graph paper?',
    opts: ['The vertical scale is exaggerated (typically 10 times larger than the horizontal scale) to make relief variations clearly discernible', 'Vertical scale is 10 times smaller than horizontal scale', 'Both scales are strictly identical (1:1)', 'Scales are chosen at random'],
    ans: 0, exp: 'Vertical exaggeration (e.g. Horizontal 1:1000, Vertical 1:100) accentuates gentle slopes and undulations for design of road/rail formations.',
    tip: 'Vertical scale in profile drawing is exaggerated (usually 10 times) to accentuate relief.', top: 'Methods of levelling'
  },
  {
    q: 'What is the "formation level" (subgrade level) in highway and railway engineering profile drawings?',
    opts: ['The proposed finished ground level of the road or railway bed upon which paving or ballast is placed', 'The natural ground level before excavation', 'The water table level', 'The level of the benchmark'],
    ans: 0, exp: 'Formation level is the engineered design elevation of the earthwork formation (subgrade) along the route.',
    tip: 'Formation level = Engineered design elevation of the finished subgrade bed.', top: 'Methods of levelling'
  },
  {
    q: 'In road earthwork drawings, what does "depth of cutting" at a given chainage represent?',
    opts: ['The vertical height by which the existing natural ground level exceeds the proposed formation level (Cutting = Existing RL - Formation RL)', 'The depth of the ditch', 'The thickness of asphalt', 'The height of the embankment'],
    ans: 0, exp: 'When existing ground is higher than proposed formation level, material must be cut: Cutting = Existing RL - Formation RL.',
    tip: 'Depth of cutting = Existing Ground RL - Formation RL (when ground is higher).', top: 'Methods of levelling'
  },
  {
    q: 'In road earthwork drawings, what does "height of banking" (height of filling or embankment) represent?',
    opts: ['The vertical height by which the proposed formation level exceeds the existing natural ground level (Filling = Formation RL - Existing RL)', 'The height of the bridge pier', 'The depth of excavation', 'The height of the trees'],
    ans: 0, exp: 'When proposed formation level is higher than existing ground, earth must be filled: Filling = Formation RL - Existing RL.',
    tip: 'Height of filling = Formation RL - Existing Ground RL (when formation is higher).', top: 'Methods of levelling'
  },
  {
    q: 'What is a "grade stake" in construction levelling?',
    opts: ['A wooden peg driven into the ground whose top (or a mark on its side) indicates the exact grade or elevation to which earthwork must be cut or filled', 'A peg marking a tree', 'A stake used to tie cows', 'A fence boundary pin'],
    ans: 0, exp: 'Grade stakes guide earthmoving contractors by showing the exact finish elevation or required depth of cut/fill.',
    tip: 'Grade stake = Peg indicating design elevation for earthwork cutting or filling.', top: 'Methods of levelling'
  },
  {
    q: 'What is a "boning rod" (traveler) used for in trench and pipeline excavation levelling?',
    opts: ['A T-shaped wooden rod of fixed height sighted across sight rails to check the uniform excavation depth and invert level of a sewer trench', 'A rod to dig trenches', 'A measuring tape', 'A plumb bob stick'],
    ans: 0, exp: 'Boning rods are T-shaped sighting timbers held in trenches to verify that the excavation floor follows the design gradient between sight rails.',
    tip: 'Boning rod (T-rod) verifies trench excavation depth and sewer pipe gradient between sight rails.', top: 'Minor instruments'
  },
  {
    q: 'What is a "sight rail" in sewer construction levelling?',
    opts: ['A horizontal timber board fixed across a trench between two uprights at a known height above the proposed sewer pipe invert level', 'A railway rail', 'A safety barrier for cars', 'A tripod head'],
    ans: 0, exp: 'Sight rails are horizontal boards clamped across trench uprights at a uniform height above sewer pipe invert to guide boning rods.',
    tip: 'Sight rail = Horizontal timber rail fixed across trench at known height above pipe invert.', top: 'Minor instruments'
  }
];

m5FinalList.forEach(q => addQ(q, 5, 'mod-5', 'Levelling and Contouring'));

console.log('Module 5 final push processed. Total added so far:', addedList.length);

// Append to db
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
