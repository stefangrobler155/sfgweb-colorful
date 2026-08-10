'use client';

import { useState } from 'react';

export default function ClientEnquiry() {
  const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS;
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '', 
    business: '', 
    email: '', 
    phone: '', 
    currentWebsite: '', 
    businessDesc: '',
    package: '', 
    websiteType: '', 
    goals: '', 
    targetAudience: '',
    features: [], 
    branding: '', 
    inspiration: '',
    timeline: '', 
    budget: '', 
    previousDev: '', 
    additionalInfo: '',
  });

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name?.trim()) newErrors.name = "Full name is required";
      if (!formData.business?.trim()) newErrors.business = "Business name is required";
      if (!formData.email?.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email address is required";
      if (!formData.phone?.trim()) newErrors.phone = "Phone number is required";
      if (!formData.businessDesc?.trim()) newErrors.businessDesc = "Please describe your business";
    }

    if (step === 2) {
      if (!formData.package) newErrors.package = "Please select a package";
      if (!formData.websiteType) newErrors.websiteType = "Please select website type";
      if (!formData.goals?.trim()) newErrors.goals = "Please share your main goals";
    }

    if (step === 4) {
      if (!formData.timeline) newErrors.timeline = "Please select your timeline";
      if (!formData.budget) newErrors.budget = "Please select your budget range";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        features: checked 
          ? [...prev.features, value] 
          : prev.features.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user fixes the field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    const data = new FormData();
    data.append('access_key', WEB3FORMS_KEY);
    data.append('subject', 'New Detailed Client Intake Submission');
    data.append('from_name', 'Client Onboarding Form');

    Object.keys(formData).forEach(key => {
      if (key === 'features') {
        data.append('features', formData.features.join(', '));
      } else {
        data.append(key, formData[key] || '');
      }
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        window.location.href = '/thank-you';
      } else {
        alert('Something went wrong. Please try again or contact me directly.');
      }
    } catch (error) {
      alert('Error submitting form. Please try again.');
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

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2 font-medium">
            {[1,2,3,4].map((s) => (
              <div key={s} className={currentStep >= s ? 'text-[var(--accent-color-1)]' : 'text-gray-400'}>
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
          
          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">About You & Your Business</h2>
              
              <div>
                <label className="block text-sm mb-1 font-medium">Full Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Business Name *</label>
                <input type="text" name="business" required value={formData.business} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500" />
                {errors.business && <p className="text-red-500 text-sm mt-1">{errors.business}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Phone Number *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500" />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Current Website (if any)</label>
                <input type="url" name="currentWebsite" value={formData.currentWebsite} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500" placeholder="https://" />
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Briefly describe your business *</label>
                <textarea name="businessDesc" required value={formData.businessDesc} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500" />
                {errors.businessDesc && <p className="text-red-500 text-sm mt-1">{errors.businessDesc}</p>}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Project Goals</h2>
              
              <div>
                <label className="block text-sm mb-1 font-medium">Package Interested In *</label>
                <select name="package" required value={formData.package} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl">
                  <option value="">Select Package</option>
                  <option value="Startup">Startup Package</option>
                  <option value="Brochure">Brochure Website</option>
                  <option value="Ecommerce">E-commerce</option>
                  <option value="Custom">Custom Solution</option>
                  <option value="Other">Other</option>
                </select>
                {errors.package && <p className="text-red-500 text-sm mt-1">{errors.package}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Website Type *</label>
                <select name="websiteType" required value={formData.websiteType} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl">
                  <option value="">Select Type</option>
                  <option value="Brochure">Brochure / Informational</option>
                  <option value="Portfolio">Portfolio</option>
                  <option value="Blog">Blog</option>
                  <option value="Store">Online Store</option>
                  <option value="Booking">Booking System</option>
                  <option value="Other">Other</option>
                </select>
                {errors.websiteType && <p className="text-red-500 text-sm mt-1">{errors.websiteType}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Main Goals for the Website *</label>
                <textarea name="goals" required value={formData.goals} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                {errors.goals && <p className="text-red-500 text-sm mt-1">{errors.goals}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Target Audience</label>
                <textarea name="targetAudience" value={formData.targetAudience} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Features & Design</h2>
              
              <div>
                <label className="block text-sm mb-3 font-medium">Important Features (check all that apply)</label>
                <div className="grid grid-cols-1 gap-3">
                  {['Contact Form', 'Blog/News', 'Online Payments', 'Booking System', 'SEO Optimization', 'Fast Performance', 'CMS (Self Editable)', 'Animations', 'Newsletter Signup'].map((feature) => (
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

              <div>
                <label className="block text-sm mb-1 font-medium">Branding Materials Ready?</label>
                <input type="text" name="branding" value={formData.branding} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" placeholder="Logo, colors, content etc." />
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Inspiration Websites (URLs)</label>
                <textarea name="inspiration" value={formData.inspiration} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl" placeholder="https://example.com" />
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Timeline & Budget</h2>
              
              <div>
                <label className="block text-sm mb-1 font-medium">Desired Launch Timeline *</label>
                <select name="timeline" required value={formData.timeline} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl">
                  <option value="">Select Timeline</option>
                  <option value="ASAP">As Soon As Possible</option>
                  <option value="1month">Within 1 Month</option>
                  <option value="2months">1-2 Months</option>
                  <option value="3months">2-3 Months</option>
                  <option value="Later">3+ Months</option>
                </select>
                {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Approximate Budget *</label>
                <select name="budget" required value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl">
                  <option value="">Select Budget Range</option>
                  <option value="Under5k">Under R5,000</option>
                  <option value="5-10k">R5,000 – R10,000</option>
                  <option value="10-20k">R10,000 – R20,000</option>
                  <option value="20-40k">R20,000 – R40,000</option>
                  <option value="Above40k">Above R40,000</option>
                </select>
                {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Have you worked with a web developer before?</label>
                <input type="text" name="previousDev" value={formData.previousDev} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Anything else I should know?</label>
                <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
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
                className="px-10 py-3 bg-[var(--accent-color-1)] text-white rounded-2xl hover:bg-[var(--accent-color-5)] font-medium disabled:opacity-70 flex items-center gap-2"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Form'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}