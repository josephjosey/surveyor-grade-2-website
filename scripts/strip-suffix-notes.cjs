const fs = require('fs');
const path = require('path');

const dbPath = path.resolve('data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

function cleanQuestionText(qText) {
  if (!qText || typeof qText !== 'string') return qText;
  let text = qText;

  // Remove suffixes like:
  // - (Sample Problem #16)
  // - (Application #1)
  // - (Reference #1)
  // - (Case #1)
  // - (Test Query #1)
  // - (Case Study #1)
  // - (QP : 34/2022)
  // - (Ref: Problem...)
  // - 'Ref: Problem'
  text = text.replace(/\s*\((?:Sample Problem|Reference|Application|Case Study|Case|Test Query|QP\s*:[^\)]*)\s*#?\d*\)\s*$/i, '');
  text = text.replace(/\s*\(Ref:\s*Problem[^\)]*\)\s*$/i, '');
  text = text.replace(/\s*['"]?Ref:\s*Problem['"]?\s*#?\d*/i, '');
  text = text.replace(/\s*\(\s*Ref[^\)]*\)\s*$/i, '');

  text = text.trim();

  // If question ended with a colon or question mark before the removed suffix, keep it clean
  return text;
}

function normalize(str) {
  if (!str || typeof str !== 'string') return '';
  return str.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
}

let modifiedCount = 0;
const seen = new Map();
const deduplicated = [];

db.bankQuestions.forEach((q) => {
  const original = q.question;
  const cleaned = cleanQuestionText(original);
  if (cleaned !== original) {
    modifiedCount++;
    q.question = cleaned;
  }

  const normKey = normalize(q.question);
  if (seen.has(normKey)) {
    // Duplicate question found after stripping suffix notes
    const existing = seen.get(normKey);
    // Keep the one with richer explanation/tip if any
    if ((!existing.explanation || existing.explanation.length < q.explanation?.length) && q.explanation) {
      existing.explanation = q.explanation;
    }
    if ((!existing.rankerTip || existing.rankerTip.length < q.rankerTip?.length) && q.rankerTip) {
      existing.rankerTip = q.rankerTip;
    }
  } else {
    seen.set(normKey, q);
    deduplicated.push(q);
  }
});

console.log('Total bank questions before:', db.bankQuestions.length);
console.log('Questions whose suffix note was stripped:', modifiedCount);
console.log('Duplicates removed after stripping suffixes:', db.bankQuestions.length - deduplicated.length);
console.log('Total clean, unique questions remaining:', deduplicated.length);

db.bankQuestions = deduplicated;
db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');

// Module breakdown
const counts = {};
db.bankQuestions.forEach(q => counts[q.moduleNumber] = (counts[q.moduleNumber] || 0) + 1);
console.log('\n--- Counts per Module after clean & dedup ---');
for (let m = 1; m <= 10; m++) {
  console.log(`Module ${m}: ${counts[m] || 0} unique questions`);
}
