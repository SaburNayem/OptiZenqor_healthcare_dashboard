import { appointments, doctorMetrics, patients } from "@/lib/mock-data";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AppointmentCard } from "@/components/dashboard/AppointmentCard";

export default function DoctorOverviewPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Doctor Overview</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {doctorMetrics.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} delta={metric.delta} />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {appointments.slice(0, 2).map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
      <div className="rounded-2xl border border-[var(--border-color)] bg-white p-5">
        <h2 className="text-xl font-semibold">Recent Patient Activity</h2>
        <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
          {patients.map((patient) => (
            <li key={patient.id}>{patient.name}: {patient.recentSymptomActivity}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
