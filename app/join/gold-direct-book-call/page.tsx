"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Shield,
  TrendingUp,
  Clock,
  Check,
  Volume2,
} from "lucide-react";

import TrustpilotReviews from "@/components/shared/trustpilot-placeholder";
import PageDisclaimer from "@/components/shared/page-disclaimer";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

const VSL_VIDEO_ID = "ds7NboBXslM";

// ─────────────────────────────────────────────────────────────────────────────
// Header
// ─────────────────────────────────────────────────────────────────────────────

function FunnelHeader() {
  return (
    <header className="border-b border-border">
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
// VSL Video (hero)
// ─────────────────────────────────────────────────────────────────────────────

function VSLVideo() {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${VSL_VIDEO_ID}/maxresdefault.jpg`;

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
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
      className="group relative block aspect-video w-full overflow-hidden rounded-lg border border-border bg-bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
      aria-label="Play the Gold Alpha presentation"
    >
      <img
        src={thumbnail}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/30 transition-colors duration-500 group-hover:from-black/60" />

      {/* Play circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-amber/90 transition-transform duration-500 group-hover:scale-110">
          <span className="absolute inset-0 rounded-full bg-amber/30 blur-2xl" />
          <Play
            className="relative ml-1 h-8 w-8 text-bg-deep"
            fill="currentColor"
          />
        </span>
      </div>

      {/* Top-left meta */}
      <div className="absolute left-0 top-0 flex items-center gap-2 p-5">
        <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
          Presentation · 12 min
        </span>
      </div>

      {/* Bottom strip */}
      <div className="absolute bottom-0 inset-x-0 flex items-center justify-between p-5">
        <span className="font-serif text-xl text-white lg:text-2xl">
          A message from the founder
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/90 backdrop-blur">
          <Volume2 className="h-3 w-3" />
          Enable sound
        </span>
      </div>
    </button>
  );
}

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
// Hero
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-20">
      {/* Subtle radial glow behind the "Gold" watermark */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 10%, oklch(0.75 0.16 65 / 0.08), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <FadeIn delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-amber">
              <span className="h-1 w-1 rounded-full bg-amber" />
              Exclusive for High-Net-Worth Executives
            </span>
          </FadeIn>

          {/* "GOLD" watermark */}
          {reduced ? (
            <p
              aria-hidden="true"
              className="mt-8 select-none font-serif font-medium leading-none tracking-tight"
              style={{
                fontSize: "clamp(4rem, 11vw, 8rem)",
                color: "oklch(0.75 0.16 65 / 0.12)",
              }}
            >
              Gold
            </p>
          ) : (
            <motion.p
              aria-hidden="true"
              className="mt-8 select-none font-serif font-medium leading-none tracking-tight"
              style={{
                fontSize: "clamp(4rem, 11vw, 8rem)",
                color: "oklch(0.75 0.16 65 / 0.12)",
              }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.1 }}
            >
              Gold
            </motion.p>
          )}

          <FadeIn delay={0.2}>
            <h1 className="-mt-4 font-serif text-h1 leading-[1.05] text-text-primary lg:-mt-8">
              Install our <span className="text-amber">Gold AI algorithm</span>{" "}
              into your portfolio —
              <br className="hidden sm:block" /> and generate monthly profits,
              hands-off.
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mx-auto mt-6 max-w-2xl text-body text-text-secondary leading-relaxed">
              Watch the 12-minute presentation below. If it resonates, book a
              private call with our team and we&apos;ll map out exactly how Gold
              Alpha fits into your portfolio.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <div className="mx-auto mt-12 max-w-4xl">
            <VSLVideo />
          </div>
        </FadeIn>

        <FadeIn delay={0.65}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/apply"
              className="group inline-flex h-14 items-center gap-3 bg-amber px-10 text-sm font-medium uppercase tracking-wide text-bg-deep transition-all hover:bg-amber-glow hover:gap-5 active:translate-y-px"
            >
              Book a Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
              Private consultation · No obligation
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stats strip
// ─────────────────────────────────────────────────────────────────────────────

function StatsStrip() {
  const stats = [
    { value: "1,306%*", label: "Verified total return" },
    { value: "30+", label: "Market pairs" },
    { value: "24/7", label: "Automated execution" },
    { value: "100%", label: "You keep the profits" },
  ];

  return (
    <section className="border-y border-border bg-bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:py-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                ease: EASE_OUT_EXPO,
                delay: i * 0.06,
              }}
            >
              <div className="font-serif text-3xl tracking-tight text-text-primary lg:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 font-mono text-[10px] italic text-text-muted">
          * Verified through MyFXBook. Past performance is not indicative of
          future results.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Why Gold Alpha
// ─────────────────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    icon: Shield,
    eyebrow: "Capital Preservation",
    title: "Drawdowns engineered to protect the downside.",
    body: "Gold Alpha is a mean-reversion strategy built around strict risk controls — so the algorithm stays disciplined exactly when a human wouldn't.",
  },
  {
    icon: TrendingUp,
    eyebrow: "Monthly Cashflow",
    title: "An income sleeve that runs alongside your core holdings.",
    body: "Gold Alpha is designed to generate consistent monthly returns — independent of equities, independent of the business cycle, independent of your day.",
  },
  {
    icon: Clock,
    eyebrow: "Zero Management Time",
    title: "You keep the profits. We handle the screens.",
    body: "Our team configures the algorithm on your brokerage account. After onboarding, there is nothing to do — no dashboards to watch, no trades to place.",
  },
];

function WhyGoldAlpha() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Why Gold Alpha
          </p>
          <h2 className="font-serif text-h2 leading-tight text-text-primary">
            Built for the investor who already has a portfolio — and wants a
            better one.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.eyebrow}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: EASE_OUT_EXPO,
                  delay: i * 0.08,
                }}
                className="group flex flex-col rounded-xl border border-border bg-bg-surface p-8 transition-colors hover:border-border-active"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center border border-border transition-colors group-hover:border-amber">
                  <Icon className="h-4 w-4 text-amber" />
                </div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-dim">
                  {p.eyebrow}
                </p>
                <h3 className="font-serif text-xl leading-snug text-text-primary lg:text-[22px]">
                  {p.title}
                </h3>
                <p className="mt-4 text-body text-text-secondary leading-relaxed">
                  {p.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// How it works
// ─────────────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    n: "01",
    title: "Book your private call",
    body: "A 30-minute consultation with our team — no sales pitch, just clarity on whether Gold Alpha is a fit for your portfolio.",
  },
  {
    n: "02",
    title: "Fund with a compatible broker",
    body: "We connect you with a broker that meets the software's requirements. Your capital stays in your name, in your account, at all times.",
  },
  {
    n: "03",
    title: "We install the algorithm",
    body: "Our team configures Gold Alpha on your brokerage account and hands you the client portal. Trading begins automatically.",
  },
];

function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-border bg-bg-surface/30 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              How It Works
            </p>
            <h2 className="font-serif text-h2 leading-tight text-text-primary">
              From first call to live trading — in under 30 minutes of your
              time.
            </h2>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
            3 Steps
          </span>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: EASE_OUT_EXPO,
                delay: i * 0.12,
              }}
              className={[
                "relative flex flex-col p-8 lg:p-10",
                i > 0 ? "md:border-l md:border-border/70" : "",
                i < STEPS.length - 1
                  ? "border-b border-border/70 md:border-b-0"
                  : "",
              ].join(" ")}
            >
              <div className="mb-8 flex items-baseline justify-between">
                <span className="font-serif text-5xl text-amber/30">
                  {step.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                  Step
                </span>
              </div>
              <h3 className="font-serif text-xl leading-snug text-text-primary lg:text-[22px]">
                {step.title}
              </h3>
              <p className="mt-4 text-body text-text-secondary leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// What's included / not included
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
        <div className="rounded-xl border border-border bg-bg-surface p-8 lg:p-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                What&apos;s Included
              </p>
              <h2 className="font-serif text-h3 leading-tight text-text-primary">
                Everything an executive needs. Nothing an executive&apos;s day
                doesn&apos;t.
              </h2>
              <p className="mt-4 text-body text-text-secondary leading-relaxed">
                Gold Alpha is sold as a fully-installed solution. Your call will
                cover pricing, brokerage setup, and the exact onboarding
                timeline.
              </p>
              <div className="mt-8">
                <a
                  href="/apply"
                  className="group inline-flex h-12 items-center gap-3 bg-amber px-8 text-sm font-medium uppercase tracking-wide text-bg-deep transition-all hover:bg-amber-glow hover:gap-5"
                >
                  Book a Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {INCLUDES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-body text-text-secondary"
                >
                  <span className="mt-[0.35em] flex h-5 w-5 shrink-0 items-center justify-center border border-amber/40 bg-amber/5">
                    <Check className="h-3 w-3 text-amber" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Final CTA
// ─────────────────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-warm-white py-20 text-bg-deep lg:py-28">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.12 0.01 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.12 0.01 60) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber-dim">
          Ready to Get Started?
        </p>
        <h2 className="font-serif text-h2 leading-tight text-bg-deep">
          Book a private call with our team.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-body text-bg-deep/60 leading-relaxed">
          30 minutes. Zero pressure. By the end of the call you&apos;ll know
          exactly how Gold Alpha fits — or doesn&apos;t fit — into your
          portfolio.
        </p>
        <div className="mt-8">
          <a
            href="/apply"
            className="group inline-flex h-14 items-center gap-3 bg-bg-deep px-10 text-sm font-medium uppercase tracking-wide text-warm-white transition-all hover:gap-5 active:translate-y-px"
          >
            Book a Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <p className="mt-5 font-mono text-[10px] italic text-bg-deep/40">
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
    <main className="min-h-screen bg-bg-deep text-text-primary">
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
