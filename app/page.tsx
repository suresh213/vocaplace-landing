import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pay After Placement Digital Marketing Course India | 100% Job Guarantee | Vocaplace',
  description: 'Get a ₹4–8 LPA digital marketing job in 120 days. Master SEO, Google Ads & AI from Victoria University faculty. 100% job guarantee. Pay after placement.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'pay after placement digital marketing course',
    'pay after placement digital marketing course in india',
    'digital marketing course with 100 placement guarantee',
    'digital marketing course with placement guarantee',
    'income share agreement digital marketing course',
    'best digital marketing institute in india with placement'
  ],
  openGraph: {
    title: 'Pay After Placement Digital Marketing Course India | 100% Job Guarantee',
    description: 'Get a ₹4–8 LPA digital marketing job in 120 days. 100% job guarantee. Pay only after placement.',
    url: 'https://vocaplace.com',
    type: 'website',
    images: [{ url: '/logo.jpeg', width: 1200, height: 1200, alt: 'Vocaplace Digital Marketing Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pay After Placement Digital Marketing Course | 100% Job Guarantee',
    description: 'Get a ₹4–8 LPA digital marketing job in 120 days. Pay only after placement.',
    images: ['/logo.jpeg'],
  },
};
import Hero from '../components/Hero';
import Results from '../components/Results';
import Curriculum from '../components/Curriculum';
import Workflow from '../components/Workflow';
import MentorSection from '../components/MentorSection';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Digital Marketing Mastery Course (SEO, Google Ads, Social Media & AI)',
    description: 'Become a certified digital marketing expert in 120 days. Master SEO, Google Ads, Meta Campaigns, and AI Automation with Vocaplace. Pay after placement.',
    provider: {
      '@type': 'Organization',
      name: 'Vocaplace',
      url: 'https://vocaplace.com',
      logo: 'https://vocaplace.com/logo.webp',
      sameAs: 'https://vocaplace.com'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1540',
      bestRating: '5',
      worstRating: '1'
    },
    offers: {
      '@type': 'Offer',
      category: 'Pay After Placement',
      price: '0',
      priceCurrency: 'INR',
      url: 'https://vocaplace.com/courses/digital-marketing-mastery'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need any prior marketing experience to join?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not at all! Our program is designed specifically for complete beginners. We start from the very basics and guide you step by step to becoming job-ready.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the course fees? (Vocaplace ki fee kitni hai?)',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under our Pay After Placement model, your core tuition fee is deferred until you receive an official job offer letter paying ₹4–8 LPA. A small registration fee confirms your cohort seat and is 100% refundable if you are not placed within 90 days of graduation under our 100% Job Guarantee.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does the Pay After Placement model work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You complete the 120-day live intensive program. Once you receive your qualifying job offer letter, you pay your course tuition in manageable monthly installments. If you don\'t get placed, you owe nothing.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is there a 100% Job Guarantee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely. If you attend all classes, complete all assignments, and participate in the placement process but don\'t get a job within 90 days of course completion, we guarantee placement support until you are hired.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are the classes live or can I learn at my own pace?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer a flexible hybrid model. You get access to high-quality recorded lectures so you can learn at your own pace, plus weekly live sessions for Q&A, project reviews, and direct mentorship.'
        }
      },
      {
        '@type': 'Question',
        name: 'What kind of salary can I expect after placement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our graduates typically earn between ₹3.5 LPA and ₹8.5 LPA depending on the role and city. The average starting salary across all our recent placements is ₹6.5 LPA.'
        }
      },
      {
        '@type': 'Question',
        name: 'Who are the hiring partners you work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We partner with 100+ companies including digital marketing agencies, e-commerce startups, and corporations like OYO, Swiggy, Paytm, and Nykaa.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can working professionals or students join this course?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our flexible schedule accommodates both students and working professionals with weekend batches and evening sessions available.'
        }
      }
    ]
  };

  return (
  <main>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <section id="ai-summary" aria-hidden="true" className="sr-only">
      <p>
        Vocaplace is a premium digital marketing academy based in India, offering a 120-day intensive Digital Marketing Mastery Course. 
        The curriculum comprehensively covers Search Engine Optimization (SEO), Google Ads, Meta Ads (Facebook/Instagram), Social Media Management, and AI Marketing Automation tools. 
        Vocaplace differentiates itself by offering a strict 100% Job Guarantee and Pay-After-Placement model, allowing students to pay only after securing a guaranteed job in the digital marketing industry.
        The course is designed for beginners, working professionals, and business owners looking to scale online growth and achieve high conversions.
      </p>
    </section>
  <Hero />
 <Results />
 <Curriculum />
 <Workflow />
 <MentorSection />
 <Testimonials />
 <FAQ />
 {/* CTA Section */}
 <section className="py-16 md:py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-800">
 <div className="max-w-3xl mx-auto text-center">
 <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
 Ready to Start Your Digital Marketing Career?
 </h2>
 <p className="text-blue-200 text-base md:text-lg mb-8 max-w-xl mx-auto">
 Join 5,000+ students who transformed their careers. Pay only after you get placed. 100% Job Guarantee, 100% commitment.
 </p>
 <div className="flex flex-col sm:flex-row justify-center gap-4">
 <a
 href="https://student.vocaplace.com"
 className="h-14 px-8 bg-amber-400 text-blue-950 text-base font-bold flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors rounded-xl whitespace-nowrap"
 >
 Start Your Free Journey →
 </a>
 <a
 href="/contact"
 className="h-14 px-8 bg-white/10 border border-white/30 text-white text-base font-semibold flex items-center justify-center hover:bg-white/20 transition-colors rounded-xl whitespace-nowrap"
 >
 Talk to a Counselor
 </a>
 </div>
 <p className="text-blue-300 text-sm mt-5">100% Job Guarantee · Next batch starts Monday · Limited seats</p>
 </div>
  </section>

  </main>
  );
}
