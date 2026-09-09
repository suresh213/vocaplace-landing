"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, Award, ChevronRight, CheckCircle2, ChevronDown, Sparkles, PhoneCall } from 'lucide-react';
import { BlogPost, blogPosts } from '../services/blogData';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

interface BlogDetailClientProps {
  post: BlogPost;
}

const BlogDetailClient: React.FC<BlogDetailClientProps> = ({ post }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Extract Table of Contents items (any line starting with ##, ###, or ####)
  const tocItems = post.content
    .split('\n')
    .filter(line => line.trim().startsWith('##') || line.trim().startsWith('###') || line.trim().startsWith('####'))
    .map(line => {
      const isSub = line.trim().startsWith('####') || line.trim().startsWith('###');
      const text = line.replace(/^[#]+\s*/, '').trim();
      const id = slugify(text);
      return { text, isSub, id };
    });

  // Get 3 related posts (sharing tags or top converting)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

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
    <div className="pt-24 pb-20 bg-white min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-6">
          <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3"/>
          <Link href="/blog" className="hover:text-blue-900 transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3"/>
          <span className="text-slate-500 truncate max-w-[200px] md:max-w-none">{post.title}</span>
        </div>

        {/* Action Bar */}
        <div className="mb-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4"/>
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
                    className="px-2 py-1 border border-blue-900/10 text-blue-900 bg-blue-50/50 text-[10px] font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-6 py-4 border-y border-slate-100 mb-8 text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4"/>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4"/>
                  <span>{post.readTime}</span>
                </div>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 ml-auto hover:text-blue-900 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4"/>
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

              {/* Parsed Markdown content */}
              <div className="prose prose-slate max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-sm bg-white not-prose">
                        <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm" {...props} />
                      </div>
                    ),
                    thead: ({ node, ...props }) => <thead className="bg-slate-50 font-bold text-slate-900 border-b border-slate-200" {...props} />,
                    th: ({ node, ...props }) => (
                      <th className="px-4 py-3 font-semibold text-slate-800 text-xs uppercase tracking-wider whitespace-nowrap bg-slate-100/75" {...props} />
                    ),
                    td: ({ node, ...props }) => (
                      <td className="px-4 py-3 text-slate-600 border-t border-slate-100 leading-relaxed" {...props} />
                    ),
                    tr: ({ node, ...props }) => <tr className="hover:bg-slate-50/60 transition-colors" {...props} />,
                    a: ({ node, href, children, ...props }) => {
                      const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
                      if (isInternal) {
                        return (
                          <Link href={href} className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2" {...props}>
                            {children}
                          </Link>
                        );
                      }
                      return (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2" {...props}>
                          {children}
                        </a>
                      );
                    },
                    h2: ({ node, children, ...props }) => {
                      const text = React.Children.toArray(children).join('');
                      const id = slugify(text);
                      return <h2 id={id} className="scroll-mt-24 text-2xl font-bold text-slate-900 mt-10 mb-4 tracking-tight" {...props}>{children}</h2>;
                    },
                    h3: ({ node, children, ...props }) => {
                      const text = React.Children.toArray(children).join('');
                      const id = slugify(text);
                      return <h3 id={id} className="scroll-mt-24 text-xl font-bold text-slate-900 mt-8 mb-3 tracking-tight" {...props}>{children}</h3>;
                    },
                    h4: ({ node, children, ...props }) => {
                      const text = React.Children.toArray(children).join('');
                      const id = slugify(text);
                      return <h4 id={id} className="scroll-mt-24 text-base font-bold text-slate-900 mt-6 mb-2" {...props}>{children}</h4>;
                    },
                    p: ({ node, ...props }) => <p className="text-slate-600 leading-relaxed my-4 text-sm sm:text-base" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc pl-6 space-y-2 my-4 text-slate-600 text-sm sm:text-base" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal pl-6 space-y-2 my-4 text-slate-600 text-sm sm:text-base" {...props} />,
                    li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
                    blockquote: ({ node, ...props }) => (
                      <blockquote className="border-l-4 border-blue-600 bg-blue-50/50 p-4 rounded-r-lg my-5 text-slate-700 text-sm not-italic" {...props} />
                    ),
                    hr: ({ node, ...props }) => <hr className="my-8 border-slate-200" {...props} />,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Interactive FAQs if present */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-blue-900"/>
                    <h3 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
                  </div>
                  <div className="space-y-3">
                    {post.faqs.map((faq, idx) => (
                      <div 
                        key={idx} 
                        className="border border-slate-200 bg-slate-50/50 rounded-xl overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-blue-900"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-blue-900' : 'text-slate-400'}`}/>
                        </button>
                        {openFaq === idx && (
                          <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* High-Converting In-Content Lead Magnet Box */}
              <div className="my-12 p-8 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white rounded-2xl shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 text-slate-950 text-xs font-bold rounded-full mb-4">
                    🎯 100% Job Guarantee • Pay After Placement
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
                    Launch Your ₹4–8 LPA Digital Marketing Career in 120 Days
                  </h3>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 max-w-2xl">
                    Don&apos;t risk your money on theoretical courses. Learn live campaign management from <strong>Wajed Sk</strong> (Victoria University Australia faculty) and pay tuition only after securing your offer letter.
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-3 mb-6 text-xs text-slate-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0"/>
                      <span>100% Job Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0"/>
                      <span>Live Ad Budgets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0"/>
                      <span>200+ Hiring Partners</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl text-center transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4"/> Apply for Next Batch (Pay After Placement)
                    </Link>
                    <Link
                      href="/courses/digital-marketing-mastery"
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl text-center transition-colors border border-white/20"
                    >
                      View 120-Day Curriculum →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Related Posts Section */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Related Career &amp; Strategy Guides</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {relatedPosts.map(rel => (
                    <Link 
                      key={rel.slug} 
                      href={`/blog/${rel.slug}`}
                      className="p-4 border border-slate-200 rounded-xl hover:border-blue-900 transition-all flex flex-col group bg-slate-50/50 hover:bg-white"
                    >
                      <span className="text-[9px] font-bold text-blue-900 uppercase tracking-wider mb-2">
                        {rel.tags[0]}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 mb-2 leading-snug">
                        {rel.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 mt-auto">{rel.readTime}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Internal SEO Hub: Core Programs & Comparisons */}
              <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-900" />
                  <span>Explore Vocaplace Core Programs &amp; Admissions</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <Link 
                    href="/" 
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-900 hover:shadow-sm transition-all group"
                  >
                    <span className="font-bold text-slate-900 group-hover:text-blue-900 block mb-1">
                      Pay After Placement Digital Marketing Course
                    </span>
                    <span className="text-[11px] text-slate-500 leading-snug block">
                      100% Job Guarantee (₹4–8 LPA). Pay tuition only after you secure an official offer letter.
                    </span>
                  </Link>

                  <Link 
                    href="/courses/digital-marketing-mastery" 
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-900 hover:shadow-sm transition-all group"
                  >
                    <span className="font-bold text-slate-900 group-hover:text-blue-900 block mb-1">
                      120-Day Digital Marketing Mastery Syllabus
                    </span>
                    <span className="text-[11px] text-slate-500 leading-snug block">
                      Live campaign execution in Google Ads, Meta Ads, Technical SEO, and AI Automation.
                    </span>
                  </Link>

                  <Link 
                    href="/compare" 
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-900 hover:shadow-sm transition-all group"
                  >
                    <span className="font-bold text-slate-900 group-hover:text-blue-900 block mb-1">
                      Kraftshala vs IIDE vs Vocaplace (2026 Breakdown)
                    </span>
                    <span className="text-[11px] text-slate-500 leading-snug block">
                      Compare fees, placement refund terms, salary benchmarks, and live faculty.
                    </span>
                  </Link>

                  <Link 
                    href="/mentor/wajed" 
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-900 hover:shadow-sm transition-all group"
                  >
                    <span className="font-bold text-slate-900 group-hover:text-blue-900 block mb-1">
                      Learn from Mentor Wajed Sk
                    </span>
                    <span className="text-[11px] text-slate-500 leading-snug block">
                      Online Faculty at Victoria University Australia. 20+ years of growth leadership.
                    </span>
                  </Link>
                </div>
              </div>

            </article>
          </main>

          {/* Right: Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
            
            {/* Author details */}
            <div className="border border-slate-200 p-6 bg-slate-50 rounded-xl">
              <span className="text-[10px] font-bold text-slate-400 block mb-4">Written By</span>
              <div className="flex items-start gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{post.author.name}</h4>
                  <p className="text-[10px] text-slate-500 leading-snug mt-1">{post.author.role}</p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            {tocItems.length > 0 && (
              <div className="border border-slate-200 p-6 bg-white rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 block mb-4">Table of Contents</span>
                <nav className="space-y-3 text-xs">
                  {tocItems.map((item, idx) => (
                    <a 
                      key={idx} 
                      href={`#${item.id}`}
                      className={`flex items-start gap-2 text-slate-600 hover:text-blue-900 transition-colors ${item.isSub ? 'pl-4 text-[11px]' : 'font-medium'}`}
                    >
                      <span className="text-[9px] text-blue-900 select-none mt-0.5">•</span>
                      <span className="hover:underline line-clamp-1">{item.text}</span>
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Sidebar High-Converting CTA Box */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl relative overflow-hidden border border-slate-800 shadow-lg">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Award className="w-24 h-24"/>
              </div>
              <div className="inline-block px-2.5 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold rounded mb-3">
                100% Placement Guarantee
              </div>
              <h3 className="text-lg font-bold mb-2">Digital Marketing Mastery</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Get a ₹4–8 LPA job in 120 days. Learn Google Ads, SEO, and AI workflows from Victoria University faculty. Pay only after placement.
              </p>
              <Link 
                href="/courses/digital-marketing-mastery"
                className="block w-full py-3 bg-blue-600 text-white text-center text-xs font-bold hover:bg-blue-500 transition-colors rounded-xl shadow"
              >
                Apply for Next Batch →
              </Link>
            </div>

          </aside>

        </div>
      </div>

      {/* Floating Bottom Sticky Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 py-3 px-6 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping hidden sm:inline-block"/>
            <p className="text-xs text-slate-200">
              <strong className="text-white">Next Cohort Starting Soon:</strong> 100% Job Guarantee (₹4–8 LPA) • Pay After Placement
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <Link
              href="/contact"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors shadow whitespace-nowrap"
            >
              Apply Now →
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogDetailClient;
