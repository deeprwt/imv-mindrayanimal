import type { EnquiryAttribution } from "@/types/enquiry";

const STORAGE_KEY = "enquiry_attribution";
const PARAMS = ["gclid", "gbraid", "wbraid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
/** Google Ads click IDs are valid for 90 days. */
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;

interface StoredAttribution {
  data: EnquiryAttribution;
  savedAt: number;
}

function read(): StoredAttribution | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredAttribution;
    return Date.now() - parsed.savedAt > MAX_AGE_MS ? null : parsed;
  } catch {
    return null;
  }
}

/**
 * Captures ad click IDs / UTM parameters from the landing URL so they can be
 * attached to enquiries (CRM attribution and Google Ads offline conversion import).
 * A new paid click overwrites the previous attribution; plain navigation does not.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  const fromUrl: EnquiryAttribution = {};
  for (const key of PARAMS) {
    const value = url.searchParams.get(key);
    if (value) fromUrl[key] = value.slice(0, 500);
  }
  if (!Object.keys(fromUrl).length && read()) return;
  const data: EnquiryAttribution = {
    ...fromUrl,
    landingPage: `${url.pathname}${url.search}`.slice(0, 500),
    referrer: document.referrer ? document.referrer.slice(0, 500) : undefined,
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, savedAt: Date.now() }));
  } catch {
    /* storage unavailable (private mode) — attribution is best-effort */
  }
}

export function getAttribution(): EnquiryAttribution {
  if (typeof window === "undefined") return {};
  return read()?.data ?? {};
}
