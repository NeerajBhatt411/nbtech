"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  /** Root margin for Intersection Observer (e.g. "0px 0px -40px 0px") */
  rootMargin?: string;
  threshold?: number;
};

/**
 * Wraps content and reveals it with a fade-up transition when it scrolls into view.
 * Uses a single Intersection Observer. Respects prefers-reduced-motion (no animation).
 */
export function RevealOnScroll({
  children,
  className,
  rootMargin = "0px 0px -30px 0px",
  threshold = 0.1,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setVisible(true),
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-on-scroll",
        visible && "is-visible",
        className
      )}
    >
      {children}
    </div>
  );
}
