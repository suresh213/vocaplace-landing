import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Self-Paced',
    price: '₹15,000',
    description: 'Perfect for self-learners who want flexibility in their schedule.',
    features: ['Course Content Access', 'Project Assignments', 'AI Mentor Support', 'Community Access', 'Certificate on Completion'],
  },
  {
    name: 'Mentor Guided',
    price: '₹45,000',
    description: 'Best for those who want personalized guidance throughout their journey.',
    features: ['Everything in Self-Paced', 'Live Sessions Weekly', 'Project Reviews', '1-on-1 Mentor Guidance', 'Interview Preparation'],
    recommended: true,
  },
  {
    name: 'Career Track',
    price: '₹85,000',
    description: 'Complete package for those serious about landing their dream job.',
    features: ['Everything in Mentor Guided', 'Mock Interviews', 'Dedicated Career Support', 'Placement Preparation', 'Direct Hiring Partner Access'],
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Simple, Transparent Pricing</h2>
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto">
            Choose a learning plan that fits your goals. All plans include access to our learning platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative p-6 border transition-all ${
                tier.recommended 
                  ? 'border-slate-900 bg-slate-50' 
                  : 'border-slate-200 bg-white hover:border-slate-400'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-medium px-3 py-1 uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                </div>
                <p className="text-slate-500 text-sm">{tier.description}</p>
              </div>

              <div className="border-t border-slate-200 pt-4 mb-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check size={14} className="text-slate-900 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-2.5 text-sm font-medium transition-all border ${
                tier.recommended
                  ? 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-900 hover:text-white'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
