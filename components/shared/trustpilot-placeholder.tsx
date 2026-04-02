"use client";

import { Star } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

const trustpilotReviews = [
  {
    name: "Jose",
    date: "Mar 31, 2026",
    title: "Onboarding was a smooth experience",
    text: "Onboarding was a smooth experience, it's easy to follow instructions make it simple enough for the inexperienced trader like myself. Robert was quick to respond and kept me informed with his newsletter. Overall great experience. Now I'm just interested in seeing the growth.",
    stars: 5,
  },
  {
    name: "Chance Isham",
    date: "Mar 21, 2026",
    title: "Onboarding was super easy and smooth",
    text: "Onboarding was super easy and smooth. Especially since I was already using both broker options. Robert was great to work with. Excited to see how well Alpha Gold performs!",
    stars: 5,
  },
  {
    name: "David Childers",
    date: "Mar 20, 2026",
    title: "The onboarding was done in a couple minutes",
    text: "The onboarding was done in a couple minutes and everything is going great. Thank you Robert!",
    stars: 5,
  },
  {
    name: "Elestus V",
    date: "Mar 17, 2026",
    title: "What a relief to get my account activated",
    text: "Aww what a relief to get my account activated they were very patient with me. I am new to this with no experience. Thank you very much for all your help. I would most definitely recommend them.",
    stars: 5,
  },
  {
    name: "Karla M Wynn",
    date: "Mar 13, 2026",
    title: "Algo Alpha Review",
    text: "The staff provided clear instructions, and the team was always available to offer guidance whenever I hit a snag. Thank you — KM Wynn",
    stars: 5,
  },
  {
    name: "Andréa M Roberson",
    date: "Mar 3, 2026",
    title: "The communication is amazing",
    text: "The communication is amazing. They keep you in the loop, with great communication on next steps.",
    stars: 5,
  },
  {
    name: "Ignacio",
    date: "Mar 1, 2026",
    title: "Clear for Beginners, Solid for Pros",
    text: "Whether you're brand new to automated trading, naturally cautious with your capital, or experienced enough to be skeptical, the onboarding process immediately puts you at ease. Everything is clearly laid out, step by step, with an emphasis on doing things correctly rather than rushing people through.",
    stars: 5,
  },
  {
    name: "Michael Wheeler",
    date: "Mar 1, 2026",
    title: "Great service with excellent Care",
    text: "Great service with excellent leadership! Very attentive and helped throughout the process to the finish!",
    stars: 5,
  },
  {
    name: "Timothy",
    date: "Feb 26, 2026",
    title: "Very easy to setup and connect",
    text: "The Algo Alpha X and Algo Alpha Gold were very easy to setup and connect to my broker. I am recommending this Algorithm trading to anyone that is interested in trading or growing their financial portfolio.",
    stars: 5,
  },
  {
    name: "Jacky",
    date: "Feb 24, 2026",
    title: "Absolutely LEGEND!!",
    text: "Robert and his team is absolutely LEGEND!!",
    stars: 5,
  },
  {
    name: "Major Cephus",
    date: "Feb 24, 2026",
    title: "Great Experience",
    text: "Great Experience.",
    stars: 5,
  },
  {
    name: "Lessie Johnson",
    date: "Feb 10, 2026",
    title: "My experience with Algo-Alpha was a pleasant journey",
    text: "My experience with Algo-Alpha was a challenge in the beginning because of me not remembering my password. After I made the contact with support team, they were highly responsive and guided me until my account was successfully activated. I am so happy and grateful. Thank you, Mr. Robert Miller.",
    stars: 5,
  },
  {
    name: "Josef Nazarchuk",
    date: "Feb 9, 2026",
    title: "I love their indicators!",
    text: "I love their indicators!! I use several of their free and paid indicators quite often in my trading and it has helped me improve my trading profitability. I've also spoken with the team and learned that they have many years of experience behind them.",
    stars: 5,
  },
  {
    name: "Felicia Smith",
    date: "Feb 6, 2026",
    title: "Quick Response with Clear Explanations",
    text: "I contacted Support by email. Robert quickly responded with steps to follow to address my situation. He was very patient with me!",
    stars: 5,
  },
  {
    name: "dseutter",
    date: "Feb 5, 2026",
    title: "Quick responses and upfront education",
    text: "Very quick activation of my account, and very detailed explanation was provided for me to get started very quickly. Quick responses from the support team when I needed them.",
    stars: 5,
  },
  {
    name: "Chris Ripatti",
    date: "Jan 17, 2026",
    title: "Everything has been just as promised",
    text: "Everything has been just as promised, love it!",
    stars: 5,
  },
  {
    name: "Leroy Woodard",
    date: "Jan 3, 2026",
    title: "On-boarding and Activation",
    text: "The process and integration with each part of the system was timely and exactly to the written steps, I had an email issue but it was resolved with the help of Robert. I was able to go active in the system in less than 24 hours.",
    stars: 5,
  },
  {
    name: "Samuel D Bean Jr",
    date: "Dec 27, 2025",
    title: "On-Boarding Was as Easy as 1-2-3",
    text: "Everything was outlined step by step. There were instructional videos for those who may need more. The staff was extremely helpful and available.",
    stars: 5,
  },
  {
    name: "Chris McHenry",
    date: "Dec 22, 2025",
    title: "Super simple setup",
    text: "The set up on the platform was super simple and excited about the results I have seen!",
    stars: 5,
  },
  {
    name: "Allen",
    date: "Dec 22, 2025",
    title: "Great and super fast support",
    text: "Great and super fast support...plus the algorithm actually works",
    stars: 5,
  },
];

function ReviewCard({
  review,
}: {
  review: (typeof trustpilotReviews)[number];
}) {
  return (
    <div className="rounded-lg border border-border bg-bg-surface p-5 flex flex-col justify-between h-full transition-colors hover:border-amber/20">
      {/* Stars */}
      <div>
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: review.stars }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber text-amber" />
          ))}
        </div>
        <h4 className="font-mono text-xs font-medium text-text-primary mb-2">
          {review.title}
        </h4>
        <p className="text-small text-text-secondary leading-relaxed line-clamp-4">
          {review.text}
        </p>
      </div>
      {/* Author + date */}
      <div className="mt-4 flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-amber/15 flex items-center justify-center">
            <span className="text-[10px] font-medium text-amber">
              {review.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="font-mono text-[11px] text-text-primary">
            {review.name}
          </span>
        </div>
        <span className="font-mono text-[10px] text-text-muted">
          {review.date}
        </span>
      </div>
    </div>
  );
}

export default function TrustpilotReviews() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                What Our Clients Say
              </p>
              <h2 className="text-h3 font-serif text-text-primary">
                Trustpilot Reviews
              </h2>
            </div>
            <a
              href="https://www.trustpilot.com/review/algoalpha.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-amber hover:text-amber-glow transition-colors"
            >
              View all on Trustpilot
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </SectionEntrance>

        <SectionEntrance delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustpilotReviews.map((review) => (
              <ReviewCard
                key={`${review.name}-${review.date}`}
                review={review}
              />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <a
              href="https://www.trustpilot.com/review/algoalpha.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-amber hover:text-amber-glow transition-colors"
            >
              View all on Trustpilot
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </SectionEntrance>
      </div>
    </section>
  );
}
