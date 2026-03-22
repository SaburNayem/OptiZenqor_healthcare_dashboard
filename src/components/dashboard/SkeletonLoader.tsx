export function SkeletonLoader() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-busy="true" aria-live="polite">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-28 animate-pulse rounded-2xl bg-slate-200/70" />
      ))}
    </div>
  );
}
