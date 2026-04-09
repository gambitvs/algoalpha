import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding — Get Setup and Trading",
  description:
    "Welcome to Algo Alpha. Watch the setup video, choose your strategy, and get trading in as little as 30 minutes.",
  openGraph: {
    title: "Onboarding | Algo Alpha",
    description:
      "Get setup and trading fast. Choose between Straight Equity or Funded Trader programs, follow the steps, and go live.",
    type: "website",
  },
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
