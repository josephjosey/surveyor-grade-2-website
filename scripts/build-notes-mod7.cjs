const { ModulePdfBuilder } = require('./create-module-pdf-engine.cjs');

async function buildModule7() {
  const builder = new ModulePdfBuilder({
    moduleNumber: 7,
    moduleTitle: "Modern Survey Instruments & Techniques",
    marks: "10 Marks",
    topics: "Electronic Distance Measurement (EDM Principles, Wave types: Tellurometer, Distomat, Geodimeter, Prism reflectors), Total Station (Components, Encoders, Dual-axis tilt sensor, Functions: REM, MLM, Stake-out, Atmospheric ppm corrections), Global Positioning System (GPS/GNSS: NAVSTAR, GLONASS, Galileo, BeiDou, NavIC/IRNSS), GPS Segments & Trilateration (4 satellites minimum, DGPS, RTK, CORS network), Geographical Information System (GIS: Vector vs Raster data, Coordinate systems WGS84 & UTM), Remote Sensing (EMR Spectrum, Spectral signatures, Active vs Passive sensors: LiDAR & RADAR), Aerial Photogrammetry (Scale, Relief displacement) & Kerala Digital Cadastre.",
    outputFilename: "module-07-modern-survey-instruments.pdf"
  });

  builder.addCoverPage();

  // CHAPTER 1
  builder.addSectionHeader("CHAPTER 1: ELECTRONIC DISTANCE MEASUREMENT (EDM)");
  builder.addParagraph("Electronic Distance Measurement (EDM) is the method of measuring linear distances indirectly by propagating electromagnetic waves between an instrument transmitter and a target reflector and measuring the transit time or phase difference.");

  builder.addSubSectionHeader("1.1 Principles of EDM Measurement");
  builder.addTable(
    ["EDM Method", "Operating Principle", "Governing Equation", "Typical Application"],
    [
      ["Pulse / Transit Time Method (Time of Flight)", "A short pulse of laser light is emitted, reflected from target, and returned. Elapsed transit time (t) is measured directly with high-speed electronic clock", "Distance D = (v · t) / 2\nwhere v = velocity of light in atmosphere (≈ 3 × 10⁸ m/s)", "Long-range military rangefinders, modern pulsed reflectorless total stations"],
      ["Phase Shift (Phase Comparison) Method", "Continuous wave of modulated electromagnetic radiation is transmitted. Phase difference (Δφ) between transmitted and received returned wave is measured", "Distance D = 1/2 · (n · λ + Δλ)\nwhere n = integer number of full wavelengths, λ = modulation wavelength", "Standard high-precision civil engineering EDM instruments and total stations"]
    ],
    [125, 175, 125, 75]
  );

  builder.addSubSectionHeader("1.2 Classification of EDM by Carrier Wave");
  builder.addTable(
    ["Instrument Type", "Carrier Wave Frequency / Wavelength", "Classic Example", "Operating Characteristics & Range"],
    [
      ["Microwave Systems", "Radio / Microwave frequencies: 3 to 10 GHz (λ = 3 to 10 cm)", "Tellurometer (invented by Wadley, 1957)", "Long range (up to 50 km); requires an active master station and an active remote instrument station with operator at each end; affected by humidity"],
      ["Infrared Systems", "Near Infrared radiation: Gallium Arsenide (GaAs) diode (λ = 0.85 to 0.93 µm)", "Distomat (Wild DI-10, DI-50)", "Medium range (up to 3 to 5 km); compact, low power consumption; uses passive glass corner-cube prism reflectors; standard in modern total stations"],
      ["Visible Light Systems", "Visible spectrum: He-Ne gas laser or tungsten/xenon lamp (λ = 0.5 to 0.7 µm)", "Geodimeter (invented by Bergstrand, 1947)", "Medium to long range (up to 25 km); high precision; affected by atmospheric haze and fog"]
    ],
    [105, 135, 105, 155]
  );

  builder.addSubSectionHeader("1.3 Corner-Cube Retro-Reflectors");
  builder.addBulletPoints([
    { bold: "Retro-Reflector Principle", text: "A specialized glass prism cut from the corner of a solid glass cube with three mutually perpendicular polished reflecting facets (at 90° to each other). It possesses the unique property that an incident ray of light is reflected back strictly PARALLEL to the incoming direction, regardless of the angle at which the prism faces the instrument!" },
    { bold: "Prism Constant", text: "Due to the difference between the physical center of the prism mount and the virtual optical reflection point inside the glass, an instrument offset known as the PRISM CONSTANT (typically -30 mm for standard round prisms or 0 mm for flat zero-constant prisms) must be entered into the EDM." }
  ]);

  builder.addFocusBox("EDM HISTORICAL INSTRUMENTS IN PSC", "• Tellurometer: Uses MICROWAVE carrier waves (invented by Wadley, South Africa).\n• Geodimeter: Uses VISIBLE LIGHT (invented by Bergstrand, Sweden).\n• Distomat: Uses INFRARED waves (GaAs semiconductor diode).");

  // CHAPTER 2
  builder.addSectionHeader("CHAPTER 2: TOTAL STATION: ARCHITECTURE & FUNCTIONAL CAPABILITIES");
  builder.addParagraph("A Total Station is a modern electronic surveying instrument that integrates an electronic theodolite, an EDM unit, an onboard microprocessor computer, and electronic data storage into a single compact housing.");

  builder.addSubSectionHeader("2.1 Key Internal Components");
  builder.addBulletPoints([
    { bold: "1. Electronic Theodolite", text: "Measures horizontal and vertical angles electronically using optical rotary encoders (Absolute Encoders or Incremental Encoders) with photodiode detectors. Angular least count is typically 1 second (1\") or 0.5\"." },
    { bold: "2. Coaxial EDM Unit", text: "The EDM transmitting and receiving optics are mounted coaxially along the optical line of sight of the telescope, ensuring that the target aimed through the cross-hairs is exactly where the EDM beam measures." },
    { bold: "3. Dual-Axis Tilt Sensor (Compensator)", text: "A liquid bubble or pendulum sensor that monitors residual leveling tilt in both longitudinal and transverse directions simultaneously and applies instant mathematical corrections to measured angles." },
    { bold: "4. Microprocessor & Memory", text: "Computes coordinates, applies atmospheric and instrumental corrections, stores thousands of point records on internal flash memory or SD card, and communicates via Bluetooth or USB." }
  ]);

  builder.addSubSectionHeader("2.2 Total Station Built-In Application Programs");
  builder.addTable(
    ["Program Name", "Operational Purpose", "Field Civil Engineering Application"],
    [
      ["Missing Line Measurement (MLM)", "Measures horizontal distance, slope distance, height difference, and bearing between two remote target points A and B without setting up instrument at either point!", "Finding width of rivers, distance between building corners across obstacles"],
      ["Remote Elevation Measurement (REM)", "Measures the vertical height of an inaccessible overhead point (overhead power line, bridge deck, top of tower, tree crown) directly above a grounded prism", "Checking minimum clearance of high-tension electrical cables, bridge headroom"],
      ["Resection", "Determines the 3D coordinates (X, Y, Z) of the station occupied by the total station by sighting two or more known reference control points", "Setting up total station anywhere on a construction site without finding a known ground peg"],
      ["Stake-Out / Setting Out", "Guides the rodman in real-time to exact design coordinate positions on the ground by displaying 'Go Forward / Back' and 'Turn Left / Right' prompts", "Laying out building foundation grid, pile locations, road centerlines"],
      ["Area & Perimeter Calculation", "Computes the true surface area and perimeter of any enclosed polygon in real time by sighting its boundary corners consecutively", "Instant land parcel area calculation for cadastral settlement"]
    ],
    [125, 215, 160]
  );

  builder.addSubSectionHeader("2.3 Atmospheric Corrections (PPM)");
  builder.addParagraph("The velocity of light in the atmosphere depends on ambient temperature and barometric pressure. EDM distance measurements must be corrected by entering temperature and pressure into the total station as Parts Per Million (PPM).");
  builder.addFormulaBox("ATMOSPHERIC CORRECTION FORMULA", [
    "PPM Correction = 281.8 - [ (0.29065 × P) / (1 + 0.00366 × T) ]",
    "where P = Atmospheric pressure in hPa (mbar), T = Temperature in °C",
    "Rule of Thumb: A 1°C temperature error produces approx 1 ppm error (1 mm per km). A 3.5 hPa pressure error produces 1 ppm error."
  ]);

  // CHAPTER 3
  builder.addSectionHeader("CHAPTER 3: GLOBAL NAVIGATION SATELLITE SYSTEMS (GNSS) & GPS");
  builder.addParagraph("GNSS is the generic standard term for satellite navigation systems that provide autonomous geo-spatial positioning with global coverage.");

  builder.addSubSectionHeader("3.1 World GNSS Constellations Comparison");
  builder.addTable(
    ["System Name", "Country / Organization", "Full Constellation Satellites", "Orbital Planes & Altitude", "Status / Operational Coverage"],
    [
      ["NAVSTAR GPS", "USA (Department of Defense)", "24 operational + spares", "6 orbital planes at 20,200 km; 55° inclination; 12h orbit period", "Fully operational worldwide since 1995"],
      ["GLONASS", "Russia (Roscosmos)", "24 operational satellites", "3 orbital planes at 19,100 km; 64.8° inclination", "Fully operational worldwide"],
      ["Galileo", "European Union (ESA)", "30 satellites (24 active + 6 spares)", "3 orbital planes at 23,222 km; 56° inclination", "Fully operational civilian system worldwide"],
      ["BeiDou (BDS-3)", "China", "35 satellites (GEO, IGSO, MEO)", "Mixed orbits: 21,500 km MEO + geostationary", "Fully operational global system (BDS-3 completed 2020)"],
      ["NavIC (IRNSS)", "India (ISRO)", "7 operational satellites (3 GEO + 4 GSO)", "Geostationary (at 32.5°E, 83°E, 129.5°E) + Geosynchronous at 36,000 km altitude", "Regional coverage: India and extending 1,500 km beyond national borders"]
    ],
    [95, 115, 105, 105, 80]
  );

  builder.addFocusBox("INDIA'S NavIC / IRNSS SPECIFICATIONS", "• NavIC = Navigation with Indian Constellation (officially Indian Regional Navigation Satellite System - IRNSS).\n• Developed by ISRO.\n• Constellation consists of 7 satellites: 3 in Geostationary Orbit (GEO) and 4 in inclined Geosynchronous Orbit (GSO).\n• Covers mainland India and an area extending up to 1,500 km around its borders.\n• Operates on Dual Frequencies: L5 (1176.45 MHz) and S-band (2492.028 MHz).");

  builder.addSubSectionHeader("3.2 The Three GPS Segments");
  builder.addBulletPoints([
    { bold: "1. Space Segment", text: "Consists of the constellation of 24 to 32 satellites orbiting Earth at 20,200 km. Arranged in 6 orbital planes inclined at 55° to the equator with 4 or more satellites in each plane, ensuring at least 4 to 8 satellites are visible from any point on Earth at all times." },
    { bold: "2. Control Segment", text: "Consists of a global network of ground tracking stations that monitor satellite orbits and clocks. Comprises: (a) Master Control Station (MCS) located at Schriever Space Force Base, Colorado, USA; (b) Alternate MCS; (c) 16 Monitor Stations; (d) 12 Ground Antennas." },
    { bold: "3. User Segment", text: "Consists of all military and civilian GPS receivers, antennas, data processors, and surveyors operating equipment on Earth." }
  ]);

  // CHAPTER 4
  builder.addSectionHeader("CHAPTER 4: GPS POSITIONING PRINCIPLES & SURVEYING METHODS");
  builder.addParagraph("GPS receivers determine their coordinates on Earth using the mathematical principle of TRILATERATION.");

  builder.addSubSectionHeader("4.1 Principle of Satellite Trilateration");
  builder.addParagraph("To determine a 3-dimensional position (X, Y, Z / Latitude, Longitude, Height), the distances (pseudo-ranges) from known satellite positions are measured.");
  builder.addBulletPoints([
    { bold: "Minimum 4 Satellites Required", text: "Although 3 intersecting spheres from 3 satellites pinpoint an X, Y, Z location, a FOURTH satellite is MANDATORY to solve for the receiver clock bias error (Δt) relative to atomic satellite clocks! Four equations are solved simultaneously for 4 unknowns: X, Y, Z, and Δt." },
    { bold: "Pseudo-Range vs Carrier Phase", text: "Pseudo-range measurement uses coarse-acquisition (C/A) code timing (meter-level accuracy). Carrier phase tracking measures the phase of the incoming L1/L2 microwave carrier waves (millimeter-level accuracy, essential for surveying)." }
  ]);

  builder.addSubSectionHeader("4.2 Differential GPS (DGPS) & Real-Time Kinematic (RTK)");
  builder.addTable(
    ["GPS Survey Method", "Operating Technique & Hardware", "Accuracy Achieved", "Field Civil / Surveying Application"],
    [
      ["Static GPS Surveying", "Two or more dual-frequency receivers observe satellites simultaneously for 1 to 2 hours; raw carrier phase data post-processed", "Highest precision: 3 to 5 mm + 0.5 ppm", "National geodetic control networks, primary baseline establishment, crustal deformation monitoring"],
      ["Rapid Static", "Shorter observation period (10 to 20 minutes) per station on shorter baselines (< 15 km)", "Sub-centimeter: 5 to 10 mm + 1 ppm", "Densifying control networks, cadastral boundary control"],
      ["Differential GPS (DGPS)", "Base receiver at known coordinates computes pseudo-range corrections and transmits them to rover", "Sub-metre: 0.5 to 1.5 m", "GIS data collection, hydrographic navigation, asset mapping"],
      ["Real-Time Kinematic (RTK)", "Base station on known control point transmits carrier phase corrections via UHF radio or cellular internet (NTRIP) to Rover in real time", "Centimeter precision: 10 mm + 1 ppm in REAL TIME (under 2 seconds per point!)", "Cadastral land re-survey, road setting out, topography, drone ground control"],
      ["CORS Network (Continuously Operating Reference Stations)", "Permanent network of GNSS reference stations continuously streaming corrections via internet", "Centimeter RTK accuracy anywhere within the network without setting up a local base station!", "Digital land records survey in Kerala (National Land Record Modernization Programme)"]
    ],
    [105, 145, 105, 145]
  );

  builder.addFocusBox("CORS NETWORK IN KERALA RESURVEY", "In Kerala, the modern Digital Land Resurvey ('Ente Bhoomi') utilizes a statewide CORS network set up by the Department of Survey and Land Records in collaboration with Survey of India. RTK rovers receive corrections via internet SIM cards, eliminating the need for private base stations!");

  // CHAPTER 5
  builder.addSectionHeader("CHAPTER 5: GEOGRAPHICAL INFORMATION SYSTEM (GIS)");
  builder.addParagraph("A Geographic Information System (GIS) is a computer-based framework designed to capture, store, manipulate, analyze, manage, and present all types of geographically referenced (spatial) data.");

  builder.addSubSectionHeader("5.1 The Two Fundamental Spatial Data Models: Vector vs Raster");
  builder.addTable(
    ["Parameter", "Vector Data Model", "Raster Data Model"],
    [
      ["Data Representation", "Represents geographic features using explicit geometric coordinates (X, Y): Points, Lines, Polygons", "Represents geographic space as a continuous regular grid of square cells (pixels), each cell having a numeric value"],
      ["Point Feature", "Single X, Y coordinate pair (e.g. well, survey station, electric pole, water meter)", "A single grid pixel cell"],
      ["Line Feature", "Ordered series of connected X, Y vertices (e.g. road, railway, water supply pipeline, river)", "A contiguous chain of connected grid cells"],
      ["Polygon Feature", "Closed loop of coordinates enclosing an area (e.g. survey parcel, lake, building footprint)", "A contiguous cluster of grid cells sharing the same cell value"],
      ["File Formats", "Shapefile (.shp), GeoJSON, DWG/DXF, KML, Geodatabase", "TIFF/GeoTIFF (.tif), JPEG, DEM (Digital Elevation Model), IMG"],
      ["Best Suited For", "Discrete features with well-defined legal boundaries (cadastral land records, utilities, road networks)", "Continuous surfaces with gradational boundaries (elevation, slope, rainfall, temperature, satellite imagery)"]
    ],
    [105, 195, 200]
  );

  builder.addSubSectionHeader("5.2 Coordinate Reference Systems: WGS84 vs UTM");
  builder.addBulletPoints([
    { bold: "WGS 84 (World Geodetic System 1984)", text: "A global 3D geocentric terrestrial reference datum used by GPS. Coordinates are expressed in angular units: Latitude (degrees N/S) and Longitude (degrees E/W)." },
    { bold: "UTM (Universal Transverse Mercator)", text: "A conformal map projection that projects Earth's curved ellipsoidal surface onto a flat 2D plane. Earth is divided into 60 longitudinal zones, each 6° wide (numbered 1 to 60 from 180°W eastward). Coordinates are Eastings and Northings in METRES." },
    { bold: "Kerala UTM Zones", text: "The state of Kerala lies geographically between 74°52'E and 77°22'E longitude, falling primarily in UTM ZONE 43N (central meridian 75°E) with small eastern fringe areas in UTM ZONE 44N (central meridian 81°E)." }
  ]);

  builder.addFocusBox("KERALA UTM ZONE IN PSC", "• Kerala falls primarily in UTM ZONE 43 NORTH (Zone 43N).\n• Central meridian of Zone 43 is 75° East.\n• Units of UTM coordinates are METRES (Northing and Easting).");

  // CHAPTER 6
  builder.addSectionHeader("CHAPTER 6: REMOTE SENSING & AERIAL PHOTOGRAMMETRY");
  builder.addParagraph("Remote Sensing is the art and science of acquiring information about Earth's surface features from a distance without coming into physical contact with them, utilizing reflected or emitted electromagnetic radiation.");

  builder.addSubSectionHeader("6.1 Electromagnetic Radiation (EMR) Spectrum & Sensors");
  builder.addTable(
    ["Spectral Region", "Wavelength Range", "Remote Sensing Characteristic & Feature Response"],
    [
      ["Visible: Blue", "0.4 to 0.5 µm", "Water penetration, coastal mapping, atmospheric smoke"],
      ["Visible: Green", "0.5 to 0.6 µm", "Green vegetation reflectance peak, cultural features"],
      ["Visible: Red", "0.6 to 0.7 µm", "Chlorophyll absorption band; bare soil vs vegetation discrimination"],
      ["Near Infrared (NIR)", "0.7 to 1.3 µm", "Extremely high reflectance by healthy green vegetation spongy mesophyll; completely absorbed by water (water appears jet black!)"],
      ["Middle / Shortwave IR (SWIR)", "1.3 to 3.0 µm", "Soil and vegetation moisture monitoring; rock mineral mapping"],
      ["Thermal Infrared (TIR)", "8.0 to 14.0 µm", "Measures emitted radiant heat; night imaging, sea surface temperature"],
      ["Microwave (RADAR)", "1.0 mm to 1.0 m", "All-weather day/night capability; penetrates clouds, rain, and dry soil"]
    ],
    [115, 115, 270]
  );

  builder.addSubSectionHeader("6.2 Active Sensors vs Passive Sensors");
  builder.addBulletPoints([
    { bold: "Passive Sensors", text: "Rely on natural solar radiation reflected by the Earth or thermal energy emitted by Earth (e.g. optical cameras, multispectral scanners: IRS LISS-IV, Landsat, Sentinel-2). Cannot operate at night (except thermal)." },
    { bold: "Active Sensors", text: "Provide their own artificial source of electromagnetic illumination: emits a pulse and detects the backscattered return signal (e.g. RADAR, LiDAR, Sonar). Can operate in total darkness and penetrate cloud cover." },
    { bold: "LiDAR (Light Detection and Ranging)", text: "Active optical sensor emitting rapid laser pulses (thousands of pulses/sec) to generate high-density 3D point clouds. Capable of penetrating forest canopy to map bare earth ground topography (DEM) accurately!" }
  ]);

  builder.addSubSectionHeader("6.3 Aerial Photogrammetry: Scale & Relief Displacement");
  builder.addFormulaBox("PHOTOGRAMMETRY CORE FORMULAS", [
    "Scale of Vertical Aerial Photograph: S = f / (H - h)",
    "where f = focal length of camera lens, H = flying height of aircraft above datum, h = ground elevation",
    "",
    "Relief Displacement (d) of a vertical feature of height h:",
    "d = (r · h) / H",
    "where r = radial distance from principal point to top of object on photo, H = flying height above object base",
    "Relief displacement is always RADIAL from the principal point!"
  ]);

  builder.addSubSectionHeader("6.4 Drone / UAV Surveying in Digital Cadastral Mapping");
  builder.addParagraph("Unmanned Aerial Vehicles (UAVs) equipped with high-resolution digital cameras and RTK/PPK GNSS receivers have revolutionized large-scale cadastral and engineering surveys.");
  builder.addBulletPoints([
    { bold: "Flight Overlap Standards", text: "To generate accurate stereoscopic 3D models and orthomosaics, photographs require high overlap: Forward Overlap (End lap) = 70% to 80%; Side Overlap (Lateral lap) = 60% to 70%." },
    { bold: "Ground Control Points (GCPs)", text: "Pre-marked high-contrast targets on ground whose 3D coordinates are established with millimeter accuracy using DGPS / RTK to anchor and georeference the drone imagery." },
    { bold: "Orthomosaic", text: "A geometrically corrected aerial photograph composed of multiple stitched images where terrain relief displacement and camera tilt are completely rectified. It has a uniform scale throughout, allowing true distances and areas to be measured directly like a map!" },
    { bold: "Digital Elevation Model (DEM) & DSM", text: "Digital Surface Model (DSM) captures natural terrain plus all elevated features (trees, roofs). Digital Terrain Model (DTM / bare earth DEM) filters out vegetation and buildings to show true ground surface." }
  ]);

  // CHAPTER 7
  builder.addSectionHeader("CHAPTER 7: PSC SOLVED NUMERICAL MODELS");

  builder.addWorkedExample(
    "Scale of Vertical Aerial Photograph",
    "An aerial camera with a focal length of 150 mm takes a vertical photograph from an aircraft flying at an altitude of 3,000 m above Mean Sea Level. What is the scale of the photograph over terrain having an average elevation of 600 m?",
    [
      "Focal length f = 150 mm = 0.15 m",
      "Flying height H = 3,000 m; Terrain height h = 600 m",
      "Net Flying Height (H - h) = 3,000 - 600 = 2,400 m",
      "Scale S = f / (H - h) = 0.15 / 2,400 = 1 / (2,400 / 0.15) = 1 / 16,000"
    ],
    "1 : 16,000"
  );

  builder.addWorkedExample(
    "Relief Displacement Calculation",
    "A transmission tower 50 m high is photographed from an aircraft flying at a height of 2,000 m above the base of the tower. On the photograph, the top of the tower is located at a radial distance of 80 mm from the principal point. Calculate the relief displacement.",
    [
      "Height of tower h = 50 m",
      "Flying height H = 2,000 m",
      "Radial distance r = 80 mm",
      "Formula: Relief Displacement d = (r · h) / H",
      "d = (80 mm × 50 m) / 2,000 m = 4,000 / 2,000 = 2.0 mm"
    ],
    "2.0 mm"
  );

  builder.addWorkedExample(
    "Atmospheric PPM Correction",
    "A total station is measuring a long baseline distance of 2,500 m. If the atmospheric PPM correction is calculated to be + 20 ppm, what is the corrected distance?",
    [
      "Measured distance = 2,500 m",
      "1 ppm = 1 mm per 1,000 m = 1 × 10⁻⁶",
      "Correction = 2,500 m × (+ 20 × 10⁻⁶) = + 0.050 m = + 50 mm",
      "Corrected Distance = 2,500 m + 0.050 m = 2,500.050 m"
    ],
    "2,500.050 m"
  );

  // CHAPTER 8
  builder.addSectionHeader("CHAPTER 8: KERALA PSC 50 RAPID-FIRE ONE-LINERS & EXAM VAULT");

  builder.addOneLiners("EDM & Total Station", [
    { q: "Tellurometer utilizes which carrier wave", a: "Microwaves (Radio frequency 3 GHz)." },
    { q: "Geodimeter utilizes which carrier wave", a: "Visible light waves." },
    { q: "Modern Total Stations use which carrier wave", a: "Infrared waves (GaAs diode)." },
    { q: "Prism reflecting light parallel to incident path", a: "Corner-cube retro-reflector." },
    { q: "Program to measure distance between two remote points", a: "Missing Line Measurement (MLM)." },
    { q: "Program to find height of inaccessible overhead wire", a: "Remote Elevation Measurement (REM)." },
    { q: "Program to determine occupied station coordinates from known points", a: "Resection." },
    { q: "Atmospheric correction in total station is entered as", a: "PPM (Parts Per Million)." },
    { q: "Sensor that monitors total station horizontal and vertical tilt", a: "Dual-axis compensator." },
    { q: "Angular reading system in electronic theodolite", a: "Optical Rotary Encoders (Absolute/Incremental)." }
  ]);

  builder.addOneLiners("GPS & GNSS", [
    { q: "Minimum number of GPS satellites for 3D position", a: "4 satellites (X, Y, Z, and clock bias Δt)." },
    { q: "Number of satellites in full GPS constellation", a: "24 operational satellites in 6 orbital planes." },
    { q: "Altitude of GPS satellite orbits", a: "20,200 km (Semi-synchronous 12h orbit)." },
    { q: "Master Control Station of GPS is located at", a: "Schriever Space Force Base, Colorado, USA." },
    { q: "Russian satellite navigation constellation", a: "GLONASS (24 satellites)." },
    { q: "European Union satellite navigation system", a: "Galileo (30 satellites)." },
    { q: "India's regional satellite navigation system", a: "NavIC (IRNSS - 7 satellites)." },
    { q: "Number of Geostationary satellites in NavIC", a: "3 Geostationary (GEO) and 4 Geosynchronous (GSO)." },
    { q: "GPS technique giving centimeter accuracy in real time", a: "Real-Time Kinematic (RTK)." },
    { q: "Network of permanent GPS base stations in Kerala resurvey", a: "CORS (Continuously Operating Reference Stations)." }
  ]);

  builder.addOneLiners("GIS & Remote Sensing", [
    { q: "Spatial data representing points, lines, and polygons", a: "Vector Data." },
    { q: "Spatial data representing continuous pixel grid cells", a: "Raster Data." },
    { q: "UTM zone covering majority of Kerala", a: "UTM Zone 43 North (Central meridian 75°E)." },
    { q: "WGS 84 datum expresses coordinates in", a: "Latitude and Longitude (Angular degrees)." },
    { q: "Sensor having its own source of energy (e.g. RADAR, LiDAR)", a: "Active Sensor." },
    { q: "Sensor relying on solar radiation", a: "Passive Sensor." },
    { q: "Spectral band where healthy green vegetation reflects maximum", a: "Near Infrared (NIR) band." },
    { q: "Water bodies appear which colour in NIR imagery", a: "Jet Black (complete absorption of NIR)." },
    { q: "Relief displacement on vertical aerial photo is radial from", a: "Principal Point (Center of photo)." },
    { q: "Scale of vertical aerial photograph formula", a: "S = f / (H - h)." },
    { q: "Forward overlap (end lap) in aerial photographic surveying", a: "60% to 80% (standard 60-70%)." },
    { q: "Side overlap (lateral lap) in aerial photography", a: "25% to 30% for planes, 60% for drones." },
    { q: "Rectified aerial photograph with uniform scale throughout", a: "Orthophoto / Orthomosaic." },
    { q: "Light detection sensor creating high-density 3D points", a: "LiDAR." },
    { q: "Indian remote sensing satellite series", a: "IRS (Indian Remote Sensing) / Cartosat / EOS." }
  ]);

  builder.addSubSectionHeader("Modern Survey Instruments Revision Checklist Matrix");
  builder.addTable(
    ["Instrument / Technology", "Underlying Technology / Principle", "Kerala PSC Key Specification"],
    [
      ["Tellurometer", "Microwaves (Radio frequency 3 GHz)", "Wadley (1957); active master and remote stations"],
      ["Geodimeter", "Visible Light (He-Ne laser/lamp)", "Bergstrand (1947); first commercial EDM"],
      ["Distomat", "Near Infrared (GaAs semiconductor)", "Standard EDM unit inside modern Total Stations"],
      ["Total Station Functions", "REM, MLM, Stakeout, Resection", "Dual-axis tilt sensor; optical rotary encoders (1\" L.C.)"],
      ["GPS Constellation", "24 satellites in 6 planes (20,200 km)", "NAVSTAR (USA); min 4 satellites for 3D fix + clock bias"],
      ["NavIC / IRNSS", "7 satellites (3 GEO + 4 GSO)", "Indian regional navigation system by ISRO (1500 km range)"],
      ["DGPS & RTK", "Differential carrier phase correction", "RTK gives real-time cm-level accuracy; used in CORS network"],
      ["Vector vs Raster GIS", "Explicit (X,Y) vs Pixel Grid Cells", "Vector for parcels/lines; Raster for DEM/sat imagery"],
      ["UTM Projection", "Kerala primarily in UTM Zone 43N", "Central meridian 75°E; coordinates in Eastings/Northings (m)"],
      ["Aerial Photogrammetry", "Relief displacement d = r · h / H", "Scale S = f / (H - h); displacement is radial from principal point"]
    ],
    [125, 175, 200]
  );

  return await builder.finish();
}

async function runBuild() {
  console.log('Generating Module 07 PDF...');
  const res = await buildModule7();
  console.log(`Module 07 Complete! Pages: ${res.totalPages}`);
}

runBuild().catch(console.error);
