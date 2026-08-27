import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Award,
  CheckCircle,
  ShieldCheck,
  Sparkles,
  BookOpen,
  CreditCard,
  QrCode,
  Smartphone,
  Building2,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Download,
  Printer,
  Copy,
  Check,
  MessageCircle,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CoursePlan {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  originalPrice: number;
  price: number;
  features: string[];
}

const COURSE_PLANS: CoursePlan[] = [
  {
    id: 'plan-master',
    name: 'Kerala PSC Survey Complete Master Course',
    subtitle: 'All 8 syllabus modules, concise handwritten PDF notes, PYQ bank & mock tests',
    badge: 'Most Popular • Recommended',
    originalPrice: 4999,
    price: 1999,
    features: [
      'Full access to all 8 Kerala PSC Syllabus Modules',
      'Concise Handwritten PDF Notes & Formula Sheets',
      'Downloadable Chapter Summaries for quick revision',
      'Year-wise Solved PYQ Bank (2024 to 2022)',
      'Kerala PSC Pattern Timed Mock Tests (-0.33 Marking)',
      'Direct 1-on-1 Doubt Clearance with Joseph Josey (Course Director)'
    ]
  },
  {
    id: 'plan-mock',
    name: 'Kerala PSC Mock Test Series Only',
    subtitle: '87 MCQ Master Series & Statewide Ranked Exams with -0.33 Negative Marking',
    originalPrice: 1499,
    price: 499,
    features: [
      'Full-Length & Module-wise Kerala PSC Mock Tests',
      '87 MCQ Surveyor Grade II Master Series',
      'Real -0.33 negative marking calculation & live rank',
      'Step-by-step verified explanations and faculty tips'
    ]
  },
  {
    id: 'plan-crash',
    name: 'Fast-Track Survey Crash Course',
    subtitle: 'High-yield numerical formula revision, Total Station/GPS & Survey Act',
    originalPrice: 2499,
    price: 999,
    features: [
      'Total Station, GPS & Resurvey Special modules',
      'Kerala Survey & Boundaries Act 1961 high-yield summary',
      '5 Model Exams with Ranker Notes'
    ]
  }
];

export const EnrollmentModal: React.FC = () => {
  const { isEnrollmentModalOpen, setIsEnrollmentModalOpen, enrollStudent, showToast, currentUser } = useApp();

  // Multi-step: 1 = Details, 2 = Plan & Payment, 3 = Payment Success
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State initialized from logged-in user
  const [name, setName] = useState(currentUser?.name || 'Aswathi Nair');
  const [email, setEmail] = useState(currentUser?.email || 'aswathi.surveyor@gmail.com');
  const [phone, setPhone] = useState(currentUser?.phone || '+91 98471 23456');
  const [district, setDistrict] = useState(currentUser?.district || 'Palakkad');
  const [targetExam, setTargetExam] = useState(currentUser?.targetExam || 'Kerala PSC Surveyor Gr. II & Land Records');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plan-master');

  React.useEffect(() => {
    if (currentUser) {
      if (currentUser.name) setName(currentUser.name);
      if (currentUser.email) setEmail(currentUser.email);
      if (currentUser.phone) setPhone(currentUser.phone);
      if (currentUser.district) setDistrict(currentUser.district);
      if (currentUser.targetExam) setTargetExam(currentUser.targetExam);
    }
  }, [currentUser, isEnrollmentModalOpen]);

  // Payment Method State
  const [paymentMethod, setPaymentMethod] = useState<'upi_qr' | 'upi_id' | 'card' | 'netbanking' | 'whatsapp'>('upi_qr');
  const [upiId, setUpiId] = useState('aswathi@okaxis');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  // Card fields
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8821');
  const [cardExpiry, setCardExpiry] = useState('08/28');
  const [cardCvv, setCardCvv] = useState('•••');
  const [cardHolder, setCardHolder] = useState('ASWATHI NAIR');

  // Netbanking field
  const [selectedBank, setSelectedBank] = useState('State Bank of India (SBI)');

  if (!isEnrollmentModalOpen) return null;

  const selectedPlan = COURSE_PLANS.find((p) => p.id === selectedPlanId) || COURSE_PLANS[0];

  const handleStep1Next = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStep(2);
  };

  const handleProcessPayment = () => {
    setIsProcessing(true);
    const txId = 'TXN_KPSC_' + Math.floor(10000000 + Math.random() * 90000000);
    setTransactionId(txId);

    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }

      showToast(`Payment of ₹${selectedPlan.price} successful! Welcome to the course!`, 'success');
    }, 1500);
  };

  const handleFinishEnrollment = () => {
    const planKey = selectedPlanId === 'plan-master' ? 'master' : selectedPlanId === 'plan-mock' ? 'mock_only' : 'crash';
    enrollStudent(name, email, phone, district, targetExam, planKey);
    setStep(1);
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText('joseph.surveyrankers@okhdfcbank');
    setCopiedUpi(true);
    showToast('UPI ID copied to clipboard: joseph.surveyrankers@okhdfcbank', 'info');
    setTimeout(() => setCopiedUpi(false), 3000);
  };

  const keralaDistricts = [
    'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha',
    'Kottayam', 'Idukki', 'Ernakulam', 'Thrissur',
    'Palakkad', 'Malappuram', 'Kozhikode', 'Wayanad',
    'Kannur', 'Kasaragod'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full my-6 overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-950 via-slate-900 to-navy-950 p-5 text-white relative flex-shrink-0">
          <button
            onClick={() => {
              setIsEnrollmentModalOpen(false);
              setStep(1);
            }}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-amber-400/30">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              Mentor: Joseph Josey (Course Director & Faculty)
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white">
            {step === 1 && 'Student Registration & Course Enrollment'}
            {step === 2 && 'Select Payment Option & Checkout'}
            {step === 3 && 'Payment Successful & Enrollment Receipt'}
          </h3>

          {/* Step Progress Bar */}
          <div className="flex items-center gap-2 pt-3 text-[11px] font-medium text-slate-300">
            <span className={`px-2 py-0.5 rounded-full ${step === 1 ? 'bg-brand-500 text-white font-bold' : 'bg-white/20'}`}>
              1. Student Details
            </span>
            <span>➔</span>
            <span className={`px-2 py-0.5 rounded-full ${step === 2 ? 'bg-brand-500 text-white font-bold' : 'bg-white/20'}`}>
              2. Payment & Plan
            </span>
            <span>➔</span>
            <span className={`px-2 py-0.5 rounded-full ${step === 3 ? 'bg-emerald-500 text-white font-bold' : 'bg-white/20'}`}>
              3. Confirmation
            </span>
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">

          {/* STEP 1: STUDENT DETAILS & PLAN SELECTION */}
          {step === 1 && (
            <form onSubmit={handleStep1Next} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Varma"
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 text-slate-900 text-sm outline-none bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 text-slate-900 text-sm outline-none bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98470 12345"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 text-slate-900 text-sm outline-none bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    District (Kerala)
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 text-slate-900 text-sm outline-none bg-white"
                  >
                    {keralaDistricts.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Target Exam
                  </label>
                  <select
                    value={targetExam}
                    onChange={(e) => setTargetExam(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 text-slate-900 text-sm outline-none bg-white"
                  >
                    <option value="Kerala PSC Surveyor Gr. II & Land Records">Surveyor Gr. II (Survey Dept)</option>
                    <option value="Kerala Water Authority (KWA) Tracer / Overseer">KWA Tracer / Overseer Gr. III</option>
                    <option value="Draftsman Gr. II / Town Planning">Draftsman Gr. II / Town Planning</option>
                    <option value="Combined All Survey Technical Exams">Combined All Survey Exams</option>
                  </select>
                </div>
              </div>

              {/* Course Plans Choice */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800">
                  Select Your Course Plan:
                </label>
                <div className="space-y-2.5">
                  {COURSE_PLANS.map((plan) => {
                    const isSelected = selectedPlanId === plan.id;
                    return (
                      <div
                        key={plan.id}
                        onClick={() => setSelectedPlanId(plan.id)}
                        className={`p-3.5 rounded-xl border-2 transition cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'border-brand-600 bg-brand-50/50 ring-1 ring-brand-600'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-sm">{plan.name}</span>
                            {plan.badge && (
                              <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.2 rounded-full">
                                {plan.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {plan.subtitle}
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <div className="text-base font-black text-brand-700">₹{plan.price}</div>
                          <div className="text-[11px] text-slate-400 line-through">₹{plan.originalPrice}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-bold py-3 px-5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>Proceed to Payment (₹{selectedPlan.price})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const planKey = selectedPlanId === 'plan-master' ? 'master' : selectedPlanId === 'plan-mock' ? 'mock_only' : 'crash';
                    enrollStudent(name, email, phone, district, targetExam, planKey);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-semibold transition"
                >
                  <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                  Instant Demo Activation
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: PAYMENT OPTIONS */}
          {step === 2 && (
            <div className="space-y-5 animate-fadeIn">
              {/* Order Summary Box */}
              <div className="bg-gradient-to-r from-slate-900 to-brand-950 p-4 rounded-xl text-white flex items-center justify-between">
                <div>
                  <div className="text-xs text-brand-300 font-bold uppercase">Enrolling Plan</div>
                  <div className="text-sm font-bold text-white">{selectedPlan.name}</div>
                  <div className="text-[11px] text-slate-400">Candidate: {name} • {phone}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Total Payable</div>
                  <div className="text-2xl font-black text-amber-300">₹{selectedPlan.price}</div>
                </div>
              </div>

              {/* Payment Methods Selection */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800">
                  Select Payment Method:
                </label>

                {/* Tab Bar */}
                <div className="grid grid-cols-4 gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi_qr')}
                    className={`py-2 rounded-lg transition flex flex-col sm:flex-row items-center justify-center gap-1 ${
                      paymentMethod === 'upi_qr' ? 'bg-white text-brand-700 shadow-sm font-bold' : 'hover:bg-slate-200'
                    }`}
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>UPI / QR</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 rounded-lg transition flex flex-col sm:flex-row items-center justify-center gap-1 ${
                      paymentMethod === 'card' ? 'bg-white text-brand-700 shadow-sm font-bold' : 'hover:bg-slate-200'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`py-2 rounded-lg transition flex flex-col sm:flex-row items-center justify-center gap-1 ${
                      paymentMethod === 'netbanking' ? 'bg-white text-brand-700 shadow-sm font-bold' : 'hover:bg-slate-200'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>NetBanking</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('whatsapp')}
                    className={`py-2 rounded-lg transition flex flex-col sm:flex-row items-center justify-center gap-1 ${
                      paymentMethod === 'whatsapp' ? 'bg-white text-emerald-700 shadow-sm font-bold' : 'hover:bg-slate-200'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </button>
                </div>

                {/* TAB CONTENT 1: UPI & QR CODE */}
                {paymentMethod === 'upi_qr' && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-4 text-center">
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-slate-800">
                        Scan QR Code with Any UPI App (GPay / PhonePe / Paytm)
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Zero transaction fees • Instant automated activation
                      </div>
                    </div>

                    {/* QR Code Graphic Box */}
                    <div className="w-44 h-44 bg-white p-3 rounded-2xl border-2 border-brand-500 shadow-md mx-auto flex flex-col items-center justify-center space-y-2">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=joseph.surveyrankers@okhdfcbank%26pn=Joseph%20Josey%20Survey%20Academy%26am=1999%26cu=INR"
                        alt="Kerala PSC Survey Course Payment QR Code"
                        className="w-32 h-32 object-contain"
                      />
                      <div className="text-[10px] font-bold text-slate-700 font-mono">
                        ₹{selectedPlan.price} • Joseph Josey
                      </div>
                    </div>

                    {/* Copy UPI ID */}
                    <div className="flex items-center justify-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 text-xs max-w-sm mx-auto">
                      <span className="text-slate-500">Official UPI ID:</span>
                      <span className="font-bold text-brand-900 font-mono">joseph.surveyrankers@okhdfcbank</span>
                      <button
                        type="button"
                        onClick={handleCopyUpi}
                        className="p-1 text-slate-500 hover:text-brand-600 rounded transition"
                        title="Copy UPI ID"
                      >
                        {copiedUpi ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB CONTENT 2: CARD PAYMENT */}
                {paymentMethod === 'card' && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Expiry (MM/YY)</label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white font-mono"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">CVV</label>
                        <input
                          type="password"
                          maxLength={3}
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Cardholder Name</label>
                      <input
                        type="text"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none bg-white uppercase"
                      />
                    </div>
                  </div>
                )}

                {/* TAB CONTENT 3: NETBANKING */}
                {paymentMethod === 'netbanking' && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 text-xs">
                    <label className="block font-semibold text-slate-700 mb-1">Select Bank</label>
                    <select
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white outline-none"
                    >
                      <option value="State Bank of India (SBI)">State Bank of India (SBI)</option>
                      <option value="Federal Bank">Federal Bank</option>
                      <option value="South Indian Bank (SIB)">South Indian Bank (SIB)</option>
                      <option value="Canara Bank">Canara Bank</option>
                      <option value="Kerala Gramin Bank">Kerala Gramin Bank</option>
                      <option value="HDFC Bank">HDFC Bank</option>
                      <option value="ICICI Bank">ICICI Bank</option>
                    </select>
                  </div>
                )}

                {/* TAB CONTENT 4: WHATSAPP DIRECT */}
                {paymentMethod === 'whatsapp' && (
                  <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200 space-y-3 text-xs text-emerald-950">
                    <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      Direct WhatsApp Mentorship Payment
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      You can pay directly via Google Pay / PhonePe to <strong>+91 94470 00000</strong> (Joseph Josey) and send the screenshot on WhatsApp for instant batch activation.
                    </p>
                    <a
                      href={`https://wa.me/919447000000?text=Hi%20Joseph%20Sir%2C%20I%20want%20to%20enroll%20in%20the%20Kerala%20PSC%20Survey%20Master%20Course%20(Amount%3A%20INR%20${selectedPlan.price})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold shadow text-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Open WhatsApp Chat
                    </a>
                  </div>
                )}
              </div>

              {/* Secure guarantee badge */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit SSL Encrypted & Verified Kerala PSC Academy Checkout</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-semibold flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleProcessPayment}
                  className="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <span>Verifying Payment...</span>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Confirm & Pay ₹{selectedPlan.price}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: PAYMENT CONFIRMATION & RECEIPT */}
          {step === 3 && (
            <div className="space-y-5 animate-fadeIn text-center">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-extrabold text-slate-900">
                  Payment Successful & Enrollment Activated! 🎉
                </h4>
                <p className="text-xs text-slate-500">
                  Your student account is now fully active with full access to all lectures, mock tests, and notes.
                </p>
              </div>

              {/* Official Receipt Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-3 font-mono">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <div>
                    <div className="font-bold text-slate-900 font-sans text-sm">SurveyRank Kerala PSC Academy</div>
                    <div className="text-[10px] text-slate-500">Govt. Exam Technical Coaching • Idukki</div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                    PAID / VERIFIED
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700">
                  <div>Student: <span className="font-bold text-slate-900">{name}</span></div>
                  <div>District: <span className="font-bold text-slate-900">{district}</span></div>
                  <div>Transaction Ref: <span className="font-bold text-slate-900">{transactionId}</span></div>
                  <div>Date: <span className="font-bold text-slate-900">{new Date().toLocaleDateString()}</span></div>
                  <div>Course: <span className="font-bold text-slate-900">{selectedPlan.name}</span></div>
                  <div>Amount Paid: <span className="font-bold text-emerald-700">₹{selectedPlan.price}.00</span></div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-sans">
                  <span>Mentor: <strong>Joseph Josey (Course Director)</strong></span>
                  <span className="text-emerald-700 font-bold">Official Digital Receipt</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    window.print();
                  }}
                  className="px-4 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Receipt</span>
                </button>
                <button
                  type="button"
                  onClick={handleFinishEnrollment}
                  className="flex-1 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs shadow-md flex items-center justify-center gap-2 transition"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Go to My Dashboard & Start Learning</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
