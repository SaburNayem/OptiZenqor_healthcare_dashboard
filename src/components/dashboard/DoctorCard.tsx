import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Doctor } from "@/lib/types";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card>
      <CardContent className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-semibold text-[var(--text-strong)]">{doctor.name}</p>
            <p className="text-sm text-[var(--text-muted)]">{doctor.specialization}</p>
          </div>
          <Badge variant={doctor.availability === "online" ? "success" : "neutral"}>{doctor.availability}</Badge>
        </div>
        <p className="text-sm text-[var(--text-muted)]">{doctor.experience} years experience • {doctor.country}</p>
        <p className="text-sm text-[var(--text-muted)]">Rating {doctor.rating} / 5.0</p>
      </CardContent>
    </Card>
  );
}
