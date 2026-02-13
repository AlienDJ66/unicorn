# Security Fix Log

This document records the security hardening steps taken to resolve vulnerabilities identified in the audit.

## [2026-02-13] - API & Container Hardening

### 1. reCAPTCHA Secret Protection
- **Purpose**: Prevent sensitive API keys from appearing in server logs or proxy metadata.
- **Change**: Refactored `app/api/contact/route.ts` to send the reCAPTCHA `secret` and `response` token via a POST request body (`application/x-www-form-urlencoded`) instead of URL query parameters.
- **Vulnerability Resolved**: Secret Exposure in URL.

### 2. Development Container Optimization
- **Purpose**: Reduce the attack surface and improve build speed of the development environment.
- **Change**: Modified `Dockerfile.dev` to remove unnecessary third-party cloud CLIs (Azure, GCP). The development container is now focused strictly on the Node.js/Next.js environment.
- **Vulnerability Resolved**: Deployment Container Bloat.

### 3. Identity Verification
- **Purpose**: Ensure the site identifies as Bolun Du.
- **Change**: Updated metadata and global configuration to reflect owner identity.
