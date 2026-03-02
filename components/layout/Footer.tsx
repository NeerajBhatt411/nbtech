"use client";

import Link from "next/link";
import { Instagram, Linkedin, Rocket, Twitter } from "lucide-react";
import {
  FOOTER_LINK_GROUPS,
  FOOTER_SOCIAL_LINKS,
  SITE_NAME,
} from "@/config/site";
import { cn, focusRing } from "@/lib/utils";

const footerLinkClass =
  "text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

export function Footer() {
  const year = new Date().getFullYear();

  const renderSocialIcon = (icon: (typeof FOOTER_SOCIAL_LINKS)[number]["icon"]) => {
    switch (icon) {
      case "x":
        return <Twitter className="h-4 w-4" aria-hidden />;
      case "linkedin":
        return <Linkedin className="h-4 w-4" aria-hidden />;
      case "instagram":
        return <Instagram className="h-4 w-4" aria-hidden />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-border/40 bg-[#050815]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_repeat(2,minmax(0,1fr))_minmax(0,1.4fr)] lg:gap-12">
          {/* Brand + description */}
          <div className="space-y-5">
            <Link
              href="/"
              className={cn(
                "inline-flex items-center gap-2 text-white",
                focusRing
              )}
              aria-label={`${SITE_NAME} - Home`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Rocket className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-lg font-semibold">{SITE_NAME}</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Premium scalable digital solutions for forward-thinking enterprises.
            </p>
            <div className="flex flex-wrap gap-3">
              {FOOTER_SOCIAL_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:text-white",
                    focusRing
                  )}
                >
                  {renderSocialIcon(item.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2" role="list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={footerLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Stay Updated
            </h3>
            <p className="text-sm text-white/60">
              Subscribe to our newsletter for the latest tech trends.
            </p>
            <form
              className="space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 w-full rounded-lg border border-white/10 bg-slate-900/70 px-3 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-[#1d9bf0] px-4 text-sm font-medium text-white transition-colors hover:bg-[#1584ce] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#050815]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE_NAME} Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className={footerLinkClass}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={footerLinkClass}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
