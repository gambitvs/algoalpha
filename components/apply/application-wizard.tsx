"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WizardProgress } from "@/components/apply/wizard-progress";
import { StepJurisdiction } from "@/components/apply/step-jurisdiction";
import { StepExperience } from "@/components/apply/step-experience";
import { StepCapital } from "@/components/apply/step-capital";
import { StepFunding } from "@/components/apply/step-funding";
import { StepTimeline } from "@/components/apply/step-timeline";
import { StepContact } from "@/components/apply/step-contact";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

interface FormData {
  jurisdiction: string;
  experience: string;
  capital: string;
  fundingInterest: string;
  creditScore: string;
  bankruptcy: string;
  timeline: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
}

const initialFormData: FormData = {
  jurisdiction: "",
  experience: "",
  capital: "",
  fundingInterest: "",
  creditScore: "",
  bankruptcy: "",
  timeline: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
};

/** Whether the capital answer triggers the conditional funding step */
function needsFundingStep(capital: string): boolean {
  return capital === "Under $10,000" || capital === "$10,000 to $25,000";
}

/**
 * Build the ordered step list based on current form data.
 * Steps: jurisdiction, experience, capital, [funding], timeline, contact
 */
function getStepIds(formData: FormData): string[] {
  const steps = ["jurisdiction", "experience", "capital"];
  if (needsFundingStep(formData.capital)) {
    steps.push("funding");
  }
  steps.push("timeline", "contact");
  return steps;
}

export function ApplicationWizard() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Capture UTM params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
    }));
  }, []);

  const stepIds = getStepIds(formData);
  const currentStepId = stepIds[currentStepIndex];
  const totalSteps = stepIds.length;
  const isLastStep = currentStepIndex === totalSteps - 1;
  const isFirstStep = currentStepIndex === 0;

  // Check if the current step is complete
  const isStepComplete = useCallback(() => {
    switch (currentStepId) {
      case "jurisdiction":
        return formData.jurisdiction !== "";
      case "experience":
        return formData.experience !== "";
      case "capital":
        return formData.capital !== "";
      case "funding":
        return (
          formData.fundingInterest !== "" &&
          formData.creditScore !== "" &&
          formData.bankruptcy !== ""
        );
      case "timeline":
        return formData.timeline !== "";
      case "contact":
        return (
          formData.firstName.trim() !== "" &&
          formData.lastName.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.phone.trim() !== ""
        );
      default:
        return false;
    }
  }, [currentStepId, formData]);

  const goNext = () => {
    if (!isStepComplete()) return;
    setDirection(1);
    setCurrentStepIndex((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  const goBack = () => {
    setDirection(-1);
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (!isStepComplete()) return;
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      if (data.redirect) {
        router.push(data.redirect);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Framer Motion slide variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const renderStep = () => {
    switch (currentStepId) {
      case "jurisdiction":
        return (
          <StepJurisdiction
            value={formData.jurisdiction}
            onChange={(v) => setFormData((p) => ({ ...p, jurisdiction: v }))}
          />
        );
      case "experience":
        return (
          <StepExperience
            value={formData.experience}
            onChange={(v) => setFormData((p) => ({ ...p, experience: v }))}
          />
        );
      case "capital":
        return (
          <StepCapital
            value={formData.capital}
            onChange={(v) => setFormData((p) => ({ ...p, capital: v }))}
          />
        );
      case "funding":
        return (
          <StepFunding
            value={{
              fundingInterest: formData.fundingInterest,
              creditScore: formData.creditScore,
              bankruptcy: formData.bankruptcy,
            }}
            onChange={(v) =>
              setFormData((p) => ({
                ...p,
                fundingInterest: v.fundingInterest,
                creditScore: v.creditScore,
                bankruptcy: v.bankruptcy,
              }))
            }
          />
        );
      case "timeline":
        return (
          <StepTimeline
            value={formData.timeline}
            onChange={(v) => setFormData((p) => ({ ...p, timeline: v }))}
          />
        );
      case "contact":
        return (
          <StepContact
            value={{
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              phone: formData.phone,
            }}
            onChange={(v) =>
              setFormData((p) => ({
                ...p,
                firstName: v.firstName,
                lastName: v.lastName,
                email: v.email,
                phone: v.phone,
              }))
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <WizardProgress
        currentStep={currentStepIndex + 1}
        totalSteps={totalSteps}
      />

      <div className="relative overflow-hidden min-h-[300px] sm:min-h-[400px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStepId}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.3, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.25 },
            }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-small">
          {error}
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-10 pt-6 border-t border-border px-4 sm:px-6">
        {!isFirstStep ? (
          <Button
            variant="ghost"
            onClick={goBack}
            className="rounded-none text-text-secondary hover:text-text-primary gap-2"
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
        ) : (
          <div />
        )}

        {isLastStep ? (
          <Button
            onClick={handleSubmit}
            disabled={!isStepComplete() || isSubmitting}
            className="rounded-none bg-amber text-bg-deep hover:bg-amber-glow px-8 h-11 font-sans text-sm font-medium uppercase tracking-wide gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        ) : (
          <Button
            onClick={goNext}
            disabled={!isStepComplete()}
            className="rounded-none bg-amber text-bg-deep hover:bg-amber-glow px-8 h-11 font-sans text-sm font-medium uppercase tracking-wide gap-2"
          >
            Continue
            <ArrowRight className="size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
