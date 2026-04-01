import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews & Case Studies",
  description:
    "Read real client experiences with Algo Alpha's algorithmic trading strategies.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
