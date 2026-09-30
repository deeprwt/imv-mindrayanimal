import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/data/navigation";
import { enquiryHref } from "@/lib/enquiry-events";
import { getAllProducts, getProductBySlug, getSubcategories, productHref } from "@/lib/products";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { MobileMenu, type MobileMenuGroup } from "./MobileMenu";

function productGroups(): MobileMenuGroup[] {
  const all = getAllProducts();
  return getSubcategories("medical-imaging").map((sub) => ({
    label: sub.name,
    href: productHref(sub.slug),
    items: all
      .filter((p) => p.subcategory === sub.slug)
      .map((p) => ({ label: p.name, href: productHref(p.slug), isNew: p.isNew })),
  }));
}

function ProductsMenu({ groups }: { groups: MobileMenuGroup[] }) {
  const spotlight = getProductBySlug("vetus-9");
  return (
    <div className="group/menu relative">
      <Link
        href="/products"
        className="inline-flex h-10 items-center gap-1 rounded-full px-3 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
      >
        Products
        <ChevronDown
          aria-hidden="true"
          className="size-3.5 transition-transform duration-200 group-focus-within/menu:rotate-180 group-hover/menu:rotate-180"
        />
      </Link>
      <div className="invisible absolute top-full left-1/2 z-50 w-[min(52rem,calc(100vw-4rem))] -translate-x-1/2 pt-3 opacity-0 transition-[opacity,visibility,translate] duration-200 group-focus-within/menu:visible group-focus-within/menu:opacity-100 group-hover/menu:visible group-hover/menu:opacity-100">
        <div className="grid grid-cols-[1fr_1fr_15rem] gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lift">
          {groups.map((group) => (
            <div key={group.href}>
              <Link
                href={group.href}
                className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase hover:text-brand-600"
              >
                {group.label}
              </Link>
              <ul className="mt-3 space-y-0.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50 hover:text-brand-700"
                    >
                      {item.label}
                      {item.isNew ? <Badge tone="brand">New</Badge> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {spotlight ? (
            <Link
              href={productHref(spotlight.slug)}
              className="group/spot flex flex-col overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200 transition-shadow hover:shadow-soft"
            >
              <div className="relative aspect-square bg-white">
                <Image
                  src={spotlight.image.src}
                  alt=""
                  fill
                  sizes="240px"
                  className="object-contain p-4 transition-transform duration-300 group-hover/spot:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <Badge tone="new">New</Badge>
                <p className="mt-2 text-sm font-semibold text-slate-950">{spotlight.name}</p>
                <p className="mt-1 line-clamp-2 text-xs text-slate-600">{spotlight.productType}</p>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const groups = productGroups();
  return (
    <header className="site-header sticky top-0 z-50 md:backdrop-blur-md md:backdrop-saturate-150">
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Container className="flex h-16 items-center gap-4 lg:h-[4.5rem]">
        <Logo />

        <nav aria-label="Main" className="ml-auto hidden items-center gap-0.5 lg:flex">
          {mainNav.map((item) =>
            item.label === "Products" ? (
              <ProductsMenu key={item.href} groups={groups} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex h-10 items-center rounded-full px-3 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            data-track-location="header"
            className="hidden size-10 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 xl:inline-flex"
            aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
          >
            <Phone aria-hidden="true" className="size-4" />
          </a>
          <ButtonLink
            href={enquiryHref("quote")}
            data-enquiry="quote"
            data-track="cta_click"
            data-track-cta="quote"
            data-track-location="header"
            size="sm"
            className="px-3.5 sm:h-10 sm:px-5"
          >
            <span className="sm:hidden">Get a Quote</span>
            <span className="hidden sm:inline">Request a Quote</span>
          </ButtonLink>
          <MobileMenu nav={mainNav} groups={groups} />
        </div>
      </Container>
    </header>
  );
}
