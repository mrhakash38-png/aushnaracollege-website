import fs from 'node:fs/promises'

const appFile = await fs.readFile('src/App.jsx', 'utf8')
const seoFile = await fs.readFile('src/seo/seoConfig.js', 'utf8')

const routePaths = [...appFile.matchAll(/<Route path="([^"]+)"/g)].map((m) => m[1])
const metaPaths = [...seoFile.matchAll(/^\s*'([^']+)':\s*{/gm)].map((m) => m[1])

const missingMeta = routePaths.filter((path) => !metaPaths.includes(path))

if (missingMeta.length > 0) {
  console.log('SEO coverage check failed. Missing pageMeta entries:')
  missingMeta.forEach((path) => console.log(`- ${path}`))
  process.exit(1)
}

console.log(`SEO coverage check passed for ${routePaths.length} routes.`)
