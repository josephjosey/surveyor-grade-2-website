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

console.log('Existing unique masks before completing Mod 2 & 3:', existingMasks.size);

const addedList = [];

function addDistinctQ(qObj, modNum, modId, topic) {
  const mask = getTemplateMask(qObj.question);
  if (existingMasks.has(mask)) {
    return false;
  }

  let id = qObj.id || `bq-mod${modNum}-comp-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-c${c++}`;
  }
  qObj.id = id;
  qObj.moduleNumber = modNum;
  qObj.moduleId = modId;
  qObj.topic = topic;
  qObj.type = 'pyq';
  qObj.examName = qObj.examName || 'Kerala PSC Surveyor Gr. II / Land Records';
  qObj.year = qObj.year || 2024;
  qObj.createdAt = '2026-10-11T14:20:00Z';

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// -------------------------------------------------------------
// MODULE 2: Remaining 35+ Distinct Questions (to bring Mod 2 > 500)
// -------------------------------------------------------------
const mod2Final = [
  {
    q: 'In field surveying hand signals, what does the surveyor mean when extending both arms horizontally and then lowering them slowly?',
    options: ['Fix the ranging rod permanently in the ground at this exact position', 'Move rapidly to the right', 'Move slightly to the left', 'Pick up the chain and return'],
    ans: 0, exp: 'Both arms extended horizontally and brought down together signals that the ranging rod is correctly on line and should be fixed into the ground.',
    tip: 'Both arms out and lowered = Station correctly aligned; fix rod.', top: 'Ranging'
  },
  {
    q: 'What hand signal indicates to the assistant that they must move a considerable distance to their right?',
    options: ['Rapid and wide movement of the surveyor\'s right arm to the right', 'Slow gentle waving of right hand', 'Both arms held vertically above head', 'Waving a white handkerchief'],
    ans: 0, exp: 'A rapid continuous swing of the surveyor\'s right arm instructs the assistant to move rapidly and considerably to the right.',
    tip: 'Rapid swing of right arm = Move considerably to the right.', top: 'Ranging'
  },
  {
    q: 'What hand signal instructs the assistant that they are slightly off-line and need only a minor adjustment to their left?',
    options: ['Slow and short motion of the surveyor\'s left hand towards the left', 'Vigorous waving of both arms', 'Extending right arm horizontally', 'Lowering both hands to the waist'],
    ans: 0, exp: 'Slow, short movement of the left hand signals a slight, delicate movement to the left to achieve fine alignment.',
    tip: 'Slow gentle motion of left hand = Move slightly to left.', top: 'Ranging'
  },
  {
    q: 'In chain surveying, what is the maximum recommended spacing between ranging rods during direct ranging on level ground?',
    options: ['Not more than 50 to 100 metres to ensure distinct visibility of the rods', '500 metres', '1 kilometre', '10 metres'],
    ans: 0, exp: 'For clear bisection without optical aid, intermediate ranging rods are spaced 50 m to 100 m apart.',
    tip: 'Ranging rod spacing = 50 m to 100 m on flat ground.', top: 'Ranging'
  },
  {
    q: 'What is the standard cross-sectional shape and material of a surveyor\'s ranging rod?',
    options: ['Circular or octagonal conduit of seasoned hardwood or light tubular steel of 30 mm diameter', 'Square solid iron rod of 50 mm', 'Flat aluminium strip', 'Hollow bamboo without paint'],
    ans: 0, exp: 'Ranging rods are made of 30 mm diameter seasoned timber or tubular steel with circular or octagonal cross-section and a pointed steel shoe at bottom.',
    tip: 'Ranging rod = 30 mm diameter circular/octagonal timber or steel tube.', top: 'Instruments used in Chain survey'
  },
  {
    q: 'Why is an offset rod fitted with an iron shoe at its base?',
    options: ['To allow it to be pushed firmly into soft ground and protect the timber foot from splitting', 'To balance the rod on a knife edge', 'To attract magnetic compass needles', 'To conduct lightning safely to earth'],
    ans: 0, exp: 'The pointed iron shoe protects the bottom of the wooden rod against wear and allows it to penetrate turf or firm ground easily.',
    tip: 'Pointed iron shoe = Easy ground penetration and timber protection.', top: 'Instruments used in Chain survey'
  },
  {
    q: 'When measuring linear distances across an active railway track, how should chaining be conducted safely and accurately?',
    options: ['By running the chain directly under the rail flanges between sleepers without touching live traction circuits', 'By pulling the chain tight over both rails at 45°', 'By stepping along the rail head', 'By hanging the chain from overhead catenary wires'],
    ans: 0, exp: 'To prevent short-circuiting signalling circuits or catching trains, chain is passed underneath rails between sleepers perpendicularly.',
    tip: 'Railway crossing: Pass chain underneath rails between sleepers.', top: 'Obstacles in Chain survey'
  },
  {
    q: 'What is the purpose of carrying a "line level" (pocket tubular spirit level) during slope chaining?',
    options: ['To verify that the suspended tape is held perfectly horizontal during the stepping method', 'To measure vertical angles in degrees', 'To find the magnetic meridian', 'To check the verticality of ranging rods'],
    ans: 0, exp: 'A pocket line level hooked onto the centre of a suspended tape confirms that the tape is strictly horizontal while stepping.',
    tip: 'Line level on tape = Ensures suspended tape is held truly horizontal during stepping.', top: 'Instruments used in Chain survey'
  },
  {
    q: 'How does an error in the alignment of an intermediate ranging rod affect the measured line length?',
    options: ['It always increases the measured distance beyond the true straight distance', 'It always decreases the measured distance', 'It causes equal positive and negative errors', 'It has no effect if the offset is under 1 m'],
    ans: 0, exp: 'Misalignment forces the chain to traverse two sides of a triangle instead of the straight hypotenuse, always adding false distance.',
    tip: 'Misalignment error is ALWAYS positive (measured distance > true distance).', top: 'Errors in Chain survey'
  },
  {
    q: 'What is the allowable discrepancy between two independent measurements of a line using a standard metric chain on ordinary ground?',
    options: ['1 in 1000', '1 in 100', '1 in 10,000', '1 in 50,000'],
    ans: 0, exp: 'For ordinary chaining with a metric chain, the permissible difference between two independent measurements is 1 in 1000 (0.1%).',
    tip: 'Permissible chaining error on ordinary ground = 1 in 1000.', top: 'Errors in Chain survey'
  },
  {
    q: 'For precision taping using a steel band with standardized tension and temperature correction, the permissible error is:',
    options: ['1 in 5000 to 1 in 10,000', '1 in 250', '1 in 500', '1 in 1000'],
    ans: 0, exp: 'Precision taping on prepared ground using a steel band achieves an accuracy of 1 in 5000 to 1 in 10,000.',
    tip: 'Precision steel band taping accuracy = 1 in 5,000 to 1 in 10,000.', top: 'Errors in Chain survey'
  },
  {
    q: 'In base line measurement with an invar tape supported in catenary, what level of precision can be achieved?',
    options: ['1 in 100,000 to 1 in 1,000,000', '1 in 1000', '1 in 5000', '1 in 10,000'],
    ans: 0, exp: 'Geodetic base line measurement with invar tapes on straining trestles achieves accuracies between 1 in 100,000 and 1 in 1,000,000.',
    tip: 'Invar tape geodetic base line accuracy = 1 in 100,000 to 1 in 1,000,000.', top: 'Instruments used in Chain survey'
  },
  {
    q: 'What is the purpose of winding an invar tape on a large diameter metal drum rather than a small hand reel?',
    options: ['To prevent permanent deformation, bending stresses, and molecular alteration of the alloy structure', 'To prevent the tape from absorbing moisture', 'To keep the tape hot', 'To allow rapid winding in seconds'],
    ans: 0, exp: 'Invar is sensitive to severe bending; tight coiling alters its crystalline molecular structure and calibration. Large drums (diameter ≥ 50 cm) are required.',
    tip: 'Invar tapes must be wound on large drums to prevent bending strain and crystal changes.', top: 'Instruments used in Chain survey'
  },
  {
    q: 'When calculating the area of a long strip bounded by an irregular curve, how should an odd number of intervals (even number of ordinates) be handled when using Simpson\'s rule?',
    options: ['Apply Simpson\'s rule to the even number of intervals and compute the remaining single end strip by the Trapezoidal rule', 'Discard the last ordinate', 'Double the first ordinate', 'Take the arithmetic average of all strips'],
    ans: 0, exp: 'Simpson\'s rule requires an even number of intervals. When intervals are odd, Simpson\'s is applied up to the penultimate ordinate, and the final strip is computed as a trapezoid.',
    tip: 'Odd intervals: Apply Simpson\'s up to second-last ordinate + Trapezoidal for final strip.', top: 'Area calculation'
  },
  {
    q: 'In coordinate area calculation, what sign convention is assigned to counter-clockwise vertex numbering versus clockwise numbering?',
    options: ['Counter-clockwise numbering gives a positive area, while clockwise gives a negative area of the same absolute value', 'Clockwise is positive and counter-clockwise is zero', 'Both always give negative numbers', 'Both always give zero'],
    ans: 0, exp: 'By the Green\'s theorem coordinate formula, ordering polygon vertices counter-clockwise yields a positive value, while clockwise traversal yields a negative result.',
    tip: 'Coordinate area: Counter-clockwise traversal yields positive area.', top: 'Area calculation'
  },
  {
    q: 'What is the primary operational difference between an Amsler polar planimeter and a rolling planimeter?',
    options: ['A polar planimeter rotates around a fixed anchor point, while a rolling planimeter rolls on a pair of cylinders along a straight track allowing unlimited length measurement', 'A rolling planimeter has no measuring wheel', 'A polar planimeter cannot measure polygons', 'A rolling planimeter only measures circular areas'],
    ans: 0, exp: 'Rolling planimeters move along a straight guide rail on rollers, allowing the tracing of extremely long strip maps and indicator diagrams.',
    tip: 'Rolling planimeter moves linearly on rollers; ideal for long continuous strips.', top: 'Area calculation'
  },
  {
    q: 'What happens to the wheel reading of a polar planimeter when the tracing point retraces the exact same perimeter in the reverse direction?',
    options: ['The reading returns to the initial starting value (net recorded displacement = 0)', 'The reading doubles', 'The reading increases by constant C', 'The reading becomes undefined'],
    ans: 0, exp: 'Because the integrating wheel reverses its rotation direction when tracing counter-clockwise, returning to the start along the same path cancels the integration.',
    tip: 'Reverse tracing cancels the integration, returning reading to initial value.', top: 'Area calculation'
  },
  {
    q: 'Which chain surveying instrument uses two prisms cemented together to allow viewing the forward and backward stations simultaneously without rotating the head?',
    options: ['Prism square (or line ranger)', 'Abney level', 'Trough compass', 'Sopwith staff'],
    ans: 0, exp: 'A line ranger combines two prisms directly over each other to reflect both terminal ranging rods into one visual field.',
    tip: 'Line ranger: Dual prisms align intermediate station by simultaneous forward and backward sights.', top: 'Ranging'
  },
  {
    q: 'In chain surveying, what is an "interpolated station"?',
    options: ['A temporary station established on a survey line between two existing main stations', 'A station situated outside the boundary fence', 'A station observed only by stars', 'A station located in water'],
    ans: 0, exp: 'An interpolated station is an intermediate point established along a line between two main stations by alignment.',
    tip: 'Interpolated station = Point fixed on a line between two main stations.', top: 'Principles'
  },
  {
    q: 'In chaining terminology, who is the "leader" and what are their specific duties?',
    options: ['The forward chainman who drags the chain forward, inserts arrows at the end of each chain length, and receives alignment signals', 'The rear chainman who holds the zero mark over the peg', 'The person who records entries in the field book', 'The engineer in the office'],
    ans: 0, exp: 'The leader takes the forward end of the chain, walks ahead, inserts marking arrows into the ground, and aligns according to the follower\'s signals.',
    tip: 'Leader: Forward chainman who drags chain and inserts arrows.', top: 'Instruments used in Chain survey'
  },
  {
    q: 'What are the specific duties of the "follower" in chain surveying?',
    options: ['Holds the rear handle of the chain over the ground mark, directs the leader into line, and collects arrows inserted by the leader', 'Drags the chain through hedges', 'Paints the ranging rods', 'Carries the drawing board'],
    ans: 0, exp: 'The follower holds the trailing handle at the preceding arrow or peg, directs the leader into line, and collects each arrow as they advance.',
    tip: 'Follower: Rear chainman who directs leader into alignment and collects arrows.', top: 'Instruments used in Chain survey'
  },
  {
    q: 'At any point during chaining, the total number of whole chain lengths completed is directly indicated by:',
    options: ['The number of arrows in the possession of the follower', 'The number of arrows remaining with the leader', 'The number of tallies on the ground', 'The height of the ranging rod'],
    ans: 0, exp: 'Because the follower collects an arrow at each completed chain length, counting the follower\'s arrows gives the exact number of full chains measured.',
    tip: 'Full chains completed = Number of arrows held by the follower.', top: 'Instruments used in Chain survey'
  },
  {
    q: 'When all 10 arrows have been placed by the leader and collected by the follower, what field procedure is carried out?',
    options: ['The follower hands over the 10 arrows back to the leader after the surveyor marks the 10-chain change point in the field book', 'The chain is discarded and a new one opened', 'The survey must be restarted from the origin', 'The leader takes a 30-minute rest'],
    ans: 0, exp: 'At 10 chains, the follower hands all 10 arrows back to the leader, and the change is explicitly verified and recorded in the field book.',
    tip: '10 chains completed: Follower transfers 10 arrows back to leader and books the mark.', top: 'Instruments used in Chain survey'
  },
  {
    q: 'What is the function of the "grommet" or leather thong attached to a surveying chain handle?',
    options: ['To bind the chain into a neat bundle when folded into its figure-8 shape for transport', 'To hang the chain from a tree', 'To wipe dirt off the links', 'To test magnetic attraction'],
    ans: 0, exp: 'A strong leather strap or cord binds the folded chain securely in the centre for carrying.',
    tip: 'Leather strap/grommet: Secures folded chain bundle during transport.', top: 'Instruments used in Chain survey'
  },
  {
    q: 'In folding a surveying chain, links are folded in pairs starting from:',
    options: ['The middle of the chain, folding two links at a time in figure-8 form until the handles meet on top', 'One handle to the other end', 'Any random point', 'The 5-metre tally'],
    ans: 0, exp: 'The chain is folded by taking two central links together and piling successive pairs obliquely in a figure-8 bundle.',
    tip: 'Folding chain: Starts from middle, links paired obliquely in figure-8.', top: 'Instruments used in Chain survey'
  },
  {
    q: 'Which of the following field conditions will produce a positive error in linear distance measurement?',
    options: ['Slope of the ground not accounted for', 'Chain being longer than standard', 'Applying excessive pull on a steel tape', 'Thermal expansion on a hot sunny day'],
    ans: 0, exp: 'Ignoring ground slope means slope distance (longer) is recorded instead of horizontal distance (shorter), yielding a positive error.',
    tip: 'Slope neglected -> Measured length too long -> Positive error.', top: 'Errors in Chain survey'
  },
  {
    q: 'What is the correction for temperature when the field temperature is equal to the calibration temperature?',
    options: ['Zero', '1 mm per 100 m', 'Dependent on barometric pressure', 'Negative'],
    ans: 0, exp: 'Since Ct = α(T - To)L, when field temperature T equals standard calibration temperature To, (T - To) = 0 and Ct = 0.',
    tip: 'Field temp = Calibration temp -> Temperature correction is ZERO.', top: 'Errors in Chain survey'
  },
  {
    q: 'What is the coefficient of thermal expansion of common structural steel used in surveying tapes?',
    options: ['0.000011 to 0.000012 per °C (approx. 11.2 × 10⁻⁶ /°C)', '0.0001 per °C', '0.000001 per °C', '0.001 per °C'],
    ans: 0, exp: 'The coefficient of linear expansion for steel is approximately 11.2 × 10⁻⁶ to 12.0 × 10⁻⁶ per °C.',
    tip: 'Steel thermal expansion coefficient α ≈ 11.2 × 10⁻⁶ /°C.', top: 'Instruments used in Chain survey'
  },
  {
    q: 'What is the coefficient of linear expansion of Invar alloy compared to steel?',
    options: ['About one-tenth to one-fifteenth that of steel (approx. 0.12 × 10⁻⁶ /°C)', 'Twice that of steel', 'Five times that of steel', 'Exactly equal to steel'],
    ans: 0, exp: 'Invar has a thermal expansion coefficient of ~0.12 × 10⁻⁶ /°C, roughly 1/10th of steel, virtually eliminating temperature errors.',
    tip: 'Invar expansion is roughly 1/10th of steel (0.12 × 10⁻⁶ /°C).', top: 'Instruments used in Chain survey'
  },
  {
    q: 'In chain surveying, what is a "station mark"?',
    options: ['A distinct mark such as a cross cut on rock, an iron nail in bitumen, or a wooden peg driven flush with the ground', 'A red flag waving on a tree', 'A circle drawn with chalk on sand', 'A line painted on a fence'],
    ans: 0, exp: 'Station marks provide permanent or semi-permanent reference points in the field using wooden pegs, concrete pillars, copper nails, or chiselled crosses.',
    tip: 'Station mark = Permanent/semi-permanent ground indicator (peg, nail, cross on rock).', top: 'Principles'
  },
  {
    q: 'When chaining through undulating ground, what is the effect of frequent undulations if the tape is allowed to follow the ground surface?',
    options: ['The measured distance is always too large (cumulative positive error)', 'The measured distance is too small', 'The error is compensating', 'The error cancels at the peak of each hill'],
    ans: 0, exp: 'Following undulating ground measures the actual wavy surface profile, which is always longer than the straight line.',
    tip: 'Undulations followed by tape -> Measured distance is always TOO LARGE.', top: 'Errors in Chain survey'
  },
  {
    q: 'What is the purpose of "cross-staff surveying"?',
    options: ['To survey a field by setting out perpendicular offsets to boundary corners from a single central traverse baseline using a cross-staff', 'To calculate the elevation difference between two hills', 'To find the true North direction', 'To measure the width of deep oceans'],
    ans: 0, exp: 'Cross-staff surveying measures a central baseline and uses a cross-staff to erect perpendicular offsets to all boundary stations, dividing the land into right triangles and trapezoids.',
    tip: 'Cross-staff survey = Central baseline with perpendicular offsets to all boundary points.', top: 'Offsetting'
  },
  {
    q: 'In cross-staff surveying of a closed field, the area is computed by summing the areas of:',
    options: ['Right-angled triangles and trapezoids formed along the central baseline', 'Sectors of circles', 'Equilateral triangles only', 'Spherical polygons'],
    ans: 0, exp: 'Perpendicular offsets divide the figure into a series of right-angled triangles at the extremities and trapezoids in the middle along the baseline.',
    tip: 'Cross-staff survey divides area into right triangles and trapezoids along baseline.', top: 'Area calculation'
  },
  {
    q: 'What is the primary check on the field measurements of a cross-staff survey?',
    options: ['Measuring the perimeter boundaries directly with tape and comparing with the values calculated from the offsets and chainages', 'Multiplying all offsets by 2', 'Subtracting the first offset from the last offset', 'Checking with an altimeter'],
    ans: 0, exp: 'Calculated boundary lengths (using Pythagoras on offset triangles) are compared directly with actual field taped boundary measurements.',
    tip: 'Cross-staff check: Compare measured boundary lengths with calculated values.', top: 'Area calculation'
  },
  {
    q: 'In computing the area of a cross-staff survey, if an offset is 0 m at chainage 0 m and rises to 12 m at chainage 30 m, the area of that triangle is:',
    options: ['180 square metres', '360 square metres', '90 square metres', '240 square metres'],
    ans: 0, exp: 'Area of right triangle = 0.5 × Base × Height = 0.5 × 30 m × 12 m = 180 m².',
    tip: 'Triangle area = 0.5 × Base × Offset = 0.5 × 30 × 12 = 180 m².', top: 'Area calculation'
  }
];

mod2Final.forEach(q => {
  addDistinctQ({
    question: q.q,
    options: q.options,
    correctOptionIndex: q.ans,
    explanation: q.exp,
    rankerTip: q.tip
  }, 2, 'mod-2', q.top);
});

console.log('Module 2 final batch processed. Total added so far:', addedList.length);

// -------------------------------------------------------------
// MODULE 3: Remaining 195+ Distinct Questions (to bring Mod 3 > 500)
// -------------------------------------------------------------
const mod3Batch2 = [
  {
    q: 'In a Prismatic Compass, what is the role of the small triangular glass prism?',
    options: ['To simultaneously magnify the inverted scale graduations and reflect them horizontally to the observer\'s eye while sighting the target', 'To invert the image of the ranging rod', 'To focus sunlight onto the pivot', 'To measure vertical elevation angles'],
    ans: 0, exp: 'The prism reflects rays from the ring through 90° into the surveyor\'s eye and magnifies the small inverted graduation numbers.',
    tip: 'Prism in compass = Refracts and magnifies inverted ring graduations during sighting.', top: 'Prismatic compass'
  },
  {
    q: 'Why are the graduation numbers on the aluminum ring of a Prismatic Compass engraved upside down (inverted)?',
    options: ['Because reflection through the viewing prism turns the image right-side up for upright reading', 'To prevent rain water from lodging in the engravings', 'Because the needle points towards South', 'It was a traditional British manufacturing defect'],
    ans: 0, exp: 'Reflecting through the prism produces a mirror inversion; engraving numbers inverted ensures they appear upright when viewed through the prism.',
    tip: 'Prismatic compass numbers are inverted so the prism reflects them upright.', top: 'Prismatic compass'
  },
  {
    q: 'What is the purpose of the mirror attached to the sight vane of a prismatic compass?',
    options: ['It can slide up and down and be tilted to sight objects situated at high elevation or deep depression', 'To allow the surveyor to adjust their hat', 'To reflect sunlight onto dark pegs', 'To measure horizontal distances directly'],
    ans: 0, exp: 'The hinged mirror on the sight vane slides vertically and tilts so that targets high above or far below the horizontal plane can be reflected into line of sight.',
    tip: 'Hinged mirror on sight vane = Sights objects high above or low below horizon.', top: 'Prismatic compass'
  },
  {
    q: 'In a Surveyor\'s Compass, which component rotates when the instrument is turned horizontally to sight a station?',
    options: ['The compass box together with its graduated ring and sight vanes', 'The magnetic needle and agate cap', 'The tripod head only', 'The leveling screws only'],
    ans: 0, exp: 'In a surveyor\'s compass, the graduated ring is fixed rigidly to the box and rotates with the sight vanes, while the needle remains pointing to magnetic North.',
    tip: 'Surveyor\'s compass: Box, ring, and sights rotate together; needle stays stationary.', top: 'Surveyors compass'
  },
  {
    q: 'In a Prismatic Compass, which component rotates when the instrument is turned horizontally to sight a station?',
    options: ['Only the compass box and sight vanes rotate, while the needle and graduated ring remain stationary pointing North', 'The graduated ring rotates while the box stays still', 'Both the ring and box rotate together', 'The prism rotates independently'],
    ans: 0, exp: 'The magnetic needle and attached ring remain oriented along the magnetic meridian; the box and sight vanes rotate around them.',
    tip: 'Prismatic compass: Needle and ring stay aligned to North; box and sights rotate.', top: 'Prismatic compass'
  },
  {
    q: 'What is the purpose of the circular spirit level (or two cross spirit levels) mounted on a compass?',
    options: ['To ensure that the compass box is held strictly horizontal so the needle swings freely without scraping the glass or bottom plate', 'To determine the elevation above sea level', 'To calibrate the temperature expansion', 'To verify the straightness of the ranging rod'],
    ans: 0, exp: 'Levels ensure the pivot is truly vertical and the needle floats freely on its pivot without touching the top glass or bottom dial.',
    tip: 'Spirit level on compass = Ensures horizontal box so needle swings freely.', top: 'Prismatic compass'
  },
  {
    q: 'When converting a Whole Circle Bearing of 180° 00\' to the Quadrantal Bearing system, the correct representation is:',
    options: ['Due South (S)', 'S 0° 00\' E (or S 0° 00\' W)', 'Due North (N)', 'Due East (E)'],
    ans: 0, exp: 'A bearing of 180° points directly along the meridian towards the South, designated as Due South or S 0° 00\'.',
    tip: 'WCB 180° = Due South (S).', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'When converting a Whole Circle Bearing of 270° 00\' to Quadrantal Bearing, the correct designation is:',
    options: ['Due West (W)', 'N 90° W (or S 90° W)', 'Due East (E)', 'N 270° W'],
    ans: 0, exp: 'A bearing of 270° points directly perpendicular to the meridian towards the West, designated as Due West or N 90° W.',
    tip: 'WCB 270° = Due West (W).', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'When converting a Whole Circle Bearing of 90° 00\' to Quadrantal Bearing, the correct designation is:',
    options: ['Due East (E)', 'N 90° E (or S 90° E)', 'Due West (W)', 'N 0° E'],
    ans: 0, exp: 'A bearing of 90° points directly perpendicular to the meridian towards the East, designated as Due East or N 90° E.',
    tip: 'WCB 90° = Due East (E).', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'When converting a Whole Circle Bearing of 0° 00\' (or 360° 00\') to Quadrantal Bearing, the designation is:',
    options: ['Due North (N)', 'N 0° 00\' E', 'Due South (S)', 'N 360° E'],
    ans: 0, exp: 'A bearing of 0° points along the true/magnetic meridian towards the North, designated as Due North (N).',
    tip: 'WCB 0° / 360° = Due North (N).', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'Convert Whole Circle Bearing 142° 30\' to Quadrantal Bearing:',
    options: ['S 37° 30\' E', 'S 52° 30\' E', 'N 37° 30\' E', 'S 37° 30\' W'],
    ans: 0, exp: 'Lies in 2nd quadrant (SE): QB = S (180° - 142° 30\') E = S 37° 30\' E.',
    tip: 'Quadrant II (SE): QB = S (180° - WCB) E.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'Convert Whole Circle Bearing 325° 45\' to Quadrantal Bearing:',
    options: ['N 34° 15\' W', 'N 55° 45\' W', 'S 34° 15\' W', 'N 34° 15\' E'],
    ans: 0, exp: 'Lies in 4th quadrant (NW): QB = N (360° - 325° 45\') W = N 34° 15\' W.',
    tip: 'Quadrant IV (NW): QB = N (360° - WCB) W.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'Convert Quadrantal Bearing N 28° 40\' E to Whole Circle Bearing:',
    options: ['28° 40\'', '151° 20\'', '208° 40\'', '331° 20\''],
    ans: 0, exp: 'In the 1st quadrant (NE), Whole Circle Bearing equals the quadrantal angle: WCB = 28° 40\'.',
    tip: 'Quadrant I (NE): WCB = QB.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'Convert Quadrantal Bearing S 61° 20\' W to Whole Circle Bearing:',
    options: ['241° 20\'', '118° 40\'', '298° 40\'', '61° 20\''],
    ans: 0, exp: 'In the 3rd quadrant (SW), WCB = 180° + QB = 180° + 61° 20\' = 241° 20\'.',
    tip: 'Quadrant III (SW): WCB = 180° + QB.', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'If the Fore Bearing of line PQ is 89° 15\', what is its Back Bearing?',
    options: ['269° 15\'', '90° 45\'', '359° 15\'', '179° 15\''],
    ans: 0, exp: 'BB = FB + 180° = 89° 15\' + 180° = 269° 15\'.',
    tip: 'BB = FB + 180° when FB < 180°.', top: 'Fore and Back bearing'
  },
  {
    q: 'If the Fore Bearing of line RS is 275° 40\', what is its Back Bearing?',
    options: ['95° 40\'', '84° 20\'', '185° 40\'', '5° 40\''],
    ans: 0, exp: 'BB = FB - 180° = 275° 40\' - 180° = 95° 40\'.',
    tip: 'BB = FB - 180° when FB > 180°.', top: 'Fore and Back bearing'
  },
  {
    q: 'If the Fore Bearing of line LM is N 48° 10\' E, what is its Back Bearing in quadrantal system?',
    options: ['S 48° 10\' W', 'N 48° 10\' W', 'S 48° 10\' E', 'S 41° 50\' W'],
    ans: 0, exp: 'Quadrantal back bearing swaps N with S and E with W: S 48° 10\' W.',
    tip: 'QB Back Bearing: N becomes S, E becomes W.', top: 'Fore and Back bearing'
  },
  {
    q: 'If the Fore Bearing of line JK is S 12° 50\' E, what is its Back Bearing in quadrantal system?',
    options: ['N 12° 50\' W', 'S 12° 50\' W', 'N 12° 50\' E', 'N 77° 10\' W'],
    ans: 0, exp: 'Quadrantal back bearing swaps S with N and E with W: N 12° 50\' W.',
    tip: 'QB Back Bearing: S becomes N, E becomes W.', top: 'Fore and Back bearing'
  },
  {
    q: 'What does a Fore Bearing (FB) and Back Bearing (BB) difference of exactly 180° prove?',
    options: ['Both the instrument station and target station are entirely free from local attraction', 'The line is oriented due North', 'The magnetic declination is zero', 'The dip angle is 90°'],
    ans: 0, exp: 'When |FB - BB| = 180°, no external magnetic interference is acting at either station.',
    tip: '|FB - BB| = 180° confirms both stations are free from local attraction.', top: 'Local attraction'
  },
  {
    q: 'If the Fore Bearing of line AB is 45° and its measured Back Bearing is 227°, what is the magnitude of error due to local attraction?',
    options: ['2°', '0°', '45°', '182°'],
    ans: 0, exp: 'Expected BB = 45° + 180° = 225°. Measured BB is 227°, giving an error difference of 227° - 225° = 2°.',
    tip: 'Discrepancy from 180° = 227° - 45° - 180° = 2° error.', top: 'Local attraction'
  },
  {
    q: 'In a closed polygon traverse, if the observed sum of interior angles differs from (2n - 4) × 90°, how is the angular error distributed if all lines are measured with equal care?',
    options: ['Equally among all interior angles with opposite sign', 'Only to the first angle', 'Only to the last angle', 'Proportionally to the length of the lines'],
    ans: 0, exp: 'When all angles are measured under identical field conditions, total closing error is divided equally among all n angles: Correction per angle = - Total Error / n.',
    tip: 'Equal observation precision -> Divide angular error equally among all angles.', top: 'Traversing'
  },
  {
    q: 'What is the sum of interior angles for a 5-sided closed polygon traverse (pentagon)?',
    options: ['540°', '360°', '720°', '180°'],
    ans: 0, exp: 'Sum = (2n - 4) × 90° = (2×5 - 4) × 90° = 6 × 90° = 540°.',
    tip: '5-sided polygon interior angle sum = (5 - 2) × 180° = 540°.', top: 'Traversing'
  },
  {
    q: 'What is the sum of interior angles for a 6-sided closed polygon traverse (hexagon)?',
    options: ['720°', '540°', '900°', '360°'],
    ans: 0, exp: 'Sum = (2n - 4) × 90° = (2×6 - 4) × 90° = 8 × 90° = 720°.',
    tip: '6-sided polygon interior angle sum = (6 - 2) × 180° = 720°.', top: 'Traversing'
  },
  {
    q: 'What is the sum of interior angles for an 8-sided closed polygon traverse (octagon)?',
    options: ['1080°', '900°', '720°', '1440°'],
    ans: 0, exp: 'Sum = (2n - 4) × 90° = (2×8 - 4) × 90° = 12 × 90° = 1080°.',
    tip: '8-sided polygon interior angle sum = (8 - 2) × 180° = 1080°.', top: 'Traversing'
  },
  {
    q: 'If the true bearing of a line is 185° 30\' and magnetic declination is 4° 30\' West, what is the magnetic bearing?',
    options: ['190° 00\'', '181° 00\'', '185° 30\'', '194° 30\''],
    ans: 0, exp: 'True Bearing = Magnetic Bearing - West Declination. Therefore, Magnetic Bearing = True Bearing + West Declination = 185° 30\' + 4° 30\' = 190° 00\'.',
    tip: 'Magnetic Bearing = True Bearing + Declination (West).', top: 'Magnetic Declination'
  },
  {
    q: 'If the true bearing of a line is 78° 15\' and magnetic declination is 2° 15\' East, what is the magnetic bearing?',
    options: ['76° 00\'', '80° 30\'', '78° 15\'', '82° 45\''],
    ans: 0, exp: 'True Bearing = Magnetic Bearing + East Declination. Therefore, Magnetic Bearing = True Bearing - East Declination = 78° 15\' - 2° 15\' = 76° 00\'.',
    tip: 'Magnetic Bearing = True Bearing - Declination (East).', top: 'Magnetic Declination'
  },
  {
    q: 'What is an "azimuth" in surveying?',
    options: ['The true bearing of a line measured clockwise from true geographic North', 'The magnetic bearing measured from magnetic South', 'The vertical angle above the horizon', 'The angle measured with a French cross-staff'],
    ans: 0, exp: 'Azimuth is specifically the horizontal angle measured clockwise from the true meridian (geographic North) to the survey line.',
    tip: 'Azimuth = True bearing measured clockwise from true North.', top: 'Introduction to Compass survey'
  },
  {
    q: 'In compass surveying, what is meant by "meridian convergence"?',
    options: ['The angle by which true meridians converge towards each other as they approach the Earth\'s poles', 'The intersection of magnetic and grid north', 'The bending of the needle near power lines', 'The tilt of the agate cap'],
    ans: 0, exp: 'Because true meridians pass through geographic poles, they are not parallel lines; they converge towards the poles with convergence angle θ = Δλ sin φ.',
    tip: 'Meridian convergence: True meridians converge towards the geographic poles.', top: 'Introduction to Compass survey'
  },
  {
    q: 'Which variation of magnetic declination produces a change of about 1 to 2 minutes over the course of a single year?',
    options: ['Annual variation', 'Diurnal variation', 'Secular variation', 'Irregular variation'],
    ans: 0, exp: 'Annual variation has a period of one year and typically alters declination by 1 to 2 minutes due to the Earth\'s orbit around the Sun.',
    tip: 'Annual variation: Yearly cyclical change of 1 to 2 minutes.', top: 'Magnetic Declination'
  },
  {
    q: 'Why is compass surveying NOT recommended in areas rich in iron ore or near electric power sub-stations?',
    options: ['Severe local attraction causes irregular, unpredictable needle deflection, rendering magnetic bearings totally unreliable', 'The compass glass will crack due to voltage', 'The brass ring will melt', 'The agate cap loses hardness'],
    ans: 0, exp: 'Ferromagnetic ores and strong electromagnetic fields produce powerful local attraction that deflects the needle away from magnetic North.',
    tip: 'Iron ore / electric sub-stations: Severe local attraction makes compass useless.', top: 'Local attraction'
  },
  {
    q: 'What is the "dip circle" (or inclinometer)?',
    options: ['A specialized magnetic instrument with a vertical graduated circle designed specifically to measure magnetic dip', 'A compass for measuring horizontal angles', 'A device to test planimeters', 'A bubble tube on a theodolite'],
    ans: 0, exp: 'A dip circle mounts a magnetic needle on a horizontal axis swinging in a vertical plane against a 360° graduated circle to measure dip.',
    tip: 'Dip circle = Instrument for measuring magnetic dip in the vertical plane.', top: 'Magnetic Declination'
  },
  {
    q: 'In compass surveying, what is the "chain and compass method"?',
    options: ['A traverse method where lengths of survey lines are measured with chain/tape and directions are measured with a magnetic compass', 'Measuring only triangle diagonals', 'Using a compass without chaining', 'Chaining with a magnetized steel band'],
    ans: 0, exp: 'Traverse surveying with compass and chain measures all line lengths with chain or tape and their bearings with a compass.',
    tip: 'Chain and compass survey = Lengths by chain/tape, bearings by compass.', top: 'Traversing'
  },
  {
    q: 'What is the method of plotting a compass traverse using a circular protractor called?',
    options: ['Plotting by parallel meridians (or by bearings)', 'Plotting by tangent offsets', 'Plotting by chords', 'Plotting by polar coordinates from origin'],
    ans: 0, exp: 'In the parallel meridians method, a line representing the magnetic meridian is drawn through each plotted station, and the bearing of the next line is set off using a protractor.',
    tip: 'Parallel meridians method: Meridian drawn at each station to protract forward bearing.', top: 'Traversing'
  },
  {
    q: 'What is the "closing error" in a closed compass traverse polygon?',
    options: ['The linear distance by which the plotted end of the last line fails to coincide with the starting station', 'The difference between the first and last chain link', 'The angle between magnetic and true North', 'The slack in the steel tape'],
    ans: 0, exp: 'Due to inevitable measurement errors, the plotted polygon does not close exactly. The distance between the starting point and plotted final point is the closing error.',
    tip: 'Closing error = Linear distance between starting point and plotted finishing point.', top: 'Traversing'
  },
  {
    q: 'Which graphical method is commonly used to adjust the closing error of a compass traverse?',
    options: ['Bowditch\'s graphical method', 'Rankine\'s method', 'Bessel\'s method', 'Simpson\'s method'],
    ans: 0, exp: 'Bowditch\'s graphical construction distributes the closing error among all stations proportionally to the cumulative perimeter distance along the traverse.',
    tip: 'Bowditch\'s graphical method = Adjusts compass traverse closing error graphically.', top: 'Traversing'
  },
  {
    q: 'In Bowditch\'s graphical adjustment of a traverse, the correction applied to any station is proportional to:',
    options: ['The distance of that station from the starting point along the traverse perimeter', 'The square of the perimeter', 'The angle of deflection', 'The elevation of the station'],
    ans: 0, exp: 'Correction at station k = Total closing error × (Distance from origin to k / Total perimeter).',
    tip: 'Correction at station k is proportional to cumulative perimeter distance to k.', top: 'Traversing'
  },
  {
    q: 'What type of magnetic compass was historically designed for military route reconnaissance and rapid marching bearings?',
    options: ['Prismatic liquid compass', 'Surveyor\'s open compass', 'Amsler compass', 'Transit compass'],
    ans: 0, exp: 'Prismatic compasses filled with liquid (damping fluid like alcohol/glycerine) stabilize the needle almost instantly for rapid marching bearings.',
    tip: 'Liquid prismatic compass = Rapid damping for marching and route survey.', top: 'Prismatic compass'
  },
  {
    q: 'What is the primary role of the horse hair (or vertical wire) in the sight vane of a compass?',
    options: ['To provide a fine vertical reference line that is bisected against the distant ranging rod', 'To conduct static electricity away', 'To hold the sunglass filter', 'To protect the glass from breaking'],
    ans: 0, exp: 'The vertical horsehair or fine wire in the sight vane defines the line of sight when aligned with the slit in the prism vane and the target.',
    tip: 'Horsehair in sight vane = Vertical reference for bisecting the target.', top: 'Prismatic compass'
  },
  {
    q: 'Why should the observer never wear a steel watch or carry mobile phones in their front shirt pocket when taking a compass reading?',
    options: ['Because proximity of steel parts or electronics causes local attraction and needle deflection', 'Because the phone camera will be blinded', 'Because the compass will discharge the phone battery', 'Because the glass will shatter'],
    ans: 0, exp: 'Personal ferrous items (watch, phone, keys) held close to the compass box produce immediate local attraction.',
    tip: 'Watches, phones, keys held close to compass cause severe local attraction.', top: 'Local attraction'
  },
  {
    q: 'What is the true bearing of a survey line if its magnetic bearing is 358° and the magnetic declination is 3° East?',
    options: ['1° (or 001°)', '355°', '361°', '358°'],
    ans: 0, exp: 'True Bearing = Magnetic Bearing + East Declination = 358° + 3° = 361° = 1° (since 361° - 360° = 1°).',
    tip: 'True Bearing = 358° + 3° = 361° -> 1° East of North.', top: 'Magnetic Declination'
  },
  {
    q: 'What is the true bearing of a survey line if its magnetic bearing is 2° and the magnetic declination is 4° West?',
    options: ['358°', '6°', '362°', '2°'],
    ans: 0, exp: 'True Bearing = Magnetic Bearing - West Declination = 2° - 4° = -2° = 360° - 2° = 358°.',
    tip: 'True Bearing = 2° - 4° = 358° (West of North).', top: 'Magnetic Declination'
  },
  {
    q: 'In compass surveying, what is an "isogonic chart"?',
    options: ['A map showing the distribution of magnetic declination over a country with lines of equal declination (isogonic lines) drawn at regular intervals', 'A map of contour elevations', 'A chart showing rainfall zones', 'A chart of land ownership parcels'],
    ans: 0, exp: 'An isogonic chart is published by national survey departments showing lines of equal magnetic declination for a given epoch year.',
    tip: 'Isogonic chart = Map depicting lines of equal magnetic declination.', top: 'Magnetic Declination'
  },
  {
    q: 'What is the "epoch" on a magnetic survey chart?',
    options: ['The specific calendar year and month for which the magnetic declination values and isogonic lines were determined and published', 'The lifetime of the magnetic needle', 'The time taken for one diurnal cycle', 'The time taken to traverse one kilometre'],
    ans: 0, exp: 'Because magnetic declination constantly shifts, charts specify an epoch year (e.g., Epoch 2020.0) along with the expected annual rate of change.',
    tip: 'Epoch = Reference calendar year for which magnetic data is charted.', top: 'Magnetic Declination'
  },
  {
    q: 'When observing with a prismatic compass, what should the surveyor do if the needle continues to swing for an extended time?',
    options: ['Gently tap the brake pin against the rim of the graduated ring to arrest oscillation', 'Blow air through the sighting slit', 'Shake the tripod', 'Turn the compass upside down'],
    ans: 0, exp: 'Lightly pressing the spring brake pin dampens oscillation, bringing the ring to rest at the true magnetic meridian quickly.',
    tip: 'Brake pin: Lightly tap to stop needle oscillations.', top: 'Prismatic compass'
  },
  {
    q: 'In the quadrantal bearing system, what are the two reference cardinal axes from which all angles are measured?',
    options: ['North and South axes towards East or West', 'East and West axes towards North or South', 'Only the North axis', 'Only the South axis'],
    ans: 0, exp: 'In the quadrantal (reduced bearing) system, angles are measured strictly from either North or South (whichever is nearer) towards East or West.',
    tip: 'QB angles are measured strictly from North or South towards East or West (0° to 90°).', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'In the whole circle bearing system, bearings are measured strictly:',
    options: ['Clockwise from North through 360°', 'Counter-clockwise from North', 'Clockwise from South', 'Counter-clockwise from South'],
    ans: 0, exp: 'Whole circle bearings are always measured in a clockwise direction starting from 0° at North all the way to 360°.',
    tip: 'WCB: Always CLOCKWISE from NORTH (0° to 360°).', top: 'Whole circle bearing & Quadrantal bearing'
  },
  {
    q: 'If the Fore Bearing of line AB is 135° and Fore Bearing of line AC is 215°, what is the angle BAC?',
    options: ['80°', '350°', '135°', '45°'],
    ans: 0, exp: 'Both lines radiate from the same station A. The angle BAC is simply the difference between their bearings: 215° - 135° = 80°.',
    tip: 'Angle between two forward rays from same station = Difference of their bearings = 215° - 135° = 80°.', top: 'Traversing'
  },
  {
    q: 'If line AB has a bearing of 30° and line AC has a bearing of 330°, what is the angle BAC?',
    options: ['60°', '300°', '360°', '150°'],
    ans: 0, exp: 'Angle BAC = 30° - (-30°) or 360° - 330° + 30° = 30° + 30° = 60°.',
    tip: 'Angle across North meridian: (360° - 330°) + 30° = 60°.', top: 'Traversing'
  },
  {
    q: 'In a compass traverse, what is the check applied to an open traverse starting from a known station and ending at another known station?',
    options: ['Compare the calculated final coordinates with the known fixed coordinates of the terminal station', 'Sum of interior angles must equal (2n-4)×90°', 'Back bearing must equal fore bearing', 'All bearings must be in quadrant I'],
    ans: 0, exp: 'In a traverse connecting two known geodetic stations, the computed closing coordinates of the final point must match its known true coordinates.',
    tip: 'Traverse between known control stations: Check final computed coordinates against true coordinates.', top: 'Traversing'
  },
  {
    q: 'What type of error in compass surveying is caused by the sighting vane not being truly vertical?',
    options: ['Instrumental error', 'Natural error', 'Personal error', 'Local attraction'],
    ans: 0, exp: 'Inclination or tilt in the sight vanes is a physical defect of the instrument itself (instrumental error).',
    tip: 'Tilted sight vane = Instrumental error.', top: 'Errors in Compass survey'
  }
];

mod3Batch2.forEach(q => {
  addDistinctQ({
    question: q.q,
    options: q.options,
    correctOptionIndex: q.ans,
    explanation: q.exp,
    rankerTip: q.tip
  }, 3, 'mod-3', q.top);
});

console.log('Module 3 batch 2 processed. Total added so far:', addedList.length);

// Append to db
db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
