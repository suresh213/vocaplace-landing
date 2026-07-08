"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Building2, Briefcase, Heart } from 'lucide-react';

const features = [
 {
 icon: Heart,
 title:"We Genuinely Care About Your Success",
 desc:"Our placement team works tirelessly — crafting your resume, coaching you for interviews, and connecting you with the right companies. We don't stop until you have an offer in hand.",
 },
 {
 icon: Users,
 title:"Small Batches, Personal Attention",
 desc:"We keep our batches small so every student gets direct mentorship. No getting lost in a crowd of thousands — your growth is our personal responsibility.",
 },
 {
 icon: Building2,
 title:"200+ Hiring Partners Ready to Hire You",
 desc:"We've built relationships with top agencies, startups, and MNCs across India. When you graduate, you walk into a warm network — not a cold job hunt.",
 },
 {
 icon: Briefcase,
 title:"Real Projects, Not Just Theory",
 desc:"You'll work on live campaigns for real businesses during the course. By graduation, you have a portfolio with actual results — not just a certificate.",
 },
];

const Workflow: React.FC = () => {
 return (
 <section className="py-20 bg-white border-b border-slate-100">
 <div className="max-w-6xl mx-auto px-6">
 <div className="text-center mb-14">
 <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-4">
 Why Students Choose Us
 </span>
 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
 We&apos;re With You Every Step of the Way
 </h2>
 <p className="text-slate-500 text-lg max-w-2xl mx-auto">
 We&apos;re not just another online course. We&apos;re a placement-first academy that only succeeds when you do.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-6">
 {features.map((item, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300"
 >
 <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center shrink-0">
 <item.icon size={22} className="text-white"/>
 </div>
 <div>
 <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
 <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
 </div>
 </motion.div>
 ))}
 </div>

 {/* Logos strip placeholder */}
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="mt-14 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-100 p-8 text-center"
 >
 <p className="text-slate-400 text-sm font-semibold mb-4">Our graduates are working at</p>
 <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
 {["google", "meta", "oyo", "swiggy", "paytm", "zomato", "nykaa", "meesho"].map((name, i) => (
 <div key={i} className="relative h-8 md:h-10 w-24 md:w-28 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
 <Image 
 src={`/logos/${name}.webp`} 
 alt={`${name} logo`} 
 fill 
 className="object-contain" 
 />
 </div>
 ))}
 </div>
 </motion.div>
 </div>
 </section>
 );
};

export default Workflow;