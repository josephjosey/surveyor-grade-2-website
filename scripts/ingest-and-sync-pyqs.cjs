const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const dataJsonPath = path.join(rootDir, 'data', 'database.json');
const publicJsonPath = path.join(rootDir, 'public', 'data', 'database.json');
const androidJsonPath = path.join(rootDir, 'android', 'app', 'src', 'main', 'assets', 'public', 'data', 'database.json');

console.log('Reading database from:', dataJsonPath);
const db = JSON.parse(fs.readFileSync(dataJsonPath, 'utf8'));

// Load batch files
const b1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'batch-mod2-mod3.json'), 'utf8'));
const b2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'batch-mod4-mod5.json'), 'utf8'));
const b3 = JSON.parse(fs.readFileSync(path.join(__dirname, 'batch-mod6-mod7.json'), 'utf8'));
const b4 = JSON.parse(fs.readFileSync(path.join(__dirname, 'batch-mod8-mod9.json'), 'utf8'));
const b5 = JSON.parse(fs.readFileSync(path.join(__dirname, 'batch-mod10.json'), 'utf8'));

const candidateQuestions = [
  ...b1.mod2Questions,
  ...b1.mod3Questions,
  ...b2.mod4Questions,
  ...b2.mod5Questions,
  ...b3.mod6Questions,
  ...b3.mod7Questions,
  ...b4.mod8Questions,
  ...b4.mod9Questions,
  ...b5.mod10Questions
];

console.log(`Total candidate questions loaded: ${candidateQuestions.length}`);

// Normalization function for duplicate checking
function norm(t) {
  return (t || '').toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
}

const existingIds = new Set(db.bankQuestions.map(q => q.id));
const existingTexts = new Set(db.bankQuestions.map(q => norm(q.question)));

// Check for forbidden terms (Kerala Survey Act 1961)
const forbiddenRegex = /kerala survey (and|&) boundaries act|കേരള സർവേ നിയമം/i;

let added = 0;
let skippedDup = 0;

for (const q of candidateQuestions) {
  // Validate question integrity
  if (!q.question || !Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(`Invalid options for question ID ${q.id}`);
  }
  if (q.correctOptionIndex < 0 || q.correctOptionIndex > 3) {
    throw new Error(`Invalid correctOptionIndex for question ID ${q.id}: ${q.correctOptionIndex}`);
  }
  if (forbiddenRegex.test(q.question) || forbiddenRegex.test(q.explanation)) {
    throw new Error(`Forbidden Survey Act content detected in question ID ${q.id}`);
  }

  const normQ = norm(q.question);
  if (existingTexts.has(normQ)) {
    skippedDup++;
    continue;
  }

  // Ensure ID uniqueness
  let finalId = q.id;
  let counter = 1;
  while (existingIds.has(finalId)) {
    finalId = `${q.id}-v${counter++}`;
  }
  q.id = finalId;

  existingIds.add(finalId);
  existingTexts.add(normQ);
  db.bankQuestions.push(q);
  added++;
}

console.log(`Successfully ingested: ${added} new PYQ questions.`);
console.log(`Skipped duplicates: ${skippedDup}`);
console.log(`Total bank questions now: ${db.bankQuestions.length}`);

// Check counts per module
const counts = {};
for (let i = 1; i <= 10; i++) counts[i] = 0;
db.bankQuestions.forEach(q => {
  counts[q.moduleNumber] = (counts[q.moduleNumber] || 0) + 1;
});

console.log('\n--- VERIFICATION OF QUESTION COUNTS PER SYLLABUS MODULE ---');
let allMeet500 = true;
for (let i = 1; i <= 10; i++) {
  const cnt = counts[i] || 0;
  const status = cnt >= 500 ? '✅ PASS' : '❌ FAIL';
  if (cnt < 500) allMeet500 = false;
  console.log(`Module ${i.toString().padStart(2, ' ')}: ${cnt} questions [${status}] (target ≥ 500)`);
}

if (!allMeet500) {
  throw new Error('Not all modules meet the target of at least 500 PYQs!');
}

// Write to data/database.json and public/data/database.json
const jsonString = JSON.stringify(db, null, 2);
fs.writeFileSync(dataJsonPath, jsonString, 'utf8');
console.log(`Updated ${dataJsonPath}`);

fs.writeFileSync(publicJsonPath, jsonString, 'utf8');
console.log(`Updated ${publicJsonPath}`);

// If android folder exists, copy as well
if (fs.existsSync(androidJsonPath)) {
  fs.writeFileSync(androidJsonPath, jsonString, 'utf8');
  console.log(`Updated ${androidJsonPath}`);
}

console.log('\n🎉 ALL 10 SECTIONS CONTAIN AT LEAST 500 PREVIOUS YEAR QUESTIONS!');
