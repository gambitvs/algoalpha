"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const pills = ["No Prop Firm", "No Profit Splits", "No Lockups", "US Clients"];

const YOUTUBE_ID = "ds7NboBXslM";

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

function VideoEmbed() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
          title="Funded Trader Program Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative aspect-video w-full rounded-lg overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
    >
      {/* Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
        alt="Watch: Funded Trader Program overview"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber/90 transition-transform duration-300 group-hover:scale-110">
          <Play className="w-6 h-6 text-bg-deep fill-bg-deep ml-1" />
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <p className="font-mono text-[10px] uppercase tracking-wider text-white/70">
          Watch Overview
        </p>
      </div>
    </button>
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_45%] gap-12 lg:gap-16 items-center">
          {/* Left — text content */}
          <div>
            {/* Label */}
            <Wrapper delay={0} isInView={isInView}>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                Funded Trader Program
              </p>
            </Wrapper>

            {/* The "10x" watermark */}
            {prefersReducedMotion ? (
              <p
                className="mt-6 font-serif font-medium leading-none tracking-tight select-none"
                style={{
                  fontSize: "clamp(4rem, 12vw, 9rem)",
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
                  fontSize: "clamp(4rem, 12vw, 9rem)",
                  color: "oklch(0.75 0.16 65 / 0.12)",
                }}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 1.2,
                  ease: EASE_OUT_EXPO,
                  delay: 0.05,
                }}
                aria-hidden="true"
              >
                10x
              </motion.p>
            )}

            {/* Headline */}
            <Wrapper delay={0.15} isInView={isInView}>
              <h1 className="-mt-6 lg:-mt-10 text-h1 font-serif text-text-primary max-w-xl relative">
                Less Capital Deployed, More Return Potential.
              </h1>
            </Wrapper>

            {/* Body */}
            <Wrapper delay={0.25} isInView={isInView}>
              <p className="mt-6 text-body text-text-secondary max-w-lg leading-relaxed">
                Algo Alpha provides the trading software — we connect you with a
                compatible broker that contributes 10x your deposit. Pair the
                funded account with our algorithms and keep 100% of the profits.
              </p>
            </Wrapper>

            {/* Pills */}
            <Wrapper delay={0.4} isInView={isInView}>
              <div className="mt-8 flex flex-wrap gap-2">
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
              <div className="mt-8">
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
              <p className="mt-4 text-xs italic text-text-muted">
                Past performance is not indicative of future results.
              </p>
            </Wrapper>
          </div>

          {/* Right — video */}
          <Wrapper delay={0.3} isInView={isInView}>
            <div>
              <VideoEmbed />
            </div>
          </Wrapper>
        </div>
      </div>
    </section>
  );
}
