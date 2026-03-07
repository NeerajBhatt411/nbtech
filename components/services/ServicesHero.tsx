import { HeroHighlightWord } from "@/components/home/HeroHighlightWord";
import { SERVICES_PAGE_DATA } from "@/config/servicesPage";

export function ServicesHero() {
    const { header } = SERVICES_PAGE_DATA;

    return (
        <section
            className="hero-bg relative w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
            aria-labelledby="services-hero-heading"
        >
            <div className="hero-entrance relative z-10 mx-auto max-w-4xl text-center">


                <h1
                    id="services-hero-heading"
                    className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
                >
                    {header.title.default}{" "}
                    <span className="text-accent">{header.title.highlight}</span>
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-base text-white/70 sm:text-lg md:text-xl">
                    {header.subtitle}
                </p>
            </div>
        </section>
    );
}
