import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "dark" | "light" | "ghost" | "outlineLight";
type Size = "sm" | "md" | "lg";

const base =
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[background-color,color,box-shadow,transform,border-color] duration-200 ease-[var(--ease-soft)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[0_8px_20px_-8px_rgb(200_16_46/0.55)] hover:bg-brand-700 hover:shadow-[0_12px_28px_-10px_rgb(200_16_46/0.65)] focus-visible:outline-brand-600",
  secondary:
    "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-slate-900",
  dark: "bg-slate-950 text-white hover:bg-slate-800 focus-visible:outline-slate-950",
  light: "bg-white text-slate-950 hover:bg-slate-100 focus-visible:outline-white",
  outlineLight:
    "border border-white/30 bg-white/5 text-white hover:border-white/60 hover:bg-white/10 focus-visible:outline-white",
  ghost: "text-slate-900 hover:bg-slate-100 focus-visible:outline-slate-900",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.9375rem] sm:h-13 sm:px-7",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

function Arrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="size-4 transition-transform duration-200 group-hover/button:translate-x-0.5"
    />
  );
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
  children: ReactNode;
};

export function ButtonLink({ variant, size, className, arrow, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses({ variant, size, className })} {...props}>
      {children}
      {arrow ? <Arrow /> : null}
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant; size?: Size; arrow?: boolean };

export function Button({ variant, size, className, arrow, children, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...props}>
      {children}
      {arrow ? <Arrow /> : null}
    </button>
  );
}
