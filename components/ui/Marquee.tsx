"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
    items: readonly string[];
    className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
    // Triple the items to ensure it fills the width and loops smoothly
    const marqueeItems = [...items, ...items, ...items, ...items];

    return (
        <div className={cn("relative flex w-full overflow-hidden bg-[#c0ff00] py-4 uppercase font-bold text-black border-y border-black/10", className)}>
            <div className="animate-marquee flex whitespace-nowrap">
                {marqueeItems.map((item, i) => (
                    <div key={i} className="flex items-center mx-6 md:mx-10 shrink-0">
                        <span className="text-xl md:text-2xl lg:text-3xl tracking-tighter">
                            {item}
                        </span>
                        <span className="ml-12 md:ml-20 h-2 w-2 rounded-full bg-black/40" />
                    </div>
                ))}
            </div>
        </div>
    );
}
