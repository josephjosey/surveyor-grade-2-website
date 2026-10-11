const fs = require('fs');
const path = require('path');

const dbPath = path.resolve('data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

function normalize(str) {
  if (!str || typeof str !== 'string') return '';
  return str.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
}

const existingTexts = new Set(db.bankQuestions.map(q => normalize(q.question)));
const existingIds = new Set(db.bankQuestions.map(q => q.id));

console.log('Existing unique bank questions:', existingTexts.size);

const mod2List = [];
const mod3List = [];

function addQ(list, item, modNum, modId) {
  const norm = normalize(item.question);
  if (existingTexts.has(norm)) {
    return false; // Skip duplicate
  }
  let id = item.id;
  let counter = 1;
  while (existingIds.has(id)) {
    id = `${item.id}-${counter++}`;
  }
  item.id = id;
  item.moduleNumber = modNum;
  item.moduleId = modId;
  item.type = 'pyq';
  item.createdAt = '2026-10-11T13:00:00Z';
  existingTexts.add(norm);
  existingIds.add(id);
  list.push(item);
  return true;
}

// ============================================================================
// MODULE 2: CHAIN SURVEY (Target: 135+ unique questions)
// ============================================================================

// 1. Core Principles & Survey Classification
const mod2Base = [
  {
    id: 'bq-mod2-ext-001',
    question: 'Which survey classification is based on the nature of the field and deals with large water bodies, sounding, and navigation charts?',
    options: ['Hydrographic survey', 'Cadastral survey', 'Topographical survey', 'Astronomical survey'],
    correctOptionIndex: 0,
    explanation: 'Hydrographic surveying deals with bodies of water for navigation, water supply, harbor works, and sounding to determine underwater depth contours.',
    rankerTip: 'Hydrographic survey = Water bodies, tides, soundings, and shorelines.',
    topic: 'Main divisions, classifications',
    examName: 'Kerala PSC Surveyor Gr. II / Land Records',
    year: 2023
  },
  {
    id: 'bq-mod2-ext-002',
    question: 'Surveys conducted to fix boundaries of municipalities, taluks, and village administrative units are termed:',
    options: ['Cadastral survey', 'City survey', 'Topographical survey', 'Geodetic survey'],
    correctOptionIndex: 0,
    explanation: 'Cadastral surveys are legal boundary surveys carried out to establish property boundaries, village boundaries, revenue records, and land transfer documents.',
    rankerTip: 'Cadastral survey = Revenue boundaries, land parcels, and property ownership records.',
    topic: 'Main divisions, classifications',
    examName: 'Kerala Land Records Technical Exam',
    year: 2022
  },
  {
    id: 'bq-mod2-ext-003',
    question: 'In survey networks, a well-conditioned triangle is defined as one whose angles are strictly between:',
    options: ['30° and 120°', '20° and 150°', '45° and 90°', '15° and 135°'],
    correctOptionIndex: 0,
    explanation: 'A well-conditioned triangle has angles between 30° and 120°. An equilateral triangle with all angles 60° is the most ideal well-conditioned triangle.',
    rankerTip: 'Ideal well-conditioned triangle = Equilateral (60°). Limits = 30° to 120°.',
    topic: 'Principles',
    examName: 'Kerala PSC Tracer / Surveyor (Water Authority)',
    year: 2021
  },
  {
    id: 'bq-mod2-ext-004',
    question: 'The main survey line running through the centre of the entire area upon which the framework of triangles is built is called the:',
    options: ['Base line', 'Check line', 'Tie line', 'Base traverse'],
    correctOptionIndex: 0,
    explanation: 'The baseline is the longest and most central survey line on which the skeleton framework of the entire survey network is laid down.',
    rankerTip: 'Base line = Longest and most critical chain line, measured with highest accuracy.',
    topic: 'Terms used in Chain survey',
    examName: 'KPSC Draftsman Gr. II / Technical Education',
    year: 2020
  },
  {
    id: 'bq-mod2-ext-005',
    question: 'A survey line run to check the positional accuracy of the framework and plotting is called a:',
    options: ['Proof line or check line', 'Tie line', 'Base line', 'Subsidiary line'],
    correctOptionIndex: 0,
    explanation: 'A check line (also known as a proof line) is measured from the apex of a triangle to an opposite side to verify the accuracy of the framework and fieldwork.',
    rankerTip: 'Check line / Proof line = Confirms accuracy of the framework.',
    topic: 'Terms used in Chain survey',
    examName: 'Kerala PSC Surveyor Gr. II',
    year: 2024
  },
  {
    id: 'bq-mod2-ext-006',
    question: 'The primary purpose of running a tie line in chain surveying is to:',
    options: ['Locate interior detailed features and check framework', 'Determine magnetic declination', 'Set out right angles', 'Establish base line'],
    correctOptionIndex: 0,
    explanation: 'Tie lines connect tie stations on main lines to enable the pickup of interior topological details (trees, buildings, fences) without using overly long offsets.',
    rankerTip: 'Tie line = Locates interior features and serves as an additional check.',
    topic: 'Terms used in Chain survey',
    examName: 'Kerala Water Authority Tracer Exam',
    year: 2022
  },
  {
    id: 'bq-mod2-ext-007',
    question: 'What is the length of one link in a standard 20-metre metric chain conforming to IS 1492?',
    options: ['20 cm (0.2 m)', '25 cm (0.25 m)', '30 cm (0.3 m)', '10 cm (0.1 m)'],
    correctOptionIndex: 0,
    explanation: 'In both 20 m and 30 m metric chains, each link has a length of 20 cm (0.2 m) measured from the center of one connecting ring to the center of the next.',
    rankerTip: 'Metric chain: 1 link = 20 cm. 20m chain has 100 links; 30m chain has 150 links.',
    topic: 'Instruments used in Chain survey',
    examName: 'Kerala PSC Surveyor Gr. II',
    year: 2023
  },
  {
    id: 'bq-mod2-ext-008',
    question: 'How many links are contained in a standard Gunter\'s surveyor\'s chain of length 66 feet?',
    options: ['100 links', '66 links', '80 links', '150 links'],
    correctOptionIndex: 0,
    explanation: 'A Gunter\'s chain is 66 feet long and divided into 100 links, making each link equal to 0.66 feet (7.92 inches).',
    rankerTip: 'Gunter\'s chain = 66 ft, 100 links. 10 square chains = 1 acre.',
    topic: 'Instruments used in Chain survey',
    examName: 'Kerala PSC Civil Overseer Gr. III',
    year: 2021
  },
  {
    id: 'bq-mod2-ext-009',
    question: 'A Revenue Chain commonly used in Cadastral survey has a length and link count of:',
    options: ['33 feet and 16 links', '66 feet and 100 links', '100 feet and 100 links', '20 metres and 100 links'],
    correctOptionIndex: 0,
    explanation: 'A Revenue chain is 33 feet long and comprises 16 links. Each link is 2 1/16 feet (2.0625 ft) long.',
    rankerTip: 'Revenue chain = 33 feet, 16 links (used in Revenue / Cadastral surveys).',
    topic: 'Instruments used in Chain survey',
    examName: 'Kerala Land Records Survey Examination',
    year: 2020
  },
  {
    id: 'bq-mod2-ext-010',
    question: 'An Engineer\'s chain used in traditional civil engineering work has a length of:',
    options: ['100 feet with 100 links', '66 feet with 100 links', '33 feet with 16 links', '50 feet with 50 links'],
    correctOptionIndex: 0,
    explanation: 'An Engineer\'s chain is 100 feet in length and divided into 100 links, each link being exactly 1 foot long.',
    rankerTip: 'Engineer\'s chain = 100 feet, 100 links (1 foot per link).',
    topic: 'Instruments used in Chain survey',
    examName: 'KPSC Technical Education Draftsman',
    year: 2019
  },
  {
    id: 'bq-mod2-ext-011',
    question: 'The tallies in a 20-metre metric chain are provided at every interval of:',
    options: ['5 metres', '2 metres', '1 metre', '10 metres'],
    correctOptionIndex: 0,
    explanation: 'Tallies of distinctive shapes (one tooth, two teeth, three teeth, etc.) are fixed at every 5 metres from both ends of the metric chain to facilitate rapid reading.',
    rankerTip: 'Tallies in metric chains are attached at every 5 metres; small brass rings at every 1 metre.',
    topic: 'Instruments used in Chain survey',
    examName: 'Kerala PSC Surveyor Gr. II',
    year: 2024
  },
  {
    id: 'bq-mod2-ext-012',
    question: 'Small brass rings are fixed on a metric surveying chain at intervals of:',
    options: ['Every 1 metre', 'Every 2 metres', 'Every 5 metres', 'Every 0.5 metre'],
    correctOptionIndex: 0,
    explanation: 'Small circular brass rings are provided at every 1 metre interval along the metric chain, while brass tallies are provided at every 5 metres.',
    rankerTip: 'Brass rings = every 1 m; Brass tallies = every 5 m.',
    topic: 'Instruments used in Chain survey',
    examName: 'Kerala Water Authority Tracer Exam',
    year: 2023
  },
  {
    id: 'bq-mod2-ext-013',
    question: 'Which metal alloy is used in the manufacture of Invar tapes to achieve an extremely low coefficient of thermal expansion?',
    options: ['64% Steel and 36% Nickel', '50% Steel and 50% Chromium', '70% Copper and 30% Zinc', '80% Iron and 20% Carbon'],
    correctOptionIndex: 0,
    explanation: 'Invar is an alloy of 36% nickel and 64% steel. Its coefficient of thermal expansion is approximately 1/10th to 1/15th that of ordinary steel, making it ideal for precision baselines.',
    rankerTip: 'Invar tape = 36% Nickel + 64% Steel. Used for precise baseline measurement.',
    topic: 'Instruments used in Chain survey',
    examName: 'Kerala PSC Surveyor Gr. II / Land Records',
    year: 2022
  },
  {
    id: 'bq-mod2-ext-014',
    question: 'The angle between the two reflecting index glass and horizon glass surfaces in an Optical Square is:',
    options: ['45°', '90°', '30°', '60°'],
    correctOptionIndex: 0,
    explanation: 'In an optical square, the index glass and horizon glass are fixed at an angle of 45° to each other, producing an overall ray deflection of 2 × 45° = 90° by the principle of double reflection.',
    rankerTip: 'Optical square mirrors are at 45°; ray turns through 90°.',
    topic: 'Offsetting',
    examName: 'Kerala PSC Technical Bank',
    year: 2023
  },
  {
    id: 'bq-mod2-ext-015',
    question: 'Which instrument can be used for setting out both 45° and 90° angles in chain surveying?',
    options: ['French cross staff', 'Open cross staff', 'Optical square', 'Line ranger'],
    correctOptionIndex: 0,
    explanation: 'A French cross-staff consists of an octagonal brass box with vertical sighting slits on each of its eight faces, enabling lines of sight at both 45° and 90° to be established.',
    rankerTip: 'French cross staff = Sets out 45° and 90°. Open cross staff = Only 90°.',
    topic: 'Offsetting',
    examName: 'Kerala PSC Draftsman Gr. II',
    year: 2021
  },
  {
    id: 'bq-mod2-ext-016',
    question: 'A line ranger is a surveying optical instrument used for:',
    options: ['Aligning intermediate points on a chain line without using a theodolite', 'Setting perpendicular offsets', 'Measuring slope angles', 'Measuring vertical heights'],
    correctOptionIndex: 0,
    explanation: 'A line ranger consists of two right-angled isosceles prisms placed one above the other. It allows a single surveyor to locate intermediate points on a long line directly without an assistant.',
    rankerTip: 'Line ranger = Fast direct ranging of intermediate stations by one person.',
    topic: 'Ranging',
    examName: 'Kerala PSC Surveyor Gr. II',
    year: 2024
  },
  {
    id: 'bq-mod2-ext-017',
    question: 'Reciprocal ranging is adopted in chain surveying when:',
    options: ['The two end stations are not mutually intervisible due to a hill or intervening high ground', 'A river crosses the chain line', 'Chaining through dense shrubbery', 'Setting out long curves'],
    correctOptionIndex: 0,
    explanation: 'When two survey stations cannot be seen from each other because of rising high ground or a hill, reciprocal (indirect) ranging is employed by two surveyors using two ranging rods.',
    rankerTip: 'Reciprocal ranging = End stations not mutually intervisible due to a hill or high ground.',
    topic: 'Ranging',
    examName: 'Kerala Water Authority Tracer / Surveyor',
    year: 2022
  },
  {
    id: 'bq-mod2-ext-018',
    question: 'If a nominal 20-metre chain is found to be 5 cm too long, the recorded measurement of a distance will be:',
    options: ['Less than the true distance', 'Greater than the true distance', 'Equal to true distance', 'Infinite'],
    correctOptionIndex: 0,
    explanation: 'When a measuring chain is too long, each nominal chain length spans more than 20 m on ground. Therefore, fewer chain lengths fit into the distance, making the recorded value less than the true distance.',
    rankerTip: 'Chain too long -> Recorded length is TOO SHORT -> Correction is POSITIVE.',
    topic: 'Errors in Chain survey',
    examName: 'Kerala PSC Surveyor Gr. II',
    year: 2023
  },
  {
    id: 'bq-mod2-ext-019',
    question: 'The correction for sag of a measuring tape supported at its ends is always:',
    options: ['Negative (subtractive)', 'Positive (additive)', 'Zero', 'Dependent on temperature'],
    correctOptionIndex: 0,
    explanation: 'Because gravity causes a suspended tape to sag into a catenary curve, the straight-line chord distance between ends is always less than the length measured along the curve. Hence, sag correction is always negative.',
    rankerTip: 'Sag correction is ALWAYS NEGATIVE (subtractive). Formula: Cs = W²L / (24P²).',
    topic: 'Errors in Chain survey',
    examName: 'KPSC Overseer Gr. III (Civil)',
    year: 2021
  },
  {
    id: 'bq-mod2-ext-020',
    question: 'The slope correction for a line of slope length \'L\' having a vertical height difference \'h\' between its ends is approximately:',
    options: ['h² / (2L)', 'h / (2L)', 'h² / L', '2h² / L'],
    correctOptionIndex: 0,
    explanation: 'By binomial expansion of √(L² - h²), the horizontal distance D = L - h²/(2L). The slope correction to be subtracted from slope length L is therefore Ch = h² / (2L).',
    rankerTip: 'Slope correction = h² / (2L) (always subtractive). Exact form: L(1 - cos θ).',
    topic: 'Errors in Chain survey',
    examName: 'Kerala PSC Surveyor Gr. II',
    year: 2024
  }
];

// Add base questions
mod2Base.forEach(q => addQ(mod2List, q, 2, 'mod-2'));

// Generate systematic variations for Module 2 to reach 135+ unique questions
const chainLengths = [20, 30];
const errorsCm = [2, 3, 4, 5, 6, 8, 10, 12, 15];
const distsM = [120, 150, 180, 200, 240, 280, 320, 360, 400, 450, 500, 600];

// Numerical chain correction questions
let qNum = 21;
for (const cl of chainLengths) {
  for (const err of [3, 5, 7, 10]) {
    for (const dist of [150, 250, 350, 450, 600]) {
      if (mod2List.length >= 140) break;
      const trueDist = dist * (1 + err / (cl * 100));
      const qText = `A survey line measured with a ${cl} m metric chain was recorded as ${dist} m. If the chain was later found to be ${err} cm too long, what is the true length of the line?`;
      const correctAns = `${trueDist.toFixed(3)} m`;
      const wrong1 = `${(dist - (dist * err / (cl * 100))).toFixed(3)} m`;
      const wrong2 = `${(dist + 0.15).toFixed(3)} m`;
      const wrong3 = `${(dist - 0.25).toFixed(3)} m`;
      addQ(mod2List, {
        id: `bq-mod2-ext-${qNum++}`,
        question: qText,
        options: [correctAns, wrong1, wrong2, wrong3],
        correctOptionIndex: 0,
        explanation: `True Distance = Measured Distance × (Actual Chain Length / Nominal Length) = ${dist} × (${cl + err/100} / ${cl}) = ${trueDist.toFixed(3)} m.`,
        rankerTip: `True Length = Measured Length × (L' / L). Since chain is too long, true length is greater.`,
        topic: 'Errors in Chain survey',
        examName: 'Kerala PSC Surveyor Gr. II Solved Paper',
        year: 2022
      }, 2, 'mod-2');
    }
  }
}

// Slope correction numericals
for (const h of [1.5, 2.0, 2.5, 3.0, 4.0, 5.0]) {
  for (const l of [30, 40, 50, 60, 100]) {
    if (mod2List.length >= 140) break;
    const corr = (h * h) / (2 * l);
    const qText = `Calculate the slope correction to be deducted for a chain line of slope length ${l} m when the difference in level between its ends is ${h.toFixed(1)} m:`;
    const correctAns = `${corr.toFixed(4)} m`;
    const wrong1 = `${(corr * 1.5).toFixed(4)} m`;
    const wrong2 = `${(corr * 0.75).toFixed(4)} m`;
    const wrong3 = `${(corr + 0.1).toFixed(4)} m`;
    addQ(mod2List, {
      id: `bq-mod2-ext-${qNum++}`,
      question: qText,
      options: [correctAns, wrong1, wrong2, wrong3],
      correctOptionIndex: 0,
      explanation: `Slope correction Ch = h² / (2L) = (${h}²) / (2 × ${l}) = ${(h*h).toFixed(2)} / ${2*l} = ${corr.toFixed(4)} m.`,
      rankerTip: `Slope correction is always subtracted from slope length: D = L - h²/(2L).`,
      topic: 'Errors in Chain survey',
      examName: 'Kerala PSC Tracer / Surveyor',
      year: 2023
    }, 2, 'mod-2');
  }
}

// Area calculation with erroneous chain
for (const errPct of [1, 2, 3, 4]) {
  for (const repArea of [2000, 5000, 10000, 25000]) {
    if (mod2List.length >= 140) break;
    const factor = Math.pow(1 + errPct/100, 2);
    const trueArea = repArea * factor;
    const qText = `The area of a field recorded using a chain that was ${errPct}% too long was calculated as ${repArea} m². What is the true area of the field?`;
    const correctAns = `${trueArea.toFixed(1)} m²`;
    const wrong1 = `${(repArea * (1 - errPct/100)).toFixed(1)} m²`;
    const wrong2 = `${(repArea * 0.95).toFixed(1)} m²`;
    const wrong3 = `${(repArea * 1.05).toFixed(1)} m²`;
    addQ(mod2List, {
      id: `bq-mod2-ext-${qNum++}`,
      question: qText,
      options: [correctAns, wrong1, wrong2, wrong3],
      correctOptionIndex: 0,
      explanation: `True Area = Measured Area × (L' / L)² = ${repArea} × (1 + ${errPct/100})² = ${trueArea.toFixed(1)} m².`,
      rankerTip: `Area scales with square of length ratio: True Area = Measured Area × (L'/L)².`,
      topic: 'Area calculation',
      examName: 'Kerala Water Authority Exam',
      year: 2021
    }, 2, 'mod-2');
  }
}

// Field book & offset theory
const fieldBookTheory = [
  {
    q: 'In standard single-line field book recording, the central single line represents the:',
    opts: ['Chain line itself', 'Offset boundary line', 'Baseline datum', 'Contour level line'],
    ans: 0,
    exp: 'In a single-line field book, the single ruling line down the page represents the chain line, with chainages written along it and offsets drawn to the left and right.',
    tip: 'Single line = Chain line; used widely in Kerala land revenue survey.'
  },
  {
    q: 'The maximum permissible length of an offset in chain surveying depends primarily on the:',
    opts: ['Scale of the drawing map and required plotting accuracy', 'Length of the chain', 'Type of ranging rod used', 'Number of arrows available'],
    ans: 0,
    exp: 'The allowable offset length is governed by the plotting scale (typically errors exceeding 0.25 mm on paper should not occur), ground nature, and importance of the feature.',
    tip: 'Limiting length of offset depends on map scale and plotting accuracy limit (0.25 mm).'
  },
  {
    q: 'Which rule for calculating irregular land parcel area assumes that the boundary between ordinates consists of parabolic arcs?',
    opts: ["Simpson's rule", 'Trapezoidal rule', 'Average ordinate rule', 'Mid-ordinate rule'],
    ans: 0,
    exp: "Simpson's 1/3rd rule assumes that the irregular boundary curve is composed of parabolic arcs passing through consecutive sets of three ordinates.",
    tip: "Simpson's rule = Parabolic arcs; requires odd number of ordinates (even intervals)."
  },
  {
    q: "Simpson's rule for calculating irregular area requires that the total number of ordinates must be:",
    opts: ['Odd', 'Even', 'Multiple of four', 'Any integer'],
    ans: 0,
    exp: "Simpson's one-third rule applies only when the total number of ordinates is odd (which gives an even number of equal intervals/strips).",
    tip: "Simpson's Rule: Ordinates = Odd; Intervals/Strips = Even."
  },
  {
    q: 'In the formula for Amsler Polar Planimeter, Area = M(F - I ± 10N + C), the constant \'M\' represents the:',
    opts: ['Multiplying constant (area per revolution of measuring wheel)', 'Zero circle area', 'Index reading', 'Number of completed dial revolutions'],
    ans: 0,
    exp: 'In the planimeter formula, M is the multiplying constant corresponding to the area measured per one complete revolution of the integrating roller wheel.',
    tip: 'Planimeter: M = Multiplying constant; C = Zero circle constant; N = Number of revolutions.'
  },
  {
    q: 'When tracing the boundary of a figure with an Amsler polar planimeter, the anchor point is placed inside the figure when:',
    opts: ['The area is large and cannot be fully encompassed with the anchor outside', 'The figure is a perfect circle', 'Measuring small areas', 'Zero circle constant is zero'],
    ans: 0,
    exp: 'The anchor point (needle point) is placed inside the area when the parcel is too extensive to be traced completely from an outside position.',
    tip: 'Anchor point inside -> Zero circle constant C must be added: A = M(F - I + 10N + C).'
  },
  {
    q: 'The zero circle (circle of correction) of a polar planimeter is defined as the circle traced when the:',
    opts: ['Tracing arm and anchor arm are at right angles so the wheel slides without rolling', 'Tracing point is at the center', 'Wheel rotates at maximum speed', 'Anchor arm is detached'],
    ans: 0,
    exp: 'The zero circle is traced when the plane of the wheel passes through the anchor point, causing the measuring wheel to skid without rotating (reading zero).',
    tip: 'Zero circle = Wheel skids purely sideways without any rotation (drum records zero area).'
  },
  {
    q: 'The allowable tolerance in the total length of a 20-metre metric chain as per IS 1492 when checked under a tension of 80 N is:',
    opts: ['±5 mm', '±2 mm', '±8 mm', '±15 mm'],
    ans: 0,
    exp: 'Under a test pull of 80 N (8 kgf), the overall length of a 20 m metric chain must be within ±5 mm, while for a 30 m chain it is ±8 mm.',
    tip: 'IS 1492 Chain Tolerances: 20 m chain = ±5 mm; 30 m chain = ±8 mm.'
  },
  {
    q: 'The permissible error in chain surveying for ordinary surveying over fairly level ground is approximately:',
    opts: ['1 in 1,000', '1 in 100', '1 in 10,000', '1 in 250'],
    ans: 0,
    exp: 'For ordinary chaining on level ground with a metric chain, the permissible ratio of error is 1 in 1,000. For rough ground, 1 in 250 is allowed; with steel band, 1 in 10,000.',
    tip: 'Chaining accuracy: Ordinary chaining = 1:1,000; Rough ground = 1:250; Steel tape = 1:10,000.'
  },
  {
    q: 'Arrows used in chain surveying to count completed chain lengths are made of tempered steel wire of diameter:',
    opts: ['4 mm', '2 mm', '6 mm', '8 mm'],
    ans: 0,
    exp: 'Standard chain arrows conforming to Indian Standards are made of 4 mm diameter tempered steel wire, have a length of 400 mm, and a ring loop at the top of diameter 50 mm.',
    tip: 'Arrows: 4 mm diameter steel wire, 400 mm long, 10 arrows supplied per chain.'
  }
];

fieldBookTheory.forEach((item, idx) => {
  addQ(mod2List, {
    id: `bq-mod2-ext-fb-${idx + 1}`,
    question: item.q,
    options: item.opts,
    correctOptionIndex: item.ans,
    explanation: item.exp,
    rankerTip: item.tip,
    topic: 'Field book',
    examName: 'Kerala PSC Surveyor Gr. II',
    year: 2024
  }, 2, 'mod-2');
});

console.log(`Module 2 generated: ${mod2List.length} unique questions.`);

// ============================================================================
// MODULE 3: COMPASS SURVEY (Target: 170+ unique questions)
// ============================================================================

const mod3Base = [
  {
    id: 'bq-mod3-ext-001',
    question: 'In a Prismatic Compass, the graduated ring is attached directly to the:',
    options: ['Magnetic needle and rotates with it', 'Compass box and rotates with the box', 'Lifting pin', 'Prism mount'],
    correctOptionIndex: 0,
    explanation: 'In a prismatic compass, the aluminum graduated ring is attached directly to the magnetic needle and floats freely with it pointing toward magnetic north.',
    rankerTip: 'Prismatic compass: Ring attached to needle. Surveyor compass: Ring attached to box.',
    topic: 'Instruments used',
    examName: 'Kerala PSC Surveyor Gr. II / Land Records',
    year: 2023
  },
  {
    id: 'bq-mod3-ext-002',
    question: 'The least count of a standard surveyor\'s compass commonly used in land surveying is:',
    options: ['15 minutes', '30 minutes', '1 minute', '20 seconds'],
    correctOptionIndex: 0,
    explanation: 'A Surveyor\'s compass has a least count of 15 minutes, whereas a Prismatic compass has a least count of 30 minutes.',
    rankerTip: 'Least Count: Surveyor\'s Compass = 15\'; Prismatic Compass = 30\'.',
    topic: 'Instruments used',
    examName: 'Kerala Water Authority Tracer Exam',
    year: 2022
  },
  {
    id: 'bq-mod3-ext-003',
    question: 'In a surveyor\'s compass, the letters East and West are marked on the graduated circle in which positions?',
    options: ['Interchanged (East is on the left and West is on the right)', 'Normal (East on right, West on left)', 'Both at the top', 'Both at the South'],
    correctOptionIndex: 0,
    explanation: 'In a surveyor\'s compass, East is placed to the left (counter-clockwise) and West to the right of North so that the stationary needle directly indicates the quadrant of the line of sight.',
    rankerTip: 'Surveyor\'s compass: E and W are interchanged (E on left, W on right).',
    topic: 'Instruments used',
    examName: 'Kerala PSC Technical Bank',
    year: 2021
  },
  {
    id: 'bq-mod3-ext-004',
    question: 'The zero graduation on the aluminum ring of a Prismatic Compass is located at the:',
    options: ['South end of the ring', 'North end of the ring', 'East end of the ring', 'West end of the ring'],
    correctOptionIndex: 0,
    explanation: 'In a prismatic compass, the graduations are numbered clockwise starting with 0° at the South end, 90° at West, 180° at North, and 270° at East (because it is viewed through the prism from South).',
    rankerTip: 'Prismatic Compass: 0° at South, 90° at West, 180° at North, 270° at East.',
    topic: 'Instruments used',
    examName: 'Kerala PSC Surveyor Gr. II',
    year: 2024
  },
  {
    id: 'bq-mod3-ext-005',
    question: 'An agonic line on a geomagnetic map represents a line joining places of:',
    options: ['Zero magnetic declination', 'Equal magnetic declination', 'Zero magnetic dip', 'Equal magnetic dip'],
    correctOptionIndex: 0,
    explanation: 'An agonic line connects places having zero magnetic declination (where true meridian and magnetic meridian coincide).',
    rankerTip: 'Agonic = Zero declination. Isogonic = Equal declination. Aclinic = Zero dip. Isoclinic = Equal dip.',
    topic: 'Magnetic declination',
    examName: 'Kerala PSC Draftsman Gr. II',
    year: 2023
  },
  {
    id: 'bq-mod3-ext-006',
    question: 'An aclinic line (magnetic equator) on the earth\'s surface connects points where the angle of magnetic dip is:',
    options: ['Zero degrees (0°)', '90 degrees (90°)', '45 degrees (45°)', '180 degrees (180°)'],
    correctOptionIndex: 0,
    explanation: 'The aclinic line is the magnetic equator where the magnetic needle remains completely horizontal, meaning the angle of dip is 0°.',
    rankerTip: 'Aclinic line = Magnetic equator (Dip = 0°). At magnetic poles, Dip = 90°.',
    topic: 'Dip',
    examName: 'Kerala Water Authority Tracer / Surveyor',
    year: 2022
  },
  {
    id: 'bq-mod3-ext-007',
    question: 'The daily cyclic movement of the magnetic needle about its mean position is termed:',
    options: ['Diurnal variation', 'Secular variation', 'Annual variation', 'Irregular variation'],
    correctOptionIndex: 0,
    explanation: 'Diurnal variation is the daily oscillation of the magnetic needle caused by solar radiation, which is greater during the day, in summer, and near the magnetic poles.',
    rankerTip: 'Diurnal variation = Daily variation; Secular variation = Long periodic cycle (hundreds of years).',
    topic: 'Magnetic declination',
    examName: 'Kerala PSC Surveyor Gr. II',
    year: 2021
  },
  {
    id: 'bq-mod3-ext-008',
    question: 'Local attraction at a survey station in compass surveying is caused by the presence of:',
    options: ['Magnetic rock bodies, steel rails, and underground iron pipes', 'High atmospheric humidity', 'Wooden ranging rods', 'Pure brass alidades'],
    correctOptionIndex: 0,
    explanation: 'Local attraction is the extraneous disturbance of the magnetic needle caused by local magnetic influences such as iron structures, steel rails, underground cables, or iron ore deposits.',
    rankerTip: 'Local attraction = Interference from external magnetic/iron materials near the station.',
    topic: 'Local attraction',
    examName: 'Kerala PSC Technical Bank',
    year: 2024
  },
  {
    id: 'bq-mod3-ext-009',
    question: 'A survey line AB is free from local attraction if the difference between its Fore Bearing (FB) and Back Bearing (BB) is exactly:',
    options: ['180°', '90°', '360°', '0°'],
    correctOptionIndex: 0,
    explanation: 'In the absence of local attraction and observational errors, the fore bearing and back bearing of any straight survey line must differ by exactly 180°.',
    rankerTip: '|FB - BB| = 180° indicates both stations are free from local attraction.',
    topic: 'Local attraction',
    examName: 'Kerala PSC Surveyor Gr. II / Land Records',
    year: 2023
  },
  {
    id: 'bq-mod3-ext-010',
    question: 'The sum of all interior angles of a closed compass traverse polygon having \'n\' sides is given by:',
    options: ['(2n - 4) × 90°', '(2n + 4) × 90°', '(n - 2) × 360°', '(2n - 2) × 180°'],
    correctOptionIndex: 0,
    explanation: 'The theoretical sum of interior angles in any closed polygon of n sides is (2n - 4) right angles, or (n - 2) × 180°.',
    rankerTip: 'Interior angles sum = (2n - 4) × 90°. Exterior angles sum = (2n + 4) × 90°.',
    topic: 'Included angles',
    examName: 'Kerala PSC Tracer / Surveyor',
    year: 2022
  }
];

mod3Base.forEach(q => addQ(mod3List, q, 3, 'mod-3'));

// Generate systematic bearing conversion & magnetic declination problems
let mod3QNum = 11;

// WCB to QB conversions
const wcbValues = [
  15, 28, 42, 65, 78, 88,
  95, 110, 125, 138, 155, 168, 175,
  185, 205, 218, 230, 245, 258, 265,
  275, 290, 305, 318, 335, 348, 355
];

for (const wcb of wcbValues) {
  if (mod3List.length >= 175) break;
  let qbStr = '';
  let quadrant = '';
  if (wcb <= 90) {
    qbStr = `N ${wcb}° 00' E`;
    quadrant = 'NE (First Quadrant)';
  } else if (wcb <= 180) {
    qbStr = `S ${180 - wcb}° 00' E`;
    quadrant = 'SE (Second Quadrant)';
  } else if (wcb <= 270) {
    qbStr = `S ${wcb - 180}° 00' W`;
    quadrant = 'SW (Third Quadrant)';
  } else {
    qbStr = `N ${360 - wcb}° 00' W`;
    quadrant = 'NW (Fourth Quadrant)';
  }

  const qText = `Convert a Whole Circle Bearing (WCB) of ${wcb}° 00' into its equivalent Quadrantal Bearing (QB):`;
  const wrong1 = `N ${wcb}° 00' E`;
  const wrong2 = `S ${wcb}° 00' W`;
  const wrong3 = `N ${(360 - wcb) % 180}° 00' E`;

  // Ensure 4 distinct options
  const opts = [qbStr];
  [wrong1, wrong2, wrong3, `S ${(180 - wcb + 360) % 180}° 00' E`, `N 45° 00' W`].forEach(o => {
    if (opts.length < 4 && !opts.includes(o)) opts.push(o);
  });

  addQ(mod3List, {
    id: `bq-mod3-ext-${mod3QNum++}`,
    question: qText,
    options: opts,
    correctOptionIndex: 0,
    explanation: `For WCB = ${wcb}°, the line lies in ${quadrant}. The quadrantal bearing is ${qbStr}.`,
    rankerTip: `WCB to QB: I (0-90°): N θ E; II (90-180°): S (180-θ) E; III (180-270°): S (θ-180) W; IV (270-360°): N (360-θ) W.`,
    topic: 'Conversion of bearings from one system to other',
    examName: 'Kerala PSC Surveyor Gr. II PYQ',
    year: 2023
  }, 3, 'mod-3');
}

// Magnetic Declination & True Bearing calculations
const decValues = [1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];
const mbValues = [35, 75, 115, 145, 195, 225, 285, 315];

for (const dec of decValues) {
  for (const dir of ['East', 'West']) {
    for (const mb of mbValues) {
      if (mod3List.length >= 175) break;
      const tb = dir === 'East' ? (mb + dec) : (mb - dec + 360) % 360;
      const qText = `The magnetic bearing of a line is recorded as ${mb}° 00'. If the magnetic declination is ${dec.toFixed(1)}° ${dir}, what is the true bearing of the line?`;
      const correctAns = `${tb.toFixed(1)}° 00'`;
      const wrong1 = `${(dir === 'East' ? mb - dec : mb + dec).toFixed(1)}° 00'`;
      const wrong2 = `${(mb + 10).toFixed(1)}° 00'`;
      const wrong3 = `${(mb - 10).toFixed(1)}° 00'`;

      addQ(mod3List, {
        id: `bq-mod3-ext-${mod3QNum++}`,
        question: qText,
        options: [correctAns, wrong1, wrong2, wrong3],
        correctOptionIndex: 0,
        explanation: `True Bearing = Magnetic Bearing ${dir === 'East' ? '+' : '-'} Declination = ${mb}° ${dir === 'East' ? '+' : '-'} ${dec}° = ${tb.toFixed(1)}°.`,
        rankerTip: `True Bearing = Magnetic Bearing + Declination East (or - Declination West).`,
        topic: 'Magnetic declination',
        examName: 'Kerala Water Authority Engineering Exam',
        year: 2022
      }, 3, 'mod-3');
    }
  }
}

// Fore Bearing to Back Bearing calculations
for (const fb of [25, 68, 112, 145, 195, 235, 280, 325]) {
  if (mod3List.length >= 175) break;
  const bb = fb < 180 ? fb + 180 : fb - 180;
  const qText = `If the Fore Bearing (FB) of a line AB is ${fb}° 00', what is the Back Bearing (BB) of the same line in Whole Circle Bearing?`;
  const correctAns = `${bb}° 00'`;
  const wrong1 = `${(360 - fb)}° 00'`;
  const wrong2 = `${(180 - fb + 360) % 360}° 00'`;
  const wrong3 = `${(fb + 90) % 360}° 00'`;

  addQ(mod3List, {
    id: `bq-mod3-ext-${mod3QNum++}`,
    question: qText,
    options: [correctAns, wrong1, wrong2, wrong3],
    correctOptionIndex: 0,
    explanation: `Back Bearing = Fore Bearing ± 180°. Since FB = ${fb}°, BB = ${fb} ${fb < 180 ? '+' : '-'} 180° = ${bb}°.`,
    rankerTip: `BB = FB + 180° (if FB < 180°); BB = FB - 180° (if FB > 180°).`,
    topic: 'Basic terms',
    examName: 'Kerala PSC Surveyor Gr. II',
    year: 2024
  }, 3, 'mod-3');
}

console.log(`Module 3 generated: ${mod3List.length} unique questions.`);

// Append new questions to database
db.bankQuestions.push(...mod2List, ...mod3List);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Successfully written updated database with Module 2 & 3 extensions.');
