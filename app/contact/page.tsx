import React from 'react';
import ContactClient from '../../components/ContactClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Vocaplace - Admissions, Partnerships & Support',
  description: 'Reach out to Vocaplace for general inquiries, course admissions, agency partnership drives, and dedicated student support.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
