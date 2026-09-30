import { analyticsConfig, usesGtag } from "./config";
import { conversionEvents, type AnalyticsEventName, type AnalyticsParams } from "./events";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

function clean(params: AnalyticsParams): Record<string, string | number | boolean> {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== ""),
  ) as Record<string, string | number | boolean>;
}

/**
 * Tracks an event. Safe to call anywhere on the client; no-ops on the server.
 * - Always pushes to dataLayer so GTM can map events to GA4 / Ads tags.
 * - Sends to gtag.js directly when GA4 / Ads IDs are configured without GTM.
 */
export function track(event: AnalyticsEventName, params: AnalyticsParams = {}): void {
  if (typeof window === "undefined") return;
  const payload = clean({ ...params, page_path: window.location.pathname });

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });

  if (!usesGtag || typeof window.gtag !== "function") return;

  if (analyticsConfig.ga4Id) window.gtag("event", event, payload);

  const conversion = conversionEvents[event];
  const label = conversion ? analyticsConfig.adsLabels[conversion] : "";
  if (analyticsConfig.googleAdsId && label) {
    window.gtag("event", "conversion", {
      send_to: `${analyticsConfig.googleAdsId}/${label}`,
      ...(typeof payload.transaction_id === "string" ? { transaction_id: payload.transaction_id } : {}),
    });
  }
}

/** Provides first-party data for Google Ads enhanced conversions (only when explicitly enabled). */
export function setEnhancedConversionData(data: { email?: string; phone?: string }): void {
  if (typeof window === "undefined" || !analyticsConfig.enhancedConversions) return;
  const userData = clean({ email: data.email, phone_number: data.phone });
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: "enhanced_conversion_data", user_data: userData });
  if (typeof window.gtag === "function") window.gtag("set", "user_data", userData);
}

/** Call from a consent banner / CMP when the visitor makes a choice. */
export function updateConsent(granted: boolean): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const value = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}
