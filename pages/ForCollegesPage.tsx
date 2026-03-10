import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Users, Building, TrendingUp, BookOpen, Shield, Globe } from 'lucide-react';

const ForCollegesPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16 bg-white">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building className="w-4 h-4 text-slate-500" />
              <span className="text-xs text-slate-500 uppercase">For Educational Institutions</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Empower Your College with Industry-Ready Training
            </h1>
            <p className="text-slate-500 text-sm md:text-base mb-6 max-w-xl">
              Partner with us to transform your curriculum and prepare students for the 2026 job market. Our industry-aligned programs bridge the gap between academic learning and real-world skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/placement-support" className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors border border-slate-900">
                View Programs
                <ArrowRight size={14} />
              </Link>
              <Link to="#partner-form" className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-transparent text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors border border-slate-300">
                Become a Partner
              </Link>
            </div>
          </div>
          <div>
            <div className="bg-white border border-slate-200 p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, value: '50+', label: 'Partner Colleges' },
                  { icon: TrendingUp, value: '85%', label: 'Placement Rate' },
                  { icon: BookOpen, value: '5000+', label: 'Students Trained' },
                  { icon: Shield, value: '100+', label: 'Hiring Partners' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-3 border border-slate-200 bg-slate-50">
                    <stat.icon className="w-5 h-5 text-slate-900 mx-auto mb-2" />
                    <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-[10px] text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-slate-200 bg-white">
            <div className="w-10 h-10 bg-red-50 border border-red-200 flex items-center justify-center mb-4">
              <span className="text-xl">⚠</span>
            </div>
            <h2 className="text-base font-semibold text-slate-900 mb-3">The Challenge</h2>
            <p className="text-slate-500 text-sm mb-4">
              Traditional academic curricula often lag behind industry requirements. Graduates face skill gaps:
            </p>
            <ul className="space-y-2">
              {['Low placement rates', 'Mismatched job roles', 'Reduced confidence', 'Extended onboarding'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 border border-slate-200 bg-white">
            <div className="w-10 h-10 bg-green-50 border border-green-200 flex items-center justify-center mb-4">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-base font-semibold text-slate-900 mb-3">Our Solution</h2>
            <p className="text-slate-500 text-sm mb-4">
              We collaborate with colleges to integrate industry-focused training:
            </p>
            <ul className="space-y-2">
              {['Industry-aligned curriculum', 'Hands-on project experience', 'AI-powered mentoring', 'Direct hiring partner access'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                  <Check size={12} className="text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Partnership Benefits</h2>
          <p className="text-slate-500 text-sm max-w-xl">
            Everything you need to transform your placement outcomes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: 'Curriculum Integration',
              description: 'Ready-to-deploy course materials that integrate with your programs.',
              features: ['Module-based structure', 'Flexible implementation', 'Regular updates']
            },
            {
              title: 'Faculty Training',
              description: 'Training programs for faculty with ongoing support.',
              features: ['Online certification', 'Live workshops', 'Resource access']
            },
            {
              title: 'Placement Excellence',
              description: 'Direct connections to 100+ hiring partners.',
              features: ['Hiring partner network', 'Mock interviews', 'Resume workshops']
            }
          ].map((benefit, idx) => (
            <div key={idx} className="p-5 border border-slate-200 bg-white hover:bg-slate-50 transition-colors flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-500 text-xs mb-4 flex-grow">{benefit.description}</p>
              <ul className="space-y-1 pt-3 border-t border-slate-200">
                {benefit.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <Check size={10} className="text-slate-900" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Program Structure */}
      <section className="px-6 max-w-7xl mx-auto mb-12 bg-slate-50 py-10 border-y border-slate-200">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">How It Works</h2>
          <p className="text-slate-500 text-sm max-w-xl">
            A structured approach to transforming student outcomes in 4 simple phases.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[
            { step: '01', title: 'Assessment', desc: 'We evaluate your curriculum and goals.' },
            { step: '02', title: 'Integration', desc: 'Custom implementation plan.' },
            { step: '03', title: 'Delivery', desc: 'Structured training with projects.' },
            { step: '04', title: 'Placement', desc: 'Connected with hiring partners.' }
          ].map((phase, idx) => (
            <div key={idx} className="relative p-4 bg-white border border-slate-200">
              <div className="text-2xl font-bold text-slate-200 mb-2">{phase.step}</div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{phase.title}</h3>
              <p className="text-xs text-slate-500">{phase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Trusted by Leading Institutions</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Join the network of colleges transforming their placement outcomes.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-3">
          {['Engineering Colleges', 'Management Institutes', 'Polytechnics', 'Private Universities'].map((type, idx) => (
            <div key={idx} className="p-4 border border-slate-200 bg-white text-center">
              <Globe className="w-5 h-5 text-slate-400 mx-auto mb-2" />
              <h3 className="text-xs font-medium text-slate-900">{type}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="partner-form" className="px-6 max-w-3xl mx-auto mb-12">
        <div className="bg-slate-900 p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Start Your Partnership</h2>
          <p className="text-slate-400 text-sm mb-6">Fill out the form and our team will reach out within 24 hours.</p>
          <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">College Name</label>
                <input type="text" className="w-full bg-slate-800 border border-slate-700 p-2.5 text-white text-sm focus:outline-none focus:border-slate-500" required />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Location</label>
                <input type="text" className="w-full bg-slate-800 border border-slate-700 p-2.5 text-white text-sm focus:outline-none focus:border-slate-500" required />
              </div>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Placement Officer Name</label>
              <input type="text" className="w-full bg-slate-800 border border-slate-700 p-2.5 text-white text-sm focus:outline-none focus:border-slate-500" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Email</label>
                <input type="email" className="w-full bg-slate-800 border border-slate-700 p-2.5 text-white text-sm focus:outline-none focus:border-slate-500" required />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Phone</label>
                <input type="tel" className="w-full bg-slate-800 border border-slate-700 p-2.5 text-white text-sm focus:outline-none focus:border-slate-500" required />
              </div>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Number of Students</label>
              <input type="number" className="w-full bg-slate-800 border border-slate-700 p-2.5 text-white text-sm focus:outline-none focus:border-slate-500" required />
            </div>
            <button type="submit" className="w-full h-10 bg-white text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors">
              Submit Partnership Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ForCollegesPage;
