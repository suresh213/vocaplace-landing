"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Users, Building, Briefcase, HeadphonesIcon, ArrowRight, CheckCircle } from 'lucide-react';

const ContactClient: React.FC = () => {
 const [submitted, setSubmitted] = useState(false);

 return (
 <div className="bg-white">
 {/* Hero */}
 <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-32 pb-20 px-6">
 <div className="max-w-4xl mx-auto text-center">
 <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-blue-100 text-sm font-semibold rounded-full mb-5">
 We'd Love to Hear from You
 </span>
 <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
 Let's Talk About Your<br />
 <span className="text-amber-400">Digital Marketing Career</span>
 </h1>
 <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
 Whether you're a student ready to start, a professional looking to switch careers, or a company wanting to hire — our team is here to help.
 </p>
 {/* Quick contact pills */}
 <div className="flex flex-wrap justify-center gap-4">
 <a href="tel:+919876543210"className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors">
 <Phone size={15} className="text-amber-400"/>
 +91 98765 43210
 </a>
 <a href="mailto:hello@vocaplace.com"className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors">
 <Mail size={15} className="text-amber-400"/>
 hello@vocaplace.com
 </a>
 </div>
 </div>
 </section>

 {/* Contact Type Cards */}
 <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
 <div className="max-w-5xl mx-auto">
 <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">How Can We Help You?</h2>
 <div className="grid md:grid-cols-4 gap-5">
 {[
 { icon: Users, title: 'Student Enquiry', desc: 'Course details, fees, admission process, demo classes', color: 'bg-blue-50 border-blue-100 text-blue-900' },
 { icon: Building, title: 'Agency Partnership', desc: 'Collaborate with us to hire trained talent from our pool', color: 'bg-green-50 border-green-100 text-green-800' },
 { icon: Briefcase, title: 'Corporate Training', desc: 'Upskill your team with customised digital marketing workshops', color: 'bg-purple-50 border-purple-100 text-purple-800' },
 { icon: HeadphonesIcon, title: 'General Support', desc: 'Technical help, account queries, portal access issues', color: 'bg-amber-50 border-amber-100 text-amber-800' },
 ].map((item, i) => (
 <div key={i} className={`p-6 rounded-2xl border ${item.color} text-center hover: transition-all duration-300`}>
 <item.icon size={28} className="mx-auto mb-3 opacity-80"/>
 <h3 className="font-bold text-sm mb-2">{item.title}</h3>
 <p className="text-xs leading-relaxed opacity-70">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Main Content: Form + Info */}
 <section id="contact-form"className="py-16 px-6">
 <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">

 {/* Form */}
 <div className="lg:col-span-3">
 <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
 <p className="text-slate-500 text-sm mb-8">Our counselors respond within 24 hours on business days.</p>

 {submitted ? (
 <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
 <CheckCircle size={48} className="text-green-500 mx-auto mb-4"/>
 <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
 <p className="text-slate-500 text-sm">Our team will reach out to you within 24 hours.</p>
 </div>
 ) : (
 <form className="space-y-5"onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
 {/* Who are you */}
 <div>
 <label className="block text-sm font-semibold text-slate-700 mb-3">I am a</label>
 <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
 {['Student', 'Professional', 'Company', 'Parent'].map((type) => (
 <label key={type} className="flex items-center justify-center gap-2 p-3 border border-slate-200 rounded-xl cursor-pointer hover:border-blue-900 transition-colors text-sm font-medium text-slate-700">
 <input type="radio"name="userType"className="accent-blue-900"/>
 {type}
 </label>
 ))}
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
 <div>
 <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
 <input type="text"placeholder="Your name"className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"required />
 </div>
 <div>
 <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
 <input type="tel"placeholder="+91 00000 00000"className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"required />
 </div>
 </div>

 <div>
 <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
 <input type="email"placeholder="you@example.com"className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"required />
 </div>

 <div>
 <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
 <select className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-slate-900 text-sm focus:outline-none focus:border-blue-600 transition-all">
 <option>Course Enquiry</option>
 <option>Admission Process</option>
 <option>Placement Support</option>
 <option>Agency Partnership</option>
 <option>Corporate Training</option>
 <option>General Support</option>
 </select>
 </div>

 <div>
 <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
 <textarea rows={4} placeholder="Tell us how we can help you..."className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none"required />
 </div>

 <button type="submit"className="w-full h-14 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 text-base">
 Send Message
 <ArrowRight size={18} />
 </button>
 </form>
 )}
 </div>

 {/* Sidebar info */}
 <div className="lg:col-span-2 space-y-6">
 <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
 <h3 className="font-bold text-slate-900 mb-5 text-base">Contact Details</h3>
 <div className="space-y-4">
 {[
 { icon: Phone, label: 'Phone', value: '+91 98765 43210', sub: 'Mon–Sat, 9AM–7PM' },
 { icon: Mail, label: 'Email', value: 'hello@vocaplace.com', sub: 'Reply within 24 hours' },
 { icon: MapPin, label: 'Office', value: 'Bangalore, Karnataka, India', sub: 'Visit by appointment' },
 { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', sub: 'Quick response guaranteed' },
 ].map((item, i) => (
 <div key={i} className="flex items-start gap-4">
 <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center shrink-0">
 <item.icon size={16} className="text-white"/>
 </div>
 <div>
 <div className="text-xs font-semibold text-slate-400">{item.label}</div>
 <div className="text-sm font-bold text-slate-900">{item.value}</div>
 <div className="text-xs text-slate-400">{item.sub}</div>
 </div>
 </div>
 ))}
 </div>
 </div>

 <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-6 text-white">
 <h3 className="font-bold mb-3 text-base">Book a Free Demo Class</h3>
 <p className="text-blue-200 text-sm leading-relaxed mb-4">
 Experience our teaching style before you enroll. Our free demo class is 60 minutes with live Q&A.
 </p>
 <a
 href="https://student.vocaplace.com"
 className="flex items-center gap-2 px-5 py-3 bg-amber-400 text-blue-950 font-bold text-sm rounded-xl hover:bg-amber-300 transition-colors"
 >
 Book Free Demo
 <ArrowRight size={15} />
 </a>
 </div>

 <div className="bg-green-50 rounded-2xl border border-green-100 p-6">
 <h3 className="font-bold text-slate-900 mb-2 text-sm">Response Time Guarantee</h3>
 {['Phone calls — within 2 hours', 'WhatsApp — within 30 mins', 'Email — within 24 hours'].map((item, i) => (
 <div key={i} className="flex items-center gap-2 text-sm text-slate-600 mt-2">
 <CheckCircle size={14} className="text-green-500 shrink-0"/>
 {item}
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 </div>
 );
};

export default ContactClient;
