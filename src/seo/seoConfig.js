export const SITE_NAME = 'Aushnara College'
export const SITE_URL = 'https://aushnaracollege.edu.bd'
export const DEFAULT_IMAGE = `${SITE_URL}/favicon.svg`

const pageNames = {
  '/': 'Home',
  '/about': 'About',
  '/programs': 'Programs',
  '/undergraduate-programs': 'Undergraduate Programs',
  '/diploma-programs': 'Diploma Programs',
  '/admissions': 'Admissions',
  '/contact': 'Contact'
}

const pageMeta = {
  '/': {
    title: 'Aushnara College | Excellence in Education in Bangladesh',
    description:
      'Aushnara College offers HSC, undergraduate, and diploma programs with modern facilities, experienced faculty, and career-focused learning in Bangladesh.',
    keywords:
      'Aushnara College, Bangladesh college, higher secondary education, undergraduate programs, diploma programs'
  },
  '/about': {
    title: 'About Aushnara College | Mission, History, Leadership',
    description:
      'Learn about Aushnara College, our mission, educational history, leadership team, and student-focused academic values.',
    keywords:
      'about Aushnara College, college leadership, college history, education mission Bangladesh'
  },
  '/programs': {
    title: 'Academic Programs | Aushnara College',
    description:
      'Explore academic programs at Aushnara College, including undergraduate degrees, diploma tracks, and HSC streams.',
    keywords:
      'academic programs Bangladesh, undergraduate programs, diploma programs, HSC programs'
  },
  '/undergraduate-programs': {
    title: 'Undergraduate Programs | Aushnara College',
    description:
      'Discover undergraduate degree programs across engineering, business, medicine, science, arts, and social sciences at Aushnara College.',
    keywords:
      'undergraduate programs Bangladesh, bachelor degree college, engineering business medicine programs'
  },
  '/diploma-programs': {
    title: 'Diploma Programs | Aushnara College',
    description:
      'Find job-oriented diploma programs in engineering, IT, business, health sciences, and vocational skills at Aushnara College.',
    keywords:
      'diploma programs Bangladesh, technical diploma, vocational training, IT diploma, health diploma'
  },
  '/admissions': {
    title: 'Admissions 2026-27 | Aushnara College',
    description:
      'Apply to Aushnara College. Get admission timelines, document requirements, fee structure, scholarships, and application steps.',
    keywords:
      'Aushnara College admissions, admission requirements Bangladesh, college fee structure, scholarships'
  },
  '/contact': {
    title: 'Contact Aushnara College | Campus, Departments, Inquiries',
    description:
      'Contact Aushnara College for admissions, academic support, and campus information. View office hours, phone numbers, and department contacts.',
    keywords:
      'contact Aushnara College, admissions contact, campus address Dhaka, college phone number'
  }
}

const faqByPath = {
  '/admissions': [
    {
      question: 'What are the admission requirements?',
      answer:
        'Applicants need academic transcripts, identity documents, completed application form, and required admission test steps based on program criteria.'
    },
    {
      question: 'Are scholarships available?',
      answer:
        'Yes. Aushnara College offers merit scholarships, need-based aid, and performance-based fee support for eligible students.'
    },
    {
      question: 'When does the academic year start?',
      answer:
        'The new academic year generally starts in July after admission and enrollment completion.'
    }
  ],
  '/contact': [
    {
      question: 'How can I contact the admissions office?',
      answer:
        'You can contact admissions by phone at +880-2-58154893 or by email at admissions@aushnaracollege.edu.bd during office hours.'
    },
    {
      question: 'What are office hours?',
      answer:
        'Administrative office hours are generally Sunday through Thursday, 8:00 AM to 4:00 PM, with reduced Friday hours.'
    },
    {
      question: 'Can I visit the campus before admission?',
      answer:
        'Yes. Prospective students and guardians can request guided campus visits through the admissions office.'
    }
  ]
}

export function getPageMeta(pathname) {
  return pageMeta[pathname] || pageMeta['/']
}

export function getCanonical(pathname) {
  return pathname === '/' ? SITE_URL : `${SITE_URL}${pathname}`
}

function getBreadcrumbs(pathname) {
  const crumbs = [{ name: 'Home', item: SITE_URL }]

  if (pathname !== '/') {
    const segments = pathname.split('/').filter(Boolean)
    let currentPath = ''

    segments.forEach((segment) => {
      currentPath += `/${segment}`
      crumbs.push({
        name: pageNames[currentPath] || segment.replace(/-/g, ' '),
        item: `${SITE_URL}${currentPath}`
      })
    })
  }

  return crumbs
}

export function getStructuredData(pathname) {
  const canonical = getCanonical(pathname)
  const meta = getPageMeta(pathname)
  const breadcrumbs = getBreadcrumbs(pathname)

  const base = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollegeOrUniversity',
      name: SITE_NAME,
      url: SITE_URL,
      logo: DEFAULT_IMAGE,
      email: 'info@aushnaracollege.edu.bd',
      telephone: '+880-2-58154892',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '23/A, Dhanmondi R/A',
        addressLocality: 'Dhaka',
        postalCode: '1205',
        addressCountry: 'BD'
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'admissions',
          telephone: '+880-2-58154893',
          email: 'admissions@aushnaracollege.edu.bd'
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/programs`,
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: meta.title,
      description: meta.description,
      url: canonical,
      isPartOf: {
        '@type': 'WebSite',
        url: SITE_URL,
        name: SITE_NAME
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.item
      }))
    }
  ]

  if (faqByPath[pathname]) {
    base.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqByPath[pathname].map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    })
  }

  return base
}
