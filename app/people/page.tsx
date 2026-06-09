import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";
import { PersonCard } from "@/components/people/person-card";
import { getPeopleByTier, getResearchers } from "@/lib/people-content";
import { Button } from "@/components/ui/button";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

export default function PeoplePage() {
  const groups = getPeopleByTier();
  const researchers = getResearchers();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <LandingHeader />

      <main className="relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-30" />
        </div>

        <div className={`relative z-10 ${CONTENT_CLASS}`}>
          <section className="pt-20 pb-16 md:pt-28 md:pb-20">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
              Cogerphere AI Labs
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-8 text-stone-950 tracking-tight">
              People
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-3xl">
              The team behind Cogerphere — from leadership and engineering to the researchers
              building context-aware, local-first intelligence.
            </p>
          </section>

          {groups.map((group) => (
            <section key={group.tier} className="py-16 md:py-20 border-t border-stone-200">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                    Team
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-normal text-stone-950 mt-2">
                    {group.label}
                  </h2>
                </div>
                {group.tier === "leadership" && researchers.length > 0 && (
                  <Link
                    href="/researchers"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors"
                  >
                    View researchers
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                )}
              </div>

              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {group.members.map((person) => (
                  <PersonCard
                    key={person.slug}
                    person={person}
                    showResearchLink={person.isResearcher}
                  />
                ))}
              </div>
            </section>
          ))}

          <section className="pt-16 pb-24 md:pt-20 md:pb-32 border-t border-stone-200">
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-6 text-stone-950">
              Join the team
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl leading-relaxed mb-8">
              We&apos;re building research-grade AI that stays on your machine. If that mission
              resonates, we&apos;d like to hear from you.
            </p>
            <Button asChild size="lg" className="bg-teal-600 text-white hover:bg-teal-700 rounded-xl font-bold px-8 py-4">
              <Link href="/careers" className="flex items-center gap-2">
                Careers
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
          </section>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
