import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Code, Database, Layers, Terminal } from 'lucide-react';

const Curriculum = () => {
  const programs = [
    {
      title: "AI & Modern OS Integration",
      duration: "Semester 1",
      os: "Ubuntu 24.04 LTS / Windows 11 Pro",
      tools: ["Cursor", "GitHub Copilot", "Docker", "Kubernetes"],
      description: "Deep dive into modern operating systems tailored for AI workloads. Learn process management, memory allocation, and containerization for deploying AI models efficiently.",
      icon: Monitor
    },
    {
      title: "Machine Learning Infrastructure",
      duration: "Semester 2",
      os: "Linux (Debian/Alpine) for Cloud",
      tools: ["TensorFlow", "PyTorch", "CUDA", "Hugging Face"],
      description: "Understand the hardware-software interface. Configure OS kernels for GPU acceleration and manage distributed computing clusters for training large language models.",
      icon: Cpu
    },
    {
      title: "Autonomous Agents Development",
      duration: "Semester 3",
      os: "ROS 2 / Custom Embedded Linux",
      tools: ["LangChain", "AutoGPT", "OpenAI API", "Pinecone"],
      description: "Build self-governing AI agents. Learn how OS-level scheduling and inter-process communication (IPC) enable complex multi-agent systems to function seamlessly.",
      icon: Code
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-900 text-slate-900 text-xs font-bold uppercase tracking-widest mb-4">
            <Terminal size={14} />
            <span>2026 Curriculum Standards</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter uppercase">
            OS & AI Tool Mastery
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-mono">
            Our curriculum bridges the gap between low-level operating systems and high-level AI applications. Designed specifically for the demands of 2026 hiring managers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-slate-200 p-6 hover:bg-slate-50 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 -z-10 opacity-50 group-hover:scale-110 transition-transform border-l border-b border-slate-200"></div>
              
              <div className="w-14 h-14 bg-slate-900 border border-slate-900 flex items-center justify-center mb-6">
                <program.icon className="w-7 h-7 text-white" />
              </div>
              
              <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest font-mono">{program.duration}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{program.title}</h3>
              <p className="text-slate-600 mb-6 line-clamp-3 font-mono text-sm">{program.description}</p>
              
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Operating System</div>
                  <div className="bg-slate-50 border border-slate-200 px-3 py-2 text-xs font-bold text-slate-900 font-mono uppercase tracking-tight">
                    {program.os}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Modern AI Tools</div>
                  <div className="flex flex-wrap gap-2">
                    {program.tools.map((tool, i) => (
                      <span key={i} className="bg-white text-slate-900 border border-slate-900 px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
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
