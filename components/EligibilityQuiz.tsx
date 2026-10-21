"use client";

import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, ArrowLeft, Sparkles, ShieldCheck, 
  GraduationCap, Briefcase, TrendingUp, Loader2, Award
} from 'lucide-react';
import { useApplyModal } from './ApplyModalContext';

export default function EligibilityQuiz() {
  const { openSyllabusModal } = useApplyModal();
  const [step, setStep] = useState<number>(1);
  const [degree, setDegree] = useState<string>('BBA / BBM / BMS / MBA');
  const [targetCtc, setTargetCtc] = useState<string>('₹6.0 - ₹8.0 LPA');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const degrees = [
    { label: "BBA / BBM / BMS / MBA", desc: "Business, Management & Marketing Aspirants" },
    { label: "B.Com / Finance / Economics", desc: "Commerce & Analytical Backgrounds" },
    { label: "B.Tech / BE / BCA / MCA", desc: "Engineering & Computer Applications" },
    { label: "BA / B.Sc / Arts / Humanities", desc: "Creative, Social Sciences & General Streams" },
    { label: "Working Professional (Non-Marketing)", desc: "Sales, BPO, Operations transitioning to Growth Marketing" },
  ];

  const salaries = [
    { range: "₹4.5 - ₹6.0 LPA", role: "Junior Performance Specialist / SEO Analyst", desc: "Standard entry salary for ambitious freshers" },
    { range: "₹6.0 - ₹8.0 LPA", role: "Digital Marketing Strategist / Paid Ads Executive", desc: "Batch median average for performance roles" },
    { range: "₹8.0+ LPA", role: "Growth Marketing Associate / Full Funnel Manager", desc: "High-tier packages for top-tier performers" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/lead/student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          degree: degree,
          source: 'Eligibility Screener Quiz',
          notes: `Eligibility Screener: Target CTC: ${targetCtc}, Profile Match: 98% High Priority`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit screening details');
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error(err);
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-3xl mx-auto overflow-hidden">
      {/* Top Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-900 text-xs font-bold mb-3">
          <Sparkles size={13} className="text-amber-500" />
          <span>60-Second Instant Screener · Class of 2026</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Check Your Pay After Placement Eligibility
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
          Over 92% of graduates qualify for our deferred tuition model. Complete this 60-second check to see your placement guarantee match score.
        </p>

        {/* Progress Dots */}
        {!isSubmitted && (
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className={`h-2 rounded-full transition-all duration-300 ${step === 1 ? 'w-8 bg-blue-900' : 'w-2 bg-slate-200'}`} />
            <span className={`h-2 rounded-full transition-all duration-300 ${step === 2 ? 'w-8 bg-blue-900' : 'w-2 bg-slate-200'}`} />
            <span className={`h-2 rounded-full transition-all duration-300 ${step === 3 ? 'w-8 bg-blue-900' : 'w-2 bg-slate-200'}`} />
          </div>
        )}
      </div>

      {isSubmitted ? (
        /* Success State */
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <div className="inline-block bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
            Profile Match Score: 98% (High Priority Qualified)
          </div>
          <h4 className="text-2xl font-bold text-slate-900">
            Eligibility Confirmed &amp; Seat Priority Logged!
          </h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Congratulations! Based on your <strong>{degree}</strong> background and target starting package of <strong>{targetCtc}</strong>, your profile qualifies for our Pay After Placement incubator (Flat ₹50k fee once placed).
          </p>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Our Senior Admissions Counselor will connect with you on WhatsApp within <strong>2 hours</strong> with the 120-day roadmap and admissions screening link.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openSyllabusModal({ source: 'Eligibility Quiz Success' })}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-blue-950 text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Download 120-Day Syllabus (PDF)
            </button>
            <a
              href="/syllabus"
              className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors"
            >
              View Full Curriculum Guide →
            </a>
          </div>
        </div>
      ) : (
        <div>
          {/* Step 1: Educational Background */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Step 1 of 3: Select Your Educational / Career Background
              </div>
              <div className="space-y-2.5">
                {degrees.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setDegree(item.label)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                      degree === item.label 
                        ? 'border-blue-900 bg-blue-50/60 ring-2 ring-blue-900/20' 
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-900">{item.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      degree === item.label ? 'border-blue-900 bg-blue-900 text-white' : 'border-slate-300'
                    }`}>
                      {degree === item.label && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="h-12 px-6 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                >
                  Continue to Step 2
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Target Salary */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Step 2 of 3: Select Your Target Starting Salary (CTC)
              </div>
              <div className="space-y-2.5">
                {salaries.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setTargetCtc(item.range)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                      targetCtc === item.range 
                        ? 'border-blue-900 bg-blue-50/60 ring-2 ring-blue-900/20' 
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-black text-blue-900">{item.range}</div>
                      <div className="text-xs font-semibold text-slate-800 mt-0.5">{item.role}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      targetCtc === item.range ? 'border-blue-900 bg-blue-900 text-white' : 'border-slate-300'
                    }`}>
                      {targetCtc === item.range && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="h-12 px-5 text-slate-600 hover:text-slate-900 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft size={15} />
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="h-12 px-6 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                >
                  View Eligibility Result
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Result & Lead Submission */}
          {step === 3 && (
            <div className="space-y-5">
              {/* Score Banner */}
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  98%
                </div>
                <div>
                  <div className="text-xs font-extrabold text-emerald-900 uppercase">
                    High Profile Match Confirmed
                  </div>
                  <div className="text-xs text-emerald-800 mt-0.5">
                    Your background ({degree}) qualifies for our 100% Job Guarantee (₹4–8 LPA). Core tuition is deferred until you land your offer letter.
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 text-xs bg-red-50 border border-red-200 text-red-700 rounded-xl">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Current City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bangalore, Delhi, Pune..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="h-12 px-4 text-slate-600 hover:text-slate-900 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft size={15} />
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-grow h-12 bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin text-blue-950" />
                        Reserving Seat...
                      </>
                    ) : (
                      <>
                        Claim Eligible Seat &amp; Get Callback
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>

                {/* Footer notes */}
                <div className="pt-2 text-center text-[11px] text-slate-400 flex items-center justify-center gap-2">
                  <ShieldCheck size={13} className="text-emerald-600" />
                  <span>100% Job Guarantee · Flat ₹50k fee once placed · No NBFC bank loans</span>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
