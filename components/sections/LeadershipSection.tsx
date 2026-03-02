"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProfileCard } from "@/components/sections/ProfileCard";
import type { LeadershipFeatureIconKey } from "@/config/leadership";

const FEATURE_ICONS: Record<
  LeadershipFeatureIconKey,
  React.ComponentType<{ className?: string }>
> = {
  check: CheckCircle,
  users: Users,
};

type FeatureItem = {
  readonly iconKey: LeadershipFeatureIconKey;
  readonly title: string;
  readonly description: string;
};

type TeamMember = {
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly description: string;
  readonly imageSrc?: string;
  readonly placeholderLabel?: string;
};

type LeadershipSectionProps = {
  tag: string;
  title: string;
  intro: string;
  features: readonly FeatureItem[];
  team: readonly TeamMember[];
  className?: string;
};

export function LeadershipSection({
  tag,
  title,
  intro,
  features,
  team,
  className,
}: LeadershipSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setVisible(true),
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "section-leadership-bg w-full px-4 py-16 sm:px-6 lg:px-8",
        className
      )}
      aria-labelledby="leadership-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: tag, heading, intro, features */}
          <div className="space-y-6">
            <p
              className={cn(
                "section-reveal inline-flex rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent",
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              {tag}
            </p>
            <h2
              id="leadership-heading"
              className={cn(
                "section-reveal text-3xl font-bold leading-tight tracking-tight text-white delay-75 sm:text-4xl",
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "section-reveal max-w-xl text-lg leading-relaxed text-white/80 delay-100",
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              {intro}
            </p>
            <ul className="space-y-4 pt-2" role="list">
              {features.map((item, i) => {
                const Icon = FEATURE_ICONS[item.iconKey];
                return (
                  <li
                    key={item.title}
                    className={cn(
                      "section-reveal flex gap-4 rounded-lg border border-border/30 bg-surface/50 p-4 transition-smooth hover:border-accent/20 hover:bg-surface/80",
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    )}
                    style={{
                      transitionDelay: visible ? `${150 + i * 80}ms` : "0ms",
                    }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent"
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: profile cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {team.map((member, i) => (
              <div
                key={member.id}
                className={cn(
                  "section-reveal",
                  visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  // Offset second card slightly down on large screens for staggered layout
                  i === 1 ? "lg:mt-10" : "lg:mt-0"
                )}
                style={{
                  transitionDelay: visible ? `${200 + i * 100}ms` : "0ms",
                }}
              >
                <ProfileCard
                  name={member.name}
                  title={member.title}
                  description={member.description}
                  imageSrc={member.imageSrc}
                  placeholderLabel={member.placeholderLabel}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
