/**
 * Optional client-side CAPTCHA (Google reCAPTCHA v3, invisible).
 * Enabled only when NEXT_PUBLIC_RECAPTCHA_SITE_KEY is set; pair it with
 * CAPTCHA_PROVIDER=recaptcha and CAPTCHA_SECRET_KEY on the server.
 * The script is loaded lazily on first form interaction, not on page load.
 */
const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

interface Grecaptcha {
  ready(cb: () => void): void;
  execute(key: string, options: { action: string }): Promise<string>;
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

let loading: Promise<void> | null = null;

export function preloadCaptcha(): Promise<void> {
  if (!siteKey || typeof window === "undefined") return Promise.resolve();
  loading ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      loading = null;
      reject(new Error("CAPTCHA failed to load"));
    };
    document.head.appendChild(script);
  });
  return loading;
}

export async function getCaptchaToken(action = "enquiry"): Promise<string | undefined> {
  if (!siteKey) return undefined;
  await preloadCaptcha();
  const grecaptcha = window.grecaptcha;
  if (!grecaptcha) return undefined;
  return new Promise((resolve) => grecaptcha.ready(() => grecaptcha.execute(siteKey, { action }).then(resolve, () => resolve(undefined))));
}
