import Link from "next/link";
import { ChevronRight, BookOpen, Code, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

export default function DocsPage() {
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
            Documentation
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Build intelligent systems with Cogerphere. From AI-powered smart contracts to context-aware LLMs — everything you need to expand the sphere.
          </p>
      </section>

      {/* Quick Start */}
      <section className="py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 text-stone-950">
            Quick Start
          </h2>
          <ol className="space-y-6 max-w-2xl">
            <li className="flex gap-4 items-start">
              <span className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">1</span>
              <div>
                <h3 className="font-semibold text-stone-950">Sign up and explore</h3>
                <p className="text-stone-600">Create an account and get familiar with the interface.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">2</span>
              <div>
                <h3 className="font-semibold text-stone-950">Try Clox</h3>
                <p className="text-stone-600">Generate your first production-ready smart contract from natural language.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">3</span>
              <div>
                <h3 className="font-semibold text-stone-950">Integrate</h3>
                <p className="text-stone-600">Connect to your workflow via API or CLI when ready.</p>
              </div>
            </li>
          </ol>
      </section>

      {/* Product Cards */}
      <section className="py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-12 text-stone-950">
            Products & Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Clox */}
            <div className="rounded-2xl border border-stone-200 p-8 bg-white hover:border-stone-300 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-stone-900 flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-stone-950 mb-2">Clox</h3>
              <p className="text-stone-600 mb-6">
                Generate production-ready smart contracts with AI. Secure by default, multi-chain support. Built for developers who ship.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-teal-600 text-white hover:bg-teal-700 rounded-xl">
                  <Link href="https://cogy01.vercel.app/" className="flex items-center gap-2">
                    Try Clox <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <span className="text-sm text-stone-500 self-center">API & CLI docs coming soon</span>
              </div>
            </div>

            {/* CIF SDK */}
            <div className="rounded-2xl border border-stone-200 p-8 bg-white hover:border-stone-300 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-6">
                <Wrench className="h-7 w-7 text-teal-700" />
              </div>
              <h3 className="text-xl font-semibold text-stone-950 mb-2">CIF SDK</h3>
              <p className="text-stone-600 mb-6">
                Context Intelligence Framework — adaptive compression and drift detection for LLM context windows. Extend what models remember without losing coherence.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-xl border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white">
                  <Link href="/research" className="flex items-center gap-2">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <span className="text-sm text-stone-500 self-center">Coming soon</span>
              </div>
            </div>
          </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 text-stone-950">
            Resources
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link href="/learn" className="rounded-xl p-6 bg-white border border-stone-200 hover:border-stone-300 flex items-center gap-4 group">
              <BookOpen className="h-8 w-8 text-stone-600 group-hover:text-teal-600" />
              <div>
                <h3 className="font-semibold text-stone-950">Tutorials</h3>
                <p className="text-sm text-stone-600">Guides and use cases</p>
              </div>
            </Link>
            <Link href="/contact" className="rounded-xl p-6 bg-white border border-stone-200 hover:border-stone-300 flex items-center gap-4 group">
              <Wrench className="h-8 w-8 text-stone-600 group-hover:text-teal-600" />
              <div>
                <h3 className="font-semibold text-stone-950">Support</h3>
                <p className="text-sm text-stone-600">Get help when you need it</p>
              </div>
            </Link>
            <Link href="/contact" className="rounded-xl p-6 bg-white border border-stone-200 hover:border-stone-300 flex items-center gap-4 group">
              <Code className="h-8 w-8 text-stone-600 group-hover:text-teal-600" />
              <div>
                <h3 className="font-semibold text-stone-950">Enterprise</h3>
                <p className="text-sm text-stone-600">Custom integrations</p>
              </div>
            </Link>
          </div>
      </section>

        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
