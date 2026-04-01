"use client";

import { ArrowRight, Clock } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

interface Strategy {
  name: string;
  status: "verified" | "in-progress";
  href: string | null;
}

const strategies: Strategy[] = [
  { name: "Intelligent Portfolio", status: "verified", href: "#" },
  { name: "Alpha Trader", status: "verified", href: "#" },
  { name: "Alpha X", status: "verified", href: "#" },
  { name: "Crypto Alpha", status: "verified", href: "#" },
  { name: "Alpha Core", status: "verified", href: "#" },
  { name: "Gold Alpha", status: "in-progress", href: null },
];

export default function CPATable() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Verification Status
          </p>
          <h2 className="text-h3 font-serif text-text-primary mb-10">
            Strategy Verification Overview
          </h2>
        </SectionEntrance>

        <SectionEntrance delay={100}>
          <div className="rounded-lg border border-border overflow-hidden">
            {/* Header */}
            <div className="bg-bg-elevated grid grid-cols-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted p-4">
                Strategy Name
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted p-4 text-right">
                Verification
              </div>
            </div>

            {/* Rows */}
            {strategies.map((strategy) => (
              <div
                key={strategy.name}
                className="grid grid-cols-2 border-t border-border transition-colors hover:bg-bg-elevated/30"
              >
                <div className="font-mono text-sm text-text-primary p-4">
                  {strategy.name}
                </div>
                <div className="p-4 flex items-center justify-end">
                  {strategy.status === "verified" && strategy.href ? (
                    <a
                      href={strategy.href}
                      className="inline-flex items-center gap-2 font-mono text-sm text-amber hover:text-amber-glow transition-colors group"
                    >
                      View CPA Letter
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-amber/10 border border-amber/20 font-mono text-[10px] uppercase tracking-wider text-amber/60">
                      <Clock className="w-3 h-3" />
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionEntrance>
      </div>
    </section>
  );
}
