import { Metadata } from "next";
import { LegalPageLayout } from "@/components/shared/legal-page-layout";

export const metadata: Metadata = {
  title: "Disclosures",
};

export default function DisclosuresPage() {
  return (
    <LegalPageLayout title="Disclosures">
      <h3>Performance Disclaimer</h3>
      <p>
        Algo Alpha is <strong>not a financial advisor</strong>, investment
        advisor, or broker-dealer. Algo Alpha is a software company that
        provides algorithmic trading technology. We do not provide personalized
        financial advice, investment recommendations, or commodity trading
        advice.
      </p>
      <p>
        <strong>
          No guarantee of growth, returns, or profits is made or implied.
        </strong>{" "}
        Trading in financial markets involves substantial risk of loss, and you
        should carefully consider whether trading is appropriate for you in
        light of your financial condition. Past performance is not necessarily
        indicative of future results.
      </p>
      <p>
        The information provided on this website and through our services is for
        educational and informational purposes only and should not be construed
        as financial, investment, tax, or legal advice. You should consult with
        a qualified professional before making any investment decisions.
      </p>

      <h3>Company Description</h3>
      <p>
        Algo Alpha is a financial education and software company specializing in
        algorithmic trading technology. We develop proprietary trading
        algorithms that are licensed to qualified customers for use with their
        own brokerage accounts.
      </p>
      <p>
        Algo Alpha does <strong>not</strong> provide commodity trading advice,
        manage customer accounts, or act as an intermediary in any transactions.
        All trading decisions are executed automatically by the software based
        on pre-programmed algorithms and the risk settings selected by the
        customer.
      </p>

      <h3>Results Methodology</h3>
      <p>
        Algo Alpha has been collecting verified performance data through{" "}
        <a
          href="https://www.myfxbook.com/members/AlgoAlpha"
          target="_blank"
          rel="noopener noreferrer"
        >
          MyFXBook
        </a>{" "}
        links since <strong>January 2023</strong>. MyFXBook is an independent
        third-party platform that provides verified, real-time trading
        performance tracking.
      </p>
      <p>
        <strong>Important note regarding reported returns:</strong> The
        performance figures displayed do not account for mid-month capital
        activity, including deposits, withdrawals, or transfers made by
        customers during the reporting period. As a result, individual customer
        returns may vary from the figures shown.
      </p>
      <p>
        All performance data shown on our website represents actual trading
        results from live accounts using Algo Alpha&apos;s algorithmic trading
        software. However, individual results will vary based on factors
        including but not limited to: account size, broker selection, risk
        settings chosen, market conditions, and the timing of account activation
        and any capital activity.
      </p>

      <h3>Risk Warning</h3>
      <p>
        <strong>
          Trading forex, cryptocurrencies, metals, and other financial
          instruments carries a high level of risk and may not be suitable for
          all investors.
        </strong>{" "}
        The high degree of leverage that is often obtainable in forex and
        cryptocurrency trading can work against you as well as for you. Before
        deciding to trade any financial instrument, you should carefully
        consider your investment objectives, level of experience, and risk
        appetite.
      </p>
      <p>
        There is a possibility that you could sustain a loss of some or all of
        your initial investment and therefore you should not invest money that
        you cannot afford to lose. You should be aware of all the risks
        associated with trading and seek advice from an independent financial
        advisor if you have any doubts.
      </p>
      <p>
        Algo Alpha is <strong>not registered</strong> as an Intermediary,
        Broker, Investment Advisor, or Commodity Trading Advisor with any
        regulatory authority. Algo Alpha does not solicit or execute orders for
        the purchase or sale of any security, commodity, or investment.
      </p>

      <h3>CFTC Rule 4.41(b)(1) / NFA Rule 2-29</h3>
      <p>
        HYPOTHETICAL OR SIMULATED PERFORMANCE RESULTS HAVE CERTAIN LIMITATIONS.
        UNLIKE AN ACTUAL PERFORMANCE RECORD, SIMULATED RESULTS DO NOT REPRESENT
        ACTUAL TRADING. ALSO, SINCE THE TRADES HAVE NOT BEEN EXECUTED, THE
        RESULTS MAY HAVE UNDER-OR-OVER COMPENSATED FOR THE IMPACT, IF ANY, OF
        CERTAIN MARKET FACTORS, SUCH AS LACK OF LIQUIDITY.
      </p>
      <p>
        SIMULATED TRADING PROGRAMS IN GENERAL ARE ALSO SUBJECT TO THE FACT THAT
        THEY ARE DESIGNED WITH THE BENEFIT OF HINDSIGHT. NO REPRESENTATION IS
        BEING MADE THAT ANY ACCOUNT WILL OR IS LIKELY TO ACHIEVE PROFIT OR
        LOSSES SIMILAR TO THOSE SHOWN.
      </p>
      <p>
        All trades, patterns, charts, systems, etc., discussed on this website
        or in marketing materials are for illustrative purposes only and not to
        be construed as specific advisory recommendations. All ideas and
        material presented are entirely those of the author and do not
        necessarily reflect those of the publisher or any regulatory body.
      </p>

      <h3>Testimonial Disclaimer</h3>
      <p>
        Testimonials appearing on this website are received in various forms
        through a variety of submission methods. They reflect the real-life
        experiences and opinions of individuals who have used our products
        and/or services.
      </p>
      <p>In compliance with FTC guidelines:</p>
      <ul>
        <li>
          Testimonials displayed on this website are{" "}
          <strong>not compensated</strong>. Individuals providing testimonials
          have not received payment, free products, or other incentives in
          exchange for their statements.
        </li>
        <li>
          Testimonials are presented <strong>verbatim</strong> with the
          exception of minor corrections for grammar, spelling, or typographical
          errors where noted.
        </li>
        <li>
          All testimonials have been reviewed for authenticity and represent the
          genuine experiences of the individuals who provided them.
        </li>
        <li>
          The results described in testimonials are not typical and individual
          results will vary. No guarantee of similar results is made or implied.
        </li>
      </ul>

      <hr />

      <p>
        For questions about these disclosures, contact us at{" "}
        <a href="mailto:support@algoalpha.co">support@algoalpha.co</a>.
      </p>
    </LegalPageLayout>
  );
}
