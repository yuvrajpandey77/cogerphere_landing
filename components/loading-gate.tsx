"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NeuralLogoLoader } from "./neural-logo-loader";

const MIN_DISPLAY_MS = 280;
const FADE_MS = 200;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefersReducedMotion;
}


export function LoadingGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(() => pathname !== "/");
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (pathname === "/" || prefersReducedMotion) {
      setShowLoader(false);
      return;
    }
    setShowLoader(true);

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, MIN_DISPLAY_MS + FADE_MS);

    return () => clearTimeout(timer);
  }, [pathname, prefersReducedMotion]);

  return (
    <>
      {children}
      {showLoader && (
        <div
          className="fixed inset-0 z-50"
          style={{ animation: `loading-fade-out ${MIN_DISPLAY_MS + FADE_MS}ms ease-out forwards` }}
          aria-hidden
        >
          <NeuralLogoLoader />
        </div>
      )}
    </>
  );
}
