import { Inbox } from "lucide-react";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface-secondary)] p-10 text-center">
      <Inbox className="mx-auto mb-3 h-8 w-8 text-[var(--text-muted)]" />
      <p className="text-lg font-semibold text-[var(--text-strong)]">{title}</p>
      <p className="mt-1 text-sm text-[var(--text-muted)]">{description}</p>
    </div>
  );
}
