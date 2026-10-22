"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi Vocaplace! I want to know more about the Pay After Placement Digital Marketing program.");
  const whatsappUrl = `https://wa.me/918240127751?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Senior Admissions Counselor on WhatsApp"
      className="hidden md:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105 group border border-emerald-400/30"
    >
      <div className="relative">
        <MessageCircle size={22} className="text-white" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[10px] uppercase font-bold text-emerald-100 tracking-wider leading-tight">Questions?</span>
        <span className="text-xs font-bold text-white leading-tight">Chat on WhatsApp</span>
      </div>
    </a>
  );
}
