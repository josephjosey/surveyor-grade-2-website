const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'database.json');
const rawDb = fs.readFileSync(dbPath, 'utf8');
const db = JSON.parse(rawDb);

// Read pyqPaper063_2024.ts
const paperModulePath = path.join(__dirname, '..', 'src', 'data', 'pyqPaper063_2024.ts');
const paperContent = fs.readFileSync(paperModulePath, 'utf8');

// Extract PYQ_PAPER_063_2024_QUESTIONS
const questionsMatch = paperContent.match(/export const PYQ_PAPER_063_2024_QUESTIONS: BankQuestion\[\] = (\[[\s\S]*?\]);\n\nexport const PYQ_PAPER_063_2024/);
if (!questionsMatch) {
  console.error('Failed to match PYQ_PAPER_063_2024_QUESTIONS in pyqPaper063_2024.ts');
  process.exit(1);
}
const newBankQuestions = JSON.parse(questionsMatch[1]);

// Extract PYQ_PAPER_063_2024
const paperMatch = paperContent.match(/export const PYQ_PAPER_063_2024: PYQPaper = (\{[\s\S]*?\});\n$/);
if (!paperMatch) {
  console.error('Failed to match PYQ_PAPER_063_2024 in pyqPaper063_2024.ts');
  process.exit(1);
}
const newPaper = JSON.parse(paperMatch[1]);

console.log(`Extracted ${newBankQuestions.length} bank questions and 1 paper.`);

// Filter existing bankQuestions to avoid duplicate IDs
const existingQIds = new Set(db.bankQuestions.map((q) => q.id));
let addedQCount = 0;
for (const q of newBankQuestions) {
  if (!existingQIds.has(q.id)) {
    db.bankQuestions.push(q);
    existingQIds.add(q.id);
    addedQCount++;
  }
}

// Add paper if not present
if (!db.pyqPapers) db.pyqPapers = [];
const existingPaperIdx = db.pyqPapers.findIndex((p) => p.id === newPaper.id);
if (existingPaperIdx === -1) {
  db.pyqPapers.unshift(newPaper);
  console.log(`Added paper ${newPaper.id} to pyqPapers.`);
} else {
  db.pyqPapers[existingPaperIdx] = newPaper;
  console.log(`Updated paper ${newPaper.id} in pyqPapers.`);
}

console.log(`Added ${addedQCount} questions to database.json. Total bank questions: ${db.bankQuestions.length}`);

// Print module distribution
const moduleCounts = {};
for (const q of db.bankQuestions) {
  const mod = q.moduleId || `mod-${q.moduleNumber}`;
  moduleCounts[mod] = (moduleCounts[mod] || 0) + 1;
}
console.log('Updated module counts in database.json:', moduleCounts);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Successfully wrote updated database.json!');
