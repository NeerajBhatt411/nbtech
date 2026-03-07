import { ProfileCard } from "@/components/sections/ProfileCard";
import { ABOUT_PAGE_DATA } from "@/config/aboutPage";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function AboutArchitects() {
    const { architects } = ABOUT_PAGE_DATA;

    return (
        <section className="bg-background px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <header className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-2 sm:text-4xl">
                        {architects.title}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-white/50">
                        {architects.subtitle}
                    </p>
                </header>

                <div className="grid gap-8 sm:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
                    {architects.team.map((member, i) => (
                        <RevealOnScroll key={member.id} className="h-full">
                            <ProfileCard
                                name={member.name}
                                title={member.title}
                                description={member.description}
                                imageSrc={member.imageSrc}
                                placeholderLabel={member.placeholderLabel}
                            />
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
