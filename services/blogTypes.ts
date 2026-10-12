export interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  tags: string[];
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  metaTitle: string;
  metaDescription: string;
  faqs?: { question: string; answer: string }[];
}
