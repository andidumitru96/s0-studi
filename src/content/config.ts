import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.string(),
    date: z.string(),
    location: z.string(),
    featured: z.boolean().optional(),
    images: z.array(z.string()),
  }),
});

export const collections = {
  projects,
};
