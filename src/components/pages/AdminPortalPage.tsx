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
  Trophy
} from 'lucide-react';
import { PYQPaper, PYQQuestion } from '../../types';
import { CreateClassModal } from '../modals/CreateClassModal';
import { CreateMockTestModal } from '../modals/CreateMockTestModal';
import { ManagePYQQuestionsModal } from '../modals/ManagePYQQuestionsModal';
import { uploadUserFile, deleteUserFile } from '../../services/storageService';

export const AdminPortalPage: React.FC = () => {
  const {
    studyNotes,
    deleteStudyNote,
    mockTests,
    deleteMockTest,
    pyqPapers,
    addPYQPaper,
    deletePYQPaper,
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
          <div className="text-[11px] text-brand-600 font-medium">8 Syllabus Modules</div>
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
          <FileCheck className="w-4 h-4" />
          <span>PYQ Papers ({pyqPapers.length})</span>
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
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold flex items-center gap-1 w-max">
                        <FileText className="w-3.5 h-3.5" />
                        {note.pdfNotesTitle} ({note.pdfSize})
                      </span>
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

      {/* TAB 3: PYQ PAPERS */}
      {activeAdminTab === 'pyq' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Upload Form */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Upload className="w-4 h-4 text-blue-600" />
                <span>Upload New PYQ Paper</span>
              </h3>
            </div>

            <form onSubmit={handleAddPYQSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Paper Title *</label>
                <input
                  type="text"
                  required
                  value={pyqTitle}
                  onChange={(e) => setPyqTitle(e.target.value)}
                  placeholder="e.g. Surveyor Gr. II (Cat. No: 154/2024)"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
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

              {/* PDF Document Upload from System / URL */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-slate-800 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-blue-600" />
                    <span>Question Paper PDF *</span>
                  </label>
                  <div className="flex items-center gap-1 bg-slate-200/80 p-0.5 rounded-lg text-[10px]">
                    <button
                      type="button"
                      onClick={() => setPdfUploadMode('file')}
                      className={`px-2 py-0.5 rounded font-bold transition ${
                        pdfUploadMode === 'file' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      From Device (.pdf)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPdfUploadMode('url')}
                      className={`px-2 py-0.5 rounded font-bold transition ${
                        pdfUploadMode === 'url' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      Web Link / Drive
                    </button>
                  </div>
                </div>

                {pdfUploadMode === 'file' ? (
                  <div>
                    <label className="border-2 border-dashed border-blue-200 hover:border-blue-400 bg-blue-50/40 rounded-xl p-3.5 flex flex-col items-center justify-center cursor-pointer transition text-center space-y-1">
                      <input
                        type="file"
                        accept="application/pdf,.pdf"
                        onChange={handlePdfFileChange}
                        className="hidden"
                      />
                      {uploadedPdfFile ? (
                        <div className="space-y-0.5">
                          <div className="flex items-center justify-center gap-1.5 text-emerald-700 font-bold">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>{uploadedPdfFile.name}</span>
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono">
                            {(uploadedPdfFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to publish
                          </div>
                          <div className="text-[10px] text-blue-600 font-semibold underline pt-0.5">
                            Click to replace file
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <Upload className="w-5 h-5 text-blue-600 mx-auto" />
                          <div className="font-semibold text-slate-800">
                            Click to browse PDF from your computer
                          </div>
                          <div className="text-[10px] text-slate-400">
                            Supports .PDF files (Question Booklets, Solved Papers)
                          </div>
                        </div>
                      )}
                    </label>
                  </div>
                ) : (
                  <div>
                    <input
                      type="text"
                      value={pyqPdfUrl}
                      onChange={(e) => setPyqPdfUrl(e.target.value)}
                      placeholder="https://example.com/question_paper.pdf"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white font-mono text-xs"
                    />
                  </div>
                )}
              </div>

              {/* Optional Answer Key Uploader */}
              <div className="pt-1">
                <label className="block font-semibold text-slate-700 mb-1">Answer Key Document (Optional)</label>
                <div className="flex items-center gap-2">
                  <label className="flex-1 px-3 py-2 border border-slate-300 rounded-lg bg-white cursor-pointer hover:bg-slate-50 text-slate-600 truncate flex items-center justify-between">
                    <span className="truncate">
                      {uploadedKeyFile ? uploadedKeyFile.name : 'Choose Answer Key PDF (optional)...'}
                    </span>
                    <input
                      type="file"
                      accept="application/pdf,.pdf"
                      onChange={handleKeyFileChange}
                      className="hidden"
                    />
                    <Upload className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 ml-2" />
                  </label>
                </div>
              </div>

              {/* Optional Inline Interactive Question Builder Toggle */}
              <div className="pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                      <ListOrdered className="w-4 h-4 text-blue-600" />
                      <span>Interactive MCQs for Online Solving</span>
                    </label>
                    <div className="text-[11px] text-slate-500">
                      {pyqDraftQuestions.length > 0
                        ? `${pyqDraftQuestions.length} questions ready to publish with this paper`
                        : 'You can add questions now or manage them anytime after publishing'}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowDraftQBuilder(!showDraftQBuilder)}
                    className="px-3 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-bold transition flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>{showDraftQBuilder ? 'Hide Form' : 'Add Questions'}</span>
                  </button>
                </div>

                {showDraftQBuilder && (
                  <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <div className="font-bold text-slate-800 text-xs flex items-center justify-between">
                      <span>Add MCQ #{pyqDraftQuestions.length + 1}</span>
                      <span className="text-[10px] text-blue-600 font-semibold uppercase">Kerala PSC Format</span>
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Question Text (English) *"
                        value={draftQText}
                        onChange={(e) => setDraftQText(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white text-xs"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Malayalam Translation (Optional)"
                        value={draftQMal}
                        onChange={(e) => setDraftQMal(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white text-xs font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={draftTopic}
                        onChange={(e) => setDraftTopic(e.target.value)}
                        className="px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white text-xs"
                      >
                        <option value="Chain Surveying">Chain Surveying</option>
                        <option value="Compass Surveying">Compass Surveying</option>
                        <option value="Levelling">Levelling</option>
                        <option value="Theodolite">Theodolite</option>
                        <option value="Total Station">Total Station</option>
                        <option value="GPS / GIS">GPS / GIS</option>
                        <option value="Kerala Survey & Boundaries Act">Kerala Survey & Boundaries Act</option>
                        <option value="General Surveying">General Surveying</option>
                      </select>

                      <div className="flex items-center gap-1 text-[11px] text-slate-600 bg-white px-2 rounded-lg border border-slate-200">
                        <span>Correct:</span>
                        {[0, 1, 2, 3].map((idx) => (
                          <label key={idx} className="cursor-pointer font-bold flex items-center gap-0.5 ml-1.5">
                            <input
                              type="radio"
                              name="draft-correct"
                              checked={draftCorrect === idx}
                              onChange={() => setDraftCorrect(idx)}
                              className="text-blue-600"
                            />
                            <span>{String.fromCharCode(65 + idx)}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Option A *"
                        value={draftOptA}
                        onChange={(e) => setDraftOptA(e.target.value)}
                        className="px-3 py-1.5 border border-slate-300 rounded-lg outline-none bg-white text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Option B *"
                        value={draftOptB}
                        onChange={(e) => setDraftOptB(e.target.value)}
                        className="px-3 py-1.5 border border-slate-300 rounded-lg outline-none bg-white text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Option C"
                        value={draftOptC}
                        onChange={(e) => setDraftOptC(e.target.value)}
                        className="px-3 py-1.5 border border-slate-300 rounded-lg outline-none bg-white text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Option D"
                        value={draftOptD}
                        onChange={(e) => setDraftOptD(e.target.value)}
                        className="px-3 py-1.5 border border-slate-300 rounded-lg outline-none bg-white text-xs"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Solution Explanation / Answer Key Tip"
                        value={draftExp}
                        onChange={(e) => setDraftExp(e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-300 rounded-lg outline-none bg-white text-xs"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleAddDraftQuestion}
                      className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs shadow-xs transition flex items-center justify-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add MCQ to Draft Paper</span>
                    </button>
                  </div>
                )}

                {/* Draft questions chips */}
                {pyqDraftQuestions.length > 0 && (
                  <div className="mt-2 space-y-1.5">
                    {pyqDraftQuestions.map((q, idx) => (
                      <div key={idx} className="p-2 bg-white rounded-lg border border-slate-200 text-[11px] flex items-center justify-between gap-2 shadow-xs">
                        <div className="truncate">
                          <strong className="text-blue-700">Q{idx + 1}:</strong> {q.question}
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveDraftQuestion(idx)}
                          className="text-slate-400 hover:text-red-600 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow transition flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                <span>Publish PYQ Paper ({pyqDraftQuestions.length} Questions)</span>
              </button>
            </form>
          </div>

          {/* List */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm">Published PYQ Question Papers ({pyqPapers.length})</h3>
              <span className="text-[11px] text-slate-500">Click Manage to add/edit student interactive MCQs</span>
            </div>
            <div className="space-y-3">
              {pyqPapers.map((p) => (
                <div key={p.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">{p.title}</span>
                      <span className="text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-[10px] font-bold">
                        {p.questions?.length || 0} Interactive MCQs
                      </span>
                    </div>
                    <div className="text-slate-500">{p.examCode} • {p.department} ({p.year})</div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPYQToManage(p);
                        setIsManagePYQModalOpen(true);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-lg border border-blue-200 transition shadow-xs"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Manage Questions ({p.questions?.length || 0})</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm(`Delete PYQ paper "${p.title}"?`)) {
                          deletePYQPaper(p.id);
                        }
                      }}
                      className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition"
                      title="Delete PYQ Paper"
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
                  const rankInfo = getUserRankInfo('mock-kpsc-master-87', std.id);
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
