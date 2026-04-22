import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prepare for Your Call",
  description:
    "Watch the pre-call modules before your Algo Alpha consultation so we can spend our time on your portfolio, not the basics.",
};

export default function JoinPreCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
