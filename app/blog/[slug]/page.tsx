import React from 'react';
import { blogPosts } from '../../../services/blogData';
import BlogDetailClient from '../../../components/BlogDetailClient';
import type { Metadata } from 'next';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
 params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
 return blogPosts.map((post) => ({
 slug: post.slug,
 }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
 const { slug } = await params;
 const post = blogPosts.find(p => p.slug === slug);

 if (!post) {
 return {
 title: 'Article Not Found - Vocaplace',
 };
 }

 return {
 title: `${post.metaTitle} | Vocaplace`,
 description: post.metaDescription,
 keywords: post.tags,
 alternates: {
 canonical: `/blog/${post.slug}`,
 },
 openGraph: {
 title: post.metaTitle,
 description: post.metaDescription,
 url: `https://vocaplace.com/blog/${post.slug}`,
 images: [
 {
 url: post.coverImage,
 width: 800,
 height: 600,
 alt: post.title,
 },
 ],
 type: 'article',
 },
 };
}

export default async function Page({ params }: PageProps) {
 const { slug } = await params;
 const post = blogPosts.find(p => p.slug === slug);

 if (!post) {
 return (
 <div className="pt-24 pb-16 min-h-[70vh] flex flex-col items-center justify-center bg-white px-6">
 <AlertCircle className="w-16 h-16 text-slate-400 mx-auto mb-6"/>
 <h2 className="text-xl font-bold text-slate-900 mb-4">Article Not Found</h2>
 <p className="text-slate-500 text-sm mb-6">The article you are looking for has expired or moved.</p>
 <Link href="/blog"className="h-10 px-6 bg-blue-900 text-white text-xs font-semibold hover:bg-blue-800 transition-colors flex items-center gap-2">
 <ArrowLeft className="w-4 h-4"/>
 Back to Blog
 </Link>
 </div>
 );
 }

  const jsonLd = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogDetailClient post={post} />
    </>
  );
}
