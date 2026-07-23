/**
 * SectionSkeleton — pulse placeholder shown while a dynamically imported
 * section is loading. Matches the approximate height of a typical section.
 */
export function SectionSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full animate-pulse"
      aria-hidden="true"
    >
      {/* Section label placeholder */}
      <div className="h-3 w-28 rounded-full bg-muted mb-4" />
      {/* Section title placeholder */}
      <div className="h-8 w-64 rounded-full bg-muted mb-12" />

      {/* Card grid placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border/40 p-6 space-y-3">
            <div className="h-4 w-3/4 rounded bg-muted" />
            <div className="h-3 w-full rounded bg-muted/60" />
            <div className="h-3 w-5/6 rounded bg-muted/60" />
            <div className="h-3 w-2/3 rounded bg-muted/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
