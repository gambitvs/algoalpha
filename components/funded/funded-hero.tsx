"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pills = ["No Prop Firm", "No Profit Splits", "No Lockups", "US Clients"];

function AnimatedBlock({
  children,
  delay,
  isInView,
}: {
  children: React.ReactNode;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function FundedHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  const Wrapper = prefersReducedMotion
    ? ({ children }: { children: React.ReactNode }) => <>{children}</>
    : AnimatedBlock;

  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Label */}
        <Wrapper delay={0} isInView={isInView}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            FUNDED TRADER PROGRAM
          </p>
        </Wrapper>

        {/* Headline */}
        <Wrapper delay={0.1} isInView={isInView}>
          <h1 className="text-display font-serif text-text-primary max-w-3xl">
            Deploy 10x Your Capital.
          </h1>
        </Wrapper>

        {/* Body */}
        <Wrapper delay={0.2} isInView={isInView}>
          <p className="mt-6 text-body text-text-secondary max-w-lg leading-relaxed">
            Deposit $5,000. Trade with $50,000. Keep 100% of the profits.
          </p>
        </Wrapper>

        {/* Pills */}
        <Wrapper delay={0.35} isInView={isInView}>
          <div className="mt-8 flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span
                key={pill}
                className="px-3 py-1.5 border border-border/30 font-mono text-[11px] text-text-secondary"
              >
                {pill}
              </span>
            ))}
          </div>
        </Wrapper>

        {/* CTA */}
        <Wrapper delay={0.5} isInView={isInView}>
          <div className="mt-8">
            <a
              href="https://lp.algoalpha.co/portfolio-accelerator"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-3 bg-amber px-8 text-sm font-medium uppercase tracking-wide text-bg-deep transition-colors hover:bg-amber-glow"
            >
              BOOK A CALL{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Wrapper>

        {/* Disclaimer */}
        <Wrapper delay={0.6} isInView={isInView}>
          <p className="mt-6 text-xs italic text-text-muted">
            Past performance is not indicative of future results.
          </p>
        </Wrapper>
      </div>
    </section>
  );
}
