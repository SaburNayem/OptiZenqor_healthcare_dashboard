import { Card, CardContent } from "@/components/ui/card";
import { ConfidenceBadge } from "@/components/dashboard/ConfidenceBadge";
import type { ReportSummary } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function ReportSummaryCard({ report }: { report: ReportSummary }) {
  const statusVariant = report.status === "urgent" ? "danger" : report.status === "pending" ? "warning" : "success";
  return (
    <Card>
      <CardContent className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-semibold text-[var(--text-strong)]">{report.patientName}</p>
            <p className="text-sm text-[var(--text-muted)]">{report.reportType}</p>
          </div>
          <Badge variant={statusVariant}>{report.status}</Badge>
        </div>
        <ConfidenceBadge value={report.confidence} />
        <p className="text-sm text-[var(--text-muted)]">Abnormal markers: {report.abnormalMarkers}</p>
        <p className="text-sm text-[var(--text-muted)]">{report.aiSummary}</p>
      </CardContent>
    </Card>
  );
}
