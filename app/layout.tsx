import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({
 subsets: ['latin'],
 display: 'swap',
 variable: '--font-sans',
});

export const metadata: Metadata = {
 metadataBase: new URL('https://vocaplace.com'),
 title: 'Vocaplace - Digital Marketing Mastery Course (SEO, Google Ads, Social Media & AI)',
 description: 'Become a certified digital marketing expert in 120 days. Master SEO, Google Ads, Meta Campaigns, and AI Automation with Vocaplace.',
 openGraph: {
 images: [{ url: '/logo.jpeg', width: 1200, height: 1200, alt: 'Vocaplace' }],
 },
 twitter: {
 card: 'summary_large_image',
 images: ['/logo.jpeg'],
 },
 icons: {
 icon: '/logo.jpeg',
 apple: '/logo.jpeg',
 },
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <html lang="en"className="scroll-smooth"suppressHydrationWarning>
 <body 
 className={`${inter.variable} antialiased bg-white text-slate-900 selection:bg-slate-900 selection:text-white`}
 suppressHydrationWarning
 >
 <div className="min-h-screen flex flex-col">
 <Navbar />
 <main className="flex-grow">
 {children}
 </main>
 <Footer />
 </div>
 </body>
 </html>
 );
}
