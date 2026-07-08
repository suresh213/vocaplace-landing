"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
 {
 text:"I was a commerce graduate with zero marketing knowledge. In 12 weeks, I learned everything from SEO to Google Ads, and got placed at a digital agency at ₹5.5 LPA. The best part? I paid only after I got my offer letter!",
 name:"Priya Sharma",
 title:"SEO Executive at BrandFlow Agency",
 type:"Student",
 initials:"PS",
 gradient:"from-blue-500 to-purple-600",
 },
 {
 text:"We've hired 8 candidates from Vocaplace over the past year. Every single one was job-ready from day one — they knew Meta Ads, Google Analytics, and content strategy. I'd recommend this program to any agency looking for fresh talent.",
 name:"Rahul Mehta",
 title:"HR Director, WebScale Agency",
 type:"Hiring Partner",
 initials:"RM",
 gradient:"from-green-500 to-teal-600",
 },
 {
 text:"After 2 years of a dead-end job, I wanted a career switch. Vocaplace's program gave me real skills and real confidence. I cracked interviews at 3 companies and chose the one with the best package. Zero regrets.",
 name:"Ankita Verma",
 title:"Digital Marketing Manager at Startupify",
 type:"Career Switch",
 initials:"AV",
 gradient:"from-amber-500 to-orange-600",
 },
];

const Testimonials: React.FC = () => {
 return (
 <section className="py-20 bg-slate-50 border-b border-slate-100">
 <div className="max-w-6xl mx-auto px-6">
 <div className="text-center mb-14">
 <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
 Student Stories
 </span>
 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
 Real People. Real Results.
 </h2>
 <p className="text-slate-500 text-lg max-w-2xl mx-auto">
 Don't take our word for it. Hear from students who transformed their careers with Vocaplace.
 </p>
 {/* Aggregate rating */}
 <div className="flex items-center justify-center gap-2 mt-5">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={20} className="fill-amber-400 text-amber-400"/>
 ))}
 <span className="font-bold text-slate-800 text-lg ml-1">4.9/5</span>
 <span className="text-slate-400 text-sm">from 8,500+ reviews</span>
 </div>
 </div>

 <div className="grid md:grid-cols-3 gap-6">
 {testimonials.map((t, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className="bg-white p-6 rounded-2xl border border-slate-100 hover: transition-all duration-300 flex flex-col"
 >
 {/* Type badge */}
 <span className="self-start px-3 py-1 text-xs font-bold rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
 {t.type}
 </span>

 {/* Stars */}
 <div className="flex items-center gap-0.5 mb-4">
 {[...Array(5)].map((_, j) => (
 <Star key={j} size={14} className="fill-amber-400 text-amber-400"/>
 ))}
 </div>

 {/* Quote */}
 <p className="text-slate-700 text-sm leading-relaxed flex-grow mb-6">
 &ldquo;{t.text}&rdquo;
 </p>

 {/* Author */}
 <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
 <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
 {t.initials}
 </div>
 <div>
 <div className="font-bold text-slate-900 text-sm">{t.name}</div>
 <div className="text-slate-400 text-xs mt-0.5">{t.title}</div>
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default Testimonials;