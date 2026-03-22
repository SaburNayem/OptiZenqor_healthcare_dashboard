import { symptomSessions } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { UrgencyBadge } from "@/components/dashboard/UrgencyBadge";
import { ConfidenceBadge } from "@/components/dashboard/ConfidenceBadge";
import { Button } from "@/components/ui/button";

export default function DoctorSymptomReferralsPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Symptom Referrals</h1>
      <div className="grid gap-4 lg:grid-cols-3">
        {symptomSessions.map((session) => (
          <Card key={session.id}>
            <CardContent className="space-y-3 p-4">
              <p className="text-lg font-semibold">{session.patientName}</p>
              <p className="text-sm text-[var(--text-muted)]">Symptoms referred to {session.suggestedDoctorType}</p>
              <UrgencyBadge value={session.urgency} />
              <ConfidenceBadge value={session.confidence} />
              <p className="text-xs text-[var(--text-muted)]">Recommended timing: within 30 minutes</p>
              <div className="flex gap-2">
                <Button size="sm">Accept</Button>
                <Button size="sm" variant="outline">Review</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
