const { ModulePdfBuilder } = require('./create-module-pdf-engine.cjs');

async function buildModule8() {
  const builder = new ModulePdfBuilder({
    moduleNumber: 8,
    moduleTitle: "Computer Aided Drafting (AutoCAD)",
    marks: "10 Marks",
    topics: "CAD Concepts & Interface (GUI, Application menu, Ribbon, Command line, File formats .dwg, .dxf, .dwt, .bak), Coordinate Systems (WCS, UCS, Absolute, Relative Rectangular, Relative Polar), Drawing Setup (UNITS, LIMITS, ZOOM, PAN, REGEN), Draw Commands (Line, Polyline, Circle, Arc, Rectangle, Polygon, Ellipse, Hatch, Spline), Modify Commands (Move, Copy, Rotate, Scale, Trim, Extend, Offset, Mirror, Fillet, Chamfer, Array, Explode, Stretch), Drafting Aids & Function Keys (F1 to F12, OSNAP, Ortho, Polar tracking), Layers & Properties (Layer states, Defpoints, Linetypes, LTSCALE), Dimensioning & Text (DIMSTYLE, MTEXT, DTEXT), Blocks & Attributes (BLOCK, WBLOCK, ATTDEF), Layouts & Plotting.",
    outputFilename: "module-08-autocad.pdf"
  });

  builder.addCoverPage();

  // CHAPTER 1
  builder.addSectionHeader("CHAPTER 1: INTRODUCTION TO CAD & AUTOCAD ENVIRONMENT");
  builder.addParagraph("Computer Aided Drafting (CAD) is the use of computer software to create, modify, analyze, and optimize technical drawings. In Kerala PSC engineering exams (Surveyor Gr. II, KWA Tracer, LSGD Draftsman), AutoCAD commands, keyboard shortcuts, coordinate formats, and drafting aids are heavily tested.");

  builder.addSubSectionHeader("1.1 AutoCAD User Interface (GUI) Components");
  builder.addBulletPoints([
    { bold: "Application Menu (Big 'A')", text: "Located at the upper-left corner of the window. Provides access to file management tools: New, Open, Save, Save As, Export, Print/Plot, and Close." },
    { bold: "Quick Access Toolbar (QAT)", text: "Displays frequently used commands: New, Open, Save, Undo (Ctrl+Z), Redo (Ctrl+Y), Plot (Ctrl+P), and Workspace Switching." },
    { bold: "Ribbon & Panels", text: "Organizes commands into logical Tabs (Home, Insert, Annotate, Parametric, View, Manage, Output) containing Panels (Draw, Modify, Annotation, Layers, Block, Properties, Utilities)." },
    { bold: "Command Line Window", text: "The heart of AutoCAD. Located at the bottom of the screen. Displays command prompts, options in square brackets [ ], default values in angled brackets < >, and accepts typed command shortcuts." },
    { bold: "Status Bar", text: "Located along the bottom edge of the screen. Contains toggle icons for drafting aids: Grid (F7), Snap (F9), Ortho (F8), Polar Tracking (F10), OSNAP (F3), Object Snap Tracking (F11), Dynamic Input (F12), and Workspace Switching." },
    { bold: "Crosshair Cursor", text: "Composed of two intersecting perpendicular lines with a small square box at the center called the PICKBOX (used for selecting objects)." }
  ]);

  builder.addSubSectionHeader("1.2 Standard AutoCAD File Formats & Extensions");
  builder.addTable(
    ["File Extension", "Full Technical Designation", "Description & Standard Function in CAD"],
    [
      [".dwg", "Drawing Database File", "AutoCAD's native, proprietary binary vector drawing format; stores all 2D and 3D geometric entities, layers, and metadata"],
      [".dxf", "Drawing Exchange Format", "Universal ASCII or binary CAD interchange format developed by Autodesk to enable interoperability with GIS, CAM, and other CAD programs"],
      [".dwt", "Drawing Template File", "A prototype drawing file containing predefined layers, text styles, dimension styles, units, and title blocks (e.g. acad.dwt, acadiso.dwt)"],
      [".bak", "Backup Drawing File", "Automatic backup created in the same folder whenever an existing .dwg is saved; preserves the state of the drawing PRIOR to the latest save; rename to .dwg to recover"],
      [".sv$", "Automatic Save File", "Temporary file created at user-defined time intervals (default 10 mins) stored in system Temp folder; used for emergency crash recovery"]
    ],
    [95, 160, 245]
  );

  builder.addFocusBox("BAK FILE RECOVERY IN PSC", "PSC Question: 'How can you recover a drawing from a .bak file in AutoCAD?' Rename the file extension from .bak to .dwg in Windows File Explorer! The .bak file is created automatically every time a drawing is saved.");

  // CHAPTER 2
  builder.addSectionHeader("CHAPTER 2: COORDINATE SYSTEMS & INPUT MODES");
  builder.addParagraph("AutoCAD uses the Cartesian coordinate system to locate points in 2D and 3D space. The intersection of the X-axis and Y-axis is the Origin (0,0).");

  builder.addSubSectionHeader("2.1 World Coordinate System (WCS) vs User Coordinate System (UCS)");
  builder.addBulletPoints([
    { bold: "World Coordinate System (WCS)", text: "The fixed, permanent global reference coordinate system. The X-axis is horizontal (positive to the right), Y-axis is vertical (positive upwards), and Z-axis is perpendicular to screen (positive towards observer). WCS cannot be altered." },
    { bold: "User Coordinate System (UCS)", text: "A movable, user-defined Cartesian coordinate system that can be positioned, rotated, and inclined anywhere in 3D space to simplify drafting on inclined planes or local building alignments. Commanded by UCS." }
  ]);

  builder.addSubSectionHeader("2.2 The Three Coordinate Entry Methods");
  builder.addTable(
    ["Coordinate Method", "Syntax / Format", "Example Entry", "Mathematical Reference / Explanation"],
    [
      ["Absolute Coordinates", "X, Y", "50, 75", "Locates a point strictly with reference to the fixed Origin (0,0). X = 50 units right of origin, Y = 75 units above origin"],
      ["Relative Rectangular Coordinates", "@ΔX, ΔY", "@30, 40", "Locates a point relative to the LAST ENTERED POINT preceded by '@'. Moves 30 units in X and 40 units in Y from current point"],
      ["Relative Polar Coordinates", "@Distance < Angle", "@100 < 45", "Locates a point at a specified linear distance and angle from the LAST POINT. Distance = 100 units at an angle of 45° counter-clockwise from positive X-axis"],
      ["Direct Distance Entry (DDE)", "Distance + Direction", "Type '100' + Enter", "Pointer is aimed in the desired direction (locked with Ortho F8 or Polar Tracking F10) and exact distance is typed directly"]
    ],
    [125, 105, 95, 175]
  );

  builder.addFocusBox("ANGULAR CONVENTION IN AUTOCAD", "In standard AutoCAD default settings:\n• 0° is along the positive X-axis (pointing East / Right).\n• Angles are measured POSITIVE in the COUNTER-CLOCKWISE direction.\n• 90° = North (Up), 180° = West (Left), 270° = South (Down).");

  // CHAPTER 3
  builder.addSectionHeader("CHAPTER 3: DRAWING SETUP & DISPLAY CONTROLS");
  builder.addParagraph("Setting up the workspace units, sheet limits, and display magnification ensures correct scale and visual precision.");

  builder.addSubSectionHeader("3.1 Drawing Setup Commands: UNITS & LIMITS");
  builder.addBulletPoints([
    { bold: "UNITS Command (UN)", text: "Controls display format and precision of linear lengths and angular measurements. Length types: Architectural (feet & inches), Decimal (metric mm/m), Engineering (feet & decimal inches), Fractional, Scientific. Angle types: Decimal Degrees, Deg/Min/Sec, Grads, Radians, Surveyor's Units." },
    { bold: "LIMITS Command", text: "Sets the artificial boundaries of the drawing grid. Entered as lower-left corner (usually 0,0) and upper-right corner (e.g. 420,297 for A3 sheet). LIMITS ON prevents drawing outside bounds." }
  ]);

  builder.addSubSectionHeader("3.2 Display Controls: ZOOM, PAN & REGEN");
  builder.addTable(
    ["Command / Option", "Shortcut", "Function & Operational Characteristics"],
    [
      ["ZOOM All", "Z -> A", "Zooms to display the entire drawing area defined by the drawing LIMITS or the drawing extents, whichever is larger"],
      ["ZOOM Extents", "Z -> E", "Zooms to display ALL DRAWN OBJECTS in the drawing to fill the current graphics screen area (independent of drawing limits)"],
      ["ZOOM Window", "Z -> W", "Zooms to display an area specified by two diagonally opposite pick points"],
      ["ZOOM Previous", "Z -> P", "Restores the previous display view (up to 10 previous views)"],
      ["PAN", "P", "Shifts the display view in any direction without changing the magnification scale factor"],
      ["REGEN", "RE", "Regenerates the entire drawing from floating-point database; recalculates screen coordinates and restores smooth curves"],
      ["VIEWRES", "VIEWRES", "Sets the resolution for fast zoom and controls circle smoothness (number of line segments drawn for circles)"]
    ],
    [115, 75, 310]
  );

  // CHAPTER 4
  builder.addSectionHeader("CHAPTER 4: BASIC DRAWING (DRAW) COMMANDS");
  builder.addParagraph("Draw commands create primary 2D vector geometric entities in the AutoCAD drawing database.");

  builder.addTable(
    ["Command Name", "Alias", "Key Sub-Options & Specifications", "PSC Exam Key Points"],
    [
      ["LINE", "L", "Specify first point -> specify next point. Closed by typing 'C'", "Each line segment is an INDEPENDENT separate object"],
      ["POLYLINE", "PL", "Arc, Halfwidth, Length, Undo, Width", "Creates a single continuous connected 2D object consisting of line and arc segments; can have variable line widths!"],
      ["CIRCLE", "C", "Center-Radius (default), Center-Diameter, 2P (two points), 3P (three points), TTR (Tangent-Tangent-Radius), TTT", "Standard default mode is Center-Radius"],
      ["ARC", "A", "11 different methods: 3-Point (default), Start-Center-End, Start-Center-Angle, Start-Center-Length, Start-End-Radius", "AutoCAD draws arcs in COUNTER-CLOCKWISE direction by default!"],
      ["RECTANGLE", "REC", "Chamfer, Elevation, Fillet, Thickness, Width, Area, Dimensions, Rotation", "Creates a closed POLYLINE object with 4 vertices"],
      ["POLYGON", "POL", "Number of sides (3 to 1024), Inscribed in circle (I), Circumscribed about circle (C), Edge (E)", "Creates a regular closed equilateral polyline"],
      ["ELLIPSE", "EL", "Axis endpoints (Major and minor axes), Center, Elliptical Arc", "Mathematical true ellipse"],
      ["SPLINE", "SPL", "Fit points, Control Vertices (CV), Degree, Knot parameterization", "Smooth NURBS curve passing through or guided by points"],
      ["HATCH", "H", "Pick internal point, Select boundary objects, Pattern (ANSI, ISO, Solid, Gradient), Scale, Angle, Associative", "Associative hatch automatically updates shape when boundary is modified!"]
    ],
    [85, 45, 205, 165]
  );

  builder.addTrapBox("LINE VS POLYLINE IN PSC", "• LINE command creates individual, disconnected line segments.\n• POLYLINE (PL) creates a SINGLE unified compound object comprising multiple straight and curved segments with customizable line width.\n• To convert Lines into a Polyline, use PEDIT (PE) with the 'Join' option.");

  // CHAPTER 5
  builder.addSectionHeader("CHAPTER 5: OBJECT MODIFICATION (MODIFY) COMMANDS");
  builder.addParagraph("Modify commands alter the geometry, position, size, and orientation of existing drawing objects.");

  builder.addTable(
    ["Command", "Alias", "Operational Mechanism", "PSC Key Behavior"],
    [
      ["ERASE", "E", "Deletes selected objects from the drawing database", "OOPS command restores the most recently erased objects without undoing intervening work!"],
      ["MOVE", "M", "Displaces objects by a specified distance and direction from a base point", "Original object shifts to new position; source deleted"],
      ["COPY", "CO / CP", "Duplicates objects by a specified displacement vector from base point", "Original remains intact; multiple copies can be placed"],
      ["ROTATE", "RO", "Rotates objects about a specified base point by an angle", "Counter-clockwise angle is positive; 'Reference' option matches existing alignments"],
      ["SCALE", "SC", "Enlarges or reduces objects proportionally about a base point", "Scale factor > 1 enlarges; Scale factor < 1 reduces (e.g. 0.5 halves size); 'Reference' option available"],
      ["OFFSET", "O", "Constructs parallel lines, concentric circles, and parallel curves", "Specify offset distance -> select object -> click side to offset"],
      ["TRIM", "TR", "Cuts objects cleanly at edges defined by other intersecting objects", "Shift+Select toggles to EXTEND command!"],
      ["EXTEND", "EX", "Lengthens objects to meet boundary edges of other objects", "Shift+Select toggles to TRIM command!"],
      ["FILLET", "F", "Connects two intersecting or non-parallel lines with a smooth tangent arc of radius R", "Setting Fillet Radius R = 0 creates a clean sharp corner!"],
      ["CHAMFER", "CHA", "Bevels the intersection of two lines with an inclined straight segment", "Defined by two distances (D1, D2) or distance and angle"],
      ["MIRROR", "MI", "Creates a reverse reflection copy of objects across a specified mirror line", "Controlled by MIRRTEXT system variable (0 = text not reversed; 1 = text reversed)"],
      ["ARRAY", "AR", "Creates multiple copies in organized Rectangular, Polar (circular), or Path patterns", "Associative arrays remain linked and dynamically editable"],
      ["EXPLODE", "X", "Decomposes compound entities (polylines, blocks, dimensions, hatches, meshes) into component lines and arcs", "Cannot explode a non-compound entity; Mtext explodes into single-line text"]
    ],
    [75, 50, 205, 170]
  );

  builder.addFocusBox("FILLET RADIUS ZERO & OOPS COMMAND", "• Setting Fillet Radius R = 0 trims or extends two non-parallel lines to form a perfect sharp 90° corner.\n• OOPS command restores the last deleted selection set even after performing other intermediate commands (unlike Undo which reverts everything).");

  // CHAPTER 6
  builder.addSectionHeader("CHAPTER 6: DRAFTING AIDS, FUNCTION KEYS & OBJECT SNAPS");
  builder.addParagraph("Drafting aids allow surveyors to draft with mathematical precision without calculating coordinates manually.");

  builder.addSubSectionHeader("6.1 Function Keys Quick Reference Table");
  builder.addTable(
    ["Function Key", "Drafting Aid Feature", "Operational Toggle Function"],
    [
      ["F1", "AutoCAD Online Help", "Opens AutoCAD documentation and command reference"],
      ["F2", "Expanded Text History Window", "Toggles command line text history window on/off"],
      ["F3", "Object Snap (OSNAP)", "Toggles running object snap modes on/off"],
      ["F4", "3D Object Snap", "Toggles 3D object snap modes on/off"],
      ["F5", "Isoplane Switching", "Cycles isometric planes: Isoplane Left, Top, Right"],
      ["F6", "Dynamic UCS", "Toggles automatic dynamic user coordinate system on 3D faces"],
      ["F7", "Grid Display", "Toggles graphics display background grid on/off"],
      ["F8", "Ortho Mode", "Locks cursor movement strictly to horizontal and vertical axes (0°, 90°, 180°, 270°)"],
      ["F9", "Snap Mode", "Locks crosshair movement to discrete grid snap increments"],
      ["F10", "Polar Tracking", "Displays alignment paths at specified polar angle increments (15°, 30°, 45°, 90°)"],
      ["F11", "Object Snap Tracking (OTRACK)", "Tracks along alignment paths from active OSNAP points"],
      ["F12", "Dynamic Input", "Displays command prompts and coordinate inputs directly beside crosshairs"]
    ],
    [95, 185, 220]
  );

  builder.addSubSectionHeader("6.2 Object Snap (OSNAP) Modes & Selection Modes");
  builder.addBulletPoints([
    { bold: "OSNAP Modes", text: "ENDpoint (snaps to line/arc ends), MIDpoint (snaps to exact midpoint of segment), CENter (snaps to center of circle/arc/ellipse), NODe (snaps to point object), QUADrant (snaps to 0°, 90°, 180°, 270° circle points), INTersection (snaps to intersection of two objects), EXTension (tracks along imaginary extension line), PERpendicular (snaps to perpendicular drop point), TANgent (snaps to circle/arc tangent), NEArest (snaps to nearest point on object)." },
    { bold: "Window Selection (Blue Box)", text: "Drawn from LEFT to RIGHT. Selects ONLY objects that lie ENTIRELY inside the rectangular selection box." },
    { bold: "Crossing Selection (Green Box)", text: "Drawn from RIGHT to LEFT with dashed boundary. Selects all objects that lie inside OR are TOUCHED/CROSSED by the selection box." }
  ]);

  builder.addTrapBox("WINDOW VS CROSSING SELECTION IN PSC", "• Left-to-Right = Solid Blue window => selects ONLY objects completely enclosed.\n• Right-to-Left = Dashed Green window => selects ANY object touched or crossed by the box!");

  // CHAPTER 7
  builder.addSectionHeader("CHAPTER 7: LAYERS, PROPERTIES & DRAWING STANDARDS");
  builder.addParagraph("Layers are the primary organizational tool in AutoCAD, functioning like transparent electronic overlays that organize drawing elements by functional category (e.g. Centerlines, Wall Outlines, Dimensions, Text, Electrical).");

  builder.addSubSectionHeader("7.1 Layer States and Controls");
  builder.addTable(
    ["Layer State", "Icon", "Visual Display", "Database Regeneration & Performance Effect"],
    [
      ["On / Off", "Lightbulb", "Turning OFF makes objects invisible; turning ON makes objects visible", "Objects are still evaluated in memory during REGEN (drawings still calculate frozen geometry)"],
      ["Freeze / Thaw", "Sun / Snowflake", "Freezing makes objects completely invisible; thawing restores visibility", "Frozen layers are NOT calculated or regenerated in memory; drastically improves regeneration speed in large civil master plans!"],
      ["Lock / Unlock", "Padlock", "Locked layer objects remain fully visible but cannot be edited, moved, or deleted by accident", "Prevents accidental erasure; objects can still be snapped to using OSNAP!"],
      ["Plot / No-Plot", "Printer", "Controls whether the layer will be printed/plotted", "No-plot layers appear on screen for reference but do NOT print on final paper plot (e.g. viewports)"]
    ],
    [105, 75, 140, 180]
  );

  builder.addFocusBox("LAYER 0 & DEFPOINTS SPECIAL PROPERTIES", "• Layer 0: The default system layer present in every drawing; CANNOT be deleted or renamed.\n• Defpoints Layer: Created automatically when dimensions are added; objects placed on Defpoints are visible on screen but NEVER PLOT on paper plots!");

  builder.addSubSectionHeader("7.2 Linetype Scale & Match Properties");
  builder.addBulletPoints([
    { bold: "LTSCALE Command", text: "Sets the global linetype scale factor for the entire drawing. Controls the spacing and frequency of dashes and dots in hidden and centerlines." },
    { bold: "MATCHPROP Command (MA)", text: "Copies the properties (layer, color, linetype, lineweight, dimension style, hatch pattern) from a source object to one or more destination objects." }
  ]);

  // CHAPTER 8
  builder.addSectionHeader("CHAPTER 8: ANNOTATION, BLOCKS & PLOTTING");
  builder.addParagraph("Annotations communicate manufacturing, dimensioning, and cadastral survey information to the reader.");

  builder.addSubSectionHeader("8.1 Text: Single-Line (DTEXT) vs Multiline (MTEXT)");
  builder.addBulletPoints([
    { bold: "Single-Line Text (DTEXT / TEXT)", text: "Each line of text is created as an independent object. Ideal for short survey labels, benchmark notes, room names." },
    { bold: "Multiline Text (MTEXT)", text: "Creates a single unified paragraph text object with a rich text formatting editor (fonts, columns, bullets, stacked fractions)." },
    { bold: "Special Text Symbols", text: "%%c = Diameter symbol (Ø); %%d = Degree symbol (°); %%p = Plus/Minus tolerance symbol (±); %%% = Percentage symbol (%)." }
  ]);

  builder.addSubSectionHeader("8.2 Blocks & Attributes: BLOCK vs WBLOCK");
  builder.addTable(
    ["Block Command", "Command Alias", "Storage Scope & Nature", "PSC Examination Key"],
    [
      ["BLOCK", "B", "Creates an internal block definition stored strictly WITHIN the current drawing database", "Available only in the drawing where it was created"],
      ["WBLOCK (Write Block)", "W", "Exports a block or selected geometry as an INDEPENDENT external .dwg file saved to disk", "Can be inserted into ANY other drawing as a library component"],
      ["ATTDEF", "ATT", "Creates an Attribute: an intelligent, editable text label embedded inside a block definition", "Allows prompt-driven data entry (e.g. Survey Station ID, Bench Mark RL) when block is inserted"]
    ],
    [125, 65, 175, 135]
  );

  builder.addSubSectionHeader("8.3 Model Space vs Paper Space & Viewports");
  builder.addBulletPoints([
    { bold: "Model Space", text: "The infinite, 3D design workspace where the actual engineering structure or land parcel is drawn at TRUE FULL SIZE (1:1 scale)." },
    { bold: "Paper Space (Layout Tabs)", text: "The 2D page-layout environment representing the physical sheet of paper where drawings are arranged, scaled, and bordered for final printing." },
    { bold: "Floating Viewports (MVIEW / MV)", text: "Windows cut into paper space through which model space objects are viewed. Allows setting different display scales (e.g. 1:500 for site plan, 1:50 for detail section) on the same sheet!" }
  ]);

  builder.addSubSectionHeader("8.4 Basic 3D Modeling Commands in AutoCAD");
  builder.addTable(
    ["3D Command", "Alias", "3D Geometric Operation", "Standard Engineering Application"],
    [
      ["EXTRUDE", "EXT", "Creates a 3D solid or surface by extruding a 2D closed planar curve (profile) along a path or perpendicular distance", "Extruding building floor plans into 3D walls, pillars, bridge piers"],
      ["REVOLVE", "REV", "Sweeps a 2D closed profile around a specified revolution axis through a given angle (default 360°)", "Creating circular symmetrical solids: pipes, domes, shafts, pulleys, tanks"],
      ["SWEEP", "SWEEP", "Extrudes a 2D closed profile along an open or closed 2D/3D path curve", "Water supply pipes, handrails, road alignments, ductwork"],
      ["LOFT", "LOFT", "Creates a 3D solid by creating transitions through a series of cross-sectional profiles", "Boat hulls, airplane wings, complex transition topography"],
      ["UNION", "UNI", "Combines two or more overlapping 3D solids or 2D regions into a single unified composite solid", "Boolean addition of solid objects"],
      ["SUBTRACT", "SU", "Removes the volume of one 3D solid from another (base solid - cutting solid)", "Cutting holes, windows, and door openings in solid 3D walls"],
      ["INTERSECT", "IN", "Creates a 3D solid from the common overlapping volume of two or more intersecting solids", "Boolean intersection operations"]
    ],
    [95, 55, 195, 165]
  );

  // CHAPTER 9
  builder.addSectionHeader("CHAPTER 9: COMPLETE AUTOCAD SHORTCUT KEYS QUICK REFERENCE TABLE");
  builder.addTable(
    ["Shortcut", "Command Name", "Shortcut", "Command Name", "Shortcut", "Command Name"],
    [
      ["L", "LINE", "M", "MOVE", "LA", "LAYER"],
      ["PL", "POLYLINE", "CO / CP", "COPY", "LT", "LINETYPE"],
      ["C", "CIRCLE", "RO", "ROTATE", "LTS", "LTSCALE"],
      ["A", "ARC", "SC", "SCALE", "MA", "MATCHPROP"],
      ["REC", "RECTANGLE", "TR", "TRIM", "B", "BLOCK"],
      ["POL", "POLYGON", "EX", "EXTEND", "W", "WBLOCK"],
      ["EL", "ELLIPSE", "F", "FILLET", "I", "INSERT"],
      ["H", "HATCH", "CHA", "CHAMFER", "MT", "MTEXT"],
      ["REG", "REGION", "O", "OFFSET", "D", "DIMSTYLE"],
      ["SPL", "SPLINE", "MI", "MIRROR", "Z", "ZOOM"],
      ["X", "EXPLODE", "AR", "ARRAY", "P", "PAN"]
    ],
    [80, 85, 80, 85, 85, 85]
  );

  // CHAPTER 10
  builder.addSectionHeader("CHAPTER 10: KERALA PSC 50 RAPID-FIRE ONE-LINERS & EXAM VAULT");

  builder.addOneLiners("GUI & Coordinate Systems", [
    { q: "Native proprietary file extension of AutoCAD", a: ".dwg (Drawing Database)." },
    { q: "Universal CAD interchange file format", a: ".dxf (Drawing Exchange Format)." },
    { q: "File format for AutoCAD drawing templates", a: ".dwt (Drawing Template)." },
    { q: "Automatic backup file extension", a: ".bak (Backup Drawing)." },
    { q: "Symbol prefix for relative coordinates", a: "@ symbol (e.g. @50,30)." },
    { q: "Default angle measurement direction in AutoCAD", a: "Counter-Clockwise (Positive angles)." },
    { q: "Coordinate system with fixed origin (0,0,0)", a: "World Coordinate System (WCS)." },
    { q: "User-defined movable coordinate system", a: "User Coordinate System (UCS)." },
    { q: "Command to set drawing sheet boundaries", a: "LIMITS." },
    { q: "Command to restore smooth circles after zooming", a: "REGEN (RE)." }
  ]);

  builder.addOneLiners("Commands & Function Keys", [
    { q: "Function key to toggle Ortho mode on/off", a: "F8." },
    { q: "Function key to toggle OSNAP on/off", a: "F3." },
    { q: "Function key to toggle Grid on/off", a: "F7." },
    { q: "Function key to toggle Polar Tracking", a: "F10." },
    { q: "Function key to toggle Dynamic Input", a: "F12." },
    { q: "Command to create rounded corner with arc", a: "FILLET (F)." },
    { q: "Fillet radius value to create sharp 90° corner", a: "Radius = 0." },
    { q: "Command to bevel corners with straight segment", a: "CHAMFER (CHA)." },
    { q: "Command to break polyline into individual lines", a: "EXPLODE (X)." },
    { q: "Command to create parallel lines at given distance", a: "OFFSET (O)." }
  ]);

  builder.addOneLiners("Layers, Blocks & Annotation", [
    { q: "Layer that cannot be deleted or renamed", a: "Layer 0." },
    { q: "Layer whose objects NEVER plot on paper", a: "Defpoints layer." },
    { q: "Layer state that skips memory calculation in REGEN", a: "Freeze (Thaw)." },
    { q: "Text code to write Diameter symbol (Ø)", a: "%%c." },
    { q: "Text code to write Degree symbol (°)", a: "%%d." },
    { q: "Text code to write Plus/Minus symbol (±)", a: "%%p." },
    { q: "Command to create external block file on disk", a: "WBLOCK (Write Block)." },
    { q: "Command to create editable text inside a block", a: "ATTDEF (Attribute Definition)." },
    { q: "Space where actual structure is drawn at 1:1 scale", a: "Model Space." },
    { q: "Command to create floating viewport in layout", a: "MVIEW (MV)." }
  ]);

  builder.addSubSectionHeader("AutoCAD Drafting Revision Checklist Matrix");
  builder.addTable(
    ["Topic / Command", "Governing Rule / Syntax", "Kerala PSC Exam Key"],
    [
      ["Coordinate Entry", "Absolute: X,Y; Relative: @X,Y; Polar: @D<A", "Counter-clockwise angle is positive; 0° is East"],
      ["Function Keys", "F3 = OSNAP; F8 = ORTHO; F10 = Polar; F7 = Grid", "F8 locks to 90° increments; F3 toggles snaps"],
      ["Line vs Polyline", "Line = independent; Polyline = single object", "Polyline can have variable width and curved arcs"],
      ["Fillet Radius 0", "F -> R -> 0", "Creates sharp 90° corner between lines"],
      ["Special Symbols", "%%c = Ø, %%d = °, %%p = ±", "Used in MTEXT and DTEXT annotation"],
      ["Block vs Wblock", "B = internal drawing only; W = external .dwg file", "Wblock can be reused across multiple projects"],
      ["Layer States", "Freeze skips REGEN calculation; Off does not", "Layer 0 cannot be deleted; Defpoints does not plot"]
    ],
    [125, 175, 200]
  );

  return await builder.finish();
}

async function runBuild() {
  console.log('Generating Module 08 PDF...');
  const res = await buildModule8();
  console.log(`Module 08 Complete! Pages: ${res.totalPages}`);
}

runBuild().catch(console.error);
