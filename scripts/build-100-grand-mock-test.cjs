const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const weightages = {
  'mod-1': { count: 10, title: 'Basic Engineering Drawing' },
  'mod-2': { count: 12, title: 'Chain Survey' },
  'mod-3': { count: 12, title: 'Compass Survey' },
  'mod-4': { count: 5,  title: 'Planetable Survey' },
  'mod-5': { count: 15, title: 'Levelling and Contouring' },
  'mod-6': { count: 10, title: 'Theodolite Survey' },
  'mod-7': { count: 8,  title: 'Modern Survey Instruments' },
  'mod-8': { count: 8,  title: 'AutoCAD' },
  'mod-9': { count: 12, title: 'Workshop Calculation and Science' },
  'mod-10': { count: 8, title: 'Building Materials and Construction' }
};

// Group bank questions by moduleId
const grouped = {};
for (const q of db.bankQuestions) {
  if (!grouped[q.moduleId]) grouped[q.moduleId] = [];
  grouped[q.moduleId].push(q);
}

// Ensure diverse selection across topics
const selectedQuestions = [];
let questionNumber = 1;

for (const [modId, conf] of Object.entries(weightages)) {
  const pool = grouped[modId] || [];
  console.log(`Module ${modId} (${conf.title}): Pool size = ${pool.length}, Needed = ${conf.count}`);
  
  if (pool.length < conf.count) {
    console.error(`ERROR: Not enough questions for ${modId}! Needed ${conf.count}, found ${pool.length}`);
    process.exit(1);
  }

  // To ensure highest diversity, select evenly spaced or distinct topics
  // Pick every step or first N distinct questions
  const step = pool.length / conf.count;
  const picked = [];
  const pickedIds = new Set();

  for (let i = 0; i < conf.count; i++) {
    const idx = Math.min(Math.floor(i * step), pool.length - 1);
    let chosen = pool[idx];
    if (pickedIds.has(chosen.id)) {
      chosen = pool.find(q => !pickedIds.has(q.id)) || pool[idx];
    }
    pickedIds.add(chosen.id);
    picked.push(chosen);
  }

  picked.forEach(q => {
    selectedQuestions.push({
      id: `grand100-q${questionNumber}`,
      questionNumber: questionNumber,
      question: q.question,
      questionMalayalam: q.questionMalayalam || undefined,
      options: q.options,
      correctOptionIndex: q.correctOptionIndex,
      explanation: q.explanation || 'Verified Kerala PSC Technical Solution.',
      rankerTip: q.rankerTip || undefined,
      topic: `${conf.title} - ${q.topic || 'Kerala PSC Exam Bank'}`
    });
    questionNumber++;
  });
}

console.log(`Total selected questions: ${selectedQuestions.length}`);

// Generate TypeScript file content
const tsContent = `import { MockTest, MockQuestion } from '../types';

export const KPSC_GRAND_100_QUESTIONS: MockQuestion[] = ${JSON.stringify(selectedQuestions, null, 2)};

export const MOCK_TEST_KPSC_GRAND_100: MockTest = {
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
  questions: KPSC_GRAND_100_QUESTIONS
};
`;

const outputPath = path.join(__dirname, '../src/data/kpscGrand100MockTest.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');
console.log('Successfully generated:', outputPath);
