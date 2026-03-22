import {
  adminMetrics,
  appointmentsTrend,
  doctorAvailabilityData,
  emergencyByRegion,
  notifications,
  symptomUsageTrend,
} from "@/lib/mock-data";
import { AlertBanner } from "@/components/dashboard/AlertBanner";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { NotificationCard } from "@/components/dashboard/NotificationCard";

export default function AdminOverviewPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Overview</h1>
        <p className="text-[var(--text-muted)]">Global control center for system activity and medical safety.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {adminMetrics.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} delta={metric.delta} />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Appointments Trend" subtitle="Monthly appointment trajectory" data={appointmentsTrend} xKey="month" yKey="value" />
        <ChartCard title="Symptom Checker Usage" subtitle="Weekly sessions" data={symptomUsageTrend} xKey="week" yKey="usage" type="bar" />
        <ChartCard title="Emergency Alerts by Region" subtitle="Critical alert distribution" data={emergencyByRegion} xKey="region" yKey="value" type="pie" />
        <ChartCard title="Doctor Availability" subtitle="Real-time online/offline ratio" data={doctorAvailabilityData} xKey="label" yKey="value" type="bar" />
      </div>
      <AlertBanner critical text="18 emergency alerts detected today. Immediate triage monitoring active." />
      <div className="grid gap-4 lg:grid-cols-3">
        {notifications.map((item) => (
          <NotificationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
