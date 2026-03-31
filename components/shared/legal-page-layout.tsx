import { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  lastModified?: string;
  children: ReactNode;
}

export function LegalPageLayout({
  title,
  lastModified,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-bg-deep">
      <div className="mx-auto max-w-[800px] px-6 py-24 sm:py-32 md:py-40">
        {/* Page heading */}
        <header className="mb-12">
          <h1 className="font-serif text-h2 text-warm-white">{title}</h1>
          {lastModified && (
            <p className="mt-3 font-mono text-sm text-text-muted">
              Last Modified: {lastModified}
            </p>
          )}
        </header>

        {/* Legal content */}
        <div
          className={[
            /* Base text */
            "text-text-secondary text-base leading-[1.75]",
            /* Headings */
            "[&_h2]:font-serif [&_h2]:text-h3 [&_h2]:text-warm-white [&_h2]:mt-12 [&_h2]:mb-4",
            "[&_h3]:font-sans [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-text-primary [&_h3]:mt-10 [&_h3]:mb-3",
            "[&_h4]:font-sans [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-text-primary [&_h4]:mt-6 [&_h4]:mb-2",
            /* Paragraphs */
            "[&_p]:mb-4",
            /* Strong / bold */
            "[&_strong]:text-text-primary [&_strong]:font-semibold",
            /* Lists */
            "[&_ul]:mb-4 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-1.5",
            "[&_ol]:mb-4 [&_ol]:ml-6 [&_ol]:list-decimal [&_ol]:space-y-1.5",
            "[&_li]:pl-1",
            /* Links */
            "[&_a]:text-amber [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-amber-glow",
            /* Horizontal rules */
            "[&_hr]:my-10 [&_hr]:border-border",
          ].join(" ")}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
