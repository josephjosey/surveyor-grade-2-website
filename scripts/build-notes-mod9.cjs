const { ModulePdfBuilder } = require('./create-module-pdf-engine.cjs');

async function buildModule9() {
  const builder = new ModulePdfBuilder({
    moduleNumber: 9,
    moduleTitle: "Workshop Calculation and Science",
    marks: "10 Marks",
    topics: "Units & Measurements (SI Units, Metric & Imperial conversions: Acres, Hectares, Cents, Square feet), Arithmetic (Fractions, Square roots, Ratio & Proportion, Percentages), Mensuration of 2D Figures (Triangles, Trapezium, Circles, Sectors, Ellipse), Mensuration of 3D Solids (Cubes, Cylinders, Cones, Spheres, Frustums), Earthwork Volume Computation (Prismoidal Formula & End-Area rule), Mass, Weight, Density & Specific Gravity, Speed, Velocity & Newton's Laws, Work, Power & Energy (Metric & British Horsepower), Simple Machines (MA, VR, Efficiency, Levers), Heat & Temperature Conversions, Basic Trigonometry & Heights/Distances.",
    outputFilename: "module-09-workshop-calculation-and-science.pdf"
  });

  builder.addCoverPage();

  // CHAPTER 1
  builder.addSectionHeader("CHAPTER 1: UNITS, MEASUREMENTS & CONVERSIONS");
  builder.addParagraph("Technical calculations in surveying and drafting require absolute fluency in the International System of Units (SI), metric units, and traditional land measurement conversions used in Kerala revenue records.");

  builder.addSubSectionHeader("1.1 Fundamental SI Base Units & Derived Units");
  builder.addTable(
    ["Physical Quantity", "SI Unit Name", "Symbol", "Definition / Derivation Formula"],
    [
      ["Length", "Metre", "m", "Base SI unit of linear distance"],
      ["Mass", "Kilogram", "kg", "Base SI unit of quantity of matter"],
      ["Time", "Second", "s", "Base SI unit of duration"],
      ["Force", "Newton", "N", "1 N = 1 kg·m/s² (Force giving 1 kg mass an acceleration of 1 m/s²)"],
      ["Pressure / Stress", "Pascal", "Pa", "1 Pa = 1 N/m²; 1 bar = 10⁵ Pa; 1 N/mm² = 1 MPa = 10⁶ Pa"],
      ["Work / Energy", "Joule", "J", "1 J = 1 N·m (Work done when 1 N force moves through 1 m distance)"],
      ["Power", "Watt", "W", "1 W = 1 J/s (Rate of doing work at 1 Joule per second)"]
    ],
    [105, 95, 65, 235]
  );

  builder.addSubSectionHeader("1.2 Land Measurement Conversion Factors (Kerala Cadastral Standards)");
  builder.addTable(
    ["Unit of Area", "Equivalent Metric / Imperial Value", "Kerala Land Records Relation"],
    [
      ["1 Cent", "40.4686 m² ≈ 40.47 m² = 435.6 sq ft", "Standard land parcel subdivision unit in Kerala"],
      ["1 Acre", "100 Cents = 4,046.86 m² = 43,560 sq ft = 0.4047 hectare", "Standard agricultural land unit; 10 sq Gunter's chains"],
      ["1 Hectare (ha)", "10,000 m² = 2.471 Acres = 247.1 Cents", "Standard metric forestry and large estate unit"],
      ["1 Are", "100 m² = 2.471 Cents", "Metric subdivision unit (100 Ares = 1 Hectare)"],
      ["1 Square Metre (m²)", "10.764 sq ft = 0.0247 Cents", "Standard engineering floor area unit"],
      ["1 Square Foot (sq ft)", "0.0929 m² = 144 sq inches", "Building plinth area standard"]
    ],
    [125, 205, 170]
  );

  builder.addFocusBox("KERALA REVENUE LAND CONVERSION TRIPLETS", "• 1 Acre = 100 Cents = 43,560 sq ft = 4,046.86 m².\n• 1 Cent = 435.6 sq ft = 40.47 m².\n• 1 Hectare = 10,000 m² = 2.471 Acres = 247.1 Cents.\n• 1 Are = 100 m² = 2.471 Cents.");

  // CHAPTER 2
  builder.addSectionHeader("CHAPTER 2: APPLIED ARITHMETIC, RATIOS & PERCENTAGES");
  builder.addParagraph("Foundational arithmetic concepts regularly tested in technical examinations.");

  builder.addSubSectionHeader("2.1 Ratio & Proportion");
  builder.addBulletPoints([
    { bold: "Direct Proportion", text: "When two quantities increase or decrease together in the same ratio: x₁ / y₁ = x₂ / y₂ (e.g. chain length and true distance, quantity of bricks and wall volume)." },
    { bold: "Inverse Proportion", text: "When an increase in one quantity causes a proportional decrease in the other: x₁ · y₁ = x₂ · y₂ (e.g. number of workers and days to complete earthwork excavation, scale denominator and map feature size)." },
    { bold: "Rule of Three", text: "Given three terms of a proportion a : b = c : x, finding the fourth term: x = (b · c) / a." }
  ]);

  builder.addSubSectionHeader("2.2 Percentages & Profit/Loss");
  builder.addFormulaBox("PERCENTAGE FORMULAS", [
    "Percentage Value = (Part Value / Total Base Value) × 100%",
    "Percentage Error = (Measured Value - True Value) / True Value × 100%",
    "Quantity after p% Increase = Original × (1 + p / 100)",
    "Quantity after p% Decrease = Original × (1 - p / 100)"
  ]);

  // CHAPTER 3
  builder.addSectionHeader("CHAPTER 3: MENSURATION: 2D PLANE FIGURES");
  builder.addParagraph("Mensuration deals with calculating perimeters and areas of geometric surfaces.");

  builder.addSubSectionHeader("3.1 Triangles");
  builder.addTable(
    ["Triangle Type", "Area Formula", "Perimeter Formula & Notes"],
    [
      ["Right-Angled Triangle", "Area = 1/2 × Base × Height = 1/2 · b · h", "Perimeter P = b + h + √(b² + h²)"],
      ["Scalene Triangle (Heron's Formula)", "Area = √[ s · (s - a) · (s - b) · (s - c) ]", "Semi-perimeter s = (a + b + c) / 2"],
      ["Equilateral Triangle (Side a)", "Area = (√3 / 4) · a² ≈ 0.433 · a²", "Height h = (√3 / 2) · a; Perimeter P = 3a"],
      ["Isosceles Triangle (Equal sides a, Base b)", "Area = (b / 4) · √(4a² - b²)", "Height h = √(a² - b²/4); Perimeter P = 2a + b"]
    ],
    [135, 205, 160]
  );

  builder.addSubSectionHeader("3.2 Quadrilaterals & Polygons");
  builder.addTable(
    ["Plane Figure", "Area Formula", "Perimeter Formula & Geometric Notes"],
    [
      ["Rectangle (Sides a, b)", "Area = a · b", "P = 2(a + b); Diagonal d = √(a² + b²)"],
      ["Square (Side a)", "Area = a² = 1/2 · d²", "P = 4a; Diagonal d = a√2"],
      ["Parallelogram (Base b, Height h)", "Area = Base × Height = b · h", "P = 2(a + b); Adjacent sides a, b"],
      ["Rhombus (Diagonals d₁, d₂)", "Area = 1/2 · d₁ · d₂", "P = 4a; Diagonals bisect at right angles (90°)"],
      ["Trapezium (Parallel sides a, b; Height h)", "Area = 1/2 · (a + b) · h", "P = a + b + c + d; Height is perpendicular distance between parallel sides"],
      ["Regular Hexagon (Side a)", "Area = (3√3 / 2) · a² ≈ 2.598 · a²", "Composed of 6 equilateral triangles; P = 6a"]
    ],
    [145, 175, 180]
  );

  builder.addSubSectionHeader("3.3 Circles, Sectors & Ellipse");
  builder.addTable(
    ["Curved Figure", "Area Formula", "Perimeter / Arc Length Formula"],
    [
      ["Circle (Radius r, Diameter d)", "Area = πr² = (π / 4) · d²", "Circumference C = 2πr = πd"],
      ["Semi-Circle", "Area = 1/2 · πr²", "Perimeter P = πr + 2r = r(π + 2) ≈ (36 / 7) · r"],
      ["Circular Ring (Outer R, Inner r)", "Area = π(R² - r²) = π(R + r)(R - r)", "Width of ring w = R - r"],
      ["Sector of Circle (Angle θ°)", "Area = (θ / 360°) · πr² = 1/2 · l · r", "Arc length l = (θ / 360°) · 2πr; Perimeter P = l + 2r"],
      ["Ellipse (Semi-axes a, b)", "Area = π · a · b", "Perimeter P ≈ π [ 3(a + b) - √((3a + b)(a + 3b)) ]"]
    ],
    [135, 175, 190]
  );

  builder.addFocusBox("PERIMETER OF SEMI-CIRCLE PSC TRAP", "PSC Question: 'What is the perimeter of a semi-circle of radius r?'\nPerimeter = Curved arc + Diameter = πr + 2r = r(π + 2) = r(22/7 + 2) = (36 / 7) · r.\nNever write 1/2 × 2πr = πr (that is only the curved arc, omitting the closing base diameter!).");

  // CHAPTER 4
  builder.addSectionHeader("CHAPTER 4: MENSURATION: 3D SOLID GEOMETRY");
  builder.addParagraph("Calculating volumes, curved surface areas, and total surface areas of engineering solids.");

  builder.addTable(
    ["Solid", "Volume (V)", "Curved / Lateral Surface Area", "Total Surface Area (TSA)"],
    [
      ["Cube (Side a)", "V = a³", "Lateral Area = 4a²", "TSA = 6a²; Solid Diagonal = a√3"],
      ["Cuboid (l, b, h)", "V = l · b · h", "Lateral Area = 2(l + b) · h", "TSA = 2(lb + bh + hl); Diagonal = √(l² + b² + h²)"],
      ["Cylinder (Radius r, Height h)", "V = πr²h", "Curved Area = 2πrh", "TSA = 2πrh + 2πr² = 2πr(r + h)"],
      ["Hollow Cylinder (R, r, h)", "V = π(R² - r²) · h", "CSA = 2πh(R + r)", "TSA = 2πh(R + r) + 2π(R² - r²)"],
      ["Cone (Radius r, Height h)", "V = 1/3 · πr²h", "Curved Area = πrl (Slant height l = √(r² + h²))", "TSA = πrl + πr² = πr(l + r)"],
      ["Sphere (Radius r)", "V = 4/3 · πr³", "Surface Area = 4πr²", "Surface Area = 4πr²"],
      ["Hemisphere (Radius r)", "V = 2/3 · πr³", "Curved Area = 2πr²", "TSA = 2πr² + πr² = 3πr²"],
      ["Frustum of Cone (R, r, h)", "V = 1/3 · πh · (R² + r² + Rr)", "CSA = πl(R + r)  (Slant l = √(h² + (R-r)²))", "TSA = CSA + πR² + πr²"]
    ],
    [95, 125, 140, 140]
  );

  // CHAPTER 5
  builder.addSectionHeader("CHAPTER 5: EARTHWORK & VOLUME COMPUTATION RULES");
  builder.addParagraph("Calculating excavation and embankment volumes for civil engineering roads, canals, railways, and reservoirs.");

  builder.addSubSectionHeader("5.1 Prismoidal Formula vs Average End Area Rule");
  builder.addTable(
    ["Method", "Governing Mathematical Formula", "Assumed Boundary / Nature", "Required Sections"],
    [
      ["Average End Area (Trapezoidal) Rule", "Volume V = d · [ (A₁ + An) / 2 + A₂ + A₃ + ... + An-1 ]\nwhere d = common distance between cross-sections", "Assumes longitudinal slope between sections is straight planar surface", "Any number of cross-sections; tends to OVERESTIMATE volume slightly"],
      ["Prismoidal Formula (Simpson's Rule for Volume)", "Volume V = (d / 3) · [ (A₁ + An) + 4 · (Σ Even Areas) + 2 · (Σ Odd Areas) ]", "Assumes surface between sections is parabolic or ruled prismoidal surface; mathematically exact for prismoids", "Strictly requires an ODD number of cross-sections (even number of intervals)"]
    ],
    [135, 205, 160]
  );

  builder.addSubSectionHeader("5.2 Prismoidal Correction (Cp)");
  builder.addParagraph("The difference between the volume calculated by the End Area rule (V_trap) and the Prismoidal formula (V_pris) is called the Prismoidal Correction (Cp). Since the End Area rule almost always overestimates volume, Cp is ALWAYS SUBTRACTIVE from the End Area volume!");
  builder.addFormulaBox("PRISMOIDAL CORRECTION FORMULA", [
    "V_pris = V_trap - Cp",
    "For a prismoid of length L with side slope s:1 and centerline depths d₁, d₂:",
    "Cp = (L / 6) × s × (d₁ - d₂)²",
    "Notice: Prismoidal correction is ALWAYS SUBTRACTIVE (-), because (d₁ - d₂)² is always positive!"
  ]);

  // CHAPTER 6
  builder.addSectionHeader("CHAPTER 6: APPLIED MECHANICS: MASS, FORCE & MOTION");
  builder.addParagraph("Fundamental physical principles governing materials, loads, and vehicles in survey academy science.");

  builder.addSubSectionHeader("6.1 Mass, Density & Specific Gravity");
  builder.addBulletPoints([
    { bold: "Mass (m)", text: "The quantity of matter contained in a body. Constant everywhere in the universe (SI unit: kg)." },
    { bold: "Weight (W)", text: "The gravitational force exerted by the Earth on a body: W = m · g (SI unit: Newton N). Varies with local acceleration due to gravity (g ≈ 9.81 m/s²)." },
    { bold: "Density (ρ)", text: "Mass per unit volume of a substance: ρ = Mass / Volume (kg/m³). Density of pure water at 4°C = 1,000 kg/m³ = 1.0 g/cm³." },
    { bold: "Specific Gravity (Relative Density)", text: "The dimensionless ratio of the density of a substance to the density of pure water at 4°C: Sp. Gr. = ρ_substance / ρ_water. Pure water = 1.0; Cement = 3.15; Steel = 7.85; Mercury = 13.6." }
  ]);

  builder.addSubSectionHeader("6.2 Speed, Velocity & Equations of Uniform Motion");
  builder.addTable(
    ["Equation of Motion", "Variables Involved", "Application Condition"],
    [
      ["v = u + a · t", "u = initial velocity, v = final velocity, a = acceleration, t = time", "Uniform acceleration in a straight line"],
      ["s = u · t + 1/2 · a · t²", "s = displacement distance traversed", "Uniform acceleration from initial speed"],
      ["v² = u² + 2 · a · s", "Independent of elapsed time t", "Calculating vehicle stopping distance"],
      ["v_avg = (u + v) / 2", "Average velocity during interval", "Linear acceleration"]
    ],
    [135, 205, 160]
  );

  builder.addSubSectionHeader("6.3 Friction");
  builder.addBulletPoints([
    { bold: "Frictional Force (F)", text: "The tangential resisting force opposing the relative motion between two contacting surfaces: F = µ · N, where µ = coefficient of friction, N = normal reaction force." },
    { bold: "Angle of Friction (φ)", text: "The angle between the resultant reaction and the normal to the contact plane when limiting sliding motion is impending: tan φ = µ." },
    { bold: "Angle of Repose (θ)", text: "The maximum angle of an inclined plane at which a granular body (earth, sand) rests in equilibrium without sliding down: Angle of Repose θ = Angle of Friction φ." }
  ]);

  // CHAPTER 7
  builder.addSectionHeader("CHAPTER 7: WORK, POWER, ENERGY & SIMPLE MACHINES");
  builder.addParagraph("The mechanical transformations of force and displacement.");

  builder.addSubSectionHeader("7.1 Work, Power & Energy Definitions");
  builder.addFormulaBox("WORK, POWER & ENERGY EQUATIONS", [
    "Work Done W = Force × Displacement = F · s · cos θ  [Joules J]",
    "Work Done against Gravity = m · g · h  [Joules]",
    "Power P = Work Done / Time = (F · s) / t = F · v  [Watts W]",
    "",
    "Horsepower (HP) Conversions:",
    "• 1 Metric Horsepower (PS) = 75 kg·m/s = 735.5 Watts",
    "• 1 British Horsepower (HP) = 550 ft·lb/s = 746.0 Watts",
    "",
    "Mechanical Energy:",
    "• Kinetic Energy KE = 1/2 · m · v²  [Joules]",
    "• Potential Energy PE = m · g · h  [Joules]"
  ]);

  builder.addFocusBox("METRIC VS BRITISH HORSEPOWER IN PSC", "• 1 Metric HP = 735.5 Watts (75 kg·m/s).\n• 1 British HP = 746 Watts (550 ft·lb/s).\nPSC questions regularly ask for these exact numeric constants!");

  builder.addSubSectionHeader("7.2 Simple Machines: MA, VR & Efficiency");
  builder.addTable(
    ["Parameter", "Rigorous Engineering Definition", "Governing Formula"],
    [
      ["Mechanical Advantage (MA)", "Ratio of resistance load lifted (W) to effort force applied (P)", "MA = Load / Effort = W / P (dimensionless)"],
      ["Velocity Ratio (VR)", "Ratio of distance moved by effort (y) to distance moved by load (x)", "VR = Distance of Effort / Distance of Load = y / x (purely geometric; constant for machine)"],
      ["Efficiency (η)", "Ratio of useful work output to total work input", "Efficiency η = (MA / VR) × 100%"],
      ["Ideal (Frictionless) Machine", "Machine having 100% efficiency (no friction losses)", "For ideal machine: Efficiency η = 100% => MA = VR"]
    ],
    [135, 205, 160]
  );

  builder.addSubSectionHeader("7.3 Levers: The Three Classes");
  builder.addBulletPoints([
    { bold: "First Class Lever", text: "Fulcrum (F) is in the MIDDLE between Effort (E) and Load (L): E - F - L. Examples: Crowbar, scissors, seesaw, pair of pliers. MA can be > 1, = 1, or < 1." },
    { bold: "Second Class Lever", text: "Load (L) is in the MIDDLE between Fulcrum (F) and Effort (E): F - L - E. Examples: Wheelbarrow, nutcracker, paper cutter. MA is ALWAYS GREATER THAN 1 (MA > 1)!" },
    { bold: "Third Class Lever", text: "Effort (E) is in the MIDDLE between Fulcrum (F) and Load (L): F - E - L. Examples: Pair of tongs, human forearm, tweezers, shovel. MA is ALWAYS LESS THAN 1 (MA < 1)!" }
  ]);

  // CHAPTER 8
  builder.addSectionHeader("CHAPTER 8: HEAT, TEMPERATURE & BASIC TRIGONOMETRY");
  builder.addParagraph("Thermodynamics scales and trigonometric geometry.");

  builder.addSubSectionHeader("8.1 Temperature Scales Inter-Conversion");
  builder.addFormulaBox("TEMPERATURE CONVERSION FORMULAS", [
    "Fundamental Relationship: C / 5 = (F - 32) / 9 = (K - 273.15) / 5",
    "• Celsius to Fahrenheit: F = (9 / 5 × C) + 32 = (1.8 × C) + 32",
    "• Fahrenheit to Celsius: C = 5 / 9 × (F - 32)",
    "• Celsius to Kelvin: K = C + 273.15",
    "• Temperature where Celsius and Fahrenheit scales read identical: - 40° (i.e. - 40°C = - 40°F)!"
  ]);

  builder.addSubSectionHeader("8.2 Basic Trigonometry & Identities");
  builder.addTable(
    ["Angle (θ)", "sin θ", "cos θ", "tan θ", "cot θ", "sec θ", "cosec θ"],
    [
      ["0°", "0", "1", "0", "Undefined", "1", "Undefined"],
      ["30°", "1/2 (0.5)", "√3 / 2 (0.866)", "1 / √3 (0.577)", "√3 (1.732)", "2 / √3 (1.155)", "2"],
      ["45°", "1 / √2 (0.707)", "1 / √2 (0.707)", "1", "1", "√2 (1.414)", "√2 (1.414)"],
      ["60°", "√3 / 2 (0.866)", "1/2 (0.5)", "√3 (1.732)", "1 / √3 (0.577)", "2", "2 / √3 (1.155)"],
      ["90°", "1", "0", "Undefined", "0", "Undefined", "1"]
    ],
    [70, 70, 70, 70, 75, 75, 70]
  );

  builder.addSubSectionHeader("8.3 Heights & Distances in Survey Trigonometry");
  builder.addParagraph("Determining elevations and horizontal clearances using measured angles of elevation or depression is a daily surveyor application.");
  builder.addBulletPoints([
    { bold: "Accessible Base Case", text: "When distance D to base of vertical tower is accessible and measured: Height h = D · tan θ. If instrument axis height is i, total elevation H = i + D · tan θ." },
    { bold: "Inaccessible Base (Two Instrument Stations)", text: "When base is inaccessible (e.g. across a river): Two stations A and B are established in line with tower at distance b apart. Observing angles of elevation α at A and β at B (where α < β): Height h = (b · sin α · sin β) / sin(β - α) = b / (cot α - cot β)." }
  ]);
  builder.addFormulaBox("HEIGHTS & DISTANCES FORMULA", [
    "Height of Inaccessible Object h = b / (cot α - cot β)",
    "Horizontal Distance to Object D = b · cot β / (cot α - cot β)",
    "where b = horizontal distance between observation stations A and B, α, β = angles of elevation"
  ]);

  // CHAPTER 9
  builder.addSectionHeader("CHAPTER 9: PSC SOLVED NUMERICAL MODELS");

  builder.addWorkedExample(
    "Land Area Conversion: Square Feet to Cents and Acres",
    "A rectangular residential plot in Kerala measures 66 feet by 132 feet. Calculate its area in: (a) Square feet, (b) Cents, (c) Acres.",
    [
      "Area in sq ft = 66 ft × 132 ft = 8,712 sq ft",
      "Rule: 1 Cent = 435.6 sq ft",
      "(b) Area in Cents = 8,712 / 435.6 = 20.0 Cents",
      "Rule: 1 Acre = 100 Cents = 43,560 sq ft",
      "(c) Area in Acres = 20.0 / 100 = 0.20 Acre"
    ],
    "Area = 8,712 sq ft = 20.0 Cents = 0.20 Acre"
  );

  builder.addWorkedExample(
    "Earthwork Volume by Prismoidal Formula",
    "Three consecutive cross-sectional areas of a railway cutting spaced at 30 m intervals are: A₁ = 40 m², A₂ = 65 m², A₃ = 80 m². Calculate the volume of earthwork using the Prismoidal Formula.",
    [
      "Common interval d = 30 m",
      "End areas: A₁ = 40 m², A₃ = 80 m² => (A₁ + A₃) = 120 m²",
      "Middle area (even): A₂ = 65 m²",
      "Formula: V = (d / 3) × [ (A₁ + A₃) + 4(A₂) ]",
      "V = (30 / 3) × [ 120 + 4(65) ] = 10 × [ 120 + 260 ] = 10 × 380 = 3,800 m³"
    ],
    "3,800 m³"
  );

  builder.addWorkedExample(
    "Temperature Scale Coincidence",
    "At what temperature do the Celsius and Fahrenheit thermometers indicate the exact same numerical value?",
    [
      "Set C = F = x in the formula: C / 5 = (F - 32) / 9",
      "x / 5 = (x - 32) / 9",
      "9x = 5(x - 32) = 5x - 160",
      "9x - 5x = - 160  =>  4x = - 160  =>  x = - 40"
    ],
    "- 40° (i.e. - 40°C = - 40°F)"
  );

  builder.addWorkedExample(
    "Simple Machine Mechanical Advantage & Efficiency",
    "A simple screw jack with a velocity ratio of 250 is used to lift a car weighing 12 kN (12,000 N) by applying an effort force of 80 N. Calculate the Mechanical Advantage and the Efficiency of the jack.",
    [
      "Load W = 12,000 N, Effort P = 80 N, Velocity Ratio VR = 250",
      "Mechanical Advantage MA = W / P = 12,000 / 80 = 150",
      "Efficiency η = (MA / VR) × 100% = (150 / 250) × 100% = 0.60 × 100% = 60%"
    ],
    "MA = 150; Efficiency = 60%"
  );

  builder.addWorkedExample(
    "Trigonometric Height of Inaccessible Monument",
    "To find the height of a chimney, the theodolite is set up at station A and the angle of elevation to the top is measured as 30°. Moving 50 m closer to the chimney to station B, the angle of elevation is measured as 45°. If the height of the instrument is 1.5 m, find the total height of the chimney above ground.",
    [
      "Distance between stations b = 50 m",
      "Angle at A (α) = 30° => cot 30° = √3 ≈ 1.732",
      "Angle at B (β) = 45° => cot 45° = 1.000",
      "Height above instrument h = b / (cot α - cot β) = 50 / (1.732 - 1.000) = 50 / 0.732 = 68.306 m",
      "Total Height above ground H = h + Instrument Height = 68.306 + 1.500 = 69.806 m ≈ 69.81 m"
    ],
    "69.81 metres"
  );

  // CHAPTER 10
  builder.addSectionHeader("CHAPTER 10: KERALA PSC 50 RAPID-FIRE ONE-LINERS & EXAM VAULT");

  builder.addOneLiners("Units, Area & Mensuration", [
    { q: "Number of square feet in 1 Cent", a: "435.6 sq ft (40.47 m²)." },
    { q: "Number of Cents in 1 Acre", a: "100 Cents (43,560 sq ft)." },
    { q: "Number of square metres in 1 Hectare", a: "10,000 m² (2.471 Acres)." },
    { q: "Perimeter of semi-circle of radius r", a: "r(π + 2) = (36 / 7) · r." },
    { q: "Area of equilateral triangle with side a", a: "(√3 / 4) · a² ≈ 0.433 a²." },
    { q: "Area of trapezium formula", a: "1/2 × (Sum of parallel sides) × Height." },
    { q: "Volume of cone compared to cylinder of same base & height", a: "1/3rd of cylinder volume (V = 1/3 πr²h)." },
    { q: "Prismoidal formula for earthwork volume requires", a: "Strictly an ODD number of cross-sections." },
    { q: "Prismoidal correction to trapezoidal volume is always", a: "Subtractive (Cp = L/6 · s · (d1 - d2)²)." },
    { q: "Diagonal of a cube of edge a", a: "a√3." }
  ]);

  builder.addOneLiners("Mechanics, Work & Power", [
    { q: "Value of 1 Metric Horsepower in Watts", a: "735.5 Watts (75 kg·m/s)." },
    { q: "Value of 1 British Horsepower in Watts", a: "746.0 Watts (550 ft·lb/s)." },
    { q: "Specific gravity of pure water at 4°C", a: "1.0 (Density = 1000 kg/m³)." },
    { q: "Specific gravity of ordinary Portland cement", a: "3.15." },
    { q: "Specific gravity of structural steel", a: "7.85." },
    { q: "Specific gravity of mercury", a: "13.6." },
    { q: "Formula for kinetic energy", a: "1/2 · m · v²." },
    { q: "In a machine, Efficiency is the ratio of", a: "Mechanical Advantage to Velocity Ratio (MA / VR)." },
    { q: "Lever having mechanical advantage always greater than 1", a: "Second Class Lever (e.g. Wheelbarrow)." },
    { q: "Lever having mechanical advantage always less than 1", a: "Third Class Lever (e.g. Tongs, tweezers)." }
  ]);

  builder.addOneLiners("Heat, Physics & Trigonometry", [
    { q: "Temperature at which Celsius and Fahrenheit are equal", a: "- 40 degrees (- 40°C = - 40°F)." },
    { q: "Boiling point of water in Fahrenheit scale", a: "212°F (Freezing point = 32°F)." },
    { q: "Absolute zero temperature in Celsius", a: "- 273.15°C (0 Kelvin)." },
    { q: "Value of sin 30°", a: "1/2 (0.5)." },
    { q: "Value of tan 45°", a: "1.0." },
    { q: "Value of cos 60°", a: "1/2 (0.5)." },
    { q: "Value of sin 60°", a: "√3 / 2 ≈ 0.866." },
    { q: "Identity: sin² θ + cos² θ equals", a: "1." },
    { q: "Identity: 1 + tan² θ equals", a: "sec² θ." },
    { q: "Relation between angle of repose and angle of friction", a: "Angle of Repose equals Angle of Friction (θ = φ)." }
  ]);

  builder.addSubSectionHeader("Workshop Calculation Revision Checklist Matrix");
  builder.addTable(
    ["Physical Concept", "Governing Formula / Conversion", "Standard Kerala PSC Key Value"],
    [
      ["1 Cent of Land", "435.6 sq ft = 40.4686 m²", "100 Cents = 1 Acre (43,560 sq ft)"],
      ["1 Hectare", "10,000 m² = 2.471 Acres = 247.1 Cents", "1 Are = 100 m² = 2.471 Cents"],
      ["Horsepower", "1 Metric HP = 735.5 W; 1 British HP = 746 W", "75 kg·m/s for Metric HP"],
      ["Temperature Coincidence", "C / 5 = (F - 32) / 9", "- 40° is identical on both C and F scales"],
      ["Machine Efficiency", "η = MA / VR × 100%", "For ideal machine η = 100% and MA = VR"],
      ["Semi-Circle Perimeter", "P = r(π + 2) ≈ (36 / 7) · r", "Includes both curved arc and base diameter"],
      ["Prismoidal Rule", "V = (d / 3) [ (A₁ + An) + 4(Even) + 2(Odd) ]", "Exact for prismoids; requires odd cross-sections"],
      ["Prismoidal Correction", "Cp = (L / 6) · s · (d₁ - d₂)²", "Always subtractive from Trapezoidal volume"]
    ],
    [125, 175, 200]
  );

  return await builder.finish();
}

async function runBuild() {
  console.log('Generating Module 09 PDF...');
  const res = await buildModule9();
  console.log(`Module 09 Complete! Pages: ${res.totalPages}`);
}

runBuild().catch(console.error);
