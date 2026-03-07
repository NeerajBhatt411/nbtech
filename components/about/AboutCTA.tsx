import { Button } from "@/components/ui/Button";
import { ABOUT_PAGE_DATA } from "@/config/aboutPage";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
    const { cta } = ABOUT_PAGE_DATA;

    return (
        <section className="section-stats-bg w-full px-4 py-20 sm:px-6 sm:py-24 lg:px-8 text-center border-t border-border/40">
            <div className="mx-auto max-w-2xl reveal-on-scroll is-visible flex flex-col items-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight mb-4">
                    {cta.title}
                </h2>
                <p className="text-base text-white/70 sm:text-lg mb-8 max-w-xl">
                    {cta.description}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                    <Button
                        href={cta.primaryHref}
                        variant="primary"
                        iconPosition="right"
                    >
                        {cta.primaryLabel}
                    </Button>
                    <Button href={cta.secondaryHref} variant="secondary">
                        {cta.secondaryLabel}
                    </Button>
                </div>
            </div>
        </section>
    );
}
