"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, BarChart3, Search } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: typeof Shield;
  faqs: FAQ[];
}

const categories: FAQCategory[] = [
  {
    title: "Getting Started & Trust",
    icon: Shield,
    faqs: [
      {
        question:
          "How can I determine if Algo Alpha's algorithmic trading is right for me?",
        answer:
          "If you are someone who values a structured, data-driven approach to growing capital and are open to exploring systematic alternatives to traditional investing, Algo Alpha may be worth considering.\n\nOur strategies are designed for individuals across a range of experience levels, and our team is available to walk you through the options that may align with your goals and risk tolerance.",
      },
      {
        question:
          "What type of customers may benefit from Algo Alpha's algorithmic trading strategies?",
        answer:
          "Algo Alpha's strategies may appeal to customers who value data transparency and structured approaches to market participation. These systems are designed for individuals seeking measurable methods to pursue growth, whether they are newer to systematic trading or looking to add a quantitative layer to an existing portfolio. Clients who appreciate consistency, defined risk parameters, and hands-off execution tend to find the most alignment with what Algo Alpha offers.",
      },
      {
        question:
          "Does Algo Alpha's algorithmic trading software guarantee profits?",
        answer:
          "No algorithmic trading system can guarantee profits, and Algo Alpha does not make such claims. What our strategies are designed to offer is a consistent, rules-based approach to pursuing risk-adjusted returns over time, backed by transparent performance data. All trading involves risk, and prospective clients are encouraged to review all available information and consider their own financial situation before allocating capital.",
      },
      {
        question: "How transparent are Algo Alpha's trading results?",
        answer:
          "Algo Alpha is committed to providing clients with clear, unfiltered access to performance data, including historical results, drawdown periods, and key risk metrics. Our reporting is designed to give an accurate and complete picture of how each strategy has performed, not just during favorable conditions. We believe that informed clients make better decisions, and transparency in results is a non-negotiable part of how we operate.",
      },
      {
        question:
          "What makes Algo Alpha unique compared to other algorithmic trading platforms?",
        answer:
          "Algo Alpha's Risk Curve approach is designed to offer something that most companies do not, a structured range of strategies across different risk and return profiles, allowing clients to build a diversified algorithmic portfolio rather than committing to a single system. Combined with transparent reporting, active risk monitoring, and a client-first approach, Algo Alpha aims to bring a level of institutional discipline to individual investors.",
      },
      {
        question:
          "How is Algo Alpha's algorithmic platform verified and monitored for performance?",
        answer:
          "Our strategies go through a rigorous testing process. Strategies are designed, created, back tested, ran through stress tests for different market environments, must run for 1 year with live capital before making available for public release.",
      },
      {
        question:
          "How does Algo Alpha ensure the safe use of its automated trading systems?",
        answer:
          "Algo Alpha's systems are designed with risk management controls that include predefined stop-loss levels, maximum drawdown thresholds, and position sizing guidelines intended to help manage capital exposure. The team monitors live performance on an ongoing basis and clients are able to set their own kill switch from our webapp. While these measures are designed to support responsible use of the platform, all trading carries inherent risk and outcomes cannot be guaranteed.",
      },
    ],
  },
  {
    title: "Strategy & Diversification",
    icon: BarChart3,
    faqs: [
      {
        question: "What is a Risk Curve?",
        answer:
          "A Risk Curve is a framework used to illustrate the relationship between risk and potential return across a spectrum of strategies or investments. It is designed to help investors visualize how different levels of exposure may correspond to different performance outcomes over time. Understanding where a strategy sits on the Risk Curve is a useful starting point for assessing whether it may be appropriate for a given investor's goals and tolerance for drawdown.",
      },
      {
        question:
          "How is Algo Alpha building out a Risk Curve Suite of algorithms to help diversify my portfolio?",
        answer:
          "Algo Alpha is developing a suite of algorithms that are each designed to occupy a distinct position along the Risk Curve, from more conservative, lower-volatility approaches to higher-growth-oriented strategies. The intention of this suite is to allow clients to allocate across multiple systems that may respond differently to varying market conditions, rather than concentrating capital in a single approach. This framework is built with diversification as a core principle, with the goal of creating a more stable and balanced algorithmic portfolio over time.",
      },
      {
        question: "Why should I add algorithmic trading to my portfolio?",
        answer:
          "Algorithmic trading may appeal to investors who are looking for a systematic, rules-based method to complement their existing holdings. These strategies are designed to operate independently of emotional decision-making and can participate in markets continuously, which may offer opportunities that are difficult to capture through manual trading alone. For those seeking to diversify beyond traditional asset classes, algorithmic trading may represent a structured and measurable approach worth exploring.",
      },
      {
        question:
          "What role does algorithmic trading play in a modern investment strategy?",
        answer:
          "Algorithmic trading may serve as an active, non-correlated layer within a broader investment strategy, operating according to its own defined rules rather than moving in step with traditional markets. For investors seeking to diversify their approach, systematic strategies are designed to pursue opportunities across different market conditions using predefined parameters. The role algorithmic trading plays within any portfolio will depend on the individual's objectives, risk tolerance, and how it is positioned relative to their other holdings.",
      },
      {
        question:
          "How does diversification play a role in Algo Alpha's algorithmic trading approach?",
        answer:
          "Diversification is a central consideration in how Algo Alpha structures its Risk Curve Suite. By offering strategies that are designed to operate across different instruments, timeframes, and market conditions, clients may have the opportunity to spread capital across multiple systems rather than relying on a single approach. This is intended to reduce the potential impact of any one strategy underperforming during a given period, supporting a more balanced overall performance profile.",
      },
      {
        question:
          "Can Algo Alpha's automated trading software adjust to market volatility?",
        answer:
          "Algo Alpha's algorithms are designed with dynamic risk parameters that are intended to respond to shifting market conditions, including periods of elevated volatility. These built-in mechanisms aim to modulate exposure and position sizing based on predefined criteria, rather than applying a fixed approach in all environments. All trading carries inherent risk, and while these features are designed to support more adaptive performance, no system can guarantee protection against losses under all conditions.",
      },
    ],
  },
];

// Flatten for search
const allFaqs = categories.flatMap((cat, ci) =>
  cat.faqs.map((faq, fi) => ({
    ...faq,
    categoryIndex: ci,
    globalIndex: ci * 10 + fi,
    number: String(ci * 10 + fi + 1).padStart(2, "0"),
  })),
);

function FAQItem({
  faq,
  number,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  number: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`transition-colors ${isOpen ? "border-l-2 border-amber pl-4 -ml-[2px]" : ""}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-3 py-4 text-left group"
      >
        <span className="font-mono text-xs text-amber/60 mt-0.5 shrink-0">
          {number}
        </span>
        <span
          className={`text-[15px] font-medium leading-snug transition-colors ${isOpen ? "text-amber" : "text-text-primary group-hover:text-amber"}`}
        >
          {faq.question}
        </span>
        <span
          className={`ml-auto shrink-0 mt-1 text-text-muted transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-8 pr-4">
              {faq.answer.split("\n\n").map((p, i) => (
                <p
                  key={i}
                  className="text-sm text-text-secondary leading-relaxed mb-2 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const filtered = useMemo(() => {
    if (!search.trim()) return null; // null means show categories
    const q = search.toLowerCase();
    return allFaqs.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q),
    );
  }, [search]);

  function toggle(index: number) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <section id="faqs" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                Common Questions
              </p>
              <h2 className="text-h2 font-serif text-text-primary">FAQs</h2>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="w-full h-10 pl-10 pr-4 bg-bg-surface border border-border rounded-sm font-mono text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-amber transition-colors"
              />
            </div>
          </div>
        </SectionEntrance>

        {/* Search results mode */}
        {filtered !== null ? (
          <SectionEntrance>
            {filtered.length === 0 ? (
              <p className="text-center text-text-muted py-12">
                No questions match &ldquo;{search}&rdquo;
              </p>
            ) : (
              <div className="max-w-3xl mx-auto divide-y divide-border">
                {filtered.map((faq) => (
                  <FAQItem
                    key={faq.globalIndex}
                    faq={faq}
                    number={faq.number}
                    isOpen={openItems.has(faq.globalIndex)}
                    onToggle={() => toggle(faq.globalIndex)}
                  />
                ))}
              </div>
            )}
          </SectionEntrance>
        ) : (
          /* Two-column category cards */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {categories.map((category, ci) => {
              const Icon = category.icon;
              return (
                <SectionEntrance key={category.title} delay={ci * 100}>
                  <div className="rounded-xl border border-border bg-bg-surface p-6 sm:p-8 h-full">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                      <div className="flex items-center justify-center w-9 h-9 rounded-sm bg-amber/10 border border-amber/20">
                        <Icon className="w-4 h-4 text-amber" />
                      </div>
                      <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-text-primary">
                        {category.title}
                      </h3>
                    </div>

                    {/* FAQ items */}
                    <div className="divide-y divide-border/50">
                      {category.faqs.map((faq, fi) => {
                        const globalIdx = ci * 10 + fi;
                        const num = String(globalIdx + 1).padStart(2, "0");
                        return (
                          <FAQItem
                            key={globalIdx}
                            faq={faq}
                            number={num}
                            isOpen={openItems.has(globalIdx)}
                            onToggle={() => toggle(globalIdx)}
                          />
                        );
                      })}
                    </div>
                  </div>
                </SectionEntrance>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
