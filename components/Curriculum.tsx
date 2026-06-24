"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Megaphone, Globe, Bot, Terminal } from 'lucide-react';

const Curriculum = () => {
  const programs = [
    {
      title: "Search Engine Optimization",
      duration: "Module 1",
      os: "Organic Search Strategy",
      tools: ["Search Console", "Ahrefs", "Semrush", "Screaming Frog"],
      description: "Master keyword intent classification, crawler indexing pathways, on-page structures, and off-page authority building to rank #1.",
      icon: Search
    },
    {
      title: "Google Ads & PPC Campaigns",
      duration: "Module 2",
      os: "Paid Search & Performance Max",
      tools: ["Google Ads Manager", "Keyword Planner", "GA4"],
      description: "Configure search, display, and AI-powered Performance Max campaigns. Master keyword match types, negative keywords, and bidding loops.",
      icon: Megaphone
    },
    {
      title: "Social Media Advertising",
      duration: "Module 3",
      os: "Meta Ads & Placements",
      tools: ["Meta Ads Manager", "Canva", "Instagram Reels", "CapCut"],
      description: "Launch targeted social ad campaigns on Facebook, Instagram, and TikTok. Optimize instant lead forms and WhatsApp click-to-chat ads.",
      icon: Globe
    },
    {
      title: "AI Tools & Automation",
      duration: "Module 4",
      os: "AI-Driven Workflows",
      tools: ["ChatGPT", "Gemini", "Zapier", "Midjourney"],
      description: "Leverage generative AI models for instant ad copywriting, brand visual assets creation, and performance reporting workflows.",
      icon: Bot
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-blue-900 text-blue-900 text-xs font-bold uppercase tracking-widest mb-4">
            <Terminal size={14} />
            <span>2026 Marketing Standards</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter uppercase">
            Digital Marketing Syllabus
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-mono">
            A production-ready curriculum built around search engines, paid ads channels, social media, and modern AI automation tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-slate-200 p-6 hover:bg-slate-50 transition-colors relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 -z-10 opacity-50 group-hover:scale-110 transition-transform border-l border-b border-slate-200"></div>
              
              <div>
                <div className="w-14 h-14 bg-blue-900 border border-blue-900 flex items-center justify-center mb-6">
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest font-mono">{program.duration}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">{program.title}</h3>
                <p className="text-slate-600 mb-6 font-mono text-xs leading-relaxed">{program.description}</p>
              </div>
              
              <div className="space-y-4 mt-auto">
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Strategy Model</div>
                  <div className="bg-slate-50 border border-slate-200 px-3 py-2 text-[11px] font-bold text-slate-900 font-mono uppercase tracking-tight">
                    {program.os}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Core Platforms</div>
                  <div className="flex flex-wrap gap-1.5">
                    {program.tools.map((tool, i) => (
                      <span key={i} className="bg-white text-blue-900 border border-blue-900 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
