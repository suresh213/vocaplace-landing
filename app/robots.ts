import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
 return {
 rules: [
   {
     userAgent: '*',
     allow: '/',
   },
   {
     userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'PerplexityBot', 'ClaudeBot', 'CCBot', 'Anthropic-ai', 'Omgilibot', 'Omgili'],
     allow: '/',
   }
 ],
 sitemap: 'https://vocaplace.com/sitemap.xml',
 };
}
