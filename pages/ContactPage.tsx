import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Phone, Mail, MapPin, Clock, Globe, MessageSquare, Users, Building, Briefcase, HeadphonesIcon } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <HeadphonesIcon className="w-5 h-5 text-slate-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 uppercase tracking-tighter leading-tight">
              We are Here to Help_
            </h1>
            <p className="text-slate-500 text-lg md:text-xl mb-8 font-mono max-w-xl">
              Have questions about our programs, partnerships, or career opportunities? Our team is ready to assist you. Reach out through any channel below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact-form" className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors border border-slate-900">
                Send a Message
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="grid gap-6">
            {[
              { icon: Phone, title: 'Phone', value: '+91 98765 43210', desc: 'Mon - Sat, 9AM - 7PM' },
              { icon: Mail, title: 'Email', value: 'info@eduai.com', desc: 'We respond within 24 hours' },
              { icon: MapPin, title: 'Office', value: 'Bangalore, Karnataka', desc: 'Visit by appointment' }
            ].map((contact, idx) => (
              <div key={idx} className="p-6 border border-slate-200 bg-white hover:border-slate-400 transition-colors flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center">
                  <contact.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase tracking-tight text-sm">{contact.title}</h3>
                  <p className="text-slate-700 font-mono">{contact.value}</p>
                  <p className="text-xs text-slate-500">{contact.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="px-6 max-w-7xl mx-auto mb-24 bg-slate-50 py-16 border-y border-slate-200">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">How Can We Help?_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            Choose the right department to get the fastest response.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Users, title: 'Student Queries', desc: 'Admissions, courses, fees, scholarships' },
            { icon: Building, title: 'College Partnerships', desc: 'Institutional collaborations, placement programs' },
            { icon: Briefcase, title: 'Hiring Partners', desc: 'Talent acquisition, campus drives' },
            { icon: HeadphonesIcon, title: 'General Support', desc: 'Technical issues, account help' }
          ].map((option, idx) => (
            <div key={idx} className="p-6 bg-white border border-slate-200 hover:border-slate-400 transition-colors text-center cursor-pointer">
              <option.icon className="w-8 h-8 text-slate-900 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 uppercase tracking-tight text-sm mb-2">{option.title}</h3>
              <p className="text-xs text-slate-500 font-mono">{option.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Quick Answers_</h2>
          <p className="text-slate-500 max-w-2xl text-lg font-mono">
            Common questions we receive.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: 'What programs do you offer?', a: 'We offer Full Stack Development, Data Analytics, and AI & Automation programs ranging from 3-6 months.' },
            { q: 'Do you provide placement support?', a: 'Yes, all our programs include placement support with access to 100+ hiring partners.' },
            { q: 'What are the eligibility criteria?', a: 'Most programs require 12th pass or equivalent. Specific requirements vary by program.' },
            { q: 'Is there scholarship available?', a: 'Yes, we offer merit-based scholarships and EMI options for eligible candidates.' }
          ].map((faq, idx) => (
            <div key={idx} className="p-6 border border-slate-200 bg-white">
              <h3 className="font-bold text-slate-900 uppercase tracking-tight text-sm mb-3">{faq.q}</h3>
              <p className="text-slate-500 text-sm font-mono">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="px-6 max-w-3xl mx-auto mb-12">
        <div className="bg-slate-50 p-6 border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 uppercase tracking-tight text-center">Send Us a Message_</h2>
          <p className="text-slate-500 text-center mb-8 font-mono">Fill out the form below and our team will get back to you within 24 hours.</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">I am a</label>
              <div className="grid grid-cols-4 gap-3">
                {['Student', 'Parent', 'College', 'Company'].map((type) => (
                  <label key={type} className="flex items-center justify-center gap-2 p-3 border border-slate-300 cursor-pointer hover:border-slate-900 transition-colors">
                    <input type="radio" name="userType" className="accent-slate-900" />
                    <span className="text-xs font-bold uppercase text-slate-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full bg-white border border-slate-300 p-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Email</label>
                <input type="email" className="w-full bg-white border border-slate-300 p-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Phone</label>
                <input type="tel" className="w-full bg-white border border-slate-300 p-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Subject</label>
                <select className="w-full bg-white border border-slate-300 p-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors">
                  <option>General Inquiry</option>
                  <option>Admission Query</option>
                  <option>Partnership</option>
                  <option>Hiring</option>
                  <option>Support</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Message</label>
              <textarea rows={5} className="w-full bg-white border border-slate-300 p-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors resize-none" placeholder="Tell us how we can help you..." required></textarea>
            </div>
            
            <button type="submit" className="w-full h-14 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors border border-slate-900">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Office Location */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Visit Our Office_</h2>
            <div className="p-6 border border-slate-200 bg-white">
              <div className="aspect-video bg-slate-100 flex items-center justify-center mb-6">
                <MapPin className="w-12 h-12 text-slate-400" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900 uppercase tracking-tight">EduAI Technologies Pvt Ltd</h3>
                  <p className="text-slate-500 text-sm font-mono mt-1">
                    123 Innovation Tower<br />
                    Tech Park, Electronic City<br />
                    Bangalore - 560100<br />
                    Karnataka, India
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex gap-4">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Mail className="w-4 h-4" />
                    <span>info@eduai.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Other Ways to Connect_</h2>
            <div className="space-y-4">
              {[
                { platform: 'LinkedIn', handle: '@eduai2026', desc: 'Follow us for updates' },
                { platform: 'Instagram', handle: '@eduai.official', desc: 'See behind the scenes' },
                { platform: 'Twitter', handle: '@eduai2026', desc: 'Latest news & articles' },
                { platform: 'YouTube', handle: 'EduAI Official', desc: 'Tutorials & success stories' }
              ].map((social, idx) => (
                <div key={idx} className="p-4 border border-slate-200 bg-white flex items-center justify-between hover:border-slate-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-slate-400" />
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{social.platform}</h3>
                      <p className="text-xs text-slate-500">{social.handle}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">{social.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
