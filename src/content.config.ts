import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/index.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			logo: image(),
			screenshots: z
				.array(z.object({ src: image(), caption: z.string() }))
				.optional(),
			url: z.url().optional(),
			github: z.url().optional(),
			tech: z.array(z.string()),
			date: z.coerce.date(),
			// Wichtigkeit für die Standardsortierung: 1 = ganz oben.
			// Projekte ohne priority kommen danach (neueste zuerst).
			priority: z.number().int().positive().optional(),
			// Nur weitere Personen – ich selbst werde immer automatisch angezeigt.
			collaborators: z
				.array(z.object({ name: z.string(), github: z.url().optional() }))
				.optional(),
			role: z.string().optional(),
		}),
});

export const collections = { projects };
