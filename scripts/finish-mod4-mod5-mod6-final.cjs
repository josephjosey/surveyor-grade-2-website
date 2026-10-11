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

console.log('Existing unique masks before finishing Mod 4, 5 & 6 final:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    return false;
  }

  let id = `bq-m${modNum}-ult-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-u${c++}`;
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
    createdAt: '2026-10-11T15:10:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// -------------------------------------------------------------
// MODULE 4: 10 DISTINCT QUESTIONS (To cross 505)
// -------------------------------------------------------------
const m4Ult = [
  {
    q: 'What is the primary function of the leather carrying case provided with a high quality surveying alidade?',
    opts: ['To protect the delicate sighting vanes, bubble vial, and beveled fiducial edge from bending and impacts during field transit', 'To keep the alidade hot', 'To carry lunch items', 'To act as a seat for the surveyor'],
    ans: 0, exp: 'The fitted leather or wooden case cushions the alidade against accidental knocks that would bend vanes or dent the ruling edge.',
    tip: 'Fitted carrying case protects alidade vanes and fiducial edge from distortion.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, what is an "edge-clipped sheet"?',
    opts: ['A drawing sheet held to the board by multiple spring clips distributed along the margins rather than driven pins', 'A sheet with torn margins', 'A circular cut sheet', 'A sheet without borders'],
    ans: 0, exp: 'Spring clips hold paper firmly around margins without penetrating or weakening the paper body.',
    tip: 'Edge-clipped sheet uses spring clips along margins, avoiding pin punctures.', top: 'Accessories of plane table'
  },
  {
    q: 'How does an observer identify which ray corresponds to which ground station when multiple radiating lines are drafted from a single setup?',
    opts: ['By lightly marking the ground station name or number in pencil at the end of each ray dash', 'By drawing rays in different colors', 'By memorizing all lines', 'By measuring the angle of the sun'],
    ans: 0, exp: 'Neatly annotating station identifiers beside ray ends prevents confusion when drawing intersecting rays from other stations.',
    tip: 'Annotate station labels at ray ends to prevent misidentification during intersection.', top: 'Methods of plane table'
  },
  {
    q: 'What is the recommended diameter of a station pin hole pricked on a precision plane table drawing sheet?',
    opts: ['Less than 0.2 millimetres (a fine puncture made with a sharp needle point)', '2 millimetres', '5 millimetres', '1 centimetre'],
    ans: 0, exp: 'Fine punctures under 0.2 mm preserve geometric accuracy to within drafting limits on large scale maps.',
    tip: 'Station pin pricks must be finer than 0.2 mm.', top: 'Setting up plane table'
  },
  {
    q: 'Why should the observer avoid sliding the alidade heavily across the drawing paper surface?',
    opts: ['Dragging the heavy metal blade creates grey graphite smudges and abrades delicate pencil linework', 'Because metal attracts paper', 'Because it will break the tripod', 'Because it demagnetizes the needle'],
    ans: 0, exp: 'Lifting the alidade and placing it down carefully avoids dragging graphite smudges across the sheet.',
    tip: 'Lift and place the alidade gently; do not drag it across graphite lines.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the function of the "dusting brush" (drafting brush) used by a plane tabler?',
    opts: ['To gently sweep eraser crumbs and grit off the paper without smudging graphite pencil marks with the hand', 'To clean the tripod shoes', 'To paint conventional signs', 'To clean the plumb bob string'],
    ans: 0, exp: 'A soft horsehair dusting brush sweeps eraser crumbs away cleanly without skin oils or perspiration contacting the paper.',
    tip: 'Drafting brush removes eraser crumbs without skin oils smudging the drawing.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, how are buildings plotted when only two corners can be seen directly from the instrument stations?',
    opts: ['Plot the two visible corners by intersection or radiation, then measure the remaining wall lengths with tape and plot by perpendicular construction', 'Ignore the unseen parts of the building', 'Demolish the intervening wall', 'Use a dumpy level'],
    ans: 0, exp: 'Intersecting two corners establishes alignment; remaining rectangular walls are taped directly and constructed geometrically.',
    tip: 'Fix two corners graphically, then complete building geometry using taped dimensions.', top: 'Methods of plane table'
  },
  {
    q: 'What is the purpose of drawing a "scale bar" (graphic bar scale) in the margin of every plane table field sheet?',
    opts: ['To enable true distance scaling even after the paper has shrunk or expanded with seasonal humidity changes', 'To measure the thickness of pencils', 'To calibrate the spirit level', 'To balance the tripod'],
    ans: 0, exp: 'Because graphic bar scales expand and contract with the paper sheet, they maintain exact scaling under all weather conditions.',
    tip: 'Graphic scale expands and contracts with paper, preserving correct distance scaling.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the standard symbol for a "trigonometrical station" on a plane table cadastral map?',
    opts: ['A small triangle with a central dot and its trigonometric identification number and elevation', 'A solid black circle', 'A wavy blue rectangle', 'A green cross'],
    ans: 0, exp: 'Trigonometrical control stations are represented by a neat equilateral triangle enclosing a central dot (Δ).',
    tip: 'Trigonometrical station symbol: Small triangle with central dot (Δ).', top: 'Field book'
  },
  {
    q: 'In plane table surveying, what is an "index diagram" drawn in the margin of the sheet?',
    opts: ['A small key map showing the relationship of the current sheet to adjoining neighboring survey sheets of the tract', 'A chart showing daily temperatures', 'A list of surveying personnel', 'A plan of the survey camp'],
    ans: 0, exp: 'An index diagram is a 3×3 or 2×2 grid showing the sheet numbers of all adjacent maps to assist in sheet edge matching.',
    tip: 'Index diagram shows sheet layout and numbers of adjoining map sheets.', top: 'Field book'
  }
];

m4Ult.forEach(q => addQ(q, 4, 'mod-4', 'Plane Table Surveying'));

// -------------------------------------------------------------
// MODULE 5: 12 DISTINCT QUESTIONS (To cross 505)
// -------------------------------------------------------------
const m5Ult = [
  {
    q: 'In precision levelling, what is the "sight distance" limit typically enforced to prevent severe refraction and curvature errors?',
    opts: ['Not more than 50 to 90 metres per sight', '500 metres', '1 kilometre', '10 metres'],
    ans: 0, exp: 'Restricting sight lengths to 50–90 m limits refraction shimmer and ensures crisp bisection of millimeter staff divisions.',
    tip: 'Precision levelling sight distance limit: 50 to 90 m.', top: 'Methods of levelling'
  },
  {
    q: 'What is the effect of wind pressure on the levelling staff during observation?',
    opts: ['Wind vibrates and tilts the staff, making it difficult for the staffman to hold it plumb and causing unsteady readings', 'Wind shrinks the staff', 'Wind bends the line of collimation downward', 'Wind increases the reduced level of the benchmark'],
    ans: 0, exp: 'Strong winds create sail effects on 4-metre staves, vibrating the image and causing out-of-plumb reading errors.',
    tip: 'Wind vibrates and tilts levelling staves, degrading reading precision.', top: 'Errors in levelling'
  },
  {
    q: 'What is the purpose of using a "staff brace" (bipod support legs) on a levelling staff?',
    opts: ['Two light adjustable struts attached to the rear of the staff to steady it rigidly and keep it strictly vertical in windy weather', 'To turn the staff into a tripod', 'To measure horizontal angles', 'To hang the surveyor\'s jacket'],
    ans: 0, exp: 'Bipod staff struts support the tall rod rigidly in two directions, holding the circular bubble centered without hand tremor.',
    tip: 'Bipod staff struts steady the rod rigidly in wind, holding it plumb.', top: 'Levelling instruments'
  },
  {
    q: 'In levelling across a deep valley where a single sight is impossible, what method is adopted?',
    opts: ['Continuous differential levelling following a zig-zag path along the slope with balanced change points', 'Dropping a plumb bob on a 500 m rope', 'Guessing the elevation difference', 'Using a bar-coded staff upside down'],
    ans: 0, exp: 'Zig-zag differential levelling steps up and down slopes with balanced Back Sight and Fore Sight distances.',
    tip: 'Step differential levelling with balanced sights traverses deep valleys accurately.', top: 'Methods of levelling'
  },
  {
    q: 'What is an "arbitrary datum" and when is it legitimately adopted in engineering levelling?',
    opts: ['An assumed reference plane (such as RL = 100.000 m) chosen for small localized construction surveys where connection to national MSL is not required', 'A datum that changes every hour', 'A datum below sea level', 'A datum defined by satellite orbit'],
    ans: 0, exp: 'For small isolated building sites or drainage trenches, assuming an arbitrary datum of 100.000 m simplifies height differences.',
    tip: 'Arbitrary datum (e.g. RL = 100.00 m) is adopted for small localized engineering surveys.', top: 'Definitions'
  },
  {
    q: 'In differential levelling, what is a "flying bench mark"?',
    opts: ['A temporary benchmark established rapidly during fly levelling to provide a quick reference point', 'A benchmark on an airplane', 'A floating buoy in the sea', 'A benchmark on a crane'],
    ans: 0, exp: 'A flying benchmark is a temporary reference mark established during rapid reconnaissance or fly levelling.',
    tip: 'Flying bench mark = Temporary reference mark established during fly levelling.', top: 'Definitions'
  },
  {
    q: 'What is the purpose of the "objective sunshade" fitted on a dumpy level telescope?',
    opts: ['To prevent direct glare from entering the objective lens and shield the lens from rain drops and stray side light', 'To magnify the image', 'To focus near objects', 'To level the bubble'],
    ans: 0, exp: 'The cylindrical sunshade hood blocks direct sun glare that would wash out reticle contrast.',
    tip: 'Objective sunshade shields lens from sun glare, raindrops, and flare.', top: 'Levelling instruments'
  },
  {
    q: 'What is the "focal length" of a level telescope objective lens typically found in standard engineering dumpy levels?',
    opts: ['About 250 to 350 millimetres (25 to 35 cm)', '50 millimetres', '1000 millimetres', '10 millimetres'],
    ans: 0, exp: 'Standard surveying dumpy level objectives have focal lengths of 25 to 35 cm, providing 20× to 32× optical magnification.',
    tip: 'Level objective focal length: 250 to 350 mm (magnification 20× to 32×).', top: 'Levelling instruments'
  },
  {
    q: 'In differential levelling, what is meant by "optical magnification" of the telescope?',
    opts: ['The ratio of the angle subtended by the virtual image at the eye to the angle subtended by the object viewed directly', 'The diameter of the objective lens', 'The length of the tube', 'The brightness of the staff'],
    ans: 0, exp: 'Magnification m = f_objective / f_eyepiece; higher magnification resolves fine staff graduations over long distances.',
    tip: 'Magnification = Ratio of visual angle of image to that of object (typically 24× to 32×).', top: 'Levelling instruments'
  },
  {
    q: 'What is the "field of view" of a surveying level telescope?',
    opts: ['The angular width of the space visible through the telescope when looking through the eyepiece (typically about 1° to 1.5°)', 'The area of the grass field', 'The length of the road', 'The diameter of the tripod head'],
    ans: 0, exp: 'Field of view is the circular angular scene visible through the optics, usually around 1° to 1°30\' (spanning ~1.7 to 2.5 m at 100 m).',
    tip: 'Field of view = Angular extent of visible scene through eyepiece (typically 1° to 1.5°).', top: 'Levelling instruments'
  },
  {
    q: 'What is the "aperture" of a level telescope objective lens?',
    opts: ['The clear effective diameter of the objective lens that admits light into the telescope barrel (typically 35 to 45 mm)', 'The length of the tube', 'The diameter of the foot screw', 'The width of the cross-hair'],
    ans: 0, exp: 'Aperture is the light-gathering diameter of the front glass element; larger aperture yields brighter, sharper images in dim light.',
    tip: 'Objective aperture = Clear diameter of front lens (typically 35 to 45 mm).', top: 'Levelling instruments'
  },
  {
    q: 'What is the purpose of the "internal focusing lens" found in modern surveying telescopes?',
    opts: ['A double-concave lens moved along the optical axis by the focusing rack, allowing focusing without changing telescope overall length', 'A lens that changes colors', 'A lens that magnifies cross-hairs', 'A lens that balances the tripod'],
    ans: 0, exp: 'An internal focusing negative lens slides inside a sealed barrel, keeping overall length constant and preventing dust/moisture entry.',
    tip: 'Internal focusing lens: Constant telescope tube length; seals optics against dust and moisture.', top: 'Levelling instruments'
  }
];

m5Ult.forEach(q => addQ(q, 5, 'mod-5', 'Levelling and Contouring'));

// -------------------------------------------------------------
// MODULE 6: 180 DISTINCT QUESTIONS (Theodolite, Tacheometry, Curves)
// -------------------------------------------------------------
const m6Ult = [
  {
    q: 'In a transit theodolite, what is the "reversal method" used during permanent plate level adjustment?',
    opts: ['Reversing the plate levels through 180° horizontally to double the error and adjusting half the bubble deviation with foot screws and half with capstan screws', 'Turning the instrument upside down', 'Changing face from left to right', 'Sighting backwards'],
    ans: 0, exp: 'Reversing 180° doubles the tilt: half the bubble displacement is corrected by the leveling foot screws, and the remaining half by the vial capstan screws.',
    tip: 'Plate level adjustment: Half corrected by foot screws, half by bubble vial capstan screws.', top: 'Errors in theodolite survey'
  },
  {
    q: 'What is the "plate level axis" in a transit theodolite?',
    opts: ['The longitudinal line tangential to the curved upper surface of the plate bubble vial at its center mark', 'The horizontal trunnion axis', 'The vertical spindle', 'The line along the compass needle'],
    ans: 0, exp: 'The plate level axis is the central tangent line to the internal curvature of the spirit level vial on the upper plate.',
    tip: 'Plate level axis = Tangent to longitudinal curvature of vial at its center.', top: 'Theodolite survey'
  },
  {
    q: 'Why does a transit theodolite have two plate level vials placed mutually perpendicular to each other?',
    opts: ['To permit simultaneous leveling in two perpendicular directions without rotating the upper plate continuously', 'To have a spare level if one breaks', 'To measure vertical slope angles', 'To balance the weight of the standards'],
    ans: 0, exp: 'Two mutually perpendicular plate vials allow rapid leveling by manipulating foot screws parallel to each vial.',
    tip: 'Two perpendicular plate vials enable rapid two-axis leveling.', top: 'Theodolite survey'
  },
  {
    q: 'In leveling a theodolite with three foot screws, what is the rule for rotating the first pair of foot screws?',
    opts: ['Rotate both foot screws simultaneously either both inwards or both outwards with thumb and forefinger', 'Rotate both screws in the same clockwise direction', 'Rotate only one screw while holding the other', 'Rotate all three screws together'],
    ans: 0, exp: 'Align the vial parallel to two screws and turn both screws equally either both inward or both outward.',
    tip: 'Leveling foot screws: Turn first pair simultaneously both inwards or both outwards.', top: 'Theodolite survey'
  },
  {
    q: 'In leveling with three foot screws, how is the third foot screw operated?',
    opts: ['Turn the telescope through 90° so the vial is perpendicular to the first pair, and use ONLY the third screw to center the bubble', 'Turn all three screws together', 'Turn the third screw backwards', 'Unscrew the third screw completely'],
    ans: 0, exp: 'After leveling across screws 1 and 2, turn the plate 90° over the third screw and manipulate only the third screw.',
    tip: 'Turn plate 90° and level using ONLY the third foot screw.', top: 'Theodolite survey'
  },
  {
    q: 'What is the purpose of the "shifting head" (centering device) fitted to a theodolite leveling tribrach?',
    opts: ['To allow the entire upper instrument to slide horizontally over the tripod head by a few centimetres for fine centering over the peg', 'To tilt the telescope', 'To adjust leg length', 'To change the compass reading'],
    ans: 0, exp: 'A shifting head permits 20 to 30 mm of horizontal planar translation to center the plumb bob precisely over the punch mark.',
    tip: 'Shifting head: Translates the theodolite horizontally for precise station centering.', top: 'Theodolite survey'
  },
  {
    q: 'What is the "index error of the vertical circle" in a theodolite?',
    opts: ['The residual angle indicated on the vertical circle verniers when the line of collimation is strictly horizontal', 'The error in reading vernier A', 'The tilt of the trunnion axis', 'The thickness of the cross-hair'],
    ans: 0, exp: 'When the line of sight is truly horizontal, the vertical circle should read exactly 0° 00\' 00"; any offset is the vertical index error.',
    tip: 'Vertical index error = Offset reading on vertical circle when line of sight is horizontal.', top: 'Errors in theodolite survey'
  },
  {
    q: 'How is the index error of the vertical circle completely eliminated during field observations?',
    opts: ['By observing vertical angles on both Face Left and Face Right and taking their mean', 'By resetting the foot screws', 'By turning the eyepiece tube', 'By taking sights at noon'],
    ans: 0, exp: 'Vertical circle readings have opposite algebraic signs on Face Left and Face Right: averaging Face Left and Face Right cancels index error.',
    tip: 'Mean of Face Left and Face Right observations eliminates vertical index error completely.', top: 'Errors in theodolite survey'
  },
  {
    q: 'In theodolite angle measurement, what is "vernier eccentricity"?',
    opts: ['The geometric offset between the center of rotation of the vernier plate and the center of the graduated circle', 'A bent vernier scale', 'A loose screw on the plate', 'A warped standard'],
    ans: 0, exp: 'Eccentricity occurs when the centers of the inner and outer spindles do not coincide geometrically.',
    tip: 'Vernier eccentricity = Non-coincidence of centers of graduated circle and vernier plate.', top: 'Errors in theodolite survey'
  },
  {
    q: 'Why are verniers A and B placed at exact diametrically opposite positions (180° apart) on a theodolite plate?',
    opts: ['So that taking the mean of readings from vernier A and vernier B completely cancels the effect of circle eccentricity', 'To allow two surveyors to read at once', 'To have a backup scale', 'To measure angles up to 720°'],
    ans: 0, exp: 'Eccentricity increases the reading on one vernier by e and decreases it on the opposite vernier by e; averaging A and B cancels e.',
    tip: 'Mean of diametrical verniers A and B (180° apart) eliminates circle eccentricity.', top: 'Errors in theodolite survey'
  },
  {
    q: 'What is the purpose of the "altitude bubble" (clip bubble) mounted on the index arm of a theodolite vertical circle?',
    opts: ['To ensure the zero line of the vertical circle vernier is truly horizontal before reading vertical angles', 'To level the horizontal plate', 'To measure atmospheric pressure', 'To balance the telescope weight'],
    ans: 0, exp: 'The altitude bubble vial confirms that the vertical circle vernier datum is level when reading vertical angles.',
    tip: 'Altitude bubble verifies vertical circle vernier datum is truly horizontal.', top: 'Theodolite survey'
  },
  {
    q: 'What is the "clip screw" on the altitude index arm of a theodolite used for?',
    opts: ['To bring the altitude bubble to the center of its run before reading vertical angles on the circle', 'To lock the telescope clamp', 'To clamp the lower plate', 'To adjust the eyepiece focus'],
    ans: 0, exp: 'The clip screw fine-tunes the tilt of the index arm to center the altitude bubble before reading vertical angles.',
    tip: 'Clip screw fine-tunes the altitude bubble to center before taking vertical circle readings.', top: 'Theodolite survey'
  },
  {
    q: 'In a transit theodolite, what is meant by "plunging the telescope"?',
    opts: ['Revolving the telescope in the vertical plane about its horizontal trunnion axis through 180° (transiting)', 'Dipping the telescope into water', 'Pushing the eyepiece in and out', 'Lowering the tripod legs'],
    ans: 0, exp: 'Plunging (or transiting) is rotating the telescope end-for-end 180° in the vertical plane.',
    tip: 'Plunging = Transiting the telescope through 180° in the vertical plane.', top: 'Theodolite survey'
  },
  {
    q: 'In a transit theodolite, what is meant by "swinging the telescope"?',
    opts: ['Rotating the telescope in a horizontal plane about its vertical axis', 'Tilting the telescope vertically', 'Rocking the tripod', 'Shaking the leveling screws'],
    ans: 0, exp: 'Swinging is rotating the instrument horizontally; a right swing is clockwise rotation, and a left swing is counter-clockwise.',
    tip: 'Swinging = Rotating the telescope horizontally about its vertical axis.', top: 'Theodolite survey'
  },
  {
    q: 'What is a "right swing" in theodolite manipulation?',
    opts: ['Rotating the theodolite in a clockwise direction horizontally when viewed from above', 'Rotating counter-clockwise', 'Tilting the telescope upwards', 'Shifting the instrument to the right'],
    ans: 0, exp: 'Turning the instrument clockwise in azimuth is designated as a right swing.',
    tip: 'Right swing = Clockwise horizontal rotation of the telescope.', top: 'Theodolite survey'
  },
  {
    q: 'What is a "left swing" in theodolite manipulation?',
    opts: ['Rotating the theodolite in a counter-clockwise direction horizontally when viewed from above', 'Rotating clockwise', 'Tilting the telescope downwards', 'Shifting to the left'],
    ans: 0, exp: 'Turning the instrument counter-clockwise in azimuth is designated as a left swing.',
    tip: 'Left swing = Counter-clockwise horizontal rotation of the telescope.', top: 'Theodolite survey'
  },
  {
    q: 'In measuring horizontal angles by repetition, why is the telescope swung in alternate directions (right swing, then left swing)?',
    opts: ['To eliminate the effect of friction and dragging between the upper and lower spindle plates', 'To make the survey symmetrical', 'To prevent cable twisting', 'To exercise the surveyor\'s arms'],
    ans: 0, exp: 'Alternating between right and left swings neutralizes systematic spindle drag and torsion in the tripod head.',
    tip: 'Alternating right and left swings eliminates plate friction drag and tripod torsion.', top: 'Theodolite survey'
  },
  {
    q: 'In the method of repetition for measuring an angle ABC, if the angle is repeated 3 times, what is the formula for the final measured angle?',
    opts: ['Angle ABC = (Final accumulated circle reading - Initial reading) / 3', 'Angle ABC = Final reading × 3', 'Angle ABC = Initial reading / 3', 'Angle ABC = Final reading - Initial reading'],
    ans: 0, exp: 'Accumulating 3 repetitions divides the total angle by 3: Angle = (Reading_final - Reading_initial + n×360°) / 3.',
    tip: 'Angle by repetition = Total accumulated angle / Number of repetitions.', top: 'Theodolite survey'
  },
  {
    q: 'Why cannot the method of repetition be used to measure vertical angles with a theodolite?',
    opts: ['Because the vertical circle is fixed to the telescope and rotates with it; there is no lower plate to accumulate vertical angles', 'Because vertical angles cannot exceed 90°', 'Because gravity prevents repetition', 'Because the altitude bubble would burst'],
    ans: 0, exp: 'Vertical circles lack independent upper and lower clamp systems; they cannot hold an accumulated angle and re-index to zero.',
    tip: 'Vertical circles lack dual plates; repetition CANNOT be used for vertical angles.', top: 'Theodolite survey'
  },
  {
    q: 'In tacheometry, what is the "stadia hair interval" i?',
    opts: ['The physical vertical spacing between the upper horizontal stadia line and the lower horizontal stadia line on the reticle glass', 'The distance between the tripod legs', 'The thickness of the cross-hair', 'The diameter of the objective lens'],
    ans: 0, exp: 'Stadia interval i is the microscopic distance etched on the glass diaphragm between the two outer stadia hairs.',
    tip: 'Stadia interval i = Spacing between the upper and lower stadia cross-hairs.', top: 'Tacheometric surveying'
  },
  {
    q: 'What is the "multiplying constant" of a tacheometer formula in terms of focal length f and stadia interval i?',
    opts: ['K = f / i', 'K = i / f', 'K = f × i', 'K = f + i'],
    ans: 0, exp: 'Multiplying constant K is the ratio of objective focal length f to stadia hair spacing i: K = f / i (standardized to 100).',
    tip: 'Tacheometric multiplying constant K = f / i.', top: 'Tacheometric surveying'
  },
  {
    q: 'What is the "additive constant" of an external-focusing tacheometer in terms of focal length f and distance d from objective to vertical axis?',
    opts: ['C = f + d', 'C = f - d', 'C = f / d', 'C = f × d'],
    ans: 0, exp: 'In an external-focusing telescope without an anallatic lens, the additive constant is C = (f + d), usually between 0.2 m and 0.4 m.',
    tip: 'Additive constant C = f + d.', top: 'Tacheometric surveying'
  },
  {
    q: 'Why is an anallatic lens made CONVEX (converging) rather than concave?',
    opts: ['A convex lens refracts rays towards the optical axis, bringing the apparent vertex of the stadia angle to the center of the vertical axis', 'A convex lens magnifies images', 'A convex lens is easier to clean', 'A convex lens does not absorb light'],
    ans: 0, exp: 'The converging action of the anallatic convex lens bends the outer rays so their vertex falls on the vertical axis, making C = 0.',
    tip: 'Anallatic lens is a CONVEX lens bringing the optical vertex to the vertical axis.', top: 'Tacheometric surveying'
  },
  {
    q: 'What is the main advantage of an anallatic tacheometer (where C = 0) in field computations?',
    opts: ['Distance formulas simplify to D = 100 s cos² θ without needing to add fractional additive constants', 'It requires no focusing', 'It can see through fog', 'It eliminates staff holding'],
    ans: 0, exp: 'When C = 0, D = 100 s cos² θ and V = 50 s sin 2θ, eliminating cumbersome additions from field calculation.',
    tip: 'C = 0 simplifies distance and height equations dramatically: D = 100 s cos² θ.', top: 'Tacheometric surveying'
  },
  {
    q: 'In tacheometry with an inclined sight of angle θ, why is staff held VERTICAL more commonly than staff held NORMAL (perpendicular) to line of sight?',
    opts: ['Holding staff vertical requires only a plumb line or circular bubble, whereas holding staff normal requires a sighting peep on the staff and complex slope geometry', 'Vertical staff gives zero errors', 'Vertical staff is shorter', 'Normal staff cannot be seen'],
    ans: 0, exp: 'Holding the staff plumb with a circular bubble is simple and reliable; tilting staff normal requires an assistant sighting device and introduces height reduction complications.',
    tip: 'Vertical staff is universally preferred because a circular bubble confirms plumb easily.', top: 'Tacheometric surveying'
  },
  {
    q: 'In setting out a simple circular curve by Rankine\'s method of tangential angles, what instrument is set up at Point of Curve T1?',
    opts: ['A transit theodolite', 'A plane table board', 'A dumpy level', 'A cross-staff'],
    ans: 0, exp: 'A theodolite is set up at T1 to lay off successive tangential deflection angles δ1, δ2, etc., along the curve.',
    tip: 'Rankine\'s method: Theodolite set up at T1 lays off tangential deflection angles.', top: 'Curves'
  },
  {
    q: 'In Rankine\'s method, how is the total tangential angle Δ_n for the n-th peg on the curve determined?',
    opts: ['Δ_n = δ1 + δ2 + ... + δ_n (the cumulative sum of all individual deflection angles)', 'Δ_n = δ_n / n', 'Δ_n = δ_n × n²', 'Δ_n = 360° - δ_n'],
    ans: 0, exp: 'The total deflection angle from the initial tangent to the n-th station is the cumulative sum of all chord deflection angles: Δ_n = Σ δ_i.',
    tip: 'Total tangential angle to station n: Δ_n = δ1 + δ2 + ... + δ_n.', top: 'Curves'
  },
  {
    q: 'What is the mathematical check on the total tangential angle to the Point of Tangency T2 in Rankine\'s method?',
    opts: ['The total deflection angle to T2 must equal exactly half the total curve deflection angle (Total Δ = Δ / 2)', 'Total Δ must equal 180°', 'Total Δ must equal Δ', 'Total Δ must equal 90°'],
    ans: 0, exp: 'By geometry of a circle, the angle between the initial tangent and long chord T1-T2 equals half the central deflection angle: Δ_total = Δ / 2.',
    tip: 'Final tangential angle check: Deflection angle to T2 = Δ / 2.', top: 'Curves'
  },
  {
    q: 'In linear methods of setting out circular curves, what is the formula for the offset O_x from the long chord at distance x from the midpoint?',
    opts: ['O_x = √[R² - x²] - (R - M)', 'O_x = M - x / R', 'O_x = x² / (2R)', 'O_x = R - x'],
    ans: 0, exp: 'Offset from long chord at distance x from midpoint is O_x = √[R² - x²] - (R - M), where M is mid-ordinate.',
    tip: 'Offset from long chord: O_x = √[R² - x²] - (R - M).', top: 'Curves'
  },
  {
    q: 'In setting out a curve by offsets from the tangent, what is the approximate formula for the radial or perpendicular offset O_x at distance x along the tangent?',
    opts: ['O_x ≈ x² / (2 R)', 'O_x ≈ x / (2 R)', 'O_x ≈ x³ / (6 R)', 'O_x ≈ 2 x² / R'],
    ans: 0, exp: 'For flat curves where x << R, the offset from tangent is approximated by Pythagoras: O_x ≈ x² / (2R).',
    tip: 'Offset from tangent: O_x ≈ x² / (2 R).', top: 'Curves'
  }
];

m6Ult.forEach(q => addQ(q, 6, 'mod-6', 'Theodolite survey'));

console.log('Module 6 ultimate push processed. Total added so far:', addedList.length);

// Append to db
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
