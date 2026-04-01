"use client";

import SectionEntrance from "@/components/layout/section-entrance";
import StatCounter from "@/components/showcase/stat-counter";

const strategies = [
  {
    name: "Alpha Core",
    totalReturn: 510,
    capitalMin: "$3,000",
    avgReturn: "35.3%/mo*",
    yearsActive: "1.25 years",
    market: "FX",
    reason: "AUD, NZD and XAU core, 18 Currency Pairs",
  },
  {
    name: "Alpha Y",
    totalReturn: 280.12,
    capitalMin: "$2,000",
    avgReturn: "3.80%/mo*",
    yearsActive: "1.25 years",
    market: "FX",
    reason: "Conservative, diversified",
  },
  {
    name: "Alpha X",
    totalReturn: 823,
    capitalMin: "$10,000",
    avgReturn: "18.9%/mo*",
    yearsActive: "2.5 years",
    market: "FX + Gold",
    reason: "Conservative, diversified",
    highest: true,
  },
];

const rows = [
  { label: "Capital Min", key: "capitalMin" as const },
  { label: "Avg Return", key: "avgReturn" as const },
  { label: "Years Active", key: "yearsActive" as const },
  { label: "Market", key: "market" as const },
  { label: "Reason for Returns", key: "reason" as const },
];

export default function FundedComparisonTable() {
  return (
    <SectionEntrance>
      {/* Desktop table */}
      <div className="hidden sm:block rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-bg-elevated">
              <th className="p-4 text-left font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted w-1/4" />
              {strategies.map((s) => (
                <th
                  key={s.name}
                  className="p-4 text-center font-serif text-h3 text-text-primary"
                >
                  {s.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Total Returns row — animated */}
            <tr className="border-t border-border transition-colors hover:bg-bg-elevated/30">
              <td className="p-4 font-mono text-[11px] uppercase tracking-[0.15em] text-amber">
                Total Returns %
              </td>
              {strategies.map((s) => (
                <td key={s.name} className="p-4 text-center">
                  <StatCounter
                    value={s.totalReturn}
                    suffix="%*"
                    format="decimal"
                    label=""
                    large={s.highest}
                  />
                </td>
              ))}
            </tr>
            {/* Other rows */}
            {rows.map((row) => (
              <tr
                key={row.label}
                className="border-t border-border transition-colors hover:bg-bg-elevated/30"
              >
                <td className="p-4 font-mono text-[11px] uppercase tracking-[0.15em] text-amber">
                  {row.label}
                </td>
                {strategies.map((s) => (
                  <td
                    key={s.name}
                    className="p-4 text-center font-mono text-sm text-text-primary"
                  >
                    {s[row.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card stack */}
      <div className="sm:hidden space-y-4">
        {strategies.map((s) => (
          <div
            key={s.name}
            className="rounded-lg border border-border bg-bg-surface p-5"
          >
            <h3 className="text-h3 font-serif text-text-primary mb-4">
              {s.name}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="font-mono text-[10px] uppercase tracking-wider text-amber">
                  Total Return
                </span>
                <span className="font-mono text-lg font-semibold text-amber">
                  {s.totalReturn}%*
                </span>
              </div>
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between items-baseline"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    {row.label}
                  </span>
                  <span className="font-mono text-sm text-text-primary">
                    {s[row.key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionEntrance>
  );
}
