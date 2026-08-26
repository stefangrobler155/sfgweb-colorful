"use client";

import { useState } from "react";
import {
  PACKAGES,
  ENQUIRY_FEATURES,
  WEBSITE_TYPES,
  TIMELINES,
  BUDGETS,
} from "@/lib/site";
import { getWeb3FormsKey, submitWeb3Form } from "@/lib/web3forms";
import { Field, enquiryInputClass } from "@/components/forms/Field";

const INITIAL_FORM = {
  name: "",
  business: "",
  email: "",
  phone: "",
  currentWebsite: "",
  businessDesc: "",
  package: "",
  websiteType: "",
  goals: "",
  targetAudience: "",
  features: [],
  branding: "",
  inspiration: "",
  timeline: "",
  budget: "",
  previousDev: "",
  additionalInfo: "",
};

function validateStep(step, formData) {
  const errors = {};

  if (step === 1) {
    if (!formData.name?.trim()) errors.name = "Full name is required";
    if (!formData.business?.trim()) errors.business = "Business name is required";
    if (!formData.email?.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Valid email address is required";
    }
    if (!formData.phone?.trim()) errors.phone = "Phone number is required";
    if (!formData.businessDesc?.trim()) errors.businessDesc = "Please describe your business";
  }

  if (step === 2) {
    if (!formData.package) errors.package = "Please select a package";
    if (!formData.websiteType) errors.websiteType = "Please select website type";
    if (!formData.goals?.trim()) errors.goals = "Please share your main goals";
  }

  if (step === 4) {
    if (!formData.timeline) errors.timeline = "Please select your timeline";
    if (!formData.budget) errors.budget = "Please select your budget range";
  }

  return errors;
}

export default function EnquiryForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        features: checked
          ? [...prev.features, value]
          : prev.features.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const nextStep = () => {
    const stepErrors = validateStep(currentStep, formData);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stepErrors = validateStep(4, formData);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    setIsSubmitting(true);

    const data = new FormData();
    data.append("access_key", getWeb3FormsKey());
    data.append("subject", "New Detailed Client Intake Submission");
    data.append("from_name", "Client Onboarding Form");

    Object.keys(formData).forEach((key) => {
      if (key === "features") {
        data.append("features", formData.features.join(", "));
      } else {
        data.append(key, formData[key] || "");
      }
    });

    try {
      const response = await submitWeb3Form(data);
      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Something went wrong. Please try again or contact me directly.");
      }
    } catch {
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--secondary-color)] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[var(--text-light)] mb-3">Welcome to SFGWeb</h1>
          <p className="text-gray-400">This will help me understand your project better</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2 font-medium">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={currentStep >= s ? "text-[var(--accent-color-1)]" : "text-gray-400"}
              >
                Step {s}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-[var(--accent-color-1)] rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-3xl p-8 md:p-10">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">About You & Your Business</h2>

              <Field label="Full Name" required error={errors.name}>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className={enquiryInputClass} />
              </Field>

              <Field label="Business Name" required error={errors.business}>
                <input type="text" name="business" required value={formData.business} onChange={handleChange} className={enquiryInputClass} />
              </Field>

              <Field label="Email" required error={errors.email}>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className={enquiryInputClass} />
              </Field>

              <Field label="Phone Number" required error={errors.phone}>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={enquiryInputClass} />
              </Field>

              <Field label="Current Website (if any)">
                <input type="url" name="currentWebsite" value={formData.currentWebsite} onChange={handleChange} className={enquiryInputClass} placeholder="https://" />
              </Field>

              <Field label="Briefly describe your business" required error={errors.businessDesc}>
                <textarea name="businessDesc" required value={formData.businessDesc} onChange={handleChange} rows={4} className={enquiryInputClass} />
              </Field>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Project Goals</h2>

              <Field label="Package Interested In" required error={errors.package}>
                <select name="package" required value={formData.package} onChange={handleChange} className={enquiryInputClass}>
                  <option value="">Select Package</option>
                  {PACKAGES.map((pkg) => (
                    <option key={pkg.enquiryValue} value={pkg.enquiryValue}>
                      {pkg.title}
                    </option>
                  ))}
                  <option value="Custom">Custom Solution</option>
                  <option value="Other">Other</option>
                </select>
              </Field>

              <Field label="Website Type" required error={errors.websiteType}>
                <select name="websiteType" required value={formData.websiteType} onChange={handleChange} className={enquiryInputClass}>
                  <option value="">Select Type</option>
                  {WEBSITE_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Main Goals for the Website" required error={errors.goals}>
                <textarea name="goals" required value={formData.goals} onChange={handleChange} rows={4} className={enquiryInputClass} />
              </Field>

              <Field label="Target Audience">
                <textarea name="targetAudience" value={formData.targetAudience} onChange={handleChange} rows={3} className={enquiryInputClass} />
              </Field>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Features & Design</h2>

              <div>
                <label className="block text-sm mb-3 font-medium">Important Features (check all that apply)</label>
                <div className="grid grid-cols-1 gap-3">
                  {ENQUIRY_FEATURES.map((feature) => (
                    <label key={feature} className="flex items-center gap-2 text-gray-700">
                      <input
                        type="checkbox"
                        value={feature}
                        checked={formData.features.includes(feature)}
                        onChange={handleChange}
                        className="w-5 h-5 accent-blue-600"
                      />
                      <span>{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Field label="Branding Materials Ready?">
                <input type="text" name="branding" value={formData.branding} onChange={handleChange} className={enquiryInputClass} placeholder="Logo, colors, content etc." />
              </Field>

              <Field label="Inspiration Websites (URLs)">
                <textarea name="inspiration" value={formData.inspiration} onChange={handleChange} rows={3} className={enquiryInputClass} placeholder="https://example.com" />
              </Field>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Timeline & Budget</h2>

              <Field label="Desired Launch Timeline" required error={errors.timeline}>
                <select name="timeline" required value={formData.timeline} onChange={handleChange} className={enquiryInputClass}>
                  <option value="">Select Timeline</option>
                  {TIMELINES.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Approximate Budget" required error={errors.budget}>
                <select name="budget" required value={formData.budget} onChange={handleChange} className={enquiryInputClass}>
                  <option value="">Select Budget Range</option>
                  {BUDGETS.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Have you worked with a web developer before?">
                <input type="text" name="previousDev" value={formData.previousDev} onChange={handleChange} className={enquiryInputClass} />
              </Field>

              <Field label="Anything else I should know?">
                <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows={4} className={enquiryInputClass} />
              </Field>
            </div>
          )}

          <div className="flex justify-center md:justify-between flex-wrap mt-10 pt-6 border-t gap-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                disabled={isSubmitting}
                className="px-8 py-3 border border-gray-300 rounded-2xl hover:bg-gray-50"
              >
                ← Previous
              </button>
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-10 py-3 bg-[var(--accent-color-1)] text-white rounded-2xl hover:bg-[var(--accent-color-5)] font-medium"
              >
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-3 bg-[var(--accent-color-1)] text-white rounded-2xl hover:bg-[var(--accent-color-5)] font-medium disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Form"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
