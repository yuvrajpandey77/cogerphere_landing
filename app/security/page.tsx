import Link from "next/link";
import { Shield } from "lucide-react";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 flex flex-col">
      <LandingHeader />

      <main className="relative flex-1">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-40" />
        </div>
        <div className={`relative z-10 ${CONTENT_CLASS}`}>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-8">
            <Shield className="h-8 w-8 text-teal-700" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-normal mb-6 text-stone-950 tracking-tight">
            Security at Cogerphere
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl leading-relaxed mb-12">
            Security is not an afterthought. Every system we build — from Clox smart contracts to CIF context compression — is designed to fail safely and stay coherent.
          </p>
          <div className="space-y-6 text-stone-600 max-w-2xl">
            <p>
              <strong className="text-stone-950">Secure by default.</strong> Our smart contract builder embeds security best practices and automated vulnerability scanning. No shortcuts.
            </p>
            <p>
              <strong className="text-stone-950">AI safety.</strong> We research context drift, coherence degradation, and alignment. Our tools are built to keep models on track.
            </p>
            <p>
              For security concerns or responsible disclosure, please{" "}
              <Link href="/contact" className="text-teal-600 font-semibold underline hover:no-underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </section>

        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
