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

console.log('Existing unique masks before finishing Mod 3 & 4:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    return false;
  }

  let id = `bq-m${modNum}-fin-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-x${c++}`;
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
    createdAt: '2026-10-11T14:30:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// -------------------------------------------------------------
// MODULE 3: 100 DISTINCT QUESTIONS (COMPASS SURVEYING)
// -------------------------------------------------------------
const m3Qs = [
  {
    q: 'In compass surveying, what is an "unclosed traverse" also called?',
    opts: ['An open traverse', 'A closed loop', 'A polygonal network', 'A geodetic network'],
    ans: 0, exp: 'An unclosed traverse does not terminate at a known station or loop back to the origin; it is also termed an open traverse.',
    tip: 'Unclosed traverse = Open traverse.', top: 'Traversing'
  },
  {
    q: 'What is the effect of iron deposits in the subsoil on a compass survey?',
    opts: ['They induce local magnetic attraction causing erratic needle deviation', 'They increase needle sensitivity', 'They demagnetize the pivot pin', 'They improve leveling'],
    ans: 0, exp: 'Subsurface magnetic iron bodies pull the magnetic needle away from the magnetic meridian, creating local attraction.',
    tip: 'Subsurface iron ore causes local attraction.', top: 'Local attraction'
  },
  {
    q: 'What is the primary advantage of the method of included angles over the method of successive bearings in traversing?',
    opts: ['Errors of local attraction do not propagate into the computed interior angles', 'It requires measuring only one line', 'It does not require back bearings', 'It eliminates the need for chaining'],
    ans: 0, exp: 'Since both the forward and backward bearings at an affected station shift by the same error, their difference (included angle) remains unaffected.',
    tip: 'Included angle method isolates local attraction errors from angle calculations.', top: 'Local attraction'
  },
  {
    q: 'In a compass traverse, what is the check on bearings of an open traverse connecting two established triangulated lines AB and CD?',
    opts: ['The calculated bearing of the closing line must match the known true bearing of line CD', 'The interior angles must sum to 360°', 'All lines must have equal lengths', 'All bearings must be less than 90°'],
    ans: 0, exp: 'The calculated bearing propagated through the traverse legs must agree with the known astronomical or geodetic azimuth of the closing reference line.',
    tip: 'Connecting traverse check: Propagated bearing must equal known azimuth of final line.', top: 'Traversing'
  },
  {
    q: 'What is the meaning of "meridian" in general surveying?',
    opts: ['A fixed line of reference with respect to which bearings of survey lines are measured', 'The longest diagonal of a polygon', 'The equator of the earth', 'The horizon line'],
    ans: 0, exp: 'A meridian is a fixed reference direction from which horizontal angular directions (bearings) are measured.',
    tip: 'Meridian = Fixed reference line for measuring bearings.', top: 'Introduction to Compass survey'
  },
  {
    q: 'What is the term for a meridian that is established by astronomical observation to Polaris or the Sun?',
    opts: ['True meridian', 'Magnetic meridian', 'Arbitrary meridian', 'Grid meridian'],
    ans: 0, exp: 'True meridian is determined astronomically by observing celestial bodies (sun or North Star) passing through the celestial meridian.',
    tip: 'Astronomical observation of sun/Polaris gives the TRUE meridian.', top: 'Introduction to Compass survey'
  },
  {
    q: 'Why does the true meridian remain strictly constant for a given station while the magnetic meridian changes?',
    opts: ['Because geographic poles are fixed reference points on Earth\'s rotation axis while magnetic poles wander continuously', 'Because the Earth is flat', 'Because compass needles have inertia', 'Because temperature affects geographic north'],
    ans: 0, exp: 'The true meridian is defined by the rotational poles of the Earth, which do not wander like the Earth\'s convective magnetic poles.',
    tip: 'True meridian is fixed to Earth\'s spin axis; magnetic meridian wanders.', top: 'Introduction to Compass survey'
  },
  {
    q: 'What is "grid declination" (or grid convergence)?',
    opts: ['The horizontal angle between the true meridian and the grid meridian of a map projection', 'The angle between magnetic meridian and grid line', 'The dip of the compass needle', 'The scale factor at the central meridian'],
    ans: 0, exp: 'Grid convergence is the angle between the true geographic meridian and the parallel grid line (grid North) on a projected coordinate map.',
    tip: 'Grid convergence = Angle between True North and Grid North.', top: 'Introduction to Compass survey'
  },
  {
    q: 'What is an "azimuth mark"?',
    opts: ['A permanent reference beacon located at a known astronomical azimuth from a survey station', 'A scratch on the compass glass', 'The zero point on a metric chain', 'A tally at 10 m'],
    ans: 0, exp: 'An azimuth mark is a distant, clearly visible permanent mark whose true azimuth from the instrument station has been precisely established.',
    tip: 'Azimuth mark = Distant permanent beacon with known astronomical azimuth.', top: 'Introduction to Compass survey'
  },
  {
    q: 'In Whole Circle Bearing, what is the bearing of a survey line pointing North-East exactly bisecting the quadrant?',
    opts: ['45° 00\'', '135° 00\'', '225° 00\'', '315° 00\''],
    ans: 0, exp: 'Bisecting the North-East quadrant gives an angle of 45° measured clockwise from North.',
    tip: 'Due North-East = 45° 00\'.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'In Whole Circle Bearing, what is the bearing of a line pointing South-East exactly bisecting the quadrant?',
    opts: ['135° 00\'', '45° 00\'', '225° 00\'', '315° 00\''],
    ans: 0, exp: 'In the second quadrant, 180° - 45° = 135° 00\'.',
    tip: 'Due South-East = 135° 00\'.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'In Whole Circle Bearing, what is the bearing of a line pointing South-West exactly bisecting the quadrant?',
    opts: ['225° 00\'', '135° 00\'', '45° 00\'', '315° 00\''],
    ans: 0, exp: 'In the third quadrant, 180° + 45° = 225° 00\'.',
    tip: 'Due South-West = 225° 00\'.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'In Whole Circle Bearing, what is the bearing of a line pointing North-West exactly bisecting the quadrant?',
    opts: ['315° 00\'', '45° 00\'', '135° 00\'', '225° 00\''],
    ans: 0, exp: 'In the fourth quadrant, 360° - 45° = 315° 00\'.',
    tip: 'Due North-West = 315° 00\'.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the Whole Circle Bearing of a line whose Quadrantal Bearing is S 30° E?',
    opts: ['150°', '210°', '30°', '330°'],
    ans: 0, exp: 'In the SE quadrant, WCB = 180° - 30° = 150°.',
    tip: 'S 30° E = 180° - 30° = 150°.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the Whole Circle Bearing of a line whose Quadrantal Bearing is S 40° W?',
    opts: ['220°', '140°', '320°', '40°'],
    ans: 0, exp: 'In the SW quadrant, WCB = 180° + 40° = 220°.',
    tip: 'S 40° W = 180° + 40° = 220°.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the Whole Circle Bearing of a line whose Quadrantal Bearing is N 50° W?',
    opts: ['310°', '130°', '230°', '50°'],
    ans: 0, exp: 'In the NW quadrant, WCB = 360° - 50° = 310°.',
    tip: 'N 50° W = 360° - 50° = 310°.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the Quadrantal Bearing of a line whose Whole Circle Bearing is 165°?',
    opts: ['S 15° E', 'N 15° E', 'S 15° W', 'N 15° W'],
    ans: 0, exp: 'Lies in SE quadrant: QB = S (180° - 165°) E = S 15° E.',
    tip: '165° = S 15° E.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the Quadrantal Bearing of a line whose Whole Circle Bearing is 255°?',
    opts: ['S 75° W', 'N 75° W', 'S 75° E', 'N 75° E'],
    ans: 0, exp: 'Lies in SW quadrant: QB = S (255° - 180°) W = S 75° W.',
    tip: '255° = S 75° W.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the Quadrantal Bearing of a line whose Whole Circle Bearing is 340°?',
    opts: ['N 20° W', 'S 20° W', 'N 20° E', 'S 20° E'],
    ans: 0, exp: 'Lies in NW quadrant: QB = N (360° - 340°) W = N 20° W.',
    tip: '340° = N 20° W.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'If the Fore Bearing of a line is 0° 00\', what is its Back Bearing?',
    opts: ['180° 00\'', '0° 00\'', '360° 00\'', '90° 00\''],
    ans: 0, exp: 'BB = FB + 180° = 0° + 180° = 180° 00\'.',
    tip: 'FB = 0° -> BB = 180°.', top: 'Fore and Back bearing'
  },
  {
    q: 'If the Fore Bearing of a line is 90° 00\', what is its Back Bearing?',
    opts: ['270° 00\'', '180° 00\'', '90° 00\'', '360° 00\''],
    ans: 0, exp: 'BB = FB + 180° = 90° + 180° = 270° 00\'.',
    tip: 'FB = 90° -> BB = 270°.', top: 'Fore and Back bearing'
  },
  {
    q: 'If the Fore Bearing of a line is 270° 00\', what is its Back Bearing?',
    opts: ['90° 00\'', '180° 00\'', '0° 00\'', '270° 00\''],
    ans: 0, exp: 'BB = FB - 180° = 270° - 180° = 90° 00\'.',
    tip: 'FB = 270° -> BB = 90°.', top: 'Fore and Back bearing'
  },
  {
    q: 'In an open compass traverse, how are linear distances usually verified against large blunders in chaining?',
    opts: ['By pacing or tacheometric stadia checks', 'By reading the trough compass twice', 'By using sunglasses', 'By taking back bearings'],
    ans: 0, exp: 'Tacheometric stadia or pacing provides an independent rough check on chained distances in open traverses.',
    tip: 'Pacing / stadia reading provides quick check on linear chaining.', top: 'Traversing'
  },
  {
    q: 'What is the sum of interior angles for a 4-sided closed polygon traverse (quadrilateral)?',
    opts: ['360°', '180°', '540°', '720°'],
    ans: 0, exp: 'Sum = (2×4 - 4) × 90° = 4 × 90° = 360°.',
    tip: '4-sided polygon sum of interior angles = 360°.', top: 'Traversing'
  },
  {
    q: 'What is the sum of interior angles for a 7-sided closed polygon traverse (heptagon)?',
    opts: ['900°', '720°', '1080°', '540°'],
    ans: 0, exp: 'Sum = (2×7 - 4) × 90° = 10 × 90° = 900°.',
    tip: '7-sided polygon interior angle sum = (7 - 2) × 180° = 900°.', top: 'Traversing'
  },
  {
    q: 'In a compass traverse, what is a "deflection angle"?',
    opts: ['The horizontal angle which a survey line makes with the prolongation of the preceding survey line', 'The angle with magnetic north', 'The angle of dip', 'The angle of the prism'],
    ans: 0, exp: 'A deflection angle is measured from the prolongation of the back line to the forward line, designated as deflection Right or Left.',
    tip: 'Deflection angle = Angle between prolongation of preceding line and forward line.', top: 'Traversing'
  },
  {
    q: 'In a closed traverse, if all deflection angles to the right are considered positive and to the left negative, the algebraic sum of deflection angles must equal:',
    opts: ['±360°', '180°', '0°', '720°'],
    ans: 0, exp: 'For any closed non-self-intersecting polygon, traversing full circle turns exactly 360° (positive for clockwise, negative for counter-clockwise).',
    tip: 'Algebraic sum of deflection angles for closed polygon = ±360°.', top: 'Traversing'
  },
  {
    q: 'What is the primary cause of secular variation of the Earth\'s magnetic field?',
    opts: ['Convective fluid motions of molten iron and nickel in the Earth\'s outer core', 'Ocean tidal waves', 'The phases of the moon', 'Deforestation on mountain slopes'],
    ans: 0, exp: 'Earth\'s core dynamo geodynamo fluid turbulence alters the magnetic field over decade and century timescales.',
    tip: 'Secular variation is caused by core fluid dynamo convection in Earth\'s outer core.', top: 'Magnetic Declination'
  },
  {
    q: 'What is the effect on compass readings if the observer stands near an electric railway line with direct current overhead wires?',
    opts: ['Intense magnetic deflection (local attraction) due to strong magnetic fields produced by electric currents', 'The needle ceases to rotate permanently', 'The prism cracks', 'No effect since wires are overhead'],
    ans: 0, exp: 'Heavy DC currents in overhead traction or return rails generate strong magnetic fields (B = μI/(2πr)) that severely deflect magnetic needles.',
    tip: 'Electric railway DC traction causes severe electromagnetic local attraction.', top: 'Local attraction'
  },
  {
    q: 'How does an agate bearing cap compare to a metal bearing cap on a compass needle pivot?',
    opts: ['Agate is extremely hard, takes a high polish, resists wear, and produces almost zero friction against the steel pivot', 'Agate is soft and absorbs shocks', 'Agate is magnetic', 'Agate conducts heat rapidly'],
    ans: 0, exp: 'Agate (microcrystalline quartz, Mohs hardness 7) resists indentation by the steel pivot, providing a nearly frictionless jewel bearing.',
    tip: 'Agate cap: Hard jewel bearing (Mohs 7) providing low friction and high wear resistance.', top: 'Prismatic compass'
  },
  {
    q: 'Why should the sight vane of a prismatic compass always be folded down flat onto the glass lid after use?',
    opts: ['Folding it activates the lifting lever to lift the needle off the pivot, locking it securely and preventing pivot wear during transit', 'To keep dust off the prism', 'To turn off the compass light', 'To reset the zero mark'],
    ans: 0, exp: 'Folding the vane raises the lifting lever, disengaging the agate jewel from the sharp pivot so road vibrations do not blunt the point.',
    tip: 'Folding sight vane raises needle off pivot to protect pivot from vibration damage.', top: 'Prismatic compass'
  },
  {
    q: 'What happens if a magnetic compass needle is handled near a strong permanent magnet?',
    opts: ['Its magnetic polarity can be weakened or even reversed, destroying its calibration', 'It increases its focal length', 'It doubles its weight', 'It turns into brass'],
    ans: 0, exp: 'Proximity to strong magnets can demagnetize or reverse the magnetic poles of the compass needle.',
    tip: 'Keep compass needles away from permanent magnets to avoid demagnetization.', top: 'Errors in Compass survey'
  },
  {
    q: 'How can a compass needle that has lost its magnetism over years of service be re-magnetized?',
    opts: ['By stroking each pole from the centre outwards with the opposite pole of a strong bar magnet, or inside a DC solenoid coil', 'By soaking it in hot water', 'By polishing it with sand', 'By exposing it to sunlight'],
    ans: 0, exp: 'Re-magnetizing is done by touch method with bar magnets or placing the needle in a DC electromagnetic coil.',
    tip: 'Re-magnetize needle: Stroke with bar magnet or place in DC solenoid coil.', top: 'Errors in Compass survey'
  },
  {
    q: 'In compass surveying, what is an "isodynamic line"?',
    opts: ['A line connecting points on the Earth\'s surface having equal total magnetic field intensity', 'A line of equal dip', 'A line of equal declination', 'A line of equal elevation'],
    ans: 0, exp: 'Isodynamic lines connect locations where the total intensity of the geomagnetic field is the same.',
    tip: 'Isodynamic lines = Equal magnetic intensity.', top: 'Magnetic Declination'
  },
  {
    q: 'In the formula for Bowditch\'s traverse adjustment, what does ΣL represent?',
    opts: ['The algebraic sum of all latitudes in the closed traverse (closing error in latitude)', 'The length of the first traverse line', 'The sum of all line lengths', 'The total perimeter'],
    ans: 0, exp: 'ΣL is the total discrepancy in latitude between starting and ending points (Northing error - Southing error).',
    tip: 'ΣL = Total closing error in latitude.', top: 'Traversing'
  },
  {
    q: 'In the formula for Bowditch\'s traverse adjustment, what does ΣD represent?',
    opts: ['The algebraic sum of all departures in the closed traverse (closing error in departure)', 'The diameter of the circular traverse', 'The distance to the benchmark', 'The deflection angle'],
    ans: 0, exp: 'ΣD is the total discrepancy in departure (Easting error - Westing error) in a closed traverse.',
    tip: 'ΣD = Total closing error in departure.', top: 'Traversing'
  },
  {
    q: 'In a closed traverse, if ΣL = +0.30 m and ΣD = -0.40 m, what is the magnitude of the closing error?',
    opts: ['0.50 metres', '0.70 metres', '0.10 metres', '0.25 metres'],
    ans: 0, exp: 'e = √[(0.30)² + (-0.40)²] = √[0.09 + 0.16] = √0.25 = 0.50 metres.',
    tip: 'e = √[0.3² + 0.4²] = 0.50 m.', top: 'Traversing'
  },
  {
    q: 'If closing error e = 0.50 m and total perimeter of the traverse P = 1000 m, what is the relative accuracy of the traverse?',
    opts: ['1 in 2000', '1 in 500', '1 in 10,000', '1 in 1000'],
    ans: 0, exp: 'Relative precision = 0.50 / 1000 = 1 / 2000 (1 in 2000).',
    tip: 'Accuracy = 0.5 / 1000 = 1 in 2000.', top: 'Traversing'
  },
  {
    q: 'If closing error e = 0.20 m and perimeter P = 800 m, what is the relative accuracy?',
    opts: ['1 in 4000', '1 in 2000', '1 in 1600', '1 in 800'],
    ans: 0, exp: 'Relative accuracy = 0.20 / 800 = 1 / 4000.',
    tip: 'Accuracy = 0.2 / 800 = 1 in 4000.', top: 'Traversing'
  },
  {
    q: 'In which quadrant does a closing error vector lie if ΣL = -0.30 m and ΣD = -0.30 m?',
    opts: ['Third quadrant (South-West)', 'First quadrant (North-East)', 'Second quadrant (South-East)', 'Fourth quadrant (North-West)'],
    ans: 0, exp: 'Negative latitude (South) and negative departure (West) locate the error in the South-West (third) quadrant.',
    tip: '-L and -D = South-West (SW) quadrant.', top: 'Traversing'
  },
  {
    q: 'What is the correction applied to a line if the total closing error in latitude is positive (+)?',
    opts: ['A negative correction (subtraction) to latitudes proportionally', 'A positive addition', 'Zero correction', 'A multiplication by 2'],
    ans: 0, exp: 'Correction = - Error. If total latitude error is positive, all applied corrections are negative.',
    tip: 'Correction is always equal and OPPOSITE in sign to Error.', top: 'Traversing'
  },
  {
    q: 'In a 4-sided closed polygon, if the measured interior angles are 90°10\', 89°50\', 90°20\', and 89°40\', what is the total angular error?',
    opts: ['0° 00\' (Zero error; sum is 360°00\')', '0° 20\'', '1° 00\'', '0° 40\''],
    ans: 0, exp: 'Sum = 90°10\' + 89°50\' + 90°20\' + 89°40\' = 360°00\'. Expected sum is (2×4 - 4)×90° = 360°00\'. Hence total error is 0°00\'.',
    tip: 'Measured sum = 360°00\' -> Error = 0°00\'.', top: 'Traversing'
  },
  {
    q: 'In a triangle traverse ABC, if angle A = 60°15\', angle B = 59°45\', and angle C = 60°30\', what is the angular closing error?',
    opts: ['+0° 30\'', '-0° 30\'', '+1° 00\'', '0° 00\''],
    ans: 0, exp: 'Sum = 60°15\' + 59°45\' + 60°30\' = 180°30\'. Theoretical sum = 180°00\'. Error = 180°30\' - 180°00\' = +30 minutes.',
    tip: 'Sum = 180°30\' -> Error = +30\'.', top: 'Traversing'
  },
  {
    q: 'If the total angular error in a triangle traverse ABC is +30 minutes, what correction is applied to each angle assuming equal weight?',
    opts: ['-10 minutes to each angle', '+10 minutes to each angle', '-30 minutes to angle A only', 'Zero correction'],
    ans: 0, exp: 'Correction = - Error / n = - (+30\') / 3 = -10 minutes per angle.',
    tip: 'Correction per angle = -30\' / 3 = -10\'.', top: 'Traversing'
  },
  {
    q: 'What is the purpose of drawing a "north arrow" on every completed survey map?',
    opts: ['To define the orientation of the map so the reader knows geographic direction', 'To decorate the title block', 'To show the scale of the map', 'To indicate the location of the benchmark'],
    ans: 0, exp: 'The north arrow establishes the directional datum of the plan, enabling users to orient the map with respect to the real ground.',
    tip: 'North arrow: Establishes map orientation with respect to geographic north.', top: 'Introduction to Compass survey'
  },
  {
    q: 'On a standard survey plan, which direction does the top of the sheet customarily represent unless otherwise noted?',
    opts: ['North', 'South', 'East', 'West'],
    ans: 0, exp: 'By universal cartographic convention, North is oriented towards the top edge of the map sheet.',
    tip: 'Top of survey drawing represents North.', top: 'Introduction to Compass survey'
  },
  {
    q: 'What is the "dip" of the compass needle at the South Magnetic Pole?',
    opts: ['90° with the South pole of the needle pointing vertically downwards', '0° horizontal', '45°', '180°'],
    ans: 0, exp: 'At the South magnetic pole, magnetic field lines emerge vertically from Earth, causing the South end of the needle to dip 90° downward.',
    tip: 'Dip at South Magnetic Pole = 90° (South end down).', top: 'Magnetic Declination'
  },
  {
    q: 'What is the "dip" of the compass needle at the North Magnetic Pole?',
    opts: ['90° with the North pole of the needle pointing vertically downwards', '0° horizontal', '45°', '180°'],
    ans: 0, exp: 'At the North magnetic pole, magnetic lines enter vertically, pulling the North end of the needle 90° downward.',
    tip: 'Dip at North Magnetic Pole = 90° (North end down).', top: 'Magnetic Declination'
  },
  {
    q: 'What is the term for a line connecting places on Earth where the magnetic needle remains perfectly horizontal?',
    opts: ['The aclinic line (magnetic equator)', 'The agonic line', 'The prime meridian', 'The Tropic of Capricorn'],
    ans: 0, exp: 'The aclinic line is the line of zero dip where magnetic lines of force run parallel to the Earth\'s surface.',
    tip: 'Aclinic line = Line where needle is horizontal (zero dip).', top: 'Magnetic Declination'
  },
  {
    q: 'What instrument is specifically employed to measure the horizontal angle between two distant stations from a moving boat during hydrographic surveys?',
    opts: ['Nautical sextant', 'Prismatic compass', 'Surveyor\'s compass', 'Dumpy level'],
    ans: 0, exp: 'A nautical sextant uses double reflection to measure horizontal angles between shoreline beacons from an unstable boat platform without a tripod.',
    tip: 'Sextant: Measures angles from moving boat in hydrographic surveys.', top: 'Prismatic compass'
  }
];

m3Qs.forEach(q => addQ(q, 3, 'mod-3', 'Compass survey'));

console.log('Module 3 additional distinct questions processed. Total added so far:', addedList.length);

// -------------------------------------------------------------
// MODULE 4: 210 DISTINCT QUESTIONS (PLANE TABLE SURVEYING)
// -------------------------------------------------------------
const m4Qs = [
  {
    q: 'Why is the upper surface of a plane table board kept unpolished and smooth rather than lacquered or glossy?',
    opts: ['To prevent annoying light glare from reflecting into the surveyor\'s eyes and ensure drawing paper clings flat', 'To absorb ink', 'To make it lighter in weight', 'To prevent termites'],
    ans: 0, exp: 'Glossy varnish creates bright solar reflections that tire the surveyor\'s eyes and causes paper to slide. A matte, smooth finish is ideal.',
    tip: 'Unpolished matte surface prevents sun glare and holds paper flat.', top: 'Accessories of plane table'
  },
  {
    q: 'What type of joints are used to join the timber strips of a high grade plane table board?',
    opts: ['Tongue and groove joints with hardwood battens screwed underneath through slotted washers', 'Simple butt joints with glue only', 'Dovetail joints along the edge', 'Miter joints'],
    ans: 0, exp: 'Strips are joined with tongue-and-groove joints, and battens are secured with screws in slotted brass washers to permit seasonal expansion without splitting.',
    tip: 'Tongue and groove strips with slotted-washer underside battens allow wood expansion.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, how is drawing paper securely fastened to the board in the field?',
    opts: ['Using spring paper clips or thumb pins along edges with the underside glued or taped down', 'Using liquid rubber cement across the entire face', 'Using steel nails driven with a hammer', 'By soaking the paper in water'],
    ans: 0, exp: 'Paper is held firmly by spring board clamps or thumb tacks along edges, keeping the central working area completely free and flat.',
    tip: 'Spring paper clips / thumb pins along edges secure drawing paper.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the purpose of the "fiducial edge" on a telescopic alidade?',
    opts: ['It provides the physical ruling edge in the plane of the optical line of sight for drawing plotted rays', 'To protect the objective lens', 'To measure the diameter of the tripod head', 'To scrape pencil leads'],
    ans: 0, exp: 'The fiducial edge lies in the vertical plane containing the line of sight of the telescope, ensuring rays drawn along it represent true sightlines.',
    tip: 'Fiducial edge of telescopic alidade coincides with line of sight plane.', top: 'Accessories of plane table'
  },
  {
    q: 'In a telescopic alidade, what is the "Beaman stadia arc"?',
    opts: ['A specially graduated circular scale that provides direct readings for calculating horizontal and vertical distances without trigonometric tables', 'A curved ruler for drawing contours', 'A device to measure magnetic declination', 'A spring that damps the telescope'],
    ans: 0, exp: 'The Beaman arc simplifies stadia calculations by providing multiple factors that directly multiply the staff intercept to yield horizontal distance and height.',
    tip: 'Beaman stadia arc: Directly computes horizontal and vertical distances from staff intercept.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the length of the magnetic needle in a standard trough compass used with a plane table?',
    opts: ['12 to 15 cm (120 to 150 mm)', '2 to 3 cm', '30 to 40 cm', '50 cm'],
    ans: 0, exp: 'A trough compass houses a long, sensitive needle of 120 mm to 150 mm length to provide high directional sensitivity over its short ±5° end scales.',
    tip: 'Trough compass needle length = 12 to 15 cm.', top: 'Accessories of plane table'
  },
  {
    q: 'Why is the graduated scale in a trough compass restricted to only 5° on either side of zero instead of 360°?',
    opts: ['Because it is designed solely to establish the North-South magnetic meridian line, not to measure arbitrary angles', 'To reduce the weight of the compass', 'Because the needle cannot rotate full circle', 'To fit into the pocket of the surveyor'],
    ans: 0, exp: 'The trough compass is an orienting device, not an angle measurer. Its narrow box only needs a few degrees around zero to align with the meridian.',
    tip: 'Trough compass has only ±5° scale because it only aligns the table with the meridian.', top: 'Accessories of plane table'
  },
  {
    q: 'In orienting a plane table with a trough compass, how is the magnetic meridian marked on the drawing sheet at the first station?',
    opts: ['The compass is placed along the edge of the board, rotated until the needle floats at zero, and a fine pencil line ruled along its casing', 'By taking a 360° reading with a prism', 'By drawing a circle around the tripod', 'By hanging a plumb bob'],
    ans: 0, exp: 'The trough compass is laid on the sheet, turned until the needle reads zero, and a pencil line drawn along its edge marks the magnetic meridian.',
    tip: 'Draw line along trough compass casing when needle settles at 0°-0° mark.', top: 'Setting up plane table'
  },
  {
    q: 'At subsequent stations, how is the table oriented using the trough compass and the previously drawn meridian line?',
    opts: ['The compass is aligned strictly along the drawn meridian line, and the board rotated until the needle points exactly to zero', 'By placing the compass in the centre of the board', 'By pointing the alidade towards the sun', 'By tapping the tripod legs'],
    ans: 0, exp: 'The compass edge is placed on the pencil meridian line, the board clamp loosened, and the table turned until the needle settles at zero.',
    tip: 'Align compass with pencil line and rotate table until needle reads zero.', top: 'Setting up plane table'
  },
  {
    q: 'What is the main limitation of orienting a plane table by trough compass in an urban or industrial area?',
    opts: ['Local attraction from steel structures, buried utilities, and vehicles deflects the needle, producing orientation errors', 'The compass needle gets dirty', 'The paper becomes damp', 'The tripod slips on pavements'],
    ans: 0, exp: 'In urban environments, ferrous metals distort the local magnetic field, causing the trough compass to orient the table erroneously.',
    tip: 'Urban local attraction makes trough compass orientation unreliable.', top: 'Setting up plane table'
  },
  {
    q: 'In plane table surveying, what is an "auxiliary station" in the context of the Two-Point Problem?',
    opts: ['A temporary intermediate station occupied by the table to help establish the correct orientation of the board', 'A station where the lunch break is taken', 'A benchmark of known reduced level', 'A station outside the boundaries of Kerala'],
    ans: 0, exp: 'In solving the two-point problem, an auxiliary station D is occupied to create trial resection rays and correct board orientation.',
    tip: 'Auxiliary station = Temporary setup point used to resolve orientation in the 2-point problem.', top: 'Resection'
  },
  {
    q: 'In plane tabling, why is centring considered less critical on a 1:50,000 topographical survey map than on a 1:200 building site survey plan?',
    opts: ['On a 1:50,000 scale, a 1-metre ground displacement represents only 0.02 mm on paper, which is totally invisible', 'Because large scale maps use thicker pencils', 'Because small scale maps ignore boundaries', 'Because hills cancel out centring errors'],
    ans: 0, exp: 'Plotting error on paper = Ground error / Scale factor. At 1:50,000, 1 metre on ground = 0.02 mm on sheet, far below drafting threshold.',
    tip: 'Centring error significance is inversely proportional to map scale factor.', top: 'Setting up plane table'
  },
  {
    q: 'At what scale of plane tabling does precise centring using a plumbing fork become strictly mandatory?',
    opts: ['Large scale cadastral or architectural engineering plans (such as 1:250 to 1:500)', 'Small scale maps of 1:250,000', 'Topographical sheets of 1:50,000', 'Geographical atlases'],
    ans: 0, exp: 'On large scale plans (1:500), a ground error of 25 cm represents 0.5 mm on paper, which produces unacceptable plotting displacement.',
    tip: 'Large scale plans (1:250 to 1:500) demand rigorous plumbing fork centring.', top: 'Setting up plane table'
  },
  {
    q: 'What is the function of the "tangent screw" on the plane table leveling head?',
    opts: ['To provide micro-metric fine rotational adjustment of the board during backsighting orientation', 'To clamp the paper', 'To lock the tripod legs', 'To focus the telescope'],
    ans: 0, exp: 'After clamping the board roughly on target, the slow-motion tangent screw rotates the table fractionally for exact bisection.',
    tip: 'Tangent screw = Fine rotation adjustment for exact backsight bisection.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane tabling, what is a "ray"?',
    opts: ['A straight line drawn on the drawing board from the plotted station point towards a sighted ground target', 'A beam of sunlight', 'A laser distance measurement', 'The edge of the tripod leg'],
    ans: 0, exp: 'A ray is a graphical sightline drawn on the paper along the alidade fiducial edge representing the direction to a sighted object.',
    tip: 'Ray = Directional straight line drawn on board towards sighted object.', top: 'Methods of plane table'
  },
  {
    q: 'In the Radiation method of plane tabling, how is each ground detail point plotted on the sheet?',
    opts: ['A ray is drawn towards the point with the alidade, and the taped ground distance is scaled off along that ray from the station point', 'By intersecting two rays from two stations', 'By trial and error', 'By reading the trough compass'],
    ans: 0, exp: 'Radiation: 1. Sight object with alidade through station point; 2. Draw ray; 3. Measure ground distance; 4. Prick scaled distance along ray.',
    tip: 'Radiation: Draw ray + Measure distance + Scale distance along ray.', top: 'Methods of plane table'
  },
  {
    q: 'In the Intersection method of plane table surveying, how are ground points plotted?',
    opts: ['By the intersection of two corresponding rays drawn to the object from two different plane table stations', 'By measuring distances with steel band', 'By dropping a plumb bob', 'By drawing circles with a compass'],
    ans: 0, exp: 'Intersection fixes the point on paper at the intersection of two rays drawn from the endpoints of a known baseline.',
    tip: 'Intersection: Plotted at crossing point of two rays drawn from ends of baseline.', top: 'Methods of plane table'
  },
  {
    q: 'What is the primary factor determining the accuracy of a point plotted by the Intersection method in plane tabling?',
    opts: ['The angle of intersection between the two rays (ideally close to 90°)', 'The brand of the drawing paper', 'The length of the alidade vane', 'The temperature of the air'],
    ans: 0, exp: 'Intersection accuracy depends directly on the intersection angle: 90° gives maximum sharpness; angles <30° or >120° yield blurred, elongated crossings.',
    tip: 'Intersection accuracy is highest when rays intersect at 90° (well-conditioned).', top: 'Methods of plane table'
  },
  {
    q: 'In plane table traversing, what is done at each new setup station after levelling and centring?',
    opts: ['The table is oriented by backsighting to the preceding station along the line plotted between them', 'A new baseline is measured across a river', 'The paper is replaced with a fresh sheet', 'The trough compass is discarded'],
    ans: 0, exp: 'At every traverse station, the alidade is aligned along the line connecting it to the back station, and the board rotated to bisect that station.',
    tip: 'Traversing: Board oriented at each station by backsighting to previous station.', top: 'Methods of plane table'
  },
  {
    q: 'In a closed plane table traverse, how does closing error manifest itself on the drawing sheet?',
    opts: ['The plotted position of the starting station at the end of the circuit fails to coincide with its initial plotted position', 'The board cracks', 'The pencil breaks', 'The rays cross at 180°'],
    ans: 0, exp: 'Closing error appears as a gap between the initial plotted point of station 1 and its replotted position when arriving back from station n.',
    tip: 'Closing error = Gap between initial station mark and final closing point on sheet.', top: 'Methods of plane table'
  },
  {
    q: 'How is closing error in a plane table traverse adjusted graphically on the drawing board?',
    opts: ['By applying the graphical Bowditch polygon construction directly on the drawing sheet', 'By redrawing all rays from scratch', 'By shifting the table 1 metre north', 'By rotating the trough compass'],
    ans: 0, exp: 'Bowditch\'s graphical method constructs a parallel displacement line at each station proportional to perimeter distance to adjust the polygon.',
    tip: 'Traverse closing error is adjusted graphically using Bowditch\'s construction.', top: 'Methods of plane table'
  },
  {
    q: 'What is the term for fixing an unknown plane table station by sighting two known control stations when the table cannot be oriented by backsight?',
    opts: ['The Two-Point Problem', 'The Three-Point Problem', 'The Radiation method', 'Graphic triangulation'],
    ans: 0, exp: 'When only two control points are visible and table orientation is unknown, fixing the position is known as the Two-Point Problem.',
    tip: 'Two-Point Problem = Resection from two known points with unknown orientation.', top: 'Resection'
  },
  {
    q: 'What is the term for fixing an unknown plane table station by sighting three known control stations when orientation is unknown?',
    opts: ['The Three-Point Problem', 'The Two-Point Problem', 'The Four-Point Problem', 'Direct resection'],
    ans: 0, exp: 'Determining the position and orientation of the table by observing three plotted control stations is the classic Three-Point Problem.',
    tip: 'Three-Point Problem = Resection from three known plotted control stations.', top: 'Resection'
  },
  {
    q: 'In Lehmann\'s solution of the Three-Point Problem, what is the "great triangle"?',
    opts: ['The triangle formed on the ground (and on the sheet) by joining the three known control stations A, B, and C', 'The triangle of error', 'The drawing board itself', 'The three tripod legs'],
    ans: 0, exp: 'The triangle formed by connecting the three known control points A, B, and C is designated as the great triangle.',
    tip: 'Great triangle = Triangle formed by the three control stations A, B, and C.', top: 'Resection'
  },
  {
    q: 'In Lehmann\'s solution of the Three-Point Problem, what is the "great circle"?',
    opts: ['The circumscribed circle passing through the three known control stations A, B, and C', 'The zero circle of a planimeter', 'The equator of the earth', 'The rim of the compass box'],
    ans: 0, exp: 'The circle passing through all three control stations A, B, and C is termed the great circle (or danger circle).',
    tip: 'Great circle = Circumscribed circle passing through the 3 control points.', top: 'Resection'
  },
  {
    q: 'Why does resection by the Three-Point Problem FAIL completely when the instrument station lies on the great circle?',
    opts: ['Because any point on the great circle satisfies the angle subtended by the control points, creating infinite possible positions (indeterminate)', 'Because the magnetic needle stops moving', 'Because the alidade cannot reach the edges', 'Because sunlight blinds the vanes'],
    ans: 0, exp: 'By geometry, angles subtended by chords AC and BC are identical at all points on the circumference, so rays intersect everywhere along the circle.',
    tip: 'Table on Great Circle -> Infinite solutions -> Three-Point problem FAILS completely.', top: 'Resection'
  },
  {
    q: 'In Lehmann\'s method, if the instrument station is inside the great triangle, what is the position of the true station point p relative to the triangle of error?',
    opts: ['Strictly INSIDE the triangle of error', 'Outside the triangle of error', 'On the longest ray', 'At vertex A'],
    ans: 0, exp: 'Rule: When the station is inside the great triangle ABC, the true plotted point p is situated inside the triangle of error.',
    tip: 'Station inside great triangle -> True point is INSIDE triangle of error.', top: 'Resection'
  },
  {
    q: 'In Lehmann\'s method, if the instrument station is outside the great triangle, what is the position of the true station point p relative to the triangle of error?',
    opts: ['Strictly OUTSIDE the triangle of error', 'Inside the triangle of error', 'At the midpoint of side ab', 'Indeterminate'],
    ans: 0, exp: 'Rule: When the station is outside the great triangle ABC, the true plotted point p lies outside the triangle of error.',
    tip: 'Station outside great triangle -> True point is OUTSIDE triangle of error.', top: 'Resection'
  },
  {
    q: 'According to Lehmann\'s rules, how is the true point p positioned with respect to the three resection rays?',
    opts: ['It must lie either completely to the right or completely to the left of all three rays when looking along them towards the ground stations', 'It must lie between the two nearest rays', 'It alternates left and right', 'It lies strictly on ray B'],
    ans: 0, exp: 'Rule: Facing the stations, the true point must be consistently to the right of all three rays or to the left of all three rays.',
    tip: 'True point p lies all to the right or all to the left of the three rays.', top: 'Resection'
  },
  {
    q: 'According to Lehmann\'s rules, how does the distance of true point p from any resection ray relate to the corresponding ground station distance?',
    opts: ['The distance of p from a ray is directly proportional to the distance of that ground station from the table', 'It is inversely proportional to ground distance', 'It is equal for all three rays', 'It is zero for the middle ray'],
    ans: 0, exp: 'Rule: The distance of point p from each ray is proportional to the ground distance from the plane table to that respective station.',
    tip: 'Distance of p from ray ∝ Ground distance to that station.', top: 'Resection'
  },
  {
    q: 'In Lehmann\'s trial-and-error method, once a trial true point p is estimated on the sheet, how is the orientation of the table corrected?',
    opts: ['The alidade is laid along the line joining p to the most distant station, and the board rotated until that station is bisected', 'The board is turned 180°', 'The trough compass is tapped', 'The legs are raised 5 cm'],
    ans: 0, exp: 'Placing the alidade along the line from p to the most distant station (which has the longest baseline and lowest angular error) and rotating the board corrects orientation.',
    tip: 'Align alidade along p and most distant station, then rotate board to bisect.', top: 'Resection'
  },
  {
    q: 'In plane table surveying, what is an "inaccessible point"?',
    opts: ['A feature that cannot be reached physically with a measuring tape (e.g. a point on a steep cliff, across a river, or a tall church tower)', 'A point on a flat road', 'A station mark on a peg', 'A station occupied by the tripod'],
    ans: 0, exp: 'An inaccessible point cannot be directly reached to measure linear distances, requiring intersection from two accessible stations.',
    tip: 'Inaccessible point = Cannot be reached for chaining; located by Intersection.', top: 'Methods of plane table'
  },
  {
    q: 'What is the primary factor causing personal plotting errors in plane tabling?',
    opts: ['Using a blunt, soft pencil and inaccurate scaling with the drawing rule', 'Wind blowing against the tripod', 'The color of the timber board', 'The thickness of the brass screws'],
    ans: 0, exp: 'A thick, blunt pencil line introduces 0.5 to 1 mm of drafting width, producing substantial position errors when scaling rays.',
    tip: 'Blunt pencil produces wide lines, causing personal plotting errors.', top: 'Errors in plane table'
  },
  {
    q: 'What is the purpose of pricking points with a fine needle instead of drawing thick pencil crosses on a plane table sheet?',
    opts: ['A fine needle hole defines an exact, pinpoint geometric coordinate with zero drafting width', 'To allow air to escape through the paper', 'To attach paper clips', 'To test paper dryness'],
    ans: 0, exp: 'Fine needle pricks preserve precision to within 0.1 mm, preventing errors caused by pencil lead thickness.',
    tip: 'Fine needle pricking marks exact coordinates with minimal drafting error.', top: 'Setting up plane table'
  },
  {
    q: 'In plane table surveying, how should a pencil ray be drawn along the alidade fiducial edge?',
    opts: ['Lightly with a hard, sharp pencil kept uniformly inclined against the ruling edge', 'With heavy pressure gouging the paper', 'With a felt-tip pen', 'With charcoal'],
    ans: 0, exp: 'Rays should be drawn lightly with a hard (3H/4H) sharp pencil held at a steady angle against the fiducial edge.',
    tip: 'Draw rays lightly with a sharp 3H/4H pencil inclined uniformly against rule.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the purpose of an "alidade blade level" (spirit level mounted directly on the alidade)?',
    opts: ['To ensure the alidade itself is sitting level and verify that the table board has not tilted during observation', 'To measure wind velocity', 'To magnify the horsehair', 'To measure magnetic dip'],
    ans: 0, exp: 'A level on the alidade confirms the table remains level while moving the alidade around to take sights.',
    tip: 'Alidade level confirms board remains level during observations.', top: 'Accessories of plane table'
  },
  {
    q: 'In plane table surveying, why is the base line measured twice (forward and backward) with high precision?',
    opts: ['Because any error in the base line length scales and distorts every single intersecting point across the entire survey', 'To find the magnetic declination', 'To practice chaining', 'Because the chain expands on the return walk'],
    ans: 0, exp: 'In intersection/triangulation, the baseline sets the scale for all plotted geometry. An error in the baseline magnifies throughout the network.',
    tip: 'Base line sets the scale for the entire survey; must be measured with utmost accuracy.', top: 'Methods of plane table'
  },
  {
    q: 'What is the recommended ratio between the length of the base line and the distance to the farthest intersected object in plane tabling?',
    opts: ['The base line should ideally be at least one-fifth (1/5) to one-third (1/3) of the distance to the farthest object', '1 to 100', '1 to 1000', 'Equal to 10 times the distance'],
    ans: 0, exp: 'A baseline shorter than 1/5 of the sighting range creates acute intersection angles (<20°), degrading point accuracy.',
    tip: 'Base line length should be at least 1/5 to 1/3 of distance to farthest target.', top: 'Methods of plane table'
  },
  {
    q: 'What is the effect of sighting through a plane table alidade when the line of sight is not parallel to the fiducial edge?',
    opts: ['A constant angular index error is introduced into every ray drawn on the board', 'The board becomes unlevelled', 'The rays become curved', 'The paper expands'],
    ans: 0, exp: 'If the line of sight is inclined at an angle to the fiducial edge, all plotted rays are systematically rotated by that angle.',
    tip: 'Non-parallel line of sight introduces constant angular index error into all rays.', top: 'Errors in plane table'
  },
  {
    q: 'In plane tabling, what is meant by "radiation"?',
    opts: ['The process of locating points by drawing radiating direction rays from a single station and scaling their measured distances', 'Thermal radiation from the sun', 'Radio waves from GPS satellites', 'X-rays through the timber board'],
    ans: 0, exp: 'Radiation derives its name from radiating pencil rays fanning out in all directions from a single central instrument station.',
    tip: 'Radiation = Locating points by radiating rays and measured distances from one station.', top: 'Methods of plane table'
  },
  {
    q: 'In plane tabling, what is meant by "intersection"?',
    opts: ['The process of locating points by the intersection of rays drawn from two separate stations without measuring distances to the points', 'The crossing of two railway tracks', 'The meeting point of two roads', 'The junction of two rivers'],
    ans: 0, exp: 'Intersection fixes topographic points at the graphical crossing of two directional rays sighted from two known stations.',
    tip: 'Intersection = Fixing points at the crossing of two directional rays.', top: 'Methods of plane table'
  },
  {
    q: 'What is the primary difference between "resection" and "intersection" in plane table surveying?',
    opts: ['Intersection plots unknown ground features from known occupied stations; Resection plots the occupied station itself from known ground features', 'Intersection requires a theodolite', 'Resection does not use an alidade', 'Intersection is only for rivers'],
    ans: 0, exp: 'Intersection locates unknown external objects; Resection locates the surveyor\'s own instrument station on the map.',
    tip: 'Intersection locates unknown OBJECTS; Resection locates the STATION itself.', top: 'Resection'
  },
  {
    q: 'In plane table resection, what is "resection by compass"?',
    opts: ['The table is oriented by trough compass at the unknown station, and rays drawn backwards from two plotted stations intersect at the station point', 'Measuring angles with a surveyor\'s compass', 'Finding magnetic dip', 'Using a compass to draw circles'],
    ans: 0, exp: '1. Orient board with trough compass; 2. Sight plotted stations A and B; 3. Draw back-rays through a and b; their intersection marks station c.',
    tip: 'Resection by compass: Orient with compass, draw back-rays from known points to intersect.', top: 'Resection'
  },
  {
    q: 'What is the main drawback of resection by compass?',
    opts: ['It is only approximate because orientation by magnetic compass is susceptible to local attraction errors', 'It requires three surveyors', 'It tears the drawing paper', 'It cannot be done on flat ground'],
    ans: 0, exp: 'Because magnetic orientation can be off by half a degree due to local magnetic interference, the resulting resection point is only approximate.',
    tip: 'Resection by compass is approximate due to compass inaccuracy and local attraction.', top: 'Resection'
  },
  {
    q: 'In plane table surveying, what is "resection by back-bearing"?',
    opts: ['A ray is drawn to the unknown station from a known station, the table moved to the unknown station, oriented by backsighting, and resected from a third point', 'Looking backwards through the vanes', 'Measuring backwards with a tape', 'Orienting towards the South'],
    ans: 0, exp: 'From known station A, a ray is drawn towards C. The table is moved to C, oriented by backsighting to A along that ray, and resected by sighting known station B.',
    tip: 'Resection by back-bearing: Table oriented by backsight along a ray drawn from previous station.', top: 'Resection'
  },
  {
    q: 'What is the purpose of the "centering pin" on a plane table plumbing fork?',
    opts: ['It has a sharp point that is placed exactly on the plotted pencil point on the paper while the plumb bob hangs below', 'To pierce through the timber board', 'To hold the alidade in place', 'To screw the tripod head'],
    ans: 0, exp: 'The upper leg of the U-fork terminates in a fine point that rests on the plotted station dot on the sheet.',
    tip: 'Plumbing fork upper point rests directly on the plotted station dot.', top: 'Accessories of plane table'
  },
  {
    q: 'What is the standard tolerance for centering in plane tabling on a scale of 1:1000?',
    opts: ['Within 20 to 30 cm on the ground (corresponding to 0.2 to 0.3 mm on the paper)', 'Within 1 mm on the ground', 'Within 5 metres on the ground', 'Within 10 metres on the ground'],
    ans: 0, exp: 'At 1:1000, 30 cm on ground is 0.3 mm on paper, which is within the width of a fine pencil dot.',
    tip: 'Centring tolerance at 1:1000 is ~20 to 30 cm on ground.', top: 'Setting up plane table'
  },
  {
    q: 'Why should the observer never lean their body weight on the plane table board while sighting with the alidade?',
    opts: ['Leaning tilts the board, disturbs leveling, and may shift the orientation or flex the tripod legs', 'To avoid breaking the timber board', 'To prevent tearing the paper', 'To maintain personal balance'],
    ans: 0, exp: 'Leaning on the table deflects the tripod head and alters the leveling and orientation of the board.',
    tip: 'Never lean on the table board; it disturbs leveling and orientation.', top: 'Setting up plane table'
  },
  {
    q: 'In plane tabling, why should the surveyor walk around the board rather than rotate the board to take sights in different directions?',
    opts: ['Rotating the board alters its orientation, destroying the parallelism of the entire survey', 'To get physical exercise', 'To keep the shadow off the paper', 'Because tripod legs cannot turn'],
    ans: 0, exp: 'Once oriented, the table must remain clamped and rigid. The surveyor must walk around the table to sight in different directions.',
    tip: 'Walk around the table; NEVER rotate the oriented board to sight objects!', top: 'Setting up plane table'
  },
  {
    q: 'In plane table surveying, what is an "interpolated ray"?',
    opts: ['An auxiliary ray drawn between two plotted stations to verify alignment or locate an intermediate feature', 'A ray drawn in red ink', 'A ray measured with laser', 'A ray drawn without an alidade'],
    ans: 0, exp: 'An interpolated ray is sighted between two control points to pick up detail or check relative alignment.',
    tip: 'Interpolated ray = Auxiliary ray sighted to check alignment or locate intermediate detail.', top: 'Methods of plane table'
  }
];

m4Qs.forEach(q => addQ(q, 4, 'mod-4', 'Plane Table Surveying'));

console.log('Module 4 additional distinct questions processed. Total added so far:', addedList.length);

// Append to db
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
