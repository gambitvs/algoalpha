import Link from "next/link";
import Image from "next/image";

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg-deep flex flex-col">
      {/* Header bar */}
      <header className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-header.png"
            alt="Algo Alpha"
            width={140}
            height={32}
            className="h-8 w-auto header-logo-dark"
            priority
          />
          <Image
            src="/images/logo-header-dark.png"
            alt="Algo Alpha"
            width={140}
            height={32}
            className="h-8 w-auto header-logo-light"
            priority
          />
        </Link>
        <a
          href="https://app.algoalpha.co"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs sm:text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          Already a member?{" "}
          <span className="text-amber underline underline-offset-4">Login</span>
        </a>
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-start justify-center px-4 pb-16 pt-4 sm:pt-8">
        <div className="w-full max-w-[640px]">{children}</div>
      </div>
    </div>
  );
}
