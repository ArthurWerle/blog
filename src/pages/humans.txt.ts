import type { APIRoute } from "astro"
import { PROFILE, SITE } from "../constants/site"

export const prerender = true

/** /humans.txt — the classic humanstxt.org credits file. */
export const GET: APIRoute = () => {
  const text = `/* TEAM */
Name: ${PROFILE.name}
Role: ${PROFILE.jobTitle} at ${PROFILE.company.name}
${PROFILE.profiles.map((p) => `${p.network}: ${p.url}`).join("\n")}

/* SITE */
Standards: HTML5, CSS3
Components: Astro, Tailwind CSS
Hosting: Vercel
Software: ${SITE.url}
`

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
