"use client";

import { CheckCircle, XCircle } from "lucide-react";

interface StepExperienceProps {
  value: string;
  onChange: (value: string) => void;
}

const options = [
  { value: "yes", label: "Yes", icon: CheckCircle },
  { value: "no", label: "No", icon: XCircle },
];

export function StepExperience({ value, onChange }: StepExperienceProps) {
  return (
    <div>
      <h2 className="font-serif text-h2 text-text-primary mb-8">
        Have You Traded in Markets Before?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option) => {
          const isSelected = value === option.value;
          const Icon = option.icon;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`
                flex flex-col items-center justify-center gap-4 p-5 sm:p-8
                border rounded-lg transition-all duration-200 cursor-pointer
                ${
                  isSelected
                    ? "border-amber bg-amber/5 shadow-[0_0_0_1px_var(--color-amber)]"
                    : "border-border bg-bg-surface hover:border-border-active hover:bg-bg-elevated"
                }
              `}
            >
              <Icon
                className={`size-10 ${isSelected ? "text-amber" : "text-text-secondary"}`}
                strokeWidth={1.5}
              />
              <span
                className={`font-sans text-lg font-medium ${
                  isSelected ? "text-text-primary" : "text-text-secondary"
                }`}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
