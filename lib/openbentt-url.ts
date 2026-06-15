import { OPENBENTT_FALLBACK_URL, OPENBENTT_PRIMARY_URL } from "@/lib/site-content";

let cache: { url: string; until: number } | null = null;

/** Primary Openbentt host if reachable, otherwise Vercel fallback. Cached 60s. */
export async function resolveOpenbenttUrl(): Promise<string> {
  if (cache && Date.now() < cache.until) return cache.url;

  let url = OPENBENTT_FALLBACK_URL;
  try {
    const res = await fetch(OPENBENTT_PRIMARY_URL, {
      method: "HEAD",
      signal: AbortSignal.timeout(2500),
      cache: "no-store",
    });
    if (res.ok) url = OPENBENTT_PRIMARY_URL;
  } catch {
    // primary unreachable — use fallback
  }

  cache = { url, until: Date.now() + 60_000 };
  return url;
}
