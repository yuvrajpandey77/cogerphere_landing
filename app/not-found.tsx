import Link from "next/link";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";
import { BackButton } from "@/components/back-button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 flex flex-col">
      <LandingHeader />
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          {/* Empty jar — knowledge not found yet */}
          <div className="flex justify-center mb-8">
            <div className="relative w-20 h-24">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-5 rounded-t-lg border-2 border-b-0 border-stone-300 bg-stone-100" />
              <div className="absolute top-4 left-0 right-0 bottom-0 rounded-b-[1.5rem] border-2 border-t-0 border-stone-300 bg-stone-100">
                <p className="absolute inset-0 flex items-center justify-center text-stone-400 text-xs font-medium pt-2">
                  ?
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-stone-950 mb-4">
            Page not found
          </h1>
          <p className="text-stone-600 mb-8">
            This corner of the sphere is empty. The page you&apos;re looking for might have moved or doesn&apos;t exist yet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
            >
              <Home className="h-4 w-4" />
              Back to home
            </Link>
            <BackButton />
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
