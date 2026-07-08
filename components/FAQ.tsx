"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
 {
 q:"Do I need any prior marketing experience to join?",
 a:"Not at all! Our program is designed specifically for complete beginners. We start from the very basics and guide you step by step to becoming job-ready. Many of our top performers had zero marketing background before joining."
 },
 {
 q:"How does the Pay After Placement model work?",
 a:"It's simple — you pay a small, refundable registration fee to secure your seat. You then complete the full 12-week program. Once you receive your job offer letter, you pay the remaining course fee. If you don't get placed, you pay nothing. Zero risk."
 },
 {
 q:"Is there a 100% Job Guarantee?",
 a:"Yes, absolutely. If you attend all classes, complete all assignments, and participate in the placement process but don't get a job within 90 days of course completion, we refund your registration fee in full. Our placement rate is currently 94%."
 },
 {
 q:"Are the classes live or can I learn at my own pace?",
 a:"We offer a flexible hybrid model. You get access to high-quality recorded lectures so you can learn at your own pace, plus weekly live sessions for Q&A, project reviews, and direct mentorship from industry experts."
 },
 {
 q:"What kind of salary can I expect after placement?",
 a:"Our graduates typically earn between ₹3.5 LPA and ₹8.5 LPA depending on the role and city. The average starting salary across all our recent placements is ₹6.5 LPA. We share transparent placement data with all prospective students."
 },
 {
 q:"Who are the hiring partners you work with?",
 a:"We partner with 100+ companies including digital marketing agencies, e-commerce startups, and large corporations. Our network includes Google and Meta partner agencies, as well as brands like OYO, Swiggy, Paytm, Nykaa, and many more."
 },
 {
 q:"Can working professionals or students join this course?",
 a:"Yes! Our flexible schedule is designed to accommodate both students and working professionals. Weekend batches and evening sessions are available. Many of our students complete the program while managing their current college or job commitments."
 },
];

const FAQ: React.FC = () => {
 const [openIndex, setOpenIndex] = useState<number | null>(0);

 return (
 <section className="py-20 bg-white border-b border-slate-100">
 <div className="max-w-3xl mx-auto px-6">
 <div className="text-center mb-12">
 <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full mb-4">
 Common Questions
 </span>
 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
 Frequently Asked Questions
 </h2>
 <p className="text-slate-500 text-base">
 Everything you need to know before taking the next step.
 </p>
 </div>

 <div className="space-y-3">
 {faqs.map((faq, index) => (
 <div
 key={index}
 className={`border rounded-xl overflow-hidden transition-all duration-200 ${openIndex === index ? 'border-blue-200 ' : 'border-slate-100'}`}
 >
 <button
 onClick={() => setOpenIndex(openIndex === index ? null : index)}
 className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
 >
 <span className="text-sm md:text-base font-semibold text-slate-900 pr-6">
 {faq.q}
 </span>
 <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-400'}`}>
 {openIndex === index
 ? <ChevronUp size={14} />
 : <ChevronDown size={14} />
 }
 </div>
 </button>

 {openIndex === index && (
 <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
 {faq.a}
 </div>
 )}
 </div>
 ))}
 </div>

 <div className="mt-10 text-center">
 <p className="text-slate-500 text-sm mb-4">Still have questions? We're happy to help.</p>
 <a
 href="/contact"
 className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors text-sm"
 >
 Talk to a Counselor
 </a>
 </div>
 </div>
 </section>
 );
};

export default FAQ;