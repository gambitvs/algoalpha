"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

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

export default function OnboardingHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  const Wrapper = prefersReducedMotion
    ? ({ children }: { children: React.ReactNode }) => <>{children}</>
    : AnimatedBlock;

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Label */}
        <Wrapper delay={0} isInView={isInView}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Onboarding
          </p>
        </Wrapper>

        {/* Heading */}
        <Wrapper delay={0.1} isInView={isInView}>
          <h1 className="mt-4 text-h1 font-serif text-text-primary max-w-2xl">
            Welcome to Algo Alpha.
          </h1>
        </Wrapper>

        {/* Body */}
        <Wrapper delay={0.2} isInView={isInView}>
          <p className="mt-6 text-body text-text-secondary max-w-lg leading-relaxed">
            Watch this complete video to get setup and trading as fast as
            possible.
          </p>
        </Wrapper>
      </div>
    </section>
  );
}
