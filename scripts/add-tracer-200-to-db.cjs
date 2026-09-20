const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'database.json');
const rawDb = fs.readFileSync(dbPath, 'utf8');
const db = JSON.parse(rawDb);

// Read tracerSurveyor200Questions.ts
const tsFilePath = path.join(__dirname, '..', 'src', 'data', 'tracerSurveyor200Questions.ts');
const tsContent = fs.readFileSync(tsFilePath, 'utf8');

// Extract JSON array
const jsonText = tsContent.replace(/^[\s\S]*?=\s*/, '').replace(/;\s*$/, '');
const newBankQuestions = JSON.parse(jsonText);

console.log(`Extracted ${newBankQuestions.length} bank questions from tracerSurveyor200Questions.ts`);

let addedQCount = 0;
let updatedQCount = 0;

for (const q of newBankQuestions) {
  const existingIdx = db.bankQuestions.findIndex((existing) => existing.id === q.id);
  if (existingIdx === -1) {
    db.bankQuestions.push(q);
    addedQCount++;
  } else {
    db.bankQuestions[existingIdx] = q;
    updatedQCount++;
  }
}

console.log(`Added ${addedQCount} questions and updated ${updatedQCount} questions in database.json.`);
console.log(`Total bank questions now: ${db.bankQuestions.length}`);

// Print module distribution
const moduleCounts = {};
for (const q of db.bankQuestions) {
  const mod = q.moduleId || `mod-${q.moduleNumber}`;
  moduleCounts[mod] = (moduleCounts[mod] || 0) + 1;
}
console.log('Updated module counts in database.json:', moduleCounts);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Successfully wrote updated database.json!');
