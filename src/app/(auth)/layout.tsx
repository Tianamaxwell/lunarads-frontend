import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth | LunarAds",
  description: "Sign in or create your account",
};

/**
 * NOTE: This is a segment layout (NOT the root layout).
 * Do NOT include <html> or <body> tags here — those belong only in src/app/layout.tsx.
 * This wrapper will only apply to routes inside (auth): /login and /signup.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className + " min-h-screen grid place-items-center px-4 bg-slate-50 text-slate-900"}>
      {children}
    </div>
  );
}
