"use client";

import Link from "next/link";
import HeroChart from "@/components/home/hero-chart";
import { Waves } from "@/components/ui/wave-background";

function MotionFade({
  children,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center overflow-hidden">
      {/* Wave background — sits behind everything */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Waves
          strokeColor="oklch(0.75 0.16 65)"
          backgroundColor="transparent"
          pointerSize={0.3}
        />
      </div>

      {/* Gradient overlay to fade waves at edges */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bg-deep/50 via-transparent to-bg-deep" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
          {/* Left column - Copy */}
          <div className="flex flex-col">
            <MotionFade delay={0}>
              <span className="text-micro font-mono uppercase tracking-widest text-amber">
                A New Era of Strategy for Markets
              </span>
            </MotionFade>

            <MotionFade delay={100} className="mt-6">
              <h1 className="text-h1 font-serif">
                Invest With <span className="text-amber">Intelligence,</span>
              </h1>
            </MotionFade>

            <MotionFade delay={200}>
              <h1 className="text-h1 font-serif">
                Operate with <span className="text-amber">Discipline.</span>
              </h1>
            </MotionFade>

            <MotionFade delay={400} className="mt-6">
              <p className="max-w-[540px] text-body text-text-primary">
                Algo Alpha&apos;s market-agnostic trading systems reduce
                emotion, standardize execution, and seek consistent performance
                across forex, crypto, and metals.
              </p>
            </MotionFade>

            <MotionFade delay={550} className="mt-8">
              <a
                href="/join/apply"
                className="inline-flex h-12 w-fit items-center justify-center bg-amber px-8 text-sm font-medium uppercase tracking-wide text-bg-deep transition-colors hover:bg-amber-glow"
              >
                Request a Consultation
              </a>
            </MotionFade>

            <MotionFade delay={650} className="mt-4">
              <p className="text-xs italic text-text-muted">
                Risks apply, past performance doesn&apos;t guarantee future
                results.
              </p>
            </MotionFade>
          </div>

          {/* Right column - Chart */}
          <MotionFade delay={300}>
            <HeroChart />
          </MotionFade>
        </div>
      </div>
    </section>
  );
}
