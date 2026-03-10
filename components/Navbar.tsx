import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 select-none z-50">
          <div className="w-7 h-7 bg-slate-900 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">Growthbricks</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-xs font-semibold uppercase tracking-wide transition-colors ${isActive('/') ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Home
          </Link>
          
          <Link 
            to="/courses" 
            className={`text-xs font-semibold uppercase tracking-wide transition-colors ${isActive('/courses') ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Courses
          </Link>

          <Link 
            to="/certifications" 
            className={`text-xs font-semibold uppercase tracking-wide transition-colors ${isActive('/certifications') ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Certifications
          </Link>

          <Link 
            to="/colleges" 
            className={`text-xs font-semibold uppercase tracking-wide transition-colors ${isActive('/colleges') || isActive('/placement-support') ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
          >
            For Colleges
          </Link>

          <Link 
            to="/hire-talent" 
            className={`text-xs font-semibold uppercase tracking-wide transition-colors ${isActive('/hire-talent') || isActive('/hiring-managers') ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Hire Talent
          </Link>

          <Link 
            to="/about" 
            className={`text-xs font-semibold uppercase tracking-wide transition-colors ${isActive('/about') ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
          >
            About
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="text-xs font-semibold uppercase tracking-wide text-slate-500 hover:text-slate-900">Contact</Link>
          <button className="h-9 px-5 bg-slate-900 text-white text-xs font-semibold uppercase tracking-wide hover:bg-slate-800 transition-colors border border-slate-900">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          <div className="flex flex-col gap-1">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-sm font-semibold uppercase tracking-wide text-slate-900 py-3 border-b border-slate-100">
              Home
            </Link>
            <Link to="/courses" onClick={() => setIsOpen(false)} className="text-sm font-semibold uppercase tracking-wide text-slate-900 py-3 border-b border-slate-100">
              Courses
            </Link>
            <Link to="/certifications" onClick={() => setIsOpen(false)} className="text-sm font-semibold uppercase tracking-wide text-slate-900 py-3 border-b border-slate-100">
              Certifications
            </Link>
            <Link to="/colleges" onClick={() => setIsOpen(false)} className="text-sm font-semibold uppercase tracking-wide text-slate-900 py-3 border-b border-slate-100">
              For Colleges
            </Link>
            <Link to="/hire-talent" onClick={() => setIsOpen(false)} className="text-sm font-semibold uppercase tracking-wide text-slate-900 py-3 border-b border-slate-100">
              Hire Talent
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-sm font-semibold uppercase tracking-wide text-slate-900 py-3 border-b border-slate-100">
              About
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-sm font-semibold uppercase tracking-wide text-slate-900 py-3 border-b border-slate-100">
              Contact
            </Link>
          </div>
          
          <div className="mt-auto space-y-3">
            <button className="w-full py-3 bg-slate-900 text-white text-sm font-semibold uppercase tracking-wide border border-slate-900">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
