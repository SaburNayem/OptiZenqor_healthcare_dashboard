import { Badge } from "@/components/ui/badge";
import type { Role } from "@/lib/types";

export function RoleBadge({ role }: { role: Role }) {
  const label: Record<Role, string> = { admin: "Admin", doctor: "Doctor", patient: "Patient" };
  const variant: Record<Role, "info" | "success" | "neutral"> = {
    admin: "info",
    doctor: "success",
    patient: "neutral",
  };
  return <Badge variant={variant[role]}>{label[role]}</Badge>;
}
