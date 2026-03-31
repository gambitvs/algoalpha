"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  TrendingUp,
  Play,
  LogIn,
  Sun,
  Moon,
  type LucideIcon,
} from "lucide-react";
import { sidebarNavItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Users,
  BarChart3,
  TrendingUp,
  Play,
  LogIn,
};

export function Sidebar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("light", stored === "light");
    }
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  }

  // Separate nav links from bottom actions
  const navLinks = sidebarNavItems.filter(
    (item) => item.label !== "APPLY NOW" && item.label !== "Member Login",
  );
  const applyItem = sidebarNavItems.find((item) => item.label === "APPLY NOW");
  const loginItem = sidebarNavItems.find(
    (item) => item.label === "Member Login",
  );

  function isActive(item: (typeof sidebarNavItems)[number]): boolean {
    if (item.type === "route") {
      return pathname === item.target;
    }
    if (item.type === "anchor") {
      // Anchor items are homepage sections — active when on homepage
      return pathname === "/";
    }
    return false;
  }

  function getHref(item: (typeof sidebarNavItems)[number]): string {
    if (item.type === "anchor") {
      // When on homepage, just use the hash; otherwise navigate to /{target}
      return item.target;
    }
    return item.target;
  }

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 w-[200px] h-screen flex-col bg-bg-deep border-r border-border z-40">
      {/* Logo */}
      <div className="px-5 py-6">
        <Link href="/" className="block">
          <Image
            src="/images/logo-header.png"
            alt="Algo Alpha"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col gap-1 px-3 mt-2">
        {navLinks.map((item) => {
          const Icon = iconMap[item.icon];
          const active = isActive(item);

          return (
            <Link
              key={item.label}
              href={getHref(item)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors rounded-sm",
                active
                  ? "border-l-2 border-amber bg-white/5 text-text-primary"
                  : "border-l-2 border-transparent text-text-secondary hover:text-text-primary",
              )}
            >
              {Icon && <Icon className="w-4 h-4 shrink-0" />}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div className="px-3 mb-2">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-sm"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 shrink-0" />
          ) : (
            <Moon className="w-4 h-4 shrink-0" />
          )}
          <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>

      {/* Bottom Section */}
      <div className="px-3 pb-6 pt-4 border-t border-border flex flex-col gap-3">
        {applyItem && (
          <a
            href={applyItem.target}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-amber text-bg-deep text-center text-sm font-bold py-2.5 rounded-none uppercase tracking-wide hover:bg-amber-glow transition-colors"
          >
            {applyItem.label}
          </a>
        )}
        {loginItem && (
          <Link
            href={loginItem.target}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <LogIn className="w-4 h-4" />
            <span>{loginItem.label}</span>
          </Link>
        )}
      </div>
    </aside>
  );
}
