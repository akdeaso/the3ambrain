import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const distSsrDir = path.resolve(__dirname, '../dist-ssr')

async function prerender() {
  console.log('Starting static prerender...')

  // Import SSR bundle
  const ssrEntryPath = path.join(distSsrDir, 'entry-server.js')
  const { render } = await import(`file://${ssrEntryPath.replace(/\\/g, '/')}`)

  const pages = [
    { page: 'home', file: 'index.html' },
    { page: 'privacy', file: 'privacy.html' },
    { page: 'terms', file: 'terms.html' },
  ]

  for (const { page, file } of pages) {
    const filePath = path.join(distDir, file)
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`)
    }

    const template = fs.readFileSync(filePath, 'utf-8')
    const appHtml = render(page)

    // Replace the root placeholder with rendered static HTML
    const rendered = template.replace(
      /<div id="root">(?:<!--app-->)?<\/div>/,
      `<div id="root">${appHtml}</div>`
    )

    fs.writeFileSync(filePath, rendered, 'utf-8')
    console.log(`✓ Prerendered ${file} (${appHtml.length} chars)`)
  }

  console.log('Prerender completed successfully!')
}

prerender().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
