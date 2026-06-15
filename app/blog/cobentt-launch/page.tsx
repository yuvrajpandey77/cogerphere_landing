import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";
import { Button } from "@/components/ui/button";
import { getBlogPost } from "@/lib/blog-content";
import {
  COBENTT_URL,
  COBENTT_INSTALL_URL,
  COBENTT_SETUP_URL,
  COBENTT_GITHUB_URL,
  OPENBENTT_URL,
} from "@/lib/site-content";

const post = getBlogPost("cobentt-launch")!;

const PROSE =
  "text-lg text-stone-600 leading-relaxed [&>p+p]:mt-6 [&>h2]:mt-14 [&>h2]:mb-6 [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-serif [&>h2]:font-normal [&>h2]:text-stone-950 [&>h2]:tracking-tight [&>ul]:mt-4 [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-6";

export default function CobenttLaunchPage() {
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
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
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
            <div className="max-w-xs mx-auto rounded-2xl overflow-hidden border border-stone-200 shadow-lg bg-white p-10 md:p-14">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                width={512}
                height={512}
                priority
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 80vw, 320px"
              />
            </div>
            <p className="text-sm text-stone-500 mt-3 text-center">
              Cobentt — mobile AI chat by Cogerphere
            </p>
          </div>

          <div className={`max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 md:pb-24 ${PROSE}`}>
            <p>
              Cobentt is Cogerphere&apos;s mobile AI chat app. Install it from the browser, connect your own
              model access, and chat with hundreds of models — no app store required.
            </p>

            <h2>Install-focused, privacy-first</h2>
            <p>
              Add Cobentt to your home screen for a full-screen AI chat app. Same privacy model as Openbentt:
              credentials and history stay local. There is no Cobentt account — if you want cloud models, you
              connect access from your preferred model provider.
            </p>
            <p>
              Inference routes directly to your chosen provider (or your own local server) — not through a
              Cobentt backend for chat. Credentials are stored in localStorage on your device. Chat history
              stays in the browser.
            </p>

            <h2>What you get</h2>
            <ul>
              <li>Streaming chat with hundreds of cloud models</li>
              <li>Multi-model compare side by side</li>
              <li>File attachments and local chat history</li>
              <li>Dark UI tuned for mobile</li>
              <li>Free-tier cloud models supported</li>
            </ul>

            <h2>Get started</h2>
            <p>
              Cobentt is not an APK or IPA download. Install via Add to Home Screen on iOS Safari, or Install
              app / Add to Home screen in Chrome or Edge on Android. On desktop, use the chat URL directly in
              your browser.
            </p>
            <ul>
              <li>
                <strong>iPhone (Safari):</strong> Open link → Share → Add to Home Screen → open Cobentt from
                home screen
              </li>
              <li>
                <strong>Android (Chrome):</strong> Open link → menu → Install app or Add to Home screen
              </li>
              <li>
                <strong>Desktop browser:</strong> Use{" "}
                <a href={COBENTT_URL} className="text-teal-700 hover:underline">
                  openbentt.vercel.app/chat
                </a>{" "}
                directly (optional install in Chrome/Edge)
              </li>
            </ul>

            <h2>Need the full research workspace?</h2>
            <p>
              Cobentt is built for quick mobile chat. For LaTeX, PDFs, benchmarking, and on-device models, see{" "}
              <a href={OPENBENTT_URL} className="text-teal-700 hover:underline">
                Openbentt for desktop
              </a>
              . Both products share the same codebase and privacy philosophy — Cobentt currently lives on the
              Openbentt deploy at <code className="text-sm bg-stone-100 px-1.5 py-0.5 rounded">/chat</code>.
            </p>

            <div className="mt-12 rounded-2xl border border-stone-200 bg-white p-8 md:p-10">
              <p className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-4">
                Live links
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Button asChild className="bg-teal-600 text-white hover:bg-teal-700 rounded-xl">
                  <a href={COBENTT_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Open Cobentt <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl border-2 border-stone-300">
                  <a
                    href={COBENTT_INSTALL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Install on mobile <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl border-2 border-stone-300">
                  <a href={COBENTT_SETUP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    First-time setup <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl border-2 border-stone-300">
                  <a href={COBENTT_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Source on GitHub <ExternalLink className="h-4 w-4" />
                  </a>
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
