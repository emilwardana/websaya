"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 p-2 px-4 border-2 border-[var(--color-primary)] bg-[var(--color-surface)] hover:bg-[var(--color-accent)] transition-all hover:shadow-[4px_4px_0px_0px_var(--color-primary)] active:shadow-none font-bold text-sm uppercase"
      aria-label="Go back"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
}
