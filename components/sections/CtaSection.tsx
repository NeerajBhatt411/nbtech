import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

type CtaAction = {
  readonly label: string;
  readonly href: string;
};

type CtaSectionProps = {
  title: string;
  description: string;
  primaryAction: CtaAction;
  secondaryAction?: CtaAction;
  eyebrow?: string;
  className?: string;
};

export function CtaSection({
  title,
  description,
  primaryAction,
  secondaryAction,
  eyebrow,
  className,
}: CtaSectionProps) {
  return (
    <section
      className={cn(
        "w-full px-4 py-16 sm:px-6 lg:px-8 bg-background",
        className
      )}
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-4xl">
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-[#0b1728] bg-linear-to-br from-[#0c2136] via-[#0d2740] to-[#0b1728] px-6 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.75)] transition-smooth sm:px-10 sm:py-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-65"
              aria-hidden
            >
              <div className="absolute -inset-32 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_60%)]" />
            </div>

            <div className="relative flex flex-col items-center gap-6 text-center sm:gap-7">
              {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-100/80">
                  {eyebrow}
                </p>
              )}

              <div className="space-y-3 sm:space-y-4">
                <h2
                  id="cta-heading"
                  className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-4xl"
                >
                  {title}
                </h2>
                <p className="mx-auto max-w-xl text-sm text-sky-100/85 sm:text-base">
                  {description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button
                  href={primaryAction.href}
                  className="w-full min-w-0 bg-[#1d9bf0] text-white hover:bg-[#1584ce] sm:w-auto sm:min-w-[180px]"
                >
                  {primaryAction.label}
                </Button>
                {secondaryAction && (
                  <Button
                    href={secondaryAction.href}
                    className="w-full min-w-0 bg-[#111827] text-slate-100 hover:bg-[#020617] sm:w-auto sm:min-w-[180px]"
                  >
                    {secondaryAction.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

