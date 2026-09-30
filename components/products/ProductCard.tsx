import Image from "next/image";
import Link from "next/link";
import { Gauge } from "lucide-react";
import type { ProductSummary } from "@/lib/products";
import { productHref } from "@/lib/products";
import { enquiryHref } from "@/lib/enquiry-events";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";

interface ProductCardProps {
  product: ProductSummary;
  /** Analytics context, e.g. "featured", "explorer", "related". */
  location: string;
  headingLevel?: "h2" | "h3" | "h4";
  className?: string;
  /** Load eagerly when the card is likely above the fold. */
  eager?: boolean;
}

/**
 * Product card. Compact horizontal layout on phones (keeps long product lists
 * scannable), stacked layout from `sm` up.
 */
export function ProductCard({ product, location, headingLevel: Heading = "h3", className, eager }: ProductCardProps) {
  const href = productHref(product.slug);
  const track = {
    "data-track": "product_click",
    "data-track-product": product.slug,
    "data-track-location": location,
  };

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition-[box-shadow,translate,border-color] duration-300 ease-[var(--ease-soft)] hover:border-slate-300 hover:shadow-lift motion-safe:hover:-translate-y-1",
        className,
      )}
    >
      <div className="flex flex-1 gap-3.5 p-3.5 sm:flex-col sm:gap-0 sm:p-0">
        <Link
          href={href}
          {...track}
          tabIndex={-1}
          aria-hidden="true"
          className="relative block aspect-square w-24 shrink-0 self-start overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100 sm:aspect-[5/4] sm:w-auto sm:self-auto sm:rounded-none sm:border-b sm:border-slate-100 sm:ring-0"
        >
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            loading={eager ? "eager" : "lazy"}
            sizes="(min-width: 1280px) 380px, (min-width: 640px) 45vw, 96px"
            className="object-contain p-1 transition-transform duration-500 ease-[var(--ease-soft)] group-hover:scale-[1.04] sm:p-4"
          />
          {product.isNew ? (
            <Badge tone="new" className="absolute top-1.5 left-1.5 px-1.5 py-0.5 text-[0.5625rem] sm:top-4 sm:left-4 sm:px-2.5 sm:py-1 sm:text-[0.6875rem]">
              New
            </Badge>
          ) : null}
        </Link>

        <div className="flex min-w-0 flex-1 flex-col sm:px-6 sm:pt-6">
          <p className="hidden text-[0.6875rem] font-semibold tracking-[0.14em] text-slate-500 uppercase sm:block">
            {product.categoryName} · {product.subcategoryName}
          </p>
          <Heading className="text-base font-semibold tracking-tight sm:mt-2 sm:text-xl">
            <Link href={href} {...track} className="transition-colors hover:text-brand-700">
              {product.name}
            </Link>
          </Heading>
          <p className="mt-0.5 text-xs font-medium text-slate-500 sm:mt-1 sm:text-sm">{product.productType}</p>
          <p className="mt-1.5 line-clamp-2 text-[0.8125rem] leading-snug text-slate-600 sm:mt-3 sm:line-clamp-3 sm:text-sm sm:leading-relaxed">
            {product.shortDescription}
          </p>

          {product.keySpec ? (
            <p className="mt-4 hidden items-start gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-700 ring-1 ring-slate-100 sm:flex">
              <Gauge aria-hidden="true" className="mt-px size-3.5 shrink-0 text-brand-600" />
              <span className="line-clamp-2">{product.keySpec}</span>
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex gap-2 px-3.5 pb-3.5 sm:mt-auto sm:px-6 sm:pt-6 sm:pb-6">
        <Link
          href={href}
          {...track}
          aria-label={`View ${product.name}`}
          className={buttonClasses({ variant: "secondary", size: "sm", className: "flex-1" })}
        >
          View Product
        </Link>
        <Link
          href={enquiryHref("product-information", product.slug)}
          data-enquiry="product-information"
          data-enquiry-product={product.slug}
          data-track="product_enquiry"
          data-track-product={product.slug}
          data-track-location={location}
          aria-label={`Request information about ${product.name}`}
          className={buttonClasses({ size: "sm", className: "flex-1" })}
        >
          Request Info
        </Link>
      </div>
    </article>
  );
}
