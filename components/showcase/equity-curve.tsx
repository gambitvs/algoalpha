"use client";

interface EquityCurveProps {
  accountId: string;
  accountName: string;
  large?: boolean;
}

export default function EquityCurve({
  accountId,
  accountName,
  large = false,
}: EquityCurveProps) {
  const width = large ? 1200 : 900;
  const height = large ? 400 : 300;
  const chartUrl = `https://widgets.myfxbook.com/api/get-custom-widget.png?id=${accountId}&width=${width}&height=${height}&bart=0&linet=1&bgColor=0C0A08&gridColor=1A1714&lineColor=FE9716&barColor=FE9716&fontColor=8A8070&title=&titles=1&chartbgc=0C0A08`;

  return (
    <div className="rounded-lg border border-border bg-bg-deep overflow-hidden">
      <div className="p-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
          Equity Growth
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
            Live
          </span>
        </div>
      </div>
      <img
        src={chartUrl}
        alt={`${accountName} equity curve`}
        className="w-full h-auto"
      />
    </div>
  );
}
