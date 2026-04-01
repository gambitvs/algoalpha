"use client";

interface ComingSoonCardProps {
  name: string;
  strategy: string;
}

export default function ComingSoonCard({
  name,
  strategy,
}: ComingSoonCardProps) {
  return (
    <div className="relative rounded-lg border border-border bg-bg-surface p-4 sm:p-5 overflow-hidden transition-all duration-300 hover:border-amber/30 hover:shadow-[0_0_20px_oklch(0.75_0.16_65/0.05)] group">
      {/* Shimmer border animation */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.75 0.16 65 / 0.06), transparent)",
          backgroundSize: "200% 100%",
          animation: "shimmer-border 3s ease-in-out infinite",
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-h3 font-serif text-text-primary leading-tight">
            {name}
          </h3>
          <span className="mt-1 inline-block font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 text-text-secondary bg-bg-elevated border border-border">
            {strategy}
          </span>
        </div>

        {/* Coming Soon center content */}
        <div className="flex flex-col items-center justify-center py-8">
          {/* Pulsing dot */}
          <span className="inline-block w-3 h-3 rounded-full bg-amber/40 animate-pulse mb-4" />

          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Coming Soon
          </span>
          <p className="mt-2 text-small text-text-muted text-center">
            Strategy launching soon
          </p>

          <a
            href="https://lp.algoalpha.co/portfolio-accelerator"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 font-mono text-micro text-amber/60 hover:text-amber transition-colors"
          >
            Get Notified &rarr;
          </a>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-bg-surface/80 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes shimmer-border {
          0%,
          100% {
            background-position: -200% 0;
          }
          50% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}
