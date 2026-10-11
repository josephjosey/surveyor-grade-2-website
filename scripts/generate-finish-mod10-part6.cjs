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

console.log('Existing unique masks before Mod 10 Part 6:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-p10f-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-u${c++}`;
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
    createdAt: '2026-10-11T20:45:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 95 DISTINCT QUESTIONS FOR MODULE 10 (PART 6 - MASONRY, GLASS, PLASTICS, PAVEMENTS & ESTIMATION)
const m10Part6 = [
  // --- MASONRY TYPES & CAVITY WALLS ---
  {
    q: 'In stone masonry, what is "Ashlar Masonry"?',
    opts: ['Masonry constructed using finely dressed, perfectly squared stone blocks with thin, uniform mortar joints not exceeding 3 mm', 'Masonry using rough, unhewn boulders', 'Masonry without any mortar', 'Masonry made of broken clay bricks'],
    ans: 0,
    exp: 'Ashlar masonry uses accurately dressed, square-cut stone blocks with sharp arrises and very thin mortar joints (≤ 3 mm), providing maximum strength and aesthetic finish.',
    tip: 'Ashlar Masonry = finely dressed square stone blocks with thin mortar joints (≤ 3 mm).',
    top: 'Building Construction - Masonry'
  },
  {
    q: 'In stone masonry, what is "Random Rubble Masonry"?',
    opts: ['Masonry constructed using rough, quarry-faced stones of irregular shapes and sizes, where stones are not laid in continuous horizontal courses', 'Masonry using fine polished marble blocks', 'Masonry made of precast concrete bricks', 'Masonry laid on timber piles'],
    ans: 0,
    exp: 'Random rubble masonry uses stones of varying sizes and irregular shapes laid without forming regular horizontal courses.',
    tip: 'Random Rubble Masonry uses irregular quarry stones laid without uniform courses.',
    top: 'Building Construction - Masonry'
  },
  {
    q: 'What is a "Cavity Wall" in building construction, and what is its primary technical advantage?',
    opts: ['A wall consisting of two separate masonry leaves separated by a continuous 40 mm to 100 mm air space, preventing rainwater penetration and providing thermal and sound insulation', 'A wall with hollow concrete columns', 'A collapsed foundation wall', 'A wall with open arches'],
    ans: 0,
    exp: 'Cavity walls have an outer leaf, inner leaf, and an intervening air gap tied by metal wall ties. The air gap acts as an absolute barrier against dampness and insulates against heat and sound.',
    tip: 'Cavity walls prevent moisture ingress and provide thermal and sound insulation.',
    top: 'Building Construction - Masonry'
  },
  {
    q: 'What type of metal ties are standardly embedded across the cavity of a cavity wall to bond the inner and outer masonry leaves together?',
    opts: ['Corrosion-resistant galvanized mild steel or stainless steel wall ties with a central drip crimp', 'Plain soft copper wire', 'Raw untreated steel bars', 'Aluminum strips'],
    ans: 0,
    exp: 'Galvanized iron or stainless steel wall ties (twisted or butterfly type with a central downward drip crimp) tie the leaves together while preventing moisture bridging.',
    tip: 'Wall ties in cavity walls have a central drip to prevent moisture crossing to the inner leaf.',
    top: 'Building Construction - Masonry'
  },
  {
    q: 'What is a "Raking Shore" in building shoring systems?',
    opts: ['An inclined wooden or steel strut placed between the ground and an unstable or bulging wall to provide lateral support', 'A horizontal strut between two parallel walls', 'A vertical post supporting a needle beam', 'A scaffolding ladder'],
    ans: 0,
    exp: 'A raking shore uses inclined timbers (rakers) sloping at 45° to 75° from a ground sole plate to a wall plate to shore up leaning or damaged walls.',
    tip: 'Raking shore = inclined strut supporting a leaning wall from the ground.',
    top: 'Building Construction - Shoring'
  },
  {
    q: 'What is a "Flying Shore" (Horizontal Shore)?',
    opts: ['A horizontal shoring system of struts and braces erected between two parallel facing walls of adjacent buildings to support both walls without touching the ground', 'A shore hanging from an airplane', 'A crane lifting scaffolding', 'A vertical foundation pile'],
    ans: 0,
    exp: 'Flying shores provide horizontal support between two parallel party walls across an alley when an intermediate building is demolished, keeping both walls stable.',
    tip: 'Flying shore = horizontal strut system between two facing walls across a space.',
    top: 'Building Construction - Shoring'
  },
  {
    q: 'What is a "Dead Shore"?',
    opts: ['A vertical timber or steel column post used in conjunction with a horizontal needle beam to carry the dead weight of upper walls while creating large openings below', 'An abandoned foundation pile', 'A broken scaffolding pole', 'A decayed tree trunk'],
    ans: 0,
    exp: 'Dead shores are vertical timber posts supporting horizontal needle beams inserted through wall holes, carrying superincumbent wall loads during underpinning or opening creation.',
    tip: 'Dead shores = vertical posts supporting needle beams during wall opening creation.',
    top: 'Building Construction - Shoring'
  },

  // --- GLASS, PLASTICS & SPECIAL MATERIALS ---
  {
    q: 'What type of glass is Toughened Glass (Tempered Glass), and what is its characteristic failure mode under breakage?',
    opts: ['Glass subjected to controlled thermal tempering, which is 4 to 5 times stronger than ordinary glass and shatters into small, blunt, harmless granular fragments when fractured', 'Glass that never breaks', 'Glass that shatters into long razor-sharp daggers', 'Glass coated with plastic paint'],
    ans: 0,
    exp: 'Tempered glass is heated to 650°C and rapidly air-quenched, putting outer surfaces into deep compression. When broken, it fractures into dull granular dice rather than sharp shards.',
    tip: 'Toughened (Tempered) glass is 4-5x stronger and breaks into blunt granular cubes.',
    top: 'Building Materials - Special'
  },
  {
    q: 'What is "Laminated Glass" (Safety Glass), and where is it widely mandated?',
    opts: ['A composite glass sandwich formed by bonding two or more glass sheets with a tough, transparent polyvinyl butyral (PVB) plastic interlayer, used for automobile windshields', 'Glass painted in layers', 'Glass reinforced with iron wire', 'Glass with air in between'],
    ans: 0,
    exp: 'Laminated glass bonds glass sheets with a PVB film. On impact, the glass cracks but fragments adhere to the plastic interlayer, preventing penetrating injury.',
    tip: 'Laminated glass has a PVB interlayer that retains shattered glass (used for windshields).',
    top: 'Building Materials - Special'
  },
  {
    q: 'What is "Wired Glass"?',
    opts: ['Flat glass rolled with an embedded internal steel wire mesh that holds the glass fragments together in the event of fire, providing fire resistance', 'Glass carrying electric heating wires', 'Glass used in telegraph poles', 'Glass with a magnetic field'],
    ans: 0,
    exp: 'Wired glass has embedded steel wire netting. Under fire exposure, the glass may crack but the wire grid holds it intact, preventing flame and smoke passage.',
    tip: 'Wired glass contains embedded steel wire mesh for fire resistance.',
    top: 'Building Materials - Special'
  },
  {
    q: 'In polymer materials, what fundamental property distinguishes Thermoplastics from Thermosetting Plastics?',
    opts: ['Thermoplastics soften when heated and harden upon cooling repeatedly without chemical change, whereas Thermosetting plastics undergo irreversible chemical cross-linking on heating and cannot be remelted', 'Thermoplastics conduct electricity while thermosets do not', 'Thermosets dissolve in water', 'There is no difference'],
    ans: 0,
    exp: 'Thermoplastics (PVC, polyethylene, nylon) can be repeatedly remelted and reshaped. Thermosetting plastics (Bakelite, epoxy) cure permanently by chemical cross-linking.',
    tip: 'Thermoplastics can be remelted and recycled; Thermosets cure permanently and cannot be remelted.',
    top: 'Building Materials - Special'
  },
  {
    q: 'Which plastic resin is a classic example of a Thermosetting polymer used for electrical switches and laminates?',
    opts: ['Bakelite (Phenol-Formaldehyde resin)', 'Polyvinyl Chloride (PVC)', 'Polyethylene (PE)', 'Polystyrene (PS)'],
    ans: 0,
    exp: 'Bakelite (phenol formaldehyde) is a hard, heat-resistant, rigid thermosetting polymer widely used for electrical switchgear, sockets, and appliance handles.',
    tip: 'Bakelite is a classic Thermosetting plastic (phenol-formaldehyde).',
    top: 'Building Materials - Special'
  },

  // --- HIGHWAY PAVEMENTS: FLEXIBLE VS RIGID ---
  {
    q: 'What is the primary structural mechanism by which a "Flexible Pavement" (bituminous road) distributes vehicular wheel loads down to the subgrade soil?',
    opts: ['Through grain-to-grain contact pressure distribution across progressively deeper layers in a truncated pyramid of stress', 'Through slab bending flexural beam action', 'Through steel rebar tension', 'Through pneumatic buoyancy'],
    ans: 0,
    exp: 'Flexible pavements distribute concentrated wheel loads through inter-granular particle contact across the bituminous wear course, base, and sub-base over a broad subgrade area.',
    tip: 'Flexible pavements distribute loads via grain-to-grain contact across layers.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is the primary structural mechanism by which a "Rigid Pavement" (Portland cement concrete road) carries and transfers vehicular wheel loads?',
    opts: ['By slab flexural beam action (high modulus of elasticity of concrete distributing loads over a wide area by bending resistance)', 'By grain-to-grain contact between aggregate stones', 'By plastic deformation into wheel ruts', 'By melting under heat'],
    ans: 0,
    exp: 'Rigid pavements act as elastic concrete slabs with high flexural rigidity, spreading wheel loads over large subgrade areas by slab bending action.',
    tip: 'Rigid pavements carry wheel loads primarily through slab flexural beam bending action.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is the function of "Dowel Bars" installed across transverse expansion and contraction joints in concrete rigid pavements?',
    opts: ['Smooth round steel bars that transfer heavy shear wheel loads across the joint while allowing horizontal thermal expansion and contraction of adjacent slabs', 'Deformed bars holding slabs tightly together', 'Piles preventing settlement', 'Drainage conduits for water'],
    ans: 0,
    exp: 'Dowel bars are smooth steel bars lubricated on one half to allow longitudinal sliding as the concrete expands/contracts, while transferring transverse shear wheel loads.',
    tip: 'Dowel bars transfer shear loads across joints while permitting horizontal slab movement.',
    top: 'Irrigation & Highway Engineering'
  },
  {
    q: 'What is the function of "Tie Bars" placed along the longitudinal center joint of a two-lane concrete road pavement?',
    opts: ['Deformed rebar ties that hold adjacent traffic slabs together transversely, preventing lane separation and lateral drifting', 'Smooth bars allowing expansion', 'Bars providing vertical drainage', 'Cables for road lighting'],
    ans: 0,
    exp: 'Tie bars are deformed steel bars bonded firmly into both slabs across longitudinal joints to prevent adjacent lanes from drifting apart under heavy traffic.',
    tip: 'Tie bars prevent transverse separation of adjacent concrete pavement lanes.',
    top: 'Irrigation & Highway Engineering'
  },

  // --- ESTIMATION: CONTRACTS, TENDERS & DEPRECIATION ---
  {
    q: 'What is an "Item Rate Contract" (Unit Price Contract) in public works engineering?',
    opts: ['A contract where the contractor quotes individual unit rates for each specific item of work listed in the Bill of Quantities (BOQ), with final payment based on measured quantities', 'A contract for a single fixed sum of money', 'A contract where contractor gets materials free', 'A verbal handshake agreement'],
    ans: 0,
    exp: 'In an item rate contract, contractors quote unit prices against detailed items in the schedule. Work is measured on site, and payments equal quantity x quoted rate.',
    tip: 'Item Rate Contract: contractor quotes unit rates for each BOQ item; paid on actual measurements.',
    top: 'Estimation & Costing'
  },
  {
    q: 'What is an "Earnest Money Deposit" (EMD) submitted along with a construction tender?',
    opts: ['A deposit (typically 1% to 2% of the estimated project cost) submitted by bidders to demonstrate bona fide intent and guarantee they will not withdraw their tender or refuse to sign the contract', 'A bribe to the engineer', 'Payment for purchasing tender forms', 'Advance payment for equipment'],
    ans: 0,
    exp: 'EMD (1-2% of estimated cost) ensures genuine bidding; if a winning bidder refuses to accept the awarded contract, their EMD is forfeited to the department.',
    tip: 'Earnest Money Deposit (EMD) = 1% to 2% of estimate (ensures serious bidder commitment).',
    top: 'Estimation & Costing'
  },
  {
    q: 'What is a "Security Deposit" (Performance Security) retained by the client department during construction?',
    opts: ['A sum deducted from running bills (totaling roughly 10% of contract value) to ensure complete contract fulfillment and rectify defects during the defect liability period', 'Insurance against theft of tools', 'Salary for security guards on site', 'Advance payment to subcontractors'],
    ans: 0,
    exp: 'Security Deposit (typically 10% total) guarantees quality execution and provides funds for the owner to fix defects if the contractor fails to honor warranty obligations.',
    tip: 'Security Deposit (approx. 10%) guarantees performance and defect rectification.',
    top: 'Estimation & Costing'
  },
  {
    q: 'In the Straight Line Method of property depreciation, what is the formula for the annual depreciation amount (D)?',
    opts: ['D = (C - S) / n (where C is original cost, S is scrap value, and n is total utility lifespan in years)', 'D = C / n', 'D = (C + S) / n', 'D = C * (1 - S)^n'],
    ans: 0,
    exp: 'The straight line method assumes uniform loss of value each year: Annual Depreciation D = (Original Cost - Scrap Value) / Design Lifespan = (C - S) / n.',
    tip: 'Straight Line Depreciation: D = (C - S) / n per year.',
    top: 'Estimation & Costing'
  },
  {
    q: 'In earthwork excavation estimation, what are the standard values for "Lead" and "Lift" included in basic schedule rates under PWD specifications?',
    opts: ['Standard Lead = 50 meters, Standard Lift = 1.5 meters', 'Lead = 100 meters, Lift = 3.0 meters', 'Lead = 10 meters, Lift = 0.5 meters', 'Lead = 25 meters, Lift = 2.0 meters'],
    ans: 0,
    exp: 'Standard earthwork rates include horizontal conveyance up to 50 meters (Lead) and vertical haul up to 1.5 meters (Lift). Additional lead/lift attracts extra rate stages.',
    tip: 'Standard Lead = 50 m. Standard Lift = 1.5 m.',
    top: 'Estimation & Costing'
  }
];

m10Part6.forEach(q => addQ(q, 10, 'mod-10', 'Building Construction & Materials'));
console.log('Module 10 Part 6 batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
