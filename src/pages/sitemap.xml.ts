import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site ? site.toString() : 'https://rsandrews.247hvac.repair').replace(/\/$/, '');
  const now = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/plumbing-services/', priority: '0.9', changefreq: 'weekly' },
    { url: '/24-7-emergency-plumbing/', priority: '0.9', changefreq: 'weekly' },
    { url: '/water-heater-repair/', priority: '0.9', changefreq: 'weekly' },
    { url: '/drain-cleaning/', priority: '0.9', changefreq: 'weekly' },
    { url: '/plumbing-financing/', priority: '0.8', changefreq: 'monthly' },
    { url: '/heating-and-air/', priority: '0.8', changefreq: 'weekly' },
    { url: '/24-7-emergency-ac-repair/', priority: '0.8', changefreq: 'weekly' },
    { url: '/new-hvac-system-financing/', priority: '0.7', changefreq: 'monthly' },
    { url: '/we-repair-all-hvac-brands/', priority: '0.7', changefreq: 'monthly' },
    { url: '/preventative-maintenance/', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/', priority: '0.8', changefreq: 'weekly' },
    { url: '/sitemap/', priority: '0.7', changefreq: 'weekly' },
  ];

  // Dynamic location service area routes
  const locationFiles = fs.readdirSync(path.resolve('src/content/locations')).filter(f => f.endsWith('.md'));
  const locationRoutes = locationFiles.map(file => ({
    url: `/${file.replace(/\.md$/, '')}/`,
    priority: '0.85',
    changefreq: 'weekly'
  }));

  // Blog article routes
  const blogFiles = fs.existsSync(path.resolve('src/content/blog'))
    ? fs.readdirSync(path.resolve('src/content/blog')).filter(f => f.endsWith('.md'))
    : [];
  const blogRoutes = blogFiles.map(file => ({
    url: `/blog/${file.replace(/\.md$/, '')}/`,
    priority: '0.7',
    changefreq: 'monthly'
  }));

  const allRoutes = [...staticRoutes, ...locationRoutes, ...blogRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (item) => `  <url>
    <loc>${baseUrl}${item.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff'
    }
  });
};
