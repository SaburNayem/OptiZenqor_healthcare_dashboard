import { Badge } from "@/components/ui/badge";
import type { ConfidenceLevel } from "@/lib/types";

export function ConfidenceBadge({ value }: { value: ConfidenceLevel }) {
  const variant = value === "HIGH" ? "success" : value === "MEDIUM" ? "warning" : "neutral";
  return <Badge variant={variant}>{value} Confidence</Badge>;
}
