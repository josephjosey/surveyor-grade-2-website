const { ModulePdfBuilder } = require('./create-module-pdf-engine.cjs');

async function buildModule10() {
  const builder = new ModulePdfBuilder({
    moduleNumber: 10,
    moduleTitle: "Building Materials and Construction",
    marks: "10 Marks",
    topics: "Building Materials (Stones, Bricks, Cement, Mortar, Concrete, Timber, Steel), Brick Masonry Bonds (English vs Flemish, Closers), Foundations (Rankine's minimum depth), Roof Trusses (King Post & Queen Post), Basic Irrigation (Duty, Delta, Base Period Δ=864B/D, Canals, Weirs & Barrages), Highway Engineering (Camber, Superelevation e=v²/225R, Sight Distances), Estimating & Costing (IS 1200 Units of Measurement, Center Line vs Long Wall-Short Wall Methods).",
    outputFilename: "module-10-building-materials-and-construction.pdf"
  });

  builder.addCoverPage();

  // CHAPTER 1
  builder.addSectionHeader("CHAPTER 1: STONES & QUARRYING");
  builder.addParagraph("Stones are natural building materials obtained from rocks by quarrying and dressing, widely used in masonry, foundations, dams, and road ballast.");

  builder.addSubSectionHeader("1.1 Classification of Rocks");
  builder.addTable(
    ["Classification Basis", "Category", "Geological Formation & Characteristics", "Standard Examples"],
    [
      ["Geological", "Igneous Rocks", "Formed by cooling and solidification of molten magma or lava; crystalline, unstratified, high strength", "Granite, Basalt, Trap, Pumice, Diorite"],
      ["Geological", "Sedimentary Rocks", "Formed by deposition of weathered sediments in layers under water/wind; stratified, softer", "Sandstone, Limestone, Shale, Conglomerate, Laterite"],
      ["Geological", "Metamorphic Rocks", "Formed by transformation of igneous or sedimentary rocks under high heat and pressure", "Marble (from Limestone), Slate (from Shale), Quartzite (from Sandstone), Gneiss (from Granite)"],
      ["Physical", "Stratified / Unstratified / Foliated", "Stratified rocks have distinct bed planes (Limestone, Slate); Unstratified have no planes (Granite, Trap); Foliated split along definite direction (Gneiss, Schist)", "Slate (Foliated), Granite (Unstratified)"],
      ["Chemical", "Siliceous / Argillaceous / Calcareous", "Siliceous: Silica (SiO₂) main constituent (Granite, Quartzite); Argillaceous: Clay/Alumina main (Slate, Laterite); Calcareous: Calcium carbonate CaCO₃ main (Limestone, Marble)", "Quartzite (Siliceous), Marble (Calcareous)"]
    ],
    [95, 125, 175, 105]
  );

  builder.addSubSectionHeader("1.2 Tests on Stones & Mohs Hardness Scale");
  builder.addBulletPoints([
    { bold: "Crushing / Compressive Strength", text: "Tested on 40 mm or 50 mm stone cubes in a universal testing machine. Good building stones must have compressive strength greater than 100 N/mm² (1,000 kg/cm²). Granite has 100-140 N/mm²; Basalt has > 150 N/mm²; Sandstone has 65 N/mm²." },
    { bold: "Water Absorption Test", text: "Stone is soaked in clean water for 24 hours. A good building stone should NOT absorb water more than 5% of its dry weight. Stones absorbing > 10% water are rejected." },
    { bold: "Mohs Scale of Mineral Hardness (1 to 10)", text: "1. Talc (Softest) -> 2. Gypsum -> 3. Calcite -> 4. Fluorite -> 5. Apatite -> 6. Feldspar -> 7. Quartz -> 8. Topaz -> 9. Corundum -> 10. Diamond (Hardest)." }
  ]);

  builder.addFocusBox("MOHS HARDNESS SCALE IN PSC", "• 1 = Talc (Softest mineral, easily scratched by fingernail).\n• 7 = Quartz.\n• 10 = Diamond (Hardest mineral known).\n• Fingernail hardness ≈ 2.5; Copper coin ≈ 3.5; Knife blade / Window glass ≈ 5.5.");

  // CHAPTER 2
  builder.addSectionHeader("CHAPTER 2: BRICKS & CLAY PRODUCTS");
  builder.addParagraph("Bricks are artificial building blocks manufactured by moulding, drying, and burning suitable brick clay (earth).");

  builder.addSubSectionHeader("2.1 Chemical Composition of Good Brick Earth");
  builder.addTable(
    ["Constituent", "Percentage", "Function in Brick Manufacture", "Defect / Hazard Caused if in Excess"],
    [
      ["Silica (Sand)", "50% to 60%", "Prevents cracking, shrinking, and warping of raw bricks; imparts uniform shape", "Excess silica makes bricks brittle, weak, and causes lack of cohesion between particles"],
      ["Alumina (Clay)", "20% to 30%", "Imparts plasticity to the earth so that it can be easily moulded without crumbling", "Excess alumina causes raw bricks to shrink excessively and crack/warp during drying and burning"],
      ["Lime (CaO)", "Less than 5%", "Prevents shrinkage; acts as a flux during burning to fuse silica particles together", "Excess lime causes brick to melt and lose its shape; lime lumps slake and split brick into pieces!"],
      ["Iron Oxide (Fe₂O₃)", "5% to 6%", "Imparts the characteristic pleasing RED color to burned brick; acts as a flux", "Excess iron oxide turns bricks dark blue or blackish; deficiency results in pale yellow color"],
      ["Magnesia (MgO)", "Less than 1%", "Imparts a yellowish tint; decreases shrinkage", "Excess magnesia leads to decay of bricks in service"]
    ],
    [105, 75, 175, 145]
  );

  builder.addSubSectionHeader("2.2 Harmful Ingredients in Brick Earth");
  builder.addBulletPoints([
    { bold: "Lime Lumps", text: "Quicklime absorbs moisture, slakes with volume expansion, and splits/disintegrates the brick." },
    { bold: "Iron Pyrites", text: "Decomposes, oxidizes, and leaves black slag spots that discolour and crystallize out." },
    { bold: "Alkalis (Soda & Potash)", text: "Act as flux causing twisting. Leaches out to surface when exposed to rain, causing ugly white powdery salt patches called EFFLORESCENCE." },
    { bold: "Pebbles & Gravel", text: "Prevent thorough mixing and cause weak cracking planes." },
    { bold: "Organic / Vegetative Matter", text: "Burns away during firing, leaving porous hollow voids that reduce brick strength." }
  ]);

  builder.addSubSectionHeader("2.3 Standard Brick Sizes & Frog Specifications");
  builder.addBulletPoints([
    { bold: "Modular / Standard Size (IS 1077)", text: "190 mm × 90 mm × 90 mm (19 cm × 9 cm × 9 cm)." },
    { bold: "Nominal Size (With Mortar Joints)", text: "200 mm × 100 mm × 100 mm (20 cm × 10 cm × 10 cm). Standard mortar joint is 10 mm thick." },
    { bold: "Traditional / Conventional Size", text: "230 mm × 115 mm × 75 mm (9\" × 4.5\" × 3\")." },
    { bold: "Number of Modular Bricks per m³", text: "1 m³ / (0.2 m × 0.1 m × 0.1 m) = 500 BRICKS (Without mortar: approx 550 bricks including wastage)." },
    { bold: "Frog in Brick", text: "A depression (indentation) of 10 to 20 mm depth formed on the top face of a brick during moulding. Serves two purposes: (1) Acts as a shear key for mortar to bond consecutive courses, (2) Displays maker's trademark name." }
  ]);

  builder.addSubSectionHeader("2.4 Classification & Quality Tests of Bricks (IS 1077)");
  builder.addTable(
    ["Brick Class", "Minimum Compressive Strength", "Maximum 24h Water Absorption", "Standard Field Characteristics"],
    [
      ["First Class Brick", "10.5 N/mm² (105 kg/cm²)", "20% of dry weight", "Uniform deep red color; sharp rectangular edges; ringing metallic sound when struck; no efflorescence"],
      ["Second Class Brick", "7.0 N/mm² (70 kg/cm²)", "22% of dry weight", "Slight surface irregularities allowed; clear ringing sound; used for internal walls and plastering"],
      ["Third Class Brick", "3.5 N/mm² (35 kg/cm²)", "25% of dry weight", "Underburnt, light yellowish color; dull thud sound; used for temporary structures and road soiling"],
      ["Fourth Class (Overburnt)", "High strength, brittle", "Less than 5%", "Overburnt vitrified bricks (Jhama); dark distorted; crushed into surkhi for lime concrete"]
    ],
    [105, 115, 110, 170]
  );

  builder.addFocusBox("BRICK COMPRESSIVE STRENGTH MINIMUMS", "• First Class Brick: ≥ 10.5 N/mm² (Water absorption ≤ 20%).\n• Second Class Brick: ≥ 7.0 N/mm² (Water absorption ≤ 22%).\n• Common Building Brick (General Minimum): ≥ 3.5 N/mm² (Water absorption ≤ 25%).\n• Standard Modular Size: 190 × 90 × 90 mm; Nominal size with mortar = 200 × 100 × 100 mm.");

  // CHAPTER 3
  builder.addSectionHeader("CHAPTER 3: CEMENT, SAND & MORTAR");
  builder.addParagraph("Cement is the primary binding agent in modern construction, manufactured by calcining calcareous materials (limestone/chalk) and argillaceous materials (clay/shale) at 1,400°C to 1,500°C into clinker.");

  builder.addSubSectionHeader("3.1 Chemical Composition & Bogue's Compounds of Portland Cement");
  builder.addTable(
    ["Bogue's Compound", "Chemical Formula", "Abbr.", "Percentage", "Hydration Characteristic & Structural Role"],
    [
      ["Tricalcium Silicate", "3CaO · SiO₂", "C₃S", "40% to 50%", "Hydrates rapidly; responsible for EARLY STRENGTH (up to 7 to 28 days); high heat of hydration"],
      ["Dicalcium Silicate", "2CaO · SiO₂", "C₂S", "25% to 35%", "Hydrates slowly over months; responsible for ULTIMATE LATER STRENGTH (after 1 year); low heat"],
      ["Tricalcium Aluminate", "3CaO · Al₂O₃", "C₃A", "8% to 12%", "Hydrates FIRST within 24 hours; causes INITIAL SET of cement; releases highest heat; vulnerable to sulphate attack"],
      ["Tetracalcium Aluminoferrite", "4CaO · Al₂O₃ · Fe₂O₃", "C₄AF", "6% to 10%", "Poorest cementing value; hydrates rapidly; imparts grey color to cement"]
    ],
    [115, 95, 45, 75, 170]
  );

  builder.addFocusBox("ROLE OF GYPSUM IN CEMENT", "Raw clinker without gypsum sets instantaneously within minutes (flash set)! Raw gypsum (CaSO₄·2H₂O, 2% to 3%) is added during final clinker grinding to RETARD the initial setting time of cement and allow adequate time for mixing and placing.");

  builder.addSubSectionHeader("3.2 Standard Laboratory Tests on Cement");
  builder.addTable(
    ["Test Name", "Apparatus Used", "Standard Test Procedure / Permissible Limit", "PSC Exam Key"],
    [
      ["Standard Consistency", "Vicat Apparatus (10 mm plunger)", "Finds water percentage (P) required to make cement paste such that plunger penetrates to 5 to 7 mm from bottom of mould (usually 25% to 30%)", "Plunger diameter = 10 mm; Mould height = 40 mm"],
      ["Initial Setting Time", "Vicat Apparatus (1 mm square needle)", "Time from adding water until needle fails to pierce beyond 5 mm from bottom. NOT LESS THAN 30 MINUTES (≥ 30 mins) for OPC", "Tested with 0.85 P water"],
      ["Final Setting Time", "Vicat Apparatus (Annular circular collar with needle)", "Time when needle makes an impression but annular collar fails to make an indent. NOT EXCEEDING 600 MINUTES (≤ 10 hours) for OPC", "Tested with 0.85 P water"],
      ["Soundness Test", "Le Chatelier Mould (for free lime) & Autoclave (for magnesia)", "Measures expansion due to unburnt lime. Expansion of Le Chatelier indicator needles must NOT EXCEED 10 mm for OPC!", "Autoclave limit ≤ 0.8%"],
      ["Fineness Test", "IS 90-micron sieve (Sieve No. 9)", "Residue left on 90-micron sieve after 15 minutes of continuous sieving must NOT EXCEED 10% for Ordinary Portland Cement (OPC)", "Specific surface area ≥ 2,250 cm²/g"]
    ],
    [95, 115, 175, 115]
  );

  builder.addSubSectionHeader("3.3 Bulking of Sand");
  builder.addParagraph("Bulking is the increase in volume of fine sand caused by surface tension films of moisture pushing sand grains apart when damp.");
  builder.addBulletPoints([
    { bold: "Moisture Content for Max Bulking", text: "Maximum bulking (up to 20% to 30% volume increase!) occurs at moisture content of 4% to 6% by weight." },
    { bold: "Inundation Effect", text: "When sand is completely submerged in water (inundated), the surface tension films break down and the volume returns to that of completely dry sand!" },
    { bold: "Finest Sand Bulks Most", text: "Fine sand bulks significantly more than coarse sand because of its greater specific surface area." }
  ]);

  // CHAPTER 4
  builder.addSectionHeader("CHAPTER 4: CONCRETE & REINFORCED CEMENT CONCRETE (RCC)");
  builder.addParagraph("Concrete is an artificial stone-like composite material produced by mixing cement, fine aggregate (sand), coarse aggregate (gravel/crushed stone), and water in prescribed proportions.");

  builder.addSubSectionHeader("4.1 Water-Cement Ratio & Abrams' Law");
  builder.addParagraph("Abrams' Law states that for fully compacted concrete at a given age, the compressive strength depends purely on the ratio of water to cement by weight (Water-Cement Ratio, w/c), independent of aggregate proportions!");
  builder.addFormulaBox("WATER-CEMENT RATIO PRINCIPLE", [
    "Compressive Strength = K₁ / (K₂^(w/c))",
    "Lower Water-Cement Ratio => Higher Compressive Strength & Durability!",
    "Higher Water-Cement Ratio => Higher Workability, BUT severely reduced strength and porous concrete.",
    "Standard w/c ratio for normal structural concrete is 0.40 to 0.55."
  ]);

  builder.addSubSectionHeader("4.2 Workability Tests & Standard Concrete Grades");
  builder.addTable(
    ["Concrete Grade (IS 456)", "Nominal Volumetric Mix Ratio (Cement : Sand : Coarse Agg)", "Characteristic 28-Day Strength (fck on 150 mm cube)", "Standard Construction Application"],
    [
      ["M10", "1 : 3 : 6", "10 N/mm² (100 kg/cm²)", "Plain cement concrete (PCC) foundations, levelling course"],
      ["M15", "1 : 2 : 4", "15 N/mm² (150 kg/cm²)", "General mass concrete, non-structural pavements"],
      ["M20", "1 : 1.5 : 3", "20 N/mm² (200 kg/cm²)", "MINIMUM GRADE for Reinforced Cement Concrete (RCC) in normal conditions!"],
      ["M25", "1 : 1 : 2", "25 N/mm² (250 kg/cm²)", "Heavy RCC columns, beams, retaining walls, cantilever slabs"]
    ],
    [95, 135, 125, 145]
  );

  builder.addFocusBox("MINIMUM GRADE OF RCC (IS 456:2000)", "Under IS 456:2000, the MINIMUM permissible grade of concrete for structural Reinforced Cement Concrete (RCC) is M20 (1:1.5:3). For prestressed concrete, minimum grade is M30 for post-tensioned and M40 for pre-tensioned!");

  // CHAPTER 5
  builder.addSectionHeader("CHAPTER 5: TIMBER, PAINTS & BUILDING TRUSSES");
  builder.addParagraph("Wood from exogenous trees processed for structural use is called timber.");

  builder.addSubSectionHeader("5.1 Cross-Sectional Structure of an Exogenous Tree Trunk");
  builder.addTable(
    ["Layer (Inside to Outside)", "Description & Anatomical Structure", "Engineering Importance"],
    [
      ["1. Pith (Medulla)", "Innermost central core of dark, soft cellular tissue", "Oldest part of tree; useless for structural timber; easily rots"],
      ["2. Heartwood (Duramen)", "Inner annular rings surrounding the pith; dark, dense, dead wood", "STRONGEST and most durable portion; ideal for building timber!"],
      ["3. Sapwood (Alburnum)", "Outer light-colored rings between heartwood and cambium; active living sap cells", "Soft, weak, prone to fungal decay and insect attack; inferior timber"],
      ["4. Cambium Layer", "Thin microscopic layer of sap between sapwood and inner bark", "Active growing layer of living cells forming new wood rings annually"],
      ["5. Inner Bark (Bast)", "Fibrous inner layer protecting cambium", "Transports organic nutrients down the tree"],
      ["6. Outer Bark (Cortex)", "Tough outermost protective skin of tree", "Shields trunk from weather and mechanical injury"],
      ["7. Medullary Rays", "Thin radial cellular lines running from pith outwards to bark", "Holds annular rings together; imparts radial strength"]
    ],
    [115, 235, 150]
  );

  builder.addSubSectionHeader("5.2 Roof Trusses: King Post vs Queen Post");
  builder.addTable(
    ["Truss Type", "Economical Span Range", "Number of Vertical Tension Posts", "PSC Structural Distinctions"],
    [
      ["King Post Truss", "5 to 8 metres span (up to 9 m)", "ONE central vertical tension post (The King Post)", "King post connects the apex of the rafters to the central tie beam in pure tension!"],
      ["Queen Post Truss", "8 to 12 metres span (up to 14 m)", "TWO vertical tension posts (The Queen Posts)", "Two queen posts connected at top by a horizontal straining beam and at bottom by tie beam"]
    ],
    [115, 115, 135, 135]
  );

  // CHAPTER 6
  builder.addSectionHeader("CHAPTER 6: FOUNDATIONS & BRICK MASONRY BONDS");
  builder.addParagraph("Foundations transmit all dead, live, and wind loads from the superstructure safely to the subsoil without exceeding the safe bearing capacity.");

  builder.addSubSectionHeader("6.1 Rankine's Minimum Depth of Foundation Formula");
  builder.addFormulaBox("RANKINE'S FOUNDATION DEPTH FORMULA", [
    "Minimum Depth of Foundation d_min = (p / w) × [ (1 - sin φ) / (1 + sin φ) ]²",
    "where p = safe bearing capacity of soil (kN/m²), w = unit weight of soil (kN/m³), φ = angle of internal friction of soil",
    "Notice: For cohesive clays where φ = 0°, Rankine's formula gives d = p / w."
  ]);

  builder.addSubSectionHeader("6.2 Brick Masonry Bonds: English vs Flemish Bond");
  builder.addTable(
    ["Bond Type", "Arrangement of Brick Courses", "Strength vs Appearance", "Standard Features"],
    [
      ["English Bond", "Alternate courses of ALL HEADERS and ALL STRETCHERS throughout the wall", "STRONGEST brick masonry bond; maximum structural load-bearing capacity", "Queen closer placed immediately after the corner quoin header to create 1/2 brick lap"],
      ["Flemish Bond", "Each course contains ALTERNATE HEADERS AND STRETCHERS along the same course", "Better, more artistic and decorative appearance; slightly weaker than English bond", "Double Flemish shows Flemish pattern on both faces; Single Flemish shows Flemish on front and English on back"]
    ],
    [115, 195, 105, 85]
  );

  builder.addFocusBox("BRICK CLOSERS IN MASONRY", "• Queen Closer: A brick cut LENGTHWISE into two equal halves (width = 45 mm, length = 190 mm). Placed next to the quoin header to break vertical joints.\n• King Closer: Formed by cutting off a triangular corner such that half-header and half-stretcher remain (cut across midpoints of adjacent sides).");

  // CHAPTER 7
  builder.addSectionHeader("CHAPTER 7: BASIC IRRIGATION & WATER AUTHORITY TRACER CONCEPTS");
  builder.addParagraph("Irrigation engineering concepts frequently tested in KWA Tracer and Surveyor Grade II examinations.");

  builder.addSubSectionHeader("7.1 Duty, Delta & Base Period");
  builder.addTable(
    ["Irrigation Term", "Symbol", "Unit of Measurement", "Rigorous Definition & Engineering Relationship"],
    [
      ["Duty", "D", "Hectares per cumec (ha/cumec)", "The total area of land that can be irrigated by a continuous discharge of 1 cubic metre per second (cumec) of water throughout the crop base period"],
      ["Delta", "Δ", "Centimetres (cm) or metres (m)", "The total accumulated depth of water required by a crop during its entire life cycle from sowing to harvest"],
      ["Base Period", "B", "Days", "The period of time (in days) from the very first watering of a crop at sowing to its final watering just before harvesting"]
    ],
    [105, 55, 140, 200]
  );

  builder.addFormulaBox("DUTY-DELTA-BASE PERIOD RELATIONSHIP", [
    "Delta Δ = (864 × B) / D  [in Centimetres]",
    "Delta Δ = (8.64 × B) / D  [in Metres]",
    "where B = Base period in days, D = Duty in hectares/cumec",
    "Rule: Higher Duty indicates higher irrigation efficiency (less water required per hectare)!"
  ]);

  builder.addSubSectionHeader("7.2 Canal Cross-Section & Hydraulic Structures");
  builder.addBulletPoints([
    { bold: "Berm", text: "The horizontal strip of land left between the toe of the canal bank and the top edge of the cutting. Functions: (1) Prevents bank sliding into canal, (2) Allows silt deposition to form protective lining, (3) Provides wide path for maintenance inspection." },
    { bold: "Freeboard", text: "The vertical distance between the full supply water level (FSL) and the top of the canal bank. Prevents waves from overtopping the bank (typically 0.5 m to 0.75 m)." },
    { bold: "Weir vs Barrage", text: "Weir: A low masonry obstruction across a river with a raised permanent crest wall; water level is maintained mostly by the permanent crest. Barrage: Has practically no crest wall; water level and afflux are regulated ENTIRELY by adjustable mechanical gates!" }
  ]);

  // CHAPTER 8
  builder.addSectionHeader("CHAPTER 8: HIGHWAY CROSS-SECTION & GEOMETRIC DESIGN");
  builder.addParagraph("Road geometry design principles governing civil works.");

  builder.addSubSectionHeader("8.1 Camber (Cross-Fall) & Superelevation");
  builder.addTable(
    ["Highway Element", "Purpose", "IRC Standard Values for Plain Terrain"],
    [
      ["Camber (Cross-Fall)", "Transverse slope provided to the road surface to drain off rainwater rapidly into side drains", "Concrete / Heavy Bitumen: 1 in 50 (2%) to 1 in 60 (1.7%)\nThin Bitumen: 1 in 40 (2.5%) to 1 in 50 (2%)\nWater Bound Macadam (WBM): 1 in 33 (3%) to 1 in 40 (2.5%)\nEarthen roads: 1 in 25 (4%) to 1 in 33 (3%)"],
      ["Carriageway Width", "Paved width allocated strictly for vehicular traffic movement", "Single Lane: 3.75 m\nTwo-lane without raised kerbs: 7.0 m\nTwo-lane with raised kerbs: 7.5 m\nMulti-lane: 3.5 m per lane"],
      ["Superelevation (e)", "Transverse tilt provided on horizontal curves to counteract centrifugal force", "Design formula for mixed traffic (75% design speed): e = v² / (225 · R)\nMaximum permissible e = 7% (0.07) for plain terrain; 10% (0.10) for hilly roads"]
    ],
    [115, 175, 210]
  );

  // CHAPTER 9
  builder.addSectionHeader("CHAPTER 9: BASIC ESTIMATING & COSTING (IS 1200)");
  builder.addParagraph("Estimating determines the probable quantity of materials, labor, and cost before commencing construction.");

  builder.addSubSectionHeader("9.1 Standard Units of Measurement (IS 1200)");
  builder.addTable(
    ["Civil Engineering Work", "Unit of Measurement", "Unit of Payment", "Measurement Standard Notes"],
    [
      ["Earthwork excavation in foundation", "Cubic Metre (m³)", "Per 100 m³ or m³", "Lead = 50 m; Lift = 1.5 m standard"],
      ["Concrete in foundation & RCC roof", "Cubic Metre (m³)", "Per m³", "Formwork measured separately in m²"],
      ["Damp Proof Course (DPC)", "Square Metre (m²)", "Per m²", "Thickness specified in description (usually 2.5 cm)"],
      ["Brickwork in wall (> 10 cm thick)", "Cubic Metre (m³)", "Per m³", "Half-brick partition walls measured in m²"],
      ["Plastering, Pointing, Painting", "Square Metre (m²)", "Per m²", "Deductions for openings as per IS 1200"],
      ["Steel Reinforcement in RCC", "Quintal (q) or kg", "Per Quintal (100 kg)", "Includes cutting, bending, and placing"]
    ],
    [135, 105, 95, 165]
  );

  builder.addSubSectionHeader("9.2 Methods of Building Estimates");
  builder.addBulletPoints([
    { bold: "Center Line Method", text: "The total centerline length of all continuous walls is calculated. For T-junctions where partition walls join main walls, a deduction of HALF THE WALL THICKNESS (1/2 t) is made for every T-junction. Net Centerline = Total Centerline - (Number of T-junctions × 1/2 t). Very fast and accurate for symmetrical plans!" },
    { bold: "Long Wall - Short Wall Method", text: "Long walls are measured out-to-out: Length = In-to-in distance + 2 × (1/2 wall thickness) = In-to-in + wall thickness. Short walls are measured in-to-in: Length = In-to-in distance - 2 × (1/2 wall thickness). Length of long wall decreases as we move from foundation to superstructure; length of short wall increases!" }
  ]);

  // CHAPTER 10
  builder.addSectionHeader("CHAPTER 10: PSC SOLVED NUMERICAL MODELS");

  builder.addWorkedExample(
    "Duty-Delta-Base Period Calculation",
    "A crop with a base period of 120 days requires a total depth of water (delta) of 96 cm. Find the duty of canal water in hectares per cumec.",
    [
      "Formula: Δ = (864 × B) / D  (where Δ is in cm, B in days, D in ha/cumec)",
      "96 = (864 × 120) / D",
      "D = (864 × 120) / 96 = 9 × 120 = 1,080 hectares/cumec"
    ],
    "1,080 hectares/cumec"
  );

  builder.addWorkedExample(
    "Rankine's Minimum Depth of Foundation",
    "Determine the minimum depth of foundation for a building column bearing on soil with a safe bearing capacity of 150 kN/m², unit weight of soil = 18 kN/m³, and angle of internal friction φ = 30°.",
    [
      "Given: p = 150 kN/m², w = 18 kN/m³, φ = 30°",
      "sin 30° = 0.5 => (1 - sin 30°) / (1 + sin 30°) = (1 - 0.5) / (1 + 0.5) = 0.5 / 1.5 = 1 / 3",
      "Rankine's formula: d_min = (p / w) × [ (1 - sin φ) / (1 + sin φ) ]²",
      "d_min = (150 / 18) × (1 / 3)² = (8.333) × (1 / 9) = 0.926 m ≈ 0.93 m"
    ],
    "0.93 metres"
  );

  builder.addWorkedExample(
    "Superelevation on Horizontal Road Curve",
    "Calculate the required superelevation for a mixed traffic highway on a horizontal curve of radius 300 m for a design speed of 60 km/h.",
    [
      "Formula (IRC mixed traffic): e = v² / (225 × R)",
      "Speed v = 60 km/h, Radius R = 300 m",
      "e = (60)² / (225 × 300) = 3,600 / 67,500 = 0.0533 = 5.33%",
      "Check: 5.33% is less than the maximum allowable limit of 7% (0.07). Hence, e = 0.0533 is safe."
    ],
    "0.0533 (5.33% or 1 in 18.75)"
  );

  // CHAPTER 11
  builder.addSectionHeader("CHAPTER 11: KERALA PSC 50 RAPID-FIRE ONE-LINERS & EXAM VAULT");

  builder.addOneLiners("Building Materials", [
    { q: "Chief ingredient of good brick earth", a: "Silica (50% to 60%)." },
    { q: "Ingredient imparting plasticity to brick earth", a: "Alumina (20% to 30%)." },
    { q: "Standard modular brick size as per BIS", a: "190 × 90 × 90 mm." },
    { q: "Nominal modular brick size with mortar", a: "200 × 100 × 100 mm." },
    { q: "Number of modular bricks in 1 cubic metre", a: "500 bricks." },
    { q: "Minimum compressive strength of 1st class brick", a: "10.5 N/mm² (Water absorption ≤ 20%)." },
    { q: "Component added to clinker to retard setting time", a: "Gypsum (2% to 3%)." },
    { q: "Apparatus used to test initial and final setting time", a: "Vicat Apparatus." },
    { q: "Initial setting time of Ordinary Portland Cement", a: "Not less than 30 minutes (≥ 30 mins)." },
    { q: "Final setting time of Ordinary Portland Cement", a: "Not exceeding 600 minutes (≤ 10 hours)." }
  ]);

  builder.addOneLiners("Concrete, Timber & Masonry", [
    { q: "Minimum grade of concrete for structural RCC", a: "M20 (1 : 1.5 : 3)." },
    { q: "Law stating concrete strength depends on w/c ratio", a: "Abrams' Law." },
    { q: "Moisture content of sand causing maximum bulking", a: "4% to 6% moisture content." },
    { q: "Dark, dense, strongest inner wood of tree trunk", a: "Heartwood (Duramen)." },
    { q: "Strongest bond in brick masonry", a: "English Bond." },
    { q: "Brick cut lengthwise into two equal halves", a: "Queen Closer." },
    { q: "Roof truss suitable for spans up to 8 metres", a: "King Post Truss (single vertical tie)." },
    { q: "Roof truss suitable for spans of 8 to 12 metres", a: "Queen Post Truss (two vertical ties)." },
    { q: "Unit of measurement for Damp Proof Course (DPC)", a: "Square Metre (m²)." },
    { q: "In center line method, deduction at each T-junction is", a: "Half the wall thickness (1/2 t)." }
  ]);

  builder.addOneLiners("Irrigation & Highways", [
    { q: "Fundamental equation connecting Delta, Duty, Base period", a: "Δ = (864 · B) / D (cm)." },
    { q: "Transverse road slope to drain off surface water", a: "Camber (Cross-fall)." },
    { q: "Standard carriageway width for single lane road", a: "3.75 metres." },
    { q: "Superelevation design formula for mixed traffic (IRC)", a: "e = v² / (225 · R)." },
    { q: "Maximum permissible superelevation on plain roads", a: "7% (0.07)." },
    { q: "Horizontal ledge left between canal cutting and bank", a: "Berm." },
    { q: "Hydraulic structure regulating water level purely by gates", a: "Barrage." },
    { q: "Crop period from sowing to harvest is called", a: "Base Period (in days)." },
    { q: "Mineral ranking 1 on Mohs scale of hardness", a: "Talc (Softest)." },
    { q: "Mineral ranking 10 on Mohs scale of hardness", a: "Diamond (Hardest)." }
  ]);

  return await builder.finish();
}

async function runBuild() {
  console.log('Generating Module 10 PDF...');
  const res = await buildModule10();
  console.log(`Module 10 Complete! Pages: ${res.totalPages}`);
}

runBuild().catch(console.error);
