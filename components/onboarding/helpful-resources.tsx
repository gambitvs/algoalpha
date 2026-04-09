"use client";

import { useState } from "react";
import { Play, UserPlus, ArrowRight } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

export default function HelpfulResources() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Helpful Resources
          </p>
        </SectionEntrance>

        <SectionEntrance delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {/* Card 1: MyFXBook Tutorial Video */}
            <div className="rounded-lg border border-border bg-bg-surface p-5 overflow-hidden">
              {playing ? (
                <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/b16pME-Dsbo?autoplay=1&rel=0"
                    title="MyFXBook Tutorial"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group relative aspect-video w-full rounded-lg overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
                >
                  <img
                    src="https://img.youtube.com/vi/b16pME-Dsbo/maxresdefault.jpg"
                    alt="How to Make Your MyFXBook Link Public"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber/90 transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-5 h-5 text-bg-deep fill-bg-deep ml-0.5" />
                    </div>
                  </div>
                </button>
              )}
              <h3 className="font-serif text-lg text-text-primary mt-4">
                How to Make Your MyFXBook Link Public
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                Make your performance link public for sharing with friends and
                family.
              </p>
            </div>

            {/* Card 2: Portal Registration */}
            <div className="rounded-lg border border-border bg-bg-surface p-5 overflow-hidden">
              <UserPlus className="w-8 h-8 text-amber mb-3" />
              <h3 className="font-serif text-lg text-text-primary">
                Register for Your Portal
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                Create your account at the Algo Alpha portal to access copy
                trading features.
              </p>
              <a
                href="https://app.algoalpha.co/register"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-amber hover:text-amber-glow transition-colors"
              >
                Register Now <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </SectionEntrance>
      </div>
    </section>
  );
}
