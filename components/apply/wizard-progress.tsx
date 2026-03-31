"use client";

import { Progress } from "@/components/ui/progress";

interface WizardProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function WizardProgress({
  currentStep,
  totalSteps,
}: WizardProgressProps) {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="mb-8">
      <Progress
        value={percentage}
        className="[&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-track]]:rounded-none [&_[data-slot=progress-track]]:bg-bg-surface [&_[data-slot=progress-indicator]]:bg-amber [&_[data-slot=progress-indicator]]:rounded-none [&_[data-slot=progress-indicator]]:transition-all [&_[data-slot=progress-indicator]]:duration-500"
      />
      <p className="mt-3 font-mono text-micro text-text-muted tracking-wide">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}
