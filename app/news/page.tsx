import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 flex flex-col">
      <LandingHeader />

      <main className="relative flex-1">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-40" />
        </div>
        <div className={`relative z-10 ${CONTENT_CLASS}`}>
      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-6 text-stone-950 tracking-tight">
            News & Updates
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl">
            Announcements, releases, and what we&apos;re building at Cogerphere.
          </p>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
          <div className="rounded-2xl border border-stone-200 p-8 md:p-12 bg-white flex flex-col md:flex-row items-center gap-10 md:gap-14 max-w-4xl mx-auto">
            {/* Lab jar — research in progress */}
            <div className="shrink-0 flex items-center justify-center">
              <div className="relative w-20 h-24">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-5 rounded-t-lg border-2 border-b-0 border-stone-300 bg-stone-50" />
                <div className="absolute top-4 left-0 right-0 bottom-0 rounded-b-[1.5rem] border-2 border-t-0 border-stone-300 bg-stone-50 overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-teal-100 to-teal-50/80 rounded-b-[1.25rem]" />
                  <span className="absolute w-1.5 h-1.5 rounded-full bg-teal-400/60 bottom-[35%] left-[30%]" />
                  <span className="absolute w-1 h-1 rounded-full bg-amber-300/50 bottom-[40%] right-[35%]" />
                  <span className="absolute w-1.5 h-1.5 rounded-full bg-teal-500/50 bottom-[28%] left-[45%]" />
                </div>
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
            <p className="text-lg text-stone-600 mb-6">
              We&apos;re just getting started. New announcements, research updates, and product releases will appear here as we expand the sphere.
            </p>
            <p className="text-stone-500 mb-8">
              In the meantime, explore our research and products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
              >
                Research <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://cogy01.vercel.app/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-stone-900 rounded-xl font-semibold hover:bg-stone-900 hover:text-white transition-colors"
              >
                Try Clox
              </Link>
            </div>
            </div>
          </div>
      </section>

        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
