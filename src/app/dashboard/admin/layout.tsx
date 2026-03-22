import type { PropsWithChildren } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function AdminLayout({ children }: PropsWithChildren) {
  return <DashboardLayout role="admin">{children}</DashboardLayout>;
}
