import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { IndustryGradientKey } from "@/config/industries";

const GRADIENTS: Record<IndustryGradientKey, string> = {
  warm: "from-amber-800/90 to-amber-950",
  gold: "from-amber-500/90 via-yellow-600/80 to-yellow-900",
  teal: "from-teal-700/95 via-teal-800 to-teal-950",
  green: "from-emerald-800/95 via-green-900 to-green-950",
};

type IndustryCardProps = {
  title: string;
  href?: string;
  icon: React.ReactNode;
  imageSrc?: string | null;
  imageAlt?: string;
  gradientKey: IndustryGradientKey;
  className?: string;
  visible?: boolean;
  style?: React.CSSProperties;
};

/**
 * Industry card: full-bleed visual, bottom dark overlay, icon + label at bottom-left.
 * Rounded corners, subtle shadow; image or gradient fill.
 */
export function IndustryCard({
  title,
  href,
  icon,
  imageSrc,
  imageAlt,
  gradientKey,
  className,
  visible = true,
  style,
}: IndustryCardProps) {
  const content = (
    <>
      {/* Full-card visual */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-b",
              GRADIENTS[gradientKey]
            )}
          />
        )}
        {/* Bottom overlay for text readability */}
        <div
          className="absolute inset-0 rounded-2xl bg-linear-to-t from-black/75 via-black/20 to-transparent"
          aria-hidden
        />
        {/* Icon + label at bottom-left */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <div className="flex items-end gap-3">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-lg transition-transform duration-[var(--duration-hover)] ease-[var(--ease-smooth)] group-hover:scale-105"
              aria-hidden
            >
              {icon}
            </span>
            <p className="pb-0.5 text-lg font-bold text-white drop-shadow-sm sm:text-xl">
              {title}
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const cardClass = cn(
    "group relative block w-full overflow-hidden rounded-2xl shadow-lg transition-smooth hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-[var(--section-services-bg)]",
    "aspect-[4/5] min-h-[200px]",
    !visible && "translate-y-6 opacity-0",
    visible && "translate-y-0 opacity-100",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cardClass} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cardClass} style={style}>
      {content}
    </div>
  );
}
