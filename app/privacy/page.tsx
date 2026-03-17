import Link from "next/link";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <LandingHeader />

      <main className={CONTENT_CLASS}>
        <section className="pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-normal mb-8 text-stone-950">Privacy Policy</h1>
            <p className="text-stone-600 mb-8">
              Last updated: {new Date().toLocaleDateString("en-US")}
            </p>
            <div className="prose prose-stone max-w-none space-y-6 text-stone-600">
              <p>
                Cogerphere AI Labs (&quot;Cogerphere,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This policy describes how we collect, use, and protect your information when you use our website and services.
              </p>
              <h2 className="text-xl font-serif font-normal text-stone-950 mt-8">Information We Collect</h2>
              <p>
                We may collect information you provide directly (e.g., name, email, message content when you contact us) and information collected automatically (e.g., usage data, cookies) to improve our services.
              </p>
              <h2 className="text-xl font-serif font-normal text-stone-950 mt-8">How We Use Your Information</h2>
              <p>
                We use your information to respond to inquiries, improve our website and products, and communicate with you about Cogerphere services. We do not sell your personal information.
              </p>
              <h2 className="text-xl font-serif font-normal text-stone-950 mt-8">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.
              </p>
              <h2 className="text-xl font-serif font-normal text-stone-950 mt-8">Contact</h2>
              <p>
                For questions about this Privacy Policy or your data, please contact us at{" "}
                <Link href="/contact" className="text-teal-600 font-semibold underline hover:no-underline">
                  our contact page
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
