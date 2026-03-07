export const HERO_ICON_KEYS = ["arrow-right", "eye"] as const;
export type HeroIconKey = (typeof HERO_ICON_KEYS)[number];

/** Words cycled in the hero headline (related to "Scalable") */
export const HERO_HIGHLIGHT_WORDS = [
  "Scalable",
  "Reliable",
  "Secure",
  "Fast",
  "Smart",
] as const;

export const HERO_CONTENT = {
  badge: "PREMIUM IT SOLUTIONS",
  headline: {
    before: "We Build",
    after: "Digital Solutions",
  },
  description:
    "Transforming complex business challenges into streamlined, high-performance software tailored for growth and longevity.",
  cta: {
    primary: { label: "Start a Project", href: "/contact", iconKey: "arrow-right" satisfies HeroIconKey },
    secondary: { label: "View Portfolio", href: "/work", iconKey: "eye" satisfies HeroIconKey },
  },
} as const;
