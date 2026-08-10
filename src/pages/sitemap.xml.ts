import type { APIRoute } from "astro"
import { absoluteUrl } from "../constants/site"
import { getPosts } from "../utils/posts"

export const prerender = true

interface SitemapEntry {
  loc: string
  lastmod?: string
  changefreq?: string
  priority?: string
}

const xmlEscape = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")

export const GET: APIRoute = () => {
  const posts = getPosts()
  const today = new Date().toISOString().slice(0, 10)

  const entries: SitemapEntry[] = [
    { loc: absoluteUrl("/"), lastmod: today, changefreq: "weekly", priority: "1.0" },
    { loc: absoluteUrl("/links"), lastmod: today, changefreq: "monthly", priority: "0.5" },
    ...posts.map((p) => ({
      loc: p.absoluteUrl,
      lastmod: p.date.toISOString().slice(0, 10),
      changefreq: "yearly",
      priority: "0.7",
    })),
  ]

  const urls = entries
    .map((e) => {
      const parts = [`    <loc>${xmlEscape(e.loc)}</loc>`]
      if (e.lastmod) parts.push(`    <lastmod>${e.lastmod}</lastmod>`)
      if (e.changefreq) parts.push(`    <changefreq>${e.changefreq}</changefreq>`)
      if (e.priority) parts.push(`    <priority>${e.priority}</priority>`)
      return `  <url>\n${parts.join("\n")}\n  </url>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}
