import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, '../data/database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
const test87 = db.mockTests.find(t => t.id === 'mock-kpsc-master-87');

const tsContent = `import { MockTest } from '../types';

export const MOCK_TEST_87_QUESTIONS: MockTest = ${JSON.stringify(test87, null, 2)};
`;

const outPath = path.resolve(__dirname, '../src/data/survey87Questions.ts');
fs.writeFileSync(outPath, tsContent, 'utf-8');
console.log('Successfully generated src/data/survey87Questions.ts!');
