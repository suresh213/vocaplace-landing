import React from 'react';
import ContactClient from '../../components/ContactClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Vocaplace | Apply for Digital Marketing Course',
  description: 'Next batch starting soon. Limited seats. 100% job guarantee. Pay after placement. Talk to our admissions team now.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
 return <ContactClient />;
}
