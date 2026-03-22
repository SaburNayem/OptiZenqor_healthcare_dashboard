import Link from "next/link";
import { patientMetrics, appointments, reports } from "@/lib/mock-data";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AlertBanner } from "@/components/dashboard/AlertBanner";
import { Button } from "@/components/ui/button";

export default function PatientHomePage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Sofia</h1>
        <p className="text-[var(--text-muted)]">Here is your calm and safe health dashboard.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {patientMetrics.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <Button asChild><Link href="/dashboard/patient/symptom-checker">Check Symptoms</Link></Button>
        <Button asChild variant="secondary"><Link href="/dashboard/patient/find-doctors">Book Appointment</Link></Button>
        <Button asChild variant="outline"><Link href="/dashboard/patient/reports">Upload Report</Link></Button>
        <Button asChild variant="secondary"><Link href="/dashboard/patient/history">View History</Link></Button>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border-color)] bg-white p-5">
          <h2 className="text-xl font-semibold">Upcoming Appointment</h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{appointments[0].dateTime} with {appointments[0].doctorName}</p>
        </div>
        <div className="rounded-2xl border border-[var(--border-color)] bg-white p-5">
          <h2 className="text-xl font-semibold">Recent Report</h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{reports[0].reportType}: {reports[0].aiSummary}</p>
        </div>
      </div>
      <AlertBanner text="Persistent safety reminder: this platform provides guidance, not diagnosis." />
    </section>
  );
}
