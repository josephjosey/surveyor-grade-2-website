-- ============================================================================
-- 🎓 KERALA PSC SURVEY ACADEMY - SUPABASE DATABASE SCHEMA
-- ============================================================================
-- Run this script in the Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- It creates all tables with Row-Level Security (RLS) policies using auth.uid().
-- ============================================================================

-- 1. Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- TABLE 1: PROFILES (Extends Supabase auth.users)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  name TEXT NOT NULL DEFAULT 'Candidate',
  phone TEXT,
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'instructor')),
  avatar TEXT DEFAULT 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
  district TEXT DEFAULT 'Palakkad',
  target_exam TEXT DEFAULT 'Kerala PSC Surveyor Gr. II',
  streak_days INTEGER DEFAULT 1,
  subscription_plan TEXT DEFAULT 'free' CHECK (subscription_plan IN ('free', 'master', 'mock_only', 'crash')),
  completed_class_ids JSONB DEFAULT '[]'::jsonb,
  bookmarked_class_ids JSONB DEFAULT '[]'::jsonb,
  saved_pyq_ids JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- TABLE 2: STUDY NOTES & FORMULA VAULT
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.study_notes (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  module_id TEXT NOT NULL,
  title TEXT NOT NULL,
  title_malayalam TEXT,
  description TEXT,
  read_time TEXT DEFAULT '20 mins read',
  thumbnail TEXT,
  pdf_notes_url TEXT,
  pdf_notes_title TEXT,
  pdf_size TEXT DEFAULT '2.4 MB',
  chapter_overview JSONB DEFAULT '[]'::jsonb,
  takeaways JSONB DEFAULT '[]'::jsonb,
  order_num INTEGER DEFAULT 1,
  is_free_preview BOOLEAN DEFAULT false,
  downloads_count INTEGER DEFAULT 0,
  uploaded_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- TABLE 3: MOCK TESTS (87 MCQ Master Series & Module Exams)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.mock_tests (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER NOT NULL DEFAULT 90,
  total_questions INTEGER NOT NULL DEFAULT 100,
  marks_per_correct NUMERIC(4,2) DEFAULT 1.0,
  negative_marks_per_wrong NUMERIC(4,2) DEFAULT 0.33,
  total_marks NUMERIC(6,2) DEFAULT 100.0,
  questions JSONB NOT NULL DEFAULT '[]'::jsonb,
  difficulty TEXT DEFAULT 'PSC Standard (Advanced)',
  attempts_count INTEGER DEFAULT 0,
  is_ranked_exam BOOLEAN DEFAULT false,
  is_one_time_only BOOLEAN DEFAULT false,
  exam_code TEXT,
  target_department TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- TABLE 4: TEST ATTEMPTS (Statewide Ranks, Leaderboards & Scores)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.test_attempts (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  test_id TEXT NOT NULL REFERENCES public.mock_tests(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_avatar TEXT,
  district TEXT,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  answers JSONB DEFAULT '{}'::jsonb,
  marked_for_review JSONB DEFAULT '[]'::jsonb,
  score NUMERIC(6,2) NOT NULL DEFAULT 0.0,
  correct_count INTEGER DEFAULT 0,
  wrong_count INTEGER DEFAULT 0,
  unattempted_count INTEGER DEFAULT 0,
  accuracy NUMERIC(5,2) DEFAULT 0.0,
  time_spent_seconds INTEGER DEFAULT 0,
  rank INTEGER,
  percentile NUMERIC(5,2),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- TABLE 5: PYQ PAPERS (Previous Year Question Papers Bank)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.pyq_papers (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  exam_name TEXT NOT NULL,
  exam_code TEXT,
  year INTEGER NOT NULL DEFAULT 2024,
  department TEXT,
  total_questions INTEGER DEFAULT 100,
  pdf_url TEXT,
  answer_key_url TEXT,
  questions JSONB DEFAULT '[]'::jsonb,
  is_solved BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- TABLE 6: DOUBTS & Q&A FORUM
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.doubts (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_avatar TEXT,
  user_district TEXT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  topic TEXT NOT NULL,
  related_class_id TEXT,
  image_attachment TEXT,
  upvotes INTEGER DEFAULT 1,
  answers JSONB DEFAULT '[]'::jsonb,
  is_resolved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- 🔒 ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- 1. Profiles Table RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view all public profile names" 
ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 2. Study Notes Table RLS
ALTER TABLE public.study_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view study notes" 
ON public.study_notes FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create study notes" 
ON public.study_notes FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Creators can update their study notes" 
ON public.study_notes FOR UPDATE USING (auth.uid() = user_id OR auth.role() = 'authenticated');

CREATE POLICY "Creators can delete their study notes" 
ON public.study_notes FOR DELETE USING (auth.uid() = user_id OR auth.role() = 'authenticated');

-- 3. Mock Tests Table RLS
ALTER TABLE public.mock_tests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view mock tests" 
ON public.mock_tests FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create mock tests" 
ON public.mock_tests FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Creators can update mock tests" 
ON public.mock_tests FOR UPDATE USING (auth.uid() = user_id OR auth.role() = 'authenticated');

CREATE POLICY "Creators can delete mock tests" 
ON public.mock_tests FOR DELETE USING (auth.uid() = user_id OR auth.role() = 'authenticated');

-- 4. Test Attempts Table RLS
ALTER TABLE public.test_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view test attempts for leaderboards" 
ON public.test_attempts FOR SELECT USING (true);

CREATE POLICY "Users can insert their own test attempts" 
ON public.test_attempts FOR INSERT WITH CHECK (auth.uid() = user_id OR auth.role() = 'authenticated');

CREATE POLICY "Users can update their own test attempts" 
ON public.test_attempts FOR UPDATE USING (auth.uid() = user_id);

-- 5. PYQ Papers Table RLS
ALTER TABLE public.pyq_papers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view PYQ papers" 
ON public.pyq_papers FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create PYQ papers" 
ON public.pyq_papers FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Creators can update PYQ papers" 
ON public.pyq_papers FOR UPDATE USING (auth.uid() = user_id OR auth.role() = 'authenticated');

CREATE POLICY "Creators can delete PYQ papers" 
ON public.pyq_papers FOR DELETE USING (auth.uid() = user_id OR auth.role() = 'authenticated');

-- 6. Doubts Table RLS
ALTER TABLE public.doubts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view doubts" 
ON public.doubts FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create doubts" 
ON public.doubts FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update doubts or post answers" 
ON public.doubts FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authors can delete their doubts" 
ON public.doubts FOR DELETE USING (auth.uid() = user_id OR auth.role() = 'authenticated');

-- ============================================================================
-- ⚡ AUTO-TRIGGER: Create Profile on User Signup
-- ============================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, avatar)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
