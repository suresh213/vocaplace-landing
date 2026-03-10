import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CourseDetailPage = () => {
  const { slug } = useParams();

  // In a real app, we'd fetch course details based on slug.
  // Using Full Stack as default for this template.
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 max-w-5xl mx-auto mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter">Full Stack Development Program</h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          A comprehensive program designed to help students build modern web applications and become industry-ready developers.
        </p>
        <button className="h-14 px-10 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-none sharp-shadow-hover transition-transform duration-200">
          Enroll in Program
        </button>
      </section>

      {/* What You Will Learn */}
      <section className="px-6 max-w-5xl mx-auto mb-20">
        <div className="border border-white/20 bg-surface p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">What You Will Learn</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Students will gain practical experience in building scalable web applications from frontend interfaces to backend systems.
          </p>
          <h3 className="text-xl font-bold mb-4">Key outcomes include:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-gray-300">Understanding modern web architecture</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-gray-300">Building full stack applications</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-gray-300">Deploying production-ready projects</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-gray-300">Designing APIs and backend systems</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="px-6 max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-10 uppercase tracking-tight text-center">Curriculum Overview</h2>
        <div className="space-y-6">
          {[
            { title: "Module 1 — Web Fundamentals", desc: "Introduction to web technologies including HTML, CSS, and JavaScript." },
            { title: "Module 2 — Frontend Development", desc: "Learn how to build modern user interfaces using React and component-based architecture." },
            { title: "Module 3 — Backend Development", desc: "Develop APIs and backend systems using Node.js and Express." },
            { title: "Module 4 — Databases", desc: "Design and manage relational databases using SQL." },
            { title: "Module 5 — Deployment and DevOps", desc: "Deploy applications to cloud environments and understand modern development workflows." }
          ].map((mod, i) => (
            <div key={i} className="border border-white/10 p-6 flex flex-col md:flex-row gap-6 items-start hover:border-white/30 transition-colors">
              <div className="text-4xl font-bold text-white/20 w-16 flex-shrink-0">0{i+1}</div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase">{mod.title}</h3>
                <p className="text-gray-400">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects & Career Support */}
      <section className="px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="border border-white/10 p-8 bg-surface">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">Projects</h2>
          <p className="text-gray-400 mb-6">Students will build several real-world projects including:</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-300">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              A full e-commerce platform
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              A chat application
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              An analytics dashboard
            </li>
          </ul>
        </div>
        <div className="border border-white/10 p-8 bg-surface">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">Career Support</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Resume building workshops
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              LinkedIn profile optimization
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Mock technical interviews
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Hiring partner introductions
            </li>
          </ul>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="text-center px-6">
        <button className="h-16 px-12 bg-white text-black text-lg font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-none sharp-shadow-hover transition-transform duration-200">
          Enroll in Program
        </button>
      </section>
    </div>
  );
};

export default CourseDetailPage;
