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
    <section ref={ref} className="relative py-24 lg:py-40 overflow-hidden">
      {/* Subtle radial glow behind the 10x */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 40%, oklch(0.75 0.16 65 / 0.04), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Label */}
        <Wrapper delay={0} isInView={isInView}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Funded Trader Program
          </p>
        </Wrapper>

        {/* The "10x" — the focal point. Breathes into existence with a slower, larger entrance. */}
        {prefersReducedMotion ? (
          <p
            className="mt-6 font-serif font-medium leading-none tracking-tight select-none"
            style={{
              fontSize: "clamp(5rem, 14vw, 12rem)",
              color: "oklch(0.75 0.16 65 / 0.12)",
            }}
            aria-hidden="true"
          >
            10x
          </p>
        ) : (
          <motion.p
            className="mt-6 font-serif font-medium leading-none tracking-tight select-none"
            style={{
              fontSize: "clamp(5rem, 14vw, 12rem)",
              color: "oklch(0.75 0.16 65 / 0.12)",
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.05 }}
            aria-hidden="true"
          >
            10x
          </motion.p>
        )}

        {/* Headline — overlaps the 10x slightly for depth */}
        <Wrapper delay={0.15} isInView={isInView}>
          <h1 className="-mt-8 lg:-mt-14 text-h1 font-serif text-text-primary max-w-2xl relative">
            Deploy 10x Your Capital.
          </h1>
        </Wrapper>

        {/* Body */}
        <Wrapper delay={0.25} isInView={isInView}>
          <p className="mt-6 text-body text-text-secondary max-w-lg leading-relaxed">
            Deposit $5,000. Trade with $50,000. Keep 100% of the profits.
          </p>
        </Wrapper>

        {/* Pills */}
        <Wrapper delay={0.4} isInView={isInView}>
          <div className="mt-10 flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span
                key={pill}
                className="px-3 py-1.5 border border-border/30 font-mono text-[11px] text-text-secondary transition-colors duration-300 hover:border-amber/40 hover:text-text-primary cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>
        </Wrapper>

        {/* CTA */}
        <Wrapper delay={0.55} isInView={isInView}>
          <div className="mt-10">
            <a
              href="https://lp.algoalpha.co/portfolio-accelerator"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center gap-3 bg-amber px-10 text-sm font-medium uppercase tracking-wide text-bg-deep transition-all hover:bg-amber-glow hover:gap-5 active:translate-y-px"
            >
              Book a Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Wrapper>

        {/* Disclaimer */}
        <Wrapper delay={0.65} isInView={isInView}>
          <p className="mt-6 text-xs italic text-text-muted">
            Past performance is not indicative of future results.
          </p>
        </Wrapper>
      </div>
    </section>
  );
}
