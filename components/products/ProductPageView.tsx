import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Download, FileText, Mail, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { enquiryHref } from "@/lib/enquiry-events";
import {
  focusLabels,
  getCategoryName,
  getProductBreadcrumbs,
  getProductFaqs,
  getRelatedProducts,
  productHref,
  toProductSummary,
} from "@/lib/products";
import { breadcrumbJsonLd, faqJsonLd, productJsonLd } from "@/lib/seo";
import type { Product } from "@/types/product";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { MobileStickyCta } from "@/components/navigation/MobileStickyCta";
import { EnquirySection } from "@/components/forms/EnquirySection";
import { FaqSection } from "@/components/marketing/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink, buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "./ProductCard";
import { ProductGallery } from "./ProductGallery";
import { SpecList } from "./SpecList";

function SectionTitle({ id, eyebrow, children }: { id: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">{eyebrow}</p>
      <h2 id={id} className="text-2xl leading-tight font-semibold tracking-tight sm:text-3xl lg:text-[2.25rem]">
        {children}
      </h2>
    </div>
  );
}

export function ProductPageView({ product }: { product: Product }) {
  const breadcrumbs = getProductBreadcrumbs(product);
  const faqs = getProductFaqs(product);
  const related = getRelatedProducts(product, 3);
  const heroImages = [product.image, ...product.gallery.filter((g) => g.kind !== "clinical")];
  const clinical = product.gallery.filter((g) => g.kind === "clinical");
  const subcategoryName = getCategoryName(product.subcategory);
  const categoryName = getCategoryName(product.category);
  const hasApplications = product.applications.length > 0 || product.focus.length > 0;

  const nav = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    ...(hasApplications ? [{ id: "applications", label: "Applications" }] : []),
    ...(clinical.length ? [{ id: "clinical-images", label: "Clinical images" }] : []),
    { id: "specifications", label: "Specifications" },
    { id: "downloads", label: "Downloads" },
    { id: "faq", label: "FAQ" },
    { id: "enquiry", label: "Enquire" },
  ];

  const ctaData = (cta: string) => ({
    "data-track": "product_enquiry",
    "data-track-cta": cta,
    "data-track-product": product.slug,
    "data-track-location": "product_hero",
    "data-enquiry-product": product.slug,
  });

  return (
    <>
      {/* Hero */}
      <section data-hero aria-labelledby="product-heading" className="relative bg-gradient-to-b from-slate-50 to-white pt-6 pb-14 sm:pb-20">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-6 grid gap-10 lg:mt-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div>
              <ProductGallery images={heroImages} productName={product.name} isNew={product.isNew} />
            </div>

            <div className="lg:pt-4">
              <div className="flex flex-wrap items-center gap-2">
                <Link href={productHref(product.category)}>
                  <Badge tone="neutral">{categoryName}</Badge>
                </Link>
                <Link href={productHref(product.subcategory)}>
                  <Badge tone="neutral">{subcategoryName}</Badge>
                </Link>
                {product.isNew ? <Badge tone="new">New</Badge> : null}
              </div>
              <h1 id="product-heading" className="mt-5 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-lg font-medium text-slate-700">{product.productType}</p>
              {product.tagline ? <p className="mt-1 text-base text-brand-700">“{product.tagline}”</p> : null}
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{product.shortDescription}</p>

              {product.features.length ? (
                <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {product.features.slice(0, 6).map((f) => (
                    <li key={f.title} className="flex gap-2.5 text-sm text-slate-700">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                      {f.title}
                    </li>
                  ))}
                </ul>
              ) : null}

              {product.keySpec ? (
                <p className="mt-6 inline-flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-soft ring-1 ring-slate-200">
                  <Sparkles aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  {product.keySpec}
                </p>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={enquiryHref("quote", product.slug)} data-enquiry="quote" {...ctaData("quote")} size="lg" arrow>
                  Request a Quote
                </ButtonLink>
                <ButtonLink href={enquiryHref("demo", product.slug)} data-enquiry="demo" {...ctaData("demo")} variant="secondary" size="lg">
                  Book a Demo
                </ButtonLink>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
                {product.brochure ? (
                  <a
                    href={product.brochure.url}
                    download
                    data-track="brochure_download"
                    data-track-product={product.slug}
                    data-track-location="product_hero"
                    className="inline-flex items-center gap-1.5 font-semibold text-slate-900 hover:text-brand-700"
                  >
                    <Download aria-hidden="true" className="size-4" /> Download Brochure
                  </a>
                ) : (
                  <Link
                    href={enquiryHref("product-information", product.slug)}
                    data-enquiry="product-information"
                    {...ctaData("brochure_request")}
                    className="inline-flex items-center gap-1.5 font-semibold text-slate-900 hover:text-brand-700"
                  >
                    <FileText aria-hidden="true" className="size-4" /> Request Product Information
                  </Link>
                )}
                <a href={`tel:${siteConfig.contact.phoneHref}`} data-track-location="product_hero" data-track-product={product.slug} className="inline-flex items-center gap-1.5 hover:text-slate-950">
                  <Phone aria-hidden="true" className="size-4" /> {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* In-page navigation */}
      <nav aria-label={`${product.name} sections`} className="sticky top-16 z-30 border-y border-slate-200 bg-white lg:top-[4.5rem] lg:bg-white/90 lg:backdrop-blur-md">
        <Container>
          <ul className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4 py-2">
            {nav.map((item) => (
              <li key={item.id} className="shrink-0">
                <a href={`#${item.id}`} className="inline-flex h-9 items-center rounded-full px-3.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* Overview */}
      <section id="overview" aria-labelledby="overview-heading" className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="reveal">
            <SectionTitle id="overview-heading" eyebrow="Overview">
              {product.name} {product.productType.toLowerCase().includes("ultrasound") ? "overview" : "at a glance"}
            </SectionTitle>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {product.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
          {product.benefits.length ? (
            <aside aria-label={`${product.name} benefits`} className="reveal rounded-4xl bg-slate-950 p-7 text-white sm:p-9">
              <p className="text-xs font-semibold tracking-[0.16em] text-signal-300 uppercase">Benefits</p>
              <ul className="mt-5 space-y-4">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-slate-200">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </Container>
      </section>

      {/* Features */}
      <section id="features" aria-labelledby="features-heading" className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionTitle id="features-heading" eyebrow="Key features">
            {product.name} features
          </SectionTitle>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <li key={feature.title} className="reveal rounded-3xl bg-white p-6 ring-1 ring-slate-200 sm:p-7">
                <h3 className="text-base font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Applications */}
      {hasApplications ? (
        <section id="applications" aria-labelledby="applications-heading" className="py-16 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionTitle id="applications-heading" eyebrow="Clinical applications">
              Where the {product.name} fits
            </SectionTitle>
            <div className="reveal space-y-8">
              {product.applications.length ? (
                <div>
                  <h3 className="text-sm font-semibold text-slate-950">Clinical applications</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {product.applications.map((a) => (
                      <li key={a} className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-800 ring-1 ring-brand-100">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {product.focus.length ? (
                <div>
                  <h3 className="text-sm font-semibold text-slate-950">Clinical focus</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {product.focus.map((f) => (
                      <li key={f}>
                        <Link
                          href={`/products?focus=${f}`}
                          className="inline-flex rounded-full bg-slate-100 px-3.5 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-200"
                        >
                          {focusLabels[f]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {product.species.length ? (
                <div>
                  <h3 className="text-sm font-semibold text-slate-950">Species referenced</h3>
                  <p className="mt-2 text-sm text-slate-600">{product.species.join(" · ")}</p>
                </div>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Clinical images */}
      {clinical.length ? (
        <section id="clinical-images" aria-labelledby="clinical-heading" className="bg-slate-950 py-16 text-white sm:py-20">
          <Container>
            <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-signal-300 uppercase">Image quality</p>
            <h2 id="clinical-heading" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[2.25rem]">
              {product.name} clinical images
            </h2>
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {clinical.map((image) => (
                <li key={image.src} className="reveal">
                  <figure className="overflow-hidden rounded-2xl bg-black ring-1 ring-white/10">
                    <div className="relative aspect-[4/3]">
                      <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 300px, 46vw" className="object-cover" />
                    </div>
                    <figcaption className="px-3.5 py-3 text-xs text-slate-300 sm:text-sm">{image.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* Specifications */}
      <section id="specifications" aria-labelledby="specifications-heading" className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionTitle id="specifications-heading" eyebrow="Technical specifications">
              {product.name} specifications
            </SectionTitle>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Highlights published by the manufacturer. Complete specifications and configuration options are available on request.
            </p>
            <ButtonLink
              href={enquiryHref("product-information", product.slug)}
              data-enquiry="product-information"
              data-enquiry-product={product.slug}
              data-track="product_enquiry"
              data-track-cta="spec_sheet"
              data-track-product={product.slug}
              data-track-location="specifications"
              variant="secondary"
              className="mt-6"
            >
              Request full specification sheet
            </ButtonLink>
          </div>
          <div className="reveal">
            {product.specifications.length ? (
              <SpecList specs={product.specifications} />
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-sm text-slate-600">
                Detailed technical specifications for the {product.name} are available on request from our team.
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Downloads */}
      <section id="downloads" aria-labelledby="downloads-heading" className="pb-16 sm:pb-20">
        <Container>
          <div className="flex flex-col gap-6 rounded-4xl bg-slate-50 p-6 ring-1 ring-slate-200 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-600 ring-1 ring-slate-200">
                <FileText aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h2 id="downloads-heading" className="text-lg font-semibold">
                  {product.brochure ? product.brochure.label : `${product.name} brochure`}
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  {product.brochure
                    ? product.brochure.meta ?? "Product brochure (PDF)"
                    : "Request the brochure and detailed product information from our team."}
                </p>
              </div>
            </div>
            {product.brochure ? (
              <a
                href={product.brochure.url}
                download
                data-track="brochure_download"
                data-track-product={product.slug}
                data-track-location="downloads"
                className={buttonClasses({ variant: "dark", size: "md" })}
              >
                <Download aria-hidden="true" className="size-4" /> Download Brochure
              </a>
            ) : (
              <Link
                href={enquiryHref("product-information", product.slug)}
                data-enquiry="product-information"
                data-enquiry-product={product.slug}
                data-track="product_enquiry"
                data-track-cta="brochure_request"
                data-track-product={product.slug}
                data-track-location="downloads"
                className={buttonClasses({ variant: "dark", size: "md" })}
              >
                <Mail aria-hidden="true" className="size-4" /> Request Brochure
              </Link>
            )}
          </div>
        </Container>
      </section>

      {/* Related products */}
      {related.length ? (
        <section aria-labelledby="related-heading" className="border-t border-slate-200 bg-white py-16 sm:py-20">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionTitle id="related-heading" eyebrow="Related products">
                More {subcategoryName.toLowerCase()} systems
              </SectionTitle>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                <Link href={productHref(product.subcategory)} className="inline-flex items-center gap-1.5 text-slate-900 hover:text-brand-700">
                  All {subcategoryName.toLowerCase()} <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <Link href="/companion-animals" className="inline-flex items-center gap-1.5 text-slate-900 hover:text-brand-700">
                  Companion animal solutions <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </div>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {related.map((p) => (
                <li key={p.slug}>
                  <ProductCard product={toProductSummary(p)} location="related" />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <div className="border-t border-slate-200">
        <FaqSection
          faqs={faqs}
          title={`${product.name} FAQs`}
          description={`Common questions about the ${product.name} ${product.productType.toLowerCase()}.`}
          location="product"
        />
      </div>

      <EnquirySection
        title={`Request a quote for the ${product.name}`}
        description={`Tell us about your practice and a veterinary imaging specialist will send pricing, configuration options and ${product.brochure ? "documentation" : "the product brochure"} for the ${product.name}, or arrange a demo.`}
        defaultProduct={product.slug}
        defaultType="quote"
        location="product"
      />

      <MobileStickyCta product={product.slug} label="Request a Quote" enquiryType="quote" />
      <JsonLd data={productJsonLd(product)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(faqs)} />
    </>
  );
}
