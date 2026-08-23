"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../services/blogData';

const BlogListClient: React.FC = () => {
 const [searchQuery, setSearchQuery] = useState('');
 const [selectedTag, setSelectedTag] = useState<string | null>(null);

 // Extract all unique tags
 const allTags = Array.from(
 new Set(blogPosts.flatMap(post => post.tags))
 );

 // Filter posts
 const filteredPosts = blogPosts.filter(post => {
 const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
 post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
 post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

 const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

 return matchesSearch && matchesTag;
 });

  // Curated category filter list
  const primaryCategories = [
    { label: 'All Articles', filter: null },
    { label: 'Competitor Reviews', filter: 'Course Comparison' },
    { label: 'City Guides', filter: 'City Guide' },
    { label: 'Career & Salary', filter: 'Career Guide' },
    { label: 'AI & Performance', filter: 'Performance Marketing' },
    { label: 'Google & SEO', filter: 'SEO' },
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <section className="mb-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded-full mb-3">
            Industry Insights &amp; Career Playbooks
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Vocaplace Career &amp; Growth Insights
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Data-backed breakdowns on Performance Marketing, AI Automation, Salary Trends, and how to land a ₹4–8 LPA role with our 100% Job Guarantee.
          </p>
        </section>

        {/* Featured Lead Magnet Banner */}
        <section className="mb-12 p-8 bg-gradient-to-r from-blue-900 via-slate-900 to-slate-950 text-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-amber-400 text-slate-950 text-[10px] font-bold rounded">
              🎯 100% Placement Guarantee
            </div>
            <h2 className="text-xl md:text-2xl font-bold">
              Ready to Launch Your Digital Marketing Career in 120 Days?
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              Pay your core tuition only after securing an offer letter of ₹4–8 LPA. Direct live mentorship by Victoria University Australia faculty Wajed Sk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl text-center transition-colors shadow whitespace-nowrap"
            >
              Apply for Next Cohort →
            </Link>
            <Link
              href="/courses/digital-marketing-mastery"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl text-center transition-colors border border-white/20 whitespace-nowrap"
            >
              Explore Course
            </Link>
          </div>
        </section>

        {/* Filter bar */}
        <section className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between border-b border-slate-200 pb-6">
          
          {/* Curated Categories */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {primaryCategories.map(cat => (
              <button
                key={cat.label}
                onClick={() => setSelectedTag(cat.filter)}
                className={`h-9 px-4 text-xs font-bold rounded-lg border transition-colors ${ 
                  selectedTag === cat.filter 
                    ? 'bg-blue-900 text-white border-blue-900 shadow-sm' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-900 hover:text-blue-900' 
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search 40+ guides &amp; topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-blue-900 focus:bg-white transition-colors"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none"/>
          </div>

        </section>

 {/* Blog Grid */}
 {filteredPosts.length === 0 ? (
 <div className="text-center py-20 border border-dashed border-slate-200">
 <p className="text-slate-500 text-sm">No articles match your criteria.</p>
 </div>
 ) : (
 <div className="grid md:grid-cols-2 gap-8">
 {filteredPosts.map(post => (
 <article 
 key={post.slug} 
 className="border border-slate-200 bg-white hover:border-blue-900 transition-all flex flex-col group"
 >
 <div className="aspect-[16/9] w-full overflow-hidden border-b border-slate-200 relative bg-slate-100">
 <div
 className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-[1.02] transition-transform duration-500"
 style={{ backgroundImage: `url(${post.coverImage})` }}
 role="img"
 aria-label={post.title}
 />
 <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap">
 {post.tags.map(tag => (
 <span 
 key={tag} 
 className="px-2 py-0.5 bg-white/95 text-blue-900 border border-blue-900/10 text-[9px] font-bold"
 >
 {tag}
 </span>
 ))}
 </div>
 </div>

 <div className="p-6 flex-grow flex flex-col">
 <div className="flex items-center gap-4 text-[10px] text-slate-400 mb-3">
 <span className="flex items-center gap-1">
 <Calendar className="w-3.5 h-3.5"/>
 {post.date}
 </span>
 <span className="flex items-center gap-1">
 <Clock className="w-3.5 h-3.5"/>
 {post.readTime}
 </span>
 </div>

 <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors leading-tight">
 <Link href={`/blog/${post.slug}`}>{post.title}</Link>
 </h2>

 <p className="text-slate-600 text-xs leading-relaxed mb-6 flex-grow">
 {post.excerpt}
 </p>

 <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
 <div className="flex items-center gap-3">
 <img
 src={post.author.avatar}
 alt={post.author.name}
 className="w-8 h-8 object-cover border border-slate-200"
 referrerPolicy="no-referrer"
 />
 <div>
 <p className="text-[10px] font-bold text-slate-900 leading-none">{post.author.name}</p>
 <p className="text-[8px] text-slate-500 leading-none mt-1">{post.author.role}</p>
 </div>
 </div>

 <Link 
 href={`/blog/${post.slug}`}
 className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-800 transition-colors"
 >
 Read Article
 <ArrowRight className="w-3.5 h-3.5"/>
 </Link>
 </div>
 </div>
 </article>
 ))}
 </div>
 )}

 </div>
 </div>
 );
};

export default BlogListClient;
