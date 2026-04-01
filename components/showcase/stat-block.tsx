"use client";

interface StatBlockProps {
  label: string;
  value: string;
  highlight?: boolean;
  isLoss?: boolean;
}

export function StatBlock({
  label,
  value,
  highlight = false,
  isLoss = false,
}: StatBlockProps) {
  const valueColor = isLoss
    ? "oklch(0.65 0.14 25)"
    : highlight
      ? "oklch(0.75 0.16 65)"
      : "oklch(0.93 0.01 80)";

  return (
    <div
      className="flex flex-col gap-1 px-4 py-3"
      style={{
        backgroundColor: "oklch(0.12 0.01 60)",
        borderRadius: "4px",
      }}
    >
      <span
        className="text-micro font-mono uppercase tracking-widest"
        style={{ color: "oklch(0.5 0.02 60)" }}
      >
        {label}
      </span>
      <span
        className="font-mono text-sm font-medium"
        style={{ color: valueColor }}
      >
        {value}
      </span>
    </div>
  );
}
