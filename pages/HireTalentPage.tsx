import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Users, Briefcase, Building, Globe, Shield, Clock, TrendingUp, Star, ChevronRight } from 'lucide-react';

const HireTalentPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-slate-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Hiring Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 uppercase tracking-tighter leading-tight">
              Hire Job-Ready Tech Talent_
            </h1>
            <p className="text-slate-500 text-lg md:text-xl mb-8 font-mono max-w-xl">
              Access a curated pool of trained candidates who have completed rigorous industry-focused programs. Skip the training ramp-up and hire talent that delivers from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/hiring-managers" className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors border border-slate-900">
                For Hiring Managers
                <ArrowRight size={16} />
              </Link>
              <Link to="#hiring-form" className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-transparent text-slate-900 font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors border border-slate-300">
                Submit Requirement
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-slate-100 transform translate-x-4 translate-y-4 border border-slate-200 -z-10"></div>
            <div className="bg-white border border-slate-900 p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, value: '5000+', label: 'Candidates Available' },
                  { icon: Building, value: '100+', label: 'Hiring Partners' },
                  { icon: Clock, value: '48hrs', label: 'Avg. Response Time' },
                  { icon: TrendingUp, value: '85%', label: 'Hiring Success Rate' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 border border-slate-200 bg-slate-50">
                    <stat.icon className="w-6 h-6 text-slate-900 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900 tracking-tighter">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire From Us */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Why Hire From EduAI?_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            We solve the biggest challenges in tech hiring.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Industry-Ready Skills',
              description: 'Candidates have completed real-world projects using current technologies. They understand industry workflows and can contribute immediately.',
              points: ['Hands-on project experience', '最新 tech stack knowledge', 'Problem-solving skills']
            },
            {
              title: 'Verified Competencies',
              description: 'Every candidate goes through rigorous assessments and certifications. We validate their skills so you can trust what you hire.',
              points: ['Technical assessments', 'Project portfolio review', 'Certification verification']
            },
            {
              title: 'Reduced Training Costs',
              description: 'Stop investing in extensive onboarding. Our candidates are trained to industry standards and need minimal ramp-up time.',
              points: ['6-month intensive training', 'Soft skills development', 'Company-specific orientation']
            }
          ].map((benefit, idx) => (
            <div key={idx} className="p-8 border border-slate-200 bg-white hover:border-slate-400 transition-colors flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">{benefit.title}</h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow font-mono">{benefit.description}</p>
              <ul className="space-y-2 pt-6 border-t border-slate-200">
                {benefit.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-600 font-mono">
                    <Check size={12} className="text-green-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Talent Pool */}
      <section className="px-6 max-w-7xl mx-auto mb-24 bg-slate-50 py-16 border-y border-slate-200">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Available Talent_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            Browse our pool of trained professionals ready to join your team.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { role: 'Full Stack Developers', count: '2000+', skills: 'React, Node.js, Python, MongoDB, AWS', exp: '0-3 Years' },
            { role: 'Data Analysts', count: '1500+', skills: 'Python, SQL, Tableau, Excel, PowerBI', exp: '0-3 Years' },
            { role: 'AI/ML Engineers', count: '800+', skills: 'TensorFlow, PyTorch, NLP, Computer Vision', exp: '0-3 Years' },
            { role: 'Backend Developers', count: '1200+', skills: 'Java, Spring Boot, Django, Go', exp: '0-3 Years' },
            { role: 'QA Engineers', count: '500+', skills: 'Selenium, Cypress, Manual Testing, Automation', exp: '0-3 Years' },
            { role: 'DevOps Engineers', count: '400+', skills: 'Docker, Kubernetes, CI/CD, AWS, Azure', exp: '0-3 Years' }
          ].map((talent, idx) => (
            <div key={idx} className="p-6 bg-white border border-slate-200 hover:border-slate-400 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 uppercase tracking-tight">{talent.role}</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-green-600">{talent.count}</span>
              </div>
              <p className="text-xs text-slate-500 font-mono mb-3">{talent.skills}</p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{talent.exp}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Process */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Simple Hiring Process_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            From requirement to onboarding in as little as 2 weeks.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Submit Requirements', desc: 'Share your hiring needs' },
            { step: '02', title: 'Candidate Matching', desc: 'We shortlist suitable candidates' },
            { step: '03', title: 'Screening', desc: 'Technical & cultural fit assessment' },
            { step: '04', title: 'Interviews', desc: 'Direct candidate interactions' },
            { step: '05', title: 'Offer & Onboarding', desc: 'Seamless joining process' }
          ].map((phase, idx) => (
            <div key={idx} className="relative p-6 border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-center">
              <div className="text-3xl font-bold text-slate-200 mb-3">{phase.step}</div>
              <h3 className="font-bold text-slate-900 uppercase tracking-tight text-sm mb-1">{phase.title}</h3>
              <p className="text-xs text-slate-500 font-mono">{phase.desc}</p>
              {idx < 4 && <ChevronRight className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-300 hidden md:block" size={16} />}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Additional Benefits_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            Everything you need for a successful hiring experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'Background Verified', desc: 'All candidates undergo thorough background verification.' },
            { icon: Clock, title: 'Quick Turnaround', desc: 'Receive shortlisted profiles within 48 hours.' },
            { icon: Star, title: 'Quality Assurance', desc: '90-day replacement guarantee on all hires.' },
            { icon: Globe, title: 'Pan-India Reach', desc: 'Access talent from colleges across India.' }
          ].map((benefit, idx) => (
            <div key={idx} className="p-6 border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
              <benefit.icon className="w-8 h-8 text-slate-900 mb-4" />
              <h3 className="font-bold text-slate-900 uppercase tracking-tight mb-2 text-sm">{benefit.title}</h3>
              <p className="text-xs text-slate-500 font-mono">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 max-w-7xl mx-auto mb-24 bg-slate-900 py-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tighter">What Companies Say_</h2>
          <p className="text-slate-400 max-w-2xl text-lg font-mono">
            Hear from organizations that have hired from our talent pool.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { company: 'TechStartup Inc.', quote: 'We hired 15 developers through EduAI. The quality of candidates exceeded our expectations. They were productive from day one.', role: 'CTO' },
            { company: 'DataDriven Co.', quote: 'The training these candidates received is evident in their technical skills. Best hiring experience we have had.', role: 'Head of Engineering' },
            { company: 'InnovateTech', quote: 'Reduced our onboarding time by 60%. The candidates came well-prepared for industry challenges.', role: 'HR Director' }
          ].map((testimonial, idx) => (
            <div key={idx} className="p-8 border border-slate-700 bg-slate-800">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 text-sm mb-6 font-mono">"{testimonial.quote}"</p>
              <div className="pt-4 border-t border-slate-700">
                <h4 className="font-bold text-white uppercase tracking-tight text-sm">{testimonial.company}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Form */}
      <section id="hiring-form" className="px-6 max-w-3xl mx-auto mb-12">
        <div className="bg-slate-50 p-6 border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-3 text-center">Submit Hiring Requirement</h2>
          <p className="text-slate-500 text-center mb-6 text-sm">Fill out the form and our hiring team will reach out within 24 hours.</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Company Name</label>
                <input type="text" className="w-full bg-white border border-slate-300 p-2.5 text-slate-900 text-sm focus:outline-none focus:border-slate-500" required />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Industry</label>
                <input type="text" className="w-full bg-white border border-slate-300 p-2.5 text-slate-900 text-sm focus:outline-none focus:border-slate-500" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Role/Position</label>
                <input type="text" className="w-full bg-white border border-slate-300 p-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Number of Positions</label>
                <input type="number" className="w-full bg-white border border-slate-300 p-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors" required />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Required Skills</label>
              <textarea rows={3} className="w-full bg-white border border-slate-300 p-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors resize-none" placeholder="e.g., React, Node.js, Python, SQL..." required></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Contact Name</label>
                <input type="text" className="w-full bg-white border border-slate-300 p-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Email</label>
                <input type="email" className="w-full bg-white border border-slate-300 p-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors" required />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Phone</label>
              <input type="tel" className="w-full bg-white border border-slate-300 p-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors" required />
            </div>
            <button type="submit" className="w-full h-14 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors border border-slate-900">
              Submit Requirement
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HireTalentPage;
