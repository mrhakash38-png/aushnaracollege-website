const BASE_URL = process.argv[2] || 'https://aushnaracollege.edu.bd'
const ALLOWED_CODES = new Set([200, 301, 302])

let passCount = 0
let failCount = 0

function nowUtc() {
  return new Date().toISOString().replace('T', ' ').replace('Z', ' UTC')
}

function normalizeBaseUrl(url) {
  return url.endsWith('/') ? url.slice(0, -1) : url
}

async function fetchResponse(url, options = {}) {
  try {
    return await fetch(url, { redirect: 'manual', ...options })
  } catch {
    return null
  }
}

async function checkUrl(name, url) {
  const response = await fetchResponse(url)
  const code = response ? response.status : 0

  if (ALLOWED_CODES.has(code)) {
    console.log(`PASS ${name} (${code}): ${url}`)
    passCount += 1
  } else {
    console.log(`FAIL ${name} (${code}): ${url}`)
    failCount += 1
  }
}

async function checkContains(name, url, token) {
  const response = await fetchResponse(url)

  if (!response || !response.ok) {
    console.log(`FAIL ${name} unavailable for token '${token}'`)
    failCount += 1
    return
  }

  const text = await response.text()
  if (text.toLowerCase().includes(token.toLowerCase())) {
    console.log(`PASS ${name} contains '${token}'`)
    passCount += 1
  } else {
    console.log(`FAIL ${name} missing '${token}'`)
    failCount += 1
  }
}

async function checkHsts(url) {
  const response = await fetchResponse(url, { method: 'HEAD' })

  if (!response) {
    console.log('WARN HSTS header not checked (request failed)')
    return
  }

  if (response.headers.get('strict-transport-security')) {
    console.log('PASS HSTS header detected')
    passCount += 1
  } else {
    console.log('WARN HSTS header not detected')
  }
}

async function run() {
  const base = normalizeBaseUrl(BASE_URL)

  console.log(`Monitoring check for: ${base}`)
  console.log(`Timestamp: ${nowUtc()}`)
  console.log('')

  await checkUrl('Homepage', `${base}/`)
  await checkUrl('Admissions', `${base}/admissions`)
  await checkUrl('Programs', `${base}/programs`)
  await checkUrl('Contact', `${base}/contact`)
  await checkUrl('Sitemap', `${base}/sitemap.xml`)
  await checkUrl('Robots', `${base}/robots.txt`)

  await checkContains('Robots', `${base}/robots.txt`, 'Sitemap:')
  await checkContains('Sitemap', `${base}/sitemap.xml`, '<urlset')
  await checkContains('Sitemap', `${base}/sitemap.xml`, '/admissions')

  await checkHsts(`${base}/`)

  console.log('')
  console.log('---')
  console.log(`Passed: ${passCount}`)
  console.log(`Failed: ${failCount}`)

  if (failCount > 0) {
    console.log('Status: FAILED')
    process.exit(1)
  }

  console.log('Status: OK')
}

run()

