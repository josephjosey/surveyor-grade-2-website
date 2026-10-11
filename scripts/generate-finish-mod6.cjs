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

console.log('Existing unique masks before Mod 6:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-fin-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-b${c++}`;
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
    createdAt: '2026-10-11T16:00:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 85 DISTINCT QUESTIONS FOR MODULE 6 (Theodolite, Tacheometry, Curves)
const m6Questions = [
  {
    q: 'Which component of a transit theodolite carries the lower clamping screw and the lower tangent screw?',
    opts: ['Lower plate (main scale plate)', 'Upper plate (vernier plate)', 'Levelling head (tribrach)', 'Telescope trunnion axis'],
    ans: 0,
    exp: 'The lower plate carries the main circular scale graduated from 0 to 360 degrees and is fixed or rotated via the lower clamp and lower tangent screw.',
    tip: 'Lower plate = main graduated scale, lower clamp/tangent. Upper plate = verniers, upper clamp/tangent.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'If the bubble of the plate level of a theodolite remains central during a complete 360 degree rotation of the instrument, what condition is confirmed?',
    opts: ['The vertical axis is truly vertical', 'The line of collimation is horizontal', 'The trunnion axis is perpendicular to vertical axis', 'The optical plummet is aligned'],
    ans: 0,
    exp: 'When the plate levels stay centered for all positions around the circle, the vertical axis of rotation is confirmed to be truly vertical.',
    tip: 'Centering of plate bubble throughout 360° rotation proves the vertical axis is truly vertical.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What is the purpose of the optical plummet provided in modern theodolites?',
    opts: ['Centering the theodolite precisely over the ground station mark without using a plumb bob', 'Measuring vertical zenith angles', 'Eliminating optical parallax', 'Focussing distant targets'],
    ans: 0,
    exp: 'An optical plummet directs the line of sight vertically downward through the vertical axis to center the instrument accurately over a ground peg even in windy weather.',
    tip: 'Optical plummet replaces the plumb bob for precise instrument centering.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'Which error in theodolite observations is eliminated by taking the mean of Face Left and Face Right observations?',
    opts: ['Horizontal collimation error and horizontal axis non-perpendicularity error', 'Error due to non-verticality of vertical axis', 'Error due to slip in clamp screws', 'Defective tripod settlement'],
    ans: 0,
    exp: 'Face Left and Face Right reversal eliminates index error of vertical circle, horizontal collimation error, and error due to trunnion axis inclination.',
    tip: 'Double centering / Face reversal eliminates collimation and horizontal axis inclination errors.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'Why cannot the error due to non-verticality of the vertical axis of a theodolite be eliminated by Face Left and Face Right observations?',
    opts: ['Because the vertical axis remains in the same tilted position in space regardless of telescope reversal', 'Because vernier readings cancel it out', 'Because the telescope is inverting', 'Because tangent screws compensate it automatically'],
    ans: 0,
    exp: 'If the vertical axis is not vertical, reversing the face rotates the telescope about the same tilted axis; hence the tilt error cannot be canceled out by averaging.',
    tip: 'Non-verticality of vertical axis cannot be eliminated by face reversal; only careful releveling cures it.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In the repetition method of measuring horizontal angles with a theodolite, what is the main advantage over single measurement?',
    opts: ['Personal graduation reading errors are reduced and vernier reading errors are divided by the number of repetitions', 'Instrument setup time is halved', 'Traverse closing error is made zero', 'Chainage measurement is not needed'],
    ans: 0,
    exp: 'In repetition, the angle is added continuously on the graduated limb, and the final reading is divided by n, reducing reading errors to 1/n of the single vernier least count.',
    tip: 'Repetition divides graduation and reading error by n.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'Which method of horizontal angle measurement with a theodolite is particularly preferred when several angles are to be measured from a single central station to surrounding stations?',
    opts: ['Reiteration method (method of directions)', 'Repetition method', 'Deflection angle method', 'Chain and tape method'],
    ans: 0,
    exp: 'The reiteration method measures successive directions around the horizon from an initial reference station back to the reference station to close the horizon.',
    tip: 'Reiteration (direction method) is ideal when measuring multiple angles from one central station.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In the reiteration method of measuring angles, what is the check called when the telescope is finally sighted back on the starting station?',
    opts: ['Closing the horizon', 'Balancing the traverse', 'Swing check', 'Index correction'],
    ans: 0,
    exp: 'Sighting back to the initial reference station after sweeping around all stations is called closing the horizon; the reading should match the initial reading (360° or 0°).',
    tip: 'Closing the horizon is the closure check in reiteration method.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What is the deflection angle in a theodolite traverse?',
    opts: ['The angle which a survey line makes with the prolongation of the preceding survey line', 'The angle between the magnetic meridian and true meridian', 'The angle between two adjacent traverse lines measured clockwise', 'The vertical zenith angle'],
    ans: 0,
    exp: 'A deflection angle is the angle through which a forward line deviates to the right (clockwise) or left (counterclockwise) from the extension of the preceding line.',
    tip: 'Deflection angle is measured from the prolongation of the previous line to the forward line.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In a closed traverse with N sides, what is the theoretical sum of the deflection angles if the traverse proceeds around a closed loop?',
    opts: ['360 degrees', '(2N - 4) x 90 degrees', '(2N + 4) x 90 degrees', '180 x N degrees'],
    ans: 0,
    exp: 'The algebraic sum of the deflection angles of a closed polygon traverse is always equal to 360 degrees (with right deflections taken positive and left taken negative).',
    tip: 'Algebraic sum of deflection angles in a closed polygon = 360°.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In traverse computations, what is the latitude of a line defined as?',
    opts: ['The orthographic projection of the line onto the north-south reference meridian', 'The orthographic projection of the line onto the east-west reference line', 'The distance from the instrument station to the origin', 'The bearing of the line measured clockwise from south'],
    ans: 0,
    exp: 'The latitude of a survey line is its projection along the north-south direction, computed as L = l * cos(bearing).',
    tip: 'Latitude = Northing/Southing = l cos θ. Departure = Easting/Westing = l sin θ.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In traverse computations, what is the departure of a line defined as?',
    opts: ['The orthographic projection of the line onto the east-west reference line perpendicular to the meridian', 'The projection of the line onto the north-south axis', 'The length of the closing line', 'The error of closure per unit perimeter'],
    ans: 0,
    exp: 'The departure of a survey line is its projection along the east-west axis perpendicular to the reference meridian, given by D = l * sin(bearing).',
    tip: 'Departure is the projection on the East-West axis (perpendicular to meridian).',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In which quadrant are both the latitude and departure of a survey line mathematically negative?',
    opts: ['Third quadrant (South-West)', 'First quadrant (North-East)', 'Second quadrant (South-East)', 'Fourth quadrant (North-West)'],
    ans: 0,
    exp: 'In the third quadrant (South-West), southing means negative latitude and westing means negative departure.',
    tip: 'Quadrant signs: NE (+,+), SE (-,+), SW (-,-), NW (+,-).',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In which quadrant is the latitude positive and the departure negative?',
    opts: ['Fourth quadrant (North-West)', 'First quadrant (North-East)', 'Second quadrant (South-East)', 'Third quadrant (South-West)'],
    ans: 0,
    exp: 'In the fourth quadrant (North-West), latitude is Northing (positive) and departure is Westing (negative).',
    tip: 'NW quadrant: Latitude is positive (+), Departure is negative (-).',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What is the condition for mathematical geometric closure of a closed traverse with respect to latitudes and departures?',
    opts: ['Sum of latitudes = 0 and sum of departures = 0', 'Sum of latitudes = sum of departures', 'Sum of latitudes > 0 and sum of departures < 0', 'Sum of latitudes + sum of departures = perimeter'],
    ans: 0,
    exp: 'For a perfectly closed traverse returning to the starting point, the algebraic sum of all latitudes must equal zero and the algebraic sum of all departures must equal zero.',
    tip: 'Closed traverse closure condition: ΣL = 0 and ΣD = 0.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'When the algebraic sums of latitudes (ΣL) and departures (ΣD) are not zero, how is the linear closing error (e) calculated?',
    opts: ['e = √((ΣL)^2 + (ΣD)^2)', 'e = ΣL + ΣD', 'e = ΣL - ΣD', 'e = √((ΣL) x (ΣD))'],
    ans: 0,
    exp: 'The linear error of closure is the hypotenuse of the right triangle formed by the residual latitude error and departure error: e = √((ΣL)^2 + (ΣD)^2).',
    tip: 'Linear closing error e = √((ΣL)² + (ΣD)²). Direction tan θ = (ΣD)/(ΣL).',
    top: 'Theodolite Surveying'
  },
  {
    q: 'According to Bowditch rule (compass rule), how is the correction in latitude of any traverse line distributed?',
    opts: ['Total latitude closing error x (length of that line / perimeter of traverse)', 'Total latitude closing error / number of stations', 'Total latitude closing error x (latitude of that line / sum of latitudes)', 'Equally to all lines regardless of length'],
    ans: 0,
    exp: 'Bowditch rule distributes errors proportionally to the length of each survey line: Correction in latitude = (Total ΣL) * (l / Σl).',
    tip: 'Bowditch: Correction proportional to length of line (l / P). Assumes linear and angular precision equal.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'On what basic assumption is Bowditch rule (compass rule) of traverse balancing formulated?',
    opts: ['Accidental errors in linear measurements are proportional to √l and in angular measurements are inversely proportional to √l', 'Angular measurements are much more precise than linear measurements', 'Linear measurements are error-free', 'Systematic errors dominate the traverse'],
    ans: 0,
    exp: 'Bowditch rule assumes linear errors vary as √l and angular errors vary as 1/√l, meaning linear and angular measurements have equal precision.',
    tip: 'Bowditch assumption: Linear errors ∝ √l, angular errors ∝ 1/√l (equal precision).',
    top: 'Theodolite Surveying'
  },
  {
    q: 'When angular measurements in a theodolite traverse are significantly more accurate than chain/tape linear measurements, which balancing rule is preferred?',
    opts: ['Transit rule', 'Bowditch rule', 'Simpson rule', 'Third coordinate rule'],
    ans: 0,
    exp: 'The Transit rule is applied when angular measurements are more precise than linear measurements; corrections are made proportional to the latitude/departure of the line.',
    tip: 'Transit rule: applied when angles are measured with greater precision than lengths.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'According to the Transit rule, what is the correction applied to the departure of a traverse line?',
    opts: ['Total departure closing error x (departure of that line / arithmetic sum of all departures)', 'Total departure closing error x (length of that line / perimeter)', 'Total departure closing error / number of lines', 'Total departure closing error x (latitude of that line / sum of latitudes)'],
    ans: 0,
    exp: 'Transit rule states: Correction to departure of a line = Total departure error * (departure of the line / sum of departures without sign).',
    tip: 'Transit rule correction = Total error * (Departure of line / Arithmetic sum of departures).',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In Gale traverse table, what are the consecutive coordinates of a station?',
    opts: ['The latitude and departure of the station with respect to the immediately preceding station', 'The coordinates of the station with respect to the common origin of the survey', 'The reduced levels of the station', 'The deflection angles of the station'],
    ans: 0,
    exp: 'Consecutive coordinates (dependent coordinates) are the latitude and departure of a station referred to the preceding station as origin.',
    tip: 'Consecutive coordinates = latitude & departure from previous station. Independent coordinates = total coordinates from common origin.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In Gale traverse table, what are independent coordinates (or total coordinates) of a station?',
    opts: ['The coordinates of the station calculated with respect to a single common origin for the entire survey', 'The latitude and departure of the line joining adjacent stations', 'The coordinates measured on an arbitrary local grid without bearing', 'The slope distances measured by EDM'],
    ans: 0,
    exp: 'Independent coordinates (or total coordinates) express the position of every station with respect to a single common rectangular coordinate origin.',
    tip: 'Total coordinates (independent coordinates) are referred to one common coordinate datum origin.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What is an anallatic lens in a tacheometer?',
    opts: ['An additional convex lens fitted between the objective and the eyepiece to make the additive constant zero', 'A concave lens placed in front of the objective to magnify distant objects', 'A special eyepiece prism for steep sightings', 'A filter lens to reduce glare'],
    ans: 0,
    exp: 'An anallatic lens (invented by Porro) is a convex lens placed between the objective and eyepiece that brings the optical center to the vertical axis, making c = (f + d) = 0.',
    tip: 'Anallatic lens makes additive constant (c = f + d) equal to ZERO.',
    top: 'Tacheometric Surveying'
  },
  {
    q: 'In an ordinary tacheometer without an anallatic lens, what is the typical value of the additive constant (c = f + d)?',
    opts: ['30 cm to 45 cm (0.3 m to 0.45 m)', 'Zero', '100 m', '10 cm to 15 cm'],
    ans: 0,
    exp: 'For an external focussing telescope without an anallatic lens, the additive constant (f + d) generally ranges between 30 cm and 45 cm (0.3 to 0.45 m). For internal focussing, it is 8 to 15 cm.',
    tip: 'Additive constant c without anallatic lens is typically 30 to 45 cm; with anallatic lens it is ZERO.',
    top: 'Tacheometric Surveying'
  },
  {
    q: 'What is the standard value of the multiplying constant (k = f / i) of a standard survey tacheometer?',
    opts: ['100', '50', '200', '1000'],
    ans: 0,
    exp: 'The multiplying constant k is the ratio of focal length (f) to stadia wire interval (i), designed by manufacturers to be exactly 100.',
    tip: 'Multiplying constant k = f / i = 100.',
    top: 'Tacheometric Surveying'
  },
  {
    q: 'When the line of sight of a tacheometer is horizontal and the staff is held vertical, what is the formula for horizontal distance D?',
    opts: ['D = k * s + c', 'D = k * s * cos θ + c', 'D = k * s * cos^2 θ + c * cos θ', 'D = (k / s) + c'],
    ans: 0,
    exp: 'For a horizontal line of sight, the horizontal distance D = k*s + c, where k is multiplying constant, s is staff intercept, and c is additive constant.',
    tip: 'Horizontal sight: D = k s + c. If anallatic, D = 100 s.',
    top: 'Tacheometric Surveying'
  },
  {
    q: 'When the line of sight of a tacheometer is inclined at an angle θ to the horizontal and the staff is held vertical, what is the horizontal distance D?',
    opts: ['D = k * s * cos^2 θ + c * cos θ', 'D = k * s * sin^2 θ + c * sin θ', 'D = k * s * cos θ + c', 'D = k * s * tan θ + c'],
    ans: 0,
    exp: 'When the staff is held vertical on an inclined sight, D = k * s * cos^2(θ) + c * cos(θ).',
    tip: 'Inclined sight with vertical staff: D = k s cos² θ + c cos θ.',
    top: 'Tacheometric Surveying'
  },
  {
    q: 'When the line of sight of a tacheometer is inclined at an angle θ and the staff is held vertical, what is the vertical component V?',
    opts: ['V = (1/2) * k * s * sin(2θ) + c * sin θ', 'V = k * s * cos^2 θ + c * sin θ', 'V = k * s * tan θ + c', 'V = k * s * sin^2 θ + c * cos θ'],
    ans: 0,
    exp: 'Vertical component V = k * s * sin θ * cos θ + c * sin θ = (1/2) * k * s * sin(2θ) + c * sin θ.',
    tip: 'Vertical component V = 0.5 k s sin(2θ) + c sin θ.',
    top: 'Tacheometric Surveying'
  },
  {
    q: 'In tacheometry, what is the staff intercept (s)?',
    opts: ['The difference between the upper stadia hair reading and the lower stadia hair reading on the staff', 'The reading of the central horizontal hair', 'The height of the instrument axis above the station peg', 'The total length of the levelling staff'],
    ans: 0,
    exp: 'The staff intercept s is the distance between the two outer stadia hairs as read on the graduated levelling staff (s = Upper reading - Lower reading).',
    tip: 'Staff intercept s = Upper stadia hair reading - Lower stadia hair reading.',
    top: 'Tacheometric Surveying'
  },
  {
    q: 'What is the subtense bar used for in surveying?',
    opts: ['Measuring horizontal distances by sighting a fixed-length horizontal bar and measuring the horizontal angle subtended at the instrument', 'Setting out right angles on the ground', 'Measuring vertical angles to mountain peaks', 'Finding the magnetic bearing of survey lines'],
    ans: 0,
    exp: 'A subtense bar has two targets set at a fixed distance (usually 2 or 3 meters) apart on an invar bar; measuring the horizontal angle subtended yields the horizontal distance directly without slope corrections.',
    tip: 'Subtense bar has fixed horizontal length; horizontal angle subtended gives distance directly.',
    top: 'Tacheometric Surveying'
  },
  {
    q: 'What major advantage does the subtense bar method have over stadia tacheometry?',
    opts: ['Atmospheric refraction affects both ends equally because sight lines are horizontal, eliminating vertical refraction errors', 'It requires no theodolite', 'It can measure distances up to 50 km in a single sight', 'It works without any targets'],
    ans: 0,
    exp: 'Since the subtense bar is mounted horizontally, the sight lines are in the horizontal plane, so vertical atmospheric refraction cancels out completely.',
    tip: 'Subtense bar is immune to vertical refraction errors because sights are in the horizontal plane.',
    top: 'Tacheometric Surveying'
  },
  {
    q: 'What is the tangential method of tacheometry?',
    opts: ['A method of measuring distance and elevation using an ordinary theodolite without stadia hairs by taking two vertical angles to two targets on a staff', 'Measuring angles using the lower tangent screw', 'Setting out circular curves using tangent offsets', 'Traversing along tangential boundaries'],
    ans: 0,
    exp: 'Tangential tacheometry uses a theodolite with ordinary crosshairs (no stadia lines). Two vertical angles are observed to two distinct vanes/targets on the staff.',
    tip: 'Tangential method uses an ordinary theodolite without stadia hairs; observes 2 vertical angles.',
    top: 'Tacheometric Surveying'
  },
  {
    q: 'In tangential tacheometry, if two vertical angles α1 and α2 are observed to targets on a staff separated by height s, and both angles are angles of elevation (α1 > α2), what is the horizontal distance D?',
    opts: ['D = s / (tan α1 - tan α2)', 'D = s / (tan α1 + tan α2)', 'D = s * (tan α1 - tan α2)', 'D = s / (sin α1 - sin α2)'],
    ans: 0,
    exp: 'When both sights are angles of elevation: h1 = D tan α1 and h2 = D tan α2. Then s = h1 - h2 = D(tan α1 - tan α2), so D = s / (tan α1 - tan α2).',
    tip: 'Both angles elevation: D = s / (tan α1 - tan α2). One elevation, one depression: D = s / (tan α1 + tan α2).',
    top: 'Tacheometric Surveying'
  },
  {
    q: 'In tangential tacheometry, if one angle is an angle of elevation (α1) and the other is an angle of depression (α2), what is the horizontal distance D?',
    opts: ['D = s / (tan α1 + tan α2)', 'D = s / (tan α1 - tan α2)', 'D = s * (tan α1 + tan α2)', 'D = (tan α1 + tan α2) / s'],
    ans: 0,
    exp: 'When one vane is above the horizontal line of sight and the other below: s = h1 + h2 = D(tan α1 + tan α2), therefore D = s / (tan α1 + tan α2).',
    tip: 'One elevation, one depression: D = s / (tan α1 + tan α2).',
    top: 'Tacheometric Surveying'
  },
  {
    q: 'In a simple circular curve, what is the relation between the intersection angle (I) and the deflection angle (Δ)?',
    opts: ['I + Δ = 180 degrees', 'I = Δ', 'I + Δ = 90 degrees', 'I - Δ = 180 degrees'],
    ans: 0,
    exp: 'The intersection angle I between the two straights and the deflection angle Δ through which the forward straight deflects satisfy I + Δ = 180° (I = 180° - Δ).',
    tip: 'Intersection angle I + Deflection angle Δ = 180°.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is the formula for the tangent length (T) of a simple circular curve of radius R and deflection angle Δ?',
    opts: ['T = R * tan(Δ / 2)', 'T = R * sin(Δ / 2)', 'T = R * cos(Δ / 2)', 'T = 2R * tan(Δ / 2)'],
    ans: 0,
    exp: 'From the tangent triangle formed by vertex and curve center, Tangent length T = R * tan(Δ / 2).',
    tip: 'Tangent length T = R tan(Δ/2).',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is the formula for the length of curve (L) of a circular curve of radius R and deflection angle Δ (in degrees)?',
    opts: ['L = (π * R * Δ) / 180', 'L = (π * R * Δ) / 360', 'L = (2 * π * R * Δ) / 90', 'L = R * Δ'],
    ans: 0,
    exp: 'Length of arc L = 2 * π * R * (Δ / 360°) = (π * R * Δ) / 180°.',
    tip: 'Curve length L = (π R Δ) / 180.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is the formula for the length of the long chord (C) of a circular curve of radius R and deflection angle Δ?',
    opts: ['C = 2 * R * sin(Δ / 2)', 'C = 2 * R * cos(Δ / 2)', 'C = R * sin(Δ / 2)', 'C = 2 * R * tan(Δ / 2)'],
    ans: 0,
    exp: 'The long chord connects the point of curvature (T1) and point of tangency (T2). Half the chord is R * sin(Δ/2), so long chord C = 2R * sin(Δ/2).',
    tip: 'Long chord C = 2R sin(Δ/2).',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is the formula for the apex distance (external distance, E) of a circular curve of radius R and deflection angle Δ?',
    opts: ['E = R * (sec(Δ / 2) - 1)', 'E = R * (1 - cos(Δ / 2))', 'E = R * (cosec(Δ / 2) - 1)', 'E = R * (tan(Δ / 2) - 1)'],
    ans: 0,
    exp: 'Apex distance is the distance from vertex V to the midpoint of the curve: E = R * sec(Δ/2) - R = R * (sec(Δ/2) - 1).',
    tip: 'Apex distance E = R [sec(Δ/2) - 1].',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is the formula for the mid-ordinate (versine of the curve, M) of a circular curve of radius R and deflection angle Δ?',
    opts: ['M = R * (1 - cos(Δ / 2))', 'M = R * (sec(Δ / 2) - 1)', 'M = R * (1 - sin(Δ / 2))', 'M = 2R * (1 - cos(Δ / 2))'],
    ans: 0,
    exp: 'The mid-ordinate M is the distance from the midpoint of the long chord to the apex of the curve: M = R - R * cos(Δ/2) = R * (1 - cos(Δ/2)).',
    tip: 'Mid-ordinate M = R [1 - cos(Δ/2)].',
    top: 'Curves & Setting Out'
  },
  {
    q: 'In terms of radius R and long chord C, what is the approximate expression for the mid-ordinate (M) of a flat curve?',
    opts: ['M ≈ C^2 / (8R)', 'M ≈ C^2 / (2R)', 'M ≈ C^2 / (4R)', 'M ≈ C / (8R)'],
    ans: 0,
    exp: 'By series expansion or Pythagorean approximation, the mid-ordinate of a flat circular curve is given by M = C^2 / (8R).',
    tip: 'Approximate mid-ordinate M = C² / (8R).',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is the relation between the radius R and the degree of curve D for a 30-meter chain / arc?',
    opts: ['R = 1718.9 / D (or 1719 / D)', 'R = 1145.9 / D', 'R = 572.9 / D', 'R = 3437.7 / D'],
    ans: 0,
    exp: 'For a 30m arc: Arc length = 30m = (π * R * D) / 180°, which gives R = (30 * 180) / (π * D) = 1718.87 / D ≈ 1719 / D.',
    tip: 'Degree of curve: R = 1719 / D for 30m chain; R = 1146 / D for 20m chain.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is the relation between the radius R and the degree of curve D for a 20-meter chain / arc?',
    opts: ['R = 1145.9 / D (or 1146 / D)', 'R = 1718.9 / D', 'R = 2291.8 / D', 'R = 859.4 / D'],
    ans: 0,
    exp: 'For a 20m arc: R = (20 * 180) / (π * D) = 1145.92 / D ≈ 1146 / D.',
    tip: 'For 20m chain: R = 1146 / D.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is the definition of the degree of curve (D) based on the chord definition?',
    opts: ['The angle subtended at the center of the curve by a standard chord of 20 m or 30 m length', 'The angle subtended by the full long chord', 'The total deflection angle of the curve', 'The angle subtended by a 100 m arc'],
    ans: 0,
    exp: 'Under the chord definition, the degree of curve D is the angle subtended at the center of the curve by a chord of standard length (20m or 30m).',
    tip: 'Degree of curve = angle subtended at center by a standard chord (20m or 30m).',
    top: 'Curves & Setting Out'
  },
  {
    q: 'In Rankine method of tangential angles (deflection angles) for setting out circular curves, what is the tangential angle δ for a sub-chord of length c (in minutes of arc)?',
    opts: ['δ = 1718.9 * (c / R) minutes', 'δ = 1145.9 * (c / R) minutes', 'δ = 572.9 * (c / R) minutes', 'δ = 3437.7 * (c / R) minutes'],
    ans: 0,
    exp: 'The tangential deflection angle δ in minutes is given by δ = (180 * 60 / 2π) * (c / R) = 1718.87 * (c / R) minutes.',
    tip: 'Rankine deflection angle δ = 1718.9 x (c / R) minutes.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'In Rankine method of setting out a circular curve, what is the total deflection angle (Δn) for any station n with respect to the initial tangent?',
    opts: ['The sum of all individual deflection angles up to that station (Δn = δ1 + δ2 + ... + δn)', 'The average of all deflection angles', 'Half of the first deflection angle', 'The total deflection angle of the entire curve'],
    ans: 0,
    exp: 'The total deflection angle for the nth peg from the point of curve is the algebraic sum of all preceding individual deflection angles: Δn = δ1 + δ2 + ... + δn.',
    tip: 'Total deflection angle for nth peg: Δn = Σδ.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'In Rankine method of curve setting, what is the final check on the total deflection angle to the Point of Tangency (T2)?',
    opts: ['The total deflection angle to T2 must be exactly equal to half the total deflection angle of the curve (Δ / 2)', 'It must equal the full deflection angle Δ', 'It must equal 90 degrees', 'It must equal 180 degrees minus Δ'],
    ans: 0,
    exp: 'The total angle subtended between the initial tangent and the long chord to T2 is mathematically equal to Δ / 2. This serves as the primary angular check.',
    tip: 'Final check in Rankine method: Total deflection angle to T2 = Δ / 2.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'Which curve setting method requires NO linear measurement with chain or tape on the curve and uses two theodolites set at T1 and T2?',
    opts: ['Two-theodolite method', 'Rankine deflection angle method', 'Offset from long chord method', 'Tacheometric method'],
    ans: 0,
    exp: 'In the two-theodolite method, one theodolite is set at T1 and another at T2. Sights are directed simultaneously according to computed deflection angles, locating pegs at the intersection of lines of sight without chaining.',
    tip: 'Two-theodolite method requires NO linear chain measurements on the ground; uses intersection of sights.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'When setting out a circular curve by offsets from the long chord, what is the offset (Ox) at a distance x from the midpoint of the long chord?',
    opts: ['Ox = √(R^2 - x^2) - (R - O0)', 'Ox = √(R^2 + x^2) - R', 'Ox = O0 - (x^2 / 2R)', 'Ox = √(R^2 - x^2) + O0'],
    ans: 0,
    exp: 'The exact formula for the offset from long chord at distance x from mid-point is Ox = √(R^2 - x^2) - (R - O0), where O0 is the mid-ordinate.',
    tip: 'Offset from long chord: Ox = √(R² - x²) - (R - O0). Approx: Ox ≈ O0 - x²/(2R).',
    top: 'Curves & Setting Out'
  },
  {
    q: 'In setting out a curve by offsets from chords produced, what is the offset for the first point (O1) from the initial tangent for a chord of length c1?',
    opts: ['O1 = c1^2 / (2R)', 'O1 = c1^2 / R', 'O1 = c1 / (2R)', 'O1 = c1^2 / (4R)'],
    ans: 0,
    exp: 'The first offset from the tangent is O1 = c1^2 / (2R). Subsequent intermediate offsets are On = cn * (cn-1 + cn) / (2R).',
    tip: 'First offset from tangent: O1 = c1² / (2R). Subsequent regular offset: O = c² / R.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'In setting out a curve by offsets from chords produced, if all chords have the same regular length c, what is each intermediate offset (On)?',
    opts: ['On = c^2 / R', 'On = c^2 / (2R)', 'On = c^2 / (4R)', 'On = 2 * c^2 / R'],
    ans: 0,
    exp: 'When successive chords are of equal regular length c, the intermediate offset is On = c * (c + c) / (2R) = c^2 / R.',
    tip: 'Regular chord offset: On = c² / R (twice the first offset from tangent).',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is a compound curve in surveying?',
    opts: ['A curve consisting of two or more circular arcs of different radii bending in the same direction with a common tangent at their junction', 'A curve consisting of two arcs bending in opposite directions', 'A curve combining a straight line and a parabola', 'A circular curve combined with an ellipse'],
    ans: 0,
    exp: 'A compound curve consists of two or more circular curves of different radii curving in the SAME direction with a common tangent at their point of compound curvature (PCC).',
    tip: 'Compound curve: different radii, bending in SAME direction, common tangent.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is a reverse curve (or serpentine curve)?',
    opts: ['A curve consisting of two circular arcs of equal or unequal radii bending in opposite directions with a common tangent at their junction', 'A curve where radius decreases continuously to zero', 'A curve that doubles back on itself by 180 degrees', 'A curve used exclusively in vertical profiles'],
    ans: 0,
    exp: 'A reverse curve consists of two circular arcs curving in OPPOSITE directions with a common tangent at their point of reverse curvature (PRC).',
    tip: 'Reverse curve: arcs bending in OPPOSITE directions with a common tangent (PRC).',
    top: 'Curves & Setting Out'
  },
  {
    q: 'Why are reverse curves strictly avoided on high-speed railway mainlines and expressways?',
    opts: ['Because the sudden reversal of cant (superelevation) and centrifugal force causes severe passenger discomfort and risk of derailment', 'Because they cannot be set out with a theodolite', 'Because they require too much land', 'Because earthwork excavation is doubled'],
    ans: 0,
    exp: 'At the point of reverse curvature, superelevation must transition instantaneously from one side to the other, causing sudden lateral jerk dangerous at high speeds.',
    tip: 'Reverse curves avoided on high speeds due to dangerous abrupt reversal of cant and centrifugal force.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is the primary function of a transition curve introduced between a straight tangent and a circular curve?',
    opts: ['To introduce centrifugal force and superelevation gradually, preventing sudden lateral shocks', 'To increase the speed beyond the design limit', 'To shorten the length of the road', 'To avoid constructing bridges'],
    ans: 0,
    exp: 'Transition curves provide a gradual increase in curvature (from 0 to 1/R) and a gradual rise of superelevation, ensuring smooth motion without sudden jerks.',
    tip: 'Transition curves introduce curvature (1/R) and superelevation gradually.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What ideal mathematical property defines the Euler spiral (clothoid) as a transition curve?',
    opts: ['Its radius of curvature is inversely proportional to its distance along the curve from the origin (l * r = constant)', 'Its radius of curvature is constant throughout', 'Its deflection angle is proportional to the square root of distance', 'Its slope is constant'],
    ans: 0,
    exp: 'In an ideal transition spiral (clothoid), the radius r at any point is inversely proportional to the distance l from the start: l * r = constant.',
    tip: 'Clothoid / Euler spiral: l x r = constant. Curvature increases linearly with length.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'Which transition curve shape is most commonly adopted on Indian railways and road highways?',
    opts: ['Cubic parabola or clothoid (spiral)', 'Lemniscate of Bernoulli', 'Hyperbolic curve', 'Catenary curve'],
    ans: 0,
    exp: 'The cubic parabola (for small deflection angles) and clothoid spiral are standard in railway and highway engineering.',
    tip: 'Cubic parabola and spiral are the standard transition curves adopted in practice.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is the formula for the shift (S) of a circular curve when a transition curve of length L is introduced for a curve of radius R?',
    opts: ['S = L^2 / (24R)', 'S = L^2 / (6R)', 'S = L / (24R)', 'S = L^2 / (12R)'],
    ans: 0,
    exp: 'To accommodate a transition curve of length L, the circular arc is shifted inward by an amount S = L^2 / (24R).',
    tip: 'Shift of circular curve S = L² / (24R).',
    top: 'Curves & Setting Out'
  },
  {
    q: 'At what point does the shift (S) bisect the transition curve?',
    opts: ['At the midpoint of the transition curve (L / 2)', 'At the beginning of the transition curve', 'At the junction with the circular curve', 'At one-third of the transition length'],
    ans: 0,
    exp: 'The shifted circular curve passes through a point where the transition curve is bisected by the shift at distance L / 2.',
    tip: 'The shift S bisects the transition curve at its midpoint (L / 2).',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is the formula for the length of a transition curve (L) based on the permissible rate of change of radial acceleration (c)?',
    opts: ['L = v^3 / (c * R)', 'L = v^2 / (c * R)', 'L = v^3 / (2 * c * R)', 'L = (c * R) / v^3'],
    ans: 0,
    exp: 'From kinematics, the rate of change of centrifugal acceleration is a/t = (v^2/R)/(L/v) = v^3 / (LR) = c, giving L = v^3 / (c * R).',
    tip: 'Transition length by rate of radial acceleration: L = v³ / (c R). Permissible c = 0.3 to 0.75 m/s³.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What type of curve is provided at the intersection of two different gradients on a highway or railway?',
    opts: ['Vertical curve (parabolic curve)', 'Horizontal circular curve', 'Reverse transition curve', 'Lemniscate curve'],
    ans: 0,
    exp: 'Vertical curves are provided at grade changes to smooth out vertical profile transitions. A parabola is preferred for vertical curves due to its constant rate of change of grade.',
    tip: 'Vertical curves are parabolic to maintain a constant rate of change of grade.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is a summit curve (crest curve) in highway engineering?',
    opts: ['A vertical curve with convexity upwards, formed when an ascending gradient meets a descending gradient', 'A vertical curve with concavity upwards', 'A curve at the highest mountain pass with zero gradient', 'A curve designed for drainage only'],
    ans: 0,
    exp: 'A summit curve has its convexity upwards (e.g., +g1 meets -g2). The primary design criterion is providing adequate Stopping Sight Distance (SSD).',
    tip: 'Summit curve: convexity upwards (+g1 meets -g2). Governed by Stopping Sight Distance.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'What is a valley curve (sag curve) in highway engineering?',
    opts: ['A vertical curve with convexity downwards (concavity upwards), formed when a descending gradient meets an ascending gradient', 'A curve located inside an underground tunnel', 'A horizontal curve in a river valley', 'A curve with zero drainage slope'],
    ans: 0,
    exp: 'A valley curve has convexity downwards (e.g., -g1 meets +g2). Primary design criteria are headlight sight distance at night and passenger comfort.',
    tip: 'Valley curve: concavity upwards. Governed by headlight sight distance and comfort.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'Why is a simple parabola preferred over a circle for vertical curves on highways?',
    opts: ['Because a parabola has a constant rate of change of grade, providing uniform vertical acceleration and easiest field computation', 'Because a parabola has shorter length than a circle', 'Because a parabola requires no sight distance', 'Because circular curves cannot be vertical'],
    ans: 0,
    exp: 'The second derivative d²y/dx² of a parabola y = kx² is constant, which means the rate of change of grade is perfectly constant throughout the curve.',
    tip: 'Parabola has constant rate of change of grade (uniform vertical acceleration).',
    top: 'Curves & Setting Out'
  },
  {
    q: 'In theodolite surveying, what is meant by "centering" the instrument?',
    opts: ['Placing the vertical axis of the theodolite exactly vertically over the station mark on the ground', 'Aligning the line of sight with true north', 'Bringing the plate bubble to the center of its run', 'Focusing the objective on the crosshairs'],
    ans: 0,
    exp: 'Centering is the operation of bringing the vertical axis of the theodolite exactly over the center of the station peg using a plumb bob or optical plummet.',
    tip: 'Centering = placing the vertical axis exactly over the ground station mark.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What is the operation of rotating the telescope of a theodolite about its horizontal axis in a vertical plane through 180 degrees called?',
    opts: ['Transiting (or plunging or reversing)', 'Swinging', 'Centering', 'Levelling'],
    ans: 0,
    exp: 'Transiting (plunging) is the process of rotating the telescope through 180 degrees about its horizontal (trunnion) axis in the vertical plane.',
    tip: 'Transiting / plunging = rotating telescope 180° about horizontal axis.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What is the operation of rotating the telescope of a theodolite about its vertical axis in a horizontal plane called?',
    opts: ['Swinging', 'Transiting', 'Plunging', 'Focusing'],
    ans: 0,
    exp: 'Swinging is rotating the theodolite telescope about its vertical axis in the horizontal plane. A clockwise rotation is called a right swing.',
    tip: 'Swinging = rotating telescope in a horizontal plane about vertical axis.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What does "Face Left" observation mean in theodolite surveying?',
    opts: ['The vertical circle of the instrument is to the left of the observer while sighting', 'The observer is standing to the left of the tripod', 'The horizontal angle is measured towards the left', 'The telescope is transited to the left'],
    ans: 0,
    exp: 'Face Left (or circle left) means the vertical graduated circle is situated to the left hand of the observer sighting through the telescope.',
    tip: 'Face Left: vertical circle is on the observer\'s left hand side.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What does "Face Right" observation mean in theodolite surveying?',
    opts: ['The vertical circle of the instrument is to the right of the observer while sighting', 'The telescope points towards the right quadrant', 'The horizontal clamp is tightened on the right', 'The observer turns clockwise'],
    ans: 0,
    exp: 'Face Right (or circle right) means the vertical graduated circle is situated to the right hand of the observer.',
    tip: 'Face Right: vertical circle is on the observer\'s right hand side.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'How does an observer change from Face Left to Face Right with a theodolite?',
    opts: ['Transit the telescope through 180 degrees and then swing it horizontally through 180 degrees', 'Loosen the tripod legs and rotate the entire stand', 'Unscrew the telescope and turn it upside down', 'Rotate the vernier plate only by 90 degrees'],
    ans: 0,
    exp: 'To change face, transit (plunge) the telescope through 180° in the vertical plane, then swing the instrument 180° horizontally.',
    tip: 'Change face: Transit telescope 180° + Swing horizontally 180°.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What is the index error of the vertical circle in a theodolite?',
    opts: ['The vertical circle vernier does not read exactly zero when the line of collimation is truly horizontal', 'The horizontal scale reads 180 degrees instead of zero', 'The bubble tube is cracked', 'The eyepiece cannot be focused'],
    ans: 0,
    exp: 'Index error is the residual reading on the vertical circle when the telescope bubble is leveled and the line of sight is horizontal. It is eliminated by taking the mean of Face Left and Face Right.',
    tip: 'Index error = non-zero reading on vertical circle when line of sight is horizontal.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In a theodolite, the trunnion axis is another name for which axis?',
    opts: ['Horizontal axis', 'Vertical axis', 'Line of collimation', 'Bubble tube axis'],
    ans: 0,
    exp: 'The horizontal axis on which the telescope rotates vertically is called the trunnion axis.',
    tip: 'Trunnion axis = Horizontal axis of the theodolite.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What is the line of collimation in a surveying telescope?',
    opts: ['The imaginary line passing through the intersection of the crosshairs and the optical center of the objective lens', 'The physical axis of the brass telescope barrel', 'The line passing through the eyepiece and the eye of observer', 'The line parallel to the bubble tube'],
    ans: 0,
    exp: 'The line of collimation is the line joining the intersection of crosshairs with the optical center of the objective and its continuation into space.',
    tip: 'Line of collimation = Line joining crosshairs intersection and optical center of objective.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What is the line of sight in a surveying telescope?',
    opts: ['The line passing through the intersection of crosshairs and optical center of objective, without necessarily being horizontal', 'A line that is always strictly horizontal', 'The line along the top of the telescope barrel', 'The line connecting both plate levels'],
    ans: 0,
    exp: 'The line of sight is the straight line passing through the crosshairs intersection and optical center of the objective. When horizontal, it is called the line of collimation.',
    tip: 'Line of sight = ray from crosshairs through optical center of objective.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In permanent adjustment of a theodolite, what is the Spire test used to check and adjust?',
    opts: ['Perpendicularity of the horizontal axis to the vertical axis', 'Perpendicularity of plate bubble to vertical axis', 'Collimation in azimuth', 'Index error of vertical circle'],
    ans: 0,
    exp: 'The Spire test (sighting a high point like a church spire with Face Left and Face Right and depressing to ground marks) checks if the horizontal axis is perpendicular to the vertical axis.',
    tip: 'Spire test: checks horizontal axis is perpendicular to vertical axis.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What is the condition verified in the plate level test of a theodolite?',
    opts: ['The axes of the plate levels must be perpendicular to the vertical axis', 'The line of collimation must be parallel to the vertical axis', 'The trunnion axis must be parallel to the horizontal plate', 'The crosshairs must be vertical'],
    ans: 0,
    exp: 'The plate level test ensures that the longitudinal axis of each plate level tube is perpendicular to the vertical axis of the theodolite.',
    tip: 'Plate level test: Plate level axes perpendicular to vertical axis.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In theodolite traversing, what are included angles?',
    opts: ['The interior or exterior angles between two survey lines measured clockwise from the back station to the forward station', 'The angles between the magnetic needle and the traverse line', 'The vertical angles measured to tops of pegs', 'The angles between traverse lines and true North'],
    ans: 0,
    exp: 'Included angles are measured directly between adjacent traverse lines, conventionally measured clockwise from the back station to the forward station.',
    tip: 'Included angles are measured clockwise from back station to forward station.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In a closed traverse running clockwise, the measured interior angles must sum to which theoretical value?',
    opts: ['(2N - 4) x 90 degrees', '(2N + 4) x 90 degrees', '360 degrees', 'N x 180 degrees'],
    ans: 0,
    exp: 'For an N-sided closed polygon, the sum of all interior angles is always (2N - 4) * 90° or (N - 2) * 180°.',
    tip: 'Sum of interior angles = (2N - 4) x 90° = (N - 2) x 180°.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'In a closed polygon traverse running clockwise, what is the theoretical sum of the exterior angles?',
    opts: ['(2N + 4) x 90 degrees', '(2N - 4) x 90 degrees', '360 degrees', '(N - 2) x 180 degrees'],
    ans: 0,
    exp: 'For an N-sided polygon, the sum of all exterior angles is always (2N + 4) * 90° or (N + 2) * 180°.',
    tip: 'Sum of exterior angles = (2N + 4) x 90° = (N + 2) x 180°.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What is an open traverse suitable for in surveying?',
    opts: ['Long linear surveys such as roads, railways, highways, pipelines, and canal routes', 'Surveying city commercial plots with boundary walls', 'Measuring the area of an agricultural farm', 'Setting out rectangular building foundations'],
    ans: 0,
    exp: 'An open traverse extends continuously without returning to its start point or closing onto a known station, used for routes of roads, railways, canals, and pipelines.',
    tip: 'Open traverse: used for linear engineering projects (roads, railways, canals).',
    top: 'Theodolite Surveying'
  },
  {
    q: 'How can an open traverse be checked for accuracy in the field when it cannot close back onto itself?',
    opts: ['By taking bearings to prominent distant control points (cut-off lines or tie lines) or ending at a known trigonometrical station', 'By measuring each line twice with the same tape', 'By adding all interior angles', 'By assuming latitudes sum to zero'],
    ans: 0,
    exp: 'Checks on open traverses include sighting prominent reference marks from multiple stations (cut-off lines) or connecting to existing geodetic control points (connecting traverse).',
    tip: 'Open traverse checks: Cut-off lines, tie lines, or connecting to known geodetic stations.',
    top: 'Theodolite Surveying'
  },
  {
    q: 'What is the formula for the radius R of a circular curve if its degree of curve is D degrees based on a 100-foot chord?',
    opts: ['R = 5729.6 / D feet', 'R = 1718.9 / D feet', 'R = 1145.9 / D feet', 'R = 3437.7 / D feet'],
    ans: 0,
    exp: 'For a 100-foot chord: R = (100 * 180) / (π * D) = 5729.58 / D feet.',
    tip: 'For 100-ft chord: R = 5730 / D feet.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'In curve geometry, what is the point of curvature (PC or T1)?',
    opts: ['The beginning point of the curve where the alignment transitions from the straight tangent into the circular arc', 'The point where two tangents intersect', 'The end point of the circular curve', 'The center of the circular curve'],
    ans: 0,
    exp: 'Point of Curvature (PC or T1) is the point of commencement where the alignment changes from the rear straight tangent to the circular arc.',
    tip: 'Point of Curvature (PC / T1) = starting point of curve.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'In curve geometry, what is the point of tangency (PT or T2)?',
    opts: ['The end point of the circular curve where it rejoins the forward straight tangent', 'The intersection of the two tangents', 'The midpoint of the circular curve', 'The center of radius'],
    ans: 0,
    exp: 'Point of Tangency (PT or T2) is the termination point where the circular arc ends and merges into the forward tangent.',
    tip: 'Point of Tangency (PT / T2) = ending point of curve.',
    top: 'Curves & Setting Out'
  },
  {
    q: 'If the chainage of the intersection point (V) is known, how is the chainage of the Point of Curvature (T1) calculated?',
    opts: ['Chainage of T1 = Chainage of V - Tangent length (T)', 'Chainage of T1 = Chainage of V + Tangent length (T)', 'Chainage of T1 = Chainage of V - Length of curve (L)', 'Chainage of T1 = Chainage of V / 2'],
    ans: 0,
    exp: 'Since T1 lies on the rear tangent before the vertex V at a distance equal to tangent length T, Chainage of T1 = Chainage of V - T.',
    tip: 'Chainage of T1 = Chainage of V - Tangent length (T).',
    top: 'Curves & Setting Out'
  },
  {
    q: 'How is the chainage of the Point of Tangency (T2) correctly calculated?',
    opts: ['Chainage of T2 = Chainage of T1 + Length of curve (L)', 'Chainage of T2 = Chainage of V + Tangent length (T)', 'Chainage of T2 = Chainage of V + Length of curve (L)', 'Chainage of T2 = Chainage of T1 + Tangent length (T)'],
    ans: 0,
    exp: 'Chainage is measured along the actual traveled curve path: Chainage of T2 = Chainage of T1 + Curve length (L). Note: Never add T to V to find T2!',
    tip: 'Chainage of T2 = Chainage of T1 + Curve length L (NOT Chainage of V + T).',
    top: 'Curves & Setting Out'
  }
];

m6Questions.forEach(q => addQ(q, 6, 'mod-6', 'Theodolite & Curves'));

console.log('Module 6 processed. Added:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
