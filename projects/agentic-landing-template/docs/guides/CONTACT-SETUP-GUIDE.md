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

### For Production (GCP Secret Manager):
In production, we use **Google Secret Manager** to securely store these keys. The keys are then mapped to the Cloud Run service.

1.  **Create Secrets**:
    ```bash
    echo -n "re_your_key" | gcloud secrets create RESEND_API_KEY --data-file=-
    echo -n "your_site_key" | gcloud secrets create NEXT_PUBLIC_RECAPTCHA_SITE_KEY --data-file=-
    echo -n "your_secret_key" | gcloud secrets create RECAPTCHA_SECRET_KEY --data-file=-
    ```

2.  **Grant Access**:
    Ensure the Cloud Run service account has the `Secret Manager Secret Accessor` role for these secrets.

3.  **Deploy with Secrets**:
    The deployment command should include the `--set-secrets` flag:
    ```bash
    gcloud run deploy agentic-landing \
      --set-secrets="RESEND_API_KEY=RESEND_API_KEY:latest,RECAPTCHA_SECRET_KEY=RECAPTCHA_SECRET_KEY:latest,NEXT_PUBLIC_RECAPTCHA_SITE_KEY=NEXT_PUBLIC_RECAPTCHA_SITE_KEY:latest" \
      ...
    ```

---

## Summary of Keys

| Key | Purpose | Where it goes (Local) | Where it goes (Production) |
| :--- | :--- | :--- | :--- |
| **Resend API Key** | Sends the actual email | `.env.local` | Secret Manager (`RESEND_API_KEY`) |
| **reCAPTCHA Site Key** | Identifies site to Google | `.env.local` | Secret Manager (`NEXT_PUBLIC_RECAPTCHA_SITE_KEY`) |
| **reCAPTCHA Secret Key** | Verifies human score | `.env.local` | Secret Manager (`RECAPTCHA_SECRET_KEY`) |
