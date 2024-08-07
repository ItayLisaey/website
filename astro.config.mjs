import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://itay.lisaey.com',
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});