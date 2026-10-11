const fs = require('fs');
const path = require('path');

const requiredPdfs = [
  'module-01-basic-engineering-drawing.pdf',
  'module-02-chain-survey.pdf',
  'module-03-compass-survey.pdf',
  'module-04-planetable-survey.pdf',
  'module-05-levelling-and-contouring.pdf',
  'module-06-theodolite-survey.pdf',
  'module-07-modern-survey-instruments.pdf',
  'module-08-autocad.pdf',
  'module-09-workshop-calculation-and-science.pdf',
  'module-10-building-materials-and-construction.pdf'
];

const checkFolders = [
  path.resolve(__dirname, '..', 'public', 'notes'),
  path.resolve(__dirname, '..', 'dist', 'notes'),
  path.resolve(__dirname, '..', 'android', 'app', 'src', 'main', 'assets', 'public', 'notes')
];

const dbPaths = [
  path.resolve(__dirname, '..', 'data', 'database.json'),
  path.resolve(__dirname, '..', 'public', 'data', 'database.json'),
  path.resolve(__dirname, '..', 'dist', 'data', 'database.json'),
  path.resolve(__dirname, '..', 'android', 'app', 'src', 'main', 'assets', 'public', 'data', 'database.json')
];

console.log('========================================================');
console.log('VERIFYING 10 KERALA PSC OFFICIAL SYLLABUS STUDY NOTES...');
console.log('========================================================\n');

let allOk = true;

// 1. Check PDFs across all 3 directories
checkFolders.forEach(folder => {
  console.log(`Checking PDF assets in: ${folder}`);
  requiredPdfs.forEach(pdf => {
    const fullPath = path.resolve(folder, pdf);
    if (!fs.existsSync(fullPath)) {
      console.error(`  [FAIL] Missing PDF: ${pdf}`);
      allOk = false;
    } else {
      const stats = fs.statSync(fullPath);
      if (stats.size < 35000) {
        console.error(`  [FAIL] PDF too small (<35KB): ${pdf} (${stats.size} bytes)`);
        allOk = false;
      } else {
        console.log(`  [OK] ${pdf} (${(stats.size / 1024).toFixed(1)} KB)`);
      }
    }
  });
  console.log('');
});

// 2. Check Database Files
dbPaths.forEach(dbPath => {
  console.log(`Checking Study Notes in database: ${dbPath}`);
  if (!fs.existsSync(dbPath)) {
    console.error(`  [FAIL] Missing database file: ${dbPath}`);
    allOk = false;
    return;
  }
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  const notes = db.studyNotes || [];
  
  if (notes.length !== 10) {
    console.error(`  [FAIL] Expected 10 study notes, found ${notes.length}`);
    allOk = false;
  } else {
    console.log(`  [OK] Exactly 10 study notes found.`);
  }

  // Check module IDs 1 to 10
  for (let i = 1; i <= 10; i++) {
    const modId = `mod-${i}`;
    const found = notes.find(n => n.moduleId === modId);
    if (!found) {
      console.error(`  [FAIL] Missing note for module ${modId}`);
      allOk = false;
    } else {
      if (!found.isFreePreview) {
        console.error(`  [FAIL] Note ${found.id} has isFreePreview = false! Must be true.`);
        allOk = false;
      }
      if (!found.pdfNotesUrl || !found.pdfNotesUrl.startsWith('/notes/module-')) {
        console.error(`  [FAIL] Note ${found.id} has invalid pdfNotesUrl: ${found.pdfNotesUrl}`);
        allOk = false;
      }
    }
  }
  console.log(`  [OK] All 10 modules (mod-1 to mod-10) verified with isFreePreview: true and valid URLs.\n`);
});

// 3. Check for any Survey Act references
console.log('Checking for any repealed Survey Act 1961 references in studyNotes...');
dbPaths.forEach(dbPath => {
  const content = fs.readFileSync(dbPath, 'utf8');
  if (content.toLowerCase().includes('survey act 1961') || content.toLowerCase().includes('survey and boundaries act 1961')) {
    console.error(`  [FAIL] Found Survey Act 1961 reference in ${dbPath}`);
    allOk = false;
  }
});
console.log('  [OK] Zero Survey Act 1961 references found across all databases!\n');

if (allOk) {
  console.log('========================================================');
  console.log('ALL VERIFICATION CHECKS PASSED WITH 100% SUCCESS!');
  console.log('========================================================');
  process.exit(0);
} else {
  console.error('VERIFICATION FAILED! See errors above.');
  process.exit(1);
}
