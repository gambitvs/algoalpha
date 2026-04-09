"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-nav";

/**
 * Routes where the sidebar, footer, and mobile nav are hidden.
 * These are funnel/application pages that use a standalone layout.
 */
const NO_SIDEBAR_ROUTES = [
  "/apply",
  "/call-booked",
  "/pre-call",
  "/calendar",
  "/dq",
  "/referral-submission",
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

  const hideSidebar = NO_SIDEBAR_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (hideSidebar) {
    return <main>{children}</main>;
  }

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
