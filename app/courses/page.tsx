import React from 'react';
import Link from 'next/link';
import { Code, Users } from 'lucide-react';
import { coursesData } from '../../services/courseData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Programs - Vocaplace Marketing Academy',
  description: 'Explore the flagship growth and performance marketing courses designed to make you job-ready in 4 months.',
  alternates: {
    canonical: '/courses',
  },
};

const CoursesPage: React.FC = () => {
  // We only show the single Digital Marketing Mastery course
  const course = coursesData.find(c => c.slug === 'digital-marketing-mastery');

  if (!course) return null;

  return (
    <div className="pt-20 pb-16 bg-white min-h-[80vh] flex flex-col justify-center">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">
          Our Programs
        </h1>
        <p className="text-slate-500 text-sm md:text-base mb-8 max-w-xl mx-auto font-mono">
          Choose our flagship industry-focused program designed to make you job-ready in 4 months. Includes hands-on projects, expert mentoring, and placement support.
        </p>
      </section>

      {/* Course Cards */}
      <section className="px-6 max-w-xl mx-auto mb-16 w-full">
        <div className="border border-slate-200 bg-white hover:border-blue-900 transition-all flex flex-col shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase">{course.durationInMonths} Months</span>
              <span className="text-xs text-green-600 font-bold uppercase tracking-wider">94% Placement Rate</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{course.title}</h3>
            <p className="text-xs text-slate-500 mb-4 font-mono">{course.subtitle}</p>
            <p className="text-slate-600 text-sm font-mono leading-relaxed">{course.description}</p>
          </div>
          
          <div className="p-6 flex-grow space-y-4">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">What you will learn</span>
              <div className="flex flex-wrap gap-1.5">
                {course.highlights.map((highlight, i) => (
                  <span key={i} className="px-2 py-1 border border-blue-900/10 text-blue-900 bg-blue-50/50 text-[10px] font-mono font-bold uppercase">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Career options</span>
              <div className="flex flex-wrap gap-1.5">
                {course.career.map((career, i) => (
                  <span key={i} className="px-2 py-1 bg-green-50 text-green-700 border border-green-200 text-[10px] font-mono font-bold uppercase">
                    {career}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-5 border-t border-slate-200 bg-slate-50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <Code className="w-4 h-4 text-blue-900" />
                <span>12+ Practical Assignments</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <Users className="w-4 h-4 text-blue-900" />
                <span>5K+ Certified</span>
              </div>
            </div>
            <Link 
              href={`/courses/${course.slug}`} 
              className="block w-full py-3 bg-blue-900 text-white text-center text-xs font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors whitespace-nowrap"
            >
              View Program Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
