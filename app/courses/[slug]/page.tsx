import { coursesData, getCourseBySlug } from '../../../services/courseData';
import CourseDetailClient from '../../../components/CourseDetailClient';
import type { Metadata } from 'next';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
 params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
 return coursesData.map((course) => ({
 slug: course.slug,
 }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
 const { slug } = await params;
 const course = getCourseBySlug(slug);

 if (!course) {
 return {
 title: 'Course Not Found - Vocaplace',
 };
 }

  return {
    title: 'Pay After Placement Digital Marketing Course | 100% Job Guarantee',
    description: `Master SEO, Performance Ads, Meta & AI in 120 days. Get a ₹4–8 LPA job with our 100% placement guarantee. Learn from Victoria University faculty. Pay after placement.`,
    keywords: [
      ...course.categories,
      'pay after placement digital marketing course',
      'digital marketing course with placement guarantee',
      '100% job guarantee digital marketing',
      'performance marketing course India'
    ],
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
    openGraph: {
      title: 'Pay After Placement Digital Marketing Course | 100% Job Guarantee',
      description: `Get placed in a ₹4–8 LPA digital marketing role in 120 days. Pay after placement.`,
      url: `https://vocaplace.com/courses/${course.slug}`,
      images: [
        {
          url: course.thumbnailUrl,
          width: 800,
          height: 600,
          alt: course.title,
        },
      ],
      type: 'website',
    },
  };
}

export default async function Page({ params }: PageProps) {
 const { slug } = await params;
 const course = getCourseBySlug(slug);

 if (!course) {
 return (
 <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-6">
 <AlertCircle className="w-16 h-16 text-slate-400 mx-auto mb-6"/>
 <h1 className="text-2xl font-bold text-slate-900 mb-3">Course Not Found</h1>
 <p className="text-slate-500 text-sm mb-8">
 The program you are looking for might have been moved, renamed, or is currently unavailable.
 </p>
 <Link 
 href="/"
 id="btn-back-to-courses-not-found"
 className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white text-xs font-bold hover:bg-blue-800 transition-colors whitespace-nowrap"
 >
 <ArrowLeft size={16} />
 Back to Home
 </Link>
 </div>
 );
 }

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'Vocaplace',
      sameAs: 'https://vocaplace.com',
      logo: 'https://vocaplace.com/logo.webp',
    },
    instructor: {
      '@type': 'Person',
      name: 'Wajed Sk',
      jobTitle: 'Lead Digital Marketing Instructor & Online Faculty at Victoria University Australia',
      url: 'https://vocaplace.com/mentor/wajed',
      worksFor: {
        '@type': 'EducationalOrganization',
        name: 'Victoria University Australia',
      },
    },
    educationalCredentialAwarded: 'Digital Marketing & AI Specialist Certificate',
    timeRequired: `P${course.durationInMonths}M`,
    offers: {
      '@type': 'Offer',
      category: 'Pay After Placement',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `https://vocaplace.com/courses/${course.slug}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1540',
      bestRating: '5',
      worstRating: '1',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Online',
      courseWorkload: `${course.durationInDays} Days intensive live interactive classes with mentor review`,
      instructor: {
        '@type': 'Person',
        name: 'Wajed Sk',
        jobTitle: 'Online Faculty at Victoria University Australia & Former Chief Digital Marketing Instructor at Unacademy',
        url: 'https://vocaplace.com/mentor/wajed',
      },
    },
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
        name: 'Courses',
        item: 'https://vocaplace.com/courses',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: course.title,
        item: `https://vocaplace.com/courses/${course.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the duration of the Digital Marketing Mastery course?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The program is a 120-day (4 months) intensive cohort combining live interactive evening sessions, hands-on campaign management, and 1-on-1 mentor reviews.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the Pay After Placement model work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You learn and manage live campaigns during the 120-day course. You pay your core tuition fee in monthly installments only after receiving an official employment offer letter paying at least ₹4–8 LPA.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a 100% job guarantee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Vocaplace provides a legally backed 100% Job Guarantee. If you complete the course requirements and do not secure a qualifying role, you owe zero remaining tuition.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who teaches the Digital Marketing Mastery course?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The course is led directly by Wajed Sk, an Online Faculty member at Victoria University Australia and former Chief Digital Marketing Instructor at Unacademy with 20+ years of industry leadership.',
        },
      },
      {
        '@type': 'Question',
        name: 'What tools and platforms will I master?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You will master Google Ads (Search, Display, Performance Max), Meta Ads Manager, GA4, Search Console, Ahrefs, SEMrush, ChatGPT, Gemini, Zapier AI automations, and Canva.',
        },
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
      <CourseDetailClient course={course} />
    </>
  );
}
