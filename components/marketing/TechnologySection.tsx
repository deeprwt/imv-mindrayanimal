import Image from "next/image";
import Link from "next/link";
import { technologies } from "@/data/technologies";
import { getAllProducts, getProductsBySlugs, productHref } from "@/lib/products";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Curated clinical images (product slug + caption) shown under the technology cards. */
const CLINICAL_PICKS: { product: string; caption: string }[] = [
  { product: "vetus-9", caption: "Canine Kidney Glazing Flow" },
  { product: "vetus-9", caption: "Canine Spleen Natural Touch Elastography" },
  { product: "vetus-9", caption: "Canine TDI QA" },
  { product: "vetus-e7", caption: "Portal vein of canine" },
  { product: "vetus-7", caption: "Hepatic Flow Feline" },
  { product: "vetus-9", caption: "Feline Pericardial Effusion" },
  { product: "z60-vet", caption: "Turtle Cardiac PW" },
  { product: "vetus-8", caption: "Color M mode of Canine Heart" },
];

function clinicalImages() {
  const products = getAllProducts();
  return CLINICAL_PICKS.flatMap(({ product, caption }) => {
    const p = products.find((x) => x.slug === product);
    const image = p?.gallery.find((g) => g.kind === "clinical" && g.caption?.toLowerCase() === caption.toLowerCase());
    return p && image ? [{ product: p, image }] : [];
  });
}

export function TechnologySection({
  showGallery = true,
  headingLevel = "h2",
}: {
  showGallery?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const images = showGallery ? clinicalImages() : [];

  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_30rem_at_10%_0%,rgb(82_198_230/0.14),transparent_60%),radial-gradient(40rem_30rem_at_100%_100%,rgb(200_16_46/0.12),transparent_60%)]"
      />
      <Container className="relative">
        <SectionHeading
          id="technologies-heading"
          as={headingLevel}
          tone="dark"
          eyebrow="Imaging technology"
          title="Technology that builds diagnostic confidence"
          description="Advanced imaging platforms and clinical tools across the range, from the ZST+ platform to quantitative cardiology and needle guidance."
          className="reveal"
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <li
              key={tech.id}
              className="reveal flex flex-col rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.07] sm:p-7"
            >
              <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{tech.summary}</p>
              <div className="mt-auto pt-6">
                <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-slate-500 uppercase">Available on</p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {getProductsBySlugs(tech.products).map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={productHref(p.slug)}
                        data-track="product_click"
                        data-track-product={p.slug}
                        data-track-location={`technology_${tech.id}`}
                        className="inline-flex rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-100 transition-colors hover:bg-white hover:text-slate-950"
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        {images.length ? (
          <div className="mt-20 lg:mt-28">
            <div className="reveal flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Clinical image gallery</h3>
              <p className="max-w-md text-sm text-slate-400">
                Clinical ultrasound images published by the manufacturer for each system.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {images.map(({ product, image }) => (
                <li key={image.src} className="reveal">
                  <Link
                    href={productHref(product.slug)}
                    data-track="product_click"
                    data-track-product={product.slug}
                    data-track-location="clinical_gallery"
                    className="group block overflow-hidden rounded-2xl bg-black ring-1 ring-white/10 transition-[box-shadow] hover:ring-white/30"
                  >
                    <figure>
                      <div className="scan-sweep relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 1024px) 300px, 46vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                        />
                      </div>
                      <figcaption className="px-3.5 py-3 sm:px-4">
                        <span className="block text-[0.6875rem] font-semibold tracking-[0.12em] text-signal-300 uppercase">
                          {product.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-slate-300 sm:text-sm">{image.caption}</span>
                      </figcaption>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
