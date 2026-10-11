import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, ShieldCheck, FileText, RefreshCw, Mail, Phone, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

export const LegalModal: React.FC = () => {
  const { isLegalModalOpen, setIsLegalModalOpen, legalModalTab, setLegalModalTab } = useApp();

  if (!isLegalModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-6 overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-950 via-slate-900 to-navy-950 p-5 text-white relative flex-shrink-0">
          <button
            onClick={() => setIsLegalModalOpen(false)}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              Verified Legal & Compliance Policy
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white">
            SurveyRank Kerala PSC Academy
          </h3>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 pt-3 text-xs overflow-x-auto">
            <button
              onClick={() => setLegalModalTab('privacy')}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 whitespace-nowrap ${
                legalModalTab === 'privacy' ? 'bg-brand-500 text-white font-bold shadow-sm' : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => setLegalModalTab('terms')}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 whitespace-nowrap ${
                legalModalTab === 'terms' ? 'bg-brand-500 text-white font-bold shadow-sm' : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </button>
            <button
              onClick={() => setLegalModalTab('refund')}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 whitespace-nowrap ${
                legalModalTab === 'refund' ? 'bg-brand-500 text-white font-bold shadow-sm' : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refund Policy</span>
            </button>
            <button
              onClick={() => setLegalModalTab('contact')}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 whitespace-nowrap ${
                legalModalTab === 'contact' ? 'bg-brand-500 text-white font-bold shadow-sm' : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1 text-xs text-slate-700 leading-relaxed">
          
          {/* TAB 1: PRIVACY POLICY */}
          {legalModalTab === 'privacy' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-base font-bold text-slate-900">Privacy Policy</h4>
                <p className="text-[11px] text-slate-500">Effective Date: October 2026 • Applicable for Web & Android App</p>
              </div>

              <section className="space-y-1.5">
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">1. Information We Collect</h5>
                <p>
                  SurveyRank Academy collects minimal student information necessary to facilitate online exam preparation, track test performance, and generate statewide ranking leaderboards:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Account Information:</strong> Student name, email address, phone number, and district for communication and exam categorization.</li>
                  <li><strong>Performance Data:</strong> Mock test submissions, time spent, scored marks, accuracy percentages, and question responses.</li>
                  <li><strong>Payment Verification:</strong> Payment transaction references (UPI reference / Razorpay payment ID). <em>We never store credit/debit card numbers or UPI PINs on our servers.</em></li>
                </ul>
              </section>

              <section className="space-y-1.5">
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">2. Use of Information</h5>
                <p>
                  We use collected information solely to provide access to handwritten notes, solved previous question papers (PYQs), calculate Kerala statewide ranks, provide faculty doubt assistance, and issue course enrollment receipts.
                </p>
              </section>

              <section className="space-y-1.5">
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">3. Data Security & Storage</h5>
                <p>
                  All data transmitted between the client app and our servers is encrypted using industry-standard 256-bit SSL / HTTPS encryption. We do not sell, rent, or trade your personal information to any third-party marketing companies.
                </p>
              </section>

              <section className="space-y-1.5">
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">4. Children's Privacy</h5>
                <p>
                  Our services are designed for adult candidates (ages 18+) preparing for competitive government recruitment exams conducted by the Kerala Public Service Commission (Kerala PSC).
                </p>
              </section>

              <section className="space-y-1.5">
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">5. Contact Regarding Privacy</h5>
                <p>
                  For any privacy-related inquiries, contact Course Director Joseph Josey at <strong>josephjosey19@gmail.com</strong>.
                </p>
              </section>
            </div>
          )}

          {/* TAB 2: TERMS OF SERVICE */}
          {legalModalTab === 'terms' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-base font-bold text-slate-900">Terms of Service & Student Agreement</h4>
                <p className="text-[11px] text-slate-500">Effective Date: October 2026</p>
              </div>

              <section className="space-y-1.5">
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">1. Course Enrollment & License</h5>
                <p>
                  Upon enrolling in the <strong>6 Months Complete Access Plan (₹600)</strong> or <strong>1 Year Complete Access Plan (₹1,000)</strong>, students are granted a non-exclusive, non-transferable, single-user license to access the syllabus modules, study notes, question bank, and timed mock tests.
                </p>
              </section>

              <section className="space-y-1.5">
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">2. Intellectual Property</h5>
                <p>
                  All notes, mock exams, question explanations, diagrams, formulas, and platform software are the intellectual property of Joseph Josey and SurveyRank Academy. Unauthorized distribution, resale, or scraping is strictly prohibited.
                </p>
              </section>

              <section className="space-y-1.5">
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">3. Independent Educational Academy</h5>
                <p>
                  SurveyRank Academy is an independent private coaching portal and is not officially affiliated with or endorsed by the Kerala Public Service Commission (KPSC) or the Government of Kerala. All past question papers and answer keys are provided for educational review and self-study purposes.
                </p>
              </section>

              <section className="space-y-1.5">
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">4. Account Integrity</h5>
                <p>
                  Candidates are responsible for safeguarding their login credentials and maintaining a single active session. Accounts found sharing credentials publicly may be suspended.
                </p>
              </section>
            </div>
          )}

          {/* TAB 3: REFUND POLICY */}
          {legalModalTab === 'refund' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-base font-bold text-slate-900">Cancellation & Refund Policy</h4>
                <p className="text-[11px] text-slate-500">Merchant Compliance & Consumer Protection</p>
              </div>

              <section className="space-y-1.5">
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">1. Instant Digital Access</h5>
                <p>
                  Because our courses deliver immediate digital access to copyrighted notes, complete question banks (10,000+ MCQs), and full exam engines instantly upon payment, course enrollments are generally non-refundable once content has been accessed.
                </p>
              </section>

              <section className="space-y-1.5">
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">2. Duplicate Payments / Failed Activations</h5>
                <p>
                  In the event of duplicate transactions, technical gateway failures where payment was deducted but enrollment was not activated within 24 hours, our team will issue a 100% full refund to the original payment source within 5–7 business days upon verifying payment reference.
                </p>
              </section>

              <section className="space-y-1.5">
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">3. How to Request Assistance</h5>
                <p>
                  To report any billing issue or request support, email us with your registered phone number and transaction ID at <strong>josephjosey19@gmail.com</strong> or WhatsApp <strong>+91 94470 00000</strong>.
                </p>
              </section>
            </div>
          )}

          {/* TAB 4: CONTACT US */}
          {legalModalTab === 'contact' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-base font-bold text-slate-900">Contact & Support Details</h4>
                <p className="text-[11px] text-slate-500">Official Faculty & Platform Inquiries</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-brand-700 font-bold">
                    <Mail className="w-4 h-4" />
                    <span>Official Email</span>
                  </div>
                  <p className="text-slate-600 font-mono text-[11px]">josephjosey19@gmail.com</p>
                  <p className="text-[10px] text-slate-400">Response time within 12 hours</p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <Phone className="w-4 h-4" />
                    <span>WhatsApp Mentorship</span>
                  </div>
                  <p className="text-slate-600 font-mono text-[11px]">+91 94470 00000</p>
                  <p className="text-[10px] text-slate-400">Direct Faculty Guidance</p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-navy-700 font-bold">
                    <MapPin className="w-4 h-4" />
                    <span>Academy Location</span>
                  </div>
                  <p className="text-slate-600 text-[11px]">Idukki / Thodupuzha, Kerala, India</p>
                  <p className="text-[10px] text-slate-400">Statewide Kerala PSC Coaching</p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-700 font-bold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Faculty Director</span>
                  </div>
                  <p className="text-slate-800 font-bold text-[11px]">Joseph Josey</p>
                  <p className="text-[10px] text-slate-400">Course Director & Faculty</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} SurveyRank Academy • All rights reserved.
          </div>
          <button
            onClick={() => setIsLegalModalOpen(false)}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
