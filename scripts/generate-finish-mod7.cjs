const fs = require('fs');
const path = require('path');

const dbPath = path.resolve('data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

function getTemplateMask(str) {
  let s = str.toLowerCase();
  s = s.replace(/\d+(?:\.\d+)?/g, '<NUM>');
  s = s.replace(/['"][a-z]['"]/g, '<VAR>');
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

const existingMasks = new Set(db.bankQuestions.map(q => getTemplateMask(q.question)));
const existingIds = new Set(db.bankQuestions.map(q => q.id));

console.log('Existing unique masks before Mod 7:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-fin-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-c${c++}`;
  }

  const qObj = {
    id: id,
    moduleId: modId,
    moduleNumber: modNum,
    question: item.q,
    options: item.opts,
    correctOptionIndex: item.ans,
    explanation: item.exp,
    rankerTip: item.tip,
    topic: item.top || defaultTopic,
    type: 'pyq',
    examName: 'Kerala PSC Surveyor Gr. II / Land Records',
    year: 2024,
    createdAt: '2026-10-11T16:15:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 145 DISTINCT QUESTIONS FOR MODULE 7 (Total Station, GNSS/GPS, GIS, Hydrographic Survey)
const m7Questions = [
  // --- TOTAL STATION & EDM ---
  {
    q: 'What type of sensor is incorporated in a modern Total Station to automatically sense and correct for physical instrument tilt in both longitudinal and transverse directions?',
    opts: ['Dual-axis electrolytic or optoelectronic compensator', 'Gyroscopic stabilizer', 'Magnetic fluxgate compass', 'Pneumatic damper'],
    ans: 0,
    exp: 'A dual-axis tilt compensator monitors inclinations along both the line of sight and trunnion axis, applying electronic corrections to horizontal and vertical angles in real time.',
    tip: 'Dual-axis compensator senses tilt along both axes and automatically corrects angular readings.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'What is the optical operating principle of the cube-corner retroreflector prism used with Total Stations?',
    opts: ['Internal reflection from three mutually perpendicular reflective faces directs the beam back strictly parallel to the incoming path', 'Diffraction grating splits light into spectral colors', 'Refraction through a convex lens focuses rays on a focal plane', 'Polarization filters rotate light waves by 90 degrees'],
    ans: 0,
    exp: 'A cube-corner prism has three mutually perpendicular internal reflecting faces. Any incoming light ray undergoes triple reflection and exits along a path strictly parallel to the incoming beam.',
    tip: 'Cube-corner prism reflects incoming EDM light back exactly parallel to the incoming path.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'Why does a Total Station prism have an inherent prism constant (such as -30 mm)?',
    opts: ['Because the optical apex of the glass prism does not coincide physically with the vertical plumb line of the prism holder mounting thread', 'Because glass slows down the speed of light', 'To compensate for atmospheric humidity', 'Because the laser beam expands with distance'],
    ans: 0,
    exp: 'The theoretical reflection point within the glass prism is physically offset from the vertical plumb axis of the prism pole mounting adapter, necessitating a calibration offset constant.',
    tip: 'Prism constant arises because the optical center of the prism does not coincide with the mechanical mounting axis.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'In EDM distance measurement, what happens to the velocity of the modulated electromagnetic light wave as it travels through atmospheric air compared to a vacuum?',
    opts: ['Its velocity decreases depending on ambient air temperature, pressure, and humidity', 'Its velocity increases due to atmospheric refraction', 'Its velocity remains strictly identical to the speed of light in vacuum', 'Its velocity fluctuates with the earth magnetic field'],
    ans: 0,
    exp: 'The velocity of light in air is v = c / n, where n is the refractive index of air (n > 1). As temperature, pressure, and humidity change, n varies, requiring ppm corrections.',
    tip: 'Light travels slower in air than in vacuum (v = c / n); ppm correction accounts for this.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'In Total Station operations, what does the atmospheric correction unit "ppm" stand for?',
    opts: ['Parts per million (millimeters of correction per kilometer of distance)', 'Pulses per minute', 'Phase precision measurement', 'Prism point marker'],
    ans: 0,
    exp: 'ppm stands for parts per million. A correction of 1 ppm equals 1 mm per 1,000,000 mm (i.e., 1 mm per 1 km of measured slope distance).',
    tip: '1 ppm = 1 mm correction per 1 km of measured distance.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'Which two atmospheric parameters must be entered into a Total Station before starting high-precision EDM distance measurements?',
    opts: ['Ambient temperature and atmospheric barometric pressure', 'Relative humidity and wind speed', 'Solar radiation and cloud cover', 'Magnetic declination and altitude'],
    ans: 0,
    exp: 'Atmospheric pressure and dry-bulb temperature have the most significant impact on the refractive index of air, dictating the ppm atmospheric velocity correction.',
    tip: 'Temperature and barometric pressure are entered to apply the atmospheric ppm correction.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'What is the primary difference between phase-shift EDM measurement and pulsed time-of-flight EDM measurement in a Total Station?',
    opts: ['Phase-shift measures the phase angle difference of continuous modulated waves, whereas pulsed EDM measures the travel time of discrete high-energy laser pulses', 'Phase-shift uses sound waves while pulsed uses radio waves', 'Phase-shift works without reflectors while pulsed requires prisms', 'Pulsed EDM is restricted to distances under 5 meters'],
    ans: 0,
    exp: 'Phase-shift EDMs emit continuous waves modulated at multiple frequencies and compute distance from phase differences; pulsed EDMs measure the round-trip transit time (t) of laser pulses: d = c*t/2.',
    tip: 'Phase-shift measures phase difference of continuous waves; Pulsed measures travel time of discrete pulses.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'Which onboard program of a Total Station allows determining the unknown coordinates of the instrument station by sighting two or more known control benchmarks?',
    opts: ['Resection (free stationing)', 'Remote Elevation Measurement (REM)', 'Missing Line Measurement (MLM)', 'Stake-out'],
    ans: 0,
    exp: 'Resection (or Free Stationing) computes the coordinates and orientation of an arbitrarily placed Total Station by observing angles and distances to two or more known control points.',
    tip: 'Resection calculates unknown instrument station coordinates from sightings to known control points.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'Which onboard function of a Total Station is used to determine the height of an overhead high-tension electric cable where a prism cannot be physically placed?',
    opts: ['Remote Elevation Measurement (REM)', 'Missing Line Measurement (MLM)', 'Resection', 'Area calculation'],
    ans: 0,
    exp: 'In REM, a prism is placed directly below the overhead object on the ground; after measuring the base distance, tilting the telescope up to the object gives its height and elevation.',
    tip: 'REM (Remote Elevation Measurement) measures heights of inaccessible overhead points.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'Which onboard function of a Total Station calculates the horizontal distance, slope distance, and gradient between two remote target points without occupying either point?',
    opts: ['Missing Line Measurement (MLM)', 'Remote Elevation Measurement (REM)', 'Free stationing', 'Inverse traverse'],
    ans: 0,
    exp: 'MLM (Missing Line Measurement) measures the vector (horizontal distance, slope distance, height difference, and azimuth) between two target points sighted from the instrument.',
    tip: 'MLM computes distance and slope between two target points without occupying them.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'In setting out construction works using a Total Station, what is the "Stake-out" mode used for?',
    opts: ['Guiding the rodman to stake ground pegs at pre-calculated design coordinate positions', 'Measuring the boundary area of a polygon', 'Downloading raw coordinate points to a flash drive', 'Measuring the height of the instrument tripod'],
    ans: 0,
    exp: 'Stake-out mode compares design coordinates with current measured positions, displaying the horizontal angle to turn and distance to move forward/backward.',
    tip: 'Stake-out guides the rodman to exact design coordinate locations on the ground.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'What is reflectorless EDM measurement in modern Total Stations?',
    opts: ['Measuring distances directly to natural object surfaces (concrete, rock, brick) using a narrow focused visible laser without a reflecting prism', 'Measuring distances by sound echo reflection', 'Measuring distances using radio triangulation', 'Measuring angles without optics'],
    ans: 0,
    exp: 'Reflectorless EDM uses a collimated visible laser diode to measure distances directly against natural surfaces without requiring a retroreflector prism.',
    tip: 'Reflectorless EDM measures directly to natural surfaces without needing a prism.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'What is the tracking mode (coarse tracking) in a Total Station EDM used for?',
    opts: ['Rapid continuous distance updates (several times per second) for moving prism poles during stake-out, at slightly reduced precision', 'Sub-millimeter calibration in laboratory baselines', 'Measuring through heavy fog', 'Astronomical azimuth determination'],
    ans: 0,
    exp: 'Tracking mode updates distances every 0.1 to 0.3 seconds to track a moving prism pole during stake-out, trading off the extreme precision of fine mode for speed.',
    tip: 'Tracking mode offers rapid continuous distance measurement for moving rodmen during stake-out.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'What is a robotic Total Station (motorized Total Station)?',
    opts: ['A Total Station equipped with servo motors and active target tracking that can be operated by a single surveyor at the prism pole via radio remote control', 'A stationary satellite receiver', 'An autonomous drone with cameras', 'A computerized digital level'],
    ans: 0,
    exp: 'A robotic Total Station uses motorized drives and automatic target recognition (ATR) to track the prism automatically, allowing one-man operation from the rod.',
    tip: 'Robotic Total Station tracks the prism automatically, enabling single-person surveying.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'What is the function of Automatic Target Recognition (ATR) in motorized Total Stations?',
    opts: ['Optically detecting the center of the target prism and pointing the telescope crosshairs onto it automatically without manual sighting', 'Reading barcodes on levelling staves', 'Scanning terrain for underground utilities', 'Calibrating tripod leveling'],
    ans: 0,
    exp: 'ATR emits an infrared spot toward the prism and senses the reflected beam on a CMOS/CCD sensor to center the crosshairs onto the prism automatically.',
    tip: 'ATR automatically points the telescope exactly at the center of the reflector prism.',
    top: 'Total Station & Modern Instruments'
  },

  // --- GNSS / GPS FUNDAMENTALS ---
  {
    q: 'What is the minimum number of GNSS satellites that a GPS receiver must track simultaneously to determine an unambiguous 3D position (X, Y, Z) and receiver clock offset?',
    opts: ['4 satellites', '3 satellites', '2 satellites', '6 satellites'],
    ans: 0,
    exp: 'Four satellite ranges are required to solve for four mathematical unknowns: three Cartesian coordinates (X, Y, Z) and the receiver clock bias (Δt).',
    tip: 'Minimum 4 satellites are needed for a 3D position fix (X, Y, Z, and clock bias).',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'Why are atomic clocks (rubidium or cesium standards) mounted on GNSS satellites rather than in ground user receivers?',
    opts: ['To provide exceptionally stable timekeeping on the satellites, while inexpensive quartz clocks in user receivers are synchronized by solving for clock error as a fourth unknown', 'Because atomic clocks cannot function in atmospheric pressure', 'Because quartz crystals fail in space radiation', 'To avoid using rechargeable batteries'],
    ans: 0,
    exp: 'Satellites carry highly stable atomic clocks (rubidium/cesium) for nanosecond timing. Inexpensive quartz clocks in receivers are synchronized using the 4th satellite observation.',
    tip: 'Satellites carry atomic clocks; user receivers use quartz clocks synchronized via the 4th satellite.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the nominal orbital altitude of the satellites in the NAVSTAR GPS constellation above the Earth surface?',
    opts: ['Approximately 20,200 km (Medium Earth Orbit - MEO)', 'Approximately 35,786 km (Geostationary Orbit - GEO)', 'Approximately 500 km (Low Earth Orbit - LEO)', 'Approximately 1,000 km'],
    ans: 0,
    exp: 'NAVSTAR GPS satellites orbit at an altitude of approximately 20,180 to 20,200 km in Medium Earth Orbit (MEO) with an orbital period of 11 hours and 58 minutes.',
    tip: 'GPS satellites orbit at ~20,200 km altitude (MEO) with an orbital period of ~12 hours.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'How many orbital planes are used in the baseline design of the NAVSTAR GPS space segment constellation?',
    opts: ['6 orbital planes inclined at 55 degrees to the equator', '3 orbital planes inclined at 65 degrees', '12 equatorial planes', '4 polar planes'],
    ans: 0,
    exp: 'The GPS constellation comprises 6 orbital planes inclined at 55° to the equator, spaced 60° apart, ensuring at least 4 satellites are visible anywhere on Earth.',
    tip: 'GPS constellation: 6 orbital planes inclined at 55° with 4+ satellites per plane.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the primary carrier frequency of the GPS L1 signal?',
    opts: ['1575.42 MHz', '1227.60 MHz', '1176.45 MHz', '433.00 MHz'],
    ans: 0,
    exp: 'The GPS L1 carrier frequency is 1575.42 MHz (wavelength ~19.05 cm), derived from the fundamental atomic standard frequency of 10.23 MHz (154 x 10.23 MHz).',
    tip: 'GPS L1 frequency = 1575.42 MHz. L2 = 1227.60 MHz. L5 = 1176.45 MHz.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the carrier frequency of the GPS L2 signal?',
    opts: ['1227.60 MHz', '1575.42 MHz', '1176.45 MHz', '900.00 MHz'],
    ans: 0,
    exp: 'The GPS L2 carrier frequency is 1227.60 MHz (120 x 10.23 MHz, wavelength ~24.42 cm).',
    tip: 'GPS L2 frequency = 1227.60 MHz.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the name of the civilian pseudorandom noise (PRN) code modulated onto the GPS L1 carrier wave?',
    opts: ['Coarse / Acquisition (C/A) code', 'Precision (P) code', 'Y-code', 'Gold master code'],
    ans: 0,
    exp: 'The C/A (Coarse/Acquisition) code is a 1.023 MHz civilian PRN code repeated every 1 millisecond, modulated onto the L1 carrier.',
    tip: 'Civilian GPS code is C/A code (Coarse/Acquisition) on L1 at 1.023 MHz.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the name of the Russian satellite navigation system equivalent to USA GPS?',
    opts: ['GLONASS', 'Galileo', 'BeiDou', 'IRNSS'],
    ans: 0,
    exp: 'GLONASS (Global Navigation Satellite System) is operated by the Russian Federation, using 24 satellites in 3 orbital planes at ~19,100 km altitude.',
    tip: 'GLONASS is the Russian global navigation satellite system.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the name of the civilian satellite navigation system developed by the European Union?',
    opts: ['Galileo', 'GLONASS', 'BeiDou', 'Compass'],
    ans: 0,
    exp: 'Galileo is the European Union global navigation satellite system, operated for civilian and commercial navigation with high precision.',
    tip: 'Galileo is the European Union GNSS constellation.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the official operational name of India regional navigation satellite system (IRNSS)?',
    opts: ['NavIC (Navigation with Indian Constellation)', 'GAGAN', 'BHUVAN', 'INSAT-Nav'],
    ans: 0,
    exp: 'NavIC (Navigation with Indian Constellation), developed by ISRO, is India regional navigation satellite system covering India and a region extending 1,500 km around it.',
    tip: 'NavIC is India regional satellite navigation system (IRNSS) developed by ISRO.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is GAGAN in Indian aviation and spatial positioning?',
    opts: ['GPS Aided GEO Augmented Navigation (a Satellite-Based Augmentation System - SBAS)', 'India lunar rover mission', 'A GIS software platform developed by ISRO', 'A hydrographic sounding ship'],
    ans: 0,
    exp: 'GAGAN is India SBAS (Satellite-Based Augmentation System), developed by ISRO and AAI to provide differential GPS corrections over Indian airspace.',
    tip: 'GAGAN is India Satellite-Based Augmentation System (SBAS) for GPS corrections.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the primary operational mechanism of Differential GPS (DGPS)?',
    opts: ['A base station at known coordinates calculates pseudorange errors and broadcasts real-time corrections to roving receivers', 'Using two satellites instead of four', 'Averaging readings taken 24 hours apart', 'Measuring ground distances with a laser tape simultaneously'],
    ans: 0,
    exp: 'In DGPS, a stationary base receiver at known coordinates computes differences between true and measured pseudoranges (PRC) and broadcasts them to rovers to cancel common errors.',
    tip: 'DGPS uses a base receiver at a known station to broadcast range corrections to rovers.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the positioning accuracy achievable with Real-Time Kinematic (RTK) GNSS surveying under good satellite geometry?',
    opts: ['1 to 2 centimeters horizontally', '1 to 2 meters', '5 to 10 meters', '0.1 millimeters'],
    ans: 0,
    exp: 'RTK uses carrier phase measurements and resolves integer cycle ambiguities in real time, delivering centimeter-level accuracy (1-2 cm horizontal, 2-3 cm vertical).',
    tip: 'RTK GNSS provides 1 to 2 cm horizontal accuracy in real time.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'In RTK GNSS surveying, what does "resolving integer carrier phase ambiguity" mean?',
    opts: ['Determining the exact whole number of carrier wavelengths between the satellite and the receiver antenna at the instant of signal acquisition', 'Calibrating the battery voltage', 'Eliminating terrain slope', 'Setting the coordinate projection zone'],
    ans: 0,
    exp: 'Carrier phase tracking measures fractional phase precisely, but the initial integer number of complete wavelengths (N) between satellite and antenna is unknown; resolving N is integer ambiguity resolution.',
    tip: 'Carrier phase ambiguity resolution finds the whole number of cycles between satellite and antenna.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is a CORS network in modern GNSS geodetic infrastructure?',
    opts: ['Continuously Operating Reference Station network', 'Central Optical Ranging System', 'Civilian Orbital Relay Station', 'Coordinated Radio Satellite network'],
    ans: 0,
    exp: 'CORS stands for Continuously Operating Reference Stations—a permanent network of geodetic GNSS receivers transmitting data to a central server to provide network RTK corrections.',
    tip: 'CORS = Continuously Operating Reference Station network.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What protocol is internationally standardized for streaming real-time GNSS differential corrections over the Internet (cellular network)?',
    opts: ['NTRIP (Networked Transport of RTCM via Internet Protocol)', 'FTP', 'HTTP/2', 'SMTP'],
    ans: 0,
    exp: 'NTRIP is the standard telecommunication protocol used to stream RTCM differential GNSS corrections over the Internet via cellular mobile data.',
    tip: 'NTRIP transmits RTCM differential GNSS corrections over the Internet/mobile network.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What does the term "Multipath error" mean in GNSS positioning?',
    opts: ['Signals reflecting off surrounding surfaces (buildings, metal roofs, water bodies) before reaching the antenna, causing an artificially longer path length', 'Signals traveling through different countries', 'Receiving signals from multiple satellite constellations', 'Clock drifting between multiple receivers'],
    ans: 0,
    exp: 'Multipath occurs when satellite signals bounce off structures, water, or ground before hitting the receiver antenna, distorting pseudorange and carrier phase measurements.',
    tip: 'Multipath error occurs when signals reflect off nearby structures/water before reaching antenna.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'Which type of GNSS antenna design is specifically engineered to suppress multipath signals arriving from low angles or ground reflections?',
    opts: ['Choke-ring antenna (or ground plane antenna)', 'Whip antenna', 'Helical dipole antenna', 'Yagi antenna'],
    ans: 0,
    exp: 'A choke-ring antenna has concentric metal circular troughs that trap and attenuate reflected signals arriving from below or near the horizon, preventing multipath interference.',
    tip: 'Choke-ring antennas suppress ground and low-elevation multipath reflections.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'Why can ionospheric delay error in GNSS signals be effectively eliminated by dual-frequency (L1 / L2) receivers?',
    opts: ['Because the ionosphere is a dispersive medium where signal delay is inversely proportional to the square of the frequency (f^2)', 'Because L2 frequency passes through without delay', 'Because L1 and L2 have opposite polarities', 'Because the ionosphere reflects L2 entirely'],
    ans: 0,
    exp: 'In the ionospheric plasma, refraction delay is dispersive: Δt ∝ 1/f². By measuring the arrival time difference between two distinct frequencies (L1 and L2), ionospheric delay is canceled.',
    tip: 'Ionosphere is dispersive (delay ∝ 1/f²); dual-frequency (L1/L2) receivers cancel ionospheric delay.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What does the GNSS metric "PDOP" stand for, and what does a low PDOP value signify?',
    opts: ['Positional Dilution of Precision; a low value signifies excellent satellite spatial geometry and higher positioning accuracy', 'Phase Difference of Polarization; low value means weak battery', 'Peak Distance of Orbit; low value means satellite is near', 'Periodic Drift of Plummet; low value means level tripod'],
    ans: 0,
    exp: 'PDOP (Positional Dilution of Precision) measures the 3D geometrical distribution of visible satellites. Lower PDOP (e.g., < 3) means satellites are widely dispersed, yielding high accuracy.',
    tip: 'PDOP = Positional Dilution of Precision. Low PDOP (< 4) indicates optimal satellite geometry.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'Which GNSS surveying method provides the highest absolute geodetic accuracy (millimeter-level) for primary national control networks?',
    opts: ['Static GNSS surveying with long multi-hour observation sessions', 'Kinematic single-point positioning', 'Stop-and-Go surveying', 'Handheld autonomous navigation'],
    ans: 0,
    exp: 'Static GNSS surveying records continuous dual-frequency carrier phase data over hours or days for post-processing with precise ephemerides, giving millimeter-level accuracy.',
    tip: 'Static GNSS provides the highest precision (2-5 mm) for primary geodetic networks.',
    top: 'GNSS & GPS Surveying'
  },

  // --- GIS (GEOGRAPHIC INFORMATION SYSTEM) ---
  {
    q: 'In Geographic Information Systems (GIS), what are the two fundamental data structures used to represent geographic features?',
    opts: ['Vector data model and Raster data model', 'Relational model and Object model', 'Binary format and Text format', 'Tabular model and Spreadsheet model'],
    ans: 0,
    exp: 'Spatial data in GIS is primarily represented using the Vector model (points, lines, polygons) and the Raster model (regular grid of cells/pixels).',
    tip: 'Vector (points, lines, polygons) and Raster (grid cells) are the two primary GIS data models.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'Which vector geometry type is used in GIS to represent discrete point entities such as survey boundary stones, borewells, or lampposts?',
    opts: ['Point (dimension = 0)', 'Polyline (dimension = 1)', 'Polygon (dimension = 2)', 'Raster pixel'],
    ans: 0,
    exp: 'A point feature is a zero-dimensional geometric object defined by a single coordinate pair (X, Y) without length or area.',
    tip: 'Points represent zero-dimensional locations (wells, survey stones, trees).',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'Which vector geometry type in GIS is used to represent linear features having length but no defined surface area, such as roads, rivers, and contours?',
    opts: ['Polyline / Line (dimension = 1)', 'Point (dimension = 0)', 'Polygon (dimension = 2)', 'DEM surface'],
    ans: 0,
    exp: 'Polylines (lines) are one-dimensional features formed by ordered sequences of connected vertices, representing roads, pipelines, rivers, and contour lines.',
    tip: 'Polylines represent one-dimensional linear features (roads, streams, contours).',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'Which vector geometry type in GIS is used to represent enclosed spatial features possessing both perimeter and surface area, such as land parcels, lakes, and administrative districts?',
    opts: ['Polygon (dimension = 2)', 'Line (dimension = 1)', 'Point (dimension = 0)', 'Node'],
    ans: 0,
    exp: 'Polygons are two-dimensional enclosed geographic entities bounded by closed rings of coordinate vertices, used for land parcels, building footprints, and water bodies.',
    tip: 'Polygons represent two-dimensional enclosed areas (land parcels, lakes, plots).',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'In GIS raster data models, what determines the spatial resolution of the dataset?',
    opts: ['The ground dimension represented by a single raster grid cell (pixel size)', 'The number of colors in the display palette', 'The file size in megabytes', 'The date the image was captured'],
    ans: 0,
    exp: 'Spatial resolution in a raster dataset is defined by the ground dimension of a single cell (e.g., 30m x 30m cell represents 30-meter resolution).',
    tip: 'Raster spatial resolution is determined by the ground cell size (pixel size).',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is a Digital Elevation Model (DEM) in GIS?',
    opts: ['A raster grid representation where each cell value stores the terrain bare-earth elevation above a vertical datum', 'A 3D model of building architecture', 'A digitized contour line drawing', 'A vector boundary of river basins'],
    ans: 0,
    exp: 'A DEM is a raster array of regularly spaced elevation values representing the bare ground topography without vegetation or man-made structures.',
    tip: 'DEM is a raster grid where each cell represents ground surface elevation.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is a Triangulated Irregular Network (TIN) in GIS terrain modeling?',
    opts: ['A vector-based digital terrain model formed by connecting irregular elevation sample points into a network of non-overlapping contiguous triangles', 'A network of triangulated radio towers', 'A raster map of mountain shadows', 'A circular contour map'],
    ans: 0,
    exp: 'A TIN is a vector surface representation composed of irregularly distributed nodes with elevation coordinates connected by edges forming non-overlapping triangles (Delaunay triangulation).',
    tip: 'TIN is a vector-based terrain model composed of contiguous irregular triangles.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is "Topology" in GIS vector data management?',
    opts: ['The mathematical expression of spatial relationships (adjacency, connectivity, and containment) between geographic features independent of coordinates', 'The elevation contour lines of high mountains', 'The visual color symbology on maps', 'The speed of network data transfer'],
    ans: 0,
    exp: 'Topology explicitly defines geometric relationships between vector features: connectivity (arcs connect at nodes), containment (polygons enclose areas), and adjacency (polygons share common boundaries).',
    tip: 'Topology defines spatial relationships: connectivity, adjacency, and containment.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is the "Buffering" spatial analysis operation in GIS?',
    opts: ['Generating a proximity zone of specified distance around point, line, or polygon features', 'Smoothing jagged vector polylines', 'Compressing large raster image files', 'Storing temporary data in computer RAM'],
    ans: 0,
    exp: 'Buffering creates a new polygon zone around features at a specified buffer distance (e.g., creating a 100-meter protection buffer around a river line).',
    tip: 'Buffering creates proximity zones of defined distance around features.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'In GIS spatial overlay analysis, what does the "Intersect" operation produce?',
    opts: ['A new layer containing only the spatial features and attributes that fall within the common overlapping area of both input layers', 'A layer containing all features from both layers without clipping', 'The difference between two raster grids', 'A buffer along roads'],
    ans: 0,
    exp: 'Intersect performs a geometric Boolean AND operation: it retains only the geometric regions where both input feature layers overlap, joining their attributes.',
    tip: 'Intersect retains only the common overlapping areas of both layers (Boolean AND).',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'In GIS spatial overlay analysis, what does the "Union" operation produce?',
    opts: ['A new polygon layer containing all geometric areas and combined attributes from both input layers (Boolean OR)', 'Only the non-overlapping outer areas', 'A single merged table without geometry', 'A raster digital elevation model'],
    ans: 0,
    exp: 'Union performs a Boolean OR operation on two polygon layers, preserving all features and areas from both inputs, whether overlapping or non-overlapping.',
    tip: 'Union combines all areas from both polygon layers (Boolean OR).',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is the primary difference between Spatial Data and Attribute Data in GIS?',
    opts: ['Spatial data defines the geographic location, geometry, and shape of features; Attribute data provides descriptive tabular characteristics about those features', 'Spatial data is stored on paper while attribute data is digital', 'Spatial data contains only text while attribute data contains graphics', 'There is no difference'],
    ans: 0,
    exp: 'Spatial data represents geographic position and geometric form (where it is); Attribute data consists of descriptive facts, properties, and values stored in tables (what it is).',
    tip: 'Spatial data = WHERE (geometry/coordinates). Attribute data = WHAT (tabular characteristics).',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is the standard global reference ellipsoid and geodetic datum used by the GPS system and modern worldwide GIS datasets?',
    opts: ['WGS 84 (World Geodetic System 1984)', 'Everest 1830', 'Clarke 1866', 'Krasovsky 1940'],
    ans: 0,
    exp: 'WGS 84 is the global geocentric reference ellipsoid and datum developed by the US Department of Defense, utilized as the native coordinate reference system for GPS.',
    tip: 'WGS 84 is the standard global geodetic datum used by GPS.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'In the Universal Transverse Mercator (UTM) coordinate system, how many longitudinal zones is the entire globe divided into?',
    opts: ['60 zones of 6 degrees longitude each', '36 zones of 10 degrees each', '24 zones of 15 degrees each', '100 zones of 3.6 degrees each'],
    ans: 0,
    exp: 'The UTM system divides the world between 80°S and 84°N into 60 longitudinal zones, each spanning 6° of longitude, numbered 1 to 60 starting at the 180° meridian moving eastward.',
    tip: 'UTM divides the world into 60 zones, each 6° longitude wide.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is the scale factor assigned along the Central Meridian in each UTM projection zone to minimize scale distortion across the zone?',
    opts: ['0.9996', '1.0000', '0.9999', '1.0004'],
    ans: 0,
    exp: 'To balance scale distortion across the 6° width of the zone, the UTM secant projection sets the scale factor at the Central Meridian to exactly 0.9996.',
    tip: 'UTM central meridian scale factor is exactly 0.9996.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is the False Easting assigned to the Central Meridian in every UTM zone to avoid negative coordinate values?',
    opts: ['500,000 meters', '1,000,000 meters', '100,000 meters', '0 meters'],
    ans: 0,
    exp: 'To ensure all easting coordinates within a zone remain positive numbers, the Central Meridian is arbitrarily assigned a False Easting of 500,000 meters.',
    tip: 'False Easting of UTM central meridian = 500,000 m.',
    top: 'GIS & Remote Sensing'
  },

  // --- HYDROGRAPHIC SURVEYING & SOUNDINGS ---
  {
    q: 'What is the primary objective of Hydrographic Surveying?',
    opts: ['Mapping water bodies to determine bed topography, water depths, shorelines, and underwater navigation hazards for nautical charts and marine works', 'Measuring agricultural farm yields', 'Locating underground groundwater aquifers', 'Setting out horizontal road curves'],
    ans: 0,
    exp: 'Hydrographic surveying surveys water bodies (oceans, seas, lakes, rivers) to map depth of water, seabed contours, navigational channels, and marine construction sites.',
    tip: 'Hydrographic surveying maps underwater bed relief and depths for navigation and harbor works.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is the operation of measuring the vertical depth of the water bed below the water surface called in hydrography?',
    opts: ['Sounding', 'Levelling', 'Plummeting', 'Piezometry'],
    ans: 0,
    exp: 'Sounding is the measurement of depth of water below the water surface at various points in a body of water.',
    tip: 'Sounding = measuring depth of water from the water surface to the bed.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'Up to what water depth is a graduated sounding pole (sounding rod) typically recommended for taking depth measurements?',
    opts: ['Up to 5 to 6 meters', 'Up to 20 meters', 'Up to 50 meters', 'Up to 100 meters'],
    ans: 0,
    exp: 'Sounding poles are wooden poles 5 to 6 meters long, graduated in decimeters, used in shallow, calm waters where lead lines would drift.',
    tip: 'Sounding pole is used in shallow waters up to 5 to 6 meters depth.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is provided at the bottom of the lead weight of a sounding lead line to collect samples of the seabed material?',
    opts: ['A hollow conical cavity filled with tallow or beeswax (arming the lead)', 'A magnetic compass needle', 'A mechanical claw hook', 'A glass specimen vial'],
    ans: 0,
    exp: 'The base of the lead weight has a cup-shaped recess filled with tallow or wax ("arming"). When the lead strikes the bottom, sand, mud, or shells stick to the tallow for sampling.',
    tip: 'Arming the lead: cavity filled with tallow collects seabed material samples.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is the operating principle of an Echo Sounder (Fathometer) used for hydrographic soundings?',
    opts: ['Emitting acoustic sound pulses downwards and measuring the two-way travel time reflected from the seabed: depth = (v * t) / 2', 'Measuring radio wave reflection from clouds', 'Measuring water pressure at the sea surface', 'Using laser beams through opaque muddy water'],
    ans: 0,
    exp: 'An echo sounder emits ultrasonic sound pulses through an electroacoustic transducer and measures the round-trip time t: d = (v * t) / 2, where v is the speed of sound in water (~1460 to 1500 m/s).',
    tip: 'Echo sounder / Fathometer: Depth = (v x t) / 2 using acoustic sound pulses.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is the average velocity of sound in seawater used for hydrographic echo sounding computations?',
    opts: ['Approximately 1,500 m/s', 'Approximately 340 m/s', 'Approximately 3,000 m/s', 'Approximately 300,000 km/s'],
    ans: 0,
    exp: 'The speed of sound in seawater is roughly 1,500 m/s (compared to ~343 m/s in air), varying slightly with salinity, temperature, and depth.',
    tip: 'Speed of sound in seawater is ~1,500 m/s (in freshwater ~1,460 m/s).',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'When do Spring Tides occur in nature?',
    opts: ['At the times of New Moon and Full Moon, when the Sun, Moon, and Earth align in a straight line (syzygy)', 'At the first and third quarters of the Moon', 'Only during spring equinox in March', 'When the Moon is at its greatest distance from Earth'],
    ans: 0,
    exp: 'Spring tides occur twice each lunar month during New Moon and Full Moon (syzygy), when the gravitational pulls of the Sun and Moon reinforce each other, producing maximum tidal range.',
    tip: 'Spring tides occur at New Moon and Full Moon (maximum tidal range).',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'When do Neap Tides occur in nature?',
    opts: ['At the first and third quarters of the Moon (quadrature), when the Sun and Moon gravitational forces act at right angles', 'During lunar eclipses', 'During solar solstices', 'At New Moon only'],
    ans: 0,
    exp: 'Neap tides occur during the Moon first and third quarters (quadrature), when the solar and lunar tides oppose each other at right angles, causing the lowest tidal range (least high tides, highest low tides).',
    tip: 'Neap tides occur at Moon first/third quarter (minimum tidal range).',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is the standard vertical reference datum adopted internationally on navigational nautical charts for recording soundings?',
    opts: ['Lowest Astronomical Tide (LAT) or Chart Datum', 'Mean High Water Springs (MHWS)', 'Mean Sea Level (MSL)', 'Highest Astronomical Tide (HAT)'],
    ans: 0,
    exp: 'Chart Datum is usually set to Lowest Astronomical Tide (LAT) so that navigators are assured that the actual depth of water will almost never be less than the chartered depth.',
    tip: 'Soundings on nautical charts are referenced to Chart Datum / Lowest Astronomical Tide (LAT).',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What instrument is used by an observer on a moving survey boat to measure horizontal angles between shore signals for fixing the sounding location?',
    opts: ['Nautical sextant (hydrographic sextant)', 'Prismatic compass', 'Dumpy level', 'Abney level'],
    ans: 0,
    exp: 'A nautical sextant can be held and read in the hands without requiring a stable tripod, enabling instantaneous measurement of angles between shore objects from a rolling boat.',
    tip: 'Nautical sextant is used to observe horizontal angles from a moving survey boat.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'On what optical principle does a Nautical Sextant function?',
    opts: ['Principle of double reflection: the angle between the first incident ray and last reflected ray is twice the angle between the two mirrors', 'Principle of refraction through optical prisms', 'Principle of total internal reflection in fiber glass', 'Principle of optical interference'],
    ans: 0,
    exp: 'A sextant has two mirrors: the index mirror and the horizon mirror. By the law of double reflection, when a ray is reflected successively from two mirrors, the angle of deviation is twice the angle between the mirrors.',
    tip: 'Sextant principle: angle between incident and reflected ray is TWICE the angle between mirrors.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'In hydrographic surveying, what is the "Three-Point Problem"?',
    opts: ['Locating the position of a sounding boat by measuring two horizontal angles between three known shore stations', 'Locating three points with a theodolite', 'Setting up a tripod on three legs', 'Measuring the volume of three dredging cuts'],
    ans: 0,
    exp: 'The three-point problem involves determining the position of an unknown boat station P by observing two horizontal angles α and β subtended by three visible shore stations (A, B, C) of known coordinates.',
    tip: 'Three-Point Problem: locating boat position from 2 angles observed to 3 known shore points.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'Which mechanical drafting instrument is specially designed to plot the solution of the Three-Point Problem on hydrographic survey sheets?',
    opts: ['Station pointer (three-arm protractor)', 'Beam compass', 'Parallel ruler', 'Pantograph'],
    ans: 0,
    exp: 'A station pointer consists of a graduated circle with one fixed central arm and two movable arms. The two measured angles are set on the arms and the instrument is positioned until all three arms pass through the shore points.',
    tip: 'Station pointer (three-arm protractor) mechanically plots the Three-Point Problem.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What condition causes the solution of the Three-Point Problem to become indeterminate (the danger circle condition)?',
    opts: ['When the boat position P lies on the circumference of the circle passing through the three shore control stations A, B, and C', 'When the boat is closer than 10 meters to shore', 'When the water depth exceeds 50 meters', 'When the tide is at spring tide'],
    ans: 0,
    exp: 'If the boat position lies on the great circle passing through the three shore stations (A, B, C), the geometry becomes mathematically indeterminate because any point on that circle subtends the exact same angles.',
    tip: 'Indeterminate condition (danger circle): boat lies on the circle passing through the 3 shore points.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'Which instrument is commonly used to measure water flow velocity in open river streams for discharge calculations?',
    opts: ['Current meter (e.g., Price current meter or Ott propeller meter)', 'Venturimeter', 'Piezometer', 'Anemometer'],
    ans: 0,
    exp: 'A current meter has a rotating wheel of conical cups (Price) or a helical propeller (Ott) that rotates at a speed proportional to the velocity of water flow.',
    tip: 'Current meter (Price / Ott) measures stream flow velocity in rivers.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'In stream gauging, at what depth below the water surface is the single-point velocity observation taken to represent mean stream velocity?',
    opts: ['0.6 of the total depth (measured from the water surface)', '0.2 of the depth', '0.5 of the depth', '0.8 of the depth'],
    ans: 0,
    exp: 'Extensive stream gauging research proves that the velocity at 0.6 of depth from the surface closely approximates the mean velocity in the vertical velocity profile.',
    tip: 'Single-point velocity measurement: observed at 0.6 depth from surface.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'When the two-point method is used to determine mean velocity in a deep river stream, at what depths are the velocity observations taken?',
    opts: ['At 0.2 depth and 0.8 depth, and the two values are averaged: V_mean = (V_0.2 + V_0.8) / 2', 'At 0.1 depth and 0.9 depth', 'At 0.3 depth and 0.7 depth', 'At 0.4 depth and 0.6 depth'],
    ans: 0,
    exp: 'In the two-point method, velocities are measured at 0.2 and 0.8 of the depth below the surface. The mean velocity is the arithmetic average: V_mean = 0.5 * (V_0.2 + V_0.8).',
    tip: 'Two-point method: V_mean = (V_0.2 + V_0.8) / 2.',
    top: 'Hydrographic Surveying'
  }
];

m7Questions.forEach(q => addQ(q, 7, 'mod-7', 'Modern Survey Instruments'));

console.log('Module 7 processed. Added:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
