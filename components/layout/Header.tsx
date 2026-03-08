"use client";

import { useState } from "react";
import Link from "next/link";
import { Rocket, LayoutGrid } from "lucide-react";
import { cn, focusRing } from "@/lib/utils";
import { FullScreenMenu } from "@/components/layout/FullScreenMenu";
import { NAV_LINKS, SITE_NAME } from "@/config/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[100] w-full bg-transparent">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6 md:px-10 md:py-12"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={cn("cursor-target flex items-center gap-2 text-white", focusRing)}
          aria-label={`${SITE_NAME} - Home`}
        >
          <Rocket className="h-7 w-7 md:h-10 md:w-10 shrink-0 text-[#c0ff00]" aria-hidden />
          <span className="text-xl md:text-3xl font-black tracking-tighter uppercase">{SITE_NAME}</span>
        </Link>

        {/* 9-Dot Grid Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className={cn(
            "cursor-target flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-all active:scale-95 border border-white/10 group",
            focusRing
          )}
          aria-label="Open menu"
        >
          <LayoutGrid className="h-6 w-6 md:h-8 md:w-8 transition-transform group-hover:rotate-90" />
        </button>
      </nav>

      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={NAV_LINKS}
      />
    </header>
  );
}
