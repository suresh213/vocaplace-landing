import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
 return (
 <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

 {/* Brand */}
 <div className="col-span-2 md:col-span-1">
 <div className="flex items-center gap-2 mb-4">
 <Image src="/logo.jpeg"alt="Vocaplace"width={36} height={36} className="rounded-full object-contain bg-white"/>
 <span className="text-lg font-bold text-white">Vocaplace</span>
 </div>
 <p className="text-slate-400 text-sm leading-relaxed mb-5">
 India's #1 Pay After Placement digital marketing academy. 
 Learn, get placed, then pay — zero financial risk.
 </p>
 <div className="flex items-center gap-3">
 <a href="#"aria-label="Instagram"className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors">
 <Instagram size={15} />
 </a>
 <a href="#"aria-label="LinkedIn"className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors">
 <Linkedin size={15} />
 </a>
 <a href="#"aria-label="YouTube"className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors">
 <Youtube size={15} />
 </a>
 </div>
 </div>

 {/* Programs */}
 <div>
 <h4 className="font-bold text-white mb-5 text-sm">Programs</h4>
 <ul className="space-y-3 text-sm">
 <li><Link href="/courses"className="hover:text-white transition-colors">All Programs</Link></li>
 <li><Link href="/courses/digital-marketing-mastery"className="hover:text-white transition-colors">Digital Marketing Mastery</Link></li>
 <li><a href="https://student.vocaplace.com"className="hover:text-white transition-colors">Student Portal</a></li>
 </ul>
 </div>

 {/* Company */}
 <div>
 <h4 className="font-bold text-white mb-5 text-sm">Company</h4>
 <ul className="space-y-3 text-sm">
 <li><Link href="/about"className="hover:text-white transition-colors">About Us</Link></li>
 <li><Link href="/blog"className="hover:text-white transition-colors">Blog & Insights</Link></li>
 <li><Link href="/hire-talent"className="hover:text-white transition-colors">Hire Our Graduates</Link></li>
 <li><Link href="/contact"className="hover:text-white transition-colors">Contact Us</Link></li>
 </ul>
 </div>

 {/* Contact */}
 <div>
 <h4 className="font-bold text-white mb-5 text-sm">Contact Us</h4>
 <ul className="space-y-3 text-sm">
 <li className="flex items-center gap-2">
 <Phone size={14} className="text-blue-400 shrink-0"/>
 <a href="tel:+918527647899"className="hover:text-white transition-colors">+91 85276 47899</a>
 </li>
 <li className="flex items-center gap-2">
 <Mail size={14} className="text-blue-400 shrink-0"/>
 <a href="mailto:hello@vocaplace.com"className="hover:text-white transition-colors">hello@vocaplace.com</a>
 </li>
 </ul>
 </div>

 </div>

 <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
 <p>© 2026 Vocaplace Technologies Pvt. Ltd. All rights reserved.</p>
 <div className="flex gap-6">
 <a href="#"className="hover:text-white transition-colors">Privacy Policy</a>
 <a href="#"className="hover:text-white transition-colors">Terms of Service</a>
 <a href="#"className="hover:text-white transition-colors">Refund Policy</a>
 </div>
 </div>
 </div>
 </footer>
 );
};

export default Footer;