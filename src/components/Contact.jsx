"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
      setFormData({ name: "", email: "", message: "" });
    } else {
      console.error("Formspree response:", await response.text()); // Debug log
      setStatus("error");
    }
  } catch (error) {
    console.error("Submission error:", error); // Debug log
    setStatus("error");
  }
};

  return (
    <section id="contact" className="py-20 bg-[var(--secondary-color)] text-[var(--primary-color)]">
      <div className="max-w-6xl mx-auto px-6 text-center py-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          Get in <span className="text-[var(--accent-color-2)]">Touch</span>
        </motion.h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-[var(--accent-color-3)] text-[var(--text-color)]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-[var(--accent-color-3)] text-[var(--text-color)]"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 rounded-xl bg-[var(--accent-color-3)] text-[var(--text-color)] h-32"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-[var(--accent-color-1)] text-white font-semibold w-full"
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
      </div>
    </section>
  );
}