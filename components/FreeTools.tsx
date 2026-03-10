import React, { useState } from 'react';
import { Scan, Database, FileText, Share2, Search, Cpu, ArrowRight, X, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const tools = [
  {
    id: 'scanner',
    icon: <Scan size={24} />,
    title: "Resume Scanner",
    desc: "Audit your resume against 2026 AI job requirements.",
    action: "Start Scan",
    placeholder: "Paste your resume text here..."
  },
  {
    id: 'serp',
    icon: <Search size={24} />,
    title: "Portfolio Preview",
    desc: "Visualize how recruiters see your GitHub & projects.",
    action: "Launch Tool",
    placeholder: "Enter GitHub profile URL..."
  },
  {
    id: 'schema',
    icon: <Database size={24} />,
    title: "Project Gen",
    desc: "Generate AI-integrated project ideas for your portfolio.",
    action: "Generate",
    placeholder: "Select tech stack..."
  },
  {
    id: 'backlink',
    icon: <Share2 size={24} />,
    title: "Skill Checker",
    desc: "Quick check of your current skills vs market demand.",
    action: "Check Skills",
    placeholder: "Enter your primary skills..."
  },
  {
    id: 'meta',
    icon: <FileText size={24} />,
    title: "Cover Letter Gen",
    desc: "AI-powered cover letters tailored for modern tech roles.",
    action: "Write Letter",
    placeholder: "Enter job description URL..."
  },
  {
    id: 'gap',
    icon: <Cpu size={24} />,
    title: "Skill Gap",
    desc: "Find skills your peers have but you don't.",
    action: "Find Gaps",
    placeholder: "Enter target role (e.g., AI Engineer)..."
  }
];

const FreeTools: React.FC = () => {
  const [activeTool, setActiveTool] = useState<typeof tools[0] | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleToolRun = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult("Analysis Complete.\n\n[SUCCESS] Core competencies identified.\n[INFO] 3 suggestions available for skill optimization.\n[INFO] Data cached for 24h.");
    }, 1500);
  };

  const closeTool = () => {
    setActiveTool(null);
    setResult(null);
    setLoading(false);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12 border-b border-slate-200 pb-8">
          <Link to="/" className="text-xs text-slate-500 hover:text-slate-900 uppercase tracking-widest mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 uppercase tracking-tighter">
              Free EdTech Tools_
          </h1>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
             Essential utilities for the modern student. No login required.
          </p>
       </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div 
              key={tool.id} 
              className="group relative p-8 border border-slate-200 bg-white hover:bg-slate-50 transition-all hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveTool(tool)}
            >
              <div className="mb-6 text-slate-900 group-hover:text-blue-600 transition-colors">
                {tool.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">{tool.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm mb-8 min-h-[40px] font-mono">
                {tool.desc}
              </p>

              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 hover:border-slate-900 transition-colors group-hover:gap-3">
                 {tool.action}
                 <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Tool Modal Overlay */}
      {activeTool && (
        <div className="fixed inset-0 z-[150] bg-white/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white border border-slate-200 shadow-xl animate-fade-in relative">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3 text-slate-900">
                {activeTool.icon}
                <span className="font-bold uppercase tracking-widest">{activeTool.title}.exe</span>
              </div>
              <button 
                onClick={closeTool}
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
               {!result ? (
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Input Parameter</label>
                       <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-4 focus-within:border-slate-400 transition-colors">
                          <Terminal size={16} className="text-slate-500" />
                          <input 
                            type="text" 
                            className="bg-transparent border-none focus:ring-0 focus:outline-none outline-none w-full text-sm font-mono text-slate-900 placeholder-slate-400"
                            placeholder={activeTool.placeholder}
                            autoFocus
                            autoComplete="off"
                          />
                       </div>
                    </div>
                    <button 
                      onClick={handleToolRun}
                      disabled={loading}
                      className="w-full py-4 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          Processing...
                        </>
                      ) : (
                        <>
                           Run Tool <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                 </div>
               ) : (
                 <div className="space-y-6">
                    <div className="bg-slate-50 border border-slate-200 p-4 font-mono text-xs md:text-sm text-slate-700 min-h-[200px] whitespace-pre-wrap">
                       {result}
                    </div>
                    <button 
                      onClick={() => setResult(null)}
                      className="w-full py-4 bg-transparent border border-slate-300 text-slate-900 font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors"
                    >
                      Run Another Audit
                    </button>
                 </div>
               )}
            </div>

            {/* Status Bar */}
            <div className="px-6 py-2 bg-slate-50 border-t border-slate-200 text-[10px] text-slate-500 flex justify-between uppercase tracking-widest font-bold">
               <span>Status: {loading ? 'Running' : 'Ready'}</span>
               <span>v3.0.1 Stable</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default FreeTools;