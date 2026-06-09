import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";
import { ResearcherProfileView } from "@/components/people/researcher-profile";
import { getResearcherProfile, getResearcherSlugs } from "@/lib/people-content";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getResearcherSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getResearcherProfile(slug);

  if (!profile) {
    return pageMetadata({
      title: "Researcher",
      description: "Cogerphere researcher profile.",
      path: `/researchers/${slug}`,
    });
  }

  return pageMetadata({
    title: profile.name,
    description: profile.shortBio,
    path: `/researchers/${slug}`,
    openGraphTitle: `${profile.name} | Cogerphere Researchers`,
  });
}

export default async function ResearcherProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const profile = getResearcherProfile(slug);

  if (!profile) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <LandingHeader />

      <main className="relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-30" />
        </div>

        <ResearcherProfileView profile={profile} />
      </main>

      <LandingFooter />
    </div>
  );
}
