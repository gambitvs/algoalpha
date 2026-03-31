import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutHero() {
  return (
    <section className="px-6 lg:px-8 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
          About Algo Alpha
        </p>

        {/* Heading */}
        <h1 className="text-h1 font-serif text-text-primary max-w-4xl">
          Institutional Trading Technology, Accessible to Every Investor
        </h1>

        {/* Two-column body */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-5">
            <p className="text-body text-text-secondary leading-relaxed">
              Algo Alpha is dedicated to helping investors achieve a prosperous
              financial future by leveraging hedge fund technology in their very
              own portfolios. For years, this technology was reserved for
              institutions with deep pockets and teams of quants.
            </p>
            <p className="text-body text-text-secondary leading-relaxed">
              We embody our core values to help clients take the emotions out of
              trading and take calculated risks to outperform traditional
              routes. Every algorithm we deploy is built with
              institutional-grade risk controls — because protecting capital
              matters as much as growing it.
            </p>

            {/* Key stat callout */}
            <div className="border-l-2 border-amber/30 pl-5 py-2 mt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted mb-1">
                Since 2023
              </p>
              <p className="text-body text-text-primary leading-relaxed">
                We&apos;ve helped investors leverage hedge fund technology in
                their own portfolios — with verified, transparent results.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="https://lp.algoalpha.co/portfolio-accelerator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="h-11 bg-amber px-8 text-sm font-medium uppercase tracking-wide text-bg-deep transition-colors hover:bg-amber-glow"
                  style={{ borderRadius: 0 }}
                >
                  Apply Now
                </Button>
              </a>
            </div>
          </div>

          {/* Founder pull quote */}
          <div className="flex flex-col justify-center">
            <div className="relative rounded-lg border border-border bg-bg-surface p-5 sm:p-8 lg:p-10">
              <span
                className="absolute top-4 left-6 font-serif text-[5rem] leading-none text-amber/20 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="relative pt-8">
                <p className="text-lg sm:text-xl lg:text-2xl font-serif text-warm-white leading-relaxed">
                  There are very few things that I put my face on, because I
                  care about reputation. I noticed many competitors didn&apos;t
                  have adequate risk controls — so I dove in full time to help
                  investors have great returns with proper risk management in
                  place.
                </p>
                <footer className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  <div className="h-px w-8 bg-amber" />
                  <div>
                    <p className="text-sm font-medium text-warm-white">
                      Robert J Miller
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-amber">
                      Founder &amp; CEO
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
