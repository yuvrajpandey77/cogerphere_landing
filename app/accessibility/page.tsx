import Link from "next/link";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <LandingHeader />

      <main className={CONTENT_CLASS}>
        <section className="pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-normal mb-8 text-stone-950">Accessibility</h1>
            <div className="prose prose-stone max-w-none space-y-6 text-stone-600">
              <p>
                Cogerphere AI Labs is committed to making our website accessible to everyone. We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA where practicable.
              </p>
              <p>
                If you encounter any accessibility barriers or have suggestions for improvement, please{" "}
                <Link href="/contact" className="text-teal-600 font-semibold underline hover:no-underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
