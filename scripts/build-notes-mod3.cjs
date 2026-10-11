const { ModulePdfBuilder } = require('./create-module-pdf-engine.cjs');

async function buildModule3() {
  const builder = new ModulePdfBuilder({
    moduleNumber: 3,
    moduleTitle: "Compass Surveying",
    marks: "10 Marks",
    topics: "Principles of Traversing, Meridians (True, Magnetic, Grid, Arbitrary), Prismatic Compass vs Surveyor's Compass, Whole Circle Bearing (WCB) & Quadrantal Bearing (QB), Fore Bearing & Back Bearing, Calculation of Included Angles, Magnetic Declination & Variations, Dip of the Magnetic Needle (Isogonic & Isoclinic lines), Local Attraction Detection & Elimination, Closing Error of Traverse (Bowditch's & Transit rules), Care and Maintenance of Magnetic Compasses.",
    outputFilename: "module-03-compass-survey.pdf"
  });

  builder.addCoverPage();

  // CHAPTER 1
  builder.addSectionHeader("CHAPTER 1: INTRODUCTION TO COMPASS SURVEYING & MERIDIANS");
  builder.addParagraph("Compass surveying is a branch of surveying in which the horizontal directions of survey lines are determined by means of a magnetic compass, and linear distances are measured using a chain or tape. It is primarily adopted for traversing large areas where chain triangulation is difficult or where numerous obstacles exist.");

  builder.addSubSectionHeader("1.1 Types of Meridians and Bearings");
  builder.addTable(
    ["Meridian Type", "Definition & Reference Line", "Bearing Terminology", "Key PSC Characteristic"],
    [
      ["True Meridian (Geographic)", "Line passing through true geographic North and South poles", "True Bearing / Azimuth", "Remains permanently constant at any given station; determined by astronomical observations"],
      ["Magnetic Meridian", "Direction indicated by a freely suspended, balanced magnetic needle", "Magnetic Bearing", "Changes continuously over time due to variations in Earth's magnetic field"],
      ["Grid Meridian", "Reference meridian adopted for an entire country or region (central meridian)", "Grid Bearing", "Used in large national map projections (Survey of India topo-sheets)"],
      ["Arbitrary Meridian", "Convenient well-defined permanent object (church spire, lighthouse, corner of building)", "Arbitrary Bearing", "Adopted for small local isolated engineering surveys"]
    ],
    [105, 145, 95, 155]
  );

  builder.addFocusBox("TRUE BEARING IS PERMANENT", "True Meridian passes through the geographic poles and remains permanently fixed over time. Therefore, True Bearing of a line never changes. In contrast, Magnetic Bearing changes over time due to secular, annual, diurnal, and irregular variations of magnetic declination.");

  builder.addSubSectionHeader("1.2 Convergence of Meridians & Grid Convergence");
  builder.addParagraph("Because all true meridians converge towards the North and South geographic poles, the true meridians at two different stations are NOT parallel (except at the equator). The angular difference between the true meridians at two points is called the Convergence of Meridians.");
  builder.addBulletPoints([
    { bold: "Convergence at Equator", text: "True meridians are parallel at the equator; hence Convergence = 0°." },
    { bold: "Convergence at Poles", text: "All meridians meet at the poles; convergence equals the difference in longitude (Δλ)." },
    { bold: "Formula for Convergence (C)", text: "C = Δλ · sin(Latitude φ), where Δλ is the difference in longitude between the two places." },
    { bold: "Grid Convergence", text: "The angular difference between the True Meridian and the Grid Meridian (Central Meridian) at any station. True Azimuth = Grid Bearing ± Grid Convergence." }
  ]);
  builder.addFormulaBox("CONVERGENCE OF MERIDIANS FORMULA", "Convergence of Meridians C = Δλ × sin φ\nwhere Δλ = difference in longitude, φ = latitude of station");

  // CHAPTER 2
  builder.addSectionHeader("CHAPTER 2: PRISMATIC COMPASS VS SURVEYOR'S COMPASS");
  builder.addParagraph("Two main types of magnetic compasses are used in engineering surveying: the Prismatic Compass and the Surveyor's Compass. Kerala PSC repeatedly tests the differences in graduations, needles, sights, and tripod requirements.");

  builder.addTable(
    ["Feature / Component", "Prismatic Compass", "Surveyor's Compass"],
    [
      ["Graduation System", "Whole Circle Bearing (WCB): 0° to 360° clockwise", "Quadrantal Bearing (QB): 0° to 90° in 4 quadrants"],
      ["Zero Position", "0° (or 360°) is at SOUTH, 90° at West, 180° at North, 270° at East", "0° is at NORTH and SOUTH; 90° is at East and West"],
      ["Graduation Inversion", "Graduations are engraved INVERTED (mirrored) because they are viewed through a reflecting prism", "Graduations are engraved ERECT (read directly with eye)"],
      ["Needle Construction", "Broad needle (floating dial); graduated ring is attached directly to the needle and rotates with it", "Edge-bar needle; needle moves independently above a fixed circular graduated ring"],
      ["Sighting & Reading", "Sighting the object and reading the bearing can be done SIMULTANEOUSLY through the prism", "Sighting and reading CANNOT be done simultaneously; observer must first sight and then look down"],
      ["Tripod Requirement", "Can be operated hand-held or supported on a lightweight tripod", "Tripod is MANDATORY; cannot be held in hand accurately"],
      ["Sight Vane Accessories", "Fitted with prism, dark sun glasses for solar sights, and hinged object vane with horsehair", "Simple vertical slit sight vane; no prism or sunglasses"],
      ["Least Count", "Usually 30 minutes (30')", "Usually 15 minutes (15')"]
    ],
    [115, 195, 190]
  );

  builder.addFocusBox("PRISMATIC COMPASS GRADUATION SECRETS", "• In a Prismatic Compass, 0° is located at the SOUTH end, 90° at West, 180° at North, and 270° at East.\n• The figures are inverted because they are reflected through a right-angled prism.\n• When sighting North, the North end of needle points North, bringing the South end (0°) directly under the prism, thus reading 0°!");

  builder.addTrapBox("SURVEYOR'S COMPASS E-W TRANSPOSITION", "In a Surveyor's Compass, the East (E) and West (W) cardinal points are INTERCHANGED (transposed) on the ring: East is to the left of North and West is to the right! This ensures that the needle reading directly gives the correct quadrant of the line of sight.");

  // CHAPTER 3
  builder.addSectionHeader("CHAPTER 3: SYSTEMS OF BEARINGS & FORE/BACK BEARINGS");
  builder.addParagraph("The direction of a survey line with respect to a meridian is designated as its bearing.");

  builder.addSubSectionHeader("3.1 Whole Circle Bearing (WCB) vs Quadrantal Bearing (QB)");
  builder.addBulletPoints([
    { bold: "Whole Circle Bearing (WCB)", text: "The horizontal angle measured clockwise from the North meridian (True North or Magnetic North) to the line. Varies from 0° to 360°. Quadrant designations (N, S, E, W) are not attached." },
    { bold: "Quadrantal Bearing (QB / Reduced Bearing RB)", text: "The horizontal angle measured from either the North or South meridian (whichever is closer) towards East or West. Varies strictly from 0° to 90°. Always prefixed by N or S and suffixed by E or W (e.g. N 45° 30' E, S 30° W)." }
  ]);

  builder.addTable(
    ["Quadrant", "WCB Range", "Rule for Reduced Bearing (QB)", "Quadrantal Sign"],
    [
      ["First Quadrant (NE)", "0° to 90°", "QB = WCB", "N (WCB) E"],
      ["Second Quadrant (SE)", "90° to 180°", "QB = 180° - WCB", "S (180° - WCB) E"],
      ["Third Quadrant (SW)", "180° to 270°", "QB = WCB - 180°", "S (WCB - 180°) W"],
      ["Fourth Quadrant (NW)", "270° to 360°", "QB = 360° - WCB", "N (360° - WCB) W"]
    ],
    [115, 100, 165, 120]
  );

  builder.addSubSectionHeader("3.2 Fore Bearing (FB) and Back Bearing (BB)");
  builder.addParagraph("The bearing of a line in the forward direction of survey progress is the Fore Bearing (FB). The bearing taken from the forward station looking back at the starting station is the Back Bearing (BB).");
  builder.addFormulaBox("FORE BEARING & BACK BEARING RELATIONSHIP", [
    "In Whole Circle Bearing (WCB):",
    "Back Bearing (BB) = Fore Bearing (FB) ± 180°",
    "Use (+ 180°) if FB < 180°",
    "Use (- 180°) if FB > 180°",
    "",
    "In Quadrantal Bearing (QB):",
    "Numerical angle remains IDENTICAL; only cardinal letters interchange!",
    "Replace N with S, S with N, E with W, and W with E",
    "Example: If FB = N 35° E, then BB = S 35° W"
  ]);

  // CHAPTER 4
  builder.addSectionHeader("CHAPTER 4: CALCULATION OF INCLUDED ANGLES IN A TRAVERSE");
  builder.addParagraph("The included angle at any station between two survey lines can be computed directly from their bearings, independent of local attraction!");

  builder.addSubSectionHeader("4.1 Fundamental Formula for Included Angle");
  builder.addParagraph("When two lines meet at a station P, the angle between line PA (previous line) and line PB (forward line) is calculated as:");
  builder.addFormulaBox("INCLUDED ANGLE FORMULAS", [
    "Clockwise Included Angle = Bearing of Forward Line - Bearing of Previous Line (Back Line)",
    "If the result is negative, add 360°: Angle = (Bearing of Forward - Bearing of Previous) + 360°",
    "",
    "Traverse Polygon Geometric Checks:",
    "• Sum of Interior Angles of closed polygon = (2n - 4) × 90° = (n - 2) × 180°",
    "• Sum of Exterior Angles of closed polygon = (2n + 4) × 90° = (n + 2) × 180°",
    "• For a closed traverse run in CLOCKWISE direction, included angles are EXTERIOR angles.",
    "• For a closed traverse run in COUNTER-CLOCKWISE direction, included angles are INTERIOR angles."
  ]);

  builder.addTrapBox("TRAVERSE DIRECTION & INCLUDED ANGLES", "• If you traverse CLOCKWISE around a parcel, the interior angles are NOT the direct difference: the direct clockwise angle measured is the EXTERIOR angle.\n• If you traverse COUNTER-CLOCKWISE, the included angles measured clockwise are INTERIOR angles!");

  // CHAPTER 5
  builder.addSectionHeader("CHAPTER 5: MAGNETIC DECLINATION & DIP OF THE NEEDLE");
  builder.addParagraph("The Earth behaves as a giant magnetic dipole. However, the magnetic axis does not coincide with the geographic rotational axis, giving rise to Magnetic Declination and Dip.");

  builder.addSubSectionHeader("5.1 Magnetic Declination");
  builder.addParagraph("Magnetic Declination is the horizontal angle between the True Meridian and the Magnetic Meridian at a given place. If the magnetic north points to the east of true north, declination is East (or Positive, +). If it points to the west of true north, declination is West (or Negative, -).");
  
  builder.addFormulaBox("MAGNETIC DECLINATION CONVERSION FORMULA", [
    "True Bearing (TB) = Magnetic Bearing (MB) ± Magnetic Declination (θ)",
    "• If Declination is EAST: TB = MB + Declination",
    "• If Declination is WEST: TB = MB - Declination",
    "Note: Always convert Quadrantal Bearings to Whole Circle Bearings (WCB) BEFORE applying declination!"
  ]);

  builder.addSubSectionHeader("5.2 Variations in Magnetic Declination");
  builder.addBulletPoints([
    { bold: "Secular Variation", text: "A periodic, long-term swinging of the magnetic needle resembling a pendulum. Completes a cycle over centuries (approx 250 to 300 years). Most important variation for surveying records." },
    { bold: "Annual Variation", text: "A periodic seasonal change with a cycle of one year. Magnitude is small (typically 1' to 2' per year)." },
    { bold: "Diurnal (Daily) Variation", text: "Daily fluctuation caused by solar radiation and atmospheric temperature changes. Needle swings east in the morning and west in the afternoon. Greater in day than at night, greater in summer than in winter, and greater near the poles than at the equator." },
    { bold: "Irregular Variation", text: "Unpredictable disturbances caused by magnetic storms, solar flares, volcanic eruptions, and earthquakes. Can deflect the needle by several degrees suddenly." }
  ]);

  builder.addSubSectionHeader("5.3 Isogonic, Agonic, Isoclinic & Aclinic Lines");
  builder.addTable(
    ["Line Designation", "Definition & Magnetic Characteristic", "Zero Value Counterpart"],
    [
      ["Isogonic Line", "An imaginary line on a map joining places of EQUAL magnetic declination", "Agonic Line: Line joining places having ZERO magnetic declination"],
      ["Isoclinic Line", "An imaginary line on a map joining places of EQUAL magnetic dip (inclination)", "Aclinic Line (Magnetic Equator): Line joining places having ZERO magnetic dip"]
    ],
    [115, 235, 150]
  );

  builder.addSubSectionHeader("5.4 Magnetic Dip (Inclination)");
  builder.addParagraph("Dip is the vertical angle that the magnetic needle makes with the horizontal plane when freely suspended at its center of gravity.");
  builder.addBulletPoints([
    { bold: "Dip at Magnetic Equator", text: "The needle is completely horizontal; Dip = 0°." },
    { bold: "Dip at Magnetic Poles", text: "The needle points straight downwards (vertical); Dip = 90°." },
    { bold: "Counterbalancing Dip", text: "In the Northern hemisphere, the North end of the needle dips downwards. To keep the needle horizontal, a small adjustable sliding brass rider / weight is placed on the SOUTH arm of the needle." }
  ]);

  builder.addFocusBox("DIP VS DECLINATION REVISION KEYS", "• Declination is a HORIZONTAL angle between true north and magnetic north.\n• Dip is a VERTICAL angle between needle and horizontal plane.\n• Dip at Equator = 0°; Dip at Poles = 90°.\n• Rider is placed on South arm of needle in Northern hemisphere.");

  // CHAPTER 6
  builder.addSectionHeader("CHAPTER 6: LOCAL ATTRACTION & METHODS OF CORRECTION");
  builder.addParagraph("Local attraction is the disturbing magnetic influence exerted on a compass needle by magnetic substances in the vicinity, such as iron ores, steel structures, rails, pipes, electric transmission lines, wristwatches, or steel belt buckles.");

  builder.addSubSectionHeader("6.1 Detection of Local Attraction");
  builder.addParagraph("At any survey station, the difference between the Fore Bearing (FB) and Back Bearing (BB) of a line should strictly equal 180°: |FB - BB| = 180°.");
  builder.addBulletPoints([
    { bold: "Free from Local Attraction", text: "If |FB - BB| = 180° exactly, BOTH end stations are presumed to be completely free from local attraction, and both bearings are correct." },
    { bold: "Affected by Local Attraction", text: "If |FB - BB| ≠ 180°, local attraction exists at one or both of the stations, or an error was made in sighting/reading." }
  ]);

  builder.addSubSectionHeader("6.2 Methods of Correcting Local Attraction");
  builder.addBulletPoints([
    { bold: "Method 1: Included Angles Method (Most Reliable)", text: "Calculate the included angle at every station from the observed bearings. Included angles are COMPLETELY INDEPENDENT of local attraction because local attraction deflects the needle equally for all sights taken from that station! Start from the unaffected line and recompute all correct bearings consecutively." },
    { bold: "Method 2: Successive Correction Method", text: "Identify a line whose FB and BB differ by exactly 180°. The stations at its ends are free from local attraction. Using the correct bearings from this station, compute the error at the next station and apply algebraic corrections step-by-step." }
  ]);

  builder.addSubSectionHeader("6.3 Step-by-Step Local Attraction Correction Table");
  builder.addParagraph("Consider a classic 4-station traverse ABCD with observed bearings. The process of identifying the unaffected line and applying corrections is summarized below:");
  builder.addTable(
    ["Line", "Observed FB", "Observed BB", "Difference |FB - BB|", "Station Error", "Corrected FB", "Corrected BB"],
    [
      ["AB", "191° 45'", "13° 00'", "178° 45' (≠ 180°)", "Station A has error", "192° 45'", "12° 45'"],
      ["BC", "39° 30'", "222° 30'", "183° 00' (≠ 180°)", "Station B has error", "41° 00'", "221° 00'"],
      ["CD", "22° 15'", "202° 15'", "180° 00' (EXACT!)", "STATIONS C & D FREE!", "22° 15'", "202° 15'"],
      ["DA", "242° 45'", "62° 45'", "180° 00' (EXACT!)", "Station D is free", "242° 45'", "62° 45'"]
    ],
    [45, 75, 75, 110, 100, 75, 75]
  );
  builder.addFocusBox("LOCAL ATTRACTION IDENTIFICATION RULE", "Line CD has |FB - BB| = 180° 00'. Hence, Stations C and D are completely free from local attraction. Bearings observed FROM station C (namely CB and CD) and FROM station D (namely DC and DA) are strictly correct!");

  // CHAPTER 7
  builder.addSectionHeader("CHAPTER 7: COMPASS TRAVERSING & CLOSING ERROR");
  builder.addParagraph("A traverse consists of a series of connected survey lines whose lengths are measured with chain/tape and directions are measured with a compass.");

  builder.addSubSectionHeader("7.1 Open Traverse vs Closed Traverse");
  builder.addBulletPoints([
    { bold: "Closed Traverse", text: "Starts and terminates at the same station (closed loop) or connects two stations whose positions are already known. Mandatory for property boundaries, town surveys, and lake perimeters. Offers complete mathematical and geometric checks." },
    { bold: "Open Traverse", text: "Starts at a known station and ends at an unknown station without closing (unclosed line). Used for long narrow linear surveys: roads, railways, canals, pipelines. Does not provide direct geometric checks on bearings." }
  ]);

  builder.addSubSectionHeader("7.2 Closing Error and Balancing Rules");
  builder.addParagraph("When a closed traverse is plotted by bearings and lengths, the final plotted point almost never coincides with the starting point due to inevitable field errors. The distance between the starting station and the final plotted position of that same station is called the Closing Error (e).");

  builder.addTable(
    ["Balancing Method", "Operating Principle", "Applicability / Assumption"],
    [
      ["Bowditch's Rule (Compass Rule)", "Correction to latitude or departure of a line is directly proportional to its LENGTH: Correction = Total Error × (Length of line / Perimeter)", "Assumes linear and angular measurements have equal precision; standard for compass traversing!"],
      ["Transit Rule", "Correction is proportional to the LATITUDE or DEPARTURE of that line: Correction = Total Error × (|Latitude| / Σ|Latitudes|)", "Used when angular measurements are significantly more precise than linear measurements (theodolite traverse)"],
      ["Bowditch's Graphical Method", "Adjusts the closing error purely on paper using similar triangles along a baseline equal to traverse perimeter", "Standard drafting room method for compass traverse plotting"]
    ],
    [125, 200, 175]
  );

  builder.addFocusBox("BOWDITCH'S RULE IN COMPASS TRAVERSING", "Bowditch's rule is the standard method for balancing a compass traverse. It assumes that accidental errors in linear measurements vary as √l and errors in angular measurements vary as 1/√l.");

  // CHAPTER 8
  builder.addSectionHeader("CHAPTER 8: INSTRUMENTAL ERRORS, TESTS & CARE OF COMPASS");
  builder.addParagraph("Instrumental errors in compass surveying arise from manufacturing defects or rough field handling. A surveyor must know how to inspect, test, and adjust the compass.");
  
  builder.addSubSectionHeader("8.1 Permanent Instrumental Defects & Adjustments");
  builder.addBulletPoints([
    { bold: "1. Verticality of Sight Vanes", text: "When the compass is leveled, the line joining the sight slit and the vertical hair must be perpendicular to the horizontal plane. Tested by sighting a plumb-line string." },
    { bold: "2. Straightness of Magnetic Needle", text: "The ends of the needle and its magnetic axis must lie in a straight line. If bent, the difference between readings with opposite ends will not be 180°." },
    { bold: "3. Centering of the Pivot", text: "The pivot point must coincide exactly with the geometric center of the graduated ring. If eccentric, the error varies as the direction changes; eliminated by reading both ends of the needle and taking the mean." },
    { bold: "4. Horizontal Balance of Needle", text: "The needle must remain strictly horizontal in the field. Tested by rotating the instrument; if one end dips, the small brass rider must be shifted." },
    { bold: "5. Sensitiveness of the Needle", text: "A sluggish needle gives incorrect bearings. Tested by deflecting the needle with a piece of iron and noting if it returns repeatedly to the exact same graduation." }
  ]);

  builder.addSubSectionHeader("8.2 Care and Field Precautions");
  builder.addBulletPoints([
    { bold: "Pivot Friction", text: "A blunt pivot causes the needle to stick or move sluggishly. The pivot point must be needle-sharp and made of hardened steel." },
    { bold: "Jeweled Agate Cap", text: "The center of the needle rests on an agate or ruby jeweled bearing to minimize frictional resistance." },
    { bold: "Lifting Lever & Pin", text: "A lifting pin automatically lifts the needle off the pivot when the sight vane is folded down. The compass should NEVER be transported without folding the vane, as continuous rattling blunts the pivot!" },
    { bold: "Sluggish Needle", text: "If the needle loses its magnetism, it moves sluggishly. It can be remagnetized by drawing it across the poles of a permanent bar magnet." },
    { bold: "Glass Cover Static Electricity", text: "Rubbing the glass cover with a dry cloth generates static electric charge that attracts the needle. Discharged immediately by breathing gently on the glass or touching with a moistened finger." }
  ]);

  // CHAPTER 9
  builder.addSectionHeader("CHAPTER 9: PSC SOLVED NUMERICAL MODELS");

  builder.addWorkedExample(
    "Whole Circle Bearing to Quadrantal Bearing",
    "Convert the following Whole Circle Bearings to Quadrantal Bearings: (a) 48° 30', (b) 132° 15', (c) 220° 45', (d) 310° 20'.",
    [
      "(a) 48° 30' (1st Quadrant): QB = N 48° 30' E",
      "(b) 132° 15' (2nd Quadrant): QB = S (180° - 132° 15') E = S 47° 45' E",
      "(c) 220° 45' (3rd Quadrant): QB = S (220° 45' - 180°) W = S 40° 45' W",
      "(d) 310° 20' (4th Quadrant): QB = N (360° - 310° 20') W = N 49° 40' W"
    ],
    "(a) N 48°30'E, (b) S 47°45'E, (c) S 40°45'W, (d) N 49°40'W"
  );

  builder.addWorkedExample(
    "True Bearing from Magnetic Bearing and Declination",
    "The magnetic bearing of a line is S 38° 30' E. Find its true bearing if the magnetic declination is 4° 15' West.",
    [
      "Step 1: Convert QB to WCB: S 38° 30' E = 180° - 38° 30' = 141° 30'",
      "Step 2: Magnetic Declination is 4° 15' West (Subtractive):",
      "True Bearing = Magnetic Bearing - Declination (West)",
      "True Bearing = 141° 30' - 4° 15' = 137° 15'",
      "Step 3: Convert back to QB: 180° - 137° 15' = S 42° 45' E"
    ],
    "137° 15' (WCB) or S 42° 45' E (QB)"
  );

  builder.addWorkedExample(
    "Back Bearing Calculation in WCB",
    "The Fore Bearing of line AB is 245° 30'. Find its Back Bearing (BA).",
    [
      "Rule: If FB > 180°, Back Bearing = FB - 180°",
      "Back Bearing = 245° 30' - 180° 00' = 65° 30'"
    ],
    "65° 30'"
  );

  builder.addWorkedExample(
    "Included Angle Calculation",
    "The bearing of line AB is 40° 30' and bearing of line BC is 130° 45'. What is the interior angle ABC?",
    [
      "Back bearing of line AB = 40° 30' + 180° = 220° 30'",
      "Fore bearing of line BC = 130° 45'",
      "Included angle ABC = Back Bearing of AB - Fore Bearing of BC = 220° 30' - 130° 45' = 89° 45'"
    ],
    "89° 45'"
  );

  builder.addWorkedExample(
    "Bowditch's Rule Traverse Correction",
    "In a closed compass traverse ABCD of total perimeter 600 m, the total closing error in latitude is found to be + 1.20 m. If the length of side BC is 150 m, find the correction to the latitude of side BC according to Bowditch's Rule.",
    [
      "Formula: Correction to latitude = - Total Error in Latitude × (Length of side / Perimeter)",
      "Length of side BC (l) = 150 m",
      "Perimeter (Σl) = 600 m",
      "Total Error in Latitude = + 1.20 m",
      "Correction to Latitude of BC = - (1.20) × (150 / 600) = - 1.20 × 0.25 = - 0.30 m"
    ],
    "- 0.30 m (Subtractive)"
  );

  builder.addWorkedExample(
    "Sum of Angles Verification in Polygon Traverse",
    "A five-sided closed polygon traverse ABCDE has measured interior angles of: A = 102°, B = 115°, C = 88°, D = 125°, E = 110°. Determine whether there is any angular error in the survey.",
    [
      "Formula for theoretical sum of interior angles: Σ = (2n - 4) × 90° = (n - 2) × 180°",
      "Here n = 5 (pentagon) => Theoretical Sum = (5 - 2) × 180° = 3 × 180° = 540° 00'",
      "Sum of measured angles = 102° + 115° + 88° + 125° + 110° = 540° 00'",
      "Measured Sum = Theoretical Sum = 540° 00'. Angular error = 0° 00' (Traverse is geometrically perfect)."
    ],
    "0° 00' Error (Traverse satisfies the geometric condition exactly)"
  );

  // CHAPTER 10
  builder.addSectionHeader("CHAPTER 10: KERALA PSC 50 RAPID-FIRE ONE-LINERS & EXAM VAULT");

  builder.addOneLiners("Compasses & Components", [
    { q: "Graduation system in Prismatic Compass", a: "Whole Circle Bearing (WCB) system (0° to 360°)." },
    { q: "Graduation system in Surveyor's Compass", a: "Quadrantal Bearing (QB) system (0° to 90°)." },
    { q: "0° (Zero) is marked at which direction in Prismatic compass", a: "SOUTH." },
    { q: "0° is marked at which direction in Surveyor's compass", a: "NORTH and SOUTH." },
    { q: "Cardinal points transposed in Surveyor's compass", a: "EAST and WEST." },
    { q: "Least count of Prismatic Compass", a: "30 minutes (30')." },
    { q: "Least count of Surveyor's Compass", a: "15 minutes (15')." },
    { q: "Compass in which sighting and reading are simultaneous", a: "Prismatic Compass." },
    { q: "Type of needle in Prismatic Compass", a: "Broad needle attached to floating dial." },
    { q: "Bearing jewel used in magnetic compass pivot", a: "Agate jewel cap." }
  ]);

  builder.addOneLiners("Bearings, Declination & Dip", [
    { q: "Fore Bearing and Back Bearing differ strictly by", a: "180 degrees (FB - BB = ± 180°)." },
    { q: "If Fore Bearing is N 40° W, Back Bearing is", a: "S 40° E (identical angle, opposite letters)." },
    { q: "Imaginary line joining points of equal declination", a: "Isogonic line." },
    { q: "Line joining points of zero declination", a: "Agonic line." },
    { q: "Imaginary line joining points of equal magnetic dip", a: "Isoclinic line." },
    { q: "Line joining points of zero magnetic dip", a: "Aclinic line (Magnetic Equator)." },
    { q: "Value of magnetic dip at the magnetic equator", a: "0 degrees (needle horizontal)." },
    { q: "Value of magnetic dip at the magnetic poles", a: "90 degrees (needle vertical)." },
    { q: "Rider in northern hemisphere is placed on which arm", a: "South arm of the needle." },
    { q: "Long-term periodic swinging of needle over centuries", a: "Secular variation." }
  ]);

  builder.addOneLiners("Traverse, Local Attraction & Closing Error", [
    { q: "Sum of interior angles of an n-sided polygon", a: "(2n - 4) × 90° or (n - 2) × 180°." },
    { q: "Sum of exterior angles of an n-sided polygon", a: "(2n + 4) × 90° or (n + 2) × 180°." },
    { q: "At a station affected by local attraction, what remains unaffected", a: "Included angles between lines." },
    { q: "Condition for a line to be free from local attraction", a: "|FB - BB| = 180° exactly." },
    { q: "Rule used for balancing compass traverse", a: "Bowditch's Rule (Compass Rule)." },
    { q: "In Bowditch's rule, correction to a line is proportional to", a: "Length of the survey line." },
    { q: "In Transit rule, correction to a line is proportional to", a: "Latitude or Departure of that line." },
    { q: "If glass cover attracts needle due to friction, remedy is", a: "Moisten finger or breathe on the glass." },
    { q: "Closing error e of a traverse with ΣL and ΣD is given by", a: "e = √( (ΣL)² + (ΣD)² )." },
    { q: "Direction θ of closing error is given by", a: "tan θ = |ΣD / ΣL|." },
    { q: "Compass used for hand-held rapid reconnaissance", a: "Prismatic Compass." },
    { q: "Diurnal variation of declination is maximum during", a: "Day time and during Summer season." },
    { q: "Diurnal variation is greater near the poles than at", a: "The Equator." },
    { q: "Sun glasses fitted on prismatic compass are used for", a: "Taking bearings of the Sun or luminous objects." },
    { q: "The mirror attached to sight vane of prismatic compass is for", a: "Sighting objects situated at high elevation or depression." }
  ]);

  builder.addSubSectionHeader("Compass Survey Revision Checklist Matrix");
  builder.addTable(
    ["Concept / Topic", "Governing Formula / Rule", "Standard Exam Value / Application"],
    [
      ["Back Bearing (WCB)", "BB = FB ± 180° (+ if <180°, - if >180°)", "Always exactly 180° difference from Fore Bearing"],
      ["Included Angle", "Angle = Forward Bearing - Back Bearing", "Add 360° if result is negative"],
      ["Magnetic Declination", "True Bearing = Magnetic Bearing ± Declination", "+ for East declination, - for West declination"],
      ["Dip of Needle", "0° at Equator, 90° at Poles", "Balanced by brass rider on South end in Northern hemisphere"],
      ["Traverse Angular Sum", "Sum of Interior Angles = (2n - 4) × 90°", "Sum of Exterior Angles = (2n + 4) × 90°"],
      ["Bowditch Correction", "Correction = - (Total Error) × (Line Length / Perimeter)", "Standard for compass traversing (proportional to length)"]
    ],
    [125, 200, 175]
  );

  return await builder.finish();
}

async function runBuild() {
  console.log('Generating Module 03 PDF...');
  const res = await buildModule3();
  console.log(`Module 03 Complete! Pages: ${res.totalPages}`);
}

runBuild().catch(console.error);
