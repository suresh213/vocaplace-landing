import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Check, X, Star, ArrowRight, Award, GraduationCap, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kraftshala vs IIDE vs Vocaplace (2026): Fees, Placements & Real Reviews',
  description: 'Unbiased 2026 comparison of Kraftshala vs IIDE vs Vocaplace vs UpGrad. Compare course fees, placement guarantees, syllabus & ₹4–8 LPA salary outcomes.',
  alternates: { canonical: '/compare' },
  keywords: [
    'Kraftshala vs IIDE',
    'IIDE vs Kraftshala',
    'Kraftshala fees 2026',
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
    '@type': 'WebPage',
    name: 'Digital Marketing Course Comparison in India (2026)',
    description: 'Compare Vocaplace, Kraftshala, IIDE, and UpGrad on fees, placement guarantee, and curriculum.',
    url: 'https://vocaplace.com/compare',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which is better: IIDE, Kraftshala, or Vocaplace?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While Kraftshala charges ₹1,75,820 with upfront loan liabilities and IIDE charges ₹1,00,000 to ₹6,50,000+ with only placement assistance, Vocaplace offers 100% Pay After Placement with a legally backed 100% Job Guarantee (₹4–8 LPA) mentored directly by Victoria University Australia faculty Wajed Sk.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are Kraftshala course fees in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kraftshala Marketing Launchpad fees in 2026 are ₹1,49,000 + 18% GST (total ₹1,75,820). Their 8X Impact track requires 20% upfront payment with the remainder paid after landing a job above ₹4.5 LPA.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does UpGrad guarantee a digital marketing job placement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. UpGrad online digital marketing certificate courses provide career assistance and resume reviews, but they do NOT offer a guaranteed job placement. High packages (₹30L+) cited in search results refer strictly to on-campus full-time MICA MBA graduates.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Vocaplace Pay After Placement model work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At Vocaplace, you complete 120 days of live training, manage real ad budgets, and pay your core tuition in installments only after securing a full-time marketing job paying at least ₹4–8 LPA.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are IIDE course fees in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IIDE course fees in 2026 range from ₹1,00,000 to ₹1,65,000 + GST for online certifications, and ₹5,95,000 to ₹6,50,000+ for their Post Graduate Program in Digital Marketing. Unlike Vocaplace, IIDE requires upfront fee payments or bank loans and offers placement assistance rather than a guaranteed placement outcome.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are digital marketing course fees in India under Pay After Placement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under Vocaplace’s Pay After Placement digital marketing program in India, you enroll and train for 120 days with live project budgets, and pay your tuition in easy installments only after landing a verified job offer paying ₹4–8 LPA.',
        },
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
                  <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Payment Model & Liability</td>
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
              <h2 className="text-2xl font-bold text-slate-900 mb-4">IIDE vs Kraftshala vs Vocaplace: 2026 Comparison Breakdown</h2>
              <p className="mb-4">
                When choosing between <strong>IIDE, Kraftshala, and Vocaplace</strong>, the deciding factor comes down to <em>fee structure accountability</em> and <em>verifiable placement guarantees</em>:
              </p>
              <p className="mb-4 text-xs text-blue-900 font-semibold bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                Looking for syllabus module comparisons and student reviews? Read our complete <Link href="/blog/kraftshala-vs-vocaplace-vs-iide-digital-marketing-course-comparison" className="underline hover:text-blue-700">Kraftshala vs Vocaplace vs IIDE In-Depth Editorial Review</Link>.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Kraftshala (Marketing Launchpad):</strong> Charges <strong>₹1,49,000 + 18% GST (₹1,75,820)</strong>. While Kraftshala offers an 8X Impact model, students must pay 20% upfront (₹35,000+) and are locked into loan agreements unless their CTC falls below ₹4.5 LPA under strict fine-print conditions.</li>
                <li><strong>IIDE (Indian Institute of Digital Education):</strong> Charges <strong>₹1,00,000 to ₹1,50,000</strong> for online courses and upwards of <strong>₹6,45,000+</strong> for postgraduate degrees, with 100% upfront tuition and placement assistance only (no placement guarantee).</li>
                <li><strong>Vocaplace:</strong> Offers <strong>100% Pay After Placement</strong> with a legally backed <strong>100% Job Guarantee (₹4–8 LPA)</strong>. You pay your tuition in monthly installments only after receiving an official employment offer letter.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Kraftshala Fees Structure 2026: The ₹1,75,820 Reality</h2>
              <p className="mb-4">
                Students searching for <em>kraftshala fees</em> are often surprised by the total financial commitment. With GST, Kraftshala exceeds ₹1.75 Lakhs. If you take an NBFC loan with 24 to 36 months of EMIs, the interest increases your effective cost even further.
              </p>
              <p>
                Vocaplace eliminates education debt. Our incentive is 100% aligned with yours: we only get compensated when you succeed in the industry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">UpGrad Digital Marketing Course Review: Real Career Outcomes</h2>
              <p className="mb-4">
                UpGrad partners with MICA for online executive certificates priced at ₹1,10,000 to ₹1,50,000 + GST. While MICA has strong brand heritage, online certificate programs do <strong>not</strong> include campus placements. The widely advertised ₹30L+ placement packages apply solely to full-time, on-campus MBA students.
              </p>
              <p>
                At Vocaplace, all 120 days are dedicated to live campaign execution, client portfolios, and personalized interview pipelines across 100+ hiring partners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Live Faculty Matters: Victoria University Faculty vs Pre-recorded Videos</h2>
              <p className="mb-4">
                Many online bootcamps rely on pre-recorded video lectures recorded years ago, with teaching assistants handling queries. 
              </p>
              <p>
                At Vocaplace, your lead instructor is <strong>Wajed Sk</strong> — Online Faculty at Victoria University Australia, former Chief Digital Marketing Instructor at Unacademy, and corporate trainer who has guided 5,000+ students to successful placements.
              </p>
            </section>

            {/* Frequently Asked Questions */}
            <section className="pt-6 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="p-5 border border-slate-200 rounded-xl bg-slate-50/50">
                  <h3 className="font-bold text-slate-900 text-sm mb-2">Which is better: IIDE, Kraftshala, or Vocaplace?</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    While Kraftshala charges ₹1,75,820 with upfront loan liabilities and IIDE charges ₹1,00,000 to ₹6,50,000+ with only placement assistance, Vocaplace offers 100% Pay After Placement with a legally backed 100% Job Guarantee (₹4–8 LPA) mentored directly by Victoria University Australia faculty Wajed Sk.
                  </p>
                </div>
                <div className="p-5 border border-slate-200 rounded-xl bg-slate-50/50">
                  <h3 className="font-bold text-slate-900 text-sm mb-2">What are Kraftshala course fees in 2026?</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Kraftshala Marketing Launchpad fees in 2026 are ₹1,49,000 + 18% GST (total ₹1,75,820). Their 8X Impact track requires 20% upfront payment with the remainder paid after landing a job above ₹4.5 LPA.
                  </p>
                </div>
                <div className="p-5 border border-slate-200 rounded-xl bg-slate-50/50">
                  <h3 className="font-bold text-slate-900 text-sm mb-2">Does UpGrad guarantee a digital marketing job placement?</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    No. UpGrad online digital marketing certificate courses provide career assistance and resume reviews, but they do NOT offer a guaranteed job placement. High packages (₹30L+) cited in search results refer strictly to on-campus full-time MICA MBA graduates.
                  </p>
                </div>
                <div className="p-5 border border-slate-200 rounded-xl bg-slate-50/50">
                  <h3 className="font-bold text-slate-900 text-sm mb-2">How does Vocaplace Pay After Placement model work?</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    At Vocaplace, you complete 120 days of live training, manage real ad budgets, and pay your core tuition in installments only after securing a full-time marketing job paying at least ₹4–8 LPA.
                  </p>
                </div>
                <div className="p-5 border border-slate-200 rounded-xl bg-slate-50/50">
                  <h3 className="font-bold text-slate-900 text-sm mb-2">What are IIDE course fees in 2026?</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    IIDE course fees in 2026 range from ₹1,00,000 to ₹1,65,000 + GST for online certifications, and ₹5,95,000 to ₹6,50,000+ for their Post Graduate Program in Digital Marketing. Unlike Vocaplace, IIDE requires upfront fee payments or bank loans and offers placement assistance rather than a guaranteed placement outcome.
                  </p>
                </div>
                <div className="p-5 border border-slate-200 rounded-xl bg-slate-50/50">
                  <h3 className="font-bold text-slate-900 text-sm mb-2">What are digital marketing course fees in India under Pay After Placement?</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Vocaplace’s Pay After Placement digital marketing program in India, you enroll and train for 120 days with live project budgets, and pay your tuition in easy installments only after landing a verified job offer paying ₹4–8 LPA.
                  </p>
                </div>
              </div>
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
