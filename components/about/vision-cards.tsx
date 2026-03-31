const visionBlocks = [
  {
    number: "01",
    title: "Increased Money Supply",
    description:
      "The federal reserve continues to expand the money supply, keeping the U.S. dollar at the backbone of FOREX and other global markets. This macro environment creates persistent opportunities for algorithmic strategies that can identify and act on currency movements faster than any human trader.",
  },
  {
    number: "02",
    title: "Portfolio Diversification",
    description:
      "The traditional 60/40 portfolio is outdated. New technological developments in algorithmic trading have created an entirely new asset class — one that can generate returns uncorrelated to equities, bonds, or real estate. This is the diversification opportunity of a generation.",
  },
  {
    number: "03",
    title: "Compounding Growth",
    description:
      "With profitable trades compounding over time, our goal is to increase buying power through consistent, risk-managed returns. Small, steady gains compound into transformative portfolio growth — the same principle that built every great institutional fund.",
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
            The Thesis Behind Algo Alpha
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
