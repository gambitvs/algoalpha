"use client";

import { useRef } from "react";
import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import SectionEntrance from "@/components/layout/section-entrance";

const steps = [
  {
    label: "STEP 01",
    title: "Book a Call",
    description: "Schedule a private consultation with our team.",
  },
  {
    label: "STEP 02",
    title: "Sign Agreement",
    description: "Review and sign enrollment documentation.",
  },
  {
    label: "STEP 03",
    title: "Fund Your Account",
    description: "Deposit with the compatible broker.",
  },
  {
    label: "STEP 04",
    title: "Software Setup",
    description: "We configure the algorithm on your account.",
  },
  {
    label: "STEP 05",
    title: "Go Live",
    description: "Trading begins automatically.",
  },
];

const THRESHOLDS = [0, 0.25, 0.5, 0.75, 1.0] as const;

function DesktopTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.5"],
  });

  const scrollHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Per-step active states
  const active0 = useTransform(scrollYProgress, (v) => v >= THRESHOLDS[0]);
  const active1 = useTransform(scrollYProgress, (v) => v >= THRESHOLDS[1]);
  const active2 = useTransform(scrollYProgress, (v) => v >= THRESHOLDS[2]);
  const active3 = useTransform(scrollYProgress, (v) => v >= THRESHOLDS[3]);
  const active4 = useTransform(scrollYProgress, (v) => v >= THRESHOLDS[4]);
  const actives = [active0, active1, active2, active3, active4];

  // Per-step opacity
  const opacity0 = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const opacity1 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.9, 1.0], [0, 1]);
  const opacities = [opacity0, opacity1, opacity2, opacity3, opacity4];

  return (
    <div ref={containerRef} className="hidden lg:grid grid-cols-[48px_1fr]">
      {/* Line column */}
      <div className="relative">
        {/* Background track — thicker for visibility */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-border top-0" />
        {/* Foreground fill */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-amber top-0"
          style={{ height: scrollHeight }}
        />

        {/* Dots */}
        {steps.map((_, i) => (
          <TimelineDot
            key={i}
            index={i}
            total={steps.length}
            active={actives[i]}
          />
        ))}
      </div>

      {/* Content column */}
      <div>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={i < steps.length - 1 ? "pb-16" : ""}
            style={{ opacity: opacities[i] }}
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
              {step.label}
            </p>
            <h3 className="text-lg font-serif text-text-primary mt-1">
              {step.title}
            </h3>
            <p className="text-sm text-text-secondary mt-2 max-w-md leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TimelineDot({
  index,
  total,
  active,
}: {
  index: number;
  total: number;
  active: MotionValue<boolean>;
}) {
  const borderColor = useTransform(active, (v) =>
    v ? "oklch(0.75 0.16 65)" : "var(--color-border, oklch(0.25 0.01 60))",
  );
  const bgColor = useTransform(active, (v) =>
    v ? "oklch(0.75 0.16 65)" : "var(--color-bg-deep, oklch(0.12 0.01 60))",
  );

  // Position each dot proportionally
  const topPercent = total > 1 ? (index / (total - 1)) * 100 : 0;

  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 z-10"
      style={{
        top: `${topPercent}%`,
        borderColor,
        backgroundColor: bgColor,
      }}
    />
  );
}

function MobileTimeline() {
  return (
    <div className="lg:hidden space-y-6">
      {steps.map((step, i) => (
        <SectionEntrance key={i} delay={i * 100}>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-amber/10 border border-amber/20 font-mono text-xs text-amber flex items-center justify-center shrink-0">
              {i + 1}
            </div>
            <div>
              <h3 className="text-lg font-serif text-text-primary">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </SectionEntrance>
      ))}
    </div>
  );
}

export default function OnboardingTimeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            GET STARTED
          </p>
          <h2 className="text-h2 font-serif text-text-primary mb-10">
            Live in 30 Minutes
          </h2>
        </SectionEntrance>

        {prefersReducedMotion ? (
          /* Reduced motion: always show mobile layout with all steps visible */
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber/10 border border-amber/20 font-mono text-xs text-amber flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-serif text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <DesktopTimeline />
            <MobileTimeline />
          </>
        )}

        {/* Footer */}
        <div className="border-t border-border pt-8 mt-12">
          <p className="font-mono text-sm text-text-muted text-center">
            As little as 30 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
