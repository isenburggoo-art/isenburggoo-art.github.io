import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 글 = src/content/articles/<slug>.md  (파일명이 곧 URL slug)
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(), // <title> 및 H1
    description: z.string().max(160), // 메타 설명 (80~155자 권장)
    category: z.enum(['newborn', 'infant', 'toddler', 'preschool', 'guide']), // 대표 섹션
    ages: z.array(z.enum(['newborn', 'infant', 'toddler', 'preschool', 'guide'])).default([]), // 함께 노출할 섹션
    keywords: z.array(z.string()).default([]),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    related: z.array(z.string()).default([]), // 함께 읽을 글 slug
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
