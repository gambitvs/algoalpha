"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const leftItems = [
  "Pay for challenges",
  "10-30% profit splits",
  "Monthly platform fees",
  "Capital lockup periods",
  "Simulated accounts",
];

const rightItems = [
  "No challenges required",
  "Keep 100% of profits",
  "No recurring fees",
  "Withdraw anytime",
  "Real broker capital",
];

function StaggerItem({
  children,
  index,
  baseDelay,
  isInView,
  reduced,
}: {
  children: React.ReactNode;
  index: number;
  baseDelay: number;
  isInView: boolean;
  reduced: boolean;
}) {
  if (reduced) return <div>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: EASE_OUT_EXPO,
        delay: baseDelay + index * 0.15,
      }}
    >
      {children}
    </motion.div>
  );
}

function StaggerItemRight({
  children,
  index,
  baseDelay,
  isInView,
  reduced,
}: {
  children: React.ReactNode;
  index: number;
  baseDelay: number;
  isInView: boolean;
  reduced: boolean;
}) {
  if (reduced) return <div>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: EASE_OUT_EXPO,
        delay: baseDelay + index * 0.15,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function PropFirmComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const reduced = !!prefersReducedMotion;

  // Left items finish at: 0 + 4*0.15 = 0.6s
  // Right items start 200ms after last left: 0.6 + 0.2 = 0.8s
  const leftBaseDelay = 0;
  const rightBaseDelay = leftItems.length * 0.15 + 0.2;

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
          NOT A PROP FIRM
        </p>

        <h2 className="mt-4 text-h2 font-serif text-text-primary">
          What Makes This Different
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
          {/* Left column — Traditional */}
          <div className="md:border-r border-border md:pr-12">
            <p className="font-mono text-sm text-text-muted uppercase tracking-wider mb-6">
              Traditional Prop Firm
            </p>
            <div className="space-y-4">
              {leftItems.map((item, i) => (
                <StaggerItem
                  key={item}
                  index={i}
                  baseDelay={leftBaseDelay}
                  isInView={isInView}
                  reduced={reduced}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="text-lg font-medium leading-6 shrink-0"
                      style={{ color: "oklch(0.65 0.14 25)" }}
                    >
                      &times;
                    </span>
                    <span className="text-sm text-text-muted line-through">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>

          {/* Mobile divider */}
          <div className="md:hidden border-t border-border" />

          {/* Right column — Algo Alpha */}
          <div className="md:pl-12">
            <p className="font-mono text-sm text-amber uppercase tracking-wider mb-6">
              Algo Alpha Funded
            </p>
            <div className="space-y-4">
              {rightItems.map((item, i) => (
                <StaggerItemRight
                  key={item}
                  index={i}
                  baseDelay={rightBaseDelay}
                  isInView={isInView}
                  reduced={reduced}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg font-medium leading-6 text-amber shrink-0">
                      &#10003;
                    </span>
                    <span className="text-sm text-text-primary">{item}</span>
                  </div>
                </StaggerItemRight>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
