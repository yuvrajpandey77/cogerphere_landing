import { OPENBENTT_FALLBACK_URL, OPENBENTT_PRIMARY_URL } from "@/lib/site-content";

let cache: { url: string; until: number } | null = null;

async function isPrimaryReachable(): Promise<boolean> {
  try {
    const res = await fetch(OPENBENTT_PRIMARY_URL, {
      method: "GET",
      signal: AbortSignal.timeout(3000),
      cache: "no-store",
      redirect: "follow",
    });
    return res.ok;
  } catch {
    return false;
  }
}

/** Primary Openbentt download page if reachable, otherwise Vercel fallback. Cached 60s. */
export async function resolveOpenbenttUrl(): Promise<string> {
  if (cache && Date.now() < cache.until) return cache.url;

  const url = (await isPrimaryReachable()) ? OPENBENTT_PRIMARY_URL : OPENBENTT_FALLBACK_URL;
  cache = { url, until: Date.now() + 60_000 };
  return url;
}
