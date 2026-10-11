const fs = require('fs');
const path = require('path');

const dbPath = path.resolve('data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Find near duplicates with Jaccard word similarity > 85%
const qs = db.bankQuestions;
const toRemove = new Set();

for (let i = 0; i < qs.length; i++) {
  if (toRemove.has(qs[i].id)) continue;
  const w1 = new Set(qs[i].question.toLowerCase().split(/\s+/).filter(w => w.length > 3));
  if (w1.size < 5) continue;

  for (let j = i + 1; j < qs.length; j++) {
    if (toRemove.has(qs[j].id)) continue;
    if (qs[i].moduleNumber !== qs[j].moduleNumber) continue;

    const w2 = new Set(qs[j].question.toLowerCase().split(/\s+/).filter(w => w.length > 3));
    if (w2.size < 5) continue;

    let common = 0;
    w1.forEach(w => { if (w2.has(w)) common++; });
    const sim = common / Math.max(w1.size, w2.size);

    // If similarity > 88%, check if they are near-identical rephrasings
    if (sim > 0.88) {
      // Keep the one with better explanation or metadata
      const scoreI = (qs[i].explanation?.length || 0) + (qs[i].rankerTip ? 50 : 0);
      const scoreJ = (qs[j].explanation?.length || 0) + (qs[j].rankerTip ? 50 : 0);
      if (scoreI >= scoreJ) {
        toRemove.add(qs[j].id);
      } else {
        toRemove.add(qs[i].id);
        break; // qs[i] is removed, stop comparing it
      }
    }
  }
}

console.log('Near duplicates identified for removal:', toRemove.size);

const cleaned = db.bankQuestions.filter(q => !toRemove.has(q.id));
console.log('Bank questions before:', db.bankQuestions.length);
console.log('Bank questions after near-dupe removal:', cleaned.length);

db.bankQuestions = cleaned;
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');

const counts = {};
db.bankQuestions.forEach(q => counts[q.moduleNumber] = (counts[q.moduleNumber] || 0) + 1);

console.log('\n--- Counts per Module after near-dupe removal ---');
for (let m = 1; m <= 10; m++) {
  console.log(`Module ${m}: ${counts[m] || 0} distinct questions`);
}
