import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const common = z.object({
  title: z.string(),
  description: z.string(),
  type: z.enum(['location', 'service']),
  city: z.string().optional(),
  pageImage: z.string().optional(),
  pageImageAlt: z.string().optional(),
  keywords: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  postalCodes: z.array(z.string()).optional(),
  county: z.string().optional(),
});

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  author: z.string().default('RS Andrews Team'),
  category: z.string().default('Plumbing Advice'),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

export const collections = {
  locations: defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/locations' }), schema: common }),
  services: defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/services' }), schema: common }),
  blog: defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/blog' }), schema: blogSchema }),
};

