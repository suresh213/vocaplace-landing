"use client";

import React, { useState } from 'react';
import { Calculator, CheckCircle2, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApplyModal } from './ApplyModalContext';

export default function IsaCalculator() {
  const { openModal } = useApplyModal();
  const [ctc, setCtc] = useState<number>(6.5); // In Lakhs per annum

  // Calculations
  const grossMonthly = Math.round((ctc * 100000) / 12);
  const estimatedTaxesAndPf = Math.round(grossMonthly * 0.12);
  const estimatedInHand = grossMonthly - estimatedTaxesAndPf;
  
  // Fixed reasonable monthly installment capped at 10 months only after placement
  const monthlyInstallment = Math.round(grossMonthly * 0.18);
  const netInHandDuringInstallment = estimatedInHand - monthlyInstallment;
  const competitorUpfrontFees = 175820; // Kraftshala with GST
  const vocaplaceUpfront = 0;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-blue-800/80 shadow-2xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-800/80 border border-blue-600/50 rounded-full text-amber-300 text-xs font-bold mb-3">
            <Calculator size={14} className="text-amber-400" />
            <span>Interactive Outcome Calculator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Calculate Your Pay After Placement Return on Investment
          </h3>
          <p className="text-blue-200 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            See exactly what your in-hand salary and income-linked installments look like after getting placed. Tuition is deferred until you land your offer letter.
          </p>
        </div>

        {/* Slider Controls */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <label className="text-sm font-bold text-slate-300">
              Expected Starting Salary (CTC):
            </label>
            <div className="text-2xl font-black text-amber-400">
              ₹{ctc.toFixed(1)} LPA
              <span className="text-xs font-normal text-slate-400 ml-2">
                (Avg: ₹4.0–8.5 LPA)
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
            <span>₹6.5 LPA (Batch Average)</span>
            <span>₹10.0 LPA (High Growth)</span>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { label: '₹4.5 LPA (Entry Level)', val: 4.5 },
              { label: '₹6.5 LPA (Vocaplace Avg)', val: 6.5 },
              { label: '₹8.0 LPA (Performance Lead)', val: 8.0 },
            ].map((preset) => (
              <button
                key={preset.val}
                type="button"
                onClick={() => setCtc(preset.val)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  ctc === preset.val
                    ? 'bg-amber-400 text-blue-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Calculation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {/* Card 1: Gross Monthly */}
          <div className="bg-blue-900/40 border border-blue-700/60 rounded-2xl p-5 text-center">
            <div className="text-[11px] font-bold text-blue-300 uppercase tracking-wider mb-1">
              Estimated Monthly In-Hand
            </div>
            <div className="text-2xl font-black text-white">
              ₹{estimatedInHand.toLocaleString('en-IN')}
            </div>
            <div className="text-[10px] text-blue-200 mt-1">
              Credited directly to your bank account
            </div>
          </div>

          {/* Card 2: Installment */}
          <div className="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-5 text-center">
            <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-1">
              Monthly Installment
            </div>
            <div className="text-2xl font-black text-amber-400">
              ₹{monthlyInstallment.toLocaleString('en-IN')}
            </div>
            <div className="text-[10px] text-amber-200/80 mt-1">
              Paid only after 1st month salary is credited
            </div>
          </div>

          {/* Card 3: Net Remaining */}
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5 text-center">
            <div className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider mb-1">
              Your Net Monthly Pocket
            </div>
            <div className="text-2xl font-black text-emerald-400">
              ₹{netInHandDuringInstallment.toLocaleString('en-IN')}
            </div>
            <div className="text-[10px] text-emerald-200/80 mt-1">
              You keep 80%+ of your income immediately
            </div>
          </div>
        </div>

        {/* Transparency Comparison Banner */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-white text-sm">
                100% Placement Outcome Guarantee
              </div>
              <div className="text-slate-400 text-xs">
                If you don't secure a job offer of at least ₹4.0 LPA within 90 days of graduation, your tuition fee is ₹0.
              </div>
            </div>
          </div>
          <div className="text-right sm:border-l sm:border-slate-800 sm:pl-4 shrink-0">
            <div className="text-[10px] text-slate-400">Competitors Upfront Fee</div>
            <div className="text-sm font-bold line-through text-red-400">
              ₹{competitorUpfrontFees.toLocaleString('en-IN')}
            </div>
            <div className="text-xs font-bold text-emerald-400">
              Vocaplace Upfront: ₹{vocaplaceUpfront}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => openModal({ source: `ISA Calculator (CTC: ₹${ctc}L)` })}
            className="w-full sm:w-auto h-14 px-8 bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold text-sm rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-amber-400/20 cursor-pointer"
          >
            Apply for Next Batch — Pay After Placement
            <ArrowRight size={16} />
          </button>
          <p className="text-slate-400 text-[11px] mt-2.5">
            100% Contractual Placement Guarantee · Live Training by Victoria University Faculty · Limited Seats
          </p>
        </div>
      </div>
    </div>
  );
}
