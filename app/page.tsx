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
import ApplyNowButton from '../components/ApplyNowButton';
import IsaCalculator from '../components/IsaCalculator';

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
        name: 'How does the Pay After Placement model work step by step?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under our Pay After Placement model, your core tuition is completely deferred until you land a job. You undergo 120 days of live training under Victoria University faculty Wajed Sk, manage real Google & Meta ad budgets, and build a verified client portfolio. Once you receive an offer letter of at least ₹4.0–8.0 LPA and your first month salary is credited, you pay your tuition in easy monthly installments. If you do not get placed within 90 days, you pay ₹0 in tuition.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Pay After Placement in digital marketing real or fake? How does Vocaplace guarantee it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pay After Placement is a completely legitimate, legally binding educational model (known globally as an Income Share Agreement). Unlike institutes that disguise high-interest bank loans as Pay After Placement, Vocaplace operates with strict transparency: no third-party bank loan contracts, a contractually guaranteed ₹4.0 LPA minimum placement threshold, and direct live mentorship under recognized university faculty with 20+ years of growth experience.'
        }
      },
      {
        '@type': 'Question',
        name: "What happens if I don't get placed after completing the course?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you attend all scheduled sessions, complete assignments, and participate in interview drives but do not secure a job offer paying at least ₹4.0 LPA within 90 days of graduation, your tuition obligation is ₹0. Our contractual 100% Job Guarantee means Vocaplace bears the financial responsibility, not you.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the minimum salary (CTC) threshold before repayment starts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The minimum placement threshold is contractually set at ₹4.0 LPA. The batch average starting package is ₹6.5 LPA, with top performance marketing roles reaching ₹8.5 LPA. If an offer is below ₹4.0 LPA or is an unpaid internship, the Income Share Agreement does not activate.'
        }
      },
      {
        '@type': 'Question',
        name: "How do Vocaplace course fees compare to Kraftshala's ₹1,75,820 fees?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Kraftshala's Marketing Launchpad charges ₹1,49,000 + 18% GST (totaling ₹1,75,820) and requires a 20% upfront payment or bank loan. In contrast, Vocaplace defers your core tuition entirely until placement. You pay nothing in tuition upfront, saving over ₹1,20,000 in immediate capital risk while getting live mentorship under Victoria University faculty."
        }
      },
      {
        '@type': 'Question',
        name: 'Are there any hidden NBFC bank loans, interest charges, or penalty clauses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Unlike legacy edtech providers who register students for third-party bank loans disguised as ISAs that damage credit scores if delayed, Vocaplace manages its outcome contracts directly. There are no compound interest fees, no bank debt obligations, and no repayment triggers unless you are placed in a role paying ₹4–8 LPA.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need prior marketing or technical experience to join?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not at all. The program is designed from the ground up for fresh graduates (BBA, B.Com, B.Tech, BA, B.Sc, BCA), non-technical students, and working professionals (such as customer support, sales, or BPO agents) transitioning into marketing. Over 65% of our placed students had zero marketing background before enrolling.'
        }
      },
      {
        '@type': 'Question',
        name: 'What starting salary can freshers realistically expect in digital marketing in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our graduates typically earn between ₹4.0 LPA and ₹8.5 LPA, with a verified batch average of ₹6.5 LPA. Performance marketers trained in Meta Ads, Google Ads (PMax), GA4, and AI automation command 40–60% higher salaries than generalist marketers.'
        }
      },
      {
        '@type': 'Question',
        name: 'Who are the hiring partners and companies recruiting Vocaplace graduates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We partner with 200+ digital marketing agencies, high-growth D2C brands, and tech companies across Bangalore, Mumbai, Delhi NCR, and remote. Our hiring network includes top performance marketing agencies (Performics, Dentsu, Schbang, Merkle, iProspect) as well as direct consumer brands.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can working professionals or college students attend live classes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Vocaplace offers flexible evening batches (8:00 PM – 10:00 PM IST) and dedicated weekend interactive workshops. All live interactive sessions are recorded and available on your student portal with lifetime access so you can balance existing jobs or college schedules.'
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
 <section className="py-20 px-6 bg-slate-50">
   <div className="max-w-5xl mx-auto">
     <IsaCalculator />
   </div>
 </section>
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
        <ApplyNowButton
          source="Homepage Bottom CTA - Start Free Journey"
          className="h-14 px-8 bg-amber-400 text-blue-950 text-base font-bold flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors rounded-xl whitespace-nowrap cursor-pointer"
        >
          Start Your Free Journey →
        </ApplyNowButton>
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
