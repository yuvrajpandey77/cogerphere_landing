import Link from "next/link";
import { ChevronRight, BookOpen, Code, Lightbulb } from "lucide-react";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <LandingHeader />

      <main className="relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-30" />
        </div>
        <div className={`relative z-10 ${CONTENT_CLASS}`}>
      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-6 text-stone-950 tracking-tight">
            Learn with Cogerphere
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Tutorials, guides, and use cases to help you build intelligent systems that stay coherent.
          </p>
      </section>

      {/* Cards */}
      <section className="py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/docs"
              className="rounded-2xl border border-stone-200 p-8 bg-white hover:border-stone-300 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-stone-200 transition-colors">
                <BookOpen className="h-7 w-7 text-stone-700" />
              </div>
              <h3 className="text-xl font-semibold text-stone-950 mb-2">Documentation</h3>
              <p className="text-stone-600 mb-4">
                Get started with Clox, CIF SDK, and our tools. Quick start guides and API references.
              </p>
              <span className="text-teal-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                View docs <ChevronRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="https://cogy01.vercel.app/"
              className="rounded-2xl border border-stone-200 p-8 bg-white hover:border-stone-300 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-stone-900 flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-stone-950 mb-2">Clox Tutorials</h3>
              <p className="text-stone-600 mb-4">
                Generate your first smart contract. From natural language to production-ready Solidity.
              </p>
              <span className="text-teal-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Try Clox <ChevronRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/research"
              className="rounded-2xl border border-stone-200 p-8 bg-white hover:border-stone-300 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                <Lightbulb className="h-7 w-7 text-teal-700" />
              </div>
              <h3 className="text-xl font-semibold text-stone-950 mb-2">Research</h3>
              <p className="text-stone-600 mb-4">
                Context Intelligence Framework and beyond. How we extend what LLMs can remember.
              </p>
              <span className="text-teal-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore research <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
      </section>

        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
