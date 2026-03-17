import Link from "next/link";
import { ChevronRight, Shield, Zap, Globe, FlaskConical, Eye, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <LandingHeader />

      <main className="relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-stone-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className={`relative z-10 ${CONTENT_CLASS}`}>
          {/* Hero — large, dominant */}
          <section className="pt-20 pb-12 md:pt-28 md:pb-14">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.15] text-stone-950 tracking-tight max-w-4xl">
              Where intelligence moves and knowledge gathers
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-2xl leading-relaxed">
              We expand the sphere of what systems can understand and uphold. From context-aware LLMs to secure smart contracts we build systems that stay coherent, transparent, and human-aligned.
            </p>
          </section>

          {/* Featured — distinct card: smaller type, left accent, clear hierarchy */}
          <section className="pb-20 md:pb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px flex-1 max-w-16 bg-stone-300" aria-hidden />
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-[0.2em]">Spotlight</span>
              <span className="h-px flex-1 bg-stone-300" aria-hidden />
            </div>
            <Link
              href="/research"
              className="block rounded-2xl overflow-hidden border-2 border-stone-200 bg-stone-900 text-white hover:border-teal-500/50 hover:bg-stone-800 transition-all duration-300 group"
            >
              <div className="relative flex flex-col md:flex-row">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal-500 md:w-1" aria-hidden />
                <div className="p-8 md:p-10 lg:p-12 pl-10 md:pl-11 flex-1 min-w-0">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal tracking-tight mb-3 max-w-2xl">
                    Context Intelligence Framework
                  </h2>
                  <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed mb-6">
                    How can a threshold-triggered secondary agent detect context drift and selectively compress stale context — without degrading answer quality or latency?
                  </p>
                  <span className="inline-flex items-center gap-2 text-teal-300 font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore research <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
                {/* Paper / DPR-style research visual */}
                <div className="hidden md:flex items-center justify-center p-6 lg:p-8 pr-8 lg:pr-12 shrink-0">
                  <div className="relative group-hover:scale-[1.02] transition-transform duration-300">
                    {/* Main paper card */}
                    <div className="relative w-36 lg:w-44 bg-stone-700/90 rounded-md border border-stone-600/50 p-3.5 shadow-2xl rotate-2 overflow-hidden">
                      <div className="font-mono text-[9px] lg:text-[10px] text-white/90 leading-relaxed">
                        <div className="text-teal-300 font-semibold mb-2">CIF Research</div>
                        <div className="space-y-0.5 text-white/70">
                          <span>drift_detect()</span>
                          <span>threshold_gate()</span>
                          <span className="text-teal-400">compress()</span>
                        </div>
                      </div>
                      {/* Folded corner */}
                      <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[18px] border-l-transparent border-b-[18px] border-b-stone-800/90" />
                    </div>
                    {/* Back paper layer */}
                    <div className="absolute -bottom-1.5 -right-1.5 w-32 lg:w-40 h-20 lg:h-24 bg-stone-800/50 rounded-md border border-stone-600/40 -rotate-6 -z-10" />
                  </div>
                </div>
              </div>
            </Link>
          </section>

          {/* Latest — 3 cards */}
          <section className="pt-20 md:pt-24 pb-20 md:pb-24">
            <h2 className="text-2xl md:text-3xl font-serif font-normal text-stone-950 mb-8">
              Latest from Cogerphere
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/research" className="rounded-2xl border border-stone-200 bg-white p-6 hover:border-stone-300 hover:shadow-lg transition-all group">
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">Research</span>
                <h3 className="text-xl font-semibold text-stone-950 mt-2 mb-2 group-hover:text-teal-700 transition-colors">
                  Context Intelligence Framework
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Adaptive compression and drift detection for LLM context windows.
                </p>
                <span className="inline-flex items-center gap-1 text-teal-600 font-medium mt-4 text-sm">
                  Read more <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="https://cogy01.vercel.app/" className="rounded-2xl border border-stone-200 bg-white p-6 hover:border-stone-300 hover:shadow-lg transition-all group">
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">Product</span>
                <h3 className="text-xl font-semibold text-stone-950 mt-2 mb-2 group-hover:text-teal-700 transition-colors">
                  Clox - Smart Contract Builder
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Generate production-ready smart contracts from natural language.
                </p>
                <span className="inline-flex items-center gap-1 text-teal-600 font-medium mt-4 text-sm">
                  Try Clox <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/news" className="rounded-2xl border border-stone-200 bg-white p-6 hover:border-stone-300 hover:shadow-lg transition-all group">
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">News</span>
                <h3 className="text-xl font-semibold text-stone-950 mt-2 mb-2 group-hover:text-teal-700 transition-colors">
                  Updates & announcements
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Stay informed on research, product releases, and company news.
                </p>
                <span className="inline-flex items-center gap-1 text-teal-600 font-medium mt-4 text-sm">
                  View news <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </section>

          {/* How we work — 4 pill cards */}
          <section className="pt-20 md:pt-24 pb-20 md:pb-24">
            <div className="bg-white rounded-2xl border border-stone-200 px-8 md:px-12 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-serif font-normal text-stone-950 mb-8">
              How we work
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                  <FlaskConical className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-950 mb-1">Research-first</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">We start with hard problems before they scale.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Shield className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-950 mb-1">Safety by default</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Every system is designed to fail safely.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center shrink-0">
                  <Eye className="h-6 w-6 text-stone-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-950 mb-1">Transparent</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">We share what we learn. Open where it matters.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                  <Heart className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-950 mb-1">Human-aligned</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Innovation that serves long-term well-being.</p>
                </div>
              </div>
            </div>
            </div>
          </section>

          {/* Product — Clox */}
          <section className="pt-20 md:pt-24 pb-20 md:pb-24">
            <div className="bg-white rounded-2xl border border-stone-200 p-10 md:p-14">
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div>
                  <span className="inline-block px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-semibold mb-6">
                    Clox
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal mb-6 text-stone-950 tracking-tight">
                    Generate production-ready smart contracts with AI
                  </h2>
                  <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                    Clox turns natural language into production-ready smart contracts. Failproof architecture, built-in security scanning, and multi-chain deployment so you ship with confidence.
                  </p>
                  <Button
                    asChild
                    className="bg-teal-600 text-white hover:bg-teal-700 rounded-xl font-bold text-base px-8 py-3.5"
                  >
                    <Link href="https://cogy01.vercel.app/" className="flex items-center gap-2">
                      Try Clox <ChevronRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                      <Shield className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-950 mb-1">Secure by Default</h3>
                      <p className="text-stone-600 text-sm">Built-in security best practices and automated vulnerability scanning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                      <Zap className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-950 mb-1">AI-Powered</h3>
                      <p className="text-stone-600 text-sm">Generate contracts from natural language with intelligent automation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                      <Globe className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-950 mb-1">Multi-Chain Support</h3>
                      <p className="text-stone-600 text-sm">Deploy to Ethereum, Polygon, Base, and more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* From the lab */}
          <section className="pt-20 md:pt-24 pb-24 md:pb-32">
            <h2 className="text-2xl md:text-3xl font-serif font-normal text-stone-950 mb-8">
              From the lab
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-stone-200 bg-white p-8">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-stone-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-950 mb-2">CIF SDK</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  Context Intelligence Framework — CLI and IDE plugin for adaptive context compression. Coming soon.
                </p>
                <Link href="/research" className="text-teal-600 font-medium text-sm hover:underline">
                  Learn more →
                </Link>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white p-8">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center mb-4">
                  <FlaskConical className="h-6 w-6 text-stone-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-950 mb-2">Ongoing research</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  We're exploring alignment, interpretability, and safe deployment. More to share soon.
                </p>
                <Link href="/research" className="text-teal-600 font-medium text-sm hover:underline">
                  Explore research →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
