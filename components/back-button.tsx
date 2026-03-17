"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-stone-300 rounded-xl font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
    >
      <ArrowLeft className="h-4 w-4" />
      Go back
    </button>
  );
}
