import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  BookOpen, CheckCircle2, Download, Printer, ArrowRight, 
  Sparkles, Award, ShieldCheck, Clock, Users, Laptop, Briefcase, 
  Search, Megaphone, Globe, BarChart3, Bot, Compass
} from 'lucide-react';
import ApplyNowButton from '../../components/ApplyNowButton';
import InlineLeadForm from '../../components/InlineLeadForm';

export const metadata: Metadata = {
  title: '120-Day Digital Marketing Syllabus & Curriculum Guide | Vocaplace',
  description: 'Download the comprehensive 120-day syllabus for Vocaplace Pay After Placement Digital Marketing Course. Master SEO, Google Ads, Meta Ads, GA4 & AI Automation with a 100% Job Guarantee.',
  alternates: {
    canonical: '/syllabus',
  },
  keywords: [
    'digital marketing syllabus',
    'pay after placement digital marketing curriculum',
    'digital marketing course syllabus pdf',
    'performance marketing syllabus india',
    'AI digital marketing course modules',
    'vocaplace syllabus'
  ],
  openGraph: {
    title: '120-Day Digital Marketing Syllabus & Curriculum Guide | Vocaplace',
    description: 'Master SEO, Google Ads, Meta Ads & AI Automation in 120 days. Pay tuition only after securing a ₹4–8 LPA package.',
    url: 'https://vocaplace.com/syllabus',
    type: 'article',
    images: [{ url: '/logo.jpeg', width: 1200, height: 1200, alt: 'Vocaplace 120-Day Digital Marketing Syllabus' }],
  },
};

export default function SyllabusPage() {
  const modules = [
    {
      num: "Module 01",
      duration: "Weeks 1 - 2",
      title: "Marketing Foundations & Consumer Psychology",
      icon: Compass,
      color: "bg-blue-50 text-blue-900 border-blue-200",
      description: "Understand core marketing principles, positioning, user personas, TAM analysis, and full-funnel customer journeys (TOFU, MOFU, BOFU).",
      topics: [
        "Digital marketing landscape and performance career tracks in 2026",
        "Target audience identification, buyer personas, and customer empathy mapping",
        "Unit economics: CAC, LTV, ROAS, conversion funnels, and retention loops",
        "Competitor intelligence & reverse engineering ad strategies",
      ],
      tools: ["SimilarWeb", "Meta Ad Library", "Miro", "Notion"],
      outcome: "Build an executive-ready Go-To-Market (GTM) strategy for a real brand."
    },
    {
      num: "Module 02",
      duration: "Weeks 3 - 5",
      title: "Search Engine Optimization (SEO) & AI Overviews",
      icon: Search,
      color: "bg-emerald-50 text-emerald-900 border-emerald-200",
      description: "Rank organically on Google first-page results. Master technical crawls, semantic content architecture, programmatic SEO, and AI Search Optimization (GEO).",
      topics: [
        "Advanced keyword research: intent clustering, search volume vs difficulty",
        "Technical SEO: Core Web Vitals, crawl budgets, robots.txt, and XML sitemaps",
        "On-page optimization: semantic HTML, title tags, schema markup (JSON-LD)",
        "Generative Engine Optimization (GEO): ranking in ChatGPT, Perplexity & Google AI Overviews",
        "White-hat link building: digital PR, guest editorial, and broken link reclaiming",
      ],
      tools: ["Google Search Console", "Ahrefs", "Semrush", "Screaming Frog", "Schema Builder"],
      outcome: "Publish an optimized pillar cluster that ranks on Google top 10 within 30 days."
    },
    {
      num: "Module 03",
      duration: "Weeks 6 - 8",
      title: "Google Ads & Performance Max Mastery",
      icon: Megaphone,
      color: "bg-amber-50 text-amber-900 border-amber-200",
      description: "Manage high-intent paid search campaigns with real ad spend. Master Performance Max, YouTube Ads, and Shopping feeds.",
      topics: [
        "Google Ads auction mechanics, Quality Score factors, and Ad Rank formulas",
        "High-converting Search campaigns: keyword match types, negative lists & ad copy",
        "Performance Max (PMax) setups: asset groups, audience signals, and product feeds",
        "YouTube In-Stream and bumper video ad funnels for consideration & leads",
        "Smart bidding algorithms: Target CPA, Target ROAS, and Value Bidding",
      ],
      tools: ["Google Ads Manager", "Google Keyword Planner", "Google Merchant Center", "Looker Studio"],
      outcome: "Deploy a live Google Ads campaign with profitable ROAS on verified budgets."
    },
    {
      num: "Module 04",
      duration: "Weeks 9 - 10",
      title: "Meta Ads (Facebook, Instagram & Advantage+)",
      icon: Globe,
      color: "bg-purple-50 text-purple-900 border-purple-200",
      description: "Scale paid acquisition on Instagram and Facebook using Meta Advantage+ shopping campaigns, creative testing frameworks, and custom audiences.",
      topics: [
        "Meta Business Manager architecture, Pixel installation, and Conversion API (CAPI)",
        "High-converting creative formats: UGC videos, carousel carousels, and motion graphics",
        "Meta Advantage+ campaigns: automated audience targeting and catalog sales",
        "Custom & Lookalike audiences, retention retargeting, and churn prevention",
        "Creative testing methodologies: finding winning ad hooks and script angles",
      ],
      tools: ["Meta Ads Manager", "Canva Pro", "CapCut", "Meta Events Manager"],
      outcome: "Run live Meta ad campaigns achieving sub-₹15 CPL and 3.5x+ ROAS."
    },
    {
      num: "Module 05",
      duration: "Weeks 11 - 12",
      title: "Web Analytics, GA4 & Attribution Science",
      icon: BarChart3,
      color: "bg-indigo-50 text-indigo-900 border-indigo-200",
      description: "Transform raw website traffic into actionable commercial insights. Configure custom events, conversion funnels, and multi-touch attribution.",
      topics: [
        "Google Analytics 4 (GA4) setup: data streams, custom dimensions, and user properties",
        "Google Tag Manager (GTM): triggers, variables, data layer pushes, and e-commerce events",
        "Multi-touch attribution models: First click vs Last click vs Data-driven attribution",
        "Conversion Rate Optimization (CRO): heatmaps, drop-off audits, and landing page A/B tests",
        "Building interactive executive dashboards in Google Looker Studio",
      ],
      tools: ["Google Analytics 4", "Google Tag Manager", "Microsoft Clarity", "Looker Studio"],
      outcome: "Build end-to-end tracking dashboards showing true ROI across all marketing channels."
    },
    {
      num: "Module 06",
      duration: "Weeks 13 - 14",
      title: "AI Marketing Automation & Agentic Workflows",
      icon: Bot,
      color: "bg-teal-50 text-teal-900 border-teal-200",
      description: "Supercharge your productivity by 10x using Generative AI tools and automated pipelines. Create content, generate reports, and trigger lead sequences automatically.",
      topics: [
        "Prompt engineering for marketers: Claude, ChatGPT & Gemini for ad copy and SEO briefs",
        "AI visual production: Midjourney, Canva AI, and Runway for high-converting creatives",
        "No-code automation: connecting lead forms to CRM via Zapier and Make",
        "Automated email marketing sequences: drip nurture, abandoned carts, and onboarding loops",
        "Introduction to Python / scripts for bulk SEO data extraction and SERP monitoring",
      ],
      tools: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Make.com", "Zapier", "Brevo / Klaviyo"],
      outcome: "Build an automated marketing engine that captures, enriches, and nurtures leads automatically."
    },
    {
      num: "Module 07",
      duration: "Week 15",
      title: "Live Agency Capstone & Portfolio Execution",
      icon: Award,
      color: "bg-rose-50 text-rose-900 border-rose-200",
      description: "Execute a comprehensive 360-degree marketing campaign for an actual partner company or your own incubator venture.",
      topics: [
        "Audit existing client assets: SEO health, ad account history, and tracking audit",
        "Draft complete quarterly marketing budget, channel mix, and revenue targets",
        "Run live campaigns with real ad spend and real-time optimization sprints",
        "Assemble documented case study featuring before-and-after conversion metrics",
      ],
      tools: ["All Tool Stacks", "Presentation Deck", "Case Study Portfolio"],
      outcome: "A battle-tested digital marketing portfolio with verifiable ROAS figures to show hiring managers."
    },
    {
      num: "Module 08",
      duration: "Week 16",
      title: "Placement Launchpad & Guaranteed Interview Drives",
      icon: Briefcase,
      color: "bg-sky-50 text-sky-900 border-sky-200",
      description: "Direct transition into your high-paying marketing career. Resume building, LinkedIn optimization, 1-on-1 mock interviews, and partner hiring drives.",
      topics: [
        "Resume crafting tailored to pass corporate Applicant Tracking Systems (ATS)",
        "LinkedIn profile makeover to attract inbound recruiter outreach",
        "1-on-1 technical mock interviews covering live case studies and assignment rounds",
        "Salary negotiation tactics: securing top packages between ₹4.0 LPA and ₹8.5 LPA",
        "Direct interviews with our 200+ agency & brand hiring partners",
      ],
      tools: ["LinkedIn Recruiter Portal", "Mock Interview AI", "Partner Job Board"],
      outcome: "Secure verified offer letters from top digital marketing agencies or D2C brands."
    }
  ];

  const toolsList = [
    "Google Search Console", "Google Ads", "Meta Ads Manager", "Google Analytics 4",
    "Google Tag Manager", "Ahrefs", "Semrush", "Screaming Frog", "Looker Studio",
    "Canva Pro", "ChatGPT", "Claude AI", "Zapier", "Make.com", "SimilarWeb", "Microsoft Clarity"
  ];

  const syllabusSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: '120-Day Digital Marketing Incubator Curriculum',
    description: 'Comprehensive 120-day syllabus covering SEO, Google Ads, Meta Ads, GA4, AI Automation and Agency Capstones. Pay After Placement model with 100% Job Guarantee.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Vocaplace',
      url: 'https://vocaplace.com',
      logo: 'https://vocaplace.com/logo.webp'
    },
    courseWorkload: 'PT120D',
    educationalCredentialAwarded: 'Vocaplace Certified Digital Marketing & Performance Specialist'
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(syllabusSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white py-14 px-6 border-b border-blue-800">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/80 border border-blue-700 text-amber-300 text-xs font-bold mb-4">
            <BookOpen size={14} className="text-amber-400" />
            <span>Updated for 2026 Industry Hiring Standards</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            120-Day Digital Marketing <br className="hidden sm:inline" />
            <span className="text-amber-400">Curriculum &amp; Syllabus Guide</span>
          </h1>

          <p className="text-blue-100 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            Master full-stack performance marketing, Google &amp; Meta ad spend, technical SEO, and generative AI workflows under Victoria University faculty Wajed Sk. Pay tuition only after securing your ₹4–8 LPA offer letter.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-sm max-w-4xl">
            <div>
              <div className="text-xl sm:text-2xl font-black text-amber-400">120 Days</div>
              <div className="text-xs text-blue-200">16 Weeks Intensive Cohort</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400">100% Job</div>
              <div className="text-xs text-blue-200">Placement Guarantee (₹4–8 LPA)</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white">Flat ₹50,000</div>
              <div className="text-xs text-blue-200">Tuition Deferred Until Placed</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-amber-300">20+ Tools</div>
              <div className="text-xs text-blue-200">Real Ad Spend Budgets</div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <ApplyNowButton 
              source="Syllabus Page Top Banner"
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold rounded-xl text-sm flex items-center gap-2 shadow-lg cursor-pointer"
            >
              Apply for Next Cohort
              <ArrowRight size={16} />
            </ApplyNowButton>
            <Link
              href="/pay-after-placement"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl text-sm flex items-center gap-2 transition-colors"
            >
              Learn How Pay After Placement Works
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Overview Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Curriculum Philosophy: Outcome-Driven &amp; Live Practice
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            Unlike theoretical university courses or generic video library subscriptions, the Vocaplace 120-Day Incubator operates like a real marketing agency. Students manage real Google &amp; Meta ad budgets, build live SEO campaigns on staging domains, and automate real marketing pipelines using AI agents.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase">Live Evening Classes</h3>
                <p className="text-xs text-slate-500 mt-0.5">8:00 PM to 10:00 PM IST with recordings for college &amp; working pros.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase">1-on-1 Mentorship</h3>
                <p className="text-xs text-slate-500 mt-0.5">Weekly feedback on live ad campaigns directly with faculty.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase">Flat ₹50k Fee</h3>
                <p className="text-xs text-slate-500 mt-0.5">No 15%–20% salary cut traps. Pay a transparent flat fee once placed.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Breakdown */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Detailed Week-by-Week Syllabus
            </h2>
            <span className="text-xs font-bold text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
              8 Comprehensive Modules
            </span>
          </div>

          <div className="space-y-6">
            {modules.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-blue-300 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${m.color}`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold text-blue-900">{m.num}</span>
                          <span className="text-slate-300">·</span>
                          <span className="text-xs font-semibold text-slate-500">{m.duration}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {m.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {m.description}
                  </p>

                  {/* Topics list */}
                  <div className="mb-5 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      Key Topics Covered:
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600">
                      {m.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools & Outcome */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-400 mr-1">Tools:</span>
                      {m.tools.map((tool, i) => (
                        <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md text-[11px] font-medium border border-slate-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                      🎯 Outcome: {m.outcome}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools Stack Section */}
        <div className="mt-14 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800">
          <div className="max-w-3xl">
            <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">Industry Tool Stack</div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Tools &amp; Software You Will Master</h2>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Companies do not hire based on textbook theory. They hire candidates who already know how to operate enterprise ad platforms, web analytics tools, and AI automation engines without needing 6 months of hand-holding.
            </p>
            <div className="flex flex-wrap gap-2">
              {toolsList.map((tool, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-semibold text-white transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Lead Capture Form Section */}
        <div className="mt-14">
          <InlineLeadForm
            title="Reserve Your Seat for the Upcoming Cohort"
            subtitle="Batches are restricted to 30 students to maintain 1-on-1 faculty attention. Core tuition deferred until placed."
            source="Syllabus Page Bottom Form"
            ctaText="Apply with Pay After Placement"
          />
        </div>

      </div>
    </div>
  );
}
