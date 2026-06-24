"use client";

import React from 'react';
import { TrendingUp, Users, BookOpen, Briefcase, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Results: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 border border-blue-900 bg-blue-50/50 px-3 py-1 mb-6">
              <span className="w-2 h-2 bg-blue-900 animate-pulse"></span>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">2026 Placement Data</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter uppercase leading-none">
              Proven Outcomes
            </h2>
            <p className="text-slate-600 max-w-xl text-lg leading-relaxed font-mono">
              Real-world performance metrics from students using our AI marketing curriculum. 
              Consistent growth in placements and skill adoption.
            </p>
          </div>
          
          <div className="text-right hidden md:block">
            <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Hiring Rate</div>
            <div className="text-2xl font-bold text-blue-900 flex items-center justify-end gap-2 tracking-tighter">
              <ArrowUpRight className="text-blue-900" />
              94% PLACED
            </div>
          </div>
        </div>

        {/* Dashboard UI */}
        <div className="bg-white border border-slate-200 overflow-hidden shadow-sm">
          {/* Header Bar */}
          <div className="bg-blue-900 border-b border-blue-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="w-3 h-3 bg-white"></div>
               <span className="text-xs font-bold text-white uppercase tracking-widest">Impact Report</span>
            </div>
            <div className="flex gap-4 text-xs font-bold text-slate-200 uppercase tracking-widest">
               <span className="text-blue-900 bg-white px-3 py-1">Placements</span>
               <span className="px-3 py-1 hover:text-white cursor-pointer">Enrollments</span>
               <span className="px-3 py-1 hover:text-white cursor-pointer">Completion</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-200 border-b border-slate-200">
            {/* Total Students */}
            <div className="p-6 md:p-8 bg-white hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <Users size={14} className="text-blue-900" />
                Students Certified
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tighter">5.2K</div>
              <div className="text-xs text-slate-600 font-mono flex items-center gap-1">
                <TrendingUp size={14} className="text-blue-900" /> +142% vs prev year
              </div>
            </div>

            {/* Task Submissions */}
            <div className="p-6 md:p-8 bg-white hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <BookOpen size={14} className="text-blue-900" />
                Task Submissions
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tighter">120K+</div>
              <div className="text-xs text-slate-600 font-mono flex items-center gap-1">
                <TrendingUp size={14} className="text-blue-900" /> +89% vs prev year
              </div>
            </div>

            {/* Hiring Partners */}
            <div className="p-6 md:p-8 bg-white hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <Briefcase size={14} className="text-blue-900" />
                Hiring Partners
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tighter">100+</div>
              <div className="text-xs text-slate-600 font-mono flex items-center gap-1">
                <TrendingUp size={14} className="text-blue-900" /> +45 new this month
              </div>
            </div>

            {/* Avg Salary */}
            <div className="p-6 md:p-8 bg-white hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <TrendingUp size={14} className="text-blue-900" />
                Avg Starting Salary
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tighter">6.5LPA</div>
              <div className="text-xs text-slate-600 font-mono flex items-center gap-1">
                <TrendingUp size={14} className="text-blue-900" /> +30% above avg
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="relative h-[300px] md:h-[400px] bg-slate-50 p-6 md:p-8 overflow-hidden group">
            
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 opacity-50 pointer-events-none">
              <div className="border-t border-slate-300 border-dashed w-full h-0"></div>
              <div className="border-t border-slate-300 border-dashed w-full h-0"></div>
              <div className="border-t border-slate-300 border-dashed w-full h-0"></div>
              <div className="border-t border-slate-300 border-dashed w-full h-0"></div>
              <div className="border-t border-slate-300 border-dashed w-full h-0"></div>
            </div>

            {/* Annotations Layer */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              
              {/* Point 1: Start */}
              <div className="absolute bottom-[20%] left-[5%] flex flex-col items-center pointer-events-auto">
                 <div className="w-4 h-4 bg-blue-900 border-2 border-white mb-2"></div>
                 <div className="bg-white border border-slate-200 p-2 shadow-sm">
                   <div className="text-xs font-bold text-slate-900 uppercase tracking-widest whitespace-nowrap">Enrollment</div>
                 </div>
              </div>

               {/* Intermediate Point 1 */}
               <div className="absolute left-[40%] top-[60%] group/point pointer-events-auto">
                  <div className="w-4 h-4 bg-blue-900 border-2 border-white cursor-pointer hover:scale-110 transition-transform"></div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/point:opacity-100 transition-opacity bg-blue-900 px-3 py-2 text-xs font-bold uppercase tracking-widest text-white whitespace-nowrap">
                    AI Tools Mastery
                  </div>
               </div>

              {/* Point 2: End */}
              <div className="absolute top-[20%] right-[12%] flex flex-col items-center pointer-events-auto">
                 <div className="mb-3 transform -translate-y-1">
                    <div className="bg-white border border-slate-200 p-3 shadow-sm">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap mb-1">Placement</div>
                        <div className="text-sm font-bold text-slate-900 uppercase tracking-tight">Top Agency</div>
                    </div>
                 </div>
                 <div className="w-5 h-5 bg-blue-900 border-2 border-white z-40"></div>
              </div>

            </div>

            {/* Simulated Graph Lines (SVG) */}
            <svg className="w-full h-full relative z-10" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradientBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0"/>
                </linearGradient>
              </defs>
              
              {/* Growth Curve */}
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                d="M0,350 Q200,340 400,200 T800,100 L1000,80" 
                fill="none" 
                stroke="#1e3a8a" 
                strokeWidth="4" 
              />
              
              {/* Area under curve */}
              <motion.path 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                d="M0,350 Q200,340 400,200 T800,100 L1000,80 L1000,400 L0,400 Z" 
                fill="url(#gradientBlue)" 
                stroke="none" 
              />
            </svg>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;