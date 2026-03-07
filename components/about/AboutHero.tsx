import { ABOUT_PAGE_DATA } from "@/config/aboutPage";

export function AboutHero() {
    const { hero } = ABOUT_PAGE_DATA;

    return (
        <section
            className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
            aria-labelledby="about-hero-heading"
        >
            <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none opacity-30 flex justify-center">
                <div className="w-[600px] h-[300px] bg-accent/30 rounded-[100%] blur-[100px] -translate-y-1/2" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl text-center hero-entrance">


                <h1
                    id="about-hero-heading"
                    className="text-4xl font-bold leading-tight tracking-tight text-white mb-6 sm:text-5xl md:text-6xl"
                >
                    {hero.titleBefore}
                    <br />
                    <span className="text-accent">{hero.titleHighlight}</span>
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
                    {hero.description}
                </p>
            </div>
        </section>
    );
}
