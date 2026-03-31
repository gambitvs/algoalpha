"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface StepContactProps {
  value: ContactData;
  onChange: (value: ContactData) => void;
}

const testimonialImages = Array.from(
  { length: 7 },
  (_, i) => `/images/lp-testimonial-${i + 1}.png`,
);

export function StepContact({ value, onChange }: StepContactProps) {
  const update = (field: keyof ContactData, val: string) => {
    onChange({ ...value, [field]: val });
  };

  return (
    <div>
      <h2 className="font-serif text-h2 text-text-primary mb-8">
        How Can We Reach You?
      </h2>

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-sans text-small text-text-secondary mb-1.5">
              First Name *
            </label>
            <Input
              type="text"
              value={value.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              placeholder="First name"
              required
              className="h-11 rounded-none bg-bg-surface border-border text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/30"
            />
          </div>
          <div>
            <label className="block font-sans text-small text-text-secondary mb-1.5">
              Last Name *
            </label>
            <Input
              type="text"
              value={value.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              placeholder="Last name"
              required
              className="h-11 rounded-none bg-bg-surface border-border text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/30"
            />
          </div>
        </div>

        <div>
          <label className="block font-sans text-small text-text-secondary mb-1.5">
            Email *
          </label>
          <Input
            type="email"
            value={value.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            required
            className="h-11 rounded-none bg-bg-surface border-border text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/30"
          />
        </div>

        <div>
          <label className="block font-sans text-small text-text-secondary mb-1.5">
            Phone *
          </label>
          <Input
            type="tel"
            value={value.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(555) 000-0000"
            required
            className="h-11 rounded-none bg-bg-surface border-border text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/30"
          />
        </div>
      </div>

      {/* Social proof strip */}
      <div className="mt-12">
        <p className="font-sans text-small text-text-secondary mb-4">
          Here&apos;s What Clients Have To Say...
        </p>
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-bg-deep to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-bg-deep to-transparent z-10" />

          <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
            {testimonialImages.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[140px] sm:w-[200px] rounded-lg border border-border overflow-hidden bg-bg-surface"
              >
                <Image
                  src={src}
                  alt={`Client testimonial ${i + 1}`}
                  width={200}
                  height={260}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
