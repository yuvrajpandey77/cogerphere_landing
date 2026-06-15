import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";
import { Button } from "@/components/ui/button";
import { getBlogPost } from "@/lib/blog-content";
import { RRBENCH_GITHUB_URL } from "@/lib/site-content";

const post = getBlogPost("rrbench-preview")!;

const PROSE =
  "text-lg text-stone-600 leading-relaxed [&>p+p]:mt-6 [&>h2]:mt-14 [&>h2]:mb-6 [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-serif [&>h2]:font-normal [&>h2]:text-stone-950 [&>h2]:tracking-tight [&>ul]:mt-4 [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-6 [&>table]:mt-6 [&>table]:w-full [&>table]:text-sm [&>th]:text-left [&>th]:pb-3 [&>th]:font-semibold [&>th]:text-stone-950 [&>td]:py-2 [&>td]:border-t [&>td]:border-stone-200";

export default function RrbenchPreviewPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 flex flex-col">
      <LandingHeader />

      <main className="relative flex-1">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-40 left-10 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30" />
        </div>

        <article className="relative z-10">
          <header className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 md:pt-28 pb-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-800 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                {post.category}
              </span>
              <span className="text-xs text-stone-400">{post.date}</span>
              <span className="text-xs text-stone-400">{post.readTime}</span>
              {post.badge && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  {post.badge}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-stone-950 tracking-tight leading-[1.1] mb-8">
              {post.title}
            </h1>

            <p className="text-xl text-stone-600 leading-relaxed">{post.excerpt}</p>
          </header>

          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 md:mb-16">
            <div className="relative aspect-[16/9] max-w-2xl mx-auto rounded-2xl overflow-hidden border border-stone-200 shadow-lg bg-stone-900 flex items-center justify-center">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                width={256}
                height={256}
                priority
                className="object-contain p-12"
              />
            </div>
            <p className="text-sm text-stone-500 mt-3 text-center">
              RRbench (ResearchBench) — early phase · Verdict: Promising
            </p>
          </div>

          <div className={`max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 md:pb-24 ${PROSE}`}>
            <p>
              Research trust and reproducibility are universally acknowledged problems — and they get harder
              every year as AI-driven science accelerates. Citations and journal reputation alone are no longer
              sufficient signals for modern papers, especially in AI and machine learning.
            </p>
            <p>
              <strong className="text-stone-950">RRbench</strong> (ResearchBench) is Cogerphere&apos;s answer: a
              unified, transparent, verifiable platform for assessing the credibility and reproducibility of
              scientific research — with a particular focus on AI/ML papers and complex models.
            </p>

            <h2>The vision</h2>
            <p>
              RRbench combines multiple independent signals into a single, evidence-backed{" "}
              <strong className="text-stone-950">Trust Score</strong> (0–100). Every component is inspectable —
              not a black-box rating. The goal is faster, clearer credibility assessment for researchers and
              institutions who need more than citation counts.
            </p>

            <h2>How trust is built</h2>
            <table>
              <thead>
                <tr>
                  <th>Signal</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AI agents</td>
                  <td>Claim extraction, evidence evaluation, verdict synthesis</td>
                </tr>
                <tr>
                  <td>Cryptographic verification</td>
                  <td>SHA-256 artifact integrity, immutable audit logs</td>
                </tr>
                <tr>
                  <td>Community + expert review</td>
                  <td>Threaded reviews, professor and admin workflows</td>
                </tr>
                <tr>
                  <td>Trust Score</td>
                  <td>Transparent, evidence-backed 0–100 composite</td>
                </tr>
              </tbody>
            </table>

            <h2>Who it&apos;s for</h2>
            <p>
              AI/ML researchers, labs, and institutions evaluating papers under time pressure — when you need
              reproducibility signals, artifact checks, and structured review in one place instead of scattered
              tools and informal peer chatter.
            </p>

            <h2>Status</h2>
            <p>
              RRbench is in early development. Internal validation rates the direction as{" "}
              <strong className="text-stone-950">Promising</strong> — active work continues on the open-source
              repository, product vision, and roadmap. This is an upcoming Cogerphere product, not yet a hosted
              service.
            </p>
            <p>
              For the technical research context behind Openbentt and related tools, see our{" "}
              <Link href="/research#rrbench" className="text-teal-700 hover:underline">
                research page
              </Link>
              . Full validation reports, market analysis, and roadmap live in the repo&apos;s{" "}
              <code className="text-sm bg-stone-100 px-1.5 py-0.5 rounded">docs/PRODUCT_VISION.md</code>.
            </p>

            <div className="mt-12 rounded-2xl border border-stone-200 bg-white p-8 md:p-10">
              <p className="text-sm font-semibold text-amber-800 uppercase tracking-wider mb-2">
                Upcoming product
              </p>
              <p className="text-stone-600 mb-6">
                Follow development on GitHub and check{" "}
                <Link href="/news" className="text-teal-700 hover:underline font-medium">
                  News
                </Link>{" "}
                for launch updates.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-teal-600 text-white hover:bg-teal-700 rounded-xl">
                  <a href={RRBENCH_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    View on GitHub <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl border-2 border-stone-300">
                  <Link href="/research#rrbench" className="flex items-center gap-2">
                    Research overview <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
