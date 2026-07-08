import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Globe, Award, BookOpen, Users, Star, Building2, CheckCircle, Check, ArrowRight } from 'lucide-react';

const modules = [
"Digital Strategy","AI in Marketing","Marketing Analytics",
"Marketing Automation","Performance Marketing","Brand Strategy"
];

const MentorSection: React.FC = () => {
 return (
 <section className="py-20 bg-slate-50 border-y border-slate-100">
 <div className="max-w-5xl mx-auto px-6">
 <div className="text-center mb-12">
 <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-900 text-sm font-semibold rounded-full mb-5">
 Meet Your Lead Instructor
 </span>
 <h2 className="text-3xl font-bold text-slate-900 mb-4">
 Learn Directly from a Global Industry Expert
 </h2>
 <p className="text-slate-500 text-lg max-w-2xl mx-auto">
 Your curriculum is designed and delivered by one of India's top marketing educators with 20+ years of experience.
 </p>
 </div>

 <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 grid lg:grid-cols-5">
 {/* Photo */}
 <div className="lg:col-span-2 relative min-h-[320px] lg:min-h-full">
 <Image
 src="/mentor.jpeg"
 alt="Wajed Sk — Lead Instructor at Vocaplace"
 fill
 className="object-cover object-top"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent flex flex-col justify-end p-8">
 <div className="flex items-center gap-1 mb-2">
 {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400"/>)}
 <span className="text-white text-sm font-bold ml-1">4.9/5</span>
 </div>
 <h3 className="text-2xl font-bold text-white mb-1">Wajed Sk</h3>
 <p className="text-blue-200 text-sm">Chief Digital Marketing Instructor</p>
 </div>
 </div>

 {/* Details */}
 <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
 <p className="text-slate-600 text-sm leading-relaxed mb-6">
 With over <strong>20 years of real-world experience</strong> in Digital Transformation, Performance Marketing, and Brand Strategy, Wajed Sk brings exceptional industry expertise and classroom passion to every session. He currently serves as <strong>Online Faculty & Digital Transformation Consultant at Victoria University, Australia</strong> — one of only three professionals from India in this role.
 </p>
 
 <div className="grid sm:grid-cols-2 gap-3 mb-8">
 {[
 '20+ years marketing leadership',
 '5,000+ students trained',
 'Guest lecturer at IIM & Google',
 'Victoria University, Australia',
 'AI-driven marketing curriculum',
 'Corporate trainer for Accenture',
 ].map((item, i) => (
 <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
 <Check size={16} className="text-green-500 shrink-0 mt-0.5"/>
 <span className="leading-snug">{item}</span>
 </div>
 ))}
 </div>

 {/* Extra Content: Modules taught */}
 <div className="mb-6 pt-6 border-t border-slate-100">
 <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Core Expertise & Subjects</h4>
 <div className="flex flex-wrap gap-2">
 {modules.map((mod, i) => (
 <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-800 text-xs font-semibold rounded-lg">
 {mod}
 </span>
 ))}
 </div>
 </div>

 <Link href="/mentor/wajed" className="inline-flex items-center gap-2 text-blue-900 font-bold text-sm hover:text-blue-700 transition-colors mt-auto group">
 View Full Profile
 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>
 </div>
 </div>
 </section>
 );
};

export default MentorSection;
