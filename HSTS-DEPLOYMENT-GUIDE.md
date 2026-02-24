# HSTS Deployment Guide
## Updated: 2026-02-24

---

## What Was Added In Repo

- Cloudflare Pages header file: `public/_headers`
- Vercel header config: `vercel.json`
- Monitoring now fails when HSTS is missing: `scripts/monitoring-check.mjs`

---

## Required External Steps

1. Deploy latest commit to production hosts.
2. If using Cloudflare proxy/CDN, ensure edge rules do not strip `Strict-Transport-Security`.
3. Re-run:
   - `npm run monitor:check`
4. Confirm output includes `PASS HSTS header detected`.

---

## Expected Header

`Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`

---

## Rollback Note

Only disable HSTS in emergency certificate/hostname misconfiguration cases.
