import React from 'react';
import type { Metadata } from 'next';
import HireTalentClientComponent from '../../components/HireTalentClient';

export const metadata: Metadata = {
  title: 'Hire Job-Ready Digital Marketing Experts | Vocaplace',
  description: 'Hire AI-trained digital marketers who can run live campaigns from day one. Pre-vetted, portfolio-ready candidates. 90-day replacement guarantee. Post a role today.',
  alternates: { canonical: '/hire-talent' },
};

export default function HireTalentPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Vocaplace Talent Placement & Hiring Solutions',
    serviceType: 'Marketing Talent Acquisition',
    provider: {
      '@type': 'Organization',
      name: 'Vocaplace',
      url: 'https://vocaplace.com'
    },
    description: 'Pre-vetted, agency-trained performance marketing and AI automation talent for fast-growing companies and marketing agencies.'
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
        name: 'Hire Talent',
        item: 'https://vocaplace.com/hire-talent',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HireTalentClientComponent />
    </>
  );
}
