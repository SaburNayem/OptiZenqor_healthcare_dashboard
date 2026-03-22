import Link from "next/link";
import { symptomSessions } from "@/lib/mock-data";
import { AlertBanner } from "@/components/dashboard/AlertBanner";
import { Button } from "@/components/ui/button";
import { UrgencyBadge } from "@/components/dashboard/UrgencyBadge";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminEmergencyAlertsPage() {
  const criticalCases = symptomSessions.filter((s) => s.urgency === "CRITICAL" || s.urgency === "HIGH");
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold text-red-700">Emergency Alerts</h1>
      <AlertBanner critical text="Critical board enabled. Red color is reserved only for emergency and critical alerts." />
      <div className="grid gap-4 lg:grid-cols-2">
        {criticalCases.map((item) => (
          <Card key={item.id} className="border-red-200">
            <CardContent className="space-y-3 p-4">
              <p className="text-lg font-semibold text-red-700">{item.patientName}</p>
              <p className="text-sm text-[var(--text-muted)]">Urgent symptom escalation at {item.createdAt}</p>
              <p className="text-sm text-[var(--text-muted)]">Recommended action: immediate physician triage.</p>
              <UrgencyBadge value={item.urgency} />
              <div className="flex flex-wrap gap-2">
                <Button variant="danger">Notify Doctor</Button>
                <Button variant="outline">Escalate Support</Button>
                <Button asChild variant="secondary"><Link href="/emergency">Open Emergency View</Link></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
