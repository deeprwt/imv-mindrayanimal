"use client";

import Link from "next/link";
import { useRef } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { NavItem } from "@/data/navigation";
import { enquiryHref } from "@/lib/enquiry-events";
import { buttonClasses } from "@/components/ui/Button";

export interface MobileMenuGroup {
  label: string;
  href: string;
  items: { label: string; href: string; isNew: boolean }[];
}

/** Native <dialog> gives focus trapping, Esc-to-close and inert background for free. */
export function MobileMenu({ nav, groups }: { nav: NavItem[]; groups: MobileMenuGroup[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="inline-flex size-10 items-center justify-center rounded-full text-slate-900 transition-colors hover:bg-slate-100 lg:hidden"
        aria-label="Open menu"
        aria-haspopup="dialog"
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Site menu"
        onClick={(event) => {
          // Close on backdrop click or on any link click inside the menu.
          const target = event.target as HTMLElement;
          if (target === dialogRef.current || target.closest("a")) close();
        }}
        className="m-0 ml-auto h-dvh max-h-dvh w-full max-w-md overflow-y-auto bg-white p-0 text-slate-900 backdrop:bg-slate-950/50 open:flex open:flex-col"
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 px-4">
          <span className="text-sm font-semibold tracking-wide text-slate-500 uppercase">Menu</span>
          <button
            type="button"
            onClick={close}
            className="inline-flex size-10 items-center justify-center rounded-full hover:bg-slate-100"
            aria-label="Close menu"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 px-4 py-4">
          <ul className="divide-y divide-slate-100">
            {nav.map((item) =>
              item.label === "Products" ? (
                <li key={item.href}>
                  <details className="group py-1">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-base font-semibold">
                      Products
                      <ChevronDown aria-hidden="true" className="size-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="space-y-5 pb-4">
                      <Link href="/products" className="block text-sm font-semibold text-brand-700">
                        View all products
                      </Link>
                      {groups.map((group) => (
                        <div key={group.href}>
                          <Link
                            href={group.href}
                            className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase"
                          >
                            {group.label}
                          </Link>
                          <ul className="mt-2 grid grid-cols-2 gap-1">
                            {group.items.map((p) => (
                              <li key={p.href}>
                                <Link
                                  href={p.href}
                                  className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm text-slate-800 hover:bg-slate-50"
                                >
                                  {p.label}
                                  {p.isNew ? <span className="size-1.5 rounded-full bg-brand-600" aria-label="New" /> : null}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className="block py-4 text-base font-semibold">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="shrink-0 space-y-3 border-t border-slate-200 bg-slate-50 px-4 py-5">
          <Link
            href={enquiryHref("quote")}
            data-enquiry="quote"
            data-track="cta_click"
            data-track-cta="quote"
            data-track-location="mobile_menu"
            className={buttonClasses({ size: "lg", className: "w-full" })}
          >
            Request a Quote
          </Link>
          <Link
            href={enquiryHref("demo")}
            data-enquiry="demo"
            data-track="cta_click"
            data-track-cta="demo"
            data-track-location="mobile_menu"
            className={buttonClasses({ variant: "secondary", size: "lg", className: "w-full" })}
          >
            Book a Demo
          </Link>
          <div className="flex flex-col gap-2 pt-2 text-sm">
            <a href={`tel:${siteConfig.contact.phoneHref}`} data-track-location="mobile_menu" className="inline-flex items-center gap-2 text-slate-700">
              <Phone aria-hidden="true" className="size-4" /> {siteConfig.contact.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} data-track-location="mobile_menu" className="inline-flex items-center gap-2 text-slate-700">
              <Mail aria-hidden="true" className="size-4" /> {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
