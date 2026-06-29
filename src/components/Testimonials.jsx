"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Lelanie van Zyl",
    role: "Owner, Lezylrie French Bulldogs",
    quote: "Stefan took the time to understand my business and created a beautiful website that reflects my brand. He is always willing to make adjustments when needed. I recommend him to anyone looking for a website",
  },
  {
    name: "Anna Erasmus",
    role: "Owner, Annie's Irises",
    quote: "The designer has created a website that effectively captures the charm and personality of Annie's Irises. The visual presentation aligns well with the gardening and horticulture market...",
  },
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const showPrevious = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[activeTestimonial];

  return (
    <section className="py-12 bg-transparent text-[var(--text-light)]" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[3px] text-sm font-semibold text-[var(--accent-color-1)]">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">What Clients Say</h2>
        </div>

        <div className="bg-transparent rounded-3xl p-10 md:p-16 relative">
          <FaQuoteLeft className="text-6xl text-[var(--accent-color-1)] opacity-80 absolute top-8 left-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="min-h-[240px] flex flex-col justify-center text-center mt-6"
            >
              <p className="text-lg md:text-xl leading-relaxed text-[var(--text-light)]">
                "{testimonial.quote}"
              </p>

              <div className="mt-10">
                <p className="font-semibold text-xl">{testimonial.name}</p>
                <p className="text-[var(--accent-color-1)]">{testimonial.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeTestimonial === idx ? "w-10 bg-[var(--accent-color-1)]" : "w-2.5 bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={showPrevious}
                className="h-12 w-12 flex items-center justify-center rounded-xl border border-[var(--accent-color-1)] hover:bg-[var(--accent-color-1)] hover:text-white transition-colors"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={showNext}
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