import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Showcase",
  description:
    "Live performance data for all 6 Algo Alpha trading strategies. Verified by MyFXBook.",
};

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
