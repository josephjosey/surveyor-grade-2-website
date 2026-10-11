const { ModulePdfBuilder } = require('./create-module-pdf-engine.cjs');

async function buildModule2() {
  const builder = new ModulePdfBuilder({
    moduleNumber: 2,
    moduleTitle: "Chain Surveying",
    marks: "10 Marks",
    topics: "Principles of Surveying (Plane vs Geodetic), Chains (Metric, Gunter's, Engineer's, Revenue), Tapes (Metallic, Steel, Invar), Ranging (Direct & Reciprocal), Chaining on Sloping Ground, Offsets & Limiting Length, Setting Right Angles (Cross staff, Optical square, Prism square), Errors & Tape Corrections (Temperature, Pull, Sag, Slope), Obstacles in Chaining & Ranging, Triangulation Framework (Base line, Check line, Tie line, Well-conditioned triangles), Field Book Booking, Area Computation (Simpson's & Trapezoidal rules), Polar Planimeter & Pentagraph.",
    outputFilename: "module-02-chain-survey.pdf"
  });

  builder.addCoverPage();

  // CHAPTER 1
  builder.addSectionHeader("CHAPTER 1: INTRODUCTION & FUNDAMENTAL PRINCIPLES OF SURVEYING");
  builder.addParagraph("Surveying is the art and science of determining the relative positions of distinctive points on, above, or beneath the surface of the Earth by means of direct or indirect measurements of distance, direction, and elevation.");

  builder.addSubSectionHeader("1.1 Primary Divisions: Plane Surveying vs Geodetic Surveying");
  builder.addTable(
    ["Parameter", "Plane Surveying", "Geodetic Surveying (Trigonometrical)"],
    [
      ["Earth Curvature", "Neglected; mean surface of earth is considered a flat plane", "Considered; true spheroidal shape of the earth is accounted for"],
      ["Survey Area Limit", "Applicable for areas less than 250 km² (or 195.5 km² as per Clarke)", "Mandatory for large areas exceeding 250 km²"],
      ["Plumb Lines", "Plumb lines at any two points are considered strictly parallel", "Plumb lines converge at the true center of the Earth"],
      ["Triangle Formed", "Plane triangle; sum of angles = 180°", "Spherical triangle; sum of angles > 180°"],
      ["Spherical Excess", "Neglected (spherical excess is 1 arc second for 195.5 km² area)", "Accounted for in rigorous geodetic adjustment"],
      ["Agency / Scope", "State departments, PWD, KWA, LSGD, Town Planning, cadastral work", "Survey of India (SOI) for National Great Trigonometrical Survey (GTS)"]
    ],
    [100, 205, 205]
  );

  builder.addFocusBox("SPHERICAL EXCESS & LIMIT OF PLANE SURVEYING", "• Area limit for plane surveying is 250 km² (frequently given as 195.5 km² in Survey of India standards).\n• The difference between the arc length and chord length on Earth's surface for a distance of 18.2 km is only 1.52 cm (15.2 mm).\n• Spherical excess is only 1 second of arc for a spherical triangle having an area of 195.5 km².");

  builder.addSubSectionHeader("1.2 The Two Fundamental Principles of Surveying");
  builder.addBulletPoints([
    { bold: "Principle 1: To Work from Whole to Part", text: "A major framework of high-precision control stations is first established covering the entire area with great accuracy. Minor details are then surveyed within this rigid skeleton framework. This prevents the accumulation of local measurement errors and confines any minor errors to the immediate local area." },
    { bold: "Principle 2: Location of a Point by at Least Two Independent Measurements", text: "The relative position of any new point must always be referenced and fixed with respect to at least two permanently established reference stations. These measurements can be two linear distances, two angular bearings, or one distance and one angle." }
  ]);

  builder.addTrapBox("PRINCIPLE OF SURVEYING TRAP", "PSC Question: 'The main principle of surveying is to work from part to whole.' FALSE! It is strictly from WHOLE TO PART. Working from part to whole leads to severe accumulation and expansion of local errors across the survey.");

  // CHAPTER 2
  builder.addSectionHeader("CHAPTER 2: SURVEYING CHAINS, TAPES & FIELD ACCESSORIES");
  builder.addParagraph("Chain surveying is the simplest method of surveying where only linear measurements are taken in the field and no angular measurements are made. It is ideal for small, fairly level areas with simple open topography.");

  builder.addSubSectionHeader("2.1 Types of Surveying Chains");
  builder.addTable(
    ["Chain Type", "Standard Length", "Number of Links", "Length of Each Link", "Key Features & PSC Applications"],
    [
      ["Metric Chain (20 m)", "20 metres", "100 links", "0.2 m (20 cm / 200 mm)", "Brass tallies every 5 m; small brass rings at every 1 m; standard metric chain"],
      ["Metric Chain (30 m)", "30 metres", "150 links", "0.2 m (20 cm / 200 mm)", "Brass tallies every 5 m; grooved tallies (1 notch at 5m, 2 at 10m, 3 at 15m)"],
      ["Gunter's Chain (Surveyor's)", "66 feet", "100 links", "0.66 ft (7.92 inches)", "10 square chains = 1 Acre (43,560 sq ft); 80 chains = 1 Statute Mile (5,280 ft)"],
      ["Engineer's Chain", "100 feet", "100 links", "1 foot (12 inches)", "Brass tags at every 10 links; used for railway, canal, and road engineering"],
      ["Revenue Chain", "33 feet", "16 links", "2 1/16 ft (2.0625 ft)", "Standard chain for cadastral and village land settlement surveys"],
      ["Steel Band (Band Chain)", "20 m or 30 m", "Continuous strip", "Graduated ribbon", "Made of blue steel (12-16 mm wide, 0.3-0.6 mm thick); higher precision than wire chain"]
    ],
    [105, 75, 75, 105, 150]
  );

  builder.addFocusBox("METRIC CHAIN TALLIES & RINGS", "• In a 20 m metric chain, brass tallies are provided at every 5 m. At 5 m and 15 m, tally has 1 tooth; at 10 m, tally has 2 teeth.\n• Small round brass rings are inserted at every 1 m interval.\n• Length of a metric link is measured from the CENTER of one connecting oval ring to the CENTER of the adjacent oval ring.");

  builder.addSubSectionHeader("2.2 Types of Measuring Tapes");
  builder.addBulletPoints([
    { bold: "Cloth / Linen Tape", text: "Made of closely woven varnished linen cloth (12-15 mm wide). Light and flexible, but twists easily, stretches when pulled, shrinks when wet, and wears out rapidly. Unsuitable for precision surveying." },
    { bold: "Metallic Tape", text: "Made of waterproof linen reinforced with interwoven fine brass or bronze wires to prevent stretching. Highly durable and widely used for general topographic and detail offset measurements." },
    { bold: "Steel Tape", text: "Made of high-grade steel ribbon (6-10 mm wide). Highly accurate for linear measurements, but delicate, rusts easily, and snaps if stepped on or bent sharply." },
    { bold: "Invar Tape", text: "Made of an alloy of 64% Steel and 36% Nickel. Possesses an extremely low coefficient of thermal expansion (α ≈ 0.12 × 10⁻⁶ / °C, about 1/10th that of steel). Used exclusively for high-precision geodetic base line measurements. Soft, expensive, and easily damaged." }
  ]);

  builder.addTrapBox("INVAR TAPE COMPOSITION IN PSC", "PSC Question: 'Invar is an alloy of which metals?' Nickel (36%) and Steel/Iron (64%). Its most important physical property is an extremely low coefficient of thermal expansion, making it virtually immune to field temperature variations.");

  builder.addSubSectionHeader("2.3 Survey Accessories");
  builder.addBulletPoints([
    { bold: "Arrows (Marking Pins)", text: "Made of hardened tempered steel wire (4 mm diameter), 400 mm (40 cm) long. Pointed at one end with a 50 mm ring handle at top. A set of 10 arrows accompanies every chain." },
    { bold: "Ranging Rods", text: "Made of well-seasoned wood or steel conduit pipe, 2 m or 3 m long, 30 mm diameter, fitted with iron shoe. Painted in alternate 200 mm (20 cm) bands of Red & White or Black & White for visibility." },
    { bold: "Ranging Poles", text: "Similar to ranging rods but longer (4 m to 8 m) with larger diameter, used for ranging over long distances." },
    { bold: "Offset Rods", text: "2 m or 3 m long wooden rod with iron shoe and a hook/notch at top for pulling the chain through bushes and hedges." },
    { bold: "Plumb Bob", text: "Used for centering instruments over ground pegs and transferring chain points down steep slopes (stepping method)." },
    { bold: "Wooden Pegs", text: "Square wooden pegs (25 to 50 mm square, 150 mm long) driven into ground to mark permanent survey stations." }
  ]);

  // CHAPTER 3
  builder.addSectionHeader("CHAPTER 3: FIELD OPERATIONS IN CHAIN SURVEYING");
  builder.addParagraph("The linear measurement of distances using a chain or tape involves three distinct field operations: Ranging, Chaining, and Offsetting.");

  builder.addSubSectionHeader("3.1 Ranging of Survey Lines");
  builder.addBulletPoints([
    { bold: "Direct Ranging", text: "Employed when both end stations A and B are mutually intervisible. An intermediate surveyor aligns intermediate ranging rods C, D directly by eye sight or using a line ranger." },
    { bold: "Indirect / Reciprocal Ranging", text: "Employed when two stations A and B are NOT intervisible due to an intervening hill, ridge, or high ground. Two surveyors with ranging rods position themselves at intermediate high points M₁ and N₁ and alternately direct each other into the true line AB until all four rods align." },
    { bold: "Line Ranger", text: "An optical instrument consisting of two 90° reflecting prisms placed one above the other. Enables a single observer standing on the intermediate line to locate the point directly without assistance." }
  ]);

  builder.addSubSectionHeader("3.2 Chaining on Sloping Ground");
  builder.addBulletPoints([
    { bold: "Direct Method (Stepping Method)", text: "Distance is measured in short horizontal steps (l₁, l₂, l₃...) using a chain/tape supported horizontally and transferred to the ground using a plumb bob. Always carried out downhill for greater accuracy." },
    { bold: "Indirect Method (Slope Angle θ)", text: "Slope distance (L) and slope angle (θ) are measured: Horizontal Distance D = L · cos θ. Correction for slope = L(1 - cos θ) ≈ h² / (2L) (always subtractive)." },
    { bold: "Hypotensusal Allowance Method", text: "Chain is pulled along the slope, and for every chain length (100 links), an additional forward allowance is marked along the slope so that the horizontal equivalent equals exactly 100 links. Hypotensusal Allowance = 100(sec θ - 1) links." }
  ]);

  builder.addFormulaBox("SLOPE CORRECTION & HYPOTENSUSAL ALLOWANCE", [
    "Horizontal Distance D = L · cos θ",
    "Correction for Slope Cs = L - D = L(1 - cos θ) ≈ h² / (2L)  [Always Subtractive]",
    "Hypotensusal Allowance = 100 × (sec θ - 1) links",
    "Approximation for small angles: Hypotensusal Allowance ≈ 100 × (θ² / 2)  (θ in radians)"
  ]);

  builder.addSubSectionHeader("3.3 Offsets: Types & Limiting Length");
  builder.addParagraph("Offsets are lateral distances measured from the main survey chain line to locate ground details, boundaries, trees, buildings, and topographic features.");
  builder.addBulletPoints([
    { bold: "Perpendicular Offsets", text: "Offsets measured at right angles (90°) to the chain line. Most commonly used; quickest to measure and plot." },
    { bold: "Oblique Offsets", text: "Offsets measured at an inclined angle (other than 90°) to the chain line. Used when perpendicular sighting is obstructed or when locating straight features like fences." },
    { bold: "Tie Line Offsets", text: "Two oblique measurements taken from two points on the chain line to fix a corner point securely." },
    { bold: "Limiting Length of Offset", text: "The maximum permissible length of an offset depends on: (1) Scale of plotting (maximum plotting error 0.25 mm), (2) Accuracy of setting out right angle, (3) Nature of ground details, and (4) Importance of feature." }
  ]);

  // CHAPTER 4
  builder.addSectionHeader("CHAPTER 4: INSTRUMENTS FOR SETTING OUT RIGHT ANGLES");
  builder.addParagraph("Setting out perpendicular offsets from the chain line is accomplished using hand-held optical or mechanical sighting instruments.");

  builder.addTable(
    ["Instrument", "Operating Principle", "Angle(s) Set Out", "Key PSC Construction Details"],
    [
      ["Open Cross Staff", "Direct line-of-sight sighting through cross vanes", "90° only", "Cylindrical or octagonal box with two pairs of opposite vertical sighting slits at right angles"],
      ["French Cross Staff", "Direct sighting through octagonal face slits", "45°, 90°, and 135°", "Octagonal hollow metal tube with vertical slits on all eight sides"],
      ["Adjustable Cross Staff", "Lower cylinder fixed, upper cylinder rotates with vernier", "Any angle", "Has a circular graduated rack-and-pinion vernier to turn any desired angle"],
      ["Optical Square", "Principle of Double Reflection from two mirrors", "90° exactly", "Index glass is fully silvered; Horizon glass is bottom half silvered, top half unsilvered. Angle between mirrors is strictly 45°!"],
      ["Prism Square", "Double reflection inside a fixed 45° pentagonal prism", "90° exactly", "Requires no adjustment; more rugged and compact than optical square; angle cannot get out of adjustment"]
    ],
    [105, 125, 80, 200]
  );

  builder.addFocusBox("OPTICAL SQUARE: PSC TRIPLE FORMULA", "• Angle between the two mirrors (Index glass and Horizon glass) = 45°.\n• Deflection angle of the reflected ray = 2 × 45° = 90° (Double Reflection Principle).\n• Index glass is fully silvered; Horizon glass is silvered on bottom half and plain transparent glass on top half.");

  // CHAPTER 5
  builder.addSectionHeader("CHAPTER 5: ERRORS IN CHAINING & SYSTEMATIC TAPE CORRECTIONS");
  builder.addParagraph("Measurements in surveying are subject to various errors. Understanding the distinction between cumulative and compensating errors is vital for accurate fieldwork.");

  builder.addSubSectionHeader("5.1 Classification of Surveying Errors");
  builder.addTable(
    ["Error Category", "Nature / Law of Propagation", "Causes in Chaining", "Effect on Measured Length"],
    [
      ["Cumulative (Systematic)", "Proportional to length (e ∝ L); errors always carry the same sign and accumulate", "Chain too long or too short, temperature change, slope, sag, bad pull", "Makes measured distance systematically longer or shorter"],
      ["Compensating (Random / Accidental)", "Proportional to square root of length (e ∝ √L); positive and negative errors cancel", "Imperfect plumbing, careless reading, inaccurate arrow setting", "Tends to neutralize and balance out over long measurements"]
    ],
    [125, 125, 130, 130]
  );

  builder.addSubSectionHeader("5.2 Erroneous Chain Length Calculations");
  builder.addParagraph("If a chain is too long, the measured distance will be too short! If a chain is too short, the measured distance will be too long!");
  builder.addFormulaBox("INCORRECT CHAIN LENGTH REVISION VAULT", [
    "True Distance = (L' / L) × Measured Distance",
    "True Area = (L' / L)² × Measured Area",
    "True Volume = (L' / L)³ × Measured Volume",
    "where L = Designated nominal length of chain (e.g. 20m), L' = Actual incorrect length of chain"
  ]);

  builder.addSubSectionHeader("5.3 Standard Systematic Tape Corrections");
  builder.addBulletPoints([
    { bold: "1. Correction for Absolute Length (Ca)", text: "Ca = (L' - L) · l / L. Positive if tape is too long; negative if tape is too short." },
    { bold: "2. Temperature Correction (Ct)", text: "Ct = α · (Tm - T₀) · L. Where α = coefficient of thermal expansion, Tm = field temperature, T₀ = standardizing temperature. Positive if Tm > T₀; negative if Tm < T₀." },
    { bold: "3. Pull / Tension Correction (Cp)", text: "Cp = (P - P₀) · L / (A · E). Where P = field pull, P₀ = standard pull, A = tape cross-sectional area, E = Young's modulus. Positive if P > P₀; negative if P < P₀." },
    { bold: "4. Sag Correction (Cs)", text: "Cs = - (W² · L) / (24 · P²) = - (w² · L³) / (24 · P²). Where W = total tape weight, w = weight per unit length. Sag correction is ALWAYS SUBTRACTIVE (-)." },
    { bold: "5. Normal Tension (Pn)", text: "The tension at which pull correction exactly balances sag correction: Pn = (0.204 · W · √(A · E)) / √(Pn - P₀)." },
    { bold: "6. Reduction to Mean Sea Level (Cmsl)", text: "Cmsl = - (L · h) / R. Where h = elevation above MSL, R = mean radius of Earth (6,370 km). Always negative (subtractive)." }
  ]);

  builder.addTrapBox("SAG CORRECTION IS ALWAYS NEGATIVE", "Sag causes the tape to hang in a catenary curve, making the measured distance between ends GREATER than the true chord distance. Therefore, sag correction must ALWAYS be SUBTRACTED from the measured distance.");

  // CHAPTER 6
  builder.addSectionHeader("CHAPTER 6: OBSTACLES IN CHAINING & RANGING");
  builder.addParagraph("Obstacles encountered in chain survey lines are classified into three distinct categories based on whether vision (ranging) or chaining is obstructed.");

  builder.addTable(
    ["Class of Obstacle", "Vision (Ranging)", "Chaining", "Typical Examples", "Geometric Solution"],
    [
      ["Class 1: Chaining Obstructed", "Possible (Free)", "Obstructed", "Pond, lake, river, swamp", "Right-angled triangle method (Pythagoras), similar triangles, parallel offset line"],
      ["Class 2: Ranging Obstructed", "Obstructed", "Possible (Free)", "Hill, rising ground, depression", "Reciprocal ranging (indirect ranging with two intermediate observers)"],
      ["Class 3: Both Obstructed", "Obstructed", "Obstructed", "Building, dense jungle, masonry structure", "Forming a rectangular detour around the building, or identical 60° equilateral triangles"]
    ],
    [105, 75, 75, 110, 145]
  );

  // CHAPTER 7
  builder.addSectionHeader("CHAPTER 7: CHAIN TRIANGULATION FRAMEWORK & FIELD BOOK");
  builder.addParagraph("In chain surveying, the entire area is divided into a network of connected triangles (triangulation) because a triangle is the only simple plane figure that can be plotted uniquely from the lengths of its sides alone without measuring angles.");

  builder.addSubSectionHeader("7.1 Survey Stations & Survey Lines");
  builder.addBulletPoints([
    { bold: "Main Survey Stations", text: "Controlling corner points of the survey framework. Selected to be intervisible and command the surrounding terrain. Designated A, B, C..." },
    { bold: "Subsidiary (Tie) Stations", text: "Points selected on main survey lines to run tie lines for capturing interior topographic details." },
    { bold: "Base Line", text: "The longest, most critical main survey line running straight through the center of the survey area. All other survey triangles are laid off from the base line. Measured with the greatest care and precision." },
    { bold: "Check Line (Proof Line)", text: "A line measured from the apex of a triangle to an opposite side to verify the accuracy of the framework. If the plotted length matches the ground length, the framework is correct!" },
    { bold: "Tie Line", text: "A line joining subsidiary stations on two main survey lines. Serves two purposes: checks framework accuracy and fixes interior details like houses and wells without long offsets." },
    { bold: "Well-Conditioned Triangle", text: "A triangle whose shape allows accurate plotting. No angle should be less than 30° or greater than 120°. The ideal well-conditioned triangle is an EQUILATERAL TRIANGLE (all angles = 60°)." }
  ]);

  builder.addSubSectionHeader("7.2 Field Book & Booking Conventions");
  builder.addBulletPoints([
    { bold: "Field Book", text: "An oblong notebook (approx 200 mm × 120 mm) opening lengthwise, carried in a waterproof leather case." },
    { bold: "Single Line Field Book", text: "Contains a single red/blue line down the center of each page representing the chain line. Offsets are plotted on left and right. Suitable for large-scale ordinary work." },
    { bold: "Double Line Field Book", text: "Contains two parallel lines (15-20 mm apart) representing the chain line. Chainage is written inside the column; offsets outside. Most widely used standard in India." },
    { bold: "Booking Direction", text: "Booking ALWAYS commences from the BOTTOM of the page and proceeds UPWARDS towards the top, matching the forward direction of surveyor's travel!" }
  ]);

  builder.addFocusBox("FIELD BOOK BOOKING DIRECTION", "In a survey field book, entries are strictly written starting from the BOTTOM of the page and moving UPWARDS. This mimics the observer walking forward along the chain line.");

  // CHAPTER 8
  builder.addSectionHeader("CHAPTER 8: AREA CALCULATION, PLANIMETER & PENTAGRAPH");
  builder.addParagraph("Determining land parcel areas from survey measurements is a core duty of surveyors. Areas are calculated either directly from field notes (cross-staff survey) or from plotted drawings using coordinate formulas and mechanical instruments.");

  builder.addSubSectionHeader("8.1 Rules for Area Calculation with Irregular Boundaries");
  builder.addTable(
    ["Rule", "Mathematical Formula", "Boundary Assumption", "Required Number of Ordinates"],
    [
      ["Mid-Ordinate Rule", "Area = d · (O₁ + O₂ + ... + On)", "Boundary between ordinates is straight line", "Any number of ordinates"],
      ["Average Ordinate Rule", "Area = L · (ΣO / (n + 1))", "Straight boundary between ordinates", "Any number of ordinates"],
      ["Trapezoidal Rule", "Area = d · [ (O₀ + On)/2 + O₁ + O₂ + ... + On-1 ]", "Boundary consists of straight line chords", "Any number of ordinates"],
      ["Simpson's One-Third Rule", "Area = (d / 3) · [ (O₀ + On) + 4·(Σ Odd) + 2·(Σ Even) ]", "Boundary consists of parabolic arcs (y = ax² + bx + c)", "MUST have ODD number of ordinates (EVEN number of intervals)"]
    ],
    [105, 185, 125, 95]
  );

  builder.addFocusBox("SIMPSON'S ONE-THIRD RULE IN PSC EXAMS", "• Simpson's rule assumes the boundary between ordinates follows a second-degree parabola.\n• Strictly requires an ODD number of ordinates (i.e. an EVEN number of equal strips/divisions).\n• Gives higher accuracy than the trapezoidal rule for curved natural boundaries (e.g. river banks).");

  builder.addSubSectionHeader("8.2 Amsler's Polar Planimeter");
  builder.addBulletPoints([
    { bold: "Purpose", text: "A precision mechanical instrument used for measuring the area of any regular or irregular plane figure directly from a plotted map." },
    { bold: "Components", text: "Consists of two arms hinged together: Tracing Arm (with tracing point) and Anchor Arm (with anchor needle weight), plus a measuring wheel with drum, vernier, and dial revolution counter." },
    { bold: "Formula for Area", text: "Area A = M · (F - I ± 10 · N + C), where M = multiplying constant, F = final reading, I = initial reading, N = number of complete dial revolutions (positive if clockwise), C = constant of zero circle (added only when anchor point is INSIDE the figure!)." },
    { bold: "Zero Circle (Circle of Correction)", text: "The circle traced by the tracing point when the tracing arm is positioned at exactly 90° to the anchor arm. In this position, the measuring wheel rolls without sliding, registering ZERO reading regardless of distance traversed!" }
  ]);

  builder.addSubSectionHeader("8.3 Pentagraph & Eidograph");
  builder.addBulletPoints([
    { bold: "Pentagraph", text: "An instrument based on the principle of a parallelogram linkage, used for enlarging, reducing, or copying plotted maps and plans to different scales." },
    { bold: "Eidograph", text: "An improved and more accurate form of pantograph consisting of a central bar and two parallel arms; gives smoother mechanical action and greater precision." }
  ]);

  builder.addSubSectionHeader("8.4 Cross-Staff Survey (Area Calculation from Field Book)");
  builder.addParagraph("In a cross-staff survey, a central chain line (base line) runs through the property, and perpendicular offsets are measured to all boundary corners using a cross staff. The land parcel is automatically divided into a series of right-angled triangles and trapezoids.");
  builder.addTable(
    ["Geometric Figure", "Ground Boundary Shape", "Area Formula", "Booking Example"],
    [
      ["Right-Angled Triangle", "Base line segment × Offset at vertex", "Area = 1/2 × (Chainage difference) × Offset", "1/2 × (b₂ - b₁) × h"],
      ["Trapezoid", "Two consecutive offsets on same side of base line", "Area = 1/2 × (Offset₁ + Offset₂) × (Chainage difference)", "1/2 × (h₁ + h₂) × (b₂ - b₁)"],
      ["Total Land Parcel Area", "Sum of all right-side and left-side figures", "Total Area = Σ(Area of Triangles) + Σ(Area of Trapezoids)", "Expressed in m², cents (40.47 m²), or ares (100 m²)"]
    ],
    [115, 125, 140, 120]
  );

  // CHAPTER 9
  builder.addSectionHeader("CHAPTER 9: PSC SOLVED NUMERICAL MODELS");

  builder.addWorkedExample(
    "Incorrect Chain Length and True Distance",
    "A line was measured with a 20 m metric chain and found to be 480 metres long. On checking after the day's survey, the chain was found to be 10 cm too long. Find the true distance of the line.",
    [
      "Nominal length of chain (L) = 20 m",
      "Actual length of chain (L') = 20 m + 0.10 m = 20.10 m",
      "Measured distance = 480 m",
      "True Distance = (L' / L) × Measured Distance = (20.10 / 20.00) × 480",
      "True Distance = 1.005 × 480 = 482.40 m"
    ],
    "482.40 m"
  );

  builder.addWorkedExample(
    "Incorrect Chain Length and Land Area",
    "A parcel of land was measured with a 30 m chain that was 15 cm too short. The calculated area from the measurements was 120 hectares. What is the true area of the parcel?",
    [
      "Nominal chain length (L) = 30 m",
      "Actual chain length (L') = 30 - 0.15 = 29.85 m",
      "Ratio L' / L = 29.85 / 30 = 0.995",
      "True Area = (L' / L)² × Measured Area = (0.995)² × 120 ha",
      "True Area = 0.990025 × 120 = 118.803 ha"
    ],
    "118.80 ha (approx 118.8 hectares)"
  );

  builder.addWorkedExample(
    "Tape Sag Correction",
    "A 30 m steel tape weighing 0.6 kg is supported at its two ends under a tension of 10 kg (98.1 N). Calculate the sag correction for this tape.",
    [
      "Formula: Cs = - (W² · L) / (24 · P²)",
      "Total Weight W = 0.6 kg, Length L = 30 m, Pull P = 10 kg",
      "Cs = - (0.6² × 30) / (24 × 10²)",
      "Cs = - (0.36 × 30) / (24 × 100) = - 10.8 / 2400 = - 0.0045 m = - 4.5 mm"
    ],
    "- 0.0045 m (- 4.5 mm)"
  );

  builder.addWorkedExample(
    "Simpson's Rule Area Calculation",
    "Seven ordinates spaced at 5 m intervals along an irregular boundary are: 2.5 m, 3.8 m, 4.6 m, 5.2 m, 4.0 m, 3.2 m, and 1.8 m. Calculate the area using Simpson's One-Third Rule.",
    [
      "Common interval (d) = 5 m; Number of ordinates = 7 (odd, valid for Simpson's)",
      "End ordinates: O₀ = 2.5 m, O₆ = 1.8 m => (O₀ + O₆) = 4.3 m",
      "Odd ordinates: O₁ = 3.8, O₃ = 5.2, O₅ = 3.2 => Σ Odd = 12.2 m",
      "Even ordinates: O₂ = 4.6, O₄ = 4.0 => Σ Even = 8.6 m",
      "Area = (d / 3) × [ (O₀ + O₆) + 4(Σ Odd) + 2(Σ Even) ]",
      "Area = (5 / 3) × [ 4.3 + 4(12.2) + 2(8.6) ] = (5 / 3) × [ 4.3 + 48.8 + 17.2 ] = (5 / 3) × 70.3 = 117.17 m²"
    ],
    "117.17 m²"
  );

  builder.addWorkedExample(
    "Hypotensusal Allowance Calculation",
    "A line is being measured up a uniform slope of 1 in 5 (angle θ ≈ 11°19', sec θ = 1.0198). What is the hypotensusal allowance per 20 m chain?",
    [
      "Nominal chain length = 20 m (100 links)",
      "Hypotensusal Allowance = 100 × (sec θ - 1) links",
      "Allowance = 100 × (1.0198 - 1) = 100 × 0.0198 = 1.98 links ≈ 2 links",
      "In metres: 1.98 links × 0.2 m = 0.396 m ≈ 40 cm"
    ],
    "1.98 links (approx 40 cm along the slope)"
  );

  // CHAPTER 10
  builder.addSectionHeader("CHAPTER 10: KERALA PSC 50 RAPID-FIRE ONE-LINERS & EXAM VAULT");

  builder.addOneLiners("Principles & Instruments", [
    { q: "Fundamental principle of surveying", a: "To work from whole to part." },
    { q: "Plane surveying limit for Earth curvature", a: "250 km² (or 195.5 km²)." },
    { q: "Length of Gunter's chain", a: "66 feet (100 links)." },
    { q: "Number of square Gunter's chains in 1 acre", a: "10 square chains." },
    { q: "Length of Engineer's chain", a: "100 feet (100 links)." },
    { q: "Length of Revenue chain", a: "33 feet (16 links)." },
    { q: "Number of links in 20m metric chain", a: "100 links (each link 20 cm)." },
    { q: "Tallies in 20m metric chain are provided at every", a: "5 metres." },
    { q: "Alloy composition of Invar tape", a: "64% Steel and 36% Nickel." },
    { q: "Tape having lowest coefficient of thermal expansion", a: "Invar tape." }
  ]);

  builder.addOneLiners("Field Operations & Right Angles", [
    { q: "Length of an arrow used in chain surveying", a: "400 mm (40 cm), wire diameter 4 mm." },
    { q: "Colour bands of ranging rod are spaced at", a: "200 mm (20 cm) intervals." },
    { q: "Method used for ranging when ends are not intervisible", a: "Reciprocal (Indirect) ranging." },
    { q: "Angle between mirrors in an Optical Square", a: "Strictly 45 degrees." },
    { q: "Deflection angle in an Optical Square", a: "90 degrees (Double reflection)." },
    { q: "Prism square utilizes a fixed prism of", a: "45 degrees." },
    { q: "French cross staff can set out angles of", a: "45°, 90°, and 135°." },
    { q: "Hypotensusal allowance for sloping ground", a: "100(sec θ - 1) links." },
    { q: "Instrument for single observer ranging without assistant", a: "Line Ranger." },
    { q: "Offset taken at an angle other than 90°", a: "Oblique offset." }
  ]);

  builder.addOneLiners("Errors, Framework & Areas", [
    { q: "If chain is too long, measured distance will be", a: "Too short (needs positive correction)." },
    { q: "If chain is too short, measured distance will be", a: "Too long (needs negative correction)." },
    { q: "Sag correction for tape is always", a: "Subtractive (always negative)." },
    { q: "Tension at which sag correction equals pull correction", a: "Normal Tension." },
    { q: "The longest and most important main survey line", a: "Base line." },
    { q: "Line run to check the accuracy of framework", a: "Check line (Proof line)." },
    { q: "Ideal well-conditioned triangle has angles of", a: "60 degrees each (Equilateral triangle)." },
    { q: "Permissible angle limits in well-conditioned triangle", a: "No angle < 30° or > 120°." },
    { q: "Simpson's rule requires how many ordinates", a: "Strictly an ODD number of ordinates." },
    { q: "Planimeter constant C is added only when anchor point is", a: "INSIDE the figure." },
    { q: "Zero circle reading on polar planimeter occurs when", a: "Tracing arm is at 90° to anchor arm." },
    { q: "Instrument used for mechanically enlarging or reducing maps", a: "Pantograph (or Eidograph)." },
    { q: "Number of arrows handed to leader at start of chaining", a: "10 arrows." },
    { q: "Number of arrows with follower indicates", a: "Number of full chain lengths completed." },
    { q: "Booking in survey field book starts from", a: "Bottom of page and proceeds upwards." }
  ]);

  return await builder.finish();
}

async function runBuild() {
  console.log('Generating Module 02 PDF...');
  const res = await buildModule2();
  console.log(`Module 02 Complete! Pages: ${res.totalPages}`);
}

runBuild().catch(console.error);
