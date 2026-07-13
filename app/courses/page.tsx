import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Users, Award, Clock, Star, ArrowRight, Shield } from 'lucide-react';
import { coursesData } from '../../services/courseData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pay After Placement Digital Marketing Course India | Vocaplace',
  description: '₹4–8 LPA digital marketing job in 120 days. AI, SEO & Google Ads. 100% job guarantee. Pay after you get placed. Enroll now.',
  alternates: { canonical: '/courses' },
};

const CoursesPage: React.FC = () => {
 const course = coursesData.find(c => c.slug === 'digital-marketing-mastery');
 if (!course) return null;

 return (
 <div className="bg-white">
 {/* Hero */}
 <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-32 pb-20 px-6">
 <div className="max-w-4xl mx-auto text-center">
 <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-blue-100 text-sm font-semibold rounded-full mb-5">
 Our Programs
 </span>
 <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
 One Flagship Course.<br />
 <span className="text-amber-400">Designed to Get You Placed.</span>
 </h1>
 <p className="text-blue-200 text-lg max-w-2xl mx-auto">
 We don't offer 20 half-baked programs. We offer one world-class program — comprehensive, placement-guaranteed, and crafted by an instructor with 20+ years of real industry experience.
 </p>
 </div>
 </section>

 {/* Course Card */}
 <section className="py-16 px-6">
 <div className="max-w-3xl mx-auto">
 <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">

 {/* Top header */}
 <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-start justify-between gap-4">
 <div>
 <div className="flex items-center gap-2 mb-3">
 <span className="px-3 py-1 bg-blue-900 text-white text-xs font-bold rounded-full">{course.level}</span>
 <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200">94% Placement Rate</span>
 </div>
 <h2 className="text-2xl font-bold text-slate-900 mb-1">{course.title}</h2>
 <p className="text-slate-500 text-sm">{course.subtitle}</p>
 </div>
 <div className="text-right shrink-0">
 <div className="text-xs text-slate-400 mb-1">Program Fee</div>
 <div className="text-2xl font-black text-blue-900">₹{course.price.toLocaleString('en-IN')}</div>
 <div className="text-xs text-green-600 font-semibold">Pay After Placement</div>
 </div>
 </div>

 {/* Stats row */}
 <div className="grid grid-cols-4 border-b border-slate-100">
 {[
 { label: 'Duration', value: `${course.durationInMonths} Months` },
 { label: 'Rating', value: `★ ${course.rating}` },
 { label: 'Language', value: course.language },
 { label: 'Modules', value: `${course.modules?.length || 45}+` },
 ].map((s, i) => (
 <div key={i} className="p-4 text-center border-r border-slate-100 last:border-r-0">
 <div className="text-xs text-slate-400 mb-1">{s.label}</div>
 <div className="text-sm font-bold text-slate-900">{s.value}</div>
 </div>
 ))}
 </div>

 {/* Description */}
 <div className="p-6 border-b border-slate-100">
 <p className="text-slate-600 text-sm leading-relaxed">{course.description}</p>
 </div>

 {/* What you'll learn */}
 <div className="p-6 border-b border-slate-100">
 <h3 className="text-sm font-bold text-slate-700 mb-4">What You'll Learn</h3>
 <div className="grid sm:grid-cols-2 gap-2.5">
 {course.highlights.map((h, i) => (
 <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
 <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5"/>
 {h}
 </div>
 ))}
 </div>
 </div>

 {/* Career roles */}
 <div className="p-6 border-b border-slate-100">
 <h3 className="text-sm font-bold text-slate-700 mb-3">Career Opportunities After Completion</h3>
 <div className="flex flex-wrap gap-2">
 {course.career.map((c, i) => (
 <span key={i} className="px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold rounded-full">{c}</span>
 ))}
 </div>
 </div>

 {/* Instructor mini */}
 <div className="p-6 border-b border-slate-100 bg-blue-50">
 <div className="flex items-center gap-4">
 <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-blue-200 shrink-0">
 <Image src="/mentor.jpeg"alt="Wajed Sk"fill className="object-cover object-top"/>
 </div>
 <div className="flex-1">
 <div className="text-xs font-semibold text-blue-700 mb-0.5">Your Lead Instructor</div>
 <div className="font-bold text-slate-900">Wajed Sk</div>
 <div className="text-xs text-slate-500">20+ Yrs Experience · Victoria University, Australia</div>
 </div>
 <div className="flex items-center gap-1 shrink-0">
 {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400"/>)}
 <span className="text-xs text-slate-500 ml-1">4.9</span>
 </div>
 </div>
 </div>

 {/* Benefits bar */}
 <div className="p-6 border-b border-slate-100">
 <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
 {[
 { icon: Shield, text: 'Pay After Placement', color: 'text-green-600' },
 { icon: Award, text: 'Industry Certificate', color: 'text-blue-700' },
 { icon: Users, text: '1-on-1 Mentorship', color: 'text-purple-600' },
 { icon: Clock, text: '12-Week Program', color: 'text-amber-600' },
 ].map((b, i) => (
 <div key={i} className="flex flex-col items-center text-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
 <b.icon size={18} className={b.color} />
 <span className="text-xs font-semibold text-slate-600">{b.text}</span>
 </div>
 ))}
 </div>
 </div>

 {/* CTA */}
 <div className="p-6 flex flex-col sm:flex-row gap-3">
 <Link
 href={`/courses/${course.slug}`}
 className="flex-1 h-14 bg-slate-100 text-slate-700 font-bold rounded-xl flex items-center justify-center hover:bg-slate-200 transition-colors text-sm"
 >
 View Full Curriculum
 </Link>
 <a
 href="https://student.vocaplace.com"
 className="flex-1 h-14 bg-blue-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors text-sm"
 >
 Enroll Now — Pay After Placement
 <ArrowRight size={16} />
 </a>
 </div>
 </div>
 </div>
 </section>

 {/* Trust bar */}
 <section className="py-12 px-6 bg-slate-50 border-t border-slate-100">
 <div className="max-w-4xl mx-auto text-center">
 <p className="text-slate-400 text-xs font-semibold mb-5">TRUSTED BY GRADUATES WHO NOW WORK AT</p>
 <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-slate-400 text-sm font-semibold">
 {['Google', 'Accenture', 'Dentsu', 'WPP', 'Publicis', 'Ogilvy', 'iProspect', 'Performics'].map((c, i) => (
 <span key={i}>{c}</span>
 ))}
 </div>
 </div>
 </section>
 </div>
 );
};

export default CoursesPage;
