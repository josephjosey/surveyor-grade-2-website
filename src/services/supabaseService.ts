import { supabase } from '../supabaseClient';
import {
  User,
  StudyNote,
  MockTest,
  MockTestAttempt,
  PYQPaper,
  PYQQuestion,
  Doubt,
  DoubtAnswer
} from '../types';

// ============================================================================
// 1. PROFILES (USER DATA)
// ============================================================================

export async function fetchUserProfile(userId: string): Promise<Partial<User> | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error || !data) return null;

    return {
      id: data.id,
      email: data.email,
      name: data.name,
      phone: data.phone,
      role: data.role,
      avatar: data.avatar,
      district: data.district,
      targetExam: data.target_exam,
      streakDays: data.streak_days || 1,
      subscriptionPlan: data.subscription_plan || 'free',
      completedClassIds: data.completed_class_ids || [],
      bookmarkedClassIds: data.bookmarked_class_ids || [],
      savedPYQIds: data.saved_pyq_ids || []
    };
  } catch (err) {
    console.warn('Supabase: error fetching profile:', err);
    return null;
  }
}

export async function fetchAllProfiles(): Promise<User[] | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) return null;

    return data.map((d: any) => ({
      id: d.id,
      email: d.email,
      name: d.name,
      phone: d.phone || '',
      role: d.role || 'student',
      avatar: d.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      district: d.district || 'Palakkad',
      targetExam: d.target_exam || 'Kerala PSC Surveyor Gr. II',
      streakDays: d.streak_days || 1,
      subscriptionPlan: d.subscription_plan || 'free',
      completedClassIds: Array.isArray(d.completed_class_ids) ? d.completed_class_ids : [],
      bookmarkedClassIds: Array.isArray(d.bookmarked_class_ids) ? d.bookmarked_class_ids : [],
      savedPYQIds: Array.isArray(d.saved_pyq_ids) ? d.saved_pyq_ids : [],
      enrolledAt: d.created_at ? d.created_at.split('T')[0] : '2026-08-01'
    }));
  } catch (err) {
    console.warn('Supabase: error fetching all profiles:', err);
    return null;
  }
}

export async function updateUserProfile(userId: string, updates: Partial<User>): Promise<boolean> {
  try {
    // 1. Resolve real authenticated Supabase UUID if userId is a temporary local ID
    let targetId = userId;
    const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(userId);
    const { data: authData } = await supabase.auth.getUser();
    const sessionUser = authData?.user;

    if (!isUUID && sessionUser?.id) {
      targetId = sessionUser.id;
    }

    const payload: any = {
      updated_at: new Date().toISOString()
    };

    if (updates.name !== undefined) payload.name = updates.name;
    if (updates.email !== undefined) payload.email = updates.email;
    if (updates.phone !== undefined) payload.phone = updates.phone;
    if (updates.role !== undefined) payload.role = updates.role;
    if (updates.avatar !== undefined) payload.avatar = updates.avatar;
    if (updates.district !== undefined) payload.district = updates.district;
    if (updates.targetExam !== undefined) payload.target_exam = updates.targetExam;
    if (updates.subscriptionPlan !== undefined) payload.subscription_plan = updates.subscriptionPlan;
    if (updates.completedClassIds !== undefined) payload.completed_class_ids = updates.completedClassIds;
    if (updates.bookmarkedClassIds !== undefined) payload.bookmarked_class_ids = updates.bookmarkedClassIds;
    if (updates.savedPYQIds !== undefined) payload.saved_pyq_ids = updates.savedPYQIds;
    if (updates.streakDays !== undefined) payload.streak_days = updates.streakDays;

    // If targetId is still not a UUID (e.g. offline guest without Supabase session), avoid SQL crash
    const isValidUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(targetId);
    if (!isValidUUID) {
      return true;
    }

    // 2. First attempt direct UPDATE on existing profile row
    const { data: updatedRows, error: updateError } = await supabase
      .from('profiles')
      .update(payload)
      .eq('id', targetId)
      .select();

    if (!updateError && updatedRows && updatedRows.length > 0) {
      return true;
    }

    // 3. If update did not affect rows (profile does not exist yet), perform UPSERT with all required fields
    const { error: upsertError } = await supabase
      .from('profiles')
      .upsert({
        id: targetId,
        email: updates.email || sessionUser?.email || '',
        name: updates.name || sessionUser?.user_metadata?.full_name || 'Candidate',
        district: updates.district || 'Palakkad',
        target_exam: updates.targetExam || 'Kerala PSC Surveyor Gr. II',
        role: updates.role || 'student',
        subscription_plan: updates.subscriptionPlan || 'free',
        ...payload
      });

    if (upsertError) {
      console.error('Supabase profile upsert notice:', upsertError);
      return false;
    }

    return true;
  } catch (err) {
    console.error('Supabase: error updating profile:', err);
    return false;
  }
}

// ============================================================================
// 2. STUDY NOTES & FORMULAS (CRUD)
// ============================================================================

export async function fetchStudyNotes(): Promise<StudyNote[] | null> {
  try {
    const { data, error } = await supabase
      .from('study_notes')
      .select('*')
      .order('order_num', { ascending: true });

    if (error || !data || data.length === 0) return null;

    return data.map((d: any) => ({
      id: d.id,
      moduleId: d.module_id,
      title: d.title,
      titleMalayalam: d.title_malayalam,
      description: d.description,
      readTime: d.read_time,
      thumbnail: d.thumbnail,
      pdfNotesUrl: d.pdf_notes_url,
      pdfNotesTitle: d.pdf_notes_title,
      pdfSize: d.pdf_size,
      chapterOverview: Array.isArray(d.chapter_overview) ? d.chapter_overview : [],
      takeaways: Array.isArray(d.takeaways) ? d.takeaways : [],
      order: d.order_num,
      isFreePreview: d.is_free_preview,
      downloadsCount: d.downloads_count || 0,
      uploadedAt: d.uploaded_at || d.created_at
    }));
  } catch (err) {
    console.warn('Supabase: error fetching study notes:', err);
    return null;
  }
}

export async function createStudyNote(note: StudyNote, userId?: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('study_notes').insert({
      id: note.id,
      user_id: userId,
      module_id: note.moduleId,
      title: note.title,
      title_malayalam: note.titleMalayalam,
      description: note.description,
      read_time: note.readTime,
      thumbnail: note.thumbnail,
      pdf_notes_url: note.pdfNotesUrl,
      pdf_notes_title: note.pdfNotesTitle,
      pdf_size: note.pdfSize,
      chapter_overview: note.chapterOverview,
      takeaways: note.takeaways,
      order_num: note.order,
      is_free_preview: note.isFreePreview,
      downloads_count: note.downloadsCount || 0,
      uploaded_at: note.uploadedAt
    });

    return !error;
  } catch (err) {
    console.warn('Supabase: error creating study note:', err);
    return false;
  }
}

export async function deleteStudyNote(noteId: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('study_notes').delete().eq('id', noteId);
    return !error;
  } catch (err) {
    console.warn('Supabase: error deleting study note:', err);
    return false;
  }
}

// ============================================================================
// 3. MOCK TESTS (CRUD)
// ============================================================================

export async function fetchMockTests(): Promise<MockTest[] | null> {
  try {
    const { data, error } = await supabase
      .from('mock_tests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) return null;

    return data.map((t: any) => ({
      id: t.id,
      title: t.title,
      category: t.category,
      description: t.description,
      durationMinutes: t.duration_minutes,
      totalQuestions: t.total_questions,
      marksPerCorrect: Number(t.marks_per_correct),
      negativeMarksPerWrong: Number(t.negative_marks_per_wrong),
      totalMarks: Number(t.total_marks),
      questions: Array.isArray(t.questions) ? t.questions : [],
      difficulty: t.difficulty,
      attemptsCount: t.attempts_count || 0,
      isRankedExam: t.is_ranked_exam,
      isOneTimeOnly: t.is_one_time_only,
      examCode: t.exam_code,
      targetDepartment: t.target_department
    }));
  } catch (err) {
    console.warn('Supabase: error fetching mock tests:', err);
    return null;
  }
}

export async function createMockTest(test: MockTest, userId?: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('mock_tests').insert({
      id: test.id,
      user_id: userId,
      title: test.title,
      category: test.category,
      description: test.description,
      duration_minutes: test.durationMinutes,
      total_questions: test.totalQuestions,
      marks_per_correct: test.marksPerCorrect,
      negative_marks_per_wrong: test.negativeMarksPerWrong,
      total_marks: test.totalMarks,
      questions: test.questions,
      difficulty: test.difficulty,
      attempts_count: test.attemptsCount || 0,
      is_ranked_exam: test.isRankedExam || false,
      is_one_time_only: test.isOneTimeOnly || false,
      exam_code: test.examCode,
      target_department: test.targetDepartment
    });

    return !error;
  } catch (err) {
    console.warn('Supabase: error creating mock test:', err);
    return false;
  }
}

export async function deleteMockTest(testId: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('mock_tests').delete().eq('id', testId);
    return !error;
  } catch (err) {
    console.warn('Supabase: error deleting mock test:', err);
    return false;
  }
}

// ============================================================================
// 4. TEST ATTEMPTS & STATEWIDE LEADERBOARD
// ============================================================================

export async function fetchTestAttempts(): Promise<MockTestAttempt[] | null> {
  try {
    const { data, error } = await supabase
      .from('test_attempts')
      .select('*')
      .order('score', { ascending: false });

    if (error || !data || data.length === 0) return null;

    return data.map((a: any) => ({
      id: a.id,
      testId: a.test_id,
      userId: a.user_id,
      userName: a.user_name,
      userAvatar: a.user_avatar,
      district: a.district,
      startedAt: a.started_at,
      submittedAt: a.submitted_at,
      answers: a.answers || {},
      markedForReview: Array.isArray(a.marked_for_review) ? a.marked_for_review : [],
      score: Number(a.score),
      correctCount: a.correct_count,
      wrongCount: a.wrong_count,
      unattemptedCount: a.unattempted_count,
      accuracy: Number(a.accuracy),
      timeSpentSeconds: a.time_spent_seconds,
      rank: a.rank,
      percentile: a.percentile ? Number(a.percentile) : undefined
    }));
  } catch (err) {
    console.warn('Supabase: error fetching test attempts:', err);
    return null;
  }
}

export async function saveTestAttempt(attempt: MockTestAttempt, userId?: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('test_attempts').insert({
      id: attempt.id,
      user_id: userId || attempt.userId,
      test_id: attempt.testId,
      user_name: attempt.userName,
      user_avatar: attempt.userAvatar,
      district: attempt.district,
      started_at: attempt.startedAt,
      submitted_at: attempt.submittedAt,
      answers: attempt.answers,
      marked_for_review: attempt.markedForReview,
      score: attempt.score,
      correct_count: attempt.correctCount,
      wrong_count: attempt.wrongCount,
      unattempted_count: attempt.unattemptedCount,
      accuracy: attempt.accuracy,
      time_spent_seconds: attempt.timeSpentSeconds,
      rank: attempt.rank,
      percentile: attempt.percentile
    });

    return !error;
  } catch (err) {
    console.warn('Supabase: error saving test attempt:', err);
    return false;
  }
}

// ============================================================================
// 5. PYQ PAPERS (CRUD)
// ============================================================================

export async function fetchPYQPapers(): Promise<PYQPaper[] | null> {
  try {
    const { data, error } = await supabase
      .from('pyq_papers')
      .select('*')
      .order('year', { ascending: false });

    if (error || !data || data.length === 0) return null;

    return data.map((p: any) => ({
      id: p.id,
      title: p.title,
      examName: p.exam_name,
      examCode: p.exam_code,
      year: p.year,
      department: p.department,
      totalQuestions: p.total_questions,
      pdfUrl: p.pdf_url,
      answerKeyUrl: p.answer_key_url,
      questions: Array.isArray(p.questions) ? p.questions : [],
      isSolved: p.is_solved
    }));
  } catch (err) {
    console.warn('Supabase: error fetching PYQ papers:', err);
    return null;
  }
}

export async function createPYQPaper(paper: PYQPaper, userId?: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('pyq_papers').insert({
      id: paper.id,
      user_id: userId,
      title: paper.title,
      exam_name: paper.examName,
      exam_code: paper.examCode,
      year: paper.year,
      department: paper.department,
      total_questions: paper.totalQuestions,
      pdf_url: paper.pdfUrl,
      answer_key_url: paper.answerKeyUrl,
      questions: paper.questions,
      is_solved: paper.isSolved
    });

    return !error;
  } catch (err) {
    console.warn('Supabase: error creating PYQ paper:', err);
    return false;
  }
}

export async function updatePYQQuestions(paperId: string, questions: PYQQuestion[]): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('pyq_papers')
      .update({
        questions,
        total_questions: questions.length
      })
      .eq('id', paperId);

    return !error;
  } catch (err) {
    console.warn('Supabase: error updating PYQ questions:', err);
    return false;
  }
}

export async function deletePYQPaper(paperId: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('pyq_papers').delete().eq('id', paperId);
    return !error;
  } catch (err) {
    console.warn('Supabase: error deleting PYQ paper:', err);
    return false;
  }
}

// ============================================================================
// 6. DOUBTS & FORUM (CRUD)
// ============================================================================

export async function fetchDoubts(): Promise<Doubt[] | null> {
  try {
    const { data, error } = await supabase
      .from('doubts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) return null;

    return data.map((d: any) => ({
      id: d.id,
      userId: d.user_id,
      userName: d.user_name,
      userAvatar: d.user_avatar,
      userDistrict: d.user_district,
      title: d.title,
      content: d.content,
      topic: d.topic,
      relatedClassId: d.related_class_id,
      imageAttachment: d.image_attachment,
      upvotes: d.upvotes || 1,
      answers: Array.isArray(d.answers) ? d.answers : [],
      isResolved: d.is_resolved,
      createdAt: d.created_at
    }));
  } catch (err) {
    console.warn('Supabase: error fetching doubts:', err);
    return null;
  }
}

export async function createDoubt(doubt: Doubt, userId?: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('doubts').insert({
      id: doubt.id,
      user_id: userId || doubt.userId,
      user_name: doubt.userName,
      user_avatar: doubt.userAvatar,
      user_district: doubt.userDistrict,
      title: doubt.title,
      content: doubt.content,
      topic: doubt.topic,
      related_class_id: doubt.relatedClassId,
      image_attachment: doubt.imageAttachment,
      upvotes: doubt.upvotes || 1,
      answers: doubt.answers || [],
      is_resolved: doubt.isResolved || false,
      created_at: doubt.createdAt
    });

    return !error;
  } catch (err) {
    console.warn('Supabase: error creating doubt:', err);
    return false;
  }
}

export async function updateDoubt(doubtId: string, updates: Partial<Doubt>): Promise<boolean> {
  try {
    const payload: any = {};
    if (updates.upvotes !== undefined) payload.upvotes = updates.upvotes;
    if (updates.answers !== undefined) payload.answers = updates.answers;
    if (updates.isResolved !== undefined) payload.is_resolved = updates.isResolved;

    const { error } = await supabase.from('doubts').update(payload).eq('id', doubtId);
    return !error;
  } catch (err) {
    console.warn('Supabase: error updating doubt:', err);
    return false;
  }
}

export async function deleteDoubt(doubtId: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('doubts').delete().eq('id', doubtId);
    return !error;
  } catch (err) {
    console.warn('Supabase: error deleting doubt:', err);
    return false;
  }
}
