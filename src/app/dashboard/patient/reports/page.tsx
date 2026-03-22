import { reports } from "@/lib/mock-data";
import { ReportSummaryCard } from "@/components/dashboard/ReportSummaryCard";
import { AlertBanner } from "@/components/dashboard/AlertBanner";
import { Button } from "@/components/ui/button";

export default function PatientReportsPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Reports</h1>
      <div className="flex flex-wrap gap-3">
        <Button>Upload PDF</Button>
        <Button variant="secondary">Upload Image</Button>
      </div>
      <AlertBanner text="AI summaries and confidence labels are informational only and not final clinical diagnoses." />
      <div className="grid gap-4 md:grid-cols-3">
        {reports.map((report) => (
          <ReportSummaryCard key={report.id} report={report} />
        ))}
      </div>
    </section>
  );
}
