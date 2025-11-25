import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Button from "@/components/ui/Button";

export default function Contact() {
  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    serviceInterest: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.serviceInterest || formData.serviceInterest === "Select a service") {
      newErrors.serviceInterest = "Please select a service interest";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Prepare template parameters
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        company: formData.company || "Not specified",
        service_interest: formData.serviceInterest,
        message: formData.message,
        to_email: "info@hagetechsolution.com",
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        company: "",
        serviceInterest: "",
        message: "",
      });
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "info@hagetechsolution.com",
      description: "Send us a message anytime.",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+252 63 4785027",
      description: "Call us during business hours.",
    },
    {
      icon: MapPin,
      title: "Address",
      value:
        "Unit 404, Omar Hashi Building, Road No.1, 26 June District, Hargeisa, Somaliland",
      description: "Visit our office.",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+252 (63) 7760444",
      description: "Quick messaging support.",
    },
  ];

  const hours = [
    { day: "Saturday - Thursday", time: "6:00 AM - 8:00 PM" },
    { day: "Friday", time: "Closed" },
  ];

  const faqs = [
    {
      q: "How long does an Odoo implementation typically take?",
      a: "Implementation timelines vary based on complexity and scope. Small implementations take 3-6 months, while enterprise solutions may take 9-18 months.",
    },
    {
      q: "What is your support model after implementation?",
      a: "We offer multiple support plans ranging from incident-based to managed services. Most clients opt for our 24/7 monitored support packages.",
    },
    {
      q: "Can you integrate Odoo with our existing systems?",
      a: "Yes, we specialize in integrating Odoo with legacy systems, third-party applications, and custom solutions using APIs and middleware.",
    },
    {
      q: "Do you provide training for our staff?",
      a: "Absolutely. We provide comprehensive training tailored to different user roles - end users, administrators, and developers.",
    },
    {
      q: "What is the typical cost of an Odoo implementation?",
      a: "Costs depend on scope, customization, and team size. We provide detailed proposals after understanding your requirements.",
    },
    {
      q: "Can you help with data migration?",
      a: "Yes, we handle complete data migration from legacy systems, including cleaning, validation, and reconciliation.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Let's discuss how HageTech Solutions can help transform your
              business with Odoo ERP.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="p-6 border border-[var(--border)] hover:shadow-lg transition-shadow bg-[var(--card)] rounded-xl"
                >
                  <Icon className="text-[var(--primary)] mb-4" size={28} />
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-[var(--accent)] font-semibold mb-2">
                    {method.value}
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Contact Form */}
            <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--card)]">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[var(--foreground)] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.fullName
                        ? "border-red-500"
                        : "border-[var(--border)]"
                    } bg-[var(--background)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--foreground)] mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-[var(--border)]"
                    } bg-[var(--background)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--foreground)] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--foreground)] mb-2">
                    Service Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.serviceInterest
                        ? "border-red-500"
                        : "border-[var(--border)]"
                    } bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]`}
                  >
                    <option>Select a service</option>
                    <option>Odoo Implementation</option>
                    <option>Customization & Development</option>
                    <option>Integration Services</option>
                    <option>Support & Maintenance</option>
                    <option>Training Programs</option>
                  </select>
                  {errors.serviceInterest && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.serviceInterest}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--foreground)] mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message
                        ? "border-red-500"
                        : "border-[var(--border)]"
                    } bg-[var(--background)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-500 rounded-lg flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={20} />
                    <p className="text-green-700 dark:text-green-400 text-sm">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-500 rounded-lg flex items-center gap-2">
                    <XCircle className="text-red-500" size={20} />
                    <p className="text-red-700 dark:text-red-400 text-sm">
                      Failed to send message. Please try again or contact us directly at{" "}
                      <a
                        href="mailto:info@hagetechsolution.com"
                        className="underline font-semibold"
                      >
                        info@hagetechsolution.com
                      </a>
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={18} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2" size={18} />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Business Hours & Map */}
            <div className="space-y-6">
              <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--card)]">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-[var(--primary)]" size={28} />
                  <h2 className="text-2xl font-bold text-[var(--foreground)]">
                    Business Hours
                  </h2>
                </div>
                <div className="space-y-4">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <p className="text-[var(--foreground)] font-semibold">
                        {h.day}
                      </p>
                      <p className="text-[var(--muted-foreground)]">{h.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden border border-[var(--border)] rounded-2xl h-80 bg-[var(--card)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316.6898875665887!2d44.05909796557418!3d9.560981485547755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1628bf76c5acc595%3A0x58f7ffd87e12179d!2sOmar%20Hashi%20Building!5e0!3m2!1sen!2sso!4v1764086361552!5m2!1sen!2sso"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--muted)]/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="p-6 border border-[var(--border)] rounded-xl bg-[var(--card)]"
              >
                <h3 className="font-bold text-[var(--foreground)] mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--primary)] text-[var(--primary-foreground)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our experts are ready to
            discuss your needs.
          </p>
          <Button className="inline-flex items-center gap-2 bg-[var(--primary-foreground)] text-[var(--primary)] hover:opacity-90 hover:bg-[var(--primary-foreground)]/90 px-6 py-3 rounded-lg">
            <Link to="/contact">Schedule Free Consultation</Link>
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>
    </main>
  );
}
