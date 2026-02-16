/**
 * SECURITY NOTE: API keys are managed via Google Secret Manager.
 * See /docs/guides/CONTACT-SETUP-GUIDE.md and /docs/guides/GCP-DEPLOYMENT-GUIDE.md for setup instructions.
 * Refactored to prevent secret exposure in URLs.
 * See: /docs/security/SECURITY-FIX-LOG.md
 */

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// 1. Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
  honeypot: z.string().max(0, "Bot detected"), // Should be empty
  recaptchaToken: z.string().min(1, "Captcha token missing"),
});

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();

    // 2. Validate Input
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input or bot detected" },
        { status: 400 }
      );
    }

    const { name, email, message, recaptchaToken } = result.data;

    // 3. Verify reCAPTCHA v3 (POST body instead of Query Params)
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || "",
          response: recaptchaToken,
        }).toString(),
      }
    );
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: "Security check failed (Bot detected)" },
        { status: 403 }
      );
    }

    // 4. Send Email via Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_DESTINATION || "bolun@berkeley.edu",
      replyTo: email,
      subject: `[PORTFOLIO CONTACT] New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        ---
        This message was sent from your portfolio contact form.
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { error: "Email service is temporarily unavailable. Please try again later or reach out via LinkedIn." },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please check your connection or try again later." },
      { status: 500 }
    );
  }
}
