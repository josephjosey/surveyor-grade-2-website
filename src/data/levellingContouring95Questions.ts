import { BankQuestion, MockTest } from '../types';

export const LEVELLING_CONTOURING_95_QUESTIONS: BankQuestion[] = [
  {
    "id": "bq-levelling-q1",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "A series of closed contour lines on the map indicate a hill",
    "options": [
      "If higher values are outside",
      "If higher values are inside",
      "If higher values are middle",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "A series of closed contour lines with higher elevation values inside represents a hill. If lower values are inside, it represents a pond or depression.",
    "rankerTip": "Higher values inside = Hill; Lower values inside = Depression/Pond.",
    "topic": "Characteristics of Contours - Hill",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q2",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Contour lines are lines drawn on a map connecting points of equal :",
    "options": [
      "Rainfall",
      "Temperature",
      "Distance",
      "Elevation"
    ],
    "correctOptionIndex": 3,
    "explanation": "A contour line is an imaginary line on the ground surface joining points of equal elevation above a chosen datum.",
    "rankerTip": "Isohyets connect points of equal rainfall; Isotherms connect points of equal temperature; Contours connect points of equal elevation.",
    "topic": "Contour Definition",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q3",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "If the contour lines are equally spaced, they indicate",
    "options": [
      "Plain ground",
      "Steep slope",
      "Uniform slope",
      "Valley"
    ],
    "correctOptionIndex": 2,
    "explanation": "Equally spaced contour lines indicate a uniform slope. Closely spaced contours indicate a steep slope, while widely spaced contours indicate a gentle slope.",
    "rankerTip": "Uniform spacing = Uniform slope; Closely spaced = Steep slope; Widely spaced = Gentle slope.",
    "topic": "Characteristics of Contours - Slope",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q4",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which one of the following is not a contouring software package?",
    "options": [
      "Map info",
      "Geographic Exploration system",
      "TRANSYT",
      "AutoCAD"
    ],
    "correctOptionIndex": 2,
    "explanation": "TRANSYT (Traffic Network Study Tool) is a traffic signal coordination program, not a contouring or GIS software.",
    "rankerTip": "MapInfo, ArcGIS, Surfer, Civil 3D, and AutoCAD are widely used for topographic and contour mapping.",
    "topic": "Contouring Software Packages",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q5",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The process of spacing of contour proportionally between the plotted ground points is termed as :",
    "options": [
      "Interpolation of contours",
      "Vertical cliff",
      "Tracing the contours",
      "Saddle"
    ],
    "correctOptionIndex": 0,
    "explanation": "Interpolation of contours is the process of proportionally calculating and spacing contour lines between plotted spot levels on a plan.",
    "rankerTip": "Methods of interpolation: (1) Estimation, (2) Arithmetical calculation, (3) Graphical method.",
    "topic": "Interpolation of Contours",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q6",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The direct method of contouring is :",
    "options": [
      "quick method",
      "accurate method",
      "Used for very large areas",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "The direct method of contouring is the most accurate method because points on the actual contour lines are physically located on the ground and surveyed.",
    "rankerTip": "Direct method is slow, tedious, and costly, but gives the highest accuracy for small areas.",
    "topic": "Methods of Contouring - Direct Method",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q7",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The alignment of highways are generally taken along",
    "options": [
      "Ridge line",
      "Valley line",
      "The same gradient line",
      "Plain land"
    ],
    "correctOptionIndex": 0,
    "explanation": "Highways and railways are generally aligned along the ridge line (watershed line) to avoid cross-drainage structures such as culverts and bridges.",
    "rankerTip": "Ridge line alignment minimizes drainage crossings; canals are also aligned along ridge lines.",
    "topic": "Uses of Contours - Highway Alignment",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q8",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which indirect method of contouring is suitable for long and narrow strips of land?",
    "options": [
      "Square",
      "Tacheometry",
      "Cross-section",
      "Direct"
    ],
    "correctOptionIndex": 2,
    "explanation": "The cross-section method of indirect contouring is best suited for route surveys like roads, railways, and canals (long, narrow strips).",
    "rankerTip": "Route surveys (roads/railways/canals) = Cross-section method; Small flat areas = Square method; Hilly terrain = Tacheometric method.",
    "topic": "Methods of Contouring - Cross Sections",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q9",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What is the nature of the earth work if the ground level is less than the formation level?",
    "options": [
      "Filling",
      "Cutting",
      "Drilling",
      "Levelling"
    ],
    "correctOptionIndex": 0,
    "explanation": "When Ground Level (GL) is less than Formation Level (FL), earth must be deposited to bring the ground up to the required formation, which is Filling (Embankment).",
    "rankerTip": "GL < FL => Filling (Embankment); GL > FL => Cutting (Excavation).",
    "topic": "Earthwork Calculations - Formation Level",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q10",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which area is suitable for square method of indirect contouring?",
    "options": [
      "Large",
      "Heavy undulating",
      "Small and low undulating",
      "Hilly"
    ],
    "correctOptionIndex": 2,
    "explanation": "The square (grid) method of indirect contouring is used for small, relatively flat, or low undulating grounds.",
    "rankerTip": "Grid/Square method is impractical in heavy undulating or hilly ground.",
    "topic": "Methods of Contouring - Square Method",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q11",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What is the nature of earth work if the G.L. is 300 and F.L. is 280?",
    "options": [
      "Cutting",
      "Filling",
      "Levelling",
      "Stuffing"
    ],
    "correctOptionIndex": 0,
    "explanation": "Here GL = 300 m and FL = 280 m. Since GL > FL, ground must be cut down by 20 m, which is Cutting.",
    "rankerTip": "GL (300) > FL (280) => Cutting of 20 m.",
    "topic": "Earthwork Computations",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q12",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "An imaginary line joining the points of equal elevation on the surface of the earth represents",
    "options": [
      "Horizontal line",
      "Level line",
      "Contour line",
      "Plumb line"
    ],
    "correctOptionIndex": 2,
    "explanation": "An imaginary line joining points of equal elevation on the surface of the earth represents a contour line.",
    "rankerTip": "A level line is normal to the plumb line at all points; a contour line connects points of equal elevation.",
    "topic": "Contour Definition",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q13",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "An imaginary line lying throughout on the surface of the ground and preserving a constant inclination to the horizontal is called",
    "options": [
      "contour line",
      "contour gradient",
      "Level line",
      "Line of gentle slope"
    ],
    "correctOptionIndex": 1,
    "explanation": "A contour gradient (grade contour) is a line lying on the surface of the ground preserving a constant inclination to the horizontal.",
    "rankerTip": "Contour lines are horizontal (0 inclination); Contour gradient maintains a constant specified slope.",
    "topic": "Contour Gradient",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q14",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which instrument is used for tracing contour points directly in the field?",
    "options": [
      "Chain",
      "Prismatic compass",
      "Hand level",
      "Planimeter"
    ],
    "correctOptionIndex": 2,
    "explanation": "A hand level (or Ceylon Ghat tracer / Abney level) is commonly used for tracing contour points or grade contours directly in the field.",
    "rankerTip": "Hand level is a compact instrument for direct field contour tracing.",
    "topic": "Instruments used in Contouring",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q15",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The vertical distance between the two adjacent contours is known as",
    "options": [
      "Rise",
      "Reduced level",
      "Horizontal Equivalent",
      "Contour interval"
    ],
    "correctOptionIndex": 3,
    "explanation": "The vertical distance between any two consecutive contour lines is called the contour interval (CI).",
    "rankerTip": "Vertical distance = Contour interval; Horizontal distance = Horizontal equivalent.",
    "topic": "Contour Interval",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q16",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What method of contouring is used for small areas work with high precision?",
    "options": [
      "Indirect method",
      "Cross section method",
      "Direct method",
      "Square method"
    ],
    "correctOptionIndex": 2,
    "explanation": "The direct method of contouring is used where high precision is required for small areas.",
    "rankerTip": "High precision + small area = Direct method.",
    "topic": "Methods of Contouring - Precision",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q17",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "A contour map of the area is essential before proceeding with the construction of :",
    "options": [
      "Building",
      "Swimming pool",
      "Bridge",
      "Dam"
    ],
    "correctOptionIndex": 3,
    "explanation": "Before proceeding with the construction of a dam or reservoir, a contour map is essential to calculate the catchment area, reservoir capacity, and flood levels.",
    "rankerTip": "Dam/Reservoir capacity calculations require accurate contour maps.",
    "topic": "Uses of Contour Maps - Reservoir & Dam",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q18",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Two contour lines, having the same elevation",
    "options": [
      "Cannot cross each other",
      "Can cross each other",
      "Cannot unite together",
      "Can unite together"
    ],
    "correctOptionIndex": 3,
    "explanation": "Two contour lines of the same elevation can unite together when they represent the opposite sides of the same valley or ridge meeting at a saddle or gap.",
    "rankerTip": "Contours of different elevations cannot cross except in overhanging cliff or cave; contours of same elevation can unite.",
    "topic": "Characteristics of Contours",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q19",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What minimum number of cross-sections required for applying prismoidal formula in volume calculations?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctOptionIndex": 2,
    "explanation": "Prismoidal formula V = (d/3) * [A1 + 4*A2 + A3] requires an odd number of cross-sections, with a minimum of 3 cross-sections.",
    "rankerTip": "Prismoidal formula requires a minimum of 3 cross-sections (odd number of sections).",
    "topic": "Volume Calculation - Prismoidal Formula",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q20",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What is the controlling factor for locating a highway or canal on a contour map?",
    "options": [
      "Scale",
      "Horizontal equivalent",
      "Gradient line",
      "Linear measurement"
    ],
    "correctOptionIndex": 2,
    "explanation": "The gradient line (ruling gradient) is the primary controlling factor for locating highways, railways, and canals on a contour map.",
    "rankerTip": "Ruling gradient controls the alignment of routes across contour maps.",
    "topic": "Route Alignment - Gradient Line",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q21",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which method of interpolation is rapid, approximate result and used for small scale map?",
    "options": [
      "By estimation",
      "Arithmetical calculation",
      "Graphical",
      "Tracing paper"
    ],
    "correctOptionIndex": 0,
    "explanation": "Interpolation by estimation is a rough, rapid method where contour points are marked by eye judgment, suitable for small-scale maps.",
    "rankerTip": "Rapid & approximate = Estimation; Most accurate & tedious = Arithmetical calculation; Accurate & quick = Graphical method.",
    "topic": "Interpolation by Estimation",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q22",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which instrument is used for establishing grade contour?",
    "options": [
      "Abney level",
      "Prismatic compass",
      "Telescopic alidade",
      "Pentagraph"
    ],
    "correctOptionIndex": 0,
    "explanation": "An Abney level (or Ceylon Ghat tracer) is used to establish and trace grade contours (lines of uniform gradient) on ground.",
    "rankerTip": "Abney level and Ghat tracer are specifically used for setting grade contours.",
    "topic": "Instruments for Grade Contour",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q23",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "In direct method of contouring the process of locating point lying on a contour is known as",
    "options": [
      "Horizontal control",
      "Ranging",
      "Vertical control",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Finding points on the ground having the exact elevation of the contour using a level and staff is vertical control.",
    "rankerTip": "Vertical control = Finding points on the contour; Horizontal control = Surveying their plan positions.",
    "topic": "Direct Contouring - Vertical Control",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q24",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The contour interval, within limits of a map :",
    "options": [
      "May be kept constant",
      "May not be kept constant",
      "Must be kept constant",
      "May vary according to slope of the ground"
    ],
    "correctOptionIndex": 2,
    "explanation": "The contour interval on any single map must be kept constant throughout to avoid misleading representations of slopes.",
    "rankerTip": "Contour interval MUST be constant on a given map.",
    "topic": "Contour Interval Constancy",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q25",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Contour bunding is suitable for",
    "options": [
      "Plain area",
      "Dried up area",
      "Hilly area",
      "Water logged area"
    ],
    "correctOptionIndex": 2,
    "explanation": "Contour bunding is a soil and water conservation method practiced in sloping and hilly areas to prevent soil erosion.",
    "rankerTip": "Contour bunding is ideal for hilly/sloping land with moderate rainfall.",
    "topic": "Contour Bunding",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q26",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Contour interval for mountainous region is",
    "options": [
      "2 m",
      "5 m",
      "10 m",
      "20 m"
    ],
    "correctOptionIndex": 0,
    "explanation": "For general engineering surveys in hilly/mountainous terrain, a contour interval of 2 m (or 5 m depending on scale) is commonly adopted.",
    "rankerTip": "Official answer as per Kerala PSC syllabus: 2 m.",
    "topic": "Contour Interval Selection",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q27",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Locating points on a given contour gradient can be done by",
    "options": [
      "Planimeter",
      "Ghat tracer",
      "Clinometer",
      "Pantograph"
    ],
    "correctOptionIndex": 1,
    "explanation": "A Ceylon Ghat tracer is specifically designed for locating points on a given contour gradient (grade contour).",
    "rankerTip": "Ghat tracer = locating points on a contour gradient.",
    "topic": "Ceylon Ghat Tracer",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q28",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which line joins the points on different contour having same gradient?",
    "options": [
      "Contour line",
      "Profile",
      "Contour gradient",
      "Contour sections"
    ],
    "correctOptionIndex": 2,
    "explanation": "A contour gradient (grade contour) connects points on consecutive contours having a uniform slope/gradient.",
    "rankerTip": "Same gradient line crossing contours = Contour gradient.",
    "topic": "Contour Gradient",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q29",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Ceylon Ghat tracer is an instrument incorporated with",
    "options": [
      "Contouring",
      "Levelling",
      "Theodolite traverse",
      "Ranging"
    ],
    "correctOptionIndex": 0,
    "explanation": "The Ceylon Ghat tracer is an instrument used in contouring to set out grade contours along hill roads.",
    "rankerTip": "Ghat tracer is an essential tool in contouring and hill road alignments.",
    "topic": "Ceylon Ghat Tracer Application",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q30",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "For hilly region the ideal method of contouring is",
    "options": [
      "Direct method",
      "Method of squares",
      "Cross-section method",
      "Radial line method"
    ],
    "correctOptionIndex": 3,
    "explanation": "The radial line (tacheometric) method is ideal for hilly country as rays are radiated from a central instrument station without needing physical chainage.",
    "rankerTip": "Hilly country ideal method = Radial line (Tacheometric) method.",
    "topic": "Contouring Hilly Terrain",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q31",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What instrument is used to prepare curved lines for inking the map?",
    "options": [
      "Protractor",
      "Ink compass",
      "French curve",
      "Bow - compass"
    ],
    "correctOptionIndex": 2,
    "explanation": "French curves are used to draw and ink smooth irregular curved lines such as contours on survey maps.",
    "rankerTip": "Irregular smooth curved lines = French curve.",
    "topic": "Drawing Instruments - French Curve",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q32",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "A closed contour line with one or more higher value inside represents",
    "options": [
      "Valley",
      "Hill",
      "Pond",
      "Well"
    ],
    "correctOptionIndex": 1,
    "explanation": "Closed contours with higher values inside indicate a hill.",
    "rankerTip": "Higher values inside = Hill; Lower values inside = Depression/Pond.",
    "topic": "Characteristics of Contours - Hill",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q33",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What is another name of contouring by spot levels?",
    "options": [
      "Direct method",
      "Indirect method",
      "Radial line method",
      "Intersection method"
    ],
    "correctOptionIndex": 1,
    "explanation": "Contouring by spot levels (taking levels at selected points and interpolating) is called the Indirect method of contouring.",
    "rankerTip": "Spot levelling followed by interpolation = Indirect method.",
    "topic": "Indirect Contouring",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q34",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which method of contouring is most accurate but slow and tedious?",
    "options": [
      "Direct method",
      "Indirect",
      "Square",
      "Cross-section"
    ],
    "correctOptionIndex": 0,
    "explanation": "The direct method is the most accurate, but it is slow and tedious because each point on every contour must be physically located on the ground.",
    "rankerTip": "Most accurate + slow/tedious = Direct method.",
    "topic": "Direct Contouring Characteristics",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q35",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What is the process of erecting stakes at a given elevation?",
    "options": [
      "Setting grade",
      "Plotting grade",
      "Tracing",
      "Contouring"
    ],
    "correctOptionIndex": 0,
    "explanation": "Setting grade (or grading) is the process of driving pegs or stakes into the ground so that their tops are at a specified formation elevation.",
    "rankerTip": "Driving stakes to required elevation = Setting grade.",
    "topic": "Setting Grade",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q36",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "A plane surface on a contour map is indicated by",
    "options": [
      "Far apart lines",
      "Close together lines",
      "Series of straight, parallel and equal spaced contours",
      "Mutually crossing contours"
    ],
    "correctOptionIndex": 2,
    "explanation": "A plane surface is represented by a series of straight, parallel, and equally spaced contour lines.",
    "rankerTip": "Straight, parallel, and equally spaced = Plane surface.",
    "topic": "Plane Surface Contours",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q37",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What measurements are plotted to a plan or a map?",
    "options": [
      "Linear measurement",
      "Angular measurement",
      "Vertical measurement",
      "Linear and angular measurement"
    ],
    "correctOptionIndex": 3,
    "explanation": "Both linear measurements (distances) and angular measurements (bearings/angles) are plotted to prepare a survey plan or map.",
    "rankerTip": "Plans plot horizontal linear and angular measurements.",
    "topic": "Survey Plotting",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q38",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The method used for interpolating contour points between two points :",
    "options": [
      "Rise and fall method",
      "Linear method",
      "Graphical method",
      "Reiteration method"
    ],
    "correctOptionIndex": 2,
    "explanation": "The graphical method is an efficient and accurate method of interpolating contours using proportional dividers or tracing paper.",
    "rankerTip": "Methods of interpolation: Estimation, Arithmetic calculation, Graphical.",
    "topic": "Interpolation Methods",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q39",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Contour lines cross ridge lines or valley lines at",
    "options": [
      "45\u00b0",
      "30\u00b0",
      "90\u00b0",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Contour lines always cross ridge lines and valley lines at right angles (90\u00b0).",
    "rankerTip": "Contours intersect both ridge lines and valley lines at exactly 90\u00b0.",
    "topic": "Contour Intersection with Ridge/Valley",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q40",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The horizontal distance between any two consecutive contours is called",
    "options": [
      "Vertical equivalent",
      "Horizontal equivalent",
      "Contour interval",
      "Contour gradient"
    ],
    "correctOptionIndex": 1,
    "explanation": "The horizontal distance between any two consecutive contour lines on a map is called the Horizontal Equivalent (HE).",
    "rankerTip": "Horizontal distance = Horizontal equivalent; Vertical distance = Contour interval.",
    "topic": "Horizontal Equivalent",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q41",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The computation of locating contours is known as :",
    "options": [
      "Interpolation",
      "Estimation",
      "Intersection",
      "Calculation"
    ],
    "correctOptionIndex": 0,
    "explanation": "The process of computing and locating contour points between spot levels is known as interpolation.",
    "rankerTip": "Interpolation = calculating intermediate contour positions between known points.",
    "topic": "Interpolation Definition",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q42",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "A series of straight, parallel and widely spaced contours represents",
    "options": [
      "steep surface",
      "flat surface",
      "inclined plane surface",
      "curved surface"
    ],
    "correctOptionIndex": 2,
    "explanation": "Straight, parallel, and widely spaced contours represent a gently inclined plane surface.",
    "rankerTip": "Straight and parallel = Plane surface; Widely spaced = Gentle/inclined slope.",
    "topic": "Characteristics of Contours",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q43",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The contour interval is inversely proportional to",
    "options": [
      "Scale of the map",
      "Fund available",
      "Purpose of map",
      "All of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Contour interval is inversely proportional to scale (smaller scale = larger CI), funds available (less funds = larger CI), and extent/purpose of map.",
    "rankerTip": "CI is inversely proportional to scale of map (1/Scale).",
    "topic": "Factors Affecting Contour Interval",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q44",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The need of drawing cross section from a contour map is to calculate",
    "options": [
      "Total length of road",
      "Slope",
      "Alignment",
      "Earth work"
    ],
    "correctOptionIndex": 3,
    "explanation": "Cross-sections drawn from a contour map are primarily used to calculate the volumes of earthwork (cutting and filling).",
    "rankerTip": "Cross-sections from contour map = Earthwork volume calculation.",
    "topic": "Cross Sections from Contour Map",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q45",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "In preliminary reconnaissance survey where great accuracy is not required, a compact hand instrument used for locating contours is",
    "options": [
      "Theodolite",
      "Tilting level",
      "Hand level",
      "Chain"
    ],
    "correctOptionIndex": 2,
    "explanation": "A hand level is a compact, portable instrument used in reconnaissance surveys where rapid approximate contouring is needed.",
    "rankerTip": "Compact hand instrument for rough contouring = Hand level.",
    "topic": "Hand Level in Reconnaissance",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q46",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which method is suitable for the contouring of hilly areas?",
    "options": [
      "Direct",
      "Square",
      "Cross-section",
      "Tacheometric"
    ],
    "correctOptionIndex": 3,
    "explanation": "The tacheometric method is the most suitable for contouring steep, broken, or hilly terrain where chaining is difficult or impossible.",
    "rankerTip": "Hilly/broken terrain = Tacheometric method.",
    "topic": "Contouring Hilly Areas - Tacheometric",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q47",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The square method of indirect contouring is commonly used in",
    "options": [
      "Hilly areas",
      "Nearly flat areas",
      "Flat areas",
      "Valleys"
    ],
    "correctOptionIndex": 1,
    "explanation": "The square (grid) method is commonly used for nearly flat or low undulating areas.",
    "rankerTip": "Nearly flat / gently rolling ground = Square method.",
    "topic": "Square Method Application",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q48",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "A 'T' shaped wooden rod used for setting out proper gradient between two points :",
    "options": [
      "'T' square",
      "Arrow",
      "Boning rod",
      "Cross pole"
    ],
    "correctOptionIndex": 2,
    "explanation": "A boning rod is a T-shaped wooden rod used in conjunction with sight rails to set out gradients for trenches, sewers, and pipes.",
    "rankerTip": "T-shaped rod for gradient setting = Boning rod.",
    "topic": "Boning Rods",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q49",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Stakes or pegs erected in a ground in such a way that their tops are at a given?",
    "options": [
      "Ground level",
      "Formation level",
      "Line of collimation",
      "Bench mark"
    ],
    "correctOptionIndex": 1,
    "explanation": "Grade pegs or stakes are driven into the ground so that their tops correspond exactly to the required formation level.",
    "rankerTip": "Tops of grade stakes = Formation level.",
    "topic": "Setting Grade Pegs",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q50",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "For route survey the most suitable method of contouring is :",
    "options": [
      "By squares",
      "By radial lines",
      "By cross sections",
      "By tachometer"
    ],
    "correctOptionIndex": 2,
    "explanation": "For route surveys (highways, railways, canals), the cross-section method is the most suitable method of contouring.",
    "rankerTip": "Route survey = Cross-section method.",
    "topic": "Route Survey Contouring",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q51",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Contour lines cannot cross each other except in case of :",
    "options": [
      "Ridge",
      "Valley",
      "Overhanging cliff",
      "Hill"
    ],
    "correctOptionIndex": 2,
    "explanation": "Contour lines cannot cross each other except in the rare case of an overhanging cliff or a natural cave.",
    "rankerTip": "Contours cross each other ONLY in an overhanging cliff or cave.",
    "topic": "Overhanging Cliff Exception",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q52",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which method of interpolation of contour is done with the help of tracing cloth?",
    "options": [
      "Estimation",
      "Arithmetical calculation",
      "Graphical method",
      "Judgment"
    ],
    "correctOptionIndex": 2,
    "explanation": "The graphical method of interpolation can be performed quickly with the help of a tracing cloth or tracing paper with parallel guide lines.",
    "rankerTip": "Tracing cloth / paper method = Graphical method.",
    "topic": "Graphical Interpolation",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q53",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "A pond is represented by a series of closed contours with increasing contour values",
    "options": [
      "Outside",
      "Middle",
      "Inside",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "A pond or depression has lower values in the center and increasing contour values towards the outside.",
    "rankerTip": "Values increase outside = Pond / Depression; Values increase inside = Hill.",
    "topic": "Characteristics of Contours - Pond",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q54",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The tachometric method of contouring is particularly suitable :",
    "options": [
      "When a contour map of a full hill is required",
      "When the area is not very extensive",
      "In survey of roads and railways",
      "All of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "The tacheometric method is particularly suitable when contouring an entire hill or rugged elevation where direct chaining is impossible.",
    "rankerTip": "Contour map of a hill = Tacheometric method.",
    "topic": "Tacheometric Contouring Applications",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q55",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "If the external contour is higher than internal contour, it is found to be a",
    "options": [
      "River",
      "Pond",
      "Hill",
      "Valley"
    ],
    "correctOptionIndex": 1,
    "explanation": "When external contours have higher elevations than internal contours, it represents a depression or pond.",
    "rankerTip": "External higher than internal = Pond / Depression.",
    "topic": "Characteristics of Contours - Depression",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q56",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The line of intersection of a level surface with the surface of ground is called :",
    "options": [
      "Contour interval",
      "Horizontal equivalent",
      "Reduced level",
      "Contour"
    ],
    "correctOptionIndex": 3,
    "explanation": "A contour line is the line of intersection of a level surface with the ground surface (e.g., shoreline of a still lake).",
    "rankerTip": "Intersection of a level surface with the ground = Contour line.",
    "topic": "Contour Definition",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q57",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The lines having equal gradient along a slope are called",
    "options": [
      "Contour intervals",
      "Centre slope",
      "Grade contour",
      "Contour gradient"
    ],
    "correctOptionIndex": 2,
    "explanation": "A line maintaining a constant gradient along a slope is called a grade contour (contour gradient).",
    "rankerTip": "Line of uniform gradient = Grade contour.",
    "topic": "Grade Contour",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q58",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "How the staff reading required to set given grade is calculated?",
    "options": [
      "Formation level - Height of instrument",
      "Formation level + height of instrument",
      "Ground level + B.S",
      "Ground level + F.S"
    ],
    "correctOptionIndex": 0,
    "explanation": "Staff reading for a given grade = Height of Instrument (HI) - Formation Level (FL).",
    "rankerTip": "Required staff reading = HI - Formation Level.",
    "topic": "Grade Rod Calculation",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q59",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What is the process of locating contour line on the surface of the earth?",
    "options": [
      "Contouring",
      "Relief",
      "Tracing",
      "Contour interval"
    ],
    "correctOptionIndex": 0,
    "explanation": "Contouring is the art and process of locating contour lines on the surface of the earth and plotting them on a map.",
    "rankerTip": "Process of locating contours = Contouring.",
    "topic": "Contouring Definition",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q60",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Volume of earth work from contour plan can be calculated by :",
    "options": [
      "Section method",
      "Horizontal planes method",
      "Equal depth method",
      "All of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Earthwork volumes from contour plans can be calculated by the cross-sections method, horizontal planes method, and equal depth method.",
    "rankerTip": "All three methods can be used to determine capacity and volume from contour plans.",
    "topic": "Earthwork Volume from Contours",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q61",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What is the term name for tracing the drawing by means of ink (inking) with order of tracing?",
    "options": [
      "Technique of tracing",
      "Method of reproduction",
      "Sequence of tracing",
      "Should be traced in tracing cloth"
    ],
    "correctOptionIndex": 0,
    "explanation": "The proper systematic procedure and order for inking and finishing survey drawings is known as the technique of tracing.",
    "rankerTip": "Official answer as per syllabus: Technique of tracing.",
    "topic": "Drafting - Technique of Tracing",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q62",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What staff reading is required for setting given grade?",
    "options": [
      "Change point",
      "Gradient",
      "Grade rod",
      "Stakes"
    ],
    "correctOptionIndex": 2,
    "explanation": "The staff reading required at any point to set out a given formation grade is known as the Grade Rod reading.",
    "rankerTip": "Grade rod = HI - Formation Level.",
    "topic": "Grade Rod",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q63",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which is the method used for locating contour points along the radial line from a common point at the centre?",
    "options": [
      "Indirect method",
      "Direct method",
      "Tacheometric method",
      "Square method"
    ],
    "correctOptionIndex": 1,
    "explanation": "When radial lines are pegged out from a central station and contour points are physically traced along these lines with a level, it is a direct method.",
    "rankerTip": "Direct contouring by radial lines from a central point.",
    "topic": "Direct Method - Radial Lines",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q64",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The contour interval depends upon the :",
    "options": [
      "Nature of the ground",
      "Scale of map",
      "Purpose of extend of survey",
      "All of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Contour interval depends on nature of ground, scale of map, purpose and extent of survey, and funds available.",
    "rankerTip": "CI depends on scale, terrain, purpose, time, and funds.",
    "topic": "Factors Influencing Contour Interval",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q65",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which method of contouring spot levels are taken along a series of lines laid over the area?",
    "options": [
      "Indirect",
      "Direct",
      "Radial line",
      "Intersection"
    ],
    "correctOptionIndex": 0,
    "explanation": "Taking spot levels along pre-determined grid lines or cross-sections and interpolating contours is the Indirect method.",
    "rankerTip": "Spot levels along grid/lines = Indirect method.",
    "topic": "Indirect Contouring - Spot Levels",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q66",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "If the higher values are inside the bend or loop in the contour, it indicates a :",
    "options": [
      "Ridge",
      "Valley",
      "Depression",
      "Same elevation"
    ],
    "correctOptionIndex": 0,
    "explanation": "U-shaped contours with higher values inside the loop indicate a ridge line. V-shaped contours with higher values outside indicate a valley line.",
    "rankerTip": "Higher values inside loop = Ridge; Higher values outside loop = Valley.",
    "topic": "Ridge vs Valley Contours",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q67",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which method of interpolation of contour is laborious, tedious but most accurate?",
    "options": [
      "Estimation",
      "Arithmetical calculation",
      "Graphical",
      "Judgement"
    ],
    "correctOptionIndex": 1,
    "explanation": "Arithmetical calculation is the most accurate method of interpolation because exact mathematical proportions are calculated, though it is slow and tedious.",
    "rankerTip": "Most accurate interpolation = Arithmetical calculation.",
    "topic": "Arithmetical Interpolation",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q68",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The common values of the contour interval adopted for reservoirs and town planning scheme",
    "options": [
      "0.5 m to 2 m",
      "2 m to 3 m",
      "3.5 m to 4.5 m",
      "Above 5 m"
    ],
    "correctOptionIndex": 0,
    "explanation": "For town planning schemes and reservoir surveys, detailed contours with intervals of 0.5 m to 2 m are typically adopted.",
    "rankerTip": "Reservoirs & Town planning = 0.5 m to 2 m.",
    "topic": "Standard Contour Intervals",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q69",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Contour map is used for",
    "options": [
      "Inter visibility between ground points",
      "Quantities of earth work",
      "Tracing route",
      "All of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Contour maps are used to determine intervisibility between stations, calculate earthwork quantities and reservoir capacities, and select route alignments.",
    "rankerTip": "Contour maps serve intervisibility, earthwork calculation, catchment determination, and route selection.",
    "topic": "Uses of Contour Maps",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q70",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The contour lines are perpendicular to the",
    "options": [
      "Ridge line",
      "Valley line",
      "Cliff",
      "Ridge line and Valley line"
    ],
    "correctOptionIndex": 3,
    "explanation": "Contour lines cross both ridge lines and valley lines at right angles (90\u00b0).",
    "rankerTip": "Contours are perpendicular to both ridge and valley lines.",
    "topic": "Ridge & Valley Contours",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q71",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "In which of the following cases several contours coincide, horizontal equivalent being zero?",
    "options": [
      "Overhanging cliff",
      "Hill",
      "Vertical Cliff",
      "Valley"
    ],
    "correctOptionIndex": 2,
    "explanation": "At a vertical cliff, contour lines of different elevations unite and coincide into a single line, meaning the horizontal equivalent is zero.",
    "rankerTip": "Several contours coincide into one line = Vertical cliff.",
    "topic": "Vertical Cliff",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q72",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Depression between summits is called :",
    "options": [
      "Vertical cliff",
      "Horizontal cliff",
      "Saddle",
      "Contour equivalent"
    ],
    "correctOptionIndex": 2,
    "explanation": "A depression or dip between two mountain peaks (summits) is called a saddle, col, or pass.",
    "rankerTip": "Depression between summits = Saddle / Col / Pass.",
    "topic": "Saddle / Pass",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q73",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Contour interval is",
    "options": [
      "Inversely proportional to the scale of map",
      "Directly proportional to the flatness of ground",
      "Larger for accurate works",
      "Smaller for accurate works"
    ],
    "correctOptionIndex": 0,
    "explanation": "Contour interval is inversely proportional to the scale of the map. As the scale becomes smaller, the contour interval must be larger.",
    "rankerTip": "Contour interval is inversely proportional to map scale.",
    "topic": "Contour Interval & Scale",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q74",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which map is used to determine the catchment area of drainage basins?",
    "options": [
      "Cadastral map",
      "Climatic map",
      "Political map",
      "Contour map"
    ],
    "correctOptionIndex": 3,
    "explanation": "A contour map is used to trace the ridge/watershed line surrounding a river basin and measure its catchment area using a planimeter.",
    "rankerTip": "Catchment basin / watershed area = Contour map.",
    "topic": "Catchment Area Determination",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q75",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The spacing of cross section in hilly country is usually :",
    "options": [
      "5 m",
      "10 m",
      "15 m",
      "20 m"
    ],
    "correctOptionIndex": 3,
    "explanation": "In route surveys through hilly terrain, cross-sections are commonly spaced at intervals of 20 m (or 15-20 m depending on ruggedness).",
    "rankerTip": "Official answer as per Kerala PSC syllabus: 20 m.",
    "topic": "Cross Section Spacing in Hilly Country",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q76",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Imaginary line formed by joining points of equal elevations on earth's surface is called",
    "options": [
      "Contour",
      "section",
      "bench mark",
      "single plane"
    ],
    "correctOptionIndex": 0,
    "explanation": "An imaginary line connecting points of equal elevation above a datum is called a contour line.",
    "rankerTip": "Points of equal elevation = Contour.",
    "topic": "Contour Definition",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q77",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "In double line river the contours are",
    "options": [
      "Stopped at the banks of the river",
      "Stopped at the edge of the river",
      "Drawn across the water",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "In a double-line river representation on topographic maps, contours stop at the edges/banks of the river bed.",
    "rankerTip": "Double line river = Contours stop at the water edges/banks.",
    "topic": "Contours Crossing Rivers",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q78",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "A set of close contours with higher values outside and lower figures inside indicate :",
    "options": [
      "Depression",
      "Vertical cliff",
      "Hill",
      "Ridge"
    ],
    "correctOptionIndex": 0,
    "explanation": "Closed contours with higher values outside and lower values inside represent a depression or pond.",
    "rankerTip": "Lower figures inside = Depression / Pond.",
    "topic": "Depression",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q79",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What is the nature of earth work if the G.L. is 218 and F.L. is 220?",
    "options": [
      "Cutting",
      "Filling",
      "Levelling",
      "Drilling"
    ],
    "correctOptionIndex": 1,
    "explanation": "Since Ground Level (218 m) is less than Formation Level (220 m), earth must be filled by 2 m, which is Filling.",
    "rankerTip": "GL < FL => Filling.",
    "topic": "Earthwork Computation",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q80",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "In indirect method of contouring, the best method of interpolation of contours is :",
    "options": [
      "By graphical method",
      "Arithmetical calculation",
      "By estimation",
      "All of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Arithmetical calculation is the most accurate and best method of interpolation, ensuring mathematically exact contour placement.",
    "rankerTip": "Best/most accurate interpolation = Arithmetical calculation.",
    "topic": "Best Interpolation Method",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q81",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which contour line is usually thicker than the rest in a contour map?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctOptionIndex": 3,
    "explanation": "Every fifth contour line is customarily drawn thicker (heavier) than intermediate contours and labelled with its elevation; this is called an Index Contour.",
    "rankerTip": "Every 5th contour line is drawn thicker (Index contour).",
    "topic": "Index Contours",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q82",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The best method of interpolation of contour is by :",
    "options": [
      "Computation",
      "Graphical means",
      "Estimation",
      "Empherical methods"
    ],
    "correctOptionIndex": 0,
    "explanation": "Interpolation by computation (arithmetical calculation) is the best and most rigorous method.",
    "rankerTip": "Best method of interpolation = Computation.",
    "topic": "Interpolation by Computation",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q83",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which is used to setout gradient for sewer?",
    "options": [
      "Sight rails and boning rods",
      "Sight rail only",
      "Boning rods only",
      "Ranging rods"
    ],
    "correctOptionIndex": 0,
    "explanation": "Sight rails fixed at known levels above trench formation and boning rods of matching length are used together to set out sewer pipe gradients.",
    "rankerTip": "Sewer trench gradient = Sight rails and boning rods.",
    "topic": "Setting Out Sewer Gradients",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q84",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "A series of closely spaced contour lines represents a",
    "options": [
      "Steep slope",
      "Gentle slope",
      "Uniform slope",
      "Plane surface"
    ],
    "correctOptionIndex": 0,
    "explanation": "Closely spaced contours indicate that elevation changes rapidly over a short horizontal distance, representing a steep slope.",
    "rankerTip": "Closely spaced = Steep slope; Widely spaced = Gentle slope.",
    "topic": "Steep Slope Contours",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q85",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What method of contour is suitable for small and low undulating area?",
    "options": [
      "By square method",
      "By cross section method",
      "By tachometry method",
      "By levelling method"
    ],
    "correctOptionIndex": 0,
    "explanation": "The square (grid) method is the most suitable indirect contouring method for small areas with low or gentle undulation.",
    "rankerTip": "Small and low undulating area = Square method.",
    "topic": "Square Grid Method",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q86",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "In the case of overhanging cliffs",
    "options": [
      "Two consecutive contours are parallel",
      "Two consecutive contours intersect in a contour map",
      "Two consecutive contours coincide each other",
      "All of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "In an overhanging cliff, contours cross/intersect each other because a point on the ground can have two different elevations at the same horizontal coordinate.",
    "rankerTip": "Overhanging cliff = Contours intersect / cross each other.",
    "topic": "Overhanging Cliff Intersection",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q87",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "In steep and broken ground, the most suitable method of contouring is",
    "options": [
      "By cross section",
      "By squares",
      "By spot levelling",
      "By tachometer"
    ],
    "correctOptionIndex": 3,
    "explanation": "In steep, broken, and inaccessible ground, tacheometric contouring is the most suitable method.",
    "rankerTip": "Steep & broken ground = Tachometer.",
    "topic": "Tacheometer in Broken Ground",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q88",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The limit of water level in a still lake represents :",
    "options": [
      "Horizontal surface",
      "Contour line",
      "Level surface",
      "Contour gradient"
    ],
    "correctOptionIndex": 1,
    "explanation": "The shoreline / water edge of a still lake or pond represents a true natural contour line on the earth's surface.",
    "rankerTip": "Water surface edge of a still lake = Contour line.",
    "topic": "Contour Line Example",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q89",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "V- shaped contours cross a",
    "options": [
      "Ridge line",
      "Valley line",
      "Saddle",
      "Pond"
    ],
    "correctOptionIndex": 1,
    "explanation": "V-shaped contours represent a valley line, with the apex (point) of the 'V' pointing upstream towards higher elevations.",
    "rankerTip": "V-shaped contours = Valley line; U-shaped contours = Ridge line.",
    "topic": "Valley Line Contours",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q90",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Contour interval is inversely proportional to :",
    "options": [
      "Scale of map",
      "Extend of area",
      "Nature of ground",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Contour interval is inversely proportional to the scale of the map. Larger scale = smaller interval; Smaller scale = larger interval.",
    "rankerTip": "CI \u221d 1 / (Scale of Map).",
    "topic": "Contour Interval vs Map Scale",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q91",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which method of contouring is unsuitable in hilly area?",
    "options": [
      "Direct",
      "Cross-section",
      "Tacheometric",
      "Indirect"
    ],
    "correctOptionIndex": 0,
    "explanation": "The direct method of contouring is slow, dangerous, and completely unsuitable in hilly, steep, or heavily wooded terrains.",
    "rankerTip": "Direct method is unsuitable in hilly terrain.",
    "topic": "Unsuitability of Direct Method",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q92",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Contour interval is kept higher when :",
    "options": [
      "Money available is limited",
      "Field work is smaller",
      "Work is not important",
      "Office work is smaller"
    ],
    "correctOptionIndex": 0,
    "explanation": "When funds and time are limited, a larger (higher) contour interval is adopted to reduce field and plotting costs.",
    "rankerTip": "Limited funds / economy = Larger contour interval.",
    "topic": "Economy & Contour Interval",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q93",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "On geographical map relief of earth surface is usually represented by",
    "options": [
      "Hachures",
      "Contours",
      "Shading",
      "Modules"
    ],
    "correctOptionIndex": 2,
    "explanation": "On small-scale geographical (atlas) maps, relief is typically shown by hill shading, layer tinting, or hachures.",
    "rankerTip": "Official answer as per Kerala PSC key: Shading (Hill shading/relief shading).",
    "topic": "Relief Representation on Geographical Maps",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q94",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What is the scale range used for the preparation of layout plan?",
    "options": [
      "1cm = 5m to 1cm = 10m",
      "1cm = 10m to 1cm = 20m",
      "1cm = .5Km to 1cm = 1Km",
      "1cm = 5Km to 1cm = 10Km"
    ],
    "correctOptionIndex": 1,
    "explanation": "Building and town site layout plans are commonly prepared on scales ranging from 1 cm = 10 m to 1 cm = 20 m (1:1000 to 1:2000).",
    "rankerTip": "Layout plan scale: 1 cm = 10 m to 1 cm = 20 m.",
    "topic": "Scale Range for Layout Plans",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
  {
    "id": "bq-levelling-q95",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "For preparation of contour plans for route surveys :",
    "options": [
      "Method of square is used",
      "Method of trace contour is used",
      "Method of cross - profile is used",
      "Indirect method of contouring is used"
    ],
    "correctOptionIndex": 2,
    "explanation": "For route surveys (roads, railways, canals), the method of cross-profiles (cross-sections) is universally used.",
    "rankerTip": "Route surveys = Cross-profiles (cross-sections).",
    "topic": "Route Survey Contour Plans",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Levelling & Contouring Bank",
    "year": 2024,
    "createdAt": "2026-09-06T10:00:00Z"
  },
];

export const MOCK_TEST_LEVELLING_95: MockTest = {
  id: 'mock-levelling-95',
  title: 'Levelling & Contouring 95 MCQ Master Practice Exam',
  category: 'Module Specific',
  description: 'Comprehensive 95-question examination covering Levelling terms, Contouring methods (Direct & Indirect), Characteristics of Contours, Interpolation, and Grade setting. Evaluated under authentic Kerala PSC pattern (-0.33 negative marking).',
  durationMinutes: 75,
  totalQuestions: 95,
  marksPerCorrect: 1,
  negativeMarksPerWrong: 0.33,
  totalMarks: 95,
  questions: LEVELLING_CONTOURING_95_QUESTIONS.map((q, idx) => ({
    id: q.id,
    questionNumber: idx + 1,
    question: q.question,
    options: q.options,
    correctOptionIndex: q.correctOptionIndex,
    explanation: q.explanation,
    rankerTip: q.rankerTip,
    topic: q.topic || 'Levelling and Contouring'
  })),
  difficulty: 'PSC Standard (Advanced)',
  attemptsCount: 142,
  examCode: 'KPSC-MOD-05-LEVELLING',
  targetDepartment: 'Kerala Survey & Land Records'
};
