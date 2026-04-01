import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPA Certifications",
  description:
    "Independent CPA verification of Algo Alpha's algorithmic trading strategies.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
