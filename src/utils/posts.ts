import { absoluteUrl } from "../constants/site"
import { parsePubDate } from "./dates"

export interface PostImage {
  url: string
  alt?: string
}

export interface Post {
  title: string
  description: string
  /** Original frontmatter pubDate string (MM-DD-YYYY). */
  pubDate: string
  /** Parsed publish date. */
  date: Date
  author: string
  tags: string[]
  image?: PostImage
  minutesRead?: string
  /** Site-relative URL, e.g. /posts/On%20how%20to%20learn */
  url: string
  /** Absolute canonical URL. */
  absoluteUrl: string
  /** Raw markdown body (frontmatter stripped). */
  body: string
}

interface MarkdownModule {
  frontmatter: {
    title: string
    description: string
    pubDate: string
    author?: string
    tags?: string[]
    image?: PostImage
    minutesRead?: string
  }
  file: string
  rawContent?: () => string
}

/** Derive a site-relative, URL-encoded route from a page file path. */
function fileToUrl(file: string): string {
  const rel = file.split("/src/pages/")[1]?.replace(/\.md$/, "") ?? ""
  return "/" + rel.split("/").map(encodeURIComponent).join("/")
}

const modules = import.meta.glob<MarkdownModule>("/src/pages/posts/*.md", {
  eager: true,
})

/** All blog posts, newest first. */
export function getPosts(): Post[] {
  return Object.values(modules)
    .map((mod): Post => {
      const fm = mod.frontmatter
      const url = fileToUrl(mod.file)
      return {
        title: fm.title,
        description: fm.description ?? "",
        pubDate: fm.pubDate,
        date: parsePubDate(fm.pubDate),
        author: fm.author ?? "Arthur Werle",
        tags: fm.tags ?? [],
        image: fm.image,
        minutesRead: fm.minutesRead,
        url,
        absoluteUrl: absoluteUrl(url),
        body: mod.rawContent ? mod.rawContent().trim() : "",
      }
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime())
}
