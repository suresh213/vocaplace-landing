import React from 'react';
import HireTalentClient from '../../components/ContactClient'; // Wait, it should import HireTalentClient from '../../components/HireTalentClient'
import type { Metadata } from 'next';
import HireTalentClientComponent from '../../components/HireTalentClient';

export const metadata: Metadata = {
 title: 'Hire Job-Ready Marketing Talent - Vocaplace Placement Solutions',
 description: 'Access our verified pool of pre-trained digital marketing and performance campaign specialists. Skip onboarding delays and scale campaigns from day one.',
 alternates: {
 canonical: '/hire-talent',
 },
};

export default function HireTalentPage() {
 return <HireTalentClientComponent />;
}
