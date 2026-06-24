"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter uppercase">
            Industry Feedback
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-mono">
            Hear from the students we've trained, the agencies we've partnered with, and the hiring managers who recruit from our talent pool.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "The 4-month program completely changed my trajectory. I learned more about performance marketing and campaign operations here than in my entire degree.",
              name: "ALEX RIVERA",
              title: "SEO SPECIALIST, BRANDFLOW",
              type: "Student"
            },
            {
              text: "We partnered with Vocaplace to hire growth marketing talent. Their graduates understand modern analytics, campaigns, and AI tools perfectly.",
              name: "SARAH JENKINS",
              title: "HR DIRECTOR, WEBSCALE AGENCY",
              type: "Agency Partner"
            },
            {
              text: "The candidates we hire from this program are day-one ready. They understand the modern AI marketing landscape and require zero onboarding.",
              name: "EMILY RODRIGUEZ",
              title: "VP OF GROWTH, DIGIMEDIA",
              type: "Hiring Manager"
            }
          ].map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 border border-slate-200 hover:bg-slate-50 transition-colors relative"
            >
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-blue-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest border border-blue-900">
                {t.type}
              </div>
              <div className="text-5xl text-slate-200 font-serif mb-4 leading-none h-8">"</div>
              <p className="text-slate-700 text-sm leading-relaxed mb-8 font-mono">
                {t.text}
              </p>
              <div className="border-t border-slate-200 pt-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 border border-blue-900 flex items-center justify-center text-blue-900 font-bold font-mono">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm uppercase tracking-tight">{t.name}</div>
                  <div className="text-slate-500 text-[10px] uppercase tracking-widest mt-0.5">{t.title}</div>
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