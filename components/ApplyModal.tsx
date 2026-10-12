"use client";

import React, { useState, useEffect } from 'react';
import { useApplyModal } from './ApplyModalContext';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Loader2, Sparkles, GraduationCap } from 'lucide-react';

export default function ApplyModal() {
  const { isOpen, closeModal, options } = useApplyModal();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    degree: 'BBA',
    city: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update default degree when modal opens with specific track options
  useEffect(() => {
    if (options.defaultDegree) {
      setFormData((prev) => ({ ...prev, degree: options.defaultDegree || 'BBA' }));
    }
    if (isOpen) {
      setIsSuccess(false);
      setErrorMessage('');
    }
  }, [isOpen, options.defaultDegree]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/lead/student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: options.source || (typeof window !== 'undefined' ? window.location.pathname : 'Website Modal'),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        degree: 'BBA',
        city: '',
      });
    } catch (err: unknown) {
      console.error(err);
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white p-6 sm:p-7 relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-800 text-amber-300 text-xs font-bold mb-2.5 border border-blue-700">
            <Sparkles size={13} className="text-amber-400" />
            <span>Pay After Placement (ISA) · Class of 2026</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
            Apply for 120-Day Digital Marketing Incubator
          </h2>
          <p className="text-xs sm:text-sm text-blue-200 mt-1.5">
            100% Job Guarantee (₹4–8 LPA) · Core tuition deferred until placed
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Application Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for applying. Our senior admissions counselor will connect with you on WhatsApp within <strong>2 hours</strong> with the complete syllabus and demo schedule.
              </p>
              <div className="pt-4">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-blue-900 text-white text-sm font-bold rounded-xl hover:bg-blue-800 transition-colors"
                >
                  Close &amp; Continue Browsing
                </button>
              </div>
            </div>
          ) : (
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
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Degree / Background <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.degree}
                    onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                    className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all"
                  >
                    <option value="BBA">BBA Graduate / Student</option>
                    <option value="B.Com">B.Com / Finance Student</option>
                    <option value="B.Tech">B.Tech / BE Engineering</option>
                    <option value="BPO / Support">BPO / Customer Support Professional</option>
                    <option value="BA / Arts">BA / Humanities Graduate</option>
                    <option value="Working Professional">Working Professional (Non-Marketing)</option>
                    <option value="Other">Other Graduate / Final Year</option>
                  </select>
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

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-13 bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin text-blue-950" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application (Pay After Placement)
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>

              {/* Trust Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  Core Tuition Deferred
                </span>
                <span>·</span>
                <span>₹4–8 LPA Placement Guarantee</span>
                <span>·</span>
                <span>Live Evening Classes</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
