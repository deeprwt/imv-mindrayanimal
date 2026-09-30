import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { enquiryHref } from "@/lib/enquiry-events";
import {
  getCategoryBreadcrumbs,
  getProductsInCategory,
  getSubcategories,
  productHref,
  toProductSummary,
} from "@/lib/products";
import { companionAnimalFaqs } from "@/data/faqs";
import { breadcrumbJsonLd, categoryJsonLd, faqJsonLd } from "@/lib/seo";
import type { Category } from "@/types/product";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { MobileStickyCta } from "@/components/navigation/MobileStickyCta";
import { EnquirySection } from "@/components/forms/EnquirySection";
import { CtaBand } from "@/components/marketing/CtaBand";
import { FaqSection } from "@/components/marketing/FaqSection";
import { TechnologySection } from "@/components/marketing/TechnologySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "./ProductCard";

export function CategoryPageView({ category }: { category: Category }) {
  const products = getProductsInCategory(category.slug);
  const subcategories = getSubcategories(category.slug);
  const breadcrumbs = getCategoryBreadcrumbs(category);
  const groups = subcategories.length
    ? subcategories.map((sub) => ({ sub, items: products.filter((p) => p.subcategory === sub.slug) }))
    : null;
  const siblings = category.parent ? getSubcategories(category.parent).filter((s) => s.slug !== category.slug) : [];

  return (
    <>
      <section data-hero aria-labelledby="category-heading" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-6 pb-16 sm:pb-20">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">{category.eyebrow}</p>
              <h1 id="category-heading" className="mt-4 text-4xl leading-[1.06] font-semibold tracking-tight sm:text-5xl">
                {category.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{category.summary}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={enquiryHref("quote")}
                  data-enquiry="quote"
                  data-track="cta_click"
                  data-track-cta="quote"
                  data-track-location={`category_${category.slug}`}
                  size="lg"
                  arrow
                >
                  Request a Quote
                </ButtonLink>
                <ButtonLink href="#products" variant="secondary" size="lg">
                  View {products.length} systems
                </ButtonLink>
              </div>
              {subcategories.length ? (
                <ul className="mt-8 flex flex-wrap gap-2">
                  {subcategories.map((sub) => (
                    <li key={sub.slug}>
                      <Link href={productHref(sub.slug)} className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-soft ring-1 ring-slate-200 hover:text-brand-700">
                        {sub.name} <ArrowRight aria-hidden="true" className="size-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="relative aspect-square overflow-hidden rounded-4xl bg-gradient-to-b from-slate-100 to-white ring-1 ring-slate-200 sm:aspect-[4/3.4] lg:aspect-square">
              <Image
                src={category.image.src}
                alt={category.image.alt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 520px, 92vw"
                className="object-contain p-8 mix-blend-multiply sm:p-12"
              />
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="category-intro-heading" className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="reveal">
            <h2 id="category-intro-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Why choose our {category.name.toLowerCase()} systems
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {category.intro.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {category.highlights.map((h) => (
              <li key={h.title} className="reveal rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
                <h3 className="font-semibold text-slate-950">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{h.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="products" aria-labelledby="category-products-heading" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <Container>
          <h2 id="category-products-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2.25rem]">
            {category.name} systems
          </h2>
          {groups ? (
            <div className="mt-10 space-y-14">
              {groups.map(({ sub, items }) => (
                <div key={sub.slug}>
                  <div className="flex items-baseline justify-between gap-4 border-b border-slate-200 pb-4">
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      <Link href={productHref(sub.slug)} className="hover:text-brand-700">
                        {sub.name}
                      </Link>
                    </h3>
                    <span className="text-sm text-slate-500">{items.length} systems</span>
                  </div>
                  <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {items.map((p) => (
                      <li key={p.slug}>
                        <ProductCard product={toProductSummary(p)} location={`category_${category.slug}`} headingLevel="h4" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {products.map((p) => (
                <li key={p.slug}>
                  <ProductCard product={toProductSummary(p)} location={`category_${category.slug}`} />
                </li>
              ))}
            </ul>
          )}
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

      {/* The parent category is the in-depth overview: technology, clinical images and FAQs. */}
      {!category.parent ? <TechnologySection /> : null}

      <div className="py-16 sm:py-20">
        <CtaBand location={`category_${category.slug}`} />
      </div>

      {!category.parent ? <FaqSection faqs={companionAnimalFaqs} location={`category_${category.slug}`} /> : null}

      <EnquirySection location={`category_${category.slug}`} defaultType="quote" />
      <MobileStickyCta />
      <JsonLd data={categoryJsonLd(category, products)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      {!category.parent ? <JsonLd data={faqJsonLd(companionAnimalFaqs)} /> : null}
    </>
  );
}
