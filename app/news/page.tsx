import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";
import { announcements } from "@/lib/site-content";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

const categoryStyles: Record<string, string> = {
  Product: "text-teal-600",
  Research: "text-teal-600",
  Model: "text-teal-600",
  Company: "text-teal-600",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 flex flex-col">
      <LandingHeader />

      <main className="relative flex-1">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-40 left-10 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30" />
        </div>
        <div className={`relative z-10 ${CONTENT_CLASS}`}>
          <section className="pt-20 pb-12 md:pt-28 md:pb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-6 text-stone-950 tracking-tight">
              News & Updates
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl">
              Announcements, product launches, and research from Cogerphere — including Cobentt, Openbentt, RRbench, and our upcoming Meridian 0.1 model.{" "}
              <Link href="/blog" className="text-teal-700 hover:underline font-medium">
                Read the blog
              </Link>{" "}
              for long-form updates.
            </p>
          </section>

          <section className="pb-24 md:pb-32">
            <div className="space-y-6">
              {announcements.map((item) => {
                const cardContent = (
                  <>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${categoryStyles[item.category] ?? "text-stone-600"}`}
                      >
                        {item.category}
                      </span>
                      <span className="text-xs text-stone-400">{item.date}</span>
                      {item.badge && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-stone-950 mb-2 group-hover:text-teal-700 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-stone-600 leading-relaxed max-w-3xl">{item.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-teal-700 font-medium mt-4 text-sm">
                      {item.external ? "Learn more" : "Read more"}
                      {item.external ? (
                        <ExternalLink className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </span>
                  </>
                );
                const cardClass =
                  "block rounded-2xl border border-stone-200 bg-white p-6 md:p-8 hover:border-stone-300 hover:shadow-lg transition-all group";

                return item.external ? (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <Link key={item.id} href={item.href} className={cardClass}>
                    {cardContent}
                  </Link>
                );
              })}
            </div>

            <div className="mt-12 rounded-2xl border border-stone-200 bg-stone-900 text-white p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-sm text-teal-300 font-semibold uppercase tracking-wider mb-2">
                  Follow our research
                </p>
                <p className="text-lg text-white/90">
                  Updates on Cobentt, Openbentt, RRbench, Meridian, and CIF land here first — and on{" "}
                  <a
                    href="https://x.com/cogerphere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 hover:underline"
                  >
                    @cogerphere
                  </a>
                  .
                </p>
              </div>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors shrink-0"
              >
                Explore research <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
