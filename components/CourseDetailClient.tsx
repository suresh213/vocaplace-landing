"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
 ArrowLeft, Clock, BookOpen, Users, CheckCircle,
 Send, Award, AlertCircle, PlayCircle,
 Check, ShieldCheck, ChevronDown, ChevronUp
} from 'lucide-react';
import { CourseDetail, CourseTask } from '../services/courseData';

// Internal Enrollment widget supporting button action with validation success popup
const EnrollmentButton: React.FC<{ price: number; courseTitle: string }> = ({ price, courseTitle }) => {
 return (
 <a
 href="https://student.vocaplace.com"
 id="btn-enroll-action-sidebar"
 className="w-full py-3 bg-blue-900 text-white text-xs font-bold hover:bg-blue-800 transition-colors text-center block"
 >
 Secure Your Seat
 </a>
 );
};

interface CourseDetailClientProps {
 course: CourseDetail;
}

const CourseDetailClient: React.FC<CourseDetailClientProps> = ({ course }) => {
 // State for expanded modules
 const [expandedModules, setExpandedModules] = useState<{ [key: string]: boolean }>({});
 // State for expanded tasks
 const [expandedTasks, setExpandedTasks] = useState<{ [key: string]: boolean }>({});
 // State for MCQ selections
 const [mcqAnswers, setMcqAnswers] = useState<{ [taskId: string]: string }>({});
 // State for MCQ validation results
 const [mcqResults, setMcqResults] = useState<{ [taskId: string]: 'correct' | 'incorrect' | null }>({});
 // State for written submissions
 const [writtenSubmissions, setWrittenSubmissions] = useState<{ [taskId: string]: string }>({});
 const [submissionStates, setSubmissionStates] = useState<{ [taskId: string]: 'idle' | 'submitting' | 'success' }>({});

 const toggleModule = (moduleId: string) => {
 setExpandedModules(prev => ({ ...prev, [moduleId]: !prev[moduleId] }));
 };

 const toggleTask = (taskId: string) => {
 setExpandedTasks(prev => ({ ...prev, [taskId]: !prev[taskId] }));
 };

 const handleMcqSelect = (taskId: string, option: string) => {
 setMcqAnswers(prev => ({ ...prev, [taskId]: option }));
 setMcqResults(prev => ({ ...prev, [taskId]: null }));
 };

 const checkMcqAnswer = (task: CourseTask) => {
 const selected = mcqAnswers[task.id];
 if (!selected) return;

 // By convention, the first option in the options list is the correct answer
 const isCorrect = selected === task.options[0];
 setMcqResults(prev => ({
 ...prev,
 [task.id]: isCorrect ? 'correct' : 'incorrect'
 }));
 };

 const handleWrittenSubmit = (taskId: string) => {
 const text = writtenSubmissions[taskId];
 if (!text || text.trim().length === 0) return;

 setSubmissionStates(prev => ({ ...prev, [taskId]: 'submitting' }));

 setTimeout(() => {
 setSubmissionStates(prev => ({ ...prev, [taskId]: 'success' }));
 }, 1200);
 };

 // Helper to strip simple HTML paragraph tags from descriptions
 const stripHtml = (htmlStr: string) => {
 return htmlStr.replace(/&lt;p&gt;/g, '').replace(/&lt;\/p&gt;/g, '').replace(/<p>/g, '').replace(/<\/p>/g, '');
 };

 return (
 <div className="pt-20 pb-16 bg-white">
 {/* Back Link */}
 <div className="max-w-7xl mx-auto px-6 mb-6">
 <Link
 href="/"
 id="btn-back-to-courses-top"
 className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
 >
 <ArrowLeft size={14} />
 Back to Home
 </Link>
 </div>

 {/* Hero Section */}
 <section className="px-6 max-w-7xl mx-auto mb-12">
 <div className="border border-slate-200 p-6 md:p-10 bg-slate-50 relative overflow-hidden">
 <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
 {/* Left Column: Details */}
 <div className="lg:col-span-7 space-y-6">
 <div className="flex flex-wrap gap-2">
 {course.categories.map((cat, i) => (
 <span key={i} className="px-2 py-0.5 border border-blue-900/20 bg-white text-blue-900 text-[10px] font-bold">
 {cat}
 </span>
 ))}
 <span className="px-2 py-0.5 bg-blue-900 text-white text-[10px] font-bold">
 {course.level}
 </span>
 </div>

 <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
 {course.title}
 </h1>

 <p className="text-slate-600 text-sm md:text-base leading-relaxed">
 {course.description}
 </p>

 {/* Specs Grid */}
 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-200">
 <div>
 <div className="text-[10px] font-bold text-slate-400">Duration</div>
 <div className="text-sm font-bold text-slate-900 mt-1">{course.durationInMonths} Months ({course.durationInDays} Days)</div>
 </div>
 <div>
 <div className="text-[10px] font-bold text-slate-400">Rating</div>
 <div className="text-sm font-bold text-slate-900 mt-1">★ {course.rating} / 5.0</div>
 </div>
 <div>
 <div className="text-[10px] font-bold text-slate-400">Language</div>
 <div className="text-sm font-bold text-slate-900 mt-1">{course.language}</div>
 </div>
 <div>
 <div className="text-[10px] font-bold text-slate-400">Tuition</div>
 <div className="text-sm font-bold text-slate-900 mt-1">₹{course.price.toLocaleString('en-IN')}</div>
 </div>
 </div>

 <div className="flex flex-col sm:flex-row items-center gap-4">
 <a
 href="https://student.vocaplace.com"
 id="btn-enroll-hero-bottom"
 className="w-full sm:w-auto h-12 px-8 bg-blue-900 text-white text-xs font-bold flex items-center justify-center hover:bg-blue-800 transition-colors whitespace-nowrap"
 >
 Enroll in Program
 </a>
 {course.isaEnabled && (
 <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
 <ShieldCheck className="w-5 h-5 text-green-600"/>
 <span>ISA Pay After Placement Option Available</span>
 </div>
 )}
 </div>
 </div>

 {/* Right Column: Thumbnail / Video Preview */}
 <div className="lg:col-span-5">
 <div className="border border-slate-200 bg-white p-3 relative group">
 <div className="relative aspect-video overflow-hidden bg-slate-900 flex items-center justify-center">
 <img
 src={course.thumbnailUrl}
 alt={course.title}
 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
 referrerPolicy="no-referrer"
 />
 {course.videoUrl && (
 <a
 href={course.videoUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="absolute inset-0 flex items-center justify-center bg-slate-900/30 hover:bg-slate-900/50 transition-colors"
 >
 <PlayCircle className="w-16 h-16 text-white drop- hover:scale-110 transition-transform duration-200"/>
 </a>
 )}
 </div>
 <div className="p-3 text-center">
 <span className="text-[10px] font-bold text-slate-400">Watch Program Introduction</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Main Details Grid */}
 <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 mb-16">
 {/* Left 8 Columns: Highlights & Curriculum */}
 <div className="lg:col-span-8 space-y-12">

 {/* Highlights */}
 <div className="border border-slate-200 p-6 md:p-8 bg-slate-50/30">
 <h2 className="text-xl font-bold text-slate-900 mb-6">What You Will Learn</h2>
 <div className="grid md:grid-cols-2 gap-4">
 {course.highlights.map((highlight, idx) => (
 <div key={idx} className="flex gap-3 items-start">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"/>
 <span className="text-slate-700 text-sm leading-relaxed">{highlight}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Curriculum & Dynamic Tasks */}
 <div>
 <div className="flex items-center justify-between mb-6">
 <h2 className="text-xl font-bold text-slate-900">Curriculum Syllabus</h2>
 <span className="text-xs text-slate-500">{course.modules.length} Modules</span>
 </div>

 <div className="space-y-4">
 {course.modules.map((mod, modIdx) => {
 const isExpanded = expandedModules[mod.id];
 return (
 <div key={mod.id} className="border border-slate-200 bg-white overflow-hidden">
 {/* Module Header Button */}
 <button
 onClick={() => toggleModule(mod.id)}
 className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
 id={`btn-toggle-module-${mod.id}`}
 >
 <div className="flex gap-4 items-start">
 <div className="text-2xl font-extrabold text-blue-900/30 leading-none">
 {String(modIdx + 1).padStart(2, '0')}
 </div>
 <div>
 <h3 className="text-sm md:text-base font-bold text-slate-900">
 {mod.title}
 </h3>
 <p className="text-xs text-slate-500 mt-1">
 {mod.tasks.length} Tasks &amp; Submissions
 </p>
 </div>
 </div>
 <div>
 {isExpanded ? <ChevronUp className="text-slate-500"/> : <ChevronDown className="text-slate-500"/>}
 </div>
 </button>

 {/* Module Details Block */}
 {isExpanded && (
 <div className="border-t border-slate-100 p-5 bg-slate-50/50 space-y-6">
 <p className="text-slate-600 text-sm leading-relaxed">
 {stripHtml(mod.description)}
 </p>

 {/* Video references */}
 {mod.videoUrl && mod.videoUrl.length > 0 && (
 <div className="bg-white border border-slate-200 p-4">
 <span className="text-[10px] font-bold text-slate-400 block mb-2">Module Video Classes</span>
 <div className="space-y-2">
 {mod.videoUrl.map((url, i) => (
 <a
 key={i}
 href={url}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors py-1.5 border-b border-slate-100 last:border-b-0"
 >
 <PlayCircle size={14} className="text-slate-500"/>
 <span>Class {i + 1} Video Lesson</span>
 </a>
 ))}
 </div>
 </div>
 )}

 {/* Tasks Area */}
 <div className="space-y-3">
 <span className="text-[10px] font-bold text-slate-400 block">Tasks &amp; Assignments</span>

 {mod.tasks.map((task) => {
 const isTaskExpanded = expandedTasks[task.id];
 return (
 <div key={task.id} className="border border-slate-200 bg-white overflow-hidden">
 <button
 onClick={() => toggleTask(task.id)}
 className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
 id={`btn-toggle-task-${task.id}`}
 >
 <div className="flex items-center gap-3">
 <span className={`px-2 py-0.5 text-[9px] font-bold ${task.type === 'MCQ' ? 'bg-purple-50 text-purple-700 border border-purple-200' : 'bg-blue-50 text-blue-900 border border-blue-900/30' }`}>
 {task.type}
 </span>
 <span className="text-xs font-bold text-slate-800 line-clamp-1">{task.title}</span>
 </div>
 </button>

 {isTaskExpanded && (
 <div className="border-t border-slate-100 p-4 bg-slate-50/30 space-y-4">
 <p className="text-slate-600 text-xs leading-relaxed">
 {task.description}
 </p>

 {/* Video Guidance */}
 {task.videoUrl && (
 <a
 href={task.videoUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 transition-colors"
 >
 <PlayCircle size={12} />
 Task Video Tutorial
 </a>
 )}

 {/* MCQ Form widget */}
 {task.type === 'MCQ' && (
 <div className="bg-white border border-slate-200 p-4 space-y-3">
 <span className="text-[9px] font-bold text-slate-400 block">Select Correct Option</span>
 <div className="space-y-2">
 {task.options.map((option, optIdx) => {
 const isSelected = mcqAnswers[task.id] === option;
 return (
 <label
 key={optIdx}
 className={`flex items-start gap-3 p-2.5 border cursor-pointer transition-all ${isSelected ? 'bg-slate-50 border-slate-900' : 'bg-white border-slate-200 hover:border-slate-300' }`}
 >
 <input
 type="radio"
 name={`mcq-${task.id}`}
 checked={isSelected}
 onChange={() => handleMcqSelect(task.id, option)}
 className="mt-0.5 text-slate-900 focus:ring-slate-900 border-slate-300"
 />
 <span className="text-xs text-slate-700 leading-snug">{option}</span>
 </label>
 );
 })}
 </div>

 </div>
 )}

 </div>
 )}
 </div>
 );
 })}
 </div>
 </div>
 )}
 </div>
 );
 })}
 </div>
 </div>
 </div>

 {/* Right 4 Columns: Sticky Pricing & ISA details */}
 <div className="lg:col-span-4">
 <div className="sticky top-20 border border-slate-200 p-6 bg-slate-50 space-y-6"id="pricing-section">
 <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3">
 Enrollment Details
 </h3>

 {/* Price section */}
 <div className="space-y-1">
 <span className="text-[10px] font-bold text-slate-400 block">Program Fee</span>
 <div className="flex items-baseline gap-2">
 <span className="text-3xl font-extrabold text-slate-900">₹{course.price.toLocaleString('en-IN')}</span>
 <span className="text-xs text-slate-500">all-inclusive</span>
 </div>
 </div>

 {/* ISA details */}
 {course.isaEnabled ? (
 <div className="border border-green-200 bg-green-50 p-4 space-y-2">
 <div className="flex items-center gap-2 text-xs font-bold text-green-800">
 <ShieldCheck className="w-4 h-4 text-green-700"/>
 <span>ISA Pay-After-Placement</span>
 </div>
 <p className="text-[10px] text-green-700 leading-relaxed">
 Pay ₹0 upfront fee. Pay only once you secure a job paying at least ₹5 LPA.
 </p>
 <div className="text-[9px] font-bold text-green-800 mt-1">
 *Terms &amp; conditions apply.
 </div>
 </div>
 ) : (
 <div className="border border-slate-200 bg-white p-4 space-y-2">
 <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
 <Award className="w-4 h-4 text-slate-500"/>
 <span>Upfront Discount</span>
 </div>
 <p className="text-[10px] text-slate-500 leading-relaxed">
 Save 15% on total tuition when paying upfront. EMI options also available.
 </p>
 </div>
 )}

 {/* Program stats list */}
 <ul className="space-y-3 py-3 text-slate-600 text-xs border-t border-slate-200">
 <li className="flex items-center justify-between">
 <span>Modules</span>
 <span className="font-bold text-slate-900">{course.modules.length} modules</span>
 </li>
 <li className="flex items-center justify-between">
 <span>Language</span>
 <span className="font-bold text-slate-900">{course.language}</span>
 </li>
 <li className="flex items-center justify-between">
 <span>Certification</span>
 <span className="font-bold text-slate-900">Industry-Accredited</span>
 </li>
 <li className="flex items-center justify-between">
 <span>Placement Prep</span>
 <span className="font-bold text-slate-900">1-on-1 Mock Reviews</span>
 </li>
 </ul>

 {/* Mentor Mini Card */}
 <div className="border border-blue-100 bg-blue-50 p-4 space-y-3">
 <div className="text-[10px] font-bold text-slate-400">Your Lead Instructor</div>
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-white font-bold text-sm shrink-0">WS</div>
 <div>
 <div className="text-sm font-bold text-slate-900">Wajed Sk</div>
 <div className="text-[11px] text-slate-500">20+ Yrs · Victoria University Australia</div>
 </div>
 </div>
 <div className="flex items-center gap-1">
 {[...Array(5)].map((_,i) => <span key={i} className="text-amber-400 text-xs">★</span>)}
 <span className="text-xs text-slate-500 ml-1">4.9 · 5,000+ students</span>
 </div>
 <Link href="/mentor/wajed" className="block text-center text-xs font-bold text-blue-900 hover:text-blue-700 transition-colors">
 View Full Profile &rarr;
 </Link>
 </div>

 {/* CTA Enroll Button */}
 <EnrollmentButton price={course.price} courseTitle={course.title} />

 </div>
 </div>
 </section>

 {/* Certificate Preview Section */}
 <section className="px-6 max-w-7xl mx-auto mb-16 border-t border-slate-200 pt-16">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div>
 <h2 className="text-xl font-bold text-slate-900 mb-6">Professional Certification</h2>
 <p className="text-slate-600 text-sm mb-6 leading-relaxed">
 Validate your expertise with our industry-recognized certification. Once you complete the curriculum, task submissions, and final project, you will be awarded the **Digital Marketing & AI Specialist Certificate** from Vocaplace, endorsed by top performance agencies.
 </p>
 <ul className="space-y-3">
 {[
 { icon: Clock, title:"4-Month Intensive", desc:"Rigorous curriculum built for job readiness."},
 { icon: BookOpen, title:"AI-Powered Workflows", desc:"Learn to execute campaigns 10x faster with AI tools."},
 { icon: ShieldCheck, title:"Pay After Placement", desc:"Tuition backed by our Income Share Agreement (ISA)."},
 { icon: Award, title:"Industry Endorsed", desc:"Co-created with top performance marketing agencies."}
 ].map((item, idx) => (
 <li key={idx} className="flex items-start gap-3 p-3 border border-slate-200 bg-slate-50">
 <item.icon className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0"/>
 <div>
 <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
 <p className="text-[11px] text-slate-500 leading-normal">{item.desc}</p>
 </div>
 </li>
 ))}
 </ul>
 </div>

 <div className="relative">
 <div className="bg-white border border-slate-200 p-6">
 <div className="border-2 border-double border-slate-200 p-6 text-center">
 <Award className="w-10 h-10 text-blue-900 mx-auto mb-4"/>
 <h3 className="text-base font-bold text-slate-900 mb-2">Certificate of Completion</h3>
 <p className="text-xs text-slate-400 mb-4">This is to certify that</p>
 <div className="border-b border-slate-300 mb-3 pb-2">
 <p className="text-lg font-bold text-slate-900">Student Name</p>
 </div>
 <p className="text-xs text-slate-500 mb-4 leading-normal">
 has successfully completed the Digital Marketing Mastery & AI Workflows Professional Certification.
 </p>
 <div className="flex justify-between items-end text-left">
 <div>
 <div className="border-b border-slate-300 w-20 mb-1"></div>
 <p className="text-[9px] text-slate-400">Date</p>
 </div>
 <div className="w-12 h-12 bg-blue-900 flex items-center justify-center text-white text-[7px] font-bold">
 VERIFIED
 </div>
 <div className="text-right">
 <div className="border-b border-slate-300 w-20 mb-1"></div>
 <p className="text-[9px] text-slate-400">Director</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
};

export default CourseDetailClient;
