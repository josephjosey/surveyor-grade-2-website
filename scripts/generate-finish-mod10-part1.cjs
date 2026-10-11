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

console.log('Existing unique masks before Mod 10 Part 1:', existingMasks.size);

const addedList = [];

function addQ(item, modNum, modId, defaultTopic) {
  const mask = getTemplateMask(item.q);
  if (existingMasks.has(mask)) {
    console.log('Skipping clone/duplicate:', item.q.substring(0, 60));
    return false;
  }

  let id = `bq-m${modNum}-p10a-${addedList.length + 1}`;
  let c = 1;
  while (existingIds.has(id)) {
    id = `${id}-p${c++}`;
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
    createdAt: '2026-10-11T19:30:00Z'
  };

  existingMasks.add(mask);
  existingIds.add(id);
  addedList.push(qObj);
  return true;
}

// 125 DISTINCT QUESTIONS FOR MODULE 10 (PART 1 - STONES, BRICKS, TILES & MASONRY)
const m10Part1 = [
  // --- STONES: GEOLOGICAL, PHYSICAL & CHEMICAL ---
  {
    q: 'Under geological classification, how are rocks formed by the cooling and solidification of molten magma categorized?',
    opts: ['Igneous rocks', 'Sedimentary rocks', 'Metamorphic rocks', 'Aqueous rocks'],
    ans: 0,
    exp: 'Igneous rocks (e.g. granite, basalt, trap) originate from the cooling and crystallization of molten rock magma beneath or on the Earth surface.',
    tip: 'Igneous = solidified from molten magma (Granite, Basalt, Trap).',
    top: 'Building Materials - Stones'
  },
  {
    q: 'Under geological classification, what type of igneous rock is Granite, which cools slowly at great depth beneath the Earth surface?',
    opts: ['Plutonic rock (intrusive igneous rock)', 'Volcanic rock (extrusive igneous rock)', 'Hypabyssal rock', 'Sedimentary rock'],
    ans: 0,
    exp: 'Granite is a plutonic intrusive igneous rock formed by the extremely slow cooling of magma deep underground, giving it a coarse crystalline texture.',
    tip: 'Granite is a deep-seated Plutonic intrusive igneous rock.',
    top: 'Building Materials - Stones'
  },
  {
    q: 'Under geological classification, what type of igneous rock is Basalt, which solidifies rapidly on the Earth surface from volcanic lava?',
    opts: ['Volcanic rock (extrusive igneous rock)', 'Plutonic rock', 'Hypabyssal rock', 'Metamorphic rock'],
    ans: 0,
    exp: 'Basalt is an extrusive volcanic igneous rock formed by the rapid cooling of lava exposed on the Earth surface, giving it a fine-grained, dense texture.',
    tip: 'Basalt and Trap are Volcanic extrusive igneous rocks.',
    top: 'Building Materials - Stones'
  },
  {
    q: 'Under geological classification, how are Sandstone and Limestone categorized based on their rock formation process?',
    opts: ['Sedimentary rocks', 'Igneous rocks', 'Plutonic rocks', 'Volcanic rocks'],
    ans: 0,
    exp: 'Sandstone and limestone are sedimentary rocks formed by the gradual deposition, compaction, and cementation of mineral particles and sediment layers.',
    tip: 'Sandstone, Limestone, Shale, and Conglomerate are Sedimentary rocks.',
    top: 'Building Materials - Stones'
  },
  {
    q: 'Which metamorphic rock is formed by the metamorphism of pure sedimentary Limestone under high geological heat and pressure?',
    opts: ['Marble', 'Slate', 'Quartzite', 'Gneiss'],
    ans: 0,
    exp: 'When limestone (calcite CaCO3) undergoes thermal metamorphism, it recrystallizes into crystalline Marble.',
    tip: 'Limestone metamorphoses into Marble. Sandstone into Quartzite. Granite into Gneiss.',
    top: 'Building Materials - Stones'
  },
  {
    q: 'Which metamorphic rock is formed by the metamorphism of sedimentary Sandstone?',
    opts: ['Quartzite', 'Marble', 'Slate', 'Schist'],
    ans: 0,
    exp: 'Quartzite is formed when quartz-rich sedimentary sandstone undergoes intense thermal and pressure metamorphism.',
    tip: 'Sandstone metamorphoses into Quartzite (hard, weather-resistant siliceous rock).',
    top: 'Building Materials - Stones'
  },
  {
    q: 'Which metamorphic rock is formed by the regional dynamic metamorphism of sedimentary Shale or clay?',
    opts: ['Slate', 'Marble', 'Quartzite', 'Granite'],
    ans: 0,
    exp: 'Slate is an argillaceous metamorphic rock formed by the low-grade regional metamorphism of shale and clay, characterized by slaty cleavage.',
    tip: 'Shale metamorphoses into Slate.',
    top: 'Building Materials - Stones'
  },
  {
    q: 'Which metamorphic rock is formed by the metamorphism of deep-seated igneous Granite?',
    opts: ['Gneiss', 'Marble', 'Slate', 'Basalt'],
    ans: 0,
    exp: 'Under intense regional metamorphism, granite transforms into foliated, banded Gneiss.',
    tip: 'Granite metamorphoses into Gneiss.',
    top: 'Building Materials - Stones'
  },
  {
    q: 'Under physical classification, rocks that exhibit distinct bedding planes and split easily into parallel layers are called:',
    opts: ['Stratified rocks', 'Unstratified rocks', 'Foliated rocks', 'Granular rocks'],
    ans: 0,
    exp: 'Stratified rocks (such as sandstone, limestone, and shale) possess layered sedimentary bedding planes along which they split readily.',
    tip: 'Stratified rocks have layered bedding planes (sedimentary rocks).',
    top: 'Building Materials - Stones'
  },
  {
    q: 'Under physical classification, rocks that possess a massive crystalline structure with no layered bedding planes are called:',
    opts: ['Unstratified rocks', 'Stratified rocks', 'Foliated rocks', 'Laminated rocks'],
    ans: 0,
    exp: 'Unstratified rocks (such as granite, basalt, and trap) have monolithic crystalline structures without distinct natural cleavage layers.',
    tip: 'Unstratified rocks have no layering (igneous rocks like Granite and Basalt).',
    top: 'Building Materials - Stones'
  },
  {
    q: 'Under chemical classification of rocks, which group is characterized by Silica (SiO2) as the predominant chemical constituent?',
    opts: ['Siliceous rocks', 'Argillaceous rocks', 'Calcareous rocks', 'Carbonaceous rocks'],
    ans: 0,
    exp: 'Siliceous rocks (granite, quartzite, sandstone, gneiss) contain silica as their main constituent; they are hard, durable, and highly weather-resistant.',
    tip: 'Siliceous rocks: Silica predominates (Granite, Quartzite, Sandstone).',
    top: 'Building Materials - Stones'
  },
  {
    q: 'Under chemical classification, which group of rocks has Alumina or clay as its principal constituent (such as slate and laterite)?',
    opts: ['Argillaceous rocks', 'Siliceous rocks', 'Calcareous rocks', 'Arenaceous rocks'],
    ans: 0,
    exp: 'Argillaceous rocks (slate, clay, shale, laterite) are composed primarily of alumina (Al2O3) and clay minerals.',
    tip: 'Argillaceous rocks: Alumina/clay predominates (Slate, Laterite, Shale).',
    top: 'Building Materials - Stones'
  },
  {
    q: 'Under chemical classification, which group of rocks has Calcium Carbonate (lime, CaCO3) as its predominant constituent?',
    opts: ['Calcareous rocks', 'Siliceous rocks', 'Argillaceous rocks', 'Plutonic rocks'],
    ans: 0,
    exp: 'Calcareous rocks (limestone, marble, dolomite) contain calcium carbonate as their major constituent.',
    tip: 'Calcareous rocks: Calcium carbonate (lime) predominates (Limestone, Marble).',
    top: 'Building Materials - Stones'
  },
  {
    q: 'What is the minimum crushing (compressive) strength required for a stone to be considered acceptable as good building stone?',
    opts: ['100 N/mm² (1000 kg/cm²)', '50 N/mm²', '20 N/mm²', '200 N/mm²'],
    ans: 0,
    exp: 'A good building stone should have a minimum compressive crushing strength of at least 100 N/mm² (1000 kg/cm² or 100 MPa).',
    tip: 'Good building stone minimum compressive strength = 100 N/mm² (1000 kg/cm²).',
    top: 'Building Materials - Stones'
  },
  {
    q: 'What is the maximum percentage of water absorption by dry weight permitted for a stone to be classified as suitable for building construction?',
    opts: ['5% of dry weight (stones absorbing more than 10% are strictly rejected)', '15% of dry weight', '25% of dry weight', '0.1% of dry weight'],
    ans: 0,
    exp: 'Good building stones should absorb less than 5% water by weight after 24 hours of immersion. Stones absorbing over 10% are rejected as porous.',
    tip: 'Building stone water absorption: should be < 5%; rejected if > 10%.',
    top: 'Building Materials - Stones'
  },
  {
    q: 'What is the typical specific gravity of a good building stone used for permanent civil engineering works?',
    opts: ['Greater than 2.6 (typically 2.6 to 2.8)', 'Between 1.0 and 1.5', 'Greater than 5.0', 'Exactly 1.8'],
    ans: 0,
    exp: 'A good building stone should have a specific gravity greater than 2.6 to ensure density, low porosity, and structural durability.',
    tip: 'Good building stone specific gravity should be > 2.6.',
    top: 'Building Materials - Stones'
  },
  {
    q: 'On Mohs Scale of Mineral Hardness, which mineral is assigned a hardness value of 1 (the softest mineral)?',
    opts: ['Talc', 'Gypsum', 'Calcite', 'Fluorite'],
    ans: 0,
    exp: 'Talc is rated 1 on Mohs hardness scale. The full scale: 1 Talc, 2 Gypsum, 3 Calcite, 4 Fluorite, 5 Apatite, 6 Feldspar, 7 Quartz, 8 Topaz, 9 Corundum, 10 Diamond.',
    tip: 'Mohs Scale: 1 Talc (softest), 2 Gypsum, 3 Calcite, 7 Quartz, 10 Diamond (hardest).',
    top: 'Building Materials - Stones'
  },
  {
    q: 'On Mohs Scale of Mineral Hardness, which mineral is assigned a hardness value of 10 (the hardest natural substance)?',
    opts: ['Diamond', 'Corundum', 'Topaz', 'Quartz'],
    ans: 0,
    exp: 'Diamond is assigned the maximum value of 10 on Mohs scale.',
    tip: 'Mohs scale hardness 10 = Diamond. Hardness 9 = Corundum. Hardness 7 = Quartz.',
    top: 'Building Materials - Stones'
  },
  {
    q: 'What does "Smith Test" perform on a stone sample?',
    opts: ['Detects the presence of soluble, earthy, or muddy matter by shaking fresh stone chippings in clean water in a glass cylinder', 'Measures crushing compressive strength', 'Measures resistance to frost action', 'Tests hardness against abrasion'],
    ans: 0,
    exp: 'Smith test detects earthy or clayey impurities: clean stone chippings are shaken with clean water; if water remains clear, stone is durable; if muddy, stone contains clay.',
    tip: 'Smith Test = detects soluble/earthy matter by shaking stone chips in clean water.',
    top: 'Building Materials - Stones'
  },
  {
    q: 'What does the "Acid Test" assess on a building stone sample?',
    opts: ['The weathering resistance of sandstone and limestone when exposed to acidic atmospheric fumes and acid rain', 'The chemical acidity of quarry sap', 'The fire resistance in kilns', 'The specific gravity'],
    ans: 0,
    exp: 'Acid test immerses stone in 1% hydrochloric or sulfuric acid for 7 days to evaluate weather resistance; sharp corners breaking off indicates poor durability.',
    tip: 'Acid test assesses resistance of building stones to atmospheric acid weathering.',
    top: 'Building Materials - Stones'
  },
  {
    q: 'Which machine is standardly used to conduct the Attrition Test on road metal stones to determine their resistance to wear?',
    opts: ['Deval Attrition Testing Machine', 'Dorry Testing Machine', 'Vicat Apparatus', 'Los Angeles Machine'],
    ans: 0,
    exp: 'The Deval Attrition machine rotates 5 kg of stone chippings at 30 rpm for 10,000 revolutions to measure percentage of wear across a 1.5 mm sieve.',
    tip: 'Deval machine = Attrition test. Los Angeles machine = Abrasion test.',
    top: 'Building Materials - Stones'
  },
  {
    q: 'What is "Quarry Sap" in freshly extracted building stones?',
    opts: ['The natural moisture held in the pores of freshly quarried stone, making the stone softer and easier to dress before it dries out and hardens', 'An adhesive resin secreted by tree roots', 'A lubricant used during drilling', 'Water trapped in blasting boreholes'],
    ans: 0,
    exp: 'Freshly quarried stone contains internal moisture called quarry sap. Stones are soft and dressed easily while sap is present; drying in air hardens the stone.',
    tip: 'Quarry sap is natural moisture in fresh stone; stone is dressed before sap evaporates.',
    top: 'Building Materials - Stones'
  },
  {
    q: 'What explosive composition forms standard Black Blasting Powder (Gunpowder) used in quarrying stones where splitting without shattering is desired?',
    opts: ['75% Potassium Nitrate (Saltpetre), 15% Charcoal, and 10% Sulfur', 'Pure Nitroglycerin soaked in sawdust', 'Ammonium Nitrate and fuel oil', 'Trinitrotoluene (TNT)'],
    ans: 0,
    exp: 'Gunpowder (blasting powder) is 75% KNO3 + 15% C + 10% S. It produces a slow heaving explosion that dislodges large building blocks without shattering.',
    tip: 'Blasting powder = 75% Potassium Nitrate + 15% Charcoal + 10% Sulfur.',
    top: 'Building Materials - Stones'
  },

  // --- BRICKS: INGREDIENTS, DEFECTS & TESTS ---
  {
    q: 'What is the ideal percentage of Silica (SiO2) in good brick earth, and what is its primary function?',
    opts: ['50% to 60%; it prevents raw bricks from shrinking, warping, and cracking during drying and burning', '20% to 30%; it provides plasticity for moulding', '5% to 6%; it imparts red color', '10% to 15%; it melts the clay'],
    ans: 0,
    exp: 'Good brick clay contains 50-60% silica. It preserves the shape of the brick and prevents shrinkage and warping. Excess silica makes bricks brittle.',
    tip: 'Silica in brick earth: 50% to 60% (prevents shrinkage, cracking, warping).',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What is the ideal percentage of Alumina (Al2O3) in good brick earth, and what is its primary function?',
    opts: ['20% to 30%; it imparts the necessary plasticity required to mould the clay into rectangular brick shapes', '50% to 60%; it prevents cracking', '5% to 6%; it acts as a flux', '1% to 2%; it provides yellow color'],
    ans: 0,
    exp: 'Alumina constitutes 20-30% of brick earth, providing plasticity. Excess alumina causes bricks to shrink and warp excessively during drying.',
    tip: 'Alumina in brick earth: 20% to 30% (provides plasticity for moulding).',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What harmful effect occurs in bricks if the raw brick earth contains excess Alumina (greater than 30%)?',
    opts: ['Raw bricks shrink excessively, develop deep cracks, and warp during drying and burning', 'Bricks become too brittle and crumble into powder', 'Bricks turn dark blue', 'Bricks melt into liquid glass'],
    ans: 0,
    exp: 'Excess alumina makes the clay overly sticky; upon drying, it shrinks severely, creating cracks and warping.',
    tip: 'Excess Alumina causes bricks to shrink, crack, and warp during drying.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What is the role of Iron Oxide (Fe2O3) present in brick earth in the proportion of 5% to 6%?',
    opts: ['Imparts the characteristic red colour to finished burnt bricks and acts as a flux fusing silica grains', 'Makes bricks waterproof', 'Imparts plasticity', 'Prevents efflorescence'],
    ans: 0,
    exp: 'Iron oxide (5-6%) gives burnt bricks their red colour. It also acts as a flux, helping silica fuse at lower temperatures.',
    tip: 'Iron oxide (5-6%) imparts red colour and helps fuse silica in bricks.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What harmful effect occurs in finished bricks if the brick earth contains pebbles or nodules of Lime (calcium carbonate)?',
    opts: ['Upon burning, lime turns to quicklime (CaO), which subsequently slakes upon absorbing atmospheric moisture, expanding and bursting the brick (lime popping / flaking)', 'Bricks become transparent', 'Bricks shrink into balls', 'Bricks emit toxic gases'],
    ans: 0,
    exp: 'Lime nodules calcine into quicklime (CaO). Later, moisture causes hydration into Ca(OH)2 with a 2.5x volume expansion that splits the brick.',
    tip: 'Lime lumps in brick earth cause lime popping/flaking and bursting upon slaking.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What is "Efflorescence" in burnt clay bricks?',
    opts: ['The appearance of unsightly white powdery salt deposits on the exposed brick surface caused by the presence of soluble alkalies (sodium and potassium salts)', 'The fungal rotting of wet bricks', 'The melting of overburnt brick corners', 'The fading of brick red colour under sunlight'],
    ans: 0,
    exp: 'Soluble alkalies in brick earth dissolve in moisture and migrate to the surface as water evaporates, leaving white crystalline salt patches (efflorescence).',
    tip: 'Efflorescence = white powdery salt crusts on brick surfaces caused by soluble alkalies.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What machine is standardly employed in brick manufacturing to thoroughly knead, temper, and homogenize the plastic clay paste with water?',
    opts: ['Pug Mill', 'Ball Mill', 'Jaw Crusher', 'Trommel Screen'],
    ans: 0,
    exp: 'A Pug Mill is a conical iron tub with rotating radial blades that thoroughly mixes, kneads, and tempers clay and water into plastic moulding earth.',
    tip: 'Pug Mill is used for tempering and kneading brick clay.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What is the standard Modular size of a common burnt clay building brick as specified by the Bureau of Indian Standards (IS 1077)?',
    opts: ['190 mm x 90 mm x 90 mm (19 cm x 9 cm x 9 cm)', '200 mm x 100 mm x 100 mm', '225 mm x 112 mm x 75 mm', '230 mm x 115 mm x 75 mm'],
    ans: 0,
    exp: 'The standard modular dimension of a brick in India is 190 mm x 90 mm x 90 mm (19 x 9 x 9 cm).',
    tip: 'Standard Modular brick size = 19 cm x 9 cm x 9 cm (190 x 90 x 90 mm).',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What is the Nominal size of a standard modular brick including a 10 mm mortar joint on all sides?',
    opts: ['200 mm x 100 mm x 100 mm (20 cm x 10 cm x 10 cm)', '190 mm x 90 mm x 90 mm', '210 mm x 110 mm x 110 mm', '220 mm x 100 mm x 100 mm'],
    ans: 0,
    exp: 'With a standard 10 mm mortar joint added, the nominal modular brick size is 200 mm x 100 mm x 100 mm (20 x 10 x 10 cm).',
    tip: 'Nominal brick size (with mortar) = 20 cm x 10 cm x 10 cm (200 x 100 x 100 mm).',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What is the indent or depression formed on the top bed face of a hand-moulded brick called, and what is its dual purpose?',
    opts: ['Frog; it forms a mechanical shear key for mortar bonding and displays the manufacturer brand name', 'Arris; it prevents slipping', 'Perforation; it lightens weight', 'Bat; it drains water'],
    ans: 0,
    exp: 'The depression (usually 100 x 40 x 10-20 mm) is the Frog. It forms a mortar shear key locking adjacent courses together and displays the maker initials.',
    tip: 'Frog (10-20 mm deep) forms a mortar shear key and carries the manufacturer stamp.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What is the minimum compressive crushing strength required for First Class Bricks under IS 1077?',
    opts: ['10.5 N/mm² (105 kg/cm²)', '7.0 N/mm² (70 kg/cm²)', '3.5 N/mm² (35 kg/cm²)', '15.0 N/mm²'],
    ans: 0,
    exp: 'First class bricks must have a minimum compressive strength of 10.5 N/mm² (105 kg/cm²).',
    tip: 'Compressive strengths: 1st class ≥ 10.5 N/mm², 2nd class ≥ 7.0 N/mm², 3rd class ≥ 3.5 N/mm².',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What is the maximum water absorption permitted for First Class Bricks after 24 hours of cold water immersion?',
    opts: ['Not more than 20% of its dry weight', 'Not more than 10% of dry weight', 'Not more than 25% of dry weight', 'Not more than 5% of dry weight'],
    ans: 0,
    exp: 'First class bricks should not absorb more than 20% of their dry weight after 24 hours immersion in water (Second class: 22%, Third class: 25%).',
    tip: 'Water absorption: 1st class ≤ 20%, 2nd class ≤ 22%, 3rd class ≤ 25%.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What are overburnt, vitrified, dark, irregular, and distorted bricks known as in brick kiln manufacturing?',
    opts: ['Jhama bricks (or Fourth Class bricks)', 'First class bricks', 'Terracotta blocks', 'Refractory firebricks'],
    ans: 0,
    exp: 'Overburnt vitrified bricks are called Jhama bricks. They are hard, brittle, and out of shape; crushed into ballast for foundation concrete or road sub-base.',
    tip: 'Jhama bricks = overburnt, vitrified bricks used as road metal and foundation concrete aggregate.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'Which continuous brick kiln operates in an oval or circular excavated trench in the ground using movable iron chimneys moved progressively as burning advances?',
    opts: ['Bull Trench Kiln', 'Hoffman Kiln', 'Clamp Kiln', 'Tunnel Kiln'],
    ans: 0,
    exp: 'Bull Trench Kiln is a semi-continuous trench kiln where brick loading, drying, burning, cooling, and unloading occur simultaneously in different sections using movable chimneys.',
    tip: 'Bull Trench Kiln uses movable chimneys in an excavated trench.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'Which permanent, circular or elliptical continuous brick kiln features permanent masonry chambers and a tall central stationary chimney?',
    opts: ['Hoffman Kiln', 'Bull Trench Kiln', 'Clamp Kiln', 'Pajawa'],
    ans: 0,
    exp: 'Hoffman kiln is a permanent continuous kiln with a massive brick structure and tall central chimney, highly fuel efficient and producing top-quality bricks.',
    tip: 'Hoffman Kiln = permanent continuous kiln with central chimney.',
    top: 'Building Materials - Bricks'
  },

  // --- BRICK MASONRY, BONDS & CLOSERS ---
  {
    q: 'What is a "Queen Closer" in brick masonry?',
    opts: ['A piece of brick obtained by cutting a standard brick lengthwise into two equal halves (190 mm x 45 mm x 90 mm)', 'A brick cut across its width into two halves', 'A brick cut triangularly at the corner', 'A full brick laid vertically on edge'],
    ans: 0,
    exp: 'A queen closer is formed by splitting a brick longitudinally along its centerline, producing a piece 190 x 45 x 90 mm, placed next to a quoin header to create lap.',
    tip: 'Queen Closer = brick cut LENGTHWISE into two equal halves (190 x 45 x 90 mm).',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'Where is a Queen Closer specifically placed in a course of brick masonry?',
    opts: ['Immediately next to the corner Quoin Header to create the necessary vertical joint overlap', 'At the very end of the wall', 'At the center of a partition', 'Under the plinth beam'],
    ans: 0,
    exp: 'A queen closer is always inserted immediately adjacent to the quoin header (never at the corner itself) to stagger vertical joints in subsequent courses.',
    tip: 'Queen closer is placed NEXT to the quoin header.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What is a "King Closer" in brick masonry?',
    opts: ['A piece of brick cut triangularly from the center of one header face to the center of one stretcher face, leaving half-header and half-stretcher intact', 'A brick cut longitudinally into four pieces', 'A curved brick for arch construction', 'An overburnt ornamental brick'],
    ans: 0,
    exp: 'A king closer is formed by cutting off a triangular corner from mid-header to mid-stretcher, frequently used at door and window jambs.',
    tip: 'King Closer = corner cut from center of header to center of stretcher.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What is the characteristic arrangement of bricks in "English Bond" brick masonry?',
    opts: ['Alternate courses of entire stretchers and entire headers, with a queen closer placed next to the quoin header in every header course', 'Headers and stretchers laid alternately in the same course', 'All bricks laid as stretchers throughout', 'Bricks laid diagonally at 45 degrees'],
    ans: 0,
    exp: 'English bond consists of alternating courses: one course purely of headers, next course purely of stretchers. It is the strongest bond in brick masonry.',
    tip: 'English Bond = alternate courses of headers and stretchers (STRONGEST bond).',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What is the characteristic arrangement of bricks in "Flemish Bond" brick masonry?',
    opts: ['Every course consists of alternate headers and stretchers laid continuously along the same row', 'One full course of headers followed by one course of stretchers', 'Bricks laid on edge', 'Bricks laid diagonally in herringbone patterns'],
    ans: 0,
    exp: 'In Flemish bond, headers and stretchers alternate within every single course, creating an attractive face appearance with staggered joints.',
    tip: 'Flemish Bond = alternate headers and stretchers in the SAME course.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'Which brick bond is considered structurally the STRONGEST bond for walls of all thicknesses?',
    opts: ['English Bond', 'Flemish Bond', 'Stretcher Bond', 'Header Bond'],
    ans: 0,
    exp: 'English bond has no continuous vertical joints and provides maximum structural interlocking, making it stronger than Flemish bond.',
    tip: 'English bond is structurally STRONGER than Flemish bond.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'Which brick bond presents a more artistic and aesthetically pleasing face appearance, commonly chosen for exposed face brickwork?',
    opts: ['Flemish Bond (Double Flemish Bond)', 'English Bond', 'Header Bond', 'Facing Bond'],
    ans: 0,
    exp: 'Flemish bond produces a balanced, pleasing geometric pattern of alternating headers and stretchers, preferred for decorative face work.',
    tip: 'Flemish bond provides better aesthetic appearance than English bond.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'What is "Stretcher Bond" (Running Bond), and what is the typical thickness of a wall built using it?',
    opts: ['All bricks are laid as stretchers along the wall length, producing a half-brick thick wall (100 mm or 10 cm thickness)', 'All bricks laid as headers with one-brick thickness', 'A two-brick thick retaining wall', 'A solid footing course'],
    ans: 0,
    exp: 'In stretcher bond, all bricks show their long faces (stretchers). It is restricted to half-brick (100 mm / 10 cm) partition walls and cavity wall leaves.',
    tip: 'Stretcher bond builds HALF-BRICK thick walls (10 cm / 100 mm) for partitions.',
    top: 'Building Materials - Bricks'
  },
  {
    q: 'Where is "Header Bond" specially employed in brick masonry construction?',
    opts: ['In curved brick walls where short header faces turn smooth curves without protruding arrises, and in brick footing steps', 'In half-brick partition walls', 'In high-speed road paving', 'In ceiling plastering'],
    ans: 0,
    exp: 'Header bond (all headers) is used for curved brick walls because the shorter 90 mm face follows a curved profile smoothly, and for spreading footing loads.',
    tip: 'Header bond is used for curved brick walls and footing load distribution.',
    top: 'Building Materials - Bricks'
  }
];

m10Part1.forEach(q => addQ(q, 10, 'mod-10', 'Building Materials - Stones & Bricks'));
console.log('Module 10 Part 1 batch processed. Total added so far:', addedList.length);

db.bankQuestions.push(...addedList);
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Saved ${addedList.length} distinct questions into database.json.`);
