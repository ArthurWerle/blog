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

/**
 * Canonical production origin (no trailing slash).
 * NOTE: the CV lists arthurwerle.com.br — if that domain is canonical instead,
 * change this value and the matching `site` in astro.config.mjs.
 */
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
  /** Professional headline (schema.org Person.jobTitle). */
  jobTitle: "Senior Software Engineer",
  email: "arthur.werle@gmail.com",
  company: {
    name: "TwoBoxes",
    url: "https://www.twoboxes.com/",
  },
  motto: "Keep things simple.",
  image: PROFILE_IMAGE,
  cv: CV_URL,
  /** One-sentence description for meta tags / llms.txt blurb. */
  tagline:
    "Senior software engineer with 8+ years building scalable, well-crafted web apps end to end — currently at TwoBoxes.",
  /** Longer bio paragraph. */
  bio:
    "Arthur Werle is a senior software engineer with 8+ years building scalable web applications " +
    "end to end. He thrives in fast-paced startups, wearing many hats — from UX polish to performance " +
    "and large-scale codebase modernization to developer experience. He values ownership, getting things " +
    "done, leaving things better than he found them, and sharing knowledge. B.Sc in Information Systems. " +
    "Keep things simple.",
  /** Topics this person knows about (schema.org Person.knowsAbout). */
  knowsAbout: [
    "Software Engineering",
    "Frontend Engineering",
    "Web Development",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Nest.js",
    "Tailwind CSS",
    "React Query",
    "Web Performance Optimization",
    "Developer Experience",
    "Automated Testing",
    "CI/CD",
    "Docker",
    "AWS",
    "Software Craftsmanship",
  ],
  profiles: SOCIAL_PROFILES,
} as const

/** Site-level metadata. */
export const SITE = {
  url: SITE_URL,
  name: `${PROFILE.name} — Portfolio`,
  title: PROFILE.name,
  description:
    "Portfolio of Arthur Werle — senior software engineer with 8+ years building scalable web apps. Projects, writing, résumé and links.",
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
 * Sourced from Arthur's CV.
 */
export const RESUME = {
  $schema:
    "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  basics: {
    name: PROFILE.name,
    label: PROFILE.jobTitle,
    image: PROFILE.image,
    email: PROFILE.email,
    url: SITE_URL,
    summary:
      "Senior Software Engineer with 8+ years of experience building scalable web solutions. " +
      "Comfortable in fast-paced environments, wearing many hats and working on applications " +
      "end-to-end. I believe in ownership, getting things done, leaving things better than I " +
      "found them, enhancing DX, and sharing knowledge. Curious and always willing to learn. " +
      "B.Sc in Information Systems. Keep things simple.",
    location: {
      // City not stated on the CV; region inferred from education/history.
      region: "Rio Grande do Sul",
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
      name: "TwoBoxes",
      position: "Software Engineer",
      url: PROFILE.company.url,
      location: "Remote (US)",
      startDate: "2025-07",
      summary: "Building product end to end at an early-stage startup.",
      highlights: [
        "Improved product UX with animations, feedback, infinite scrolling lists, and MUI guidelines.",
        "Advocated for a stronger code review culture focused on learning and helping others.",
        "Wrote and reviewed technical scoping documents for new features and major changes.",
        "Proactively proposed technical and product improvements.",
        "Maintained high performance across multiple initiatives and technologies in a fast-paced startup.",
      ],
    },
    {
      name: "Claravine",
      position: "Senior Software Engineer",
      url: "https://www.claravine.com/",
      location: "Remote (US)",
      startDate: "2023-05",
      endDate: "2025-07",
      highlights: [
        "Owned the Excel Add-in (Microsoft Office SDK, Auth0, EffectTS); grew batch size from 100 to 1,000+ rows per request for a 10x scalability gain and raised test coverage by 100%.",
        "Built a custom UI component library shared across products, versioned via AWS CodeArtifact.",
        "Developed high-performance features for large datasets: virtualized lists, pagination, infinite query, lazy loading, code splitting, and React Query state management.",
        "Modernized a legacy codebase from JavaScript/Redux/React 16/MUI 4 to TypeScript/React 18/Zustand/Tailwind.",
        "Cleared a full-stack bug backlog across PHP, Kotlin/Spring Boot microservices, Postgres, Docker, Kubernetes, and CircleCI.",
        "Advocated for better DX: pragmatic ESLint rules, PR reviews as learning, and a 'leave it better than I found it' mindset.",
      ],
    },
    {
      name: "CWI Software",
      position: "Frontend Engineer",
      url: "https://www.cwi.com.br/",
      location: "Remote (Brazil)",
      startDate: "2020-02",
      endDate: "2023-05",
      highlights: [
        "Rewrote a legacy Backbone.js/JSP/jQuery codebase to React, TypeScript, and Next.js for Brazil's largest fashion & lifestyle group's e-commerce ($200M+ ARR).",
        "Improved e-commerce performance by 40%+ via lazy loading, Webpack code-splitting, removing CSS-in-JS, React Query caching, and cutting unnecessary re-renders.",
        "Championed DX through Tailwind, Storybook, an agnostic component library, ADRs, and formal code review processes.",
        "Mentored junior developers via pair programming, PR reviews, and continuous feedback.",
        "Delivered with strong performance on a team of 20+ engineers.",
      ],
    },
    {
      name: "Kunden Systems",
      position: "Fullstack Engineer",
      location: "Brazil",
      startDate: "2018-01",
      endDate: "2020-02",
      highlights: [
        "Built a web ERP far more user-friendly than the previous Oracle Forms system, reducing the need for user training.",
        "Drove Git adoption (replacing TortoiseSVN) and code-quality tooling (SonarQube, ESLint, Prettier, TypeScript).",
        "Worked full-stack: Node.js/Express back end, OracleDB/PL/SQL, and Angular/PUG/Sass/HTML5 front end.",
      ],
    },
    {
      name: "Prefeitura de Ivoti",
      position: "Computers Instructor Intern",
      location: "Brazil",
      startDate: "2016-04",
      endDate: "2018-01",
      highlights: [
        "Helped students with computer-based assignments and kept the informatics room fully operational.",
        "Taught computer-literacy classes for elderly people at a local library.",
      ],
    },
  ],
  education: [
    {
      institution: "UNISINOS",
      area: "Information Systems",
      studyType: "Bachelor of Science",
      // CV shows "23/02 - 26/12" — read as Feb 2023 – Dec 2026. Confirm dates.
      startDate: "2023-02",
      endDate: "2026-12",
    },
  ],
  skills: [
    {
      name: "Languages",
      keywords: ["TypeScript", "JavaScript", "Kotlin", "PHP", "Go"],
    },
    {
      name: "Frontend",
      keywords: [
        "React",
        "Next.js",
        "Redux",
        "React Query",
        "Tailwind CSS",
        "SASS",
        "Webpack",
        "Babel",
        "Angular",
      ],
    },
    {
      name: "Backend",
      keywords: ["Node.js", "Express", "Nest.js", "PostgreSQL"],
    },
    {
      name: "Testing & CI/CD",
      keywords: ["Jest", "React Testing Library", "CircleCI", "GitHub Actions"],
    },
    {
      name: "Infrastructure",
      keywords: ["Docker", "AWS"],
    },
  ],
  languages: [
    { language: "Portuguese", fluency: "Native speaker" },
    { language: "English", fluency: "Professional working proficiency" },
  ],
  interests: [
    { name: "Simplicity in software" },
    { name: "Developer experience" },
    { name: "AI tooling" },
    { name: "Reading", keywords: ["philosophy", "history", "software"] },
  ],
} as const
