import React from 'react';
import HireTalentClient from '../../components/ContactClient'; // Wait, it should import HireTalentClient from '../../components/HireTalentClient'
import type { Metadata } from 'next';
import HireTalentClientComponent from '../../components/HireTalentClient';

export const metadata: Metadata = {
  title: 'Hire Job-Ready Digital Marketing Experts | Vocaplace',
  description: 'Hire AI-trained digital marketers who can run live campaigns from day one. Pre-vetted, portfolio-ready candidates. 90-day replacement guarantee. Post a role today.',
  alternates: { canonical: '/hire-talent' },
};

export default function HireTalentPage() {
 return <HireTalentClientComponent />;
}
