import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-20 text-xs border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          
          <div>
            <div className="flex items-center gap-2 font-bold text-slate-900 mb-6">
              <div className="w-3 h-3 bg-blue-900"></div>
              <span className="text-lg">Vocaplace</span>
            </div>
            <p className="text-slate-600 max-w-xs leading-relaxed text-sm">
              Master SEO, Google Ads, social media advertising, and AI-driven workflows with the Vocaplace Digital Marketing Mastery program.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest">Programs</h4>
            <ul className="space-y-4 text-slate-600 font-mono">
              <li><Link href="/courses" className="hover:text-blue-900 transition-colors">All Programs</Link></li>
              <li><Link href="/courses/digital-marketing-mastery" className="hover:text-blue-900 transition-colors">Digital Marketing Mastery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest">For Employers</h4>
            <ul className="space-y-4 text-slate-600 font-mono">
              <li><Link href="/hire-talent" className="hover:text-blue-900 transition-colors">Hire Talent</Link></li>
              <li><Link href="/hiring-managers" className="hover:text-blue-900 transition-colors">For Hiring Managers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-slate-600 font-mono">
              <li><Link href="/about" className="hover:text-blue-900 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-blue-900 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-blue-900 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-blue-900 transition-colors">Careers</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 Vocaplace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-900">Privacy Policy</a>
            <a href="#" className="hover:text-blue-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;