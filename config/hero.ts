export const HERO_ICON_KEYS = ["arrow-right", "eye"] as const;
export type HeroIconKey = (typeof HERO_ICON_KEYS)[number];

export const HERO_CONTENT = {
  badge: "PREMIUM IT SOLUTIONS",
  headline: {
    before: "We Build",
    highlight: "Scalable",
    after: "Digital Solutions",
  },
  description:
    "Transforming complex business challenges into streamlined, high-performance software tailored for growth and longevity.",
  cta: {
    primary: { label: "Get Started", href: "/contact", iconKey: "arrow-right" satisfies HeroIconKey },
    secondary: { label: "View Portfolio", href: "/portfolio", iconKey: "eye" satisfies HeroIconKey },
  },
} as const;
