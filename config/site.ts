import type { Metadata } from "next";

export const SITE_NAME = "Scaleopedia" as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINK_GROUPS = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/mobile", label: "Mobile Solutions" },
      { href: "/services/cloud", label: "Cloud Infrastructure" },
      { href: "/services/devops", label: "DevOps & SecOps" },
    ],
  },
] as const;

export const FOOTER_SOCIAL_LINKS = [
  { href: "https://x.com", label: "X (Twitter)", icon: "x" as const },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin" as const },
  { href: "https://instagram.com", label: "Instagram", icon: "instagram" as const },
] as const;

export const defaultMetadata: Metadata = {
  title: SITE_NAME,
  description: `${SITE_NAME} - Premium IT solutions and scalable digital products.`,
};
