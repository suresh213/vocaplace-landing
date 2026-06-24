import React from 'react';
import BlogListClient from '../../components/BlogListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vocaplace Insights - Advanced SEO, Growth & AI Guides',
  description: 'Read the latest guides on Generative Engine Optimization, keyword mapping, conversion rate strategies, and AI-driven growth workflows by the Vocaplace team.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogListPage() {
  return <BlogListClient />;
}
