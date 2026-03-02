"use client";

import { useEffect, useCallback, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn, focusRing } from "@/lib/utils";

const navLinkClass = cn(
  "block py-3 text-lg font-medium text-white/90 transition-colors hover:text-white",
  focusRing
);

type NavLink = { readonly href: string; readonly label: string };

type MobileNavProps = {
  links: readonly NavLink[];
};

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white md:hidden",
          focusRing
        )}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
      >
        <Menu className="h-6 w-6" aria-hidden />
      </button>

      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={cn(
          "fixed inset-0 z-[9999] md:hidden",
          "transition-[visibility,opacity] duration-300 ease-out",
          isOpen ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"
        )}
      >
        {/* Solid overlay: fully covers page so nothing shows through */}
        <button
          type="button"
          onClick={close}
          className={cn(
            "absolute inset-0 w-full h-full mobile-nav-overlay",
            "transition-opacity duration-300 ease-out",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          aria-label="Close menu"
          tabIndex={-1}
        />

        {/* Panel: solid distinct background for opened navbar */}
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-full max-w-sm sm:max-w-md mobile-nav-panel",
            "border-l border-white/10 shadow-2xl",
            "flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-border/50 px-4 py-4">
            <span className="text-lg font-semibold text-white">Menu</span>
            <button
              type="button"
              onClick={close}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg text-white/90 hover:bg-white/10 hover:text-white",
                focusRing
              )}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
          </div>

          <nav className="flex flex-1 flex-col px-4 py-6" aria-label="Mobile navigation links">
            <ul className="flex flex-col gap-1" role="list">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={navLinkClass}
                    onClick={close}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/contact" variant="primary" className="w-full" onClick={close}>
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
