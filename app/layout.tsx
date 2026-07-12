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
 title: 'Pay After Placement Digital Marketing Course & AI Automation | Vocaplace',
 description: '100% Job Guarantee Digital Marketing Course in India. Learn SEO, Performance Marketing, and AI Automation from top industry experts. Pay only after you get placed.',
 keywords: [
   'pay after placement digital marketing course',
   'digital marketing course with placement guarantee',
   'AI marketing automation course India',
   'performance marketing course with placement',
   '100% job guarantee digital marketing',
   'learn SEO and Google ads'
 ],
 openGraph: {
 images: [{ url: '/logo.jpeg', width: 1200, height: 1200, alt: 'Vocaplace' }],
 },
 twitter: {
 card: 'summary_large_image',
 images: ['/logo.jpeg'],
 },
 icons: {
 icon: '/favicon.png',
 apple: '/favicon.png',
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
