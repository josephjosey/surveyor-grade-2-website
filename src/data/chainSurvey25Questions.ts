import { BankQuestion, MockTest } from '../types';

export const CHAIN_SURVEY_25_QUESTIONS: BankQuestion[] = [
  {
    id: 'bq-chain25-1',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'While measuring a line between two stations A and B intervened by a raised ground:',
    options: [
      'Vision gets obstructed.',
      'Chaining gets obstructed',
      'Vision and chaining both get obstructed',
      'All of the above.'
    ],
    correctOptionIndex: 0,
    explanation: 'The hill/raised ground obstructs line of sight/ranging, but chaining can still be carried out directly over the ground by stepping.',
    rankerTip: 'Kerala PSC Rule: Obstacle to ranging only (hill/raised ground), obstacle to chaining only (pond/river), obstacle to both (building).',
    topic: 'Chain Survey - Obstacles in Chaining',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-2',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'Prolongation of a chain line across an obstruction in chain surveying, is done by:',
    options: [
      'Making angular measurements.',
      'Solution of triangles',
      'Drawing perpendiculars with a chain',
      'All of the above.'
    ],
    correctOptionIndex: 2,
    explanation: 'Prolongation of a chain line across an obstruction is done by setting out perpendiculars with a chain using the 3:4:5 method or Pythagoras theorem.',
    rankerTip: 'In chain surveying, angular instruments are not used; all geometry is executed with chains or tapes.',
    topic: 'Chain Survey - Obstacles & Prolongation',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-3',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'In chain surveying a tie line is primarily provided:',
    options: [
      'To check the accuracy of the survey',
      'To take offsets for detail survey',
      'To avoid long offsets from chain lines',
      'To increase the number of chain lines.'
    ],
    correctOptionIndex: 2,
    explanation: 'Tie lines are primarily provided to avoid long offsets from main chain lines and to locate interior topographic details accurately.',
    rankerTip: 'Check lines check accuracy; tie lines avoid long offsets and capture interior details.',
    topic: 'Chain Survey - Survey Lines & Tie Lines',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-4',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'In chain surveying fieldwork is limited to:',
    options: [
      'Linear measurements only',
      'Angular measurements only',
      'Linear and Angular measurements',
      'All of the above.'
    ],
    correctOptionIndex: 0,
    explanation: 'In chain surveying, fieldwork is strictly confined to linear measurements directly on the ground using chains or tapes without angular measurements.',
    rankerTip: 'Whenever angles are measured, it ceases to be chain surveying (becomes compass or theodolite survey).',
    topic: 'Chain Survey - Principles & Fieldwork',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-5',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'Check lines in chain surveying are essentially required:',
    options: [
      'To plot the chain lines',
      'To plot the offsets',
      'To indicate the correctness of the survey work',
      'To increase the turnout.'
    ],
    correctOptionIndex: 2,
    explanation: 'Check lines (also called proof lines) run from the apex of a triangle to verify accuracy and correctness of the framework and plotting.',
    rankerTip: 'Proof line = Check line. A survey framework is not complete or accepted without check lines.',
    topic: 'Chain Survey - Check Lines',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-6',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'A well-conditioned triangle does not have any angle less than:',
    options: [
      '20°',
      '30°',
      '45°',
      '60°'
    ],
    correctOptionIndex: 1,
    explanation: 'A well-conditioned triangle should not have any angle less than 30° nor greater than 120° to avoid errors during intersection plotting.',
    rankerTip: 'Angles must lie strictly between 30° and 120°. Ideal triangle is equilateral (60° each).',
    topic: 'Chain Survey - Triangulation & Triangles',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-7',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'The accuracy of measurement in chain surveying does not depend upon:',
    options: [
      'Length of the offset',
      'Scale of the plotting',
      'Importance of the features',
      'General layout of the chain lines.'
    ],
    correctOptionIndex: 2,
    explanation: 'The physical accuracy of measurement depends on instrumental limits, offset lengths, plotting scale, and layout of lines, rather than the intrinsic importance of the feature.',
    rankerTip: 'Importance dictates how many details are surveyed, but not the physical mechanics of linear accuracy.',
    topic: 'Chain Survey - Offsets & Accuracy',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-8',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'The limiting length of an offset does not depend upon:',
    options: [
      'Accuracy of the work',
      'Scale of the plotting',
      'Method of setting out perpendiculars',
      'Indefinite features to be surveyed.'
    ],
    correctOptionIndex: 3,
    explanation: 'The limiting length of an offset is governed by the scale of plotting, permissible drawing error (0.25 mm), accuracy desired, and method of laying perpendiculars.',
    rankerTip: 'Limiting offset formula: L = 0.025 × Scale / sin α.',
    topic: 'Chain Survey - Limiting Length of Offsets',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-9',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'Chain Surveying is well adopted for:',
    options: [
      'Small areas in open ground',
      'Large areas with simple details',
      'Small areas with crowded details',
      'Large areas with difficult details.'
    ],
    correctOptionIndex: 0,
    explanation: 'Chain surveying is ideally suited for small areas in open ground with simple features. It is unsuitable for large, heavily undulating, or crowded areas.',
    rankerTip: 'Best for small, fairly flat, and open terrain.',
    topic: 'Chain Survey - Suitability & Scope',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-10',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'The angle between two plane mirrors of an optical square, is:',
    options: [
      '20°',
      '30°',
      '45°',
      '60°'
    ],
    correctOptionIndex: 2,
    explanation: 'In an optical square, the index glass and horizon glass are set at an angle of 45° to each other so that the ray of light is deflected through double that angle (2 × 45° = 90°).',
    rankerTip: 'Angle between mirrors = 45°. Deflection angle = 90° (Double reflection principle).',
    topic: 'Chain Survey - Optical Square',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-11',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'Angles of 45° with a chain line may be set out with:',
    options: [
      'Optical Square',
      'Open cross staff',
      'French Cross staff',
      'Prismatic Square'
    ],
    correctOptionIndex: 2,
    explanation: 'A French cross-staff is an octagonal brass box with vertical slits on all eight sides, allowing angles of both 45° and 90° to be set out from a chain line.',
    rankerTip: 'Open cross staff = 90° only. French cross staff = 45° and 90°. Adjustable cross staff = any angle.',
    topic: 'Chain Survey - Cross Staff & Angle Setting',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-12',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'For taking offsets with an optical square on the right hand side of the chain line, it is held:',
    options: [
      'By right hand upside down',
      'By right hand upright',
      'By left hand upside down',
      'By left hand upright'
    ],
    correctOptionIndex: 3,
    explanation: 'To sight an object on the right-hand side of the chain line while looking forward along the chain line, the optical square is held in the left hand in an upright position.',
    rankerTip: 'Object on right: held in left hand upright. Object on left: held in right hand upside down.',
    topic: 'Chain Survey - Optical Square Usage',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-13',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'If the chain line which runs along N-S direction is horizontal and ground in E-W direction is sloping:',
    options: [
      'It is not possible to set offsets correctly on both sides.',
      'It is not possible to set offsets correctly on each sides.',
      'It is not possible to set offsets correctly on west sides.',
      'It is possible to set offsets correctly on both sides.'
    ],
    correctOptionIndex: 3,
    explanation: 'Offsets can be set perpendicular to the horizontal chain line regardless of transverse slope by holding the tape horizontally and plumbing down to ground.',
    rankerTip: 'Transverse ground slope does not prevent true perpendicular offset measurement when stepped or plumbed.',
    topic: 'Chain Survey - Offsets on Sloping Ground',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-14',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'Perpendicularity of an offset may be judged by eye if the length of the offset is:',
    options: [
      '5 m',
      '10 m',
      '15 m',
      '20 m'
    ],
    correctOptionIndex: 2,
    explanation: 'For short offsets up to 15 m, perpendicularity can reasonably be judged by eye without causing noticeable plotting distortion at standard drawing scales.',
    rankerTip: 'Up to 15 m = eye judgement permitted. Beyond 15 m = instrument (optical square / cross staff) required.',
    topic: 'Chain Survey - Offsets by Eye',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-15',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'The construction of optical square is based on the principle of optical:',
    options: [
      'Reflection',
      'Refraction',
      'Double refraction',
      'Double reflection.'
    ],
    correctOptionIndex: 3,
    explanation: 'An optical square operates on the principle of double reflection: the angle between the first incident ray and the second reflected ray is twice the angle between the reflecting surfaces (2 × 45° = 90°).',
    rankerTip: 'Double reflection is the hallmark principle of optical squares and sextants.',
    topic: 'Chain Survey - Optical Square Principle',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-16',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'In which country the chain survey is suitable:',
    options: [
      'Wooded',
      'Flat',
      'Hilly',
      'None of the above.'
    ],
    correctOptionIndex: 1,
    explanation: 'Chain surveying is suitable for open, flat country where chaining is easy, line of sight is clear, and stepping is minimized.',
    rankerTip: 'Open flat ground = optimal for chain survey. Wooded/hilly = compass or theodolite needed.',
    topic: 'Chain Survey - Ground Conditions',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-17',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'A triangle having all the three angles approximately equal is known as triangle:',
    options: [
      'Well conditioned',
      'Bad conditioned',
      'Best conditioned',
      'None of the above.'
    ],
    correctOptionIndex: 2,
    explanation: 'An equilateral triangle having all three angles approximately equal to 60° gives the sharpest, most accurate intersection and is termed the best-conditioned triangle.',
    rankerTip: 'All angles ~60° = Best-conditioned triangle. Any angle <30° or >120° = Ill-conditioned triangle.',
    topic: 'Chain Survey - Best Conditioned Triangle',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-18',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'The preliminary inspection of the area to be surveyed is known as:',
    options: [
      'Reconnaissance',
      'Land survey',
      'Cadastral survey',
      'None of the above.'
    ],
    correctOptionIndex: 0,
    explanation: 'Reconnaissance is the walkover preliminary inspection of the terrain to select intervisible stations, decide the layout of survey lines, and identify obstacles.',
    rankerTip: 'Reconnaissance is always the very first step in any surveying operation.',
    topic: 'Chain Survey - Reconnaissance',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-19',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'Instrument used for accurate measurement of distances:',
    options: [
      'Chains',
      'Metallic tapes',
      'Invar tapes',
      'None of the above.'
    ],
    correctOptionIndex: 2,
    explanation: 'Invar tapes (made of 64% steel and 36% nickel) have an extraordinarily low coefficient of thermal expansion (0.00000012/°C) and are used for base line and highest-precision measurements.',
    rankerTip: 'Invar composition: 64% Steel, 36% Nickel. Least affected by temperature.',
    topic: 'Chain Survey - Measuring Instruments & Invar',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-20',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'The principle of chain surveying is to divide the area into:',
    options: [
      'Rectangles',
      'Triangles',
      'Squares',
      'None of the above.'
    ],
    correctOptionIndex: 1,
    explanation: 'The principle of chain surveying is triangulation — dividing the tract into a framework of connected triangles, because a triangle can be plotted accurately from side lengths alone.',
    rankerTip: 'Triangulation is the bedrock principle of chain survey. No angles needed.',
    topic: 'Chain Survey - Principle of Triangulation',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-21',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'An offset rod is provided at its top with a:',
    options: [
      'Hook',
      'Flag',
      'Metal shoe',
      'None of the above.'
    ],
    correctOptionIndex: 0,
    explanation: 'An offset rod has a pointed metal shoe at the bottom and a hook or notch at the top to facilitate pulling or threading the chain through hedges and bushes.',
    rankerTip: 'Bottom = metal shoe. Top = hook/notch.',
    topic: 'Chain Survey - Offset Rod Construction',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-22',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'Which is used for setting out right angles?',
    options: [
      'Line ranger',
      'Optical square',
      'Prism square',
      'None of the above.'
    ],
    correctOptionIndex: 1,
    explanation: 'The optical square (and cross staff) is specifically designed and used for setting out right angles (90° offsets) to a survey line. A line ranger is used for fixing intermediate points on a straight line.',
    rankerTip: 'Right angles = Optical square / Cross staff. Intermediate ranging = Line ranger.',
    topic: 'Chain Survey - Right Angle Setting',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-23',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'Which is used for taking short offsets?',
    options: [
      'Ranging Rod',
      'Offset Rod',
      'Both',
      'None of the above.'
    ],
    correctOptionIndex: 2,
    explanation: 'Both ranging rods and offset rods (graduated with alternate black/white bands) are used for aligning and taking short offsets in chain surveying.',
    rankerTip: 'Both rods have alternate 20 cm bands that assist in quick rough offset measurements.',
    topic: 'Chain Survey - Offset Equipment',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-24',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'Which is the most important line in a survey work?',
    options: [
      'Base Line',
      'Check Line',
      'Tie Line',
      'None of the above.'
    ],
    correctOptionIndex: 0,
    explanation: 'The Base Line is the longest and most critical survey line running centrally across the area upon which the entire framework of the survey is structured.',
    rankerTip: 'Base line = most important line. Measured with maximum care and precision.',
    topic: 'Chain Survey - Base Line',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  },
  {
    id: 'bq-chain25-25',
    moduleId: 'mod-2',
    moduleNumber: 2,
    question: 'Which field book is convenient for large scale and detailed dimension work?',
    options: [
      'Single line',
      'Double line',
      'Both',
      'None of the above.'
    ],
    correctOptionIndex: 0,
    explanation: 'A single-line field book provides wider sketching space on either side of the single central red line, making it much more convenient for large-scale work where extensive dimensions and details must be entered.',
    rankerTip: 'Single line = large scale and detailed dimensions. Double line = ordinary engineering & cadastral surveys.',
    topic: 'Chain Survey - Field Book Types',
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Chain Survey Bank',
    year: 2024,
    createdAt: '2026-09-18T10:00:00Z'
  }
];

export const MOCK_TEST_CHAIN_SURVEY_25: MockTest = {
  id: 'mock-chain-survey-25',
  title: 'Chain Surveying 25 MCQ High-Yield Master Practice Exam',
  category: 'Module Specific',
  description: 'Authentic 25-question evaluation covering Chain Surveying: Obstacles to chaining & ranging, prolongation of chain lines, well-conditioned triangles, tie & check lines, limiting offset rules, optical square principles, cross staff, offset rods, field book styles, and invar tapes. Evaluated under official Kerala PSC pattern with -0.33 negative marking.',
  durationMinutes: 30,
  totalQuestions: 25,
  marksPerCorrect: 1,
  negativeMarksPerWrong: 0.33,
  totalMarks: 25,
  questions: CHAIN_SURVEY_25_QUESTIONS.map((q, idx) => ({
    id: q.id,
    questionNumber: idx + 1,
    question: q.question,
    options: q.options,
    correctOptionIndex: q.correctOptionIndex,
    explanation: q.explanation,
    rankerTip: q.rankerTip,
    topic: q.topic || 'Chain Surveying'
  })),
  difficulty: 'PSC Standard (Advanced)',
  attemptsCount: 38,
  examCode: 'KPSC-MOD-02-CHAIN-25',
  targetDepartment: 'Kerala Survey & Land Records'
};
