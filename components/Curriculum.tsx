"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Megaphone, Globe, Bot } from 'lucide-react';

const Curriculum = () => {
 const programs = [
 {
 title:"Search Engine Optimization (SEO)",
 duration:"Module 1",
 outcome:"Rank websites on Google's first page",
 tools: ["Google Search Console","Ahrefs","Semrush"],
 description:"You'll learn how to get any website to rank on Google's first page — without paying for ads. We cover keyword research, website structure, content writing, and link building in a fun, hands-on way.",
 icon: Search,
 color:"bg-blue-50 border-blue-100",
 iconColor:"bg-blue-900",
 },
 {
 title:"Google Ads & Paid Campaigns",
 duration:"Module 2",
 outcome:"Create ads that bring real customers",
 tools: ["Google Ads","Keyword Planner","GA4"],
 description:"Learn how to create Google ads that actually bring paying customers to a business. You'll manage real budgets, write compelling ad copy, and track results that matter to your clients.",
 icon: Megaphone,
 color:"bg-amber-50 border-amber-100",
 iconColor:"bg-amber-500",
 },
 {
 title:"Social Media Marketing",
 duration:"Module 3",
 outcome:"Grow brands on Instagram & Facebook",
 tools: ["Meta Ads Manager","Canva","CapCut"],
 description:"Master Instagram, Facebook, and YouTube marketing. You'll create scroll-stopping content, run targeted ad campaigns, and grow a brand's followers and sales — skills every business desperately needs.",
 icon: Globe,
 color:"bg-purple-50 border-purple-100",
 iconColor:"bg-purple-700",
 },
 {
 title: "AI Marketing Automation",
 duration:"Module 4",
 outcome:"Work 10x faster using AI",
 tools: ["ChatGPT","Gemini","Canva AI","Zapier"],
 description:"Learn how to use AI tools to do your marketing work faster and smarter. From writing ad copy in seconds to creating stunning visuals, AI makes you a supercharged marketer that companies love to hire.",
 icon: Bot,
 color:"bg-green-50 border-green-100",
 iconColor:"bg-green-700",
 }
 ];

 return (
 <section className="py-20 bg-white border-b border-slate-100">
 <div className="max-w-6xl mx-auto px-6">
 <div className="text-center mb-14">
 <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
 What You Will Learn
 </span>
 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
 10+ Modules. Real Skills. Real Jobs.
 </h2>
 <p className="text-slate-500 text-lg max-w-2xl mx-auto">
 Our curriculum is built around exactly what employers are hiring for in 2026. 
 Every module teaches you practical skills you can use from day one on the job.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {programs.map((program, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: idx * 0.1 }}
 className={`border rounded-2xl p-6 hover: transition-all duration-300 flex flex-col ${program.color}`}
 >
 <div className={`w-12 h-12 ${program.iconColor} rounded-xl flex items-center justify-center mb-5`}>
 <program.icon className="w-6 h-6 text-white"/>
 </div>

 <div className="text-xs font-semibold text-slate-400 mb-2">{program.duration}</div>
 <h3 className="text-lg font-bold text-slate-900 mb-2">{program.title}</h3>

 <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/80 rounded-full text-xs font-semibold text-slate-700 mb-4 w-fit">
 🎯 {program.outcome}
 </div>

 <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow">{program.description}</p>

 <div>
 <div className="text-[11px] font-bold text-slate-400 mb-2">Tools You'll Master</div>
 <div className="flex flex-wrap gap-1.5">
 {program.tools.map((tool, i) => (
 <span key={i} className="bg-white text-slate-700 border border-slate-200 px-2.5 py-1 text-[11px] font-semibold rounded-full">
 {tool}
 </span>
 ))}
 </div>
 </div>
 </motion.div>
 ))}
 </div>

 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-center mt-10"
 >
 <a
 href="https://student.vocaplace.com"
 className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors text-base"
 >
 Download Full Syllabus
 </a>
 </motion.div>
 </div>
 </section>
 );
};

export default Curriculum;
