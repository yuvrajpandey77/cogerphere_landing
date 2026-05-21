import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Home",
  description:
    "Cogerphere AI research lab — Openbentt local-first research workspace, Meridian 0.1 on-device AI, Context Intelligence Framework, and Clox smart contracts.",
  path: "/",
  openGraphTitle: "Home | Cogerphere AI Labs",
});
import { ChevronRight, Shield, Zap, Globe, FlaskConical, Eye, Heart, BookOpen, Laptop, FileText, Cpu } from "lucide-react";
import { OPENBENTT_URL } from "@/lib/site-content";
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
              We expand the sphere of what systems can understand and uphold — from local-first research tools like Openbentt to context-aware LLMs, on-device models, and secure smart contracts.
            </p>
          </section>

          {/* Featured — distinct card: smaller type, left accent, clear hierarchy */}
          <section className="pb-20 md:pb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px flex-1 max-w-16 bg-stone-300" aria-hidden />
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-[0.2em]">Spotlight</span>
              <span className="h-px flex-1 bg-stone-300" aria-hidden />
            </div>
            <a
              href={OPENBENTT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border-2 border-stone-200 bg-gradient-to-br from-teal-50 via-white to-amber-50 hover:border-teal-400/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative flex flex-col lg:flex-row">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal-600" aria-hidden />
                <div className="p-8 md:p-10 lg:p-12 pl-10 md:pl-11 flex-1 min-w-0">
                  <span className="inline-block text-xs font-semibold text-teal-700 uppercase tracking-[0.2em] mb-4">
                    Phase 1 · 2026
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal tracking-tight mb-3 max-w-2xl text-stone-950">
                    Your research should not leave your machine.
                  </h2>
                  <p className="text-base md:text-lg text-stone-600 max-w-xl leading-relaxed mb-6">
                    Openbentt is a local-first AI workspace for LaTeX, PDFs, benchmarking, and fine-tuned small models — built for researchers, by researchers.
                  </p>
                  <span className="inline-flex items-center gap-2 text-teal-700 font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore Openbentt <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="relative lg:w-[45%] shrink-0 p-6 lg:p-8 lg:pl-0">
                  <Image
                    src="/openbentt-launch.png"
                    alt="Openbentt — local-first AI workspace for researchers"
                    width={640}
                    height={400}
                    className="rounded-xl border border-stone-200/80 shadow-lg group-hover:scale-[1.01] transition-transform duration-300 w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </a>
          </section>

          {/* Latest — 3 cards */}
          <section className="pt-20 md:pt-24 pb-20 md:pb-24">
            <h2 className="text-2xl md:text-3xl font-serif font-normal text-stone-950 mb-8">
              Latest from Cogerphere
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href={OPENBENTT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-stone-200 bg-white p-6 hover:border-stone-300 hover:shadow-lg transition-all group"
              >
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">Product · New</span>
                <h3 className="text-xl font-semibold text-stone-950 mt-2 mb-2 group-hover:text-teal-700 transition-colors">
                  Openbentt Phase 1
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Local-first workspace for LaTeX, PDFs, and on-device model benchmarks — no cloud layer required.
                </p>
                <span className="inline-flex items-center gap-1 text-teal-700 font-medium mt-4 text-sm">
                  Get Openbentt <ChevronRight className="h-4 w-4" />
                </span>
              </a>
              <Link href="/research#meridian" className="rounded-2xl border border-stone-200 bg-white p-6 hover:border-stone-300 hover:shadow-lg transition-all group">
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">Model · Upcoming</span>
                <h3 className="text-xl font-semibold text-stone-950 mt-2 mb-2 group-hover:text-teal-700 transition-colors">
                  Meridian 0.1
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Our local research AI for proofreading, LaTeX workflows, and research writing — runs entirely on your hardware.
                </p>
                <span className="inline-flex items-center gap-1 text-teal-700 font-medium mt-4 text-sm">
                  Learn more <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/news" className="rounded-2xl border border-stone-200 bg-white p-6 hover:border-stone-300 hover:shadow-lg transition-all group">
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">News</span>
                <h3 className="text-xl font-semibold text-stone-950 mt-2 mb-2 group-hover:text-teal-700 transition-colors">
                  Updates & announcements
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Openbentt launch, Meridian 0.1 preview, CIF research, and more from the lab.
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

          {/* Product — Openbentt */}
          <section className="pt-20 md:pt-24 pb-12 md:pb-16">
            <div className="bg-white rounded-2xl border border-stone-200 p-10 md:p-14 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div>
                  <span className="inline-block px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-semibold mb-6">
                    Openbentt
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal mb-6 text-stone-950 tracking-tight">
                    Local-first AI for serious research
                  </h2>
                  <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                    Write and compile LaTeX, analyze PDFs, compare 2–4 models side-by-side, and benchmark GGUF and WebGPU backends — all on your machine. No hosted accounts, no prompt retention.
                  </p>
                  <Button
                    asChild
                    className="bg-teal-600 text-white hover:bg-teal-700 rounded-xl font-bold text-base px-8 py-3.5"
                  >
                    <a href={OPENBENTT_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Get Openbentt <ChevronRight className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                      <Laptop className="h-6 w-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-950 mb-1">Local by default</h3>
                      <p className="text-stone-600 text-sm">Inference, history, and attachments stay on your hardware — Windows, macOS, and Linux.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                      <FileText className="h-6 w-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-950 mb-1">LaTeX & PDF workflows</h3>
                      <p className="text-stone-600 text-sm">Edit, compile, and preview papers without leaving the app. Analyze attachments locally.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                      <Cpu className="h-6 w-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-950 mb-1">Powered by Meridian</h3>
                      <p className="text-stone-600 text-sm">Built for our upcoming Meridian 0.1 model — optimized for proofreading, LaTeX, and research writing on-device.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product — Clox */}
          <section className="pb-20 md:pb-24">
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
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-stone-200 bg-white p-8">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-semibold text-stone-950 mb-2">Meridian 0.1</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  Our upcoming local research model — proofreading, LaTeX performance, and research writing without the cloud. Launching soon in Openbentt.
                </p>
                <Link href="/research#meridian" className="text-teal-700 font-medium text-sm hover:underline">
                  About Meridian →
                </Link>
              </div>
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
                <h3 className="text-xl font-semibold text-stone-950 mb-2">Context Intelligence</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  Threshold-triggered drift detection and selective compression for LLM context windows.
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
