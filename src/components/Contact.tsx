import { useState, FormEvent, useEffect } from "react";
import { initEmailJS, sendEmail } from "../utils/emailjs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "idle", message: "" });

    try {
      await sendEmail(formData);

      setFormStatus({
        type: "success",
        message: "Thank you for your message! We will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({
        type: "error",
        message:
          "Sorry, there was an error submitting your form. Please email us directly at marc@e430tech.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your project? Contact us today for a consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-primary-100">Email</p>
                    <a
                      href="mailto:marc@e430tech.com"
                      className="text-lg font-semibold hover:text-primary-100 transition-colors"
                    >
                      marc@e430tech.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-primary-100">Phone</p>
                    <a
                      href="tel:713-902-1610"
                      className="text-lg font-semibold hover:text-primary-100 transition-colors"
                    >
                      713-902-1610
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-primary-100">Location</p>
                    <p className="text-lg font-semibold">
                      Colorado Springs, CO
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-primary-100">Business Hours</p>
                    <p className="text-lg font-semibold">Monday - Friday</p>
                    <p className="text-primary-100">9:00 AM - 6:00 PM MST</p>
                  </div>
                </div>
              </div>

              {/* Logo */}
              <div className="mt-12 pt-8 border-t border-primary-500">
                <img
                  src="/assets/companyLogo_7.png"
                  alt="E430 Technologies"
                  className="w-24 h-24"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="(123) 456-7890"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="rf-radio">RF Services</option>
                  <option value="it-services">IT Services</option>
                  <option value="networking">Computer Networking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary-700 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {formStatus.type === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">{formStatus.message}</p>
                </div>
              )}

              {formStatus.type === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">{formStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
