/**
 * Single source of truth for site + profile metadata.
 *
 * Everything "agent-facing" reads from here:
 *   - /llms.txt and /llms-full.txt      (LLM-friendly site summary)
 *   - /robots.txt                        (AI + search crawler policy)
 *   - /sitemap.xml                       (URL discovery)
 *   - /rss.xml                           (writing feed)
 *   - /resume.json                       (JSON Resume, jsonresume.org/schema)
 *   - JSON-LD in <head>                  (schema.org Person / WebSite / BlogPosting)
 *   - Open Graph / Twitter / canonical meta tags
 *
 * Edit this file to update the whole "machine-readable" layer at once.
 */

/** Canonical production origin (no trailing slash). */
export const SITE_URL = "https://arthurwerle.com"

/** Build an absolute URL for a site-relative path. */
export const absoluteUrl = (path = "/"): string =>
  new URL(path, SITE_URL).href

const PROFILE_IMAGE =
  "https://ycrlhk0w59rlnqve.public.blob.vercel-storage.com/profile-aK01mWPmjsgn17B6Ljv3IsZPLE0x2U.png"

const CV_URL =
  "https://ycrlhk0w59rlnqve.public.blob.vercel-storage.com/Arthur%20Werle%20CV-ezPV0u3uoAaBlXQIZBEb7tTgMJs95R.pdf"

/**
 * Public social / professional profiles.
 * `network` values follow common JSON Resume conventions.
 */
export const SOCIAL_PROFILES = [
  {
    network: "GitHub",
    username: "ArthurWerle",
    url: "https://github.com/ArthurWerle",
  },
  {
    network: "LinkedIn",
    username: "arthurwerle",
    url: "https://www.linkedin.com/in/arthurwerle/",
  },
  {
    network: "X",
    username: "werlearthur",
    url: "https://x.com/werlearthur",
  },
  {
    network: "Instagram",
    username: "werlearthur",
    url: "https://www.instagram.com/werlearthur",
  },
] as const

/** Core identity used across meta tags, JSON-LD and llms.txt. */
export const PROFILE = {
  name: "Arthur Werle",
  /** Short professional headline. */
  jobTitle: "Software Engineer",
  company: {
    name: "TwoBoxes",
    url: "https://www.twoboxes.com/",
  },
  motto: "Keep things simple.",
  image: PROFILE_IMAGE,
  cv: CV_URL,
  /** One-sentence description for meta tags / llms.txt blurb. */
  tagline:
    "Software engineer focused on shipping simple, well-crafted software — currently building at TwoBoxes.",
  /** Longer bio paragraph. */
  bio:
    "Arthur Werle is a software engineer who cares about keeping things simple. " +
    "He builds web products end to end, writes about software craftsmanship, " +
    "agile/XP practices, learning and how AI is changing the way we work, and has " +
    "spent time working remotely as a digital nomad.",
  /** Topics this person knows about (schema.org Person.knowsAbout). */
  knowsAbout: [
    "Software Engineering",
    "Web Development",
    "TypeScript",
    "JavaScript",
    "React",
    "Node.js",
    "Astro",
    "Tailwind CSS",
    "Software Craftsmanship",
    "Agile Software Development",
    "Extreme Programming",
    "Artificial Intelligence Tools",
  ],
  profiles: SOCIAL_PROFILES,
} as const

/** Site-level metadata. */
export const SITE = {
  url: SITE_URL,
  name: `${PROFILE.name} — Portfolio`,
  title: PROFILE.name,
  description:
    "Personal site and portfolio of Arthur Werle, a software engineer who likes to keep things simple. Projects, writing and links.",
  locale: "en_US",
  language: "en",
  themeColor: "#1e1f21",
  image: {
    url: PROFILE_IMAGE,
    alt: `${PROFILE.name} — profile picture`,
  },
} as const

/**
 * JSON Resume (https://jsonresume.org/schema/) served at /resume.json.
 *
 * NOTE: work history, education and skill levels below are placeholders seeded
 * from public info on the site. Update them with real dates/details — this is
 * the exact data recruiter agents will read.
 */
export const RESUME = {
  $schema:
    "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  basics: {
    name: PROFILE.name,
    label: PROFILE.jobTitle,
    image: PROFILE.image,
    // email: intentionally omitted from the public resume — see note in chat.
    url: SITE_URL,
    summary: PROFILE.bio,
    location: {
      // TODO: confirm — left minimal to avoid publishing a wrong location.
      countryCode: "BR",
    },
    profiles: SOCIAL_PROFILES.map((p) => ({
      network: p.network,
      username: p.username,
      url: p.url,
    })),
  },
  work: [
    {
      name: PROFILE.company.name,
      position: PROFILE.jobTitle,
      url: PROFILE.company.url,
      summary: "Crafting software at TwoBoxes.",
      // startDate / endDate: TODO add real dates.
    },
  ],
  education: [
    // TODO: add education entries, e.g.
    // { institution: "", area: "", studyType: "", startDate: "", endDate: "" },
  ],
  skills: [
    {
      name: "Frontend",
      keywords: ["TypeScript", "JavaScript", "React", "Astro", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      name: "Backend",
      keywords: ["Node.js", "REST APIs"],
    },
    {
      name: "Practices",
      keywords: ["Software Craftsmanship", "Agile", "Extreme Programming", "Testing"],
    },
  ],
  languages: [
    { language: "Portuguese", fluency: "Native speaker" },
    { language: "English", fluency: "Professional working proficiency" },
  ],
  interests: [
    { name: "Simplicity in software" },
    { name: "AI tooling" },
    { name: "Reading", keywords: ["philosophy", "history", "software"] },
  ],
} as const
