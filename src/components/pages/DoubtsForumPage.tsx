import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  HelpCircle,
  MessageSquare,
  ThumbsUp,
  Award,
  Search,
  Plus,
  CheckCircle2,
  Clock,
  Send,
  UserCheck,
  Sparkles,
  Filter,
  Paperclip
} from 'lucide-react';
import { AskDoubtModal } from '../modals/AskDoubtModal';

export const DoubtsForumPage: React.FC = () => {
  const { doubts, currentUser, upvoteDoubt, addDoubtAnswer, role } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);
  const [replyInput, setReplyInput] = useState<Record<string, string>>({});

  const topicsList = [
    'all',
    'Levelling',
    'Kerala Survey & Boundaries Act',
    'Chain Surveying',
    'Compass Surveying',
    'Total Station & GPS',
    'Theodolite & Tacheometry',
    'Kerala PSC Strategy'
  ];

  const filteredDoubts = doubts.filter((d) => {
    const matchesTopic = selectedTopic === 'all' || d.topic === selectedTopic;
    const matchesSearch =
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.userName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  const handleReplySubmit = (doubtId: string) => {
    const text = replyInput[doubtId];
    if (!text || !text.trim()) return;

    addDoubtAnswer(doubtId, text.trim());
    setReplyInput((prev) => ({ ...prev, [doubtId]: '' }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-purple-50 text-purple-700">
              <HelpCircle className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Q&A Doubt Clearance Forum
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Ask any questions on survey problems, field calculations, or Kerala PSC syllabus. Direct verified answers from faculty.
          </p>
        </div>

        <button
          onClick={() => setIsAskModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow transition self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Ask New Doubt</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Topic Pills */}
        <div className="flex flex-wrap gap-2">
          {topicsList.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTopic(t)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                selectedTopic === t
                  ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
              }`}
            >
              {t === 'all' ? 'All Topics' : t}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search doubts or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-xl text-xs bg-white outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Doubts List */}
      <div className="space-y-5">
        {filteredDoubts.length > 0 ? (
          filteredDoubts.map((doubt) => (
            <div
              key={doubt.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-purple-300 transition"
            >
              {/* Question Top Row */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <img
                    src={doubt.userAvatar}
                    alt={doubt.userName}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100 flex-shrink-0"
                  />
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">{doubt.userName}</span>
                      {doubt.userDistrict && (
                        <span className="text-[11px] text-slate-500 font-medium">({doubt.userDistrict})</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span>{new Date(doubt.createdAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <span className="bg-purple-50 text-purple-700 font-bold px-2 py-0.2 rounded">
                        {doubt.topic}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Upvote Button */}
                <button
                  onClick={() => upvoteDoubt(doubt.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-purple-600 text-xs font-semibold transition"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{doubt.upvotes}</span>
                </button>
              </div>

              {/* Title & Body */}
              <div className="space-y-1.5 pl-1">
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {doubt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {doubt.content}
                </p>
                {doubt.imageAttachment && (
                  <div className="pt-1.5">
                    <a
                      href={doubt.imageAttachment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg text-xs font-semibold border border-purple-200 transition shadow-xs"
                    >
                      <Paperclip className="w-3.5 h-3.5" />
                      <span>View Attached Diagram / Problem Sheet</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Verified Answers Section */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                {doubt.answers.map((ans) => (
                  <div
                    key={ans.id}
                    className={`p-4 rounded-xl space-y-2 text-xs leading-relaxed ${
                      ans.isVerifiedInstructor
                        ? 'bg-gradient-to-r from-brand-50 to-emerald-50 border border-brand-200 text-brand-950'
                        : 'bg-slate-50 border border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={ans.authorAvatar}
                          alt={ans.authorName}
                          className="w-7 h-7 rounded-full object-cover ring-2 ring-brand-500"
                        />
                        <div>
                          <div className="font-bold text-slate-900 flex items-center gap-1.5">
                            <span>{ans.authorName}</span>
                            {ans.isVerifiedInstructor && (
                              <span className="bg-amber-400/30 text-amber-900 border border-amber-400/50 text-[10px] font-extrabold px-2 py-0.2 rounded-full flex items-center gap-1">
                                <Award className="w-3 h-3 text-amber-600" /> Verified Instructor
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400">
                        {new Date(ans.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="pl-9 text-slate-700 font-normal sm:text-xs text-[11px]">
                      {ans.content}
                    </p>
                  </div>
                ))}

                {/* Reply Input Box */}
                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="text"
                    placeholder={
                      role === 'instructor'
                        ? 'Write official instructor answer...'
                        : 'Write a student reply...'
                    }
                    value={replyInput[doubt.id] || ''}
                    onChange={(e) =>
                      setReplyInput((prev) => ({ ...prev, [doubt.id]: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleReplySubmit(doubt.id);
                      }
                    }}
                    className="flex-1 px-3.5 py-2 border border-slate-300 rounded-xl text-xs outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50"
                  />
                  <button
                    onClick={() => handleReplySubmit(doubt.id)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 text-slate-500 space-y-2">
            <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
            <div className="font-bold text-sm">No doubts found matching your search.</div>
            <p className="text-xs">Have a question? Be the first to ask!</p>
          </div>
        )}
      </div>

      <AskDoubtModal isOpen={isAskModalOpen} onClose={() => setIsAskModalOpen(false)} />
    </div>
  );
};
