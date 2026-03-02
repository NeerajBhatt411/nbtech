import type { Metadata } from "next";

export const SITE_NAME = "Scaleopedia" as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const defaultMetadata: Metadata = {
  title: SITE_NAME,
  description: `${SITE_NAME} - Premium IT solutions and scalable digital products.`,
};
