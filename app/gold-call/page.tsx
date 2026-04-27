"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Volume2 } from "lucide-react";

import TrustpilotReviews from "@/components/shared/trustpilot-placeholder";
import PageDisclaimer from "@/components/shared/page-disclaimer";

const VSL_HLS_URL =
  "https://content.apisystem.tech/hls/medias/91ZHtcGEPL5GQmtTCTib/media/transcoded_videos/cts-e3f61770c2b85aa9_,360,480,720,1080,p.mp4.urlset/master.m3u8";

const CALENDLY_URL =
  "https://calendly.com/algo-alpha-advisory-team/alpha-investor-consultation-call-clone-1";

// ─────────────────────────────────────────────────────────────────────────────
// Page-level grain overlay
// ─────────────────────────────────────────────────────────────────────────────

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
// VSL — silent autoplay preview, click-to-unmute
// ─────────────────────────────────────────────────────────────────────────────

function VSLVideo() {
  const [soundOn, setSoundOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: { destroy: () => void } | null = null;

    const startPlayback = () => {
      video.muted = true;
      video.play().catch(() => undefined);
    };

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VSL_HLS_URL;
      startPlayback();
    } else {
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
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        autoPlay
        playsInline
        controls={soundOn}
        preload="auto"
      />

      {!soundOn && (
        <button
          type="button"
          onClick={enableSound}
          className="group absolute inset-0 z-10 flex h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
          aria-label="Enable sound and watch the Gold Alpha presentation"
        >
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
          <span className="absolute left-0 top-0 z-10 flex items-center gap-2 p-5">
            <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-amber shadow-[0_0_8px_theme(colors.amber)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/90">
              Founder presentation · Muted preview
            </span>
          </span>
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
// Hero — headline + video + CTA
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-6 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 65% 50% at 50% 18%, oklch(0.75 0.16 65 / 0.1), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-amber">
            <span className="h-1 w-1 rounded-full bg-amber" />
            Exclusive for high-net-worth executives...
          </span>
        </div>

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

        <p className="mx-auto mt-4 max-w-[58ch] text-small text-text-secondary leading-relaxed sm:text-body">
          A mean-reversion gold-trading algorithm installed on your own
          brokerage account. Your capital stays in your name. Our team runs the
          software.
        </p>
      </div>

      <div className="relative mx-auto mt-6 max-w-2xl px-4 sm:mt-8 sm:px-6 lg:mt-8">
        <VSLVideo />
        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
          Robert Miller, CEO · Founder presentation
        </p>
      </div>

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
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Calendly booking
// ─────────────────────────────────────────────────────────────────────────────

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

function CalendlyEmbed() {
  const [loaded, setLoaded] = useState(false);
  const [hostname, setHostname] = useState("algoalpha.co");
  const [utmQuery, setUtmQuery] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    setHostname(window.location.hostname);

    // Forward incoming UTM params into the Calendly embed so they flow into
    // booking events, webhooks, and downstream attribution (GA4, Hyros, FB).
    const params = new URLSearchParams(window.location.search);
    const forwarded = new URLSearchParams();
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) forwarded.set(key, value);
    }
    const qs = forwarded.toString();
    if (qs) setUtmQuery(`&${qs}`);
  }, []);

  const url = `${CALENDLY_URL}?embed_domain=${hostname}&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&primary_color=b45f05&background_color=f6f2ea&text_color=1a1a1a${utmQuery}`;

  return (
    <section
      id="book-a-call"
      className="relative overflow-hidden bg-warm-white py-16 text-bg-deep sm:py-20 lg:py-24"
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

export default function GoldCallPage() {
  return (
    <main className="relative min-h-screen bg-bg-deep text-text-primary">
      <GrainOverlay />
      <Hero />
      <CalendlyEmbed />
      <TrustpilotReviews />
      <PageDisclaimer />
    </main>
  );
}
