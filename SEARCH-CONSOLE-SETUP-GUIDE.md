# Search Console Setup & Verification Guide

**Task**: Issue #6 - GSC + Bing verification and monitoring  
**Status**: ⏳ Awaiting manual verification  
**Date Created**: 2026-02-20

---

## Overview

This guide covers the complete setup process for:
1. **Google Search Console** (GSC)
2. **Bing Webmaster Tools**
3. **Verification methods**
4. **Initial monitoring configuration**

---

## 1. Google Search Console Setup

### Step 1: Access Google Search Console
1. Visit: https://search.google.com/search-console
2. Sign in with Google account: `info@aushnaracollege.edu.bd` (recommended) or admin account
3. Click "Add Property"

### Step 2: Add Property
**Choose**: Domain property (recommended) or URL prefix

#### Option A: Domain Property (Recommended)
- **Domain**: `aushnaracollege.edu.bd`
- **Benefit**: Covers all subdomains and protocols (http/https)
- **Verification**: DNS TXT record

#### Option B: URL Prefix
- **URL**: `https://aushnaracollege.edu.bd`
- **Benefit**: Easier verification
- **Limitation**: Only covers exact URL

**Recommendation**: Use **Domain Property** to track all subdomains

---

### Step 3: Verification Methods

#### Method 1: DNS Verification (Recommended for Domain Property)

**Steps**:
1. Google provides a TXT record: `google-site-verification=XXXXXXXXX`
2. Log in to Cloudflare Dashboard
3. Navigate to: **Websites → aushnaracollege.edu.bd → DNS → Records**
4. Add TXT record:
   - **Type**: TXT
   - **Name**: @ (root domain)
   - **Content**: `google-site-verification=XXXXXXXXX` (provided by Google)
   - **TTL**: Auto
5. Click "Save"
6. Return to Google Search Console and click "Verify"

**Wait Time**: 5-30 minutes for DNS propagation

---

#### Method 2: HTML File Upload (Alternative)

**Steps**:
1. Google provides a file: `googleXXXXXXXX.html`
2. Download the file
3. Upload to: `/root/.openclaw/workspace/aushnaracollege-website/public/`
4. File will be accessible at: `https://aushnaracollege.edu.bd/googleXXXXXXXX.html`
5. Deploy to production: `npm run build && vercel --prod`
6. Return to Google Search Console and click "Verify"

---

#### Method 3: HTML Meta Tag (Alternative)

**Steps**:
1. Google provides a meta tag: `<meta name="google-site-verification" content="XXXXXXXXX" />`
2. Add to `index.html` in `<head>` section:

```html
<head>
  ...
  <meta name="google-site-verification" content="XXXXXXXXX" />
  ...
</head>
```

3. Deploy to production
4. Return to Google Search Console and click "Verify"

**File Location**: `/root/.openclaw/workspace/aushnaracollege-website/index.html`

---

### Step 4: Submit Sitemap

After verification:
1. Navigate to **Sitemaps** in left sidebar
2. Enter sitemap URL: `https://aushnaracollege.edu.bd/sitemap.xml`
3. Click "Submit"
4. Also submit: `https://aushnaracollege.edu.bd/llms.txt` (for AI discovery)

**Expected Result**: Google will begin crawling and indexing pages within 24-48 hours

---

### Step 5: Configure Settings

#### Coverage Settings:
- **URL Inspection**: Check key pages (/, /admissions, /programs, /contact)
- **Coverage Report**: Monitor for errors and warnings
- **Indexation Alerts**: Enable email notifications

#### Performance Settings:
- **Search Performance**: Monitor clicks, impressions, CTR, position
- **Countries**: Primary = Bangladesh
- **Devices**: Desktop + Mobile + Tablet

#### Enhancements:
- **Mobile Usability**: Should show 0 errors (already responsive)
- **Core Web Vitals**: Monitor LCP, FID, CLS
- **Structured Data**: Will show CollegeOrUniversity, WebSite, FAQPage schemas

---

## 2. Bing Webmaster Tools Setup

### Step 1: Access Bing Webmaster Tools
1. Visit: https://www.bing.com/webmasters
2. Sign in with Microsoft account or create one
3. Click "Add Site"

### Step 2: Add Site
**URL**: `https://aushnaracollege.edu.bd`

**Sitemap**: `https://aushnaracollege.edu.bd/sitemap.xml`

---

### Step 3: Verification Methods

#### Method 1: XML File Upload (Recommended)

**Steps**:
1. Bing provides a file: `BingSiteAuth.xml`
2. Download the file
3. Upload to: `/root/.openclaw/workspace/aushnaracollege-website/public/`
4. Deploy to production
5. File accessible at: `https://aushnaracollege.edu.bd/BingSiteAuth.xml`
6. Return to Bing Webmaster and click "Verify"

---

#### Method 2: HTML Meta Tag

**Steps**:
1. Bing provides a meta tag: `<meta name="msvalidate.01" content="XXXXXXXXX" />`
2. Add to `index.html` in `<head>` section
3. Deploy to production
4. Return to Bing Webmaster and click "Verify"

---

#### Method 3: Import from Google Search Console (Easiest)

**Steps**:
1. During Bing setup, select "Import from Google Search Console"
2. Sign in with Google account used for GSC
3. Select property: `aushnaracollege.edu.bd`
4. Click "Import"

**Benefit**: Automatic verification if GSC is already set up

---

### Step 4: Submit Sitemap

After verification:
1. Navigate to **Sitemaps** section
2. Enter: `https://aushnaracollege.edu.bd/sitemap.xml`
3. Click "Submit"

---

### Step 5: Configure Settings

#### Site Scan:
- Run initial crawl diagnostic
- Check for crawl errors
- Review robots.txt compliance

#### URL Inspection:
- Test key pages
- Check mobile-friendliness
- Review SSL certificate

---

## 3. Verification Checklist

### Pre-Verification:
- [ ] DNS records accessible via Cloudflare
- [ ] Sitemap.xml exists and is valid: https://aushnaracollege.edu.bd/sitemap.xml
- [ ] Robots.txt allows crawling: https://aushnaracollege.edu.bd/robots.txt
- [ ] HTTPS enabled with valid SSL certificate
- [ ] Website is live and accessible

### Google Search Console:
- [ ] Property added (Domain or URL prefix)
- [ ] Verification method chosen
- [ ] Verification completed successfully
- [ ] Sitemap submitted
- [ ] Email notifications enabled
- [ ] Initial crawl requested (URL Inspection → Request Indexing for homepage)

### Bing Webmaster Tools:
- [ ] Site added
- [ ] Verification method chosen
- [ ] Verification completed successfully
- [ ] Sitemap submitted
- [ ] Site scan initiated

---

## 4. Initial Monitoring Setup

### Google Search Console Dashboards:

#### Performance Dashboard:
- **Metrics**: Total clicks, impressions, average CTR, average position
- **Filters**: Last 28 days, Bangladesh, All devices
- **Compare**: Week-over-week growth

#### Coverage Dashboard:
- **Monitor**: Valid pages count
- **Alerts**: Errors (should be 0)
- **Warnings**: Review and fix

#### Experience Dashboard:
- **Core Web Vitals**: Should be "Good" (already optimized)
- **Mobile Usability**: Should have 0 issues

---

### Bing Webmaster Dashboards:

#### Site Performance:
- **Metrics**: Clicks, impressions, CTR
- **Keywords**: Top performing keywords
- **Pages**: Best performing pages

#### Crawl Information:
- **Crawl Rate**: Should increase after sitemap submission
- **Crawl Errors**: Should be 0
- **Pages Indexed**: Track growth

---

## 5. Post-Verification Actions

### Week 1:
1. Check daily for crawl errors
2. Verify all key pages are indexed:
   - Homepage (/)
   - Admissions (/admissions)
   - Programs (/programs)
   - Contact (/contact)
   - About (/about)
3. Request indexing for any missing pages

### Week 2-4:
1. Monitor performance metrics (baseline establishment)
2. Review keyword rankings
3. Check for schema markup errors
4. Review mobile usability

### Ongoing (Weekly):
1. Track KPI changes (see WEEKLY-KPI-PIPELINE.md)
2. Review new crawl errors
3. Monitor indexation coverage
4. Check Core Web Vitals

---

## 6. Troubleshooting

### Common Issues:

#### "Verification Failed"
- **DNS**: Wait 30-60 minutes for propagation
- **HTML File**: Ensure file is in /public/ and deployed
- **Meta Tag**: Check tag is in <head> and deployed

#### "Sitemap Not Found"
- Verify URL: https://aushnaracollege.edu.bd/sitemap.xml
- Check robots.txt allows sitemap access
- Ensure sitemap is valid XML

#### "No Pages Indexed"
- Wait 3-7 days after sitemap submission
- Use URL Inspection tool to request indexing
- Check robots.txt isn't blocking crawlers
- Verify canonical tags are correct

---

## 7. Contact Information

**Technical Contact**: technical@aushnaracollege.edu.bd  
**Webmaster**: webmaster@aushnaracollege.edu.bd  
**Domain Registrar**: Cloudflare  

---

## 8. Resources

- **Google Search Console Help**: https://support.google.com/webmasters
- **Bing Webmaster Guidelines**: https://www.bing.com/webmasters/help
- **Cloudflare DNS Management**: https://dash.cloudflare.com
- **Sitemap Validator**: https://www.xml-sitemaps.com/validate-xml-sitemap.html

---

## Next Steps

1. ⏳ **Add property** to Google Search Console
2. ⏳ **Choose verification method** and implement
3. ⏳ **Submit sitemap** after verification
4. ⏳ **Add site** to Bing Webmaster Tools
5. ⏳ **Verify and submit sitemap** to Bing
6. ⏳ **Set up email alerts** for both platforms
7. ⏳ **Document credentials** in password manager

---

**Status**: Guide complete, awaiting manual implementation  
**Owner**: SEO Team  
**Related Issue**: #6 (GSC + Bing verification)  
**Next Document**: WEEKLY-KPI-PIPELINE.md
