# Robots Policy Implementation Log

**Decision**: Option B (Balanced)  
**Implemented**: 2026-02-20  
**Status**: ✅ Complete

---

## Selected Policy: Balanced Approach

### Allowed Crawlers:
✅ **All standard search engines** (Googlebot, Bingbot, etc.)  
✅ **AI search & discovery agents**:
- OAI-SearchBot (OpenAI search)
- ChatGPT-User (browsing mode)
- PerplexityBot (answer engine)
- ClaudeBot (Anthropic discovery)

### Restricted Crawlers:
❌ **AI training-focused crawlers**:
- GPTBot (OpenAI training data)
- Google-Extended (Google AI training)
- CCBot (Common Crawl for training)
- anthropic-ai (Anthropic training)
- cohere-ai (Cohere training)

---

## Rationale

**Why Balanced?**
1. **Preserves search visibility** - All traditional search engines get full access
2. **Enables AI discovery** - Citation-focused AI agents can index and reference content
3. **Protects training data** - Training-specific crawlers are blocked
4. **Aligns with educational mission** - Discovery ✅ / Uncredited training ❌

**Educational Institution Context**:
- Admissions content SHOULD be discoverable by AI answer engines (helps prospective students)
- Program details SHOULD appear in AI-generated summaries
- Original content (research, unique institutional content) SHOULD NOT be training data without attribution

---

## Implementation Steps Completed

✅ **Step 1**: Updated `public/robots.txt` with balanced policy  
✅ **Step 2**: Added explicit allow/disallow rules for all major AI agents  
✅ **Step 3**: Added policy metadata comments to robots.txt  
✅ **Step 4**: Referenced llms.txt in sitemap section  
⏳ **Step 5**: Coordinate with Cloudflare managed rules (requires admin panel access)  
⏳ **Step 6**: Verify live robots.txt after deployment  

---

## Cloudflare Coordination Required

**Action needed in Cloudflare Dashboard**:

1. Navigate to: **Security → Bots → Configure Super Bot Fight Mode**
2. Ensure "AI Scrapers" settings align with our balanced policy:
   - **Allow** search/discovery bots (OAI-SearchBot, PerplexityBot, etc.)
   - **Block** training bots (GPTBot, Google-Extended, CCBot, etc.)
3. Check: **Scrape Shield → Managed Rules**
   - Ensure no blanket AI bot blocks override our robots.txt

**Note**: Cloudflare managed rules prepend before project robots.txt. If conflicts arise, Cloudflare rules take precedence.

---

## Verification Checklist

After deployment:
- [ ] Visit https://aushnaracollege.edu.bd/robots.txt
- [ ] Confirm no Cloudflare-managed disallow rules conflict with our allows
- [ ] Test with robots.txt tester tools
- [ ] Check Google Search Console for crawl errors
- [ ] Monitor for any unexpected blocking in server logs

---

## Governance

**Review Cadence**: Quarterly  
**Next Review**: 2026-05-20  
**Owner**: SEO Track  

**Criteria for policy change**:
- New AI agent emergence
- Regulatory requirements (copyright, training data laws)
- Institutional strategy shift (more/less permissive)

---

## Related Issues

- Issue #1: Cloudflare-managed robots policy review → ✅ Decision implemented
- Issue #25: SEO/GEO execution plan → Updated with final policy
- SEO-PLAN.md → References this implementation

---

## Next Steps

1. ✅ Commit robots.txt update
2. ✅ Deploy to production (Vercel + Cloudflare Pages)
3. ⏳ Access Cloudflare dashboard to align managed rules
4. ⏳ Verify live robots.txt matches expected output
5. ⏳ Update SEO-PLAN.md with policy reference
6. ⏳ Close Issue #1 with verification evidence

---

**Policy Status**: ✅ Documented and implemented in code  
**Deployment Status**: ⏳ Awaiting production deploy + Cloudflare alignment  
**Verification Status**: ⏳ Pending post-deployment check
