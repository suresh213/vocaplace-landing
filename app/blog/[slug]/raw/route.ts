import { blogPosts } from '../../../../services/blogData';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return new NextResponse('Article Not Found', { status: 404 });
  }

  const markdownContent = `# ${post.title}

> **Published:** ${post.date}
> **Author:** ${post.author.name} (${post.author.role})
> **Canonical:** https://vocaplace.com/blog/${post.slug}
> **Reading Time:** ${post.readTime}

## Executive Summary
${post.excerpt}

---

${post.content}
`;

  return new NextResponse(markdownContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Link': `<https://vocaplace.com/blog/${post.slug}>; rel="canonical"`,
      'X-Robots-Tag': 'noindex, follow',
    },
  });
}
