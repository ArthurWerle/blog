import type { APIRoute } from "astro"
import { PROFILE, SITE } from "../constants/site"

export const prerender = true

/** /manifest.webmanifest — basic web app manifest for richer discovery. */
export const GET: APIRoute = () => {
  const manifest = {
    name: SITE.name,
    short_name: PROFILE.name,
    description: SITE.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: SITE.themeColor,
    theme_color: SITE.themeColor,
    lang: SITE.language,
    icons: [
      {
        src: SITE.image.url,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { "Content-Type": "application/manifest+json; charset=utf-8" },
  })
}
