import type { Metadata } from "next";
import Image from "next/image";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { enquiryHref } from "@/lib/enquiry-events";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* Intro copy: IMV India (client review, Nov 2026). R&D and milestones: mindrayanimal.com/en/aboutus (retrieved 2026-09-28). */
const highlights = [
  "Veterinary Ultrasound Solutions Only",
  "Trusted Mindray Animal Partner in India",
  "Nationwide Sales & Support",
];

const milestones = [
  { year: "1991", title: "PM-9000 Vet", text: "Mindray's first veterinary monitor." },
  { year: "2005", title: "DP-3300 Vet", text: "Mindray's first veterinary black-and-white portable ultrasound system." },
  { year: "2014", title: "M9 Vet", text: "Veterinary premium colour Doppler ultrasound system." },
  { year: "2017", title: "ZS3", text: "Veterinary cart-based colour Doppler ultrasound system for scientific research." },
];

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "IMV India Pvt. Ltd. is the exclusive distributor of Mindray Animal Medical veterinary ultrasound systems in India, with nationwide sales, training and support.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white pt-6 pb-16 sm:pb-20">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">About us</p>
              <h1 className="mt-4 text-4xl leading-[1.06] font-semibold tracking-tight sm:text-5xl">
                Advanced healthcare for all animals
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                IMV India Pvt. Ltd. is the exclusive distributor of Mindray Animal Medical (China) veterinary ultrasound
                systems in India. We specialize exclusively in veterinary ultrasound imaging solutions, catering to the
                needs of animal healthcare professionals across the country.
              </p>
            </div>
            <div className="relative aspect-[8/5] overflow-hidden rounded-4xl bg-slate-100">
              <Image
                src="/images/site/veterinarian-dog-ultrasound-examination.webp"
                alt="Veterinarian with a Border Collie beside the Vetus 80 veterinary ultrasound system"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 560px, 92vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="About IMV India" className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:grid-cols-2 lg:gap-16">
            <p>
              Our portfolio includes a wide range of advanced ultrasound scanners designed specifically for veterinary
              applications, serving companion animals, equine practices, livestock, and mixed-animal clinics. From
              portable handheld units to premium cart-based systems, we offer solutions that deliver exceptional image
              quality, reliability, and ease of use in diverse clinical environments.
            </p>
            <p>
              At IMV India, we provide end-to-end support for veterinary ultrasound requirements, including product
              consultation, demonstrations, installation, application training, and after-sales service. Our mission
              is to empower veterinarians with innovative imaging technology that enables accurate diagnosis and
              improves animal care outcomes.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {highlights.map((h) => (
              <li key={h} className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800 ring-1 ring-brand-100">
                {h}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="rd-heading" className="bg-slate-950 py-16 text-white sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            id="rd-heading"
            tone="dark"
            eyebrow="R&D"
            title="Innovation shaped by clinical reality"
            description="We continuously invest in R&D so our products and solutions address the real challenges animals and veterinarians face in different clinical scenarios. With customer insights and technological innovation, we create a more efficient workflow and customer experience for veterinarians in daily practice."
          />
          <ol className="relative space-y-8 border-l border-white/15 pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="reveal relative">
                <span aria-hidden="true" className="absolute top-1.5 -left-[2.3rem] size-3 rounded-full bg-brand-500 ring-4 ring-slate-950" />
                <p className="text-sm font-semibold text-signal-300">{m.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{m.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{m.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Find the right ultrasound system for your practice
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/companion-animals" variant="secondary" size="lg">
              Companion animal solutions
            </ButtonLink>
            <ButtonLink href={enquiryHref("general")} data-track="cta_click" data-track-cta="contact" data-track-location="about" size="lg" arrow>
              Contact us
            </ButtonLink>
          </div>
        </Container>
      </section>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
    </>
  );
}
