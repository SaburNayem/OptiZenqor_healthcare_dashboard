import { symptomSessions } from "@/lib/mock-data";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { ConfidenceBadge } from "@/components/dashboard/ConfidenceBadge";
import { UrgencyBadge } from "@/components/dashboard/UrgencyBadge";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminSymptomCheckerActivityPage() {
  const urgencyDistribution = [
    { label: "LOW", value: 120 },
    { label: "MEDIUM", value: 232 },
    { label: "HIGH", value: 86 },
    { label: "CRITICAL", value: 18 },
  ];
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Symptom Checker Activity</h1>
      <ChartCard title="Urgency Distribution" subtitle="LOW, MEDIUM, HIGH, CRITICAL" data={urgencyDistribution} xKey="label" yKey="value" type="bar" />
      <div className="grid gap-4 md:grid-cols-3">
        {symptomSessions.map((session) => (
          <Card key={session.id}>
            <CardContent className="space-y-2 p-4">
              <p className="font-semibold">{session.patientName}</p>
              <p className="text-sm text-[var(--text-muted)]">Suggested doctor type: {session.suggestedDoctorType}</p>
              <UrgencyBadge value={session.urgency} />
              <ConfidenceBadge value={session.confidence} />
              <p className="text-xs text-[var(--text-muted)]">Session: {session.createdAt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
