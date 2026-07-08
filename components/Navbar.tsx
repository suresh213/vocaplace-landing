"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
 const [isOpen, setIsOpen] = useState(false);
 const pathname = usePathname();

 const isActive = (path: string) => pathname === path;

 return (
 <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200">
 <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
 
 {/* Logo */}
 <Link href="/"className="flex items-center gap-2 select-none z-50">
 <Image src="/logo.jpeg"alt="Vocaplace"width={36} height={36} className="rounded-full object-contain"/>
 <span className="text-lg font-bold text-slate-900">Vocaplace</span>
 </Link>

 {/* Desktop Links */}
 <div className="hidden lg:flex items-center gap-6">
 <Link 
 href="/"
 className={`text-xs font-semibold transition-colors ${isActive('/') ? 'text-blue-900' : 'text-slate-500 hover:text-blue-900'}`}
 >
 Home
 </Link>
 
 <Link 
 href="/courses"
 className={`text-xs font-semibold transition-colors ${isActive('/courses') || (pathname && pathname.startsWith('/courses')) ? 'text-blue-900' : 'text-slate-500 hover:text-blue-900'}`}
 >
 Courses
 </Link>

 <Link 
 href="/hire-talent"
 className={`text-xs font-semibold transition-colors ${isActive('/hire-talent') || isActive('/hiring-managers') ? 'text-blue-900' : 'text-slate-500 hover:text-blue-900'}`}
 >
 Hire Talent
 </Link>

 <Link 
 href="/about"
 className={`text-xs font-semibold transition-colors ${isActive('/about') ? 'text-blue-900' : 'text-slate-500 hover:text-blue-900'}`}
 >
 About
 </Link>

 <Link 
 href="/blog"
 className={`text-xs font-semibold transition-colors ${isActive('/blog') || (pathname && pathname.startsWith('/blog')) ? 'text-blue-900' : 'text-slate-500 hover:text-blue-900'}`}
 >
 Blog
 </Link>
 <Link 
   href="/mentor/wajed"
   className={`text-xs font-semibold transition-colors ${isActive('/mentor/wajed') ? 'text-blue-900' : 'text-slate-500 hover:text-blue-900'}`}
 >
   Our Mentor
 </Link>
 </div>

 {/* Desktop Actions */}
 <div className="hidden lg:flex items-center gap-4">
 <Link href="/contact"className="text-xs font-semibold text-slate-500 hover:text-blue-900">Contact</Link>
 <a href="https://student.vocaplace.com"className="flex items-center h-9 px-5 bg-blue-900 text-white text-xs font-semibold hover:bg-blue-800 transition-colors rounded-lg">
 Get Started Free
 </a>
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
 <Link href="/"onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
 Home
 </Link>
 <Link href="/courses"onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
 Courses
 </Link>
 <Link href="/hire-talent"onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
 Hire Talent
 </Link>
 <Link href="/about"onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
 About
 </Link>
 <Link href="/blog"onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
 Blog
 </Link>
 <Link href="/mentor/wajed" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
 Our Mentor
 </Link>
 <Link href="/contact"onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-900 py-3 border-b border-slate-100">
 Contact
 </Link>
 </div>
 
 <div className="mt-auto space-y-3">
 <a href="https://student.vocaplace.com"className="block text-center w-full py-3 bg-blue-900 text-white text-sm font-semibold rounded-lg">
 Get Started Free
 </a>
 </div>
 </div>
 </div>
 </nav>
 );
};

export default Navbar;
