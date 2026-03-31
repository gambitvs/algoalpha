"use client";

interface StepCapitalProps {
  value: string;
  onChange: (value: string) => void;
}

const capitalOptions = [
  "Under $10,000",
  "$10,000 to $25,000",
  "$25,000-$50,000",
  "$50,000-$100,000",
  "$100,000-$250,000",
  "$250,000-$1M",
  "$1M+",
];

export function StepCapital({ value, onChange }: StepCapitalProps) {
  return (
    <div>
      <h2 className="font-serif text-h2 text-text-primary mb-3">
        How Much Liquid Capital Do You Have Available for Trading Deployment?
      </h2>
      <p className="text-body text-text-secondary mb-8">
        Accurately answering this question gives us the ability to provide
        appropriate information on our algorithmic trading strategies.
      </p>

      <div className="flex flex-col gap-3">
        {capitalOptions.map((option) => {
          const isSelected = value === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`
                w-full text-left px-5 py-4
                border rounded-lg transition-all duration-200 cursor-pointer
                ${
                  isSelected
                    ? "border-amber bg-amber/5 shadow-[0_0_0_1px_var(--color-amber)]"
                    : "border-border bg-bg-surface hover:border-border-active hover:bg-bg-elevated"
                }
              `}
            >
              <span
                className={`font-sans text-base font-medium ${
                  isSelected ? "text-text-primary" : "text-text-secondary"
                }`}
              >
                {option}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
