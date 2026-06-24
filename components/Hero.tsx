"use client";

import React from 'react';
import { ArrowRight, Sparkles, GraduationCap, Users, Building } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col pt-24 pb-16 bg-white border-b-2 border-slate-200 overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_2px,transparent_2px),linear-gradient(to_bottom,#f1f5f9_2px,transparent_2px)] bg-[size:4rem_4rem] z-0 pointer-events-none opacity-50"></div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 w-full z-10 relative flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* Left: Copy */}
          <div className="space-y-8">

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 border border-blue-900 bg-blue-50/50 text-blue-900 text-xs font-bold uppercase tracking-widest"
            >
              <Sparkles size={14} className="text-amber-500" />
              <span>Preparing for the 2026 AI Era</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase text-slate-900 leading-none"
            >
              Master SEO &amp; AI.<br />
              <span className="text-slate-500 underline decoration-slate-200 decoration-4 underline-offset-8">Drive Actual Growth.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-xl leading-relaxed font-mono"
            >
              A production-style digital marketing academy. Learn advanced SEO, Google Ads, Meta campaigns, and AI-driven content workflows to become a job-ready growth marketer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="https://student.vocaplace.com" className="h-12 px-8 bg-blue-900 text-white text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors whitespace-nowrap">
                Get Started
                <ArrowRight size={16} />
              </a>
              <Link href="/hire-talent" className="h-12 px-8 bg-slate-50 text-blue-900 border border-blue-900 text-sm font-bold tracking-widest uppercase flex items-center justify-center hover:bg-blue-50 transition-colors whitespace-nowrap">
                For Employers
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-slate-100"
            >
              <div>
                <div className="flex items-center gap-2 text-slate-900 mb-1">
                  <GraduationCap className="w-5 h-5 text-blue-900" />
                  <span className="text-2xl font-bold tracking-tighter">5k+</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Students Certified</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-slate-900 mb-1">
                  <Building className="w-5 h-5 text-blue-900" />
                  <span className="text-2xl font-bold tracking-tighter">100+</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Agency Partners</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-slate-900 mb-1">
                  <Users className="w-5 h-5 text-blue-900" />
                  <span className="text-2xl font-bold tracking-tighter">500+</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Hiring Managers</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full relative z-10"
          >
            <div className="relative group overflow-hidden border border-slate-200">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10 pointer-events-none"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Students collaborating on modern AI tools"
                className="w-full h-[400px] lg:h-[550px] object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white border border-slate-200 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
                  <p className="text-base font-mono text-slate-900 leading-snug">"The curriculum perfectly aligns with our campaign scaling needs."</p>
                  <p className="text-[10px] font-bold text-slate-500 mt-2 uppercase tracking-widest">— VP of Growth at Top Agency</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
