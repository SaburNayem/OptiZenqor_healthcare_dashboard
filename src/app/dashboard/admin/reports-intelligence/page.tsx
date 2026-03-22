import { reports } from "@/lib/mock-data";
import { AlertBanner } from "@/components/dashboard/AlertBanner";
import { ReportSummaryCard } from "@/components/dashboard/ReportSummaryCard";

export default function AdminReportsIntelligencePage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Reports Intelligence</h1>
      <AlertBanner text="AI summaries are assistive and non-diagnostic. Physician review required." />
      <div className="grid gap-4 md:grid-cols-3">
        {reports.map((report) => (
          <ReportSummaryCard key={report.id} report={report} />
        ))}
      </div>
    </section>
  );
}
