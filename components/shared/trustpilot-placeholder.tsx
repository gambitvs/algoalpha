"use client";

import { Star } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

function ShimmerCard() {
  return (
    <div className="rounded-lg border border-border bg-bg-surface p-5">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber/20 text-amber/20" />
        ))}
      </div>
      {/* Shimmer text lines */}
      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-bg-elevated animate-pulse" />
        <div className="h-3 w-4/5 rounded bg-bg-elevated animate-pulse" />
        <div className="h-3 w-3/5 rounded bg-bg-elevated animate-pulse" />
      </div>
      {/* Author */}
      <div className="mt-4 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-bg-elevated animate-pulse" />
        <div className="h-2.5 w-20 rounded bg-bg-elevated animate-pulse" />
      </div>
    </div>
  );
}

export default function TrustpilotPlaceholder() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            What Our Clients Say
          </p>
          <h2 className="text-h3 font-serif text-text-primary mb-8">
            TrustPilot Reviews
          </h2>
        </SectionEntrance>

        <SectionEntrance delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
          </div>
          <p className="mt-6 text-center font-mono text-micro text-text-muted">
            TrustPilot integration coming soon
          </p>
        </SectionEntrance>
      </div>
    </section>
  );
}
