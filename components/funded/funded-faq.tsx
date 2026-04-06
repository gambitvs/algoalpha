"use client";

import SectionEntrance from "@/components/layout/section-entrance";

const faqs = [
  {
    question: "Can I withdraw the broker's contributed capital?",
    answer:
      "No. You withdraw your deposit + all profits. The contributed capital stays with the broker.",
  },
  {
    question: "Is this available for US clients?",
    answer: "Yes. The broker accepts US-based clients.",
  },
  {
    question: "Are there lockup periods?",
    answer: "None. Withdraw anytime. No lockup on your capital or profits.",
  },
  {
    question: "How fast can I get started?",
    answer:
      "As little as 30 minutes for existing traders. 2-4 days for brand new accounts.",
  },
  {
    question: "Can I have multiple funded accounts?",
    answer: "Yes. Deploy multiple strategies across separate funded accounts.",
  },
  {
    question: "What happens if drawdown exceeds 10%?",
    answer: "Account equity resets. You can open a new account at any time.",
  },
];

export default function FundedFAQ() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            COMMON QUESTIONS
          </p>
          <h2 className="text-h2 font-serif text-text-primary">
            Frequently Asked
          </h2>
        </SectionEntrance>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {faqs.map((faq, i) => (
            <SectionEntrance key={i} delay={i * 80}>
              <div className="group/faq relative rounded-lg bg-bg-surface/50 p-6 hover:bg-bg-elevated/40 transition-colors h-full overflow-hidden">
                {/* Hover accent — thin amber line slides in from left */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-amber scale-y-0 group-hover/faq:scale-y-100 transition-transform duration-300 origin-top" />
                <p className="font-mono text-sm font-medium text-text-primary mb-3">
                  {faq.question}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </SectionEntrance>
          ))}
        </div>
      </div>
    </section>
  );
}
