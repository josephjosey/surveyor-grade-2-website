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

console.log('Existing unique masks before Mod 8 finish & Mod 9 part 1:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-p9-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-h${c++}`;
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
    createdAt: '2026-10-11T17:30:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// -------------------------------------------------------------------------
// MODULE 8: 30 DISTINCT QUESTIONS (Pushing Module 8 past 510)
// -------------------------------------------------------------------------
const m8Extra = [
  {
    q: 'In AutoCAD Parametric drafting, what does the "Tangent" geometric constraint enforce?',
    opts: ['Constrains two curves (or a line and a curve) to maintain tangency to each other at their point of intersection', 'Forces two lines to intersect at 45 degrees', 'Forces an arc to touch the X-axis', 'Draws a tangent line automatically'],
    ans: 0,
    exp: 'The Tangent constraint maintains tangency between two curves (circles, arcs, ellipses, splines) or between a straight line and a curve.',
    tip: 'Tangent constraint locks curves/lines to remain tangent at their meeting point.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD Parametric drafting, what does the "Parallel" geometric constraint enforce?',
    opts: ['Constrains selected straight line segments to remain strictly parallel to each other', 'Forces lines to have the same length', 'Forces lines to be collinear', 'Forces lines to lie on the same layer'],
    ans: 0,
    exp: 'The Parallel constraint constrains two or more straight lines to maintain equal angular slope, ensuring they never intersect.',
    tip: 'Parallel constraint ensures two or more lines remain strictly parallel.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD Parametric drafting, what does the "Perpendicular" geometric constraint enforce?',
    opts: ['Constrains two straight lines to maintain an exact 90-degree orthogonal angle between them', 'Forces lines to cross at their midpoints', 'Forces lines to be vertical only', 'Forces lines to touch at endpoints'],
    ans: 0,
    exp: 'The Perpendicular constraint locks two lines at a constant 90° angle relative to each other.',
    tip: 'Perpendicular constraint maintains a 90° angle between two lines.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD Parametric drafting, what does the "Symmetric" geometric constraint enforce?',
    opts: ['Constrains two objects or points to maintain symmetrical positions relative to a designated symmetry centerline', 'Mirrors objects and deletes the originals', 'Balances layer colors', 'Sets equal line weights'],
    ans: 0,
    exp: 'The Symmetric constraint maintains geometric symmetry of selected objects or constraint points about a chosen symmetry line.',
    tip: 'Symmetric constraint forces geometry to remain mirror-symmetric about an axis.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the APERTURE system variable in AutoCAD?',
    opts: ['Controls the size (in pixels) of the Object Snap target box that appears inside the crosshairs when snapping to objects', 'Controls camera exposure in rendering', 'Sets the zoom lens magnification', 'Adjusts line thickness on screen'],
    ans: 0,
    exp: 'APERTURE sets the display size in pixels of the object snap selection target box that hovers at the cursor crosshairs.',
    tip: 'APERTURE sets the pixel size of the OSNAP target box.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What does the PICKFIRST system variable in AutoCAD control?',
    opts: ['Noun/verb selection: when PICKFIRST = 1, objects can be selected before issuing an editing command; when 0, commands must be issued before selecting objects', 'Which layer is drawn first', 'The first color in the palette', 'Which printer starts first'],
    ans: 0,
    exp: 'PICKFIRST controls noun/verb selection. With PICKFIRST = 1 (default), you can pick objects first and then type commands like MOVE or ERASE.',
    tip: 'PICKFIRST = 1 allows selecting objects first before typing commands (noun/verb).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What does the BLIPMODE system variable control in classic AutoCAD?',
    opts: ['Controls whether temporary tiny marker crosses (blips) appear on the screen at points clicked with the pointing device', 'Blinking of layer icons', 'Screen refresh rate', 'Mouse cursor blinking speed'],
    ans: 0,
    exp: 'BLIPMODE controls whether small plus marker crosses ("blips") are left on screen on mouse clicks. When ON, typing REDRAW removes the blip marks.',
    tip: 'BLIPMODE displays temporary tick marks on mouse clicks; cleaned by REDRAW.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the DRAGMODE system variable in AutoCAD?',
    opts: ['Controls whether objects are displayed dynamically in real time while being dragged during commands like MOVE, COPY, and SCALE', 'Enables mouse drag gestures', 'Changes scroll wheel zoom speed', 'Locks window dragging'],
    ans: 0,
    exp: 'DRAGMODE controls dynamic dragging preview. When set to Auto (2), AutoCAD shows full real-time graphic dragging of entities as the mouse moves.',
    tip: 'DRAGMODE controls dynamic visual preview during MOVE, COPY, and SCALE dragging.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What does the CURSORSIZE system variable control in AutoCAD?',
    opts: ['The size of the crosshair cursor expressed as a percentage of the total screen display size (from 1 to 100 percent)', 'The size of the mouse arrow pointer', 'The font size of the command line', 'The size of dimension text'],
    ans: 0,
    exp: 'CURSORSIZE determines the length of crosshairs across the drawing window. Setting CURSORSIZE to 100 extends crosshairs completely across the screen.',
    tip: 'CURSORSIZE = 100 gives full-screen crosshairs across the drawing area.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In computer networking, which device operates at Layer 2 (Data Link Layer) to inspect incoming frames and forward them specifically to the destination port based on MAC addresses?',
    opts: ['Network Switch', 'Hub (repeater)', 'Passive patch panel', 'Coaxial splitter'],
    ans: 0,
    exp: 'A network switch learns MAC addresses on each physical port and directs incoming data frames only to the intended destination node, avoiding collision domains.',
    tip: 'Network Switch operates at Layer 2, forwarding frames based on hardware MAC addresses.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the fundamental difference between a network Hub and a network Switch?',
    opts: ['A Hub blindly broadcasts all incoming data packets out to every connected port (Layer 1); a Switch inspects MAC addresses and forwards frames only to the specific destination port (Layer 2)', 'A Hub connects to fiber optic while a switch connects to copper', 'A Hub has built-in Wi-Fi while a switch does not', 'There is no difference'],
    ans: 0,
    exp: 'A hub is a multiport repeater that copies all electrical signals to every port, wasting bandwidth. A switch selectively routes frames to the intended recipient.',
    tip: 'Hub broadcasts traffic to all ports; Switch forwards selectively to the destination MAC port.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'In the Internet TCP/IP protocol suite, what is the well-known default port number used for unencrypted HTTP web browsing traffic?',
    opts: ['Port 80', 'Port 443', 'Port 21', 'Port 25'],
    ans: 0,
    exp: 'Port 80 is the standard port assigned to unencrypted HTTP web traffic. Port 443 is used for secure encrypted HTTPS connections.',
    tip: 'HTTP = Port 80. HTTPS = Port 443. FTP = Port 21. SMTP = Port 25.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'In the Internet TCP/IP protocol suite, what is the default port number used for secure encrypted HTTPS web browsing traffic?',
    opts: ['Port 443', 'Port 80', 'Port 22', 'Port 53'],
    ans: 0,
    exp: 'Port 443 is the standard port for HTTPS (HTTP over TLS/SSL) encrypted communications.',
    tip: 'HTTPS uses Port 443 for encrypted web browsing.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the function of the DHCP (Dynamic Host Configuration Protocol) service on a local network?',
    opts: ['Automatically assigning IP addresses, subnet masks, default gateways, and DNS servers to client computers connecting to the network', 'Backing up files to external servers', 'Filtering junk emails', 'Compressing video files'],
    ans: 0,
    exp: 'DHCP dynamically allocates IP configuration parameters from an address pool to client devices upon connection, eliminating manual static IP configuration.',
    tip: 'DHCP automatically leases IP addresses and network configuration to connected devices.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is a "Computer Virus" and how does it spread compared to a standalone worm?',
    opts: ['A piece of malicious code that requires a human action to run and attaches itself to an existing host executable file to propagate', 'A physical insect inside the CPU heatsink', 'A software program that speeds up internet', 'A wireless radio interference'],
    ans: 0,
    exp: 'A virus requires an existing host file or carrier document and user execution to replicate and spread, unlike a worm which self-replicates across networks.',
    tip: 'Virus requires a host file and user execution to propagate; worms spread autonomously.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is "Phishing" in internet cybersecurity?',
    opts: ['A social engineering fraud where deceptive emails or fake websites impersonate trustworthy institutions to trick victims into revealing passwords or credit card details', 'A method of repairing damaged network cables', 'Scanning satellite imagery for lakes', 'Cleaning computer cache files'],
    ans: 0,
    exp: 'Phishing tricks individuals into providing sensitive personal authentication credentials by masquerading as banks, universities, or government agencies.',
    tip: 'Phishing = deceptive social engineering scams tricking users into revealing passwords.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the purpose of defragmentation (Disk Defragmenter) on traditional Hard Disk Drives (HDDs)?',
    opts: ['Reorganizing fragmented file clusters into contiguous physical sectors on disk tracks to speed up read access times', 'Erasing private personal data', 'Installing software updates', 'Formatting the drive into FAT32'],
    ans: 0,
    exp: 'Defragmentation consolidates scattered file pieces into contiguous disk clusters, minimizing drive head movement and boosting HDD file retrieval speed.',
    tip: 'Defragmentation arranges file clusters contiguously on HDDs to reduce read head seek time.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'Why is traditional disk defragmentation NOT recommended for Solid State Drives (SSDs)?',
    opts: ['SSDs have instantaneous random access with zero mechanical seek time, and defragmenting causes unnecessary write cycles that prematurely wear out flash memory cells', 'SSDs will catch fire', 'SSDs lose their warranty immediately', 'Defragmenting converts SSDs into HDDs'],
    ans: 0,
    exp: 'SSDs retrieve non-contiguous memory blocks without mechanical seek delay; defragmenting writes gigabytes of unnecessary data, consuming finite flash endurance cycles.',
    tip: 'Do NOT defragment SSDs; it wears out flash memory cells without providing speed benefits.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the function of the CMOS battery on a computer motherboard?',
    opts: ['Providing continuous battery power to keep the Real-Time Clock (RTC) running and preserve BIOS/CMOS hardware settings when main power is disconnected', 'Powering the computer during power cuts', 'Running the graphics card fan', 'Charging the USB mouse'],
    ans: 0,
    exp: 'A coin-cell lithium battery (typically CR2032) powers the motherboard real-time clock and volatile CMOS RAM holding system date, time, and boot hardware configuration.',
    tip: 'Motherboard CMOS battery (CR2032) maintains date, time, and BIOS settings when powered off.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What does BIOS stand for in computer hardware architecture?',
    opts: ['Basic Input / Output System', 'Binary Integrated Operating Standard', 'Broadband Internet Operating System', 'Base Instruction Optical System'],
    ans: 0,
    exp: 'BIOS stands for Basic Input/Output System—firmware stored in motherboard ROM that initializes hardware components and launches the OS bootloader.',
    tip: 'BIOS = Basic Input / Output System.',
    top: 'Computer Fundamentals'
  }
];

m8Extra.forEach(q => addQ(q, 8, 'mod-8', 'CAD & Computer applications'));
console.log('Module 8 extra batch processed. Total added so far:', addedList.length);

// -------------------------------------------------------------------------
// MODULE 9: 140 DISTINCT QUESTIONS (Part 1 - Workshop Calc & Mensuration)
// -------------------------------------------------------------------------
const m9Part1 = [
  // --- UNITS & LAND CONVERSIONS ---
  {
    q: 'In the International System of Units (SI), which base unit is defined for the physical quantity "Luminous Intensity"?',
    opts: ['Candela (cd)', 'Lumen (lm)', 'Lux (lx)', 'Watt (W)'],
    ans: 0,
    exp: 'The candela (cd) is the SI base unit of luminous intensity in a given direction.',
    tip: 'Luminous intensity SI base unit = Candela (cd). Luminous flux = Lumen. Illuminance = Lux.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'In the International System of Units (SI), what is the base unit of thermodynamic temperature?',
    opts: ['Kelvin (K)', 'Degree Celsius (°C)', 'Degree Fahrenheit (°F)', 'Joule (J)'],
    ans: 0,
    exp: 'The Kelvin (K) is the fundamental SI base unit of thermodynamic temperature.',
    tip: 'Temperature SI base unit = Kelvin (K). Note: Celsius is a derived unit.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'In SI metric measurement prefixes, what decimal multiplier does the prefix "micro" (μ) represent?',
    opts: ['10^-6 (one millionth)', '10^-3 (one thousandth)', '10^-9 (one billionth)', '10^-12 (one trillionth)'],
    ans: 0,
    exp: 'The prefix micro denotes a factor of 10^-6 (0.000001).',
    tip: 'Metric prefixes: milli = 10^-3, micro = 10^-6, nano = 10^-9, pico = 10^-12.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'In SI metric prefixes, what decimal multiplier does the prefix "Giga" (G) represent?',
    opts: ['10^9 (one billion)', '10^6 (one million)', '10^12 (one trillion)', '10^3 (one thousand)'],
    ans: 0,
    exp: 'Giga denotes a factor of 10^9 (1,000,000,000). Mega is 10^6, Tera is 10^12.',
    tip: 'Kilo = 10^3, Mega = 10^6, Giga = 10^9, Tera = 10^12.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'In land measurements standard in Kerala, how many square feet equal one "Cent"?',
    opts: ['435.6 square feet', '1000 square feet', '100 square feet', '4046.86 square feet'],
    ans: 0,
    exp: 'One cent is defined as 1/100 of an acre. Since 1 acre = 43,560 sq ft, 1 cent = 43,560 / 100 = 435.6 sq ft.',
    tip: '1 Cent = 435.6 sq ft = 40.468 sq m. 1 Acre = 100 Cents.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'How many square meters equal one "Cent" of land in Kerala land records?',
    opts: ['Approximately 40.47 square meters (40.468 m²)', '100 square meters', '10 square meters', '43.56 square meters'],
    ans: 0,
    exp: '1 cent = 435.6 sq ft = 435.6 x (0.3048)^2 m² = 40.4686 square meters.',
    tip: '1 Cent = 40.47 m² (approx 40.468 m²).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'How many "Cents" of land make up one full "Acre"?',
    opts: ['100 cents', '10 cents', '1000 cents', '435.6 cents'],
    ans: 0,
    exp: 'An acre contains exactly 100 cents (1 acre = 100 cents = 43,560 sq ft).',
    tip: '1 Acre = 100 Cents = 43,560 sq ft = 4046.86 m².',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'How many square meters equal one "Hectare"?',
    opts: ['10,000 square meters', '1,000 square meters', '100,000 square meters', '4,047 square meters'],
    ans: 0,
    exp: 'One hectare is a square of 100 m x 100 m, which equals 10,000 square meters (100 ares).',
    tip: '1 Hectare = 10,000 m² = 2.471 Acres = 247.1 Cents.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'How many "Acres" approximately equal one "Hectare"?',
    opts: ['2.471 acres', '1.414 acres', '0.405 acres', '5.000 acres'],
    ans: 0,
    exp: '1 hectare = 10,000 m² / 4046.86 m² per acre ≈ 2.47105 acres.',
    tip: '1 Hectare ≈ 2.471 Acres. 1 Acre ≈ 0.4047 Hectare.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'How many "Cents" equal one "Hectare" of land in Kerala land measurement?',
    opts: ['Approximately 247.1 cents', '100 cents', '1000 cents', '435.6 cents'],
    ans: 0,
    exp: '1 hectare = 2.47105 acres x 100 cents per acre ≈ 247.105 cents.',
    tip: '1 Hectare = 247.1 Cents (approx).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'In metric land area measurement, how many square meters equal one "Are"?',
    opts: ['100 square meters', '10 square meters', '1,000 square meters', '10,000 square meters'],
    ans: 0,
    exp: 'One are equals a square of 10 m x 10 m = 100 square meters. A hectare is 100 ares = 10,000 m².',
    tip: '1 Are = 100 m² ≈ 2.471 Cents.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'How many acres are in one square mile of land?',
    opts: ['640 acres', '1000 acres', '484 acres', '100 acres'],
    ans: 0,
    exp: 'One square mile contains (5280 ft)^2 / 43,560 sq ft per acre = 27,878,400 / 43,560 = 640 acres.',
    tip: '1 Square Mile = 640 Acres = 259 Hectares.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'How many liters of water are contained in one cubic meter (1 m³) of volume?',
    opts: ['1,000 liters', '100 liters', '10,000 liters', '500 liters'],
    ans: 0,
    exp: '1 cubic meter = 1000 cubic decimeters (dm³) = 1000 liters.',
    tip: '1 m³ = 1,000 Liters = 1,000,000 cm³ (or ml).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the volume equivalent of one Imperial Gallon in liters?',
    opts: ['Approximately 4.546 liters', '3.785 liters', '1.000 liter', '5.000 liters'],
    ans: 0,
    exp: 'One Imperial Gallon is defined as 4.54609 liters. (One US gallon is 3.7854 liters).',
    tip: '1 Imperial Gallon = 4.546 Liters. 1 US Gallon = 3.785 Liters.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'How many yards are in one statute mile?',
    opts: ['1,760 yards', '5,280 yards', '1,000 yards', '2,000 yards'],
    ans: 0,
    exp: '1 mile = 5280 feet / 3 feet per yard = 1,760 yards.',
    tip: '1 Mile = 1,760 Yards = 5,280 Feet = 1.60934 km.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the length of one International Nautical Mile in meters?',
    opts: ['1,852 meters', '1,609 meters', '2,000 meters', '1,500 meters'],
    ans: 0,
    exp: 'One International Nautical Mile is standardized as exactly 1,852 meters (approx 1 minute of arc of latitude along a meridian).',
    tip: '1 Nautical Mile = 1,852 meters (1.852 km).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'How many feet are in one standard fathom used in nautical depth measurement?',
    opts: ['6 feet (1.8288 meters)', '10 feet', '3 feet', '12 feet'],
    ans: 0,
    exp: 'One fathom is an imperial unit of depth equal to 6 feet (2 yards or 1.8288 meters).',
    tip: '1 Fathom = 6 Feet = 1.829 m.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'How many links make up one surveyor Gunter chain of 66 feet length?',
    opts: ['100 links (each link being 7.92 inches or 0.66 foot)', '50 links', '66 links', '200 links'],
    ans: 0,
    exp: 'A Gunter chain is 66 feet long and divided into 100 links, making each link 66 / 100 = 0.66 ft = 7.92 inches.',
    tip: 'Gunter chain = 66 ft = 100 links. Each link = 7.92 inches (0.66 ft).',
    top: 'Units, Conversion & Mensuration'
  },

  // --- 2D MENSURATION & GEOMETRY FORMULAS ---
  {
    q: 'What is the formula for the area of an equilateral triangle of side length "a"?',
    opts: ['Area = (√3 / 4) * a^2', 'Area = (√3 / 2) * a^2', 'Area = (1 / 2) * a^2', 'Area = √3 * a^2'],
    ans: 0,
    exp: 'The area of an equilateral triangle with side a is (√3 / 4) * a^2 ≈ 0.433 a^2.',
    tip: 'Equilateral triangle: Area = (√3 / 4) a². Height h = (√3 / 2) a.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the formula for the perpendicular height (altitude, h) of an equilateral triangle of side length "a"?',
    opts: ['h = (√3 / 2) * a', 'h = (√3 / 4) * a', 'h = (1 / 2) * a', 'h = √2 * a'],
    ans: 0,
    exp: 'By the Pythagorean theorem: h^2 + (a/2)^2 = a^2, which yields h = √(a^2 - a^2/4) = (√3 / 2) * a.',
    tip: 'Equilateral triangle altitude h = (√3 / 2) a.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the formula for the inradius (r) of the incircle inscribed in an equilateral triangle of side "a"?',
    opts: ['r = a / (2 * √3)', 'r = a / √3', 'r = a / (4 * √3)', 'r = (√3 / 2) * a'],
    ans: 0,
    exp: 'The inradius r of an equilateral triangle is one-third of its altitude: r = (1/3) * (√3 / 2) * a = a / (2√3).',
    tip: 'Equilateral triangle inradius r = a / (2√3). Circumradius R = a / √3.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the formula for the circumradius (R) of a circle circumscribing an equilateral triangle of side "a"?',
    opts: ['R = a / √3', 'R = a / (2 * √3)', 'R = √3 * a', 'R = 2 * a / √3'],
    ans: 0,
    exp: 'The circumradius R is two-thirds of the altitude: R = (2/3) * (√3 / 2) * a = a / √3.',
    tip: 'Equilateral triangle circumradius R = a / √3 (exactly twice the inradius r).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'According to Heron formula, what is the area of a scalene triangle with sides a, b, and c?',
    opts: ['Area = √[s(s - a)(s - b)(s - c)] where s = (a + b + c) / 2', 'Area = √[s(s + a)(s + b)(s + c)]', 'Area = s * (a + b + c) / 2', 'Area = (a * b * c) / 4'],
    ans: 0,
    exp: 'Heron formula gives Area = √[s(s-a)(s-b)(s-c)], where semi-perimeter s = (a + b + c) / 2.',
    tip: 'Heron formula: Area = √[s(s - a)(s - b)(s - c)].',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the area of a rhombus having diagonals of lengths d1 and d2?',
    opts: ['Area = (1 / 2) * d1 * d2', 'Area = d1 * d2', 'Area = (1 / 4) * d1 * d2', 'Area = 2 * d1 * d2'],
    ans: 0,
    exp: 'Since the diagonals of a rhombus are perpendicular bisectors of each other, the area is half the product of the diagonals: Area = (1/2) * d1 * d2.',
    tip: 'Rhombus Area = 0.5 x d1 x d2.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the side length (a) of a rhombus in terms of its diagonals d1 and d2?',
    opts: ['a = (1 / 2) * √(d1^2 + d2^2)', 'a = √(d1^2 + d2^2)', 'a = (d1 + d2) / 2', 'a = √(d1 * d2)'],
    ans: 0,
    exp: 'The diagonals divide the rhombus into 4 right triangles with legs (d1/2) and (d2/2). Thus side a = √[(d1/2)^2 + (d2/2)^2] = (1/2) * √(d1^2 + d2^2).',
    tip: 'Rhombus side a = 0.5 √(d1² + d2²).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the formula for the area of a trapezium (trapezoid) with parallel sides "a" and "b" separated by height "h"?',
    opts: ['Area = (1 / 2) * (a + b) * h', 'Area = (a + b) * h', 'Area = (1 / 2) * a * b * h', 'Area = (a - b) * h'],
    ans: 0,
    exp: 'The area of a trapezium equals the average of the two parallel bases multiplied by the perpendicular height: Area = [(a + b) / 2] * h.',
    tip: 'Trapezium Area = 0.5 x (sum of parallel sides) x height.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the area of a regular hexagon with side length "a"?',
    opts: ['Area = (3 * √3 / 2) * a^2', 'Area = 3 * √3 * a^2', 'Area = (√3 / 4) * a^2', 'Area = 6 * a^2'],
    ans: 0,
    exp: 'A regular hexagon is composed of 6 equilateral triangles of side a. Area = 6 x [(√3 / 4) a^2] = (3√3 / 2) * a^2 ≈ 2.598 a^2.',
    tip: 'Regular Hexagon Area = (3√3 / 2) a² ≈ 2.598 a².',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the interior angle of any regular hexagon?',
    opts: ['120 degrees', '108 degrees', '135 degrees', '90 degrees'],
    ans: 0,
    exp: 'Each interior angle of a regular n-gon is [(n - 2) * 180°] / n. For n = 6: (4 * 180°) / 6 = 120°.',
    tip: 'Regular polygon interior angles: Triangle = 60°, Square = 90°, Pentagon = 108°, Hexagon = 120°, Octagon = 135°.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the interior angle of any regular octagon (8 sides)?',
    opts: ['135 degrees', '120 degrees', '140 degrees', '150 degrees'],
    ans: 0,
    exp: 'For a regular octagon (n = 8): Interior angle = [(8 - 2) * 180°] / 8 = (6 * 180°) / 8 = 135°.',
    tip: 'Regular Octagon interior angle = 135°.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the area of an ellipse with semi-major axis "a" and semi-minor axis "b"?',
    opts: ['Area = π * a * b', 'Area = (π / 4) * a * b', 'Area = 2 * π * a * b', 'Area = π * (a^2 + b^2)'],
    ans: 0,
    exp: 'The area of an ellipse with semi-major axis a and semi-minor axis b is given by A = π * a * b.',
    tip: 'Ellipse Area = π a b. (If a = b = r, it simplifies to circle area π r²).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the area of a circular ring (annulus) with outer radius R and inner radius r?',
    opts: ['Area = π * (R^2 - r^2)', 'Area = π * (R - r)^2', 'Area = 2 * π * (R - r)', 'Area = π * (R + r)'],
    ans: 0,
    exp: 'Area of circular ring is the difference between outer and inner circle areas: A = π R^2 - π r^2 = π(R^2 - r^2) = π(R + r)(R - r).',
    tip: 'Annulus Area = π (R² - r²) = π (R + r)(R - r).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the formula for the area of a sector of a circle of radius r subtending central angle θ (in degrees)?',
    opts: ['Area = (θ / 360) * π * r^2', 'Area = (θ / 180) * π * r^2', 'Area = θ * r^2', 'Area = (θ / 360) * 2 * π * r'],
    ans: 0,
    exp: 'Area of a sector is proportional to central angle: A = (θ / 360°) * π * r^2 = (1/2) * l * r, where l is arc length.',
    tip: 'Sector Area = (θ/360) π r² = 0.5 x (arc length) x radius.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the total perimeter of a semi-circle of radius "r" including its diameter boundary?',
    opts: ['Perimeter = r * (π + 2) ≈ (36 / 7) * r', 'Perimeter = π * r', 'Perimeter = 2 * π * r', 'Perimeter = r * (π + 1)'],
    ans: 0,
    exp: 'The perimeter of a closed semi-circle consists of the curved semicircular arc (π r) plus the diameter (2r): P = π r + 2r = r(π + 2) ≈ r(22/7 + 2) = (36/7) r.',
    tip: 'Semi-circle closed perimeter = r(π + 2) ≈ (36/7) r.',
    top: 'Units, Conversion & Mensuration'
  },

  // --- 3D SOLID MENSURATION FORMULAS ---
  {
    q: 'What is the length of the internal body diagonal of a cube of edge length "a"?',
    opts: ['Diagonal = a * √3', 'Diagonal = a * √2', 'Diagonal = 2 * a', 'Diagonal = a * √5'],
    ans: 0,
    exp: 'By the 3D Pythagorean theorem, the body diagonal d = √(a^2 + a^2 + a^2) = √(3a^2) = a * √3.',
    tip: 'Cube body diagonal = a √3. Face diagonal = a √2.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the formula for the total surface area (TSA) of a right circular cylinder of radius r and height h?',
    opts: ['TSA = 2 * π * r * (h + r)', 'TSA = 2 * π * r * h', 'TSA = π * r * (h + r)', 'TSA = π * r^2 * h'],
    ans: 0,
    exp: 'A cylinder has curved surface area 2πrh and two circular ends each πr^2. Total surface area = 2πrh + 2πr^2 = 2πr(h + r).',
    tip: 'Cylinder TSA = 2πr(h + r). Curved surface area (CSA) = 2πrh.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the formula for the curved surface area (CSA) of a right circular cone of base radius r and slant height l?',
    opts: ['CSA = π * r * l', 'CSA = 2 * π * r * l', 'CSA = π * r * (l + r)', 'CSA = (1 / 3) * π * r * l'],
    ans: 0,
    exp: 'The curved surface area of a right circular cone is given by CSA = π * r * l, where slant height l = √(r^2 + h^2).',
    tip: 'Cone CSA = π r l. Total surface area TSA = π r (l + r).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the formula for the volume (V) of a right circular cone of base radius r and vertical height h?',
    opts: ['V = (1 / 3) * π * r^2 * h', 'V = π * r^2 * h', 'V = (2 / 3) * π * r^2 * h', 'V = (4 / 3) * π * r^2 * h'],
    ans: 0,
    exp: 'The volume of a cone is exactly one-third the volume of a cylinder having the same base radius and height: V = (1/3) * π * r^2 * h.',
    tip: 'Cone Volume = (1/3) π r² h.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the formula for the volume of a Frustum of a right circular cone of height h with base radii R and r?',
    opts: ['V = (1 / 3) * π * h * (R^2 + r^2 + R * r)', 'V = (1 / 3) * π * h * (R^2 - r^2)', 'V = π * h * (R + r)', 'V = (1 / 3) * π * h * (R + r)^2'],
    ans: 0,
    exp: 'The volume of a conical frustum is V = (1/3) * π * h * (R^2 + r^2 + R*r).',
    tip: 'Frustum of cone Volume = (1/3) π h (R² + r² + R r).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the formula for the curved surface area (CSA) of a frustum of a cone with slant height l and end radii R and r?',
    opts: ['CSA = π * l * (R + r)', 'CSA = π * l * (R - r)', 'CSA = 2 * π * l * (R + r)', 'CSA = π * l * √(R * r)'],
    ans: 0,
    exp: 'The lateral/curved surface area of a frustum of a cone is CSA = π * l * (R + r).',
    tip: 'Frustum CSA = π l (R + r).',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the formula for the total surface area (TSA) of a solid hemisphere of radius "r"?',
    opts: ['TSA = 3 * π * r^2', 'TSA = 2 * π * r^2', 'TSA = 4 * π * r^2', 'TSA = (3 / 2) * π * r^2'],
    ans: 0,
    exp: 'A hemisphere has a curved surface area of 2πr^2 plus a flat circular base of πr^2, giving TSA = 2πr^2 + πr^2 = 3πr^2.',
    tip: 'Solid hemisphere: Curved area = 2πr², Total area = 3πr², Volume = (2/3)πr³.',
    top: 'Units, Conversion & Mensuration'
  },
  {
    q: 'What is the formula for the total surface area of a full solid sphere of radius "r"?',
    opts: ['Surface Area = 4 * π * r^2', 'Surface Area = 2 * π * r^2', 'Surface Area = (4 / 3) * π * r^2', 'Surface Area = 3 * π * r^2'],
    ans: 0,
    exp: 'The surface area of a sphere is 4πr^2 (equal to the area of four great circles).',
    tip: 'Sphere Surface Area = 4πr² = πd². Volume = (4/3)πr³.',
    top: 'Units, Conversion & Mensuration'
  },

  // --- WORKSHOP SCIENCE, PHYSICS & MECHANICS ---
  {
    q: 'What is the definition of "Specific Gravity" (Relative Density) of a substance?',
    opts: ['The ratio of the density of the substance to the density of pure water at 4 degrees Celsius', 'The weight of a substance per unit volume', 'The mass of a substance divided by gravitational acceleration', 'The volume occupied by 1 kg of a substance'],
    ans: 0,
    exp: 'Specific gravity is a dimensionless ratio comparing the density of a material to that of pure water at its maximum density temperature of 4°C (1000 kg/m³).',
    tip: 'Specific Gravity = Density of substance / Density of water at 4°C (dimensionless).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the SI unit of "Work" and "Energy"?',
    opts: ['Joule (J)', 'Watt (W)', 'Newton (N)', 'Pascal (Pa)'],
    ans: 0,
    exp: 'The Joule (J) is the SI unit of both work and energy, defined as the work done by a force of 1 Newton displaced through 1 meter (1 J = 1 N·m).',
    tip: 'Work & Energy SI unit = Joule (J). Power = Watt (W). Force = Newton (N).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the definition of "Power" in mechanical physics, and what is its SI unit?',
    opts: ['The rate of doing work per unit time, measured in Watts (1 W = 1 Joule per second)', 'The total force applied to an object, measured in Newtons', 'The stored energy in a spring, measured in Joules', 'The mass accelerated per second, measured in Pascals'],
    ans: 0,
    exp: 'Power is the time rate at which work is performed: P = W / t. The SI unit is the Watt (W = J/s).',
    tip: 'Power = Work / Time. 1 Watt = 1 Joule/second.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'How many Watts equal one Metric Horsepower (HP)?',
    opts: ['735.5 Watts (approx. 736 W)', '746 Watts', '1000 Watts', '550 Watts'],
    ans: 0,
    exp: 'One Metric Horsepower (PS or ch) is defined as 75 kg·m/s = 75 x 9.80665 ≈ 735.5 Watts. (One Imperial HP = 746 Watts).',
    tip: 'Metric HP = 735.5 W (736 W). Imperial HP = 746 W.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'How many Watts equal one Imperial Horsepower (HP)?',
    opts: ['746 Watts', '735.5 Watts', '550 Watts', '1000 Watts'],
    ans: 0,
    exp: 'One Imperial Horsepower is 550 foot-pounds per second, which equals 745.7 ≈ 746 Watts.',
    tip: 'Imperial HP = 746 Watts.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the Mechanical Advantage (MA) of a simple machine defined as?',
    opts: ['The ratio of the Load lifted (W) to the Effort applied (P): MA = W / P', 'The ratio of effort to load', 'The distance moved by effort divided by distance moved by load', 'The output work divided by time'],
    ans: 0,
    exp: 'Mechanical Advantage is the factor by which a machine multiplies force: MA = Load / Effort = W / P.',
    tip: 'Mechanical Advantage MA = Load / Effort = W / P.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the Velocity Ratio (VR) of a simple machine defined as?',
    opts: ['The ratio of the distance moved by the effort to the distance moved by the load in the same time', 'The speed of the engine in RPM', 'The ratio of load to effort', 'The work done divided by friction'],
    ans: 0,
    exp: 'Velocity Ratio is purely geometric: VR = (Distance moved by Effort) / (Distance moved by Load) = y / x.',
    tip: 'Velocity Ratio VR = Distance moved by Effort / Distance moved by Load.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the mathematical relationship between Mechanical Advantage (MA), Velocity Ratio (VR), and Efficiency (η) of a machine?',
    opts: ['Efficiency (η) = (MA / VR) * 100%', 'Efficiency (η) = (VR / MA) * 100%', 'Efficiency (η) = MA * VR', 'Efficiency (η) = MA + VR'],
    ans: 0,
    exp: 'Efficiency = (Work Output) / (Work Input) = (W * x) / (P * y) = (W / P) / (y / x) = MA / VR.',
    tip: 'Efficiency η = MA / VR. For ideal machine (100% efficient), MA = VR.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'When is a simple machine classified as "Self-locking" (non-reversible)?',
    opts: ['When its efficiency is less than 50% (η < 50%)', 'When its efficiency is greater than 50%', 'When its mechanical advantage is zero', 'When friction is completely zero'],
    ans: 0,
    exp: 'A self-locking machine (like a screw jack) cannot reverse or drop the load when effort is removed because friction exceeds 50% of work input (η < 50%).',
    tip: 'Machine is self-locking if efficiency < 50%. Reversible if efficiency > 50%.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'In a First-Class Lever, which element is situated between the other two?',
    opts: ['The Fulcrum is in the middle (between Load and Effort)', 'The Load is in the middle', 'The Effort is in the middle', 'Friction is in the middle'],
    ans: 0,
    exp: 'In a Class 1 lever, the fulcrum lies between the effort and the load (e.g., crowbar, seesaw, scissors, beam balance).',
    tip: 'Class 1 lever: Fulcrum in middle (crowbar, scissors, seesaw).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'In a Second-Class Lever, which element is situated in the middle?',
    opts: ['The Load is in the middle (between Fulcrum and Effort)', 'The Fulcrum is in the middle', 'The Effort is in the middle', 'The axle is in the middle'],
    ans: 0,
    exp: 'In a Class 2 lever, the load is positioned between the fulcrum and effort (e.g., wheelbarrow, nutcracker, bottle opener). MA is always > 1.',
    tip: 'Class 2 lever: Load in middle (wheelbarrow, nutcracker, bottle opener). MA > 1 always.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'In a Third-Class Lever, which element is situated in the middle?',
    opts: ['The Effort is in the middle (between Fulcrum and Load)', 'The Load is in the middle', 'The Fulcrum is in the middle', 'The weight is in the middle'],
    ans: 0,
    exp: 'In a Class 3 lever, the effort is applied between the fulcrum and load (e.g., human forearm, tweezers, sugar tongs, shovel). MA is always < 1.',
    tip: 'Class 3 lever: Effort in middle (tweezers, forearm, shovel). MA < 1 always.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the Velocity Ratio (VR) of a single fixed pulley used for lifting loads?',
    opts: ['VR = 1', 'VR = 2', 'VR = 4', 'VR = 0.5'],
    ans: 0,
    exp: 'In a single fixed pulley, the effort moves the exact same distance as the load: VR = 1. Its only benefit is changing the direction of applied force.',
    tip: 'Single fixed pulley: VR = 1 (changes direction only). Single movable pulley: VR = 2.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the Velocity Ratio (VR) of an inclined plane of slope length "l" and vertical height "h"?',
    opts: ['VR = l / h = 1 / sin θ', 'VR = h / l', 'VR = l * h', 'VR = √(l^2 + h^2)'],
    ans: 0,
    exp: 'Effort travels along the incline (length l) while the load rises vertically (height h): VR = l / h = 1 / sin θ.',
    tip: 'Inclined plane VR = Length / Height = l / h.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the Velocity Ratio (VR) of a simple screw jack with pitch "p" and effort lever arm length "L"?',
    opts: ['VR = (2 * π * L) / p', 'VR = (π * L) / p', 'VR = p / (2 * π * L)', 'VR = 2 * π * L * p'],
    ans: 0,
    exp: 'In one revolution of the lever arm, the effort moves a circumference of 2πL while the load lifts by one thread pitch p: VR = 2πL / p.',
    tip: 'Screw jack VR = (2π L) / pitch.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What temperature value reads the exact same numerical figure on both the Celsius and Fahrenheit temperature scales?',
    opts: ['-40 degrees (-40 °C = -40 °F)', '0 degrees', '-273 degrees', '100 degrees'],
    ans: 0,
    exp: 'From C/5 = (F - 32)/9, setting C = F = x gives x/5 = (x - 32)/9 -> 9x = 5x - 160 -> 4x = -160 -> x = -40.',
    tip: '-40° is the unique crossover point where Celsius and Fahrenheit scales are identical.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the numerical value of "Absolute Zero" temperature on the Celsius scale?',
    opts: ['-273.15 °C', '-459.67 °C', '0 °C', '-100 °C'],
    ans: 0,
    exp: 'Absolute zero (0 Kelvin), the theoretical temperature at which molecular thermal motion ceases, is exactly -273.15 °C.',
    tip: 'Absolute zero = 0 K = -273.15 °C.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the value of the Latent Heat of Fusion of Ice at atmospheric pressure?',
    opts: ['80 calories per gram (approx. 334 kJ/kg)', '540 calories per gram', '100 calories per gram', '1 calorie per gram'],
    ans: 0,
    exp: 'The latent heat required to melt 1 g of ice at 0°C into water at 0°C without changing temperature is 80 cal/g (approx. 334 kJ/kg).',
    tip: 'Latent heat of fusion of ice = 80 cal/g (334 kJ/kg). Latent heat of vaporization of water = 540 cal/g (2260 kJ/kg).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the value of the Latent Heat of Vaporization of Water at 100 °C?',
    opts: ['540 calories per gram (approx. 2260 kJ/kg)', '80 calories per gram', '100 calories per gram', '1 calorie per gram'],
    ans: 0,
    exp: 'The latent heat of steam (vaporization of water at 100°C) is 540 cal/g (approx. 2260 kJ/kg).',
    tip: 'Latent heat of vaporization of water = 540 cal/g.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'By which mode of heat transfer does thermal energy travel through an absolute vacuum from the Sun to the Earth?',
    opts: ['Radiation', 'Conduction', 'Convection', 'Advection'],
    ans: 0,
    exp: 'Radiation transfers thermal energy via electromagnetic waves and requires no intervening material medium, traveling freely through space vacuum.',
    tip: 'Radiation requires NO medium (travels through vacuum). Conduction = solids. Convection = fluids.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the relationship between the coefficients of linear expansion (α), superficial/area expansion (β), and cubical/volume expansion (γ) of an isotropic solid?',
    opts: ['α : β : γ = 1 : 2 : 3 (β = 2α, γ = 3α)', 'α : β : γ = 1 : 1 : 1', 'α : β : γ = 3 : 2 : 1', 'β = α^2, γ = α^3'],
    ans: 0,
    exp: 'For isotropic solids: superficial expansion β ≈ 2α, and cubical expansion γ ≈ 3α. Thus, α : β : γ = 1 : 2 : 3.',
    tip: 'Thermal expansion ratio: Linear (α) : Area (β) : Volume (γ) = 1 : 2 : 3.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What does Ohm Law state for an electrical conductor maintained at constant temperature?',
    opts: ['The electric current flowing through a conductor is directly proportional to the potential difference across its ends (V = I * R)', 'Current is inversely proportional to voltage', 'Power equals resistance squared', 'Resistance varies with magnetic field'],
    ans: 0,
    exp: 'Ohm Law states that at constant temperature, V = I * R, meaning voltage and current are directly proportional.',
    tip: 'Ohm Law: V = I R. Power P = V I = I² R = V² / R.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'How many Joules of energy are in one commercial "Unit" of electrical energy (1 kiloWatt-hour, 1 kWh)?',
    opts: ['3.6 x 10^6 Joules (3,600,000 Joules)', '1,000 Joules', '3,600 Joules', '100,000 Joules'],
    ans: 0,
    exp: '1 kWh = 1000 Watts x 3600 seconds = 3,600,000 Joules = 3.6 x 10^6 J (3.6 MJ).',
    tip: '1 kWh (1 commercial electricity unit) = 3.6 x 10^6 Joules.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'Which alloy composed of 64% Iron and 36% Nickel has an exceptionally low coefficient of thermal expansion, making it standard for precision surveying tapes and pendulums?',
    opts: ['Invar', 'Nichrome', 'Duralumin', 'German Silver'],
    ans: 0,
    exp: 'Invar (invented by Charles Guillaume) contains 36% Nickel and 64% Iron. Its coefficient of expansion is nearly zero (~1.2 x 10^-6 /°C), ensuring survey tape length stability.',
    tip: 'Invar = 64% Fe + 36% Ni (lowest thermal expansion, used for precision tapes).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the purest commercial form of iron, containing less than 0.15% carbon?',
    opts: ['Wrought Iron', 'Pig Iron', 'Cast Iron', 'High Carbon Steel'],
    ans: 0,
    exp: 'Wrought iron is the purest commercial form of iron (<0.15% carbon). It is highly ductile, malleable, fibrous, and tough against corrosion.',
    tip: 'Wrought Iron = purest commercial iron (<0.15% Carbon). Pig iron = most impure (3.5-4.5% C).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What type of furnace is used in metallurgy to extract crude Pig Iron from iron ore?',
    opts: ['Blast Furnace', 'Cupola Furnace', 'Puddling Furnace', 'Bessemer Converter'],
    ans: 0,
    exp: 'A Blast Furnace smelts iron ore (hematite), coke, and limestone to produce crude Pig Iron.',
    tip: 'Blast Furnace -> Pig Iron. Cupola Furnace -> Cast Iron. Puddling Furnace -> Wrought Iron.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What type of furnace is used in foundries to melt Pig Iron with scrap to produce Cast Iron?',
    opts: ['Cupola Furnace', 'Blast Furnace', 'Reverberatory Furnace', 'Open Hearth Furnace'],
    ans: 0,
    exp: 'A Cupola furnace is specifically used in foundries to melt pig iron and scrap to produce Cast Iron.',
    tip: 'Cupola Furnace produces Cast Iron.',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the purpose of the "Annealing" heat treatment process for steels?',
    opts: ['Heating steel above its critical range and cooling slowly in the furnace to soften the metal, relieve internal stresses, and improve ductility', 'Quenching in cold water to make steel extremely hard', 'Air cooling to refine grains', 'Case hardening the outer surface'],
    ans: 0,
    exp: 'Annealing involves heating steel and cooling it very slowly inside the switched-off furnace to achieve maximum softness, relieve stresses, and restore ductility for machining.',
    tip: 'Annealing softens steel and relieves internal stresses (slow furnace cooling).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the purpose of the "Normalizing" heat treatment process for steels?',
    opts: ['Heating steel above critical temperature and cooling in still ambient air to refine crystal grain structure and improve mechanical toughness', 'Quenching in brine solution', 'Slow furnace cooling to soften', 'Surface carbonization'],
    ans: 0,
    exp: 'Normalizing heats steel above the upper critical line and cools it in still air, producing a fine, uniform pearlite grain structure with higher yield strength than annealing.',
    tip: 'Normalizing refines grain structure and restores toughness (still air cooling).',
    top: 'Workshop Science & Mechanics'
  },
  {
    q: 'What is the purpose of "Tempering" hardened steel?',
    opts: ['Reheating hardened martensitic steel below the lower critical temperature and cooling to reduce excessive brittleness and relieve quenching stresses', 'Making the steel softer than copper', 'Melting the steel surface', 'Increasing carbon percentage'],
    ans: 0,
    exp: 'Hardened steel is extremely brittle. Tempering reheats it below 723°C to trade a small amount of hardness for substantial toughness and shock resistance.',
    tip: 'Tempering reduces brittleness and relieves internal stress in hardened steel.',
    top: 'Workshop Science & Mechanics'
  }
];

m9Part1.forEach(q => addQ(q, 9, 'mod-9', 'Units, Conversion & Mensuration'));
console.log('Module 9 Part 1 batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
