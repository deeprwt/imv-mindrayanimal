import type { EnquiryType } from "@/types/enquiry";

/** DOM id of the on-page enquiry section that CTA links scroll to. */
export const ENQUIRY_SECTION_ID = "enquiry";

/** Window event dispatched when a CTA asks the on-page form to preselect values. */
export const ENQUIRY_PREFILL_EVENT = "enquiry:prefill";

export interface EnquiryPrefillDetail {
  enquiryType?: EnquiryType;
  product?: string;
}

/** Builds a no-JS-friendly CTA URL; the click tracker upgrades it to an in-page scroll when a form exists. */
export function enquiryHref(type?: EnquiryType, product?: string): string {
  const params = new URLSearchParams();
  if (type) params.set("type", type);
  if (product) params.set("product", product);
  const query = params.toString();
  return `/contact${query ? `?${query}` : ""}#${ENQUIRY_SECTION_ID}`;
}
