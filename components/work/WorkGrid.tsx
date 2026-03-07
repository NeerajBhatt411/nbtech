"use client";

import { useState } from "react";
import Image from "next/image";
import { LayoutGrid, Database, Globe, Smartphone } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WORK_PAGE_DATA } from "@/config/workPage";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
    "layout-grid": LayoutGrid,
    "database": Database,
    "globe": Globe,
    "smartphone": Smartphone,
};

export function WorkGrid() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProjects = WORK_PAGE_DATA.projects.filter((p) =>
        activeFilter === "all" ? true : p.filterId === activeFilter
    );

    return (
        <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Filters & Count */}
                <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end md:mb-12">

                    {/* Tabs */}
                    <div className="flex flex-wrap items-center gap-2 rounded-xl bg-surface/50 p-1.5 ring-1 ring-border/50">
                        {WORK_PAGE_DATA.filters.map((filter) => {
                            const Icon = ICONS[filter.icon];
                            const isActive = activeFilter === filter.id;

                            return (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={cn(
                                        "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300",
                                        isActive
                                            ? "bg-accent text-white shadow-md shadow-accent/20"
                                            : "text-white/60 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    {filter.label}
                                </button>
                            );
                        })}
                    </div>

                    <p className="text-sm font-medium text-white/50 hidden md:block">
                        Showing {filteredProjects.length} of {WORK_PAGE_DATA.totalProjects} projects
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10">
                    {filteredProjects.map((project, idx) => (
                        <RevealOnScroll key={project.id} className="h-full">
                            <div
                                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/40 bg-surface/60 transition-smooth hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 focus-within:ring-2 focus-within:ring-accent/40 block"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface/40 p-6 flex justify-center items-center">
                                    {/* Fallback pattern just in case image is loading */}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Content Box */}
                                <div className="flex flex-1 flex-col p-6 lg:p-8">
                                    <span className="mb-3 text-[11px] font-bold uppercase tracking-wider text-accent">
                                        {project.category}
                                    </span>

                                    <h3 className="mb-3 text-lg font-bold text-white lg:text-xl">
                                        {project.title}
                                    </h3>

                                    <p className="mb-6 text-sm leading-relaxed text-white/60 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

                {/* Load More Button */}
                {activeFilter === "all" && (
                    <div className="mt-16 flex justify-center">
                        <button className="rounded-full border border-border/60 bg-surface/30 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-surface hover:text-accent">
                            Load More Projects <span className="ml-1 opacity-50">▾</span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
