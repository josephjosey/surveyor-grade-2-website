const { ModulePdfBuilder } = require('./create-module-pdf-engine.cjs');

async function buildModule5() {
  const builder = new ModulePdfBuilder({
    moduleNumber: 5,
    moduleTitle: "Levelling and Contouring",
    marks: "10 Marks",
    topics: "Definitions & Concepts (Datum, MSL, Benchmarks, Reduced Level), Levelling Instruments (Dumpy, Tilting, Auto Level, Sopwith staff), Temporary Adjustments & Parallax, Field Observations (BS, IS, FS, Change Point), Reduction of Levels (Height of Instrument vs Rise & Fall methods & Arithmetical checks), Inverted Staff Readings, Types of Levelling (Fly, Check, Profile, Cross-section, Reciprocal Levelling), Curvature & Refraction Corrections, Distance to Horizon, Contouring Characteristics (Hills, Depressions, Cliffs, Ridge/Valley lines), Methods of Contouring & Interpolation, Reservoir Capacity.",
    outputFilename: "module-05-levelling-and-contouring.pdf"
  });

  builder.addCoverPage();

  // CHAPTER 1
  builder.addSectionHeader("CHAPTER 1: INTRODUCTION & FUNDAMENTAL DEFINITIONS IN LEVELLING");
  builder.addParagraph("Levelling is the branch of surveying that deals with measuring relative heights or elevations of points on Earth's surface with respect to a chosen reference surface known as a Datum.");

  builder.addSubSectionHeader("1.1 Core Definitions");
  builder.addTable(
    ["Technical Term", "Rigorous Definition & Engineering Principle", "Key PSC Characteristic"],
    [
      ["Level Surface", "A curved surface that is everywhere normal (perpendicular) to the direction of gravity at that point", "Every point on a level surface is equidistant from Earth's center; mean still water surface of an ocean is a level surface"],
      ["Level Line", "A line lying entirely within a level surface; perpendicular to plumb line at all points", "It is curved, not straight! Parallels the curvature of the Earth"],
      ["Horizontal Plane", "A plane tangential to a level surface at a particular given point", "Strictly perpendicular to the plumb line at that specific point only"],
      ["Horizontal Line", "A straight line lying within the horizontal plane; tangential to a level line", "Diverges from the curved level line as distance increases due to Earth's curvature"],
      ["Datum Surface", "An arbitrary or established reference level surface from which elevations are measured", "In India, Great Trigonometrical Survey (GTS) datum is Mean Sea Level (MSL) at Mumbai (Bombay High)"],
      ["Reduced Level (RL)", "The vertical distance (height or elevation) of a point above or below the chosen datum surface", "Expressed in metres (e.g. RL = +124.500 m above MSL)"],
      ["Elevation", "The vertical distance of a point above the reference datum", "Positive if above datum, negative if below datum"],
      ["Bench Mark (BM)", "A permanent reference mark of known, established Reduced Level (RL)", "Serves as the starting and closing reference point for all levelling lines"]
    ],
    [95, 230, 175]
  );

  builder.addSubSectionHeader("1.2 Types of Bench Marks");
  builder.addBulletPoints([
    { bold: "GTS Bench Marks", text: "Great Trigonometrical Survey bench marks established across India by the Survey of India with extreme geodetic precision, referenced to Mean Sea Level at Mumbai." },
    { bold: "Permanent Bench Marks", text: "Fixed reference marks established on permanent structures (plinth of government buildings, bridge abutments, railway mileposts, lighthouse bases) by state departments (PWD, KWA, Railways)." },
    { bold: "Arbitrary Bench Marks", text: "Assumed reference datum (e.g. plinth of an adjacent building taken as RL = 100.000 m) adopted for small, isolated engineering projects." },
    { bold: "Temporary Bench Marks (TBM)", text: "Reference marks established at the end of a day's survey (on a tree root, culvert parapet, firmly driven peg) to resume work the next morning." }
  ]);

  builder.addFocusBox("MSL DATUM IN INDIA", "• The official Mean Sea Level (MSL) datum for the Survey of India GTS network was originally Karachi (prior to 1947) and is now established at MUMBAI HIGH (Bombay).\n• GTS bench marks are the highest precision bench marks in India.");

  // CHAPTER 2
  builder.addSectionHeader("CHAPTER 2: LEVELLING INSTRUMENTS & LEVELLING STAFF");
  builder.addParagraph("Levelling instruments consist of a telescope to establish a horizontal line of sight and a sensitive spirit level bubble tube to bring the line of sight horizontal.");

  builder.addSubSectionHeader("2.1 Classification of Levels");
  builder.addTable(
    ["Instrument Type", "Operating Construction & Mechanism", "Field Suitability & PSC Notes"],
    [
      ["Dumpy Level", "Telescope is rigidly fixed to the vertical spindle and cannot be rotated about its longitudinal axis or removed from its supports", "Sturdy, rugged, and simple; retains adjustment well; classic standard engineering level"],
      ["Tilting Level", "Telescope is not rigidly fixed; can be tilted slightly in a vertical plane about a horizontal pivot by a micrometer tilting screw", "Ideal for high-precision work; bubble is centered by tilting screw for each sight independently of foot screws"],
      ["Automatic Level (Auto Level)", "Features an internal optical compensator (pendulum prism system) suspended inside the telescope", "Once approximately leveled within circular bubble circular range, the line of sight is automatically leveled; fast, eliminates bubble viewing errors"],
      ["Digital Level", "Electronic digital barcode reading system; reads bar-coded invar staff automatically", "Eliminates human reading and booking errors; records data electronically"]
    ],
    [105, 205, 190]
  );

  builder.addSubSectionHeader("2.2 Levelling Staff & Sensitiveness of Bubble Tube");
  builder.addBulletPoints([
    { bold: "Self-Reading Staff", text: "Staff that can be read directly by the level observer through the telescope. Most common is the Sopwith telescopic staff (metric 4 m or 5 m length in 3 sliding sections)." },
    { bold: "Least Count of Metric Staff", text: "Smallest division on a standard metric levelling staff is 5 mm (0.005 m). Alternate black and white stripes are each 5 mm thick." },
    { bold: "Target Staff", text: "Fitted with a movable sliding target that is directed up or down by the level observer until bisected, and read on the spot by the staff-man with a vernier. Used for long sights." },
    { bold: "Sensitiveness of Bubble Tube", text: "The angular value of one division (usually 2 mm) of the bubble tube: α = (s / (n · D)) radians = (s / (n · D)) · 206265 seconds. Radius of curvature R = (n · d · D) / s, where d = length of one division (2 mm), s = staff intercept change, D = distance to staff, n = number of divisions bubble displaced." }
  ]);

  builder.addFormulaBox("SENSITIVENESS OF BUBBLE TUBE FORMULA", [
    "Angular value of one division α' = s / (n · D)  [radians]",
    "In seconds of arc: α\" = (s / (n · D)) × 206,265\"",
    "Radius of Curvature of Bubble Tube: R = (n · d · D) / s",
    "where d = length of one bubble division (normally 2 mm), s = staff movement, D = distance to staff, n = divisions displaced"
  ]);

  // CHAPTER 3
  builder.addSectionHeader("CHAPTER 3: TEMPORARY ADJUSTMENTS & COLLIMATION CHECK");
  builder.addParagraph("Temporary adjustments are performed at every instrument station before observations begin.");

  builder.addSubSectionHeader("3.1 Sequence of Temporary Adjustments");
  builder.addBulletPoints([
    { bold: "1. Setting Up", text: "Planting tripod legs firmly on ground at convenient height, bringing leveling head approximately horizontal by eye." },
    { bold: "2. Leveling Up", text: "Telescope placed parallel to two footscrews, rotated in opposite directions (both in or both out) until bubble is centered. Rotated 90° over the third footscrew and leveled. Repeated until bubble remains centered in any direction." },
    { bold: "3. Elimination of Parallax", text: "Parallax is the apparent movement of image relative to cross-hairs when eye is moved. Eliminated in two distinct steps: (a) Focusing the eyepiece (turning eyepiece until cross-hairs appear sharp and distinct against white paper); (b) Focusing the objective (turning focusing screw until image of staff is sharp and in plane of cross-hairs)." }
  ]);

  builder.addSubSectionHeader("3.2 Two-Peg Test for Collimation Error");
  builder.addParagraph("The Two-Peg Test is the standard field test to determine whether the line of collimation is truly parallel to the bubble axis.");
  builder.addBulletPoints([
    { bold: "Test Procedure", text: "Two pegs A and B are driven into the ground at distance D (usually 50 to 100 m). The level is first set up midway between A and B (at C). True difference in elevation = (Staff reading at A) - (Staff reading at B). Because distances CA and CB are equal, collimation errors cancel out!" },
    { bold: "Check Setup", text: "The instrument is then set up very close to peg A (or beyond peg B). If the apparent difference in elevation matches the true difference, the line of collimation is correct. If not, collimation error exists and the cross-hair diaphragm must be adjusted." }
  ]);

  builder.addFocusBox("COLLIMATION ERROR CANCELLATION", "Collimation error, Earth curvature error, and atmospheric refraction error are COMPLETELY ELIMINATED when the level is set up exactly MIDWAY between the two staff stations (Back sight distance = Fore sight distance)!");

  // CHAPTER 4
  builder.addSectionHeader("CHAPTER 4: FIELD SIGHTS & LEVELLING BOOKING");
  builder.addParagraph("Every reading taken with a levelling instrument falls into one of three classifications based on instrument station order.");

  builder.addTable(
    ["Sight Designation", "Definition & Measurement Sequence", "Critical Rule / Booking Position"],
    [
      ["Back Sight (BS)", "The very FIRST staff reading taken immediately after setting up and leveling the instrument", "Always taken on a point of KNOWN Reduced Level (Bench Mark or Change Point). Added to RL to find Height of Instrument!"],
      ["Fore Sight (FS)", "The very LAST staff reading taken from an instrument station just before shifting the instrument", "Taken on a Change Point or final benchmark; subtracted from Height of Instrument to find its RL"],
      ["Intermediate Sight (IS)", "Any staff reading taken on intermediate ground points BETWEEN the Back Sight and Fore Sight", "Subtracted from Height of Instrument; instrument is NOT shifted after taking an intermediate sight"],
      ["Change Point (CP) / Turning Point (TP)", "A stable point on which BOTH a Fore Sight (from previous setup) and a Back Sight (from new setup) are taken", "Crucial link tying together consecutive instrument setups; staff must NOT be moved while level is shifted!"]
    ],
    [105, 205, 190]
  );

  builder.addSubSectionHeader("4.1 Inverted Staff Readings");
  builder.addParagraph("When the Reduced Level of an overhead object (underside of bridge girder, arch crown, tunnel soffit, building ceiling beam) is required, the staff cannot be stood vertically on it; the staff is held UPSIDE DOWN (INVERTED) with its zero touching the ceiling feature.");
  builder.addFormulaBox("INVERTED STAFF FORMULAS", [
    "An inverted staff reading is recorded with a NEGATIVE SIGN (-) in the field book!",
    "RL of Overhead Point = Height of Instrument (HI) - (- Staff Reading)",
    "RL of Overhead Point = Height of Instrument (HI) + Staff Reading",
    "Height of Instrument (HI) = RL of Floor BM + BS reading",
    "Total Clearance Height = Floor to Ceiling = BS reading + Inverted Staff reading"
  ]);

  // CHAPTER 5
  builder.addSectionHeader("CHAPTER 5: REDUCTION OF LEVELS: HI VS RISE & FALL METHODS");
  builder.addParagraph("Two standard methods are used to compute Reduced Levels from staff readings in the levelling field book.");

  builder.addTable(
    ["Comparison Parameter", "Height of Instrument (Collimation) Method", "Rise and Fall Method"],
    [
      ["Fundamental Equations", "HI = RL + BS\nRL of point = HI - IS (or FS)", "Rise / Fall = Previous Reading - Current Reading\nRL of point = Previous RL ± Rise / Fall"],
      ["Arithmetical Labor", "Very rapid and simple; requires fewer calculations", "More laborious; requires calculating differences for every single reading"],
      ["Check on Intermediate Sights", "NO arithmetical check on Intermediate Sights! A calculation error on an IS is never detected by the check formula!", "COMPLETE arithmetical check on all readings including Intermediate Sights!"],
      ["Standard Check Formula", "ΣBS - ΣFS = Last RL - First RL", "ΣBS - ΣFS = ΣRise - ΣFall = Last RL - First RL"],
      ["Field Applicability", "Best for profile levelling and contouring where many intermediate sights are taken from each setup", "Best for precision bench mark fly levelling and check levelling where accuracy is paramount"]
    ],
    [115, 195, 190]
  );

  builder.addFocusBox("PSC ARITHMETICAL CHECK FORMULA TRAP", "• Height of Instrument check formula: ΣBS - ΣFS = Last RL - First RL.\n• Rise and Fall check formula: ΣBS - ΣFS = ΣRise - ΣFall = Last RL - First RL.\n• In HI method, there is NO check on intermediate sights! In Rise and Fall method, intermediate sights are fully checked.");

  // CHAPTER 6
  builder.addSectionHeader("CHAPTER 6: CLASSIFICATION OF LEVELLING OPERATIONS");
  builder.addParagraph("Levelling operations are categorized according to their specific civil engineering objective.");

  builder.addTable(
    ["Levelling Type", "Procedure & Operational Purpose", "Civil Engineering Application"],
    [
      ["Fly Levelling", "Rapid levelling taking only Back Sights and Fore Sights between distant points; no intermediate sights", "Carried out to connect a distant benchmark to the start of a project site"],
      ["Check Levelling", "Fly levelling conducted from the finish point back to the starting benchmark at the end of a day", "Checks the accuracy of the day's levelling work (closing error verification)"],
      ["Profile Levelling (Longitudinal Section / L-Section)", "Levelling along the central centerline of a proposed alignment (road, canal, railway, pipeline) taking readings at regular chainages (20 m intervals)", "Used to determine the existing ground profile, design formation gradient, and compute cutting/filling depths"],
      ["Cross-Sectioning (X-Section)", "Levelling along lines perpendicular to the centerline on both left and right sides", "Used to determine lateral ground slopes and compute earthwork cross-sectional areas"],
      ["Reciprocal Levelling", "Special field technique used across wide rivers, lakes, ravines where forward and back sight distances cannot be equalized", "Eliminates Earth curvature error, atmospheric refraction error, and collimation error completely!"]
    ],
    [115, 215, 170]
  );

  builder.addSubSectionHeader("6.1 Reciprocal Levelling Formulas");
  builder.addParagraph("Let instrument be set near A, reading on A = a₁, reading on B = b₁. Let instrument then be set near B, reading on A = a₂, reading on B = b₂.");
  builder.addFormulaBox("RECIPROCAL LEVELLING FORMULAS", [
    "True Difference in Elevation h = 1/2 × [ (a₁ - b₁) + (a₂ - b₂) ]",
    "Combined Error (Collimation + Curvature + Refraction) e = 1/2 × [ (a₁ - b₁) - (a₂ - b₂) ]",
    "Notice: Reciprocal levelling completely eliminates curvature and collimation errors, but assumes atmospheric refraction remains constant during the two setups!"
  ]);

  // CHAPTER 7
  builder.addSectionHeader("CHAPTER 7: CURVATURE & REFRACTION CORRECTIONS");
  builder.addParagraph("For sight distances exceeding 100 metres, the effects of the Earth's curvature and atmospheric refraction become significant.");

  builder.addSubSectionHeader("7.1 Curvature Correction (Cc)");
  builder.addParagraph("The horizontal line of sight diverges from the curved level line as distance increases. The staff reading is therefore GREATER than it would be on a true level line. Hence, curvature correction is ALWAYS SUBTRACTIVE (-).");
  builder.addFormulaBox("CURVATURE CORRECTION FORMULA", [
    "Curvature Correction Cc = - d² / (2R) = - 0.0785 × d²  [metres]",
    "where d = horizontal distance to staff in KILOMETRES, R = Earth's mean radius (6,370 km)",
    "Cc is strictly SUBTRACTIVE from staff reading."
  ]);

  builder.addSubSectionHeader("7.2 Refraction Correction (Cr)");
  builder.addParagraph("Rays of light passing through atmospheric layers of varying density bend downwards towards the denser lower air. This causes the line of sight to dip downwards, making the staff reading SMALLER than it should be. Hence, refraction correction is ALWAYS ADDITIVE (+).");
  builder.addFormulaBox("REFRACTION CORRECTION FORMULA", [
    "Refraction Correction Cr = + 1/7 × Cc = + 0.0112 × d²  [metres]",
    "where d = distance in kilometres.",
    "Cr is strictly ADDITIVE to staff reading."
  ]);

  builder.addSubSectionHeader("7.3 Combined Correction & Distance to Horizon");
  builder.addFormulaBox("COMBINED CORRECTION & VISIBLE HORIZON", [
    "Combined Correction C = Cc + Cr = - 0.0785 d² + 0.0112 d² = - 0.0673 × d²  [metres]",
    "Combined correction is ALWAYS SUBTRACTIVE from staff reading!",
    "Corrected Staff Reading = Observed Staff Reading - 0.0673 × d²",
    "",
    "Distance to Visible Horizon d (in km) from height h (in metres):",
    "d = √( h / 0.0673 ) ≈ 3.855 × √h  [km]",
    "Height of an object visible from distance d: h = 0.0673 × d²  [metres]"
  ]);

  builder.addFocusBox("PSC CURVATURE & REFRACTION CONSTANTS", "• Curvature correction coefficient: 0.0785 d² (Subtractive).\n• Refraction correction coefficient: 0.0112 d² (Additive, approx 1/7th of curvature).\n• Combined correction coefficient: 0.0673 d² (Subtractive).\n• Distance to horizon formula: d = 3.855 √h (d in km, h in m).");

  // CHAPTER 8
  builder.addSectionHeader("CHAPTER 8: CONTOURING: CHARACTERISTICS & INTERPRETATION");
  builder.addParagraph("A contour is an imaginary line on the ground surface joining points of equal Reduced Level (elevation). Contouring is the process of tracing and plotting contour lines on a topographic map.");

  builder.addSubSectionHeader("8.1 Contour Interval vs Horizontal Equivalent");
  builder.addTable(
    ["Parameter", "Definition", "Nature on a Map", "Factors Determining Value"],
    [
      ["Contour Interval (C.I.)", "The vertical distance between two consecutive contour lines", "CONSTANT on any given map (never changes)", "Scale of map, purpose of survey, nature of terrain, budget available"],
      ["Horizontal Equivalent (H.E.)", "The horizontal distance between two consecutive contour lines", "VARIABLE on a map (changes from point to point)", "Steepness of ground slope; smaller for steep slopes, larger for gentle slopes"]
    ],
    [125, 145, 105, 125]
  );

  builder.addSubSectionHeader("8.2 The Ten Golden Characteristics of Contours");
  builder.addBulletPoints([
    { bold: "1. Equal Elevation", text: "All points on a contour line possess the exact same Reduced Level." },
    { bold: "2. Spacing vs Ground Slope", text: "Closely spaced contours indicate STEEP slope; widely spaced contours indicate GENTLE slope; equally spaced contours indicate UNIFORM slope; straight parallel equidistant contours indicate a flat inclined plane." },
    { bold: "3. Closed Contours - Hill vs Depression", text: "Concentric closed contours with higher elevation values INSIDE represent a HILL. Concentric closed contours with lower elevation values inside represent a DEPRESSION or POND." },
    { bold: "4. Ridge Line (Watershed)", text: "Contours bend in a U-shape with convexity pointing towards LOWER ground (higher values inside the U). Ridge line crosses contours at strictly 90°." },
    { bold: "5. Valley Line (Thalweg)", text: "Contours bend in a V-shape with apex pointing towards HIGHER ground (lower values inside the V). Valley line crosses contours at strictly 90°. Streams and rivers flow along valley lines." },
    { bold: "6. Non-Intersecting Principle", text: "Contour lines NEVER cross or intersect each other, EXCEPT in the rare case of an OVERHANGING CLIFF or a CAVE / NATURAL TUNNEL." },
    { bold: "7. Merging into a Single Line", text: "Contour lines never merge or unite, EXCEPT in the case of a VERTICAL CLIFF where contours of different elevations coincide." },
    { bold: "8. Continuous Closed Loops", text: "Contour lines cannot end abruptly; they must close upon themselves, either within the map boundary or outside it." },
    { bold: "9. Crossing Buildings", text: "Contour lines do not pass through buildings or permanent masonry structures; they terminate at building walls." },
    { bold: "10. Ridge and Valley Crossing", text: "Contour lines cross ridge lines and valley lines at exactly 90° (Right angles)." }
  ]);

  builder.addTrapBox("CLIFF CONTOUR INTERPRETATION IN PSC", "• Overhanging Cliff: Contour lines CROSS or INTERSECT each other.\n• Vertical Cliff: Contour lines UNITE or MERGE into a single line.\n• Ridge Line: U-shaped, convex towards lower ground.\n• Valley Line: V-shaped, convex (pointing) towards higher ground.");

  // CHAPTER 9
  builder.addSectionHeader("CHAPTER 9: METHODS OF CONTOURING & INTERPOLATION");
  builder.addParagraph("Contour mapping methods are broadly classified into Direct and Indirect methods.");

  builder.addSubSectionHeader("9.1 Direct vs Indirect Contouring");
  builder.addTable(
    ["Method", "Field Procedure", "Suitability & Speed"],
    [
      ["Direct Method", "Points of the required contour elevation are directly found and marked on the ground using level and staff, and then surveyed and plotted", "Extremely accurate, but very slow, tedious, and expensive; suitable only for small areas of high importance"],
      ["Indirect Method (By Cross-Sections)", "Cross-sections are run perpendicular to a centerline; levels taken at breaks of slope, and contours interpolated", "Standard method for linear civil engineering projects: roads, canals, railways"],
      ["Indirect Method (By Squares / Grid)", "Area is divided into a grid of squares (5m to 20m sides); corner elevations taken and contours interpolated", "Best suited for small, fairly level, open construction sites (building sites, reservoirs)"],
      ["Indirect Method (Tacheometric / Radial Lines)", "Telescopic alidade or theodolite used to observe staff intercepts on radial lines around station", "Ideal for rugged, hilly, inaccessible terrain where grid chaining is impossible"]
    ],
    [125, 205, 170]
  );

  builder.addSubSectionHeader("9.2 Interpolation of Contours");
  builder.addParagraph("Interpolation is the process of locating contour lines between plotted ground guide points. Three methods are available: (1) By Estimation (quick, rough); (2) By Arithmetical Calculation (most accurate, used for precision work); (3) By Graphical Method (uses tracing paper with parallel guidelines).");

  // CHAPTER 10
  builder.addSectionHeader("CHAPTER 10: PSC SOLVED NUMERICAL MODELS");

  builder.addWorkedExample(
    "Height of Instrument & Reduced Level",
    "A level was set up and a Back Sight of 1.650 m was taken on a Bench Mark of RL = 120.500 m. An Intermediate Sight of 2.150 m was taken on ground point A, and an Inverted Staff reading of 1.850 m was taken on the bottom of a bridge girder B. Calculate the RL of point A and girder B.",
    [
      "Height of Instrument (HI) = RL of BM + BS = 120.500 + 1.650 = 122.150 m",
      "RL of Point A = HI - IS = 122.150 - 2.150 = 120.000 m",
      "For Inverted Staff on Girder B: reading is recorded as - 1.850 m",
      "RL of Girder B = HI - (- 1.850) = 122.150 + 1.850 = 124.000 m"
    ],
    "RL of A = 120.000 m; RL of Girder B = 124.000 m"
  );

  builder.addWorkedExample(
    "Combined Curvature & Refraction Correction",
    "A staff reading of 3.250 m was taken on a staff held 1.5 km away from the level. Calculate the true corrected staff reading.",
    [
      "Distance d = 1.5 km",
      "Combined Correction C = - 0.0673 × d²",
      "C = - 0.0673 × (1.5)² = - 0.0673 × 2.25 = - 0.151 m",
      "Corrected Staff Reading = Observed Reading - 0.151 m = 3.250 - 0.151 = 3.099 m"
    ],
    "3.099 m"
  );

  builder.addWorkedExample(
    "Distance to Visible Horizon from Lighthouse",
    "A lightkeeper at the top of a lighthouse 49 m above Mean Sea Level observes the horizon. What is the distance to the visible sea horizon in kilometres?",
    [
      "Formula: Distance to horizon d = 3.855 × √h",
      "Height h = 49 m => √h = √49 = 7",
      "Distance d = 3.855 × 7 = 26.985 km ≈ 27.0 km"
    ],
    "26.99 km (approx 27 km)"
  );

  builder.addWorkedExample(
    "Sensitiveness of Bubble Tube",
    "A bubble of a level tube is displaced by 4 divisions when sighting a staff 100 m away. The staff reading changes from 1.550 m to 1.590 m. If the length of one bubble division is 2 mm, find the radius of curvature of the bubble tube.",
    [
      "Staff intercept change s = 1.590 - 1.550 = 0.040 m = 40 mm",
      "Number of divisions n = 4; Distance D = 100 m = 100,000 mm; Division length d = 2 mm",
      "Formula: R = (n · d · D) / s",
      "R = (4 × 2 mm × 100,000 mm) / 40 mm = 800,000 / 40 = 20,000 mm = 20.0 m"
    ],
    "20.0 metres"
  );

  // CHAPTER 11
  builder.addSectionHeader("CHAPTER 11: KERALA PSC 50 RAPID-FIRE ONE-LINERS & EXAM VAULT");

  builder.addOneLiners("Definitions & Instruments", [
    { q: "Curved surface everywhere normal to gravity", a: "Level Surface." },
    { q: "Official MSL datum for Survey of India", a: "Mumbai High (Bombay)." },
    { q: "Smallest division on standard metric levelling staff", a: "5 mm (0.005 m)." },
    { q: "Level fitted with internal optical compensator prism", a: "Automatic Level (Auto Level)." },
    { q: "First reading taken after setting up level", a: "Back Sight (BS)." },
    { q: "Last reading taken before shifting instrument", a: "Fore Sight (FS)." },
    { q: "Point where both FS and BS are taken", a: "Change Point (CP) or Turning Point." },
    { q: "Reading taken on underside of ceiling beam", a: "Inverted Staff reading (recorded with negative sign)." },
    { q: "Test to detect collimation error in a level", a: "Two-Peg Test." },
    { q: "Apparent movement of image relative to cross-hairs", a: "Parallax (eliminated by eyepiece and objective focusing)." }
  ]);

  builder.addOneLiners("Reductions & Corrections", [
    { q: "Check formula for Height of Instrument method", a: "ΣBS - ΣFS = Last RL - First RL." },
    { q: "Check formula for Rise and Fall method", a: "ΣBS - ΣFS = ΣRise - ΣFall = Last RL - First RL." },
    { q: "Method that provides check on Intermediate Sights", a: "Rise and Fall method." },
    { q: "Curvature correction is always", a: "Subtractive (- 0.0785 d²)." },
    { q: "Refraction correction is always", a: "Additive (+ 0.0112 d² = + 1/7 of curvature)." },
    { q: "Combined curvature and refraction correction", a: "- 0.0673 d² (Subtractive)." },
    { q: "Distance to visible horizon formula", a: "d = 3.855 √h (km)." },
    { q: "Operation eliminating curvature and refraction errors across rivers", a: "Reciprocal Levelling." },
    { q: "Levelling along central line of road or railway", a: "Profile Levelling (Longitudinal section)." },
    { q: "Rapid levelling to connect distant benchmarks", a: "Fly Levelling." }
  ]);

  builder.addOneLiners("Contours & Characteristics", [
    { q: "Vertical distance between consecutive contours", a: "Contour Interval (Constant on a map)." },
    { q: "Horizontal distance between consecutive contours", a: "Horizontal Equivalent (Variable on a map)." },
    { q: "Concentric closed contours with higher values inside", a: "A Hill." },
    { q: "Concentric closed contours with lower values inside", a: "A Depression or Pond." },
    { q: "Contours cross ridge and valley lines at", a: "Right angles (90 degrees)." },
    { q: "Contour lines cross or intersect each other in", a: "Overhanging Cliff (or Cave)." },
    { q: "Contour lines unite or merge into a single line in", a: "Vertical Cliff." },
    { q: "Closely spaced contours indicate", a: "Steep slope." },
    { q: "Equally spaced contours indicate", a: "Uniform slope." },
    { q: "Method of contouring best suited for hilly terrain", a: "Tacheometric (Radial lines) method." }
  ]);

  return await builder.finish();
}

async function runBuild() {
  console.log('Generating Module 05 PDF...');
  const res = await buildModule5();
  console.log(`Module 05 Complete! Pages: ${res.totalPages}`);
}

runBuild().catch(console.error);
