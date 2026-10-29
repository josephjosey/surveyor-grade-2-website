const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const dbPath = path.join(rootDir, 'data', 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

console.log('========================================');
console.log('1. AUDITING STUDY NOTES & PDF FILES');
console.log('========================================');

const notes = db.studyNotes || [];
console.log(`Total study notes registered: ${notes.length}`);

let missingPdfs = 0;
notes.forEach((note, i) => {
  if (!note.pdfNotesUrl) {
    console.error(`[ERROR] Note #${i} (${note.id} - ${note.title}) has NO pdfNotesUrl!`);
    missingPdfs++;
    return;
  }
  // Check in public/
  const cleanUrl = note.pdfNotesUrl.replace(/^\//, '');
  const publicPdfPath = path.join(rootDir, 'public', cleanUrl);
  const existsInPublic = fs.existsSync(publicPdfPath);
  const sizePublic = existsInPublic ? fs.statSync(publicPdfPath).size : 0;

  // Check in android/
  const androidPdfPath = path.join(rootDir, 'android', 'app', 'src', 'main', 'assets', 'public', cleanUrl);
  const existsInAndroid = fs.existsSync(androidPdfPath);
  const sizeAndroid = existsInAndroid ? fs.statSync(androidPdfPath).size : 0;

  if (!existsInPublic || sizePublic === 0) {
    console.error(`[ERROR] Note PDF missing or empty in public/: ${cleanUrl}`);
    missingPdfs++;
  } else if (!existsInAndroid || sizeAndroid === 0) {
    console.warn(`[WARN] Note PDF missing or empty in android assets: ${cleanUrl}`);
  } else {
    console.log(`✓ Note ${note.id}: ${cleanUrl} (${(sizePublic / 1024).toFixed(1)} KB) - Public & Android OK`);
  }
});

console.log(`Missing/broken PDFs: ${missingPdfs}`);

console.log('\n========================================');
console.log('2. AUDITING MOCK TESTS & QUESTION DATA');
console.log('========================================');

const mockTests = db.mockTests || [];
console.log(`Total mock tests registered: ${mockTests.length}`);

let mockTestErrors = 0;
mockTests.forEach((mt, idx) => {
  if (!mt.id || !mt.title) {
    console.error(`[ERROR] Mock test #${idx} missing id or title!`);
    mockTestErrors++;
  }
  if (!Array.isArray(mt.questions) || mt.questions.length === 0) {
    console.error(`[ERROR] Mock test ${mt.id} has no questions!`);
    mockTestErrors++;
    return;
  }

  // Check each question
  mt.questions.forEach((q, qIdx) => {
    if (!q.question || typeof q.question !== 'string' || q.question.trim().length === 0) {
      console.error(`[ERROR] Mock test ${mt.id} Q#${qIdx} has empty question!`);
      mockTestErrors++;
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`[ERROR] Mock test ${mt.id} Q#${qIdx} options length is ${q.options ? q.options.length : 0} (expected 4)!`);
      mockTestErrors++;
    } else {
      q.options.forEach((opt, oIdx) => {
        if (opt === undefined || opt === null || typeof opt !== 'string' || opt.trim().length === 0) {
          console.error(`[ERROR] Mock test ${mt.id} Q#${qIdx} option [${oIdx}] is empty or invalid:`, opt);
          mockTestErrors++;
        }
      });
    }
    if (typeof q.correctOptionIndex !== 'number' || q.correctOptionIndex < 0 || q.correctOptionIndex > 3) {
      console.error(`[ERROR] Mock test ${mt.id} Q#${qIdx} correctOptionIndex invalid:`, q.correctOptionIndex);
      mockTestErrors++;
    }
  });
});

console.log(`Mock test errors found: ${mockTestErrors}`);

console.log('\n========================================');
console.log('3. AUDITING PYQ PAPERS');
console.log('========================================');

const pyqPapers = db.pyqPapers || [];
console.log(`Total PYQ papers registered: ${pyqPapers.length}`);

let pyqErrors = 0;
pyqPapers.forEach((paper, idx) => {
  if (!paper.id || !paper.title) {
    console.error(`[ERROR] PYQ paper #${idx} missing id or title!`);
    pyqErrors++;
  }
  if (!Array.isArray(paper.questions) || paper.questions.length === 0) {
    console.error(`[ERROR] PYQ paper ${paper.id} has no questions!`);
    pyqErrors++;
    return;
  }
  paper.questions.forEach((q, qIdx) => {
    if (!q.question || typeof q.question !== 'string') {
      console.error(`[ERROR] PYQ paper ${paper.id} Q#${qIdx} empty question!`);
      pyqErrors++;
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`[ERROR] PYQ paper ${paper.id} Q#${qIdx} options length:`, q.options ? q.options.length : 0);
      pyqErrors++;
    }
    if (typeof q.correctOptionIndex !== 'number' || q.correctOptionIndex < 0 || q.correctOptionIndex > 3) {
      console.error(`[ERROR] PYQ paper ${paper.id} Q#${qIdx} correctOptionIndex:`, q.correctOptionIndex);
      pyqErrors++;
    }
  });
});

console.log(`PYQ paper errors found: ${pyqErrors}`);

console.log('\n========================================');
console.log('4. AUDITING QUESTION BANK');
console.log('========================================');

const bank = db.bankQuestions || [];
console.log(`Total bank questions: ${bank.length}`);

let bankErrors = 0;
const bankIds = new Set();
bank.forEach((q, idx) => {
  if (!q.id) {
    console.error(`[ERROR] Bank Q#${idx} missing id!`);
    bankErrors++;
  } else if (bankIds.has(q.id)) {
    console.error(`[ERROR] Duplicate bank question ID: ${q.id}`);
    bankErrors++;
  } else {
    bankIds.add(q.id);
  }

  if (!q.moduleId) {
    console.error(`[ERROR] Bank Q ${q.id} missing moduleId!`);
    bankErrors++;
  }

  if (!q.question || typeof q.question !== 'string' || q.question.trim().length === 0) {
    console.error(`[ERROR] Bank Q ${q.id} empty question text!`);
    bankErrors++;
  }

  if (!Array.isArray(q.options) || q.options.length !== 4) {
    console.error(`[ERROR] Bank Q ${q.id} options length:`, q.options ? q.options.length : 0);
    bankErrors++;
  } else {
    q.options.forEach((opt, oIdx) => {
      if (opt === undefined || opt === null || typeof opt !== 'string' || opt.trim().length === 0) {
        console.error(`[ERROR] Bank Q ${q.id} option [${oIdx}] empty or invalid:`, opt);
        bankErrors++;
      }
    });
  }

  if (typeof q.correctOptionIndex !== 'number' || q.correctOptionIndex < 0 || q.correctOptionIndex > 3) {
    console.error(`[ERROR] Bank Q ${q.id} correctOptionIndex invalid:`, q.correctOptionIndex);
    bankErrors++;
  }
});

console.log(`Bank question errors found: ${bankErrors}`);

console.log('\n========================================');
console.log('5. AUDITING TEST ATTEMPTS & RANKINGS');
console.log('========================================');

const attempts = db.testAttempts || [];
console.log(`Total test attempts registered: ${attempts.length}`);

let attemptErrors = 0;
attempts.forEach((att, idx) => {
  if (!att.id || !att.testId || !att.userId) {
    console.error(`[ERROR] Attempt #${idx} missing id, testId, or userId:`, att);
    attemptErrors++;
  }
  if (typeof att.score !== 'number' || isNaN(att.score)) {
    console.error(`[ERROR] Attempt ${att.id} score is not a valid number:`, att.score);
    attemptErrors++;
  }
  const totalQ = att.correctCount + att.wrongCount + att.unattemptedCount;
  if (typeof totalQ !== 'number' || totalQ <= 0) {
    console.error(`[ERROR] Attempt ${att.id} totalQuestions is invalid:`, totalQ);
    attemptErrors++;
  }
});

console.log(`Test attempt errors found: ${attemptErrors}`);

console.log('\n========================================');
console.log('AUDIT COMPLETE');
console.log('========================================');
