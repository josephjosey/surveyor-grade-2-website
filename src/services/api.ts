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
  // Strategy 1: In local development, fetch directly from local Vite persistence middleware
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
      console.warn('Persistence: could not fetch database from dev server:', err);
    }
  }

  // Strategy 2: Same-origin bundled database.json (instant 0ms on Web & Android APK)
  try {
    const res = await fetch(`/data/database.json?v=${Date.now()}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && (data.bankQuestions?.length > 0 || data.mockTests?.length > 0)) {
        return data;
      }
    }
  } catch (err) {
    // Relative path fallback for Capacitor Android WebView
    try {
      const res = await fetch(`./data/database.json?v=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data && (data.bankQuestions?.length > 0 || data.mockTests?.length > 0)) {
          return data;
        }
      }
    } catch (e) {
      // Continue to CDN fallbacks
    }
  }

  // Strategy 3: Fast Global Edge CDN (jsDelivr - high-speed & reliable fallback)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);
    const cdnUrl = `https://cdn.jsdelivr.net/gh/josephjosey/surveyor-grade-2-website@main/data/database.json?v=${Date.now()}`;
    const res = await fetch(cdnUrl, { signal: controller.signal, cache: 'no-store' });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      if (data && (data.bankQuestions?.length > 0 || data.mockTests?.length > 0)) {
        return data;
      }
    }
  } catch (err) {
    console.warn('Persistence: could not fetch database from jsDelivr CDN:', err);
  }

  // Strategy 4: Direct GitHub Raw CDN fallback
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const rawUrl = `https://raw.githubusercontent.com/josephjosey/surveyor-grade-2-website/main/data/database.json?v=${Date.now()}`;
    const res = await fetch(rawUrl, { cache: 'no-store', signal: controller.signal });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      if (data && (data.bankQuestions?.length > 0 || data.mockTests?.length > 0)) {
        return data;
      }
    }
  } catch (err) {
    console.warn('Persistence: could not fetch remote database from GitHub CDN:', err);
  }

  return null;
}

export async function saveDatabase(data: DatabaseState): Promise<boolean> {
  const payload = { ...data, lastUpdated: new Date().toISOString() };

  // 1. In dev mode, save to server disk via Vite API
  if (import.meta.env.DEV) {
    try {
      const res = await fetch('/api/database', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        return true;
      }
    } catch (err) {
      console.warn('Persistence: could not save database to server disk:', err);
    }
  }

  // 2. Always persist locally as offline backup
  try {
    localStorage.setItem('survey_academy_db_backup', JSON.stringify(payload));
  } catch (e) {
    // ignore
  }

  return true;
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
