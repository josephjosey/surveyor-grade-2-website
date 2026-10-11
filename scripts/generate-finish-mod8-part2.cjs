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

console.log('Existing unique masks before Mod 8 Part 2:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-fin8b-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-g${c++}`;
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
    createdAt: '2026-10-11T17:15:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 55 DISTINCT QUESTIONS FOR MODULE 8 (PART 2)
const m8Part2 = [
  {
    q: 'What is the function of the OOPS command in AutoCAD?',
    opts: ['Restores objects deleted by the most recent ERASE command without undoing any intervening drawing or editing actions performed since', 'Undoes all commands from the entire session', 'Closes the program without saving', 'Deletes corrupted blocks'],
    ans: 0,
    exp: 'OOPS specifically restores entities removed by the last ERASE command, even if you have created other geometry in the meantime. Unlike UNDO, it does not rollback intervening work.',
    tip: 'OOPS restores objects deleted by the last ERASE command without undoing intervening actions.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD, what happens when an object grip is clicked to turn "hot" (red) and the Spacebar or Enter key is pressed repeatedly?',
    opts: ['It cycles through the five grip editing modes: STRETCH, MOVE, ROTATE, SCALE, and MIRROR', 'It deletes the selected object', 'It switches between model space and paper space', 'It opens the print dialog box'],
    ans: 0,
    exp: 'Clicking a grip activates it. Pressing Spacebar cycles through the built-in grip modes in sequence: Stretch -> Move -> Rotate -> Scale -> Mirror.',
    tip: 'Spacebar cycles through grip modes: Stretch, Move, Rotate, Scale, Mirror.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What does the VIEWRES command control in AutoCAD?',
    opts: ['The display smoothness and resolution of circles, arcs, and ellipses by adjusting the number of line chords used to approximate them on screen', 'The physical pixel resolution of the computer monitor', 'The rendering resolution of 3D animations', 'The printer DPI setting'],
    ans: 0,
    exp: 'VIEWRES sets the circle zoom percentage (1 to 20,000). A higher value makes circles appear perfectly round on screen rather than segmented multi-sided polygons.',
    tip: 'VIEWRES controls the display resolution/smoothness of circles and arcs on screen.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the difference between REDRAW and REGEN in AutoCAD?',
    opts: ['REDRAW merely refreshes the current display screen to clean up blip marks; REGEN completely recomputes the entire drawing database from floating-point math coordinates', 'REDRAW prints the drawing; REGEN saves it to disk', 'REDRAW is for 3D; REGEN is for 2D', 'They are strictly synonymous'],
    ans: 0,
    exp: 'REDRAW simply repaints the current screen buffer (fast). REGEN recalculates all entity coordinates mathematically from the database and updates the display list (slower).',
    tip: 'REDRAW repaints the screen; REGEN recalculates the drawing database mathematically.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD Parametric drafting, what does the "Coincident" geometric constraint enforce?',
    opts: ['Constrains two points to remain pinned together, or constrains a point to remain on a line, arc, or curve', 'Forces two lines to have identical lengths', 'Forces two circles to be concentric', 'Locks an object at a fixed coordinate'],
    ans: 0,
    exp: 'The Coincident constraint binds two points together, or constrains a point to lie continuously along a curve or extended line.',
    tip: 'Coincident constraint locks two points together or keeps a point on a curve.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD Parametric drafting, what does the "Collinear" geometric constraint enforce?',
    opts: ['Constrains two or more straight line segments to lie along the exact same infinite straight line path', 'Constrains lines to be perpendicular', 'Constrains lines to be equal in length', 'Constrains lines to have the same layer color'],
    ans: 0,
    exp: 'The Collinear constraint ensures that two or more selected line segments remain aligned along the same common infinite line of action.',
    tip: 'Collinear constraint forces multiple line segments to lie along the same straight line.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD Parametric drafting, what does the "Concentric" geometric constraint enforce?',
    opts: ['Constrains two or more circles, arcs, or ellipses to share the exact same center point', 'Forces circles to have the same radius', 'Forces arcs to have the same sweep angle', 'Locks circles to the origin'],
    ans: 0,
    exp: 'The Concentric constraint locks the center points of two or more circular/elliptical arcs together so they remain concentric.',
    tip: 'Concentric constraint forces circles and arcs to share the exact same center point.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD Parametric drafting, what does the "Fix" geometric constraint enforce?',
    opts: ['Locks a specified geometric point or curve at its fixed coordinate location in space so it cannot move or rotate', 'Repairs damaged geometry', 'Sets line color to blue', 'Fixes corrupt layer names'],
    ans: 0,
    exp: 'The Fix constraint anchors a point or curve in place relative to the WCS, preventing it from being moved or resized by other parametric constraints.',
    tip: 'Fix constraint anchors a point or curve at a fixed coordinate location.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD Parametric drafting, what does the "Equal" geometric constraint enforce?',
    opts: ['Constrains selected lines to have equal length, or selected circles/arcs to have equal radius', 'Forces two layers to have equal transparency', 'Sets text height equal to dimension height', 'Matches block names'],
    ans: 0,
    exp: 'The Equal constraint resizes lines to maintain identical lengths, or circles/arcs to maintain identical radii.',
    tip: 'Equal constraint maintains identical lengths for lines or identical radii for circles/arcs.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the DIMREASSOCIATE command in AutoCAD?',
    opts: ['Reassociates disassociated dimensions with geometric vertices on objects so dimensions update dynamically when geometry is modified', 'Changes dimension text font', 'Converts linear dimensions into aligned dimensions', 'Deletes extension lines'],
    ans: 0,
    exp: 'DIMREASSOCIATE re-links orphaned dimension extension lines to object snap points so associative dimensioning functionality is restored.',
    tip: 'DIMREASSOCIATE links disconnected dimensions back to object vertices.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the "Background Mask" property in AutoCAD Multiline Text (MTEXT)?',
    opts: ['Opaquely masks drawing lines and objects behind the text box using the background color, ensuring text readability without trimming underlying lines', 'Draws a border box around the text', 'Highlights text in yellow', 'Hides the text on screen'],
    ans: 0,
    exp: 'Background Mask places an opaque mask behind MTEXT so lines passing through the text box are obscured, keeping annotations legible without cutting lines.',
    tip: 'Background Mask in MTEXT obscures lines behind text for clear legibility.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which AutoCAD command allows setting up and modifying Multileader styles (controlling leader line type, landing distance, and arrowhead shape)?',
    opts: ['MLEADERSTYLE', 'DIMSTYLE', 'STYLE', 'LEADERSETUP'],
    ans: 0,
    exp: 'MLEADERSTYLE opens the Multileader Style Manager to define leader line characteristics (straight/spline), landing offsets, arrowhead types, and content format.',
    tip: 'MLEADERSTYLE configures multileader appearance, landing distances, and arrowheads.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which network topology connects all client computers to a single central network switch or hub?',
    opts: ['Star topology', 'Bus topology', 'Ring topology', 'Mesh topology'],
    ans: 0,
    exp: 'In a Star topology, every network node has a dedicated cable running to a central switch. A cable break only affects that single node, making it the most common LAN topology.',
    tip: 'Star topology connects all network nodes to a single central switch or hub.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'Which network topology uses a single continuous central coaxial backbone cable terminated with resistors at both ends?',
    opts: ['Bus topology', 'Star topology', 'Ring topology', 'Tree topology'],
    ans: 0,
    exp: 'A Bus topology connects all devices along a single shared cable (backbone) with terminators at both ends to prevent signal reflections.',
    tip: 'Bus topology uses a single shared backbone cable with terminators at both ends.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'Which network topology provides maximum redundancy and fault tolerance by connecting every computer directly to every other computer via dedicated links?',
    opts: ['Full Mesh topology', 'Bus topology', 'Star topology', 'Ring topology'],
    ans: 0,
    exp: 'In a full mesh topology, every node has a point-to-point connection to every other node, providing total fault tolerance at high cabling cost.',
    tip: 'Mesh topology provides highest redundancy by linking every node directly to all others.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'In the 7-layer OSI networking reference model, which layer is responsible for logical routing of packets and IP addressing?',
    opts: ['Network Layer (Layer 3)', 'Data Link Layer (Layer 2)', 'Transport Layer (Layer 4)', 'Physical Layer (Layer 1)'],
    ans: 0,
    exp: 'Layer 3 (Network Layer) handles packet routing, logical IP addressing, and path determination across interconnected networks.',
    tip: 'Network Layer (Layer 3) handles IP addressing and packet routing.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'In the 7-layer OSI model, which layer handles physical MAC addressing and frames?',
    opts: ['Data Link Layer (Layer 2)', 'Physical Layer (Layer 1)', 'Network Layer (Layer 3)', 'Session Layer (Layer 5)'],
    ans: 0,
    exp: 'Layer 2 (Data Link Layer) organizes data into frames, handles hardware MAC addressing, and performs error detection across a single local link.',
    tip: 'Data Link Layer (Layer 2) handles MAC addressing, frames, and switches.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'In the 7-layer OSI model, which layer ensures reliable end-to-end data delivery, flow control, and port numbers (such as TCP and UDP)?',
    opts: ['Transport Layer (Layer 4)', 'Network Layer (Layer 3)', 'Session Layer (Layer 5)', 'Application Layer (Layer 7)'],
    ans: 0,
    exp: 'Layer 4 (Transport Layer) provides transparent, reliable end-to-end data transfer between hosts using TCP or connectionless UDP, managing port numbers.',
    tip: 'Transport Layer (Layer 4) handles end-to-end reliable delivery (TCP/UDP) and ports.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the standard transmission medium used for Gigabit Ethernet LAN cables terminated with RJ-45 modular connectors?',
    opts: ['Unshielded Twisted Pair (UTP) copper cable (Cat5e or Cat6)', 'Single-core aluminum wire', 'Coaxial television cable', 'High voltage transmission cable'],
    ans: 0,
    exp: 'Cat5e and Cat6 Unshielded Twisted Pair (UTP) cables consisting of 4 twisted pairs of copper wires terminated with 8P8C (RJ-45) connectors are standard for Ethernet LANs.',
    tip: 'UTP Cat5e/Cat6 cables with RJ-45 connectors are standard for office Ethernet LANs.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'Which transmission cable transmits data as light pulses through a thin glass or plastic core, providing complete immunity to electromagnetic interference (EMI)?',
    opts: ['Fiber optic cable', 'Twisted pair cable', 'Coaxial cable', 'Shielded twisted pair'],
    ans: 0,
    exp: 'Fiber optic cables transmit light pulses via total internal reflection inside silica glass fibers, offering immense bandwidth over long distances without electrical interference.',
    tip: 'Fiber optic cables transmit light pulses through glass cores and are completely immune to EMI.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is a "Firewall" in computer network security?',
    opts: ['A hardware device or software program that monitors and filters incoming and outgoing network traffic based on predetermined security rules', 'A physical fireproof safe to store backup hard disks', 'An air cooling system for server racks', 'A surge protector for power plugs'],
    ans: 0,
    exp: 'A firewall acts as a security barrier between a trusted internal network and untrusted external networks (the Internet), inspecting packets and blocking unauthorized access.',
    tip: 'Firewall monitors and filters network traffic according to security rules.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What type of malicious computer software masquerades as legitimate software but carries hidden malicious code that compromises security when run?',
    opts: ['Trojan Horse', 'Computer Worm', 'Spyware cookie', 'Macro script'],
    ans: 0,
    exp: 'A Trojan horse disguises itself as a useful, benign application (e.g. a drawing utility or game) to trick the user into installing it, thereby creating a backdoor.',
    tip: 'Trojan Horse disguises itself as legitimate software to deliver a malicious payload.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What type of malware self-replicates and spreads across computer networks automatically WITHOUT needing to attach itself to an existing host file or program?',
    opts: ['Worm', 'Virus', 'Adware', 'Macro'],
    ans: 0,
    exp: 'A computer worm is a standalone malicious program that replicates itself over network connections without requiring human intervention or a host carrier file.',
    tip: 'Worm is a standalone self-replicating malware spreading automatically over networks.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is "Ransomware" in cybersecurity?',
    opts: ['Malware that encrypts user data files and demands an extortion payment in exchange for the decryption key', 'Software that speeds up computer performance', 'A tool for recovering lost CAD drawings', 'An open-source drawing viewer'],
    ans: 0,
    exp: 'Ransomware maliciously encrypts files, locking victims out of their documents, drawings, and databases until a ransom is paid.',
    tip: 'Ransomware encrypts victim files and extorts money for the decryption key.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the function of an Uninterruptible Power Supply (UPS) in a computer CAD workstation setup?',
    opts: ['Providing instantaneous battery backup power during mains electricity failure to prevent sudden computer shutdown and drawing file corruption', 'Regulating monitor color calibration', 'Increasing CPU clock speed', 'Backing up files to Google Drive'],
    ans: 0,
    exp: 'A UPS provides emergency battery backup power when the main electrical supply fails, allowing draftsmen sufficient time to save open DWG files and shut down cleanly.',
    tip: 'UPS provides battery backup during power outages, preventing loss of unsaved CAD work.',
    top: 'Computer Fundamentals'
  }
];

m8Part2.forEach(q => addQ(q, 8, 'mod-8', 'CAD & Computer applications'));
console.log('Module 8 Part 2 processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
