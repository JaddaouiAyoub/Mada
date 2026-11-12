import Link from 'next/link';
import '../index.css';

// Rendered for URLs outside of a locale (the [locale] layout handles its own 404s).
export default function RootNotFound() {
  return (
    <html lang="fr">
      <head>
        <title>Page introuvable | Ayoub Jaddaoui</title>
        <meta name="robots" content="noindex" />
      </head>
      <body>
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
          <h1 className="font-display text-5xl font-black text-strong">404</h1>
          <p className="text-strong opacity-80">Cette page n&apos;existe pas.</p>
          <Link href="/fr" className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white">
            Retour à l&apos;accueil
          </Link>
        </main>
      </body>
    </html>
  );
}
