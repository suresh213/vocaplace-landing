import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';
import UtmForwarder from '../components/UtmForwarder';

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
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vocaplace',
    url: 'https://vocaplace.com',
    logo: 'https://vocaplace.com/logo.webp',
    description: 'Pay After Placement Digital Marketing Course & AI Automation',
    sameAs: [
      'https://www.linkedin.com/company/vocaplace',
      'https://www.instagram.com/vocaplace'
    ]
  };

 return (
 <html lang="en" className="scroll-smooth" suppressHydrationWarning>
  <head>
    {/* Google Tag Manager - Placeholder */}
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `,
      }}
    />
    {/* Meta Pixel Code - Placeholder */}
    <Script
      id="meta-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'XXXXXXXXXXXXXXX');
          fbq('track', 'PageView');
        `,
      }}
    />
  </head>
 <body 
 className={`${inter.variable} antialiased bg-white text-slate-900 selection:bg-slate-900 selection:text-white`}
 suppressHydrationWarning
 >
  {/* Google Tag Manager (noscript) */}
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
    height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
  </noscript>

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
  />

 <div className="min-h-screen flex flex-col">
 <UtmForwarder />
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
