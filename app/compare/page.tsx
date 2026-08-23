import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Check, X, Star, ArrowRight, Award, GraduationCap, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kraftshala vs Vocaplace vs IIDE vs UpGrad: Best Course Comparison (2026)',
  description: 'Unbiased 2026 comparison of India\'s top digital marketing courses. Compare Kraftshala, Vocaplace, IIDE, and UpGrad fees, placement guarantees, and average salaries.',
  alternates: { canonical: '/compare' },
  keywords: [
    'Kraftshala alternatives',
    'Kraftshala vs Vocaplace',
    'IIDE vs Vocaplace',
    'UpGrad digital marketing review',
    'pay after placement digital marketing course India',
    'best digital marketing course with placement guarantee'
  ],
};

export default function ComparePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vocaplace.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Course Comparison',
        item: 'https://vocaplace.com/compare',
      },
    ],
  };

  const comparisonJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Table',
    about: 'Digital Marketing Course Comparison in India (2026)',
  };

  const competitors = [
    {
      name: 'Vocaplace',
      badge: 'Recommended',
      fee: 'Pay After Placement (ISA)',
      upfront: '₹0 Until Offer Letter',
      guarantee: '100% Job Guarantee (₹4–8 LPA)',
      duration: '120 Days (4 Months)',
      faculty: 'Wajed Sk (Victoria Univ Faculty)',
      ai: 'Deep (ChatGPT, Gemini, Zapier)',
      avgSalary: '₹6.5 LPA',
      liveProjects: 'Real Ad Spend Budgets',
      isHero: true,
    },
    {
      name: 'Kraftshala',
      badge: 'Marketing Launchpad',
      fee: '₹1,49,000 + GST (₹1.75L)',
      upfront: 'Full Loan / 20% on 8X Track',
      guarantee: 'Partial Refund if < ₹4.5 LPA',
      duration: '16–20 Weeks',
      faculty: 'Industry Practitioners',
      ai: 'Partial Overview',
      avgSalary: '₹5.5 LPA',
      liveProjects: 'Simulated Projects',
      isHero: false,
    },
    {
      name: 'IIDE',
      badge: 'Postgraduate / Online',
      fee: '₹1,00,000 to ₹6,50,000+',
      upfront: '100% Upfront Tuition',
      guarantee: 'Placement Assistance Only',
      duration: '4 to 11 Months',
      faculty: 'Agency Guest Faculty',
      ai: 'Traditional Modules',
      avgSalary: '₹4.0 LPA',
      liveProjects: 'Classroom Case Studies',
      isHero: false,
    },
    {
      name: 'UpGrad',
      badge: 'University Certificate',
      fee: '₹1,10,000 to ₹1,50,000 + GST',
      upfront: '100% Upfront / Bank EMI',
      guarantee: 'No Placement Guarantee',
      duration: '6 to 11 Months',
      faculty: 'Pre-recorded + TAs',
      ai: 'Basic Modules',
      avgSalary: 'Not Guaranteed',
      liveProjects: 'Quizzes & Assignments',
      isHero: false,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonJsonLd) }}
      />

      <div className="pt-28 pb-20 bg-white min-h-[90vh]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded-full mb-3">
              2026 Institute Evaluation Guide
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              Kraftshala vs Vocaplace vs IIDE vs UpGrad
            </h1>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Don&apos;t spend ₹1 Lakh+ upfront without comparing real placement models. Here is an honest, data-backed breakdown of fees, job guarantees, and salary outcomes in India.
            </p>
          </div>

          {/* Comparison Table for Desktop */}
          <div className="hidden lg:block overflow-x-auto border border-slate-200 rounded-2xl shadow-sm mb-16">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-5 font-bold text-slate-900 w-1/5">Key Criteria</th>
                  {competitors.map((c, i) => (
                    <th key={i} className={`p-5 font-bold ${c.isHero ? 'bg-blue-900 text-white text-sm' : 'text-slate-900'}`}>
                      <div className="flex items-center justify-between">
                        <span>{c.name}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${c.isHero ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-700'}`}>
                          {c.badge}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Fee Model</td>
                  {competitors.map((c, i) => (
                    <td key={i} className={`p-5 ${c.isHero ? 'bg-blue-50/40 font-bold text-blue-950' : ''}`}>
                      {c.fee}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Upfront Financial Risk</td>
                  {competitors.map((c, i) => (
                    <td key={i} className={`p-5 ${c.isHero ? 'bg-blue-50/40 font-bold text-green-700' : 'text-slate-600'}`}>
                      {c.upfront}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Placement Commitment</td>
                  {competitors.map((c, i) => (
                    <td key={i} className={`p-5 ${c.isHero ? 'bg-blue-50/40 font-bold text-green-700' : ''}`}>
                      {c.guarantee}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Average Placement Package</td>
                  {competitors.map((c, i) => (
                    <td key={i} className={`p-5 ${c.isHero ? 'bg-blue-50/40 font-bold text-blue-900 text-sm' : ''}`}>
                      {c.avgSalary}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Program Duration</td>
                  {competitors.map((c, i) => (
                    <td key={i} className={`p-5 ${c.isHero ? 'bg-blue-50/40 font-medium' : ''}`}>
                      {c.duration}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Lead Faculty</td>
                  {competitors.map((c, i) => (
                    <td key={i} className={`p-5 ${c.isHero ? 'bg-blue-50/40 font-bold text-slate-900' : ''}`}>
                      {c.faculty}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-5 font-bold text-slate-900 bg-slate-50/50">AI Automation Integration</td>
                  {competitors.map((c, i) => (
                    <td key={i} className={`p-5 ${c.isHero ? 'bg-blue-50/40 font-bold text-blue-900' : ''}`}>
                      {c.ai}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Live Ad Spending Projects</td>
                  {competitors.map((c, i) => (
                    <td key={i} className={`p-5 ${c.isHero ? 'bg-blue-50/40 font-bold text-green-700' : ''}`}>
                      {c.liveProjects}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards for Competitor Breakdown */}
          <div className="lg:hidden space-y-6 mb-16">
            {competitors.map((c, i) => (
              <div 
                key={i} 
                className={`p-6 rounded-2xl border ${c.isHero ? 'border-blue-900 bg-blue-50/20 shadow-md' : 'border-slate-200 bg-white'}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{c.name}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${c.isHero ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700'}`}>
                    {c.badge}
                  </span>
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <p><strong className="text-slate-900">Fee:</strong> {c.fee}</p>
                  <p><strong className="text-slate-900">Guarantee:</strong> {c.guarantee}</p>
                  <p><strong className="text-slate-900">Avg Salary:</strong> {c.avgSalary}</p>
                  <p><strong className="text-slate-900">Duration:</strong> {c.duration}</p>
                  <p><strong className="text-slate-900">Faculty:</strong> {c.faculty}</p>
                  <p><strong className="text-slate-900">AI Modules:</strong> {c.ai}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Deep Dive Section */}
          <div className="max-w-4xl mx-auto space-y-12 text-sm leading-relaxed text-slate-600">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. The Reality of Course Fees in India</h2>
              <p className="mb-4">
                Traditional institutes like Kraftshala (₹1,75,820 with GST), IIDE (₹1,00,000+), and UpGrad (₹1,10,000+) place 100% of the financial risk on the student. If hiring slows down or you struggle in interviews, you remain burdened with bank loans.
              </p>
              <p>
                <strong>Vocaplace eliminates this risk completely.</strong> You learn in live interactive cohorts for 120 days and pay tuition only after you secure an offer letter of ₹4–8 LPA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Why Live Faculty Matters (Victoria University Faculty vs Pre-recorded Videos)</h2>
              <p className="mb-4">
                Many online bootcamps rely on pre-recorded video lectures recorded in 2021, with teaching assistants handling queries. 
              </p>
              <p>
                At Vocaplace, your lead instructor is <strong>Wajed Sk</strong> — Online Faculty at Victoria University Australia, former Unacademy Chief Instructor, and corporate trainer who has guided 5,000+ students to successful placements.
              </p>
            </section>

            {/* High-Converting CTA Box */}
            <div className="p-8 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white rounded-2xl shadow-xl text-center">
              <span className="inline-block px-3 py-1 bg-amber-400 text-slate-950 text-xs font-bold rounded-full mb-4">
                Next Cohort Starting Soon
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
                Experience India&apos;s #1 Pay After Placement Bootcamp
              </h3>
              <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto mb-8">
                Join our 120-day intensive cohort with a 100% Job Guarantee. Pay your tuition only after landing a ₹4–8 LPA marketing job.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors"
                >
                  Apply for Next Batch (Pay After Placement) →
                </Link>
                <Link
                  href="/courses/digital-marketing-mastery"
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-colors"
                >
                  View 120-Day Curriculum
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
