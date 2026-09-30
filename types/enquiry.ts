export type EnquiryType =
  | "product-information"
  | "quote"
  | "demo"
  | "technical-support"
  | "general";

export interface EnquiryAttribution {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landingPage?: string;
  referrer?: string;
}

/** Fields a visitor fills in. Shared by the client form and the API validation. */
export interface EnquiryFields {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  product: string;
  enquiryType: EnquiryType;
  message: string;
  consent: boolean;
}

/** Payload POSTed to /api/inquiries. */
export interface EnquiryPayload extends EnquiryFields {
  /** Honeypot — must stay empty. */
  website?: string;
  /** Epoch ms when the form was rendered (time-trap spam check). */
  startedAt?: number;
  /** Optional CAPTCHA token (Turnstile / reCAPTCHA) when enabled. */
  captchaToken?: string;
  pageUrl?: string;
  attribution?: EnquiryAttribution;
}

export type EnquiryFieldErrors = Partial<Record<keyof EnquiryFields, string>>;

/** Normalised enquiry handed to delivery adapters (CRM, email, webhook, database). */
export interface Enquiry extends EnquiryFields {
  reference: string;
  receivedAt: string;
  productName?: string;
  enquiryTypeLabel: string;
  pageUrl?: string;
  attribution: EnquiryAttribution;
  userAgent?: string;
}

export type EnquiryApiResponse =
  | { ok: true; reference: string }
  | { ok: false; error: string; fieldErrors?: EnquiryFieldErrors };
