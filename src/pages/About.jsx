import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import { CheckCircle, Users, Target, Lightbulb } from "lucide-react"

export default function About() {
  const team = [
    {
      name: "David Chen",
      role: "CEO & Founder",
      bio: "Industry veteran with 15+ years in ERP solutions",
      avatar: "/placeholder.svg?key=david1",
    },
    {
      name: "Sarah Williams",
      role: "Director of Implementation",
      bio: "Led 200+ successful Odoo deployments",
      avatar: "/placeholder.svg?key=sarah1",
    },
    {
      name: "Michael Rodriguez",
      role: "Senior Consultant",
      bio: "Expert in Odoo customization and integration",
      avatar: "/placeholder.svg?key=michael1",
    },
    {
      name: "Emma Johnson",
      role: "Training Lead",
      bio: "Specialized in organizational change management",
      avatar: "/placeholder.svg?key=emma1",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed expectations.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with our clients as true partners.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We leverage the latest technology and best practices.",
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "You can count on us to deliver on our promises.",
    },
  ]

  const industries = ["Retail", "Manufacturing", "Trading", "Healthcare", "Education", "Logistics"]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
                About HageTech Solutions
              </h1>
              <p className="text-lg text-[var(--muted-foreground)]">
                We are a leading Odoo ERP consulting and implementation company dedicated to transforming businesses
                through digital solutions. With 15+ years of expertise, we have successfully helped hundreds of
                organizations achieve their operational goals.
              </p>
            </div>
            <div className="relative h-80 md:h-96">
              <img
                src="/hagetechsolution-office.jpeg"
                alt="HageTech Solutions office"
                className="w-full h-full object-cover rounded-lg border border-[var(--border)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-lg border border-[var(--border)] bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Our Mission</h3>
              <p className="text-[var(--muted-foreground)]">
                To empower businesses with transformative Odoo ERP solutions that drive efficiency, scalability, and
                sustainable growth.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/5 to-transparent">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Our Vision</h3>
              <p className="text-[var(--muted-foreground)]">
                To be the most trusted partner for digital transformation across all business sectors and geographies.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-[var(--border)] bg-gradient-to-br from-[var(--secondary)]/5 to-transparent">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Our Values</h3>
              <p className="text-[var(--muted-foreground)]">
                Integrity, excellence, collaboration, and continuous innovation guide everything we do.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:shadow-lg transition-shadow"
                >
                  <Icon className="text-[var(--primary)] mb-4" size={28} />
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{value.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-[var(--muted)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Expertise</h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Decades of combined experience across multiple industries and Odoo versions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">Industries</h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-80">
              <img
                src="/odoo-apps.png"
                alt="Team expertise and skills"
                className="w-full h-full object-cover rounded-lg border border-[var(--border)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Leadership Team</h2>
            <p className="text-[var(--muted-foreground)]">Meet the experts behind your success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40">
                  <img
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[var(--foreground)]">{member.name}</h3>
                  <p className="text-sm text-[var(--primary)] font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-[var(--primary)] text-[var(--primary-foreground)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how HageTech Solutions can help transform your business.
          </p>
          <Button className="inline-flex items-center gap-2 bg-[var(--primary-foreground)] text-[var(--primary)] hover:opacity-90 hover:bg-[var(--primary-foreground)]/90 px-6 py-3 rounded-lg">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
