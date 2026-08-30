import { ClassModule, StudyNote, PYQPaper, MockTest, MockTestAttempt, Doubt, User, BankQuestion } from '../types';
import { MOCK_TEST_87_QUESTIONS } from './survey87Questions';
import { MOCK_TEST_THEODOLITE_30 } from './theodoliteQuestions';
import { INITIAL_BANK_QUESTIONS } from './bankQuestions';

export { INITIAL_BANK_QUESTIONS };

export const INITIAL_MODULES: ClassModule[] = [
  {
    id: 'mod-1',
    title: 'Basic Engineering Drawing',
    description: 'Drawing Instruments, Drawing sheet, Types of lines, Lettering, Dimensioning, Scales, Geometrical constructions, Conic sections, Projection.',
    iconName: 'PenTool',
    badge: '10 Marks',
    order: 1,
    marks: 10,
    topics: 'Drawing Instruments, Drawing sheet, Types of lines, Lettering, Dimensioning, Scales, Geometrical constructions, Conic sections, Projection.'
  },
  {
    id: 'mod-2',
    title: 'Chain Survey',
    description: 'Introduction of Survey, Main divisions, classifications, Principles, Instruments used in Chain survey, Terms used in Chain survey, Ranging, Offsetting, Field book, Errors in Chain survey, Area calculation.',
    iconName: 'Ruler',
    badge: '12 Marks',
    order: 2,
    marks: 12,
    topics: 'Introduction of Survey, Main divisions, classifications, Principles, Instruments used in Chain survey, Terms used in Chain survey, Ranging, Offsetting, Field book, Errors in Chain survey, Area calculation.'
  },
  {
    id: 'mod-3',
    title: 'Compass Survey',
    description: 'Basic terms, Instruments used, Setting up of Compass, Conversion of bearings from one system to other, Included angles, Local attraction, Dip, Magnetic declination, Closing error.',
    iconName: 'Compass',
    badge: '12 Marks',
    order: 3,
    marks: 12,
    topics: 'Basic terms, Instruments used, Setting up of Compass, Conversion of bearings from one system to other, Included angles, Local attraction, Dip, Magnetic declination, Closing error.'
  },
  {
    id: 'mod-4',
    title: 'Planetable Survey',
    description: 'Instruments used, Setting up of Plane table, Methods of Plane tabling, Errors.',
    iconName: 'Layout',
    badge: '5 Marks',
    order: 4,
    marks: 5,
    topics: 'Instruments used, Setting up of Plane table, Methods of Plane tabling, Errors.'
  },
  {
    id: 'mod-5',
    title: 'Levelling and Contouring',
    description: 'Terms used, Types of Levelling, Temporary and Permanent adjustments, Curvature and Refraction, Sensitivity of bubble tube, Common errors, Contouring, Characteristics of Contours, Interpolation, Computation of Volume, Gradient, Abney level.',
    iconName: 'Activity',
    badge: '15 Marks',
    order: 5,
    marks: 15,
    topics: 'Terms used, Types of Levelling, Temporary and Permanent adjustments, Curvature and Refraction, Sensitivity of bubble tube, Common errors, Contouring, Characteristics of Contours, Interpolation, Computation of Volume, Gradient, Abney level.'
  },
  {
    id: 'mod-6',
    title: 'Theodolite Survey',
    description: 'Types of Theodolite, Parts of Theodolite, Terms used, Temporary and Permanent adjustments, Angle measurement processes, Traversing, Consecutive and Independent co-ordinates, Gales Traverse Table, Terms used in Tacheometry, Tacheometric constants, Horizontal and Vertical distance, Curves, Types of Curves, Elements of Curves.',
    iconName: 'Target',
    badge: '10 Marks',
    order: 6,
    marks: 10,
    topics: 'Types of Theodolite, Parts of Theodolite, Terms used, Temporary and Permanent adjustments, Angle measurement processes, Traversing, Consecutive and Independent co-ordinates, Gales Traverse Table, Terms used in Tacheometry, Tacheometric constants, Horizontal and Vertical distance, Curves, Types of Curves, Elements of Curves.'
  },
  {
    id: 'mod-7',
    title: 'Modern Survey Instruments',
    description: 'Digital Theodolite, GPS, GIS, Total Station, Cartographic Projection, Hydrographic Survey.',
    iconName: 'Cpu',
    badge: '8 Marks',
    order: 7,
    marks: 8,
    topics: 'Digital Theodolite, GPS, GIS, Total Station, Cartographic Projection, Hydrographic Survey.'
  },
  {
    id: 'mod-8',
    title: 'AutoCAD',
    description: 'Introduction, Basic commands, Tool bars, Function keys and shortcut keys, 2D drafting, knowledge of layout and printing.',
    iconName: 'Monitor',
    badge: '8 Marks',
    order: 8,
    marks: 8,
    topics: 'Introduction, Basic commands, Tool bars, Function keys and shortcut keys, 2D drafting, knowledge of layout and printing.'
  },
  {
    id: 'mod-9',
    title: 'Workshop Calculation and Science',
    description: 'Units, Fractions, Square Root, Ratio and Proportions, Percentage, Mensuration, Trigonometry, Material science, Mass, Weight and Density, Speed and Velocity, Work, Power and Energy, Heat and Temperature, Basic Electricity, Simple Machines.',
    iconName: 'Calculator',
    badge: '12 Marks',
    order: 9,
    marks: 12,
    topics: 'Units, Fractions, Square Root, Ratio and Proportions, Percentage, Mensuration, Trigonometry, Material science, Mass, Weight and Density, Speed and Velocity, Work, Power and Energy, Heat and Temperature, Basic Electricity, Simple Machines.'
  },
  {
    id: 'mod-10',
    title: 'Building Materials and Construction',
    description: 'Building Stones, Bricks, Lime, Timber, Tiles, Sand, Mortar, Concrete, R C C, Foundation, Irrigation – Terms used in irrigation, Factors affecting duty of water, measures to improve duty of water, Roads – Important terms, Classification, Road gradient, Estimation – Terms used, Types of Estimate.',
    iconName: 'Building2',
    badge: '8 Marks',
    order: 10,
    marks: 8,
    topics: 'Building Stones, Bricks, Lime, Timber, Tiles, Sand, Mortar, Concrete, R C C, Foundation, Irrigation – Terms used in irrigation, Factors affecting duty of water, measures to improve duty of water, Roads – Important terms, Classification, Road gradient, Estimation – Terms used, Types of Estimate.'
  }
];

export const INITIAL_STUDY_NOTES: StudyNote[] = [
  {
    id: 'note-1',
    moduleId: 'mod-1',
    title: 'Chain Surveying & Corrections Complete Master Notes',
    titleMalayalam: 'ചെയിൻ സർവേ: തിയറിയും പ്രോബ്ലംസും ഫോർമുലകളും',
    description: 'Complete breakdown of Metric chains, Gunter chain, Revenue chain, temperature correction, sag correction, and field book numerical problems frequently asked in Kerala PSC.',
    readTime: '25 mins read',
    thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    pdfNotesUrl: '/sample-notes.pdf',
    pdfNotesTitle: 'Chain_Surveying_Complete_Formula_Sheet.pdf',
    pdfSize: '2.4 MB PDF',
    chapterOverview: [
      'Classification of Surveys (Plane vs Geodetic Surveying)',
      'Primary Principle: Working from whole to part to prevent error accumulation',
      'Standard lengths of Metric Chains (20m with 100 links, 30m with 150 links, each link = 20cm)',
      'Gunter Chain (66 ft, 100 links), Engineer Chain (100 ft), Revenue Chain (33 ft, 16 links)',
      'Systematic Corrections: Temperature (Ct), Pull (Cp), Sag (Cs), Slope (Ch)'
    ],
    takeaways: [
      'Length of 20m & 30m metric chain tallies distribution at every 5 metres',
      'Correction for pull: Cp = (P - Po)L / (A x E)',
      'Sag correction is always subtractive (-ve): Cs = (W² L) / (24 P²)',
      'Standard stepping method used for sloping ground'
    ],
    order: 1,
    isFreePreview: true,
    downloadsCount: 1420,
    uploadedAt: '2026-08-10'
  },
  {
    id: 'note-2',
    moduleId: 'mod-2',
    title: 'Compass Surveying & Local Attraction Elimination Notes',
    titleMalayalam: 'പ്രിസ്മാറ്റിക് കോമ്പസ് & ലോക്കൽ അട്രാക്ഷൻ ട്രിക്ക്സ്',
    description: 'Learn the foolproof 2-minute method to detect and eliminate Local Attraction in Closed Traverse without confusing plus/minus signs.',
    readTime: '20 mins read',
    thumbnail: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80',
    pdfNotesUrl: '/sample-notes.pdf',
    pdfNotesTitle: 'Compass_Traverse_Local_Attraction_Solved_Problems.pdf',
    pdfSize: '3.1 MB PDF',
    chapterOverview: [
      'Prismatic Compass vs Surveyor Compass detailed comparison table',
      'Whole Circle Bearing (WCB 0° to 360°) vs Quadrantal Bearing (QB 0° to 90°)',
      'Magnetic Declination: True Bearing = Magnetic Bearing ± Declination (+ for East, - for West)',
      'Agonic Line (Zero Declination) vs Isogonic Line (Equal Declination)',
      'Aclinic Line (Zero Dip / Magnetic Equator) vs Isoclinic Line (Equal Dip)'
    ],
    takeaways: [
      'Difference between FB and BB must be exactly 180° for an unaffected line',
      'Prismatic compass reads WCB (0° to 360° clockwise from South via prism)',
      'Surveyor compass reads QB (Quadrantal Bearing) directly with fixed needle'
    ],
    order: 2,
    isFreePreview: true,
    downloadsCount: 1890,
    uploadedAt: '2026-08-12'
  },
  {
    id: 'note-3',
    moduleId: 'mod-3',
    title: 'Levelling Field Book & Inverted Staff Calculations Summary',
    titleMalayalam: 'ലെവലിംഗ് ഫീൽഡ് ബുക്ക് കാൽക്കുലേഷൻ & ഇൻവേർട്ടഡ് സ്റ്റാഫ്',
    description: 'Solve any Levelling table within 60 seconds. Special focus on Inverted Staff Readings (used for ceiling/bridge soffit) and arithmetical checks.',
    readTime: '30 mins read',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    pdfNotesUrl: '/sample-notes.pdf',
    pdfNotesTitle: 'Levelling_Master_Handwritten_Notes.pdf',
    pdfSize: '4.5 MB PDF',
    chapterOverview: [
      'Height of Instrument (HI) Method vs Rise and Fall Method',
      'Inverted Staff Reading principle for bridge soffits & building roofs',
      'Earth Curvature Correction: Cc = 0.0785 d² (subtract)',
      'Atmospheric Refraction Correction: Cr = 0.0112 d² (add)',
      'Combined Correction: C = 0.0673 d² (subtract), Distance to Horizon: d = 3.855 √h'
    ],
    takeaways: [
      'Inverted Staff reading is recorded with a negative sign (-)',
      'Arithmetical check: ΣBS - ΣFS = ΣRise - ΣFall = Last RL - First RL',
      'Reciprocal levelling eliminates collimation error, curvature error & atmospheric refraction error'
    ],
    order: 3,
    isFreePreview: false,
    downloadsCount: 960,
    uploadedAt: '2026-08-14'
  },
  {
    id: 'note-4',
    moduleId: 'mod-4',
    title: 'Theodolite Adjustments, Tacheometry & Curve Formulas',
    titleMalayalam: 'തിയോഡലൈറ്റ് അഡ്ജസ്റ്റ്മെന്റുകൾ & ആംഗിൾ മെഷർമെന്റ്',
    description: 'Detailed practical walk-through of theodolite axes relations, elimination of index error, repetition method for single angle, reiteration for multiple angles.',
    readTime: '25 mins read',
    thumbnail: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    pdfNotesUrl: '/sample-notes.pdf',
    pdfNotesTitle: 'Theodolite_Fundamental_Lines_Relationships.pdf',
    pdfSize: '1.8 MB PDF',
    chapterOverview: [
      'Fundamental Lines of Theodolite and their perpendicularity relations',
      'Repetition method (precision for single angle) vs Reiteration method (angles around station)',
      'Stadia Tacheometry: D = k·s + c (where k = 100, c = 0 for anallatic lens)',
      'Simple Circular Curves: Radius R, Tangent length T = R tan(Δ/2), Length of curve L = π R Δ / 180°'
    ],
    takeaways: [
      'Face Left & Face Right observations eliminate collimation error and horizontal axis index error',
      'Plate level axis must be perpendicular to vertical axis',
      'Stadia constants: Multiplying constant k = 100, Additive constant c = 0 for anallatic lens'
    ],
    order: 4,
    isFreePreview: false,
    downloadsCount: 820,
    uploadedAt: '2026-08-17'
  },
  {
    id: 'note-5',
    moduleId: 'mod-5',
    title: 'Total Station, EDM Principles & DGPS for Kerala Resurvey',
    titleMalayalam: 'ടോട്ടൽ സ്റ്റേഷൻ & കേരള ഡിജിറ്റൽ റീസർവേ സാങ്കേതികവിദ്യ',
    description: 'Understand EDM carrier waves, Phase shift method, Total Station coordinate computation (Easting, Northing, Elevation), Prism offsets, and CORS DGPS network used in Kerala Ente Bhoomi project.',
    readTime: '30 mins read',
    thumbnail: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80',
    pdfNotesUrl: '/sample-notes.pdf',
    pdfNotesTitle: 'Total_Station_DGPS_Kerala_Resurvey_Guide.pdf',
    pdfSize: '5.2 MB PDF',
    chapterOverview: [
      'Components of Electronic Total Station (ETS)',
      'EDM Carrier Frequencies: Infrared (IR) lasers and visible spectrum',
      'Atmospheric Correction (PPM) for temperature and pressure changes',
      'Differential GPS (DGPS) & Real Time Kinematic (RTK) Rover operations',
      'Kerala CORS Network setup for the digital resurvey project'
    ],
    takeaways: [
      'Total Station integrates electronic theodolite + EDM + microprocessor',
      'Prism constant correction is typically -30mm or 0mm',
      'CORS (Continuously Operating Reference Station) gives centimetre-level real-time accuracy',
      'Kerala Digital Resurvey utilizes RTK rover + Drone Survey + ETS'
    ],
    order: 5,
    isFreePreview: false,
    downloadsCount: 1150,
    uploadedAt: '2026-08-20'
  },
  {
    id: 'note-6',
    moduleId: 'mod-6',
    title: 'Kerala Survey & Boundaries Act 1961 & Land Records (FMB, Thandaper)',
    titleMalayalam: 'കേരള സർവേ & അതിരടയാള നിയമം 1961 - സുപ്രധാന വകുപ്പുകൾ',
    description: 'Direct high-scoring session on Section 6 (Notification), Section 9 (Notice to record boundaries), Section 13 (Completion of survey), FMB ladder reading, and survey stones specifications.',
    readTime: '35 mins read',
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    pdfNotesUrl: '/sample-notes.pdf',
    pdfNotesTitle: 'Kerala_Survey_Boundaries_Act_1961_Key_Sections.pdf',
    pdfSize: '3.7 MB PDF',
    chapterOverview: [
      'Section 6: Government notification regarding commencement of survey',
      'Section 9: Notice requiring attendance and clearing of boundaries by landholders',
      'Section 10: Determination of disputed boundaries',
      'Section 13: Official notification of completion of survey',
      'Field Measurement Book (FMB): G-line, F-line, offset ladder & subdivision lines'
    ],
    takeaways: [
      'Section 6: Notification regarding commencement of survey',
      'Section 9: Notice to registered owners to clear boundaries',
      'Section 13: Final notification on completion of survey',
      'FMB contains G-line, F-line, offset ladder, and sub-division measurements'
    ],
    order: 6,
    isFreePreview: true,
    downloadsCount: 2450,
    uploadedAt: '2026-08-22'
  },
  {
    id: 'note-7',
    moduleId: 'mod-7',
    title: 'AutoCad Commands, Scales & Map Projections for Kerala PSC',
    titleMalayalam: 'ഓട്ടോകോഡ് കമാൻഡുകൾ & സ്കെയിലുകൾ PSC ചോദ്യങ്ങൾ',
    description: 'Frequently repeated AutoCad questions in Kerala PSC: OSNAP, LIMITS, ZOOM, PLINE, HATCH, OFFSET, scale factor, Representative Fraction (RF) calculations.',
    readTime: '20 mins read',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    pdfNotesUrl: '/sample-notes.pdf',
    pdfNotesTitle: 'AutoCad_Survey_Shortcuts_and_Formulas.pdf',
    pdfSize: '2.1 MB PDF',
    chapterOverview: [
      'AutoCad Function Keys: F1 (Help), F3 (OSNAP), F7 (Grid), F8 (Ortho), F9 (Snap)',
      'Essential Cad Commands: PLINE, OFFSET, TRIM, EXTEND, HATCH, SCALE, EXPLODE',
      'Representative Fraction (RF): RF = Map Distance / Ground Distance',
      'Diagonal Scale (3 units) vs Vernier Scale vs Plain Scale'
    ],
    takeaways: [
      'Representative Fraction RF = Map Distance / Ground Distance (same units)',
      'Shrunk Scale = Original Scale x Shrinkage Factor',
      'Diagonal Scale can measure three dimensions (e.g., metre, decimetre, centimetre)',
      'Standard Cad format extension: .DWG, exchange format: .DXF'
    ],
    order: 7,
    isFreePreview: false,
    downloadsCount: 710,
    uploadedAt: '2026-08-23'
  },
  {
    id: 'note-8',
    moduleId: 'mod-8',
    title: 'Kerala Water Authority (KWA) Technical Surveying & Alignment Secrets',
    titleMalayalam: 'KWA ഓവർസിയർ / സർവേയർ പരീക്ഷാ തന്ത്രങ്ങൾ',
    description: 'Special strategies for KWA examinations: Pipeline gradient surveys, inverted siphons, bench mark transfers across rivers, pressure heads, and water distribution layout plotting.',
    readTime: '25 mins read',
    thumbnail: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=800&q=80',
    pdfNotesUrl: '/sample-notes.pdf',
    pdfNotesTitle: 'KWA_Technical_Handwritten_Formula_Sheet.pdf',
    pdfSize: '3.9 MB PDF',
    chapterOverview: [
      'Hydraulic Gradient Line (HGL) vs Total Energy Line (TEL)',
      'Invert Level calculations and trench excavation gradient control',
      'Reciprocal levelling for river crossings and pipeline benchmarks',
      'Minimum cover over water supply pipes (1.0m under vehicular roads)'
    ],
    takeaways: [
      'Reciprocal levelling eliminates collimation error, curvature error & atmospheric refraction error across rivers',
      'Bed slope calculations: s = (RL1 - RL2) / Distance',
      'Top repeated numerical questions from previous KWA exams'
    ],
    order: 8,
    isFreePreview: false,
    downloadsCount: 1680,
    uploadedAt: '2026-08-24'
  }
];

export const INITIAL_PYQ_PAPERS: PYQPaper[] = [
  {
    id: 'pyq-1',
    title: 'Kerala PSC Surveyor Grade II - Survey & Land Records (2024)',
    examName: 'Surveyor Grade II (Direct Recruitment)',
    examCode: 'Cat. No: 284/2022',
    year: 2024,
    department: 'Survey and Land Records Department',
    totalQuestions: 100,
    pdfUrl: 'https://example.com/pyq/surveyor_gr2_2024_official_paper.pdf',
    answerKeyUrl: 'https://example.com/pyq/surveyor_gr2_2024_final_key.pdf',
    isSolved: true,
    questions: [
      {
        id: 'q1-1',
        questionNumber: 1,
        question: 'The length of a Gunter\'s chain is:',
        questionMalayalam: 'ഗുണ്ടേഴ്സ് ചെയിനിന്റെ നീളം എത്രയാണ്?',
        options: ['66 feet', '100 feet', '33 feet', '20 metres'],
        correctOptionIndex: 0,
        explanation: 'Gunter\'s chain has 100 links and total length of 66 feet (20.12 m). 10 Gunter chains = 1 Furlong, 80 Gunter chains = 1 Mile, 10 square Gunter chains = 1 Acre.',
        topic: 'Chain Surveying'
      },
      {
        id: 'q1-2',
        questionNumber: 2,
        question: 'In a prismatic compass, the zero of the graduated ring is marked at the:',
        questionMalayalam: 'പ്രിസ്മാറ്റിക് കോമ്പസിൽ പൂജ്യം ഡിഗ്രി (0°) അടയാളപ്പെടുത്തിയിരിക്കുന്നത് ഏത് ദിശയിലാണ്?',
        options: ['North end', 'South end', 'East end', 'West end'],
        correctOptionIndex: 1,
        explanation: 'In a prismatic compass, 0° (or 360°) is marked at the SOUTH end, 90° at West, 180° at North, and 270° at East because readings are viewed through the prism at the South end while sighting the object at North.',
        topic: 'Compass Surveying'
      },
      {
        id: 'q1-3',
        questionNumber: 3,
        question: 'If the Fore Bearing (FB) of a line AB is 45° 30\', then its Back Bearing (BB) is:',
        questionMalayalam: 'ഒരു ലൈനിന്റെ Fore Bearing 45° 30\' ആണെങ്കിൽ, അതിന്റെ Back Bearing എത്ര?',
        options: ['135° 30\'', '225° 30\'', '315° 30\'', '45° 30\''],
        correctOptionIndex: 1,
        explanation: 'Formula: Back Bearing = Fore Bearing ± 180°. Since FB (45° 30\') < 180°, BB = 45° 30\' + 180° = 225° 30\'.',
        topic: 'Compass Surveying'
      },
      {
        id: 'q1-4',
        questionNumber: 4,
        question: 'The correction for sag in a surveying tape is always:',
        questionMalayalam: 'ടേപ്പിലെ സാഗ് കറക്ഷൻ (Sag Correction) എപ്പോഴും:',
        options: ['Additive (+)', 'Subtractive (-)', 'Zero', 'Depends on temperature'],
        correctOptionIndex: 1,
        explanation: 'Because a suspended tape sags under its own weight into a catenary curve, the measured distance is always greater than the true straight line distance. Hence sag correction is ALWAYS SUBTRACTIVE (-ve).',
        topic: 'Chain Surveying'
      },
      {
        id: 'q1-5',
        questionNumber: 5,
        question: 'Which section of Kerala Survey and Boundaries Act 1961 deals with the notification of completion of survey?',
        questionMalayalam: 'കേരള സർവേ & അതിരടയാള നിയമം 1961 പ്രകാരം സർവേ പൂർത്തീകരണ വിജ്ഞാപനം ഏത് വകുപ്പാണ്?',
        options: ['Section 6', 'Section 9', 'Section 11', 'Section 13'],
        correctOptionIndex: 3,
        explanation: 'Section 13 of the Kerala Survey and Boundaries Act 1961 mandates the publication of the final notification when survey is completed.',
        topic: 'Kerala Survey & Boundaries Act'
      }
    ]
  },
  {
    id: 'pyq-2',
    title: 'Kerala Water Authority (KWA) Tracer / Overseer Gr. III (2023)',
    examName: 'Tracer / Overseer Grade III',
    examCode: 'Cat. No: 120/2022',
    year: 2023,
    department: 'Kerala Water Authority',
    totalQuestions: 100,
    pdfUrl: 'https://example.com/pyq/kwa_tracer_overseer_2023_paper.pdf',
    answerKeyUrl: 'https://example.com/pyq/kwa_tracer_2023_key.pdf',
    isSolved: true,
    questions: [
      {
        id: 'q2-1',
        questionNumber: 1,
        question: 'Reciprocal levelling eliminates which of the following errors?',
        questionMalayalam: 'റെസിപ്രോക്കൽ ലെവലിങ് വഴി പൂർണ്ണമായി ഒഴിവാക്കാവുന്ന പിശകുകൾ ഏതെല്ലാം?',
        options: [
          'Earth curvature and atmospheric refraction only',
          'Collimation error, earth curvature and atmospheric refraction',
          'Index error and parallax error only',
          'Graduation error of staff only'
        ],
        correctOptionIndex: 1,
        explanation: 'Reciprocal levelling eliminates: (1) Error due to instrument collimation line not being horizontal, (2) Error due to curvature of the earth, (3) Error due to uniform atmospheric refraction.',
        topic: 'Levelling'
      },
      {
        id: 'q2-2',
        questionNumber: 2,
        question: 'The multiplying constant (k) for an anallatic tacheometer is:',
        questionMalayalam: 'അനലാറ്റിക് ടക്കിയോമീറ്ററിലെ മൾട്ടിപ്ലൈയിംഗ് കോൺസ്റ്റന്റ് (k) എത്രയാണ്?',
        options: ['0', '50', '100', '200'],
        correctOptionIndex: 2,
        explanation: 'For a standard tacheometer, Multiplying constant k = f / i = 100. For an anallatic telescope fitted with an internal anallatic lens, Additive constant c = (f + d) = 0.',
        topic: 'Theodolite & Tacheometry'
      },
      {
        id: 'q2-3',
        questionNumber: 3,
        question: 'In AutoCad, which function key toggles Ortho mode ON and OFF?',
        questionMalayalam: 'ഓട്ടോകോഡിൽ ഓർത്തോ മോഡ് (Ortho Mode) ഓൺ/ഓഫ് ചെയ്യാനുള്ള ഫംഗ്ഷൻ കീ ഏതാണ്?',
        options: ['F3', 'F7', 'F8', 'F9'],
        correctOptionIndex: 2,
        explanation: 'F8 toggles Ortho mode (locks cursor movement to 90° horizontal/vertical). F3 is OSNAP, F7 is Grid, F9 is Snap.',
        topic: 'Engineering Drawing & AutoCad'
      },
      {
        id: 'q2-4',
        questionNumber: 4,
        question: 'When a staff is held on the soffit (underside) of a bridge deck, the reading is recorded as:',
        questionMalayalam: 'പാലത്തിന്റെ അടിഭാഗത്ത് സ്റ്റാഫ് തലതിരിച്ച് പിടിച്ച് റീഡിംഗ് എടുക്കുമ്പോൾ അതിനെ എങ്ങനെ അടയാളപ്പെടുത്തുന്നു?',
        options: ['Normal Positive Reading', 'Inverted Staff Reading (Negative)', 'Intermediate Sight with Zero', 'Benchmark Reading'],
        correctOptionIndex: 1,
        explanation: 'Inverted staff reading is taken when the staff base is placed against a high ceiling/soffit. In the levelling field book, it is entered with a minus sign (-). RL of Soffit = HI + (- Staff Reading) = HI - Staff Reading.',
        topic: 'Levelling'
      }
    ]
  },
  {
    id: 'pyq-3',
    title: 'Kerala PSC Draftsman Gr. II / Town Planning Surveyor (2022)',
    examName: 'Draftsman Grade II / Town Planning Surveyor',
    examCode: 'Cat. No: 334/2021',
    year: 2022,
    department: 'Town and Country Planning / LSGD',
    totalQuestions: 100,
    pdfUrl: 'https://example.com/pyq/draftsman_town_planning_2022.pdf',
    answerKeyUrl: 'https://example.com/pyq/draftsman_town_planning_2022_key.pdf',
    isSolved: true,
    questions: [
      {
        id: 'q3-1',
        questionNumber: 1,
        question: 'The scale used for drawing Field Measurement Book (FMB) sketches in Kerala Survey Department is generally:',
        questionMalayalam: 'കേരള സർവേ വകുപ്പിൽ FMB പ്ലോട്ടുകൾ വരയ്ക്കാൻ സാധാരണയായി ഉപയോഗിക്കുന്ന സ്കെയിൽ ഏത്?',
        options: ['1:1000 or 1:2000', '1:5000', '1:100', '1:25000'],
        correctOptionIndex: 0,
        explanation: 'In Kerala Cadastral Survey, FMB (Field Measurement Book) sketches are drafted at 1:1000 or 1:2000 scale depending on the parcel size and village map specifications.',
        topic: 'Kerala Survey & Boundaries Act'
      },
      {
        id: 'q3-2',
        questionNumber: 2,
        question: 'Total Station uses which electromagnetic wave carrier for EDM measurement?',
        questionMalayalam: 'ടോട്ടൽ സ്റ്റേഷനിലെ EDM അളവുകൾക്കായി ഉപയോഗിക്കുന്ന ഇലക്ട്രോമാഗ്നറ്റിക് തരംഗങ്ങൾ ഏവ?',
        options: ['Infrared / Modulated Light waves or Microwave', 'X-rays', 'Gamma rays', 'Sound waves'],
        correctOptionIndex: 0,
        explanation: 'Modern Total Stations use Near-Infrared (IR) lasers or modulated visible light waves for short and medium ranges, and microwaves for long range EDM.',
        topic: 'Total Station & Modern Tech'
      }
    ]
  }
];

export const INITIAL_MOCK_TESTS: MockTest[] = [
  MOCK_TEST_87_QUESTIONS,
  MOCK_TEST_THEODOLITE_30,
  {
    id: 'mock-state-rank-1',
    title: 'All-Kerala Survey & Land Records State-Level Ranked Grand Exam (10 Questions)',
    category: 'All-Kerala State Ranked Exam',
    description: 'Official Kerala PSC Pattern Statewide Evaluation (1 Attempt Only). Evaluated with -0.33 negative marking. Compare your marks and obtain your Kerala State Rank & Percentile on the live Statewide Leaderboard!',
    durationMinutes: 45,
    totalQuestions: 10,
    marksPerCorrect: 1,
    negativeMarksPerWrong: 0.33,
    totalMarks: 10,
    difficulty: 'PSC Standard (Advanced)',
    attemptsCount: 842,
    isRankedExam: true,
    isOneTimeOnly: true,
    examCode: 'KPSC-SLR-STATE-RANK-2026',
    targetDepartment: 'Survey & Land Records / Kerala Water Authority',
    questions: [
      {
        id: 'msq-1',
        questionNumber: 1,
        question: 'Which of the following is the primary principle of plane and geodetic surveying in Kerala Survey department?',
        questionMalayalam: 'സർവേയിംഗിന്റെ അടിസ്ഥാന തത്വങ്ങളിൽ ഒന്നായ \'വർക്കിംഗ് ഫ്രം ഹോൾ ടു പാർട്ട്\' നൽകുന്ന പ്രധാന നേട്ടം എന്താണ്?',
        options: [
          'Working from whole to part to prevent accumulation of errors',
          'Working from part to whole to increase speed',
          'Taking only linear measurements without angles',
          'Locating a new point by at least three independent measurements'
        ],
        correctOptionIndex: 0,
        explanation: 'Working from whole to part establishes a major framework with highest precision, preventing local errors from magnifying.',
        rankerTip: 'Universal PSC Rule: Whole to Part prevents error accumulation.',
        topic: 'Fundamental Principles'
      },
      {
        id: 'msq-2',
        questionNumber: 2,
        question: 'The sensitivity of a bubble tube in an engineer\'s Dumpy / Auto level can be increased by:',
        questionMalayalam: 'ലെവലിലെ ബബിൾ ട്യൂബിന്റെ സെൻസിറ്റിവിറ്റി വർദ്ധിപ്പിക്കാൻ എന്ത് ചെയ്യണം?',
        options: [
          'Increasing the radius of curvature of the internal tube',
          'Decreasing the length of the bubble',
          'Increasing the viscosity of the liquid',
          'Decreasing the internal diameter of the tube'
        ],
        correctOptionIndex: 0,
        explanation: 'Sensitivity = (Radius of curvature R) / (Length). Increasing radius of curvature R, increasing diameter D, or decreasing liquid viscosity increases sensitivity.',
        rankerTip: 'Sensitivity is directly proportional to radius of curvature R.',
        topic: 'Levelling'
      },
      {
        id: 'msq-3',
        questionNumber: 3,
        question: 'If the magnetic bearing of the sun at noon in the northern hemisphere is 184°, the magnetic declination is:',
        questionMalayalam: 'ഉച്ചസമയത്ത് സൂര്യന്റെ മാഗ്നറ്റിക് ബെയറിംഗ് 184° ആണെങ്കിൽ, മാഗ്നറ്റിക് ഡിക്ലിനേഷൻ എത്ര?',
        options: ['4° East', '4° West', '184° West', '84° East'],
        correctOptionIndex: 1,
        explanation: 'At noon, True Bearing of the sun in Northern Hemisphere is 180° South. Declination = True Bearing - Magnetic Bearing = 180° - 184° = -4° = 4° West.',
        rankerTip: 'Formula: True Bearing = Magnetic Bearing ± Declination (+ for East, - for West).',
        topic: 'Compass Surveying'
      },
      {
        id: 'msq-4',
        questionNumber: 4,
        question: 'Bowditch\'s rule for adjusting a closed traverse is applied when:',
        questionMalayalam: 'ബൗഡിച്ച്സ് റൂൾ (Bowditch\'s Rule) ക്ലോസ്ഡ് ട്രാവേഴ്സിൽ ഉപയോഗിക്കുന്നത് എപ്പോഴാണ്?',
        options: [
          'Linear and angular measurements are made with equal degree of precision',
          'Angular measurements are more precise than linear measurements',
          'Linear measurements are more precise than angular measurements',
          'Only when the traverse has an even number of sides'
        ],
        correctOptionIndex: 0,
        explanation: 'Bowditch\'s rule assumes linear errors proportional to √L and angular errors inversely proportional to √L (equal precision).',
        rankerTip: 'Bowditch = Equal precision; Transit rule = Angular more precise.',
        topic: 'Traversing'
      },
      {
        id: 'msq-5',
        questionNumber: 5,
        question: 'The line passing through the points of zero magnetic declination on earth is called:',
        questionMalayalam: 'പൂജ്യം മാഗ്നറ്റിക് ഡിക്ലിനേഷൻ ഉള്ള സ്ഥലങ്ങളെ ബന്ധിപ്പിക്കുന്ന രേഖയ്ക്ക് എന്ത് പേര് പറയുന്നു?',
        options: ['Agonic Line', 'Isogonic Line', 'Aclinic Line', 'Isoclinic Line'],
        correctOptionIndex: 0,
        explanation: 'Agonic line connects points of ZERO magnetic declination. Isogonic connects points of EQUAL declination. Aclinic line is magnetic equator (ZERO dip).',
        rankerTip: 'Mnemonic: \'A-\' means None/Zero. Agonic = Zero Declination; Aclinic = Zero Dip.',
        topic: 'Compass Surveying'
      },
      {
        id: 'msq-6',
        questionNumber: 6,
        question: 'What is the permissible closing error in ordinary levelling in metres (where K is distance in kilometres)?',
        questionMalayalam: 'ഓർഡിനറി ലെവലിംഗിൽ അനുവദനീയമായ പരമാവധി ക്ലോസിംഗ് എറർ (Closing error) എത്ര?',
        options: ['± 0.024 √K', '± 0.012 √K', '± 0.006 √K', '± 0.100 √K'],
        correctOptionIndex: 0,
        explanation: 'Standard permissible limits: Ordinary Levelling = ± 0.024 √K m, Precise Levelling = ± 0.006 √K m, Rough Levelling = ± 0.100 √K m.',
        rankerTip: 'Very high repetition in Surveyor Grade 2 exams.',
        topic: 'Levelling'
      },
      {
        id: 'msq-7',
        questionNumber: 7,
        question: 'Under Kerala Survey and Boundaries Act 1961, who is designated as the Director of Survey and Land Records?',
        questionMalayalam: 'കേരള സർവേ & അതിരടയാള നിയമത്തിൽ \'ഡയറക്ടർ ഓഫ് സർവേ & ലാൻഡ് റെക്കോർഡ്സ്\' എന്ന പദവിയുടെ ചുമതല ആർക്കാണ്?',
        options: [
          'Officer appointed by the State Government to be the Director of Survey and Land Records',
          'District Collector exclusively',
          'Tahsildar of the respective Taluk',
          'Survey Superintendent of Resurvey'
        ],
        correctOptionIndex: 0,
        explanation: 'As per Section 2(ii) of the Act, "Director" means an officer appointed by the Government to be the Director of Survey and Land Records.',
        rankerTip: 'Direct quote from Section 2 Definitions in Kerala Survey Act.',
        topic: 'Kerala Survey & Boundaries Act'
      },
      {
        id: 'msq-8',
        questionNumber: 8,
        question: 'In Total Station, what is the purpose of the Atmospheric Correction (PPM setting)?',
        questionMalayalam: 'ടോട്ടൽ സ്റ്റേഷനിൽ അറ്റ്മോസ്ഫെറിക് കറക്ഷൻ (PPM Setting) ക്രമീകരിക്കുന്നത് എന്തിനാണ്?',
        options: [
          'To correct for changes in air temperature and atmospheric pressure affecting velocity of light',
          'To align the crosshairs with the vertical prism pole',
          'To calculate battery backup percentage',
          'To adjust tilt sensor automatically'
        ],
        correctOptionIndex: 0,
        explanation: 'The speed of light varies with atmospheric temperature and barometric pressure. The Total Station processor applies a Parts Per Million (PPM) factor.',
        rankerTip: 'Standard reference atmosphere is 15°C and 1013.25 hPa.',
        topic: 'Total Station & Modern Tech'
      },
      {
        id: 'msq-9',
        questionNumber: 9,
        question: 'The scale of a cadastral survey map is 1:2000. If an agricultural parcel measures 4 cm x 5 cm on the map, its true area in Hectares is:',
        questionMalayalam: '1:2000 സ്കെയിലിലുള്ള ഒരു മാപ്പിൽ 4 cm x 5 cm വിസ്തീർണ്ണമുള്ള ഭൂമിയുടെ യഥാർത്ഥ വിസ്തീർണ്ണം എത്ര ഹെക്ടറാണ്?',
        options: ['0.8 Hectares', '8.0 Hectares', '80.0 Hectares', '0.08 Hectares'],
        correctOptionIndex: 0,
        explanation: 'Length = 5 cm x 2000 = 100 m. Width = 4 cm x 2000 = 80 m. True Area = 100 m x 80 m = 8000 m² = 0.8 Hectares.',
        rankerTip: '1 Hectare = 10,000 m² = 2.47 Acres = 247 Cents.',
        topic: 'Engineering Drawing & Scales'
      },
      {
        id: 'msq-10',
        questionNumber: 10,
        question: 'In Kerala Water Authority water supply pipelines, the minimum cover provided above the crown of the pipe in normal road trenches is generally:',
        questionMalayalam: 'കെ.ഡബ്ല്യു.എ വാട്ടർ പൈപ്പ് ലൈനുകൾ സ്ഥാപിക്കുമ്പോൾ റോഡ് നിരപ്പിൽ നിന്നും മുകളിലേക്ക് നൽകേണ്ട കുറഞ്ഞ കവർ (Minimum Cover) എത്ര?',
        options: ['1.0 metre', '0.3 metre', '2.5 metres', '5.0 metres'],
        correctOptionIndex: 0,
        explanation: 'As per KWA & CPHEEO manual specifications, a minimum soil cover of 1.0 m (1000 mm) above the crown of the pipe is maintained under vehicular traffic roads.',
        rankerTip: 'Crucial for KWA Overseer & Surveyor examinations.',
        topic: 'KWA Specific Topics'
      }
    ]
  },
  {
    id: 'mock-1',
    title: 'Kerala PSC Survey & Land Records Full Mock Test #1',
    category: 'Full-Length Kerala PSC',
    description: 'Authentic Kerala PSC pattern model exam with negative marking (+1 for correct, -0.33 for wrong answer). Specially curated by expert faculty.',
    durationMinutes: 45,
    totalQuestions: 10,
    marksPerCorrect: 1,
    negativeMarksPerWrong: 0.33,
    totalMarks: 10,
    difficulty: 'PSC Standard (Advanced)',
    attemptsCount: 348,
    questions: [
      {
        id: 'mq-1',
        questionNumber: 1,
        question: 'Which of the following is the fundamental principle of surveying?',
        questionMalayalam: 'സർവേയിംഗിന്റെ അടിസ്ഥാന തത്വങ്ങളിൽ ഒന്നായ \'വർക്കിംഗ് ഫ്രം ഹോൾ ടു പാർട്ട്\' നൽകുന്ന പ്രധാന നേട്ടം എന്താണ്?',
        options: [
          'Working from whole to part to prevent accumulation of errors',
          'Working from part to whole to increase speed',
          'Taking only linear measurements without angles',
          'Locating a new point by at least three independent measurements'
        ],
        correctOptionIndex: 0,
        explanation: 'The primary principle of surveying is \'Working from whole to part\'. This ensures that local errors do not expand to the entire survey area and prevents accumulation of errors.',
        rankerTip: 'Remember: PSC always asks the difference between \'whole to part\' vs \'part to whole\'. Never mark part to whole!',
        topic: 'Basic Principles'
      },
      {
        id: 'mq-2',
        questionNumber: 2,
        question: 'The sensitivity of a bubble tube can be increased by:',
        questionMalayalam: 'ലെവലിലെ ബബിൾ ട്യൂബിന്റെ സെൻസിറ്റിവിറ്റി വർദ്ധിപ്പിക്കാൻ എന്ത് ചെയ്യണം?',
        options: [
          'Increasing the radius of curvature of the internal tube',
          'Decreasing the length of the bubble',
          'Increasing the viscosity of the liquid',
          'Decreasing the internal diameter of the tube'
        ],
        correctOptionIndex: 0,
        explanation: 'Sensitivity = (Radius of curvature R) / (Length). Increasing radius of curvature R, increasing diameter D, or decreasing liquid viscosity/roughness increases sensitivity.',
        rankerTip: 'Sensitivity ∝ R, ∝ D, ∝ L, and ∝ 1/Viscosity, ∝ 1/Surface Tension.',
        topic: 'Levelling'
      },
      {
        id: 'mq-3',
        questionNumber: 3,
        question: 'If the magnetic bearing of the sun at noon in the northern hemisphere is 184°, the magnetic declination is:',
        questionMalayalam: 'ഉച്ചസമയത്ത് സൂര്യന്റെ മാഗ്നറ്റിക് ബെയറിംഗ് 184° ആണെങ്കിൽ, മാഗ്നറ്റിക് ഡിക്ലിനേഷൻ എത്ര?',
        options: ['4° East', '4° West', '184° West', '84° East'],
        correctOptionIndex: 1,
        explanation: 'At noon, True Bearing of the sun in Northern Hemisphere is exactly 180° South. Declination = True Bearing - Magnetic Bearing = 180° - 184° = -4° = 4° West.',
        rankerTip: 'Formula: True Bearing = Magnetic Bearing ± Declination (+ for East, - for West). 180° = 184° - 4° => 4° West.',
        topic: 'Compass Surveying'
      },
      {
        id: 'mq-4',
        questionNumber: 4,
        question: 'Bowditch\'s rule for adjusting a closed traverse is applied when:',
        questionMalayalam: 'ബൗഡിച്ച്സ് റൂൾ (Bowditch\'s Rule) ക്ലോസ്ഡ് ട്രാവേഴ്സിൽ ഉപയോഗിക്കുന്നത് എപ്പോഴാണ്?',
        options: [
          'Linear and angular measurements are made with equal degree of precision',
          'Angular measurements are more precise than linear measurements',
          'Linear measurements are more precise than angular measurements',
          'Only when the traverse has an even number of sides'
        ],
        correctOptionIndex: 0,
        explanation: 'Bowditch\'s rule (Compass Rule) assumes that linear errors are proportional to √L and angular errors are inversely proportional to √L (equal precision). When angles are more precise, Transit Rule is used.',
        rankerTip: 'Key PSC Trap: Bowditch = Equal precision; Transit rule = Angular more precise.',
        topic: 'Traversing'
      },
      {
        id: 'mq-5',
        questionNumber: 5,
        question: 'The line passing through the points of zero magnetic declination on earth is called:',
        questionMalayalam: 'പൂജ്യം മാഗ്നറ്റിക് ഡിക്ലിനേഷൻ ഉള്ള സ്ഥലങ്ങളെ ബന്ധിപ്പിക്കുന്ന രേഖയ്ക്ക് എന്ത് പേര് പറയുന്നു?',
        options: ['Agonic Line', 'Isogonic Line', 'Aclinic Line', 'Isoclinic Line'],
        correctOptionIndex: 0,
        explanation: 'Agonic line connects points of ZERO magnetic declination. Isogonic connects points of EQUAL declination. Aclinic line is magnetic equator (ZERO dip). Isoclinic connects points of EQUAL dip.',
        rankerTip: 'Mnemonic: \'A-\' means None/Zero. Agonic = Zero Declination; Aclinic = Zero Dip (Clinic/Inclination).',
        topic: 'Compass Surveying'
      },
      {
        id: 'mq-6',
        questionNumber: 6,
        question: 'What is the permissible closing error in ordinary levelling in metres (where K is distance in kilometres)?',
        questionMalayalam: 'ഓർഡിനറി ലെവലിംഗിൽ അനുവദനീയമായ പരമാവധി ക്ലോസിംഗ് എറർ (Closing error) എത്ര?',
        options: ['± 0.024 √K', '± 0.012 √K', '± 0.006 √K', '± 0.100 √K'],
        correctOptionIndex: 0,
        explanation: 'Standard permissible limits: Ordinary Levelling = ± 0.024 √K m, Precise Levelling = ± 0.006 √K m, Rough Levelling = ± 0.100 √K m.',
        rankerTip: 'Write down these four constants in your revision notebook. Very repeated in Surveyor Gr. 2.',
        topic: 'Levelling'
      },
      {
        id: 'mq-7',
        questionNumber: 7,
        question: 'Under Kerala Survey and Boundaries Act 1961, who is designated as the Director of Survey and Land Records?',
        questionMalayalam: 'കേരള സർവേ & അതിരടയാള നിയമത്തിൽ \'ഡയറക്ടർ ഓഫ് സർവേ & ലാൻഡ് റെക്കോർഡ്സ്\' എന്ന പദവിയുടെ ചുമതല ആർക്കാണ്?',
        options: [
          'Officer appointed by the State Government to be the Director of Survey and Land Records',
          'District Collector exclusively',
          'Tahsildar of the respective Taluk',
          'Survey Superintendent of Resurvey'
        ],
        correctOptionIndex: 0,
        explanation: 'As per Section 2(ii) of the Act, "Director" means an officer appointed by the Government to be the Director of Survey and Land Records.',
        rankerTip: 'Always check Section 2 Definitions in Kerala Survey Act.',
        topic: 'Kerala Survey & Boundaries Act'
      },
      {
        id: 'mq-8',
        questionNumber: 8,
        question: 'In Total Station, what is the purpose of the Atmospheric Correction (PPM setting)?',
        questionMalayalam: 'ടോട്ടൽ സ്റ്റേഷനിൽ അറ്റ്മോസ്ഫെറിക് കറക്ഷൻ (PPM Setting) ക്രമീകരിക്കുന്നത് എന്തിനാണ്?',
        options: [
          'To correct for changes in air temperature and atmospheric pressure affecting velocity of light',
          'To align the crosshairs with the vertical prism pole',
          'To calculate battery backup percentage',
          'To adjust tilt sensor automatically'
        ],
        correctOptionIndex: 0,
        explanation: 'The speed of electromagnetic waves varies with atmospheric temperature and barometric pressure. The Total Station microchip applies a Parts Per Million (PPM) correction factor.',
        rankerTip: 'Standard reference atmosphere is 15°C and 1013.25 hPa (760 mm Hg).',
        topic: 'Total Station & Modern Tech'
      },
      {
        id: 'mq-9',
        questionNumber: 9,
        question: 'The scale of a cadastral survey map is 1:2000. If an agricultural parcel measures 4 cm x 5 cm on the map, its true area in Hectares is:',
        questionMalayalam: '1:2000 സ്കെയിലിലുള്ള ഒരു മാപ്പിൽ 4 cm x 5 cm വിസ്തീർണ്ണമുള്ള ഭൂമിയുടെ യഥാർത്ഥ വിസ്തീർണ്ണം എത്ര ഹെക്ടറാണ്?',
        options: ['0.8 Hectares', '8.0 Hectares', '80.0 Hectares', '0.08 Hectares'],
        correctOptionIndex: 0,
        explanation: 'Map dimensions: Length = 5 cm x 2000 = 10,000 cm = 100 m. Width = 4 cm x 2000 = 8,000 cm = 80 m. True Area = 100 m x 80 m = 8,000 m². Since 1 Hectare = 10,000 m², Area = 8,000 / 10,000 = 0.8 Hectares.',
        rankerTip: 'Area on Ground = Map Area x (Scale Factor)². 20 cm² x 2000² = 80,000,000 cm² = 8000 m² = 0.8 Ha.',
        topic: 'Engineering Drawing & Scales'
      },
      {
        id: 'mq-10',
        questionNumber: 10,
        question: 'In Kerala Water Authority water supply pipelines, the minimum cover provided above the crown of the pipe in normal road trenches is generally:',
        questionMalayalam: 'കെ.ഡബ്ല്യു.എ വാട്ടർ പൈപ്പ് ലൈനുകൾ സ്ഥാപിക്കുമ്പോൾ റോഡ് നിരപ്പിൽ നിന്നും മുകളിലേക്ക് നൽകേണ്ട കുറഞ്ഞ കവർ (Minimum Cover) എത്ര?',
        options: ['1.0 metre', '0.3 metre', '2.5 metres', '5.0 metres'],
        correctOptionIndex: 0,
        explanation: 'As per KWA & CPHEEO manual specifications, a minimum soil cover of 1.0 m (1000 mm) above the crown of the pipe is maintained under vehicular traffic roads to prevent impact wheel damage.',
        rankerTip: 'Important for KWA Overseer/Surveyor technical papers.',
        topic: 'KWA Specific Topics'
      }
    ]
  },
  {
    id: 'mock-2',
    title: 'Total Station, GPS & Digital Resurvey Special Test',
    category: 'Module Specific',
    description: 'Focus test on modern surveying instruments, EDM, RTK DGPS, ETS coordinate calculations and Kerala Ente Bhoomi project.',
    durationMinutes: 20,
    totalQuestions: 5,
    marksPerCorrect: 1,
    negativeMarksPerWrong: 0.33,
    totalMarks: 5,
    difficulty: 'Moderate',
    attemptsCount: 215,
    questions: [
      {
        id: 'mq2-1',
        questionNumber: 1,
        question: 'The carrier wavelength used in phase comparison EDM instruments typically belongs to:',
        questionMalayalam: 'ഫേസ് കമ്പാരിസൺ EDM ഉപകരണങ്ങളിൽ ഉപയോഗിക്കുന്ന കാരിയർ തരംഗങ്ങൾ ഏവ?',
        options: ['Infrared & Visible light', 'Radio frequencies only', 'Ultra Violet rays', 'Sound waves'],
        correctOptionIndex: 0,
        explanation: 'Phase comparison EDM instruments use visible light (He-Ne laser, ~632.8 nm) or Near Infrared GaAs diodes (~900 nm).',
        topic: 'Total Station & Modern Tech'
      },
      {
        id: 'mq2-2',
        questionNumber: 2,
        question: 'In DGPS (Differential GPS), the purpose of the Reference Base Station is to:',
        questionMalayalam: 'DGPS സർവേയിൽ ബേസ് സ്റ്റേഷൻ (Base Station) സ്ഥാപിക്കുന്നതിന്റെ പ്രധാന ഉദ്ദേശ്യം എന്താണ്?',
        options: [
          'Calculate pseudo-range satellite timing errors at a known benchmark and broadcast corrections to the Rover',
          'Record battery voltages of all satellites',
          'Provide internet wifi to the surveyor',
          'Store photographs of the boundary stones'
        ],
        correctOptionIndex: 0,
        explanation: 'Base station is fixed over a known coordinate pillar. It calculates satellite clock and atmospheric delays in real time and transmits differential corrections (RTK) to the moving Rover.',
        topic: 'Total Station & Modern Tech'
      },
      {
        id: 'mq2-3',
        questionNumber: 3,
        question: 'The minimum number of GPS satellites required to determine 3D position (Latitude, Longitude, Altitude) and receiver clock bias is:',
        questionMalayalam: 'ഭൂമിയിലെ ഒരു ബിന്ദുവിന്റെ 3D പൊസിഷൻ കൃത്യമായി കണക്കാക്കാൻ കുറഞ്ഞത് എത്ര GPS ഉപഗ്രഹങ്ങൾ ആവശ്യമാണ്?',
        options: ['4 satellites', '3 satellites', '2 satellites', '1 satellite'],
        correctOptionIndex: 0,
        explanation: '4 satellites are mathematically required: 3 for spatial coordinates (X, Y, Z) and 1 to eliminate the receiver clock bias error (t).',
        topic: 'Total Station & Modern Tech'
      },
      {
        id: 'mq2-4',
        questionNumber: 4,
        question: 'What is the coordinate transformation typically used when converting GPS WGS-84 coordinates to local Everest/UTM projection in Kerala?',
        questionMalayalam: 'WGS-84 കോർഡിനേറ്റുകളെ ലോക്കൽ സിസ്റ്റത്തിലേക്ക് മാറ്റാൻ ഉപയോഗിക്കുന്ന ട്രാൻസ്ഫോർമേഷൻ ഏത്?',
        options: ['7-Parameter Helmert Transformation', 'Simple Linear addition', 'Bowditch Transformation', 'Simpson\'s 1/3 transformation'],
        correctOptionIndex: 0,
        explanation: 'Helmert 7-Parameter Transformation (3 translations ΔX, ΔY, ΔZ, 3 rotations Rx, Ry, Rz, and 1 scale factor S) is the standard method used in surveying.',
        topic: 'Total Station & Modern Tech'
      },
      {
        id: 'mq2-5',
        questionNumber: 5,
        question: 'What is the term for the measurement offset that occurs due to the distance between the glass prism apex and the prism holding thread?',
        questionMalayalam: 'പ്രിസത്തിന്റെ അപെക്സും ഹോൾഡിംഗ് ത്രെഡും തമ്മിലുള്ള ദൂരം കാരണം വരുന്ന തിരുത്തലിന് എന്ത് പറയുന്നു?',
        options: ['Prism Constant (Prism Offset)', 'Refraction Constant', 'Index Error', 'Zero Collimation Constant'],
        correctOptionIndex: 0,
        explanation: 'The Prism Constant (typically -30mm or 0mm) is entered in the Total Station setup to compensate for light speed inside glass prism and mechanical mount offset.',
        topic: 'Total Station & Modern Tech'
      }
    ]
  }
];

export const INITIAL_DOUBTS: Doubt[] = [
  {
    id: 'd-1',
    userId: 'u-std-1',
    userName: 'Anandu Krishnan',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    userDistrict: 'Thiruvananthapuram',
    title: 'Inverted staff reading calculation in Levelling field book',
    content: 'Sir, when calculating the Reduced Level (RL) of a ceiling/soffit using Height of Instrument (HI) method, why do we add the staff reading to HI instead of subtracting? Can you please clarify with a quick formula?',
    topic: 'Levelling',
    relatedClassId: 'note-3',
    createdAt: '2026-08-25T10:30:00Z',
    upvotes: 18,
    isResolved: true,
    answers: [
      {
        id: 'ans-1',
        doubtId: 'd-1',
        authorName: 'Joseph Josey (Course Director)',
        authorRole: 'instructor',
        authorRankBadge: 'Course Director & Faculty',
        authorAvatar: '/instructor_joseph_josey.png',
        content: 'Excellent question Anandu! Normally, when staff is held upright on ground: RL = HI - Staff Reading. But for an inverted staff (held upside down against a roof/soffit), the staff reading is physically situated ABOVE the Line of Collimation. Mathematically: RL of Soffit = HI - (- Staff Reading) = HI + Staff Reading. In Kerala PSC exams, just remember: for inverted staff reading, ADD it to the HI!',
        createdAt: '2026-08-25T11:15:00Z',
        isVerifiedInstructor: true
      }
    ]
  },
  {
    id: 'd-2',
    userId: 'u-std-2',
    userName: 'Sneha Mohan',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    userDistrict: 'Kozhikode',
    title: 'Difference between Section 6 and Section 9 in Kerala Survey & Boundaries Act',
    content: 'Is Section 6 the general notification and Section 9 the individual boundary notice to registered landholders? In PYQ 2024 both options were given.',
    topic: 'Kerala Survey & Boundaries Act',
    relatedClassId: 'note-6',
    createdAt: '2026-08-25T14:10:00Z',
    upvotes: 24,
    isResolved: true,
    answers: [
      {
        id: 'ans-2',
        doubtId: 'd-2',
        authorName: 'Joseph Josey (Course Director)',
        authorRole: 'instructor',
        authorRankBadge: 'Course Director & Faculty',
        authorAvatar: '/instructor_joseph_josey.png',
        content: 'Yes Sneha! Under Section 6, the Government issues a public Gazette notification ordering survey of lands. Under Section 9, the Survey Officer issues a specific notice requiring registered landholders to attend and point out/clear their boundaries. Section 13 is the notification of completion of survey. Memorize this sequence: 6 (Start) -> 9 (Boundary notice) -> 10 (Determination) -> 13 (Completion).',
        createdAt: '2026-08-25T15:00:00Z',
        isVerifiedInstructor: true
      }
    ]
  },
  {
    id: 'd-3',
    userId: 'u-std-3',
    userName: 'Rahul Varma',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    userDistrict: 'Ernakulam',
    title: 'How to tackle negative marking (-0.33) in Surveyor Grade II exam?',
    content: 'Sir, I usually attempt 90+ questions in mock tests and end up losing 8-10 marks in negative deductions. What is the recommended strategy for Survey & Land Records?',
    topic: 'Kerala PSC Strategy',
    createdAt: '2026-08-25T16:20:00Z',
    upvotes: 35,
    isResolved: true,
    answers: [
      {
        id: 'ans-3',
        doubtId: 'd-3',
        authorName: 'Joseph Josey (Course Director)',
        authorRole: 'instructor',
        authorRankBadge: 'Course Director & Faculty',
        authorAvatar: '/instructor_joseph_josey.png',
        content: 'Great query Rahul. In technical exams like Survey & Land Records, the cut-off is determined by conceptual accuracy rather than blind guessing. My strategy was 3-rounds: Round 1 (100% sure technical questions: ~55-65 Qs in 40 mins), Round 2 (50-50 elimination where you have eliminated 2 options: ~15-20 Qs), Round 3 (Strictly leave questions where you have zero idea). Never guess blindly because losing 3 wrong answers costs you 1 mark + lost potential mark = 4 marks deficit!',
        createdAt: '2026-08-25T17:10:00Z',
        isVerifiedInstructor: true
      }
    ]
  }
];

export const DEMO_STUDENT: User = {
  id: '11550992-238a-4e9c-ad5f-a95edef72423',
  name: 'JOSEPH JOSEY',
  email: 'josephjosey19@gmail.com',
  phone: '',
  role: 'student',
  avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIaBMAwuWUqnDUrEGQPCwFlLpQ8gGRd7SPCQvnJWg0-LuEwH_qu=s96-c',
  enrolledAt: '2026-08-27',
  district: 'Idukki',
  targetExam: 'Kerala Water Authority 3rd Grade Overseer',
  completedClassIds: [],
  bookmarkedClassIds: [],
  savedPYQIds: [],
  streakDays: 1,
  subscriptionPlan: 'free',
  stateRank: 2,
  percentile: 0.0,
  mockScore: 1.01
};

export const DEMO_INSTRUCTOR: User = {
  id: 'u-instructor-1',
  name: 'Joseph Josey',
  email: 'joseph.surveyrankers@gmail.com',
  phone: '+91 94470 00000',
  role: 'instructor',
  avatar: '/instructor_joseph_josey.png',
  enrolledAt: '2025-01-01',
  district: 'Idukki',
  targetExam: 'Instructor & Course Director (Kerala PSC Survey & KWA)',
  completedClassIds: ['note-1', 'note-2'],
  bookmarkedClassIds: [],
  savedPYQIds: [],
  streakDays: 60
};

export const ENROLLED_STUDENTS_LIST: User[] = [
  DEMO_STUDENT,
  {
    id: '55f5d228-0fbe-49a4-abe2-261e343dbf12',
    name: 'Mariya Josey',
    email: 'mariyajosey09@gmail.com',
    phone: '',
    role: 'student',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    enrolledAt: '2026-08-28',
    district: 'Idukki',
    targetExam: 'Kerala PSC Surveyor Gr. II',
    completedClassIds: [],
    bookmarkedClassIds: [],
    savedPYQIds: [],
    streakDays: 1,
    subscriptionPlan: 'free',
    stateRank: 1,
    percentile: 100.0,
    mockScore: 4.37
  }
];

export const INITIAL_STATEWIDE_ATTEMPTS: MockTestAttempt[] = [
  // =========================================================================
  // 1. KERALA PSC SURVEYOR GRADE II & OVERSEER - 87 MCQ MASTER TEST SERIES
  // =========================================================================
  {
    id: 'att-real-mariya-87',
    testId: 'mock-kpsc-master-87',
    userId: '55f5d228-0fbe-49a4-abe2-261e343dbf12',
    userName: 'Mariya Josey',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    district: 'Idukki',
    startedAt: '2026-08-28T04:25:00Z',
    submittedAt: '2026-08-28T04:27:04Z',
    answers: {},
    markedForReview: [],
    score: 4.37,
    correctCount: 8,
    wrongCount: 11,
    unattemptedCount: 68,
    accuracy: 42.0,
    timeSpentSeconds: 124,
    rank: 1,
    percentile: 100.0
  },
  {
    id: 'att-real-joseph-87',
    testId: 'mock-kpsc-master-87',
    userId: '11550992-238a-4e9c-ad5f-a95edef72423',
    userName: 'JOSEPH JOSEY',
    userAvatar: 'https://lh3.googleusercontent.com/a/ACg8ocIaBMAwuWUqnDUrEGQPCwFlLpQ8gGRd7SPCQvnJWg0-LuEwH_qu=s96-c',
    district: 'Palakkad',
    startedAt: '2026-08-28T04:20:00Z',
    submittedAt: '2026-08-28T04:20:18Z',
    answers: {},
    markedForReview: [],
    score: 1.01,
    correctCount: 2,
    wrongCount: 3,
    unattemptedCount: 82,
    accuracy: 40.0,
    timeSpentSeconds: 18,
    rank: 2,
    percentile: 0.0
  }
];
