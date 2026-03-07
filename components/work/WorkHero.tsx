import Image from "next/image";
import { WORK_PAGE_DATA } from "@/config/workPage";

export function WorkHero() {
    const { hero } = WORK_PAGE_DATA;

    return (
        <section
            className="relative flex flex-col items-center justify-center bg-[#070b14] px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
            aria-labelledby="work-hero-heading"
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/work/banner.png"
                    alt="Work Background Banner"
                    fill
                    className="object-cover opacity-40 brightness-75"
                    priority
                />
                {/* subtle ambient gradient on top of the image to blend it with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl text-center hero-entrance">
                <h1
                    id="work-hero-heading"
                    className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                >
                    {hero.title}
                    <br className="hidden sm:block" />
                    {" "}{hero.subtitle}
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg md:text-xl">
                    {hero.description}
                </p>
            </div>
        </section>
    );
}
