"use client";

import React from 'react';
import { CheckCircle, Users, Briefcase, TrendingUp, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
 { icon: GraduationCap, value:"5,000+", label:"Students Placed", color:"bg-blue-50 text-blue-900 border-blue-100"},
 { icon: TrendingUp, value:"₹6.5 LPA", label:"Average Starting Salary", color:"bg-green-50 text-green-700 border-green-100"},
 { icon: Briefcase, value:"100+", label:"Hiring Partners", color:"bg-purple-50 text-purple-700 border-purple-100"},
 { icon: Users, value:"94%", label:"Placement Rate", color:"bg-amber-50 text-amber-700 border-amber-100"},
];

const steps = [
 {
 num:"01",
 title:"Apply & Enroll",
 desc:"Fill out a simple form. Our counselor will call you within 24 hours to guide you through the enrollment process.",
 icon:"📝",
 },
 {
 num:"02",
 title:"Learn with Experts",
 desc:"Attend live online classes, work on real projects, and get 1-on-1 mentorship from industry professionals.",
 icon:"🎓",
 },
 {
 num:"03",
 title:"Build Your Portfolio",
 desc:"Complete 10+ live campaigns across SEO, Google Ads, and Social Media. Build a portfolio that impresses recruiters.",
 icon:"💼",
 },
 {
 num:"04",
 title:"Interview & Get Hired",
 desc:"Our placement team prepares your resume, does mock interviews, and connects you directly with hiring partners.",
 icon:"🤝",
 },
 {
 num:"05",
 title:"Pay After Placement",
 desc:"Once you receive your offer letter, you pay the course fee. Zero financial risk — your success is our commitment.",
 icon:"✅",
 },
];

const Results: React.FC = () => {
 return (
 <>
 {/* Stats Section */}
 <section className="py-16 bg-white border-b border-slate-100">
 <div className="max-w-6xl mx-auto px-6">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
 {stats.map((stat, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.08 }}
 className={`flex flex-col items-center text-center p-6 rounded-2xl border ${stat.color}`}
 >
 <stat.icon size={28} className="mb-3 opacity-80"/>
 <div className="text-3xl font-bold mb-1">{stat.value}</div>
 <div className="text-sm font-medium opacity-70">{stat.label}</div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* How it Works Section */}
 <section className="py-20 bg-slate-50 border-b border-slate-100">
 <div className="max-w-5xl mx-auto px-6">
 <div className="text-center mb-14">
 <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
 Your Learning Journey
 </span>
 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
 From Beginner to Placed — In Just 12 Weeks
 </h2>
 <p className="text-slate-500 text-lg max-w-2xl mx-auto">
 A clear, simple path from zero to a high-paying digital marketing career. No confusion, no risk.
 </p>
 </div>

 <div className="relative">
 {/* Connector line for desktop */}
 <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-green-300 z-0"/>

 <div className="grid md:grid-cols-5 gap-6 relative z-10">
 {steps.map((step, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className="flex flex-col items-center text-center"
 >
 {/* Circle */}
 <div className="w-20 h-20 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center text-3xl mb-4">
 {step.icon}
 </div>
 <div className="text-xs font-bold text-blue-400 mb-1">{step.num}</div>
 <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
 <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
 </motion.div>
 ))}
 </div>
 </div>

 {/* Guarantee badge */}
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="mt-14 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6"
 >
 <div className="flex items-start gap-4">
 <div className="text-4xl">🏆</div>
 <div>
 <h3 className="text-xl font-bold mb-1">100% Placement Guarantee</h3>
 <p className="text-blue-200 text-sm leading-relaxed max-w-lg">
 We are so confident in our program that we guarantee a job offer before you pay a single rupee. 
 If you complete the course and don't get placed, you pay nothing.
 </p>
 </div>
 </div>
 <div className="flex flex-col items-center gap-3 shrink-0">
 {["No upfront fees","Job or money back","Lifetime placement support"].map((item, i) => (
 <div key={i} className="flex items-center gap-2 text-sm text-blue-100">
 <CheckCircle size={16} className="text-green-400 shrink-0"/>
 {item}
 </div>
 ))}
 </div>
 </motion.div>
 </div>
 </section>
 </>
 );
};

export default Results;