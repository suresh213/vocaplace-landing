"use client";

import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, Building, Award } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col pt-24 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">

      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_60%)] z-0 pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 w-full z-10 relative flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* Left: Copy */}
          <div className="space-y-7">

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-full"
            >
              <Award size={16} className="text-amber-400" />
              <span>India&apos;s #1 Pay After Placement Program</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Get a High-Paying<br />
              <span className="text-amber-400">Digital Marketing Job</span><br />
              <span className="text-blue-200">Before You Pay a Rupee.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-blue-100 max-w-xl leading-relaxed"
            >
              Master SEO, Google Ads, Social Media & AI tools in just 12 weeks.
              Land a job first - pay only after you get placed. Zero financial risk.
            </motion.p>

            {/* Benefit bullets */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="space-y-3"
            >
              {[
                "100% Job Placement Guarantee",
                "Pay Only After You Get Hired",
                "10+ Modules with Live Projects",
                "1-on-1 Mentorship from Industry Experts",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-blue-100 text-sm font-medium">
                  <CheckCircle size={18} className="text-green-400 shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="https://student.vocaplace.com"
                className="h-14 px-8 bg-amber-400 text-blue-950 text-base font-bold flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors rounded-lg whitespace-nowrap"
              >
                Start Your Free Journey
                <ArrowRight size={18} />
              </a>
              <Link
                href="/courses"
                className="h-14 px-8 bg-white/10 border border-white/30 text-white text-base font-semibold flex items-center justify-center hover:bg-white/20 transition-colors rounded-lg whitespace-nowrap"
              >
                View Course Details
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-2">
                {["A", "R", "S", "M", "P"].map((l, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-blue-800 flex items-center justify-center text-white text-xs font-bold">{l}</div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
                  <span className="text-amber-400 text-sm font-bold ml-1">4.9/5</span>
                </div>
                <p className="text-blue-200 text-xs">Loved by 5,000+ students across India</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full relative z-10"
          >
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* Card header */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6 text-white">
                <p className="text-blue-200 text-sm font-medium mb-1">2026 Placement Report</p>
                <h3 className="text-2xl font-bold">Real Outcomes, Real Students</h3>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 divide-x divide-y divide-slate-100">
                {[
                  { num: "5,000+", label: "Students Placed", color: "text-blue-900" },
                  { num: "₹6.5 LPA", label: "Avg Starting Salary", color: "text-green-600" },
                  { num: "100+", label: "Hiring Partners", color: "text-blue-900" },
                  { num: "94%", label: "Placement Rate", color: "text-green-600" },
                ].map((s, i) => (
                  <div key={i} className="p-6">
                    <div className={`text-3xl font-bold ${s.color} mb-1`}>{s.num}</div>
                    <div className="text-slate-500 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "I got placed at a top agency at ₹7 LPA - and I only paid <em>after</em> my offer letter arrived. Best decision of my life."
                </p>
                <p className="text-slate-400 text-xs mt-2 font-semibold">— Priya S., SEO Manager at BrandFlow</p>
              </div>

              {/* Stats row */}
              <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <Users size={14} className="text-blue-700" />
                  <span>Next batch: <strong className="text-blue-900">This Monday</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <Building size={14} className="text-blue-700" />
                  <span><strong className="text-blue-900">Limited seats</strong> available</span>
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
