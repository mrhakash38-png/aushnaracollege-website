const FEED_URL = '/data/content-feed.json'

export async function fetchContentFeed() {
  const response = await fetch(FEED_URL, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to load content feed (${response.status})`)
  }
  return response.json()
}

export function formatDateTime(isoDate, locale = 'en-US') {
  if (!isoDate) return 'Unavailable'
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'UTC',
    hour12: true
  }).format(new Date(isoDate))
}

export function getFreshnessMinutes(isoDate) {
  if (!isoDate) return null
  const deltaMs = Date.now() - new Date(isoDate).getTime()
  return Math.max(0, Math.floor(deltaMs / 60000))
}

