import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Users, Briefcase, Building, Globe, Shield, Clock, TrendingUp, Star, DollarSign, BarChart3, HeadphonesIcon, FileCheck, Zap } from 'lucide-react';

const HiringManagersPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 text-slate-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">For Team Leads & Managers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 uppercase tracking-tighter leading-tight">
              Build Your Dream Team Faster_
            </h1>
            <p className="text-slate-500 text-lg md:text-xl mb-8 font-mono max-w-xl">
              Stop wasting time on endless interviews and training. Get pre-vetted, job-ready developers who can start contributing to your projects from week one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="#benefits" className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors border border-slate-900">
                How It Works
                <ArrowRight size={16} />
              </Link>
              <Link to="/hire-talent" className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-transparent text-slate-900 font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors border border-slate-300">
                Post Openings
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-slate-100 transform translate-x-4 translate-y-4 border border-slate-200 -z-10"></div>
            <div className="bg-white border border-slate-900 p-8 md:p-12">
              <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-tight">ROI Calculator</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200">
                  <span className="text-sm text-slate-600 font-mono">Traditional Hiring Cost</span>
                  <span className="font-bold text-slate-900">₹4,50,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200">
                  <span className="text-sm text-green-700 font-mono">EduAI Hiring Cost</span>
                  <span className="font-bold text-green-700">₹1,80,000</span>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600 font-mono">Your Savings</span>
                    <span className="text-2xl font-bold text-green-600">₹2,70,000</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4 font-mono">*Based on average hiring costs for mid-level developers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">The Hiring Struggle is Real_</h2>
          <p className="text-slate-500 max-w-2xl text-lg            We understand the font-mono">
 challenges you face when building tech teams.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Clock, title: 'Endless Interviews', desc: 'Spend weeks interviewing candidates who look good on paper but cannot deliver in practice.' },
            { icon: TrendingUp, title: 'Training Overhead', desc: 'New hires take 3-6 months to become productive. That is 6 months of investment with minimal returns.' },
            { icon: DollarSign, title: 'High Attrition', desc: 'Candidates leave within a year because their skills do not match industry standards.' },
            { icon: BarChart3, title: 'Skill Gaps', desc: 'College graduates lack practical experience and cannot work on real projects independently.' },
            { icon: Shield, title: 'Quality Inconsistency', desc: 'No guarantee that hired talent can handle the complexity of your actual projects.' },
            { icon: HeadphonesIcon, title: 'Resource Drain', desc: 'Your senior developers spend time mentoring instead of building critical features.' }
          ].map((pain, idx) => (
            <div key={idx} className="p-6 border border-slate-200 bg-white hover:border-red-300 transition-colors">
              <pain.icon className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="font-bold text-slate-900 uppercase tracking-tight mb-2">{pain.title}</h3>
              <p className="text-sm text-slate-500 font-mono">{pain.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Solve */}
      <section id="benefits" className="px-6 max-w-7xl mx-auto mb-24 bg-slate-50 py-16 border-y border-slate-200">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">How We Solve It_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            A complete solution designed for hiring managers who need results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              { title: 'Pre-Vetted Candidates', desc: 'Every candidate passes our rigorous 5-step screening: technical assessment, project review, communication test, problem-solving evaluation, and cultural fit analysis.' },
              { title: 'Real Project Experience', desc: 'Candidates have completed 10+ industry-level projects. They understand how to work in teams, follow best practices, and deliver on deadlines.' },
              { title: 'Latest Tech Stack', desc: 'We continuously update our curriculum. Candidates know modern frameworks, tools, and methodologies used by top companies.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-white border border-slate-200">
                <div className="w-10 h-10 bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-mono">{item.desc}</p>
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
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-mono">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Quality */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">What You Get in Every Candidate_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            Every candidate comes with verified credentials and ready-to-deploy skills.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: FileCheck, title: 'Verified Resume', desc: 'Background checked, education verified, employment history validated.' },
            { icon: Briefcase, title: 'Project Portfolio', desc: '10+ live projects with code samples, demos, and documentation.' },
            { icon: Zap, title: 'Technical Certification', desc: 'Industry-recognized certifications from credible organizations.' },
            { icon: Users, title: 'Soft Skills', desc: 'Communication, teamwork, and problem-solving abilities assessed.' }
          ].map((item, idx) => (
            <div key={idx} className="p-6 border border-slate-200 bg-white hover:border-slate-400 transition-colors text-center">
              <item.icon className="w-10 h-10 text-slate-900 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 uppercase tracking-tight mb-2 text-sm">{item.title}</h3>
              <p className="text-xs text-slate-500 font-mono">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Impact */}
      <section className="px-6 max-w-7xl mx-auto mb-24 bg-slate-900 py-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tighter">Impact on Your Team_</h2>
          <p className="text-slate-400 max-w-2xl text-lg font-mono">
            How hiring from EduAI affects your team's productivity and dynamics.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { metric: '60%', label: 'Faster Onboarding', desc: 'Candidates become productive in weeks, not months.' },
            { metric: '40%', label: 'Less Training Cost', desc: 'Save on training budget and senior developer time.' },
            { metric: '95%', label: 'Retention Rate', desc: 'Our candidates stay longer because they are well-prepared.' }
          ].map((impact, idx) => (
            <div key={idx} className="p-8 border border-slate-700 bg-slate-800 text-center">
              <div className="text-5xl font-bold text-green-500 mb-2">{impact.metric}</div>
              <h3 className="font-bold text-white uppercase tracking-tight mb-2">{impact.label}</h3>
              <p className="text-sm text-slate-400 font-mono">{impact.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Traditional vs EduAI Hiring_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            See the difference in hiring outcomes.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border border-slate-200">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-4 border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Criteria</span>
                </th>
                <th className="text-left p-4 border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Traditional Hiring</span>
                </th>
                <th className="text-left p-4 border-b border-slate-200 bg-green-50">
                  <span className="text-xs font-bold uppercase tracking-widest text-green-700">EduAI Hiring</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { criteria: 'Time to Hire', traditional: '4-8 weeks', eduai: '1-2 weeks' },
                { criteria: 'Time to Productivity', traditional: '3-6 months', eduai: '2-4 weeks' },
                { criteria: 'Training Required', traditional: 'Significant', eduai: 'Minimal' },
                { criteria: 'Skill Verification', traditional: 'Self-reported', eduai: 'Tested & Verified' },
                { criteria: 'Project Experience', traditional: 'Academic only', eduai: '10+ Industry Projects' },
                { criteria: 'Retention Guarantee', traditional: 'None', eduai: '90-day replacement' },
                { criteria: 'Cost Efficiency', traditional: 'High (hidden costs)', eduai: 'Transparent pricing' }
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-slate-200">
                  <td className="p-4">
                    <span className="font-bold text-slate-900">{row.criteria}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-slate-500 font-mono text-sm">{row.traditional}</span>
                  </td>
                  <td className="p-4 bg-green-50">
                    <span className="text-green-700 font-mono text-sm font-bold">{row.eduai}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-3xl mx-auto mb-12">
        <div className="bg-slate-900 p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Ready to Build Your Team?</h2>
          <p className="text-slate-400 mb-6 text-sm max-w-md mx-auto">
            Join 100+ companies who have hired talented developers through Growthbricks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/hire-talent" className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-white text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors">
              Post Openings
              <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-transparent text-white text-sm font-medium hover:bg-slate-800 transition-colors border border-slate-700">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HiringManagersPage;
