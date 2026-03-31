import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultation Booked",
};

export default function CallBookedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
