"use client";

import { useApplyModal } from "./ApplyModalContext";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const { openModal } = useApplyModal();
 return (
 <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

 {/* Brand */}
 <div className="col-span-2 md:col-span-1">
 <div className="flex items-center gap-2 mb-4">
 <Image src="/logo.jpeg" alt="Vocaplace" width={36} height={36} className="rounded-full object-contain bg-white"/>
 <span className="text-lg font-bold text-white">Vocaplace</span>
 </div>
 <p className="text-slate-400 text-sm leading-relaxed mb-5">
 India's #1 Pay After Placement digital marketing academy. 
 Learn, get placed, then pay with our 100% job guarantee.
 </p>
 <div className="flex items-center gap-3">
 <a href="https://www.instagram.com/vocaplace" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors">
 <Instagram size={15} />
 </a>
 <a href="https://www.linkedin.com/company/vocaplace" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors">
 <Linkedin size={15} />
 </a>
 <a href="https://www.youtube.com/@vocaplace" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors">
 <Youtube size={15} />
 </a>
 </div>
 </div>

  {/* Programs */}
  <div>
  <h4 className="font-bold text-white mb-5 text-sm">Programs</h4>
  <ul className="space-y-3 text-sm">
  <li><Link href="/pay-after-placement" className="hover:text-white transition-colors">Pay After Placement Model</Link></li>
  <li><Link href="/courses" className="hover:text-white transition-colors">All Programs</Link></li>
  <li><Link href="/syllabus" className="hover:text-white transition-colors">120-Day Syllabus Guide</Link></li>
  <li><Link href="/courses/digital-marketing-mastery" className="hover:text-white transition-colors">Digital Marketing Mastery</Link></li>
  <li><Link href="/career" className="hover:text-white transition-colors">Degree Career Tracks</Link></li>
  <li><Link href="/blog/top-pay-after-placement-digital-marketing-courses" className="hover:text-white transition-colors">Placement Guarantee Courses</Link></li>
  <li><Link href="/compare" className="hover:text-white transition-colors">Compare Institutes</Link></li>
   <li><button type="button" onClick={() => openModal({ source: "Footer - Apply for Admission" })} className="hover:text-white transition-colors text-left cursor-pointer">Apply for Admission</button></li>
  </ul>
  </div>

  {/* Company */}
  <div>
  <h4 className="font-bold text-white mb-5 text-sm">Company</h4>
  <ul className="space-y-3 text-sm">
  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
  <li><Link href="/mentor/wajed" className="hover:text-white transition-colors">Lead Mentor (Wajed Sk)</Link></li>
  <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Insights</Link></li>
  <li><Link href="/hire-talent" className="hover:text-white transition-colors">Hire Our Graduates</Link></li>
  <li><Link href="/site-directory" className="hover:text-white transition-colors font-medium text-amber-300">Site Directory</Link></li>
  <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
  </ul>
  </div>

  {/* Contact */}
  <div>
  <h4 className="font-bold text-white mb-5 text-sm">Contact Us</h4>
  <ul className="space-y-3 text-sm">
  <li className="flex items-center gap-2">
  <Phone size={14} className="text-blue-400 shrink-0"/>
  <a href="tel:+918240127751" className="hover:text-white transition-colors">+91 82401 27751</a>
  </li>
  <li className="flex items-center gap-2">
  <Mail size={14} className="text-blue-400 shrink-0"/>
  <a href="mailto:hello@vocaplace.com" className="hover:text-white transition-colors">hello@vocaplace.com</a>
  </li>
  </ul>
  </div>

  </div>

      {/* Popular Guides & Playbooks */}
      <div className="py-5 border-t border-slate-800 text-xs text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">Popular Career &amp; Marketing Playbooks:</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px]">
          <Link href="/blog/generative-engine-optimization-geo-how-to-rank-in-chatgpt-perplexity" className="hover:text-white transition-colors">Generative Engine Optimization (GEO)</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/how-to-automate-lead-generation-with-ai-and-zapier" className="hover:text-white transition-colors">AI Lead Automation with Zapier</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-tools-every-marketer-must-master-in-2026" className="hover:text-white transition-colors">Essential Marketing Tools 2026</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/b2c-ecommerce-marketing-scaling-d2c-brands-to-1-crore-monthly" className="hover:text-white transition-colors">Scaling D2C Brands to ₹1 Cr</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/internshala-digital-marketing-course-with-placement-guarantee-review" className="hover:text-white transition-colors">Internshala Course Review</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-fees-in-india-2026-guide" className="hover:text-white transition-colors">Course Fees Guide 2026</Link>
        </div>
      </div>

      {/* Degree & Background Career Transitions */}
      <div className="py-5 border-t border-slate-800 text-xs text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">Career Transitions by College Degree:</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px]">
          <Link href="/career/bba-to-digital-marketing" className="hover:text-white transition-colors">BBA to Digital Marketing</Link>
          <span className="text-slate-700">•</span>
          <Link href="/career/bcom-to-digital-marketing" className="hover:text-white transition-colors">B.Com to Performance Marketing</Link>
          <span className="text-slate-700">•</span>
          <Link href="/career/btech-to-digital-marketing" className="hover:text-white transition-colors">B.Tech / Engineers to Growth</Link>
          <span className="text-slate-700">•</span>
          <Link href="/career/bpo-switch-to-digital-marketing" className="hover:text-white transition-colors">BPO to Digital Marketing</Link>
          <span className="text-slate-700">•</span>
          <Link href="/career/ba-arts-to-digital-marketing" className="hover:text-white transition-colors">BA (Arts &amp; Humanities)</Link>
          <span className="text-slate-700">•</span>
          <Link href="/career" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">View All Degree Tracks →</Link>
        </div>
      </div>

      {/* Placement Hubs by City */}
      <div className="py-5 border-t border-slate-800 text-xs text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">Placement Hubs Across India:</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px]">
          <Link href="/blog/digital-marketing-course-in-bangalore-with-placement-guarantee" className="hover:text-white transition-colors">Bangalore</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-delhi-ncr-with-100-placement" className="hover:text-white transition-colors">Delhi NCR</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-noida-with-placement-guarantee" className="hover:text-white transition-colors">Noida</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-gurgaon-with-placement-guarantee" className="hover:text-white transition-colors">Gurgaon</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-mumbai-with-placement-guarantee" className="hover:text-white transition-colors">Mumbai</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-thane-with-placement-guarantee" className="hover:text-white transition-colors">Thane</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-navi-mumbai-with-placement-guarantee" className="hover:text-white transition-colors">Navi Mumbai</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-hyderabad-with-job-guarantee" className="hover:text-white transition-colors">Hyderabad</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-pune-with-placement" className="hover:text-white transition-colors">Pune</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-chennai-with-job-guarantee" className="hover:text-white transition-colors">Chennai</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-kolkata-with-placement" className="hover:text-white transition-colors">Kolkata</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-ahmedabad-with-100-placement" className="hover:text-white transition-colors">Ahmedabad</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-surat-with-placement-guarantee" className="hover:text-white transition-colors">Surat</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-vadodara-with-placement-guarantee" className="hover:text-white transition-colors">Vadodara</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-jaipur-with-placement-guarantee" className="hover:text-white transition-colors">Jaipur</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-lucknow-with-placement-guarantee" className="hover:text-white transition-colors">Lucknow</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-kanpur-with-placement-guarantee" className="hover:text-white transition-colors">Kanpur</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-patna-with-placement-guarantee" className="hover:text-white transition-colors">Patna</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-ranchi-with-placement-guarantee" className="hover:text-white transition-colors">Ranchi</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-bhopal-with-placement-guarantee" className="hover:text-white transition-colors">Bhopal</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-indore-with-placement-guarantee" className="hover:text-white transition-colors">Indore</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-raipur-with-placement-guarantee" className="hover:text-white transition-colors">Raipur</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-nagpur-with-placement-guarantee" className="hover:text-white transition-colors">Nagpur</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-bhubaneswar-with-placement-guarantee" className="hover:text-white transition-colors">Bhubaneswar</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-guwahati-with-placement-guarantee" className="hover:text-white transition-colors">Guwahati</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-chandigarh-with-placement" className="hover:text-white transition-colors">Chandigarh</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-ludhiana-with-placement-guarantee" className="hover:text-white transition-colors">Ludhiana</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-kochi-with-job-guarantee" className="hover:text-white transition-colors">Kochi</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-trivandrum-with-placement-guarantee" className="hover:text-white transition-colors">Trivandrum</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-coimbatore-with-placement-guarantee" className="hover:text-white transition-colors">Coimbatore</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-visakhapatnam-with-placement-guarantee" className="hover:text-white transition-colors">Visakhapatnam</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-vijayawada-with-placement-guarantee" className="hover:text-white transition-colors">Vijayawada</Link>
        </div>
      </div>

 <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
 <p>© 2026 Vocaplace Technologies Pvt. Ltd. All rights reserved.</p>
 <div className="flex flex-wrap gap-4 sm:gap-6">
 <Link href="/site-directory" className="hover:text-white transition-colors">Site Directory</Link>
 <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
 <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
 <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
 <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">XML Sitemap</a>
 </div>
 </div>
 </div>
 </footer>
 );
};

export default Footer;