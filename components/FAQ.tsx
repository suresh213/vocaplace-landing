"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "How does the Pay After Placement model work step by step?",
    a: "Under our Pay After Placement model, your core tuition is completely deferred until you land a job. You undergo 120 days of live training under Victoria University faculty Wajed Sk, manage real Google & Meta ad budgets, and build a verified client portfolio. Once you receive an offer letter of at least ₹4.0–8.0 LPA and your first month salary is credited, you pay a transparent flat ₹50,000 fee in easy monthly installments (₹5,000/mo over 10 months). If you do not get placed within 90 days, you pay ₹0 in tuition."
  },
  {
    q: "Is Pay After Placement in digital marketing real or fake? How does Vocaplace guarantee it?",
    a: "Pay After Placement is a completely legitimate, legally binding educational model (known globally as an Income Share Agreement). Unlike institutes that disguise high-interest bank loans as Pay After Placement, Vocaplace operates with strict transparency: no third-party bank loan contracts, a contractually guaranteed ₹4.0 LPA minimum placement threshold, and direct live mentorship under recognized university faculty with 20+ years of growth experience."
  },
  {
    q: "What happens if I don't get placed after completing the course?",
    a: "If you attend all scheduled sessions, complete assignments, and participate in interview drives but do not secure a job offer paying at least ₹4.0 LPA within 90 days of graduation, your tuition obligation is ₹0. Our contractual 100% Job Guarantee means Vocaplace bears the financial responsibility, not you."
  },
  {
    q: "What is the minimum salary (CTC) threshold before repayment starts?",
    a: "The minimum placement threshold is contractually set at ₹4.0 LPA. The batch average starting package is ₹6.5 LPA, with top performance marketing roles reaching ₹8.5 LPA. If an offer is below ₹4.0 LPA or is an unpaid internship, the Income Share Agreement does not activate."
  },
  {
    q: "How do Vocaplace course fees compare to Kraftshala's ₹1,75,820 fees?",
    a: "Kraftshala's Marketing Launchpad charges ₹1,49,000 + 18% GST (totaling ₹1,75,820) and requires an upfront payment or mandatory bank loan. In contrast, Vocaplace charges a transparent flat ₹50,000 fee once placed - saving you over ₹1,25,000. Your core tuition is completely deferred until placement, with zero percentage deductions from your salary."
  },
  {
    q: "Are there any hidden NBFC bank loans, interest charges, or penalty clauses?",
    a: "No. Unlike legacy edtech providers who register students for third-party bank loans disguised as ISAs that damage credit scores if delayed, Vocaplace manages its outcome contracts directly. There are no compound interest fees, no bank debt obligations, and no repayment triggers unless you are placed in a role paying ₹4–8 LPA."
  },
  {
    q: "Do I need prior marketing or technical experience to join?",
    a: "Not at all. The program is designed from the ground up for fresh graduates (BBA, B.Com, B.Tech, BA, B.Sc, BCA), non-technical students, and working professionals (such as customer support, sales, or BPO agents) transitioning into marketing. Over 65% of our placed students had zero marketing background before enrolling."
  },
  {
    q: "What starting salary can freshers realistically expect in digital marketing in 2026?",
    a: "Our graduates typically earn between ₹4.0 LPA and ₹8.5 LPA, with a verified batch average of ₹6.5 LPA. Performance marketers trained in Meta Ads, Google Ads (PMax), GA4, and AI automation command 40–60% higher salaries than generalist marketers."
  },
  {
    q: "Who are the hiring partners and companies recruiting Vocaplace graduates?",
    a: "We partner with 200+ digital marketing agencies, high-growth D2C brands, and tech companies across Bangalore, Mumbai, Delhi NCR, and remote. Our hiring network includes top performance marketing agencies (Performics, Dentsu, Schbang, Merkle, iProspect) as well as direct consumer brands."
  },
  {
    q: "Can working professionals or college students attend live classes?",
    a: "Yes! Vocaplace offers flexible evening batches (8:00 PM – 10:00 PM IST) and dedicated weekend interactive workshops. All live interactive sessions are recorded and available on your student portal with lifetime access so you can balance existing jobs or college schedules."
  }
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