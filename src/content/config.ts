import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.string(),
    location: z.string(),
    images: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().optional()
  }),
});

export const collections = {
  projects,
};
