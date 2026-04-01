import type { Metadata } from "next";
import { instrumentSerif, geistSans, geistMono } from "@/lib/fonts";
import { ClientLayout } from "@/components/layout/client-layout";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://algoalpha.co",
  ),
  title: {
    default:
      "Algo Alpha - Institutional Trading Technology Made Available For Every Investor",
    template: "%s | Algo Alpha",
  },
  description:
    "Algo Alpha's market-agnostic trading systems reduce emotion, standardize execution, and seek consistent performance across forex, crypto, and metals.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Algo Alpha",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Algo Alpha - Institutional Trading Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.className} min-h-full`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
