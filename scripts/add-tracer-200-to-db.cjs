const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'database.json');
const rawDb = fs.readFileSync(dbPath, 'utf8');
const db = JSON.parse(rawDb);

// Read tracerSurveyor200Questions.ts
const tsFilePath = path.join(__dirname, '..', 'src', 'data', 'tracerSurveyor200Questions.ts');
const tsContent = fs.readFileSync(tsFilePath, 'utf8');

// Extract TRACER_SURVEYOR_200_QUESTIONS
const questionsMatch = tsContent.match(/export const TRACER_SURVEYOR_200_QUESTIONS: BankQuestion\[\] = (\[[\s\S]*?\]);\n\nexport const PYQ_PAPER_043_2023/);
if (!questionsMatch) {
  console.error('Failed to match TRACER_SURVEYOR_200_QUESTIONS');
  process.exit(1);
}
const newBankQuestions = JSON.parse(questionsMatch[1]);

// Extract PYQ_PAPER_043_2023
const paper43Match = tsContent.match(/export const PYQ_PAPER_043_2023: PYQPaper = (\{[\s\S]*?\});\n\nexport const PYQ_PAPER_106_2017/);
if (!paper43Match) {
  console.error('Failed to match PYQ_PAPER_043_2023');
  process.exit(1);
}
const paper43 = JSON.parse(paper43Match[1]);

// Extract PYQ_PAPER_106_2017
const paper106Match = tsContent.match(/export const PYQ_PAPER_106_2017: PYQPaper = (\{[\s\S]*?\});\n\nexport const MOCK_TEST_TRACER_2023/);
if (!paper106Match) {
  console.error('Failed to match PYQ_PAPER_106_2017');
  process.exit(1);
}
const paper106 = JSON.parse(paper106Match[1]);

// Extract MOCK_TEST_TRACER_2023
const mockMatch = tsContent.match(/export const MOCK_TEST_TRACER_2023: MockTest = (\{[\s\S]*?\});\n$/);
if (!mockMatch) {
  console.error('Failed to match MOCK_TEST_TRACER_2023');
  process.exit(1);
}
const mockTest = JSON.parse(mockMatch[1]);

console.log(`Extracted ${newBankQuestions.length} bank questions, 2 papers, and 1 mock test.`);

// Upsert Bank Questions
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

// Upsert Papers
if (!db.pyqPapers) db.pyqPapers = [];
for (const paper of [paper43, paper106]) {
  const existingIdx = db.pyqPapers.findIndex((p) => p.id === paper.id);
  if (existingIdx === -1) {
    // Insert after paper 063 or at top
    db.pyqPapers.splice(1, 0, paper);
    console.log(`Added paper ${paper.id} to pyqPapers.`);
  } else {
    db.pyqPapers[existingIdx] = paper;
    console.log(`Updated paper ${paper.id} in pyqPapers.`);
  }
}

// Upsert Mock Test
if (!db.mockTests) db.mockTests = [];
const existingMockIdx = db.mockTests.findIndex((t) => t.id === mockTest.id);
if (existingMockIdx === -1) {
  db.mockTests.splice(1, 0, mockTest);
  console.log(`Added mock test ${mockTest.id} to mockTests.`);
} else {
  db.mockTests[existingMockIdx] = mockTest;
  console.log(`Updated mock test ${mockTest.id} in mockTests.`);
}

console.log(`Bank questions: ${db.bankQuestions.length}, Papers: ${db.pyqPapers.length}, Mock tests: ${db.mockTests.length}`);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Successfully wrote updated database.json!');
