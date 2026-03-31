import { NextRequest } from "next/server";

interface ApplicationPayload {
  jurisdiction: string;
  experience: string;
  capital: string;
  fundingInterest: string;
  creditScore: string;
  bankruptcy: string;
  timeline: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ApplicationPayload = await request.json();

    // Validate required fields
    const { firstName, lastName, email, phone } = body;

    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !phone?.trim()
    ) {
      return Response.json(
        { error: "Name, email, and phone are required." },
        { status: 400 },
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // DQ check: bankruptcy + low credit + no funding interest
    if (
      body.bankruptcy === "yes" &&
      body.creditScore === "Under 680" &&
      body.fundingInterest === "no"
    ) {
      return Response.json({ redirect: "/dq" });
    }

    // Build payload for CRM webhook
    const webhookPayload = {
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      jurisdiction: body.jurisdiction,
      experience: body.experience,
      capital: body.capital,
      fundingInterest: body.fundingInterest || undefined,
      creditScore: body.creditScore || undefined,
      bankruptcy: body.bankruptcy || undefined,
      timeline: body.timeline,
      utm_source: body.utm_source || undefined,
      utm_medium: body.utm_medium || undefined,
      utm_campaign: body.utm_campaign || undefined,
      utm_term: body.utm_term || undefined,
      utm_content: body.utm_content || undefined,
    };

    // POST to GoHighLevel webhook if configured
    const webhookUrl = process.env.GHL_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookPayload),
      });

      if (!webhookRes.ok) {
        console.error(
          "GHL webhook failed:",
          webhookRes.status,
          await webhookRes.text(),
        );
        // Still redirect — don't block the user if webhook fails
      }
    } else {
      console.log(
        "[apply] No GHL_WEBHOOK_URL configured. Payload:",
        JSON.stringify(webhookPayload, null, 2),
      );
    }

    return Response.json({ redirect: "/calendar" });
  } catch (err) {
    console.error("[apply] Error processing application:", err);
    return Response.json(
      { error: "Internal server error. Please try again." },
      { status: 500 },
    );
  }
}
