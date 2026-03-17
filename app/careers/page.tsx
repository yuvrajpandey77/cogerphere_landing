import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <LandingHeader />

      <main className="relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-40" />
        </div>
        <div className={`relative z-10 ${CONTENT_CLASS}`}>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-6 text-stone-950 tracking-tight">
            We&apos;re Hiring
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-12">
            Join us in expanding the sphere. We&apos;re building a team that thinks in context, ships with integrity, and keeps intelligence in motion.
          </p>
          <div className="rounded-2xl border border-stone-200 p-8 md:p-12 bg-white max-w-2xl mx-auto">
            <p className="text-stone-600 mb-6">
              Open roles will be listed here as we grow. In the meantime, we&apos;d love to hear from you.
            </p>
            <Button asChild size="lg" className="bg-teal-600 text-white hover:bg-teal-700 rounded-xl font-bold px-8 py-4">
              <Link href="/contact" className="flex items-center gap-2">
                Get in touch <ChevronRight className="h-5 w-5" />
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
