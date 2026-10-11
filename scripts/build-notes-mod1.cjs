const { ModulePdfBuilder } = require('./create-module-pdf-engine.cjs');

async function buildModule1() {
  const builder = new ModulePdfBuilder({
    moduleNumber: 1,
    moduleTitle: "Basic Engineering Drawing",
    marks: "10 Marks",
    topics: "Drawing Instruments, Drawing sheet sizes (IS 10711), Types of lines (IS 10714), Lettering standards (IS 9609), Dimensioning systems, Scales (Plain, Diagonal, Vernier, Shrunk scale), Geometrical constructions, Conic sections (Ellipse, Parabola, Hyperbola, Cycloids, Involute), Orthographic Projections (1st & 3rd angle), Projections of points, lines, planes and solids, Isometric & Perspective projections.",
    outputFilename: "module-01-basic-engineering-drawing.pdf"
  });

  builder.addCoverPage();

  // CHAPTER 1
  builder.addSectionHeader("CHAPTER 1: DRAWING INSTRUMENTS & DRAFTING EQUIPMENT");
  builder.addParagraph("Engineering drawing is the universal graphic language of engineers, architects, surveyors, and technicians. In Kerala PSC technical examinations (Surveyor Gr. II, KWA Tracer, LSGD/PWD Draftsman), standard instrument classifications, materials, dimensions, and specifications are consistently tested.");
  
  builder.addSubSectionHeader("1.1 Drawing Boards (IS 1444:1989)");
  builder.addParagraph("Drawing boards are fabricated from strips of well-seasoned softwoods such as pine, fir, or deodar, joined tongue-and-groove with battens underneath to prevent warping under varying humidity. A hard ebony edge is inserted on the left side to provide a true working guide for the T-square.");
  
  builder.addTable(
    ["Designation", "Length × Width × Thickness (mm)", "Recommended Sheet Size", "PSC Exam Key Points"],
    [
      ["D0", "1500 × 1000 × 25", "A0", "Used for large engineering master plans"],
      ["D1", "1000 × 700 × 25", "A1", "Standard office drafting table size"],
      ["D2", "700 × 500 × 15", "A2", "Standard classroom / ITI surveyor drafting board"],
      ["D3", "500 × 350 × 15", "A3 / A4", "Portable student drafting board"]
    ],
    [75, 175, 120, 145]
  );

  builder.addFocusBox("DRAWING BOARD CLASSROOM STANDARD", "D2 size (700 × 500 × 15 mm) is the standard drawing board used in educational institutions and ITI surveyor drafting classes for A2 drawing sheets. Ebony edge is strictly located on the LEFT side.");

  builder.addSubSectionHeader("1.2 T-Squares & Set Squares (IS 1360:1989)");
  builder.addBulletPoints([
    { bold: "T-Square", text: "Consists of two parts: Stock (head) and Blade, rigidly joined at exactly 90°. The working edge of the blade is beveled on the top. T-squares are designated T0 (1500 mm), T1 (1000 mm), T2 (700 mm), and T3 (500 mm). Used for drawing horizontal parallel lines and guiding set squares." },
    { bold: "Set Squares (Triangles)", text: "Made of transparent celluloid or acrylic in two standard angles: 45°-45°-90° and 30°-60°-90°. Used together with a T-square to draw vertical lines and angles in multiples of 15° (15°, 30°, 45°, 60°, 75°, 90°, 105°, 120°, 135°, 150°, 165°)." },
    { bold: "Clinograph (Adjustable Set Square)", text: "Consists of two parts linked together by a clamp screw, used for drawing parallel lines at any inclined angle to each other." },
    { bold: "French Curves", text: "Used for drawing smooth curved lines that cannot be drawn with an ordinary compass (e.g. ellipses, parabolas, hyperbolas, contour lines)." },
    { bold: "Mini Drafter", text: "Combines the functions of a T-square, set square, protractor, and scale into a single articulated parallelogram linkage instrument clamped to the drawing board." },
    { bold: "Protractors (IS 1563)", text: "Circular (360°) or semi-circular (180°) flat instruments graduated in degrees and half-degrees for measuring and laying off angles." }
  ]);

  builder.addSubSectionHeader("1.3 Drawing Pencils & Leads");
  builder.addParagraph("Pencils are graded by the proportion of graphite to kaolin clay in the lead. 9H is the hardest and lightest; 7B is the softest and darkest; HB is medium soft; F is firm/fine.");
  builder.addTable(
    ["Grade Group", "Pencil Grades", "Hardness / Blackness", "Standard Engineering Applications"],
    [
      ["Hard", "9H, 8H, 7H, 6H, 5H, 4H", "Extremely hard, light grey line", "Precision geodetic plotting, extreme accuracy, faint guides"],
      ["Medium Hard", "3H, 2H, H", "Medium hard, sharp clear lines", "2H: Construction lines, dimension lines, center lines, hatching; H: Outlines"],
      ["Medium / Soft", "F, HB, B", "Medium soft, dark black lines", "HB: Border lines, lettering, titles, dimension figures; B: Freehand sketching"],
      ["Soft / Dark", "2B, 3B, 4B, 5B, 6B, 7B", "Very soft, very dark black", "Artistic sketching, shading (NOT used in technical engineering drawing)"]
    ],
    [75, 125, 135, 180]
  );

  builder.addTrapBox("PENCIL GRADES IN PSC EXAMS", "PSC Question: 'Which pencil is used for construction lines and dimension lines?' Answer is 2H. For lettering and borders, the answer is HB. For visible outlines, the answer is H.");

  // CHAPTER 2
  builder.addSectionHeader("CHAPTER 2: DRAWING SHEETS (IS 10711) & TITLE BLOCK");
  builder.addParagraph("Standard drawing paper sizes follow the metric ISO 'A' series (IS 10711:2001). The fundamental basis of standard sheet sizing rests on three geometric principles:");
  builder.addBulletPoints([
    { bold: "Surface Area of A0", text: "The surface area of an A0 trimmed sheet is exactly 1 square metre (1 m²)." },
    { bold: "Aspect Ratio", text: "The ratio of length to width for all trimmed sheets is constant: x : y = √2 : 1 ≈ 1.414 : 1 (i.e. x / y = √2, where xy = 1 m² for A0)." },
    { bold: "Successive Halving", text: "Each subsequent smaller size (A1, A2, A3...) is derived by halving the larger sheet along its longer dimension. The area ratio of two consecutive sheets is 1 : 2." }
  ]);

  builder.addTable(
    ["Sheet Designation", "Trimmed Size (W × L in mm)", "Untrimmed Size (mm)", "Aspect Ratio", "Relative Area"],
    [
      ["A0", "841 × 1189", "880 × 1230", "√2 : 1", "1.00 m² (1 m²)"],
      ["A1", "594 × 841", "625 × 880", "√2 : 1", "0.50 m² (1/2 m²)"],
      ["A2", "420 × 594", "450 × 625", "√2 : 1", "0.25 m² (1/4 m²)"],
      ["A3", "297 × 420", "330 × 450", "√2 : 1", "0.125 m² (1/8 m²)"],
      ["A4", "210 × 297", "240 × 330", "√2 : 1", "0.0625 m² (1/16 m²)"],
      ["A5", "148 × 210", "165 × 240", "√2 : 1", "0.03125 m² (1/32 m²)"]
    ],
    [90, 140, 120, 80, 85]
  );

  builder.addFocusBox("TITLE BLOCK SPECIFICATIONS (IS 9609 / SP 46)", "• Dimensions of Title Block: Strictly 185 mm (length) × 65 mm (height) for all standard sheet sizes (A0 through A3).\n• Position: Located at the bottom right-hand corner of the drawing sheet.\n• Left border margin: 20 mm (or 30 mm for binding/filing); all other borders (top, bottom, right) are 10 mm (for A0 & A1) or 5 mm (for A2, A3, A4).\n• Folding of sheets: Drawing sheets are folded with the title block remaining visible on top (front face).");

  // CHAPTER 3
  builder.addSectionHeader("CHAPTER 3: TYPES OF LINES & LETTERING STANDARDS (IS 10714 & IS 9609)");
  builder.addParagraph("Lines in engineering drawing have distinct meanings defined by thickness and pattern as per IS 10714 (ISO 128). Line thicknesses are grouped in standard ratios of 1 : √2 (0.18, 0.25, 0.35, 0.5, 0.7, 1.0, 1.4, 2.0 mm).");

  builder.addTable(
    ["Line Type", "Description & Appearance", "Thickness (approx)", "Standard Engineering Applications"],
    [
      ["Type A", "Continuous thick", "0.5 mm", "Visible outlines, visible edges, crests of screw threads"],
      ["Type B", "Continuous thin", "0.25 mm", "Dimension lines, extension lines, leader lines, hatching lines, projection lines"],
      ["Type C", "Continuous thin freehand", "0.25 mm", "Limits of partial or interrupted views and sections (short break lines)"],
      ["Type D", "Continuous thin with zigzags", "0.25 mm", "Long break lines in architectural/civil elevations"],
      ["Type E", "Dashed thick", "0.5 mm", "Hidden outlines and hidden edges (permissible alternative)"],
      ["Type F", "Dashed thin", "0.25 mm", "Hidden outlines and hidden edges (dash length 3 mm, gap 1 mm)"],
      ["Type G", "Chain thin (long dash - dot)", "0.25 mm", "Center lines, lines of symmetry, pitch circles, trajectory paths"],
      ["Type H", "Chain thin, thick at ends & bends", "0.25 / 0.5 mm", "Cutting plane lines for sectional views"],
      ["Type J", "Chain thick", "0.5 mm", "Indication of lines or surfaces to which special surface treatment applies"],
      ["Type K", "Chain thin double-dashed", "0.25 mm", "Outlines of adjacent parts, extreme positions of movable components, centroidal lines"]
    ],
    [60, 160, 95, 200]
  );

  builder.addSubSectionHeader("3.1 Lettering Standards (IS 9609)");
  builder.addParagraph("Lettering must be legible, uniform, and suitable for microfilming and electronic scanning. It can be upright (vertical) or inclined at 75° to the horizontal. Single stroke lettering is standard.");
  builder.addBulletPoints([
    { bold: "Main Titles & Drawing Numbers", text: "Height of letters: 6 mm, 8 mm, 10 mm, or 12 mm." },
    { bold: "Sub-titles & Headings", text: "Height of letters: 3 mm, 4 mm, 5 mm, or 6 mm." },
    { bold: "Notes, Dimensions & Tolerances", text: "Height of letters: 2.5 mm, 3 mm, 3.5 mm, or 5 mm." },
    { bold: "Standard Height Series", text: "Standard heights h = 1.8, 2.5, 3.5, 5, 7, 10, 14, 20 mm (ratio of √2)." },
    { bold: "Lettering Proportions", text: "Height of lowercase letters without stems (c) = 0.7 h; Spacing between characters (a) = 0.2 h; Spacing between baselines (b) = 1.4 h; Spacing between words (e) = 0.6 h." }
  ]);

  // CHAPTER 4
  builder.addSectionHeader("CHAPTER 4: DIMENSIONING PRINCIPLES & CONVENTIONS");
  builder.addParagraph("Dimensioning defines size, location, and geometric characteristics of features. Dimensions must be given once and only once on a drawing and placed on the view that shows the feature most clearly.");
  
  builder.addSubSectionHeader("4.1 Systems of Dimensioning");
  builder.addBulletPoints([
    { bold: "Aligned System", text: "Dimensions are placed perpendicular to dimension lines, reading from the bottom or from the right-hand edge of the drawing sheet. Dimension figures are placed above the dimension line." },
    { bold: "Unidirectional System", text: "All dimensions are placed horizontally and can be read solely from the bottom of the drawing sheet. Dimension lines are broken in the middle to insert the numeral." },
    { bold: "Chain Dimensioning", text: "Dimensions are arranged in a continuous straight line. Tolerance accumulates across the chain; should only be used when accumulation of tolerances does not affect functional requirements." },
    { bold: "Parallel Dimensioning", text: "All dimensions originate from a common datum line or reference edge. Prevents accumulation of tolerances." },
    { bold: "Combined Dimensioning", text: "Combination of chain and parallel dimensioning on the same drawing." }
  ]);

  builder.addTable(
    ["Dimension Element", "Specification / Convention", "Rules to Follow"],
    [
      ["Dimension Line", "Continuous thin line (Type B)", "Never crossed by any other line; terminated by arrowheads"],
      ["Extension Line", "Continuous thin line extending beyond dimension line", "Extends 2 to 3 mm beyond arrowhead; 8 mm gap from outline"],
      ["Arrowheads", "Length-to-width ratio strictly 3 : 1", "Closed and filled heads preferred in mechanical/civil drawing"],
      ["Leader Line", "Thin line inclined at 30°, 45°, or 60°", "Terminates with dot (inside feature) or arrow (on boundary)"],
      ["Radius Symbol", "Prefixed with capital letter 'R'", "Dimension line passes through center; single arrowhead at arc"],
      ["Diameter Symbol", "Prefixed with symbol 'Ø'", "Placed before the number when circular feature is dimensioned"],
      ["Spherical Features", "Prefixed with 'SR' or 'SØ'", "Indicates spherical radius or spherical diameter"]
    ],
    [105, 175, 235]
  );

  builder.addFocusBox("ARROWHEAD SPECIFICATIONS IN PSC", "• The length-to-depth (width) ratio of an arrowhead in engineering drawing is strictly 3 : 1.\n• Arrowhead must be closed and filled.\n• In confined spaces, arrowheads may be replaced by oblique strokes at 45° or small filled dots.");

  // CHAPTER 5
  builder.addSectionHeader("CHAPTER 5: SCALES & VERNIVERS (IS 10713)");
  builder.addParagraph("Scale is the ratio of linear dimension on drawing to corresponding true linear dimension on ground: Scale = Drawing Dimension / Actual Dimension.");
  
  builder.addFormulaBox("REPRESENTATIVE FRACTION & SCALES", [
    "Representative Fraction (R.F.) = Length on Drawing / Actual Length on Ground",
    "Shrunk Scale = Original Scale × Shrinkage Factor",
    "Shrinkage Factor (S.F.) = Shrunk Length / Original Length",
    "Corrected Length = Measured Length / Shrinkage Factor",
    "Corrected Area = Measured Area / (Shrinkage Factor)²",
    "Length of Scale (L.O.S.) = R.F. × Maximum Length to be Measured"
  ]);

  builder.addSubSectionHeader("5.1 Classification of Scales");
  builder.addBulletPoints([
    { bold: "Plain Scale", text: "Represents two consecutive units or a unit and its fractional subdivision (e.g. metres and decimetres, kilometres and hectometres). Consists of a line divided into suitable equal parts." },
    { bold: "Diagonal Scale", text: "Represents three consecutive units (e.g. metres, decimetres, centimetres) or two decimal places, based on the principle of similar triangles." },
    { bold: "Comparative (Corresponding) Scale", text: "Two scales having the same R.F. but graduated to read in different units (e.g. one in miles and the other in kilometres)." },
    { bold: "Vernier Scale", text: "A small auxiliary scale sliding along a primary main scale to read fractional divisions." },
    { bold: "Scale of Chords", text: "Used to measure and set out angles without using a protractor, based on the chord lengths of circle arcs." }
  ]);

  builder.addTable(
    ["Vernier Type", "Mathematical Formula", "Reading Direction", "Division Size vs Main Scale (s)"],
    [
      ["Direct Vernier", "n · v = (n - 1) · s  =>  v = s(n - 1)/n", "Same direction as main scale", "v < s (smaller than main division)"],
      ["Retrograde Vernier", "n · v = (n + 1) · s  =>  v = s(n + 1)/n", "Opposite direction to main scale", "v > s (larger than main division)"],
      ["Extended Vernier", "n · v = (2n - 1) · s  =>  v = s(2n - 1)/n", "Same direction", "v = 2s - s/n (almost double main division)"],
      ["Double Vernier", "Graduated in both directions from center 0", "Bidirectional", "Used on circles reading clockwise & counter-clockwise"]
    ],
    [90, 155, 120, 150]
  );

  builder.addFocusBox("LEAST COUNT FORMULA", "Least Count (L.C.) = s / n  (Value of smallest main scale division / Number of vernier divisions)\n• For Direct Vernier: L.C. = s - v = s - s(n - 1)/n = s / n\n• For Retrograde Vernier: L.C. = v - s = s(n + 1)/n - s = s / n\n• Notice that the Least Count formula s / n is identical for both Direct and Retrograde Verniers!");

  // CHAPTER 6
  builder.addSectionHeader("CHAPTER 6: CONIC SECTIONS & ENGINEERING CURVES");
  builder.addParagraph("Conic sections are curves formed by cutting a right circular double cone with an intersecting plane. Mathematically, it is the locus of a point whose ratio of distance from a fixed point (Focus) to a fixed line (Directrix) is constant. This constant ratio is the Eccentricity (e = PF / PM).");

  builder.addTable(
    ["Conic Section", "Eccentricity (e)", "Section Plane Angle (θ) vs Cone Semi-Apex Angle (α)", "Standard Engineering Applications"],
    [
      ["Circle", "e = 0", "Plane perpendicular to cone axis (θ = 90°)", "Pipes, shafts, gears, manhole covers, pulleys"],
      ["Ellipse", "e < 1", "Plane cuts all generators, θ > α", "Arches, bridges, planetary orbits, cams, elliptical gears"],
      ["Parabola", "e = 1", "Plane parallel to generator (θ = α)", "Suspension bridge cables, searchlight reflectors, projectile paths"],
      ["Hyperbola", "e > 1", "Plane parallel to cone axis or θ < α", "Cooling towers, water channels (Boyle's law pV = C), sound ranging"]
    ],
    [75, 75, 175, 190]
  );

  builder.addSubSectionHeader("6.1 Methods of Constructing Ellipse");
  builder.addBulletPoints([
    { bold: "Concentric Circles Method", text: "Two concentric circles drawn with major axis (2a) and minor axis (2b) as diameters. Divided into 12 equal sectors; horizontal and vertical lines drawn from intersections meet on the ellipse." },
    { bold: "Oblong (Rectangle) Method", text: "A rectangle drawn with sides equal to major and minor axes. Divided into equal parts; intersecting rays generate ellipse." },
    { bold: "Arcs of Circles (Focus) Method", text: "Based on definition that sum of focal distances is constant and equal to major axis: PF₁ + PF₂ = 2a." },
    { bold: "Trammel Method", text: "A paper strip (trammel) marked with semi-major (a) and semi-minor (b) axes slides with ends on axes; pencil point traces ellipse." }
  ]);

  builder.addSubSectionHeader("6.2 Cycloidal Curves, Involutes & Spirals");
  builder.addBulletPoints([
    { bold: "Cycloid", text: "Curve traced by a point on the circumference of a circle rolling along a straight line without slipping. Length of base line = 2πr. Area under one cycloid arch = 3πr² = 3 times the generating circle area!" },
    { bold: "Epicycloid", text: "Curve generated by a point on the circumference of a circle rolling along the OUTSIDE of another directing circle. When generating circle = directing circle, it forms a Cardioid." },
    { bold: "Hypocycloid", text: "Curve generated by a point on a circle rolling along the INSIDE of another directing circle. When generating circle diameter equals radius of directing circle (d = R), hypocycloid is a straight diameter line!" },
    { bold: "Involute", text: "Locus of a point on an unwinding taut thread from a cylinder, regular polygon, or circle. Extensively used for gear tooth profiles because the common normal at contact point always passes through the pitch point." },
    { bold: "Archimedean Spiral", text: "Curve traced by a point moving uniformly along a straight line while the line rotates uniformly about a fixed point (Pole)." },
    { bold: "Helix", text: "Curve generated by a point moving around the surface of a cylinder at a uniform axial rate while rotating uniformly. Used for screw threads and coil springs." }
  ]);

  builder.addFocusBox("CYCLOID & HYPOCYCLOID PSC GOLDEN KEYS", "• Area under one complete arch of a cycloid = 3 × Area of generating circle = 3πr².\n• When diameter of rolling circle = radius of directing circle, the hypocycloid becomes a straight line (a diameter of the directing circle).\n• Involute curve is standard for gear tooth profiles.");

  // CHAPTER 7
  builder.addSectionHeader("CHAPTER 7: PRINCIPLES OF ORTHOGRAPHIC PROJECTIONS");
  builder.addParagraph("Orthographic projection is the method of representing 3D objects on 2D planes using mutually perpendicular parallel projection rays (projectors). The standard reference planes are Vertical Plane (VP), Horizontal Plane (HP), and Profile Plane (PP). The intersection of VP and HP is the reference ground line xy.");

  builder.addTable(
    ["Feature", "First Angle Projection (Standard in India / BIS)", "Third Angle Projection (USA / Canada)"],
    [
      ["Object Location", "Object is in 1st Quadrant (between observer & plane)", "Object is in 3rd Quadrant (plane between observer & object)"],
      ["Plan (Top View)", "Drawn BELOW the Elevation (Front View)", "Drawn ABOVE the Elevation (Front View)"],
      ["Elevation (Front View)", "Drawn ABOVE the reference xy ground line", "Drawn BELOW the reference xy ground line"],
      ["Left Side View", "Drawn to the RIGHT of the front view", "Drawn to the LEFT of the front view"],
      ["Right Side View", "Drawn to the LEFT of the front view", "Drawn to the RIGHT of the front view"],
      ["Nature of Planes", "Opaque reference planes", "Transparent reference planes"],
      ["Standard Symbol", "Frustum of cone: small circle on left, truncated cone on right", "Frustum of cone: truncated cone on left, small circle on right"]
    ],
    [95, 210, 210]
  );

  builder.addSubSectionHeader("7.1 Projections of Points Across Four Quadrants");
  builder.addTable(
    ["Position of Point", "Elevation (Front View a')", "Plan (Top View a)"],
    [
      ["1st Quadrant (Above HP, In front of VP)", "Above xy reference line", "Below xy reference line"],
      ["2nd Quadrant (Above HP, Behind VP)", "Above xy reference line", "Above xy reference line (both views overlap!)"],
      ["3rd Quadrant (Below HP, Behind VP)", "Below xy reference line", "Above xy reference line"],
      ["4th Quadrant (Below HP, In front of VP)", "Below xy reference line", "Below xy reference line (both views overlap!)"]
    ],
    [155, 180, 180]
  );

  // CHAPTER 8
  builder.addSectionHeader("CHAPTER 8: PROJECTIONS OF STRAIGHT LINES, PLANES & SOLIDS");
  builder.addParagraph("A straight line is the shortest distance between two points. In technical drawing, finding true lengths, true inclinations (θ to HP, φ to VP), and traces (HT, VT) is a fundamental examination topic.");

  builder.addSubSectionHeader("8.1 Projections of Lines & Traces");
  builder.addBulletPoints([
    { bold: "True Length (TL)", text: "When a line is parallel to a plane of projection, its projection on that plane shows its True Length and true inclination to the other plane." },
    { bold: "Apparent Lengths", text: "When a line is inclined to both planes, both front view (elevation length a'b') and top view (plan length ab) are shorter than true length (apparent lengths)." },
    { bold: "Horizontal Trace (HT)", text: "The point of intersection of the line (or its extension) with the Horizontal Plane. Its elevation lies on the xy line." },
    { bold: "Vertical Trace (VT)", text: "The point of intersection of the line (or its extension) with the Vertical Plane. Its plan lies on the xy line." }
  ]);

  builder.addSubSectionHeader("8.2 Classification of Solids & Sectional Views");
  builder.addBulletPoints([
    { bold: "Polyhedra", text: "Solids bounded entirely by plane surfaces (faces). Regular polyhedra have identical regular polygons as faces: Tetrahedron (4 equilateral triangles), Cube / Hexahedron (6 squares), Octahedron (8 equilateral triangles), Dodecahedron (12 regular pentagons), Icosahedron (20 equilateral triangles)." },
    { bold: "Prisms & Pyramids", text: "Prisms have two identical parallel end faces connected by rectangular lateral faces. Pyramids have a polygon base and triangular faces meeting at an apex." },
    { bold: "Solids of Revolution", text: "Formed by revolving a plane figure about an axis: Cylinder (revolving rectangle), Cone (revolving right triangle), Sphere (revolving semi-circle)." },
    { bold: "Frustum vs Truncated Solid", text: "Frustum: Formed when a pyramid or cone is cut by a section plane PARALLEL to the base and the top portion is removed. Truncated solid: Formed when the section plane is INCLINED to the base." },
    { bold: "True Shape of Section", text: "The view obtained on a plane parallel to the cutting section plane. Shows the exact dimensions and geometric form of the cut surface." }
  ]);

  // CHAPTER 9
  builder.addSectionHeader("CHAPTER 9: ISOMETRIC & PERSPECTIVE PROJECTIONS");
  builder.addParagraph("Pictorial projections represent a 3D object in a single view so that its shape and features can be easily understood at a glance.");

  builder.addSubSectionHeader("9.1 Isometric Projection vs Isometric View");
  builder.addBulletPoints([
    { bold: "Isometric Axes", text: "Three axes meeting at a point, inclined at 120° to each other (or two lines inclined at 30° to horizontal baseline and one vertical line)." },
    { bold: "Isometric Lines", text: "Lines parallel to the isometric axes. Only measurements along isometric lines can be taken directly!" },
    { bold: "Non-Isometric Lines", text: "Lines not parallel to isometric axes. Must be plotted using box method or coordinate method." },
    { bold: "Isometric Scale Ratio", text: "Isometric Length / True Length = cos 45° / cos 30° = (1 / √2) / (√3 / 2) = √(2/3) ≈ 0.81647 ≈ 82%." },
    { bold: "Isometric View (Drawing)", text: "Drawn using full TRUE SCALE (100% dimensions). 22.5% larger than isometric projection." },
    { bold: "Isometric Projection", text: "Drawn using reduced ISOMETRIC SCALE (81.6% of true length). Shows true perspective foreshortening." }
  ]);

  builder.addFormulaBox("ISOMETRIC SCALE RELATIONSHIP", [
    "Isometric Length = √(2 / 3) × True Length ≈ 0.816 × True Length",
    "True Length = √(3 / 2) × Isometric Length ≈ 1.225 × Isometric Length",
    "Isometric Projection is 18.4% smaller than Isometric View",
    "Isometric View is 22.5% larger than Isometric Projection"
  ]);

  builder.addSubSectionHeader("9.2 Perspective Projection Principles");
  builder.addBulletPoints([
    { bold: "Picture Plane (PP)", text: "The imaginary transparent vertical plane placed between observer and object onto which the perspective is projected." },
    { bold: "Station Point (SP)", text: "The fixed position of the eye of the observer." },
    { bold: "Ground Plane (GP)", text: "Horizontal plane on which the observer stands and object is placed." },
    { bold: "Horizon Plane", text: "Horizontal plane passing through the station point at eye level." },
    { bold: "Vanishing Point (VP)", text: "Point on the picture plane where parallel lines extending to infinity appear to converge." },
    { bold: "Types of Perspective", text: "One-point / Parallel perspective (one vanishing point); Two-point / Angular perspective (two vanishing points); Three-point / Oblique perspective (three vanishing points)." }
  ]);

  // CHAPTER 10: SOLVED NUMERICALS
  builder.addSectionHeader("CHAPTER 10: PSC SOLVED NUMERICAL MODELS");
  
  builder.addWorkedExample(
    "Representative Fraction (R.F.) Calculation",
    "A road 4.5 km long is represented by a line 9 cm long on a map. What is the Representative Fraction (R.F.) of the scale?",
    [
      "R.F. = Length on Drawing / Actual Length on Ground",
      "Actual Length = 4.5 km = 4.5 × 1,000 × 100 cm = 450,000 cm",
      "Drawing Length = 9 cm",
      "R.F. = 9 / 450,000 = 1 / 50,000"
    ],
    "1 : 50,000 (Option B)"
  );

  builder.addWorkedExample(
    "Shrunk Scale and Corrected Area",
    "A plan drawn to a scale of 1 cm = 10 m has shrunk such that a line originally 10 cm now measures 9.5 cm. If the measured area from the shrunk plan is 81 cm², calculate the true ground area in square metres.",
    [
      "Shrinkage Factor (S.F.) = Shrunk Length / Original Length = 9.5 / 10 = 0.95",
      "Corrected Plan Area = Measured Area / (S.F.)² = 81 / (0.95)² = 81 / 0.9025 ≈ 89.75 cm²",
      "Original Scale: 1 cm = 10 m  =>  1 cm² = 100 m²",
      "True Ground Area = 89.75 × 100 m² = 8,975 m²"
    ],
    "8,975 m²"
  );

  builder.addWorkedExample(
    "Direct Vernier Least Count",
    "A main scale is graduated in millimeters (s = 1 mm). 20 divisions on a sliding vernier scale equal 19 divisions of the main scale. Determine the Least Count of the instrument.",
    [
      "Value of smallest main scale division (s) = 1 mm",
      "Number of vernier divisions (n) = 20",
      "Relation: n · v = (n - 1) · s (Direct Vernier)",
      "Least Count = s / n = 1 mm / 20 = 0.05 mm"
    ],
    "0.05 mm"
  );

  builder.addWorkedExample(
    "Isometric Length Calculation",
    "The true length of an edge of a cube is 60 mm. What will be its length in an Isometric Projection?",
    [
      "Isometric Length = √(2/3) × True Length ≈ 0.8165 × True Length",
      "Isometric Length = 0.8165 × 60 mm = 48.99 mm ≈ 49 mm"
    ],
    "48.99 mm (approx 49 mm)"
  );

  // CHAPTER 11: 50 RAPID-FIRE ONE LINERS
  builder.addSectionHeader("CHAPTER 11: KERALA PSC 50 RAPID-FIRE ONE-LINERS & EXAM VAULT");
  
  builder.addOneLiners("Drawing Instruments & Sheets", [
    { q: "Area of A0 drawing sheet", a: "Exactly 1.0 square metre (1 m²)." },
    { q: "Aspect ratio of ISO drawing sheet", a: "Length : Width = √2 : 1 (approx 1.414 : 1)." },
    { q: "Standard Title block size", a: "185 mm × 65 mm for all standard sheet sizes." },
    { q: "Position of Title block", a: "Bottom right-hand corner of the drawing sheet." },
    { q: "Drawing board for A2 sheets", a: "D2 size (700 × 500 × 15 mm)." },
    { q: "Working edge of drawing board", a: "Ebony edge fitted on the left-hand side." },
    { q: "Working edge of T-square", a: "Upper beveled edge of the blade." },
    { q: "Angle between stock and blade of T-square", a: "Exactly 90° (Right angle)." },
    { q: "Angles drawn by combining 45° and 30°-60° set squares", a: "Multiples of 15° (15°, 75°, 105°, 165°, etc.)." },
    { q: "Instrument combining T-square, set-square, protractor, and scale", a: "Mini Drafter." }
  ]);

  builder.addOneLiners("Lines, Lettering & Dimensioning", [
    { q: "Pencil used for construction and dimension lines", a: "2H pencil." },
    { q: "Pencil used for lettering and title blocks", a: "HB pencil." },
    { q: "Ratio of arrow head length to width", a: "Strictly 3 : 1." },
    { q: "Line used for hidden outlines", a: "Type F: Dashed thin line (dash 3 mm, gap 1 mm)." },
    { q: "Line used for cutting planes", a: "Type H: Chain thin, thick at ends and changes of direction." },
    { q: "Line used for long breaks", a: "Type D: Continuous thin line with zigzags." },
    { q: "Inclination of standard italic lettering", a: "75° to the horizontal." },
    { q: "In Aligned dimensioning system, text is read from", a: "Bottom and right-hand edge of the sheet." },
    { q: "In Unidirectional system, text is read from", a: "Bottom edge only (all text horizontal)." },
    { q: "Distance of first dimension line from outline", a: "At least 8 to 10 mm." }
  ]);

  builder.addOneLiners("Scales & Curves", [
    { q: "Scale representing three consecutive units", a: "Diagonal Scale (principle of similar triangles)." },
    { q: "Scale representing two consecutive units", a: "Plain Scale." },
    { q: "Formula for Least Count of vernier", a: "L.C. = s / n (Smallest main division / Number of vernier divisions)." },
    { q: "Vernier in which divisions are larger than main scale", a: "Retrograde Vernier (v = s(n+1)/n)." },
    { q: "Eccentricity of Ellipse", a: "e < 1." },
    { q: "Eccentricity of Parabola", a: "e = 1." },
    { q: "Eccentricity of Hyperbola", a: "e > 1." },
    { q: "Area under one arch of a cycloid", a: "3 times the area of generating circle (3πr²)." },
    { q: "Hypocycloid becomes a straight line when", a: "Diameter of rolling circle = Radius of directing circle." },
    { q: "Curve used for gear tooth profiles", a: "Involute of circle." }
  ]);

  builder.addOneLiners("Projections & Solids", [
    { q: "Standard projection system in India (BIS)", a: "First Angle Projection." },
    { q: "In First Angle Projection, Top View is drawn", a: "BELOW the Front View." },
    { q: "In First Angle Projection, Left Side View is drawn", a: "To the RIGHT of the Front View." },
    { q: "If a point is above HP and behind VP, it lies in", a: "Second Quadrant (both views lie above xy line)." },
    { q: "If a line is parallel to VP and inclined to HP, true length is seen in", a: "Front View (Elevation)." },
    { q: "Point where line penetrates Horizontal Plane", a: "Horizontal Trace (HT)." },
    { q: "Solid formed by cutting cone parallel to base", a: "Frustum of cone." },
    { q: "Angle between isometric axes", a: "120° to each other (30° to horizontal)." },
    { q: "Ratio of isometric length to true length", a: "√(2/3) ≈ 0.816 (approx 82%)." },
    { q: "Perspective projection rays converge at", a: "Station Point (Observer's eye)." }
  ]);

  return await builder.finish();
}

async function runBuild() {
  console.log('Generating Module 01 PDF...');
  const res = await buildModule1();
  console.log(`Module 01 Complete! Pages: ${res.totalPages}`);
}

runBuild().catch(console.error);
