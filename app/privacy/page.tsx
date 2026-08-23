import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vocaplace',
  description: 'Privacy Policy for Vocaplace Technologies Pvt. Ltd. Learn how we collect, use, and safeguard your personal data.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
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
        name: 'Privacy Policy',
        item: 'https://vocaplace.com/privacy',
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
              <Shield size={20} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
          </div>
          <p className="text-xs text-slate-400 mb-8">Last Updated: August 23, 2026</p>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Overview</h2>
              <p>
                Vocaplace Technologies Pvt. Ltd. (&quot;Vocaplace&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website at <a href="https://vocaplace.com" className="text-blue-900 font-semibold underline">vocaplace.com</a> or use our learning services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Information We Collect</h2>
              <p>We may collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Personal identification details (Name, Email Address, Phone Number, City).</li>
                <li>Educational background, professional experience, and resume submissions.</li>
                <li>Communication preferences and inquiry messages submitted through contact forms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. How We Use Your Information</h2>
              <p>We utilize the collected information to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Process course applications, verify eligibility, and manage student onboarding.</li>
                <li>Deliver live training sessions, project reviews, and placement assistance.</li>
                <li>Connect students with hiring partner networks for interviews and employment offers.</li>
                <li>Send important program updates, schedule changes, and technical support notices.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Data Protection &amp; Security</h2>
              <p>
                We employ industry-standard technical and organizational security measures, including SSL encryption, secure servers, and access controls, to safeguard your data against unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Third-Party Sharing</h2>
              <p>
                We do not sell your personal data. We only share candidate information with vetted hiring partner companies for recruitment purposes with candidate consent, or with secure cloud infrastructure providers necessary to operate our student platform.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">6. Contact Us</h2>
              <p>
                If you have questions regarding this Privacy Policy, please contact our Data Protection Officer at:
              </p>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-2 text-xs">
                <p className="font-bold text-slate-900">Vocaplace Technologies Pvt. Ltd.</p>
                <p>Email: <a href="mailto:hello@vocaplace.com" className="text-blue-900 underline">hello@vocaplace.com</a></p>
                <p>Phone: +91 85276 47899</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
