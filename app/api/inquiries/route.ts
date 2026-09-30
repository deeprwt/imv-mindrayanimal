import { randomBytes } from "node:crypto";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import { verifyCaptcha } from "@/lib/enquiries/captcha";
import { deliverEnquiry } from "@/lib/enquiries/deliver";
import { clientIp, enquiryRateLimiter } from "@/lib/enquiries/rate-limit";
import { enquiryTypeLabel, sanitizeAttribution, sanitizeText, validateEnquiryFields } from "@/lib/validation";
import type { Enquiry, EnquiryApiResponse, EnquiryPayload } from "@/types/enquiry";

const MAX_BODY_BYTES = 16 * 1024;
/** Submissions faster than this after the form rendered are treated as bots. */
const MIN_FILL_MS = 2500;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;
const PRODUCT_SLUGS = getAllProducts().map((p) => p.slug);

function json(body: EnquiryApiResponse, status: number, headers?: HeadersInit) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });
}

function makeReference(): string {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `ENQ-${date}-${randomBytes(3).toString("hex").toUpperCase()}`;
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ ok: false, error: "Unsupported content type." }, 415);
  }

  // Same-origin check: browsers always send Origin on cross-site POSTs.
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return json({ ok: false, error: "Invalid origin." }, 403);
  }

  const ip = clientIp(request.headers);
  const limit = await enquiryRateLimiter.check(ip);
  if (!limit.allowed) {
    return json(
      { ok: false, error: "Too many enquiries from this connection. Please try again later or contact us by email." },
      429,
      { "Retry-After": String(limit.retryAfterSeconds) },
    );
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false, error: "Request too large." }, 413);

  let payload: EnquiryPayload;
  try {
    payload = JSON.parse(raw) as EnquiryPayload;
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }
  if (!payload || typeof payload !== "object") return json({ ok: false, error: "Invalid request." }, 400);

  // Spam traps: honeypot field and implausibly fast submissions. Respond as if
  // successful so bots get no signal, but never deliver.
  const age = typeof payload.startedAt === "number" ? Date.now() - payload.startedAt : -1;
  if (payload.website || age < MIN_FILL_MS || age > MAX_FORM_AGE_MS) {
    return json({ ok: true, reference: makeReference() }, 200);
  }

  if (!(await verifyCaptcha(payload.captchaToken, ip))) {
    return json({ ok: false, error: "We could not verify your request. Please try again." }, 400);
  }

  const { data, errors } = validateEnquiryFields(payload, PRODUCT_SLUGS);
  if (Object.keys(errors).length) {
    return json({ ok: false, error: "Please correct the highlighted fields.", fieldErrors: errors }, 400);
  }

  const enquiry: Enquiry = {
    ...data,
    reference: makeReference(),
    receivedAt: new Date().toISOString(),
    productName: getProductBySlug(data.product)?.name ?? "Not sure yet — needs advice",
    enquiryTypeLabel: enquiryTypeLabel(data.enquiryType),
    pageUrl: sanitizeText(payload.pageUrl, 500) || undefined,
    attribution: sanitizeAttribution(payload.attribution),
    userAgent: sanitizeText(request.headers.get("user-agent"), 300) || undefined,
  };

  try {
    await deliverEnquiry(enquiry);
  } catch (error) {
    console.error(`[enquiry] delivery failed for ${enquiry.reference}`, error);
    return json(
      { ok: false, error: "We could not send your enquiry right now. Please try again or contact us by email or phone." },
      502,
    );
  }

  return json({ ok: true, reference: enquiry.reference }, 201);
}
