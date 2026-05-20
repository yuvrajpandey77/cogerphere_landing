"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { NeuralLogoLoader } from "./neural-logo-loader";

const MIN_DISPLAY_MS = 280;
const FADE_MS = 200;

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function LoadingGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const skipLoader = pathname === "/" || prefersReducedMotion;
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (skipLoader) {
      const hide = requestAnimationFrame(() => setShowLoader(false));
      return () => cancelAnimationFrame(hide);
    }

    const show = requestAnimationFrame(() => setShowLoader(true));
    const hideTimer = window.setTimeout(() => {
      setShowLoader(false);
    }, MIN_DISPLAY_MS + FADE_MS);

    return () => {
      cancelAnimationFrame(show);
      clearTimeout(hideTimer);
    };
  }, [pathname, skipLoader]);

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
