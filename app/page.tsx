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
 return (
 <>
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
 </>
 );
}
