"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/constants";
import SectionEntrance from "@/components/layout/section-entrance";

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  const founder = testimonials.find((t) => t.type === "founder");
  const clients = testimonials.filter((t) => t.type === "client");

  if (!founder) return null;

  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Founder Spotlight */}
        <SectionEntrance>
          <motion.div
            initial={prefersReducedMotion ? {} : { scale: 0.98, opacity: 0 }}
            whileInView={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-[40fr_60fr] lg:gap-16"
          >
            {/* Photo */}
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={founder.imagePath}
                  alt={founder.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0 max-h-[350px] sm:max-h-[450px] lg:max-h-none"
                  style={{
                    filter: "grayscale(100%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.filter =
                      "grayscale(0%) sepia(10%) saturate(1.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.filter =
                      "grayscale(100%)";
                  }}
                />
              </div>
            </div>

            {/* Quote */}
            <div className="flex flex-col justify-center">
              {/* Decorative quote mark */}
              <span
                className="pointer-events-none select-none font-serif text-[60px] sm:text-[80px] lg:text-[120px] leading-none text-amber-dim/20"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="-mt-16 font-serif text-[22px] italic leading-relaxed text-text-primary lg:text-[24px]">
                {founder.quote}
              </blockquote>

              <div className="mt-8">
                <p className="text-sm font-medium uppercase tracking-wide text-text-primary">
                  {founder.name}
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  {founder.title}
                </p>
              </div>
            </div>
          </motion.div>
        </SectionEntrance>

        {/* Client Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {clients.map((client, i) => (
            <SectionEntrance key={client.name} delay={150 * (i + 1)}>
              <div className="rounded-xl border border-border bg-bg-surface p-6 lg:p-8">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={client.imagePath}
                      alt={client.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">
                      {client.name}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {client.title}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[15px] italic leading-relaxed text-text-secondary">
                  &ldquo;{client.quote}&rdquo;
                </p>
              </div>
            </SectionEntrance>
          ))}
        </div>
      </div>
    </section>
  );
}
