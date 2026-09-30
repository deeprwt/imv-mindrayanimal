import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllProducts, getSubcategories, productHref } from "@/lib/products";
import { breadcrumbJsonLd, buildMetadata, productListJsonLd } from "@/lib/seo";
import { EnquirySection } from "@/components/forms/EnquirySection";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { MobileStickyCta } from "@/components/navigation/MobileStickyCta";
import { ProductDiscovery } from "@/components/products/ProductDiscovery";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";

const PATH = "/products";
const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Companion Animals", href: "/companion-animals" },
  { name: "Products", href: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Veterinary Ultrasound Machines & Imaging Equipment",
  description:
    "Browse veterinary ultrasound machines for companion animal practices. Search and filter cart-based and portable systems by clinical focus and request a quote.",
  path: PATH,
  image: { src: "/og/products.jpg", width: 1200, height: 630, alt: "Veterinary ultrasound systems" },
  keywords: ["veterinary ultrasound machine", "veterinary imaging equipment", "veterinary medical devices"],
});

export default function ProductsPage() {
  const products = getAllProducts();
  const subcategories = getSubcategories("medical-imaging");

  return (
    <>
      <section data-hero aria-labelledby="products-page-heading" className="bg-gradient-to-b from-slate-50 to-white pt-6 pb-12 sm:pb-16">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">Products</p>
              <h1 id="products-page-heading" className="mt-4 text-4xl leading-[1.06] font-semibold tracking-tight sm:text-5xl">
                Veterinary ultrasound systems
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                {products.length} cart-based and portable systems for companion animal practice. Search by name or
                feature, filter by system type and clinical focus, and request information on any model.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 lg:justify-end">
              {subcategories.map((sub) => (
                <li key={sub.slug}>
                  <Link href={productHref(sub.slug)} className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-soft ring-1 ring-slate-200 hover:text-brand-700">
                    {sub.name} <ArrowRight aria-hidden="true" className="size-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section aria-label="Product finder" className="pb-16 sm:pb-20">
        <Container>
          <ProductDiscovery syncUrl groupHeading="h2" />
        </Container>
      </section>

      <div className="pb-16 sm:pb-20">
        <CtaBand location="products_index" />
      </div>
      <EnquirySection location="products_index" />
      <MobileStickyCta />

      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={productListJsonLd("Veterinary ultrasound systems", PATH, products)} />
    </>
  );
}
