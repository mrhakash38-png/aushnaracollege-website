import { ADMISSIONS_CYCLE } from '../config/siteContent'

function isoToUtcDate(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day))
}

function toUtcStartOfDay(date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
}

export function formatLongDate(isoDate, locale = 'en-US') {
  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(isoToUtcDate(isoDate))
}

export function formatShortDateRange(startIso, endIso, locale = 'en-US') {
  const start = isoToUtcDate(startIso)
  const end = isoToUtcDate(endIso)

  const monthFormatter = new Intl.DateTimeFormat(locale, {
    month: 'long',
    timeZone: 'UTC'
  })

  const monthDayFormatter = new Intl.DateTimeFormat(locale, {
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })

  const startMonth = monthFormatter.format(start)
  const endMonth = monthFormatter.format(end)
  const startDay = start.getUTCDate()
  const endDay = end.getUTCDate()

  if (startIso === endIso) {
    return monthDayFormatter.format(start)
  }

  if (startMonth === endMonth) {
    return `${startMonth} ${startDay} - ${endDay}`
  }

  return `${monthDayFormatter.format(start)} - ${monthDayFormatter.format(end)}`
}

export function getPhaseStatus(now, startIso, endIso = startIso) {
  const today = toUtcStartOfDay(now)
  const startDate = isoToUtcDate(startIso)
  const endDate = isoToUtcDate(endIso)

  if (today < startDate) {
    return 'upcoming'
  }

  if (today > endDate) {
    return 'completed'
  }

  return 'open'
}

export function getApplicationWindowStatus(now = new Date()) {
  return getPhaseStatus(now, ADMISSIONS_CYCLE.applicationStart, ADMISSIONS_CYCLE.applicationDeadline)
}

export function getAdmissionsTimeline(now = new Date()) {
  const phases = [
    {
      event: 'HSC Admission Applications Open',
      start: ADMISSIONS_CYCLE.applicationStart,
      end: ADMISSIONS_CYCLE.applicationDeadline
    },
    {
      event: 'Document Verification & Review',
      start: ADMISSIONS_CYCLE.documentReviewStart,
      end: ADMISSIONS_CYCLE.documentReviewEnd
    },
    {
      event: 'Admission Test (Written & Viva)',
      start: ADMISSIONS_CYCLE.admissionTestStart,
      end: ADMISSIONS_CYCLE.admissionTestEnd
    },
    {
      event: 'Merit List Publication',
      start: ADMISSIONS_CYCLE.meritListDate,
      end: ADMISSIONS_CYCLE.meritListDate
    },
    {
      event: 'Final Admission & Fee Payment',
      start: ADMISSIONS_CYCLE.finalAdmissionStart,
      end: ADMISSIONS_CYCLE.finalAdmissionEnd
    },
    {
      event: `Classes Begin (Academic Year ${ADMISSIONS_CYCLE.label})`,
      start: ADMISSIONS_CYCLE.classesBeginDate,
      end: ADMISSIONS_CYCLE.classesBeginDate
    }
  ]

  return phases.map((phase) => ({
    ...phase,
    status: getPhaseStatus(now, phase.start, phase.end),
    date: formatShortDateRange(phase.start, phase.end)
  }))
}

