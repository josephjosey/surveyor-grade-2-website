const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const dbPath = path.join(rootDir, 'data', 'database.json');
const currentDb = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Fetch database.json from commit 7c38322
const oldJsonStr = cp.execSync('git show 7c38322:data/database.json', {
  cwd: rootDir,
  maxBuffer: 50 * 1024 * 1024
}).toString('utf8');

const oldDb = JSON.parse(oldJsonStr);

console.log('Current bankQuestions count:', currentDb.bankQuestions.length);
console.log('Commit 7c38322 bankQuestions count:', oldDb.bankQuestions.length);

// Map current questions by ID for clean text / symbol formatting
const currentMap = new Map();
currentDb.bankQuestions.forEach(q => currentMap.set(q.id, q));

// Function to clean corrupted question mark sequences in strings
function fixCorruptedSymbols(str) {
  if (!str || typeof str !== 'string') return str;
  let s = str;
  // Replace degree symbols
  s = s.replace(/(\d+)\?\?(\d+)'/g, '$1° $2\'');
  s = s.replace(/(\d+)\?\?/g, '$1°');
  s = s.replace(/\?\?\?/g, '—');
  s = s.replace(/S\?\?05/g, 'SØ05');
  s = s.replace(/S\?\?50/g, 'SØ50');
  s = s.replace(/\?ABC/g, '∠ABC');
  s = s.replace(/\?AOB/g, '∠AOB');
  return s;
}

function cleanQuestionItem(q) {
  const item = { ...q };
  item.question = fixCorruptedSymbols(item.question);
  if (Array.isArray(item.options)) {
    item.options = item.options.map(opt => fixCorruptedSymbols(opt));
  }
  if (item.explanation) {
    item.explanation = fixCorruptedSymbols(item.explanation);
  }
  if (item.rankerTip) {
    item.rankerTip = fixCorruptedSymbols(item.rankerTip);
  }
  return item;
}

// Build restored questions array strictly following 7c38322 order
const restoredQuestions = [];
let usedCleanFromCurrent = 0;
let usedOldWithFix = 0;

oldDb.bankQuestions.forEach(oldQ => {
  if (currentMap.has(oldQ.id)) {
    // Current already has clean formatting and no extra tags
    const cleanQ = currentMap.get(oldQ.id);
    restoredQuestions.push({ ...cleanQ });
    usedCleanFromCurrent++;
  } else {
    // Missing from current (deleted during duplicate purge); restore from 7c38322 with clean symbols
    const fixedQ = cleanQuestionItem(oldQ);
    restoredQuestions.push(fixedQ);
    usedOldWithFix++;
  }
});

console.log(`Restored total: ${restoredQuestions.length}`);
console.log(`  From current (clean): ${usedCleanFromCurrent}`);
console.log(`  From 7c38322 (restored & cleaned): ${usedOldWithFix}`);

// Verify counts per module
const moduleCounts = {};
restoredQuestions.forEach(q => {
  moduleCounts[q.moduleId] = (moduleCounts[q.moduleId] || 0) + 1;
});

console.log('Restored questions breakdown per module:');
console.log(JSON.stringify(moduleCounts, null, 2));

// Verify that none of the restored questions contain artificial suffixes or prefixes
const issues = restoredQuestions.filter(q => {
  const s = q.question;
  return s.includes('Sample Problem') ||
         s.includes('Ref: Problem') ||
         s.includes('[Kerala PSC') ||
         s.startsWith('In Plane Table Surveying:');
});
console.log('Questions with unwanted tags/notes in restored set:', issues.length);

// Update database object: replace bankQuestions with restoredQuestions
currentDb.bankQuestions = restoredQuestions;
currentDb.lastUpdated = new Date().toISOString();

const updatedJson = JSON.stringify(currentDb, null, 2);

// Target file paths to sync across web and mobile
const targetPaths = [
  path.join(rootDir, 'data', 'database.json'),
  path.join(rootDir, 'public', 'data', 'database.json'),
  path.join(rootDir, 'dist', 'data', 'database.json'),
  path.join(rootDir, 'android', 'app', 'src', 'main', 'assets', 'public', 'data', 'database.json')
];

targetPaths.forEach(target => {
  if (fs.existsSync(path.dirname(target))) {
    fs.writeFileSync(target, updatedJson, 'utf8');
    console.log(`Wrote ${(updatedJson.length / (1024*1024)).toFixed(2)} MB to ${path.relative(rootDir, target)}`);
  }
});
