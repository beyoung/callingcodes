import type { APIRoute } from 'astro';
import { callingCodes } from '../data/calling-codes';

export const GET: APIRoute = () => {
  const baseUrl = 'https://callingcodes.ayamap.com';
  
  // 静态页面
  const staticPages = [
    '',
    '/search',
  ];
  
  // 动态国家页面
  const countryPages = callingCodes.map(country => 
    `/country/${country.code.toLowerCase()}`
  );
  
  const allPages = [...staticPages, ...countryPages];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.startsWith('/country/') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : page === '/search' ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};