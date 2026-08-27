import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Upload, BookOpen, FileText, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import { uploadPdfDocument } from '../../services/api';

interface CreateClassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateClassModal: React.FC<CreateClassModalProps> = ({ isOpen, onClose }) => {
  const { modules, addStudyNote, showToast } = useApp();

  const [moduleId, setModuleId] = useState(modules[0]?.id || 'mod-1');
  const [title, setTitle] = useState('');
  const [titleMalayalam, setTitleMalayalam] = useState('');
  const [description, setDescription] = useState('');
  const [readTime, setReadTime] = useState('20 mins read');
  const [pdfNotesTitle, setPdfNotesTitle] = useState('');
  const [pdfNotesUrl, setPdfNotesUrl] = useState('https://example.com/notes.pdf');
  const [pdfSize, setPdfSize] = useState('2.4 MB PDF');
  const [pdfMode, setPdfMode] = useState<'file' | 'url'>('file');
  const [uploadedNotesFile, setUploadedNotesFile] = useState<File | null>(null);
  const [isFreePreview, setIsFreePreview] = useState(false);
  
  const [chapterInput, setChapterInput] = useState('');
  const [chapterOverview, setChapterOverview] = useState<string[]>([
    'Classification of concepts & fundamental principles',
    'Standard numerical corrections & Kerala PSC formulas'
  ]);

  const [takeawayInput, setTakeawayInput] = useState('');
  const [takeaways, setTakeaways] = useState<string[]>([
    'Proven exam shortcut method',
    'Repeated Kerala PSC numerical checks'
  ]);

  if (!isOpen) return null;

  const handleAddChapterPoint = () => {
    if (chapterInput.trim()) {
      setChapterOverview([...chapterOverview, chapterInput.trim()]);
      setChapterInput('');
    }
  };

  const handleRemoveChapterPoint = (index: number) => {
    setChapterOverview(chapterOverview.filter((_, i) => i !== index));
  };

  const handleAddTakeaway = () => {
    if (takeawayInput.trim()) {
      setTakeaways([...takeaways, takeawayInput.trim()]);
      setTakeawayInput('');
    }
  };

  const handleRemoveTakeaway = (index: number) => {
    setTakeaways(takeaways.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addStudyNote({
      moduleId,
      title,
      titleMalayalam: titleMalayalam.trim() ? titleMalayalam : undefined,
      description,
      readTime,
      thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      pdfNotesTitle: pdfNotesTitle.trim() || `${title.replace(/\s+/g, '_')}_Notes.pdf`,
      pdfNotesUrl: pdfNotesUrl || 'https://example.com/notes.pdf',
      pdfSize: pdfSize || '2.5 MB PDF',
      chapterOverview: chapterOverview.length > 0 ? chapterOverview : ['Comprehensive theory coverage'],
      takeaways: takeaways.length > 0 ? takeaways : ['Core formula derivation and application'],
      order: 99,
      isFreePreview
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-400" />
            <h3 className="text-lg font-bold">Upload New Study Notes & PDF Document</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold uppercase text-slate-700 mb-1">
                Select Syllabus Module *
              </label>
              <select
                value={moduleId}
                onChange={(e) => setModuleId(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs bg-white focus:ring-2 focus:ring-brand-500 outline-none"
              >
                {modules.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.order}. {m.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-semibold uppercase text-slate-700 mb-1">
                Estimated Reading Time *
              </label>
              <input
                type="text"
                required
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="25 mins read"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold uppercase text-slate-700 mb-1">
              Document Title (English) *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Total Station EDM Phase Comparison & Coordinates Complete Notes"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold uppercase text-slate-700 mb-1">
              Malayalam Sub-Title (Optional)
            </label>
            <input
              type="text"
              value={titleMalayalam}
              onChange={(e) => setTitleMalayalam(e.target.value)}
              placeholder="e.g. ടോട്ടൽ സ്റ്റേഷൻ ഫീൽഡ് വർക്കും കണക്കുകൂട്ടലുകളും തിയറിയും"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold uppercase text-slate-700 mb-1">
              Chapter Summary & Key Highlights
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Explain the concepts covered in this study document, Kerala PSC weightage, and ranker tips..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>

          {/* PDF Notes Section */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-slate-800">
                <FileText className="w-4 h-4 text-brand-600" />
                <span>Upload Study Notes PDF Document *</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-200/80 p-0.5 rounded-lg text-[10px]">
                <button
                  type="button"
                  onClick={() => setPdfMode('file')}
                  className={`px-2 py-0.5 rounded font-bold transition ${
                    pdfMode === 'file' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  From Device (.pdf)
                </button>
                <button
                  type="button"
                  onClick={() => setPdfMode('url')}
                  className={`px-2 py-0.5 rounded font-bold transition ${
                    pdfMode === 'url' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Link / Drive URL
                </button>
              </div>
            </div>

            {pdfMode === 'file' ? (
              <label className="border-2 border-dashed border-brand-200 hover:border-brand-400 bg-brand-50/40 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition text-center space-y-1.5">
                <input
                  type="file"
                  accept="application/pdf,.pdf"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setUploadedNotesFile(file);
                      setPdfNotesTitle(file.name);
                      setPdfSize(`${(file.size / (1024 * 1024)).toFixed(2)} MB PDF`);

                      if (!title.trim()) {
                        setTitle(file.name.replace(/\.[^/.]+$/, '').replace(/_/g, ' '));
                      }

                      showToast(`Uploading PDF to persistent storage: ${file.name}...`, 'info');
                      uploadPdfDocument(file)
                        .then((url) => {
                          setPdfNotesUrl(url);
                          showToast(`PDF saved to disk: ${file.name}`, 'success');
                        })
                        .catch((err) => {
                          console.warn('Fallback to local DataURL:', err);
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            setPdfNotesUrl(event.target?.result as string);
                          };
                          reader.readAsDataURL(file);
                        });
                    }
                  }}
                  className="hidden"
                />
                {uploadedNotesFile ? (
                  <div className="space-y-1">
                    <div className="font-bold text-emerald-800 flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{uploadedNotesFile.name}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {(uploadedNotesFile.size / (1024 * 1024)).toFixed(2)} MB • Ready for students
                    </div>
                    <div className="text-[10px] text-brand-600 font-semibold underline">
                      Click to replace PDF file
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <Upload className="w-5 h-5 text-brand-600 mx-auto" />
                    <div className="font-semibold text-slate-800">
                      Click to choose handwritten PDF notes from your device
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Handwritten notes, syllabus summaries, formula sheets (.PDF)
                    </div>
                  </div>
                )}
              </label>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 mb-1">Notes Document Title</label>
                  <input
                    type="text"
                    value={pdfNotesTitle}
                    onChange={(e) => setPdfNotesTitle(e.target.value)}
                    placeholder="e.g. Total_Station_Handwritten_Formulas.pdf"
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">PDF Download / Drive Link</label>
                  <input
                    type="text"
                    value={pdfNotesUrl}
                    onChange={(e) => setPdfNotesUrl(e.target.value)}
                    placeholder="https://drive.google.com/... or https://..."
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Chapter Outline Points */}
          <div>
            <label className="block font-semibold uppercase text-slate-700 mb-1">
              Core Syllabus Topics Included in Notes
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={chapterInput}
                onChange={(e) => setChapterInput(e.target.value)}
                placeholder="Add a syllabus topic point covered in these notes..."
                className="flex-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddChapterPoint();
                  }
                }}
              />
              <button
                type="button"
                onClick={handleAddChapterPoint}
                className="px-3 py-1.5 bg-slate-800 text-white rounded-lg text-xs hover:bg-slate-700 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Add
              </button>
            </div>
            <div className="space-y-1">
              {chapterOverview.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-100 px-3 py-1 rounded-lg text-xs">
                  <span className="text-slate-700">• {item}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveChapterPoint(idx)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* High Yield Takeaways */}
          <div>
            <label className="block font-semibold uppercase text-slate-700 mb-1">
              High-Yield Formulas & Ranker Rules
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={takeawayInput}
                onChange={(e) => setTakeawayInput(e.target.value)}
                placeholder="Add a key formula or memory rule..."
                className="flex-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddTakeaway();
                  }
                }}
              />
              <button
                type="button"
                onClick={handleAddTakeaway}
                className="px-3 py-1.5 bg-slate-800 text-white rounded-lg text-xs hover:bg-slate-700 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Add
              </button>
            </div>
            <div className="space-y-1">
              {takeaways.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg text-xs">
                  <span className="text-amber-900 font-medium">✓ {item}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTakeaway(idx)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="freePreview"
              checked={isFreePreview}
              onChange={(e) => setIsFreePreview(e.target.checked)}
              className="rounded border-slate-300 text-brand-600 focus:ring-brand-500 h-4 w-4"
            />
            <label htmlFor="freePreview" className="font-medium text-slate-700">
              Set as Free Sample Notes (Open for non-enrolled students)
            </label>
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg shadow"
            >
              <Upload className="w-4 h-4" />
              Publish Study Notes & PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
