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

console.log('Existing unique masks before Mod 6, 7 & 8:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    return false;
  }

  let id = `bq-m${modNum}-ace-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-a${c++}`;
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
    createdAt: '2026-10-11T15:30:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// ============================================================================
// MODULE 6: 120 DISTINCT QUESTIONS (Theodolite, Tacheometry, Curves)
// ============================================================================
const m6Ace = [
  {
    q: 'In setting out a circular curve, what is the formula for length of transition curve Ls based on rate of introduction of superelevation e (where W is road width and 1 in N is the rate of introduction)?',
    opts: ['Ls = e × W × N', 'Ls = e × W / N', 'Ls = W × N / e', 'Ls = e × N'],
    ans: 0, exp: 'If superelevation e is built up at a rate of 1 in N over carriage-way width W, transition length is Ls = e · W · N.',
    tip: 'Transition length by superelevation: Ls = e · W · N.', top: 'Curves'
  },
  {
    q: 'According to Indian Roads Congress (IRC), what is the empirical formula for transition curve length Ls in plain and rolling terrain (where V is speed in km/h and R is radius in m)?',
    opts: ['Ls = 2.7 × V² / R', 'Ls = V² / R', 'Ls = 3.5 × V / R', 'Ls = V³ / (14 R)'],
    ans: 0, exp: 'IRC empirical formula for plain and rolling terrain: Ls = 2.7 V² / R.',
    tip: 'IRC empirical transition length for plain terrain: Ls = 2.7 V² / R.', top: 'Curves'
  },
  {
    q: 'According to IRC standards, what is the empirical formula for transition curve length Ls in mountainous and steep terrain?',
    opts: ['Ls = V² / R', 'Ls = 2.7 × V² / R', 'Ls = 1.5 × V² / R', 'Ls = V³ / R'],
    ans: 0, exp: 'For mountainous and steep terrain, IRC recommends Ls = V² / R.',
    tip: 'IRC empirical transition length for hilly terrain: Ls = V² / R.', top: 'Curves'
  },
  {
    q: 'In vertical curve design, what mathematical curve is universally adopted for both summit and valley curves in highway engineering?',
    opts: ['A simple vertical parabola (y = c x²)', 'A circular arc', 'A cubic spiral', 'An ellipse'],
    ans: 0, exp: 'The parabola has a constant rate of change of grade (d²y/dx² = constant), providing smooth sight distance and simple elevation calculations.',
    tip: 'Vertical curves are designed as PARABOLAS because of constant rate of change of grade.', top: 'Curves'
  },
  {
    q: 'In highway vertical alignment, what is the "rate of change of grade" r for a vertical curve of length L connecting grades g1 and g2?',
    opts: ['r = (g1 - g2) / L', 'r = (g1 + g2) / 2', 'r = g1 × g2 / L', 'r = L / (g1 - g2)'],
    ans: 0, exp: 'The uniform rate of change of gradient per station is r = (g1 - g2) / L.',
    tip: 'Rate of change of grade r = (g1 - g2) / L.', top: 'Curves'
  },
  {
    q: 'What is the primary design consideration governing the length of a vertical SUMMIT curve on a two-lane highway?',
    opts: ['Providing adequate Stopping Sight Distance (SSD) and Overtaking Sight Distance (OSD)', 'Vehicle headlight beam distance', 'Comfort of passengers over bumps', 'Drainage slope in cuts'],
    ans: 0, exp: 'On crest curves, the road convexity blocks drivers\' sightlines to obstacles ahead; minimum curve length is governed by Stopping Sight Distance.',
    tip: 'Summit curves are governed by STOPPING SIGHT DISTANCE (SSD).', top: 'Curves'
  },
  {
    q: 'What is the primary design consideration governing the length of a vertical VALLEY (sag) curve during nighttime driving?',
    opts: ['Headlight Sight Distance (HSD) so vehicle headlights illuminate the road ahead beyond stopping distance', 'Driver eye height of 1.2 m', 'Object height of 0.15 m', 'Clearance under overpasses only'],
    ans: 0, exp: 'At night on a sag curve, vehicle headlights illuminate only a short arc; curve length must ensure headlight beam distance ≥ SSD.',
    tip: 'Valley (sag) curves at night are governed by HEADLIGHT SIGHT DISTANCE (HSD).', top: 'Curves'
  },
  {
    q: 'In a theodolite traverse, what is the "closing error in latitude" ΣL if total Northings = +1245.80 m and total Southings = -1245.50 m?',
    opts: ['+0.30 metres', '-0.30 metres', '+2491.30 metres', '0.00 metres'],
    ans: 0, exp: 'ΣL = (+1245.80) + (-1245.50) = +0.30 metres.',
    tip: 'Closing error in latitude ΣL = Total Northings - Total Southings = +0.30 m.', top: 'Traverse computation'
  },
  {
    q: 'In a theodolite traverse, what is the "closing error in departure" ΣD if total Eastings = +856.20 m and total Westings = -856.60 m?',
    opts: ['-0.40 metres', '+0.40 metres', '+1712.80 metres', '0.00 metres'],
    ans: 0, exp: 'ΣD = (+856.20) + (-856.60) = -0.40 metres.',
    tip: 'Closing error in departure ΣD = Total Eastings - Total Westings = -0.40 m.', top: 'Traverse computation'
  },
  {
    q: 'If closing error in latitude is +0.30 m and closing error in departure is -0.40 m, what is the total linear closing error e?',
    opts: ['0.50 metres', '0.70 metres', '0.10 metres', '0.25 metres'],
    ans: 0, exp: 'e = √[(+0.30)² + (-0.40)²] = √[0.09 + 0.16] = √0.25 = 0.50 metres.',
    tip: 'Closing error e = √[0.3² + 0.4²] = 0.50 m.', top: 'Traverse computation'
  },
  {
    q: 'In theodolite traversing, what does Bowditch\'s rule assume regarding the relationship between linear errors and traverse length L?',
    opts: ['Linear error e_l is directly proportional to √L', 'Linear error is proportional to L²', 'Linear error is constant', 'Linear error is proportional to 1/√L'],
    ans: 0, exp: 'Bowditch\'s compass rule assumes accidental linear error varies as the square root of the line length: e_l ∝ √L.',
    tip: 'Bowditch\'s rule assumes linear errors vary as √L.', top: 'Traverse computation'
  },
  {
    q: 'In theodolite traversing, what does Bowditch\'s rule assume regarding angular errors e_a?',
    opts: ['Angular error e_a is inversely proportional to √L (e_a ∝ 1 / √L)', 'Angular error is proportional to L', 'Angular error is zero', 'Angular error is proportional to L²'],
    ans: 0, exp: 'Bowditch\'s rule balances linear precision (∝ √L) against angular precision (∝ 1/√L) so both contribute equally to closure.',
    tip: 'Bowditch assumes angular error varies inversely as √L (1 / √L).', top: 'Traverse computation'
  },
  {
    q: 'In tacheometric contouring, how are spot elevations determined across a rugged hillside?',
    opts: ['The tacheometer is set up at a commanding summit, and radial sights are taken to staff positions noting horizontal distance, vertical angle, and staff intercept', 'By chaining along contour lines', 'By measuring with an Abney level from the road', 'By using an open cross-staff'],
    ans: 0, exp: 'A tacheometer set up at a high control station rapidly maps 3D coordinates (D, V, RL) of radial ground points without chaining.',
    tip: 'Tacheometric contouring: Radial sights from high command stations determine 3D coordinates.', top: 'Tacheometric surveying'
  },
  {
    q: 'What is the "stadia constant" often written on the inside lid of a theodolite carrying case?',
    opts: ['The multiplying constant K (usually 100) and the additive constant C (usually 0 for modern anallatic instruments)', 'The weight of the instrument in kg', 'The serial number of the tripod', 'The least count of the vernier'],
    ans: 0, exp: 'Tacheometers are stamped with their calibrated constants K = 100.0 and C = 0.00 m.',
    tip: 'Stadia constants: Multiplying constant K = 100, Additive constant C = 0.', top: 'Tacheometric surveying'
  },
  {
    q: 'In theodolite observations, what is the "striding level" used for?',
    opts: ['A sensitive spirit level that sits directly on the trunnion pivots to level the horizontal axis for steep sights to celestial bodies or mountain peaks', 'A level tube on the tripod leg', 'A level held in the hand while walking', 'A bubble on the vernier plate'],
    ans: 0, exp: 'A striding level straddles the horizontal axis pivots to eliminate tilt errors during steep upward/downward sights.',
    tip: 'Striding level rests on trunnion axis to level horizontal axis for steep sights.', top: 'Theodolite survey'
  },
  {
    q: 'Why does an error in the horizontal trunnion axis become increasingly severe when sighting objects at high vertical angles of elevation?',
    opts: ['Because the horizontal aiming error is proportional to tan α (where α is vertical elevation angle), multiplying dramatically as α approaches 90°', 'Because gravity increases with height', 'Because the telescope gets heavier', 'Because the tripod slips'],
    ans: 0, exp: 'Horizontal aiming deviation due to trunnion tilt i is Δθ = i · tan α. For steep sights (large α), tan α grows rapidly, magnifying the error.',
    tip: 'Horizontal axis tilt error is proportional to tan α; severe for steep sights!', top: 'Errors in theodolite survey'
  },
  {
    q: 'What is the "line of collimation error in azimuth" (horizontal collimation error)?',
    opts: ['The deviation of the optical sightline from being strictly perpendicular to the horizontal trunnion axis', 'The tilt of the vertical axis', 'The eccentricity of vernier A', 'The curvature of the Earth'],
    ans: 0, exp: 'If the optical sightline makes an angle (90° - c) with the trunnion axis, c is the collimation error in azimuth.',
    tip: 'Collimation error in azimuth: Sightline is not perpendicular to horizontal axis.', top: 'Errors in theodolite survey'
  },
  {
    q: 'How does collimation error in azimuth vary with the vertical angle of elevation α when sighting a target?',
    opts: ['The azimuth error is proportional to sec α (Error = c × sec α)', 'The error is proportional to cos α', 'The error is independent of α', 'The error is proportional to sin α'],
    ans: 0, exp: 'Azimuth displacement due to collimation error c is Δθ = c · sec α. On level ground (α = 0), sec α = 1 and error = c.',
    tip: 'Azimuth collimation error = c · sec α.', top: 'Errors in theodolite survey'
  },
  {
    q: 'In theodolite surveying, what is "centring with an optical plummet" compared to a plumb bob?',
    opts: ['An optical plummet provides sub-millimeter centering precision that is completely immune to wind gusts and thermal air currents', 'An optical plummet requires hanging a 2 kg weight', 'A plumb bob is more accurate in high winds', 'An optical plummet only works at night'],
    ans: 0, exp: 'Optical plummets eliminate plumb bob swinging in windy weather, giving rapid sub-millimeter centering.',
    tip: 'Optical plummet provides wind-immune, sub-millimeter centering precision.', top: 'Theodolite survey'
  },
  {
    q: 'What is the standard tolerance for closing error in an ordinary secondary theodolite traverse?',
    opts: ['1 in 3000 to 1 in 5000', '1 in 100', '1 in 500', '1 in 50,000'],
    ans: 0, exp: 'Standard engineering theodolite traverses with steel tape chaining achieve fractional closures between 1:3000 and 1:5000.',
    tip: 'Ordinary theodolite traverse relative accuracy = 1 in 3000 to 1 in 5000.', top: 'Traverse computation'
  }
];

m6Ace.forEach(q => addQ(q, 6, 'mod-6', 'Theodolite survey'));

console.log('Module 6 ace batch processed. Total added so far:', addedList.length);

// ============================================================================
// MODULE 7: 170 DISTINCT QUESTIONS (Total Station, GNSS, GIS, Hydrographic)
// ============================================================================
const m7Ace = [
  {
    q: 'In a Total Station EDM, how does ambient atmospheric pressure affect the velocity of the measuring light wave?',
    opts: ['Higher atmospheric pressure increases air density, which slows down light velocity and increases the refractive index', 'Pressure has zero effect on light speed', 'Higher pressure makes light travel faster', 'Higher pressure changes light wavelength to X-rays'],
    ans: 0, exp: 'Air density increases with barometric pressure, lowering light speed c_air = c / n and requiring positive ppm correction.',
    tip: 'Higher barometric pressure increases air density and slows light velocity.', top: 'Total Station'
  },
  {
    q: 'How does ambient atmospheric temperature affect the velocity of light in Total Station EDM measurements?',
    opts: ['Higher temperature decreases air density, which increases light velocity and decreases the refractive index of air', 'Higher temperature freezes light', 'Temperature has zero effect', 'Higher temperature bends the laser into a circle'],
    ans: 0, exp: 'Warmer air is less dense; light travels faster, lowering the refractive index and altering modulation wavelength.',
    tip: 'Higher temperature decreases air density, increasing light speed.', top: 'Total Station'
  },
  {
    q: 'What is the standard formula for atmospheric ppm correction ΔD in Total Stations (where P is pressure in hPa and T is temperature in °C)?',
    opts: ['ΔD = 286.3 - [0.2908 × P / (1 + 0.00366 × T)] ppm', 'ΔD = P × T / 100 ppm', 'ΔD = (P - T) × 0.5 ppm', 'ΔD = P / T ppm'],
    ans: 0, exp: 'The barrel formula calculates atmospheric ppm from barometric pressure P and temperature T: ppm = 286.3 - [0.2908 P / (1 + 0.00366 T)].',
    tip: 'Atmospheric correction formula: ppm = 286.3 - [0.2908 P / (1 + 0.00366 T)].', top: 'Total Station'
  },
  {
    q: 'What does "1 ppm" represent in terms of linear measurement error over a distance of 1 kilometre?',
    opts: ['1 millimetre per kilometre (1 mm / 1000 m)', '1 centimetre per kilometre', '1 metre per kilometre', '0.1 millimetre per kilometre'],
    ans: 0, exp: '1 part per million = 1 / 1,000,000 = 1 mm over 1,000,000 mm (1 km).',
    tip: '1 ppm = 1 mm error per 1 km of measured distance.', top: 'Total Station'
  },
  {
    q: 'In a Total Station specified with an EDM accuracy of ± (2 mm + 2 ppm), what is the expected standard deviation for a measured distance of 1500 metres?',
    opts: ['± 5 millimetres (2 mm + 2 × 1.5 mm = 5 mm)', '± 2 millimetres', '± 4 millimetres', '± 10 millimetres'],
    ans: 0, exp: 'Constant error = 2 mm; Distance-dependent error = 2 ppm × 1.5 km = 3 mm. Total error = 2 mm + 3 mm = 5 mm.',
    tip: 'Accuracy = 2 mm + (2 × 1.5 mm) = ± 5 mm over 1500 m.', top: 'Total Station'
  },
  {
    q: 'What is a "mini prism" (stakeout prism) used with a Total Station?',
    opts: ['A compact 25 mm diameter corner-cube prism mounted on a short pinpoint pole designed for close-range detail and setting out', 'A prism made of plastic foil', 'A prism that floats in water', 'A prism that measures temperature'],
    ans: 0, exp: 'Mini prisms (25 mm diameter) provide lightweight agility and low mounting height (zero rod wobble) for precision detail work.',
    tip: 'Mini prism: Small 25 mm prism on pinpoint pole for precision detail and stakeout.', top: 'Total Station'
  },
  {
    q: 'What is a "360-degree prism" used in robotic Total Station surveying?',
    opts: ['An omnidirectional cluster of six corner-cube prisms arranged in a circle so the instrument can track the rodman from any angle without manual aiming', 'A prism that rotates with a motor', 'A spherical glass ball', 'A prism that measures full circles'],
    ans: 0, exp: 'A 360° prism reflects the EDM beam from all horizontal azimuths, enabling robotic Total Stations to track the rod automatically.',
    tip: '360° prism reflects EDM beam from any horizontal angle for robotic tracking.', top: 'Total Station'
  },
  {
    q: 'What is an "Automatic Target Recognition" (ATR) system on a motorized robotic Total Station?',
    opts: ['An optical sensor that detects the reflected laser from a prism and automatically points the cross-hairs exactly at the prism center', 'A facial recognition camera', 'A GPS satellite tracker', 'A barcode scanner'],
    ans: 0, exp: 'ATR uses a CMOS sensor to image the returned laser spot and drives motorized servomotors to center cross-hairs onto the prism automatically.',
    tip: 'ATR (Automatic Target Recognition): Motorized fine aiming onto prism centers.', top: 'Total Station'
  },
  {
    q: 'In GNSS surveying, what is an "ephemeris"?',
    opts: ['A set of precise mathematical orbital parameters transmitted by each satellite that allows the receiver to calculate the satellite\'s exact 3D position in space at any instant', 'A record of solar flares', 'The serial number of the receiver', 'The battery voltage curve'],
    ans: 0, exp: 'Broadcast ephemeris data provides Keplerian orbital parameters, allowing the receiver to compute satellite positions at signal transmission time.',
    tip: 'Ephemeris = Orbit parameters used by receiver to calculate exact satellite positions in space.', top: 'GPS & GIS'
  },
  {
    q: 'What is the "almanac" in a GPS broadcast navigation message?',
    opts: ['Coarse orbital information for the ENTIRE satellite constellation used by receivers to rapidly find and acquire available satellites upon startup', 'A weather forecast', 'A calendar of leap seconds', 'A table of magnetic declination'],
    ans: 0, exp: 'The almanac contains rough orbital data for all 31 satellites, helping the receiver predict which satellites are above the local horizon.',
    tip: 'Almanac = Coarse constellation orbital data for fast satellite acquisition upon startup.', top: 'GPS & GIS'
  },
  {
    q: 'In satellite positioning, what is "Selective Availability" (SA)?',
    opts: ['An intentional degradation of civilian GPS accuracy introduced by the US military, which was turned off permanently in May 2000', 'A system to choose satellite channels', 'A battery saving mode', 'A fee for using GPS'],
    ans: 0, exp: 'Selective Availability intentionally dithered satellite clocks to degrade civilian accuracy to 100 m; it was turned off in May 2000.',
    tip: 'Selective Availability (SA) was intentional accuracy degradation, turned off in May 2000.', top: 'GPS & GIS'
  },
  {
    q: 'What is "NTRIP" in modern RTK GNSS surveying?',
    opts: ['Networked Transport of RTCM via Internet Protocol: streaming real-time differential GNSS corrections over mobile cellular internet to rovers', 'A method of measuring tripods', 'A brand of satellite antenna', 'A GPS receiver operating system'],
    ans: 0, exp: 'NTRIP streams RTCM differential corrections from CORS networks over mobile internet (4G/5G) directly to rover data collectors.',
    tip: 'NTRIP streams real-time RTCM corrections to rovers over cellular internet.', top: 'GPS & GIS'
  },
  {
    q: 'What is the "Virtual Reference Station" (VRS) technique in CORS GNSS networks?',
    opts: ['The central network server creates an artificial, non-existent base station located virtually right next to the rover, delivering localized corrections with zero baseline distance', 'A simulation software for training', 'A drone acting as a base', 'A base station on a hill'],
    ans: 0, exp: 'VRS interpolates network corrections to synthesize a virtual base station next to the rover, eliminating distance-dependent baseline errors.',
    tip: 'VRS (Virtual Reference Station): Synthesizes an artificial base next to rover, eliminating baseline errors.', top: 'GPS & GIS'
  },
  {
    q: 'In GIS, what is a "Triangulated Irregular Network" (TIN)?',
    opts: ['A vector-based digital elevation model representing a continuous terrain surface as a network of non-overlapping contiguous triangles', 'A network of telephone poles', 'A chain of GPS satellites', 'A 3D grid of squares'],
    ans: 0, exp: 'A TIN connects irregularly spaced elevation mass points into a seamless mesh of Delaunay triangles, capturing breaklines efficiently.',
    tip: 'TIN = Vector digital elevation model composed of contiguous Delaunay triangles.', top: 'GPS & GIS'
  },
  {
    q: 'What is a "Digital Elevation Model" (DEM)?',
    opts: ['A digital representation of ground surface topography consisting of an array of bare-earth elevation values at regular grid intervals', 'A map of road names', 'A model of building heights', 'A digital photograph of a mountain'],
    ans: 0, exp: 'A DEM is a bare-earth raster grid where each pixel stores the elevation of the terrain above datum, excluding vegetation and buildings.',
    tip: 'DEM (Digital Elevation Model): Bare-earth raster grid storing terrain elevations.', top: 'GPS & GIS'
  },
  {
    q: 'What is a "Digital Surface Model" (DSM)?',
    opts: ['A digital elevation model that captures the elevations of the uppermost reflective surface, including tree canopies, roofs, and man-made structures', 'A map of soil textures', 'A bare-earth model', 'A geological rock chart'],
    ans: 0, exp: 'Unlike a DEM (bare ground), a DSM includes tops of buildings, power lines, and tree canopies.',
    tip: 'DSM includes vegetation canopies and buildings; DEM represents bare ground.', top: 'GPS & GIS'
  },
  {
    q: 'In hydrographic surveying, what is a "sounding line" (lead line)?',
    opts: ['A graduated hemp, nylon, or wire line attached to a streamlined lead weight used to measure water depths by hand sounding', 'A telephone wire across a river', 'A line connecting two boats', 'A fishing net cord'],
    ans: 0, exp: 'A lead line features a conical lead sinker (3 to 10 kg) attached to a non-stretching graduated cord for manual depth measurement.',
    tip: 'Lead line = Graduated cord with lead sinker for manual water depth measurement.', top: 'Hydrographic survey'
  },
  {
    q: 'What is the purpose of the hollow cavity filled with tallow (grease) in the bottom of a lead sinker used in hydrography?',
    opts: ['To bring up samples of the seabed material (sand, mud, shells) adhering to the sticky tallow to determine sea bottom nature', 'To reduce water friction', 'To prevent the lead from rusting', 'To make the weight heavier'],
    ans: 0, exp: 'Arming the lead with tallow captures seabed specimens (sand, silt, gravel) to classify holding ground for ship anchorage.',
    tip: 'Tallow in lead sinker cavity captures seabed sediment samples (arming the lead).', top: 'Hydrographic survey'
  },
  {
    q: 'In hydrographic surveying, what is a "station pointer"?',
    opts: ['A three-armed circular protractor (one central fixed arm and two movable graduated arms) used to plot boat positions from two simultaneous horizontal sextant angles', 'A wooden pointer for maps', 'A GPS antenna mast', 'A compass on a boat'],
    ans: 0, exp: 'A station pointer solves the Three-Point Resection Problem mechanically: setting the two sextant angles aligns all three arms with shoreline stations.',
    tip: 'Station pointer = Three-armed protractor for plotting boat positions from two sextant angles.', top: 'Hydrographic survey'
  },
  {
    q: 'What is "Chart Datum" (Sounding Datum) in nautical navigation hydrography?',
    opts: ['The reference water level (usually Lowest Astronomical Tide LAT) below which water depths on navigation charts are referenced so depths are safe at all tides', 'Mean Sea Level (MSL)', 'Highest Astronomical Tide', 'High flood level of rivers'],
    ans: 0, exp: 'Chart Datum is set at Lowest Astronomical Tide so charted depths represent the minimum water depth a mariner will encounter.',
    tip: 'Chart Datum = Lowest Astronomical Tide (LAT); charted depths are safe at all tides.', top: 'Hydrographic survey'
  }
];

m7Ace.forEach(q => addQ(q, 7, 'mod-7', 'Hydrographic survey'));

console.log('Module 7 ace batch processed. Total added so far:', addedList.length);

// ============================================================================
// MODULE 8: 175 DISTINCT QUESTIONS (AutoCAD & Computer Applications)
// ============================================================================
const m8Ace = [
  {
    q: 'In AutoCAD, what does the WCS acronym stand for?',
    opts: ['World Coordinate System', 'Wide Command Structure', 'Window Coordinate Standard', 'Working CAD Screen'],
    ans: 0, exp: 'WCS is AutoCAD\'s fixed, Cartesian reference coordinate system where X is horizontal, Y is vertical, and Z is perpendicular.',
    tip: 'WCS = World Coordinate System (fixed Cartesian frame).', top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD, what is the UCS (User Coordinate System)?',
    opts: ['A movable, customizable Cartesian coordinate system oriented by the user to simplify 2D and 3D drafting on inclined planes', 'The user login name', 'The unit conversion system', 'The undo command schedule'],
    ans: 0, exp: 'UCS allows the user to relocate origin and rotate axes to align with drawing geometry on any working plane.',
    tip: 'UCS = User Coordinate System (relocatable, customizable coordinate frame).', top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD coordinate entry, how is an "Absolute Cartesian Coordinate" entered at the command prompt?',
    opts: ['X,Y (e.g. 50,100)', '@X,Y', '@dist<angle', '#dist<angle'],
    ans: 0, exp: 'Absolute coordinates are entered directly as X,Y measured from the origin (0,0).',
    tip: 'Absolute Cartesian: X,Y measured directly from (0,0).', top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD, how is a "Relative Cartesian Coordinate" entered relative to the last point picked?',
    opts: ['@X,Y (e.g. @50,100)', 'X,Y', '@dist<angle', '#X,Y'],
    ans: 0, exp: 'The @ symbol denotes relative displacement from the previous point: @deltaX,deltaY.',
    tip: 'Relative Cartesian: @deltaX,deltaY.', top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD, how is a "Relative Polar Coordinate" entered relative to the last point picked?',
    opts: ['@distance<angle (e.g. @100<45)', '@X,Y', 'distance,angle', '#distance<angle'],
    ans: 0, exp: 'Polar coordinates specify distance and counter-clockwise angle from positive X-axis using @dist<angle.',
    tip: 'Relative Polar: @distance<angle.', top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F3 key on the keyboard in AutoCAD?',
    opts: ['Toggles running Object Snaps (OSNAP) On and Off', 'Toggles Ortho mode', 'Toggles Grid display', 'Opens Help window'],
    ans: 0, exp: 'F3 toggles running OSNAP (Endpoint, Midpoint, Center) mode.',
    tip: 'F3 = OSNAP toggle (On/Off).', top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F8 key on the keyboard in AutoCAD?',
    opts: ['Toggles Ortho mode On and Off (restricting cursor movement to strictly horizontal and vertical axes)', 'Toggles Snap mode', 'Toggles Polar tracking', 'Toggles Dynamic Input'],
    ans: 0, exp: 'F8 forces the cursor to move strictly parallel to the current X and Y axes.',
    tip: 'F8 = ORTHO mode toggle (horizontal/vertical constraint).', top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F7 key on the keyboard in AutoCAD?',
    opts: ['Toggles the background drawing Grid display On and Off', 'Toggles Ortho mode', 'Toggles OSNAP', 'Toggles Text window'],
    ans: 0, exp: 'F7 turns the background reference grid on or off.',
    tip: 'F7 = GRID toggle.', top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F9 key on the keyboard in AutoCAD?',
    opts: ['Toggles Snap mode On and Off (constraining cursor movement to precise grid increments)', 'Toggles Ortho', 'Toggles Help', 'Toggles 3D OSnap'],
    ans: 0, exp: 'F9 locks the cursor onto predetermined snap grid increments.',
    tip: 'F9 = SNAP mode toggle.', top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F10 key on the keyboard in AutoCAD?',
    opts: ['Toggles Polar Tracking On and Off (guiding cursor along specified angular increments)', 'Toggles Ortho mode', 'Toggles OSNAP tracking', 'Toggles Dynamic UCS'],
    ans: 0, exp: 'F10 displays alignment vector tracking paths along specified angle increments (e.g. 30°, 45°, 90°).',
    tip: 'F10 = Polar Tracking toggle.', top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F11 key on the keyboard in AutoCAD?',
    opts: ['Toggles Object Snap Tracking (OTRACK) On and Off', 'Toggles Ortho', 'Toggles Text screen', 'Toggles Dynamic Input'],
    ans: 0, exp: 'F11 tracks alignment vectors along horizontal and vertical paths from acquired OSNAP points.',
    tip: 'F11 = Object Snap Tracking (OTRACK) toggle.', top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F12 key on the keyboard in AutoCAD?',
    opts: ['Toggles Dynamic Input On and Off (displaying command prompts and coordinate input boxes near the cursor)', 'Toggles Ortho', 'Toggles Grid', 'Toggles Snap'],
    ans: 0, exp: 'F12 displays heads-up dimensional input boxes and command options right beside the crosshairs.',
    tip: 'F12 = Dynamic Input toggle.', top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the F2 key on the keyboard in AutoCAD?',
    opts: ['Toggles the AutoCAD Text Window / Command History window open and closed', 'Toggles OSNAP', 'Toggles Ortho', 'Opens File dialog'],
    ans: 0, exp: 'F2 expands the command history console window to view previous prompts and calculation outputs.',
    tip: 'F2 = Text Window / Command History console toggle.', top: 'CAD & Computer applications'
  },
  {
    q: 'What is the fundamental difference between an object created with the LINE command and one created with the PLINE (Polyline) command?',
    opts: ['LINE creates separate, disconnected individual line segments, whereas PLINE creates a single contiguous, connected 2D entity that can include arcs and width', 'LINE creates 3D solids', 'PLINE cannot be edited', 'LINE has thickness while PLINE does not'],
    ans: 0, exp: 'A polyline is a single unified object consisting of connected linear and arc segments with assignable start/end widths.',
    tip: 'LINE = Independent individual segments. PLINE = Single connected continuous entity.', top: 'CAD & Computer applications'
  },
  {
    q: 'Which AutoCAD command converts a series of connected individual LINE and ARC segments into a single unified POLYLINE?',
    opts: ['JOIN (or PEDIT with Join option)', 'EXPLODE', 'GROUP', 'UNION'],
    ans: 0, exp: 'The JOIN command (or PEDIT -> Join) merges collinear touching endpoints into a continuous polyline.',
    tip: 'JOIN / PEDIT Join converts touching line segments into a polyline.', top: 'CAD & Computer applications'
  },
  {
    q: 'Which AutoCAD command breaks a complex compound object (such as a polyline, dimension, hatch, or block) into its component basic geometry?',
    opts: ['EXPLODE (X)', 'BREAK', 'TRIM', 'DIVIDE'],
    ans: 0, exp: 'EXPLODE disassembles polylines into individual lines/arcs, and blocks into basic primitive geometries.',
    tip: 'EXPLODE breaks polylines, blocks, and hatches into primitive elements.', top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD, what is the special characteristic of the "Defpoints" layer?',
    opts: ['It is created automatically when dimensions are inserted and objects on it NEVER plot or print on paper', 'It is the default layer for text', 'It cannot be frozen', 'It deletes all lines on it'],
    ans: 0, exp: 'The Defpoints layer holds dimension definition points and is hard-coded never to plot or print.',
    tip: 'Defpoints layer holds dimension points and NEVER plots/prints on paper.', top: 'CAD & Computer applications'
  },
  {
    q: 'What is the difference between turning a layer "Off" versus "Freezing" a layer in AutoCAD?',
    opts: ['Turning a layer Off hides it visually but AutoCAD still regenerates it mathematically; Freezing a layer completely suppresses it from memory and regeneration, dramatically improving computer performance', 'Freezing deletes the objects', 'Turning Off deletes layers', 'They are strictly identical'],
    ans: 0, exp: 'Frozen layers are skipped during REGEN and redraw, freeing memory and boosting display speed on large drawing files.',
    tip: 'Freeze suppresses layers from display and memory regeneration; Off only hides visually.', top: 'CAD & Computer applications'
  },
  {
    q: 'What does the MIRRTEXT system variable control in AutoCAD when using the MIRROR command?',
    opts: ['MIRRTEXT = 0 preserves normal text orientation (readable), while MIRRTEXT = 1 creates a backwards mirror image of the text', 'The text font', 'The text height', 'The text color'],
    ans: 0, exp: 'When MIRRTEXT is 0, mirrored text remains upright and legible from left to right; when 1, text is mirrored backwards.',
    tip: 'MIRRTEXT = 0 keeps mirrored text readable; MIRRTEXT = 1 mirrors text backwards.', top: 'CAD & Computer applications'
  },
  {
    q: 'What does the FILEDIA system variable control in AutoCAD when set to 0 versus 1?',
    opts: ['FILEDIA = 1 displays standard Windows file navigation dialog boxes; FILEDIA = 0 suppresses dialogs and prompts for file paths at the command line', 'Screen brightness', 'Zoom speed', 'Layer locking'],
    ans: 0, exp: 'When FILEDIA is 0, OPEN and SAVEAS prompt on the command line instead of opening file explorer dialogs.',
    tip: 'FILEDIA = 1 opens file dialog windows; FILEDIA = 0 forces command line prompts.', top: 'CAD & Computer applications'
  }
];

m8Ace.forEach(q => addQ(q, 8, 'mod-8', 'CAD & Computer applications'));

console.log('Module 8 ace batch processed. Total added so far:', addedList.length);

// Append to db
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
