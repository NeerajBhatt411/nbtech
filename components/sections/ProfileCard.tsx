import Image from "next/image";
import { cn } from "@/lib/utils";

type ProfileCardProps = {
  name: string;
  title: string;
  description: string;
  imageSrc?: string | null;
  imageAlt?: string;
  placeholderLabel?: string;
  className?: string;
  visible?: boolean;
  style?: React.CSSProperties;
};

/**
 * Reusable profile/team card: image or placeholder, name, title (accent), description.
 */
export function ProfileCard({
  name,
  title,
  description,
  imageSrc,
  imageAlt,
  placeholderLabel,
  className,
  visible = true,
  style,
}: ProfileCardProps) {
  return (
    <div
      className={cn(
        "profile-card group rounded-xl p-0 overflow-hidden transition-[transform,opacity,box-shadow] duration-300 ease-out hover:-translate-y-1",
        !visible && "translate-y-6 opacity-0",
        visible && "translate-y-0 opacity-100",
        className
      )}
      style={style}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-xl bg-[#15202a]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-[#15202a] text-white/25">
            <span className="text-5xl font-bold tracking-tight">
              {placeholderLabel ?? name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-lg font-bold text-white">{name}</p>
        <p className="mt-1 text-sm font-medium text-accent">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
      </div>
    </div>
  );
}
