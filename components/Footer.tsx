import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
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
  <li><Link href="/" className="hover:text-white transition-colors">Pay After Placement</Link></li>
  <li><Link href="/courses" className="hover:text-white transition-colors">All Programs</Link></li>
  <li><Link href="/courses/digital-marketing-mastery" className="hover:text-white transition-colors">Digital Marketing Mastery</Link></li>
  <li><Link href="/blog/top-pay-after-placement-digital-marketing-courses" className="hover:text-white transition-colors">Placement Guarantee Courses</Link></li>
  <li><Link href="/compare" className="hover:text-white transition-colors">Compare Institutes</Link></li>
  <li><a href="https://student.vocaplace.com" rel="nofollow noopener noreferrer" className="hover:text-white transition-colors">Student Portal</a></li>
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
  <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
  </ul>
  </div>

  {/* Contact */}
  <div>
  <h4 className="font-bold text-white mb-5 text-sm">Contact Us</h4>
  <ul className="space-y-3 text-sm">
  <li className="flex items-center gap-2">
  <Phone size={14} className="text-blue-400 shrink-0"/>
  <a href="tel:+918527647899" className="hover:text-white transition-colors">+91 85276 47899</a>
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

      {/* Placement Hubs by City */}
      <div className="py-5 border-t border-slate-800 text-xs text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">Placement Hubs Across India:</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px]">
          <Link href="/blog/digital-marketing-course-in-bangalore-with-placement-guarantee" className="hover:text-white transition-colors">Bangalore</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-delhi-ncr-with-100-placement" className="hover:text-white transition-colors">Delhi NCR (Gurgaon &amp; Noida)</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-mumbai-with-placement-guarantee" className="hover:text-white transition-colors">Mumbai</Link>
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
          <Link href="/blog/digital-marketing-course-in-jaipur-with-placement-guarantee" className="hover:text-white transition-colors">Jaipur</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-kochi-with-job-guarantee" className="hover:text-white transition-colors">Kochi</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-chandigarh-with-placement" className="hover:text-white transition-colors">Chandigarh</Link>
          <span className="text-slate-700">•</span>
          <Link href="/blog/digital-marketing-course-in-indore-with-placement-guarantee" className="hover:text-white transition-colors">Indore</Link>
        </div>
      </div>

 <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
 <p>© 2026 Vocaplace Technologies Pvt. Ltd. All rights reserved.</p>
 <div className="flex gap-6">
 <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
 <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
 <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
 </div>
 </div>
 </div>
 </footer>
 );
};

export default Footer;