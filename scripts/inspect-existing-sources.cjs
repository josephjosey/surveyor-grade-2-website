const fs = require('fs');

const files = [
  'scripts/build-paper-063-2024.cjs',
  'scripts/build-tracer-surveyor-200.cjs',
  'src/data/pyqPaper063_2024.ts'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    const lines = c.split('\n').filter(l => l.includes('question:'));
    console.log(f, 'has', lines.length, 'question lines');
  }
});
