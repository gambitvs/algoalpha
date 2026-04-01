import Link from "next/link";

export default function PageDisclaimer() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 border-t border-border">
      <p className="font-mono text-[11px] text-text-muted italic leading-relaxed">
        Sources: Algo Alpha&apos;s softwares are verifiable through
        MyFXBook.com, performance ranges due to strategy selected, and
        counterparties trusted. These results are from inception to March 2026.
        Past performance &ne; future results. Read our{" "}
        <Link
          href="/disclosures"
          className="text-amber/60 underline underline-offset-2 hover:text-amber transition-colors"
        >
          Disclosures
        </Link>
        .
      </p>
    </div>
  );
}
