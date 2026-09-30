"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/analytics/attribution";
import { AnalyticsEvents, type AnalyticsEventName, type AnalyticsParams } from "@/lib/analytics/events";
import { track } from "@/lib/analytics/track";
import {
  ENQUIRY_PREFILL_EVENT,
  ENQUIRY_SECTION_ID,
  type EnquiryPrefillDetail,
} from "@/lib/enquiry-events";
import { isEnquiryType } from "@/lib/enquiry-types";

const toSnake = (key: string) => key.replace(/^[A-Z]/, (c) => c.toLowerCase()).replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);

/**
 * One delegated click listener for the whole site:
 *  - `data-track="<event>"` + `data-track-*` params  → analytics event
 *  - `tel:` / `mailto:` links                         → phone_click / email_click
 *  - `data-enquiry="<type>"` (+ `data-enquiry-product`) → scroll to the on-page
 *    enquiry form and preselect values; falls back to the link's /contact URL.
 * Also captures ad click IDs / UTM parameters for lead attribution.
 */
export function ClickTracker() {
  useEffect(() => {
    captureAttribution();

    function onClick(event: MouseEvent) {
      const origin = event.target instanceof Element ? event.target : null;
      const el = origin?.closest<HTMLElement>("[data-track], [data-enquiry], a[href^='tel:'], a[href^='mailto:']");
      if (!el) return;

      const params: AnalyticsParams = {};
      for (const [key, value] of Object.entries(el.dataset)) {
        if (key.startsWith("track") && key !== "track") params[toSnake(key.slice(5))] = value;
      }
      const href = el.getAttribute("href") ?? "";
      const label = el.textContent?.replace(/\s+/g, " ").trim().slice(0, 80);

      if (el.dataset.track) track(el.dataset.track as AnalyticsEventName, { ...params, link_text: label });
      if (href.startsWith("tel:")) track(AnalyticsEvents.phoneClick, { ...params, link_text: label });
      if (href.startsWith("mailto:")) track(AnalyticsEvents.emailClick, { ...params, link_text: label });

      if (el.dataset.enquiry === undefined) return;
      const section = document.getElementById(ENQUIRY_SECTION_ID);
      const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
      if (!section || modified) return;

      // Capture phase + preventDefault: next/link skips its client navigation for
      // default-prevented clicks, so the visitor stays on the page and scrolls to the form.
      event.preventDefault();
      document.querySelector<HTMLDialogElement>("dialog[open]")?.close();
      const detail: EnquiryPrefillDetail = {
        enquiryType: isEnquiryType(el.dataset.enquiry) ? el.dataset.enquiry : undefined,
        product: el.dataset.enquiryProduct,
      };
      window.dispatchEvent(new CustomEvent<EnquiryPrefillDetail>(ENQUIRY_PREFILL_EVENT, { detail }));
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      section.querySelector<HTMLElement>("[data-enquiry-heading]")?.focus({ preventScroll: true });
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
