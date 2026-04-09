"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Crown, TrendingUp, ArrowRight } from "lucide-react";

const strategies = [
  {
    name: "Alpha Core",
    totalReturn: "48%",
    capitalMin: "$30,000",
    avgReturn: "1.84%/mo",
    yearsActive: "1.25 yrs",
    market: "FX",
    reason: "AUD, NZD & XAU core — 14 pairs",
    color: "oklch(0.70 0.13 170)",
  },
  {
    name: "Alpha X",
    totalReturn: "88%",
    capitalMin: "$50,000",
    avgReturn: "2.48%/mo",
    yearsActive: "2.5 yrs",
    market: "FX + Gold",
    reason: "Conservative, diversified — 21 pairs",
    color: "oklch(0.75 0.16 65)",
    featured: true,
  },
];

export default function FundedComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-3xl mx-auto">
        {strategies.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative ${
              s.featured ? "md:-my-4 md:z-10 md:scale-[1.02]" : ""
            }`}
          >
            <div
              className={`h-full flex flex-col rounded-2xl ${
                s.featured ? "shadow-[0_0_60px_oklch(0.75_0.16_65/0.15)]" : ""
              }`}
              style={{
                background: s.featured
                  ? `linear-gradient(170deg, oklch(0.18 0.04 60) 0%, oklch(0.12 0.025 55) 50%, oklch(0.09 0.015 50) 100%)`
                  : `linear-gradient(170deg, oklch(0.16 0.015 ${60 + i * 20}) 0%, oklch(0.12 0.01 60) 100%)`,
                border: s.featured
                  ? `1px solid oklch(0.75 0.16 65 / 0.3)`
                  : `1px solid oklch(0.25 0.01 60)`,
                boxShadow: s.featured
                  ? "0 0 60px oklch(0.75 0.16 65 / 0.1), inset 0 1px 0 oklch(1 0 0 / 0.04)"
                  : "inset 0 1px 0 oklch(1 0 0 / 0.03)",
              }}
            >
              {/* Featured crown */}
              {s.featured && (
                <div
                  className="absolute -top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
                  }}
                />
              )}

              <div className="p-8 lg:p-10 flex flex-col flex-1">
                {/* Header */}
                <div className="text-center mb-8">
                  {s.featured && (
                    <div
                      className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full"
                      style={{
                        background: "oklch(0.75 0.16 65 / 0.15)",
                        border: "1px solid oklch(0.75 0.16 65 / 0.3)",
                      }}
                    >
                      <Crown
                        className="w-3 h-3"
                        style={{ color: "oklch(0.75 0.16 65)" }}
                      />
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest font-medium"
                        style={{ color: "oklch(0.75 0.16 65)" }}
                      >
                        Top Performer
                      </span>
                    </div>
                  )}

                  <h3
                    className="font-serif text-2xl mb-1"
                    style={{ color: "oklch(0.95 0.005 80)" }}
                  >
                    {s.name}
                  </h3>

                  <p
                    className="font-mono text-[10px] uppercase tracking-wider"
                    style={{ color: "oklch(0.45 0.02 60)" }}
                  >
                    Funded Trader Software
                  </p>
                </div>

                {/* Hero number */}
                <div className="text-center mb-8">
                  <div
                    className={`font-mono font-bold tracking-tight leading-none ${
                      s.featured
                        ? "text-6xl lg:text-7xl"
                        : "text-5xl lg:text-6xl"
                    }`}
                    style={{ color: s.color }}
                  >
                    {s.totalReturn}
                    <span className="text-[0.4em] align-super opacity-60">
                      *
                    </span>
                  </div>
                  <p
                    className="font-mono text-[9px] uppercase tracking-widest mt-3"
                    style={{ color: "oklch(0.5 0.02 60)" }}
                  >
                    Total Returns
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="h-px mx-auto w-16 mb-8"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
                  }}
                />

                {/* Stats */}
                <div className="space-y-5 flex-1">
                  {[
                    { label: "Capital Minimum", value: s.capitalMin },
                    { label: "Avg Monthly Return", value: s.avgReturn },
                    { label: "Years Active", value: s.yearsActive },
                    { label: "Market", value: s.market },
                    { label: "Strategy", value: s.reason },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between items-start gap-4"
                    >
                      <span
                        className="font-mono text-[10px] uppercase tracking-wider shrink-0"
                        style={{ color: "oklch(0.5 0.02 60)" }}
                      >
                        {row.label}
                      </span>
                      <span
                        className="font-mono text-sm text-right font-medium"
                        style={{ color: "oklch(0.88 0.01 80)" }}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="mt-8 pt-6 text-center"
                  style={{ borderTop: `1px solid oklch(0.2 0.01 60)` }}
                >
                  <a
                    href="/apply"
                    className={`inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider transition-all duration-300 ${
                      s.featured ? "w-full py-3 rounded-lg font-medium" : "py-2"
                    }`}
                    style={
                      s.featured
                        ? {
                            background: s.color,
                            color: "oklch(0.08 0.01 60)",
                          }
                        : { color: s.color }
                    }
                    onMouseEnter={(e) => {
                      if (!s.featured) e.currentTarget.style.opacity = "0.7";
                    }}
                    onMouseLeave={(e) => {
                      if (!s.featured) e.currentTarget.style.opacity = "1";
                    }}
                  >
                    {s.featured ? "Get Started" : "Learn More"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Disclaimer */}
      <p
        className="mt-4 font-mono text-[10px] italic text-center"
        style={{ color: "oklch(0.4 0.01 60)" }}
      >
        *Performance from inception to March 2026. Past performance ≠ future
        results.
      </p>
    </div>
  );
}
