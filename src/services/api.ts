import {
  ClassModule,
  StudyNote,
  PYQPaper,
  MockTest,
  MockTestAttempt,
  Doubt,
  User,
  BankQuestion
} from '../types';

export interface DatabaseState {
  modules?: ClassModule[];
  studyNotes?: StudyNote[];
  pyqPapers?: PYQPaper[];
  mockTests?: MockTest[];
  testAttempts?: MockTestAttempt[];
  doubts?: Doubt[];
  students?: User[];
  bankQuestions?: BankQuestion[];
  lastUpdated?: string;
}

export async function fetchDatabase(): Promise<DatabaseState | null> {
  // 1. In dev mode, fetch from local Vite Express/node API
  if (import.meta.env.DEV) {
    try {
      const res = await fetch('/api/database');
      if (res.ok) {
        const data = await res.json();
        if (data && !data.empty && (data.studyNotes || data.mockTests || data.pyqPapers || data.bankQuestions)) {
          return data;
        }
      }
    } catch (err) {
      console.warn('Persistence: could not fetch database from server disk:', err);
    }
  }

  // 2. In production & mobile APK (Capacitor Android): Fetch authoritative dataset from live GitHub CDN
  try {
    const remoteUrl = 'https://raw.githubusercontent.com/josephjosey/surveyor-grade-2-website/main/data/database.json';
    const res = await fetch(remoteUrl, { cache: 'no-cache' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.bankQuestions && data.bankQuestions.length > 0) {
        return data;
      }
    }
  } catch (err) {
    console.warn('Persistence: could not fetch remote database from GitHub CDN:', err);
  }

  return null;
}

export async function saveDatabase(data: DatabaseState): Promise<boolean> {
  if (!import.meta.env.DEV) return false;
  try {
    const res = await fetch('/api/database', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, lastUpdated: new Date().toISOString() })
    });
    return res.ok;
  } catch (err) {
    console.warn('Persistence: could not save database to server disk:', err);
    return false;
  }
}

export async function uploadPdfDocument(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const base64Data = reader.result as string;
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            filename: file.name,
            base64Data
          })
        });
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || 'Upload failed');
        }
        const data = await res.json();
        resolve(data.fileUrl);
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(file);
  });
}
