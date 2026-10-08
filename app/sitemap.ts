import { MetadataRoute } from 'next';
import { blogPosts } from '../services/blogData';
import { coursesData } from '../services/courseData';
import { careerTracks } from '../services/careerData';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vocaplace.com';

  // Priority and frequency mapping for base routes
  const routeMeta: Record<string, { priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' }> = {
    '': { priority: 1.0, changeFrequency: 'daily' },
    '/compare': { priority: 0.90, changeFrequency: 'daily' },
    '/career': { priority: 0.90, changeFrequency: 'daily' },
    '/mentor/wajed': { priority: 0.90, changeFrequency: 'daily' },
    '/courses': { priority: 0.85, changeFrequency: 'daily' },
    '/blog': { priority: 0.85, changeFrequency: 'daily' },
    '/contact': { priority: 0.85, changeFrequency: 'daily' },
    '/hire-talent': { priority: 0.80, changeFrequency: 'daily' },
    '/hiring-managers': { priority: 0.80, changeFrequency: 'daily' },
    '/about': { priority: 0.80, changeFrequency: 'daily' },
    '/privacy': { priority: 0.30, changeFrequency: 'monthly' },
    '/terms': { priority: 0.30, changeFrequency: 'monthly' },
    '/refund': { priority: 0.30, changeFrequency: 'monthly' },
  };

  const routes = Object.entries(routeMeta).map(([route, meta]) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: meta.changeFrequency,
    priority: meta.priority,
  }));

  // Flagship Course routes (our primary conversion page)
  const courseRoutes = coursesData.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.95,
  }));

  // Career Transition routes (Programmatic SEO tracks by degree)
  const careerRoutes = careerTracks.map((track) => ({
    url: `${baseUrl}/career/${track.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Blog routes (authoritative guides and clusters)
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  return [...routes, ...courseRoutes, ...careerRoutes, ...blogRoutes];
}
