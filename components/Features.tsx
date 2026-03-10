import React from 'react';
import { BookOpen, Code, Users, Briefcase, Bot, Award } from 'lucide-react';

const tools = [
  {
    icon: <BookOpen size={24} />,
    title: "Industry Curriculum",
    desc: "Learn what companies actually use. Our curriculum is constantly updated based on industry feedback.",
    stat: "Updated"
  },
  {
    icon: <Code size={24} />,
    title: "Project-Based Learning",
    desc: "Build real-world applications. Graduate with a portfolio of projects that demonstrate your skills.",
    stat: "Hands-on"
  },
  {
    icon: <Bot size={24} />,
    title: "24/7 AI Mentor",
    desc: "Get instant help when you're stuck. Our AI mentor explains concepts, reviews code, and guides you.",
    stat: "Always On"
  },
  {
    icon: <Users size={24} />,
    title: "Expert Mentorship",
    desc: "Learn from industry professionals who have built scalable systems at top tech companies.",
    stat: "1-on-1"
  },
  {
    icon: <Briefcase size={24} />,
    title: "Career Support",
    desc: "Resume reviews, mock interviews, and soft skills training to make you job-ready.",
    stat: "Placement"
  },
  {
    icon: <Award size={24} />,
    title: "Certification",
    desc: "Earn a verified certificate upon completion to showcase your achievement to employers.",
    stat: "Verified"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-x border-slate-200">
          {tools.map((tool, i) => (
            <div key={i} className="group relative p-10 hover:bg-slate-50 transition-colors border-b lg:border-b-0 border-slate-200 last:border-b-0">
              <div className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest border border-slate-200 px-2 py-1 text-slate-500 group-hover:text-slate-900 group-hover:border-slate-900 transition-colors">
                {tool.stat}
              </div>
              
              <div className="mb-8 text-slate-900">
                {tool.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{tool.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-mono">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mid-section Stats */}
      <div className="border-t border-slate-200 bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
                "The curriculum is exactly what we look for in new hires."
            </h2>
            <div className="flex justify-center items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                <span className="text-white">Sarah Chen</span>
                <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                <span>VP of Engineering at TechFlow</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;