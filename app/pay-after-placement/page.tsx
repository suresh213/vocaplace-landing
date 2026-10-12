import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, CheckCircle2, ArrowRight, Star, Award, 
  HelpCircle, ChevronDown, Check, X, Sparkles, Building2,
  Users, TrendingUp, DollarSign, Laptop, Clock
} from 'lucide-react';
import ApplyNowButton from '../../components/ApplyNowButton';
import IsaCalculator from '../../components/IsaCalculator';

export const metadata: Metadata = {
  title: 'Pay After Placement Digital Marketing Course India | 100% Job Guarantee | Vocaplace',
  description: 'Learn SEO, Google Ads, Meta Ads & AI workflows in a 120-day incubator. Pay tuition in installments only after securing a ₹4–8 LPA job. 100% Job Guarantee.',
  alternates: {
    canonical: '/pay-after-placement',
  },
  keywords: [
    'pay after placement digital marketing course',
    'pay after placement digital marketing',
    'digital marketing course pay after placement',
    'pay after placement digital marketing course in india',
    'income share agreement digital marketing course',
    'digital marketing course with 100 placement guarantee',
    'best pay after placement digital marketing institute',
    'digital marketing course with job guarantee',
    'digital marketing course fees pay after placement',
    'is pay after placement digital marketing real or fake'
  ],
  openGraph: {
    title: 'Pay After Placement Digital Marketing Course India | Vocaplace',
    description: '120-Day live performance marketing cohort with 100% Job Guarantee. Pay core tuition only after landing a ₹4–8 LPA package.',
    url: 'https://vocaplace.com/pay-after-placement',
    type: 'website',
    images: [{ url: '/logo.jpeg', width: 1200, height: 1200, alt: 'Vocaplace Pay After Placement Digital Marketing' }],
  },
};

export default function PayAfterPlacementPage() {
  const faqData = [
    {
      q: "What is a Pay After Placement (PAP) digital marketing course and how does it work?",
      a: "A Pay After Placement (PAP) digital marketing course is an outcome-based educational program where students learn full-stack digital marketing and defer their core tuition until they successfully secure an employment offer. At Vocaplace, students undergo 120 days of intensive live training covering SEO, Google Ads, Meta Ads, and AI Automation under Victoria University faculty Wajed Sk. You only begin repaying the tuition in predictable, affordable monthly installments after you receive an offer letter of at least ₹4.0–8.0 LPA and your first month's salary is credited to your bank account."
    },
    {
      q: "What happens if I don't get placed after completing the course? Do I still have to pay?",
      a: "If you attend all scheduled sessions, submit assignments, and participate in interview drives but do not secure a verified job offer paying at least ₹4.0 LPA within 90 days of graduation, your core tuition obligation is ₹0. Our contractual 100% Job Guarantee ensures that Vocaplace bears the financial risk. We do not lock you into third-party non-banking financial company (NBFC) bank loans that require repayment regardless of your employment status."
    },
    {
      q: "What is the minimum salary (CTC) threshold before tuition repayment begins?",
      a: "The minimum placement threshold is contractually set at ₹4.0 LPA (with average batch placements at ₹6.5 LPA and top packages reaching ₹8.5 LPA). If a student receives an offer below ₹4.0 LPA or an unpaid internship, the Income Share Agreement is not triggered. Only verified, full-time corporate employment matching or exceeding ₹4.0 LPA qualifies for repayment."
    },
    {
      q: "Is Pay After Placement in digital marketing real or a scam/marketing gimmick?",
      a: "Pay After Placement is a completely legitimate, legally binding educational model (known globally as an Income Share Agreement or ISA). While some disreputable institutes disguise high-interest bank loans as 'Pay After Placement', Vocaplace operates with strict transparency: zero third-party loan lock-ins, a contractually guaranteed ₹4.0 LPA minimum threshold, and direct live mentorship under recognized university faculty with 20+ years of industry leadership."
    },
    {
      q: "How does Vocaplace compare to Kraftshala's ₹1,75,820 course fee?",
      a: "Kraftshala's Marketing Launchpad charges ₹1,49,000 + 18% GST (totaling ₹1,75,820), and their 8X Impact track requires a 20% upfront payment (approx. ₹35,000) or upfront NBFC loan financing. In contrast, Vocaplace defers your core tuition entirely until placement. You pay nothing in tuition upfront, saving over ₹1,20,000 in immediate capital risk while receiving live mentorship and 100% job placement accountability."
    },
    {
      q: "Are there any hidden NBFC loans, interest rates, or penalties involved?",
      a: "No. Unlike legacy edtech providers who register students for third-party bank loans disguised as 'ISAs' that damage credit scores if delayed, Vocaplace manages its outcome contracts directly. There are no hidden compound interest fees, no bank debt obligations, and no repayment triggers unless you are successfully placed in a role paying ₹4–8 LPA."
    },
    {
      q: "Who is eligible for the Pay After Placement digital marketing program?",
      a: "The program is open to all college graduates (BBA, B.Com, B.Tech, BA, B.Sc, BCA), final-year college students, and working professionals (including customer support, sales, and BPO professionals looking to transition into marketing). Applicants complete a short 15-minute aptitude screening assessment and an admissions interview to confirm dedication and analytical readiness."
    },
    {
      q: "What is the difference between 'Placement Assistance' and '100% Placement Guarantee'?",
      a: "'Placement Assistance' (offered by institutes like IIDE, UpGrad, or Coursera) merely forwards your CV to job boards or hosts uncommitted networking webinars with zero legal obligation to get you hired. A '100% Placement Guarantee' (offered by Vocaplace) is a contractual outcome commitment: the institute guarantees you receive qualifying job offers, or your tuition is completely waived."
    },
    {
      q: "How much starting salary can freshers realistically earn in digital marketing in 2026?",
      a: "In 2026, generalist marketers earn ₹2.5–3.5 LPA, while performance marketers trained in live ad spend, conversion rate optimization, GA4, and AI automation command starting packages of ₹4.5 LPA to ₹7.5 LPA in top agencies and high-growth brands. Graduates with 2 to 3 years of performance marketing experience routinely scale to ₹10–14 LPA."
    },
    {
      q: "Can working professionals or college students attend live classes?",
      a: "Yes. Vocaplace offers flexible evening cohorts (8:00 PM – 10:00 PM IST) and dedicated weekend interactive workshops. All live interactive sessions are recorded and uploaded to your student portal with lifetime access, allowing students to balance college or existing jobs while completing the 120-day incubator."
    }
  ];

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Pay After Placement Digital Marketing Mastery Incubator',
    description: '120-Day outcome-driven career incubator in India. Master SEO, Google Ads, Meta Advantage+ Campaigns, GA4 and AI Workflows. 100% Job Guarantee (₹4–8 LPA). Core tuition deferred until placed.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Vocaplace',
      url: 'https://vocaplace.com',
      logo: 'https://vocaplace.com/logo.webp'
    },
    educationalCredentialAwarded: 'Vocaplace Certified Digital Marketing & Performance Specialist',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Blended',
      courseWorkload: 'PT120D',
      instructor: {
        '@type': 'Person',
        name: 'Wajed Sk',
        jobTitle: 'Lead Mentor & Faculty',
        affiliation: 'Victoria University Australia'
      }
    },
    offers: {
      '@type': 'Offer',
      category: 'Income Share Agreement / Pay After Placement',
      price: '0',
      priceCurrency: 'INR',
      description: 'Tuition is deferred until you secure a job paying ₹4.0–8.0 LPA.'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
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
        name: 'Pay After Placement',
        item: 'https://vocaplace.com/pay-after-placement',
      },
    ],
  };

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-800/80 border border-blue-600/60 rounded-full text-amber-300 text-xs font-bold mb-6">
            <Sparkles size={14} className="text-amber-400" />
            <span>India's #1 Outcome-Driven Digital Marketing Incubator</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
            Pay After Placement<br />
            <span className="text-amber-400">Digital Marketing Course</span> in India
          </h1>

          {/* AI Citability Direct Definition Block (GEO Optimized) */}
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-left mb-8 shadow-xl">
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              <strong>Vocaplace's Pay After Placement Digital Marketing Course</strong> is an intensive 120-day career incubator where students learn live performance marketing, Google Ads, Meta Ads, SEO, and AI automation under Victoria University faculty <strong>Wajed Sk</strong>. Under our outcome-linked model, core tuition is 100% deferred until you secure a verified corporate offer letter paying <strong>₹4.0 to ₹8.0 LPA</strong>. If you are not placed within 90 days of graduation, you owe ₹0 in tuition fees.
            </p>
          </div>

          {/* Key Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10 text-center">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
              <div className="text-2xl font-black text-amber-400">₹4–8 LPA</div>
              <div className="text-[11px] text-blue-200 mt-0.5">Guaranteed CTC</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
              <div className="text-2xl font-black text-white">120 Days</div>
              <div className="text-[11px] text-blue-200 mt-0.5">Live Cohort</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
              <div className="text-2xl font-black text-emerald-400">₹0 Tuition</div>
              <div className="text-[11px] text-blue-200 mt-0.5">Until You Are Placed</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
              <div className="text-2xl font-black text-white">94%</div>
              <div className="text-[11px] text-blue-200 mt-0.5">Placement Success</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ApplyNowButton
              source="Pay After Placement Hero CTA"
              className="w-full sm:w-auto h-14 px-8 bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl cursor-pointer"
            >
              Apply for Next Cohort (Pay After Placement)
              <ArrowRight size={16} />
            </ApplyNowButton>
            <a
              href="#calculator"
              className="w-full sm:w-auto h-14 px-8 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-xl flex items-center justify-center transition-all cursor-pointer"
            >
              Calculate Your ROI
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-emerald-400" />
              100% Contractual Job Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-400" />
              No Third-Party Bank Loans
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-400" />
              Real Ad Budgets Managed
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section id="calculator" className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <IsaCalculator />
        </div>
      </section>

      {/* Step-by-Step Model Breakdown */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Transparent 4-Stage Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              How Pay After Placement Works at Vocaplace
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              From day one to your first salary slip, we invest in your success before receiving tuition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Screening & Enrollment',
                desc: 'Take a short 15-minute aptitude screening. Secure your seat with a refundable commitment token and start live training without tuition debt.',
                icon: Laptop
              },
              {
                step: '02',
                title: '120-Day Live Training',
                desc: 'Execute real Meta & Google ad campaigns with real ad budgets. Learn generative AI workflows, SEO, and GA4 tracking directly from Wajed Sk.',
                icon: Clock
              },
              {
                step: '03',
                title: 'Placement Drives',
                desc: 'Access our network of 200+ partner agencies and high-growth brands. Complete mock interviews and interview for ₹4.0–8.5 LPA roles.',
                icon: Building2
              },
              {
                step: '04',
                title: 'Income-Linked Repayment',
                desc: 'Once placed and your first month salary is credited, pay tuition in predictable monthly installments. If not placed, you pay ₹0.',
                icon: DollarSign
              }
            ].map((st, i) => (
              <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl relative flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-black text-blue-900/20 mb-3">{st.step}</div>
                  <st.icon className="w-8 h-8 text-blue-900 mb-3" />
                  <h3 className="font-bold text-slate-900 text-base mb-2">{st.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head-to-Head Competitor Comparison Table */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-white px-3.5 py-1 rounded-full border border-slate-200">
              Unbiased Industry Benchmark
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Vocaplace vs Competitor Digital Marketing Institutes
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Compare actual fees, refund terms, and placement models across top digital marketing institutes in India.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-4 font-bold">Comparison Metric</th>
                  <th className="p-4 font-bold bg-blue-900 text-amber-300">Vocaplace (PAP)</th>
                  <th className="p-4 font-bold">Kraftshala (8X)</th>
                  <th className="p-4 font-bold">IIDE (PG Program)</th>
                  <th className="p-4 font-bold">UpGrad (MICA Certificate)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-bold text-slate-800">Tuition Payment Model</td>
                  <td className="p-4 font-bold text-emerald-700 bg-blue-50/50">Pay After Placement (ISA)</td>
                  <td className="p-4 text-slate-600">₹35k upfront + Salary Share</td>
                  <td className="p-4 text-slate-600">100% Upfront Tuition</td>
                  <td className="p-4 text-slate-600">100% Upfront Tuition</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Total Course Fee</td>
                  <td className="p-4 font-bold text-blue-900 bg-blue-50/50">Fixed Deferred Installments</td>
                  <td className="p-4 text-slate-600">₹1,75,820 (with GST)</td>
                  <td className="p-4 text-slate-600">₹1,65,000 to ₹6,50,000</td>
                  <td className="p-4 text-slate-600">₹1,15,000 to ₹1,50,000</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Contractual Placement Guarantee</td>
                  <td className="p-4 font-bold text-emerald-700 bg-blue-50/50">100% Guaranteed (₹4–8 LPA)</td>
                  <td className="p-4 text-slate-600">Conditional Refund Policy</td>
                  <td className="p-4 text-red-500 font-semibold">No Guarantee (Assistance Only)</td>
                  <td className="p-4 text-red-500 font-semibold">No Guarantee (Assistance Only)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Third-Party NBFC Loan Risk</td>
                  <td className="p-4 font-bold text-emerald-700 bg-blue-50/50">Zero Loan Contracts</td>
                  <td className="p-4 text-amber-700">NBFC Financed Loan</td>
                  <td className="p-4 text-amber-700">Bank Education Loan</td>
                  <td className="p-4 text-amber-700">Bank Education Loan</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Live Ad Budget Experience</td>
                  <td className="p-4 font-bold text-blue-900 bg-blue-50/50">Included (Real Money Managed)</td>
                  <td className="p-4 text-slate-600">Group Projects</td>
                  <td className="p-4 text-slate-600">Theoretical Slide Case Studies</td>
                  <td className="p-4 text-slate-600">Recorded Videos</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-800">Lead Faculty</td>
                  <td className="p-4 font-bold text-blue-900 bg-blue-50/50">Wajed Sk (Victoria Univ Australia)</td>
                  <td className="p-4 text-slate-600">Corporate Trainers</td>
                  <td className="p-4 text-slate-600">Agency Guest Speakers</td>
                  <td className="p-4 text-slate-600">Pre-Recorded Lecturers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comprehensive User-Searched FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
              Clear Answers to Real Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Pay After Placement Digital Marketing FAQs
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Every detail regarding fees, legal agreements, eligibility, and salary outcomes answered honestly.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl p-6 bg-slate-50/40 hover:bg-white hover:border-blue-900/30 transition-all shadow-sm"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 flex items-start gap-3">
                  <span className="text-blue-900 font-black">Q{idx + 1}.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-amber-400 text-blue-950 text-xs font-bold rounded-md mb-4">
            Next Cohort Starts Monday
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Launch Your ₹4–8 LPA Digital Marketing Career?
          </h2>
          <p className="text-blue-200 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Join hundreds of students who transformed their careers with deferred tuition peace of mind. 100% Job Guarantee backed by legal agreement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ApplyNowButton
              source="Pay After Placement Bottom Banner"
              className="w-full sm:w-auto h-14 px-8 bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl"
            >
              Apply Now — Pay After Placement
              <ArrowRight size={16} />
            </ApplyNowButton>
            <Link
              href="/contact"
              className="w-full sm:w-auto h-14 px-8 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-xl flex items-center justify-center transition-all"
            >
              Book 1-on-1 Counseling Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
