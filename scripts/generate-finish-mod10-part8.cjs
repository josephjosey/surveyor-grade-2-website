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

console.log('Existing unique masks before Mod 10 Part 8:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-p10h-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-v${c++}`;
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
    createdAt: '2026-10-11T21:30:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 65 DISTINCT QUESTIONS FOR MODULE 10 (PART 8)
const m10Part8 = [
  // --- SCAFFOLDING, SHORING & UNDERPINNING ---
  {
    q: "In bricklayer's scaffolding (single scaffolding), what is the horizontal member placed perpendicular to the wall with one end resting on the ledger and the other in the wall hole called?",
    opts: ["Putlog", "Standard", "Brace", "Transom"],
    ans: 0,
    exp: "A putlog is a transverse horizontal member in scaffolding that supports the working platform boards; in single scaffolding, one end rests on the ledger and the other inside a hole left in the wall.",
    tip: "Standards are vertical uprights, ledgers are longitudinal horizontals, and putlogs are transverse horizontals.",
    top: "Scaffolding & Shoring"
  },
  {
    q: "Which type of scaffolding is supported by needles projecting out from holes made in the external wall rather than resting on the ground?",
    opts: ["Cantilever scaffolding", "Suspended scaffolding", "Trestle scaffolding", "Double scaffolding"],
    ans: 0,
    exp: "Cantilever scaffolding (or needle scaffolding) is supported by a series of cantilevers or needles passing through holes in the wall, used when the ground cannot support standards or when working on upper floors over busy streets.",
    tip: "Needle scaffolding is employed where ground traffic must remain unobstructed.",
    top: "Scaffolding & Shoring"
  },
  {
    q: "In mason's scaffolding (double scaffolding), why are two rows of standards provided?",
    opts: ["Because stone walls do not permit creating putlog holes", "To carry double the number of workers", "To eliminate the need for bracing", "To reduce timber consumption"],
    ans: 0,
    exp: "In stone masonry, it is difficult to leave holes in the wall for putlogs; hence, double scaffolding is erected with two independent rows of vertical standards so the scaffold does not rely on wall holes.",
    tip: "Single scaffolding is for brick masonry; double scaffolding is for stone masonry.",
    top: "Scaffolding & Shoring"
  },
  {
    q: "Which form of shoring consists of inclined timber members arranged to provide temporary lateral support to an unsafe or bulging wall?",
    opts: ["Raking shoring", "Flying shoring", "Dead shoring", "Needle shoring"],
    ans: 0,
    exp: "Raking shoring uses inclined struts (rakers) sloping at 45° to 75° from sole plates on the ground to wall plates on the distressed structure.",
    tip: "Optimum inclination of rakers is between 45° and 60° (not exceeding 75°).",
    top: "Scaffolding & Shoring"
  },
  {
    q: "What type of shoring is employed to provide temporary horizontal support between two parallel party walls when an intermediate building is demolished?",
    opts: ["Flying shoring", "Dead shoring", "Raking shoring", "Vertical shoring"],
    ans: 0,
    exp: "Flying shoring (horizontal shoring) provides temporary support to the parallel party walls of two adjacent buildings when the structure between them is pulled down, without touching the ground.",
    tip: "Flying shores span horizontally between walls without occupying ground space.",
    top: "Scaffolding & Shoring"
  },
  {
    q: "Dead shoring is primarily adopted when which of the following operations is undertaken?",
    opts: ["Rebuilding or opening large doorways in lower portions of an existing wall", "Preventing external walls from leaning inward", "Supporting light partition partitions", "Erecting precast parapets"],
    ans: 0,
    exp: "Dead shoring (vertical shoring) uses vertical posts (dead shores) and needles to carry the entire vertical weight of a wall while lower walls or foundations are being rebuilt, deepened, or opened for large spans.",
    tip: "Dead shoring carries vertical loads; flying shoring carries horizontal loads; raking shoring carries lateral thrusts.",
    top: "Scaffolding & Shoring"
  },
  {
    q: "Underpinning by the pit method involves which sequential procedure?",
    opts: ["Excavating alternate short sections underneath the footing and rebuilding new foundations section by section", "Driving steel piles around the perimeter simultaneously", "Injecting chemical grout across the entire site all at once", "Lifting the whole foundation slab using hydraulic jacks"],
    ans: 0,
    exp: "The pit method of underpinning excavates small pits (typically 1.2 to 1.5 m wide) in legs or bays in a staggered sequence beneath the existing foundation, casting new concrete underpins before intermediate bays are tackled.",
    tip: "Underpinning is never excavated continuously; it is carried out in alternate bays of 1.2 to 1.5 m.",
    top: "Underpinning"
  },

  // --- FORMWORK STRIPPING PERIODS (IS 456) ---
  {
    q: "According to IS 456, what is the minimum stripping time for vertical formwork to columns, walls, and beams under normal temperature conditions using OPC?",
    opts: ["16 to 24 hours", "3 days", "7 days", "14 days"],
    ans: 0,
    exp: "Vertical formwork to columns, walls, and vertical sides of beams can be struck after 16 to 24 hours provided ambient temperature is normal and OPC is used.",
    tip: "Remember: Column sides = 16 to 24 hours.",
    top: "Formwork & Stripping"
  },
  {
    q: "As per IS 456, what is the minimum period before striking soffit formwork to slabs (props to be refixed immediately after removal)?",
    opts: ["3 days", "7 days", "14 days", "21 days"],
    ans: 0,
    exp: "Soffit formwork to slabs can be struck after 3 days, provided props are refixed immediately.",
    tip: "Slab soffit = 3 days; beam soffit = 7 days.",
    top: "Formwork & Stripping"
  },
  {
    q: "According to IS 456, after how many days can props to slabs spanning up to 4.5 metres be removed?",
    opts: ["7 days", "14 days", "3 days", "21 days"],
    ans: 0,
    exp: "Props to slabs spanning up to 4.5 m can be removed after 7 days (for spans over 4.5 m, it is 14 days).",
    tip: "Slab props: <= 4.5 m is 7 days; > 4.5 m is 14 days.",
    top: "Formwork & Stripping"
  },
  {
    q: "As per IS 456, props under beams and arches spanning over 6 metres should not be removed before how many days?",
    opts: ["21 days", "14 days", "7 days", "28 days"],
    ans: 0,
    exp: "For beams and arches spanning over 6 metres, props must remain in place for at least 21 days (for spans up to 6 m, it is 14 days).",
    tip: "Props under beams/arches: <= 6 m is 14 days; > 6 m is 21 days.",
    top: "Formwork & Stripping"
  },

  // --- ARCHES & LINTELS ---
  {
    q: "In an arch, what is the triangular space bounded by the extrados, the horizontal line through the crown, and the vertical line through the springing called?",
    opts: ["Spandrel", "Haunch", "Soffit", "Skewback"],
    ans: 0,
    exp: "The spandrel is the triangular wall space enclosed between the extrados of the arch and the horizontal line tangential to the crown and vertical line through the springing.",
    tip: "Spandrels are often decorated or filled with masonry up to floor level.",
    top: "Arches & Lintels"
  },
  {
    q: "What is the inclined surface of an abutment or pier from which an arch springs called?",
    opts: ["Skewback", "Impost", "Springing line", "Intrados"],
    ans: 0,
    exp: "Skewback is the sloping surface of an abutment or pier shaped to receive the first arch stone (springer) at the correct angle.",
    tip: "Impost is the upper projecting course of an abutment supporting the skewback.",
    top: "Arches & Lintels"
  },
  {
    q: "What is the wedge-shaped central stone or brick placed at the apex or highest point of an arch called?",
    opts: ["Keystone", "Springer", "Voussoir", "Crown stone"],
    ans: 0,
    exp: "The keystone is the central wedge-shaped masonry block at the crown of an arch that locks the entire arch assembly into compressive equilibrium.",
    tip: "All wedge-shaped blocks forming an arch are voussoirs; the central one is the keystone.",
    top: "Arches & Lintels"
  },
  {
    q: "Which type of arch consists of two circular arcs meeting at an apex and has their centres located on the springing line?",
    opts: ["Pointed arch (Lancet or Gothic)", "Segmental arch", "Relieving arch", "Florentine arch"],
    ans: 0,
    exp: "Pointed arches (Gothic/Lancet arches) consist of two curves meeting at an apex, with their centers on the springing line.",
    tip: "Pointed arches minimize lateral outward thrust compared to semicircular arches.",
    top: "Arches & Lintels"
  },
  {
    q: "What is the primary function of a relieving arch constructed above a wooden or stone lintel?",
    opts: ["To relieve the lintel from carrying the heavy superincumbent wall load", "To enhance the decorative facade exclusively", "To provide ventilation above the lintel", "To resist earthquakes only"],
    ans: 0,
    exp: "A relieving arch is built over a lintel to divert the superstructure weight onto the adjoining jambs, preventing lintel cracking or failure.",
    tip: "Relieving arches carry the wall loads above openings, sparing weak lintels.",
    top: "Arches & Lintels"
  },

  // --- STAIRS TERMINOLOGY & TYPES ---
  {
    q: "In stair design, what is the horizontal projection of a step beyond the face of the riser below it termed?",
    opts: ["Nosing", "Going", "Waist", "Scotia"],
    ans: 0,
    exp: "Nosing is the exposed, often rounded edge of a tread projecting beyond the face of the riser.",
    tip: "Scotia is the concave moulding provided under the nosing to enhance its appearance.",
    top: "Stairs"
  },
  {
    q: "What is the standard recommended range for the pitch or inclination of a public or residential stairway?",
    opts: ["25° to 40°", "10° to 20°", "45° to 60°", "50° to 70°"],
    ans: 0,
    exp: "A stairway should ideally have an angle of inclination between 25° and 40° (never flatter than 20° or steeper than 45°).",
    tip: "Pitch formula guideline: 2R + T = 60 cm to 63 cm.",
    top: "Stairs"
  },
  {
    q: "What is a stairway called in which flights run in opposite directions with no space or well between them?",
    opts: ["Dog-legged stair", "Open-newel stair", "Bifurcated stair", "Geometrical stair"],
    ans: 0,
    exp: "A dog-legged stair consists of two successive flights separated by a landing where flights run in opposite directions and touch each other at the newel post with no open central well.",
    tip: "If there is an open space between forward and return flights, it is an open newel (open well) stair.",
    top: "Stairs"
  },
  {
    q: "Which type of stair features a wide central flight that splits into two narrower side flights at an intermediate landing?",
    opts: ["Bifurcated stair", "Dog-legged stair", "Spiral stair", "Circular stair"],
    ans: 0,
    exp: "A bifurcated stair has a wide bottom flight up to a mid-landing, which then branches off into two narrower flights turning left and right; commonly used in grand entrance halls.",
    tip: "Bifurcated stairs are typical in public buildings, theaters, and palaces.",
    top: "Stairs"
  },
  {
    q: "In stair terminology, what is the minimum headroom clearance measured vertically from the pitch line to any overhead ceiling or beam?",
    opts: ["2.05 to 2.15 metres", "1.50 metres", "1.75 metres", "3.00 metres"],
    ans: 0,
    exp: "Minimum headroom clearance measured vertically from the nosing line to any ceiling obstruction should be at least 2.05 to 2.15 m (around 7 feet) to prevent head strikes.",
    tip: "Clear vertical headroom should never be less than 2.05 m.",
    top: "Stairs"
  },

  // --- DOORS & WINDOWS ---
  {
    q: "Which type of door consists of vertical boards held together by horizontal members and inclined struts without any external frame stile?",
    opts: ["Ledged, battened, and braced door", "Framed and panelled door", "Flush door", "Louvered door"],
    ans: 0,
    exp: "A ledged, battened, and braced door consists of vertical battens held by horizontal ledges and inclined braces sloping upwards away from the hanging stile towards the latch side.",
    tip: "Braces must always slope upwards from the hinge side to take compressive thrust.",
    top: "Doors & Windows"
  },
  {
    q: "In battened and braced doors, why should the braces always incline upwards from the hanging stile toward the meeting stile?",
    opts: ["To act in compression and prevent sagging of the outer edge", "To let rain water flow down faster", "To allow easy insertion of locks", "To reduce timber consumption"],
    ans: 0,
    exp: "Braces act as compression struts; inclining them upwards away from the hinge stile directs door weight back toward the lower hinge, preventing door sagging.",
    tip: "Braces in compression must slope upwards from the hinged side.",
    top: "Doors & Windows"
  },
  {
    q: "Which window is provided in a sloping roof to admit light and air into an attic room and has its frame projecting vertically from the roof plane?",
    opts: ["Dormer window", "Skylight", "Clerestory window", "Lanter window"],
    ans: 0,
    exp: "A dormer window is built vertically on the side of a sloping roof with its own miniature roof and vertical walls, providing light and headroom in attics.",
    tip: "Skylights lie parallel to the sloping roof; dormer windows stand vertically.",
    top: "Doors & Windows"
  },
  {
    q: "Which window is located near the top of an interior wall just below the ceiling to illuminate high-ceilinged rooms or nave aisles?",
    opts: ["Clerestory window", "Casement window", "Gable window", "Corner window"],
    ans: 0,
    exp: "Clerestory windows are installed high on walls near the ceiling level above an adjoining roof to provide natural daylight without sacrificing wall privacy.",
    tip: "Common in factories, churches, and high auditoriums.",
    top: "Doors & Windows"
  },
  {
    q: "What is a window consisting of horizontal slats fixed at an angle to allow free air circulation while restricting view and entry of rain called?",
    opts: ["Louvered window", "Sash window", "Bay window", "Pivoted window"],
    ans: 0,
    exp: "Louvered windows have inclined wooden or glass slats (louvers) angled at 45° to provide ventilation while ensuring privacy and rain exclusion.",
    tip: "Louvers are set at approximately 45° angle.",
    top: "Doors & Windows"
  },

  // --- FLOORS & ROOF TRUSSES ---
  {
    q: "In a granolithic floor finish, what is the hard-wearing top topping made of?",
    opts: ["Cement and hard crushed granite chippings graded from 6 mm down", "Crushed marble powder and white cement", "Lime surkhi mortar with sand", "Asphalt mastic with river silt"],
    ans: 0,
    exp: "Granolithic concrete flooring consists of cement, fine sand, and tough crushed granite or basalt stone chippings (6 mm down to 1 mm) in a 1:1:2 or 1:1.5:3 ratio to resist heavy industrial abrasion.",
    tip: "Granolithic flooring is designed specifically for factories, garages, and high wear areas.",
    top: "Floors & Roofs"
  },
  {
    q: "In a king post truss, which central member connects the ridge to the tie beam and acts in tension?",
    opts: ["King post", "Principal rafter", "Common rafter", "Strut"],
    ans: 0,
    exp: "The king post is the central vertical tension member in a king post truss that prevents sagging of the bottom tie beam.",
    tip: "In a timber king post truss: King post = Tension; Principal rafter = Compression; Tie beam = Tension; Strut = Compression.",
    top: "Floors & Roofs"
  },
  {
    q: "What is the typical economical span range for a king post roof truss?",
    opts: ["5 to 9 metres", "12 to 18 metres", "20 to 30 metres", "1 to 3 metres"],
    ans: 0,
    exp: "A king post truss is economically suitable for spans ranging from 5 to 9 metres. For spans between 9 and 14 metres, a queen post truss is used.",
    tip: "King post: 5 to 9 m. Queen post: 9 to 14 m.",
    top: "Floors & Roofs"
  },
  {
    q: "In a queen post truss, what is the horizontal member connecting the tops of the two queen posts called?",
    opts: ["Straining beam", "Straining sill", "Tie beam", "Ridge board"],
    ans: 0,
    exp: "The straining beam connects the tops of the two queen posts in a queen post truss and acts in compression.",
    tip: "Straining beam is at the top (compression); straining sill is at the bottom (compression); queen posts are vertical (tension).",
    top: "Floors & Roofs"
  },
  {
    q: "In pitched roof construction, what is the horizontal timber beam resting on trusses that supports the common rafters called?",
    opts: ["Purlin", "Battens", "Eaves board", "Cleat"],
    ans: 0,
    exp: "Purlins are longitudinal horizontal beams supported on roof trusses or walls that carry common rafters or roof sheeting.",
    tip: "Load path: Roof covering -> Battens -> Common rafters -> Purlins -> Principal rafters (Truss) -> Walls.",
    top: "Floors & Roofs"
  },

  // --- PLASTERING & POINTING ---
  {
    q: "Which plaster finish is obtained by throwing a wet mix of cement, coarse sand, and small pebbles onto the freshly applied second coat?",
    opts: ["Rough cast (pebble dash)", "Scraped finish", "Stucco finish", "Depeter finish"],
    ans: 0,
    exp: "Rough cast (pebble dash) finish is produced by splashing a wet mortar mix containing pea gravel or crushed stone chips against a wet floating coat.",
    tip: "Depeter finish is obtained by pressing clean pebbles by hand into wet plaster.",
    top: "Plastering & Pointing"
  },
  {
    q: "What type of pointing is formed by pressing mortar into joints and cutting the upper edge back about 6 to 8 mm to shed water?",
    opts: ["Struck or weathered pointing", "Flush pointing", "V-grooved pointing", "Tuck pointing"],
    ans: 0,
    exp: "Struck or weathered pointing has the upper edge pressed inward by 6-8 mm and the bottom edge flush with the brick face, allowing rain to run off cleanly.",
    tip: "Weathered/struck pointing sheds rainwater effectively from horizontal joints.",
    top: "Plastering & Pointing"
  },
  {
    q: "In masonry pointing, what is 'tuck pointing'?",
    opts: ["Raking out joints and pressing mortar flush with a groove cut along the centre in which white lime putty is tucked", "Leaving mortar flush with brick faces", "Forming a semicircular concave depression", "Pointing using polymer adhesive ribbons"],
    ans: 0,
    exp: "Tuck pointing involves filling joints flush with mortar matching the brick color, cutting a narrow groove (5 mm wide by 3 mm deep) in it, and tucking pure white lime putty into the groove.",
    tip: "Tuck pointing creates the optical illusion of ultra-thin, perfect joint lines.",
    top: "Plastering & Pointing"
  },

  // --- PLUMBING, SANITATION & TRAPS ---
  {
    q: "What is the primary function of a sanitary trap installed in plumbing fixtures?",
    opts: ["To maintain a water seal that prevents foul sewer gases from entering the building", "To filter suspended solids from wastewater", "To regulate water pressure in the pipes", "To eliminate grease by chemical reaction"],
    ans: 0,
    exp: "The principal function of any plumbing trap is to maintain a water seal of 25 to 75 mm depth that acts as a physical barrier preventing sewer gases and bad odours from backing into the building.",
    tip: "The water seal is the depth of water held between the crown weir and dip of the trap.",
    top: "Plumbing & Sanitation"
  },
  {
    q: "What is the minimum recommended depth of water seal in an intercepting trap installed at the boundary of a house drain?",
    opts: ["100 mm", "25 mm", "50 mm", "12 mm"],
    ans: 0,
    exp: "An intercepting trap installed at the boundary wall or disconnecting manhole has a deep water seal of about 100 mm to isolate municipal sewer gases from the house drainage system.",
    tip: "Ordinary fixture traps have 25 to 75 mm seal; intercepting trap has 100 mm water seal.",
    top: "Plumbing & Sanitation"
  },
  {
    q: "Which trap is installed outdoors to disconnect sullage discharge pipes (from bath and kitchen) from the foul house sewer?",
    opts: ["Gully trap", "Floor trap (Nahni trap)", "Intercepting trap", "S-trap"],
    ans: 0,
    exp: "A gully trap is an outdoor trap that receives waste water (sullage) from baths, sinks, and rainwater pipes and discharges it into the foul soil drain while maintaining a water seal of 50 to 75 mm.",
    tip: "Gully traps prevent foul sewer gas from entering sullage waste pipes.",
    top: "Plumbing & Sanitation"
  },
  {
    q: "What is the floor trap commonly installed in residential bathrooms to receive waste water from bathroom floors called?",
    opts: ["Nahni trap", "P-trap", "Interception trap", "Running trap"],
    ans: 0,
    exp: "A Nahni trap (or floor trap) is a shallow trap cast with a removable cast-iron or stainless steel grating at floor level to drain wash water with a water seal of about 40 to 50 mm.",
    tip: "Nahni trap is synonymous with floor trap.",
    top: "Plumbing & Sanitation"
  },
  {
    q: "Which plumbing drainage system utilizes a single vertical pipe that carries both human excreta (soil) and household sullage, with separate antisyphonage ventilation?",
    opts: ["One-pipe system", "Two-pipe system", "Single stack system", "Partially ventilated two-pipe system"],
    ans: 0,
    exp: "In a one-pipe system, a single main soil-waste stack conveys both foul soil from WCs and sullage from baths/sinks, with all traps ventilated by a separate parallel ventilating pipe.",
    tip: "Single stack system: only 1 pipe without separate vent pipe. One-pipe system: 1 discharge pipe + 1 vent pipe.",
    top: "Plumbing & Sanitation"
  },
  {
    q: "In a conventional two-pipe drainage system, what are the two separate vertical discharge pipes used for?",
    opts: ["One for soil (WC/urinals) and one for waste (bath/sinks)", "One for hot water and one for cold water", "One for freshwater and one for rainwater", "One for incoming supply and one for return flow"],
    ans: 0,
    exp: "In the two-pipe system, soil discharge from water closets/urinals is conveyed through a dedicated soil pipe, while waste from wash basins, baths, and kitchen sinks is carried through an entirely separate waste pipe.",
    tip: "Two-pipe system provides the highest sanitary isolation but is more expensive.",
    top: "Plumbing & Sanitation"
  },
  {
    q: "Loss of water seal in sanitary traps due to sudden suction created by the rapid discharge of water down a vertical soil stack is known as:",
    opts: ["Siphonage (induced siphonage)", "Evaporation", "Back pressure", "Capillary attraction"],
    ans: 0,
    exp: "Induced siphonage occurs when a heavy rush of water falling past a branch junction creates a partial vacuum that sucks the water seal out of unventilated fixture traps.",
    tip: "Anti-siphonage pipes supply atmospheric air to prevent induced siphonage.",
    top: "Plumbing & Sanitation"
  },
  {
    q: "What is the self-cleansing velocity generally designed for domestic sewers in India to prevent deposition of solid matter?",
    opts: ["0.6 to 0.75 m/s", "0.1 to 0.2 m/s", "2.5 to 3.5 m/s", "5.0 to 6.0 m/s"],
    ans: 0,
    exp: "A self-cleansing velocity of 0.60 to 0.75 m/s (at least once daily) ensures that organic and mineral particulates do not settle and cause sewer blockages.",
    tip: "Non-scouring velocity (maximum velocity to prevent pipe erosion) is about 2.5 to 3.0 m/s for concrete/stoneware pipes.",
    top: "Plumbing & Sanitation"
  },
  {
    q: "What is a vertical drop provided in a manhole to connect a sewer coming in at a much higher level than the main invert termed?",
    opts: ["Drop manhole", "Lamp hole", "Relief manhole", "Flushing manhole"],
    ans: 0,
    exp: "When the difference in invert levels between an incoming branch sewer and the outgoing main sewer exceeds 600 mm, a vertical down-pipe is installed inside or just outside the manhole wall, creating a drop manhole.",
    tip: "Drop manholes prevent splashing, turbulence, and sewage odors when elevation differences exceed 0.6 m.",
    top: "Plumbing & Sanitation"
  },
  {
    q: "In septic tank operation, what is the typical liquid detention period designed for domestic installations in India?",
    opts: ["12 to 36 hours", "30 minutes", "7 to 10 days", "30 days"],
    ans: 0,
    exp: "The liquid detention period for domestic septic tanks in India (per IS 2470) typically ranges from 12 to 36 hours (commonly taken as 24 hours).",
    tip: "Sludge digestion in a septic tank is anaerobic and takes several months, but sewage detention is 12-36 hrs.",
    top: "Plumbing & Sanitation"
  },
  {
    q: "What is the minimum recommended freeboard in a domestic septic tank above the top water level?",
    opts: ["0.3 metres (30 cm)", "0.05 metres", "1.0 metre", "1.5 metres"],
    ans: 0,
    exp: "A minimum freeboard of 300 mm (0.3 m) is required above the liquid level to accommodate scum accumulation and allow gas movement toward the vent pipe.",
    tip: "Standard freeboard for septic tank = 0.3 m.",
    top: "Plumbing & Sanitation"
  },

  // --- WATER SUPPLY ENGINEERING ---
  {
    q: "As per IS 1172, what is the basic domestic water consumption standard for Indian residences with full flushing systems?",
    opts: ["135 litres per head per day (lpcd)", "70 lpcd", "200 lpcd", "350 lpcd"],
    ans: 0,
    exp: "IS 1172 specifies a minimum domestic water consumption of 135 litres per capita per day (lpcd) for residences with full flushing systems.",
    tip: "For low-income groups/EWS with pit privies: 45 to 70 lpcd; normal residential: 135 lpcd; metropolitan cities: 200 lpcd.",
    top: "Water Supply"
  },
  {
    q: "What is the chemical name of the most commonly used coagulant in municipal water treatment plants?",
    opts: ["Aluminium sulphate (Alum)", "Ferrous sulphate", "Sodium carbonate", "Copper sulphate"],
    ans: 0,
    exp: "Alum [Al2(SO4)3·18H2O] is the universal coagulant used in municipal water treatment; it reacts with natural alkalinity to form a sticky floc of aluminium hydroxide.",
    tip: "Alum performs best at an optimum water pH range of 6.5 to 8.5.",
    top: "Water Supply"
  },
  {
    q: "In slow sand filtration, the biological gelatinous layer formed on the top sand surface that performs bacterial purification is called:",
    opts: ["Schmutzdecke (dirty skin)", "Slime matrix", "Floc blanket", "Detritus ring"],
    ans: 0,
    exp: "The Schmutzdecke (or hypogeal layer) is a biologically active zoogleal skin that forms on top of a slow sand filter, removing over 98% of bacteria and fine impurities.",
    tip: "Slow sand filters clean water primarily through biological action via the Schmutzdecke.",
    top: "Water Supply"
  },
  {
    q: "How does the rate of filtration of a rapid sand filter compare to that of a slow sand filter?",
    opts: ["30 to 50 times faster", "2 times faster", "Equal", "10 times slower"],
    ans: 0,
    exp: "A rapid sand filter operates at 3,000 to 6,000 litres/m²/hour, which is approximately 30 to 50 times faster than a slow sand filter (100 to 200 litres/m²/hour).",
    tip: "Slow sand filter: 100-200 L/m²/hr; Rapid sand filter: 3000-6000 L/m²/hr.",
    top: "Water Supply"
  },
  {
    q: "How are rapid sand filters cleaned when the head loss reaches its permissible maximum?",
    opts: ["Backwashing with treated water and compressed air", "Scraping the top 15 to 25 mm layer of sand manually", "Adding hydrochloric acid", "Letting it dry completely in the sun"],
    ans: 0,
    exp: "Rapid sand filters are cleaned in 10-15 minutes by reversing water flow (backwashing) under pressure, often assisted by compressed air to agitate the media.",
    tip: "Slow sand filters are cleaned by scraping the top layer; rapid sand filters are cleaned by backwashing.",
    top: "Water Supply"
  },
  {
    q: "What is the chlorination practice where chlorine is added to water until the chlorine demand is fully satisfied and free residual chlorine begins to form termed?",
    opts: ["Break-point chlorination", "Super chlorination", "Pre-chlorination", "Dechlorination"],
    ans: 0,
    exp: "Break-point chlorination represents the point beyond which any further addition of chlorine results in a proportional increase in free available residual chlorine.",
    tip: "Residual chlorine beyond the break-point destroys pathogens and provides residual safety.",
    top: "Water Supply"
  },
  {
    q: "What is the recommended minimum free residual chlorine that should remain in drinking water at the consumer tap after 30 minutes of contact time?",
    opts: ["0.2 mg/l (ppm)", "1.5 mg/l", "5.0 mg/l", "0.01 mg/l"],
    ans: 0,
    exp: "A minimum free residual chlorine of 0.2 mg/l (0.2 ppm) ensures disinfection protection against recontamination in the distribution network.",
    tip: "Normal residual: 0.2 mg/L; during epidemic outbreaks: up to 0.5 mg/L.",
    top: "Water Supply"
  },
  {
    q: "Which valve is installed at the lowest points in a water distribution network to scour and flush out accumulated sand and silt?",
    opts: ["Scour valve (blow-off valve)", "Sluice valve", "Air relief valve", "Check valve"],
    ans: 0,
    exp: "Scour valves (blow-off or drain valves) are located at depression points along pipelines to discharge sediment and completely empty the main during repairs.",
    tip: "Air valves go to summits (high points); scour valves go to depressions (low points).",
    top: "Water Supply"
  },
  {
    q: "Which valve allows water flow in one direction only and automatically prevents backflow?",
    opts: ["Check valve (reflux or non-return valve)", "Gate valve", "Globe valve", "Needle valve"],
    ans: 0,
    exp: "A check valve (also called a reflux valve or non-return valve - NRV) automatically prevents backflow of water, protecting pumping units from reverse surge when shut down.",
    tip: "Reflux valve = Non-return valve (NRV). Always placed on pump discharge lines.",
    top: "Water Supply"
  },
  {
    q: "Which water distribution pipe layout is most suitable for planned modern cities designed on a rectangular grid pattern?",
    opts: ["Grid-iron system (reticulation system)", "Dead-end system (tree system)", "Radial system", "Ring system"],
    ans: 0,
    exp: "The grid-iron system (interlaced/reticulation system) connects mains, submains, and branches in an interconnected loop, ideal for planned grid layouts with no dead ends.",
    tip: "Dead-end system suits haphazard towns; grid-iron suits planned cities.",
    top: "Water Supply"
  },
  {
    q: "What is a disadvantage of the dead-end (tree) water distribution layout?",
    opts: ["Stagnation of water at terminal points causing degradation of quality", "High initial pipe cost", "Requires too many valves", "Difficult calculation of pipe diameters"],
    ans: 0,
    exp: "Dead-end systems create terminal ends where water stagnates, leading to sediment buildup, taste/odour issues, and bacterial growth if not regularly flushed.",
    tip: "Dead-end systems are cheap to construct but suffer from stagnation at dead ends.",
    top: "Water Supply"
  },

  // --- BUILDING DRAWING & REGULATIONS ---
  {
    q: "What is the ratio of the total covered built-up area of all floors of a building to the total plot area known as?",
    opts: ["Floor Area Ratio (FAR)", "Plinth area ratio", "Carpet area ratio", "Coverage ratio"],
    ans: 0,
    exp: "Floor Area Ratio (FAR) or Floor Space Index (FSI) is defined as: Total covered area on all floors / Total plot area.",
    tip: "FAR = Total built-up area on all floors / Plot area.",
    top: "Building Regulations"
  },
  {
    q: "What is the line beyond which no part of any building may project towards a public street as demarcated by local municipal authorities called?",
    opts: ["Building line", "Control line", "Property line", "Setback line"],
    ans: 0,
    exp: "The building line defines the permissible limit up to which the plinth or exterior wall of a building can be constructed facing the road.",
    tip: "Control line lies further back than building line to govern future expansions.",
    top: "Building Regulations"
  },
  {
    q: "What is the minimum habitable room area permitted for a single-occupancy living room under the National Building Code (NBC) of India?",
    opts: ["9.5 m² (with minimum width of 2.4 m)", "5.0 m²", "15.0 m²", "20.0 m²"],
    ans: 0,
    exp: "The National Building Code (NBC) specifies that the minimum area of a habitable room in a dwelling unit should not be less than 9.5 m² with a minimum room width of 2.4 m.",
    tip: "NBC: Habitable room min area = 9.5 m², min width = 2.4 m.",
    top: "Building Regulations"
  },
  {
    q: "Under standard building bye-laws, what is the minimum clear ceiling height required for a residential habitable room?",
    opts: ["2.75 metres", "2.10 metres", "3.60 metres", "1.80 metres"],
    ans: 0,
    exp: "NBC guidelines require a minimum clear height of 2.75 metres (measured from floor to ceiling) for habitable rooms in residential buildings.",
    tip: "Habitable rooms min height = 2.75 m; bathrooms/WCs min height = 2.1 m.",
    top: "Building Regulations"
  },
  {
    q: "In an architectural working drawing, what does a section line marked 'X-X' represent?",
    opts: ["The imaginary vertical cutting plane along which the internal structure is revealed", "The property boundary line", "The center line of the main sewer", "The overhead electrical cable"],
    ans: 0,
    exp: "A section line (cutting-plane line) indicates where an imaginary vertical plane passes through the building to expose internal construction details.",
    tip: "Section views show interior heights, thicknesses, and structural connections.",
    top: "Building Drawing"
  },
  {
    q: "What is the standard drawing scale typically adopted for architectural municipal submission site plans?",
    opts: ["1:500 to 1:1000", "1:10 to 1:20", "1:1 to 1:5", "1:10000 to 1:25000"],
    ans: 0,
    exp: "Site plans submitted to local planning bodies are drawn to a scale not less than 1:500 (or 1:1000 for large layouts) to show boundaries, access roads, and setbacks.",
    tip: "Key plans: 1:10000; Site plans: 1:500 to 1:1000; Building plans: 1:100.",
    top: "Building Drawing"
  },
  {
    q: "Which line style is standardly used on building drawings to indicate overhead structural beams or roof projections not visible in plan?",
    opts: ["Dashed line (hidden line)", "Thick continuous line", "Chain thin line with two dots", "Wavy continuous line"],
    ans: 0,
    exp: "Dashed lines (short dashes) represent hidden details, lintels, overhead chajjas, or beams that lie above the horizontal plan cutting plane.",
    tip: "Overhead features are drawn as hidden (dashed) lines on floor plans.",
    top: "Building Drawing"
  },
  {
    q: "What is the usable floor area of an apartment excluding walls, columns, balconies, and utility shafts termed?",
    opts: ["Carpet area", "Plinth area", "Super built-up area", "Gross external area"],
    ans: 0,
    exp: "Carpet area is the net usable floor area of an apartment that can be covered by a carpet, excluding the thickness of internal and external walls and common areas.",
    tip: "Carpet area is typically 70% to 75% of the plinth area.",
    top: "Building Regulations"
  }
];

let addedCount = 0;
for (const item of m10Part8) {
  if (addQ(item, 10, 'mod-10', 'Building Construction & Services')) {
    addedCount++;
  }
}

console.log(`Module 10 Part 8 batch processed. Total added: ${addedCount}`);
db.bankQuestions.push(...addedList);
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
