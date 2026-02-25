import fs from 'node:fs/promises'
import path from 'node:path'

const FEED_PATH = path.resolve('public/data/content-feed.json')
const RETENTION_DAYS = 120
const NOTICE_KIND_TOTAL = 100
const DAILY_NOTICE_WINDOW_DAYS = 100

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

const NOTICE_GROUPS = [
  'Admissions Office',
  'Academic Affairs',
  'Examination Office',
  'Scholarship Cell',
  'Student Affairs',
  'Faculty and HR',
  'Finance Office',
  'Campus Administration',
  'IT Services',
  'Compliance and Discipline'
]

const NOTICE_ACTIONS = [
  'Program Launch Notice',
  'Deadline Reminder',
  'Routine Update',
  'Meeting Circular',
  'Instruction Bulletin',
  'Policy Update',
  'Application Call',
  'Result Publication',
  'Schedule Change',
  'Emergency Alert'
]

const DAILY_NOTICE_TOPICS = [
  'new admission program launched',
  'faculty member completed formal service handover',
  'urgent office notice issued',
  'departmental meeting agenda published',
  'student instruction updated for portal submission',
  'weekly class routine revised',
  'semester policy amendment announced',
  'exam schedule and seat plan updated',
  'scholarship application phase opened',
  'maintenance and safety advisory published'
]

function pad2(value) {
  return String(value).padStart(2, '0')
}

function buildBulletinId(date) {
  return `bl-${date.getUTCFullYear()}${pad2(date.getUTCMonth() + 1)}${pad2(date.getUTCDate())}-${pad2(date.getUTCHours())}${pad2(date.getUTCMinutes())}${pad2(date.getUTCSeconds())}`
}

function formatDateOnly(date) {
  return `${date.getUTCFullYear()}-${pad2(date.getUTCMonth() + 1)}-${pad2(date.getUTCDate())}`
}

function nextDailyPublish(now) {
  const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 4, 0, 0, 0))
  return next.toISOString()
}

function generateNoticeCatalog() {
  const items = []
  let counter = 1
  for (const group of NOTICE_GROUPS) {
    for (const action of NOTICE_ACTIONS) {
      const id = `kind-${String(counter).padStart(3, '0')}`
      items.push({
        id,
        group,
        type: action,
        label: `${group} - ${action}`,
        description: `${action} related to ${group.toLowerCase()} operations and communication.`
      })
      counter += 1
    }
  }
  return items
}

function generateDailyNotices(startedAtIso, now, noticeCatalog) {
  const startAt = new Date(startedAtIso)
  const items = []

  for (let i = 0; i < NOTICE_KIND_TOTAL; i += 1) {
    const releaseAt = new Date(startAt.getTime() + i * 24 * 60 * 60 * 1000)
    const kind = noticeCatalog[i]
    const topic = DAILY_NOTICE_TOPICS[i % DAILY_NOTICE_TOPICS.length]
    const id = `notice-${String(i + 1).padStart(3, '0')}`
    const isPublished = releaseAt <= now

    items.push({
      id,
      kindId: kind.id,
      title: `${kind.type}: ${topic}`,
      category: kind.type,
      group: kind.group,
      date: formatDateOnly(releaseAt),
      releaseAt: releaseAt.toISOString(),
      isPublished,
      summary: `Daily notice ${i + 1} of ${NOTICE_KIND_TOTAL}: ${kind.group} published an official update on ${topic}.`
    })
  }

  return items
}

async function loadExisting() {
  try {
    const raw = await fs.readFile(FEED_PATH, 'utf8')
    return JSON.parse(raw)
  } catch {
    return { bulletins: [] }
  }
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

  const startedAt = existing?.pipeline?.startedAt || isoNow
  const commitmentEndsAt = new Date(new Date(startedAt).getTime() + DAILY_NOTICE_WINDOW_DAYS * 24 * 60 * 60 * 1000).toISOString()
  const retentionCutoff = new Date(now.getTime() - RETENTION_DAYS * 24 * 60 * 60 * 1000)
  const noticeCatalog = generateNoticeCatalog()
  const dailyNotices = generateDailyNotices(startedAt, now, noticeCatalog)
  const publishedCount = dailyNotices.filter((item) => item.isPublished).length

  const nextBulletin = {
    id: buildBulletinId(now),
    type: 'Daily Publish',
    title: 'Daily notice feed publish completed',
    note: 'Notice board content and daily publication status refreshed.',
    publishedAt: isoNow
  }

  const bulletins = [nextBulletin, ...(existing.bulletins || [])]
    .filter((item) => item?.publishedAt && new Date(item.publishedAt) >= retentionCutoff)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  const feed = {
    generatedAt: isoNow,
    cadence: 'daily',
    retentionDays: RETENTION_DAYS,
    pipeline: {
      startedAt,
      commitmentEndsAt,
      nextPublishAt: nextDailyPublish(now),
      status: now <= new Date(commitmentEndsAt) ? 'within_commitment_window' : 'commitment_window_completed'
    },
    researchPapers: RESEARCH_PAPERS,
    journals: JOURNALS,
    activities: ACTIVITIES,
    noticePlan: {
      totalTypes: noticeCatalog.length,
      totalDailyNotices: DAILY_NOTICE_WINDOW_DAYS,
      publishedCount,
      remainingCount: Math.max(0, DAILY_NOTICE_WINDOW_DAYS - publishedCount),
      cadence: 'daily'
    },
    noticeCatalog,
    dailyNotices,
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
