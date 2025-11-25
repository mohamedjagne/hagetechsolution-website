import Button from "@/components/ui/Button"
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "info@hagetech.com",
      description: "Send us a message anytime.",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us during business hours.",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Tech Street, Innovation Hub",
      description: "Visit our office.",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+1 (555) 987-6543",
      description: "Quick messaging support.",
    },
  ]

  const hours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ]

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
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight mb-4">Get in Touch</h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Let's discuss how HageTech Solutions can help transform your business with Odoo ERP.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <div
                  key={method.title}
                  className="p-6 border border-[var(--border)] hover:shadow-lg transition-shadow bg-[var(--card)] rounded-xl"
                >
                  <Icon className="text-[var(--primary)] mb-4" size={28} />
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">{method.title}</h3>
                  <p className="text-sm text-[var(--accent)] font-semibold mb-2">{method.value}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">{method.description}</p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Contact Form */}
            <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--card)]">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[var(--foreground)] mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--foreground)] mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--foreground)] mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--foreground)] mb-2">Service Interest</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <option>Select a service</option>
                    <option>Odoo Implementation</option>
                    <option>Customization & Development</option>
                    <option>Integration Services</option>
                    <option>Support & Maintenance</option>
                    <option>Training Programs</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--foreground)] mb-2">Message</label>
                  <textarea
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)]">
                  Send Message
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </form>
            </div>

            {/* Business Hours & Map */}
            <div className="space-y-6">
              <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--card)]">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-[var(--primary)]" size={28} />
                  <h2 className="text-2xl font-bold text-[var(--foreground)]">Business Hours</h2>
                </div>
                <div className="space-y-4">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <p className="text-[var(--foreground)] font-semibold">{h.day}</p>
                      <p className="text-[var(--muted-foreground)]">{h.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden border border-[var(--border)] rounded-2xl h-80 bg-[var(--card)] relative">
                <img
                  src="/placeholder.svg?key=map1"
                  alt="Office Location Map"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[var(--primary)]/10 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="text-center space-y-1 px-4">
                    <MapPin className="text-[var(--primary)] mx-auto mb-2" size={40} />
                    <p className="text-[var(--foreground)] font-semibold">Innovation Hub</p>
                    <p className="text-sm text-[var(--muted-foreground)]">123 Tech Street</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--muted)]/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="p-6 border border-[var(--border)] rounded-xl bg-[var(--card)]">
                <h3 className="font-bold text-[var(--foreground)] mb-2">{item.q}</h3>
                <p className="text-sm text-[var(--muted-foreground)]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--primary)] text-[var(--primary-foreground)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Transformation?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our experts are ready to discuss your needs.
          </p>
          <Button className="inline-flex items-center gap-2 bg-[var(--primary-foreground)] text-[var(--primary)] hover:opacity-90 hover:bg-[var(--primary-foreground)]/90 px-6 py-3 rounded-lg">
            <Link to="/contact">Schedule Free Consultation</Link>
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>
    </main>
  )
}
