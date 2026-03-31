import Image from "next/image";
import { AlertTriangle } from "lucide-react";

const performanceImages = [
  {
    src: "/images/performance-alltime-feb2023.png",
    alt: "All Time Return February 2023 to July 2024",
    caption:
      "Cumulative return since inception — February 2023 through July 2024",
  },
  {
    src: "/images/performance-daniel.png",
    alt: "Performance Results — Daniel — March 2024",
    caption: "Live client account performance — Daniel, March 2024",
  },
  {
    src: "/images/performance-adam.png",
    alt: "Performance Results — Adam — March 2024",
    caption: "Live client account performance — Adam, March 2024",
  },
  {
    src: "/images/performance-alltime.png",
    alt: "All Time Return",
    caption: "All-time verified track record across all trading pairs",
  },
];

export default function PerformanceGallery() {
  return (
    <section className="px-6 lg:px-8 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Track Record
          </p>
          <h2 className="text-h2 font-serif text-text-primary max-w-3xl">
            Verified Performance Data
          </h2>
          <p className="mt-5 max-w-xl text-body text-text-secondary leading-relaxed">
            All strategies are independently verified through MyFXBook. These
            are real results from live accounts — not backtests or simulations.
          </p>
        </div>

        {/* Disclaimer banner */}
        <div className="mb-10 flex gap-4 border-t border-b border-border py-5">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
          <p className="text-small text-text-muted leading-relaxed">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-secondary">
              Performance Disclaimer
            </span>{" "}
            — Past performance is not a guarantee or reliable indicator of
            future results. We are not financial advisors, asset managers, or
            investment advisors. Algo Alpha is a software provider that provides
            tools to traders. The exceptional growth numbers achieved by some of
            our users depend on various factors, and we do not guarantee any
            specific amount of growth or success of any software application.
          </p>
        </div>

        {/* Screenshot grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {performanceImages.map((image) => (
            <div key={image.src} className="group">
              <div className="relative aspect-[4/3] overflow-hidden border border-border bg-bg-surface">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-3 transition-opacity group-hover:opacity-90"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
