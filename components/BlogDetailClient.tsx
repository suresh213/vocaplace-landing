"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, Award, ChevronRight } from 'lucide-react';
import { BlogPost } from '../services/blogData';

import ReactMarkdown from 'react-markdown';

interface BlogDetailClientProps {
  post: BlogPost;
}

const BlogDetailClient: React.FC<BlogDetailClientProps> = ({ post }) => {
  // Extract Table of Contents items (any line starting with ### or ####)
  const tocItems = post.content
    .split('\n')
    .filter(line => line.trim().startsWith('###') || line.trim().startsWith('####'))
    .map(line => {
      const isSub = line.trim().startsWith('####');
      const text = line.replace('####', '').replace('###', '').trim();
      return { text, isSub };
    });

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="pt-24 pb-16 bg-white min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-6">
          <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-blue-900 transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-500 truncate max-w-[200px] md:max-w-none">{post.title}</span>
        </div>

        {/* Action Bar */}
        <div className="mb-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-900 uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>

        {/* Grid Layout: Main Article vs Sidebar */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Main Content */}
          <main className="lg:col-span-8">
            <article>
              {/* Category Tags */}
              <div className="flex gap-1.5 flex-wrap mb-4">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-2 py-1 border border-blue-900/10 text-blue-900 bg-blue-50/50 text-[10px] font-mono font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tighter leading-tight font-sans">
                {post.title}
              </h1>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-6 py-4 border-y border-slate-100 mb-8 text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 ml-auto hover:text-blue-900 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share Article</span>
                </button>
              </div>

              {/* Featured Image */}
              <div className="aspect-[16/9] w-full overflow-hidden border border-slate-200 mb-8 bg-slate-100">
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${post.coverImage})` }}
                  role="img"
                  aria-label={post.title}
                />
              </div>

              {/* Parsed content */}
              <div className="prose prose-slate prose-h3:text-lg prose-h3:font-bold prose-h3:uppercase prose-h3:tracking-tight prose-h4:text-sm prose-h4:font-bold prose-h4:uppercase prose-h4:tracking-wide prose-p:font-mono prose-li:font-mono max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </article>
          </main>

          {/* Right: Sidebar */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-20">
            
            {/* Author details */}
            <div className="border border-slate-200 p-6 bg-slate-50 shadow-sm">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Written By</span>
              <div className="flex items-start gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide font-sans">{post.author.name}</h4>
                  <p className="text-[10px] font-mono text-slate-500 leading-snug mt-1">{post.author.role}</p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            {tocItems.length > 0 && (
              <div className="border border-slate-200 p-6 bg-white shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Table of Contents</span>
                <nav className="space-y-3 font-mono text-xs">
                  {tocItems.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-start gap-2 text-slate-600 hover:text-blue-900 transition-colors ${item.isSub ? 'pl-4 text-[11px]' : ''}`}
                    >
                      <span className="text-[9px] text-blue-900 select-none mt-0.5">•</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </nav>
              </div>
            )}

            {/* CTA Sidebar box */}
            <div className="bg-blue-900 text-white p-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Award className="w-24 h-24" />
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-tight font-sans">Become an Authority</h3>
              <p className="text-xs text-slate-200 font-mono leading-relaxed mb-6">
                Master the SEO, Ads, and AI-driven growth tactics described in this guide. Learn in a production environment with Vocaplace.
              </p>
              <Link 
                href="/courses"
                className="block w-full py-2.5 bg-white text-blue-900 text-center text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                Explore Program
              </Link>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
};

export default BlogDetailClient;
