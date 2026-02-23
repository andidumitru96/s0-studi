import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.string(),
    location: z.string(),
    images: z.array(z.string()),
  }),
});

export const collections = {
  projects,
};