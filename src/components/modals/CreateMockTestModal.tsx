import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  CheckSquare,
  Plus,
  Trash2,
  HelpCircle,
  Award,
  Sparkles,
  FileText,
  Zap,
  BookOpen,
  Filter,
  Check
} from 'lucide-react';
import { MockQuestion, BankQuestion } from '../../types';

interface CreateMockTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateMockTestModal: React.FC<CreateMockTestModalProps> = ({ isOpen, onClose }) => {
  const { addMockTest, showToast, modules, bankQuestions } = useApp();

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

  // Questions in this Mock Test
  const [questions, setQuestions] = useState<MockQuestion[]>([]);

  // Bank Question Picker State
  const [showBankPicker, setShowBankPicker] = useState(false);
  const [bankFilterModule, setBankFilterModule] = useState<number | 'all'>('all');
  const [selectedBankIds, setSelectedBankIds] = useState<Set<string>>(new Set());

  // Current manual question draft
  const [curQText, setCurQText] = useState('');
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

  // Filter bank questions for the picker
  const filteredBankQuestions = bankQuestions.filter((q) => {
    if (bankFilterModule !== 'all' && q.moduleNumber !== bankFilterModule) return false;
    return true;
  });

  const toggleBankQuestionSelection = (id: string) => {
    setSelectedBankIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleSelectAllInModule = () => {
    const idsToAdd = filteredBankQuestions.map((q) => q.id);
    setSelectedBankIds((prev) => {
      const next = new Set(prev);
      idsToAdd.forEach((id) => next.add(id));
      return next;
    });
  };

  const handleAddSelectedFromBank = () => {
    if (selectedBankIds.size === 0) {
      showToast('Please select at least one question from the bank.', 'warning');
      return;
    }

    const selectedList = bankQuestions.filter((q) => selectedBankIds.has(q.id));
    const newMockQuestions: MockQuestion[] = selectedList.map((bq, idx) => ({
      id: `q-from-bank-${bq.id}-${Date.now()}-${idx}`,
      questionNumber: questions.length + idx + 1,
      question: bq.question,
      options: bq.options,
      correctOptionIndex: bq.correctOptionIndex,
      explanation: bq.explanation,
      rankerTip: bq.rankerTip,
      topic: bq.topic || `Module ${bq.moduleNumber}`
    }));

    setQuestions([...questions, ...newMockQuestions]);
    setSelectedBankIds(new Set());
    setShowBankPicker(false);
    showToast(`Added ${newMockQuestions.length} questions from question bank!`, 'success');
  };

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
        options: opts.length === 4 ? opts : [...opts, 'Option C', 'Option D'].slice(0, 4),
        correctOptionIndex: correctIndex,
        explanation: 'Official answer as per standard Kerala PSC survey answer key.',
        topic: 'General Surveying'
      });
    }

    if (parsedList.length === 0) {
      showToast('Could not parse any questions. Make sure format is "1. Question... a) ... b) ..."', 'error');
      return;
    }

    setQuestions([...questions, ...parsedList]);
    setBulkQuestionsText('');
    setBulkKeysText('');
    setShowBulkPaste(false);
    showToast(`Successfully added ${parsedList.length} questions from bulk text!`, 'success');
  };

  const handleAddQuestion = () => {
    if (!curQText.trim() || !curOptA.trim() || !curOptB.trim()) {
      showToast('Please fill at least the question text and options A & B.', 'warning');
      return;
    }

    const newQ: MockQuestion = {
      id: 'q-custom-' + Date.now(),
      questionNumber: questions.length + 1,
      question: curQText,
      options: [curOptA, curOptB, curOptC || 'Option C', curOptD || 'Option D'],
      correctOptionIndex: curCorrect,
      explanation: curExp || 'Official answer as per standard Kerala PSC survey answer key.',
      rankerTip: curTip.trim() ? curTip : undefined,
      topic: curTopic
    };

    setQuestions([...questions, newQ]);
    setCurQText('');
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
    if (!title.trim()) {
      showToast('Please provide an exam title.', 'warning');
      return;
    }
    if (questions.length === 0) {
      showToast('Please add at least one question to the mock test.', 'warning');
      return;
    }

    addMockTest({
      title,
      category,
      description: description || 'Kerala PSC survey pattern timed practice test with Statewide Rank List.',
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
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full p-6 space-y-5 my-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto text-left">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-brand-600">
            <CheckSquare className="w-5 h-5" />
            <h3 className="font-black text-slate-900 text-lg">Create New Kerala PSC Mock Exam</h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Mock Test Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Grand Mock Exam 04: Full Syllabus 100 Marks"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none"
              >
                <option value="All-Kerala State Ranked Exam">All-Kerala State Ranked Exam</option>
                <option value="Full-Length Kerala PSC">Full-Length Kerala PSC (100 Qs)</option>
                <option value="Module Specific">Module Specific Practice</option>
                <option value="High-Yield PYQ Special">High-Yield PYQ Special</option>
                <option value="Rapid Fire">Rapid Fire Exam</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Description / Instructions
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. 100 Questions based on official Kerala PSC Surveyor syllabus. Negative marks: 0.33."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none"
            />
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                Statewide Ranking & Candidate Podium Rules
              </span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Leaderboard Active
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isRankedExamCheck"
                  checked={isRankedExam}
                  onChange={(e) => setIsRankedExam(e.target.checked)}
                  className="w-4 h-4 text-brand-600 rounded border-slate-300"
                />
                <label htmlFor="isRankedExamCheck" className="font-semibold text-slate-700 cursor-pointer">
                  Enable Statewide Leaderboard & Rank
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isOneTimeCheck"
                  checked={isOneTimeOnly}
                  onChange={(e) => setIsOneTimeOnly(e.target.checked)}
                  className="w-4 h-4 text-brand-600 rounded border-slate-300"
                />
                <label htmlFor="isOneTimeCheck" className="font-semibold text-slate-700 cursor-pointer">
                  1st Try for Statewide Rank (Subsequent = Practice)
                </label>
              </div>
            </div>
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

          {/* QUESTION SOURCES STRIP */}
          <div className="border-t border-slate-200 pt-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <span>Questions in this Mock Test:</span>
                <span className="px-2 py-0.5 rounded-full bg-brand-100 text-brand-800 text-xs font-black">
                  {questions.length} Questions ({questions.length * marksPerCorrect} Marks)
                </span>
              </h4>

              <div className="flex items-center gap-2">
                {/* 1. BUTTON TO PICK FROM MCQ & PYQ BANK */}
                <button
                  type="button"
                  onClick={() => {
                    setShowBankPicker(!showBankPicker);
                    setShowBulkPaste(false);
                  }}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-xs ${
                    showBankPicker
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-50 border border-blue-200 text-blue-800 hover:bg-blue-100'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Select from MCQ & PYQ Bank</span>
                </button>

                {/* 2. BUTTON FOR BULK PASTE */}
                <button
                  type="button"
                  onClick={() => {
                    setShowBulkPaste(!showBulkPaste);
                    setShowBankPicker(false);
                  }}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-xs ${
                    showBulkPaste
                      ? 'bg-amber-600 text-white'
                      : 'bg-amber-50 border border-amber-300 text-amber-800 hover:bg-amber-100'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                  <span>Bulk Paste</span>
                </button>
              </div>
            </div>

            {/* DRAWER 1: SELECT FROM QUESTION BANK */}
            {showBankPicker && (
              <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl space-y-3 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-200/80 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    <span className="font-bold text-xs text-blue-900">
                      Choose from 10 Syllabus Portions ({bankQuestions.length} Questions in Bank)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={bankFilterModule}
                      onChange={(e) => setBankFilterModule(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                      className="px-2.5 py-1 text-xs border border-blue-300 rounded-lg bg-white font-medium text-slate-800 outline-none"
                    >
                      <option value="all">All 10 Modules ({bankQuestions.length} Qs)</option>
                      {modules.map((m) => {
                        const count = bankQuestions.filter((q) => q.moduleNumber === m.order).length;
                        return (
                          <option key={m.id} value={m.order}>
                            Module {m.order}: {m.title} ({count} Qs)
                          </option>
                        );
                      })}
                    </select>

                    <button
                      type="button"
                      onClick={handleSelectAllInModule}
                      className="px-2.5 py-1 bg-white border border-blue-300 text-blue-700 hover:bg-blue-50 rounded-lg text-xs font-semibold"
                    >
                      Select All ({filteredBankQuestions.length})
                    </button>
                  </div>
                </div>

                {/* Question Checkbox List */}
                <div className="max-h-56 overflow-y-auto space-y-2 pr-1">
                  {filteredBankQuestions.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-500">No questions available in this module.</div>
                  ) : (
                    filteredBankQuestions.map((bq) => {
                      const isSelected = selectedBankIds.has(bq.id);
                      return (
                        <div
                          key={bq.id}
                          onClick={() => toggleBankQuestionSelection(bq.id)}
                          className={`p-2.5 rounded-xl border text-xs cursor-pointer transition flex items-start gap-2.5 ${
                            isSelected
                              ? 'bg-blue-100/90 border-blue-600 text-blue-950 font-medium'
                              : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {}}
                            className="mt-0.5 w-4 h-4 text-blue-600 rounded"
                          />
                          <div className="space-y-0.5 flex-1">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-slate-500 text-[10px]">
                                Mod {bq.moduleNumber} • {bq.type === 'pyq' ? `PYQ (${bq.examName || 'Kerala PSC'})` : 'MCQ'}
                              </span>
                            </div>
                            <p className="line-clamp-1">{bq.question}</p>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Bottom Action */}
                <div className="flex items-center justify-between pt-2 border-t border-blue-200/80">
                  <span className="text-xs font-bold text-blue-900">
                    {selectedBankIds.size} questions selected
                  </span>
                  <button
                    type="button"
                    onClick={handleAddSelectedFromBank}
                    className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow transition flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Insert Selected into Mock Test</span>
                  </button>
                </div>
              </div>
            )}

            {/* DRAWER 2: BULK PASTE */}
            {showBulkPaste && (
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-3 animate-fadeIn">
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
                    rows={5}
                    value={bulkQuestionsText}
                    onChange={(e) => setBulkQuestionsText(e.target.value)}
                    placeholder={`1. The trimmed size of A1 sheet is\na) 841 x 1189 mm\nb) 594 x 841 mm\nc) 420 x 594 mm\nd) 297 x 420 mm`}
                    className="w-full p-2 text-xs border border-slate-300 rounded-lg font-mono focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Paste Answer Key (optional):
                  </label>
                  <textarea
                    rows={2}
                    value={bulkKeysText}
                    onChange={(e) => setBulkKeysText(e.target.value)}
                    placeholder="1: b, 2: a, 3: c..."
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

            {/* List of Questions Added */}
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {questions.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-400 bg-slate-50 border border-slate-200 rounded-xl">
                  No questions added yet. Use "Select from MCQ & PYQ Bank" or add questions below.
                </div>
              ) : (
                questions.map((q, idx) => (
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
                ))
              )}
            </div>
          </div>

          {/* Add Question Manually */}
          <div className="bg-brand-50/40 p-4 rounded-xl border border-brand-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-brand-900 flex items-center gap-1">
                <Plus className="w-4 h-4 text-brand-600" />
                Add Single Question Manually #{questions.length + 1}
              </span>
              <input
                type="text"
                placeholder="Topic (e.g. Metric Chain)"
                value={curTopic}
                onChange={(e) => setCurTopic(e.target.value)}
                className="px-2.5 py-1 text-xs border border-brand-200 rounded bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Question Text</label>
              <textarea
                rows={2}
                value={curQText}
                onChange={(e) => setCurQText(e.target.value)}
                placeholder="Enter question text here..."
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">Ranker Tip</label>
                <input
                  type="text"
                  value={curTip}
                  onChange={(e) => setCurTip(e.target.value)}
                  placeholder="e.g. Always check if question asks nominal or modular size"
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-600 mb-1">Explanation & Reasoning</label>
              <textarea
                rows={2}
                value={curExp}
                onChange={(e) => setCurExp(e.target.value)}
                placeholder="Explain the solution steps..."
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
