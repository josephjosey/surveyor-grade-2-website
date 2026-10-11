const fs = require('fs');
const path = require('path');

const topicPrefixRegexes = [
  /^In Plane Table Surveying\s*[:,-]\s*/i,
  /^In Chain Surveying\s*[:,-]\s*/i,
  /^In Compass Surveying\s*[:,-]\s*/i,
  /^In Levelling and Contouring\s*[:,-]\s*/i,
  /^In Theodolite Surveying\s*[:,-]\s*/i,
  /^In Satellite Geodesy and GPS Surveying\s*[:,-]\s*/i,
  /^In Computer Aided Drafting\s*\([^)]*\)\s*[:,-]\s*/i,
  /^In Workshop Calculation and Science\s*[:,-]\s*/i,
  /^For standard AutoCAD keyboard shortcuts\s*[:,-]\s*/i,
  /^Regarding the solution of the Three-Point Problem in Plane Tabling\s*[:,-]\s*/i,
  /^Regarding [A-Za-z0-9\s\(\)\/&,-]+?\s*[:,-]\s*/i,
];

function cleanQuestion(qText) {
  if (!qText || typeof qText !== 'string') return qText;
  let text = qText;

  // Only strip if it has bracket prefix or starts with known topic lead-ins
  if (text.startsWith('[')) {
    text = text.replace(/^\[[^\]]+\]\s*/, '');
  }

  for (const rx of topicPrefixRegexes) {
    if (rx.test(text)) {
      text = text.replace(rx, '');
      break;
    }
  }

  text = text.trim();

  // Capitalize the first character of the cleaned question
  if (text.length > 0) {
    text = text.charAt(0).toUpperCase() + text.slice(1);
  }

  return text;
}

const dbPath = path.resolve('data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let modifiedCount = 0;

if (Array.isArray(db.bankQuestions)) {
  db.bankQuestions.forEach((q) => {
    const orig = q.question;
    const cleaned = cleanQuestion(orig);
    if (cleaned !== orig) {
      q.question = cleaned;
      modifiedCount++;
    }
  });
}

if (Array.isArray(db.mockTests)) {
  db.mockTests.forEach((mt) => {
    if (Array.isArray(mt.questions)) {
      mt.questions.forEach((q) => {
        const orig = q.question;
        const cleaned = cleanQuestion(orig);
        if (cleaned !== orig) {
          q.question = cleaned;
          modifiedCount++;
        }
      });
    }
  });
}

if (Array.isArray(db.pyqPapers)) {
  db.pyqPapers.forEach((paper) => {
    if (Array.isArray(paper.questions)) {
      paper.questions.forEach((q) => {
        const orig = q.question;
        const cleaned = cleanQuestion(orig);
        if (cleaned !== orig) {
          q.question = cleaned;
          modifiedCount++;
        }
      });
    }
  });
}

db.lastUpdated = new Date().toISOString();

const updatedJson = JSON.stringify(db, null, 2);

// Target files to sync
const targetPaths = [
  'data/database.json',
  'public/data/database.json',
  'dist/data/database.json',
  'android/app/src/main/assets/public/data/database.json'
];

targetPaths.forEach((relPath) => {
  const absPath = path.resolve(relPath);
  if (fs.existsSync(path.dirname(absPath))) {
    fs.writeFileSync(absPath, updatedJson, 'utf8');
    console.log(`Successfully updated ${relPath} (${(updatedJson.length / (1024 * 1024)).toFixed(2)} MB)`);
  } else {
    console.warn(`Directory does not exist for: ${relPath}`);
  }
});

console.log(`\nDone! Total questions sanitized: ${modifiedCount}`);
console.log(`Total bank questions preserved: ${db.bankQuestions.length}`);
