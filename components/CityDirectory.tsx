"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Search, ArrowRight, Building2, Sparkles } from 'lucide-react';

interface CityItem {
  name: string;
  state: string;
  region: 'North' | 'South' | 'West & Central' | 'East & Northeast';
  hubs: string;
  salary: string;
  slug: string;
}

const CITIES: CityItem[] = [
  // North
  { name: 'Delhi NCR', state: 'Delhi NCR', region: 'North', hubs: 'South Delhi, Connaught Place & Okhla', salary: '₹4.5–7.5 LPA', slug: 'digital-marketing-course-in-delhi-ncr-with-100-placement' },
  { name: 'Noida', state: 'Uttar Pradesh', region: 'North', hubs: 'Sector 62, 63, 18 & Film City', salary: '₹4.5–7.5 LPA', slug: 'digital-marketing-course-in-noida-with-placement-guarantee' },
  { name: 'Gurgaon', state: 'Haryana', region: 'North', hubs: 'Cyber City, Udyog Vihar & Golf Course', salary: '₹5.0–8.5 LPA', slug: 'digital-marketing-course-in-gurgaon-with-placement-guarantee' },
  { name: 'Lucknow', state: 'Uttar Pradesh', region: 'North', hubs: 'Hazratganj, Gomti Nagar & Aliganj', salary: '₹4.0–6.5 LPA', slug: 'digital-marketing-course-in-lucknow-with-placement-guarantee' },
  { name: 'Kanpur', state: 'Uttar Pradesh', region: 'North', hubs: 'Kakadeo, Mall Road & Swaroop Nagar', salary: '₹4.0–6.0 LPA', slug: 'digital-marketing-course-in-kanpur-with-placement-guarantee' },
  { name: 'Chandigarh', state: 'Punjab / HR', region: 'North', hubs: 'IT Park, Mohali & Sector 34', salary: '₹4.2–6.8 LPA', slug: 'digital-marketing-course-in-chandigarh-with-placement' },
  { name: 'Ludhiana', state: 'Punjab', region: 'North', hubs: 'Ferozepur Road & Model Town', salary: '₹4.0–6.5 LPA', slug: 'digital-marketing-course-in-ludhiana-with-placement-guarantee' },
  { name: 'Jaipur', state: 'Rajasthan', region: 'North', hubs: 'Mansarovar, Malviya Nagar & Vaishali', salary: '₹4.0–6.5 LPA', slug: 'digital-marketing-course-in-jaipur-with-placement-guarantee' },

  // South
  { name: 'Bangalore', state: 'Karnataka', region: 'South', hubs: 'Koramangala, HSR, Indiranagar & ORR', salary: '₹4.5–8.5 LPA', slug: 'digital-marketing-course-in-bangalore-with-placement-guarantee' },
  { name: 'Hyderabad', state: 'Telangana', region: 'South', hubs: 'HITEC City, Madhapur & Gachibowli', salary: '₹4.5–7.5 LPA', slug: 'digital-marketing-course-in-hyderabad-with-job-guarantee' },
  { name: 'Chennai', state: 'Tamil Nadu', region: 'South', hubs: 'OMR, Guindy, T. Nagar & Velachery', salary: '₹4.2–7.0 LPA', slug: 'digital-marketing-course-in-chennai-with-job-guarantee' },
  { name: 'Coimbatore', state: 'Tamil Nadu', region: 'South', hubs: 'Tidel Park, Saravanampatti & Gandhipuram', salary: '₹4.5–7.0 LPA', slug: 'digital-marketing-course-in-coimbatore-with-placement-guarantee' },
  { name: 'Kochi', state: 'Kerala', region: 'South', hubs: 'Infopark, Kakkanad & Kaloor', salary: '₹4.0–6.5 LPA', slug: 'digital-marketing-course-in-kochi-with-job-guarantee' },
  { name: 'Trivandrum', state: 'Kerala', region: 'South', hubs: 'Technopark, Kazhakkoottam & Palayam', salary: '₹4.2–6.5 LPA', slug: 'digital-marketing-course-in-trivandrum-with-placement-guarantee' },
  { name: 'Visakhapatnam', state: 'Andhra Pradesh', region: 'South', hubs: 'Rushikonda IT SEZ, MVP Colony & Dwaraka', salary: '₹4.0–6.5 LPA', slug: 'digital-marketing-course-in-visakhapatnam-with-placement-guarantee' },
  { name: 'Vijayawada', state: 'Andhra Pradesh', region: 'South', hubs: 'Benz Circle, Governorpet & MG Road', salary: '₹4.2–6.2 LPA', slug: 'digital-marketing-course-in-vijayawada-with-placement-guarantee' },

  // West & Central
  { name: 'Mumbai', state: 'Maharashtra', region: 'West & Central', hubs: 'BKC, Lower Parel, Andheri & Malad', salary: '₹4.5–8.0 LPA', slug: 'digital-marketing-course-in-mumbai-with-placement-guarantee' },
  { name: 'Thane', state: 'Maharashtra', region: 'West & Central', hubs: 'Wagle Estate, Ghodbunder Rd & Majiwada', salary: '₹4.2–6.5 LPA', slug: 'digital-marketing-course-in-thane-with-placement-guarantee' },
  { name: 'Navi Mumbai', state: 'Maharashtra', region: 'West & Central', hubs: 'Vashi, Belapur CBD & Mindspace Airoli', salary: '₹4.2–6.5 LPA', slug: 'digital-marketing-course-in-navi-mumbai-with-placement-guarantee' },
  { name: 'Pune', state: 'Maharashtra', region: 'West & Central', hubs: 'Hinjawadi, Baner, Viman Nagar & Kalyani', salary: '₹4.5–7.5 LPA', slug: 'digital-marketing-course-in-pune-with-placement' },
  { name: 'Nagpur', state: 'Maharashtra', region: 'West & Central', hubs: 'MIHAN SEZ, Dharampeth & Sitabuldi', salary: '₹4.2–6.5 LPA', slug: 'digital-marketing-course-in-nagpur-with-placement-guarantee' },
  { name: 'Ahmedabad', state: 'Gujarat', region: 'West & Central', hubs: 'SG Highway, Prahlad Nagar & Bodakdev', salary: '₹4.2–6.8 LPA', slug: 'digital-marketing-course-in-ahmedabad-with-100-placement' },
  { name: 'Surat', state: 'Gujarat', region: 'West & Central', hubs: 'Ring Road, Vesu, Adajan & Varachha', salary: '₹4.2–7.0 LPA', slug: 'digital-marketing-course-in-surat-with-placement-guarantee' },
  { name: 'Vadodara', state: 'Gujarat', region: 'West & Central', hubs: 'Alkapuri, Sayajigunj & Gotri', salary: '₹4.0–6.2 LPA', slug: 'digital-marketing-course-in-vadodara-with-placement-guarantee' },
  { name: 'Bhopal', state: 'Madhya Pradesh', region: 'West & Central', hubs: 'M.P. Nagar Zones 1 & 2, Arera Colony', salary: '₹4.0–6.0 LPA', slug: 'digital-marketing-course-in-bhopal-with-placement-guarantee' },
  { name: 'Indore', state: 'Madhya Pradesh', region: 'West & Central', hubs: 'Vijay Nagar, Palasia & Super Corridor', salary: '₹4.0–6.5 LPA', slug: 'digital-marketing-course-in-indore-with-placement-guarantee' },
  { name: 'Raipur', state: 'Chhattisgarh', region: 'West & Central', hubs: 'Pandri, Shankar Nagar & Telibandha', salary: '₹4.0–5.8 LPA', slug: 'digital-marketing-course-in-raipur-with-placement-guarantee' },

  // East & Northeast
  { name: 'Kolkata', state: 'West Bengal', region: 'East & Northeast', hubs: 'Sector V Salt Lake & New Town Rajarhat', salary: '₹4.0–6.5 LPA', slug: 'digital-marketing-course-in-kolkata-with-placement' },
  { name: 'Patna', state: 'Bihar', region: 'East & Northeast', hubs: 'Boring Road, Kankarbagh & Bailey Road', salary: '₹4.0–6.0 LPA', slug: 'digital-marketing-course-in-patna-with-placement-guarantee' },
  { name: 'Bhubaneswar', state: 'Odisha', region: 'East & Northeast', hubs: 'Infocity, Patia & Chandaka IT Park', salary: '₹4.0–6.0 LPA', slug: 'digital-marketing-course-in-bhubaneswar-with-placement-guarantee' },
  { name: 'Ranchi', state: 'Jharkhand', region: 'East & Northeast', hubs: 'Lalpur, Circular Road & Hinoo', salary: '₹4.0–5.5 LPA', slug: 'digital-marketing-course-in-ranchi-with-placement-guarantee' },
  { name: 'Guwahati', state: 'Assam', region: 'East & Northeast', hubs: 'GS Road, Zoo Road & Christian Basti', salary: '₹4.0–5.5 LPA', slug: 'digital-marketing-course-in-guwahati-with-placement-guarantee' },
];

export default function CityDirectory() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const regions = ['All', 'North', 'South', 'West & Central', 'East & Northeast'];

  const filteredCities = CITIES.filter((city) => {
    const matchesRegion = selectedRegion === 'All' || city.region === selectedRegion;
    const matchesSearch =
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.hubs.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-900/60 border border-blue-700/60 text-amber-300 text-xs font-bold rounded-full mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>Pan-India Placement Network (32 Hubs)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Explore Placement Hubs Across India
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Vocaplace connects graduates from every major tech corridor to high-paying agency and remote startup roles paying ₹4.0–8.5 LPA.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search city or neighborhood..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-3 text-xs bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCities.map((city) => (
            <Link
              key={city.slug}
              href={`/blog/${city.slug}`}
              className="group p-4 bg-slate-800/80 hover:bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 font-bold text-sm text-white group-hover:text-blue-400 transition-colors">
                    <MapPin size={14} className="text-amber-400 shrink-0" />
                    <span>{city.name}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 bg-slate-700 px-2 py-0.5 rounded">
                    {city.state}
                  </span>
                </div>

                <div className="flex items-start gap-1.5 text-[11px] text-slate-300 mb-3">
                  <Building2 size={12} className="text-slate-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{city.hubs}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block">Placement Anchor:</span>
                  <span className="font-bold text-amber-400">{city.salary}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-400 group-hover:translate-x-0.5 transition-transform">
                  View Guide <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredCities.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-xs">
            No cities match your search. Try another location or select &quot;All&quot;.
          </div>
        )}
      </div>
    </section>
  );
}
