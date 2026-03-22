import type { NotificationItem } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function NotificationCard({ item }: { item: NotificationItem }) {
  const variant = item.priority === "HIGH" ? "danger" : item.priority === "MEDIUM" ? "warning" : "success";
  return (
    <Card>
      <CardContent className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-semibold text-[var(--text-strong)]">{item.title}</p>
            <p className="text-sm text-[var(--text-muted)]">{item.body}</p>
          </div>
          <Badge variant={variant}>{item.priority}</Badge>
        </div>
        <p className="text-xs uppercase tracking-wide text-[var(--text-muted)]">{item.category} • {item.createdAt}</p>
      </CardContent>
    </Card>
  );
}
