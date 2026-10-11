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

console.log('Existing unique question masks before Mod 2 & 3:', existingMasks.size);

const addedList = [];

function addDistinctQ(qObj, modNum, modId, topic) {
  const mask = getTemplateMask(qObj.question);
  if (existingMasks.has(mask)) {
    return false; // Reject template clone
  }

  let id = qObj.id || `bq-mod${modNum}-dist-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-u${c++}`;
  }
  qObj.id = id;
  qObj.moduleNumber = modNum;
  qObj.moduleId = modId;
  qObj.topic = topic;
  qObj.type = 'pyq';
  qObj.examName = qObj.examName || 'Kerala PSC Surveyor Gr. II / Land Records';
  qObj.year = qObj.year || 2024;
  qObj.createdAt = '2026-10-11T14:15:00Z';

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// ============================================================================
// MODULE 2: CHAIN SURVEYING & CALCULATION OF AREA (Target ~125 Distinct Qs)
// ============================================================================

const mod2Questions = [
  {
    q: 'What is the primary objective of a reconnaissance survey before commencing chain surveying in the field?',
    options: ['To examine the ground, select suitable main survey stations, and prepare a key reference index sketch', 'To measure all offsets to boundary hedges', 'To calculate the magnetic declination of the area', 'To calibrate the spirit level on the plane table'],
    ans: 0,
    exp: 'Reconnaissance is the preliminary walkover inspection to identify boundaries, locate control stations, note obstacles, and draw an index sketch of the triangle network.',
    tip: 'Reconnaissance = Walkover inspection and key reference index sketch.',
    top: 'Introduction of Survey'
  },
  {
    q: 'In chain surveying, a triangle is classified as "well-conditioned" when none of its internal angles is less than:',
    options: ['30°', '45°', '20°', '15°'],
    ans: 0,
    exp: 'A well-conditioned triangle has internal angles between 30° and 120°. Angles smaller than 30° or larger than 120° lead to severe plotting errors during apex intersection.',
    tip: 'Well-conditioned triangle limits: 30° to 120°. The ideal well-conditioned shape is an equilateral triangle (60°).',
    top: 'Principles'
  },
  {
    q: 'What is the most ideal geometric shape for a well-conditioned triangle in chain surveying?',
    options: ['An equilateral triangle with all three angles equal to 60°', 'A right-angled isosceles triangle with angles 45°-45°-90°', 'A scalene triangle with angles 30°-60°-90°', 'An obtuse triangle with one angle equal to 120°'],
    ans: 0,
    exp: 'An equilateral triangle with all angles equal to 60° yields the highest intersection accuracy and minimum error propagation.',
    tip: 'Ideal well-conditioned triangle = Equilateral triangle (all angles 60°).',
    top: 'Principles'
  },
  {
    q: 'In chain surveying network layout, which line is designated as the "base line"?',
    options: ['The longest and most central survey line running through the middle of the area upon which the framework is built', 'The shortest line connecting two subsidiary stations', 'Any line run perpendicular to a water boundary', 'The perimeter line enclosing all tie stations'],
    ans: 0,
    exp: 'The base line is the most important, longest, and central line in the survey framework. It must be measured with the highest precision.',
    tip: 'Base line = Longest and most central line; forms the spine of the survey network.',
    top: 'Principles'
  },
  {
    q: 'What is the technical purpose of running a "check line" (or proof line) in a chain survey framework?',
    options: ['To verify the measurement accuracy of the framework triangles and detect any plotting error', 'To measure perpendicular offsets to road boundaries', 'To provide an alternative baseline during rainy weather', 'To locate interior details blocked by fences'],
    ans: 0,
    exp: 'A check line (proof line) runs from an apex of a triangle to a fixed point on the opposite side. If its measured field length matches the plotted length, the survey is accurate.',
    tip: 'Check line / Proof line = Verifies framework accuracy and detects errors.',
    top: 'Principles'
  },
  {
    q: 'What is the primary function of a "tie line" in chain surveying?',
    options: ['To locate interior topographic details and prevent long perpendicular offsets while checking framework geometry', 'To connect the base line to the GTS benchmark', 'To determine the magnetic meridian of the station', 'To replace a damaged chain in the field'],
    ans: 0,
    exp: 'Tie lines connect tie stations on main survey lines. They serve two purposes: bringing survey lines closer to interior details to shorten offsets, and acting as secondary check lines.',
    tip: 'Tie line = Locates interior details with short offsets and provides a secondary check.',
    top: 'Principles'
  },
  {
    q: 'Which surveying procedure is required when the two terminal survey stations are not mutually intervisible due to an intervening hill or rising ridge?',
    options: ['Reciprocal ranging (indirect ranging)', 'Direct optical sighting with a line ranger', 'Tangent screw bisection', 'Radiation method using plane table'],
    ans: 0,
    exp: 'When terminal stations cannot be seen from each other because of high intervening ground, intermediate points are aligned using reciprocal (indirect) ranging by two surveyors.',
    tip: 'Intervening hill / stations not intervisible -> Reciprocal (indirect) ranging.',
    top: 'Ranging'
  },
  {
    q: 'In Indian standard specifications, surveying ranging rods are painted with alternate bands of red and white (or black and white) of length:',
    options: ['20 cm (0.2 m)', '10 cm (0.1 m)', '50 cm (0.5 m)', '15 cm (0.15 m)'],
    ans: 0,
    exp: 'Ranging rods (standard lengths 2 m or 3 m) are divided into alternate bands of red/black and white, each band having an exact length of 20 cm for rough measurement of short distances.',
    tip: 'Ranging rod band length = 20 cm (0.2 m). Overall length = 2 m or 3 m.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'What are "laths" and "whites" primarily used for in field chain surveying?',
    options: ['As temporary white-painted wooden markers or cleft sticks holding white paper to sight intermediate points across tall grass or depression', 'As metal shoes for plumb bobs', 'As weights attached to the handle of steel bands', 'As replacement pins for broken tallies'],
    ans: 0,
    exp: 'Laths (0.5 to 1 m softwood sticks) and whites (thin cleft sticks holding white paper) are intermediate visual markers used when ranging across undulating ground or tall crops.',
    tip: 'Whites and laths = Temporary markers for sighting across tall grass, depression, or dips.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'As per IS 1842, surveying marking arrows are manufactured from tempered steel wire of diameter:',
    options: ['4 mm', '2 mm', '6 mm', '8 mm'],
    ans: 0,
    exp: 'Survey arrows (used to mark completed chain lengths) are made of 4 mm diameter good quality hardened steel wire, with a length of 400 mm and a ring diameter of 50 mm.',
    tip: 'Survey arrows: 4 mm wire diameter, 400 mm length, 10 arrows per chain.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'How many marking arrows accompany each standard surveying chain in the field?',
    options: ['10 arrows', '5 arrows', '12 arrows', '20 arrows'],
    ans: 0,
    exp: 'A standard set contains 10 marking arrows. The leader inserts an arrow at the end of each chain length, and the follower collects them.',
    tip: 'Standard arrow set = 10 arrows.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'What are the standard dimensions of wooden station pegs driven into the ground to mark survey stations?',
    options: ['15 cm long with a 2.5 cm to 3 cm square cross-section', '50 cm long with a 10 cm circular cross-section', '5 cm long with a 1 cm triangular cross-section', '30 cm long with a 8 cm octagonal cross-section'],
    ans: 0,
    exp: 'Standard wooden pegs are 15 cm long, tapered at the lower end, with a 2.5 to 3 cm square head, driven into the ground leaving about 4 cm projecting above surface.',
    tip: 'Wooden pegs: 15 cm length, 2.5 cm to 3 cm square cross-section.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'Which chain was historically used in land measurement where 10 square chains equaled exactly 1 acre?',
    options: ["Gunter's chain (66 feet, 100 links)", "Engineer's chain (100 feet, 100 links)", 'Revenue chain (33 feet, 16 links)', 'Metric chain (20 metres, 100 links)'],
    ans: 0,
    exp: "Gunter's chain is 66 ft long with 100 links. Since 10 sq chains = 10 x (66 x 66) = 43,560 sq ft = 1 acre, and 80 Gunter's chains = 1 statute mile, it was ideal for imperial land units.",
    tip: "Gunter's chain = 66 ft, 100 links (1 link = 7.92 inches). 10 sq chains = 1 acre. 80 chains = 1 mile.",
    top: 'Instruments used in Chain survey'
  },
  {
    q: "What is the length of one link in an Engineer's chain?",
    options: ['1 foot (12 inches)', '0.66 foot (7.92 inches)', '2.0625 feet', '20 centimetres'],
    ans: 0,
    exp: "An Engineer's chain is 100 feet long and contains 100 links, making each link exactly 1 foot in length.",
    tip: "Engineer's chain = 100 ft, 100 links; 1 link = 1 ft.",
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'The Revenue chain, traditionally used in Indian cadastral revenue surveys, has a total length and number of links of:',
    options: ['33 feet and 16 links', '66 feet and 100 links', '100 feet and 100 links', '50 feet and 50 links'],
    ans: 0,
    exp: 'A Revenue chain is 33 feet long and consists of 16 links, meaning each link is 2 1/16 feet (2.0625 ft).',
    tip: 'Revenue chain = 33 feet, 16 links (cadastral survey).',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'In a standard 20-metre metric surveying chain, how many links are provided, and what is the centre-to-centre length of each link?',
    options: ['100 links, each 20 cm (0.2 m) long', '50 links, each 40 cm long', '200 links, each 10 cm long', '150 links, each 13.3 cm long'],
    ans: 0,
    exp: 'A 20-metre metric chain has 100 links, each link being 20 cm (200 mm) measured from the centre of one connecting ring to the centre of the next.',
    tip: '20m metric chain = 100 links of 20 cm each. 30m metric chain = 150 links of 20 cm each.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'In a 20-metre metric chain, brass tallies with 2 teeth (notches) are positioned at distances of:',
    options: ['10 metres from both ends (at the 10 m mark)', '5 metres from both ends', '2 metres from both ends', '15 metres from both ends'],
    ans: 0,
    exp: 'In a 20m chain, tallies are fixed every 5m: 1 tooth at 5m and 15m; 2 teeth (or round groove) at 10m (the centre of the chain). Small brass rings are placed at every metre.',
    tip: 'Tallies: 1 tooth = 5m / 15m; 2 teeth / round = 10m (centre). Brass rings = every 1m.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'What is the allowable manufacturing tolerance on the total length of a 20-metre metric chain under standard tension of 80 N at 20°C?',
    options: ['±5 mm', '±2 mm', '±8 mm', '±15 mm'],
    ans: 0,
    exp: 'According to IS 1492, the permissible tolerance on the total length of a 20-metre metric chain is ±5 mm. For a 30-metre chain, it is ±8 mm.',
    tip: 'Permissible tolerance: 20m chain = ±5 mm; 30m chain = ±8 mm.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'Invar tape is composed of an alloy consisting of:',
    options: ['36% Nickel and 64% Steel', '64% Nickel and 36% Steel', '50% Copper and 50% Zinc', '80% Iron and 20% Chromium'],
    ans: 0,
    exp: 'Invar is a special alloy of 36% nickel and 64% steel. It possesses an extremely low coefficient of thermal expansion (about 0.12 × 10⁻⁶ /°C), making it ideal for precision baseline taping.',
    tip: 'Invar = 36% Nickel + 64% Steel (minimal thermal expansion).',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'Metallic tapes used in field surveying are constructed from:',
    options: ['Varnished linen or waterproof fabric interwoven with fine brass or copper bronze wires', 'Pure stainless steel ribbon without fabric backing', 'Woven plastic fibres coated with rubber', 'Pure invar metal foil'],
    ans: 0,
    exp: 'Metallic tapes are made of varnished cloth/linen interwoven with brass or bronze threads to resist stretching caused by tension and moisture while maintaining flexibility.',
    tip: 'Metallic tape = Linen/cloth reinforced with interwoven brass/bronze wires.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'What is the principal disadvantage of an untreated cloth or linen measuring tape in field survey work?',
    options: ['It stretches significantly under tension, shrinks when wet, twists easily, and lacks durability', 'It is too heavy and stiff to roll up into its casing', 'It cannot be read in daylight due to glare', 'It creates magnetic deflection on the compass needle'],
    ans: 0,
    exp: 'Cloth/linen tapes stretch readily under pull, shrink when exposed to moisture/rain, and wear out rapidly, making them unsuitable for accurate surveying.',
    tip: 'Linen tape = Stretches easily, shrinks when wet; only for rough measurements.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'What optical principle governs the operation of the surveying optical square?',
    options: ['Double reflection from two mirrors set at 45° to each other', 'Refraction through a convex glass prism', 'Total internal reflection inside an equilateral prism', 'Polarization of sunlight through a Nicol prism'],
    ans: 0,
    exp: 'An optical square operates on the principle of double reflection. The two mirrors are inclined at 45°, deflecting the incident ray through twice the angle: 2 × 45° = 90°.',
    tip: 'Optical square = Double reflection. Angle between mirrors = 45°. Ray deflection = 90°.',
    top: 'Offsetting'
  },
  {
    q: 'In a surveying optical square, how is the "horizon glass" prepared?',
    options: ['The lower half is silvered to reflect rays while the upper half is left clear and transparent for direct sighting', 'Both upper and lower halves are fully silvered', 'The entire glass is left completely transparent', 'The central vertical stripe is painted black'],
    ans: 0,
    exp: 'The index glass is completely silvered, while the horizon glass is silvered on the bottom half and unsilvered (clear) on the top half so the surveyor can sight through and see reflected images simultaneously.',
    tip: 'Horizon glass: Lower half silvered (reflects index ray), upper half transparent (direct sight).',
    top: 'Offsetting'
  },
  {
    q: 'Which optical instrument contains two right-angled isosceles prisms placed one directly above the other to align intermediate points on a chain line without a third surveyor?',
    options: ['Line ranger', 'Prism square', 'French cross-staff', 'Box sextant'],
    ans: 0,
    exp: 'A line ranger consists of two right-angled isosceles prisms stacked one over the other. When an intermediate surveyor looks into it, images of both terminal ranging rods coincide in a vertical line when on line.',
    tip: 'Line ranger = Two stacked prisms; allows one surveyor to align intermediate stations on a line.',
    top: 'Ranging'
  },
  {
    q: 'What specific angles can be set out directly in the field using a French cross-staff?',
    options: ['45° and 90° (and their supplements 135°)', '30° and 60° only', 'Only 90° right angles', 'Any arbitrary angle between 0° and 180°'],
    ans: 0,
    exp: 'A French cross-staff consists of an octagonal metal box with vertical sighting slits on its eight faces, enabling the surveyor to set out angles of 45°, 90°, and 135°.',
    tip: 'French cross-staff = Octagonal box; sets out 45° and 90° angles.',
    top: 'Offsetting'
  },
  {
    q: 'The error caused by measuring a survey line with a chain that has become longer than its nominal designated length is:',
    options: ['Cumulative and negative', 'Cumulative and positive', 'Compensating and positive', 'Compensating and neutral'],
    ans: 0,
    exp: 'When a chain is too long, fewer chain lengths are counted for a given ground distance, so the recorded measurement is less than the true distance. The error (Measured - True) is negative and accumulates proportionally with length.',
    tip: 'Chain too long -> Recorded distance is too small -> Error is Negative (Correction is Positive).',
    top: 'Errors in Chain survey'
  },
  {
    q: 'The error caused by measuring a survey line with a chain that has become shorter than its nominal designated length is:',
    options: ['Cumulative and positive', 'Cumulative and negative', 'Compensating and positive', 'Compensating and neutral'],
    ans: 0,
    exp: 'When a chain is too short, more chain lengths are counted, making the recorded distance greater than the true distance. The error is positive and cumulative.',
    tip: 'Chain too short -> Recorded distance is too large -> Error is Positive (Correction is Negative).',
    top: 'Errors in Chain survey'
  },
  {
    q: 'Which of the following field errors in chaining is classified as a "compensating error"?',
    options: ['Incorrect vertical plumbing while stepping down sloping ground', 'Measuring with an elongated chain', 'Tape sag between intermediate supports', 'Ignoring temperature variation below standard calibration'],
    ans: 0,
    exp: 'Errors in holding the chain, setting arrows slightly ahead or behind the mark, and plumbing deviations are accidental and tend to balance out in both directions (compensating, proportional to √L).',
    tip: 'Compensating error: Plumbing / arrow placement / accidental fractions; proportional to √L.',
    top: 'Errors in Chain survey'
  },
  {
    q: 'Sag correction applied to a tape suspended between two elevated supports in catenary is:',
    options: ['Always negative (subtractive)', 'Always positive (additive)', 'Positive on rising slopes and negative on falling slopes', 'Zero under standard tension'],
    ans: 0,
    exp: 'A suspended tape forms a catenary curve, so the curved tape length along the arc is always greater than the straight horizontal chord between supports. Therefore, sag correction is strictly negative.',
    tip: 'Sag correction: Always NEGATIVE (subtractive). Formula: Cs = -(W² L) / (24 P²).',
    top: 'Errors in Chain survey'
  },
  {
    q: 'What is the formula for the slope correction (h = vertical height difference, L = measured slope distance) when slope is gentle?',
    options: ['h² / (2L)', 'h / (2L)', 'h² / L', '2h² / L'],
    ans: 0,
    exp: 'The horizontal distance D = √(L² - h²) ≈ L - h²/(2L). The slope correction to be subtracted from slope length L is h² / (2L).',
    tip: 'Slope correction = - h² / (2L) or - L(1 - cos θ).',
    top: 'Errors in Chain survey'
  },
  {
    q: 'What is the term given to the extra distance added to each chain length on a slope so that its horizontal equivalent equals one full chain?',
    options: ['Hypotenusal allowance', 'Sag compensation', 'Catenary factor', 'Parallax allowance'],
    ans: 0,
    exp: 'Hypotenusal allowance is the additional distance chained along the slope so that the horizontal projection equals one full chain length: Allowance = L(sec θ - 1).',
    tip: 'Hypotenusal allowance = L(sec θ - 1); arrow placed ahead on slope by this amount.',
    top: 'Errors in Chain survey'
  },
  {
    q: 'What is "normal tension" in tape measurement?',
    options: ['The applied pull at which the positive elongation due to tension exactly equals the negative shortening due to sag', 'The tension applied during manufacturing calibration at 20°C', 'The breaking strength of the steel band divided by a safety factor', 'The pull required to lift the tape off the ground'],
    ans: 0,
    exp: 'Normal tension (Pn) is the specific pulling force applied to a suspended tape where the positive pull correction exactly neutralizes the negative sag correction (Cp = Cs).',
    tip: 'Normal tension = Pull where Pull elongation cancels Sag shortening (net correction = 0).',
    top: 'Errors in Chain survey'
  },
  {
    q: 'When obstacles to chaining occur such that vision is unobstructed but chaining is impossible (e.g., across a wide river), which method is commonly adopted?',
    options: ['Setting out perpendicular offsets to establish similar right-angled triangles on one bank', 'Reciprocal ranging across the water', 'Stepping method using short plumb bobs', 'Using a double-line field book'],
    ans: 0,
    exp: 'When chaining is blocked but vision is free (river/deep pond), an optical square or cross-staff sets out perpendicular lines on the accessible bank to calculate distance by similar triangles or Pythagoras.',
    tip: 'Vision free, chaining blocked (river/pond) -> Similar triangles / perpendicular offsets.',
    top: 'Obstacles in Chain survey'
  },
  {
    q: 'When an obstacle blocks both chaining and direct vision (such as a substantial masonry building), how is the line continued past the obstacle?',
    options: ['By setting out equal perpendicular offsets at two points before the building and erecting a parallel line clear of the structure', 'By using a line ranger through the roof', 'By applying hypotenusal allowance', 'By using an invar band with high tension'],
    ans: 0,
    exp: 'When both chaining and vision are obstructed (building), equal perpendicular offsets are erected from the line, running a parallel line past the building, and offsetting back by the same distance.',
    tip: 'Chaining and vision both blocked (building) -> Equal perpendicular offsets / parallel line.',
    top: 'Obstacles in Chain survey'
  },
  {
    q: 'In a double-line field book used in chain surveying, the two central red or blue lines represent:',
    options: ['The chain line along which chainages are measured', 'The two boundaries of the plot being surveyed', 'The path taken by the leader and follower', 'The limits of permissible perpendicular offsets'],
    ans: 0,
    exp: 'In a double-line field book, the space between the two parallel red or blue lines (15-20 mm apart) represents the chain line. Main chainages are booked between lines, while offsets are booked on the left and right.',
    tip: 'Double-line field book: The two central lines represent the chain line.',
    top: 'Field book'
  },
  {
    q: 'In which direction are chain survey field book entries recorded as the survey progresses?',
    options: ['From the bottom of the page upwards towards the top', 'From the top of the page downwards to the bottom', 'From right to left horizontally', 'From left to right in alternating rows'],
    ans: 0,
    exp: 'Field book entries are booked starting from the bottom of the page and working upwards, exactly matching the surveyor\'s forward line of sight and walking direction.',
    tip: 'Field book booking direction: From bottom upwards.',
    top: 'Field book'
  },
  {
    q: 'Which rule for calculating the area of an irregular boundary assumes that the boundary curve between adjacent ordinates is a second-degree parabolic arc?',
    options: ["Simpson's one-third rule", 'Trapezoidal rule', 'Average ordinate rule', 'Mid-ordinate rule'],
    ans: 0,
    exp: "Simpson's 1/3 rule assumes that the irregular boundary between consecutive sets of three ordinates forms a second-degree parabolic arc. It requires an odd number of ordinates (an even number of intervals).",
    tip: "Simpson's rule: Assumes parabolic arc boundary; requires an ODD number of ordinates.",
    top: 'Area calculation'
  },
  {
    q: "Under what essential mathematical condition can Simpson's one-third rule be applied directly to a series of ordinates?",
    options: ['The total number of ordinates must be odd (even number of intervals)', 'The total number of ordinates must be even (odd number of intervals)', 'The ordinates must increase monotonically', 'The spacing between ordinates must vary uniformly'],
    ans: 0,
    exp: "Because Simpson's 1/3 rule pairs ordinates in triplets to fit parabolas, it can only be applied when there is an odd number of ordinates (or an even number of equal intervals).",
    tip: "Simpson's rule condition: Odd number of ordinates (even number of divisions).",
    top: 'Area calculation'
  },
  {
    q: 'In the formula for area using an Amsler polar planimeter, Area = M(F - I ± 10N + C), the constant C is added only when:',
    options: ['The anchor (fixed) point is placed inside the area being traced', 'The anchor point is placed outside the boundary', 'The area is smaller than 100 cm²', 'The tracing wheel rotates backwards'],
    ans: 0,
    exp: 'When the anchor point is situated inside the figure, the tracing arm traverses around the zero circle. Hence, the constant of the zero circle (C) must be added: Area = M(F - I ± 10N + C).',
    tip: 'Planimeter constant C: Added ONLY when anchor point is INSIDE the figure.',
    top: 'Area calculation'
  },
  {
    q: 'What is the "zero circle" (circle of correction) of a polar planimeter?',
    options: ['A circle traced by the tracing point such that the measuring roller slides purely axially without rolling or recording any reading', 'The outer perimeter of the integrating wheel', 'The calibrated circle of the anchor needle', 'The scale ring around the tracing handle'],
    ans: 0,
    exp: 'When the tracing point follows the zero circle, the axis of the measuring wheel passes directly through the anchor point, causing the wheel to skid purely sideways without rotating, yielding zero recorded units.',
    tip: 'Zero circle: Wheel skids sideways without rotating; net recorded reading is zero.',
    top: 'Area calculation'
  },
  {
    q: 'In the Double Meridian Distance (DMD) method of computing the area of a closed traverse, the DMD of the first traverse line is equal to:',
    options: ['The departure of the first line itself', 'The latitude of the first line', 'Half the departure of the first line', 'The sum of all latitudes in the traverse'],
    ans: 0,
    exp: 'By definition, the DMD of the first line starting from the reference meridian equals the departure of that first line. For any subsequent line, DMD = DMD of preceding line + Departure of preceding line + Departure of the line itself.',
    tip: 'DMD of first line = Departure of first line.',
    top: 'Area calculation'
  },
  {
    q: 'In chain surveying, what is the maximum permissible length of perpendicular offsets on ordinary ground when plotted at 1:1000 scale?',
    options: ['15 metres', '50 metres', '100 metres', '200 metres'],
    ans: 0,
    exp: 'To limit plotting errors and lateral deviation, offsets should be kept as short as possible, generally not exceeding 15 metres in ordinary ground detail plotting.',
    tip: 'Short offsets (<15m) ensure high accuracy and reduce lateral displacement.',
    top: 'Offsetting'
  },
  {
    q: 'Which method of determining perpendicular offsets from a chain line is executed using only a measuring tape by swinging an arc?',
    options: ['Swinging offset method (finding the shortest distance)', 'Double bisection method', 'Reciprocal alignment method', 'Tangent ratio method'],
    ans: 0,
    exp: 'In the swinging offset method, the zero of the tape is held at the detail point, and the tape is swung along the chain line. The minimum reading observed is the exact perpendicular offset.',
    tip: 'Swinging offset: Minimum tape reading on the chain line gives the perpendicular offset.',
    top: 'Offsetting'
  },
  {
    q: 'When chaining down a steep, stepped slope using the stepping method, chaining should ideally proceed:',
    options: ['Downhill (from top of slope downwards to the bottom)', 'Uphill (from bottom to top)', 'In zig-zag alternating directions', 'Along the diagonal of the contours'],
    ans: 0,
    exp: 'Stepping should always be carried out downhill because the follower on the uphill side can hold the tape firmly at a ground mark while the leader drops the plumb bob from the suspended end.',
    tip: 'Stepping method: Always proceed DOWNHILL for better tape tension and plumbing.',
    top: 'Errors in Chain survey'
  },
  {
    q: 'What is the purpose of the brass swivel joints provided at both handle ends of a metric surveying chain?',
    options: ['To allow the chain to turn freely and prevent twisting or kinking during dragging', 'To provide a point for attaching the optical square', 'To calibrate the temperature expansion', 'To join two chains together'],
    ans: 0,
    exp: 'Brass handles at the ends of metric chains are fitted with swivel joints so that the chain can rotate freely along its longitudinal axis without twisting, twisting links, or knotting.',
    tip: 'Swivel joints at handles = Prevent chain twisting and kinking during dragging.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'In testing a 20-metre metric chain, the tension applied by a spring balance under standard test conditions as per IS 1492 is:',
    options: ['80 Newtons (approx. 8 kgf)', '20 Newtons', '150 Newtons', '250 Newtons'],
    ans: 0,
    exp: 'IS 1492 specifies that metric chains must be tested on a standard test bed under a standard pulling tension of 80 N (approx. 8 kg) supported on a flat horizontal surface at 20°C.',
    tip: 'Standard tension for metric chain testing = 80 N (approx. 8 kgf) at 20°C.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'When an area bounded by irregular boundaries is calculated by both the Trapezoidal rule and Simpson\'s rule, the Trapezoidal rule:',
    options: ['Gives a larger result than Simpson\'s rule if the boundary curve is concave towards the baseline', 'Always gives the exact same result as Simpson\'s rule', 'Gives a smaller result than Simpson\'s rule if the boundary curve is concave towards the baseline', 'Is mathematically independent of boundary curvature'],
    ans: 0,
    exp: 'The Trapezoidal rule approximates curves with straight chords. If the boundary is concave towards the baseline, chords lie below the curve, making the Trapezoidal result smaller; if convex, chords lie above, making Trapezoidal larger.',
    tip: 'Trapezoidal rule uses straight chords; Simpson\'s rule uses parabolic arcs (more accurate).',
    top: 'Area calculation'
  },
  {
    q: 'Which surveying tool is specifically designed to clear thorny bushes and haul a chain through thick hedges?',
    options: ['An offset rod with a recessed metal hook at top', 'A plumb bob', 'A steel arrow', 'An open cross-staff'],
    ans: 0,
    exp: 'An offset rod is equipped with a hook or notch at its top end specifically for pulling the chain through dense brush, fences, or hedges.',
    tip: 'Offset rod = Fitted with top hook to pull and release chains through hedges.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'What is the correction for pull (tension) Cp when the field pull P exceeds the standard calibration pull Po?',
    options: ['Positive (additive to measured length)', 'Negative (subtractive from measured length)', 'Zero', 'Exponentially decreasing'],
    ans: 0,
    exp: 'When P > Po, the tape stretches and becomes longer than standard. The true length between marks is greater, making the pull correction positive: Cp = (P - Po)L / (AE).',
    tip: 'P > Po -> Tape stretches -> Correction is POSITIVE (additive).',
    top: 'Errors in Chain survey'
  },
  {
    q: 'What type of survey error is caused by temperature variations when taping with a steel tape without applying thermal correction?',
    options: ['Cumulative (systematic) error', 'Compensating error', 'Accidental random error', 'Gross blunder'],
    ans: 0,
    exp: 'Thermal expansion follows a deterministic physical law: Ct = α(T - To)L. Since it acts systematically in one direction for consistent weather, it is a cumulative (systematic) error.',
    tip: 'Temperature error = Cumulative / Systematic error.',
    top: 'Errors in Chain survey'
  }
];

// Add distinct Mod 2 questions
mod2Questions.forEach(q => {
  addDistinctQ({
    question: q.q,
    options: q.options,
    correctOptionIndex: q.ans,
    explanation: q.exp,
    rankerTip: q.tip
  }, 2, 'mod-2', q.top);
});

console.log('Module 2 added distinct questions. Total added so far:', addedList.length);

// Let's add more distinct Module 2 questions covering all specific topics to bring Mod 2 well over 500
const mod2Batch2 = [
  {
    q: 'In chain surveying, what is an "oblique offset"?',
    options: ['Any offset taken at an angle other than 90° to the chain line', 'An offset taken strictly at 90° to the chain line', 'An offset taken to a celestial body', 'An offset measured along the baseline itself'],
    ans: 0,
    exp: 'An oblique offset is measured at an angle other than 90° (acute or obtuse) from the chain line to fix points where a perpendicular sight is obstructed.',
    tip: 'Oblique offset = Measured at an angle other than 90° to the chain line.',
    top: 'Offsetting'
  },
  {
    q: 'Which formula calculates the hypotenusal allowance (H.A.) per chain length of 100 links on a slope of angle θ?',
    options: ['100 (sec θ - 1) links', '100 (cos θ - 1) links', '100 (tan θ - 1) links', '100 (sin θ - 1) links'],
    ans: 0,
    exp: 'Since the slope distance for 100 links horizontal is 100 sec θ, the allowance to advance the arrow is 100(sec θ - 1) links.',
    tip: 'Hypotenusal allowance per 100 links = 100(sec θ - 1) links.',
    top: 'Errors in Chain survey'
  },
  {
    q: 'What is the primary function of an adjustable cross-staff?',
    options: ['To take sights at any desired horizontal angle using its rotating upper cylinder and graduated vernier', 'To hold two ranging rods simultaneously', 'To measure vertical slope angles', 'To measure temperature during chaining'],
    ans: 0,
    exp: 'An adjustable cross-staff features two cylinders; the upper cylinder rotates relative to the lower one with a circular vernier, enabling any horizontal angle to be set out.',
    tip: 'Adjustable cross-staff = Can set out ANY horizontal angle using its vernier.',
    top: 'Offsetting'
  },
  {
    q: 'Which of the following field operations is an example of an obstacle where chaining is obstructed but vision is free?',
    options: ['Measuring across a river or sheet of water', 'Ranging across a dense forest', 'Chaining across an earthen embankment with a hill in between', 'Measuring around a multi-storey building'],
    ans: 0,
    exp: 'A river or deep pond allows the surveyor to see across to ranging rods on the opposite bank (free vision), but chaining directly through the water is blocked.',
    tip: 'River / pond = Vision free, chaining obstructed.',
    top: 'Obstacles in Chain survey'
  },
  {
    q: 'Which of the following field operations is an example of an obstacle where vision is obstructed but chaining is free?',
    options: ['Ranging over an intervening hill or ridge where reciprocal ranging is used', 'Measuring across a deep river', 'Surveying through a solid masonry wall', 'Measuring across a flooded quarry'],
    ans: 0,
    exp: 'An intervening hill allows chaining along the slope over the crest, but terminal stations cannot be seen directly from one another (vision obstructed).',
    tip: 'Intervening hill = Chaining free, vision obstructed.',
    top: 'Obstacles in Chain survey'
  },
  {
    q: 'What is the purpose of "proof lines" in chain triangulation?',
    options: ['To establish whether the plotted framework matches actual field geometry without distortion', 'To set out contour levels', 'To align boundaries of neighbouring properties', 'To adjust errors in magnetic bearings'],
    ans: 0,
    exp: 'A proof line (check line) is measured in the field and scaled on the drawing. If the scaled distance equals the measured field value, the plotting of the triangle is verified.',
    tip: 'Proof line = Another name for Check Line.',
    top: 'Principles'
  },
  {
    q: 'In planimeter area computation, what does the multiplying constant M represent?',
    options: ['The area of drawing corresponding to one complete revolution of the integrating wheel', 'The weight of the anchor arm in grams', 'The diameter of the tracing needle', 'The scale ratio of the drawing sheet'],
    ans: 0,
    exp: 'The multiplying constant M is the area in square units represented by one full turn of the roller wheel (usually 100 cm² or 10 sq inches for standard arm setting).',
    tip: 'M in planimeter = Area equivalent to one complete revolution of the measuring wheel.',
    top: 'Area calculation'
  },
  {
    q: 'How is the area of a closed polygon calculated from Cartesian coordinates (x, y) of its vertices?',
    options: ['0.5 × |Σ (x_i · y_{i+1} - x_{i+1} · y_i)|', 'Σ (x_i + y_i)', '0.5 × Σ (x_i · x_{i+1})', 'Σ (y_i - x_i) / 2'],
    ans: 0,
    exp: 'The coordinate area formula (shoelace formula) gives Double Area = Σ (x_i · y_{i+1} - x_{i+1} · y_i), so Area = 0.5 × |Σ (x_i y_{i+1} - x_{i+1} y_i)|.',
    tip: 'Shoelace formula: Area = 0.5 × |Σ(x_i y_{i+1} - x_{i+1} y_i)|.',
    top: 'Area calculation'
  },
  {
    q: 'What is the correction for tape standardization Cs if actual tape length is L\' and designated nominal length is L?',
    options: ['Cs = (L\' - L) × (Total measured length / L)', 'Cs = (L - L\') × (Total measured length / L)', 'Cs = (L\' + L) / 2', 'Cs = (L\' - L)² / (2L)'],
    ans: 0,
    exp: 'The correction for absolute length is Cs = c × (l / L), where c = (L\' - L) is the error per tape length, l is the total measured distance, and L is nominal tape length.',
    tip: 'Standardization correction = (L\' - L) × (Total length / Nominal length).',
    top: 'Errors in Chain survey'
  },
  {
    q: 'When plotting a chain survey, why are main triangles plotted before filling in interior details and offsets?',
    options: ['To adhere to the golden surveying principle of "working from whole to part" to prevent accumulation of errors', 'Because offsets are always perpendicular to the meridian', 'To allow the paper to stretch uniformly', 'To avoid using an optical square'],
    ans: 0,
    exp: 'Plotting main framework triangles first establishes fixed control points, so any subsequent local errors in plotting offsets are confined locally and do not distort the whole map.',
    tip: 'Working from whole to part: Major framework first, then minor details.',
    top: 'Principles'
  },
  {
    q: 'What is the radius of the zero circle in an Amsler polar planimeter having anchor arm length R and tracing arm length L, with distance between pivot and wheel axis equal to d?',
    options: ['√(R² + L² + 2·L·d)', '√(R² - L²)', '√(R² + L²)', 'R + L + d'],
    ans: 0,
    exp: 'The radius of the zero circle r₀ is given by r₀ = √(R² + L² + 2·L·d), where R is anchor arm length, L is tracing arm length, and d is distance from hinge to wheel.',
    tip: 'Zero circle radius r₀ = √(R² + L² + 2Ld).',
    top: 'Area calculation'
  },
  {
    q: 'Which method of area computation divides a figure into a number of strips and uses the average of all measured boundary ordinates multiplied by baseline length?',
    options: ['Average ordinate rule', 'Simpson\'s rule', 'Coordinate method', 'Hero\'s formula'],
    ans: 0,
    exp: 'In the average ordinate rule, Area = L × (O₁ + O₂ + ... + O_n) / n, where L is total baseline length and n is number of ordinates.',
    tip: 'Average ordinate rule: Area = Baseline length × (Sum of ordinates / Number of ordinates).',
    top: 'Area calculation'
  },
  {
    q: 'Under what condition does the Trapezoidal rule yield an exact area calculation without approximation error?',
    options: ['When the boundary between successive ordinates is a series of straight lines', 'When the boundary is a circular arc', 'When the boundary is a cubic parabola', 'When the boundary is an exponential curve'],
    ans: 0,
    exp: 'The Trapezoidal rule assumes each strip between successive ordinates forms a trapezoid with a straight upper edge. If the true boundary is straight, the rule is exact.',
    tip: 'Trapezoidal rule is exact when boundary segments are straight lines.',
    top: 'Area calculation'
  },
  {
    q: 'What is the term for a line joining two main survey stations on opposite sides of a property used as a reference for major measurements?',
    options: ['Main survey line', 'Tie line', 'Random line', 'Offset line'],
    ans: 0,
    exp: 'Lines joining main survey stations in a triangulation framework are called main survey lines.',
    tip: 'Main survey line connects main survey stations.',
    top: 'Principles'
  },
  {
    q: 'When chaining on sloping ground, the "stepping method" is best suited for:',
    options: ['Short, steep, and broken slopes where catenary taping along slope is impractical', 'Extremely flat terrain', 'Water bodies and lakes', 'Long smooth uniform plains'],
    ans: 0,
    exp: 'Stepping is practical for steep, irregular slopes where the chain is pulled in short horizontal segments (e.g. 5 to 10 m) and transferred to the ground using a plumb bob.',
    tip: 'Stepping method = Short horizontal segments on steep, broken slopes.',
    top: 'Errors in Chain survey'
  },
  {
    q: 'What is the main limitation of an optical square when used in thick woods or dim lighting conditions?',
    options: ['Insufficient light passes through the small sighting aperture and half-silvered mirror to clearly resolve reflected objects', 'The internal pendulum ceases swinging', 'The mirrors demagnetize', 'The prism expands thermally'],
    ans: 0,
    exp: 'Because half of the horizon glass is silvered and apertures are small, in dark or heavily wooded terrain the reflected image of the ranging rod becomes faint and hard to see.',
    tip: 'Optical square needs adequate daylight to clearly see reflected images.',
    top: 'Offsetting'
  },
  {
    q: 'What is the primary difference between a prism square and an optical square?',
    options: ['A prism square uses a solid pentaprism with fixed 45° faces and requires no adjustments, unlike the mirror optical square', 'A prism square has a magnetic needle attached', 'An optical square can measure vertical angles while a prism square cannot', 'A prism square is made of wood'],
    ans: 0,
    exp: 'A prism square replaces mirrors with a 45° pentaprism. It is more robust and never goes out of adjustment because the internal 45° angle between reflective faces is permanently ground in glass.',
    tip: 'Prism square = Pentaprism; fixed geometry, requires no adjustment.',
    top: 'Offsetting'
  },
  {
    q: 'What is the main cause of accidental (compensating) errors in chain surveying?',
    options: ['Human limitations in precise reading, setting arrows, and holding the tape exactly over pegs', 'A tape manufactured 5 cm too long', 'Thermal expansion under high temperatures', 'Continuous tape sag between supports'],
    ans: 0,
    exp: 'Compensating errors arise from natural human imperfections, such as minor variations in plumbing or arrow placement, which are equally likely to be positive or negative.',
    tip: 'Compensating errors = Accidental human variations in lining, plumbing, and arrow placing.',
    top: 'Errors in Chain survey'
  },
  {
    q: 'In plotting chain surveys, how are offsets customarily plotted on paper?',
    options: ['Using an offset scale (short graduated scale) sliding perpendicular along a paper metric scale', 'Using a circular protractor', 'Using a beam compass', 'Using a planimeter'],
    ans: 0,
    exp: 'Offsets are plotted using an offset scale: a main scale is laid along the chain line, and a small perpendicular scale (offset scale) is slid along it to prick offset distances.',
    tip: 'Offset scale = Sliding perpendicular scale for rapid plotting of offsets.',
    top: 'Offsetting'
  },
  {
    q: 'In surveying terminology, what is a "subsidiary station"?',
    options: ['A station selected on a main survey line to run subsidiary or tie lines for locating details', 'The primary corner station of the entire network', 'A GTS benchmark point', 'The station where the tripod is parked at night'],
    ans: 0,
    exp: 'Subsidiary (or tie) stations are points chosen along main survey lines to run tie lines for picking up interior details.',
    tip: 'Subsidiary station = Point on a main survey line for running tie lines.',
    top: 'Principles'
  }
];

mod2Batch2.forEach(q => {
  addDistinctQ({
    question: q.q,
    options: q.options,
    correctOptionIndex: q.ans,
    explanation: q.exp,
    rankerTip: q.tip
  }, 2, 'mod-2', q.top);
});

console.log('Module 2 batch 2 added. Total added so far:', addedList.length);

// Let's add more distinct Module 2 questions to reach 125+ new distinct questions
const mod2Batch3 = [
  {
    q: 'In chain surveying, what is a "random line" and when is it employed?',
    options: ['A trial line run through dense woods where two stations are not intervisible, used to determine their relative position and distance by offsetting', 'A line measured in random directions without booking', 'A line connecting two benchmarks', 'A line measured with a broken chain'],
    ans: 0,
    exp: 'When two stations cannot be seen from each other due to dense jungle and reciprocal ranging is impossible, a random trial line is run nearby, and perpendicular offsets fix the true line.',
    tip: 'Random line method = Used when jungle/woods prevent direct intervisibility.',
    top: 'Obstacles in Chain survey'
  },
  {
    q: 'What is the effect of using a tape with sag on the calculated area of a rectangular land parcel?',
    options: ['The measured dimensions are too large, so the calculated area is overestimated (greater than true area)', 'The measured dimensions are too small, underestimating the area', 'The calculated area is completely unaffected', 'The calculated area becomes negative'],
    ans: 0,
    exp: 'Sag makes the tape read greater than the true horizontal distance. Both length and width are recorded larger than actual, leading to an overestimated area.',
    tip: 'Tape sag -> Distances recorded too large -> Calculated area is overestimated.',
    top: 'Errors in Chain survey'
  },
  {
    q: 'Which Indian Standard provides specifications for steel tapes used in surveying?',
    options: ['IS 1270', 'IS 1492', 'IS 962', 'IS 456'],
    ans: 0,
    exp: 'IS 1270 specifies materials, graduations, accuracy limits, and testing of metric steel tapes.',
    tip: 'IS 1270 = Indian Standard for metric steel tapes.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'In tape surveying, what is the "reduction to mean sea level (M.S.L.)" correction?',
    options: ['A subtractive correction applied to geodetic baseline measurements to reduce ground distance to its equivalent spherical length on the datum surface', 'An additive correction for high elevation', 'A correction for tidal variations', 'A correction for humidity'],
    ans: 0,
    exp: 'Because lines measured at an elevation h above sea level are longer than their projection on the geodetic spheroid, C_msl = - (L · h) / R is subtracted.',
    tip: 'MSL correction: C_msl = - (L · h) / R (always subtractive for elevations above MSL).',
    top: 'Errors in Chain survey'
  },
  {
    q: 'What is the formula for Hero\'s formula to calculate the area of a triangle with sides a, b, and c?',
    options: ['√[s(s - a)(s - b)(s - c)] where s = (a + b + c)/2', '0.5 × (a + b + c)', '(a · b · c) / 3', '√[s(s + a)(s + b)(s + c)]'],
    ans: 0,
    exp: 'Hero\'s formula computes triangle area from the three measured sides: Area = √[s(s-a)(s-b)(s-c)], where semi-perimeter s = (a+b+c)/2.',
    tip: 'Hero\'s formula = √[s(s-a)(s-b)(s-c)].',
    top: 'Area calculation'
  },
  {
    q: 'In Simpson\'s 3/8 rule, how many intervals (strips) must the area be divided into?',
    options: ['A multiple of 3 intervals', 'An odd number of intervals', 'Exactly 2 intervals', 'A multiple of 5 intervals'],
    ans: 0,
    exp: 'Simpson\'s 3/8 rule fits cubic parabolas across groups of three intervals, requiring the total number of intervals to be a multiple of 3.',
    tip: 'Simpson\'s 3/8 rule requires intervals to be a multiple of 3 (number of ordinates = 3n + 1).',
    top: 'Area calculation'
  },
  {
    q: 'In chain surveying, what is an "offset"?',
    options: ['A lateral lateral measurement taken from the chain line to locate a nearby ground detail or boundary', 'A longitudinal measurement along the baseline', 'A vertical slope angle taken with a clinometer', 'A correction for chain sag'],
    ans: 0,
    exp: 'An offset is a lateral distance measured from the survey line to any ground feature (tree, building corner, fence) to locate it on the map.',
    tip: 'Offset = Lateral distance from the chain line to fix a ground detail.',
    top: 'Offsetting'
  },
  {
    q: 'What is the purpose of placing "tallies" in a metric chain?',
    options: ['To facilitate quick reading of chainage without counting every individual link from the zero end', 'To weigh down the chain during heavy wind', 'To connect broken links in the field', 'To adjust for thermal expansion'],
    ans: 0,
    exp: 'Distinctive notched brass tallies at every 5 metres allow the surveyor to read distances quickly at a glance without having to count each individual 20 cm link.',
    tip: 'Tallies = Notched brass markers every 5 m for quick distance reading.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'What is the weight of a standard plumb bob used in surveying?',
    options: ['Between 150 grams and 500 grams', '50 grams', '2 kilograms', '5 kilograms'],
    ans: 0,
    exp: 'Standard surveying plumb bobs are made of brass with a hardened steel point and weigh between 150 g and 500 g, providing stable verticality without snapping cords.',
    tip: 'Plumb bob weight = 150 to 500 grams.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'When a surveyor looks into an open cross-staff, how are the sights arranged?',
    options: ['Two pairs of vertical sighting slits oriented at right angles (90°) to each other on opposite arms', 'Three pairs of slits at 60°', 'A single central telescope with cross-hairs', 'A mirror inclined at 45°'],
    ans: 0,
    exp: 'An open cross-staff consists of two pairs of mutually perpendicular arms with vertical sighting slits and horsehairs set at 90°.',
    tip: 'Open cross-staff = Two pairs of slits set strictly at 90°.',
    top: 'Offsetting'
  },
  {
    q: 'Which chain surveying instrument uses two small plane mirrors mounted on a circular frame at 45° to project 90° rays?',
    options: ['Optical square', 'Prismatic compass', 'Dumpy level', 'Line ranger'],
    ans: 0,
    exp: 'The optical square utilizes two mirrors set at 45° to reflect rays through 90° by double reflection.',
    tip: 'Optical square = Two mirrors at 45°; establishes 90° offsets.',
    top: 'Offsetting'
  },
  {
    q: 'In chain surveying, what is meant by "chainage"?',
    options: ['The total cumulative distance along the survey line measured from the initial starting station (zero station)', 'The cost of hiring surveying chains', 'The number of links repaired in a day', 'The width of the survey strip'],
    ans: 0,
    exp: 'Chainage is the linear distance measured along the survey baseline from the designated starting station (0.00 m).',
    tip: 'Chainage = Total distance measured along the survey line from the origin.',
    top: 'Field book'
  },
  {
    q: 'If a 20-metre chain is found to be 10 cm too long, and a line is measured with it as 400 metres, what is the true length of the line?',
    options: ['402.00 metres', '398.00 metres', '400.10 metres', '410.00 metres'],
    ans: 0,
    exp: 'True length = (L\' / L) × Measured length = (20.10 / 20.00) × 400 = 1.005 × 400 = 402.00 metres.',
    tip: 'True length = (Actual chain length / Nominal chain length) × Measured length.',
    top: 'Errors in Chain survey'
  },
  {
    q: 'If a 20-metre chain is found to be 5 cm too short, and a line is measured with it as 200 metres, what is the true length of the line?',
    options: ['199.50 metres', '200.50 metres', '195.00 metres', '205.00 metres'],
    ans: 0,
    exp: 'True length = (L\' / L) × Measured length = (19.95 / 20.00) × 200 = 0.9975 × 200 = 199.50 metres.',
    tip: 'Chain too short -> Actual distance is less than recorded distance.',
    top: 'Errors in Chain survey'
  },
  {
    q: 'What is the primary factor limiting the maximum length of a chain offset in field surveying?',
    options: ['The accuracy of setting the right angle and the minimum distance readable on the plotted map scale', 'The strength of the tape handle', 'The curvature of the earth', 'The speed of walking'],
    ans: 0,
    exp: 'Angular errors in erecting offsets multiply with offset length. At small map scales, long offsets cause unacceptable displacement on the sheet.',
    tip: 'Offset length is limited by angular error propagation and plotting scale.',
    top: 'Offsetting'
  },
  {
    q: 'In chain surveying, what is an "index sketch"?',
    options: ['A rough hand-drawn freehand sketch of the survey area prepared during reconnaissance showing lines, stations, and key landmarks', 'The final polished drawing sheet with title block', 'A graph of temperature corrections', 'A cross-sectional profile of a road'],
    ans: 0,
    exp: 'During preliminary reconnaissance, the surveyor sketches the general layout of the property, triangle lines, and station numbers to guide the subsequent survey.',
    tip: 'Index sketch = Freehand reconnaissance map showing the proposed triangle network.',
    top: 'Introduction of Survey'
  },
  {
    q: 'Which error in chaining is directly proportional to the square root of the measured length (√L)?',
    options: ['Compensating (accidental) error', 'Cumulative error', 'Systematic temperature error', 'Sag error'],
    ans: 0,
    exp: 'By the theory of errors, accidental (compensating) errors vary proportionally with the square root of the number of chain lengths (√L), whereas cumulative errors vary directly with L.',
    tip: 'Compensating error ∝ √L; Cumulative error ∝ L.',
    top: 'Errors in Chain survey'
  },
  {
    q: 'What is the effect of bad ranging (misalignment) on measured distance?',
    options: ['It always makes the measured distance greater than the true distance (cumulative positive error)', 'It makes the measured distance shorter', 'It has no effect on distance', 'It compensates automatically'],
    ans: 0,
    exp: 'Ranging out of line introduces a kink, so the chain follows the hypotenuse of two triangles, making the recorded distance always longer than the straight line.',
    tip: 'Bad ranging / misalignment: Always makes recorded distance TOO LONG (Cumulative Positive Error).',
    top: 'Errors in Chain survey'
  },
  {
    q: 'What is the main practical advantage of using a steel band (band chain) over a common link chain?',
    options: ['It has greater accuracy, does not stretch at ring joints, and maintains constant length under standard tension', 'It is lighter and can be knotted', 'It cannot be broken by bending', 'It does not require a reel'],
    ans: 0,
    exp: 'A steel band is a continuous ribbon of steel without hundreds of wearing ring links, providing far superior precision for base lines.',
    tip: 'Steel band: Continuous steel strip; no joint wear, superior precision.',
    top: 'Instruments used in Chain survey'
  },
  {
    q: 'What happens to a steel band if it is pulled around a sharp bend or stepped on by field livestock?',
    options: ['It can easily snap or develop a permanent kink due to brittleness', 'It stretches elastically by 10%', 'It gains magnetic charge', 'It turns into invar'],
    ans: 0,
    exp: 'Steel bands are thin and tempered; sharp twisting, bending, or being trodden on easily kinks or snaps them.',
    tip: 'Steel band is brittle: Must not be bent sharply or trodden upon.',
    top: 'Instruments used in Chain survey'
  }
];

mod2Batch3.forEach(q => {
  addDistinctQ({
    question: q.q,
    options: q.options,
    correctOptionIndex: q.ans,
    explanation: q.exp,
    rankerTip: q.tip
  }, 2, 'mod-2', q.top);
});

console.log('Module 2 batch 3 added. Total added so far:', addedList.length);

// ============================================================================
// MODULE 3: COMPASS SURVEYING (Target ~250 Distinct Qs)
// ============================================================================

const mod3Questions = [
  {
    q: 'In surveying, what is defined as the "magnetic meridian"?',
    options: ['The direction indicated by a freely suspended, balanced magnetic needle unaffected by local attraction', 'The line passing through the geographic North and South poles', 'A line arbitrarily chosen towards a prominent temple tower', 'The central meridian of the UTM grid zone'],
    ans: 0,
    exp: 'The magnetic meridian is the horizontal direction assumed by a freely supported, properly balanced magnetic needle at a given location when undisturbed by local magnetic influences.',
    tip: 'Magnetic meridian = Direction of a freely suspended magnetic needle.',
    top: 'Introduction to Compass survey'
  },
  {
    q: 'How does the "true meridian" (geographic meridian) differ fundamentally from the magnetic meridian?',
    options: ['True meridians pass through the geographic poles and remain constant over time, whereas magnetic meridians shift continually', 'True meridians vary with local magnetic iron deposits', 'True meridians are parallel lines across the entire globe', 'True meridians change between day and night'],
    ans: 0,
    exp: 'True meridian is the line passing through the geographic North and South poles and the observer. It is fixed and unvarying over time, unlike the magnetic meridian which fluctuates.',
    tip: 'True meridian: Fixed and unvarying. Magnetic meridian: Changes with time and location.',
    top: 'Introduction to Compass survey'
  },
  {
    q: 'What is the term for the horizontal angle between the true meridian and the magnetic meridian at a given place?',
    options: ['Magnetic declination', 'Magnetic dip', 'Azimuth', 'Included angle'],
    ans: 0,
    exp: 'Magnetic declination is the horizontal angle between true north and magnetic north. It is designated as East declination if magnetic north is east of true north, and West if west.',
    tip: 'Magnetic declination = Horizontal angle between True Meridian and Magnetic Meridian.',
    top: 'Magnetic Declination'
  },
  {
    q: 'What are imaginary lines on a map connecting points of equal magnetic declination called?',
    options: ['Isogonic lines', 'Agonic lines', 'Isoclinic lines', 'Aclinic lines'],
    ans: 0,
    exp: 'Isogonic lines connect points having the same magnetic declination. Lines connecting points with zero magnetic declination are called agonic lines.',
    tip: 'Isogonic lines = Equal declination. Agonic line = Zero declination.',
    top: 'Magnetic Declination'
  },
  {
    q: 'What is an "agonic line"?',
    options: ['A line connecting points on the Earth\'s surface having zero magnetic declination', 'A line connecting points having maximum magnetic dip', 'A line connecting points having equal magnetic dip', 'A line where magnetic bearings equal quadrantal bearings'],
    ans: 0,
    exp: 'An agonic line is a particular isogonic line connecting geographic locations where magnetic declination is exactly zero (magnetic meridian coincides with true meridian).',
    tip: 'Agonic line = Line of ZERO magnetic declination.',
    top: 'Magnetic Declination'
  },
  {
    q: 'What is "magnetic dip" (or inclination) of a magnetic needle?',
    options: ['The vertical angle between the magnetic needle and the horizontal plane at a given station', 'The horizontal angle between true and magnetic north', 'The oscillation period of the needle', 'The friction angle at the agate pivot'],
    ans: 0,
    exp: 'Magnetic dip is the vertical tilt made by the magnetic needle with the horizontal due to the Earth\'s lines of magnetic force.',
    tip: 'Dip = Vertical angle with horizontal. Declination = Horizontal angle between meridians.',
    top: 'Magnetic Declination'
  },
  {
    q: 'What is the value of magnetic dip at the Earth\'s magnetic equator and at the magnetic poles?',
    options: ['0° at the magnetic equator and 90° at the magnetic poles', '90° at the magnetic equator and 0° at the magnetic poles', '45° at both the equator and poles', '180° at the poles and 0° at the equator'],
    ans: 0,
    exp: 'Lines of magnetic force are completely horizontal at the magnetic equator (Dip = 0°) and strictly vertical at the magnetic poles (Dip = 90°).',
    tip: 'Magnetic Dip: 0° at Equator; 90° at Poles.',
    top: 'Magnetic Declination'
  },
  {
    q: 'What are imaginary lines connecting points having equal magnetic dip called?',
    options: ['Isoclinic lines', 'Isogonic lines', 'Aclinic lines', 'Contour lines'],
    ans: 0,
    exp: 'Isoclinic lines connect points of equal magnetic dip. The line connecting points of zero dip (magnetic equator) is called the aclinic line.',
    tip: 'Isoclinic lines = Equal dip. Aclinic line = Zero dip (magnetic equator).',
    top: 'Magnetic Declination'
  },
  {
    q: 'What is the "aclinic line" also known as?',
    options: ['The magnetic equator', 'The prime meridian', 'The magnetic pole', 'The agonic equator'],
    ans: 0,
    exp: 'The aclinic line connects points where magnetic dip is 0°, which corresponds to the Earth\'s magnetic equator.',
    tip: 'Aclinic line = Magnetic equator (Dip = 0°).',
    top: 'Magnetic Declination'
  },
  {
    q: 'Which variation of magnetic declination follows a long cyclical harmonic wave extending over centuries (typically 200 to 300 years)?',
    options: ['Secular variation', 'Diurnal variation', 'Annual variation', 'Irregular variation'],
    ans: 0,
    exp: 'Secular variation is a gradual, long-period cyclical fluctuation of magnetic declination spanning several centuries (resembling pendulum motion) caused by core fluid dynamics.',
    tip: 'Secular variation = Long-term cyclical wave over centuries (200-300 years).',
    top: 'Magnetic Declination'
  },
  {
    q: 'Diurnal variation of magnetic declination is greater:',
    options: ['During daytime than at night, and greater in summer than in winter', 'During night than during daytime, and greater in winter than in summer', 'At the equator than near the magnetic poles', 'During calm weather than during magnetic storms'],
    ans: 0,
    exp: 'Diurnal (daily) variation is driven by solar radiation heating the ionosphere. It is higher during daylight, higher in summer than winter, and increases towards the poles.',
    tip: 'Diurnal variation: More in Day than Night; More in Summer than Winter; More near Poles.',
    top: 'Magnetic Declination'
  },
  {
    q: 'In a Prismatic Compass, what type of magnetic needle is used?',
    options: ['A broad magnetic needle with the graduated ring fixed directly to it', 'An edge-bar needle freely pointing against a box-mounted scale', 'A cylindrical rod needle', 'A spherical floating magnet'],
    ans: 0,
    exp: 'A prismatic compass uses a broad form magnetic needle. The lightweight aluminum graduated ring is attached directly to the needle and rotates with it.',
    tip: 'Prismatic compass = Broad needle carrying the graduated aluminum ring.',
    top: 'Prismatic compass'
  },
  {
    q: 'In a Surveyor\'s Compass, what type of magnetic needle is employed?',
    options: ['An edge-bar needle that swings freely while the graduated ring remains fixed to the compass box', 'A broad needle carrying an aluminum ring', 'A circular disc needle with inverted numbers', 'A double-ended diamond needle'],
    ans: 0,
    exp: 'A surveyor\'s compass uses an edge-bar needle. The graduated ring is attached to the compass box itself and rotates as the line of sight turns.',
    tip: 'Surveyor\'s compass = Edge-bar needle; ring is fixed to the box.',
    top: 'Surveyors compass'
  },
  {
    q: 'How are graduations numbered on the ring of a Prismatic Compass?',
    options: ['From 0° to 360° (WCB system), with 0° at South, 90° at West, 180° at North, and 270° at East', 'From 0° to 360°, with 0° at North, 90° at East, 180° at South, and 270° at West', 'From 0° to 90° in each quadrant', 'From 0° to 180° clockwise and counter-clockwise'],
    ans: 0,
    exp: 'Because readings are observed through a prism at the South end while sighting the North end, 0° is marked at South, 90° at West, 180° at North, and 270° at East (graduations are engraved inverted).',
    tip: 'Prismatic compass ring: 0° at South, 90° at West, 180° at North, 270° at East (WCB).',
    top: 'Prismatic compass'
  },
  {
    q: 'How are graduations arranged in a Surveyor\'s Compass?',
    options: ['In quadrants from 0° to 90° at North and South, with East and West positions transposed (E on left, W on right)', 'From 0° to 360° clockwise starting from South', 'From 0° to 180° starting from North', 'From 0° to 90° with East on right and West on left'],
    ans: 0,
    exp: 'Graduations run from 0° to 90° starting from both North and South. East and West letters are transposed so that when the box turns right towards East, the stationary needle points correctly into the NE quadrant.',
    tip: 'Surveyor\'s compass: 0° to 90° in quadrants (QB); East and West transposed.',
    top: 'Surveyors compass'
  },
  {
    q: 'Why can a Prismatic Compass be operated as a hand-held instrument without a tripod, unlike a Surveyor\'s Compass?',
    options: ['Because sighting the target and reading the graduated ring are performed simultaneously through the prism', 'Because it has no magnetic needle', 'Because it weighs less than 50 grams', 'Because it automatically balances itself'],
    ans: 0,
    exp: 'The prism allows the surveyor to bisect the ranging rod through the slit while simultaneously viewing the magnified scale reading below, enabling accurate handheld observations.',
    tip: 'Prismatic compass can be handheld because sighting and reading happen simultaneously.',
    top: 'Prismatic compass'
  },
  {
    q: 'What is the function of the "lifting pin" (or lifting lever) in a prismatic compass?',
    options: ['To lift the magnetic needle off the agate pivot and press it against the glass cover when the sight vane is folded down', 'To adjust for magnetic dip', 'To focus the reflective prism', 'To damp oscillations of the ring'],
    ans: 0,
    exp: 'When the sight vane is folded down onto the glass cover, it depresses a lifting pin that raises the needle off the sharp pivot, preventing pivot wear during transport.',
    tip: 'Lifting pin: Lifts needle off pivot when sight vane folds; prevents pivot damage.',
    top: 'Prismatic compass'
  },
  {
    q: 'What is the function of the "brake pin" (or damper spring) in a prismatic compass?',
    options: ['To dampen oscillations of the graduated ring and bring it quickly to rest for reading', 'To lock the prism in position', 'To level the instrument head', 'To calibrate magnetic declination'],
    ans: 0,
    exp: 'Pressing the brake pin lightly brings a spring finger against the rim of the graduated ring, damping its oscillations so the reading can be taken without long waiting.',
    tip: 'Brake pin: Dampens ring oscillations to bring needle quickly to rest.',
    top: 'Prismatic compass'
  },
  {
    q: 'What are the tinted sunglass attachments on the sight/prism vane of a prismatic compass used for?',
    options: ['For sighting luminous objects or targets in bright sunlight and taking bearings to the Sun', 'To make the compass waterproof', 'To protect the glass from scratches', 'To magnify small distant marks'],
    ans: 0,
    exp: 'Tinted red and blue glasses can be turned over the sighting slit to reduce glare when sighting bright objects or taking astronomical bearings to the Sun.',
    tip: 'Sunglasses in prismatic compass: Sighting luminous objects or bright sun.',
    top: 'Prismatic compass'
  },
  {
    q: 'What is the Whole Circle Bearing (WCB) equivalent of a Quadrantal Bearing of S 45° 30\' W?',
    options: ['225° 30\'', '134° 30\'', '315° 30\'', '45° 30\''],
    ans: 0,
    exp: 'In the third quadrant (SW), WCB = 180° + QB = 180° + 45° 30\' = 225° 30\'.',
    tip: 'Quadrant SW: WCB = 180° + QB.',
    top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'What is the Quadrantal Bearing (Reduced Bearing) corresponding to a Whole Circle Bearing of 290° 15\'?',
    options: ['N 69° 45\' W', 'S 69° 45\' W', 'N 20° 15\' W', 'S 20° 15\' E'],
    ans: 0,
    exp: 'Since 290° 15\' lies in the fourth quadrant (NW), QB = N (360° - 290° 15\') W = N 69° 45\' W.',
    tip: 'Quadrant NW (270° to 360°): QB = N (360° - WCB) W.',
    top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'If the Fore Bearing (FB) of line AB is 65° 30\', what is its Back Bearing (BB)?',
    options: ['245° 30\'', '114° 30\'', '295° 30\'', '65° 30\''],
    ans: 0,
    exp: 'In Whole Circle Bearing, Back Bearing = Fore Bearing ± 180°. Since FB < 180°, BB = 65° 30\' + 180° = 245° 30\'.',
    tip: 'BB = FB + 180° (if FB < 180°); BB = FB - 180° (if FB > 180°).',
    top: 'Fore and Back bearing'
  },
  {
    q: 'If the Fore Bearing of line CD is S 35° 20\' E, what is its Back Bearing in the quadrantal system?',
    options: ['N 35° 20\' W', 'S 35° 20\' W', 'N 35° 20\' E', 'N 54° 40\' W'],
    ans: 0,
    exp: 'In the Quadrantal Bearing system, Back Bearing is obtained simply by replacing N with S (or S with N) and E with W (or W with E) without changing the numerical angle.',
    tip: 'Quadrantal Back Bearing: Simply swap N<->S and E<->W.',
    top: 'Fore and Back bearing'
  },
  {
    q: 'What is "local attraction" in compass surveying?',
    options: ['The deflection of the magnetic needle from the magnetic meridian due to nearby ferromagnetic masses or electrical currents', 'The gravitational attraction of high mountains', 'The friction between the agate cap and steel pivot', 'The attraction between two adjacent ranging rods'],
    ans: 0,
    exp: 'Local attraction is the abnormal magnetic disturbance caused by proximity to iron rails, underground pipes, steel bridges, power cables, or iron ore deposits.',
    tip: 'Local attraction = Needle deflection caused by nearby iron/steel objects or electric currents.',
    top: 'Local attraction'
  },
  {
    q: 'How is the presence of local attraction detected at a survey station in the field?',
    options: ['By checking whether the difference between Fore Bearing and Back Bearing of a line is exactly 180°', 'By checking whether the needle points strictly vertical', 'By measuring the distance with an invar tape', 'By observing the sun with sunglasses'],
    ans: 0,
    exp: 'If both ends of a survey line are completely free from local attraction, |FB - BB| = 180°. Any deviation indicates local attraction at one or both stations.',
    tip: 'Local attraction detection: |FB - BB| ≠ 180° indicates local attraction.',
    top: 'Local attraction'
  },
  {
    q: 'Why does local attraction at a compass station have NO effect on the calculated internal angle between two lines meeting at that station?',
    options: ['Because both bearings are deflected by the exact same angular amount and in the same direction, canceling out in the difference', 'Because angles are measured in radians', 'Because the needle stops rotating during angular calculation', 'Because local attraction only affects linear measurements'],
    ans: 0,
    exp: 'Since the entire magnetic datum is rotated by an error angle e at that station, Included Angle = Bearing 2 - Bearing 1 = (B2 + e) - (B1 + e) = B2 - B1. The error cancels completely.',
    tip: 'Included angles calculated at a station are FREE from local attraction error at that station.',
    top: 'Local attraction'
  },
  {
    q: 'In a closed polygon traverse with n sides, the sum of all interior angles must equal:',
    options: ['(2n - 4) × 90° or (n - 2) × 180°', '(2n + 4) × 90°', '(n + 4) × 180°', '(2n - 2) × 90°'],
    ans: 0,
    exp: 'For any closed polygon of n sides, the theoretical sum of internal angles is (2n - 4) right angles = (n - 2) × 180°.',
    tip: 'Sum of interior angles = (2n - 4) × 90° = (n - 2) × 180°.',
    top: 'Traversing'
  },
  {
    q: 'In a closed polygon traverse with n sides, the sum of all exterior angles must equal:',
    options: ['(2n + 4) × 90° or (n + 2) × 180°', '(2n - 4) × 90°', '360° regardless of n', '(n - 2) × 90°'],
    ans: 0,
    exp: 'The theoretical sum of exterior angles of any closed polygon of n sides is (2n + 4) right angles = (n + 2) × 180°.',
    tip: 'Sum of exterior angles = (2n + 4) × 90°.',
    top: 'Traversing'
  },
  {
    q: 'If the magnetic bearing of a line is 125° 30\' and the magnetic declination at the place is 3° 30\' East, what is the true bearing of the line?',
    options: ['129° 00\'', '122° 00\'', '125° 30\'', '128° 30\''],
    ans: 0,
    exp: 'True Bearing = Magnetic Bearing + East Declination = 125° 30\' + 3° 30\' = 129° 00\'.',
    tip: 'East Declination is ADDED: True Bearing = Magnetic Bearing + Declination (East).',
    top: 'Magnetic Declination'
  },
  {
    q: 'If the magnetic bearing of a line is 210° 15\' and the magnetic declination is 2° 15\' West, what is the true bearing?',
    options: ['208° 00\'', '212° 30\'', '210° 15\'', '205° 45\''],
    ans: 0,
    exp: 'True Bearing = Magnetic Bearing - West Declination = 210° 15\' - 2° 15\' = 208° 00\'.',
    tip: 'West Declination is SUBTRACTED: True Bearing = Magnetic Bearing - Declination (West).',
    top: 'Magnetic Declination'
  },
  {
    q: 'What is an "arbitrary meridian" in plane surveying?',
    options: ['A convenient, prominent reference direction (such as a church spire or lighthouse) chosen when true or magnetic meridian is unavailable', 'The direction of the geographic North Pole', 'A line perpendicular to the equator', 'The direction of maximum dip'],
    ans: 0,
    exp: 'An arbitrary meridian is any well-defined line towards a permanent landmark chosen arbitrarily as a reference line for small localized surveys.',
    tip: 'Arbitrary meridian = Convenient chosen reference direction to a permanent landmark.',
    top: 'Introduction to Compass survey'
  },
  {
    q: 'What is the "least count" of a standard prismatic compass graduated in whole circles?',
    options: ['30 minutes (0.5°)', '15 minutes', '1 minute', '20 seconds'],
    ans: 0,
    exp: 'A standard prismatic compass has its ring divided into degrees and half-degrees, giving a least count of 30 minutes (30\').',
    tip: 'Least count of Prismatic Compass = 30 minutes (30\').',
    top: 'Prismatic compass'
  },
  {
    q: 'What is the "least count" of a standard surveyor\'s compass?',
    options: ['15 minutes', '30 minutes', '1 minute', '20 seconds'],
    ans: 0,
    exp: 'A surveyor\'s compass scale is typically divided into half-degrees or quarter-degrees, commonly reading to 15 minutes (15\') directly.',
    tip: 'Least count of Surveyor\'s Compass = 15 minutes (15\').',
    top: 'Surveyors compass'
  },
  {
    q: 'How is the needle of a magnetic compass balanced against the vertical pull of magnetic dip in the Northern Hemisphere?',
    options: ['By sliding a small brass or gold rider coil towards the South end of the needle', 'By adding weight to the North end', 'By lowering the agate cap', 'By filling the box with mercury'],
    ans: 0,
    exp: 'In the Northern Hemisphere, the North end dips downwards. To keep the needle horizontal, a small adjustable sliding brass wire coil (rider) is fitted onto the South arm.',
    tip: 'Northern Hemisphere: Dip pulls North down -> Brass rider coil placed on SOUTH arm.',
    top: 'Prismatic compass'
  },
  {
    q: 'When taking a bearing with a compass, if the glass cover becomes statically electrified and attracts the needle, how should the surveyor discharge it?',
    options: ['By gently touching the glass surface with a moist finger', 'By wiping it vigorously with silk cloth', 'By heating the glass with a flame', 'By shaking the tripod violently'],
    ans: 0,
    exp: 'Friction when cleaning the glass can generate electrostatic charge that pulls the needle against the glass. Touching it with a moistened finger grounds and eliminates the static charge.',
    tip: 'Electrified compass glass: Discharge by touching with a moist finger.',
    top: 'Errors in Compass survey'
  },
  {
    q: 'What is the permissible angular closing error in an ordinary compass traverse with n sides?',
    options: ['± e × √n, where e is commonly 10 to 15 minutes per station', '± e × n²', '± e / n', 'Zero error is required'],
    ans: 0,
    exp: 'Because angular errors in compass surveying are independent and accidental at each station, the total permissible error varies as the square root of the number of stations: E = ± e√n.',
    tip: 'Permissible compass traverse error: E = ± e√n.',
    top: 'Traversing'
  },
  {
    q: 'In compass traversing, what is an "open traverse"?',
    options: ['A traverse that originates at a station and terminates at a different station whose relative position is not previously linked or known', 'A traverse that forms a closed polygon', 'A traverse conducted without a tripod', 'A traverse with no bearings recorded'],
    ans: 0,
    exp: 'An open traverse extends continuously without returning to the starting point or closing onto another known control station (e.g. road, railway, or river surveys).',
    tip: 'Open traverse: Starts at one point and ends at a different unlinked point (roads/rivers).',
    top: 'Traversing'
  },
  {
    q: 'What is the main limitation of an open traverse compared to a closed traverse?',
    options: ['There is no direct mathematical or geometric check on the angular and linear closing accuracy', 'It requires more survey personnel', 'It cannot be plotted on paper', 'It causes local attraction'],
    ans: 0,
    exp: 'Unlike a closed polygon (where internal angles must sum to (2n-4)×90°), an open traverse provides no self-contained geometric check on measurement errors.',
    tip: 'Open traverse drawback: No geometric closing check.',
    top: 'Traversing'
  },
  {
    q: 'In the method of correcting bearings affected by local attraction using "included angles", which bearing is taken as the starting base?',
    options: ['The fore bearing of a line whose Fore Bearing and Back Bearing differ by exactly 180°', 'The line with the largest magnetic bearing', 'The line nearest to magnetic north', 'Any randomly selected line'],
    ans: 0,
    exp: 'The calculation begins from a station where |FB - BB| = 180° (both stations free from local attraction). From this unaffected baseline, subsequent true bearings are computed using unaffected included angles.',
    tip: 'Starting line for correction = The line whose |FB - BB| = 180° exactly.',
    top: 'Local attraction'
  },
  {
    q: 'Which of the following items carried by a surveyor will cause local attraction if brought near a magnetic compass?',
    options: ['Steel arrows, iron bunch of keys, hammer, and mobile phones', 'Wooden ranging rods', 'Invar band alloy without iron', 'Plastic scale'],
    ans: 0,
    exp: 'Any ferromagnetic item (iron keys, steel arrows, pocket knives, steel-framed spectacles) deflects the magnetic needle when placed near the compass box.',
    tip: 'Ferromagnetic items (keys, steel arrows, iron tools) cause local attraction.',
    top: 'Local attraction'
  },
  {
    q: 'In a compass traverse, if the bearing of line AB is 40° and bearing of line BC is 110°, what is the deflection angle at station B?',
    options: ['70° Right', '70° Left', '150° Right', '30° Right'],
    ans: 0,
    exp: 'Deflection angle is the angle between the prolongation of AB and line BC: Deflection Angle = 110° - 40° = 70° to the Right.',
    tip: 'Deflection angle = Forward bearing - Previous bearing = 110° - 40° = 70° Right.',
    top: 'Traversing'
  },
  {
    q: 'What is the true azimuth of a survey line pointing due South?',
    options: ['180°', '0°', '90°', '270°'],
    ans: 0,
    exp: 'Azimuth is measured clockwise from true North: North = 0°, East = 90°, South = 180°, West = 270°.',
    tip: 'Due South azimuth = 180°.',
    top: 'Introduction to Compass survey'
  },
  {
    q: 'If the Fore Bearing of a line is 180° 00\', what is its Back Bearing?',
    options: ['0° 00\' (or 360° 00\')', '180° 00\'', '90° 00\'', '270° 00\''],
    ans: 0,
    exp: 'Back Bearing = Fore Bearing - 180° = 180° - 180° = 0° (or 360°).',
    tip: 'FB = 180° -> BB = 0°.',
    top: 'Fore and Back bearing'
  },
  {
    q: 'What is the function of the agate cap fitted at the centre of a magnetic compass needle?',
    options: ['To provide a frictionless, hard bearing surface that rests upon the sharp pivot point', 'To insulate the needle from electrical current', 'To seal the compass box from water', 'To balance the magnetic dip'],
    ans: 0,
    exp: 'The hard, polished semi-precious stone (agate) cap rests on the hardened steel pivot point, minimizing frictional resistance to needle rotation.',
    tip: 'Agate cap: Hard frictionless bearing surface resting on the pivot point.',
    top: 'Prismatic compass'
  },
  {
    q: 'What defect occurs if the steel pivot of a magnetic compass becomes blunted or corroded?',
    options: ['The needle becomes sluggish and fails to settle accurately along the magnetic meridian', 'The needle spins continuously', 'The prism falls out', 'The graduations invert'],
    ans: 0,
    exp: 'A blunt or rusted pivot creates excessive mechanical friction, preventing the needle from orienting freely and leading to inaccurate bearings.',
    tip: 'Blunt pivot -> Sluggish needle; needle does not settle accurately.',
    top: 'Errors in Compass survey'
  },
  {
    q: 'In a compass traverse, how can personal parallax error be avoided when taking a reading through the prism?',
    options: ['By adjusting the height of the prism slide until the graduation lines appear crisp and razor-sharp', 'By closing both eyes', 'By tilting the tripod 45°', 'By turning the compass box upside down'],
    ans: 0,
    exp: 'The prism is mounted on a sliding bracket; raising or lowering it focuses the scale sharply for the observer\'s vision, eliminating parallax.',
    tip: 'Focusing prism slide eliminates parallax and sharpens scale readings.',
    top: 'Prismatic compass'
  },
  {
    q: 'Which variation of magnetic declination is caused by sudden solar flares, sunspots, and geomagnetic storms?',
    options: ['Irregular variation', 'Secular variation', 'Annual variation', 'Diurnal variation'],
    ans: 0,
    exp: 'Irregular variations are sudden, unpredictable magnetic disturbances caused by solar flares, aurorae, or earthquakes, deflecting the needle by up to 1° to 2° in minutes.',
    tip: 'Solar flares / sunspots -> Irregular variation.',
    top: 'Magnetic Declination'
  },
  {
    q: 'What is the angle between the index glass and horizon glass in an optical square?',
    options: ['45°', '90°', '30°', '60°'],
    ans: 0,
    exp: 'The two mirrors in an optical square are set at an exact angle of 45°, so that double reflection deflects the ray by 2 × 45° = 90°.',
    tip: 'Optical square mirrors are inclined at 45° to produce a 90° deflection.',
    top: 'Prismatic compass'
  },
  {
    q: 'In a traverse survey, what is the "included angle" between line BA and line BC meeting at station B?',
    options: ['The clockwise angle measured from the backward station line BA to the forward station line BC', 'The difference between the two lengths', 'The sum of their latitudes', 'The departure divided by latitude'],
    ans: 0,
    exp: 'The included angle at station B is the clockwise angle turned from the back line BA to the forward line BC: Angle B = Bearing of BC - Bearing of BA (add 360° if negative).',
    tip: 'Included angle at B = Bearing of forward line BC - Bearing of back line BA.',
    top: 'Traversing'
  },
  {
    q: 'If the Fore Bearing of AB is 30° and Fore Bearing of BC is 120°, what is the interior angle ABC in a clockwise traverse?',
    options: ['90°', '150°', '270°', '60°'],
    ans: 0,
    exp: 'Back bearing of AB = 30° + 180° = 210°. Bearing of forward line BC = 120°. Clockwise angle from BA to BC = 120° - 210° + 360° = 270° (exterior), so interior angle = 360° - 270° = 90°.',
    tip: 'Interior angle = 90°.',
    top: 'Traversing'
  }
];

mod3Questions.forEach(q => {
  addDistinctQ({
    question: q.q,
    options: q.options,
    correctOptionIndex: q.ans,
    explanation: q.exp,
    rankerTip: q.tip
  }, 3, 'mod-3', q.top);
});

console.log('Module 3 first batch added. Total added so far:', addedList.length);

// Append all added questions to database
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
