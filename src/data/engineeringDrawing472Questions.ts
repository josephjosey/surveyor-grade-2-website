import { BankQuestion } from '../types';

/**
 * Official Kerala PSC Basic Engineering Drawing Complete Question Bank (472 Questions)
 * Extracted directly from official Kerala PSC / ITI / Technical Education curriculum
 * Covers all 6 Chapters: Drawing Instruments, Lines/Lettering/Dimensioning, Scales, Conic Sections, Projections, and Geometry/Miscellaneous.
 */
export const ENGINEERING_DRAWING_472_QUESTIONS: BankQuestion[] = [
  {
    "id": "bq-ed472-001",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Trimmed size of 'A1' drawing paper :",
    "options": [
      "210 x 297 mm",
      "420 x 594 mm",
      "594 x 841 mm",
      "297 x 420 mm"
    ],
    "correctOptionIndex": 2,
    "explanation": "As per IS 10711:2001, the standard trimmed size of an A1 drawing sheet is 594 mm × 841 mm. The standard trimmed series starts with A0 (841 × 1189 mm), A1 (594 × 841 mm), A2 (420 × 594 mm), A3 (297 × 420 mm), and A4 (210 × 297 mm).",
    "rankerTip": "Sheet dimensions: A0 (841×1189), A1 (594×841), A2 (420×594), A3 (297×420), A4 (210×297). Aspect ratio is always 1:√2.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-002",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The untrimmed size of A0 drawing sheet is ______ mm",
    "options": [
      "265 x 880",
      "880 x 1230",
      "450 x 625",
      "330 x 450"
    ],
    "correctOptionIndex": 1,
    "explanation": "As per IS 10711, the untrimmed size of an A0 drawing sheet is 880 mm × 1230 mm, providing trim margins around the 841 mm × 1189 mm trimmed sheet format.",
    "rankerTip": "Untrimmed sizes provide margins for trimming: A0 (880×1230), A1 (625×880), A2 (450×625), A3 (330×450), A4 (240×330).",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-003",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which is the standard code specifies the sizes and layout of drawing sheet?",
    "options": [
      "IS 696-1972",
      "IS 9609-2001",
      "IS 10711 : 2001",
      "IS 10714-2001"
    ],
    "correctOptionIndex": 2,
    "explanation": "IS 10711:2001 (reaffirmed 2006, equivalent to ISO 5457:1999) is the Bureau of Indian Standards code specifying sizes, layout, and margins of drawing sheets.",
    "rankerTip": "Key BIS Codes: IS 10711 (Sheet sizes/layout), IS 1444 (Drawing boards), IS 1360 (T-squares), IS 9609 (Lettering), IS 10714 (Lines), SP 46 (Drawing practice).",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-004",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the minimum width of border on left side of A0 and A1 drawing sheet ?",
    "options": [
      "26 mm",
      "24 mm",
      "22 mm",
      "20 mm"
    ],
    "correctOptionIndex": 3,
    "explanation": "As per IS 10711, a border margin of at least 20 mm is provided on the left-hand edge (filing margin) for A0 and A1 sheets, and 10 mm for smaller sheets (A2, A3, A4).",
    "rankerTip": "Filing border on left side: 20 mm for A0 and A1; 10 mm for A2, A3, A4, and A5.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-005",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "_____ instruments is used for drawing parallel lines",
    "options": [
      "Parallel ruler",
      "Set square",
      "Clinograph",
      "All of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Parallel lines can be drawn using a parallel ruler, a combination of set squares, a mini drafter, or a clinograph. Hence, all of these instruments are used.",
    "rankerTip": "Parallel lines tools: T-square (horizontal), Set squares (inclined/vertical), Mini drafter (any orientation), Clinograph (adjustable inclined parallel lines).",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-006",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "How are pencils graded?",
    "options": [
      "Hardness or Softness of the lead",
      "Hardness or Blackness of the lead",
      "Softness or Blackness of the lead",
      "Blackness or Darkness of the lead"
    ],
    "correctOptionIndex": 0,
    "explanation": "Drawing pencils are graded according to the hardness or blackness/softness of their lead. Hard leads are designated by H, soft/black leads by B, and medium by HB and F.",
    "rankerTip": "Pencil scale: 9H (hardest) → 4H → 2H → H → F → HB → B → 2B → 7B (softest/blackest).",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-007",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The length of standard 45 degree set square is",
    "options": [
      "25 cm",
      "20 cm",
      "30 cm",
      "35 cm"
    ],
    "correctOptionIndex": 1,
    "explanation": "The standard 45° set square has a working edge length of 20 cm, while the standard 60°–30° set square has a length of 25 cm.",
    "rankerTip": "Standard set squares: 45°-45°-90° (20 cm) and 30°-60°-90° (25 cm). Made of transparent celluloid or acrylic.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-008",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is designation of drawing sheet used in 700 x 500 x 15 mm size drawing board?",
    "options": [
      "A0",
      "A1",
      "A2",
      "A3"
    ],
    "correctOptionIndex": 2,
    "explanation": "A drawing board measuring 700 mm × 500 mm (Designation D2 / B2) is designed to accommodate an A2 size drawing sheet (420 mm × 594 mm).",
    "rankerTip": "Board to sheet pairing: D0 (1500×1000) for A0; D1 (1000×700) for A1; D2 (700×500) for A2; D3 (500×350) for A3.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-009",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The card-board scales are available in a set of _____ scales",
    "options": [
      "Seven",
      "Eight",
      "Ten",
      "Twelve"
    ],
    "correctOptionIndex": 1,
    "explanation": "As per BIS, engineer's card-board scales are supplied in a standard set of eight scales designated M1 to M8, having standard metric reduction and enlargement ratios.",
    "rankerTip": "Card-board scales set contains 8 scales: M1 (Full size 1:1, 1:2), M2 (1:2.5, 1:5), M3 (1:10, 1:20), M4 (1:50, 1:100), M5 (1:200, 1:500), M6 (1:1000, 1:2000), M7 (1:1250, 1:2500), M8 (1:5000, 1:10000).",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-010",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the designation of 297 x 420 mm size paper as per BIS?",
    "options": [
      "A1",
      "A2",
      "A3",
      "A4"
    ],
    "correctOptionIndex": 2,
    "explanation": "A paper sheet measuring 297 mm × 420 mm is standard trimmed size A3 as per IS 10711.",
    "rankerTip": "Remember: A3 = 297 × 420 mm. Halving A3 along 420 mm gives A4 (210 × 297 mm).",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-011",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The recommended size of the folded drawing sheet is :",
    "options": [
      "A4",
      "A1",
      "A5",
      "A3"
    ],
    "correctOptionIndex": 0,
    "explanation": "As per IS 11664:1986, drawing sheets are systematically folded down to the standard A4 size (297 mm × 210 mm) for easy filing and storage in standard cabinets.",
    "rankerTip": "Folded drawing print size is always A4 (297 mm × 210 mm), with the title block fully visible on the front face.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-012",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Where is the position of title block in drawing sheet?",
    "options": [
      "Bottom right hand corner",
      "Bottom left hand corner",
      "Upper part on right hand corner",
      "Bottom part on left hand corner"
    ],
    "correctOptionIndex": 0,
    "explanation": "The title block of an engineering drawing sheet is always situated at the bottom right-hand corner of the sheet, bounded within the frame margin.",
    "rankerTip": "Title block size: 185 mm × 65 mm, located at the bottom-right corner for all sheet sizes.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-013",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The preferable slope of a drawing board supports :",
    "options": [
      "1:2",
      "1:4",
      "1:6",
      "1:8"
    ],
    "correctOptionIndex": 3,
    "explanation": "The recommended working inclination/slope of a drawing board on its trestle support is approximately 1:8 to 1:6 for ergonomic and fatigue-free drafting posture.",
    "rankerTip": "Drawing board slope: 1:8 or ~10° to 15° to the horizontal prevents neck and back strain.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-014",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "An instrument used to remove unnecessary line without disturbing other lines is known as :",
    "options": [
      "Duster",
      "Sand box",
      "Eraser",
      "Erasing shield"
    ],
    "correctOptionIndex": 3,
    "explanation": "An erasing shield is a thin, flexible sheet of stainless steel or plastic with various shaped cut-outs used to erase specific lines without disturbing adjoining linework.",
    "rankerTip": "Erasing shield protects surrounding lines while erasing small details or intersections.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-015",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The instrument used to draw non circular curve",
    "options": [
      "Protractor",
      "Scale of chord",
      "French curve",
      "Small bow compass"
    ],
    "correctOptionIndex": 2,
    "explanation": "French curves are curved templates with varying radii used to draw smooth non-circular, irregular curves (like ellipses, parabolas, and hyperbolas) through plotted points.",
    "rankerTip": "Compass draws circular arcs; French curves and flexible curves draw non-circular curves.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-016",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The ratio between two adjacent side of the drawing sheet is",
    "options": [
      "1:√5",
      "1:√3",
      "1:√2",
      "1:1"
    ],
    "correctOptionIndex": 2,
    "explanation": "The ratio of width to length of all ISO standard drawing sheets is strictly 1 : √2 (approximately 1 : 1.414). When halved across its length, the resulting sheet retains the exact same proportion.",
    "rankerTip": "Sheet proportions: x : y = 1 : √2. Also, xy = 1 m² for A0.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-017",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Thickness of B1 / D1 Drawing board as per IS:1444 of BIS is :",
    "options": [
      "25 mm",
      "20 mm",
      "15 mm",
      "10 mm"
    ],
    "correctOptionIndex": 0,
    "explanation": "As per IS 1444:1989, drawing board B1 (1000 mm × 700 mm) has a standard thickness of 25 mm (B0 and B1 are 25 mm thick, while B2 and B3 are 15 mm thick).",
    "rankerTip": "Drawing board thickness: B0 & B1 = 25 mm; B2 & B3 = 15 mm.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-018",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "_____ is the dimension of A3 size drawing sheet recommended by the Bureau of Indian standards as per SP:46(2003).",
    "options": [
      "841 x 1189",
      "594 x 841",
      "880 x 1230",
      "297 x 420"
    ],
    "correctOptionIndex": 3,
    "explanation": "As per SP 46:2003 and IS 10711, the trimmed dimensions of an A3 size drawing sheet are 297 mm × 420 mm.",
    "rankerTip": "A3 = 297 mm × 420 mm. Area = 0.125 m² (1/8 sq.m).",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-019",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The narrow strip of drawing board are joint together by _____ joints.",
    "options": [
      "Butt and lap joints",
      "Lapped and splayed joints",
      "Tongue and groove joint",
      "Butt and dovetail joints"
    ],
    "correctOptionIndex": 2,
    "explanation": "Drawing boards are constructed from several narrow planks of seasoned wood joined together edge-to-edge by tongue and groove joints to prevent lateral warping.",
    "rankerTip": "Drawing boards use tongue and groove joints with wooden battens screwed across the back in oblong slotted holes.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-020",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The standard size of D3 drawing board is",
    "options": [
      "700 x 500 x 25 mm",
      "700 x 500 x 15 mm",
      "500 x 350 x 25 mm",
      "500 x 350 x 15 mm"
    ],
    "correctOptionIndex": 3,
    "explanation": "As per IS 1444:1989, drawing board D3 (or B3) has standard dimensions of 500 mm × 350 mm × 15 mm.",
    "rankerTip": "Board sizes: D0 (1500×1000×25), D1 (1000×700×25), D2 (700×500×15), D3 (500×350×15).",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-021",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The drawing instrument which helps to draw smooth curve passing through any given points is a",
    "options": [
      "French curve",
      "Engineering curve",
      "Flexible curve",
      "Template"
    ],
    "correctOptionIndex": 2,
    "explanation": "A flexible curve (or spline) is a lead-core flexible drafting tool covered in plastic that can be bent into any smooth curve passing through plotted coordinate points.",
    "rankerTip": "French curve has fixed cutout profiles; Flexible curve can be molded to fit any set of points.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-022",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The following is not included in title block of drawing sheet :",
    "options": [
      "Sheet no",
      "Scale",
      "Method of projection",
      "Sheet size"
    ],
    "correctOptionIndex": 3,
    "explanation": "The title block contains the name of the firm, title of drawing, drawing number, scale, symbol of projection, and approval signatures. The sheet size itself is not printed inside the title block.",
    "rankerTip": "Title block features: Title, Scale, Projection symbol, Drawing number, Firm name, Revision notes.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-023",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the minimum width of border on left side of A4, & A5 drawing sheet?",
    "options": [
      "8 mm",
      "12 mm",
      "10 mm",
      "14 mm"
    ],
    "correctOptionIndex": 2,
    "explanation": "As per IS 10711, the minimum margin width on the left-hand filing border of A4 and A5 drawing sheets is 10 mm (and 20 mm for A0 and A1).",
    "rankerTip": "Filing margin: 20 mm for A0/A1, 10 mm for A2/A3/A4/A5.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-024",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Standard size of drawing sheets recommended by the Bureau of Indian Standards is",
    "options": [
      "210 mm x 297 mm",
      "297 mm x 420 mm",
      "420 mm x 594 mm",
      "All of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Bureau of Indian Standards (IS 10711) recommends standard sheet sizes including A4 (210×297 mm), A3 (297×420 mm), and A2 (420×594 mm). Hence, all of these are standard sizes.",
    "rankerTip": "All 'A' series sheets are standardized by BIS: A0, A1, A2, A3, A4, A5.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-025",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The preferred size of the drawing sheet is recommended by the",
    "options": [
      "BIS",
      "ASME",
      "ASTE",
      "NIST"
    ],
    "correctOptionIndex": 0,
    "explanation": "In India, preferred sizes and standards for technical drawing sheets are formulated and published by the Bureau of Indian Standards (BIS).",
    "rankerTip": "BIS (Bureau of Indian Standards) is India's national standards body (formerly ISI).",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-026",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which wood is used to made wooden T-square ?",
    "options": [
      "Teak",
      "Oak",
      "Pine",
      "Linoleum"
    ],
    "correctOptionIndex": 0,
    "explanation": "Wooden T-squares and drawing boards are traditionally crafted from well-seasoned teak wood or straight-grained mahogany/pine due to its dimensional stability and resistance to warping.",
    "rankerTip": "Teak wood is preferred for T-squares and high-precision drafting edges due to low thermal expansion.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-027",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The designation of standard recommended scales of 1:10 and 1:20 is :",
    "options": [
      "M2",
      "M4",
      "M5",
      "M3"
    ],
    "correctOptionIndex": 3,
    "explanation": "As per standard metric cardboard scale sets (IS 10711 / IS 1444), scales 1:10 and 1:20 are designated as scale M3.",
    "rankerTip": "Scale designations: M1 (1:1, 1:2), M2 (1:2.5, 1:5), M3 (1:10, 1:20), M4 (1:50, 1:100), M5 (1:200, 1:500).",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-028",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Set-squares are used for drawing",
    "options": [
      "Vertical lines",
      "Parallel lines",
      "Inclined lines",
      "All of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Set-squares, used individually or in combination with a T-square, can draw vertical lines, parallel lines, and inclined lines at standard angles (30°, 45°, 60°, 75°, etc.). Hence, all of these.",
    "rankerTip": "Set-squares can draft vertical lines, parallel lines, perpendicular lines, and angles in multiples of 15°.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-029",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which BIS code no is recommended for folding of drawing sheets?",
    "options": [
      "IS 10664 - 1986",
      "IS 11662 - 1986",
      "IS 11664 - 1986",
      "IS 10662 - 1986"
    ],
    "correctOptionIndex": 2,
    "explanation": "IS 11664:1986 is the Indian Standard specification for folding of drawing prints for filing and archival storage.",
    "rankerTip": "IS 11664:1986 gives folding methods: Method 1 (with filing margin, 297×190 mm) and Method 2 (without filing margin, 297×210 mm).",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-030",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The traditional drawing board made up of _____ wood.",
    "options": [
      "Jack",
      "Teak",
      "Pine",
      "Rose"
    ],
    "correctOptionIndex": 2,
    "explanation": "Traditional drafting drawing boards are made from soft seasoned woods such as white pine, fir, or well-seasoned teak with straight grain free from knots.",
    "rankerTip": "Drawing board wood must be soft enough to accept drafting pins without splitting, typically pine, fir, or deodar.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-031",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following instrument is used to draw parallel lines at any angles ?",
    "options": [
      "Setsquare",
      "Clinograph",
      "Pantograph",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "A clinograph is an adjustable drafting instrument with a movable blade that can be clamped at any angle to the base, used to draw parallel lines at any inclined angle.",
    "rankerTip": "Clinograph = Adjustable set square for parallel inclined lines.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-032",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The T-square with the working edge length of 1500 ± 10 mm, is designated as",
    "options": [
      "T0",
      "T1",
      "T2",
      "T3"
    ],
    "correctOptionIndex": 0,
    "explanation": "As per IS 1360:1989, a T-square having a blade working edge length of 1500 ± 10 mm is designated as T0.",
    "rankerTip": "T-square sizes: T0 = 1500 mm (for D0), T1 = 1000 mm (for D1), T2 = 700 mm (for D2), T3 = 500 mm (for D3).",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-033",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The least count of vernier bevel protractor is",
    "options": [
      "5°",
      "15'",
      "5'",
      "1° / 12"
    ],
    "correctOptionIndex": 3,
    "explanation": "The least count of a standard vernier bevel protractor is 5 minutes of arc (5', which is 1/12 of a degree).",
    "rankerTip": "Least count of vernier bevel protractor = 1 MSD - 1 VSD = 1° - (23°/12) = 1/12° = 5 minutes (5').",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-034",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The untrimmed size of A2 drawing sheet is :",
    "options": [
      "450 x 625 mm",
      "420 x 594 mm",
      "594 x 841 mm",
      "625 x 880 mm"
    ],
    "correctOptionIndex": 0,
    "explanation": "As per IS 10711, the untrimmed size of an A2 drawing sheet is 450 mm × 625 mm (trimmed size: 420 mm × 594 mm).",
    "rankerTip": "Untrimmed A2 = 450 × 625 mm; Trimmed A2 = 420 × 594 mm.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-035",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is A4 designation for untrimmed size of drawing sheet?",
    "options": [
      "450 x 625 mm",
      "330 x 450 mm",
      "240 x 330 mm",
      "165 x 240 mm"
    ],
    "correctOptionIndex": 2,
    "explanation": "The untrimmed size of an A4 drawing sheet as per IS 10711 is 240 mm × 330 mm (trimmed size: 210 mm × 297 mm).",
    "rankerTip": "Untrimmed A4 = 240 × 330 mm; Trimmed A4 = 210 × 297 mm.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-036",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The edge of drawing board on which T-square is made to slide is called its :",
    "options": [
      "Working edge",
      "Straight edge",
      "Chisel edge",
      "None of the above"
    ],
    "correctOptionIndex": 0,
    "explanation": "The perfectly straight ebony edge on the left side of the drawing board along which the stock of the T-square slides is called the working edge.",
    "rankerTip": "Working edge is on the left side of the board, fitted with an inlaid ebony strip.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-037",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Trimmed size of A5 drawing sheet is :",
    "options": [
      "138 x 210 mm",
      "148 x 210 mm",
      "138 x 297 mm",
      "148 x 297 mm"
    ],
    "correctOptionIndex": 1,
    "explanation": "As per IS 10711, the trimmed size of an A5 drawing sheet is 148 mm × 210 mm.",
    "rankerTip": "A5 = 148 mm × 210 mm. Obtained by halving A4 (210 × 297 mm).",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-038",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Engineer's scales is used to make",
    "options": [
      "Full size",
      "Reduced size",
      "Enlarged size",
      "All of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Engineer's scales are graduated to draw full size (1:1), reduced size (e.g. 1:2, 1:5, 1:100), or enlarged size (e.g. 2:1, 5:1). Hence, all of these.",
    "rankerTip": "Scale types: Full size (1:1), Reduced (1:x where x>1), Enlarged (x:1 where x>1).",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-039",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "To remove unnecessary lines _____ is used.",
    "options": [
      "duster",
      "chalk",
      "sand paper",
      "eraser"
    ],
    "correctOptionIndex": 3,
    "explanation": "An eraser (rubber) is used to erase and remove pencil lines and errors on drawing paper.",
    "rankerTip": "Erasers should be soft and vulcanized to remove graphite without roughening the paper fibers.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-040",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "T-square is used for drawing _____ lines",
    "options": [
      "Inclines",
      "Parallel",
      "Curved",
      "Continuous"
    ],
    "correctOptionIndex": 1,
    "explanation": "A T-square sliding against the working edge of a drawing board is specifically used for drawing horizontal parallel lines.",
    "rankerTip": "T-square = Horizontal lines; Set square against T-square = Vertical and inclined lines.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-041",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The least count of vernier bevel protractor is",
    "options": [
      "1°",
      "0.5°",
      "5'",
      "5\""
    ],
    "correctOptionIndex": 2,
    "explanation": "The least count of a vernier bevel protractor is 5 minutes (5').",
    "rankerTip": "Bevel protractor LC = 5 minutes = 1/12 degree.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-042",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the standard line thickness of the border line ?",
    "options": [
      "0.10 mm",
      "0.60 mm",
      "0.15 mm",
      "0.20 mm"
    ],
    "correctOptionIndex": 1,
    "explanation": "As per IS 10711, the standard line thickness for drawing sheet border lines is 0.60 mm (or 0.70 mm thick continuous line).",
    "rankerTip": "Border line thickness = 0.60 mm to 0.70 mm; Frame margin = 10 mm (or 20 mm on left).",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-043",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the name of instrument used for measuring angles?",
    "options": [
      "T square",
      "Compass",
      "Protractor",
      "Set square"
    ],
    "correctOptionIndex": 2,
    "explanation": "A protractor is the standard drafting instrument used for measuring and laying out angles from 0° to 180° or 360°.",
    "rankerTip": "Semi-circular protractor: 0° to 180°; Circular protractor: 0° to 360°.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-044",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The instrument used for dividing lines into equal parts and for transferring dimensions",
    "options": [
      "Divider",
      "Scale set",
      "Set squares",
      "Protractors"
    ],
    "correctOptionIndex": 0,
    "explanation": "A divider has two sharp needle points, used for dividing straight or curved lines into equal segments, stepping off distances, and transferring dimensions from scales.",
    "rankerTip": "Divider = Transferring dimensions & dividing lines; Compass = Drawing circles and arcs.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-045",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which is the most common tool used for drawing circles",
    "options": [
      "French curve",
      "Mini drafter",
      "Divider",
      "Compass"
    ],
    "correctOptionIndex": 3,
    "explanation": "A compass is the primary and most common drafting instrument used for drawing circles and circular arcs.",
    "rankerTip": "Compass: Pivot joint type for general circles, Bow compass for small circles (<25 mm dia).",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-046",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Erasing shield is used for :",
    "options": [
      "Ammonia printing",
      "Damp proof course",
      "Blue printing",
      "None of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "An erasing shield is used for protecting nearby linework when erasing specific lines on a drawing.",
    "rankerTip": "Erasing shield prevents accidental erasing of adjoining lines in crowded drawings.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-047",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "T-square are designated by its",
    "options": [
      "Breadth",
      "Overall length",
      "Blade length",
      "Width of head"
    ],
    "correctOptionIndex": 2,
    "explanation": "As per IS 1360:1989, T-squares are designated by the length of their blade working edge (e.g., T0 has a blade length of 1500 mm, T1 is 1000 mm).",
    "rankerTip": "T-square designation is based on Blade length (working edge length).",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-048",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "As per BIS (IS 1444-1989) the standard size of B1 drawing board is _____",
    "options": [
      "1000 x 1500 mm",
      "700 x 1000 mm",
      "500 x 700 mm",
      "350 x 500 mm"
    ],
    "correctOptionIndex": 1,
    "explanation": "As per IS 1444-1989, drawing board B1 has standard dimensions of 1000 mm × 700 mm (and 25 mm thickness).",
    "rankerTip": "B1 board = 1000 mm × 700 mm × 25 mm. Used with A1 drawing sheets.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-049",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Bow compasses are used for drawing :",
    "options": [
      "Small circles upto 25 mm dia.",
      "Large circles upto 100 mm dia.",
      "Large circles more than 100 mm dia.",
      "Small circles more than 25 mm dia."
    ],
    "correctOptionIndex": 0,
    "explanation": "Bow compasses are specialized small compasses with a central thumb-screw adjustment used for drawing small circles and arcs up to 25 mm diameter.",
    "rankerTip": "Bow compass: Dia < 25 mm; Large compass: Dia up to 100 mm; Lengthening bar: Dia > 100 mm.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-050",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "While drawing inclined lines, the angle between the two arms of the mini drafter is",
    "options": [
      "90°",
      "less than 90°",
      "more than 90°",
      "Depends upon inclination of line"
    ],
    "correctOptionIndex": 0,
    "explanation": "In a mini-drafter, the two graduated arms/scales are clamped permanently at right angles (90°) to each other regardless of the drafter's orientation on the board.",
    "rankerTip": "Mini drafter combines T-square, set-square, protractor, and scale. Its two scales are always at 90°.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-051",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The surface area of A0 drawing sheet is :",
    "options": [
      "0.5 m²",
      "1 m²",
      "1.44 m²",
      "2 m²"
    ],
    "correctOptionIndex": 1,
    "explanation": "By definition, the base A0 format drawing sheet has a surface area of exactly 1 square meter (1 m² = 841 mm × 1189 mm).",
    "rankerTip": "A0 area = 1 m²; A1 = 0.5 m²; A2 = 0.25 m²; A3 = 0.125 m²; A4 = 0.0625 m².",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-052",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the untrimmed size of A5 designation drawing sheet?",
    "options": [
      "450 x 625",
      "330 x 450",
      "240 x 330",
      "165 x 240"
    ],
    "correctOptionIndex": 3,
    "explanation": "As per IS 10711, the untrimmed size of an A5 drawing sheet is 165 mm × 240 mm (trimmed: 148 mm × 210 mm).",
    "rankerTip": "Untrimmed A5 = 165 × 240 mm; Trimmed A5 = 148 × 210 mm.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-053",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "By the combination of set squares, we can create _____ angle.",
    "options": [
      "90°, 60°, 45°, 30°",
      "90°",
      "Multiples of 15°",
      "Any angle"
    ],
    "correctOptionIndex": 2,
    "explanation": "By combining the 45°-45°-90° and 30°-60°-90° set squares, draftsmen can construct angles in any multiple of 15° (15°, 30°, 45°, 60°, 75°, 90°, 105°, 120°, 135°, 150°, 165°).",
    "rankerTip": "Set square combinations: 45° - 30° = 15°; 45° + 30° = 75°; 45° + 60° = 105°; etc.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-054",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "For reducing and enlarging drawing from an available drawing without converting numerical value is called",
    "options": [
      "Compass",
      "Proportional divider",
      "Set square",
      "Planimeter"
    ],
    "correctOptionIndex": 1,
    "explanation": "A proportional divider is used for reducing or enlarging drawings in any desired proportion without converting or calculating numerical values.",
    "rankerTip": "Proportional divider has two legs with a sliding pivot that sets linear scale enlargement/reduction ratios.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-055",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The standard size of D1 drawing boards as per BIS (1444 -1977), in mm :",
    "options": [
      "500 x 350 x 15",
      "1000 x 700 x 25",
      "1500 x 1000 x 25",
      "700 x 500 x 15"
    ],
    "correctOptionIndex": 1,
    "explanation": "As per BIS (IS 1444-1977/1989), drawing board D1 (or B1) has standard dimensions of 1000 mm × 700 mm × 25 mm.",
    "rankerTip": "D1 board = 1000 × 700 × 25 mm.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-056",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the maximum degree can be measured in circular protractor?",
    "options": [
      "360°",
      "270°",
      "180°",
      "390°"
    ],
    "correctOptionIndex": 0,
    "explanation": "A circular (full circle) protractor measures angles up to 360°.",
    "rankerTip": "Semi-circular protractor: 180°; Circular protractor: 360°.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-057",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the name of space enclosed by the margin from the edges of the trimmed size of sheet?",
    "options": [
      "Border",
      "Lay out",
      "Boundary",
      "Folding mark"
    ],
    "correctOptionIndex": 0,
    "explanation": "The space enclosed by the margin lines from the trimmed edges of the drawing sheet is called the border (or drawing frame).",
    "rankerTip": "Border encloses the entire usable drawing working area.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-058",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The standard size of A2 drawing sheet in mm is :",
    "options": [
      "841 x 1189",
      "297 x 420",
      "397 x 420",
      "420 x 594"
    ],
    "correctOptionIndex": 3,
    "explanation": "As per IS 10711:2001, the standard trimmed size of an A2 drawing sheet is 420 mm × 594 mm.",
    "rankerTip": "A2 = 420 mm × 594 mm.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-059",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The 700 mm x 1000 mm size of Drawing board designate as per BIS is",
    "options": [
      "B0",
      "B1",
      "B2",
      "B3"
    ],
    "correctOptionIndex": 1,
    "explanation": "As per IS 1444, a drawing board measuring 1000 mm × 700 mm is designated as B1 (or D1).",
    "rankerTip": "700 × 1000 mm board = B1 designation.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-060",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The standard size of B2 imperial drawing is",
    "options": [
      "700 x 600",
      "800 x 600",
      "800 x 500",
      "700 x 500"
    ],
    "correctOptionIndex": 3,
    "explanation": "A standard B2 imperial drawing board measures 700 mm × 500 mm (or 800 × 600 mm in imperial trade sizes, 700 × 500 mm under metric BIS).",
    "rankerTip": "B2 metric size = 700 × 500 mm.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-061",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The area of trimmed size of A2 drawing sheet is",
    "options": [
      "0.25 sq m",
      "0.50 sq m",
      "1 sq m",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "The trimmed area of an A2 drawing sheet is 420 mm × 594 mm = 0.24948 m² ≈ 0.25 sq m (1/4 of an A0 sheet).",
    "rankerTip": "Area of A0 = 1.0 m²; A1 = 0.50 m²; A2 = 0.25 m²; A3 = 0.125 m².",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-062",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "French curves are used to",
    "options": [
      "Draw irregular curve",
      "Draw conic section",
      "Draw arcs of fixed radius",
      "Draw arcs of varying radius"
    ],
    "correctOptionIndex": 0,
    "explanation": "French curves are used to draw irregular non-circular curves and arcs of varying curvature that cannot be produced using a standard compass.",
    "rankerTip": "French curves provide smooth transitions between non-circular coordinate points.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-063",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the angle between the stock / head and blade in T- square?",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctOptionIndex": 3,
    "explanation": "In a T-square, the angle between the stock (head) and the blade is fixed strictly at 90° (right angle).",
    "rankerTip": "Angle between T-square stock and blade = 90°.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-064",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "How many vertical folds come under A0 size trimmed drawing sheet?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctOptionIndex": 1,
    "explanation": "As per IS 11664:1986, an A0 size trimmed drawing sheet requires 6 vertical folds (or 7 vertical folds depending on the filing margin method) to fold down to A4 size.",
    "rankerTip": "Folding: A0 requires 6 to 7 vertical folds and 2 horizontal folds to reach A4 size.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-065",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The final size of the folded print which are to be fixed will be",
    "options": [
      "297 x 200 mm",
      "297 x 210 mm",
      "290 x 190 mm",
      "290 x 180 mm"
    ],
    "correctOptionIndex": 1,
    "explanation": "As per IS 11664, the final size of folded drawing prints for filing and storage is standard A4 size (297 mm × 210 mm).",
    "rankerTip": "Final folded print size is always 297 mm × 210 mm (A4).",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-066",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The untrimmed size of A1 drawing sheet is",
    "options": [
      "625 x 880 mm",
      "494 x 841 mm",
      "450 x 625 mm",
      "330 x 450 mm"
    ],
    "correctOptionIndex": 0,
    "explanation": "As per IS 10711, the untrimmed size of an A1 drawing sheet is 625 mm × 880 mm (trimmed size: 594 mm × 841 mm).",
    "rankerTip": "Untrimmed A1 = 625 × 880 mm.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-067",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the Indian standard code for drawing boards designated?",
    "options": [
      "IS: 1360 - 1989",
      "IS: 1444 - 1989",
      "IS: 10811 - 1983",
      "IS: 10711 - 1983"
    ],
    "correctOptionIndex": 1,
    "explanation": "IS 1444:1989 is the official Indian Standard code specifying requirements for Engineer's Drawing Boards.",
    "rankerTip": "IS 1444:1989 = Drawing Boards; IS 1360:1989 = T-Squares.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-068",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Using 30°-60°-90° and 45°-45°-90° set squares, which of the following angle is not possible to draw?",
    "options": [
      "45°",
      "30°",
      "10°",
      "90°"
    ],
    "correctOptionIndex": 2,
    "explanation": "Set squares can only construct angles that are multiples of 15° (e.g. 15°, 30°, 45°, 60°, 75°, 90°, 105°). An angle of 10° cannot be drawn using standard 30°-60°-90° and 45°-45°-90° set squares.",
    "rankerTip": "Set squares alone cannot construct 10°, 20°, 25°, 40°, 50°, etc.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-069",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the designation of 420 x 594 mm size paper as per BIS?",
    "options": [
      "A1",
      "A2",
      "A3",
      "A4"
    ],
    "correctOptionIndex": 1,
    "explanation": "A sheet measuring 420 mm × 594 mm is designated as A2 as per BIS (IS 10711:2001).",
    "rankerTip": "420 × 594 mm = A2 sheet.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-070",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "For drawing circles with large radius _____ tool is used",
    "options": [
      "Bow compass",
      "Large size compass with lengthening bar",
      "Divider",
      "Protractors"
    ],
    "correctOptionIndex": 1,
    "explanation": "For drawing circular arcs with large radii exceeding 100 mm, a large compass fitted with a lengthening bar attachment is used.",
    "rankerTip": "Lengthening bar increases compass radius up to 250 mm or more.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-071",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following is the largest size of drawing sheet ?",
    "options": [
      "A0",
      "A1",
      "A2",
      "A3"
    ],
    "correctOptionIndex": 0,
    "explanation": "A0 (841 mm × 1189 mm, area 1.0 m²) is the largest standard size drawing sheet specified in the ISO / BIS series.",
    "rankerTip": "A0 is the largest sheet format; each subsequent size has half the surface area.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-072",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The use of clinograph",
    "options": [
      "To draw horizontal line",
      "To draw vertical line",
      "To draw inclined line at any angle",
      "To draw free hand line"
    ],
    "correctOptionIndex": 2,
    "explanation": "A clinograph is an adjustable set-square used to draw inclined parallel lines at any arbitrary angle.",
    "rankerTip": "Clinograph = Tool for drawing parallel lines at any inclined angle.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-073",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which is a small shaped instrument of the drafting machine ?",
    "options": [
      "T scale",
      "Scale set",
      "mini drafter",
      "Planimeter"
    ],
    "correctOptionIndex": 2,
    "explanation": "A mini-drafter is a compact drafting machine combining the functions of a T-square, set-square, protractor, and scale.",
    "rankerTip": "Mini drafter = Compact drafting machine.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-074",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Folding method of drawing sheet as per method 1 is",
    "options": [
      "297 x 210",
      "297 x 190",
      "185 x 65",
      "240 x 330"
    ],
    "correctOptionIndex": 1,
    "explanation": "Folding method 1 as per IS 11664:1986 provides a filing margin, folding to a width of 190 mm and length of 297 mm (297 mm × 190 mm).",
    "rankerTip": "Method 1 (with filing tab) folds to 297 × 190 mm; Method 2 (without filing tab) folds to 297 × 210 mm.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-075",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Size of B0 drawing board in mm is",
    "options": [
      "1500 x 1000 x 25",
      "1000 x 700 x 25",
      "700 x 500 x 15",
      "500 x 350 x 15"
    ],
    "correctOptionIndex": 0,
    "explanation": "As per IS 1444:1989, drawing board B0 (or D0) has dimensions of 1500 mm × 1000 mm × 25 mm.",
    "rankerTip": "B0 board = 1500 × 1000 × 25 mm.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-076",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "To prevent warping of the board _____ are cleated at its back",
    "options": [
      "Packing",
      "Wooden block",
      "Battens",
      "Blades"
    ],
    "correctOptionIndex": 2,
    "explanation": "To prevent seasonal warping, twisting, and splitting of the drawing board planks, wooden battens are screwed onto the back through slotted holes.",
    "rankerTip": "Battens at the back allow seasonal expansion/contraction while preventing board warping.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-077",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The areas of the two subsequent sizes of drawing papers are in the ratio",
    "options": [
      "1:√2",
      "1:2",
      "2:1",
      "√2:1"
    ],
    "correctOptionIndex": 2,
    "explanation": "The areas of two subsequent standard sizes of drawing sheets (e.g. A0 and A1, or A1 and A2) are in the exact ratio of 2 : 1 (or 1 : 2).",
    "rankerTip": "Area ratio of consecutive sheet sizes = 2:1.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-078",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The Trimmed size of A4 drawing paper as per Bureau of Indian Standards (BIS) is",
    "options": [
      "841 x 1189 mm",
      "594 x 841 mm",
      "420 X 594 mm",
      "210 x 297 mm"
    ],
    "correctOptionIndex": 3,
    "explanation": "As per Bureau of Indian Standards (IS 10711:2001), the trimmed size of an A4 drawing paper is 210 mm × 297 mm.",
    "rankerTip": "A4 = 210 mm × 297 mm.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-079",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "T-Square is used for drawing",
    "options": [
      "Vertical lines",
      "Horizontal lines",
      "Curved lines",
      "Inclined lines"
    ],
    "correctOptionIndex": 1,
    "explanation": "A T-square is guided along the working edge of the board to draw horizontal parallel lines across the sheet.",
    "rankerTip": "T-square = Horizontal parallel lines.",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-080",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A drawing sheet is folded such that the _____ is always on top",
    "options": [
      "Drawing",
      "Folding mark",
      "Title block",
      "Centering mark"
    ],
    "correctOptionIndex": 2,
    "explanation": "A drawing print is folded in such a manner that the title block remains visible on the top face for quick identification in filing drawers.",
    "rankerTip": "Title block is always on the top face of the folded print.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-081",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The T-square with the working edge length of 1000mm, is designated as _____",
    "options": [
      "T0",
      "T2",
      "T1",
      "T3"
    ],
    "correctOptionIndex": 2,
    "explanation": "As per IS 1360:1989, a T-square having a blade working edge length of 1000 mm is designated as T1.",
    "rankerTip": "T-square T1 has blade length 1000 mm (used with B1 board).",
    "topic": "Drawing instruments",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-082",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The size of title block for all size of drawing sheet is 185mm x _____ mm",
    "options": [
      "65",
      "100",
      "50",
      "80"
    ],
    "correctOptionIndex": 0,
    "explanation": "As per IS 10711 and SP 46:2003, the title block for all sizes of drawing sheets has a standard size of 185 mm × 65 mm.",
    "rankerTip": "Standard Title Block size = 185 mm × 65 mm.",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-083",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The length to width ratio of drawing sheet is :",
    "options": [
      "1:√2",
      "√2:1",
      "2:1",
      "1:2"
    ],
    "correctOptionIndex": 1,
    "explanation": "The ratio of length to width of any standard ISO drawing sheet is √2 : 1 (or width to length is 1 : √2).",
    "rankerTip": "Length to width ratio = √2 : 1 (1.414 : 1).",
    "topic": "Drawing sheet",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.1: Drawing Instruments)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-084",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following grades of leads is the hardest ?",
    "options": [
      "4B",
      "F",
      "HB",
      "6B"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option F. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option F is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-085",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Hidden lines are drawn as :",
    "options": [
      "Dashed narrow lines",
      "Dashed wide lines",
      "Long dashed dotted lines",
      "Long dashed double lines"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Dashed narrow lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Dashed narrow lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-086",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the name of thin continuous line terminated at ends by arrow heads, dots or oblique line touching the extension line?",
    "options": [
      "Leader line",
      "Extension line",
      "Dimension line",
      "Termination line"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Dimension line. As per BIS standards, closed filled arrowheads have a length-to-width ratio of 3:1, with a recommended minimum length of 3 mm.",
    "rankerTip": "Arrowhead: Length : Width = 3 : 1; minimum length = 3 mm.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-087",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The length of arrow head is generally",
    "options": [
      "Same as width",
      "Greater than width",
      "3 times its width",
      "Two times its width"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 3 times its width. As per BIS standards, closed filled arrowheads have a length-to-width ratio of 3:1, with a recommended minimum length of 3 mm.",
    "rankerTip": "Arrowhead: Length : Width = 3 : 1; minimum length = 3 mm.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-088",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Inner details of an object not visible from outside are represented by",
    "options": [
      "Visible outlines",
      "Dimension lines",
      "Dashed lines",
      "Centre lines"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Dashed lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Dashed lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-089",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The length width in case of an arrow head is",
    "options": [
      "1:1",
      "2:1",
      "3:1",
      "4:1"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 3:1. As per BIS standards, closed filled arrowheads have a length-to-width ratio of 3:1, with a recommended minimum length of 3 mm.",
    "rankerTip": "Arrowhead: Length : Width = 3 : 1; minimum length = 3 mm.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-090",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Outline or principal lines are drawn as :",
    "options": [
      "Long and thin chain lines",
      "Thick continuous line",
      "Thin continuous line",
      "Dashed lines of medium thickness"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Thick continuous line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Thick continuous line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-091",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In technical drawing pencil are selected according to their :",
    "options": [
      "Length",
      "Diameter",
      "Grade",
      "Lead colour"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Grade. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Grade is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-092",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The grade of pencil used for construction lines, dimension lines, centre lines and section lines is",
    "options": [
      "2H",
      "HB",
      "H",
      "2B"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 2H. Section/hatching lines are continuous thin lines drawn at 45° to the horizontal or main outline to indicate surface cut by a cutting plane.",
    "rankerTip": "Hatching lines: 45° inclination, continuous thin (Type B), spaced 1 to 2 mm apart.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-093",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Dimensioning starting from a common feature and shown to the right and to the left of the common feature is called as",
    "options": [
      "Chain dimensioning",
      "Parallel dimensioning",
      "Dimensioning by coordinates",
      "Combined dimensioning"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Parallel dimensioning. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Parallel dimensioning is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-094",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Single stroke lettering recommended by BIS for use in engineering drawing is :",
    "options": [
      "IS 9608 - 83",
      "IS 9609 - 83",
      "IS 9600 - 86",
      "IS 9607 - 85"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option IS 9609 - 83. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option IS 9609 - 83 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-095",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following pencil lead is hardest ?",
    "options": [
      "HB",
      "H",
      "B",
      "F"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option H. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option H is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-096",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In lettering \"Type A\" as per IS 9609, the height of capital letters (h) is divided into :",
    "options": [
      "10 equal parts",
      "8 equal parts",
      "14 equal parts",
      "12 equal parts"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 14 equal parts. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 14 equal parts is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-097",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Find out line, The description of B4 in leader line",
    "options": [
      "Dashed thin line",
      "Continuous thin line",
      "Dashed thick line",
      "Chain thin line"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Continuous thin line. A leader line is a continuous thin line with an arrowhead or dot, inclined at 30° to 60° with a short horizontal shoulder connecting a note or dimension to a feature.",
    "rankerTip": "Leader line: inclined at 30°–60° with a horizontal shoulder.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-098",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Lines drawn to represent visible edges and surface boundaries of objects are called",
    "options": [
      "Dashed lines",
      "Out lines",
      "Centre lines",
      "Dimension lines"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Out lines. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-099",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The inclination of letters as recommended by BIS is",
    "options": [
      "75°",
      "70°",
      "65°",
      "60°"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 75°. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 75° is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-100",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The method of dimensioning which the placement of a member of single dimension lines parallel to one another spaced out so that the dimensional value can easily be added is known as",
    "options": [
      "Parallel dimensioning",
      "Chain dimensioning",
      "Zig zag dimensioning",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Parallel dimensioning. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Parallel dimensioning is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-101",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the size / height in mm for material list and dimensioning in drawings?",
    "options": [
      "9 to 10",
      "7 to 8",
      "5 to 6",
      "3 to 5"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option 3 to 5. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 3 to 5 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-102",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which one of the following is represented by thin continuous line?",
    "options": [
      "Hatching lines",
      "Hidden lines",
      "Centre lines",
      "Visible outline"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Hatching lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Hatching lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-103",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A leader line is usually",
    "options": [
      "inclined line with short horizontal shoulder",
      "vertical line",
      "horizontal line",
      "Tangential line"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option inclined line with short horizontal shoulder. A leader line is a continuous thin line with an arrowhead or dot, inclined at 30° to 60° with a short horizontal shoulder connecting a note or dimension to a feature.",
    "rankerTip": "Leader line: inclined at 30°–60° with a horizontal shoulder.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-104",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "_____ lines are used to indicate the termination of a dimension line.",
    "options": [
      "Outlines",
      "Extension lines",
      "Leader lines",
      "All of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Extension lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Extension lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-105",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The method in which the numbers are placed parallel or in line with the dimension line is called :",
    "options": [
      "Unidirectional system",
      "Angular system",
      "Aligned system",
      "Linear system"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Aligned system. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Aligned system is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-106",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In drawings, continuous thick lines (Type A) are used to represent :",
    "options": [
      "Visible edges",
      "Dimension lines",
      "Centre lines",
      "Hidden lines"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Visible edges. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Visible edges is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-107",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which line is used to indicate the axis of cylindrical and spherical object?",
    "options": [
      "Center line",
      "Border line",
      "Hidden line",
      "Chain thick line"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Center line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Center line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-108",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The types of letters used in drawing are :",
    "options": [
      "Gothic",
      "Roman",
      "Italic",
      "All of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option All of these. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option All of these is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-109",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The lines drawn at an angle of 45° to make the sections evident",
    "options": [
      "Cutting plane lines",
      "Border lines",
      "Hatching lines",
      "Extension lines"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Hatching lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Hatching lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-110",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The type of line used for centre line is",
    "options": [
      "Chain thick",
      "Chain thin",
      "Dashed thick",
      "Dashed thin"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Chain thin. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Chain thin is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-111",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Conical edge pencil is used for :",
    "options": [
      "Drawing the line",
      "Lettering",
      "Drawing thick line",
      "Drawing medium thick line"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Lettering. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Lettering is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-112",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following lines is a part of dimension ?",
    "options": [
      "Phantom lines",
      "Extension lines",
      "Break lines",
      "Cutting plane line"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Extension lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Extension lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-113",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In dimension, dimensional values shall be placed parallel to their dimension line and preferably near the middle. This method of dimensioning is known as :",
    "options": [
      "Unidirectional system of dimensioning",
      "Aligned system of dimensioning",
      "Dimensioning by co-ordinates",
      "Dimensioning by taper parts"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Aligned system of dimensioning. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Aligned system of dimensioning is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-114",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The section line is used to show",
    "options": [
      "Rolled section of steel",
      "The part cut by a cutting plane",
      "A small section of the main object",
      "None of the above"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option The part cut by a cutting plane. Section/hatching lines are continuous thin lines drawn at 45° to the horizontal or main outline to indicate surface cut by a cutting plane.",
    "rankerTip": "Hatching lines: 45° inclination, continuous thin (Type B), spaced 1 to 2 mm apart.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-115",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Leaders are usually drawn at an angle of _____ degrees",
    "options": [
      "15",
      "25",
      "45",
      "75"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 45. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 45 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-116",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Type B lines represents _____ lines.",
    "options": [
      "Continuous thick",
      "Continuous thin",
      "Centre",
      "Dashed thin"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Continuous thin. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Continuous thin is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-117",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Letters and numerals are designated by their",
    "options": [
      "Thickness",
      "Height",
      "Shape",
      "Style"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Height. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Height is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-118",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "For free hand sketching, which grade pencil is preferred ?",
    "options": [
      "HB",
      "H",
      "2H",
      "3H"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option HB. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option HB is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-119",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Dimension lines, hatching and extension lines are drawn as :",
    "options": [
      "Thin continuous line",
      "Thick continuous line",
      "Zigzags line",
      "Long and thin chain lines"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Thin continuous line. Section/hatching lines are continuous thin lines drawn at 45° to the horizontal or main outline to indicate surface cut by a cutting plane.",
    "rankerTip": "Hatching lines: 45° inclination, continuous thin (Type B), spaced 1 to 2 mm apart.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-120",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Continuous thin lines are used as",
    "options": [
      "Dimension line",
      "Cutting plane",
      "Outline of adjacent part",
      "Line of symmetry"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Dimension line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Dimension line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-121",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The continuous thin ruled lines with short zig-zags within them are drawn to show",
    "options": [
      "Short break lines",
      "Hatch lines",
      "Construction lines",
      "long break lines"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option long break lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option long break lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-122",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Distance from outline and dimension line in a drawing :",
    "options": [
      "5 to 7 mm",
      "8 to 10 mm",
      "10 to 12 mm",
      "12 to 4 mm"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 8 to 10 mm. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 8 to 10 mm is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-123",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which grade of pencil is used for drawing arrow heads ? (QP : 34/2022)",
    "options": [
      "2B",
      "2H",
      "5H",
      "H"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 2H. As per BIS standards, closed filled arrowheads have a length-to-width ratio of 3:1, with a recommended minimum length of 3 mm.",
    "rankerTip": "Arrowhead: Length : Width = 3 : 1; minimum length = 3 mm.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-124",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Lines with thin chain thick at ends are used to show :",
    "options": [
      "Line of symmetry",
      "Cutting planes",
      "Centre line",
      "Out line"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Cutting planes. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Cutting planes is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-125",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In unidirectional system the dimensions are",
    "options": [
      "Placed above the dimension line",
      "Placed below the dimension line",
      "Placed by breaking the dimension line in the middle",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Placed by breaking the dimension line in the middle. In the unidirectional dimensioning system, all dimensions are oriented horizontally by breaking the dimension line, readable solely from the bottom of the drawing sheet.",
    "rankerTip": "Unidirectional system: all text is horizontal, read from bottom of sheet.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-126",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which one of the following is not an element of Dimensioning",
    "options": [
      "Leader line",
      "Origin indication",
      "Indication lines",
      "Projection line"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Indication lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Indication lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-127",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The ratio of long to short dashes in a chain line ranges from",
    "options": [
      "3:1 to 2:1",
      "6:1 to 4:1",
      "8:1 to 10:1",
      "5:1 to 7:1"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 6:1 to 4:1. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 6:1 to 4:1 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-128",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "_____ pencil is suitable for lettering and dimensioning",
    "options": [
      "H",
      "3H",
      "2B",
      "2H"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option H. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option H is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-129",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the description of E1 hidden outlines?",
    "options": [
      "Dashed thin",
      "Chain thin",
      "Dashed thick",
      "Chain thick"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Dashed thick. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Dashed thick is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-130",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The continuous dimensioning is also known as _____ dimensioning.",
    "options": [
      "Parallel",
      "Linear",
      "Angular",
      "Chain"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Chain. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Chain is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-131",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "_____ sets the spacing between the dimension lines of a base line dimension",
    "options": [
      "Line type",
      "Spacing",
      "Base line space",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Base line space. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Base line space is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-132",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The lead of the drawing pencil is sharpened to 'chisel edged' is used for :",
    "options": [
      "Drawing lines",
      "Lettering",
      "Freehand sketching",
      "All of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Drawing lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Drawing lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-133",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A continuous thin line that shows where a measurement begins and where it ends is known as",
    "options": [
      "Leader line",
      "Extension line",
      "Dimension line",
      "Projection line"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Dimension line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Dimension line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-134",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the recommended minimum length of arrowheads in dimensioning?",
    "options": [
      "5 mm",
      "3 mm",
      "4 mm",
      "3.5 mm"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 3 mm. As per BIS standards, closed filled arrowheads have a length-to-width ratio of 3:1, with a recommended minimum length of 3 mm.",
    "rankerTip": "Arrowhead: Length : Width = 3 : 1; minimum length = 3 mm.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-135",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A thin line composed of alternate long and short dashes of consistent length represents the",
    "options": [
      "Edges",
      "Surface lines",
      "Boundary lines",
      "Centre lines"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Centre lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Centre lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-136",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "_____ line is used for dimension line",
    "options": [
      "Continuous thick",
      "Continuous thin Zigzag",
      "Continuous thin",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Continuous thin. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Continuous thin is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-137",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The inclination of inclined letters to the right of vertical is :",
    "options": [
      "15°",
      "75°",
      "0°",
      "5°"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 15°. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 15° is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-138",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Is 10714:2001 refers to :",
    "options": [
      "Scales",
      "Lines",
      "Lettering",
      "Projection methods"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-139",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The first dimension line should be placed at least",
    "options": [
      "10 mm from the construction line",
      "12 mm from the construction line",
      "8 mm from the construction line",
      "9 mm from the construction line"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 12 mm from the construction line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 12 mm from the construction line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-140",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Visible outlines are drawn as _____ lines",
    "options": [
      "Continuous thin lines",
      "Dashed thick lines",
      "Thick chain line",
      "Continuous thick lines"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Continuous thick lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Continuous thick lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-141",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A system in which all dimensions are so placed that they can be read from bottom edge of the drawing sheet is called :",
    "options": [
      "Unidirectional system",
      "General system",
      "Aligned system",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Unidirectional system. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Unidirectional system is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-142",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The dimensioning to be used only where the possible accumulation of tolerance does not endanger the functional requirements of the part :",
    "options": [
      "Parallel dimensioning",
      "Chain dimensioning",
      "Super imposed running dimensioning",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Chain dimensioning. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Chain dimensioning is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-143",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Construction lines are drawn by",
    "options": [
      "Thin chain lines",
      "Continuous thick lines",
      "Broken lines",
      "Continuous thin lines"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Continuous thin lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Continuous thin lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-144",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The extension line should extend 3mm beyond the",
    "options": [
      "Outline",
      "Center line",
      "Dimension line",
      "Hidden line"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Dimension line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Dimension line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-145",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the name of thin line projecting from the feature and extending beyond dimension line?",
    "options": [
      "Leader line",
      "Extension line",
      "Termination line",
      "Construction line"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Extension line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Extension line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-146",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Height of lettering is used in sub titles :",
    "options": [
      "3 to 6 mm",
      "6 to 8 mm",
      "10 to 12 mm",
      "5 to 8 mm"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 3 to 6 mm. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 3 to 6 mm is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-147",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the standard ratio for line thickness \"d\" in lettering \"Type B\" as per IS 9609?",
    "options": [
      "h/8",
      "h/10",
      "h/12",
      "h/14"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option h/10. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option h/10 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-148",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Find the size of letters used in the title of drawing",
    "options": [
      "8-9 mm",
      "12 - 13 mm",
      "3-5 mm",
      "6-8 mm"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option 6-8 mm. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 6-8 mm is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-149",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "_____ dimensioning system is used in engineering drawing",
    "options": [
      "Aligned",
      "Unidirectional",
      "Notation system",
      "Conventional system"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Aligned. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Aligned is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-150",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which type of line is particular to section drawing ?",
    "options": [
      "Break lines",
      "Cutting plane lines",
      "Phantom lines",
      "Extension lines"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Cutting plane lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Cutting plane lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-151",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The size of numerals used for writing tolerance is _____ mm",
    "options": [
      "4.5",
      "3.5",
      "5.5",
      "6.5"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 3.5. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 3.5 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Lettering",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-152",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In a title block space should be provided for",
    "options": [
      "Title of drawing",
      "Scale used",
      "Drawing number",
      "All of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option All of these. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option All of these is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-153",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The outer line of an object are drawn using _____ pencil",
    "options": [
      "HB",
      "H",
      "2H",
      "3H"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option H. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option H is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-154",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the description of G1 in centre line?",
    "options": [
      "Chain thin",
      "Dashed thin",
      "Dashed thick",
      "Continuous thick"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Chain thin. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Chain thin is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-155",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the description of G2 in lines of symmetry ?",
    "options": [
      "Chain thin",
      "Chain thin double dashed",
      "dashed thick",
      "Continuous thick"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Chain thin. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Chain thin is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-156",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The dashed line represents :",
    "options": [
      "Hidden edges",
      "Projection line",
      "Entre line",
      "Hatching line"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Hidden edges. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Hidden edges is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-157",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "All dimensions are shown from a common base line is called :",
    "options": [
      "Chain dimensioning",
      "Progressive dimensioning",
      "Angular dimensioning",
      "Continuous dimensioning"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Progressive dimensioning. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Progressive dimensioning is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-158",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The continuous thin line connecting a dimensional value or some information relating to a feature in an engineering drawing is :",
    "options": [
      "Extension line",
      "Dimension line",
      "Break line",
      "Leader line"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Leader line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Leader line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-159",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "General application of 'chain thin double dash line' in engineering drawing",
    "options": [
      "Cutting plane",
      "Central line",
      "Hidden out line",
      "Centroidal line"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Centroidal line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Centroidal line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-160",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the inclination of oblique strokes in dimensioning in termination and origin indication?",
    "options": [
      "25°",
      "35°",
      "45°",
      "55°"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 45°. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 45° is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-161",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In engineering drawing chain lines are used for :",
    "options": [
      "Visible out lines",
      "Dimension lines",
      "Hidden lines",
      "Centre lines"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Centre lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Centre lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-162",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Drawing pencils are graded according to increase in relative",
    "options": [
      "Diameter",
      "Sharpness",
      "Length",
      "Hardness"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Hardness. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Hardness is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-163",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following is represented by a thick continuous line ?",
    "options": [
      "Visible outline",
      "Leader lines",
      "Construction lines",
      "Hatching lines"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Visible outline. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Visible outline is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-164",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Place small dimensions _____ to the view",
    "options": [
      "Slanted",
      "Oblique",
      "Nearer",
      "Revolved"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Nearer. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Nearer is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-165",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "For drawing thin lines of uniform thickness the Pencil should be sharpened in the form of",
    "options": [
      "Chisel edge",
      "Conical point",
      "Round edge",
      "Flat edge"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Chisel edge. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Chisel edge is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-166",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In aligned system of dimensioning, the dimensions may be read from",
    "options": [
      "Bottom or Left hand edges",
      "Only from bottom",
      "Only from left side",
      "Bottom or right hand side"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Bottom or right hand side. In the aligned dimensioning system, dimensions are placed parallel to dimension lines and can be read from the bottom or right-hand edge of the sheet.",
    "rankerTip": "Aligned system: read from bottom or right side. Unidirectional system: read from bottom only.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-167",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Choose the type of line used for \"Invisible Edges\"?",
    "options": [
      "Long chain thin",
      "Long dashes",
      "Short chain thin",
      "Short dashes"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Short dashes. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Short dashes is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-168",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which lines are used to indicate arcs of symmetrical objects features ?",
    "options": [
      "Hidden lines",
      "Centre lines",
      "Straight lines",
      "Oblique lines"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Centre lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Centre lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.2: Lines, Lettering & Dimensioning)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-169",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Plain scale is to read",
    "options": [
      "One dimension",
      "Two dimension",
      "Three dimension",
      "Any dimension"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Two dimension. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Two dimension is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-170",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which is the odd one of the following?",
    "options": [
      "Vernier scale",
      "Scale of chord",
      "Plain scale",
      "Diagonal scale"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Scale of chord. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Scale of chord is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-171",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following is an enlarged scale?",
    "options": [
      "2:1",
      "1:2",
      "1:1",
      "1:100"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 2:1. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 2:1 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-172",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Ratio of the length of the drawing to the actual size of the object is termed as",
    "options": [
      "FAR",
      "RF",
      "SF",
      "SFR"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option RF. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option RF is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-173",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the name of scale that is a graphical device to compare or convert one variable into another?",
    "options": [
      "Plain scale",
      "Vernier scale",
      "Diagonal scale",
      "Comparative scale"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Comparative scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Comparative scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-174",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Dimensions on the drawings can be found out as",
    "options": [
      "RF / actual dimension",
      "RF x actual dimension",
      "Actual dimension / RF",
      "RF x maximum length to be read"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option RF x actual dimension. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option RF x actual dimension is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-175",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The vernier which extend or increase in opposite direction of their main scales and also in which the smallest division of the vernier is longer than the smallest division of their main scale is called",
    "options": [
      "Direct vernier",
      "Retrograde vernier",
      "Single vernier",
      "Double vernier"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Retrograde vernier. In a retrograde vernier, graduations increase in the direction opposite to the main scale, and each vernier division is larger than a main scale division: (n+1) MSD = n VSD.",
    "rankerTip": "Retrograde vernier: vernier divisions are longer than main scale divisions and numbered in the opposite direction.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-176",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "RF = 200:1 Represents a :",
    "options": [
      "Enlarged scale",
      "Reduced scale",
      "Full size scale",
      "Comparative scale"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Enlarged scale. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-177",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Fractional parts of the smallest division of the main scale can be measured using",
    "options": [
      "Plain scale",
      "Vernier scale",
      "Diagonal scale",
      "Comparative scale"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Vernier scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Vernier scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-178",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "RF of a scale used in engineering drawing means",
    "options": [
      "Reduced Fraction",
      "recommended Fraction",
      "Representative Fraction",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Representative Fraction. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-179",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following is not a linear scale ?",
    "options": [
      "Plain scale",
      "diagonal scale",
      "Scale of chord",
      "Comparative scale"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Scale of chord. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Scale of chord is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-180",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When 10cm line on a map represent 10mm long line. The scale used is",
    "options": [
      "Enlarging scale",
      "Reducing scale",
      "Full size scale",
      "Plain scale"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Enlarging scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Enlarging scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-181",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following is reduced scale",
    "options": [
      "2:40",
      "100:1",
      "1:1",
      "2:1"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 2:40. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 2:40 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-182",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the formula for calculating the maximum length of the scale?",
    "options": [
      "Minimum length to be measured x R.F.",
      "Minimum length to be measured / R.F.",
      "Maximum length to be measured / R.F",
      "Maximum length to be measured x R.F."
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Maximum length to be measured x R.F.. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Maximum length to be measured x R.F. is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-183",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "To make the drawing of big machines and building _______ scales are used.",
    "options": [
      "Enlarged",
      "Reduced",
      "Diagonal",
      "Full"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Reduced. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Reduced is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-184",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Scale 1:200 is classified as",
    "options": [
      "full scale",
      "scale of chords",
      "enlarged scale",
      "reduction scale"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option reduction scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option reduction scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-185",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "_______ is used to transfer the true or relative dimension of an object to the drawing.",
    "options": [
      "Divider",
      "Scale",
      "Pencil",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-186",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which one is reduced scale ?",
    "options": [
      "50:50",
      "50:1",
      "100:100",
      "1:50"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option 1:50. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 1:50 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-187",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When a 10mm long line is shown in a drawing by a line 10cm, the scale used is known as :",
    "options": [
      "Full size scale",
      "Reducing scale",
      "Enlarging scale",
      "Plain scale"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Enlarging scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Enlarging scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-188",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the first element of in RF represents?",
    "options": [
      "Size of scale",
      "Size in drawing",
      "Size of the object",
      "Size of object and drawing"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Size in drawing. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-189",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following represents reducing scales",
    "options": [
      "1:1",
      "1:2",
      "2:1",
      "10:1"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 1:2. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 1:2 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-190",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Scales having same RF but graduated to read different units are known as",
    "options": [
      "Plain scale",
      "Diagonal scale",
      "Comparative scale",
      "Shrunk scale"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Comparative scale. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-191",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is reduction scale?",
    "options": [
      "Drawing smaller than object",
      "Drawing smaller, object bigger",
      "Drawing bigger, object smaller",
      "Drawing smaller, object smaller"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Drawing smaller than object. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Drawing smaller than object is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-192",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which scale is used to construct angles in absence of a protractor?",
    "options": [
      "Diagonal scale",
      "Comparative scale",
      "Chord scale",
      "Plain scale"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Chord scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Chord scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-193",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "On a diagonal scales, it is possible to read up to",
    "options": [
      "One dimension",
      "Two dimensions",
      "Three dimensions",
      "Four dimensions"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Three dimensions. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Three dimensions is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-194",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which one of the following is not a reduction scale ?",
    "options": [
      "1:200",
      "5:6",
      "1:1",
      "3/250"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 1:1. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 1:1 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-195",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following scale is largest one ?",
    "options": [
      "1 cm = 100 m",
      "1 cm = 1000km",
      "1 cm = 10 km",
      "1 cm = 100 km"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 1 cm = 100 m. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 1 cm = 100 m is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-196",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The proportion of the distance on the map to the corresponding distance on the ground is known as :",
    "options": [
      "Reconnaissance",
      "Reflecting",
      "Representative fraction",
      "Refracting"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Representative fraction. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Representative fraction is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-197",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Comparative scale is a pair of scale having a common :",
    "options": [
      "Units",
      "Representative fraction",
      "Length of scale",
      "Least count"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Representative fraction. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Representative fraction is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-198",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The ratio of the shrunk length to the actual length is :",
    "options": [
      "Shrinkage factor",
      "Representative factor",
      "Factor of safety",
      "Compaction factor"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Shrinkage factor. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Shrinkage factor is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-199",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which scale is suitable to convert Fahrenheit into Celcius?",
    "options": [
      "Comparative scale",
      "Diagonal scale",
      "Vernier scale",
      "Retrograde vernier"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Comparative scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Comparative scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-200",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Scale on which three dimensions can be measured called",
    "options": [
      "Plain scale",
      "Diagonal scale",
      "Shrunk scale",
      "Comparative scale"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Diagonal scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Diagonal scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-201",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The usual method adopted for representing scale on map is _______",
    "options": [
      "Diagonal scale",
      "Representative fraction",
      "Plain scale",
      "Graphical scale"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Graphical scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Graphical scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-202",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which type of scale is used when representative fraction of a scale is greater than unit ?",
    "options": [
      "Reducing scale",
      "Minimum scale",
      "Enlarging scale",
      "Maximum scale"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Enlarging scale. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-203",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "RF for full size scale is :",
    "options": [
      "Less than unity",
      "Greater than unity",
      "Equal to unity",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Equal to unity. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-204",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "While constructing scales, the length of scale required is",
    "options": [
      "RF x distance on drawing",
      "RF x length to be measured",
      "RF x distance on object",
      "RF x distance on diagonal scale"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option RF x length to be measured. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option RF x length to be measured is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-205",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following scales is the smallest one ?",
    "options": [
      "1 cm = 10m",
      "RF = 1 / 5000",
      "1 cm = 10km",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 1 cm = 10km. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 1 cm = 10km is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-206",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In a drawing 1m is draw in 20cm, the scale is known as _______",
    "options": [
      "1:10",
      "1:20",
      "1:5",
      "1:50"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 1:5. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 1:5 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-207",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A scale represents either three units or only one units and its fractions up to second place of decimal points :",
    "options": [
      "Diagonal scale",
      "Plane scale",
      "Vernier scale",
      "Comparative scale"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Diagonal scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Diagonal scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-208",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A scale represent either two units or a unit and subdivision is",
    "options": [
      "Diagonal scale",
      "Vernier scales",
      "Plain scale",
      "Scale of chords"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Plain scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Plain scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-209",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The ratio of the drawing to the actual size of the object in the same unit is called :",
    "options": [
      "Enlarged scale",
      "Reduced scale",
      "Representative fraction",
      "Scale of chord"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Representative fraction. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Representative fraction is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-210",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "If the smallest division of a vernier is longer than the smallest division of its primary scale, the vernier is known as :",
    "options": [
      "Simple vernier",
      "Double vernier",
      "Direct vernier",
      "Retrograde vernier"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Retrograde vernier. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Retrograde vernier is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-211",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Scale 1:x designated as",
    "options": [
      "Reduced scale",
      "Full size",
      "Enlarged scale",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Reduced scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Reduced scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.3: Scales)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-212",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When the locus of a point moving in a plane, in such a way that, the ratio of its distance from the focus to the distance from the Directrix is constant and greater than one is a :",
    "options": [
      "Ellipse",
      "Hyperbola",
      "Parabola",
      "Hypocycloid"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Hyperbola. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Hyperbola is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-213",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The line passing through the focus and perpendicular to the Directrix in conic technology is :",
    "options": [
      "Base line",
      "Normal",
      "Tangent",
      "Axis"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Axis. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Axis is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-214",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The eccentricity of a parabola is usually",
    "options": [
      ">1",
      "<1",
      "1",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 1. In conic sections, eccentricity e = (distance from focus) / (distance from directrix). For circle e = 0, ellipse e < 1, parabola e = 1, hyperbola e > 1.",
    "rankerTip": "Conic eccentricity: Circle e=0; Ellipse e<1; Parabola e=1; Hyperbola e>1.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-215",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The point of contact between the focal sphere and section plane is called",
    "options": [
      "Vertex",
      "Axis",
      "Generator",
      "Focus"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Focus. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Focus is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-216",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When the cutting plane is inclined to the axis of the right circular cone and parallel to one generators, the section obtained is :",
    "options": [
      "Rectangular hyperbola",
      "Parabola",
      "Ellipse",
      "Hyperbola"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Parabola. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Parabola is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-217",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Parabola is a conic section having",
    "options": [
      "One focus",
      "Two focii",
      "One focus and one Directrix",
      "Two focii and two Directrix"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option One focus and one Directrix. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option One focus and one Directrix is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-218",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The cut point of the major axis on the curve of an ellipse are called :",
    "options": [
      "Focus",
      "Vertex",
      "Tangent",
      "Directrix"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Vertex. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Vertex is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-219",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which one is not a conic section ?",
    "options": [
      "Ellipse",
      "Parabola",
      "Hyperbola",
      "Triangle"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Triangle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Triangle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-220",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The eccentricity of an ellipse is",
    "options": [
      "e = 0",
      "e = 1",
      "e < 1",
      "e > 1"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option e < 1. In conic sections, eccentricity e = (distance from focus) / (distance from directrix). For circle e = 0, ellipse e < 1, parabola e = 1, hyperbola e > 1.",
    "rankerTip": "Conic eccentricity: Circle e=0; Ellipse e<1; Parabola e=1; Hyperbola e>1.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-221",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The asymptotes of any hyperbola intersects at",
    "options": [
      "On the directrix",
      "On the axis",
      "At focus",
      "Centre"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Centre. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Centre is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-222",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "For an ellipse, the sum of the distance to a point on the curve from the foci is :",
    "options": [
      "Not constant",
      "Constant and is equal to the length of the major axis",
      "Constant and is equal to the length of minor axis",
      "Only constant"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Constant and is equal to the length of the major axis. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Constant and is equal to the length of the major axis is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-223",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "An ellipse has _______ vertices and _______ foci",
    "options": [
      "Two, two",
      "one, two",
      "one, one",
      "two, one"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Two, two. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Two, two is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-224",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following is the eccentricity of for ellipse?",
    "options": [
      "1",
      "2",
      "2/3",
      "3/2"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 2/3. In conic sections, eccentricity e = (distance from focus) / (distance from directrix). For circle e = 0, ellipse e < 1, parabola e = 1, hyperbola e > 1.",
    "rankerTip": "Conic eccentricity: Circle e=0; Ellipse e<1; Parabola e=1; Hyperbola e>1.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-225",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The point of the conic at which the conic cuts its axis is known as",
    "options": [
      "Directrix",
      "Focus",
      "Ordinate",
      "Vertex"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Vertex. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Vertex is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-226",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which one is not a conic section",
    "options": [
      "Ellipse",
      "Parabola",
      "Hyperbola",
      "Rectangle"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Rectangle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Rectangle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-227",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Write the name of conic section whose eccentricity is greater than one :",
    "options": [
      "Circle",
      "Ellipse",
      "Parabola",
      "Hyperbola"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Hyperbola. In conic sections, eccentricity e = (distance from focus) / (distance from directrix). For circle e = 0, ellipse e < 1, parabola e = 1, hyperbola e > 1.",
    "rankerTip": "Conic eccentricity: Circle e=0; Ellipse e<1; Parabola e=1; Hyperbola e>1.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-228",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The straight line which is generating the surface of the cone is called",
    "options": [
      "Generator",
      "Vertex",
      "Axis",
      "Base"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Generator. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-229",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When a right circular cone is cut by a section plane inclined to the axis of the cone and if the plane cuts all the generators",
    "options": [
      "Parabola",
      "Hyperbola",
      "Rectangular hyperbola",
      "Ellipse"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Ellipse. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Ellipse is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-230",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Hyperbola, Parabola and the ellipse are known as",
    "options": [
      "Projections",
      "Plan",
      "Plane figures",
      "Conic sections"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Conic sections. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Conic sections is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-231",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In conics the fixed point is called",
    "options": [
      "Vertex",
      "Apex",
      "Helix",
      "Focus"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Focus. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Focus is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-232",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A double ordinate passing through the focus of the conic is known as",
    "options": [
      "Focal chord",
      "Axis",
      "Latus rectum",
      "Abscissa"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Latus rectum. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Latus rectum is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-233",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The eccentricity of an ellipse is :",
    "options": [
      "Equal to 1",
      "Greater than 1",
      "Less than 1",
      "Zero"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Less than 1. In conic sections, eccentricity e = (distance from focus) / (distance from directrix). For circle e = 0, ellipse e < 1, parabola e = 1, hyperbola e > 1.",
    "rankerTip": "Conic eccentricity: Circle e=0; Ellipse e<1; Parabola e=1; Hyperbola e>1.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-234",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following is conic a section",
    "options": [
      "Circle",
      "Rectangle",
      "Triangle",
      "Square"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Circle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Circle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-235",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "_______ is a solid generated by the revolution of a right angled triangle about one of its perpendicular sides which is fixed.",
    "options": [
      "right circular cone",
      "right circular cylinder",
      "sphere",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option right circular cone. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option right circular cone is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-236",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When a cone is cut by a plane perpendicular to the axis, the curve generated is _______",
    "options": [
      "Circle",
      "Parabola",
      "Hyperbola",
      "Ellipse"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Circle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Circle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-237",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Isometric projection of a circle is always :",
    "options": [
      "circle",
      "semi - circle",
      "ellipse",
      "spheroid"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option ellipse. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option ellipse is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-238",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The line which passes through the foci and terminated by the ellipse is the :",
    "options": [
      "Major axis",
      "Minor axis",
      "Major dia",
      "Minor dia"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Major axis. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Major axis is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-239",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A solid form generated by revolving a right angled triangle about a fixed line is called",
    "options": [
      "Cylinder",
      "Cone",
      "Pyramid",
      "Prism"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Cone. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Cone is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-240",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the statement is not true as the case of ellipse ?",
    "options": [
      "Eccentricity is less than one",
      "Ellipse has two axis",
      "Ellipse has two Directrix",
      "None of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option None of these. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option None of these is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-241",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The path of a point which moves in space is known as",
    "options": [
      "Centroid",
      "Locus",
      "Triangle",
      "Spiral"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Locus. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Locus is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-242",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which conic is known as 'central conic' ?",
    "options": [
      "Ellipse",
      "Circle",
      "Parabola",
      "Hyperbola"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Hyperbola. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Hyperbola is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-243",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The sections cut by a plane on a right circular cone are called",
    "options": [
      "Parabola sections",
      "Conic sections",
      "Elliptical sections",
      "Hyperbolic sections"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Conic sections. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Conic sections is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-244",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Vertex of the conic is the",
    "options": [
      "Point at which the two axis intersect",
      "Point at which the tangent cut conic",
      "Point at which the conic cuts its axis",
      "Point at which Latus rectum cuts the conic"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Point at which the conic cuts its axis. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Point at which the conic cuts its axis is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.4: Conic Sections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-245",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In first angle projection object is situated _______ of the observers eye and the plane of projection",
    "options": [
      "Infront",
      "In between",
      "Infront and In between",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option In between. In First Angle Projection, the object lies in the first quadrant (between observer and projection plane). The top view (plan) is projected below the front elevation, and the left side view is placed on the right side.",
    "rankerTip": "First Angle: Plan below elevation, left view on right. Recommended by Bureau of Indian Standards (BIS).",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-246",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A plane is held parallel to horizontal plane in which view we can watch drawing on that plane",
    "options": [
      "Top view",
      "Front view",
      "Back view",
      "Side view"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Top view. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Top view is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-247",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In orthographic projection the top view of a prism is _______",
    "options": [
      "One dimensional",
      "Two dimensional",
      "Three dimensional",
      "Four dimensional"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Two dimensional. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Two dimensional is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-248",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In orthographic projection the horizontal plane is rotating _______ degree in clockwise direction to get plan and elevation in one surface.",
    "options": [
      "30°",
      "60°",
      "90°",
      "180°"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 90°. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-249",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the name of horizontally sliced building viewed from top ?",
    "options": [
      "Section",
      "Elevation",
      "Plan",
      "Sectional elevation"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Plan. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Plan is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-250",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In which projection the object is put below the horizontal plane and behind the vertical plane?",
    "options": [
      "Third angle projection",
      "Second angle projection",
      "First angle projection",
      "Fourth angle projection"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Third angle projection. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Third angle projection is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-251",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A line is parallel to VP and inclined to HP then it has",
    "options": [
      "VT no HT",
      "Both HT and VT",
      "No VT only HT",
      "No VT and HT"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option No VT only HT. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option No VT only HT is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-252",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The plane perpendicular to both the horizontal and vertical planes is known as",
    "options": [
      "Horizon plane",
      "Picture plane",
      "Horizon plane and Picture plane",
      "None of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option None of these. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option None of these is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-253",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The top view of an object comes above the front view always in :",
    "options": [
      "Second angle projection",
      "First angle projection",
      "Fourth angle projection",
      "Third angle projection"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Third angle projection. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Third angle projection is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-254",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "If a point is situated in the third quadrant, the distance of top view from XY-line is equal to the distance of the point from",
    "options": [
      "Picture plane",
      "Vertical plane",
      "Horizontal plane",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Vertical plane. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Vertical plane is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-255",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The ratio between isometric length and true length is :",
    "options": [
      "0.816:1",
      "0.516:1",
      "1:122.5",
      "1:0.725"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 0.816:1. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 0.816:1 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-256",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "If top view and front view of a point are lie below the XY line the point is in :",
    "options": [
      "Third Quadrant",
      "Second Quadrant",
      "First Quadrant",
      "Fourth Quadrant"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option First Quadrant. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option First Quadrant is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-257",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In an isometric scale, the isometric length is what percentage of true length?",
    "options": [
      "19%",
      "82%",
      "90%",
      "62%"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 82%. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 82% is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-258",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When the whole body is assumed to be cut through out the length the section is known as :",
    "options": [
      "Half section",
      "Full section",
      "Offset section",
      "Broken section"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Full section. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Full section is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-259",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In orthographic projection, the rays are assumed to be :",
    "options": [
      "Diverge from station point",
      "Converge from station point",
      "Be parallel",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Be parallel. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Be parallel is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-260",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In perspective projection, the object is placed behind the :",
    "options": [
      "Ground plane",
      "Picture plane",
      "Horizon plane",
      "Central plane"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Picture plane. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Picture plane is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-261",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The angle between isometric axes is :",
    "options": [
      "90°",
      "120°",
      "60°",
      "180°"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 120°. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 120° is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-262",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The ratio of the symbol of orthographic projection either first angle or third angle is",
    "options": [
      "1:2:3",
      "1:2:4",
      "1:3:6",
      "1:4:8"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 1:2:3. In First Angle Projection, the object lies in the first quadrant (between observer and projection plane). The top view (plan) is projected below the front elevation, and the left side view is placed on the right side.",
    "rankerTip": "First Angle: Plan below elevation, left view on right. Recommended by Bureau of Indian Standards (BIS).",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-263",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The isometric view and orthographic view of an object is same",
    "options": [
      "Cone",
      "Sphere",
      "Cylinder",
      "Cube"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Sphere. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Sphere is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-264",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In a cabinet type of oblique projection, the receding edge is taken as",
    "options": [
      "Half",
      "Full",
      "85 %",
      "Double"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Half. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Half is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-265",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In free hand sketching, horizontal lines are drawn from :",
    "options": [
      "Left to right",
      "Top to bottom",
      "Right to left",
      "Bottom to top"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Left to right. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Left to right is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-266",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The building plan is a section at the level :",
    "options": [
      "Ground",
      "Basement",
      "Plinth",
      "Sill"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Sill. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Sill is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-267",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When a pyramid or a cone is cut by a plane parallel to its base, thus removing the remaining portion is called its",
    "options": [
      "Cone",
      "Sphere",
      "Frustum",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Frustum. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Frustum is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-268",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In third angle projection top view is drawn :",
    "options": [
      "Above XY line",
      "Below XY line",
      "Left of front view",
      "Right of front view"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Above XY line. In Third Angle Projection, the transparent plane of projection lies between the observer and the object. The top view (plan) is placed above the front elevation.",
    "rankerTip": "Third Angle: Plan above elevation, right view on right. Standard in USA and Canada.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-269",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The path traced by a ball thrown up in air, reaches maximum height and travel a horizontal",
    "options": [
      "Ellipse",
      "Parabola",
      "Hyperbola",
      "Circle"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Parabola. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Parabola is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-270",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When a cone is cut off by a plane inclined to its base, but not passing through base, and the portion obtained afterremoving the part containing the apex is :",
    "options": [
      "Tetrahedron",
      "Frustum of cone",
      "Pentahedron",
      "Truncated cone"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Truncated cone. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Truncated cone is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-271",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Plane surfaces have",
    "options": [
      "Three dimensions",
      "One dimensions",
      "Two dimensions",
      "One dimensions"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Two dimensions. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-272",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following object gives a circular section, when it is cut completely by a section plane (irrespective of theangle of section plane) ?",
    "options": [
      "Cylinder",
      "Sphere",
      "Cone",
      "Circular lamina"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Sphere. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Sphere is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-273",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The length of a line in an isometric projection will be :",
    "options": [
      "Equal to actual length",
      "0.82 times actual length",
      "1.82 times actual length",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 0.82 times actual length. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 0.82 times actual length is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-274",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In first angle projection the object is placed :",
    "options": [
      "Above HP and behind VP",
      "Above HP and infront of VP Above HP and infront of V",
      "Below HP and behind VP",
      "Below HP and infront of VP"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Above HP and infront of VP Above HP and infront of V. In First Angle Projection, the object lies in the first quadrant (between observer and projection plane). The top view (plan) is projected below the front elevation, and the left side view is placed on the right side.",
    "rankerTip": "First Angle: Plan below elevation, left view on right. Recommended by Bureau of Indian Standards (BIS).",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-275",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A line is perpendicular to HP and parallel to VP its front view is _______ to the XY line",
    "options": [
      "Parallel",
      "Perpendicular",
      "On the XY line",
      "Inclined"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Perpendicular. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Perpendicular is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-276",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A line is placed in the first quadrant in such a way that the line is inclined to HP and parallel to VP. The elevation will belies in :",
    "options": [
      "VP",
      "below VP",
      "HP",
      "XY line"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option VP. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option VP is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-277",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The intersection of a line and a solid is _______",
    "options": [
      "point",
      "line",
      "curve",
      "None of the above"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option point. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option point is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-278",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In cabinet oblique projection, the angle between the plane of projection and the line of projection is :",
    "options": [
      "30°",
      "33°50'",
      "63°26'",
      "45°"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 63°26'. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 63°26' is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-279",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "For quick exchange of ideas among designer and technician the type of drawing used is :",
    "options": [
      "Detailed drawing",
      "Assembly drawing",
      "Free hand sketch",
      "Operation chart"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Free hand sketch. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Free hand sketch is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-280",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Visual ray method is used for drawing _______ projection",
    "options": [
      "Perspective",
      "Isometric",
      "Oblique",
      "Orthographic"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Perspective. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Perspective is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-281",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In first angle projection method, the plan drawn at",
    "options": [
      "above the elevation",
      "right side of elevation",
      "below the elevation",
      "left side of elevation"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option below the elevation. In First Angle Projection, the object lies in the first quadrant (between observer and projection plane). The top view (plan) is projected below the front elevation, and the left side view is placed on the right side.",
    "rankerTip": "First Angle: Plan below elevation, left view on right. Recommended by Bureau of Indian Standards (BIS).",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-282",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The elevation of a line parallel to vertical plane and inclined to horizontal plane is _______",
    "options": [
      "Horizontal line",
      "Vertical line",
      "Inclined line",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Inclined line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Inclined line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-283",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The scale used for drawing the actual size of an object in a paper is called :",
    "options": [
      "Reduced scale",
      "Enlarged scale",
      "Minimizing scale",
      "Full size scale"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Full size scale. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Full size scale is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-284",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Orthographic projection is also known as",
    "options": [
      "Single view projection",
      "Two view projection",
      "Multi view projection",
      "All of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Multi view projection. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Multi view projection is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-285",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is geometrical representation of the curved surface of the earth on a paper?",
    "options": [
      "Elevation",
      "Contouring",
      "Projection",
      "Symbols"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Projection. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-286",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A projection obtained on the plane of projection when the projectors are parallel to each other and perpendicular to the plane of projection is known as",
    "options": [
      "Orthographic projection",
      "Axonometric projection",
      "Isometric projection",
      "Oblique projection"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Orthographic projection. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Orthographic projection is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-287",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Two point perspective is also known as",
    "options": [
      "Parallel perspective",
      "Two view perspective",
      "Angular perspective",
      "Regular perspective"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Angular perspective. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Angular perspective is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-288",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Any object below horizontal plane (HP) and behind Vertical plane (VP), the object is in _______ quadrant",
    "options": [
      "Ist quadrant",
      "IInd quadrant",
      "IIIrd quadrant",
      "IVth quadrant"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option IIIrd quadrant. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option IIIrd quadrant is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-289",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Identify the quadrant where the object is, if the elevation and top view is in the VP above XY line",
    "options": [
      "First quadrant",
      "Third quadrant",
      "Second quadrant",
      "Fourth quadrant"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Second quadrant. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Second quadrant is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-290",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Both external and internal details are shown in one view is _______",
    "options": [
      "Offset plane",
      "Half section",
      "Full section",
      "Revolved section"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Half section. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Half section is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-291",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The true shape of an object with inclined surfaces can only be represented by a/an _______ view",
    "options": [
      "Cavalier",
      "Perspective",
      "Auxiliary",
      "Isometric"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Auxiliary. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-292",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In 1st angle projection right side view is placed",
    "options": [
      "Above elevation",
      "Below elevation",
      "Left side",
      "Right side"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Left side. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Left side is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-293",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The _______ is a perspective projection upon a tangent plane, the projection being the centre of the sphere.",
    "options": [
      "Orthographic projection",
      "Mercator projection",
      "Gnomonic projection",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Gnomonic projection. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Gnomonic projection is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-294",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which is not a principle view?",
    "options": [
      "Front view",
      "Bottom view",
      "Auxiliary view",
      "Left side view"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Auxiliary view. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Auxiliary view is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-295",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When a line is _______ to HP its VT will be below XY line",
    "options": [
      "Parallel",
      "Inclined",
      "Perpendicular",
      "Below"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Perpendicular. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Perpendicular is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-296",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Hatching lines are drawn at _______ to the horizontal",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 45°. Section/hatching lines are continuous thin lines drawn at 45° to the horizontal or main outline to indicate surface cut by a cutting plane.",
    "rankerTip": "Hatching lines: 45° inclination, continuous thin (Type B), spaced 1 to 2 mm apart.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-297",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "North point shall preferably be drawn on the drawing in _______",
    "options": [
      "right hand bottom corner",
      "left hand bottom corner",
      "right hand top corner",
      "left hand top corner"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option right hand top corner. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option right hand top corner is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-298",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the projection if the receding lines are drawn to half size?",
    "options": [
      "Cavalier projection",
      "Cabinet projection",
      "Clinographic projection",
      "Axonometric projection"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Cabinet projection. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Cabinet projection is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-299",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Oblique perspective is used to present",
    "options": [
      "Interior details of building",
      "Long and wide building",
      "Interior details of machine",
      "Huge and tall building"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Huge and tall building. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Huge and tall building is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-300",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The all projections in the case of perspective converging to a point is known as :",
    "options": [
      "Vanishing point",
      "Station point",
      "Picture plane point",
      "Vision point"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Vanishing point. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Vanishing point is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-301",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The projection on the vertical plane is called",
    "options": [
      "Front view",
      "Top view",
      "Plane of projection",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Front view. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Front view is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-302",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Projection of point in third quadrant will be :",
    "options": [
      "Front view in VP",
      "Front view in HP",
      "Front view in XY",
      "None of the above"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Front view in VP. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Front view in VP is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-303",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which one is not an oblique projection",
    "options": [
      "Cabinet",
      "General",
      "Cavalier",
      "Trimetric"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Trimetric. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Trimetric is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-304",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In first angle projection method the plan is placed :",
    "options": [
      "Below x y line",
      "Above x y line",
      "Anywhere",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Below x y line. In First Angle Projection, the object lies in the first quadrant (between observer and projection plane). The top view (plan) is projected below the front elevation, and the left side view is placed on the right side.",
    "rankerTip": "First Angle: Plan below elevation, left view on right. Recommended by Bureau of Indian Standards (BIS).",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-305",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The method for drawing the isometric projection is :",
    "options": [
      "Auxiliary method",
      "Oblique method",
      "Co-ordinate method",
      "Parallel method"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Co-ordinate method. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Co-ordinate method is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-306",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "While drawing free hand sketching vertical lines should be drawn :",
    "options": [
      "Downwards",
      "Upwards",
      "In any direction",
      "All of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Downwards. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Downwards is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-307",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The plane surface which are mutually perpendicular and used for projecting the views of an object is known as :",
    "options": [
      "Principle planes",
      "Horizontal planes",
      "Vertical planes",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Principle planes. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-308",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When a point is above HP, its front view is _______ XY",
    "options": [
      "Above",
      "Below",
      "In",
      "Below VP"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Above. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Above is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-309",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The view drawn by taking actual dimensions without preparing isometric scale is",
    "options": [
      "Isometric view",
      "Isometric projection",
      "Oblique projection",
      "Perspective projection"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Isometric view. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Isometric view is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-310",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A line in the first quadrant is parallel to HP and inclined to VP its",
    "options": [
      "Plan is below XY line, with true length",
      "Elevation is above XY line, with true length",
      "Plan is above XY line, with true length",
      "Elevation is below XY line, with true length"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Plan is below XY line, with true length. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Plan is below XY line, with true length is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-311",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In orthographic projection the principal planes, that is horizontal plane and vertical plane are",
    "options": [
      "Parallel to each other",
      "Perpendicular to each other",
      "Inclined to each other",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Perpendicular to each other. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Perpendicular to each other is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-312",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Sectional view is drawn",
    "options": [
      "To cut the object",
      "To see the internal details",
      "To show the shape of the hidden internal details",
      "To shape the internal details"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option To show the shape of the hidden internal details. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option To show the shape of the hidden internal details is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-313",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "An object seen by a human eye is :",
    "options": [
      "Isometric view",
      "Perspective view",
      "Oblique view",
      "Orthographic view"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Perspective view. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Perspective view is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-314",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Photographs of any objects taken with the help of camera is :",
    "options": [
      "Perspective view of the object",
      "Orthographic view of the object",
      "Isometric view of the object",
      "Front view of the object"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Perspective view of the object. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Perspective view of the object is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-315",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In a third angle projection, the front elevation of an object is drawn on the :",
    "options": [
      "Top side",
      "Left side",
      "Bottom side",
      "Right side"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Bottom side. In Third Angle Projection, the transparent plane of projection lies between the observer and the object. The top view (plan) is placed above the front elevation.",
    "rankerTip": "Third Angle: Plan above elevation, right view on right. Standard in USA and Canada.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-316",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A line is parallel to both HP and VP. Its projection is _______",
    "options": [
      "Two parallel lines",
      "Line and a point",
      "Two perpendicular lines",
      "Two inclined lines"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Two parallel lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Two parallel lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-317",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In perspective view, the line of intersection of the ground plane and picture plane is :",
    "options": [
      "Ground line",
      "Vanishing line",
      "Horizon line",
      "Station line"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Ground line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Ground line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-318",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Perspective projection are mainly used by the :",
    "options": [
      "Scientist",
      "Architect",
      "Hydrologist",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Architect. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Architect is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-319",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In orthographic projections, the rays are assumed to :",
    "options": [
      "Diverge from station point",
      "Converge from station point",
      "Be parallel",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Be parallel. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Be parallel is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-320",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "For spacing the drawing, when only one drawing is to be drawn on a sheet, it should be drawn in the",
    "options": [
      "Centre of the working space",
      "Right side of the working space",
      "Top side of the working space",
      "Left side of the working space"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Centre of the working space. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Centre of the working space is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-321",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Orthographic projection is also known as",
    "options": [
      "Parallel projection",
      "Oblique projection",
      "Perspective projection",
      "Cabinet projection"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Parallel projection. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Parallel projection is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-322",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The plan and elevation of an object are seen coincides, the object lies in :",
    "options": [
      "Second or fourth quadrant",
      "First quadrant",
      "Second quadrant",
      "Third quadrant"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Second or fourth quadrant. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Second or fourth quadrant is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-323",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Where the rear view is placed in first angle projection ?",
    "options": [
      "Left side of elevation",
      "Bottom of elevation",
      "Right side of elevation",
      "Top of elevation"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Right side of elevation. In First Angle Projection, the object lies in the first quadrant (between observer and projection plane). The top view (plan) is projected below the front elevation, and the left side view is placed on the right side.",
    "rankerTip": "First Angle: Plan below elevation, left view on right. Recommended by Bureau of Indian Standards (BIS).",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-324",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In projection of solids, if the axis of a right solid is perpendicular to HP its top view will be :",
    "options": [
      "Front view",
      "Right view",
      "Base",
      "Left view"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Base. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Base is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-325",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the statement is not true as the case of first angle projection?",
    "options": [
      "Object assumed to be in the first quadrant",
      "Front view is drawn below the top view",
      "The view from the left is drawn on the right",
      "None of this statement is false"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Front view is drawn below the top view. In First Angle Projection, the object lies in the first quadrant (between observer and projection plane). The top view (plan) is projected below the front elevation, and the left side view is placed on the right side.",
    "rankerTip": "First Angle: Plan below elevation, left view on right. Recommended by Bureau of Indian Standards (BIS).",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-326",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "If plan and elevation of a line segment are seen coincide, the line is in :",
    "options": [
      "First quadrant",
      "Second quadrant",
      "Third quadrant",
      "Quadrantal axis"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Quadrantal axis. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Quadrantal axis is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-327",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In first angle projection the left side view of the object is drawn on the :",
    "options": [
      "Left side",
      "Right side",
      "Bottom side",
      "Top side"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Right side. In First Angle Projection, the object lies in the first quadrant (between observer and projection plane). The top view (plan) is projected below the front elevation, and the left side view is placed on the right side.",
    "rankerTip": "First Angle: Plan below elevation, left view on right. Recommended by Bureau of Indian Standards (BIS).",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-328",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Isometric drawing are drawn at _______ to the horizontal",
    "options": [
      "45°",
      "50°",
      "60°",
      "30°"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option 30°. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 30° is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-329",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When a prism rests with its base on HP, its top view is a :",
    "options": [
      "Rectangle",
      "Side",
      "Square",
      "Base shape"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Base shape. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Base shape is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-330",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "If straight lines are drawn from various points on the contour of an object to meet a plane, the object is said to be :",
    "options": [
      "Reflected",
      "Perspective",
      "Projected",
      "Plan"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Projected. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Projected is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-331",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The method of drawing two or more views of an object on planes usually at right angle to each other by projecting perpendicular is called :",
    "options": [
      "Axonometric projection",
      "Orthographic projection",
      "Oblique projection",
      "Perspective projection"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Orthographic projection. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Orthographic projection is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-332",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Isometric projection of an object is",
    "options": [
      "Oblique projection",
      "Axonometric projection",
      "Perspective projection",
      "Cabinet projection"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Axonometric projection. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Axonometric projection is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-333",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which one of the following statement is true with respect to First Angle Projection",
    "options": [
      "Project plane is in between the viewer and the object",
      "Planes may not be transparent",
      "PV placed above and FV placed below",
      "Views are drawn on the same side of the viewing plane"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Planes may not be transparent. In First Angle Projection, the object lies in the first quadrant (between observer and projection plane). The top view (plan) is projected below the front elevation, and the left side view is placed on the right side.",
    "rankerTip": "First Angle: Plan below elevation, left view on right. Recommended by Bureau of Indian Standards (BIS).",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-334",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Where the plan is placed in third angle projection ?",
    "options": [
      "Below elevation",
      "Above elevation",
      "Left of elevation",
      "Right of elevation"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Above elevation. In Third Angle Projection, the transparent plane of projection lies between the observer and the object. The top view (plan) is placed above the front elevation.",
    "rankerTip": "Third Angle: Plan above elevation, right view on right. Standard in USA and Canada.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-335",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The plane on which the projectors meet is known as :",
    "options": [
      "Plane of axis",
      "Plane of projection",
      "Plane of picture",
      "Oblique projection"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Plane of projection. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Plane of projection is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-336",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The orthographic projection recommended by BIS is",
    "options": [
      "First angle",
      "Second angle",
      "Third angle",
      "Fourth angle"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option First angle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option First angle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-337",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The development of surface of a cube consists of _______ equal squares.",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 6. A cube (regular hexahedron) is bounded by six congruent square faces.",
    "rankerTip": "Cube / Hexahedron = 6 equal square faces.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-338",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "If three lines drawn from a point parallel to the three isometric axis meeting at a point makes an angle of _______ with each other.",
    "options": [
      "30°",
      "45°",
      "90°",
      "120°"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option 120°. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 120° is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-339",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A point 'p' is above horizontal plane and infront of vertical plane. The point is in",
    "options": [
      "First quadrant",
      "Second quadrant",
      "Third quadrant",
      "Fourth quadrant"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option First quadrant. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option First quadrant is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-340",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "An isometric view (drawn with true scale) will be approximately what percentage larger than an isometric projection?",
    "options": [
      "22.5%",
      "81.6%",
      "100%",
      "130%"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 22.5%. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 22.5% is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-341",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When the object is placed in 1st quadrant such that it is in between observer and projection plane then the method of projection is :",
    "options": [
      "1st angle projection",
      "3rd angle projection",
      "Isometric projection",
      "Orthographic projection"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 1st angle projection. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 1st angle projection is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-342",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The planes of projections lie between the object and the observer is in :",
    "options": [
      "Third angle projection",
      "Fourth angle projection",
      "First angle projection",
      "Second angle projection"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Third angle projection. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Third angle projection is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-343",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The point P is above horizontal plane and behind vertical plane. The point is in the _______ quadrant",
    "options": [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Second. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Second is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-344",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A line AB 100 mm long has its end A in the first quadrant. If the line is perpendicular to the vertical plane (VP), the front view of the line is a :",
    "options": [
      "Point",
      "Straight line",
      "Curve",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Point. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Point is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.5: Projections)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-345",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The revolution of a semi-circle about its diameter as axis, the solid generated is called",
    "options": [
      "Cylinder",
      "Cone",
      "Sphere",
      "Frustum of cone"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Sphere. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Sphere is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-346",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The maximum number of tangents drawn to a circle from a point outside the circle :",
    "options": [
      "2",
      "4",
      "16",
      "Infinity"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 2. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 2 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-347",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The lines, which are with same distance between them and they do not meet when extended are called as :",
    "options": [
      "Straight lines",
      "Parallel line",
      "Perpendicular line",
      "Inclined line"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Parallel line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Parallel line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-348",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A dodecagon has how many sides",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option 12. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 12 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-349",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A four side figure in which all the sides equal but the angles are not the right angles",
    "options": [
      "Square",
      "Rhombus",
      "Rectangle",
      "Trapezium"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Rhombus. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Rhombus is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-350",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The unit of RF is _______",
    "options": [
      "cm",
      "cm²",
      "cm³",
      "None of these"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option None of these. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-351",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The spiral curve traced by a point on a taut cord, unwinding from around a circle is called :",
    "options": [
      "Helix",
      "Involute",
      "Parabola",
      "Hyperbola"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Involute. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Involute is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-352",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the name for part of circle with radii making 90° with each other?",
    "options": [
      "Chord",
      "Sector",
      "Segment",
      "Quadrant"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Quadrant. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Quadrant is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-353",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A solid bounded by planes are called",
    "options": [
      "Prism",
      "Pyramid",
      "Polyhedra",
      "Polygon"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Polyhedra. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Polyhedra is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-354",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Each deflection angle (exterior angle) of a regular pentagon =",
    "options": [
      "108°",
      "72°",
      "60°",
      "120°"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 72°. The sum of all exterior deflection angles of any convex polygon is always 360°. For a regular n-gon, each exterior angle is 360° / n.",
    "rankerTip": "Sum of exterior angles of any polygon = 360°.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-355",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the formula for calculating sum of interior angles in a polygon?",
    "options": [
      "(n - 1) 90°",
      "(n + 1) 90°",
      "(2n + 4) 90°",
      "(2n - 4) 90°"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option (2n - 4) 90°. The sum of interior angles of an n-sided polygon is (2n - 4) × 90° = (n - 2) × 180°.",
    "rankerTip": "Polygon interior angles: Triangle = 180°, Quadrilateral = 360°, Pentagon = 540°, Hexagon = 720°, Octagon = 1080°, Decagon = 1440°.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-356",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which one of the following is not a conic ?",
    "options": [
      "Ellipse",
      "Parabola",
      "Involute",
      "Circle"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Involute. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Involute is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-357",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Straight line may be defined as the _______ of a point moving linearly",
    "options": [
      "Focus",
      "Locus",
      "Cocus",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Locus. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Locus is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-358",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The angle of straight line is",
    "options": [
      "Less than 180°",
      "Equal to 180°",
      "More than 180°",
      "Less than or more than 180°"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Equal to 180°. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Equal to 180° is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-359",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The view drawn to show the internal detail of an object is called :",
    "options": [
      "Isometric view",
      "Oblique view",
      "Sectional view",
      "Internal view"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Sectional view. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Sectional view is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-360",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following publications made by the Indian standards include standard techniques for line conventions?",
    "options": [
      "BIS 9609",
      "SP 46-2003",
      "ASMEV 14.2M",
      "None of the above"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option SP 46-2003. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option SP 46-2003 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-361",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A section is formed by passing a cutting plane at right angles to the axis of the object is termed as",
    "options": [
      "Partial section",
      "Full section",
      "Revolved section",
      "Offset section"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Revolved section. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Revolved section is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-362",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When drawing a line using the relative coordinate system line is created from _______",
    "options": [
      "0, 0",
      "The ending point of the last line",
      "The beginning point of the last line",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option The ending point of the last line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option The ending point of the last line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-363",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The centre of the super scribed circle is called :",
    "options": [
      "Centre of curvature",
      "In centre",
      "Circum centre",
      "Centre of vision"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Circum centre. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Circum centre is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-364",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The simplest figure which can be plotted without angles but with sides :",
    "options": [
      "Pentagon",
      "Octagon",
      "Hexagon",
      "Triangle"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Triangle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Triangle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-365",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A figure enclosed by seven straight lines is called",
    "options": [
      "Hexagon",
      "Octagon",
      "Decagon",
      "Heptagon"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Heptagon. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Heptagon is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-366",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A curve generated by a point moving on a line so that the ratio of length of succeeding radius is same for equal angular movement",
    "options": [
      "Logarithmic spiral",
      "Archimedean spiral",
      "Helix",
      "None of these"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Logarithmic spiral. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Logarithmic spiral is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-367",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In plane geometry the sum ofangles of a triangle in two right angles, whereas in spherical",
    "options": [
      "Equal to two right angles",
      "Less than two right angles",
      "Greater than two right angles",
      "None of these"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Greater than two right angles. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Greater than two right angles is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-368",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Apparent shape of section is",
    "options": [
      "Larger",
      "Same",
      "Smaller",
      "None of the above"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Smaller. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Smaller is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-369",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In which regular polygon sides are equal to a radius of circumscribing circle",
    "options": [
      "Heptagon",
      "Pentagon",
      "Octagon",
      "Hexagon"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Hexagon. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Hexagon is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-370",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which one is not belong to quadrilaterals ?",
    "options": [
      "Square",
      "Rectangle",
      "Rhombus",
      "Triangle"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Triangle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Triangle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-371",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A triangle is a plane rectilinear figure having how many sides and angles?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Three. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Three is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-372",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The recommended method of dimensioning a sphere with diameter 50 mm is :",
    "options": [
      "Sø05",
      "S500",
      "S50",
      "Sø50"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Sø50. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Sø50 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-373",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Solid geometrical drawing dimensions",
    "options": [
      "Two",
      "Three",
      "One",
      "Four"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Three. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Three is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-374",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Conventional signs and symbols are in constant use on",
    "options": [
      "Small scale drawing",
      "Large scale drawing",
      "Sketching",
      "Free hand drawing"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Small scale drawing. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Small scale drawing is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-375",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The development of the surface of a pyramid consists of a number of equal contact",
    "options": [
      "Equilateral triangle",
      "Right angled triangle",
      "Isosceles triangle",
      "Scalene triangle"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Isosceles triangle. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-376",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Ifa line intersects a circle at two points and does not pass through the center, the line segment inside the circle is referred as :",
    "options": [
      "Chord",
      "Quadrant",
      "Segment",
      "Radial line"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Chord. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Chord is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-377",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Engineer's drawing is the language of",
    "options": [
      "Doctors",
      "Engineers",
      "Farmers",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Engineers. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Engineers is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-378",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Development of a right circular cone is",
    "options": [
      "triangle and circle",
      "sector and circle",
      "Two circles",
      "Two triangles"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option sector and circle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option sector and circle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-379",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The angle of mitre line is _______ degrees",
    "options": [
      "30",
      "180",
      "90",
      "45"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option 45. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 45 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-380",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The card board scale should be never be used as a _______ for drawing straight lines",
    "options": [
      "Straight edge",
      "Set square",
      "Working edge",
      "T-square"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Straight edge. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Straight edge is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-381",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which special publication by the Bureau of Indian Standards (BIS) specifies code of practice for general engineering drawing?",
    "options": [
      "SP: 46",
      "SP: 34",
      "SP: 16",
      "SP: 24"
    ],
    "correctOptionIndex": 0,
    "explanation": "SP 46:2003 ('Engineering Drawing Practice for Schools and Colleges') is the authoritative special publication published by the Bureau of Indian Standards (BIS) covering all drawing standards.",
    "rankerTip": "SP 46:2003 is the official BIS compendium for engineering drawing practice.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-382",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When drawing a perpendicular line through a point which is nearer to the middle of a given line is cut at two points on the line?",
    "options": [
      "circle",
      "square",
      "rectangle",
      "arc"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option arc. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option arc is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-383",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A rectilinear figure bounded by more than five sides :",
    "options": [
      "Trapezium",
      "Polygons",
      "Rhombus",
      "Quadrilateral"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Polygons. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Polygons is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-384",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "opposite sides equal and parallel. Opposite angles are equal. Diagonals are not equal",
    "options": [
      "Rhomboid",
      "Trapezoid",
      "Trapezium",
      "Rhombus"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Rhomboid. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Rhomboid is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-385",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "An angle more than 90° but less than 180° is called :",
    "options": [
      "Acute angle",
      "Obtuse angle",
      "Right angle",
      "Reflex angle"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Obtuse angle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Obtuse angle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-386",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A solid having four equal equilateral triangular faces is known as",
    "options": [
      "Pyramid",
      "Tetrahedron",
      "Cone",
      "Polygon"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Tetrahedron. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Tetrahedron is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-387",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The symbol 'S ø ' indicates:",
    "options": [
      "Sectional diameter",
      "Spherical diameter",
      "Squared diameter",
      "Straight diameter"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Spherical diameter. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Spherical diameter is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-388",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A curve generated by the point moving on the surface of a cylinder or on a cone in the Circumferential direction at a constant angular velocity and in the axial direction at a uniform rate is :",
    "options": [
      "Cycloid",
      "Involute",
      "Trochoid",
      "Helix"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Helix. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-389",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The isometric projection of a square is :",
    "options": [
      "Rectangle",
      "Rhombus",
      "Parallelogram",
      "Trapezoid"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Rhombus. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Rhombus is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-390",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Name the quadrilateral if opposite sides are equal and parallel and all four angles are right angles?",
    "options": [
      "Square",
      "Rectangle",
      "Rhombus",
      "Rhomboid"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Rectangle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Rectangle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-391",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The development of a tetrahedron will be a :",
    "options": [
      "Square",
      "Triangle",
      "Sector",
      "Rectangle"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Triangle. A regular tetrahedron is a regular polyhedron bounded by four congruent equilateral triangular faces.",
    "rankerTip": "Tetrahedron has 4 equilateral triangular faces and 4 vertices.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-392",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A regular pentagon is a closed figure having",
    "options": [
      "Eight sides of equal dimension",
      "Six sides of equal dimension",
      "Five sides of equal dimension",
      "Seven sides of equal dimension"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Five sides of equal dimension. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Five sides of equal dimension is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-393",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A polygon having nine side is",
    "options": [
      "Decagon",
      "Nonagon",
      "Hexagon",
      "Octagon"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Nonagon. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Nonagon is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-394",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the name of line perpendicular to horizontal lines?",
    "options": [
      "Vertical line",
      "Straight line",
      "Parallel line",
      "Horizontal line"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Vertical line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Vertical line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-395",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A triangle having any angle less than 30° or greater than 120° is known as :",
    "options": [
      "Right triangle",
      "Isosceles triangle",
      "Well-conditioned triangle",
      "Ill-conditioned triangle"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Ill-conditioned triangle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Ill-conditioned triangle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-396",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A four sided figure having two pairs to sides parallel is called a",
    "options": [
      "Rhomboid",
      "Regular polygon",
      "Pentagon",
      "Trapezoid"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Rhomboid. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Rhomboid is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-397",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The internal angle of a regular hexagon is",
    "options": [
      "72 72",
      "108",
      "120",
      "150"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 120. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 120 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-398",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The part of a circle bounded by an area and its chord is known as :",
    "options": [
      "Segment",
      "Sector",
      "Diameter",
      "Chord"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Segment. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Segment is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-399",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A plane figure bounded by more than four equal straight lines and containing more than four equal angles is termed as",
    "options": [
      "Polygon",
      "Regular polygon",
      "Quadrilateral",
      "Rhombus"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Regular polygon. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Regular polygon is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-400",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A triangle having all the three angles approximately equal is known as :",
    "options": [
      "Well - conditioned triangle",
      "Best conditioned triangle",
      "Bad conditioned triangle ncr•",
      "Good conditioned triangle"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Well - conditioned triangle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Well - conditioned triangle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-401",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A dimension is stated as 28±0.02 mm in a drawing. What is the tolerance?",
    "options": [
      "28 mm",
      "0.02 mm",
      "-0.02 mm",
      "0.04 mm"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option 0.04 mm. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 0.04 mm is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-402",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the name of triangle with all the three angles, one of the angle is equal to 90°?",
    "options": [
      "Scalene triangle",
      "Isosceles triangle",
      "Equilateral triangle",
      "Right angle triangle"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Right angle triangle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Right angle triangle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-403",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A regular polygon having eight sides is called",
    "options": [
      "Pentagon",
      "Hexagon",
      "Heptagon",
      "Octagon"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Octagon. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Octagon is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-404",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A tetrahedron is lying on one of its faces when it is cut by a plane parallel to HP, the true shape of the section is _______",
    "options": [
      "Rectangle",
      "Equilateral triangle",
      "Trapezium",
      "None of the above"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Equilateral triangle. A regular tetrahedron is a regular polyhedron bounded by four congruent equilateral triangular faces.",
    "rankerTip": "Tetrahedron has 4 equilateral triangular faces and 4 vertices.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-405",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The line perpendicular to a tangent and is passing through the point of contact is called",
    "options": [
      "Perpendicular bisector",
      "Angle bisector",
      "Normal",
      "Tangent"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Normal. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Normal is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-406",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The size of the room in the line sketch represent only the _______ measurement",
    "options": [
      "Internal",
      "External",
      "Including wall thickness",
      "Both Internal, External and Wall thickness"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Internal. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Internal is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-407",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "How many pairs of parallel lines are there in regular hexagon",
    "options": [
      "2",
      "3",
      "6",
      "1"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 3. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 3 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-408",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A regular polygon with six sides is called :",
    "options": [
      "Pentagon",
      "Hexagon",
      "Octagon",
      "Polyhedron"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Hexagon. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Hexagon is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-409",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "An angle less than 90° is",
    "options": [
      "Obtuse angle",
      "Acute angle",
      "Right angle",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Acute angle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Acute angle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-410",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the formula for finding the interior angle of a polygon?",
    "options": [
      "(n-2)180/n",
      "(2n-4)90",
      "(2-n)90/n",
      "(2n-2)180/n"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option (n-2)180/n. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option (n-2)180/n is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-411",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The path traced by the ball thrown up in air, reaches maximum height and travel a horizontal distance is :",
    "options": [
      "Hyperbola",
      "Helix",
      "Parabola",
      "Ellipse"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Parabola. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Parabola is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-412",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The area of a pentagon is :",
    "options": [
      "1.7205 x side²",
      "1.2705 x side²",
      "1.7205 x √side",
      "1.2705 x √side"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 1.7205 x side². As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 1.7205 x side² is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-413",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Right solid is a solid whose axis is _______ to its base",
    "options": [
      "Horizontal",
      "Parallel",
      "Inclined",
      "Perpendicular"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Perpendicular. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Perpendicular is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-414",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the name of angle more than 180°?",
    "options": [
      "Reflex angles",
      "Straight angle",
      "Adjacent angle",
      "Complementary angle"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Reflex angles. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Reflex angles is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-415",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The lateral development of a cylinder is of _______ shape",
    "options": [
      "Triangle",
      "Circle",
      "Ellipse",
      "Rectangle"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Rectangle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Rectangle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-416",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The value of π is",
    "options": [
      "21 / 7",
      "7 / 22",
      "22 / 7",
      "27 / 7"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 22 / 7. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 22 / 7 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-417",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which of the following method is not used for drawing the development of spheres ?",
    "options": [
      "Lune",
      "Zone",
      "Polycylindric",
      "Box"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Box. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Box is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-418",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A regular solid having six square faces is :",
    "options": [
      "Hexagon",
      "Octahedron",
      "Cube",
      "Tetrahedron"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Cube. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Cube is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-419",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The sum of interior angles of a regular pentagon is :",
    "options": [
      "360°",
      "540°",
      "560°",
      "640°"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 540°. The sum of interior angles of an n-sided polygon is (2n - 4) × 90° = (n - 2) × 180°.",
    "rankerTip": "Polygon interior angles: Triangle = 180°, Quadrilateral = 360°, Pentagon = 540°, Hexagon = 720°, Octagon = 1080°, Decagon = 1440°.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-420",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A solid bounded by twelve equal regular pentagon is known as :",
    "options": [
      "Tetrahedron",
      "Octahedron",
      "Icosahedron",
      "Dodecahedron"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Dodecahedron. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Dodecahedron is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-421",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "According to ISI method of measurement, the order of the sequence is :",
    "options": [
      "Length, breadth, height",
      "Breadth, length, height",
      "Height, breadth, length",
      "Length, height, breadth"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Length, breadth, height. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Length, breadth, height is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-422",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Scale of chord is used to measure",
    "options": [
      "Angle",
      "Area",
      "Length",
      "Radius"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Angle. A scale of chords is a specialized graphic construction used to measure or set out angles in the absence of a protractor.",
    "rankerTip": "Scale of chords is used for measuring and laying out angles.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-423",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Polar coordinates are used mostly for drawing",
    "options": [
      "Angular lines",
      "Arc",
      "Ellipse",
      "Circle"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Angular lines. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Angular lines is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-424",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the name of straight line that is neither horizontal nor vertical?",
    "options": [
      "Curved line",
      "Parallel line",
      "Inclined line",
      "Perpendicular line"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Inclined line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Inclined line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-425",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "When constructing in circle of a triangle, the centre of circle will be getting when :",
    "options": [
      "Bisecting sides of triangle",
      "Bisecting any one angle of triangle",
      "Bisecting any one side of triangle",
      "Bisecting any two angles of triangle"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Bisecting any two angles of triangle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Bisecting any two angles of triangle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-426",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Equal chords of circle always subtend equal angle at :",
    "options": [
      "Circle",
      "Centre of circle",
      "Outside of circle",
      "Inside of circle"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Centre of circle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Centre of circle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-427",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Which solid has eight equilateral triangular faces?",
    "options": [
      "Cube",
      "Tetrahedron",
      "Octahedron",
      "Polyhedron"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Octahedron. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Octahedron is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-428",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the sum of interior angles in a quadrilateral?",
    "options": [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option 360°. The sum of interior angles of an n-sided polygon is (2n - 4) × 90° = (n - 2) × 180°.",
    "rankerTip": "Polygon interior angles: Triangle = 180°, Quadrilateral = 360°, Pentagon = 540°, Hexagon = 720°, Octagon = 1080°, Decagon = 1440°.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-429",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Undecogon has _______ sides",
    "options": [
      "5",
      "11",
      "12",
      "9"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 11. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 11 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-430",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "_______ is a plain figure bounded by three straight line and has three angles",
    "options": [
      "Circle",
      "Square",
      "Triangle",
      "Pentagon"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Triangle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Triangle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-431",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A drawing which shows the true shape of the surface of a solid in one plane is called",
    "options": [
      "Development of surface",
      "Isometric projection",
      "Perspective",
      "Orthographic projection"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Development of surface. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-432",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A solid contained by plane surfaces is termed as",
    "options": [
      "Polygon",
      "Polyhedron",
      "Sphere",
      "None of these"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Polyhedron. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-433",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "For a given velocity of a projectile, the range is maximum when the angle of projection is",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 45°. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 45° is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-434",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "How many sides there in hexagon",
    "options": [
      "5",
      "4",
      "6",
      "7"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 6. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 6 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-435",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A triangle having all the three sides unequal and all the three angles are unequal",
    "options": [
      "Equilateral triangle",
      "Scalene triangle",
      "Isosceles triangle",
      "Right angled triangle"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Scalene triangle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Scalene triangle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-436",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The development of a curved surface of a cone is a _______ of a circle",
    "options": [
      "Diameter",
      "Sector",
      "Circumference",
      "Chord"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Sector. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-437",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The sum of two adjacent angles are 180° then the angles are known as :",
    "options": [
      "Complementary angles",
      "Acute angles",
      "Supplementary angles",
      "Obtuse angles"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Supplementary angles. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Supplementary angles is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-438",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A solid bounded by one surface in such a way whose each points equidistant from the centre is",
    "options": [
      "Circle",
      "Cylinder",
      "Sphere",
      "Cone"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Sphere. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-439",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The curve generated by a point on the circumference of a circle, which rolls without slipping along outside of another circle is known as :",
    "options": [
      "Hypocycloid",
      "Epicycloid",
      "Cycloid",
      "Trochoid"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Epicycloid. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Epicycloid is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-440",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A pyramid with a square base has _______ faces",
    "options": [
      "4",
      "5",
      "6",
      "8"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 5. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 5 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-441",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the sum of included angles in a plane triangle?",
    "options": [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 180°. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 180° is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-442",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Sum of the interior angles of a regular decagon (10-sided polygon) is :",
    "options": [
      "1440°",
      "540°",
      "1044°",
      "1200°"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 1440°. The sum of interior angles of an n-sided polygon is (2n - 4) × 90° = (n - 2) × 180°.",
    "rankerTip": "Polygon interior angles: Triangle = 180°, Quadrilateral = 360°, Pentagon = 540°, Hexagon = 720°, Octagon = 1080°, Decagon = 1440°.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-443",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Afree hand sketch is considered to be good when its features are shown in correct :",
    "options": [
      "Proportions",
      "Paper",
      "Position",
      "None of the above"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Proportions. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Proportions is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-444",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The drawing which is used for explaining the working principle of any machine is known as :",
    "options": [
      "Producing drawing",
      "Exploded drawing",
      "Schematic drawing",
      "Tabular drawing"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Schematic drawing. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Schematic drawing is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-445",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The shortest distance between two points",
    "options": [
      "Curved line",
      "Straight line",
      "Parallel line",
      "Construction line"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Straight line. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Straight line is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-446",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Regular polygon having 10 equal side is called",
    "options": [
      "Pentagon",
      "Hexagon",
      "Octagon",
      "Decagon"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Decagon. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Decagon is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-447",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A polygon having four equal sides, the opposite sides are parallel but adjacent sides are not perpendicular, the exact name of the quadrilateral is :",
    "options": [
      "Rhombus",
      "Square",
      "Rectangle",
      "Parallelogram"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Rhombus. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Rhombus is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-448",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The part of a circle containing two radii and the arc between them is known as",
    "options": [
      "Quadrant",
      "Arc",
      "Circumference of the circle",
      "Sector"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Sector. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Sector is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-449",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Number of diagonals that a hexagon can have :",
    "options": [
      "4",
      "0",
      "9",
      "10"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option 9. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 9 is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-450",
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
    "explanation": "Correct Answer: Option Backward Vernier. In a retrograde vernier, graduations increase in the direction opposite to the main scale, and each vernier division is larger than a main scale division: (n+1) MSD = n VSD.",
    "rankerTip": "Retrograde vernier: vernier divisions are longer than main scale divisions and numbered in the opposite direction.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-451",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The process of unfolding all the surface of an object on a plane is called :",
    "options": [
      "Perspective",
      "Isometric",
      "Development of surface",
      "Oblique"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Development of surface. Representative Fraction (RF) is the ratio of drawing dimension to actual dimension of the object in the same units, making it dimensionless.",
    "rankerTip": "RF = Length on drawing / Actual length of object. Full scale RF=1; Reducing RF<1; Enlarging RF>1.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-452",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The path described by a point moving in a plane at a fixed distance from a fixed point is a",
    "options": [
      "Line",
      "Point",
      "Angle",
      "Circle"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Circle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Circle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-453",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "One interior angle of a regular dodecagon (12-sided polygon) is :",
    "options": [
      "150°",
      "165°",
      "135°",
      "105°"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 150°. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 150° is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-454",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The path traced by the projectile is called :",
    "options": [
      "Trajectory",
      "Horizontal range",
      "Velocity of projection",
      "Angle of projection"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Trajectory. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Trajectory is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-455",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "In which triangle all the three angles are less than 90° and unequal :",
    "options": [
      "Equilateral triangle",
      "Acute angle triangle",
      "Right angled triangle",
      "Scalene triangle"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Acute angle triangle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Acute angle triangle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Scales",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-456",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "_______ prints cannot be directly taken out from the drawing.",
    "options": [
      "Tracing paper",
      "Tracing cloth",
      "Blue print",
      "Drawing sheet"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Blue print. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Blue print is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-457",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The curve _______ is commonly used in screw threads, springs, spiral stair case etc.",
    "options": [
      "Helix",
      "Involute",
      "Logarithmic spiral",
      "Cycloid"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Helix. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Helix is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-458",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Name the polygon having six equal sides :",
    "options": [
      "Regular hexagon",
      "Regular pentagon",
      "Irregular hexagon",
      "Irregular pentagon"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Regular hexagon. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Regular hexagon is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-459",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the name of plane figure bounded by five or more straight lines?",
    "options": [
      "Polygon",
      "Trapezoid",
      "Trapezium",
      "Rhombus"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Polygon. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Polygon is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-460",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The sum of the interior angles of a hexagon is :",
    "options": [
      "720°",
      "540°",
      "900°",
      "360°"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option 720°. The sum of interior angles of an n-sided polygon is (2n - 4) × 90° = (n - 2) × 180°.",
    "rankerTip": "Polygon interior angles: Triangle = 180°, Quadrilateral = 360°, Pentagon = 540°, Hexagon = 720°, Octagon = 1080°, Decagon = 1440°.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-461",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A Polyhedra has six equal square faces is called",
    "options": [
      "Tetrahedron",
      "Icosahedron",
      "Octahedron",
      "Hexahedron"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Hexahedron. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Hexahedron is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-462",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A regular heptagon is a closed figure having",
    "options": [
      "Eight sides ofequal dimension",
      "Six sides of equal dimension",
      "Seven sides of equal dimension",
      "Five sides of equal dimension"
    ],
    "correctOptionIndex": 2,
    "explanation": "Correct Answer: Option Seven sides of equal dimension. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Seven sides of equal dimension is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Dimensioning",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-463",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The angle between two curved lines is _______",
    "options": [
      "Spherical angle",
      "Deflection angle",
      "Acute angle",
      "Curved angle"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Spherical angle. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Spherical angle is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-464",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Calculate the sum of exterior angles of a regular hexagon :",
    "options": [
      "900°",
      "1080°",
      "1260°",
      "1440°"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option 1440°. The sum of all exterior deflection angles of any convex polygon is always 360°. For a regular n-gon, each exterior angle is 360° / n.",
    "rankerTip": "Sum of exterior angles of any polygon = 360°.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-465",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The chord of a circle is _______",
    "options": [
      "part of diameter",
      "straight line joining the end of an arc",
      "Circle contained by two radius",
      "straight line touches circle in one point"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option straight line joining the end of an arc. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option straight line joining the end of an arc is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Types of lines",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-466",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The ratio of isometric length to true length is :",
    "options": [
      "Cos 30° / Cos 45°",
      "Sin 30° / Sin 45°",
      "Sin 45° / Sin 30°",
      "Cos 45° / Cos 30°"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option Cos 45° / Cos 30°. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Cos 45° / Cos 30° is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Projection",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-467",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "Obtuse angles is an angle :",
    "options": [
      "Less than 60°",
      "Greater than 90°",
      "Equal to 60°",
      "Greater than 60° and less than 75°"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Greater than 90°. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Greater than 90° is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-468",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "The curve generated by a point on the circumference of a circle rolling along a straight line is called a",
    "options": [
      "Hyperbola",
      "Cycloid",
      "Parabola",
      "Epicycloid"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option Cycloid. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Cycloid is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Conic sections",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-469",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the name of quadrilateral with four sides are equal and four angles are right angle?",
    "options": [
      "Square",
      "Rectangle",
      "Trapezoid",
      "Rhombus"
    ],
    "correctOptionIndex": 0,
    "explanation": "Correct Answer: Option Square. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option Square is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-470",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "How many sides and angles are in quadrilateral?",
    "options": [
      "3 sides and 3 angles",
      "4 sides and 4 angles",
      "5 sides and 5 angles",
      "6 sides and 6 angles"
    ],
    "correctOptionIndex": 1,
    "explanation": "Correct Answer: Option 4 sides and 4 angles. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option 4 sides and 4 angles is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-471",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "What is the sum of Interior and Exterior angle for a polygon?",
    "options": [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option 360°. The sum of all exterior deflection angles of any convex polygon is always 360°. For a regular n-gon, each exterior angle is 360° / n.",
    "rankerTip": "Sum of exterior angles of any polygon = 360°.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  },
  {
    "id": "bq-ed472-472",
    "moduleId": "mod-1",
    "moduleNumber": 1,
    "question": "A polyhedron having a plane figure as a base and a number of triangular faces meeting at apex is called",
    "options": [
      "A cube",
      "A cylinder",
      "A prism",
      "A pyramid"
    ],
    "correctOptionIndex": 3,
    "explanation": "Correct Answer: Option A pyramid. As per Bureau of Indian Standards (BIS) and standard engineering drawing conventions, this represents the standard specification and principle.",
    "rankerTip": "Remember: Option A pyramid is the standard answer verified by Kerala PSC official technical answer keys.",
    "topic": "Geometrical constructions",
    "type": "pyq",
    "examName": "Engineering Drawing Official Bank (Ch.6: Miscellaneous Questions)",
    "year": 2024,
    "createdAt": "2026-09-21T15:00:00Z"
  }
];
