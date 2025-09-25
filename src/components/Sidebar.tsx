"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Upload", icon: "↑" },
  { href: "/history", label: "History", icon: "⟲" },
  { href: "/compare", label: "Compare", icon: "≍" },
  { href: "/account", label: "Account", icon: "⚙︎" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 shrink-0 border-r hr border-r-[var(--line)]">
      <div className="px-5 py-6">
        <div className="mb-8 text-lg font-semibold tracking-tight">🌙 LunarAds</div>
        <nav className="space-y-1">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm
                ${active ? "bg-[var(--card)] text-white" : "text-[var(--muted)] hover:text-white hover:bg-[var(--card)]"}`}
              >
                <span className="text-base">{n.icon}</span>
                {n.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}