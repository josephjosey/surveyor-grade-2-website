const fs = require('fs');
const path = require('path');

const officialStudyNotes = [
  {
    id: "note-mod-01",
    moduleId: "mod-1",
    title: "Module 01: Basic Engineering Drawing (Complete PSC Rank File Note)",
    titleMalayalam: "ബേസിക് എഞ്ചിനീയറിംഗ് ഡ്രോയിംഗ് (മാസ്റ്റർ നോട്ട്)",
    description: "Official Kerala PSC rank file notes on Drawing Instruments, Sheet sizes (IS 10711), Lines (IS 10714), Scales (Plain, Diagonal, Vernier), Conic sections, and 1st/3rd Angle Orthographic Projections.",
    readTime: "25 mins read",
    thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    pdfNotesUrl: "/notes/module-01-basic-engineering-drawing.pdf",
    pdfNotesTitle: "Module 01 - Basic Engineering Drawing.pdf",
    pdfSize: "46 KB PDF (10 Pages)",
    chapterOverview: [
      "Drawing Instruments (Boards, T-squares, Set-squares, Pencils, Mini drafter)",
      "Drawing Sheets (IS 10711: A0 to A5 sizes, aspect ratio √2:1, Title Block 185×65 mm)",
      "Types of Lines (IS 10714: Types A to K) & Lettering Standards (IS 9609)",
      "Scales: Representative Fraction, Plain, Diagonal, and Vernier (Least Count s/n)",
      "Conic Sections: Ellipse (e<1), Parabola (e=1), Hyperbola (e>1), Cycloids, Involute",
      "Orthographic Projections: First Angle vs Third Angle Projections, Points & Solids"
    ],
    takeaways: [
      "Trimmed size of A0 is 841 × 1189 mm (Area = 1 m²); A4 is 210 × 297 mm",
      "Title block dimensions are strictly 185 mm × 65 mm at bottom right",
      "BIS specifies First Angle Projection: Top view (Plan) is drawn BELOW the Front view (Elevation)"
    ],
    order: 1,
    isFreePreview: true,
    downloadsCount: 3120,
    uploadedAt: "2026-10-11"
  },
  {
    id: "note-mod-02",
    moduleId: "mod-2",
    title: "Module 02: Chain Surveying (Complete PSC Rank File Note)",
    titleMalayalam: "ചെയിൻ സർവേയിംഗ് (മാസ്റ്റർ നോട്ട്)",
    description: "Comprehensive study note on Principles of Surveying (Whole to Part), Metric & Gunter's chains, Tapes (Invar), Ranging, Slope corrections, Optical square, Obstacles, and Simpson's area rule.",
    readTime: "25 mins read",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    pdfNotesUrl: "/notes/module-02-chain-survey.pdf",
    pdfNotesTitle: "Module 02 - Chain Surveying.pdf",
    pdfSize: "46 KB PDF (10 Pages)",
    chapterOverview: [
      "Fundamental Principles: Whole to Part & Point Location; Plane vs Geodetic Surveying",
      "Chains & Tapes: Metric (20m/100 links, 30m/150 links), Gunter's (66 ft), Invar Tape (64% Steel, 36% Ni)",
      "Ranging: Direct vs Reciprocal ranging; Slope stepping & Hypotensusal allowance (100(sec θ - 1))",
      "Instruments for Right Angles: Optical Square (45° mirrors, 90° deflection), French Cross Staff",
      "Errors & Tape Corrections: Erroneous length (L'/L), Temperature, Pull, Sag (-ve), Slope",
      "Triangulation Framework (Base line, Check line, Tie line), Well-conditioned triangles & Simpson's Rule"
    ],
    takeaways: [
      "Working from whole to part prevents accumulation of local errors",
      "Optical square operates on double reflection with mirrors at 45°",
      "Sag correction is always subtractive (-ve); Invar tape has lowest thermal expansion"
    ],
    order: 2,
    isFreePreview: true,
    downloadsCount: 2940,
    uploadedAt: "2026-10-11"
  },
  {
    id: "note-mod-03",
    moduleId: "mod-3",
    title: "Module 03: Compass Surveying (Complete PSC Rank File Note)",
    titleMalayalam: "കോമ്പസ് സർവേയിംഗ് (മാസ്റ്റർ നോട്ട്)",
    description: "Official lecture note on Prismatic vs Surveyor's Compass, Whole Circle Bearing (WCB) & Quadrantal Bearing (QB), Fore & Back Bearings, Magnetic Declination, Dip, and Local Attraction corrections.",
    readTime: "25 mins read",
    thumbnail: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
    pdfNotesUrl: "/notes/module-03-compass-survey.pdf",
    pdfNotesTitle: "Module 03 - Compass Surveying.pdf",
    pdfSize: "43 KB PDF (10 Pages)",
    chapterOverview: [
      "Meridians: True, Magnetic, Grid, Arbitrary; Convergence of Meridians",
      "Prismatic Compass (0° at South, WCB, broad needle, prism) vs Surveyor's Compass (0° at N/S, QB)",
      "Bearings: WCB to QB conversions, Fore Bearing & Back Bearing relation (BB = FB ± 180°)",
      "Included Angles in Closed Polygon: Sum of interior angles = (2n - 4) × 90°",
      "Magnetic Declination (TB = MB ± Dec), Dip (0° at equator, 90° at poles), Isogonic & Agonic lines",
      "Local Attraction detection (|FB - BB| = 180°), Correction table, and Bowditch's Rule"
    ],
    takeaways: [
      "Prismatic compass graduated ring reads from South (0°) and is fixed to the needle",
      "True bearing remains permanent over time; magnetic bearing varies with declination",
      "At stations affected by local attraction, included angles between lines remain strictly correct"
    ],
    order: 3,
    isFreePreview: true,
    downloadsCount: 2780,
    uploadedAt: "2026-10-11"
  },
  {
    id: "note-mod-04",
    moduleId: "mod-4",
    title: "Module 04: Planetable Surveying (Complete PSC Rank File Note)",
    titleMalayalam: "പ്ലെയ്ൻ ടേബിൾ സർവേയിംഗ് (മാസ്റ്റർ നോട്ട്)",
    description: "Official study note on Principle of Parallelism, Plane Table equipment (Alidade fiducial edge, Trough compass, U-fork), 4 methods (Radiation, Intersection, Traversing, Resection), and Lehmann's 3-point rules.",
    readTime: "25 mins read",
    thumbnail: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    pdfNotesUrl: "/notes/module-04-planetable-survey.pdf",
    pdfNotesTitle: "Module 04 - Planetable Surveying.pdf",
    pdfSize: "44 KB PDF (9 Pages)",
    chapterOverview: [
      "Fundamental Principle of Plane Tabling: Parallelism; Field advantages & limitations",
      "Equipment: Board, Tripod, Plain Alidade (Fiducial edge), Telescopic Alidade, Plumbing Fork & Plumb bob",
      "Temporary Adjustments: Fixing, Leveling, Centering, Orientation (Back-sighting vs Magnetic needle)",
      "Four Survey Methods: Radiation, Intersection (Graphic triangulation), Traversing, Resection",
      "Two-Point Problem & Three-Point Problem (Tracing Paper, Bessel's graphical, Lehmann's trial method)",
      "Lehmann's Three Rules, Danger Circle failure condition, and Centering vs Orientation errors"
    ],
    takeaways: [
      "Governing principle is Parallelism; no separate field book is kept",
      "Back-sighting is the most accurate method of orientation; orientation error causes greatest displacement",
      "Three-Point problem fails when occupied station lies on or near the Great / Danger Circle"
    ],
    order: 4,
    isFreePreview: true,
    downloadsCount: 2610,
    uploadedAt: "2026-10-11"
  },
  {
    id: "note-mod-05",
    moduleId: "mod-5",
    title: "Module 05: Levelling and Contouring (Complete PSC Rank File Note)",
    titleMalayalam: "ലെവലിംഗ് & കോണ്ടൂറിംഗ് (മാസ്റ്റർ നോട്ട്)",
    description: "In-depth notes on Dumpy level, Sopwith staff, Height of Instrument vs Rise & Fall methods, Inverted staff readings, Reciprocal levelling, Curvature & Refraction (-0.0673d²), and Contour characteristics.",
    readTime: "25 mins read",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    pdfNotesUrl: "/notes/module-05-levelling-and-contouring.pdf",
    pdfNotesTitle: "Module 05 - Levelling and Contouring.pdf",
    pdfSize: "43 KB PDF (10 Pages)",
    chapterOverview: [
      "Definitions: Level surface, Datum (MSL Mumbai High), Reduced Level (RL), Bench Marks (GTS, Permanent)",
      "Instruments: Dumpy, Tilting, Auto Level (pendulum compensator), Sopwith Staff (5 mm least count)",
      "Field Sights: Back Sight, Fore Sight, Intermediate Sight, Change Point; Two-Peg Collimation Test",
      "Reduction of Levels: Height of Instrument vs Rise and Fall methods & Arithmetical check formulas",
      "Inverted Staff Readings for bridge soffits & ceiling beams (recorded with negative sign)",
      "Curvature (-0.0785d²), Refraction (+0.0112d²), Combined (-0.0673d²), Reciprocal levelling, and Contours"
    ],
    takeaways: [
      "Rise and Fall method provides full mathematical check on Intermediate Sights",
      "Combined curvature and refraction correction: C = - 0.0673 d² (always subtractive)",
      "Contour lines cross ridge and valley lines at 90°; never cross except in overhanging cliff"
    ],
    order: 5,
    isFreePreview: true,
    downloadsCount: 2890,
    uploadedAt: "2026-10-11"
  },
  {
    id: "note-mod-06",
    moduleId: "mod-6",
    title: "Module 06: Theodolite, Tacheometry & Curves (Complete PSC Rank File Note)",
    titleMalayalam: "തിയോഡലൈറ്റ്, ടാക്കിയോമെട്രി & കർവുകൾ",
    description: "Transit Theodolite parts, least count 20\", Face Left/Right, Latitudes & Departures, Closing error, Gale's table, Tacheometry (k=100, C=0, Porro's lens), Circular curves (R=1719/D), and Rankine's deflection method.",
    readTime: "25 mins read",
    thumbnail: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    pdfNotesUrl: "/notes/module-06-theodolite-survey.pdf",
    pdfNotesTitle: "Module 06 - Theodolite, Tacheometry & Curves.pdf",
    pdfSize: "43 KB PDF (10 Pages)",
    chapterOverview: [
      "Transit Theodolite: Designated by lower plate diameter; 5 fundamental axes; Least count = 20\"",
      "Adjustments & Angle Measurement: Spire test, Repetition vs Reiteration, Face Left & Face Right",
      "Traversing: Latitude (l cos θ), Departure (l sin θ), Closing error e = √(ΣL² + ΣD²), Gale's table",
      "Tacheometry: Stadia principle, Multiplying constant k=100, Additive constant C=0 (Anallatic lens)",
      "Simple Circular Curves: Radius R, Tangent length T = R tan(Δ/2), Long chord C = 2R sin(Δ/2)",
      "Setting Out Curves: Rankine's tangential angle method (δ = 1718.9 c / R min), Two-theodolite method"
    ],
    takeaways: [
      "Mean of Face Left and Face Right eliminates collimation error, horizontal axis tilt, and index error",
      "Anallatic lens (convex lens by Porro) makes the additive constant exactly zero (C = 0)",
      "Degree of curve for 30m arc: R = 1718.9 / D; for 20m arc: R = 1145.9 / D"
    ],
    order: 6,
    isFreePreview: true,
    downloadsCount: 2750,
    uploadedAt: "2026-10-11"
  },
  {
    id: "note-mod-07",
    moduleId: "mod-7",
    title: "Module 07: Modern Survey Instruments (Total Station, GPS & GIS)",
    titleMalayalam: "ടോട്ടൽ സ്റ്റേഷൻ, ജി.പി.എസ് & ജി.ഐ.എസ്",
    description: "Modern surveying technologies: Electronic Distance Measurement (Tellurometer, Distomat, Geodimeter), Total Station (REM, MLM, Stake-out), GNSS/GPS constellations, NavIC (IRNSS), RTK CORS network, and GIS.",
    readTime: "25 mins read",
    thumbnail: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
    pdfNotesUrl: "/notes/module-07-modern-survey-instruments.pdf",
    pdfNotesTitle: "Module 07 - Modern Survey Instruments.pdf",
    pdfSize: "43 KB PDF (9 Pages)",
    chapterOverview: [
      "EDM Principles: Phase shift vs Pulse transit time; Microwave (Tellurometer), Infrared (Distomat)",
      "Corner-Cube Retro-Reflector & Prism Constant (-30 mm or 0 mm)",
      "Total Station: Dual-axis compensators, optical encoders, MLM, REM, Resection, PPM atmospheric correction",
      "Global Navigation Satellite Systems: GPS (24 satellites, 6 planes), GLONASS, Galileo, BeiDou",
      "India's NavIC / IRNSS: 7 satellites (3 GEO + 4 GSO), 1,500 km regional coverage around India",
      "Trilateration (min 4 satellites), DGPS, Real-Time Kinematic (RTK), Kerala CORS resurvey, Vector vs Raster GIS"
    ],
    takeaways: [
      "Total Station combines electronic theodolite + EDM + onboard microprocessor",
      "Minimum 4 satellites needed to determine 3D position (X, Y, Z) and receiver clock bias (Δt)",
      "Kerala falls primarily in UTM Zone 43 North (Zone 43N) with central meridian 75°E"
    ],
    order: 7,
    isFreePreview: true,
    downloadsCount: 2540,
    uploadedAt: "2026-10-11"
  },
  {
    id: "note-mod-08",
    moduleId: "mod-8",
    title: "Module 08: AutoCAD & CAD Commands (Complete PSC Rank File Note)",
    titleMalayalam: "ഓട്ടോകാഡ് & കമാൻഡുകൾ (മാസ്റ്റർ നോട്ട്)",
    description: "AutoCAD GUI, File extensions (.dwg, .dxf, .dwt, .bak), Coordinate systems (Absolute, Relative, Polar), Function keys (F1 to F12), Draw & Modify commands, OSNAP, Layers (Freeze vs Off, Defpoints), and Blocks.",
    readTime: "25 mins read",
    thumbnail: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    pdfNotesUrl: "/notes/module-08-autocad.pdf",
    pdfNotesTitle: "Module 08 - AutoCAD & CAD Commands.pdf",
    pdfSize: "42 KB PDF (9 Pages)",
    chapterOverview: [
      "AutoCAD Interface: Application menu, Ribbon, Command line, Status bar, File formats (.dwg, .dxf, .dwt, .bak)",
      "Coordinate Systems: WCS vs UCS; Absolute (X,Y), Relative Rectangular (@X,Y), Relative Polar (@D<A)",
      "Drawing Setup: UNITS, LIMITS, ZOOM (All, Extents, Window), PAN, REGEN, VIEWRES",
      "Draw Commands: Line, Polyline, Circle, Arc, Rectangle, Polygon (3-1024 sides), Ellipse, Hatch, Spline",
      "Modify Commands: Move, Copy, Rotate, Scale, Offset, Trim, Extend, Fillet (R=0 sharp corner), Chamfer, Explode",
      "Function Keys (F3 OSNAP, F8 Ortho, F10 Polar), Layers (Layer 0, Defpoints), Blocks (BLOCK vs WBLOCK)"
    ],
    takeaways: [
      "In AutoCAD default settings, 0° is East and angles are positive counter-clockwise",
      "Fillet with Radius R = 0 creates a clean, sharp 90° corner between lines",
      "Objects placed on Defpoints layer are visible on screen but NEVER plot on paper"
    ],
    order: 8,
    isFreePreview: true,
    downloadsCount: 2680,
    uploadedAt: "2026-10-11"
  },
  {
    id: "note-mod-09",
    moduleId: "mod-9",
    title: "Module 09: Workshop Calculation and Science (Complete PSC Rank File Note)",
    titleMalayalam: "വർക്ക്‌ഷോപ്പ് കാൽക്കുലേഷൻ & സയൻസ്",
    description: "SI Units, Kerala land unit conversions (1 Acre = 100 Cents = 43,560 sq ft, 1 Cent = 435.6 sq ft), 2D/3D Mensuration, Prismoidal formula for earthwork, Mechanics, Horsepower (Metric 735.5W), and Trigonometry.",
    readTime: "25 mins read",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    pdfNotesUrl: "/notes/module-09-workshop-calculation-and-science.pdf",
    pdfNotesTitle: "Module 09 - Workshop Calculation and Science.pdf",
    pdfSize: "38 KB PDF (9 Pages)",
    chapterOverview: [
      "Units & Measurements: SI base and derived units; Metric prefixes; Force (N), Work (J), Power (W)",
      "Kerala Cadastral Conversions: 1 Cent = 435.6 sq ft = 40.47 m²; 1 Acre = 100 Cents = 43,560 sq ft; 1 Hectare = 10,000 m²",
      "2D Mensuration: Triangles (Heron's formula), Quadrilaterals, Semi-circle perimeter = r(π+2) = (36/7)r, Ellipse",
      "3D Mensuration: Volume & TSA of Cubes, Cylinders, Cones, Spheres, Hemispheres, Frustums",
      "Earthwork Volumes: Prismoidal Formula (V = d/3 [A1+An+4Even+2Odd]), Prismoidal correction (-ve)",
      "Mechanics & Machines: Density, Specific gravity, Equations of motion, HP (Metric 735.5W), Levers, Trigonometry"
    ],
    takeaways: [
      "1 Acre = 100 Cents = 43,560 sq ft = 4,046.86 m²; 1 Cent = 435.6 sq ft = 40.47 m²",
      "1 Metric Horsepower = 735.5 Watts; 1 British Horsepower = 746 Watts",
      "Celsius and Fahrenheit thermometers read the exact same value at - 40° (- 40°C = - 40°F)"
    ],
    order: 9,
    isFreePreview: true,
    downloadsCount: 2470,
    uploadedAt: "2026-10-11"
  },
  {
    id: "note-mod-10",
    moduleId: "mod-10",
    title: "Module 10: Building Materials & Construction (KWA Tracer Master Note)",
    titleMalayalam: "ബിൽഡിംഗ് മെറ്റീരിയൽസ്, ഇറിഗേഷൻ & എസ്റ്റിമേഷൻ",
    description: "Building Stones, Bricks (Silica 50-60%, Alumina 20-30%, modular 190×90×90 mm), Cement (Bogue's compounds, setting times, soundness), Concrete grades (M20 RCC min), Masonry bonds, Irrigation (Δ=864B/D), and Highway geometry.",
    readTime: "25 mins read",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    pdfNotesUrl: "/notes/module-10-building-materials-and-construction.pdf",
    pdfNotesTitle: "Module 10 - Building Materials and Construction.pdf",
    pdfSize: "44 KB PDF (10 Pages)",
    chapterOverview: [
      "Building Stones: Geological, Physical, Chemical rock types; Mohs hardness scale (1 Talc to 10 Diamond)",
      "Bricks: Composition (Silica 50-60%, Alumina 20-30%), Modular size 190×90×90 mm, 500 bricks/m³, Compressive strength",
      "Cement & Mortar: Bogue's compounds (C3S, C2S, C3A, C4AF), Setting times (≥30 min, ≤600 min), Soundness (≤10 mm)",
      "Concrete: Abrams' law, Mix proportions (M15, M20, M25), Minimum grade for RCC = M20, Bulking of sand",
      "Construction & Masonry: Rankine's foundation depth, English vs Flemish bond, Queen closer, King/Queen post trusses",
      "Irrigation & Roads: Duty-Delta-Base period (Δ = 864B/D cm), Berms, Weirs vs Barrages, Camber, Superelevation e=v²/225R"
    ],
    takeaways: [
      "Modular brick size: 190 × 90 × 90 mm; 1 m³ brickwork requires exactly 500 modular bricks",
      "Minimum grade of concrete for structural RCC under IS 456 is M20 (1 : 1.5 : 3)",
      "Duty-Delta fundamental equation: Delta Δ = (864 × B) / D cm; English bond is strongest"
    ],
    order: 10,
    isFreePreview: true,
    downloadsCount: 3350,
    uploadedAt: "2026-10-11"
  }
];

function syncAll() {
  console.log('Syncing all 10 official study notes to databases & asset directories...\n');

  const targets = [
    path.resolve(__dirname, '..', 'data', 'database.json'),
    path.resolve(__dirname, '..', 'public', 'data', 'database.json'),
    path.resolve(__dirname, '..', 'dist', 'data', 'database.json'),
    path.resolve(__dirname, '..', 'android', 'app', 'src', 'main', 'assets', 'public', 'data', 'database.json')
  ];

  targets.forEach(dbPath => {
    if (fs.existsSync(dbPath)) {
      const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
      data.studyNotes = officialStudyNotes;
      fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`[UPDATED] ${dbPath} -> 10 Study Notes synced`);
    } else {
      console.warn(`[NOT FOUND] ${dbPath}`);
    }
  });

  // Copy PDFs from public/notes to dist/notes and android assets
  const sourceNotesDir = path.resolve(__dirname, '..', 'public', 'notes');
  const destDirs = [
    path.resolve(__dirname, '..', 'dist', 'notes'),
    path.resolve(__dirname, '..', 'android', 'app', 'src', 'main', 'assets', 'public', 'notes')
  ];

  const files = fs.readdirSync(sourceNotesDir).filter(f => f.endsWith('.pdf'));
  console.log(`\nCopying ${files.length} PDFs from public/notes to dist and android assets:`);

  destDirs.forEach(dest => {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    files.forEach(f => {
      fs.copyFileSync(path.resolve(sourceNotesDir, f), path.resolve(dest, f));
    });
    console.log(`[COPIED] ${files.length} PDFs to ${dest}`);
  });

  console.log('\n[SUCCESS] All 10 Study Notes synced everywhere successfully!');
}

syncAll();
