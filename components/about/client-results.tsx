"use client";

import Image from "next/image";
import { testimonials } from "@/lib/constants";

const clientTestimonials = testimonials.filter((t) => t.type === "client");

export default function ClientResults() {
  return (
    <section className="px-6 lg:px-8 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Reviews
          </p>
          <h2 className="text-h2 font-serif text-text-primary max-w-3xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Horizontal scroll carousel */}
        <div className="-mx-6 px-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4" style={{ minWidth: "min-content" }}>
            {clientTestimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="w-[340px] sm:w-[400px] shrink-0 rounded-lg border border-border bg-bg-surface p-6 sm:p-8 flex flex-col"
              >
                {/* Quote mark */}
                <span
                  className="font-serif text-[3.5rem] leading-none text-amber/20 select-none -mb-4"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote text */}
                <p className="text-body text-text-primary leading-relaxed flex-1">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-bg-elevated">
                    <Image
                      src={testimonial.imagePath}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {testimonial.name}
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-amber">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
