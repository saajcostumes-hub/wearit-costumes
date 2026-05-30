// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ← ADDED: canonical domain for sitemap + SEO
  site: 'https://wearit.co.in',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});