import { Button } from "@/components/ui/button";

const stats = [
  { value: "400+", label: "Users on Our Technologies" },
  { value: "$300-500M", label: "Daily algo trading volume" },
  { value: "2023", label: "Established" },
];

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

        {/* Body */}
        <div className="mt-10 max-w-3xl space-y-5">
          <p className="text-body text-text-secondary leading-relaxed">
            Algo Alpha is dedicated to helping investors achieve a prosperous
            financial future by leveraging hedge fund technology in their very
            own portfolios. For years, this technology was reserved for
            institutions with deep pockets and teams of quants.
          </p>
          <p className="text-body text-text-secondary leading-relaxed">
            We embody our core values to help clients take the emotions out of
            trading and take calculated risks to outperform traditional routes.
            Every algorithm we deploy is built with institutional-grade risk
            controls — because protecting capital matters as much as growing it.
          </p>
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-b border-border py-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-2xl sm:text-3xl font-medium text-amber tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="/apply"
          >
            <Button
              className="h-11 bg-amber px-8 text-sm font-medium uppercase tracking-wide text-bg-deep transition-colors hover:bg-amber-glow"
              style={{ borderRadius: 0 }}
            >
              Request a Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
