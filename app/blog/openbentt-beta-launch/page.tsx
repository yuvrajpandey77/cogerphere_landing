import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";
import { Button } from "@/components/ui/button";
import { getBlogPost } from "@/lib/blog-content";
import { OPENBENTT_URL } from "@/lib/site-content";

const post = getBlogPost("openbentt-beta-launch")!;

const PROSE =
  "text-lg text-stone-600 leading-relaxed [&>p+p]:mt-6 [&>h2]:mt-14 [&>h2]:mb-6 [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-serif [&>h2]:font-normal [&>h2]:text-stone-950 [&>h2]:tracking-tight";

export default function OpenbenttBetaLaunchPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 flex flex-col">
      <LandingHeader />

      <main className="relative flex-1">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-40 left-10 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30" />
        </div>

        <article className="relative z-10">
          {/* Hero */}
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

            <p className="text-xl text-stone-600 leading-relaxed">
              Today marks the beta launch of Openbentt — a local-first AI research workspace built by
              Cogerphere for researchers, developers, and privacy-conscious professionals.
            </p>
          </header>

          {/* Hero image */}
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 md:mb-16">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-stone-200 shadow-lg bg-stone-900">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <p className="text-sm text-stone-500 mt-3 text-center">
              Openbentt — your research stays on your machine.
            </p>
          </div>

          {/* Article body */}
          <div className={`max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 md:pb-24 ${PROSE}`}>
            <p>
              The AI landscape is moving faster than almost any other software category in history.
              New models appear every month. Reasoning improves. Inference gets cheaper. Developer
              tools get sharper. And yet, for all this progress, the actual experience of doing
              serious research still feels fragmented, fragile, and too dependent on cloud systems
              that users do not fully control.
            </p>

            <p>That gap is exactly why we built Openbentt.</p>

            <p>
              Today marks the beta launch of Openbentt, a local-first AI research workspace built by
              Cogerphere for researchers, developers, students, academic teams, and
              privacy-conscious professionals who need more than a chat interface. We built it
              because research work is still too scattered across too many tools: one app for LaTeX,
              another for PDFs, another for citations, another for AI assistance, another for local
              models, and another for benchmarking. That workflow is inefficient, and for sensitive
              work, it is often not acceptable.
            </p>

            <p>Openbentt exists to solve that.</p>

            <h2>Why We Built Openbentt</h2>

            <p>
              The core idea behind Openbentt is simple: your research should not leave your machine.
            </p>

            <p>
              That idea matters more every day. Researchers are increasingly working with unpublished
              papers, thesis drafts, internal analysis, legal material, financial reasoning, and
              confidential datasets. Sending all of that into cloud-based tools can create privacy
              concerns, compliance concerns, and long-term ownership concerns.
            </p>

            <p>
              At the same time, local AI has become much more practical than it used to be. Modern
              quantized models, better runtimes, and more powerful consumer hardware have made it
              possible to run serious workflows on-device. That shift opens the door to a very
              different kind of AI product: one that is not just smart, but controllable. One that
              does not force users into a single vendor relationship. One that respects the fact that
              the most valuable data often belongs where it was created.
            </p>

            <p>Openbentt was built around that belief.</p>

            <h2>What Openbentt Is</h2>

            <p>
              Openbentt is a local-first AI research workspace designed to bring the entire research
              flow into one place.
            </p>

            <p>
              It combines LaTeX editing, PDF workflows, citations, AI-assisted writing, local model
              support, multi-model comparison, benchmarking, and self-host-ready architecture. Instead
              of jumping between separate tools, users can work inside one environment designed for
              serious research.
            </p>

            <p>
              This matters because the best research workflow is not just about having a model to ask
              questions. It is about having a system that understands the full context of the work:
              the document, the references, the source files, the revisions, the reasoning, and the
              final output.
            </p>

            <p>Openbentt is our attempt to build that system.</p>

            <p>
              We are not trying to be another generic AI wrapper. We are building an actual research
              environment.
            </p>

            {/* Product screenshot */}
            <figure className="my-12 -mx-2 sm:mx-0">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-900">
                <Image
                  src="/openbentt-launch.png"
                  alt="Openbentt workspace — LaTeX editor, PDF preview, AI assistant, and model benchmarking in one interface"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <figcaption className="text-sm text-stone-500 mt-3 text-center">
                LaTeX editing, PDF workflows, AI assistance, and model benchmarking — all in one workspace.
              </figcaption>
            </figure>

            <h2>The Problem With Current AI Research Workflows</h2>

            <p>
              Most current AI tools are still built around a cloud-first assumption. That is fine for
              casual tasks, but it breaks down when the work becomes sensitive, technical, or deeply
              iterative.
            </p>

            <p>
              A researcher might draft in one place, manage citations in another, annotate PDFs
              elsewhere, and then copy sections into an AI model to improve wording or structure. That
              means the user has to constantly move context between tools. Context gets lost. Version
              control gets messy. Privacy gets weaker. The workflow becomes harder than the research
              itself.
            </p>

            <p>Openbentt is meant to collapse that fragmentation.</p>

            <p>The goal is not just convenience. The goal is a better research operating model.</p>

            <h2>Why Local-First Matters</h2>

            <p>
              Local-first software is not a trend. It is a response to a real shift in how people think
              about digital ownership.
            </p>

            <p>
              When a workflow runs locally, users can decide what stays on their machine, what gets
              shared, what gets synced, and which models they trust. They are not forced to accept a
              single cloud provider&apos;s rules for storage, retention, or access.
            </p>

            <p>
              That matters in academia. It matters in law. It matters in finance. It matters in R&amp;D.
              It matters anywhere that unpublished or confidential work is part of the daily process.
            </p>

            <p>Openbentt is built for that reality.</p>

            <p>
              It is designed to support local models, offline-style workflows, and flexible deployment
              paths. For some users, that means running on-device models directly. For others, it means
              using preferred providers while keeping the workspace structure local and controlled. For
              institutions, it opens the possibility of self-hosted research environments.
            </p>

            <p>That flexibility is part of the product philosophy.</p>

            <h2>Meridian 0.1: The Next Layer</h2>

            <p>
              Alongside Openbentt, we are also developing Meridian 0.1, our in-house AI research
              initiative.
            </p>

            <p>
              Meridian is being designed as a reasoning-focused system for advanced research writing,
              deep research, legal workflows, financial reasoning, and structured synthesis. This is not
              about chasing hype or pretending to be a frontier lab. It is about building
              domain-focused intelligence that improves real workflows.
            </p>

            <p>That distinction matters.</p>

            <p>
              We see Meridian as a long-term layer inside the broader Cogerphere ecosystem, not as a
              standalone novelty project. Its role is to deepen the capability of Openbentt and
              eventually expand into more specialized research and professional reasoning environments.
            </p>

            <p>
              In practical terms, Meridian represents the next phase of the platform: not just a
              workspace, but an intelligence layer tuned for serious knowledge work.
            </p>

            <h2>What the Beta Means</h2>

            <p>
              The beta launch is an important milestone, but it is not the finish line. It means the
              product is real, usable, and ready for feedback from early users who care about research
              quality, workflow depth, and local control.
            </p>

            <p>
              Beta is where we learn what matters most. Which workflows are natural. Which features
              reduce friction. Which use cases are strongest. Which users get value fastest. Which
              parts of the product deserve deeper investment.
            </p>

            <p>That is why we are launching now.</p>

            <p>
              A serious product is not built in isolation. It is built by getting into the hands of the
              people it is meant to serve, then refining quickly based on real usage.
            </p>

            <h2>Why Cogerphere Exists</h2>

            <p>Openbentt is part of a broader mission at Cogerphere.</p>

            <p>
              Cogerphere is a research and software company focused on building next-generation AI
              infrastructure, developer tools, and research systems. Our long-term direction is bigger
              than one product. We are building toward a future where AI tools are more open, more
              controllable, more local, and more aligned with how serious users actually work.
            </p>

            <p>
              That means creating systems that are not only technically strong, but also trustworthy
              and adaptable. It means building with a real understanding of research workflows,
              privacy constraints, and the need for long-term ownership.
            </p>

            <p>Openbentt is the first major expression of that mission.</p>

            <h2>Open for Pre-Seed Funding</h2>

            <p>
              As we move through beta and expand the platform, we are also open for pre-seed funding
              conversations.
            </p>

            <p>
              We are particularly interested in working with investors and strategic partners who
              understand: local-first AI, developer tools, research infrastructure, privacy-first
              systems, enterprise AI workflows, and the broader shift toward sovereign AI environments.
            </p>

            <p>
              We are not looking for money just to exist. We are looking for aligned capital that can
              help accelerate product development, strengthen distribution, support the growth of
              Meridian, and expand Openbentt into a more complete AI research platform.
            </p>

            <p>
              The opportunity here is not just to build another productivity app. It is to help define
              a new category: the AI-native research workspace.
            </p>

            <h2>What Comes Next</h2>

            <p>The beta launch is only the beginning.</p>

            <p>
              Over the next phase, we will continue improving the product experience, expanding the
              research workflow, deepening model support, refining the local-first architecture, and
              building out the long-term Meridian roadmap. We will also keep listening closely to
              researchers, developers, and technical users who can help shape what this platform
              becomes.
            </p>

            <p>The direction is clear.</p>

            <p>We want to make research faster, cleaner, and more controllable.</p>

            <p>We want to reduce tool fragmentation.</p>

            <p>We want to make local AI useful for real work.</p>

            <p>We want to build a product that respects both intelligence and ownership.</p>

            <p>That is the future we are building toward.</p>

            <h2>Closing</h2>

            <p>
              Openbentt is now in beta, and this is just the first chapter.
            </p>

            <p>
              If you care about local-first AI, research tooling, privacy, model flexibility, or the
              future of AI-native workspaces, we would love for you to follow along, try the product,
              and share feedback.
            </p>

            <div className="mt-10 space-y-4 not-prose">
              <p className="text-lg text-stone-950 font-medium">Explore Openbentt:</p>
              <a
                href={OPENBENTT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors"
              >
                https://openbentt.cogerphere.com/
                <ExternalLink className="h-4 w-4" />
              </a>

              <p className="text-lg text-stone-950 font-medium pt-4">Learn more about Cogerphere:</p>
              <a
                href="https://cogerphere.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors"
              >
                https://cogerphere.com/
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <p className="text-stone-950 font-medium">We are building for the long term.</p>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 md:pb-32">
            <div className="rounded-2xl border border-stone-200 bg-stone-900 text-white p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-sm text-teal-300 font-semibold uppercase tracking-wider mb-2">
                  Openbentt Beta is Live
                </p>
                <p className="text-lg text-white/90">
                  Try the local-first AI research workspace — LaTeX, PDFs, citations, and model
                  benchmarking in one place.
                </p>
              </div>
              <Button
                asChild
                className="bg-teal-600 text-white hover:bg-teal-700 rounded-xl font-semibold px-6 py-3 shrink-0"
              >
                <a href={OPENBENTT_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Download Openbentt
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
