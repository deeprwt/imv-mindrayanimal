import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";
import type { Category, Product, ProductFaq } from "@/types/product";
import type { ProductBreadcrumb } from "@/lib/products";
import { getCategoryName, productHref } from "@/lib/products";

interface PageMetadataInput {
  /** Title without brand; the root layout template appends " | Brand". */
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: { src: string; width: number; height: number; alt: string };
  noIndex?: boolean;
  /** Use the title as-is (skip the brand template), e.g. for the home/landing page. */
  absoluteTitle?: boolean;
}

const DEFAULT_OG_IMAGE = {
  src: "/og/companion-animals.jpg",
  width: 1200,
  height: 630,
  alt: "Veterinary ultrasound systems for companion animal care",
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const ogTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: ogTitle,
      description,
      images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image.src],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  };
}

/* ------------------------------------------------------------------ */
/* JSON-LD builders                                                    */
/* ------------------------------------------------------------------ */

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

export function organizationJsonLd() {
  const { contact } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    email: contact.email,
    telephone: contact.phoneHref,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    contactPoint: [
      { "@type": "ContactPoint", contactType: "sales", email: contact.email, telephone: contact.phoneHref },
      { "@type": "ContactPoint", contactType: "customer service", email: contact.serviceEmail },
    ],
    ...(siteConfig.social.length ? { sameAs: siteConfig.social.map((s) => s.href) } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(items: ProductBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function productJsonLd(product: Product) {
  const url = absoluteUrl(productHref(product.slug));
  const images = [product.image, ...product.gallery.filter((g) => g.kind !== "clinical")]
    .slice(0, 5)
    .map((img) => absoluteUrl(img.src));
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    model: product.name,
    description: product.shortDescription,
    url,
    image: images,
    category: `Veterinary Medical Equipment > ${getCategoryName(product.category)} > ${getCategoryName(product.subcategory)}`,
    brand: { "@type": "Brand", name: siteConfig.name },
    manufacturer: { "@id": ORG_ID },
    ...(product.specifications.length
      ? {
          additionalProperty: product.specifications.slice(0, 20).map((s) => ({
            "@type": "PropertyValue",
            name: s.label,
            value: s.value,
          })),
        }
      : {}),
  };
}

export function faqJsonLd(faqs: ProductFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function productListJsonLd(name: string, path: string, list: Product[], description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url: absoluteUrl(path),
    ...(description ? { description } : {}),
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: list.length,
      itemListElement: list.map((p, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(productHref(p.slug)),
        name: p.name,
      })),
    },
  };
}

export function categoryJsonLd(category: Category, list: Product[]) {
  return productListJsonLd(category.title, `/products/${category.slug}`, list, category.seo.description);
}
