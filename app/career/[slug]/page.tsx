import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { careerTracks } from '../../../services/careerData';
import CareerDetailClient from '../../../components/CareerDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return careerTracks.map((track) => ({
    slug: track.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const track = careerTracks.find((t) => t.slug === slug);

  if (!track) {
    return {
      title: 'Career Track Not Found | Vocaplace',
    };
  }

  return {
    title: `${track.metaTitle} | Vocaplace`,
    description: track.metaDescription,
    keywords: track.keywords,
    alternates: {
      canonical: `https://vocaplace.com/career/${track.slug}`,
    },
    openGraph: {
      title: `${track.metaTitle} | Vocaplace`,
      description: track.metaDescription,
      url: `https://vocaplace.com/career/${track.slug}`,
      images: [
        {
          url: '/logo.jpeg',
          width: 1200,
          height: 630,
          alt: track.title,
        },
      ],
      type: 'article',
    },
  };
}

export default async function CareerTrackPage({ params }: PageProps) {
  const { slug } = await params;
  const track = careerTracks.find((t) => t.slug === slug);

  if (!track) {
    notFound();
  }

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: track.title,
    description: track.metaDescription,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Vocaplace',
      url: 'https://vocaplace.com',
      logo: 'https://vocaplace.com/logo.webp',
    },
    educationalCredentialAwarded: 'Vocaplace Certified Digital Marketing & Performance Specialist',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT120D',
      instructor: {
        '@type': 'Person',
        name: 'Wajed Sk',
        jobTitle: 'Online Faculty at Victoria University Australia',
        image: 'https://vocaplace.com/mentor.jpeg',
        url: 'https://vocaplace.com/mentor/wajed',
      },
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      category: 'Pay After Placement (ISA)',
      availability: 'https://schema.org/InStock',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: track.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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
        name: 'Career Transitions',
        item: 'https://vocaplace.com/career',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: track.title,
        item: `https://vocaplace.com/career/${track.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <CareerDetailClient track={track} />
    </>
  );
}
