import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Target, Users, Briefcase, TrendingUp, Building, Phone, Mail, Clock, Award, Globe, Shield } from 'lucide-react';

const PlacementSupportPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-slate-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Placement Support Program</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 uppercase tracking-tighter leading-tight">
              Complete Placement Ecosystem for Your Institution_
            </h1>
            <p className="text-slate-500 text-lg md:text-xl mb-8 font-mono max-w-xl">
              End-to-end placement support designed specifically for colleges. From skill development to campus hiring, we handle everything to ensure your students land their dream jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="#programs" className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors border border-slate-900">
                View Programs
                <ArrowRight size={16} />
              </Link>
              <Link to="/colleges" className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-transparent text-slate-900 font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors border border-slate-300">
                Partner With Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-slate-100 transform translate-x-4 translate-y-4 border border-slate-200 -z-10"></div>
            <div className="bg-white border border-slate-900 p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">85%</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Placement Rate</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">5000+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Students Placed</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">100+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Hiring Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Placement Workflow_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            Our proven 6-phase approach ensures maximum placement success for every student.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { phase: '01', title: 'Assessment', desc: 'Skill evaluation & career counseling' },
            { phase: '02', title: 'Training', desc: 'Technical & soft skills development' },
            { phase: '03', title: 'Projects', desc: 'Industry-relevant portfolio building' },
            { phase: '04', title: 'Preparation', desc: 'Mock interviews & resume building' },
            { phase: '05', title: 'Placement', desc: 'Campus drives & company interviews' },
            { phase: '06', title: 'Support', desc: 'Post-placement guidance & onboarding' }
          ].map((step, idx) => (
            <div key={idx} className="p-6 border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-center">
              <div className="text-3xl font-bold text-slate-200 mb-3">{step.phase}</div>
              <h3 className="font-bold text-slate-900 uppercase tracking-tight text-sm mb-2">{step.title}</h3>
              <p className="text-xs text-slate-500 font-mono">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Training Programs_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            Comprehensive programs designed to make students industry-ready.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Full Stack Development',
              duration: '6 Months',
              students: '2000+',
              description: 'Master modern web development with React, Node.js, databases, and cloud technologies.',
              modules: ['Frontend Development', 'Backend APIs', 'Database Design', 'Cloud Deployment', 'DevOps Basics']
            },
            {
              title: 'Data Analytics',
              duration: '4 Months',
              students: '1500+',
              description: 'Learn data analysis, visualization, and business intelligence with Python, SQL, and Tableau.',
              modules: ['Data Analysis', 'SQL & Databases', 'Data Visualization', 'Business Intelligence', 'ML Basics']
            },
            {
              title: 'AI & Automation',
              duration: '3 Months',
              students: '1500+',
              description: 'Understand AI tools, automation frameworks, and prompt engineering for modern workflows.',
              modules: ['AI Tools Mastery', 'Prompt Engineering', 'Automation Scripts', 'Workflow Optimization', 'AI Integration']
            }
          ].map((program, idx) => (
            <div key={idx} className="p-8 border border-slate-200 bg-white hover:border-slate-400 transition-colors flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{program.duration}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-green-600">{program.students} placed</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">{program.title}</h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow font-mono">{program.description}</p>
              <ul className="space-y-2 pt-6 border-t border-slate-200 mb-6">
                {program.modules.map((module, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-600 font-mono">
                    <Check size={12} className="text-slate-900" />
                    {module}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors border border-slate-900">
                Get Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="px-6 max-w-7xl mx-auto mb-24 bg-slate-50 py-16 border-y border-slate-200">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Hiring Partners_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            Our students have access to interviews with 100+ companies across various sectors.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {['Tech Startups', 'IT Services', 'E-Commerce', 'Fintech', 'Healthcare Tech', 'EdTech', 'Consulting', 'Manufacturing'].map((sector, idx) => (
            <div key={idx} className="p-4 bg-white border border-slate-200 text-center">
              <Globe className="w-6 h-6 text-slate-400 mx-auto mb-2" />
              <h3 className="font-bold text-slate-900 text-sm uppercase">{sector}</h3>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/hire-talent" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1 hover:gap-4 transition-all">
            View Hiring Process <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Value Added Services */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Value Added Services_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            Additional benefits that set our placement program apart.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Award, title: 'Certifications', desc: 'Industry-recognized certifications that boost resume credibility.' },
            { icon: Users, title: 'Mentorship', desc: '1-on-1 mentoring from industry experts throughout the program.' },
            { icon: Clock, title: 'Lifetime Support', desc: 'Career support continues even after placement.' },
            { icon: Shield, title: 'Placement Guarantee', desc: 'Dedicated support until every student gets placed.' }
          ].map((service, idx) => (
            <div key={idx} className="p-6 border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
              <service.icon className="w-8 h-8 text-slate-900 mb-4" />
              <h3 className="font-bold text-slate-900 uppercase tracking-tight mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 font-mono">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Success Stories_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            Real placement achievements from our partner colleges.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { college: 'ABC Engineering College', students: '150 students', package: '₹8.5 LPA Avg', result: '92% placement' },
            { college: 'XYZ Institute of Technology', students: '200 students', package: '₹7.2 LPA Avg', result: '88% placement' },
            { college: 'PQR Polytechnic', students: '100 students', package: '₹5.5 LPA Avg', result: '95% placement' }
          ].map((story, idx) => (
            <div key={idx} className="p-8 border border-slate-200 bg-white hover:border-slate-400 transition-colors">
              <h3 className="font-bold text-slate-900 uppercase tracking-tight mb-4">{story.college}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Students</span>
                  <span className="text-sm font-bold text-slate-900">{story.students}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Avg Package</span>
                  <span className="text-sm font-bold text-green-600">{story.package}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Result</span>
                  <span className="text-sm font-bold text-slate-900">{story.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 max-w-4xl mx-auto mb-24">
        <div className="border border-slate-900 bg-slate-900 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tight">Ready to Transform Placements?</h2>
          <p className="text-slate-400 mb-8 font-mono max-w-xl mx-auto">
            Get in touch with our placement team to discuss how we can help your institution achieve better placement outcomes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <div className="flex items-center gap-3 text-slate-300">
              <Phone className="w-5 h-5" />
              <span className="font-mono text-sm">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="w-5 h-5" />
              <span className="font-mono text-sm">placements@eduai.com</span>
            </div>
          </div>
          <Link to="/colleges" className="inline-flex items-center justify-center gap-2 h-14 px-10 bg-white text-slate-900 font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors border border-white">
            Start Partnership
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PlacementSupportPage;
