# Execution Plan: Secure Contact Form

This document breaks down the [CONTACT-FEATURE-PLAN.md](./CONTACT-FEATURE-PLAN.md) into specific, actionable tasks.

## Phase 1: Preparation & Environment
- [ ] **Security Check**: Verify `.env.local` and `.env` are in `.gitignore` (Done).
- [ ] **Account Setup**: Create a free account at [Resend.com](https://resend.com) (Email delivery).
- [ ] **reCAPTCHA Setup**: Register for [Google reCAPTCHA v3](https://www.google.com/recaptcha/admin) and get the Site Key and Secret Key.
- [ ] **Dependency Installation**:
  ```bash
  npm install resend zod react-hook-form @hookform/resolvers/zod
  ```
- [ ] **Configuration**: Update `.env.local` with:
  - `RESEND_API_KEY`
  - `RECAPTCHA_SECRET_KEY`
  - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
  - `CONTACT_EMAIL_DESTINATION` (bolun@berkeley.edu)

## Phase 2: Frontend Implementation
- [ ] **Create Form Component**: Develop `app/components/ContactForm.tsx`.
  - [ ] Implement Honeypot field (visually hidden).
  - [ ] Use `react-hook-form` and Zod for validation.
  - [ ] Add loading state for the "Send" button.
- [ ] **Update Home Page**: Replace the existing contact section in `app/page.tsx` with the new component.
- [ ] **Icons**: Ensure `components/Icons.tsx` has a `PaperPlaneIcon` and a `LoadingSpinnerIcon`.

## Phase 3: Backend Implementation
- [ ] **API Route**: Create `app/api/contact/route.ts`.
  - [ ] **Input Validation**: Verify visitor data using Zod schema.
  - [ ] **Bot Detection**: 
    - [ ] Check Honeypot field.
    - [ ] Verify reCAPTCHA v3 token with Google API.
  - [ ] **Email Dispatch**: Use `resend` SDK to send the message.
  - [ ] **Subject Line**: Use `[PORTFOLIO CONTACT] From {name}`.

## Phase 4: Verification & Security Testing
- [ ] **Validation Test**: Ensure invalid emails or empty messages are blocked.
- [ ] **Honeypot Test**: Verify that filling the hidden field results in a 400 error.
- [ ] **Email Test**: Confirm that messages arrive in the inbox with the correct `Reply-To` address.
- [ ] **Spam Check**: Verify emails don't go to the personal spam folder.

## Phase 5: GCP Deployment (Secure)
- [ ] **Secret Manager Setup**:
  - [ ] Create secret `RESEND_API_KEY` in Google Secret Manager.
  - [ ] Create secret `RECAPTCHA_SECRET_KEY` in Google Secret Manager.
  - [ ] Grant the Cloud Run service account access to these secrets.
- [ ] **Build & Deploy**:
  ```bash
  gcloud builds submit --tag [IMAGE_URI] .
  gcloud run deploy agentic-landing \
    --image [IMAGE_URI] \
    --region us-central1 \
    --set-secrets="RESEND_API_KEY=RESEND_API_KEY:latest,RECAPTCHA_SECRET_KEY=RECAPTCHA_SECRET_KEY:latest" \
    --update-env-vars CONTACT_EMAIL_DESTINATION=bolun@berkeley.edu,NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...
  ```

## Phase 6: Final Polish
- [ ] Remove all remaining hardcoded email references from the code.
- [ ] Add success/error "Toast" notifications for user feedback.
