"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/types/product";
import { cn } from "@/lib/utils";

/** Product hero gallery. The first image is the LCP element and is preloaded. */
export function ProductGallery({ images, productName, isNew }: { images: ProductImage[]; productName: string; isNew: boolean }) {
  const [active, setActive] = useState(0);
  const current = images[active];
  const dark = current.kind === "clinical";

  return (
    <div>
      <figure
        className={cn(
          "relative aspect-square overflow-hidden rounded-4xl ring-1 transition-colors duration-300",
          dark ? "bg-slate-950 ring-slate-900" : "bg-gradient-to-b from-slate-100/80 to-white ring-slate-200/80",
        )}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          loading={active === 0 ? "eager" : "lazy"}
          fetchPriority={active === 0 ? "high" : "auto"}
          sizes="(min-width: 1024px) 560px, 92vw"
          className={cn(
            "motion-safe:animate-[enter_300ms_ease-out]",
            current.kind === "product" ? "object-contain p-8 mix-blend-multiply sm:p-12" : "object-contain",
          )}
        />
        {isNew ? (
          <span className="absolute top-5 left-5 rounded-full bg-brand-600 px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
            New
          </span>
        ) : null}
        {current.caption ? (
          <figcaption
            className={cn(
              "absolute inset-x-4 bottom-4 rounded-2xl px-4 py-2.5 text-xs font-medium backdrop-blur-md sm:text-sm",
              dark ? "bg-white/10 text-white" : "bg-white/80 text-slate-700 ring-1 ring-slate-200",
            )}
          >
            {current.caption}
          </figcaption>
        ) : null}
      </figure>

      {images.length > 1 ? (
        <ul className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1" aria-label={`${productName} images`}>
          {images.map((image, index) => (
            <li key={image.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={index === active}
                aria-label={`Show image ${index + 1} of ${images.length}: ${image.caption ?? image.alt}`}
                className={cn(
                  "relative block size-18 overflow-hidden rounded-2xl ring-2 transition-[box-shadow,opacity] sm:size-20",
                  image.kind === "clinical" ? "bg-slate-950" : "bg-slate-50",
                  index === active ? "ring-brand-600" : "opacity-80 ring-transparent hover:opacity-100",
                )}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="80px"
                  className={cn("object-contain", image.kind === "product" ? "p-1.5 mix-blend-multiply" : "object-cover")}
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
