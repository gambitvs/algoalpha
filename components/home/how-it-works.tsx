"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import SectionEntrance from "@/components/layout/section-entrance";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Create Your Broker Account",
    description:
      "Choose your broker to connect our trading algorithm to the exchange.",
  },
  {
    number: "02",
    title: "Fund Trading Account",
    description: "Deposit funds into the exchange and turn on our algorithm.",
  },
  {
    number: "03",
    title: "Monitor and Manage",
    description:
      "Like any financial account, check it once a day to ensure things are running smoothly. Withdraw your profits at any time.",
  },
  {
    number: "04",
    title: "Withdraw at Any Time",
    description:
      "Since we do not manage your capital here at Algo Alpha, you work directly with your broker and accounts to withdraw funds. Simply pause the software and follow the steps with your broker to withdraw.",
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
      animate={isInView || prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: index * 0.15,
      }}
    >
      <div className="relative rounded-lg border border-border bg-bg-surface p-6 lg:p-8 transition-colors hover:border-amber/30">
        {/* Top row: number + line */}
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-amber/10 border border-amber/20">
            <span className="font-mono text-sm font-medium text-amber">
              {step.number}
            </span>
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-serif text-text-primary mb-2">
          {step.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <div className="mb-12">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              Getting Started
            </p>
            <h2 className="text-h2 font-serif text-text-primary max-w-2xl">
              How Simple is It To Set Up?
            </h2>
          </div>
        </SectionEntrance>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
