import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LunarAds",
  description: "Frontend skeleton — Next.js + Tailwind + Supabase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold tracking-tight">LunarAds</h1>
            <nav className="text-sm opacity-80">Week 3 — Frontend</nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-12">{children}</main>
        <footer className="mt-20 border-t border-white/10">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm opacity-60">
            © {new Date().getFullYear()} LunarAds
          </div>
        </footer>
      </body>
    </html>
  );
}