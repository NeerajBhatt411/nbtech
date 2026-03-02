import { cn } from "@/lib/utils";

type InfiniteCarouselProps = {
  items: readonly string[];
  className?: string;
  itemClassName?: string;
};

/** Number of duplicate copies for a seamless never-ending loop (no empty gap on reset) */
const COPIES = 4;

/**
 * Infinite horizontal scrolling carousel. Uses CSS animation only (no JS).
 * Renders items multiple times so the loop never shows empty space.
 */
export function InfiniteCarousel({
  items,
  className,
  itemClassName,
}: InfiniteCarouselProps) {
  if (items.length === 0) return null;

  const repeated = Array.from({ length: COPIES }, () => items).flat();

  return (
    <div
      className={cn("w-full overflow-hidden", className)}
      aria-hidden
    >
      <div className="inline-flex w-max infinite-scroll-track">
        {repeated.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className={cn(
              "shrink-0 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white/70 md:px-8 md:text-base",
              itemClassName
            )}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
