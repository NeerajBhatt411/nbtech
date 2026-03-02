import Link from "next/link";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn, focusRing } from "@/lib/utils";
import { NAV_LINKS, SITE_NAME } from "@/config/site";

const navLinkClass = cn(
  "text-sm font-medium text-white/90 transition-colors hover:text-white",
  focusRing
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={cn("flex items-center gap-2 text-white", focusRing)}
          aria-label={`${SITE_NAME} - Home`}
        >
          <Rocket className="h-6 w-6 shrink-0" aria-hidden />
          <span className="text-xl font-semibold">{SITE_NAME}</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={navLinkClass}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <MobileNav links={NAV_LINKS} />
          <Button href="/contact" variant="primary" className="hidden shrink-0 md:flex">
            Get a Quote
          </Button>
        </div>
      </nav>
    </header>
  );
}
