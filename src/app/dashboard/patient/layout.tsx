import type { PropsWithChildren } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function PatientLayout({ children }: PropsWithChildren) {
  return <DashboardLayout role="patient">{children}</DashboardLayout>;
}
