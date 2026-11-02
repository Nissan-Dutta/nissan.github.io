# Nissan Dutta — Personal Portfolio & Statistical Evaluation Lab (`Nissan-Dutta.github.io`)

Minimalist, high-craft technical portfolio and interactive statistical evaluation laboratory built for **Nissan Dutta** (`@Nissan-Dutta` / `@nissandutta31-maker`).

## Key Architectural Features

1. **Zero-Code-Change Google Drive CV Engine**:
   - Directly wired to your Google Drive CV documents (`1K7AtpeLtb5KcDxWmvGKCSzwSxzxCv0FKqTIDO3YybVM` for your AIxBio/EvalCI Google Doc CV and `1RUd28SI9FJsYcEmJIG4rb7dK6k0EICcY` for your CERN PDF Resume).
   - **How to update your CV without touching code**:
     - For your Google Doc CV: Edit the Google Doc directly in Drive. The site's `export?format=pdf` link always compiles the newest revision.
     - For a PDF in Google Drive: Right-click the PDF in Google Drive -> **File information** -> **Manage versions** -> **Upload new version**. Because Google Drive keeps the exact same File ID across version uploads, your website serves the new PDF immediately with zero commits.
     - Make sure sharing on the file in Google Drive is set to **"Anyone with the link can view"**.

2. **Interactive EvalCI Statistical Significance & Power Simulator**:
   - Demonstrates why single-run benchmark deltas on small $N$ are often binomial noise, visualizing paired McNemar confidence intervals vs. naive unpaired intervals in real time.

3. **Defense-in-Depth Static Security**:
   - Zero client-side secrets or API keys.
   - Strict regex validation on Drive IDs, `rel="noopener noreferrer"` on all external links, and least-privilege GitHub Actions OIDC Pages deployment (`.github/workflows/deploy.yml`).
   - Note: For production deployment outside Canvas preview, you can optionally add a strict HTTP Content-Security-Policy header via Cloudflare or `<meta http-equiv="Content-Security-Policy" ...>` if desired.
