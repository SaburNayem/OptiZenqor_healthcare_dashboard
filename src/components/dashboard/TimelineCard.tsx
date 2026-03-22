import type { TimelineItem } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <Card>
      <CardContent className="space-y-2 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="font-semibold text-[var(--text-strong)]">{item.title}</p>
          <Badge variant="neutral">{item.category.replace("-", " ")}</Badge>
        </div>
        <p className="text-sm text-[var(--text-muted)]">{item.description}</p>
        <p className="text-xs uppercase tracking-wide text-[var(--text-muted)]">{item.createdAt}</p>
      </CardContent>
    </Card>
  );
}
