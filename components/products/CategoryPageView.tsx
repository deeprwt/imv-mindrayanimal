import Link from "next/link";
import { getCategoryBreadcrumbs, getProductCategories, getProductsInCategory, productHref, toProductSummary } from "@/lib/products";
import { breadcrumbJsonLd, categoryJsonLd } from "@/lib/seo";
import type { Category } from "@/types/product";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { MobileStickyCta } from "@/components/navigation/MobileStickyCta";
import { EnquirySection } from "@/components/forms/EnquirySection";
import { CtaBand } from "@/components/marketing/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "./ProductCard";

/**
 * Category page (Cart-based / Portable Ultrasound). Per the client review it
 * opens directly on the product list — no category description or intro section.
 */
export function CategoryPageView({ category }: { category: Category }) {
  const products = getProductsInCategory(category.slug);
  const breadcrumbs = getCategoryBreadcrumbs(category);
  const siblings = getProductCategories().filter((c) => c.slug !== category.slug);

  return (
    <>
      <section data-hero aria-labelledby="category-heading" className="bg-slate-50 pt-6 pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 flex items-baseline justify-between gap-4 border-b border-slate-200 pb-4">
            <h1 id="category-heading" className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {category.name} systems
            </h1>
            <span className="shrink-0 text-sm text-slate-500">
              {products.length} {products.length === 1 ? "system" : "systems"}
            </span>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {products.map((p, i) => (
              <li key={p.slug}>
                <ProductCard product={toProductSummary(p)} location={`category_${category.slug}`} headingLevel="h2" eager={i < 3} />
              </li>
            ))}
          </ul>
          {siblings.length ? (
            <p className="mt-12 text-sm text-slate-600">
              Also explore{" "}
              {siblings.map((s) => (
                <Link key={s.slug} href={productHref(s.slug)} className="font-semibold text-brand-700 hover:underline">
                  {s.name.toLowerCase()} systems
                </Link>
              ))}{" "}
              or the full{" "}
              <Link href="/companion-animals" className="font-semibold text-brand-700 hover:underline">
                companion animal portfolio
              </Link>
              .
            </p>
          ) : null}
        </Container>
      </section>

      <div className="py-16 sm:py-20">
        <CtaBand location={`category_${category.slug}`} />
      </div>

      <EnquirySection location={`category_${category.slug}`} defaultType="quote" />
      <MobileStickyCta />
      <JsonLd data={categoryJsonLd(category, products)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
    </>
  );
}
