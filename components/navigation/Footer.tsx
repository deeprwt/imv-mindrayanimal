import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { legalNav } from "@/data/navigation";
import { enquiryHref } from "@/lib/enquiry-events";
import { getAllProducts, getSubcategories, productHref } from "@/lib/products";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  const products = getAllProducts();
  const subcategories = getSubcategories("medical-imaging");
  const { contact } = siteConfig;

  const columns = [
    {
      title: "Solutions",
      links: [
        { label: "Companion Animals", href: "/companion-animals" },
        { label: "Medical Imaging", href: "/products/medical-imaging" },
        ...subcategories.map((s) => ({ label: s.name, href: productHref(s.slug) })),
        { label: "Imaging Technology", href: "/products/medical-imaging#technologies" },
      ],
    },
    {
      title: "Products",
      links: [
        ...products.slice(0, 7).map((p) => ({ label: p.name, href: productHref(p.slug) })),
        { label: "All products", href: "/products" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Resources", href: "/resources" },
        { label: "Contact", href: "/contact" },
        { label: "Request a Quote", href: enquiryHref("quote") },
        { label: "Book a Demo", href: enquiryHref("demo") },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 pb-24 text-slate-300 md:pb-0" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr] lg:py-20">
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-6 text-sm leading-relaxed text-slate-400">
            Veterinary ultrasound and medical imaging systems that help veterinary professionals deliver accurate,
            safe and reliable care for companion animals.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <a href={`tel:${contact.phoneHref}`} data-track-location="footer" className="inline-flex items-center gap-3 hover:text-white">
                <Phone aria-hidden="true" className="size-4 text-slate-500" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} data-track-location="footer" className="inline-flex items-center gap-3 hover:text-white">
                <Mail aria-hidden="true" className="size-4 text-slate-500" />
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3 text-slate-400">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-slate-500" />
              <address className="not-italic">
                {contact.address.street}, {contact.address.locality} {contact.address.postalCode},{" "}
                {contact.address.countryName}
              </address>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-sm font-semibold text-white">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-slate-400 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName} All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              {siteConfig.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} rel="noopener" target="_blank" className="hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
