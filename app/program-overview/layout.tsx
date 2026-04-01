import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Overview",
  description:
    "Learn how to get started with Algo Alpha's algorithmic trading programs in 6 simple steps.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
