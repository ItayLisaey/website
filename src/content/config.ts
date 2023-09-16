import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const projectSchema = z.object({
  title: z.string(),
  emoji: z.string(),
  status: z.enum(['Done', 'WIP', 'Not Started']),
  description: z.string(),
  url: z.string().url().optional(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
});

const projects = defineCollection({
  // Type-check frontmatter using a schema
  schema: projectSchema,
});

const demos = defineCollection({
  // Type-check frontmatter using a schema
  schema: projectSchema,
});

export const collections = { blog, projects, demos };
