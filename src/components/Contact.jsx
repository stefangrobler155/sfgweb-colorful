"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.get("name")?.trim()) newErrors.name = "Name is required";
    if (!formData.get("email") || !/\S+@\S+\.\S+/.test(formData.get("email"))) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.get("phone")?.trim()) newErrors.phone = "Phone number is required";
    if (!formData.get("websiteType")) newErrors.websiteType = "Please select website type";
    if (!formData.get("goals")?.trim()) newErrors.goals = "Please tell us your goals";

    return newErrors;
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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
        setErrors({});
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
          {/* Form Column */}
          <div className="bg-[var(--secondary-color)] p-8 md:p-12 rounded-3xl border border-[var(--accent-color-1)]">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <input type="hidden" name="access_key" value="43383d08-ce17-4a8d-afcc-9824621f215b" />
              <input type="hidden" name="subject" value="New Website Inquiry from sfgweb.co.za" />
              <input type="hidden" name="from_name" value="SFGWeb Contact Form" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    className="w-full p-4 rounded-xl bg-[var(--primary-color)] border border-transparent focus:border-[var(--accent-color-1)] focus:outline-none text-[var(--text-dark)]"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full p-4 rounded-xl bg-[var(--primary-color)] border border-transparent focus:border-[var(--accent-color-1)] focus:outline-none text-[var(--text-dark)]"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone / WhatsApp Number"
                  required
                  className="w-full p-4 rounded-xl bg-[var(--primary-color)] border border-transparent focus:border-[var(--accent-color-1)] focus:outline-none text-[var(--text-dark)]"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <input
                type="text"
                name="business"
                placeholder="Business Name"
                className="w-full p-4 rounded-xl bg-[var(--primary-color)] border border-transparent focus:border-[var(--accent-color-1)] focus:outline-none text-[var(--text-dark)]"
              />

              {/* Package Interest */}
              <div>
                <select
                  name="packageInterest"
                  className="w-full p-4 rounded-xl bg-[var(--primary-color)] border border-transparent focus:border-[var(--accent-color-1)] focus:outline-none text-[var(--text-dark)]"
                >
                  <option value="">Package Interested In (optional)</option>
                  <option value="startup">Startup Site - R2,000</option>
                  <option value="business">Business Site - R3,500</option>
                  <option value="store">Online Store - From R8,000</option>
                  <option value="custom">Custom Project</option>
                  <option value="notsure">Not Sure Yet</option>
                </select>
              </div>

              <select
                name="websiteType"
                required
                className="w-full p-4 rounded-xl bg-[var(--primary-color)] border border-transparent focus:border-[var(--accent-color-1)] focus:outline-none text-[var(--text-dark)]"
              >
                <option value="">What kind of website do you need?</option>
                <option value="Brochure">Brochure / Business Site</option>
                <option value="Ecommerce">E-commerce Store</option>
                <option value="Blog">Blog / Content Site</option>
                <option value="Redesign">Website Redesign</option>
                <option value="Other">Other</option>
              </select>

              <div>
                <textarea
                  name="goals"
                  placeholder="I need more leads, online bookings, or better credibility. My goals are..."
                  rows={3}
                  required
                  className="w-full p-4 rounded-xl bg-[var(--primary-color)] border border-transparent focus:border-[var(--accent-color-1)] focus:outline-none text-[var(--text-dark)]"
                />
                {errors.goals && <p className="text-red-500 text-sm mt-1">{errors.goals}</p>}
              </div>

              <textarea
                name="message"
                placeholder="Additional information or questions..."
                rows={4}
                className="w-full p-4 rounded-xl bg-[var(--primary-color)] border border-transparent focus:border-[var(--accent-color-1)] focus:outline-none text-[var(--text-dark)]"
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
            </form>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col justify-start bg-[var(--secondary-color)] p-8 md:p-12 rounded-3xl border border-[var(--accent-color-1)] text-[var(--text-light)]">
            <h3 className="text-2xl font-semibold mb-8">Other Ways to Reach Me</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="text-3xl text-[var(--accent-color-1)] mt-1">
                  <FaPhone />
                </div>
                <div>
                  <p className="font-medium">Call or WhatsApp</p>
                  <a href="tel:+27812345678" className="text-lg hover:text-[var(--accent-color-1)] transition-colors">
                    +27 81 234 5678
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl text-[var(--accent-color-1)] mt-1">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:stefan@sfgweb.co.za" className="text-lg hover:text-[var(--accent-color-1)] transition-colors">
                    stefan@sfgweb.co.za
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