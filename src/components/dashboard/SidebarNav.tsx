"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { roleNavigation } from "@/features/dashboard/navigation";
import type { Role } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SidebarNav({ role }: { role: Role }) {
  const pathname = usePathname();
  return (
    <aside className="hidden min-h-screen w-72 border-r border-[var(--border-color)] bg-white lg:block">
      <div className="sticky top-0 p-5">
        <div className="mb-6 rounded-2xl bg-[linear-gradient(145deg,#e7f4ff_0%,#e9f7f2_100%)] p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">OptiZenqor Healthcare</p>
          <p className="mt-1 text-xl font-bold text-[var(--text-strong)]">Control Panel</p>
        </div>
        <nav className="space-y-1">
          {roleNavigation[role].map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium transition",
                  active ? "bg-[var(--brand-primary)] text-white shadow-sm" : "text-[var(--text-strong)] hover:bg-[var(--surface-secondary)]",
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
