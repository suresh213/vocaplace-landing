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
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Applebot',
          'Amazonbot',
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'Google-Extended',
          'PerplexityBot',
          'ClaudeBot',
          'CCBot',
          'Anthropic-ai',
          'Bytespider',
          'Omgilibot',
          'Omgili',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://vocaplace.com/sitemap.xml',
  };
}
