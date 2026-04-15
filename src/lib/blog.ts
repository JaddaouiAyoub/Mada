import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  tags?: string[];
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

export function getAllPosts(locale: 'fr' | 'ar'): BlogPost[] {
  const dir = path.join(CONTENT_DIR, locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf-8');
      const data = JSON.parse(raw) as BlogPost;
      return { ...data, slug: f.replace('.json', '') };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string, locale: 'fr' | 'ar'): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, locale, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw) as BlogPost;
  return { ...data, slug };
}
