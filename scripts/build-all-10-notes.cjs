const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const modules = [
  { num: 1, file: 'build-notes-mod1.cjs', output: 'module-01-basic-engineering-drawing.pdf' },
  { num: 2, file: 'build-notes-mod2.cjs', output: 'module-02-chain-survey.pdf' },
  { num: 3, file: 'build-notes-mod3.cjs', output: 'module-03-compass-survey.pdf' },
  { num: 4, file: 'build-notes-mod4.cjs', output: 'module-04-planetable-survey.pdf' },
  { num: 5, file: 'build-notes-mod5.cjs', output: 'module-05-levelling-and-contouring.pdf' },
  { num: 6, file: 'build-notes-mod6.cjs', output: 'module-06-theodolite-survey.pdf' },
  { num: 7, file: 'build-notes-mod7.cjs', output: 'module-07-modern-survey-instruments.pdf' },
  { num: 8, file: 'build-notes-mod8.cjs', output: 'module-08-autocad.pdf' },
  { num: 9, file: 'build-notes-mod9.cjs', output: 'module-09-workshop-calculation-and-science.pdf' },
  { num: 10, file: 'build-notes-mod10.cjs', output: 'module-10-building-materials-and-construction.pdf' }
];

async function run() {
  console.log('====================================================');
  console.log('BUILDING ALL 10 OFFICIAL KPSC SYLLABUS PDF NOTES...');
  console.log('====================================================\n');

  const notesDir = path.resolve(__dirname, '..', 'public', 'notes');
  if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
  }

  const results = [];

  for (const m of modules) {
    console.log(`--> Running Module ${m.num} (${m.file})...`);
    const scriptPath = path.resolve(__dirname, m.file);
    const stdout = execSync(`node "${scriptPath}"`, { encoding: 'utf-8' });
    
    // Check file
    const targetFile = path.resolve(notesDir, m.output);
    if (!fs.existsSync(targetFile)) {
      throw new Error(`Output PDF missing: ${targetFile}`);
    }
    const stat = fs.statSync(targetFile);
    const sizeKB = (stat.size / 1024).toFixed(1);
    
    // Extract pages from output if possible
    const match = stdout.match(/Pages: (\d+)/);
    const pages = match ? match[1] : 'N/A';
    
    results.push({
      module: `Module ${String(m.num).padStart(2, '0')}`,
      filename: m.output,
      pages,
      size: `${sizeKB} KB`
    });
    console.log(`    Saved: ${m.output} (${pages} pages, ${sizeKB} KB)\n`);
  }

  console.log('\n====================================================');
  console.log('ALL 10 MODULE NOTES GENERATION SUMMARY:');
  console.log('====================================================');
  console.table(results);
}

run().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
