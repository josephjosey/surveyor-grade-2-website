import { execSync } from 'child_process';
import fs from 'fs';

const keyPath = 'C:/Users/hp/.ssh/id_ed25519';
if (fs.existsSync(keyPath)) fs.unlinkSync(keyPath);
if (fs.existsSync(keyPath + '.pub')) fs.unlinkSync(keyPath + '.pub');

execSync(`ssh-keygen -t ed25519 -C "josephjosey19@gmail.com" -f "${keyPath}" -N ""`, { stdio: 'inherit' });

const pubKey = fs.readFileSync(keyPath + '.pub', 'utf-8');
console.log('\n--- NEW PUBLIC KEY ---');
console.log(pubKey.trim());
console.log('--- END KEY ---\n');
