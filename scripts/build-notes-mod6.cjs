const { ModulePdfBuilder } = require('./create-module-pdf-engine.cjs');

async function buildModule6() {
  const builder = new ModulePdfBuilder({
    moduleNumber: 6,
    moduleTitle: "Theodolite Survey, Tacheometry & Curves",
    marks: "10 Marks",
    topics: "The Transit Theodolite (Parts & Functions, Plate Level, Trunnion Axis, Collimation, Verniers, Least count 20\"), Temporary & Permanent Adjustments (Spire test, Collimation test), Measurement of Angles (Repetition & Reiteration, Face Left & Face Right), Theodolite Traversing (Latitudes & Departures, Closing Error, Gale's Traverse Table, Bowditch & Transit Rules), Tacheometry (Stadia constants k=100, C=0, Anallatic lens, Inclined sights), Simple Circular Curves (Elements: Tangent length, Long chord, Mid-ordinate, Degree of Curve), Setting Out Curves (Rankine's deflection angles, Two-theodolite method), Transition Curves & Superelevation, Vertical Curves.",
    outputFilename: "module-06-theodolite-survey.pdf"
  });

  builder.addCoverPage();

  // CHAPTER 1
  builder.addSectionHeader("CHAPTER 1: THE TRANSIT THEODOLITE: COMPONENTS & AXES");
  builder.addParagraph("The theodolite is the most versatile and precise instrument in surveying, designed primarily for measuring horizontal and vertical angles with high precision, ranging lines, establishing grades, and setting out curves.");

  builder.addSubSectionHeader("1.1 Definition & Classification of Theodolites");
  builder.addBulletPoints([
    { bold: "Transit Theodolite", text: "A theodolite whose telescope can be revolved through a complete revolution (180°) in a vertical plane about its horizontal axis (trunnion axis). Most modern theodolites are transit theodolites." },
    { bold: "Non-Transit Theodolite", text: "A theodolite whose telescope cannot be revolved completely in a vertical plane (e.g. Y-theodolite, Everest theodolite). Obsolete today." },
    { bold: "Size of a Theodolite", text: "The size of a theodolite is designated strictly by the DIAMETER of the graduated horizontal lower plate (typically 8 cm to 25 cm). A 14 cm or 20 cm theodolite is standard for civil engineering; 20 cm is common for precise triangulation." }
  ]);

  builder.addFocusBox("DESIGNATION OF THEODOLITE SIZE", "In Kerala PSC technical exams, remember: The size of a theodolite is defined by the DIAMETER OF THE HORIZONTAL LOWER CIRCLE (not the telescope length or vertical circle size). Standard size in engineering surveys is 14 cm to 20 cm.");

  builder.addSubSectionHeader("1.2 The Five Fundamental Axes of a Theodolite");
  builder.addTable(
    ["Fundamental Axis", "Rigorous Engineering Definition", "Required Geometric Relationship for Perfect Adjustment"],
    [
      ["1. Vertical Axis (Azimuth Axis)", "The axis about which the whole instrument (telescope and lower/upper plates) rotates in a horizontal plane", "Must be truly vertical when plate level bubbles are centered"],
      ["2. Horizontal Axis (Trunnion Axis)", "The axis about which the telescope revolves (transits) in a vertical plane", "Must be strictly PERPENDICULAR to the Vertical Axis"],
      ["3. Line of Collimation (Line of Sight)", "The imaginary line passing through the optical center of objective lens and intersection of cross-hairs", "Must be strictly PERPENDICULAR to the Horizontal Axis (Trunnion axis)"],
      ["4. Axis of Plate Levels", "The longitudinal line tangential to the internal curved surface of the plate bubble tube at its center", "Must be strictly PERPENDICULAR to the Vertical Axis"],
      ["5. Axis of Altitude Level (Telescope Bubble)", "The longitudinal line tangential to the curved surface of the altitude bubble tube at its center", "Must be strictly PARALLEL to the Line of Collimation when vertical circle reads zero"]
    ],
    [125, 205, 170]
  );

  builder.addSubSectionHeader("1.3 Upper Plate vs Lower Plate");
  builder.addTable(
    ["Component", "Graduations & Verniers", "Clamping Screws & Motion"],
    [
      ["Lower Plate (Scale Plate)", "Carries the main circular scale graduated from 0° to 360° in degrees and fractional divisions (usually 20' divisions)", "Lower clamp screw fixes it to leveling head; lower slow motion (tangent) screw provides fine rotation when clamped"],
      ["Upper Plate (Vernier Plate)", "Carries two verniers 'A' and 'B' placed diametrically opposite (180° apart); fitted with magnifying reading glasses", "Upper clamp screw clamps it to lower plate; upper slow motion tangent screw rotates upper plate relative to lower plate"]
    ],
    [135, 205, 160]
  );

  builder.addFocusBox("LEAST COUNT OF VERNIER THEODOLITE", "Smallest division on main scale s = 20 minutes (20' = 1/3°).\nNumber of vernier divisions n = 60.\nLeast Count = s / n = 20' / 60 = 20 seconds (20\").\nStandard transit vernier theodolites have a least count of 20\".");

  // CHAPTER 2
  builder.addSectionHeader("CHAPTER 2: TEMPORARY & PERMANENT ADJUSTMENTS OF THEODOLITE");
  builder.addParagraph("Temporary adjustments are performed at every station. Permanent adjustments establish the fundamental geometric relationships between the five axes.");

  builder.addSubSectionHeader("2.1 Temporary Adjustments Sequence");
  builder.addBulletPoints([
    { bold: "1. Setting Up", text: "Centering over ground peg using a plumb bob or optical plummet, spreading tripod legs firmly." },
    { bold: "2. Leveling Up", text: "Plate level is placed parallel to two footscrews, brought to center; turned 90° over the third screw and leveled. Repeated until bubble remains centered in all orientations." },
    { bold: "3. Elimination of Parallax", text: "Focusing the eyepiece against a white background until cross-hairs are crisp; focusing the objective screw until object image coincides with cross-hair plane." }
  ]);

  builder.addSubSectionHeader("2.2 Permanent Adjustments and Field Tests");
  builder.addTable(
    ["Adjustment / Test Name", "Geometric Axis Condition Checked", "Field Adjustment Mechanism"],
    [
      ["Plate Level Test", "Plate level axes must be perpendicular to vertical axis", "Capstan-headed leveling screws on bubble tube"],
      ["Cross-Hair Ring Test", "Vertical cross-hair must lie in a plane perpendicular to horizontal axis", "Loosening and rotating the diaphragm screws"],
      ["Collimation in Azimuth Test", "Line of sight must be perpendicular to horizontal trunnion axis", "Lateral adjusting capstan screws of the cross-hair diaphragm"],
      ["Spire Test (Horizontal Axis Test)", "Horizontal trunnion axis must be perpendicular to vertical axis", "Adjustable movable bearing block of the trunnion axis on one standard"],
      ["Vertical Circle Index Test", "Vertical circle must read exactly 0° 00' when telescope line of sight is horizontal", "Clip screws and altitude bubble capstan screws"]
    ],
    [135, 195, 170]
  );

  // CHAPTER 3
  builder.addSectionHeader("CHAPTER 3: MEASUREMENT OF HORIZONTAL & VERTICAL ANGLES");
  builder.addParagraph("Theodolite observations utilize face-left and face-right sightings to eliminate instrumental defects.");

  builder.addSubSectionHeader("3.1 Face Left vs Face Right Observations");
  builder.addBulletPoints([
    { bold: "Face Left (Circle Left)", text: "The vertical graduated circle is to the LEFT of the observer when sighting through the telescope. Also called 'Normal' or 'Direct' telescope position." },
    { bold: "Face Right (Circle Right)", text: "The vertical graduated circle is to the RIGHT of the observer when sighting. Also called 'Inverted' or 'Reversed' telescope position." },
    { bold: "Transiting (Plunging / Reversing)", text: "The process of rotating the telescope through 180° in a vertical plane about its horizontal axis." },
    { bold: "Swinging the Telescope", text: "The process of turning the telescope in a horizontal plane about its vertical axis. Right swing = clockwise; Left swing = counter-clockwise." },
    { bold: "Errors Eliminated by Mean of Face Left & Face Right", text: "Taking the mean of Face Left and Face Right observations completely eliminates: (1) Collimation error, (2) Horizontal axis tilt error, (3) Vertical circle index error, and (4) Eccentricity of verniers (eliminated by averaging Vernier A and B)." }
  ]);

  builder.addFocusBox("ERRORS ELIMINATED BY FACE LEFT & FACE RIGHT", "Taking the arithmetic mean of Face Left and Face Right observations eliminates:\n1. Error due to line of collimation not being perpendicular to horizontal axis\n2. Error due to horizontal axis not being perpendicular to vertical axis\n3. Vertical circle index error\nNote: Eccentricity of inner and outer axes is eliminated by reading BOTH verniers (A and B)!");

  builder.addSubSectionHeader("3.2 Method of Repetition vs Method of Reiteration");
  builder.addTable(
    ["Method", "Operational Procedure", "Advantages & Limitations", "Standard Civil Application"],
    [
      ["Method of Repetition", "The angle is measured multiple times (usually 3 or 6 times) on different parts of the graduated circle and accumulated; total angle divided by n", "Greatly increases precision; eliminates graduation errors and eccentricity; BUT can measure only ONE single angle at a time; cumulative clamp wear", "Used for high-precision geodetic base line angles and main triangulation stations"],
      ["Method of Reiteration (Direction Method)", "Station occupied commands multiple targets A, B, C, D; line of sight pointed successively to each target and circle closed back on A (Closing the Horizon)", "Very fast; allows measuring MULTIPLE angles from a single station setup; checks for instrument slip by closing on initial station", "Standard method for topographic traversing, town surveys, and detail mapping"]
    ],
    [95, 155, 135, 115]
  );

  // CHAPTER 4
  builder.addSectionHeader("CHAPTER 4: THEODOLITE TRAVERSING, LATITUDES & DEPARTURES");
  builder.addParagraph("In theodolite traversing, the lengths of lines are measured with steel tape, band, or EDM, and the horizontal angles between consecutive lines are measured with a theodolite.");

  builder.addSubSectionHeader("4.1 Latitudes and Departures");
  builder.addBulletPoints([
    { bold: "Latitude (L)", text: "The orthographic projection of a survey line on the reference North-South meridian line: Latitude L = l · cos θ, where l = length of line, θ = reduced bearing. Positive (+) if Northing, Negative (-) if Southing." },
    { bold: "Departure (D)", text: "The orthographic projection of a survey line on the reference East-West meridian line: Departure D = l · sin θ, where l = length of line, θ = reduced bearing. Positive (+) if Easting, Negative (-) if Westing." }
  ]);

  builder.addTable(
    ["Quadrant", "Reduced Bearing (QB)", "Latitude Sign (L = l · cos θ)", "Departure Sign (D = l · sin θ)"],
    [
      ["First (NE)", "N θ E", "+ (Northing)", "+ (Easting)"],
      ["Second (SE)", "S θ E", "- (Southing)", "+ (Easting)"],
      ["Third (SW)", "S θ W", "- (Southing)", "- (Westing)"],
      ["Fourth (NW)", "N θ W", "+ (Northing)", "- (Westing)"]
    ],
    [100, 130, 135, 135]
  );

  builder.addSubSectionHeader("4.2 Closing Error of a Closed Traverse");
  builder.addParagraph("In a theoretically closed polygon traverse, the algebraic sum of latitudes must equal zero (ΣL = 0) and the algebraic sum of departures must equal zero (ΣD = 0). If field errors exist, ΣL ≠ 0 and ΣD ≠ 0.");
  builder.addFormulaBox("CLOSING ERROR & ACCURACY FORMULAS", [
    "Closing Error e = √( (ΣL)² + (ΣD)² )",
    "Direction of Closing Error: tan θ = | ΣD / ΣL |",
    "Relative Precision / Closing Ratio = e / P = e / Σl  (expressed as 1 / 5,000 or 1 / 10,000)"
  ]);

  builder.addSubSectionHeader("4.3 Balancing the Traverse: Bowditch's Rule vs Transit Rule");
  builder.addTable(
    ["Rule", "Mathematical Adjustment Formula", "Operating Assumption"],
    [
      ["Bowditch's Rule (Compass Rule)", "Correction to Latitude = - ΣL · (l / Σl)\nCorrection to Departure = - ΣD · (l / Σl)", "Assumes linear errors ∝ √l and angular errors ∝ 1/√l; used when angles and distances have equal relative precision"],
      ["Transit Rule", "Correction to Latitude = - ΣL · (|L| / Σ|L|)\nCorrection to Departure = - ΣD · (|D| / Σ|D|)", "Assumes angular measurements are MORE ACCURATE than linear measurements; does not change bearing as much"]
    ],
    [135, 205, 160]
  );

  builder.addSubSectionHeader("4.4 Gale's Traverse Table");
  builder.addParagraph("Gale's Traverse Table is a standardized tabular computation sheet used to record, calculate, check, and adjust theodolite traverse coordinates systematically (Observed angles -> Corrected angles -> Bearings -> Consecutive coordinates -> Corrections -> Independent total coordinates).");

  // CHAPTER 5
  builder.addSectionHeader("CHAPTER 5: TACHEOMETRIC SURVEYING");
  builder.addParagraph("Tacheometry (or Tachymetry) is a branch of angular surveying in which both horizontal distances and vertical elevations are computed indirectly from staff readings without measuring linear distances with chain or tape.");

  builder.addSubSectionHeader("5.1 Stadia Tacheometry Principles & Diaphragm");
  builder.addParagraph("The stadia diaphragm contains three horizontal cross-hairs: a central horizontal hair and two auxiliary stadia hairs placed equidistant above and below the center.");
  builder.addBulletPoints([
    { bold: "Staff Intercept (s)", text: "The difference between upper stadia hair reading and lower stadia hair reading: s = Top reading - Bottom reading." },
    { bold: "Fundamental Stadia Distance Equation", text: "Distance D = (f / i) · s + (f + d) = k · s + C." },
    { bold: "Multiplying Constant (k)", text: "k = f / i = focal length of objective / distance between stadia hairs. Standard instrument manufacturing value k = 100." },
    { bold: "Additive Constant (C)", text: "C = f + d = focal length + distance from objective to trunnion axis. Typically 30 cm to 45 cm for external focusing telescope." },
    { bold: "Anallatic Lens (Porro's Lens)", text: "An internal convex lens placed between the objective and the diaphragm such that the vertex of the visual angle is transferred directly to the optical center of the instrument. It makes the ADDITIVE CONSTANT EXACTLY ZERO (C = 0)! Thus: D = 100 · s." }
  ]);

  builder.addFocusBox("ANALLATIC LENS PSC FAVORITE KEY", "• Invented by Porro in 1823.\n• It is a CONVEX lens fitted inside the telescope.\n• Its purpose is to make the ADDITIVE CONSTANT ZERO (C = 0).\n• With an anallatic lens, Distance D = 100 × s (directly 100 times staff intercept)!");

  builder.addSubSectionHeader("5.2 Inclined Sights with Staff Held Vertical");
  builder.addParagraph("When the line of sight is inclined at a vertical angle θ to the horizontal and the staff is held vertical:");
  builder.addFormulaBox("INCLINED STADIA FORMULAS (STAFF VERTICAL)", [
    "Horizontal Distance D = k · s · cos² θ + C · cos θ",
    "With Anallatic Lens (C = 0): D = 100 · s · cos² θ",
    "",
    "Vertical Component V = 1/2 · k · s · sin 2θ + C · sin θ",
    "With Anallatic Lens (C = 0): V = 50 · s · sin 2θ",
    "",
    "Reduced Level of Staff Station:",
    "• For Angle of Elevation (+ θ): RL of Staff Station = RL of Instrument Station + HI + V - h",
    "• For Angle of Depression (- θ): RL of Staff Station = RL of Instrument Station + HI - V - h",
    "where HI = height of instrument axis above ground, h = central cross-hair staff reading"
  ]);

  // CHAPTER 6
  builder.addSectionHeader("CHAPTER 6: SIMPLE CIRCULAR CURVES: GEOMETRY & ELEMENTS");
  builder.addParagraph("Curves are introduced on highway and railway alignments to provide smooth, gradual changes of direction between straight intersecting lines (tangents).");

  builder.addSubSectionHeader("6.1 Elements of a Simple Circular Curve");
  builder.addTable(
    ["Curve Element", "Rigorous Engineering Definition", "Governing Mathematical Formula"],
    [
      ["Point of Curve (PC) / Tangent Point (T₁)", "Point where the straight line tangent ends and circular curve begins", "Station T₁ = Station PI - Tangent Length (T)"],
      ["Point of Tangency (PT) / Tangent Point (T₂)", "Point where circular curve ends and forward straight tangent begins", "Station T₂ = Station T₁ + Length of Curve (L)"],
      ["Point of Intersection (PI) / Vertex (V)", "Point where the two straight tangents meet when projected", "Station of PI is established by ranging"],
      ["Deflection Angle (Δ / I)", "The angle between the forward tangent produced and the forward tangent line", "External angle at PI; equals central angle of the curve subtended at center"],
      ["Tangent Length (T)", "Distance from PI to either tangent point (V-T₁ or V-T₂)", "T = R · tan(Δ / 2)"],
      ["Length of Curve (L)", "Total curved arc length from T₁ to T₂", "L = (π · R · Δ) / 180° = R · Δ (Δ in radians)"],
      ["Long Chord (C)", "Straight line joining tangent points T₁ and T₂", "C = 2 · R · sin(Δ / 2)"],
      ["Apex Distance / External Distance (E)", "Distance from vertex PI to midpoint of curve arc", "E = R · [ sec(Δ / 2) - 1 ]"],
      ["Mid-Ordinate / Versine (M)", "Distance from midpoint of long chord to midpoint of curve arc", "M = R · [ 1 - cos(Δ / 2) ]"]
    ],
    [125, 175, 200]
  );

  builder.addSubSectionHeader("6.2 Degree of Curve (D) and Radius (R)");
  builder.addParagraph("The sharpness of a circular curve is designated either by its Radius (R) or its Degree of Curve (D).");
  builder.addFormulaBox("DEGREE OF CURVE FORMULAS", [
    "By Arc Definition (Angle subtended by standard arc length):",
    "• For 30-metre standard arc: Degree of Curve D = 1,718.9 / R  degrees  (or R = 1,719 / D)",
    "• For 20-metre standard arc: Degree of Curve D = 1,145.9 / R  degrees  (or R = 1,146 / D)",
    "Higher degree of curve => Sharper curve => Smaller radius!"
  ]);

  builder.addTrapBox("DEGREE OF CURVE 20m VS 30m CHAIN", "PSC Trap: In 30m metric chain standard, R = 1719 / D. In 20m metric chain standard, R = 1146 / D. Watch out for which chain length is specified in the question!");

  // CHAPTER 7
  builder.addSectionHeader("CHAPTER 7: METHODS OF SETTING OUT CIRCULAR CURVES");
  builder.addParagraph("Setting out curves in the field involves locating points on the circular curve arc using linear methods (tape only) or angular methods (theodolite).");

  builder.addSubSectionHeader("7.1 Linear Methods (Tape / Chain Only)");
  builder.addBulletPoints([
    { bold: "1. Offsets from Long Chord", text: "Ordinate at distance x from midpoint of long chord: Ox = √(R² - x²) - (R - M). Mid-ordinate M = R - √(R² - (C/2)²). Used for short curves." },
    { bold: "2. Successive Bisection of Arcs", text: "Finding the midpoint of the long chord, erecting the mid-ordinate to fix apex, then bisection of half-chords. Simple and rapid." },
    { bold: "3. Offsets from Tangents", text: "Radial offsets (Ox = R(sec α - 1)) or perpendicular offsets (Ox = R - √(R² - x²) ≈ x² / (2R))." },
    { bold: "4. Offsets from Chords Produced (Deflection Distances)", text: "First offset O₁ = c₁² / (2R); intermediate offset O₂ = c · (c₁ + c) / (2R) = c² / R (for equal chords); last offset On = cn · (c + cn) / (2R). Most widely used linear method for railway and road work." }
  ]);

  builder.addSubSectionHeader("7.2 Angular Methods (Theodolite Methods)");
  builder.addTable(
    ["Method", "Operating Instrument", "Governing Formula / Principle", "Field Applicability"],
    [
      ["Rankine's Method of Deflection Angles (Tangential Angles)", "One theodolite and one steel tape", "Deflection angle for chord c: δ = 1,718.9 · (c / R) minutes. Total deflection angle to point n: Δn = δ₁ + δ₂ + ... + δn", "MOST POPULAR, ACCURATE, and universally adopted field method for highway and rail curves"],
      ["Two-Theodolite Method", "Two theodolites set up at T₁ and T₂; NO chain or tape needed!", "Angle subtended by any arc at T₁ equals angle subtended at T₂; intersection of lines of sight fixes curve point", "Ideal for rough terrain, deep rivers, ravines where chaining across the curve is impossible"],
      ["Tacheometric Method", "Tacheometer with staff", "Points located by tacheometric distances and deflection angles", "Rough hilly ground where chaining is difficult"]
    ],
    [125, 125, 145, 105]
  );

  builder.addFocusBox("RANKINE'S DEFLECTION ANGLE FORMULA", "Deflection angle for any chord of length 'c':\nδ (in minutes) = (1,718.9 × c) / R minutes\nδ (in degrees) = (180 / π) × (c / 2R) = 28.65 × c / R degrees\nTotal deflection angle for long chord = Δ / 2 (Half the central angle).");

  // CHAPTER 8
  builder.addSectionHeader("CHAPTER 8: TRANSITION CURVES, SUPERELEVATION & VERTICAL CURVES");
  builder.addParagraph("A transition curve is a curve of varying radius introduced between a straight tangent (R = ∞) and a circular curve (R = R₀) to introduce centrifugal force gradually.");

  builder.addSubSectionHeader("8.1 Objectives & Types of Transition Curves");
  builder.addBulletPoints([
    { bold: "Objectives", text: "To avoid sudden lateral shocks/jerks to passengers; to provide gradual increase of superelevation from zero on the straight to full cant on the circular curve; to allow gradual introduction of track widening." },
    { bold: "Spiral / Clothoid (Euler's Spiral)", text: "Curvature increases linearly with arc length: Radius R is inversely proportional to length l (l · R = constant). Rate of increase of centrifugal acceleration is constant. Ideal transition curve!" },
    { bold: "Cubic Parabola", text: "Equation y = x³ / (6 · R · L). Used extensively on railways where deflection angles are small (< 4°)." },
    { bold: "Bernoulli's Lemniscate", text: "Equation r = a · sin 2θ. Best suited for highway transition curves where large deflection angles occur." }
  ]);

  builder.addSubSectionHeader("8.2 Superelevation (Cant)");
  builder.addParagraph("The raising of the outer rail or outer edge of the road above the inner edge to counteract centrifugal force.");
  builder.addFormulaBox("SUPERELEVATION FORMULA", [
    "Centrifugal Force F = m · v² / R",
    "Theoretical Superelevation e = v² / (g · R)  (metric)",
    "For Indian mixed traffic highways (IRC design at 75% speed):",
    "e = v² / (225 · R)  [v in km/h, R in metres]",
    "Maximum permissible superelevation on plain/rolling terrain = 7% (0.07); Hilly roads = 10% (0.10)"
  ]);

  builder.addSubSectionHeader("8.3 Vertical Curves");
  builder.addBulletPoints([
    { bold: "Summit Curve (Crest Curve)", text: "Convex upwards. Formed when ascending gradient meets descending gradient. Governed strictly by SIGHT DISTANCE (Stopping Sight Distance SSD). Simple parabola is standard." },
    { bold: "Valley Curve (Sag Curve)", text: "Concave upwards. Formed when descending gradient meets ascending gradient. Governed by HEADLIGHT SIGHT DISTANCE and passenger comfort (centrifugal acceleration). Cubic parabola is standard." }
  ]);

  // CHAPTER 9
  builder.addSectionHeader("CHAPTER 9: PSC SOLVED NUMERICAL MODELS");

  builder.addWorkedExample(
    "Degree of Curve to Radius Conversion",
    "Calculate the radius of a 2-degree simple circular curve using: (a) 30 m chain definition, (b) 20 m chain definition.",
    [
      "(a) For 30 m chain: R = 1,718.9 / D = 1,718.9 / 2 = 859.45 m ≈ 859.5 m",
      "(b) For 20 m chain: R = 1,145.9 / D = 1,145.9 / 2 = 572.95 m ≈ 573.0 m"
    ],
    "(a) 859.5 m (30m arc); (b) 573.0 m (20m arc)"
  );

  builder.addWorkedExample(
    "Curve Elements Calculation",
    "A circular curve of radius 400 m has a deflection angle of 60°. Calculate: (a) Tangent length, (b) Length of curve, (c) Long chord.",
    [
      "Radius R = 400 m, Deflection angle Δ = 60° => Δ / 2 = 30°",
      "(a) Tangent Length T = R · tan(Δ / 2) = 400 × tan 30° = 400 × (1 / √3) = 230.94 m",
      "(b) Length of Curve L = (π · R · Δ) / 180° = (π × 400 × 60) / 180 = 400π / 3 = 418.88 m",
      "(c) Long Chord C = 2 · R · sin(Δ / 2) = 2 × 400 × sin 30° = 800 × 0.5 = 400.0 m"
    ],
    "Tangent = 230.94 m; Curve Length = 418.88 m; Long Chord = 400.0 m"
  );

  builder.addWorkedExample(
    "Rankine's Tangential Deflection Angle",
    "Calculate the deflection angle in minutes for a 20 m chord on a circular curve of 500 m radius.",
    [
      "Formula: δ = 1,718.9 × (c / R) minutes",
      "Chord length c = 20 m, Radius R = 500 m",
      "δ = 1,718.9 × (20 / 500) = 1,718.9 × 0.04 = 68.756 minutes = 1° 08' 45\""
    ],
    "68.76 minutes (1° 08' 45\")"
  );

  builder.addWorkedExample(
    "Tacheometric Distance with Anallatic Lens",
    "A tacheometer fitted with an anallatic lens (k = 100, C = 0) was sighted horizontally at a vertical staff. The three hair readings were 1.250 m, 1.820 m, and 2.390 m. Find the horizontal distance to the staff.",
    [
      "Top reading = 2.390 m, Bottom reading = 1.250 m",
      "Staff intercept s = 2.390 - 1.250 = 1.140 m",
      "Check: Central hair = (2.390 + 1.250) / 2 = 1.820 m (Correct!)",
      "Formula: D = k · s + C = 100 × 1.140 + 0 = 114.0 m"
    ],
    "114.0 metres"
  );

  // CHAPTER 10
  builder.addSectionHeader("CHAPTER 10: KERALA PSC 50 RAPID-FIRE ONE-LINERS & EXAM VAULT");

  builder.addOneLiners("Theodolite Components & Adjustments", [
    { q: "Size of a theodolite is designated by", a: "Diameter of horizontal lower graduated circle." },
    { q: "Standard least count of transit vernier theodolite", a: "20 seconds of arc (20\")." },
    { q: "Axis about which telescope rotates in vertical plane", a: "Horizontal axis (Trunnion axis)." },
    { q: "Theodolite line of sight must be perpendicular to", a: "Horizontal (Trunnion) axis." },
    { q: "Test to make horizontal axis perpendicular to vertical axis", a: "Spire Test." },
    { q: "Mean of Face Left and Face Right eliminates", a: "Collimation error, trunnion tilt, index error." },
    { q: "Reading both verniers A and B eliminates", a: "Eccentricity of graduated circle." },
    { q: "Method to measure multiple angles from single station", a: "Method of Reiteration (Direction method)." },
    { q: "Rotating telescope through 180° in vertical plane is called", a: "Transiting (Plunging / Reversing)." },
    { q: "Plate carrying main scale graduated 0° to 360°", a: "Lower plate." }
  ]);

  builder.addOneLiners("Traversing & Tacheometry", [
    { q: "Latitude of a survey line is given by", a: "L = l · cos θ (Northing +, Southing -)." },
    { q: "Departure of a survey line is given by", a: "D = l · sin θ (Easting +, Westing -)." },
    { q: "Closing error of closed theodolite traverse is", a: "e = √( (ΣL)² + (ΣD)² )." },
    { q: "Standard tabular sheet for theodolite traverse", a: "Gale's Traverse Table." },
    { q: "Multiplying constant k of tacheometer is normally", a: "100 (k = f / i)." },
    { q: "Additive constant C of anallatic telescope is", a: "Zero (C = 0)." },
    { q: "Anallatic lens was invented by", a: "Porro (1823)." },
    { q: "Type of lens used as anallatic lens", a: "Convex lens placed between objective and diaphragm." },
    { q: "Horizontal distance formula with anallatic lens (staff vertical)", a: "D = 100 · s · cos² θ." },
    { q: "Tacheometry system where staff has two fixed targets", a: "Subtense bar system (or tangential system)." }
  ]);

  builder.addOneLiners("Curves & Superelevation", [
    { q: "Relation between Radius R and Degree D for 30m arc", a: "R = 1,718.9 / D (or R = 1,719 / D)." },
    { q: "Relation between Radius R and Degree D for 20m arc", a: "R = 1,145.9 / D (or R = 1,146 / D)." },
    { q: "Tangent length of simple circular curve", a: "T = R · tan(Δ / 2)." },
    { q: "Long chord length of simple circular curve", a: "C = 2 · R · sin(Δ / 2)." },
    { q: "Mid-ordinate (versine) of curve formula", a: "M = R · [ 1 - cos(Δ / 2) ]." },
    { q: "Rankine's deflection angle formula", a: "δ = 1,718.9 · (c / R) minutes." },
    { q: "Setting out curve method requiring NO chain or tape", a: "Two-Theodolite Method." },
    { q: "Ideal transition curve shape for railways and highways", a: "Clothoid (Euler's Spiral)." },
    { q: "Superelevation on Indian highways (mixed traffic)", a: "e = v² / (225 · R)." },
    { q: "Summit vertical curve design is governed by", a: "Sight distance (Stopping Sight Distance SSD)." }
  ]);

  return await builder.finish();
}

async function runBuild() {
  console.log('Generating Module 06 PDF...');
  const res = await buildModule6();
  console.log(`Module 06 Complete! Pages: ${res.totalPages}`);
}

runBuild().catch(console.error);
