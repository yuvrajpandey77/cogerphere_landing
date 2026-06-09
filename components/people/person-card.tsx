import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Person } from "@/lib/people-content";

type PersonCardProps = {
  person: Person;
  href?: string;
  showResearchLink?: boolean;
};

export function PersonCard({ person, href, showResearchLink = false }: PersonCardProps) {
  const profileHref = href ?? (person.isResearcher ? `/researchers/${person.slug}` : undefined);
  const cardContent = (
    <>
      <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border border-stone-200 bg-stone-100 shadow-sm">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.imageAlt ?? person.name}
            fill
            className="object-cover object-top"
            sizes="160px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-teal-50 text-3xl font-serif text-teal-700">
            {person.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </div>
        )}
      </div>

      <h3 className="text-xl font-semibold text-stone-950">{person.name}</h3>
      <p className="mt-2 text-sm font-medium text-teal-700">{person.roles.join(" · ")}</p>
      {person.focus && (
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-stone-400">
          {person.focus}
        </p>
      )}
      <p className="mt-4 text-sm leading-relaxed text-stone-600">{person.shortBio}</p>

      {showResearchLink && person.isResearcher && profileHref && (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
          View research profile
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </>
  );

  if (profileHref) {
    return (
      <Link
        href={profileHref}
        className="group block rounded-2xl border border-stone-200 bg-white p-8 text-center transition-all hover:border-stone-300 hover:shadow-lg"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-8 text-center">
      {cardContent}
    </article>
  );
}
