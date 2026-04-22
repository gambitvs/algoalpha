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

// ── Video sources ────────────────────────────────────────────────────────────
// Real video URLs lifted from https://lp.algoalpha.co/pre-call (YouTube IDs,
// Wistia ID, and hosted MP4 URLs served from the original LP's CDN).

type VideoSource =
  | { kind: "youtube"; id: string }
  | { kind: "wistia"; id: string; thumbnail: string }
  | { kind: "mp4"; url: string };

function thumbnailFor(src: VideoSource): string | null {
  if (src.kind === "youtube")
    return `https://img.youtube.com/vi/${src.id}/maxresdefault.jpg`;
  if (src.kind === "wistia") return src.thumbnail;
  return null; // mp4 — render first frame via <video poster>/preload
}

// ── Featured (welcome) video ─────────────────────────────────────────────────

const FEATURED_VIDEO: {
  source: VideoSource;
  eyebrow: string;
  title: string;
  description: string;
  duration: string;
} = {
  source: {
    kind: "mp4",
    url: "https://storage.googleapis.com/msgsndr/91ZHtcGEPL5GQmtTCTib/media/697a5fa2e1783cba78286a07.mp4",
  },
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
  source: VideoSource;
  duration: string;
};

const MODULES: Module[] = [
  {
    number: "01",
    title: "Where Do Algorithms Fit In Your Portfolio?",
    description:
      "Capital allocation, risk bucketing, and why algorithmic strategies belong next to — not instead of — your core holdings.",
    source: {
      kind: "mp4",
      url: "https://assets.cdn.filesafe.space/91ZHtcGEPL5GQmtTCTib/media/69b59155bfc81f2b3719c78f.mp4",
    },
    duration: "4 min",
  },
  {
    number: "02",
    title: "How to Approach Algorithmic Trading in Your Portfolio",
    description:
      "The founder's framework for integrating automated strategies alongside equities, real estate, and alternatives.",
    source: { kind: "youtube", id: "1bftpeOmFak" },
    duration: "5 min",
  },
  {
    number: "03",
    title: "About Algo Alpha",
    description:
      "Company overview — who we are, the strategies we run, and how we verify every live account through MyFXBook.",
    source: {
      kind: "mp4",
      url: "https://assets.cdn.filesafe.space/91ZHtcGEPL5GQmtTCTib/media/69d52fc7ebf1a60843020546.mp4",
    },
    duration: "4 min",
  },
  {
    number: "04",
    title: "How Easy Is Management After Setup?",
    description:
      "A walkthrough of the private client portal — configure an account, monitor performance, pull reports in seconds.",
    source: {
      kind: "wistia",
      id: "c58qtx8rgr",
      thumbnail:
        "https://embed-ssl.wistia.com/deliveries/df61546ea61dba9e66d65ca95ab602f4b297a277.jpg?image_crop_resized=960x540",
    },
    duration: "3 min",
  },
  {
    number: "05",
    title: "Commonly Asked Questions",
    description:
      "CEO Robert Miller addresses the questions every investor asks before committing capital.",
    source: { kind: "youtube", id: "EpcbkY2I6rw" },
    duration: "6 min",
  },
  {
    number: "06",
    title:
      "What Does It Look Like to Have Algorithmic Trading in Your Portfolio?",
    description:
      "A real account demonstration — what you'll actually see inside the dashboard once the algorithm is running.",
    source: { kind: "youtube", id: "1x5MVnXicRI" },
    duration: "4 min",
  },
  {
    number: "07",
    title: "Is Your Portfolio Modernized?",
    description:
      "Portfolio shifts, de-dollarization trends, and why diversification outside traditional assets matters in 2026.",
    source: { kind: "youtube", id: "VDw8ndCi4bs" },
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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="-ml-2 inline-flex min-h-[44px] items-center gap-2 px-2 font-mono text-[11px] uppercase tracking-wider text-text-muted transition-colors hover:text-text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Home</span>
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
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-28">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, oklch(0.75 0.16 65 / 0.06), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
        <FadeIn delay={0}>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
            Pre-Call Resources
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="mt-5 font-serif text-h1 text-text-primary leading-[1.05] text-balance">
            Watch these before we meet.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-6 max-w-xl text-body text-text-secondary leading-relaxed">
            A short curriculum to bring you up to speed on how Algo Alpha works.
            Watching in advance lets us skip the basics on your call and spend
            the time on your portfolio.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted sm:mt-10 sm:gap-x-8">
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
// Universal video player — handles youtube / wistia / mp4
// ─────────────────────────────────────────────────────────────────────────────

function VideoPlayer({
  source,
  title,
}: {
  source: VideoSource;
  title: string;
}) {
  if (source.kind === "youtube") {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${source.id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  }
  if (source.kind === "wistia") {
    return (
      <iframe
        src={`https://fast.wistia.net/embed/iframe/${source.id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  }
  return (
    <video
      controls
      autoPlay
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full bg-black object-contain"
    >
      <source src={source.url} type="video/mp4" />
    </video>
  );
}

function VideoCoverImage({
  source,
  className,
}: {
  source: VideoSource;
  className?: string;
}) {
  if (source.kind === "mp4") {
    // Show first frame via a muted preloaded <video>
    return (
      <video
        src={source.url}
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className={className}
      />
    );
  }
  const thumb = thumbnailFor(source)!;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={thumb} alt="" className={className} />;
}

// ─────────────────────────────────────────────────────────────────────────────
// Featured video
// ─────────────────────────────────────────────────────────────────────────────

function FeaturedVideo() {
  const [playing, setPlaying] = useState(false);
  const reduced = useReducedMotion();

  return (
    <section className="relative py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
        >
          <div className="min-w-0 flex-1">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              {FEATURED_VIDEO.eyebrow}
            </p>
            <h2 className="font-serif text-h3 leading-tight text-text-primary text-balance">
              {FEATURED_VIDEO.title}
            </h2>
          </div>
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
            {FEATURED_VIDEO.duration}
          </span>
        </motion.div>

        <motion.p
          initial={reduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.1 }}
          className="mb-6 max-w-2xl text-body text-text-secondary leading-relaxed"
        >
          {FEATURED_VIDEO.description}
        </motion.p>

        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.15 }}
          className="relative overflow-hidden rounded-lg border border-border bg-bg-surface"
        >
          {playing ? (
            <div className="relative aspect-video w-full">
              <VideoPlayer
                source={FEATURED_VIDEO.source}
                title={FEATURED_VIDEO.title}
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group relative block aspect-video w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
              aria-label={`Play: ${FEATURED_VIDEO.title}`}
            >
              <VideoCoverImage
                source={FEATURED_VIDEO.source}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 transition-colors duration-500 group-hover:from-black/50" />

              {/* Play circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-amber/90 transition-transform duration-500 group-hover:scale-110 sm:h-20 sm:w-20">
                  <span className="absolute inset-0 rounded-full bg-amber/30 blur-xl" />
                  <Play
                    className="relative ml-1 h-6 w-6 text-bg-deep sm:h-7 sm:w-7"
                    fill="currentColor"
                  />
                </span>
              </div>

              {/* Bottom meta strip */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 sm:p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
                  Play featured video
                </span>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
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
              <VideoPlayer source={module.source} title={module.title} />
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
            className="group flex w-full flex-col p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50 sm:flex-row sm:items-stretch sm:gap-5 sm:p-5"
          >
            {/* Number badge — row above thumbnail on mobile, column on sm+ */}
            <div className="mb-4 flex items-baseline gap-3 sm:mb-0 sm:w-14 sm:shrink-0 sm:flex-col sm:items-center sm:justify-center sm:gap-0 sm:border-r sm:border-border/60 sm:pr-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                Module
              </span>
              <span className="font-serif text-2xl text-amber sm:mt-1">
                {module.number}
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted sm:hidden">
                <Clock className="h-3 w-3" />
                {module.duration}
              </span>
            </div>

            {/* Thumbnail — full width on mobile, fixed width sm+ */}
            <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-md sm:w-48 lg:w-52">
              <VideoCoverImage
                source={module.source}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/50 via-transparent to-transparent sm:bg-gradient-to-r sm:from-bg-deep/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber/90 transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
                  <Play
                    className="ml-0.5 h-4 w-4 text-bg-deep"
                    fill="currentColor"
                  />
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="mt-4 flex min-w-0 flex-1 flex-col justify-center sm:mt-0">
              <h3 className="font-serif text-[19px] leading-snug text-text-primary sm:text-[20px]">
                {module.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-small leading-relaxed text-text-secondary sm:line-clamp-2">
                {module.description}
              </p>
              <div className="mt-3 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted sm:flex">
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
    <section className="relative py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-6 border-b border-border pb-5 sm:mb-10 sm:pb-6">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              Pre-Call Curriculum
            </p>
            <h2 className="font-serif text-h2 leading-tight text-text-primary text-balance">
              Seven modules. One goal.
            </h2>
            <p className="mt-3 max-w-xl text-body leading-relaxed text-text-secondary">
              Everything you need to walk into your consultation ready to go
              deep. No fluff, no filler.
            </p>
          </div>
          <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted sm:block">
            01 — 07
          </span>
        </div>

        <div className="space-y-3 sm:space-y-4">
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
    <section ref={ref} className="relative py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="rounded-xl border border-border bg-bg-surface p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                Come Prepared
              </p>
              <h2 className="font-serif text-h3 leading-tight text-text-primary text-balance">
                What to have ready for your call.
              </h2>
              <p className="mt-4 text-body leading-relaxed text-text-secondary">
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
                  className="flex items-start gap-3 border-b border-border/60 pb-3 text-body text-text-secondary last:border-b-0 last:pb-0 sm:gap-4"
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
    <section className="py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
          See you soon
        </p>
        <p className="font-serif text-h3 leading-tight text-text-primary text-balance">
          We&apos;re looking forward to your call.
        </p>
        <p className="mx-auto mt-4 max-w-lg text-body leading-relaxed text-text-secondary">
          Need to reschedule or have a question before we meet? Reach out to{" "}
          <a
            href="mailto:support@algoalpha.co"
            className="inline-block py-1 text-amber underline underline-offset-4 transition-colors hover:text-amber-glow"
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
