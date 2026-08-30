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
  try {
    const res = await fetch('/api/database');
    if (!res.ok) return null;
    const data = await res.json();
    if (data && !data.empty && (data.studyNotes || data.mockTests || data.pyqPapers)) {
      return data;
    }
    return null;
  } catch (err) {
    console.warn('Persistence: could not fetch database from server disk:', err);
    return null;
  }
}

export async function saveDatabase(data: DatabaseState): Promise<boolean> {
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
