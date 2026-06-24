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
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <Results />
      <Curriculum />
      <Workflow />
      <Testimonials />
      <FAQ />
      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ready for the 2026 AI Era?
          </h2>
          <p className="text-slate-600 text-sm md:text-base mb-8 max-w-xl mx-auto font-mono">
            Join the future of education. Empower yourself with cutting-edge AI skills and land your dream career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="h-10 px-6 bg-blue-900 text-white text-sm font-medium hover:bg-blue-800 transition-colors border border-blue-900">
              Start Learning Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
