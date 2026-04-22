import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Alpha — Direct Book a Call",
  description:
    "For high-net-worth executives: install our Gold AI trading algorithm and generate monthly profits with hands-off management.",
};

export default function GoldDirectBookCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
