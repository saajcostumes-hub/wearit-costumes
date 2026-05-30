// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://wearit.co.in',        // ← ADDED: canonical domain for sitemap + SEO
  vite: {
    plugins: [tailwindcss()]
  }
});
