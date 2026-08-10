import type { APIRoute } from "astro"
import { PROFILE, SITE, absoluteUrl } from "../constants/site"
import { getPosts } from "../utils/posts"

export const prerender = true

/**
 * /llms.txt — a concise, LLM-friendly overview of the site.
 * Format follows the proposal at https://llmstxt.org/.
 */
export const GET: APIRoute = () => {
  const posts = getPosts()

  const fmtDate = (d: Date) =>
    d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

  const lines: string[] = [
    `# ${PROFILE.name}`,
    "",
    `> ${PROFILE.tagline}`,
    "",
    PROFILE.bio,
    "",
    "## About",
    "",
    `- **Role:** ${PROFILE.jobTitle} at [${PROFILE.company.name}](${PROFILE.company.url})`,
    `- **Motto:** ${PROFILE.motto}`,
    `- **Focus areas:** ${PROFILE.knowsAbout.join(", ")}`,
    "",
    "## Key pages",
    "",
    `- [Home](${absoluteUrl("/")}): projects and what Arthur is building lately`,
    `- [Links](${absoluteUrl("/links")}): social profiles`,
    `- [Résumé / CV (PDF)](${PROFILE.cv}): downloadable CV`,
    `- [Résumé (JSON)](${absoluteUrl("/resume.json")}): machine-readable JSON Resume (jsonresume.org schema)`,
    "",
    "## Writing",
    "",
    ...posts.map(
      (p) => `- [${p.title}](${p.absoluteUrl}): ${p.description} (${fmtDate(p.date)})`,
    ),
    "",
    "## Profiles",
    "",
    ...PROFILE.profiles.map((p) => `- [${p.network}](${p.url})`),
    "",
    "## Optional",
    "",
    `- [Full text of all writing](${absoluteUrl("/llms-full.txt")}): every post inlined as Markdown`,
    `- [RSS feed](${absoluteUrl("/rss.xml")}): subscribe to new writing`,
    `- [Sitemap](${absoluteUrl("/sitemap.xml")}): all indexable URLs`,
    "",
    `<!-- Generated for ${SITE.url} -->`,
    "",
  ]

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
