import "server-only";

/**
 * Optional CAPTCHA verification. Disabled unless CAPTCHA_PROVIDER and
 * CAPTCHA_SECRET_KEY are set (server-only env vars — never exposed to the client).
 *
 *   CAPTCHA_PROVIDER=recaptcha   Google reCAPTCHA v3 (score-based)
 *   CAPTCHA_PROVIDER=turnstile   Cloudflare Turnstile
 */
const provider = process.env.CAPTCHA_PROVIDER;
const secret = process.env.CAPTCHA_SECRET_KEY;
const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? 0.5);

export const captchaEnabled = Boolean(provider && secret);

const VERIFY_URLS: Record<string, string> = {
  recaptcha: "https://www.google.com/recaptcha/api/siteverify",
  turnstile: "https://challenges.cloudflare.com/turnstile/v0/siteverify",
};

export async function verifyCaptcha(token: string | undefined, ip: string): Promise<boolean> {
  if (!captchaEnabled || !provider || !secret) return true;
  const url = VERIFY_URLS[provider];
  if (!url || !token) return false;

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip && ip !== "unknown") body.set("remoteip", ip);
    const res = await fetch(url, { method: "POST", body, signal: AbortSignal.timeout(5000) });
    if (!res.ok) return false;
    const result = (await res.json()) as { success?: boolean; score?: number };
    if (!result.success) return false;
    return provider !== "recaptcha" || (result.score ?? 0) >= minScore;
  } catch {
    return false;
  }
}
