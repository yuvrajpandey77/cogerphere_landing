import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950" >
      <LandingHeader />

      <main className="relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-30" />
        </div>
        <div className={`relative z-10 ${CONTENT_CLASS}`}>
      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-8 text-stone-950 tracking-tight">
            We&apos;re Cogerphere
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-2xl">
            Intelligence in Motion. Knowledge in a Sphere. We exist to expand what systems can understand, retain, and uphold — so the future stays coherent.
          </p>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20">
        <div className="bg-white rounded-2xl border border-stone-200 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 text-stone-950">
            Why We Exist
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl leading-relaxed mb-8">
            Cogerphere was founded on a simple belief: intelligence should move, and knowledge should gather. As AI systems grow in capability, they also grow in context — and that context is where coherence breaks. We build tools and research that keep the sphere intact.
          </p>
          <p className="text-lg text-stone-600 max-w-3xl leading-relaxed">
            From context-aware compression for LLMs to failproof smart contract generation, we ship systems that think in context, scale with integrity, and stay human-aligned.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-12 text-stone-950">
            How We Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-stone-950 mb-3">Research-first</h3>
              <p className="text-stone-600">We start with hard problems. Context drift, coherence degradation, security gaps — we tackle them before they scale.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-950 mb-3">Safety by default</h3>
              <p className="text-stone-600">Every system we build is designed to fail safely. No shortcuts, no silent drift.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-950 mb-3">Transparent by design</h3>
              <p className="text-stone-600">We share what we learn. Open-source where it matters, clear documentation always.</p>
            </div>
          </div>
      </section>

      {/* CTA */}
      <section className="pt-16 pb-24 md:pt-20 md:pb-32">
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 text-stone-950">
            Want to expand the sphere with us?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-teal-600 text-white hover:bg-teal-700 rounded-xl font-bold px-8 py-4">
              <Link href="/careers" className="flex items-center gap-2">
                Careers <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white font-bold px-8 py-4">
              <Link href="/contact" className="flex items-center gap-2">
                Get in touch
              </Link>
            </Button>
          </div>
      </section>

        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
