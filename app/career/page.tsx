import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { careerTracks } from '../../services/careerData';
import { ArrowRight, Sparkles, TrendingUp, Award, CheckCircle2, GraduationCap, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing Career Transitions by Degree (2026) | Vocaplace',
  description: 'Explore high-paying digital marketing career roadmaps tailored for BBA, B.Com, B.Tech, BA, and BPO professionals. 100% Job Guarantee (₹4–8 LPA) under Pay After Placement.',
  alternates: {
    canonical: 'https://vocaplace.com/career',
  },
  openGraph: {
    title: 'Digital Marketing Career Transitions by Degree (2026) | Vocaplace',
    description: 'Transform your college degree into a ₹4.5–8.5 LPA digital marketing career. Explore custom 120-day roadmaps for BBA, B.Com, B.Tech, and working professionals.',
    url: 'https://vocaplace.com/career',
    type: 'website',
  },
};

export default function CareerHubPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Digital Marketing Career Transitions by Degree',
    description: 'Specialized 120-day digital marketing career roadmaps for BBA, B.Com, B.Tech, BA, and BPO professionals in India.',
    url: 'https://vocaplace.com/career',
    publisher: {
      '@type': 'Organization',
      name: 'Vocaplace',
      url: 'https://vocaplace.com',
    },
  };

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
        name: 'Career Transitions',
        item: 'https://vocaplace.com/career',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white py-16 md:py-20 px-6 border-b border-blue-900/50">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-800/60 border border-blue-700/60 text-amber-300 text-xs font-bold mb-6">
              <Sparkles size={14} className="text-amber-400" />
              <span>Specialized Degree Career Transition Hub · Class of 2026</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
              Turn Your College Degree into a <span className="text-amber-400">₹4.5–8.5 LPA</span> Digital Marketing Career
            </h1>
            
            <p className="text-base sm:text-lg text-blue-100/90 max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
              Whether you are trapped in low-paying campus sales, repetitive Tally accounting, mass-IT bench periods, or rotational BPO shifts—discover how your background translates directly into high-growth Performance Marketing in 120 days.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-blue-200">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-400" />
                Pay After Placement (ISA)
              </span>
              <span className="flex items-center gap-1.5">
                <Award size={16} className="text-amber-400" />
                100% Job Guarantee (₹4–8 LPA)
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap size={16} className="text-blue-300" />
                Mentorship by Wajed Sk (Victoria Univ)
              </span>
            </div>
          </div>
        </div>

        {/* Career Tracks Grid */}
        <div className="max-w-7xl mx-auto px-6 -mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerTracks.map((track) => (
              <div
                key={track.slug}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:border-blue-900/40"
              >
                <div className="p-6">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-900/10">
                      {track.degreeShort}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                      {track.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors leading-snug">
                    <Link href={`/career/${track.slug}`} className="hover:underline">
                      {track.degreeName}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 line-clamp-3">
                    {track.excerpt}
                  </p>

                  {/* Salary Metrics Comparison */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-4 space-y-2 text-xs">
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Typical Starting CTC:</span>
                      <span className="font-semibold text-slate-700">{track.averageCampusSalary}</span>
                    </div>
                    <div className="flex justify-between items-center text-blue-950 font-bold pt-1 border-t border-slate-200/60">
                      <span>Vocaplace Starting CTC:</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-extrabold text-[11px]">
                        {track.vocaplaceAverageSalary}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {track.readTime}
                  </span>
                  <Link
                    href={`/career/${track.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 group-hover:text-blue-700 transition-colors"
                  >
                    View 120-Day Roadmap
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Pay After Placement Protects Freshers */}
        <div className="max-w-5xl mx-auto px-6 mt-16">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-6 h-6 text-blue-900" />
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                Why Vocaplace's Outcome Model Beats Traditional Edtech
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Most classroom academies charge fresh graduates ₹50,000 to ₹1,20,000 in upfront fees or lock them into high-interest NBFC loans for theoretical slide decks. If the academy fails to place you, 100% of your money is forfeited.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-900/10">
                <span className="font-bold text-blue-950 block mb-1">1. Core Tuition 100% Deferred Until Placed</span>
                <p className="text-slate-600">Your core tuition is deferred until you sign a verified appointment letter paying ₹4–8 LPA.</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-900/10">
                <span className="font-bold text-blue-950 block mb-1">2. 100% Job Guarantee (₹4–8 LPA)</span>
                <p className="text-slate-600">If our placement drives do not secure you a qualifying job within 90 days, remaining tuition is waived.</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-900/10">
                <span className="font-bold text-blue-950 block mb-1">3. Live Ad Budgets Handled</span>
                <p className="text-slate-600">Manage real ad spend budgets on Google & Meta Ads instead of watching theoretical case studies.</p>
              </div>
            </div>

            <div className="mt-8 text-center pt-6 border-t border-slate-100">
              <Link
                href="/courses/digital-marketing-mastery"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors text-sm shadow-md"
              >
                Explore the 120-Day Digital Marketing Mastery Curriculum
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
