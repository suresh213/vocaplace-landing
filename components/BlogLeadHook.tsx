"use client";

import React, { useState } from 'react';
import { Sparkles, ShieldCheck, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { useApplyModal } from './ApplyModalContext';

interface BlogLeadHookProps {
  postTitle?: string;
  className?: string;
}

export default function BlogLeadHook({ postTitle, className = '' }: BlogLeadHookProps) {
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
          source: postTitle ? `Blog Inline: ${postTitle}` : 'Blog Inline Lead Form',
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
    <div className={`my-10 p-6 sm:p-8 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white rounded-2xl shadow-xl border border-blue-800/80 ${className}`}>
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-800 text-amber-300 text-xs font-bold rounded-md mb-3 border border-blue-700">
          <Sparkles size={13} className="text-amber-400" />
          <span>Pay After Placement (ISA) · 100% Job Guarantee (₹4–8 LPA)</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug">
          Want a High-Paying Digital Marketing Career in 120 Days?
        </h3>
        <p className="text-xs sm:text-sm text-blue-200 mb-6 leading-relaxed">
          Skip recorded slide videos. Learn live performance ads, AI workflows, and SEO directly under Victoria University faculty <strong>Wajed Sk</strong>. Core tuition is deferred until you land a job.
        </p>

        {isSuccess ? (
          <div className="p-5 bg-blue-900/60 border border-emerald-400/40 rounded-xl text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle2 size={18} />
              <span>Application Received!</span>
            </div>
            <p className="text-xs text-blue-100">
              Our senior admissions team will connect with you on WhatsApp within <strong>2 hours</strong> with batch dates and the detailed curriculum.
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
                className="h-11 px-3.5 bg-blue-900/50 border border-blue-700/80 text-white placeholder-blue-300 text-xs rounded-xl focus:bg-blue-950 focus:outline-none focus:border-amber-400 transition-all"
              />

              <input
                type="tel"
                required
                placeholder="WhatsApp Number *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-11 px-3.5 bg-blue-900/50 border border-blue-700/80 text-white placeholder-blue-300 text-xs rounded-xl focus:bg-blue-950 focus:outline-none focus:border-amber-400 transition-all"
              />

              <select
                value={formData.degree}
                onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                className="h-11 px-3 bg-blue-900/50 border border-blue-700/80 text-white text-xs rounded-xl focus:bg-blue-950 focus:outline-none focus:border-amber-400 transition-all"
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
                className="w-full sm:w-auto h-11 px-6 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 cursor-pointer shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Apply (Pay After Placement)
                    <ArrowRight size={14} />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => openModal({ source: postTitle ? `Blog Modal: ${postTitle}` : 'Blog Lead Hook' })}
                className="text-xs text-blue-200 hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Or open full application form →
              </button>
            </div>

            <div className="pt-2 flex items-center gap-4 text-[10px] text-blue-300">
              <span className="flex items-center gap-1">
                <ShieldCheck size={12} className="text-emerald-400" />
                Core Tuition Deferred
              </span>
              <span>·</span>
              <span>100% Job Guarantee (₹4–8 LPA)</span>
              <span>·</span>
              <span>Next Cohort Starts Monday</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
