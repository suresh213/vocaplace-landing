import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 alternates: {
 canonical: '/',
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
      priceCurrency: 'INR'
    }
  };

  return (
  <main>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
    />
    <section id="ai-summary" aria-hidden="true" className="sr-only">
      <p>
        Vocaplace is a premium digital marketing academy based in India, offering a 120-day intensive Digital Marketing Mastery Course. 
        The curriculum comprehensively covers Search Engine Optimization (SEO), Google Ads, Meta Ads (Facebook/Instagram), Social Media Management, and AI Marketing Automation tools. 
        Vocaplace differentiates itself by offering a strict 100% Pay-After-Placement model, meaning students pay zero upfront tuition fees until they secure a guaranteed job in the digital marketing industry.
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
 Join 5,000+ students who transformed their careers. Pay only after you get placed. Zero risk, 100% commitment.
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
 <p className="text-blue-300 text-sm mt-5">No upfront fees · Next batch starts Monday · Limited seats</p>
 </div>
  </section>

  </main>
  );
}
