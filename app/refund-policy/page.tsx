import { Metadata } from "next";
import { LegalPageLayout } from "@/components/shared/legal-page-layout";

export const metadata: Metadata = {
  title: "Refund Policy",
};

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout title="Refund Policy">
      <h3>All Sales Are Final</h3>
      <p>
        All sales of Algo Alpha products and services are <strong>final</strong>
        . No refunds or exchanges will be issued once payment has been received
        and the order has been processed. By completing your purchase, you
        acknowledge and agree to this no-refund policy.
      </p>

      <h3>Partial Payments</h3>
      <p>
        If you have entered into a partial payment arrangement, all partial
        payments made are <strong>non-refundable deposits</strong>. Partial
        payments secure your entity and access for a period of{" "}
        <strong>thirty (30) days</strong> from the date of the initial payment.
      </p>
      <p>
        Failure to complete the remaining balance within the specified timeframe
        may result in forfeiture of the deposit and cancellation of the order.
      </p>

      <h3>Store Credit</h3>
      <p>
        In rare circumstances and solely at Algo Alpha&apos;s discretion, store
        credit may be issued in lieu of a refund. If issued, store credit is
        valid for a period of <strong>six (6) months</strong> from the date of
        issuance and may be applied toward any Algo Alpha product or service.
        Store credit is non-transferable and has no cash value.
      </p>

      <h3>Processing Timeline</h3>
      <p>
        Upon receipt of your payment and completion of the Onboarding Interview
        submission, the following process begins:
      </p>
      <ol>
        <li>
          <strong>Funding Plan</strong> — A customized funding plan will be
          prepared within 24 hours to 2 weeks following the submission of your
          Onboarding Interview, depending on the complexity of your account
          setup.
        </li>
        <li>
          <strong>Strategy Call</strong> — A strategy call will be scheduled to
          review your funding plan, answer questions, and finalize your
          configuration.
        </li>
        <li>
          <strong>Implementation</strong> — Following the strategy call, our
          team will proceed with the implementation and activation of your
          algorithmic trading system.
        </li>
      </ol>
      <p>
        Work begins immediately after receipt of the Onboarding Interview
        submission and payment. Because our team dedicates significant resources
        to each customer&apos;s onboarding and setup from the moment payment is
        received, refunds are not available once this process has commenced.
      </p>

      <h3>Credit Card Terms</h3>
      <p>
        By submitting your credit card information, you authorize Algo Alpha to
        charge the <strong>full amount</strong> of your purchase to the credit
        card provided. If you choose to split payment across multiple credit
        cards, each card will be charged the agreed-upon portion and no
        additional authorization will be required.
      </p>
      <p>
        All payments are processed securely through our payment processing
        partners. Algo Alpha does not store your full credit card information on
        our servers.
      </p>

      <hr />

      <p>
        If you have questions about this refund policy, please contact us at{" "}
        <a href="mailto:support@algoalpha.co">support@algoalpha.co</a>.
      </p>
    </LegalPageLayout>
  );
}
