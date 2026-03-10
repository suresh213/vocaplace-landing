import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Activity, ArrowRight, CheckCircle, AlertTriangle, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogLine {
  id: number;
  text: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'process';
}

const LOG_SEQUENCE = [
  { text: "INITIALIZING_CORE_AGENTS_V4.2...", type: 'info', delay: 800 },
  { text: "CONNECTING_TO_SEARCH_CONSOLE_API...", type: 'process', delay: 1200 },
  { text: "CONNECTION_ESTABLISHED [24ms latency]", type: 'success', delay: 1000 },
  { text: "SCANNING_SITEMAP: https://seobricks.com/sitemap.xml", type: 'info', delay: 1500 },
  { text: "FOUND: 1,402 indexable pages", type: 'info', delay: 800 },
  { text: "DETECTING_ANOMALIES...", type: 'process', delay: 2000 },
  { text: "WARN: Duplicate H1 tag detected on /pricing", type: 'warning', delay: 1000 },
  { text: "AUTO_FIX: Patching components/Pricing.tsx...", type: 'process', delay: 1500 },
  { text: "PATCH_APPLIED: H1 issue resolved", type: 'success', delay: 1000 },
  { text: "ANALYZING_KEYWORD_GAP [Target: competitor-x.com]", type: 'info', delay: 2000 },
  { text: "OPPORTUNITY: 'autonomous seo tools' (Vol: 2.4k, KD: 14%)", type: 'success', delay: 1500 },
  { text: "AGENT_ACTION: Drafting new content cluster...", type: 'process', delay: 3000 },
  { text: "CONTENT_GENERATED: 4 new articles queued for review", type: 'success', delay: 1500 },
  { text: "SYSTEM_SLEEP: Monitoring for rank changes...", type: 'info', delay: 5000 },
];

const TerminalSimulation: React.FC = () => {
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: any;

    const runSequence = () => {
      const step = LOG_SEQUENCE[currentIndex % LOG_SEQUENCE.length];
      
      // Reset if looping back to start
      if (currentIndex > 0 && currentIndex % LOG_SEQUENCE.length === 0) {
        setLogs([]);
      }

      timeout = setTimeout(() => {
        setLogs(prev => [...prev, { 
          id: Date.now(), 
          text: step.text, 
          type: step.type as any 
        }]);
        setCurrentIndex(prev => prev + 1);
      }, step.delay);
    };

    runSequence();

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const getLogColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      case 'process': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-24 bg-black border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Marketing Content */}
                <div>
                    <div className="inline-flex items-center gap-2 text-green-500 border border-green-500/30 bg-green-500/10 px-3 py-1 mb-6 rounded-full">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">System Active</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter leading-tight">
                        Command Your<br />
                        <span className="text-gray-500">SEO Workforce.</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Stop managing tools. Start managing results. Our autonomous agents monitor your logs, fix technical errors, and publish content while you sleep.
                    </p>

                    <div className="space-y-6 mb-10">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                <Terminal size={20} className="text-white" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1">Root Access Control</h4>
                                <p className="text-gray-500 text-xs">Direct terminal access to your site's SEO infrastructure.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                <Activity size={20} className="text-white" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1">Self-Healing</h4>
                                <p className="text-gray-500 text-xs">Agents detect drops and auto-correct strategy in real-time.</p>
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/agents"
                        className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
                    >
                        Enter Agent Terminal <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Raw Terminal Simulation */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 blur-xl opacity-20 -z-10"></div>
                    
                    <div className="border border-white/20 bg-[#0a0a0a] sharp-shadow h-[500px] flex flex-col font-mono text-xs md:text-sm">
                        {/* Terminal Header */}
                        <div className="bg-[#111] border-b border-white/10 px-4 py-2 flex items-center gap-2 select-none">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="flex-1 text-center text-gray-500 text-[10px]">root@seobricks-core:~</div>
                        </div>

                        {/* Terminal Body */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar bg-black font-mono">
                            <div className="text-gray-500 mb-4">
                                Last login: {new Date().toUTCString()} on ttys001
                                <br />
                                Type "help" for a list of commands.
                            </div>
                            
                            {logs.map((log) => (
                                <div key={log.id} className="flex gap-2">
                                    <span className="text-gray-600 shrink-0">➜</span>
                                    <span className={`${getLogColor(log.type)} break-all`}>
                                        {log.text}
                                    </span>
                                </div>
                            ))}
                            
                            {/* Blinking Cursor Line */}
                            <div className="flex gap-2 items-center">
                                <span className="text-green-500 shrink-0">➜</span>
                                <span className="w-2 h-4 bg-gray-500 animate-pulse"></span>
                            </div>
                        </div>

                        {/* Footer Status */}
                        <div className="bg-[#111] border-t border-white/10 px-4 py-2 flex justify-between text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                             <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Daemon: Running</span>
                             <span>Mem: 42%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TerminalSimulation;