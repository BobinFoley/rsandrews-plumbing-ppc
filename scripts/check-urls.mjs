import fs from 'node:fs';
import path from 'node:path';

const expected = [
  '/',
  '/sitemap/',
  '/blog/',
  '/plumbing-services/',
  '/24-7-emergency-plumbing/',
  '/water-heater-repair/',
  '/drain-cleaning/',
  '/plumbing-financing/',
  '/plumbing-brands-serviced/',
  '/preventative-maintenance/'
];
for (const name of fs.readdirSync('src/content/locations')) expected.push(`/${name.replace(/\.md$/, '')}/`);
if (fs.existsSync('src/content/blog')) {
  for (const name of fs.readdirSync('src/content/blog')) expected.push(`/blog/${name.replace(/\.md$/, '')}/`);
}
const missing = expected.filter(url => !fs.existsSync(path.join('dist', url, 'index.html')));
console.log(`Checked ${expected.length} expected HTML routes.`);
if (missing.length) { console.error('Missing:', missing); process.exitCode = 1; }
for (const file of ['robots.txt','sitemap-index.xml','sitemap.xml']) if (!fs.existsSync(path.join('dist', file))) { console.error(`Missing ${file}`); process.exitCode = 1; }
