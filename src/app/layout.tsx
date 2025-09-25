import "@/app/globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "LunarAds",
  description: "Clean frontend",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <div className="flex">
          <Sidebar />
          <main className="flex-1">
            <header className="border-b border-[var(--line)]">
              <div className="mx-auto max-w-6xl px-6 py-4 text-sm text-[var(--muted)]">
                Week 3 — Frontend
              </div>
            </header>
            <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
            <footer className="border-t border-[var(--line)]">
              <div className="mx-auto max-w-6xl px-6 py-8 text-xs text-[var(--muted)]">
                © {new Date().getFullYear()} LunarAds
              </div>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}