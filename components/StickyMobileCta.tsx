"use client";

import React, { useState, useEffect } from 'react';
import { useApplyModal } from './ApplyModalContext';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export default function StickyMobileCta() {
  const { openModal } = useApplyModal();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 320px)
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Mobile quick application bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-in-out pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Left Information */}
        <div className="min-w-0">
          <div className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 w-fit">
            <Sparkles size={11} className="text-amber-500 shrink-0" />
            <span>100% Job Guarantee</span>
          </div>
          <div className="text-xs font-black text-slate-900 truncate mt-0.5">
            Pay After Placement <span className="text-blue-900">· Flat ₹50k</span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/918882788412?text=Hi%20Vocaplace!%20I%20am%20interested%20in%20the%20Pay%20After%20Placement%20Digital%20Marketing%20Course."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Counselor on WhatsApp"
            className="w-10 h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-sm transition-colors cursor-pointer"
          >
            <MessageCircle size={20} />
          </a>

          {/* Quick Apply Button */}
          <button
            type="button"
            onClick={() => openModal({ source: 'Sticky Mobile Bar' })}
            className="h-10 px-4 bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold text-xs rounded-xl flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}
