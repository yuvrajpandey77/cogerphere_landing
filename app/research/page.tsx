import Link from "next/link";
import { ChevronRight, Cpu, AlertTriangle, Zap, Gauge, FileText, Shield, Sparkles, FlaskConical, Scale, Users, Lock } from "lucide-react";
import { OPENBENTT_URL, RRBENCH_GITHUB_URL, RRBENCH_BLOG_PATH } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

export default function ResearchPage() {
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
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
            Applied AI Research + Open-Source Engineering
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-8 text-stone-950 tracking-tight">
            Context Intelligence Framework
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 mb-12 leading-relaxed max-w-3xl">
            Adaptive compression, drift detection, and threshold-gated validation for large language model context windows.
          </p>
          <blockquote className="border-l-4 border-teal-600 pl-6 py-2 text-lg text-stone-600 italic">
            How can a threshold-triggered secondary agent detect context drift and selectively compress stale context to extend effective LLM context utilization — without degrading answer quality or increasing end-to-end latency beyond acceptable bounds?
          </blockquote>
      </section>

      {/* Meridian 0.1 */}
      <section id="meridian" className="py-16 md:py-20 scroll-mt-24">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
            Upcoming · Local research AI
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 text-stone-950">
            Meridian 0.1
          </h2>
          <p className="text-lg text-stone-600 mb-12 max-w-3xl leading-relaxed">
            Meridian 0.1 is Cogerphere&apos;s upcoming on-device language model, designed for researchers who need powerful AI without sending manuscripts, drafts, or data to the cloud. It will ship first inside{" "}
            <a href={OPENBENTT_URL} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline font-medium">
              Openbentt
            </a>
            .
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl p-6 bg-white border border-stone-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                <FileText className="h-6 w-6 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-950 mb-2">LaTeX & writing</h3>
                <p className="text-stone-600 text-sm">Tuned for academic workflows — structure, citations, and compile-ready output.</p>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-stone-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                <Sparkles className="h-6 w-6 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-950 mb-2">Proofreading</h3>
                <p className="text-stone-600 text-sm">Grammar, clarity, and consistency checks that run locally on your drafts.</p>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-stone-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                <Shield className="h-6 w-6 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-950 mb-2">Private by design</h3>
                <p className="text-stone-600 text-sm">Inference on CPU, GPU, or WebGPU — your prompts never leave the machine.</p>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-stone-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                <FlaskConical className="h-6 w-6 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-950 mb-2">Research-grade</h3>
                <p className="text-stone-600 text-sm">Built for serious work — papers, theses, and reproducible benchmarks, not casual chat.</p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-stone-600 max-w-3xl">
            <strong className="text-stone-950">Status:</strong> Meridian 0.1 is in active development. Follow{" "}
            <Link href="/news" className="text-teal-700 hover:underline">News</Link> for launch updates.
          </p>
      </section>

      {/* RRbench (ResearchBench) */}
      <section id="rrbench" className="py-16 md:py-20 scroll-mt-24">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold mb-6">
            Upcoming · Research verification
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-4 text-stone-950">
            RRbench <span className="text-stone-500 font-sans text-2xl md:text-3xl">(ResearchBench)</span>
          </h2>
          <p className="text-sm font-semibold text-amber-800 uppercase tracking-wider mb-6">
            Verdict: Promising · Early phase
          </p>
          <p className="text-lg text-stone-600 mb-12 max-w-3xl leading-relaxed">
            RRbench is a trust-first research verification platform — a unified, transparent, verifiable system for assessing credibility and reproducibility of scientific research, especially AI/ML papers and complex models. Traditional signals like citations and journal reputation are insufficient for modern AI-driven science.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl p-6 bg-white border border-stone-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                <Sparkles className="h-6 w-6 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-950 mb-2">AI agents</h3>
                <p className="text-stone-600 text-sm">Claim extraction, evidence evaluation, and verdict synthesis across papers and artifacts.</p>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-stone-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                <Lock className="h-6 w-6 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-950 mb-2">Artifact integrity</h3>
                <p className="text-stone-600 text-sm">SHA-256 verification, immutable audit logs, and cryptographic checks on research artifacts.</p>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-stone-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                <Users className="h-6 w-6 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-950 mb-2">Expert + community</h3>
                <p className="text-stone-600 text-sm">Threaded reviews, professor and admin workflows, and community validation layers.</p>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-stone-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <Scale className="h-6 w-6 text-amber-800" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-950 mb-2">Trust Score</h3>
                <p className="text-stone-600 text-sm">Transparent, evidence-backed 0–100 scores combining every signal — not citations alone.</p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-stone-600 max-w-3xl mb-8">
            <strong className="text-stone-950">Built for:</strong> AI/ML researchers and institutions who need faster, clearer credibility assessment beyond traditional metrics.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-teal-600 text-white hover:bg-teal-700 rounded-xl">
              <Link href={RRBENCH_BLOG_PATH} className="flex items-center gap-2">
                Read the preview <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white">
              <a href={RRBENCH_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                View on GitHub <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-xl border-2 border-stone-300 text-stone-800 hover:bg-stone-100">
              <Link href="/news" className="flex items-center gap-2">
                Follow updates <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-12 text-stone-950">
            The Core Problem
          </h2>
          <p className="text-lg text-stone-600 mb-12 max-w-3xl">
            Modern LLMs have large but finite context windows. As a session grows, compounding issues emerge:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 bg-white border border-stone-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <Cpu className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-950 mb-2">Token Budget Exhaustion</h3>
                <p className="text-stone-600">Every new token pushes an old one out. Models lose factual history they actually need.</p>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-stone-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                <AlertTriangle className="h-6 w-6 text-red-700" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-950 mb-2">Coherence Degradation</h3>
                <p className="text-stone-600">With no feedback loop, models silently drift — producing answers detached from original intent.</p>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-stone-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                <Zap className="h-6 w-6 text-orange-700" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-950 mb-2">Cost Explosion</h3>
                <p className="text-stone-600">Long contexts scale quadratically (O(n²) attention). Intelligent compression cuts cost at scale.</p>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-stone-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                <Gauge className="h-6 w-6 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-950 mb-2">Speed Penalty</h3>
                <p className="text-stone-600">Running full-context inference at 90%+ fill is measurably slower due to KV-cache pressure.</p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-stone-600 max-w-3xl">
            Existing approaches (truncation, RAG, sliding windows) solve parts of this. None provide a unified, model-agnostic, runtime-embeddable solution with anomaly detection. CIF closes that gap.
          </p>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-12 text-stone-950">
            Our Approach
          </h2>
          <div className="prose prose-lg max-w-none text-stone-600">
            <p className="text-lg mb-6">
              CIF introduces a <strong className="text-stone-950">threshold-triggered secondary agent</strong> that monitors context state, detects drift via anomaly signals, and selectively compresses stale segments — preserving semantic fidelity while reclaiming token budget.
            </p>
            <ul className="space-y-4 text-lg">
              <li><strong className="text-stone-950">Drift detection</strong> — Continuous monitoring for coherence degradation</li>
              <li><strong className="text-stone-950">Selective compression</strong> — Only compress what&apos;s safe to compress</li>
              <li><strong className="text-stone-950">Threshold-gated validation</strong> — Trigger compression only when metrics cross defined bounds</li>
            </ul>
          </div>
      </section>

      {/* Success Criteria */}
      <section className="py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-12 text-stone-950">
            Success Criteria
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl border border-stone-200 overflow-hidden">
              <thead>
                <tr className="bg-stone-100">
                  <th className="text-left p-4 font-semibold text-stone-950">Metric</th>
                  <th className="text-left p-4 font-semibold text-stone-950">Minimum Target</th>
                  <th className="text-left p-4 font-semibold text-stone-950">Stretch Target</th>
                </tr>
              </thead>
              <tbody className="text-stone-600">
                <tr className="border-t border-stone-200"><td className="p-4">Token reduction at 80% fill</td><td className="p-4">40%</td><td className="p-4">60%</td></tr>
                <tr className="border-t border-stone-200"><td className="p-4">Quality degradation (ROUGE-L, BLEU)</td><td className="p-4">&lt; 5%</td><td className="p-4">&lt; 2%</td></tr>
                <tr className="border-t border-stone-200"><td className="p-4">Drift detection precision</td><td className="p-4">&gt; 85%</td><td className="p-4">&gt; 92%</td></tr>
                <tr className="border-t border-stone-200"><td className="p-4">Drift detection recall</td><td className="p-4">&gt; 80%</td><td className="p-4">&gt; 88%</td></tr>
                <tr className="border-t border-stone-200"><td className="p-4">Compression latency (Rust kernel)</td><td className="p-4">&lt; 200ms / 100K tokens</td><td className="p-4">&lt; 80ms / 100K tokens</td></tr>
                <tr className="border-t border-stone-200"><td className="p-4">CLI tool integration</td><td className="p-4">pip install</td><td className="p-4">IDE plugin</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-stone-600">
            <strong className="text-stone-950">Stack:</strong> Python (research) + Rust (core compression runtime). Deliverable: Research paper draft + CIF SDK v0.1 (CLI/IDE plugin).
          </p>
      </section>

      {/* CTA */}
      <section className="pt-16 pb-24 md:pt-20 md:pb-32">
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 text-stone-950">
            Interested in CIF or research collaboration?
          </h2>
          <Button asChild size="lg" className="bg-teal-600 text-white hover:bg-teal-700 rounded-xl font-bold px-8 py-4">
            <Link href="/contact" className="flex items-center gap-2">
              Get in touch <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>
      </section>

        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
