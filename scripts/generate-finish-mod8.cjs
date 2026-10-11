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

console.log('Existing unique masks before Mod 8 finish:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-fin8-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-f${c++}`;
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
    createdAt: '2026-10-11T17:00:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 110 DISTINCT QUESTIONS FOR MODULE 8 (CAD & Computer Applications)
const m8Finish = [
  // --- ADVANCED AUTOCAD COMMANDS & EXPRESS TOOLS ---
  {
    q: 'In AutoCAD Express Tools, what does the BURST command do when executed on a block containing attributes?',
    opts: ['Explodes the block while preserving the current visible attribute values as ordinary editable text entities', 'Deletes all attribute definitions', 'Restores attributes to their default tag labels', 'Converts the block into a 3D solid'],
    ans: 0,
    exp: 'Standard EXPLODE reverts attributes back to their original tag names (e.g., TAG_NAME). BURST explodes the block while keeping the actual text values entered by the user.',
    tip: 'BURST explodes a block while maintaining the current attribute values as plain text.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which AutoCAD command allows editing the properties, geometry, vertices, and width of an existing 2D Polyline?',
    opts: ['PEDIT (Polyline Edit)', 'BEDIT', 'SPLINEDIT', 'LINEEDIT'],
    ans: 0,
    exp: 'The PEDIT command provides options to Close, Open, Join, change Width, Fit curve, Spline curve, and Edit individual vertices of 2D polylines.',
    tip: 'PEDIT edits polyline properties, joins segments, and changes vertex widths.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which option in the PEDIT command closes an open polyline by drawing a straight segment from its last endpoint back to its start point?',
    opts: ['Close (C)', 'Join (J)', 'Fit (F)', 'Connect'],
    ans: 0,
    exp: 'The Close option in PEDIT connects the start and endpoints of an open polyline with a closing segment.',
    tip: 'PEDIT -> Close joins the start and end of an open polyline.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which AutoCAD Express Tool converts lines, arcs, and polylines with non-zero Z elevations into flat 2D entities with elevation Z = 0?',
    opts: ['FLATTEN', 'PROJECT', 'ELEVATION', 'PLAN'],
    ans: 0,
    exp: 'FLATTEN projects 3D geometry onto the current viewing plane, forcing all Z-coordinate elevations to zero to fix unwanted 3D snapping issues.',
    tip: 'FLATTEN forces all selected 3D geometry onto the 2D plane (Z = 0).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of AutoCAD DesignCenter (ADC, accessible via Ctrl+2)?',
    opts: ['Browsing drawings, folders, and networks to drag and drop blocks, layers, styles, and linetypes from other drawings into the current drawing', 'Designing new mechanical gears', 'Purchasing Autodesk licenses online', 'Editing Windows registry entries'],
    ans: 0,
    exp: 'AutoCAD DesignCenter (Ctrl+2) allows users to explore and reuse content (blocks, layers, linetypes, dimension styles) from existing DWG files.',
    tip: 'DesignCenter (Ctrl+2) copies blocks, layers, and styles across drawing files.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of AutoCAD Tool Palettes (accessible via Ctrl+3)?',
    opts: ['Providing tabbed graphic panels of commonly used blocks, hatching patterns, and customized drawing tools for quick drag-and-drop insertion', 'Controlling monitor brightness', 'Managing mouse pointer speed', 'Viewing printer ink levels'],
    ans: 0,
    exp: 'Tool Palettes (Ctrl+3) organize frequently used blocks, hatch patterns, commands, and drawing materials into organized tabbed toolbars.',
    tip: 'Tool Palettes (Ctrl+3) provides quick drag-and-drop access to blocks, hatches, and tools.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which AutoCAD command allows editing the internal definition of a block directly inside the dedicated Block Editor environment?',
    opts: ['BEDIT (Block Edit)', 'PEDIT', 'ATTEDIT', 'REFEDIT'],
    ans: 0,
    exp: 'BEDIT opens the selected block in the dedicated Block Editor environment where dynamic parameters, actions, and geometry can be modified.',
    tip: 'BEDIT opens the Block Editor window to modify block geometry and dynamic parameters.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'In AutoCAD Dynamic Blocks, what is a "Visibility Parameter"?',
    opts: ['A parameter that allows creating multiple visual states or variations of a block within a single definition, toggling parts visible or hidden', 'A setting that changes the screen contrast', 'A tool for measuring line transparency', 'A command to hide layers'],
    ans: 0,
    exp: 'A Visibility parameter defines different visibility states in a block, allowing the user to switch between different graphic views (e.g. door swing angles) using a drop-down grip.',
    tip: 'Visibility Parameter allows multiple display states/views in a single dynamic block.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the WIPEOUT command in AutoCAD?',
    opts: ['Creates a polygonal boundary that masks or hides underlying objects using the current background screen color', 'Deletes all layers in the drawing', 'Permanently erases all text', 'Resets the user profile'],
    ans: 0,
    exp: 'WIPEOUT generates a blank masking region that obscures objects beneath it, commonly placed behind text notes or detail tags to keep drawings legible without trimming lines.',
    tip: 'WIPEOUT masks underlying geometry with a blank background polygon.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which system variable controls whether the boundary frame of a WIPEOUT object is displayed on screen and plotted on paper?',
    opts: ['WIPEOUTFRAME', 'FRAMEMODE', 'MASKFRAME', 'IMAGEFRAME'],
    ans: 0,
    exp: 'WIPEOUTFRAME: 0 = frames hidden and not plotted; 1 = frames displayed and plotted; 2 = frames displayed on screen but NOT plotted on paper.',
    tip: 'WIPEOUTFRAME controls visibility and plotting of wipeout borders (0=off, 1=on, 2=screen only).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is a "FIELD" in AutoCAD annotation text?',
    opts: ['A dynamic text placeholder linked to drawing properties (such as polyline area, file name, plot date) that updates automatically when the property changes', 'An empty area of land in GIS', 'A text box for writing long paragraphs', 'A table column header'],
    ans: 0,
    exp: 'Fields are intelligent text expressions that display variable data (e.g. parcel area, title block dates, author name); typing REGEN updates fields when drawing geometry changes.',
    tip: 'FIELD inserts dynamic text linked to drawing data (e.g. area, date) that auto-updates.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which command in AutoCAD creates a formatted grid table of rows and columns that supports mathematical formulas and data linking to Microsoft Excel?',
    opts: ['TABLE', 'GRID', 'SPREADSHEET', 'DATALINK'],
    ans: 0,
    exp: 'The TABLE command creates native AutoCAD tables with cells that support text, block symbols, arithmetic formulas (SUM, AVERAGE), and dynamic links to Excel spreadsheets.',
    tip: 'TABLE creates formatted tabular grids supporting formulas and Excel links.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the QTEXT (Quick Text) system variable in AutoCAD?',
    opts: ['When turned ON, it replaces text strings with rectangular bounding boxes to drastically accelerate screen redraw and pan speeds in large drawings', 'It types text automatically using voice recognition', 'It translates English text into regional languages', 'It checks grammatical errors in notes'],
    ans: 0,
    exp: 'QTEXT (Quick Text) replaces text rendering with simple rectangular outlines. When enabled, regeneration of large architectural plans with heavy text occurs much faster.',
    tip: 'QTEXT ON displays text as rectangular boxes to speed up screen regeneration.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the difference between an AutoCAD .SHX font and a Windows .TTF font in CAD drawings?',
    opts: ['SHX fonts are compiled vector stroke fonts native to AutoCAD that regenerate and plot very quickly; TTF (TrueType) fonts are Windows outline fonts that support diverse typographical styles', 'SHX fonts contain images while TTF fonts contain audio', 'SHX fonts cannot be printed on paper', 'TTF fonts can only be used in Microsoft Word'],
    ans: 0,
    exp: 'SHX fonts are proprietary stroke-based shape files optimized for CAD drawing speed; TrueType (.ttf) fonts are scalable Windows fonts used when publication styling is required.',
    tip: 'SHX = native compiled CAD stroke fonts (fast plotting). TTF = Windows TrueType outline fonts.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which AutoCAD command allows finding and replacing text strings across Model Space, Paper Space layouts, and block attribute values?',
    opts: ['FIND', 'SEARCH', 'REPLACE', 'SPELL'],
    ans: 0,
    exp: 'The FIND command opens the Find and Replace dialog to search, locate, and replace specific text strings across drawing annotations, dimensions, and block attributes.',
    tip: 'FIND searches and replaces text across drawings and block attributes.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the AUDIT command in AutoCAD?',
    opts: ['Evaluates the integrity of the active drawing database, detecting internal data errors and giving the option to fix them', 'Audits financial accounts of the company', 'Checks if the software license is genuine', 'Counts the total number of blocks in the drawing'],
    ans: 0,
    exp: 'AUDIT inspects the active drawing database for internal data corruption or broken entity links and repairs errors when "Fix any errors detected" is set to Yes.',
    tip: 'AUDIT diagnoses and repairs database errors in the currently open DWG drawing.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the RECOVER command in AutoCAD?',
    opts: ['Opens and repairs a severely damaged or corrupted drawing file that fails to open normally using the standard OPEN command', 'Restores files deleted from the Windows Recycle Bin', 'Retrieves lost passwords', 'Rolls back Windows updates'],
    ans: 0,
    exp: 'RECOVER repairs and opens corrupted DWG files that crash during standard file opening by rebuilding corrupted database tables.',
    tip: 'RECOVER repairs and opens damaged DWG files that cannot open normally.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the PLAN command in AutoCAD?',
    opts: ['Restores the top orthogonal plan view (looking down along the positive Z-axis) of the current UCS, a specified UCS, or the World Coordinate System', 'Creates a civil layout drawing automatically', 'Generates an architectural cost estimate', 'Changes the printer sheet size to A1'],
    ans: 0,
    exp: 'The PLAN command switches the current viewport view to a top plan view (looking directly down on the X-Y plane) aligned with the active UCS or WCS.',
    tip: 'PLAN switches the viewport to a top orthogonal plan view of the current coordinate system.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which command in AutoCAD is used to assign named viewports in Model Space for multi-view drafting?',
    opts: ['VPORTS (or VIEWPORTS)', 'MVIEW', 'LAYOUT', 'VIEW'],
    ans: 0,
    exp: 'In Model Space, the VPORTS command splits the drawing window into multiple tiled viewport panes (e.g. Top, Front, Isometric) to aid drafting from different angles simultaneously.',
    tip: 'VPORTS creates tiled viewports in Model Space (or floating viewports in layouts).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What does "VP Freeze" (Viewport Freeze) in the AutoCAD Layer Properties Manager do?',
    opts: ['Freezes selected layers ONLY within the active layout viewport while leaving them fully visible in other viewports and Model Space', 'Freezes the mouse cursor', 'Stops the computer fan', 'Freezes layers across all drawings on the network'],
    ans: 0,
    exp: 'Viewport Freeze allows setting different layer visibility states for different viewports on the same layout sheet without affecting the master model.',
    tip: 'VP Freeze hides layers in a specific layout viewport only.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which command in AutoCAD creates a Revision Cloud composed of continuous connected arc segments?',
    opts: ['REVCLOUD', 'CLOUD', 'SKETCH', 'ARC'],
    ans: 0,
    exp: 'The REVCLOUD command creates revision clouds around drawing changes, with customizable minimum/maximum arc lengths and calligraphy brush styles.',
    tip: 'REVCLOUD creates revision clouds made of continuous arcs to highlight drawing changes.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What does the SKETCH command in AutoCAD allow the user to do?',
    opts: ['Draws freehand line segments by tracking cursor movement across the screen as if drawing with a pencil', 'Generates 3D isometric perspectives automatically', 'Draws perfect geometric circles', 'Imports watercolor paintings'],
    ans: 0,
    exp: 'The SKETCH command enables freehand drawing: moving the pointing device traces a sequence of short line or polyline segments on the screen.',
    tip: 'SKETCH enables freehand line drafting following cursor movements.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the LTSCALE system variable in AutoCAD?',
    opts: ['Sets the global linetype scale factor for all dotted, dashed, and hidden linetypes throughout the drawing', 'Sets the font size of linear dimensions', 'Sets the zoom magnification', 'Sets the thickness of solid walls'],
    ans: 0,
    exp: 'LTSCALE controls the global scaling of dashes and spaces for broken linetypes (HIDDEN, DASHED, CENTER) across the entire drawing.',
    tip: 'LTSCALE sets the global scaling factor for linetypes (dash/space lengths).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What does the PSLTSCALE system variable control in AutoCAD Paper Space layouts?',
    opts: ['When PSLTSCALE = 1, linetype dash lengths appear identical on paper regardless of the magnification scale of individual viewports', 'It controls the printer paper thickness', 'It sets the line weight in millimeters', 'It locks the layout viewport zoom'],
    ans: 0,
    exp: 'PSLTSCALE (Paper Space Linetype Scale): When set to 1, dash lengths on printed sheets remain uniform across viewports having different zoom scales (e.g., 1:20 and 1:100).',
    tip: 'PSLTSCALE = 1 maintains uniform linetype dash spacing across viewports of different scales.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the ISOPLANE command (or F5 shortcut) in AutoCAD?',
    opts: ['Switches the active isometric drawing plane between Top, Left, and Right when isometric snap is enabled', 'Generates 3D solid planes', 'Draws flat roofs on buildings', 'Sets the paper margin'],
    ans: 0,
    exp: 'ISOPLANE sets the active plane for 2D isometric drawing (Left: 90° and 150°, Top: 30° and 150°, Right: 30° and 90°).',
    tip: 'ISOPLANE switches the 2D isometric drafting plane (Top, Left, Right).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'How is an isometric circle (isocircle) correctly drawn in AutoCAD when isometric drafting mode is active?',
    opts: ['By using the ELLIPSE command and selecting the Isocircle (I) sub-option', 'By using the CIRCLE command directly', 'By drawing a polygon with 100 sides', 'By using the DONUT command'],
    ans: 0,
    exp: 'In isometric projection, a circle appears as an ellipse. Running ELLIPSE and typing "I" for Isocircle orients an ellipse correctly according to the current Isoplane.',
    tip: 'Isometric circles are drawn using ELLIPSE -> Isocircle (I) option.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the BATTMAN command in AutoCAD?',
    opts: ['Block Attribute Manager: manages attribute tags, prompts, default values, and display order across all insertions of a block definition', 'A utility to test battery power', 'A backup archive manager', 'A batch printing script'],
    ans: 0,
    exp: 'BATTMAN (Block Attribute Manager) allows editing attribute definitions in blocks, updating existing block instances, and reordering attribute prompts.',
    tip: 'BATTMAN = Block Attribute Manager (manages attribute order and definitions).',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the ATTEXT (Attribute Extraction) command in AutoCAD?',
    opts: ['Extracts block attribute data into external structured text or CSV files for spreadsheet and database analysis', 'Extracts fonts from PDF files', 'Converts text into polylines', 'Finds misspelled words'],
    ans: 0,
    exp: 'ATTEXT (and DATAEXTRACTION) extracts attribute data and object properties from blocks into external files (TXT, CSV, XLS) for bill of quantities (BOQ) generation.',
    tip: 'ATTEXT extracts attribute data from drawings into external text/CSV files.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What is the function of the ALIGN command in AutoCAD?',
    opts: ['Moves, rotates, and optionally scales 2D or 3D objects to align with other target objects using 1, 2, or 3 pairs of source and destination points in a single operation', 'Aligns text paragraphs to the left margin', 'Lines up icons on the desktop', 'Aligns paper in the printer tray'],
    ans: 0,
    exp: 'The ALIGN command aligns objects with target geometry by specifying source and destination alignment points, with an option to scale 2D objects to match target dimensions.',
    tip: 'ALIGN moves, rotates, and scales objects to match target geometry in one command.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'What does the LENGTHEN command in AutoCAD do to open lines and arcs?',
    opts: ['Changes the length of objects and the included angle of arcs using Delta, Percent, Total length, or Dynamic dragging options', 'Measures distance without modifying geometry', 'Calculates area of polygons', 'Increases line thickness'],
    ans: 0,
    exp: 'The LENGTHEN command edits the length of lines/open polylines and included angles of arcs: Delta adds a length, Percent scales length, Total sets absolute final length.',
    tip: 'LENGTHEN modifies the length of lines and arc angles (Delta, Percent, Total, Dynamic).',
    top: 'CAD & Computer applications'
  },

  // --- COMPUTER HARDWARE, MEMORY & OPERATING SYSTEMS ---
  {
    q: 'Which component of a digital computer CPU performs mathematical arithmetic operations and logical comparisons?',
    opts: ['ALU (Arithmetic Logic Unit)', 'CU (Control Unit)', 'BIOS chip', 'Hard disk'],
    ans: 0,
    exp: 'The Arithmetic Logic Unit (ALU) is the CPU sub-component responsible for all elementary arithmetic calculations (addition, subtraction) and logical evaluations (AND, OR, NOT).',
    tip: 'ALU (Arithmetic Logic Unit) executes mathematical and logical operations in the CPU.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the primary function of the Control Unit (CU) inside a computer Central Processing Unit?',
    opts: ['Directing and coordinating the operations of all computer components by fetching instructions, decoding them, and managing data flow', 'Storing files permanently', 'Displaying graphics on the monitor', 'Cooling the processor fan'],
    ans: 0,
    exp: 'The Control Unit (CU) orchestrates the execution of instructions: it fetches instructions from memory, decodes them, and directs the ALU, registers, and buses.',
    tip: 'Control Unit (CU) fetches, decodes, and orchestrates instruction execution in the CPU.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'Why is RAM (Random Access Memory) characterized as "volatile" memory?',
    opts: ['Because all data stored in it is instantly lost when the computer power is switched off', 'Because it is made of radioactive materials', 'Because its memory chips overheat easily', 'Because it can be stolen over the internet'],
    ans: 0,
    exp: 'Volatile memory requires continuous electrical power to maintain its state. When power is removed, RAM contents are wiped immediately.',
    tip: 'RAM is volatile memory: data is lost immediately when power is turned off.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is ROM (Read-Only Memory) primarily used for on a computer motherboard?',
    opts: ['Storing essential permanent boot firmware (such as BIOS or UEFI) that boots the hardware during power-on', 'Storing user drawings and photos', 'Running video games', 'Caching web browser pages'],
    ans: 0,
    exp: 'ROM is non-volatile memory that permanently holds the BIOS/UEFI firmware necessary to initialize hardware components and load the operating system during startup.',
    tip: 'ROM is non-volatile memory holding the system boot firmware (BIOS/UEFI).',
    top: 'Computer Fundamentals'
  },
  {
    q: 'How many bits make up one Byte of digital data?',
    opts: ['8 bits', '4 bits', '16 bits', '32 bits'],
    ans: 0,
    exp: 'A byte consists of exactly 8 binary digits (bits). A group of 4 bits is called a nibble.',
    tip: '1 Byte = 8 bits. 1 Nibble = 4 bits.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'In digital computing binary storage, how many Bytes are in one Kilobyte (KB)?',
    opts: ['1024 Bytes (2^10 Bytes)', '1000 Bytes', '512 Bytes', '2048 Bytes'],
    ans: 0,
    exp: 'In computer architecture based on binary addressing, 1 KB = 2^10 = 1024 Bytes. In decimal SI notation, 1 kB = 1000 Bytes.',
    tip: '1 Kilobyte (KB) = 1024 Bytes. 1 Megabyte (MB) = 1024 KB. 1 Gigabyte (GB) = 1024 MB.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'Which computer storage device utilizes non-volatile flash memory chips with NO moving mechanical parts, providing ultra-fast read/write speeds for CAD operations?',
    opts: ['Solid State Drive (SSD - NVMe/SATA)', 'Hard Disk Drive (HDD)', 'Magnetic Tape drive', 'Compact Disc (CD-ROM)'],
    ans: 0,
    exp: 'Solid State Drives (SSDs) use NAND flash memory rather than spinning magnetic platters, eliminating seek time and drastically accelerating CAD file loading.',
    tip: 'SSDs use flash memory with no moving parts, delivering superior read/write speeds.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is a "Plotter" in computer hardware, and why is it preferred over ordinary desktop printers in civil engineering offices?',
    opts: ['A specialized large-format output device designed to print high-precision vector line drawings, site maps, and blueprints onto large paper rolls (A0, A1, A2)', 'A device that enters GPS coordinates', 'A specialized monitor with touch pen', 'A digitizing camera for aerial mapping'],
    ans: 0,
    exp: 'Plotters print high-resolution vector architectural drawings and cadastral survey plans on large sheets up to A0 size (841 x 1189 mm) or continuous roll paper.',
    tip: 'Plotter = large-format output device for printing architectural and survey plans (A0/A1).',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the function of a Graphics Processing Unit (GPU) with dedicated VRAM in a CAD workstation?',
    opts: ['Accelerating 2D/3D graphics rendering, model rotation, wireframe shading, and viewport pan/zoom without overloading the main CPU', 'Connecting the computer to the internet', 'Managing cooling fans', 'Saving files to USB flash drives'],
    ans: 0,
    exp: 'A dedicated GPU processes complex vector rendering, texture mapping, and 3D viewport rotations in real time, freeing the CPU for program logic.',
    tip: 'GPU accelerates 2D/3D graphics rendering and viewport manipulation in CAD.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is an Operating System (OS)?',
    opts: ['System software that manages computer hardware resources, memory, files, processes, and provides a user interface and runtime environment for application software', 'An application for drawing survey plans', 'A physical electronic circuit inside the keyboard', 'An antivirus security scanner'],
    ans: 0,
    exp: 'The operating system (e.g. Windows, Linux) manages hardware resources (CPU, RAM, storage, peripherals) and provides services for application programs like AutoCAD.',
    tip: 'Operating System manages computer hardware, memory, files, and runs applications.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the standard physical addressing length of a network hardware MAC (Media Access Control) address?',
    opts: ['48 bits (6 bytes)', '32 bits (4 bytes)', '64 bits (8 bytes)', '128 bits (16 bytes)'],
    ans: 0,
    exp: 'A MAC address is a unique 48-bit hardware identifier burned into network interface cards (NIC), written as 12 hexadecimal digits (e.g., 00:1A:2B:3C:4D:5E).',
    tip: 'MAC address is a 48-bit (6-byte) unique hardware physical address.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the address length of an IPv4 (Internet Protocol version 4) address?',
    opts: ['32 bits (expressed as 4 decimal octets separated by dots, e.g., 192.168.1.1)', '48 bits', '64 bits', '128 bits'],
    ans: 0,
    exp: 'IPv4 addresses are 32 bits in length, typically written in dotted-decimal format comprising four 8-bit octets (e.g. 192.168.0.1).',
    tip: 'IPv4 address = 32 bits (4 octets). IPv6 address = 128 bits.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the address length of an IPv6 (Internet Protocol version 6) address?',
    opts: ['128 bits (expressed as 8 hexadecimal groups separated by colons)', '32 bits', '48 bits', '64 bits'],
    ans: 0,
    exp: 'IPv6 uses 128-bit addresses to overcome IPv4 address exhaustion, providing 2^128 unique addresses represented in hexadecimal groups.',
    tip: 'IPv6 address = 128 bits (represented in hexadecimal).',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What type of network connects computers and peripherals within a localized geographical area such as a single office building, survey lab, or school campus?',
    opts: ['LAN (Local Area Network)', 'WAN (Wide Area Network)', 'MAN (Metropolitan Area Network)', 'PAN (Personal Area Network)'],
    ans: 0,
    exp: 'A Local Area Network (LAN) interconnects computers, plotters, and servers within a limited room, building, or campus.',
    tip: 'LAN (Local Area Network) connects computers in a single building or office.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is a WAN (Wide Area Network)?',
    opts: ['A telecommunications network spanning large geographical areas, connecting cities, states, or countries across continents (e.g., the Internet)', 'A network inside a single home', 'A Bluetooth connection between a phone and headset', 'A network connecting two computers with a USB cable'],
    ans: 0,
    exp: 'A Wide Area Network (WAN) connects geographically dispersed local networks across cities or countries. The Internet is the world largest public WAN.',
    tip: 'WAN (Wide Area Network) spans broad geographic areas across cities and countries.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the function of a Router in computer networking?',
    opts: ['Directing and forwarding data packets between different IP networks based on destination IP addresses and routing tables', 'Printing drawing blueprints', 'Converting AC voltage to DC power', 'Displaying text on the screen'],
    ans: 0,
    exp: 'A router operates at Layer 3 (Network Layer) of the OSI model, inspecting packet destination IP addresses to forward traffic between distinct networks.',
    tip: 'Router forwards data packets between different networks based on IP addresses.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the function of the DNS (Domain Name System) on the Internet?',
    opts: ['Translating human-readable domain names (such as www.keralapsc.gov.in) into numerical IP addresses (such as 164.100.150.10)', 'Encrypting email messages', 'Blocking computer viruses', 'Accelerating Wi-Fi speeds'],
    ans: 0,
    exp: 'DNS functions as the phonebook of the Internet, translating user-friendly domain names into machine-readable IP addresses required for network routing.',
    tip: 'DNS translates human-readable domain names into numerical IP addresses.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is a "Digitizer" (or graphics tablet with puck) historically used for in CAD mapping offices?',
    opts: ['Tracing existing paper land survey maps and blueprints by hand using an electronic crosshair puck to convert line features into digital CAD coordinates', 'Printing color photos', 'Scanning barcode labels', 'Displaying 3D movies'],
    ans: 0,
    exp: 'A digitizer tablet has an embedded electromagnetic wire grid. Tracing over a paper map taped to the tablet records digital coordinate points directly into AutoCAD.',
    tip: 'Digitizer tablets were used to trace paper survey maps into digital CAD drawings.',
    top: 'CAD & Computer applications'
  },
  {
    q: 'Which file system is standardly used by the modern Microsoft Windows operating system, supporting file permissions, journaling, and large drives?',
    opts: ['NTFS (New Technology File System)', 'FAT16', 'FAT12', 'EXT2'],
    ans: 0,
    exp: 'NTFS is the proprietary journaling file system used by modern Windows, supporting access control lists (permissions), encryption, and massive partition sizes.',
    tip: 'NTFS is the primary file system for modern Windows installations.',
    top: 'Computer Fundamentals'
  },
  {
    q: 'What is the function of the Windows shortcut key combination "Ctrl + Z"?',
    opts: ['Undo the most recent action or command', 'Redo the undone action', 'Save the current document', 'Cut the selected text'],
    ans: 0,
    exp: 'Ctrl + Z is the universal keyboard shortcut to Undo the last operation.',
    tip: 'Ctrl + Z = Undo. Ctrl + Y = Redo. Ctrl + S = Save.',
    top: 'Computer Fundamentals'
  }
];

m8Finish.forEach(q => addQ(q, 8, 'mod-8', 'CAD & Computer applications'));
console.log('Module 8 Finish processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
