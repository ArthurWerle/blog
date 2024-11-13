/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    fontFamily: {
      'dela': ['Dela Gothic One', 'serif'],
      'big-shoulders': ['Big Shoulders Text', 'serif'],
      'instrument': ['Instrument Serif', 'serif'],
      'inter': ['Inter', 'serif'],

    },
		extend: {
			colors: {
        transparent: "transparent",
        current: "currentColor",
        emphasis: "#c97f2a",
        description: "#787777",
        primary: {
          blue: "rgb(var(--color-primary-blue) / <alpha-value>)",
          green: "rgb(var(--color-primary-green) / <alpha-value>)",
          yellow: "rgb(var(--color-primary-yellow) / <alpha-value>)",
          main: "rgb(var(--color-primary-main) / <alpha-value>)",
        },
        text: {
          body: "rgb(var(--color-text-body) / <alpha-value>)",
          bold: "rgb(var(--color-text-bold) / <alpha-value>)",
          heading: "rgb(var(--color-text-heading) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
          code: "rgb(var(--color-text-code) / <alpha-value>)",
          link: "rgb(var(--color-text-link) / <alpha-value>)",
          highlighted: "rgb(var(--color-text-highlighted) / <alpha-value>)", 
        },
        bg: {
          body: "rgb(var(--color-bg-body) / <alpha-value>)",
          code: "rgb(var(--color-bg-code) / <alpha-value>)",
        },
        border: {
          code: "rgb(var(--color-border-code) / <alpha-value>)",
        },
      },
			typography: (theme) => ({
          DEFAULT: {
            css: {
              "--tw-prose-headings": "#c97f2a",
              "--tw-prose-body": "#e6cfa1",
              "--tw-prose-bold": "#c97f2a",
              "--tw-prose-links": "#c97f2a",
              "--tw-prose-quotes": "#c97f2a",
              h1: {
                'font-family': 'Dela Gothic One, serif',
                'font-weight': 100,
              },
              h2: {
                'font-family': 'Dela Gothic One, serif',
                'font-weight': 100,
              },
              h3: {
                'font-family': 'Dela Gothic One, serif',
                'font-weight': 100,
              },
            }
          },
          css: {
            a: {
              "text-decoration": "none",
              "background-repeat": "no-repeat",
              "background-size": "100% 1.5px",
              "background-position": "0 100%",
              "background-image":
                "linear-gradient(to right, rgb(var(--color-text-link)/1), rgb(var(--color-text-link)/1))",
              "&:hover": {
                color: "rgb(var(--color-text-link))",
              },
            },
            ul: {
              "padding-left": 0,
              "list-style": "disc",
            },
            "ul > li": {
              position: "relative",
              "padding-left": "1.375rem",
            },
            "ul > li::before": {
              position: "absolute",
              left: 0,
              content: '"»"',
              color: "rgb(var(--color-text-muted))",
            },
            ol: {
              "padding-left": "1.125rem",
            },
            "h1, h2, h3, h4, h5": {
              color: "rgb(var(--color-text-heading))",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
          },
      }),
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
