"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Rocket, LayoutGrid } from "lucide-react";
import { gsap } from "gsap";
import { cn, focusRing } from "@/lib/utils";
import { FullScreenMenu } from "@/components/layout/FullScreenMenu";
import { NAV_LINKS, SITE_NAME } from "@/config/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle Logo Hover Lag
  const handleLogoMove = (e: React.MouseEvent) => {
    if (!logoRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = logoRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;

    gsap.to(logoRef.current, {
      x,
      y,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleLogoLeave = () => {
    gsap.to(logoRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-[100] w-full transition-all duration-300 py-4",
        isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5" : "bg-transparent md:py-8 lg:py-12"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 md:px-10"
        aria-label="Main navigation"
      >
        <div
          ref={logoRef}
          onMouseMove={handleLogoMove}
          onMouseLeave={handleLogoLeave}
          className="cursor-target"
        >
          <Link
            href="/"
            className={cn("flex items-center gap-2 text-white", focusRing)}
            aria-label={`${SITE_NAME} - Home`}
          >
            <Rocket className="h-7 w-7 md:h-10 md:w-10 shrink-0 text-[#c0ff00]" aria-hidden />
            <span className="text-xl md:text-3xl font-black tracking-tighter uppercase">{SITE_NAME}</span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {/* Vertical Divider Line */}
          <div className="hidden md:block h-10 w-[1px] bg-white/10" />

          {/* 9-Dot Grid Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={cn(
              "cursor-target flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/5 text-white hover:bg-[#c0ff00] hover:text-black transition-all active:scale-95 border border-white/10 group",
              focusRing
            )}
            aria-label="Open menu"
          >
            <LayoutGrid className="h-6 w-6 md:h-8 md:w-8 transition-transform group-hover:rotate-90" />
          </button>
        </div>
      </nav>

      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={NAV_LINKS}
      />
    </header>
  );
}
