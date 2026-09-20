const fs = require('fs');
const path = require('path');

const simFilePath = path.join(__dirname, '..', 'src', 'data', 'simulatedStudents.ts');
let content = fs.readFileSync(simFilePath, 'utf8');

// Match SIMULATED_STUDENTS block to get candidates
const studentsMatch = content.match(/export const SIMULATED_STUDENTS: User\[\] = (\[[\s\S]*?\]);\n\nexport const SIMULATED_ATTEMPTS/);
if (!studentsMatch) {
  console.error('Could not match SIMULATED_STUDENTS');
  process.exit(1);
}

const students = JSON.parse(studentsMatch[1]);
console.log(`Loaded ${students.length} simulated students.`);

// Generate 72 candidate attempts for 'mock-kpsc-grand-100'
const testId = 'mock-kpsc-grand-100';

// Distribution of scores from ~88 down to ~35
const scoreProfiles = [
  // Top Rankers (State Top 10)
  { correct: 91, wrong: 6, unattempted: 3, mins: 62 },
  { correct: 88, wrong: 8, unattempted: 4, mins: 64 },
  { correct: 86, wrong: 7, unattempted: 7, mins: 60 },
  { correct: 85, wrong: 9, unattempted: 6, mins: 66 },
  { correct: 84, wrong: 8, unattempted: 8, mins: 59 },
  { correct: 83, wrong: 10, unattempted: 7, mins: 65 },
  { correct: 82, wrong: 9, unattempted: 9, mins: 67 },
  { correct: 81, wrong: 11, unattempted: 8, mins: 63 },
  { correct: 80, wrong: 10, unattempted: 10, mins: 61 },
  { correct: 79, wrong: 12, unattempted: 9, mins: 68 },
  // High Scorers (70-78 marks)
  { correct: 78, wrong: 11, unattempted: 11, mins: 58 },
  { correct: 77, wrong: 13, unattempted: 10, mins: 65 },
  { correct: 76, wrong: 12, unattempted: 12, mins: 62 },
  { correct: 75, wrong: 14, unattempted: 11, mins: 67 },
  { correct: 74, wrong: 13, unattempted: 13, mins: 64 },
  { correct: 73, wrong: 15, unattempted: 12, mins: 69 },
  { correct: 72, wrong: 14, unattempted: 14, mins: 63 },
  { correct: 71, wrong: 16, unattempted: 13, mins: 66 },
  { correct: 70, wrong: 15, unattempted: 15, mins: 61 },
  { correct: 69, wrong: 17, unattempted: 14, mins: 68 },
  // Mid-High (60-68 marks)
  { correct: 68, wrong: 16, unattempted: 16, mins: 59 },
  { correct: 67, wrong: 18, unattempted: 15, mins: 65 },
  { correct: 66, wrong: 17, unattempted: 17, mins: 62 },
  { correct: 65, wrong: 19, unattempted: 16, mins: 67 },
  { correct: 64, wrong: 18, unattempted: 18, mins: 60 },
  { correct: 63, wrong: 20, unattempted: 17, mins: 66 },
  { correct: 62, wrong: 19, unattempted: 19, mins: 64 },
  { correct: 61, wrong: 21, unattempted: 18, mins: 68 },
  { correct: 60, wrong: 20, unattempted: 20, mins: 57 },
  { correct: 59, wrong: 22, unattempted: 19, mins: 63 },
  // Average / Qualifying (50-59 marks)
  { correct: 58, wrong: 21, unattempted: 21, mins: 61 },
  { correct: 57, wrong: 23, unattempted: 20, mins: 66 },
  { correct: 56, wrong: 22, unattempted: 22, mins: 58 },
  { correct: 55, wrong: 24, unattempted: 21, mins: 65 },
  { correct: 54, wrong: 23, unattempted: 23, mins: 60 },
  { correct: 53, wrong: 25, unattempted: 22, mins: 67 },
  { correct: 52, wrong: 24, unattempted: 24, mins: 62 },
  { correct: 51, wrong: 26, unattempted: 23, mins: 64 },
  { correct: 50, wrong: 25, unattempted: 25, mins: 59 },
  { correct: 49, wrong: 27, unattempted: 24, mins: 66 },
  // 40-49 marks
  { correct: 48, wrong: 26, unattempted: 26, mins: 56 },
  { correct: 47, wrong: 28, unattempted: 25, mins: 63 },
  { correct: 46, wrong: 27, unattempted: 27, mins: 58 },
  { correct: 45, wrong: 29, unattempted: 26, mins: 65 },
  { correct: 44, wrong: 28, unattempted: 28, mins: 57 },
  { correct: 43, wrong: 30, unattempted: 27, mins: 64 },
  { correct: 42, wrong: 29, unattempted: 29, mins: 61 },
  { correct: 41, wrong: 31, unattempted: 28, mins: 66 },
  { correct: 40, wrong: 30, unattempted: 30, mins: 55 },
  { correct: 39, wrong: 32, unattempted: 29, mins: 62 },
  // 35-40 marks
  { correct: 38, wrong: 31, unattempted: 31, mins: 58 },
  { correct: 37, wrong: 33, unattempted: 30, mins: 64 },
  { correct: 36, wrong: 32, unattempted: 32, mins: 59 },
  { correct: 35, wrong: 34, unattempted: 31, mins: 63 },
  { correct: 34, wrong: 33, unattempted: 33, mins: 56 },
  { correct: 33, wrong: 35, unattempted: 32, mins: 61 },
  { correct: 32, wrong: 34, unattempted: 34, mins: 57 },
  { correct: 31, wrong: 36, unattempted: 33, mins: 62 }
];

const newAttempts = [];

for (let i = 0; i < Math.min(students.length, scoreProfiles.length); i++) {
  const std = students[i];
  const prof = scoreProfiles[i];
  const score = Math.max(0, Number((prof.correct - prof.wrong * 0.33).toFixed(2)));
  const attempted = prof.correct + prof.wrong;
  const accuracy = attempted > 0 ? Number(((prof.correct / attempted) * 100).toFixed(1)) : 0;
  const timeSecs = prof.mins * 60 + ((i * 17) % 55);

  const d = new Date(Date.UTC(2026, 8, 1 + (i % 18), 4 + (i % 12), 10 + (i % 45), 0));
  const startedAt = d.toISOString();
  const submittedAt = new Date(d.getTime() + timeSecs * 1000).toISOString();

  newAttempts.push({
    id: `att-sim-grand100-${std.id}`,
    testId: testId,
    userId: std.id,
    userName: std.name,
    userAvatar: std.avatar,
    district: std.district || 'Kerala',
    startedAt: startedAt,
    submittedAt: submittedAt,
    answers: {},
    markedForReview: [],
    score: score,
    correctCount: prof.correct,
    wrongCount: prof.wrong,
    unattemptedCount: prof.unattempted,
    accuracy: accuracy,
    timeSpentSeconds: timeSecs
  });
}

console.log(`Generated ${newAttempts.length} grand 100 attempts.`);

// Append to SIMULATED_ATTEMPTS array in content
// Find the closing bracket of SIMULATED_ATTEMPTS
const lastBracketIdx = content.lastIndexOf('];');
if (lastBracketIdx === -1) {
  console.error('Could not find closing bracket of SIMULATED_ATTEMPTS');
  process.exit(1);
}

const formattedNewAttempts = ',\n' + newAttempts.map((a) => '  ' + JSON.stringify(a, null, 2).replace(/\n/g, '\n  ')).join(',\n');

const updatedContent = content.slice(0, lastBracketIdx) + formattedNewAttempts + '\n];\n';

fs.writeFileSync(simFilePath, updatedContent, 'utf8');
console.log('Successfully updated src/data/simulatedStudents.ts with grand 100 attempts!');
