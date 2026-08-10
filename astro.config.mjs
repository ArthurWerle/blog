import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  // Canonical production URL. Used for sitemap, canonical tags, llms.txt,
  // resume.json and JSON-LD absolute URLs. Keep in sync with src/constants/site.ts.
  site: "https://arthurwerle.com",
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  }
});