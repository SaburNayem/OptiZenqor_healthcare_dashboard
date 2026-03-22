import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PatientProfilePage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Profile</h1>
      <Card>
        <CardHeader><CardTitle>Personal and Health Summary</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-sm text-[var(--text-muted)]">
          <p>Name: Sofia Alvarez</p>
          <p>Country: Spain</p>
          <p>Recent symptoms: Severe abdominal pain, dizziness</p>
          <p>Last appointment: 2026-03-21 17:20</p>
          <p>Report summary: 3 uploaded in the past 30 days</p>
        </CardContent>
      </Card>
    </section>
  );
}
