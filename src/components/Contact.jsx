"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { SITE, CONTACT_WEBSITE_TYPES, PACKAGES } from "@/lib/site";
import { getWeb3FormsKey, submitWeb3Form } from "@/lib/web3forms";
import { Field, contactInputClass, selectArrowClass } from "@/components/forms/Field";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const nextErrors = {};
    if (!formData.get("name")?.trim()) nextErrors.name = "Name is required";
    if (!formData.get("email") || !/\S+@\S+\.\S+/.test(formData.get("email"))) {
      nextErrors.email = "Please enter a valid email";
    }
    if (!formData.get("phone")?.trim()) nextErrors.phone = "Phone number is required";
    if (!formData.get("websiteType")) nextErrors.websiteType = "Please select website type";
    if (!formData.get("goals")?.trim()) nextErrors.goals = "Please tell us your goals";
    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const response = await submitWeb3Form(formData);
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[3px] text-sm font-semibold text-[var(--accent-color-1)]">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl text-white font-bold mt-3">
            Let's Discuss Your Project
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Tell me about your business goals. I'll reply within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-[var(--secondary-color)] p-8 md:p-12 rounded-3xl border border-[var(--accent-color-1)]">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <input type="hidden" name="access_key" value={getWeb3FormsKey()} />
              <input type="hidden" name="subject" value={`New Website Inquiry from ${SITE.url.replace("https://", "")}`} />
              <input type="hidden" name="from_name" value={`${SITE.name} Contact Form`} />

              <div className="grid md:grid-cols-2 gap-6">
                <Field error={errors.name}>
                  <input type="text" name="name" placeholder="Your Full Name" required className={contactInputClass} />
                </Field>
                <Field error={errors.email}>
                  <input type="email" name="email" placeholder="Email Address" required className={contactInputClass} />
                </Field>
              </div>

              <Field error={errors.phone}>
                <input type="tel" name="phone" placeholder="Phone / WhatsApp Number" required className={contactInputClass} />
              </Field>

              <input type="text" name="business" placeholder="Business Name" className={contactInputClass} />

              <select name="packageInterest" className={`${contactInputClass} ${selectArrowClass}`}>
                <option value="">Package Interested In (optional)</option>
                {PACKAGES.map((pkg) => (
                  <option key={pkg.title} value={pkg.enquiryValue}>
                    {pkg.title} - {pkg.period === "From" ? `From ${pkg.price}` : pkg.price}
                  </option>
                ))}
                <option value="custom">Custom Project</option>
                <option value="notsure">Not Sure Yet</option>
              </select>

              <Field error={errors.websiteType}>
                <select name="websiteType" required className={`${contactInputClass} ${selectArrowClass}`}>
                  <option value="">What kind of website do you need?</option>
                  {CONTACT_WEBSITE_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field error={errors.goals}>
                <textarea
                  name="goals"
                  placeholder="I need more leads, online bookings, or better credibility. My goals are..."
                  rows={3}
                  required
                  className={contactInputClass}
                />
              </Field>

              <textarea
                name="message"
                placeholder="Additional information or questions..."
                rows={4}
                className={contactInputClass}
              />

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[var(--accent-color-1)] hover:bg-[var(--accent-color-5)] text-white font-semibold rounded-xl transition-colors disabled:opacity-70"
              >
                {status === "sending" ? "Sending Message..." : "Send Inquiry"}
              </motion.button>

              {status === "success" && (
                <p className="text-green-400 text-center">Thanks — I'll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center">Something went wrong. Please try again or email me directly.</p>
              )}
            </form>
          </div>

          <div className="flex flex-col justify-start bg-[var(--secondary-color)] p-8 md:p-12 rounded-3xl border border-[var(--accent-color-1)] text-[var(--text-light)]">
            <h3 className="text-2xl font-semibold mb-8">Other Ways to Reach Me</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="text-3xl text-[var(--accent-color-1)] mt-1">
                  <FaPhone />
                </div>
                <div>
                  <p className="font-medium">Call or WhatsApp</p>
                  <a href={`tel:${SITE.phoneTel}`} className="text-lg hover:text-[var(--accent-color-1)] transition-colors">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl text-[var(--accent-color-1)] mt-1">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-lg hover:text-[var(--accent-color-1)] transition-colors">
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
