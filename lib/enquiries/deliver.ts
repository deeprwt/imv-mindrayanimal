import "server-only";
import { createHmac } from "node:crypto";
import type { Enquiry } from "@/types/enquiry";
import { enquiryHtml, enquirySubject, enquiryText } from "./format";

/**
 * Delivery adapters. Each is enabled by server-only environment variables, so
 * credentials never reach the browser. Add a CRM or database adapter by
 * implementing `EnquiryAdapter` and registering it in `adapters()`.
 */
export interface EnquiryAdapter {
  name: string;
  send(enquiry: Enquiry): Promise<void>;
}

/** Generic JSON webhook — works with CRMs, Zapier/Make, Power Automate, or your own backend. */
function webhookAdapter(url: string, secret?: string): EnquiryAdapter {
  return {
    name: "webhook",
    async send(enquiry) {
      const body = JSON.stringify({ type: "enquiry.created", data: enquiry });
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (secret) headers["X-Signature-SHA256"] = createHmac("sha256", secret).update(body).digest("hex");
      const res = await fetch(url, { method: "POST", headers, body, signal: AbortSignal.timeout(8000) });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    },
  };
}

/** Transactional email via the Resend REST API (no SDK dependency). */
function resendAdapter(apiKey: string, to: string[], from: string): EnquiryAdapter {
  return {
    name: "email",
    async send(enquiry) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to,
          reply_to: enquiry.email,
          subject: enquirySubject(enquiry),
          text: enquiryText(enquiry),
          html: enquiryHtml(enquiry),
        }),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) throw new Error(`Email API responded ${res.status}`);
    },
  };
}

function adapters(): EnquiryAdapter[] {
  const list: EnquiryAdapter[] = [];
  const env = process.env;
  if (env.ENQUIRY_WEBHOOK_URL) list.push(webhookAdapter(env.ENQUIRY_WEBHOOK_URL, env.ENQUIRY_WEBHOOK_SECRET));
  if (env.RESEND_API_KEY && env.ENQUIRY_EMAIL_TO && env.ENQUIRY_EMAIL_FROM) {
    const to = env.ENQUIRY_EMAIL_TO.split(",").map((s) => s.trim()).filter(Boolean);
    list.push(resendAdapter(env.RESEND_API_KEY, to, env.ENQUIRY_EMAIL_FROM));
  }
  return list;
}

export class EnquiryDeliveryError extends Error {}

/**
 * Sends the enquiry through every configured adapter.
 * Succeeds if at least one adapter delivers. In development with no adapters
 * configured the enquiry is logged instead; in production that is treated as an
 * error so leads are never silently dropped.
 */
export async function deliverEnquiry(enquiry: Enquiry): Promise<string[]> {
  const active = adapters();

  if (!active.length) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry] No delivery adapter configured — logging enquiry (development only):\n" + enquiryText(enquiry));
      return ["console"];
    }
    throw new EnquiryDeliveryError("No enquiry delivery adapter is configured.");
  }

  const results = await Promise.allSettled(active.map((a) => a.send(enquiry)));
  const delivered = active.filter((_, i) => results[i].status === "fulfilled").map((a) => a.name);
  results.forEach((r, i) => {
    if (r.status === "rejected") console.error(`[enquiry] ${active[i].name} delivery failed for ${enquiry.reference}:`, r.reason);
  });
  if (!delivered.length) throw new EnquiryDeliveryError("All enquiry delivery adapters failed.");
  return delivered;
}
