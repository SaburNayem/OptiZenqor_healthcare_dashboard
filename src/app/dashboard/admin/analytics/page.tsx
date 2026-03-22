import { appointmentsTrend, countryAdoptionData, symptomUsageTrend } from "@/lib/mock-data";
import { ChartCard } from "@/components/dashboard/ChartCard";

export default function AdminAnalyticsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <p className="text-[var(--text-muted)]">Global patient growth, appointment volume, completion rate, emergency rate, doctor response time, report upload trends, and country adoption metrics.</p>
      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Appointment Volume" subtitle="Monthly trend" data={appointmentsTrend} xKey="month" yKey="value" />
        <ChartCard title="Symptom Checker Completion" subtitle="Weekly completion" data={symptomUsageTrend} xKey="week" yKey="usage" type="bar" />
        <ChartCard title="Country-based Adoption" subtitle="Active users by country" data={countryAdoptionData} xKey="country" yKey="users" type="bar" />
        <ChartCard title="Emergency Rate" subtitle="Critical cases ratio" data={[{ label: "Emergency", value: 18 }, { label: "Non-emergency", value: 438 }]} xKey="label" yKey="value" type="pie" />
      </div>
    </section>
  );
}
