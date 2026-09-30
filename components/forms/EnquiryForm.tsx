"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { countries } from "@/data/countries";
import { getAttribution } from "@/lib/analytics/attribution";
import { AnalyticsEvents } from "@/lib/analytics/events";
import { setEnhancedConversionData, track } from "@/lib/analytics/track";
import { getCaptchaToken, preloadCaptcha } from "@/lib/captcha-client";
import { ENQUIRY_PREFILL_EVENT, type EnquiryPrefillDetail } from "@/lib/enquiry-events";
import { ENQUIRY_TYPES, PRODUCT_NOT_SURE, FIELD_LIMITS, isEnquiryType, validateEnquiryFields } from "@/lib/validation";
import { cn } from "@/lib/utils";
import { buttonClasses } from "@/components/ui/Button";
import type { EnquiryApiResponse, EnquiryFieldErrors, EnquiryFields, EnquiryType } from "@/types/enquiry";

export interface ProductOption {
  value: string;
  label: string;
  group: string;
}

interface EnquiryFormProps {
  productOptions: ProductOption[];
  defaultProduct?: string;
  defaultType?: EnquiryType;
  /** Analytics context: "landing", "product", "contact"… */
  location: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const FIELD_ORDER: (keyof EnquiryFields)[] = [
  "enquiryType", "fullName", "organization", "email", "phone", "country", "state", "city", "product", "message", "consent",
];

const inputClass =
  "block w-full rounded-xl border bg-white px-4 text-base text-slate-900 shadow-[inset_0_1px_1px_rgb(15_23_42/0.04)] transition-[border-color,box-shadow] duration-200 placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 focus:outline-none aria-[invalid=true]:border-brand-600 aria-[invalid=true]:ring-brand-600/10 sm:text-[0.9375rem]";

function Field({
  id,
  label,
  error,
  required = true,
  hint,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between gap-2 text-sm font-medium text-slate-900">
        <span>
          {label}
          {required ? (
            <span className="text-brand-600" aria-hidden="true">
              {" "}*
            </span>
          ) : (
            <span className="font-normal text-slate-500"> (optional)</span>
          )}
        </span>
        {hint ? <span className="text-xs font-normal text-slate-500">{hint}</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-brand-700">
          <CircleAlert aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function EnquiryForm({ productOptions, defaultProduct, defaultType = "product-information", location }: EnquiryFormProps) {
  const uid = useId();
  const fieldId = (name: keyof EnquiryFields) => `${uid}-${name}`;
  const productSlugs = productOptions.map((o) => o.value);

  const initial: EnquiryFields = {
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    product: defaultProduct && productSlugs.includes(defaultProduct) ? defaultProduct : "",
    enquiryType: defaultType,
    message: "",
    consent: false,
  };

  const [values, setValues] = useState<EnquiryFields>(initial);
  const [errors, setErrors] = useState<EnquiryFieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof EnquiryFields, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [reference, setReference] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const honeypot = useRef<HTMLInputElement>(null);
  const startedAt = useRef<number>(0);
  const started = useRef(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
    // Deep links: /contact?type=quote&product=vetus-9
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const product = params.get("product");
    /* eslint-disable react-hooks/set-state-in-effect -- one-time hydration from the URL */
    if (isEnquiryType(type) || (product && productSlugs.includes(product))) {
      setValues((v) => ({
        ...v,
        enquiryType: isEnquiryType(type) ? type : v.enquiryType,
        product: product && productSlugs.includes(product) ? product : v.product,
      }));
    }
    /* eslint-enable react-hooks/set-state-in-effect */

    const onPrefill = (event: Event) => {
      const detail = (event as CustomEvent<EnquiryPrefillDetail>).detail ?? {};
      setStatus((s) => (s === "success" ? "idle" : s));
      setValues((v) => ({
        ...v,
        enquiryType: detail.enquiryType ?? v.enquiryType,
        product: detail.product && productSlugs.includes(detail.product) ? detail.product : v.product,
      }));
    };
    window.addEventListener(ENQUIRY_PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(ENQUIRY_PREFILL_EVENT, onPrefill);
    // productSlugs is derived from static props
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function validate(next: EnquiryFields) {
    return validateEnquiryFields(next, productSlugs).errors;
  }

  function update<K extends keyof EnquiryFields>(name: K, value: EnquiryFields[K]) {
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name] || showSummary) setErrors(validate(next));
  }

  function blur(name: keyof EnquiryFields) {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  }

  function onFirstInteraction() {
    if (started.current) return;
    started.current = true;
    track(AnalyticsEvents.formStart, { form_location: location });
    void preloadCaptcha().catch(() => undefined);
  }

  const visibleError = (name: keyof EnquiryFields) => (touched[name] || showSummary ? errors[name] : undefined);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    const { data, errors: found } = validateEnquiryFields(values, productSlugs);
    setErrors(found);
    if (Object.keys(found).length) {
      setShowSummary(true);
      track(AnalyticsEvents.formError, { form_location: location, error_type: "validation" });
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("submitting");
    setServerError("");
    try {
      const captchaToken = await getCaptchaToken();
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          website: honeypot.current?.value ?? "",
          startedAt: startedAt.current,
          captchaToken,
          pageUrl: window.location.href,
          attribution: getAttribution(),
        }),
      });
      const result = (await res.json().catch(() => null)) as EnquiryApiResponse | null;

      if (res.ok && result?.ok) {
        setReference(result.reference);
        setStatus("success");
        const params = {
          form_location: location,
          enquiry_type: data.enquiryType,
          product: data.product,
          transaction_id: result.reference,
        };
        setEnhancedConversionData({ email: data.email, phone: data.phone });
        track(AnalyticsEvents.formSubmit, params);
        if (data.enquiryType === "quote") track(AnalyticsEvents.quoteRequest, params);
        if (data.enquiryType === "demo") track(AnalyticsEvents.demoRequest, params);
        return;
      }

      if (result && !result.ok && result.fieldErrors) {
        setErrors(result.fieldErrors);
        setShowSummary(true);
        setStatus("idle");
        requestAnimationFrame(() => summaryRef.current?.focus());
        return;
      }
      setServerError(result && !result.ok ? result.error : "Something went wrong. Please try again.");
      setStatus("error");
      track(AnalyticsEvents.formError, { form_location: location, error_type: `http_${res.status}` });
    } catch {
      setServerError("We couldn't reach the server. Please check your connection and try again.");
      setStatus("error");
      track(AnalyticsEvents.formError, { form_location: location, error_type: "network" });
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-8 text-center sm:p-10">
        <CircleCheck aria-hidden="true" className="mx-auto size-12 text-emerald-600" />
        <h3 ref={successRef} tabIndex={-1} className="mt-5 text-2xl font-semibold tracking-tight focus:outline-none">
          Thank you{values.fullName ? `, ${values.fullName.split(" ")[0]}` : ""} — your enquiry has been received.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          A veterinary imaging specialist will contact you shortly. Your reference number is{" "}
          <span className="font-semibold text-slate-950">{reference}</span>.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/products" className={buttonClasses({ variant: "secondary", size: "md" })}>
            Explore more products
          </Link>
          <button
            type="button"
            onClick={() => {
              setValues({ ...initial, fullName: values.fullName, organization: values.organization, email: values.email, phone: values.phone, country: values.country, state: values.state, city: values.city });
              setTouched({});
              setShowSummary(false);
              setStatus("idle");
            }}
            className={buttonClasses({ variant: "ghost", size: "md" })}
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  const errorList = FIELD_ORDER.filter((name) => errors[name]);
  const groups = Array.from(new Set(productOptions.map((o) => o.group)));
  const describedBy = (name: keyof EnquiryFields) => (visibleError(name) ? `${fieldId(name)}-error` : undefined);
  const submitting = status === "submitting";

  return (
    <form noValidate onSubmit={onSubmit} onFocus={onFirstInteraction} aria-busy={submitting} className="space-y-5 sm:space-y-6">
      {showSummary && errorList.length ? (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="rounded-2xl border border-brand-200 bg-brand-50 p-4 focus:outline-none">
          <p className="flex items-center gap-2 text-sm font-semibold text-brand-800">
            <CircleAlert aria-hidden="true" className="size-4" />
            Please correct {errorList.length === 1 ? "1 field" : `${errorList.length} fields`} to continue:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-brand-800">
            {errorList.map((name) => (
              <li key={name}>
                <a href={`#${fieldId(name)}`} className="underline underline-offset-2">
                  {errors[name]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {status === "error" ? (
        <div role="alert" className="rounded-2xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800">
          <p className="font-semibold">{serverError}</p>
          <p className="mt-1">
            You can also email{" "}
            <a href={`mailto:${siteConfig.contact.email}`} data-track-location="form_error" className="font-semibold underline">
              {siteConfig.contact.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${siteConfig.contact.phoneHref}`} data-track-location="form_error" className="font-semibold underline">
              {siteConfig.contact.phoneDisplay}
            </a>
            .
          </p>
        </div>
      ) : null}

      <fieldset>
        <legend className="mb-2.5 text-sm font-medium text-slate-900 sm:mb-3">
          How can we help? <span className="text-brand-600" aria-hidden="true">*</span>
        </legend>
        <div id={fieldId("enquiryType")} className="flex flex-wrap gap-2">
          {ENQUIRY_TYPES.map((type) => (
            <label key={type.value} className="cursor-pointer">
              <input
                type="radio"
                name="enquiryType"
                value={type.value}
                checked={values.enquiryType === type.value}
                onChange={() => update("enquiryType", type.value)}
                className="peer sr-only"
              />
              <span className="inline-flex h-10 items-center rounded-full border border-slate-200 bg-white px-3.5 text-sm font-medium text-slate-700 transition-colors peer-checked:border-slate-950 peer-checked:bg-slate-950 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand-600 hover:border-slate-300 sm:px-4">
                <span className="sm:hidden">{type.shortLabel}</span>
                <span className="hidden sm:inline">{type.label}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-4 sm:gap-y-5">
        <Field className="col-span-2 sm:col-span-1" id={fieldId("fullName")} label="Full name" error={visibleError("fullName")}>
          <input
            id={fieldId("fullName")}
            name="fullName"
            autoComplete="name"
            required
            maxLength={FIELD_LIMITS.fullName}
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            onBlur={() => blur("fullName")}
            aria-invalid={Boolean(visibleError("fullName"))}
            aria-describedby={describedBy("fullName")}
            className={cn(inputClass, "h-12 border-slate-300")}
          />
        </Field>
        <Field className="col-span-2 sm:col-span-1" id={fieldId("organization")} label="Company / Hospital / Clinic" error={visibleError("organization")}>
          <input
            id={fieldId("organization")}
            name="organization"
            autoComplete="organization"
            required
            maxLength={FIELD_LIMITS.organization}
            value={values.organization}
            onChange={(e) => update("organization", e.target.value)}
            onBlur={() => blur("organization")}
            aria-invalid={Boolean(visibleError("organization"))}
            aria-describedby={describedBy("organization")}
            className={cn(inputClass, "h-12 border-slate-300")}
          />
        </Field>
        <Field className="col-span-2 sm:col-span-1" id={fieldId("email")} label="Email" error={visibleError("email")}>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={FIELD_LIMITS.email}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => blur("email")}
            aria-invalid={Boolean(visibleError("email"))}
            aria-describedby={describedBy("email")}
            className={cn(inputClass, "h-12 border-slate-300")}
          />
        </Field>
        <Field className="col-span-2 sm:col-span-1" id={fieldId("phone")} label="Phone" hint="Include country code" error={visibleError("phone")}>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={FIELD_LIMITS.phone}
            placeholder="+1 555 000 0000"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            onBlur={() => blur("phone")}
            aria-invalid={Boolean(visibleError("phone"))}
            aria-describedby={describedBy("phone")}
            className={cn(inputClass, "h-12 border-slate-300")}
          />
        </Field>
        <Field className="col-span-2 sm:col-span-1" id={fieldId("country")} label="Country" error={visibleError("country")}>
          <select
            id={fieldId("country")}
            name="country"
            autoComplete="country-name"
            required
            value={values.country}
            onChange={(e) => update("country", e.target.value)}
            onBlur={() => blur("country")}
            aria-invalid={Boolean(visibleError("country"))}
            aria-describedby={describedBy("country")}
            className={cn(inputClass, "h-12 appearance-none border-slate-300 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%2364748b%22 stroke-width=%222%22 viewBox=%220 0 24 24%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[position:right_1rem_center] bg-no-repeat pr-10")}
          >
            <option value="">Select country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field id={fieldId("state")} label="State" error={visibleError("state")}>
          <input
            id={fieldId("state")}
            name="state"
            autoComplete="address-level1"
            required
            maxLength={FIELD_LIMITS.state}
            value={values.state}
            onChange={(e) => update("state", e.target.value)}
            onBlur={() => blur("state")}
            aria-invalid={Boolean(visibleError("state"))}
            aria-describedby={describedBy("state")}
            className={cn(inputClass, "h-12 border-slate-300")}
          />
        </Field>
        <Field id={fieldId("city")} label="City" error={visibleError("city")}>
          <input
            id={fieldId("city")}
            name="city"
            autoComplete="address-level2"
            required
            maxLength={FIELD_LIMITS.city}
            value={values.city}
            onChange={(e) => update("city", e.target.value)}
            onBlur={() => blur("city")}
            aria-invalid={Boolean(visibleError("city"))}
            aria-describedby={describedBy("city")}
            className={cn(inputClass, "h-12 border-slate-300")}
          />
        </Field>
        <Field className="col-span-2 sm:col-span-1" id={fieldId("product")} label="Product / Solution" error={visibleError("product")}>
          <select
            id={fieldId("product")}
            name="product"
            required
            value={values.product}
            onChange={(e) => update("product", e.target.value)}
            onBlur={() => blur("product")}
            aria-invalid={Boolean(visibleError("product"))}
            aria-describedby={describedBy("product")}
            className={cn(inputClass, "h-12 appearance-none border-slate-300 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%2364748b%22 stroke-width=%222%22 viewBox=%220 0 24 24%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[position:right_1rem_center] bg-no-repeat pr-10")}
          >
            <option value="">Select a product or solution</option>
            <option value={PRODUCT_NOT_SURE}>Not sure yet — help me choose</option>
            {groups.map((group) => (
              <optgroup key={group} label={group}>
                {productOptions
                  .filter((o) => o.group === group)
                  .map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </Field>
        <Field id={fieldId("message")} label="Message" required={false} error={visibleError("message")} className="col-span-2">
          <textarea
            id={fieldId("message")}
            name="message"
            rows={3}
            maxLength={FIELD_LIMITS.message}
            placeholder="Tell us about your practice, caseload or the applications you need."
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            onBlur={() => blur("message")}
            aria-invalid={Boolean(visibleError("message"))}
            aria-describedby={describedBy("message")}
            className={cn(inputClass, "resize-y border-slate-300 py-3")}
          />
        </Field>
      </div>

      {/* Honeypot: invisible to people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-slate-600">
          <input
            id={fieldId("consent")}
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            onBlur={() => blur("consent")}
            aria-invalid={Boolean(visibleError("consent"))}
            aria-describedby={describedBy("consent")}
            className="mt-0.5 size-5 shrink-0 cursor-pointer rounded border-slate-300 accent-brand-600"
          />
          <span>
            I agree that {siteConfig.name} may use my details to respond to this enquiry, as described in the{" "}
            <Link href="/privacy-policy" className="font-medium text-slate-900 underline underline-offset-2">
              Privacy Policy
            </Link>
            . <span className="text-brand-600" aria-hidden="true">*</span>
          </span>
        </label>
        {visibleError("consent") ? (
          <p id={`${fieldId("consent")}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-brand-700">
            <CircleAlert aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
            {visibleError("consent")}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={submitting} className={buttonClasses({ size: "lg", className: "w-full sm:w-auto" })}>
          {submitting ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send aria-hidden="true" className="size-4" />
              Send Enquiry
            </>
          )}
        </button>
        <p className="text-xs text-slate-500">
          <span aria-hidden="true">*</span> Required fields
        </p>
      </div>
      <p className="sr-only" aria-live="polite">
        {submitting ? "Sending your enquiry…" : ""}
      </p>
    </form>
  );
}
