import { Flag, MapPin, Rocket, Eye } from "lucide-react";
import { ABOUT_PAGE_DATA } from "@/config/aboutPage";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
    "flag": Flag,
    "map-pin": MapPin,
};

const BG_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
    "mission": Rocket,
    "vision": Eye,
};

export function AboutMission() {
    const { mission } = ABOUT_PAGE_DATA;

    return (
        <section className="bg-background px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {mission.map((item, index) => {
                        const Icon = ICONS[item.icon];
                        const BgIcon = BG_ICONS[item.id];

                        return (
                            <RevealOnScroll key={item.id} className="h-full">
                                <div
                                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-surface/40 p-8 lg:p-10 transition-smooth hover:border-accent/30 hover:shadow-lg hover:-translate-y-1"
                                >
                                    {/* Background faint graphic */}
                                    <div className="absolute -right-6 -bottom-6 opacity-[0.03] text-accent">
                                        {BgIcon && <BgIcon className="w-56 h-56 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6" />}
                                    </div>

                                    {/* Icon */}
                                    <div className="mb-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface/80 border border-white/5 text-accent shadow-sm">
                                        {Icon && <Icon className="h-5 w-5" />}
                                    </div>

                                    <h3 className="mb-4 text-2xl font-bold tracking-tight text-white lg:text-3xl">
                                        {item.title}
                                    </h3>

                                    <p className="text-base leading-relaxed text-white/70 lg:text-lg">
                                        {item.description}
                                    </p>
                                </div>
                            </RevealOnScroll>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
