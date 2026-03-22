import { Badge } from "@/components/ui/badge";
import type { AppointmentStatus } from "@/lib/types";

export function StatusBadge({ status }: { status: AppointmentStatus }) {
  const variant =
    status === "completed"
      ? "success"
      : status === "ongoing"
        ? "info"
        : status === "cancelled"
          ? "danger"
          : "warning";
  return <Badge variant={variant}>{status}</Badge>;
}
