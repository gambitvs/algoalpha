"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  BarChart3,
  Sparkles,
  LogIn,
  type LucideIcon,
} from "lucide-react";
import { mobileNavItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Users,
  BarChart3,
  Sparkles,
  LogIn,
};

export function MobileNav() {
  const pathname = usePathname();

  function isActive(item: (typeof mobileNavItems)[number]): boolean {
    if (item.type === "route") {
      return pathname === item.target;
    }
    if (item.type === "anchor") {
      return pathname === "/";
    }
    return false;
  }

  function getHref(item: (typeof mobileNavItems)[number]): string {
    return item.target;
  }

  const isApplyTab = (label: string) => label === "Apply";

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-bg-deep/90 backdrop-blur-xl border-t border-border z-50 lg:hidden pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-full max-w-lg mx-auto px-2">
        {mobileNavItems.map((item) => {
          const Icon = iconMap[item.icon];
          const active = isActive(item);
          const isApply = isApplyTab(item.label);
          const isExternal = item.type === "external";

          const content = (
            <div
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 w-full py-1 transition-colors",
                isApply
                  ? "text-amber"
                  : active
                    ? "text-amber"
                    : "text-text-secondary",
              )}
            >
              {Icon && (
                <Icon
                  className={cn(
                    "w-5 h-5",
                    isApply && "drop-shadow-[0_0_6px_oklch(0.75_0.16_65)]",
                  )}
                />
              )}
              <span className="text-[9px] sm:text-[10px] leading-tight font-medium">
                {item.label}
              </span>
              {active && !isApply && (
                <span className="w-1 h-1 rounded-full bg-amber mt-0.5" />
              )}
              {isApply && (
                <span className="w-1 h-1 rounded-full bg-amber mt-0.5" />
              )}
            </div>
          );

          if (isExternal) {
            return (
              <a
                key={item.label}
                href={item.target}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center"
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={getHref(item)}
              className="flex-1 flex items-center justify-center"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
