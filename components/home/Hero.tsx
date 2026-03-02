import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HERO_CONTENT, type HeroIconKey } from "@/config/hero";

const HERO_ICONS: Record<HeroIconKey, React.ComponentType<{ className?: string }>> = {
  "arrow-right": ArrowRight,
  eye: Eye,
};

export function Hero() {
  const { badge, headline, description, cta } = HERO_CONTENT;
  const PrimaryIcon = HERO_ICONS[cta.primary.iconKey];
  const SecondaryIcon = HERO_ICONS[cta.secondary.iconKey];

  return (
    <section
      className="hero-bg relative w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/80 bg-[#151a2c]/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white">
          <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
          {badge}
        </p>

        <h1
          id="hero-heading"
          className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {headline.before}{" "}
          <span className="text-accent">{headline.highlight}</span>{" "}
          {headline.after}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            href={cta.primary.href}
            variant="primary"
            icon={<PrimaryIcon className="h-4 w-4" />}
            iconPosition="right"
            className="min-w-[140px]"
          >
            {cta.primary.label}
          </Button>
          <Button
            href={cta.secondary.href}
            variant="secondary"
            icon={<SecondaryIcon className="h-4 w-4" />}
            iconPosition="right"
            className="min-w-[160px]"
          >
            {cta.secondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
