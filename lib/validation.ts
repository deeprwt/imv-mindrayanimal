/**
 * Enquiry validation shared by the client form and the API route.
 * Pure TypeScript with no runtime dependencies, so it is safe to import on
 * both sides. The server always re-validates; client checks are for UX only.
 */
import { countries } from "@/data/countries";
import { isEnquiryType } from "@/lib/enquiry-types";
import type {
  EnquiryAttribution,
  EnquiryFieldErrors,
  EnquiryFields,
  EnquiryType,
} from "@/types/enquiry";

export { ENQUIRY_TYPES, enquiryTypeLabel, isEnquiryType } from "@/lib/enquiry-types";

/** Product selector value used when the visitor has not chosen a model yet. */
export const PRODUCT_NOT_SURE = "not-sure";

export const FIELD_LIMITS = {
  fullName: 100,
  organization: 150,
  email: 254,
  phone: 30,
  country: 80,
  state: 80,
  city: 80,
  product: 80,
  message: 3000,
} as const;

/** Strips control characters and angle brackets and collapses whitespace. */
export function sanitizeText(value: unknown, maxLength: number, { multiline = false } = {}): string {
  if (typeof value !== "string") return "";
  let text = value.normalize("NFKC");
  // Remove control characters (keep newlines/tabs in multiline fields) and HTML brackets.
  text = multiline
    ? text.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    : text.replace(/[\u0000-\u001F\u007F]/g, " ");
  text = text.replace(/[<>]/g, "");
  text = multiline
    ? text.replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n")
    : text.replace(/\s+/g, " ");
  return text.trim().slice(0, maxLength);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9 ()\-.]{7,30}$/;

export function validateEnquiryFields(
  input: Partial<Record<keyof EnquiryFields, unknown>>,
  productSlugs: readonly string[],
): { data: EnquiryFields; errors: EnquiryFieldErrors } {
  const data: EnquiryFields = {
    fullName: sanitizeText(input.fullName, FIELD_LIMITS.fullName),
    organization: sanitizeText(input.organization, FIELD_LIMITS.organization),
    email: sanitizeText(input.email, FIELD_LIMITS.email).toLowerCase(),
    phone: sanitizeText(input.phone, FIELD_LIMITS.phone),
    country: sanitizeText(input.country, FIELD_LIMITS.country),
    state: sanitizeText(input.state, FIELD_LIMITS.state),
    city: sanitizeText(input.city, FIELD_LIMITS.city),
    product: sanitizeText(input.product, FIELD_LIMITS.product),
    enquiryType: (isEnquiryType(input.enquiryType) ? input.enquiryType : "") as EnquiryType,
    message: sanitizeText(input.message, FIELD_LIMITS.message, { multiline: true }),
    consent: input.consent === true || input.consent === "true" || input.consent === "on",
  };

  const errors: EnquiryFieldErrors = {};
  if (data.fullName.length < 2) errors.fullName = "Please enter your full name.";
  if (data.organization.length < 2) errors.organization = "Please enter your hospital, clinic or company.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  const digits = data.phone.replace(/\D/g, "");
  if (!PHONE_RE.test(data.phone) || digits.length < 7 || digits.length > 15) {
    errors.phone = "Please enter a valid phone number, including the country code.";
  }
  if (!(countries as readonly string[]).includes(data.country)) errors.country = "Please select your country.";
  if (data.state.length < 2) errors.state = "Please enter your state or region.";
  if (data.city.length < 2) errors.city = "Please enter your city.";
  if (data.product !== PRODUCT_NOT_SURE && !productSlugs.includes(data.product)) {
    errors.product = "Please choose a product or solution.";
  }
  if (!data.enquiryType) errors.enquiryType = "Please choose an enquiry type.";
  if (data.message.length > 0 && data.message.length < 10) {
    errors.message = "Please add a little more detail (at least 10 characters).";
  }
  if (!data.consent) errors.consent = "Please confirm you agree to be contacted.";

  return { data, errors };
}

const ATTRIBUTION_KEYS: (keyof EnquiryAttribution)[] = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "landingPage",
  "referrer",
];

export function sanitizeAttribution(input: unknown): EnquiryAttribution {
  if (!input || typeof input !== "object") return {};
  const source = input as Record<string, unknown>;
  const out: EnquiryAttribution = {};
  for (const key of ATTRIBUTION_KEYS) {
    const value = sanitizeText(source[key], 500);
    if (value) out[key] = value;
  }
  return out;
}
