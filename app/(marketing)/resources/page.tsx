import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, GraduationCap, HelpCircle, Images, ScanLine } from "lucide-react";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { enquiryHref } from "@/lib/enquiry-events";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
];

const resources = [
  {
    icon: FileText,
    title: "Brochures & specification sheets",
    text: "Request product brochures and complete specification sheets for any system.",
    href: enquiryHref("product-information"),
    cta: "Request documents",
    enquiry: "product-information",
  },
  {
    icon: BookOpen,
    title: "Cart-based or portable?",
    text: "Compare large-display cart-based systems with laptop, hand-carried and touch-screen models.",
    href: "/products/medical-imaging#products",
    cta: "Compare system types",
  },
  {
    icon: ScanLine,
    title: "Imaging technology explained",
    text: "ZST+, UWN+ contrast imaging, elastography, cardiac quantification and needle guidance.",
    href: "/products/medical-imaging#technologies",
    cta: "Explore technology",
  },
  {
    icon: Images,
    title: "Clinical image gallery",
    text: "Canine, feline and exotic-species clinical images from across the range.",
    href: "/products/medical-imaging#technologies",
    cta: "View images",
  },
  {
    icon: HelpCircle,
    title: "Frequently asked questions",
    text: "Answers about choosing, comparing and requesting veterinary ultrasound systems.",
    href: "/products/medical-imaging#faq",
    cta: "Read FAQs",
  },
];

const education = [
  { label: "Veterinary education — Europe", href: "https://www.mindrayanimal.com/euveteducation/" },
  { label: "Veterinary education — North America", href: "https://mindraynavetedu.thinkific.com/" },
];

export const metadata: Metadata = buildMetadata({
  title: "Veterinary Ultrasound Resources",
  description:
    "Resources for veterinary teams: request brochures and specification sheets, compare cart-based and portable ultrasound, and explore imaging technology.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white pt-6 pb-16 sm:pb-20">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">Resources</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.06] font-semibold tracking-tight sm:text-5xl">
            Veterinary ultrasound resources
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Everything you need to evaluate veterinary ultrasound systems for your hospital or clinic.
          </p>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <li key={r.title}>
                <Link
                  href={r.href}
                  {...(r.enquiry ? { "data-enquiry": r.enquiry, "data-track": "cta_click", "data-track-cta": "documents", "data-track-location": "resources" } : {})}
                  className="group flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-slate-200 transition-[box-shadow,translate] duration-300 hover:shadow-lift motion-safe:hover:-translate-y-1"
                >
                  <r.icon aria-hidden="true" className="size-6 text-brand-600" />
                  <h2 className="mt-5 text-lg font-semibold text-slate-950">{r.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.text}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-slate-950 group-hover:text-brand-700">
                    {r.cta} <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
            <li className="flex flex-col rounded-3xl bg-slate-950 p-7 text-white">
              <GraduationCap aria-hidden="true" className="size-6 text-signal-300" />
              <h2 className="mt-5 text-lg font-semibold text-white">Veterinary education</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Training portals from Mindray Animal Medical.</p>
              <ul className="mt-auto space-y-2 pt-6 text-sm">
                {education.map((e) => (
                  <li key={e.href}>
                    <a href={e.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-signal-300">
                      {e.label} <ArrowRight aria-hidden="true" className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </Container>
      </section>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
    </>
  );
}
