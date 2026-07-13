import { coursesData, getCourseBySlug } from '../../../services/courseData';
import CourseDetailClient from '../../../components/CourseDetailClient';
import type { Metadata } from 'next';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
 params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
 return coursesData.map((course) => ({
 slug: course.slug,
 }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
 const { slug } = await params;
 const course = getCourseBySlug(slug);

 if (!course) {
 return {
 title: 'Course Not Found - Vocaplace',
 };
 }

 return {
 title: `${course.title} with 100% Placement Guarantee | Vocaplace`,
 description: `Is the ${course.title} worth it? Get a 100% placement guarantee with Vocaplace. ${course.description}`,
 keywords: course.categories,
 alternates: {
 canonical: `/courses/${course.slug}`,
 },
 openGraph: {
 title: course.title,
 description: course.description,
 url: `https://vocaplace.com/courses/${course.slug}`,
 images: [
 {
 url: course.thumbnailUrl,
 width: 800,
 height: 600,
 alt: course.title,
 },
 ],
 type: 'website',
 },
 };
}

export default async function Page({ params }: PageProps) {
 const { slug } = await params;
 const course = getCourseBySlug(slug);

 if (!course) {
 return (
 <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-6">
 <AlertCircle className="w-16 h-16 text-slate-400 mx-auto mb-6"/>
 <h1 className="text-2xl font-bold text-slate-900 mb-3">Course Not Found</h1>
 <p className="text-slate-500 text-sm mb-8">
 The program you are looking for might have been moved, renamed, or is currently unavailable.
 </p>
 <Link 
 href="/"
 id="btn-back-to-courses-not-found"
 className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white text-xs font-bold hover:bg-blue-800 transition-colors whitespace-nowrap"
 >
 <ArrowLeft size={16} />
 Back to Home
 </Link>
 </div>
 );
 }

 return <CourseDetailClient course={course} />;
}
