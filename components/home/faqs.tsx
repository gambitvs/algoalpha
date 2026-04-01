"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import SectionEntrance from "@/components/layout/section-entrance";

const faqData = [
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
      "Algo Alpha's Risk Curve approach is designed to offer something that most companies do not, a structured range of strategies across different risk and return profiles, allowing clients to build a diversified algorithmic portfolio rather than committing to a single system. Combined with transparent reporting, active risk monitoring, and a client-first approach, Algo Alpha aims to bring a level of institutional discipline to individual investors. For those evaluating options in the algorithmic trading space, we encourage a direct conversation with our team to understand how our approach compares.",
  },
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
];

export default function FAQs() {
  return (
    <section id="faqs" className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Common Questions
          </p>
          <h2 className="text-h2 font-serif text-text-primary mb-10">FAQs</h2>
        </SectionEntrance>

        <SectionEntrance delay={100}>
          <Accordion>
            {faqData.map((faq, i) => (
              <AccordionItem key={i} className="border-b border-border py-1">
                <AccordionTrigger className="py-4 text-left text-[15px] font-medium leading-snug text-text-primary hover:text-amber hover:no-underline transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary leading-relaxed">
                  {faq.answer.split("\n\n").map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionEntrance>
      </div>
    </section>
  );
}
