import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Vocaplace',
  description: 'Terms of Service for Vocaplace Technologies Pvt. Ltd. Understand the rules, obligations, and terms for our training and placement programs.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
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
        name: 'Terms of Service',
        item: 'https://vocaplace.com/terms',
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
              <FileText size={20} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Terms of Service</h1>
          </div>
          <p className="text-xs text-slate-400 mb-8">Last Updated: August 23, 2026</p>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Acceptance of Terms</h2>
              <p>
                By enrolling in or accessing any course, bootcamp, or portal provided by Vocaplace Technologies Pvt. Ltd., you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Educational Services &amp; Admissions</h2>
              <p>
                Vocaplace offers intensive training programs in Digital Marketing, Search Engine Optimization (SEO), Performance Marketing, and AI Automation. Enrollment is subject to candidate selection, prerequisite verification, and cohort availability.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. Pay After Placement &amp; Income Share Agreement (ISA)</h2>
              <p>
                Students opting for the Pay After Placement model enter into a formalized Income Share Agreement (ISA) with Vocaplace. Key terms include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Students agree to pay their deferred tuition in installments only upon securing employment above the guaranteed threshold (CTC ≥ ₹4 LPA).</li>
                <li>Students must maintain at least 85% attendance, complete required portfolio assignments, and participate actively in placement drives.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Intellectual Property</h2>
              <p>
                All course lectures, proprietary case studies, assignments, and curriculum materials are the exclusive intellectual property of Vocaplace Technologies Pvt. Ltd. and are licensed solely for the personal educational use of enrolled students.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
