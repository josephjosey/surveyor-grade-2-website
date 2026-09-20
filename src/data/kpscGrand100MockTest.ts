import { MockTest, MockQuestion } from '../types';

export const KPSC_GRAND_100_QUESTIONS: MockQuestion[] = [
  {
    "id": "grand100-q1",
    "questionNumber": 1,
    "question": "The areas of the two subsequent sizes of drawing papers are in the ratio:",
    "options": [
      "1 : √2",
      "1 : 2",
      "2 : 1",
      "√2 : 1"
    ],
    "correctOptionIndex": 1,
    "explanation": "According to standard paper sizing (ISO / BIS), each subsequent smaller size is obtained by halving the larger size along its longer dimension (A_{n+1} = 1/2 A_n). Thus, the ratio of areas of two consecutive sheet sizes is 1 : 2.",
    "rankerTip": "Area ratio of consecutive sheet sizes (e.g., A1 to A0) is 1:2. Length to width aspect ratio of any single standard sheet is √2 : 1 (1.414 : 1).",
    "topic": "Basic Engineering Drawing - Drawing Sheets - Dimensions & Ratios"
  },
  {
    "id": "grand100-q2",
    "questionNumber": 2,
    "question": "Instrument used to measure angles or drawing lines at the given angles is called as:",
    "options": [
      "Protractor",
      "Pro-circle",
      "Mini-drafter",
      "Compass"
    ],
    "correctOptionIndex": 0,
    "explanation": "A protractor is a semicircular or circular drafting tool graduated in degrees from 0° to 180° (or 360°) specifically designed to measure and plot angles.",
    "rankerTip": "Protractor measures and sets angles. Compass draws circles and arcs. Divider transfers dimensions.",
    "topic": "Basic Engineering Drawing - Drawing Instruments - Protractor"
  },
  {
    "id": "grand100-q3",
    "questionNumber": 3,
    "question": "The distance of the top view of a point A situated 20 mm below HP and 30 mm behind VP is:",
    "options": [
      "20 mm above xy line",
      "30 mm above xy line",
      "20 mm below xy line",
      "30 mm below xy line"
    ],
    "correctOptionIndex": 1,
    "explanation": "The point is in the 3rd quadrant (below HP, behind VP). When the horizontal plane is rotated 90° clockwise into the vertical plane, the portion behind VP rotates above the reference XY line. Thus, the top view lies 30 mm above the XY line, while the front view lies 20 mm below the XY line.",
    "rankerTip": "3rd quadrant: Top view is above XY line by distance behind VP (30 mm); Front view is below XY line by distance below HP (20 mm).",
    "topic": "Basic Engineering Drawing - Projections - Projection of Points (3rd Quadrant)"
  },
  {
    "id": "grand100-q4",
    "questionNumber": 4,
    "question": "Standard size of drawing sheets recommended by the Bureau of Indian Standards is:",
    "options": [
      "210 mm × 297 mm",
      "297 mm × 420 mm",
      "420 mm × 594 mm",
      "All of the above"
    ],
    "correctOptionIndex": 3,
    "explanation": "These are the trimmed sizes for standard drawing sheets specified by BIS (IS 10711): A4 (210 × 297 mm), A3 (297 × 420 mm), and A2 (420 × 594 mm).",
    "rankerTip": "Standard sizes: A0 (841×1189), A1 (594×841), A2 (420×594), A3 (297×420), A4 (210×297).",
    "topic": "Basic Engineering Drawing - Drawing Sheets - BIS Sheet Sizes"
  },
  {
    "id": "grand100-q5",
    "questionNumber": 5,
    "question": "Scale representing three different units such as metre, decimetre and centimetre is:",
    "options": [
      "Vernier scale",
      "Plain scale",
      "Diagonal scale",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "A diagonal scale can read up to three successive units (e.g., yards, feet, and inches, or metres, decimetres, and centimetres) or up to two decimal places.",
    "rankerTip": "Plain scale = 2 units. Diagonal scale = 3 units. Vernier scale = fractional parts of smallest division.",
    "topic": "Basic Engineering Drawing - Scales - Diagonal Scale"
  },
  {
    "id": "grand100-q6",
    "questionNumber": 6,
    "question": "Which of the following is a symbol of the first angle projection?",
    "options": [
      "Truncated cone with smaller base on left, followed by concentric circles on right",
      "Concentric circles on left, followed by truncated cone on right",
      "Vertical truncated cone and circle",
      "Inverted vertical cone"
    ],
    "correctOptionIndex": 0,
    "explanation": "In 1st angle projection, the right-side view is projected onto the left plane or viewed from the left and projected to the right. The standard ISO/BIS symbol shows the frustum on the left and the circular views on the right.",
    "rankerTip": "1st Angle symbol: frustum on left, concentric circles on right. 3rd Angle symbol: concentric circles on left, frustum on right.",
    "topic": "Basic Engineering Drawing - Projections - Projection Symbols"
  },
  {
    "id": "grand100-q7",
    "questionNumber": 7,
    "question": "If a line is inclined at 45° to the HP and 30° to the VP, its front view is inclined at:",
    "options": [
      "30° to XY",
      "45° to XY",
      "Between 30° and 45° to XY",
      "Greater than 45°"
    ],
    "correctOptionIndex": 3,
    "explanation": "The apparent angle of elevation α satisfies tan α = tan θ / cos ϕ. With θ = 45° and ϕ = 30°: tan α = tan 45° / cos 30° = 1 / 0.8660 ≈ 1.1547 > 1, so α > 45° (specifically α ≈ 49.1°).",
    "rankerTip": "Apparent inclination α is always GREATER than true inclination θ to HP (tan α = tan θ / cos ϕ).",
    "topic": "Basic Engineering Drawing - Projections - Apparent Angles of Lines"
  },
  {
    "id": "grand100-q8",
    "questionNumber": 8,
    "question": "\"Asymptote\" is:",
    "options": [
      "Central axis of conics",
      "Area of the conic",
      "Tangents drawn from infinity to a circle",
      "Tangents drawn from infinity to a hyperbola"
    ],
    "correctOptionIndex": 3,
    "explanation": "An asymptote is a straight line that a curve approaches arbitrarily closely as it heads toward infinity; for a hyperbola, asymptotes are tangents to the curve at infinity passing through the center.",
    "rankerTip": "Asymptotes are tangents to the hyperbola at infinity, intersecting at the center of the hyperbola.",
    "topic": "Basic Engineering Drawing - Curves - Hyperbola & Asymptotes"
  },
  {
    "id": "grand100-q9",
    "questionNumber": 9,
    "question": "If a line is parallel to any one of the reference planes and inclined to the other then:",
    "options": [
      "Its projection on that plane to which it is parallel will show the true length",
      "Its projection on that plane to which it is parallel will show the true inclination",
      "Both (A) and (B)",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "If a line is parallel to a plane of projection, its projection on that plane will faithfully show both its true length and its true inclination to the other reference plane.",
    "rankerTip": "Line parallel to a plane shows BOTH true length AND true inclination on that plane.",
    "topic": "Basic Engineering Drawing - Projections - Lines Parallel to One Plane"
  },
  {
    "id": "grand100-q10",
    "questionNumber": 10,
    "question": "The continuous thin ruled lines with short zig-zags within them are drawn to show:",
    "options": [
      "Short break lines",
      "Hatch lines",
      "Construction lines",
      "Long break lines"
    ],
    "correctOptionIndex": 3,
    "explanation": "According to IS 10714 (Type D line), a continuous thin straight line with short zig-zags is designated to represent long break lines or limits of partial/interrupted views. Continuous wavy freehand lines (Type C) are used for short break lines.",
    "rankerTip": "Continuous thin with zig-zag (Type D) = Long break lines; Continuous thin wavy (Type C) = Short break lines.",
    "topic": "Basic Engineering Drawing - Lines - Break Lines (Type C & D)"
  },
  {
    "id": "grand100-q11",
    "questionNumber": 11,
    "question": "Which field book is convenient for large scale and detailed dimension work?",
    "options": [
      "Single line",
      "Double line",
      "Both",
      "None of the above."
    ],
    "correctOptionIndex": 0,
    "explanation": "A single-line field book provides wider sketching space on either side of the single central red line, making it much more convenient for large-scale work where extensive dimensions and details must be entered.",
    "rankerTip": "Single line = large scale and detailed dimensions. Double line = ordinary engineering & cadastral surveys.",
    "topic": "Chain Survey - Chain Survey - Field Book Types"
  },
  {
    "id": "grand100-q12",
    "questionNumber": 12,
    "question": "A well-conditioned triangle does not have any angle less than:",
    "options": [
      "20°",
      "30°",
      "45°",
      "60°"
    ],
    "correctOptionIndex": 1,
    "explanation": "A well-conditioned triangle should not have any angle less than 30° nor greater than 120° to avoid errors during intersection plotting.",
    "rankerTip": "Angles must lie strictly between 30° and 120°. Ideal triangle is equilateral (60° each).",
    "topic": "Chain Survey - Chain Survey - Triangulation & Triangles"
  },
  {
    "id": "grand100-q13",
    "questionNumber": 13,
    "question": "Invar tape is made up of an alloy of",
    "options": [
      "30% Nickel and 70% Steel",
      "36% Nickel and 64% Steel",
      "64% Nickel and 36% Steel",
      "70% Nickel and 30% Steel"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct answer is option (B): \"36% Nickel and 64% Steel\". High-yield Kerala PSC Chain Survey standard syllabus question on Invar Tape.",
    "rankerTip": "Kerala PSC Repeated Question #14 on Invar Tape.",
    "topic": "Chain Survey - Chain Survey - Invar Tape"
  },
  {
    "id": "grand100-q14",
    "questionNumber": 14,
    "question": "What is the term for error that occur due to faulty adjustments of device such as chain may be too long or too short?",
    "options": [
      "Natural error",
      "Personal error",
      "Artificial error",
      "Instrumental error"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct answer is option (D): \"Instrumental error\". High-yield Kerala PSC Chain Survey standard syllabus question on Errors in Chaining.",
    "rankerTip": "Kerala PSC Repeated Question #34 on Errors in Chaining.",
    "topic": "Chain Survey - Chain Survey - Errors in Chaining"
  },
  {
    "id": "grand100-q15",
    "questionNumber": 15,
    "question": "Metric chains are generally available in :",
    "options": [
      "10 m and 20 length",
      "15 m and 20 m length",
      "20 m and 30 m length",
      "25 m and 100m length"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct answer is option (C): \"20 m and 30 m length\". High-yield Kerala PSC Chain Survey standard syllabus question on Metric Chain.",
    "rankerTip": "Kerala PSC Repeated Question #53 on Metric Chain.",
    "topic": "Chain Survey - Chain Survey - Metric Chain"
  },
  {
    "id": "grand100-q16",
    "questionNumber": 16,
    "question": "In chain survey reference sketches are used",
    "options": [
      "To mark readings during survey work",
      "To refer during survey work",
      "To identify main survey lines",
      "To locate survey stations on future date"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct answer is option (D): \"To locate survey stations on future date\". High-yield Kerala PSC Chain Survey standard syllabus question on Reference Sketches.",
    "rankerTip": "Kerala PSC Repeated Question #73 on Reference Sketches.",
    "topic": "Chain Survey - Chain Survey - Reference Sketches"
  },
  {
    "id": "grand100-q17",
    "questionNumber": 17,
    "question": "What is the term that the distance measured at right angles to the chain line from the object?",
    "options": [
      "Short off set",
      "Long off set",
      "Oblique off set",
      "Perpendicular off set"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct answer is option (D): \"Perpendicular off set\". High-yield Kerala PSC Chain Survey standard syllabus question on Offsets.",
    "rankerTip": "Kerala PSC Repeated Question #92 on Offsets.",
    "topic": "Chain Survey - Chain Survey - Offsets"
  },
  {
    "id": "grand100-q18",
    "questionNumber": 18,
    "question": "Which sign is used to indicate tie or subsidiary station?",
    "options": [
      "0",
      "o",
      "ÿ",
      "⬚"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct answer is option (C): \"ÿ\". High-yield Kerala PSC Chain Survey standard syllabus question on Survey Station Symbols.",
    "rankerTip": "Kerala PSC Repeated Question #111 on Survey Station Symbols.",
    "topic": "Chain Survey - Chain Survey - Survey Station Symbols"
  },
  {
    "id": "grand100-q19",
    "questionNumber": 19,
    "question": "The Principle of chain surveying is",
    "options": [
      "Work from Whole to Part",
      "Triangulation",
      "Traversing",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct answer is option (B): \"Triangulation\". High-yield Kerala PSC Chain Survey standard syllabus question on Survey Principles.",
    "rankerTip": "Kerala PSC Repeated Question #131 on Survey Principles.",
    "topic": "Chain Survey - Chain Survey - Survey Principles"
  },
  {
    "id": "grand100-q20",
    "questionNumber": 20,
    "question": "Direct ranging is possible only when the end points are :",
    "options": [
      "More than 200 meters",
      "Mutually inter visible",
      "In hilly areas",
      "In valley portion"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct answer is option (B): \"Mutually inter visible\". High-yield Kerala PSC Chain Survey standard syllabus question on Direct Ranging.",
    "rankerTip": "Kerala PSC Repeated Question #150 on Direct Ranging.",
    "topic": "Chain Survey - Chain Survey - Direct Ranging"
  },
  {
    "id": "grand100-q21",
    "questionNumber": 21,
    "question": "Permissible error in chaining for measurement on a hilly ground is",
    "options": [
      "1 : 250",
      "1 : 2000",
      "1 : 400",
      "1 : 1000"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct answer is option (A): \"1 : 250\". High-yield Kerala PSC Chain Survey standard syllabus question on Permissible Errors.",
    "rankerTip": "Kerala PSC Repeated Question #170 on Permissible Errors.",
    "topic": "Chain Survey - Chain Survey - Permissible Errors"
  },
  {
    "id": "grand100-q22",
    "questionNumber": 22,
    "question": "What is the length if metallic tape available in meter?",
    "options": [
      "5m and 10m",
      "10m and 15m",
      "15m and 20m",
      "15m and 30m"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct answer is option (D): \"15m and 30m\". High-yield Kerala PSC Chain Survey standard syllabus question on Metallic Tape.",
    "rankerTip": "Kerala PSC Repeated Question #189 on Metallic Tape.",
    "topic": "Chain Survey - Chain Survey - Metallic Tape"
  },
  {
    "id": "grand100-q23",
    "questionNumber": 23,
    "question": "All revenue survey maps are plotted with reference to the.... meridian",
    "options": [
      "Arbitrary Meridian",
      "True Meridian",
      "Magnetic Meridian",
      "All of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "True meridian lines remain constant and permanent over time (independent of magnetic declination variations). Therefore, government revenue survey maps and cadastral boundaries are invariably plotted with reference to the True Meridian.",
    "rankerTip": "Revenue survey maps and permanent cadastral boundaries are always plotted with reference to the True Meridian.",
    "topic": "Compass Survey - Compass Survey - Meridians"
  },
  {
    "id": "grand100-q24",
    "questionNumber": 24,
    "question": "On the graduated ring of the prismatic compass 90° is marked at ......end of needle",
    "options": [
      "East",
      "West",
      "South",
      "North"
    ],
    "correctOptionIndex": 1,
    "explanation": "Graduations on a prismatic compass ring run clockwise from South (0°). Therefore: South = 0°/360°, West = 90°, North = 180°, East = 270°.",
    "rankerTip": "In Prismatic Compass, 90° is at the West end, NOT East.",
    "topic": "Compass Survey - Compass Survey - Prismatic Compass"
  },
  {
    "id": "grand100-q25",
    "questionNumber": 25,
    "question": "Extent of diurnal variation of magnetic declination",
    "options": [
      "greater at the equator and less at the poles",
      "less at the equator and greater at the poles",
      "same at both equator and at the poles",
      "does not depend on the locality"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct answer is option (B): \"less at the equator and greater at the poles\". High-yield Kerala PSC Compass Survey standard syllabus question on Diurnal Variation.",
    "rankerTip": "Kerala PSC Repeated Compass Question #7 on Diurnal Variation.",
    "topic": "Compass Survey - Compass Survey - Diurnal Variation"
  },
  {
    "id": "grand100-q26",
    "questionNumber": 26,
    "question": "The fore bearing of a line is S 45°10' E find the back bearing",
    "options": [
      "45°-10'",
      "N 45°-10' W",
      "225°-10'",
      "134°-50'"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct answer is option (B): \"N 45°-10' W\". High-yield Kerala PSC Compass Survey standard syllabus question on Back Bearing.",
    "rankerTip": "Kerala PSC Repeated Compass Question #23 on Back Bearing.",
    "topic": "Compass Survey - Compass Survey - Back Bearing"
  },
  {
    "id": "grand100-q27",
    "questionNumber": 27,
    "question": "In whole circle system, the back bearing of a line is equal to :",
    "options": [
      "FB - 180°",
      "FB + 180°",
      "FB ± 180°",
      "FB x 180"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct answer is option (C): \"FB ± 180°\". High-yield Kerala PSC Compass Survey standard syllabus question on Back Bearing Formula.",
    "rankerTip": "Kerala PSC Repeated Compass Question #39 on Back Bearing Formula.",
    "topic": "Compass Survey - Compass Survey - Back Bearing Formula"
  },
  {
    "id": "grand100-q28",
    "questionNumber": 28,
    "question": "The graduated ring of a prismatic compass is graduated in",
    "options": [
      "Quadrantal bearing system",
      "Whole circle bearing system",
      "Reduced bearing system",
      "Radian bearing system"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct answer is option (B): \"Whole circle bearing system\". High-yield Kerala PSC Compass Survey standard syllabus question on Whole Circle Bearing System.",
    "rankerTip": "Kerala PSC Repeated Compass Question #55 on Whole Circle Bearing System.",
    "topic": "Compass Survey - Compass Survey - Whole Circle Bearing System"
  },
  {
    "id": "grand100-q29",
    "questionNumber": 29,
    "question": "The total number of zeros graduated on surveyor's compass is",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct answer is option (B): \"Two\". High-yield Kerala PSC Compass Survey standard syllabus question on Surveyor's Compass Graduations.",
    "rankerTip": "Kerala PSC Repeated Compass Question #71 on Surveyor's Compass Graduations.",
    "topic": "Compass Survey - Compass Survey - Surveyor's Compass Graduations"
  },
  {
    "id": "grand100-q30",
    "questionNumber": 30,
    "question": "When the declination is negative, the magnetic meridian will be on which side of true meridian",
    "options": [
      "Western",
      "Southern",
      "Eastern",
      "Northern"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct answer is option (A): \"Western\". High-yield Kerala PSC Compass Survey standard syllabus question on Magnetic Declination.",
    "rankerTip": "Kerala PSC Repeated Compass Question #87 on Magnetic Declination.",
    "topic": "Compass Survey - Compass Survey - Magnetic Declination"
  },
  {
    "id": "grand100-q31",
    "questionNumber": 31,
    "question": "What is the name of instrument, to measure the bearing line in quadrantal system?",
    "options": [
      "Trough compass",
      "Magnetic compass",
      "Prismatic compass",
      "Surveyor's compass"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct answer is option (D): \"Surveyor's compass\". High-yield Kerala PSC Compass Survey standard syllabus question on Surveyor's Compass.",
    "rankerTip": "Kerala PSC Repeated Compass Question #103 on Surveyor's Compass.",
    "topic": "Compass Survey - Compass Survey - Surveyor's Compass"
  },
  {
    "id": "grand100-q32",
    "questionNumber": 32,
    "question": "The reduced bearing may have any values between :",
    "options": [
      "0° and 90°",
      "0° and 120°",
      "0° and 180°",
      "0° and 360°"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct answer is option (A): \"0° and 90°\". High-yield Kerala PSC Compass Survey standard syllabus question on Reduced Bearing Range.",
    "rankerTip": "Kerala PSC Repeated Compass Question #119 on Reduced Bearing Range.",
    "topic": "Compass Survey - Compass Survey - Reduced Bearing Range"
  },
  {
    "id": "grand100-q33",
    "questionNumber": 33,
    "question": "The lines of earth's magnetic field run from",
    "options": [
      "East to west",
      "South to west",
      "North to south",
      "West to east"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct answer is option (C): \"North to south\". High-yield Kerala PSC Compass Survey standard syllabus question on Magnetic Field Lines.",
    "rankerTip": "Kerala PSC Repeated Compass Question #135 on Magnetic Field Lines.",
    "topic": "Compass Survey - Compass Survey - Magnetic Field Lines"
  },
  {
    "id": "grand100-q34",
    "questionNumber": 34,
    "question": "What is the variation, in the magnetic meridian swings like a pendulum in one direction for a long period and gradually comes to rest and then swings in the opposite direction?",
    "options": [
      "Secular variation",
      "Annual variation",
      "Irregular variation",
      "Daily variation"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct answer is option (A): \"Secular variation\". High-yield Kerala PSC Compass Survey standard syllabus question on Secular Variation.",
    "rankerTip": "Kerala PSC Repeated Compass Question #151 on Secular Variation.",
    "topic": "Compass Survey - Compass Survey - Secular Variation"
  },
  {
    "id": "grand100-q35",
    "questionNumber": 35,
    "question": "Orientation by ___ is the most accurate method of orientation and is always to preferred.",
    "options": [
      "Backsight",
      "Trough compass",
      "Foresight",
      "both A and B"
    ],
    "correctOptionIndex": 0,
    "explanation": "In plane table surveying, orientation by back-sighting (sighting along a previously drawn ray to a known preceding station) is the most accurate and reliable method because it is completely unaffected by local magnetic variations or metallic disturbances.",
    "rankerTip": "Orientation by backsighting is the most accurate method of orientation and is always preferred over magnetic orientation.",
    "topic": "Planetable Survey - Planetable Survey - Orientation Methods"
  },
  {
    "id": "grand100-q36",
    "questionNumber": 36,
    "question": "Which of the following is not a methodology for the solution of a three-point problem ?",
    "options": [
      "Tracing paper method",
      "Bessel's graphical method",
      "Lehman's method",
      "Kirchhoff's method"
    ],
    "correctOptionIndex": 3,
    "explanation": "The correct answer is 'Kirchhoff's method'. In plane tabling, this follows standard Kerala PSC specifications.",
    "rankerTip": "Key exam takeaway: Kirchhoff's method.",
    "topic": "Planetable Survey - Plane Table Surveying Principles"
  },
  {
    "id": "grand100-q37",
    "questionNumber": 37,
    "question": "The technique of plotting all the accessible stations with a single set up of plane table is called :",
    "options": [
      "Radiation",
      "Intersection",
      "Resection",
      "Traversing"
    ],
    "correctOptionIndex": 0,
    "explanation": "The correct answer is 'Radiation'. In plane tabling, this follows standard Kerala PSC specifications.",
    "rankerTip": "Key exam takeaway: Radiation.",
    "topic": "Planetable Survey - Plane Table Surveying Principles"
  },
  {
    "id": "grand100-q38",
    "questionNumber": 38,
    "question": "The best method of solving three point problem is :",
    "options": [
      "Radiation",
      "Trial and error",
      "Intersection",
      "Orientation"
    ],
    "correctOptionIndex": 1,
    "explanation": "Lehmann's method (Trial and Error method) is the most rapid, commonly used, and accurate field method for solving the Three-Point Problem using Lehmann's rules to eliminate the triangle of error.",
    "rankerTip": "Lehmann's method (Trial & Error) = Fastest and most accurate solution to the 3-point problem.",
    "topic": "Planetable Survey - Resection and Three-Point Problem"
  },
  {
    "id": "grand100-q39",
    "questionNumber": 39,
    "question": "The method chiefly used for locating the details from stations, which have been previously established by triangulation",
    "options": [
      "Resection",
      "Radiation",
      "Intersection",
      "Traversing"
    ],
    "correctOptionIndex": 3,
    "explanation": "The correct answer is 'Traversing'. In plane tabling, this follows standard Kerala PSC specifications.",
    "rankerTip": "Key exam takeaway: Traversing.",
    "topic": "Planetable Survey - Plane Table Surveying Principles"
  },
  {
    "id": "grand100-q40",
    "questionNumber": 40,
    "question": "A curved surface which of every point is perpendicular to the direction of gravity at the points is called:",
    "options": [
      "Level surface",
      "Horizontal surface",
      "Tangential surface",
      "Vertical surface"
    ],
    "correctOptionIndex": 0,
    "explanation": "A level surface is defined as a curved surface on which every point is perpendicular (normal) to the direction of gravity (the plumb line) at that point. A still body of water undisturbed by tides or wind represents a level surface. A horizontal surface, in contrast, is tangential to a level surface at only one point.",
    "rankerTip": "Curved surface normal to plumb line at all points = Level surface. Plane tangential at one point = Horizontal surface.",
    "topic": "Levelling and Contouring - Levelling - Definitions & Terms"
  },
  {
    "id": "grand100-q41",
    "questionNumber": 41,
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
    "topic": "Levelling and Contouring - Methods of Contouring - Direct Method"
  },
  {
    "id": "grand100-q42",
    "questionNumber": 42,
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
    "topic": "Levelling and Contouring - Contour Interval Selection"
  },
  {
    "id": "grand100-q43",
    "questionNumber": 43,
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
    "topic": "Levelling and Contouring - Contouring Hilly Areas - Tacheometric"
  },
  {
    "id": "grand100-q44",
    "questionNumber": 44,
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
    "topic": "Levelling and Contouring - Ridge vs Valley Contours"
  },
  {
    "id": "grand100-q45",
    "questionNumber": 45,
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
    "topic": "Levelling and Contouring - Overhanging Cliff Intersection"
  },
  {
    "id": "grand100-q46",
    "questionNumber": 46,
    "question": "A reference surface above which elevation of a point are determined is called a ______ surface",
    "options": [
      "M.S.L",
      "Datum",
      "Level",
      "B.M"
    ],
    "correctOptionIndex": 1,
    "explanation": "The correct answer is 'Datum'. In surveying and levelling, this follows standard Kerala PSC specifications.",
    "rankerTip": "Important exam point: Datum.",
    "topic": "Levelling and Contouring - Levelling Principles and Operations"
  },
  {
    "id": "grand100-q47",
    "questionNumber": 47,
    "question": "The still water surface of a pond represent a ______ surface",
    "options": [
      "Horizontal",
      "Vertical",
      "Level",
      "Inclined"
    ],
    "correctOptionIndex": 2,
    "explanation": "The correct answer is 'Level'. In surveying and levelling, this follows standard Kerala PSC specifications.",
    "rankerTip": "Important exam point: Level.",
    "topic": "Levelling and Contouring - Levelling Principles and Operations"
  },
  {
    "id": "grand100-q48",
    "questionNumber": 48,
    "question": "A surface which is normal to the direction of gravity at all points, as indicated by a plumb line, is known as :",
    "options": [
      "Datum surface",
      "Horizontal surface",
      "Vertical surface",
      "Level surface"
    ],
    "correctOptionIndex": 3,
    "explanation": "The correct answer is 'Level surface'. In surveying and levelling, this follows standard Kerala PSC specifications.",
    "rankerTip": "Important exam point: Level surface.",
    "topic": "Levelling and Contouring - Levelling Principles and Operations"
  },
  {
    "id": "grand100-q49",
    "questionNumber": 49,
    "question": "The vertical distance above or below the datum is ______ of a point.",
    "options": [
      "The Bench Mark",
      "The vertical line",
      "The elevation",
      "The plumb line"
    ],
    "correctOptionIndex": 2,
    "explanation": "The correct answer is 'The elevation'. In surveying and levelling, this follows standard Kerala PSC specifications.",
    "rankerTip": "Important exam point: The elevation.",
    "topic": "Levelling and Contouring - Bench Marks and Datum"
  },
  {
    "id": "grand100-q50",
    "questionNumber": 50,
    "question": "The sensitiveness of a level tube decreases, if",
    "options": [
      "Radius of curvature of its inner surface is increased",
      "Diameter of the tube is increased",
      "Length of the vapour is increased",
      "Both viscosity and surface tension are increased"
    ],
    "correctOptionIndex": 3,
    "explanation": "Sensitiveness decreases when viscosity and surface tension of the bubble liquid increase, as this impedes smooth bubble movement.",
    "rankerTip": "Higher viscosity and surface tension = Decreased bubble sensitiveness.",
    "topic": "Levelling and Contouring - Level Tube and Sensitiveness"
  },
  {
    "id": "grand100-q51",
    "questionNumber": 51,
    "question": "Diaphragm of a survey telescope is held inside",
    "options": [
      "Telescope tube at its end nearer the eye piece",
      "Eye piece",
      "Object glass",
      "Telescope tube at its mid point"
    ],
    "correctOptionIndex": 0,
    "explanation": "The diaphragm holding the crosshairs is fitted inside the telescope tube just in front of the eyepiece, at the focal plane of the objective.",
    "rankerTip": "Crosshairs / Diaphragm are fitted directly in front of the eyepiece.",
    "topic": "Levelling and Contouring - Telescope Components and Optics"
  },
  {
    "id": "grand100-q52",
    "questionNumber": 52,
    "question": "The stake erected at the required elevation is called :",
    "options": [
      "Grade stake",
      "Grade rod",
      "Slope stakes",
      "Slope rod"
    ],
    "correctOptionIndex": 0,
    "explanation": "The correct answer is 'Grade stake'. In surveying and levelling, this follows standard Kerala PSC specifications.",
    "rankerTip": "Important exam point: Grade stake.",
    "topic": "Levelling and Contouring - Levelling Principles and Operations"
  },
  {
    "id": "grand100-q53",
    "questionNumber": 53,
    "question": "If L is in kilometers, the curvature correction is :",
    "options": [
      "58.2 L² mm",
      "64.8 L² mm",
      "74.8 L² mm",
      "78.4 L² mm"
    ],
    "correctOptionIndex": 3,
    "explanation": "Curvature correction = D² / (2R) = 0.0785 D² metres (when D is in km), or 78.4 L² mm.",
    "rankerTip": "Cc = 0.0785 D² m = 78.4 L² mm (where D or L is in km).",
    "topic": "Levelling and Contouring - Curvature and Refraction Corrections"
  },
  {
    "id": "grand100-q54",
    "questionNumber": 54,
    "question": "How to eliminate parallax between the staff and reticle in auto level?",
    "options": [
      "Turn the focusing knob",
      "Adjust the levelling screw",
      "Adjusting screw cover",
      "Setting of the tripod"
    ],
    "correctOptionIndex": 0,
    "explanation": "The correct answer is 'Turn the focusing knob'. In surveying and levelling, this follows standard Kerala PSC specifications.",
    "rankerTip": "Important exam point: Turn the focusing knob.",
    "topic": "Levelling and Contouring - Levelling Instruments"
  },
  {
    "id": "grand100-q55",
    "questionNumber": 55,
    "question": "Which method is useful for measuring precisely a number of horizontal angle from a single station point in theodolite instrument:",
    "options": [
      "reiteration",
      "ordinary",
      "repetition",
      "direct angle"
    ],
    "correctOptionIndex": 0,
    "explanation": "The method of reiteration (direction method) is used to measure several angles from a single station by sighting surrounding stations in succession and closing the horizon on the starting station.",
    "rankerTip": "Multiple angles from single station = Reiteration (Direction) method.",
    "topic": "Theodolite Survey - Angle Measurement Methods"
  },
  {
    "id": "grand100-q56",
    "questionNumber": 56,
    "question": "The angle between prolongation of preceding line and the forward line of a traverse is called:",
    "options": [
      "direct angle",
      "excluded angle",
      "deflection angle",
      "included angle"
    ],
    "correctOptionIndex": 2,
    "explanation": "A deflection angle is the angle that a survey line makes with the prolongation of the preceding survey line. It is designated as right (clockwise) or left (counter-clockwise).",
    "rankerTip": "Deflection angles are widely used in open traverse surveying for highways, railways, and pipelines.",
    "topic": "Theodolite Survey - Traverse Surveying"
  },
  {
    "id": "grand100-q57",
    "questionNumber": 57,
    "question": "Face left and face right observations are connected with",
    "options": [
      "Compass traversing",
      "Plane table traversing",
      "Levelling",
      "Theodolite traversing"
    ],
    "correctOptionIndex": 3,
    "explanation": "Face left and face right observations are uniquely connected with theodolite observations to eliminate systematic instrumental errors.",
    "rankerTip": "Face left & face right = Theodolite surveying technique.",
    "topic": "Theodolite Survey - Face Left and Face Right Observations"
  },
  {
    "id": "grand100-q58",
    "questionNumber": 58,
    "question": "The line passing through the centres of curvature of the faces of lens is known as :",
    "options": [
      "Fundamental axis",
      "Axis of telescope",
      "Principle axis",
      "Focal length"
    ],
    "correctOptionIndex": 2,
    "explanation": "The correct answer is 'Principle axis'. In theodolite surveying, this conforms to standard Kerala PSC guidelines.",
    "rankerTip": "Key exam takeaway: Principle axis.",
    "topic": "Theodolite Survey - Telescope Optics and Aberrations"
  },
  {
    "id": "grand100-q59",
    "questionNumber": 59,
    "question": "The vertical circle of the instrument is on the left of the observer while taking a reading the position is called",
    "options": [
      "Face right observation",
      "Face left observation",
      "Normal position",
      "Both Face left observation and Normal position"
    ],
    "correctOptionIndex": 3,
    "explanation": "The correct answer is 'Both Face left observation and Normal position'. In theodolite surveying, this conforms to standard Kerala PSC guidelines.",
    "rankerTip": "Key exam takeaway: Both Face left observation and Normal position.",
    "topic": "Theodolite Survey - Vertical Circle and Index Error"
  },
  {
    "id": "grand100-q60",
    "questionNumber": 60,
    "question": "What is the name of theodolite if its telescope can be revolved through 180° in a vertical plane about its horizontal axis?",
    "options": [
      "Transit theodolite",
      "Non - transit theodolite",
      "Horizontal axis theodolite",
      "Vertical axis theodolite"
    ],
    "correctOptionIndex": 0,
    "explanation": "The correct answer is 'Transit theodolite'. In theodolite surveying, this conforms to standard Kerala PSC guidelines.",
    "rankerTip": "Key exam takeaway: Transit theodolite.",
    "topic": "Theodolite Survey - Theodolite Surveying Fundamentals"
  },
  {
    "id": "grand100-q61",
    "questionNumber": 61,
    "question": "What method is used for imperfect graduations are minimized by reading on different parts of the graduated circle in theodolite?",
    "options": [
      "Ordinary method",
      "Deflection method",
      "Direct angle method",
      "Repetition method"
    ],
    "correctOptionIndex": 3,
    "explanation": "The correct answer is 'Repetition method'. In theodolite surveying, this conforms to standard Kerala PSC guidelines.",
    "rankerTip": "Key exam takeaway: Repetition method.",
    "topic": "Theodolite Survey - Theodolite Surveying Fundamentals"
  },
  {
    "id": "grand100-q62",
    "questionNumber": 62,
    "question": "The face left position is also known as :",
    "options": [
      "Telescope inverted",
      "Telescope reversed",
      "Telescope normal",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "When the vertical circle of the theodolite is on the left side of the observer while sighting, the telescope is in the Face Left (or normal) position.",
    "rankerTip": "Vertical circle on observer's LEFT = Face Left / Telescope Normal.",
    "topic": "Theodolite Survey - Face Left and Face Right Observations"
  },
  {
    "id": "grand100-q63",
    "questionNumber": 63,
    "question": "What type of method is the displacement of signal are not eliminated in horizontal measurement?",
    "options": [
      "Ordinary method",
      "Repetition method",
      "Deflection method",
      "Direct angle method"
    ],
    "correctOptionIndex": 1,
    "explanation": "The correct answer is 'Repetition method'. In theodolite surveying, this conforms to standard Kerala PSC guidelines.",
    "rankerTip": "Key exam takeaway: Repetition method.",
    "topic": "Theodolite Survey - Theodolite Surveying Fundamentals"
  },
  {
    "id": "grand100-q64",
    "questionNumber": 64,
    "question": "What is the least count of theodolite instrument?",
    "options": [
      "20' 20\"",
      "20' 10\"",
      "0' 20\"",
      "20' 5\""
    ],
    "correctOptionIndex": 2,
    "explanation": "The least count of a standard engineer's vernier theodolite is 20 seconds (20\").",
    "rankerTip": "Least count of vernier theodolite = 20\" (0' 20\").",
    "topic": "Theodolite Survey - Theodolite Scales and Least Count"
  },
  {
    "id": "grand100-q65",
    "questionNumber": 65,
    "question": "Which process is used for the transmission of radio signals from the satellites into the GPS receiver for position determination?",
    "options": [
      "triangulation",
      "trilateration",
      "translocation",
      "positioning"
    ],
    "correctOptionIndex": 1,
    "explanation": "GPS positioning determines receiver coordinates by measuring pseudo-ranges (distances) from multiple satellites with known coordinates, which is the geometric process of trilateration.",
    "rankerTip": "GPS position determination is based on Trilateration (distance intersections), not angular triangulation.",
    "topic": "Modern Survey Instruments - GPS - Trilateration"
  },
  {
    "id": "grand100-q66",
    "questionNumber": 66,
    "question": "What is the shape of single reflector prism?",
    "options": [
      "cube corner",
      "cuboid corner",
      "circular",
      "triangular corner"
    ],
    "correctOptionIndex": 0,
    "explanation": "Retroreflectors used in surveying are cube corner (corner-cube / trihedral) prisms composed of three mutually perpendicular reflecting faces.",
    "rankerTip": "Cube corner (triple prism / retroreflector) reflects light back parallel to its incident direction.",
    "topic": "Modern Survey Instruments - Total Station - Prisms & Reflectors"
  },
  {
    "id": "grand100-q67",
    "questionNumber": 67,
    "question": "An EDM based instrument is",
    "options": [
      "Micrometer theodolite",
      "Total station",
      "Dumpy level",
      "Chain"
    ],
    "correctOptionIndex": 1,
    "explanation": "The correct answer is 'Total station'. In modern surveying, this conforms to standard Kerala PSC guidelines.",
    "rankerTip": "Key exam takeaway: Total station.",
    "topic": "Modern Survey Instruments - Modern Survey Instruments and Total Station"
  },
  {
    "id": "grand100-q68",
    "questionNumber": 68,
    "question": "EDM stands for :",
    "options": [
      "Easy Direct Measurement",
      "Electronic Direct Measurement",
      "Electronic Distance Measurement",
      "Electronic Direct Management"
    ],
    "correctOptionIndex": 2,
    "explanation": "EDM stands for Electronic Distance Measurement (or Electronic Distance Meter), an instrument that measures distances using electromagnetic wave propagation.",
    "rankerTip": "EDM = Electronic Distance Measurement.",
    "topic": "Modern Survey Instruments - EDM Fundamentals and Principles"
  },
  {
    "id": "grand100-q69",
    "questionNumber": 69,
    "question": "What is the another name of \"modulating wave\"?",
    "options": [
      "Super wave",
      "Measuring wave",
      "Total wave",
      "Incubation wave"
    ],
    "correctOptionIndex": 1,
    "explanation": "In EDM theory, the low-frequency wave that carries the measurement wavelength and is superimposed onto the high-frequency optical carrier wave is called the Modulating wave (or Measuring wave).",
    "rankerTip": "Modulating wave = Measuring wave.",
    "topic": "Modern Survey Instruments - EDM Modulation Principles"
  },
  {
    "id": "grand100-q70",
    "questionNumber": 70,
    "question": "GPS is owned and operated by",
    "options": [
      "US government",
      "Russian government",
      "Chinese government",
      "Indian government"
    ],
    "correctOptionIndex": 0,
    "explanation": "The Global Positioning System (GPS) is owned, financed, and operated by the United States Government (U.S. Space Force / Department of Defense).",
    "rankerTip": "GPS owner and operator: US Government.",
    "topic": "Modern Survey Instruments - GPS Ownership"
  },
  {
    "id": "grand100-q71",
    "questionNumber": 71,
    "question": "How many Orbit planes are available for satellites in space segment?",
    "options": [
      "6",
      "5",
      "4",
      "3"
    ],
    "correctOptionIndex": 0,
    "explanation": "The GPS space segment constellation consists of satellites distributed across 6 equally spaced orbital planes, each inclined at 55° and separated by 60° on the equator.",
    "rankerTip": "Number of GPS orbital planes: 6 planes (with 4+ satellites in each plane).",
    "topic": "Modern Survey Instruments - GPS Orbital Planes"
  },
  {
    "id": "grand100-q72",
    "questionNumber": 72,
    "question": "What are the two types of Planimeter?",
    "options": [
      "Mechanical and Digital",
      "Mechanical & non mechanical",
      "Graphical and mechanical",
      "Digital and graphical"
    ],
    "correctOptionIndex": 0,
    "explanation": "Planimeters are primarily classified into two types: Mechanical Planimeters (e.g., Amsler Polar Planimeter, Roller Planimeter) and Digital / Electronic Planimeters (microprocessor-controlled with digital display).",
    "rankerTip": "Two main types of planimeter: Mechanical and Digital.",
    "topic": "Modern Survey Instruments - Types of Planimeter"
  },
  {
    "id": "grand100-q73",
    "questionNumber": 73,
    "question": "The most effective command used to draw symmetrical objects is:",
    "options": [
      "COPY",
      "ARRAY",
      "LENGTHEN",
      "MIRROR"
    ],
    "correctOptionIndex": 3,
    "explanation": "The MIRROR command (alias MI) creates a reverse/reflected copy of selected objects about a specified mirror line, making it the fastest and most accurate command for drawing symmetrical objects.",
    "rankerTip": "MIRROR (MI) command is specifically designed for creating symmetrical drawings across an axis.",
    "topic": "AutoCAD - AutoCAD - Modify Commands"
  },
  {
    "id": "grand100-q74",
    "questionNumber": 74,
    "question": "Shortcut used in AutoCAD for pasting object is:",
    "options": [
      "Ctrl + c",
      "Ctrl + x",
      "Ctrl + p",
      "Ctrl + v"
    ],
    "correctOptionIndex": 3,
    "explanation": "Standard Windows shortcut Ctrl + V pastes copied objects into the active drawing. (Ctrl + C is Copy, Ctrl + X is Cut, and Ctrl + P is Plot/Print).",
    "rankerTip": "Ctrl + V = Paste, Ctrl + C = Copy to Clipboard, Ctrl + Shift + V = Paste as Block.",
    "topic": "AutoCAD - AutoCAD - Shortcut Keys"
  },
  {
    "id": "grand100-q75",
    "questionNumber": 75,
    "question": "Shortcut key of single line text is:",
    "options": [
      "dt",
      "mt",
      "st",
      "t"
    ],
    "correctOptionIndex": 0,
    "explanation": "DT (or DTEXT) launches single-line text creation. MT (or T) is for multiline text (MTEXT), and ST is for Text Style.",
    "rankerTip": "DT = Single-line Dynamic Text; MT/T = Multiline Text (MTEXT); ST = Text Style dialog.",
    "topic": "AutoCAD - AutoCAD - Shortcut Keys & Annotation"
  },
  {
    "id": "grand100-q76",
    "questionNumber": 76,
    "question": "What is the use of the shortcut key Mtext?",
    "options": [
      "Modifying text",
      "Move text",
      "Multiline text",
      "Menu text"
    ],
    "correctOptionIndex": 2,
    "explanation": "MTEXT (alias MT or T) is used to create multiline text formatted as paragraph blocks with word wrapping.",
    "rankerTip": "MTEXT = Multiline Text (formatted paragraphs with formatting ruler).",
    "topic": "AutoCAD - AutoCAD - Annotation"
  },
  {
    "id": "grand100-q77",
    "questionNumber": 77,
    "question": "Which command converts discrete object in polyline?",
    "options": [
      "Join",
      "Cut",
      "Undo",
      "Trim"
    ],
    "correctOptionIndex": 0,
    "explanation": "The JOIN command (alias J) or PEDIT > Join fuses multiple contiguous lines, arcs, or polylines sharing endpoints into a single, continuous 2D Polyline.",
    "rankerTip": "JOIN (J) connects contiguous discrete lines/arcs into a single polyline.",
    "topic": "AutoCAD - AutoCAD - Modify Commands"
  },
  {
    "id": "grand100-q78",
    "questionNumber": 78,
    "question": "Function key F10 is used in AutoCAD to:",
    "options": [
      "Snap ON/OFF",
      "Ortho ON/OFF",
      "Polar tracking ON/OFF",
      "Grid ON/OFF"
    ],
    "correctOptionIndex": 2,
    "explanation": "Function key F10 toggles Polar Tracking ON/OFF, guiding crosshairs along specified angular increments.",
    "rankerTip": "F10 = Polar Tracking ON/OFF (angular guidelines).",
    "topic": "AutoCAD - AutoCAD - Function Keys"
  },
  {
    "id": "grand100-q79",
    "questionNumber": 79,
    "question": "..... are the instructions you provide to CAD software to achieve the end result:",
    "options": [
      "Tools",
      "Tabs",
      "Icons",
      "Commands"
    ],
    "correctOptionIndex": 3,
    "explanation": "Commands (entered at the command prompt or selected from menus/ribbons) are the fundamental software instructions telling CAD what operation to execute.",
    "rankerTip": "Commands are user instructions to CAD software entered via keyboard or UI.",
    "topic": "AutoCAD - AutoCAD - Introduction & Basics"
  },
  {
    "id": "grand100-q80",
    "questionNumber": 80,
    "question": "..... command allows to shrink or enlarge the already existing drawing about a base point:",
    "options": [
      "Scale",
      "Stretch",
      "Explode",
      "Mirror"
    ],
    "correctOptionIndex": 0,
    "explanation": "The SCALE command (alias SC) enlarges or reduces the size of selected objects proportionally about a chosen base point using a scale factor.",
    "rankerTip": "SCALE (SC) alters object size proportionally around a base point.",
    "topic": "AutoCAD - AutoCAD - Modify Commands"
  },
  {
    "id": "grand100-q81",
    "questionNumber": 81,
    "question": "60% of number is 6, Identify the number :",
    "options": [
      "12",
      "10",
      "36",
      "18"
    ],
    "correctOptionIndex": 1,
    "explanation": "Let the unknown number be x. (60 / 100) × x = 6 => x = (6 × 100) / 60 = 600 / 60 = 10.",
    "rankerTip": "(Part / Percentage) × 100 = Total. Here, (6 / 60) × 100 = 10.",
    "topic": "Workshop Calculation and Science - Percentages"
  },
  {
    "id": "grand100-q82",
    "questionNumber": 82,
    "question": "What percentage of 80 is 20?",
    "options": [
      "0.8",
      "0.4",
      "0.25",
      "0.2"
    ],
    "correctOptionIndex": 2,
    "explanation": "Required fraction / decimal: 20 / 80 = 1 / 4 = 0.25 (which corresponds to 25%).",
    "rankerTip": "20 / 80 reduces to 1/4 = 0.25 (or 25%).",
    "topic": "Workshop Calculation and Science - Percentages & Fractions"
  },
  {
    "id": "grand100-q83",
    "questionNumber": 83,
    "question": "Find 6% of 750.",
    "options": [
      "45",
      "75",
      "70",
      "50"
    ],
    "correctOptionIndex": 0,
    "explanation": "6% of 750 = (6 / 100) × 750 = (6 × 75) / 10 = 450 / 10 = 45.",
    "rankerTip": "1% of 750 is 7.5. Therefore, 6% = 6 × 7.5 = 45.",
    "topic": "Workshop Calculation and Science - Percentages"
  },
  {
    "id": "grand100-q84",
    "questionNumber": 84,
    "question": "Two third of the square of a certain number is 96. What is the number ?",
    "options": [
      "16",
      "32",
      "12",
      "14"
    ],
    "correctOptionIndex": 2,
    "explanation": "Let the number be x. (2 / 3) * x² = 96 => x² = 96 × (3 / 2) = 48 × 3 = 144 => x = √144 = 12.",
    "rankerTip": "(2/3) * x² = 96 => x² = 144 => x = 12.",
    "topic": "Workshop Calculation and Science - Square Roots & Algebra"
  },
  {
    "id": "grand100-q85",
    "questionNumber": 85,
    "question": "Which of the following cannot be the unit digit in a perfect square ?",
    "options": [
      "9",
      "7",
      "5",
      "1"
    ],
    "correctOptionIndex": 1,
    "explanation": "The square of any integer can only end in {0, 1, 4, 5, 6, 9} (0²=0, 1²=1, 2²=4, 3²=9, 4²=6, 5²=5, 6²=6, 7²=9, 8²=4, 9²=1). A perfect square never ends with 2, 3, 7, or 8. Therefore, 7 cannot be the unit digit in a perfect square.",
    "rankerTip": "A perfect square NEVER ends in 2, 3, 7, or 8.",
    "topic": "Workshop Calculation and Science - Square Roots & Properties of Numbers"
  },
  {
    "id": "grand100-q86",
    "questionNumber": 86,
    "question": "√1.69 − √0.01 =",
    "options": [
      "1.20",
      "1.10",
      "1.30",
      "1.40"
    ],
    "correctOptionIndex": 0,
    "explanation": "√1.69 = √(169 / 100) = 13 / 10 = 1.30. √0.01 = √(1 / 100) = 1 / 10 = 0.10. Therefore, √1.69 − √0.01 = 1.30 − 0.10 = 1.20.",
    "rankerTip": "13² = 169 => √1.69 = 1.3. 1² = 1 => √0.01 = 0.1. Difference = 1.3 - 0.1 = 1.20.",
    "topic": "Workshop Calculation and Science - Square Roots & Decimals"
  },
  {
    "id": "grand100-q87",
    "questionNumber": 87,
    "question": "What will 60% of a number be whose 150% is 120 ?",
    "options": [
      "36",
      "48",
      "64",
      "42"
    ],
    "correctOptionIndex": 1,
    "explanation": "Let the number be x. 150% of x = 120 => 1.5x = 120 => x = 120 / 1.5 = 80. Now, 60% of 80 = (60 / 100) × 80 = 48. (Direct ratio method: (60 / 150) × 120 = (2 / 5) × 120 = 48).",
    "rankerTip": "Direct proportion: (60 / 150) × 120 = (2 / 5) × 120 = 48.",
    "topic": "Workshop Calculation and Science - Percentages & Proportion"
  },
  {
    "id": "grand100-q88",
    "questionNumber": 88,
    "question": "If 5 : 4 = 35 : X, then the value of X is :",
    "options": [
      "42",
      "70",
      "32",
      "28"
    ],
    "correctOptionIndex": 3,
    "explanation": "In a proportion, product of extremes equals product of means: 5 × X = 4 × 35 => X = (4 × 35) / 5 = 4 × 7 = 28.",
    "rankerTip": "5 / 4 = 35 / X => X = (35 × 4) / 5 = 7 × 4 = 28.",
    "topic": "Workshop Calculation and Science - Ratio and Proportion"
  },
  {
    "id": "grand100-q89",
    "questionNumber": 89,
    "question": "Rs. 250 is divided between Arun and Sasi, and Arun gets 100. Find the ratio of division of the amount.",
    "options": [
      "4:3",
      "5:1",
      "2:3",
      "1:3"
    ],
    "correctOptionIndex": 2,
    "explanation": "Total amount = Rs. 250. Arun's share = Rs. 100. Sasi's share = 250 − 100 = Rs. 150. Ratio of Arun's share to Sasi's share = 100 : 150 = 2 : 3.",
    "rankerTip": "Arun : Sasi = 100 : (250 - 100) = 100 : 150 = 2 : 3.",
    "topic": "Workshop Calculation and Science - Ratio and Proportion"
  },
  {
    "id": "grand100-q90",
    "questionNumber": 90,
    "question": "The least number of 4 digits which is a perfect square is :",
    "options": [
      "1000",
      "1024",
      "1444",
      "1009"
    ],
    "correctOptionIndex": 1,
    "explanation": "The smallest 4-digit number is 1000. √1000 ≈ 31.62. The next whole integer is 32. 31² = 961 (a 3-digit number). 32² = 1024 (the first 4-digit number). Hence, 1024 is the least 4-digit perfect square.",
    "rankerTip": "31² = 961 (3 digits), 32² = 1024 (smallest 4-digit perfect square).",
    "topic": "Workshop Calculation and Science - Square Roots & Number Theory"
  },
  {
    "id": "grand100-q91",
    "questionNumber": 91,
    "question": "One hectare is equivalent to how many square metres?",
    "options": [
      "1,000 sq.m",
      "10,000 sq.m",
      "43,560 sq.m",
      "100,000 sq.m"
    ],
    "correctOptionIndex": 1,
    "explanation": "1 hectare = 100 m x 100 m = 10,000 square metres. 1 acre = 4046.86 sq.m or 43,560 sq.ft.",
    "rankerTip": "1 hectare = 2.471 acres. Very common conversion in Land Records revenue work.",
    "topic": "Workshop Calculation and Science - Units"
  },
  {
    "id": "grand100-q92",
    "questionNumber": 92,
    "question": "What is the mechanical advantage (MA) of a simple machine with a load of 1000 N lifted by an effort of 250 N?",
    "options": [
      "2",
      "4",
      "0.25",
      "250"
    ],
    "correctOptionIndex": 1,
    "explanation": "Mechanical Advantage (MA) = Load / Effort = 1000 N / 250 N = 4.",
    "rankerTip": "Efficiency = (Mechanical Advantage / Velocity Ratio) x 100%.",
    "topic": "Workshop Calculation and Science - Simple Machines"
  },
  {
    "id": "grand100-q93",
    "questionNumber": 93,
    "question": "Vicat's apparatus is used to determine the:",
    "options": [
      "Initial setting time of cement",
      "Final setting time of cement",
      "Normal consistency of cement",
      "All of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Vicat's apparatus is a standard testing instrument used for multiple cement tests: a 10 mm diameter plunger is used for the standard/normal consistency test (P), a 1 mm square needle for the initial setting time test, and an annular collar needle for the final setting time test.",
    "rankerTip": "Vicat plunger (10 mm) = Consistency (P); 1 mm square needle = Initial setting; Annular needle = Final setting.",
    "topic": "Building Materials and Construction - Cement Testing - Vicat Apparatus"
  },
  {
    "id": "grand100-q94",
    "questionNumber": 94,
    "question": "The heating of limestone to redness in contact with air is known as:",
    "options": [
      "Hydraulicity",
      "Calcination",
      "Carbonation",
      "Slaking"
    ],
    "correctOptionIndex": 1,
    "explanation": "Calcination is the process of heating limestone (CaCO3) to red heat (approx. 800–900°C) in the presence of air to drive off carbon dioxide, producing quicklime (CaO).",
    "rankerTip": "CaCO3 + Heat -> CaO + CO2 is Calcination. CaO + H2O -> Ca(OH)2 + Heat is Slaking.",
    "topic": "Building Materials and Construction - Lime - Calcination & Manufacture"
  },
  {
    "id": "grand100-q95",
    "questionNumber": 95,
    "question": "The alternate dry and wet conditions causes the development of ... in timber:",
    "options": [
      "Brown rot",
      "Dry rot",
      "Heart rot",
      "Wet rot"
    ],
    "correctOptionIndex": 3,
    "explanation": "Wet rot is caused by fungi attacking timber subjected to alternate wet and dry environments. Dry rot occurs in warm, damp, and unventilated conditions.",
    "rankerTip": "Alternate wet and dry conditions cause Wet Rot. Lack of ventilation with dampness causes Dry Rot.",
    "topic": "Building Materials and Construction - Timber - Fungal Decay & Wet Rot"
  },
  {
    "id": "grand100-q96",
    "questionNumber": 96,
    "question": "Which of the following is an igneous rock?",
    "options": [
      "Slate",
      "Kankar",
      "Gneiss",
      "Basalt"
    ],
    "correctOptionIndex": 3,
    "explanation": "Basalt is an extrusive (volcanic) igneous rock formed by the cooling of lava on the Earth's surface. (Slate and Gneiss are metamorphic; Kankar is sedimentary).",
    "rankerTip": "Igneous: Granite, Basalt, Trap, Diorite, Gabbro. Metamorphic: Marble, Slate, Gneiss, Quartzite. Sedimentary: Limestone, Sandstone, Kankar, Shale.",
    "topic": "Building Materials and Construction - Stones - Igneous Rocks & Basalt"
  },
  {
    "id": "grand100-q97",
    "questionNumber": 97,
    "question": "The normal consistency of Portland cement is about:",
    "options": [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    "correctOptionIndex": 3,
    "explanation": "Standard consistency (P) of Ordinary Portland Cement typically ranges between 25% and 30% by weight of dry cement.",
    "rankerTip": "Standard consistency of OPC ≈ 25% to 30%. Initial & final setting time test uses 0.85P water; Soundness test uses 0.78P water.",
    "topic": "Building Materials and Construction - Cement - Standard Consistency"
  },
  {
    "id": "grand100-q98",
    "questionNumber": 98,
    "question": "The main function of alumina in brick earth is:",
    "options": [
      "To impart plasticity",
      "To make the brick durable",
      "To prevent shrinkage",
      "To make the brick impermeable"
    ],
    "correctOptionIndex": 0,
    "explanation": "Alumina (Al2O3) is the essential ingredient in clay that provides plasticity, enabling the brick earth to be moulded into shape.",
    "rankerTip": "Alumina imparts plasticity for moulding. Silica prevents shrinkage, cracking, and warping. Iron oxide gives red color.",
    "topic": "Building Materials and Construction - Bricks - Composition & Plasticity"
  },
  {
    "id": "grand100-q99",
    "questionNumber": 99,
    "question": "The initial setting time of ordinary Portland cement shall not be:",
    "options": [
      "Less than 30 minutes",
      "Less than 25 minutes",
      "Less than 45 minutes",
      "More than 30 minutes"
    ],
    "correctOptionIndex": 0,
    "explanation": "As per IS 269 / IS 456, the initial setting time of OPC shall not be less than 30 minutes, and the final setting time shall not exceed 600 minutes (10 hours).",
    "rankerTip": "OPC setting times: Initial setting time ≥ 30 minutes; Final setting time ≤ 600 minutes (10 hours).",
    "topic": "Building Materials and Construction - Cement - Setting Times (IS 269)"
  },
  {
    "id": "grand100-q100",
    "questionNumber": 100,
    "question": "The coarseness of the grains of a mineral is known as:",
    "options": [
      "Fracture",
      "Texture",
      "Streak",
      "Lustre"
    ],
    "correctOptionIndex": 1,
    "explanation": "Texture refers to the size, shape, and mutual arrangement of mineral grains (e.g., fine-grained, coarse-grained, porphyritic).",
    "rankerTip": "Texture = grain size and arrangement (fine, medium, coarse-grained). Fracture = surface appearance along a break.",
    "topic": "Building Materials and Construction - Stones & Minerals - Texture & Grain Structure"
  }
];

export const MOCK_TEST_KPSC_GRAND_100: MockTest = {
  id: 'mock-kpsc-grand-100',
  title: 'Kerala PSC 100-Mark Full Syllabus Grand Model Exam (All Modules)',
  category: 'Full-Length Kerala PSC',
  description: 'Official 100-mark full Kerala PSC examination adhering strictly to syllabus module weightages: Basic Engineering Drawing (10 Marks), Chain Survey (12 Marks), Compass Survey (12 Marks), Planetable Survey (5 Marks), Levelling & Contouring (15 Marks), Theodolite Survey (10 Marks), Modern Survey Instruments (8 Marks), AutoCAD (8 Marks), Workshop Calculation & Science (12 Marks), and Building Materials & Construction (8 Marks). Evaluated with standard Kerala PSC -0.33 negative marking. Open for everyone to write and evaluate their rank.',
  durationMinutes: 75,
  totalQuestions: 100,
  marksPerCorrect: 1,
  negativeMarksPerWrong: 0.33,
  totalMarks: 100,
  difficulty: 'PSC Standard (Advanced)',
  attemptsCount: 1420,
  isRankedExam: true,
  examCode: 'KPSC-SURVEYOR-GRAND-100',
  targetDepartment: 'Survey & Land Records / Kerala Water Authority / PWD',
  questions: KPSC_GRAND_100_QUESTIONS
};
