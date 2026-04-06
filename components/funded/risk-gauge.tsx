"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Info } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const bullets = [
  "100% of upside is yours",
  "Max 10% drawdown on total balance",
  "Only 3 strategies have qualified",
  "Not a prop firm \u2014 broker contribution program",
];

export default function RiskGauge() {
  const gaugeRef = useRef<HTMLDivElement>(null);
  const gaugeInView = useInView(gaugeRef, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();

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

          {/* Gauge — animated fill */}
          <div ref={gaugeRef} className="relative mt-10">
            {/* Labels above the gauge */}
            <div className="flex justify-between mb-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                Safe Zone
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                Threshold
              </span>
            </div>

            {/* Track background */}
            <div
              className="h-5 w-full rounded-full relative overflow-hidden"
              style={{ backgroundColor: "oklch(0.65 0.14 25 / 0.08)" }}
            >
              {/* Safe zone fill — animates to 90% width */}
              {prefersReducedMotion ? (
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: "90%",
                    backgroundColor: "oklch(0.65 0.08 145 / 0.15)",
                  }}
                />
              ) : (
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ backgroundColor: "oklch(0.65 0.08 145 / 0.15)" }}
                  initial={{ width: "0%" }}
                  animate={gaugeInView ? { width: "90%" } : {}}
                  transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 0.1 }}
                />
              )}
            </div>

            {/* Marker at 90% — fades in after gauge fills */}
            {prefersReducedMotion ? (
              <div
                className="absolute bottom-0 flex flex-col items-center"
                style={{ left: "90%", transform: "translateX(-50%)" }}
              >
                <div className="w-[2px] h-8 bg-amber" />
                <span className="mt-1 font-mono text-xs font-medium text-amber">
                  10%
                </span>
              </div>
            ) : (
              <motion.div
                className="absolute bottom-0 flex flex-col items-center"
                style={{ left: "90%", x: "-50%" }}
                initial={{ opacity: 0 }}
                animate={gaugeInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO, delay: 0.8 }}
              >
                <div className="w-[2px] h-8 bg-amber" />
                <span className="mt-1 font-mono text-xs font-medium text-amber">
                  10%
                </span>
              </motion.div>
            )}
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
