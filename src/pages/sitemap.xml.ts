import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { CATEGORIES } from '../data/categories.mjs';

// 모든 글·카테고리 페이지를 자동 포함하는 sitemap.xml
export const GET: APIRoute = async ({ site }) => {
  const all = await getCollection('articles', ({ data }) => !data.draft);
  const u = (p: string) => new URL(p, site).href;
  const latest = all.reduce((m, e) => Math.max(m, +(e.data.updatedDate ?? e.data.publishDate)), 0);
  const day = (t: number | Date) => new Date(t).toISOString().slice(0, 10);
  const urls = [
    { loc: u('/'), lastmod: day(latest), priority: '1.0' },
    ...CATEGORIES.map((c) => ({ loc: u(`/category/${c.key}/`), lastmod: day(latest), priority: '0.7' })),
    ...all.map((e) => ({ loc: u(`/articles/${e.id}/`), lastmod: day(e.data.updatedDate ?? e.data.publishDate), priority: '0.8' })),
    { loc: u('/about/'), lastmod: day(latest), priority: '0.3' },
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((x) => `  <url><loc>${x.loc}</loc><lastmod>${x.lastmod}</lastmod><priority>${x.priority}</priority></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
