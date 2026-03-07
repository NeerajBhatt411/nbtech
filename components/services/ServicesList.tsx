"use client";

import Image from "next/image";
import {
    ArrowRight,
    CheckCircle2,
    Smartphone,
    Code2,
    PenTool,
    Database,
    TrendingUp,
    Server
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SERVICES_PAGE_DATA, type DetailedServiceIconKey } from "@/config/servicesPage";
import { cn } from "@/lib/utils";

const ICONS: Record<DetailedServiceIconKey, React.ComponentType<{ className?: string }>> = {
    smartphone: Smartphone,
    code: Code2,
    pen: PenTool,
    database: Database,
    trending: TrendingUp,
    server: Server,
};

export function ServicesList() {
    return (
        <div className="section-services-bg relative w-full px-4 py-8 sm:px-6 lg:px-8 pb-32">
            <div className="mx-auto max-w-6xl flex flex-col gap-24 md:gap-32">
                {SERVICES_PAGE_DATA.services.map((service, index) => {
                    const Icon = ICONS[service.iconKey];
                    // Design shows:
                    // Item 0 (App Dev): Image Left
                    // Item 1 (Web Dev): Image Right
                    const isImageLeft = index % 2 === 0;

                    return (
                        <RevealOnScroll key={service.id}>
                            <div
                                id={service.id}
                                className={cn(
                                    "flex flex-col lg:items-center gap-10 lg:gap-16",
                                    isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                                )}
                            >
                                {/* Image Section */}
                                <div className="w-full lg:w-[45%] rounded-xl transition-smooth hover:-translate-y-1">
                                    <div className="relative aspect-[4/3] md:aspect-[5/3] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/40 bg-surface/30 shadow-lg shadow-black/20">
                                        <Image
                                            src={service.image}
                                            alt={service.imageAlt}
                                            fill
                                            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                                            sizes="(max-width: 1024px) 100vw, 45vw"
                                        />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full lg:w-[55%] flex flex-col items-start gap-6">
                                    <div className="flex items-center gap-2 text-accent font-semibold tracking-wider text-xs sm:text-sm uppercase">
                                        <Icon className="h-5 w-5" />
                                        <span>{service.category}</span>
                                    </div>

                                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[40px] leading-tight">
                                        {service.title}
                                    </h2>

                                    <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <ul className="flex flex-col gap-3 my-2 w-full">
                                        {service.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-white">
                                                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                                <span className="text-[15px] sm:text-base font-medium">{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-2">
                                        <Button
                                            href={service.cta.href}
                                            variant="primary"
                                            icon={<ArrowRight className="h-4 w-4" />}
                                            iconPosition="right"
                                        >
                                            {service.cta.label}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    );
                })}
            </div>
        </div>
    );
}
