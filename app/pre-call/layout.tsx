import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prepare for Your Call",
};

export default function PreCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
