import Link from "next/link";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";

const CONTENT_CLASS = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <LandingHeader />

      <main className={CONTENT_CLASS}>
        <section className="pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-normal mb-8 text-stone-950">Terms of Service</h1>
            <p className="text-stone-600 mb-8">
              Last updated: {new Date().toLocaleDateString("en-US")}
            </p>
            <div className="prose prose-stone max-w-none space-y-6 text-stone-600">
              <p>
                Welcome to Cogerphere AI Labs. By accessing or using our website and services, you agree to be bound by these Terms of Service.
              </p>
              <h2 className="text-xl font-serif font-normal text-stone-950 mt-8">Use of Services</h2>
              <p>
                You may use our website and products for lawful purposes only. You agree not to misuse our services, attempt to gain unauthorized access, or use our systems to harm others.
              </p>
              <h2 className="text-xl font-serif font-normal text-stone-950 mt-8">Intellectual Property</h2>
              <p>
                Cogerphere and its content, including logos, designs, and software, are owned by Cogerphere AI Labs. You may not copy, modify, or distribute our materials without permission.
              </p>
              <h2 className="text-xl font-serif font-normal text-stone-950 mt-8">Disclaimer</h2>
              <p>
                Our services are provided &quot;as is.&quot; We do not warrant that our products will be uninterrupted or error-free. Use at your own risk.
              </p>
              <h2 className="text-xl font-serif font-normal text-stone-950 mt-8">Contact</h2>
              <p>
                For questions about these Terms, please contact us via{" "}
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
