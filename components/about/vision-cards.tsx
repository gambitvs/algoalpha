const visionBlocks = [
  {
    number: "01",
    title: "Markets Are Largely Controlled By Trading Algorithms",
    description:
      "Nearly everything in our life has an algorithm and in financial markets over 70% of the activity in day in and day out is by algorithms.",
  },
  {
    number: "02",
    title: "Modernize Portfolio Diversification",
    description:
      "The old 60/40 portfolio has silently eroded portfolio growth for too long. We're in a new era, one that requires algorithmic trading strategies to outperform traditional performance.",
  },
  {
    number: "03",
    title: "Outperform Traditional Performance",
    description:
      "With profitable trades compounding over time, our goal is to increase buying power through consistent, risk-managed returns. Small, steady gains compound into transformative portfolio growth, the same principle that built every great institutional fund.",
  },
];

export default function VisionCards() {
  return (
    <section className="px-6 lg:px-8 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Our Vision
          </p>
          <h2 className="text-h2 font-serif text-text-primary max-w-3xl">
            AI &amp; Algorithmic Trading Is Here
          </h2>
        </div>

        {/* Vision blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {visionBlocks.map((block) => (
            <div
              key={block.number}
              className="border-t border-border pt-8 pb-10 lg:pr-10 last:lg:pr-0 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-8"
            >
              <span className="font-mono text-[clamp(3rem,5vw,4.5rem)] font-medium leading-none text-amber/15 select-none">
                {block.number}
              </span>
              <h3 className="text-h3 font-serif text-text-primary mt-4 mb-4">
                {block.title}
              </h3>
              <p className="text-body text-text-secondary leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
