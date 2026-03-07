/**
 * Industries section content. iconKey maps to Lucide icon in the section component.
 * imageSrc optional; when absent, card uses a gradient placeholder (gradientKey).
 */
export const INDUSTRIES_SECTION = {
  title: "Industries We Serve",
  subtitle:
    "We bring deep domain expertise to solve unique challenges across key sectors.",
  cta: { label: "View All Industries", href: "/industries" },
  items: [
    {
      id: "restaurant",
      title: "Restaurant",
      iconKey: "utensils" as const,
      gradientKey: "warm" as const,
      imageSrc: "/images/industries/restaurant.png",
    },
    {
      id: "edtech",
      title: "EdTech",
      iconKey: "graduation" as const,
      gradientKey: "gold" as const,
      imageSrc: "/images/industries/edtech.png",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      iconKey: "heart" as const,
      gradientKey: "teal" as const,
      imageSrc: "/images/industries/healthcare.png",
    },
    {
      id: "business-crm",
      title: "Business CRM",
      iconKey: "layout" as const,
      gradientKey: "green" as const,
      imageSrc: "/images/industries/crm.png",
    },
  ],
} as const;

export type IndustryIconKey = (typeof INDUSTRIES_SECTION.items)[number]["iconKey"];
export type IndustryGradientKey = (typeof INDUSTRIES_SECTION.items)[number]["gradientKey"];
