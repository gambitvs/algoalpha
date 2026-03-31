"use client";

interface StepTimelineProps {
  value: string;
  onChange: (value: string) => void;
}

const timelineOptions = [
  "ASAP",
  "Within a Week",
  "Within the Next 30 Days",
  "Within the Next 60 Days",
  "None of the above, just looking",
];

export function StepTimeline({ value, onChange }: StepTimelineProps) {
  return (
    <div>
      <h2 className="font-serif text-h2 text-text-primary mb-8">
        If this program was aligned, how soon would you be looking to get
        started?
      </h2>

      <div className="flex flex-col gap-3">
        {timelineOptions.map((option) => {
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
