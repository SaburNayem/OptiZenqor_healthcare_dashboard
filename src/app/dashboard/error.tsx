"use client";

import { ErrorState } from "@/components/dashboard/ErrorState";

export default function DashboardError() {
  return <ErrorState message="Unable to load dashboard data. Please try again." />;
}
