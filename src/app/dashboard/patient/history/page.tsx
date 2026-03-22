import { historyTimeline } from "@/lib/mock-data";
import { TimelineCard } from "@/components/dashboard/TimelineCard";

export default function PatientHistoryPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">History</h1>
      <p className="text-[var(--text-muted)]">Timeline sorted latest first for symptom checks, appointments, and reports.</p>
      <div className="grid gap-4 lg:grid-cols-3">
        {historyTimeline.map((item) => (
          <TimelineCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
