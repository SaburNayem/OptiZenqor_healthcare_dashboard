import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function MetricCard({ label, value, delta }: { label: string; value: string; delta?: string }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-3xl font-bold">{value}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[var(--text-muted)]">{delta ? `Change: ${delta}` : "No delta available"}</p>
      </CardContent>
    </Card>
  );
}
