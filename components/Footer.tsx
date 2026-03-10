import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-20 text-xs border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 mb-6">
              <div className="w-3 h-3 bg-slate-900"></div>
              <span className="text-lg">Growthbricks</span>
            </div>
            <p className="text-slate-600 max-w-xs leading-relaxed text-sm">
              Build a Tech Career with AI-Powered Learning. Master Full Stack Development, Data Analytics, and modern AI tools.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest">Programs</h4>
            <ul className="space-y-4 text-slate-600 font-mono">
              <li><Link to="/courses" className="hover:text-slate-900 transition-colors">Full Stack Development</Link></li>
              <li><Link to="/courses" className="hover:text-slate-900 transition-colors">Data Analytics</Link></li>
              <li><Link to="/courses" className="hover:text-slate-900 transition-colors">AI & Automation</Link></li>
              <li><Link to="/certifications" className="hover:text-slate-900 transition-colors">Certifications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest">For Colleges</h4>
            <ul className="space-y-4 text-slate-600 font-mono">
              <li><Link to="/colleges" className="hover:text-slate-900 transition-colors">Partner With Us</Link></li>
              <li><Link to="/placement-support" className="hover:text-slate-900 transition-colors">Placement Programs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest">For Companies</h4>
            <ul className="space-y-4 text-slate-600 font-mono">
              <li><Link to="/hire-talent" className="hover:text-slate-900 transition-colors">Hire Talent</Link></li>
              <li><Link to="/hiring-managers" className="hover:text-slate-900 transition-colors">For Hiring Managers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-slate-600 font-mono">
              <li><Link to="/about" className="hover:text-slate-900 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-slate-900 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 Growthbricks. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;