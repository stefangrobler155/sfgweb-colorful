"use client";
// components/BackButton.jsx
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-8 inline-block px-4 py-2 rounded-md bg-[var(--accent-color-2)] hover:bg-[var(--accent-color-1)] text-[var(--primary-color)] transition"
    >
      ← Back
    </button>
  );
}
