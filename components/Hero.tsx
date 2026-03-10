import React from 'react';
import { ArrowRight, Sparkles, GraduationCap, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col pt-24 pb-16 bg-white border-b border-slate-200 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none opacity-40"></div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 w-full z-10 relative flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left: Copy */}
          <div className="space-y-6">
            
            {/* Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium uppercase tracking-wide"
            >
              <Sparkles size={12} />
              <span>Preparing for the 2026 AI Era</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]"
            >
              Master AI.<br />
              <span className="text-slate-500">Shape the Future.</span>
            </motion.h1>
            
            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              The world is rapidly adapting to AI. We provide modern curriculum, detailed OS integrations, and the latest AI tools to ensure students, colleges, and hiring managers thrive in 2026 and beyond.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link to="/courses" className="h-11 px-6 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 border border-slate-900">
                Explore Courses
                <ArrowRight size={14} />
              </Link>
              <Link to="/colleges" className="h-11 px-6 bg-white text-slate-700 border border-slate-300 text-sm font-medium hover:bg-slate-50 transition-colors">
                For Colleges
              </Link>
            </motion.div>
            
            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200"
            >
              <div>
                <div className="flex items-center gap-2 text-slate-900 mb-1">
                  <GraduationCap className="w-4 h-4 text-slate-700" />
                  <span className="text-xl font-bold">50k+</span>
                </div>
                <div className="text-xs text-slate-500">Students Certified</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-slate-900 mb-1">
                  <Building className="w-4 h-4 text-slate-700" />
                  <span className="text-xl font-bold">200+</span>
                </div>
                <div className="text-xs text-slate-500">College Partners</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-slate-900 mb-1">
                  <Users className="w-4 h-4 text-slate-700" />
                  <span className="text-xl font-bold">500+</span>
                </div>
                <div className="text-xs text-slate-500">Hiring Managers</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full relative z-10"
          >
            <div className="relative border border-slate-200 bg-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Students collaborating on modern AI tools" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm border border-slate-200 p-4">
                  <p className="text-sm text-slate-800">"The curriculum perfectly aligns with our 2026 hiring needs."</p>
                  <p className="text-xs text-slate-500 mt-1">— Tech Lead at Fortune 500</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
