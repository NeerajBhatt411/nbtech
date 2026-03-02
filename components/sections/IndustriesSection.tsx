"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { UtensilsCrossed, GraduationCap, HeartPulse, LayoutGrid, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { IndustryCard } from "@/components/sections/IndustryCard";
import type { IndustryIconKey } from "@/config/industries";

const INDUSTRY_ICONS: Record<
  IndustryIconKey,
  React.ComponentType<{ className?: string }>
> = {
  utensils: UtensilsCrossed,
  graduation: GraduationCap,
  heart: HeartPulse,
  layout: LayoutGrid,
};

type IndustryItem = {
  readonly id: string;
  readonly title: string;
  readonly iconKey: IndustryIconKey;
  readonly gradientKey: "warm" | "gold" | "teal" | "green";
  readonly imageSrc?: string;
};

type IndustriesSectionProps = {
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  items: readonly IndustryItem[];
  className?: string;
};

export function IndustriesSection({
  title,
  subtitle,
  cta,
  items,
  className,
}: IndustriesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setVisible(true),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "section-services-bg w-full px-4 py-16 sm:px-6 lg:px-8",
        className
      )}
      aria-labelledby="industries-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="industries-heading"
              className={cn(
                "section-reveal text-2xl font-bold tracking-tight text-white sm:text-3xl",
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "section-reveal mt-2 max-w-xl text-white/70 delay-75",
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              {subtitle}
            </p>
          </div>
          <Link
            href={cta.href}
            className={cn(
              "section-reveal group/link inline-flex items-center gap-2 text-accent hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--section-services-bg)] rounded",
              "self-start md:self-auto",
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            )}
            style={{ transitionDelay: visible ? "150ms" : "0ms" }}
          >
            <span className="font-medium">{cta.label}</span>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5" aria-hidden />
          </Link>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {items.map((item, i) => {
            const Icon = INDUSTRY_ICONS[item.iconKey];
            return (
              <li key={item.id}>
                <IndustryCard
                  title={item.title}
                  href={`${cta.href}#${item.id}`}
                  icon={<Icon className="h-5 w-5" />}
                  imageSrc={item.imageSrc}
                  gradientKey={item.gradientKey}
                  visible={visible}
                  style={{
                    transitionDelay: visible ? `${180 + i * 80}ms` : "0ms",
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
