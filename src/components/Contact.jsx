"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Lelanie van Zyl",
    role: "Owner, Lezylrie French Bulldogs",
    quote:
      "Stefan took the time to understand my business and created a beautiful website that reflects my brand. He is always willing to make adjustments when needed. I recommend him to anyone looking for a website",
  },
  {
    name: "Anna Erasmus",
    role: "Owner, Annie's Irisses",
    quote:
      "The designer has created a website that effectively captures the charm and personality of Annie's Irises. The visual presentation aligns well with the gardening and horticulture market, using vibrant flower photography and a welcoming aesthetic that immediately communicates the brand's specialization in bearded irises.",
  },
];

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const showPreviousTestimonial = () => {
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const showNextTestimonial = () => {
    setActiveTestimonial((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      if (!endpoint) {
        throw new Error("Formspree endpoint not configured");
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("Formspree response:", await response.text());
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const testimonial = testimonials[activeTestimonial];

  return (
    <section id="contact" className="py-10 text-[var(--text-light)]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-sm font-semibold text-[var(--accent-color-1)]"
          >
            Contact Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mt-3"
          >
            Let's Discuss Your <span className="text-[var(--accent-color-1)]">Project</span>
          </motion.h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Whether you have a clear vision or just a few ideas, I'm here to help you create a website that drives real results.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[var(--secondary-color)] p-6 sm:p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-[var(--primary-color)] text-[var(--text-dark)] focus:outline-2 focus:outline-[var(--accent-color-1)]"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-[var(--primary-color)] text-[var(--text-dark)] focus:outline-2 focus:outline-[var(--accent-color-1)]"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Contact number"
                className="w-full p-3 rounded-lg bg-[var(--primary-color)] text-[var(--text-dark)] focus:outline-2 focus:outline-[var(--accent-color-1)]"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-[var(--primary-color)] text-[var(--text-dark)] h-32 resize-none focus:outline-2 focus:outline-[var(--accent-color-1)]"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-lg bg-[var(--accent-color-1)] text-white font-semibold w-full disabled:cursor-not-allowed disabled:opacity-70"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>
              {status === "success" && (
                <p className="text-green-500 text-sm">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex min-h-[360px] flex-col justify-between overflow-hidden bg-[var(--secondary-color)] p-6 text-[var(--text-light)] sm:p-8"
          >
            <div>
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[3px] text-[var(--accent-color-1)]">
                    Testimonials
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">Client feedback</h3>
                </div>
                <FaQuoteLeft className="text-3xl text-[var(--accent-color-1)]" aria-hidden="true" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-md leading-relaxed sm:text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-8 border-t border-[var(--accent-color-3)] pt-5">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-[var(--text-light)]/70">{testimonial.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeTestimonial === index
                        ? "w-8 bg-[var(--accent-color-1)]"
                        : "w-2.5 bg-[var(--accent-color-3)]"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  title="Previous testimonial"
                  onClick={showPreviousTestimonial}
                  className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--accent-color-1)] text-[var(--accent-color-1)] transition-colors hover:bg-[var(--accent-color-1)] hover:text-white"
                >
                  <FaChevronLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  title="Next testimonial"
                  onClick={showNextTestimonial}
                  className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--accent-color-1)] text-[var(--accent-color-1)] transition-colors hover:bg-[var(--accent-color-1)] hover:text-white"
                >
                  <FaChevronRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
