const fs = require('fs');
const path = require('path');

const dbPath = path.resolve('data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Generalized template mask function to catch value-swapped clones
function getTemplateMask(str) {
  let s = str.toLowerCase();
  // Replace numbers, decimals, fractions
  s = s.replace(/\d+(?:\.\d+)?/g, '<NUM>');
  // Replace single letters inside quotes like 'r', 'h', 'a'
  s = s.replace(/['"][a-z]['"]/g, '<VAR>');
  // Normalize whitespace
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

const originalCount = db.bankQuestions.length;
const groups = new Map();

db.bankQuestions.forEach((q) => {
  const mask = getTemplateMask(q.question);
  if (!groups.has(mask)) {
    groups.set(mask, []);
  }
  groups.get(mask).push(q);
});

console.log('Original bank questions:', originalCount);
console.log('Unique question templates:', groups.size);

const deduplicated = [];
let clonesRemoved = 0;

for (const [mask, list] of groups.entries()) {
  // Keep the best single question from the group
  // Sort by explanation length, presence of rankerTip, etc.
  list.sort((a, b) => {
    const scoreA = (a.explanation?.length || 0) + (a.rankerTip?.length ? 100 : 0);
    const scoreB = (b.explanation?.length || 0) + (b.rankerTip?.length ? 100 : 0);
    return scoreB - scoreA;
  });

  deduplicated.push(list[0]);
  if (list.length > 1) {
    clonesRemoved += (list.length - 1);
  }
}

console.log('Template clones removed:', clonesRemoved);
console.log('Distinct questions remaining:', deduplicated.length);

db.bankQuestions = deduplicated;
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');

const counts = {};
db.bankQuestions.forEach(q => counts[q.moduleNumber] = (counts[q.moduleNumber] || 0) + 1);

console.log('\n--- Counts per Module (Strictly Non-Clone Questions) ---');
for (let m = 1; m <= 10; m++) {
  console.log(`Module ${m}: ${counts[m] || 0} distinct questions`);
}
