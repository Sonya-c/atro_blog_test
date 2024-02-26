import { z, defineCollection } from "astro:content";


const papersCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        authors: z.array(z.string()),
        year: z.number(),
        journal: z.string(),
        link: z.string(),
        keywords: z.array(z.string())
    })
});

export const collections = {
    "papers": papersCollection,
}