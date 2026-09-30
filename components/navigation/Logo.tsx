import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Official lockup is 236×70. Replace with an SVG from the brand team when available. */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link href="/companion-animals" className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src={tone === "light" ? "/brand/mindray-animal-medical-logo-white.png" : siteConfig.logo}
        alt={`${siteConfig.name} — home`}
        width={236}
        height={70}
        loading={tone === "dark" ? "eager" : "lazy"}
        // Tiny pre-sized PNGs: serve as-is (the optimizer's AVIF encode stalls on the white variant).
        unoptimized
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
