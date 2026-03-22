import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DoctorSchedulePage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Schedule</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Daily and Weekly View</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm text-[var(--text-muted)]">
            <p>Monday: 09:00 - 17:00</p>
            <p>Tuesday: 10:00 - 18:00</p>
            <p>Wednesday: 09:00 - 16:00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Availability Controls</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <Button>Configure Available Slots</Button>
            <Button variant="outline">Mark Unavailable Time</Button>
            <Button variant="secondary">Toggle Online Consultation</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
