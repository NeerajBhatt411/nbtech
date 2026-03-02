"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  PenTool,
  Container,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceIconKey } from "@/config/services";

const SERVICE_ICONS: Record<
  ServiceIconKey,
  React.ComponentType<{ className?: string }>
> = {
  code: Code2,
  smartphone: Smartphone,
  cloud: Cloud,
  pen: PenTool,
  container: Container,
  lightbulb: Lightbulb,
};

type ServiceItem = {
  readonly iconKey: ServiceIconKey;
  readonly title: string;
  readonly description: string;
};

type ServicesSectionProps = {
  title: { default: string; highlight: string };
  subtitle: string;
  items: readonly ServiceItem[];
  className?: string;
};

export function ServicesSection({
  title,
  subtitle,
  items,
  className,
}: ServicesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setVisible(true),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn("section-services-bg w-full px-4 py-16 sm:px-6 lg:px-8", className)}
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center md:mb-16">
          <h2
            id="services-heading"
            className={cn(
              "text-3xl font-bold tracking-tight text-white transition-all duration-700 sm:text-4xl",
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            {title.default}{" "}
            <span className="text-accent">{title.highlight}</span>
          </h2>
          <p
            className={cn(
              "mx-auto mt-4 max-w-2xl text-lg text-white/70 transition-all duration-700 delay-100",
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            {subtitle}
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {items.map((item, i) => {
            const Icon = SERVICE_ICONS[item.iconKey];
            return (
              <li
                key={item.title}
                className={cn(
                  "group rounded-xl border border-border/40 bg-surface/80 p-6 backdrop-blur-sm transition-[transform,opacity,box-shadow,border-color,background-color] duration-300 ease-out hover:border-accent/30 hover:bg-surface hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5",
                  "focus-within:border-accent/40 focus-within:ring-2 focus-within:ring-accent/20",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                )}
                style={{
                  transitionDelay: visible ? `${120 + i * 80}ms` : "0ms",
                }}
              >
                <div className="flex flex-col gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent transition-colors group-hover:bg-accent/25"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
