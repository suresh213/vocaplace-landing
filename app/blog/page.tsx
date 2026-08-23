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
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Vocaplace Digital Marketing & AI Insights Blog',
    description: 'Expert guides on SEO, Google Ads, Meta Ads, and AI marketing automation from Vocaplace industry mentors.',
    url: 'https://vocaplace.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Vocaplace',
      url: 'https://vocaplace.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vocaplace.com/logo.webp'
      }
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vocaplace.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://vocaplace.com/blog',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogListClient />
    </>
  );
}
