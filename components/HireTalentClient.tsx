"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ArrowRight, Users, Briefcase, Building, Shield, Clock, TrendingUp, Star, CheckCircle, Loader2 } from 'lucide-react';

const HireTalentPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    role: '',
    numPositions: '1',
    skills: '',
    contactName: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/lead/hr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Hire Talent Page - Requirement Form',
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit requirement. Please try again.');
      }

      setIsSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

 return (
 <div className="bg-white">

 {/* Hero */}
 <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-32 pb-20 px-6">
 <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-blue-100 text-sm font-semibold rounded-full mb-5">
 For Companies & Agencies
 </span>
 <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
 Hire Digital Marketing<br />
 <span className="text-amber-400">Talent That's Ready</span><br />
 From Day One.
 </h1>
 <p className="text-blue-200 text-lg mb-8 max-w-xl leading-relaxed">
 Skip the 3-month training ramp-up. Our graduates have already worked on real campaigns and know exactly what agencies need. Deliver results from week one.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <a href="#hiring-form"className="h-14 px-8 bg-amber-400 text-blue-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors text-base">
 Submit Hiring Requirement
 <ArrowRight size={18} />
 </a>
 <Link href="/hiring-managers"className="h-14 px-8 bg-white/10 border border-white/30 text-white font-semibold rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
 For Hiring Managers
 </Link>
 </div>
 </div>
 <div className="grid grid-cols-2 gap-4">
 {[
 { icon: Users, value: '1,000+', label: 'Marketers Available', color: 'bg-white/10 border-white/20' },
 { icon: Building, value: '100+', label: 'Hiring Partners', color: 'bg-amber-400/10 border-amber-400/20' },
 { icon: Clock, value: '48 hrs', label: 'Avg Response Time', color: 'bg-white/10 border-white/20' },
 { icon: TrendingUp, value: '94%', label: 'Placement Success', color: 'bg-green-400/10 border-green-400/20' },
 ].map((stat, i) => (
 <div key={i} className={`border ${stat.color} rounded-2xl p-5 text-center`}>
 <stat.icon size={24} className="text-white mx-auto mb-2 opacity-80"/>
 <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
 <div className="text-blue-200 text-xs">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Why hire from us */}
 <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
 <div className="max-w-6xl mx-auto">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-bold text-slate-900 mb-3">Why 100+ Companies Trust Vocaplace</h2>
 <p className="text-slate-500 text-lg">Our graduates are trained on real campaigns — not just theory.</p>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 {[
 { title: 'Job-Ready from Day 1', desc: 'Candidates have completed 10+ live campaign projects using Google Ads, Meta Ads, SEO and AI tools. Zero onboarding delay.', points: ['Real campaign experience', 'Latest tools knowledge', 'Portfolio with results'] },
 { title: 'Skills You Can Verify', desc: 'Every graduate holds a verified Vocaplace certification. You can review their actual project work and campaign reports before hiring.', points: ['Campaign portfolio included', 'Certified competencies', 'Performance history shared'] },
 { title: 'Save Lakhs on Training', desc: 'Typical onboarding for a digital marketing fresher costs ₹1–2L in training time. Our graduates skip that entirely.', points: ['4-month intensive training done', 'Soft skills ready', 'Agency workflow familiar'] },
 ].map((b, i) => (
 <div key={i} className="p-8 bg-white rounded-2xl border border-slate-100 hover: transition-all duration-300 flex flex-col">
 <h3 className="text-lg font-bold text-slate-900 mb-3">{b.title}</h3>
 <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">{b.desc}</p>
 <ul className="space-y-2 pt-5 border-t border-slate-100">
 {b.points.map((p, j) => (
 <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
 <CheckCircle size={14} className="text-green-500 shrink-0"/>
 {p}
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Talent roles */}
 <section className="py-16 px-6">
 <div className="max-w-6xl mx-auto">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-bold text-slate-900 mb-3">Available Talent Pool</h2>
 <p className="text-slate-500 text-lg">Browse the types of professionals you can hire immediately.</p>
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
 {[
 { role: 'SEO Specialists', count: '1,200+', skills: 'Google Search Console · Ahrefs · Semrush · On-Page & Technical Audits · Link Building', color: 'border-blue-200 bg-blue-50' },
 { role: 'Performance Marketers', count: '800+', skills: 'Google Ads · Meta Ads · Performance Max · Bidding Strategies · ROAS Optimisation', color: 'border-purple-200 bg-purple-50' },
 { role: 'Social Media Managers', count: '1,500+', skills: 'Content Strategy · Reels · Canva · Brand Copywriting · Instagram & Facebook Growth', color: 'border-pink-200 bg-pink-50' },
 { role: 'AI Marketing Experts', count: '500+', skills: 'ChatGPT · Gemini · Zapier · Midjourney · GA4 · AI-driven Content Workflows', color: 'border-green-200 bg-green-50' },
 ].map((t, i) => (
 <div key={i} className={`p-6 rounded-2xl border ${t.color} flex flex-col`}>
 <div className="flex items-start justify-between mb-3">
 <h3 className="font-bold text-slate-900 text-sm leading-snug">{t.role}</h3>
 <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full shrink-0 ml-2">{t.count}</span>
 </div>
 <p className="text-xs text-slate-500 leading-relaxed flex-grow">{t.skills}</p>
 <div className="mt-4 pt-3 border-t border-slate-200">
 <span className="text-xs font-semibold text-slate-400">0–3 Years Experience</span>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Process */}
 <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
 <div className="max-w-5xl mx-auto">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-bold text-slate-900 mb-3">Simple 5-Step Hiring Process</h2>
 <p className="text-slate-500">From requirement to onboarding in as little as 2 weeks.</p>
 </div>
 <div className="grid md:grid-cols-5 gap-4">
 {[
 { step: '01', title: 'Share Requirements', desc: 'Tell us the role, skills & team size' },
 { step: '02', title: 'We Match Candidates', desc: 'Shortlisted profiles within 48 hours' },
 { step: '03', title: 'Review Portfolios', desc: 'Real campaign work to assess skills' },
 { step: '04', title: 'Interview & Select', desc: 'Direct candidate interaction' },
 { step: '05', title: 'Onboard & Grow', desc: 'Seamless joining support provided' },
 ].map((phase, i) => (
 <div key={i} className="bg-white rounded-2xl border border-slate-100 p-5 text-center">
 <div className="text-3xl font-black text-blue-900/20 mb-2">{phase.step}</div>
 <h3 className="font-bold text-slate-900 text-sm mb-1">{phase.title}</h3>
 <p className="text-xs text-slate-500">{phase.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Benefits */}
 <section className="py-16 px-6">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Every Hire Comes With</h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
 {[
 { icon: Shield, title: 'Background Verified', desc: 'All candidates undergo thorough background checks before referral' },
 { icon: Clock, title: '48-Hour Turnaround', desc: 'Receive shortlisted profiles within 2 business days' },
 { icon: Star, title: '90-Day Replacement', desc: 'Free replacement guarantee if the candidate doesn\'t work out' },
 { icon: Users, title: 'Pan-India Access', desc: 'Talent trained across India, available for remote or on-site roles' },
 ].map((b, i) => (
 <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 group">
 <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-800 transition-colors">
 <b.icon size={20} className="text-white"/>
 </div>
 <h3 className="font-bold text-slate-900 text-sm mb-2">{b.title}</h3>
 <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Testimonials */}
 <section className="py-16 px-6 bg-slate-900">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-white text-center mb-10">What Our Hiring Partners Say</h2>
 <div className="grid md:grid-cols-3 gap-6">
 {[
 { company: 'BrandFlow Agency', quote: 'We\'ve hired 8 Vocaplace graduates this year. Every single one was campaign-ready from their first week. Incredible quality.', role: 'VP of Growth' },
 { company: 'DataDriven Co.', quote: 'The training these candidates get is miles ahead of what we\'d teach in 3 months of onboarding. Best hiring decision we\'ve made.', role: 'Marketing Director' },
 { company: 'InnovateTech', quote: 'Reduced our onboarding time by 60%. They already understood Google Ads, Meta, and GA4 before they walked in on day one.', role: 'HR Director' },
 ].map((t, i) => (
 <div key={i} className="p-7 bg-slate-800 border border-slate-700 rounded-2xl">
 <div className="flex gap-1 mb-4">
 {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-amber-400 text-amber-400"/>)}
 </div>
 <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.quote}"</p>
 <div className="border-t border-slate-700 pt-4">
 <div className="font-bold text-white text-sm">{t.company}</div>
 <div className="text-xs text-slate-500 mt-0.5">{t.role}</div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Hiring form */}
 <section id="hiring-form"className="py-16 px-6 bg-slate-50">
 <div className="max-w-2xl mx-auto">
 <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">Submit Your Hiring Requirement</h2>
 <p className="text-slate-500 text-center text-sm mb-8">Our hiring team will call you back within 24 hours.</p>
        {isSuccess ? (
          <div className="bg-white rounded-2xl border border-green-200 p-8 text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Requirement Submitted!</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you for partnering with Vocaplace. Our corporate hiring team has received your requirement and will contact you via WhatsApp / phone within 24 hours with pre-screened candidate profiles.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    companyName: "",
                    industry: "",
                    role: "",
                    numPositions: "1",
                    skills: "",
                    contactName: "",
                    phone: "",
                    email: "",
                  });
                }}
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
              >
                Submit Another Requirement
              </button>
            </div>
          </div>
        ) : (
          <form className="bg-white rounded-2xl border border-slate-100 p-8 space-y-5 shadow-sm" onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-medium">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Acme Media Pvt Ltd"
                  className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Industry</label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="e.g. D2C, EdTech, Agency, FinTech"
                  className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Role / Position *</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. Performance Marketing Executive"
                  className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Number of Positions</label>
                <input
                  type="number"
                  name="numPositions"
                  min="1"
                  value={formData.numPositions}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Required Skills / Tools</label>
              <textarea
                rows={3}
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g. Google Ads, Meta Ads, SEO, GA4, Canva, High ROAS Funnels..."
                className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-all resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Contact Person Name *</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Official Work Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hr@yourcompany.com"
                className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Submitting Requirement...
                </>
              ) : (
                <>
                  Submit Requirement to Hiring Team
                  <ArrowRight size={18} />
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-400">Our hiring partnerships team will reach out within 24 hours · Zero recruitment fees</p>
          </form>
        )}
 </div>
 </section>
 </div>
 );
};

export default HireTalentPage;
