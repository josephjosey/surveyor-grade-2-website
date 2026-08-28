import { MockTest } from '../types';

export const MOCK_TEST_THEODOLITE_30: MockTest = {
  id: 'mock-theodolite-mcq-30',
  title: 'Theodolite MCQ',
  category: 'All-Kerala State Ranked Exam',
  description: 'Official Kerala PSC Ranked Mock Test covering 30 high-yield questions on Theodolite Surveying, components, permanent & temporary adjustments, angle measurement methods, and error eliminations. Evaluated with standard PSC negative marking (+1.00 / -0.33).',
  durationMinutes: 30,
  totalQuestions: 30,
  marksPerCorrect: 1,
  negativeMarksPerWrong: 0.33,
  totalMarks: 30,
  difficulty: 'PSC Standard (Advanced)',
  attemptsCount: 2,
  isRankedExam: true,
  isOneTimeOnly: true,
  examCode: 'KPSC-THEODOLITE-2026',
  targetDepartment: 'Survey & Land Records / Kerala Water Authority',
  questions: [
    {
      id: 'q-theo-1',
      questionNumber: 1,
      question: 'The upper plate of theodolite is fastened to:',
      options: [
        'trunnion axis',
        'outer spindle',
        'inner spindle',
        'lower plate'
      ],
      correctOptionIndex: 2,
      explanation: 'The upper/vernier plate is attached to the inner solid spindle, while the lower scale plate is attached to the outer hollow spindle.',
      rankerTip: 'Remember: Upper plate = Inner solid spindle; Lower plate = Outer hollow spindle.',
      topic: 'Theodolite Components & Construction'
    },
    {
      id: 'q-theo-2',
      questionNumber: 2,
      question: 'The process of turning the telescope over its horizontal axis through 180°, in a vertical plane in theodolite traversing is:',
      options: [
        'swinging',
        'changing face',
        'transiting',
        'centering'
      ],
      correctOptionIndex: 2,
      explanation: 'Transiting (also known as plunging or reversing) is the process of rotating the telescope through 180° in a vertical plane about its horizontal axis.',
      rankerTip: 'Rotation in vertical plane = Transiting / Plunging; Rotation in horizontal plane = Swinging.',
      topic: 'Theodolite Operations & Adjustments'
    },
    {
      id: 'q-theo-3',
      questionNumber: 3,
      question: 'In a theodolite the vertical vernier circle do not read zero when the line of sight is horizontal, then the vertical angle measured will be incorrect. This error is called:',
      options: [
        'Residual error',
        'angular error',
        'index error',
        'none of these'
      ],
      correctOptionIndex: 2,
      explanation: 'When the line of sight is truly horizontal and the vertical circle verniers do not read 0°0\'0", the error is called index error.',
      rankerTip: 'Index error is eliminated by taking Face Left and Face Right observations and averaging them.',
      topic: 'Theodolite Errors & Adjustments'
    },
    {
      id: 'q-theo-4',
      questionNumber: 4,
      question: 'The least count of transit theodolite is:',
      options: [
        '10"',
        '20\'',
        '20"',
        '25"'
      ],
      correctOptionIndex: 2,
      explanation: 'The least count of standard transit vernier theodolite used in surveying is 20 seconds (20").',
      rankerTip: 'Transit theodolite least count = 20". Prismatic compass = 30\'. Surveyor compass = 15\'.',
      topic: 'Theodolite Specifications'
    },
    {
      id: 'q-theo-5',
      questionNumber: 5,
      question: 'The capacity of telescope in producing a sharp image:',
      options: [
        'definition',
        'brightness',
        'sensitivity',
        'magnification'
      ],
      correctOptionIndex: 0,
      explanation: 'Definition is the capacity of a telescope to produce a sharp, distinct image with clear outlines.',
      rankerTip: 'Definition = image sharpness; Magnification = apparent enlargement; Brightness = light transmission.',
      topic: 'Telescope Optics'
    },
    {
      id: 'q-theo-6',
      questionNumber: 6,
      question: 'The process of turning the telescope about the vertical axis in horizontal plane is known as:',
      options: [
        'reversing',
        'plunging',
        'transiting',
        'swinging'
      ],
      correctOptionIndex: 3,
      explanation: 'Swinging is the process of rotating the telescope about the vertical axis in a horizontal plane. A right swing turns clockwise; a left swing turns counter-clockwise.',
      rankerTip: 'Turning about vertical axis in horizontal plane = Swinging.',
      topic: 'Theodolite Operations & Adjustments'
    },
    {
      id: 'q-theo-7',
      questionNumber: 7,
      question: 'To measure vertical angle of the object:',
      options: [
        'vernier C should be set to zero',
        'vernier D should be set to zero',
        'no need to set zero in verniers',
        'both vernier C & D should be set to zero'
      ],
      correctOptionIndex: 2,
      explanation: 'To measure vertical angles, the altitude bubble is brought to the center of its run and target is bisected; there is no need to set zero in verniers beforehand.',
      rankerTip: 'Vertical angles are measured with reference to the horizontal plane defined by the altitude level tube.',
      topic: 'Vertical Angle Measurement'
    },
    {
      id: 'q-theo-8',
      questionNumber: 8,
      question: 'In a transit theodolite, when the line of collimation is horizontal, the vertical circle vernier must read:',
      options: [
        '0°',
        '+20\'',
        '-20\'',
        'none of these'
      ],
      correctOptionIndex: 0,
      explanation: 'When the line of collimation is horizontal and the instrument is in perfect adjustment, the vertical circle vernier reads 0°.',
      rankerTip: 'Any deviation from 0° reading when the bubble is centered indicates vertical index error.',
      topic: 'Theodolite Adjustments'
    },
    {
      id: 'q-theo-9',
      questionNumber: 9,
      question: 'The level tube or bubble tube is filled with:',
      options: [
        'air',
        'water',
        'alcohol',
        'none of these'
      ],
      correctOptionIndex: 2,
      explanation: 'Level tubes are filled with alcohol, ether, or synthetic spirit because of low freezing point, low viscosity, and high mobility.',
      rankerTip: 'Water is never used due to its high viscosity, surface tension, and freezing hazard.',
      topic: 'Level Tube & Sensitivity'
    },
    {
      id: 'q-theo-10',
      questionNumber: 10,
      question: 'Vertical index error is a:',
      options: [
        'personal error',
        'instrumental error',
        'natural error',
        'none of these'
      ],
      correctOptionIndex: 1,
      explanation: 'Vertical index error is caused by imperfect mechanical adjustment between the vertical circle zero and the altitude level bubble axis, making it an instrumental error.',
      rankerTip: 'Instrumental errors belong to the instrument itself and can be eliminated by standard observation routines.',
      topic: 'Theodolite Errors & Adjustments'
    },
    {
      id: 'q-theo-11',
      questionNumber: 11,
      question: 'In horizontal angles, the error due to imperfect levelling of plate bubble is:',
      options: [
        'large when sights are nearly equal',
        'large for long sights',
        'less for steep inclined sights',
        'large for steep inclined sights'
      ],
      correctOptionIndex: 3,
      explanation: 'The error in horizontal angles caused by tilt of the vertical axis (imperfect levelling) is proportional to the tangent of the vertical angle of sight (tan α). Hence, it is very large for steep inclined sights and cannot be eliminated by reversing faces.',
      rankerTip: 'Error due to non-verticality of vertical axis cannot be eliminated by double centering/changing face. Level carefully on steep terrain!',
      topic: 'Theodolite Errors & Adjustments'
    },
    {
      id: 'q-theo-12',
      questionNumber: 12,
      question: 'The difference between face left and face right observations of a theodolite is 3\'. The error is:',
      options: [
        '45"',
        '1\'30"',
        '3\'',
        '0"'
      ],
      correctOptionIndex: 1,
      explanation: 'Collimation error e = (Face Left - Face Right difference) / 2 = 3\' / 2 = 1\'30" (one minute thirty seconds).',
      rankerTip: 'Observed difference = 2e, therefore Collimation error e = Difference / 2.',
      topic: 'Theodolite Errors & Adjustments'
    },
    {
      id: 'q-theo-13',
      questionNumber: 13,
      question: 'The angle between prolongation of preceding line and the forward line of a traverse is called:',
      options: [
        'direct angle',
        'excluded angle',
        'deflection angle',
        'included angle'
      ],
      correctOptionIndex: 2,
      explanation: 'A deflection angle is the angle that a survey line makes with the prolongation of the preceding survey line. It is designated as right (clockwise) or left (counter-clockwise).',
      rankerTip: 'Deflection angles are widely used in open traverse surveying for highways, railways, and pipelines.',
      topic: 'Traverse Surveying'
    },
    {
      id: 'q-theo-14',
      questionNumber: 14,
      question: 'In theodolite the line of collimation is:',
      options: [
        'parallel to axis of plate levels',
        'parallel to vertical axis',
        'perpendicular to trunnion axis',
        'parallel to the horizontal axis'
      ],
      correctOptionIndex: 2,
      explanation: 'In a properly adjusted theodolite, the line of collimation (line of sight) must be perpendicular to the horizontal axis (trunnion axis).',
      rankerTip: 'Fundamental relation: Line of Collimation ⟂ Trunnion Axis; Trunnion Axis ⟂ Vertical Axis.',
      topic: 'Fundamental Lines of Theodolite'
    },
    {
      id: 'q-theo-15',
      questionNumber: 15,
      question: 'How does the size of theodolite specified:',
      options: [
        'by the length of telescope',
        'by the diameter of vertical circle',
        'by the diameter of upper plate',
        'none of these'
      ],
      correctOptionIndex: 3,
      explanation: 'The size of a theodolite is specified by the diameter of the lower graduated plate / horizontal circle (e.g., 10 cm, 12 cm, 15 cm). Since lower plate is not listed, "none of these" is correct.',
      rankerTip: 'Official PSC rule: Theodolite size is determined strictly by the diameter of the graduated lower plate.',
      topic: 'Theodolite Specifications'
    },
    {
      id: 'q-theo-16',
      questionNumber: 16,
      question: 'Which of the following instrument is used for centering the theodolite in windy conditions:',
      options: [
        'cross staff',
        'optical plummet',
        'optical square',
        'spirit level'
      ],
      correctOptionIndex: 1,
      explanation: 'An optical plummet provides a vertical line of sight through internal prisms and is immune to wind disruption, making it ideal for centering in windy conditions.',
      rankerTip: 'Optical plummet replaces the swinging plumb bob in windy or high-altitude terrain.',
      topic: 'Temporary Adjustments'
    },
    {
      id: 'q-theo-17',
      questionNumber: 17,
      question: 'While using the theodolite, how to change the reading on the horizontal circle while measuring an horizontal angle:',
      options: [
        'upper clamp is tightened and lower clamp is loosened',
        'both upper and lower clamp are tightened',
        'both upper and lower clamp are loosened',
        'upper clamp is loosened and lower clamp is tightened'
      ],
      correctOptionIndex: 3,
      explanation: 'To change reading on horizontal circle, the lower clamp is tightened (locking scale to tribrach) and upper clamp is loosened (allowing vernier to rotate relative to the graduated scale).',
      rankerTip: 'Upper clamp loose + lower clamp tight = reading changes. Lower clamp loose + upper clamp tight = orientation changes without changing reading.',
      topic: 'Theodolite Clamps & Screws'
    },
    {
      id: 'q-theo-18',
      questionNumber: 18,
      question: 'How many level tubes are there in theodolite instrument:',
      options: [
        'one',
        'two',
        'three',
        'four'
      ],
      correctOptionIndex: 1,
      explanation: 'Standard theodolites have two plate level tubes placed mutually perpendicular to each other on the upper vernier plate for horizontal leveling.',
      rankerTip: 'Two plate levels at 90° to each other allow leveling in two perpendicular directions.',
      topic: 'Theodolite Components & Construction'
    },
    {
      id: 'q-theo-19',
      questionNumber: 19,
      question: 'What is the name of the term that the fundamental axis going out of adjustment in theodolite:',
      options: [
        'natural error',
        'personal error',
        'instrumental error',
        'temperature error'
      ],
      correctOptionIndex: 2,
      explanation: 'Errors arising from mechanical faults or fundamental axes going out of true geometric relationship are classified as instrumental errors.',
      rankerTip: 'Fundamental axis misalignment = Instrumental error.',
      topic: 'Theodolite Errors & Adjustments'
    },
    {
      id: 'q-theo-20',
      questionNumber: 20,
      question: 'Which is personal error:',
      options: [
        'eccentricity of vernier',
        'inaccurate sighting',
        'temperature',
        'atmospheric'
      ],
      correctOptionIndex: 1,
      explanation: 'Inaccurate sighting and improper target bisection are caused by limitations of the human eye and operator carelessness, making it a personal error.',
      rankerTip: 'Inaccurate sighting, parallax uneliminated, reading wrong figures = Personal errors.',
      topic: 'Surveying Errors'
    },
    {
      id: 'q-theo-21',
      questionNumber: 21,
      question: 'What is called the vertical arm in index frame of theodolite instrument:',
      options: [
        'index arm',
        'clipping arm',
        'lower arm',
        'upper arm'
      ],
      correctOptionIndex: 1,
      explanation: 'The T-frame (index frame) consists of a horizontal index arm carrying verniers and a vertical clipping arm provided with clipping screws for vertical circle altitude bubble adjustment.',
      rankerTip: 'T-frame: Vertical arm = Clipping arm; Horizontal arm = Index arm.',
      topic: 'Theodolite Components & Construction'
    },
    {
      id: 'q-theo-22',
      questionNumber: 22,
      question: 'What is called the horizontal arm in vernier frame of theodolite instrument:',
      options: [
        'index arm',
        'clipping arm',
        'lower arm',
        'upper arm'
      ],
      correctOptionIndex: 0,
      explanation: 'The horizontal arm of the T-frame that carries verniers C and D at its extremities is called the index arm.',
      rankerTip: 'Horizontal arm = Index arm; Vertical arm = Clipping arm.',
      topic: 'Theodolite Components & Construction'
    },
    {
      id: 'q-theo-23',
      questionNumber: 23,
      question: 'What is the term, while the vertical circle is on the right of the telescope and the target on the telescope is down in theodolite:',
      options: [
        'telescope forward',
        'telescope backward',
        'telescope inverted',
        'telescope normal'
      ],
      correctOptionIndex: 2,
      explanation: 'When the vertical circle of a theodolite is on the right of the observer and the bubble/target is down, it is known as Face Right, or telescope inverted / reversed.',
      rankerTip: 'Vertical circle on right = Face Right = Telescope Inverted.',
      topic: 'Theodolite Terms & Definitions'
    },
    {
      id: 'q-theo-24',
      questionNumber: 24,
      question: 'What is the term, while the vertical circle is on the left of the telescope and the target on the telescope is up in theodolite:',
      options: [
        'telescope forward',
        'telescope backward',
        'telescope inverted',
        'telescope normal'
      ],
      correctOptionIndex: 3,
      explanation: 'When the vertical circle of the instrument is to the left of the observer and the altitude bubble is up, it is known as Face Left, or telescope normal / direct.',
      rankerTip: 'Vertical circle on left = Face Left = Telescope Normal / Direct.',
      topic: 'Theodolite Terms & Definitions'
    },
    {
      id: 'q-theo-25',
      questionNumber: 25,
      question: 'What is the purpose of focusing in theodolite:',
      options: [
        'eliminate parallax error',
        'eliminate instruments error',
        'minimize the error',
        'eliminate the error'
      ],
      correctOptionIndex: 0,
      explanation: 'Focusing the eyepiece and objective lens brings the target image accurately into the plane of the crosshairs, thereby eliminating parallax.',
      rankerTip: 'Focusing eyepiece + objective = Eliminates parallax error.',
      topic: 'Temporary Adjustments'
    },
    {
      id: 'q-theo-26',
      questionNumber: 26,
      question: 'What test is that the vertical and horizontal cross hair lie in a plane perpendicular to the horizontal axis in theodolite:',
      options: [
        'cross hair ring test',
        'plate level test',
        'collimation test',
        'spire test'
      ],
      correctOptionIndex: 0,
      explanation: 'The cross hair ring test (diaphragm test) verifies that the vertical crosshair lies in a plane truly perpendicular to the horizontal (trunnion) axis.',
      rankerTip: 'Cross hair ring test = checks verticality of vertical crosshair.',
      topic: 'Permanent Adjustments'
    },
    {
      id: 'q-theo-27',
      questionNumber: 27,
      question: 'What test is that the line of sight perpendicular to the horizontal axis in theodolite:',
      options: [
        'cross hair ring test',
        'plate level test',
        'collimation test',
        'spire test'
      ],
      correctOptionIndex: 2,
      explanation: 'The collimation in azimuth test (collimation test) ensures that the line of sight (line of collimation) is perpendicular to the horizontal (trunnion) axis.',
      rankerTip: 'Collimation test = Line of sight ⟂ Trunnion axis. Spire test = Trunnion axis ⟂ Vertical axis.',
      topic: 'Permanent Adjustments'
    },
    {
      id: 'q-theo-28',
      questionNumber: 28,
      question: 'Which method is a single set of observations made for measuring a horizontal angle between any two point at a station:',
      options: [
        'repetition method',
        'Reiteration method',
        'ordinary method',
        'deflection method'
      ],
      correctOptionIndex: 2,
      explanation: 'In the ordinary method, a single set of Face Left and Face Right observations is made to measure a horizontal angle between two points without accumulating angles.',
      rankerTip: 'Single set of observations between two points = Ordinary method.',
      topic: 'Angle Measurement Methods'
    },
    {
      id: 'q-theo-29',
      questionNumber: 29,
      question: 'Which method if the eccentricity of vernier is eliminated by reading both vernier in theodolite:',
      options: [
        'ordinary method',
        'deflection method',
        'direct angle method',
        'repetition method'
      ],
      correctOptionIndex: 3,
      explanation: 'The method of repetition eliminates errors due to eccentricity of verniers and centers by reading both verniers at every step and accumulating the angle around the circle.',
      rankerTip: 'Method of repetition eliminates: eccentricity of centers/verniers and graduation errors.',
      topic: 'Angle Measurement Methods'
    },
    {
      id: 'q-theo-30',
      questionNumber: 30,
      question: 'Which method is useful for measuring precisely a number of horizontal angle from a single station point in theodolite instrument:',
      options: [
        'reiteration',
        'ordinary',
        'repetition',
        'direct angle'
      ],
      correctOptionIndex: 0,
      explanation: 'The method of reiteration (direction method) is used to measure several angles from a single station by sighting surrounding stations in succession and closing the horizon on the starting station.',
      rankerTip: 'Multiple angles from single station = Reiteration (Direction) method.',
      topic: 'Angle Measurement Methods'
    }
  ]
};
