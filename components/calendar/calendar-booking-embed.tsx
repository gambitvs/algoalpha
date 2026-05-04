"use client";

import { useEffect, useState } from "react";

const CALENDLY_URL =
  "https://calendly.com/algo-alpha-advisory-team/alpha-investor-consultation-call-clone-1";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export default function CalendarBookingEmbed() {
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
  );
}
