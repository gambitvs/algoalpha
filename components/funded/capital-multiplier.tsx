"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import NumberFlow from "@number-flow/react";
import SectionEntrance from "@/components/layout/section-entrance";

export default function CapitalMultiplier() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            HOW IT WORKS
          </p>

          {/* Bar */}
          <div
            ref={ref}
            className="relative mt-10 flex h-12 items-center rounded-lg"
            style={{
              background:
                "linear-gradient(to right, oklch(0.75 0.16 65) 10%, oklch(0.75 0.16 65 / 0.10) 10%)",
            }}
          >
            {/* Left label — short on mobile, full on md+ */}
            <span className="absolute left-4 text-sm font-medium text-white md:hidden">
              $5K
            </span>
            <span className="absolute left-4 hidden text-sm font-medium text-white md:block">
              $5,000 Your Deposit
            </span>

            {/* Right label */}
            <span className="absolute right-4 text-sm font-medium text-amber/50">
              $45,000 Broker Contribution
            </span>
          </div>

          {/* Number section */}
          <div className="mt-8">
            <p className="font-mono text-sm text-text-muted">Trading Power:</p>
            <NumberFlow
              value={inView ? 50000 : 5000}
              format={{
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }}
              className="font-serif text-h2 text-amber"
            />
            <p className="mt-4 max-w-lg text-body text-text-secondary">
              Put down just 10% and trade with the full amount. Your $5,000
              deposit unlocks $50,000 in live trading capital — a 10× multiplier
              that lets you capture larger moves without risking more of your
              own money.
            </p>
          </div>
        </SectionEntrance>
      </div>
    </section>
  );
}
