"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import SectionEntrance from "@/components/layout/section-entrance";

const strategies = [
  {
    name: "Alpha Core",
    totalReturn: "510%*",
    capitalMin: "$3,000",
    avgReturn: "35.3%/mo*",
    yearsActive: "1.25 years",
    market: "FX",
    reason: "AUD, NZD and XAU core, 18 Currency Pairs",
  },
  {
    name: "Alpha Y",
    totalReturn: "280.12%*",
    capitalMin: "$2,000",
    avgReturn: "3.80%/mo*",
    yearsActive: "1.25 years",
    market: "FX",
    reason: "Conservative, diversified",
  },
  {
    name: "Alpha X",
    totalReturn: "823%*",
    capitalMin: "$10,000",
    avgReturn: "18.9%/mo*",
    yearsActive: "2.5 years",
    market: "FX + Gold",
    reason: "Conservative, diversified",
    highlight: true,
  },
];

const rows: { label: string; key: keyof (typeof strategies)[0] }[] = [
  { label: "Total Returns %", key: "totalReturn" },
  { label: "Capital Min", key: "capitalMin" },
  { label: "Avg Return", key: "avgReturn" },
  { label: "Years Active", key: "yearsActive" },
  { label: "Market", key: "market" },
  { label: "Reason for Returns", key: "reason" },
];

export default function FundedComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <SectionEntrance>
      <div ref={ref}>
        {/* ── Desktop: 3-column card layout ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {strategies.map((s, si) => (
            <div
              key={s.name}
              className={`relative rounded-xl p-6 lg:p-8 transition-all duration-300 ${
                s.highlight
                  ? "border-2 border-amber/40 bg-amber/5"
                  : "border border-amber/10 bg-white/[0.02]"
              }`}
              style={{
                transitionDelay: `${si * 100}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(16px)",
              }}
            >
              {/* Highlight badge */}
              {s.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber font-mono text-[9px] uppercase tracking-wider text-bg-deep font-medium">
                    Top Performer
                  </span>
                </div>
              )}

              {/* Strategy name */}
              <h3 className="font-serif text-2xl text-white text-center mb-6 mt-1">
                {s.name}
              </h3>

              {/* Total return — hero number */}
              <div className="text-center mb-8 pb-6 border-b border-amber/10">
                <p
                  className={`font-mono font-bold tracking-tight ${
                    s.highlight
                      ? "text-4xl lg:text-5xl text-amber"
                      : "text-3xl lg:text-4xl text-amber"
                  }`}
                >
                  {s.totalReturn}
                </p>
                <p className="font-mono text-[9px] uppercase tracking-wider text-amber/60 mt-2">
                  Total Returns
                </p>
              </div>

              {/* Stats list */}
              <div className="space-y-4">
                {rows.slice(1).map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-baseline gap-3"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-amber/80 shrink-0">
                      {row.label}
                    </span>
                    <span className="font-mono text-sm text-white font-medium text-right">
                      {String(s[row.key])}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-amber/10 text-center">
                <a
                  href="https://lp.algoalpha.co/portfolio-accelerator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                    s.highlight
                      ? "text-amber hover:text-amber-glow"
                      : "text-amber/60 hover:text-amber"
                  }`}
                >
                  Get Started
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h12M8 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile: stacked cards ── */}
        <div className="md:hidden space-y-4">
          {strategies.map((s) => (
            <div
              key={s.name}
              className={`rounded-xl p-5 ${
                s.highlight
                  ? "border-2 border-amber/40 bg-amber/5"
                  : "border border-amber/10 bg-white/[0.02]"
              }`}
            >
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-serif text-xl text-white">{s.name}</h3>
                <span className="font-mono text-2xl font-bold text-amber">
                  {s.totalReturn}
                </span>
              </div>
              <div className="space-y-2.5">
                {rows.slice(1).map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-baseline"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-amber/50">
                      {row.label}
                    </span>
                    <span className="font-mono text-sm text-white font-medium">
                      {String(s[row.key])}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionEntrance>
  );
}
