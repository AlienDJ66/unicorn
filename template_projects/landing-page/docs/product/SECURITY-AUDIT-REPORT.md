# Security Audit Report: Agentic Landing Template

**Date:** February 13, 2026
**Target:** `agentic-landing-template`
**Auditor:** Gemini CLI (Agent)

## Executive Summary
The application has a strong security baseline with proper input validation (Zod), bot protection (reCAPTCHA v3, Honeypot), and secure environment variable handling. However, critical vulnerabilities exist in **rate limiting** (DoS risk) and **dependency management** (Next.js versioning).

---

## 1. Critical Findings

### 🔴 1. Lack of Rate Limiting (High Risk)
-   **Location:** `app/api/contact/route.ts`
-   **Risk:** An attacker could script a bot to bypass the client-side reCAPTCHA (or harvest valid tokens) and flood your endpoint. This would:
    1.  Exhaust your Resend email quota (causing service denial for legitimate users).
    2.  Spam your inbox.
-   **Mitigation:** Implement a server-side rate limiter. Since this runs on Cloud Run (serverless), local memory limiting is unreliable. Use a lightweight store like Upstash Redis or a database to track IP request counts.

### 🔴 2. Unstable/Invalid Next.js Version (Medium Risk)
-   **Location:** `package.json`
-   **Issue:** The dependency is listed as `"next": "^16.1.6"`. As of this audit, the latest stable version of Next.js is v15.x.
-   **Risk:** This indicates either a typo or usage of a potentially unstable "canary" or future build. This could lead to undefined behavior, security patches not being applied, or build failures.
-   **Mitigation:** Downgrade to the latest stable LTS (e.g., `^15.1.0`) or verify the source of this version tag.

---

## 2. Low/Informational Findings

### 🟡 1. Secret Exposure in URL (Low Risk)
-   **Location:** `app/api/contact/route.ts`
-   **Issue:** The Google reCAPTCHA verification sends the `secret` key as a query parameter:
    ```typescript
    fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${...}&response=${...}`)
    ```
-   **Risk:** While the request is HTTPS (encrypted), passing secrets in URLs is generally discouraged as they can appear in proxy logs or browser history (though this is a server-to-server call).
-   **Mitigation:** Send the parameters in the `body` of a POST request with `application/x-www-form-urlencoded` content type.

### 🟡 2. Development Container Bloat (Low Risk)
-   **Location:** `Dockerfile.dev`
-   **Issue:** The development image installs CLI tools for Azure, GCP, and others.
-   **Risk:** While convenient for dev, this increases the attack surface of the dev container. If a developer's machine is compromised, this container provides a "Swiss Army Knife" for attackers to pivot to cloud environments.
-   **Mitigation:** Ensure `Dockerfile.dev` is never used for production deployments (The current `Dockerfile` for prod is correctly minimal).

---

## 3. Security Strengths (Verified)

*   **✅ Secret Management:** `RESEND_API_KEY` and `RECAPTCHA_SECRET_KEY` are correctly used only on the server side (`route.ts`) and are not exposed to the client in `ContactForm.tsx`.
*   **✅ Input Validation:** The Zod schema (`contactSchema`) strictly validates email formats and string lengths before processing any logic.
*   **✅ Bot Protection:**
    *   **Honeypot:** The hidden `honeypot` field correctly traps basic bots that autofill all inputs.
    *   **reCAPTCHA v3:** correctly integrated to score user interactions.
*   **✅ XSS Protection:** React's default escaping protects against Cross-Site Scripting in the rendered output.

---

## 4. Recommended Action Plan

1.  **Fix Dependencies:** Update `package.json` to use a stable Next.js version (e.g., `15.1.6`).
2.  **Harden API:** Update `app/api/contact/route.ts` to send reCAPTCHA secrets in the request body.
3.  **Implement Rate Limiting:** Add a simple IP-based check (even a basic in-memory one is better than nothing for a single instance, though Redis is best for scaling).
4.  **CSP Headers:** Add a `headers()` configuration in `next.config.ts` to implement a strict Content Security Policy.
