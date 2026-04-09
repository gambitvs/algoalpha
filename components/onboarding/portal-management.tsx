"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

export default function PortalManagement() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SectionEntrance>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              Management
            </p>
            <h2 className="text-h2 font-serif text-text-primary mt-4">
              How Easy is Management After Setup?
            </h2>
            <p className="text-body text-text-secondary max-w-lg leading-relaxed mt-4">
              All of our clients here at Algo Alpha receive their own private
              portal, which allows them to configure, turn on or off, and see
              performance for their account. Users sync their accounts to the
              platform for easy management and reporting.
            </p>
          </SectionEntrance>

          <SectionEntrance delay={150}>
            {playing ? (
              <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/c58qtx8rgr?autoPlay=true"
                  title="Portal Demo"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group relative aspect-video w-full rounded-lg bg-bg-surface border border-border overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber/90 transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-5 h-5 text-bg-deep fill-bg-deep ml-0.5" />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    Watch Portal Demo
                  </p>
                </div>
              </button>
            )}
          </SectionEntrance>
        </div>
      </div>
    </section>
  );
}
