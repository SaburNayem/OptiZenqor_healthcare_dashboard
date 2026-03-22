import type { PropsWithChildren } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function DoctorLayout({ children }: PropsWithChildren) {
  return <DashboardLayout role="doctor">{children}</DashboardLayout>;
}
