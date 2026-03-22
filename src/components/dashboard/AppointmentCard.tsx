import { Card, CardContent } from "@/components/ui/card";
import type { Appointment } from "@/lib/types";
import { StatusBadge } from "@/components/dashboard/StatusBadge";

export function AppointmentCard({ appointment }: { appointment: Appointment }) {
  return (
    <Card>
      <CardContent className="space-y-3 p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-semibold text-[var(--text-strong)]">{appointment.patientName}</p>
            <p className="text-sm text-[var(--text-muted)]">with {appointment.doctorName}</p>
          </div>
          <StatusBadge status={appointment.status} />
        </div>
        <p className="text-sm text-[var(--text-muted)]">{appointment.dateTime} • {appointment.country}</p>
        <p className="text-sm text-[var(--text-muted)]">{appointment.reason}</p>
      </CardContent>
    </Card>
  );
}
