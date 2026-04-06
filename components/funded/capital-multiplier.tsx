"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import NumberFlow from "@number-flow/react";
import SectionEntrance from "@/components/layout/section-entrance";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CapitalMultiplier() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            HOW IT WORKS
          </p>

          {/* Bar — the amber deposit portion grows from 0→10% on scroll */}
          <div
            ref={ref}
            className="relative mt-10 flex h-20 lg:h-24 items-center rounded-lg overflow-hidden"
            style={{
              backgroundColor: "oklch(0.75 0.16 65 / 0.08)",
            }}
          >
            {/* Animated amber fill — grows from 0% to 10% width */}
            {prefersReducedMotion ? (
              <div
                className="absolute inset-y-0 left-0 rounded-l-lg"
                style={{
                  width: "10%",
                  backgroundColor: "oklch(0.75 0.16 65)",
                }}
              />
            ) : (
              <motion.div
                className="absolute inset-y-0 left-0 rounded-l-lg"
                style={{ backgroundColor: "oklch(0.75 0.16 65)" }}
                initial={{ width: "0%" }}
                animate={inView ? { width: "10%" } : {}}
                transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.2 }}
              />
            )}
            {/* 10x badge on the bar itself */}
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full font-mono text-[11px] font-semibold"
                style={{
                  backgroundColor: "oklch(0.75 0.16 65)",
                  color: "oklch(0.08 0.01 60)",
                  boxShadow: "0 0 20px oklch(0.75 0.16 65 / 0.3)",
                }}
              >
                10×
              </span>
            </div>

            {/* Left label — your deposit */}
            <div className="absolute left-3 lg:left-4 flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-wider text-bg-deep/60">
                Your Deposit
              </span>
              <span className="font-mono text-sm font-semibold text-bg-deep md:text-base">
                <span className="md:hidden">$5K</span>
                <span className="hidden md:inline">$5,000</span>
              </span>
            </div>

            {/* Right label — broker contribution */}
            <div className="absolute right-4 flex flex-col items-end">
              <span className="font-mono text-[10px] uppercase tracking-wider text-amber/40">
                Broker Contribution
              </span>
              <span className="font-mono text-sm font-medium text-amber/50">
                $45,000
              </span>
            </div>
          </div>

          {/* Number section */}
          <div className="mt-8">
            <p className="font-mono text-sm text-text-muted">Trading Power:</p>
            <NumberFlow
              value={inView ? 50000 : 5000}
              trend={1}
              format={{
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }}
              className="font-serif text-h2 text-amber"
            />
            <p className="mt-4 max-w-lg text-body text-text-secondary">
              Deposit as little as $5,000 — or significantly more — and the
              broker contributes 10× that amount in live trading capital. Algo
              Alpha provides the software; the broker provides the funded
              account. You keep 100% of the profits.
            </p>
            <p className="mt-2 text-small text-text-muted italic">
              $5,000 shown as an example. Deposit amounts vary by strategy and
              investor.
            </p>
          </div>
        </SectionEntrance>
      </div>
    </section>
  );
}
