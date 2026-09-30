import type { Metadata } from "next";
import { getAllProducts } from "@/lib/products";
import { breadcrumbJsonLd, buildMetadata, productListJsonLd } from "@/lib/seo";
import { EnquirySection } from "@/components/forms/EnquirySection";
import { Hero } from "@/components/marketing/Hero";
import { MobileStickyCta } from "@/components/navigation/MobileStickyCta";
import { ProductDiscovery } from "@/components/products/ProductDiscovery";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PATH = "/companion-animals";

export const metadata: Metadata = buildMetadata({
  title: "Veterinary Ultrasound for Companion Animals",
  description:
    "Veterinary ultrasound systems for companion animals: cart-based and portable models with dedicated presets and cardiology tools. Request a quote or demo.",
  path: PATH,
  keywords: [
    "veterinary ultrasound",
    "veterinary ultrasound machine",
    "veterinary medical equipment",
    "veterinary imaging systems",
    "veterinary diagnostic equipment",
    "veterinary hospital equipment",
    "veterinary clinic equipment",
    "animal medical equipment",
    "companion animal healthcare",
    "portable veterinary ultrasound",
  ],
});

/**
 * Google Ads landing page — intentionally focused: hero → products → enquiry form.
 * In-depth content (features, specifications, clinical images, FAQs) lives on the
 * product and category pages.
 */
export default function CompanionAnimalsPage() {
  const products = getAllProducts();

  return (
    <>
      <Hero />

      <section id="products" aria-labelledby="products-heading" className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionHeading
            id="products-heading"
            eyebrow="Products"
            title="Veterinary ultrasound systems"
            description={`${products.length} cart-based and portable systems. Search or filter, then open any model for full features and specifications.`}
          />
          <div className="mt-8">
            <ProductDiscovery />
          </div>
        </Container>
      </section>

      <EnquirySection location="landing" defaultType="quote" />
      <MobileStickyCta />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Companion Animals", href: PATH },
        ])}
      />
      <JsonLd
        data={productListJsonLd(
          "Veterinary Ultrasound Systems for Companion Animals",
          PATH,
          products,
          "Cart-based and portable veterinary ultrasound systems for companion animal care.",
        )}
      />
    </>
  );
}
