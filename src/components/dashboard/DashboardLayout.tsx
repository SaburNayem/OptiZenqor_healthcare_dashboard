"use client";

import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import type { Role } from "@/lib/types";
import { HeaderBar } from "@/components/dashboard/HeaderBar";
import { SidebarNav } from "@/components/dashboard/SidebarNav";
import { AlertBanner } from "@/components/dashboard/AlertBanner";

export function DashboardLayout({ role, children }: PropsWithChildren<{ role: Role }>) {
  return (
    <div className="min-h-screen bg-[var(--surface-primary)]">
      <div className="mx-auto flex max-w-[1700px]">
        <SidebarNav role={role} />
        <div className="flex min-h-screen flex-1 flex-col">
          <HeaderBar role={role} />
          <main className="p-4 sm:p-6">
            <AlertBanner text="This is not a medical diagnosis" />
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mt-4">
              {children}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
