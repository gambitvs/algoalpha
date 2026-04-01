"use client";

interface MonthlyHeatmapProps {
  monthlyReturns: { month: string; return: string }[];
}

export default function MonthlyHeatmap({
  monthlyReturns,
}: MonthlyHeatmapProps) {
  if (!monthlyReturns || monthlyReturns.length === 0) return null;

  return (
    <div>
      <p className="mb-5 pb-3 border-b border-border font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
        Monthly Returns
      </p>
      <div className="flex flex-wrap gap-2">
        {monthlyReturns.map((m) => {
          const isPositive = !m.return.startsWith("-") && m.return !== "0%";
          return (
            <div
              key={m.month}
              className="rounded-sm px-4 py-3 font-mono text-sm transition-colors"
              style={{
                background: isPositive
                  ? "oklch(0.7 0.18 145 / 0.08)"
                  : "oklch(0.65 0.14 25 / 0.08)",
                border: `1px solid ${
                  isPositive
                    ? "oklch(0.7 0.18 145 / 0.15)"
                    : "oklch(0.65 0.14 25 / 0.15)"
                }`,
                color: isPositive
                  ? "oklch(0.7 0.18 145)"
                  : "oklch(0.65 0.14 25)",
              }}
            >
              <span className="block text-[9px] uppercase tracking-wider text-text-muted mb-1">
                {m.month}
              </span>
              {m.return}
            </div>
          );
        })}
      </div>
    </div>
  );
}
