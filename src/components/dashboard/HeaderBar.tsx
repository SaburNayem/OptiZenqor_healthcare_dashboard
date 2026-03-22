"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RoleBadge } from "@/components/dashboard/RoleBadge";
import type { Role } from "@/lib/types";

export function HeaderBar({ role }: { role: Role }) {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border-color)] bg-white/95 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
          <Input className="pl-9" placeholder="Search patients, doctors, reports..." aria-label="Global search" />
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-[var(--border-color)] bg-white p-2 text-[var(--text-muted)] hover:bg-[var(--surface-secondary)]" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>
          <RoleBadge role={role} />
          <div className="rounded-xl bg-[var(--surface-secondary)] px-3 py-2 text-sm font-semibold text-[var(--text-strong)]">Dr. Alex Carter</div>
        </div>
      </div>
    </header>
  );
}
