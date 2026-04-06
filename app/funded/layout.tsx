import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funded Trader Program — Trade with 10x Your Capital",
  description:
    "Deposit $5,000 and trade with $50,000. Keep 100% of profits. No prop firm challenges, no profit splits, no lockups. CPA-verified performance.",
  openGraph: {
    title: "Funded Trader Program | Algo Alpha",
    description:
      "Deploy 10x your capital with Algo Alpha's funded trader program. Three CPA-verified strategies, real broker capital, and 100% of the profits are yours.",
    type: "website",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Algo Alpha Funded Trader Program",
      },
    ],
  },
};

export default function FundedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
