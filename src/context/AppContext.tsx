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
  DoubtAnswer
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
  INITIAL_STATEWIDE_ATTEMPTS
} from '../data/initialData';

import { fetchDatabase, saveDatabase } from '../services/api';

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
  getUserRankInfo: (testId: string, userId?: string) => { rank: number; percentile: number; totalCandidates: number; attempt: MockTestAttempt | null; totalUserAttempts: number; allAttempts: MockTestAttempt[] };
  addStudyNote: (newNote: Omit<StudyNote, 'id' | 'downloadsCount' | 'uploadedAt'>) => void;
  deleteStudyNote: (noteId: string) => void;
  addMockTest: (newTest: Omit<MockTest, 'id' | 'attemptsCount'>) => void;
  deleteMockTest: (testId: string) => void;
  addPYQPaper: (newPaper: Omit<PYQPaper, 'id'>) => void;
  deletePYQPaper: (paperId: string) => void;
  updatePYQQuestions: (paperId: string, questions: PYQQuestion[]) => void;
  addQuestionToPYQ: (paperId: string, question: Omit<PYQQuestion, 'id' | 'questionNumber'>) => void;
  deleteQuestionFromPYQ: (paperId: string, questionId: string) => void;
  addDoubt: (title: string, content: string, topic: string, relatedClassId?: string) => void;
  upvoteDoubt: (doubtId: string) => void;
  addDoubtAnswer: (doubtId: string, content: string) => void;
  logoutUser: () => void;
  resetToDefaults: () => void;

  // Persistent Backup & Restore
  isDiskLoaded: boolean;
  exportBackup: () => void;
  importBackup: (backupJsonString: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

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
    return saved ? JSON.parse(saved) : INITIAL_MODULES;
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

  const [mockTests, setMockTests] = useState<MockTest[]>(() => {
    const saved = localStorage.getItem('survey_academy_tests');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as MockTest[];
        const hasRanked = parsed.some((t) => t.isRankedExam || t.id === 'mock-state-rank-1');
        if (!hasRanked) {
          return [...INITIAL_MOCK_TESTS.filter((t) => t.isRankedExam), ...parsed];
        }
        return parsed;
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
        const existingIds = new Set(parsed.map((a) => a.id));
        const missing = INITIAL_STATEWIDE_ATTEMPTS.filter((a) => !existingIds.has(a.id));
        return [...parsed, ...missing];
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
    return saved ? JSON.parse(saved) : ENROLLED_STUDENTS_LIST;
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
        if (diskData.modules && diskData.modules.length > 0) setModules(diskData.modules);
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

  const loginWithCredentials = (email: string, password?: string) => {
    const cleanEmail = email.trim() || 'student@surveyrank.com';
    const cleanName = cleanEmail.split('@')[0].replace(/[._]/g, ' ') || 'Student';
    const loggedInUser: User = {
      ...DEMO_STUDENT,
      id: 'u-user-' + Date.now(),
      name: cleanName.charAt(0).toUpperCase() + cleanName.slice(1),
      email: cleanEmail,
      role: 'student',
      subscriptionPlan: 'free',
      enrolledAt: new Date().toISOString().split('T')[0]
    };
    setCurrentUser(loggedInUser);
    setIsAuthenticated(true);
    setActiveTab('notes');
    showToast(`Welcome back, ${loggedInUser.name}! Free documents active.`, 'success');
  };

  const loginWithGoogle = () => {
    const googleUser: User = {
      ...DEMO_STUDENT,
      id: 'u-google-' + Date.now(),
      name: 'Joseph Josey',
      email: 'josephjosey19@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      role: 'student',
      subscriptionPlan: 'free',
      enrolledAt: new Date().toISOString().split('T')[0]
    };
    setCurrentUser(googleUser);
    setIsAuthenticated(true);
    setActiveTab('notes');
    showToast('Signed in with Google (josephjosey19@gmail.com). Free Tier Active!', 'success');
  };

  const registerWithCredentials = (
    name: string,
    email: string,
    phone: string,
    district: string,
    targetExam: string
  ) => {
    const newUser: User = {
      id: 'u-reg-' + Date.now(),
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
    setStudents((prev) => [newUser, ...prev]);
    setIsAuthenticated(true);
    setActiveTab('notes');
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

  const logoutUser = () => {
    setIsAuthenticated(false);
    setCurrentUser(DEMO_STUDENT);
    setActiveTab('home');
    showToast('You have been logged out. Please sign in to access the academy.', 'info');
  };

  const enrollStudent = (
    name: string,
    email: string,
    phone: string,
    district: string,
    targetExam: string,
    plan: 'free' | 'master' | 'mock_only' | 'crash' = 'master'
  ) => {
    const updatedStudent: User = {
      id: currentUser.id && currentUser.id !== 'u-demo-student' ? currentUser.id : 'u-' + Date.now(),
      name: name || currentUser.name,
      email: email || currentUser.email,
      phone: phone || currentUser.phone,
      role: 'student',
      avatar: currentUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      enrolledAt: currentUser.enrolledAt || new Date().toISOString().split('T')[0],
      district: district || currentUser.district || 'Palakkad',
      targetExam: targetExam || currentUser.targetExam || 'Surveyor Gr. II',
      completedClassIds: currentUser.completedClassIds || [],
      bookmarkedClassIds: currentUser.bookmarkedClassIds || [],
      savedPYQIds: currentUser.savedPYQIds || [],
      streakDays: currentUser.streakDays || 1,
      subscriptionPlan: plan
    };

    setCurrentUser(updatedStudent);
    setStudents((prev) => [updatedStudent, ...prev.filter((s) => s.id !== updatedStudent.id)]);
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
    setCurrentUser((prev) => {
      const isCompleted = prev.completedClassIds.includes(noteId);
      const newCompleted = isCompleted
        ? prev.completedClassIds.filter((id) => id !== noteId)
        : [...prev.completedClassIds, noteId];
      
      return {
        ...prev,
        completedClassIds: newCompleted
      };
    });

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
    setCurrentUser((prev) => {
      const isBookmarked = prev.bookmarkedClassIds.includes(noteId);
      const newBookmarks = isBookmarked
        ? prev.bookmarkedClassIds.filter((id) => id !== noteId)
        : [...prev.bookmarkedClassIds, noteId];
      
      return {
        ...prev,
        bookmarkedClassIds: newBookmarks
      };
    });

    showToast(
      currentUser.bookmarkedClassIds.includes(noteId)
        ? 'Removed from saved notes bookmarks'
        : 'Study material added to bookmarks',
      'info'
    );
  };

  const toggleSavePYQ = (pyqId: string) => {
    setCurrentUser((prev) => {
      const isSaved = prev.savedPYQIds.includes(pyqId);
      const newSaved = isSaved
        ? prev.savedPYQIds.filter((id) => id !== pyqId)
        : [...prev.savedPYQIds, pyqId];
      
      return {
        ...prev,
        savedPYQIds: newSaved
      };
    });

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

    setTestAttempts((prev) => [newAttempt, ...prev]);

    // Update attempts count for test
    setMockTests((prev) =>
      prev.map((t) => (t.id === attemptData.testId ? { ...t, attemptsCount: t.attemptsCount + 1 } : t))
    );

    showToast(`Exam submitted! Score: ${newAttempt.score.toFixed(2)} marks`, 'success');
    return newAttempt;
  };

  const getRankedLeaderboard = (testId: string): MockTestAttempt[] => {
    const filtered = testAttempts.filter((a) => a.testId === testId);
    
    // Group by student and take ONLY their FIRST attempt (earliest submittedAt)
    // Subsequent attempts are for practice and are not counted for rank.
    const firstAttemptsMap = new Map<string, MockTestAttempt>();

    const chronological = [...filtered].sort(
      (a, b) => new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime()
    );

    for (const att of chronological) {
      const key = att.userId || att.userName;
      if (!firstAttemptsMap.has(key)) {
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
    return testAttempts.some((a) => a.testId === testId && (a.userId === uid || a.userName === currentUser.name));
  };

  const getUserRankInfo = (testId: string, userId?: string) => {
    const uid = userId || currentUser.id;
    const leaderboard = getRankedLeaderboard(testId);
    const userFirstAttempt = leaderboard.find((a) => a.userId === uid || a.userName === currentUser.name) || null;
    const allUserAttempts = testAttempts.filter((a) => a.testId === testId && (a.userId === uid || a.userName === currentUser.name));
    
    return {
      rank: userFirstAttempt?.rank || 0,
      percentile: userFirstAttempt?.percentile || 0,
      totalCandidates: leaderboard.length,
      attempt: userFirstAttempt,
      totalUserAttempts: allUserAttempts.length,
      allAttempts: allUserAttempts
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
    showToast(`Study Notes "${newNote.title.slice(0, 30)}..." published successfully!`, 'success');
  };

  const deleteStudyNote = (noteId: string) => {
    setStudyNotes((prev) => prev.filter((n) => n.id !== noteId));
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

  const addMockTest = (newTestData: Omit<MockTest, 'id' | 'attemptsCount'>) => {
    const newTest: MockTest = {
      ...newTestData,
      id: 'mock-' + Date.now(),
      attemptsCount: 0
    };

    setMockTests((prev) => [newTest, ...prev]);
    showToast(`Mock test "${newTest.title}" created successfully!`, 'success');
  };

  const deleteMockTest = (testId: string) => {
    setMockTests((prev) => prev.filter((t) => t.id !== testId));
    showToast('Mock test deleted', 'info');
  };

  const addPYQPaper = (newPaperData: Omit<PYQPaper, 'id'>) => {
    const newPaper: PYQPaper = {
      ...newPaperData,
      id: 'pyq-' + Date.now()
    };

    setPyqPapers((prev) => [newPaper, ...prev]);
    showToast(`PYQ Paper "${newPaper.title}" uploaded!`, 'success');
  };

  const deletePYQPaper = (paperId: string) => {
    setPyqPapers((prev) => prev.filter((p) => p.id !== paperId));
    showToast('PYQ Paper deleted', 'info');
  };

  const updatePYQQuestions = (paperId: string, questions: PYQQuestion[]) => {
    setPyqPapers((prev) =>
      prev.map((p) => {
        if (p.id === paperId) {
          return {
            ...p,
            questions: questions.map((q, idx) => ({ ...q, questionNumber: idx + 1 })),
            totalQuestions: questions.length
          };
        }
        return p;
      })
    );
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

  const addDoubt = (title: string, content: string, topic: string, relatedClassId?: string) => {
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
      createdAt: new Date().toISOString(),
      upvotes: 1,
      answers: [],
      isResolved: false
    };

    setDoubts((prev) => [newDoubt, ...prev]);
    showToast('Your doubt has been posted! Joseph Josey will review and answer shortly.', 'success');
  };

  const upvoteDoubt = (doubtId: string) => {
    setDoubts((prev) =>
      prev.map((d) => (d.id === doubtId ? { ...d, upvotes: d.upvotes + 1 } : d))
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
          return {
            ...d,
            isResolved: isInstructor ? true : d.isResolved,
            answers: [...d.answers, newAnswer]
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
