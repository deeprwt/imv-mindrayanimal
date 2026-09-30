/**
 * Analytics event catalogue. Names follow GA4 conventions (snake_case);
 * `generate_lead` is a GA4 recommended event.
 *
 * Every event is pushed to `window.dataLayer` (for GTM triggers) and, when
 * gtag.js is configured directly, sent to GA4 / Google Ads.
 */
export const AnalyticsEvents = {
  heroCtaClick: "hero_cta_click",
  ctaClick: "cta_click",
  productClick: "product_click",
  productEnquiry: "product_enquiry",
  formStart: "enquiry_form_start",
  formSubmit: "generate_lead",
  formError: "enquiry_form_error",
  quoteRequest: "quote_request",
  demoRequest: "demo_request",
  phoneClick: "phone_click",
  emailClick: "email_click",
  brochureDownload: "brochure_download",
  productSearch: "product_search",
  productFilter: "product_filter",
} as const;

export type AnalyticsEventName = (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents];

export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

/** Events that map to Google Ads conversion actions (see analyticsConfig.adsLabels). */
export const conversionEvents: Partial<Record<AnalyticsEventName, "lead" | "quote" | "demo" | "phone" | "brochure">> = {
  generate_lead: "lead",
  quote_request: "quote",
  demo_request: "demo",
  phone_click: "phone",
  brochure_download: "brochure",
};
