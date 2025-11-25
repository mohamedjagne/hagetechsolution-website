import { caseStudies } from "../data/caseStudies"
import Button from "../components/ui/Button"
import { ArrowRight } from "lucide-react"
import { CaseStudyCard } from "../components/CaseStudyCard"
import { Link } from "react-router-dom"

export default function CaseStudies() {
  return (
    <main>
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight mb-4">Our Success Stories</h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Click on any client to explore how we transformed their business with Odoo ERP solutions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                id={study.id}
                company={study.company}
                industry={study.industry}
                logo={study.logo}
                description={study.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--muted)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Consistent Impact Across Industries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-8 text-center border border-[var(--border)] bg-[var(--card)] rounded-3xl shadow-sm">
              <p className="text-3xl font-bold text-[var(--primary)] mb-2">500+</p>
              <p className="text-[var(--foreground)] font-semibold mb-2">Projects Delivered</p>
              <p className="text-sm text-[var(--muted-foreground)]">Across various industries and scales</p>
            </div>
            <div className="p-8 text-center border border-[var(--border)] bg-[var(--card)] rounded-3xl shadow-sm">
              <p className="text-3xl font-bold text-[var(--primary)] mb-2">98%</p>
              <p className="text-[var(--foreground)] font-semibold mb-2">Client Satisfaction</p>
              <p className="text-sm text-[var(--muted-foreground)]">Consistent delivery of excellence</p>
            </div>
            <div className="p-8 text-center border border-[var(--border)] bg-[var(--card)] rounded-3xl shadow-sm">
              <p className="text-3xl font-bold text-[var(--primary)] mb-2">35%</p>
              <p className="text-[var(--foreground)] font-semibold mb-2">Avg Cost Reduction</p>
              <p className="text-sm text-[var(--muted-foreground)]">For our clients post-implementation</p>
            </div>
            <div className="p-8 text-center border border-[var(--border)] bg-[var(--card)] rounded-3xl shadow-sm">
              <p className="text-3xl font-bold text-[var(--primary)] mb-2">2 Years</p>
              <p className="text-[var(--foreground)] font-semibold mb-2">Avg ROI Timeline</p>
              <p className="text-sm text-[var(--muted-foreground)]">Return on investment achieved</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--primary)] text-[var(--primary-foreground)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Transformation?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results. Schedule a consultation to discuss your specific needs and
            opportunities.
          </p>
          <Button className="inline-flex items-center gap-2 bg-[var(--primary-foreground)] text-[var(--primary)] hover:opacity-90 hover:bg-[var(--primary-foreground)]/90 px-6 py-3 rounded-lg">
            <Link className="inline-flex items-center gap-2" to="/contact">Schedule Consultation
            <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
