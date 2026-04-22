"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, Check, Volume2 } from "lucide-react";

import TrustpilotReviews from "@/components/shared/trustpilot-placeholder";
import PageDisclaimer from "@/components/shared/page-disclaimer";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const VSL_VIDEO_ID = "ds7NboBXslM";

// ─────────────────────────────────────────────────────────────────────────────
// Page-level grain overlay — fixed, pointer-events-none, very low opacity
// ─────────────────────────────────────────────────────────────────────────────

function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.9 0 0 0 0 0.75 0 0 0 0 0.4 0 0 0 1 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Header
// ─────────────────────────────────────────────────────────────────────────────

function FunnelHeader() {
  return (
    <header className="relative z-10 border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-text-muted transition-colors hover:text-text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>
        <Image
          src="/images/logo-header.png"
          alt="Algo Alpha"
          width={120}
          height={30}
          className="header-logo-dark h-auto w-24 opacity-70"
        />
        <Image
          src="/images/logo-header-dark.png"
          alt="Algo Alpha"
          width={120}
          height={30}
          className="header-logo-light h-auto w-24 opacity-70"
        />
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// VSL Video
// ─────────────────────────────────────────────────────────────────────────────

function VSLVideo() {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${VSL_VIDEO_ID}/maxresdefault.jpg`;

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${VSL_VIDEO_ID}?autoplay=1&rel=0`}
          title="Gold Alpha — A message from the founder"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-md border border-border bg-bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
      aria-label="Play the Gold Alpha presentation"
    >
      {/* Inner refraction ring */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-white/[0.04]"
      />

      {/* Thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnail}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30" />

      {/* Play — rounded-square with concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="relative flex h-20 w-20 items-center justify-center">
          {/* Outer animated ring */}
          <span className="absolute inset-0 rounded-full border border-amber/40 transition-transform duration-500 group-hover:scale-[1.35]" />
          <span className="absolute inset-0 rounded-full border border-amber/20 transition-transform duration-700 group-hover:scale-[1.7]" />
          {/* Core */}
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-amber transition-all duration-300 group-hover:bg-amber-glow">
            <Play
              className="ml-0.5 h-5 w-5 text-bg-deep"
              fill="currentColor"
              strokeWidth={0}
            />
          </span>
        </span>
      </div>

      {/* Top meta — small "LIVE" indicator */}
      <div className="absolute left-0 top-0 z-10 flex items-center gap-2 p-5">
        <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-amber shadow-[0_0_8px_theme(colors.amber)]" />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/85">
          Presentation · 12 min
        </span>
      </div>

      {/* Bottom strip */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber/90">
            Founder note
          </p>
          <p className="mt-1 font-serif text-xl leading-tight text-white text-balance lg:text-2xl">
            Why we built Gold Alpha, and who it&apos;s for.
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 bg-black/35 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/90 backdrop-blur">
          <Volume2 className="h-3 w-3" />
          Enable sound
        </span>
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FadeIn wrapper
// ─────────────────────────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero — editorial, left-aligned (breaks the centered symmetry)
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 lg:pt-20 lg:pb-28">
      {/* Off-center radial glow — breaks the symmetry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 85% 20%, oklch(0.75 0.16 65 / 0.09), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Eyebrow sits aligned left, not centered */}
        <FadeIn delay={0}>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-amber">
              <span className="h-1 w-1 rounded-full bg-amber" />
              For high-net-worth investors
            </span>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-border via-border/40 to-transparent sm:block" />
          </div>
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* LEFT — copy */}
          <div className="flex flex-col">
            <FadeIn delay={0.15}>
              <h1
                className="font-serif leading-[1.02] tracking-tight text-text-primary text-balance"
                style={{ fontSize: "clamp(2.75rem, 5.2vw, 4.5rem)" }}
              >
                Install the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-amber">Gold Alpha</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-[0.12em] h-[0.28em] bg-amber/10"
                  />
                </span>{" "}
                algorithm into your portfolio. Keep the profits.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 max-w-[58ch] text-body text-text-secondary leading-relaxed">
                A mean-reversion gold-trading algorithm installed on your own
                brokerage account. Your capital stays in your name. Our team
                runs the software.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/apply"
                  className="group inline-flex h-14 items-center gap-3 bg-amber px-8 text-sm font-medium uppercase tracking-wide text-bg-deep transition-all hover:bg-amber-glow hover:gap-5 active:translate-y-px"
                >
                  Book a private call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
                  30 min · No obligation
                </span>
              </div>
            </FadeIn>

            {/* Trust micro-strip — replaces the weak "Gold" watermark */}
            <FadeIn delay={0.6}>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-6">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                    Verified by
                  </dt>
                  <dd className="mt-1.5 font-serif text-base text-text-primary">
                    MyFXBook
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                    Live since
                  </dt>
                  <dd className="mt-1.5 font-serif text-base text-text-primary tabular-nums">
                    2018
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                    Total return
                  </dt>
                  <dd className="mt-1.5 font-serif text-base text-amber tabular-nums">
                    1,306%
                    <sup className="ml-0.5 text-[0.5em] text-text-muted">ⓘ</sup>
                  </dd>
                </div>
              </dl>
            </FadeIn>
          </div>

          {/* RIGHT — video */}
          <FadeIn delay={0.35}>
            <div className="lg:pt-2">
              <VSLVideo />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                Robert Miller, CEO · 12 min
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stats strip — superscripted asterisk, not inline
// ─────────────────────────────────────────────────────────────────────────────

function StatsStrip() {
  const stats = [
    { value: "1,306", unit: "%", note: "verified total return", marker: "*" },
    { value: "2018", unit: "", note: "live track record since" },
    { value: "24/7", unit: "", note: "automated execution" },
    { value: "100", unit: "%", note: "you keep the profits" },
  ];

  return (
    <section className="relative border-y border-border bg-bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-14">
        <div className="grid grid-cols-2 gap-y-8 gap-x-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.note}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                ease: EASE_OUT_EXPO,
                delay: i * 0.06,
              }}
              className="flex flex-col"
            >
              <div className="flex items-baseline font-serif tracking-tight text-text-primary">
                <span
                  className="tabular-nums"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  {s.value}
                </span>
                {s.unit ? (
                  <span
                    className="ml-0.5 text-text-secondary"
                    style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)" }}
                  >
                    {s.unit}
                  </span>
                ) : null}
                {s.marker ? (
                  <sup className="ml-1 font-mono text-[11px] text-amber">
                    {s.marker}
                  </sup>
                ) : null}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                {s.note}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 font-mono text-[10px] italic text-text-muted">
          <sup className="mr-0.5 not-italic text-amber">*</sup>
          Verified through MyFXBook. Past performance is not indicative of
          future results.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Why Gold Alpha — asymmetric editorial: sticky left header + typographic list
// (replaces the generic 3-equal-card row, ditches cliché Shield/Clock icons)
// ─────────────────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    n: "01",
    eyebrow: "Capital preservation",
    title: "The algorithm stays disciplined when a human wouldn't.",
    body: "A mean-reversion approach built around strict drawdown controls. The software takes signals the same way on day 500 as it does on day 1.",
  },
  {
    n: "02",
    eyebrow: "Monthly cashflow",
    title: "An income sleeve that runs next to your core holdings.",
    body: "Uncorrelated to equities. Independent of the business cycle. Designed to generate returns regardless of what your portfolio is doing this quarter.",
  },
  {
    n: "03",
    eyebrow: "Zero operational time",
    title: "We run the software. You keep the returns.",
    body: "Our team installs, maintains, and monitors the algorithm on your broker. After onboarding there are no dashboards to watch and no trades to place.",
  },
];

function WhyGoldAlpha() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* LEFT — sticky header */}
          <div className="lg:sticky lg:top-10 lg:self-start">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              Why Gold Alpha
            </p>
            <h2 className="font-serif text-h2 leading-[1.08] tracking-tight text-text-primary text-balance">
              Built for the investor who already has a portfolio — and wants a
              better one.
            </h2>
            <p className="mt-5 max-w-[46ch] text-body text-text-secondary leading-relaxed">
              Three reasons clients choose Gold Alpha as the algorithmic sleeve
              of their portfolio.
            </p>
          </div>

          {/* RIGHT — typographic list, no icons, no cards */}
          <div>
            {PILLARS.map((p, i) => (
              <motion.article
                key={p.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.65,
                  ease: EASE_OUT_EXPO,
                  delay: i * 0.06,
                }}
                className={[
                  "grid grid-cols-[auto_1fr] gap-x-6 py-10 first:pt-0",
                  i < PILLARS.length - 1 ? "border-b border-border/70" : "",
                ].join(" ")}
              >
                <div className="flex flex-col items-start">
                  <span
                    className="font-serif leading-none text-amber/45"
                    style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
                  >
                    {p.n}
                  </span>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-dim">
                    {p.eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-[22px] leading-snug text-text-primary text-balance lg:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[58ch] text-body text-text-secondary leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// How It Works — horizontal timeline with amber connector (distinct from pillars)
// ─────────────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    n: "01",
    title: "Book your private call",
    body: "A 30-minute consultation with our team — just clarity on whether Gold Alpha is a fit for your portfolio.",
  },
  {
    n: "02",
    title: "Fund a compatible broker",
    body: "We connect you with a broker that meets the software's requirements. Your capital stays in your name, in your account.",
  },
  {
    n: "03",
    title: "We install the algorithm",
    body: "Our team configures Gold Alpha on your brokerage account and hands you the client portal. Trading begins automatically.",
  },
];

function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-border bg-bg-surface/30 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              How it works
            </p>
            <h2 className="font-serif text-h2 leading-tight text-text-primary text-balance">
              First call to live trading — in under 30 minutes of your time.
            </h2>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
            Three steps
          </span>
        </div>

        {/* Desktop — horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-3">
            {/* Connector line — behind dots */}
            <div
              aria-hidden="true"
              className="absolute left-[16.67%] right-[16.67%] top-[1.25rem] h-px bg-border"
            />
            <motion.div
              aria-hidden="true"
              className="absolute left-[16.67%] top-[1.25rem] h-px origin-left bg-amber"
              style={{ width: "66.67%" }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, ease: EASE_OUT_EXPO, delay: 0.2 }}
            />

            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: EASE_OUT_EXPO,
                  delay: 0.3 + i * 0.18,
                }}
                className="relative flex flex-col items-center text-center px-6"
              >
                {/* Dot */}
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-amber bg-bg-deep">
                  <span className="h-2 w-2 rounded-full bg-amber" />
                </span>
                <span className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-amber-dim">
                  Step {step.n}
                </span>
                <h3 className="mt-2 max-w-[22ch] font-serif text-xl leading-snug text-text-primary text-balance lg:text-[22px]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[38ch] text-body text-text-secondary leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical with connector */}
        <div className="lg:hidden">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[1.25rem] top-4 bottom-4 w-px bg-border"
            />
            <div className="space-y-10">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.5,
                    ease: EASE_OUT_EXPO,
                    delay: i * 0.08,
                  }}
                  className="relative grid grid-cols-[auto_1fr] gap-5"
                >
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-amber bg-bg-deep">
                    <span className="h-2 w-2 rounded-full bg-amber" />
                  </span>
                  <div className="pt-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-dim">
                      Step {step.n}
                    </p>
                    <h3 className="mt-1.5 font-serif text-xl leading-snug text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-body text-text-secondary leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Includes panel — tertiary CTA (not a third loud amber button)
// ─────────────────────────────────────────────────────────────────────────────

const INCLUDES = [
  "Private onboarding with our team",
  "Installation on a compatible broker account",
  "Access to the Algo Alpha client portal",
  "MyFXBook-verified live performance reporting",
  "Ongoing software updates at no cost",
  "Priority support from our US-based team",
];

function Includes() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              What&apos;s included
            </p>
            <h2 className="font-serif text-h3 leading-tight text-text-primary text-balance">
              Installed, monitored, and maintained by our team.
            </h2>
            <p className="mt-4 max-w-[52ch] text-body text-text-secondary leading-relaxed">
              Gold Alpha ships as a fully-managed install. Your call covers
              pricing, brokerage setup, and the exact onboarding timeline.
            </p>
            <a
              href="/apply"
              className="group mt-8 inline-flex items-center gap-2 border-b border-amber/40 pb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-amber transition-all hover:border-amber hover:gap-3"
            >
              Schedule onboarding call
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {INCLUDES.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.45,
                  ease: EASE_OUT_EXPO,
                  delay: i * 0.05,
                }}
                className="flex items-start gap-3 border-b border-border/50 pb-4 text-body text-text-secondary"
              >
                <span className="mt-[0.35em] flex h-4 w-4 shrink-0 items-center justify-center bg-amber/[0.07]">
                  <Check className="h-3 w-3 text-amber" strokeWidth={2.5} />
                </span>
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Final CTA — warm-white inversion (site's existing light-section pattern)
// ─────────────────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-warm-white py-24 text-bg-deep lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.12 0.01 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.12 0.01 60) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Soft radial for warmth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 50% 0%, oklch(0.75 0.16 65 / 0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-amber-dim">
          Ready when you are
        </p>
        <h2 className="font-serif text-h2 leading-[1.05] tracking-tight text-bg-deep text-balance">
          Book a private call with our team.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-body text-bg-deep/65 leading-relaxed">
          Thirty minutes. Zero pressure. By the end of the call you&apos;ll know
          exactly how Gold Alpha fits — or doesn&apos;t fit — into your
          portfolio.
        </p>
        <div className="mt-10">
          <a
            href="/apply"
            className="group inline-flex h-14 items-center gap-3 bg-bg-deep px-10 text-sm font-medium uppercase tracking-wide text-warm-white transition-all hover:gap-5 active:translate-y-px"
          >
            Book a private call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <p className="mt-6 font-mono text-[10px] italic text-bg-deep/40">
          Past performance is not indicative of future results.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function GoldDirectBookCallPage() {
  return (
    <main className="relative min-h-screen bg-bg-deep text-text-primary">
      <GrainOverlay />
      <FunnelHeader />
      <Hero />
      <StatsStrip />
      <WhyGoldAlpha />
      <HowItWorks />
      <TrustpilotReviews />
      <Includes />
      <FinalCTA />
      <PageDisclaimer />
    </main>
  );
}
