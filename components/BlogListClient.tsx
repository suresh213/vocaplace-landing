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

 return (
 <div className="pt-24 pb-16 bg-white min-h-[85vh]">
 <div className="max-w-7xl mx-auto px-6">
 
 {/* Header */}
 <section className="mb-12 text-center max-w-2xl mx-auto">
 <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
 Vocaplace Insights
 </h1>
 <p className="text-slate-500 text-sm md:text-base">
 Advanced SEO, growth tactics, conversion optimization, and AI automation guides curated by performance marketing experts.
 </p>
 </section>

 {/* Filter bar */}
 <section className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between border-b-2 border-slate-100 pb-8">
 
 {/* Tags */}
 <div className="flex flex-wrap gap-2 justify-center md:justify-start">
 <button
 onClick={() => setSelectedTag(null)}
 className={`h-9 px-4 text-xs font-bold border transition-colors ${ selectedTag === null ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-slate-500 border-slate-200 hover:border-blue-900 hover:text-blue-900' }`}
 >
 All Articles
 </button>
 {allTags.map(tag => (
 <button
 key={tag}
 onClick={() => setSelectedTag(tag)}
 className={`h-9 px-4 text-xs font-bold border transition-colors ${ selectedTag === tag ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-slate-500 border-slate-200 hover:border-blue-900 hover:text-blue-900' }`}
 >
 {tag}
 </button>
 ))}
 </div>

 {/* Search bar */}
 <div className="relative w-full md:w-80">
 <input
 type="text"
 placeholder="Search articles..."
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="w-full h-10 pl-10 pr-4 bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-900 transition-colors"
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
