import { NeuralLogoLoader } from "@/components/neural-logo-loader";

/**
 * Shown by Next.js during route loading. LoadingGate in layout ensures
 * the neural logo is visible for at least 280ms on every navigation.
 */
export default function Loading() {
  return <NeuralLogoLoader />;
}
