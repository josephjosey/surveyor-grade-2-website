import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ShieldAlert,
  BookOpen,
  CheckSquare,
  FileCheck,
  HelpCircle,
  Users,
  Plus,
  Trash2,
  Upload,
  Clock,
  Eye,
  CheckCircle2,
  Award,
  Sparkles,
  RefreshCw,
  Search,
  ExternalLink,
  FileText,
  Download,
  Edit3,
  ListOrdered,
  Crown,
  Trophy,
  Layers,
  Filter
} from 'lucide-react';
import { PYQPaper, PYQQuestion, BankQuestion } from '../../types';
import { CreateClassModal } from '../modals/CreateClassModal';
import { CreateMockTestModal } from '../modals/CreateMockTestModal';
import { ManagePYQQuestionsModal } from '../modals/ManagePYQQuestionsModal';
import { uploadUserFile, deleteUserFile } from '../../services/storageService';

export const AdminPortalPage: React.FC = () => {
  const {
    modules,
    studyNotes,
    deleteStudyNote,
    mockTests,
    deleteMockTest,
    pyqPapers,
    addPYQPaper,
    deletePYQPaper,
    bankQuestions,
    addBankQuestion,
    deleteBankQuestion,
    doubts,
    addDoubtAnswer,
    students,
    getUserRankInfo,
    resetToDefaults,
    showToast,
    isDiskLoaded,
    exportBackup,
    importBackup
  } = useApp();

  const [activeAdminTab, setActiveAdminTab] = useState<'notes' | 'tests' | 'pyq' | 'doubts' | 'students'>('notes');
  const [isClassModalOpen, setIsClassModalOpen] = useState(false);
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);

  // PYQ Management Modal State
  const [selectedPYQToManage, setSelectedPYQToManage] = useState<PYQPaper | null>(null);
  const [isManagePYQModalOpen, setIsManagePYQModalOpen] = useState(false);

  // PYQ Draft State
  const [pyqDraftQuestions, setPyqDraftQuestions] = useState<PYQQuestion[]>([]);
  const [showDraftQBuilder, setShowDraftQBuilder] = useState(false);
  const [draftQText, setDraftQText] = useState('');
  const [draftQMal, setDraftQMal] = useState('');
  const [draftTopic, setDraftTopic] = useState('General Surveying');
  const [draftOptA, setDraftOptA] = useState('');
  const [draftOptB, setDraftOptB] = useState('');
  const [draftOptC, setDraftOptC] = useState('');
  const [draftOptD, setDraftOptD] = useState('');
  const [draftCorrect, setDraftCorrect] = useState(0);
  const [draftExp, setDraftExp] = useState('');
  const [studentSearch, setStudentSearch] = useState('');

  // PYQ Quick Add Form state
  const [pyqTitle, setPyqTitle] = useState('');
  const [pyqExam, setPyqExam] = useState('Surveyor Grade II (Kerala PSC)');
  const [pyqCode, setPyqCode] = useState('Cat. No: 154/2024');
  const [pyqYear, setPyqYear] = useState(2024);
  const [pyqDept, setPyqDept] = useState('Survey and Land Records Department');
  const [pyqPdfUrl, setPyqPdfUrl] = useState('https://example.com/pyq.pdf');
  const [pyqKeyUrl, setPyqKeyUrl] = useState('https://example.com/key.pdf');
  const [pdfUploadMode, setPdfUploadMode] = useState<'file' | 'url'>('file');
  const [uploadedPdfFile, setUploadedPdfFile] = useState<File | null>(null);
  const [uploadedKeyFile, setUploadedKeyFile] = useState<File | null>(null);

  // MCQ & PYQ Bank State
  const [bankSubTab, setBankSubTab] = useState<'syllabus_portions' | 'pdf_papers'>('syllabus_portions');
  const [bankFilterModule, setBankFilterModule] = useState<number | 'all'>('all');
  const [bankSearch, setBankSearch] = useState<string>('');
  const [bankTypeFilter, setBankTypeFilter] = useState<'all' | 'pyq' | 'mcq'>('all');

  // Add Question to Bank Form State
  const [bankFormModule, setBankFormModule] = useState<number>(1);
  const [bankFormType, setBankFormType] = useState<'pyq' | 'mcq'>('mcq');
  const [bankFormExamName, setBankFormExamName] = useState<string>('Kerala PSC Surveyor Gr. II 2022');
  const [bankFormExamYear, setBankFormExamYear] = useState<number>(2022);
  const [bankFormTopic, setBankFormTopic] = useState<string>('');
  const [bankFormQuestion, setBankFormQuestion] = useState<string>('');
  const [bankFormOptA, setBankFormOptA] = useState<string>('');
  const [bankFormOptB, setBankFormOptB] = useState<string>('');
  const [bankFormOptC, setBankFormOptC] = useState<string>('');
  const [bankFormOptD, setBankFormOptD] = useState<string>('');
  const [bankFormCorrect, setBankFormCorrect] = useState<number>(0);
  const [bankFormExplanation, setBankFormExplanation] = useState<string>('');
  const [bankFormTip, setBankFormTip] = useState<string>('');

  // Bulk Paste for Bank Form State
  const [showBankBulkPaste, setShowBankBulkPaste] = useState<boolean>(false);
  const [bankBulkText, setBankBulkText] = useState<string>('');
  const [bankBulkKeyText, setBankBulkKeyText] = useState<string>('');

  const handleAddBankQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bankFormQuestion.trim() || !bankFormOptA.trim() || !bankFormOptB.trim()) {
      showToast('Please provide question text and at least options A & B.', 'warning');
      return;
    }

    const targetMod = modules.find((m) => m.order === bankFormModule) || modules[0];

    addBankQuestion({
      moduleId: targetMod.id,
      moduleNumber: bankFormModule,
      question: bankFormQuestion.trim(),
      options: [
        bankFormOptA.trim(),
        bankFormOptB.trim(),
        bankFormOptC.trim() || 'Option C',
        bankFormOptD.trim() || 'Option D'
      ],
      correctOptionIndex: bankFormCorrect,
      explanation: bankFormExplanation.trim() || 'Official answer as per Kerala PSC Survey syllabus.',
      rankerTip: bankFormTip.trim() || undefined,
      topic: bankFormTopic.trim() || targetMod.title,
      type: bankFormType,
      examName: bankFormType === 'pyq' ? (bankFormExamName.trim() || 'Kerala PSC Surveyor Gr. II') : undefined,
      year: bankFormType === 'pyq' ? bankFormExamYear : undefined
    });

    setBankFormQuestion('');
    setBankFormOptA('');
    setBankFormOptB('');
    setBankFormOptC('');
    setBankFormOptD('');
    setBankFormExplanation('');
    setBankFormTip('');
    setBankFormTopic('');
  };

  const handleParseAndAddBankBulk = () => {
    if (!bankBulkText.trim()) {
      showToast('Please paste questions in the bulk box.', 'warning');
      return;
    }

    const keyMap: Record<number, number> = {};
    if (bankBulkKeyText.trim()) {
      const keyMatches = bankBulkKeyText.matchAll(/(\d+)[\s.:)-]+([a-dA-D])/g);
      for (const m of keyMatches) {
        const qNum = parseInt(m[1], 10);
        const letter = m[2].toLowerCase();
        const idx = letter === 'a' ? 0 : letter === 'b' ? 1 : letter === 'c' ? 2 : 3;
        keyMap[qNum] = idx;
      }
    }

    const blocks = bankBulkText.trim().split(/\n\s*\n/);
    const targetMod = modules.find((m) => m.order === bankFormModule) || modules[0];
    let addedCount = 0;

    for (const block of blocks) {
      const lines = block.trim().split('\n').map((l) => l.trim()).filter(Boolean);
      if (lines.length < 3) continue;

      const qLineMatch = lines[0].match(/^(\d+)\.\s*(.+)$/);
      const qNum = qLineMatch ? parseInt(qLineMatch[1], 10) : addedCount + 1;
      const qText = qLineMatch ? qLineMatch[2] : lines[0];

      const opts: string[] = [];
      for (let i = 1; i <= 4; i++) {
        if (lines[i]) {
          opts.push(lines[i].replace(/^[a-dA-D][\s.):-]+\s*/, ''));
        }
      }

      while (opts.length < 4) {
        opts.push(`Option ${String.fromCharCode(65 + opts.length)}`);
      }

      const correctIndex = keyMap[qNum] !== undefined ? keyMap[qNum] : 0;

      addBankQuestion({
        moduleId: targetMod.id,
        moduleNumber: bankFormModule,
        question: qText,
        options: opts,
        correctOptionIndex: correctIndex,
        explanation: 'Official answer as per Kerala PSC Survey syllabus.',
        topic: targetMod.title,
        type: bankFormType,
        examName: bankFormType === 'pyq' ? (bankFormExamName.trim() || 'Kerala PSC Surveyor Gr. II') : undefined,
        year: bankFormType === 'pyq' ? bankFormExamYear : undefined
      });
      addedCount++;
    }

    if (addedCount > 0) {
      showToast(`Added ${addedCount} questions into Module ${bankFormModule}!`, 'success');
      setBankBulkText('');
      setBankBulkKeyText('');
      setShowBankBulkPaste(false);
    } else {
      showToast('Could not parse questions. Ensure questions are separated by blank lines.', 'error');
    }
  };

  const handlePdfFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
        showToast('Please select a valid PDF document (.pdf)', 'warning');
        return;
      }
      setUploadedPdfFile(file);

      if (!pyqTitle.trim()) {
        const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');
        setPyqTitle(cleanName);
      }

      showToast(`Uploading PDF to Supabase Storage: ${file.name}...`, 'info');
      uploadUserFile(file, 'pyq-papers', 'paper-pdf')
        .then((result) => {
          if (result) {
            setPyqPdfUrl(result.signedUrl);
            showToast(`PDF saved to Supabase Storage: ${file.name}`, 'success');
          } else {
            throw new Error('Upload returned null');
          }
        })
        .catch((err) => {
          console.warn('Fallback to local DataURL:', err);
          const reader = new FileReader();
          reader.onload = (event) => {
            setPyqPdfUrl(event.target?.result as string);
          };
          reader.readAsDataURL(file);
        });
    }
  };

  const handleKeyFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedKeyFile(file);
      showToast(`Uploading Answer Key to Supabase Storage: ${file.name}...`, 'info');
      uploadUserFile(file, 'pyq-papers', 'answer-key')
        .then((result) => {
          if (result) {
            setPyqKeyUrl(result.signedUrl);
            showToast(`Answer Key saved to Supabase Storage: ${file.name}`, 'success');
          } else {
            throw new Error('Upload returned null');
          }
        })
        .catch((err) => {
          console.warn('Fallback to local DataURL:', err);
          const reader = new FileReader();
          reader.onload = (event) => {
            setPyqKeyUrl(event.target?.result as string);
          };
          reader.readAsDataURL(file);
        });
    }
  };

  // Pending doubts
  const pendingDoubts = doubts.filter((d) => !d.isResolved);

  const handleAddDraftQuestion = () => {
    if (!draftQText.trim() || !draftOptA.trim() || !draftOptB.trim()) {
      showToast('Please provide question text and at least options A and B.', 'warning');
      return;
    }

    const newQ: PYQQuestion = {
      id: 'q-draft-' + Date.now(),
      questionNumber: pyqDraftQuestions.length + 1,
      question: draftQText.trim(),
      questionMalayalam: draftQMal.trim() || undefined,
      topic: draftTopic || 'General Surveying',
      options: [
        draftOptA.trim(),
        draftOptB.trim(),
        draftOptC.trim() || 'None of the above',
        draftOptD.trim() || 'All of the above'
      ],
      correctOptionIndex: draftCorrect,
      explanation: draftExp.trim() || 'Official answer as per Kerala PSC final answer key.'
    };

    setPyqDraftQuestions((prev) => [...prev, newQ]);
    setDraftQText('');
    setDraftQMal('');
    setDraftOptA('');
    setDraftOptB('');
    setDraftOptC('');
    setDraftOptD('');
    setDraftCorrect(0);
    setDraftExp('');
    showToast('Question added to draft paper!', 'success');
  };

  const handleRemoveDraftQuestion = (idx: number) => {
    setPyqDraftQuestions((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleAddPYQSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pyqTitle.trim()) return;

    addPYQPaper({
      title: pyqTitle.trim(),
      examName: pyqExam.trim(),
      examCode: pyqCode.trim(),
      year: Number(pyqYear),
      department: pyqDept.trim(),
      totalQuestions: pyqDraftQuestions.length > 0 ? pyqDraftQuestions.length : 100,
      pdfUrl: pyqPdfUrl || '/sample-notes.pdf',
      answerKeyUrl: pyqKeyUrl || '/sample-notes.pdf',
      isSolved: true,
      questions: pyqDraftQuestions.map((q, idx) => ({ ...q, questionNumber: idx + 1 }))
    });

    setPyqTitle('');
    setPyqDraftQuestions([]);
    setShowDraftQBuilder(false);
    setUploadedPdfFile(null);
    setUploadedKeyFile(null);
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      (s.district && s.district.toLowerCase().includes(studentSearch.toLowerCase())) ||
      (s.targetExam && s.targetExam.toLowerCase().includes(studentSearch.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fadeIn">
      {/* Admin Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full border border-purple-400/30">
              <ShieldAlert className="w-3.5 h-3.5 text-purple-300" />
              Instructor Control Panel
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Course Management Suite
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Upload study notes & PDF formula sheets, build timed mock tests, publish PYQs, and answer student doubts.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Status badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full border border-emerald-400/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Disk Storage Active</span>
          </div>

          {/* Export JSON backup */}
          <button
            type="button"
            onClick={exportBackup}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow transition"
            title="Download full JSON backup of all created mock tests, PYQs, study notes, and student attempts"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Backup</span>
          </button>

          {/* Import JSON backup */}
          <label
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow transition cursor-pointer"
            title="Restore from a saved .json backup file"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Restore Backup</span>
            <input
              type="file"
              accept=".json,application/json"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const content = event.target?.result as string;
                    if (content) {
                      importBackup(content);
                    }
                  };
                  reader.readAsText(file);
                }
              }}
            />
          </label>

          <button
            type="button"
            onClick={resetToDefaults}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl border border-slate-700 transition"
            title="Reset to default seed data"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Demo Data</span>
          </button>
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs text-slate-500 font-semibold uppercase">Study Notes</div>
          <div className="text-2xl font-black text-slate-900">{studyNotes.length}</div>
          <div className="text-[11px] text-brand-600 font-medium">{modules.length} Syllabus Modules</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs text-slate-500 font-semibold uppercase">Mock Tests</div>
          <div className="text-2xl font-black text-slate-900">{mockTests.length}</div>
          <div className="text-[11px] text-amber-600 font-medium">-0.33 PSC Marking</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs text-slate-500 font-semibold uppercase">Enrolled Students</div>
          <div className="text-2xl font-black text-slate-900">{students.length}</div>
          <div className="text-[11px] text-blue-600 font-medium">Across Kerala</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs text-slate-500 font-semibold uppercase">Pending Doubts</div>
          <div className="text-2xl font-black text-purple-600">{pendingDoubts.length}</div>
          <div className="text-[11px] text-purple-500 font-medium">Require verified answer</div>
        </div>
      </div>

      {/* Main Admin Tab Bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveAdminTab('notes')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
            activeAdminTab === 'notes'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Manage Study Notes & PDFs ({studyNotes.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('tests')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
            activeAdminTab === 'tests'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <CheckSquare className="w-4 h-4" />
          <span>Mock Test Creator ({mockTests.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('pyq')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
            activeAdminTab === 'pyq'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>MCQ & PYQ Bank ({bankQuestions.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('doubts')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
            activeAdminTab === 'doubts'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Student Doubts Queue ({doubts.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('students')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
            activeAdminTab === 'students'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Enrolled Students ({students.length})</span>
        </button>
      </div>

      {/* TAB 1: STUDY NOTES & PDFS */}
      {activeAdminTab === 'notes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-base">Study Notes & Formula Sheet Library</h3>
            <button
              onClick={() => setIsClassModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Upload New Study Notes PDF</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-4">#</th>
                  <th className="p-4">Document Title & Topic</th>
                  <th className="p-4">Read Time</th>
                  <th className="p-4">PDF Attachment</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {studyNotes.map((note, idx) => (
                  <tr key={note.id} className="hover:bg-slate-50/80 transition">
                    <td className="p-4 font-bold text-slate-400">{idx + 1}</td>
                    <td className="p-4 space-y-0.5 max-w-sm">
                      <div className="font-bold text-slate-900">{note.title}</div>
                      {note.titleMalayalam && (
                        <div className="text-slate-500 ml-text">{note.titleMalayalam}</div>
                      )}
                    </td>
                    <td className="p-4 font-mono font-medium">{note.readTime}</td>
                    <td className="p-4">
                      <a
                        href={note.pdfNotesUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-300 font-semibold inline-flex items-center gap-1.5 transition text-xs shadow-xs"
                        title="Click to view/download PDF note"
                      >
                        <FileText className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{note.pdfNotesTitle}</span>
                        <span className="text-[10px] text-emerald-600 font-normal">({note.pdfSize})</span>
                      </a>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete study note "${note.title}"?`)) {
                            deleteStudyNote(note.id);
                          }
                        }}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                        title="Delete Note"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: MOCK TESTS */}
      {activeAdminTab === 'tests' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-base">Kerala PSC Mock Tests</h3>
            <button
              onClick={() => setIsTestModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Mock Test</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockTests.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                      {test.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {test.durationMinutes} Mins • {test.totalQuestions} Qs
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{test.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{test.description}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                  <span className="font-semibold text-slate-600">
                    Marking: +{test.marksPerCorrect} / -{test.negativeMarksPerWrong}
                  </span>
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete mock test "${test.title}"?`)) {
                        deleteMockTest(test.id);
                      }
                    }}
                    className="text-red-500 hover:text-red-700 font-semibold flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: MCQ & PYQ BANK MANAGER */}
      {activeAdminTab === 'pyq' && (
        <div className="space-y-6">
          {/* Sub-tab switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-blue-50 text-blue-700">
                <BookOpen className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm">MCQ & PYQ Question Bank Management</h3>
                <p className="text-[11px] text-slate-500">
                  Manage questions across the 10 Kerala PSC syllabus portions or upload original PDF booklets.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 self-start sm:self-auto text-xs">
              <button
                type="button"
                onClick={() => setBankSubTab('syllabus_portions')}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
                  bankSubTab === 'syllabus_portions'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>10 Syllabus Portions ({bankQuestions.length} Qs)</span>
              </button>
              <button
                type="button"
                onClick={() => setBankSubTab('pdf_papers')}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
                  bankSubTab === 'pdf_papers'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Original PDF Papers ({pyqPapers.length})</span>
              </button>
            </div>
          </div>

          {/* SUB-VIEW 1: 10 SYLLABUS PORTIONS */}
          {bankSubTab === 'syllabus_portions' && (
            <div className="space-y-6">
              {/* 10 MODULES QUICK STRIP */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {modules.map((mod) => {
                  const isFiltered = bankFilterModule === mod.order;
                  const count = bankQuestions.filter((q) => q.moduleNumber === mod.order).length;
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => {
                        setBankFilterModule(isFiltered ? 'all' : mod.order);
                        setBankFormModule(mod.order);
                      }}
                      className={`p-3 rounded-xl border text-left transition space-y-1 ${
                        isFiltered
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                          : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-extrabold uppercase">
                        <span>Mod {mod.order < 10 ? `0${mod.order}` : mod.order}</span>
                        <span className={isFiltered ? 'bg-blue-500 text-white px-1.5 py-0.2 rounded' : 'bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded'}>
                          {mod.marks || 10}m
                        </span>
                      </div>
                      <div className="font-bold text-xs line-clamp-1">{mod.title}</div>
                      <div className={`text-[11px] ${isFiltered ? 'text-blue-100' : 'text-slate-500'}`}>
                        {count} questions
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Form: Add Question to Syllabus Portion */}
                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs text-left">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                      <Plus className="w-4 h-4 text-blue-600" />
                      <span>Add Question to Syllabus Portion</span>
                    </h4>

                    <button
                      type="button"
                      onClick={() => setShowBankBulkPaste(!showBankBulkPaste)}
                      className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 font-bold text-[11px] hover:bg-amber-100 transition flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>{showBankBulkPaste ? 'Single Form' : 'Bulk Paste'}</span>
                    </button>
                  </div>

                  {showBankBulkPaste ? (
                    /* Bulk Paste Form */
                    <div className="space-y-3 bg-amber-50/50 p-4 rounded-xl border border-amber-200">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Target Syllabus Module *</label>
                        <select
                          value={bankFormModule}
                          onChange={(e) => setBankFormModule(Number(e.target.value))}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white font-semibold"
                        >
                          {modules.map((m) => (
                            <option key={m.id} value={m.order}>
                              Module {m.order}: {m.title} ({m.marks} Marks)
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block font-semibold text-slate-700 mb-1">Question Type</label>
                          <select
                            value={bankFormType}
                            onChange={(e) => setBankFormType(e.target.value as 'pyq' | 'mcq')}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white font-semibold"
                          >
                            <option value="mcq">Standard Syllabus MCQ</option>
                            <option value="pyq">Previous Year Question (PYQ)</option>
                          </select>
                        </div>
                        {bankFormType === 'pyq' && (
                          <div>
                            <label className="block font-semibold text-slate-700 mb-1">Exam Name</label>
                            <input
                              type="text"
                              value={bankFormExamName}
                              onChange={(e) => setBankFormExamName(e.target.value)}
                              placeholder="e.g. Surveyor Gr. II"
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white"
                            />
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Paste Questions & 4 Options:</label>
                        <textarea
                          rows={6}
                          value={bankBulkText}
                          onChange={(e) => setBankBulkText(e.target.value)}
                          placeholder={`1. The trimmed size of A1 sheet is\na) 841 x 1189 mm\nb) 594 x 841 mm\nc) 420 x 594 mm\nd) 297 x 420 mm\n\n2. Gunter chain length is\na) 66 ft\nb) 100 ft\nc) 33 ft\nd) 20 m`}
                          className="w-full p-2.5 border border-slate-300 rounded-lg font-mono text-xs outline-none bg-white"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Answer Key (Optional):</label>
                        <textarea
                          rows={2}
                          value={bankBulkKeyText}
                          onChange={(e) => setBankBulkKeyText(e.target.value)}
                          placeholder="1: b, 2: a..."
                          className="w-full p-2 border border-slate-300 rounded-lg font-mono text-xs outline-none bg-white"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={handleParseAndAddBankBulk}
                        className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold shadow transition flex items-center justify-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Parse & Add All into Module {bankFormModule}</span>
                      </button>
                    </div>
                  ) : (
                    /* Single Question Add Form */
                    <form onSubmit={handleAddBankQuestionSubmit} className="space-y-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Target Syllabus Module *</label>
                        <select
                          value={bankFormModule}
                          onChange={(e) => setBankFormModule(Number(e.target.value))}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white font-semibold"
                        >
                          {modules.map((m) => (
                            <option key={m.id} value={m.order}>
                              Module {m.order}: {m.title} ({m.marks} Marks)
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block font-semibold text-slate-700 mb-1">Question Type *</label>
                          <select
                            value={bankFormType}
                            onChange={(e) => setBankFormType(e.target.value as 'pyq' | 'mcq')}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white font-semibold"
                          >
                            <option value="mcq">Standard Syllabus MCQ</option>
                            <option value="pyq">Previous Year Question (PYQ)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-semibold text-slate-700 mb-1">Topic within Module</label>
                          <input
                            type="text"
                            value={bankFormTopic}
                            onChange={(e) => setBankFormTopic(e.target.value)}
                            placeholder="e.g. Metric Chain / Collimation"
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white"
                          />
                        </div>
                      </div>

                      {bankFormType === 'pyq' && (
                        <div className="grid grid-cols-2 gap-2 p-2.5 bg-blue-50/60 rounded-xl border border-blue-200">
                          <div>
                            <label className="block font-semibold text-blue-900 mb-1">Exam Title</label>
                            <input
                              type="text"
                              value={bankFormExamName}
                              onChange={(e) => setBankFormExamName(e.target.value)}
                              placeholder="e.g. Kerala PSC Surveyor Gr. II"
                              className="w-full px-2.5 py-1.5 border border-blue-300 rounded bg-white text-xs"
                            />
                          </div>
                          <div>
                            <label className="block font-semibold text-blue-900 mb-1">Exam Year</label>
                            <input
                              type="number"
                              value={bankFormExamYear}
                              onChange={(e) => setBankFormExamYear(Number(e.target.value))}
                              className="w-full px-2.5 py-1.5 border border-blue-300 rounded bg-white text-xs"
                            />
                          </div>
                        </div>
                      )}

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Question Text *</label>
                        <textarea
                          rows={2}
                          required
                          value={bankFormQuestion}
                          onChange={(e) => setBankFormQuestion(e.target.value)}
                          placeholder="Enter complete question text..."
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white text-xs"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block font-semibold text-slate-600 mb-1">Option A *</label>
                          <input
                            type="text"
                            required
                            value={bankFormOptA}
                            onChange={(e) => setBankFormOptA(e.target.value)}
                            className="w-full px-2.5 py-1.5 border border-slate-300 rounded bg-white"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold text-slate-600 mb-1">Option B *</label>
                          <input
                            type="text"
                            required
                            value={bankFormOptB}
                            onChange={(e) => setBankFormOptB(e.target.value)}
                            className="w-full px-2.5 py-1.5 border border-slate-300 rounded bg-white"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold text-slate-600 mb-1">Option C</label>
                          <input
                            type="text"
                            value={bankFormOptC}
                            onChange={(e) => setBankFormOptC(e.target.value)}
                            className="w-full px-2.5 py-1.5 border border-slate-300 rounded bg-white"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold text-slate-600 mb-1">Option D</label>
                          <input
                            type="text"
                            value={bankFormOptD}
                            onChange={(e) => setBankFormOptD(e.target.value)}
                            className="w-full px-2.5 py-1.5 border border-slate-300 rounded bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block font-semibold text-slate-700 mb-1">Correct Option *</label>
                          <select
                            value={bankFormCorrect}
                            onChange={(e) => setBankFormCorrect(Number(e.target.value))}
                            className="w-full px-2.5 py-1.5 border border-slate-300 rounded bg-white font-bold text-blue-700"
                          >
                            <option value={0}>Option A</option>
                            <option value={1}>Option B</option>
                            <option value={2}>Option C</option>
                            <option value={3}>Option D</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-semibold text-slate-700 mb-1">Ranker Tip (Optional)</label>
                          <input
                            type="text"
                            value={bankFormTip}
                            onChange={(e) => setBankFormTip(e.target.value)}
                            placeholder="e.g. High-yield memory trick"
                            className="w-full px-2.5 py-1.5 border border-slate-300 rounded bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Explanation & Formulas</label>
                        <textarea
                          rows={2}
                          value={bankFormExplanation}
                          onChange={(e) => setBankFormExplanation(e.target.value)}
                          placeholder="Detailed explanation for candidate review..."
                          className="w-full px-3 py-1.5 border border-slate-300 rounded-lg outline-none bg-white text-xs"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow transition flex items-center justify-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Question to Module {bankFormModule}</span>
                      </button>
                    </form>
                  )}
                </div>

                {/* Right Column: Question Bank Pool */}
                <div className="lg:col-span-7 space-y-3 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                      <span>Uploaded Question Bank</span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px]">
                        {bankQuestions.length} Questions
                      </span>
                    </h4>

                    {/* Filter Strip */}
                    <div className="flex items-center gap-2">
                      <select
                        value={bankTypeFilter}
                        onChange={(e) => setBankTypeFilter(e.target.value as any)}
                        className="px-2.5 py-1 border border-slate-300 rounded-lg text-xs bg-white font-medium"
                      >
                        <option value="all">All Types</option>
                        <option value="pyq">PYQs Only</option>
                        <option value="mcq">MCQs Only</option>
                      </select>

                      <div className="relative w-40">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={bankSearch}
                          onChange={(e) => setBankSearch(e.target.value)}
                          placeholder="Search..."
                          className="w-full pl-8 pr-2 py-1 border border-slate-300 rounded-lg text-xs outline-none bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Questions List */}
                  <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
                    {bankQuestions
                      .filter((q) => {
                        if (bankFilterModule !== 'all' && q.moduleNumber !== bankFilterModule) return false;
                        if (bankTypeFilter !== 'all' && q.type !== bankTypeFilter) return false;
                        if (bankSearch.trim()) {
                          const query = bankSearch.toLowerCase();
                          return q.question.toLowerCase().includes(query) || q.topic?.toLowerCase().includes(query);
                        }
                        return true;
                      })
                      .map((q) => (
                        <div
                          key={q.id}
                          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2 text-xs hover:border-slate-300 transition"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded bg-slate-900 text-white font-bold text-[10px]">
                                Mod {q.moduleNumber}
                              </span>
                              {q.type === 'pyq' ? (
                                <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-bold text-[10px]">
                                  PYQ: {q.examName || 'Kerala PSC'} ({q.year || '2022'})
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[10px]">
                                  MCQ
                                </span>
                              )}
                              {q.topic && <span className="text-slate-400 text-[11px]">• {q.topic}</span>}
                            </div>

                            <button
                              type="button"
                              onClick={() => {
                                if (window.confirm('Delete this question from question bank?')) {
                                  deleteBankQuestion(q.id);
                                }
                              }}
                              className="text-slate-400 hover:text-red-600 p-1 transition"
                              title="Delete Question"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <p className="font-bold text-slate-900 leading-snug">{q.question}</p>

                          <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-600">
                            {q.options.map((opt, optIdx) => (
                              <div
                                key={optIdx}
                                className={`px-2 py-1 rounded border ${
                                  optIdx === q.correctOptionIndex
                                    ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold'
                                    : 'border-slate-100 bg-slate-50'
                                }`}
                              >
                                {String.fromCharCode(65 + optIdx)}: {opt}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SUB-VIEW 2: OFFICIAL PDF PAPERS */}
          {bankSubTab === 'pdf_papers' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
              {/* Upload Form */}
              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Upload className="w-4 h-4 text-blue-600" />
                  <span>Upload Question Paper PDF Booklet</span>
                </h4>

                <form onSubmit={handleAddPYQSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Paper Title *</label>
                    <input
                      type="text"
                      required
                      value={pyqTitle}
                      onChange={(e) => setPyqTitle(e.target.value)}
                      placeholder="e.g. Surveyor Gr. II (Cat. No: 154/2024)"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Department</label>
                    <input
                      type="text"
                      value={pyqDept}
                      onChange={(e) => setPyqDept(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Exam Code</label>
                      <input
                        type="text"
                        value={pyqCode}
                        onChange={(e) => setPyqCode(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Year</label>
                      <input
                        type="number"
                        value={pyqYear}
                        onChange={(e) => setPyqYear(Number(e.target.value))}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2">
                    <label className="font-bold text-slate-800 flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-blue-600" />
                      <span>Question Paper PDF File *</span>
                    </label>
                    <label className="border-2 border-dashed border-blue-200 hover:border-blue-400 bg-blue-50/40 rounded-xl p-3.5 flex flex-col items-center justify-center cursor-pointer transition text-center space-y-1">
                      <input
                        type="file"
                        accept="application/pdf,.pdf"
                        onChange={handlePdfFileChange}
                        className="hidden"
                      />
                      {uploadedPdfFile ? (
                        <div className="space-y-0.5 text-emerald-700 font-bold">
                          ✓ {uploadedPdfFile.name} (Ready to publish)
                        </div>
                      ) : (
                        <div className="space-y-1 text-slate-600 font-medium">
                          <Upload className="w-5 h-5 text-blue-600 mx-auto" />
                          <span>Click to browse .pdf booklet from device</span>
                        </div>
                      )}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow transition flex items-center justify-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Publish PDF Paper</span>
                  </button>
                </form>
              </div>

              {/* Published Papers List */}
              <div className="lg:col-span-7 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">
                  Published PDF Question Papers ({pyqPapers.length})
                </h4>
                <div className="space-y-3">
                  {pyqPapers.map((p) => (
                    <div
                      key={p.id}
                      className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">{p.title}</span>
                          <span className="text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-[10px] font-bold">
                            {p.questions?.length || 0} Questions
                          </span>
                        </div>
                        <div className="text-slate-500">{p.examCode} • {p.department} ({p.year})</div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(`Delete PDF paper "${p.title}"?`)) {
                              deletePYQPaper(p.id);
                            }
                          }}
                          className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition"
                          title="Delete PDF Paper"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: STUDENT DOUBTS RESOLUTION */}
      {activeAdminTab === 'doubts' && (
        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 text-base">Student Doubts & Questions Queue</h3>
          <div className="space-y-4">
            {doubts.map((d) => (
              <div key={d.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{d.userName}</span>
                    <span className="text-slate-400">•</span>
                    <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded font-semibold">
                      {d.topic}
                    </span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    d.isResolved ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {d.isResolved ? 'Resolved ✓' : 'Needs Instructor Reply'}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-slate-900 text-sm">{d.title}</div>
                  <p className="text-slate-600 leading-relaxed">{d.content}</p>
                </div>

                {/* Quick Reply Form */}
                <div className="pt-2 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Write official faculty explanation..."
                    id={`admin-reply-${d.id}`}
                    className="flex-1 px-3.5 py-2 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50 text-xs"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const input = e.currentTarget;
                        if (input.value.trim()) {
                          addDoubtAnswer(d.id, input.value.trim());
                          input.value = '';
                        }
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      const input = document.getElementById(`admin-reply-${d.id}`) as HTMLInputElement;
                      if (input && input.value.trim()) {
                        addDoubtAnswer(d.id, input.value.trim());
                        input.value = '';
                      }
                    }}
                    className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold"
                  >
                    Post Verified Answer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: ENROLLED STUDENTS */}
      {activeAdminTab === 'students' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h3 className="font-bold text-slate-900 text-base">
              Enrolled Students Directory ({students.length})
            </h3>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search student or district..."
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-xl text-xs bg-white outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-4">Student</th>
                  <th className="p-4">District</th>
                  <th className="p-4">Target Exam</th>
                  <th className="p-4">State Rank & Mock Score</th>
                  <th className="p-4">Notes Completed</th>
                  <th className="p-4">Streak</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredStudents.map((std) => {
                  const rankInfo = getUserRankInfo(undefined, std.id);
                  return (
                    <tr key={std.id} className="hover:bg-slate-50 transition">
                      <td className="p-4 flex items-center gap-3">
                        <img
                          src={std.avatar}
                          alt={std.name}
                          className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200"
                        />
                        <div>
                          <div className="font-bold text-slate-900">{std.name}</div>
                          <div className="text-slate-400 text-[11px]">{std.email}</div>
                        </div>
                      </td>
                      <td className="p-4 font-medium">{std.district || 'Kerala'}</td>
                      <td className="p-4 font-semibold text-brand-800">{std.targetExam || 'Surveyor Gr. II'}</td>
                      <td className="p-4">
                        {rankInfo.rank > 0 && rankInfo.attempt ? (
                          <div className="flex flex-col gap-0.5">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-extrabold text-xs bg-amber-100 text-amber-900 border border-amber-300 w-max shadow-xs">
                              <Crown className="w-3.5 h-3.5 text-amber-600" />
                              <span>Rank #{rankInfo.rank}</span>
                            </span>
                            <span className="text-[11px] text-slate-500">
                              {rankInfo.attempt.score.toFixed(2)} pts • {rankInfo.percentile}%ile
                            </span>
                          </div>
                        ) : std.stateRank ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-extrabold text-xs bg-amber-100 text-amber-900 border border-amber-300 w-max">
                            <Crown className="w-3.5 h-3.5 text-amber-600" />
                            <span>Rank #{std.stateRank}</span>
                          </span>
                        ) : (
                          <span className="text-slate-400 text-xs italic">
                            Unranked (Not taken)
                          </span>
                        )}
                      </td>
                      <td className="p-4">
                        <span className="font-bold text-slate-900">{studyNotes.filter((n) => std.completedClassIds?.includes(n.id)).length}</span> / {studyNotes.length}
                      </td>
                      <td className="p-4 font-bold text-amber-600">
                        🔥 {std.streakDays} Days
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modals */}
      <CreateClassModal isOpen={isClassModalOpen} onClose={() => setIsClassModalOpen(false)} />
      <CreateMockTestModal isOpen={isTestModalOpen} onClose={() => setIsTestModalOpen(false)} />
      <ManagePYQQuestionsModal
        isOpen={isManagePYQModalOpen}
        onClose={() => {
          setIsManagePYQModalOpen(false);
          setSelectedPYQToManage(null);
        }}
        paper={pyqPapers.find((p) => p.id === selectedPYQToManage?.id) || selectedPYQToManage}
      />
    </div>
  );
};
