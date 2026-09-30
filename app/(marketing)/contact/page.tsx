import type { Metadata } from "next";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { EnquirySection } from "@/components/forms/EnquirySection";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Request a Quote or Demo",
  description:
    "Contact our veterinary imaging team to request a quote, book a demo or get product information on veterinary ultrasound systems for your hospital or clinic.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <div className="bg-white pt-6">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>
      {/* The form preselects enquiry type and product from ?type=&product= (e.g. from product CTAs). */}
      <EnquirySection
        headingLevel="h1"
        title="Contact our veterinary imaging team"
        description="Request a quote, book a demonstration or ask about any system. Tell us about your practice and a specialist will respond with pricing, configurations and availability."
        location="contact"
      />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
    </>
  );
}
