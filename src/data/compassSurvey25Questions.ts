import { BankQuestion, MockTest } from '../types';

export const COMPASS_SURVEY_25_QUESTIONS: BankQuestion[] = [
  {
    id: 'bq-compass25-1',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'All revenue survey maps are plotted with reference to the.... meridian',
    options: [
      'Arbitrary Meridian',
      'True Meridian',
      'Magnetic Meridian',
      'All of these'
    ],
    correctOptionIndex: 1,
    explanation: 'True meridian lines remain constant and permanent over time (independent of magnetic declination variations). Therefore, government revenue survey maps and cadastral boundaries are invariably plotted with reference to the True Meridian.',
    rankerTip: 'Revenue survey maps and permanent cadastral boundaries are always plotted with reference to the True Meridian.',
    topic: 'Compass Survey - Meridians',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-2',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: '..... meridian through a given point is the line in which the plane passing through the given point and north and south poles intersects the surface of the earth.',
    options: [
      'Arbitrary meridian',
      'Magnetic meridian',
      'Plane meridian',
      'True or Geographical'
    ],
    correctOptionIndex: 3,
    explanation: 'By definition, the True (or Geographical) Meridian passing through a station is the line of intersection between the Earth\'s surface and the plane containing the station point and the geographic North and South poles.',
    rankerTip: 'Intersection of earth surface with the plane through station point and geographical poles = True or Geographical Meridian.',
    topic: 'Compass Survey - Meridians',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-3',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'True or geographical meridians through the various stations',
    options: [
      'Are parallel',
      'Converge to the poles',
      'Are perpendicular',
      'Converge as one line'
    ],
    correctOptionIndex: 1,
    explanation: 'Because the Earth is approximately spherical, true lines of longitude (true meridians) are not parallel; they converge from their maximum spacing at the equator to meet at the geographic poles.',
    rankerTip: 'True meridians converge towards the poles and are widest at the equator.',
    topic: 'Compass Survey - Meridians',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-4',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'True meridians converge at a point called.....',
    options: [
      'Latitude',
      'Altitude',
      'Departure',
      'Pole'
    ],
    correctOptionIndex: 3,
    explanation: 'All geographical (true) meridians converge and intersect at the Earth\'s Poles (North Pole and South Pole).',
    rankerTip: 'Convergence point of all true meridians is the geographic Pole.',
    topic: 'Compass Survey - Meridians',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-5',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'A freely floating needle slightly gets inclined to the horizontal anywhere except on the equator, it is called',
    options: [
      'Declination',
      'Bearing',
      'Magnetic bearing',
      'Dip'
    ],
    correctOptionIndex: 3,
    explanation: 'The vertical angle of inclination that a freely suspended magnetic needle makes with the horizontal plane is called the magnetic dip (or angle of dip). Dip is 0° at the magnetic equator and increases to 90° at the magnetic poles.',
    rankerTip: 'Dip is 0° at the magnetic equator and 90° at the magnetic poles. Declination is horizontal angle; Dip is vertical angle.',
    topic: 'Compass Survey - Magnetic Dip',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-6',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'If the fore bearing of a line is S 40° W, the back bearing equals',
    options: [
      'N 40° W',
      'S 40° E',
      'N 40° E',
      'None of these'
    ],
    correctOptionIndex: 2,
    explanation: 'In the Quadrantal Bearing (Reduced Bearing) system, the Back Bearing (BB) has the exact same numerical angle as the Fore Bearing (FB), with the cardinal quadrant letters reversed: FB = S 40° W ⇒ BB = N 40° E.',
    rankerTip: 'For quadrantal bearings, change N ↔ S and E ↔ W without altering the numerical value.',
    topic: 'Compass Survey - Bearings Conversion',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-7',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'If the bearings of two lines AB and BC are S 45° E and S 45° E, the ∠ABC equals',
    options: [
      '180°',
      '90°',
      '120°',
      '170°'
    ],
    correctOptionIndex: 0,
    explanation: 'Bearing of ray BA (Back Bearing of AB) = N 45° W. Bearing of ray BC (Fore Bearing of BC) = S 45° E. Because rays BA and BC point in directly opposing directions along the same line, the interior angle ∠ABC = 180°.',
    rankerTip: 'Equal forward bearings mean line ABC is straight, hence ∠ABC = 180°.',
    topic: 'Compass Survey - Included Angles',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-8',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'If the true bearing of a line is 127° and declination is 2° W, the magnetic bearing equals',
    options: [
      '129°',
      '120°',
      '123°',
      '125°'
    ],
    correctOptionIndex: 0,
    explanation: 'True Bearing (TB) = Magnetic Bearing (MB) − Declination (W). 127° = MB − 2° ⇒ MB = 127° + 2° = 129°.',
    rankerTip: 'TB = MB ± Declination (+ for East, − for West). Therefore MB = TB + Declination(West).',
    topic: 'Compass Survey - Magnetic Declination',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-9',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'If the bearing of two lines AB and CB are S 45° E and N 45° W, the angle ABC equals',
    options: [
      '90°',
      '180°',
      '45°',
      'None of these'
    ],
    correctOptionIndex: 1,
    explanation: 'Back Bearing of AB (ray BA) = N 45° W. Bearing of ray BC (opposite to given ray CB = N 45° W) = S 45° E. Rays BA and BC form opposite directions along the straight line passing through B, so ∠ABC = 180°.',
    rankerTip: 'Notice given lines are AB and CB radiating at B. Ray BA = N 45° W, ray BC = S 45° E. Together they form a straight line (180°).',
    topic: 'Compass Survey - Included Angles',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-10',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'If bearing of OA = 20° and bearing of OB = 140°, then angle ∠AOB = …',
    options: [
      '120°',
      '180°',
      '160°',
      '100°'
    ],
    correctOptionIndex: 0,
    explanation: 'Since both lines radiate from the common vertex O: ∠AOB = Bearing(OB) − Bearing(OA) = 140° − 20° = 120°.',
    rankerTip: 'For two lines radiating from the same station in WCB, Included Angle = Greater Bearing − Smaller Bearing.',
    topic: 'Compass Survey - Included Angles',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-11',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'If bearing of AB = N 50° E and bearing of AC = N 40° W, then ∠BAC = …',
    options: [
      '90°',
      '270°',
      '180°',
      '10°'
    ],
    correctOptionIndex: 0,
    explanation: 'Both lines radiate from common station A: Ray AB is 50° east of North, Ray AC is 40° west of North. ∠BAC = 50° + 40° = 90°.',
    rankerTip: 'When lines radiate into adjacent NE and NW quadrants from the same station, angle = sum of angles from North.',
    topic: 'Compass Survey - Included Angles',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-12',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'If the whole circle bearing of a line is 210° 15\', its reduced bearing is',
    options: [
      'S 30° 15\' W',
      'N 30° 15\' W',
      'S 30° 15\' E',
      'None of these'
    ],
    correctOptionIndex: 0,
    explanation: 'A WCB of 210° 15\' lies in Quadrant III (South-West, between 180° and 270°): RB = WCB − 180° = 210° 15\' − 180° = S 30° 15\' W.',
    rankerTip: 'Quadrant III (180° to 270°): Reduced Bearing = S (WCB − 180°) W.',
    topic: 'Compass Survey - WCB to RB Conversion',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-13',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'If the whole circle bearing of a line is 120°, its reduced bearing is',
    options: [
      'N 60° E',
      'S 60° W',
      'S 60° E',
      'N 60° W'
    ],
    correctOptionIndex: 2,
    explanation: 'A WCB of 120° lies in Quadrant II (South-East, between 90° and 180°): RB = 180° − WCB = 180° − 120° = S 60° E.',
    rankerTip: 'Quadrant II (90° to 180°): Reduced Bearing = S (180° − WCB) E.',
    topic: 'Compass Survey - WCB to RB Conversion',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-14',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'If the whole circle bearing of a line is 180°, its reduced bearing is',
    options: [
      'North',
      'East',
      'South west',
      'South'
    ],
    correctOptionIndex: 3,
    explanation: 'A Whole Circle Bearing of 180° points due South along the meridian, so its quadrantal notation is simply South (or S 0°).',
    rankerTip: '0°/360° = North, 90° = East, 180° = South, 270° = West.',
    topic: 'Compass Survey - Cardinal Bearings',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-15',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'In prismatic compass, the 360° or 0° of the Graduation is marked at the ..... end of the graduated circle',
    options: [
      'South',
      'North',
      'North-South',
      'West'
    ],
    correctOptionIndex: 0,
    explanation: 'In a prismatic compass, the graduated aluminum ring is attached to the needle and remains fixed to the magnetic meridian while the compass box rotates. The observer reads the ring through a prism located at the South end of the box when sighting North, so the 0°/360° graduation is marked at the South end.',
    rankerTip: 'Prismatic compass: 0°/360° is at South, 90° at West, 180° at North, 270° at East (graduations are inverted).',
    topic: 'Compass Survey - Prismatic Compass',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-16',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'On the graduated ring of the prismatic compass 90° is marked at ......end of needle',
    options: [
      'East',
      'West',
      'South',
      'North'
    ],
    correctOptionIndex: 1,
    explanation: 'Graduations on a prismatic compass ring run clockwise from South (0°). Therefore: South = 0°/360°, West = 90°, North = 180°, East = 270°.',
    rankerTip: 'In Prismatic Compass, 90° is at the West end, NOT East.',
    topic: 'Compass Survey - Prismatic Compass',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-17',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'The angle which the line of force due to magnetic field at a point makes with the surface of the earth is known as',
    options: [
      'Bearing',
      'Magnetic bearing',
      'Declination',
      'Dip'
    ],
    correctOptionIndex: 3,
    explanation: 'The angle between the Earth\'s magnetic lines of force and the horizontal surface of the Earth at any given point is called the angle of dip (magnetic inclination).',
    rankerTip: 'Angle between magnetic lines of force and earth\'s horizontal surface = Dip (Magnetic Inclination).',
    topic: 'Compass Survey - Magnetic Dip',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-18',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'The bearing of a line in the direction of progress of survey is known as',
    options: [
      'Back bearing',
      'Fore bearing',
      'Reduced bearing',
      'Whole circle bearing'
    ],
    correctOptionIndex: 1,
    explanation: 'The bearing of a survey line taken in the forward direction along which the survey is advancing is termed the Fore bearing (FB).',
    rankerTip: 'Direction of progress = Fore Bearing (FB). Reverse direction = Back Bearing (BB).',
    topic: 'Compass Survey - Fore and Back Bearings',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-19',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'When the magnetic bearing of the sun at noon is 185° 20\', the magnetic declination will be',
    options: [
      '5° 20\' west',
      '174° 40\' west',
      '5° 20\' east',
      '5° east'
    ],
    correctOptionIndex: 0,
    explanation: 'At solar noon in the northern hemisphere, the Sun is on the true meridian due True South (TB = 180° 00\'): Declination = TB − MB = 180° 00\' − 185° 20\' = −5° 20\' ⇒ 5° 20\' West.',
    rankerTip: 'If MB at noon > 180°, declination is West. If MB at noon < 180°, declination is East.',
    topic: 'Compass Survey - Magnetic Declination',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-20',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'The reduced bearing of a line is N 87° W. Its whole circle bearing (WCB) is',
    options: [
      '87°',
      '273°',
      '267°',
      '180°'
    ],
    correctOptionIndex: 1,
    explanation: 'N 87° W lies in the fourth quadrant (North-West): WCB = 360° − RB = 360° − 87° = 273°.',
    rankerTip: 'Quadrant IV (NW): WCB = 360° − RB.',
    topic: 'Compass Survey - WCB to RB Conversion',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-21',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'The reduced bearing of a line whose whole circle bearing is 270° is',
    options: [
      'S 270° W or N 270° W',
      'S 90° E or N 90° W',
      'S 90° W or N 90° W',
      'None of these'
    ],
    correctOptionIndex: 2,
    explanation: 'WCB = 270° is due West. Measured from North, it is 90° to the west (N 90° W). Measured from South, it is 90° to the west (S 90° W). Both describe the same bearing line.',
    rankerTip: '270° represents pure West, expressible as N 90° W or S 90° W.',
    topic: 'Compass Survey - Cardinal Bearings',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-22',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'Fore bearing of a line AB is 154° and the back bearing is 334°, then local attraction at that place',
    options: [
      '180°',
      '360°',
      '0°',
      'None of these'
    ],
    correctOptionIndex: 2,
    explanation: '|Back Bearing − Fore Bearing| = 334° − 154° = 180°. Because the difference between FB and BB is exactly 180°, stations A and B are free from magnetic interference, meaning the local attraction is 0° (nil).',
    rankerTip: 'If |BB − FB| = 180°, both stations are unaffected by local attraction (0° error).',
    topic: 'Compass Survey - Local Attraction',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-23',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'If the quadrantal bearing of a line is N 69° 45\' E, its whole circle bearing is....',
    options: [
      '69° 45\'',
      '169° 45\'',
      '249° 45\'',
      'None of these'
    ],
    correctOptionIndex: 0,
    explanation: 'In the first quadrant (North-East), Whole Circle Bearing and Quadrantal Bearing are numerically identical: WCB = QB = 69° 45\'.',
    rankerTip: 'In NE quadrant (Quadrant I), WCB = QB.',
    topic: 'Compass Survey - WCB to RB Conversion',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-24',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'If the quadrantal bearing of a line is S 64° 10\' W, its whole circle bearing is.....',
    options: [
      '244° 10\'',
      '245°',
      '64° 10\'',
      '115° 50\''
    ],
    correctOptionIndex: 0,
    explanation: 'A bearing in the third quadrant (SW) has its WCB measured clockwise from North through South: WCB = 180° + QB = 180° + 64° 10\' = 244° 10\'.',
    rankerTip: 'SW quadrant (Quadrant III): WCB = 180° + QB.',
    topic: 'Compass Survey - WCB to RB Conversion',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-compass25-25',
    moduleId: 'mod-3',
    moduleNumber: 3,
    question: 'In surveyor\'s compass .... points are marked with letters N and S and ..... points are marked with letters E and W',
    options: [
      '0°, 90°',
      '90°, 0°',
      '0°, 180°',
      '0°, 360°'
    ],
    correctOptionIndex: 0,
    explanation: 'In a Surveyor\'s Compass, the ring is graduated into four 0° to 90° quadrants. The 0° points are marked at North (N) and South (S), and the 90° points are marked at East (E) and West (W).',
    rankerTip: 'Surveyor\'s Compass: 0° at N & S, 90° at E & W. Prismatic Compass: 0° at S, 90° at W, 180° at N, 270° at E.',
    topic: 'Compass Survey - Surveyor\'s Compass',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Compass Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  }
];

export const MOCK_TEST_COMPASS_25: MockTest = {
  id: 'mock-compass-25',
  title: 'Compass Survey 25 MCQ High-Yield Master Practice Exam',
  category: 'Module Specific',
  description: 'Specialized 25-question Kerala PSC examination covering True & Magnetic Meridians, Declination & Dip, Prismatic vs Surveyor Compass graduations, Fore & Back Bearing conversions, Included Angles, and Local Attraction calculations. Evaluated under official PSC pattern with -0.33 negative marking.',
  durationMinutes: 30,
  totalQuestions: 25,
  marksPerCorrect: 1,
  negativeMarksPerWrong: 0.33,
  totalMarks: 25,
  difficulty: 'PSC Standard (Advanced)',
  attemptsCount: 64,
  examCode: 'KPSC-MOD-03-COMPASS-25',
  targetDepartment: 'Survey & Land Records / Kerala Water Authority',
  questions: COMPASS_SURVEY_25_QUESTIONS.map((q, idx) => ({
    id: q.id,
    questionNumber: idx + 1,
    question: q.question,
    options: q.options,
    correctOptionIndex: q.correctOptionIndex,
    explanation: q.explanation,
    rankerTip: q.rankerTip,
    topic: q.topic || 'Compass Survey'
  }))
};
