import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Alpha — Book a Private Call",
  description:
    "Install the Gold Alpha algorithm into your portfolio. Capital stays in your name. Our team runs the software. Book a private call.",
};

export default function GoldDirectBookCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
