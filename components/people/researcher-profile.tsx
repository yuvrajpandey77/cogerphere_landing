"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, ExternalLink, FileDown, Mail, MapPin } from "lucide-react";
import type { ResearcherProfile } from "@/lib/people-content";
import { OPENBENTT_URL } from "@/lib/site-content";
import { ReadMore } from "@/components/people/read-more";

type ResearcherProfileViewProps = {
  profile: ResearcherProfile;
};

const PROSE_BODY = "space-y-4 text-lg leading-relaxed text-stone-600";

function NarrativeLink({
  href,
  external,
  label,
}: {
  href: string;
  external?: boolean;
  label: string;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors"
      >
        {label}
        <ExternalLink className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors"
    >
      {label}
      <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

export function ResearcherProfileView({ profile }: ResearcherProfileViewProps) {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <nav className="pt-20 md:pt-28 pb-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
          <li>
            <Link href="/people" className="hover:text-teal-700 transition-colors">
              People
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/researchers" className="hover:text-teal-700 transition-colors">
              Researchers
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-stone-950 font-medium">{profile.name}</li>
        </ol>
      </nav>

      <div className="grid gap-12 pb-16 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
            <div className="relative mx-auto mb-6 aspect-square w-full max-w-[240px] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
              {profile.image ? (
                <Image
                  src={profile.image}
                  alt={profile.imageAlt ?? profile.name}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 240px, 240px"
                />
              ) : null}
            </div>

            <h1 className="text-3xl font-serif font-normal text-stone-950 tracking-tight">
              {profile.name}
            </h1>

            <div className="mt-4 space-y-2">
              {profile.roles.map((role) => (
                <p key={role} className="text-sm font-medium text-teal-700">
                  {role}
                </p>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t border-stone-200 pt-6 text-sm text-stone-600">
              {profile.affiliations?.map((affiliation) => (
                <p key={affiliation}>{affiliation}</p>
              ))}
              {profile.location && (
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" />
                  <span>{profile.location}</span>
                </p>
              )}
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-start gap-2 text-teal-700 hover:text-teal-800 transition-colors"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{profile.email}</span>
                </a>
              )}
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-teal-700 hover:text-teal-800 transition-colors"
                >
                  <FileDown className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>Download resume</span>
                </a>
              )}
            </div>

            {profile.links && profile.links.length > 0 && (
              <div className="mt-6 border-t border-stone-200 pt-6">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                  Links
                </h2>
                <ul className="space-y-2">
                  {profile.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors"
                        >
                          {link.label}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors"
                        >
                          {link.label}
                          <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>

        <div className="space-y-12 md:space-y-16 pb-20 md:pb-28">
          <section>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-stone-950 mb-6">
              About
            </h2>
            <ReadMore total={profile.about.length} limit={2}>
              {(visibleCount) => (
                <div className="space-y-5 text-lg leading-relaxed text-stone-600 max-w-3xl">
                  {profile.about.slice(0, visibleCount).map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              )}
            </ReadMore>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-stone-950 mb-6">
              Research interests
            </h2>
            <ReadMore total={profile.researchInterests.length} limit={4}>
              {(visibleCount) => (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {profile.researchInterests.slice(0, visibleCount).map((interest) => (
                    <li
                      key={interest}
                      className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm leading-relaxed text-stone-600"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              )}
            </ReadMore>
          </section>

          {profile.skillGroups && profile.skillGroups.length > 0 && (
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-stone-950 mb-6">
                Technical background
              </h2>
              <ReadMore total={profile.skillGroups.length} limit={2}>
                {(visibleCount) => (
                  <div className="space-y-8 max-w-3xl">
                    {profile.skillGroups!.slice(0, visibleCount).map((group) => (
                      <div key={group.category}>
                        <h3 className="text-lg font-semibold text-stone-950 mb-3">
                          {group.category}
                        </h3>
                        <p className="text-lg leading-relaxed text-stone-600">{group.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </ReadMore>
            </section>
          )}

          {profile.experience && profile.experience.length > 0 && (
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-stone-950 mb-6">
                Experience
              </h2>
              <ReadMore total={profile.experience.length} limit={1}>
                {(visibleCount) => (
                  <div className="space-y-6">
                    {profile.experience!.slice(0, visibleCount).map((item) => (
                      <article
                        key={`${item.organization}-${item.period}`}
                        className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-stone-950">{item.title}</h3>
                            <p className="text-teal-700 font-medium mt-1">{item.organization}</p>
                          </div>
                          <div className="text-sm text-stone-500 shrink-0">
                            <p>{item.period}</p>
                            {item.location && <p>{item.location}</p>}
                          </div>
                        </div>
                        <ReadMore total={item.highlights.length} limit={2}>
                          {(highlightCount) => (
                            <ul className="space-y-2 text-stone-600 leading-relaxed">
                              {item.highlights.slice(0, highlightCount).map((highlight) => (
                                <li key={highlight.slice(0, 48)} className="flex gap-3">
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </ReadMore>
                      </article>
                    ))}
                  </div>
                )}
              </ReadMore>
            </section>
          )}

          {profile.education && profile.education.length > 0 && (
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-stone-950 mb-6">
                Education
              </h2>
              <div className="space-y-4">
                {profile.education.map((item) => (
                  <article
                    key={`${item.institution}-${item.degree}`}
                    className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-stone-950">{item.degree}</h3>
                        <p className="text-teal-700 font-medium mt-1">{item.institution}</p>
                      </div>
                      <div className="text-sm text-stone-500 shrink-0">
                        {item.period && <p>{item.period}</p>}
                        {item.location && <p>{item.location}</p>}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-stone-950 mb-6">
              Current work
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-3xl">
              Active research and engineering focus at Cogerphere — ongoing programs rather than
              shipped products.
            </p>
            <ReadMore total={profile.currentWork.length} limit={1}>
              {(visibleCount) => (
                <div className="space-y-10">
                  {profile.currentWork.slice(0, visibleCount).map((item) => (
                    <div key={item.title} className="max-w-3xl">
                      <h3 className="text-xl font-semibold text-stone-950 mb-4">{item.title}</h3>
                      <ReadMore total={item.paragraphs.length} limit={1}>
                        {(paragraphCount) => (
                          <div className={PROSE_BODY}>
                            {item.paragraphs.slice(0, paragraphCount).map((paragraph) => (
                              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                            ))}
                          </div>
                        )}
                      </ReadMore>
                      {item.href && (
                        <div className="mt-4">
                          <NarrativeLink
                            href={item.href}
                            external={item.external}
                            label={item.linkLabel ?? "Learn more"}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </ReadMore>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-stone-950 mb-6">
              Projects & products
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-3xl">
              Products and platforms built at Cogerphere — from research workspaces to developer
              tooling.
            </p>
            <ReadMore total={profile.projects.length} limit={1}>
              {(visibleCount) => (
                <div className="space-y-10">
                  {profile.projects.slice(0, visibleCount).map((project) => (
                    <div key={project.name} className="max-w-3xl">
                      <h3 className="text-xl font-semibold text-stone-950 mb-4">{project.name}</h3>
                      <ReadMore total={project.paragraphs.length} limit={1}>
                        {(paragraphCount) => (
                          <div className={PROSE_BODY}>
                            {project.paragraphs.slice(0, paragraphCount).map((paragraph) => (
                              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                            ))}
                          </div>
                        )}
                      </ReadMore>
                      {project.href && (
                        <div className="mt-4">
                          <NarrativeLink
                            href={project.href}
                            external={project.external}
                            label={project.linkLabel ?? "Visit project"}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </ReadMore>
          </section>

          {profile.collaborators && profile.collaborators.length > 0 && (
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-stone-950 mb-6">
                Collaborators
              </h2>
              <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
                <ul className="space-y-4">
                  {profile.collaborators.map((collaborator) => (
                    <li key={collaborator.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <span className="font-semibold text-stone-950">{collaborator.name}</span>
                      <span className="text-sm text-stone-600">{collaborator.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="rounded-2xl border border-stone-200 bg-stone-950 p-8 md:p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-serif font-normal mb-4">
              Explore the research
            </h2>
            <p className="text-stone-300 leading-relaxed mb-6 max-w-2xl">
              Read about the Context Intelligence Framework, Meridian 0.1, and the applied research
              behind Cogerphere&apos;s local-first systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-bold text-white hover:bg-teal-700 transition-colors"
              >
                Research overview
                <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href={OPENBENTT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-700 px-6 py-3 text-sm font-bold text-white hover:bg-stone-900 transition-colors"
              >
                Openbentt
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>

          <Link
            href="/researchers"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Researchers
          </Link>
        </div>
      </div>
    </div>
  );
}
