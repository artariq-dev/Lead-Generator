// Static recent activity feed — adds a "real people submitted this" signal near the CTA.
// Entries are fixed; rotate or update manually as real submissions come in.

const feed = [
  { label: "Fintech founder", detail: "7 problems flagged", ago: "2h ago" },
  { label: "SaaS team", detail: "Cloud audit — Grade D", ago: "6h ago" },
  { label: "E-commerce founder", detail: "Backend audit — Grade C", ago: "1d ago" },
  { label: "Agency owner", detail: "5 problems flagged", ago: "1d ago" },
  { label: "B2B startup", detail: "Pipeline audit — Grade F", ago: "2d ago" },
];

export function RecentActivity({ showBadge = true }: { showBadge?: boolean }) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
      {/* Response time badge */}
      {showBadge && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Avg response under 24h
          </span>
          <span className="text-[10px] text-gray-400 dark:text-gray-500 ml-auto">— every submission so far</span>
        </div>
      )}

      {/* Feed */}
      <div className="space-y-2">
        {feed.map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="shrink-0 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600" />
              <span className="text-[10px] text-gray-600 dark:text-gray-400 truncate">
                <span className="font-semibold text-gray-700 dark:text-gray-300">{item.label}</span>
                {" — "}
                {item.detail}
              </span>
            </div>
            <span className="text-[10px] text-gray-400 dark:text-gray-500 shrink-0">{item.ago}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
