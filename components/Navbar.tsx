"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronDown, Users, GraduationCap, Info } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useApplyModal } from './ApplyModalContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useApplyModal();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none z-50 shrink-0">
          <Image 
            src="/logo.jpeg" 
            alt="Vocaplace" 
            width={34} 
            height={34} 
            className="rounded-full object-contain"
          />
          <span className="text-lg font-bold text-slate-900 tracking-tight">Vocaplace</span>
        </Link>

        {/* Desktop Links (Focused & Uncongested) */}
        <div className="hidden lg:flex items-center gap-7">
          <Link 
            href="/pay-after-placement"
            className={`text-xs font-bold transition-colors ${isActive('/pay-after-placement') ? 'text-blue-900 font-extrabold' : 'text-slate-700 hover:text-blue-900'}`}
          >
            Pay After Placement
          </Link>
          
          <Link 
            href="/courses"
            className={`text-xs font-semibold transition-colors ${isActive('/courses') || (pathname && pathname.startsWith('/courses')) ? 'text-blue-900 font-bold' : 'text-slate-600 hover:text-blue-900'}`}
          >
            Courses
          </Link>

          <Link 
            href="/compare"
            className={`text-xs font-semibold transition-colors ${isActive('/compare') ? 'text-blue-900 font-bold' : 'text-slate-600 hover:text-blue-900'}`}
          >
            Compare
          </Link>

          <Link 
            href="/blog"
            className={`text-xs font-semibold transition-colors ${isActive('/blog') || (pathname && pathname.startsWith('/blog')) ? 'text-blue-900 font-bold' : 'text-slate-600 hover:text-blue-900'}`}
          >
            Blog
          </Link>

          <Link 
            href="/hire-talent"
            className={`text-xs font-semibold transition-colors ${isActive('/hire-talent') || isActive('/hiring-managers') ? 'text-blue-900 font-bold' : 'text-slate-600 hover:text-blue-900'}`}
          >
            Hire Talent
          </Link>

          {/* Clean "More" Dropdown for Secondary Links */}
          <div className="relative group">
            <button 
              type="button"
              className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-blue-900 transition-colors py-2 cursor-pointer"
            >
              <span>More</span>
              <ChevronDown size={13} className="text-slate-400 group-hover:text-blue-900 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute top-full right-0 pt-2 hidden group-hover:block z-50">
              <div className="bg-white border border-slate-200 rounded-xl shadow-xl py-2 w-52 text-left">
                <Link 
                  href="/mentor/wajed" 
                  className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors"
                >
                  <Users size={14} className="text-blue-900 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">Our Mentor</div>
                    <div className="text-[10px] text-slate-400 font-normal">Wajed Sk (Victoria Univ)</div>
                  </div>
                </Link>
                <Link 
                  href="/career" 
                  className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors"
                >
                  <GraduationCap size={14} className="text-amber-600 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">Career Tracks</div>
                    <div className="text-[10px] text-slate-400 font-normal">By Degree &amp; Background</div>
                  </div>
                </Link>
                <div className="my-1 border-t border-slate-100" />
                <Link 
                  href="/about" 
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors"
                >
                  <Info size={14} className="text-slate-400 shrink-0" />
                  <span>About Vocaplace</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link href="/contact" className="text-xs font-semibold text-slate-500 hover:text-blue-900 transition-colors">
            Contact
          </Link>
          <button 
            type="button"
            onClick={() => openModal({ source: 'Navbar Desktop' })}
            className="flex items-center h-9 px-5 bg-blue-900 text-white text-xs font-semibold hover:bg-blue-800 transition-colors rounded-lg cursor-pointer shadow-sm"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden z-50">
          <button 
            type="button"
            onClick={() => setIsOpen(!isOpen)} 
            className="text-slate-900 p-2 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 px-6 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-1">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
              Home
            </Link>
            <Link href="/pay-after-placement" onClick={() => setIsOpen(false)} className="text-sm font-bold text-blue-900 py-3 border-b border-slate-100">
              Pay After Placement
            </Link>
            <Link href="/courses" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
              Courses
            </Link>
            <Link href="/compare" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
              Compare Institutes
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
              Blog
            </Link>
            <Link href="/hire-talent" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
              Hire Talent
            </Link>
            <Link href="/mentor/wajed" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
              Our Mentor (Wajed Sk)
            </Link>
            <Link href="/career" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
              Career Tracks
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
              About Vocaplace
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
              Contact
            </Link>
          </div>
          
          <div className="mt-8 space-y-3">
            <button 
              type="button"
              onClick={() => { setIsOpen(false); openModal({ source: 'Navbar Mobile' }); }}
              className="block text-center w-full py-3.5 bg-blue-900 text-white text-sm font-bold rounded-xl cursor-pointer shadow-md"
            >
              Apply Now (Pay After Placement)
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
