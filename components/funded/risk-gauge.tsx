"use client";

import { Info } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

const bullets = [
  "100% of upside is yours",
  "Max 10% drawdown on total balance",
  "Only 3 strategies have qualified",
  "Not a prop firm \u2014 broker contribution program",
];

export default function RiskGauge() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            RISK TRANSPARENCY
          </p>

          <h2 className="mt-4 text-h2 font-serif text-text-primary">
            Understand the Rules
          </h2>

          {/* Gauge — authoritative, visible */}
          <div className="relative mt-10">
            {/* Labels above the gauge */}
            <div className="flex justify-between mb-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                Safe Zone
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                Threshold
              </span>
            </div>

            <div
              className="h-5 w-full rounded-full relative"
              style={{
                background:
                  "linear-gradient(to right, oklch(0.65 0.08 145 / 0.15) 90%, oklch(0.65 0.14 25 / 0.15) 90%)",
              }}
            />

            {/* Marker at 90% — prominent */}
            <div
              className="absolute bottom-0 flex flex-col items-center"
              style={{ left: "90%", transform: "translateX(-50%)" }}
            >
              <div className="w-[2px] h-8 bg-amber" />
              <span className="mt-1 font-mono text-xs font-medium text-amber">
                10%
              </span>
            </div>
          </div>

          {/* 2x2 grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bullets.map((text) => (
              <div key={text} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber/40 shrink-0" />
                <span className="text-sm text-text-secondary">{text}</span>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="mt-8 rounded-lg bg-bg-surface border border-border p-4 flex items-start gap-3">
            <Info className="w-4 h-4 text-amber shrink-0 mt-0.5" />
            <p className="font-mono text-xs text-text-muted">
              If drawdown exceeds 10% of total balance, your account equity
              resets. You can open a new account at any time.
            </p>
          </div>
        </SectionEntrance>
      </div>
    </section>
  );
}
