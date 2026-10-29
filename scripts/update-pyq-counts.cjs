const fs = require('fs');
const path = require('path');

const file = path.resolve('src/data/initialData.ts');
let content = fs.readFileSync(file, 'utf8');

// Replace totalQuestions for pyq-1, pyq-2, pyq-3
content = content.replace(/(id:\s*'pyq-1'[\s\S]*?totalQuestions:\s*)100/, '$15');
content = content.replace(/(id:\s*'pyq-2'[\s\S]*?totalQuestions:\s*)100/, '$14');
content = content.replace(/(id:\s*'pyq-3'[\s\S]*?totalQuestions:\s*)100/, '$12');

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated initialData.ts without PowerShell interpolation issues');
