import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent",
  secondary:
    "border border-white/80 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white/50",
} as const;

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

type BaseProps = {
  variant?: keyof typeof VARIANTS;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

type ButtonProps = BaseProps &
  (
    | (Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & { href?: never })
    | (Omit<ComponentPropsWithoutRef<typeof Link>, keyof BaseProps> & { href: string })
  );

function ButtonContent({
  icon,
  iconPosition = "right",
  children,
}: Pick<BaseProps, "icon" | "iconPosition" | "children">) {
  return (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0" aria-hidden>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="shrink-0" aria-hidden>{icon}</span>}
    </>
  );
}

export function Button({
  variant = "primary",
  children,
  className,
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) {
  const classes = cn(BASE_CLASSES, VARIANTS[variant], className);

  if (props.href !== undefined) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        <ButtonContent icon={icon} iconPosition={iconPosition}>{children}</ButtonContent>
      </Link>
    );
  }

  const { href: _, ...buttonProps } = props as ButtonProps & { href?: string };
  return (
    <button type="button" className={classes} {...(buttonProps as ComponentPropsWithoutRef<"button">)}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>{children}</ButtonContent>
    </button>
  );
}
