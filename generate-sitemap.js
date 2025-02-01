import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/studies', changefreq: 'daily', priority: 0.8 },
  { url: '/reflections', changefreq: 'daily', priority: 0.8 },
  { url: '/donate', changefreq: 'monthly', priority: 0.8 },
];

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://fabiobaquero.netlify.app' });

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);

  await streamToPromise(sitemap).then(data => writeStream.write(data));

  console.log('✅ Sitemap generated at /public/sitemap.xml');
})();
