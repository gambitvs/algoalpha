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
          {/* Left column — Traditional (diminished, loses) */}
          <div className="md:border-r border-border md:pr-12 opacity-70">
            <p className="font-mono text-sm text-text-muted uppercase tracking-wider mb-8">
              Traditional Prop Firm
            </p>
            <div className="space-y-5">
              {leftItems.map((item, i) => (
                <StaggerItem
                  key={item}
                  index={i}
                  baseDelay={leftBaseDelay}
                  isInView={isInView}
                  reduced={reduced}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full shrink-0"
                      style={{
                        backgroundColor: "oklch(0.65 0.14 25 / 0.10)",
                      }}
                    >
                      <span
                        className="text-sm font-medium"
                        style={{ color: "oklch(0.65 0.14 25)" }}
                      >
                        &times;
                      </span>
                    </span>
                    <span className="text-sm text-text-muted line-through decoration-text-muted/30">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>

          {/* Mobile divider */}
          <div className="md:hidden border-t border-border" />

          {/* Right column — Algo Alpha (elevated, wins) */}
          <div className="md:pl-12 md:-my-4 md:py-4 rounded-lg">
            <p className="font-mono text-sm text-amber uppercase tracking-wider mb-8">
              Algo Alpha Funded
            </p>
            <div className="space-y-5">
              {rightItems.map((item, i) => (
                <StaggerItemRight
                  key={item}
                  index={i}
                  baseDelay={rightBaseDelay}
                  isInView={isInView}
                  reduced={reduced}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber/10 shrink-0">
                      <span className="text-sm font-medium text-amber">
                        &#10003;
                      </span>
                    </span>
                    <span className="text-body text-text-primary font-medium">
                      {item}
                    </span>
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
