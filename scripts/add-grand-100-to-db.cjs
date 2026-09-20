const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Import KPSC_GRAND_100
const testPath = path.join(__dirname, '../src/data/kpscGrand100MockTest.ts');
const testFile = fs.readFileSync(testPath, 'utf8');

// Extract KPSC_GRAND_100_QUESTIONS JSON
const jsonStart = testFile.indexOf('= [') + 2;
const jsonEnd = testFile.indexOf('];\n');
const questionsJson = testFile.slice(jsonStart, jsonEnd + 1);
const questions = JSON.parse(questionsJson);

const grand100MockTest = {
  id: 'mock-kpsc-grand-100',
  title: 'Kerala PSC 100-Mark Full Syllabus Grand Model Exam (All Modules)',
  category: 'Full-Length Kerala PSC',
  description: 'Official 100-mark full Kerala PSC examination adhering strictly to syllabus module weightages: Basic Engineering Drawing (10 Marks), Chain Survey (12 Marks), Compass Survey (12 Marks), Planetable Survey (5 Marks), Levelling & Contouring (15 Marks), Theodolite Survey (10 Marks), Modern Survey Instruments (8 Marks), AutoCAD (8 Marks), Workshop Calculation & Science (12 Marks), and Building Materials & Construction (8 Marks). Evaluated with standard Kerala PSC -0.33 negative marking. Open for everyone to write and evaluate their rank.',
  durationMinutes: 75,
  totalQuestions: 100,
  marksPerCorrect: 1,
  negativeMarksPerWrong: 0.33,
  totalMarks: 100,
  difficulty: 'PSC Standard (Advanced)',
  attemptsCount: 1420,
  isRankedExam: true,
  examCode: 'KPSC-SURVEYOR-GRAND-100',
  targetDepartment: 'Survey & Land Records / Kerala Water Authority / PWD',
  questions: questions
};

const grand100PyqPaper = {
  id: 'pyq-kpsc-grand-100',
  title: 'Kerala PSC 100-Mark Full Syllabus Official Solved Model Paper (100 Questions)',
  examName: 'Kerala PSC Surveyor Grade II / Overseer Full Syllabus Exam',
  examCode: 'Cat. No: 284/2022 - 100 Marks Grand Series',
  year: 2026,
  department: 'Survey and Land Records Department / KWA / PWD',
  totalQuestions: 100,
  pdfUrl: 'https://example.com/pyq/kpsc_grand_100_solved.pdf',
  answerKeyUrl: 'https://example.com/pyq/kpsc_grand_100_answer_key.pdf',
  isSolved: true,
  questions: questions.map((q, idx) => ({
    id: q.id,
    questionNumber: idx + 1,
    question: q.question,
    options: q.options,
    correctOptionIndex: q.correctOptionIndex,
    explanation: q.explanation,
    rankerTip: q.rankerTip,
    topic: q.topic || 'Kerala PSC Full Syllabus'
  }))
};

// Add to db.mockTests at top
db.mockTests = db.mockTests.filter(t => t.id !== 'mock-kpsc-grand-100');
db.mockTests.unshift(grand100MockTest);

// Add to db.pyqPapers
db.pyqPapers = db.pyqPapers.filter(p => p.id !== 'pyq-kpsc-grand-100');
db.pyqPapers.push(grand100PyqPaper);

db.lastUpdated = new Date().toISOString();

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Successfully updated database.json with Grand 100 Mock Test & PYQ Paper!');
console.log('Total Mock Tests:', db.mockTests.length);
console.log('Total PYQ Papers:', db.pyqPapers.length);
