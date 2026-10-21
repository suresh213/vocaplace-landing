import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Compass, MapPin, GraduationCap, Scale, BookOpen, 
  Briefcase, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { blogPosts } from '../../services/blogData';
import { careerTracks } from '../../services/careerData';
import { coursesData } from '../../services/courseData';
import ApplyNowButton from '../../components/ApplyNowButton';

export const metadata: Metadata = {
  title: 'Site Directory & Complete Page Index | Vocaplace',
  description: 'Complete HTML sitemap and navigation directory of all digital marketing courses, degree transition tracks, city placement hubs, and competitor reviews.',
  alternates: {
    canonical: '/site-directory',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SiteDirectoryPage() {
  // Separate blog posts into categories using tags and slug patterns
  const cityPosts = blogPosts.filter(p => 
    p.slug.startsWith('digital-marketing-course-in-') || 
    (p.tags && p.tags.some(t => t.toLowerCase().includes('city') || t.toLowerCase().includes('bangalore') || t.toLowerCase().includes('mumbai') || t.toLowerCase().includes('delhi')))
  );

  const comparisonPosts = blogPosts.filter(p => 
    !cityPosts.includes(p) && (
      p.slug.includes('-vs-') || 
      p.slug.includes('review') || 
      (p.tags && p.tags.some(t => t.toLowerCase().includes('comparison') || t.toLowerCase().includes('review')))
    )
  );

  const guidePosts = blogPosts.filter(p => !cityPosts.includes(p) && !comparisonPosts.includes(p));

  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white py-14 px-6 border-b border-blue-800">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-800/80 border border-blue-700 text-amber-300 text-xs font-bold mb-3">
            <Compass size={14} className="text-amber-400" />
            <span>Comprehensive HTML Sitemap</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            Vocaplace Site Directory
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            Direct index to all educational modules, degree career pathways, regional city training hubs, institute comparison reports, and marketing playbooks.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* Section 1: Core Programs & Admissions */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <ShieldCheck size={20} className="text-blue-900" />
            <h2 className="text-xl font-bold text-slate-900">Core Programs &amp; Admissions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/" className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-bold text-slate-800 transition-colors">
              Homepage (100% Job Guarantee)
            </Link>
            <Link href="/pay-after-placement" className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-bold text-slate-800 transition-colors">
              Pay After Placement (Flat ₹50k Fee)
            </Link>
            <Link href="/syllabus" className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-bold text-slate-800 transition-colors">
              120-Day Detailed Syllabus &amp; Modules
            </Link>
            {coursesData.map((c) => (
              <Link key={c.slug} href={`/courses/${c.slug}`} className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-bold text-slate-800 transition-colors">
                {c.title}
              </Link>
            ))}
            <Link href="/compare" className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-bold text-slate-800 transition-colors">
              Compare Institutes &amp; Fee Models
            </Link>
            <Link href="/mentor/wajed" className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-bold text-slate-800 transition-colors">
              Lead Mentor: Wajed Sk (Victoria Univ)
            </Link>
            <Link href="/career" className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-bold text-slate-800 transition-colors">
              Career Transition Hub
            </Link>
            <Link href="/hire-talent" className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-bold text-slate-800 transition-colors">
              Hire Pre-Vetted Marketing Talent
            </Link>
            <Link href="/about" className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-bold text-slate-800 transition-colors">
              About Vocaplace Academy
            </Link>
            <Link href="/contact" className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-bold text-slate-800 transition-colors">
              Contact &amp; Admissions Office
            </Link>
          </div>
        </div>

        {/* Section 2: Degree Career Transitions */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <GraduationCap size={20} className="text-amber-600" />
            <h2 className="text-xl font-bold text-slate-900">Career Transition Tracks by Degree</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {careerTracks.map((track) => (
              <Link key={track.slug} href={`/career/${track.slug}`} className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-semibold text-slate-800 transition-colors">
                {track.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Section 3: Regional City Placement Hubs */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <MapPin size={20} className="text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">Regional City Placement Hubs (30+ Cities)</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {cityPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-medium text-slate-700 transition-colors">
                {post.title.replace(' | Vocaplace', '')}
              </Link>
            ))}
          </div>
        </div>

        {/* Section 4: Competitor & Alternative Comparisons */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <Scale size={20} className="text-purple-600" />
            <h2 className="text-xl font-bold text-slate-900">Institute Comparison &amp; Review Guides</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {comparisonPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-medium text-slate-700 transition-colors">
                {post.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Section 5: Marketing Playbooks & Industry Research */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <BookOpen size={20} className="text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">Marketing Playbooks, Tools &amp; Salary Research</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {guidePosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-medium text-slate-700 transition-colors">
                {post.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Section 6: Legal & Verification */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <Briefcase size={20} className="text-slate-600" />
            <h2 className="text-xl font-bold text-slate-900">Policies &amp; Institutional Governance</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/privacy" className="px-4 py-2 rounded-xl border border-slate-200 hover:border-blue-300 text-xs font-bold text-slate-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="px-4 py-2 rounded-xl border border-slate-200 hover:border-blue-300 text-xs font-bold text-slate-700 transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund" className="px-4 py-2 rounded-xl border border-slate-200 hover:border-blue-300 text-xs font-bold text-slate-700 transition-colors">
              Refund &amp; Deposit Policy
            </Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl border border-slate-200 hover:border-blue-300 text-xs font-bold text-slate-700 transition-colors">
              XML Sitemap (Machine-Readable)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
