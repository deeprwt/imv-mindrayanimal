import "server-only";

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
}

export interface RateLimiter {
  check(key: string): Promise<RateLimitResult>;
}

/**
 * In-memory sliding-window limiter. Suitable for a single long-running Node
 * server. On serverless / multi-instance hosting each instance keeps its own
 * window — swap in a shared store (e.g. Redis / Upstash) implementing
 * `RateLimiter` for strict global limits.
 */
export function createMemoryRateLimiter({ limit, windowMs }: { limit: number; windowMs: number }): RateLimiter {
  const hits = new Map<string, number[]>();
  let lastSweep = Date.now();

  return {
    async check(key) {
      const now = Date.now();
      if (now - lastSweep > windowMs) {
        for (const [k, times] of hits) {
          if (times.every((t) => now - t > windowMs)) hits.delete(k);
        }
        lastSweep = now;
      }
      const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
      if (recent.length >= limit) {
        hits.set(key, recent);
        return { allowed: false, retryAfterSeconds: Math.ceil((windowMs - (now - recent[0])) / 1000) };
      }
      recent.push(now);
      hits.set(key, recent);
      return { allowed: true, retryAfterSeconds: 0 };
    },
  };
}

/** 5 enquiries per client IP per 10 minutes. */
export const enquiryRateLimiter = createMemoryRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });

export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return headers.get("x-real-ip") ?? "unknown";
}
