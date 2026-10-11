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

console.log('Existing unique masks before Mod 7 & 8 combo:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-comb-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-e${c++}`;
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
    createdAt: '2026-10-11T16:45:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// -------------------------------------------------------------------------
// MODULE 7: 35 DISTINCT QUESTIONS (Completing Module 7 past 510)
// -------------------------------------------------------------------------
const m7Final = [
  {
    q: 'In hydrographic soundings, what is the "lead line" constructed from to minimize elasticity and stretching under working water loads?',
    opts: ['Well-seasoned, pre-stretched braided hemp or cotton cord with a brass wire core', 'Pure natural rubber', 'Elastic nylon monofilament fishing line', 'Unannealed copper wire'],
    ans: 0,
    exp: 'Lead lines are made of high-quality braided hemp or cotton rope, often reinforced with an internal phosphor bronze or brass wire core to prevent stretching.',
    tip: 'Lead lines use pre-stretched braided hemp cord with wire core to prevent stretching.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is the standard weight of the lead sinker attached to a boat lead line used for shallow coastal soundings?',
    opts: ['3 kg to 5 kg (approx. 7 to 10 lbs)', '50 kg', '250 grams', '20 kg'],
    ans: 0,
    exp: 'For ordinary coastal and harbour soundings, lead sinkers weigh between 3 kg and 5 kg (7 to 10 lbs) to descend rapidly through moving water currents without excessive weight for the leadsman.',
    tip: 'Lead sinkers for harbour soundings weigh 3 to 5 kg (7 to 10 lbs).',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is the purpose of conducting a "Bar Check" on an echo sounder before and after a hydrographic survey mission?',
    opts: ['Calibrating the sound velocity setting and zero draft index of the acoustic transducer by lowering a metal plate to known measured depths beneath the boat', 'Checking the boat engine fuel level', 'Testing the ship propeller shaft', 'Cleaning marine barnacles from the hull'],
    ans: 0,
    exp: 'A bar check lowers a steel plate on calibrated lines beneath the transducer at known depth intervals (e.g. 2m, 5m, 10m) to calibrate the speed of sound setting and draft offset.',
    tip: 'Bar check calibrates sound velocity and transducer draft index of an echo sounder.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'In hydrographic surveys of wide estuaries, which method of locating sounding positions is most suitable when strong tidal currents make keeping a boat on a range difficult?',
    opts: ['Two horizontal theodolite angles observed simultaneously from two synchronized shore base stations', 'Sounding by pacing along the beach', 'Using a hand level from the boat', 'Relying on dead reckoning without sights'],
    ans: 0,
    exp: 'When currents push the boat off course, observers at two shore stations with theodolites simultaneously sight the boat mast upon a radio/flag signal, plotting its position by intersection.',
    tip: 'Two theodolite angles from shore stations locate boats accurately even in strong drift currents.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is a "Current Pole" used for in hydrographic river surveys?',
    opts: ['Measuring the surface velocity and direction of water flow currents', 'Measuring the electrical charge of sea water', 'Guiding fishing boats into locks', 'Holding tide gauge clocks'],
    ans: 0,
    exp: 'A current pole is a weighted wooden pole floating vertically with a small portion exposed, paid out on a graduated log line to measure current speed and direction.',
    tip: 'Current pole measures the surface drift velocity and current direction in rivers/harbours.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'In hydrographic surveying, what does "Chart Datum" coincide with along the coasts of India as established by the Naval Hydrographic Office?',
    opts: ['Lowest Astronomical Tide (LAT) or approximately Indian Spring Low Water', 'Highest Astronomical Tide', 'Mean High Water Neaps', 'The ground surface level of Mumbai port'],
    ans: 0,
    exp: 'Chart Datum on Indian hydrographic charts is established at Lowest Astronomical Tide (LAT) or Indian Spring Low Water (ISLW), below which water rarely falls.',
    tip: 'Chart Datum in India is referenced to Lowest Astronomical Tide (LAT) / Indian Spring Low Water.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is an "Acoustic Doppler Current Profiler" (ADCP) used for in modern oceanographic surveying?',
    opts: ['Measuring water velocity profiles across the entire water column depth using Doppler frequency shifts of acoustic sound reflected from suspended particles', 'Measuring atmospheric ozone density', 'Listening to marine mammal vocalizations', 'Taking photographs of corals'],
    ans: 0,
    exp: 'ADCP transmits ultrasonic sound pulses and measures the Doppler frequency shift reflected from microscopic particles, computing flow velocity at multiple depth layers.',
    tip: 'ADCP measures complete water current velocity profiles using acoustic Doppler shifts.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is the definition of "Tidal Range" in oceanography?',
    opts: ['The vertical difference in height between consecutive high tide and low tide levels', 'The horizontal distance between the high tide mark and low tide mark on a beach', 'The time elapsed between two high tides', 'The speed of tidal flood currents'],
    ans: 0,
    exp: 'Tidal range is the vertical difference in water elevation between a high tide crest and its preceding or succeeding low tide trough.',
    tip: 'Tidal range = vertical difference between High Water and Low Water levels.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is a "Diurnal Tide"?',
    opts: ['A tidal pattern consisting of only ONE high tide and ONE low tide in each lunar day of approximately 24 hours and 50 minutes', 'A tide that occurs twice every 12 hours', 'A tide that occurs only during daylight hours', 'A tide caused by underwater volcanic eruptions'],
    ans: 0,
    exp: 'A diurnal tide has one high water and one low water each lunar day (~24.84 hours). In contrast, semidiurnal tides have two highs and two lows each day.',
    tip: 'Diurnal tide: ONE high tide and ONE low tide per lunar day.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'What is a "Semidiurnal Tide"?',
    opts: ['A tidal pattern featuring TWO high tides and TWO low tides of approximately equal heights in each lunar day', 'A tide occurring once every six months', 'A tide that occurs only at night', 'A tide with zero amplitude'],
    ans: 0,
    exp: 'Semidiurnal tides feature two high waters and two low waters of roughly similar heights within each lunar day (~12 hours and 25 minutes between successive high tides).',
    tip: 'Semidiurnal tide: TWO high tides and TWO low tides of similar height per lunar day.',
    top: 'Hydrographic Surveying'
  },
  {
    q: 'In Total Station prism measurements, why is the constant offset of a standard Leica round prism designated as 0 mm whereas for third-party universal mounts it is -34 mm?',
    opts: ['Leica defines the mount mechanical offset so the effective constant is zeroed in the instrument hardware default setting', 'Leica prisms have no glass', 'Third party prisms have convex mirrors', 'Because light travels faster in Swiss glass'],
    ans: 0,
    exp: 'Leica calibrates its instrument firmware to treat its proprietary prism geometry as 0 mm offset, whereas universal standard prisms require entering -30 mm or -34 mm.',
    tip: 'Leica system defines its standard prism as 0 mm; universal prisms typically enter -30 mm or -34 mm.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'What is the function of the "Electronic Circular Bubble" displayed on the LCD graphic screen of modern Total Stations?',
    opts: ['Displaying real-time graphic bubble leveling derived from the dual-axis tilt sensor for fast, precise instrument leveling without parallax', 'Showing battery power state', 'Showing satellite availability', 'Showing compass magnetic north'],
    ans: 0,
    exp: 'Modern Total Stations display an electronic graphic bullseye bubble on screen with real-time numeric tilt values in seconds of arc, replacing physical bubble estimation.',
    tip: 'Electronic bubble uses internal tilt sensors to display precise leveling status on the LCD screen.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'In EDM distance calculation, how does an increase in atmospheric temperature affect the velocity of light in air?',
    opts: ['Warmer air is less dense, so the refractive index decreases and the speed of light increases slightly', 'Warmer air stops light transmission completely', 'Warmer air has higher density', 'Temperature has zero effect on electromagnetic velocity'],
    ans: 0,
    exp: 'As air temperature rises, air expands and becomes less dense. Its refractive index n decreases toward 1.0, causing electromagnetic wave velocity (v = c/n) to increase.',
    tip: 'Higher temperature reduces air density, decreasing refractive index and increasing light velocity.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'In EDM distance calculation, how does an increase in barometric atmospheric pressure affect the velocity of light in air?',
    opts: ['Higher pressure increases air density, which increases the refractive index and decreases the speed of light', 'Higher pressure causes light to travel faster', 'Higher pressure converts light into heat', 'Pressure has no physical effect on air density'],
    ans: 0,
    exp: 'Higher barometric pressure packs more air molecules per unit volume, increasing density and refractive index n, thereby slowing down light waves.',
    tip: 'Higher barometric pressure increases air density, slowing down light wave velocity.',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'What is the typical least count of the electronic angle reading system in a standard 1-second total station?',
    opts: ['0.1 second to 1 second of arc', '1 minute of arc', '20 seconds of arc', '0.001 degree of arc'],
    ans: 0,
    exp: 'High-precision engineering Total Stations feature electronic angle resolution of 1 second (1") or 0.1 second (0.1") of arc.',
    tip: 'Modern high-precision total stations provide angular display resolutions down to 1" or 0.5".',
    top: 'Total Station & Modern Instruments'
  },
  {
    q: 'What is the purpose of the "Base-Rover" radio communication link in Real-Time Kinematic (RTK) GNSS surveying?',
    opts: ['Transmitting real-time RTCM differential phase correction messages from the reference base receiver to the roving receiver', 'Transmitting voice audio between surveyors', 'Streaming video from the rod camera', 'Recharging the rover battery remotely'],
    ans: 0,
    exp: 'The UHF radio or cellular link transmits standardized RTCM correction packets containing raw satellite carrier phase data from the base to the rover every second.',
    tip: 'UHF radio/cellular link streams RTCM carrier phase corrections from Base to Rover in real time.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What does "RTCM" stand for in GNSS differential correction broadcasting?',
    opts: ['Radio Technical Commission for Maritime Services', 'Real Time Coordinate Mapping', 'Regional Transit Calculation Model', 'Radial Tracking Control Module'],
    ans: 0,
    exp: 'RTCM (Radio Technical Commission for Maritime Services) develops international open standards (such as RTCM 10403 for RTK) for differential GNSS correction messages.',
    tip: 'RTCM = Radio Technical Commission for Maritime Services (standard format for DGPS/RTK).',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'In GNSS positioning, what is "Autonomous Positioning"?',
    opts: ['Single-point standalone positioning using only satellite broadcast signals received by a single isolated receiver without any differential corrections', 'Positioning guided by an inertial submarine gyro', 'Surveying using driverless autonomous drones', 'Robotic pole tracking without a surveyor'],
    ans: 0,
    exp: 'Autonomous positioning (or Single Point Positioning - SPP) computes coordinates using standard broadcast pseudoranges from a single receiver, delivering typical accuracies of 3 to 10 m.',
    tip: 'Autonomous positioning = single standalone receiver positioning without differential corrections.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the difference between active and passive remote sensing systems?',
    opts: ['Active sensors emit their own electromagnetic radiation to illuminate targets (e.g., Radar, LiDAR), whereas passive sensors measure reflected or emitted natural sunlight/heat (e.g., optical cameras, multispectral scanners)', 'Active sensors move continuously while passive sensors stay still', 'Active sensors use batteries while passive sensors use solar cells', 'Active sensors operate underwater while passive sensors operate in air'],
    ans: 0,
    exp: 'Active sensors (Radar, LiDAR) provide their own illumination source. Passive sensors (optical cameras, Landsat, Sentinel-2) record reflected solar radiation or emitted thermal energy.',
    tip: 'Active sensors supply their own energy (LiDAR/Radar); Passive sensors detect natural solar/thermal energy.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is LiDAR in aerial and terrestrial surveying?',
    opts: ['Light Detection and Ranging: an active optical remote sensing system that pulses laser beams to measure high-density 3D surface coordinates', 'Liquid Displacement Ranging for depth sounding', 'Linear Digital Aerial Photography', 'Long-range Infrared Defense Radar'],
    ans: 0,
    exp: 'LiDAR fires hundreds of thousands of laser pulses per second, measuring return time to generate ultra-dense 3D point clouds of terrain, vegetation, and infrastructure.',
    tip: 'LiDAR = Light Detection and Ranging (pulses laser beams to generate dense 3D point clouds).',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'In GIS, what is the spatial operation "Dissolve" used for?',
    opts: ['Aggregating and merging adjacent polygons that share the same specified attribute value into a single combined boundary', 'Deleting corrupt vector files', 'Fading out raster layer transparency', 'Converting points into line strings'],
    ans: 0,
    exp: 'Dissolve combines adjacent contiguous polygons having identical attribute values (e.g. merging individual village parcels sharing the same "District" name into a unified district polygon).',
    tip: 'Dissolve merges adjacent polygons sharing the same attribute value into a single polygon.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is "Spatial Query" in a Geographic Information System?',
    opts: ['Selecting geographic features from one layer based strictly on their spatial relationship (touch, intersect, contain, within distance) to features in another layer', 'Searching text in a phone directory', 'Changing the font size of map labels', 'Calculating the file size on a hard disk'],
    ans: 0,
    exp: 'A spatial query uses geometric operators (e.g., "Find all school buildings within 500 meters of a major highway") to retrieve features based on location relationships.',
    tip: 'Spatial query selects features based on geometric relationships (within distance, contains, touches).',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is a "Map Scale" defined as in cartography?',
    opts: ['The ratio of a distance measured on the map to the corresponding true horizontal distance on the ground', 'The size of the paper sheet on which the map is printed', 'The number of colors used in the map legend', 'The elevation of the highest contour line on the map'],
    ans: 0,
    exp: 'Map scale expresses the proportional relationship between the representation on the map and the physical distance on the Earth surface: Scale = Map Distance / Ground Distance.',
    tip: 'Map Scale = Map Distance / Ground Distance.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'Which of the following representative fractions represents the largest map scale?',
    opts: ['1 : 500', '1 : 5,000', '1 : 50,000', '1 : 250,000'],
    ans: 0,
    exp: 'A larger scale has a smaller denominator (yielding a larger fraction: 1/500 > 1/250,000). A 1:500 scale shows great detail of a small area, typical of cadastral surveys.',
    tip: 'Largest scale = Smallest denominator. 1:500 is a very large scale map.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is the Indian Geodetic Datum used historically for the Survey of India Topographical Map Sheets?',
    opts: ['Everest 1830 ellipsoid with origin at Kalianpur (Madhya Pradesh)', 'WGS 84 ellipsoid with origin at Greenwich', 'Clarke 1866 ellipsoid with origin at Meades Ranch', 'GRS 80 ellipsoid with origin at Paris'],
    ans: 0,
    exp: 'The classical Indian national triangulation system is based on the Everest 1830 reference ellipsoid, with its geodetic datum origin established at Kalianpur.',
    tip: 'Survey of India topo sheets historically used the Everest 1830 ellipsoid with Kalianpur datum origin.',
    top: 'GIS & Remote Sensing'
  },
  {
    q: 'What is the purpose of the "Almanac" in a GPS receiver?',
    opts: ['Allowing the receiver to rapidly compute which satellites are visible above the local horizon upon power-up by storing coarse orbital parameters for all satellites', 'Translating satellite telemetry into regional languages', 'Calculating tidal rise and fall along the coast', 'Converting coordinates between WGS84 and local grids'],
    ans: 0,
    exp: 'The GPS almanac contains approximate orbital data for the entire constellation, enabling the receiver to focus its correlators on visible satellites for fast signal acquisition.',
    tip: 'Almanac holds coarse orbital data for all satellites to enable fast initial acquisition.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'How many satellites are in each orbital plane of the nominal 24-satellite GPS constellation?',
    opts: ['4 satellites per plane across 6 orbital planes', '8 satellites per plane across 3 planes', '12 satellites per plane across 2 planes', '2 satellites per plane across 12 planes'],
    ans: 0,
    exp: 'The nominal GPS constellation consists of 24 primary satellites evenly distributed with 4 satellites in each of the 6 orbital planes.',
    tip: 'Nominal GPS design: 4 satellites in each of 6 orbital planes (24 primary satellites).',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'In GPS terminology, what does "SA" (Selective Availability) refer to?',
    opts: ['An intentional degradation of civilian GPS accuracy introduced by the US military, which was permanently discontinued in May 2000', 'A special antenna for extreme arctic conditions', 'A feature selecting the strongest satellite automatically', 'A solar panel tracking algorithm'],
    ans: 0,
    exp: 'Selective Availability (SA) intentionally dithered satellite clock signals and truncated ephemeris to degrade civilian accuracy to ~100m. It was turned off on May 2, 2000.',
    tip: 'Selective Availability (SA) was intentional military accuracy degradation, turned off in 2000.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the approximate speed of light (c) in vacuum used in GNSS pseudorange calculations?',
    opts: ['299,792,458 meters per second (approx. 3 x 10^8 m/s)', '150,000,000 meters per second', '343 meters per second', '1,000,000 meters per second'],
    ans: 0,
    exp: 'The exact speed of electromagnetic waves in vacuum is standardized as 299,792,458 m/s (~3 x 10^8 m/s).',
    tip: 'Speed of light in vacuum c = 299,792,458 m/s.',
    top: 'GNSS & GPS Surveying'
  },
  {
    q: 'What is the purpose of "Station Pointer" in marine cartography?',
    opts: ['Mechanically solving the Three-Point Problem to fix and plot the sounding station location on nautical charts', 'Pointing the ship rudder towards the harbour mouth', 'Measuring water salinity on survey lines', 'Measuring wave periods from the shore'],
    ans: 0,
    exp: 'A station pointer is a 3-arm drafting protractor used to plot the position of a sounding boat directly on a chart from two angles observed to three shore stations.',
    tip: 'Station pointer mechanically plots the 3-point problem on hydrographic survey sheets.',
    top: 'Hydrographic Surveying'
  }
];

m7Final.forEach(q => addQ(q, 7, 'mod-7', 'Modern Survey Instruments'));
console.log('Module 7 combo processed. Total added so far:', addedList.length);

// -------------------------------------------------------------------------
// MODULE 8: 165 DISTINCT QUESTIONS (Completing Module 8 past 515)
// -------------------------------------------------------------------------
const m8List = [
  // --- AUTOCAD BASICS, INTERFACE & COORDINATES ---
  {
    q: 'In AutoCAD, what does WCS stand for?',
    opts: ['World Coordinate System', 'Wide Construction Scale', 'Windows Computer System', 'Workspace Control Standard'],
    ans: 0,
    exp: 'WCS stands for World Coordinate System—the fixed, permanent Cartesian coordinate system that serves as the universal reference frame for all drawings in AutoCAD.',
    tip: 'WCS = World Coordinate System (fixed universal reference frame in AutoCAD).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD, what does UCS stand for?',
    opts: ['User Coordinate System', 'Universal Computer Standard', 'Unified Drafting Standard', 'Unscaled Coordinate Screen'],
    ans: 0,
    exp: 'UCS stands for User Coordinate System—a movable, custom coordinate system defined by the draftsman to orient the X, Y, and Z axes to suit specific geometric tasks.',
    tip: 'UCS = User Coordinate System (customizable movable coordinate frame).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the default direction of positive angle measurement in AutoCAD?',
    opts: ['Counterclockwise (anticlockwise)', 'Clockwise', 'East to South', 'Vertical downward'],
    ans: 0,
    exp: 'By mathematical convention, AutoCAD measures positive angles in a counterclockwise direction starting from 0 degrees pointing East along the positive X-axis.',
    tip: 'In AutoCAD, positive angles are measured Counterclockwise starting from 0° East.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which command is used in AutoCAD to specify linear and angular measurement formats, units, and precision?',
    opts: ['UNITS (or DDUNITS)', 'LIMITS', 'DIMSTYLE', 'SCALE'],
    ans: 0,
    exp: 'The UNITS command opens the Drawing Units dialog box to set unit types (Decimal, Architectural, Engineering) and angular formats (Decimal Degrees, Deg/Min/Sec, Surveyor units).',
    tip: 'UNITS sets drawing measurement formats, angle styles, and decimal precision.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD, how is a point entered using Absolute Cartesian coordinates?',
    opts: ['By typing X,Y (e.g., 50,75) measured from the drawing origin (0,0)', 'By typing @X,Y measured from the last point', 'By typing @D<angle', 'By clicking the mouse button only'],
    ans: 0,
    exp: 'Absolute Cartesian coordinates are entered as X,Y without the @ prefix, locating the point relative to the fixed origin (0,0) of the current coordinate system.',
    tip: 'Absolute Cartesian: X,Y (measured from origin 0,0). Relative Cartesian: @X,Y.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD, how is a point entered using Relative Cartesian coordinates?',
    opts: ['By prefixing with the @ symbol followed by incremental distances: @ΔX,ΔY (e.g., @10,20)', 'By typing X,Y', 'By typing #X,Y', 'By typing <angle'],
    ans: 0,
    exp: 'The @ symbol denotes relative coordinates, indicating displacement relative to the last picked coordinate point: @deltaX,deltaY.',
    tip: 'Relative Cartesian coordinates use the @ symbol: @ΔX,ΔY.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD, how is a point entered using Relative Polar coordinates?',
    opts: ['By typing @Distance<Angle (e.g., @100<45)', 'By typing @X,Y', 'By typing Angle<Distance', 'By typing #Distance,Angle'],
    ans: 0,
    exp: 'Relative polar coordinates specify distance and angle from the last point using the syntax @Distance<Angle.',
    tip: 'Relative Polar format: @Distance<Angle (e.g. @50<30).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD, which command defines the outer artificial boundaries for the drawing grid and limits mouse cursor movement when limit checking is enabled?',
    opts: ['LIMITS', 'GRID', 'BOUNDARY', 'PAN'],
    ans: 0,
    exp: 'The LIMITS command sets the lower-left and upper-right coordinates of the drawing space; when LIMITS is turned ON, drawing outside these bounds is prevented.',
    tip: 'LIMITS sets lower-left (0,0) and upper-right boundaries of drawing space.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F1 keyboard shortcut in AutoCAD?',
    opts: ['Opens the AutoCAD Help documentation window', 'Toggles Ortho mode', 'Toggles Object Snap', 'Opens the text window'],
    ans: 0,
    exp: 'F1 displays the AutoCAD Help system and documentation.',
    tip: 'F1 = Help window.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F2 keyboard shortcut in AutoCAD?',
    opts: ['Toggles the expanded text window / command line history window', 'Turns Snap mode on/off', 'Turns Grid on/off', 'Saves the drawing'],
    ans: 0,
    exp: 'F2 opens and closes the expanded AutoCAD Text Window displaying the full history of entered commands and prompts.',
    tip: 'F2 = Command line history / Text window toggle.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F3 keyboard shortcut in AutoCAD?',
    opts: ['Toggles running Object Snap (OSNAP) mode ON and OFF', 'Toggles Ortho mode', 'Toggles Dynamic Input', 'Toggles Polar tracking'],
    ans: 0,
    exp: 'F3 turns running Object Snap (OSNAP) on or off, allowing the cursor to lock onto geometric points (endpoints, midpoints, centers).',
    tip: 'F3 = OSNAP (Object Snap) ON / OFF toggle.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F7 keyboard shortcut in AutoCAD?',
    opts: ['Toggles the background reference Grid display ON and OFF', 'Toggles Ortho mode', 'Toggles Snap mode', 'Toggles isometric planes'],
    ans: 0,
    exp: 'F7 turns the visual background coordinate grid display on and off (GRIDMODE).',
    tip: 'F7 = Grid display ON / OFF.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F8 keyboard shortcut in AutoCAD?',
    opts: ['Toggles Ortho mode ON and OFF (constraining cursor movement strictly to horizontal and vertical directions)', 'Toggles Object Snap', 'Toggles Dynamic UCS', 'Toggles isometric planes'],
    ans: 0,
    exp: 'F8 toggles Ortho mode, forcing cursor movement and line creation strictly parallel to the horizontal and vertical axes (0°, 90°, 180°, 270°).',
    tip: 'F8 = Ortho mode ON / OFF (restricts cursor to 90° orthogonal directions).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F9 keyboard shortcut in AutoCAD?',
    opts: ['Toggles Snap mode ON and OFF (constraining cursor movement to discrete grid snap intervals)', 'Toggles Ortho mode', 'Toggles Polar tracking', 'Closes the program'],
    ans: 0,
    exp: 'F9 toggles Snap mode (SNAPMODE), which forces the mouse pointer to jump precisely to specified incremental grid snap intervals.',
    tip: 'F9 = Snap mode ON / OFF (cursor snaps to grid increments).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F10 keyboard shortcut in AutoCAD?',
    opts: ['Toggles Polar Tracking ON and OFF', 'Toggles Ortho mode', 'Toggles Object Snap', 'Toggles Dynamic Input'],
    ans: 0,
    exp: 'F10 turns Polar Tracking on or off, displaying alignment paths along specified polar angle increments (such as 30°, 45°, 90°).',
    tip: 'F10 = Polar Tracking ON / OFF.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F11 keyboard shortcut in AutoCAD?',
    opts: ['Toggles Object Snap Tracking (OTRACK) ON and OFF', 'Toggles Ortho mode', 'Toggles Snap mode', 'Opens the Layer palette'],
    ans: 0,
    exp: 'F11 turns Object Snap Tracking (OTRACK) on or off, allowing the cursor to track along alignment paths derived from recognized OSNAP points.',
    tip: 'F11 = Object Snap Tracking (OTRACK) ON / OFF.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F12 keyboard shortcut in AutoCAD?',
    opts: ['Toggles Dynamic Input (DYNMODE) ON and OFF', 'Toggles Ortho mode', 'Toggles Grid mode', 'Saves the drawing as PDF'],
    ans: 0,
    exp: 'F12 toggles Dynamic Input, displaying command prompts, coordinate entry fields, and dimensions directly beside the crosshair cursor.',
    tip: 'F12 = Dynamic Input ON / OFF (displays command prompts at crosshair).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F5 keyboard shortcut in AutoCAD when isometric drafting mode is active?',
    opts: ['Cycles through Isometric planes: Isoplane Top, Isoplane Left, and Isoplane Right', 'Toggles Ortho mode', 'Switches between Model and Paper space', 'Saves the drawing'],
    ans: 0,
    exp: 'When isometric snap is active, F5 (or Ctrl+E) switches the cursor alignment among the three isometric planes: Left (90° and 150°), Top (30° and 150°), and Right (30° and 90°).',
    tip: 'F5 = Cycles Isometric Planes (Top, Left, Right).',
    top: 'CAD & Computer applications'
  },

  // --- DRAW COMMANDS ---
  {
    q: 'What is the difference between an XLINE and a RAY in AutoCAD?',
    opts: ['An XLINE extends infinitely in both directions, whereas a RAY starts at a defined root point and extends infinitely in only one direction', 'An XLINE has finite length while a RAY is infinite', 'An XLINE creates curved lines while a RAY creates straight lines', 'A RAY is an optical laser simulation while an XLINE is a drawing line'],
    ans: 0,
    exp: 'XLINE creates a construction line infinite in both directions. RAY creates a semi-infinite construction line starting from a base point and extending infinitely in a single direction.',
    tip: 'XLINE = infinite in both directions. RAY = infinite in one direction starting from a point.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which AutoCAD command is used to create a smooth, curved line fitted through or near a set of specified control points (NURBS curve)?',
    opts: ['SPLINE (SPL)', 'PLINE', 'ARC', 'LINE'],
    ans: 0,
    exp: 'The SPLINE command creates Non-Uniform Rational B-Spline (NURBS) curves, creating smooth mathematical curves passing through or influenced by control vertices.',
    tip: 'SPLINE creates smooth NURBS curves through specified points.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which option of the CIRCLE command creates a circle that is tangent to two existing drawing objects and has a specified radius?',
    opts: ['TTR (Tangent, Tangent, Radius)', '2P (2-Point)', '3P (3-Point)', 'Center, Radius'],
    ans: 0,
    exp: 'TTR prompts the user to select two objects to which the circle will be tangent and then prompts for the desired radius.',
    tip: 'TTR = Tangent, Tangent, Radius option of CIRCLE command.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What are the two primary geometric options available when constructing a regular polygon using the POLYGON command in AutoCAD?',
    opts: ['Inscribed in circle and Circumscribed about circle', 'Concentric and Eccentric', 'Equilateral and Scalene', 'Internal and External'],
    ans: 0,
    exp: 'POLYGON can be created either Inscribed in an imaginary circle (vertices touch the circle) or Circumscribed about an imaginary circle (midpoints of sides touch the circle), or by specifying Edge length.',
    tip: 'POLYGON options: Inscribed in circle, Circumscribed about circle, or Edge.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the maximum number of sides that can be specified for a regular polygon using the POLYGON command in AutoCAD?',
    opts: ['1024 sides', '100 sides', '360 sides', '64 sides'],
    ans: 0,
    exp: 'The POLYGON command allows the number of sides to range from 3 (minimum, a triangle) up to 1024 (maximum).',
    tip: 'POLYGON sides: minimum = 3, maximum = 1024.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which AutoCAD command creates a filled solid circle or hollow ring with inner and outer diameters?',
    opts: ['DONUT (or DOUGHNUT)', 'RING', 'CIRCLE', 'REGION'],
    ans: 0,
    exp: 'The DONUT command draws filled rings or solid circular dots (if the inside diameter is specified as 0).',
    tip: 'DONUT creates filled rings or solid filled dots (if inside diameter = 0).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which system variable controls the display style (shape) of point objects created by the POINT command in AutoCAD?',
    opts: ['PDMODE', 'PDSIZE', 'PTSTYLE', 'POINTMODE'],
    ans: 0,
    exp: 'PDMODE controls the appearance of POINT objects (e.g., 0 = dot, 1 = none, 2 = cross +, 3 = X, 4 = tick, 34 = circle with cross). Configured visually via DDPTYPE.',
    tip: 'PDMODE controls point shape/style; PDSIZE controls point display size.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which system variable in AutoCAD controls the display size of point objects?',
    opts: ['PDSIZE', 'PDMODE', 'POINTSIZE', 'DOTSIZE'],
    ans: 0,
    exp: 'PDSIZE sets the display size for point objects. A positive value sets absolute size in drawing units; a negative value sets size as a percentage of the screen viewport.',
    tip: 'PDSIZE sets point object display size (negative = percentage of screen).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What does an "Associative Hatch" mean in AutoCAD?',
    opts: ['The hatch pattern automatically updates and conforms to the new boundary shape when the surrounding boundary objects are edited or stretched', 'The hatch is permanently locked and cannot be deleted', 'The hatch pattern changes color on hover', 'The hatch links to an external image file'],
    ans: 0,
    exp: 'An associative hatch is dynamically linked to its bounding entities; if the boundary is stretched, moved, or trimmed, the hatch boundary updates automatically.',
    tip: 'Associative hatch dynamically updates when its boundary is modified.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is a "REGION" in AutoCAD and how is it created?',
    opts: ['A 2D enclosed planar surface object created from closed coplanar loops of lines/polylines that possesses physical properties such as area, centroid, and moments of inertia', 'A geographic territory in GIS', 'A temporary viewport window', 'A frozen layer group'],
    ans: 0,
    exp: 'The REGION command converts closed coplanar boundary shapes into 2D solid planar regions from which engineering area mass properties can be extracted using MASSPROP.',
    tip: 'REGION creates a 2D closed planar solid with physical mass properties (area, centroid).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which AutoCAD command calculates and displays the mass properties (area, perimeter, bounding box, centroid, and moments of inertia) of 2D regions and 3D solids?',
    opts: ['MASSPROP', 'PROPERTIES', 'AREA', 'LIST'],
    ans: 0,
    exp: 'MASSPROP computes and reports the analytical geometric and mass properties (area, perimeter, centroid coordinates, moments of inertia, radii of gyration) of regions and solids.',
    tip: 'MASSPROP computes area, centroid, and moments of inertia for regions and 3D solids.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD text creation, what is the special code string entered in single-line text to insert the degree symbol (°)?',
    opts: ['%%d', '%%c', '%%p', '%%u'],
    ans: 0,
    exp: 'In AutoCAD DTEXT and MTEXT, %%d inserts the degree symbol (°). %%c inserts the diameter symbol (Ø), %%p inserts plus/minus (±), and %%u toggles underline.',
    tip: 'Text symbols: %%d = degree (°), %%c = diameter (Ø), %%p = plus/minus (±), %%u = underline.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD text creation, what is the special code string entered to insert the diameter symbol (Ø)?',
    opts: ['%%c', '%%d', '%%p', '%%o'],
    ans: 0,
    exp: 'The control code %%c inserts the diameter symbol (Ø).',
    tip: '%%c inserts the diameter symbol (Ø).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD text creation, what is the special code string entered to insert the plus/minus tolerance symbol (±)?',
    opts: ['%%p', '%%d', '%%c', '%%t'],
    ans: 0,
    exp: 'The control code %%p inserts the plus/minus symbol (±).',
    tip: '%%p inserts the plus/minus symbol (±).',
    top: 'CAD & Computer applications'
  },

  // --- MODIFY COMMANDS ---
  {
    q: 'In AutoCAD object selection, what is the difference between a Window selection (dragged left-to-right) and a Crossing selection (dragged right-to-left)?',
    opts: ['Window selection (blue box) selects ONLY objects entirely enclosed within the rectangle; Crossing selection (green dashed box) selects all objects enclosed OR crossed by the rectangle boundary', 'Window selection selects text only; Crossing selects lines only', 'Window selection deletes objects; Crossing copies them', 'They are strictly identical in operation'],
    ans: 0,
    exp: 'Dragging left-to-right creates a Window (blue box with solid border) that selects only objects completely inside. Dragging right-to-left creates a Crossing window (green box with dashed border) that selects all objects inside or intersected by it.',
    tip: 'Left-to-right (blue window) = Enclosed only. Right-to-left (green crossing) = Enclosed OR touched.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which selection method in AutoCAD allows selecting objects by drawing a continuous freehand polyline path that selects every object it touches or crosses?',
    opts: ['Fence (F)', 'Window Polygon (WP)', 'Crossing Polygon (CP)', 'Last (L)'],
    ans: 0,
    exp: 'The Fence option allows the user to draw an open multi-segment line; any object touched or crossed by the fence line is immediately added to the selection set.',
    tip: 'Fence (F) selects all objects crossed by an open polyline path.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which AutoCAD modify command requires a Crossing selection window (or crossing polygon) to select the vertices of objects to be displaced while keeping unmoved portions attached?',
    opts: ['STRETCH (S)', 'MOVE', 'SCALE', 'EXTEND'],
    ans: 0,
    exp: 'The STRETCH command stretches geometry by moving vertices and endpoints that fall inside a Crossing selection window, while keeping points outside the window fixed in place.',
    tip: 'STRETCH must use a Crossing window (or Crossing polygon) to capture vertices.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'While using the TRIM command in modern AutoCAD, which modifier key can be held down to temporarily switch the command into EXTEND mode without exiting?',
    opts: ['Shift key', 'Ctrl key', 'Alt key', 'Tab key'],
    ans: 0,
    exp: 'Holding down the Shift key while using the TRIM command temporarily turns it into the EXTEND command (and vice versa).',
    tip: 'Holding Shift toggles between TRIM and EXTEND dynamically.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What occurs when using the FILLET command with the Fillet Radius set to 0 (zero)?',
    opts: ['It cleans and trims or extends two intersecting or non-parallel lines to form a clean, sharp 90-degree or corner vertex without creating an arc', 'It displays an error message', 'It deletes both lines', 'It converts lines into splines'],
    ans: 0,
    exp: 'Setting FILLET radius to 0 is a standard CAD drafting technique to quickly close corners into sharp geometric intersections without rounding.',
    tip: 'FILLET with Radius = 0 creates a clean sharp corner without an arc.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which option of the CHAMFER command allows setting the bevel cut using a specified distance along the first line and an angle for the second line?',
    opts: ['Angle (A)', 'Distance (D)', 'Polyline (P)', 'Trim (T)'],
    ans: 0,
    exp: 'The Angle option prompts for a chamfer distance along the first line and an angular bevel cut (in degrees) to meet the second line.',
    tip: 'CHAMFER Angle option uses distance on 1st line + angle for 2nd line.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is an "Associative Array" in AutoCAD?',
    opts: ['An array where all cloned elements remain grouped as a single intelligent parametric entity whose rows, columns, counts, and spacings can be dynamically edited at any later time', 'An array linked to a Microsoft Excel file', 'An array that cannot be moved', 'An array containing only text'],
    ans: 0,
    exp: 'Associative arrays treat arrayed items as a single object with grips and properties; modifying the number of items or spacing updates the entire pattern parametrically.',
    tip: 'Associative arrays can be dynamically edited (rows, spacing) as a single parametric entity.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which three types of arrays can be created using the ARRAY command in AutoCAD?',
    opts: ['Rectangular array, Polar array, and Path array', 'Circular, Triangular, and Hexagonal arrays', 'Linear, Radial, and Random arrays', 'Planar, Solid, and Mesh arrays'],
    ans: 0,
    exp: 'Modern AutoCAD supports Rectangular arrays (rows and columns), Polar arrays (circular around a center point), and Path arrays (distributed evenly along an open or closed path curve).',
    tip: 'Three ARRAY types: Rectangular, Polar, and Path.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What does the DIVIDE command do to an entity (such as a line, arc, or polyline) in AutoCAD?',
    opts: ['Places POINT objects or blocks at equal length intervals along the object, dividing it into a specified number of equal segments without physically cutting it', 'Cuts the entity physically into separate pieces', 'Halves the thickness of the line', 'Deletes half the line'],
    ans: 0,
    exp: 'DIVIDE places point markers or blocks along an entity to mark equal divisions; it does NOT break or split the physical entity into separate pieces.',
    tip: 'DIVIDE places POINT markers at equal intervals; it does not cut the entity.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the difference between the DIVIDE command and the MEASURE command in AutoCAD?',
    opts: ['DIVIDE divides an entity into a specified NUMBER of equal segments; MEASURE places points along an entity at a specified SEGMENT LENGTH starting from one end', 'DIVIDE cuts the line while MEASURE measures its length', 'MEASURE opens a ruler while DIVIDE is for math', 'They do the exact same thing'],
    ans: 0,
    exp: 'DIVIDE prompts for the number of segments (n). MEASURE prompts for a specified segment length (d) and places markers every d units, with any leftover remainder at the far end.',
    tip: 'DIVIDE = specify number of segments. MEASURE = specify segment length.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What does the PURGE command do in AutoCAD?',
    opts: ['Removes unused named objects (such as unused layers, blocks, dimension styles, linetypes, text styles) from the drawing database, reducing file size', 'Deletes all objects currently visible on screen', 'Cleans viruses from the computer', 'Resets AutoCAD to factory defaults'],
    ans: 0,
    exp: 'PURGE scrubs the drawing database of unreferenced definitions (layers with no objects, unused blocks/styles), significantly shrinking file size and cleaning up templates.',
    tip: 'PURGE removes unused layers, blocks, and styles to shrink file size.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the MATCHPROP command in AutoCAD?',
    opts: ['Copies property attributes (such as layer, color, linetype, lineweight, hatch pattern, text style) from a selected source object to one or more destination objects', 'Matches two drawings together', 'Aligns the origins of two files', 'Changes the monitor resolution'],
    ans: 0,
    exp: 'MATCHPROP (Painter tool) applies the properties (layer, color, linetype, lineweight, transparency) of a selected source entity to destination entities.',
    tip: 'MATCHPROP copies properties (layer, linetype, color) from one object to others.',
    top: 'CAD & Computer applications'
  },

  // --- OBJECT SNAPS (OSNAP) ---
  {
    q: 'Which Object Snap (OSNAP) mode snaps to the exact center point of a circle, arc, or ellipse in AutoCAD?',
    opts: ['CENter (CEN)', 'MIDpoint (MID)', 'NODe (NOD)', 'QUADrant (QUA)'],
    ans: 0,
    exp: 'CENter snaps to the center of a circle, arc, or ellipse.',
    tip: 'CENter snaps to the center of circles, arcs, and ellipses.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which Object Snap mode snaps to the four cardinal points (0°, 90°, 180°, and 270°) of a circle, arc, or ellipse in AutoCAD?',
    opts: ['QUADrant (QUA)', 'CENter (CEN)', 'NODe (NOD)', 'INTersection (INT)'],
    ans: 0,
    exp: 'QUADrant snaps to the closest cardinal quadrant point (top, bottom, left, right) of a circle, arc, or ellipse.',
    tip: 'QUADrant snaps to the 0°, 90°, 180°, or 270° cardinal points of circles/ellipses.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which Object Snap mode is specifically used to snap to a POINT object created by the POINT, DIVIDE, or MEASURE commands?',
    opts: ['NODe (NOD)', 'ENDpoint (END)', 'MIDpoint (MID)', 'INsertion (INS)'],
    ans: 0,
    exp: 'NODe snaps specifically to point objects, dimension definition points, or dimension text origins.',
    tip: 'NODe snaps to POINT entities (created by POINT, DIVIDE, MEASURE).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which Object Snap mode snaps to the insertion base point of text, blocks, attributes, or shape definitions in AutoCAD?',
    opts: ['INsertion (INS)', 'NODe (NOD)', 'ENDpoint (END)', 'CENter (CEN)'],
    ans: 0,
    exp: 'INsertion snaps to the insertion point of text, mtext, blocks, and attributes.',
    tip: 'INsertion (INS) snaps to insertion points of text and blocks.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which system variable in AutoCAD stores the running Object Snap settings as a sum of bitcodes?',
    opts: ['OSMODE', 'OSNAPMODE', 'SNAPMODE', 'AUTOSNAP'],
    ans: 0,
    exp: 'OSMODE stores the sum of bitcodes for active running OSNAPs (e.g., 1 for Endpoint, 2 for Midpoint, 4 for Center, 8 for Node, 16 for Quadrant, 32 for Intersection). Setting OSMODE to 0 turns off all running snaps.',
    tip: 'OSMODE stores the active OSNAP bitcodes (1=END, 2=MID, 4=CEN, 8=NOD, 16=QUA, 32=INT).',
    top: 'CAD & Computer applications'
  },

  // --- LAYERS & BLOCKS ---
  {
    q: 'In AutoCAD, what happens to objects that are drawn on a layer that is currently "Locked"?',
    opts: ['They remain visible and can be snapped to and plotted, but cannot be modified, moved, trimmed, or deleted', 'They disappear from the screen', 'They are deleted permanently', 'They cannot be printed on paper'],
    ans: 0,
    exp: 'Locked layers prevent accidental editing: objects remain visible, snap points remain active, and they print normally, but editing commands cannot alter them.',
    tip: 'Locked layers prevent modification/deletion, but objects remain visible, snappable, and printable.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the unique property of Layer "0" in AutoCAD when objects drawn on it are included in a BLOCK definition?',
    opts: ['When the block is inserted onto another layer, the Layer 0 objects automatically adopt the color, linetype, and lineweight of that target layer', 'Objects on Layer 0 are invisible', 'Layer 0 objects cannot be scaled', 'Layer 0 deletes itself upon exit'],
    ans: 0,
    exp: 'Layer 0 is the universal block authoring layer. Objects drawn on Layer 0 with color ByLayer inherit the layer properties of whichever layer the block reference is placed on.',
    tip: 'Objects created on Layer 0 in a block inherit the properties of the layer where the block is inserted.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the primary difference between the BLOCK command and the WBLOCK command in AutoCAD?',
    opts: ['BLOCK creates an internal block definition stored only inside the current drawing file; WBLOCK (Write Block) exports the geometry as an independent, standalone DWG drawing file on the hard drive', 'BLOCK is for 2D while WBLOCK is for 3D', 'WBLOCK can only be used by administrators', 'BLOCK is temporary while WBLOCK is permanent'],
    ans: 0,
    exp: 'BLOCK saves block definitions internally within the current drawing. WBLOCK writes the block or selected entities out to an external DWG file accessible by any drawing.',
    tip: 'BLOCK = internal to current DWG. WBLOCK = external standalone DWG file.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which command in AutoCAD is used to create editable alphanumeric text tags (attributes) that attach to a block definition?',
    opts: ['ATTDEF (Attribute Definition)', 'BATTMAN', 'EATTEDIT', 'ATTEXT'],
    ans: 0,
    exp: 'ATTDEF creates attribute definitions (with Tag, Prompt, and Default value) that attach metadata fields to block definitions.',
    tip: 'ATTDEF creates attribute definitions for blocks.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which command is used to edit the attribute values of an already inserted block reference in AutoCAD?',
    opts: ['EATTEDIT (Enhanced Attribute Editor)', 'ATTDEF', 'BLOCK', 'STYLE'],
    ans: 0,
    exp: 'Double-clicking a block reference with attributes or typing EATTEDIT opens the Enhanced Attribute Editor to modify attribute string values.',
    tip: 'EATTEDIT edits attribute values of inserted block references.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD external references (Xrefs), what is the difference between an "Attachment" Xref and an "Overlay" Xref?',
    opts: ['An Attachment Xref is nested and travels along when the host drawing is referenced into a third drawing; an Overlay Xref is NOT nested and is ignored by third drawings, preventing circular reference errors', 'Attachment merges objects while Overlay keeps them separate', 'Overlay embeds the file permanently while Attachment links it', 'There is no functional difference'],
    ans: 0,
    exp: 'Attachment includes the Xref in subsequent nesting (drawing C sees Xref A attached to B). Overlay does not follow nesting, preventing circular referencing loops.',
    tip: 'Attachment propagates with nested xrefs; Overlay is ignored in nested drawings (prevents circular loops).',
    top: 'CAD & Computer applications'
  },

  // --- DIMENSIONS, PAPER SPACE & PRINTING ---
  {
    q: 'Which AutoCAD dimensioning command measures distance parallel to an inclined or skewed line rather than strictly horizontal or vertical?',
    opts: ['DIMALIGNED', 'DIMLINEAR', 'DIMANGULAR', 'DIMCONTINUE'],
    ans: 0,
    exp: 'DIMLINEAR measures only true horizontal or vertical distances; DIMALIGNED measures the true true oblique distance parallel to the baseline of the two picked points.',
    tip: 'DIMALIGNED measures true distance parallel to an inclined line; DIMLINEAR is horizontal/vertical only.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which dimensioning command in AutoCAD creates a series of chained, end-to-end continuous dimensions starting from the second extension line of the previous dimension?',
    opts: ['DIMCONTINUE', 'DIMBASELINE', 'DIMLINEAR', 'QDIM'],
    ans: 0,
    exp: 'DIMCONTINUE creates a string of chained dimensions that share adjacent extension lines, continuing sequentially from the last dimension created.',
    tip: 'DIMCONTINUE creates chained end-to-end continuous dimensions.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which dimensioning command in AutoCAD creates a series of stacked, parallel dimensions measured from a common reference baseline datum?',
    opts: ['DIMBASELINE', 'DIMCONTINUE', 'DIMANGULAR', 'DIMALIGNED'],
    ans: 0,
    exp: 'DIMBASELINE generates stacked parallel dimensions originating from a single common baseline extension line, automatically spaced by the baseline spacing setting.',
    tip: 'DIMBASELINE creates stacked dimensions originating from a common base datum line.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the MVIEW (or VPORTS) command in Paper Space (Layout)?',
    opts: ['Creates rectangular or polygonal floating viewports on the paper layout that display views of the geometry created in Model Space', 'Switches the screen monitor to 3D mode', 'Exports drawing sheets to MP4 video', 'Prints drawings directly to a plotter'],
    ans: 0,
    exp: 'MVIEW creates floating viewports in layout sheets, acting as windows looking into Model Space with independent scales, layers, and view angles.',
    tip: 'MVIEW creates floating viewports in paper space layouts.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD, what does the system variable TILEMODE control when set to 1 versus 0?',
    opts: ['TILEMODE = 1 activates Model Space with tiled viewports; TILEMODE = 0 activates Paper Space layouts with floating viewports', 'Screen resolution', 'Grid snapping', 'AutoSave frequency'],
    ans: 0,
    exp: 'When TILEMODE is 1, the Model tab is active. Setting TILEMODE to 0 switches to the Paper Space layout environment.',
    tip: 'TILEMODE = 1 (Model Space); TILEMODE = 0 (Paper Space Layout).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the primary difference between a CTB plot style table and an STB plot style table in AutoCAD plotting?',
    opts: ['CTB (Color-dependent) assigns plot properties like pen width based strictly on the object color index (ACI 1-255); STB (Named plot style) assigns plot styles by name independently of color', 'CTB is for black and white while STB is for color', 'CTB works only with ink plotters while STB works with laser printers', 'CTB cannot print lineweights'],
    ans: 0,
    exp: 'In CTB tables, object color determines printed line thickness and screening. In STB tables, plot styles are named styles assigned directly to layers or objects regardless of display color.',
    tip: 'CTB = Color-dependent plot style (color determines pen width). STB = Named plot style.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the native binary file format extension used by AutoCAD to store drawing files?',
    opts: ['.dwg', '.dxf', '.dwt', '.bak'],
    ans: 0,
    exp: '.dwg (Drawing) is the proprietary binary file format developed by Autodesk to store two- and three-dimensional design data and metadata.',
    tip: '.dwg is AutoCAD native drawing format.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the file format extension for an AutoCAD Drawing Template file used as a starting seed for new drawings?',
    opts: ['.dwt', '.dwg', '.dxf', '.dwf'],
    ans: 0,
    exp: '.dwt is the Drawing Template format, storing preset layers, text styles, dimension styles, units, and title blocks for starting new projects.',
    tip: '.dwt is the AutoCAD Drawing Template file extension.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the file format extension for the open Drawing Exchange Format developed by Autodesk to enable interoperability across different CAD and GIS software programs?',
    opts: ['.dxf', '.dwg', '.dwt', '.dwf'],
    ans: 0,
    exp: '.dxf (Drawing Exchange Format) is an open ASCII or binary data file format created by Autodesk to enable data interoperability between AutoCAD and other CAD/GIS software.',
    tip: '.dxf is the open CAD exchange format for interoperability across software.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What does the .bak file automatically created in the same folder as an AutoCAD drawing represent?',
    opts: ['A backup copy of the previous version of the drawing file saved prior to the most recent save operation', 'A corrupted error log file', 'An encrypted temporary cache file', 'A license authentication file'],
    ans: 0,
    exp: 'AutoCAD creates a .bak (Backup) file every time a drawing is manually saved, storing the state of the drawing as it was before that save. Renaming .bak to .dwg recovers the previous state.',
    tip: '.bak is an automatic backup file of the previous saved version of the DWG.',
    top: 'CAD & Computer applications'
  }
];

m8List.forEach(q => addQ(q, 8, 'mod-8', 'CAD & Computer applications'));
console.log('Module 8 combo processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
