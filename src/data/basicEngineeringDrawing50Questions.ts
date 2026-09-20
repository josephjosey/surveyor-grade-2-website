import { BankQuestion, MockTest } from '../types';

export const BASIC_ENGINEERING_DRAWING_50_QUESTIONS: BankQuestion[] = [
  {
    "id": "bq-bed50-1",
    "moduleId": "mod-1",
    "moduleNumber": 1,
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
    "topic": "Drawing Sheets - Dimensions & Ratios",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-2",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the length to width ratio of the A2 drawing paper?",
    "options": [
      "1 : 2",
      "1 : √2",
      "1 : 2√2",
      "√2 : 1"
    ],
    "correctOptionIndex": 3,
    "explanation": "All standard trimmed paper sheets (A0 through A5) maintain a constant aspect ratio of length : width = √2 : 1 ≈ 1.414 : 1 (for A2: 594 mm × 420 mm, where 594 / 420 ≈ √2).",
    "rankerTip": "Length : Width ratio for all standard \"A\" series sheets is √2 : 1 ≈ 1.414 : 1.",
    "topic": "Drawing Sheets - Aspect Ratio",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-3",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A diagonal scale of RF 10 is constructed to measure maximum distance of 10 mm. The LC (Least Count) of this scale would be:",
    "options": [
      "0.01 mm",
      "0.1 mm",
      "1 mm",
      "10 mm"
    ],
    "correctOptionIndex": 0,
    "explanation": "A diagonal scale is used to measure three units or two decimal fractions. When measuring up to millimetres, the diagonal divisions divide the sub-unit (0.1 mm) into 10 parts, giving a least count of 0.01 mm.",
    "rankerTip": "Least count of diagonal scale measuring down to 2 decimal places in mm is 0.01 mm.",
    "topic": "Scales - Diagonal Scale & Least Count",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-4",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Scale used in a drawing is 1:2. The actual length of a 10 mm line in the drawing is:",
    "options": [
      "5 mm",
      "10 mm",
      "20 mm",
      "None of the above"
    ],
    "correctOptionIndex": 2,
    "explanation": "Representative Fraction (RF) = Drawing Length / Actual Length ⇒ 1/2 = 10 mm / Actual Length ⇒ Actual Length = 10 × 2 = 20 mm.",
    "rankerTip": "RF = 1:2 is a reducing scale. Actual Length = Drawing Length / RF = 10 / (1/2) = 20 mm.",
    "topic": "Scales - Representative Fraction & Scale Factor",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-5",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following is Hyperbola Equation?",
    "options": [
      "y² + x²/y² = 1",
      "x² = 4ay",
      "x²/a² − y²/b² = 1",
      "x² + y² = 1"
    ],
    "correctOptionIndex": 2,
    "explanation": "The standard Cartesian equation of a hyperbola centered at the origin is x²/a² − y²/b² = 1 (eccentricity e > 1). x² = 4ay is a parabola, and x² + y² = 1 is a circle.",
    "rankerTip": "Ellipse: x²/a² + y²/b² = 1 (e < 1); Hyperbola: x²/a² - y²/b² = 1 (e > 1); Parabola: y² = 4ax (e = 1); Circle: x² + y² = r² (e = 0).",
    "topic": "Curves - Conic Sections & Equations",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-6",
    "moduleId": "mod-1",
    "moduleNumber": 1,
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
    "topic": "Drawing Instruments - Protractor",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-7",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A four-sided figure with its opposite sides equal but the angles are not right angles is known as:",
    "options": [
      "Rhombus",
      "Trapezium",
      "Rhomboid",
      "None of the above"
    ],
    "correctOptionIndex": 2,
    "explanation": "A rhomboid is a parallelogram in which opposite sides are parallel and equal, but adjacent sides are unequal and interior angles are oblique (not 90°). In a rhombus, all four sides are equal.",
    "rankerTip": "Opposite sides equal & angles not 90° = Rhomboid. All 4 sides equal & angles not 90° = Rhombus.",
    "topic": "Geometrical Construction - Quadrilaterals",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-8",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Dimensioning starting from a common feature and shown to the right and to the left of the common feature is called:",
    "options": [
      "Chain dimensioning",
      "Parallel dimensioning",
      "Dimensioning by coordinates",
      "Combined dimensioning"
    ],
    "correctOptionIndex": 1,
    "explanation": "Superimposed running dimensioning originating from a common zero/datum point in two opposite directions is classified under parallel dimensioning.",
    "rankerTip": "Parallel dimensioning uses a common baseline or datum feature. Chain dimensioning places dimensions in continuous series end-to-end.",
    "topic": "Dimensioning - Systems & Placement",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-9",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In unidirectional system the dimensions are:",
    "options": [
      "Placed above the dimension line",
      "Placed below the dimension line",
      "Placed by breaking the dimension line in middle",
      "None of the above"
    ],
    "correctOptionIndex": 2,
    "explanation": "In unidirectional dimensioning, all dimensional values are aligned horizontally and placed within an interruption (break) in the middle of the dimension line so that they can be read solely from the bottom of the drawing sheet.",
    "rankerTip": "Unidirectional system: dimensions are horizontal, breaking the dimension line, read only from bottom. Aligned system: placed above and parallel to dimension line, read from bottom and right.",
    "topic": "Dimensioning - Unidirectional & Aligned Systems",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-10",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which grade of pencil is used for drawing arrowheads?",
    "options": [
      "2B",
      "2H",
      "5H",
      "H"
    ],
    "correctOptionIndex": 3,
    "explanation": "Arrowheads, lettering, dimensions, and finished visible outlines are drawn with an H pencil (sharp and dense black lines without smudging). 2H/3H pencils are used for construction and projection lines.",
    "rankerTip": "H pencil is standard for arrowheads, dimensions, lettering, and outlines. 2H is for construction and dimension lines.",
    "topic": "Drawing Instruments - Pencil Grades",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-11",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which is the standard code specifies the sizes and layout of drawing sheet?",
    "options": [
      "IS 696-1972",
      "IS 9609-2001",
      "IS 10711-1983",
      "IS 10714-2001"
    ],
    "correctOptionIndex": 2,
    "explanation": "Bureau of Indian Standards (BIS) IS 10711-1983 (SP 46) specifies the sizes and layout of drawing sheets. (IS 9609 is for lettering, IS 10714 is for general line conventions).",
    "rankerTip": "IS 10711 = Sizes and layout of drawing sheets; IS 9609 = Lettering; IS 10714 = Lines; IS 11669 = Dimensioning.",
    "topic": "BIS Standards - Drawing Sheets (IS 10711)",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-12",
    "moduleId": "mod-1",
    "moduleNumber": 1,
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
    "topic": "Projections - Projection of Points (3rd Quadrant)",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-13",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which diagram below shows a correct geometrical construction of bisecting an angle?",
    "options": [
      "Arc centered on angle arm only",
      "Bisector perpendicular to base without intersection",
      "Single arc with non-intersecting radial lines",
      "Arc intersecting both arms, intersecting arcs drawn from these points, and line from vertex passing through the intersection"
    ],
    "correctOptionIndex": 3,
    "explanation": "To bisect an angle, draw an arc of arbitrary radius centered at vertex O cutting arms at A and B. Then, from centers A and B, draw arcs of equal radius intersecting at point P. The ray OP is the true angle bisector.",
    "rankerTip": "Angle bisector construction: center at vertex cuts both arms, then equal intersecting arcs from those arm points form the bisector ray.",
    "topic": "Geometrical Construction - Bisection of Angles",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-14",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When the cutting plane is inclined to the axis of the right circular cone and parallel to one of its generators, the section obtained is:",
    "options": [
      "Rectangular hyperbola",
      "Parabola",
      "Ellipse",
      "Hyperbola"
    ],
    "correctOptionIndex": 1,
    "explanation": "If a cutting plane cuts through a cone parallel to any one generator (i.e., angle of cutting plane θ = α, the semi-vertical angle), the resulting conic section is a parabola.",
    "rankerTip": "Parallel to generator (θ = α) = Parabola; Cuts all generators (θ > α) = Ellipse; Parallel to axis (θ < α) = Hyperbola; Perpendicular to axis = Circle.",
    "topic": "Curves - Conic Sections of Cone",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-15",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following conics has an eccentricity as unity?",
    "options": [
      "Circle",
      "Parabola",
      "Ellipse",
      "Hyperbola"
    ],
    "correctOptionIndex": 1,
    "explanation": "Eccentricity (e) values: Circle: e = 0; Ellipse: 0 < e < 1; Parabola: e = 1 (unity); Hyperbola: e > 1.",
    "rankerTip": "Circle: e = 0; Ellipse: e < 1; Parabola: e = 1; Hyperbola: e > 1.",
    "topic": "Curves - Eccentricity of Conics",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-16",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "How many pairs of parallel lines are there in regular hexagon?",
    "options": [
      "2",
      "3",
      "6",
      "1"
    ],
    "correctOptionIndex": 1,
    "explanation": "A regular hexagon has 6 equal edges forming 3 pairs of mutually parallel opposite sides.",
    "rankerTip": "Regular hexagon has 6 sides, opposite sides are parallel, yielding 6 / 2 = 3 pairs of parallel lines.",
    "topic": "Geometrical Construction - Polygons",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-17",
    "moduleId": "mod-1",
    "moduleNumber": 1,
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
    "topic": "Drawing Sheets - BIS Sheet Sizes",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-18",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following pencil leads is hardest?",
    "options": [
      "HB",
      "H",
      "B",
      "F"
    ],
    "correctOptionIndex": 1,
    "explanation": "The pencil hardness scale from soft to hard is: 7B ... B < HB < F < H ... 9H. Among HB, H, B, and F, H has the highest lead hardness.",
    "rankerTip": "Order of increasing hardness: 7B to B < HB < F < H to 9H. Hardest among (HB, H, B, F) is H.",
    "topic": "Drawing Instruments - Pencil Grades",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-19",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When 1 cm on a map represents 10 m on the ground, representative fraction is:",
    "options": [
      "1/10",
      "1/100",
      "1/1000",
      "1/10000"
    ],
    "correctOptionIndex": 2,
    "explanation": "RF = Drawing length / Actual length = 1 cm / 10 m = 1 cm / (10 × 100 cm) = 1 / 1000.",
    "rankerTip": "10 m = 1000 cm. RF = 1 cm / 1000 cm = 1 / 1000.",
    "topic": "Scales - Representative Fraction",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-20",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In the first angle projection:",
    "options": [
      "Object is between the observer and the plane of projection",
      "Plane of projection is between the observer and the object",
      "Both A and B",
      "None of the above"
    ],
    "correctOptionIndex": 0,
    "explanation": "In 1st angle projection, the object lies in quadrant I: Observer → Object → Projection Plane. In 3rd angle projection, the projection plane lies between the observer and the object.",
    "rankerTip": "1st angle: Observer -> Object -> Plane. 3rd angle: Observer -> Plane -> Object.",
    "topic": "Projections - First vs Third Angle",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-21",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The dotted line (dashed line) represents:",
    "options": [
      "Hidden edge",
      "Projection line",
      "Mitre line",
      "Hatching line"
    ],
    "correctOptionIndex": 0,
    "explanation": "Dashed lines of medium thickness (Type E / Type F according to IS 10714) represent hidden outlines and hidden edges in engineering views.",
    "rankerTip": "Dashed lines (medium thickness) = hidden edges. Thin continuous = dimension/projection lines. Thin chain = center lines.",
    "topic": "Lines - Types of Lines & Conventions",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-22",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The ratio of isometric length to its true length is nearly:",
    "options": [
      "0.086",
      "1.222",
      "0.816",
      "0.185"
    ],
    "correctOptionIndex": 2,
    "explanation": "Isometric Length / True Length = √(2/3) = cos 45° / cos 30° ≈ 0.8165 (or 81.65%).",
    "rankerTip": "Isometric length = 0.816 × True length (or √(2/3) × True length).",
    "topic": "Isometric Projection - Isometric Scale",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-23",
    "moduleId": "mod-1",
    "moduleNumber": 1,
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
    "topic": "Scales - Diagonal Scale",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-24",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The size of the letter is described by its:",
    "options": [
      "Height",
      "Length",
      "Shade",
      "Inclination"
    ],
    "correctOptionIndex": 0,
    "explanation": "According to BIS IS 9609, standard lettering size (h) is always designated by the nominal height of capital letters in millimetres (2.5, 3.5, 5, 7, 10, 14, 20 mm).",
    "rankerTip": "Nominal height (h) of capital letters defines the lettering size as per IS 9609.",
    "topic": "Lettering - Standards & Designation (IS 9609)",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-25",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The scale on which three dimensions can be measured is known as:",
    "options": [
      "Chord scale",
      "Plain scale",
      "Diagonal scale",
      "None of the above"
    ],
    "correctOptionIndex": 2,
    "explanation": "Measuring three dimensions or up to two decimal places is done using a diagonal scale based on the principle of similar triangles.",
    "rankerTip": "Diagonal scale measures 3 dimensions/units based on similar triangles.",
    "topic": "Scales - Diagonal Scale",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-26",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The drawing sheet is so folded that the ------- is always on the top:",
    "options": [
      "Title block",
      "Conventions",
      "Letters",
      "Numbers"
    ],
    "correctOptionIndex": 0,
    "explanation": "Standard folding rules (IS 10711) mandate that the title block (at the bottom-right corner of the sheet) must remain completely visible on the top front fold for quick identification in filing.",
    "rankerTip": "Title block must always appear on the top fold of folded drawings (IS 10711).",
    "topic": "Drawing Sheets - Folding Methods (IS 10711)",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-27",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Outline or principal lines are drawn as:",
    "options": [
      "Long and thin chain lines",
      "Thick continuous line",
      "Thin continuous line",
      "Dashed lines of medium thickness"
    ],
    "correctOptionIndex": 1,
    "explanation": "Visible outlines, edges, and principal boundaries are designated as Type A lines (Continuous thick lines, approximately 0.5 mm to 0.7 mm).",
    "rankerTip": "Type A line = Continuous thick = Visible outlines and principal edges.",
    "topic": "Lines - Types of Lines & Thickness",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-28",
    "moduleId": "mod-1",
    "moduleNumber": 1,
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
    "topic": "Projections - Projection Symbols",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-29",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Line AB 30° inclined to HP and parallel to VP. If the line is at first quadrant which one of the following statement is correct?",
    "options": [
      "Elevation will be of actual length 30° inclined and below XY line",
      "Elevation will be shorter than actual length and above XY line",
      "Elevation will be shorter than actual length 30° inclined and below XY line",
      "Elevation will be of actual length 30° inclined and above XY line"
    ],
    "correctOptionIndex": 3,
    "explanation": "In the 1st quadrant, elevation (front view) appears above the XY line. Because the line is parallel to VP, its projection on VP shows its true/actual length and true inclination of 30° to HP.",
    "rankerTip": "Line parallel to VP: front view (elevation) shows true length and true inclination θ to HP, situated above XY in 1st quadrant.",
    "topic": "Projections - Projection of Straight Lines",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-30",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The outer line of an objects are drawn using ------- Pencil.",
    "options": [
      "HB",
      "H",
      "2H",
      "3H"
    ],
    "correctOptionIndex": 1,
    "explanation": "An H pencil is standard for visible outlines, border finishing, and dimensioning arrowheads in professional drafting.",
    "rankerTip": "Outlines & border lines = H pencil; Construction lines = 2H/3H; Freehand sketching/lettering = HB/H.",
    "topic": "Drawing Instruments - Pencils",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-31",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which one of the following statement is not correct in the case of aligned system?",
    "options": [
      "Dimension value placed perpendicular to the dimension line",
      "Dimension can be read only from the bottom edge of the drawing sheet",
      "Dimension can be read from the bottom edge or right hand edge of the drawing sheet",
      "Dimension should be placed near the middle and above but clear of the dimension line"
    ],
    "correctOptionIndex": 1,
    "explanation": "In an aligned system, dimensions are aligned parallel to the dimension lines and read from the bottom or the right-hand edge. Reading only from the bottom edge describes the unidirectional system, not the aligned system.",
    "rankerTip": "Aligned system allows reading from bottom and right-hand edge. Unidirectional allows reading only from bottom.",
    "topic": "Dimensioning - Systems & Rules",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-32",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The first dimension line should be placed at least:",
    "options": [
      "10 mm from the construction line",
      "12 mm from the construction line",
      "8 mm from the construction line",
      "9 mm from the construction line"
    ],
    "correctOptionIndex": 0,
    "explanation": "Drafting standards recommend placing the first dimension line at least 10 mm away from the outline of the object, with parallel dimension lines spaced at least 6 to 8 mm apart.",
    "rankerTip": "First dimension line: minimum 10 mm from outline. Successive parallel dimension lines: minimum 6 to 8 mm apart.",
    "topic": "Dimensioning - Spacing Guidelines",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-33",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A line CD 141.4 mm long inclined 45° to vertical plane and parallel to horizontal plane. The front view of line CD measures ...... mm:",
    "options": [
      "141.4",
      "14.14",
      "100",
      "70.7"
    ],
    "correctOptionIndex": 2,
    "explanation": "Front view length = L × cos ϕ = 141.4 × cos 45° = 141.4 × (1 / √2) = 141.4 × 0.7071 ≈ 100 mm.",
    "rankerTip": "Front view of line inclined to VP by ϕ: Length = L cos ϕ = 141.4 × cos 45° = 100 mm.",
    "topic": "Projections - Projection of Lines (Calculations)",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-34",
    "moduleId": "mod-1",
    "moduleNumber": 1,
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
    "topic": "Projections - Apparent Angles of Lines",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-35",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which one of the following scales is the smallest?",
    "options": [
      "1 mm = 1 m",
      "RF = 1/2000",
      "1 : 20000",
      "1 cm = 1 km"
    ],
    "correctOptionIndex": 3,
    "explanation": "Comparing Representative Fractions: (a) 1 mm / 1 m = 1/1000; (b) RF = 1/2000; (c) RF = 1/20000; (d) 1 cm / 1 km = 1 / 100,000. 1/100,000 is the smallest fraction, so (d) is the smallest scale.",
    "rankerTip": "1 cm = 1 km means RF = 1 / 100,000, which has the largest denominator and is thus the smallest scale.",
    "topic": "Scales - Comparison of Scales",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-36",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The T-Square with the working edge length of 1000 ± 10 mm, is designated as:",
    "options": [
      "T0",
      "T2",
      "T1",
      "T3"
    ],
    "correctOptionIndex": 2,
    "explanation": "Standard T-square sizes according to BIS (IS 1364): T0: 1500 mm; T1: 1000 mm; T2: 700 mm; T3: 500 mm.",
    "rankerTip": "T-Square designations: T0 (1500 mm), T1 (1000 mm), T2 (700 mm), T3 (500 mm).",
    "topic": "Drawing Instruments - T-Square (IS 1364)",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-37",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "An ellipse has ------- vertices and ------- foci.",
    "options": [
      "two, two",
      "one, two",
      "one, one",
      "two, one"
    ],
    "correctOptionIndex": 0,
    "explanation": "An ellipse has two principal vertices (the endpoints of the major axis) and two foci (F1 and F2).",
    "rankerTip": "Ellipse has 2 vertices and 2 foci. Parabola has 1 vertex and 1 focus. Hyperbola has 2 vertices and 2 foci.",
    "topic": "Curves - Elements of Ellipse",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-38",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "10 centimetre is:",
    "options": [
      "10 mm",
      "1 cm",
      "1 decimetre",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "In metric measurement: 10 mm = 1 cm; 10 cm = 1 decimetre (dm); 10 dm = 1 metre (m).",
    "rankerTip": "10 mm = 1 cm; 10 cm = 1 decimetre (dm); 100 cm = 1 metre.",
    "topic": "Units & Measurements - Metric Units",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-39",
    "moduleId": "mod-1",
    "moduleNumber": 1,
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
    "topic": "Curves - Hyperbola & Asymptotes",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-40",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Where the plan is placed in third angle projection?",
    "options": [
      "Below elevation",
      "Above elevation",
      "Left of elevation",
      "Right of elevation"
    ],
    "correctOptionIndex": 1,
    "explanation": "In 3rd angle projection, the projection planes are assumed transparent: Top View (Plan) is placed above the Front View (Elevation). In 1st angle projection, the Plan is placed below the Elevation.",
    "rankerTip": "3rd Angle: Plan is ABOVE elevation. 1st Angle: Plan is BELOW elevation.",
    "topic": "Projections - Orthographic Views Placement",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-41",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "For thin chain line alternate long and short dashes are in proportion ranging from:",
    "options": [
      "6:1 to 4:1",
      "9:1 to 3:1",
      "6:2 to 4:2",
      "9:1 to 4:1"
    ],
    "correctOptionIndex": 0,
    "explanation": "In long-dashed dotted / thin chain lines (used for center lines and axes), long dashes are typically 9 to 12 mm and short dashes/dots are 1.5 to 2 mm, giving a proportion ranging from 6:1 to 4:1.",
    "rankerTip": "Chain line proportion of long to short dash is between 6:1 and 4:1.",
    "topic": "Lines - Chain Line Proportions",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-42",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The type of Vernier in which the Vernier divisions are marked in the opposite direction of the main scale is:",
    "options": [
      "Vernier Scale",
      "Forward Vernier",
      "Backward Vernier",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "In a backward (retrograde) vernier, divisions are numbered in the direction opposite to the main scale, and n vernier divisions equal (n+1) main scale divisions (V > S).",
    "rankerTip": "Direct/Forward vernier: same direction, n V = (n - 1) S (V < S). Retrograde/Backward vernier: opposite direction, n V = (n + 1) S (V > S).",
    "topic": "Scales - Vernier Types (Direct vs Retrograde)",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-43",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "To represent two units of measurement ....... scale is used.",
    "options": [
      "Diagonal scale",
      "Plane scale",
      "Scale of chords",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "A plain (plane) scale is used to indicate two consecutive units of measurement (e.g., metres and decimetres, or kilometres and hectometres).",
    "rankerTip": "Plain scale represents 2 units (or a unit and its fractional subdivision).",
    "topic": "Scales - Plain Scale",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-44",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When the section plane is inclined to the axis of the cone and cuts all the generators, the section obtained is:",
    "options": [
      "Ellipse",
      "Parabola",
      "Hyperbola",
      "Helix"
    ],
    "correctOptionIndex": 0,
    "explanation": "When a cutting plane cuts all generators of a right circular cone at an angle greater than the semi-vertical angle α, the true shape of the section is an ellipse.",
    "rankerTip": "Section plane cuts ALL generators of a cone = Ellipse.",
    "topic": "Curves - Conic Sections of Cone",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-45",
    "moduleId": "mod-1",
    "moduleNumber": 1,
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
    "topic": "Projections - Lines Parallel to One Plane",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-46",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which is/are not the central conic/s?",
    "options": [
      "Ellipse",
      "Parabola",
      "Hyperbola",
      "All of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Both ellipses and hyperbolas possess a center of symmetry through which all chords are bisected, making them central conics. A parabola does not have a center of symmetry and is non-central.",
    "rankerTip": "Central conics = Ellipse and Hyperbola. Non-central conic = Parabola.",
    "topic": "Curves - Central vs Non-Central Conics",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-47",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The recommended method of Dimensioning of a sphere with diameter 50 mm is:",
    "options": [
      "ϕ50S",
      "S 50ϕ",
      "50ϕS",
      "Sϕ50"
    ],
    "correctOptionIndex": 3,
    "explanation": "According to BIS (IS 10714) and ISO drafting rules, spherical features are dimensioned by prefixing the symbol S before the diameter symbol ϕ, formatted as Sϕ50 (or SR25 for spherical radius).",
    "rankerTip": "Sphere dimensioning: Sϕ followed by diameter value (e.g. Sϕ50) or SR followed by radius (SR25).",
    "topic": "Dimensioning - Spherical Features",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-48",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The continuous thin line connecting a dimensional value or some information relating to a feature in an engineering drawing is:",
    "options": [
      "Extension line",
      "Dimension line",
      "Break line",
      "Leader line"
    ],
    "correctOptionIndex": 3,
    "explanation": "A leader line is a continuous thin line with an arrowhead or dot pointing to a feature and an inclined/horizontal portion terminating at a note, dimension, or reference symbol.",
    "rankerTip": "Leader line connects an explanatory note, symbol, or dimension value to the feature on the drawing.",
    "topic": "Lines - Leader Line Conventions",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-49",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The method of projection in which the projectors are parallel to each other and perpendicular to the plane of projection is:",
    "options": [
      "Isometric Projection",
      "Orthographic Projection",
      "Oblique Projection",
      "Perspective Projection"
    ],
    "correctOptionIndex": 1,
    "explanation": "Orthographic projection (ortho = perpendicular, graphic = drawing) projects parallel rays from an object normal (90°) to the projection plane.",
    "rankerTip": "Orthographic: projectors parallel to each other and perpendicular (90°) to projection plane.",
    "topic": "Projections - Orthographic Principles",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  },
  {
    "id": "bq-bed50-50",
    "moduleId": "mod-1",
    "moduleNumber": 1,
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
    "topic": "Lines - Break Lines (Type C & D)",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Engineering Drawing Bank",
    "year": 2024,
    "createdAt": "2026-09-21T00:00:00Z"
  }
];

export const MOCK_TEST_BASIC_ENGINEERING_DRAWING_50: MockTest = {
  id: 'mock-bed-50',
  title: 'Basic Engineering Drawing 50 MCQ High-Yield Master Practice Exam',
  category: 'Module Specific',
  description: 'Comprehensive 50-question Kerala PSC examination covering Basic Engineering Drawing: Drawing sheet sizes & layout (IS 10711, A0-A5, ratio 1:2 and √2:1, folding rules), Drafting instruments (T-square T0-T3, protractor, pencil grades H/2H/HB), Lines & Lettering (IS 10714 line types A-F, IS 9609 lettering height, long/short break lines), Scales (RF, reducing/enlarging, plain, diagonal LC 0.01mm, retrograde/backward vernier), Geometrical construction & Conics (ellipse e<1, parabola e=1, hyperbola e>1 & asymptotes, cutting planes), Dimensioning systems (unidirectional vs aligned, spacing, leader lines, sphere Sϕ50), and Projections (1st vs 3rd angle, projection of points and straight lines, isometric scale 0.816). Evaluated under official PSC pattern with -0.33 negative marking.',
  durationMinutes: 50,
  totalQuestions: 50,
  marksPerCorrect: 1,
  negativeMarksPerWrong: 0.33,
  totalMarks: 50,
  difficulty: 'PSC Standard (Advanced)',
  attemptsCount: 82,
  examCode: 'KPSC-MOD-01-BED-50',
  targetDepartment: 'Survey & Land Records / Kerala Water Authority / PWD',
  questions: BASIC_ENGINEERING_DRAWING_50_QUESTIONS.map((q, idx) => ({
    id: q.id,
    questionNumber: idx + 1,
    question: q.question,
    options: q.options,
    correctOptionIndex: q.correctOptionIndex,
    explanation: q.explanation,
    rankerTip: q.rankerTip,
    topic: q.topic || 'Basic Engineering Drawing'
  }))
};
