# Guide: Obtaining API Keys for the Contact Form

To make your contact form functional, you need keys from two services: **Resend** (for sending emails) and **Google reCAPTCHA** (for security).

---

## 1. Resend API Key (Email Delivery)

[Resend](https://resend.com) is a modern email API. The free tier allows for plenty of monthly emails for a personal portfolio.

### Steps:
1.  **Sign Up**: Go to [resend.com/signup](https://resend.com/signup) and create an account.
2.  **Verify Email**: Confirm your email address through the link they send you.
3.  **Create API Key**:
    *   In the sidebar, click on **API Keys**.
    *   Click the **Create API Key** button.
    *   Give it a name (e.g., "Portfolio Website").
    *   Set permissions to **Full Access**.
    *   **Copy the key immediately** (it starts with `re_`). You won't be able to see it again.
4.  **Verification (Optional but recommended)**:
    *   If you own a custom domain, go to **Domains** in Resend and follow the instructions to add it. This prevents your emails from being marked as spam.
    *   If you don't have a domain yet, you can use their default `onboarding@resend.dev` sender for testing.

---

## 2. Google reCAPTCHA v3 Keys (Security)

reCAPTCHA v3 is "invisible"—it scores visitors in the background without making them solve puzzles.

### Steps:
1.  **Admin Console**: Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin).
2.  **Register a New Site**:
    *   **Label**: Name it (e.g., "Bolun Portfolio").
    *   **reCAPTCHA Type**: Select **reCAPTCHA v3**.
    *   **Domains**: 
        *   Add `localhost` (for your local testing).
        *   Add your deployed URL (e.g., `agentic-landing-415034451770.us-central1.run.app`).
    *   **Terms**: Accept the terms and click **Submit**.
3.  **Copy Keys**:
    *   You will see a **Site Key** (Public - used in the frontend).
    *   You will see a **Secret Key** (Private - used only in the backend API).

---

## 3. Configuring Your Environment

Once you have the keys, you need to add them to your project.

### For Local Testing:
Create or edit `projects/agentic-landing-template/.env.local`:

```bash
# Email Delivery
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL_DESTINATION=bolun@berkeley.edu

# Security
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

### For Production (GCP):
When you deploy next, we will include these as environment variables so the server can access them securely.

---

## Summary of Keys

| Key | Purpose | Where it goes |
| :--- | :--- | :--- |
| **Resend API Key** | Sends the actual email | Backend (`.env.local`) |
| **reCAPTCHA Site Key** | Identifies your site to Google | Frontend (`layout.tsx`) |
| **reCAPTCHA Secret Key** | Verifies the visitor's human score | Backend (`route.ts`) |
