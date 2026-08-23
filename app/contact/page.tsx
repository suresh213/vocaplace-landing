import React from 'react';
import ContactClient from '../../components/ContactClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Vocaplace | Apply for Digital Marketing Course',
  description: 'Next batch starting soon. Limited seats. 100% job guarantee. Pay after placement. Talk to our admissions team now.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Vocaplace Admissions',
    description: 'Get in touch with Vocaplace admissions counselors to apply for the 120-day pay after placement digital marketing course.',
    mainEntity: {
      '@type': 'EducationalOrganization',
      name: 'Vocaplace',
      url: 'https://vocaplace.com',
      telephone: '+918527647899',
      email: 'hello@vocaplace.com',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+918527647899',
        contactType: 'Course Admissions & Inquiries',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi']
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
        name: 'Contact Us',
        item: 'https://vocaplace.com/contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
