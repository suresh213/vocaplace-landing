import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ArrowRight, Users, Award, TrendingUp, Briefcase, Globe, Star, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'About Vocaplace - Bridging the Gap in Digital Marketing Education',
 description: 'Learn about the mission, vision, and expert mentorship behind Vocaplace, India\'s leading pay-after-placement digital marketing academy.',
 alternates: { canonical: '/about' },
};

export default function AboutPage() {
 return (
 <div className="bg-white">

 {/* Hero */}
 <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-32 pb-20 px-6">
 <div className="max-w-5xl mx-auto text-center">
 <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-blue-100 text-sm font-semibold rounded-full mb-5">
 About Vocaplace
 </span>
 <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
 Building India's Most<br />
 <span className="text-amber-400">Placement-Focused</span><br />
 Marketing Academy
 </h1>
 <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
 We were founded with one mission: make quality digital marketing education accessible to everyone, and ensure every graduate gets a job — before they pay a single rupee.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Link href="/courses"className="h-12 px-8 bg-amber-400 text-blue-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors">
 View Our Program
 <ArrowRight size={16} />
 </Link>
 <Link href="/contact"className="h-12 px-8 bg-white/10 border border-white/30 text-white font-semibold rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
 Get in Touch
 </Link>
 </div>
 </div>
 </section>

 {/* Stats */}
 <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
 <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
 {[
 { icon: Award, value: '2023', label: 'Founded', color: 'bg-blue-50 text-blue-900 border-blue-100' },
 { icon: Users, value: '5,000+', label: 'Students Trained', color: 'bg-green-50 text-green-700 border-green-100' },
 { icon: Briefcase, value: '100+', label: 'Hiring Partners', color: 'bg-purple-50 text-purple-700 border-purple-100' },
 { icon: TrendingUp, value: '94%', label: 'Placement Rate', color: 'bg-amber-50 text-amber-700 border-amber-100' },
 ].map((s, i) => (
 <div key={i} className={`flex flex-col items-center text-center p-5 rounded-2xl border ${s.color}`}>
 <s.icon size={24} className="mb-2 opacity-80"/>
 <div className="text-3xl font-black mb-1">{s.value}</div>
 <div className="text-xs font-medium opacity-70">{s.label}</div>
 </div>
 ))}
 </div>
 </section>

 {/* Mission & Vision */}
 <section className="py-16 px-6">
 <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
 <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8">
 <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center mb-5">
 <Award size={22} className="text-white"/>
 </div>
 <h2 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h2>
 <p className="text-slate-600 leading-relaxed text-sm">
 To make high-quality digital marketing education accessible to every aspiring professional — regardless of their background, location, or financial situation. We believe skills and placement should come before payment.
 </p>
 </div>
 <div className="bg-amber-50 rounded-2xl border border-amber-100 p-8">
 <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-5">
 <Globe size={22} className="text-white"/>
 </div>
 <h2 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h2>
 <p className="text-slate-600 leading-relaxed text-sm">
 To become India's most trusted placement-first academy where every graduate lands a meaningful job and every company builds the marketing team they need. A world where skills matter more than certificates.
 </p>
 </div>
 </div>
 </section>

 {/* Story */}
 <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
 <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <h2 className="text-3xl font-bold text-slate-900 mb-5">Our Story</h2>
 <p className="text-slate-600 leading-relaxed mb-4 text-sm">
 Vocaplace was founded in 2023 by industry veterans who had witnessed firsthand the frustrating gap between academic marketing theory and real-world campaign requirements. Talented graduates couldn't run campaigns. Agencies couldn't find ready-to-hire talent.
 </p>
 <p className="text-slate-600 leading-relaxed mb-4 text-sm">
 We decided to build the bridge ourselves — a comprehensive, placement-first academy that transforms motivated learners into job-ready professionals in just 12 weeks. And with the pay-after-placement model, we eliminated all financial risk for students.
 </p>
 <p className="text-slate-600 leading-relaxed text-sm">
 Today, 5,000+ students have been placed, 100+ companies trust us for their marketing hires, and our 94% placement rate speaks for itself. We're just getting started.
 </p>
 </div>
 <div className="grid grid-cols-2 gap-4">
 {[
 'Industry-aligned curriculum',
 'Expert mentorship from global faculty',
 'Hands-on live project experience',
 'AI-driven marketing workflows',
 'Direct hiring partner network',
 'Lifetime career support',
 ].map((v, i) => (
 <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
 <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5"/>
 <span className="text-sm text-slate-700">{v}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Core Values */}
 <section className="py-16 px-6">
 <div className="max-w-5xl mx-auto">
 <div className="text-center mb-10">
 <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Core Values</h2>
 <p className="text-slate-500 text-lg">The principles behind every decision we make.</p>
 </div>
 <div className="grid md:grid-cols-3 gap-5">
 {[
 { num: '01', title: 'Student First', desc: 'Every decision starts with:"How does this benefit our students?"' },
 { num: '02', title: 'Quality Over Quantity', desc: 'We prefer placing fewer, highly-skilled graduates over thousands of under-trained ones.' },
 { num: '03', title: 'Continuous Innovation', desc: 'The digital marketing landscape changes daily. Our curriculum evolves with it.' },
 { num: '04', title: 'Radical Transparency', desc: 'Honest feedback, real placement data, clear fees. No fine print, no false promises.' },
 { num: '05', title: 'True Partnership', desc: 'We only succeed when our students, companies and mentors succeed together.' },
 { num: '06', title: 'Long-Term Thinking', desc: 'We care about your entire career journey — not just landing your first job.' },
 ].map((v, i) => (
 <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover: transition-all duration-300">
 <div className="text-3xl font-black text-blue-900/15 mb-3">{v.num}</div>
 <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
 <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Lead Instructor */}
 <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
 <div className="max-w-5xl mx-auto">
 <div className="text-center mb-10">
 <h2 className="text-3xl font-bold text-slate-900 mb-3">Meet Your Lead Instructor</h2>
 <p className="text-slate-500 text-lg">Your curriculum is designed and delivered by one of India's top marketing educators.</p>
 </div>
 <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 grid lg:grid-cols-5">
 {/* Photo */}
 <div className="lg:col-span-2 relative min-h-[320px]">
 <Image
 src="/mentor.jpeg"
 alt="Wajed Sk — Lead Instructor at Vocaplace"
 fill
 className="object-cover object-top"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-6">
 <div className="flex items-center gap-1 mb-1">
 {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400"/>)}
 <span className="text-white text-sm font-bold ml-1">4.9/5</span>
 </div>
 <h3 className="text-xl font-bold text-white">Wajed Sk</h3>
 <p className="text-blue-200 text-sm">Chief Digital Marketing Instructor</p>
 </div>
 </div>
 {/* Details */}
 <div className="lg:col-span-3 p-8">
 <p className="text-slate-600 text-sm leading-relaxed mb-5">
 With over <strong>20 years of real-world experience</strong> in Digital Transformation, Performance Marketing, and Brand Strategy, Wajed Sk brings exceptional industry expertise and classroom passion to every session. He currently serves as <strong>Online Faculty & Digital Transformation Consultant at Victoria University, Australia</strong> — one of only three professionals from India in this role.
 </p>
 <div className="grid sm:grid-cols-2 gap-3 mb-6">
 {[
 '20+ years marketing leadership',
 '5,000+ students trained at Unacademy',
 'Guest lecturer at IIM, Google & Accenture',
 'Faculty at LINC Education Group, Singapore',
 'AI-driven marketing curriculum expertise',
 '7+ years corporate training & mentoring',
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
 <Check size={14} className="text-green-500 shrink-0"/>
 {item}
 </div>
 ))}
 </div>
 <div className="mb-5">
 <div className="text-xs font-semibold text-slate-400 mb-2">Has delivered workshops at</div>
 <div className="flex flex-wrap gap-2">
 {['IIM', 'Accenture', 'Google MSME', 'Byju\'s', 'IISWBM', 'IITs', 'Unacademy', 'HCL', 'Coal India', 'SimpliLearn'].map((inst, i) => (
 <span key={i} className="px-2.5 py-1 bg-blue-50 border border-blue-100 text-blue-800 text-xs font-semibold rounded-full">{inst}</span>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 px-6">
 <div className="max-w-3xl mx-auto text-center">
 <h2 className="text-3xl font-bold text-slate-900 mb-4">Join Our Mission</h2>
 <p className="text-slate-500 text-lg mb-8">Whether you're a student or a company — there's a place for you in the Vocaplace ecosystem.</p>
 <div className="flex flex-col sm:flex-row justify-center gap-4">
 <a href="https://student.vocaplace.com"className="h-14 px-8 bg-blue-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors">
 For Students — Enroll Now
 <ArrowRight size={16} />
 </a>
 <Link href="/hire-talent"className="h-14 px-8 border border-blue-900 text-blue-900 font-bold rounded-xl flex items-center justify-center hover:bg-blue-50 transition-colors">
 For Companies — Hire Talent
 </Link>
 </div>
 </div>
 </section>
 </div>
 );
}
