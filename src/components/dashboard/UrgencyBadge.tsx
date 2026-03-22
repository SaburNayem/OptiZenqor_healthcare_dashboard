import { Badge } from "@/components/ui/badge";
import type { UrgencyLevel } from "@/lib/types";

export function UrgencyBadge({ value }: { value: UrgencyLevel }) {
  const variant = value === "CRITICAL" ? "danger" : value === "HIGH" ? "warning" : value === "MEDIUM" ? "info" : "success";
  return <Badge variant={variant}>{value}</Badge>;
}
