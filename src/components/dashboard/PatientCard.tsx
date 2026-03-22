import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Patient } from "@/lib/types";

export function PatientCard({ patient }: { patient: Patient }) {
  const variant = patient.status === "critical" ? "danger" : patient.status === "follow-up" ? "warning" : "success";
  return (
    <Card>
      <CardContent className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[var(--text-strong)]">{patient.name}</p>
          <Badge variant={variant}>{patient.status}</Badge>
        </div>
        <p className="text-sm text-[var(--text-muted)]">{patient.age} years • {patient.country}</p>
        <p className="text-sm text-[var(--text-muted)]">{patient.medicalHistorySummary}</p>
      </CardContent>
    </Card>
  );
}
