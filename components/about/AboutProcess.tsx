import { Search, GitBranch, PenTool, Code, Rocket, LifeBuoy } from "lucide-react";
import { ABOUT_PAGE_DATA } from "@/config/aboutPage";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
    "search": Search,
    "git-branch": GitBranch,
    "pen-tool": PenTool,
    "code": Code,
    "rocket": Rocket,
    "life-buoy": LifeBuoy,
};

export function AboutProcess() {
    const { process } = ABOUT_PAGE_DATA;

    return (
        <section className="w-full section-services-bg px-4 py-24 sm:px-6 lg:px-8 border-y border-border/20">
            <div className="mx-auto max-w-7xl">
                <header className="mb-20 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {process.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
                        {process.subtitle}
                    </p>
                </header>

                <div className="relative">
                    {/* Horizontal Line connector */}
                    <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-border/40" />

                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6 relative z-10">
                        {process.steps.map((step, index) => {
                            const Icon = ICONS[step.icon];
                            return (
                                <RevealOnScroll key={step.id}>
                                    <div className="flex flex-col items-center text-center group">
                                        <div className="relative mb-6">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border/40 bg-surface/50 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:border-accent/40 group-hover:border-2">
                                                {Icon && <Icon className="h-6 w-6 text-white/80 group-hover:text-white" />}
                                            </div>
                                            <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white ring-4 ring-background shadow-md">
                                                {step.id}
                                            </div>
                                        </div>

                                        <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-accent">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-white/60 leading-relaxed px-2">
                                            {step.description}
                                        </p>
                                    </div>
                                </RevealOnScroll>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
