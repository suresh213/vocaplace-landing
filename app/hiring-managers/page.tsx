import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Users, Briefcase, Building, Globe, Shield, Clock, TrendingUp, Star, DollarSign, BarChart3, HeadphonesIcon, FileCheck, Zap, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Pre-Trained Digital Marketing Talent | Vocaplace',
  description: 'Stop 3–6 months onboarding. Hire agency-trained, AI-skilled marketers who run campaigns independently from week one.',
  alternates: { canonical: '/hiring-managers' },
};

const HiringManagersPage: React.FC = () => {
 return (
 <div className="pt-24 pb-16 bg-white">
 {/* Hero Section */}
 <section className="px-6 max-w-7xl mx-auto mb-24">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <div className="flex items-center gap-3 mb-6">
 <Users className="w-5 h-5 text-slate-600"/>
 <span className="text-xs font-bold text-slate-500">For Team Leads & Managers</span>
 </div>
 <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
 Build Your Dream Team Faster
 </h1>
 <p className="text-slate-500 text-lg md:text-xl mb-8 max-w-xl">
 Stop wasting time on endless interviews and training. Get pre-vetted, job-ready marketers who can start growing your campaigns from week one.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <a href="#benefits"className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-blue-900 text-white font-bold hover:bg-blue-800 transition-colors border border-blue-900 whitespace-nowrap">
 How It Works
 <ArrowRight size={16} />
 </a>
 <Link href="/hire-talent"className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-transparent text-blue-900 border border-blue-900 font-bold hover:bg-blue-50/50 transition-colors whitespace-nowrap">
 Post Openings
 </Link>
 </div>
 </div>
 <div className="relative">
 <div className="absolute inset-0 bg-slate-100 transform translate-x-4 translate-y-4 border border-slate-200 -z-10"></div>
 <div className="bg-white border border-slate-200 p-8 md:p-12">
 <h3 className="text-lg font-bold text-slate-900 mb-6">ROI Comparison</h3>
 <div className="space-y-4">
 <div className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200">
 <span className="text-sm text-slate-600">Traditional Hiring Cost</span>
 <span className="font-bold text-slate-900">₹4,50,000</span>
 </div>
 <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200">
 <span className="text-sm text-green-700">Vocaplace Hiring Cost</span>
 <span className="font-bold text-green-700">₹1,80,000</span>
 </div>
 <div className="pt-4 border-t border-slate-200">
 <div className="flex justify-between items-center">
 <span className="text-sm text-slate-600">Your Savings</span>
 <span className="text-2xl font-bold text-green-600">₹2,70,000</span>
 </div>
 </div>
 </div>
 <p className="text-[10px] text-slate-500 mt-4">*Based on average hiring costs for mid-level growth marketers</p>
 </div>
 </div>
 </div>
 </section>

 {/* Pain Points */}
 <section className="px-6 max-w-7xl mx-auto mb-24">
 <div className="mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Hiring Struggle is Real</h2>
 <p className="text-slate-500 max-w-2xl text-lg">
 We understand the challenges you face when building marketing teams.
 </p>
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 { icon: Clock, title: 'Endless Interviews', desc: 'Spend weeks interviewing candidates who look good on paper but cannot deliver in practice.' },
 { icon: TrendingUp, title: 'Training Overhead', desc: 'New hires take 3-6 months to become productive. That is 6 months of investment with minimal returns.' },
 { icon: DollarSign, title: 'High Attrition', desc: 'Candidates leave within a year because their skills do not match industry standards.' },
 { icon: BarChart3, title: 'Skill Gaps', desc: 'Traditional graduates lack practical experience and cannot run campaigns independently.' },
 { icon: Shield, title: 'Quality Inconsistency', desc: 'No guarantee that hired talent can handle the complexity of your actual campaigns.' },
 { icon: HeadphonesIcon, title: 'Resource Drain', desc: 'Your senior marketers spend time mentoring instead of scaling campaigns.' }
 ].map((pain, idx) => (
 <div key={idx} className="p-6 border border-slate-200 bg-white hover:border-blue-900 transition-colors">
 <pain.icon className="w-8 h-8 text-blue-900 mb-4"/>
 <h3 className="font-bold text-slate-900 mb-2 text-sm">{pain.title}</h3>
 <p className="text-xs text-slate-500 leading-relaxed">{pain.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* How We Solve */}
 <section id="benefits"className="px-6 max-w-7xl mx-auto mb-24 bg-slate-50 py-16 border-y border-slate-200">
 <div className="mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Solve It</h2>
 <p className="text-slate-500 max-w-2xl text-lg">
 A complete solution designed for hiring managers who need results.
 </p>
 </div>
 <div className="grid md:grid-cols-2 gap-8">
 <div className="space-y-6">
 {[
 { title: 'Pre-Vetted Candidates', desc: 'Every candidate passes our rigorous 5-step screening: technical assessment, project review, communication test, problem-solving evaluation, and cultural fit analysis.' },
 { title: 'Real Project Experience', desc: 'Candidates have completed 10+ industry-level campaigns. They understand how to work in teams, follow best practices, and deliver on deadlines.' },
 { title: 'Latest Marketing Tools', desc: 'We continuously update our curriculum. Candidates know modern campaigns, tools, and methodologies used by top agencies.' }
 ].map((item, idx) => (
 <div key={idx} className="flex gap-4 p-6 bg-white border border-slate-200">
 <div className="w-10 h-10 bg-blue-900 flex items-center justify-center flex-shrink-0">
 <span className="text-white font-bold text-sm">{idx + 1}</span>
 </div>
 <div>
 <h3 className="font-bold text-slate-900 mb-2 text-sm">{item.title}</h3>
 <p className="text-xs text-slate-500">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 <div className="space-y-6">
 {[
 { title: 'Reduced Time to Productivity', desc: 'Our candidates need only 2-4 weeks to ramp up, compared to 3-6 months for fresh graduates.' },
 { title: 'Dedicated Account Manager', desc: 'Get a single point of contact who understands your requirements and finds the right matches.' },
 { title: '90-Day Replacement Guarantee', desc: 'If a hire does not work out within 90 days, we provide a replacement at no extra cost.' }
 ].map((item, idx) => (
 <div key={idx} className="flex gap-4 p-6 bg-white border border-slate-200">
 <div className="w-10 h-10 bg-green-600 flex items-center justify-center flex-shrink-0">
 <Check className="w-5 h-5 text-white"/>
 </div>
 <div>
 <h3 className="font-bold text-slate-900 mb-2 text-sm">{item.title}</h3>
 <p className="text-xs text-slate-500">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Candidate Quality */}
 <section className="px-6 max-w-7xl mx-auto mb-24">
 <div className="mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What You Get in Every Candidate</h2>
 <p className="text-slate-500 max-w-2xl text-lg">
 Every candidate comes with verified credentials and ready-to-deploy skills.
 </p>
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {[
 { icon: FileCheck, title: 'Verified Resume', desc: 'Background checked, education verified, employment history validated.' },
 { icon: Briefcase, title: 'Project Portfolio', desc: '10+ live campaigns with campaign samples, metrics, and documentation.' },
 { icon: Zap, title: 'Technical Certification', desc: 'Industry-recognized certifications from credible organizations.' },
 { icon: Users, title: 'Soft Skills', desc: 'Communication, teamwork, and problem-solving abilities assessed.' }
 ].map((item, idx) => (
 <div key={idx} className="p-6 border border-slate-200 bg-white hover:border-blue-900 transition-colors text-center">
 <item.icon className="w-10 h-10 text-blue-900 mx-auto mb-4"/>
 <h3 className="font-bold text-slate-900 mb-2 text-sm">{item.title}</h3>
 <p className="text-xs text-slate-500">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Team Impact */}
 <section className="px-6 max-w-7xl mx-auto mb-24 bg-slate-900 py-16">
 <div className="mb-12 text-center md:text-left md:px-8">
 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Impact on Your Team</h2>
 <p className="text-slate-400 max-w-2xl text-lg">
 How hiring from Vocaplace affects your team's productivity and dynamics.
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-6 md:px-8">
 {[
 { metric: '60%', label: 'Faster Onboarding', desc: 'Candidates become productive in weeks, not months.' },
 { metric: '40%', label: 'Less Training Cost', desc: 'Save on training budget and senior marketer time.' },
 { metric: '95%', label: 'Retention Rate', desc: 'Our candidates stay longer because they are well-prepared.' }
 ].map((impact, idx) => (
 <div key={idx} className="p-8 border border-slate-700 bg-slate-800 text-center">
 <div className="text-5xl font-bold text-green-500 mb-2">{impact.metric}</div>
 <h3 className="font-bold text-white mb-2 text-sm">{impact.label}</h3>
 <p className="text-xs text-slate-400">{impact.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Comparison */}
 <section className="px-6 max-w-7xl mx-auto mb-24">
 <div className="mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Traditional vs Vocaplace Hiring</h2>
 <p className="text-slate-500 max-w-2xl text-lg">
 See the difference in hiring outcomes.
 </p>
 </div>
 <div className="overflow-x-auto">
 <table className="w-full border border-slate-200 text-left">
 <thead>
 <tr className="bg-slate-50">
 <th className="p-4 border-b border-slate-200">
 <span className="text-xs font-bold text-slate-500">Criteria</span>
 </th>
 <th className="p-4 border-b border-slate-200">
 <span className="text-xs font-bold text-slate-500">Traditional Hiring</span>
 </th>
 <th className="p-4 border-b border-slate-200 bg-green-50">
 <span className="text-xs font-bold text-green-700">Vocaplace Hiring</span>
 </th>
 </tr>
 </thead>
 <tbody>
 {[
 { criteria: 'Time to Hire', traditional: '4-8 weeks', vocaplace: '1-2 weeks' },
 { criteria: 'Time to Productivity', traditional: '3-6 months', vocaplace: '2-4 weeks' },
 { criteria: 'Training Required', traditional: 'Significant', vocaplace: 'Minimal' },
 { criteria: 'Skill Verification', traditional: 'Self-reported', vocaplace: 'Tested & Verified' },
 { criteria: 'Project Experience', traditional: 'Academic only', vocaplace: '10+ Industry Projects' },
 { criteria: 'Retention Guarantee', traditional: 'None', vocaplace: '90-day replacement' },
 { criteria: 'Cost Efficiency', traditional: 'High (hidden costs)', vocaplace: 'Transparent pricing' }
 ].map((row, idx) => (
 <tr key={idx} className="border-b border-slate-200">
 <td className="p-4">
 <span className="font-bold text-slate-900 text-sm">{row.criteria}</span>
 </td>
 <td className="p-4">
 <span className="text-slate-500 text-xs">{row.traditional}</span>
 </td>
 <td className="p-4 bg-green-50">
 <span className="text-green-700 text-xs font-bold">{row.vocaplace}</span>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 {/* CTA */}
 <section className="px-6 max-w-3xl mx-auto mb-12">
 <div className="bg-blue-900 p-8 text-center">
 <h2 className="text-xl font-bold text-white mb-3">Ready to Build Your Team?</h2>
 <p className="text-slate-200 mb-6 text-sm max-w-md mx-auto">
 Join 100+ companies who have hired talented marketers through Vocaplace.
 </p>
 <div className="flex flex-col sm:flex-row justify-center gap-3">
 <Link href="/hire-talent"className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-white text-blue-900 text-sm font-medium hover:bg-slate-100 transition-colors whitespace-nowrap">
 Post Openings
 <ArrowRight size={14} />
 </Link>
 <Link href="/contact"className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-transparent text-white text-sm font-medium hover:bg-white/10 transition-colors border border-white/30 whitespace-nowrap">
 Schedule Demo
 </Link>
 </div>
 </div>
 </section>
 </div>
 );
};

export default HiringManagersPage;
