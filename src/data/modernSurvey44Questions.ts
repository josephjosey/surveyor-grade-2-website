import { BankQuestion, MockTest } from '../types';

export const MODERN_SURVEY_44_QUESTIONS: BankQuestion[] = [
  {
    "id": "bq-modinst44-1",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which type of modulation is used in the case of microwave instrument?",
    "options": [
      "Frequency modulation",
      "Amplitude modulation",
      "Carrier wave modulation",
      "Time period modulation"
    ],
    "correctOptionIndex": 0,
    "explanation": "Microwave electronic distance measurement (EDM) instruments (such as the Tellurometer) employ Frequency Modulation (FM), whereas electro-optical instruments using visible light or infrared (such as the Geodimeter and Distomat) use Amplitude Modulation (AM).",
    "rankerTip": "Microwave EDM (Tellurometer) = Frequency Modulation (FM). Light/IR EDM (Geodimeter/Distomat) = Amplitude Modulation (AM).",
    "topic": "EDM - Modulation Techniques",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-2",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Geodimeter uses which of the following waves as a carrier wave?",
    "options": [
      "Microwaves",
      "Visible light",
      "Infra-red",
      "Cosmic rays"
    ],
    "correctOptionIndex": 1,
    "explanation": "Developed by Erik Bergstrand, the Geodimeter was the earliest electro-optical EDM and utilized modulated visible light waves (tungsten/mercury lamps or laser light) as carrier waves.",
    "rankerTip": "Geodimeter = Visible light carrier wave. Tellurometer = Microwave carrier wave.",
    "topic": "EDM - Geodimeter",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-3",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Microwave EDM instrument requires two instrument stations.",
    "options": [
      "TRUE",
      "FALSE",
      "Only in hilly terrain",
      "None of the above"
    ],
    "correctOptionIndex": 0,
    "explanation": "Microwave EDM systems (e.g., Tellurometer) require an active transceiver unit at both ends of the line (a Master station and a Remote station), unlike optical EDMs which use a passive retroreflector/prism.",
    "rankerTip": "Microwave EDM requires two active operator stations (Master + Remote transceiver).",
    "topic": "EDM - Microwave Systems",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-4",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Combination of electronic theodolite and EDM:",
    "options": [
      "total station",
      "digital theodolite",
      "tacheometer",
      "telemeter"
    ],
    "correctOptionIndex": 0,
    "explanation": "A Total Station is an electronic surveying instrument that integrates an electronic transit theodolite with an electronic distance meter (EDM) and an onboard microprocessor.",
    "rankerTip": "Electronic Theodolite + EDM + Microprocessor = Total Station.",
    "topic": "Total Station - Fundamentals",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-5",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "In total station, data is stored in:",
    "options": [
      "Pen drive",
      "Data card",
      "Microprocessor",
      "External hardware"
    ],
    "correctOptionIndex": 2,
    "explanation": "The observed angles and distances in a total station are processed and held internally via its microprocessor and onboard data storage.",
    "rankerTip": "Primary internal storage and computation is managed directly by the onboard microprocessor.",
    "topic": "Total Station - Data Storage",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-6",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Vertical angle is measured in the total station as:",
    "options": [
      "zenith angle",
      "depression angle",
      "nadir angle",
      "all of above"
    ],
    "correctOptionIndex": 0,
    "explanation": "Modern total stations reference vertical angles from the zenith (0° directly overhead), measuring zenith angle Z (90° at the horizontal plane).",
    "rankerTip": "Zenith = 0° (overhead). Horizon = 90°. Nadir = 180° (directly below).",
    "topic": "Total Station - Angle Measurement",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-7",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which of the following indicates the formula for converting slope distance to horizontal distance in total station?",
    "options": [
      "S = H (sin z)",
      "H = S · S (sin z)",
      "H · H = S (sin z)",
      "H = S (sin z)"
    ],
    "correctOptionIndex": 3,
    "explanation": "When the vertical angle is referenced as a zenith angle z, the horizontal distance H is related to the measured slope distance S by H = S sin(z).",
    "rankerTip": "Formula: H = S sin(z) and V = S cos(z), where z is the zenith angle.",
    "topic": "Total Station - Computations",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-8",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "When total station is sighted to the target, which of the operation acts first?",
    "options": [
      "Rotation of optical axis",
      "Rotation of vertical axis",
      "Rotation of horizontal axis",
      "Rotation of line of collimation"
    ],
    "correctOptionIndex": 0,
    "explanation": "Aligning the telescope onto the optical center of the retroreflector prism requires primary rotation/alignment along the optical axis.",
    "rankerTip": "Target sighting initiates with optical axis rotation toward the prism.",
    "topic": "Total Station - Operations",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-9",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which of the following indicates the correct set of the combination of total station?",
    "options": [
      "Theodolite, compass",
      "theodolite, EDM",
      "Electronic theodolite, EDM",
      "EDM, GPS"
    ],
    "correctOptionIndex": 2,
    "explanation": "A total station specifically combines an electronic theodolite (electronic digital reading circles) with an EDM.",
    "rankerTip": "The precise definition is Electronic Theodolite + EDM.",
    "topic": "Total Station - Components",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-10",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which among the following doesn't indicate the basic calculation of the total station?",
    "options": [
      "Horizontal distance",
      "Slope distance",
      "Vertical distance",
      "Co-ordinate calculations"
    ],
    "correctOptionIndex": 1,
    "explanation": "The slope distance is directly measured by the instrument's EDM. Horizontal distance, vertical elevation difference, and (X, Y, Z) coordinates are derived calculations computed by the internal processor.",
    "rankerTip": "Slope distance is an observed measurement; horizontal distance and coordinates are calculated values.",
    "topic": "Total Station - Basic Calculations",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-11",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "The data obtained from total station can be used in which among the following software directly?",
    "options": [
      "Primavera",
      "STAAD PRO",
      "Autodesk Revit",
      "surfer"
    ],
    "correctOptionIndex": 3,
    "explanation": "Surfer is a 3D surface modeling, gridding, and contour mapping software that directly accepts coordinate point files (X, Y, Z) exported from total stations.",
    "rankerTip": "Surfer = 3D surface modeling and contouring software using total station ASCII coordinate points.",
    "topic": "Total Station - Post-Processing Software",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-12",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which program is used for erecting perpendicular line to base line [in total station]?",
    "options": [
      "Stake out",
      "Free station",
      "reference line",
      "tie distance"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Reference Line program in total station firmware is used to define a baseline and set out or measure points with chainage and perpendicular offset relative to that baseline.",
    "rankerTip": "Reference line program = chainage & perpendicular offset relative to a defined baseline.",
    "topic": "Total Station - Onboard Programs",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-13",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which program is used for setting out points in total station?",
    "options": [
      "Stake out",
      "Free station",
      "reference line",
      "tie distance"
    ],
    "correctOptionIndex": 0,
    "explanation": "Stake out (or Setting Out) is the dedicated program used in the field to locate and mark predetermined coordinate points on the ground.",
    "rankerTip": "Setting out design coordinates on ground = Stake Out program.",
    "topic": "Total Station - Onboard Programs",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-14",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which instrument is used to find out the coordinates of a reflection and at the same time measuring the vertical angles?",
    "options": [
      "auto level",
      "total station",
      "theodolite",
      "transit theodolite"
    ],
    "correctOptionIndex": 1,
    "explanation": "A total station measures the distance to a reflector/prism (reflection) and vertical/horizontal angles simultaneously to compute 3D coordinate positions.",
    "rankerTip": "Simultaneous prism distance + vertical angle + horizontal angle = Total Station.",
    "topic": "Total Station - Fundamentals",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-15",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "What is the shape of single reflector prism?",
    "options": [
      "cube corner",
      "cuboid corner",
      "circular",
      "triangular corner"
    ],
    "correctOptionIndex": 0,
    "explanation": "Retroreflectors used in surveying are cube corner (corner-cube / trihedral) prisms composed of three mutually perpendicular reflecting faces.",
    "rankerTip": "Cube corner (triple prism / retroreflector) reflects light back parallel to its incident direction.",
    "topic": "Total Station - Prisms & Reflectors",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-16",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "In which conditions, the LCD screen of total station does not work?",
    "options": [
      "cold",
      "hot",
      "warm",
      "wind"
    ],
    "correctOptionIndex": 0,
    "explanation": "Liquid crystals in LCD screens lose their responsiveness and freeze in extreme cold temperatures.",
    "rankerTip": "Extreme cold freezes liquid crystal molecules, causing LCD display sluggishness or failure.",
    "topic": "Total Station - Environmental Limits",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-17",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Faulty temperature and pressure measurement occurs by which source of error in EDM?",
    "options": [
      "Personal",
      "Instrumental",
      "Natural",
      "Environmental"
    ],
    "correctOptionIndex": 0,
    "explanation": "Incorrect reading or entering of ambient atmospheric temperature and barometric pressure values into the EDM by the operator constitutes a personal (human) error.",
    "rankerTip": "Operator entering wrong temperature/pressure = Personal error in ppm atmospheric correction.",
    "topic": "EDM - Sources of Error",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-18",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which are dedicated to the particular instrument and can store and process surveying observation?",
    "options": [
      "Data recorders",
      "pocket calculators",
      "field notebooks",
      "pen drives"
    ],
    "correctOptionIndex": 0,
    "explanation": "Electronic data recorders (data collectors / electronic field books) are dedicated units that record, store, and process survey observations.",
    "rankerTip": "Data recorder / Electronic field book stores observations and field codes digitally.",
    "topic": "Total Station - Data Collectors",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-19",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which is fitted with a total station capable of storing 900 to 10000 points?",
    "options": [
      "memory card",
      "data recorder",
      "internal memory",
      "field computer"
    ],
    "correctOptionIndex": 2,
    "explanation": "Total stations are equipped with internal solid-state memory capable of storing between 900 and 10,000 coordinate points.",
    "rankerTip": "Onboard internal memory stores 900 to 10,000 survey points.",
    "topic": "Total Station - Memory Specifications",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-20",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "What is the advantage of total station?",
    "options": [
      "instrument is costly",
      "does not provide field notes",
      "direct observation of points not possible",
      "greater accuracy in area computations"
    ],
    "correctOptionIndex": 3,
    "explanation": "Eliminating manual reading/recording errors provides high-precision coordinates, resulting in greater accuracy in area and volume computations.",
    "rankerTip": "Total station advantage = Greater accuracy in coordinate, area, and volume computations.",
    "topic": "Total Station - Advantages",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-21",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "What is the disadvantage of total station?",
    "options": [
      "automation of old maps",
      "local language support",
      "full GIS creation",
      "the instrument is costly"
    ],
    "correctOptionIndex": 3,
    "explanation": "The high capital cost of the instrument and maintenance is its primary disadvantage.",
    "rankerTip": "Major disadvantage = High instrument cost and skilled personnel requirement.",
    "topic": "Total Station - Disadvantages",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-22",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which is the total station with latest technology?",
    "options": [
      "mechanical",
      "semi automatic",
      "manual",
      "automatic"
    ],
    "correctOptionIndex": 3,
    "explanation": "Modern motorized robotic / automatic total stations (with automatic target recognition and motorized tracking) represent the state-of-the-art.",
    "rankerTip": "Automatic / Robotic total stations operate with auto-tracking servomotors.",
    "topic": "Total Station - Types",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-23",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which program is used to determine polygonal distance in total station?",
    "options": [
      "tie distance",
      "reference line",
      "free station",
      "resection"
    ],
    "correctOptionIndex": 0,
    "explanation": "The Tie Distance (also called Missing Line Measurement / MLM) program computes the distance, elevation difference, and azimuth between successive points measured in a polygonal sequence.",
    "rankerTip": "Tie Distance / Missing Line Measurement = distance between any two target points without occupying them.",
    "topic": "Total Station - Onboard Programs",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-24",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which program is used to determine position of new station with reference to two known points?",
    "options": [
      "tie distance",
      "reference line",
      "free station",
      "resection"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Free Station (Resection) program enables setting up the instrument at any unknown position and determining its coordinates by sighting two or more known control points.",
    "rankerTip": "Free station = occupying an arbitrary point and determining coordinates from known target sights.",
    "topic": "Total Station - Onboard Programs",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-25",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Remote sensing uses which of the following waves in its procedure?",
    "options": [
      "Electric field",
      "Sonar waves",
      "Gamma-rays",
      "Electro-magnetic waves"
    ],
    "correctOptionIndex": 3,
    "explanation": "Remote sensing operates by measuring and recording electromagnetic waves reflected or emitted from Earth's surface across various spectral bands.",
    "rankerTip": "Remote sensing carrier = Electro-magnetic waves (visible, infrared, microwave).",
    "topic": "Remote Sensing - Fundamentals",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-26",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "The system that uses the Sun as a source of electromagnetic energy and records the naturally radiated and reflected energy from the object is called:",
    "options": [
      "Geographical information system",
      "global positioning system",
      "active remote sensing",
      "passive remote sensing"
    ],
    "correctOptionIndex": 3,
    "explanation": "Passive remote sensing systems record radiation provided by natural sources (primarily the Sun or natural thermal emissions), whereas active systems supply their own source of energy (e.g., Radar/LiDAR).",
    "rankerTip": "Sun/Natural radiation = Passive remote sensing. Self-illuminating (Radar/LiDAR) = Active remote sensing.",
    "topic": "Remote Sensing - Active vs Passive",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-27",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which country developed GPS?",
    "options": [
      "USA",
      "India",
      "Russia",
      "Italy"
    ],
    "correctOptionIndex": 0,
    "explanation": "The Global Positioning System (NAVSTAR GPS) was developed by the United States Department of Defense.",
    "rankerTip": "GPS = USA. GLONASS = Russia. Galileo = European Union. NavIC/IRNSS = India. BeiDou = China.",
    "topic": "GPS - History & Development",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-28",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "What is meant by GPS?",
    "options": [
      "Global Processing System",
      "Global Positioning System",
      "Geographic Positioning System",
      "Geographic Processing System"
    ],
    "correctOptionIndex": 1,
    "explanation": "GPS stands for Global Positioning System.",
    "rankerTip": "NAVSTAR GPS = Navigation System with Timing And Ranging Global Positioning System.",
    "topic": "GPS - Fundamentals",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-29",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "What is orbital height for GPS?",
    "options": [
      "1000 km",
      "15000 km",
      "20,180 km",
      "24,280 km"
    ],
    "correctOptionIndex": 2,
    "explanation": "GPS satellites orbit in Medium Earth Orbit (MEO) at a nominal altitude of approximately 20,180 km (~20,200 km).",
    "rankerTip": "GPS orbital altitude = 20,180 km (approx. 20,200 km), period ~ 11 hr 58 min.",
    "topic": "GPS - Space Segment",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-30",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which is the common choice of coordinate for specifying position in global geodesy?",
    "options": [
      "latitude, departure, elevation",
      "latitude, longitude and elevation",
      "northing, southing and easting",
      "southing, azimuth and elevation"
    ],
    "correctOptionIndex": 1,
    "explanation": "Geographic position on the global datum is standardly defined by Latitude, Longitude, and Elevation (ellipsoidal/orthometric height).",
    "rankerTip": "Universal geodetic coordinate triple = Latitude (φ), Longitude (λ), Elevation (h).",
    "topic": "GPS - Coordinate Systems",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-31",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Where are the master control stations of control segment located?",
    "options": [
      "hawaii",
      "Colorado",
      "Garcia",
      "france"
    ],
    "correctOptionIndex": 1,
    "explanation": "The Master Control Station (MCS) of the GPS control segment is located at Schriever Space Force Base in Colorado (Colorado Springs, USA).",
    "rankerTip": "GPS Master Control Station (MCS) = Schriever AFB, Colorado Springs, Colorado, USA.",
    "topic": "GPS - Control Segment",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-32",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "How many operational satellites are available in GPS space segment?",
    "options": [
      "24",
      "26",
      "28",
      "34"
    ],
    "correctOptionIndex": 0,
    "explanation": "The baseline nominal design constellation of the GPS space segment consists of 24 operational satellites distributed evenly across 6 orbital planes.",
    "rankerTip": "Nominal GPS constellation = 24 satellites in 6 orbital planes (4 satellites per plane inclined at 55°).",
    "topic": "GPS - Space Segment",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-33",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which is an application of GPS for visually impaired?",
    "options": [
      "MOBIC",
      "GIS",
      "Ramchers",
      "navigation"
    ],
    "correctOptionIndex": 0,
    "explanation": "MOBIC stands for Mobility of Blind and Elderly People Interacting with Computers, an international GPS-based orientation and navigation aid.",
    "rankerTip": "MOBIC = Mobility of Blind and Elderly People Interacting with Computers.",
    "topic": "GPS - Applications",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-34",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which is an application of GPS for visually impaired in India?",
    "options": [
      "MOBIC",
      "Drishti",
      "Ramchers",
      "navigation"
    ],
    "correctOptionIndex": 1,
    "explanation": "Drishti is a dedicated wireless sensor and GPS/GIS-based pedestrian navigation system developed in India for assisting the visually impaired.",
    "rankerTip": "Drishti = Indian GPS/wireless pedestrian navigation system for the blind.",
    "topic": "GPS - Applications in India",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-35",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "What is meant by the study of something without direct contact?",
    "options": [
      "remote sensing",
      "GIS",
      "tacheometry",
      "ranging"
    ],
    "correctOptionIndex": 0,
    "explanation": "Remote sensing is defined as acquiring information about an object or phenomenon without making physical contact with it.",
    "rankerTip": "Gathering data without physical contact = Remote Sensing.",
    "topic": "Remote Sensing - Definition",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-36",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "What is the practice of determining the geometric properties of objects from photogrammetric images?",
    "options": [
      "photogrammetry",
      "positioning",
      "remote sensing",
      "orientation"
    ],
    "correctOptionIndex": 0,
    "explanation": "Photogrammetry is the science and technology of obtaining reliable 3D geometric measurements and physical properties from photographs.",
    "rankerTip": "Geometric properties from aerial/terrestrial photos = Photogrammetry.",
    "topic": "Photogrammetry - Definition",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-37",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Expansion of GIS:",
    "options": [
      "global information system",
      "global information scheme",
      "geographic information system",
      "geographic information scheme"
    ],
    "correctOptionIndex": 2,
    "explanation": "GIS stands for Geographic Information System.",
    "rankerTip": "GIS = Geographic Information System.",
    "topic": "GIS - Fundamentals",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-38",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which indicates the object that being studied in remote sensing?",
    "options": [
      "target",
      "source",
      "sensor",
      "satellite"
    ],
    "correctOptionIndex": 0,
    "explanation": "In remote sensing systems, the physical entity, surface feature, or ground area under observation is called the target.",
    "rankerTip": "The feature or phenomenon being sensed = Target.",
    "topic": "Remote Sensing - Components",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-39",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which was first Indian remote sensing satellite?",
    "options": [
      "SEO-II",
      "Bhaskara-I",
      "Bhaskara-II",
      "SEO-I"
    ],
    "correctOptionIndex": 1,
    "explanation": "Bhaskara-I (launched by ISRO in June 1979, designated Satellite for Earth Observation - SEO-I) was India's first experimental remote sensing satellite.",
    "rankerTip": "First Indian experimental remote sensing satellite = Bhaskara-I (1979). First operational = IRS-1A (1988).",
    "topic": "Remote Sensing - Indian Satellites",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-40",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which is used to put the satellite into Earth Orbit?",
    "options": [
      "sensors",
      "energy source",
      "radiation",
      "launch vehicle"
    ],
    "correctOptionIndex": 3,
    "explanation": "A rocket / launch vehicle (such as PSLV or GSLV) is used to transport and inject satellites into their targeted Earth orbits.",
    "rankerTip": "Launch Vehicle (PSLV, GSLV, Ariane) places satellites in orbit.",
    "topic": "Remote Sensing - Launch Vehicles",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-41",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which normally includes attribute data?",
    "options": [
      "GIS data",
      "GPS data",
      "CAD",
      "GNS"
    ],
    "correctOptionIndex": 0,
    "explanation": "Unlike standalone geometric CAD or raw coordinates, GIS data integrates spatial geometry with descriptive tabular attribute data.",
    "rankerTip": "GIS Data = Spatial Geometry + Tabular Attribute Data.",
    "topic": "GIS - Attribute Data",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-42",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which acts as medium for transmitting information from the target to the sensor?",
    "options": [
      "sensor",
      "target",
      "energy source",
      "atmosphere"
    ],
    "correctOptionIndex": 2,
    "explanation": "In remote sensing fundamentals, the energy source (electromagnetic radiation) acts as the carrier medium transmitting information about the target to the receiving sensor.",
    "rankerTip": "Energy source / Electromagnetic radiation transmits spectral reflectance from target to sensor.",
    "topic": "Remote Sensing - Energy Interaction",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-43",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Among the following, which does not come under the components of GIS?",
    "options": [
      "Hardware",
      "Software",
      "Compiler",
      "Data"
    ],
    "correctOptionIndex": 2,
    "explanation": "The standard five components of a GIS are Hardware, Software, Data, People, and Methods/Procedures. A Compiler is not a core GIS component.",
    "rankerTip": "Core GIS components: Hardware, Software, Data, People, and Methods.",
    "topic": "GIS - Components",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  },
  {
    "id": "bq-modinst44-44",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which process is used for the transmission of radio signals from the satellites into the GPS receiver for position determination?",
    "options": [
      "triangulation",
      "trilateration",
      "translocation",
      "positioning"
    ],
    "correctOptionIndex": 1,
    "explanation": "GPS positioning determines receiver coordinates by measuring pseudo-ranges (distances) from multiple satellites with known coordinates, which is the geometric process of trilateration.",
    "rankerTip": "GPS position determination is based on Trilateration (distance intersections), not angular triangulation.",
    "topic": "GPS - Trilateration",
    "type": "pyq",
    "examName": "Kerala PSC Surveyor Gr. II / Modern Survey Bank",
    "year": 2024,
    "createdAt": "2026-09-19T00:00:00Z"
  }
];

export const MOCK_TEST_MODERN_SURVEY_44: MockTest = {
  id: 'mock-modern-survey-44',
  title: 'Modern Survey Instruments 44 MCQ High-Yield Master Practice Exam',
  category: 'Module Specific',
  description: 'Specialized 44-question Kerala PSC examination covering Microwave & Electro-optical EDM (Geodimeter/Tellurometer), Total Station operations, onboard programs (Reference Line, Stake Out, Free Station, Tie Distance), single reflector prisms, GPS constellation & segments, Drishti & MOBIC, Photogrammetry, Remote Sensing, and GIS fundamentals. Evaluated under official PSC pattern with -0.33 negative marking.',
  durationMinutes: 45,
  totalQuestions: 44,
  marksPerCorrect: 1,
  negativeMarksPerWrong: 0.33,
  totalMarks: 44,
  difficulty: 'PSC Standard (Advanced)',
  attemptsCount: 52,
  examCode: 'KPSC-MOD-07-MODERN-44',
  targetDepartment: 'Survey & Land Records / Kerala Water Authority',
  questions: MODERN_SURVEY_44_QUESTIONS.map((q, idx) => ({
    id: q.id,
    questionNumber: idx + 1,
    question: q.question,
    options: q.options,
    correctOptionIndex: q.correctOptionIndex,
    explanation: q.explanation,
    rankerTip: q.rankerTip,
    topic: q.topic || 'Modern Survey Instruments'
  }))
};
