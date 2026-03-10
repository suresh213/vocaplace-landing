import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, Terminal, Sparkles, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: number;
  sender: 'user' | 'agent';
  text: React.ReactNode;
  isTyping?: boolean;
}

const SCRIPT = [
  { sender: 'user', text: "Audit student progress for OS integration course.", delay: 1000 },
  { sender: 'agent', text: "Scanning student repositories...", delay: 2000, isTyping: true },
  { 
    sender: 'agent', 
    text: (
      <div className="space-y-2">
        <div className="text-blue-600 font-bold">&gt; SCAN COMPLETE</div>
        <div className="bg-slate-50 p-3 rounded-none border border-slate-200 text-[10px] font-mono">
          <div className="text-red-600">[CRITICAL] 12 students missing Docker setup</div>
          <div className="text-amber-600">[WARNING] Low engagement in Kubernetes module</div>
          <div className="text-blue-600">[INFO] 145 assignments submitted</div>
        </div>
      </div>
    ), 
    delay: 2000 
  },
  { sender: 'user', text: "Deploy automated Docker setup guide to struggling students.", delay: 1500 },
  { sender: 'agent', text: "Accessing LMS...", delay: 1500, isTyping: true },
  { 
    sender: 'agent', 
    text: (
      <div className="space-y-2">
        <p>Executing actions:</p>
        <div className="space-y-1 text-[10px] font-mono text-slate-500">
           <div>&gt; PATCHING: course_modules/docker.md... <span className="text-blue-600">DONE</span></div>
           <div>&gt; GENERATING: Step-by-step tutorial... <span className="text-blue-600">DONE</span></div>
           <div>&gt; NOTIFYING: 12 students... <span className="text-blue-600">DONE</span></div>
        </div>
        <p className="text-blue-600 pt-2">All tasks completed successfully.</p>
      </div>
    ), 
    delay: 3000 
  },
  { sender: 'user', text: "Great. Now check placement readiness for batch 2026.", delay: 1500 },
  { sender: 'agent', text: "Initiating placement analysis protocol...", delay: 2000, isTyping: true },
];

const AgentSimulation: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [scriptIndex, setScriptIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: any;

    const playNextStep = () => {
      const step = SCRIPT[scriptIndex % SCRIPT.length];
      
      // If it's a loop restart (index 0), clear messages
      if (scriptIndex % SCRIPT.length === 0 && scriptIndex !== 0) {
        setMessages([]);
      }

      // If step involves typing, show indicator first
      if (step.isTyping) {
        setIsTyping(true);
        timeout = setTimeout(() => {
          setIsTyping(false);
          addMessage(step);
          setScriptIndex(prev => prev + 1);
        }, 1500); // Typing duration
      } else {
        timeout = setTimeout(() => {
           addMessage(step);
           setScriptIndex(prev => prev + 1);
        }, step.delay);
      }
    };

    const addMessage = (step: any) => {
        setMessages(prev => [...prev, { 
            id: Date.now(), 
            sender: step.sender as 'user' | 'agent', 
            text: step.text 
        }]);
    };

    playNextStep();

    return () => clearTimeout(timeout);
  }, [scriptIndex]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link to="/" className="text-xs text-slate-500 hover:text-slate-900 uppercase tracking-widest mb-4 inline-block">← Back to Home</Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">
                AI Mentor Interface_
                </h1>
                <p className="text-slate-500 max-w-2xl text-lg font-mono">
                Direct communication link to your autonomous educational assistant.
                </p>
            </div>
            <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 border border-blue-200">
                <Activity size={16} className="animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">Live Simulation</span>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Sidebar Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-6 border border-slate-200 bg-slate-50">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Terminal size={14} /> Active Processes
                </h3>
                <ul className="space-y-3 font-mono">
                    <li className="flex justify-between items-center text-xs text-slate-600">
                        <span>Student Monitor</span>
                        <span className="text-blue-600">Running</span>
                    </li>
                    <li className="flex justify-between items-center text-xs text-slate-600">
                        <span>Curriculum Sync</span>
                        <span className="text-blue-600">Running</span>
                    </li>
                    <li className="flex justify-between items-center text-xs text-slate-600">
                        <span>Assignment Grader</span>
                        <span className="text-amber-600">Idle</span>
                    </li>
                    <li className="flex justify-between items-center text-xs text-slate-600">
                        <span>Placement Matcher</span>
                        <span className="text-blue-600">Running</span>
                    </li>
                </ul>
            </div>

            <div className="p-6 border border-slate-200 bg-slate-50">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Sparkles size={14} /> Capabilities
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-mono">
                    This agent interface has root access to your educational platform. It can:
                </p>
                <ul className="space-y-2 text-xs text-slate-600 font-mono">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Update course materials</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Grade student submissions</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Identify struggling students</li>
                </ul>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="border border-slate-200 bg-white shadow-sm h-[600px] flex flex-col relative overflow-hidden">
                {/* Overlay for non-interactive feel */}
                <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-transparent via-transparent to-white/50"></div>

                {/* Header */}
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between z-20">
                   <div className="flex items-center gap-3">
                       <Bot size={18} className="text-slate-900" />
                       <span className="text-xs font-bold uppercase tracking-widest text-slate-900">EduAI_Master_Agent</span>
                   </div>
                   <div className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                       <span className="text-[10px] text-slate-500 font-mono">REC</span>
                   </div>
                </div>

                {/* Chat Area */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-white">
                   {messages.map((msg) => (
                       <div key={msg.id} className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''} animate-fade-in-up`}>
                           <div className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-none border ${msg.sender === 'agent' ? 'border-slate-200 bg-slate-50' : 'border-slate-900 bg-slate-900 text-white'}`}>
                               {msg.sender === 'agent' ? <Bot size={20} className="text-slate-900" /> : <User size={20} />}
                           </div>
                           <div className={`max-w-[85%] p-4 text-sm font-mono leading-relaxed border ${msg.sender === 'agent' ? 'border-slate-200 bg-slate-50 text-slate-700' : 'border-slate-200 bg-white text-slate-900'}`}>
                               {msg.text}
                           </div>
                       </div>
                   ))}
                   {isTyping && (
                       <div className="flex gap-4 animate-fade-in-up">
                           <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-none border border-slate-200 bg-slate-50">
                               <Bot size={20} className="text-slate-900" />
                           </div>
                           <div className="p-4 border border-slate-200 bg-slate-50 flex items-center gap-1">
                               <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                               <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                               <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                           </div>
                       </div>
                   )}
                </div>

                {/* Input Area - Disabled/Simulation Look */}
                <div className="p-4 bg-slate-50 border-t border-slate-200 z-20">
                    <div className="flex items-center gap-2 border border-slate-200 bg-white px-4 py-3 opacity-50 cursor-not-allowed">
                        <span className="text-slate-400 font-mono text-sm">&gt;</span>
                        <div className="flex-1 h-5 w-2 bg-slate-300 animate-pulse"></div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AgentSimulation;