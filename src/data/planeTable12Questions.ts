import { BankQuestion, MockTest } from '../types';

export const PLANE_TABLE_12_QUESTIONS: BankQuestion[] = [
  {
    id: 'bq-pt12-1',
    moduleId: 'mod-4',
    moduleNumber: 4,
    question: 'Orientation by ___ is the most accurate method of orientation and is always to preferred.',
    options: [
      'Backsight',
      'Trough compass',
      'Foresight',
      'both A and B'
    ],
    correctOptionIndex: 0,
    explanation: 'In plane table surveying, orientation by back-sighting (sighting along a previously drawn ray to a known preceding station) is the most accurate and reliable method because it is completely unaffected by local magnetic variations or metallic disturbances.',
    rankerTip: 'Orientation by backsighting is the most accurate method of orientation and is always preferred over magnetic orientation.',
    topic: 'Planetable Survey - Orientation Methods',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Planetable Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-pt12-2',
    moduleId: 'mod-4',
    moduleNumber: 4,
    question: 'Centering may be done by means of a.',
    options: [
      'Plumbing fork',
      'Plumb bob',
      'spirit level',
      'Trough compass'
    ],
    correctOptionIndex: 0,
    explanation: 'The plumbing fork (or U-fork/U-frame), fitted with a plumb bob on its bottom arm, is the specific surveying accessory used to transfer the plotted ground station mark directly onto the drawing sheet on the plane table.',
    rankerTip: 'Plumbing fork (U-frame) with plumb bob is specifically used for centering the plane table over the ground station.',
    topic: 'Planetable Survey - Accessories & Centering',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Planetable Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-pt12-3',
    moduleId: 'mod-4',
    moduleNumber: 4,
    question: 'The working edge of Alidade is known as',
    options: [
      'Plane edge',
      'Straight edge',
      'fiducial edge',
      'bevelled edge.'
    ],
    correctOptionIndex: 2,
    explanation: 'The beveled, graduated working edge of a plane table alidade along which rays/lines of sight are ruled on the paper is called the fiducial edge.',
    rankerTip: 'The ruling/working edge of an alidade is called the fiducial edge (beveled edge).',
    topic: 'Planetable Survey - Alidade',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Planetable Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-pt12-4',
    moduleId: 'mod-4',
    moduleNumber: 4,
    question: 'The fiducial edge should be coincident with or parallel to the',
    options: [
      'Vertical sight',
      'plane of sight',
      'inclined line of sight',
      'line of collimation'
    ],
    correctOptionIndex: 1,
    explanation: 'To prevent graphical plotting errors, the fiducial edge must be parallel to or lie within the vertical plane of sight formed by the alidade\'s sight vanes (eye vane and object vane).',
    rankerTip: 'The fiducial edge of an alidade must be coincident with or parallel to the vertical plane of sight.',
    topic: 'Planetable Survey - Alidade Adjustments',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Planetable Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-pt12-5',
    moduleId: 'mod-4',
    moduleNumber: 4,
    question: 'Which method is used for balancing the traverse when angular and linear measurements are equally precise',
    options: [
      'Transit rule',
      'prismatic rule',
      'traversing Rule',
      'Bowditch\'s rule'
    ],
    correctOptionIndex: 3,
    explanation: 'Bowditch\'s rule (compass rule) is applied to balance a closed traverse when linear and angular measurements have been carried out with equal precision. (The Transit rule is applied when angular measurements are more precise than linear measurements).',
    rankerTip: 'Equal precision in linear and angular measurements = Bowditch\'s rule. Angular more precise = Transit rule.',
    topic: 'Traverse Survey - Balancing Traverse',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Traverse & Planetable Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-pt12-6',
    moduleId: 'mod-4',
    moduleNumber: 4,
    question: 'Bowditch rule is sometimes called',
    options: [
      'Surveyors Rule',
      'transit rule',
      'Compass rule',
      'prismatic rule'
    ],
    correctOptionIndex: 2,
    explanation: 'Bowditch\'s rule is commonly known as the Compass rule because it was originally designed for traverses surveyed with a prismatic/surveyor\'s compass and chain.',
    rankerTip: 'Bowditch\'s rule is also known as the Compass rule.',
    topic: 'Traverse Survey - Balancing Traverse',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Traverse & Planetable Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-pt12-7',
    moduleId: 'mod-4',
    moduleNumber: 4,
    question: 'Orientation by magnetic needle is sufficiently accurate, provided if there is no ___',
    options: [
      'Local attraction',
      'declination',
      'dip',
      'variation'
    ],
    correctOptionIndex: 0,
    explanation: 'Orienting a plane table using a magnetic needle (trough compass) is only accurate if the station is completely free from local attraction (magnetic interference caused by power lines, iron pipes, steel structures, or magnetic mineral deposits).',
    rankerTip: 'Magnetic orientation fails or gives errors if local attraction is present in the vicinity.',
    topic: 'Planetable Survey - Orientation Methods',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Planetable Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-pt12-8',
    moduleId: 'mod-4',
    moduleNumber: 4,
    question: 'The first temporary adjustment to be done after setting up the plane table at any station will be',
    options: [
      'Centering',
      'Levelling',
      'Centering and levelling done simultaneously',
      'Orientation'
    ],
    correctOptionIndex: 1,
    explanation: 'The standard sequential order of operations in plane tabling is: Levelling → Centering → Orientation. Levelling is adjusted first so that subsequent horizontal adjustments do not tilt the board and disturb prior centering.',
    rankerTip: 'Strict sequence of operations: Levelling first, then Centering, then Orientation.',
    topic: 'Planetable Survey - Temporary Adjustments',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Planetable Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-pt12-9',
    moduleId: 'mod-4',
    moduleNumber: 4,
    question: 'In setting up a plane table at any station',
    options: [
      'Done centering first',
      'Levelling done first',
      'Centering and levelling both are done simultaneously',
      'None of these'
    ],
    correctOptionIndex: 2,
    explanation: 'In actual field practice and according to standard technical exam answer keys, centering and levelling of a plane table are interdependent operations performed simultaneously by adjusting and embedding the tripod legs into the ground.',
    rankerTip: 'In field practice, centering and levelling of the plane table are carried out simultaneously.',
    topic: 'Planetable Survey - Temporary Adjustments',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Planetable Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-pt12-10',
    moduleId: 'mod-4',
    moduleNumber: 4,
    question: '___ method is suitable for the survey of small areas which can be commanded from a single station',
    options: [
      'Radiation',
      'Intersection',
      'Graphical triangulation',
      'Resection'
    ],
    correctOptionIndex: 0,
    explanation: 'The Radiation method is ideal when the survey area is relatively small, unobstructed, and all ground details can be clearly observed and directly measured from a single central instrument setup.',
    rankerTip: 'Radiation method: Small area commanded from a single central station. Intersection: Inaccessible or large undulating areas.',
    topic: 'Planetable Survey - Methods of Plane Tabling',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Planetable Survey Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-pt12-11',
    moduleId: 'mod-4',
    moduleNumber: 4,
    question: 'Closing error of a traverse can be calculated by the formula ___, where ΣL is algebraic sum of latitude and ΣD is algebraic sum of departure',
    options: [
      'e = √((ΣD)² + (ΣL)²)',
      'e = √((ΣD)² − (ΣL)²)',
      'e = (ΣD + ΣL)',
      'e = (ΣD − ΣL)'
    ],
    correctOptionIndex: 0,
    explanation: 'In any closed traverse, the linear error of closure e is the hypotenuse formed by the total error in latitude (ΣL) and departure (ΣD): e = √((ΣL)² + (ΣD)²).',
    rankerTip: 'Closing error formula: e = √((ΣL)² + (ΣD)²). Direction of closing error: tan(θ) = (ΣD) / (ΣL).',
    topic: 'Traverse Survey - Closing Error',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Traverse & Planetable Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-pt12-12',
    moduleId: 'mod-4',
    moduleNumber: 4,
    question: 'If the WCB of a line is ___, the latitude of the line is positive',
    options: [
      '30°',
      '90°',
      '135°',
      '180°'
    ],
    correctOptionIndex: 0,
    explanation: 'Latitude is defined as L = l · cos(θ), where θ is the Whole Circle Bearing (WCB). Latitude represents projection along the North-South axis and is positive (Northing) only in Quadrant I (0° < θ < 90°) and Quadrant IV (270° < θ < 360°).\n\nFor θ = 30° (Quadrant I): cos(30°) > 0 ⇒ Latitude is positive.\nFor θ = 90°: cos(90°) = 0 ⇒ Latitude is zero.\nFor θ = 135° (Quadrant II) & 180°: cos(θ) < 0 ⇒ Latitude is negative (Southing).',
    rankerTip: 'Latitude = l · cos(θ) (Positive in NE and NW quadrants: 0°-90° & 270°-360°). Departure = l · sin(θ) (Positive in NE and SE quadrants: 0°-180°).',
    topic: 'Traverse Survey - Latitude and Departure',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Traverse & Planetable Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  }
];

export const MOCK_TEST_PLANE_TABLE_12: MockTest = {
  id: 'mock-planetbl-12',
  title: 'Planetable Survey & Traverse 12 MCQ High-Yield Master Practice Exam',
  category: 'Module Specific',
  description: 'Specialized 12-question Kerala PSC examination covering Planetable Surveying (Backsight orientation, Plumbing fork centering, Alidade fiducial edge alignment, Temporary adjustments sequence, Radiation method) and Traverse Balancing (Bowditch compass rule, Closing error formula, Latitude signs in WCB quadrants). Evaluated under official PSC pattern with -0.33 negative marking.',
  durationMinutes: 15,
  totalQuestions: 12,
  marksPerCorrect: 1,
  negativeMarksPerWrong: 0.33,
  totalMarks: 12,
  difficulty: 'PSC Standard (Advanced)',
  attemptsCount: 38,
  examCode: 'KPSC-MOD-04-PT-12',
  targetDepartment: 'Survey & Land Records / Kerala Water Authority',
  questions: PLANE_TABLE_12_QUESTIONS.map((q, idx) => ({
    id: q.id,
    questionNumber: idx + 1,
    question: q.question,
    options: q.options,
    correctOptionIndex: q.correctOptionIndex,
    explanation: q.explanation,
    rankerTip: q.rankerTip,
    topic: q.topic || 'Planetable Survey'
  }))
};
