"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      if (!endpoint) throw new Error("Formspree endpoint not configured");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="pt-12 pb-16 text-[var(--text-light)]">
      <div className="max-w-7xl mx-auto px-6">
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
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[var(--secondary-color)] p-6 sm:p-8 rounded-3xl shadow-lg border border-[var(--accent-color-1)]"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
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
                className="px-6 py-3 rounded-lg bg-[var(--accent-color-1)] hover:bg-[var(--accent-color-5)] text-white font-semibold w-full disabled:cursor-not-allowed disabled:opacity-70"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "success" && (
                <p className="text-green-500 text-sm">Message sent successfully! I'll reply soon.</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info + Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[var(--secondary-color)] p-6 sm:p-8 rounded-3xl shadow-lg border border-[var(--accent-color-1)] flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-8">Other Ways to Reach Me</h3>

            <div className="space-y-8 flex-1">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--accent-color-1)]/10 flex items-center justify-center text-2xl text-[var(--accent-color-1)]">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400">Phone / WhatsApp</p>
                  <a href="tel:0821234567" className="text-xl font-medium hover:text-[var(--accent-color-1)] transition-colors">
                    082 123 4567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--accent-color-1)]/10 flex items-center justify-center text-2xl text-[var(--accent-color-1)]">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400">Email</p>
                  <a href="mailto:stefan@sfgweb.co.za" className="text-xl font-medium hover:text-[var(--accent-color-1)] transition-colors">
                    stefan@sfgweb.co.za
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Follow Me</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-2xl bg-[var(--accent-color-1)]/10 flex items-center justify-center text-2xl hover:bg-[var(--accent-color-1)] hover:text-white transition-all">
                  <FaWhatsapp />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-[var(--accent-color-1)]/10 flex items-center justify-center text-2xl hover:bg-[var(--accent-color-1)] hover:text-white transition-all">
                  <FaFacebook />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-[var(--accent-color-1)]/10 flex items-center justify-center text-2xl hover:bg-[var(--accent-color-1)] hover:text-white transition-all">
                  <FaInstagram />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-[var(--accent-color-1)]/10 flex items-center justify-center text-2xl hover:bg-[var(--accent-color-1)] hover:text-white transition-all">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}