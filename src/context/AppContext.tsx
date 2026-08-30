import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  UserRole,
  ClassModule,
  StudyNote,
  PYQPaper,
  PYQQuestion,
  MockTest,
  MockTestAttempt,
  Doubt,
  DoubtAnswer,
  BankQuestion
} from '../types';
import {
  INITIAL_MODULES,
  INITIAL_STUDY_NOTES,
  INITIAL_PYQ_PAPERS,
  INITIAL_MOCK_TESTS,
  INITIAL_DOUBTS,
  DEMO_STUDENT,
  DEMO_INSTRUCTOR,
  ENROLLED_STUDENTS_LIST,
  INITIAL_STATEWIDE_ATTEMPTS,
  INITIAL_BANK_QUESTIONS
} from '../data/initialData';

import { fetchDatabase, saveDatabase } from '../services/api';
import { supabase } from '../supabaseClient';
import * as SupabaseDb from '../services/supabaseService';
import { deleteUserFile } from '../services/storageService';

export type NavigationTab = 'home' | 'dashboard' | 'notes' | 'pyq' | 'mocktests' | 'doubts' | 'admin';

interface ToastNotification {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

interface AppContextType {
  currentUser: User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
  role: UserRole;
  setRole: (role: UserRole) => void;
  toggleRole: () => void;
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  modules: ClassModule[];
  studyNotes: StudyNote[];
  pyqPapers: PYQPaper[];
  bankQuestions: BankQuestion[];
  mockTests: MockTest[];
  testAttempts: MockTestAttempt[];
  doubts: Doubt[];
  students: User[];
  isEnrollmentModalOpen: boolean;
  setIsEnrollmentModalOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authDefaultRole: 'student' | 'instructor';
  openAuthModal: (role?: 'student' | 'instructor') => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (val: boolean) => void;
  loginWithCredentials: (email: string, password?: string) => void;
  loginWithGoogle: () => void;
  registerWithCredentials: (name: string, email: string, phone: string, district: string, targetExam: string) => void;
  loginInstructor: (pin: string) => boolean;
  selectedNoteId: string | null;
  setSelectedNoteId: (id: string | null) => void;
  selectedPYQId: string | null;
  setSelectedPYQId: (id: string | null) => void;
  selectedMockTestId: string | null;
  setSelectedMockTestId: (id: string | null) => void;
  notifications: ToastNotification[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  removeToast: (id: string) => void;
  
  // Action Handlers
  enrollStudent: (name: string, email: string, phone: string, district: string, targetExam: string, plan?: 'free' | 'master' | 'mock_only' | 'crash') => void;
  toggleCompleteNote: (noteId: string) => void;
  toggleBookmarkNote: (noteId: string) => void;
  toggleSavePYQ: (pyqId: string) => void;
  submitMockTestAttempt: (attempt: Omit<MockTestAttempt, 'id' | 'submittedAt'>) => MockTestAttempt;
  getRankedLeaderboard: (testId: string) => MockTestAttempt[];
  hasUserAttemptedTest: (testId: string, userId?: string) => boolean;
  getUserRankInfo: (testId?: string, userId?: string) => { rank: number; percentile: number; totalCandidates: number; attempt: MockTestAttempt | null; totalUserAttempts: number; allAttempts: MockTestAttempt[]; isAttempted?: boolean };
  addStudyNote: (newNote: Omit<StudyNote, 'id' | 'downloadsCount' | 'uploadedAt'>) => void;
  deleteStudyNote: (noteId: string) => void;
  addBankQuestion: (question: Omit<BankQuestion, 'id' | 'createdAt'>) => void;
  deleteBankQuestion: (questionId: string) => void;
  updateBankQuestion: (question: BankQuestion) => void;
  addMockTest: (newTest: Omit<MockTest, 'id' | 'attemptsCount'>) => void;
  deleteMockTest: (testId: string) => void;
  addPYQPaper: (newPaper: Omit<PYQPaper, 'id'>) => void;
  deletePYQPaper: (paperId: string) => void;
  updatePYQQuestions: (paperId: string, questions: PYQQuestion[]) => void;
  addQuestionToPYQ: (paperId: string, question: Omit<PYQQuestion, 'id' | 'questionNumber'>) => void;
  deleteQuestionFromPYQ: (paperId: string, questionId: string) => void;
  addDoubt: (title: string, content: string, topic: string, relatedClassId?: string, imageAttachment?: string) => void;
  upvoteDoubt: (doubtId: string) => void;
  addDoubtAnswer: (doubtId: string, content: string) => void;
  deleteDoubt: (doubtId: string) => void;
  updateUserProfile: (updates: Partial<User>) => Promise<boolean>;
  logoutUser: () => void;
  resetToDefaults: () => void;

  // Persistent Backup & Restore
  isDiskLoaded: boolean;
  exportBackup: () => void;
  importBackup: (backupJsonString: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DUMMY_CANDIDATE_NAMES = new Set([
  'anoop m. v.',
  'sneha parvathy',
  'jithesh kumar k.',
  'deepa s. nair',
  'mohammed ashiq',
  'kavya ramesh',
  'akhil george',
  'reshmi v. pillai',
  'sujith sasi',
  'aswathy mohan',
  'anandu krishnan',
  'sneha mohan',
  'rahul varma',
  'deepa s. kumar',
  'aswathi nair'
]);

export const isDummyCandidate = (name?: string, id?: string): boolean => {
  if (id && (id.startsWith('att-rank-') || id.startsWith('att-m87-') || id.startsWith('u-std-') || id === 'u-demo-student')) return true;
  if (name && DUMMY_CANDIDATE_NAMES.has(name.toLowerCase().trim())) return true;
  return false;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>(() => {
    const saved = localStorage.getItem('survey_academy_user');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.role === 'instructor' || parsed.id === 'u-instructor-1' || parsed.name?.includes('Vishnu')) {
          return DEMO_INSTRUCTOR;
        }
        if (parsed.targetExam && (parsed.targetExam.includes('Rank 5') || parsed.targetExam.includes('Rank 2'))) {
          parsed.targetExam = 'Instructor & Course Director (Kerala PSC Survey & KWA)';
        }
        return parsed;
      } catch (e) {
        return DEMO_INSTRUCTOR;
      }
    }
    return DEMO_INSTRUCTOR;
  });

  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const saved = localStorage.getItem('survey_academy_is_authenticated');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('survey_academy_is_authenticated', isAuthenticated ? 'true' : 'false');
  }, [isAuthenticated]);
  
  const [modules, setModules] = useState<ClassModule[]>(() => {
    const saved = localStorage.getItem('survey_academy_modules');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ClassModule[];
        if (Array.isArray(parsed) && parsed.length === 10 && parsed[0]?.title === 'Basic Engineering Drawing') {
          return parsed;
        }
      } catch (e) {}
    }
    try {
      localStorage.setItem('survey_academy_modules', JSON.stringify(INITIAL_MODULES));
    } catch (e) {}
    return INITIAL_MODULES;
  });

  const [studyNotes, setStudyNotes] = useState<StudyNote[]>(() => {
    const saved = localStorage.getItem('survey_academy_notes');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as StudyNote[];
        return parsed.map((note) => {
          if (!note.pdfNotesUrl || note.pdfNotesUrl.startsWith('blob:') || note.pdfNotesUrl.includes('example.com')) {
            return {
              ...note,
              pdfNotesUrl: '/sample-notes.pdf'
            };
          }
          return note;
        });
      } catch (e) {
        return INITIAL_STUDY_NOTES;
      }
    }
    return INITIAL_STUDY_NOTES;
  });

  const [pyqPapers, setPyqPapers] = useState<PYQPaper[]>(() => {
    const saved = localStorage.getItem('survey_academy_pyqs');
    return saved ? JSON.parse(saved) : INITIAL_PYQ_PAPERS;
  });

  const [bankQuestions, setBankQuestions] = useState<BankQuestion[]>(() => {
    const saved = localStorage.getItem('survey_academy_bank_questions');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as BankQuestion[];
        const existingIds = new Set(parsed.map((q) => q.id));
        const missing = INITIAL_BANK_QUESTIONS.filter((q) => !existingIds.has(q.id));
        return [...parsed, ...missing];
      } catch (e) {
        return INITIAL_BANK_QUESTIONS;
      }
    }
    return INITIAL_BANK_QUESTIONS;
  });

  const [mockTests, setMockTests] = useState<MockTest[]>(() => {
    const saved = localStorage.getItem('survey_academy_tests');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as MockTest[];
        const existingIds = new Set(parsed.map((t) => t.id));
        const missing = INITIAL_MOCK_TESTS.filter((t) => !existingIds.has(t.id));
        const combined = [...parsed, ...missing];
        const enriched = combined.map((t) => {
          const initMatch = INITIAL_MOCK_TESTS.find((it) => it.id === t.id);
          if (initMatch && (!t.questions || t.questions.length === 0)) {
            return { ...initMatch, ...t, questions: initMatch.questions };
          }
          return t;
        });
        safeSetItem('survey_academy_tests', enriched);
        return enriched;
      } catch (e) {
        return INITIAL_MOCK_TESTS;
      }
    }
    return INITIAL_MOCK_TESTS;
  });

  const [testAttempts, setTestAttempts] = useState<MockTestAttempt[]>(() => {
    const saved = localStorage.getItem('survey_academy_attempts');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as MockTestAttempt[];
        const cleaned = parsed.filter((a) => !isDummyCandidate(a.userName, a.id));
        const cleanedIds = new Set(cleaned.map((a) => a.id));
        const missing = INITIAL_STATEWIDE_ATTEMPTS.filter((a) => !cleanedIds.has(a.id));
        return [...cleaned, ...missing];
      } catch (e) {
        return INITIAL_STATEWIDE_ATTEMPTS;
      }
    }
    return INITIAL_STATEWIDE_ATTEMPTS;
  });

  const [doubts, setDoubts] = useState<Doubt[]>(() => {
    const saved = localStorage.getItem('survey_academy_doubts');
    return saved ? JSON.parse(saved) : INITIAL_DOUBTS;
  });

  const [students, setStudents] = useState<User[]>(() => {
    const saved = localStorage.getItem('survey_academy_students');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as User[];
        const cleaned = parsed.filter((s) => !isDummyCandidate(s.name, s.id));
        const cleanedIds = new Set(cleaned.map((s) => s.id));
        const missing = ENROLLED_STUDENTS_LIST.filter((s) => !cleanedIds.has(s.id));
        return [...cleaned, ...missing];
      } catch (e) {
        return ENROLLED_STUDENTS_LIST;
      }
    }
    return ENROLLED_STUDENTS_LIST;
  });

  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authDefaultRole, setAuthDefaultRole] = useState<'student' | 'instructor'>('student');
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>('note-1');
  const [selectedPYQId, setSelectedPYQId] = useState<string | null>(null);
  const [selectedMockTestId, setSelectedMockTestId] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<ToastNotification[]>([]);
  const [isDiskLoaded, setIsDiskLoaded] = useState<boolean>(false);

  // Safe LocalStorage helper that never crashes on quota limits
  const safeSetItem = (key: string, val: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn(`LocalStorage quota reached for ${key}. Data is safely stored in persistent disk database.`);
    }
  };

  // 1. Initial Load: Fetch from persistent server disk (data/database.json)
  useEffect(() => {
    fetchDatabase().then((diskData) => {
      if (diskData) {
        if (diskData.modules && diskData.modules.length === 10 && diskData.modules[0]?.title === 'Basic Engineering Drawing') {
          setModules(diskData.modules);
        } else {
          setModules(INITIAL_MODULES);
          safeSetItem('survey_academy_modules', INITIAL_MODULES);
        }
        if (diskData.studyNotes && diskData.studyNotes.length > 0) setStudyNotes(diskData.studyNotes);
        if (diskData.pyqPapers && diskData.pyqPapers.length > 0) setPyqPapers(diskData.pyqPapers);
        if (diskData.mockTests && diskData.mockTests.length > 0) setMockTests(diskData.mockTests);
        if (diskData.testAttempts && diskData.testAttempts.length > 0) setTestAttempts(diskData.testAttempts);
        if (diskData.doubts && diskData.doubts.length > 0) setDoubts(diskData.doubts);
        if (diskData.students && diskData.students.length > 0) setStudents(diskData.students);
      } else {
        // First run: save current initial data to disk
        saveDatabase({
          modules,
          studyNotes,
          pyqPapers,
          mockTests,
          testAttempts,
          doubts,
          students
        });
      }
      setIsDiskLoaded(true);
    });
  }, []);

  // 1.5. Live Supabase Cloud Sync: Fetch live records from Supabase tables
  useEffect(() => {
    async function loadSupabaseCloudData() {
      try {
        const [notes, tests, attempts, pyqs, doubtsList, allProfiles] = await Promise.all([
          SupabaseDb.fetchStudyNotes(),
          SupabaseDb.fetchMockTests(),
          SupabaseDb.fetchTestAttempts(),
          SupabaseDb.fetchPYQPapers(),
          SupabaseDb.fetchDoubts(),
          SupabaseDb.fetchAllProfiles()
        ]);

        if (notes && notes.length > 0) setStudyNotes(notes);
        if (tests && tests.length > 0) {
          setMockTests((prev) => {
            const combined = [...tests];
            const existingIds = new Set(tests.map((t) => t.id));
            for (const initTest of INITIAL_MOCK_TESTS) {
              if (!existingIds.has(initTest.id)) {
                combined.push(initTest);
              }
            }
            const enriched = combined.map((t) => {
              const initMatch = INITIAL_MOCK_TESTS.find((it) => it.id === t.id);
              if (initMatch && (!t.questions || t.questions.length === 0)) {
                return { ...initMatch, ...t, questions: initMatch.questions };
              }
              return t;
            });
            safeSetItem('survey_academy_tests', enriched);
            return enriched;
          });
        } else {
          setMockTests(INITIAL_MOCK_TESTS);
          safeSetItem('survey_academy_tests', INITIAL_MOCK_TESTS);
        }
        if (attempts && attempts.length > 0) {
          const cleanCloudAttempts = attempts.filter((a) => !isDummyCandidate(a.userName, a.id));
          setTestAttempts((prev) => {
            const combined = [...cleanCloudAttempts];
            const existingIds = new Set(cleanCloudAttempts.map((a) => a.id));
            for (const item of prev) {
              if (!existingIds.has(item.id) && !isDummyCandidate(item.userName, item.id)) {
                combined.push(item);
              }
            }
            safeSetItem('survey_academy_attempts', combined);
            return combined;
          });
        }
        if (pyqs && pyqs.length > 0) setPyqPapers(pyqs);
        if (doubtsList && doubtsList.length > 0) setDoubts(doubtsList);
        if (allProfiles && allProfiles.length > 0) {
          const cleanProfiles = allProfiles.filter((p) => !isDummyCandidate(p.name, p.id));
          setStudents(cleanProfiles);
          setCurrentUser((prev) => {
            const matched = cleanProfiles.find(
              (p) => p.id === prev.id || (p.email && prev.email && p.email.toLowerCase() === prev.email.toLowerCase())
            );
            if (matched) {
              const merged = {
                ...prev,
                ...matched,
                district: matched.district || prev.district || 'Palakkad'
              };
              safeSetItem('survey_academy_user', merged);
              return merged;
            }
            return prev;
          });
        }
      } catch (err) {
        console.warn('Supabase cloud fetch notice:', err);
      }
    }

    loadSupabaseCloudData();
  }, []);

  // 1.6. Supabase Live Session & Profile Sync: Automatically sync Google & email accounts to currentUser
  useEffect(() => {
    const syncUserSession = async (supabaseUser: any) => {
      if (!supabaseUser) {
        setIsAuthenticated(false);
        return;
      }

      setIsAuthenticated(true);

      const isInstructorEmail =
        supabaseUser.email === 'josephjosey19@gmail.com' ||
        supabaseUser.email === 'josephjosey@gmail.com';

      const displayName =
        supabaseUser.user_metadata?.full_name ||
        supabaseUser.user_metadata?.name ||
        supabaseUser.user_metadata?.user_name ||
        (supabaseUser.email ? supabaseUser.email.split('@')[0] : 'Candidate');

      const avatarUrl =
        supabaseUser.user_metadata?.avatar_url ||
        supabaseUser.user_metadata?.picture ||
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80';

      // 1. Fetch user's profile from Supabase profiles table
      let profile = await SupabaseDb.fetchUserProfile(supabaseUser.id);

      // 2. If profile does not exist yet (e.g. first Google login), create it in Supabase
      if (!profile) {
        const newProfile: Partial<User> = {
          name: isInstructorEmail ? 'Joseph Josey' : displayName,
          email: supabaseUser.email || '',
          phone: supabaseUser.phone || '',
          role: isInstructorEmail ? 'instructor' : 'student',
          avatar: avatarUrl,
          enrolledAt: new Date().toISOString().split('T')[0],
          district: 'Palakkad',
          targetExam: isInstructorEmail
            ? 'Instructor & Course Director (Kerala PSC Survey & KWA)'
            : 'Kerala PSC Surveyor Gr. II & KWA Overseer',
          completedClassIds: [],
          bookmarkedClassIds: [],
          savedPYQIds: [],
          streakDays: 1,
          subscriptionPlan: isInstructorEmail ? 'master' : 'free'
        };
        await SupabaseDb.updateUserProfile(supabaseUser.id, newProfile);
        profile = newProfile;
      }

      // Read any previously cached local user to avoid resetting to default if cloud is slower
      const savedUserStr = localStorage.getItem('survey_academy_user');
      const savedUser: Partial<User> = savedUserStr ? JSON.parse(savedUserStr) : {};

      // 3. Set the active currentUser to the real authenticated candidate/instructor
      const activeUser: User = {
        id: supabaseUser.id,
        name: profile?.name || savedUser.name || (isInstructorEmail ? 'Joseph Josey' : displayName),
        email: supabaseUser.email || profile?.email || savedUser.email || '',
        phone: profile?.phone || savedUser.phone || '',
        role: (profile?.role as any) || savedUser.role || (isInstructorEmail ? 'instructor' : 'student'),
        avatar: profile?.avatar || savedUser.avatar || avatarUrl,
        enrolledAt: profile?.enrolledAt || savedUser.enrolledAt || new Date().toISOString().split('T')[0],
        district: profile?.district || savedUser.district || (isInstructorEmail ? 'Idukki' : 'Palakkad'),
        targetExam:
          profile?.targetExam ||
          savedUser.targetExam ||
          (isInstructorEmail
            ? 'Instructor & Course Director (Kerala PSC Survey & KWA)'
            : 'Kerala PSC Surveyor Gr. II & KWA Overseer'),
        completedClassIds: profile?.completedClassIds || savedUser.completedClassIds || [],
        bookmarkedClassIds: profile?.bookmarkedClassIds || savedUser.bookmarkedClassIds || [],
        savedPYQIds: profile?.savedPYQIds || savedUser.savedPYQIds || [],
        streakDays: profile?.streakDays || savedUser.streakDays || 1,
        subscriptionPlan: (profile?.subscriptionPlan as any) || savedUser.subscriptionPlan || (isInstructorEmail ? 'master' : 'free'),
        stateRank: profile?.stateRank || savedUser.stateRank,
        percentile: profile?.percentile || savedUser.percentile,
        mockScore: profile?.mockScore || savedUser.mockScore
      };

      // Resolve state rank dynamically if candidate has any completed attempts
      const candidateName = activeUser.name;
      const matchedAttempts = testAttempts.filter(
        (a) => a.userId === supabaseUser.id || (a.userName && candidateName && a.userName.toLowerCase() === candidateName.toLowerCase())
      );
      if (matchedAttempts.length > 0) {
        const best = [...matchedAttempts].sort((a, b) => b.score - a.score)[0];
        const lBoard = getRankedLeaderboard(best.testId);
        const rankedEntry = lBoard.find(
          (a) => a.userId === supabaseUser.id || (a.userName && candidateName && a.userName.toLowerCase() === candidateName.toLowerCase())
        );
        if (rankedEntry) {
          activeUser.stateRank = rankedEntry.rank;
          activeUser.percentile = rankedEntry.percentile;
          activeUser.mockScore = best.score;
        }
      }

      setCurrentUser(activeUser);
      safeSetItem('survey_academy_user', activeUser);
      setStudents((prev) => [activeUser, ...prev.filter((s) => s.id !== activeUser.id)]);
      safeSetItem('survey_academy_students', [activeUser, ...students.filter((s) => s.id !== activeUser.id)]);
    };

    // Get current session on initial render
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        syncUserSession(session.user);
      } else {
        setIsAuthenticated(false);
      }
    });

    // Listen to real-time auth changes (Google OAuth redirect, login, logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        syncUserSession(session.user);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // 2. Persistent Disk Sync: Auto-save all changes to data/database.json on disk
  useEffect(() => {
    if (!isDiskLoaded) return;
    const timer = setTimeout(() => {
      saveDatabase({
        modules,
        studyNotes,
        pyqPapers,
        mockTests,
        testAttempts,
        doubts,
        students
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [modules, studyNotes, pyqPapers, mockTests, testAttempts, doubts, students, isDiskLoaded]);

  // 3. LocalStorage cache sync
  useEffect(() => {
    safeSetItem('survey_academy_user', currentUser);
  }, [currentUser]);

  useEffect(() => {
    safeSetItem('survey_academy_modules', modules);
  }, [modules]);

  useEffect(() => {
    safeSetItem('survey_academy_notes', studyNotes);
  }, [studyNotes]);

  useEffect(() => {
    safeSetItem('survey_academy_pyqs', pyqPapers);
  }, [pyqPapers]);

  useEffect(() => {
    safeSetItem('survey_academy_tests', mockTests);
  }, [mockTests]);

  useEffect(() => {
    safeSetItem('survey_academy_attempts', testAttempts);
  }, [testAttempts]);

  useEffect(() => {
    safeSetItem('survey_academy_doubts', doubts);
  }, [doubts]);

  useEffect(() => {
    safeSetItem('survey_academy_students', students);
  }, [students]);

  // Export Full JSON Backup
  const exportBackup = () => {
    const backupData = {
      modules,
      studyNotes,
      pyqPapers,
      mockTests,
      testAttempts,
      doubts,
      students,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kerala_survey_academy_backup_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Database backup downloaded to your computer!', 'success');
  };

  // Import / Restore JSON Backup
  const importBackup = (backupJsonString: string) => {
    try {
      const data = JSON.parse(backupJsonString);
      if (data.modules && Array.isArray(data.modules)) setModules(data.modules);
      if (data.studyNotes && Array.isArray(data.studyNotes)) setStudyNotes(data.studyNotes);
      if (data.pyqPapers && Array.isArray(data.pyqPapers)) setPyqPapers(data.pyqPapers);
      if (data.mockTests && Array.isArray(data.mockTests)) setMockTests(data.mockTests);
      if (data.testAttempts && Array.isArray(data.testAttempts)) setTestAttempts(data.testAttempts);
      if (data.doubts && Array.isArray(data.doubts)) setDoubts(data.doubts);
      if (data.students && Array.isArray(data.students)) setStudents(data.students);
      saveDatabase(data);
      showToast('Database backup restored successfully!', 'success');
    } catch (e: any) {
      showToast('Failed to restore backup: ' + e.message, 'error');
    }
  };

  const showToast = (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const openAuthModal = (role: 'student' | 'instructor' = 'student') => {
    setAuthDefaultRole(role);
    setIsAuthModalOpen(true);
  };

  const setRole = (newRole: UserRole) => {
    if (newRole === 'instructor') {
      setCurrentUser(DEMO_INSTRUCTOR);
      showToast('Switched to Instructor / Admin Mode', 'info');
    } else {
      setCurrentUser(DEMO_STUDENT);
      showToast('Switched to Student Learning Mode', 'info');
    }
  };

  const toggleRole = () => {
    if (currentUser.role === 'student') {
      openAuthModal('instructor');
    } else {
      setRole('student');
    }
  };

  const updateUserProfile = async (updates: Partial<User>): Promise<boolean> => {
    let updatedUser: User = currentUser;
    setCurrentUser((prev) => {
      updatedUser = { ...prev, ...updates };
      safeSetItem('survey_academy_user', updatedUser);
      return updatedUser;
    });

    setStudents((prev) => {
      const updatedList = prev.map((s) => (s.id === currentUser.id ? { ...s, ...updates } : s));
      safeSetItem('survey_academy_students', updatedList);
      return updatedList;
    });

    try {
      const { data: authData } = await supabase.auth.getUser();
      const targetId = authData?.user?.id || currentUser.id;
      const success = await SupabaseDb.updateUserProfile(targetId, updates);
      return success;
    } catch (err) {
      console.warn('Error saving profile updates to Supabase:', err);
      return false;
    }
  };

  const loginWithCredentials = async (email: string, password?: string) => {
    const cleanEmail = email.trim() || 'student@surveyrank.com';
    const cleanName = cleanEmail.split('@')[0].replace(/[._]/g, ' ') || 'Student';

    const { data: authData } = await supabase.auth.getUser();
    const sessionUser = authData?.user;
    const userId = sessionUser?.id || currentUser.id || 'u-user-' + Date.now();

    let cloudProfile: Partial<User> | null = null;
    if (sessionUser?.id) {
      cloudProfile = await SupabaseDb.fetchUserProfile(sessionUser.id);
    }

    const existingStudent = students.find((s) => s.email?.toLowerCase() === cleanEmail.toLowerCase() || s.id === userId);

    const loggedInUser: User = {
      ...DEMO_STUDENT,
      ...currentUser,
      ...(existingStudent || {}),
      ...(cloudProfile || {}),
      id: userId,
      name: cloudProfile?.name || existingStudent?.name || currentUser.name || (cleanName.charAt(0).toUpperCase() + cleanName.slice(1)),
      email: cleanEmail,
      district: cloudProfile?.district || existingStudent?.district || currentUser.district || 'Palakkad',
      targetExam: cloudProfile?.targetExam || existingStudent?.targetExam || currentUser.targetExam || 'Kerala PSC Surveyor Gr. II & Land Records',
      role: (cloudProfile?.role as any) || existingStudent?.role || currentUser.role || 'student',
      subscriptionPlan: (cloudProfile?.subscriptionPlan as any) || existingStudent?.subscriptionPlan || currentUser.subscriptionPlan || 'free',
      enrolledAt: cloudProfile?.enrolledAt || existingStudent?.enrolledAt || currentUser.enrolledAt || new Date().toISOString().split('T')[0]
    };

    setCurrentUser(loggedInUser);
    safeSetItem('survey_academy_user', loggedInUser);
    setStudents((prev) => [loggedInUser, ...prev.filter((s) => s.id !== loggedInUser.id)]);
    setIsAuthenticated(true);
    setActiveTab('dashboard');
    showToast(`Welcome back, ${loggedInUser.name}!`, 'success');
  };

  const loginWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`
        }
      });

      if (error) {
        showToast(error.message, 'error');
      }
    } catch (err: any) {
      showToast(err.message || 'Error initiating Google Sign-in', 'error');
    }
  };

  const registerWithCredentials = async (
    name: string,
    email: string,
    phone: string,
    district: string,
    targetExam: string
  ) => {
    const { data: authData } = await supabase.auth.getUser();
    const sessionUser = authData?.user;
    const userId = sessionUser?.id || 'u-reg-' + Date.now();

    const newUser: User = {
      id: userId,
      name: name || 'New Student',
      email: email || 'student@surveyrank.com',
      phone: phone || '+91 98470 12345',
      role: 'student',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      enrolledAt: new Date().toISOString().split('T')[0],
      district: district || 'Palakkad',
      targetExam: targetExam || 'Surveyor Gr. II',
      completedClassIds: [],
      bookmarkedClassIds: [],
      savedPYQIds: [],
      streakDays: 1,
      subscriptionPlan: 'free'
    };

    setCurrentUser(newUser);
    safeSetItem('survey_academy_user', newUser);
    setStudents((prev) => {
      const updated = [newUser, ...prev.filter((s) => s.id !== newUser.id)];
      safeSetItem('survey_academy_students', updated);
      return updated;
    });
    setIsAuthenticated(true);
    setActiveTab('dashboard');

    if (sessionUser?.id) {
      await SupabaseDb.updateUserProfile(sessionUser.id, newUser);
    }
    showToast(`Account created successfully for ${newUser.name}! Free access enabled.`, 'success');
  };

  const loginInstructor = (pin: string): boolean => {
    if (pin === '1234' || pin === 'survey2026' || pin === 'joseph' || pin === '') {
      setCurrentUser(DEMO_INSTRUCTOR);
      setIsAuthenticated(true);
      setActiveTab('admin');
      showToast('Welcome back, Joseph Josey! Instructor Portal unlocked.', 'success');
      return true;
    } else {
      showToast('Invalid Instructor Security PIN! Try default PIN: 1234', 'error');
      return false;
    }
  };

  const logoutUser = async () => {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      // ignore
    }
    localStorage.removeItem('survey_academy_user');
    localStorage.removeItem('survey_academy_is_authenticated');
    setIsAuthenticated(false);
    setActiveTab('home');
    if (window.location.pathname !== '/login') {
      window.history.pushState({}, '', '/login');
    }
    showToast('You have been logged out. Please sign in to access the academy.', 'info');
  };

  const enrollStudent = async (
    name: string,
    email: string,
    phone: string,
    district: string,
    targetExam: string,
    plan: 'free' | 'master' | 'mock_only' | 'crash' = 'master'
  ) => {
    const profileUpdates: Partial<User> = {
      name: name || currentUser.name,
      email: email || currentUser.email,
      phone: phone || currentUser.phone,
      district: district || currentUser.district || 'Palakkad',
      targetExam: targetExam || currentUser.targetExam || 'Surveyor Gr. II',
      subscriptionPlan: plan
    };

    await updateUserProfile(profileUpdates);
    setIsEnrollmentModalOpen(false);
    setActiveTab('dashboard');
    showToast(
      `🎉 Upgraded to ${
        plan === 'master'
          ? 'Complete Master Course'
          : plan === 'mock_only'
          ? 'Mock Test Series'
          : 'Crash Course'
      }! All features unlocked.`,
      'success'
    );
  };

  const toggleCompleteNote = (noteId: string) => {
    let newCompletedList: string[] = [];
    setCurrentUser((prev) => {
      const isCompleted = prev.completedClassIds.includes(noteId);
      const newCompleted = isCompleted
        ? prev.completedClassIds.filter((id) => id !== noteId)
        : [...prev.completedClassIds, noteId];
      newCompletedList = newCompleted;
      return {
        ...prev,
        completedClassIds: newCompleted
      };
    });

    if (currentUser?.id) {
      SupabaseDb.updateUserProfile(currentUser.id, { completedClassIds: newCompletedList });
    }

    const targetNote = studyNotes.find((n) => n.id === noteId);
    const wasCompleted = currentUser.completedClassIds.includes(noteId);
    showToast(
      wasCompleted
        ? `Marked "${targetNote?.title.slice(0, 30)}..." as unread.`
        : `Study notes marked as completed! Great job! 🎉`,
      'success'
    );
  };

  const toggleBookmarkNote = (noteId: string) => {
    let newBookmarksList: string[] = [];
    setCurrentUser((prev) => {
      const isBookmarked = prev.bookmarkedClassIds.includes(noteId);
      const newBookmarks = isBookmarked
        ? prev.bookmarkedClassIds.filter((id) => id !== noteId)
        : [...prev.bookmarkedClassIds, noteId];
      newBookmarksList = newBookmarks;
      return {
        ...prev,
        bookmarkedClassIds: newBookmarks
      };
    });

    if (currentUser?.id) {
      SupabaseDb.updateUserProfile(currentUser.id, { bookmarkedClassIds: newBookmarksList });
    }

    showToast(
      currentUser.bookmarkedClassIds.includes(noteId)
        ? 'Removed from saved notes bookmarks'
        : 'Study material added to bookmarks',
      'info'
    );
  };

  const toggleSavePYQ = (pyqId: string) => {
    let newSavedList: string[] = [];
    setCurrentUser((prev) => {
      const isSaved = prev.savedPYQIds.includes(pyqId);
      const newSaved = isSaved
        ? prev.savedPYQIds.filter((id) => id !== pyqId)
        : [...prev.savedPYQIds, pyqId];
      newSavedList = newSaved;
      return {
        ...prev,
        savedPYQIds: newSaved
      };
    });

    if (currentUser?.id) {
      SupabaseDb.updateUserProfile(currentUser.id, { savedPYQIds: newSavedList });
    }

    showToast(
      currentUser.savedPYQIds.includes(pyqId)
        ? 'Removed question paper from saved list'
        : 'Question paper saved to your library',
      'info'
    );
  };

  const submitMockTestAttempt = (attemptData: Omit<MockTestAttempt, 'id' | 'submittedAt'>): MockTestAttempt => {
    const newAttempt: MockTestAttempt = {
      ...attemptData,
      id: 'att-' + Date.now(),
      userName: currentUser.name || attemptData.userName || 'Candidate',
      userAvatar: currentUser.avatar || attemptData.userAvatar,
      district: currentUser.district || attemptData.district || 'Idukki',
      submittedAt: new Date().toISOString()
    };

    // Calculate temporary rank on this test
    const existing = testAttempts.filter((a) => a.testId === attemptData.testId);
    const combined = [newAttempt, ...existing];
    combined.sort((a, b) => b.score - a.score || b.accuracy - a.accuracy || a.timeSpentSeconds - b.timeSpentSeconds);
    const rankIndex = combined.findIndex((a) => a.id === newAttempt.id);
    const calculatedRank = rankIndex !== -1 ? rankIndex + 1 : 1;
    const calculatedPercentile = combined.length > 1 ? Number((((combined.length - calculatedRank) / (combined.length - 1)) * 100).toFixed(1)) : 100;

    newAttempt.rank = calculatedRank;
    newAttempt.percentile = calculatedPercentile;

    // 1. Update testAttempts in state and localStorage
    setTestAttempts((prev) => {
      const updated = [newAttempt, ...prev.filter((a) => a.id !== newAttempt.id)];
      safeSetItem('survey_academy_attempts', updated);
      return updated;
    });

    // 2. Update currentUser with rank details
    setCurrentUser((prev) => {
      const updatedUser: User = {
        ...prev,
        stateRank: calculatedRank,
        percentile: calculatedPercentile,
        mockScore: newAttempt.score
      };
      safeSetItem('survey_academy_user', updatedUser);
      return updatedUser;
    });

    // 3. Update students list so other users / instructor see this rank immediately
    setStudents((prev) => {
      const updatedStudents = prev.map((s) =>
        s.id === currentUser.id || s.email === currentUser.email || s.name === currentUser.name
          ? { ...s, stateRank: calculatedRank, percentile: calculatedPercentile, mockScore: newAttempt.score }
          : s
      );
      safeSetItem('survey_academy_students', updatedStudents);
      return updatedStudents;
    });

    // 4. Update attempts count for test
    setMockTests((prev) =>
      prev.map((t) => (t.id === attemptData.testId ? { ...t, attemptsCount: t.attemptsCount + 1 } : t))
    );

    // 5. Save to Supabase cloud table
    SupabaseDb.saveTestAttempt(newAttempt, currentUser.id);

    showToast(`Exam submitted! Score: ${newAttempt.score.toFixed(2)} marks • State Rank #${calculatedRank}`, 'success');
    return newAttempt;
  };

  const getRankedLeaderboard = (testId: string): MockTestAttempt[] => {
    // Strictly filter attempts ONLY for this specific test
    const filtered = testAttempts.filter((a) => a.testId === testId);
    
    // Group by student and take ONLY their FIRST attempt (earliest submittedAt)
    // Subsequent attempts are for practice and are not counted for rank.
    const firstAttemptsMap = new Map<string, MockTestAttempt>();

    const chronological = [...filtered].sort(
      (a, b) => new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime()
    );

    for (const att of chronological) {
      const key = (att.userId && att.userId.trim()) || att.userName?.toLowerCase().trim();
      if (key && !firstAttemptsMap.has(key)) {
        firstAttemptsMap.set(key, att);
      }
    }

    const firstAttemptsList = Array.from(firstAttemptsMap.values());

    // Sort according to Kerala PSC Tie-Breaking Rules:
    // 1. Highest Score (Marks with -0.33 deduction)
    // 2. Higher Accuracy (Fewer Wrong Answers)
    // 3. Faster Completion Time (Seconds)
    // 4. Earlier Submission Date
    const sorted = [...firstAttemptsList].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
      if (a.timeSpentSeconds !== b.timeSpentSeconds) return a.timeSpentSeconds - b.timeSpentSeconds;
      return new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime();
    });

    const total = sorted.length;
    return sorted.map((att, idx) => {
      const rank = idx + 1;
      const percentile = total > 1 ? Number((((total - rank) / (total - 1)) * 100).toFixed(1)) : 100;
      return {
        ...att,
        rank,
        percentile
      };
    });
  };

  const hasUserAttemptedTest = (testId: string, userId?: string): boolean => {
    const uid = userId || currentUser.id;
    const uName = (currentUser.name || '').toLowerCase().trim();
    return testAttempts.some(
      (a) =>
        a.testId === testId &&
        ((uid && a.userId === uid) || (uName && a.userName?.toLowerCase().trim() === uName))
    );
  };

  const getUserRankInfo = (testId?: string, userId?: string) => {
    const uid = userId || currentUser.id;
    const targetStudent = students.find((s) => s.id === uid);
    const uName = (targetStudent?.name || currentUser.name || '').toLowerCase().trim();

    if (testId) {
      // Test-specific ranking and attempts (Never shared or copied from another test)
      const leaderboard = getRankedLeaderboard(testId);
      const userFirstAttempt = leaderboard.find(
        (a) => (uid && a.userId === uid) || (uName && a.userName?.toLowerCase().trim() === uName)
      ) || null;

      const thisTestAttempts = testAttempts.filter(
        (a) => a.testId === testId && ((uid && a.userId === uid) || (uName && a.userName?.toLowerCase().trim() === uName))
      );

      return {
        rank: (userFirstAttempt?.rank || 0) as number,
        percentile: (userFirstAttempt?.percentile || 0) as number,
        totalCandidates: leaderboard.length,
        attempt: userFirstAttempt,
        totalUserAttempts: thisTestAttempts.length,
        allAttempts: thisTestAttempts,
        isAttempted: !!userFirstAttempt
      };
    }

    // Overall / General profile rank across any ranked test
    const allRankedLeaderboards = mockTests
      .filter((t) => t.isRankedExam)
      .map((t) => ({ test: t, leaderboard: getRankedLeaderboard(t.id) }));

    let bestAttempt: MockTestAttempt | null = null;
    for (const { leaderboard } of allRankedLeaderboards) {
      const att = leaderboard.find(
        (a) => (uid && a.userId === uid) || (uName && a.userName?.toLowerCase().trim() === uName)
      );
      if (att && (!bestAttempt || att.score > bestAttempt.score)) {
        bestAttempt = att;
      }
    }

    const allUserAttempts = testAttempts.filter(
      (a) => (uid && a.userId === uid) || (uName && a.userName?.toLowerCase().trim() === uName)
    );

    return {
      rank: (bestAttempt?.rank ?? targetStudent?.stateRank ?? 0) as number,
      percentile: (bestAttempt?.percentile ?? targetStudent?.percentile ?? 0) as number,
      totalCandidates: bestAttempt ? getRankedLeaderboard(bestAttempt.testId).length : 0,
      attempt: bestAttempt,
      totalUserAttempts: allUserAttempts.length,
      allAttempts: allUserAttempts,
      isAttempted: !!bestAttempt
    };
  };

  const addStudyNote = (newNoteData: Omit<StudyNote, 'id' | 'downloadsCount' | 'uploadedAt'>) => {
    const newNote: StudyNote = {
      ...newNoteData,
      id: 'note-' + Date.now(),
      downloadsCount: 0,
      uploadedAt: new Date().toISOString().split('T')[0]
    };

    setStudyNotes((prev) => [newNote, ...prev]);
    SupabaseDb.createStudyNote(newNote, currentUser.id);
    showToast(`Study Notes "${newNote.title.slice(0, 30)}..." published successfully!`, 'success');
  };

  const deleteStudyNote = (noteId: string) => {
    const targetNote = studyNotes.find((n) => n.id === noteId);
    if (targetNote?.pdfNotesUrl) {
      deleteUserFile(targetNote.pdfNotesUrl);
    }
    setStudyNotes((prev) => prev.filter((n) => n.id !== noteId));
    SupabaseDb.deleteStudyNote(noteId);
    setCurrentUser((prev) => ({
      ...prev,
      completedClassIds: prev.completedClassIds.filter((id) => id !== noteId),
      bookmarkedClassIds: prev.bookmarkedClassIds.filter((id) => id !== noteId)
    }));
    setStudents((prev) =>
      prev.map((s) => ({
        ...s,
        completedClassIds: s.completedClassIds.filter((id) => id !== noteId),
        bookmarkedClassIds: s.bookmarkedClassIds.filter((id) => id !== noteId)
      }))
    );
    if (selectedNoteId === noteId) {
      setSelectedNoteId(studyNotes.find((n) => n.id !== noteId)?.id || null);
    }
    showToast('Study note deleted successfully', 'info');
  };

  const addBankQuestion = (questionData: Omit<BankQuestion, 'id' | 'createdAt'>) => {
    const newQ: BankQuestion = {
      ...questionData,
      id: `bq-${Date.now()}-${Math.random().toString().slice(2, 6)}`,
      createdAt: new Date().toISOString()
    };
    setBankQuestions((prev) => {
      const updated = [newQ, ...prev];
      safeSetItem('survey_academy_bank_questions', updated);
      return updated;
    });
    showToast(`Question added to Module ${newQ.moduleNumber} successfully!`, 'success');
  };

  const deleteBankQuestion = (questionId: string) => {
    setBankQuestions((prev) => {
      const updated = prev.filter((q) => q.id !== questionId);
      safeSetItem('survey_academy_bank_questions', updated);
      return updated;
    });
    showToast('Question removed from bank.', 'info');
  };

  const updateBankQuestion = (updatedQuestion: BankQuestion) => {
    setBankQuestions((prev) => {
      const updated = prev.map((q) => (q.id === updatedQuestion.id ? updatedQuestion : q));
      safeSetItem('survey_academy_bank_questions', updated);
      return updated;
    });
    showToast('Question updated successfully.', 'success');
  };

  const addMockTest = (newTestData: Omit<MockTest, 'id' | 'attemptsCount'>) => {
    const newTest: MockTest = {
      ...newTestData,
      id: 'mock-' + Date.now(),
      attemptsCount: 0
    };

    setMockTests((prev) => [newTest, ...prev]);
    SupabaseDb.createMockTest(newTest, currentUser.id);
    showToast(`Mock test "${newTest.title}" created successfully!`, 'success');
  };

  const deleteMockTest = (testId: string) => {
    setMockTests((prev) => prev.filter((t) => t.id !== testId));
    SupabaseDb.deleteMockTest(testId);
    showToast('Mock test deleted', 'info');
  };

  const addPYQPaper = (newPaperData: Omit<PYQPaper, 'id'>) => {
    const newPaper: PYQPaper = {
      ...newPaperData,
      id: 'pyq-' + Date.now()
    };

    setPyqPapers((prev) => [newPaper, ...prev]);
    SupabaseDb.createPYQPaper(newPaper, currentUser.id);
    showToast(`PYQ Paper "${newPaper.title}" uploaded!`, 'success');
  };

  const deletePYQPaper = (paperId: string) => {
    const targetPaper = pyqPapers.find((p) => p.id === paperId);
    if (targetPaper?.pdfUrl) {
      deleteUserFile(targetPaper.pdfUrl);
    }
    if (targetPaper?.answerKeyUrl) {
      deleteUserFile(targetPaper.answerKeyUrl);
    }
    setPyqPapers((prev) => prev.filter((p) => p.id !== paperId));
    SupabaseDb.deletePYQPaper(paperId);
    showToast('PYQ Paper deleted', 'info');
  };

  const updatePYQQuestions = (paperId: string, questions: PYQQuestion[]) => {
    const updated = questions.map((q, idx) => ({ ...q, questionNumber: idx + 1 }));
    setPyqPapers((prev) =>
      prev.map((p) => {
        if (p.id === paperId) {
          return {
            ...p,
            questions: updated,
            totalQuestions: updated.length
          };
        }
        return p;
      })
    );
    SupabaseDb.updatePYQQuestions(paperId, updated);
    showToast('PYQ questions updated successfully!', 'success');
  };

  const addQuestionToPYQ = (paperId: string, questionData: Omit<PYQQuestion, 'id' | 'questionNumber'>) => {
    setPyqPapers((prev) =>
      prev.map((p) => {
        if (p.id === paperId) {
          const newQ: PYQQuestion = {
            ...questionData,
            id: 'q-pyq-' + Date.now(),
            questionNumber: (p.questions?.length || 0) + 1
          };
          const updatedQs = [...(p.questions || []), newQ];
          SupabaseDb.updatePYQQuestions(paperId, updatedQs);
          return {
            ...p,
            questions: updatedQs,
            totalQuestions: updatedQs.length
          };
        }
        return p;
      })
    );
    showToast('Question added to PYQ Paper!', 'success');
  };

  const deleteQuestionFromPYQ = (paperId: string, questionId: string) => {
    setPyqPapers((prev) =>
      prev.map((p) => {
        if (p.id === paperId) {
          const updatedQs = (p.questions || [])
            .filter((q) => q.id !== questionId)
            .map((q, idx) => ({ ...q, questionNumber: idx + 1 }));
          SupabaseDb.updatePYQQuestions(paperId, updatedQs);
          return {
            ...p,
            questions: updatedQs,
            totalQuestions: updatedQs.length
          };
        }
        return p;
      })
    );
    showToast('Question removed', 'info');
  };

  const addDoubt = (title: string, content: string, topic: string, relatedClassId?: string, imageAttachment?: string) => {
    const newDoubt: Doubt = {
      id: 'd-' + Date.now(),
      userId: currentUser.id,
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      userDistrict: currentUser.district || 'Kerala',
      title,
      content,
      topic,
      relatedClassId,
      imageAttachment,
      createdAt: new Date().toISOString(),
      upvotes: 1,
      answers: [],
      isResolved: false
    };

    setDoubts((prev) => [newDoubt, ...prev]);
    SupabaseDb.createDoubt(newDoubt, currentUser.id);
    showToast('Your doubt has been posted! Joseph Josey will review and answer shortly.', 'success');
  };

  const upvoteDoubt = (doubtId: string) => {
    setDoubts((prev) =>
      prev.map((d) => {
        if (d.id === doubtId) {
          const newUpvotes = d.upvotes + 1;
          SupabaseDb.updateDoubt(doubtId, { upvotes: newUpvotes });
          return { ...d, upvotes: newUpvotes };
        }
        return d;
      })
    );
    showToast('Upvoted doubt question', 'info');
  };

  const addDoubtAnswer = (doubtId: string, content: string) => {
    const isInstructor = currentUser.role === 'instructor';
    const newAnswer: DoubtAnswer = {
      id: 'ans-' + Date.now(),
      doubtId,
      authorName: currentUser.name,
      authorRole: currentUser.role,
      authorRankBadge: isInstructor ? 'Course Director & Faculty' : undefined,
      authorAvatar: currentUser.avatar,
      content,
      createdAt: new Date().toISOString(),
      isVerifiedInstructor: isInstructor
    };

    setDoubts((prev) =>
      prev.map((d) => {
        if (d.id === doubtId) {
          const newAnswers = [...d.answers, newAnswer];
          const newResolved = isInstructor ? true : d.isResolved;
          SupabaseDb.updateDoubt(doubtId, { answers: newAnswers, isResolved: newResolved });
          return {
            ...d,
            isResolved: newResolved,
            answers: newAnswers
          };
        }
        return d;
      })
    );

    showToast(
      isInstructor
        ? 'Verified Mentor solution published!'
        : 'Your response has been posted.',
      'success'
    );
  };

  const deleteDoubt = (doubtId: string) => {
    const targetDoubt = doubts.find((d) => d.id === doubtId);
    if (targetDoubt?.imageAttachment) {
      deleteUserFile(targetDoubt.imageAttachment);
    }
    setDoubts((prev) => prev.filter((d) => d.id !== doubtId));
    SupabaseDb.deleteDoubt(doubtId);
    showToast('Doubt removed', 'info');
  };

  const resetToDefaults = () => {
    localStorage.clear();
    setModules(INITIAL_MODULES);
    setStudyNotes(INITIAL_STUDY_NOTES);
    setPyqPapers(INITIAL_PYQ_PAPERS);
    setMockTests(INITIAL_MOCK_TESTS);
    setDoubts(INITIAL_DOUBTS);
    setStudents(ENROLLED_STUDENTS_LIST);
    setCurrentUser(DEMO_INSTRUCTOR);
    showToast('Platform reset to default state', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        role: currentUser.role,
        setRole,
        toggleRole,
        activeTab,
        setActiveTab,
        modules,
        studyNotes,
        pyqPapers,
        bankQuestions,
        mockTests,
        testAttempts,
        doubts,
        students,
        isEnrollmentModalOpen,
        setIsEnrollmentModalOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authDefaultRole,
        openAuthModal,
        isAuthenticated,
        setIsAuthenticated,
        loginWithCredentials,
        loginWithGoogle,
        registerWithCredentials,
        loginInstructor,
        selectedNoteId,
        setSelectedNoteId,
        selectedPYQId,
        setSelectedPYQId,
        selectedMockTestId,
        setSelectedMockTestId,
        notifications,
        showToast,
        removeToast,
        enrollStudent,
        toggleCompleteNote,
        toggleBookmarkNote,
        toggleSavePYQ,
        submitMockTestAttempt,
        getRankedLeaderboard,
        hasUserAttemptedTest,
        getUserRankInfo,
        addStudyNote,
        deleteStudyNote,
        addBankQuestion,
        deleteBankQuestion,
        updateBankQuestion,
        addMockTest,
        deleteMockTest,
        addPYQPaper,
        deletePYQPaper,
        updatePYQQuestions,
        addQuestionToPYQ,
        deleteQuestionFromPYQ,
        addDoubt,
        upvoteDoubt,
        addDoubtAnswer,
        deleteDoubt,
        updateUserProfile,
        logoutUser,
        resetToDefaults,
        isDiskLoaded,
        exportBackup,
        importBackup
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
