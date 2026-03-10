import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Clock, BookOpen, Star, Shield, Globe, ArrowRight, Zap, Code, Database, Brain } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 'ai-master',
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Modern Tools Mastery',
      duration: '1 Month',
      price: '₹100',
      students: '2000+',
      description: 'Master the latest AI tools and operating systems. Learn to leverage AI for productivity, automation, and career advancement.',
      modules: ['AI Tools Overview', 'Prompt Engineering', 'Automation with AI', 'AI for Developers', 'Future of Work with AI'],
      level: 'Beginner',
      format: 'Online Self-Paced'
    },
    {
      id: 'fullstack',
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      duration: '6 Months',
      price: '₹15,000',
      students: '1500+',
      description: 'Complete web development program covering frontend, backend, databases, and deployment. Build production-ready applications.',
      modules: ['HTML & CSS Fundamentals', 'JavaScript Deep Dive', 'React & State Management', 'Node.js & Express', 'Database Design', 'Cloud Deployment'],
      level: 'Beginner to Intermediate',
      format: 'Online Live & Self-Paced'
    },
    {
      id: 'data-analytics',
      icon: <Database className="w-8 h-8" />,
      title: 'Data Analytics Professional',
      duration: '4 Months',
      price: '₹12,000',
      students: '1200+',
      description: 'Learn data analysis, visualization, and business intelligence. Transform raw data into actionable insights.',
      modules: ['Python for Data Analysis', 'SQL & Database Queries', 'Data Visualization with Tableau', 'Statistical Analysis', 'Business Intelligence'],
      level: 'Beginner',
      format: 'Online Live & Self-Paced'
    }
  ];

  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-5 h-5 text-slate-500" />
            <span className="text-xs text-slate-500 uppercase">Professional Certifications</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get Certified. Get Hired.
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
            Industry-recognized certifications that validate your skills and boost your career prospects. Choose from our range of affordable programs designed for the 2026 job market.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[
            { value: '5000+', label: 'Certified Students' },
            { value: '100+', label: 'Hiring Partners' },
            { value: '85%', label: 'Placement Rate' },
            { value: '₹100', label: 'Starting Price' }
          ].map((stat, idx) => (
            <div key={idx} className="p-3 border border-slate-200 bg-slate-50 text-center">
              <div className="text-xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-[10px] text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {certifications.map((cert, idx) => (
            <div key={cert.id} className="border border-slate-200 bg-white hover:border-slate-400 transition-all flex flex-col">
              <div className="p-5 border-b border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-500">{cert.duration}</span>
                  <span className="text-xs text-green-600 font-medium">{cert.students} enrolled</span>
                </div>
                <div className="w-10 h-10 flex items-center justify-center mb-3 bg-slate-100">
                  {cert.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{cert.title}</h3>
                <p className="text-slate-500 text-sm mb-3">{cert.description}</p>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {cert.format}</span>
                  <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> {cert.level}</span>
                </div>
              </div>
              
              <div className="p-5 flex-grow">
                <span className="text-xs text-slate-500 mb-2 block">What you will learn</span>
                <ul className="space-y-1.5 mb-3">
                  {cert.modules.map((module, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 border-t border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 line-through">₹{parseInt(cert.price.replace(/[^\d]/g, '')) * 3}</span>
                    <div className="text-2xl font-bold text-slate-900">{cert.price}</div>
                  </div>
                  <button className="py-2 px-4 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Preview */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">Why Get Certified?</h2>
              <ul className="space-y-3">
                {[
                  { icon: Clock, title: "Quick Completion", desc: "Finish in as little as 1 month." },
                  { icon: BookOpen, title: "Modern Curriculum", desc: "Learn the latest tools and technologies." },
                  { icon: Shield, title: "Industry Recognized", desc: "Valued by top hiring managers." },
                  { icon: Star, title: "Highly Affordable", desc: "Starting at just ₹100." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 border border-slate-200 bg-slate-50">
                    <item.icon className="w-5 h-5 text-slate-900 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/courses" className="inline-flex items-center gap-2 mt-6 text-sm text-slate-900 hover:underline">
                View All Programs <ArrowRight size={14} />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white border border-slate-200 p-6">
                <div className="border-2 border-double border-slate-200 p-6 text-center">
                  <Award className="w-10 h-10 text-slate-900 mx-auto mb-4" />
                  <h3 className="text-base font-bold text-slate-900 mb-2">Certificate of Completion</h3>
                  <p className="text-xs text-slate-500 mb-4">This is to certify that</p>
                  <div className="border-b border-slate-300 mb-3 pb-2">
                    <p className="text-xl font-bold text-slate-900">Student Name</p>
                  </div>
                  <p className="text-xs text-slate-600 mb-4">
                    has successfully completed the Advanced AI & Modern Tools Certification Program.
                  </p>
                  <div className="flex justify-between items-end">
                    <div className="text-left">
                      <div className="border-b border-slate-300 w-20 mb-1"></div>
                      <p className="text-[10px] text-slate-500">Date</p>
                    </div>
                    <div className="w-10 h-10 bg-slate-900 flex items-center justify-center text-white text-[8px] font-bold">
                      VERIFIED
                    </div>
                    <div className="text-right">
                      <div className="border-b border-slate-300 w-20 mb-1"></div>
                      <p className="text-[10px] text-slate-500">Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-12">
          <div className="bg-slate-900 p-8 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-3">Ready to Get Certified?</h2>
            <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
              Start your certification journey today. Prices starting at just ₹100.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/courses" className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-white text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors">
                Browse Programs
                <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-transparent text-white text-sm font-medium hover:bg-slate-800 transition-colors border border-slate-700">
                Talk to Counselor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
