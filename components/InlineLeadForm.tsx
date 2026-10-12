"use client";

import React, { useState } from 'react';
import { Sparkles, ShieldCheck, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { useApplyModal } from './ApplyModalContext';

interface InlineLeadFormProps {
  title?: string;
  subtitle?: string;
  source?: string;
  ctaText?: string;
  className?: string;
}

export default function InlineLeadForm({
  title = "Apply for India's #1 Pay After Placement Incubator",
  subtitle = "Learn live performance marketing, AI automation, and SEO directly under Victoria University faculty Wajed Sk. Core tuition is deferred until you land a ₹4–8 LPA job.",
  source = "Inline Lead Form",
  ctaText = "Apply (Pay After Placement)",
  className = "",
}: InlineLeadFormProps) {
  const { openModal } = useApplyModal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    degree: 'BBA',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/lead/student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: source,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }

      setIsSuccess(true);
      setFormData({ name: '', phone: '', degree: 'BBA' });
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`p-6 sm:p-8 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white rounded-2xl shadow-xl border border-blue-900/60 ${className}`}>
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-900/60 text-amber-300 text-xs font-bold rounded-md mb-3 border border-blue-700/60">
          <Sparkles size={13} className="text-amber-400" />
          <span>Pay After Placement (ISA) · 100% Job Guarantee (₹4–8 LPA)</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          {subtitle}
        </p>

        {isSuccess ? (
          <div className="p-5 bg-blue-900/60 border border-emerald-400/40 rounded-xl text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle2 size={18} />
              <span>Application Received!</span>
            </div>
            <p className="text-xs text-blue-100">
              Our senior admissions counselor will connect with you on WhatsApp within <strong>2 hours</strong> with upcoming cohort dates and syllabus.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {errorMsg && (
              <div className="p-2.5 text-xs bg-red-900/60 border border-red-500/50 text-red-200 rounded-lg">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                required
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-11 px-3.5 bg-slate-900/80 border border-slate-700 text-white placeholder-slate-400 text-xs rounded-xl focus:bg-slate-950 focus:outline-none focus:border-amber-400 transition-all"
              />

              <input
                type="tel"
                required
                placeholder="WhatsApp Number *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-11 px-3.5 bg-slate-900/80 border border-slate-700 text-white placeholder-slate-400 text-xs rounded-xl focus:bg-slate-950 focus:outline-none focus:border-amber-400 transition-all"
              />

              <select
                value={formData.degree}
                onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                className="h-11 px-3 bg-slate-900/80 border border-slate-700 text-white text-xs rounded-xl focus:bg-slate-950 focus:outline-none focus:border-amber-400 transition-all"
              >
                <option value="BBA" className="bg-slate-900 text-white">BBA Graduate / Student</option>
                <option value="B.Com" className="bg-slate-900 text-white">B.Com / Finance Student</option>
                <option value="B.Tech" className="bg-slate-900 text-white">B.Tech / Engineering</option>
                <option value="BPO / Support" className="bg-slate-900 text-white">BPO / Working Professional</option>
                <option value="BA / Arts" className="bg-slate-900 text-white">BA / Humanities Graduate</option>
                <option value="Other" className="bg-slate-900 text-white">Other Graduate / Final Year</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto h-11 px-6 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 cursor-pointer shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    {ctaText}
                    <ArrowRight size={14} />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => openModal({ source: `${source} - Modal Link` })}
                className="text-xs text-slate-400 hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Or open full modal form →
              </button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck size={12} className="text-emerald-400" />
                Core Tuition Deferred
              </span>
              <span>·</span>
              <span>100% Job Guarantee (₹4–8 LPA)</span>
              <span>·</span>
              <span>100+ Hiring Partners</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
