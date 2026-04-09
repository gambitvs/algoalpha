"use client";

import Image from "next/image";
import Link from "next/link";

export default function OnboardingHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo-header.png"
            alt="Algo Alpha"
            width={120}
            height={30}
            className="h-auto w-24 header-logo-dark"
          />
          <Image
            src="/images/logo-header-dark.png"
            alt="Algo Alpha"
            width={120}
            height={30}
            className="h-auto w-24 header-logo-light"
          />
        </Link>

        <a
          href="https://app.algoalpha.co"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-amber hover:text-amber-glow transition-colors"
        >
          Member Login
        </a>
      </div>
    </header>
  );
}
