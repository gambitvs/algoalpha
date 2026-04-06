"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const JOTFORM_ID = "260954620711151";

export default function JotFormApplication() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Load the JotForm embed handler script
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    script.onload = () => {
      if (typeof window !== "undefined" && "jotformEmbedHandler" in window) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).jotformEmbedHandler(
          `iframe[id='JotFormIFrame-${JOTFORM_ID}']`,
          "https://form.jotform.com/",
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-deep text-text-primary">
      {/* Header bar */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-text-muted hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <Image
            src="/images/logo-header.png"
            alt="Algo Alpha"
            width={120}
            height={30}
            className="h-auto w-24 opacity-60"
          />
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12 lg:py-20">
        {/* Section header */}
        {prefersReducedMotion ? (
          <div className="text-center mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              Application
            </p>
            <h1 className="mt-4 text-h2 font-serif text-text-primary">
              See if You Qualify
            </h1>
            <p className="mt-3 text-body text-text-secondary max-w-lg mx-auto">
              Complete the form below and our team will follow up to discuss
              your goals and the right strategy for your portfolio.
            </p>
          </div>
        ) : (
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              Application
            </p>
            <h1 className="mt-4 text-h2 font-serif text-text-primary">
              See if You Qualify
            </h1>
            <p className="mt-3 text-body text-text-secondary max-w-lg mx-auto">
              Complete the form below and our team will follow up to discuss
              your goals and the right strategy for your portfolio.
            </p>
          </motion.div>
        )}

        {/* JotForm embed */}
        <div className="relative">
          {/* Loading skeleton */}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-bg-surface border border-border">
              <div className="flex flex-col items-center gap-3">
                <div className="w-6 h-6 border-2 border-amber/30 border-t-amber rounded-full animate-spin" />
                <p className="font-mono text-[11px] text-text-muted">
                  Loading application...
                </p>
              </div>
            </div>
          )}

          {/* Iframe container */}
          {prefersReducedMotion ? (
            <div className="rounded-lg overflow-hidden bg-bg-surface border border-border">
              <iframe
                ref={iframeRef}
                id={`JotFormIFrame-${JOTFORM_ID}`}
                title="Algo Alpha Application"
                src={`https://form.jotform.com/${JOTFORM_ID}`}
                allow="geolocation; microphone; camera; fullscreen; payment"
                className="w-full border-none"
                style={{ minHeight: 700 }}
                onLoad={() => setLoaded(true)}
              />
            </div>
          ) : (
            <motion.div
              className="rounded-lg overflow-hidden bg-bg-surface border border-border"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.15 }}
            >
              <iframe
                ref={iframeRef}
                id={`JotFormIFrame-${JOTFORM_ID}`}
                title="Algo Alpha Application"
                src={`https://form.jotform.com/${JOTFORM_ID}`}
                allow="geolocation; microphone; camera; fullscreen; payment"
                className="w-full border-none"
                style={{ minHeight: 700 }}
                onLoad={() => setLoaded(true)}
              />
            </motion.div>
          )}
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs italic text-text-muted">
          Your information is secure and will only be used to discuss your
          portfolio goals.
        </p>
      </div>
    </div>
  );
}
