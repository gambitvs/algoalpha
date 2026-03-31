import { clientResults } from "@/lib/constants";

export default function ClientResults() {
  return (
    <section className="px-6 lg:px-8 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Results
          </p>
          <h2 className="text-h2 font-serif text-text-primary max-w-3xl">
            Client Performance
          </h2>
          <p className="mt-5 max-w-xl text-body text-text-secondary leading-relaxed">
            Real returns from real portfolios. Every number below represents a
            verified client account running Algo Alpha&apos;s technology.
          </p>
        </div>

        {/* Results columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {clientResults.map((client) => (
            <div
              key={client.name}
              className="border-t border-border pt-8 pb-10 lg:pr-10 last:lg:pr-0"
            >
              <p className="font-mono text-[clamp(2.5rem,4vw,3.5rem)] font-medium leading-none text-amber tracking-tight">
                {client.returnPercent}
              </p>
              <p className="text-h3 font-serif text-text-primary mt-4">
                {client.name}
              </p>
              <p className="text-body text-text-secondary leading-relaxed mt-3 max-w-sm">
                {client.description}
              </p>
            </div>
          ))}
        </div>

        {/* Required disclaimer */}
        <p className="mt-10 pt-6 border-t border-border text-[11px] text-text-muted leading-relaxed max-w-3xl">
          Past performance is not a guarantee or a reliable indicator of future
          results. Individual results may vary. The returns shown depend on
          various factors including initial capital, timing, and market
          conditions. Algo Alpha is a software provider and does not guarantee
          any specific amount of growth. Please read our{" "}
          <a
            href="/disclosures"
            className="text-amber hover:text-amber-glow transition-colors underline underline-offset-2"
          >
            full disclosures
          </a>{" "}
          for important details.
        </p>
      </div>
    </section>
  );
}
