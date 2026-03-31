"use client";

import Image from "next/image";
import Link from "next/link";
import { socialLinks, footerLinks } from "@/lib/constants";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width={4} height={12} x={2} y={9} />
      <circle cx={4} cy={4} r={2} />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Linkedin: LinkedinIcon,
  Music2: TikTokIcon,
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-deep">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:pb-8 lg:px-8">
        {/* ── 3-column grid ── */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-6">
            <Image
              src="/images/logo-footer-white.png"
              alt="Algo Alpha"
              width={160}
              height={40}
              className="h-auto w-40"
            />
            <p className="text-sm text-text-secondary">
              Follow Us on Social Media
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                    className="text-text-muted transition-colors duration-300 hover:text-amber"
                  >
                    {Icon && <Icon className="size-5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 — Links */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 md:flex-col md:gap-8 lg:flex-row lg:gap-12">
            {/* Site Links */}
            <div className="flex flex-col gap-3">
              <h4 className="font-sans text-xs font-medium uppercase tracking-wider text-text-primary">
                Site Links
              </h4>
              <ul className="flex flex-col gap-2">
                {footerLinks.siteLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Products */}
            <div className="flex flex-col gap-3">
              <h4 className="font-sans text-xs font-medium uppercase tracking-wider text-text-primary">
                Our Products
              </h4>
              <ul className="flex flex-col gap-2">
                {footerLinks.productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 — Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-medium uppercase tracking-wider text-text-primary">
              Legal
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Full Disclaimer ── */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col gap-3">
          <p className="text-[11px] leading-relaxed text-text-muted font-sans">
            Required Disclaimer &mdash; Trading foreign exchange currencies
            (forex) and crypto currency (&quot;crypto&quot;) carries a high
            level of risk, and may not be suitable for all investors. Before
            deciding to trade foreign exchange or crypto you should carefully
            consider your investment objectives, level of experience, and risk
            appetite. The possibility exists that you could sustain a loss of
            some or all of your initial investment and therefore you should not
            invest money that you cannot afford to lose. You should be aware of
            all the risks associated with foreign exchange and crypto currency
            trading, and seek advice from an independent financial advisor if
            you have any doubts.
          </p>
          <p className="text-[11px] leading-relaxed text-text-muted font-sans">
            Algo Alpha, a brand of Nostradeamus LLC, is not registered as an
            Intermediary, Broker Dealer, Investment Advisor, or any other
            financial services designation with any regulatory body. Algo Alpha
            is a financial education and software company. Algo Alpha does not
            provide commodity trading advice. The information, services, and
            products on this website are for educational purposes only.
            Individual results will vary. There is no guarantee of specific
            results and results may vary.
          </p>
          <p className="text-[11px] leading-relaxed text-text-muted font-sans">
            CFTC Rule 4.41(b)(1) &mdash; Hypothetical or simulated performance
            results have certain inherent limitations. Unlike an actual
            performance record, simulated results do not represent actual
            trading. Also, since the trades have not actually been executed, the
            results may have under- or over-compensated for the impact, if any,
            of certain market factors, such as lack of liquidity. Simulated
            trading programs in general are also subject to the fact that they
            are designed with the benefit of hindsight. No representation is
            being made that any account will or is likely to achieve profits or
            losses similar to those shown.
          </p>
          <p className="text-[11px] leading-relaxed text-text-muted font-sans">
            NFA Rule 2-29 &mdash; Hypothetical or simulated performance results
            have certain inherent limitations. Unlike an actual performance
            record, simulated results do not represent actual trading. Also,
            since the trades have not actually been executed, the results may
            have under- or over-compensated for the impact, if any, of certain
            market factors, such as lack of liquidity. Simulated trading
            programs in general are also subject to the fact that they are
            designed with the benefit of hindsight.
          </p>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-text-muted">
            &copy; Nostradeamus LLC 2025. All Rights Reserved.
          </p>
          <a
            href="https://docs.google.com/document/d/1aj9vISFpY4hdZbVUzDk5A1kvsl61iL3iGv9nUZj4EgU/edit#heading=h.dhhfyubgadmq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-secondary transition-colors duration-300 hover:text-text-primary"
          >
            Earnings Claim Substantiation Document
          </a>
        </div>
      </div>
    </footer>
  );
}
