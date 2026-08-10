import type { APIRoute } from "astro"
import { absoluteUrl } from "../constants/site"

export const prerender = true

/**
 * AI assistants / answer engines we explicitly welcome. This site *wants* to be
 * discovered by agents, so every one of these gets an explicit `Allow: /`.
 */
const AI_AND_SEARCH_BOTS = [
  // OpenAI
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  // Anthropic
  "ClaudeBot",
  "Claude-Web",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google / Apple opt-in AI crawlers
  "Google-Extended",
  "Applebot-Extended",
  // Others
  "Amazonbot",
  "Meta-ExternalAgent",
  "DuckAssistBot",
  "CCBot",
  "cohere-ai",
  "YouBot",
  "Bingbot",
  "Googlebot",
]

export const GET: APIRoute = () => {
  const lines = [
    "# robots.txt",
    "# This site welcomes AI assistants, answer engines and search crawlers.",
    "# Machine-readable resources:",
    `#   LLM summary:      ${absoluteUrl("/llms.txt")}`,
    `#   LLM full text:    ${absoluteUrl("/llms-full.txt")}`,
    `#   Resume (JSON):    ${absoluteUrl("/resume.json")}`,
    "",
    "User-agent: *",
    "Allow: /",
    "",
    "# Explicitly welcomed AI & search user-agents",
    ...AI_AND_SEARCH_BOTS.flatMap((bot) => [
      `User-agent: ${bot}`,
      "Allow: /",
      "",
    ]),
    `Sitemap: ${absoluteUrl("/sitemap.xml")}`,
    "",
  ]

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
