import { CONTACT_PAGE_DATA } from "@/config/contactPage";

export function ContactHero() {
    const { hero } = CONTACT_PAGE_DATA;

    return (
        <section
            className="relative flex flex-col items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 px-4 text-center overflow-hidden"
            aria-labelledby="contact-hero-heading"
        >
            <div className="relative z-10 max-w-4xl mx-auto hero-entrance">


                <h1
                    id="contact-hero-heading"
                    className="text-4xl font-bold leading-tight tracking-tight text-white mb-6 sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto"
                >
                    {hero.titleBefore}
                    <br className="hidden sm:block" />
                    <span className="text-accent">{hero.titleHighlight}</span>{" "}
                    {hero.titleAfter}
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
                    {hero.description}
                </p>
            </div>
        </section>
    );
}
