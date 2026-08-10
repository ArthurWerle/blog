import type { APIRoute } from "astro"
import { PROFILE, SITE, absoluteUrl } from "../constants/site"
import { getPosts } from "../utils/posts"

export const prerender = true

/**
 * /llms-full.txt — the concise llms.txt overview plus the full Markdown body of
 * every post inlined, so an agent can ingest the whole site in one request.
 */
export const GET: APIRoute = () => {
  const posts = getPosts()

  const fmtDate = (d: Date) =>
    d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

  const header: string[] = [
    `# ${PROFILE.name} — full site text`,
    "",
    `> ${PROFILE.tagline}`,
    "",
    PROFILE.bio,
    "",
    `- Role: ${PROFILE.jobTitle} at ${PROFILE.company.name} (${PROFILE.company.url})`,
    `- Focus: ${PROFILE.knowsAbout.join(", ")}`,
    `- Profiles: ${PROFILE.profiles.map((p) => `${p.network} ${p.url}`).join(" | ")}`,
    `- Email: ${PROFILE.email}`,
    `- Résumé (JSON): ${absoluteUrl("/resume.json")}`,
    `- CV (PDF): ${PROFILE.cv}`,
    "",
    "---",
    "",
    "# Writing",
    "",
  ]

  const body = posts.flatMap((p) => [
    `## ${p.title}`,
    "",
    `_${p.author} · ${fmtDate(p.date)}${p.minutesRead ? ` · ${p.minutesRead}` : ""}${
      p.tags.length ? ` · tags: ${p.tags.join(", ")}` : ""
    }_`,
    "",
    `Source: ${p.absoluteUrl}`,
    "",
    p.body,
    "",
    "---",
    "",
  ])

  const footer = [`<!-- Generated for ${SITE.url} -->`, ""]

  return new Response([...header, ...body, ...footer].join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
