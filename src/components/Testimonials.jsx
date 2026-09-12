"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { TESTIMONIALS } from "@/lib/site";
import SectionHeader from "@/components/SectionHeader";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = TESTIMONIALS[active];

  const showPrevious = () => {
    setActive((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActive((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 bg-transparent text-[var(--text-light)]" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Testimonials" title="What clients say" />

        <div className="bg-transparent rounded-3xl p-10 md:p-16 relative">
          <FaQuoteLeft className="text-6xl text-[var(--accent-color-1)] opacity-80 absolute top-8 left-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="min-h-[240px] flex flex-col justify-center text-center mt-6"
            >
              <p className="text-lg md:text-xl leading-relaxed text-[var(--text-light)]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-10">
                <p className="font-semibold text-xl">{testimonial.name}</p>
                <p className="text-[var(--accent-color-1)]">{testimonial.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-3">
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => setActive(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    active === idx ? "w-10 bg-[var(--accent-color-1)]" : "w-2.5 bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous testimonial"
                className="h-12 w-12 flex items-center justify-center rounded-xl border border-[var(--accent-color-1)] hover:bg-[var(--accent-color-1)] hover:text-white transition-colors"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next testimonial"
                className="h-12 w-12 flex items-center justify-center rounded-xl border border-[var(--accent-color-1)] hover:bg-[var(--accent-color-1)] hover:text-white transition-colors"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
