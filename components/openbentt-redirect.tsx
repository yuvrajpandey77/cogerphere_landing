"use client";

import { useEffect } from "react";
import { OPENBENTT_PRIMARY_URL } from "@/lib/site-content";

type Props = { url: string };

/**
 * Cobentt PWA (standalone on openbentt.vercel.app) redirects non-/chat paths to /chat.
 * If we'd send the user to the Vercel fallback, use the custom domain instead — it opens
 * in the system browser and lands on the desktop download page.
 */
export function OpenbenttRedirect({ url }: Props) {
  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
    const wouldUseVercel = url.includes("openbentt.vercel.app");
    const target = standalone && wouldUseVercel ? OPENBENTT_PRIMARY_URL : url;
    window.location.replace(target);
  }, [url]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 text-stone-600 text-sm">
      Opening Openbentt…
    </div>
  );
}
