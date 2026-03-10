import React from 'react';
import { Building2, Users, Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Workflow: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter uppercase">
            Your Dedicated Placement Team_
          </h2>
          <p className="text-slate-600 max-w-2xl text-lg font-mono">
             We don't just teach; we bridge the gap between education and employment. Our ecosystem connects colleges directly with top hiring managers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[
             {
               icon: <Building2 className="text-slate-900" size={32} />,
               step: "01",
               title: "For Colleges",
               desc: "We act as your extended placement cell. We offer both online and offline classes, upgrading your campus to 2026 AI standards."
             },
             {
               icon: <Users className="text-slate-900" size={32} />,
               step: "02",
               title: "For Students",
               desc: "Get hands-on experience with modern OS and AI tools. Build a portfolio that makes you irresistible to modern tech companies."
             },
             {
               icon: <Briefcase className="text-slate-900" size={32} />,
               step: "03",
               title: "For Hiring Managers",
               desc: "Access a verified pool of candidates who are already trained on the exact AI tools and workflows your company uses today."
             }
           ].map((item, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
                className="relative p-6 border border-slate-200 bg-slate-50 group hover:bg-white transition-colors overflow-hidden"
             >
                <div className="absolute -top-4 -right-4 text-8xl font-bold text-slate-200 group-hover:text-slate-100 transition-colors select-none font-mono">
                  {item.step}
                </div>
                <div className="mb-6 relative z-10 bg-white w-16 h-16 border border-slate-900 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10 font-mono text-sm">
                  {item.desc}
                </p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;