import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroHighlightWord } from "@/components/home/HeroHighlightWord";
import { HERO_CONTENT, HERO_HIGHLIGHT_WORDS, type HeroIconKey } from "@/config/hero";

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
      className="hero-bg relative w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="hero-entrance relative z-10 mx-auto max-w-4xl text-center">


        <h1
          id="hero-heading"
          className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {headline.before}{" "}
          <HeroHighlightWord words={HERO_HIGHLIGHT_WORDS} />
          <br />
          {headline.after}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg md:text-xl">
          {description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <Button
            href={cta.primary.href}
            variant="primary"
            className="w-full sm:w-auto sm:min-w-[140px]"
          >
            {cta.primary.label}
          </Button>
          <Button
            href={cta.secondary.href}
            variant="secondary"
            className="w-full sm:w-auto sm:min-w-[160px]"
          >
            {cta.secondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
