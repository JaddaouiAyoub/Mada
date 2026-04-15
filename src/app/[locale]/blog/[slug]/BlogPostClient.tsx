'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { BlogPost } from '@/lib/blog';

function renderMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="font-display text-xl font-bold text-strong mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="font-display text-2xl font-bold text-strong mt-12 mb-4 pb-2 border-b border-main">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="font-display text-3xl font-bold text-strong mt-16 mb-6">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-strong">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-accent/10 text-accent px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/```[\w]*\n([\s\S]*?)```/g, '<pre class="glass rounded-xl p-5 overflow-x-auto text-sm font-mono my-6 border-main"><code>$1</code></pre>')
    .replace(/^\| (.+) \|$/gm, '<tr class="border-b border-main"><td class="px-4 py-2 text-sm text-strong font-medium">$1</td></tr>')
    .replace(/^\|[-| ]+\|$/gm, '')
    .replace(/^- (.+)$/gm, '<li class="ml-4 text-strong font-medium opacity-85 mb-1.5 list-disc">$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 text-strong font-medium opacity-85 mb-1.5 list-decimal">$2</li>')
    .replace(/\n\n/g, '</p><p class="text-strong font-medium opacity-80 leading-relaxed mb-4">')
    .replace(/^(?!<[hpclprt])(.+)$/gm, '<p class="text-strong font-medium opacity-80 leading-relaxed mb-4">$1</p>');
}

export default function BlogPostClient({
  post,
  related,
  locale,
}: {
  post: BlogPost;
  related: BlogPost[];
  locale: string;
}) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="glow-orb w-80 h-80 bg-accent top-0 -left-20" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline underline-offset-4 mb-8 block"
            >
              ← {t('blog.backToBlog')}
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent">
                {post.category}
              </span>
              <span className="text-xs text-muted font-semibold">
                {post.readTime} {t('blog.readTime')}
              </span>
              <span className="text-xs text-muted font-semibold">
                {new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar-MA' : 'fr-MA', {
                  day: 'numeric', month: 'long', year: 'numeric',
                })}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-black text-strong leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-strong font-medium opacity-75 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-8 pt-8 border-t border-main">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-blue-400 flex items-center justify-center text-white font-black text-sm">
                AJ
              </div>
              <div>
                <div className="text-sm font-bold text-strong">{t('blog.author')}</div>
                <div className="text-xs text-muted font-semibold">Jaddaoui Elevate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-3xl px-4 sm:px-6"
        >
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          {/* Tags */}
          {post.tags && (
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-main">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-xl bg-accent/5 text-accent border border-accent/10">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-strong mb-8 text-center">
              {t('blog.relatedTitle')}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp, i) => (
                <motion.article
                  key={rp.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl p-6 border-main hover:border-accent/40 transition-all group"
                >
                  <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {rp.category}
                  </span>
                  <h3 className="font-display text-base font-bold text-strong mt-4 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {rp.title}
                  </h3>
                  <Link
                    href={`/${locale}/blog/${rp.slug}`}
                    className="text-xs font-bold text-accent hover:underline underline-offset-4"
                  >
                    {t('blog.readMore')} →
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
