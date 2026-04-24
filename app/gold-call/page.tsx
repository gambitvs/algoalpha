"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play, Check, Volume2 } from "lucide-react";

import TrustpilotReviews from "@/components/shared/trustpilot-placeholder";
import PageDisclaimer from "@/components/shared/page-disclaimer";

const VSL_HLS_URL =
  "https://content.apisystem.tech/hls/medias/91ZHtcGEPL5GQmtTCTib/media/transcoded_videos/cts-e3f61770c2b85aa9_,360,480,720,1080,p.mp4.urlset/master.m3u8";

const CALENDLY_URL =
  "https://calendly.com/algo-alpha-advisory-team/alpha-investor-consultation-call-clone";

// ─────────────────────────────────────────────────────────────────────────────
// Page-level grain overlay — fixed, pointer-events-none, very low opacity
// ─────────────────────────────────────────────────────────────────────────────

// URL-encoded so it survives HTML attribute serialization. Raw `<` chars
// in the SVG caused a hydration-breaking parse error that froze all
// framer-motion animations on the page.
const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 0.9 0 0 0 0 0.75 0 0 0 0 0.4 0 0 0 1 0"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`,
  );

function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
      style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Header
// ─────────────────────────────────────────────────────────────────────────────

function FunnelHeader() {
  return (
    <header className="relative z-10 border-b border-border">
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

// ─────────────────────────────────────────────────────────────────────────────
// VSL Video
// ─────────────────────────────────────────────────────────────────────────────

function VSLVideo() {
  const [soundOn, setSoundOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Load HLS + start muted autoplay on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: { destroy: () => void } | null = null;

    const startPlayback = () => {
      video.muted = true;
      video.play().catch(() => undefined);
    };

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari — native HLS
      video.src = VSL_HLS_URL;
      startPlayback();
    } else {
      // Chrome/Firefox — hls.js from CDN
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js";
      script.async = true;
      script.onload = () => {
        const HlsCtor = (window as unknown as { Hls?: unknown }).Hls as
          | (new () => {
              loadSource: (u: string) => void;
              attachMedia: (v: HTMLVideoElement) => void;
              on: (ev: string, cb: () => void) => void;
              destroy: () => void;
            })
          | undefined;
        if (HlsCtor && video) {
          const hls = new HlsCtor();
          hls.loadSource(VSL_HLS_URL);
          hls.attachMedia(video);
          hls.on("hlsManifestParsed", () => startPlayback());
          hlsInstance = hls;
        }
      };
      document.head.appendChild(script);
    }

    return () => {
      if (hlsInstance) hlsInstance.destroy();
    };
  }, []);

  const enableSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.currentTime = 0;
    video.play().catch(() => undefined);
    setSoundOn(true);
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border bg-black">
      {/* Video — always rendered, autoplays muted */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        autoPlay
        playsInline
        controls={soundOn}
        preload="auto"
      />

      {/* Overlay — visible until user enables sound */}
      {!soundOn && (
        <button
          type="button"
          onClick={enableSound}
          className="group absolute inset-0 z-10 flex h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
          aria-label="Enable sound and watch the Gold Alpha presentation"
        >
          {/* Dim + vignette so overlay text reads over the playing footage */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle 180px at 50% 50%, oklch(0.75 0.16 65 / 0.22), transparent 70%)",
            }}
          />

          {/* Top meta */}
          <span className="absolute left-0 top-0 z-10 flex items-center gap-2 p-5">
            <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-amber shadow-[0_0_8px_theme(colors.amber)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/90">
              Founder presentation · Muted preview
            </span>
          </span>

          {/* Center play button */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex h-20 w-20 items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-amber/50 transition-transform duration-500 group-hover:scale-[1.35]" />
              <span className="absolute inset-0 rounded-full border border-amber/25 transition-transform duration-700 group-hover:scale-[1.7]" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-amber transition-all duration-300 group-hover:bg-amber-glow">
                <Play
                  className="ml-0.5 h-5 w-5 text-bg-deep"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </span>
            </span>
          </span>

          {/* Bottom strip */}
          <span className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5">
            <span className="min-w-0">
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-amber/90">
                Watch first
              </span>
              <span className="mt-1 block font-serif text-xl leading-tight text-white text-balance lg:text-2xl">
                Why we built Gold Alpha, and who it&apos;s for.
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/30 bg-black/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white transition-colors group-hover:bg-amber group-hover:text-bg-deep group-hover:border-amber backdrop-blur">
              <Volume2 className="h-3 w-3" />
              Click for sound
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FadeIn wrapper
// ─────────────────────────────────────────────────────────────────────────────

function FadeIn({ children }: { children: React.ReactNode; delay?: number }) {
  return <>{children}</>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero — editorial, left-aligned (breaks the centered symmetry)
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-6 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14">
      {/* Top-center radial glow behind the VSL */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 65% 50% at 50% 18%, oklch(0.75 0.16 65 / 0.1), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-amber">
            <span className="h-1 w-1 rounded-full bg-amber" />
            Exclusive for high-net-worth executives...
          </span>
        </div>

        {/* H1 */}
        <h1
          className="mx-auto mt-5 max-w-[22ch] font-serif leading-[1.08] tracking-tight text-text-primary text-balance sm:max-w-[26ch] lg:mt-6 lg:max-w-[32ch]"
          style={{ fontSize: "clamp(1.625rem, 3vw, 2.625rem)" }}
        >
          Install Our{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-amber">
              Gold AI Trading Algorithm
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-[0.12em] h-[0.28em] bg-amber/10"
            />
          </span>{" "}
          to Your Portfolio That Generates Monthly Profits With
          &apos;Hands-Off&apos; Management
        </h1>

        {/* Subhead */}
        <p className="mx-auto mt-4 max-w-[58ch] text-small text-text-secondary leading-relaxed sm:text-body">
          A mean-reversion gold-trading algorithm installed on your own
          brokerage account. Your capital stays in your name. Our team runs the
          software.
        </p>
      </div>

      {/* Video — centered, sized to fit the fold on laptop viewports */}
      <div className="relative mx-auto mt-6 max-w-2xl px-4 sm:mt-8 sm:px-6 lg:mt-8">
        <VSLVideo />
        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
          Robert Miller, CEO · Founder presentation
        </p>
      </div>

      {/* CTA directly under the video */}
      <div className="relative mx-auto mt-6 flex max-w-3xl flex-col items-center gap-3 px-5 sm:mt-8 sm:px-6">
        <a
          href="#book-a-call"
          className="group inline-flex h-12 w-full max-w-md items-center justify-center gap-3 bg-amber px-8 text-sm font-medium uppercase tracking-wide text-bg-deep transition-all hover:bg-amber-glow hover:gap-5 active:translate-y-px sm:h-14 sm:text-[15px]"
        >
          Book a private call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
          30 min · No obligation
        </span>
      </div>

      {/* Trust microstrip — centered rule above, stacked */}
      <div className="relative mx-auto mt-10 max-w-3xl px-5 sm:mt-12 sm:px-6">
        <div className="mx-auto h-px w-48 bg-gradient-to-r from-transparent via-border to-transparent lg:w-64" />
        <dl className="mt-7 grid grid-cols-3 gap-6">
          <div className="text-center">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
              Verified by
            </dt>
            <dd className="mt-1.5 font-serif text-base text-text-primary">
              MyFXBook
            </dd>
          </div>
          <div className="text-center">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
              Live since
            </dt>
            <dd className="mt-1.5 font-serif text-base text-text-primary tabular-nums">
              2018
            </dd>
          </div>
          <div className="text-center">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
              Total return
            </dt>
            <dd className="mt-1.5 font-serif text-base text-amber tabular-nums">
              1,306%
              <span className="ml-1 text-xs font-mono text-amber/70 relative -top-1">
                *
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stats strip — superscripted asterisk, not inline
// ─────────────────────────────────────────────────────────────────────────────

function StatsStrip() {
  return (
    <section className="relative border-y border-border bg-bg-surface/30">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-14 lg:py-16">
        {/* Hero stat — dominant */}
        <div className="mx-auto max-w-md text-center">
          <div className="flex items-baseline justify-center font-serif tracking-tight text-amber">
            <span
              className="tabular-nums"
              style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)" }}
            >
              1,306
            </span>
            <span
              className="ml-1 text-amber/80"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              %
            </span>
            <span className="ml-1 font-mono text-sm text-amber/60 relative -top-8">
              *
            </span>
          </div>
          <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
            Verified total return
          </div>
        </div>

        {/* Supporting stats — smaller, on a hairline rule */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-6 border-t border-border/60 pt-8">
          <div className="text-center">
            <div className="font-serif text-2xl text-text-primary tabular-nums sm:text-3xl">
              2018
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
              Live track record since
            </div>
          </div>
          <div className="text-center">
            <div className="font-serif text-2xl text-text-primary tabular-nums sm:text-3xl">
              24/7
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
              Automated execution
            </div>
          </div>
          <div className="text-center">
            <div className="font-serif text-2xl text-text-primary tabular-nums sm:text-3xl">
              100
              <span className="text-text-secondary">%</span>
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
              You keep the profits
            </div>
          </div>
        </div>

        <p className="mt-8 text-center font-mono text-[10px] italic text-text-muted">
          <span className="mr-0.5 not-italic text-amber">*</span>
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
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
          Why Gold Alpha
        </p>
        <h2 className="font-serif text-h2 leading-[1.08] tracking-tight text-text-primary text-balance">
          Built for the investor who already has a portfolio — and wants a
          better one.
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-body text-text-secondary leading-relaxed">
          Three reasons clients choose Gold Alpha as the algorithmic sleeve of
          their portfolio.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl px-5 sm:mt-14 sm:px-6">
        <div>
          {PILLARS.map((p, i) => (
            <article
              key={p.n}
              className={[
                "grid grid-cols-[auto_1fr] gap-x-6 py-7 first:pt-0 sm:py-8",
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
            </article>
          ))}
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
  return (
    <section className="relative overflow-hidden border-y border-border bg-bg-surface/30 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            How it works
          </p>
          <h2 className="font-serif text-h2 leading-tight text-text-primary text-balance">
            First call to live trading — in under 30 minutes of your time.
          </h2>
        </div>

        {/* Desktop — horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-3">
            {/* Connector line — behind dots */}
            <div
              aria-hidden="true"
              className="absolute left-[16.67%] right-[16.67%] top-[1.25rem] h-px bg-border"
            />
            <div
              aria-hidden="true"
              className="absolute left-[16.67%] top-[1.25rem] h-px bg-amber"
              style={{ width: "66.67%" }}
            />

            {STEPS.map((step) => (
              <div
                key={step.n}
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
              </div>
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
              {STEPS.map((step) => (
                <div
                  key={step.n}
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
                </div>
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
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
          What&apos;s included
        </p>
        <h2 className="font-serif text-h3 leading-tight text-text-primary text-balance">
          Installed, monitored, and maintained by our team.
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-body text-text-secondary leading-relaxed">
          Gold Alpha ships as a fully-managed install. Your call covers
          pricing, brokerage setup, and the exact onboarding timeline.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl px-5 sm:mt-14 sm:px-6">
        <ul className="divide-y divide-border/60 border-y border-border/60">
          {INCLUDES.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 py-4 text-body text-text-secondary"
            >
              <span className="mt-[0.35em] flex h-4 w-4 shrink-0 items-center justify-center bg-amber/[0.07]">
                <Check className="h-3 w-3 text-amber" strokeWidth={2.5} />
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <a
            href="#book-a-call"
            className="group inline-flex min-h-[44px] items-center gap-2 border-b border-amber/40 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-amber transition-all hover:border-amber hover:gap-3"
          >
            Schedule onboarding call
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Final CTA — warm-white inversion (site's existing light-section pattern)
// ─────────────────────────────────────────────────────────────────────────────

function CalendlyEmbed() {
  const [loaded, setLoaded] = useState(false);
  const [hostname, setHostname] = useState("algoalpha.co");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHostname(window.location.hostname);
    }
  }, []);

  const url = `${CALENDLY_URL}?embed_domain=${hostname}&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&primary_color=cd6600&background_color=f6f2ea&text_color=1a1a1a`;

  return (
    <section
      id="book-a-call"
      className="relative overflow-hidden bg-warm-white py-20 text-bg-deep sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.12 0.01 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.12 0.01 60) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 50% 0%, oklch(0.75 0.16 65 / 0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-amber-dim">
            Ready when you are
          </p>
          <h2 className="font-serif text-h2 leading-[1.05] tracking-tight text-bg-deep text-balance">
            Book a private call with our team.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body text-bg-deep/60 leading-relaxed">
            Thirty minutes. Zero pressure. By the end of the call you&apos;ll
            know exactly how Gold Alpha fits — or doesn&apos;t fit — into your
            portfolio.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full">
          <div
            className="relative overflow-hidden rounded-lg border border-bg-deep/10 shadow-[0_12px_40px_-20px_oklch(0.12_0.01_60/0.25)]"
            style={{ backgroundColor: "#f6f2ea" }}
          >
            {/* Skeleton until iframe loads */}
            {!loaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center">
                    <span className="absolute h-10 w-10 animate-ping rounded-full border border-amber/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber" />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bg-deep/60">
                    Loading your calendar…
                  </p>
                </div>
              </div>
            )}
            <iframe
              src={url}
              title="Book a call with the Algo Alpha team"
              className="relative z-0 h-[720px] w-full"
              frameBorder={0}
              loading="lazy"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>

        <p className="mx-auto mt-6 text-center font-mono text-[11px] italic text-bg-deep/60">
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
      <Hero />
      <StatsStrip />
      <WhyGoldAlpha />
      <HowItWorks />
      <TrustpilotReviews />
      <Includes />
      <CalendlyEmbed />
      <PageDisclaimer />
    </main>
  );
}
