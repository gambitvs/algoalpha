import { Metadata } from "next";
import { LegalPageLayout } from "@/components/shared/legal-page-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service" lastModified="July 25th, 2024">
      <p>
        This Terms of Service Agreement (&quot;Agreement&quot;) is entered into
        by and between Nostradeamus LLC, doing business as Algo Alpha
        (&quot;Algo Alpha,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;), and the individual or entity accessing or using the
        Algo Alpha service (&quot;Customer,&quot; &quot;you,&quot; or
        &quot;your&quot;). By accessing or using our services, you agree to be
        bound by this Agreement.
      </p>

      <h3>1. Definitions</h3>
      <ul>
        <li>
          <strong>&quot;Authorized User&quot;</strong> means an individual who
          is authorized by Customer to access and use the Service under
          Customer&apos;s account.
        </li>
        <li>
          <strong>&quot;Customer Data&quot;</strong> means all data,
          information, and content that Customer or its Authorized Users submit,
          upload, or transmit through the Service.
        </li>
        <li>
          <strong>&quot;Documentation&quot;</strong> means all user guides,
          manuals, and other documentation provided by Algo Alpha related to the
          Service.
        </li>
        <li>
          <strong>&quot;Algo Alpha IP&quot;</strong> means the Service, all
          improvements, enhancements, and modifications thereto, all derivative
          works, and all intellectual property rights therein.
        </li>
        <li>
          <strong>&quot;Service&quot;</strong> means the proprietary algorithmic
          trading software and related services provided by Algo Alpha as
          described in the applicable order form or subscription agreement.
        </li>
      </ul>

      <h3>2. Access and Use</h3>
      <p>
        Subject to the terms and conditions of this Agreement, Algo Alpha grants
        Customer a <strong>non-exclusive, non-transferable, revocable</strong>{" "}
        license to access and use the Service during the term of this Agreement
        solely for Customer&apos;s internal business purposes and in accordance
        with the Documentation.
      </p>
      <h4>Risk Settings</h4>
      <p>
        The Service provides three risk settings for algorithmic trading
        strategies:
      </p>
      <ul>
        <li>
          <strong>Aggressive</strong> — Higher risk tolerance with greater
          potential drawdowns
        </li>
        <li>
          <strong>Medium (Moderate)</strong> — Balanced approach to risk and
          return
        </li>
        <li>
          <strong>Conservative</strong> — Lower risk tolerance with more
          controlled drawdowns
        </li>
      </ul>
      <p>
        Customer is solely responsible for selecting and adjusting risk settings
        appropriate to their financial situation and risk tolerance.
      </p>
      <h4>Use Restrictions</h4>
      <p>Customer shall not, and shall not permit any third party to:</p>
      <ol>
        <li>
          Copy, modify, or create derivative works based upon the Service or any
          portion thereof;
        </li>
        <li>
          Reverse engineer, disassemble, decompile, decode, or otherwise attempt
          to derive the source code, algorithms, or underlying ideas of the
          Service;
        </li>
        <li>
          Sublicense, sell, resell, transfer, assign, distribute, or otherwise
          commercially exploit or make available to any third party the Service;
        </li>
        <li>
          Use the Service for the benefit of any third party or to provide
          service bureau, time-sharing, or similar services;
        </li>
        <li>
          Remove any proprietary notices, labels, or markings from the Service;
        </li>
        <li>
          Access the Service for the purpose of building a competitive product
          or service;
        </li>
        <li>
          Access the Service for the purpose of monitoring its availability,
          performance, or functionality, or for any benchmarking or competitive
          purposes;
        </li>
        <li>
          Interfere with or disrupt the integrity or performance of the Service;
        </li>
        <li>
          Attempt to gain unauthorized access to the Service or its related
          systems or networks;
        </li>
        <li>
          Use the Service in violation of any applicable law, regulation, or
          rule;
        </li>
        <li>
          Use the Service to transmit any malicious code, viruses, or harmful
          software;
        </li>
        <li>
          Share account credentials with any unauthorized individual or entity;
        </li>
        <li>
          Use the Service to engage in any form of market manipulation or
          fraudulent trading activity.
        </li>
      </ol>

      <h3>3. Customer Responsibilities</h3>
      <h4>Acceptable Use</h4>
      <p>
        Customer shall use the Service only for lawful purposes and in
        accordance with this Agreement. Customer is responsible for all activity
        occurring under its account and shall abide by all applicable local,
        state, national, and international laws and regulations.
      </p>
      <h4>Warranties</h4>
      <p>
        Customer warrants that (a) it has the legal right and authority to enter
        into this Agreement; (b) it will use the Service in compliance with all
        applicable laws, rules, and regulations; and (c) it will not use the
        Service in any way that could damage, disable, overburden, or impair the
        Service.
      </p>
      <h4>License Use</h4>
      <p>
        The license granted herein is for Customer&apos;s use only. Customer
        shall not share, transfer, or allow access to the Service by any
        unauthorized individual. Each license is tied to a single Customer
        account.
      </p>
      <h4>Customer Data</h4>
      <p>
        Customer grants Algo Alpha a non-exclusive, worldwide, royalty-free
        license to use, copy, store, transmit, and display Customer Data solely
        to the extent necessary to provide the Service and as otherwise
        described in the Privacy Policy.
      </p>
      <h4>Passwords and Security</h4>
      <p>
        Customer is responsible for maintaining the confidentiality of its
        account credentials. Customer shall immediately notify Algo Alpha of any
        unauthorized use of its account or any other breach of security.
        Customer is solely responsible for any activity that occurs under its
        account.
      </p>

      <h3>4. Fees and Payment</h3>
      <p>
        Customer shall pay all fees specified in the applicable order form or
        subscription agreement. Fees consist of:
      </p>
      <ul>
        <li>
          <strong>Upfront fees</strong> — Due at the time of purchase and
          activation of the Service.
        </li>
        <li>
          <strong>Monthly maintenance fees</strong> — Recurring fees invoiced on
          a monthly basis as described in Section 5 below.
        </li>
      </ul>
      <p>
        All fees are non-refundable except as expressly set forth in this
        Agreement. Late payments shall accrue interest at a rate of{" "}
        <strong>1.5% per month</strong> (or the maximum rate permitted by law,
        whichever is less).
      </p>
      <p>
        If payment is not received within <strong>30 days</strong> of the due
        date, Algo Alpha reserves the right to suspend Customer&apos;s access to
        the Service. Accounts that have been suspended due to non-payment may be
        subject to a <strong>$500 re-licensing fee</strong> to reactivate
        access.
      </p>
      <p>
        Algo Alpha reserves the right to increase fees annually by up to{" "}
        <strong>10%</strong> with 30 days&apos; prior written notice to
        Customer.
      </p>

      <h3>5. Monthly Maintenance Fees</h3>
      <p>
        Monthly maintenance fees will be invoiced on a monthly basis beginning{" "}
        <strong>one (1) month</strong> after the date of activation of the
        Service. Invoices are due upon receipt.
      </p>
      <p>
        A grace period of <strong>fourteen (14) calendar days</strong> from the
        invoice date will be provided for payment. If payment is not received
        within the grace period, the provisions of Section 4 regarding late
        payments and suspension shall apply.
      </p>

      <h3>6. Broker Selection</h3>
      <p>
        <strong>
          Algo Alpha is NOT a broker and does not provide brokerage services.
        </strong>{" "}
        Algo Alpha is a software provider that offers algorithmic trading
        technology. Customer is solely responsible for selecting and maintaining
        its own brokerage account with a licensed broker of Customer&apos;s
        choosing.
      </p>
      <p>
        Algo Alpha makes no representations or warranties regarding any broker,
        and shall not be liable for any losses or damages arising from
        Customer&apos;s choice of broker or the actions or omissions of any
        broker.
      </p>

      <h3>7. Confidential Information</h3>
      <p>
        Each party acknowledges that in the course of this Agreement, it may
        receive confidential and proprietary information of the other party
        (&quot;Confidential Information&quot;). Confidential Information
        includes, without limitation, the terms of this Agreement, trade
        secrets, algorithms, business plans, financial information, customer
        data, and any other information designated as confidential.
      </p>
      <p>
        Each party agrees to hold the other party&apos;s Confidential
        Information in strict confidence and not to disclose it to any third
        party without the prior written consent of the disclosing party. This
        obligation shall survive termination of this Agreement for a period of{" "}
        <strong>five (5) years</strong>.
      </p>

      <h3>8. Privacy Policy</h3>
      <p>
        Algo Alpha&apos;s collection, use, and disclosure of personal
        information is governed by our Privacy Policy, available at{" "}
        <a href="/privacy-policy">algoalpha.co/privacy-policy</a>. By using the
        Service, Customer consents to the collection and use of information as
        described in the Privacy Policy.
      </p>

      <h3>9. IP Ownership</h3>
      <p>
        <strong>The Service is licensed, not sold.</strong> Algo Alpha and its
        licensors retain all right, title, and interest in and to the Service,
        including all related intellectual property rights. No rights are
        granted to Customer other than as expressly set forth in this Agreement.
      </p>
      <h4>Feedback</h4>
      <p>
        If Customer provides any feedback, suggestions, or recommendations
        regarding the Service (&quot;Feedback&quot;), Customer hereby assigns to
        Algo Alpha all right, title, and interest in and to such Feedback. Algo
        Alpha shall be free to use, disclose, reproduce, license, and otherwise
        distribute and exploit the Feedback without obligation or restriction of
        any kind.
      </p>

      <h3>10. Warranty Disclaimer</h3>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
        WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
        LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, TITLE, AND NON-INFRINGEMENT.
      </p>
      <p>
        ALGO ALPHA DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
        ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. ALGO
        ALPHA DOES NOT WARRANT OR GUARANTEE ANY SPECIFIC RESULTS FROM THE USE OF
        THE SERVICE, INCLUDING BUT NOT LIMITED TO ANY SPECIFIC LEVEL OF TRADING
        PERFORMANCE, RETURNS, OR PROFITS.
      </p>
      <p>
        CUSTOMER ACKNOWLEDGES AND AGREES THAT THE USE OF THE SERVICE INVOLVES
        SIGNIFICANT RISK, INCLUDING THE RISK OF LOSS OF ALL INVESTED CAPITAL.
        PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS.
      </p>

      <h3>11. Indemnification</h3>
      <p>
        Customer shall indemnify, defend, and hold harmless Algo Alpha, its
        officers, directors, employees, agents, affiliates, and licensors from
        and against any and all claims, liabilities, damages, losses, costs,
        expenses, and fees (including reasonable attorneys&apos; fees) arising
        from or relating to: (a) Customer&apos;s use of the Service; (b)
        Customer&apos;s breach of this Agreement; (c) Customer&apos;s violation
        of any applicable law, rule, or regulation; or (d) Customer&apos;s
        negligence or willful misconduct.
      </p>

      <h3>12. Limitations of Liability</h3>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
        ALGO ALPHA BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
        PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING
        FROM: (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE
        SERVICE; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE;
        (C) ANY CONTENT OBTAINED FROM THE SERVICE; OR (D) UNAUTHORIZED ACCESS,
        USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
      </p>
      <p>
        ALGO ALPHA&apos;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING
        TO THIS AGREEMENT SHALL NOT EXCEED THE TOTAL AMOUNT OF FEES PAID BY
        CUSTOMER TO ALGO ALPHA DURING THE <strong>TWELVE (12) MONTHS</strong>{" "}
        IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
      </p>

      <h3>13. Termination</h3>
      <p>
        Either party may terminate this Agreement at any time by providing
        written notice to the other party. Upon termination:
      </p>
      <ul>
        <li>
          Customer&apos;s access to the Service will be immediately revoked.
        </li>
        <li>
          All fees owed up to the date of termination shall remain due and
          payable.
        </li>
        <li>
          <strong>No refunds</strong> will be issued for any pre-paid fees,
          including upfront fees and any unused portion of monthly maintenance
          fees.
        </li>
        <li>
          Customer shall immediately cease all use of the Service and destroy
          any copies of Documentation in its possession.
        </li>
        <li>
          The provisions of this Agreement that by their nature should survive
          termination shall survive, including Sections 7, 9, 10, 11, 12, and
          14.
        </li>
      </ul>

      <h3>14. Governing Law</h3>
      <p>
        This Agreement shall be governed by and construed in accordance with the
        laws of the <strong>State of Wyoming</strong>, without regard to its
        conflict of law provisions. Any legal action or proceeding arising under
        this Agreement shall be brought exclusively in the state or federal
        courts located in <strong>Natrona County, Wyoming</strong>, and the
        parties hereby consent to personal jurisdiction and venue in such
        courts.
      </p>

      <hr />

      <h3>Contact Information</h3>
      <p>
        <strong>Nostradeamus LLC</strong>
        <br />
        30 N Gould St Ste R
        <br />
        Sheridan, WY 82801
        <br />
        Email: <a href="mailto:support@algoalpha.co">support@algoalpha.co</a>
      </p>
    </LegalPageLayout>
  );
}
