"use client";

import React from 'react';
import { Sparkles, TrendingUp, CheckCircle2, Building2 } from 'lucide-react';

interface PlacementItem {
  name: string;
  degree: string;
  role: string;
  company: string;
  ctc: string;
}

const placements: PlacementItem[] = [
  { name: "Priya S.", degree: "B.Com Graduate", role: "Performance Marketer", company: "BrandFlow", ctc: "₹7.0 LPA" },
  { name: "Rahul M.", degree: "BBA Final Year", role: "Paid Search Specialist", company: "Dentsu Performance", ctc: "₹6.5 LPA" },
  { name: "Sneha D.", degree: "B.Tech Graduate", role: "SEO Strategist", company: "Schbang", ctc: "₹7.2 LPA" },
  { name: "Arjun K.", degree: "BCA Graduate", role: "Growth Associate", company: "Performics", ctc: "₹6.8 LPA" },
  { name: "Ananya R.", degree: "BA Graduate", role: "Social Media Lead", company: "Merkle Sokrati", ctc: "₹6.0 LPA" },
  { name: "Karan V.", degree: "B.Com Graduate", role: "Analytics Executive", company: "GroupM Wavemaker", ctc: "₹7.5 LPA" },
  { name: "Divya N.", degree: "BBA Graduate", role: "Performance Account Manager", company: "iProspect", ctc: "₹6.2 LPA" },
  { name: "Mohit A.", degree: "Support Professional", role: "Google Ads Specialist", company: "D2C Agency", ctc: "₹8.0 LPA" },
];

export default function PlacementTicker() {
  return (
    <div className="bg-slate-900 text-white border-y border-slate-800 py-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
            Recent Batch Placements (Class of 2025/2026)
          </span>
        </div>
        <div className="text-[11px] text-slate-400 hidden sm:flex items-center gap-1.5 font-medium">
          <CheckCircle2 size={13} className="text-emerald-400" />
          <span>100% Verified Offer Letters · Average Package: ₹6.5 LPA</span>
        </div>
      </div>

      {/* Marquee Scroller */}
      <div className="flex w-max animate-marquee space-x-4">
        {[...placements, ...placements].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-slate-800/80 border border-slate-700/70 rounded-xl px-4 py-2 text-xs shrink-0"
          >
            <div className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-400/30 flex items-center justify-center font-bold text-blue-300 text-xs">
              {item.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-100">{item.name}</span>
                <span className="text-[10px] text-slate-400">({item.degree})</span>
              </div>
              <div className="text-[11px] text-slate-300">
                {item.role} @ <strong className="text-white">{item.company}</strong>
              </div>
            </div>
            <div className="ml-2 pl-3 border-l border-slate-700">
              <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                {item.ctc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
