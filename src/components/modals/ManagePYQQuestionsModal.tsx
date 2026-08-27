import React, { useState } from 'react';
import {
  X,
  Plus,
  Trash2,
  HelpCircle,
  BookOpen,
  ListOrdered
} from 'lucide-react';
import { PYQPaper } from '../../types';
import { useApp } from '../../context/AppContext';

interface ManagePYQQuestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  paper: PYQPaper | null;
}

export const ManagePYQQuestionsModal: React.FC<ManagePYQQuestionsModalProps> = ({
  isOpen,
  onClose,
  paper
}) => {
  const { addQuestionToPYQ, deleteQuestionFromPYQ } = useApp();

  // New question form state
  const [questionText, setQuestionText] = useState('');
  const [questionMalayalam, setQuestionMalayalam] = useState('');
  const [topic, setTopic] = useState('Chain Surveying');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctOptionIndex, setCorrectOptionIndex] = useState(0);
  const [explanation, setExplanation] = useState('');

  if (!isOpen || !paper) return null;

  const topicsList = [
    'Chain Surveying',
    'Compass Surveying',
    'Levelling',
    'Theodolite',
    'Total Station',
    'GPS / GIS',
    'Kerala Survey & Boundaries Act',
    'KWA Technical Topics',
    'General Surveying'
  ];

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim() || !optA.trim() || !optB.trim()) {
      alert('Please provide the question text and at least options A and B.');
      return;
    }

    addQuestionToPYQ(paper.id, {
      question: questionText.trim(),
      questionMalayalam: questionMalayalam.trim() || undefined,
      topic: topic || 'General Surveying',
      options: [
        optA.trim(),
        optB.trim(),
        optC.trim() || 'None of the above',
        optD.trim() || 'All of the above'
      ],
      correctOptionIndex,
      explanation: explanation.trim() || 'Official answer as per Kerala PSC final answer key.'
    });

    // Reset draft fields
    setQuestionText('');
    setQuestionMalayalam('');
    setOptA('');
    setOptB('');
    setOptC('');
    setOptD('');
    setCorrectOptionIndex(0);
    setExplanation('');
  };

  const currentQuestions = paper.questions || [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col animate-scaleUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-navy-950 p-6 text-white flex items-center justify-between flex-shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded-full">
                PYQ Question Builder
              </span>
              <span className="text-slate-300 text-xs">{paper.examCode} • {paper.year}</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              {paper.title}
            </h2>
            <p className="text-xs text-slate-300">
              Add interactive questions with options and explanations for students to solve in the PYQ Bank.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Add Question Form */}
            <div className="lg:col-span-7 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                <Plus className="w-4 h-4 text-brand-600" />
                <h3 className="font-bold text-slate-900 text-sm">
                  Add New Question #{currentQuestions.length + 1}
                </h3>
              </div>

              <form onSubmit={handleAddQuestion} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Question Text (English) *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    placeholder="e.g. Which surveying method is used to determine elevation differences across rivers?"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Malayalam Question Translation (Optional)
                  </label>
                  <input
                    type="text"
                    value={questionMalayalam}
                    onChange={(e) => setQuestionMalayalam(e.target.value)}
                    placeholder="e.g. പുഴകൾക്ക് കുറുകെ ലെവലിംഗ് നടത്തുമ്പോൾ ഉപയോഗിക്കുന്ന രീതി ഏത്?"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 bg-white font-sans"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Topic / Subject Module
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 bg-white font-medium"
                  >
                    {topicsList.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 4 Options */}
                <div className="space-y-2 pt-1">
                  <label className="block font-bold text-slate-700">
                    4 Multiple Choice Options (Select the correct radio button)
                  </label>

                  {[
                    { label: 'A', val: optA, set: setOptA, idx: 0 },
                    { label: 'B', val: optB, set: setOptB, idx: 1 },
                    { label: 'C', val: optC, set: setOptC, idx: 2 },
                    { label: 'D', val: optD, set: setOptD, idx: 3 }
                  ].map((opt) => (
                    <div key={opt.label} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="correct-option-radio"
                        checked={correctOptionIndex === opt.idx}
                        onChange={() => setCorrectOptionIndex(opt.idx)}
                        className="w-4 h-4 text-brand-600 focus:ring-brand-500 cursor-pointer"
                        title={`Mark ${opt.label} as correct answer`}
                      />
                      <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                        correctOptionIndex === opt.idx ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {opt.label}
                      </span>
                      <input
                        type="text"
                        required={opt.idx < 2}
                        value={opt.val}
                        onChange={(e) => opt.set(e.target.value)}
                        placeholder={`Option ${opt.label}...`}
                        className={`flex-1 px-3 py-1.5 border rounded-xl outline-none text-xs bg-white ${
                          correctOptionIndex === opt.idx
                            ? 'border-emerald-500 ring-1 ring-emerald-500 font-semibold'
                            : 'border-slate-300'
                        }`}
                      />
                    </div>
                  ))}
                </div>

                {/* Solution Explanation */}
                <div className="pt-1">
                  <label className="block font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-brand-600" />
                    <span>Solution & Explanation</span>
                  </label>
                  <textarea
                    rows={2}
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    placeholder="Explain why this option is correct and note standard Kerala PSC exam formulas or reference tips..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow transition flex items-center justify-center gap-2 mt-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Save & Add Question to Paper</span>
                </button>
              </form>
            </div>

            {/* Right: Existing Questions List */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <ListOrdered className="w-4 h-4 text-slate-700" />
                  <span>Interactive Questions ({currentQuestions.length})</span>
                </h3>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {currentQuestions.length} Ready
                </span>
              </div>

              {currentQuestions.length === 0 ? (
                <div className="bg-slate-50 rounded-2xl p-8 border border-dashed border-slate-300 text-center space-y-2">
                  <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
                  <div className="font-bold text-slate-700 text-xs">No Interactive Questions Added Yet</div>
                  <p className="text-[11px] text-slate-500">
                    Use the form on the left to add questions. Students will immediately be able to practice and solve them in the PYQ Bank!
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
                  {currentQuestions.map((q, idx) => (
                    <div
                      key={q.id || idx}
                      className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-2 text-xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold flex items-center justify-center">
                              Q{idx + 1}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-500 uppercase">
                              {q.topic}
                            </span>
                          </div>
                          <h4 className="font-bold text-slate-900 text-xs line-clamp-2 pt-0.5">
                            {q.question}
                          </h4>
                        </div>

                        <button
                          onClick={() => deleteQuestionFromPYQ(paper.id, q.id)}
                          className="p-1 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition"
                          title="Delete this question"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Options preview */}
                      <div className="grid grid-cols-2 gap-1 text-[11px]">
                        {q.options.map((opt, oIdx) => (
                          <div
                            key={oIdx}
                            className={`px-2 py-1 rounded truncate border ${
                              oIdx === q.correctOptionIndex
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold'
                                : 'bg-slate-50 border-slate-200 text-slate-600'
                            }`}
                          >
                            <strong>{String.fromCharCode(65 + oIdx)}:</strong> {opt}
                          </div>
                        ))}
                      </div>

                      {q.explanation && (
                        <div className="text-[10px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100 truncate">
                          <strong>Key:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between flex-shrink-0">
          <div className="text-xs text-slate-500">
            Total Questions in Paper: <strong className="text-slate-900">{currentQuestions.length} MCQs</strong>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow transition"
          >
            Done & Close
          </button>
        </div>
      </div>
    </div>
  );
};
