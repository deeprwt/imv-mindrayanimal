"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ENQUIRY_SECTION_ID, enquiryHref } from "@/lib/enquiry-events";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { EnquiryType } from "@/types/enquiry";

/**
 * Mobile-only bottom CTA bar. Hidden while the hero (which has its own CTAs)
 * or the enquiry form is on screen, so it never duplicates or covers them.
 * The footer reserves bottom padding on mobile so no content sits beneath it.
 */
export function MobileStickyCta({
  product,
  label = "Request Information",
  enquiryType = "product-information",
}: {
  product?: string;
  label?: string;
  enquiryType?: EnquiryType;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    const form = document.getElementById(ENQUIRY_SECTION_ID);
    const state = { hero: Boolean(hero), form: false };
    const update = () => setVisible(!state.hero && !state.form);

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) state.hero = entry.isIntersecting;
        if (entry.target === form) state.form = entry.isIntersecting;
      }
      update();
    });
    if (hero) observer.observe(hero);
    if (form) observer.observe(form);
    update();
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_30px_-18px_rgb(15_23_42/0.35)] transition-[translate,opacity] duration-300 will-change-transform md:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3">
        <a
          href={enquiryHref(enquiryType, product)}
          data-enquiry={enquiryType}
          data-enquiry-product={product}
          data-track="cta_click"
          data-track-cta={enquiryType}
          data-track-location="mobile_sticky"
          data-track-product={product}
          tabIndex={visible ? 0 : -1}
          className={buttonClasses({ size: "lg", className: "flex-1" })}
        >
          {label}
        </a>
        <a
          href={`tel:${siteConfig.contact.phoneHref}`}
          data-track-location="mobile_sticky"
          tabIndex={visible ? 0 : -1}
          aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
          className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 transition-colors hover:bg-slate-50"
        >
          <Phone aria-hidden="true" className="size-5" />
        </a>
      </div>
    </div>
  );
}
