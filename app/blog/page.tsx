import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";
import { blogPosts } from "@/lib/blog-content";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

const categoryStyles: Record<string, string> = {
  Product: "text-teal-600",
  Research: "text-teal-600",
  Company: "text-teal-600",
};

export default function BlogPage() {
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
              Blog
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl">
              Product launches, research philosophy, and long-form updates from the Cogerphere team.
            </p>
          </section>

          <section className="pb-24 md:pb-32">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl border border-stone-200 bg-white overflow-hidden hover:border-stone-300 hover:shadow-lg transition-all group"
                >
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 relative aspect-[16/10] md:aspect-auto md:min-h-[240px] bg-stone-900">
                      <Image
                        src={post.heroImage}
                        alt={post.heroImageAlt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                    <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider ${categoryStyles[post.category] ?? "text-stone-600"}`}
                        >
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
                      <h2 className="text-xl md:text-2xl font-semibold text-stone-950 mb-3 group-hover:text-teal-700 transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-stone-600 leading-relaxed">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-teal-700 font-medium mt-4 text-sm">
                        Read article
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
