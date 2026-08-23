import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { RefreshCw, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund & Placement Guarantee Policy | Vocaplace',
  description: 'Refund and 100% placement guarantee terms for Vocaplace Pay After Placement Digital Marketing programs.',
  alternates: { canonical: '/refund' },
};

export default function RefundPage() {
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
        name: 'Refund Policy',
        item: 'https://vocaplace.com/refund',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="pt-28 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-900 mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900">
              <RefreshCw size={20} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Refund &amp; Placement Guarantee Policy</h1>
          </div>
          <p className="text-xs text-slate-400 mb-8">Last Updated: August 23, 2026</p>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. 100% Placement Guarantee Terms</h2>
              <p>
                Vocaplace operates on a student-first philosophy. Under our Pay After Placement model:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Students pay their core tuition fee only after securing a verifiable job offer meeting or exceeding the minimum CTC threshold (₹4 LPA to ₹8.5 LPA).</li>
                <li>If an eligible student who has completed all coursework, maintained 85%+ attendance, and attended scheduled placement interviews does not receive a qualifying job offer within 90 days of program completion, the remaining tuition liability is 100% waived.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Registration Fee Refund Window</h2>
              <p>
                Any initial seat reservation or registration fee is fully refundable within the first 7 calendar days of cohort orientation if a student decides the program is not the right fit for their career path.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. Refund Processing</h2>
              <p>
                Approved refund requests are processed within 5 to 7 business days via the original payment method (UPI, Net Banking, or Credit/Debit card).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Requesting a Refund</h2>
              <p>
                To request a refund or raise a placement inquiry, please email <a href="mailto:hello@vocaplace.com" className="text-blue-900 underline font-semibold">hello@vocaplace.com</a> with your enrollment ID and registered phone number.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
