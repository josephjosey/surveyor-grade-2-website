import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, HelpCircle, Send, BookOpen, Paperclip, CheckCircle2, Loader2 } from 'lucide-react';
import { uploadUserFile } from '../../services/storageService';

interface AskDoubtModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultClassId?: string;
}

export const AskDoubtModal: React.FC<AskDoubtModalProps> = ({ isOpen, onClose, defaultClassId }) => {
  const { studyNotes, addDoubt, showToast } = useApp();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [topic, setTopic] = useState('General Survey');
  const [relatedClassId, setRelatedClassId] = useState(defaultClassId || '');
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
  const [attachmentUrl, setAttachmentUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    addDoubt(title, content, topic, relatedClassId || undefined, attachmentUrl || undefined);
    setTitle('');
    setContent('');
    setAttachmentFile(null);
    setAttachmentUrl(null);
    onClose();
  };

  const topicsList = [
    'Chain Surveying',
    'Compass Surveying',
    'Levelling & Contouring',
    'Theodolite & Tacheometry',
    'Total Station & GPS',
    'Kerala Survey & Boundaries Act',
    'Engineering Drawing & AutoCad',
    'Kerala Water Authority Specific',
    'Kerala PSC Exam Strategy'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold">Ask Doubt to Instructor</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              Subject Topic *
            </label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-brand-500 outline-none"
            >
              {topicsList.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              Related Study Module (Optional)
            </label>
            <select
              value={relatedClassId}
              onChange={(e) => setRelatedClassId(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-brand-500 outline-none"
            >
              <option value="">-- None (General Exam Doubt) --</option>
              {studyNotes.map((note) => (
                <option key={note.id} value={note.id}>
                  {note.title.slice(0, 50)}...
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              Doubt Title / Core Question *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. How to solve Inverted Staff benchmark questions?"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              Detailed Explanation / Problem Statement *
            </label>
            <textarea
              rows={4}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Describe your doubt clearly with any numerical values or specific step where you are getting stuck..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>

          {/* Optional Attachment Upload */}
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              Attach Diagram / Problem Screenshot (Optional)
            </label>
            <label className="border border-dashed border-slate-300 hover:border-brand-500 rounded-xl p-3 flex items-center justify-between cursor-pointer bg-slate-50 transition">
              <input
                type="file"
                accept="image/*,application/pdf"
                className="hidden"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setAttachmentFile(file);
                    setIsUploading(true);
                    showToast(`Uploading attachment to Supabase Storage: ${file.name}...`, 'info');
                    const res = await uploadUserFile(file, 'doubts', 'doubt-attachment');
                    if (res) {
                      setAttachmentUrl(res.signedUrl);
                      showToast(`Attachment saved to Supabase Storage: ${file.name}`, 'success');
                    }
                    setIsUploading(false);
                  }
                }}
              />
              <div className="flex items-center gap-2 text-xs text-slate-600">
                {isUploading ? (
                  <Loader2 className="w-4 h-4 animate-spin text-brand-600" />
                ) : attachmentUrl ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Paperclip className="w-4 h-4 text-slate-400" />
                )}
                <span>
                  {isUploading
                    ? 'Uploading attachment to Supabase Storage...'
                    : attachmentFile
                    ? `${attachmentFile.name}`
                    : 'Choose image or PDF from device'}
                </span>
              </div>
              <span className="text-[11px] text-brand-600 font-semibold">Browse</span>
            </label>
          </div>

          <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
            <BookOpen className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span>
              Your doubt will be visible to the batch and answered with verified solutions directly by your <strong>Course Instructor</strong>.
            </span>
          </div>

          <div className="pt-2 flex justify-end gap-3 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-lg shadow"
            >
              <Send className="w-4 h-4" />
              Post Doubt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
