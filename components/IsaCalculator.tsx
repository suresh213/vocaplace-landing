"use client";

import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  XCircle, 
  TrendingUp, 
  Check, 
  X,
  AlertCircle
} from 'lucide-react';
import { useApplyModal } from './ApplyModalContext';

export default function IsaCalculator() {
  const { openModal } = useApplyModal();
  const [ctc, setCtc] = useState<number>(6.5); // In Lakhs per annum

  // Calculations based on current selected CTC
  const annualSalary = ctc * 100000;
  const grossMonthly = Math.round(annualSalary / 12);
  const estimatedTaxesAndPf = Math.round(grossMonthly * 0.12);
  const estimatedInHand = grossMonthly - estimatedTaxesAndPf;
  
  // Vocaplace Model: Flat ₹50,000 fee once placed. That's it!
  const vocaplaceFlatFee = 50000;
  const vocaplaceMonthlyInstallment = Math.round(vocaplaceFlatFee / 10); // ₹5,000/mo over 10 months
  const vocaplaceNetInHand = estimatedInHand - vocaplaceMonthlyInstallment;

  // Competitor Models:
  // 1. Percentage-based ISAs: 17% of annual CTC (standard market rate between 15% and 20%)
  const competitorPercentRate = 0.17;
  const competitorPercentTotal = Math.round(annualSalary * competitorPercentRate);
  const competitorPercentMonthly = Math.round(competitorPercentTotal / 10);
  const competitorPercentNetInHand = estimatedInHand - competitorPercentMonthly;

  // 2. High-priced bootcamps with upfront / loan structures (e.g. Kraftshala at ₹1,49,000 + 18% GST = ₹1,75,820)
  const competitorFixedFee = 175820;

  // Student Savings
  const savingsVsPercentIsa = competitorPercentTotal - vocaplaceFlatFee;
  const savingsVsFixedBootcamp = competitorFixedFee - vocaplaceFlatFee;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-blue-800/80 shadow-2xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-800/80 border border-blue-600/50 rounded-full text-amber-300 text-xs font-bold mb-3">
            <Calculator size={14} className="text-amber-400" />
            <span>Pay After Placement Fee Comparison (2026)</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Others Charge 15%–20% of Your Salary. <br className="hidden sm:inline" />
            <span className="text-amber-400">Vocaplace Charges a Flat ₹50k Fee Once Placed. That's It!</span>
          </h3>
          <p className="text-blue-200 text-xs sm:text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
            See how traditional edtech bootcamps overprice after placement by extracting a percentage cut of your income. Vocaplace protects your hard work with a transparent <strong>flat ₹50,000 fee</strong> - payable in easy installments only after you secure your offer letter.
          </p>
        </div>

        {/* Slider Controls */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 mb-8 space-y-4 shadow-inner">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <label className="text-sm font-bold text-slate-200 block">
                Select Your Expected Starting Salary (CTC):
              </label>
              <span className="text-[11px] text-slate-400">
                Move the slider to compare how fees scale with your income
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">
              ₹{ctc.toFixed(1)} LPA
              <span className="text-xs font-semibold text-slate-400 ml-2">
                (₹{grossMonthly.toLocaleString('en-IN')}/mo)
              </span>
            </div>
          </div>

          <input
            type="range"
            min="4.0"
            max="10.0"
            step="0.5"
            value={ctc}
            onChange={(e) => setCtc(parseFloat(e.target.value))}
            className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />

          <div className="flex justify-between text-[11px] text-slate-400 font-semibold px-1">
            <span>₹4.0 LPA (Minimum Guarantee)</span>
            <span>₹6.5 LPA (Vocaplace Batch Avg)</span>
            <span>₹10.0 LPA (Top Agency Lead)</span>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { label: '₹4.5 LPA (Entry Level)', val: 4.5 },
              { label: '₹6.5 LPA (Batch Average)', val: 6.5 },
              { label: '₹8.0 LPA (Performance Marketer)', val: 8.0 },
              { label: '₹10.0 LPA (Growth Lead)', val: 10.0 },
            ].map((preset) => (
              <button
                key={preset.val}
                type="button"
                onClick={() => setCtc(preset.val)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  ctc === preset.val
                    ? 'bg-amber-400 text-blue-950 font-bold shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Side-by-Side Live Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: Vocaplace (The Fair Flat Fee Model) */}
          <div className="bg-gradient-to-br from-emerald-950/60 via-slate-900 to-blue-950/80 border-2 border-emerald-500/80 rounded-2xl p-6 relative overflow-hidden shadow-xl">
            <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider rounded-full">
              Vocaplace Advantage
            </div>

            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h4 className="text-lg font-black text-white">Vocaplace Flat Fee Model</h4>
            </div>
            <p className="text-xs text-slate-300 mb-5">
              Transparent, fixed tuition. No percentage cuts from your paycheck.
            </p>

            <div className="space-y-4 bg-slate-950/70 p-4 rounded-xl border border-emerald-500/30">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Total Fee After Placement:</span>
                <span className="text-2xl font-black text-emerald-400">
                  Flat ₹50,000
                </span>
              </div>
              <div className="flex items-center justify-between text-xs border-t border-slate-800 pt-2.5">
                <span className="text-slate-400">Percentage Cut From Salary:</span>
                <span className="font-bold text-emerald-300">0% (You keep 100% CTC)</span>
              </div>
              <div className="flex items-center justify-between text-xs border-t border-slate-800 pt-2.5">
                <span className="text-slate-400">Monthly Installment (10 Months):</span>
                <span className="font-bold text-white">₹{vocaplaceMonthlyInstallment.toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="flex items-center justify-between text-xs border-t border-slate-800 pt-2.5">
                <span className="text-slate-400">Your Monthly In-Hand (Net):</span>
                <span className="font-black text-emerald-300 text-sm">₹{vocaplaceNetInHand.toLocaleString('en-IN')}/mo</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-[11px] text-emerald-200 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Zero Salary Penalty:</strong> Whether you negotiate ₹5 LPA or ₹10 LPA, your fee remains strictly <strong>Flat ₹50,000</strong>. Every extra rupee earned belongs to you!
              </span>
            </div>
          </div>

          {/* Card 2: Other Bootcamps (% ISA & Inflated Fees) */}
          <div className="bg-slate-900/80 border border-red-500/40 rounded-2xl p-6 relative overflow-hidden shadow-xl">
            <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-red-500/20 border border-red-400/40 text-red-300 text-[10px] font-extrabold uppercase tracking-wider rounded-full">
              Overpriced Model
            </div>

            <div className="flex items-center gap-2 mb-2">
              <XCircle className="w-5 h-5 text-red-400" />
              <h4 className="text-lg font-black text-slate-200">Other Institutes (% ISA / Loans)</h4>
            </div>
            <p className="text-xs text-slate-400 mb-5">
              15%–20% of your annual income or expensive ₹1.75L loan agreements.
            </p>

            <div className="space-y-4 bg-slate-950/70 p-4 rounded-xl border border-red-500/20">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Total Deducted After Placement:</span>
                <span className="text-2xl font-black text-red-400">
                  ₹{competitorPercentTotal.toLocaleString('en-IN')} <span className="text-xs text-slate-400 font-normal">to ₹1.75L+</span>
                </span>
              </div>
              <div className="flex items-center justify-between text-xs border-t border-slate-800 pt-2.5">
                <span className="text-slate-400">Percentage Cut From Salary:</span>
                <span className="font-bold text-red-400">15% – 20% of Gross CTC</span>
              </div>
              <div className="flex items-center justify-between text-xs border-t border-slate-800 pt-2.5">
                <span className="text-slate-400">Monthly Cut (10 Months):</span>
                <span className="font-bold text-red-300">₹{competitorPercentMonthly.toLocaleString('en-IN')}/mo</span>
              </div>
              <div className="flex items-center justify-between text-xs border-t border-slate-800 pt-2.5">
                <span className="text-slate-400">Your Monthly In-Hand (Net):</span>
                <span className="font-bold text-slate-400 text-sm">₹{competitorPercentNetInHand.toLocaleString('en-IN')}/mo</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-[11px] text-red-300 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>
                <strong>The % ISA Trap:</strong> Bootcamps penalize your ambition. As your CTC increases, their fee balloons from ₹75,000 to ₹1,70,000+!
              </span>
            </div>
          </div>
        </div>

        {/* Massive Savings Callout Banner */}
        <div className="bg-gradient-to-r from-amber-500/20 via-blue-900/40 to-emerald-500/20 border border-amber-400/50 rounded-2xl p-6 mb-8 text-center shadow-lg">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-1">
            Your Guaranteed Savings With Vocaplace
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            You Save <span className="text-emerald-400">₹{savingsVsPercentIsa.toLocaleString('en-IN')}</span> vs % ISAs &amp; <span className="text-amber-400">₹{savingsVsFixedBootcamp.toLocaleString('en-IN')}</span> vs Kraftshala
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto">
            Why pay ₹1.1 Lakh to ₹1.75 Lakh for digital marketing? Vocaplace charges a fair, transparent <strong>Flat ₹50,000</strong> once placed. That's it. Core tuition is deferred until you land your verified job.
          </p>
        </div>

        {/* Detailed Feature Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80 mb-8 shadow-md">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/90 text-slate-300">
                <th className="p-3.5 sm:p-4 font-bold">Comparison Metric</th>
                <th className="p-3.5 sm:p-4 font-extrabold text-amber-400 bg-blue-950/50">Vocaplace (Flat Fee)</th>
                <th className="p-3.5 sm:p-4 font-bold text-slate-400">Standard % ISAs (17%)</th>
                <th className="p-3.5 sm:p-4 font-bold text-slate-400">Bootcamps (Kraftshala)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="p-3.5 sm:p-4 font-semibold text-white">Fee Model</td>
                <td className="p-3.5 sm:p-4 font-bold text-emerald-400 bg-blue-950/30">Flat ₹50,000 Total</td>
                <td className="p-3.5 sm:p-4">15% – 20% of Annual CTC</td>
                <td className="p-3.5 sm:p-4">₹1,49,000 + 18% GST</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 font-semibold text-white">Total Cost at ₹{ctc} LPA</td>
                <td className="p-3.5 sm:p-4 font-black text-amber-400 bg-blue-950/30">₹50,000 (Fixed)</td>
                <td className="p-3.5 sm:p-4 text-red-400 font-semibold">₹{competitorPercentTotal.toLocaleString('en-IN')}</td>
                <td className="p-3.5 sm:p-4 text-red-400 font-semibold">₹1,75,820</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 font-semibold text-white">Salary Increment Penalty?</td>
                <td className="p-3.5 sm:p-4 font-bold text-emerald-400 bg-blue-950/30">
                  <span className="inline-flex items-center gap-1">
                    <Check size={14} className="text-emerald-400" />
                    None (Always Flat ₹50k)
                  </span>
                </td>
                <td className="p-3.5 sm:p-4 text-slate-400">
                  <span className="inline-flex items-center gap-1 text-red-400">
                    <X size={14} />
                    Higher CTC = Higher Fee
                  </span>
                </td>
                <td className="p-3.5 sm:p-4 text-slate-400">Locked to High Fixed Fee</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 font-semibold text-white">Core Tuition Payment Timing</td>
                <td className="p-3.5 sm:p-4 font-bold text-emerald-400 bg-blue-950/30">Only after job offer letter</td>
                <td className="p-3.5 sm:p-4">After job offer letter</td>
                <td className="p-3.5 sm:p-4">20% Upfront + Loan</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 font-semibold text-white">Third-Party NBFC Loan?</td>
                <td className="p-3.5 sm:p-4 font-bold text-emerald-400 bg-blue-950/30">No Bank Loan (Direct)</td>
                <td className="p-3.5 sm:p-4 text-amber-400">Often disguised as NBFC loan</td>
                <td className="p-3.5 sm:p-4 text-red-400">Mandatory NBFC Loan</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 font-semibold text-white">Unplaced Policy (90 Days)</td>
                <td className="p-3.5 sm:p-4 font-bold text-emerald-400 bg-blue-950/30">Tuition liability is ₹0</td>
                <td className="p-3.5 sm:p-4">Conditional waivers</td>
                <td className="p-3.5 sm:p-4">Strict refund conditions</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 font-semibold text-white">Live Ad Budgets Included?</td>
                <td className="p-3.5 sm:p-4 font-bold text-emerald-400 bg-blue-950/30">
                  <span className="inline-flex items-center gap-1">
                    <Check size={14} className="text-emerald-400" />
                    Yes (Real Google &amp; Meta Ads)
                  </span>
                </td>
                <td className="p-3.5 sm:p-4">Rarely (Simulations only)</td>
                <td className="p-3.5 sm:p-4">Simulated projects</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Outcome Guarantee Trust Badge */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-white text-sm">
                100% Contractual Placement Guarantee (₹4.0–8.5 LPA)
              </div>
              <div className="text-slate-400 text-xs mt-0.5">
                If you don't secure a verified job offer of at least ₹4.0 LPA within 90 days of graduation, your tuition fee is ₹0.
              </div>
            </div>
          </div>
          <div className="text-right sm:border-l sm:border-slate-800 sm:pl-4 shrink-0">
            <div className="text-[10px] text-slate-400">Vocaplace Total Outcome Fee</div>
            <div className="text-base font-black text-amber-400">
              Flat ₹50,000 (Once Placed)
            </div>
            <div className="text-[10px] text-emerald-400 font-semibold">
              Core Tuition Deferred Until Hired
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => openModal({ source: `ISA Calculator Flat 50k (CTC: ₹${ctc}L)` })}
            className="w-full sm:w-auto h-14 px-8 bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold text-sm rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-amber-400/20 cursor-pointer"
          >
            Apply for Next Batch - Pay Flat ₹50k Only After Placement
            <ArrowRight size={16} />
          </button>
          <p className="text-slate-400 text-[11px] mt-2.5">
            Flat ₹50,000 Fee Once Placed · Zero % Deductions · Mentorship by Victoria University Faculty Wajed Sk
          </p>
        </div>
      </div>
    </div>
  );
}
