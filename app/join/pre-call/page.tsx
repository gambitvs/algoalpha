"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowLeft, Check, Play, Clock, BookOpen } from "lucide-react";

import TrustpilotReviews from "@/components/shared/trustpilot-placeholder";
import PageDisclaimer from "@/components/shared/page-disclaimer";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// ── Featured (welcome) video ─────────────────────────────────────────────────

const FEATURED_VIDEO = {
  youtubeId: "ds7NboBXslM",
  eyebrow: "Watch first",
  title: "A Personal Welcome from Robert Miller, CEO",
  description:
    "Before your consultation, Robert walks through what Algo Alpha is, who it's built for, and what to expect on your call.",
  duration: "6 min",
};

// ── Pre-call curriculum ─────────────────────────────────────────────────────

type Module = {
  number: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
};

const MODULES: Module[] = [
  {
    number: "01",
    title: "Where Do Algorithms Fit In Your Portfolio?",
    description:
      "Capital allocation, risk bucketing, and why algorithmic strategies belong next to — not instead of — your core holdings.",
    youtubeId: "vsup7V6v-Zo",
    duration: "4 min",
  },
  {
    number: "02",
    title: "How to Approach Algorithmic Trading in Your Portfolio",
    description:
      "The founder's framework for integrating automated strategies alongside equities, real estate, and alternatives.",
    youtubeId: "Dannp9g6Fjs",
    duration: "5 min",
  },
  {
    number: "03",
    title: "About Algo Alpha",
    description:
      "Company overview — who we are, the strategies we run, and how we verify every live account through MyFXBook.",
    youtubeId: "ds7NboBXslM",
    duration: "4 min",
  },
  {
    number: "04",
    title: "How Easy Is Management After Setup?",
    description:
      "A walkthrough of the private client portal — configure an account, monitor performance, pull reports in seconds.",
    youtubeId: "vsup7V6v-Zo",
    duration: "3 min",
  },
  {
    number: "05",
    title: "Commonly Asked Questions",
    description:
      "CEO Robert Miller addresses the questions every investor asks before committing capital.",
    youtubeId: "Dannp9g6Fjs",
    duration: "6 min",
  },
  {
    number: "06",
    title: "Algorithmic Trading, Live in a Portfolio",
    description:
      "A real account demonstration — what you'll actually see inside the dashboard once the algorithm is running.",
    youtubeId: "ds7NboBXslM",
    duration: "4 min",
  },
  {
    number: "07",
    title: "Is Your Portfolio Modernized?",
    description:
      "Portfolio shifts, de-dollarization trends, and why diversification outside traditional assets matters in 2026.",
    youtubeId: "vsup7V6v-Zo",
    duration: "5 min",
  },
];

// ── What to prepare checklist ───────────────────────────────────────────────

const CHECKLIST = [
  "Your investment goals and risk tolerance",
  "A rough picture of your current portfolio allocation",
  "Any questions about our strategies or broker setup",
  "Your timeline for getting started",
];

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
// Animated checkmark
// ─────────────────────────────────────────────────────────────────────────────

function AnimatedCheck() {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber/40 bg-amber/10">
        <Check className="h-7 w-7 text-amber" />
      </div>
    );
  }
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
      aria-hidden="true"
    >
      <motion.circle
        cx="40"
        cy="40"
        r="36"
        stroke="var(--aa-amber)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.1 }}
      />
      <motion.path
        d="M24 42L34 52L56 30"
        stroke="var(--aa-amber)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.9 }}
      />
    </motion.svg>
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
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-24">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, oklch(0.75 0.16 65 / 0.06), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <AnimatedCheck />

        <div className="mt-8">
          <FadeIn delay={0.2}>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
              Consultation Confirmed
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <h1 className="mt-5 font-serif text-h1 text-text-primary leading-[1.05]">
            Your call is booked.
            <br />
            <span className="text-amber">Now let&apos;s make it count.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.45}>
          <p className="mx-auto mt-6 max-w-xl text-body text-text-secondary leading-relaxed">
            The most productive consultations start with context. Watch the
            modules below before we meet — so we can skip the basics and focus
            entirely on your portfolio.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-mono uppercase tracking-[0.15em] text-text-muted">
            <span className="inline-flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5 text-amber" />7 Modules
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-amber" />
              ~31 min total
            </span>
            <span className="inline-flex items-center gap-2">
              <Play className="h-3.5 w-3.5 text-amber" />
              Watch at your pace
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Featured video
// ─────────────────────────────────────────────────────────────────────────────

function FeaturedVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [playing, setPlaying] = useState(false);
  const reduced = useReducedMotion();

  const thumbnail = `https://img.youtube.com/vi/${FEATURED_VIDEO.youtubeId}/maxresdefault.jpg`;

  return (
    <section className="relative py-14 lg:py-20">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="mb-6 flex items-baseline justify-between gap-4"
        >
          <div>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              {FEATURED_VIDEO.eyebrow}
            </p>
            <h2 className="font-serif text-h3 text-text-primary">
              {FEATURED_VIDEO.title}
            </h2>
          </div>
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
            {FEATURED_VIDEO.duration}
          </span>
        </motion.div>

        <motion.p
          initial={reduced ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.1 }}
          className="mb-6 max-w-2xl text-body text-text-secondary leading-relaxed"
        >
          {FEATURED_VIDEO.description}
        </motion.p>

        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.15 }}
          className="relative overflow-hidden rounded-lg border border-border bg-bg-surface"
        >
          {playing ? (
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${FEATURED_VIDEO.youtubeId}?autoplay=1&rel=0`}
                title={FEATURED_VIDEO.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group relative block aspect-video w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
              aria-label={`Play: ${FEATURED_VIDEO.title}`}
            >
              <img
                src={thumbnail}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 transition-colors duration-500 group-hover:from-black/50" />

              {/* Play circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-amber/90 transition-transform duration-500 group-hover:scale-110">
                  <span className="absolute inset-0 rounded-full bg-amber/30 blur-xl" />
                  <Play
                    className="relative ml-1 h-7 w-7 text-bg-deep"
                    fill="currentColor"
                  />
                </span>
              </div>

              {/* Bottom meta strip */}
              <div className="absolute bottom-0 inset-x-0 flex items-center justify-between p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
                  Play featured video
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                  {FEATURED_VIDEO.duration}
                </span>
              </div>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Module card
// ─────────────────────────────────────────────────────────────────────────────

function ModuleCard({ module, index }: { module: Module; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const thumbnail = `https://img.youtube.com/vi/${module.youtubeId}/hqdefault.jpg`;

  return (
    <motion.div
      ref={ref}
      layout={!reduced}
      initial={reduced ? {} : { opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: EASE_OUT_EXPO,
        delay: Math.min(index * 0.05, 0.25),
      }}
      className="overflow-hidden rounded-xl border border-border bg-bg-surface transition-colors hover:border-border-active"
    >
      <AnimatePresence mode="wait" initial={false}>
        {expanded ? (
          <motion.div
            key="player"
            initial={reduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? {} : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${module.youtubeId}?autoplay=1&rel=0`}
                title={module.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-5">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-dim">
                  Module {module.number}
                </p>
                <h3 className="mt-1 truncate font-serif text-lg text-text-primary">
                  {module.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted transition-colors hover:text-text-primary"
              >
                Collapse
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="cover"
            type="button"
            initial={reduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? {} : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setExpanded(true)}
            className="group flex w-full items-stretch gap-5 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
          >
            {/* Number badge */}
            <div className="flex w-14 shrink-0 flex-col items-center justify-center border-r border-border/60 pr-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                Module
              </span>
              <span className="mt-1 font-serif text-2xl text-amber">
                {module.number}
              </span>
            </div>

            {/* Thumbnail */}
            <div className="relative aspect-video w-40 shrink-0 overflow-hidden rounded-md sm:w-52">
              <img
                src={thumbnail}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bg-deep/40 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/90 transition-transform duration-300 group-hover:scale-110">
                  <Play
                    className="ml-0.5 h-4 w-4 text-bg-deep"
                    fill="currentColor"
                  />
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <h3 className="font-serif text-lg text-text-primary leading-snug sm:text-[20px]">
                {module.title}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-small text-text-secondary leading-relaxed">
                {module.description}
              </p>
              <div className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                <Clock className="h-3 w-3" />
                {module.duration}
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Curriculum section
// ─────────────────────────────────────────────────────────────────────────────

function Curriculum() {
  return (
    <section className="relative py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              Pre-Call Curriculum
            </p>
            <h2 className="font-serif text-h2 text-text-primary">
              Seven modules. One goal.
            </h2>
            <p className="mt-3 max-w-xl text-body text-text-secondary leading-relaxed">
              Everything you need to walk into your consultation ready to go
              deep. No fluff, no filler.
            </p>
          </div>
          <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted sm:block">
            01 — 07
          </span>
        </div>

        <div className="space-y-4">
          {MODULES.map((m, i) => (
            <ModuleCard key={m.number} module={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Checklist
// ─────────────────────────────────────────────────────────────────────────────

function Checklist() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="relative py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-xl border border-border bg-bg-surface p-8 lg:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                Come Prepared
              </p>
              <h2 className="font-serif text-h3 text-text-primary leading-tight">
                What to have ready for your call.
              </h2>
              <p className="mt-4 text-body text-text-secondary leading-relaxed">
                None of this is required — but bringing it turns a 30-minute
                intro into a strategic working session.
              </p>
            </div>

            <ul className="space-y-3">
              {CHECKLIST.map((item, i) => (
                <motion.li
                  key={item}
                  initial={reduced ? {} : { opacity: 0, x: 8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    ease: EASE_OUT_EXPO,
                    delay: 0.1 + i * 0.08,
                  }}
                  className="flex items-start gap-4 border-b border-border/60 pb-3 text-body text-text-secondary last:border-b-0 last:pb-0"
                >
                  <span className="mt-[0.35em] flex h-5 w-5 shrink-0 items-center justify-center border border-amber/40 bg-amber/5">
                    <Check className="h-3 w-3 text-amber" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Closing sign-off
// ─────────────────────────────────────────────────────────────────────────────

function SignOff() {
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
          See you soon
        </p>
        <p className="font-serif text-h3 text-text-primary leading-tight">
          We&apos;re looking forward to your call.
        </p>
        <p className="mx-auto mt-4 max-w-lg text-body text-text-secondary leading-relaxed">
          Need to reschedule or have a question before we meet? Reach out to{" "}
          <a
            href="mailto:support@algoalpha.co"
            className="text-amber underline underline-offset-4 transition-colors hover:text-amber-glow"
          >
            support@algoalpha.co
          </a>
          .
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function JoinPreCallPage() {
  return (
    <main className="min-h-screen bg-bg-deep text-text-primary">
      <FunnelHeader />
      <Hero />
      <FeaturedVideo />
      <Curriculum />
      <Checklist />
      <TrustpilotReviews />
      <SignOff />
      <PageDisclaimer />
    </main>
  );
}
