import React from 'react';
import { useApp } from '../../context/AppContext';
import { Compass, Award, MessageCircle, Mail, Phone, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, setIsEnrollmentModalOpen, openLegalModal, hasCourseAccess } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 mt-20">
      {/* Mentor Highlight Banner */}
      <div className="bg-gradient-to-r from-brand-950 via-slate-900 to-navy-950 border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-navy-600 flex items-center justify-center text-white shadow-xl flex-shrink-0">
              <Award className="w-8 h-8 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-white text-lg font-bold">Kerala PSC & KWA Survey Academy</h4>
                <span className="bg-amber-500/20 text-amber-300 text-xs px-2 py-0.5 rounded font-semibold border border-amber-500/30">
                  Verified Instructor
                </span>
              </div>
              <p className="text-slate-400 text-xs mt-0.5">
                Kerala PSC Survey & Land Records • Kerala Water Authority (KWA) Technical Coaching
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919447000000?text=Hi%20Sir%2C%20I%20am%20interested%20in%20the%20Kerala%20PSC%20Survey%20Course"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition shadow"
            >
              <MessageCircle className="w-4 h-4" />
              Join WhatsApp Doubts Group
            </a>
            {!hasCourseAccess ? (
              <button
                onClick={() => setIsEnrollmentModalOpen(true)}
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition shadow"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-200" />
                Enroll in Batch
              </button>
            ) : (
              <button
                onClick={() => setActiveTab('dashboard')}
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition shadow"
              >
                <Compass className="w-4 h-4 text-brand-200" />
                Open Dashboard
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <Compass className="w-5 h-5 text-brand-400" />
              <span>SurveyRank Academy</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated coaching platform for Kerala PSC Surveyor Grade II, Survey and Land Records Department, and Kerala Water Authority Technical posts.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              Classes curated with handwritten notes, official PYQs, and Kerala PSC pattern negative marking tests.
            </div>
          </div>

          {/* Col 2: Syllabus Modules */}
          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Syllabus Modules Covered
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveTab('notes')}>• Chain & Compass Surveying</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveTab('notes')}>• Levelling & Reduced Levels (RL)</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveTab('notes')}>• Theodolite & Tacheometry</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveTab('notes')}>• Total Station, GPS & GIS</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveTab('notes')}>• AutoCAD & Engineering Drawing</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveTab('notes')}>• Building Materials & Workshop Science</li>
            </ul>
          </div>

          {/* Col 3: Quick Portals */}
          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Student Features
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveTab('notes')}>
                Handwritten Study Notes & PDFs
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveTab('pyq')}>
                Previous Year Solved Papers (PYQ Bank)
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveTab('mocktests')}>
                Kerala PSC Mock Test Engine (-0.33 Marking)
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveTab('doubts')}>
                Question & Answer Doubt Clearance
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveTab('dashboard')}>
                Student Performance Dashboard
              </li>
            </ul>
          </div>

          {/* Col 4: Target Exams */}
          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Target Examinations
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Surveyor Grade II (Survey & Land Records)</li>
              <li>• Tracer / Overseer Grade III (KWA)</li>
              <li>• Draftsman Grade II (Town Planning / LSGD)</li>
              <li>• Kerala Digital Resurvey Specialist Posts</li>
              <li>• Kerala Public Works & Irrigation Dept Survey</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/80 mt-10 pt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <button
                onClick={() => openLegalModal('privacy')}
                className="hover:text-emerald-400 transition underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <span className="text-slate-700">•</span>
              <button
                onClick={() => openLegalModal('terms')}
                className="hover:text-emerald-400 transition underline-offset-4 hover:underline"
              >
                Terms of Service
              </button>
              <span className="text-slate-700">•</span>
              <button
                onClick={() => openLegalModal('refund')}
                className="hover:text-emerald-400 transition underline-offset-4 hover:underline"
              >
                Cancellation & Refund
              </button>
              <span className="text-slate-700">•</span>
              <button
                onClick={() => openLegalModal('contact')}
                className="hover:text-emerald-400 transition underline-offset-4 hover:underline"
              >
                Contact Us
              </button>
            </div>
            <div className="text-[11px] text-slate-500">
              Merchant: Joseph Josey • Kerala, India
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-2 border-t border-slate-900">
            <div>
              © {new Date().getFullYear()} SurveyRank Kerala PSC Academy. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Designed for Kerala PSC Aspirants</span>
              <span>•</span>
              <span className="text-brand-400 font-medium">Expert Mentorship & Notes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
