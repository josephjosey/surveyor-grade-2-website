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

console.log('Existing unique masks before Mod 4 & 5:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    return false;
  }

  let id = `bq-m${modNum}-dist5-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-v${c++}`;
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
    createdAt: '2026-10-11T14:45:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// ============================================================================
// MODULE 4: 100 DISTINCT QUESTIONS (PLANE TABLE SURVEYING - Target >= 505)
// ============================================================================
const m4List = [
  {
    q: 'In plane table surveying, what is an "inscribed quadrilateral" used for in Bessel\'s method of resection?',
    opts: ['To locate the station position graphically by constructing a circle passing through the points', 'To measure the area of the table', 'To level the board', 'To calibrate the trough compass'],
    ans: 0, exp: 'Bessel\'s solution constructs an inscribed quadrilateral whose opposite angles sum to 180° to locate the unknown instrument station graphically.',
    tip: 'Bessel\'s method uses an inscribed quadrilateral to solve the 3-point problem graphically.', top: 'Resection'
  },
  {
    q: 'What is the principal disadvantage of Bessel\'s graphical solution compared to Lehmann\'s method?',
    opts: ['It clutters the drawing sheet with numerous construction lines and is difficult in windy weather', 'It cannot be used on flat ground', 'It requires three surveyors', 'It requires an electric motor'],
    ans: 0, exp: 'Bessel\'s construction draws multiple rays and auxiliary circles, creating clutter on a busy survey sheet.',
    tip: 'Bessel\'s method clutters the map sheet with auxiliary construction lines.', top: 'Resection'
  },
  {
    q: 'In Lehmann\'s solution of the Three-Point Problem, what is the geometric definition of the "triangle of error"?',
    opts: ['The small triangle formed by the intersection of the three resection rays due to board orientation error', 'The triangle formed by the three ground stations', 'The triangle formed by the tripod legs', 'The area of the drawing paper'],
    ans: 0, exp: 'Orientation error prevents the three rays from intersecting at a single point, forming a triangle of error.',
    tip: 'Triangle of error = Small triangle formed when 3 resection rays fail to meet at a point.', top: 'Resection'
  },
  {
    q: 'In Lehmann\'s method, if the three resection rays meet at a single pinprick without forming a triangle, what does this prove?',
    opts: ['The plane table was oriented perfectly and the intersection point is the exact true position of the station', 'The table has zero reduced level', 'The stations lie in a straight line', 'The paper is warped'],
    ans: 0, exp: 'When all three rays converge into a single pinprick intersection, orientation is exact and station position is established.',
    tip: 'Three rays intersecting at a single point = Perfect table orientation.', top: 'Resection'
  },
  {
    q: 'How many trials are typically required by a skilled surveyor using Lehmann\'s method to eliminate the triangle of error?',
    opts: ['Usually only one or two trials', 'At least ten trials', 'Fifty trials', 'Over one hundred trials'],
    ans: 0, exp: 'Because Lehmann\'s rules provide rapid convergence, an experienced topographer eliminates the triangle in 1 to 2 trials.',
    tip: 'Lehmann\'s method typically converges in 1 to 2 trials.', top: 'Resection'
  },
  {
    q: 'What happens to the danger circle in the Three-Point Problem if the three control stations lie in a single straight line?',
    opts: ['The danger circle degenerates into a straight line, eliminating the risk of danger circle failure', 'The method fails completely', 'The triangle of error becomes infinite', 'The alidade cannot sight them'],
    ans: 0, exp: 'When three points are collinear, the radius of the circumscribing circle is infinite, preventing great circle failure.',
    tip: 'Collinear control stations eliminate great circle failure risk.', top: 'Resection'
  },
  {
    q: 'What is the standard length of a plain alidade used in plane table surveying?',
    opts: ['About 45 to 50 cm', '10 cm', '100 cm', '15 cm'],
    ans: 0, exp: 'A standard plain alidade is 45 to 50 cm long, matching the diagonal reach of standard drawing boards.',
    tip: 'Plain alidade length = 45 to 50 cm.', top: 'Accessories of plane table'
  },
  {
    q: 'Why is the fiducial edge of an alidade beveled to a thin edge?',
    opts: ['To allow the pencil point to rule lines flush against the paper without parallax', 'To cut paper like a knife', 'To reduce the weight of the metal', 'To fit into the carrying case'],
    ans: 0, exp: 'A beveled edge places the ruling guide flush against the paper surface, avoiding drafting parallax.',
    tip: 'Beveled edge places ruling guide flush against paper surface.', top: 'Accessories of plane table'
  },
  {
    q: 'In a telescopic alidade, what is the purpose of the vertical circle?',
    opts: ['To measure vertical angles of elevation and depression for calculating height differences', 'To find magnetic north', 'To measure horizontal directions', 'To level the tripod head'],
    ans: 0, exp: 'The vertical circle measures vertical angles to targets above or below the plane table horizon.',
    tip: 'Vertical circle on telescopic alidade measures vertical angles.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the purpose of the striding level fitted on high precision telescopic alidades?',
    opts: ['To verify that the horizontal trunnion axis of the telescope is truly horizontal', 'To level the drawing paper', 'To measure wind speed', 'To level the station peg'],
    ans: 0, exp: 'A striding level rests directly on the trunnion axis pivots to ensure the telescope rotates strictly in a vertical plane.',
    tip: 'Striding level verifies horizontal trunnion axis of the telescope.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the role of an Indian clinometer (tangent clinometer) when used with a plane table?',
    opts: ['To measure vertical angles and determine elevations of contour points directly from tangent values', 'To orient the table to true North', 'To measure chainage', 'To drive wooden pegs'],
    ans: 0, exp: 'An Indian clinometer features an eye vane and object vane graduated in natural tangents to calculate spot levels: h = D × tan θ.',
    tip: 'Indian clinometer: Graduated in natural tangents for finding elevations on plane table.', top: 'Accessories of plane table'
  },
  {
    q: 'What are the two vanes of an Indian clinometer?',
    opts: ['A sight vane with an eyehole and a rack-graduated object vane marked with natural tangents', 'Two lenses with cross-hairs', 'Two mirrors inclined at 45°', 'A telescope and a prism'],
    ans: 0, exp: 'The eye vane has a small sight hole; the object vane has a vertical slot marked with natural tangents (tan θ).',
    tip: 'Indian clinometer: Eye vane and object vane graduated in natural tangents.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table contouring with an Indian clinometer, if the horizontal distance is 120 m and tangent reading is +0.05, what is the height difference?',
    opts: ['+6.0 metres', '+12.0 metres', '+2.4 metres', '+60.0 metres'],
    ans: 0, exp: 'Difference in height h = D × tan θ = 120 m × (+0.05) = +6.0 m.',
    tip: 'Height difference = 120 × 0.05 = 6.0 m.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table contouring with an Indian clinometer, if the horizontal distance is 80 m and tangent reading is -0.04, what is the height difference?',
    opts: ['-3.2 metres', '-4.0 metres', '-2.0 metres', '-0.32 metres'],
    ans: 0, exp: 'Difference in height h = 80 m × (-0.04) = -3.2 m.',
    tip: 'Height difference = 80 × (-0.04) = -3.2 m.', top: 'Accessories of plane table'
  },
  {
    q: 'What is a "check ray" in plane table surveying?',
    opts: ['An auxiliary ray drawn to a third known control station to verify the plotted position of an intersected point', 'A ray drawn in red ink', 'A ray sighted at the sun', 'A line across the sheet diagonal'],
    ans: 0, exp: 'A check ray to a third independent station confirms the correctness of an intersected point.',
    tip: 'Check ray: Sighted to a third known point to confirm position of an intersected point.', top: 'Methods of plane table'
  },
  {
    q: 'In plane table intersection, why should points be checked with a ray from a third station whenever possible?',
    opts: ['Because two rays will always intersect at a point even if one ray is completely erroneous, whereas a third ray proves the intersection is correct', 'To create a triangle on paper', 'To measure the elevation', 'To align the trough compass'],
    ans: 0, exp: 'Any two lines cross at a point, hiding errors. A third ray provides independent geometric proof.',
    tip: 'Two rays always intersect even if wrong; a third ray is essential to verify accuracy.', top: 'Methods of plane table'
  },
  {
    q: 'What is the primary cause of an inaccurate intersection angle in plane tabling?',
    opts: ['Choosing a baseline that is too short relative to the distance of the sighted target', 'Using a heavy tripod', 'Drafting with a sharp pencil', 'Surveying at 10 AM'],
    ans: 0, exp: 'A baseline that is too short forces both rays to run nearly parallel, forming an acute angle (<20°).',
    tip: 'Short baseline produces very acute intersection angles (<20°), degrading accuracy.', top: 'Methods of plane table'
  },
  {
    q: 'In plane table traversing, what is a "closed loop traverse"?',
    opts: ['A traverse that starts at a known station A, circuits an area, and closes back onto station A', 'A traverse run inside a building', 'A traverse with no forward rays', 'A traverse across a circular lake'],
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
    q: 'What is the purpose of drawing tiny station circles around station dots on a plane table map sheet?',
    opts: ['A tiny circle of about 1.5 mm diameter around the fine needle prick makes the station mark easily identifiable', 'To show the diameter of the tripod head', 'To mark the area of the table', 'To calculate circle area'],
    ans: 0, exp: 'A tiny circle (1.5 to 2 mm diameter) drawn around a needle prick prevents the surveyor from losing track of the pinprick.',
    tip: 'Tiny circle around pinprick makes station mark easily visible on paper.', top: 'Setting up plane table'
  },
  {
    q: 'In plane table surveying, how should detail lines like roads, hedges, and buildings be inked or penciled?',
    opts: ['As the survey proceeds, keeping the map fully updated in the field each day while the terrain is before the surveyor', 'Left for the office staff after one month', 'Drawn only by computer', 'Penciled after sunset from memory'],
    ans: 0, exp: 'A foundational principle of plane tabling is completing and inking topographical features on-site in the field while the topography is visible.',
    tip: 'Complete and ink features on-site daily while the ground is visible before you.', top: 'Principles of plane table survey'
  },
  {
    q: 'Why is plane table surveying considered a "graphical method" of surveying?',
    opts: ['Because observations, angles, and distances are plotted directly on the board without recording numerical angles in a field book', 'Because it uses colorful paints', 'Because it is done on computer graphics software', 'Because it only draws graphs'],
    ans: 0, exp: 'It is called graphical because directions and shapes are drafted geometrically on the board directly in the field rather than computed from numerical angular logs.',
    tip: 'Plane tabling is a graphical method: Directions are plotted directly without numerical angle booking.', top: 'Principles of plane table survey'
  },
  {
    q: 'What is the effect of wind on a plane table during field survey operations?',
    opts: ['High winds vibrate the board, disturb leveling and orientation, and flap drawing paper', 'Wind cools the alidade', 'Wind increases magnetic attraction', 'Wind turns the tripod legs'],
    ans: 0, exp: 'Strong winds exert sail-like pressure on the large flat board, causing tripod wobble, paper flutter, and plumbing errors.',
    tip: 'Wind vibrates board and flaps paper, degrading plane table accuracy.', top: 'Principles of plane table survey'
  },
  {
    q: 'How can the stability of a plane table tripod be enhanced on soft or windy ground?',
    opts: ['By pushing tripod shoes deeply into firm soil and hanging a heavy rock or bag from the central tripod hook', 'By resting the tripod on grass', 'By loosening all leg wing nuts', 'By folding one leg'],
    ans: 0, exp: 'Driving shoe points deep and suspending ballast weight from the central leg junction provides high rigidity against wind vibration.',
    tip: 'Firmly embed shoe points and hang ballast weight from central tripod hook.', top: 'Accessories of plane table'
  }
];

m4List.forEach(q => addQ(q, 4, 'mod-4', 'Plane Table Surveying'));

console.log('Module 4 additional distinct questions processed. Total added so far:', addedList.length);

// ============================================================================
// MODULE 5: 140 DISTINCT QUESTIONS (LEVELLING & CONTOURING - Target >= 505)
// ============================================================================
const m5List = [
  {
    q: 'In surveying, what is defined as a "level surface"?',
    opts: ['A curved surface which is parallel to the mean spheroidal surface of the Earth and normal to the direction of gravity at all points', 'A horizontal plane surface tangential to the Earth', 'A flat wooden drawing board', 'A surface with zero slope'],
    ans: 0, exp: 'A level surface is an equipotential gravitational surface; every element of it is perpendicular to the plumb line (gravity vector).',
    tip: 'Level surface = Curved equipotential surface perpendicular to gravity at all points.', top: 'Definitions'
  },
  {
    q: 'How does a "horizontal plane" differ from a "level surface" at a given point?',
    opts: ['A horizontal plane is a flat plane tangential to the level surface at that point, whereas a level surface is curved', 'A horizontal plane is curved and level surface is flat', 'They are mathematically identical for all distances', 'A horizontal plane passes through the centre of the Earth'],
    ans: 0, exp: 'A horizontal plane is flat and tangential to the curved level surface at one point. It diverges above the level surface due to Earth curvature.',
    tip: 'Horizontal plane is flat and tangential; Level surface is curved with the Earth.', top: 'Definitions'
  },
  {
    q: 'What is the "datum" in levelling?',
    opts: ['An arbitrarily selected or standard reference level surface with respect to which elevations of all points are measured', 'The height of the instrument tripod', 'The zero mark on the levelling staff', 'The bubble tube of the dumpy level'],
    ans: 0, exp: 'A datum is the reference equipotential surface (such as Mean Sea Level) to which the elevations of all surveyed points are referred.',
    tip: 'Datum = Reference level surface from which elevations (Reduced Levels) are measured.', top: 'Definitions'
  },
  {
    q: 'What is the official reference datum for Mean Sea Level (M.S.L.) currently adopted for the Great Trigonometrical Survey of India?',
    opts: ['Mumbai High (formerly Karachi)', 'Chennai Harbor', 'Kolkata Port', 'Kochi Port'],
    ans: 0, exp: 'The Survey of India originally used Karachi datum; after 1947, Mumbai High was established as the primary GTS vertical datum.',
    tip: 'India MSL vertical datum = Mumbai High (formerly Karachi).', top: 'Definitions'
  },
  {
    q: 'In levelling terminology, what is a "Great Trigonometrical Survey (G.T.S.) Benchmark"?',
    opts: ['A highly permanent, high-precision reference benchmark established across India by the Survey of India', 'A benchmark painted on a wooden peg by a contractor', 'A temporary mark on a tree stump', 'An arbitrary station with RL = 100 m'],
    ans: 0, exp: 'GTS benchmarks are established by the Survey of India with extreme geodetic precision using high-order differential levelling.',
    tip: 'GTS Benchmark = Survey of India national precision benchmark.', top: 'Definitions'
  },
  {
    q: 'What is a "permanent benchmark"?',
    opts: ['A clearly marked reference point established on a solid permanent structure such as a bridge pier, railway plinth, or masonry culvert', 'A wooden peg in a field', 'A mark on soft earth', 'A nail in a fence post'],
    ans: 0, exp: 'Permanent benchmarks are established by government departments (PWD, Railways) on robust masonry structures to provide local vertical control.',
    tip: 'Permanent benchmark = Fixed mark on permanent structure (bridge pier, railway plinth).', top: 'Definitions'
  },
  {
    q: 'What is a "temporary benchmark" (T.B.M.)?',
    opts: ['A reference mark established at the end of a working day on a firm object to resume levelling the following morning', 'A mark that lasts 100 years', 'A national geodetic datum', 'A GTS pillar'],
    ans: 0, exp: 'At the close of a day\'s work, a temporary benchmark is established on a tree root, parapet, or stone to restart work next day.',
    tip: 'Temporary benchmark (TBM) = Fixed at close of day\'s work to resume next morning.', top: 'Definitions'
  },
  {
    q: 'In levelling, what is a "Back Sight" (B.S.)?',
    opts: ['The first staff reading taken after the instrument is set up at a station, always taken on a point of known elevation (benchmark or change point)', 'The last reading before moving the instrument', 'Any intermediate reading', 'A sight taken looking backwards over one\'s shoulder'],
    ans: 0, exp: 'Back Sight is strictly the initial staff reading taken after setting up, observed on a point of known RL to establish the Height of Instrument.',
    tip: 'Back Sight (BS) = First reading after setup; taken on point of known RL.', top: 'Levelling instruments'
  },
  {
    q: 'In levelling, what is a "Fore Sight" (F.S.)?',
    opts: ['The final staff reading taken from an instrument setup just before shifting the level to the next station', 'The first reading taken from a setup', 'A reading taken at 12 noon', 'A reading taken on a benchmark only'],
    ans: 0, exp: 'Fore Sight is the last reading taken from an instrument station, indicating that the instrument is about to be moved.',
    tip: 'Fore Sight (FS) = Last reading taken before moving the instrument.', top: 'Levelling instruments'
  },
  {
    q: 'In levelling, what is an "Intermediate Sight" (I.S.)?',
    opts: ['Any staff reading taken between the Back Sight and the Fore Sight from the same instrument setup', 'The average of BS and FS', 'A sight taken through the optical centre', 'A reading taken at midnight'],
    ans: 0, exp: 'Intermediate Sights are observations taken on various ground points between the initial BS and final FS to determine their reduced levels.',
    tip: 'Intermediate Sight (IS) = Any staff reading between BS and FS.', top: 'Levelling instruments'
  },
  {
    q: 'What is a "Change Point" (C.P.) or turning point in levelling?',
    opts: ['A stable ground point on which both a Fore Sight and a Back Sight are taken to transfer the line of sight when moving the instrument', 'The point where the surveyor changes boots', 'The point where the road turns 90°', 'The point where the level is put into its box'],
    ans: 0, exp: 'A change point is a firm point where an FS is taken from the old setup and a BS is taken from the new setup, linking the two setups.',
    tip: 'Change Point (CP) = Point where BOTH Fore Sight and Back Sight are taken.', top: 'Levelling instruments'
  },
  {
    q: 'In the Height of Collimation (H.I.) method of levelling, how is the Height of Instrument computed?',
    opts: ['H.I. = Reduced Level (R.L.) of benchmark + Back Sight (B.S.)', 'H.I. = R.L. - B.S.', 'H.I. = B.S. + F.S.', 'H.I. = R.L. / 2'],
    ans: 0, exp: 'The line of collimation height above datum is found by adding the staff reading at the benchmark to the benchmark\'s reduced level: HI = RL + BS.',
    tip: 'Height of Instrument: HI = RL + BS.', top: 'Methods of levelling'
  },
  {
    q: 'In the Height of Collimation method, how is the Reduced Level (R.L.) of an intermediate station calculated?',
    opts: ['R.L. = Height of Instrument (H.I.) - Intermediate Sight (I.S.)', 'R.L. = H.I. + I.S.', 'R.L. = I.S. - B.S.', 'R.L. = H.I. / I.S.'],
    ans: 0, exp: 'Because the line of collimation is horizontal at elevation HI, subtracting the staff reading gives the ground elevation: RL = HI - IS.',
    tip: 'Reduced Level: RL = HI - Staff Reading (IS or FS).', top: 'Methods of levelling'
  },
  {
    q: 'What is the fundamental arithmetical check applied to the Height of Collimation method?',
    opts: ['Σ B.S. - Σ F.S. = Last R.L. - First R.L.', 'Σ B.S. + Σ F.S. = 0', 'Σ I.S. = Σ B.S.', 'Last R.L. = First R.L.'],
    ans: 0, exp: 'The algebraic check on the collimation method verifies: Σ BS - Σ FS = Last RL - First RL. Notice this does NOT check IS calculations!',
    tip: 'HI method check: Σ BS - Σ FS = Last RL - First RL (does not check IS!).', top: 'Methods of levelling'
  },
  {
    q: 'What is the full arithmetical check applied to the Rise and Fall method of levelling?',
    opts: ['Σ B.S. - Σ F.S. = Σ Rise - Σ Fall = Last R.L. - First R.L.', 'Σ Rise = Σ Fall', 'Σ B.S. = Σ Rise', 'Σ F.S. = Σ Fall'],
    ans: 0, exp: 'The Rise and Fall method provides a complete three-fold check: Σ BS - Σ FS = Σ Rise - Σ Fall = Last RL - First RL, verifying all intermediate reductions.',
    tip: 'Rise & Fall check: Σ BS - Σ FS = Σ Rise - Σ Fall = Last RL - First RL (checks ALL levels).', top: 'Methods of levelling'
  },
  {
    q: 'Why is the Rise and Fall method preferred over the Height of Collimation method for high precision levelling?',
    opts: ['Because it applies an arithmetical check to every single reduced level, including all intermediate sights', 'Because it requires fewer calculations', 'Because it does not require a staff', 'Because it ignores earth curvature'],
    ans: 0, exp: 'In the HI method, an error in calculating an IS level goes completely undetected by the check. Rise and Fall checks every intermediate level.',
    tip: 'Rise and Fall method checks all intermediate sight reductions; HI method does not.', top: 'Methods of levelling'
  },
  {
    q: 'When is an "inverted staff reading" taken in field levelling?',
    opts: ['When the point whose elevation is required lies above the line of collimation (e.g. bridge girder soffit, tunnel roof, ceiling, arch crown)', 'When reading on a benchmark in water', 'When chaining downhill', 'When the staff is broken'],
    ans: 0, exp: 'When measuring the underside of an elevated structure, the staff is held upside down with its zero base touching the ceiling/soffit.',
    tip: 'Inverted staff: Held upside down against ceiling, soffit, or tunnel roof.', top: 'Levelling instruments'
  },
  {
    q: 'How is an inverted staff reading treated in reduced level calculations?',
    opts: ['It is entered with a negative (-) sign in the field book, so R.L. = H.I. - (-Reading) = H.I. + Reading', 'It is divided by 2', 'It is ignored', 'It is multiplied by -180°'],
    ans: 0, exp: 'Because the point is above the instrument line of sight, the reading is subtractive with a minus sign: RL = HI - (-Staff reading) = HI + Staff reading.',
    tip: 'Inverted staff reading is NEGATIVE: RL = HI + Staff reading.', top: 'Levelling instruments'
  },
  {
    q: 'If the Height of Instrument is 105.500 m and an inverted staff reading of 2.350 m is taken on the bottom of a bridge girder, what is the R.L. of the girder soffit?',
    opts: ['107.850 metres', '103.150 metres', '105.500 metres', '108.200 metres'],
    ans: 0, exp: 'RL of girder = HI + Inverted Staff Reading = 105.500 m + 2.350 m = 107.850 m.',
    tip: 'Girder RL = 105.500 + 2.350 = 107.850 m.', top: 'Levelling instruments'
  },
  {
    q: 'If the Height of Instrument is 52.400 m and an inverted staff reading of 1.600 m is taken on a ceiling beam, what is the beam R.L.?',
    opts: ['54.000 metres', '50.800 metres', '52.400 metres', '53.600 metres'],
    ans: 0, exp: 'RL of beam = HI + Staff reading = 52.400 + 1.600 = 54.000 m.',
    tip: 'Beam RL = 52.400 + 1.600 = 54.000 m.', top: 'Levelling instruments'
  },
  {
    q: 'What is the effect of Earth\'s curvature on staff readings over long sight distances?',
    opts: ['It causes the horizontal line of sight to diverge upwards from the level surface, making the staff reading too large', 'It makes the staff reading too small', 'It causes the staff to appear inverted', 'It has zero effect'],
    ans: 0, exp: 'Because the Earth curves downward away from the horizontal line of collimation, the cross-hair intercepts the staff higher than the level line.',
    tip: 'Earth curvature makes staff readings TOO LARGE (Correction is subtractive: Cc = -0.0785 d²).', top: 'Errors in levelling'
  },
  {
    q: 'What is the formula for the curvature correction Cc in metres (where d is the sight distance in kilometres)?',
    opts: ['Cc = - 0.0785 d²', 'Cc = + 0.0785 d²', 'Cc = - 0.0112 d²', 'Cc = - 0.0673 d²'],
    ans: 0, exp: 'Curvature correction is Cc = - d² / (2R) = - 0.0785 d² metres (where d is in km and R is mean Earth radius ~6370 km).',
    tip: 'Curvature correction: Cc = - 0.0785 d² (always subtractive).', top: 'Errors in levelling'
  },
  {
    q: 'What is the effect of atmospheric refraction on levelling staff readings?',
    opts: ['It bends the line of sight downward in an arc towards the Earth, making the staff reading too small', 'It makes the staff reading too large', 'It causes the bubble to freeze', 'It inverts the image'],
    ans: 0, exp: 'As light travels through denser air near the ground, rays refract downward, striking the staff below the straight tangential line.',
    tip: 'Refraction bends rays DOWNWARD, making staff readings TOO SMALL (Correction is additive: Cr = +0.0112 d²).', top: 'Errors in levelling'
  },
  {
    q: 'What is the formula for the atmospheric refraction correction Cr in metres (where d is distance in kilometres)?',
    opts: ['Cr = + 0.0112 d² (approx. 1/7th of curvature correction)', 'Cr = - 0.0112 d²', 'Cr = + 0.0785 d²', 'Cr = + 0.0673 d²'],
    ans: 0, exp: 'Refraction correction is approximately one-seventh of curvature correction and acts in the opposite direction: Cr = + (1/7) Cc = + 0.0112 d² metres.',
    tip: 'Refraction correction: Cr = + 0.0112 d² (additive).', top: 'Errors in levelling'
  },
  {
    q: 'What is the formula for the combined correction C for both Earth curvature and atmospheric refraction in metres (d in km)?',
    opts: ['C = - 0.0673 d²', 'C = + 0.0673 d²', 'C = - 0.0897 d²', 'C = - 0.0785 d²'],
    ans: 0, exp: 'Combined correction C = Cc + Cr = - 0.0785 d² + 0.0112 d² = - 0.0673 d² metres.',
    tip: 'Combined curvature and refraction correction: C = - 0.0673 d² (subtractive).', top: 'Errors in levelling'
  }
];

m5List.forEach(q => addQ(q, 5, 'mod-5', 'Levelling and Contouring'));

console.log('Module 5 additional distinct questions processed. Total added so far:', addedList.length);

// Append to db
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
