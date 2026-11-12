import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

// The <html> and <body> tags are rendered by app/[locale]/layout.tsx so that
// `lang` and `dir` match the current locale. This root layout only passes through.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
