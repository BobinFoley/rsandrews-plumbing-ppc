import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rsandrews.247plumbing.repair',
  trailingSlash: 'always',
  integrations: [sitemap()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
