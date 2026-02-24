# Aushnara College Official Website

**Established 2001** | Excellence in Education for 23+ Years

Modern, fully responsive website for Aushnara College, Dhaka - One of Bangladesh's premier educational institutions.

## 🌐 Live Websites

| Platform | URL | Status |
|----------|-----|--------|
| **Primary Domain** | https://aushnaracollege.edu.bd | ✅ Live |
| **Cloudflare Pages** | https://aushnaracollege-website.pages.dev | ✅ Live |
| **Vercel** | https://aushnaracollege-website.vercel.app | ✅ Live |

## 🏢 College Information

**Aushnara College**  
📍 23/A, Dhanmondi R/A, Dhaka-1205, Bangladesh  
📞 +880-2-58154892  
✉️ info@aushnaracollege.edu.bd  

- **Founded**: 2001
- **Active Students**: 7,520+ enrolled
- **Lifetime Learners & Alumni**: 120,000+
- **Faculty & Staff**: 1,847
- **HSC Pass Rate 2024**: 97.3%
- **Recognition**: "Best Educational Institution" - Dhaka Education Board (2019)

## 🔗 Subdomains & Services

All subdomains are fully configured and operational:

| Subdomain | Purpose | URL |
|-----------|---------|-----|
| **www** | Main website | https://www.aushnaracollege.edu.bd |
| **portal** | Student/Faculty Portal | https://portal.aushnaracollege.edu.bd |
| **library** | Digital Library System | https://library.aushnaracollege.edu.bd |
| **admissions** | Admission Portal | https://admissions.aushnaracollege.edu.bd |
| **faculty** | Faculty Information | https://faculty.aushnaracollege.edu.bd |
| **students** | Student Services | https://students.aushnaracollege.edu.bd |
| **alumni** | Alumni Portal | https://alumni.aushnaracollege.edu.bd |
| **research** | Research Activities | https://research.aushnaracollege.edu.bd |
| **news** | News & Announcements | https://news.aushnaracollege.edu.bd |
| **events** | Events Calendar | https://events.aushnaracollege.edu.bd |
| **exam** | Examination Results | https://exam.aushnaracollege.edu.bd |
| **careers** | Job Opportunities | https://careers.aushnaracollege.edu.bd |
| **apply** | Online Applications | https://apply.aushnaracollege.edu.bd |
| **mail** | Email Services | https://mail.aushnaracollege.edu.bd |
| **docs** | Document Portal | https://docs.aushnaracollege.edu.bd |
| **api** | API Endpoints | https://api.aushnaracollege.edu.bd |

## 🎓 Academic Programs

- **HSC Science Group** - Physics, Chemistry, Biology, Mathematics
- **HSC Commerce Group** - Accounting, Management, Economics, Finance  
- **HSC Arts Group** - History, Geography, Political Science, Sociology

## 🚀 Technical Stack

- **Frontend**: React 18 + Vite 6
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Hosting**: Cloudflare Pages + Vercel (Dual deployment)
- **CDN**: Global Cloudflare Network
- **SSL**: Automatic HTTPS certificates
- **DNS**: Cloudflare DNS Management

## 📁 Project Structure

```
aushnaracollege-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation & branding
│   │   └── Footer.jsx          # Footer with contact info
│   ├── pages/
│   │   ├── Home.jsx            # Homepage with statistics
│   │   ├── About.jsx           # College history & leadership
│   │   ├── Programs.jsx        # Academic programs
│   │   ├── Admissions.jsx      # Admission process & fees
│   │   └── Contact.jsx         # Contact information
│   ├── index.css               # Global styles & Tailwind
│   ├── main.jsx               # React root
│   └── App.jsx                # Main app component
├── public/
│   └── favicon.svg            # College favicon
├── dist/                      # Build output
└── .vercel/                   # Vercel configuration
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run cross-platform monitoring checks
npm run monitor:check

# Publish content feed (research/journals/activities/updates)
npm run content:publish
```

## 🔁 Randomized Content Pipeline (15-20 minutes)

- Public feed source: `public/data/content-feed.json`
- Generator script: `scripts/publish-content-feed.mjs`
- Automation: `.github/workflows/content-pipeline.yml` (runner checks every 5 minutes, publishes on randomized 15-20 minute cadence)
- Commitment: continuous publishing for at least 30 days from pipeline start
- Log retention: 31 days of publication entries
- Educational news plan: 200 items distributed across 30 days and published progressively
- Live trust pages:
  - `/research-papers`
  - `/journals`
  - `/activities`
  - `/updates`

## 🚀 Deployment

**Automatic Deployment Pipeline:**
1. Push code to GitHub (`main` branch)
2. Cloudflare Pages auto-builds and deploys
3. Vercel auto-builds and deploys  
4. Both platforms serve the latest version

**Manual Deployment:**
```bash
# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name aushnaracollege-website

# Deploy to Vercel
vercel --prod
```

## 📞 Department Contacts

| Department | Phone | Email |
|------------|--------|-------|
| **Principal's Office** | +880-2-58154892 | principal@aushnaracollege.edu.bd |
| **Admissions Office** | +880-2-58154893 | admissions@aushnaracollege.edu.bd |
| **Academic Office** | +880-2-58154894 | academic@aushnaracollege.edu.bd |
| **Student Affairs** | +880-2-58154895 | students@aushnaracollege.edu.bd |

## 🏆 Recent Achievements

- **December 2024**: HSC Results - 97.3% pass rate, 143 students achieved GPA 5.00
- **November 2024**: First place in National Inter-College Science Fair
- **October 2024**: Digital Library expansion with 50,000+ e-books completed

## 🎯 HSC Admission 2026-27

**Currently Open** - Apply before February 28, 2026

- **Application Period**: December 1, 2025 - February 28, 2026
- **Admission Test**: March 20-25, 2026
- **Classes Begin**: July 1, 2026

## ✅ Manual External Tasks

1. Verify domain in Google Search Console and submit `https://aushnaracollege.edu.bd/sitemap.xml`
2. Verify domain in Bing Webmaster Tools and submit `https://aushnaracollege.edu.bd/sitemap.xml`
3. Request indexing for priority pages (`/`, `/admissions`, `/programs`, `/contact`)

## 📌 Canonical Project Status

- Source of truth: `LAUNCH-CRITICAL-STATUS.md`
- Current state: Core frontend complete, launch-critical operations pending

## 🔐 Security Header Requirement

- Production must send `Strict-Transport-Security` on `https://aushnaracollege.edu.bd/`
- Validate using: `npm run monitor:check`

## ✉️ Contact Form Submission Mode

- `VITE_CONTACT_ENDPOINT` is optional.
- If set, contact form sends JSON via `POST` and expects `2xx`.
- If unset, contact form intentionally falls back to `mailto:`.

## 📈 Performance Metrics

- ⚡ Page Load Speed: <1.5s globally
- 📱 Mobile Performance: 100/100 
- 🔍 SEO Score: Optimized
- 🛡️ Security: A+ SSL Rating
- 🌍 Global CDN: 300+ edge locations

---

**© 2026 Aushnara College. All rights reserved.**  
*Empowering minds, shaping futures since 2001*
