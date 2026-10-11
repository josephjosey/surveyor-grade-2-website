const fs = require('fs');
const db = JSON.parse(fs.readFileSync('data/database.json', 'utf8'));

function getTemplateMask(str) {
  let s = str.toLowerCase();
  s = s.replace(/\d+(?:\.\d+)?/g, '<NUM>');
  s = s.replace(/['"][a-z]['"]/g, '<VAR>');
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

const map = new Map();
let anyClone = 0;
db.bankQuestions.forEach((q) => {
  const m = getTemplateMask(q.question);
  if (map.has(m)) {
    anyClone++;
    console.log('Clone remaining:', q.question);
  }
  map.set(m, q);
});

console.log('Total bank questions now:', db.bankQuestions.length);
console.log('Any template clone remaining:', anyClone);
