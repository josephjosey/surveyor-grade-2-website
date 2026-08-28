export type UserRole = 'student' | 'instructor';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar: string;
  enrolledAt: string;
  district?: string;
  targetExam?: string;
  completedClassIds: string[]; // represents completed study note module ids
  bookmarkedClassIds: string[]; // represents saved note ids
  savedPYQIds: string[];
  streakDays: number;
  subscriptionPlan?: 'free' | 'master' | 'mock_only' | 'crash';
  stateRank?: number;
  percentile?: number;
  mockScore?: number;
}

export interface ClassModule {
  id: string;
  title: string;
  titleMalayalam: string;
  description: string;
  iconName: string;
  badge: string;
  order: number;
}

export interface StudyNote {
  id: string;
  moduleId: string;
  title: string;
  titleMalayalam?: string;
  description: string;
  readTime: string; // e.g. "25 mins read"
  thumbnail: string;
  pdfNotesUrl: string;
  pdfNotesTitle: string;
  pdfSize: string;
  chapterOverview: string[];
  takeaways: string[];
  order: number;
  isFreePreview?: boolean;
  downloadsCount: number;
  uploadedAt: string;
}

export interface PYQQuestion {
  id: string;
  questionNumber: number;
  question: string;
  questionMalayalam?: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  topic: string;
}

export interface PYQPaper {
  id: string;
  title: string;
  examName: string;
  examCode: string;
  year: number;
  department: string;
  totalQuestions: number;
  pdfUrl: string;
  answerKeyUrl: string;
  questions: PYQQuestion[];
  isSolved: boolean;
}

export interface MockQuestion {
  id: string;
  questionNumber: number;
  question: string;
  questionMalayalam?: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  rankerTip?: string;
  topic: string;
  image?: string;
}

export interface MockTest {
  id: string;
  title: string;
  category: 'Full-Length Kerala PSC' | 'Module Specific' | 'High-Yield PYQ Special' | 'Rapid Fire' | 'All-Kerala State Ranked Exam';
  description: string;
  durationMinutes: number;
  totalQuestions: number;
  marksPerCorrect: number;
  negativeMarksPerWrong: number;
  totalMarks: number;
  questions: MockQuestion[];
  difficulty: 'Easy' | 'Moderate' | 'PSC Standard (Advanced)';
  attemptsCount: number;
  isRankedExam?: boolean;
  isOneTimeOnly?: boolean;
  examCode?: string;
  targetDepartment?: string;
}

export interface MockTestAttempt {
  id: string;
  testId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  district?: string;
  startedAt: string;
  submittedAt: string;
  answers: Record<string, number>;
  markedForReview: string[];
  score: number;
  correctCount: number;
  wrongCount: number;
  unattemptedCount: number;
  accuracy: number;
  timeSpentSeconds: number;
  rank?: number;
  percentile?: number;
}

export interface DoubtAnswer {
  id: string;
  doubtId: string;
  authorName: string;
  authorRole: UserRole;
  authorRankBadge?: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
  isVerifiedInstructor: boolean;
}

export interface Doubt {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  userDistrict?: string;
  title: string;
  content: string;
  topic: string;
  relatedClassId?: string;
  imageAttachment?: string;
  createdAt: string;
  upvotes: number;
  answers: DoubtAnswer[];
  isResolved: boolean;
}
