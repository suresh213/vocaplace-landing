import { MetadataRoute } from 'next';
import { blogPosts } from '../services/blogData';
import { coursesData } from '../services/courseData';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
 const baseUrl = 'https://vocaplace.com';

 // Base routes
 const routes = ['', '/about', '/contact', '/courses', '/compare', '/hire-talent', '/hiring-managers', '/blog', '/mentor/wajed', '/privacy', '/terms', '/refund'].map((route) => ({
 url: `${baseUrl}${route}`,
 lastModified: new Date(),
 changeFrequency: 'daily' as const,
 priority: route === '' ? 1.0 : (['/privacy', '/terms', '/refund'].includes(route) ? 0.3 : 0.85),
 }));

 // Course routes
 const courseRoutes = coursesData.map((course) => ({
 url: `${baseUrl}/courses/${course.slug}`,
 lastModified: new Date(),
 changeFrequency: 'weekly' as const,
 priority: 0.7,
 }));

 // Blog routes
 const blogRoutes = blogPosts.map((post) => ({
 url: `${baseUrl}/blog/${post.slug}`,
 lastModified: new Date(),
 changeFrequency: 'weekly' as const,
 priority: 0.6,
 }));

 return [...routes, ...courseRoutes, ...blogRoutes];
}
