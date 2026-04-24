"use client";

import { type ReactNode } from "react";

interface SectionEntranceProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function SectionEntrance({
  children,
  className,
}: SectionEntranceProps) {
  return <div className={className}>{children}</div>;
}
