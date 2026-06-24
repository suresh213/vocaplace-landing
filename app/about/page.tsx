import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Users, Building, Globe, Award, TrendingUp, BookOpen, Target, Rocket } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vocaplace - Bridging the Gap in Digital Marketing Education',
  description: 'Learn about the mission, vision, history, and expert leadership team behind Vocaplace, a premier growth marketing academy.',
  alternates: {
    canonical: '/about',
  },
};

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-slate-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">About Vocaplace</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tighter leading-tight">
              Building the Future of Marketing Education_
            </h1>
            <p className="text-slate-500 text-lg md:text-xl mb-8 font-mono max-w-xl">
              We are on a mission to bridge the gap between academic learning and industry requirements. Our goal is to make every graduate a job-ready digital marketer and performance specialist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses" className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-blue-900 text-white font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors border border-blue-900 whitespace-nowrap">
                Explore Course
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-transparent text-blue-900 font-bold uppercase tracking-widest hover:bg-blue-50/50 transition-colors border border-blue-900 whitespace-nowrap">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-slate-100 transform translate-x-4 translate-y-4 border border-slate-200 -z-10"></div>
            <div className="bg-white border border-slate-900 p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, value: '5000+', label: 'Students Trained' },
                  { icon: Building, value: '100+', label: 'Partner Agencies' },
                  { icon: TrendingUp, value: '85%', label: 'Placement Rate' },
                  { icon: Award, value: '100+', label: 'Hiring Partners' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 border border-slate-200 bg-slate-50">
                    <stat.icon className="w-6 h-6 text-blue-900 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900 tracking-tighter">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 border border-slate-200 bg-white hover:border-blue-900 transition-colors shadow-sm">
            <Target className="w-10 h-10 text-blue-900 mb-6" />
            <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Our Mission</h2>
            <p className="text-slate-500 leading-relaxed font-mono">
              To democratize quality digital marketing education and make it accessible to every aspiring professional. We believe that geographical location or financial constraints should not limit anyone's potential to build a successful digital marketing career.
            </p>
          </div>
          <div className="p-10 border border-slate-200 bg-white hover:border-blue-900 transition-colors shadow-sm">
            <Rocket className="w-10 h-10 text-blue-900 mb-6" />
            <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Our Vision</h2>
            <p className="text-slate-500 leading-relaxed font-mono">
              To become the leading platform for industry-ready marketing talent, connecting motivated learners with organizations that value skills over credentials. We envision a world where every qualified candidate finds their dream job and every company builds their perfect team.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 max-w-7xl mx-auto mb-24 bg-slate-50 py-16 border-y border-slate-200">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Our Story_</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-500 leading-relaxed font-mono mb-6">
              Vocaplace was founded in 2023 by a group of industry veterans who witnessed firsthand the growing disconnect between academic marketing theories and real-world campaign requirements. We saw talented graduates struggling to run campaigns while agencies desperately searched for skilled performance marketers.
            </p>
            <p className="text-slate-500 leading-relaxed font-mono mb-6">
              We knew there had to be a better way. Instead of waiting for education systems to evolve, we built a bridge ourselves - a comprehensive training platform that transforms motivated learners into job-ready professionals.
            </p>
            <p className="text-slate-500 leading-relaxed font-mono">
              Today, we have partnered with 100+ agencies, trained 5000+ students, and helped 85% of our graduates land their dream jobs. And we are just getting started.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Industry-aligned curriculum',
                'Expert mentors from top agencies and brands',
                'Hands-on project-based learning',
                'AI-driven marketing workflows',
                'Direct hiring partner connections',
                'Lifetime career support'
              ].map((value, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-slate-200">
                  <Check className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-sm text-slate-700 font-mono">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Our Core Values_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            The principles that guide everything we do.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Student First', desc: 'Every decision we make starts with the question: how does this benefit our students?' },
            { title: 'Quality Over Quantity', desc: 'We would rather produce fewer, highly skilled graduates than thousands of undertrained ones.' },
            { title: 'Continuous Innovation', desc: 'The marketing landscape never sleeps, and neither do we. Our curriculum evolves constantly.' },
            { title: 'Transparency', desc: 'Honest feedback, clear pricing, and realistic outcomes. No false promises.' },
            { title: 'Partnership', desc: 'We succeed only when our partners succeed. Agencies, companies, and students together.' },
            { title: 'Long-term Thinking', desc: 'We care about our students careers, not just their next job.' }
          ].map((value, idx) => (
            <div key={idx} className="p-6 border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-sm">
              <div className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center font-bold text-sm mb-4">
                {idx + 1}
              </div>
              <h3 className="font-bold text-slate-900 uppercase tracking-tight mb-2">{value.title}</h3>
              <p className="text-sm text-slate-500 font-mono">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Leadership Team_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            Industry experts committed to transforming marketing education.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: 'Rajesh Kumar', role: 'Founder & CEO', company: 'Ex-Google, 15+ years' },
            { name: 'Priya Sharma', role: 'Head of Academics', company: 'Ex-Byjus, 12+ years' },
            { name: 'Amit Patel', role: 'Head of Placements', company: 'Ex-Amazon, 10+ years' },
            { name: 'Sneha Reddy', role: 'Head of Product', company: 'Ex-Unacademy, 8+ years' }
          ].map((member, idx) => (
            <div key={idx} className="p-6 border border-slate-200 bg-white hover:border-blue-900 transition-colors text-center shadow-sm">
              <div className="w-20 h-20 bg-slate-100 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Users className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="font-bold text-slate-900 uppercase tracking-tight">{member.name}</h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{member.role}</p>
              <p className="text-xs text-slate-400 mt-2">{member.company}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 max-w-7xl mx-auto mb-24 bg-slate-900 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: '2023', label: 'Founded' },
            { value: '100+', label: 'Partner Agencies' },
            { value: '5000+', label: 'Students Trained' },
            { value: '85%', label: 'Placement Rate' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-3xl mx-auto mb-12">
        <div className="bg-blue-900 p-8 text-center shadow-md">
          <h2 className="text-xl font-bold text-white mb-3">Join Our Mission</h2>
          <p className="text-slate-200 mb-6 text-sm max-w-md mx-auto">
            Whether you are a student or a company, there is a place for you in the Vocaplace ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/courses" className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-white text-blue-900 text-sm font-medium hover:bg-slate-100 transition-colors whitespace-nowrap">
              For Students
            </Link>
            <Link href="/hire-talent" className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-transparent text-white text-sm font-medium hover:bg-white/10 transition-colors border border-white/30 whitespace-nowrap">
              For Companies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
