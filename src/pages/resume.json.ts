import type { APIRoute } from "astro"
import { RESUME } from "../constants/site"

export const prerender = true

/**
 * /resume.json — machine-readable résumé following the JSON Resume schema
 * (https://jsonresume.org/schema/). Recruiter agents can parse this directly.
 */
export const GET: APIRoute = () => {
  return new Response(JSON.stringify(RESUME, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
}
