"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-nav";

/**
 * Routes that use a standalone layout — no sidebar, no footer, no mobile nav.
 * These are true funnel/wizard pages.
 */
const NO_CHROME_ROUTES = [
  "/apply",
  "/call-booked",
  "/pre-call",
  "/calendar",
  "/dq",
  "/referral-submission",
  "/gold-direct-book-call",
];

/**
 * Routes that hide the sidebar (immersive content pages) but KEEP the footer.
 */
const NO_SIDEBAR_ROUTES = [
  ...NO_CHROME_ROUTES,
  "/showcase",
  "/funded",
  "/onboarding",
];

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Initialize theme on all pages (sidebar only mounts on non-funnel pages)
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    if (stored) {
      document.documentElement.classList.toggle("light", stored === "light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  const matches = (routes: string[]) =>
    routes.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`),
    );

  const hideChrome = matches(NO_CHROME_ROUTES);
  const hideSidebar = matches(NO_SIDEBAR_ROUTES);

  // True funnel pages — no sidebar, no footer, no mobile nav
  if (hideChrome) {
    return <main>{children}</main>;
  }

  // Immersive content pages — no sidebar, but keep footer
  if (hideSidebar) {
    return (
      <>
        <main style={{ minWidth: 0, overflowX: "clip" }}>{children}</main>
        <Footer />
      </>
    );
  }

  // Standard pages — sidebar, footer, mobile nav all visible
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div
          className="flex-1 flex flex-col min-h-screen lg:ml-[200px]"
          style={{ minWidth: 0, overflowX: "clip" }}
        >
          <main className="flex-1 pb-20 lg:pb-0">{children}</main>
          <Footer />
        </div>
      </div>
      <MobileNav />
    </>
  );
}
