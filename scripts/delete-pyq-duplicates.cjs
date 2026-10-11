const fs = require('fs');
const path = require('path');

const dbPath = path.resolve('data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

function normalize(str) {
  if (!str || typeof str !== 'string') return '';
  return str.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
}

// 1. Gather all question IDs referenced in mockTests and pyqPapers
const referencedIds = new Set();
if (Array.isArray(db.mockTests)) {
  db.mockTests.forEach(mt => {
    if (Array.isArray(mt.questions)) {
      mt.questions.forEach(q => { if (q && q.id) referencedIds.add(q.id); });
    }
  });
}
if (Array.isArray(db.pyqPapers)) {
  db.pyqPapers.forEach(paper => {
    if (Array.isArray(paper.questions)) {
      paper.questions.forEach(q => { if (q && q.id) referencedIds.add(q.id); });
    }
  });
}
console.log('Referenced IDs in mockTests & pyqPapers:', referencedIds.size);

function getQualityScore(q) {
  let score = 0;
  if (referencedIds.has(q.id)) score += 500;
  if (q.explanation && typeof q.explanation === 'string') {
    score += Math.min(q.explanation.length, 200);
  }
  if (q.rankerTip && typeof q.rankerTip === 'string' && q.rankerTip.length > 5) {
    score += 100;
  }
  if (Array.isArray(q.options) && q.options.length === 4) {
    score += 50;
  }
  if (q.year) score += 10;
  return score;
}

// 2. Group bankQuestions by normalized text
const originalCount = db.bankQuestions.length;
const groups = new Map();

db.bankQuestions.forEach((q) => {
  const key = normalize(q.question);
  if (!groups.has(key)) {
    groups.set(key, []);
  }
  groups.get(key).push(q);
});

console.log('Original bank questions:', originalCount);
console.log('Unique question groups:', groups.size);
console.log('Duplicates to delete:', originalCount - groups.size);

// 3. Select best question from each group and enrich if possible
const deduplicated = [];
let enrichedWithTip = 0;
let enrichedWithExplanation = 0;

for (const [key, list] of groups.entries()) {
  list.sort((a, b) => getQualityScore(b) - getQualityScore(a));
  const best = { ...list[0] };

  // If best lacks rankerTip or explanation, see if any duplicate has it
  for (let i = 1; i < list.length; i++) {
    const other = list[i];
    if ((!best.rankerTip || best.rankerTip.length < 5) && other.rankerTip && other.rankerTip.length >= 5) {
      best.rankerTip = other.rankerTip;
      enrichedWithTip++;
    }
    if ((!best.explanation || best.explanation.length < 15) && other.explanation && other.explanation.length >= 15) {
      best.explanation = other.explanation;
      enrichedWithExplanation++;
    }
  }

  deduplicated.push(best);
}

// Update database
db.bankQuestions = deduplicated;
db.lastUpdated = new Date().toISOString();

console.log('Enriched with ranker tip from duplicates:', enrichedWithTip);
console.log('Enriched with explanation from duplicates:', enrichedWithExplanation);
console.log('Deduplicated bank questions count:', db.bankQuestions.length);

// Module breakdown
const modCounts = {};
db.bankQuestions.forEach(q => {
  const m = q.moduleNumber || 'unknown';
  modCounts[m] = (modCounts[m] || 0) + 1;
});
console.log('\nFinal question count per syllabus module:');
for (let m = 1; m <= 10; m++) {
  console.log(`  Module ${m}: ${modCounts[m] || 0} unique questions`);
}

// Write to all target database locations
const targetPaths = [
  'data/database.json',
  'public/data/database.json',
  'dist/data/database.json',
  'android/app/src/main/assets/public/data/database.json'
];

const updatedJson = JSON.stringify(db, null, 2);

targetPaths.forEach((relPath) => {
  const absPath = path.resolve(relPath);
  if (fs.existsSync(path.dirname(absPath))) {
    fs.writeFileSync(absPath, updatedJson, 'utf8');
    console.log(`Successfully synced ${relPath} (${(updatedJson.length / (1024 * 1024)).toFixed(2)} MB)`);
  }
});
