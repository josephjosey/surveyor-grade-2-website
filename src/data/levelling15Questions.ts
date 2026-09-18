import { BankQuestion, MockTest } from '../types';

export const LEVELLING_15_QUESTIONS: BankQuestion[] = [
  {
    id: 'bq-levelling15-1',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'A curved surface which of every point is perpendicular to the direction of gravity at the points is called:',
    options: [
      'Level surface',
      'Horizontal surface',
      'Tangential surface',
      'Vertical surface'
    ],
    correctOptionIndex: 0,
    explanation: 'A level surface is defined as a curved surface on which every point is perpendicular (normal) to the direction of gravity (the plumb line) at that point. A still body of water undisturbed by tides or wind represents a level surface. A horizontal surface, in contrast, is tangential to a level surface at only one point.',
    rankerTip: 'Curved surface normal to plumb line at all points = Level surface. Plane tangential at one point = Horizontal surface.',
    topic: 'Levelling - Definitions & Terms',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-2',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'The surface parallel to the mean spheroidal surface of the earth:',
    options: [
      'Horizontal surface',
      'Level surface',
      'Straight surface',
      'None of these'
    ],
    correctOptionIndex: 1,
    explanation: 'By definition, every level surface is parallel/concentric to the mean spheroidal surface of the earth (represented by Mean Sea Level or the geoid).',
    rankerTip: 'Surface concentric/parallel to mean spheroidal surface of earth = Level surface.',
    topic: 'Levelling - Definitions & Terms',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-3',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'A line normal to the plumb line of all points is known as:',
    options: [
      'Level line',
      'Horizontal line',
      'Vertical line',
      'None of these'
    ],
    correctOptionIndex: 0,
    explanation: 'A level line is a line lying within a level surface and is normal to the plumb line at every point along its entire length. A horizontal line is tangential to the level line and perpendicular to the plumb line at only one specific point.',
    rankerTip: 'Line perpendicular to plumb line at ALL points = Level line. Perpendicular at ONLY ONE point = Horizontal line.',
    topic: 'Levelling - Definitions & Terms',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-4',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'When the points are apart, it may be necessary to set up the instrument several times. This type of levelling is known as:',
    options: [
      'Reciprocal levelling',
      'Fly levelling',
      'Profile levelling',
      'Cross sectioning'
    ],
    correctOptionIndex: 1,
    explanation: 'When two points are far apart and only their relative difference in elevation is required, the level is set up repeatedly at successive change points without taking intermediate sights. This rapid form of differential levelling is called Fly levelling (frequently used to connect a benchmark to a starting station or to check closure at the end of a day\'s work).',
    rankerTip: 'Fly levelling: rapid differential levelling taking only BS and FS to determine elevation difference between far-apart points.',
    topic: 'Levelling - Types of Levelling',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-5',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'Correction for curvature for a distance of 1 km is:',
    options: [
      '0.07849 m',
      '0.07958 m',
      '785 m',
      'None of these'
    ],
    correctOptionIndex: 0,
    explanation: 'The curvature correction (Cc) formula is: Cc = d² / (2R) ≈ 0.07849 d² metres (with d in km). For d = 1 km: Cc = 0.07849 × (1)² = 0.07849 m (always subtractive from staff readings).',
    rankerTip: 'Curvature correction = 0.07849 d² m (subtractive). For 1 km, Cc = 0.07849 m.',
    topic: 'Levelling - Curvature & Refraction',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-6',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'In levelling, correction for refraction is:',
    options: [
      '0.01121 d² m',
      '0.0785 d² m',
      '0.0673 d² m',
      '0.112 dm'
    ],
    correctOptionIndex: 0,
    explanation: 'Atmospheric refraction bends the line of sight downward towards the earth, making staff readings too small. The refraction correction (Cr) is additive and taken as roughly 1/7 of the curvature correction: Cr ≈ (1/7) Cc = (1/7) × 0.07849 d² ≈ 0.01121 d² m.',
    rankerTip: 'Refraction correction Cr = 0.01121 d² m = (1/7) Cc (additive).',
    topic: 'Levelling - Curvature & Refraction',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-7',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'The refraction correction for a distance of 1 km is:',
    options: [
      '0.01121 m',
      '1121 m',
      '11.21 m',
      '0.1121 m'
    ],
    correctOptionIndex: 0,
    explanation: 'Substituting d = 1 km into the refraction formula: Cr = 0.01121 × (1)² = 0.01121 m.',
    rankerTip: 'Refraction correction for 1 km is exactly 0.01121 m (additive).',
    topic: 'Levelling - Curvature & Refraction',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-8',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'The combined correction for refraction and earth\'s curvature in levelling observations is:',
    options: [
      '0.06728 d² m',
      '0.6728 d² m',
      '0.006728 d² m',
      '0.067 d² m'
    ],
    correctOptionIndex: 0,
    explanation: 'Combining curvature correction (subtractive) and refraction correction (additive): C = Cc − Cr = 0.07849 d² − 0.01121 d² = 0.06728 d² metres (subtractive).',
    rankerTip: 'Combined correction C = (6/7) × 0.07849 d² = 0.06728 d² m (always subtractive).',
    topic: 'Levelling - Curvature & Refraction',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-9',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'In levelling, the effect of refraction may be taken as.... of that due to curvature:',
    options: [
      'Seventh',
      'One-seventh',
      'One-twenty seventh',
      'One seventeenth'
    ],
    correctOptionIndex: 1,
    explanation: 'Under standard atmospheric conditions, light rays curve with a radius roughly seven times that of the earth\'s surface (R0 ≈ 7R). Therefore, refraction correction is approximately 1/7 (one-seventh) of the curvature correction.',
    rankerTip: 'Refraction effect is 1/7th of curvature effect. Combined effect is 6/7th of curvature effect.',
    topic: 'Levelling - Curvature & Refraction',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-10',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'It is required to find the difference in elevation between two points A and B. During levelling, it is found that staff reading of B is more than the staff reading at A. It indicates that the point A is....the point B:',
    options: [
      'Higher than',
      'Lower than',
      'Same level of',
      'None of these'
    ],
    correctOptionIndex: 0,
    explanation: 'Since the line of collimation is horizontal, staff readings are measured vertically down to the ground. A smaller staff reading indicates that the ground surface is closer to the line of sight (higher elevation). Reading at B > Reading at A ⇒ Elevation of A > Elevation of B. Thus, point A is higher than point B.',
    rankerTip: 'Higher staff reading = Lower ground elevation. Smaller staff reading = Higher ground elevation.',
    topic: 'Levelling - Staff Readings & RL',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-11',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'The collimation method for obtaining the reduced levels of points does not provide check on:',
    options: [
      'Back sight',
      'Fore sight',
      'Inverted sight',
      'Intermediate sights'
    ],
    correctOptionIndex: 3,
    explanation: 'The arithmetic check in the Collimation (Height of Instrument) method is: ΣBS − ΣFS = Last RL − First RL. This formula provides no mathematical check on the intermediate sight (IS) readings or their reduced levels. In contrast, the Rise and Fall method checks intermediate sights via ΣRise − ΣFall = Last RL − First RL.',
    rankerTip: 'HI / Collimation method provides NO arithmetic check on Intermediate Sights (IS). Rise & Fall method checks ALL sights (BS, FS, and IS).',
    topic: 'Levelling - Reduction of Levels',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-12',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'Permanent adjustments are carried out to:',
    options: [
      'Establish a fixed relationships between its fundamental axes',
      'Establish temporary relationships between its fundamental axes',
      'Establish variable relationships between its fundamental axes',
      'None of these'
    ],
    correctOptionIndex: 0,
    explanation: 'Permanent adjustments are made to set up and preserve fixed geometric relationships between the fundamental axes of the instrument (e.g., line of collimation parallel to bubble tube axis, vertical axis perpendicular to bubble axis) so they remain true across multiple setups.',
    rankerTip: 'Permanent adjustments = Establish fixed geometric relationships between fundamental lines/axes.',
    topic: 'Levelling - Adjustments',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-13',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'Sensitiveness of a level tube is designated by of the level tube:',
    options: [
      'Length',
      'Volume',
      'Radius of curvature',
      'None of the above'
    ],
    correctOptionIndex: 2,
    explanation: 'The sensitiveness of a level tube is designated by the radius of curvature (R) of the upper internal surface of the vial, or by the angle subtended by an arc of one division (α = d/R). The larger the radius of curvature, the more sensitive the bubble tube.',
    rankerTip: 'Sensitiveness is directly designated by the internal Radius of Curvature (R) of the bubble tube.',
    topic: 'Levelling - Bubble Tube Sensitivity',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-14',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'In profile levelling, the staff readings of two neighbourhood pegs 20m apart are 1.200 and 1.000 respectively. Therefore the proposed road had a:',
    options: [
      'Falling gradient of 1 in 100',
      'Rising gradient of 1 in 100',
      'Falling gradient of 1 in 20',
      'Rising gradient of 1 in 20'
    ],
    correctOptionIndex: 1,
    explanation: 'Staff reading at 1st peg = 1.200 m, at 2nd peg = 1.000 m. Difference in height = 1.200 − 1.000 = +0.200 m (reading decreases in forward direction, so ground is rising). Gradient = Rise / Distance = 0.200 / 20 = 1 / 100. Hence, Rising gradient of 1 in 100.',
    rankerTip: 'Reading drops from 1.200 to 1.000 => Rise = 0.2 m in 20 m => 0.2/20 = 1/100 Rising Gradient.',
    topic: 'Levelling - Gradient & Profile Levelling',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  },
  {
    id: 'bq-levelling15-15',
    moduleId: 'mod-5',
    moduleNumber: 5,
    question: 'The reduced level of a floor is 100.000, the staff reading on the floor is 1.500. From the same station the inverted staff reading taken on the bottom of roof slab is 1.800. The bottom level of roof slab is:',
    options: [
      '99.700',
      '100.000',
      '103.300',
      'None of the above'
    ],
    correctOptionIndex: 2,
    explanation: 'Height of Instrument (HI) = RL of floor + Staff reading on floor = 100.000 + 1.500 = 101.500 m. For an inverted staff held against the underside of the slab: RL of bottom of roof slab = HI + Inverted staff reading = 101.500 + 1.800 = 103.300 m (Total = 100.000 + 1.500 + 1.800 = 103.300 m).',
    rankerTip: 'Under-roof / Inverted staff RL = RL of floor + Floor reading + Inverted staff reading = 100.000 + 1.500 + 1.800 = 103.300 m.',
    topic: 'Levelling - Inverted Staff Readings',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Levelling Bank',
    year: 2024,
    createdAt: '2026-09-19T00:00:00Z'
  }
];

export const MOCK_TEST_LEVELLING_15: MockTest = {
  id: 'mock-levelling-15',
  title: 'Levelling Survey 15 MCQ High-Yield Master Practice Exam',
  category: 'Module Specific',
  description: 'Specialized 15-question Kerala PSC examination covering Level surfaces & Level lines, Fly levelling, Curvature & Refraction corrections (0.07849d², 0.01121d², combined 0.06728d²), Collimation method limitations, Permanent adjustments, Bubble tube sensitivity, Road gradient calculation, and Inverted staff computations. Evaluated under official PSC pattern with -0.33 negative marking.',
  durationMinutes: 20,
  totalQuestions: 15,
  marksPerCorrect: 1,
  negativeMarksPerWrong: 0.33,
  totalMarks: 15,
  difficulty: 'PSC Standard (Advanced)',
  attemptsCount: 45,
  examCode: 'KPSC-MOD-05-LEVELLING-15',
  targetDepartment: 'Survey & Land Records / Kerala Water Authority',
  questions: LEVELLING_15_QUESTIONS.map((q, idx) => ({
    id: q.id,
    questionNumber: idx + 1,
    question: q.question,
    options: q.options,
    correctOptionIndex: q.correctOptionIndex,
    explanation: q.explanation,
    rankerTip: q.rankerTip,
    topic: q.topic || 'Levelling Survey'
  }))
};
