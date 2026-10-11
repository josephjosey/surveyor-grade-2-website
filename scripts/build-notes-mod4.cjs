const { ModulePdfBuilder } = require('./create-module-pdf-engine.cjs');

async function buildModule4() {
  const builder = new ModulePdfBuilder({
    moduleNumber: 4,
    moduleTitle: "Planetable Surveying",
    marks: "10 Marks",
    topics: "Principles of Plane Tabling (Parallelism), Plane Table Equipment & Accessories (Alidade, Trough Compass, Spirit Level, Plumbing Fork & Plumb Bob), Temporary Adjustments (Fixing, Leveling, Centering, Orientation), Methods of Orientation (Back-sighting vs Magnetic needle), Four Survey Methods (Radiation, Intersection, Traversing, Resection), Two-Point Problem & Three-Point Problem, Solutions of Three-Point Problem (Mechanical, Bessel's, Lehmann's Trial & Error), Lehmann's Rules & Danger Circle Condition, Errors & Precautions in Plane Tabling.",
    outputFilename: "module-04-planetable-survey.pdf"
  });

  builder.addCoverPage();

  // CHAPTER 1
  builder.addSectionHeader("CHAPTER 1: INTRODUCTION & FUNDAMENTAL PRINCIPLE OF PLANE TABLING");
  builder.addParagraph("Plane table surveying is a graphical method of surveying in which field observations and plotting of details proceed simultaneously on the drawing sheet in the field itself. No field book is kept, and the surveyor can directly compare the plotted map with the actual ground features, virtually eliminating the possibility of omitting important details.");

  builder.addSubSectionHeader("1.1 The Fundamental Principle of Plane Tabling: Parallelism");
  builder.addParagraph("The fundamental principle of plane table surveying is PARALLELISM: all rays drawn on the paper from a station must be strictly parallel to the corresponding ground lines connecting the ground station to the visible objects. Furthermore, the position of the plane table board at every consecutive station must remain parallel to its initial orientation at the first station.");

  builder.addSubSectionHeader("1.2 Advantages and Disadvantages of Plane Table Surveying");
  builder.addTable(
    ["Advantages", "Disadvantages / Limitations"],
    [
      ["Field observations and plotting are done simultaneously; no separate field book is required, minimizing booking mistakes", "Not suitable for work in wet, rainy, or highly humid climates (drawing paper warps, stretches, or gets ruined)"],
      ["Omission of vital field details is prevented because the map is drafted in full view of the actual terrain", "Heavy, cumbersome equipment to transport over rugged terrain compared to compass or chain"],
      ["Topographical contours and irregular natural boundaries (streams, cliffs) can be sketched with high fidelity", "Cannot be replotted to a different scale or recalculated numerically if original drawing paper is lost"],
      ["Ideal for small-scale and medium-scale mapping, cadastral filling-in, and military reconnaissance", "Not intended for high-precision geodetic control networks (governed by mechanical plotting accuracy of 0.25 mm)"],
      ["Less time-consuming and cheaper than theodolite surveying for general topographic detailing", "Strictly limited to daylight and clear atmospheric conditions; impossible in foggy, dusty, or windy weather"]
    ],
    [250, 250]
  );

  builder.addFocusBox("FUNDAMENTAL PRINCIPLE OF PLANE TABLING", "The fundamental governing principle of plane tabling is PARALLELISM. Rays drawn on the drawing sheet are parallel to the lines on the ground. Orientation is the operation that maintains this parallelism at all instrument stations.");

  // CHAPTER 2
  builder.addSectionHeader("CHAPTER 2: PLANE TABLE EQUIPMENT & ESSENTIAL ACCESSORIES");
  builder.addParagraph("A standard plane table outfit consists of the board with tripod and five vital drafting and orientation accessories.");

  builder.addTable(
    ["Equipment / Accessory", "Description, Construction & Specifications", "Primary Purpose in Field"],
    [
      ["Plane Table Board", "Mounted on rigid tripod with ball-and-socket or leveling head; made of well-seasoned teak or pine (750 × 600 mm, 600 × 450 mm, or 500 × 400 mm; 15-20 mm thick)", "Provides a flat, smooth, warp-free drafting surface"],
      ["Plain Alidade", "Straight wooden or brass ruler (approx 450-500 mm long) with beveled fiducial working edge; fitted with two hinged vertical vanes (sight vane with pinhole/slit; object vane with stretched horsehair)", "Used for sighting ground objects and drawing directional rays along the beveled fiducial edge"],
      ["Telescopic Alidade", "Alidade fitted with a telescope, vertical graduated arc, and level tube; incorporates stadia hairs for tacheometric distance & elevation measurements", "Used for long-range sighting, steep inclined sights, and determining contour heights tacheometrically"],
      ["Trough Compass", "Long magnetic needle (approx 125-150 mm) in a narrow rectangular non-magnetic brass box with glass cover; end scales graduated 0° to 5° on either side of zero", "Used for orienting the plane table along the magnetic meridian and marking the North line on the drawing"],
      ["Spirit Level", "Tubular circular or rectangular level tube with sensitive spirit bubble; flat polished bottom surface", "Used for leveling the plane table board in two mutually perpendicular directions"],
      ["Plumbing Fork & Plumb Bob", "U-shaped hair-pin metal frame with pointed upper arm and suspended plumb bob on lower hook; upper tip rests on paper point", "Used for exact CENTERING of the ground station peg directly under the plotted point on the sheet"]
    ],
    [115, 235, 150]
  );

  builder.addFocusBox("ALIDADE FIDUCIAL EDGE", "The beveled working edge of an alidade is called the FIDUCIAL EDGE. All rays must be ruled strictly along this edge, and the sight vanes must be truly perpendicular to this edge.");

  builder.addSubSectionHeader("2.1 Drawing Paper Preparation & Mounting");
  builder.addParagraph("Drawing paper quality is critical in plane tabling because the sheet is exposed directly to outdoor sunlight, wind, and atmospheric humidity throughout the working day.");
  builder.addBulletPoints([
    { bold: "Paper Selection", text: "High-grade hand-made drawing paper (Whatman's paper) or zinc-mounted paper is preferred. Metal-mounted paper consists of a thin sheet of zinc or aluminum laminated between two sheets of paper; it exhibits practically zero distortion from humidity changes." },
    { bold: "Mounting on Board", text: "Paper is fixed tightly to the board using spring clips, brass thumbscrews, or drafting tape. Drawing pins are avoided near the working area as they obstruct the free movement of the alidade." },
    { bold: "Protective Cover", text: "The entire sheet is covered with a waterproof flap or tough brown paper with a small rectangular window cut out over the immediate area being mapped to keep the rest of the sheet clean and unsoiled." }
  ]);

  // CHAPTER 3
  builder.addSectionHeader("CHAPTER 3: SETTING UP THE PLANE TABLE & TEMPORARY ADJUSTMENTS");
  builder.addParagraph("Before any observations can be made, the plane table must be set up over the ground station. Setting up involves four operations performed in strict sequence: (1) Fixing on tripod, (2) Leveling, (3) Centering, and (4) Orientation.");

  builder.addSubSectionHeader("3.1 The Sequence of Operations");
  builder.addBulletPoints([
    { bold: "Step 1: Fixing the Table", text: "The board is firmly screwed onto the tripod head at a comfortable working height (elbow level of surveyor, approx 1.2 m above ground)." },
    { bold: "Step 2: Leveling the Board", text: "The spirit level is placed in two mutually perpendicular directions on the board, and the table is leveled by adjusting the tripod legs or ball-and-socket head until the bubble remains centered in all directions." },
    { bold: "Step 3: Centering the Station", text: "The plumbing fork (U-fork) is placed on the board with its upper pointed arm touching the plotted station point 'p', and the plumb bob suspended from the lower hook is brought exactly over the ground peg 'P'." },
    { bold: "Step 4: Orientation", text: "The process of keeping the table at every successive station parallel to its position at the first station. Mandatory whenever the table is shifted to a new station!" }
  ]);

  builder.addSubSectionHeader("3.2 Methods of Orientation");
  builder.addTable(
    ["Method of Orientation", "Procedure & Operational Principle", "Accuracy & Recommended Use"],
    [
      ["Orientation by Magnetic Needle (Trough Compass)", "Trough compass is placed along the magnetic meridian line drawn at the first station, and the board is rotated until needle reads zero", "Approximate method; subject to local attraction errors; used only for small-scale mapping or preliminary work"],
      ["Orientation by Back-Sighting", "Alidade is placed along the line connecting the current station 'b' to the previous station 'a'; board is rotated until ranging rod at A is bisected through the vanes", "MOST ACCURATE method; completely independent of magnetic disturbances; standard for all engineering surveys"]
    ],
    [135, 215, 150]
  );

  builder.addTrapBox("ORIENTATION VS CENTERING ACCURACY IN PSC", "PSC Question: 'Which error produces greater displacement of plotted points: Centering error or Orientation error?' Answer is ORIENTATION ERROR! A slight orientation error rotates the entire drawing sheet, causing large lateral displacements for distant points, whereas a centering error of 1 cm produces only 1 cm displacement on ground (negligible on drawing sheet).");

  // CHAPTER 4
  builder.addSectionHeader("CHAPTER 4: THE FOUR METHODS OF PLANE TABLE SURVEYING");
  builder.addParagraph("All plane table field operations are conducted using one or a combination of four fundamental methods: Radiation, Intersection, Traversing, and Resection.");

  builder.addSubSectionHeader("4.1 Radiation Method");
  builder.addBulletPoints([
    { bold: "Procedure", text: "The plane table is set up at a single central station P commanding the entire area. Rays are drawn from 'p' towards all surrounding boundary corners A, B, C, D... Linear distances PA, PB, PC... are measured with a chain or tape and plotted to scale along the rays." },
    { bold: "Suitability", text: "Best suited for small, open, fairly level areas where all points are easily accessible and intervisible from a single commanding station." }
  ]);

  builder.addSubSectionHeader("4.2 Intersection Method (Graphic Triangulation)");
  builder.addBulletPoints([
    { bold: "Procedure", text: "Two stations A and B are selected at a convenient distance apart, and the distance between them (BASE LINE) is accurately measured with a tape. The table is set up at station A, oriented towards B, and rays are drawn to all visible objects P, Q, R... The table is then shifted to B, oriented by back-sighting to A, and intersecting rays are drawn to the same objects. The intersection of corresponding rays fixes the plotted positions 'p', 'q', 'r' without measuring any distance to them!" },
    { bold: "Suitability", text: "Ideal for mountainous or rugged terrain, locating inaccessible points across rivers, swamps, ravines, and for establishing long-range topographic details." }
  ]);

  builder.addSubSectionHeader("4.3 Traversing Method");
  builder.addBulletPoints([
    { bold: "Procedure", text: "Similar to compass or theodolite traversing. The plane table is set up at each successive traverse station A, B, C, D in sequence. At each station, the table is oriented by back-sighting to the preceding station, and a forward ray is drawn to the next station. Distance between stations is chained and plotted." },
    { bold: "Suitability", text: "Adopted for running survey lines for roads, railways, rivers, pipelines, and forest boundary loops." }
  ]);

  builder.addSubSectionHeader("4.4 Resection Method");
  builder.addBulletPoints([
    { bold: "Definition", text: "The method of locating the position of the station OCCUPIED BY THE PLANE TABLE on the drawing sheet, by drawing rays to two or more known, previously plotted ground stations." },
    { bold: "Distinction from Other Methods", text: "In Radiation, Intersection, and Traversing, the table station is ALREADY KNOWN on paper and unknown target points are located. In Resection, the table station is UNKNOWN on paper and is determined by sighting known points!" },
    { bold: "Methods of Resection", text: "(1) Resection after orientation by compass; (2) Resection after orientation by back-sighting; (3) Resection by Two-Point Problem; (4) Resection by Three-Point Problem." }
  ]);

  // CHAPTER 5
  builder.addSectionHeader("CHAPTER 5: TWO-POINT AND THREE-POINT PROBLEMS");
  builder.addParagraph("Locating the occupied instrument station on the sheet when known stations are visible is the classic resection challenge.");

  builder.addSubSectionHeader("5.1 Two-Point Problem (Step-by-Step Field Procedure)");
  builder.addParagraph("The problem of finding the plotted position of the station occupied by the plane table on the drawing sheet by observing two well-defined points A and B whose positions 'a' and 'b' have already been plotted. It requires the assistance of an auxiliary station D and is executed in six field steps:");
  builder.addBulletPoints([
    { bold: "Step 1: Set up at Auxiliary Station D", text: "Select a suitable auxiliary station D such that the angles between D, C (the target station), A, and B are well-conditioned (not too acute). Set up the table at D, level it, and orient it approximately by eye or trough compass." },
    { bold: "Step 2: Sight Known Stations from D", text: "Pivoting the alidade about plotted points 'a' and 'b', draw rays towards ground stations A and B. These rays intersect at an auxiliary plotted point 'd₁'." },
    { bold: "Step 3: Draw Ray towards Target Station C", text: "Pivoting the alidade about 'd₁', draw a ray towards target station C. Estimate distance DC and mark an initial point 'c₁'." },
    { bold: "Step 4: Shift Table to Station C", text: "Shift the plane table to target station C. Center 'c₁' over ground station C using the plumbing fork. Orient the table by back-sighting to station D along line c₁d₁." },
    { bold: "Step 5: Resect from A and B at Station C", text: "Pivoting the alidade about 'a', sight A and draw a ray intersecting the ray d₁c₁ at 'c₂'. Pivoting about 'b', sight B and draw a ray. The angle between the two lines represents the angular orientation error." },
    { bold: "Step 6: Correct Orientation & Fix Station 'c'", text: "Rotate the plane table by the measured angular error until the line ab aligns with the true line of sight AB. Once correctly oriented, resect from A and B to obtain the exact, final plotted position 'c'." }
  ]);

  builder.addSubSectionHeader("5.2 Three-Point Problem");
  builder.addParagraph("The problem of finding the plotted position of the occupied station P on the sheet by observing three known, plotted stations A, B, and C whose positions 'a', 'b', and 'c' are already on the sheet. No auxiliary station is required!");

  builder.addTable(
    ["Method of Solution", "Operational Nature", "Field Suitability & Characteristics"],
    [
      ["Mechanical Method (Tracing Paper / Frog's Method)", "Semi-graphical; rays drawn on transparent tracing paper and shifted over map until they pass simultaneously through 'a', 'b', 'c'", "Very simple and quick; but tracing paper can slip, warp with moisture, and lacks mathematical precision in high winds"],
      ["Graphical Method (Bessel's Inscribed Circle Method)", "Purely geometrical construction on drawing sheet using an inscribed circle (auxiliary triangle)", "Eliminates trial and error; but involves elaborate line drawing directly on the sheet that can clutter or soil the final map"],
      ["Analytical Method (Collins' Method)", "Mathematical computation of coordinates via auxiliary station (Collins point)", "High mathematical precision; rarely used in field plane tabling due to time-consuming trigonometry"],
      ["Trial and Error Method (Lehmann's Method)", "Field iterative method based on Lehmann's rules; solves orientation and centering simultaneously", "MOST POPULAR, ACCURATE & PRACTICAL field method; standard in Survey of India practice"]
    ],
    [135, 145, 220]
  );

  // CHAPTER 6
  builder.addSectionHeader("CHAPTER 6: LEHMANN'S RULES & THE DANGER CIRCLE CONDITION");
  builder.addParagraph("When the plane table is not correctly oriented at station P, rays drawn from a, b, c towards ground stations A, B, C will not intersect at a single point; instead, they form a small triangle called the TRIANGLE OF ERROR.");

  builder.addSubSectionHeader("6.1 The Three Rules of Lehmann");
  builder.addBulletPoints([
    { bold: "Lehmann's Rule 1", text: "The triangle of error is formed only when the table is incorrectly oriented. If the table is correctly oriented, the three rays intersect at a single point (p). The true position of point 'p' lies outside the triangle of error if the station lies outside the triangle ABC, and inside the triangle of error if the station lies inside the triangle ABC." },
    { bold: "Lehmann's Rule 2", text: "When facing the three ground stations A, B, C from the occupied station, the true position 'p' lies EITHER entirely to the right OR entirely to the left of each of the three rays." },
    { bold: "Lehmann's Rule 3", text: "The distance of point 'p' from each of the three rays is strictly PROPORTIONAL to the distance of the corresponding ground station from the table: d₁ : d₂ : d₃ = D_A : D_B : D_C. Thus, point 'p' lies closer to the ray of the nearest station and farther from the ray of the most distant station!" }
  ]);

  builder.addSubSectionHeader("6.2 Field Procedure for Lehmann's Iterative Solution");
  builder.addBulletPoints([
    { bold: "Iterative Step 1", text: "Level the table at station P and orient it approximately by eye or using a trough compass. Clamp the board." },
    { bold: "Iterative Step 2", text: "Pivot the alidade successively on plotted points 'a', 'b', and 'c', sight ground stations A, B, and C, and draw three resection rays. If the table is slightly misoriented, the rays form a small 'Triangle of Error'." },
    { bold: "Iterative Step 3", text: "Estimate the true point 'p' relative to the triangle of error using Lehmann's 3 Rules (inside/outside, all to right/left, proportional to distance)." },
    { bold: "Iterative Step 4", text: "Align the alidade along line 'p' and the most distant plotted point (e.g. 'c'). Unclamp the board, rotate it to bisect distant ground station C, and clamp." },
    { bold: "Iterative Step 5", text: "Test the new orientation by sighting A and B. The three rays will now intersect at a single pin-point 'p', or form a drastically smaller triangle. Repeat once if necessary." }
  ]);

  builder.addFocusBox("LEHMANN'S PROPORTIONALITY RULE", "According to Lehmann's Third Rule, the perpendicular distance from the true point 'p' to any resection ray is directly proportional to the actual distance of that ground station from the plane table. Nearest station => Smallest perpendicular offset!");

  builder.addSubSectionHeader("6.2 The Danger Circle (Great Circle) Failure Condition");
  builder.addParagraph("The Three-Point Problem becomes mathematically INDETERMINATE (fails completely) if the occupied station P lies on or near the circumference of the circle passing through the three known points A, B, and C (called the Great Circle or Danger Circle).");
  builder.addBulletPoints([
    { bold: "Reason for Failure", text: "When P lies on the Danger Circle, the rays will intersect at a single point regardless of whether the table is correctly oriented or not! The solution yields an infinite number of possible locations." },
    { bold: "Remedy in the Field", text: "If station P is suspected to lie on the Danger Circle passing through A, B, and C, one of the three reference stations must be abandoned and a different, fourth visible station D must be sighted." }
  ]);

  builder.addTrapBox("DANGER CIRCLE IN PSC EXAMS", "PSC Question: 'Under what condition does the Three-Point Problem fail to give a unique solution?' Answer: When the occupied station lies on or near the circle passing through the three control points (The Great Circle / Danger Circle).");

  // CHAPTER 7
  builder.addSectionHeader("CHAPTER 7: ERRORS & PRECAUTIONS IN PLANE TABLING");
  builder.addParagraph("Errors in plane table surveying fall into three categories: Instrumental Errors, Errors of Manipulation (Centering & Orientation), and Plotting Errors.");

  builder.addSubSectionHeader("7.1 Errors of Manipulation");
  builder.addTable(
    ["Source of Error", "Magnitude / Governing Formula", "Effect on Drawing & Remedy"],
    [
      ["Imperfect Leveling", "Inclination of board introduces tilt in sight rays", "Causes vertical parallax; remedy by releveling with spirit level"],
      ["Imperfect Centering", "Displacement on paper = Ground error (e) / Scale (S). For e = 25 cm on 1:1000 scale, displacement = 0.25 mm", "Negligible for small-scale mapping; noticeable only at scales larger than 1:500"],
      ["Imperfect Orientation", "Angular error θ produces displacement d = R · sin θ, where R is distance to object", "Extremely serious! Causes large lateral errors for distant points. Always orient by back-sighting!"],
      ["Shrinkage of Drawing Paper", "Humidity changes cause unequal expansion and shrinkage along grain", "Distorts scale; prevented by using seasoned, cloth-backed paper or metal-mounted sheets"]
    ],
    [115, 185, 200]
  );

  builder.addSubSectionHeader("7.2 Instrumental and Sighting Errors");
  builder.addBulletPoints([
    { bold: "Fiducial Edge Straightness", text: "The working edge of the alidade must be a perfectly straight line. Tested by ruling a fine pencil line along the edge, reversing the alidade end-for-end, and verifying if the edge still coincides exactly with the line." },
    { bold: "Sight Vane Perpendicularity", text: "The sight vanes must be truly perpendicular to the base plate of the alidade. If inclined, the line of sight will not lie in a vertical plane when elevated or depressed." },
    { bold: "Table Top Flatness", text: "The upper surface of the drawing board must be a true plane, free from depressions, warping, or waviness. Tested by laying a steel straightedge across the board in all directions." },
    { bold: "Parallax in Sighting", text: "When sighting through the pinhole slit of the sight vane, the observer's eye must be held close to the slit and look directly along the center of the vertical hair to eliminate sighting parallax." }
  ]);

  // CHAPTER 8
  builder.addSectionHeader("CHAPTER 8: COMPARATIVE ANALYSIS: PLANE TABLE VS COMPASS VS THEODOLITE");
  builder.addTable(
    ["Feature", "Plane Table Surveying", "Compass Surveying", "Theodolite Surveying"],
    [
      ["Plotting Location", "Plotted directly in the FIELD simultaneously", "Plotted in OFFICE from field book notes", "Plotted in OFFICE from Gale's traverse table"],
      ["Magnetic Influence", "Independent (when oriented by back-sighting)", "Highly sensitive to local attraction", "Independent (uses optical graduated circles)"],
      ["Weather Sensitivity", "Extremely sensitive (fails in rain/wind)", "Moderately sensitive to high winds", "All-weather capability"],
      ["Field Book Kept?", "NO field book is kept", "YES, strict field book booking", "YES, strict angle & distance log"],
      ["Measurement Precision", "Medium to Low (0.25 mm paper scale)", "Medium (least count 15'-30')", "Highest precision (least count 20\" or 1\")"],
      ["Speed in Open Country", "Very rapid for topographic filling", "Rapid linear traversing", "Slower, requires elaborate setups"]
    ],
    [105, 135, 130, 130]
  );

  // CHAPTER 9
  builder.addSectionHeader("CHAPTER 9: PSC SOLVED NUMERICAL MODELS & FIELD SCENARIOS");

  builder.addWorkedExample(
    "Centering Error vs Plotting Scale",
    "A plane table is set up with an eccentric centering error of 30 cm on the ground. What is the displacement of the plotted point on a drawing sheet prepared to a scale of 1:1,000?",
    [
      "Ground centering error (e) = 30 cm = 300 mm",
      "Scale of map (S) = 1 : 1,000",
      "Displacement on drawing sheet (d) = Ground error / Scale factor = 300 mm / 1,000 = 0.30 mm",
      "Note: Since the maximum plotting precision of the human eye is 0.25 mm, a 0.30 mm error is just barely noticeable."
    ],
    "0.30 mm"
  );

  builder.addWorkedExample(
    "Orientation Error and Point Displacement",
    "A plane table has an orientation error of 1° (0.0175 radians). An object is situated at a distance of 150 m from the table. What is the resulting lateral displacement of the object on the ground?",
    [
      "Formula: Displacement d = R × sin θ ≈ R × θ (in radians)",
      "Distance R = 150 m, Angle θ = 1° = π / 180 ≈ 0.01745 radians",
      "Displacement = 150 m × 0.01745 = 2.618 m",
      "Notice that a tiny 1° orientation error produces an enormous 2.62 m ground error at 150 m distance!"
    ],
    "2.62 metres"
  );

  builder.addWorkedExample(
    "Three-Point Lehmann Proportional Ray Offset",
    "In a Three-Point resection problem, three ground stations A, B, and C are situated at distances of 400 m, 800 m, and 1200 m respectively from the table. If the perpendicular offset from true station 'p' to ray 'a' is 1.5 mm, what should be the offsets to rays 'b' and 'c'?",
    [
      "By Lehmann's 3rd Rule: Perpendicular distance is directly proportional to station distance: d ∝ D",
      "d_a : d_b : d_c = D_A : D_B : D_C = 400 : 800 : 1200 = 1 : 2 : 3",
      "Offset to ray 'a' = 1.5 mm",
      "Offset to ray 'b' = 2 × 1.5 mm = 3.0 mm",
      "Offset to ray 'c' = 3 × 1.5 mm = 4.5 mm"
    ],
    "Offset to ray b = 3.0 mm; Offset to ray c = 4.5 mm"
  );

  builder.addWorkedExample(
    "Paper Shrinkage and Area Correction in Plane Tabling",
    "A plane table sheet was originally plotted to a scale of 1:2,000. Due to dry weather, a 20 cm line on the map has shrunk to 19.4 cm. If an irregular lake boundary on the sheet is planimetered as 45 cm², find the true ground area of the lake in hectares.",
    [
      "Shrinkage Factor (S.F.) = Shrunk Length / Original Length = 19.4 / 20 = 0.97",
      "Corrected Map Area = Measured Area / (S.F.)² = 45 / (0.97)² = 45 / 0.9409 ≈ 47.826 cm²",
      "Scale: 1 cm = 20 m  =>  1 cm² = 400 m²",
      "True Ground Area = 47.826 × 400 m² = 19,130.4 m²",
      "In Hectares: 19,130.4 / 10,000 = 1.913 hectares"
    ],
    "1.913 hectares (19,130 m²)"
  );

  builder.addWorkedExample(
    "Permissible Apex Angle Range in Graphic Triangulation",
    "In the intersection method, an inaccessible point P is sighted from base line stations A and B. What is the recommended range of apex angle APB for high plotting accuracy?",
    [
      "The intersection of two rays is sharply defined when they intersect at right angles (90°).",
      "If the angle is too acute (< 30°) or too obtuse (> 120°), a small drafting or sighting error creates a huge longitudinal displacement along the rays.",
      "The recommended well-conditioned angle range is strictly between 30° and 120°.",
      "The ideal angle of intersection is 90°."
    ],
    "Between 30° and 120° (Ideal: 90°)"
  );

  // CHAPTER 10
  builder.addSectionHeader("CHAPTER 10: KERALA PSC 50 RAPID-FIRE ONE-LINERS & EXAM VAULT");

  builder.addOneLiners("Principles & Equipment", [
    { q: "Fundamental principle of plane tabling", a: "Parallelism." },
    { q: "Working edge of an alidade is called", a: "Fiducial edge." },
    { q: "Instrument used for centering plane table", a: "Plumbing fork (U-frame) and Plumb bob." },
    { q: "Instrument used for finding magnetic meridian in plane table", a: "Trough Compass." },
    { q: "Alidade fitted with telescope and vertical arc", a: "Telescopic Alidade." },
    { q: "Most accurate method of orienting a plane table", a: "By Back-sighting." },
    { q: "Approximate method of orientation", a: "By Magnetic needle (Trough compass)." },
    { q: "Height of plane table board above ground", a: "Approximately 1.2 m (elbow height)." },
    { q: "Is a field book maintained in plane tabling", a: "NO, plotting is done directly in the field." },
    { q: "Wood used for plane table drawing boards", a: "Well-seasoned Teak or Pine." }
  ]);

  builder.addOneLiners("Four Methods & Resection", [
    { q: "Method best suited for small open areas from single station", a: "Radiation method." },
    { q: "Method used for locating inaccessible points across rivers", a: "Intersection method (Graphic triangulation)." },
    { q: "Method where distance to target is NOT measured", a: "Intersection method." },
    { q: "Method used for surveying roads, railways, and canals", a: "Traversing method." },
    { q: "Method of determining station occupied by table", a: "Resection method." },
    { q: "Difference between radiation and resection", a: "In radiation, table station is known; in resection, table station is unknown." },
    { q: "Resection problem requiring an auxiliary station", a: "Two-Point Problem." },
    { q: "Resection problem requiring no auxiliary station", a: "Three-Point Problem." },
    { q: "Most common practical solution to Three-Point Problem", a: "Trial and Error (Lehmann's) method." },
    { q: "Mechanical solution to Three-Point Problem", a: "Tracing Paper (Frog's) method." }
  ]);

  builder.addOneLiners("Lehmann's Rules & Errors", [
    { q: "Triangle formed by non-intersecting rays in Three-Point problem", a: "Triangle of Error." },
    { q: "According to Lehmann's 3rd rule, distance to ray is proportional to", a: "Distance of corresponding ground station." },
    { q: "Three-Point problem fails when station lies on", a: "The Danger Circle (Great Circle) passing through 3 stations." },
    { q: "Which error causes greater displacement: Centering or Orientation", a: "Orientation error." },
    { q: "Remedy when station lies on Danger Circle", a: "Select a different fourth visible station." },
    { q: "Maximum mechanical plotting accuracy on paper", a: "0.25 mm." },
    { q: "Bessel's method for Three-Point problem is a", a: "Graphical method (inscribed circle)." },
    { q: "Paper used for plane tabling to prevent shrinkage", a: "Seasoned, cloth-backed or mounted paper." },
    { q: "In Intersection method, the measured line is called", a: "Base line." },
    { q: "Great Circle condition results in how many solutions", a: "Indeterminate (Infinite solutions)." },
    { q: "Minimum number of rays required to locate a point by intersection", a: "Two rays." },
    { q: "Point where all Three Lehmann rays intersect in correct orientation", a: "True position of the station." },
    { q: "Best angle of intersection between rays for high accuracy", a: "Close to 90° (Between 30° and 120°)." }
  ]);

  builder.addSubSectionHeader("Plane Table Surveying Revision Checklist Matrix");
  builder.addTable(
    ["Topic / Method", "Governing Principle / Rule", "Standard Exam Key / Formula"],
    [
      ["Fundamental Principle", "Parallelism", "Rays on paper remain strictly parallel to lines on ground"],
      ["Alidade Working Edge", "Fiducial Edge (Beveled)", "All rays ruled along this beveled edge"],
      ["Centering Accessory", "Plumbing Fork & Plumb Bob", "Ground error e produces e / Scale displacement on paper"],
      ["Orientation Methods", "Back-sighting vs Trough Compass", "Back-sighting is most accurate; compass is approximate"],
      ["Radiation Method", "Single commanding central station", "Rays drawn, distances chained directly"],
      ["Intersection Method", "Base line measured; no distances to target", "Ideal for inaccessible river points, cliffs"],
      ["Resection Solutions", "Two-point vs Three-point", "Three-point solved by Lehmann's trial & error method"],
      ["Danger Circle Condition", "Station lies on circle through 3 control points", "Solution becomes indeterminate (infinite solutions)"]
    ],
    [125, 175, 200]
  );

  return await builder.finish();
}

async function runBuild() {
  console.log('Generating Module 04 PDF...');
  const res = await buildModule4();
  console.log(`Module 04 Complete! Pages: ${res.totalPages}`);
}

runBuild().catch(console.error);
