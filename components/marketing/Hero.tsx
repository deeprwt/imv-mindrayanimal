import Image from "next/image";
import Link from "next/link";
import { Check, PawPrint, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { enquiryHref } from "@/lib/enquiry-events";
import { getAllProducts, getProductBySlug, productHref } from "@/lib/products";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const heroImage = {
  src: "/images/site/veterinarian-dog-ultrasound-examination.webp",
  width: 1305,
  height: 834,
  alt: "Veterinarian with a Border Collie beside the Vetus 80 veterinary ultrasound system",
};

/**
 * Landing hero. Deliberately compact on phones (headline, CTAs and image fit
 * roughly one screen) and rendered without entrance animations so the H1 and
 * hero image paint immediately (LCP).
 */
export function Hero() {
  const all = getAllProducts();
  const spotlight = getProductBySlug("vetus-9");
  const points = [`${all.length} veterinary ultrasound systems`, "Cart-based & portable", "Demo on request"];

  return (
    <section data-hero aria-labelledby="hero-heading" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <Container className="relative grid items-center gap-8 pt-6 pb-10 sm:pt-10 sm:pb-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pt-14 lg:pb-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
            <PawPrint aria-hidden="true" className="size-3.5 text-brand-600" />
            Companion Animal · Medical Imaging
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-[2.125rem] leading-[1.08] font-semibold tracking-tight sm:mt-6 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.04]"
          >
            Advanced Veterinary Ultrasound for <span className="text-brand-600">Companion Animal</span> Care
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Cart-based and portable ultrasound systems with dedicated veterinary presets and advanced imaging — for
            accurate, efficient diagnosis in veterinary hospitals and clinics.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex">
            <ButtonLink
              href={enquiryHref("quote")}
              data-enquiry="quote"
              data-track="hero_cta_click"
              data-track-cta="quote"
              size="lg"
              className="px-4"
            >
              Request Info
            </ButtonLink>
            <ButtonLink
              href="#products"
              data-track="hero_cta_click"
              data-track-cta="view_products"
              variant="secondary"
              size="lg"
              className="px-4"
            >
              View Products
            </ButtonLink>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
            {points.map((point) => (
              <li key={point} className="inline-flex items-center gap-1.5">
                <Check aria-hidden="true" className="size-4 text-brand-600" />
                {point}
              </li>
            ))}
            <li>
              <a
                href={`tel:${siteConfig.contact.phoneHref}`}
                data-track-location="hero"
                className="inline-flex items-center gap-1.5 font-medium text-slate-900 hover:text-brand-700"
              >
                <Phone aria-hidden="true" className="size-4 text-brand-600" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-slate-100 ring-1 ring-slate-900/5 sm:rounded-4xl lg:aspect-[4/3.7]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1280px) 580px, (min-width: 1024px) 46vw, 100vw"
              className="object-cover object-[42%_center]"
            />
          </div>

          {spotlight ? (
            <Link
              href={productHref(spotlight.slug)}
              data-track="product_click"
              data-track-product={spotlight.slug}
              data-track-location="hero_spotlight"
              className="group absolute -bottom-5 left-5 hidden max-w-[17rem] items-center gap-3 rounded-2xl bg-white p-2.5 pr-4 shadow-lift ring-1 ring-slate-200 sm:flex"
            >
              <span className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-white">
                <Image src={spotlight.image.src} alt="" fill sizes="56px" className="object-contain p-1" />
              </span>
              <span>
                <span className="text-[0.625rem] font-bold tracking-[0.16em] text-brand-600 uppercase">New</span>
                <span className="block text-sm font-semibold text-slate-950 group-hover:text-brand-700">{spotlight.name}</span>
                <span className="block text-xs leading-snug text-slate-500">{spotlight.productType}</span>
              </span>
            </Link>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
