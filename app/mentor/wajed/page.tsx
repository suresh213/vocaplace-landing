import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
 Award, Globe, Users, BookOpen, Building2, CheckCircle,
 GraduationCap, Star, Briefcase, ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
 title: 'Meet Wajed Sk — Lead Instructor | Vocaplace Digital Marketing Academy',
 description: 'Learn about Wajed Sk — 20+ years experience, Victoria University Australia faculty, Unacademy Chief Instructor, IIM & Google guest speaker, and Vocaplace Lead Mentor.',
 alternates: {
 canonical: '/mentor/wajed',
 },
 keywords: ['Wajed Sk digital marketing', 'best digital marketing trainer in India', 'Victoria University digital marketing faculty', 'Unacademy digital marketing mentor', 'top marketing educators India'],
 openGraph: {
 title: 'Wajed Sk — Lead Digital Marketing Instructor | Vocaplace',
 description: '20+ years experience · Victoria University Australia · Unacademy Chief Instructor · IIM & Google Speaker',
 url: 'https://vocaplace.com/mentor/wajed',
 type: 'profile',
 },
};

const expertise = [
"Digital Marketing Strategy","AI in Marketing & Automation",
"Performance Marketing","Marketing Analytics & Data",
"Brand Management","CRM & Customer Journey Design",
"SEO & Content Strategy","Digital Transformation",
"Customer Experience Design","Business Innovation",
"Sales & Revenue Growth","ORM (Online Reputation Management)",
];

const institutions = [
 { name:"Victoria University, Australia", role:"Online Faculty & Digital Transformation Consultant (Current · 3 days/week)", highlight: true },
 { name:"Unacademy", role:"Chief Digital Marketing Instructor — trained 5,000+ learners", highlight: true },
 { name:"LINC Education Group, Singapore", role:"Faculty & Industry Mentor — international university programs", highlight: true },
 { name:"IIM", role:"Guest Faculty, Trainer & Speaker", highlight: false },
 { name:"Accenture", role:"Corporate Workshop Delivery", highlight: false },
 { name:"Google MSME", role:"Guest Speaker & Trainer", highlight: false },
 { name:"IISWBM", role:"Guest Faculty", highlight: false },
 { name:"IIT Ecosystem Events", role:"Industry Speaker", highlight: false },
 { name:"Byju's", role:"Industry Speaker", highlight: false },
 { name:"Relevel by Unacademy", role:"Platform Trainer", highlight: false },
 { name:"SimpliLearn", role:"Professional Trainer", highlight: false },
 { name:"Coal India", role:"Corporate Training", highlight: false },
 { name:"HCL Technologies", role:"Corporate Workshop", highlight: false },
 { name:"Balmer Lawrie", role:"Corporate Training", highlight: false },
 { name:"Adamas University", role:"Guest Faculty", highlight: false },
 { name:"Aliah University", role:"Guest Faculty", highlight: false },
 { name:"IEM", role:"Guest Faculty", highlight: false },
 { name:"NIPS", role:"Guest Speaker", highlight: false },
];

const stats = [
 { value:"20+", label:"Years of Experience", icon: Briefcase, color:"bg-blue-50 text-blue-900 border-blue-100"},
 { value:"5,000+", label:"Learners Trained", icon: Users, color:"bg-green-50 text-green-700 border-green-100"},
 { value:"7+", label:"Years Teaching", icon: GraduationCap, color:"bg-purple-50 text-purple-700 border-purple-100"},
 { value:"15+", label:"Institutions & Brands", icon: Building2, color:"bg-amber-50 text-amber-700 border-amber-100"},
];

const sectors = [
"B2B","B2C","Healthcare","Manufacturing","FMCG",
"E-Commerce","EdTech","Technology"
];

export default function MentorPage() {
 return (
 <div className="pt-24 pb-16 bg-white">

 {/* Hero */}
 <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-20 px-6">
 <div className="max-w-5xl mx-auto">
 <div className="grid lg:grid-cols-5 gap-10 items-center">

 {/* Real photo */}
 <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
 <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-3xl overflow-hidden border-4 border-white/30 mb-6 group">
 <Image
 src="/mentor.jpeg"
 alt="Wajed Sk — Lead Digital Marketing Instructor"
 fill
 className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
 />
 </div>
 <div className="flex items-center gap-1 mb-3">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={16} className="fill-amber-400 text-amber-400"/>
 ))}
 <span className="text-white text-sm font-bold ml-2">4.9 / 5.0</span>
 </div>
 </div>

 {/* Bio summary */}
 <div className="lg:col-span-3">
 <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold rounded-full mb-5">
 Lead Instructor · Vocaplace Digital Marketing Academy
 </span>
 <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
 Wajed Sk
 </h1>
 <p className="text-blue-200 text-lg leading-relaxed mb-6">
 Digital Marketing Consultant · Certified Trainer · Online Faculty at Victoria University, Australia · Chief Instructor at Unacademy
 </p>
 <div className="flex flex-wrap gap-3">
 {["20+ Years Experience","Global Faculty","5,000+ Students","IIM · Google · Accenture Speaker"].map((tag, i) => (
 <span key={i} className="px-3 py-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full">
 {tag}
 </span>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Stats */}
 <section className="py-12 bg-slate-50 border-b border-slate-100">
 <div className="max-w-5xl mx-auto px-6">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
 {stats.map((s, i) => (
 <div key={i} className={`flex flex-col items-center text-center p-5 rounded-2xl border ${s.color}`}>
 <s.icon size={26} className="mb-2 opacity-80"/>
 <div className="text-3xl font-black mb-1">{s.value}</div>
 <div className="text-xs font-medium opacity-70">{s.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Full Bio */}
 <section className="py-16 px-6">
 <div className="max-w-5xl mx-auto">
 <div className="grid lg:grid-cols-3 gap-12">
 <div className="lg:col-span-2 space-y-6">
 <h2 className="text-2xl font-bold text-slate-900">About Wajed Sk</h2>
 <p className="text-slate-600 leading-relaxed">
 With over <strong>20 years of real-world experience</strong> in marketing and branding — spanning Digital Transformation, Performance Marketing, and Brand Strategy — Wajed Sk brings both industry excellence and classroom relevance to every session he delivers.
 </p>
 <p className="text-slate-600 leading-relaxed">
 As a certified trainer, marketing consultant, and industry mentor, Wajed has delivered training and digital marketing programs for India's leading EdTech platforms such as <strong>Unacademy</strong>, and has trained professionals on <strong>Relevel by Unacademy</strong> and <strong>LINC EdTech (Singapore)</strong>, while delivering multiple workshops and guest lectures at <strong>IIM, Accenture, Google, Byju's, IISWBM, IITs</strong>, and several other institutions.
 </p>
 <p className="text-slate-600 leading-relaxed">
 Wajed currently serves as <strong>Online Faculty & Digital Transformation Consultant at Victoria University, Australia</strong> — one of only three professionals from India offered this prestigious role. He contributes to AI-enabled learning transformation projects, digital adoption frameworks, AI literacy initiatives, and the development of self-paced learning pathways for students and staff.
 </p>
 <p className="text-slate-600 leading-relaxed">
 As <strong>Chief Digital Marketing Instructor at Unacademy</strong>, he trained and mentored 5,000+ learners and working professionals in Digital Marketing, Marketing Analytics, AI Marketing Automation, Agentic Marketing, SEO, PPC, Content Strategy, ORM, and Growth Marketing using live campaigns, industry projects, and real-world business case studies.
 </p>
 <p className="text-slate-600 leading-relaxed">
 His industry experience spans <strong>B2B, B2C, Healthcare, Manufacturing, FMCG, E-Commerce, EdTech, and Technology</strong> sectors across India, Singapore, Australia, the Middle East, and the UK. His teaching philosophy is built on <em>simplifying complex concepts using practical, campaign-based examples</em> — enabling students to not only learn but also apply their knowledge confidently from day one.
 </p>

 {/* Sectors */}
 <div>
 <h3 className="text-sm font-bold text-slate-700 mb-3">Industry Sectors Covered</h3>
 <div className="flex flex-wrap gap-2">
 {sectors.map((s, i) => (
 <span key={i} className="px-3 py-1 bg-blue-50 text-blue-800 border border-blue-100 text-xs font-semibold rounded-full">
 {s}
 </span>
 ))}
 </div>
 </div>
 </div>

 {/* Sidebar */}
 <div className="space-y-6">
 {/* Expertise */}
 <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
 <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
 <BookOpen size={15} className="text-blue-900"/>
 Modules He Teaches
 </h3>
 <div className="space-y-2">
 {expertise.map((item, i) => (
 <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
 <CheckCircle size={14} className="text-green-500 shrink-0"/>
 {item}
 </div>
 ))}
 </div>
 </div>

 {/* Global reach */}
 <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
 <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
 <Globe size={15} className="text-blue-900"/>
 Global Presence
 </h3>
 {["India","Singapore","Australia","United Arab Emirates","United Kingdom"].map((country, i) => (
 <div key={i} className="flex items-center gap-2 text-sm text-slate-600 mb-2">
 <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"/>
 {country}
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Institutions */}
 <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
 <div className="max-w-5xl mx-auto">
 <h2 className="text-2xl font-bold text-slate-900 mb-3">Where He Has Taught & Delivered Workshops</h2>
 <p className="text-slate-500 mb-10">Institutions, organisations, and platforms where Wajed has delivered training, guest lectures, or consulting.</p>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
 {institutions.map((inst, i) => (
 <div
 key={i}
 className={`p-4 rounded-xl border flex items-start gap-3 ${inst.highlight ? 'bg-blue-900 border-blue-800 text-white' : 'bg-white border-slate-200'}`}
 >
 <Award size={16} className={`shrink-0 mt-0.5 ${inst.highlight ? 'text-amber-400' : 'text-blue-900'}`} />
 <div>
 <div className={`font-bold text-sm ${inst.highlight ? 'text-white' : 'text-slate-900'}`}>{inst.name}</div>
 <div className={`text-xs mt-0.5 ${inst.highlight ? 'text-blue-200' : 'text-slate-500'}`}>{inst.role}</div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 px-6">
 <div className="max-w-3xl mx-auto text-center">
 <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
 Ready to Learn from Wajed?
 </h2>
 <p className="text-slate-500 mb-8">
 Join thousands of students who have transformed their careers under his mentorship.
 </p>
 <div className="flex flex-col sm:flex-row justify-center gap-4">
 <a
 href="https://student.vocaplace.com"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors"
 >
 Enroll Now — Pay After Placement
 <ArrowRight size={18} />
 </a>
 <Link
 href="/courses"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-blue-900 text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
 >
 View Course Details
 </Link>
 </div>
 </div>
 </section>
 </div>
 );
}
