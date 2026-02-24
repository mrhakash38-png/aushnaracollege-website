import fs from 'node:fs/promises'
import path from 'node:path'

const FEED_PATH = path.resolve('public/data/content-feed.json')
const MIN_INTERVAL_MINUTES = 15
const MAX_INTERVAL_MINUTES = 20
const RETENTION_DAYS = 31
const EDUCATIONAL_NEWS_TOTAL = Number(process.env.NEWS_TOTAL_ITEMS || 3000)
const EDUCATIONAL_NEWS_WINDOW_DAYS = 30

const RESEARCH_PAPERS = [
  {
    id: 'rp-001',
    title: 'Predictive Models for Dengue Risk Mapping in Urban Dhaka',
    authors: ['Dr. Farhana Rahman', 'Prof. M. A. Bari', 'Arif Hasan'],
    publishedOn: '2026-02-10',
    doi: '10.2026/ac.rp.001',
    topic: 'Public Health',
    status: 'Peer Reviewed',
    summary: 'A geospatial and machine-learning study on ward-level dengue risk forecasting for targeted prevention.'
  },
  {
    id: 'rp-002',
    title: 'Solar-Assisted Low-Cost Water Purification for Semi-Urban Communities',
    authors: ['Dr. Nusrat Jahan', 'Md. Raihan Kabir'],
    publishedOn: '2026-01-28',
    doi: '10.2026/ac.rp.002',
    topic: 'Engineering',
    status: 'Accepted',
    summary: 'Prototype evaluation of an affordable purification unit integrating solar thermal pre-treatment.'
  },
  {
    id: 'rp-003',
    title: 'First-Year Retention Drivers in Blended Undergraduate Learning',
    authors: ['Dr. Tania Sultana', 'S. M. Rezaul Karim'],
    publishedOn: '2026-01-15',
    doi: '10.2026/ac.rp.003',
    topic: 'Education',
    status: 'Peer Reviewed',
    summary: 'Institutional evidence on advising, attendance, and LMS engagement impact on student retention.'
  }
]

const JOURNALS = [
  {
    id: 'jn-001',
    title: 'Aushnara Journal of Applied Sciences',
    editor: 'Prof. Dr. Rahima Akter',
    volume: 8,
    issue: 1,
    latestRelease: '2026-02-05',
    frequency: 'Quarterly',
    issn: '3008-1101',
    scope: 'Applied research in engineering, computing, environmental science, and public health.'
  },
  {
    id: 'jn-002',
    title: 'Journal of Business and Social Innovation',
    editor: 'Prof. Dr. Kamrul Hasan',
    volume: 5,
    issue: 2,
    latestRelease: '2026-01-22',
    frequency: 'Biannual',
    issn: '3008-1102',
    scope: 'Research on entrepreneurship, policy, social impact, and regional development.'
  }
]

const ACTIVITIES = [
  {
    id: 'ac-001',
    title: 'Inter-College Robotics Challenge 2026',
    category: 'STEM Event',
    date: '2026-03-04',
    location: 'Engineering Innovation Lab',
    status: 'Registration Open',
    summary: 'Teams from 20 partner colleges compete in autonomous navigation and rescue simulation tasks.'
  },
  {
    id: 'ac-002',
    title: 'Career Readiness Week: Industry Mentorship Series',
    category: 'Career Development',
    date: '2026-03-10',
    location: 'Main Auditorium',
    status: 'Scheduled',
    summary: 'Employer panels, CV clinics, mock interviews, and internship matching sessions for final-year students.'
  },
  {
    id: 'ac-003',
    title: 'Community Health Screening Outreach',
    category: 'Social Impact',
    date: '2026-03-14',
    location: 'Dhanmondi Community Center',
    status: 'Planned',
    summary: 'Faculty-supervised student volunteers provide screening and awareness support for local residents.'
  }
]

function buildBulletinId(date) {
  const pad = (value) => String(value).padStart(2, '0')
  return `bl-${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}-${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}`
}

async function loadExisting() {
  try {
    const raw = await fs.readFile(FEED_PATH, 'utf8')
    return JSON.parse(raw)
  } catch {
    return { bulletins: [] }
  }
}

function randomIntervalMinutes() {
  return Math.floor(Math.random() * (MAX_INTERVAL_MINUTES - MIN_INTERVAL_MINUTES + 1)) + MIN_INTERVAL_MINUTES
}

function formatDateOnly(date) {
  const y = date.getUTCFullYear()
  const m = String(date.getUTCMonth() + 1).padStart(2, '0')
  const d = String(date.getUTCDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function generateEducationalNews(startedAtIso, now) {
  const categories = [
    'Admission Program',
    'Faculty and Staff',
    'Official Notice',
    'Academic Meeting',
    'Student Instruction',
    'Class Routine',
    'Academic Update',
    'Examination Notice',
    'Scholarship Circular',
    'Campus Activity'
  ]

  const units = [
    'Admissions Office',
    'Registrar Office',
    'Controller of Examinations',
    'Academic Council',
    'Student Affairs Division',
    'School of Engineering',
    'School of Business',
    'School of Health Sciences',
    'School of Arts and Social Science',
    'Quality Assurance Cell'
  ]

  const programs = [
    'Applied AI and Data Science',
    'Renewable Energy Systems',
    'Public Health Informatics',
    'Digital Marketing and Analytics',
    'Cybersecurity Operations',
    'Smart Manufacturing',
    'Financial Technology',
    'Clinical Laboratory Practice',
    'Educational Leadership',
    'Media and Communication Studies'
  ]

  const meetingThemes = [
    'semester planning review',
    'course quality assurance',
    'assessment moderation',
    'research ethics implementation',
    'industry partnership roadmap',
    'student support strategy',
    'internship coordination',
    'lab safety compliance'
  ]

  const instructionThemes = [
    'ID card verification',
    'attendance compliance',
    'LMS submission process',
    'lab access protocol',
    'library account update',
    'tuition payment deadline',
    'scholarship document upload',
    'exam registration instructions'
  ]

  const routineActions = [
    'revised class routine published',
    'make-up class schedule announced',
    'practical lab timing updated',
    'section-wise timetable adjusted',
    'advisor consultation slots released',
    'weekly tutorial routine updated'
  ]

  const departureRoles = [
    'Senior Lecturer',
    'Assistant Professor',
    'Program Coordinator',
    'Lab Instructor',
    'Administrative Officer'
  ]

  const startMs = new Date(startedAtIso).getTime()
  const stepMs = Math.floor((EDUCATIONAL_NEWS_WINDOW_DAYS * 24 * 60 * 60 * 1000) / (EDUCATIONAL_NEWS_TOTAL - 1))

  const allItems = []
  for (let i = 0; i < EDUCATIONAL_NEWS_TOTAL; i += 1) {
    const releaseAt = new Date(startMs + i * stepMs)
    const category = categories[i % categories.length]
    const unit = units[i % units.length]
    const isPublished = releaseAt <= now
    const sequence = String(i + 1).padStart(3, '0')
    const program = programs[i % programs.length]
    const meetingTheme = meetingThemes[i % meetingThemes.length]
    const instructionTheme = instructionThemes[i % instructionThemes.length]
    const routineAction = routineActions[i % routineActions.length]
    const role = departureRoles[i % departureRoles.length]

    let title = ''
    let summary = ''

    if (category === 'Admission Program') {
      title = `New admission track launched: ${program}`
      summary = `Notice ${i + 1}: ${unit} announced admission intake for ${program}, including eligibility, seat plan, and application timeline.`
    } else if (category === 'Faculty and Staff') {
      title = `${role} transition notice issued by ${unit}`
      summary = `Official update ${i + 1}: a ${role.toLowerCase()} has formally completed service and handover instructions were published for continuity.`
    } else if (category === 'Official Notice') {
      title = `General administrative notice for current semester (${sequence})`
      summary = `Circular ${i + 1}: ${unit} published updated compliance instructions for documentation, communication, and service response timelines.`
    } else if (category === 'Academic Meeting') {
      title = `Meeting scheduled on ${meetingTheme}`
      summary = `Meeting memo ${i + 1}: ${unit} called faculty and academic coordinators for ${meetingTheme} with agenda and action points.`
    } else if (category === 'Student Instruction') {
      title = `Student instruction update: ${instructionTheme}`
      summary = `Instruction ${i + 1}: students were directed to follow revised procedure on ${instructionTheme} through portal and notice board.`
    } else if (category === 'Class Routine') {
      title = `Routine bulletin: ${routineAction}`
      summary = `Routine update ${i + 1}: ${unit} issued timetable changes for selected cohorts with effective date and section mapping.`
    } else if (category === 'Academic Update') {
      title = `Academic progress update for ${program}`
      summary = `Progress note ${i + 1}: curriculum delivery and assessment milestones for ${program} were updated with verified completion data.`
    } else if (category === 'Examination Notice') {
      title = `Examination circular released for upcoming assessment cycle`
      summary = `Exam notice ${i + 1}: ${unit} published registration, seat plan, and examination conduct guidelines for the next cycle.`
    } else if (category === 'Scholarship Circular') {
      title = `Scholarship circular published for merit and need-based support`
      summary = `Scholarship update ${i + 1}: application windows, required documents, and review timelines were published by ${unit}.`
    } else {
      title = `Campus activity update: student engagement and outreach`
      summary = `Activity update ${i + 1}: ${unit} announced event execution plan, participation targets, and reporting deadline.`
    }

    allItems.push({
      id: `news-${sequence}`,
      title,
      category,
      unit,
      date: formatDateOnly(releaseAt),
      releaseAt: releaseAt.toISOString(),
      isPublished,
      summary
    })
  }

  return allItems
}

async function run() {
  const now = new Date()
  const isoNow = now.toISOString()
  const forcePublish = process.argv.includes('--force')
  const existing = await loadExisting()
  const scheduledNext = existing?.pipeline?.nextPublishAt ? new Date(existing.pipeline.nextPublishAt) : null

  if (!forcePublish && scheduledNext && now < scheduledNext) {
    console.log(`Skip publish: next publish scheduled for ${scheduledNext.toISOString()}`)
    return
  }

  const appliedIntervalMinutes = randomIntervalMinutes()
  const nextPublishAt = new Date(now.getTime() + appliedIntervalMinutes * 60 * 1000).toISOString()
  const startedAt = existing?.pipeline?.startedAt || isoNow
  const commitmentEndsAt = existing?.pipeline?.commitmentEndsAt || new Date(new Date(startedAt).getTime() + 30 * 24 * 60 * 60 * 1000).toISOString()
  const retentionCutoff = new Date(now.getTime() - RETENTION_DAYS * 24 * 60 * 60 * 1000)
  const educationalNews = generateEducationalNews(startedAt, now)
  const publishedNewsCount = educationalNews.filter((item) => item.isPublished).length

  const nextBulletin = {
    id: buildBulletinId(now),
    type: 'Pipeline Publish',
    title: 'Random cadence pipeline publish completed',
    note: `Content feed published. Next update scheduled in ${appliedIntervalMinutes} minutes.`,
    publishedAt: isoNow
  }

  const bulletins = [nextBulletin, ...(existing.bulletins || [])]
    .filter((item) => item?.publishedAt && new Date(item.publishedAt) >= retentionCutoff)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  const feed = {
    generatedAt: isoNow,
    intervalMinutes: appliedIntervalMinutes,
    intervalRangeMinutes: {
      min: MIN_INTERVAL_MINUTES,
      max: MAX_INTERVAL_MINUTES
    },
    retentionDays: RETENTION_DAYS,
    pipeline: {
      startedAt,
      commitmentEndsAt,
      nextPublishAt,
      status: now <= new Date(commitmentEndsAt) ? 'within_commitment_window' : 'commitment_window_completed'
    },
    researchPapers: RESEARCH_PAPERS,
    journals: JOURNALS,
    activities: ACTIVITIES,
    newsPlan: {
      totalItems: EDUCATIONAL_NEWS_TOTAL,
      windowDays: EDUCATIONAL_NEWS_WINDOW_DAYS,
      publishedCount: publishedNewsCount,
      remainingCount: EDUCATIONAL_NEWS_TOTAL - publishedNewsCount,
      averageDailyVolume: Math.ceil(EDUCATIONAL_NEWS_TOTAL / EDUCATIONAL_NEWS_WINDOW_DAYS)
    },
    educationalNews,
    bulletins
  }

  await fs.mkdir(path.dirname(FEED_PATH), { recursive: true })
  await fs.writeFile(FEED_PATH, `${JSON.stringify(feed, null, 2)}\n`, 'utf8')
  console.log(`Published content feed at ${isoNow}`)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
