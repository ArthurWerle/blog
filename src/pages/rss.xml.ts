import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { PROFILE, SITE } from "../constants/site"
import { getPosts } from "../utils/posts"

export const prerender = true

/** /rss.xml — a standard feed of Arthur's writing. */
export async function GET(context: APIContext) {
  const posts = getPosts()

  return rss({
    title: `${PROFILE.name} — Writing`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.date,
      link: post.url,
      categories: post.tags,
      author: post.author,
    })),
    customData: `<language>${SITE.language}</language>`,
  })
}
