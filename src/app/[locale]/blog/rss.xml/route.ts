import { getAllPosts } from '@/lib/blog';
import { routing } from '@/i18n/routing';
import { SITE_URL, SITE_NAME } from '@/lib/site';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(_req: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale === 'ar' ? 'ar' : 'fr';
  const posts = getAllPosts(lang);
  const blogUrl = `${SITE_URL}/${lang}/blog`;

  const items = posts
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${blogUrl}/${p.slug}</link>
      <guid isPermaLink="true">${blogUrl}/${p.slug}</guid>
      <description>${escapeXml(p.excerpt)}</description>
      <category>${escapeXml(p.category)}</category>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog — ${escapeXml(SITE_NAME)}</title>
    <link>${blogUrl}</link>
    <description>${lang === 'ar' ? 'مقالات حول تطوير الويب والموبايل' : 'Articles sur le développement web, mobile et SaaS'}</description>
    <language>${lang}</language>
    <atom:link href="${blogUrl}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
