'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { BlogPost } from '@/lib/blog';

const CATEGORY_COLORS: Record<string, string> = {
  'Stratégie Digitale': 'text-blue-400 bg-blue-400/10',
  'الاستراتيجية الرقمية': 'text-blue-400 bg-blue-400/10',
  'Mobile': 'text-green-400 bg-green-400/10',
  'الموبايل': 'text-green-400 bg-green-400/10',
  'Développement Web': 'text-purple-400 bg-purple-400/10',
  'تطوير الويب': 'text-purple-400 bg-purple-400/10',
  'SEO': 'text-yellow-400 bg-yellow-400/10',
  'Architecture': 'text-cyan-400 bg-cyan-400/10',
  'البنية التقنية': 'text-cyan-400 bg-cyan-400/10',
  'Design & UX': 'text-pink-400 bg-pink-400/10',
  'التصميم وتجربة المستخدم': 'text-pink-400 bg-pink-400/10',
  'SaaS': 'text-orange-400 bg-orange-400/10',
  'Technique': 'text-red-400 bg-red-400/10',
  'تقني': 'text-red-400 bg-red-400/10',
};

export default function BlogIndexClient({
  posts,
  locale,
}: {
  posts: BlogPost[];
  locale: string;
}) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="glow-orb w-80 h-80 bg-accent top-10 -left-20" />
        <div className="glow-orb w-64 h-64 bg-purple-500 bottom-0 -right-16" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl sm:text-6xl font-black text-strong tracking-tight"
          >
            {t('blog.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-lg text-strong font-medium opacity-75 max-w-2xl mx-auto"
          >
            {t('blog.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group glass rounded-3xl border-main overflow-hidden hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col"
              >
                {/* Card top color strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-accent via-blue-400 to-cyan-400" />

                <div className="p-8 flex flex-col flex-1">
                  {/* Category + read time */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category] || 'text-accent bg-accent/10'}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-muted font-semibold">
                      {post.readTime} {t('blog.readTime')}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-bold text-strong mb-3 group-hover:text-accent transition-colors duration-300 leading-snug flex-1">
                    {post.title}
                  </h2>

                  <p className="text-sm text-strong font-medium opacity-75 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  {post.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-accent/5 text-accent border border-accent/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-main mt-auto">
                    <span className="text-xs text-muted font-semibold">
                      {new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar-MA' : 'fr-MA', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="text-xs font-bold text-accent hover:underline underline-offset-4 decoration-2 transition-all"
                    >
                      {t('blog.readMore')} →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
