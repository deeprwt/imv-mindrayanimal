import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  id,
  className,
  children,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase",
            dark ? "text-signal-300" : "text-brand-600",
          )}
        >
          <span aria-hidden="true" className={cn("h-px w-6", dark ? "bg-signal-300" : "bg-brand-600")} />
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "text-3xl leading-[1.12] font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-slate-950",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", dark ? "text-slate-300" : "text-slate-600")}>
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
