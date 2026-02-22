import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.coerce.date(),
    featured: z.boolean().default(false),
    author: z.object({
      name: z.string(),
      image: z.string().optional(),
    }),
    category: z
      .object({
        title: z.string(),
        slug: z.string(),
      })
      .optional(),
    mainImage: z
      .object({
        src: z.string(),
        alt: z.string().default(''),
      })
      .optional(),
  }),
})

export const collections = { blog }
