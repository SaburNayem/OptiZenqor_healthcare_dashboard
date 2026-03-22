import { SkeletonLoader } from "@/components/dashboard/SkeletonLoader";

export default function DashboardLoading() {
  return (
    <main className="p-6">
      <SkeletonLoader />
    </main>
  );
}
