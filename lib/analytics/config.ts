/**
 * Analytics configuration from public environment variables.
 * Tracking IDs are public by nature (they ship in page source) but are never
 * hard-coded — set them per environment in `.env.local` / hosting settings.
 */
export const analyticsConfig = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
  /**
   * Google Ads conversion labels ("AW-XXXX/label" is built from googleAdsId + label).
   * Leave empty when conversions are configured inside GTM instead.
   */
  adsLabels: {
    lead: process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL ?? "",
    quote: process.env.NEXT_PUBLIC_GOOGLE_ADS_QUOTE_LABEL ?? "",
    demo: process.env.NEXT_PUBLIC_GOOGLE_ADS_DEMO_LABEL ?? "",
    phone: process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL ?? "",
    brochure: process.env.NEXT_PUBLIC_GOOGLE_ADS_BROCHURE_LABEL ?? "",
  },
  /** Send hashed-by-Google user data (email/phone) with lead conversions. Requires consent + policy review. */
  enhancedConversions: process.env.NEXT_PUBLIC_ADS_ENHANCED_CONVERSIONS === "true",
  /** Google Consent Mode v2 default: "granted" or "denied" (use "denied" with a CMP in consent regions). */
  consentDefault: process.env.NEXT_PUBLIC_CONSENT_DEFAULT === "denied" ? "denied" : "granted",
} as const;

/**
 * GTM takes precedence: when NEXT_PUBLIC_GTM_ID is set, GA4 and Google Ads tags
 * should be configured inside GTM (triggered by the dataLayer events) and
 * gtag.js is not loaded, which prevents double-counted conversions.
 */
export const usesGtm = Boolean(analyticsConfig.gtmId);
export const usesGtag = !usesGtm && Boolean(analyticsConfig.ga4Id || analyticsConfig.googleAdsId);
