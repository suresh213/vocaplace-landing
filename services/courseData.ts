export interface CourseTask {
  id: string;
  title: string;
  description: string;
  type: 'WRITTEN' | 'MCQ';
  options: string[];
  points: number;
  videoUrl: string | null;
  order: number;
  moduleId: string;
  submissions: any[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  videoUrl: string[];
  thumbnailUrl: string;
  order: number;
  courseId: string;
  tasks: CourseTask[];
  progress?: any[];
}

export interface CourseDetail {
  id: string;
  slug: string; // SEO friendly URL slug
  title: string;
  subtitle: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
  price: number;
  isaEnabled: boolean;
  durationInDays: number;
  durationInMonths: number;
  categories: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
  language: string;
  rating: number;
  highlights: string[];
  skills: string[];
  career: string[];
  color: 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'indigo' | 'rose';
  modules: CourseModule[];
}

export const coursesData: CourseDetail[] = [
  {
    id: "00000000-0000-0000-0000-000000000001",
    slug: "digital-marketing-mastery",
    title: "Digital Marketing Mastery: SEO, Google Ads, Social Media & AI",
    subtitle: "Master the 2026 digital marketing landscape with AI-driven workflows",
    thumbnailUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1470&q=80",
    videoUrl: "https://www.youtube.com/watch?v=QhhYosA3dpE",
    description: "A production-style digital marketing program covering SEO, Google Ads, social media advertising, and AI-driven workflows. The course includes live Zoom classes, mentor reviews, task submissions, and ISA-enabled enrollment.",
    price: 14999,
    isaEnabled: true,
    durationInDays: 120,
    durationInMonths: 4,
    categories: [
      "Digital Marketing",
      "SEO",
      "Google Ads",
      "Social Media Marketing",
      "AI Tools"
    ],
    level: "beginner",
    language: "english",
    rating: 4.5,
    highlights: [
      "SEO crawling, indexing, and on-page optimization",
      "Google Search, Display, and Performance Max Ads",
      "Meta Ads, audience targeting, and content planning",
      "AI tools integration for content and automation workflows"
    ],
    skills: ["SEO", "Google Ads", "Meta Ads", "ChatGPT", "Social Media", "Content Strategy", "Analytics", "Copywriting"],
    career: ["Digital Marketer", "SEO Specialist", "Performance Marketer", "Social Media Manager", "AI Marketing Consultant"],
    color: "rose",
    modules: [
      {
        id: "00000000-0000-0000-0000-000000000065",
        courseId: "00000000-0000-0000-0000-000000000001",
        title: "Module 1: Search Engine Optimization (SEO)",
        description: "SEO fundamentals, crawling, indexing, ranking, keyword research, on-page optimization, technical basics, off-page authority building, and performance reporting.",
        videoUrl: [
          "https://pub-ebe8ad7e6a50432a9b8687f7b7253798.r2.dev/edtech/edtech/module_videos/SCO%201%20Class.mp4",
          "https://pub-ebe8ad7e6a50432a9b8687f7b7253798.r2.dev/edtech/edtech/module_videos/SCO%202%20Class.mp4",
          "https://pub-ebe8ad7e6a50432a9b8687f7b7253798.r2.dev/edtech/edtech/module_videos/SCO%203%20Class.mp4"
        ],
        thumbnailUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1470&q=80",
        order: 1,
        tasks: [
          {
            id: "00000000-0000-0000-0000-0000000003e9",
            title: "Introduction to SEO",
            description: "Explain what SEO is, why it matters, and how search engines crawl, index, and rank pages.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: "https://www.youtube.com/watch?v=inT2H9rp5tY&vl=en",
            order: 1,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000003ea",
            title: "Search Intent and Keyword Research",
            description: "Classify informational, navigational, transactional, and commercial intent, then pick relevant keywords.",
            type: "MCQ",
            options: [
              "Informational / navigational / transactional / commercial",
              "Only brand keywords",
              "Only long keywords"
            ],
            points: 10,
            videoUrl: null,
            order: 2,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000003eb",
            title: "On-Page SEO and Content Structure",
            description: "Optimize page titles, meta descriptions, headings, readability, internal links, and content hierarchy.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 3,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000003ec",
            title: "Technical SEO Basics",
            description: "Review mobile-friendly design, page speed, sitemap, robots.txt, and clean URL structure.",
            type: "MCQ",
            options: [
              "Mobile speed, sitemap, robots.txt, URLs",
              "Only backlinks",
              "Only social posts"
            ],
            points: 10,
            videoUrl: null,
            order: 4,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000003ed",
            title: "Off-Page SEO and Authority",
            description: "Explain backlinks, brand mentions, authority building, and how they influence rankings.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 5,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000003ee",
            title: "SEO Monitoring and Reporting",
            description: "Track traffic, organic growth, bounce rate, conversions, and keyword performance.",
            type: "MCQ",
            options: [
              "Traffic, bounce rate, conversions, rankings",
              "Only impressions",
              "Only budget spent"
            ],
            points: 10,
            videoUrl: null,
            order: 6,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007d1",
            title: "How Search Engines Like Google Work",
            description: "Describe crawling, indexing, and ranking, and explain how Google discovers and organizes pages.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 7,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007d2",
            title: "Organic Search vs Paid Search",
            description: "Compare organic traffic with paid ads and explain why both channels serve different goals.",
            type: "MCQ",
            options: [
              "Organic is free; paid requires ad spend",
              "Both are always free",
              "Paid is long-term only"
            ],
            points: 10,
            videoUrl: null,
            order: 8,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007d3",
            title: "Keyword Research Basics",
            description: "Define keyword research and explain why it helps identify what customers are actually searching for.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 9,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007d4",
            title: "Understanding What People Search Online",
            description: "Use example queries to think like a customer and discover relevant search phrases for a business.",
            type: "MCQ",
            options: [
              "Think like a customer to find relevant queries",
              "Only use brand names",
              "Only use long sentences"
            ],
            points: 10,
            videoUrl: null,
            order: 10,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007d5",
            title: "Types of Search Intent",
            description: "Explain informational, navigational, transactional, and commercial intent with examples.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 11,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007d6",
            title: "Identifying Relevant Keywords for a Business",
            description: "Select high-relevance keywords using niche understanding, tools, competitor analysis, and search volume.",
            type: "MCQ",
            options: [
              "Relevant keywords with good search volume and intent",
              "Any keyword with high volume only",
              "Only broad brand words"
            ],
            points: 10,
            videoUrl: null,
            order: 12,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007d7",
            title: "Page Titles, Meta Descriptions, and Headings",
            description: "Write page titles, meta descriptions, and headings that structure content clearly and improve click-through rate.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 13,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007d8",
            title: "Content Structure and Readability",
            description: "Use short paragraphs, bullets, headings, and examples to make content easier to read and understand.",
            type: "MCQ",
            options: [
              "Short paragraphs, bullets, headings, examples",
              "Long blocks of text only",
              "No formatting at all"
            ],
            points: 10,
            videoUrl: null,
            order: 14,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007d9",
            title: "Mobile-Friendly Websites",
            description: "Explain why websites must adjust to mobile screens and remain easy to navigate on phones.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 15,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007da",
            title: "Page Speed and User Experience",
            description: "Identify how slow pages hurt bounce rate and rankings and how speed improvements help users.",
            type: "MCQ",
            options: [
              "Speed improves experience and can support rankings",
              "Speed is irrelevant",
              "Only design matters"
            ],
            points: 10,
            videoUrl: null,
            order: 16,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007db",
            title: "Basic Indexing and Website Structure",
            description: "Cover sitemap, robots.txt, URL structure, and site navigation as basic indexing essentials.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 17,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007dc",
            title: "Importance of Backlinks",
            description: "Explain why backlinks are treated as signals of trust and authority by search engines.",
            type: "MCQ",
            options: [
              "Backlinks can improve authority and rankings",
              "They only help social media",
              "They are always harmful"
            ],
            points: 10,
            videoUrl: null,
            order: 18,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007dd",
            title: "Brand Mentions and Online Authority",
            description: "Discuss how brand mentions, reputation, and industry recognition build online authority.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 19,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007de",
            title: "Understanding Website Traffic",
            description: "Measure organic traffic, bounce rate, conversion rate, and keyword rankings as core SEO metrics.",
            type: "MCQ",
            options: [
              "Visitors, organic traffic, bounce rate, conversions, rankings",
              "Only clicks",
              "Only followers"
            ],
            points: 10,
            videoUrl: null,
            order: 20,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000007df",
            title: "SEO Tools and Reporting",
            description: "List the analytics, audit, keyword, and rank tracking tools used to monitor SEO performance.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 21,
            moduleId: "00000000-0000-0000-0000-000000000065",
            submissions: []
          }
        ]
      },
      {
        id: "00000000-0000-0000-0000-000000000066",
        courseId: "00000000-0000-0000-0000-000000000001",
        title: "Module 2: Google Ads (Search & Performance Marketing)",
        description: "Google Ads foundations, intent-based targeting, campaign types, keyword strategy, ad copy, landing pages, performance metrics, and optimization loops.",
        videoUrl: [
          "https://pub-ebe8ad7e6a50432a9b8687f7b7253798.r2.dev/edtech/edtech/module_videos/Ads%20Eco%20System.mp4",
          "https://pub-ebe8ad7e6a50432a9b8687f7b7253798.r2.dev/edtech/edtech/module_videos/Google%20Ads%202.mp4"
        ],
        thumbnailUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1470&q=80",
        order: 2,
        tasks: [
          {
            id: "00000000-0000-0000-0000-0000000003f3",
            title: "Google Ads Fundamentals",
            description: "Explain PPC, campaign goals, and how paid search helps capture high-intent traffic.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: "https://www.youtube.com/watch?v=f3prDP5sGuM",
            order: 1,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000003f4",
            title: "Campaign Types and Search Intent",
            description: "Match search, display, YouTube, and Performance Max campaigns with user intent.",
            type: "MCQ",
            options: [
              "Search / Display / YouTube / Performance Max",
              "Only Search",
              "Only Display"
            ],
            points: 10,
            videoUrl: null,
            order: 2,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000003f5",
            title: "Keyword Match Types and Negative Keywords",
            description: "Differentiate broad, phrase, exact match and use negatives to control irrelevant traffic.",
            type: "MCQ",
            options: [
              "Broad, phrase, exact, negatives",
              "Only exact match",
              "Only negative keywords"
            ],
            points: 10,
            videoUrl: null,
            order: 3,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000003f6",
            title: "Ad Copy, Extensions, and Landing Pages",
            description: "Write high-converting ad copy, use extensions, and align landing pages with the ad promise.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 4,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000003f7",
            title: "Campaign Metrics and Optimization",
            description: "Measure impressions, clicks, CTR, conversions, and improve campaigns based on data.",
            type: "MCQ",
            options: [
              "Impressions, clicks, CTR, conversions",
              "Only followers",
              "Only reach"
            ],
            points: 10,
            videoUrl: null,
            order: 5,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bb9",
            title: "Understanding Search Intent and Customer Behaviour",
            description: "Focus on commercial and transactional searches when planning paid search campaigns.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 6,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bba",
            title: "Search Campaigns",
            description: "Describe how search ads appear on Google results pages and why they are strong for lead generation.",
            type: "MCQ",
            options: [
              "Text ads on search results for keyword intent",
              "Only banner ads",
              "Only YouTube pre-roll"
            ],
            points: 10,
            videoUrl: null,
            order: 7,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bbb",
            title: "Display Advertising",
            description: "Explain display banners and where they appear in the Google Display Network.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 8,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bbc",
            title: "YouTube Ads Overview",
            description: "Cover skippable, non-skippable, in-feed, and bumper ads as video formats for brand storytelling.",
            type: "MCQ",
            options: [
              "Skippable, non-skippable, in-feed, bumper",
              "Only skippable",
              "Only bumper"
            ],
            points: 10,
            videoUrl: null,
            order: 9,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bbd",
            title: "Performance Max Campaigns",
            description: "Describe Performance Max as an automated, AI-powered campaign type that runs across Google surfaces.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 10,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bbe",
            title: "Choosing the Right Keywords",
            description: "Select keywords based on product relevance, search intent, and competitor analysis.",
            type: "MCQ",
            options: [
              "Relevant, high-intent keywords",
              "Any high-volume words",
              "Only competitor brand names"
            ],
            points: 10,
            videoUrl: null,
            order: 11,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bbf",
            title: "Match Types and Negative Keywords",
            description: "Use broad, phrase, exact match types and negatives to control when ads appear.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 12,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bc0",
            title: "Writing Effective Ad Copy",
            description: "Build ad copy with headlines, descriptions, CTAs, and a clear value proposition.",
            type: "MCQ",
            options: [
              "Headline, description, CTA, value proposition",
              "Only keywords",
              "Only images"
            ],
            points: 10,
            videoUrl: null,
            order: 13,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bc1",
            title: "Understanding Ad Extensions",
            description: "Use sitelinks, call, location, and callout extensions to improve visibility and usefulness.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 14,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bc2",
            title: "Connecting Ads with Landing Pages",
            description: "Connect ad intent to a focused landing page with fast loading, trust signals, and a single conversion goal.",
            type: "MCQ",
            options: [
              "Relevant landing page with one goal",
              "Homepage only",
              "Any page works"
            ],
            points: 10,
            videoUrl: null,
            order: 15,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bc3",
            title: "Improving User Experience for Conversions",
            description: "Use clear layouts, strong CTAs, and fast performance to improve landing page conversion.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 16,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bc4",
            title: "Understanding Impressions, Clicks, and Conversions",
            description: "Use basic metrics like impressions, clicks, CTR, and conversions to evaluate performance.",
            type: "MCQ",
            options: [
              "Impressions, clicks, CTR, conversions",
              "Only followers",
              "Only reach"
            ],
            points: 10,
            videoUrl: null,
            order: 17,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bc5",
            title: "Basics of Campaign Optimization",
            description: "Improve ad performance by adjusting keywords, bids, negative keywords, copy, and landing pages.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 18,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000bc6",
            title: "Understanding ROI",
            description: "Measure return on investment to decide whether campaign results justify ad spend.",
            type: "MCQ",
            options: [
              "Revenue compared to ad spend",
              "Only impressions",
              "Only clicks"
            ],
            points: 10,
            videoUrl: null,
            order: 19,
            moduleId: "00000000-0000-0000-0000-000000000066",
            submissions: []
          }
        ]
      },
      {
        id: "00000000-0000-0000-0000-000000000067",
        courseId: "00000000-0000-0000-0000-000000000001",
        title: "Module 3: Social Media Marketing & Advertising",
        description: "Platform selection, audience behavior, content planning, brand voice, Meta ads, lead generation, influencer collaboration, and campaign tracking.",
        videoUrl: [
          "https://pub-ebe8ad7e6a50432a9b8687f7b7253798.r2.dev/edtech/edtech/module_videos/Corporate%20Branding%20Class.mp4",
          "https://pub-ebe8ad7e6a50432a9b8687f7b7253798.r2.dev/edtech/edtech/module_videos/Meta%20Ads.mp4"
        ],
        thumbnailUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1470&q=80",
        order: 3,
        tasks: [
          {
            id: "00000000-0000-0000-0000-0000000003fd",
            title: "Platform Strategy and Audience Behaviour",
            description: "Choose the right platforms and map audience preferences to content formats.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: "https://www.youtube.com/watch?v=q5ASe_sxRYI",
            order: 1,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000003fe",
            title: "Content Planning and Brand Storytelling",
            description: "Build a content calendar with educational, promotional, testimonial, and storytelling posts.",
            type: "MCQ",
            options: [
              "Educational / promotional / testimonial / storytelling",
              "Only ads",
              "Only reels"
            ],
            points: 10,
            videoUrl: null,
            order: 2,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-0000000003ff",
            title: "Reels and Short-Form Content",
            description: "Plan reels, shorts, and short-form content ideas that maximize reach and retention.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 3,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000400",
            title: "Meta Ads, Targeting, and Placements",
            description: "Select campaign objectives, target audiences, and choose placements like feed, stories, and reels.",
            type: "MCQ",
            options: [
              "Awareness / engagement / traffic / leads / sales",
              "Only reach",
              "Only website visits"
            ],
            points: 10,
            videoUrl: null,
            order: 4,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000401",
            title: "Lead Generation, Influencers, and Performance Tracking",
            description: "Use lead forms, WhatsApp ads, influencer collaborations, and track reach, engagement, CTR, and ROI.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 5,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000fa1",
            title: "Choosing the Right Social Platforms",
            description: "Match Facebook, Instagram, LinkedIn, YouTube, and X with the right audience and goal.",
            type: "MCQ",
            options: [
              "Different platforms serve different audiences and goals",
              "All platforms work the same",
              "Only one platform matters"
            ],
            points: 10,
            videoUrl: null,
            order: 6,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000fa2",
            title: "Understanding Audience Behaviour",
            description: "Plan content using audience age, interests, activity patterns, and preferred formats.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 7,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000fa3",
            title: "Content Planning Basics",
            description: "Use a content calendar with educational, promotional, and testimonial content to stay consistent.",
            type: "MCQ",
            options: [
              "Educational, promotional, testimonial, storytelling",
              "Only ads",
              "Only memes"
            ],
            points: 10,
            videoUrl: null,
            order: 8,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000fa4",
            title: "Creating Engaging Posts and Visual Content",
            description: "Use images, carousels, videos, and infographics with short captions and clear value.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 9,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000fa5",
            title: "Reels and Short-Form Content Strategy",
            description: "Plan reels, shorts, and quick videos to maximize reach, retention, and engagement.",
            type: "MCQ",
            options: [
              "Quick tips, tutorials, testimonials, before-and-after",
              "Only long videos",
              "Only text posts"
            ],
            points: 10,
            videoUrl: null,
            order: 10,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000fa6",
            title: "Building Brand Voice and Identity",
            description: "Define tone, personality, visuals, and consistency for a memorable brand presence.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 11,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000fa7",
            title: "Meta Ads Campaign Objectives",
            description: "Choose awareness, consideration, engagement, leads, sales, or app-install objectives correctly.",
            type: "MCQ",
            options: [
              "Awareness, consideration, engagement, leads, sales",
              "Only sales",
              "Only traffic"
            ],
            points: 10,
            videoUrl: null,
            order: 12,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000fa8",
            title: "Audience Targeting Basics",
            description: "Target people using demographics, interests, custom audiences, and lookalikes.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 13,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000fa9",
            title: "Creative Formats and Ad Placements",
            description: "Identify image, video, carousel, story, reel, feed, and audience network placements.",
            type: "MCQ",
            options: [
              "Image, video, carousel, stories, reels, feed",
              "Only feed ads",
              "Only video ads"
            ],
            points: 10,
            videoUrl: null,
            order: 14,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000faa",
            title: "Lead Forms and Website Traffic Campaigns",
            description: "Compare instant lead forms with landing-page traffic campaigns for lead generation.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 15,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000fab",
            title: "WhatsApp Click-to-Chat Ads",
            description: "Explain why click-to-WhatsApp ads are effective for quick conversations and lead conversion.",
            type: "MCQ",
            options: [
              "Instant communication and faster lead conversion",
              "Only for brand awareness",
              "Not useful for lead generation"
            ],
            points: 10,
            videoUrl: null,
            order: 16,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000fac",
            title: "Working with Creators and Influencers",
            description: "Work with nano, micro, macro, and celebrity influencers to increase reach and trust.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 17,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000fad",
            title: "Brand Collaborations and Promotions",
            description: "Use joint campaigns, giveaways, and cross-promotions to expand audience reach.",
            type: "MCQ",
            options: [
              "Joint campaigns, giveaways, cross-promotions",
              "Only paid ads",
              "Only organic hashtags"
            ],
            points: 10,
            videoUrl: null,
            order: 18,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000fae",
            title: "Understanding Engagement Metrics",
            description: "Measure reach, engagement, CTR, follower growth, and video views to evaluate effectiveness.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 19,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000faf",
            title: "Evaluating Campaign Effectiveness",
            description: "Use cost per lead, cost per click, conversion rate, and ROI to judge campaign performance.",
            type: "MCQ",
            options: [
              "Cost per lead, CPC, conversion rate, ROI",
              "Only likes",
              "Only shares"
            ],
            points: 10,
            videoUrl: null,
            order: 20,
            moduleId: "00000000-0000-0000-0000-000000000067",
            submissions: []
          }
        ]
      },
      {
        id: "00000000-0000-0000-0000-000000000068",
        courseId: "00000000-0000-0000-0000-000000000001",
        title: "Module 4: AI Tools for Marketing & Productivity",
        description: "AI-driven workflows for content generation, research, analytics, automation, and responsible usage in modern marketing.",
        videoUrl: [
          "https://pub-ebe8ad7e6a50432a9b8687f7b7253798.r2.dev/edtech/edtech/module_videos/AI%20Class.mp4"
        ],
        thumbnailUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1470&q=80",
        order: 4,
        tasks: [
          {
            id: "00000000-0000-0000-0000-000000000407",
            title: "AI in Marketing Basics",
            description: "Explain how AI improves productivity, analysis, and personalization without replacing marketers.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 1,
            moduleId: "00000000-0000-0000-0000-000000000068",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000408",
            title: "AI for Content Creation",
            description: "Generate ad copy, captions, blog ideas, and social content ideas using AI tools.",
            type: "MCQ",
            options: [
              "Captions, ad copy, blog ideas, email drafts",
              "Only spreadsheets",
              "Only image editing"
            ],
            points: 10,
            videoUrl: null,
            order: 2,
            moduleId: "00000000-0000-0000-0000-000000000068",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000000409",
            title: "AI for Research and Strategy",
            description: "Use AI to analyze competitors, market trends, and campaign ideas.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 3,
            moduleId: "00000000-0000-0000-0000-000000000068",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-00000000040a",
            title: "AI Analytics and Interpretation",
            description: "Use AI to summarize performance data, spot trends, and recommend optimizations.",
            type: "MCQ",
            options: [
              "Performance patterns, recommendations, summaries",
              "Only posting content",
              "Only keyword generation"
            ],
            points: 10,
            videoUrl: null,
            order: 4,
            moduleId: "00000000-0000-0000-0000-000000000068",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-00000000040b",
            title: "Workflow Automation and Responsible AI",
            description: "Automate repetitive marketing work while keeping originality, ethics, and verification in place.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 5,
            moduleId: "00000000-0000-0000-0000-000000000068",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-000000001389",
            title: "Prompt Engineering for Marketers",
            description: "Differentiate between zero-shot, few-shot, and role-based prompting to achieve accurate marketing outputs.",
            type: "MCQ",
            options: [
              "Role-based and few-shot prompts yield highly tailored outputs",
              "Only short questions work",
              "No structure is needed"
            ],
            points: 10,
            videoUrl: null,
            order: 6,
            moduleId: "00000000-0000-0000-0000-000000000068",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-00000000138a",
            title: "AI Image Generation and Visual Assets",
            description: "Explain how to write descriptive prompts for AI image tools (like Midjourney or DALL-E) to generate consistent marketing visual assets.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 7,
            moduleId: "00000000-0000-0000-0000-000000000068",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-00000000138b",
            title: "AI Copywriting vs Human Editing",
            description: "Describe how to balance AI-generated text with human tone, brand guidelines, and factual verification.",
            type: "MCQ",
            options: [
              "Verify and refine AI outputs for brand consistency and accuracy",
              "Publish AI outputs directly without review",
              "AI is always 100% accurate and ready"
            ],
            points: 10,
            videoUrl: null,
            order: 8,
            moduleId: "00000000-0000-0000-0000-000000000068",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-00000000138c",
            title: "Customer Support Automation with AI Chatbots",
            description: "Detail how custom AI agents and chatbots are integrated into websites to answer user queries and qualify marketing leads.",
            type: "WRITTEN",
            options: [],
            points: 10,
            videoUrl: null,
            order: 9,
            moduleId: "00000000-0000-0000-0000-000000000068",
            submissions: []
          },
          {
            id: "00000000-0000-0000-0000-00000000138d",
            title: "AI-Powered Email Marketing Campaigns",
            description: "Explain how AI helps in segmenting email lists, creating personalized subject lines, and optimizing sending times.",
            type: "MCQ",
            options: [
              "Optimizes subject lines, sending times, and list segments based on data",
              "Only generates templates",
              "Always sends the same email to everyone"
            ],
            points: 10,
            videoUrl: null,
            order: 10,
            moduleId: "00000000-0000-0000-0000-000000000068",
            submissions: []
          }
        ]
      }
    ]
  }
];

export const getCourseBySlug = (slug: string): CourseDetail | undefined => {
  return coursesData.find(course => course.slug === slug);
};

export const getCourseById = (id: string): CourseDetail | undefined => {
  return coursesData.find(course => course.id === id);
};

export const getAllCourses = (): CourseDetail[] => {
  return coursesData;
};
