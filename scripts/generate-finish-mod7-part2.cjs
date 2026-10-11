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

console.log('Existing unique masks before Mod 7 Part 2:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-fin2-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-d${c++}`;
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
    createdAt: '2026-10-11T16:30:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 80 DISTINCT QUESTIONS FOR MODULE 7 (Part 2)
const m7Questions2 = [
  // --- TOTAL STATION & DIGITAL INSTRUMENTS ---
  {
    q: 'In Total Station surveying, what is the "forced centering" (three-tripod) technique?',
    opts: ['Interchanging the instrument and target prisms onto fixed tribrachs on tripods without disturbing tripod legs, eliminating station centering errors', 'Forcing the tripod legs deeper into soil with a mallet', 'Centering the bubble using only two footscrews', 'Locking the horizontal clamp with excessive torque'],
    ans: 0,
    exp: 'In forced centering, tribrachs remain undisturbed on tripods over survey marks; only the Total Station and prisms are swapped between tribrachs, eliminating intermediate centering errors in traverses.',
    tip: 'Forced centering interchanges instrument and prisms on fixed tribrachs, eliminating centering errors.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'What is the function of the laser plummet in modern electronic Total Stations?',
    opts: ['Emitting a focused visible red laser beam vertically downward through the vertical axis to mark the ground station peg directly', 'Measuring distance to overhead power cables', 'Guiding the surveyor during night driving', 'Aligning the line of collimation with true north'],
    ans: 0,
    exp: 'A laser plummet projects a small visible red laser dot straight down through the vertical axis of the tribrach, allowing instant visual centering over the ground mark without looking through an eyepiece.',
    tip: 'Laser plummet projects a vertical red laser dot onto the ground mark for fast centering.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'What type of staff is used with a high-precision Digital Electronic Level to take automatic height readings?',
    opts: ['An Invar staff carrying a printed barcode pattern', 'An ordinary wooden folding staff graduated in centimeters', 'A telescopic aluminum staff with red and black numerals', 'A reflective prism pole'],
    ans: 0,
    exp: 'Digital levels utilize barcode staves (often made of invar for thermal stability). An internal CCD sensor scans the barcode pattern and calculates elevation and distance automatically.',
    tip: 'Digital levels use barcode staves (scanned by internal CCD line sensors).',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'Which eye safety laser hazard classification applies to the visible aiming laser diodes used in reflectorless Total Stations?',
    opts: ['Class 2 or Class 3R laser', 'Class 1 invisible safe laser', 'Class 4 high-power industrial cutting laser', 'Class 0 non-optical device'],
    ans: 0,
    exp: 'Visible lasers in surveying are typically Class 2 (<1 mW, safe for accidental blink reflex <0.25 s) or Class 3R (up to 5 mW, direct intrabeam viewing is hazardous).',
    tip: 'Surveying lasers are Class 2 (<1 mW) or Class 3R (<5 mW).',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'In Total Station angle measurement, what is an absolute rotary encoder?',
    opts: ['A coded glass disk with patterned tracks where each angular position has a unique binary digital code that is instantly read upon power-on without indexing', 'A mechanical gear train that counts revolutions', 'A liquid vial with electronic electrodes', 'A magnetic needle that senses magnetic north'],
    ans: 0,
    exp: 'An absolute encoder uses glass disks with binary optical code patterns (such as Gray code); the instrument reads the exact absolute angle immediately upon powering up without needing a 360° spin.',
    tip: 'Absolute encoders read exact angular positions immediately from uniquely coded glass disks.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'What is the standard LandXML data format used for in modern survey and civil engineering software?',
    opts: ['An XML-based standard file format for exchanging survey points, alignments, parcel boundaries, surfaces, and cross-sections between CAD and GIS applications', 'A raster image compression algorithm', 'A satellite broadcast encryption format', 'A device driver for battery chargers'],
    ans: 0,
    exp: 'LandXML is an open, non-proprietary XML data schema used industry-wide to exchange civil engineering and survey measurement data (surfaces, alignments, parcels, points).',
    tip: 'LandXML is the open XML schema for exchanging survey points, surfaces, and alignments.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'What is the purpose of the 360-degree prism used in robotic Total Station surveying?',
    opts: ['It reflects the EDM beam back to the instrument from any horizontal direction without needing to be oriented towards the instrument', 'It measures angles in all 360 degrees simultaneously', 'It captures panoramic 360-degree digital photographs', 'It eliminates the need for tripod leveling'],
    ans: 0,
    exp: 'A 360-degree prism comprises six joined corner-cube prisms arranged in a ring, ensuring the robotic tracker maintains lock from any direction as the surveyor walks.',
    tip: '360° prism reflects EDM signals from any direction, ideal for robotic rover tracking.',
    top: 'Total Station & Modern Instruments'
  },

  // --- GNSS & SATELLITE SURVEYING ---
  {
    q: 'In GNSS signal processing, what is a "cycle slip"?',
    opts: ['A sudden discontinuity or loss of integer lock in the carrier phase count caused by temporary physical obstruction of the satellite signal', 'A mechanical slip in the tripod head clamp', 'A discrepancy between local time and UTC', 'A calculation error in coordinate transformation'],
    ans: 0,
    exp: 'A cycle slip occurs when tree leaves, buildings, or intense ionospheric scintillation temporarily block a satellite signal, causing the receiver to lose track of the integer number of wavelengths.',
    tip: 'Cycle slip = sudden loss of lock on carrier phase integer cycle count due to obstruction.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the purpose of the GNSS "Double Difference" mathematical observable in baseline processing?',
    opts: ['It eliminates both satellite clock bias and receiver clock bias simultaneously', 'It doubles the signal speed', 'It calculates distances without satellites', 'It removes terrain elevation'],
    ans: 0,
    exp: 'By differencing observations between two receivers and two satellites, both the satellite clock errors and receiver clock errors cancel out completely.',
    tip: 'Double differencing eliminates BOTH satellite clock error and receiver clock error.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What does the GNSS observable "Triple Difference" eliminate in baseline post-processing?',
    opts: ['The integer carrier phase ambiguity (N), making it ideal for detecting cycle slips', 'Atmospheric refraction entirely', 'The distance between receivers', 'Satellite orbital velocity'],
    ans: 0,
    exp: 'Differencing double differences across two consecutive time epochs cancels out the constant integer ambiguity N, allowing rapid detection and repair of cycle slips.',
    tip: 'Triple differencing cancels integer ambiguity N, used to detect cycle slips.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is Precise Point Positioning (PPP) in GNSS technology?',
    opts: ['A positioning method providing decimeter-to-centimeter accuracy for a single standalone GNSS receiver using precise satellite orbits and clock products without a local base station', 'Setting a theodolite over an exact survey mark', 'Using four rovers connected by wires', 'A manual plotting method on topo sheets'],
    ans: 0,
    exp: 'PPP uses dual-frequency carrier phase and pseudorange data from a single receiver combined with precise satellite clock corrections and orbits (from IGS) to compute accurate coordinates without a reference station.',
    tip: 'PPP delivers high-accuracy positioning for a single receiver without a local base station.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the International GNSS Service (IGS)?',
    opts: ['A voluntary global federation providing high-precision GNSS satellite orbits, clock corrections, and Earth rotation parameters for scientific and surveying applications', 'A commercial company selling satellite hardware', 'A military surveillance wing of NATO', 'An agency providing international marine charts'],
    ans: 0,
    exp: 'The IGS is a global federation of tracking stations and analysis centers that makes open-access precise orbits, satellite clock data, and atmospheric products available worldwide.',
    tip: 'IGS provides open-access precise satellite orbits and clock corrections globally.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is a Virtual Reference Station (VRS) in network RTK surveying?',
    opts: ['An imaginary reference station mathematically created by central network software near the rover position to broadcast customized local RTK corrections', 'A physical concrete pillar erected on mountain tops', 'A satellite stationed directly above the surveyor', 'A computer simulator for student training'],
    ans: 0,
    exp: 'In a VRS network, the rover sends its approximate position via NTRIP; the central server calculates synthetic base station corrections for an imaginary station right next to the rover.',
    tip: 'VRS is a synthetic virtual base station generated by network software close to the rover.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the GPS Time (GPST) reference standard and how does it relate to Coordinated Universal Time (UTC)?',
    opts: ['GPST is a continuous atomic time scale that does NOT insert leap seconds, differing from UTC by an integer number of leap seconds', 'GPST is identical to Greenwich Mean Time in every respect', 'GPST changes with local daylight saving time', 'GPST resets to zero at the start of every calendar year'],
    ans: 0,
    exp: 'GPST began at 00:00:00 UTC on January 6, 1980. Unlike UTC, GPST does not insert leap seconds, so GPST is currently ahead of UTC by an exact integer number of leap seconds (e.g. 18 seconds).',
    tip: 'GPS Time is continuous without leap seconds; differs from UTC by integer leap seconds.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'How long is one GPS Navigation Message frame, and at what bit rate is it transmitted by the satellites?',
    opts: ['1500 bits transmitted at a data rate of 50 bits per second (30 seconds per frame)', '10 megabits transmitted at 1 Gbps', '256 bytes transmitted at 1200 baud', '64 bits transmitted once every hour'],
    ans: 0,
    exp: 'A complete GPS navigation message frame has 1,500 bits divided into five 300-bit subframes, transmitted at 50 bps, taking exactly 30 seconds per frame.',
    tip: 'GPS navigation message frame = 1500 bits at 50 bps (takes 30 seconds).',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What critical orbital data is broadcast in Subframes 2 and 3 of the GPS Navigation Message?',
    opts: ['Broadcast Ephemeris (precise parameters defining the satellite Keplerian orbit)', 'Almanac for all constellations', 'Ionospheric electron content models only', 'Civilian user authentication keys'],
    ans: 0,
    exp: 'Subframes 2 and 3 contain the broadcast ephemeris parameters representing the Keplerian orbital elements of the transmitting satellite, valid for roughly 2 to 4 hours.',
    tip: 'Subframes 2 & 3 carry the broadcast ephemeris (precise orbit of the transmitting satellite).',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the GPS Almanac data transmitted in Subframes 4 and 5 of the navigation message?',
    opts: ['Coarse orbital and status information for ALL operational satellites in the constellation, helping receivers locate satellites quickly upon power-on', 'Exact atomic clock drift equations', 'Weather forecasts across ground tracking stations', 'National boundary coordinate files'],
    ans: 0,
    exp: 'The almanac contains rough orbital parameters for all constellation satellites, allowing a receiver to determine which satellites are above the local horizon during warm starts.',
    tip: 'Almanac provides rough orbital data for ALL satellites to enable fast acquisition.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the "elevation mask angle" (cutoff angle) typically set in a GNSS survey receiver, and why is it used?',
    opts: ['10 to 15 degrees above the horizon, to ignore satellites with low elevation angles suffering from severe atmospheric delay and multipath', '45 degrees, to view only zenith satellites', '0 degrees, to capture signals down to the ground', '90 degrees, to track one satellite overhead'],
    ans: 0,
    exp: 'Signals from satellites below 10°–15° travel through very thick layers of troposphere and ionosphere and are prone to multipath. A mask angle rejects them to protect survey accuracy.',
    tip: 'Elevation mask (10°–15°) rejects low-altitude satellites subject to high atmospheric noise.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the difference between Geodetic Height (h), Orthometric Height (H), and Geoid Undulation (N)?',
    opts: ['Geodetic height h (above the WGS84 ellipsoid) equals Orthometric height H (above MSL geoid) plus Geoid undulation N: h = H + N', 'h = H - N', 'h = H / N', 'h = √(H^2 + N^2)'],
    ans: 0,
    exp: 'GPS measures ellipsoidal height h directly. True elevation above mean sea level is orthometric height H, related by the geoid separation N: h = H + N (or H = h - N).',
    tip: 'Fundamental height relationship: h (ellipsoidal) = H (orthometric/MSL) + N (geoid).',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the Geoid in physical geodesy?',
    opts: ['The equipotential surface of the Earth gravity field that best coincides with global Mean Sea Level in the absence of tides and currents', 'A smooth mathematical reference oblate spheroid', 'The actual topography of mountains and valleys', 'The outer boundary of the atmosphere'],
    ans: 0,
    exp: 'The geoid is an equipotential surface of the Earth gravity potential field to which the plumb line is everywhere perpendicular, serving as the datum for orthometric elevations.',
    tip: 'Geoid is the equipotential gravity surface that coincides with undisturbed Mean Sea Level.',
    top: 'GNSS & GPS Surveying'
  },

  // --- GIS & REMOTE SENSING FUNDAMENTALS ---
  {
    q: 'In remote sensing, what is the Normalized Difference Vegetation Index (NDVI) formula calculated from satellite bands?',
    opts: ['NDVI = (NIR - Red) / (NIR + Red)', 'NDVI = (Red - NIR) / (Red + NIR)', 'NDVI = (NIR + Green) / (Red + Blue)', 'NDVI = (SWIR - NIR) / (SWIR + NIR)'],
    ans: 0,
    exp: 'Chlorophyll absorbs red light strongly while spongy mesophyll reflects near-infrared (NIR). NDVI = (NIR - Red) / (NIR + Red) quantifies live green vegetation.',
    tip: 'NDVI = (NIR - Red) / (NIR + Red). Ranges from -1.0 to +1.0.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What range of NDVI values typically indicates dense, healthy, green agricultural crops or tropical rainforest canopy?',
    opts: ['0.6 to 0.9', '-0.5 to -0.2', '0.0 to 0.1', '1.5 to 2.0'],
    ans: 0,
    exp: 'Healthy green vegetation exhibits high NIR reflection and low red reflection, giving NDVI values between 0.6 and 0.9. Bare soil is 0.1 to 0.2, and water gives negative values.',
    tip: 'Dense green vegetation gives NDVI between 0.6 and 0.9. Water is negative.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What are the four primary sensor resolutions that define the capabilities of a remote sensing satellite system?',
    opts: ['Spatial resolution, Spectral resolution, Radiometric resolution, and Temporal resolution', 'Focal length, aperture, shutter speed, and ISO', 'Latitude, longitude, altitude, and azimuth', 'Red, green, blue, and near infrared'],
    ans: 0,
    exp: 'The four fundamental resolutions of remote sensing are Spatial (pixel size), Spectral (band wavelength interval), Radiometric (bit depth sensitivity), and Temporal (revisit cycle).',
    tip: 'Four remote sensing resolutions: Spatial, Spectral, Radiometric, and Temporal.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is Radiometric Resolution in satellite imaging systems?',
    opts: ['The sensitivity of the sensor to detect subtle differences in electromagnetic energy, represented by the number of bits per pixel (e.g., 8-bit, 12-bit, 16-bit)', 'The physical width of a pixel in meters', 'The number of spectral bands on the sensor', 'The speed at which the satellite orbits Earth'],
    ans: 0,
    exp: 'Radiometric resolution is measured in bits: an 8-bit sensor records 256 gray levels (0-255), while an 11-bit sensor records 2048 levels, providing higher contrast sensitivity.',
    tip: 'Radiometric resolution is the sensor energy sensitivity measured in bit depth (e.g. 8-bit, 12-bit).',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'In remote sensing, which portion of the electromagnetic spectrum is called the "Thermal Infrared" (TIR) region, utilized to map surface temperatures?',
    opts: ['8 to 14 micrometers (μm)', '0.4 to 0.7 micrometers (μm)', '0.7 to 1.1 micrometers (μm)', '1 to 10 millimeters (mm)'],
    ans: 0,
    exp: 'The thermal infrared band spans roughly 8 to 14 μm, where terrestrial objects emit radiant heat energy according to their thermodynamic temperature.',
    tip: 'Thermal infrared band (8 - 14 μm) senses emitted heat for surface temperature mapping.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is an "Orthophoto" (or ortho-rectified aerial image)?',
    opts: ['An aerial photograph or satellite image geometrically corrected for terrain relief displacement, camera tilt, and optical distortion so it possesses a uniform map scale', 'An unedited oblique aerial photograph taken from an airplane window', 'A photograph taken in infrared light only', 'A three-dimensional plaster terrain model'],
    ans: 0,
    exp: 'Orthorectification removes perspective distortion and elevation displacement using a DEM, turning the photograph into a planimetrically true map with uniform scale throughout.',
    tip: 'Orthophoto is an aerial image corrected for terrain relief and tilt to have uniform map scale.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'Which file format standard consists of a collection of files with extensions .shp, .shx, .dbf, and .prj, widely used in GIS vector mapping?',
    opts: ['ESRI Shapefile', 'GeoTIFF raster', 'AutoCAD DWG', 'Adobe Acrobat PDF'],
    ans: 0,
    exp: 'An ESRI Shapefile uses .shp for feature geometry, .shx for spatial indexing, .dbf for attribute dBASE tables, and .prj for coordinate system projection information.',
    tip: 'Shapefile suite: .shp (geometry), .shx (index), .dbf (attributes), .prj (projection).',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is the GIS spatial analysis function "Clip" used for?',
    opts: ['Cutting out a specific geographic region of an input layer using the boundary of another polygon layer as a cookie cutter', 'Deleting duplicate records in an attribute table', 'Converting raster pixels into vector lines', 'Smoothing contour lines'],
    ans: 0,
    exp: 'Clip acts like a cookie cutter: it extracts spatial features from an input layer that fall strictly inside the boundary of a defined clip polygon layer without combining attributes.',
    tip: 'Clip extracts features from an input layer using a bounding polygon as a cookie-cutter.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'In GIS database management, what is a "Primary Key"?',
    opts: ['A unique attribute field (such as FID or Parcel_ID) that uniquely identifies each individual feature or record in a table', 'The password to open an encrypted shapefile', 'The coordinate value of the origin point', 'The projection definition code'],
    ans: 0,
    exp: 'A primary key is an attribute column containing strictly unique values for every row in a table, ensuring each geographic feature can be identified and linked to other tables.',
    tip: 'Primary key is a unique identifier (e.g. FID, PIN) for each feature in a GIS table.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'In GIS map projections, what does a "Conformal" map projection preserve accurately?',
    opts: ['Local angles and shapes of small geographic features', 'The true areas of all landmasses', 'True scale in all directions across the entire map', 'Straight lines for all compass headings'],
    ans: 0,
    exp: 'A conformal (orthomorphic) projection preserves angular relationships around any point, meaning local shapes are rendered correctly without angular deformation.',
    tip: 'Conformal projection preserves local shapes and angles (e.g. Mercator, Lambert Conformal).',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'In GIS map projections, what does an "Equivalent" (Equal-Area) map projection preserve accurately?',
    opts: ['The relative surface areas of geographic regions throughout the map', 'The true shapes of small islands', 'All rhumb line directions', 'The elevation of mountain peaks'],
    ans: 0,
    exp: 'An equal-area (equivalent) projection maintains the proportional area of any region on the map equal to its true area on the globe, though shapes may be distorted.',
    tip: 'Equivalent (equal-area) projections preserve true areas across the map.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'Which map projection is standardly used for topographic mapping of regions with large East-West extents, such as the United States or Mediterranean Europe?',
    opts: ['Lambert Conformal Conic projection', 'Transverse Mercator projection', 'Polar Stereographic projection', 'Gnomonic projection'],
    ans: 0,
    exp: 'The Lambert Conformal Conic projection uses a secant cone, minimizing distortion along two standard parallels, making it ideal for mid-latitude zones extending East-West.',
    tip: 'Lambert Conformal Conic is ideal for mid-latitude regions with East-West elongation.',
    top: 'GIS & Remote Sensing'
  },

  // --- HYDROGRAPHIC SURVEYING & SOUNDINGS ---
  {
    q: 'What is a Multibeam Echo Sounder (MBES) and how does it differ from a single-beam echo sounder?',
    opts: ['It transmits a wide fan-shaped swath of acoustic beams across the seafloor, providing 100% full bottom bathymetric coverage in a single survey pass', 'It operates using laser light instead of acoustic sound', 'It measures soundings only directly underneath the boat keel', 'It requires three boats operating together'],
    ans: 0,
    exp: 'An MBES projects a fan-shaped acoustic swath across the track, collecting hundreds of individual depth soundings simultaneously to generate high-resolution bathymetric surfaces.',
    tip: 'Multibeam echo sounder (MBES) emits a fan of acoustic beams for 100% bottom coverage.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is Side Scan Sonar (SSS) used for in hydrographic marine exploration?',
    opts: ['Producing detailed photographic-like acoustic imagery of the seabed to detect shipwrecks, exposed pipelines, boulders, and bottom texture', 'Measuring water salinity at the river mouth', 'Drilling core samples into rock strata', 'Guiding fishing nets'],
    ans: 0,
    exp: 'Side Scan Sonar sends conical or fan-shaped sound pulses sideways toward the seabed and measures backscatter amplitude, creating photo-quality images of seafloor features.',
    tip: 'Side Scan Sonar produces acoustic imagery of seabed textures, pipelines, and submerged wrecks.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'In hydrographic surveying, what are "Cross Lines" (check lines) and why are they run?',
    opts: ['Sounding lines run perpendicular to the principal sounding lines at regular intervals to verify depth measurement repeatability and tidal reduction accuracy', 'Boundary survey lines on dry land', 'Cables laid across a river to guide ferry boats', 'Lines indicating ship anchorages'],
    ans: 0,
    exp: 'Cross lines are sounding lines surveyed roughly orthogonal to the main survey lines (typically at 10 to 15 times the line spacing) to cross-check depth soundings at intersections.',
    tip: 'Cross lines run perpendicular to main sounding lines to independently check sounding accuracy.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'Why must a sounding lead line be thoroughly wetted and soaked in water prior to graduating and using it in field surveys?',
    opts: ['Because hemp and cotton lines shrink significantly when immersed in water, which would cause large systematic depth measurement errors if graduated dry', 'To make the line sink faster', 'To remove salt deposits', 'To make the line visible underwater'],
    ans: 0,
    exp: 'Natural hemp or cord lines shrink substantially when wet. They must be pre-soaked and stretched under working loads before graduation marks are applied.',
    tip: 'Sounding lines shrink when wet; must be soaked and stretched before graduation.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is a "Stilling Well" used for in an automatic float-type tide gauge installation?',
    opts: ['Damping out short-period surface waves and boat wakes so the float records true gradual tidal oscillations accurately', 'Storing drinking water on the survey vessel', 'Cooling electronic data loggers', 'Preventing fish from touching the sensor'],
    ans: 0,
    exp: 'A stilling well is a vertical pipe connected to the sea via a small bottom orifice. High-frequency wind waves are filtered out, while low-frequency tidal changes enter smoothly.',
    tip: 'Stilling well damps high-frequency surface waves to measure true tidal levels.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is the full period of the Metonic cycle of lunar tidal variations, required for establishing an absolute Mean Sea Level datum from tide gauge records?',
    opts: ['19 years (specifically 18.6 years for lunar node regression)', '1 year', '5 years', '50 years'],
    ans: 0,
    exp: 'To average out all astronomical tidal cycles (including the 18.6-year nodal cycle of the Moon orbit), continuous hourly tidal observations over 19 years are standardly required.',
    tip: 'A complete tidal datum observation cycle is 19 years (18.6-year lunar nodal cycle).',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is the "Italian method" (analytical method) in solving the hydrographic Three-Point Problem?',
    opts: ['An analytical mathematical procedure using trigonometric formulas to compute the coordinates of the boat station from the measured horizontal angles', 'A graphic method using three needles on tracing paper', 'An optical sighting instrument with two prisms', 'A manual plotting method using drafting triangles'],
    ans: 0,
    exp: 'The Italian method is a rigorous analytical trigonometric solution that sets up coordinate equations based on circumscribing circles to solve for station coordinates.',
    tip: 'Italian method is an analytical trigonometric solution to the Three-Point Problem.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'In hydrographic soundings, what is "Tidal Reduction"?',
    opts: ['The mathematical correction subtracted from observed sounding depths to reduce them to the designated Chart Datum based on simultaneous tide gauge readings', 'The decrease in water depth during low tide', 'The erosion of beaches by tidal currents', 'The loss of sound signal in deep ocean trenches'],
    ans: 0,
    exp: 'Soundings are measured from the instantaneous water level. Subtracting the height of tide above Chart Datum at that precise minute gives the standardized charted depth.',
    tip: 'Tidal reduction subtracts the instantaneous tide height to refer depths to Chart Datum.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is a "Sub-bottom Profiler" used for in marine hydrographic and geophysical surveys?',
    opts: ['Emitting low-frequency acoustic energy to penetrate below the seafloor and image the underlying geological sediment and bedrock stratigraphy', 'Cleaning silt from harbor channels', 'Measuring water temperature at the surface', 'Measuring wind speed over open ocean'],
    ans: 0,
    exp: 'Sub-bottom profilers emit low-frequency sound pulses (e.g., 0.5 to 12 kHz) that penetrate sediment layers, reflecting off sub-surface boundaries to image sediment layering.',
    tip: 'Sub-bottom profilers use low-frequency acoustics to map sediment layers beneath the seabed.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is the purpose of "Sounding Ranges" (transit lines marked by range beacons on shore)?',
    opts: ['Keeping the sounding boat on a straight, pre-determined survey course by aligning two prominent shore beacons in a line of sight', 'Measuring the maximum distance a boat can travel on fuel', 'Setting the radio frequency for telemetry', 'Marking high-water flood levels on riverbanks'],
    ans: 0,
    exp: 'Sounding ranges are straight lines established on the water by pairs of shore range beacons (front and rear). The boat steers so the two beacons stay aligned in sight.',
    tip: 'Sounding ranges guide the survey boat along straight designated profile lines.',
    top: 'Hydrographic Surveying'
  }
];

m7Questions2.forEach(q => addQ(q, 7, 'mod-7', 'Modern Survey Instruments'));

console.log('Module 7 Part 2 processed. Added:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
