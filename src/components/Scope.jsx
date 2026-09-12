"use client";

import SectionHeader from "@/components/SectionHeader";

export default function Scope() {
  return (
    <section id="scope" className="py-12 text-[var(--text-light)]">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          eyebrow="Scope"
          title="What standard packages"
          highlight="don’t include"
        />
        <div className="bg-[var(--secondary-color)] border border-[var(--accent-color-1)] rounded-3xl p-8 md:p-10 text-gray-300 leading-relaxed space-y-4">
          <p>
            Logo design, full branding, professional photography, professional copywriting, ongoing SEO campaigns, ecommerce, complex booking systems, and unlimited revisions are not part of the standard packages.
          </p>
          <p>
            Those can be arranged separately or scoped as custom work when needed. You provide the core content and brand assets; we turn them into a clear, professional website.
          </p>
        </div>
      </div>
    </section>
  );
}
