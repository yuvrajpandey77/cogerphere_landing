import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";
import { PersonCard } from "@/components/people/person-card";
import { getResearchers } from "@/lib/people-content";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

export default function ResearchersPage() {
  const researchers = getResearchers();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <LandingHeader />

      <main className="relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-30" />
        </div>

        <div className={`relative z-10 ${CONTENT_CLASS}`}>
          <section className="pt-20 pb-16 md:pt-28 md:pb-20">
            <Link
              href="/people"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-800 mb-8 transition-colors"
            >
              All people
              <ChevronRight className="h-4 w-4" />
            </Link>

            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
              Applied AI Research
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-8 text-stone-950 tracking-tight">
              Researchers
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-3xl">
              The people advancing Cogerphere&apos;s research agenda — context intelligence,
              on-device models, and the science behind our products.
            </p>
          </section>

          <section className="py-16 md:py-20 border-t border-stone-200 pb-24 md:pb-32">
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {researchers.map((person) => (
                <PersonCard key={person.slug} person={person} showResearchLink />
              ))}
            </div>
          </section>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
