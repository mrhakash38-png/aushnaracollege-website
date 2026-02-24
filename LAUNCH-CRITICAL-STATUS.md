# Launch-Critical Status
## Aushnara College Website
## Updated: 2026-02-24

---

## Canonical Status

- Frontend core pages and routing: `Complete`
- SEO/meta/schema baseline: `Complete`
- Launch-critical operations: `In progress`
- Backend roadmap items: `Out of scope for launch-critical tracking`

Use this file as the single source of truth for production readiness.

---

## Open Launch-Critical Items

1. `P0` Verify Google Search Console and submit sitemap (manual external action)
2. `P0` Verify Bing Webmaster Tools and submit sitemap (manual external action)
3. `P0` Enable and verify HSTS on production domain
4. `P1` Decide contact form mode (`mailto` fallback only vs API endpoint) and document decision
5. `P1` Close/retag completed GitHub issues and align milestones
6. `P1` Run and record real-device mobile smoke test

---

## Done Criteria

- GSC property verified and sitemap ingestion confirmed
- Bing property verified and sitemap ingestion confirmed
- `npm run monitor:check` returns no failures, including HSTS
- Contact submission mode documented and validated
- Issue tracker status aligned with repository status docs
- Mobile smoke test evidence recorded

---

## Notes

- Current contact form behavior: falls back to `mailto:` when `VITE_CONTACT_ENDPOINT` is not configured.
- HSTS should be enforced by hosting headers, not app runtime code.
