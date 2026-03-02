"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type StatItem = {
  readonly endNumber: number;
  readonly suffix: string;
  readonly label: string;
};

type KeyDetailsProps = {
  items: readonly StatItem[];
  className?: string;
  /** Animation duration in ms (count-up speed; higher = slower) */
  duration?: number;
};

function easeOutQuart(t: number): number {
  return 1 - (1 - t) ** 4;
}

export function KeyDetails({
  items,
  className,
  duration = 3500,
}: KeyDetailsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [displayValues, setDisplayValues] = useState<number[]>(() =>
    items.map(() => 0)
  );
  const [inView, setInView] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;
        setInView(true);
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const ends = items.map((i) => i.endNumber);
        const startTime = performance.now();

        function tick(now: number) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutQuart(progress);
          const next = ends.map((end) => Math.round(eased * end));
          setDisplayValues((prev) =>
            prev.some((v, i) => v !== next[i]) ? next : prev
          );
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [items, duration]);

  return (
    <section
      ref={sectionRef}
      className={cn("section-stats-bg w-full px-4 py-16 sm:px-6 lg:px-8", className)}
      aria-labelledby="key-details-heading"
    >
      <h2 id="key-details-heading" className="sr-only">
        Key details
      </h2>
      <div
        className={cn(
          "section-reveal mx-auto max-w-6xl",
          inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {items.map((item, i) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center"
            >
              <p
                className="text-4xl font-bold tabular-nums text-white sm:text-5xl"
                aria-label={`${displayValues[i]}${item.suffix} ${item.label}`}
              >
                {displayValues[i]}
                {item.suffix}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/60">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
