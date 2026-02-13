# Feature Plan: Secure Contact Form Implementation

**Date:** February 13, 2026
**Project:** Agentic Landing Template
**Author:** Gemini CLI (Agent)

## 1. Objective
Replace the direct `mailto:` link and exposed personal contact information with a secure, server-side validated contact form. This allows recruiters and visitors to contact the owner without scraping personal data, while implementing robust anti-spam measures.

## 2. Architecture Overview

### User Flow
1.  **Frontend:** Visitor fills out a form (Name, Email, Message) on the website.
2.  **Security Check (Client):** Invisible CAPTCHA (reCAPTCHA v3 or Cloudflare Turnstile) verifies the user is human.
3.  **Submission:** Data is sent to a Next.js API route (`/api/contact`).
4.  **Security Check (Server):**
    *   Validate Input (Zod schema).
    *   Verify CAPTCHA token with provider.
    *   Check Rate Limits (Simple IP-based throttling).
5.  **Processing:** Server formats the email with a specific subject tag (e.g., `[PORTFOLIO LEAD]`).
6.  **Delivery:** Server sends the email via a Transactional Email Provider (Resend or SendGrid) to the owner's inbox.
7.  **Feedback:** User receives a success message on the UI.

### Tech Stack Selection
*   **Frontend:** React Hook Form (state management), Zod (validation).
*   **Anti-Spam:** Google reCAPTCHA v3 (Invisible to user) or Cloudflare Turnstile.
*   **Email Provider:** **Resend** (Recommended for Next.js/Vercel ecosystem) or **SendGrid**. Both have free tiers sufficient for a portfolio.
*   **Backend:** Next.js App Router (Server Actions or API Routes).

---

## 3. Implementation Steps

### Phase 1: Environment & Accounts
1.  **Email Provider Setup:**
    *   Sign up for Resend/SendGrid.
    *   Verify domain (optional but recommended) or use default sender.
    *   Generate API Key.
2.  **CAPTCHA Setup:**
    *   Register site with Google reCAPTCHA v3.
    *   Get `SITE_KEY` (Public) and `SECRET_KEY` (Private).
3.  **Environment Variables & Security:**
    *   **Local Development:** Add keys to `.env.local`. **CRITICAL:** Ensure `.env*` files are listed in `.gitignore` to prevent leaking secrets to GitHub.
    *   **Cloud Production (GCP):** Use **Google Secret Manager** to store `RESEND_API_KEY` and `RECAPTCHA_SECRET_KEY`. Access these secrets in Cloud Run via environment variable mapping.
    *   **Required Variables:**
        *   `RESEND_API_KEY`
        *   `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
        *   `RECAPTCHA_SECRET_KEY`
        *   `CONTACT_EMAIL_DESTINATION` (The destination address)

### Phase 2: Frontend Development (`app/components/ContactForm.tsx`)
1.  Create a form component with:
    *   Name (Text input)
    *   Email (Email input)
    *   Message (Textarea)
2.  Integrate **React Hook Form** for handling submission.
3.  Integrate **Zod** for immediate client-side validation (e.g., "Email is required").
4.  Add **reCAPTCHA** hook to generate a token upon submit.
5.  **States:** Handle `isSubmitting`, `isSuccess`, `isError`.

### Phase 3: Backend Development (`app/api/contact/route.ts`)
1.  Create a POST handler.
2.  **Step 1: Validation.** Parse body with Zod. If invalid -> Return 400.
3.  **Step 2: CAPTCHA Verification.** Send token to Google. If score < 0.5 (bot) -> Return 403.
4.  **Step 3: Email Dispatch.** Use the Email Provider SDK to send.
    *   **From:** `Portfolio Bot <no-reply@resend.dev>` (or verified domain).
    *   **To:** `bolun@berkeley.edu` (Configured via env var).
    *   **Reply-To:** The visitor's email (so you can hit "Reply" in Gmail).
    *   **Subject:** `[PORTFOLIO CONTACT] New message from {Visitor Name}`.
5.  Return JSON success response.

---

## 4. Security Risk & Mitigation Strategy

| Risk | Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| **Email Scraping** | Spammers add your personal email to lists. | **Complete Removal:** Remove `mailto:` links and raw email text from the DOM. |
| **Form Spam (Bots)** | Inbox flooded with automated junk. | **Honeypot Field:** A hidden input field. If filled, reject the request (bots usually fill everything). <br> **reCAPTCHA v3:** Invisible scoring of user behavior. |
| **Abuse (Human)** | Malicious user manually sending threats. | **Rate Limiting:** Limit requests to 3 per IP per hour. <br> **Input Sanitization:** Strip HTML tags to prevent XSS (though email clients usually handle this). |
| **DDoS on Email API** | Exhausting your email quota (cost). | **Rate Limiting:** Critical. Implement a simple in-memory check or use a library like `upstash/ratelimit` if traffic grows. |

### Proposed Rate Limit Logic (MVP)
Since this is deployed on Serverless (Cloud Run), local memory rate limiting is inconsistent.
*   **Option A (Simple):** Rely on reCAPTCHA's built-in throttling and the Email Provider's daily limits.
*   **Option B (Robust):** Use a lightweight external KV store (like Upstash Redis) to store IP addresses and timestamps. *Recommendation: Start with Option A for MVP.*

---

## 5. Deployment Considerations (GCP Cloud Run)

*   **Environment Variables:** Must be set in the `gcloud run deploy` command or via the Cloud Console.
*   **Rebuild:** The container must be rebuilt to include the new server-side code.
*   **Domain Verification:** To ensure emails don't go to your *own* spam folder, verify the sending domain in the Email Provider settings if you own `bolun.du` or similar. If not, use the provider's default testing domain, but check your spam folder initially.

## 6. Next Actions
1.  Confirm preference for **Resend** vs **SendGrid**.
2.  Confirm if you want to implement the **Honeypot** field (easiest low-tech spam fix).
3.  Begin coding Phase 2 (Frontend).
