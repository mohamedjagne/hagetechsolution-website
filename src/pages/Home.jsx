import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Target,
  Settings,
  TrendingUp,
  Clock,
  HandshakeIcon,
  Asterisk,
} from "lucide-react";
import Button from "../components/ui/Button";
import { industries } from "../data/industries";

export default function Home() {
  const whyUsHighlights = [
    {
      value: "91% Success Rate",
      description:
        "Odoo Implementations That Actually Work We maintain a proven 91% success rate by focusing on clear requirements, solid workflow design, strict testing, and a smooth go-live execution",
    },
    {
      value: "20+ ERP Projects Completed",
      description:
        "Experience That Saves You Time & Money Our hands-on experience across multiple industries ensures efficient implementation, reduced errors, and faster delivery—saving you both time and operational costs.",
    },
    {
      value: "10+ Industry Insights",
      description:
        "Real Knowledge. Real Business Impact. With deep insights from over 10 industry cases—retail, construction, NGO, manufacturing, distribution—we bring proven best practices that strengthen your decision-making.",
    },
    {
      value: "1,000+ Hours of Dedicated Support",
      description:
        "We Don’t Leave After Go-Live Our team stays with you beyond implementation—offering continuous support, system optimization, updates, and guidance to ensure your ERP runs flawlessly every day.",
    },
    {
      value: "1,200+ Professionals Trained",
      description:
        "Hands-on, scenario-based training that empowers accountants, business owners, and teams to confidently operate Odoo from day one.",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Operations Director",
      company: "Global Retail Inc",
      text: "HageTech Solutions transformed our supply chain management. We saw immediate improvements in inventory tracking and order processing.",
    },
    {
      name: "Maria Garcia",
      role: "CFO",
      company: "Manufacturing Pro Ltd",
      text: "The implementation was seamless and their team was incredibly responsive. Our accounting processes are now fully automated.",
    },
    {
      name: "Ahmed Hassan",
      role: "CEO",
      company: "E-Commerce Solutions",
      text: "Best decision we made for our business. The Odoo system HageTech implemented has become central to our operations.",
    },
  ];

  const clientLogos = [
    { name: "Jameeco weyn", src: "/clients/jameeco-weyn.png" },
    {
      name: "Gondogooye Architects & Construction",
      src: "/clients/gondogooye.jpeg",
    },
    { name: "Alqudus Pharmaceuticals", src: "/clients/alqudus-pharma.jpeg" },
    { name: "Alamin Pharmaceuticals", src: "/clients/alamin-pharma.jpeg" },
    {
      name: "Optimum General Trading Company",
      src: "/clients/optimum-gtc.jpeg",
    },
    { name: "MGT", src: "/clients/mgt.jpeg" },
  ];

  const strategySteps = [
    {
      number: 1,
      title: "Discovery & Analysis",
      description:
        "We conduct comprehensive audit of your current business processes, systems, and requirements.",
      icon: Target,
    },
    {
      number: 2,
      title: "System Configuration",
      description:
        "Configure Odoo modules and workflows to align with your specific business needs.",
      icon: Settings,
    },
    {
      number: 3,
      title: "Data Migration",
      description:
        "Seamlessly migrate your existing data into Odoo with complete accuracy and integrity.",
      icon: TrendingUp,
    },
    {
      number: 4,
      title: "Customization & Integration",
      description:
        "Build custom modules and integrate Odoo with your existing business applications.",
      icon: Zap,
    },
    {
      number: 5,
      title: "User Training",
      description:
        "Comprehensive training programs to ensure your team masters the Odoo platform.",
      icon: Users,
    },
    {
      number: 6,
      title: "Go-Live Support",
      description:
        "Full support during system launch with dedicated team available 24/7.",
      icon: Clock,
    },
    {
      number: 7,
      title: "Post-Implementation Support",
      description:
        "Ongoing optimization, maintenance, and support to maximize your ROI.",
      icon: HandshakeIcon,
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[var(--primary)]/5 to-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[var(--accent)] font-semibold">
                  Digital Transformation
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
                  Transform Your Business with Odoo ERP
                </h1>
              </div>
              <p className="text-lg text-[var(--muted-foreground)]">
                HageTech Solutions delivers comprehensive Odoo ERP
                implementation and consulting services. Automate your business
                processes, improve efficiency, and scale with confidence.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <img
                src="/business-team-working-on-erp-software-dashboard.jpg"
                alt="Team working on Odoo ERP implementation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Trusted Partners */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--accent)] font-semibold mb-2">
              We are in great company.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              Top brands trust us!
            </h2>
            <p className="text-[var(--muted-foreground)] mt-4 max-w-2xl mx-auto">
              Leading organizations across industries trust HageTech Solutions
              for their Odoo implementations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-20 w-full"
              >
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity max-h-20"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button>
              <Link to="/case-studies">View All Clients</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                <Asterisk size={24} />
              </div>
              <div>
                <p className="text-[var(--accent)] font-semibold text-lg">
                  Why Us?
                </p>
                <div className="flex gap-1 mt-1 text-[var(--accent)]">
                  {[...Array(6)].map((_, idx) => (
                    <span
                      key={idx}
                      className="block w-2 h-2 rounded-full bg-current"
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {whyUsHighlights.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <div>
                  <p className="text-2xl font-bold text-[var(--foreground)]">
                    {item.value}
                  </p>
                </div>
                <div className="h-px w-16 bg-[var(--accent)]"></div>
                <div className="space-y-3">
                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Odoo */}
      <section className="py-20 bg-[var(--muted)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-[var(--accent)] font-semibold mb-2">
                  Enterprise Resource Planning
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
                  What is Odoo?
                </h2>
              </div>

              <p className="text-lg text-[var(--foreground)]">
                Odoo is a comprehensive open-source suite of business
                applications designed to streamline operations across your
                entire organization. From sales and inventory to accounting and
                human resources, Odoo provides an integrated platform that
                eliminates silos and improves collaboration.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle
                    className="text-[var(--accent)] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">
                      Fully Integrated Modules
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      All business processes connected in one unified system
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle
                    className="text-[var(--accent)] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">
                      Scalable Solution
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      Grows with your business from startup to enterprise
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle
                    className="text-[var(--accent)] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">
                      Cost Effective
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      Open-source flexibility with no licensing restrictions
                    </p>
                  </div>
                </div>
              </div>

              <Button>
                <Link to="/services">Explore Odoo Services</Link>
              </Button>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="378"
                src="https://www.youtube.com/embed/nbso3NVz3p8"
                title="What is Odoo in two minutes"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--accent)] font-semibold mb-2">
              Our Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              Comprehensive Odoo Solutions
            </h2>
            <p className="text-[var(--muted-foreground)] mt-4 max-w-2xl mx-auto">
              From implementation to ongoing support, we provide end-to-end ERP
              solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.id}
                  to={industry.to}
                  className="p-6 hover:shadow-lg transition-shadow bg-[var(--card)] border border-[var(--border)] rounded-lg cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-[var(--primary)]" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-[var(--muted-foreground)]">
                    {industry.description}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--accent)] font-semibold mb-2">
              Client Success
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 bg-[var(--card)] border border-[var(--border)] hover:shadow-lg transition-shadow rounded-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[var(--accent)] text-[var(--accent)]"
                    />
                  ))}
                </div>
                <p className="text-[var(--foreground)] mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--muted)]"></div>
                  <div>
                    <p className="font-bold text-[var(--foreground)]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--accent)] font-semibold mb-2">
              Our Proven Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Implementation Strategy
            </h2>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
              A structured 7-step approach ensuring successful Odoo
              implementation and maximum ROI for your organization.
            </p>
          </div>

          <div className="space-y-8 w-full lg:w-1/2 mx-auto">
            {strategySteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={step.number} className="relative">
                  {/* Connecting line */}
                  {idx < strategySteps.length - 1 && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-32 w-0.5 h-16 bg-gradient-to-b from-[var(--accent)] to-transparent"></div>
                  )}

                  <div
                    className={`flex gap-8 items-center ${
                      isEven ? "" : "flex-row-reverse"
                    }`}
                  >
                    {/* Icon side */}
                    <div className="flex-shrink-0 w-20 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[var(--accent)]/20 rounded-full blur-lg"></div>
                        <div className="relative w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center text-slate-900 font-bold text-xl">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Content side */}
                    <div
                      className={`flex-1 ${
                        isEven ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="p-6 rounded-lg backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          {!isEven && (
                            <Icon
                              className="text-[var(--accent)] flex-shrink-0"
                              size={24}
                            />
                          )}
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          {isEven && (
                            <Icon
                              className="text-[var(--accent)] flex-shrink-0"
                              size={24}
                            />
                          )}
                        </div>
                        <p className="text-slate-300">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Button>
              <Link to="/pricing">Calculate Your Implementation Cost</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--primary)] text-[var(--primary-foreground)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our Odoo experts to discuss your
            business requirements and discover how we can help.
          </p>
          <Button className="inline-flex items-center gap-2 bg-[var(--primary-foreground)] text-[var(--primary)] hover:opacity-90 hover:bg-[var(--primary-foreground)]/90 px-6 py-3 rounded-lg">
            <Link className="inline-flex items-center gap-2" to="/contact">
              Schedule Free Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
