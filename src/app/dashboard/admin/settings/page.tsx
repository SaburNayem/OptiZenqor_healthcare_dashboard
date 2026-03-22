import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminSettingsPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Admin Settings</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Manage Countries / Regions</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <Input placeholder="Add country or region" />
            <Button>Save Region Settings</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>System Notices and Disclaimer Content</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <Input defaultValue="This is not a medical diagnosis" />
            <Button variant="secondary">Update Notice</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Feature Toggles</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm text-[var(--text-muted)]">
            <p>Symptom checker auto-triage: Enabled</p>
            <p>Doctor verification gate: Enabled</p>
            <p>Global report analysis: Enabled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Emergency Escalation Settings</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <Input placeholder="Escalation SLA (minutes)" defaultValue="15" />
            <Button variant="danger">Save Emergency Policy</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
