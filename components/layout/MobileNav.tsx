"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn, focusRing } from "@/lib/utils";

type NavLink = { readonly href: string; readonly label: string };

type MobileNavProps = {
  links: readonly NavLink[];
};

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close nav automatically when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white hover:bg-white/10 md:hidden transition-colors",
          focusRing
        )}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
      </button>

      {/* Main Dropdown Panel */}
      <div
        className={cn(
          "absolute inset-x-0 top-full h-[calc(100vh-73px)] bg-[#05070e] flex flex-col md:hidden",
          "transition-all duration-300 ease-in-out border-t border-border/20",
          isOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-6 px-6 py-8 overflow-y-auto" aria-label="Mobile navigation links">
          <ul className="flex flex-col gap-2" role="list">
            {links.map(({ href, label }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "block py-3 text-xl font-bold tracking-tight transition-colors hover:text-accent rounded-lg px-4",
                      isActive ? "bg-accent/10 text-accent" : "text-white hover:bg-white/5",
                      focusRing
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 pt-6 border-t border-white/10 px-4">
            <Button
              href="/contact"
              variant="primary"
              className="w-full text-lg py-6 justify-center"
              onClick={() => setIsOpen(false)}
            >
              Start a Project
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
