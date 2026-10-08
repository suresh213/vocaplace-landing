"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CareerTrack } from '../services/careerData';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Calendar, 
  Clock, 
  Briefcase, 
  ChevronRight,
  GraduationCap,
  Building,
  DollarSign
} from 'lucide-react';

interface CareerDetailClientProps {
  track: CareerTrack;
}

export default function CareerDetailClient({ track }: CareerDetailClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/career" className="hover:text-blue-900 transition-colors">Career Transitions</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-600 font-medium truncate">{track.degreeShort} to Digital Marketing</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-14 md:py-18 px-6 border-b border-blue-900/60">
        <div className="max-w-5xl mx-auto">
          {/* Degree Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider bg-blue-800 text-amber-300 border border-blue-700">
              {track.degreeShort} Career Guide
            </span>
            <span className="text-xs text-blue-200 font-semibold flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-400" />
              {track.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {track.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-3xl mb-8">
            {track.heroSubheadline}
          </p>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-blue-800/80 max-w-3xl">
            <div className="bg-blue-900/40 p-4 rounded-xl border border-blue-800">
              <span className="text-[11px] text-blue-300 block font-semibold mb-1">Campus Average CTC</span>
              <span className="text-base sm:text-lg font-bold text-slate-200">{track.averageCampusSalary}</span>
            </div>
            <div className="bg-blue-900/40 p-4 rounded-xl border border-blue-800">
              <span className="text-[11px] text-amber-300 block font-semibold mb-1">Vocaplace Placement CTC</span>
              <span className="text-base sm:text-lg font-extrabold text-amber-400">{track.vocaplaceAverageSalary}</span>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-blue-900/40 p-4 rounded-xl border border-blue-800">
              <span className="text-[11px] text-blue-300 block font-semibold mb-1">Year 3 Salary Potential</span>
              <span className="text-base sm:text-lg font-bold text-emerald-300">{track.salaryCeiling3Years}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://student.vocaplace.com"
              rel="nofollow noopener noreferrer"
              className="h-13 px-8 bg-amber-400 text-blue-950 text-sm font-bold flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors rounded-xl shadow-lg shadow-amber-400/20"
            >
              Apply via Pay After Placement
              <ArrowRight size={16} />
            </a>
            <Link
              href="/contact"
              className="h-13 px-6 bg-white/10 border border-white/20 text-white text-sm font-semibold flex items-center justify-center hover:bg-white/20 transition-colors rounded-xl"
            >
              Book Free 60-Min Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Author & Freshness Bar */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-4 border-b border-slate-100 mb-8 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <img
              src={track.author.avatar}
              alt={track.author.name}
              className="w-6 h-6 rounded-full object-cover border border-slate-200"
            />
            <span className="font-semibold text-slate-800">By {track.author.name}</span>
            <span className="text-slate-400">({track.author.role})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Updated for 2026</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{track.readTime}</span>
          </div>
          <div className="ml-auto">
            <a
              href={`/career/${track.slug}/raw`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-slate-200 text-slate-500 hover:text-blue-900 hover:border-blue-900 transition-colors"
              title="View plain Markdown version for LLM citation"
            >
              .md
            </a>
          </div>
        </div>

        {/* Quick Summary / Key Takeaways Box (GEO LLM Extractor) */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-50/90 to-slate-50 border-l-4 border-blue-900 rounded-r-2xl shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-950">
              Quick Summary &amp; Key Takeaways for {track.degreeShort} Graduates
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed font-medium mb-4">
            {track.excerpt}
          </p>
          <div className="pt-3 border-t border-blue-100 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-600 font-medium">
            <span>⚡ Model: <strong className="text-blue-950 font-bold">Pay After Placement (ISA)</strong></span>
            <span>🎯 Placement Guarantee: <strong className="text-blue-950 font-bold">100% (₹4–8 LPA)</strong></span>
            <span>👨‍🏫 Lead Faculty: <strong className="text-blue-950 font-bold">Wajed Sk (Victoria Univ Australia)</strong></span>
          </div>
        </div>

        {/* Section 1: Why This Degree Struggles */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {track.whyThisDegreeStruggles.title}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {track.whyThisDegreeStruggles.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {track.whyThisDegreeStruggles.painPoints.map((point, index) => (
              <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs shrink-0 mt-0.5">
                  !
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Salary Comparison Table */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            {track.degreeShort} Career Options vs Digital Marketing: Salary Comparison (2026)
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Real compensation benchmarks in the Indian job market across traditional roles vs specialized growth marketing.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-xs uppercase tracking-wider">Career Track</th>
                  <th className="px-4 py-3 text-xs uppercase tracking-wider">Typical Entry Role</th>
                  <th className="px-4 py-3 text-xs uppercase tracking-wider">Starting CTC</th>
                  <th className="px-4 py-3 text-xs uppercase tracking-wider">Year 3 CTC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {track.salaryComparisonTable.map((row, idx) => {
                  const isVocaplace = row.careerPath.includes('Vocaplace');
                  return (
                    <tr key={idx} className={isVocaplace ? 'bg-blue-50/60 font-semibold' : 'hover:bg-slate-50/50'}>
                      <td className="px-4 py-3.5 text-slate-800">
                        {row.careerPath}
                        {isVocaplace && (
                          <span className="ml-2 inline-block px-2 py-0.5 text-[10px] bg-emerald-100 text-emerald-800 rounded font-bold">
                            Top Choice
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-slate-600">{row.typicalRole}</td>
                      <td className="px-4 py-3.5 font-bold text-slate-900">{row.startingSalary}</td>
                      <td className="px-4 py-3.5 font-bold text-emerald-700">{row.year3Salary}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Transferrable Skills Advantage */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Why {track.degreeShort} Graduates Have an Unfair Advantage in Digital Marketing
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            You do not start from zero. Here is how your academic background directly fuels performance marketing success:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {track.transferrableSkills.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 font-bold flex items-center justify-center text-sm mb-3">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">
                    {item.skill}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.howItApplies}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] text-blue-900 font-semibold">
                  🎯 Advantage: {item.advantage}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 120-Day Tailored Curriculum Roadmap */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            120-Day Digital Marketing Roadmap for {track.degreeShort} Freshers
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            A structured, 4-month transition roadmap designed to take you from fundamentals to live ad management and guaranteed placement.
          </p>

          <div className="space-y-4">
            {track.customRoadmap.map((phase, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-slate-900">
                    {phase.phase}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-100 text-blue-900">
                    {phase.weeks}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium mb-4">
                  {phase.focus}
                </p>
                <div className="space-y-2">
                  {phase.keyDeliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Mentor Feature (Wajed Sk) */}
        <section className="mb-14 p-8 rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/mentor.jpeg"
              alt="Wajed Sk Lead Mentor"
              className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border-2 border-amber-400 shrink-0"
            />
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-800 text-amber-300 text-[11px] font-bold mb-2">
                <Award size={13} />
                Global Faculty Mentorship
              </div>
              <h3 className="text-xl font-bold mb-2">Learn Directly from Wajed Sk</h3>
              <p className="text-xs text-blue-100/90 leading-relaxed mb-4">
                Online Faculty at Victoria University Australia (Sydney Campus) and former Chief Digital Marketing Instructor at Unacademy (trained 20,000+ students). You learn live campaign execution directly from industry leadership, not recorded junior slide readers.
              </p>
              <Link
                href="/mentor/wajed"
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                View Full Mentor Profile &amp; Experience →
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive FAQ Accordion */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: {track.degreeShort} to Digital Marketing
          </h2>
          <div className="space-y-3">
            {track.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 text-sm">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Card */}
        <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-950 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to Transition from {track.degreeShort} into a ₹4.5–8.5 LPA Career?
          </h3>
          <p className="text-sm text-blue-200 max-w-xl mx-auto mb-6">
            Join 5,000+ graduates who transformed their careers. Pay core tuition only after receiving your official job offer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://student.vocaplace.com"
              rel="nofollow noopener noreferrer"
              className="h-14 px-8 bg-amber-400 text-blue-950 text-sm font-bold flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors rounded-xl"
            >
              Enroll Now (Pay After Placement)
              <ArrowRight size={16} />
            </a>
            <Link
              href="/courses/digital-marketing-mastery"
              className="h-14 px-8 bg-white/10 border border-white/20 text-white text-sm font-semibold flex items-center justify-center hover:bg-white/20 transition-colors rounded-xl"
            >
              View Full Course Curriculum
            </Link>
          </div>
          <p className="text-xs text-blue-300 mt-4">
            Next cohort starts Monday · Limited seats per batch · 100% Job Guarantee
          </p>
        </div>
      </div>
    </div>
  );
}
