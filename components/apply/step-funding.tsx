"use client";

import { CheckCircle, XCircle } from "lucide-react";

interface FundingData {
  fundingInterest: string;
  creditScore: string;
  bankruptcy: string;
}

interface StepFundingProps {
  value: FundingData;
  onChange: (value: FundingData) => void;
}

const creditScoreOptions = [
  "Under 680",
  "680-699",
  "700-719",
  "720-749",
  "750+",
];

function YesNoCards({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (val: string) => void;
}) {
  const options = [
    { value: "yes", label: "Yes", icon: CheckCircle },
    { value: "no", label: "No", icon: XCircle },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((option) => {
        const isSelected = selected === option.value;
        const Icon = option.icon;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onSelect(option.value)}
            className={`
              flex items-center justify-center gap-3 px-5 py-4
              border rounded-lg transition-all duration-200 cursor-pointer
              ${
                isSelected
                  ? "border-amber bg-amber/5 shadow-[0_0_0_1px_var(--color-amber)]"
                  : "border-border bg-bg-surface hover:border-border-active hover:bg-bg-elevated"
              }
            `}
          >
            <Icon
              className={`size-5 ${isSelected ? "text-amber" : "text-text-secondary"}`}
              strokeWidth={1.5}
            />
            <span
              className={`font-sans text-base font-medium ${
                isSelected ? "text-text-primary" : "text-text-secondary"
              }`}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function StepFunding({ value, onChange }: StepFundingProps) {
  const update = (field: keyof FundingData, val: string) => {
    onChange({ ...value, [field]: val });
  };

  return (
    <div className="space-y-10">
      {/* Question 1: Funding Interest */}
      <div>
        <h2 className="font-serif text-h3 text-text-primary mb-4">
          Since Your Liquidity is Lower, Would You Be Open to Funding?
        </h2>
        <YesNoCards
          selected={value.fundingInterest}
          onSelect={(val) => update("fundingInterest", val)}
        />
      </div>

      {/* Question 2: Credit Score */}
      <div>
        <h2 className="font-serif text-h3 text-text-primary mb-4">
          What is Your Current Credit Score?
        </h2>
        <div className="flex flex-col gap-3">
          {creditScoreOptions.map((option) => {
            const isSelected = value.creditScore === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => update("creditScore", option)}
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

      {/* Question 3: Bankruptcy */}
      <div>
        <h2 className="font-serif text-h3 text-text-primary mb-4">
          Do You Have a Personal Bankruptcy in the Last 7 Years?
        </h2>
        <YesNoCards
          selected={value.bankruptcy}
          onSelect={(val) => update("bankruptcy", val)}
        />
      </div>
    </div>
  );
}
