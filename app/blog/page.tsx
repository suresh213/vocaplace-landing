import React from 'react';
import BlogListClient from '../../components/BlogListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Blog | SEO, AI Automation & Career Guides',
  description: 'Free guides on SEO, Google Ads, Meta Ads, AI automation & how to get a ₹4–8 LPA digital marketing job. Written by Vocaplace industry experts.',
  keywords: ['digital marketing blog', 'SEO guides', 'AI marketing automation', 'performance marketing tips', 'Vocaplace blog'],
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogListPage() {
 return <BlogListClient />;
}
