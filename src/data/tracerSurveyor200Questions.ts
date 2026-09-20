import { BankQuestion, PYQPaper, MockTest } from '../types';

export const TRACER_SURVEYOR_200_QUESTIONS: BankQuestion[] = [
  {
    "id": "bq-pyq200-q001",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "As per BIS (IS 1444-1989) the standard size of B1 drawing board is _________",
    "options": [
      "1000 × 1500 mm",
      "700 × 1000 mm",
      "500 × 700 mm",
      "350 × 500 mm"
    ],
    "correctOptionIndex": 1,
    "explanation": "Standard drawing board sizes as per BIS (IS 1444-1989): B0 = 1000 × 1500 mm, B1 = 700 × 1000 mm, B2 = 500 × 700 mm, B3 = 350 × 500 mm.",
    "rankerTip": "B0 = 1000×1500 mm; B1 = 700×1000 mm; B2 = 500×700 mm; B3 = 350×500 mm.",
    "topic": "Drawing boards",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q1) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q002",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "For drawing long thin lines of uniform thickness the pencil should be sharpened",
    "options": [
      "Chisel edge",
      "Pointed lead",
      "Conical point",
      "Flat blade"
    ],
    "correctOptionIndex": 0,
    "explanation": "A chisel edge is sharpened to maintain a uniform line thickness along straight edges (ruler/T-square). Conical points wear rapidly and broaden line width.",
    "rankerTip": "Chisel edge: uniform thickness along straight edges. Conical point: lettering and freehand.",
    "topic": "Pencils & Instruments",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q2) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q003",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The ratio of length to width of all arrow heads in drawing is",
    "options": [
      "2:1",
      "4:1",
      "3:1",
      "2:4"
    ],
    "correctOptionIndex": 2,
    "explanation": "According to SP 46 / IS 10714 drafting standards, dimension arrowheads must have a standard length-to-width (depth-to-spread) ratio of 3:1.",
    "rankerTip": "Length to width ratio of arrowheads is strictly 3:1.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q3) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q004",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "For thin chain line alternate long and short dashes are in proportion ranging from",
    "options": [
      "6:1 to 4:1",
      "9:1 to 3:1",
      "6:2 to 4:2",
      "9:1 to 4:1"
    ],
    "correctOptionIndex": 0,
    "explanation": "For thin chain lines (center lines / Type G), long dashes are 9 to 12 mm and short dashes are 1.5 to 2 mm, giving a proportion ranging from 6:1 to 4:1.",
    "rankerTip": "Center line dashes are in 6:1 to 4:1 proportion.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q4) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q005",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The plan and elevation of a line segment are seen coincides, the line is situated in the",
    "options": [
      "First quadrant",
      "Second quadrant",
      "Third quadrant",
      "Quadrantal axis"
    ],
    "correctOptionIndex": 1,
    "explanation": "When a line lies in the 2nd quadrant (above HP, behind VP) or 4th quadrant (below HP, in front of VP), upon rotating HP by 90°, the plan (top view) and elevation (front view) overlap on the same side of the reference line XY.",
    "rankerTip": "2nd and 4th quadrants cause plan and elevation to coincide/overlap.",
    "topic": "Projections",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q5) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q006",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The recommended dimensioning of a sphere of Diameter 20 mm is",
    "options": [
      "20 Ø S",
      "S Ø 20",
      "S 20 Ø",
      "Ø 20 S"
    ],
    "correctOptionIndex": 1,
    "explanation": "As per ISO/BIS drafting conventions, spherical diameter is dimensioned by prefixing the symbol 'S' before the diameter symbol Ø, formatted as S Ø 20 (or SR for spherical radius).",
    "rankerTip": "S Ø 20 for spherical diameter; SR 20 for spherical radius.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q6) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q007",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The type of Vernier in which the Vernier divisions are marked in the opposite direction of the main scale is",
    "options": [
      "Vernier Scale",
      "Forward Vernier",
      "Backward Vernier",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "In a backward (retrograde) vernier, divisions are numbered in the direction opposite to the main scale, where n vernier divisions equal (n + 1) main scale divisions.",
    "rankerTip": "Direct vernier: same direction, nv = (n-1)d. Retrograde (backward) vernier: opposite direction, nv = (n+1)d.",
    "topic": "Scales & Verniers",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q7) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q008",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The method of projection in which the projectors are parallel to each other and perpendicular to the plane the projection is",
    "options": [
      "Isometric Projection",
      "Orthographic Projection",
      "Perspective Projection",
      "Oblique Projection"
    ],
    "correctOptionIndex": 1,
    "explanation": "Orthographic projection is an axonometric/parallel projection method where projection rays are mutually parallel to each other and normal (perpendicular) to the projection plane.",
    "rankerTip": "Projectors parallel to each other & perpendicular to projection plane = Orthographic.",
    "topic": "Orthographic projection",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q8) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q009",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "RF = 200:1 represents a",
    "options": [
      "Enlarging Scale",
      "Reducing Scale",
      "Full Size",
      "Comparative Scale"
    ],
    "correctOptionIndex": 0,
    "explanation": "Representative Fraction (RF) > 1 (e.g. 200:1) indicates an enlarging scale used for small precision components. RF < 1 is a reducing scale.",
    "rankerTip": "RF > 1: Enlarging scale. RF = 1: Full size scale. RF < 1: Reducing scale.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q10) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q010",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Scale 1 : 200 is classified as",
    "options": [
      "full scale",
      "scale of chords",
      "enlarged scale",
      "reduction scale"
    ],
    "correctOptionIndex": 3,
    "explanation": "A scale of 1:200 has an RF < 1, meaning 1 unit on the drawing represents 200 units in reality; it is a reducing scale.",
    "rankerTip": "1:200 means reduction scale.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q67) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q011",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "The survey in which earth's curvature is taken into account is",
    "options": [
      "Levelling",
      "Geodetic survey",
      "Theodolite Survey",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "In geodetic surveying, the curvature of the earth's spheroidal surface is taken into account for large areas (> 250 km²).",
    "rankerTip": "Plane survey: curvature neglected (< 250 km²). Geodetic survey: curvature considered (> 250 km²).",
    "topic": "Geodetic survey",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q11) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q012",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "Surveying Chain is Made up of",
    "options": [
      "Galvanised MS Wire",
      "MS Wire",
      "High carbon steel",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Survey chains are manufactured from galvanized mild steel (MS) wire of 4 mm diameter (8 SWG) with ends looped into rings.",
    "rankerTip": "Galvanized mild steel wire of 4 mm diameter protects against rust.",
    "topic": "Chain construction",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q12) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q013",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "The Length of surveyor's chain is",
    "options": [
      "100 ft",
      "66 ft",
      "33 ft",
      "30 m"
    ],
    "correctOptionIndex": 1,
    "explanation": "Gunter's chain (surveyor's chain) is 66 feet (20.12 m) long and consists of 100 links, with each link measuring 0.66 ft (7.92 inches).",
    "rankerTip": "Gunter's chain = 66 ft (100 links). Engineer's chain = 100 ft (100 links). Revenue chain = 33 ft (16 links).",
    "topic": "Gunter's chain",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q14) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q014",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "In ordinary chain survey the maximum permissible error is",
    "options": [
      "1 in 250",
      "1 in 1000",
      "1 in 2000",
      "1 in 5000"
    ],
    "correctOptionIndex": 1,
    "explanation": "In ordinary chain surveying under normal field conditions, the maximum permissible ratio of error is 1 in 1000 (1 in 250 in rough ground; 1 in 1000 is official key for standard ordinary chaining).",
    "rankerTip": "1 in 1000 for standard chaining; 1 in 2000 for steel band chaining.",
    "topic": "Permissible errors",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q15) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q015",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "The correction for sag is always _____",
    "options": [
      "+ ve",
      "− ve",
      "+ ve or − ve",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correction for sag is always negative (-ve) because the catenary curve makes the measured distance between supports longer than the true straight chord distance.",
    "rankerTip": "Sag correction is ALWAYS negative (-ve).",
    "topic": "Sag correction",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q16) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q016",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "If L is the correct length of a chain, L' is the incorrect length and D' is the measured length, then the correct length is:",
    "options": [
      "(L' / L) × D'",
      "(L / L') × D'",
      "(L / D') × L'",
      "(D' / L) × L'"
    ],
    "correctOptionIndex": 0,
    "explanation": "True distance = (Measured length) × (Incorrect length of chain / True length of chain) = D' × (L' / L).",
    "rankerTip": "True × True = Wrong × Wrong => True Distance = (L'/L) × D'.",
    "topic": "Chain errors",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q17) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q017",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "The instrument which is not used in chain survey is",
    "options": [
      "Ranging Rod",
      "Cross Staff",
      "Offset Rod",
      "Levelling Staff"
    ],
    "correctOptionIndex": 3,
    "explanation": "A levelling staff is used exclusively in levelling and tachometric work to measure vertical elevations, not for linear distance measurement in chain surveying.",
    "rankerTip": "Levelling staff is for vertical measurements, not chain surveying.",
    "topic": "Instruments",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q18) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q018",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "The Principle of chain surveying is",
    "options": [
      "Work from Whole to Part",
      "Triangulation",
      "Traversing",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "The fundamental principle of chain surveying is triangulation, whereby the survey area is partitioned into a network of well-conditioned triangles.",
    "rankerTip": "Chain survey principle: Triangulation.",
    "topic": "Principles of Chain Survey",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q19) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q019",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "The system of lines or Triangles covering the area to be surveyed is",
    "options": [
      "Triangulation",
      "Frame Work",
      "Traversing",
      "All of the above"
    ],
    "correctOptionIndex": 1,
    "explanation": "The system of survey lines forming the skeleton network of triangles covering the area to be surveyed is called the framework.",
    "rankerTip": "Framework: network of survey lines covering the ground.",
    "topic": "Triangles & Framework",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q20) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q020",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "In a well-conditioned triangle the angles are",
    "options": [
      "20° or 120°",
      "Greater than 30° and less than 120°",
      "Greater than 20° & less than 120°",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "A well-conditioned triangle has no angle less than 30° and no angle greater than 120° to minimize geometric plotting distortion.",
    "rankerTip": "Angles between 30° and 120°. Ideal triangle is equilateral (60°).",
    "topic": "Well-conditioned triangle",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q21) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q021",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "The line joining some fixed points termed as tie stations on main survey line is called",
    "options": [
      "Base line",
      "Check line",
      "Proof line",
      "Tie line"
    ],
    "correctOptionIndex": 3,
    "explanation": "A tie line joins auxiliary (tie) stations on main survey lines to measure offsets for locating interior ground details.",
    "rankerTip": "Tie line: locates interior details and avoids long offsets.",
    "topic": "Tie line",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q22) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q022",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "Invar tape is made up of an alloy of and steel.",
    "options": [
      "Aluminium",
      "Nickel",
      "Copper",
      "Brass"
    ],
    "correctOptionIndex": 1,
    "explanation": "Invar is a nickel-iron alloy (36% Nickel, 64% Steel) characterized by an exceptionally low coefficient of thermal expansion.",
    "rankerTip": "Invar = 36% Nickel + 64% Steel.",
    "topic": "Invar tape",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q21) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q023",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "The process of establishing an intermediate point in a line is called",
    "options": [
      "Chaining",
      "Offsetting",
      "Ranging",
      "Levelling"
    ],
    "correctOptionIndex": 2,
    "explanation": "Ranging is the operational process of aligning intermediate points along a straight survey line between two terminal stations.",
    "rankerTip": "Establishing points in a straight line = Ranging.",
    "topic": "Ranging",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q26) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q024",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "Error =",
    "options": [
      "Difference in values and sign of observed value",
      "Difference in values and sign of true value",
      "Observed value - true value",
      "True value - observed value"
    ],
    "correctOptionIndex": 2,
    "explanation": "By standard definition, Error = Observed Value - True Value (while Correction = True Value - Observed Value = -Error).",
    "rankerTip": "Error = Observed - True. Correction = True - Observed.",
    "topic": "Definitions of Error",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q28) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q025",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "Of the following, which is the primary stage of surveying ?",
    "options": [
      "Reconnaissance",
      "Preliminary survey",
      "Final survey",
      "Location survey"
    ],
    "correctOptionIndex": 0,
    "explanation": "Reconnaissance is the initial ground inspection of the survey area to observe boundaries, terrain features, and select station points.",
    "rankerTip": "First stage of any survey is Reconnaissance (Recce).",
    "topic": "Stages of Survey",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q31) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q026",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "Bad ranging is an example for",
    "options": [
      "Positive compensating error",
      "Negative compensating error",
      "Positive cumulative error",
      "Negative cumulative error"
    ],
    "correctOptionIndex": 2,
    "explanation": "Bad (imperfect) ranging causes the chain to deviate from a true straight line, consistently making the measured length greater than the true length (positive cumulative error).",
    "rankerTip": "Bad ranging is ALWAYS a positive cumulative error (+ve error, requires -ve correction).",
    "topic": "Errors in Chaining",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q32) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q027",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "Survey lines set out to locate interior details of a plot is called",
    "options": [
      "Main survey lines",
      "Tie lines",
      "Check lines",
      "Random lines"
    ],
    "correctOptionIndex": 1,
    "explanation": "Tie lines are secondary lines run across main survey lines to locate interior ground features and details.",
    "rankerTip": "Tie lines locate interior details; check lines check accuracy.",
    "topic": "Survey lines",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q33) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q028",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "A link of a metric chain is cm in length.",
    "options": [
      "0.66",
      "10",
      "20",
      "30.48"
    ],
    "correctOptionIndex": 2,
    "explanation": "Each link of a standard 20 m or 30 m metric chain measures 0.2 m (20 cm) between the centers of connecting rings.",
    "rankerTip": "Metric chain link = 20 cm = 0.2 m.",
    "topic": "Metric chain links",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q35) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q029",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "Which of the following is the prime instrument is used for ranging ?",
    "options": [
      "Ranging rod",
      "Chain",
      "Cross-staff",
      "Arrow"
    ],
    "correctOptionIndex": 0,
    "explanation": "Ranging rods (typically 2 to 3 m long, octagonal or circular poles painted in alternating red/black and white bands) are the prime tools for visual alignment.",
    "rankerTip": "Ranging rod is the primary ranging instrument.",
    "topic": "Ranging rods",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q37) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q030",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "A 20 m metric chain has links.",
    "options": [
      "10",
      "50",
      "100",
      "150"
    ],
    "correctOptionIndex": 2,
    "explanation": "A 20-meter metric chain consists of 100 links (each link = 20 cm = 0.2 m). A 30 m metric chain has 150 links.",
    "rankerTip": "20 m = 100 links; 30 m = 150 links.",
    "topic": "Metric chain",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q39) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q031",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "90° is set out using:",
    "options": [
      "cross staff",
      "peg",
      "plumb-bob",
      "line ranger"
    ],
    "correctOptionIndex": 0,
    "explanation": "An open cross-staff is used on survey lines to set out right angles (90°) for perpendicular offsets.",
    "rankerTip": "Open cross-staff: 90°; French cross-staff: 45° and 90°.",
    "topic": "Cross-staff",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q40) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q032",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "___________ angles can be set out using French cross staff.",
    "options": [
      "30°",
      "45°",
      "60°",
      "75°"
    ],
    "correctOptionIndex": 1,
    "explanation": "An octagonal French cross staff has sighting slits set at angles that allow setting out both 45° and 90° lines.",
    "rankerTip": "French cross-staff sets out 45° and 90°.",
    "topic": "French cross-staff",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q41) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q033",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "Gunter's chain is ___________ in length.",
    "options": [
      "20 m",
      "33 feet",
      "66 feet",
      "100 feet"
    ],
    "correctOptionIndex": 2,
    "explanation": "Gunter's chain (surveyor's chain) is 66 feet long and contains 100 links (1 link = 0.66 ft = 7.92 in).",
    "rankerTip": "66 feet (20.12 m).",
    "topic": "Gunter's chain",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q42) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q034",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "Survey related to large water bodies is called",
    "options": [
      "Hydrographic surveying",
      "Land surveying",
      "Air surveying",
      "Aerial surveying"
    ],
    "correctOptionIndex": 0,
    "explanation": "Hydrographic surveying encompasses surveys of water bodies (oceans, lakes, rivers, harbors) for navigation, bathymetry, and shorelines.",
    "rankerTip": "Survey of water bodies = Hydrographic surveying.",
    "topic": "Classifications",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q74) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q035",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "Offsets are said to be large when offset length exceeds _________ m.",
    "options": [
      "5",
      "10",
      "15",
      "20"
    ],
    "correctOptionIndex": 2,
    "explanation": "In chain surveying, perpendicular offsets exceeding 15 meters in length are categorized as long offsets (short offsets are ≤ 15 m).",
    "rankerTip": "Short offsets ≤ 15 m; Long offsets > 15 m.",
    "topic": "Offsets",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q87) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q036",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "A set of arrows provided with chain has _________ arrows.",
    "options": [
      "10",
      "15",
      "20",
      "30"
    ],
    "correctOptionIndex": 0,
    "explanation": "A standard set of survey arrows accompanying a metric chain consists of 10 arrows made of tempered 4 mm steel wire.",
    "rankerTip": "10 arrows accompany each chain.",
    "topic": "Arrows",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q88) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q037",
    "moduleId": "mod-2",
    "moduleNumber": 2,
    "question": "Which of the following instrument is used for ranging ?",
    "options": [
      "Peg",
      "Cross staff",
      "Optical square",
      "Line ranger"
    ],
    "correctOptionIndex": 3,
    "explanation": "A line ranger is an optical instrument consisting of two 90° reflecting prisms used for fixing intermediate ranging points without an assistant at the ends.",
    "rankerTip": "Line ranger allows a single surveyor to fix intermediate points.",
    "topic": "Line ranger",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q91) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q038",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "The horizontal angle which a line makes with the meridian is called",
    "options": [
      "Included angle",
      "Inclination",
      "Bearing",
      "Declination"
    ],
    "correctOptionIndex": 2,
    "explanation": "The horizontal angle measured between a survey line and a reference meridian (true, magnetic, or arbitrary) is defined as its bearing.",
    "rankerTip": "Angle with meridian = Bearing.",
    "topic": "Bearing",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q23) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q039",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "The graduated ring being attached to the magnetic needle remains stationary in",
    "options": [
      "Surveyor's compass",
      "Prismatic compass",
      "Trough compass",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "In a prismatic compass, the graduated aluminum ring is attached directly to the broad magnetic needle and remains stationary pointing magnetic North.",
    "rankerTip": "Prismatic: ring attached to needle, remains stationary. Surveyor: ring fixed to box.",
    "topic": "Prismatic compass",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q24) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q040",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "In a prismatic compass 180° is marked at",
    "options": [
      "North end",
      "South end",
      "East",
      "West"
    ],
    "correctOptionIndex": 0,
    "explanation": "In a prismatic compass, 0° is engraved at the South end and 180° is at the North end so that the bearing can be read directly through the prism at the eye vane.",
    "rankerTip": "0° at South, 180° at North, 90° at West, 270° at East.",
    "topic": "Prismatic compass graduations",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q25) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q041",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "The bearing of a line taken from the starting point of the line towards the direction in which survey progress is called",
    "options": [
      "True bearing",
      "Back bearing",
      "Whole circle bearing",
      "Fore bearing"
    ],
    "correctOptionIndex": 3,
    "explanation": "The bearing of a survey line taken in the forward direction of progress of the survey from the starting station is called the Fore Bearing (FB).",
    "rankerTip": "In direction of survey = Fore bearing.",
    "topic": "Fore bearing",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q26) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q042",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "In the whole circle bearing systems, S 85°- 45' W will be expressed as",
    "options": [
      "94°-15'",
      "85°-45'",
      "265°-45'",
      "180°-45'"
    ],
    "correctOptionIndex": 2,
    "explanation": "S 85°-45' W lies in the 3rd quadrant (SW). WCB = 180° + 85°45' = 265°45'.",
    "rankerTip": "SW quadrant: WCB = 180° + QB = 180° + 85°45' = 265°45'.",
    "topic": "WCB conversion",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q27) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q043",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "At poles the magnetic dip is equal to",
    "options": [
      "180°",
      "90°",
      "0",
      "45°"
    ],
    "correctOptionIndex": 1,
    "explanation": "Magnetic dip is the vertical inclination of the needle to the horizontal. It is 0° at the magnetic equator and 90° (vertical) at the magnetic poles.",
    "rankerTip": "Dip at Equator = 0°; Dip at Poles = 90°.",
    "topic": "Dip of needle",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q28) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q044",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "The whole circle bearing of a line observed by a prismatic compass is 110°, its bearing read on a surveyor's compass is",
    "options": [
      "N 75° E",
      "N 80° E",
      "S 110° E",
      "S 70° E"
    ],
    "correctOptionIndex": 3,
    "explanation": "A WCB of 110° lies in the 2nd quadrant (SE). Reduced Bearing (QB) = 180° - 110° = S 70° E.",
    "rankerTip": "110° in SE quadrant: 180° - 110° = S 70° E.",
    "topic": "Reduced bearing",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q29) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q045",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "The horizontal angle which magnetic meridian makes with the true meridian is called",
    "options": [
      "Magnetic Declination",
      "Dip",
      "Bearing",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Magnetic declination is the horizontal angle between the magnetic meridian and the true (geographical) meridian at a place.",
    "rankerTip": "Horizontal angle = Magnetic Declination. Vertical angle = Dip.",
    "topic": "Magnetic declination",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q30) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q046",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "The line joining places of equal declination",
    "options": [
      "Agonic lines",
      "Isogonic lines",
      "Tie line",
      "Base line"
    ],
    "correctOptionIndex": 1,
    "explanation": "Isogonic lines are imaginary lines connecting points on the earth's surface that have the same magnetic declination. (Agonic lines have zero declination).",
    "rankerTip": "Equal declination = Isogonic. Zero declination = Agonic.",
    "topic": "Isogonic lines",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q31) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q047",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "The fore bearing of a line is S 45° 10' E find the back bearing",
    "options": [
      "45°-10'",
      "N 45° 10' W",
      "225°-10'",
      "134°-50'"
    ],
    "correctOptionIndex": 1,
    "explanation": "To convert Fore Bearing to Back Bearing in Quadrantal system, retain numerical angle and reverse quadrant letters: S 45°10' E becomes N 45°10' W.",
    "rankerTip": "S becomes N, E becomes W: N 45° 10' W.",
    "topic": "Fore and Back bearing",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q32) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q048",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "The magnetic bearing of a line is 190° and the magnetic declination is 2° W. Find the true bearing of the line",
    "options": [
      "190°",
      "188°",
      "192°",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "True Bearing = Magnetic Bearing ± Declination = 190° - 2° (West declination is subtracted) = 188°.",
    "rankerTip": "TB = MB + East Declination / TB = MB - West Declination = 190° - 2° = 188°.",
    "topic": "True Bearing calculation",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q33) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q049",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "The permissible error in prismatic compass survey is",
    "options": [
      "1 in 20°",
      "1 in 120°",
      "1 in 340°",
      "1 in 220°"
    ],
    "correctOptionIndex": 2,
    "explanation": "In prismatic compass surveying, the permissible error of closure is generally specified as 1 in 340 (or an angular limit of 20').",
    "rankerTip": "1 in 340 (or 20 minutes) is standard permissible compass error.",
    "topic": "Permissible error in compass",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q34) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q050",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "Meridian joining earth's true north and south is called",
    "options": [
      "Assumed meridian",
      "Arbitrary meridian",
      "Magnetic meridian",
      "True meridian"
    ],
    "correctOptionIndex": 3,
    "explanation": "The true meridian is the imaginary great circle passing through the geographical north and south poles of the earth and the observer's position.",
    "rankerTip": "Through true geographic poles = True meridian.",
    "topic": "True meridian",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q27) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q051",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "Convert Q.B., S 45° 00' E into W.C.B.",
    "options": [
      "45° 00'",
      "135° 00'",
      "225° 00'",
      "335° 00'"
    ],
    "correctOptionIndex": 1,
    "explanation": "S 45° 00' E lies in the second quadrant (SE). WCB = 180° - 45°00' = 135° 00'.",
    "rankerTip": "SE quadrant: WCB = 180° - 45° = 135°.",
    "topic": "WCB conversion",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q43) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q052",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "W.C.B. of a survey line is determined using",
    "options": [
      "prismatic compass",
      "surveyor's compass",
      "trough compass",
      "circular compass"
    ],
    "correctOptionIndex": 0,
    "explanation": "A prismatic compass reads Whole Circle Bearings (0° to 360°) directly through its viewing prism.",
    "rankerTip": "Prismatic compass = Whole Circle Bearing.",
    "topic": "Prismatic compass",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q45) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q053",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "Theoretical sum of interior angles of a closed irregular hexagon is:",
    "options": [
      "180°",
      "360°",
      "600°",
      "720°"
    ],
    "correctOptionIndex": 3,
    "explanation": "The theoretical sum of interior angles of a closed polygon with n sides is (2n - 4) × 90°. For a hexagon (n = 6): (12 - 4) × 90° = 720°.",
    "rankerTip": "Sum of interior angles = (2n - 4) × 90° = 8 × 90° = 720°.",
    "topic": "Traverse angle check",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q47) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q054",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "Convert W.C.B. 320° 00' into Q.B.",
    "options": [
      "N 40° 00' W",
      "N 50° 00' W",
      "S 140° 00' W",
      "W 140° 00' S"
    ],
    "correctOptionIndex": 0,
    "explanation": "A WCB of 320° 00' lies in the 4th quadrant (NW). Reduced Bearing = 360° - 320°00' = N 40° 00' W.",
    "rankerTip": "4th quadrant (NW): 360° - 320° = N 40° W.",
    "topic": "Reduced bearing",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q49) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q055",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "0° is engraved at ___________ of the graduated ring of the prismatic compass.",
    "options": [
      "North",
      "East",
      "South",
      "West"
    ],
    "correctOptionIndex": 2,
    "explanation": "In a prismatic compass, 0° is graduated at the South end of the ring because reading is done through the prism at the diametrically opposite side.",
    "rankerTip": "0° at South, 180° at North.",
    "topic": "Prismatic compass graduations",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q50) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q056",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "W.C.B. is always reckoned from",
    "options": [
      "North",
      "East",
      "South",
      "West"
    ],
    "correctOptionIndex": 0,
    "explanation": "Whole Circle Bearing (WCB) is always measured clockwise starting from the magnetic or true North direction.",
    "rankerTip": "WCB is always measured clockwise from North (0° to 360°).",
    "topic": "WCB convention",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q52) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q057",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "Magnetic bearing of a line determined was 140° but later it was found that Declination at the place is 2° W. Find the true bearing of the line.",
    "options": [
      "40°",
      "50°",
      "138°",
      "142°"
    ],
    "correctOptionIndex": 2,
    "explanation": "True Bearing = Magnetic Bearing ± Declination. Here Magnetic Bearing = 140°, Declination = 2° W. True Bearing = 140° - 2° = 138°.",
    "rankerTip": "TB = 140° - 2° = 138°.",
    "topic": "True Bearing calculation",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q53) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q058",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "Change in declination at place happening in 24 hours is type of variation.",
    "options": [
      "Secular",
      "Diurnal",
      "Annual",
      "Irregular"
    ],
    "correctOptionIndex": 1,
    "explanation": "Diurnal variation is the daily cyclic oscillation of the magnetic needle caused by the rotation of the earth and solar radiation over 24 hours.",
    "rankerTip": "Daily variation in 24 hours = Diurnal variation.",
    "topic": "Declination variations",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q56) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q059",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "F.B. of RS is S 45° 15' E. F.B. of PR is S 30° 00' E. Included angle PRS measured in clockwise direction is:",
    "options": [
      "104° 45'",
      "134° 45'",
      "164° 45'",
      "195° 15'"
    ],
    "correctOptionIndex": 2,
    "explanation": "Included angle at station R: Computed from the back bearing of PR and forward bearing of RS; measured clockwise as 164° 45'.",
    "rankerTip": "Clockwise angle PRS = 164° 45'.",
    "topic": "Included angles",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q60) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q060",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "Magnetic equator is an example for",
    "options": [
      "Isogonic line",
      "Agonic line",
      "Isoclinic line",
      "Aclinic line"
    ],
    "correctOptionIndex": 3,
    "explanation": "The magnetic equator is an aclinic line where the magnetic dip is zero (the magnetic needle remains horizontal).",
    "rankerTip": "Zero dip = Aclinic line (Magnetic equator). Equal dip = Isoclinic line.",
    "topic": "Magnetic lines",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q76) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q061",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "F.B. of CD is 30°. FB of DE is 260°. Find ∠CDE measured in clockwise direction:",
    "options": [
      "50°",
      "80°",
      "230°",
      "290°"
    ],
    "correctOptionIndex": 0,
    "explanation": "Deflection angle / included angle between CD (FB = 30°) and DE (FB = 260°): Clockwise angle ∠CDE = 50°.",
    "rankerTip": "Clockwise angle = 50°.",
    "topic": "Deflection angle",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q77) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q062",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "Bearing measured in the direction of the progress of surveying is called",
    "options": [
      "Fore bearing",
      "Back bearing",
      "Intermediate bearing",
      "Reverse bearing"
    ],
    "correctOptionIndex": 0,
    "explanation": "The bearing of a survey line measured in the direction of the forward progress of the survey is the Fore Bearing (FB).",
    "rankerTip": "In direction of progress = Fore bearing.",
    "topic": "Fore bearing",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q79) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q063",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "F.B. of a line PQ is 140°. What is the F.B. of the line QP ?",
    "options": [
      "40°",
      "180°",
      "230°",
      "320°"
    ],
    "correctOptionIndex": 3,
    "explanation": "If Fore Bearing of PQ = 140°, the Fore Bearing of QP is its Back Bearing: BB = 140° + 180° = 320°.",
    "rankerTip": "FB of QP = BB of PQ = 140° + 180° = 320°.",
    "topic": "Back bearing",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q84) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q064",
    "moduleId": "mod-3",
    "moduleNumber": 3,
    "question": "Vertical angle with which magnetic needle makes with the horizontal is called",
    "options": [
      "Declination",
      "Transiting",
      "Swinging",
      "Dip"
    ],
    "correctOptionIndex": 3,
    "explanation": "Magnetic dip is the vertical inclination that a freely suspended magnetic needle makes with the horizontal plane.",
    "rankerTip": "Vertical angle = Dip. Horizontal angle = Declination.",
    "topic": "Dip",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q95) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q065",
    "moduleId": "mod-4",
    "moduleNumber": 4,
    "question": "Which method of plane table survey is also used for plotting the distant and inaccessible objects, broken boundaries, river etc?",
    "options": [
      "Intersection method",
      "Radiation method",
      "Traversing",
      "Resection"
    ],
    "correctOptionIndex": 0,
    "explanation": "The intersection method in plane tabling is ideal for mapping distant, inaccessible points, river boundaries, and broken ground without measuring distances on ground.",
    "rankerTip": "Inaccessible objects, rivers, mountainous terrain = Intersection method.",
    "topic": "Intersection",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q35) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q066",
    "moduleId": "mod-4",
    "moduleNumber": 4,
    "question": "The process of putting the positions occupied by the board at various survey stations are kept parallel is known as",
    "options": [
      "Centering the plane table",
      "Levelling the plane table",
      "Orienting the plane table",
      "Traversing the plane table"
    ],
    "correctOptionIndex": 2,
    "explanation": "Orientation is the process of keeping the plane table at each successive station parallel to the position it occupied at the first station.",
    "rankerTip": "Keeping table parallel at successive stations = Orientation.",
    "topic": "Orientation",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q36) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q067",
    "moduleId": "mod-4",
    "moduleNumber": 4,
    "question": "What is the name of method used in plane table survey similar to that of compass survey?",
    "options": [
      "Radiation",
      "Intersection",
      "Resection",
      "Traversing"
    ],
    "correctOptionIndex": 3,
    "explanation": "Plane table traversing is similar to compass traversing, running a connected series of lines from station to station.",
    "rankerTip": "Connected series of lines from station to station = Traversing.",
    "topic": "Traversing",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q37) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q068",
    "moduleId": "mod-4",
    "moduleNumber": 4,
    "question": "Which type of survey cannot be done in dense wooded areas?",
    "options": [
      "Chain survey",
      "Compass survey",
      "Plane table survey",
      "Theodolite survey"
    ],
    "correctOptionIndex": 2,
    "explanation": "Plane table surveying requires unobstructed sight lines and daylight; it cannot be effectively conducted in dense wooded forests or wet rainy climates.",
    "rankerTip": "Plane tabling cannot be done in dense woods or rainy weather.",
    "topic": "Suitability",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q38) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q069",
    "moduleId": "mod-4",
    "moduleNumber": 4,
    "question": "The three points problem may be solved by",
    "options": [
      "Tracing paper method",
      "Bessel's method",
      "Trial and Error method",
      "All of the above"
    ],
    "correctOptionIndex": 3,
    "explanation": "The three-point problem in plane tabling can be solved by mechanical (tracing paper), graphical (Bessel's / cutting arcs), and trial & error (Lehmann's) methods.",
    "rankerTip": "All three: Tracing paper, Bessel's, and Lehmann's trial & error.",
    "topic": "Three point problem",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q39) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q070",
    "moduleId": "mod-4",
    "moduleNumber": 4,
    "question": "Instrument used for sighting objects and drawing rays in plane tabling is",
    "options": [
      "Alidade",
      "Trough compass",
      "Spirit level",
      "Plumb-bob"
    ],
    "correctOptionIndex": 0,
    "explanation": "An alidade (plain or telescopic) is the primary sighting and ray-drawing instrument used in plane table surveying.",
    "rankerTip": "Alidade sights objects and draws rays along fiducial edge.",
    "topic": "Alidade",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q24) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q071",
    "moduleId": "mod-4",
    "moduleNumber": 4,
    "question": "___________ surveying can be performed without field book.",
    "options": [
      "Plane table",
      "Chain",
      "Compass",
      "Theodolite"
    ],
    "correctOptionIndex": 0,
    "explanation": "In plane table surveying, observations and plotting are performed concurrently in the field on the drawing board, eliminating the need for a field notebook.",
    "rankerTip": "Plane table surveying needs no field book because plotting is done on site.",
    "topic": "Field work",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q57) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q072",
    "moduleId": "mod-4",
    "moduleNumber": 4,
    "question": "Which of the following plane table method involves in finding an instrument station ?",
    "options": [
      "Resection",
      "Radiation",
      "Intersection",
      "Traversing"
    ],
    "correctOptionIndex": 0,
    "explanation": "Resection is the plane table method where the position of an unknown occupied instrument station is located on the drawing board by sighting known visible stations.",
    "rankerTip": "Locating instrument station = Resection.",
    "topic": "Resection",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q62) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q073",
    "moduleId": "mod-4",
    "moduleNumber": 4,
    "question": "Bessel's solution to three point problem is related to",
    "options": [
      "Trial and error method",
      "Tracing paper method",
      "Mechanical method",
      "Graphical method"
    ],
    "correctOptionIndex": 3,
    "explanation": "Bessel's method of inscribed circles is an exact graphical solution to the three-point problem in plane tabling.",
    "rankerTip": "Bessel's method is a Graphical method.",
    "topic": "Bessel's method",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q80) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q074",
    "moduleId": "mod-4",
    "moduleNumber": 4,
    "question": "Principle of plane table surveying is",
    "options": [
      "Triangulation",
      "Offsetting",
      "Orientation",
      "Levelling"
    ],
    "correctOptionIndex": 2,
    "explanation": "The fundamental principle of plane table surveying is orientation by parallelism, keeping the table board parallel to its orientation at preceding stations.",
    "rankerTip": "Parallelism / Orientation.",
    "topic": "Principles",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q81) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q075",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What is the term that is normal to plumb line at all points?",
    "options": [
      "Level surface",
      "Datum surface",
      "Horizontal surface",
      "Vertical surface"
    ],
    "correctOptionIndex": 0,
    "explanation": "A level surface is a curved surface that is concentric with the mean spheroidal shape of the earth and perpendicular (normal) to the gravity plumb line at every point.",
    "rankerTip": "Normal to plumb line at all points = Level surface.",
    "topic": "Level surface",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q40) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q076",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What is the benchmarks established between the G.T.S. benchmarks by the state PWD is known as",
    "options": [
      "Arbitrary benchmark",
      "Permanent benchmark",
      "Temporary benchmark",
      "G.T.S. benchmark"
    ],
    "correctOptionIndex": 1,
    "explanation": "Permanent benchmarks are fixed, durable reference points established by government departments (PWD, Railways) between primary G.T.S. benchmarks.",
    "rankerTip": "Established by State PWD = Permanent benchmark.",
    "topic": "Benchmarks",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q41) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q077",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which level is used for precise levelling work?",
    "options": [
      "Auto level",
      "Dumpy level",
      "Wye level",
      "Tilting level"
    ],
    "correctOptionIndex": 3,
    "explanation": "A tilting level allows the telescope with its bubble tube to be tilted slightly in the vertical plane using a micrometer screw, making it suitable for precise levelling.",
    "rankerTip": "Tilting level with micrometer screw is designed for precise levelling.",
    "topic": "Tilting level",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q42) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q078",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "In which staff consist of three parts and one slides into another?",
    "options": [
      "Telescopic staff",
      "Invar staff",
      "Target staff",
      "Folding staff"
    ],
    "correctOptionIndex": 0,
    "explanation": "A Sopwith telescopic staff consists of three sliding telescopic lengths made of seasoned wood or aluminum, extending up to 4 or 5 meters.",
    "rankerTip": "Three parts sliding into one another = Sopwith telescopic staff.",
    "topic": "Levelling staff",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q43) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q079",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What is the smallest graduated division in levelling staff?",
    "options": [
      "0.5 m",
      ".05 m",
      ".005 m",
      "0.0005m"
    ],
    "correctOptionIndex": 2,
    "explanation": "The smallest graduation mark on a standard metric levelling staff is 5 mm (0.005 m).",
    "rankerTip": "Least count of metric levelling staff = 5 mm = 0.005 m.",
    "topic": "Staff least count",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q44) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q080",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which method of contour is suitable for small and undulating area?",
    "options": [
      "By levelling method",
      "By cross section",
      "By tacheometric method",
      "By square method"
    ],
    "correctOptionIndex": 3,
    "explanation": "The square (grid) method is ideal for contouring small, undulating, and moderately flat building sites.",
    "rankerTip": "Small and undulating building site = Square (grid) method.",
    "topic": "Contouring methods",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q45) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q081",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which method is not included in the interpolation of contours?",
    "options": [
      "Estimation",
      "Arithmetical calculation",
      "Cross section",
      "Graphical"
    ],
    "correctOptionIndex": 2,
    "explanation": "Cross-sectioning is a field method used to collect elevation data, not an interpolation technique. Contour interpolation is performed by estimation, arithmetic calculation, or graphical methods.",
    "rankerTip": "Interpolation methods: Estimation, Arithmetic calculation, and Graphical.",
    "topic": "Interpolation",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q46) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q082",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Combined correction for curvature and refraction is",
    "options": [
      "0.6723 D²",
      "0.0673 D²",
      "0.0112 D²",
      "0.112 D²"
    ],
    "correctOptionIndex": 1,
    "explanation": "Combined correction for earth curvature and atmospheric refraction is C_comb = C_c - C_r = 0.0785 D² - 0.0112 D² = 0.0673 D² meters (where D is in km).",
    "rankerTip": "C_comb = 0.0673 D² (subtractive).",
    "topic": "Curvature and Refraction",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q47) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q083",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What is the name of the staff 3m long and the band fitted is graduated in mm used for percise levelling?",
    "options": [
      "Invar Staff",
      "Telescopic staff",
      "Target Staff",
      "Folding staff"
    ],
    "correctOptionIndex": 0,
    "explanation": "An invar levelling staff has an invar alloy ribbon fitted with millimeter graduations under spring tension, ensuring minimal thermal expansion for precise levelling.",
    "rankerTip": "3 m long with invar band graduated in mm = Invar Staff.",
    "topic": "Invar staff",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q48) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q084",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What R.F. is select for drawing town planning schemes, reservoirs etc?",
    "options": [
      "1/1000",
      "1/5000",
      "1/100",
      "1/100000"
    ],
    "correctOptionIndex": 1,
    "explanation": "For reservoir surveys, town planning, and catchment mapping, small to intermediate representative fractions such as 1/5000 (or 1/2500) are standard.",
    "rankerTip": "Town planning & reservoirs: 1/5000.",
    "topic": "Contour scales",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q49) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q085",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Contour lines of different elevations can unite to form one line in ______",
    "options": [
      "Vertical cliff",
      "Overhanging cliff",
      "Hill",
      "Valley"
    ],
    "correctOptionIndex": 0,
    "explanation": "Contour lines of different elevations coalesce into a single line along a vertical cliff (and cross each other only in an overhanging cliff or cave).",
    "rankerTip": "Unite into one line = Vertical cliff. Cross each other = Overhanging cliff.",
    "topic": "Vertical cliff",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q50) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q086",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "The method of indirect levelling in which the relative elevations of different points are obtained by measuring the vertical angles and horizontal distance is known as",
    "options": [
      "Barometric levelling",
      "Hypsometry",
      "Trigonometrical levelling",
      "Check Levelling"
    ],
    "correctOptionIndex": 2,
    "explanation": "Trigonometrical levelling is an indirect method where the relative difference in elevation is computed from measured vertical angles and horizontal distances.",
    "rankerTip": "Vertical angles + horizontal distances = Trigonometrical levelling.",
    "topic": "Trigonometrical levelling",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q51) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q087",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "What benchmark is established for short duration such as at the end of a day's work?",
    "options": [
      "Arbitrary benchmark",
      "Temporary benchmark",
      "Permanent benchmark",
      "G.T.S. benchmark"
    ],
    "correctOptionIndex": 1,
    "explanation": "A temporary benchmark (TBM) is established at the close of a day's work on a permanent object (culvert, rock) so that levelling can resume the next day.",
    "rankerTip": "End of day's work = Temporary benchmark (TBM).",
    "topic": "Temporary benchmark",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q52) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q088",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which instrument is used to establishing grade contour?",
    "options": [
      "Prismatic compass",
      "Telescopic alidade",
      "Abney level",
      "Pentagraph"
    ],
    "correctOptionIndex": 2,
    "explanation": "An Abney level is a hand-held clinometer/level used for measuring ground slope and setting out grade contours in road reconnaissance.",
    "rankerTip": "Grade contours = Abney level.",
    "topic": "Abney level",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q53) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q089",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which is prismoidal formula for volume?",
    "options": [
      "L/6 (A1 + 4A2 + A3)",
      "L/3 (A1 + 4A2 + A3)",
      "L/2 (A1 + 4A2 + A3)",
      "L (A1 + 4A2 + A3)"
    ],
    "correctOptionIndex": 0,
    "explanation": "The Prismoidal formula for volume between three equidistant parallel cross-sections of spacing L is V = (L / 6) × [A1 + 4A2 + A3].",
    "rankerTip": "V = (L / 6) × [A1 + 4Am + A2].",
    "topic": "Prismoidal formula",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q54) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q090",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Boundary of a catchment area will be",
    "options": [
      "Longitudinal line",
      "Datum",
      "Ridge line",
      "Valley line"
    ],
    "correctOptionIndex": 2,
    "explanation": "The natural boundary of a catchment/watershed basin separating drainage basins is the ridge line (watershed divide).",
    "rankerTip": "Catchment boundary = Ridge line / watershed divide.",
    "topic": "Catchment boundary",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q23) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q091",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Which of the following level's telescope can be rotated by surveyor in vertical plane in a smaller amount ?",
    "options": [
      "Dumpy level",
      "Wye level",
      "Auto level",
      "Tilting level"
    ],
    "correctOptionIndex": 3,
    "explanation": "A tilting level possesses a micrometer tilting screw that tilts the telescope slightly in the vertical plane to level the line of sight precisely.",
    "rankerTip": "Tilting level telescope rotates slightly in vertical plane.",
    "topic": "Tilting level",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q25) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q092",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Station where which B.S. and F.S. are taken is called",
    "options": [
      "Intersection point",
      "Forward point",
      "Tangent point",
      "Change point --"
    ],
    "correctOptionIndex": 3,
    "explanation": "A change point (turning point) is a temporary staff station on which both a Fore Sight (FS) and Back Sight (BS) are taken to transfer the line of collimation.",
    "rankerTip": "Both BS and FS taken = Change point (CP).",
    "topic": "Change point",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q44) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q093",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Contour lines merge in the case of",
    "options": [
      "Overhanging cliff",
      "Vertical cliff",
      "Hill",
      "Pond"
    ],
    "correctOptionIndex": 1,
    "explanation": "Contour lines merge together into a single line at a vertical cliff, where points of different elevations share the exact same horizontal coordinate.",
    "rankerTip": "Merge into one line = Vertical cliff.",
    "topic": "Vertical cliff",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q46) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q094",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Following observations were done in reciprocal leveling. Find level difference between A and B: Dumpy level at A: staff reading at A = 1.000 m, staff reading at B = 2.500 m. Dumpy level at B: staff reading at A = 1.300 m, staff reading at B = 2.700 m.",
    "options": [
      "1.400 m",
      "1.450 m",
      "1.500 m",
      "2.900 m"
    ],
    "correctOptionIndex": 1,
    "explanation": "True level difference by reciprocal levelling: h = [(Staff_B1 - Staff_A1) + (Staff_B2 - Staff_A2)] / 2 = [(2.500 - 1.000) + (2.700 - 1.300)] / 2 = [1.500 + 1.400] / 2 = 1.450 m.",
    "rankerTip": "h = [(2.5 - 1.0) + (2.7 - 1.3)] / 2 = (1.5 + 1.4) / 2 = 1.450 m.",
    "topic": "Reciprocal levelling",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q48) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q095",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Gradient existing between two points is found to be 1 in 1000. Level difference between same points is 5.00 m. Find distance between two points:",
    "options": [
      "50 m",
      "0.500 km",
      "1000 m",
      "5 km"
    ],
    "correctOptionIndex": 3,
    "explanation": "Gradient = Fall / Distance => 1/1000 = 5.00 m / Distance => Distance = 5.00 × 1000 = 5000 m = 5 km.",
    "rankerTip": "Distance = 5 m × 1000 = 5000 m = 5 km.",
    "topic": "Gradient",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q61) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q096",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "In levelling operation, the point of known elevation is termed as",
    "options": [
      "Bench mark",
      "Contour",
      "Plane",
      "Backsight"
    ],
    "correctOptionIndex": 0,
    "explanation": "A Bench Mark (BM) is a permanent, well-defined point of known elevation above a chosen reference datum.",
    "rankerTip": "Point of known elevation = Bench mark.",
    "topic": "Bench mark",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q64) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q097",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Last level reading taken before shifting a level is entered as",
    "options": [
      "FS",
      "BS",
      "IS",
      "LS"
    ],
    "correctOptionIndex": 0,
    "explanation": "Fore Sight (FS) is the last staff reading taken in a levelling setup before moving or shifting the instrument.",
    "rankerTip": "Last reading before shifting = Fore Sight (FS).",
    "topic": "Fore sight",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q66) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q098",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "RL of BM is 100.000. Without taking reading on BM another two staff readings, 1.000 and 3.000 were observed. What is the level difference between these two points ?",
    "options": [
      "Can't determine",
      "1.000",
      "2.000",
      "4.000"
    ],
    "correctOptionIndex": 2,
    "explanation": "Level difference = Difference between staff readings taken from the same instrument setup = 3.000 m - 1.000 m = 2.000 m.",
    "rankerTip": "Level difference = 3.000 - 1.000 = 2.000 m (independent of BM RL).",
    "topic": "Staff reading difference",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q68) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q099",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Imaginary line formed by joining points of equal elevations on earth's surface is called",
    "options": [
      "contour",
      "section",
      "bench mark",
      "single plane"
    ],
    "correctOptionIndex": 0,
    "explanation": "A contour line is an imaginary line on the ground connecting points having the same elevation above a datum surface.",
    "rankerTip": "Line joining points of equal elevation = Contour.",
    "topic": "Contour line",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q69) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q100",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Closely spaced contours indicate",
    "options": [
      "flat",
      "steep slope",
      "gentle slope",
      "mild slope"
    ],
    "correctOptionIndex": 1,
    "explanation": "When contour lines are closely spaced together, they indicate a steep slope; widely spaced contours indicate a gentle or flat slope.",
    "rankerTip": "Close contours = Steep slope. Wide contours = Gentle slope.",
    "topic": "Contour spacing",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q75) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q101",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "___________ is the equation for finding correction value for refraction.",
    "options": [
      "0.0005 D²",
      "0.0112 D²",
      "0.0673 D²",
      "0.0785 D²"
    ],
    "correctOptionIndex": 1,
    "explanation": "Atmospheric refraction bends the line of sight downward toward the earth, giving a correction of C_r = +0.0112 D² meters (where D is distance in km).",
    "rankerTip": "Refraction correction C_r = 0.0112 D² (additive).",
    "topic": "Refraction correction",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q82) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q102",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Slope along the longitudinal direction is often termed as",
    "options": [
      "Gradient",
      "Transverse slope",
      "Section",
      "Camber"
    ],
    "correctOptionIndex": 0,
    "explanation": "The rate of rise or fall of the ground surface along the longitudinal direction of a road, canal, or railway is termed the gradient.",
    "rankerTip": "Longitudinal slope = Gradient. Transverse slope = Camber/cross slope.",
    "topic": "Gradient",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q83) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q103",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Level reading taken on a BM is 2.000. RL of BM is 10.000. Then a level reading of 3.500 was taken on top of a stake. Find the RL of the top of the stake:",
    "options": [
      "98.500",
      "12.000",
      "8.500",
      "8.000"
    ],
    "correctOptionIndex": 2,
    "explanation": "Height of Instrument (HI) = RL of BM + Staff Reading on BM = 10.000 + 2.000 = 12.000 m. RL of Stake = HI - Reading on Stake = 12.000 - 3.500 = 8.500 m.",
    "rankerTip": "HI = 10 + 2 = 12 m. RL = 12 - 3.5 = 8.500 m.",
    "topic": "HI method",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q85) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q104",
    "moduleId": "mod-5",
    "moduleNumber": 5,
    "question": "Equal gradient lines along a slope are called",
    "options": [
      "Grade contours",
      "Contour gradients",
      "Vertical equivalents",
      "Horizontal equivalents"
    ],
    "correctOptionIndex": 0,
    "explanation": "A grade contour is a line on the ground along which a constant uniform slope (gradient) is maintained.",
    "rankerTip": "Equal gradient line = Grade contour.",
    "topic": "Grade contours",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q86) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q105",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "The latitude and departure with reference to preceding point are known as _____",
    "options": [
      "Independent co-ordinate",
      "Consecutive co-ordinate",
      "Close co-ordinate",
      "Origin co-ordinate"
    ],
    "correctOptionIndex": 1,
    "explanation": "Consecutive coordinates (latitude and departure) of a station are computed with reference to the immediately preceding traverse station.",
    "rankerTip": "With reference to preceding point = Consecutive coordinates.",
    "topic": "Coordinates",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q55) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q106",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "What is the type of angle useful for alignment of highways, railways, canals etc?",
    "options": [
      "Deflection angle",
      "Direct angle",
      "Azimuth angle",
      "Chain angle"
    ],
    "correctOptionIndex": 0,
    "explanation": "Deflection angles (angle between prolongation of preceding line and forward line) are extensively used for route surveying of highways, railways, and canals.",
    "rankerTip": "Highways, railways, route surveys = Deflection angles.",
    "topic": "Deflection angle",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q56) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q107",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "What is the test carried in theodolite to make the horizontal axis perpendicular to the vertical axis?",
    "options": [
      "Plate level",
      "Collimation test",
      "Spire test",
      "Cross-hair ring test"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Spire test (horizontal axis test) is performed to ensure that the horizontal trunnion axis is perpendicular to the vertical axis of the theodolite.",
    "rankerTip": "Horizontal axis ⊥ Vertical axis = Spire test.",
    "topic": "Spire test",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q57) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q108",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "When the angular measurements are more precise than the linear measurements, balancing the traverse is done by",
    "options": [
      "Bowditch's method",
      "Transit rule method",
      "Graphical methods",
      "Axis method"
    ],
    "correctOptionIndex": 1,
    "explanation": "The Transit rule is applied to adjust traverse misclosure when angular measurements are more precise than linear measurements.",
    "rankerTip": "Bowditch rule: angles and lengths equally precise. Transit rule: angles more precise than lengths.",
    "topic": "Traverse balancing",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q58) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q109",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "The chord between two successive regular stations on a curve is known as _____",
    "options": [
      "Long chord",
      "Mid chord",
      "Normal chord",
      "Intersection chord"
    ],
    "correctOptionIndex": 2,
    "explanation": "In curve layout, a normal chord is the full standard chord between two consecutive full chainage peg stations on a circular curve.",
    "rankerTip": "Between regular full chainage stations = Normal chord.",
    "topic": "Normal chord",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q59) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q110",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "What is the multiplying constant, if adopting anallatic lens in the telescope of a tacheometer?",
    "options": [
      "10",
      "20",
      "30",
      "100"
    ],
    "correctOptionIndex": 3,
    "explanation": "An anallatic lens placed between the objective and eyepiece eliminates the additive constant (f + d = 0), leaving the multiplying constant k = f/i = 100.",
    "rankerTip": "Anallatic lens: multiplying constant k = 100; additive constant c = 0.",
    "topic": "Anallatic lens",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q60) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q111",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "What is the distance between point of intersection to point of tangency?",
    "options": [
      "Length of the curve",
      "External distance",
      "Tangent distance",
      "Long chord"
    ],
    "correctOptionIndex": 2,
    "explanation": "Tangent distance is the straight distance measured from the Point of Intersection (V) to either Point of Tangency (T1 or T2): T = R tan(∆/2).",
    "rankerTip": "Intersection to tangency point = Tangent distance T = R tan(∆/2).",
    "topic": "Tangent distance",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q61) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q112",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Which curve is generally introduced on highway between a straight and circular curve to provide ease and gradual change of direction?",
    "options": [
      "Simple",
      "Compound",
      "Reverse",
      "Transition"
    ],
    "correctOptionIndex": 3,
    "explanation": "A transition curve (clothoid / spiral) provides a gradual transition from zero curvature on a tangent to the finite radius of a circular curve, preventing sudden centrifugal jerks.",
    "rankerTip": "Between tangent and circular curve = Transition curve.",
    "topic": "Transition curve",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q62) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q113",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Which method is used for short traverse in theodolite survey?",
    "options": [
      "Fast needle method",
      "Direct method",
      "Loose needle method",
      "Included angle method"
    ],
    "correctOptionIndex": 0,
    "explanation": "The fast needle method is used for running short traverse lines using the theodolite's compass without individual vernier angle computations.",
    "rankerTip": "Short traverse = Fast needle method.",
    "topic": "Fast needle method",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q63) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q114",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "What is the multiplying constant in tacheometric survey?",
    "options": [
      "(f/i)",
      "(f+d)",
      "(f+i)",
      "(f/d)"
    ],
    "correctOptionIndex": 0,
    "explanation": "In tacheometry, the multiplying constant is given by the focal length divided by stadia hair interval: k = f / i (normally designed as 100).",
    "rankerTip": "Multiplying constant = f/i. Additive constant = f+d.",
    "topic": "Multiplying constant",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q64) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q115",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "The fine adjustment in theodolite is done by",
    "options": [
      "focusing screw",
      "tangent screw",
      "clamb screw",
      "foot screw"
    ],
    "correctOptionIndex": 1,
    "explanation": "In a theodolite, after clamping the motion screw, fine adjustment and precision sighting of the crosshairs is made using the tangent (slow-motion) screw.",
    "rankerTip": "Fine motion / precision sighting = Tangent screw.",
    "topic": "Tangent screw",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q81) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q116",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "The face left position is also called",
    "options": [
      "Telescope inverted",
      "Telescope normal",
      "Telescope reversed",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Telescope normal (or face left) describes the position where the vertical circle is situated to the observer's left when looking through the eyepiece.",
    "rankerTip": "Face left = Telescope normal. Face right = Telescope reversed / inverted.",
    "topic": "Telescope normal",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q82) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q117",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Which of the following is not a traversing method?",
    "options": [
      "Plane table traversing",
      "Theodolite traversing",
      "Open traversing",
      "Chain traversing"
    ],
    "correctOptionIndex": 2,
    "explanation": "Open traversing is a geometric classification of traverse paths (unclosed), whereas chain, compass, theodolite, and plane table traversing are instrument methods.",
    "rankerTip": "Open/closed are types of traverse, not instrument methods.",
    "topic": "Traversing methods",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q83) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q118",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "The telescope is rotated in horizontal plane relative to which axis?",
    "options": [
      "Vertical axis",
      "Horizontal axis",
      "Trunnion axis",
      "Plate bubble tube axis"
    ],
    "correctOptionIndex": 2,
    "explanation": "The telescope of a theodolite rotates in a horizontal plane about its vertical axis. Note: in official PSC provisional key Trunnion axis is given as (C).",
    "rankerTip": "Trunnion axis (horizontal axis) is official PSC key option C.",
    "topic": "Theodolite axes",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q84) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q119",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Imaginary line joining centre of the eyepiece and the objective of the telescope is",
    "options": [
      "Line of collimation",
      "Axis of bubble tube",
      "Axis of altitude bubble",
      "Axis of telescope"
    ],
    "correctOptionIndex": 3,
    "explanation": "The imaginary line connecting the optical center of the objective lens and the center of the eyepiece is the optical axis of the telescope.",
    "rankerTip": "Objective center to eyepiece center = Axis of telescope. Crosshairs to objective center = Line of collimation.",
    "topic": "Axis of telescope",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q30) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q120",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Horizontal angle as well as vertical angle can be measured using a",
    "options": [
      "Theodolite",
      "Dumpy level",
      "Compass",
      "Plane table"
    ],
    "correctOptionIndex": 0,
    "explanation": "A transit theodolite is designed to measure both horizontal and vertical angles with high precision.",
    "rankerTip": "Horizontal and vertical angles = Theodolite.",
    "topic": "Theodolite",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q34) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q121",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Point where the circular curve begins is called as",
    "options": [
      "P.T.",
      "P.C.",
      "P.I.",
      "C.P."
    ],
    "correctOptionIndex": 1,
    "explanation": "The Point of Curve (P.C.) is the tangent-curve junction where the circular curve begins. Point of Tangency (P.T.) is where it ends.",
    "rankerTip": "Begins = P.C. (Point of Curve). Ends = P.T. (Point of Tangency).",
    "topic": "Point of Curve",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q36) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q122",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Projection of a survey line onto N-S line is termed as",
    "options": [
      "Closing error",
      "Latitude",
      "Departure",
      "Random line"
    ],
    "correctOptionIndex": 1,
    "explanation": "The projection of a traverse survey line onto the North-South reference meridian is called its Latitude (L = l cos θ).",
    "rankerTip": "Projection on N-S = Latitude. Projection on E-W = Departure.",
    "topic": "Latitude",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q54) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q123",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Which of the following is known as the ideal transition curve ?",
    "options": [
      "Froude's curve",
      "Bernoulli's lemniscate",
      "Cubic parabola",
      "Clothoid"
    ],
    "correctOptionIndex": 3,
    "explanation": "An ideal transition curve has a rate of change of radial acceleration that is uniform; the clothoid (Euler spiral) meets this condition with curvature increasing linearly with length.",
    "rankerTip": "Ideal transition curve = Clothoid (Euler spiral).",
    "topic": "Transition curves",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q55) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q124",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Process of revolving telescope of theodolite in the horizontal plane with respect to vertical axis of the theodolite is called",
    "options": [
      "Transiting",
      "Reversing",
      "Swinging",
      "Plunging"
    ],
    "correctOptionIndex": 2,
    "explanation": "Swinging the theodolite is the operation of rotating the telescope about the vertical axis in a horizontal plane.",
    "rankerTip": "Horizontal plane about vertical axis = Swinging. Vertical plane about horizontal axis = Transiting.",
    "topic": "Swinging the telescope",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q58) • Surveyor Gr. II (KWA)",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q125",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Angle subtended by radius at the centre of the curve is called as",
    "options": [
      "Deflection angle",
      "Intersection angle",
      "Direct angle",
      "Central angle"
    ],
    "correctOptionIndex": 3,
    "explanation": "The angle subtended at the center of a circular curve by the arc connecting two tangent points is called the central angle (equal to the total deflection angle ∆).",
    "rankerTip": "Angle at the center = Central angle.",
    "topic": "Central angle",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q59) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q126",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Angle between the preceding line and succeeding line is called",
    "options": [
      "Bearing",
      "Direct angle",
      "Deflection angle",
      "Angle to the right"
    ],
    "correctOptionIndex": 2,
    "explanation": "The deflection angle is the angle between the prolongation of the preceding survey line and the forward succeeding survey line.",
    "rankerTip": "Angle between prolongation of line and next line = Deflection angle.",
    "topic": "Deflection angle",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q63) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q127",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "The multiplying constant of a tacheometer fitted with an anallactic lens is",
    "options": [
      "0",
      "1",
      "100",
      "1000"
    ],
    "correctOptionIndex": 2,
    "explanation": "The multiplying constant of a tacheometer equipped with an anallatic lens is k = f/i = 100.",
    "rankerTip": "Multiplying constant is 100.",
    "topic": "Multiplying constant",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q70) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q128",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Which of the following is called as Easement curve ?",
    "options": [
      "Simple circular curve",
      "Compound curve",
      "Reverse curve",
      "Transition curve"
    ],
    "correctOptionIndex": 3,
    "explanation": "An easement curve is another engineering term for a transition curve, easing the change in curvature and super-elevation between tangents and circular arcs.",
    "rankerTip": "Easement curve = Transition curve.",
    "topic": "Easement curve",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q71) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q129",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Two straights connected using a single arc of constant radius is known as",
    "options": [
      "Simple circular curve",
      "Compound curve",
      "Reverse curve",
      "Transition curve"
    ],
    "correctOptionIndex": 0,
    "explanation": "A simple circular curve consists of a single arc of constant radius connecting two intersecting straight tangents.",
    "rankerTip": "Single arc of constant radius = Simple circular curve.",
    "topic": "Simple circular curve",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q72) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q130",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "In India a curve is designated by",
    "options": [
      "Radius of the curve",
      "Degree of the curve",
      "Deflection angle",
      "Long chord"
    ],
    "correctOptionIndex": 1,
    "explanation": "In Indian railway and highway engineering practice, curves are designated by their degree of curvature (D) subtended by a standard 30 m or 20 m chord.",
    "rankerTip": "Designated by Degree of curve (D ≈ 1719/R for 30m chord).",
    "topic": "Degree of curve",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q73) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q131",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Which of the following is also referred as versed sine of the curve ?",
    "options": [
      "Tangent length",
      "Long chord",
      "Apex distance",
      "Mid-ordinate"
    ],
    "correctOptionIndex": 3,
    "explanation": "The versed sine of a curve is the mid-ordinate (M), which is the perpendicular distance from the center of the long chord to the apex of the curve.",
    "rankerTip": "Versed sine of curve = Mid-ordinate M = R(1 - cos(∆/2)).",
    "topic": "Versed sine",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q89) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q132",
    "moduleId": "mod-6",
    "moduleNumber": 6,
    "question": "Which of the permanent adjustment test checks the perpendicularity between horizontal axis and vertical axis ?",
    "options": [
      "Plate level test",
      "Collimation test",
      "Spire test",
      "Azimuth test"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Spire test checks and adjusts the horizontal trunnion axis to be perpendicular to the vertical axis of the theodolite.",
    "rankerTip": "Spire test = Horizontal axis ⊥ Vertical axis.",
    "topic": "Spire test",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q92) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q133",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "The most widely used antenna in GPS is",
    "options": [
      "Horn antenna",
      "Slotted antenna",
      "Parabolic antenna",
      "Micro strip antenna"
    ],
    "correctOptionIndex": 3,
    "explanation": "Microstrip patch antennas are the most widely used compact GPS antennas due to their low profile, light weight, and circular polarization capability.",
    "rankerTip": "Microstrip patch antenna is widely used in GPS receivers.",
    "topic": "GPS Antenna",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q85) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q134",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "The first GPS satellite was launched in",
    "options": [
      "1955",
      "1967",
      "1978",
      "1993"
    ],
    "correctOptionIndex": 2,
    "explanation": "The first prototype GPS Block I satellite (Navstar 1) was launched into orbit on February 22, 1978.",
    "rankerTip": "First GPS satellite launched in 1978.",
    "topic": "GPS Launch",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q86) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q135",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Which type of wave is used to operate EDM?",
    "options": [
      "Ultrasonic wave",
      "Electric wave",
      "Electromagnetic wave",
      "All of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Electronic Distance Measurement (EDM) devices transmit modulated electromagnetic waves (infrared, visible laser, or microwave) to measure distances.",
    "rankerTip": "EDM uses Electromagnetic waves.",
    "topic": "EDM waves",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q87) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q136",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Data collector is used for total station?",
    "options": [
      "Controlling the total station",
      "Keeping data records",
      "Helping data processing",
      "Knowing position of pointing"
    ],
    "correctOptionIndex": 1,
    "explanation": "In Total Station surveying, the internal electronic data collector records slope distances, horizontal and vertical angles, and point coordinates in digital storage.",
    "rankerTip": "Data collector keeps digital data records.",
    "topic": "Data collector",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q88) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q137",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "An EDM based instrument is",
    "options": [
      "Micrometer theodolite",
      "Total station",
      "Dumpy level",
      "Chain"
    ],
    "correctOptionIndex": 1,
    "explanation": "A Total Station is an integrated electronic instrument combining an electronic theodolite, an EDM, and a microprocessor data collector.",
    "rankerTip": "Total Station incorporates EDM.",
    "topic": "Total Station",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q29) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q138",
    "moduleId": "mod-7",
    "moduleNumber": 7,
    "question": "Expand GPS",
    "options": [
      "Geodetic Parallel Surveying",
      "Global Positioning System",
      "Geodetic Positioning System",
      "Global Parallel Surveying"
    ],
    "correctOptionIndex": 1,
    "explanation": "GPS stands for Global Positioning System, a satellite-based radionavigation system developed by the United States Department of Defense.",
    "rankerTip": "Global Positioning System.",
    "topic": "GPS expansion",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q51) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q139",
    "moduleId": "mod-8",
    "moduleNumber": 8,
    "question": "Which year does first microprocessor was invented?",
    "options": [
      "1970",
      "1971",
      "1972",
      "1973"
    ],
    "correctOptionIndex": 1,
    "explanation": "The world's first single-chip commercial microprocessor, the Intel 4004 (4-bit CPU), was invented and released in 1971 by Federico Faggin, Ted Hoff, and Stanley Mazor.",
    "rankerTip": "First microprocessor (Intel 4004) was invented in 1971.",
    "topic": "Microprocessor",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q66) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q140",
    "moduleId": "mod-8",
    "moduleNumber": 8,
    "question": "What is the full form of GUI?",
    "options": [
      "Golden closer installation",
      "Graphical user installation",
      "Graphical user interface",
      "Geometrical user interface"
    ],
    "correctOptionIndex": 3,
    "explanation": "GUI stands for Graphical User Interface, enabling users to interact with software through visual icons. (In official answer key, option D Geometrical user interface was marked).",
    "rankerTip": "Option D marked as per official key.",
    "topic": "GUI",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q67) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q141",
    "moduleId": "mod-8",
    "moduleNumber": 8,
    "question": "What is the use of function key F3?",
    "options": [
      "O SNAP",
      "TABLET",
      "ISOPLANE",
      "SAVE AS"
    ],
    "correctOptionIndex": 0,
    "explanation": "In AutoCAD drafting, the F3 function key toggles Running Object Snap (OSNAP) on and off.",
    "rankerTip": "F3 toggles OSNAP.",
    "topic": "Function key F3",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q70) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q142",
    "moduleId": "mod-8",
    "moduleNumber": 8,
    "question": "Which of the following software is limited for AutoCAD installation?",
    "options": [
      "Window DOS",
      "Window 98",
      "Window 03",
      "Window 10"
    ],
    "correctOptionIndex": 3,
    "explanation": "AutoCAD compatibility has evolved; Windows 10 is the supported 64-bit platform while legacy systems are limited/unsupported.",
    "rankerTip": "Windows 10 is standard baseline.",
    "topic": "System requirements",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q71) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q143",
    "moduleId": "mod-8",
    "moduleNumber": 8,
    "question": "What is the use of the short cut key M text?",
    "options": [
      "Modifying text",
      "Move text",
      "Multi text",
      "Menu Text"
    ],
    "correctOptionIndex": 2,
    "explanation": "In AutoCAD, the command alias 'MTEXT' (or MT) invokes Multiline Text creation.",
    "rankerTip": "MTEXT = Multi text.",
    "topic": "MTEXT command",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q72) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q144",
    "moduleId": "mod-8",
    "moduleNumber": 8,
    "question": "What is the full form of UCS?",
    "options": [
      "User CAD system",
      "User CADD system",
      "User co-ordinate system",
      "User circle system"
    ],
    "correctOptionIndex": 2,
    "explanation": "UCS stands for User Coordinate System, allowing drafters to orient X, Y, and Z axes relative to any workplane.",
    "rankerTip": "User Coordinate System.",
    "topic": "UCS",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q73) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q145",
    "moduleId": "mod-8",
    "moduleNumber": 8,
    "question": "Which of the following pointing device is cheaper while comparing the digitilizer?",
    "options": [
      "Key Board",
      "Puck",
      "Mouse",
      "Enter key"
    ],
    "correctOptionIndex": 2,
    "explanation": "A computer mouse is an inexpensive, ubiquitous pointing device compared to an electromagnetic digitizer tablet/puck.",
    "rankerTip": "Mouse is much cheaper than a digitizer puck.",
    "topic": "Hardware devices",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q74) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q146",
    "moduleId": "mod-8",
    "moduleNumber": 8,
    "question": "Which short cut key does the work of redo last action?",
    "options": [
      "Ctrl + z",
      "Ctrl + y",
      "Ctrl + c",
      "Ctrl + x"
    ],
    "correctOptionIndex": 1,
    "explanation": "The standard keyboard shortcut to Redo the last undone action in Windows/AutoCAD is Ctrl + Y (while Ctrl + Z is Undo).",
    "rankerTip": "Ctrl + Y = Redo; Ctrl + Z = Undo.",
    "topic": "Shortcuts",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q75) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q147",
    "moduleId": "mod-8",
    "moduleNumber": 8,
    "question": "Of the following which is the correct input method to draw a line of 100 units at an angle of 40° in anticlockwise direction from positive X axis on a default AutoCAD working space ?",
    "options": [
      "<40@100",
      "@100<40",
      "@40<100",
      "<100@40"
    ],
    "correctOptionIndex": 1,
    "explanation": "In AutoCAD, polar coordinates are input as @distance<angle, so 100 units at 40° anticlockwise from positive X is input as @100<40.",
    "rankerTip": "@distance<angle => @100<40.",
    "topic": "Polar coordinates",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q90) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q148",
    "moduleId": "mod-8",
    "moduleNumber": 8,
    "question": "Which function key is used for on/off object snap, while drafting in AutoCAD ?",
    "options": [
      "F1",
      "F2",
      "F4",
      "F3"
    ],
    "correctOptionIndex": 3,
    "explanation": "In AutoCAD drafting, the F3 function key toggles Running Object Snap (OSNAP) mode on and off.",
    "rankerTip": "F3 = OSNAP.",
    "topic": "Function keys",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q97) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q149",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "The path tracked by a projectile is called",
    "options": [
      "Trajectory",
      "Horizontal Range",
      "Velocity Projection",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "The parabolic path described by a projectile moving under the action of gravity in the absence of air resistance is termed its trajectory.",
    "rankerTip": "Path of a projectile = Trajectory.",
    "topic": "Applied Physics / Projectiles",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q9) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q150",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "π Radians = ___________ grades",
    "options": [
      "100",
      "200",
      "180",
      "90"
    ],
    "correctOptionIndex": 1,
    "explanation": "In the centesimal angle measurement system, 1 right angle = 100 grades (100g). Thus, π radians (180°) = 200 grades.",
    "rankerTip": "π radians = 180° = 200 grades.",
    "topic": "Angle conversions",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q13) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q151",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "What is termed as the quantity of matter contained in a body?",
    "options": [
      "Density",
      "Volume",
      "Mass",
      "Specific gravity"
    ],
    "correctOptionIndex": 2,
    "explanation": "Mass is the fundamental scalar quantity of matter contained in a body, which remains invariant regardless of gravitational field.",
    "rankerTip": "Quantity of matter = Mass.",
    "topic": "Mass",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q89) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q152",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "How many watts for 1 horse power in British system?",
    "options": [
      "726 watts",
      "736 watts",
      "746 watts",
      "756 watts"
    ],
    "correctOptionIndex": 2,
    "explanation": "In the British Imperial engineering system, 1 mechanical horsepower (hp) equals 746 Watts (550 ft·lbf/s). Metric hp equals 735.5 W.",
    "rankerTip": "British hp = 746 W; Metric hp = 735.5 W.",
    "topic": "Horsepower",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q90) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q153",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "What is the S.I. unit of heat?",
    "options": [
      "Calorie",
      "Joule",
      "Centigrade heat unit",
      "British thermal unit"
    ],
    "correctOptionIndex": 0,
    "explanation": "In the International System of Units (SI), heat energy is measured in Joules (J). Note: In official provisional answer key, Option A Calorie is recorded.",
    "rankerTip": "SI unit is Joule; Option A Calorie marked as official key.",
    "topic": "Heat units",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q91) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q154",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "What is called for the materials that restricts heat flow by radiation, conduction and convection?",
    "options": [
      "Conductors",
      "Insulators",
      "Ferrous",
      "Non-ferrous"
    ],
    "correctOptionIndex": 1,
    "explanation": "Thermal insulators are materials with very low thermal conductivity that resist the transfer of heat by conduction, convection, and radiation.",
    "rankerTip": "Restricts heat flow = Insulators.",
    "topic": "Thermal insulators",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q92) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q155",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "What is the term for the object seen higher than eye level?",
    "options": [
      "Angle of inclination",
      "Angle of friction",
      "Angle of elevation",
      "Angle of depression"
    ],
    "correctOptionIndex": 2,
    "explanation": "The angle subtended between the horizontal line of sight and the inclined line directed to an object above eye level is the angle of elevation.",
    "rankerTip": "Above eye level = Angle of elevation. Below eye level = Angle of depression.",
    "topic": "Angle of elevation",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q93) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q156",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "What is the centre of gravity of a sphere?",
    "options": [
      "At the centre",
      "On the circumference",
      "At the diameter",
      "At the radius"
    ],
    "correctOptionIndex": 0,
    "explanation": "By spherical symmetry, the center of gravity of a uniform solid sphere lies exactly at its geometric center.",
    "rankerTip": "Center of gravity of a sphere is at its center.",
    "topic": "Centre of gravity",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q94) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q157",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "What is the purpose of tempering a steel?",
    "options": [
      "To reduce the brittleness",
      "To remove the ductility",
      "To increase the hardness",
      "To increase the brittleness"
    ],
    "correctOptionIndex": 0,
    "explanation": "Tempering is a heat treatment process performed after hardening to reduce excessive brittleness and relieve internal quenching stresses while maintaining toughness.",
    "rankerTip": "Tempering reduces brittleness and restores toughness.",
    "topic": "Heat treatment / Tempering",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q95) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q158",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "What is the term used for maximum stress attained by a material before rupture?",
    "options": [
      "Tensile stress",
      "Compressive stress",
      "Working stress",
      "Ultimate stress"
    ],
    "correctOptionIndex": 3,
    "explanation": "Ultimate stress (tensile strength) is the maximum nominal stress attained on the engineering stress-strain curve prior to necking and rupture.",
    "rankerTip": "Maximum stress before rupture = Ultimate stress.",
    "topic": "Ultimate stress",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q96) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q159",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "Which formula is suitable for the area of a circle, whose diameter is (d)?",
    "options": [
      "π d² / 4",
      "π r",
      "2π r",
      "π d"
    ],
    "correctOptionIndex": 0,
    "explanation": "The area of a circle in terms of its diameter d is Area = π (d/2)² = π d² / 4.",
    "rankerTip": "Area = πd² / 4.",
    "topic": "Area of circle",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q97) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q160",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "What is the area of irregular shape by Simpson's rule?",
    "options": [
      "h/3 [y1 + y7 + 4(y2 + y4 + y6) + 2(y3 + y5)]",
      "h/2 [y1 + y7]",
      "h/3 [y2 + y4 + y6]",
      "h/2 [y1 + y7 + 2(y3 + y5)]"
    ],
    "correctOptionIndex": 0,
    "explanation": "Simpson's 1/3rd rule for computing area under an odd number of ordinates (even number of intervals h) is Area = (h/3) × [(y1 + yn) + 4(sum of even) + 2(sum of odd)].",
    "rankerTip": "Area = (h/3) × [First + Last + 4(Evens) + 2(Odds)].",
    "topic": "Simpson's rule",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q98) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q161",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "What are the three consecutive numbers if their sum is 42?",
    "options": [
      "11, 12, 13",
      "12, 13, 14",
      "13, 14, 15",
      "14, 15, 16"
    ],
    "correctOptionIndex": 2,
    "explanation": "Let three consecutive integers be x, x+1, x+2. Their sum 3x + 3 = 42 => 3x = 39 => x = 13. The numbers are 13, 14, 15.",
    "rankerTip": "13 + 14 + 15 = 42.",
    "topic": "Algebra",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q99) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q162",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "What is the value of (a⁵)⁷ ?",
    "options": [
      "a³⁵",
      "a¹²",
      "a²¹",
      "a²²"
    ],
    "correctOptionIndex": 0,
    "explanation": "According to the laws of exponents, (a^m)^n = a^(m × n). Thus, (a⁵)⁷ = a^(5 × 7) = a³⁵.",
    "rankerTip": "(a^m)^n = a^(m×n) => (a⁵)⁷ = a³⁵.",
    "topic": "Exponents",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q100) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q163",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "1 m = __________ cm.",
    "options": [
      "2.54",
      "10",
      "30.48",
      "100"
    ],
    "correctOptionIndex": 3,
    "explanation": "In the metric system, 1 meter = 100 centimeters = 1000 millimeters.",
    "rankerTip": "1 m = 100 cm.",
    "topic": "Unit conversions",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q22) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q164",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "1 hectare = ___________ m².",
    "options": [
      "10³",
      "10¹",
      "10²",
      "10⁴"
    ],
    "correctOptionIndex": 3,
    "explanation": "1 hectare = 100 m × 100 m = 10,000 m² = 10⁴ m².",
    "rankerTip": "1 hectare = 10,000 m² = 10⁴ m².",
    "topic": "Area units",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q38) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q165",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "6020 seconds =",
    "options": [
      "00° 05' 40\"",
      "01° 40' 20\"",
      "03° 01' 00\"",
      "6° 02' 00\""
    ],
    "correctOptionIndex": 1,
    "explanation": "6020 seconds / 60 = 100 minutes and 20 seconds. 100 minutes = 1 degree and 40 minutes. Thus, 6020\" = 01° 40' 20\".",
    "rankerTip": "6020\" = 100' 20\" = 1° 40' 20\".",
    "topic": "Sexagesimal conversion",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q78) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q166",
    "moduleId": "mod-9",
    "moduleNumber": 9,
    "question": "Formula for finding area of a plane triangle whose base is b, height h, is:",
    "options": [
      "bh",
      "0.5 bh",
      "0.5 [(b+h)/2]",
      "2 [(b+h)/2]"
    ],
    "correctOptionIndex": 1,
    "explanation": "The geometric area of a plane triangle with base b and vertical altitude h is Area = 0.5 × base × height = 0.5 bh.",
    "rankerTip": "Area = 1/2 × b × h = 0.5 bh.",
    "topic": "Triangle area",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q98) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q167",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "What is the abbreviation for MOEF?",
    "options": [
      "Ministry of ecology and forest",
      "Ministry of environment and federation",
      "Ministry of environment and forest",
      "Ministry of ecology and fire"
    ],
    "correctOptionIndex": 2,
    "explanation": "MOEF stands for Ministry of Environment and Forests (now MoEFCC: Ministry of Environment, Forest and Climate Change).",
    "rankerTip": "Ministry of Environment and Forests.",
    "topic": "Environmental acronyms",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q65) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q168",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "What is the other name of dwelling unit?",
    "options": [
      "Raw building",
      "Residential building",
      "Commercial building",
      "Educational building"
    ],
    "correctOptionIndex": 1,
    "explanation": "A dwelling unit is defined in building bye-laws and the National Building Code (NBC) as a residential building or apartment.",
    "rankerTip": "Dwelling unit = Residential building.",
    "topic": "Building planning",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q68) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q169",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "What is the normal life period of residential building with concrete roof according to NBC 2005?",
    "options": [
      "50",
      "70",
      "100",
      "110"
    ],
    "correctOptionIndex": 2,
    "explanation": "According to NBC 2005 / IS 456, the design life period for monumental and permanent residential buildings with reinforced concrete roofs is 100 years.",
    "rankerTip": "100 years for permanent RCC buildings.",
    "topic": "NBC design life",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q69) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q170",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "The standard size of brick",
    "options": [
      "19 × 9 × 9 cm",
      "20 × 10 × 10 cm",
      "20 × 20 × 10 cm",
      "19 × 19 × 9 cm"
    ],
    "correctOptionIndex": 0,
    "explanation": "The standard modular size of a common building brick as per BIS IS 1077 is 19 cm × 9 cm × 9 cm (nominal size with mortar is 20 × 10 × 10 cm).",
    "rankerTip": "Standard/modular = 19 × 9 × 9 cm. Nominal = 20 × 10 × 10 cm.",
    "topic": "Standard brick size",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q76) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q171",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "The central part of the tree is called",
    "options": [
      "Sap wood",
      "Cambium layer",
      "Heart wood",
      "Pith"
    ],
    "correctOptionIndex": 3,
    "explanation": "The innermost core/central portion of a tree stem is the pith (or medulla), which supplies nutrients to young saplings.",
    "rankerTip": "Innermost core = Pith (Medulla).",
    "topic": "Timber cross section",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q77) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q172",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "Weight of 1 bag of cement",
    "options": [
      "74 kg",
      "50 kg",
      "40 kg",
      "100 kg"
    ],
    "correctOptionIndex": 1,
    "explanation": "As per Indian Standard IS 1489 / IS 269, a standard commercial bag of Portland cement weighs exactly 50 kg (volume ≈ 34.7 liters).",
    "rankerTip": "1 bag = 50 kg = 0.0347 m³.",
    "topic": "Cement bag weight",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q78) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q173",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "Chemically which rock is calcarious rock?",
    "options": [
      "Granite",
      "Silica",
      "Marble",
      "Basalt stone"
    ],
    "correctOptionIndex": 2,
    "explanation": "Marble is a metamorphic rock formed from recrystallized limestone/dolomite, whose primary chemical constituent is calcium carbonate (calcarious rock).",
    "rankerTip": "Calcareous rocks: Marble, Limestone. Siliceous: Granite, Basalt. Argillaceous: Slate, Laterite.",
    "topic": "Rocks & Stones",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q79) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q174",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "Vicat's apparatus is used to determine the",
    "options": [
      "initial setting time of cement",
      "final setting time of cement",
      "normal consistency of cement",
      "all of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Vicat's apparatus with standard plunger and needles is used to determine the standard consistency, initial setting time, and final setting time of cement paste.",
    "rankerTip": "Consistency (10 mm plunger), Initial setting (1 mm needle), Final setting (collar needle).",
    "topic": "Vicat's apparatus",
    "type": "pyq",
    "examName": "Paper 43/2023 (Q80) • Tracer / Surveyor Gr. II",
    "year": 2023,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q175",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "The structure which is used to carry canal over natural drain is called",
    "options": [
      "fly level",
      "aqueduct",
      "super passage",
      "level crossing"
    ],
    "correctOptionIndex": 1,
    "explanation": "An aqueduct is a cross-drainage structure in which the irrigation canal is carried in a flume supported on piers completely over a natural stream/drain.",
    "rankerTip": "Canal over drain = Aqueduct. Drain over canal = Superpassage.",
    "topic": "Cross drainage works",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q65) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q176",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "Area of land irrigated divided by the unit volume of irrigation water is called",
    "options": [
      "Head water",
      "Duty",
      "Delta",
      "Base period"
    ],
    "correctOptionIndex": 1,
    "explanation": "Duty is defined as the area of land (in hectares) that can be irrigated by a continuous discharge of 1 cumec of water throughout the base period.",
    "rankerTip": "Area per unit discharge = Duty (hectares/cumec).",
    "topic": "Duty of water",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q93) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q177",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "Portion of a brick made by cutting across it lengthwise into exactly two parts is known as",
    "options": [
      "bevelled closer",
      "queen closer",
      "king closer",
      "bat"
    ],
    "correctOptionIndex": 1,
    "explanation": "A queen closer is formed by cutting a standard brick lengthwise into two equal halves.",
    "rankerTip": "Cut lengthwise = Queen closer. Cut widthwise = Bat. Triangle cut from corner = King closer.",
    "topic": "Brick masonry closers",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q94) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q178",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "When the bed level of canal and drainage is at the same level, is provided.",
    "options": [
      "Aqueducts",
      "Superpassage",
      "Level crossings",
      "Delta"
    ],
    "correctOptionIndex": 2,
    "explanation": "When the bed levels of a canal and a natural drainage stream intersect at the exact same level, a level crossing with regulator gates is provided.",
    "rankerTip": "Canal and drain at same bed level = Level crossing.",
    "topic": "Cross drainage works",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q96) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q179",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "Main constituent of portland cement is",
    "options": [
      "clay",
      "sand",
      "lime",
      "magnesium"
    ],
    "correctOptionIndex": 2,
    "explanation": "Lime (calcium oxide, CaO, 60-67%) is the primary chemical constituent of Ordinary Portland Cement (OPC), followed by silica (17-25%).",
    "rankerTip": "Lime (CaO, ~63%) is the major constituent of cement.",
    "topic": "Cement composition",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q99) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  },
  {
    "id": "bq-pyq200-q180",
    "moduleId": "mod-10",
    "moduleNumber": 10,
    "question": "In , headers and stretchers are laid alternatively in the same course.",
    "options": [
      "English bond",
      "Stretcher bond",
      "Header bond",
      "Flemish bond"
    ],
    "correctOptionIndex": 3,
    "explanation": "In a Flemish bond, alternate stretchers and headers are laid in the same course, with queen closers placed next to quoin headers in alternating courses.",
    "rankerTip": "Alternate headers and stretchers in same course = Flemish bond. Alternate courses of headers and stretchers = English bond.",
    "topic": "Brick bonds",
    "type": "pyq",
    "examName": "Paper 106/2017 (Q100) • Surveyor Gr. II (KWA)",
    "year": 2017,
    "createdAt": "2026-09-21T04:00:00Z"
  }
];

export const PYQ_PAPER_043_2023: PYQPaper = {
  "id": "pyq-paper-043-2023",
  "title": "Kerala PSC Tracer / Surveyor Grade II (Paper 43/2023)",
  "examName": "Tracer / Surveyor Grade II",
  "examCode": "Cat. No: 411/2022 • Paper 43/2023",
  "year": 2023,
  "department": "Survey & Land Records / Irrigation / LSGD",
  "totalQuestions": 100,
  "pdfUrl": "https://example.com/pyq/tracer_surveyor_gr2_paper_43_2023.pdf",
  "answerKeyUrl": "https://example.com/pyq/tracer_surveyor_gr2_paper_43_2023_key.pdf",
  "isSolved": true,
  "questions": [
    {
      "id": "bq-pyq200-q001",
      "questionNumber": 1,
      "question": "As per BIS (IS 1444-1989) the standard size of B1 drawing board is _________",
      "options": [
        "1000 × 1500 mm",
        "700 × 1000 mm",
        "500 × 700 mm",
        "350 × 500 mm"
      ],
      "correctOptionIndex": 1,
      "explanation": "Standard drawing board sizes as per BIS (IS 1444-1989): B0 = 1000 × 1500 mm, B1 = 700 × 1000 mm, B2 = 500 × 700 mm, B3 = 350 × 500 mm.",
      "topic": "Drawing boards"
    },
    {
      "id": "bq-pyq200-q002",
      "questionNumber": 2,
      "question": "For drawing long thin lines of uniform thickness the pencil should be sharpened",
      "options": [
        "Chisel edge",
        "Pointed lead",
        "Conical point",
        "Flat blade"
      ],
      "correctOptionIndex": 0,
      "explanation": "A chisel edge is sharpened to maintain a uniform line thickness along straight edges (ruler/T-square). Conical points wear rapidly and broaden line width.",
      "topic": "Pencils & Instruments"
    },
    {
      "id": "bq-pyq200-q003",
      "questionNumber": 3,
      "question": "The ratio of length to width of all arrow heads in drawing is",
      "options": [
        "2:1",
        "4:1",
        "3:1",
        "2:4"
      ],
      "correctOptionIndex": 2,
      "explanation": "According to SP 46 / IS 10714 drafting standards, dimension arrowheads must have a standard length-to-width (depth-to-spread) ratio of 3:1.",
      "topic": "Dimensioning"
    },
    {
      "id": "bq-pyq200-q004",
      "questionNumber": 4,
      "question": "For thin chain line alternate long and short dashes are in proportion ranging from",
      "options": [
        "6:1 to 4:1",
        "9:1 to 3:1",
        "6:2 to 4:2",
        "9:1 to 4:1"
      ],
      "correctOptionIndex": 0,
      "explanation": "For thin chain lines (center lines / Type G), long dashes are 9 to 12 mm and short dashes are 1.5 to 2 mm, giving a proportion ranging from 6:1 to 4:1.",
      "topic": "Types of lines"
    },
    {
      "id": "bq-pyq200-q005",
      "questionNumber": 5,
      "question": "The plan and elevation of a line segment are seen coincides, the line is situated in the",
      "options": [
        "First quadrant",
        "Second quadrant",
        "Third quadrant",
        "Quadrantal axis"
      ],
      "correctOptionIndex": 1,
      "explanation": "When a line lies in the 2nd quadrant (above HP, behind VP) or 4th quadrant (below HP, in front of VP), upon rotating HP by 90°, the plan (top view) and elevation (front view) overlap on the same side of the reference line XY.",
      "topic": "Projections"
    },
    {
      "id": "bq-pyq200-q006",
      "questionNumber": 6,
      "question": "The recommended dimensioning of a sphere of Diameter 20 mm is",
      "options": [
        "20 Ø S",
        "S Ø 20",
        "S 20 Ø",
        "Ø 20 S"
      ],
      "correctOptionIndex": 1,
      "explanation": "As per ISO/BIS drafting conventions, spherical diameter is dimensioned by prefixing the symbol 'S' before the diameter symbol Ø, formatted as S Ø 20 (or SR for spherical radius).",
      "topic": "Dimensioning"
    },
    {
      "id": "bq-pyq200-q007",
      "questionNumber": 7,
      "question": "The type of Vernier in which the Vernier divisions are marked in the opposite direction of the main scale is",
      "options": [
        "Vernier Scale",
        "Forward Vernier",
        "Backward Vernier",
        "None of these"
      ],
      "correctOptionIndex": 2,
      "explanation": "In a backward (retrograde) vernier, divisions are numbered in the direction opposite to the main scale, where n vernier divisions equal (n + 1) main scale divisions.",
      "topic": "Scales & Verniers"
    },
    {
      "id": "bq-pyq200-q008",
      "questionNumber": 8,
      "question": "The method of projection in which the projectors are parallel to each other and perpendicular to the plane the projection is",
      "options": [
        "Isometric Projection",
        "Orthographic Projection",
        "Perspective Projection",
        "Oblique Projection"
      ],
      "correctOptionIndex": 1,
      "explanation": "Orthographic projection is an axonometric/parallel projection method where projection rays are mutually parallel to each other and normal (perpendicular) to the projection plane.",
      "topic": "Orthographic projection"
    },
    {
      "id": "bq-pyq200-q009",
      "questionNumber": 9,
      "question": "RF = 200:1 represents a",
      "options": [
        "Enlarging Scale",
        "Reducing Scale",
        "Full Size",
        "Comparative Scale"
      ],
      "correctOptionIndex": 0,
      "explanation": "Representative Fraction (RF) > 1 (e.g. 200:1) indicates an enlarging scale used for small precision components. RF < 1 is a reducing scale.",
      "topic": "Scales"
    },
    {
      "id": "bq-pyq200-q010",
      "questionNumber": 10,
      "question": "Scale 1 : 200 is classified as",
      "options": [
        "full scale",
        "scale of chords",
        "enlarged scale",
        "reduction scale"
      ],
      "correctOptionIndex": 3,
      "explanation": "A scale of 1:200 has an RF < 1, meaning 1 unit on the drawing represents 200 units in reality; it is a reducing scale.",
      "topic": "Scales"
    },
    {
      "id": "bq-pyq200-q011",
      "questionNumber": 11,
      "question": "The survey in which earth's curvature is taken into account is",
      "options": [
        "Levelling",
        "Geodetic survey",
        "Theodolite Survey",
        "None of these"
      ],
      "correctOptionIndex": 1,
      "explanation": "In geodetic surveying, the curvature of the earth's spheroidal surface is taken into account for large areas (> 250 km²).",
      "topic": "Geodetic survey"
    },
    {
      "id": "bq-pyq200-q012",
      "questionNumber": 12,
      "question": "Surveying Chain is Made up of",
      "options": [
        "Galvanised MS Wire",
        "MS Wire",
        "High carbon steel",
        "None of these"
      ],
      "correctOptionIndex": 0,
      "explanation": "Survey chains are manufactured from galvanized mild steel (MS) wire of 4 mm diameter (8 SWG) with ends looped into rings.",
      "topic": "Chain construction"
    },
    {
      "id": "bq-pyq200-q013",
      "questionNumber": 13,
      "question": "The Length of surveyor's chain is",
      "options": [
        "100 ft",
        "66 ft",
        "33 ft",
        "30 m"
      ],
      "correctOptionIndex": 1,
      "explanation": "Gunter's chain (surveyor's chain) is 66 feet (20.12 m) long and consists of 100 links, with each link measuring 0.66 ft (7.92 inches).",
      "topic": "Gunter's chain"
    },
    {
      "id": "bq-pyq200-q014",
      "questionNumber": 14,
      "question": "In ordinary chain survey the maximum permissible error is",
      "options": [
        "1 in 250",
        "1 in 1000",
        "1 in 2000",
        "1 in 5000"
      ],
      "correctOptionIndex": 1,
      "explanation": "In ordinary chain surveying under normal field conditions, the maximum permissible ratio of error is 1 in 1000 (1 in 250 in rough ground; 1 in 1000 is official key for standard ordinary chaining).",
      "topic": "Permissible errors"
    },
    {
      "id": "bq-pyq200-q015",
      "questionNumber": 15,
      "question": "The correction for sag is always _____",
      "options": [
        "+ ve",
        "− ve",
        "+ ve or − ve",
        "None of these"
      ],
      "correctOptionIndex": 1,
      "explanation": "Correction for sag is always negative (-ve) because the catenary curve makes the measured distance between supports longer than the true straight chord distance.",
      "topic": "Sag correction"
    },
    {
      "id": "bq-pyq200-q016",
      "questionNumber": 16,
      "question": "If L is the correct length of a chain, L' is the incorrect length and D' is the measured length, then the correct length is:",
      "options": [
        "(L' / L) × D'",
        "(L / L') × D'",
        "(L / D') × L'",
        "(D' / L) × L'"
      ],
      "correctOptionIndex": 0,
      "explanation": "True distance = (Measured length) × (Incorrect length of chain / True length of chain) = D' × (L' / L).",
      "topic": "Chain errors"
    },
    {
      "id": "bq-pyq200-q017",
      "questionNumber": 17,
      "question": "The instrument which is not used in chain survey is",
      "options": [
        "Ranging Rod",
        "Cross Staff",
        "Offset Rod",
        "Levelling Staff"
      ],
      "correctOptionIndex": 3,
      "explanation": "A levelling staff is used exclusively in levelling and tachometric work to measure vertical elevations, not for linear distance measurement in chain surveying.",
      "topic": "Instruments"
    },
    {
      "id": "bq-pyq200-q018",
      "questionNumber": 18,
      "question": "The Principle of chain surveying is",
      "options": [
        "Work from Whole to Part",
        "Triangulation",
        "Traversing",
        "None of these"
      ],
      "correctOptionIndex": 1,
      "explanation": "The fundamental principle of chain surveying is triangulation, whereby the survey area is partitioned into a network of well-conditioned triangles.",
      "topic": "Principles of Chain Survey"
    },
    {
      "id": "bq-pyq200-q019",
      "questionNumber": 19,
      "question": "The system of lines or Triangles covering the area to be surveyed is",
      "options": [
        "Triangulation",
        "Frame Work",
        "Traversing",
        "All of the above"
      ],
      "correctOptionIndex": 1,
      "explanation": "The system of survey lines forming the skeleton network of triangles covering the area to be surveyed is called the framework.",
      "topic": "Triangles & Framework"
    },
    {
      "id": "bq-pyq200-q020",
      "questionNumber": 20,
      "question": "In a well-conditioned triangle the angles are",
      "options": [
        "20° or 120°",
        "Greater than 30° and less than 120°",
        "Greater than 20° & less than 120°",
        "None of these"
      ],
      "correctOptionIndex": 1,
      "explanation": "A well-conditioned triangle has no angle less than 30° and no angle greater than 120° to minimize geometric plotting distortion.",
      "topic": "Well-conditioned triangle"
    },
    {
      "id": "bq-pyq200-q021",
      "questionNumber": 21,
      "question": "The line joining some fixed points termed as tie stations on main survey line is called",
      "options": [
        "Base line",
        "Check line",
        "Proof line",
        "Tie line"
      ],
      "correctOptionIndex": 3,
      "explanation": "A tie line joins auxiliary (tie) stations on main survey lines to measure offsets for locating interior ground details.",
      "topic": "Tie line"
    },
    {
      "id": "bq-pyq200-q022",
      "questionNumber": 22,
      "question": "Invar tape is made up of an alloy of and steel.",
      "options": [
        "Aluminium",
        "Nickel",
        "Copper",
        "Brass"
      ],
      "correctOptionIndex": 1,
      "explanation": "Invar is a nickel-iron alloy (36% Nickel, 64% Steel) characterized by an exceptionally low coefficient of thermal expansion.",
      "topic": "Invar tape"
    },
    {
      "id": "bq-pyq200-q023",
      "questionNumber": 23,
      "question": "The process of establishing an intermediate point in a line is called",
      "options": [
        "Chaining",
        "Offsetting",
        "Ranging",
        "Levelling"
      ],
      "correctOptionIndex": 2,
      "explanation": "Ranging is the operational process of aligning intermediate points along a straight survey line between two terminal stations.",
      "topic": "Ranging"
    },
    {
      "id": "bq-pyq200-q024",
      "questionNumber": 24,
      "question": "Error =",
      "options": [
        "Difference in values and sign of observed value",
        "Difference in values and sign of true value",
        "Observed value - true value",
        "True value - observed value"
      ],
      "correctOptionIndex": 2,
      "explanation": "By standard definition, Error = Observed Value - True Value (while Correction = True Value - Observed Value = -Error).",
      "topic": "Definitions of Error"
    },
    {
      "id": "bq-pyq200-q025",
      "questionNumber": 25,
      "question": "Of the following, which is the primary stage of surveying ?",
      "options": [
        "Reconnaissance",
        "Preliminary survey",
        "Final survey",
        "Location survey"
      ],
      "correctOptionIndex": 0,
      "explanation": "Reconnaissance is the initial ground inspection of the survey area to observe boundaries, terrain features, and select station points.",
      "topic": "Stages of Survey"
    },
    {
      "id": "bq-pyq200-q026",
      "questionNumber": 26,
      "question": "Bad ranging is an example for",
      "options": [
        "Positive compensating error",
        "Negative compensating error",
        "Positive cumulative error",
        "Negative cumulative error"
      ],
      "correctOptionIndex": 2,
      "explanation": "Bad (imperfect) ranging causes the chain to deviate from a true straight line, consistently making the measured length greater than the true length (positive cumulative error).",
      "topic": "Errors in Chaining"
    },
    {
      "id": "bq-pyq200-q027",
      "questionNumber": 27,
      "question": "Survey lines set out to locate interior details of a plot is called",
      "options": [
        "Main survey lines",
        "Tie lines",
        "Check lines",
        "Random lines"
      ],
      "correctOptionIndex": 1,
      "explanation": "Tie lines are secondary lines run across main survey lines to locate interior ground features and details.",
      "topic": "Survey lines"
    },
    {
      "id": "bq-pyq200-q028",
      "questionNumber": 28,
      "question": "A link of a metric chain is cm in length.",
      "options": [
        "0.66",
        "10",
        "20",
        "30.48"
      ],
      "correctOptionIndex": 2,
      "explanation": "Each link of a standard 20 m or 30 m metric chain measures 0.2 m (20 cm) between the centers of connecting rings.",
      "topic": "Metric chain links"
    },
    {
      "id": "bq-pyq200-q029",
      "questionNumber": 29,
      "question": "Which of the following is the prime instrument is used for ranging ?",
      "options": [
        "Ranging rod",
        "Chain",
        "Cross-staff",
        "Arrow"
      ],
      "correctOptionIndex": 0,
      "explanation": "Ranging rods (typically 2 to 3 m long, octagonal or circular poles painted in alternating red/black and white bands) are the prime tools for visual alignment.",
      "topic": "Ranging rods"
    },
    {
      "id": "bq-pyq200-q030",
      "questionNumber": 30,
      "question": "A 20 m metric chain has links.",
      "options": [
        "10",
        "50",
        "100",
        "150"
      ],
      "correctOptionIndex": 2,
      "explanation": "A 20-meter metric chain consists of 100 links (each link = 20 cm = 0.2 m). A 30 m metric chain has 150 links.",
      "topic": "Metric chain"
    },
    {
      "id": "bq-pyq200-q031",
      "questionNumber": 31,
      "question": "90° is set out using:",
      "options": [
        "cross staff",
        "peg",
        "plumb-bob",
        "line ranger"
      ],
      "correctOptionIndex": 0,
      "explanation": "An open cross-staff is used on survey lines to set out right angles (90°) for perpendicular offsets.",
      "topic": "Cross-staff"
    },
    {
      "id": "bq-pyq200-q032",
      "questionNumber": 32,
      "question": "___________ angles can be set out using French cross staff.",
      "options": [
        "30°",
        "45°",
        "60°",
        "75°"
      ],
      "correctOptionIndex": 1,
      "explanation": "An octagonal French cross staff has sighting slits set at angles that allow setting out both 45° and 90° lines.",
      "topic": "French cross-staff"
    },
    {
      "id": "bq-pyq200-q033",
      "questionNumber": 33,
      "question": "Gunter's chain is ___________ in length.",
      "options": [
        "20 m",
        "33 feet",
        "66 feet",
        "100 feet"
      ],
      "correctOptionIndex": 2,
      "explanation": "Gunter's chain (surveyor's chain) is 66 feet long and contains 100 links (1 link = 0.66 ft = 7.92 in).",
      "topic": "Gunter's chain"
    },
    {
      "id": "bq-pyq200-q034",
      "questionNumber": 34,
      "question": "Survey related to large water bodies is called",
      "options": [
        "Hydrographic surveying",
        "Land surveying",
        "Air surveying",
        "Aerial surveying"
      ],
      "correctOptionIndex": 0,
      "explanation": "Hydrographic surveying encompasses surveys of water bodies (oceans, lakes, rivers, harbors) for navigation, bathymetry, and shorelines.",
      "topic": "Classifications"
    },
    {
      "id": "bq-pyq200-q035",
      "questionNumber": 35,
      "question": "Offsets are said to be large when offset length exceeds _________ m.",
      "options": [
        "5",
        "10",
        "15",
        "20"
      ],
      "correctOptionIndex": 2,
      "explanation": "In chain surveying, perpendicular offsets exceeding 15 meters in length are categorized as long offsets (short offsets are ≤ 15 m).",
      "topic": "Offsets"
    },
    {
      "id": "bq-pyq200-q036",
      "questionNumber": 36,
      "question": "A set of arrows provided with chain has _________ arrows.",
      "options": [
        "10",
        "15",
        "20",
        "30"
      ],
      "correctOptionIndex": 0,
      "explanation": "A standard set of survey arrows accompanying a metric chain consists of 10 arrows made of tempered 4 mm steel wire.",
      "topic": "Arrows"
    },
    {
      "id": "bq-pyq200-q037",
      "questionNumber": 37,
      "question": "Which of the following instrument is used for ranging ?",
      "options": [
        "Peg",
        "Cross staff",
        "Optical square",
        "Line ranger"
      ],
      "correctOptionIndex": 3,
      "explanation": "A line ranger is an optical instrument consisting of two 90° reflecting prisms used for fixing intermediate ranging points without an assistant at the ends.",
      "topic": "Line ranger"
    },
    {
      "id": "bq-pyq200-q038",
      "questionNumber": 38,
      "question": "The horizontal angle which a line makes with the meridian is called",
      "options": [
        "Included angle",
        "Inclination",
        "Bearing",
        "Declination"
      ],
      "correctOptionIndex": 2,
      "explanation": "The horizontal angle measured between a survey line and a reference meridian (true, magnetic, or arbitrary) is defined as its bearing.",
      "topic": "Bearing"
    },
    {
      "id": "bq-pyq200-q039",
      "questionNumber": 39,
      "question": "The graduated ring being attached to the magnetic needle remains stationary in",
      "options": [
        "Surveyor's compass",
        "Prismatic compass",
        "Trough compass",
        "None of these"
      ],
      "correctOptionIndex": 1,
      "explanation": "In a prismatic compass, the graduated aluminum ring is attached directly to the broad magnetic needle and remains stationary pointing magnetic North.",
      "topic": "Prismatic compass"
    },
    {
      "id": "bq-pyq200-q040",
      "questionNumber": 40,
      "question": "In a prismatic compass 180° is marked at",
      "options": [
        "North end",
        "South end",
        "East",
        "West"
      ],
      "correctOptionIndex": 0,
      "explanation": "In a prismatic compass, 0° is engraved at the South end and 180° is at the North end so that the bearing can be read directly through the prism at the eye vane.",
      "topic": "Prismatic compass graduations"
    },
    {
      "id": "bq-pyq200-q041",
      "questionNumber": 41,
      "question": "The bearing of a line taken from the starting point of the line towards the direction in which survey progress is called",
      "options": [
        "True bearing",
        "Back bearing",
        "Whole circle bearing",
        "Fore bearing"
      ],
      "correctOptionIndex": 3,
      "explanation": "The bearing of a survey line taken in the forward direction of progress of the survey from the starting station is called the Fore Bearing (FB).",
      "topic": "Fore bearing"
    },
    {
      "id": "bq-pyq200-q042",
      "questionNumber": 42,
      "question": "In the whole circle bearing systems, S 85°- 45' W will be expressed as",
      "options": [
        "94°-15'",
        "85°-45'",
        "265°-45'",
        "180°-45'"
      ],
      "correctOptionIndex": 2,
      "explanation": "S 85°-45' W lies in the 3rd quadrant (SW). WCB = 180° + 85°45' = 265°45'.",
      "topic": "WCB conversion"
    },
    {
      "id": "bq-pyq200-q043",
      "questionNumber": 43,
      "question": "At poles the magnetic dip is equal to",
      "options": [
        "180°",
        "90°",
        "0",
        "45°"
      ],
      "correctOptionIndex": 1,
      "explanation": "Magnetic dip is the vertical inclination of the needle to the horizontal. It is 0° at the magnetic equator and 90° (vertical) at the magnetic poles.",
      "topic": "Dip of needle"
    },
    {
      "id": "bq-pyq200-q044",
      "questionNumber": 44,
      "question": "The whole circle bearing of a line observed by a prismatic compass is 110°, its bearing read on a surveyor's compass is",
      "options": [
        "N 75° E",
        "N 80° E",
        "S 110° E",
        "S 70° E"
      ],
      "correctOptionIndex": 3,
      "explanation": "A WCB of 110° lies in the 2nd quadrant (SE). Reduced Bearing (QB) = 180° - 110° = S 70° E.",
      "topic": "Reduced bearing"
    },
    {
      "id": "bq-pyq200-q045",
      "questionNumber": 45,
      "question": "The horizontal angle which magnetic meridian makes with the true meridian is called",
      "options": [
        "Magnetic Declination",
        "Dip",
        "Bearing",
        "None of these"
      ],
      "correctOptionIndex": 0,
      "explanation": "Magnetic declination is the horizontal angle between the magnetic meridian and the true (geographical) meridian at a place.",
      "topic": "Magnetic declination"
    },
    {
      "id": "bq-pyq200-q046",
      "questionNumber": 46,
      "question": "The line joining places of equal declination",
      "options": [
        "Agonic lines",
        "Isogonic lines",
        "Tie line",
        "Base line"
      ],
      "correctOptionIndex": 1,
      "explanation": "Isogonic lines are imaginary lines connecting points on the earth's surface that have the same magnetic declination. (Agonic lines have zero declination).",
      "topic": "Isogonic lines"
    },
    {
      "id": "bq-pyq200-q047",
      "questionNumber": 47,
      "question": "The fore bearing of a line is S 45° 10' E find the back bearing",
      "options": [
        "45°-10'",
        "N 45° 10' W",
        "225°-10'",
        "134°-50'"
      ],
      "correctOptionIndex": 1,
      "explanation": "To convert Fore Bearing to Back Bearing in Quadrantal system, retain numerical angle and reverse quadrant letters: S 45°10' E becomes N 45°10' W.",
      "topic": "Fore and Back bearing"
    },
    {
      "id": "bq-pyq200-q048",
      "questionNumber": 48,
      "question": "The magnetic bearing of a line is 190° and the magnetic declination is 2° W. Find the true bearing of the line",
      "options": [
        "190°",
        "188°",
        "192°",
        "None of these"
      ],
      "correctOptionIndex": 1,
      "explanation": "True Bearing = Magnetic Bearing ± Declination = 190° - 2° (West declination is subtracted) = 188°.",
      "topic": "True Bearing calculation"
    },
    {
      "id": "bq-pyq200-q049",
      "questionNumber": 49,
      "question": "The permissible error in prismatic compass survey is",
      "options": [
        "1 in 20°",
        "1 in 120°",
        "1 in 340°",
        "1 in 220°"
      ],
      "correctOptionIndex": 2,
      "explanation": "In prismatic compass surveying, the permissible error of closure is generally specified as 1 in 340 (or an angular limit of 20').",
      "topic": "Permissible error in compass"
    },
    {
      "id": "bq-pyq200-q050",
      "questionNumber": 50,
      "question": "Meridian joining earth's true north and south is called",
      "options": [
        "Assumed meridian",
        "Arbitrary meridian",
        "Magnetic meridian",
        "True meridian"
      ],
      "correctOptionIndex": 3,
      "explanation": "The true meridian is the imaginary great circle passing through the geographical north and south poles of the earth and the observer's position.",
      "topic": "True meridian"
    },
    {
      "id": "bq-pyq200-q051",
      "questionNumber": 51,
      "question": "Convert Q.B., S 45° 00' E into W.C.B.",
      "options": [
        "45° 00'",
        "135° 00'",
        "225° 00'",
        "335° 00'"
      ],
      "correctOptionIndex": 1,
      "explanation": "S 45° 00' E lies in the second quadrant (SE). WCB = 180° - 45°00' = 135° 00'.",
      "topic": "WCB conversion"
    },
    {
      "id": "bq-pyq200-q052",
      "questionNumber": 52,
      "question": "W.C.B. of a survey line is determined using",
      "options": [
        "prismatic compass",
        "surveyor's compass",
        "trough compass",
        "circular compass"
      ],
      "correctOptionIndex": 0,
      "explanation": "A prismatic compass reads Whole Circle Bearings (0° to 360°) directly through its viewing prism.",
      "topic": "Prismatic compass"
    },
    {
      "id": "bq-pyq200-q053",
      "questionNumber": 53,
      "question": "Theoretical sum of interior angles of a closed irregular hexagon is:",
      "options": [
        "180°",
        "360°",
        "600°",
        "720°"
      ],
      "correctOptionIndex": 3,
      "explanation": "The theoretical sum of interior angles of a closed polygon with n sides is (2n - 4) × 90°. For a hexagon (n = 6): (12 - 4) × 90° = 720°.",
      "topic": "Traverse angle check"
    },
    {
      "id": "bq-pyq200-q054",
      "questionNumber": 54,
      "question": "Convert W.C.B. 320° 00' into Q.B.",
      "options": [
        "N 40° 00' W",
        "N 50° 00' W",
        "S 140° 00' W",
        "W 140° 00' S"
      ],
      "correctOptionIndex": 0,
      "explanation": "A WCB of 320° 00' lies in the 4th quadrant (NW). Reduced Bearing = 360° - 320°00' = N 40° 00' W.",
      "topic": "Reduced bearing"
    },
    {
      "id": "bq-pyq200-q055",
      "questionNumber": 55,
      "question": "0° is engraved at ___________ of the graduated ring of the prismatic compass.",
      "options": [
        "North",
        "East",
        "South",
        "West"
      ],
      "correctOptionIndex": 2,
      "explanation": "In a prismatic compass, 0° is graduated at the South end of the ring because reading is done through the prism at the diametrically opposite side.",
      "topic": "Prismatic compass graduations"
    },
    {
      "id": "bq-pyq200-q056",
      "questionNumber": 56,
      "question": "W.C.B. is always reckoned from",
      "options": [
        "North",
        "East",
        "South",
        "West"
      ],
      "correctOptionIndex": 0,
      "explanation": "Whole Circle Bearing (WCB) is always measured clockwise starting from the magnetic or true North direction.",
      "topic": "WCB convention"
    },
    {
      "id": "bq-pyq200-q057",
      "questionNumber": 57,
      "question": "Magnetic bearing of a line determined was 140° but later it was found that Declination at the place is 2° W. Find the true bearing of the line.",
      "options": [
        "40°",
        "50°",
        "138°",
        "142°"
      ],
      "correctOptionIndex": 2,
      "explanation": "True Bearing = Magnetic Bearing ± Declination. Here Magnetic Bearing = 140°, Declination = 2° W. True Bearing = 140° - 2° = 138°.",
      "topic": "True Bearing calculation"
    },
    {
      "id": "bq-pyq200-q058",
      "questionNumber": 58,
      "question": "Change in declination at place happening in 24 hours is type of variation.",
      "options": [
        "Secular",
        "Diurnal",
        "Annual",
        "Irregular"
      ],
      "correctOptionIndex": 1,
      "explanation": "Diurnal variation is the daily cyclic oscillation of the magnetic needle caused by the rotation of the earth and solar radiation over 24 hours.",
      "topic": "Declination variations"
    },
    {
      "id": "bq-pyq200-q059",
      "questionNumber": 59,
      "question": "F.B. of RS is S 45° 15' E. F.B. of PR is S 30° 00' E. Included angle PRS measured in clockwise direction is:",
      "options": [
        "104° 45'",
        "134° 45'",
        "164° 45'",
        "195° 15'"
      ],
      "correctOptionIndex": 2,
      "explanation": "Included angle at station R: Computed from the back bearing of PR and forward bearing of RS; measured clockwise as 164° 45'.",
      "topic": "Included angles"
    },
    {
      "id": "bq-pyq200-q060",
      "questionNumber": 60,
      "question": "Magnetic equator is an example for",
      "options": [
        "Isogonic line",
        "Agonic line",
        "Isoclinic line",
        "Aclinic line"
      ],
      "correctOptionIndex": 3,
      "explanation": "The magnetic equator is an aclinic line where the magnetic dip is zero (the magnetic needle remains horizontal).",
      "topic": "Magnetic lines"
    },
    {
      "id": "bq-pyq200-q061",
      "questionNumber": 61,
      "question": "F.B. of CD is 30°. FB of DE is 260°. Find ∠CDE measured in clockwise direction:",
      "options": [
        "50°",
        "80°",
        "230°",
        "290°"
      ],
      "correctOptionIndex": 0,
      "explanation": "Deflection angle / included angle between CD (FB = 30°) and DE (FB = 260°): Clockwise angle ∠CDE = 50°.",
      "topic": "Deflection angle"
    },
    {
      "id": "bq-pyq200-q062",
      "questionNumber": 62,
      "question": "Bearing measured in the direction of the progress of surveying is called",
      "options": [
        "Fore bearing",
        "Back bearing",
        "Intermediate bearing",
        "Reverse bearing"
      ],
      "correctOptionIndex": 0,
      "explanation": "The bearing of a survey line measured in the direction of the forward progress of the survey is the Fore Bearing (FB).",
      "topic": "Fore bearing"
    },
    {
      "id": "bq-pyq200-q063",
      "questionNumber": 63,
      "question": "F.B. of a line PQ is 140°. What is the F.B. of the line QP ?",
      "options": [
        "40°",
        "180°",
        "230°",
        "320°"
      ],
      "correctOptionIndex": 3,
      "explanation": "If Fore Bearing of PQ = 140°, the Fore Bearing of QP is its Back Bearing: BB = 140° + 180° = 320°.",
      "topic": "Back bearing"
    },
    {
      "id": "bq-pyq200-q064",
      "questionNumber": 64,
      "question": "Vertical angle with which magnetic needle makes with the horizontal is called",
      "options": [
        "Declination",
        "Transiting",
        "Swinging",
        "Dip"
      ],
      "correctOptionIndex": 3,
      "explanation": "Magnetic dip is the vertical inclination that a freely suspended magnetic needle makes with the horizontal plane.",
      "topic": "Dip"
    },
    {
      "id": "bq-pyq200-q065",
      "questionNumber": 65,
      "question": "Which method of plane table survey is also used for plotting the distant and inaccessible objects, broken boundaries, river etc?",
      "options": [
        "Intersection method",
        "Radiation method",
        "Traversing",
        "Resection"
      ],
      "correctOptionIndex": 0,
      "explanation": "The intersection method in plane tabling is ideal for mapping distant, inaccessible points, river boundaries, and broken ground without measuring distances on ground.",
      "topic": "Intersection"
    },
    {
      "id": "bq-pyq200-q066",
      "questionNumber": 66,
      "question": "The process of putting the positions occupied by the board at various survey stations are kept parallel is known as",
      "options": [
        "Centering the plane table",
        "Levelling the plane table",
        "Orienting the plane table",
        "Traversing the plane table"
      ],
      "correctOptionIndex": 2,
      "explanation": "Orientation is the process of keeping the plane table at each successive station parallel to the position it occupied at the first station.",
      "topic": "Orientation"
    },
    {
      "id": "bq-pyq200-q067",
      "questionNumber": 67,
      "question": "What is the name of method used in plane table survey similar to that of compass survey?",
      "options": [
        "Radiation",
        "Intersection",
        "Resection",
        "Traversing"
      ],
      "correctOptionIndex": 3,
      "explanation": "Plane table traversing is similar to compass traversing, running a connected series of lines from station to station.",
      "topic": "Traversing"
    },
    {
      "id": "bq-pyq200-q068",
      "questionNumber": 68,
      "question": "Which type of survey cannot be done in dense wooded areas?",
      "options": [
        "Chain survey",
        "Compass survey",
        "Plane table survey",
        "Theodolite survey"
      ],
      "correctOptionIndex": 2,
      "explanation": "Plane table surveying requires unobstructed sight lines and daylight; it cannot be effectively conducted in dense wooded forests or wet rainy climates.",
      "topic": "Suitability"
    },
    {
      "id": "bq-pyq200-q069",
      "questionNumber": 69,
      "question": "The three points problem may be solved by",
      "options": [
        "Tracing paper method",
        "Bessel's method",
        "Trial and Error method",
        "All of the above"
      ],
      "correctOptionIndex": 3,
      "explanation": "The three-point problem in plane tabling can be solved by mechanical (tracing paper), graphical (Bessel's / cutting arcs), and trial & error (Lehmann's) methods.",
      "topic": "Three point problem"
    },
    {
      "id": "bq-pyq200-q070",
      "questionNumber": 70,
      "question": "Instrument used for sighting objects and drawing rays in plane tabling is",
      "options": [
        "Alidade",
        "Trough compass",
        "Spirit level",
        "Plumb-bob"
      ],
      "correctOptionIndex": 0,
      "explanation": "An alidade (plain or telescopic) is the primary sighting and ray-drawing instrument used in plane table surveying.",
      "topic": "Alidade"
    },
    {
      "id": "bq-pyq200-q071",
      "questionNumber": 71,
      "question": "___________ surveying can be performed without field book.",
      "options": [
        "Plane table",
        "Chain",
        "Compass",
        "Theodolite"
      ],
      "correctOptionIndex": 0,
      "explanation": "In plane table surveying, observations and plotting are performed concurrently in the field on the drawing board, eliminating the need for a field notebook.",
      "topic": "Field work"
    },
    {
      "id": "bq-pyq200-q072",
      "questionNumber": 72,
      "question": "Which of the following plane table method involves in finding an instrument station ?",
      "options": [
        "Resection",
        "Radiation",
        "Intersection",
        "Traversing"
      ],
      "correctOptionIndex": 0,
      "explanation": "Resection is the plane table method where the position of an unknown occupied instrument station is located on the drawing board by sighting known visible stations.",
      "topic": "Resection"
    },
    {
      "id": "bq-pyq200-q073",
      "questionNumber": 73,
      "question": "Bessel's solution to three point problem is related to",
      "options": [
        "Trial and error method",
        "Tracing paper method",
        "Mechanical method",
        "Graphical method"
      ],
      "correctOptionIndex": 3,
      "explanation": "Bessel's method of inscribed circles is an exact graphical solution to the three-point problem in plane tabling.",
      "topic": "Bessel's method"
    },
    {
      "id": "bq-pyq200-q074",
      "questionNumber": 74,
      "question": "Principle of plane table surveying is",
      "options": [
        "Triangulation",
        "Offsetting",
        "Orientation",
        "Levelling"
      ],
      "correctOptionIndex": 2,
      "explanation": "The fundamental principle of plane table surveying is orientation by parallelism, keeping the table board parallel to its orientation at preceding stations.",
      "topic": "Principles"
    },
    {
      "id": "bq-pyq200-q075",
      "questionNumber": 75,
      "question": "What is the term that is normal to plumb line at all points?",
      "options": [
        "Level surface",
        "Datum surface",
        "Horizontal surface",
        "Vertical surface"
      ],
      "correctOptionIndex": 0,
      "explanation": "A level surface is a curved surface that is concentric with the mean spheroidal shape of the earth and perpendicular (normal) to the gravity plumb line at every point.",
      "topic": "Level surface"
    },
    {
      "id": "bq-pyq200-q076",
      "questionNumber": 76,
      "question": "What is the benchmarks established between the G.T.S. benchmarks by the state PWD is known as",
      "options": [
        "Arbitrary benchmark",
        "Permanent benchmark",
        "Temporary benchmark",
        "G.T.S. benchmark"
      ],
      "correctOptionIndex": 1,
      "explanation": "Permanent benchmarks are fixed, durable reference points established by government departments (PWD, Railways) between primary G.T.S. benchmarks.",
      "topic": "Benchmarks"
    },
    {
      "id": "bq-pyq200-q077",
      "questionNumber": 77,
      "question": "Which level is used for precise levelling work?",
      "options": [
        "Auto level",
        "Dumpy level",
        "Wye level",
        "Tilting level"
      ],
      "correctOptionIndex": 3,
      "explanation": "A tilting level allows the telescope with its bubble tube to be tilted slightly in the vertical plane using a micrometer screw, making it suitable for precise levelling.",
      "topic": "Tilting level"
    },
    {
      "id": "bq-pyq200-q078",
      "questionNumber": 78,
      "question": "In which staff consist of three parts and one slides into another?",
      "options": [
        "Telescopic staff",
        "Invar staff",
        "Target staff",
        "Folding staff"
      ],
      "correctOptionIndex": 0,
      "explanation": "A Sopwith telescopic staff consists of three sliding telescopic lengths made of seasoned wood or aluminum, extending up to 4 or 5 meters.",
      "topic": "Levelling staff"
    },
    {
      "id": "bq-pyq200-q079",
      "questionNumber": 79,
      "question": "What is the smallest graduated division in levelling staff?",
      "options": [
        "0.5 m",
        ".05 m",
        ".005 m",
        "0.0005m"
      ],
      "correctOptionIndex": 2,
      "explanation": "The smallest graduation mark on a standard metric levelling staff is 5 mm (0.005 m).",
      "topic": "Staff least count"
    },
    {
      "id": "bq-pyq200-q080",
      "questionNumber": 80,
      "question": "Which method of contour is suitable for small and undulating area?",
      "options": [
        "By levelling method",
        "By cross section",
        "By tacheometric method",
        "By square method"
      ],
      "correctOptionIndex": 3,
      "explanation": "The square (grid) method is ideal for contouring small, undulating, and moderately flat building sites.",
      "topic": "Contouring methods"
    },
    {
      "id": "bq-pyq200-q081",
      "questionNumber": 81,
      "question": "Which method is not included in the interpolation of contours?",
      "options": [
        "Estimation",
        "Arithmetical calculation",
        "Cross section",
        "Graphical"
      ],
      "correctOptionIndex": 2,
      "explanation": "Cross-sectioning is a field method used to collect elevation data, not an interpolation technique. Contour interpolation is performed by estimation, arithmetic calculation, or graphical methods.",
      "topic": "Interpolation"
    },
    {
      "id": "bq-pyq200-q082",
      "questionNumber": 82,
      "question": "Combined correction for curvature and refraction is",
      "options": [
        "0.6723 D²",
        "0.0673 D²",
        "0.0112 D²",
        "0.112 D²"
      ],
      "correctOptionIndex": 1,
      "explanation": "Combined correction for earth curvature and atmospheric refraction is C_comb = C_c - C_r = 0.0785 D² - 0.0112 D² = 0.0673 D² meters (where D is in km).",
      "topic": "Curvature and Refraction"
    },
    {
      "id": "bq-pyq200-q083",
      "questionNumber": 83,
      "question": "What is the name of the staff 3m long and the band fitted is graduated in mm used for percise levelling?",
      "options": [
        "Invar Staff",
        "Telescopic staff",
        "Target Staff",
        "Folding staff"
      ],
      "correctOptionIndex": 0,
      "explanation": "An invar levelling staff has an invar alloy ribbon fitted with millimeter graduations under spring tension, ensuring minimal thermal expansion for precise levelling.",
      "topic": "Invar staff"
    },
    {
      "id": "bq-pyq200-q084",
      "questionNumber": 84,
      "question": "What R.F. is select for drawing town planning schemes, reservoirs etc?",
      "options": [
        "1/1000",
        "1/5000",
        "1/100",
        "1/100000"
      ],
      "correctOptionIndex": 1,
      "explanation": "For reservoir surveys, town planning, and catchment mapping, small to intermediate representative fractions such as 1/5000 (or 1/2500) are standard.",
      "topic": "Contour scales"
    },
    {
      "id": "bq-pyq200-q085",
      "questionNumber": 85,
      "question": "Contour lines of different elevations can unite to form one line in ______",
      "options": [
        "Vertical cliff",
        "Overhanging cliff",
        "Hill",
        "Valley"
      ],
      "correctOptionIndex": 0,
      "explanation": "Contour lines of different elevations coalesce into a single line along a vertical cliff (and cross each other only in an overhanging cliff or cave).",
      "topic": "Vertical cliff"
    },
    {
      "id": "bq-pyq200-q086",
      "questionNumber": 86,
      "question": "The method of indirect levelling in which the relative elevations of different points are obtained by measuring the vertical angles and horizontal distance is known as",
      "options": [
        "Barometric levelling",
        "Hypsometry",
        "Trigonometrical levelling",
        "Check Levelling"
      ],
      "correctOptionIndex": 2,
      "explanation": "Trigonometrical levelling is an indirect method where the relative difference in elevation is computed from measured vertical angles and horizontal distances.",
      "topic": "Trigonometrical levelling"
    },
    {
      "id": "bq-pyq200-q087",
      "questionNumber": 87,
      "question": "What benchmark is established for short duration such as at the end of a day's work?",
      "options": [
        "Arbitrary benchmark",
        "Temporary benchmark",
        "Permanent benchmark",
        "G.T.S. benchmark"
      ],
      "correctOptionIndex": 1,
      "explanation": "A temporary benchmark (TBM) is established at the close of a day's work on a permanent object (culvert, rock) so that levelling can resume the next day.",
      "topic": "Temporary benchmark"
    },
    {
      "id": "bq-pyq200-q088",
      "questionNumber": 88,
      "question": "Which instrument is used to establishing grade contour?",
      "options": [
        "Prismatic compass",
        "Telescopic alidade",
        "Abney level",
        "Pentagraph"
      ],
      "correctOptionIndex": 2,
      "explanation": "An Abney level is a hand-held clinometer/level used for measuring ground slope and setting out grade contours in road reconnaissance.",
      "topic": "Abney level"
    },
    {
      "id": "bq-pyq200-q089",
      "questionNumber": 89,
      "question": "Which is prismoidal formula for volume?",
      "options": [
        "L/6 (A1 + 4A2 + A3)",
        "L/3 (A1 + 4A2 + A3)",
        "L/2 (A1 + 4A2 + A3)",
        "L (A1 + 4A2 + A3)"
      ],
      "correctOptionIndex": 0,
      "explanation": "The Prismoidal formula for volume between three equidistant parallel cross-sections of spacing L is V = (L / 6) × [A1 + 4A2 + A3].",
      "topic": "Prismoidal formula"
    },
    {
      "id": "bq-pyq200-q090",
      "questionNumber": 90,
      "question": "Boundary of a catchment area will be",
      "options": [
        "Longitudinal line",
        "Datum",
        "Ridge line",
        "Valley line"
      ],
      "correctOptionIndex": 2,
      "explanation": "The natural boundary of a catchment/watershed basin separating drainage basins is the ridge line (watershed divide).",
      "topic": "Catchment boundary"
    },
    {
      "id": "bq-pyq200-q091",
      "questionNumber": 91,
      "question": "Which of the following level's telescope can be rotated by surveyor in vertical plane in a smaller amount ?",
      "options": [
        "Dumpy level",
        "Wye level",
        "Auto level",
        "Tilting level"
      ],
      "correctOptionIndex": 3,
      "explanation": "A tilting level possesses a micrometer tilting screw that tilts the telescope slightly in the vertical plane to level the line of sight precisely.",
      "topic": "Tilting level"
    },
    {
      "id": "bq-pyq200-q092",
      "questionNumber": 92,
      "question": "Station where which B.S. and F.S. are taken is called",
      "options": [
        "Intersection point",
        "Forward point",
        "Tangent point",
        "Change point --"
      ],
      "correctOptionIndex": 3,
      "explanation": "A change point (turning point) is a temporary staff station on which both a Fore Sight (FS) and Back Sight (BS) are taken to transfer the line of collimation.",
      "topic": "Change point"
    },
    {
      "id": "bq-pyq200-q093",
      "questionNumber": 93,
      "question": "Contour lines merge in the case of",
      "options": [
        "Overhanging cliff",
        "Vertical cliff",
        "Hill",
        "Pond"
      ],
      "correctOptionIndex": 1,
      "explanation": "Contour lines merge together into a single line at a vertical cliff, where points of different elevations share the exact same horizontal coordinate.",
      "topic": "Vertical cliff"
    },
    {
      "id": "bq-pyq200-q094",
      "questionNumber": 94,
      "question": "Following observations were done in reciprocal leveling. Find level difference between A and B: Dumpy level at A: staff reading at A = 1.000 m, staff reading at B = 2.500 m. Dumpy level at B: staff reading at A = 1.300 m, staff reading at B = 2.700 m.",
      "options": [
        "1.400 m",
        "1.450 m",
        "1.500 m",
        "2.900 m"
      ],
      "correctOptionIndex": 1,
      "explanation": "True level difference by reciprocal levelling: h = [(Staff_B1 - Staff_A1) + (Staff_B2 - Staff_A2)] / 2 = [(2.500 - 1.000) + (2.700 - 1.300)] / 2 = [1.500 + 1.400] / 2 = 1.450 m.",
      "topic": "Reciprocal levelling"
    },
    {
      "id": "bq-pyq200-q095",
      "questionNumber": 95,
      "question": "Gradient existing between two points is found to be 1 in 1000. Level difference between same points is 5.00 m. Find distance between two points:",
      "options": [
        "50 m",
        "0.500 km",
        "1000 m",
        "5 km"
      ],
      "correctOptionIndex": 3,
      "explanation": "Gradient = Fall / Distance => 1/1000 = 5.00 m / Distance => Distance = 5.00 × 1000 = 5000 m = 5 km.",
      "topic": "Gradient"
    },
    {
      "id": "bq-pyq200-q096",
      "questionNumber": 96,
      "question": "In levelling operation, the point of known elevation is termed as",
      "options": [
        "Bench mark",
        "Contour",
        "Plane",
        "Backsight"
      ],
      "correctOptionIndex": 0,
      "explanation": "A Bench Mark (BM) is a permanent, well-defined point of known elevation above a chosen reference datum.",
      "topic": "Bench mark"
    },
    {
      "id": "bq-pyq200-q097",
      "questionNumber": 97,
      "question": "Last level reading taken before shifting a level is entered as",
      "options": [
        "FS",
        "BS",
        "IS",
        "LS"
      ],
      "correctOptionIndex": 0,
      "explanation": "Fore Sight (FS) is the last staff reading taken in a levelling setup before moving or shifting the instrument.",
      "topic": "Fore sight"
    },
    {
      "id": "bq-pyq200-q098",
      "questionNumber": 98,
      "question": "RL of BM is 100.000. Without taking reading on BM another two staff readings, 1.000 and 3.000 were observed. What is the level difference between these two points ?",
      "options": [
        "Can't determine",
        "1.000",
        "2.000",
        "4.000"
      ],
      "correctOptionIndex": 2,
      "explanation": "Level difference = Difference between staff readings taken from the same instrument setup = 3.000 m - 1.000 m = 2.000 m.",
      "topic": "Staff reading difference"
    },
    {
      "id": "bq-pyq200-q099",
      "questionNumber": 99,
      "question": "Imaginary line formed by joining points of equal elevations on earth's surface is called",
      "options": [
        "contour",
        "section",
        "bench mark",
        "single plane"
      ],
      "correctOptionIndex": 0,
      "explanation": "A contour line is an imaginary line on the ground connecting points having the same elevation above a datum surface.",
      "topic": "Contour line"
    },
    {
      "id": "bq-pyq200-q100",
      "questionNumber": 100,
      "question": "Closely spaced contours indicate",
      "options": [
        "flat",
        "steep slope",
        "gentle slope",
        "mild slope"
      ],
      "correctOptionIndex": 1,
      "explanation": "When contour lines are closely spaced together, they indicate a steep slope; widely spaced contours indicate a gentle or flat slope.",
      "topic": "Contour spacing"
    }
  ]
};

export const PYQ_PAPER_106_2017: PYQPaper = {
  "id": "pyq-paper-106-2017",
  "title": "Kerala Water Authority (KWA) Surveyor Grade II (Paper 106/2017)",
  "examName": "Surveyor Grade II / Tracer (KWA)",
  "examCode": "Cat. No: 692/2022 • Paper 106/2017",
  "year": 2017,
  "department": "Kerala Water Authority (KWA)",
  "totalQuestions": 80,
  "pdfUrl": "https://example.com/pyq/kwa_surveyor_gr2_paper_106_2017.pdf",
  "answerKeyUrl": "https://example.com/pyq/kwa_surveyor_gr2_paper_106_2017_key.pdf",
  "isSolved": true,
  "questions": [
    {
      "id": "bq-pyq200-q101",
      "questionNumber": 1,
      "question": "___________ is the equation for finding correction value for refraction.",
      "options": [
        "0.0005 D²",
        "0.0112 D²",
        "0.0673 D²",
        "0.0785 D²"
      ],
      "correctOptionIndex": 1,
      "explanation": "Atmospheric refraction bends the line of sight downward toward the earth, giving a correction of C_r = +0.0112 D² meters (where D is distance in km).",
      "topic": "Refraction correction"
    },
    {
      "id": "bq-pyq200-q102",
      "questionNumber": 2,
      "question": "Slope along the longitudinal direction is often termed as",
      "options": [
        "Gradient",
        "Transverse slope",
        "Section",
        "Camber"
      ],
      "correctOptionIndex": 0,
      "explanation": "The rate of rise or fall of the ground surface along the longitudinal direction of a road, canal, or railway is termed the gradient.",
      "topic": "Gradient"
    },
    {
      "id": "bq-pyq200-q103",
      "questionNumber": 3,
      "question": "Level reading taken on a BM is 2.000. RL of BM is 10.000. Then a level reading of 3.500 was taken on top of a stake. Find the RL of the top of the stake:",
      "options": [
        "98.500",
        "12.000",
        "8.500",
        "8.000"
      ],
      "correctOptionIndex": 2,
      "explanation": "Height of Instrument (HI) = RL of BM + Staff Reading on BM = 10.000 + 2.000 = 12.000 m. RL of Stake = HI - Reading on Stake = 12.000 - 3.500 = 8.500 m.",
      "topic": "HI method"
    },
    {
      "id": "bq-pyq200-q104",
      "questionNumber": 4,
      "question": "Equal gradient lines along a slope are called",
      "options": [
        "Grade contours",
        "Contour gradients",
        "Vertical equivalents",
        "Horizontal equivalents"
      ],
      "correctOptionIndex": 0,
      "explanation": "A grade contour is a line on the ground along which a constant uniform slope (gradient) is maintained.",
      "topic": "Grade contours"
    },
    {
      "id": "bq-pyq200-q105",
      "questionNumber": 5,
      "question": "The latitude and departure with reference to preceding point are known as _____",
      "options": [
        "Independent co-ordinate",
        "Consecutive co-ordinate",
        "Close co-ordinate",
        "Origin co-ordinate"
      ],
      "correctOptionIndex": 1,
      "explanation": "Consecutive coordinates (latitude and departure) of a station are computed with reference to the immediately preceding traverse station.",
      "topic": "Coordinates"
    },
    {
      "id": "bq-pyq200-q106",
      "questionNumber": 6,
      "question": "What is the type of angle useful for alignment of highways, railways, canals etc?",
      "options": [
        "Deflection angle",
        "Direct angle",
        "Azimuth angle",
        "Chain angle"
      ],
      "correctOptionIndex": 0,
      "explanation": "Deflection angles (angle between prolongation of preceding line and forward line) are extensively used for route surveying of highways, railways, and canals.",
      "topic": "Deflection angle"
    },
    {
      "id": "bq-pyq200-q107",
      "questionNumber": 7,
      "question": "What is the test carried in theodolite to make the horizontal axis perpendicular to the vertical axis?",
      "options": [
        "Plate level",
        "Collimation test",
        "Spire test",
        "Cross-hair ring test"
      ],
      "correctOptionIndex": 2,
      "explanation": "The Spire test (horizontal axis test) is performed to ensure that the horizontal trunnion axis is perpendicular to the vertical axis of the theodolite.",
      "topic": "Spire test"
    },
    {
      "id": "bq-pyq200-q108",
      "questionNumber": 8,
      "question": "When the angular measurements are more precise than the linear measurements, balancing the traverse is done by",
      "options": [
        "Bowditch's method",
        "Transit rule method",
        "Graphical methods",
        "Axis method"
      ],
      "correctOptionIndex": 1,
      "explanation": "The Transit rule is applied to adjust traverse misclosure when angular measurements are more precise than linear measurements.",
      "topic": "Traverse balancing"
    },
    {
      "id": "bq-pyq200-q109",
      "questionNumber": 9,
      "question": "The chord between two successive regular stations on a curve is known as _____",
      "options": [
        "Long chord",
        "Mid chord",
        "Normal chord",
        "Intersection chord"
      ],
      "correctOptionIndex": 2,
      "explanation": "In curve layout, a normal chord is the full standard chord between two consecutive full chainage peg stations on a circular curve.",
      "topic": "Normal chord"
    },
    {
      "id": "bq-pyq200-q110",
      "questionNumber": 10,
      "question": "What is the multiplying constant, if adopting anallatic lens in the telescope of a tacheometer?",
      "options": [
        "10",
        "20",
        "30",
        "100"
      ],
      "correctOptionIndex": 3,
      "explanation": "An anallatic lens placed between the objective and eyepiece eliminates the additive constant (f + d = 0), leaving the multiplying constant k = f/i = 100.",
      "topic": "Anallatic lens"
    },
    {
      "id": "bq-pyq200-q111",
      "questionNumber": 11,
      "question": "What is the distance between point of intersection to point of tangency?",
      "options": [
        "Length of the curve",
        "External distance",
        "Tangent distance",
        "Long chord"
      ],
      "correctOptionIndex": 2,
      "explanation": "Tangent distance is the straight distance measured from the Point of Intersection (V) to either Point of Tangency (T1 or T2): T = R tan(∆/2).",
      "topic": "Tangent distance"
    },
    {
      "id": "bq-pyq200-q112",
      "questionNumber": 12,
      "question": "Which curve is generally introduced on highway between a straight and circular curve to provide ease and gradual change of direction?",
      "options": [
        "Simple",
        "Compound",
        "Reverse",
        "Transition"
      ],
      "correctOptionIndex": 3,
      "explanation": "A transition curve (clothoid / spiral) provides a gradual transition from zero curvature on a tangent to the finite radius of a circular curve, preventing sudden centrifugal jerks.",
      "topic": "Transition curve"
    },
    {
      "id": "bq-pyq200-q113",
      "questionNumber": 13,
      "question": "Which method is used for short traverse in theodolite survey?",
      "options": [
        "Fast needle method",
        "Direct method",
        "Loose needle method",
        "Included angle method"
      ],
      "correctOptionIndex": 0,
      "explanation": "The fast needle method is used for running short traverse lines using the theodolite's compass without individual vernier angle computations.",
      "topic": "Fast needle method"
    },
    {
      "id": "bq-pyq200-q114",
      "questionNumber": 14,
      "question": "What is the multiplying constant in tacheometric survey?",
      "options": [
        "(f/i)",
        "(f+d)",
        "(f+i)",
        "(f/d)"
      ],
      "correctOptionIndex": 0,
      "explanation": "In tacheometry, the multiplying constant is given by the focal length divided by stadia hair interval: k = f / i (normally designed as 100).",
      "topic": "Multiplying constant"
    },
    {
      "id": "bq-pyq200-q115",
      "questionNumber": 15,
      "question": "The fine adjustment in theodolite is done by",
      "options": [
        "focusing screw",
        "tangent screw",
        "clamb screw",
        "foot screw"
      ],
      "correctOptionIndex": 1,
      "explanation": "In a theodolite, after clamping the motion screw, fine adjustment and precision sighting of the crosshairs is made using the tangent (slow-motion) screw.",
      "topic": "Tangent screw"
    },
    {
      "id": "bq-pyq200-q116",
      "questionNumber": 16,
      "question": "The face left position is also called",
      "options": [
        "Telescope inverted",
        "Telescope normal",
        "Telescope reversed",
        "None of these"
      ],
      "correctOptionIndex": 1,
      "explanation": "Telescope normal (or face left) describes the position where the vertical circle is situated to the observer's left when looking through the eyepiece.",
      "topic": "Telescope normal"
    },
    {
      "id": "bq-pyq200-q117",
      "questionNumber": 17,
      "question": "Which of the following is not a traversing method?",
      "options": [
        "Plane table traversing",
        "Theodolite traversing",
        "Open traversing",
        "Chain traversing"
      ],
      "correctOptionIndex": 2,
      "explanation": "Open traversing is a geometric classification of traverse paths (unclosed), whereas chain, compass, theodolite, and plane table traversing are instrument methods.",
      "topic": "Traversing methods"
    },
    {
      "id": "bq-pyq200-q118",
      "questionNumber": 18,
      "question": "The telescope is rotated in horizontal plane relative to which axis?",
      "options": [
        "Vertical axis",
        "Horizontal axis",
        "Trunnion axis",
        "Plate bubble tube axis"
      ],
      "correctOptionIndex": 2,
      "explanation": "The telescope of a theodolite rotates in a horizontal plane about its vertical axis. Note: in official PSC provisional key Trunnion axis is given as (C).",
      "topic": "Theodolite axes"
    },
    {
      "id": "bq-pyq200-q119",
      "questionNumber": 19,
      "question": "Imaginary line joining centre of the eyepiece and the objective of the telescope is",
      "options": [
        "Line of collimation",
        "Axis of bubble tube",
        "Axis of altitude bubble",
        "Axis of telescope"
      ],
      "correctOptionIndex": 3,
      "explanation": "The imaginary line connecting the optical center of the objective lens and the center of the eyepiece is the optical axis of the telescope.",
      "topic": "Axis of telescope"
    },
    {
      "id": "bq-pyq200-q120",
      "questionNumber": 20,
      "question": "Horizontal angle as well as vertical angle can be measured using a",
      "options": [
        "Theodolite",
        "Dumpy level",
        "Compass",
        "Plane table"
      ],
      "correctOptionIndex": 0,
      "explanation": "A transit theodolite is designed to measure both horizontal and vertical angles with high precision.",
      "topic": "Theodolite"
    },
    {
      "id": "bq-pyq200-q121",
      "questionNumber": 21,
      "question": "Point where the circular curve begins is called as",
      "options": [
        "P.T.",
        "P.C.",
        "P.I.",
        "C.P."
      ],
      "correctOptionIndex": 1,
      "explanation": "The Point of Curve (P.C.) is the tangent-curve junction where the circular curve begins. Point of Tangency (P.T.) is where it ends.",
      "topic": "Point of Curve"
    },
    {
      "id": "bq-pyq200-q122",
      "questionNumber": 22,
      "question": "Projection of a survey line onto N-S line is termed as",
      "options": [
        "Closing error",
        "Latitude",
        "Departure",
        "Random line"
      ],
      "correctOptionIndex": 1,
      "explanation": "The projection of a traverse survey line onto the North-South reference meridian is called its Latitude (L = l cos θ).",
      "topic": "Latitude"
    },
    {
      "id": "bq-pyq200-q123",
      "questionNumber": 23,
      "question": "Which of the following is known as the ideal transition curve ?",
      "options": [
        "Froude's curve",
        "Bernoulli's lemniscate",
        "Cubic parabola",
        "Clothoid"
      ],
      "correctOptionIndex": 3,
      "explanation": "An ideal transition curve has a rate of change of radial acceleration that is uniform; the clothoid (Euler spiral) meets this condition with curvature increasing linearly with length.",
      "topic": "Transition curves"
    },
    {
      "id": "bq-pyq200-q124",
      "questionNumber": 24,
      "question": "Process of revolving telescope of theodolite in the horizontal plane with respect to vertical axis of the theodolite is called",
      "options": [
        "Transiting",
        "Reversing",
        "Swinging",
        "Plunging"
      ],
      "correctOptionIndex": 2,
      "explanation": "Swinging the theodolite is the operation of rotating the telescope about the vertical axis in a horizontal plane.",
      "topic": "Swinging the telescope"
    },
    {
      "id": "bq-pyq200-q125",
      "questionNumber": 25,
      "question": "Angle subtended by radius at the centre of the curve is called as",
      "options": [
        "Deflection angle",
        "Intersection angle",
        "Direct angle",
        "Central angle"
      ],
      "correctOptionIndex": 3,
      "explanation": "The angle subtended at the center of a circular curve by the arc connecting two tangent points is called the central angle (equal to the total deflection angle ∆).",
      "topic": "Central angle"
    },
    {
      "id": "bq-pyq200-q126",
      "questionNumber": 26,
      "question": "Angle between the preceding line and succeeding line is called",
      "options": [
        "Bearing",
        "Direct angle",
        "Deflection angle",
        "Angle to the right"
      ],
      "correctOptionIndex": 2,
      "explanation": "The deflection angle is the angle between the prolongation of the preceding survey line and the forward succeeding survey line.",
      "topic": "Deflection angle"
    },
    {
      "id": "bq-pyq200-q127",
      "questionNumber": 27,
      "question": "The multiplying constant of a tacheometer fitted with an anallactic lens is",
      "options": [
        "0",
        "1",
        "100",
        "1000"
      ],
      "correctOptionIndex": 2,
      "explanation": "The multiplying constant of a tacheometer equipped with an anallatic lens is k = f/i = 100.",
      "topic": "Multiplying constant"
    },
    {
      "id": "bq-pyq200-q128",
      "questionNumber": 28,
      "question": "Which of the following is called as Easement curve ?",
      "options": [
        "Simple circular curve",
        "Compound curve",
        "Reverse curve",
        "Transition curve"
      ],
      "correctOptionIndex": 3,
      "explanation": "An easement curve is another engineering term for a transition curve, easing the change in curvature and super-elevation between tangents and circular arcs.",
      "topic": "Easement curve"
    },
    {
      "id": "bq-pyq200-q129",
      "questionNumber": 29,
      "question": "Two straights connected using a single arc of constant radius is known as",
      "options": [
        "Simple circular curve",
        "Compound curve",
        "Reverse curve",
        "Transition curve"
      ],
      "correctOptionIndex": 0,
      "explanation": "A simple circular curve consists of a single arc of constant radius connecting two intersecting straight tangents.",
      "topic": "Simple circular curve"
    },
    {
      "id": "bq-pyq200-q130",
      "questionNumber": 30,
      "question": "In India a curve is designated by",
      "options": [
        "Radius of the curve",
        "Degree of the curve",
        "Deflection angle",
        "Long chord"
      ],
      "correctOptionIndex": 1,
      "explanation": "In Indian railway and highway engineering practice, curves are designated by their degree of curvature (D) subtended by a standard 30 m or 20 m chord.",
      "topic": "Degree of curve"
    },
    {
      "id": "bq-pyq200-q131",
      "questionNumber": 31,
      "question": "Which of the following is also referred as versed sine of the curve ?",
      "options": [
        "Tangent length",
        "Long chord",
        "Apex distance",
        "Mid-ordinate"
      ],
      "correctOptionIndex": 3,
      "explanation": "The versed sine of a curve is the mid-ordinate (M), which is the perpendicular distance from the center of the long chord to the apex of the curve.",
      "topic": "Versed sine"
    },
    {
      "id": "bq-pyq200-q132",
      "questionNumber": 32,
      "question": "Which of the permanent adjustment test checks the perpendicularity between horizontal axis and vertical axis ?",
      "options": [
        "Plate level test",
        "Collimation test",
        "Spire test",
        "Azimuth test"
      ],
      "correctOptionIndex": 2,
      "explanation": "The Spire test checks and adjusts the horizontal trunnion axis to be perpendicular to the vertical axis of the theodolite.",
      "topic": "Spire test"
    },
    {
      "id": "bq-pyq200-q133",
      "questionNumber": 33,
      "question": "The most widely used antenna in GPS is",
      "options": [
        "Horn antenna",
        "Slotted antenna",
        "Parabolic antenna",
        "Micro strip antenna"
      ],
      "correctOptionIndex": 3,
      "explanation": "Microstrip patch antennas are the most widely used compact GPS antennas due to their low profile, light weight, and circular polarization capability.",
      "topic": "GPS Antenna"
    },
    {
      "id": "bq-pyq200-q134",
      "questionNumber": 34,
      "question": "The first GPS satellite was launched in",
      "options": [
        "1955",
        "1967",
        "1978",
        "1993"
      ],
      "correctOptionIndex": 2,
      "explanation": "The first prototype GPS Block I satellite (Navstar 1) was launched into orbit on February 22, 1978.",
      "topic": "GPS Launch"
    },
    {
      "id": "bq-pyq200-q135",
      "questionNumber": 35,
      "question": "Which type of wave is used to operate EDM?",
      "options": [
        "Ultrasonic wave",
        "Electric wave",
        "Electromagnetic wave",
        "All of these"
      ],
      "correctOptionIndex": 2,
      "explanation": "Electronic Distance Measurement (EDM) devices transmit modulated electromagnetic waves (infrared, visible laser, or microwave) to measure distances.",
      "topic": "EDM waves"
    },
    {
      "id": "bq-pyq200-q136",
      "questionNumber": 36,
      "question": "Data collector is used for total station?",
      "options": [
        "Controlling the total station",
        "Keeping data records",
        "Helping data processing",
        "Knowing position of pointing"
      ],
      "correctOptionIndex": 1,
      "explanation": "In Total Station surveying, the internal electronic data collector records slope distances, horizontal and vertical angles, and point coordinates in digital storage.",
      "topic": "Data collector"
    },
    {
      "id": "bq-pyq200-q137",
      "questionNumber": 37,
      "question": "An EDM based instrument is",
      "options": [
        "Micrometer theodolite",
        "Total station",
        "Dumpy level",
        "Chain"
      ],
      "correctOptionIndex": 1,
      "explanation": "A Total Station is an integrated electronic instrument combining an electronic theodolite, an EDM, and a microprocessor data collector.",
      "topic": "Total Station"
    },
    {
      "id": "bq-pyq200-q138",
      "questionNumber": 38,
      "question": "Expand GPS",
      "options": [
        "Geodetic Parallel Surveying",
        "Global Positioning System",
        "Geodetic Positioning System",
        "Global Parallel Surveying"
      ],
      "correctOptionIndex": 1,
      "explanation": "GPS stands for Global Positioning System, a satellite-based radionavigation system developed by the United States Department of Defense.",
      "topic": "GPS expansion"
    },
    {
      "id": "bq-pyq200-q139",
      "questionNumber": 39,
      "question": "Which year does first microprocessor was invented?",
      "options": [
        "1970",
        "1971",
        "1972",
        "1973"
      ],
      "correctOptionIndex": 1,
      "explanation": "The world's first single-chip commercial microprocessor, the Intel 4004 (4-bit CPU), was invented and released in 1971 by Federico Faggin, Ted Hoff, and Stanley Mazor.",
      "topic": "Microprocessor"
    },
    {
      "id": "bq-pyq200-q140",
      "questionNumber": 40,
      "question": "What is the full form of GUI?",
      "options": [
        "Golden closer installation",
        "Graphical user installation",
        "Graphical user interface",
        "Geometrical user interface"
      ],
      "correctOptionIndex": 3,
      "explanation": "GUI stands for Graphical User Interface, enabling users to interact with software through visual icons. (In official answer key, option D Geometrical user interface was marked).",
      "topic": "GUI"
    },
    {
      "id": "bq-pyq200-q141",
      "questionNumber": 41,
      "question": "What is the use of function key F3?",
      "options": [
        "O SNAP",
        "TABLET",
        "ISOPLANE",
        "SAVE AS"
      ],
      "correctOptionIndex": 0,
      "explanation": "In AutoCAD drafting, the F3 function key toggles Running Object Snap (OSNAP) on and off.",
      "topic": "Function key F3"
    },
    {
      "id": "bq-pyq200-q142",
      "questionNumber": 42,
      "question": "Which of the following software is limited for AutoCAD installation?",
      "options": [
        "Window DOS",
        "Window 98",
        "Window 03",
        "Window 10"
      ],
      "correctOptionIndex": 3,
      "explanation": "AutoCAD compatibility has evolved; Windows 10 is the supported 64-bit platform while legacy systems are limited/unsupported.",
      "topic": "System requirements"
    },
    {
      "id": "bq-pyq200-q143",
      "questionNumber": 43,
      "question": "What is the use of the short cut key M text?",
      "options": [
        "Modifying text",
        "Move text",
        "Multi text",
        "Menu Text"
      ],
      "correctOptionIndex": 2,
      "explanation": "In AutoCAD, the command alias 'MTEXT' (or MT) invokes Multiline Text creation.",
      "topic": "MTEXT command"
    },
    {
      "id": "bq-pyq200-q144",
      "questionNumber": 44,
      "question": "What is the full form of UCS?",
      "options": [
        "User CAD system",
        "User CADD system",
        "User co-ordinate system",
        "User circle system"
      ],
      "correctOptionIndex": 2,
      "explanation": "UCS stands for User Coordinate System, allowing drafters to orient X, Y, and Z axes relative to any workplane.",
      "topic": "UCS"
    },
    {
      "id": "bq-pyq200-q145",
      "questionNumber": 45,
      "question": "Which of the following pointing device is cheaper while comparing the digitilizer?",
      "options": [
        "Key Board",
        "Puck",
        "Mouse",
        "Enter key"
      ],
      "correctOptionIndex": 2,
      "explanation": "A computer mouse is an inexpensive, ubiquitous pointing device compared to an electromagnetic digitizer tablet/puck.",
      "topic": "Hardware devices"
    },
    {
      "id": "bq-pyq200-q146",
      "questionNumber": 46,
      "question": "Which short cut key does the work of redo last action?",
      "options": [
        "Ctrl + z",
        "Ctrl + y",
        "Ctrl + c",
        "Ctrl + x"
      ],
      "correctOptionIndex": 1,
      "explanation": "The standard keyboard shortcut to Redo the last undone action in Windows/AutoCAD is Ctrl + Y (while Ctrl + Z is Undo).",
      "topic": "Shortcuts"
    },
    {
      "id": "bq-pyq200-q147",
      "questionNumber": 47,
      "question": "Of the following which is the correct input method to draw a line of 100 units at an angle of 40° in anticlockwise direction from positive X axis on a default AutoCAD working space ?",
      "options": [
        "<40@100",
        "@100<40",
        "@40<100",
        "<100@40"
      ],
      "correctOptionIndex": 1,
      "explanation": "In AutoCAD, polar coordinates are input as @distance<angle, so 100 units at 40° anticlockwise from positive X is input as @100<40.",
      "topic": "Polar coordinates"
    },
    {
      "id": "bq-pyq200-q148",
      "questionNumber": 48,
      "question": "Which function key is used for on/off object snap, while drafting in AutoCAD ?",
      "options": [
        "F1",
        "F2",
        "F4",
        "F3"
      ],
      "correctOptionIndex": 3,
      "explanation": "In AutoCAD drafting, the F3 function key toggles Running Object Snap (OSNAP) mode on and off.",
      "topic": "Function keys"
    },
    {
      "id": "bq-pyq200-q149",
      "questionNumber": 49,
      "question": "The path tracked by a projectile is called",
      "options": [
        "Trajectory",
        "Horizontal Range",
        "Velocity Projection",
        "None of these"
      ],
      "correctOptionIndex": 0,
      "explanation": "The parabolic path described by a projectile moving under the action of gravity in the absence of air resistance is termed its trajectory.",
      "topic": "Applied Physics / Projectiles"
    },
    {
      "id": "bq-pyq200-q150",
      "questionNumber": 50,
      "question": "π Radians = ___________ grades",
      "options": [
        "100",
        "200",
        "180",
        "90"
      ],
      "correctOptionIndex": 1,
      "explanation": "In the centesimal angle measurement system, 1 right angle = 100 grades (100g). Thus, π radians (180°) = 200 grades.",
      "topic": "Angle conversions"
    },
    {
      "id": "bq-pyq200-q151",
      "questionNumber": 51,
      "question": "What is termed as the quantity of matter contained in a body?",
      "options": [
        "Density",
        "Volume",
        "Mass",
        "Specific gravity"
      ],
      "correctOptionIndex": 2,
      "explanation": "Mass is the fundamental scalar quantity of matter contained in a body, which remains invariant regardless of gravitational field.",
      "topic": "Mass"
    },
    {
      "id": "bq-pyq200-q152",
      "questionNumber": 52,
      "question": "How many watts for 1 horse power in British system?",
      "options": [
        "726 watts",
        "736 watts",
        "746 watts",
        "756 watts"
      ],
      "correctOptionIndex": 2,
      "explanation": "In the British Imperial engineering system, 1 mechanical horsepower (hp) equals 746 Watts (550 ft·lbf/s). Metric hp equals 735.5 W.",
      "topic": "Horsepower"
    },
    {
      "id": "bq-pyq200-q153",
      "questionNumber": 53,
      "question": "What is the S.I. unit of heat?",
      "options": [
        "Calorie",
        "Joule",
        "Centigrade heat unit",
        "British thermal unit"
      ],
      "correctOptionIndex": 0,
      "explanation": "In the International System of Units (SI), heat energy is measured in Joules (J). Note: In official provisional answer key, Option A Calorie is recorded.",
      "topic": "Heat units"
    },
    {
      "id": "bq-pyq200-q154",
      "questionNumber": 54,
      "question": "What is called for the materials that restricts heat flow by radiation, conduction and convection?",
      "options": [
        "Conductors",
        "Insulators",
        "Ferrous",
        "Non-ferrous"
      ],
      "correctOptionIndex": 1,
      "explanation": "Thermal insulators are materials with very low thermal conductivity that resist the transfer of heat by conduction, convection, and radiation.",
      "topic": "Thermal insulators"
    },
    {
      "id": "bq-pyq200-q155",
      "questionNumber": 55,
      "question": "What is the term for the object seen higher than eye level?",
      "options": [
        "Angle of inclination",
        "Angle of friction",
        "Angle of elevation",
        "Angle of depression"
      ],
      "correctOptionIndex": 2,
      "explanation": "The angle subtended between the horizontal line of sight and the inclined line directed to an object above eye level is the angle of elevation.",
      "topic": "Angle of elevation"
    },
    {
      "id": "bq-pyq200-q156",
      "questionNumber": 56,
      "question": "What is the centre of gravity of a sphere?",
      "options": [
        "At the centre",
        "On the circumference",
        "At the diameter",
        "At the radius"
      ],
      "correctOptionIndex": 0,
      "explanation": "By spherical symmetry, the center of gravity of a uniform solid sphere lies exactly at its geometric center.",
      "topic": "Centre of gravity"
    },
    {
      "id": "bq-pyq200-q157",
      "questionNumber": 57,
      "question": "What is the purpose of tempering a steel?",
      "options": [
        "To reduce the brittleness",
        "To remove the ductility",
        "To increase the hardness",
        "To increase the brittleness"
      ],
      "correctOptionIndex": 0,
      "explanation": "Tempering is a heat treatment process performed after hardening to reduce excessive brittleness and relieve internal quenching stresses while maintaining toughness.",
      "topic": "Heat treatment / Tempering"
    },
    {
      "id": "bq-pyq200-q158",
      "questionNumber": 58,
      "question": "What is the term used for maximum stress attained by a material before rupture?",
      "options": [
        "Tensile stress",
        "Compressive stress",
        "Working stress",
        "Ultimate stress"
      ],
      "correctOptionIndex": 3,
      "explanation": "Ultimate stress (tensile strength) is the maximum nominal stress attained on the engineering stress-strain curve prior to necking and rupture.",
      "topic": "Ultimate stress"
    },
    {
      "id": "bq-pyq200-q159",
      "questionNumber": 59,
      "question": "Which formula is suitable for the area of a circle, whose diameter is (d)?",
      "options": [
        "π d² / 4",
        "π r",
        "2π r",
        "π d"
      ],
      "correctOptionIndex": 0,
      "explanation": "The area of a circle in terms of its diameter d is Area = π (d/2)² = π d² / 4.",
      "topic": "Area of circle"
    },
    {
      "id": "bq-pyq200-q160",
      "questionNumber": 60,
      "question": "What is the area of irregular shape by Simpson's rule?",
      "options": [
        "h/3 [y1 + y7 + 4(y2 + y4 + y6) + 2(y3 + y5)]",
        "h/2 [y1 + y7]",
        "h/3 [y2 + y4 + y6]",
        "h/2 [y1 + y7 + 2(y3 + y5)]"
      ],
      "correctOptionIndex": 0,
      "explanation": "Simpson's 1/3rd rule for computing area under an odd number of ordinates (even number of intervals h) is Area = (h/3) × [(y1 + yn) + 4(sum of even) + 2(sum of odd)].",
      "topic": "Simpson's rule"
    },
    {
      "id": "bq-pyq200-q161",
      "questionNumber": 61,
      "question": "What are the three consecutive numbers if their sum is 42?",
      "options": [
        "11, 12, 13",
        "12, 13, 14",
        "13, 14, 15",
        "14, 15, 16"
      ],
      "correctOptionIndex": 2,
      "explanation": "Let three consecutive integers be x, x+1, x+2. Their sum 3x + 3 = 42 => 3x = 39 => x = 13. The numbers are 13, 14, 15.",
      "topic": "Algebra"
    },
    {
      "id": "bq-pyq200-q162",
      "questionNumber": 62,
      "question": "What is the value of (a⁵)⁷ ?",
      "options": [
        "a³⁵",
        "a¹²",
        "a²¹",
        "a²²"
      ],
      "correctOptionIndex": 0,
      "explanation": "According to the laws of exponents, (a^m)^n = a^(m × n). Thus, (a⁵)⁷ = a^(5 × 7) = a³⁵.",
      "topic": "Exponents"
    },
    {
      "id": "bq-pyq200-q163",
      "questionNumber": 63,
      "question": "1 m = __________ cm.",
      "options": [
        "2.54",
        "10",
        "30.48",
        "100"
      ],
      "correctOptionIndex": 3,
      "explanation": "In the metric system, 1 meter = 100 centimeters = 1000 millimeters.",
      "topic": "Unit conversions"
    },
    {
      "id": "bq-pyq200-q164",
      "questionNumber": 64,
      "question": "1 hectare = ___________ m².",
      "options": [
        "10³",
        "10¹",
        "10²",
        "10⁴"
      ],
      "correctOptionIndex": 3,
      "explanation": "1 hectare = 100 m × 100 m = 10,000 m² = 10⁴ m².",
      "topic": "Area units"
    },
    {
      "id": "bq-pyq200-q165",
      "questionNumber": 65,
      "question": "6020 seconds =",
      "options": [
        "00° 05' 40\"",
        "01° 40' 20\"",
        "03° 01' 00\"",
        "6° 02' 00\""
      ],
      "correctOptionIndex": 1,
      "explanation": "6020 seconds / 60 = 100 minutes and 20 seconds. 100 minutes = 1 degree and 40 minutes. Thus, 6020\" = 01° 40' 20\".",
      "topic": "Sexagesimal conversion"
    },
    {
      "id": "bq-pyq200-q166",
      "questionNumber": 66,
      "question": "Formula for finding area of a plane triangle whose base is b, height h, is:",
      "options": [
        "bh",
        "0.5 bh",
        "0.5 [(b+h)/2]",
        "2 [(b+h)/2]"
      ],
      "correctOptionIndex": 1,
      "explanation": "The geometric area of a plane triangle with base b and vertical altitude h is Area = 0.5 × base × height = 0.5 bh.",
      "topic": "Triangle area"
    },
    {
      "id": "bq-pyq200-q167",
      "questionNumber": 67,
      "question": "What is the abbreviation for MOEF?",
      "options": [
        "Ministry of ecology and forest",
        "Ministry of environment and federation",
        "Ministry of environment and forest",
        "Ministry of ecology and fire"
      ],
      "correctOptionIndex": 2,
      "explanation": "MOEF stands for Ministry of Environment and Forests (now MoEFCC: Ministry of Environment, Forest and Climate Change).",
      "topic": "Environmental acronyms"
    },
    {
      "id": "bq-pyq200-q168",
      "questionNumber": 68,
      "question": "What is the other name of dwelling unit?",
      "options": [
        "Raw building",
        "Residential building",
        "Commercial building",
        "Educational building"
      ],
      "correctOptionIndex": 1,
      "explanation": "A dwelling unit is defined in building bye-laws and the National Building Code (NBC) as a residential building or apartment.",
      "topic": "Building planning"
    },
    {
      "id": "bq-pyq200-q169",
      "questionNumber": 69,
      "question": "What is the normal life period of residential building with concrete roof according to NBC 2005?",
      "options": [
        "50",
        "70",
        "100",
        "110"
      ],
      "correctOptionIndex": 2,
      "explanation": "According to NBC 2005 / IS 456, the design life period for monumental and permanent residential buildings with reinforced concrete roofs is 100 years.",
      "topic": "NBC design life"
    },
    {
      "id": "bq-pyq200-q170",
      "questionNumber": 70,
      "question": "The standard size of brick",
      "options": [
        "19 × 9 × 9 cm",
        "20 × 10 × 10 cm",
        "20 × 20 × 10 cm",
        "19 × 19 × 9 cm"
      ],
      "correctOptionIndex": 0,
      "explanation": "The standard modular size of a common building brick as per BIS IS 1077 is 19 cm × 9 cm × 9 cm (nominal size with mortar is 20 × 10 × 10 cm).",
      "topic": "Standard brick size"
    },
    {
      "id": "bq-pyq200-q171",
      "questionNumber": 71,
      "question": "The central part of the tree is called",
      "options": [
        "Sap wood",
        "Cambium layer",
        "Heart wood",
        "Pith"
      ],
      "correctOptionIndex": 3,
      "explanation": "The innermost core/central portion of a tree stem is the pith (or medulla), which supplies nutrients to young saplings.",
      "topic": "Timber cross section"
    },
    {
      "id": "bq-pyq200-q172",
      "questionNumber": 72,
      "question": "Weight of 1 bag of cement",
      "options": [
        "74 kg",
        "50 kg",
        "40 kg",
        "100 kg"
      ],
      "correctOptionIndex": 1,
      "explanation": "As per Indian Standard IS 1489 / IS 269, a standard commercial bag of Portland cement weighs exactly 50 kg (volume ≈ 34.7 liters).",
      "topic": "Cement bag weight"
    },
    {
      "id": "bq-pyq200-q173",
      "questionNumber": 73,
      "question": "Chemically which rock is calcarious rock?",
      "options": [
        "Granite",
        "Silica",
        "Marble",
        "Basalt stone"
      ],
      "correctOptionIndex": 2,
      "explanation": "Marble is a metamorphic rock formed from recrystallized limestone/dolomite, whose primary chemical constituent is calcium carbonate (calcarious rock).",
      "topic": "Rocks & Stones"
    },
    {
      "id": "bq-pyq200-q174",
      "questionNumber": 74,
      "question": "Vicat's apparatus is used to determine the",
      "options": [
        "initial setting time of cement",
        "final setting time of cement",
        "normal consistency of cement",
        "all of these"
      ],
      "correctOptionIndex": 3,
      "explanation": "Vicat's apparatus with standard plunger and needles is used to determine the standard consistency, initial setting time, and final setting time of cement paste.",
      "topic": "Vicat's apparatus"
    },
    {
      "id": "bq-pyq200-q175",
      "questionNumber": 75,
      "question": "The structure which is used to carry canal over natural drain is called",
      "options": [
        "fly level",
        "aqueduct",
        "super passage",
        "level crossing"
      ],
      "correctOptionIndex": 1,
      "explanation": "An aqueduct is a cross-drainage structure in which the irrigation canal is carried in a flume supported on piers completely over a natural stream/drain.",
      "topic": "Cross drainage works"
    },
    {
      "id": "bq-pyq200-q176",
      "questionNumber": 76,
      "question": "Area of land irrigated divided by the unit volume of irrigation water is called",
      "options": [
        "Head water",
        "Duty",
        "Delta",
        "Base period"
      ],
      "correctOptionIndex": 1,
      "explanation": "Duty is defined as the area of land (in hectares) that can be irrigated by a continuous discharge of 1 cumec of water throughout the base period.",
      "topic": "Duty of water"
    },
    {
      "id": "bq-pyq200-q177",
      "questionNumber": 77,
      "question": "Portion of a brick made by cutting across it lengthwise into exactly two parts is known as",
      "options": [
        "bevelled closer",
        "queen closer",
        "king closer",
        "bat"
      ],
      "correctOptionIndex": 1,
      "explanation": "A queen closer is formed by cutting a standard brick lengthwise into two equal halves.",
      "topic": "Brick masonry closers"
    },
    {
      "id": "bq-pyq200-q178",
      "questionNumber": 78,
      "question": "When the bed level of canal and drainage is at the same level, is provided.",
      "options": [
        "Aqueducts",
        "Superpassage",
        "Level crossings",
        "Delta"
      ],
      "correctOptionIndex": 2,
      "explanation": "When the bed levels of a canal and a natural drainage stream intersect at the exact same level, a level crossing with regulator gates is provided.",
      "topic": "Cross drainage works"
    },
    {
      "id": "bq-pyq200-q179",
      "questionNumber": 79,
      "question": "Main constituent of portland cement is",
      "options": [
        "clay",
        "sand",
        "lime",
        "magnesium"
      ],
      "correctOptionIndex": 2,
      "explanation": "Lime (calcium oxide, CaO, 60-67%) is the primary chemical constituent of Ordinary Portland Cement (OPC), followed by silica (17-25%).",
      "topic": "Cement composition"
    },
    {
      "id": "bq-pyq200-q180",
      "questionNumber": 80,
      "question": "In , headers and stretchers are laid alternatively in the same course.",
      "options": [
        "English bond",
        "Stretcher bond",
        "Header bond",
        "Flemish bond"
      ],
      "correctOptionIndex": 3,
      "explanation": "In a Flemish bond, alternate stretchers and headers are laid in the same course, with queen closers placed next to quoin headers in alternating courses.",
      "topic": "Brick bonds"
    }
  ]
};

export const MOCK_TEST_TRACER_2023: MockTest = {
  "id": "mock-tracer-2023-100",
  "title": "Kerala PSC Tracer / Surveyor Grade II - 100 MCQ Grand PYQ Exam (Paper 43/2023)",
  "category": "Full-Length Kerala PSC",
  "description": "Authentic 100-mark full syllabus examination paper from Paper 43/2023 for Tracer / Surveyor Grade II across Survey & Land Records, LSGD, and Irrigation departments. Evaluated with standard PSC negative marking (+1.00 / -0.33).",
  "examCode": "Cat. No: 411/2022 • Paper 43/2023",
  "targetDepartment": "Survey and Land Records / LSGD / Irrigation",
  "durationMinutes": 75,
  "totalQuestions": 100,
  "totalMarks": 100,
  "marksPerCorrect": 1,
  "negativeMarksPerWrong": 0.33,
  "difficulty": "PSC Standard (Advanced)",
  "isRankedExam": true,
  "questions": [
    {
      "id": "bq-pyq200-q001",
      "questionNumber": 1,
      "question": "As per BIS (IS 1444-1989) the standard size of B1 drawing board is _________",
      "options": [
        "1000 × 1500 mm",
        "700 × 1000 mm",
        "500 × 700 mm",
        "350 × 500 mm"
      ],
      "correctOptionIndex": 1,
      "explanation": "Standard drawing board sizes as per BIS (IS 1444-1989): B0 = 1000 × 1500 mm, B1 = 700 × 1000 mm, B2 = 500 × 700 mm, B3 = 350 × 500 mm.",
      "topic": "Drawing boards"
    },
    {
      "id": "bq-pyq200-q002",
      "questionNumber": 2,
      "question": "For drawing long thin lines of uniform thickness the pencil should be sharpened",
      "options": [
        "Chisel edge",
        "Pointed lead",
        "Conical point",
        "Flat blade"
      ],
      "correctOptionIndex": 0,
      "explanation": "A chisel edge is sharpened to maintain a uniform line thickness along straight edges (ruler/T-square). Conical points wear rapidly and broaden line width.",
      "topic": "Pencils & Instruments"
    },
    {
      "id": "bq-pyq200-q003",
      "questionNumber": 3,
      "question": "The ratio of length to width of all arrow heads in drawing is",
      "options": [
        "2:1",
        "4:1",
        "3:1",
        "2:4"
      ],
      "correctOptionIndex": 2,
      "explanation": "According to SP 46 / IS 10714 drafting standards, dimension arrowheads must have a standard length-to-width (depth-to-spread) ratio of 3:1.",
      "topic": "Dimensioning"
    },
    {
      "id": "bq-pyq200-q004",
      "questionNumber": 4,
      "question": "For thin chain line alternate long and short dashes are in proportion ranging from",
      "options": [
        "6:1 to 4:1",
        "9:1 to 3:1",
        "6:2 to 4:2",
        "9:1 to 4:1"
      ],
      "correctOptionIndex": 0,
      "explanation": "For thin chain lines (center lines / Type G), long dashes are 9 to 12 mm and short dashes are 1.5 to 2 mm, giving a proportion ranging from 6:1 to 4:1.",
      "topic": "Types of lines"
    },
    {
      "id": "bq-pyq200-q005",
      "questionNumber": 5,
      "question": "The plan and elevation of a line segment are seen coincides, the line is situated in the",
      "options": [
        "First quadrant",
        "Second quadrant",
        "Third quadrant",
        "Quadrantal axis"
      ],
      "correctOptionIndex": 1,
      "explanation": "When a line lies in the 2nd quadrant (above HP, behind VP) or 4th quadrant (below HP, in front of VP), upon rotating HP by 90°, the plan (top view) and elevation (front view) overlap on the same side of the reference line XY.",
      "topic": "Projections"
    },
    {
      "id": "bq-pyq200-q006",
      "questionNumber": 6,
      "question": "The recommended dimensioning of a sphere of Diameter 20 mm is",
      "options": [
        "20 Ø S",
        "S Ø 20",
        "S 20 Ø",
        "Ø 20 S"
      ],
      "correctOptionIndex": 1,
      "explanation": "As per ISO/BIS drafting conventions, spherical diameter is dimensioned by prefixing the symbol 'S' before the diameter symbol Ø, formatted as S Ø 20 (or SR for spherical radius).",
      "topic": "Dimensioning"
    },
    {
      "id": "bq-pyq200-q007",
      "questionNumber": 7,
      "question": "The type of Vernier in which the Vernier divisions are marked in the opposite direction of the main scale is",
      "options": [
        "Vernier Scale",
        "Forward Vernier",
        "Backward Vernier",
        "None of these"
      ],
      "correctOptionIndex": 2,
      "explanation": "In a backward (retrograde) vernier, divisions are numbered in the direction opposite to the main scale, where n vernier divisions equal (n + 1) main scale divisions.",
      "topic": "Scales & Verniers"
    },
    {
      "id": "bq-pyq200-q008",
      "questionNumber": 8,
      "question": "The method of projection in which the projectors are parallel to each other and perpendicular to the plane the projection is",
      "options": [
        "Isometric Projection",
        "Orthographic Projection",
        "Perspective Projection",
        "Oblique Projection"
      ],
      "correctOptionIndex": 1,
      "explanation": "Orthographic projection is an axonometric/parallel projection method where projection rays are mutually parallel to each other and normal (perpendicular) to the projection plane.",
      "topic": "Orthographic projection"
    },
    {
      "id": "bq-pyq200-q009",
      "questionNumber": 9,
      "question": "RF = 200:1 represents a",
      "options": [
        "Enlarging Scale",
        "Reducing Scale",
        "Full Size",
        "Comparative Scale"
      ],
      "correctOptionIndex": 0,
      "explanation": "Representative Fraction (RF) > 1 (e.g. 200:1) indicates an enlarging scale used for small precision components. RF < 1 is a reducing scale.",
      "topic": "Scales"
    },
    {
      "id": "bq-pyq200-q010",
      "questionNumber": 10,
      "question": "Scale 1 : 200 is classified as",
      "options": [
        "full scale",
        "scale of chords",
        "enlarged scale",
        "reduction scale"
      ],
      "correctOptionIndex": 3,
      "explanation": "A scale of 1:200 has an RF < 1, meaning 1 unit on the drawing represents 200 units in reality; it is a reducing scale.",
      "topic": "Scales"
    },
    {
      "id": "bq-pyq200-q011",
      "questionNumber": 11,
      "question": "The survey in which earth's curvature is taken into account is",
      "options": [
        "Levelling",
        "Geodetic survey",
        "Theodolite Survey",
        "None of these"
      ],
      "correctOptionIndex": 1,
      "explanation": "In geodetic surveying, the curvature of the earth's spheroidal surface is taken into account for large areas (> 250 km²).",
      "topic": "Geodetic survey"
    },
    {
      "id": "bq-pyq200-q012",
      "questionNumber": 12,
      "question": "Surveying Chain is Made up of",
      "options": [
        "Galvanised MS Wire",
        "MS Wire",
        "High carbon steel",
        "None of these"
      ],
      "correctOptionIndex": 0,
      "explanation": "Survey chains are manufactured from galvanized mild steel (MS) wire of 4 mm diameter (8 SWG) with ends looped into rings.",
      "topic": "Chain construction"
    },
    {
      "id": "bq-pyq200-q013",
      "questionNumber": 13,
      "question": "The Length of surveyor's chain is",
      "options": [
        "100 ft",
        "66 ft",
        "33 ft",
        "30 m"
      ],
      "correctOptionIndex": 1,
      "explanation": "Gunter's chain (surveyor's chain) is 66 feet (20.12 m) long and consists of 100 links, with each link measuring 0.66 ft (7.92 inches).",
      "topic": "Gunter's chain"
    },
    {
      "id": "bq-pyq200-q014",
      "questionNumber": 14,
      "question": "In ordinary chain survey the maximum permissible error is",
      "options": [
        "1 in 250",
        "1 in 1000",
        "1 in 2000",
        "1 in 5000"
      ],
      "correctOptionIndex": 1,
      "explanation": "In ordinary chain surveying under normal field conditions, the maximum permissible ratio of error is 1 in 1000 (1 in 250 in rough ground; 1 in 1000 is official key for standard ordinary chaining).",
      "topic": "Permissible errors"
    },
    {
      "id": "bq-pyq200-q015",
      "questionNumber": 15,
      "question": "The correction for sag is always _____",
      "options": [
        "+ ve",
        "− ve",
        "+ ve or − ve",
        "None of these"
      ],
      "correctOptionIndex": 1,
      "explanation": "Correction for sag is always negative (-ve) because the catenary curve makes the measured distance between supports longer than the true straight chord distance.",
      "topic": "Sag correction"
    },
    {
      "id": "bq-pyq200-q016",
      "questionNumber": 16,
      "question": "If L is the correct length of a chain, L' is the incorrect length and D' is the measured length, then the correct length is:",
      "options": [
        "(L' / L) × D'",
        "(L / L') × D'",
        "(L / D') × L'",
        "(D' / L) × L'"
      ],
      "correctOptionIndex": 0,
      "explanation": "True distance = (Measured length) × (Incorrect length of chain / True length of chain) = D' × (L' / L).",
      "topic": "Chain errors"
    },
    {
      "id": "bq-pyq200-q017",
      "questionNumber": 17,
      "question": "The instrument which is not used in chain survey is",
      "options": [
        "Ranging Rod",
        "Cross Staff",
        "Offset Rod",
        "Levelling Staff"
      ],
      "correctOptionIndex": 3,
      "explanation": "A levelling staff is used exclusively in levelling and tachometric work to measure vertical elevations, not for linear distance measurement in chain surveying.",
      "topic": "Instruments"
    },
    {
      "id": "bq-pyq200-q018",
      "questionNumber": 18,
      "question": "The Principle of chain surveying is",
      "options": [
        "Work from Whole to Part",
        "Triangulation",
        "Traversing",
        "None of these"
      ],
      "correctOptionIndex": 1,
      "explanation": "The fundamental principle of chain surveying is triangulation, whereby the survey area is partitioned into a network of well-conditioned triangles.",
      "topic": "Principles of Chain Survey"
    },
    {
      "id": "bq-pyq200-q019",
      "questionNumber": 19,
      "question": "The system of lines or Triangles covering the area to be surveyed is",
      "options": [
        "Triangulation",
        "Frame Work",
        "Traversing",
        "All of the above"
      ],
      "correctOptionIndex": 1,
      "explanation": "The system of survey lines forming the skeleton network of triangles covering the area to be surveyed is called the framework.",
      "topic": "Triangles & Framework"
    },
    {
      "id": "bq-pyq200-q020",
      "questionNumber": 20,
      "question": "In a well-conditioned triangle the angles are",
      "options": [
        "20° or 120°",
        "Greater than 30° and less than 120°",
        "Greater than 20° & less than 120°",
        "None of these"
      ],
      "correctOptionIndex": 1,
      "explanation": "A well-conditioned triangle has no angle less than 30° and no angle greater than 120° to minimize geometric plotting distortion.",
      "topic": "Well-conditioned triangle"
    },
    {
      "id": "bq-pyq200-q021",
      "questionNumber": 21,
      "question": "The line joining some fixed points termed as tie stations on main survey line is called",
      "options": [
        "Base line",
        "Check line",
        "Proof line",
        "Tie line"
      ],
      "correctOptionIndex": 3,
      "explanation": "A tie line joins auxiliary (tie) stations on main survey lines to measure offsets for locating interior ground details.",
      "topic": "Tie line"
    },
    {
      "id": "bq-pyq200-q022",
      "questionNumber": 22,
      "question": "Invar tape is made up of an alloy of and steel.",
      "options": [
        "Aluminium",
        "Nickel",
        "Copper",
        "Brass"
      ],
      "correctOptionIndex": 1,
      "explanation": "Invar is a nickel-iron alloy (36% Nickel, 64% Steel) characterized by an exceptionally low coefficient of thermal expansion.",
      "topic": "Invar tape"
    },
    {
      "id": "bq-pyq200-q023",
      "questionNumber": 23,
      "question": "The process of establishing an intermediate point in a line is called",
      "options": [
        "Chaining",
        "Offsetting",
        "Ranging",
        "Levelling"
      ],
      "correctOptionIndex": 2,
      "explanation": "Ranging is the operational process of aligning intermediate points along a straight survey line between two terminal stations.",
      "topic": "Ranging"
    },
    {
      "id": "bq-pyq200-q024",
      "questionNumber": 24,
      "question": "Error =",
      "options": [
        "Difference in values and sign of observed value",
        "Difference in values and sign of true value",
        "Observed value - true value",
        "True value - observed value"
      ],
      "correctOptionIndex": 2,
      "explanation": "By standard definition, Error = Observed Value - True Value (while Correction = True Value - Observed Value = -Error).",
      "topic": "Definitions of Error"
    },
    {
      "id": "bq-pyq200-q025",
      "questionNumber": 25,
      "question": "Of the following, which is the primary stage of surveying ?",
      "options": [
        "Reconnaissance",
        "Preliminary survey",
        "Final survey",
        "Location survey"
      ],
      "correctOptionIndex": 0,
      "explanation": "Reconnaissance is the initial ground inspection of the survey area to observe boundaries, terrain features, and select station points.",
      "topic": "Stages of Survey"
    },
    {
      "id": "bq-pyq200-q026",
      "questionNumber": 26,
      "question": "Bad ranging is an example for",
      "options": [
        "Positive compensating error",
        "Negative compensating error",
        "Positive cumulative error",
        "Negative cumulative error"
      ],
      "correctOptionIndex": 2,
      "explanation": "Bad (imperfect) ranging causes the chain to deviate from a true straight line, consistently making the measured length greater than the true length (positive cumulative error).",
      "topic": "Errors in Chaining"
    },
    {
      "id": "bq-pyq200-q027",
      "questionNumber": 27,
      "question": "Survey lines set out to locate interior details of a plot is called",
      "options": [
        "Main survey lines",
        "Tie lines",
        "Check lines",
        "Random lines"
      ],
      "correctOptionIndex": 1,
      "explanation": "Tie lines are secondary lines run across main survey lines to locate interior ground features and details.",
      "topic": "Survey lines"
    },
    {
      "id": "bq-pyq200-q028",
      "questionNumber": 28,
      "question": "A link of a metric chain is cm in length.",
      "options": [
        "0.66",
        "10",
        "20",
        "30.48"
      ],
      "correctOptionIndex": 2,
      "explanation": "Each link of a standard 20 m or 30 m metric chain measures 0.2 m (20 cm) between the centers of connecting rings.",
      "topic": "Metric chain links"
    },
    {
      "id": "bq-pyq200-q029",
      "questionNumber": 29,
      "question": "Which of the following is the prime instrument is used for ranging ?",
      "options": [
        "Ranging rod",
        "Chain",
        "Cross-staff",
        "Arrow"
      ],
      "correctOptionIndex": 0,
      "explanation": "Ranging rods (typically 2 to 3 m long, octagonal or circular poles painted in alternating red/black and white bands) are the prime tools for visual alignment.",
      "topic": "Ranging rods"
    },
    {
      "id": "bq-pyq200-q030",
      "questionNumber": 30,
      "question": "A 20 m metric chain has links.",
      "options": [
        "10",
        "50",
        "100",
        "150"
      ],
      "correctOptionIndex": 2,
      "explanation": "A 20-meter metric chain consists of 100 links (each link = 20 cm = 0.2 m). A 30 m metric chain has 150 links.",
      "topic": "Metric chain"
    },
    {
      "id": "bq-pyq200-q031",
      "questionNumber": 31,
      "question": "90° is set out using:",
      "options": [
        "cross staff",
        "peg",
        "plumb-bob",
        "line ranger"
      ],
      "correctOptionIndex": 0,
      "explanation": "An open cross-staff is used on survey lines to set out right angles (90°) for perpendicular offsets.",
      "topic": "Cross-staff"
    },
    {
      "id": "bq-pyq200-q032",
      "questionNumber": 32,
      "question": "___________ angles can be set out using French cross staff.",
      "options": [
        "30°",
        "45°",
        "60°",
        "75°"
      ],
      "correctOptionIndex": 1,
      "explanation": "An octagonal French cross staff has sighting slits set at angles that allow setting out both 45° and 90° lines.",
      "topic": "French cross-staff"
    },
    {
      "id": "bq-pyq200-q033",
      "questionNumber": 33,
      "question": "Gunter's chain is ___________ in length.",
      "options": [
        "20 m",
        "33 feet",
        "66 feet",
        "100 feet"
      ],
      "correctOptionIndex": 2,
      "explanation": "Gunter's chain (surveyor's chain) is 66 feet long and contains 100 links (1 link = 0.66 ft = 7.92 in).",
      "topic": "Gunter's chain"
    },
    {
      "id": "bq-pyq200-q034",
      "questionNumber": 34,
      "question": "Survey related to large water bodies is called",
      "options": [
        "Hydrographic surveying",
        "Land surveying",
        "Air surveying",
        "Aerial surveying"
      ],
      "correctOptionIndex": 0,
      "explanation": "Hydrographic surveying encompasses surveys of water bodies (oceans, lakes, rivers, harbors) for navigation, bathymetry, and shorelines.",
      "topic": "Classifications"
    },
    {
      "id": "bq-pyq200-q035",
      "questionNumber": 35,
      "question": "Offsets are said to be large when offset length exceeds _________ m.",
      "options": [
        "5",
        "10",
        "15",
        "20"
      ],
      "correctOptionIndex": 2,
      "explanation": "In chain surveying, perpendicular offsets exceeding 15 meters in length are categorized as long offsets (short offsets are ≤ 15 m).",
      "topic": "Offsets"
    },
    {
      "id": "bq-pyq200-q036",
      "questionNumber": 36,
      "question": "A set of arrows provided with chain has _________ arrows.",
      "options": [
        "10",
        "15",
        "20",
        "30"
      ],
      "correctOptionIndex": 0,
      "explanation": "A standard set of survey arrows accompanying a metric chain consists of 10 arrows made of tempered 4 mm steel wire.",
      "topic": "Arrows"
    },
    {
      "id": "bq-pyq200-q037",
      "questionNumber": 37,
      "question": "Which of the following instrument is used for ranging ?",
      "options": [
        "Peg",
        "Cross staff",
        "Optical square",
        "Line ranger"
      ],
      "correctOptionIndex": 3,
      "explanation": "A line ranger is an optical instrument consisting of two 90° reflecting prisms used for fixing intermediate ranging points without an assistant at the ends.",
      "topic": "Line ranger"
    },
    {
      "id": "bq-pyq200-q038",
      "questionNumber": 38,
      "question": "The horizontal angle which a line makes with the meridian is called",
      "options": [
        "Included angle",
        "Inclination",
        "Bearing",
        "Declination"
      ],
      "correctOptionIndex": 2,
      "explanation": "The horizontal angle measured between a survey line and a reference meridian (true, magnetic, or arbitrary) is defined as its bearing.",
      "topic": "Bearing"
    },
    {
      "id": "bq-pyq200-q039",
      "questionNumber": 39,
      "question": "The graduated ring being attached to the magnetic needle remains stationary in",
      "options": [
        "Surveyor's compass",
        "Prismatic compass",
        "Trough compass",
        "None of these"
      ],
      "correctOptionIndex": 1,
      "explanation": "In a prismatic compass, the graduated aluminum ring is attached directly to the broad magnetic needle and remains stationary pointing magnetic North.",
      "topic": "Prismatic compass"
    },
    {
      "id": "bq-pyq200-q040",
      "questionNumber": 40,
      "question": "In a prismatic compass 180° is marked at",
      "options": [
        "North end",
        "South end",
        "East",
        "West"
      ],
      "correctOptionIndex": 0,
      "explanation": "In a prismatic compass, 0° is engraved at the South end and 180° is at the North end so that the bearing can be read directly through the prism at the eye vane.",
      "topic": "Prismatic compass graduations"
    },
    {
      "id": "bq-pyq200-q041",
      "questionNumber": 41,
      "question": "The bearing of a line taken from the starting point of the line towards the direction in which survey progress is called",
      "options": [
        "True bearing",
        "Back bearing",
        "Whole circle bearing",
        "Fore bearing"
      ],
      "correctOptionIndex": 3,
      "explanation": "The bearing of a survey line taken in the forward direction of progress of the survey from the starting station is called the Fore Bearing (FB).",
      "topic": "Fore bearing"
    },
    {
      "id": "bq-pyq200-q042",
      "questionNumber": 42,
      "question": "In the whole circle bearing systems, S 85°- 45' W will be expressed as",
      "options": [
        "94°-15'",
        "85°-45'",
        "265°-45'",
        "180°-45'"
      ],
      "correctOptionIndex": 2,
      "explanation": "S 85°-45' W lies in the 3rd quadrant (SW). WCB = 180° + 85°45' = 265°45'.",
      "topic": "WCB conversion"
    },
    {
      "id": "bq-pyq200-q043",
      "questionNumber": 43,
      "question": "At poles the magnetic dip is equal to",
      "options": [
        "180°",
        "90°",
        "0",
        "45°"
      ],
      "correctOptionIndex": 1,
      "explanation": "Magnetic dip is the vertical inclination of the needle to the horizontal. It is 0° at the magnetic equator and 90° (vertical) at the magnetic poles.",
      "topic": "Dip of needle"
    },
    {
      "id": "bq-pyq200-q044",
      "questionNumber": 44,
      "question": "The whole circle bearing of a line observed by a prismatic compass is 110°, its bearing read on a surveyor's compass is",
      "options": [
        "N 75° E",
        "N 80° E",
        "S 110° E",
        "S 70° E"
      ],
      "correctOptionIndex": 3,
      "explanation": "A WCB of 110° lies in the 2nd quadrant (SE). Reduced Bearing (QB) = 180° - 110° = S 70° E.",
      "topic": "Reduced bearing"
    },
    {
      "id": "bq-pyq200-q045",
      "questionNumber": 45,
      "question": "The horizontal angle which magnetic meridian makes with the true meridian is called",
      "options": [
        "Magnetic Declination",
        "Dip",
        "Bearing",
        "None of these"
      ],
      "correctOptionIndex": 0,
      "explanation": "Magnetic declination is the horizontal angle between the magnetic meridian and the true (geographical) meridian at a place.",
      "topic": "Magnetic declination"
    },
    {
      "id": "bq-pyq200-q046",
      "questionNumber": 46,
      "question": "The line joining places of equal declination",
      "options": [
        "Agonic lines",
        "Isogonic lines",
        "Tie line",
        "Base line"
      ],
      "correctOptionIndex": 1,
      "explanation": "Isogonic lines are imaginary lines connecting points on the earth's surface that have the same magnetic declination. (Agonic lines have zero declination).",
      "topic": "Isogonic lines"
    },
    {
      "id": "bq-pyq200-q047",
      "questionNumber": 47,
      "question": "The fore bearing of a line is S 45° 10' E find the back bearing",
      "options": [
        "45°-10'",
        "N 45° 10' W",
        "225°-10'",
        "134°-50'"
      ],
      "correctOptionIndex": 1,
      "explanation": "To convert Fore Bearing to Back Bearing in Quadrantal system, retain numerical angle and reverse quadrant letters: S 45°10' E becomes N 45°10' W.",
      "topic": "Fore and Back bearing"
    },
    {
      "id": "bq-pyq200-q048",
      "questionNumber": 48,
      "question": "The magnetic bearing of a line is 190° and the magnetic declination is 2° W. Find the true bearing of the line",
      "options": [
        "190°",
        "188°",
        "192°",
        "None of these"
      ],
      "correctOptionIndex": 1,
      "explanation": "True Bearing = Magnetic Bearing ± Declination = 190° - 2° (West declination is subtracted) = 188°.",
      "topic": "True Bearing calculation"
    },
    {
      "id": "bq-pyq200-q049",
      "questionNumber": 49,
      "question": "The permissible error in prismatic compass survey is",
      "options": [
        "1 in 20°",
        "1 in 120°",
        "1 in 340°",
        "1 in 220°"
      ],
      "correctOptionIndex": 2,
      "explanation": "In prismatic compass surveying, the permissible error of closure is generally specified as 1 in 340 (or an angular limit of 20').",
      "topic": "Permissible error in compass"
    },
    {
      "id": "bq-pyq200-q050",
      "questionNumber": 50,
      "question": "Meridian joining earth's true north and south is called",
      "options": [
        "Assumed meridian",
        "Arbitrary meridian",
        "Magnetic meridian",
        "True meridian"
      ],
      "correctOptionIndex": 3,
      "explanation": "The true meridian is the imaginary great circle passing through the geographical north and south poles of the earth and the observer's position.",
      "topic": "True meridian"
    },
    {
      "id": "bq-pyq200-q051",
      "questionNumber": 51,
      "question": "Convert Q.B., S 45° 00' E into W.C.B.",
      "options": [
        "45° 00'",
        "135° 00'",
        "225° 00'",
        "335° 00'"
      ],
      "correctOptionIndex": 1,
      "explanation": "S 45° 00' E lies in the second quadrant (SE). WCB = 180° - 45°00' = 135° 00'.",
      "topic": "WCB conversion"
    },
    {
      "id": "bq-pyq200-q052",
      "questionNumber": 52,
      "question": "W.C.B. of a survey line is determined using",
      "options": [
        "prismatic compass",
        "surveyor's compass",
        "trough compass",
        "circular compass"
      ],
      "correctOptionIndex": 0,
      "explanation": "A prismatic compass reads Whole Circle Bearings (0° to 360°) directly through its viewing prism.",
      "topic": "Prismatic compass"
    },
    {
      "id": "bq-pyq200-q053",
      "questionNumber": 53,
      "question": "Theoretical sum of interior angles of a closed irregular hexagon is:",
      "options": [
        "180°",
        "360°",
        "600°",
        "720°"
      ],
      "correctOptionIndex": 3,
      "explanation": "The theoretical sum of interior angles of a closed polygon with n sides is (2n - 4) × 90°. For a hexagon (n = 6): (12 - 4) × 90° = 720°.",
      "topic": "Traverse angle check"
    },
    {
      "id": "bq-pyq200-q054",
      "questionNumber": 54,
      "question": "Convert W.C.B. 320° 00' into Q.B.",
      "options": [
        "N 40° 00' W",
        "N 50° 00' W",
        "S 140° 00' W",
        "W 140° 00' S"
      ],
      "correctOptionIndex": 0,
      "explanation": "A WCB of 320° 00' lies in the 4th quadrant (NW). Reduced Bearing = 360° - 320°00' = N 40° 00' W.",
      "topic": "Reduced bearing"
    },
    {
      "id": "bq-pyq200-q055",
      "questionNumber": 55,
      "question": "0° is engraved at ___________ of the graduated ring of the prismatic compass.",
      "options": [
        "North",
        "East",
        "South",
        "West"
      ],
      "correctOptionIndex": 2,
      "explanation": "In a prismatic compass, 0° is graduated at the South end of the ring because reading is done through the prism at the diametrically opposite side.",
      "topic": "Prismatic compass graduations"
    },
    {
      "id": "bq-pyq200-q056",
      "questionNumber": 56,
      "question": "W.C.B. is always reckoned from",
      "options": [
        "North",
        "East",
        "South",
        "West"
      ],
      "correctOptionIndex": 0,
      "explanation": "Whole Circle Bearing (WCB) is always measured clockwise starting from the magnetic or true North direction.",
      "topic": "WCB convention"
    },
    {
      "id": "bq-pyq200-q057",
      "questionNumber": 57,
      "question": "Magnetic bearing of a line determined was 140° but later it was found that Declination at the place is 2° W. Find the true bearing of the line.",
      "options": [
        "40°",
        "50°",
        "138°",
        "142°"
      ],
      "correctOptionIndex": 2,
      "explanation": "True Bearing = Magnetic Bearing ± Declination. Here Magnetic Bearing = 140°, Declination = 2° W. True Bearing = 140° - 2° = 138°.",
      "topic": "True Bearing calculation"
    },
    {
      "id": "bq-pyq200-q058",
      "questionNumber": 58,
      "question": "Change in declination at place happening in 24 hours is type of variation.",
      "options": [
        "Secular",
        "Diurnal",
        "Annual",
        "Irregular"
      ],
      "correctOptionIndex": 1,
      "explanation": "Diurnal variation is the daily cyclic oscillation of the magnetic needle caused by the rotation of the earth and solar radiation over 24 hours.",
      "topic": "Declination variations"
    },
    {
      "id": "bq-pyq200-q059",
      "questionNumber": 59,
      "question": "F.B. of RS is S 45° 15' E. F.B. of PR is S 30° 00' E. Included angle PRS measured in clockwise direction is:",
      "options": [
        "104° 45'",
        "134° 45'",
        "164° 45'",
        "195° 15'"
      ],
      "correctOptionIndex": 2,
      "explanation": "Included angle at station R: Computed from the back bearing of PR and forward bearing of RS; measured clockwise as 164° 45'.",
      "topic": "Included angles"
    },
    {
      "id": "bq-pyq200-q060",
      "questionNumber": 60,
      "question": "Magnetic equator is an example for",
      "options": [
        "Isogonic line",
        "Agonic line",
        "Isoclinic line",
        "Aclinic line"
      ],
      "correctOptionIndex": 3,
      "explanation": "The magnetic equator is an aclinic line where the magnetic dip is zero (the magnetic needle remains horizontal).",
      "topic": "Magnetic lines"
    },
    {
      "id": "bq-pyq200-q061",
      "questionNumber": 61,
      "question": "F.B. of CD is 30°. FB of DE is 260°. Find ∠CDE measured in clockwise direction:",
      "options": [
        "50°",
        "80°",
        "230°",
        "290°"
      ],
      "correctOptionIndex": 0,
      "explanation": "Deflection angle / included angle between CD (FB = 30°) and DE (FB = 260°): Clockwise angle ∠CDE = 50°.",
      "topic": "Deflection angle"
    },
    {
      "id": "bq-pyq200-q062",
      "questionNumber": 62,
      "question": "Bearing measured in the direction of the progress of surveying is called",
      "options": [
        "Fore bearing",
        "Back bearing",
        "Intermediate bearing",
        "Reverse bearing"
      ],
      "correctOptionIndex": 0,
      "explanation": "The bearing of a survey line measured in the direction of the forward progress of the survey is the Fore Bearing (FB).",
      "topic": "Fore bearing"
    },
    {
      "id": "bq-pyq200-q063",
      "questionNumber": 63,
      "question": "F.B. of a line PQ is 140°. What is the F.B. of the line QP ?",
      "options": [
        "40°",
        "180°",
        "230°",
        "320°"
      ],
      "correctOptionIndex": 3,
      "explanation": "If Fore Bearing of PQ = 140°, the Fore Bearing of QP is its Back Bearing: BB = 140° + 180° = 320°.",
      "topic": "Back bearing"
    },
    {
      "id": "bq-pyq200-q064",
      "questionNumber": 64,
      "question": "Vertical angle with which magnetic needle makes with the horizontal is called",
      "options": [
        "Declination",
        "Transiting",
        "Swinging",
        "Dip"
      ],
      "correctOptionIndex": 3,
      "explanation": "Magnetic dip is the vertical inclination that a freely suspended magnetic needle makes with the horizontal plane.",
      "topic": "Dip"
    },
    {
      "id": "bq-pyq200-q065",
      "questionNumber": 65,
      "question": "Which method of plane table survey is also used for plotting the distant and inaccessible objects, broken boundaries, river etc?",
      "options": [
        "Intersection method",
        "Radiation method",
        "Traversing",
        "Resection"
      ],
      "correctOptionIndex": 0,
      "explanation": "The intersection method in plane tabling is ideal for mapping distant, inaccessible points, river boundaries, and broken ground without measuring distances on ground.",
      "topic": "Intersection"
    },
    {
      "id": "bq-pyq200-q066",
      "questionNumber": 66,
      "question": "The process of putting the positions occupied by the board at various survey stations are kept parallel is known as",
      "options": [
        "Centering the plane table",
        "Levelling the plane table",
        "Orienting the plane table",
        "Traversing the plane table"
      ],
      "correctOptionIndex": 2,
      "explanation": "Orientation is the process of keeping the plane table at each successive station parallel to the position it occupied at the first station.",
      "topic": "Orientation"
    },
    {
      "id": "bq-pyq200-q067",
      "questionNumber": 67,
      "question": "What is the name of method used in plane table survey similar to that of compass survey?",
      "options": [
        "Radiation",
        "Intersection",
        "Resection",
        "Traversing"
      ],
      "correctOptionIndex": 3,
      "explanation": "Plane table traversing is similar to compass traversing, running a connected series of lines from station to station.",
      "topic": "Traversing"
    },
    {
      "id": "bq-pyq200-q068",
      "questionNumber": 68,
      "question": "Which type of survey cannot be done in dense wooded areas?",
      "options": [
        "Chain survey",
        "Compass survey",
        "Plane table survey",
        "Theodolite survey"
      ],
      "correctOptionIndex": 2,
      "explanation": "Plane table surveying requires unobstructed sight lines and daylight; it cannot be effectively conducted in dense wooded forests or wet rainy climates.",
      "topic": "Suitability"
    },
    {
      "id": "bq-pyq200-q069",
      "questionNumber": 69,
      "question": "The three points problem may be solved by",
      "options": [
        "Tracing paper method",
        "Bessel's method",
        "Trial and Error method",
        "All of the above"
      ],
      "correctOptionIndex": 3,
      "explanation": "The three-point problem in plane tabling can be solved by mechanical (tracing paper), graphical (Bessel's / cutting arcs), and trial & error (Lehmann's) methods.",
      "topic": "Three point problem"
    },
    {
      "id": "bq-pyq200-q070",
      "questionNumber": 70,
      "question": "Instrument used for sighting objects and drawing rays in plane tabling is",
      "options": [
        "Alidade",
        "Trough compass",
        "Spirit level",
        "Plumb-bob"
      ],
      "correctOptionIndex": 0,
      "explanation": "An alidade (plain or telescopic) is the primary sighting and ray-drawing instrument used in plane table surveying.",
      "topic": "Alidade"
    },
    {
      "id": "bq-pyq200-q071",
      "questionNumber": 71,
      "question": "___________ surveying can be performed without field book.",
      "options": [
        "Plane table",
        "Chain",
        "Compass",
        "Theodolite"
      ],
      "correctOptionIndex": 0,
      "explanation": "In plane table surveying, observations and plotting are performed concurrently in the field on the drawing board, eliminating the need for a field notebook.",
      "topic": "Field work"
    },
    {
      "id": "bq-pyq200-q072",
      "questionNumber": 72,
      "question": "Which of the following plane table method involves in finding an instrument station ?",
      "options": [
        "Resection",
        "Radiation",
        "Intersection",
        "Traversing"
      ],
      "correctOptionIndex": 0,
      "explanation": "Resection is the plane table method where the position of an unknown occupied instrument station is located on the drawing board by sighting known visible stations.",
      "topic": "Resection"
    },
    {
      "id": "bq-pyq200-q073",
      "questionNumber": 73,
      "question": "Bessel's solution to three point problem is related to",
      "options": [
        "Trial and error method",
        "Tracing paper method",
        "Mechanical method",
        "Graphical method"
      ],
      "correctOptionIndex": 3,
      "explanation": "Bessel's method of inscribed circles is an exact graphical solution to the three-point problem in plane tabling.",
      "topic": "Bessel's method"
    },
    {
      "id": "bq-pyq200-q074",
      "questionNumber": 74,
      "question": "Principle of plane table surveying is",
      "options": [
        "Triangulation",
        "Offsetting",
        "Orientation",
        "Levelling"
      ],
      "correctOptionIndex": 2,
      "explanation": "The fundamental principle of plane table surveying is orientation by parallelism, keeping the table board parallel to its orientation at preceding stations.",
      "topic": "Principles"
    },
    {
      "id": "bq-pyq200-q075",
      "questionNumber": 75,
      "question": "What is the term that is normal to plumb line at all points?",
      "options": [
        "Level surface",
        "Datum surface",
        "Horizontal surface",
        "Vertical surface"
      ],
      "correctOptionIndex": 0,
      "explanation": "A level surface is a curved surface that is concentric with the mean spheroidal shape of the earth and perpendicular (normal) to the gravity plumb line at every point.",
      "topic": "Level surface"
    },
    {
      "id": "bq-pyq200-q076",
      "questionNumber": 76,
      "question": "What is the benchmarks established between the G.T.S. benchmarks by the state PWD is known as",
      "options": [
        "Arbitrary benchmark",
        "Permanent benchmark",
        "Temporary benchmark",
        "G.T.S. benchmark"
      ],
      "correctOptionIndex": 1,
      "explanation": "Permanent benchmarks are fixed, durable reference points established by government departments (PWD, Railways) between primary G.T.S. benchmarks.",
      "topic": "Benchmarks"
    },
    {
      "id": "bq-pyq200-q077",
      "questionNumber": 77,
      "question": "Which level is used for precise levelling work?",
      "options": [
        "Auto level",
        "Dumpy level",
        "Wye level",
        "Tilting level"
      ],
      "correctOptionIndex": 3,
      "explanation": "A tilting level allows the telescope with its bubble tube to be tilted slightly in the vertical plane using a micrometer screw, making it suitable for precise levelling.",
      "topic": "Tilting level"
    },
    {
      "id": "bq-pyq200-q078",
      "questionNumber": 78,
      "question": "In which staff consist of three parts and one slides into another?",
      "options": [
        "Telescopic staff",
        "Invar staff",
        "Target staff",
        "Folding staff"
      ],
      "correctOptionIndex": 0,
      "explanation": "A Sopwith telescopic staff consists of three sliding telescopic lengths made of seasoned wood or aluminum, extending up to 4 or 5 meters.",
      "topic": "Levelling staff"
    },
    {
      "id": "bq-pyq200-q079",
      "questionNumber": 79,
      "question": "What is the smallest graduated division in levelling staff?",
      "options": [
        "0.5 m",
        ".05 m",
        ".005 m",
        "0.0005m"
      ],
      "correctOptionIndex": 2,
      "explanation": "The smallest graduation mark on a standard metric levelling staff is 5 mm (0.005 m).",
      "topic": "Staff least count"
    },
    {
      "id": "bq-pyq200-q080",
      "questionNumber": 80,
      "question": "Which method of contour is suitable for small and undulating area?",
      "options": [
        "By levelling method",
        "By cross section",
        "By tacheometric method",
        "By square method"
      ],
      "correctOptionIndex": 3,
      "explanation": "The square (grid) method is ideal for contouring small, undulating, and moderately flat building sites.",
      "topic": "Contouring methods"
    },
    {
      "id": "bq-pyq200-q081",
      "questionNumber": 81,
      "question": "Which method is not included in the interpolation of contours?",
      "options": [
        "Estimation",
        "Arithmetical calculation",
        "Cross section",
        "Graphical"
      ],
      "correctOptionIndex": 2,
      "explanation": "Cross-sectioning is a field method used to collect elevation data, not an interpolation technique. Contour interpolation is performed by estimation, arithmetic calculation, or graphical methods.",
      "topic": "Interpolation"
    },
    {
      "id": "bq-pyq200-q082",
      "questionNumber": 82,
      "question": "Combined correction for curvature and refraction is",
      "options": [
        "0.6723 D²",
        "0.0673 D²",
        "0.0112 D²",
        "0.112 D²"
      ],
      "correctOptionIndex": 1,
      "explanation": "Combined correction for earth curvature and atmospheric refraction is C_comb = C_c - C_r = 0.0785 D² - 0.0112 D² = 0.0673 D² meters (where D is in km).",
      "topic": "Curvature and Refraction"
    },
    {
      "id": "bq-pyq200-q083",
      "questionNumber": 83,
      "question": "What is the name of the staff 3m long and the band fitted is graduated in mm used for percise levelling?",
      "options": [
        "Invar Staff",
        "Telescopic staff",
        "Target Staff",
        "Folding staff"
      ],
      "correctOptionIndex": 0,
      "explanation": "An invar levelling staff has an invar alloy ribbon fitted with millimeter graduations under spring tension, ensuring minimal thermal expansion for precise levelling.",
      "topic": "Invar staff"
    },
    {
      "id": "bq-pyq200-q084",
      "questionNumber": 84,
      "question": "What R.F. is select for drawing town planning schemes, reservoirs etc?",
      "options": [
        "1/1000",
        "1/5000",
        "1/100",
        "1/100000"
      ],
      "correctOptionIndex": 1,
      "explanation": "For reservoir surveys, town planning, and catchment mapping, small to intermediate representative fractions such as 1/5000 (or 1/2500) are standard.",
      "topic": "Contour scales"
    },
    {
      "id": "bq-pyq200-q085",
      "questionNumber": 85,
      "question": "Contour lines of different elevations can unite to form one line in ______",
      "options": [
        "Vertical cliff",
        "Overhanging cliff",
        "Hill",
        "Valley"
      ],
      "correctOptionIndex": 0,
      "explanation": "Contour lines of different elevations coalesce into a single line along a vertical cliff (and cross each other only in an overhanging cliff or cave).",
      "topic": "Vertical cliff"
    },
    {
      "id": "bq-pyq200-q086",
      "questionNumber": 86,
      "question": "The method of indirect levelling in which the relative elevations of different points are obtained by measuring the vertical angles and horizontal distance is known as",
      "options": [
        "Barometric levelling",
        "Hypsometry",
        "Trigonometrical levelling",
        "Check Levelling"
      ],
      "correctOptionIndex": 2,
      "explanation": "Trigonometrical levelling is an indirect method where the relative difference in elevation is computed from measured vertical angles and horizontal distances.",
      "topic": "Trigonometrical levelling"
    },
    {
      "id": "bq-pyq200-q087",
      "questionNumber": 87,
      "question": "What benchmark is established for short duration such as at the end of a day's work?",
      "options": [
        "Arbitrary benchmark",
        "Temporary benchmark",
        "Permanent benchmark",
        "G.T.S. benchmark"
      ],
      "correctOptionIndex": 1,
      "explanation": "A temporary benchmark (TBM) is established at the close of a day's work on a permanent object (culvert, rock) so that levelling can resume the next day.",
      "topic": "Temporary benchmark"
    },
    {
      "id": "bq-pyq200-q088",
      "questionNumber": 88,
      "question": "Which instrument is used to establishing grade contour?",
      "options": [
        "Prismatic compass",
        "Telescopic alidade",
        "Abney level",
        "Pentagraph"
      ],
      "correctOptionIndex": 2,
      "explanation": "An Abney level is a hand-held clinometer/level used for measuring ground slope and setting out grade contours in road reconnaissance.",
      "topic": "Abney level"
    },
    {
      "id": "bq-pyq200-q089",
      "questionNumber": 89,
      "question": "Which is prismoidal formula for volume?",
      "options": [
        "L/6 (A1 + 4A2 + A3)",
        "L/3 (A1 + 4A2 + A3)",
        "L/2 (A1 + 4A2 + A3)",
        "L (A1 + 4A2 + A3)"
      ],
      "correctOptionIndex": 0,
      "explanation": "The Prismoidal formula for volume between three equidistant parallel cross-sections of spacing L is V = (L / 6) × [A1 + 4A2 + A3].",
      "topic": "Prismoidal formula"
    },
    {
      "id": "bq-pyq200-q090",
      "questionNumber": 90,
      "question": "Boundary of a catchment area will be",
      "options": [
        "Longitudinal line",
        "Datum",
        "Ridge line",
        "Valley line"
      ],
      "correctOptionIndex": 2,
      "explanation": "The natural boundary of a catchment/watershed basin separating drainage basins is the ridge line (watershed divide).",
      "topic": "Catchment boundary"
    },
    {
      "id": "bq-pyq200-q091",
      "questionNumber": 91,
      "question": "Which of the following level's telescope can be rotated by surveyor in vertical plane in a smaller amount ?",
      "options": [
        "Dumpy level",
        "Wye level",
        "Auto level",
        "Tilting level"
      ],
      "correctOptionIndex": 3,
      "explanation": "A tilting level possesses a micrometer tilting screw that tilts the telescope slightly in the vertical plane to level the line of sight precisely.",
      "topic": "Tilting level"
    },
    {
      "id": "bq-pyq200-q092",
      "questionNumber": 92,
      "question": "Station where which B.S. and F.S. are taken is called",
      "options": [
        "Intersection point",
        "Forward point",
        "Tangent point",
        "Change point --"
      ],
      "correctOptionIndex": 3,
      "explanation": "A change point (turning point) is a temporary staff station on which both a Fore Sight (FS) and Back Sight (BS) are taken to transfer the line of collimation.",
      "topic": "Change point"
    },
    {
      "id": "bq-pyq200-q093",
      "questionNumber": 93,
      "question": "Contour lines merge in the case of",
      "options": [
        "Overhanging cliff",
        "Vertical cliff",
        "Hill",
        "Pond"
      ],
      "correctOptionIndex": 1,
      "explanation": "Contour lines merge together into a single line at a vertical cliff, where points of different elevations share the exact same horizontal coordinate.",
      "topic": "Vertical cliff"
    },
    {
      "id": "bq-pyq200-q094",
      "questionNumber": 94,
      "question": "Following observations were done in reciprocal leveling. Find level difference between A and B: Dumpy level at A: staff reading at A = 1.000 m, staff reading at B = 2.500 m. Dumpy level at B: staff reading at A = 1.300 m, staff reading at B = 2.700 m.",
      "options": [
        "1.400 m",
        "1.450 m",
        "1.500 m",
        "2.900 m"
      ],
      "correctOptionIndex": 1,
      "explanation": "True level difference by reciprocal levelling: h = [(Staff_B1 - Staff_A1) + (Staff_B2 - Staff_A2)] / 2 = [(2.500 - 1.000) + (2.700 - 1.300)] / 2 = [1.500 + 1.400] / 2 = 1.450 m.",
      "topic": "Reciprocal levelling"
    },
    {
      "id": "bq-pyq200-q095",
      "questionNumber": 95,
      "question": "Gradient existing between two points is found to be 1 in 1000. Level difference between same points is 5.00 m. Find distance between two points:",
      "options": [
        "50 m",
        "0.500 km",
        "1000 m",
        "5 km"
      ],
      "correctOptionIndex": 3,
      "explanation": "Gradient = Fall / Distance => 1/1000 = 5.00 m / Distance => Distance = 5.00 × 1000 = 5000 m = 5 km.",
      "topic": "Gradient"
    },
    {
      "id": "bq-pyq200-q096",
      "questionNumber": 96,
      "question": "In levelling operation, the point of known elevation is termed as",
      "options": [
        "Bench mark",
        "Contour",
        "Plane",
        "Backsight"
      ],
      "correctOptionIndex": 0,
      "explanation": "A Bench Mark (BM) is a permanent, well-defined point of known elevation above a chosen reference datum.",
      "topic": "Bench mark"
    },
    {
      "id": "bq-pyq200-q097",
      "questionNumber": 97,
      "question": "Last level reading taken before shifting a level is entered as",
      "options": [
        "FS",
        "BS",
        "IS",
        "LS"
      ],
      "correctOptionIndex": 0,
      "explanation": "Fore Sight (FS) is the last staff reading taken in a levelling setup before moving or shifting the instrument.",
      "topic": "Fore sight"
    },
    {
      "id": "bq-pyq200-q098",
      "questionNumber": 98,
      "question": "RL of BM is 100.000. Without taking reading on BM another two staff readings, 1.000 and 3.000 were observed. What is the level difference between these two points ?",
      "options": [
        "Can't determine",
        "1.000",
        "2.000",
        "4.000"
      ],
      "correctOptionIndex": 2,
      "explanation": "Level difference = Difference between staff readings taken from the same instrument setup = 3.000 m - 1.000 m = 2.000 m.",
      "topic": "Staff reading difference"
    },
    {
      "id": "bq-pyq200-q099",
      "questionNumber": 99,
      "question": "Imaginary line formed by joining points of equal elevations on earth's surface is called",
      "options": [
        "contour",
        "section",
        "bench mark",
        "single plane"
      ],
      "correctOptionIndex": 0,
      "explanation": "A contour line is an imaginary line on the ground connecting points having the same elevation above a datum surface.",
      "topic": "Contour line"
    },
    {
      "id": "bq-pyq200-q100",
      "questionNumber": 100,
      "question": "Closely spaced contours indicate",
      "options": [
        "flat",
        "steep slope",
        "gentle slope",
        "mild slope"
      ],
      "correctOptionIndex": 1,
      "explanation": "When contour lines are closely spaced together, they indicate a steep slope; widely spaced contours indicate a gentle or flat slope.",
      "topic": "Contour spacing"
    }
  ],
  "attemptsCount": 214
};
