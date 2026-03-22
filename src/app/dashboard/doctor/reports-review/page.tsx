import { reports } from "@/lib/mock-data";
import { ReportSummaryCard } from "@/components/dashboard/ReportSummaryCard";
import { Input } from "@/components/ui/input";

export default function DoctorReportsReviewPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Reports Review</h1>
      <Input placeholder="Add doctor comments" />
      <div className="grid gap-4 md:grid-cols-3">
        {reports.map((report) => (
          <ReportSummaryCard key={report.id} report={report} />
        ))}
      </div>
    </section>
  );
}
