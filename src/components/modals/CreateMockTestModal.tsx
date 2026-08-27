import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, CheckSquare, Plus, Trash2, HelpCircle, Award, Sparkles, FileText, Zap } from 'lucide-react';
import { MockQuestion } from '../../types';

interface CreateMockTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateMockTestModal: React.FC<CreateMockTestModalProps> = ({ isOpen, onClose }) => {
  const { addMockTest, showToast } = useApp();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'Full-Length Kerala PSC' | 'Module Specific' | 'High-Yield PYQ Special' | 'Rapid Fire' | 'All-Kerala State Ranked Exam'>('All-Kerala State Ranked Exam');
  const [description, setDescription] = useState('');
  const [durationMinutes, setDurationMinutes] = useState(45);
  const [marksPerCorrect, setMarksPerCorrect] = useState(1);
  const [negativeMarksPerWrong, setNegativeMarksPerWrong] = useState(0.33);
  const [difficulty, setDifficulty] = useState<'Easy' | 'Moderate' | 'PSC Standard (Advanced)'>('PSC Standard (Advanced)');
  const [isRankedExam, setIsRankedExam] = useState(true);
  const [isOneTimeOnly, setIsOneTimeOnly] = useState(true);
  const [examCode, setExamCode] = useState('KPSC-SLR-2026');

  // Questions builder
  const [questions, setQuestions] = useState<MockQuestion[]>([
    {
      id: 'q-new-1',
      questionNumber: 1,
      question: 'Which instrument is used to enlarge or reduce engineering and survey plans mechanically?',
      questionMalayalam: 'സർവേ പ്ലാനുകൾ ചെറുതാക്കാനും വലുതാക്കാനും ഉപയോഗിക്കുന്ന ഉപകരണം ഏത്?',
      options: ['Pantograph', 'Planimeter', 'Passometer', 'Clinometer'],
      correctOptionIndex: 0,
      explanation: 'A Pantograph is an instrument based on the principle of a parallelogram used for copying, enlarging or reducing maps. Planimeter measures area.',
      rankerTip: 'Do not confuse Pantograph (for scaling/enlarging) with Planimeter (for area measurement)!',
      topic: 'Engineering Drawing'
    }
  ]);

  // Current question draft
  const [curQText, setCurQText] = useState('');
  const [curQMal, setCurQMal] = useState('');
  const [curTopic, setCurTopic] = useState('Survey Basics');
  const [curOptA, setCurOptA] = useState('');
  const [curOptB, setCurOptB] = useState('');
  const [curOptC, setCurOptC] = useState('');
  const [curOptD, setCurOptD] = useState('');
  const [curCorrect, setCurCorrect] = useState(0);
  const [curExp, setCurExp] = useState('');
  const [curTip, setCurTip] = useState('');

  // Bulk Paste State
  const [showBulkPaste, setShowBulkPaste] = useState(false);
  const [bulkQuestionsText, setBulkQuestionsText] = useState('');
  const [bulkKeysText, setBulkKeysText] = useState('');

  if (!isOpen) return null;

  const handleParseAndAddBulk = () => {
    if (!bulkQuestionsText.trim()) {
      showToast('Please paste questions in the box.', 'warning');
      return;
    }

    const keyMap: Record<number, number> = {};
    if (bulkKeysText.trim()) {
      const keyMatches = bulkKeysText.matchAll(/(\d+)[\s.:)-]+([a-dA-D])/g);
      for (const m of keyMatches) {
        const qNum = parseInt(m[1], 10);
        const letter = m[2].toLowerCase();
        const idx = letter === 'a' ? 0 : letter === 'b' ? 1 : letter === 'c' ? 2 : 3;
        keyMap[qNum] = idx;
      }
    }

    const blocks = bulkQuestionsText.trim().split(/\n\s*\n/);
    const parsedList: MockQuestion[] = [];

    for (const block of blocks) {
      const lines = block.trim().split('\n').map((l) => l.trim()).filter(Boolean);
      if (lines.length < 5) continue;

      const qLineMatch = lines[0].match(/^(\d+)\.\s*(.+)$/);
      if (!qLineMatch) continue;

      const qNum = parseInt(qLineMatch[1], 10);
      const qText = qLineMatch[2];

      const opts: string[] = [];
      for (let i = 1; i <= 4; i++) {
        if (lines[i]) {
          opts.push(lines[i].replace(/^[a-dA-D][\s.):-]+\s*/, ''));
        }
      }

      const correctIndex = keyMap[qNum] !== undefined ? keyMap[qNum] : 0;

      parsedList.push({
        id: `q-bulk-${Date.now()}-${qNum}-${Math.random().toString().slice(2, 5)}`,
        questionNumber: questions.length + parsedList.length + 1,
        question: qText,
        options: opts,
        correctOptionIndex: correctIndex,
        explanation: `Official Kerala PSC Answer Key: Option ${String.fromCharCode(65 + correctIndex)} (${opts[correctIndex] || ''}). Standard curriculum.`,
        topic: 'General Surveying & PSC Syllabus'
      });
    }

    if (parsedList.length > 0) {
      setQuestions((prev) => [...prev, ...parsedList]);
      showToast(`Successfully parsed and appended ${parsedList.length} questions!`, 'success');
      setBulkQuestionsText('');
      setBulkKeysText('');
      setShowBulkPaste(false);
    } else {
      showToast('Could not find questions matching "1. Question... a)... b)... c)... d)..."', 'warning');
    }
  };

  const handleAddQuestion = () => {
    if (!curQText.trim() || !curOptA.trim() || !curOptB.trim()) {
      alert('Please fill at least the question text and options A & B.');
      return;
    }

    const newQ: MockQuestion = {
      id: 'q-custom-' + Date.now(),
      questionNumber: questions.length + 1,
      question: curQText,
      questionMalayalam: curQMal.trim() ? curQMal : undefined,
      options: [curOptA, curOptB, curOptC || 'Option C', curOptD || 'Option D'],
      correctOptionIndex: curCorrect,
      explanation: curExp || 'Official answer as per standard Kerala PSC survey answer key.',
      rankerTip: curTip.trim() ? curTip : undefined,
      topic: curTopic
    };

    setQuestions([...questions, newQ]);
    // Reset draft
    setCurQText('');
    setCurQMal('');
    setCurOptA('');
    setCurOptB('');
    setCurOptC('');
    setCurOptD('');
    setCurCorrect(0);
    setCurExp('');
    setCurTip('');
  };

  const handleRemoveQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    if (questions.length === 0) {
      alert('Please add at least one question to the mock test.');
      return;
    }

    addMockTest({
      title,
      category,
      description: description || 'Kerala PSC survey pattern timed practice test.',
      durationMinutes,
      totalQuestions: questions.length,
      marksPerCorrect,
      negativeMarksPerWrong,
      totalMarks: questions.length * marksPerCorrect,
      difficulty,
      isRankedExam,
      isOneTimeOnly,
      examCode: examCode || 'KPSC-SLR-2026',
      questions
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-brand-400" />
            <h3 className="text-lg font-bold">Create Kerala PSC Mock Test</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* Test Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                Mock Test Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Kerala PSC Survey & Land Records Model Exam #2"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="All-Kerala State Ranked Exam">All-Kerala State Ranked Exam</option>
                <option value="Full-Length Kerala PSC">Full-Length Kerala PSC</option>
                <option value="Module Specific">Module Specific</option>
                <option value="High-Yield PYQ Special">High-Yield PYQ Special</option>
                <option value="Rapid Fire">Rapid Fire</option>
              </select>
            </div>
          </div>

          {/* Ranked Exam & 1-Attempt Settings */}
          <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200 space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isRankedCheck"
                checked={isRankedExam}
                onChange={(e) => {
                  setIsRankedExam(e.target.checked);
                  if (e.target.checked) setIsOneTimeOnly(true);
                }}
                className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500"
              />
              <label htmlFor="isRankedCheck" className="text-xs font-bold text-slate-800 cursor-pointer">
                🏆 Official All-Kerala State-Level Ranked Exam (Publishes to Statewide Leaderboard)
              </label>
            </div>

            {isRankedExam && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isOneTimeCheck"
                    checked={isOneTimeOnly}
                    onChange={(e) => setIsOneTimeOnly(e.target.checked)}
                    className="w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500"
                  />
                  <label htmlFor="isOneTimeCheck" className="font-semibold text-slate-700 cursor-pointer">
                    Strictly 1 Attempt Per Student
                  </label>
                </div>

                <div>
                  <input
                    type="text"
                    value={examCode}
                    onChange={(e) => setExamCode(e.target.value)}
                    placeholder="Exam Code (e.g. KPSC-SLR-2026)"
                    className="w-full px-2.5 py-1 text-xs border border-slate-300 rounded bg-white"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Duration (Minutes)
              </label>
              <input
                type="number"
                min={5}
                max={180}
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(Number(e.target.value))}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Marks Per Correct
              </label>
              <input
                type="number"
                step="0.5"
                value={marksPerCorrect}
                onChange={(e) => setMarksPerCorrect(Number(e.target.value))}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Negative Marks Per Wrong
              </label>
              <input
                type="number"
                step="0.01"
                value={negativeMarksPerWrong}
                onChange={(e) => setNegativeMarksPerWrong(Number(e.target.value))}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none"
              />
            </div>
          </div>

          {/* Existing Questions in test */}
          <div className="border-t border-slate-200 pt-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                Questions in this Test ({questions.length})
              </h4>
              <button
                type="button"
                onClick={() => setShowBulkPaste(!showBulkPaste)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold hover:bg-amber-100 transition shadow-xs"
              >
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                <span>{showBulkPaste ? 'Hide Bulk Paste' : '⚡ Bulk Paste / Import Questions'}</span>
              </button>
            </div>

            {/* Bulk Paste Drawer */}
            {showBulkPaste && (
              <div className="mb-4 p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-amber-900">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Bulk Paste Multiple Choice Questions</span>
                  </div>
                  <span className="text-[10px] text-amber-700 font-medium">Format: 1. Question... a) ... b) ... c) ... d) ...</span>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Paste Questions & Options:
                  </label>
                  <textarea
                    rows={6}
                    value={bulkQuestionsText}
                    onChange={(e) => setBulkQuestionsText(e.target.value)}
                    placeholder={`1. Plane surveys are considered upto an area of\na) 200 sq km\nb) 300 sq km\nc) 260 sq km\nd) 150 sq km\n\n2. The smallest length that can be drawn on a map is\na) 0.2 mm\nb) 0.5 mm\nc) 10 mm\nd) 15 mm`}
                    className="w-full p-2 text-xs border border-slate-300 rounded-lg font-mono focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Paste Answer Key (e.g. 1 c, 2 a, 3 b... or tabular answer key):
                  </label>
                  <textarea
                    rows={2}
                    value={bulkKeysText}
                    onChange={(e) => setBulkKeysText(e.target.value)}
                    placeholder="1 c) 2 a) 3 b) 4 c) 5 c) ... OR 1: c, 2: a, 3: b"
                    className="w-full p-2 text-xs border border-slate-300 rounded-lg font-mono focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowBulkPaste(false)}
                    className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-200 rounded-lg transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleParseAndAddBulk}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg shadow transition"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Parse & Append MCQs</span>
                  </button>
                </div>
              </div>
            )}
            <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
              {questions.map((q, idx) => (
                <div key={q.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <div className="font-semibold text-slate-800">
                      Q{idx + 1}: {q.question}
                    </div>
                    <div className="text-slate-500">
                      Correct: Option {String.fromCharCode(65 + q.correctOptionIndex)} ({q.options[q.correctOptionIndex]})
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveQuestion(idx)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Add New Question Section */}
          <div className="bg-brand-50/40 p-4 rounded-xl border border-brand-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-brand-900 flex items-center gap-1">
                <Plus className="w-4 h-4 text-brand-600" />
                Add Question #{questions.length + 1}
              </span>
              <input
                type="text"
                placeholder="Topic (e.g. Levelling)"
                value={curTopic}
                onChange={(e) => setCurTopic(e.target.value)}
                className="px-2.5 py-1 text-xs border border-brand-200 rounded bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Question (English)</label>
              <textarea
                rows={2}
                value={curQText}
                onChange={(e) => setCurQText(e.target.value)}
                placeholder="Enter question text here..."
                className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs bg-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Malayalam Translation (Optional)</label>
              <input
                type="text"
                value={curQMal}
                onChange={(e) => setCurQMal(e.target.value)}
                placeholder="മലയാളത്തിലുള്ള ചോദ്യം (Optional)"
                className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs bg-white outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="block text-xs text-slate-600 mb-0.5">Option A</label>
                <input
                  type="text"
                  value={curOptA}
                  onChange={(e) => setCurOptA(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs bg-white"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 mb-0.5">Option B</label>
                <input
                  type="text"
                  value={curOptB}
                  onChange={(e) => setCurOptB(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs bg-white"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 mb-0.5">Option C</label>
                <input
                  type="text"
                  value={curOptC}
                  onChange={(e) => setCurOptC(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs bg-white"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 mb-0.5">Option D</label>
                <input
                  type="text"
                  value={curOptD}
                  onChange={(e) => setCurOptD(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Correct Answer</label>
                <select
                  value={curCorrect}
                  onChange={(e) => setCurCorrect(Number(e.target.value))}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs bg-white font-semibold text-brand-700"
                >
                  <option value={0}>Option A</option>
                  <option value={1}>Option B</option>
                  <option value={2}>Option C</option>
                  <option value={3}>Option D</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Ranker Trick / Tip</label>
                <input
                  type="text"
                  value={curTip}
                  onChange={(e) => setCurTip(e.target.value)}
                  placeholder="e.g. Remember to check units (cm vs m)"
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-600 mb-1">Explanation & Calculation Steps</label>
              <textarea
                rows={2}
                value={curExp}
                onChange={(e) => setCurExp(e.target.value)}
                placeholder="Explain the step-by-step formula or reasoning..."
                className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs bg-white outline-none"
              />
            </div>

            <button
              type="button"
              onClick={handleAddQuestion}
              className="w-full py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow"
            >
              <Plus className="w-3.5 h-3.5" />
              Add This Question to Test
            </button>
          </div>

          <div className="pt-3 flex justify-end gap-3 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg shadow"
            >
              Save & Publish Mock Test
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
